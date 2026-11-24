import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, CheckCircle2, Circle } from 'lucide-react';
import { isTopicCompleted } from '../../utils/studyTopicTicks';

/**
 * Clean, exam-ready SVG diagrams for NCERT Class 12 Biology Volume 2 (Chapters 9–13)
 * Important & Repeated Past Board Questions + User's Handwritten/Textbook Marked Notes.
 */
export default function BiologyExamDiagramCard({
  diagramId,
  title,
  subtitle,
  sectionId = null,
  completedSections = [],
  onToggleTopic = null,
  allSectionTopicIds = []
}) {
  const [isMinimized, setIsMinimized] = useState(false);
  const topicId = sectionId ? `${sectionId}::vdiag-${diagramId}` : null;
  const isDone = topicId ? isTopicCompleted(topicId, sectionId, completedSections) : false;

  const renderSvg = () => {
    switch (diagramId) {
      // =========================================================================
      // CHAPTER 11: Population Density Flowchart (Fig. 11.2) + Growth Curves (J & S)
      // =========================================================================
      case 'population-density-and-growth-curves':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* 1. Fig 11.2: Natality, Mortality, Immigration & Emigration Flowchart */}
            <div className="p-4 rounded-xl bg-[#0b1917] border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-serif font-bold text-[#FBF7EE]">
                  1. Population Density Fluctuation Flowchart (NCERT Fig. 11.2)
                </span>
                <span className="text-[10px] font-mono text-emerald-300 px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30">
                  N_(t+1) = N_t + [(B + I) − (D + E)]
                </span>
              </div>
              <svg viewBox="0 0 420 265" className="w-full h-auto max-h-[250px] mx-auto overflow-visible">
                <defs>
                  <marker id="bio-arrow-plus" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399" />
                  </marker>
                  <marker id="bio-arrow-minus" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#f87171" />
                  </marker>
                </defs>

                {/* Top Box: Immigration (I) */}
                <rect x="145" y="10" width="130" height="44" rx="8" fill="#102824" stroke="#34d399" strokeWidth="1.8" />
                <text x="210" y="29" textAnchor="middle" fill="#FBF7EE" fontSize="12" fontWeight="bold">Immigration</text>
                <text x="210" y="45" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold">(I)</text>

                {/* Arrow Down from Immigration to Population Density */}
                <line x1="210" y1="56" x2="210" y2="96" stroke="#34d399" strokeWidth="3" markerEnd="url(#bio-arrow-plus)" />
                <text x="226" y="82" fill="#34d399" fontSize="15" fontWeight="bold">+</text>

                {/* Left Circle: Natality (B) */}
                <circle cx="55" cy="132" r="42" fill="#102824" stroke="#34d399" strokeWidth="1.8" />
                <text x="55" y="128" textAnchor="middle" fill="#FBF7EE" fontSize="12" fontWeight="bold">Natality</text>
                <text x="55" y="145" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold">(B)</text>

                {/* Arrow Right from Natality to Population Density */}
                <line x1="100" y1="132" x2="142" y2="132" stroke="#34d399" strokeWidth="3" markerEnd="url(#bio-arrow-plus)" />
                <text x="120" y="122" textAnchor="middle" fill="#34d399" fontSize="15" fontWeight="bold">+</text>

                {/* Center Square: Population Density (N) */}
                <rect x="148" y="100" width="124" height="64" rx="10" fill="#173831" stroke="#D4AF37" strokeWidth="2.2" />
                <text x="210" y="122" textAnchor="middle" fill="#FBF7EE" fontSize="12.5" fontWeight="bold">Population</text>
                <text x="210" y="138" textAnchor="middle" fill="#FBF7EE" fontSize="12.5" fontWeight="bold">Density</text>
                <text x="210" y="155" textAnchor="middle" fill="#D4AF37" fontSize="12" fontWeight="bold">(N)</text>

                {/* Arrow Right from Population Density to Mortality */}
                <line x1="274" y1="132" x2="318" y2="132" stroke="#f87171" strokeWidth="3" markerEnd="url(#bio-arrow-minus)" />
                <text x="296" y="122" textAnchor="middle" fill="#f87171" fontSize="16" fontWeight="bold">−</text>

                {/* Right Circle: Mortality (D) */}
                <circle cx="365" cy="132" r="42" fill="#1f1416" stroke="#f87171" strokeWidth="1.8" />
                <text x="365" y="128" textAnchor="middle" fill="#FBF7EE" fontSize="12" fontWeight="bold">Mortality</text>
                <text x="365" y="145" textAnchor="middle" fill="#f87171" fontSize="11" fontWeight="bold">(D)</text>

                {/* Arrow Down from Population Density to Emigration */}
                <line x1="210" y1="166" x2="210" y2="206" stroke="#f87171" strokeWidth="3" markerEnd="url(#bio-arrow-minus)" />
                <text x="226" y="191" fill="#f87171" fontSize="16" fontWeight="bold">−</text>

                {/* Bottom Box: Emigration (E) */}
                <rect x="145" y="210" width="130" height="44" rx="8" fill="#1f1416" stroke="#f87171" strokeWidth="1.8" />
                <text x="210" y="229" textAnchor="middle" fill="#FBF7EE" fontSize="12" fontWeight="bold">Emigration</text>
                <text x="210" y="245" textAnchor="middle" fill="#f87171" fontSize="11" fontWeight="bold">(E)</text>
              </svg>
            </div>

            {/* 2. Handwritten Note Reference: Exponential (J-Shape) vs Logistic (S-Sigmoid) Growth Curves */}
            <div className="p-4 rounded-xl bg-[#0b1917] border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-serif font-bold text-[#FBF7EE]">
                  2. Population Growth Curves (J-Shape vs S-Sigmoid Phases)
                </span>
                <span className="text-[10px] font-mono text-amber-300 px-2 py-0.5 rounded bg-amber-500/15 border border-amber-500/30">
                  From Handwritten Notes
                </span>
              </div>
              <svg viewBox="0 0 420 265" className="w-full h-auto max-h-[250px] mx-auto overflow-visible">
                {/* Axes */}
                <line x1="48" y1="220" x2="395" y2="220" stroke="#94a3b8" strokeWidth="1.8" />
                <line x1="48" y1="220" x2="48" y2="20" stroke="#94a3b8" strokeWidth="1.8" />
                <text x="225" y="245" textAnchor="middle" fill="#cbd5e1" fontSize="11" fontWeight="bold">Time (t) →</text>
                <text x="16" y="120" textAnchor="middle" fill="#cbd5e1" fontSize="11" fontWeight="bold" transform="rotate(-90 16 120)">
                  Population Density (N) ↑
                </text>

                {/* Carrying Capacity K dashed horizontal line */}
                <line x1="48" y1="68" x2="390" y2="68" stroke="#f59e0b" strokeWidth="1.6" strokeDasharray="5,4" />
                <text x="38" y="72" textAnchor="end" fill="#fbbf24" fontSize="12" fontWeight="bold">K</text>
                <text x="315" y="59" fill="#fbbf24" fontSize="10" fontWeight="bold">Carrying Capacity (K) / Asymptote</text>

                {/* Curve a: Exponential J-shaped curve */}
                <path d="M 55 208 Q 145 202, 185 140 T 235 22" fill="none" stroke="#38bdf8" strokeWidth="2.8" />
                <text x="150" y="42" fill="#38bdf8" fontSize="11" fontWeight="bold">(a) Exponential (J-Shape)</text>
                <text x="150" y="56" fill="#7dd3fc" fontSize="10.5" fontFamily="monospace">dN/dt = rN</text>

                {/* Curve b: Logistic S-shaped (Sigmoid) curve */}
                <path d="M 55 208 C 110 206, 145 190, 185 135 C 225 85, 270 70, 385 69" fill="none" stroke="#34d399" strokeWidth="2.8" />
                <text x="255" y="102" fill="#34d399" fontSize="11" fontWeight="bold">(b) Logistic (S-Sigmoid)</text>
                <text x="255" y="117" fill="#6ee7b7" fontSize="10.5" fontFamily="monospace">dN/dt = rN[(K − N)/K]</text>

                {/* Phase Markers along Sigmoid Curve (from User's Handwritten Sheet) */}
                <circle cx="95" cy="204" r="3.5" fill="#fbbf24" />
                <text x="95" y="216" textAnchor="middle" fill="#fde68a" fontSize="9.5">1. Lag (Initial)</text>

                <circle cx="168" cy="158" r="3.5" fill="#fbbf24" />
                <text x="128" y="154" textAnchor="end" fill="#fde68a" fontSize="9.5">2. Log (Accelerating)</text>

                <circle cx="228" cy="92" r="3.5" fill="#fbbf24" />
                <text x="235" y="85" fill="#fde68a" fontSize="9.5">3. Decelerating</text>

                <circle cx="335" cy="69" r="3.5" fill="#fbbf24" />
                <text x="335" y="83" textAnchor="middle" fill="#fde68a" fontSize="9.5">4. Asymptote (Resting)</text>
              </svg>
            </div>
          </div>
        );

      // =========================================================================
      // CHAPTER 12: Ecological Pyramids — Inverted Biomass in Sea (Fig. 12.4c) vs Upright Energy
      // =========================================================================
      case 'ecological-pyramids-comparison':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* 1. Fig 12.4(c): Inverted Pyramid of Biomass in Sea */}
            <div className="p-4 rounded-xl bg-[#0b1917] border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-serif font-bold text-[#FBF7EE]">
                  1. Inverted Pyramid of Biomass in Aquatic / Sea Ecosystem (Fig. 12.4c)
                </span>
                <span className="text-[10px] font-mono text-sky-300 px-2 py-0.5 rounded bg-sky-500/15 border border-sky-500/30">
                  Dry Weight (g m⁻²)
                </span>
              </div>
              <svg viewBox="0 0 400 210" className="w-full h-auto max-h-[200px] mx-auto">
                {/* Top Bar: Primary Consumers (PC) - Zooplankton / Small Fishes = 21 */}
                <rect x="75" y="38" width="250" height="52" rx="6" fill="#d97706" fillOpacity="0.28" stroke="#fbbf24" strokeWidth="2" />
                <text x="200" y="61" textAnchor="middle" fill="#FBF7EE" fontSize="12" fontWeight="bold">
                  Primary Consumers (PC) — Zooplankton / Fishes
                </text>
                <text x="200" y="79" textAnchor="middle" fill="#fde68a" fontSize="11" fontFamily="monospace" fontWeight="bold">
                  Standing Crop Biomass = 21 g m⁻²
                </text>

                {/* Bottom Bar: Producers (P) - Phytoplankton = 4 */}
                <rect x="145" y="96" width="110" height="50" rx="6" fill="#10b981" fillOpacity="0.25" stroke="#34d399" strokeWidth="2" />
                <text x="200" y="118" textAnchor="middle" fill="#FBF7EE" fontSize="11.5" fontWeight="bold">
                  Producers (P)
                </text>
                <text x="200" y="135" textAnchor="middle" fill="#6ee7b7" fontSize="10.5" fontFamily="monospace" fontWeight="bold">
                  Phytoplankton = 4 g m⁻²
                </text>

                <text x="200" y="176" textAnchor="middle" fill="#cbd5e1" fontSize="10.5">
                  Small standing crop of phytoplankton (rapid reproduction &amp; turnover)
                </text>
                <text x="200" y="192" textAnchor="middle" fill="#cbd5e1" fontSize="10.5">
                  supports a much larger standing crop of zooplankton &amp; fishes.
                </text>
              </svg>
            </div>

            {/* 2. Always Upright Pyramid of Energy (Lindeman's 10% Law) */}
            <div className="p-4 rounded-xl bg-[#0b1917] border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-serif font-bold text-[#FBF7EE]">
                  2. Pyramid of Energy — ALWAYS Upright (Never Inverted)
                </span>
                <span className="text-[10px] font-mono text-emerald-300 px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30">
                  10% Law
                </span>
              </div>
              <svg viewBox="0 0 400 210" className="w-full h-auto max-h-[200px] mx-auto">
                {/* TC: 10 J */}
                <rect x="165" y="16" width="70" height="32" rx="4" fill="#ef4444" fillOpacity="0.28" stroke="#f87171" strokeWidth="1.6" />
                <text x="200" y="36" textAnchor="middle" fill="#fecaca" fontSize="10.5" fontWeight="bold">TC (10 J)</text>

                {/* SC: 100 J */}
                <rect x="130" y="52" width="140" height="34" rx="4" fill="#f59e0b" fillOpacity="0.25" stroke="#fbbf24" strokeWidth="1.6" />
                <text x="200" y="73" textAnchor="middle" fill="#fde68a" fontSize="11" fontWeight="bold">Secondary Consumers (100 J)</text>

                {/* PC: 1,000 J */}
                <rect x="90" y="90" width="220" height="36" rx="4" fill="#38bdf8" fillOpacity="0.25" stroke="#38bdf8" strokeWidth="1.6" />
                <text x="200" y="112" textAnchor="middle" fill="#bae6fd" fontSize="11" fontWeight="bold">Primary Consumers (1,000 J)</text>

                {/* Producers: 10,000 J */}
                <rect x="40" y="130" width="320" height="40" rx="5" fill="#10b981" fillOpacity="0.28" stroke="#34d399" strokeWidth="1.8" />
                <text x="200" y="154" textAnchor="middle" fill="#a7f3d0" fontSize="11.5" fontWeight="bold">
                  Producers (10,000 J from 1,000,000 J Sunlight at 1% PAR)
                </text>

                <text x="200" y="192" textAnchor="middle" fill="#cbd5e1" fontSize="10.5">
                  90% energy lost as heat at each trophic transfer → Always Upright!
                </text>
              </svg>
            </div>
          </div>
        );

      // =========================================================================
      // CHAPTER 13: Global Biodiversity Pie Charts (Fig. 13.1) & Species-Area Curve (Fig. 13.2)
      // =========================================================================
      case 'biodiversity-pie-and-humboldt-graph':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* 1. Fig 13.1: Global Biodiversity Proportionate Taxa */}
            <div className="p-4 rounded-xl bg-[#0b1917] border border-white/10 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-serif font-bold text-[#FBF7EE]">
                  1. Global Biodiversity Pie-Chart Shares (NCERT Fig. 13.1)
                </span>
                <span className="text-[10px] font-mono text-amber-300 px-2 py-0.5 rounded bg-amber-500/15 border border-amber-500/30">
                  Board Labelling Favorite
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
                <div className="p-3 rounded-lg bg-[#102420] border border-emerald-500/25 space-y-1.5">
                  <div className="font-mono text-[11px] font-bold text-emerald-300 uppercase">Invertebrates</div>
                  <div className="text-[#FBF7EE] font-bold">• Insects (~70%)</div>
                  <div className="text-white/75 text-[11px]">• Other animal groups</div>
                  <div className="text-white/75 text-[11px]">• Molluscs</div>
                  <div className="text-white/75 text-[11px]">• Crustaceans</div>
                  <div className="text-[10px] text-amber-300 pt-1 font-mono">7 out of 10 animals are Insects!</div>
                </div>
                <div className="p-3 rounded-lg bg-[#102420] border border-sky-500/25 space-y-1.5">
                  <div className="font-mono text-[11px] font-bold text-sky-300 uppercase">Vertebrates</div>
                  <div className="text-[#FBF7EE] font-bold">• Fishes (~50%)</div>
                  <div className="text-white/75 text-[11px]">• Birds</div>
                  <div className="text-white/75 text-[11px]">• Reptiles</div>
                  <div className="text-white/75 text-[11px]">• Amphibians</div>
                  <div className="text-white/75 text-[11px]">• Mammals</div>
                </div>
                <div className="p-3 rounded-lg bg-[#102420] border border-amber-500/25 space-y-1.5">
                  <div className="font-mono text-[11px] font-bold text-amber-300 uppercase">Plants</div>
                  <div className="text-[#FBF7EE] font-bold">• Fungi &amp; Angiosperms</div>
                  <div className="text-white/75 text-[11px]">• Algae</div>
                  <div className="text-white/75 text-[11px]">• Mosses &amp; Ferns</div>
                  <div className="text-white/75 text-[11px]">• Lichens</div>
                  <div className="text-[10px] text-emerald-300 pt-1 font-mono">Fungi &gt; Fishes+Amph+Rept+Mammals</div>
                </div>
              </div>
            </div>

            {/* 2. Fig 13.2: Alexander von Humboldt Species-Area Relationship Curve */}
            <div className="p-4 rounded-xl bg-[#0b1917] border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-serif font-bold text-[#FBF7EE]">
                  2. Alexander von Humboldt Species-Area Curve (NCERT Fig. 13.2)
                </span>
                <span className="text-[10px] font-mono text-emerald-300 px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30">
                  S = CA^Z
                </span>
              </div>
              <svg viewBox="0 0 420 230" className="w-full h-auto max-h-[215px] mx-auto overflow-visible">
                {/* Axes */}
                <line x1="52" y1="190" x2="385" y2="190" stroke="#94a3b8" strokeWidth="1.8" />
                <line x1="52" y1="190" x2="52" y2="20" stroke="#94a3b8" strokeWidth="1.8" />
                <text x="220" y="214" textAnchor="middle" fill="#cbd5e1" fontSize="11" fontWeight="bold">Area (A) →</text>
                <text x="18" y="105" textAnchor="middle" fill="#cbd5e1" fontSize="11" fontWeight="bold" transform="rotate(-90 18 105)">
                  Species Richness (S) ↑
                </text>

                {/* Rectangular Hyperbola Curve: S = C A^Z */}
                <path d="M 55 186 Q 95 62, 345 44" fill="none" stroke="#38bdf8" strokeWidth="2.8" />
                <text x="200" y="42" fill="#38bdf8" fontSize="11.5" fontWeight="bold">S = C A^Z (Rectangular Hyperbola)</text>

                {/* Straight Line on Log-Log Scale: log S = log C + Z log A */}
                <line x1="65" y1="176" x2="340" y2="62" stroke="#f43f5e" strokeWidth="2.5" />
                <text x="242" y="124" fill="#fda4af" fontSize="11" fontWeight="bold">log S = log C + Z log A</text>
                <text x="242" y="140" fill="#fb7185" fontSize="10" fontFamily="monospace">(Straight line on log-log scale)</text>
                <text x="242" y="156" fill="#fde68a" fontSize="9.5" fontFamily="monospace">Z = 0.1–0.2 (Small) | 0.6–1.2 (Continent) | 1.15 (Frugivores)</text>
              </svg>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const content = renderSvg();
  if (!content) return null;

  return (
    <div
      className={`p-4 sm:p-5 rounded-2xl bg-[var(--bg-elevated)] border shadow-xs space-y-3 transition-all ${
        isDone ? 'border-[var(--accent-primary)]' : 'border-[var(--border-default)]'
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => setIsMinimized((p) => !p)}
          className="text-left flex items-center gap-2 min-w-0 flex-1 cursor-pointer group"
        >
          <Sparkles size={16} className="text-[var(--accent-primary)] shrink-0" />
          <div className="min-w-0">
            <h5 className="font-serif text-sm sm:text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors truncate">
              {title || 'NCERT Board Diagram Reference'}
            </h5>
            {subtitle && (
              <p className="text-[11px] text-[var(--text-muted)] truncate">{subtitle}</p>
            )}
          </div>
        </button>

        <div className="flex items-center gap-2 shrink-0" data-no-print="true">
          {topicId && onToggleTopic && (
            <button
              type="button"
              onClick={() => onToggleTopic(topicId, sectionId, allSectionTopicIds)}
              className={`p-1.5 rounded-full transition-all cursor-pointer flex items-center justify-center ${
                isDone
                  ? 'bg-[var(--accent-primary)] text-white shadow-2xs scale-105'
                  : 'border border-[var(--border-default)] text-[var(--text-muted)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]'
              }`}
              title={isDone ? 'Mark diagram incomplete' : 'Mark diagram completed'}
            >
              {isDone ? <CheckCircle2 size={16} /> : <Circle size={16} />}
            </button>
          )}

          <button
            type="button"
            onClick={() => setIsMinimized((p) => !p)}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[var(--bg-surface)] hover:bg-[var(--accent-primary)]/15 border border-[var(--border-default)] text-[10px] font-mono font-bold text-[var(--accent-primary)] transition-colors cursor-pointer shrink-0"
          >
            <span>{isMinimized ? 'Expand' : 'Minimize'}</span>
            {isMinimized ? <ChevronDown size={13} /> : <ChevronUp size={13} />}
          </button>
        </div>
      </div>

      <div data-print-expand="true" className={isMinimized ? 'hidden' : 'block'}>
        {content}
      </div>
    </div>
  );
}
