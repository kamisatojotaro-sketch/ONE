import { useState } from 'react';
import { 
  Dna, ArrowRight, Layers, CheckCircle2, AlertCircle, Info, 
  ChevronDown, ChevronUp, Sparkles, Activity, Eye
} from 'lucide-react';

export default function BiologyDiagramCard({ diagramId, subMode, inline = false }) {
  const [activeTab, setActiveTab] = useState(subMode || 'default');

  // Common SVG Markers for biology diagrams
  const svgDefs = (
    <defs>
      <marker id="bio-arrow-emerald" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" />
      </marker>
      <marker id="bio-arrow-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
      </marker>
      <marker id="bio-arrow-amber" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b" />
      </marker>
      <marker id="bio-arrow-rose" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#f43f5e" />
      </marker>
      <marker id="bio-arrow-purple" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#a855f7" />
      </marker>
    </defs>
  );

  /* --------------------------------------------------------------------------
   * 1. EMBRYO SAC (7-Celled, 8-Nucleate Female Gametophyte - NCERT Pg 10)
   * -------------------------------------------------------------------------- */
  if (diagramId === 'embryo-sac') {
    return (
      <div className="bg-[var(--bg-surface)] p-4 sm:p-5 rounded-2xl border border-emerald-500/30 space-y-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
              NCERT Fig 1.8(d) • Pg 10
            </span>
            <h4 className="font-bold text-sm text-[var(--text-primary)]">
              Mature Female Gametophyte (Embryo Sac) — 7-Celled, 8-Nucleate
            </h4>
          </div>
          <span className="text-[11px] font-semibold text-amber-500 bg-amber-500/10 px-2.5 py-0.5 rounded-full">
            Repeated 3M/5M Board Diagram
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="w-full lg:w-1/2 flex justify-center py-2">
            <svg width="290" height="340" viewBox="0 0 290 340" className="overflow-visible select-none">
              {svgDefs}
              {/* Outer oval embryo sac boundary */}
              <ellipse cx="145" cy="170" rx="95" ry="145" fill="rgba(16, 185, 129, 0.04)" stroke="#10b981" strokeWidth="2.5" />

              {/* Chalazal Pole (Top) */}
              <text x="145" y="16" fill="#64748b" fontSize="10" fontWeight="bold" textAnchor="middle" letterSpacing="1">
                CHALAZAL END (CHALAZA)
              </text>
              <line x1="145" y1="20" x2="145" y2="35" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 2" />

              {/* 3 Antipodal Cells */}
              <circle cx="115" cy="55" r="16" fill="rgba(59, 130, 246, 0.15)" stroke="#3b82f6" strokeWidth="1.5" />
              <circle cx="115" cy="55" r="4" fill="#3b82f6" />
              <circle cx="145" cy="48" r="16" fill="rgba(59, 130, 246, 0.15)" stroke="#3b82f6" strokeWidth="1.5" />
              <circle cx="145" cy="48" r="4" fill="#3b82f6" />
              <circle cx="175" cy="55" r="16" fill="rgba(59, 130, 246, 0.15)" stroke="#3b82f6" strokeWidth="1.5" />
              <circle cx="175" cy="55" r="4" fill="#3b82f6" />

              {/* Label: Antipodals */}
              <line x1="190" y1="52" x2="250" y2="52" stroke="#3b82f6" strokeWidth="1" />
              <text x="254" y="55" fill="#3b82f6" fontSize="10.5" fontWeight="bold">3 Antipodals (n)</text>

              {/* Large Central Cell */}
              <ellipse cx="145" cy="165" rx="70" ry="60" fill="rgba(245, 158, 11, 0.05)" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="3 3" />
              <text x="42" y="150" fill="#f59e0b" fontSize="10.5" fontWeight="bold">Central cell</text>
              <line x1="98" y1="148" x2="120" y2="155" stroke="#f59e0b" strokeWidth="1" />

              {/* 2 Polar Nuclei */}
              <circle cx="138" cy="160" r="6" fill="#f59e0b" stroke="#d97706" strokeWidth="1.2" />
              <circle cx="152" cy="160" r="6" fill="#f59e0b" stroke="#d97706" strokeWidth="1.2" />
              <line x1="160" y1="160" x2="250" y2="160" stroke="#f59e0b" strokeWidth="1" />
              <text x="254" y="163" fill="#d97706" fontSize="10.5" fontWeight="bold">2 Polar nuclei (n+n)</text>

              {/* Central cell large vacuole */}
              <ellipse cx="145" cy="115" rx="35" ry="15" fill="rgba(148, 163, 184, 0.1)" stroke="#94a3b8" strokeWidth="1" />
              <text x="145" y="118" fill="#94a3b8" fontSize="8.5" textAnchor="middle">Vacuole</text>

              {/* Egg Apparatus (Micropylar End: 1 Egg + 2 Synergids) */}
              {/* Egg cell (central, slightly behind/above synergids) */}
              <circle cx="145" cy="245" r="18" fill="rgba(244, 63, 94, 0.18)" stroke="#f43f5e" strokeWidth="1.8" />
              <circle cx="145" cy="240" r="5" fill="#f43f5e" />
              <line x1="145" y1="240" x2="40" y2="225" stroke="#f43f5e" strokeWidth="1" />
              <text x="10" y="228" fill="#f43f5e" fontSize="10.5" fontWeight="bold">Egg cell (n)</text>

              {/* 2 Synergid cells */}
              <ellipse cx="120" cy="270" rx="16" ry="24" fill="rgba(16, 185, 129, 0.18)" stroke="#10b981" strokeWidth="1.5" />
              <circle cx="120" cy="265" r="4.5" fill="#10b981" />
              <ellipse cx="170" cy="270" rx="16" ry="24" fill="rgba(16, 185, 129, 0.18)" stroke="#10b981" strokeWidth="1.5" />
              <circle cx="170" cy="265" r="4.5" fill="#10b981" />
              <line x1="186" y1="270" x2="250" y2="250" stroke="#10b981" strokeWidth="1" />
              <text x="254" y="253" fill="#10b981" fontSize="10.5" fontWeight="bold">2 Synergids (n)</text>

              {/* Filiform Apparatus Thickenings at micropylar tip of synergids */}
              <path d="M 112 284 Q 120 292 128 284 Q 120 288 112 284" fill="#a855f7" stroke="#a855f7" strokeWidth="1.5" />
              <path d="M 162 284 Q 170 292 178 284 Q 170 288 162 284" fill="#a855f7" stroke="#a855f7" strokeWidth="1.5" />
              <line x1="175" y1="288" x2="250" y2="288" stroke="#a855f7" strokeWidth="1" />
              <text x="254" y="291" fill="#a855f7" fontSize="10.5" fontWeight="bold">Filiform apparatus</text>

              {/* Micropylar Pole (Bottom) */}
              <line x1="145" y1="305" x2="145" y2="320" stroke="#64748b" strokeWidth="1" strokeDasharray="2 2" />
              <text x="145" y="332" fill="#64748b" fontSize="10" fontWeight="bold" textAnchor="middle" letterSpacing="1">
                MICROPYLAR END (MICROPYLE)
              </text>
            </svg>
          </div>

          <div className="w-full lg:w-1/2 space-y-2.5 text-xs">
            <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1.5">
              <span className="font-bold text-emerald-600 dark:text-emerald-400 block text-xs">
                Essential Labeling & Structure (7 Cells, 8 Nuclei):
              </span>
              <ul className="space-y-1 text-[var(--text-secondary)]">
                <li>• <strong className="text-[var(--text-primary)]">Chalazal Pole (Top):</strong> 3 Antipodal cells (degenerate after fertilisation).</li>
                <li>• <strong className="text-[var(--text-primary)]">Central Region:</strong> 1 large Central Cell containing 2 Polar Nuclei ($n+n$). Fuses with male gamete to form $3n$ PEN.</li>
                <li>• <strong className="text-[var(--text-primary)]">Micropylar Pole (Bottom):</strong> Egg apparatus comprising 1 Egg cell + 2 Synergids.</li>
                <li>• <strong className="text-[var(--text-primary)]">Filiform Apparatus:</strong> Cellular finger-like wall thickenings in synergids that guide the chemotactic entry of the pollen tube.</li>
              </ul>
            </div>

            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[var(--text-secondary)]">
              <strong className="text-amber-600 dark:text-amber-400 block mb-1">NCERT Exam Drawing Tips:</strong>
              Do not draw 8 cells! The mature embryo sac is strictly <strong className="text-[var(--text-primary)]">7-celled and 8-nucleate</strong> because the two polar nuclei reside together in the single large central cell. Always orient Chalaza at one end and Micropyle at the other.
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* --------------------------------------------------------------------------
   * 2. MEGASPORANGIUM (Anatropous Ovule - NCERT Pg 9)
   * -------------------------------------------------------------------------- */
  if (diagramId === 'megasporangium') {
    return (
      <div className="bg-[var(--bg-surface)] p-4 sm:p-5 rounded-2xl border border-blue-500/30 space-y-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-xs">
              NCERT Fig 1.7(d) • Pg 9
            </span>
            <h4 className="font-bold text-sm text-[var(--text-primary)]">
              Diagrammatic View of a Typical Anatropous Ovule (Megasporangium)
            </h4>
          </div>
          <span className="text-[11px] font-semibold text-blue-500 bg-blue-500/10 px-2.5 py-0.5 rounded-full">
            Standard 3M Diagram
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="w-full lg:w-1/2 flex justify-center py-2">
            <svg width="300" height="340" viewBox="0 0 300 340" className="overflow-visible select-none">
              {svgDefs}
              {/* Chalaza (Basal Top region) */}
              <text x="140" y="16" fill="#64748b" fontSize="10.5" fontWeight="bold" textAnchor="middle">
                CHALAZAL POLE
              </text>
              <line x1="140" y1="20" x2="140" y2="40" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 2" />

              {/* Outer & Inner Integuments curving around nucellus */}
              <path d="M 140 40 C 230 40 250 160 210 240 C 190 270 170 280 155 285" fill="none" stroke="#3b82f6" strokeWidth="2.5" />
              <path d="M 140 50 C 215 50 230 160 195 235 C 180 260 165 270 155 275" fill="none" stroke="#60a5fa" strokeWidth="2" />

              {/* Inner Curve of Integuments */}
              <path d="M 140 40 C 50 40 45 160 75 240 C 90 270 115 280 130 285" fill="none" stroke="#3b82f6" strokeWidth="2.5" />
              <path d="M 140 50 C 65 50 60 160 90 235 C 105 260 120 270 130 275" fill="none" stroke="#60a5fa" strokeWidth="2" />

              {/* Nucellus tissue enclosing embryo sac */}
              <ellipse cx="140" cy="160" rx="55" ry="80" fill="rgba(245, 158, 11, 0.08)" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="195" y1="130" x2="255" y2="120" stroke="#f59e0b" strokeWidth="1" />
              <text x="258" y="123" fill="#d97706" fontSize="10.5" fontWeight="bold">Nucellus</text>

              {/* Female Gametophyte (Embryo Sac) */}
              <ellipse cx="140" cy="165" rx="30" ry="50" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" strokeWidth="2" />
              <line x1="170" y1="165" x2="255" y2="165" stroke="#10b981" strokeWidth="1" />
              <text x="258" y="168" fill="#10b981" fontSize="10.5" fontWeight="bold">Embryo sac</text>

              {/* Labels for Integuments */}
              <line x1="225" y1="80" x2="255" y2="70" stroke="#3b82f6" strokeWidth="1" />
              <text x="258" y="73" fill="#3b82f6" fontSize="10" fontWeight="bold">Outer integument</text>
              <line x1="210" y1="100" x2="255" y2="95" stroke="#60a5fa" strokeWidth="1" />
              <text x="258" y="98" fill="#60a5fa" fontSize="10" fontWeight="bold">Inner integument</text>

              {/* Micropyle pore at bottom */}
              <line x1="142" y1="285" x2="142" y2="310" stroke="#ef4444" strokeWidth="1.2" />
              <circle cx="142" cy="285" r="3" fill="#ef4444" />
              <text x="142" y="325" fill="#ef4444" fontSize="10.5" fontWeight="bold" textAnchor="middle">Micropyle</text>

              {/* Funicle (Stalk) attached at side/base */}
              <path d="M 125 285 C 100 295 70 300 45 320" fill="none" stroke="#8b5cf6" strokeWidth="3" />
              <path d="M 130 275 C 105 285 80 290 55 315" fill="none" stroke="#8b5cf6" strokeWidth="2" />
              <line x1="70" y1="305" x2="25" y2="295" stroke="#8b5cf6" strokeWidth="1" />
              <text x="5" y="295" fill="#8b5cf6" fontSize="10.5" fontWeight="bold">Funicle</text>

              {/* Hilum (Junction between ovule body and funicle) */}
              <circle cx="118" cy="280" r="4.5" fill="#ec4899" />
              <line x1="118" y1="280" x2="25" y2="260" stroke="#ec4899" strokeWidth="1" />
              <text x="5" y="260" fill="#ec4899" fontSize="10.5" fontWeight="bold">Hilum (junction)</text>
            </svg>
          </div>

          <div className="w-full lg:w-1/2 space-y-2.5 text-xs">
            <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1.5">
              <span className="font-bold text-blue-600 dark:text-blue-400 block text-xs">
                Key Components of the Anatropous Ovule:
              </span>
              <ul className="space-y-1 text-[var(--text-secondary)]">
                <li>• <strong className="text-[var(--text-primary)]">Funicle:</strong> Stalk attaching the ovule to the placenta.</li>
                <li>• <strong className="text-[var(--text-primary)]">Hilum:</strong> Point of fusion where the body of ovule joins the funicle.</li>
                <li>• <strong className="text-[var(--text-primary)]">Integuments:</strong> 1 or 2 protective envelopes enclosing the nucellus except at the micropyle.</li>
                <li>• <strong className="text-[var(--text-primary)]">Micropyle:</strong> Small opening/pore at the tip through which the pollen tube enters.</li>
                <li>• <strong className="text-[var(--text-primary)]">Chalaza:</strong> Basal swollen part representing the origin of integuments, opposite to micropyle.</li>
                <li>• <strong className="text-[var(--text-primary)]">Nucellus:</strong> Nutritive mass of parenchymatous diploid cells.</li>
              </ul>
            </div>
            <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-[var(--text-secondary)]">
              <strong className="text-blue-600 dark:text-blue-400 block mb-1">Board PYQ Trap:</strong>
              In an anatropous (inverted) ovule, the micropyle lies close to the funicle, and the chalaza is at the opposite basal end. Make sure the hilum is clearly indicated at the junction!
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* --------------------------------------------------------------------------
   * 3. MICROSPORANGIUM 4 WALL LAYERS (NCERT Pg 7)
   * -------------------------------------------------------------------------- */
  if (diagramId === 'microsporangium-walls') {
    return (
      <div className="bg-[var(--bg-surface)] p-4 sm:p-5 rounded-2xl border border-amber-500/30 space-y-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold text-xs">
              NCERT Fig 1.3(b) • Pg 7
            </span>
            <h4 className="font-bold text-sm text-[var(--text-primary)]">
              T.S. of Microsporangium Showing 4 Wall Layers & Tapetum
            </h4>
          </div>
          <span className="text-[11px] font-semibold text-amber-500 bg-amber-500/10 px-2.5 py-0.5 rounded-full">
            Essential 3M Diagram
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="w-full lg:w-1/2 flex justify-center py-2">
            <svg width="290" height="280" viewBox="0 0 290 280" className="overflow-visible select-none">
              {svgDefs}
              {/* Layer 1: Epidermis (Outermost single layer) */}
              <circle cx="145" cy="140" r="125" fill="none" stroke="#64748b" strokeWidth="2.5" />
              {/* Brick-like cells along epidermis */}
              <circle cx="145" cy="140" r="118" fill="rgba(100, 116, 139, 0.05)" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="230" y1="50" x2="270" y2="40" stroke="#64748b" strokeWidth="1" />
              <text x="274" y="43" fill="#64748b" fontSize="10.5" fontWeight="bold">1. Epidermis</text>

              {/* Layer 2: Endothecium (Radially elongated with alpha-cellulosic fibrous bands) */}
              <circle cx="145" cy="140" r="105" fill="rgba(59, 130, 246, 0.08)" stroke="#3b82f6" strokeWidth="2" />
              <line x1="235" y1="85" x2="270" y2="80" stroke="#3b82f6" strokeWidth="1" />
              <text x="274" y="83" fill="#3b82f6" fontSize="10.5" fontWeight="bold">2. Endothecium</text>

              {/* Layer 3: Middle Layers (1 to 3 rows of ephemeral cells) */}
              <circle cx="145" cy="140" r="88" fill="rgba(245, 158, 11, 0.08)" stroke="#f59e0b" strokeWidth="1.5" />
              <circle cx="145" cy="140" r="75" fill="rgba(245, 158, 11, 0.05)" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="215" y1="120" x2="270" y2="120" stroke="#f59e0b" strokeWidth="1" />
              <text x="274" y="123" fill="#d97706" fontSize="10.5" fontWeight="bold">3. Middle layers</text>

              {/* Layer 4: Tapetum (Innermost nutritive layer with dense cytoplasm & binucleate cells) */}
              <circle cx="145" cy="140" r="58" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2.5" />
              {/* Dense cytoplasm dots and dual nuclei in tapetum cells */}
              <circle cx="110" cy="115" r="3.5" fill="#10b981" />
              <circle cx="116" cy="118" r="3.5" fill="#10b981" />
              <circle cx="170" cy="115" r="3.5" fill="#10b981" />
              <circle cx="176" cy="118" r="3.5" fill="#10b981" />
              <line x1="190" y1="155" x2="270" y2="155" stroke="#10b981" strokeWidth="1.2" />
              <text x="274" y="158" fill="#10b981" fontSize="10.5" fontWeight="bold">4. Tapetum (Nutritive)</text>

              {/* Central Sporogenous Tissue / Microspores */}
              <circle cx="145" cy="140" r="38" fill="rgba(244, 63, 94, 0.15)" stroke="#f43f5e" strokeWidth="1.5" />
              <circle cx="138" cy="135" r="6" fill="#f43f5e" />
              <circle cx="152" cy="135" r="6" fill="#f43f5e" />
              <circle cx="145" cy="148" r="6" fill="#f43f5e" />
              <line x1="145" y1="178" x2="145" y2="230" stroke="#f43f5e" strokeWidth="1" />
              <text x="145" y="244" fill="#f43f5e" fontSize="10.5" fontWeight="bold" textAnchor="middle">
                Sporogenous tissue (PMC 2n)
              </text>
            </svg>
          </div>

          <div className="w-full lg:w-1/2 space-y-2.5 text-xs">
            <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1.5">
              <span className="font-bold text-amber-600 dark:text-amber-400 block text-xs">
                Functions of the 4 Wall Layers (Outside → Inside):
              </span>
              <ul className="space-y-1 text-[var(--text-secondary)]">
                <li>1. <strong className="text-[var(--text-primary)]">Epidermis:</strong> Outermost single protective layer.</li>
                <li>2. <strong className="text-[var(--text-primary)]">Endothecium:</strong> Has fibrous bands of $\alpha$-cellulose; hygroscopic; helps in anther dehiscence at maturity.</li>
                <li>3. <strong className="text-[var(--text-primary)]">Middle Layers (1-3):</strong> Ephemeral, degenerate to nourish developing spores.</li>
                <li>4. <strong className="text-[var(--text-primary)]">Tapetum:</strong> Innermost layer; possesses dense cytoplasm and usually &gt;1 nucleus (polyploid/binucleate). Nourishes developing microspores and produces sporopollenin precursors.</li>
              </ul>
            </div>
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[var(--text-secondary)]">
              <strong className="text-emerald-600 dark:text-emerald-400 block mb-1">Frequent Board Question:</strong>
              "Why do tapetal cells possess dense cytoplasm and more than one nucleus?" ⟶ Due to endomitosis / free nuclear division without cytokinesis to support high metabolic synthesis of nutrients and enzymes (callase).
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* --------------------------------------------------------------------------
   * 4. BLASTOCYST & IMPLANTATION (NCERT Pg 36-37)
   * -------------------------------------------------------------------------- */
  if (diagramId === 'blastocyst') {
    return (
      <div className="bg-[var(--bg-surface)] p-4 sm:p-5 rounded-2xl border border-rose-500/30 space-y-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 font-bold text-xs">
              NCERT Fig 2.11(e) • Pg 36
            </span>
            <h4 className="font-bold text-sm text-[var(--text-primary)]">
              Structure of Blastocyst & Implantation into Uterine Endometrium
            </h4>
          </div>
          <span className="text-[11px] font-semibold text-rose-500 bg-rose-500/10 px-2.5 py-0.5 rounded-full">
            High-Yield 2M/3M
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="w-full lg:w-1/2 flex justify-center py-2">
            <svg width="290" height="280" viewBox="0 0 290 280" className="overflow-visible select-none">
              {svgDefs}
              {/* Uterine Endometrium Tissue (Top-Right wavy layer) */}
              <path d="M 10 30 Q 80 15 150 35 T 280 25 L 280 5 L 10 5 Z" fill="rgba(244, 63, 94, 0.15)" stroke="#f43f5e" strokeWidth="1.5" />
              <text x="145" y="20" fill="#f43f5e" fontSize="10" fontWeight="bold" textAnchor="middle">
                Endometrium of Uterus
              </text>

              {/* Trophoblast Outer Sphere */}
              <circle cx="145" cy="155" r="90" fill="rgba(59, 130, 246, 0.05)" stroke="#3b82f6" strokeWidth="2.5" />
              {/* Multiple single-cell trophoblast perimeter units */}
              <circle cx="145" cy="65" r="7" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="1.2" />
              <circle cx="170" cy="68" r="7" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="1.2" />
              <circle cx="195" cy="80" r="7" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="1.2" />
              <circle cx="215" cy="100" r="7" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="1.2" />
              <circle cx="230" cy="130" r="7" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="1.2" />
              <circle cx="235" cy="160" r="7" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="1.2" />

              {/* Label: Trophoblast */}
              <line x1="225" y1="130" x2="270" y2="130" stroke="#3b82f6" strokeWidth="1" />
              <text x="274" y="133" fill="#3b82f6" fontSize="10.5" fontWeight="bold">Trophoblast (Outer)</text>

              {/* Inner Cell Mass (ICM) clustered at embryonic pole */}
              <ellipse cx="145" cy="105" rx="35" ry="25" fill="rgba(16, 185, 129, 0.25)" stroke="#10b981" strokeWidth="2" />
              <circle cx="135" cy="100" r="5" fill="#10b981" />
              <circle cx="150" cy="98" r="5" fill="#10b981" />
              <circle cx="140" cy="112" r="5" fill="#10b981" />
              <circle cx="155" cy="110" r="5" fill="#10b981" />
              <line x1="110" y1="105" x2="30" y2="105" stroke="#10b981" strokeWidth="1" />
              <text x="5" y="102" fill="#10b981" fontSize="10.5" fontWeight="bold">Inner Cell Mass (ICM)</text>
              <text x="5" y="115" fill="#059669" fontSize="9">Differentiates into embryo</text>

              {/* Blastocoel Cavity (Fluid-filled) */}
              <text x="145" y="195" fill="#94a3b8" fontSize="12" fontWeight="bold" textAnchor="middle">
                Blastocoel (Cavity)
              </text>
              <line x1="145" y1="202" x2="145" y2="255" stroke="#94a3b8" strokeWidth="1" />
              <text x="145" y="268" fill="#64748b" fontSize="10" textAnchor="middle">Fluid-filled blastocyst cavity</text>
            </svg>
          </div>

          <div className="w-full lg:w-1/2 space-y-2.5 text-xs">
            <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1.5">
              <span className="font-bold text-rose-600 dark:text-rose-400 block text-xs">
                Blastocyst Differentiation (Day 6–7 Post-Fertilisation):
              </span>
              <ul className="space-y-1 text-[var(--text-secondary)]">
                <li>• <strong className="text-[var(--text-primary)]">Trophoblast:</strong> Outer single cell layer. Gets attached to the uterine endometrium and gives rise to chorionic villi (placenta).</li>
                <li>• <strong className="text-[var(--text-primary)]">Inner Cell Mass (ICM):</strong> Inner cluster of pluripotent cells attached to trophoblast at the embryonic pole. Differentiates into the 3 germ layers of embryo proper (Ectoderm, Mesoderm, Endoderm).</li>
                <li>• <strong className="text-[var(--text-primary)]">Implantation:</strong> Uterine cells divide rapidly and cover the blastocyst, completely embedding it in the endometrium (leads to pregnancy).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* --------------------------------------------------------------------------
   * 5. COLEOPTILE VS COLEORHIZA & MONOCOT EMBRYO (NCERT Pg 19)
   * -------------------------------------------------------------------------- */
  if (diagramId === 'monocot-embryo') {
    return (
      <div className="bg-[var(--bg-surface)] p-4 sm:p-5 rounded-2xl border border-teal-500/30 space-y-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold text-xs">
              NCERT Fig 1.14(b) • Pg 19
            </span>
            <h4 className="font-bold text-sm text-[var(--text-primary)]">
              L.S. of Grass/Monocot Embryo: Coleoptile vs Coleorhiza
            </h4>
          </div>
          <span className="text-[11px] font-semibold text-teal-500 bg-teal-500/10 px-2.5 py-0.5 rounded-full">
            Differentiate (2M)
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="w-full lg:w-1/2 flex justify-center py-2">
            <svg width="290" height="320" viewBox="0 0 290 320" className="overflow-visible select-none">
              {svgDefs}
              {/* Scutellum (Large shield-shaped cotyledon on one lateral side) */}
              <path d="M 120 40 C 230 40 250 200 160 270 C 130 250 140 180 120 40 Z" fill="rgba(20, 184, 166, 0.15)" stroke="#14b8a6" strokeWidth="2" />
              <line x1="200" y1="120" x2="255" y2="100" stroke="#14b8a6" strokeWidth="1" />
              <text x="258" y="103" fill="#0d9488" fontSize="10.5" fontWeight="bold">Scutellum (Cotyledon)</text>

              {/* Coleoptile (Protective sheath of plumule) */}
              <path d="M 110 50 C 90 60 70 85 70 120 L 115 120 Z" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" />
              <line x1="70" y1="85" x2="15" y2="85" stroke="#3b82f6" strokeWidth="1" />
              <text x="5" y="80" fill="#3b82f6" fontSize="10.5" fontWeight="bold">Coleoptile (Sheath)</text>
              <text x="5" y="93" fill="#2563eb" fontSize="9">Protects Plumule</text>

              {/* Shoot Apex / Plumule */}
              <circle cx="100" cy="115" r="8" fill="#10b981" />
              <line x1="100" y1="115" x2="15" y2="125" stroke="#10b981" strokeWidth="1" />
              <text x="5" y="128" fill="#10b981" fontSize="10.5" fontWeight="bold">Shoot apex (Plumule)</text>

              {/* Epiblast (Rudimentary second cotyledon) */}
              <path d="M 70 150 Q 55 165 70 180" fill="none" stroke="#f59e0b" strokeWidth="2" />
              <line x1="60" y1="165" x2="15" y2="165" stroke="#f59e0b" strokeWidth="1" />
              <text x="5" y="168" fill="#d97706" fontSize="10.5" fontWeight="bold">Epiblast</text>

              {/* Radicle & Root Cap */}
              <circle cx="105" cy="220" r="10" fill="#ef4444" />
              <line x1="105" y1="220" x2="15" y2="215" stroke="#ef4444" strokeWidth="1" />
              <text x="5" y="218" fill="#ef4444" fontSize="10.5" fontWeight="bold">Radicle & Root cap</text>

              {/* Coleorhiza (Protective sheath of radicle) */}
              <path d="M 80 200 C 70 230 85 270 120 270 L 120 200 Z" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" strokeWidth="2" />
              <line x1="85" y1="250" x2="15" y2="260" stroke="#a855f7" strokeWidth="1" />
              <text x="5" y="258" fill="#a855f7" fontSize="10.5" fontWeight="bold">Coleorhiza (Sheath)</text>
              <text x="5" y="271" fill="#7c3aed" fontSize="9">Protects Radicle</text>
            </svg>
          </div>

          <div className="w-full lg:w-1/2 space-y-2.5 text-xs">
            <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1.5">
              <span className="font-bold text-teal-600 dark:text-teal-400 block text-xs">
                Key Differences: Coleoptile vs Coleorhiza
              </span>
              <table className="w-full text-left border-collapse text-[11px]">
                <thead>
                  <tr className="border-b border-[var(--border-subtle)] text-[var(--text-muted)]">
                    <th className="py-1">Feature</th>
                    <th className="py-1">Coleoptile</th>
                    <th className="py-1">Coleorhiza</th>
                  </tr>
                </thead>
                <tbody className="text-[var(--text-secondary)]">
                  <tr className="border-b border-[var(--border-subtle)]/50">
                    <td className="py-1 font-semibold text-[var(--text-primary)]">Location</td>
                    <td className="py-1">At epicotyl (terminal)</td>
                    <td className="py-1">At hypocotyl (basal)</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]/50">
                    <td className="py-1 font-semibold text-[var(--text-primary)]">Protects</td>
                    <td className="py-1">Plumule / Shoot apex</td>
                    <td className="py-1">Radicle & Root cap</td>
                  </tr>
                  <tr>
                    <td className="py-1 font-semibold text-[var(--text-primary)]">Growth</td>
                    <td className="py-1">Emerges from soil, turns green</td>
                    <td className="py-1">Remains underground as undifferentiated sheath</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* --------------------------------------------------------------------------
   * 6. MENSTRUAL CYCLE HORMONES & ENDOMETRIUM GRAPH (NCERT Pg 33)
   * -------------------------------------------------------------------------- */
  if (diagramId === 'menstrual-cycle') {
    return (
      <div className="bg-[var(--bg-surface)] p-4 sm:p-5 rounded-2xl border border-purple-500/30 space-y-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold text-xs">
              NCERT Fig 2.9 • Pg 33
            </span>
            <h4 className="font-bold text-sm text-[var(--text-primary)]">
              Menstrual Cycle: Pituitary & Ovarian Hormones with Uterine Changes
            </h4>
          </div>
          <span className="text-[11px] font-semibold text-purple-500 bg-purple-500/10 px-2.5 py-0.5 rounded-full">
            Standard 3M/5M Curve
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="w-full lg:w-3/5 flex justify-center py-2 overflow-x-auto">
            <svg width="340" height="260" viewBox="0 0 340 260" className="overflow-visible select-none">
              {svgDefs}
              {/* Day Axis */}
              <line x1="40" y1="230" x2="320" y2="230" stroke="#64748b" strokeWidth="1.5" />
              <text x="40" y="245" fill="#64748b" fontSize="9" fontWeight="bold">Day 1</text>
              <text x="85" y="245" fill="#64748b" fontSize="9">Day 5</text>
              <text x="175" y="245" fill="#ef4444" fontSize="10" fontWeight="bold">Day 14 (Ovulation)</text>
              <text x="310" y="245" fill="#64748b" fontSize="9" fontWeight="bold">Day 28</text>

              {/* LH Surge Curve (Peaking sharply at Day 14) */}
              <path d="M 40 70 Q 120 65 155 50 Q 175 12 185 55 Q 210 70 320 70" fill="none" stroke="#ef4444" strokeWidth="2.5" />
              <text x="180" y="22" fill="#ef4444" fontSize="9.5" fontWeight="bold">LH Surge</text>

              {/* FSH Curve (Modest peak at Day 14) */}
              <path d="M 40 85 Q 120 80 160 65 Q 175 45 185 68 Q 210 85 320 85" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3 2" />
              <text x="50" y="98" fill="#3b82f6" fontSize="9" fontWeight="bold">FSH</text>

              {/* Estrogen Curve (Peaks prior to ovulation & minor peak in luteal phase) */}
              <path d="M 40 145 Q 100 140 150 105 Q 175 140 230 120 Q 280 145 320 155" fill="none" stroke="#10b981" strokeWidth="2" />
              <text x="135" y="102" fill="#10b981" fontSize="9" fontWeight="bold">Estrogen</text>

              {/* Progesterone Curve (High in luteal phase secreted by Corpus Luteum) */}
              <path d="M 40 165 L 175 165 Q 230 115 285 165 L 320 165" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
              <text x="245" y="112" fill="#f59e0b" fontSize="9.5" fontWeight="bold">Progesterone</text>

              {/* Endometrial Thickness Curve */}
              <path d="M 40 220 Q 60 228 85 228 Q 120 220 175 200 Q 230 185 285 185 Q 310 215 320 228" fill="rgba(244, 63, 94, 0.15)" stroke="#f43f5e" strokeWidth="2" />
              <text x="50" y="215" fill="#f43f5e" fontSize="8.5">Menstruation</text>
              <text x="105" y="215" fill="#f43f5e" fontSize="8.5">Proliferative</text>
              <text x="220" y="198" fill="#f43f5e" fontSize="8.5" fontWeight="bold">Secretory Phase</text>

              {/* Day 14 vertical dashed line */}
              <line x1="175" y1="20" x2="175" y2="230" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" />
            </svg>
          </div>

          <div className="w-full lg:w-2/5 space-y-2 text-xs">
            <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-[var(--text-secondary)]">
              <strong className="text-red-600 dark:text-red-400 block mb-0.5">LH Surge (Day 14):</strong>
              Rapid secretion of LH reaches maximum level in mid-cycle inducing rupture of Graafian follicle and release of ovum (Ovulation).
            </div>
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[var(--text-secondary)]">
              <strong className="text-amber-600 dark:text-amber-400 block mb-0.5">Progesterone (Luteal Phase):</strong>
              Ruptured follicle transforms into Corpus Luteum, secreting large amounts of progesterone essential for maintaining the endometrium.
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* --------------------------------------------------------------------------
   * 7. ANTIBODY MOLECULE H2L2 (NCERT Pg 138)
   * -------------------------------------------------------------------------- */
  if (diagramId === 'antibody-molecule') {
    return (
      <div className="bg-[var(--bg-surface)] p-4 sm:p-5 rounded-2xl border border-indigo-500/30 space-y-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold text-xs">
              NCERT Fig 7.4 • Pg 138
            </span>
            <h4 className="font-bold text-sm text-[var(--text-primary)]">
              Structure of an Antibody Molecule ($H_2L_2$)
            </h4>
          </div>
          <span className="text-[11px] font-semibold text-indigo-500 bg-indigo-500/10 px-2.5 py-0.5 rounded-full">
            Standard 2M/3M Diagram
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="w-full lg:w-1/2 flex justify-center py-2">
            <svg width="290" height="290" viewBox="0 0 290 290" className="overflow-visible select-none">
              {svgDefs}
              {/* Heavy Chains (2 inner long purple rods forming Y shape) */}
              {/* Left Heavy Chain */}
              <path d="M 60 50 L 130 140 L 130 250" fill="none" stroke="#6366f1" strokeWidth="5.5" strokeLinecap="round" />
              {/* Right Heavy Chain */}
              <path d="M 230 50 L 160 140 L 160 250" fill="none" stroke="#6366f1" strokeWidth="5.5" strokeLinecap="round" />

              {/* Light Chains (2 outer shorter rods parallel to arms) */}
              {/* Left Light Chain */}
              <line x1="35" y1="70" x2="105" y2="160" stroke="#38bdf8" strokeWidth="5" strokeLinecap="round" />
              {/* Right Light Chain */}
              <line x1="255" y1="70" x2="185" y2="160" stroke="#38bdf8" strokeWidth="5" strokeLinecap="round" />

              {/* Disulfide Bridges (-S-S-) */}
              {/* Inter-Heavy chain bridges */}
              <line x1="130" y1="165" x2="160" y2="165" stroke="#f59e0b" strokeWidth="2.5" />
              <line x1="130" y1="180" x2="160" y2="180" stroke="#f59e0b" strokeWidth="2.5" />
              {/* Heavy-Light chain bridges */}
              <line x1="95" y1="140" x2="118" y2="125" stroke="#f59e0b" strokeWidth="2" />
              <line x1="195" y1="140" x2="172" y2="125" stroke="#f59e0b" strokeWidth="2" />

              {/* Antigen-Binding Sites at tips of arms */}
              <ellipse cx="48" cy="58" rx="20" ry="10" fill="rgba(244, 63, 94, 0.25)" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="2 2" />
              <text x="48" y="35" fill="#f43f5e" fontSize="9.5" fontWeight="bold" textAnchor="middle">Antigen-binding site</text>

              <ellipse cx="242" cy="58" rx="20" ry="10" fill="rgba(244, 63, 94, 0.25)" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="2 2" />
              <text x="242" y="35" fill="#f43f5e" fontSize="9.5" fontWeight="bold" textAnchor="middle">Antigen-binding site</text>

              {/* Labels */}
              <line x1="75" y1="120" x2="20" y2="120" stroke="#38bdf8" strokeWidth="1" />
              <text x="5" y="115" fill="#0284c7" fontSize="10" fontWeight="bold">Light chain (L)</text>

              <line x1="145" y1="210" x2="235" y2="210" stroke="#6366f1" strokeWidth="1" />
              <text x="238" y="213" fill="#4f46e5" fontSize="10" fontWeight="bold">Heavy chain (H)</text>

              <line x1="145" y1="172" x2="235" y2="172" stroke="#f59e0b" strokeWidth="1" />
              <text x="238" y="175" fill="#d97706" fontSize="9.5" fontWeight="bold">Disulfide bond (-S-S-)</text>

              <text x="145" y="275" fill="#64748b" fontSize="10" fontWeight="bold" textAnchor="middle">
                Formula: H₂L₂ (4 Polypeptide Chains)
              </text>
            </svg>
          </div>

          <div className="w-full lg:w-1/2 space-y-2.5 text-xs">
            <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1.5">
              <span className="font-bold text-indigo-600 dark:text-indigo-400 block text-xs">
                Structural Highlights for CBSE Marking Scheme:
              </span>
              <ul className="space-y-1 text-[var(--text-secondary)]">
                <li>• Each antibody has <strong className="text-[var(--text-primary)]">4 polypeptide chains</strong>: two identical light (L) chains and two identical heavy (H) chains represented as <strong className="text-[var(--text-primary)]">$H_2L_2$</strong>.</li>
                <li>• The chains are held together by <strong className="text-[var(--text-primary)]">disulfide bonds (-S-S-)</strong>.</li>
                <li>• Tips of both Y arms form the <strong className="text-[var(--text-primary)]">antigen-binding sites (paratope)</strong> which fit specifically with an epitope on the antigen like lock and key.</li>
                <li>• Major classes: <strong className="text-[var(--text-primary)]">IgA</strong> (colostrum), <strong className="text-[var(--text-primary)]">IgG</strong> (crosses placenta), <strong className="text-[var(--text-primary)]">IgM</strong> (first responder), <strong className="text-[var(--text-primary)]">IgE</strong> (allergies).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* --------------------------------------------------------------------------
   * 8. LAC OPERON (NCERT Pg 93 & Pg 101)
   * -------------------------------------------------------------------------- */
  if (diagramId === 'lac-operon') {
    return (
      <div className="bg-[var(--bg-surface)] p-4 sm:p-5 rounded-2xl border border-sky-500/30 space-y-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 font-bold text-xs">
              NCERT Fig 5.14 • Pg 93 & 101
            </span>
            <h4 className="font-bold text-sm text-[var(--text-primary)]">
              The Lac Operon: Switched OFF vs Switched ON
            </h4>
          </div>
          <span className="text-[11px] font-semibold text-sky-500 bg-sky-500/10 px-2.5 py-0.5 rounded-full">
            Frequent 3M/5M Board Question
          </span>
        </div>

        {/* State Toggle Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('off')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'off' || activeTab === 'default'
                ? 'bg-rose-500 text-white shadow-xs'
                : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]'
            }`}
          >
            In Absence of Inducer (Switched OFF)
          </button>
          <button
            onClick={() => setActiveTab('on')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'on'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]'
            }`}
          >
            In Presence of Inducer / Lactose (Switched ON)
          </button>
        </div>

        {/* Lac Operon Visual */}
        <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-3">
          <div className="overflow-x-auto py-2">
            <svg width="480" height="150" viewBox="0 0 480 150" className="overflow-visible select-none mx-auto">
              {svgDefs}
              {/* Gene Segments Bar */}
              {/* p (promoter for i) */}
              <rect x="20" y="30" width="40" height="30" fill="#cbd5e1" stroke="#64748b" strokeWidth="1.5" />
              <text x="40" y="50" fill="#334155" fontSize="12" fontWeight="bold" textAnchor="middle">p</text>
              {/* i (regulator) */}
              <rect x="60" y="30" width="55" height="30" fill="#fbcfe8" stroke="#db2777" strokeWidth="1.5" />
              <text x="87" y="50" fill="#be185d" fontSize="12" fontWeight="bold" textAnchor="middle">i</text>
              {/* p (promoter for operon) */}
              <rect x="115" y="30" width="40" height="30" fill="#cbd5e1" stroke="#64748b" strokeWidth="1.5" />
              <text x="135" y="50" fill="#334155" fontSize="12" fontWeight="bold" textAnchor="middle">p</text>
              {/* o (operator) */}
              <rect x="155" y="30" width="45" height="30" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.5" />
              <text x="177" y="50" fill="#c2410c" fontSize="12" fontWeight="bold" textAnchor="middle">o</text>
              {/* z */}
              <rect x="200" y="30" width="70" height="30" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
              <text x="235" y="50" fill="#15803d" fontSize="12" fontWeight="bold" textAnchor="middle">z</text>
              {/* y */}
              <rect x="270" y="30" width="60" height="30" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
              <text x="300" y="50" fill="#15803d" fontSize="12" fontWeight="bold" textAnchor="middle">y</text>
              {/* a */}
              <rect x="330" y="30" width="60" height="30" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
              <text x="360" y="50" fill="#15803d" fontSize="12" fontWeight="bold" textAnchor="middle">a</text>

              {/* Repressor Synthesis */}
              <line x1="87" y1="60" x2="87" y2="85" stroke="#db2777" strokeWidth="1.5" markerEnd="url(#bio-arrow-rose)" />
              <text x="87" y="100" fill="#be185d" fontSize="9" textAnchor="middle">Repressor mRNA</text>
              <rect x="72" y="105" width="30" height="20" rx="4" fill="#f43f5e" />
              <text x="87" y="119" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">R</text>

              {/* Switched OFF Flow */}
              {(activeTab === 'off' || activeTab === 'default') && (
                <>
                  <path d="M 102 115 C 140 115 160 85 177 62" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 3" markerEnd="url(#bio-arrow-rose)" />
                  <rect x="165" y="20" width="25" height="15" rx="3" fill="#ef4444" />
                  <text x="177" y="31" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">Rep</text>
                  <text x="300" y="110" fill="#ef4444" fontSize="11" fontWeight="bold">
                    ✕ Repressor binds to Operator ⟶ RNA Pol blocked ⟶ NO Transcription
                  </text>
                </>
              )}

              {/* Switched ON Flow */}
              {activeTab === 'on' && (
                <>
                  {/* Inducer binds repressor */}
                  <circle cx="115" cy="115" r="7" fill="#10b981" />
                  <text x="115" y="118" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">L</text>
                  <text x="145" y="135" fill="#10b981" fontSize="9" fontWeight="bold">Inducer (Allolactose) binds repressor ⟶ Inactive</text>

                  {/* Transcription of z, y, a */}
                  <line x1="235" y1="60" x2="235" y2="90" stroke="#16a34a" strokeWidth="1.5" markerEnd="url(#bio-arrow-emerald)" />
                  <line x1="300" y1="60" x2="300" y2="90" stroke="#16a34a" strokeWidth="1.5" markerEnd="url(#bio-arrow-emerald)" />
                  <line x1="360" y1="60" x2="360" y2="90" stroke="#16a34a" strokeWidth="1.5" markerEnd="url(#bio-arrow-emerald)" />
                  <text x="235" y="105" fill="#15803d" fontSize="9" fontWeight="bold" textAnchor="middle">β-galactosidase</text>
                  <text x="300" y="105" fill="#15803d" fontSize="9" fontWeight="bold" textAnchor="middle">Permease</text>
                  <text x="360" y="105" fill="#15803d" fontSize="9" fontWeight="bold" textAnchor="middle">Transacetylase</text>
                </>
              )}
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-2 border-t border-[var(--border-subtle)] text-xs">
            <div className="p-2 rounded-lg bg-[var(--bg-surface)]">
              <strong className="text-emerald-600 dark:text-emerald-400 block">z gene:</strong>
              Codes for $\beta$-galactosidase (hydrolyses lactose into galactose + glucose).
            </div>
            <div className="p-2 rounded-lg bg-[var(--bg-surface)]">
              <strong className="text-emerald-600 dark:text-emerald-400 block">y gene:</strong>
              Codes for Permease (increases cell permeability to $\beta$-galactosides).
            </div>
            <div className="p-2 rounded-lg bg-[var(--bg-surface)]">
              <strong className="text-emerald-600 dark:text-emerald-400 block">a gene:</strong>
              Codes for Transacetylase (transfers acetyl group to $\beta$-galactosides).
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* --------------------------------------------------------------------------
   * 9. MILLER-UREY EXPERIMENT (NCERT Pg 117)
   * -------------------------------------------------------------------------- */
  if (diagramId === 'miller-urey') {
    return (
      <div className="bg-[var(--bg-surface)] p-4 sm:p-5 rounded-2xl border border-orange-500/30 space-y-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 font-bold text-xs">
              NCERT Fig 6.1 • Pg 117
            </span>
            <h4 className="font-bold text-sm text-[var(--text-primary)]">
              Miller-Urey Spark Discharge Simulation Apparatus
            </h4>
          </div>
          <span className="text-[11px] font-semibold text-orange-500 bg-orange-500/10 px-2.5 py-0.5 rounded-full">
            Evidence for Chemical Evolution
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="w-full lg:w-1/2 flex justify-center py-2">
            <svg width="290" height="290" viewBox="0 0 290 290" className="overflow-visible select-none">
              {svgDefs}
              {/* Spark Chamber (Top-Right large sphere) */}
              <circle cx="180" cy="80" r="45" fill="rgba(245, 158, 11, 0.1)" stroke="#f59e0b" strokeWidth="2" />
              {/* Spark Electrodes */}
              <line x1="145" y1="55" x2="170" y2="75" stroke="#64748b" strokeWidth="3" />
              <line x1="215" y1="55" x2="190" y2="75" stroke="#64748b" strokeWidth="3" />
              {/* Spark lightning symbol */}
              <path d="M 175 70 L 185 75 L 178 82 L 188 88" fill="none" stroke="#ef4444" strokeWidth="2.5" />
              <text x="180" y="45" fill="#f59e0b" fontSize="8.5" fontWeight="bold" textAnchor="middle">Spark discharge (800°C)</text>
              <text x="180" y="105" fill="#d97706" fontSize="8" fontWeight="bold" textAnchor="middle">CH₄ + NH₃ + H₂O + H₂</text>

              {/* Condenser Tube (Right vertical pipe) */}
              <line x1="180" y1="125" x2="180" y2="210" stroke="#3b82f6" strokeWidth="4" />
              <rect x="170" y="140" width="20" height="50" rx="3" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="1" />
              <text x="240" y="165" fill="#3b82f6" fontSize="9.5" fontWeight="bold">Condenser (Water out/in)</text>
              <line x1="195" y1="165" x2="235" y2="165" stroke="#3b82f6" strokeWidth="1" />

              {/* U-Trap collecting liquid */}
              <path d="M 180 210 L 180 240 Q 180 260 140 260 Q 100 260 100 240 L 100 200" fill="none" stroke="#64748b" strokeWidth="4" />
              <line x1="140" y1="260" x2="140" y2="280" stroke="#ef4444" strokeWidth="1.5" />
              <circle cx="140" cy="283" r="4" fill="#ef4444" />
              <text x="210" y="275" fill="#ef4444" fontSize="9.5" fontWeight="bold">Liquid with Amino Acids</text>
              <text x="210" y="287" fill="#b91c1c" fontSize="8">(Glycine, Alanine, Aspartic acid)</text>

              {/* Boiling Flask (Steam generator at bottom-left) */}
              <circle cx="100" cy="180" r="28" fill="rgba(59, 130, 246, 0.15)" stroke="#3b82f6" strokeWidth="2" />
              <text x="100" y="180" fill="#2563eb" fontSize="8" fontWeight="bold" textAnchor="middle">Boiling Water</text>
              {/* Flame below */}
              <path d="M 90 218 Q 100 208 110 218 Z" fill="#f97316" />

              {/* Steam Pipe ascending to spark chamber */}
              <path d="M 100 152 L 100 80 Q 100 60 135 70" fill="none" stroke="#64748b" strokeWidth="4" />
              <text x="55" y="110" fill="#64748b" fontSize="8.5" fontWeight="bold">Steam</text>
            </svg>
          </div>

          <div className="w-full lg:w-1/2 space-y-2.5 text-xs">
            <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1.5">
              <span className="font-bold text-orange-600 dark:text-orange-400 block text-xs">
                Key Experimental Parameters (S.L. Miller, 1953):
              </span>
              <ul className="space-y-1 text-[var(--text-secondary)]">
                <li>• <strong className="text-[var(--text-primary)]">Gaseous Mixture:</strong> Methane ($CH_4$), Ammonia ($NH_3$), Hydrogen ($H_2$), and Water vapor ($H_2O$) in ratio $2 : 1 : 2$.</li>
                <li>• <strong className="text-[var(--text-primary)]">Energy Source:</strong> High voltage electric spark discharge at <strong className="text-[var(--text-primary)]">$800^\circ\text{C}$</strong> simulating primitive lightning.</li>
                <li>• <strong className="text-[var(--text-primary)]">Results:</strong> Formation of simple organic compounds — amino acids (glycine, alanine, aspartic acid), sugars, nitrogenous bases, pigments, and fats.</li>
                <li>• <strong className="text-[var(--text-primary)]">Significance:</strong> Provided direct experimental validation for Oparin-Haldane theory of chemical evolution.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* --------------------------------------------------------------------------
   * 10. HARDY-WEINBERG NATURAL SELECTION (NCERT Pg 121)
   * -------------------------------------------------------------------------- */
  if (diagramId === 'hardy-weinberg-selection') {
    return (
      <div className="bg-[var(--bg-surface)] p-4 sm:p-5 rounded-2xl border border-emerald-500/30 space-y-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
              NCERT Fig 6.8 • Pg 121
            </span>
            <h4 className="font-bold text-sm text-[var(--text-primary)]">
              Operation of Natural Selection: Stabilizing, Directional & Disruptive
            </h4>
          </div>
          <span className="text-[11px] font-semibold text-emerald-500 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
            Graph Analysis (3M)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {/* Curve 1: Stabilizing */}
          <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex flex-col items-center text-center space-y-2">
            <span className="font-bold text-xs text-blue-600 dark:text-blue-400">1. Stabilizing Selection</span>
            <svg width="120" height="90" viewBox="0 0 120 90" className="overflow-visible select-none">
              <line x1="10" y1="80" x2="110" y2="80" stroke="#94a3b8" strokeWidth="1" />
              {/* Original bell curve */}
              <path d="M 15 80 Q 60 20 105 80" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="2 2" />
              {/* Tall narrow peak */}
              <path d="M 30 80 Q 60 5 90 80" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2.5" />
            </svg>
            <p className="text-[11px] text-[var(--text-secondary)]">
              Mean phenotype is favored; peak gets higher and narrower (e.g. human birth weight).
            </p>
          </div>

          {/* Curve 2: Directional */}
          <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex flex-col items-center text-center space-y-2">
            <span className="font-bold text-xs text-amber-600 dark:text-amber-400">2. Directional Selection</span>
            <svg width="120" height="90" viewBox="0 0 120 90" className="overflow-visible select-none">
              <line x1="10" y1="80" x2="110" y2="80" stroke="#94a3b8" strokeWidth="1" />
              {/* Original bell curve */}
              <path d="M 15 80 Q 50 30 85 80" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="2 2" />
              {/* Shifted peak */}
              <path d="M 35 80 Q 80 20 115 80" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" strokeWidth="2.5" />
            </svg>
            <p className="text-[11px] text-[var(--text-secondary)]">
              Peak shifts in one direction towards an extreme phenotype (e.g. industrial melanism).
            </p>
          </div>

          {/* Curve 3: Disruptive */}
          <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex flex-col items-center text-center space-y-2">
            <span className="font-bold text-xs text-rose-600 dark:text-rose-400">3. Disruptive Selection</span>
            <svg width="120" height="90" viewBox="0 0 120 90" className="overflow-visible select-none">
              <line x1="10" y1="80" x2="110" y2="80" stroke="#94a3b8" strokeWidth="1" />
              {/* Two peaks forming */}
              <path d="M 15 80 Q 38 25 60 70 Q 82 25 105 80" fill="rgba(244, 63, 94, 0.2)" stroke="#f43f5e" strokeWidth="2.5" />
            </svg>
            <p className="text-[11px] text-[var(--text-secondary)]">
              Both peripheral extremes are favored while mean is selected against; two peaks form.
            </p>
          </div>
        </div>
      </div>
    );
  }

  /* --------------------------------------------------------------------------
   * 11. HIV REPLICATION IN HOST CELL (NCERT Pg 139)
   * -------------------------------------------------------------------------- */
  if (diagramId === 'hiv-lifecycle') {
    return (
      <div className="bg-[var(--bg-surface)] p-4 sm:p-5 rounded-2xl border border-rose-500/30 space-y-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 font-bold text-xs">
              NCERT Fig 7.6 • Pg 139
            </span>
            <h4 className="font-bold text-sm text-[var(--text-primary)]">
              Replication of Retrovirus (HIV) in Macrophage & T_H Cell
            </h4>
          </div>
          <span className="text-[11px] font-semibold text-rose-500 bg-rose-500/10 px-2.5 py-0.5 rounded-full">
            Case-Based / 5M
          </span>
        </div>

        <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center font-medium">
            <div className="p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
              <span className="font-bold text-rose-500 block">1. Viral Entry</span>
              HIV glycoprotein binds CD4 receptor on macrophage.
            </div>
            <div className="p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
              <span className="font-bold text-amber-500 block">2. Reverse Transcription</span>
              Viral RNA $\to$ viral DNA by Reverse Transcriptase.
            </div>
            <div className="p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
              <span className="font-bold text-blue-500 block">3. Integration</span>
              Viral DNA incorporates into host genome (Integrase).
            </div>
            <div className="p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
              <span className="font-bold text-purple-500 block">4. Transcription</span>
              Host machinery copies viral RNA & translates proteins.
            </div>
            <div className="p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
              <span className="font-bold text-emerald-500 block">5. Progeny Release</span>
              New virions bud out, destroy Helper T ($T_H$) cells.
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Fallback if no matching diagram
  return (
    <div className="p-4 rounded-xl border border-dashed border-[var(--border-subtle)] text-center text-xs text-[var(--text-muted)]">
      Diagram reference for ID: {diagramId}
    </div>
  );
}
