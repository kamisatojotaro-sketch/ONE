import { useState } from 'react';
import { Sparkles, ArrowRight, BookOpen, Layers, CheckCircle2, AlertCircle, Info, ChevronDown, ChevronUp, Zap } from 'lucide-react';
import { REACTION_DIAGRAMS } from '../../data/reactionDiagramsData';

// Reusable SVG Chemical Structure Drawings
function SvgBenzene({ label = '', sub = '', color = 'var(--text-primary)' }) {
  return (
    <div className="flex flex-col items-center justify-center p-2">
      <svg width="80" height="92" viewBox="0 0 80 92" className="overflow-visible">
        {/* Top attachment if label */}
        {label && (
          <g>
            <line x1="40" y1="20" x2="40" y2="4" stroke={color} strokeWidth="2.5" />
            <text x="40" y="0" textAnchor="middle" fill="var(--accent-primary)" fontSize="11" fontWeight="bold" fontFamily="monospace">
              {label}
            </text>
          </g>
        )}
        {/* Hexagon ring */}
        <polygon
          points="40,20 68,36 68,68 40,84 12,68 12,36"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Inner aromatic circle */}
        <circle cx="40" cy="52" r="18" fill="none" stroke={color} strokeWidth="1.8" strokeDasharray="4 3" />
      </svg>
      {sub && <span className="text-[11px] font-mono text-[var(--text-muted)] text-center mt-1">{sub}</span>}
    </div>
  );
}

function SvgOrthoSubstitutedBenzene({ r1 = 'OH', r2 = 'CHO', sub = 'Salicylaldehyde' }) {
  return (
    <div className="flex flex-col items-center justify-center p-2">
      <svg width="90" height="95" viewBox="0 0 90 95" className="overflow-visible">
        {/* Top attachment R1 at C1 */}
        <line x1="40" y1="24" x2="40" y2="8" stroke="var(--accent-primary)" strokeWidth="2.5" />
        <text x="40" y="4" textAnchor="middle" fill="#ef4444" fontSize="11" fontWeight="bold" fontFamily="monospace">
          {r1}
        </text>

        {/* Ortho attachment R2 at C2 */}
        <line x1="68" y1="40" x2="84" y2="30" stroke="var(--accent-primary)" strokeWidth="2.5" />
        <text x="86" y="28" textAnchor="start" fill="#3b82f6" fontSize="11" fontWeight="bold" fontFamily="monospace">
          {r2}
        </text>

        {/* Hexagon ring */}
        <polygon
          points="40,24 68,40 68,72 40,88 12,72 12,40"
          fill="none"
          stroke="var(--text-primary)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Inner aromatic circle */}
        <circle cx="40" cy="56" r="18" fill="none" stroke="var(--text-primary)" strokeWidth="1.8" strokeDasharray="4 3" />
      </svg>
      {sub && <span className="text-[11px] font-mono font-bold text-[var(--text-primary)] text-center mt-1">{sub}</span>}
    </div>
  );
}

// Visual Reaction Diagram for a single reaction object
export function SingleReactionDiagram({ rxn }) {
  const [showMechanism, setShowMechanism] = useState(false);

  return (
    <div className="border border-[var(--border-default)] rounded-2xl bg-[var(--bg-surface)] p-4 sm:p-5 space-y-4 shadow-sm hover:border-[var(--accent-primary)]/50 transition-all">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[var(--accent-primary)]/15 text-[var(--accent-primary)]">
              {rxn.category.toUpperCase()} DIAGRAM
            </span>
            <span className="text-xs font-mono text-[var(--text-muted)]">
              NCERT CBSE Class 12
            </span>
          </div>
          <h4 className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)] mt-1">
            {rxn.title}
          </h4>
          {rxn.subtitle && (
            <p className="text-xs text-[var(--text-secondary)] mt-0.5">
              {rxn.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Main Visual Reaction Diagram Flow Scheme */}
      <div className="bg-[var(--bg-base)] p-3 sm:p-4 rounded-xl border border-[var(--border-subtle)] overflow-x-auto scrollbar-none touch-pan-x">
        {/* Render Customized Visual Diagram by Type */}
        {rxn.diagramType === 'cumene' && (
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 py-2 min-w-[500px]">
            {/* Step 1 Reactant: Cumene */}
            <div className="flex flex-col items-center bg-[var(--bg-surface)] p-3 rounded-xl border border-[var(--border-default)] shadow-2xs">
              <span className="text-[10px] font-mono font-bold text-[var(--text-muted)] uppercase mb-1">Starting Material</span>
              <SvgBenzene label="CH(CH₃)₂" sub="Cumene (Isopropylbenzene)" />
            </div>

            {/* Reaction Arrow 1: Air Oxidation */}
            <div className="flex flex-col items-center px-1">
              <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400">+ O₂ (Air)</span>
              <div className="w-16 h-0.5 bg-[var(--accent-primary)] my-1 relative">
                <span className="absolute right-0 -top-1 border-t-4 border-b-4 border-l-6 border-t-transparent border-b-transparent border-l-[var(--accent-primary)]" />
              </div>
              <span className="text-[10px] font-mono text-[var(--text-muted)]">368–408 K</span>
            </div>

            {/* Intermediate: Cumene Hydroperoxide */}
            <div className="flex flex-col items-center bg-[var(--bg-surface)] p-3 rounded-xl border border-amber-500/40 shadow-2xs">
              <span className="text-[10px] font-mono font-bold text-amber-500 uppercase mb-1">Peroxide Intermediate</span>
              <SvgBenzene label="C(CH₃)₂—OOH" sub="Cumene Hydroperoxide" />
            </div>

            {/* Reaction Arrow 2: Acid Hydrolysis */}
            <div className="flex flex-col items-center px-1">
              <span className="text-[11px] font-mono font-bold text-blue-600 dark:text-blue-400">dil. H₂SO₄</span>
              <div className="w-16 h-0.5 bg-[var(--accent-primary)] my-1 relative">
                <span className="absolute right-0 -top-1 border-t-4 border-b-4 border-l-6 border-t-transparent border-b-transparent border-l-[var(--accent-primary)]" />
              </div>
              <span className="text-[10px] font-mono text-[var(--text-muted)]">H⁺ / H₂O (Δ)</span>
            </div>

            {/* Products: Phenol + Acetone */}
            <div className="flex items-center gap-3 bg-[var(--bg-surface)] p-3 rounded-xl border border-emerald-500/40 shadow-2xs">
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase mb-1">Main Product</span>
                <SvgBenzene label="OH" sub="Phenol (Carbolic Acid)" color="#10b981" />
              </div>
              <span className="text-xl font-bold text-[var(--text-muted)]">+</span>
              <div className="flex flex-col items-center p-2">
                <span className="text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400 uppercase mb-2">By-Product</span>
                <div className="font-mono text-xs font-bold bg-[var(--bg-elevated)] p-2 rounded-lg border border-[var(--border-subtle)] text-center">
                  CH₃—C(=O)—CH₃
                </div>
                <span className="text-[11px] font-mono text-[var(--text-muted)] mt-1">Acetone (Propanone)</span>
              </div>
            </div>
          </div>
        )}

        {rxn.diagramType === 'reimer-tiemann' && (
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 py-2 min-w-[500px]">
            {/* Reactant: Phenol */}
            <div className="flex flex-col items-center bg-[var(--bg-surface)] p-3 rounded-xl border border-[var(--border-default)] shadow-2xs">
              <span className="text-[10px] font-mono font-bold text-[var(--text-muted)] uppercase mb-1">Substrate</span>
              <SvgBenzene label="OH" sub="Phenol" />
            </div>

            {/* Reaction Arrow */}
            <div className="flex flex-col items-center px-1">
              <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400">CHCl₃ + 3 NaOH (aq)</span>
              <div className="w-20 h-0.5 bg-[var(--accent-primary)] my-1 relative">
                <span className="absolute right-0 -top-1 border-t-4 border-b-4 border-l-6 border-t-transparent border-b-transparent border-l-[var(--accent-primary)]" />
              </div>
              <span className="text-[10px] font-mono text-[var(--text-muted)]">340 K, then H⁺</span>
            </div>

            {/* Intermediate Carbenoid */}
            <div className="flex flex-col items-center bg-[var(--bg-surface)] p-3 rounded-xl border border-amber-500/40 shadow-2xs">
              <span className="text-[10px] font-mono font-bold text-amber-500 uppercase mb-1">Active Electrophile</span>
              <div className="font-mono text-xs font-bold p-3 bg-[var(--bg-elevated)] rounded-lg text-center">
                :CCl₂<br />
                <span className="text-[10px] font-normal text-[var(--text-muted)]">Dichlorocarbene</span>
              </div>
            </div>

            <ArrowRight size={20} className="text-[var(--text-muted)] shrink-0" />

            {/* Product: Salicylaldehyde */}
            <div className="flex flex-col items-center bg-[var(--bg-surface)] p-3 rounded-xl border border-emerald-500/40 shadow-2xs">
              <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase mb-1">Major Product</span>
              <SvgOrthoSubstitutedBenzene r1="OH" r2="CHO" sub="Salicylaldehyde (2-Hydroxybenzaldehyde)" />
            </div>
          </div>
        )}

        {rxn.diagramType === 'kolbe' && (
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 py-2 min-w-[500px]">
            {/* Reactant: Phenol */}
            <div className="flex flex-col items-center bg-[var(--bg-surface)] p-3 rounded-xl border border-[var(--border-default)] shadow-2xs">
              <SvgBenzene label="OH" sub="Phenol" />
            </div>

            {/* Arrow 1: NaOH */}
            <div className="flex flex-col items-center px-1">
              <span className="text-[11px] font-mono font-bold text-blue-600 dark:text-blue-400">+ NaOH (- H₂O)</span>
              <div className="w-16 h-0.5 bg-[var(--accent-primary)] my-1 relative">
                <span className="absolute right-0 -top-1 border-t-4 border-b-4 border-l-6 border-t-transparent border-b-transparent border-l-[var(--accent-primary)]" />
              </div>
            </div>

            {/* Phenoxide */}
            <div className="flex flex-col items-center bg-[var(--bg-surface)] p-3 rounded-xl border border-blue-500/40 shadow-2xs">
              <span className="text-[10px] font-mono font-bold text-blue-500 uppercase mb-1">Activated Intermediate</span>
              <SvgBenzene label="O⁻ Na⁺" sub="Sodium Phenoxide" color="#3b82f6" />
            </div>

            {/* Arrow 2: CO2 + H+ */}
            <div className="flex flex-col items-center px-1">
              <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400">(i) CO₂ (400 K, 4–7 atm)</span>
              <div className="w-20 h-0.5 bg-[var(--accent-primary)] my-1 relative">
                <span className="absolute right-0 -top-1 border-t-4 border-b-4 border-l-6 border-t-transparent border-b-transparent border-l-[var(--accent-primary)]" />
              </div>
              <span className="text-[10px] font-mono text-[var(--text-muted)]">(ii) H⁺ (Acidification)</span>
            </div>

            {/* Product: Salicylic Acid */}
            <div className="flex flex-col items-center bg-[var(--bg-surface)] p-3 rounded-xl border border-emerald-500/40 shadow-2xs">
              <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase mb-1">Aspirin Precursor</span>
              <SvgOrthoSubstitutedBenzene r1="OH" r2="COOH" sub="Salicylic Acid (2-Hydroxybenzoic Acid)" />
            </div>
          </div>
        )}

        {rxn.diagramType === 'sn2' && (
          <div className="space-y-4 py-2">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 min-w-[550px]">
              {/* Backside Attack */}
              <div className="flex flex-col items-center bg-[var(--bg-surface)] p-3 rounded-xl border border-[var(--border-default)]">
                <span className="text-[10px] font-mono font-bold text-blue-500 uppercase mb-1">180° Backside Attack</span>
                <div className="font-mono text-sm font-bold p-3 text-center">
                  <span className="text-blue-500">HO:⁻</span> ───&gt; <span className="text-amber-500">H₃C—Cl</span>
                </div>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">Nucleophile approaches directly opposite Leaving Group</span>
              </div>

              <ArrowRight size={22} className="text-[var(--text-muted)] shrink-0" />

              {/* Pentacoordinate Transition State */}
              <div className="flex flex-col items-center bg-[var(--bg-surface)] p-3 rounded-xl border-2 border-dashed border-amber-500/60 shadow-xs">
                <span className="text-[10px] font-mono font-bold text-amber-500 uppercase mb-1">Pentacoordinate Transition State [‡]</span>
                <div className="font-mono text-base font-bold p-3 text-center tracking-wider text-[var(--text-primary)]">
                  [ <span className="text-blue-500">HO</span><span className="text-amber-500 font-normal"> ··· </span><span className="underline">CH₃</span><span className="text-amber-500 font-normal"> ··· </span><span className="text-rose-500">Cl</span> ]<sup className="text-xs">‡</sup>
                </div>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">C is sp² planar; simultaneous bond breaking & making</span>
              </div>

              <ArrowRight size={22} className="text-[var(--text-muted)] shrink-0" />

              {/* Inverted Product */}
              <div className="flex flex-col items-center bg-[var(--bg-surface)] p-3 rounded-xl border border-emerald-500/40 shadow-xs">
                <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase mb-1">100% Walden Inversion</span>
                <div className="font-mono text-sm font-bold p-3 text-center">
                  <span className="text-emerald-600 dark:text-emerald-400">HO—CH₃</span> + <span className="text-rose-500">Cl⁻</span>
                </div>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">Inverted umbrella stereochemistry</span>
              </div>
            </div>

            <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] text-xs font-mono text-center">
              <strong className="text-[var(--text-primary)]">Order of Reactivity:</strong> CH₃X &gt; 1° &gt; 2° &gt; 3° (Tertiary is unreactive due to steric bulk)
            </div>
          </div>
        )}

        {rxn.diagramType === 'sn1' && (
          <div className="space-y-4 py-2">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 min-w-[550px]">
              {/* Step 1: Slow ionization */}
              <div className="flex flex-col items-center bg-[var(--bg-surface)] p-3 rounded-xl border border-[var(--border-default)]">
                <span className="text-[10px] font-mono font-bold text-rose-500 uppercase mb-1">Step 1 (Slow / r.d.s)</span>
                <div className="font-mono text-sm font-bold p-3 text-center">
                  (CH₃)₃C—Br ──&gt;
                </div>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">Heterolytic cleavage in polar protic solvent</span>
              </div>

              {/* Planar Carbocation */}
              <div className="flex flex-col items-center bg-[var(--bg-surface)] p-3 rounded-xl border-2 border-amber-500/50">
                <span className="text-[10px] font-mono font-bold text-amber-500 uppercase mb-1">Planar Intermediate</span>
                <div className="font-mono text-base font-bold p-3 text-center">
                  [(CH₃)₃C]⁺ + Br⁻
                </div>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">sp² Trigonal Planar (120° angles)</span>
              </div>

              {/* Step 2: 50/50 Attack */}
              <div className="flex flex-col items-center bg-[var(--bg-surface)] p-3 rounded-xl border border-emerald-500/40">
                <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase mb-1">Step 2 (Fast Front/Back Attack)</span>
                <div className="font-mono text-xs font-bold p-2 text-center space-y-1">
                  <div>50% Retention: (CH₃)₃C—OH</div>
                  <div>50% Inversion: HO—C(CH₃)₃</div>
                </div>
                <span className="text-[10px] font-mono text-emerald-500 font-bold">Racemic Mixture (Optically Inactive)</span>
              </div>
            </div>

            <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] text-xs font-mono text-center">
              <strong className="text-[var(--text-primary)]">Order of Reactivity:</strong> 3° &gt; 2° &gt; 1° &gt; CH₃X (Governed by stability of intermediate carbocation)
            </div>
          </div>
        )}

        {rxn.diagramType === 'saytzeff' && (
          <div className="space-y-3 py-2">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 min-w-[550px]">
              {/* Reactant: 2-Bromobutane */}
              <div className="flex flex-col items-center bg-[var(--bg-surface)] p-3 rounded-xl border border-[var(--border-default)]">
                <span className="text-[10px] font-mono font-bold text-[var(--text-muted)] uppercase mb-1">Substrate</span>
                <div className="font-mono text-xs font-bold p-2 text-center">
                  CH₃—CH₂—CH(Br)—CH₃<br />
                  <span className="text-[10px] text-amber-500">β₂ (CH₂) &nbsp; α(C-Br) &nbsp; β₁(CH₃)</span>
                </div>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">2-Bromobutane</span>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center px-1">
                <span className="text-[11px] font-mono font-bold text-rose-500">alc. KOH, Δ</span>
                <div className="w-16 h-0.5 bg-[var(--accent-primary)] my-1 relative">
                  <span className="absolute right-0 -top-1 border-t-4 border-b-4 border-l-6 border-t-transparent border-b-transparent border-l-[var(--accent-primary)]" />
                </div>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">- HBr</span>
              </div>

              {/* Products Breakdown */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="flex flex-col items-center bg-[var(--bg-surface)] p-3 rounded-xl border-2 border-emerald-500/60 shadow-2xs">
                  <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase mb-1">81% Major Product</span>
                  <div className="font-mono text-xs font-bold p-2 text-center text-emerald-600 dark:text-emerald-400">
                    CH₃—CH=CH—CH₃
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[var(--text-primary)]">But-2-ene (Saytzeff)</span>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">More substituted (6 α-H)</span>
                </div>

                <div className="flex flex-col items-center bg-[var(--bg-surface)] p-3 rounded-xl border border-[var(--border-default)] opacity-70">
                  <span className="text-[10px] font-mono font-bold text-[var(--text-muted)] uppercase mb-1">19% Minor Product</span>
                  <div className="font-mono text-xs font-bold p-2 text-center">
                    CH₃—CH₂—CH=CH₂
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[var(--text-secondary)]">But-1-ene (Hofmann)</span>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">Less substituted (2 α-H)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {rxn.diagramType === 'daniell-cell' && (
          <div className="space-y-4 py-2">
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 sm:gap-6 min-w-[550px]">
              {/* Anode Half Cell */}
              <div className="flex-1 bg-[var(--bg-surface)] p-4 rounded-xl border-2 border-blue-500/50 space-y-2">
                <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-1.5">
                  <span className="text-xs font-mono font-bold text-blue-500 uppercase">ANODE (- Negative Terminal)</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/15 text-blue-500 font-bold">OXIDATION</span>
                </div>
                <div className="font-mono text-xs space-y-1">
                  <div><strong>Electrode:</strong> Zinc Plate (Zn)</div>
                  <div><strong>Solution:</strong> 1.0 M ZnSO₄ (aq)</div>
                  <div className="p-2 bg-[var(--bg-elevated)] rounded border border-blue-500/30 text-blue-600 dark:text-blue-400 font-bold text-center">
                    Zn(s) ⟶ Zn²⁺(aq) + 2e⁻ &nbsp; (E° = -0.76 V)
                  </div>
                </div>
              </div>

              {/* Salt Bridge & Wire */}
              <div className="flex flex-col items-center justify-center p-2 min-w-[120px] text-center space-y-2">
                <div className="px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-[10px] font-mono font-bold text-amber-500">
                  e⁻ Flow: Zn ⟶ Cu
                </div>
                <div className="w-16 h-8 border-t-2 border-r-2 border-l-2 border-amber-500/60 rounded-t-lg relative flex items-center justify-center">
                  <span className="text-[9px] font-mono font-bold text-amber-500">Salt Bridge</span>
                </div>
                <div className="text-[10px] font-mono text-[var(--text-muted)]">
                  KCl / Agar-Agar gel<br />
                  Current: Cu ⟶ Zn
                </div>
              </div>

              {/* Cathode Half Cell */}
              <div className="flex-1 bg-[var(--bg-surface)] p-4 rounded-xl border-2 border-emerald-500/50 space-y-2">
                <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-1.5">
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase">CATHODE (+ Positive Terminal)</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold">REDUCTION</span>
                </div>
                <div className="font-mono text-xs space-y-1">
                  <div><strong>Electrode:</strong> Copper Plate (Cu)</div>
                  <div><strong>Solution:</strong> 1.0 M CuSO₄ (aq)</div>
                  <div className="p-2 bg-[var(--bg-elevated)] rounded border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-bold text-center">
                    Cu²⁺(aq) + 2e⁻ ⟶ Cu(s) &nbsp; (E° = +0.34 V)
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between text-xs font-mono gap-2">
              <div>
                <strong>Cell Notation:</strong> Zn(s) | Zn²⁺(aq, 1 M) || Cu²⁺(aq, 1 M) | Cu(s)
              </div>
              <div className="font-bold text-[var(--accent-primary)]">
                E°_cell = +0.34 V − (−0.76 V) = +1.10 V
              </div>
            </div>
          </div>
        )}

        {rxn.diagramType === 'kmno4-flow' && (
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 py-2 min-w-[500px]">
            {/* Step 1: Pyrolusite */}
            <div className="flex flex-col items-center bg-[var(--bg-surface)] p-3 rounded-xl border border-[var(--border-default)]">
              <span className="text-[10px] font-mono font-bold text-[var(--text-muted)] uppercase mb-1">Ore</span>
              <div className="font-mono text-xs font-bold p-2 text-center">
                MnO₂ (Black)
              </div>
              <span className="text-[10px] font-mono text-[var(--text-muted)]">Pyrolusite Ore (Mn⁴⁺)</span>
            </div>

            {/* Fusion Arrow */}
            <div className="flex flex-col items-center px-1">
              <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400">Fused with KOH + O₂</span>
              <div className="w-16 h-0.5 bg-[var(--accent-primary)] my-1 relative">
                <span className="absolute right-0 -top-1 border-t-4 border-b-4 border-l-6 border-t-transparent border-b-transparent border-l-[var(--accent-primary)]" />
              </div>
              <span className="text-[10px] font-mono text-[var(--text-muted)]">Air oxidation</span>
            </div>

            {/* Intermediate: Manganate */}
            <div className="flex flex-col items-center bg-emerald-950/20 p-3 rounded-xl border-2 border-emerald-600">
              <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase mb-1">Manganate Ion</span>
              <div className="font-mono text-sm font-bold p-2 text-center text-emerald-600 dark:text-emerald-400">
                K₂MnO₄ (Dark Green)
              </div>
              <span className="text-[10px] font-mono text-[var(--text-muted)]">Paramagnetic [MnO₄]²⁻ (Mn⁶⁺)</span>
            </div>

            {/* Acid Disproportionation Arrow */}
            <div className="flex flex-col items-center px-1">
              <span className="text-[11px] font-mono font-bold text-purple-600 dark:text-purple-400">Acid Disproportionation (4H⁺)</span>
              <div className="w-20 h-0.5 bg-[var(--accent-primary)] my-1 relative">
                <span className="absolute right-0 -top-1 border-t-4 border-b-4 border-l-6 border-t-transparent border-b-transparent border-l-[var(--accent-primary)]" />
              </div>
              <span className="text-[10px] font-mono text-[var(--text-muted)]">or Electrolytic Oxidation</span>
            </div>

            {/* Product: Permanganate */}
            <div className="flex flex-col items-center bg-purple-950/20 p-3 rounded-xl border-2 border-purple-600 shadow-sm">
              <span className="text-[10px] font-mono font-bold text-purple-600 dark:text-purple-400 uppercase mb-1">Permanganate Ion</span>
              <div className="font-mono text-sm font-bold p-2 text-center text-purple-600 dark:text-purple-400">
                KMnO₄ (Deep Purple)
              </div>
              <span className="text-[10px] font-mono text-[var(--text-muted)]">Diamagnetic [MnO₄]⁻ (Mn⁷⁺)</span>
            </div>
          </div>
        )}

        {rxn.diagramType === 'k2cr2o7-flow' && (
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-4 py-2 min-w-[550px]">
            {/* Chromite ore */}
            <div className="flex flex-col items-center bg-[var(--bg-surface)] p-2.5 rounded-xl border border-[var(--border-default)]">
              <span className="text-[9px] font-mono font-bold text-[var(--text-muted)] uppercase">Stage 1: Ore</span>
              <div className="font-mono text-xs font-bold p-1 text-center">FeCr₂O₄ (Chromite)</div>
            </div>

            <ArrowRight size={16} className="text-[var(--text-muted)] shrink-0" />

            {/* Yellow Chromate */}
            <div className="flex flex-col items-center bg-amber-950/20 p-2.5 rounded-xl border border-amber-500">
              <span className="text-[9px] font-mono font-bold text-amber-500 uppercase">Stage 2: Roast (Na₂CO₃ + O₂)</span>
              <div className="font-mono text-xs font-bold p-1 text-center text-amber-500">Na₂CrO₄ (Yellow Solution)</div>
            </div>

            <ArrowRight size={16} className="text-[var(--text-muted)] shrink-0" />

            {/* Orange Dichromate */}
            <div className="flex flex-col items-center bg-orange-950/20 p-2.5 rounded-xl border border-orange-500">
              <span className="text-[9px] font-mono font-bold text-orange-500 uppercase">Stage 3: Acidify (H⁺)</span>
              <div className="font-mono text-xs font-bold p-1 text-center text-orange-500">Na₂Cr₂O₇ (Orange Solution)</div>
            </div>

            <ArrowRight size={16} className="text-[var(--text-muted)] shrink-0" />

            {/* Potassium Exchange */}
            <div className="flex flex-col items-center bg-orange-950/30 p-2.5 rounded-xl border-2 border-orange-600 shadow-xs">
              <span className="text-[9px] font-mono font-bold text-orange-600 dark:text-orange-400 uppercase">Final Product (+ 2 KCl)</span>
              <div className="font-mono text-xs font-bold p-1 text-center text-orange-600 dark:text-orange-400">
                K₂Cr₂O₇ (Bright Orange Crystals)
              </div>
            </div>
          </div>
        )}

        {rxn.diagramType === 'williamson' && (
          <div className="space-y-3 py-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {/* Successful Path: 1° Halide */}
              <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] border-2 border-emerald-500/50 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 size={15} />
                  <span>SUCCESSFUL SYNTHESIS (Clean SN2)</span>
                </div>
                <div className="font-mono text-xs bg-[var(--bg-elevated)] p-2.5 rounded-lg space-y-1">
                  <div><strong>1° Halide:</strong> CH₃—Br (Methyl bromide)</div>
                  <div><strong>Alkoxide:</strong> (CH₃)₃C—O⁻ Na⁺ (Sodium tert-butoxide)</div>
                  <div className="pt-1 text-emerald-600 dark:text-emerald-400 font-bold border-t border-[var(--border-subtle)]">
                    ⟶ (CH₃)₃C—O—CH₃ (tert-Butyl methyl ether) + NaBr
                  </div>
                </div>
                <span className="text-[10px] text-[var(--text-muted)] block">
                  Uncrowded primary carbon allows rapid SN2 backside attack by bulky alkoxide.
                </span>
              </div>

              {/* Failed Trap: 3° Halide */}
              <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] border-2 border-rose-500/50 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-rose-500">
                  <AlertCircle size={15} />
                  <span>ELIMINATION TRAP (Exclusive E2)</span>
                </div>
                <div className="font-mono text-xs bg-[var(--bg-elevated)] p-2.5 rounded-lg space-y-1">
                  <div><strong>3° Halide:</strong> (CH₃)₃C—Br (tert-Butyl bromide)</div>
                  <div><strong>Base:</strong> CH₃—O⁻ Na⁺ (Sodium methoxide)</div>
                  <div className="pt-1 text-rose-500 font-bold border-t border-[var(--border-subtle)]">
                    ⟶ CH₃—C(CH₃)=CH₂ (2-Methylpropene alkene) + CH₃OH + NaBr
                  </div>
                </div>
                <span className="text-[10px] text-[var(--text-muted)] block">
                  Steric hindrance blocks SN2 backside approach; methoxide acts as strong base, abstracting a β-proton.
                </span>
              </div>
            </div>
          </div>
        )}

        {rxn.diagramType === 'dehydration' && (
          <div className="space-y-3 py-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {/* 443 K Path */}
              <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] border-2 border-amber-500/50 space-y-2">
                <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-1.5">
                  <span className="text-xs font-mono font-bold text-amber-500">443 K (170°C) — HIGH TEMPERATURE</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-500 font-bold">ALKENE</span>
                </div>
                <div className="font-mono text-xs bg-[var(--bg-elevated)] p-2.5 rounded-lg space-y-1 text-center">
                  <div>CH₃—CH₂—OH + conc. H₂SO₄ (443 K)</div>
                  <div className="text-amber-500 font-bold text-sm pt-1">
                    ⟶ CH₂=CH₂ (Ethene) + H₂O
                  </div>
                </div>
                <p className="text-[11px] text-[var(--text-secondary)]">
                  Intramolecular β-elimination via ethyl carbocation intermediate [CH₃CH₂⁺].
                </p>
              </div>

              {/* 413 K Path */}
              <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] border-2 border-blue-500/50 space-y-2">
                <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-1.5">
                  <span className="text-xs font-mono font-bold text-blue-500">413 K (140°C) — LOWER TEMPERATURE</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/15 text-blue-500 font-bold">ETHER</span>
                </div>
                <div className="font-mono text-xs bg-[var(--bg-elevated)] p-2.5 rounded-lg space-y-1 text-center">
                  <div>2 C₂H₅—OH + conc. H₂SO₄ (413 K)</div>
                  <div className="text-blue-500 font-bold text-sm pt-1">
                    ⟶ C₂H₅—O—C₂H₅ (Diethyl Ether) + H₂O
                  </div>
                </div>
                <p className="text-[11px] text-[var(--text-secondary)]">
                  Intermolecular SN2 nucleophilic substitution by excess alcohol.
                </p>
              </div>
            </div>
          </div>
        )}

        {rxn.diagramType === 'chromate-dichromate' && (
          <div className="space-y-4 py-2">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 min-w-[500px]">
              {/* Yellow Chromate */}
              <div className="flex flex-col items-center bg-amber-950/20 p-4 rounded-xl border-2 border-amber-400 shadow-sm">
                <span className="text-[10px] font-mono font-bold text-amber-500 uppercase">Discrete Tetrahedron</span>
                <div className="font-mono text-base font-bold p-2 text-center text-amber-400">
                  [CrO₄]²⁻
                </div>
                <span className="text-xs font-mono font-bold text-[var(--text-primary)]">Chromate Ion (Yellow)</span>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">Stable in Alkaline pH (pH &gt; 7)</span>
              </div>

              {/* Equilibrium Arrows */}
              <div className="flex flex-col items-center px-2 space-y-1">
                <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-orange-500">
                  <span>+ 2 H⁺ (Acidic) ⟶</span>
                </div>
                <div className="w-24 h-0.5 bg-[var(--accent-primary)] relative" />
                <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-amber-500">
                  <span>⟵ + 2 OH⁻ (Alkaline)</span>
                </div>
              </div>

              {/* Orange Dichromate */}
              <div className="flex flex-col items-center bg-orange-950/25 p-4 rounded-xl border-2 border-orange-500 shadow-sm">
                <span className="text-[10px] font-mono font-bold text-orange-500 uppercase">Linked Tetrahedra (Cr—O—Cr 126°)</span>
                <div className="font-mono text-base font-bold p-2 text-center text-orange-500">
                  [Cr₂O₇]²⁻
                </div>
                <span className="text-xs font-mono font-bold text-[var(--text-primary)]">Dichromate Ion (Orange)</span>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">Stable in Acidic pH (pH &lt; 7)</span>
              </div>
            </div>

            <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] text-xs font-mono text-center">
              <strong>Governing Equation:</strong> 2 CrO₄²⁻ (Yellow) + 2 H⁺ ⇌ Cr₂O₇²⁻ (Orange) + H₂O &nbsp; (Cr—O—Cr Bond Angle = 126°)
            </div>
          </div>
        )}

        {rxn.diagramType === 'corrosion' && (
          <div className="space-y-4 py-2">
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 sm:gap-6 min-w-[550px]">
              {/* Anodic Spot */}
              <div className="flex-1 bg-[var(--bg-surface)] p-3.5 rounded-xl border-2 border-rose-500/50 space-y-2">
                <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-1.5">
                  <span className="text-xs font-mono font-bold text-rose-500 uppercase">ANODIC REGION (Iron Pit)</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/15 text-rose-500 font-bold">OXIDATION</span>
                </div>
                <div className="font-mono text-xs space-y-1">
                  <div><strong>Site:</strong> Surface strain / impurity defect</div>
                  <div className="p-2 bg-[var(--bg-elevated)] rounded border border-rose-500/30 text-rose-500 font-bold text-center">
                    2 Fe(s) ⟶ 2 Fe²⁺(aq) + 4e⁻ &nbsp; (E° = -0.44 V)
                  </div>
                  <p className="text-[10px] text-[var(--text-muted)]">Fe dissolves as Fe²⁺ into moisture droplet.</p>
                </div>
              </div>

              {/* Cathodic Spot */}
              <div className="flex-1 bg-[var(--bg-surface)] p-3.5 rounded-xl border-2 border-blue-500/50 space-y-2">
                <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-1.5">
                  <span className="text-xs font-mono font-bold text-blue-500 uppercase">CATHODIC REGION (Drop Rim)</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/15 text-blue-500 font-bold">REDUCTION</span>
                </div>
                <div className="font-mono text-xs space-y-1">
                  <div><strong>Site:</strong> High oxygen boundary at droplet edge</div>
                  <div className="p-2 bg-[var(--bg-elevated)] rounded border border-blue-500/30 text-blue-500 font-bold text-center">
                    O₂ + 4 H⁺ + 4e⁻ ⟶ 2 H₂O &nbsp; (E° = +1.23 V)
                  </div>
                  <p className="text-[10px] text-[var(--text-muted)]">H⁺ supplied by dissolved atmospheric CO₂ (H₂CO₃).</p>
                </div>
              </div>
            </div>

            <div className="p-3 bg-amber-950/20 rounded-xl border border-amber-600/40 text-xs font-mono text-center space-y-1">
              <div><strong>Overall Cell Reaction:</strong> 2 Fe(s) + O₂(g) + 4 H⁺(aq) ⟶ 2 Fe²⁺(aq) + 2 H₂O(l) &nbsp; (E°_cell = +1.67 V)</div>
              <div className="text-amber-500 font-bold">Hydrated Rust Formation: 4 Fe²⁺ + O₂ + 4 H₂O ⟶ 2 Fe₂O₃ + 8 H⁺ ──(+ x H₂O)──&gt; Fe₂O₃ · xH₂O (Rust)</div>
            </div>
          </div>
        )}

        {/* Lead Storage Battery Diagram */}
        {rxn.diagramType === 'lead-storage' && (
          <div className="space-y-4 py-2">
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 min-w-[550px]">
              {/* Anode Half */}
              <div className="flex-1 bg-[var(--bg-surface)] p-3.5 rounded-xl border-2 border-slate-500/50 space-y-2">
                <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-1.5">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase">ANODE (-) Negative</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/15 text-blue-400 font-bold">OXIDATION</span>
                </div>
                <div className="font-mono text-xs space-y-1">
                  <div><strong>Grid:</strong> Spongy Lead (Pb)</div>
                  <div className="p-2 bg-[var(--bg-elevated)] rounded border border-slate-500/30 text-blue-400 font-bold text-center">
                    Pb(s) + SO₄²⁻(aq) ⟶ PbSO₄(s) + 2e⁻
                  </div>
                </div>
              </div>

              {/* Central Electrolyte */}
              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-amber-500/10 border border-amber-500/40 text-center space-y-1 min-w-[140px]">
                <span className="text-[10px] font-mono font-bold text-amber-500 uppercase">Aqueous Electrolyte</span>
                <span className="font-mono text-xs font-bold text-[var(--text-primary)]">38% w/w H₂SO₄</span>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">Density: 1.30 g/mL (Fully charged)</span>
                <span className="text-[10px] font-mono text-rose-500">Drops to &lt; 1.20 g/mL on discharge</span>
              </div>

              {/* Cathode Half */}
              <div className="flex-1 bg-[var(--bg-surface)] p-3.5 rounded-xl border-2 border-amber-500/50 space-y-2">
                <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-1.5">
                  <span className="text-xs font-mono font-bold text-amber-500 uppercase">CATHODE (+) Positive</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-bold">REDUCTION</span>
                </div>
                <div className="font-mono text-xs space-y-1">
                  <div><strong>Grid:</strong> Lead Dioxide (PbO₂)</div>
                  <div className="p-2 bg-[var(--bg-elevated)] rounded border border-amber-500/30 text-emerald-400 font-bold text-center">
                    PbO₂(s) + SO₄²⁻ + 4H⁺ + 2e⁻ ⟶ PbSO₄(s) + 2H₂O
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 bg-blue-950/20 rounded-xl border border-blue-500/30 space-y-1">
                <span className="font-bold text-blue-400">⚡ Discharging (Acting as Galvanic Cell):</span>
                <p className="text-[var(--text-primary)] font-bold">Pb(s) + PbO₂(s) + 2 H₂SO₄(aq) ⟶ 2 PbSO₄(s) + 2 H₂O(l)</p>
                <span className="text-[11px] text-[var(--text-muted)] block">PbSO₄ precipitates onto both plates; H₂SO₄ consumed.</span>
              </div>
              <div className="p-3 bg-emerald-950/20 rounded-xl border border-emerald-500/30 space-y-1">
                <span className="font-bold text-emerald-400">🔌 Recharging (External DC Electrolytic Action):</span>
                <p className="text-[var(--text-primary)] font-bold">2 PbSO₄(s) + 2 H₂O(l) ⟶ Pb(s) + PbO₂(s) + 2 H₂SO₄(aq)</p>
                <span className="text-[11px] text-[var(--text-muted)] block">Reactions reverse completely; H₂SO₄ regenerated.</span>
              </div>
            </div>
          </div>
        )}

        {/* H2-O2 Fuel Cell Diagram */}
        {rxn.diagramType === 'fuel-cell' && (
          <div className="space-y-4 py-2">
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 min-w-[550px]">
              {/* Anode Fuel Inlet */}
              <div className="flex-1 bg-[var(--bg-surface)] p-3.5 rounded-xl border-2 border-cyan-500/50 space-y-2">
                <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-1.5">
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase">ANODE (-): H₂ Inlet</span>
                  <span className="text-[10px] font-mono text-cyan-400 font-bold">Fuel Gas</span>
                </div>
                <div className="font-mono text-xs space-y-1">
                  <div><strong>Electrode:</strong> Porous Carbon + Pt/Pd Catalyst</div>
                  <div className="p-2 bg-[var(--bg-elevated)] rounded border border-cyan-500/30 text-cyan-400 font-bold text-center">
                    2 H₂(g) + 4 OH⁻(aq) ⟶ 4 H₂O(l) + 4e⁻
                  </div>
                </div>
              </div>

              {/* Central Aqueous KOH */}
              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-purple-500/10 border border-purple-500/40 text-center space-y-1 min-w-[140px]">
                <span className="text-[10px] font-mono font-bold text-purple-400 uppercase">Electrolyte</span>
                <span className="font-mono text-xs font-bold text-[var(--text-primary)]">Hot conc. KOH</span>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">T ≈ 473 K, P ≈ 50 atm</span>
                <span className="text-[10px] font-mono text-emerald-400 font-bold">η ≈ 70% Efficiency</span>
              </div>

              {/* Cathode Oxygen Inlet */}
              <div className="flex-1 bg-[var(--bg-surface)] p-3.5 rounded-xl border-2 border-emerald-500/50 space-y-2">
                <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-1.5">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase">CATHODE (+): O₂ Inlet</span>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">Oxidant Gas</span>
                </div>
                <div className="font-mono text-xs space-y-1">
                  <div><strong>Electrode:</strong> Porous Carbon + Catalyst</div>
                  <div className="p-2 bg-[var(--bg-elevated)] rounded border border-emerald-500/30 text-emerald-400 font-bold text-center">
                    O₂(g) + 2 H₂O(l) + 4e⁻ ⟶ 4 OH⁻(aq)
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 bg-emerald-950/20 rounded-xl border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between text-xs font-mono gap-2">
              <div>
                <strong>Overall Cell Reaction:</strong> 2 H₂(g) + O₂(g) ⟶ 2 H₂O(l) &nbsp; (E°_cell = +1.23 V)
              </div>
              <div className="text-emerald-400 font-bold">
                By-Product: Pure Drinking Water (Apollo Space Mission)
              </div>
            </div>
          </div>
        )}

        {/* Kohlrausch Graph Diagram */}
        {rxn.diagramType === 'kohlrausch-graph' && (
          <div className="space-y-4 py-2">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 p-4 bg-[var(--bg-surface)] rounded-xl border border-[var(--border-default)]">
              {/* SVG Graphic Curve */}
              <div className="relative">
                <svg width="260" height="180" viewBox="0 0 260 180" className="overflow-visible">
                  {/* Axes */}
                  <line x1="40" y1="20" x2="40" y2="150" stroke="var(--text-muted)" strokeWidth="2" />
                  <line x1="40" y1="150" x2="240" y2="150" stroke="var(--text-muted)" strokeWidth="2" />
                  
                  {/* Axis Labels */}
                  <text x="35" y="15" textAnchor="end" fill="var(--text-primary)" fontSize="11" fontWeight="bold" fontFamily="monospace">Λm</text>
                  <text x="245" y="155" textAnchor="start" fill="var(--text-primary)" fontSize="11" fontWeight="bold" fontFamily="monospace">√c</text>
                  
                  {/* Strong Electrolyte (KCl) - Straight line with extrapolation */}
                  <line x1="40" y1="50" x2="90" y2="65" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3 3" />
                  <line x1="90" y1="65" x2="220" y2="105" stroke="#3b82f6" strokeWidth="2.5" />
                  <circle cx="40" cy="50" r="4" fill="#3b82f6" />
                  <text x="48" y="48" fill="#3b82f6" fontSize="10" fontWeight="bold" fontFamily="monospace">Λ°m (KCl intercept)</text>
                  <text x="225" y="105" fill="#3b82f6" fontSize="10" fontWeight="bold" fontFamily="monospace">KCl (Strong)</text>

                  {/* Weak Electrolyte (CH3COOH) - Steep curve */}
                  <path d="M 45,25 Q 52,110 220,135" fill="none" stroke="#ef4444" strokeWidth="2.5" />
                  <text x="75" y="32" fill="#ef4444" fontSize="10" fontWeight="bold" fontFamily="monospace">CH₃COOH (Weak - Steep asymptote)</text>
                </svg>
              </div>

              {/* Explanatory Cards */}
              <div className="flex-1 space-y-2.5 text-xs font-mono">
                <div className="p-3 rounded-lg bg-[var(--bg-elevated)] border border-blue-500/30">
                  <span className="font-bold text-blue-400 block mb-1">Strong Electrolytes (e.g. KCl):</span>
                  <p className="text-[var(--text-secondary)]">Obeys Debye-Hückel-Onsager: <strong>Λm = Λ°m − A√c</strong>. Completely ionized; on dilution, inter-ionic attractions decrease slightly. Linear graph extrapolates to zero to give Λ°m.</p>
                </div>
                <div className="p-3 rounded-lg bg-[var(--bg-elevated)] border border-rose-500/30">
                  <span className="font-bold text-rose-400 block mb-1">Weak Electrolytes (e.g. CH₃COOH):</span>
                  <p className="text-[var(--text-secondary)]">Poorly ionized. Near infinite dilution, degree of dissociation α shoots up steeply towards 1. Graph runs asymptotic to y-axis; <strong>Λ°m cannot be found by extrapolation</strong>.</p>
                </div>
              </div>
            </div>

            <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] text-xs font-mono text-center">
              <strong className="text-[var(--accent-primary)]">Kohlrausch’s Solution for Weak Electrolytes:</strong><br />
              Λ°m(CH₃COOH) = Λ°m(CH₃COONa) + Λ°m(HCl) − Λ°m(NaCl)
            </div>
          </div>
        )}

        {/* Reverse Osmosis Diagram */}
        {rxn.diagramType === 'reverse-osmosis' && (
          <div className="space-y-4 py-2">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-4 bg-[var(--bg-surface)] rounded-xl border border-[var(--border-default)] min-w-[550px]">
              {/* Saline Side under Piston Pressure */}
              <div className="flex-1 p-3.5 bg-blue-950/20 rounded-xl border-2 border-blue-500/50 space-y-2 text-center">
                <span className="text-[10px] font-mono font-bold text-blue-400 uppercase">High Pressure Chamber</span>
                <div className="p-2 bg-blue-500/20 rounded font-mono text-xs font-bold text-blue-300">
                  Piston Pressure P &gt; Π (Osmotic Pressure)
                </div>
                <p className="text-xs font-mono text-[var(--text-primary)]">Concentrated Salt Water (Sea Water)</p>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">Water molecules forced backwards</span>
              </div>

              {/* Semipermeable Membrane Barrier */}
              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-amber-500/10 border-2 border-dashed border-amber-500 min-w-[140px] text-center space-y-1">
                <span className="text-[10px] font-mono font-bold text-amber-500 uppercase">SPM Barrier</span>
                <span className="font-mono text-xs font-bold text-[var(--text-primary)]">Cellulose Acetate</span>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">Permeable to H₂O only; impermeable to Na⁺ & Cl⁻</span>
                <div className="text-emerald-400 font-bold text-xs">─── H₂O Flow ───&gt;</div>
              </div>

              {/* Fresh Water Outlet */}
              <div className="flex-1 p-3.5 bg-emerald-950/20 rounded-xl border-2 border-emerald-500/50 space-y-2 text-center">
                <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase">Pure Water Outlet</span>
                <div className="p-2 bg-emerald-500/20 rounded font-mono text-xs font-bold text-emerald-300">
                  Atmospheric Pressure (P = 1 atm)
                </div>
                <p className="text-xs font-mono text-[var(--text-primary)]">Fresh Potable Drinking Water</p>
                <span className="text-[10px] font-mono text-emerald-400 font-bold">Desalination Accomplished</span>
              </div>
            </div>

            <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] text-xs font-mono text-center">
              <strong>Core Rule:</strong> If P &lt; Π, normal osmosis occurs (pure water enters saline). When <strong>P &gt; Π</strong>, flow reverses, forcing pure water out of solution!
            </div>
          </div>
        )}

        {/* Ideal vs Non-Ideal Solutions Master Comparison Diagram */}
        {rxn.diagramType === 'ideal-vs-nonideal' && (
          <div className="space-y-4 py-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Ideal Solution Card */}
              <div className="p-4 bg-[var(--bg-surface)] rounded-xl border-2 border-emerald-500/40 space-y-3">
                <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wide">Ideal Solution</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-bold border border-emerald-500/30">Obeys Raoult</span>
                </div>
                <ul className="text-xs font-mono space-y-2 text-[var(--text-secondary)]">
                  <li>• <strong>Raoult&apos;s Law:</strong> Obeys strictly across all T & C: <span className="text-[var(--text-primary)]">p_A = p°_A · x_A</span></li>
                  <li>• <strong>Intermolecular Forces:</strong> Identical: <span className="text-emerald-400 font-bold">F_AB = F_AA = F_BB</span></li>
                  <li>• <strong>Enthalpy of Mixing:</strong> <span className="text-emerald-400 font-bold">ΔH_mix = 0</span> (No heat evolved/absorbed)</li>
                  <li>• <strong>Volume Change:</strong> <span className="text-emerald-400 font-bold">ΔV_mix = 0</span> (V_total = V_A + V_B)</li>
                  <li>• <strong>Entropy & Free Energy:</strong> ΔS_mix &gt; 0, ΔG_mix &lt; 0 (Spontaneous)</li>
                  <li>• <strong>Azeotropes:</strong> No azeotrope formed; separated completely by fractional distillation</li>
                  <li className="pt-1 text-[11px] text-emerald-300/90 border-t border-[var(--border-subtle)]">
                    <strong>Pairs:</strong> n-Hexane + n-Heptane, Benzene + Toluene, Bromoethane + Chloroethane
                  </li>
                </ul>
              </div>

              {/* Non-Ideal Solution Card */}
              <div className="p-4 bg-[var(--bg-surface)] rounded-xl border-2 border-amber-500/40 space-y-3">
                <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <span className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wide">Non-Ideal Solution</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-400 font-bold border border-amber-500/30">Deviates from Raoult</span>
                </div>
                <ul className="text-xs font-mono space-y-2 text-[var(--text-secondary)]">
                  <li>• <strong>Raoult&apos;s Law:</strong> Does NOT obey: <span className="text-[var(--text-primary)]">p_total ≠ p_A + p_B</span></li>
                  <li>• <strong>Intermolecular Forces:</strong> Unequal: <span className="text-amber-400 font-bold">F_AB ≠ F_AA, F_BB</span></li>
                  <li>• <strong>Enthalpy of Mixing:</strong> <span className="text-amber-400 font-bold">ΔH_mix ≠ 0</span> (Heat absorbed or evolved)</li>
                  <li>• <strong>Volume Change:</strong> <span className="text-amber-400 font-bold">ΔV_mix ≠ 0</span> (Expansion or contraction)</li>
                  <li>• <strong>Entropy & Free Energy:</strong> ΔS_mix &gt; 0, ΔG_mix &lt; 0 (Still spontaneous!)</li>
                  <li>• <strong>Azeotropes:</strong> Forms azeotropic mixtures boiling at constant temperature</li>
                  <li className="pt-1 text-[11px] text-amber-300/90 border-t border-[var(--border-subtle)]">
                    <strong>Pairs:</strong> Ethanol + Acetone (+ve dev), Chloroform + Acetone (−ve dev), Phenol + Aniline (−ve dev)
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick-Glance Board Comparison Matrix */}
            <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] text-xs font-mono overflow-x-auto">
              <div className="font-bold text-[var(--accent-primary)] mb-2 flex items-center gap-1.5">
                <Scale size={14} />
                <span>Quick-Glance CBSE Board Exam Distinction Matrix:</span>
              </div>
              <table className="w-full text-left border-collapse text-[11px]">
                <thead>
                  <tr className="border-b border-[var(--border-subtle)] text-[var(--text-muted)]">
                    <th className="py-1 px-2 font-semibold">Parameter</th>
                    <th className="py-1 px-2 font-semibold text-emerald-400">Ideal Solution</th>
                    <th className="py-1 px-2 font-semibold text-blue-400">Non-Ideal (+ve Dev)</th>
                    <th className="py-1 px-2 font-semibold text-rose-400">Non-Ideal (−ve Dev)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-subtle)]/50 text-[var(--text-secondary)]">
                  <tr>
                    <td className="py-1 px-2 font-bold text-[var(--text-primary)]">Raoult&apos;s Law</td>
                    <td className="py-1 px-2">p = p°·x</td>
                    <td className="py-1 px-2">p &gt; p°·x (Higher VP)</td>
                    <td className="py-1 px-2">p &lt; p°·x (Lower VP)</td>
                  </tr>
                  <tr>
                    <td className="py-1 px-2 font-bold text-[var(--text-primary)]">A-B Interactions</td>
                    <td className="py-1 px-2">Equal to A-A, B-B</td>
                    <td className="py-1 px-2">Weaker than pure</td>
                    <td className="py-1 px-2">Stronger (new H-bond)</td>
                  </tr>
                  <tr>
                    <td className="py-1 px-2 font-bold text-[var(--text-primary)]">ΔH_mixing</td>
                    <td className="py-1 px-2 text-emerald-400">= 0</td>
                    <td className="py-1 px-2 text-blue-400">&gt; 0 (Endothermic)</td>
                    <td className="py-1 px-2 text-rose-400">&lt; 0 (Exothermic)</td>
                  </tr>
                  <tr>
                    <td className="py-1 px-2 font-bold text-[var(--text-primary)]">ΔV_mixing</td>
                    <td className="py-1 px-2 text-emerald-400">= 0</td>
                    <td className="py-1 px-2 text-blue-400">&gt; 0 (Expansion)</td>
                    <td className="py-1 px-2 text-rose-400">&lt; 0 (Contraction)</td>
                  </tr>
                  <tr>
                    <td className="py-1 px-2 font-bold text-[var(--text-primary)]">Azeotrope</td>
                    <td className="py-1 px-2">None</td>
                    <td className="py-1 px-2">Minimum Boiling</td>
                    <td className="py-1 px-2">Maximum Boiling</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Raoult's Law Deviations Diagram */}
        {rxn.diagramType === 'raoult-deviations' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
            {/* Positive Deviation Card */}
            <div className="p-4 bg-[var(--bg-surface)] rounded-xl border-2 border-blue-500/40 space-y-3">
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2">
                <span className="font-mono text-xs font-bold text-blue-400 uppercase">Positive Deviation</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/15 text-blue-400 font-bold">P_total &gt; P_ideal</span>
              </div>
              <ul className="text-xs font-mono space-y-1.5 text-[var(--text-secondary)]">
                <li>• <strong>Intermolecular Forces:</strong> A-B interactions &lt; A-A and B-B</li>
                <li>• <strong>Enthalpy:</strong> ΔH_mixing &gt; 0 (Endothermic)</li>
                <li>• <strong>Volume:</strong> ΔV_mixing &gt; 0 (Expansion)</li>
                <li>• <strong>Vapour Pressure:</strong> Higher; molecules escape more readily</li>
                <li>• <strong>Azeotrope:</strong> Minimum-Boiling (e.g. 95.6% Ethanol + 4.4% Water, b.p. 351.15 K)</li>
                <li>• <strong>Classic Pairs:</strong> Ethanol + Acetone, CS₂ + Acetone</li>
              </ul>
            </div>

            {/* Negative Deviation Card */}
            <div className="p-4 bg-[var(--bg-surface)] rounded-xl border-2 border-rose-500/40 space-y-3">
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2">
                <span className="font-mono text-xs font-bold text-rose-400 uppercase">Negative Deviation</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/15 text-rose-400 font-bold">P_total &lt; P_ideal</span>
              </div>
              <ul className="text-xs font-mono space-y-1.5 text-[var(--text-secondary)]">
                <li>• <strong>Intermolecular Forces:</strong> A-B interactions &gt; A-A and B-B (New H-bonding)</li>
                <li>• <strong>Enthalpy:</strong> ΔH_mixing &lt; 0 (Exothermic)</li>
                <li>• <strong>Volume:</strong> ΔV_mixing &lt; 0 (Contraction)</li>
                <li>• <strong>Vapour Pressure:</strong> Lower; molecules held tightly in liquid</li>
                <li>• <strong>Azeotrope:</strong> Maximum-Boiling (e.g. 68% HNO₃ + 32% Water, b.p. 393.5 K)</li>
                <li>• <strong>Classic Pairs:</strong> Chloroform + Acetone, Phenol + Aniline</li>
              </ul>
            </div>
          </div>
        )}

        {/* Lanthanoid Contraction Diagram */}
        {rxn.diagramType === 'lanthanoid-contraction' && (
          <div className="space-y-4 py-2">
            <div className="p-4 bg-[var(--bg-surface)] rounded-xl border border-[var(--border-default)] space-y-3">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-2 text-xs font-mono">
                <span className="font-bold text-amber-500 uppercase">Ionic Radius Step-Down: La³⁺ (Z=57) ⟶ Lu³⁺ (Z=71)</span>
                <span className="text-emerald-400 font-bold">103 pm ⟶ 86 pm (17 pm Contraction)</span>
              </div>

              {/* Visual Ladder */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
                <div className="p-2.5 bg-[var(--bg-elevated)] rounded-lg border border-[var(--border-subtle)]">
                  <span className="text-blue-400 font-bold block">La³⁺ (57)</span>
                  <span className="text-sm font-bold text-[var(--text-primary)]">103 pm</span>
                  <span className="text-[10px] text-[var(--text-muted)] block">Largest radius</span>
                </div>
                <div className="p-2.5 bg-[var(--bg-elevated)] rounded-lg border border-[var(--border-subtle)]">
                  <span className="text-blue-400 font-bold block">Ce³⁺ (58)</span>
                  <span className="text-sm font-bold text-[var(--text-primary)]">101 pm</span>
                  <span className="text-[10px] text-[var(--text-muted)] block">4f¹ electron</span>
                </div>
                <div className="p-2.5 bg-[var(--bg-elevated)] rounded-lg border border-[var(--border-subtle)]">
                  <span className="text-blue-400 font-bold block">Gd³⁺ (64)</span>
                  <span className="text-sm font-bold text-[var(--text-primary)]">94 pm</span>
                  <span className="text-[10px] text-[var(--text-muted)] block">Half-filled 4f⁷</span>
                </div>
                <div className="p-2.5 bg-[var(--bg-elevated)] rounded-lg border border-rose-500/40">
                  <span className="text-rose-400 font-bold block">Lu³⁺ (71)</span>
                  <span className="text-sm font-bold text-rose-400">86 pm</span>
                  <span className="text-[10px] text-[var(--text-muted)] block">Smallest radius</span>
                </div>
              </div>

              <div className="p-3 bg-[var(--bg-elevated)] rounded-lg text-xs font-mono space-y-1">
                <div><strong>Cause:</strong> Poor shielding by diffuse 4f electrons fails to compensate for +1 unit increase in nuclear charge at each successive element.</div>
                <div className="text-emerald-400 font-bold">Consequence: Zr (160 pm) and Hf (159 pm) are almost identical in size ("Chemical Twins"), making separation very difficult!</div>
              </div>
            </div>
          </div>
        )}

        {/* Sandmeyer Diagram */}
        {rxn.diagramType === 'sandmeyer' && (
          <div className="space-y-4 py-2">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 min-w-[550px]">
              {/* Step 1: Diazotisation */}
              <div className="flex flex-col items-center bg-[var(--bg-surface)] p-3 rounded-xl border border-[var(--border-default)]">
                <span className="text-[10px] font-mono font-bold text-[var(--text-muted)] uppercase mb-1">Starting Amine</span>
                <SvgBenzene label="NH₂" sub="Aniline" />
              </div>

              <div className="flex flex-col items-center px-1">
                <span className="text-[11px] font-mono font-bold text-blue-500">NaNO₂ + 2 HCl</span>
                <div className="w-16 h-0.5 bg-[var(--accent-primary)] my-1 relative">
                  <span className="absolute right-0 -top-1 border-t-4 border-b-4 border-l-6 border-t-transparent border-b-transparent border-l-[var(--accent-primary)]" />
                </div>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">273–278 K (0–5 °C)</span>
              </div>

              {/* Intermediate: Diazonium Salt */}
              <div className="flex flex-col items-center bg-[var(--bg-surface)] p-3 rounded-xl border-2 border-amber-500/50">
                <span className="text-[10px] font-mono font-bold text-amber-500 uppercase mb-1">Diazonium Salt</span>
                <SvgBenzene label="N₂⁺ Cl⁻" sub="Benzene Diazonium Chloride" color="#f59e0b" />
              </div>

              {/* Branching into 3 Halides */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 p-2 bg-[var(--bg-surface)] rounded-lg border border-[var(--border-subtle)] text-xs font-mono">
                  <span className="text-emerald-400 font-bold">Cu₂Cl₂/HCl ⟶</span>
                  <span className="font-bold">Chlorobenzene + N₂↑</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-[var(--bg-surface)] rounded-lg border border-[var(--border-subtle)] text-xs font-mono">
                  <span className="text-amber-400 font-bold">Cu₂Br₂/HBr ⟶</span>
                  <span className="font-bold">Bromobenzene + N₂↑</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-[var(--bg-surface)] rounded-lg border border-[var(--border-subtle)] text-xs font-mono">
                  <span className="text-purple-400 font-bold">Warm KI ⟶</span>
                  <span className="font-bold">Iodobenzene + N₂↑</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dow's Process Diagram */}
        {rxn.diagramType === 'dows-process' && (
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 py-2 min-w-[500px]">
            <div className="flex flex-col items-center bg-[var(--bg-surface)] p-3 rounded-xl border border-[var(--border-default)]">
              <span className="text-[10px] font-mono font-bold text-[var(--text-muted)] uppercase mb-1">Unreactive Halide</span>
              <SvgBenzene label="Cl" sub="Chlorobenzene (sp² C)" />
            </div>

            <div className="flex flex-col items-center px-1">
              <span className="text-[11px] font-mono font-bold text-rose-500">623 K, 300 atm</span>
              <div className="w-20 h-0.5 bg-[var(--accent-primary)] my-1 relative">
                <span className="absolute right-0 -top-1 border-t-4 border-b-4 border-l-6 border-t-transparent border-b-transparent border-l-[var(--accent-primary)]" />
              </div>
              <span className="text-[10px] font-mono text-[var(--text-muted)]">+ 2 NaOH (aq)</span>
            </div>

            <div className="flex flex-col items-center bg-[var(--bg-surface)] p-3 rounded-xl border border-blue-500/40">
              <span className="text-[10px] font-mono font-bold text-blue-400 uppercase mb-1">Salt Intermediate</span>
              <SvgBenzene label="O⁻Na⁺" sub="Sodium Phenoxide" color="#3b82f6" />
            </div>

            <div className="flex flex-col items-center px-1">
              <span className="text-[11px] font-mono font-bold text-emerald-400">dil. HCl</span>
              <div className="w-16 h-0.5 bg-[var(--accent-primary)] my-1 relative">
                <span className="absolute right-0 -top-1 border-t-4 border-b-4 border-l-6 border-t-transparent border-b-transparent border-l-[var(--accent-primary)]" />
              </div>
              <span className="text-[10px] font-mono text-[var(--text-muted)]">Acidification</span>
            </div>

            <div className="flex flex-col items-center bg-[var(--bg-surface)] p-3 rounded-xl border-2 border-emerald-500/50">
              <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase mb-1">Product</span>
              <SvgBenzene label="OH" sub="Phenol" color="#10b981" />
            </div>
          </div>
        )}

        {/* Phosgene Diagram */}
        {rxn.diagramType === 'phosgene' && (
          <div className="space-y-3 py-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3.5 bg-rose-950/20 rounded-xl border border-rose-500/40 space-y-1.5">
                <span className="text-rose-400 font-bold uppercase block">⚠️ Poisonous Photo-Oxidation:</span>
                <p className="text-[var(--text-primary)] font-bold">2 CHCl₃ + O₂ ──(Light / Air)──&gt; 2 COCl₂ (Phosgene) + 2 HCl</p>
                <span className="text-[11px] text-[var(--text-muted)] block">Phosgene (carbonyl chloride) is an extremely deadly suffocating gas.</span>
              </div>
              <div className="p-3.5 bg-emerald-950/20 rounded-xl border border-emerald-500/40 space-y-1.5">
                <span className="text-emerald-400 font-bold uppercase block">🛡️ Quenching by 1% Ethanol:</span>
                <p className="text-[var(--text-primary)] font-bold">COCl₂ + 2 C₂H₅OH ⟶ (C₂H₅O)₂C=O + 2 HCl</p>
                <span className="text-[11px] text-emerald-400 block font-semibold">Converts poisonous phosgene into harmless Diethyl Carbonate!</span>
              </div>
            </div>
            <div className="p-2.5 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] text-xs font-mono text-center">
              <strong>Storage Precaution:</strong> Stored in dark amber-coloured bottles filled to the brim to exclude air and light.
            </div>
          </div>
        )}

        {/* Catalytic Dehydrogenation Diagram */}
        {rxn.diagramType === 'dehydrogenation' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-2 text-xs font-mono">
            <div className="p-3 rounded-xl bg-[var(--bg-surface)] border-2 border-blue-500/40 space-y-2 text-center">
              <span className="text-[10px] font-bold text-blue-400 uppercase">1° Alcohol (Primary)</span>
              <div className="font-bold text-[var(--text-primary)]">R—CH₂—OH</div>
              <div className="text-[11px] text-blue-400">── Cu, 573 K ──&gt;</div>
              <div className="p-2 bg-[var(--bg-elevated)] rounded font-bold text-emerald-400">R—CHO (Aldehyde) + H₂↑</div>
              <span className="text-[10px] text-[var(--text-muted)]">Dehydrogenation</span>
            </div>

            <div className="p-3 rounded-xl bg-[var(--bg-surface)] border-2 border-amber-500/40 space-y-2 text-center">
              <span className="text-[10px] font-bold text-amber-500 uppercase">2° Alcohol (Secondary)</span>
              <div className="font-bold text-[var(--text-primary)]">R—CH(OH)—R’</div>
              <div className="text-[11px] text-amber-500">── Cu, 573 K ──&gt;</div>
              <div className="p-2 bg-[var(--bg-elevated)] rounded font-bold text-emerald-400">R—CO—R’ (Ketone) + H₂↑</div>
              <span className="text-[10px] text-[var(--text-muted)]">Dehydrogenation</span>
            </div>

            <div className="p-3 rounded-xl bg-[var(--bg-surface)] border-2 border-rose-500/40 space-y-2 text-center">
              <span className="text-[10px] font-bold text-rose-400 uppercase">3° Alcohol (Tertiary Exception!)</span>
              <div className="font-bold text-[var(--text-primary)]">(CH₃)₃C—OH</div>
              <div className="text-[11px] text-rose-400">── Cu, 573 K ──&gt;</div>
              <div className="p-2 bg-[var(--bg-elevated)] rounded font-bold text-rose-400">(CH₃)₂C=CH₂ + H₂O</div>
              <span className="text-[10px] text-rose-400 font-bold">DEHYDRATION (Alkene formed!)</span>
            </div>
          </div>
        )}

        {/* Faraday's Laws of Electrolysis Diagram */}
        {rxn.diagramType === 'faraday-electrolysis' && (
          <div className="space-y-4 py-2">
            {/* Top Circuit & Cell Schematic */}
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 sm:gap-6 min-w-[550px]">
              {/* Anode (+ Oxidation) */}
              <div className="flex-1 bg-[var(--bg-surface)] p-4 rounded-xl border-2 border-rose-500/50 space-y-2">
                <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-1.5">
                  <span className="text-xs font-mono font-bold text-rose-500 uppercase">ANODE (+ Positive Terminal)</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/15 text-rose-500 font-bold">OXIDATION</span>
                </div>
                <div className="font-mono text-xs space-y-1.5">
                  <div><strong>Action:</strong> Electrons leave solution (Loss of e⁻)</div>
                  <div><strong>e.g. In Cu refining:</strong> Cu(s) ⟶ Cu²⁺(aq) + 2e⁻ (Dissolves)</div>
                  <div><strong>e.g. In aq. NaCl:</strong> 2Cl⁻ ⟶ Cl₂↑ + 2e⁻ (Overpotential!)</div>
                  <div className="p-2 bg-[var(--bg-elevated)] rounded border border-rose-500/30 text-rose-600 dark:text-rose-400 font-bold text-center">
                    Current Enters Cell (e⁻ Leaves)
                  </div>
                </div>
              </div>

              {/* Power Supply & Charge Flow Box */}
              <div className="flex flex-col items-center justify-center p-3 min-w-[140px] text-center space-y-2 bg-[var(--bg-elevated)] rounded-xl border border-amber-500/40">
                <div className="px-2.5 py-1 rounded-full bg-amber-500/20 text-[10px] font-mono font-bold text-amber-500">
                  DC Power Source
                </div>
                <div className="text-xs font-mono font-bold text-[var(--text-primary)]">
                  Q = I · t
                </div>
                <div className="text-[10px] font-mono text-[var(--text-secondary)]">
                  I = Current (Amperes)<br />
                  t = Time in <strong>SECONDS</strong>
                </div>
                <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-500 font-bold">
                  1 F ≈ 96500 C/mol e⁻
                </div>
              </div>

              {/* Cathode (- Reduction) */}
              <div className="flex-1 bg-[var(--bg-surface)] p-4 rounded-xl border-2 border-emerald-500/50 space-y-2">
                <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-1.5">
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase">CATHODE (− Negative Terminal)</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold">REDUCTION</span>
                </div>
                <div className="font-mono text-xs space-y-1.5">
                  <div><strong>Action:</strong> Deposition / Plating of Metal Layer</div>
                  <div><strong>Reduction:</strong> Mⁿ⁺(aq) + n e⁻ ⟶ M(s) (Deposited)</div>
                  <div><strong>Deposited Mass:</strong> w = z · I · t = (M · I · t)/(n · 96500)</div>
                  <div className="p-2 bg-[var(--bg-elevated)] rounded border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-bold text-center">
                    Cu²⁺ + 2e⁻ ⟶ Cu(s) [Layer Forms]
                  </div>
                </div>
              </div>
            </div>

            {/* Two Laws Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3 bg-[var(--bg-surface)] rounded-xl border border-[var(--border-subtle)] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[var(--accent-primary)] uppercase">Faraday's 1st Law</span>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">w = z · Q</span>
                </div>
                <div className="font-mono text-xs font-bold text-[var(--text-primary)]">
                  w = z · I · t = <span className="text-amber-500">(M · I · t) / (n · 96500)</span>
                </div>
                <p className="text-[11px] text-[var(--text-secondary)]">
                  Mass deposited is directly proportional to charge passed (Q = I·t). Always substitute time t in <strong>seconds</strong>!
                </p>
              </div>

              <div className="p-3 bg-[var(--bg-surface)] rounded-xl border border-[var(--border-subtle)] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[var(--accent-primary)] uppercase">Faraday's 2nd Law</span>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">Series Cells</span>
                </div>
                <div className="font-mono text-xs font-bold text-[var(--text-primary)]">
                  w₁ / w₂ = E₁ / E₂ = <span className="text-amber-500">(M₁ / n₁) / (M₂ / n₂)</span>
                </div>
                <p className="text-[11px] text-[var(--text-secondary)]">
                  Same charge passed through different electrolytic cells deposits masses proportional to chemical equivalent weights.
                </p>
              </div>
            </div>

            {/* Stoichiometric Requirements Table */}
            {rxn.depositionRequirements && (
              <div className="bg-[var(--bg-surface)] rounded-xl border border-[var(--border-subtle)] p-3 space-y-2">
                <span className="text-xs font-mono font-bold text-[var(--text-primary)] uppercase block">
                  Stoichiometric Electron & Charge Requirements (CBSE High-Yield):
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {rxn.depositionRequirements.map((req, idx) => (
                    <div key={idx} className="p-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-center space-y-1">
                      <div className="font-mono text-[11px] font-bold text-[var(--accent-primary)]">{req.metal}</div>
                      <div className="font-mono text-xs font-bold text-amber-500">{req.charge}</div>
                      <div className="text-[10px] text-[var(--text-secondary)]">{req.mass}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Faraday's Laws of Electromagnetic Induction Diagram */}
        {rxn.diagramType === 'faraday-induction' && (
          <div className="space-y-4 py-2">
            {/* Induction Experiments Comparative Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Case 1: Magnet Approaching Coil */}
              <div className="bg-[var(--bg-surface)] p-4 rounded-xl border-2 border-blue-500/50 space-y-3">
                <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-1.5">
                  <span className="text-xs font-mono font-bold text-blue-500 uppercase">Case 1: Magnet Approaching Coil (v ⟶)</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/15 text-blue-500 font-bold">FLUX INCREASING</span>
                </div>

                <div className="p-3 bg-[var(--bg-elevated)] rounded-xl flex items-center justify-center gap-3">
                  {/* Bar Magnet */}
                  <div className="flex border-2 border-[var(--border-default)] rounded overflow-hidden shadow-xs text-xs font-mono font-bold">
                    <span className="px-2.5 py-1.5 bg-rose-500 text-white">N</span>
                    <span className="px-2.5 py-1.5 bg-blue-600 text-white">S</span>
                  </div>
                  <div className="text-blue-500 font-mono text-xs font-bold animate-pulse">
                    ⟶ v (approaching)
                  </div>
                  {/* Coil Face */}
                  <div className="w-12 h-12 rounded-full border-4 border-dashed border-blue-500 flex flex-col items-center justify-center font-mono font-bold text-xs text-blue-500">
                    <span>N</span>
                    <span className="text-[8px]">repels</span>
                  </div>
                </div>

                <div className="font-mono text-xs space-y-1">
                  <div><strong>Magnetic Flux:</strong> Φ_B INCREASES (dΦ/dt &gt; 0)</div>
                  <div><strong>Lenz’s Law Opposing Face:</strong> <strong>North Pole</strong> (repels approach)</div>
                  <div><strong>Induced Current Direction:</strong> Counter-Clockwise (↺ Anticlockwise)</div>
                  <div><strong>Galvanometer:</strong> Deflects to the RIGHT (+ deflection)</div>
                </div>
              </div>

              {/* Case 2: Magnet Withdrawn from Coil */}
              <div className="bg-[var(--bg-surface)] p-4 rounded-xl border-2 border-purple-500/50 space-y-3">
                <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-1.5">
                  <span className="text-xs font-mono font-bold text-purple-500 uppercase">Case 2: Magnet Withdrawing (⟵ v)</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/15 text-purple-500 font-bold">FLUX DECREASING</span>
                </div>

                <div className="p-3 bg-[var(--bg-elevated)] rounded-xl flex items-center justify-center gap-3">
                  {/* Coil Face */}
                  <div className="w-12 h-12 rounded-full border-4 border-dashed border-purple-500 flex flex-col items-center justify-center font-mono font-bold text-xs text-purple-500">
                    <span>S</span>
                    <span className="text-[8px]">attracts</span>
                  </div>
                  <div className="text-purple-500 font-mono text-xs font-bold animate-pulse">
                    ⟵ v (withdrawing)
                  </div>
                  {/* Bar Magnet */}
                  <div className="flex border-2 border-[var(--border-default)] rounded overflow-hidden shadow-xs text-xs font-mono font-bold">
                    <span className="px-2.5 py-1.5 bg-rose-500 text-white">N</span>
                    <span className="px-2.5 py-1.5 bg-blue-600 text-white">S</span>
                  </div>
                </div>

                <div className="font-mono text-xs space-y-1">
                  <div><strong>Magnetic Flux:</strong> Φ_B DECREASES (dΦ/dt &lt; 0)</div>
                  <div><strong>Lenz’s Law Opposing Face:</strong> <strong>South Pole</strong> (attracts, resists retreat)</div>
                  <div><strong>Induced Current Direction:</strong> Clockwise (↻ Clockwise)</div>
                  <div><strong>Galvanometer:</strong> Deflects to the LEFT (− deflection)</div>
                </div>
              </div>
            </div>

            {/* Bottom Golden Equations & Stationary Magnet Trap */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1">
                <span className="text-xs font-mono font-bold text-rose-500 uppercase block">Stationary Magnet Trap (v = 0)</span>
                <div className="font-mono text-xs font-bold text-[var(--text-primary)]">dΦ / dt = 0 ⟹ ε = 0, I = 0</div>
                <p className="text-[11px] text-[var(--text-secondary)]">Even in a 100 T magnetic field, zero relative motion produces ZERO EMF!</p>
              </div>

              <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1">
                <span className="text-xs font-mono font-bold text-amber-500 uppercase block">Induced EMF (Rate Dependent)</span>
                <div className="font-mono text-xs font-bold text-[var(--text-primary)]">|ε| = N |dΦ / dt| ∝ 1 / Δt</div>
                <p className="text-[11px] text-[var(--text-secondary)]">Faster motion (smaller Δt) produces MUCH HIGHER induced EMF and peak deflection!</p>
              </div>

              <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border-2 border-emerald-500/60 space-y-1">
                <span className="text-xs font-mono font-bold text-emerald-500 uppercase block">Total Induced Charge (CBSE Trap!)</span>
                <div className="font-mono text-xs font-bold text-emerald-500">q = (N · ΔΦ) / R</div>
                <p className="text-[11px] text-[var(--text-secondary)]"><strong>INDEPENDENT OF TIME & SPEED!</strong> Slow and fast motion transfer the EXACT SAME total charge q!</p>
              </div>
            </div>
          </div>
        )}

        {/* Generic or Table Style Representation for other diagram types */}
        {!['cumene', 'reimer-tiemann', 'kolbe', 'sn2', 'sn1', 'saytzeff', 'daniell-cell', 'kmno4-flow', 'k2cr2o7-flow', 'williamson', 'dehydration', 'chromate-dichromate', 'corrosion', 'lead-storage', 'fuel-cell', 'kohlrausch-graph', 'reverse-osmosis', 'ideal-vs-nonideal', 'raoult-deviations', 'lanthanoid-contraction', 'sandmeyer', 'dows-process', 'phosgene', 'dehydrogenation', 'faraday-electrolysis', 'faraday-induction'].includes(rxn.diagramType) && (
          <div className="space-y-2 p-2">
            {rxn.equation && (
              <div className="font-mono text-sm sm:text-base font-bold p-3 rounded-xl bg-[var(--bg-elevated)] text-[var(--accent-primary)] text-center overflow-x-auto">
                {rxn.equation}
              </div>
            )}
            {rxn.reactions && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1">
                {rxn.reactions.map((r, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-1">
                    <span className="text-xs font-mono font-bold text-[var(--accent-primary)] block">{r.name}</span>
                    <div className="font-mono text-xs font-bold text-[var(--text-primary)]">{r.equation}</div>
                    {r.note && <p className="text-[11px] text-[var(--text-secondary)]">{r.note}</p>}
                  </div>
                ))}
              </div>
            )}
            {rxn.classes && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-1">
                {rxn.classes.map((cls, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[var(--text-primary)] block">{cls.class}</span>
                    <div className="font-mono text-[11px] text-[var(--accent-primary)]">{cls.example}</div>
                    <p className="text-xs text-[var(--text-secondary)] leading-snug">{cls.observation}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mechanism Walkthrough Accordion */}
      {rxn.mechanismSteps && rxn.mechanismSteps.length > 0 && (
        <div className="border border-[var(--border-subtle)] rounded-xl overflow-hidden bg-[var(--bg-base)]">
          <button
            onClick={() => setShowMechanism(!showMechanism)}
            className="w-full px-3.5 py-2.5 flex items-center justify-between text-xs font-mono font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <Zap size={14} className="text-amber-500" />
              Detailed Reaction Mechanism & Electron Movement
            </span>
            {showMechanism ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
          {showMechanism && (
            <div className="p-3.5 space-y-2 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] text-xs text-[var(--text-secondary)] font-sans leading-relaxed">
              {rxn.mechanismSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] mt-1.5 shrink-0" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* CBSE Board Exam Tip Banner */}
      {(rxn.boardTip || rxn.boardNote) && (
        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[var(--badge-recommended-bg)]/15 border border-[var(--badge-recommended-bg)]/30 text-xs text-[var(--text-accent)] font-medium">
          <Info size={15} className="shrink-0 mt-0.5 text-[var(--text-accent)]" />
          <span>
            <strong>CBSE Board Examiner Key:</strong> {rxn.boardTip || rxn.boardNote}
          </span>
        </div>
      )}
    </div>
  );
}

// Master Container Component rendered inside Chapter Drill Down
export default function ReactionDiagramCard({ subtopicId, chapterId }) {
  // Find matching diagrams for this subtopic or chapter
  const matchingDiagrams = REACTION_DIAGRAMS.filter(d => {
    if (subtopicId && d.subtopicId === subtopicId) return true;
    if (!subtopicId && chapterId && d.chapterId === chapterId) return true;
    return false;
  });

  if (!matchingDiagrams || matchingDiagrams.length === 0) return null;

  return (
    <div className="space-y-4 my-4 animate-in fade-in duration-200">
      <div className="flex items-center gap-2 px-1">
        <Sparkles size={16} className="text-[var(--accent-primary)] shrink-0" />
        <h3 className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)]">
          Visual Reaction Schemes & Mechanism Diagrams
        </h3>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-muted)] font-semibold ml-auto">
          {matchingDiagrams.length} Diagram{matchingDiagrams.length > 1 ? 's' : ''}
        </span>
      </div>

      <div className="space-y-4">
        {matchingDiagrams.map((rxn) => (
          <SingleReactionDiagram key={rxn.id} rxn={rxn} />
        ))}
      </div>
    </div>
  );
}
