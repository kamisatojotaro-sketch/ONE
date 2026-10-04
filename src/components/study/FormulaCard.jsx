import { Sparkles, BookOpen } from 'lucide-react';
import katex from 'katex';
import { FormattedLatex } from './LatexView';

// Curated dictionary of specific formulas and their exact, relevant variables
const FORMULA_METADATA = {
  // Chemistry 1: Solutions
  'molarity': {
    title: 'Molarity (Molar Concentration)',
    display: 'Molarity (M) = <span class="math-fraction"><span class="num">n<sub>solute</sub></span><span class="den">V<sub>solution</sub> (in Litres)</span></span> = <span class="math-fraction"><span class="num">w<sub>2</sub> × 1000</span><span class="den">M<sub>2</sub> × V<sub>mL</sub></span></span>',
    variables: [
      { sym: 'M', desc: 'Molarity of solution (moles/L or M)' },
      { sym: 'n<sub>solute</sub>', desc: 'Moles of solute (w₂ / M₂)' },
      { sym: 'w<sub>2</sub>', desc: 'Mass of solute taken (in grams)' },
      { sym: 'M<sub>2</sub>', desc: 'Molar mass of solute (g/mol)' },
      { sym: 'V', desc: 'Total volume of solution (in Litres or mL)' }
    ]
  },
  'molality': {
    title: 'Molality (Mass Concentration)',
    display: 'Molality (m) = <span class="math-fraction"><span class="num">n<sub>solute</sub></span><span class="den">W<sub>solvent</sub> (in kg)</span></span> = <span class="math-fraction"><span class="num">w<sub>2</sub> × 1000</span><span class="den">M<sub>2</sub> × w<sub>1</sub> (in g)</span></span>',
    variables: [
      { sym: 'm', desc: 'Molality of solution (moles/kg — temperature independent!)' },
      { sym: 'w<sub>2</sub>', desc: 'Mass of solute dissolved (in grams)' },
      { sym: 'M<sub>2</sub>', desc: 'Molar mass of solute (g/mol)' },
      { sym: 'w<sub>1</sub>', desc: 'Mass of solvent in grams' }
    ]
  },
  'mole fraction': {
    title: 'Mole Fraction (x)',
    display: 'x<sub>A</sub> = <span class="math-fraction"><span class="num">n<sub>A</sub></span><span class="den">n<sub>A</sub> + n<sub>B</sub></span></span>, &nbsp;&nbsp; x<sub>A</sub> + x<sub>B</sub> = 1',
    variables: [
      { sym: 'x<sub>A</sub>', desc: 'Mole fraction of component A' },
      { sym: 'n<sub>A</sub>', desc: 'Moles of component A (w_A / M_A)' },
      { sym: 'n<sub>B</sub>', desc: 'Moles of component B (w_B / M_B)' }
    ]
  },
  'henry': {
    title: "Henry's Law Equation",
    display: 'p = K<sub>H</sub> · x',
    variables: [
      { sym: 'p', desc: 'Partial pressure of gas in vapour phase above liquid' },
      { sym: 'K<sub>H</sub>', desc: "Henry's Law constant (varies inversely with gas solubility; higher in hot water)" },
      { sym: 'x', desc: 'Mole fraction of gas dissolved in the liquid' }
    ]
  },
  'raoult': {
    title: "Raoult's Law for Volatile Binary Solutions",
    display: 'p<sub>total</sub> = p<sub>A</sub> + p<sub>B</sub> = p°<sub>A</sub> x<sub>A</sub> + p°<sub>B</sub> x<sub>B</sub>',
    variables: [
      { sym: 'p<sub>total</sub>', desc: 'Total vapour pressure exerted by the binary solution' },
      { sym: 'p°<sub>A</sub>, p°<sub>B</sub>', desc: 'Vapour pressures of pure volatile components A and B' },
      { sym: 'x<sub>A</sub>, x<sub>B</sub>', desc: 'Mole fractions of components A and B in liquid solution' }
    ]
  },
  'boiling': {
    title: 'Elevation of Boiling Point',
    display: 'ΔT<sub>b</sub> = i · K<sub>b</sub> · m = <span class="math-fraction"><span class="num">i · 1000 · K<sub>b</sub> · w<sub>2</sub></span><span class="den">M<sub>2</sub> · w<sub>1</sub></span></span>',
    variables: [
      { sym: 'ΔT<sub>b</sub>', desc: 'Elevation in boiling point (T_b − T°_b in Kelvin)' },
      { sym: 'K<sub>b</sub>', desc: 'Molal elevation constant / ebullioscopic constant (K·kg/mol)' },
      { sym: 'm', desc: 'Molality of solution' },
      { sym: 'i', desc: "Van 't Hoff factor (corrects for dissociation or association)" }
    ]
  },
  'freezing': {
    title: 'Depression of Freezing Point',
    display: 'ΔT<sub>f</sub> = i · K<sub>f</sub> · m = <span class="math-fraction"><span class="num">i · 1000 · K<sub>f</sub> · w<sub>2</sub></span><span class="den">M<sub>2</sub> · w<sub>1</sub></span></span>',
    variables: [
      { sym: 'ΔT<sub>f</sub>', desc: 'Depression in freezing point (T°_f − T_f in Kelvin)' },
      { sym: 'K<sub>f</sub>', desc: 'Molal depression constant / cryoscopic constant (K·kg/mol)' },
      { sym: 'w<sub>2</sub>', desc: 'Mass of solute dissolved' },
      { sym: 'w<sub>1</sub>', desc: 'Mass of solvent in grams' }
    ]
  },
  'osmotic': {
    title: 'Osmotic Pressure Equation',
    display: 'Π = i · C R T = <span class="math-fraction"><span class="num">i · w<sub>2</sub> R T</span><span class="den">M<sub>2</sub> · V</span></span>',
    variables: [
      { sym: 'Π', desc: 'Osmotic pressure (in atmospheres or bar)' },
      { sym: 'C', desc: 'Molar concentration (moles/L)' },
      { sym: 'R', desc: 'Universal gas constant (0.0821 L·atm/(mol·K))' },
      { sym: 'T', desc: 'Absolute temperature in Kelvin' }
    ]
  },
  'van': {
    title: "Van 't Hoff Factor & Degree of Dissociation/Association",
    display: 'i = <span class="math-fraction"><span class="num">Normal Molar Mass</span><span class="den">Abnormal Molar Mass</span></span> = 1 + (n − 1)α',
    variables: [
      { sym: 'i', desc: "Van 't Hoff factor (i > 1 for dissociation; i < 1 for association)" },
      { sym: 'α', desc: 'Degree of dissociation or association of the solute' },
      { sym: 'n', desc: 'Number of ions produced per formula unit upon complete dissociation' }
    ]
  },

  // Chemistry 2: Electrochemistry
  'nernst': {
    title: 'Nernst Equation (at 298 K)',
    display: 'E<sub>cell</sub> = E°<sub>cell</sub> − <span class="math-fraction"><span class="num">0.0591</span><span class="den">n</span></span> log <span class="math-fraction"><span class="num">[Anode oxidation products]</span><span class="den">[Cathode reduction reactants]</span></span>',
    variables: [
      { sym: 'E<sub>cell</sub>', desc: 'Cell potential / EMF under non-standard concentrations (V)' },
      { sym: 'E°<sub>cell</sub>', desc: 'Standard cell potential (E°_cathode − E°_anode) at 1 M, 298 K' },
      { sym: 'n', desc: 'Number of moles of electrons transferred in balanced redox reaction' },
      { sym: '0.0591', desc: 'Value of (2.303 · R · T / F) at 298.15 K' }
    ]
  },
  'gibbs': {
    title: 'Standard Gibbs Free Energy & Equilibrium Constant',
    display: 'ΔG° = −n F E°<sub>cell</sub> = −2.303 R T log K<sub>c</sub>',
    variables: [
      { sym: 'ΔG°', desc: 'Standard Gibbs free energy change (Joules/mol)' },
      { sym: 'F', desc: 'Faraday constant (charge of 1 mole electrons ≈ 96500 C/mol)' },
      { sym: 'K<sub>c</sub>', desc: 'Chemical equilibrium constant of the cell reaction' }
    ]
  },
  'kohlrausch': {
    title: "Kohlrausch's Law of Independent Ionic Migration",
    display: 'Λ°<sub>m</sub> = ν<sub>+</sub> λ°<sub>+</sub> + ν<sub>−</sub> λ°<sub>−</sub>',
    variables: [
      { sym: 'Λ°<sub>m</sub>', desc: 'Limiting molar conductivity of electrolyte at infinite dilution (S·cm²/mol)' },
      { sym: 'λ°<sub>+</sub>, λ°<sub>−</sub>', desc: 'Limiting ionic molar conductivities of individual cation and anion' },
      { sym: 'ν<sub>+</sub>, ν<sub>−</sub>', desc: 'Number of cations and anions produced per formula unit' }
    ]
  },
  'zit': {
    title: "Faraday's First Law of Electrolysis",
    display: 'w = z · I · t = <span class="math-fraction"><span class="num">M · I · t</span><span class="den">n · 96500</span></span>',
    variables: [
      { sym: 'w', desc: 'Mass of substance deposited at electrode (in grams)' },
      { sym: 'z', desc: 'Electrochemical equivalent (z = M / (n·F) in g/C)' },
      { sym: 'I', desc: 'Steady electric current in Amperes (A)' },
      { sym: 't', desc: 'Time of current passage strictly in SECONDS (s)' },
      { sym: 'M', desc: 'Molar mass of substance deposited (g/mol)' },
      { sym: 'n', desc: 'Valence electron count transferred in redox reaction' },
      { sym: '96500', desc: 'Faraday constant F (Coulombs per mole of electrons)' }
    ]
  },
  'faraday constant': {
    title: "Faraday Constant (F)",
    display: '1 F = N<sub>A</sub> · e ≈ 96487 ≈ 96500 C/mol',
    variables: [
      { sym: 'F', desc: 'Faraday constant = absolute charge of 1 mole electrons (C/mol)' },
      { sym: 'N<sub>A</sub>', desc: 'Avogadro’s number (6.022 × 10²³ mol⁻¹)' },
      { sym: 'e', desc: 'Elementary electron charge (1.602 × 10⁻¹⁹ C)' }
    ]
  },

  // Physics 1: Electrostatics
  'coulomb': {
    title: "Coulomb's Law (Electrostatic Force)",
    display: 'F = <span class="math-fraction"><span class="num">1</span><span class="den">4πε<sub>0</sub></span></span> · <span class="math-fraction"><span class="num">q<sub>1</sub> q<sub>2</sub></span><span class="den">r<sup>2</sup></span></span>',
    variables: [
      { sym: 'F', desc: 'Electrostatic force between two stationary point charges (Newtons)' },
      { sym: 'q<sub>1</sub>, q<sub>2</sub>', desc: 'Magnitudes of charges in Coulombs (C)' },
      { sym: 'r', desc: 'Distance of separation between charges (meters)' },
      { sym: 'ε<sub>0</sub>', desc: 'Permittivity of free space (8.854 × 10⁻¹² C²/(N·m²))' },
      { sym: 'k', desc: 'Coulomb constant = 1 / (4πε₀) ≈ 9 × 10⁹ N·m²/C²' }
    ]
  },
  'electric field': {
    title: 'Electric Field Intensity',
    display: 'E = <span class="math-fraction"><span class="num">F</span><span class="den">q<sub>0</sub></span></span> = <span class="math-fraction"><span class="num">1</span><span class="den">4πε<sub>0</sub></span></span> · <span class="math-fraction"><span class="num">q</span><span class="den">r<sup>2</sup></span></span>',
    variables: [
      { sym: 'E', desc: 'Electric field intensity (N/C or V/m)' },
      { sym: 'q<sub>0</sub>', desc: 'Vanishingly small positive test charge (C)' },
      { sym: 'q', desc: 'Source charge producing the field' }
    ]
  },
  'dipole': {
    title: 'Electric Dipole Moment & Fields',
    display: 'p = q · 2a, &nbsp;&nbsp; E<sub>axial</sub> ≈ <span class="math-fraction"><span class="num">2 k p</span><span class="den">r<sup>3</sup></span></span>, &nbsp;&nbsp; E<sub>equatorial</sub> ≈ <span class="math-fraction"><span class="num">k p</span><span class="den">r<sup>3</sup></span></span>',
    variables: [
      { sym: 'p', desc: 'Electric dipole moment (q · 2a, directed from −q to +q, C·m)' },
      { sym: 'E<sub>axial</sub>', desc: 'Field along dipole axis (twice equatorial field for r >> a)' },
      { sym: 'E<sub>equatorial</sub>', desc: 'Field on perpendicular bisector (opposite to p vector)' }
    ]
  },
  'gauss': {
    title: "Gauss's Theorem (Electric Flux)",
    display: 'Φ = ∮ E · dA = <span class="math-fraction"><span class="num">q<sub>enclosed</sub></span><span class="den">ε<sub>0</sub></span></span>',
    variables: [
      { sym: 'Φ', desc: 'Total electric flux passing through closed Gaussian surface (N·m²/C)' },
      { sym: 'q<sub>enclosed</sub>', desc: 'Net electric charge enclosed inside the surface' },
      { sym: 'ε<sub>0</sub>', desc: 'Permittivity of free space' }
    ]
  },
  'drift': {
    title: 'Drift Velocity & Electric Current Relation',
    display: 'I = n A e v<sub>d</sub>, &nbsp;&nbsp; v<sub>d</sub> = <span class="math-fraction"><span class="num">e E τ</span><span class="den">m</span></span>',
    variables: [
      { sym: 'I', desc: 'Steady electric current flowing through conductor (A)' },
      { sym: 'n', desc: 'Number density of free conduction electrons (m⁻³)' },
      { sym: 'A', desc: 'Cross-sectional area of conductor wire (m²)' },
      { sym: 'e', desc: 'Elementary electron charge (1.602 × 10⁻¹⁹ C)' },
      { sym: 'v<sub>d</sub>', desc: 'Average drift velocity acquired by electrons under field (m/s)' },
      { sym: 'τ', desc: 'Average relaxation time between consecutive electron collisions (s)' }
    ]
  },
  'wheatstone': {
    title: 'Wheatstone Bridge Balance Condition',
    display: '<span class="math-fraction"><span class="num">P</span><span class="den">Q</span></span> = <span class="math-fraction"><span class="num">R</span><span class="den">S</span></span> &nbsp;&nbsp; (when I<sub>g</sub> = 0)',
    variables: [
      { sym: 'P, Q, R', desc: 'Known bridge arm resistance values (Ω)' },
      { sym: 'S', desc: 'Unknown resistance to be determined (Ω)' },
      { sym: 'I<sub>g</sub>', desc: 'Current through central galvanometer branch (0 at balance)' }
    ]
  },
  'biot': {
    title: 'Biot-Savart Law',
    display: 'dB = <span class="math-fraction"><span class="num">μ<sub>0</sub></span><span class="den">4π</span></span> · <span class="math-fraction"><span class="num">I dl sinθ</span><span class="den">r<sup>2</sup></span></span>',
    variables: [
      { sym: 'dB', desc: 'Magnetic field contribution of current element (Tesla, T)' },
      { sym: 'μ<sub>0</sub>', desc: 'Permeability of free space (4π × 10⁻⁷ T·m/A)' },
      { sym: 'I dl', desc: 'Current carrying infinitesimal wire element' },
      { sym: 'θ', desc: 'Angle between current element vector dl and position vector r' }
    ]
  },
  'resonance': {
    title: 'Electrical Resonance in Series LCR Circuit',
    display: 'X<sub>L</sub> = X<sub>C</sub> &nbsp; ⟹ &nbsp; ω<sub>0</sub> = <span class="math-fraction"><span class="num">1</span><span class="den">√(L C)</span></span>, &nbsp;&nbsp; f<sub>0</sub> = <span class="math-fraction"><span class="num">1</span><span class="den">2π √(L C)</span></span>',
    variables: [
      { sym: 'ω<sub>0</sub>', desc: 'Resonant angular frequency (rad/s) where Z = R (minimum impedance)' },
      { sym: 'L', desc: 'Inductance of inductor (Henrys, H)' },
      { sym: 'C', desc: 'Capacitance of capacitor (Farads, F)' },
      { sym: 'X<sub>L</sub>, X<sub>C</sub>', desc: 'Inductive and capacitive reactances that cancel at resonance' }
    ]
  },
  'rms': {
    title: 'RMS and Mean Values of Alternating Current',
    display: 'I<sub>rms</sub> = <span class="math-fraction"><span class="num">I<sub>0</sub></span><span class="den">√2</span></span> ≈ 0.707 I<sub>0</sub>, &nbsp;&nbsp; I<sub>mean</sub> = <span class="math-fraction"><span class="num">2 I<sub>0</sub></span><span class="den">π</span></span> ≈ 0.637 I<sub>0</sub>',
    variables: [
      { sym: 'I<sub>rms</sub>', desc: 'Root-mean-square effective current producing equivalent DC heating' },
      { sym: 'I<sub>0</sub>', desc: 'Peak amplitude of sinusoidal alternating current' },
      { sym: 'I<sub>mean</sub>', desc: 'Mean current value integrated over half a cycle' }
    ]
  },
  'faraday': {
    title: "Faraday's Law of Induction & Lenz's Law",
    display: 'ε = −N <span class="math-fraction"><span class="num">dΦ<sub>B</sub></span><span class="den">dt</span></span>, &nbsp;&nbsp; q = <span class="math-fraction"><span class="num">N · ΔΦ<sub>B</sub></span><span class="den">R</span></span>',
    variables: [
      { sym: 'ε', desc: 'Induced electromotive force (EMF) across circuit ends (Volts, V)' },
      { sym: 'N', desc: 'Number of turns in the coil' },
      { sym: 'Φ<sub>B</sub>', desc: 'Magnetic flux linked with coil (Φ = B · A · cosθ in Weber, Wb)' },
      { sym: 'dΦ<sub>B</sub> / dt', desc: 'Time rate of change of magnetic flux' },
      { sym: '− (negative sign)', desc: 'Lenz’s law: Induced EMF opposes the flux change causing it' },
      { sym: 'q', desc: 'Total induced electric charge (Coulombs) — INDEPENDENT of time and speed!' },
      { sym: 'R', desc: 'Total electrical resistance of closed circuit (Ω)' }
    ]
  },
  'dφ': {
    title: "Faraday's Law of Electromagnetic Induction",
    display: 'ε = −N <span class="math-fraction"><span class="num">dΦ<sub>B</sub></span><span class="den">dt</span></span>, &nbsp;&nbsp; I = <span class="math-fraction"><span class="num">ε</span><span class="den">R</span></span>',
    variables: [
      { sym: 'ε', desc: 'Induced EMF in Volts (V)' },
      { sym: 'N', desc: 'Number of turns in coil' },
      { sym: 'dΦ / dt', desc: 'Rate of change of magnetic flux (Wb/s)' },
      { sym: 'I', desc: 'Induced electric current in closed loop of resistance R' }
    ]
  },
  'magnetic flux': {
    title: 'Magnetic Flux (Φ)',
    display: 'Φ = B · A · cos θ = B⃗ · A⃗',
    variables: [
      { sym: 'Φ', desc: 'Magnetic flux passing through coil surface (Weber, Wb or T·m²)' },
      { sym: 'B', desc: 'Uniform magnetic field strength (Tesla, T)' },
      { sym: 'A', desc: 'Surface area enclosed by coil loop (m²)' },
      { sym: 'θ', desc: 'Angle between magnetic field B and normal area vector A' }
    ]
  },
  'independent of time': {
    title: "Induced Charge (Time-Independent)",
    display: 'q = <span class="math-fraction"><span class="num">N · ΔΦ<sub>B</sub></span><span class="den">R</span></span>',
    variables: [
      { sym: 'q', desc: 'Total induced electric charge in Coulombs (C)' },
      { sym: 'ΔΦ<sub>B</sub>', desc: 'Net change in magnetic flux through coil (Wb)' },
      { sym: 'R', desc: 'Total circuit resistance (Ω)' },
      { sym: 'Golden Rule', desc: 'Total charge q is strictly independent of time and magnet velocity!' }
    ]
  }
};

// Universal formatter that converts LaTeX expressions, removes markdown asterisks, and renders typographic math
export function formatMathString(str) {
  if (!str) return '';

  let out = str;

  // 1. Remove markdown bold asterisks and render clean bold text
  out = out.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-[var(--text-primary)]">$1</strong>');

  // 2. Render KaTeX block math $$...$$
  out = out.replace(/\$\$([\s\S]+?)\$\$/g, (_, math) => {
    try {
      return `<span class="katex-render block my-2 text-center overflow-x-auto py-1 scrollbar-none">${katex.renderToString(math.trim(), { displayMode: true, throwOnError: false, output: 'htmlAndMathml' })}</span>`;
    } catch {
      return math;
    }
  });

  // 3. Render KaTeX inline math $...$
  out = out.replace(/\$([^\$\n]+?)\$/g, (_, math) => {
    try {
      return `<span class="katex-render inline-block align-middle px-0.5">${katex.renderToString(math.trim(), { displayMode: false, throwOnError: false, output: 'htmlAndMathml' })}</span>`;
    } catch {
      return math;
    }
  });

  // 4. Chemical Reaction Arrows & Indicators
  out = out
    .replace(/⟶|-->/g, ' <span class="font-bold text-[var(--accent-primary)] px-1">⟶</span> ')
    .replace(/⇌|<=>/g, ' <span class="font-bold text-amber-500 px-1">⇌</span> ')
    .replace(/↑/g, '<sup>↑</sup>')
    .replace(/↓/g, '<sub>↓</sub>');

  // 5. Convert any word_sub pattern to word<sub>sub</sub> (outside of tags)
  if (!out.includes('class="katex')) {
    out = out
      .replace(/([A-Za-z0-9α-ωΑ-Ω°]+)_([A-Za-z0-9°+−]+)/g, '$1<sub>$2</sub>')
      .replace(/\br\^2\b|\br²\b/g, 'r<sup>2</sup>')
      .replace(/\br\^3\b|\br³\b/g, 'r<sup>3</sup>')
      .replace(/\bx\^2\b|\bx²\b/g, 'x<sup>2</sup>')
      .replace(/\bx\^3\b|\bx³\b/g, 'x<sup>3</sup>')
      .replace(/\bV\^2\b|\bV²\b/g, 'V<sup>2</sup>')
      .replace(/\bI\^2\b|\bI²\b/g, 'I<sup>2</sup>')
      .replace(/\b10\^9\b|\b10⁹\b/g, '10<sup>9</sup>')
      .replace(/\b10\^-7\b|\b10⁻⁷\b/g, '10<sup>−7</sup>')
      .replace(/\b10\^-12\b|\b10⁻¹²\b/g, '10<sup>−12</sup>')
      .replace(/\b3 × 10\^8\b|\b3 × 10⁸\b/g, '3 × 10<sup>8</sup>');
  }

  return out;
}

// Find curated metadata for a formula or create clean default
function resolveFormulaMetadata(formulaStr) {
  const lower = formulaStr.toLowerCase();

  for (const [key, meta] of Object.entries(FORMULA_METADATA)) {
    if (lower.includes(key)) {
      return meta;
    }
  }

  // Fallback: clean formatting with no hallucinated glossary
  return {
    title: 'Formula Relation',
    display: formatMathString(formulaStr),
    variables: []
  };
}

export default function FormulaCard({ formulaList, derivations }) {
  if (!formulaList || formulaList.length === 0) return null;

  return (
    <div className="rounded-2xl sm:rounded-3xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-3.5 sm:p-6 md:p-7 shadow-xs space-y-3.5 sm:space-y-5">
      {/* Pinterest-inspired Editorial Header */}
      <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3 sm:pb-4">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[var(--text-accent)]/15 border border-[var(--text-accent)]/30 flex items-center justify-center text-[var(--text-accent)] shrink-0">
            <Sparkles size={15} />
          </div>
          <div>
            <h5 className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)]">
              Core Formulas & Variable Meanings
            </h5>
            <span className="text-[11px] sm:text-xs font-cursive text-[var(--text-muted)] block">
              board-standard mathematical relations with variable definitions
            </span>
          </div>
        </div>
      </div>

      {/* Aesthetic Formula Cards */}
      <div className="space-y-3 sm:space-y-4">
        {formulaList.map((formula, idx) => {
          const meta = resolveFormulaMetadata(formula);

          return (
            <div
              key={idx}
              className="p-3.5 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-xs space-y-3 sm:space-y-4 transition-all hover:border-[var(--accent-primary)]/50"
            >
              {/* Equation Title Tag */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] sm:text-xs font-mono font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[var(--bg-elevated)] text-[var(--accent-primary)] border border-[var(--border-subtle)] truncate">
                  {meta.title}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-[var(--text-muted)] shrink-0">
                  Eq {idx + 1}
                </span>
              </div>

              {/* Big, Clean Mathematical Typography */}
              <div className="py-2 px-2.5 sm:px-3 rounded-xl bg-[var(--bg-base)]/60 border border-[var(--border-subtle)] overflow-x-auto scrollbar-none touch-pan-x">
                <div
                  className="font-serif text-sm sm:text-lg md:text-xl font-bold tracking-wide text-[var(--text-primary)] text-center py-1 sm:py-2 min-w-min"
                  dangerouslySetInnerHTML={{ __html: meta.display }}
                />
              </div>

              {/* Curated, Accurate Variable Breakdown (Only actual variables from this formula!) */}
              {meta.variables && meta.variables.length > 0 && (
                <div className="pt-2.5 sm:pt-3 border-t border-[var(--border-subtle)] space-y-1.5 sm:space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] font-bold block">
                    Where:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 sm:gap-2">
                    {meta.variables.map((v, vIdx) => (
                      <div
                        key={vIdx}
                        className="flex items-start gap-2 p-1.5 sm:p-2 rounded-xl bg-[var(--bg-elevated)]/60 border border-[var(--border-subtle)] text-xs"
                      >
                        <span
                          className="font-serif font-bold text-[var(--text-primary)] px-1.5 py-0.5 rounded-md bg-[var(--bg-surface)] border border-[var(--border-default)] shrink-0 font-mono text-[11px] sm:text-xs"
                          dangerouslySetInnerHTML={{ __html: v.sym }}
                        />
                        <span className="font-sans text-[var(--text-secondary)] text-[11px] sm:text-xs leading-snug self-center">
                          {v.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mathematical Proof / Derivations Card if present */}
      {derivations && (
        <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] space-y-2 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--accent-primary)] uppercase tracking-wider">
            <BookOpen size={14} />
            <span>Derivation Steps & Mathematical Notes</span>
          </div>
          {derivations.includes('$') || derivations.includes('\\') ? (
            <div className="font-sans text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-wrap pl-3 border-l-2 border-[var(--accent-primary)] break-words">
              <FormattedLatex content={derivations} />
            </div>
          ) : (
            <div
              className="font-sans text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-wrap pl-3 border-l-2 border-[var(--accent-primary)] break-words"
              dangerouslySetInnerHTML={{ __html: formatMathString(derivations) }}
            />
          )}
        </div>
      )}
    </div>
  );
}
