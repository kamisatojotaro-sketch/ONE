import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, CheckCircle2, Circle } from 'lucide-react';
import { isTopicCompleted } from '../../utils/studyTopicTicks';
import ChemicalReactionDisplay from './ChemicalReactionDisplay';

export default function ChemistryExamDiagramCard({
  diagramId,
  title,
  subtitle,
  defaultMinimized = false,
  sectionId = null,
  completedSections = [],
  onToggleTopic = null,
  onToggleTopicGroup = null,
  allSectionTopicIds = []
}) {
  const [isMinimized, setIsMinimized] = useState(defaultMinimized);
  const [minimizedSubItems, setMinimizedSubItems] = useState({});

  const toggleSubItem = (key) => {
    setMinimizedSubItems((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!diagramId) return null;

  const isMultiReactionScheme = diagramId === 'glucose-five-reactions';
  const schemeTopicIds =
    sectionId && isMultiReactionScheme
      ? [1, 2, 3, 4, 5].map((n) => `${sectionId}::vdiag-rxn-${n}`)
      : sectionId
      ? [`${sectionId}::vdiag-${diagramId}`]
      : [];
  const schemeCompletedCount = sectionId
    ? schemeTopicIds.filter((tId) => isTopicCompleted(tId, sectionId, completedSections)).length
    : 0;
  const isSchemeAllDone =
    sectionId && schemeTopicIds.length > 0 && schemeCompletedCount === schemeTopicIds.length;

  const renderDiagram = () => {
    switch (diagramId) {
      case 'cft-octahedral-tetrahedral':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* (a) Octahedral Crystal Field Splitting */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="font-serif text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                  (a) Splitting of d-orbitals in Octahedral Field (Δ₀)
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--accent-primary)] border border-[var(--border-subtle)]">
                  CN = 6
                </span>
              </div>
              <svg viewBox="0 0 420 260" className="w-full h-auto text-[var(--text-primary)]">
                {/* Energy Axis */}
                <line x1="26" y1="235" x2="26" y2="25" stroke="currentColor" strokeWidth="1.5" />
                <polygon points="26,18 22,28 30,28" fill="currentColor" />
                <text x="16" y="130" fontSize="11" fill="currentColor" transform="rotate(-90 16 130)" textAnchor="middle" fontFamily="monospace">
                  Energy
                </text>

                {/* Free Metal Ion 5 d-orbitals */}
                <g transform="translate(45, 175)">
                  {[0, 14, 28, 42, 56].map((x, i) => (
                    <rect key={i} x={x} y="0" width="14" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" />
                  ))}
                  <text x="35" y="34" fontSize="9.5" fill="currentColor" textAnchor="middle">Free metal ion</text>
                  <text x="35" y="46" fontSize="8.5" fill="var(--text-muted)" textAnchor="middle">(5 degenerate d)</text>
                </g>

                {/* Connector to Spherical Field (Barycentre) */}
                <line x1="115" y1="184" x2="150" y2="128" stroke="var(--text-muted)" strokeWidth="1.2" strokeDasharray="3,3" />

                {/* Average Energy in Spherical Field */}
                <g transform="translate(150, 118)">
                  {[0, 14, 28, 42, 56].map((x, i) => (
                    <rect key={i} x={x} y="0" width="14" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" />
                  ))}
                  <text x="35" y="34" fontSize="9" fill="currentColor" textAnchor="middle">Average energy</text>
                  <text x="35" y="45" fontSize="8.5" fill="var(--text-muted)" textAnchor="middle">(Spherical field)</text>
                </g>

                {/* Barycentre Dashed Line */}
                <line x1="220" y1="127" x2="395" y2="127" stroke="var(--accent-primary)" strokeWidth="1.4" strokeDasharray="4,3" />
                <text x="275" y="122" fontSize="9.5" fill="var(--accent-primary)" textAnchor="middle" fontFamily="monospace">
                  Barycentre
                </text>

                {/* Splitting Lines to eg and t2g */}
                <line x1="220" y1="127" x2="320" y2="62" stroke="currentColor" strokeWidth="1.3" strokeDasharray="3,3" />
                <line x1="220" y1="127" x2="310" y2="192" stroke="currentColor" strokeWidth="1.3" strokeDasharray="3,3" />

                {/* eg orbitals (dx2-y2, dz2) */}
                <g transform="translate(325, 48)">
                  <rect x="0" y="0" width="16" height="18" fill="none" stroke="var(--accent-primary)" strokeWidth="1.6" />
                  <rect x="16" y="0" width="16" height="18" fill="none" stroke="var(--accent-primary)" strokeWidth="1.6" />
                  <text x="42" y="13" fontSize="11" fontWeight="bold" fill="var(--accent-primary)">e_g</text>
                  <text x="16" y="-6" fontSize="9" fill="currentColor" textAnchor="middle">d_(x²-y²), d_(z²)</text>
                </g>

                {/* t2g orbitals (dxy, dyz, dzx) */}
                <g transform="translate(315, 185)">
                  <rect x="0" y="0" width="16" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <rect x="16" y="0" width="16" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <rect x="32" y="0" width="16" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <text x="56" y="13" fontSize="11" fontWeight="bold" fill="currentColor">t_2g</text>
                  <text x="24" y="32" fontSize="9" fill="currentColor" textAnchor="middle">d_xy, d_yz, d_zx</text>
                </g>

                {/* +3/5 Δo and -2/5 Δo arrows */}
                <line x1="305" y1="127" x2="305" y2="62" stroke="var(--accent-primary)" strokeWidth="1.3" />
                <text x="280" y="95" fontSize="9.5" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">+3/5 Δ₀</text>

                <line x1="305" y1="127" x2="305" y2="192" stroke="currentColor" strokeWidth="1.3" />
                <text x="280" y="165" fontSize="9.5" fontWeight="bold" fill="currentColor" textAnchor="middle">-2/5 Δ₀</text>

                {/* Total Δo bracket */}
                <line x1="395" y1="57" x2="395" y2="194" stroke="var(--accent-primary)" strokeWidth="1.4" />
                <text x="408" y="130" fontSize="11" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">Δ₀</text>
              </svg>
            </div>

            {/* (b) Tetrahedral Crystal Field Splitting */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="font-serif text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                  (b) Splitting of d-orbitals in Tetrahedral Field (Δₜ)
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--accent-primary)] border border-[var(--border-subtle)]">
                  CN = 4 • Δₜ = (4/9)Δ₀
                </span>
              </div>
              <svg viewBox="0 0 420 260" className="w-full h-auto text-[var(--text-primary)]">
                {/* Energy Axis */}
                <line x1="26" y1="235" x2="26" y2="25" stroke="currentColor" strokeWidth="1.5" />
                <polygon points="26,18 22,28 30,28" fill="currentColor" />
                <text x="16" y="130" fontSize="11" fill="currentColor" transform="rotate(-90 16 130)" textAnchor="middle" fontFamily="monospace">
                  Energy
                </text>

                {/* Free Metal Ion 5 d-orbitals */}
                <g transform="translate(45, 175)">
                  {[0, 14, 28, 42, 56].map((x, i) => (
                    <rect key={i} x={x} y="0" width="14" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" />
                  ))}
                  <text x="35" y="34" fontSize="9.5" fill="currentColor" textAnchor="middle">Free metal ion</text>
                </g>

                <line x1="115" y1="184" x2="150" y2="128" stroke="var(--text-muted)" strokeWidth="1.2" strokeDasharray="3,3" />

                {/* Average Energy in Spherical Field */}
                <g transform="translate(150, 118)">
                  {[0, 14, 28, 42, 56].map((x, i) => (
                    <rect key={i} x={x} y="0" width="14" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" />
                  ))}
                  <text x="35" y="34" fontSize="9" fill="currentColor" textAnchor="middle">Average energy</text>
                </g>

                {/* Barycentre Dashed Line */}
                <line x1="220" y1="127" x2="395" y2="127" stroke="var(--accent-primary)" strokeWidth="1.4" strokeDasharray="4,3" />
                <text x="275" y="122" fontSize="9.5" fill="var(--accent-primary)" textAnchor="middle" fontFamily="monospace">
                  Barycentre
                </text>

                {/* Splitting Lines to t2 (top) and e (bottom) */}
                <line x1="220" y1="127" x2="315" y2="62" stroke="currentColor" strokeWidth="1.3" strokeDasharray="3,3" />
                <line x1="220" y1="127" x2="325" y2="192" stroke="currentColor" strokeWidth="1.3" strokeDasharray="3,3" />

                {/* t2 orbitals at top (dxy, dyz, dzx) */}
                <g transform="translate(315, 48)">
                  <rect x="0" y="0" width="16" height="18" fill="none" stroke="var(--accent-primary)" strokeWidth="1.6" />
                  <rect x="16" y="0" width="16" height="18" fill="none" stroke="var(--accent-primary)" strokeWidth="1.6" />
                  <rect x="32" y="0" width="16" height="18" fill="none" stroke="var(--accent-primary)" strokeWidth="1.6" />
                  <text x="56" y="13" fontSize="11" fontWeight="bold" fill="var(--accent-primary)">t₂</text>
                  <text x="24" y="-6" fontSize="9" fill="currentColor" textAnchor="middle">d_xy, d_yz, d_zx</text>
                </g>

                {/* e orbitals at bottom (dx2-y2, dz2) */}
                <g transform="translate(325, 185)">
                  <rect x="0" y="0" width="16" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <rect x="16" y="0" width="16" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <text x="42" y="13" fontSize="11" fontWeight="bold" fill="currentColor">e</text>
                  <text x="16" y="32" fontSize="9" fill="currentColor" textAnchor="middle">d_(x²-y²), d_(z²)</text>
                </g>

                {/* +2/5 Δt and -3/5 Δt arrows */}
                <line x1="305" y1="127" x2="305" y2="62" stroke="var(--accent-primary)" strokeWidth="1.3" />
                <text x="280" y="95" fontSize="9.5" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">+2/5 Δₜ</text>

                <line x1="305" y1="127" x2="305" y2="192" stroke="currentColor" strokeWidth="1.3" />
                <text x="280" y="165" fontSize="9.5" fontWeight="bold" fill="currentColor" textAnchor="middle">-3/5 Δₜ</text>

                {/* Total Δt bracket */}
                <line x1="395" y1="57" x2="395" y2="194" stroke="var(--accent-primary)" strokeWidth="1.4" />
                <text x="408" y="130" fontSize="11" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">Δₜ</text>
              </svg>
            </div>
          </div>
        );

      case 'cft-d4-pairing':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Case 1: Δo > P (Strong Field / Low Spin) */}
            <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-serif text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                  Case 1: d⁴ when Δ₀ &gt; P (Strong Field Ligand)
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--accent-primary)] font-bold">
                  t₂g⁴ e_g⁰ (Low Spin)
                </span>
              </div>
              <svg viewBox="0 0 320 155" className="w-full h-auto text-[var(--text-primary)]">
                {/* 5 degenerate d-orbitals on left */}
                <g transform="translate(20, 68)">
                  {[0, 16, 32, 48, 64].map((x, i) => (
                    <rect key={i} x={x} y="0" width="16" height="22" fill="none" stroke="currentColor" strokeWidth="1.4" />
                  ))}
                  <text x="40" y="36" fontSize="9.5" fill="var(--text-muted)" textAnchor="middle">d⁴ (Free ion)</text>
                </g>

                <line x1="100" y1="79" x2="180" y2="32" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3,3" />
                <line x1="100" y1="79" x2="170" y2="115" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3,3" />

                {/* eg empty boxes */}
                <g transform="translate(185, 18)">
                  <rect x="0" y="0" width="22" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="22" y="0" width="22" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <text x="54" y="16" fontSize="11" fontWeight="bold" fill="currentColor">e_g⁰</text>
                </g>

                {/* t2g 4 electrons (1 paired, 2 unpaired) */}
                <g transform="translate(172, 102)">
                  <rect x="0" y="0" width="22" height="24" fill="none" stroke="var(--accent-primary)" strokeWidth="1.6" />
                  <rect x="22" y="0" width="22" height="24" fill="none" stroke="var(--accent-primary)" strokeWidth="1.6" />
                  <rect x="44" y="0" width="22" height="24" fill="none" stroke="var(--accent-primary)" strokeWidth="1.6" />
                  {/* Paired arrows in box 1 */}
                  <text x="11" y="17" fontSize="13" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">⇅</text>
                  {/* Single up arrows in box 2 & 3 */}
                  <text x="33" y="17" fontSize="13" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">↑</text>
                  <text x="55" y="17" fontSize="13" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">↑</text>
                  <text x="76" y="16" fontSize="11" fontWeight="bold" fill="var(--accent-primary)">t₂g⁴</text>
                </g>
                <text x="160" y="146" fontSize="10" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">
                  Pairing occurs in t₂g → Configuration: t₂g⁴ e_g⁰ (n = 2)
                </text>
              </svg>
            </div>

            {/* Case 2: Δo < P (Weak Field / High Spin) */}
            <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-serif text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                  Case 2: d⁴ when Δ₀ &lt; P (Weak Field Ligand)
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--accent-primary)] font-bold">
                  t₂g³ e_g¹ (High Spin)
                </span>
              </div>
              <svg viewBox="0 0 320 155" className="w-full h-auto text-[var(--text-primary)]">
                {/* 5 degenerate d-orbitals on left */}
                <g transform="translate(20, 68)">
                  {[0, 16, 32, 48, 64].map((x, i) => (
                    <rect key={i} x={x} y="0" width="16" height="22" fill="none" stroke="currentColor" strokeWidth="1.4" />
                  ))}
                  <text x="40" y="36" fontSize="9.5" fill="var(--text-muted)" textAnchor="middle">d⁴ (Free ion)</text>
                </g>

                <line x1="100" y1="79" x2="180" y2="32" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3,3" />
                <line x1="100" y1="79" x2="170" y2="115" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3,3" />

                {/* eg 1 electron */}
                <g transform="translate(185, 18)">
                  <rect x="0" y="0" width="22" height="24" fill="none" stroke="var(--accent-primary)" strokeWidth="1.6" />
                  <rect x="22" y="0" width="22" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <text x="11" y="17" fontSize="13" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">↑</text>
                  <text x="54" y="16" fontSize="11" fontWeight="bold" fill="var(--accent-primary)">e_g¹</text>
                </g>

                {/* t2g 3 unpaired electrons */}
                <g transform="translate(172, 102)">
                  <rect x="0" y="0" width="22" height="24" fill="none" stroke="var(--accent-primary)" strokeWidth="1.6" />
                  <rect x="22" y="0" width="22" height="24" fill="none" stroke="var(--accent-primary)" strokeWidth="1.6" />
                  <rect x="44" y="0" width="22" height="24" fill="none" stroke="var(--accent-primary)" strokeWidth="1.6" />
                  <text x="11" y="17" fontSize="13" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">↑</text>
                  <text x="33" y="17" fontSize="13" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">↑</text>
                  <text x="55" y="17" fontSize="13" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">↑</text>
                  <text x="76" y="16" fontSize="11" fontWeight="bold" fill="var(--accent-primary)">t₂g³</text>
                </g>
                <text x="160" y="146" fontSize="10" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">
                  4th e⁻ enters e_g → Configuration: t₂g³ e_g¹ (n = 4)
                </text>
              </svg>
            </div>
          </div>
        );

      case 'metal-carbonyl-synergic':
        return (
          <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
            <svg viewBox="0 0 520 190" className="w-full h-auto text-[var(--text-primary)]">
              {/* Metal M center */}
              <circle cx="130" cy="95" r="24" fill="var(--bg-elevated)" stroke="currentColor" strokeWidth="1.8" />
              <text x="130" y="100" fontSize="16" fontWeight="bold" fill="currentColor" textAnchor="middle">M</text>

              {/* Filled d-orbital lobes on Metal (top & bottom) */}
              <ellipse cx="165" cy="52" rx="28" ry="14" transform="rotate(-28 165 52)" fill="var(--accent-primary)" fillOpacity="0.18" stroke="var(--accent-primary)" strokeWidth="1.5" />
              <ellipse cx="165" cy="138" rx="28" ry="14" transform="rotate(28 165 138)" fill="var(--accent-primary)" fillOpacity="0.18" stroke="var(--accent-primary)" strokeWidth="1.5" />
              <text x="90" y="45" fontSize="10" fill="var(--accent-primary)" fontWeight="bold">Filled Metal d-orbital</text>

              {/* Carbon C center */}
              <circle cx="290" cy="95" r="18" fill="var(--bg-elevated)" stroke="currentColor" strokeWidth="1.6" />
              <text x="290" y="100" fontSize="14" fontWeight="bold" fill="currentColor" textAnchor="middle">C</text>

              {/* Oxygen O center */}
              <circle cx="400" cy="95" r="18" fill="var(--bg-elevated)" stroke="currentColor" strokeWidth="1.6" />
              <text x="400" y="100" fontSize="14" fontWeight="bold" fill="currentColor" textAnchor="middle">O</text>

              {/* C=O triple/double bond lines */}
              <line x1="308" y1="91" x2="382" y2="91" stroke="currentColor" strokeWidth="1.8" />
              <line x1="308" y1="99" x2="382" y2="99" stroke="currentColor" strokeWidth="1.8" />

              {/* Vacant antibonding π* lobes on C */}
              <ellipse cx="260" cy="52" rx="26" ry="13" transform="rotate(28 260 52)" fill="none" stroke="currentColor" strokeWidth="1.4" strokeDasharray="3,2" />
              <ellipse cx="260" cy="138" rx="26" ry="13" transform="rotate(-28 260 138)" fill="none" stroke="currentColor" strokeWidth="1.4" strokeDasharray="3,2" />
              <text x="335" y="45" fontSize="10" fill="currentColor" fontWeight="bold">Vacant CO π* antibonding orbital</text>

              {/* Sigma bond lobe C -> M */}
              <ellipse cx="212" cy="95" rx="45" ry="13" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.4" />
              <line x1="255" y1="95" x2="175" y2="95" stroke="currentColor" strokeWidth="2" />
              <polygon points="168,95 178,91 178,99" fill="currentColor" />
              <text x="215" y="91" fontSize="10.5" fontWeight="bold" fill="currentColor" textAnchor="middle">σ-bond (L → M)</text>

              {/* Pi back-bonding curved arrows M -> C */}
              <path d="M 185 45 Q 215 28 242 45" fill="none" stroke="var(--accent-primary)" strokeWidth="2" />
              <polygon points="245,47 236,45 240,39" fill="var(--accent-primary)" />

              <path d="M 185 145 Q 215 162 242 145" fill="none" stroke="var(--accent-primary)" strokeWidth="2" />
              <polygon points="245,143 240,151 236,145" fill="var(--accent-primary)" />

              <text x="215" y="22" fontSize="10.5" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">
                dπ–pπ* Back-Bonding (M → CO)
              </text>
              <text x="260" y="180" fontSize="10.5" fontWeight="bold" fill="currentColor" textAnchor="middle">
                Synergic Effect: M←C σ-donation + M→C π-back-donation strengthens the M–C bond
              </text>
            </svg>
          </div>
        );

      case 'glucose-structures':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Panel 1: Open-Chain Fischer & Cyclic Fischer Hemiacetal (Structures 1 & 2) */}
            <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-serif text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                  1. Open-Chain &amp; Cyclic Fischer Projection of Glucose
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--accent-primary)]">
                  Right in Fischer → Down in Haworth
                </span>
              </div>
              <svg viewBox="0 0 430 275" className="w-full h-auto text-[var(--text-primary)]">
                {/* Structure 1: Open-Chain Fischer Projection (H-C=O at top) */}
                <g transform="translate(15, 12)">
                  <text x="85" y="12" fontSize="11" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">
                    Open-Chain Fischer
                  </text>

                  {/* Top C1: H - C = O */}
                  <text x="48" y="34" fontSize="12.5" fontWeight="bold" fill="currentColor" textAnchor="end">H</text>
                  <line x1="53" y1="31" x2="75" y2="46" stroke="currentColor" strokeWidth="1.7" />
                  <text x="85" y="54" fontSize="13" fontWeight="bold" fill="currentColor" textAnchor="middle">C</text>
                  {/* Double bond =O */}
                  <line x1="94" y1="43" x2="114" y2="29" stroke="currentColor" strokeWidth="1.6" />
                  <line x1="97" y1="48" x2="117" y2="34" stroke="currentColor" strokeWidth="1.6" />
                  <text x="122" y="34" fontSize="12.5" fontWeight="bold" fill="currentColor">O</text>

                  {/* Vertical Fischer Spine */}
                  <line x1="85" y1="59" x2="85" y2="205" stroke="currentColor" strokeWidth="1.8" />

                  {/* 4 Horizontal Crossbars (C2, C3, C4, C5) */}
                  {[85, 118, 151, 184].map((y, idx) => (
                    <line key={idx} x1="48" y1={y} x2="122" y2={y} stroke="currentColor" strokeWidth="1.6" />
                  ))}

                  {/* C2: H | OH */}
                  <text x="42" y="89" fontSize="12" fontWeight="bold" fill="currentColor" textAnchor="end">H</text>
                  <text x="128" y="89" fontSize="12" fontWeight="bold" fill="currentColor">OH</text>

                  {/* C3: HO | H */}
                  <text x="42" y="122" fontSize="12" fontWeight="bold" fill="currentColor" textAnchor="end">HO</text>
                  <text x="128" y="122" fontSize="12" fontWeight="bold" fill="currentColor">H</text>

                  {/* C4: H | OH */}
                  <text x="42" y="155" fontSize="12" fontWeight="bold" fill="currentColor" textAnchor="end">H</text>
                  <text x="128" y="155" fontSize="12" fontWeight="bold" fill="currentColor">OH</text>

                  {/* C5: H | OH */}
                  <text x="42" y="188" fontSize="12" fontWeight="bold" fill="currentColor" textAnchor="end">H</text>
                  <text x="128" y="188" fontSize="12" fontWeight="bold" fill="currentColor">OH</text>

                  {/* Bottom C6: CH2OH */}
                  <text x="85" y="224" fontSize="12.5" fontWeight="bold" fill="currentColor" textAnchor="middle">
                    CH₂OH
                  </text>
                  <text x="85" y="246" fontSize="9.5" fill="var(--text-muted)" textAnchor="middle">
                    Straight-chain D-Glucose
                  </text>
                </g>

                {/* Structure 2: Cyclic Fischer Hemiacetal Projection (with circled right groups & C5-O-C1 loop) */}
                <g transform="translate(215, 12)">
                  <text x="95" y="12" fontSize="11" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">
                    Cyclic Fischer (Hemiacetal)
                  </text>

                  {/* Top C1: H - C - (OH) */}
                  <text x="48" y="34" fontSize="12.5" fontWeight="bold" fill="currentColor" textAnchor="end">H</text>
                  <line x1="53" y1="31" x2="75" y2="46" stroke="currentColor" strokeWidth="1.7" />
                  <text x="85" y="54" fontSize="13" fontWeight="bold" fill="currentColor" textAnchor="middle">C</text>
                  <line x1="94" y1="45" x2="114" y2="31" stroke="currentColor" strokeWidth="1.7" />
                  <text x="131" y="33" fontSize="12" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">OH</text>
                  <ellipse cx="131" cy="29" rx="16" ry="11" fill="none" stroke="var(--accent-primary)" strokeWidth="1.6" />

                  {/* Vertical Fischer Spine */}
                  <line x1="85" y1="59" x2="85" y2="205" stroke="currentColor" strokeWidth="1.8" />

                  {/* Horizontal Crossbars at C2, C3, C4 */}
                  {[85, 118, 151].map((y, idx) => (
                    <line key={idx} x1="48" y1={y} x2="122" y2={y} stroke="currentColor" strokeWidth="1.6" />
                  ))}

                  {/* C2: H | (OH) circled */}
                  <text x="42" y="89" fontSize="12" fontWeight="bold" fill="currentColor" textAnchor="end">H</text>
                  <text x="138" y="89" fontSize="12" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">OH</text>
                  <ellipse cx="138" cy="85" rx="16" ry="11" fill="none" stroke="var(--accent-primary)" strokeWidth="1.6" />

                  {/* C3: HO | (H) circled */}
                  <text x="42" y="122" fontSize="12" fontWeight="bold" fill="currentColor" textAnchor="end">HO</text>
                  <text x="136" y="122" fontSize="12" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">H</text>
                  <ellipse cx="136" cy="118" rx="14" ry="11" fill="none" stroke="var(--accent-primary)" strokeWidth="1.6" />

                  {/* C4: H | (OH) circled */}
                  <text x="42" y="155" fontSize="12" fontWeight="bold" fill="currentColor" textAnchor="end">H</text>
                  <text x="138" y="155" fontSize="12" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">OH</text>
                  <ellipse cx="138" cy="151" rx="16" ry="11" fill="none" stroke="var(--accent-primary)" strokeWidth="1.6" />

                  {/* C5: H on left + Hemiacetal Oxygen Bridge to C1 on right */}
                  <line x1="48" y1="184" x2="85" y2="184" stroke="currentColor" strokeWidth="1.6" />
                  <text x="42" y="188" fontSize="12" fontWeight="bold" fill="currentColor" textAnchor="end">H</text>

                  {/* Hemiacetal bridge: C5(85,184) -> (180,184) -> O(180,120) -> (180,50) -> C1(96,50) */}
                  <path
                    d="M 85 184 L 180 184 L 180 132 M 180 104 L 180 50 L 96 50"
                    fill="none"
                    stroke="var(--accent-primary)"
                    strokeWidth="1.8"
                  />
                  <text x="180" y="123" fontSize="13.5" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">
                    O
                  </text>

                  {/* Bottom C6: CH2OH */}
                  <text x="85" y="224" fontSize="12.5" fontWeight="bold" fill="currentColor" textAnchor="middle">
                    CH₂OH
                  </text>
                  <text x="105" y="246" fontSize="9.5" fill="var(--text-muted)" textAnchor="middle">
                    Circled right groups go DOWN in ring
                  </text>
                </g>
              </svg>
            </div>

            {/* Panel 2: Cyclic Haworth Pyranose Structures — α-form & β-form (Structures 3 & 4) */}
            <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-serif text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                  2. Cyclic Haworth Projections: α-form &amp; β-form
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--accent-primary)]">
                  α-D &amp; β-D Glucopyranose
                </span>
              </div>
              <svg viewBox="0 0 460 275" className="w-full h-auto text-[var(--text-primary)]">
                {/* Structure 3: α-form (α-D-Glucopyranose) */}
                <g transform="translate(8, 12)">
                  <text x="102" y="12" fontSize="11" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">
                    α-D-(+)-Glucopyranose
                  </text>

                  {/* Pyranose Hexagon: C5(55,82) - O(145,82) - C1(178,132) - C2(145,182) - C3(55,182) - C4(22,132) */}
                  <polygon
                    points="55,82 145,82 178,132 145,182 55,182 22,132"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  {/* Ring Oxygen O at top-right vertex (145,82) */}
                  <circle cx="145" cy="82" r="10" fill="var(--bg-base)" />
                  <text x="145" y="87" fontSize="13.5" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">
                    O
                  </text>

                  {/* C5 (55,82): CH2OH up, H down */}
                  <line x1="55" y1="45" x2="55" y2="110" stroke="currentColor" strokeWidth="1.6" />
                  <text x="55" y="38" fontSize="11.5" fontWeight="bold" fill="currentColor" textAnchor="middle">CH₂OH</text>
                  <text x="55" y="123" fontSize="11" fontWeight="bold" fill="currentColor" textAnchor="middle">H</text>

                  {/* C4 (22,132): H up, OH down */}
                  <line x1="22" y1="96" x2="22" y2="168" stroke="currentColor" strokeWidth="1.6" />
                  <text x="22" y="89" fontSize="11" fontWeight="bold" fill="currentColor" textAnchor="middle">H</text>
                  <text x="22" y="182" fontSize="11.5" fontWeight="bold" fill="currentColor" textAnchor="middle">OH</text>

                  {/* C3 (55,182): OH up, H down */}
                  <line x1="55" y1="154" x2="55" y2="214" stroke="currentColor" strokeWidth="1.6" />
                  <text x="55" y="148" fontSize="11.5" fontWeight="bold" fill="currentColor" textAnchor="middle">OH</text>
                  <text x="55" y="228" fontSize="11" fontWeight="bold" fill="currentColor" textAnchor="middle">H</text>

                  {/* C2 (145,182): H up, OH down */}
                  <line x1="145" y1="154" x2="145" y2="214" stroke="currentColor" strokeWidth="1.6" />
                  <text x="145" y="148" fontSize="11" fontWeight="bold" fill="currentColor" textAnchor="middle">H</text>
                  <text x="145" y="228" fontSize="11.5" fontWeight="bold" fill="currentColor" textAnchor="middle">OH</text>

                  {/* C1 (178,132): H up, (OH) down circled (α-form!) */}
                  <line x1="178" y1="96" x2="178" y2="168" stroke="var(--accent-primary)" strokeWidth="1.8" />
                  <text x="178" y="89" fontSize="11.5" fontWeight="bold" fill="currentColor" textAnchor="middle">H</text>
                  <text x="180" y="184" fontSize="12" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">OH</text>
                  <ellipse cx="180" cy="180" rx="17" ry="12" fill="none" stroke="var(--accent-primary)" strokeWidth="1.8" />

                  <text x="102" y="250" fontSize="13" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">
                    α form (C1 –OH Down)
                  </text>
                </g>

                {/* Structure 4: β-form (β-D-Glucopyranose) */}
                <g transform="translate(238, 12)">
                  <text x="102" y="12" fontSize="11" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">
                    β-D-(+)-Glucopyranose
                  </text>

                  {/* Pyranose Hexagon */}
                  <polygon
                    points="55,82 145,82 178,132 145,182 55,182 22,132"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  {/* Ring Oxygen O at top-right vertex (145,82) */}
                  <circle cx="145" cy="82" r="10" fill="var(--bg-base)" />
                  <text x="145" y="87" fontSize="13.5" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">
                    O
                  </text>

                  {/* C5 (55,82): CH2OH up, H down */}
                  <line x1="55" y1="45" x2="55" y2="110" stroke="currentColor" strokeWidth="1.6" />
                  <text x="55" y="38" fontSize="11.5" fontWeight="bold" fill="currentColor" textAnchor="middle">CH₂OH</text>
                  <text x="55" y="123" fontSize="11" fontWeight="bold" fill="currentColor" textAnchor="middle">H</text>

                  {/* C4 (22,132): H up, OH down */}
                  <line x1="22" y1="96" x2="22" y2="168" stroke="currentColor" strokeWidth="1.6" />
                  <text x="22" y="89" fontSize="11" fontWeight="bold" fill="currentColor" textAnchor="middle">H</text>
                  <text x="22" y="182" fontSize="11.5" fontWeight="bold" fill="currentColor" textAnchor="middle">OH</text>

                  {/* C3 (55,182): OH up, H down */}
                  <line x1="55" y1="154" x2="55" y2="214" stroke="currentColor" strokeWidth="1.6" />
                  <text x="55" y="148" fontSize="11.5" fontWeight="bold" fill="currentColor" textAnchor="middle">OH</text>
                  <text x="55" y="228" fontSize="11" fontWeight="bold" fill="currentColor" textAnchor="middle">H</text>

                  {/* C2 (145,182): H up, OH down */}
                  <line x1="145" y1="154" x2="145" y2="214" stroke="currentColor" strokeWidth="1.6" />
                  <text x="145" y="148" fontSize="11" fontWeight="bold" fill="currentColor" textAnchor="middle">H</text>
                  <text x="145" y="228" fontSize="11.5" fontWeight="bold" fill="currentColor" textAnchor="middle">OH</text>

                  {/* C1 (178,132): (OH) up circled (β-form!), H down */}
                  <line x1="178" y1="96" x2="178" y2="168" stroke="var(--accent-primary)" strokeWidth="1.8" />
                  <text x="180" y="87" fontSize="12" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">OH</text>
                  <ellipse cx="180" cy="83" rx="17" ry="12" fill="none" stroke="var(--accent-primary)" strokeWidth="1.8" />
                  <text x="178" y="183" fontSize="11.5" fontWeight="bold" fill="currentColor" textAnchor="middle">H</text>

                  <text x="102" y="250" fontSize="13" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">
                    β form (C1 –OH Up)
                  </text>
                </g>
              </svg>
            </div>
          </div>
        );

      case 'zwitter-peptide-structures':
        return (
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
            {/* 1. Zwitter Ion (Dipolar Ion in Aqueous Solution) */}
            <div className="xl:col-span-5 p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2 flex flex-col justify-between">
              <div className="flex items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-2">
                <span className="font-serif text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                  1. Zwitter Ion (Dipolar Ion Formation)
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--accent-primary)] border border-[var(--border-subtle)]">
                  Aqueous Medium
                </span>
              </div>
              <svg viewBox="0 0 400 220" className="w-full h-auto text-[var(--text-primary)]">
                {/* Left: Neutral α-Amino Acid */}
                <text x="95" y="22" fontSize="11" fontWeight="bold" fill="currentColor" textAnchor="middle" textDecoration="underline">
                  Neutral Amino Acid
                </text>
                {/* Top H above Cα */}
                <text x="88" y="52" fontSize="12" fontWeight="bold" fill="#D4A843" textAnchor="middle">H</text>
                <line x1="88" y1="57" x2="88" y2="75" stroke="currentColor" strokeWidth="1.6" />
                {/* Top =O above C */}
                <text x="132" y="52" fontSize="12" fontWeight="bold" fill="#38BDF8" textAnchor="middle">O</text>
                <line x1="129" y1="57" x2="129" y2="75" stroke="currentColor" strokeWidth="1.5" />
                <line x1="135" y1="57" x2="135" y2="75" stroke="currentColor" strokeWidth="1.5" />
                {/* Main horizontal backbone: H2N — Cα — C — OH */}
                <text x="42" y="90" fontSize="12.5" fontWeight="bold" fill="#4ADE80" textAnchor="middle">H₂N</text>
                <line x1="60" y1="86" x2="76" y2="86" stroke="currentColor" strokeWidth="1.6" />
                <text x="88" y="90" fontSize="12.5" fontWeight="bold" fill="#F87171" textAnchor="middle">Cα</text>
                <line x1="101" y1="86" x2="121" y2="86" stroke="currentColor" strokeWidth="1.6" />
                <text x="132" y="90" fontSize="12.5" fontWeight="bold" fill="#38BDF8" textAnchor="middle">C</text>
                <line x1="142" y1="86" x2="156" y2="86" stroke="currentColor" strokeWidth="1.6" />
                <text x="172" y="90" fontSize="12.5" fontWeight="bold" fill="#38BDF8" textAnchor="middle">OH</text>
                {/* Bottom R group box below Cα */}
                <line x1="88" y1="96" x2="88" y2="116" stroke="currentColor" strokeWidth="1.6" />
                <rect x="74" y="118" width="28" height="24" rx="5" fill="var(--bg-elevated)" stroke="var(--accent-primary)" strokeWidth="1.3" />
                <text x="88" y="135" fontSize="12" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">R</text>

                {/* Equilibrium Arrow */}
                <text x="204" y="84" fontSize="10" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">H⁺ shift</text>
                <text x="204" y="102" fontSize="20" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">⇌</text>

                {/* Right: Zwitter Ion (Dipolar Ion) */}
                <text x="312" y="22" fontSize="11" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle" textDecoration="underline">
                  Zwitter Ion (Dipolar)
                </text>
                {/* Top H above Cα */}
                <text x="305" y="52" fontSize="12" fontWeight="bold" fill="#D4A843" textAnchor="middle">H</text>
                <line x1="305" y1="57" x2="305" y2="75" stroke="currentColor" strokeWidth="1.6" />
                {/* Top =O above C */}
                <text x="348" y="52" fontSize="12" fontWeight="bold" fill="#38BDF8" textAnchor="middle">O</text>
                <line x1="345" y1="57" x2="345" y2="75" stroke="currentColor" strokeWidth="1.5" />
                <line x1="351" y1="57" x2="351" y2="75" stroke="currentColor" strokeWidth="1.5" />
                {/* Main horizontal backbone: +H3N — Cα — C — O- */}
                <text x="255" y="90" fontSize="12.5" fontWeight="bold" fill="#4ADE80" textAnchor="middle">⁺H₃N</text>
                <line x1="276" y1="86" x2="292" y2="86" stroke="currentColor" strokeWidth="1.6" />
                <text x="305" y="90" fontSize="12.5" fontWeight="bold" fill="#F87171" textAnchor="middle">Cα</text>
                <line x1="318" y1="86" x2="337" y2="86" stroke="currentColor" strokeWidth="1.6" />
                <text x="348" y="90" fontSize="12.5" fontWeight="bold" fill="#38BDF8" textAnchor="middle">C</text>
                <line x1="358" y1="86" x2="371" y2="86" stroke="currentColor" strokeWidth="1.6" />
                <text x="385" y="90" fontSize="12.5" fontWeight="bold" fill="#F87171" textAnchor="middle">O⁻</text>
                {/* Bottom R group box below Cα */}
                <line x1="305" y1="96" x2="305" y2="116" stroke="currentColor" strokeWidth="1.6" />
                <rect x="291" y="118" width="28" height="24" rx="5" fill="var(--bg-elevated)" stroke="var(--accent-primary)" strokeWidth="1.3" />
                <text x="305" y="135" fontSize="12" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">R</text>

                <text x="200" y="185" fontSize="11" fontWeight="bold" fill="var(--text-secondary)" textAnchor="middle">
                  –COOH loses H⁺ (→ –COO⁻) and –NH₂ accepts H⁺ (→ –NH₃⁺)
                </text>
                <text x="200" y="203" fontSize="10" fill="var(--text-muted)" textAnchor="middle">
                  Amphoteric &amp; electrically neutral dipolar ion at isoelectric point
                </text>
              </svg>
            </div>

            {/* 2. Formation of Peptide Bond (Matches User Reference Image) */}
            <div className="xl:col-span-7 p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
              <div className="flex items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-2">
                <span className="font-serif text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                  2. Formation of Peptide Bond / Peptide Linkage (–CO–NH–)
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--accent-primary)] border border-[var(--border-subtle)]">
                  Condensation (–H₂O)
                </span>
              </div>

              <svg viewBox="0 0 540 330" className="w-full h-auto text-[var(--text-primary)]">
                {/* ==================== TOP ROW: AMINO ACID 1 + AMINO ACID 2 ==================== */}
                <text x="125" y="22" fontSize="13" fontWeight="bold" fill="currentColor" textAnchor="middle" textDecoration="underline">
                  Amino Acid 1
                </text>
                <text x="256" y="25" fontSize="20" fontWeight="bold" fill="currentColor" textAnchor="middle">
                  +
                </text>
                <text x="395" y="22" fontSize="13" fontWeight="bold" fill="currentColor" textAnchor="middle" textDecoration="underline">
                  Amino Acid 2
                </text>

                {/* --- Amino Acid 1 --- */}
                {/* Top H above Cα1 (x=108) and =O above C1 (x=166) */}
                <text x="108" y="48" fontSize="13" fontWeight="bold" fill="#D4A843" textAnchor="middle">H</text>
                <line x1="108" y1="53" x2="108" y2="73" stroke="currentColor" strokeWidth="1.8" />

                <text x="166" y="48" fontSize="13" fontWeight="bold" fill="#38BDF8" textAnchor="middle">O</text>
                <line x1="163" y1="53" x2="163" y2="73" stroke="currentColor" strokeWidth="1.7" />
                <line x1="169" y1="53" x2="169" y2="73" stroke="currentColor" strokeWidth="1.7" />

                {/* Backbone: H2N — Cα — C — [OH */}
                <text x="50" y="90" fontSize="13.5" fontWeight="bold" fill="#4ADE80" textAnchor="middle">H₂N</text>
                <line x1="70" y1="85" x2="93" y2="85" stroke="currentColor" strokeWidth="1.8" />
                <text x="108" y="90" fontSize="13.5" fontWeight="bold" fill="#F87171" textAnchor="middle">Cα</text>
                <line x1="123" y1="85" x2="153" y2="85" stroke="currentColor" strokeWidth="1.8" />
                <text x="166" y="90" fontSize="13.5" fontWeight="bold" fill="#38BDF8" textAnchor="middle">C</text>
                <line x1="178" y1="85" x2="202" y2="85" stroke="currentColor" strokeWidth="1.8" />

                {/* Bottom H box below Cα1 */}
                <line x1="108" y1="96" x2="108" y2="114" stroke="currentColor" strokeWidth="1.8" />
                <rect x="94" y="116" width="28" height="24" rx="5" fill="#4ADE80" fillOpacity="0.16" stroke="#4ADE80" strokeWidth="1.3" />
                <text x="108" y="133" fontSize="13" fontWeight="bold" fill="#4ADE80" textAnchor="middle">H</text>

                {/* Dashed Highlight Capsule enclosing OH (from AA1) and H (from AA2) */}
                <rect
                  x="192"
                  y="68"
                  width="124"
                  height="34"
                  rx="17"
                  fill="#FACC15"
                  fillOpacity="0.18"
                  stroke="#F87171"
                  strokeWidth="1.6"
                  strokeDasharray="4,3"
                />
                <text x="220" y="90" fontSize="13.5" fontWeight="bold" fill="#4ADE80" textAnchor="middle">OH</text>
                <text x="292" y="90" fontSize="13.5" fontWeight="bold" fill="#4ADE80" textAnchor="middle">H</text>

                {/* --- Amino Acid 2 --- */}
                <line x1="304" y1="85" x2="326" y2="85" stroke="currentColor" strokeWidth="1.8" />
                <text x="338" y="90" fontSize="13.5" fontWeight="bold" fill="#4ADE80" textAnchor="middle">N</text>
                {/* Bottom H below N */}
                <line x1="338" y1="96" x2="338" y2="114" stroke="currentColor" strokeWidth="1.8" />
                <text x="338" y="129" fontSize="13" fontWeight="bold" fill="#4ADE80" textAnchor="middle">H</text>

                <line x1="350" y1="85" x2="375" y2="85" stroke="currentColor" strokeWidth="1.8" />
                <text x="390" y="90" fontSize="13.5" fontWeight="bold" fill="#F87171" textAnchor="middle">Cα</text>

                {/* Top H above Cα2 */}
                <text x="390" y="48" fontSize="13" fontWeight="bold" fill="#D4A843" textAnchor="middle">H</text>
                <line x1="390" y1="53" x2="390" y2="73" stroke="currentColor" strokeWidth="1.8" />

                {/* Bottom H box below Cα2 */}
                <line x1="390" y1="96" x2="390" y2="114" stroke="currentColor" strokeWidth="1.8" />
                <rect x="376" y="116" width="28" height="24" rx="5" fill="#4ADE80" fillOpacity="0.16" stroke="#4ADE80" strokeWidth="1.3" />
                <text x="390" y="133" fontSize="13" fontWeight="bold" fill="#4ADE80" textAnchor="middle">H</text>

                <line x1="406" y1="85" x2="432" y2="85" stroke="currentColor" strokeWidth="1.8" />
                <text x="462" y="90" fontSize="13.5" fontWeight="bold" fill="#38BDF8" textAnchor="middle">COOH</text>

                {/* ==================== MIDDLE: REACTION ARROW & -H2O ==================== */}
                {/* Main vertical downward arrow */}
                <line x1="254" y1="112" x2="254" y2="202" stroke="#60A5FA" strokeWidth="2.4" />
                <polygon points="254,210 248,199 260,199" fill="#60A5FA" />

                {/* Curved side arrow branching off to H2O */}
                <path d="M 254 126 Q 260 165 296 165" fill="none" stroke="#60A5FA" strokeWidth="2.2" />
                <polygon points="304,165 294,160 294,170" fill="#60A5FA" />

                {/* Dashed capsule for eliminated H2O */}
                <rect
                  x="312"
                  y="149"
                  width="64"
                  height="32"
                  rx="16"
                  fill="#FACC15"
                  fillOpacity="0.18"
                  stroke="#F87171"
                  strokeWidth="1.6"
                  strokeDasharray="4,3"
                />
                <text x="344" y="170" fontSize="13.5" fontWeight="bold" fill="#60A5FA" textAnchor="middle">H₂O</text>

                {/* ==================== BOTTOM ROW: DIPEPTIDE PRODUCT ==================== */}
                {/* Top H above Cα1 (x=150), =O above C (x=208), H above Cα2 (x=320) */}
                <text x="150" y="218" fontSize="13" fontWeight="bold" fill="#D4A843" textAnchor="middle">H</text>
                <line x1="150" y1="223" x2="150" y2="243" stroke="currentColor" strokeWidth="1.8" />

                <text x="208" y="218" fontSize="13" fontWeight="bold" fill="#38BDF8" textAnchor="middle">O</text>
                <line x1="205" y1="223" x2="205" y2="243" stroke="currentColor" strokeWidth="1.7" />
                <line x1="211" y1="223" x2="211" y2="243" stroke="currentColor" strokeWidth="1.7" />

                <text x="320" y="218" fontSize="13" fontWeight="bold" fill="#D4A843" textAnchor="middle">H</text>
                <line x1="320" y1="223" x2="320" y2="243" stroke="currentColor" strokeWidth="1.8" />

                {/* Main Dipeptide Backbone: H2N — Cα — C ===[Peptide Bond]=== N — Cα — COOH */}
                <text x="92" y="260" fontSize="13.5" fontWeight="bold" fill="#4ADE80" textAnchor="middle">H₂N</text>
                <line x1="112" y1="255" x2="135" y2="255" stroke="currentColor" strokeWidth="1.8" />
                <text x="150" y="260" fontSize="13.5" fontWeight="bold" fill="#F87171" textAnchor="middle">Cα</text>
                <line x1="165" y1="255" x2="195" y2="255" stroke="currentColor" strokeWidth="1.8" />
                <text x="208" y="260" fontSize="13.5" fontWeight="bold" fill="#38BDF8" textAnchor="middle">C</text>

                {/* Highlighted New Peptide C—N Bond */}
                <line x1="220" y1="255" x2="256" y2="255" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" />

                <text x="268" y="260" fontSize="13.5" fontWeight="bold" fill="#4ADE80" textAnchor="middle">N</text>
                <line x1="280" y1="255" x2="305" y2="255" stroke="currentColor" strokeWidth="1.8" />
                <text x="320" y="260" fontSize="13.5" fontWeight="bold" fill="#F87171" textAnchor="middle">Cα</text>
                <line x1="336" y1="255" x2="362" y2="255" stroke="currentColor" strokeWidth="1.8" />
                <text x="392" y="260" fontSize="13.5" fontWeight="bold" fill="#38BDF8" textAnchor="middle">COOH</text>

                {/* Dashed red pointer from Peptide Bond C—N up-right to "Peptide Bond" label */}
                <path
                  d="M 238 246 L 278 202 L 408 202"
                  fill="none"
                  stroke="#F87171"
                  strokeWidth="1.8"
                  strokeDasharray="5,4"
                />
                <polygon points="415,202 406,197 406,207" fill="#F87171" />
                <text x="422" y="206" fontSize="13.5" fontStyle="italic" fontWeight="bold" fill="currentColor" fontFamily="serif">
                  Peptide Bond
                </text>

                {/* Bottom H boxes and N—H */}
                <line x1="150" y1="266" x2="150" y2="284" stroke="currentColor" strokeWidth="1.8" />
                <rect x="136" y="286" width="28" height="24" rx="5" fill="#4ADE80" fillOpacity="0.16" stroke="#4ADE80" strokeWidth="1.3" />
                <text x="150" y="303" fontSize="13" fontWeight="bold" fill="#4ADE80" textAnchor="middle">H</text>

                <line x1="268" y1="266" x2="268" y2="284" stroke="currentColor" strokeWidth="1.8" />
                <text x="268" y="299" fontSize="13" fontWeight="bold" fill="#4ADE80" textAnchor="middle">H</text>

                <line x1="320" y1="266" x2="320" y2="284" stroke="currentColor" strokeWidth="1.8" />
                <rect x="306" y="286" width="28" height="24" rx="5" fill="#4ADE80" fillOpacity="0.16" stroke="#4ADE80" strokeWidth="1.3" />
                <text x="320" y="303" fontSize="13" fontWeight="bold" fill="#4ADE80" textAnchor="middle">H</text>

                <text x="256" y="325" fontSize="13" fontWeight="bold" fill="currentColor" textAnchor="middle" fontFamily="serif">
                  Formation of Peptide Bond (Glycylglycine Dipeptide)
                </text>
              </svg>
            </div>
          </div>
        );

      case 'kinetics-order-graphs':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 1. Zero Order Graph [R] vs t */}
            <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1.5">
              <span className="font-serif text-xs font-bold text-[var(--text-primary)] block">
                1. Zero Order: [R] vs Time (t)
              </span>
              <svg viewBox="0 0 250 175" className="w-full h-auto text-[var(--text-primary)]">
                <line x1="46" y1="18" x2="46" y2="140" stroke="currentColor" strokeWidth="1.5" />
                <line x1="46" y1="140" x2="230" y2="140" stroke="currentColor" strokeWidth="1.5" />
                {/* Straight line with negative slope */}
                <line x1="46" y1="36" x2="205" y2="126" stroke="var(--accent-primary)" strokeWidth="2.2" />
                <circle cx="46" cy="36" r="3" fill="var(--accent-primary)" />
                <text x="54" y="33" fontSize="10" fontWeight="bold" fill="var(--accent-primary)">[R]₀ (Intercept)</text>
                <text x="135" y="72" fontSize="10" fontWeight="bold" fill="currentColor">Slope = -k</text>
                <text x="16" y="80" fontSize="9.5" fontWeight="bold" fill="currentColor" transform="rotate(-90 16 80)" textAnchor="middle">
                  Concentration [R] ↑
                </text>
                <text x="138" y="160" fontSize="10" fontWeight="bold" fill="currentColor" textAnchor="middle">Time (t) →</text>
              </svg>
            </div>

            {/* 2. First Order Graph ln[R] or log[R] vs t */}
            <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1.5">
              <span className="font-serif text-xs font-bold text-[var(--text-primary)] block">
                2. First Order: log[R] (or ln[R]) vs t
              </span>
              <svg viewBox="0 0 250 175" className="w-full h-auto text-[var(--text-primary)]">
                <line x1="46" y1="18" x2="46" y2="140" stroke="currentColor" strokeWidth="1.5" />
                <line x1="46" y1="140" x2="230" y2="140" stroke="currentColor" strokeWidth="1.5" />
                <line x1="46" y1="36" x2="205" y2="126" stroke="var(--accent-primary)" strokeWidth="2.2" />
                <circle cx="46" cy="36" r="3" fill="var(--accent-primary)" />
                <text x="54" y="33" fontSize="10" fontWeight="bold" fill="var(--accent-primary)">log[R]₀ (or ln[R]₀)</text>
                <text x="135" y="70" fontSize="9.5" fontWeight="bold" fill="currentColor">Slope = -k / 2.303</text>
                <text x="135" y="83" fontSize="8.5" fill="var(--text-muted)">(or -k for ln[R])</text>
                <text x="16" y="80" fontSize="9.5" fontWeight="bold" fill="currentColor" transform="rotate(-90 16 80)" textAnchor="middle">
                  log [R] or ln [R] ↑
                </text>
                <text x="138" y="160" fontSize="10" fontWeight="bold" fill="currentColor" textAnchor="middle">Time (t) →</text>
              </svg>
            </div>

            {/* 3. Activation Energy Profile (with Y-axis Potential Energy title & unclipped ΔH) */}
            <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1.5">
              <span className="font-serif text-xs font-bold text-[var(--text-primary)] block">
                3. Activation Energy (Eₐ) &amp; ΔH Profile
              </span>
              <svg viewBox="0 0 265 175" className="w-full h-auto text-[var(--text-primary)]">
                {/* Rotated Y-axis label */}
                <text x="14" y="80" fontSize="9.5" fontWeight="bold" fill="currentColor" transform="rotate(-90 14 80)" textAnchor="middle">
                  Potential Energy (kJ/mol) ↑
                </text>
                <line x1="52" y1="18" x2="52" y2="140" stroke="currentColor" strokeWidth="1.5" />
                <line x1="52" y1="140" x2="252" y2="140" stroke="currentColor" strokeWidth="1.5" />
                {/* Energy labels 100, 200, 300 on Y-axis */}
                <text x="47" y="114" fontSize="8.5" fontWeight="bold" fill="var(--text-secondary)" textAnchor="end">100</text>
                <text x="47" y="84" fontSize="8.5" fontWeight="bold" fill="var(--text-secondary)" textAnchor="end">200</text>
                <text x="47" y="39" fontSize="8.5" fontWeight="bold" fill="var(--text-secondary)" textAnchor="end">300</text>
                {/* Dashed baselines */}
                <line x1="52" y1="110" x2="215" y2="110" stroke="var(--text-muted)" strokeWidth="0.9" strokeDasharray="3,2" />
                <line x1="52" y1="80" x2="215" y2="80" stroke="var(--text-muted)" strokeWidth="0.9" strokeDasharray="3,2" />
                <line x1="52" y1="36" x2="165" y2="36" stroke="var(--text-muted)" strokeWidth="0.9" strokeDasharray="3,2" />
                {/* Reaction Profile Curve: R(100) -> Peak(300) -> P(200) */}
                <path d="M 56 110 L 82 110 Q 122 -24 162 80 L 205 80" fill="none" stroke="var(--accent-primary)" strokeWidth="2.3" />
                <text x="68" y="104" fontSize="10" fontWeight="bold" fill="currentColor">R</text>
                <text x="192" y="74" fontSize="10" fontWeight="bold" fill="currentColor">P</text>
                {/* Ea vertical double arrow (100 to 300) */}
                <line x1="122" y1="110" x2="122" y2="36" stroke="var(--accent-primary)" strokeWidth="1.4" />
                <text x="127" y="66" fontSize="9.5" fontWeight="bold" fill="var(--accent-primary)">Eₐ = 200</text>
                {/* ΔH vertical line (100 to 200) */}
                <line x1="175" y1="110" x2="175" y2="80" stroke="currentColor" strokeWidth="1.4" />
                <text x="180" y="99" fontSize="9.5" fontWeight="bold" fill="currentColor">ΔH = +100</text>
                <text x="152" y="160" fontSize="10" fontWeight="bold" fill="currentColor" textAnchor="middle">Progress of Reaction →</text>
              </svg>
            </div>
          </div>
        );

      case 'coordination-vbt-isomers':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* VBT Orbital Boxes for [Co(en)2Cl2]+ */}
            <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-serif text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                  1. VBT Hybridisation in [Co(en)₂Cl₂]⁺ (Co³⁺ = 3d⁶)
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--accent-primary)] font-bold">
                  d²sp³ (Inner Orbital)
                </span>
              </div>
              <svg viewBox="0 0 400 130" className="w-full h-auto text-[var(--text-primary)]">
                {/* 3d boxes (3 paired, 2 used for d2sp3) */}
                <text x="58" y="18" fontSize="10" fontWeight="bold" fill="currentColor" textAnchor="middle">3d⁶ (Paired)</text>
                {[10, 32, 54].map((x, i) => (
                  <g key={i}>
                    <rect x={x} y="26" width="22" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <text x={x + 11} y="43" fontSize="12" fontWeight="bold" fill="currentColor" textAnchor="middle">⇅</text>
                  </g>
                ))}
                {/* 2 inner 3d boxes for ligand pairs */}
                {[76, 98].map((x, i) => (
                  <g key={i}>
                    <rect x={x} y="26" width="22" height="24" fill="var(--bg-elevated)" stroke="var(--accent-primary)" strokeWidth="1.6" />
                    <text x={x + 11} y="42" fontSize="10" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">××</text>
                  </g>
                ))}

                {/* 4s box */}
                <text x="151" y="18" fontSize="10" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">4s</text>
                <rect x="140" y="26" width="22" height="24" fill="var(--bg-elevated)" stroke="var(--accent-primary)" strokeWidth="1.6" />
                <text x="151" y="42" fontSize="10" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">××</text>

                {/* 4p boxes */}
                <text x="215" y="18" fontSize="10" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">4p</text>
                {[182, 204, 226].map((x, i) => (
                  <g key={i}>
                    <rect x={x} y="26" width="22" height="24" fill="var(--bg-elevated)" stroke="var(--accent-primary)" strokeWidth="1.6" />
                    <text x={x + 11} y="42" fontSize="10" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">××</text>
                  </g>
                ))}

                {/* Empty 4d boxes */}
                <text x="325" y="18" fontSize="10" fill="var(--text-muted)" textAnchor="middle">4d (Vacant)</text>
                {[270, 292, 314, 336, 358].map((x, i) => (
                  <rect key={i} x={x} y="26" width="20" height="24" fill="none" stroke="var(--text-muted)" strokeWidth="1.1" />
                ))}

                {/* Bracket under the 6 d2sp3 boxes */}
                <line x1="76" y1="62" x2="248" y2="62" stroke="var(--accent-primary)" strokeWidth="1.8" />
                <text x="162" y="78" fontSize="10.5" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">
                  6 Hybrid Orbitals (d²sp³) ← 6 Lone Pairs from 2 en + 2 Cl⁻
                </text>
                <text x="200" y="102" fontSize="10" fill="currentColor" textAnchor="middle">
                  Octahedral • Diamagnetic (n = 0) • Low Spin / Inner Orbital Complex
                </text>
              </svg>
            </div>

            {/* Cis, Trans & Optical Isomers of [Co(en)2Cl2]+ */}
            <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-serif text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                  2. Geometrical (Cis/Trans) &amp; Optical Isomers of [Co(en)₂Cl₂]⁺
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--accent-primary)]">
                  Cis is Optically Active
                </span>
              </div>
              <svg viewBox="0 0 400 130" className="w-full h-auto text-[var(--text-primary)]">
                {/* d-cis isomer */}
                <g transform="translate(65, 62)">
                  <text x="0" y="4" fontSize="12" fontWeight="bold" fill="currentColor" textAnchor="middle">Co</text>
                  <line x1="0" y1="-10" x2="0" y2="-32" stroke="currentColor" strokeWidth="1.5" />
                  <text x="0" y="-36" fontSize="10" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">Cl</text>
                  <line x1="12" y1="-6" x2="32" y2="-20" stroke="currentColor" strokeWidth="1.5" />
                  <text x="42" y="-20" fontSize="10" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">Cl</text>
                  {/* en loops on left & bottom */}
                  <path d="M -12 -8 Q -42 0 -12 18" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <text x="-36" y="8" fontSize="10" fontWeight="bold" fill="currentColor" textAnchor="middle">en</text>
                  <path d="M 0 12 Q 22 40 30 10" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <text x="24" y="34" fontSize="10" fontWeight="bold" fill="currentColor" textAnchor="middle">en</text>
                  <text x="0" y="54" fontSize="9.5" fontWeight="bold" fill="currentColor" textAnchor="middle">d-cis (Optically active)</text>
                </g>

                {/* Mirror Line */}
                <line x1="138" y1="12" x2="138" y2="108" stroke="var(--accent-primary)" strokeWidth="1.5" strokeDasharray="4,2" />
                <text x="138" y="122" fontSize="8.5" fill="var(--accent-primary)" textAnchor="middle">Mirror</text>

                {/* l-cis isomer (Mirror image) */}
                <g transform="translate(210, 62)">
                  <text x="0" y="4" fontSize="12" fontWeight="bold" fill="currentColor" textAnchor="middle">Co</text>
                  <line x1="0" y1="-10" x2="0" y2="-32" stroke="currentColor" strokeWidth="1.5" />
                  <text x="0" y="-36" fontSize="10" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">Cl</text>
                  <line x1="-12" y1="-6" x2="-32" y2="-20" stroke="currentColor" strokeWidth="1.5" />
                  <text x="-42" y="-20" fontSize="10" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">Cl</text>
                  <path d="M 12 -8 Q 42 0 12 18" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <text x="36" y="8" fontSize="10" fontWeight="bold" fill="currentColor" textAnchor="middle">en</text>
                  <path d="M 0 12 Q -22 40 -30 10" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <text x="-24" y="34" fontSize="10" fontWeight="bold" fill="currentColor" textAnchor="middle">en</text>
                  <text x="0" y="54" fontSize="9.5" fontWeight="bold" fill="currentColor" textAnchor="middle">l-cis (Enantiomer)</text>
                </g>

                {/* trans isomer */}
                <g transform="translate(335, 62)">
                  <text x="0" y="4" fontSize="12" fontWeight="bold" fill="currentColor" textAnchor="middle">Co</text>
                  <line x1="0" y1="-10" x2="0" y2="-32" stroke="currentColor" strokeWidth="1.5" />
                  <text x="0" y="-36" fontSize="10" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">Cl</text>
                  <line x1="0" y1="10" x2="0" y2="32" stroke="currentColor" strokeWidth="1.5" />
                  <text x="0" y="43" fontSize="10" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">Cl</text>
                  <path d="M -12 -10 Q -40 0 -12 10" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <text x="-36" y="4" fontSize="10" fontWeight="bold" fill="currentColor" textAnchor="middle">en</text>
                  <path d="M 12 -10 Q 40 0 12 10" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <text x="36" y="4" fontSize="10" fontWeight="bold" fill="currentColor" textAnchor="middle">en</text>
                  <text x="0" y="56" fontSize="9.5" fill="var(--text-muted)" textAnchor="middle">trans (Inactive)</text>
                </g>
              </svg>
            </div>
          </div>
        );

      case 'diazonium-reaction-map':
        return (
          <div className="p-3.5 sm:p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-3">
            {[
              { num: '1', tag: 'Sandmeyer Reaction (Chlorobenzene / Bromobenzene)', eq: 'C₆H₅N₂⁺Cl⁻ ->[Cu₂Cl₂ / HCl] C₆H₅Cl (Chlorobenzene) + N₂↑' },
              { num: '2', tag: 'Gatterman Reaction (Copper Powder Catalyst)', eq: 'C₆H₅N₂⁺Cl⁻ ->[Cu / HCl] C₆H₅Cl (Chlorobenzene) + N₂↑ + CuX' },
              { num: '3', tag: 'Replacement by Cyanide (–CN / Benzonitrile)', eq: 'C₆H₅N₂⁺Cl⁻ ->[CuCN / KCN] C₆H₅CN (Benzonitrile) + N₂↑' },
              { num: '4', tag: 'Replacement by Iodide (Iodobenzene)', eq: 'C₆H₅N₂⁺Cl⁻ + KI ->[Warm] C₆H₅I (Iodobenzene) + KCl + N₂↑' },
              { num: '5', tag: 'Balz-Schiemann Reaction (Fluorobenzene)', eq: 'C₆H₅N₂⁺Cl⁻ + HBF₄ ->[Heat (Δ)] C₆H₅F (Fluorobenzene) + BF₃ + N₂↑' },
              { num: '6', tag: 'Replacement by Nitro Group (Nitrobenzene)', eq: 'C₆H₅N₂⁺Cl⁻ + HBF₄ ->[NaNO₂ / Cu, Δ] C₆H₅NO₂ (Nitrobenzene) + N₂↑ + NaBF₄' },
              { num: '7', tag: 'Deamination / Reduction to Benzene', eq: 'C₆H₅N₂⁺Cl⁻ + H₃PO₂ + H₂O ->[Cu⁺] C₆H₆ (Benzene) + N₂↑ + H₃PO₃ + HCl' },
              { num: '8', tag: 'Hydrolysis to Phenol (Warming to 283 K)', eq: 'C₆H₅N₂⁺Cl⁻ + H₂O ->[283 K (Warm)] C₆H₅OH (Phenol) + N₂↑ + HCl' },
              { num: '9', tag: 'Azo Coupling Reaction (Orange & Yellow Azo Dyes)', eq: 'C₆H₅N₂⁺Cl⁻ + C₆H₅OH ->[OH⁻ (pH 9–10)] C₆H₅–N=N–C₆H₄OH (p-Hydroxyazobenzene, Orange Dye) + HCl' }
            ].map((item) => (
              <div key={item.num} className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] font-bold text-[var(--accent-primary)] uppercase">
                    #{item.num} • {item.tag}
                  </span>
                  <span className="font-mono text-[10px] text-[var(--text-muted)]">2D Structural Pathway</span>
                </div>
                <ChemicalReactionDisplay formula={item.eq} />
              </div>
            ))}
          </div>
        );

      case 'glucose-five-reactions':
        return (
          <div className="p-3.5 sm:p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-3">
            {[
              {
                num: '1',
                proof: 'Proves 6 Carbons in a Straight Chain',
                reagent: 'HI, Heat (Δ)',
                cond: 'Prolonged heating',
                linearProduct: 'CH₃—CH₂—CH₂—CH₂—CH₂—CH₃',
                productName: 'n-Hexane',
              },
              {
                num: '2',
                proof: 'Proves Presence of Carbonyl (>C=O) Group',
                reagent: 'NH₂OH (or HCN)',
                cond: '-H₂O',
                top: 'CH = N—OH',
                middle: '(CHOH)₄',
                bottom: 'CH₂OH',
                highlight: 'top',
                productName: 'Glucose oxime (or Glucose cyanohydrin with HCN)',
              },
              {
                num: '3',
                proof: 'Proves Carbonyl is an Aldehyde (–CHO) Group',
                reagent: 'Br₂ water (Br₂ / H₂O)',
                cond: 'Mild oxidation [O]',
                top: 'COOH',
                middle: '(CHOH)₄',
                bottom: 'CH₂OH',
                highlight: 'top',
                productName: 'Gluconic acid',
              },
              {
                num: '4',
                proof: 'Proves Presence of Five –OH Groups',
                reagent: '5 (CH₃CO)₂O (Acetic anhydride)',
                cond: 'Acetylation',
                top: 'CHO',
                middle: '(CH—O—COCH₃)₄',
                bottom: 'CH₂—O—COCH₃',
                highlight: 'mid-bot',
                productName: 'Glucose pentaacetate',
              },
              {
                num: '5',
                proof: 'Proves Presence of One Primary (1°) Alcoholic (–CH₂OH) Group',
                reagent: 'Conc. HNO₃',
                cond: 'Strong oxidation [O]',
                top: 'COOH',
                middle: '(CHOH)₄',
                bottom: 'COOH',
                highlight: 'top-bot',
                productName: 'Saccharic acid (Glucaric acid)',
              },
            ].map((rxn) => {
              const isRxnMinimized = Boolean(minimizedSubItems[`rxn-${rxn.num}`]);
              const rxnTopicId = sectionId ? `${sectionId}::vdiag-rxn-${rxn.num}` : null;
              const isRxnDone = rxnTopicId
                ? isTopicCompleted(rxnTopicId, sectionId, completedSections)
                : false;

              return (
              <div
                key={rxn.num}
                className={`p-3.5 sm:p-4 rounded-xl bg-[var(--bg-surface)] border space-y-3 transition-all ${
                  isRxnDone
                    ? 'border-[var(--accent-primary)] shadow-2xs'
                    : 'border-[var(--border-default)]'
                }`}
              >
                <div
                  className={`flex flex-wrap items-center justify-between gap-2 ${
                    !isRxnMinimized ? 'border-b border-[var(--border-subtle)] pb-2' : ''
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleSubItem(`rxn-${rxn.num}`)}
                    className="text-left flex items-center gap-2 min-w-0 flex-1 cursor-pointer group"
                    aria-expanded={!isRxnMinimized}
                  >
                    <span className="px-2 py-0.5 rounded-md bg-[var(--bg-elevated)] border border-[var(--border-subtle)] font-mono text-[11px] font-bold text-[var(--accent-primary)] shrink-0">
                      Reaction {rxn.num}
                    </span>
                    <span className="font-serif text-xs sm:text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                      {rxn.proof}
                    </span>
                  </button>

                  <div className="flex items-center gap-1.5 shrink-0" data-no-print="true">
                    <button
                      type="button"
                      onClick={() => toggleSubItem(`rxn-${rxn.num}`)}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[var(--bg-elevated)] hover:bg-[var(--accent-primary)]/15 border border-[var(--border-subtle)] text-[10px] font-mono font-semibold text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors cursor-pointer"
                    >
                      <span>{isRxnMinimized ? 'Show' : 'Hide'}</span>
                      {isRxnMinimized ? <ChevronDown size={12} /> : <ChevronUp size={12} />}
                    </button>

                    {rxnTopicId && onToggleTopic && (
                      <button
                        type="button"
                        onClick={() => onToggleTopic(rxnTopicId, sectionId, allSectionTopicIds)}
                        className={`p-1 rounded-full transition-all cursor-pointer flex items-center justify-center ${
                          isRxnDone
                            ? 'bg-[var(--accent-primary)] text-white shadow-2xs scale-105'
                            : 'border border-[var(--border-default)] text-[var(--text-muted)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]'
                        }`}
                        title={isRxnDone ? `Mark Reaction ${rxn.num} incomplete` : `Mark Reaction ${rxn.num} completed`}
                      >
                        {isRxnDone ? <CheckCircle2 size={16} /> : <Circle size={16} />}
                      </button>
                    )}
                  </div>
                </div>

                <div
                  data-print-expand="true"
                  className={`${isRxnMinimized ? 'hidden' : 'flex'} flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-5 overflow-x-auto py-1`}
                >
                  {/* Left: D-Glucose Vertical Structure */}
                  <div className="inline-flex flex-col items-center px-3.5 py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-default)] min-w-[115px]">
                    <div className="flex flex-col items-center font-mono text-xs sm:text-sm font-bold leading-none text-[var(--text-primary)]">
                      <span className="px-1.5 py-0.5">CHO</span>
                      <span className="w-[1.5px] h-2.5 bg-[var(--text-muted)] my-0.5 block" />
                      <span className="px-1.5 py-0.5">(CHOH)₄</span>
                      <span className="w-[1.5px] h-2.5 bg-[var(--text-muted)] my-0.5 block" />
                      <span className="px-1.5 py-0.5">CH₂OH</span>
                    </div>
                    <span className="mt-2 px-2 py-0.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-sans text-[10px] font-semibold text-[var(--text-secondary)]">
                      D-Glucose
                    </span>
                  </div>

                  {/* Center: Reagent Over Arrow */}
                  <div className="inline-flex flex-col items-center justify-center min-w-[125px] sm:min-w-[155px] px-2">
                    <span className="mb-1 px-2.5 py-0.5 rounded-md bg-[var(--bg-elevated)] border border-[var(--border-default)] font-mono text-[10px] sm:text-xs font-bold text-[var(--accent-primary)] text-center">
                      {rxn.reagent}
                    </span>
                    <div className="w-full flex items-center">
                      <div className="h-[2px] flex-1 bg-[var(--accent-primary)] rounded-l-full" />
                      <svg width="10" height="10" viewBox="0 0 10 10" className="text-[var(--accent-primary)] shrink-0 -ml-0.5">
                        <polygon points="0,1 10,5 0,9" fill="currentColor" />
                      </svg>
                    </div>
                    {rxn.cond && (
                      <span className="mt-1 font-sans text-[10px] text-[var(--text-muted)] italic">
                        {rxn.cond}
                      </span>
                    )}
                  </div>

                  {/* Right: Product Structure (Linear for n-Hexane or Vertical for others) */}
                  {rxn.linearProduct ? (
                    <div className="inline-flex flex-col items-center justify-center px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-default)]">
                      <span className="font-mono text-xs sm:text-sm font-bold text-[var(--accent-primary)] px-2 py-1 rounded-md bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/30">
                        {rxn.linearProduct}
                      </span>
                      <span className="mt-2 px-2.5 py-0.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-sans text-[10px] sm:text-[11px] font-bold text-[var(--accent-primary)]">
                        {rxn.productName}
                      </span>
                    </div>
                  ) : (
                    <div className="inline-flex flex-col items-center px-3.5 py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-default)] min-w-[135px]">
                      <div className="flex flex-col items-center font-mono text-xs sm:text-sm font-bold leading-none">
                        <span
                          className={`px-2 py-0.5 rounded-md ${
                            rxn.highlight === 'top' || rxn.highlight === 'top-bot'
                              ? 'bg-[var(--accent-primary)]/15 text-[var(--accent-primary)] border border-[var(--accent-primary)]/35'
                              : 'text-[var(--text-primary)]'
                          }`}
                        >
                          {rxn.top}
                        </span>
                        <span className="w-[1.5px] h-2.5 bg-[var(--text-muted)] my-0.5 block" />
                        <span
                          className={`px-2 py-0.5 rounded-md ${
                            rxn.highlight === 'mid-bot'
                              ? 'bg-[var(--accent-primary)]/15 text-[var(--accent-primary)] border border-[var(--accent-primary)]/35'
                              : 'text-[var(--text-primary)]'
                          }`}
                        >
                          {rxn.middle}
                        </span>
                        <span className="w-[1.5px] h-2.5 bg-[var(--text-muted)] my-0.5 block" />
                        <span
                          className={`px-2 py-0.5 rounded-md ${
                            rxn.highlight === 'mid-bot' || rxn.highlight === 'top-bot'
                              ? 'bg-[var(--accent-primary)]/15 text-[var(--accent-primary)] border border-[var(--accent-primary)]/35'
                              : 'text-[var(--text-primary)]'
                          }`}
                        >
                          {rxn.bottom}
                        </span>
                      </div>
                      <span className="mt-2 px-2.5 py-0.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-sans text-[10px] sm:text-[11px] font-bold text-[var(--accent-primary)] text-center">
                        {rxn.productName}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              );
            })}
          </div>
        );

      default:
        return null;
    }
  };

  const content = renderDiagram();
  if (!content) return null;

  return (
    <div
      className={`p-4 sm:p-5 rounded-2xl bg-[var(--bg-surface)] border shadow-2xs space-y-3 transition-all ${
        isSchemeAllDone
          ? 'border-[var(--accent-primary)] shadow-xs'
          : 'border-[var(--border-default)]'
      }`}
    >
      <div
        className={`flex flex-wrap items-center justify-between gap-2 ${
          !isMinimized ? 'border-b border-[var(--border-subtle)] pb-2.5' : ''
        }`}
      >
        <button
          type="button"
          onClick={() => setIsMinimized((prev) => !prev)}
          className="text-left flex items-center gap-2 min-w-0 flex-1 cursor-pointer group"
          aria-expanded={!isMinimized}
        >
          <BookOpen size={15} className="text-[var(--accent-primary)] shrink-0" />
          <h5 className="font-serif text-sm sm:text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
            {title || 'Exam Diagram Reference'}
          </h5>
        </button>

        <div className="flex items-center gap-2 shrink-0">
          {subtitle && (
            <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-muted)]">
              {subtitle}
            </span>
          )}

          {sectionId && isMultiReactionScheme && onToggleTopicGroup && (
            <button
              type="button"
              data-no-print="true"
              onClick={() => onToggleTopicGroup(schemeTopicIds, sectionId, allSectionTopicIds)}
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[10px] sm:text-[11px] font-mono font-bold transition-all cursor-pointer ${
                isSchemeAllDone
                  ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)]'
                  : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] border-[var(--border-default)] hover:border-[var(--accent-primary)]'
              }`}
              title={isSchemeAllDone ? 'Untick all 5 reactions' : 'Tick all 5 reactions completed'}
            >
              {isSchemeAllDone ? <CheckCircle2 size={13} /> : <Circle size={13} />}
              <span>{schemeCompletedCount}/5</span>
            </button>
          )}

          {sectionId && !isMultiReactionScheme && onToggleTopic && (
            <button
              type="button"
              data-no-print="true"
              onClick={() => onToggleTopic(schemeTopicIds[0], sectionId, allSectionTopicIds)}
              className={`p-1.5 rounded-full transition-all cursor-pointer flex items-center justify-center ${
                isSchemeAllDone
                  ? 'bg-[var(--accent-primary)] text-white shadow-2xs scale-105'
                  : 'border border-[var(--border-default)] text-[var(--text-muted)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]'
              }`}
              title={isSchemeAllDone ? 'Mark diagram incomplete' : 'Mark diagram completed'}
            >
              {isSchemeAllDone ? <CheckCircle2 size={16} /> : <Circle size={16} />}
            </button>
          )}

          <button
            type="button"
            data-no-print="true"
            onClick={() => setIsMinimized((prev) => !prev)}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[var(--bg-elevated)] hover:bg-[var(--accent-primary)]/15 border border-[var(--border-default)] text-[10px] sm:text-[11px] font-mono font-bold text-[var(--accent-primary)] transition-colors cursor-pointer"
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
