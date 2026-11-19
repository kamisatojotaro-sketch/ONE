import React from 'react';
import { BookOpen } from 'lucide-react';

export default function ChemistryExamDiagramCard({ diagramId, title, subtitle }) {
  if (!diagramId) return null;

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
            {/* Open Chain (Fischer) Structure */}
            <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-serif text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                  1. Open-Chain (Straight-Chain Fischer) Structure
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--accent-primary)]">
                  D-(+)-Glucose &amp; D-(-)-Fructose
                </span>
              </div>
              <svg viewBox="0 0 380 230" className="w-full h-auto text-[var(--text-primary)]">
                {/* D-(+)-Glucose */}
                <g transform="translate(20, 15)">
                  <text x="75" y="12" fontSize="11" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">D-(+)-Glucose (Aldohexose)</text>
                  <text x="75" y="34" fontSize="12" fontWeight="bold" fill="currentColor" textAnchor="middle">¹CHO</text>
                  {/* Vertical backbone */}
                  <line x1="75" y1="40" x2="75" y2="165" stroke="currentColor" strokeWidth="1.6" />
                  {/* C2 to C5 horizontal bars */}
                  {[62, 88, 114, 140].map((y, idx) => (
                    <line key={idx} x1="45" y1={y} x2="105" y2={y} stroke="currentColor" strokeWidth="1.5" />
                  ))}
                  {/* C2: H left, OH right */}
                  <text x="36" y="66" fontSize="11" fill="currentColor" textAnchor="end">H</text>
                  <text x="112" y="66" fontSize="11" fontWeight="bold" fill="var(--accent-primary)">OH</text>
                  {/* C3: HO left, H right */}
                  <text x="36" y="92" fontSize="11" fontWeight="bold" fill="var(--accent-primary)" textAnchor="end">HO</text>
                  <text x="112" y="92" fontSize="11" fill="currentColor">H</text>
                  {/* C4: H left, OH right */}
                  <text x="36" y="118" fontSize="11" fill="currentColor" textAnchor="end">H</text>
                  <text x="112" y="118" fontSize="11" fontWeight="bold" fill="var(--accent-primary)">OH</text>
                  {/* C5: H left, OH right (D-configuration box) */}
                  <rect x="20" y="127" width="122" height="24" rx="4" fill="none" stroke="var(--accent-primary)" strokeWidth="1" strokeDasharray="3,2" />
                  <text x="36" y="144" fontSize="11" fill="currentColor" textAnchor="end">H</text>
                  <text x="112" y="144" fontSize="11" fontWeight="bold" fill="var(--accent-primary)">OH (C5)</text>
                  {/* C6: CH2OH */}
                  <text x="75" y="182" fontSize="12" fontWeight="bold" fill="currentColor" textAnchor="middle">⁶CH₂OH</text>
                  <text x="75" y="200" fontSize="9.5" fill="var(--text-muted)" textAnchor="middle">Condensed: CHO–(CHOH)₄–CH₂OH</text>
                </g>

                {/* D-(-)-Fructose */}
                <g transform="translate(210, 15)">
                  <text x="75" y="12" fontSize="11" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">D-(-)-Fructose (Ketohexose)</text>
                  <text x="75" y="34" fontSize="12" fontWeight="bold" fill="currentColor" textAnchor="middle">¹CH₂OH</text>
                  <line x1="75" y1="40" x2="75" y2="165" stroke="currentColor" strokeWidth="1.6" />
                  {/* C2 = O keto group */}
                  <rect x="48" y="50" width="54" height="20" rx="5" fill="var(--bg-elevated)" stroke="var(--accent-primary)" strokeWidth="1.3" />
                  <text x="75" y="64" fontSize="11" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">²C = O</text>
                  {/* C3 to C5 bars */}
                  {[88, 114, 140].map((y, idx) => (
                    <line key={idx} x1="45" y1={y} x2="105" y2={y} stroke="currentColor" strokeWidth="1.5" />
                  ))}
                  {/* C3: HO left, H right */}
                  <text x="36" y="92" fontSize="11" fontWeight="bold" fill="var(--accent-primary)" textAnchor="end">HO</text>
                  <text x="112" y="92" fontSize="11" fill="currentColor">H</text>
                  {/* C4: H left, OH right */}
                  <text x="36" y="118" fontSize="11" fill="currentColor" textAnchor="end">H</text>
                  <text x="112" y="118" fontSize="11" fontWeight="bold" fill="var(--accent-primary)">OH</text>
                  {/* C5: H left, OH right */}
                  <text x="36" y="144" fontSize="11" fill="currentColor" textAnchor="end">H</text>
                  <text x="112" y="144" fontSize="11" fontWeight="bold" fill="var(--accent-primary)">OH</text>
                  {/* C6: CH2OH */}
                  <text x="75" y="182" fontSize="12" fontWeight="bold" fill="currentColor" textAnchor="middle">⁶CH₂OH</text>
                  <text x="75" y="200" fontSize="9.5" fill="var(--text-muted)" textAnchor="middle">Keto group at C2</text>
                </g>
              </svg>
            </div>

            {/* Cyclic Haworth Structures */}
            <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-serif text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                  2. Cyclic (Haworth Pyranose) Structures of Glucose
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--accent-primary)]">
                  α &amp; β Anomers (C1)
                </span>
              </div>
              <svg viewBox="0 0 420 230" className="w-full h-auto text-[var(--text-primary)]">
                {/* α-D-(+)-Glucopyranose */}
                <g transform="translate(10, 20)">
                  <text x="95" y="10" fontSize="11" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">
                    α-D-(+)-Glucopyranose
                  </text>
                  {/* Haworth Hexagon: C5(55,65) - O(135,65) - C1(165,105) - C2(135,145) - C3(55,145) - C4(25,105) */}
                  <polygon
                    points="55,65 130,65 165,105 135,145 55,145 25,105"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  {/* Ring Oxygen O at top-right vertex */}
                  <circle cx="135" cy="65" r="9" fill="var(--bg-base)" />
                  <text x="135" y="69" fontSize="12" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">O</text>

                  {/* Vertical substituent lines at C1, C2, C3, C4, C5 */}
                  {/* C1 (165,105): H up, OH down (alpha!) */}
                  <line x1="165" y1="78" x2="165" y2="135" stroke="var(--accent-primary)" strokeWidth="1.6" />
                  <text x="165" y="74" fontSize="10" fill="currentColor" textAnchor="middle">H</text>
                  <text x="165" y="148" fontSize="10.5" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">OH (C1 α)</text>

                  {/* C2 (135,145): H up, OH down */}
                  <line x1="135" y1="122" x2="135" y2="168" stroke="currentColor" strokeWidth="1.4" />
                  <text x="135" y="118" fontSize="9.5" fill="currentColor" textAnchor="middle">H</text>
                  <text x="135" y="180" fontSize="10" fontWeight="bold" fill="currentColor" textAnchor="middle">OH</text>

                  {/* C3 (55,145): OH up, H down */}
                  <line x1="55" y1="122" x2="55" y2="168" stroke="currentColor" strokeWidth="1.4" />
                  <text x="55" y="118" fontSize="10" fontWeight="bold" fill="currentColor" textAnchor="middle">OH</text>
                  <text x="55" y="180" fontSize="9.5" fill="currentColor" textAnchor="middle">H</text>

                  {/* C4 (25,105): H up, OH down */}
                  <line x1="25" y1="78" x2="25" y2="135" stroke="currentColor" strokeWidth="1.4" />
                  <text x="25" y="74" fontSize="9.5" fill="currentColor" textAnchor="middle">H</text>
                  <text x="25" y="147" fontSize="10" fontWeight="bold" fill="currentColor" textAnchor="middle">OH</text>

                  {/* C5 (55,65): CH2OH up, H down */}
                  <line x1="55" y1="40" x2="55" y2="88" stroke="currentColor" strokeWidth="1.4" />
                  <text x="55" y="35" fontSize="10" fontWeight="bold" fill="currentColor" textAnchor="middle">⁶CH₂OH</text>
                  <text x="55" y="99" fontSize="9.5" fill="currentColor" textAnchor="middle">H</text>

                  <text x="95" y="200" fontSize="9.5" fill="var(--text-muted)" textAnchor="middle">
                    C1 –OH is DOWN (trans to CH₂OH)
                  </text>
                </g>

                {/* β-D-(+)-Glucopyranose */}
                <g transform="translate(215, 20)">
                  <text x="95" y="10" fontSize="11" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">
                    β-D-(+)-Glucopyranose
                  </text>
                  <polygon
                    points="55,65 130,65 165,105 135,145 55,145 25,105"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <circle cx="135" cy="65" r="9" fill="var(--bg-base)" />
                  <text x="135" y="69" fontSize="12" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">O</text>

                  {/* C1 (165,105): OH up (beta!), H down */}
                  <line x1="165" y1="78" x2="165" y2="135" stroke="var(--accent-primary)" strokeWidth="1.6" />
                  <text x="165" y="74" fontSize="10.5" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">OH (C1 β)</text>
                  <text x="165" y="148" fontSize="10" fill="currentColor" textAnchor="middle">H</text>

                  {/* C2 (135,145): H up, OH down */}
                  <line x1="135" y1="122" x2="135" y2="168" stroke="currentColor" strokeWidth="1.4" />
                  <text x="135" y="118" fontSize="9.5" fill="currentColor" textAnchor="middle">H</text>
                  <text x="135" y="180" fontSize="10" fontWeight="bold" fill="currentColor" textAnchor="middle">OH</text>

                  {/* C3 (55,145): OH up, H down */}
                  <line x1="55" y1="122" x2="55" y2="168" stroke="currentColor" strokeWidth="1.4" />
                  <text x="55" y="118" fontSize="10" fontWeight="bold" fill="currentColor" textAnchor="middle">OH</text>
                  <text x="55" y="180" fontSize="9.5" fill="currentColor" textAnchor="middle">H</text>

                  {/* C4 (25,105): H up, OH down */}
                  <line x1="25" y1="78" x2="25" y2="135" stroke="currentColor" strokeWidth="1.4" />
                  <text x="25" y="74" fontSize="9.5" fill="currentColor" textAnchor="middle">H</text>
                  <text x="25" y="147" fontSize="10" fontWeight="bold" fill="currentColor" textAnchor="middle">OH</text>

                  {/* C5 (55,65): CH2OH up, H down */}
                  <line x1="55" y1="40" x2="55" y2="88" stroke="currentColor" strokeWidth="1.4" />
                  <text x="55" y="35" fontSize="10" fontWeight="bold" fill="currentColor" textAnchor="middle">⁶CH₂OH</text>
                  <text x="55" y="99" fontSize="9.5" fill="currentColor" textAnchor="middle">H</text>

                  <text x="95" y="200" fontSize="9.5" fill="var(--text-muted)" textAnchor="middle">
                    C1 –OH is UP (cis to CH₂OH)
                  </text>
                </g>
              </svg>
            </div>
          </div>
        );

      case 'zwitter-peptide-structures':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Zwitter Ion */}
            <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
              <span className="font-serif text-xs sm:text-sm font-bold text-[var(--text-primary)] block">
                1. Zwitter Ion (Dipolar Ion in Aqueous Solution)
              </span>
              <svg viewBox="0 0 360 125" className="w-full h-auto text-[var(--text-primary)]">
                {/* Neutral Amino Acid */}
                <text x="75" y="45" fontSize="12" fontWeight="bold" fill="currentColor" textAnchor="middle">
                  R — CH — COOH
                </text>
                <line x1="65" y1="52" x2="65" y2="72" stroke="currentColor" strokeWidth="1.5" />
                <text x="65" y="88" fontSize="12" fontWeight="bold" fill="currentColor" textAnchor="middle">
                  NH₂
                </text>

                {/* Equilibrium Arrows */}
                <text x="175" y="55" fontSize="18" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">
                  ⇌
                </text>

                {/* Zwitter Ion */}
                <text x="275" y="45" fontSize="12" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">
                  R — CH — COO⁻
                </text>
                <line x1="265" y1="52" x2="265" y2="72" stroke="var(--accent-primary)" strokeWidth="1.5" />
                <text x="265" y="88" fontSize="12" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">
                  ⁺NH₃
                </text>
                <text x="275" y="110" fontSize="10" fill="var(--text-muted)" textAnchor="middle">
                  Zwitter Ion (Dipolar Ion)
                </text>
              </svg>
            </div>

            {/* Peptide Bond / Linkage */}
            <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
              <span className="font-serif text-xs sm:text-sm font-bold text-[var(--text-primary)] block">
                2. Peptide Bond / Linkage (–CO–NH–) Formation
              </span>
              <svg viewBox="0 0 380 125" className="w-full h-auto text-[var(--text-primary)]">
                <text x="190" y="30" fontSize="11" fontWeight="bold" fill="currentColor" textAnchor="middle">
                  H₂N–CH₂–CO[OH  +  H]NH–CH₂–COOH   ──(-H₂O)──►
                </text>
                {/* Boxed Peptide Linkage */}
                <text x="95" y="75" fontSize="12" fontWeight="bold" fill="currentColor" textAnchor="end">
                  H₂N — CH₂ —
                </text>
                <rect x="102" y="57" width="88" height="26" rx="5" fill="var(--bg-elevated)" stroke="var(--accent-primary)" strokeWidth="1.8" />
                <text x="146" y="75" fontSize="12.5" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">
                  CO — NH
                </text>
                <text x="198" y="75" fontSize="12" fontWeight="bold" fill="currentColor" textAnchor="start">
                  — CH₂ — COOH
                </text>
                <line x1="146" y1="84" x2="146" y2="98" stroke="var(--accent-primary)" strokeWidth="1.4" />
                <text x="146" y="112" fontSize="10.5" fontWeight="bold" fill="var(--accent-primary)" textAnchor="middle">
                  Peptide Bond / Peptide Linkage (Glycylglycine)
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
              <svg viewBox="0 0 220 165" className="w-full h-auto text-[var(--text-primary)]">
                <line x1="35" y1="20" x2="35" y2="135" stroke="currentColor" strokeWidth="1.5" />
                <line x1="35" y1="135" x2="195" y2="135" stroke="currentColor" strokeWidth="1.5" />
                {/* Straight line with negative slope */}
                <line x1="35" y1="38" x2="175" y2="122" stroke="var(--accent-primary)" strokeWidth="2.2" />
                <circle cx="35" cy="38" r="3" fill="var(--accent-primary)" />
                <text x="42" y="34" fontSize="10" fontWeight="bold" fill="var(--accent-primary)">[R]₀ (Intercept)</text>
                <text x="125" y="72" fontSize="10" fontWeight="bold" fill="currentColor">Slope = -k</text>
                <text x="18" y="80" fontSize="10" fill="currentColor" transform="rotate(-90 18 80)" textAnchor="middle">[R]</text>
                <text x="115" y="152" fontSize="10" fill="currentColor" textAnchor="middle">Time (t) →</text>
              </svg>
            </div>

            {/* 2. First Order Graph ln[R] or log[R] vs t */}
            <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1.5">
              <span className="font-serif text-xs font-bold text-[var(--text-primary)] block">
                2. First Order: log[R] (or ln[R]) vs t
              </span>
              <svg viewBox="0 0 220 165" className="w-full h-auto text-[var(--text-primary)]">
                <line x1="35" y1="20" x2="35" y2="135" stroke="currentColor" strokeWidth="1.5" />
                <line x1="35" y1="135" x2="195" y2="135" stroke="currentColor" strokeWidth="1.5" />
                <line x1="35" y1="38" x2="175" y2="122" stroke="var(--accent-primary)" strokeWidth="2.2" />
                <circle cx="35" cy="38" r="3" fill="var(--accent-primary)" />
                <text x="42" y="34" fontSize="10" fontWeight="bold" fill="var(--accent-primary)">log[R]₀ (or ln[R]₀)</text>
                <text x="130" y="72" fontSize="9.5" fontWeight="bold" fill="currentColor">Slope = -k / 2.303</text>
                <text x="130" y="84" fontSize="8.5" fill="var(--text-muted)">(or -k for ln[R])</text>
                <text x="18" y="80" fontSize="10" fill="currentColor" transform="rotate(-90 18 80)" textAnchor="middle">log[R]</text>
                <text x="115" y="152" fontSize="10" fill="currentColor" textAnchor="middle">Time (t) →</text>
              </svg>
            </div>

            {/* 3. Activation Energy Profile (Handwritten 1.38.55 PM) */}
            <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1.5">
              <span className="font-serif text-xs font-bold text-[var(--text-primary)] block">
                3. Activation Energy (Eₐ) &amp; ΔH Profile
              </span>
              <svg viewBox="0 0 220 165" className="w-full h-auto text-[var(--text-primary)]">
                <line x1="35" y1="18" x2="35" y2="135" stroke="currentColor" strokeWidth="1.5" />
                <line x1="35" y1="135" x2="200" y2="135" stroke="currentColor" strokeWidth="1.5" />
                {/* Energy labels 100, 200, 300 */}
                <text x="31" y="112" fontSize="8.5" fill="var(--text-muted)" textAnchor="end">100</text>
                <text x="31" y="82" fontSize="8.5" fill="var(--text-muted)" textAnchor="end">200</text>
                <text x="31" y="38" fontSize="8.5" fill="var(--text-muted)" textAnchor="end">300</text>
                {/* Dashed baselines */}
                <line x1="35" y1="108" x2="185" y2="108" stroke="var(--text-muted)" strokeWidth="0.9" strokeDasharray="3,2" />
                <line x1="35" y1="78" x2="185" y2="78" stroke="var(--text-muted)" strokeWidth="0.9" strokeDasharray="3,2" />
                <line x1="35" y1="35" x2="145" y2="35" stroke="var(--text-muted)" strokeWidth="0.9" strokeDasharray="3,2" />
                {/* Reaction Profile Curve: R(100) -> Peak(300) -> P(200) */}
                <path d="M 40 108 L 65 108 Q 105 -25 145 78 L 185 78" fill="none" stroke="var(--accent-primary)" strokeWidth="2.2" />
                <text x="52" y="103" fontSize="10" fontWeight="bold" fill="currentColor">R</text>
                <text x="175" y="73" fontSize="10" fontWeight="bold" fill="currentColor">P</text>
                {/* Ea arrow (100 to 300) */}
                <line x1="105" y1="108" x2="105" y2="35" stroke="var(--accent-primary)" strokeWidth="1.3" />
                <text x="122" y="65" fontSize="9.5" fontWeight="bold" fill="var(--accent-primary)">Eₐ=200</text>
                {/* ΔH arrow (100 to 200) */}
                <line x1="155" y1="108" x2="155" y2="78" stroke="currentColor" strokeWidth="1.3" />
                <text x="180" y="96" fontSize="9" fontWeight="bold" fill="currentColor">ΔH=+100</text>
                <text x="115" y="152" fontSize="10" fill="currentColor" textAnchor="middle">Progress of Reaction →</text>
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
          <div className="p-3.5 sm:p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
              {[
                { reagent: '1. Cu₂Cl₂ / HCl or Cu₂Br₂ / HBr', product: 'C₆H₅Cl or C₆H₅Br + N₂', tag: 'Sandmeyer Reaction' },
                { reagent: '2. Cu / HCl or Cu / HBr', product: 'C₆H₅Cl or C₆H₅Br + N₂ + CuX', tag: 'Gatterman Reaction' },
                { reagent: '3. CuCN / KCN', product: 'C₆H₅CN (Benzonitrile) + N₂', tag: 'Cyanobenzene' },
                { reagent: '4. KI (Warm)', product: 'C₆H₅I (Iodobenzene) + KCl + N₂', tag: 'Iodination' },
                { reagent: '5. HBF₄ then Heat (Δ)', product: 'C₆H₅N₂⁺BF₄⁻ → C₆H₅F (Fluorobenzene)', tag: 'Balz-Schiemann' },
                { reagent: '6. HBF₄ then NaNO₂ / Cu, Δ', product: 'C₆H₅NO₂ (Nitrobenzene) + N₂ + NaBF₄', tag: 'Nitro Substitution' },
                { reagent: '7. H₃PO₂ + H₂O or CH₃CH₂OH', product: 'C₆H₆ (Benzene) + N₂ + HCl', tag: 'Deamination to Benzene' },
                { reagent: '8. H₂O (Warm to 283 K)', product: 'C₆H₅OH (Phenol) + N₂ + HCl', tag: 'Hydrolysis to Phenol' },
                { reagent: '9. C₆H₅NH₂ (H⁺) or C₆H₅OH (OH⁻)', product: 'p-Aminoazobenzene (Yellow) / p-Hydroxyazobenzene (Orange)', tag: 'Azo Coupling' },
              ].map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-1">
                  <div className="flex items-center justify-between gap-1.5">
                    <span className="font-mono text-[10px] font-bold text-[var(--accent-primary)] uppercase">
                      {item.tag}
                    </span>
                    <span className="font-mono text-[10px] text-[var(--text-muted)]">C₆H₅N₂⁺Cl⁻</span>
                  </div>
                  <div className="font-mono text-xs font-semibold text-[var(--text-secondary)]">
                    + {item.reagent}
                  </div>
                  <div className="font-serif text-xs font-bold text-[var(--text-primary)] pt-0.5">
                    → {item.product}
                  </div>
                </div>
              ))}
            </div>
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
            ].map((rxn) => (
              <div
                key={rxn.num}
                className="p-3.5 sm:p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-default)] space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-[var(--bg-elevated)] border border-[var(--border-subtle)] font-mono text-[11px] font-bold text-[var(--accent-primary)]">
                      Reaction {rxn.num}
                    </span>
                    <span className="font-serif text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                      {rxn.proof}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-5 overflow-x-auto py-1">
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
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  const content = renderDiagram();
  if (!content) return null;

  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-2xs space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-2.5">
        <div className="flex items-center gap-2">
          <BookOpen size={15} className="text-[var(--accent-primary)] shrink-0" />
          <h5 className="font-serif text-sm sm:text-base font-bold text-[var(--text-primary)]">
            {title || 'Exam Diagram Reference'}
          </h5>
        </div>
        {subtitle && (
          <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-muted)]">
            {subtitle}
          </span>
        )}
      </div>
      {content}
    </div>
  );
}
