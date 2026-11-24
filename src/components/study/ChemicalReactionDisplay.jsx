import React from 'react';

const SUB_MAP = { '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉', 'n': 'ₙ', 'x': 'ₓ' };
const SUP_MAP = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '+': '⁺', '-': '⁻', '−': '⁻' };

const toSub = (str) => String(str).split('').map((c) => SUB_MAP[c] || c).join('');
const toSup = (str) => String(str).split('').map((c) => SUP_MAP[c] || c).join('');

/**
 * Known vertical multi-tier structural species (Glucose, Gluconic acid, Saccharic acid, etc.)
 */
const VERTICAL_STRUCTURES = [
    {
        match: (s) => /^CHO[-–—]\(CHOH\)[₄4][-–—]CH[₂2]OH$/i.test(s.replace(/\s+/g, '')),
        top: 'CHO',
        mid: '(CHOH)₄',
        bot: 'CH₂OH',
        caption: 'D-Glucose',
        tone: 'amber'
    },
    {
        match: (s) => /^COOH[-–—]\(CHOH\)[₄4][-–—]CH[₂2]OH$/i.test(s.replace(/\s+/g, '')),
        top: 'COOH',
        mid: '(CHOH)₄',
        bot: 'CH₂OH',
        caption: 'Gluconic Acid',
        tone: 'emerald'
    },
    {
        match: (s) => /^COOH[-–—]\(CHOH\)[₄4][-–—]COOH$/i.test(s.replace(/\s+/g, '')),
        top: 'COOH',
        mid: '(CHOH)₄',
        bot: 'COOH',
        caption: 'Saccharic Acid',
        tone: 'emerald'
    },
    {
        match: (s) => /^CH[=]N[-–—]OH[-–—]\(CHOH\)[₄4][-–—]CH[₂2]OH$/i.test(s.replace(/\s+/g, '')),
        top: 'CH=N–OH',
        mid: '(CHOH)₄',
        bot: 'CH₂OH',
        caption: 'Glucose Oxime',
        tone: 'sky'
    },
    {
        match: (s) => /^CH\(OH\)\(CN\)[-–—]\(CHOH\)[₄4][-–—]CH[₂2]OH$/i.test(s.replace(/\s+/g, '')),
        top: 'CH(OH)—CN',
        mid: '(CHOH)₄',
        bot: 'CH₂OH',
        caption: 'Glucose Cyanohydrin',
        tone: 'sky'
    },
    {
        match: (s) => /^CHO[-–—]\(CH[-–—]O[-–—]CO[-–—]CH[₃3]\)[₄4][-–—]CH[₂2][-–—]O[-–—]CO[-–—]CH[₃3]$/i.test(s.replace(/\s+/g, '')),
        top: 'CHO',
        mid: '(CH–O–COCH₃)₄',
        bot: 'CH₂–O–COCH₃',
        caption: 'Glucose Pentaacetate',
        tone: 'amber'
    }
];

/**
 * Small eliminated / byproduct molecules that should render inside a dashed yellow/amber capsule
 * matching the user's reference diagram (e.g. H₂O, N₂↑, CO₂↑, HCl, HBr, HI, NaCl, KCl, NaBr, KBr, AgCl↓)
 */
const ELIMINATED_BYPRODUCT_REGEX = /^([0-9]*\s*)?(H₂O|N₂↑?|CO₂↑?|SO₂↑?|H₂↑?|HCl|HBr|HI|NaCl|KCl|NaBr|KBr|NaI|KI|AgCl↓?|Cu₂O↓?|Ag↓?|CH₃COOH|NH₃↑?)(\s*\([^)]+\))?$/i;

/**
 * Parse 2D structural molecules:
 * 1) Carbonyl / Carboxyl / Ester / Amide / Acyl chloride molecules with vertical C=O double bond
 * 2) Benzene / Aryl ring molecules (C₆H₅–X, C₆H₄(X)(Y), Ar–X) with hexagonal aromatic ring SVG
 */
function parse2DStructuralSpecies(cleanToken, noteText) {
    const compact = cleanToken.replace(/\s+/g, '');

    // Extract leading stoichiometric coefficient if present (e.g., "2 CH₃CHO" -> coeff "2", body "CH₃CHO")
    const coeffMatch = cleanToken.match(/^(\d+)\s+(.+)$/);
    const coeff = coeffMatch ? coeffMatch[1] : null;
    const formulaPart = (coeffMatch ? coeffMatch[2] : cleanToken).trim();
    const fCompact = formulaPart.replace(/\s+/g, '');

    // --- 1. Benzene / Aromatic Ring Species (C₆H₅... or C₆H₄... or Benzene) ---
    if (/^(C₆H₅|C6H5|C₆H₄|C6H4|Ar[-–—])/i.test(fCompact) || /^Benzene$/i.test(fCompact)) {
        let rest = fCompact
            .replace(/^(C₆H₅|C6H5)[-–—]?/i, '')
            .replace(/^(C₆H₄|C6H4)[-–—]?/i, '')
            .replace(/^Ar[-–—]?/i, '');

        if (/^Benzene$/i.test(fCompact) || !rest) {
            return {
                kind: 'benzene',
                coeff,
                topGroup: null,
                rightGroup: 'H',
                orthoGroup: null,
                caption: noteText || 'Benzene'
            };
        }

        // Check if disubstituted like (OH)(COOH) or (NH₂)(Br)
        const diMatch = rest.match(/^\(([^)]+)\)\(([^)]+)\)$/);
        if (diMatch) {
            return {
                kind: 'benzene',
                coeff,
                topGroup: diMatch[1],
                rightGroup: diMatch[2],
                caption: noteText || null
            };
        }

        // Check if aromatic ketone/aldehyde/acid/amide on benzene ring: CHO, COOH, COCH₃, COC₆H₅, CONH₂, COCl
        if (/^(CHO|COOH|COCl|CONH₂|COCH₃|COC₆H₅|COONa|COOCH₃)$/i.test(rest)) {
            const rightMap = {
                'CHO': 'H',
                'COOH': 'OH',
                'COCl': 'Cl',
                'CONH₂': 'NH₂',
                'COCH₃': 'CH₃',
                'COC₆H₅': 'C₆H₅',
                'COONa': 'O⁻Na⁺',
                'COOCH₃': 'OCH₃'
            };
            return {
                kind: 'benzene-carbonyl',
                coeff,
                rightGroup: rightMap[rest.toUpperCase()] || rest.slice(2),
                caption: noteText || null
            };
        }

        return {
            kind: 'benzene',
            coeff,
            topGroup: null,
            rightGroup: rest,
            caption: noteText || null
        };
    }

    // --- 2. Carbonyl / Carboxyl / Amide / Ester / Acyl Halide 2D C=O structures ---
    // Patterns with explicit C=O double bond vertically above C:
    // e.g., R–CHO, CH₃CHO, HCHO, R–COOH, CH₃COOH, HCOOH, R–CO–R', CH₃COCH₃, R–CO–NH₂, CH₃CONH₂, R–COCl, CH₃COOC₂H₅
    const carbonylPatterns = [
        // Aldehydes: HCHO, CH₃CHO, CH₃CH₂CHO, R–CHO, RCHO
        {
            regex: /^(H|CH₃|C₂H₅|CH₃CH₂|R|Ar|CCl₃)[-–—]?CHO$/i,
            build: (m) => ({ left: m[1], center: 'C', top: 'O', right: 'H', groupTag: 'Aldehyde (–CHO)' })
        },
        // Carboxylic acids: HCOOH, CH₃COOH, R–COOH, RCOOH, CH₃CH₂COOH
        {
            regex: /^(H|CH₃|C₂H₅|CH₃CH₂|R|Ar)[-–—]?COOH$/i,
            build: (m) => ({ left: m[1], center: 'C', top: 'O', right: 'OH', groupTag: 'Carboxyl (–COOH)' })
        },
        // Carboxylate salts: HCOONa, CH₃COONa, R–COONa, R–COOK
        {
            regex: /^(H|CH₃|C₂H₅|R|Ar)[-–—]?COO(Na|K)$/i,
            build: (m) => ({ left: m[1], center: 'C', top: 'O', right: `O⁻${m[2]}⁺`, groupTag: 'Carboxylate' })
        },
        // Esters: CH₃COOC₂H₅, R–COOR', HCOOCH₃, CH₃COOCH₃
        {
            regex: /^(H|CH₃|C₂H₅|R)[-–—]?COO(CH₃|C₂H₅|R'?)$/i,
            build: (m) => ({ left: m[1], center: 'C', top: 'O', right: `O–${m[2]}`, groupTag: 'Ester (–COOR)' })
        },
        // Amides: R–CONH₂, CH₃CONH₂, R–CO–NH₂
        {
            regex: /^(H|CH₃|C₂H₅|R|Ar)[-–—]?CO[-–—]?NH₂$/i,
            build: (m) => ({ left: m[1], center: 'C', top: 'O', right: 'NH₂', groupTag: 'Amide (–CONH₂)' })
        },
        // Acyl chlorides: R–COCl, CH₃COCl
        {
            regex: /^(CH₃|C₂H₅|R|Ar)[-–—]?COCl$/i,
            build: (m) => ({ left: m[1], center: 'C', top: 'O', right: 'Cl', groupTag: 'Acyl Chloride' })
        },
        // Ketones: CH₃COCH₃, R–CO–R', R–CO–CH₃, CH₃–CO–CH₃
        {
            regex: /^(CH₃|C₂H₅|R)[-–—]?CO[-–—]?(CH₃|C₂H₅|R'?)$/i,
            build: (m) => ({ left: m[1], center: 'C', top: 'O', right: m[2], groupTag: 'Ketone (>C=O)' })
        }
    ];

    for (const pat of carbonylPatterns) {
        const m = fCompact.match(pat.regex);
        if (m) {
            return {
                kind: 'carbonyl-2d',
                coeff,
                ...pat.build(m),
                caption: noteText || null
            };
        }
    }

    // --- 3. Explicit Bonded Functional Group Chains (R–X, R–OH, R–NH₂, R–CN, R–NC, CH₃CH₂OH, etc.) ---
    const bondedChainPatterns = [
        {
            regex: /^(CH₃|C₂H₅|CH₃CH₂|R|\(CH₃\)₃C)[-–—]?(OH|NH₂|CN|NC|Cl|Br|I|X|NO₂|ONO|SH|OCH₃|OC₂H₅)$/,
            build: (m) => ({ left: m[1], right: m[2] })
        }
    ];
    for (const pat of bondedChainPatterns) {
        const m = fCompact.match(pat.regex);
        if (m) {
            return {
                kind: 'bonded-pair',
                coeff,
                ...pat.build(m),
                caption: noteText || null
            };
        }
    }

    return null;
}

/**
 * Clean a raw LaTeX or text chemical string into crisp Unicode chemical notation.
 */
export function cleanChemicalText(raw = '') {
    if (!raw) return '';
    let s = String(raw);

    // Strip \text{...}, \mathrm{...}, \mathbf{...}
    for (let i = 0; i < 4; i++) {
        s = s.replace(/\\(?:text|mathrm|mathbf|textbf|textit)\s*\{([^{}]*)\}/g, '$1');
    }

    // Replace standard LaTeX tokens
    s = s
        .replace(/\\Delta/g, 'Δ')
        .replace(/\\alpha/g, 'α')
        .replace(/\\beta/g, 'β')
        .replace(/\\gamma/g, 'γ')
        .replace(/\\pi/g, 'π')
        .replace(/\\sigma/g, 'σ')
        .replace(/\\uparrow/g, '↑')
        .replace(/\\downarrow/g, '↓')
        .replace(/\\rightleftharpoons/g, '⇌')
        .replace(/\\leftrightarrow/g, '⇌')
        .replace(/\\longrightarrow/g, '→')
        .replace(/\\rightarrow/g, '→')
        .replace(/\\to\b/g, '→')
        .replace(/\\times/g, '×')
        .replace(/\\cdot/g, '·')
        .replace(/\\quad/g, ' ')
        .replace(/\\,/g, ' ');

    // Subscripts: _{...} or _x or )_4
    s = s.replace(/\^\{([^{}]+)\}/g, (_, g) => toSup(g));
    s = s.replace(/\^([0-9+-])/g, (_, g) => toSup(g));
    s = s.replace(/_\{([^{}]+)\}/g, (_, g) => toSub(g));
    s = s.replace(/_([0-9nx])/g, (_, g) => toSub(g));

    // Chemical formula auto-subscripts for elements/parens like H2O, (CHOH)4, CH2OH, Br2, HNO3, C6H12O6, Ag2O
    s = s.replace(/(\)|[A-Z][a-z]?)([0-9]+)/g, (_, prefix, digits) => `${prefix}${toSub(digits)}`);

    // Clean stray braces or backslashes
    s = s.replace(/[{}]/g, '').replace(/\\/g, '').replace(/\s+/g, ' ').trim();
    return s;
}

/**
 * Splits a reaction line into segments: [{ type: 'species', text }, { type: 'arrow', above, below, symbol }]
 */
export function parseReactionSegments(rawLine = '') {
    let line = String(rawLine).trim();

    // Normalize LaTeX xrightarrow / stackrel into ->[above][below]
    line = line.replace(/\\xrightarrow\s*(?:\[([^\]]*)\])?\s*\{([^{}]*)\}/g, (_, below, above) => {
        return below ? `->[${above}][${below}]` : `->[${above}]`;
    });
    line = line.replace(/\\stackrel\s*\{([^{}]*)\}\s*\{\\?(?:longrightarrow|rightarrow|to|rightleftharpoons)\}/g, (_, above) => {
        return `->[${above}]`;
    });

    // Also normalize unicode arrows with parenthetical or bracketed reagent: "→(H⁺)", "──(H⁺)──►", "—[Reagent]→"
    line = line.replace(/[─—–-]+\(\s*([^)]+)\s*\)[─—–-]*(?:→|►|⟶)/g, '->[$1]');
    line = line.replace(/[─—–-]+\[\s*([^\]]+)\s*\][─—–-]*(?:→|►|⟶)/g, '->[$1]');
    line = line.replace(/(?:→|►|⟶)\(\s*([^)]+)\s*\)/g, '->[$1]');
    line = line.replace(/[─—–-]{2,}(?:→|►|⟶)/g, '->');
    line = line.replace(/⟶|►/g, '→');

    const arrowRegex = /(?:<->|->|⇌|→)(?:\[([^\]]*)\])?(?:\[([^\]]*)\])?/g;
    const segments = [];
    let lastIdx = 0;
    let match;

    while ((match = arrowRegex.exec(line)) !== null) {
        const before = line.slice(lastIdx, match.index).trim();
        if (before) {
            segments.push({ type: 'side', raw: before });
        }
        const rawArrow = match[0];
        const isEq = rawArrow.startsWith('<->') || rawArrow.startsWith('⇌');
        segments.push({
            type: 'arrow',
            symbol: isEq ? '⇌' : '→',
            above: cleanChemicalText(match[1] || ''),
            below: cleanChemicalText(match[2] || '')
        });
        lastIdx = match.index + rawArrow.length;
    }

    const tail = line.slice(lastIdx).trim();
    if (tail) {
        segments.push({ type: 'side', raw: tail });
    }

    return segments;
}

/**
 * Splits a reaction side ("A + B") into individual species tokens while respecting parentheses.
 */
function splitPlusTopLevel(sideRaw = '') {
    const cleaned = cleanChemicalText(sideRaw);
    const parts = [];
    let depth = 0;
    let current = '';

    for (let i = 0; i < cleaned.length; i++) {
        const ch = cleaned[i];
        if (ch === '(' || ch === '[') depth++;
        if (ch === ')' || ch === ']') depth = Math.max(0, depth - 1);

        if (ch === '+' && depth === 0 && cleaned[i - 1] === ' ' && cleaned[i + 1] === ' ') {
            if (current.trim()) parts.push(current.trim());
            current = '';
            i++; // skip following space
            continue;
        }
        current += ch;
    }
    if (current.trim()) parts.push(current.trim());
    return parts;
}

/**
 * Small Hexagonal Benzene Ring SVG with realistic double-bond circle inside
 */
const BenzeneHexagonSvg = () => (
    <svg width="28" height="30" viewBox="0 0 28 30" className="shrink-0 overflow-visible">
        <polygon
            points="14,2 25,8.5 25,21.5 14,28 3,21.5 3,8.5"
            fill="rgba(56,189,248,0.1)"
            stroke="#38bdf8"
            strokeWidth="1.8"
        />
        <circle
            cx="14"
            cy="15"
            r="6.2"
            fill="none"
            stroke="#7dd3fc"
            strokeWidth="1.3"
            strokeDasharray="3,1.5"
        />
    </svg>
);

/**
 * Renders a single chemical species — either as:
 * 1) Multi-tier vertical structural block (for Glucose / Gluconic acid / Saccharic acid)
 * 2) Dashed eliminated byproduct capsule (like the yellow/amber H₂O capsule in the reference image)
 * 3) 2D Carbonyl / Carboxyl / Ester / Amide / Ketone structure with vertical C=O double bond
 * 4) 2D Benzene / Aromatic ring structure with hexagonal SVG + substituent bonds
 * 5) 2D Bonded functional group card (R — OH, R — NH₂, R — X)
 * 6) Clean styled formula pill with optional subtitle note
 */
const SpeciesPill = ({ token, isProduct = false }) => {
    // Check if there is a trailing parenthetical name e.g. "CHO-(CHOH)₄-CH₂OH (D-Glucose)"
    let mainToken = token.trim();
    let noteText = '';

    const noteMatch = mainToken.match(/^(.+?)\s+\(([^()]+)\)$/);
    if (noteMatch) {
        const candidateMain = noteMatch[1].trim();
        const candidateNote = noteMatch[2].trim();
        if (/[a-zA-Z]{3,}/.test(candidateNote) && !/^[0-9+-]+$/.test(candidateNote)) {
            mainToken = candidateMain;
            noteText = candidateNote;
        }
    }

    // 1. Check vertical structural species (Glucose / Gluconic / Saccharic / Oxime / Cyanohydrin / Pentaacetate)
    const verticalSpec = VERTICAL_STRUCTURES.find((v) => v.match(mainToken));
    if (verticalSpec) {
        const toneClasses = {
            amber: 'border-[#D4AF37]/35 bg-[#D4AF37]/[0.07] text-[#FBF7EE]',
            emerald: 'border-emerald-400/35 bg-emerald-500/[0.08] text-emerald-100',
            sky: 'border-sky-400/35 bg-sky-500/[0.08] text-sky-100'
        }[verticalSpec.tone || 'amber'];

        return (
            <div className="inline-flex flex-col items-center">
                <div className={`inline-flex flex-col items-center px-3 py-2 rounded-xl border ${toneClasses} shadow-sm font-mono text-xs sm:text-[13px] leading-tight`}>
                    <span className="font-bold tracking-wide text-[#f6e6b4]">{verticalSpec.top}</span>
                    <span className="text-[10px] text-white/40 leading-none my-0.5">|</span>
                    <span className="font-semibold text-white/90">{verticalSpec.mid}</span>
                    <span className="text-[10px] text-white/40 leading-none my-0.5">|</span>
                    <span className="font-semibold text-emerald-200/90">{verticalSpec.bot}</span>
                </div>
                <span className="mt-1 text-[10px] font-medium text-white/60 tracking-wide">
                    {noteText || verticalSpec.caption}
                </span>
            </div>
        );
    }

    // 2. Check if this is an eliminated small molecule / byproduct on the product side (e.g., H₂O, N₂↑, HCl, HBr, Ag↓)
    if (isProduct && ELIMINATED_BYPRODUCT_REGEX.test(mainToken)) {
        return (
            <div className="inline-flex flex-col items-center">
                <div
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border-[1.5px] border-dashed border-amber-400/75 bg-amber-400/[0.12] text-amber-200 font-mono text-xs sm:text-[13px] font-bold shadow-sm"
                    title="Eliminated / Byproduct Molecule"
                >
                    <span>{mainToken}</span>
                </div>
                {noteText && (
                    <span className="mt-1 text-[10px] font-medium text-amber-300/75 tracking-wide">
                        {noteText}
                    </span>
                )}
            </div>
        );
    }

    // 3. Check 2D Structural Species (2D Carbonyl C=O, Benzene Ring, or Bonded Functional Pair)
    const struct2D = parse2DStructuralSpecies(mainToken, noteText);

    if (struct2D?.kind === 'carbonyl-2d') {
        return (
            <div className="inline-flex flex-col items-center">
                <div className="inline-flex items-end gap-0.5 px-3 py-2 rounded-xl border border-sky-400/30 bg-[#0d1f1c]/90 shadow-sm font-mono text-xs sm:text-[13px]">
                    {struct2D.coeff && (
                        <span className="mr-1.5 self-center text-amber-300 font-bold text-sm">{struct2D.coeff}</span>
                    )}
                    {/* Left group */}
                    <span className="font-bold text-emerald-300 pb-0.5">{struct2D.left}</span>
                    <span className="text-white/50 font-bold px-0.5 pb-0.5">—</span>
                    {/* Center C with vertical =O double bond */}
                    <span className="inline-flex flex-col items-center leading-none">
                        <span className="text-sky-300 font-bold text-[12px]">O</span>
                        <span className="text-white/65 font-bold text-[10px] leading-none my-0.5">||</span>
                        <span className="text-sky-400 font-bold">{struct2D.center}</span>
                    </span>
                    <span className="text-white/50 font-bold px-0.5 pb-0.5">—</span>
                    {/* Right group */}
                    <span className="font-bold text-amber-200 pb-0.5">{struct2D.right}</span>
                </div>
                {(struct2D.caption || struct2D.groupTag) && (
                    <span className="mt-1 text-[10px] font-medium text-white/55 tracking-wide">
                        {struct2D.caption || struct2D.groupTag}
                    </span>
                )}
            </div>
        );
    }

    if (struct2D?.kind === 'benzene-carbonyl') {
        return (
            <div className="inline-flex flex-col items-center">
                <div className="inline-flex items-end gap-1 px-3 py-2 rounded-xl border border-sky-400/30 bg-[#0d1f1c]/90 shadow-sm font-mono text-xs sm:text-[13px]">
                    {struct2D.coeff && (
                        <span className="mr-1 self-center text-amber-300 font-bold text-sm">{struct2D.coeff}</span>
                    )}
                    <div className="self-center">
                        <BenzeneHexagonSvg />
                    </div>
                    <span className="text-white/50 font-bold pb-1">—</span>
                    <span className="inline-flex flex-col items-center leading-none pb-0.5">
                        <span className="text-sky-300 font-bold text-[12px]">O</span>
                        <span className="text-white/65 font-bold text-[10px] leading-none my-0.5">||</span>
                        <span className="text-sky-400 font-bold">C</span>
                    </span>
                    <span className="text-white/50 font-bold pb-1">—</span>
                    <span className="font-bold text-amber-200 pb-1">{struct2D.rightGroup}</span>
                </div>
                {struct2D.caption && (
                    <span className="mt-1 text-[10px] font-medium text-white/55 tracking-wide">
                        {struct2D.caption}
                    </span>
                )}
            </div>
        );
    }

    if (struct2D?.kind === 'benzene') {
        return (
            <div className="inline-flex flex-col items-center">
                <div className="inline-flex items-center gap-1 px-3 py-2 rounded-xl border border-sky-400/30 bg-[#0d1f1c]/90 shadow-sm font-mono text-xs sm:text-[13px]">
                    {struct2D.coeff && (
                        <span className="mr-1 text-amber-300 font-bold text-sm">{struct2D.coeff}</span>
                    )}
                    <div className="inline-flex flex-col items-center">
                        {struct2D.topGroup && (
                            <>
                                <span className="text-[11px] font-bold text-emerald-300 leading-none">{struct2D.topGroup}</span>
                                <span className="text-[9px] text-white/50 leading-none my-0.5">|</span>
                            </>
                        )}
                        <BenzeneHexagonSvg />
                    </div>
                    {struct2D.rightGroup && struct2D.rightGroup !== 'H' && (
                        <>
                            <span className="text-white/50 font-bold">—</span>
                            <span className="font-bold text-amber-200">{struct2D.rightGroup}</span>
                        </>
                    )}
                </div>
                {struct2D.caption && (
                    <span className="mt-1 text-[10px] font-medium text-white/55 tracking-wide">
                        {struct2D.caption}
                    </span>
                )}
            </div>
        );
    }

    if (struct2D?.kind === 'bonded-pair') {
        return (
            <div className="inline-flex flex-col items-center">
                <div className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-white/15 bg-white/[0.04] font-mono text-xs sm:text-[13px]">
                    {struct2D.coeff && (
                        <span className="mr-1 text-amber-300 font-bold">{struct2D.coeff}</span>
                    )}
                    <span className="font-semibold text-emerald-300">{struct2D.left}</span>
                    <span className="text-amber-400/80 font-bold">—</span>
                    <span className="font-bold text-sky-300">{struct2D.right}</span>
                </div>
                {struct2D.caption && (
                    <span className="mt-1 text-[10px] font-medium text-white/55 tracking-wide">
                        {struct2D.caption}
                    </span>
                )}
            </div>
        );
    }

    // 4. Default clean species badge
    return (
        <div className="inline-flex flex-col items-center">
            <span
                className={`inline-flex items-center px-2.5 py-1.5 rounded-lg font-mono text-xs sm:text-[13px] font-semibold tracking-tight border ${
                    isProduct
                        ? 'bg-emerald-500/[0.07] border-emerald-400/25 text-emerald-100'
                        : 'bg-white/[0.04] border-white/12 text-white/90'
                }`}
            >
                {mainToken}
            </span>
            {noteText && (
                <span className="mt-1 text-[10px] font-medium text-white/55 tracking-wide">
                    {noteText}
                </span>
            )}
        </div>
    );
};

/**
 * Renders a reaction arrow with reagent pill above, condition below, and dashed capsule if minus-byproduct (e.g. -H₂O)
 */
const ReactionArrow = ({ above, below, symbol = '→' }) => {
    const isElimination = /^[-–—]\s*(H₂O|HX|HCl|HBr|NH₃|CO₂|N₂)/i.test(above || '') || /^[-–—]\s*(H₂O|HX|HCl|HBr|NH₃|CO₂|N₂)/i.test(below || '');
    return (
        <div className="inline-flex flex-col items-center justify-center px-2 min-w-[74px] select-none">
            {above ? (
                <span
                    className={`px-2 py-0.5 mb-1 rounded-md text-[10px] sm:text-[11px] font-mono font-semibold whitespace-nowrap ${
                        /^[-–—]/.test(above)
                            ? 'rounded-full border border-dashed border-amber-400/70 bg-amber-400/15 text-amber-200'
                            : 'bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#f5e3a6]'
                    }`}
                >
                    {above}
                </span>
            ) : (
                <span className="h-3" />
            )}
            <div className="w-full flex items-center">
                <div className={`h-[2px] flex-1 ${isElimination ? 'bg-amber-400/75' : 'bg-[#D4AF37]/75'}`} />
                <span className="text-[#D4AF37] text-sm font-bold leading-none -ml-0.5">
                    {symbol === '⇌' ? '⇌' : '▸'}
                </span>
            </div>
            {below ? (
                <span
                    className={`mt-1 px-1.5 py-0.5 text-[10px] font-mono whitespace-nowrap ${
                        /^[-–—]/.test(below)
                            ? 'rounded-full border border-dashed border-amber-400/70 bg-amber-400/15 text-amber-200 font-semibold'
                            : 'text-white/65'
                    }`}
                >
                    {below}
                </span>
            ) : (
                <span className="h-2" />
            )}
        </div>
    );
};

/**
 * Detects whether a formula string is a chemical reaction equation (contains reaction arrows ->[...] or \xrightarrow or organic structural formulas).
 */
export function isChemicalReactionFormula(formula = '') {
    if (!formula) return false;
    const s = String(formula);
    return (
        /->\s*\[/.test(s) ||
        /<->\s*\[/.test(s) ||
        /\\xrightarrow/.test(s) ||
        /\\stackrel\{[^{}]*\}\{\\?(?:longrightarrow|rightarrow|to)\}/.test(s) ||
        /\(CHOH\)_[4₄]/.test(s) ||
        /CHO[-–]\(CHOH\)/.test(s) ||
        (/\\text\{[^}]*(?:CHO|COOH|CH_2OH|CH_3|C_6H_5|NH_2|OH)[^}]*\}/.test(s) && /\\(?:rightarrow|longrightarrow|to|rightleftharpoons)/.test(s))
    );
}

/**
 * Renders one or more chemical reaction equations (separated by ; or \quad | \quad or newlines)
 * as clean structural blocks and reagent-over-arrow visual cards.
 */
export const ChemicalReactionDisplay = ({ formula = '', equation = '' }) => {
    const sourceFormula = formula || equation || '';
    const rawEquations = String(sourceFormula)
        .split(/(?:\\quad\s*\|\s*\\quad|\s+\|\s+|;\s+(?=[A-Z0-9\\]))/g)
        .map((eq) => eq.trim())
        .filter(Boolean);

    return (
        <div className="flex flex-col gap-3 w-full">
            {rawEquations.map((eq, eqIdx) => {
                const segments = parseReactionSegments(eq);
                let seenArrow = false;

                return (
                    <div
                        key={eqIdx}
                        className="flex flex-wrap items-center gap-y-3 gap-x-1.5 px-3.5 py-3 rounded-xl bg-[#091513]/85 border border-white/[0.08]"
                    >
                        {segments.map((seg, segIdx) => {
                            if (seg.type === 'arrow') {
                                seenArrow = true;
                                return (
                                    <ReactionArrow
                                        key={segIdx}
                                        above={seg.above}
                                        below={seg.below}
                                        symbol={seg.symbol}
                                    />
                                );
                            }

                            const speciesList = splitPlusTopLevel(seg.raw);
                            return (
                                <React.Fragment key={segIdx}>
                                    {speciesList.map((sp, spIdx) => (
                                        <React.Fragment key={`${segIdx}-${spIdx}`}>
                                            {spIdx > 0 && (
                                                <span className="px-1 text-white/45 font-mono font-bold text-sm select-none">
                                                    +
                                                </span>
                                            )}
                                            <SpeciesPill token={sp} isProduct={seenArrow} />
                                        </React.Fragment>
                                    ))}
                                </React.Fragment>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default ChemicalReactionDisplay;
