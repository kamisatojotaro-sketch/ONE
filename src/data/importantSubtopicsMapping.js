// Exact CBSE Class 12 Physics Important Exam Topics & Derivations
// Mapped directly from the student's handwritten revision notes (Chapters 1 to 8)
// Flagged with specific syllabus justification, exam weightage, and high-yield prompts.

export const HANDWRITTEN_IMPORTANT_SUBTOPICS = {
  // =========================================================================
  // CHAPTER 1: ELECTRIC CHARGES AND FIELDS
  // =========================================================================
  'phy-sub-1-4': {
    title: 'Properties of Electric Field Lines',
    reason: 'Properties of electric field lines (Starred in revision notes; frequent give-reason questions on why field lines never intersect)',
    examTag: 'Important Question',
    chapterNum: 1
  },
  'phy-sub-1-6': {
    title: 'Electric Field on Axial & Equatorial Lines of a Dipole',
    reason: 'Field of dipole on axial & equatorial line (Starred in revision notes; guaranteed 3M/5M board derivation)',
    examTag: 'Important Derivation',
    chapterNum: 1
  },
  'phy-sub-1-7': {
    title: 'Torque on an Electric Dipole in Uniform Field',
    reason: 'Torque and potential energy of electric dipole (Starred in revision notes; τ = p × E and U = -p·E)',
    examTag: 'Important Derivation',
    chapterNum: 1
  },
  'phy-sub-1-11': {
    title: "Applications of Gauss's Law: Wire, Plane Sheet, Spherical Shell",
    reason: "Applications of Gauss's Law (Starred in revision notes; E = λ/2πε₀r, E = σ/2ε₀, shell E_out & E_in)",
    examTag: 'Important 5M Derivation',
    chapterNum: 1
  },

  // =========================================================================
  // CHAPTER 2: ELECTROSTATIC POTENTIAL AND CAPACITANCE
  // =========================================================================
  'phy-sub-2-2': {
    title: 'Potential Due to an Electric Dipole',
    reason: 'Electric potential due to an electric dipole (Starred in revision notes; V_axial = kp/r² and V_equatorial = 0)',
    examTag: 'Important Derivation',
    chapterNum: 2
  },
  'phy-sub-2-3': {
    title: 'Equipotential Surfaces & Potential Gradient',
    reason: 'Equipotential surfaces (Starred in revision notes; E = -dV/dr and why field is normal to surface)',
    examTag: 'Important Concept',
    chapterNum: 2
  },
  'phy-sub-2-7': {
    title: 'Capacitor & Capacitance (Series & Parallel Combinations)',
    reason: 'Capacitor and capacitance in series & parallel (Starred in revision notes; C = ε₀A/d and dielectric slab insertion)',
    examTag: 'Important Derivation & Numerical',
    chapterNum: 2
  },
  'phy-sub-2-8': {
    title: 'Energy Stored in a Capacitor',
    reason: 'Energy stored in a capacitor (Starred in revision notes; U = 1/2 CV² and battery connected/disconnected cases)',
    examTag: 'Important Derivation',
    chapterNum: 2
  },

  // =========================================================================
  // CHAPTER 3: CURRENT ELECTRICITY
  // =========================================================================
  'phy-sub-3-5': {
    title: 'Drift Velocity, Relation with Current & Mobility',
    reason: 'Drift velocity (1 mark), related sum, relationship b/w drift velocity and current (I = neAv_d), mobility (Starred in revision notes)',
    examTag: 'Important Derivation',
    chapterNum: 3
  },
  'phy-sub-3-9': {
    title: "Kirchhoff's Laws & Wheatstone Bridge Application",
    reason: "Kirchhoff's law and its applications: Wheatstone bridge (Starred in revision notes; loop rules & bridge balance condition P/Q = R/S)",
    examTag: 'Important 5M Question',
    chapterNum: 3
  },

  // =========================================================================
  // CHAPTER 4: MOVING CHARGES AND MAGNETISM
  // =========================================================================
  'phy-sub-4-2': {
    title: 'Magnetic Field Due to a Circular Current Loop',
    reason: 'Magnetic field due to circular loop (Starred in revision notes; Biot-Savart derivation on axis: B = μ₀IR²/2(R²+x²)^(3/2))',
    examTag: 'Important 5M Derivation',
    chapterNum: 4
  },
  'phy-sub-4-3': {
    title: "Ampere's Circuital Law & Applications",
    reason: "Ampere circuital law: Statement (V.V), applications on straight wire and long cylinder (Starred in revision notes)",
    examTag: 'Important Law & Derivation',
    chapterNum: 4
  },
  'phy-sub-4-4': {
    title: 'The Solenoid (Definition & Field Expression)',
    reason: 'Solenoid definition & derivation of B = μ₀nI (Starred in revision notes)',
    examTag: 'Important Question',
    chapterNum: 4
  },
  'phy-sub-4-5': {
    title: 'Force on a Charged Particle in Uniform Magnetic Field',
    reason: 'Force on a charged particle placed in uniform magnetic field (Starred in revision notes; Lorentz force F = q(v × B))',
    examTag: 'Important Concept',
    chapterNum: 4
  },
  'phy-sub-4-6': {
    title: 'Motion of a Charged Particle in a Magnetic Field',
    reason: 'Motion of charged particle in magnetic field: circular path radius r = mv/qB and helical trajectory (Starred in revision notes)',
    examTag: 'Important Derivation',
    chapterNum: 4
  },
  'phy-sub-4-7': {
    title: 'Force on a Current-Carrying Conductor in Magnetic Field',
    reason: 'Force on a current-carrying conductor placed in a magnetic field: F = I(L × B) (Starred in revision notes)',
    examTag: 'Important Derivation',
    chapterNum: 4
  },
  'phy-sub-4-8': {
    title: 'Force Between Two Long Parallel Current-Carrying Conductors',
    reason: 'Force between 2 long parallel current-carrying conductors & Definition of 1 Ampere (Starred in revision notes)',
    examTag: 'Important 3M Derivation',
    chapterNum: 4
  },
  'phy-sub-4-9': {
    title: 'Torque Experienced by a Current Loop in Magnetic Field',
    reason: 'Torque experienced by a current loop (V.V) (Starred in revision notes; τ = M × B = NIAB sinθ)',
    examTag: 'Important Derivation',
    chapterNum: 4
  },
  'phy-sub-4-10': {
    title: 'Moving Coil Galvanometer: Conversion to Ammeter & Voltmeter',
    reason: 'Moving coil galvanometer: radial field, conversion to ammeter (shunt S) and voltmeter (series R) (V.V, Starred in revision notes)',
    examTag: 'Important 5M Question',
    chapterNum: 4
  },

  // =========================================================================
  // CHAPTER 5: MAGNETISM AND MATTER
  // =========================================================================
  'phy-sub-5-1': {
    title: 'Diamagnetic Substances: Properties & Behavior',
    reason: 'Dia, Para, Ferro comparison table (B.D, V.V, Starred in revision notes; negative susceptibility, repulsion)',
    examTag: 'Important Comparison',
    chapterNum: 5
  },
  'phy-sub-5-2': {
    title: 'Paramagnetic Substances: Properties & Curie Law',
    reason: 'Dia, Para, Ferro comparison table (B.D, V.V, Starred in revision notes; χ ∝ 1/T)',
    examTag: 'Important Comparison',
    chapterNum: 5
  },
  'phy-sub-5-3': {
    title: 'Ferromagnetic Substances: Domain Theory',
    reason: 'Dia, Para, Ferro comparison table (B.D, V.V, Starred in revision notes; hysteresis, domains, high positive χ)',
    examTag: 'Important Comparison',
    chapterNum: 5
  },

  // =========================================================================
  // CHAPTER 6: ELECTROMAGNETIC INDUCTION
  // =========================================================================
  'phy-sub-6-2': {
    title: "Faraday's Laws of Electromagnetic Induction",
    reason: "Faraday's laws of electromagnetic induction: statement & mathematical formula ε = -dΦ/dt (Starred in revision notes)",
    examTag: 'Important Law',
    chapterNum: 6
  },
  'phy-sub-6-3': {
    title: "Lenz's Law & Conservation of Energy",
    reason: "Lenz's law statement & energy conservation justification (Starred in revision notes)",
    examTag: 'Important Principle',
    chapterNum: 6
  },
  'phy-sub-6-4': {
    title: "Fleming's Right-Hand and Left-Hand Rules",
    reason: "Fleming's right & left hand rules for induced current direction (Starred in revision notes)",
    examTag: 'Important Rule',
    chapterNum: 6
  },
  'phy-sub-6-5': {
    title: 'Motional EMF (Final Expression ε = Blv)',
    reason: 'Motional EMF final expression & mechanical-to-electrical energy conversion (Starred in revision notes)',
    examTag: 'Important Derivation',
    chapterNum: 6
  },
  'phy-sub-6-7': {
    title: 'Self and Mutual Induction: Coefficients & Units',
    reason: 'Self and mutual induction, coefficients of S.I. and M.I. (Starred in revision notes)',
    examTag: 'Important Definition',
    chapterNum: 6
  },
  'phy-sub-6-8': {
    title: 'Self-Inductance of Long Solenoid & Coaxial Mutual Inductance',
    reason: 'S.I. of long solenoid (L = μ₀n²Al) & M.I. of 2 coaxial coils (M = μ₀n₁n₂Al) (Starred in revision notes)',
    examTag: 'Important Derivation',
    chapterNum: 6
  },
  'phy-sub-6-9': {
    title: 'Energy Stored in an Inductor',
    reason: 'Energy stored in an inductor: U = 1/2 LI² & magnetic energy density B²/2μ₀ (Starred in revision notes)',
    examTag: 'Important Derivation',
    chapterNum: 6
  },
  'phy-sub-6-10': {
    title: 'AC Generator: Principle, Working & EMF Expression',
    reason: 'AC generator: principle, working, construction & induced EMF expression ε = NBAω sin(ωt) (Starred in revision notes)',
    examTag: 'Important 5M Question',
    chapterNum: 6
  },

  // =========================================================================
  // CHAPTER 7: ALTERNATING CURRENT
  // =========================================================================
  'phy-sub-7-4': {
    title: 'Series RLC / LCR Circuit & Phasor Impedance',
    reason: 'AC with resistor, inductor, capacitor: RLC / LCR circuit (Starred in revision notes; Z = √(R² + (X_L - X_C)²))',
    examTag: 'Important 5M Derivation',
    chapterNum: 7
  },
  'phy-sub-7-5': {
    title: 'The Transformer: Principle, Construction, Efficiency & Losses',
    reason: 'Transformer: principle, step-up/down derivation & 4 major energy losses (Starred in revision notes)',
    examTag: 'Important 5M Question',
    chapterNum: 7
  },
  'phy-sub-7-6': {
    title: 'Electrical Resonance in RLC Circuit',
    reason: 'Electrical resonance of RLC circuit: condition X_L = X_C, resonance frequency f_r = 1/(2π√LC) (Starred in revision notes)',
    examTag: 'Important Derivation',
    chapterNum: 7
  },
  'phy-sub-7-8': {
    title: 'Root-Mean-Square (RMS) Values of AC: Derivation of I_rms and E_rms',
    reason: 'Derivation of I_rms = I₀/√2 and E_rms = E₀/√2 via Joule heating over one complete period (Starred in revision notes)',
    examTag: 'Important Derivation',
    chapterNum: 7
  },

  // =========================================================================
  // CHAPTER 8: ELECTROMAGNETIC WAVES
  // =========================================================================
  'phy-sub-8-1': {
    title: 'The Electromagnetic Spectrum: Wavelengths & Applications',
    reason: 'Electromagnetic spectrum: order of frequencies/wavelengths, detection & applications (Starred in revision notes)',
    examTag: 'Important Question',
    chapterNum: 8
  },
  'phy-sub-8-2': {
    title: "Maxwell's 4 Equations",
    reason: "Maxwell's 4 equations in integral form: Gauss (E & B), Faraday, and Ampere-Maxwell (Starred in revision notes)",
    examTag: 'Important 4 Equations',
    chapterNum: 8
  },
  'phy-sub-8-3': {
    title: 'Displacement Current & Ampere-Maxwell Law',
    reason: 'Integral form: Maxwells displacement current (I_d = ε₀ dΦ_E/dt) and continuity across capacitor (Starred in revision notes)',
    examTag: 'Important Derivation',
    chapterNum: 8
  }
};

// Check if a subtopic is marked important from handwritten notes
export function isSubtopicImportant(subtopicId) {
  if (!subtopicId) return false;
  return Boolean(HANDWRITTEN_IMPORTANT_SUBTOPICS[subtopicId]);
}

// Get the specific reason/exam tag for an important subtopic
export function getImportantSubtopicInfo(subtopicId) {
  if (!subtopicId) return null;
  return HANDWRITTEN_IMPORTANT_SUBTOPICS[subtopicId] || null;
}
