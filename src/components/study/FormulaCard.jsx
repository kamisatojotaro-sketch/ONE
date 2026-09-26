import { Sparkles, Info } from 'lucide-react';

// Common scientific symbol glossary dictionary
const SYMBOL_GLOSSARY = {
  'p': 'Partial pressure of gas in vapour phase (atm or bar)',
  'K_H': "Henry's Law constant (varies inversely with gas solubility; increases with temperature)",
  'x': 'Mole fraction of the component in solution',
  'P°_A': 'Vapour pressure of pure volatile component A',
  'P_A': 'Partial vapour pressure of component A over the solution',
  'P_total': 'Total vapour pressure of the binary solution',
  'ΔT_b': 'Elevation in boiling point (T_b − T°_b)',
  'K_b': 'Molal elevation constant / ebullioscopic constant (K·kg/mol)',
  'm': 'Molality of solution (moles of solute per kg of solvent)',
  'ΔT_f': 'Depression in freezing point (T°_f − T_f)',
  'K_f': 'Molal depression constant / cryoscopic constant (K·kg/mol)',
  'Π': 'Osmotic pressure of solution (atm)',
  'C': 'Molar concentration (moles/L)',
  'R': 'Universal gas constant (0.0821 L·atm/(mol·K) or 8.314 J/(mol·K))',
  'T': 'Absolute temperature in Kelvin (K)',
  'i': "Van 't Hoff factor (ratio of observed to calculated colligative property)",
  'α': 'Degree of dissociation or association of electrolyte',
  'E_cell': 'Electromotive force (EMF) of electrochemical cell under given concentrations',
  'E°_cell': 'Standard cell potential at standard conditions (1 M, 1 bar, 298 K)',
  'n': 'Number of electrons transferred in balanced redox half-reaction',
  'Q': 'Reaction quotient ([Anode products] / [Cathode reactants])',
  'K_c': 'Chemical equilibrium constant of cell reaction',
  'ΔG°': 'Standard Gibbs free energy change (−nFE°_cell)',
  'F': 'Faraday constant (charge of 1 mole of electrons ≈ 96500 C/mol)',
  'κ': 'Specific conductivity (conductance per unit volume, S/cm or S/m)',
  'Λm': 'Molar conductivity (κ × 1000 / C, S·cm²/mol)',
  'Λ°m': 'Limiting molar conductivity at infinite dilution (zero concentration)',
  'G*': 'Cell constant (l / A, cm⁻¹)',
  'w': 'Mass of substance deposited at electrode (grams)',
  'Z_electrochem': 'Electrochemical equivalent of substance (E / 96500)',
  'F_e': 'Electrostatic Coulomb force between charges (Newtons)',
  'q₁, q₂': 'Magnitudes of point charges (Coulombs)',
  'r': 'Distance of separation between charges or conductors (meters)',
  'ε₀': 'Permittivity of free space (8.854 × 10⁻¹² C²/(N·m²))',
  'k': 'Coulomb constant (1 / (4πε₀) ≈ 9 × 10⁹ N·m²/C²)',
  'E': 'Electric field intensity (N/C or V/m)',
  'p_dipole': 'Electric dipole moment (q · 2a, C·m)',
  'τ': 'Torque acting on dipole or current loop (N·m)',
  'U': 'Potential energy stored in system / capacitor / inductor (Joules)',
  'Φ': 'Electric or magnetic flux (Weber or N·m²/C)',
  'V': 'Electric potential / voltage (Volts)',
  'C_cap': 'Capacitance of capacitor (Farad, F)',
  'I': 'Electric current (Amperes, A)',
  'v_d': 'Drift velocity of conduction electrons (m/s)',
  'μ': 'Mobility of charge carriers (v_d / E, m²/(V·s))',
  'ρ': 'Electrical resistivity of conductor (Ω·m)',
  'σ': 'Electrical conductivity (1 / ρ, S/m)',
  'B': 'Magnetic field / magnetic flux density (Tesla, T)',
  'μ₀': 'Permeability of free space (4π × 10⁻⁷ T·m/A)',
  'X_L': 'Inductive reactance (ωL = 2πfL, Ω)',
  'X_C': 'Capacitive reactance (1 / (ωC) = 1 / (2πfC), Ω)',
  'Z': 'Total impedance of AC circuit (Ω)',
  'cosφ': 'Power factor of AC circuit (R / Z)',
  'I_rms': 'Root-mean-square effective current (I₀ / √2 ≈ 0.707 I₀)',
  'I_mean': 'Average current over half cycle (2I₀ / π ≈ 0.637 I₀)',
  'c': 'Speed of light in vacuum (3 × 10⁸ m/s)'
};

// Formats text with subscripts, superscripts, and clean mathematical symbols
export function formatMathString(str) {
  if (!str) return '';

  return str
    // Common subscripts
    .replace(/\bK_H\b/g, 'K<sub>H</sub>')
    .replace(/\bP°_A\b/g, 'P°<sub>A</sub>')
    .replace(/\bP°_B\b/g, 'P°<sub>B</sub>')
    .replace(/\bx_A\b/g, 'x<sub>A</sub>')
    .replace(/\bx_B\b/g, 'x<sub>B</sub>')
    .replace(/\bp_A\b/g, 'p<sub>A</sub>')
    .replace(/\bp_B\b/g, 'p<sub>B</sub>')
    .replace(/\bp_total\b/g, 'p<sub>total</sub>')
    .replace(/\bP_total\b/g, 'P<sub>total</sub>')
    .replace(/\bΔT_b\b/g, 'ΔT<sub>b</sub>')
    .replace(/\bK_b\b/g, 'K<sub>b</sub>')
    .replace(/\bΔT_f\b/g, 'ΔT<sub>f</sub>')
    .replace(/\bK_f\b/g, 'K<sub>f</sub>')
    .replace(/\bT_b\b/g, 'T<sub>b</sub>')
    .replace(/\bT°_b\b/g, 'T°<sub>b</sub>')
    .replace(/\bT_f\b/g, 'T<sub>f</sub>')
    .replace(/\bT°_f\b/g, 'T°<sub>f</sub>')
    .replace(/\bE_cell\b/g, 'E<sub>cell</sub>')
    .replace(/\bE°_cell\b/g, 'E°<sub>cell</sub>')
    .replace(/\bK_c\b/g, 'K<sub>c</sub>')
    .replace(/\bΔG°\b/g, 'ΔG°')
    .replace(/\bΛm\b/g, 'Λ<sub>m</sub>')
    .replace(/\bΛ°m\b/g, 'Λ°<sub>m</sub>')
    .replace(/\bλ°₊\b/g, 'λ°<sub>+</sub>')
    .replace(/\bλ°₋\b/g, 'λ°<sub>−</sub>')
    .replace(/\bK_a\b/g, 'K<sub>a</sub>')
    .replace(/\bq_enc\b/g, 'q<sub>enc</sub>')
    .replace(/\bq_enclosed\b/g, 'q<sub>enclosed</sub>')
    .replace(/\bv_d\b/g, 'v<sub>d</sub>')
    .replace(/\bR_t\b/g, 'R<sub>t</sub>')
    .replace(/\bR₀\b/g, 'R<sub>0</sub>')
    .replace(/\bρ_t\b/g, 'ρ<sub>t</sub>')
    .replace(/\bρ₀\b/g, 'ρ<sub>0</sub>')
    .replace(/\bE_axial\b/g, 'E<sub>axial</sub>')
    .replace(/\bE_equatorial\b/g, 'E<sub>equatorial</sub>')
    .replace(/\bB_centre\b/g, 'B<sub>centre</sub>')
    .replace(/\bB_axis\b/g, 'B<sub>axis</sub>')
    .replace(/\bX_L\b/g, 'X<sub>L</sub>')
    .replace(/\bX_C\b/g, 'X<sub>C</sub>')
    .replace(/\bI_rms\b/g, 'I<sub>rms</sub>')
    .replace(/\bV_rms\b/g, 'V<sub>rms</sub>')
    .replace(/\bI_mean\b/g, 'I<sub>mean</sub>')
    .replace(/\bI_d\b/g, 'I<sub>d</sub>')
    .replace(/\bI_c\b/g, 'I<sub>c</sub>')
    .replace(/\bI_g\b/g, 'I<sub>g</sub>')
    .replace(/\bI₀\b/g, 'I<sub>0</sub>')
    .replace(/\bV₀\b/g, 'V<sub>0</sub>')
    .replace(/\be₀\b/g, 'e<sub>0</sub>')
    .replace(/\bω₀\b/g, 'ω<sub>0</sub>')
    .replace(/\bf₀\b/g, 'f<sub>0</sub>')
    .replace(/\bN_s\b/g, 'N<sub>s</sub>')
    .replace(/\bN_p\b/g, 'N<sub>p</sub>')
    .replace(/\bV_s\b/g, 'V<sub>s</sub>')
    .replace(/\bV_p\b/g, 'V<sub>p</sub>')
    .replace(/\bI_s\b/g, 'I<sub>s</sub>')
    .replace(/\bI_p\b/g, 'I<sub>p</sub>')
    .replace(/\bε₀\b/g, 'ε<sub>0</sub>')
    .replace(/\bμ₀\b/g, 'μ<sub>0</sub>')
    .replace(/\bμ_r\b/g, 'μ<sub>r</sub>')
    .replace(/\bχ_e\b/g, 'χ<sub>e</sub>')
    .replace(/\bq₀\b/g, 'q<sub>0</sub>')
    .replace(/\bq₁\b/g, 'q<sub>1</sub>')
    .replace(/\bq₂\b/g, 'q<sub>2</sub>')
    .replace(/\bw₁\b/g, 'w<sub>1</sub>')
    .replace(/\bw₂\b/g, 'w<sub>2</sub>')
    .replace(/\bM₁\b/g, 'M<sub>1</sub>')
    .replace(/\bM₂\b/g, 'M<sub>2</sub>')
    .replace(/\bC₁\b/g, 'C<sub>1</sub>')
    .replace(/\bC₂\b/g, 'C<sub>2</sub>')
    .replace(/\bC₀\b/g, 'C<sub>0</sub>')
    .replace(/\bC_eq\b/g, 'C<sub>eq</sub>')
    .replace(/\bF₁₂\b/g, 'F<sub>12</sub>')
    .replace(/\bF₂₁\b/g, 'F<sub>21</sub>')
    .replace(/\br₁₂\b/g, 'r<sub>12</sub>')
    // Superscripts
    .replace(/\br²\b/g, 'r<sup>2</sup>')
    .replace(/\br³\b/g, 'r<sup>3</sup>')
    .replace(/\bx²\b/g, 'x<sup>2</sup>')
    .replace(/\bx³\b/g, 'x<sup>3</sup>')
    .replace(/\bV²\b/g, 'V<sup>2</sup>')
    .replace(/\bI²\b/g, 'I<sup>2</sup>')
    .replace(/\bQ²\b/g, 'Q<sup>2</sup>')
    .replace(/\bB²\b/g, 'B<sup>2</sup>')
    .replace(/\bl²\b/g, 'l<sup>2</sup>')
    .replace(/\bv²\b/g, 'v<sup>2</sup>')
    .replace(/\bn²\b/g, 'n<sup>2</sup>')
    .replace(/\b10⁹\b/g, '10<sup>9</sup>')
    .replace(/\b10⁻⁷\b/g, '10<sup>−7</sup>')
    .replace(/\b10⁻¹²\b/g, '10<sup>−12</sup>')
    .replace(/\b3 × 10⁸\b/g, '3 × 10<sup>8</sup>');
}

// Find symbols present in formula to render dynamic glossary pills
function findGlossaryEntries(formulaStr) {
  const matches = [];
  const keys = Object.keys(SYMBOL_GLOSSARY);

  for (const k of keys) {
    // Check if key is contained as a word or distinct symbol
    if (formulaStr.includes(k)) {
      matches.push({ symbol: k, meaning: SYMBOL_GLOSSARY[k] });
    }
  }

  return matches;
}

export default function FormulaCard({ formulaList, derivations }) {
  if (!formulaList || formulaList.length === 0) return null;

  return (
    <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-5 md:p-6 shadow-xs space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[var(--badge-recommended-bg)]/15 border border-[var(--badge-recommended-bg)]/30 flex items-center justify-center text-[var(--text-accent)]">
            <Sparkles size={15} />
          </div>
          <div>
            <h5 className="font-serif text-base font-bold text-[var(--text-primary)]">
              Core Formula & Variable Breakdown
            </h5>
            <span className="text-[11px] font-cursive text-[var(--text-muted)]">
              board-standard equations with variable meanings
            </span>
          </div>
        </div>
      </div>

      {/* Formulas List with aesthetic typography */}
      <div className="space-y-3">
        {formulaList.map((formula, idx) => {
          const glossaryItems = findGlossaryEntries(formula);
          const formattedFormula = formatMathString(formula);

          return (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-xs space-y-3"
            >
              {/* Formula Display */}
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono font-bold text-[var(--accent-primary)] px-2 py-0.5 rounded bg-[var(--bg-elevated)] shrink-0">
                  Eq {idx + 1}
                </span>
                <div
                  className="font-serif text-base md:text-lg font-semibold tracking-wide text-[var(--text-primary)] flex-1 overflow-x-auto py-0.5"
                  dangerouslySetInnerHTML={{ __html: formattedFormula }}
                />
              </div>

              {/* Variable Definitions / Meaning breakdown */}
              {glossaryItems.length > 0 && (
                <div className="pt-2.5 border-t border-[var(--border-subtle)] space-y-1.5">
                  <div className="flex items-center gap-1 text-[11px] font-mono text-[var(--text-muted)] font-semibold uppercase tracking-wider">
                    <Info size={11} className="text-[var(--accent-primary)]" />
                    <span>Symbol Glossary</span>
                  </div>
                  <div className="grid grid-cols-1 gap-1.5 pt-1">
                    {glossaryItems.slice(0, 4).map((item, gIdx) => (
                      <div key={gIdx} className="text-xs flex items-baseline gap-2 font-sans text-[var(--text-secondary)]">
                        <span
                          className="font-serif font-bold text-[var(--text-primary)] px-1.5 py-0.5 rounded bg-[var(--bg-elevated)] border border-[var(--border-subtle)] shrink-0 text-xs"
                          dangerouslySetInnerHTML={{ __html: formatMathString(item.symbol) }}
                        />
                        <span className="text-xs leading-tight">{item.meaning}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Derivation Notes if present */}
      {derivations && (
        <div className="p-4 rounded-xl bg-[var(--badge-masterpiece-bg)]/10 border border-[var(--badge-masterpiece-border)]/30 space-y-1.5">
          <span className="text-xs font-mono font-bold text-[var(--accent-primary)] uppercase tracking-wider block">
            Mathematical Proof / Derivation Steps
          </span>
          <div
            className="font-sans text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: formatMathString(derivations) }}
          />
        </div>
      )}
    </div>
  );
}
