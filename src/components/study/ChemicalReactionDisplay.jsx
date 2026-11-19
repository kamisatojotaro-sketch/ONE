import React from 'react';

// Vertical structural representations for open-chain carbohydrate molecules
const VERTICAL_STRUCTURES = {
  'CHO–(CHOH)₄–CH₂OH': {
    top: 'CHO',
    middle: '(CHOH)₄',
    bottom: 'CH₂OH',
    defaultName: 'D-Glucose',
    highlight: null,
  },
  'H–C(=N–OH)–(CHOH)₄–CH₂OH': {
    top: 'CH = N–OH',
    middle: '(CHOH)₄',
    bottom: 'CH₂OH',
    defaultName: 'Glucose oxime',
    highlight: 'top',
  },
  'CH(=N–OH)–(CHOH)₄–CH₂OH': {
    top: 'CH = N–OH',
    middle: '(CHOH)₄',
    bottom: 'CH₂OH',
    defaultName: 'Glucose oxime',
    highlight: 'top',
  },
  'CH(OH)(CN)–(CHOH)₄–CH₂OH': {
    top: 'CH(OH)–CN',
    middle: '(CHOH)₄',
    bottom: 'CH₂OH',
    defaultName: 'Glucose cyanohydrin',
    highlight: 'top',
  },
  'COOH–(CHOH)₄–CH₂OH': {
    top: 'COOH',
    middle: '(CHOH)₄',
    bottom: 'CH₂OH',
    defaultName: 'Gluconic acid',
    highlight: 'top',
  },
  'CHO–(CHOCOCH₃)₄–CH₂OCOCH₃': {
    top: 'CHO',
    middle: '(CH–O–COCH₃)₄',
    bottom: 'CH₂–O–COCH₃',
    defaultName: 'Glucose pentaacetate',
    highlight: 'middle-bottom',
  },
  'CHO–(CH–O–COCH₃)₄–CH₂–O–COCH₃': {
    top: 'CHO',
    middle: '(CH–O–COCH₃)₄',
    bottom: 'CH₂–O–COCH₃',
    defaultName: 'Glucose pentaacetate',
    highlight: 'middle-bottom',
  },
  'COOH–(CHOH)₄–COOH': {
    top: 'COOH',
    middle: '(CHOH)₄',
    bottom: 'COOH',
    defaultName: 'Saccharic acid',
    highlight: 'top-bottom',
  },
};

// Parse a single species token like "H–C(=N–OH)–(CHOH)₄–CH₂OH (Glucose oxime)"
function parseSpeciesToken(rawToken) {
  const trimmed = rawToken.trim();
  if (!trimmed) return null;

  // Match trailing parenthetical label if it looks like a compound name or observation (not (aq), (l), (s), (g), (1°))
  let formula = trimmed;
  let label = null;

  const parenMatch = trimmed.match(/^(.+?)\s+\(([^)]+)\)$/);
  if (parenMatch) {
    const candidateFormula = parenMatch[1].trim();
    const candidateLabel = parenMatch[2].trim();
    const isStateOrDegree = /^(aq\.?|l|s|g|alc\.?|conc\.?|dil\.?|1°|2°|3°|excess)$/i.test(candidateLabel);
    if (!isStateOrDegree) {
      formula = candidateFormula;
      label = candidateLabel;
    }
  }

  // Normalize dashes for lookup in VERTICAL_STRUCTURES
  const normFormula = formula.replace(/-/g, '–');
  const vertical = VERTICAL_STRUCTURES[normFormula] || VERTICAL_STRUCTURES[formula];

  return {
    formula,
    label: label || vertical?.defaultName || null,
    vertical,
  };
}

// Split a side of a reaction by " + " (only at top level, not inside parentheses)
function splitReactionSide(sideStr) {
  const parts = [];
  let current = '';
  let depth = 0;

  for (let i = 0; i < sideStr.length; i++) {
    const ch = sideStr[i];
    if (ch === '(' || ch === '[') depth++;
    else if (ch === ')' || ch === ']') depth = Math.max(0, depth - 1);

    if (
      depth === 0 &&
      sideStr.slice(i, i + 3) === ' + '
    ) {
      if (current.trim()) parts.push(current.trim());
      current = '';
      i += 2;
      continue;
    }
    current += ch;
  }
  if (current.trim()) parts.push(current.trim());
  return parts;
}

// Parse a single line equation into segments: [side0, { reagent }, side1, { reagent }, side2, ...]
function parseEquationLine(line) {
  const segments = [];
  // Match arrows of the form: ──(Reagent)──► or ──► or →(Reagent) or → (supports nested parentheses in reagent)
  const arrowRegex = /\s*(?:──+\((.+?)\)──+►|──+►|longrightarrow|→\((.+?)\)|→)\s*/g;

  let lastIndex = 0;
  let match;
  while ((match = arrowRegex.exec(line)) !== null) {
    const before = line.slice(lastIndex, match.index).trim();
    if (before) {
      segments.push({ type: 'side', tokens: splitReactionSide(before).map(parseSpeciesToken).filter(Boolean) });
    }
    const reagent = (match[1] || match[2] || '').trim();
    segments.push({ type: 'arrow', reagent: reagent || null });
    lastIndex = match.index + match[0].length;
  }

  const remaining = line.slice(lastIndex).trim();
  if (remaining) {
    segments.push({ type: 'side', tokens: splitReactionSide(remaining).map(parseSpeciesToken).filter(Boolean) });
  }

  return segments;
}

function VerticalMoleculeBox({ vertical, label }) {
  const topHighlight = vertical.highlight === 'top' || vertical.highlight === 'top-bottom';
  const midHighlight = vertical.highlight === 'middle-bottom';
  const botHighlight = vertical.highlight === 'middle-bottom' || vertical.highlight === 'top-bottom';

  return (
    <div className="inline-flex flex-col items-center px-3.5 py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-default)] shadow-2xs min-w-[115px]">
      <div className="flex flex-col items-center font-mono text-xs sm:text-sm font-bold leading-none">
        {/* Top Carbon Group (C1) */}
        <span
          className={`px-2 py-0.5 rounded-md ${
            topHighlight
              ? 'bg-[var(--accent-primary)]/15 text-[var(--accent-primary)] border border-[var(--accent-primary)]/35'
              : 'text-[var(--text-primary)]'
          }`}
        >
          {vertical.top}
        </span>

        {/* Vertical Covalent Bond Line */}
        <span className="w-[1.5px] h-2.5 bg-[var(--text-muted)] my-0.5 block" />

        {/* Middle Carbon Chain (C2-C5) */}
        <span
          className={`px-2 py-0.5 rounded-md ${
            midHighlight
              ? 'bg-[var(--accent-primary)]/15 text-[var(--accent-primary)] border border-[var(--accent-primary)]/35'
              : 'text-[var(--text-primary)]'
          }`}
        >
          {vertical.middle}
        </span>

        {/* Vertical Covalent Bond Line */}
        <span className="w-[1.5px] h-2.5 bg-[var(--text-muted)] my-0.5 block" />

        {/* Bottom Carbon Group (C6) */}
        <span
          className={`px-2 py-0.5 rounded-md ${
            botHighlight
              ? 'bg-[var(--accent-primary)]/15 text-[var(--accent-primary)] border border-[var(--accent-primary)]/35'
              : 'text-[var(--text-primary)]'
          }`}
        >
          {vertical.bottom}
        </span>
      </div>

      {label && (
        <span className="mt-2 px-2 py-0.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-sans text-[10px] sm:text-[11px] font-semibold text-[var(--accent-primary)] text-center leading-tight">
          {label}
        </span>
      )}
    </div>
  );
}

function SpeciesPill({ token }) {
  if (token.vertical) {
    return <VerticalMoleculeBox vertical={token.vertical} label={token.label} />;
  }

  return (
    <div className="inline-flex flex-col items-center justify-center px-3 py-2 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] min-h-[44px]">
      <span className="font-mono text-xs sm:text-sm font-bold text-[var(--text-primary)] tracking-tight whitespace-nowrap">
        {token.formula}
      </span>
      {token.label && (
        <span className="mt-1 px-2 py-0.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-sans text-[10px] sm:text-[11px] font-semibold text-[var(--accent-primary)] text-center leading-tight">
          {token.label}
        </span>
      )}
    </div>
  );
}

function ReactionArrow({ reagent }) {
  return (
    <div className="inline-flex flex-col items-center justify-center px-2 py-1 min-w-[88px] sm:min-w-[115px] shrink-0">
      {reagent && (
        <span className="mb-1 px-2 py-0.5 rounded-md bg-[var(--bg-elevated)] border border-[var(--border-default)] font-mono text-[10px] sm:text-[11px] font-bold text-[var(--accent-primary)] text-center whitespace-nowrap shadow-2xs">
          {reagent}
        </span>
      )}
      <div className="w-full flex items-center">
        <div className="h-[2px] flex-1 bg-[var(--accent-primary)] rounded-l-full" />
        <svg width="10" height="10" viewBox="0 0 10 10" className="text-[var(--accent-primary)] shrink-0 -ml-0.5">
          <polygon points="0,1 10,5 0,9" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}

export default function ChemicalReactionDisplay({ equation }) {
  if (!equation) return null;

  const lines = String(equation)
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);

  return (
    <div className="space-y-2.5">
      {lines.map((line, lIdx) => {
        // Check if line has an optional prefix like "Wurtz: "
        let prefix = null;
        let cleanLine = line;
        const prefixMatch = line.match(/^([A-Za-z0-9\s\-]+):\s+(.+►.+|.+→.+)$/);
        if (prefixMatch) {
          prefix = prefixMatch[1].trim();
          cleanLine = prefixMatch[2].trim();
        }

        const segments = parseEquationLine(cleanLine);
        const hasArrow = segments.some((s) => s.type === 'arrow');

        if (!hasArrow) {
          return (
            <div
              key={lIdx}
              className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-mono text-xs sm:text-sm font-bold text-[var(--text-primary)] overflow-x-auto"
            >
              {line}
            </div>
          );
        }

        return (
          <div
            key={lIdx}
            className="p-3 sm:p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-default)]"
          >
            {prefix && (
              <div className="mb-2">
                <span className="px-2 py-0.5 rounded-md bg-[var(--bg-elevated)] border border-[var(--border-subtle)] font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                  {prefix}
                </span>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {segments.map((seg, sIdx) => {
                if (seg.type === 'arrow') {
                  return <ReactionArrow key={sIdx} reagent={seg.reagent} />;
                }

                return (
                  <React.Fragment key={sIdx}>
                    {seg.tokens.map((tok, tIdx) => (
                      <React.Fragment key={tIdx}>
                        {tIdx > 0 && (
                          <span className="font-mono text-sm sm:text-base font-bold text-[var(--text-muted)] px-0.5 select-none">
                            +
                          </span>
                        )}
                        <SpeciesPill token={tok} />
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
