// CBSE Class 12 Syllabus Priority & Weightage Database
// Every Chapter (44) and Subchapter (154) has a baseline 0-10 Exam Priority Rating
// Ratings are fully customizable by the user and persist in local storage.

export const DEFAULT_CHAPTER_PRIORITIES = {
  // Physics Volume 1 (Core Exam Portions 1-8)
  'phy-ch-1': 9,  // Electric Charges & Fields (Gauss's Law, Dipoles, Coulomb)
  'phy-ch-2': 9,  // Electrostatic Potential & Capacitance (Dielectrics, Capacitors)
  'phy-ch-3': 9,  // Current Electricity (Drift Velocity, Kirchhoff's Rules, Cells)
  'phy-ch-4': 8,  // Moving Charges & Magnetism (Biot-Savart, Ampere, Toroid, Galvanometer)
  'phy-ch-5': 7,  // Magnetism & Matter (Magnetic Dipole, Earth's Magnetism)
  'phy-ch-6': 10, // Electromagnetic Induction (Faraday's Laws, Lenz's Law, Motional EMF, Mutual/Self Inductance)
  'phy-ch-7': 9,  // Alternating Current (LCR Circuit, Resonance, Power Factor, Transformers)
  'phy-ch-8': 7,  // Electromagnetic Waves (Displacement Current, Spectrum Properties)

  // Physics Volume 2
  'phy-ch-9': 10, // Ray Optics & Optical Instruments (Lenses, Prism, Telescope, Microscope)
  'phy-ch-10': 9, // Wave Optics (Huygens Principle, Young's Double Slit, Diffraction)
  'phy-ch-11': 8, // Dual Nature of Radiation & Matter (Photoelectric Effect, Einstein's Equation)
  'phy-ch-12': 7, // Atoms (Bohr Model, Hydrogen Spectrum)
  'phy-ch-13': 7, // Nuclei (Binding Energy, Nuclear Fission/Fusion)
  'phy-ch-14': 8, // Semiconductor Electronics (p-n Junction, Rectifiers)

  // Chemistry Volume 1
  'chem-ch-1': 10, // Solutions (Raoult's Law, Colligative Properties, Van 't Hoff Factor)
  'chem-ch-2': 10, // Electrochemistry (Nernst Equation, Kohlrausch Law, Faraday's Laws, Batteries)
  'chem-ch-3': 9,  // Chemical Kinetics (Rate Laws, Integrated Rate Equations, Arrhenius)
  'chem-ch-4': 9,  // d- and f-Block Elements (Lanthanoid Contraction, Transition Metal Properties, KMnO4/K2Cr2O7)
  'chem-ch-5': 9,  // Coordination Compounds (Werner, VBT, CFT, Isomerism, Nomenclature)

  // Chemistry Volume 2
  'chem-ch-6': 9,  // Haloalkanes & Haloarenes (SN1/SN2 Mechanisms, Named Reactions, Organometallics)
  'chem-ch-7': 9,  // Alcohols, Phenols & Ethers (Dehydration, Reimer-Tiemann, Kolbe, Williamson Synthesis)
  'chem-ch-8': 10, // Aldehydes, Ketones & Carboxylic Acids (Aldol, Cannizzaro, Nucleophilic Addition, Acidity)
  'chem-ch-9': 8,  // Amines (Basicity, Diazonium Salts, Hoffmann Bromamide)
  'chem-ch-10': 7, // Biomolecules (Carbohydrates, Proteins, Nucleic Acids)

  // Biology
  'bio-ch-1': 9,  // Sexual Reproduction in Flowering Plants (Microsporogenesis, Megasporogenesis, Double Fertilization)
  'bio-ch-2': 10, // Human Reproduction (Gametogenesis, Menstrual Cycle, Fertilization, Embryo Development)
  'bio-ch-3': 7,  // Reproductive Health (Contraception, Assisted Reproductive Tech / ART)
  'bio-ch-4': 10, // Principles of Inheritance & Variation (Mendelian Genetics, Linkage, Chromosomal Disorders)
  'bio-ch-5': 10, // Molecular Basis of Inheritance (DNA Structure, Replication, Transcription, Translation, Lac Operon)
  'bio-ch-6': 8,  // Evolution (Darwinian Evolution, Hardy-Weinberg Principle)
  'bio-ch-7': 8,  // Human Health & Disease (Immunity, AIDS, Cancer, Drugs)
  'bio-ch-8': 7,  // Microbes in Human Welfare (Sewage Treatment, Biogas, Biocontrol)
  'bio-ch-9': 9,  // Biotechnology: Principles & Processes (rDNA Technology, Restriction Enzymes, PCR, Gel Electrophoresis)
  'bio-ch-10': 8, // Biotechnology & its Applications (Bt Cotton, Insulin, Gene Therapy)
  'bio-ch-11': 7, // Organisms & Populations (Population Attributes, Growth Models, Interactions)
  'bio-ch-12': 7, // Ecosystem (Productivity, Energy Flow, Ecological Pyramids)
  'bio-ch-13': 7, // Biodiversity & Conservation (Patterns, Loss, In-situ / Ex-situ Conservation)

  // Psychology
  'psy-ch-1': 9,  // Variations in Psychological Attributes (Theories of Intelligence, Assessment, Creativity)
  'psy-ch-2': 10, // Self & Personality (Freudian Psychodynamic Theory, Trait Theories, Self-Esteem, Assessment)
  'psy-ch-3': 8,  // Meeting Life Challenges (Stress Appraisal, Sources of Stress, Coping Mechanisms)
  'psy-ch-4': 9,  // Psychological Disorders (Anxiety, Mood Disorders, Schizophrenia, Diathesis-Stress)
  'psy-ch-5': 8,  // Therapeutic Approaches (Psychodynamic, CBT, Humanistic-Existential)
  'psy-ch-6': 7,  // Attitude & Social Cognition (Attitude Formation, Prejudice, Social Schemes)
  'psy-ch-7': 7   // Social Influence & Group Processes (Conformity, Compliance, Group Polarization)
};

// Default Subtopic Priorities (0 to 10 scale)
export const DEFAULT_SUBTOPIC_PRIORITIES = {
  // --- Physics Ch 1: Electric Charges & Fields ---
  'phy-sub-1-1': 10, // 1.1 Coulomb's Law & Vector Law
  'phy-sub-1-2': 8,  // 1.2 Electric Field & Superposition
  'phy-sub-1-3': 8,  // 1.3 Continuous Charge Distribution
  'phy-sub-1-4': 6,  // 1.4 Electric Field Lines Properties
  'phy-sub-1-5': 8,  // 1.5 Electric Flux Concept & Formulation
  'phy-sub-1-6': 9,  // 1.6 Electric Dipole & Field on Axial / Equatorial
  'phy-sub-1-7': 9,  // 1.7 Torque on a Dipole in Uniform Field
  'phy-sub-1-8': 8,  // 1.8 Potential Energy of Dipole in Field
  'phy-sub-1-9': 10, // 1.9 Gauss's Law Statement & Proof
  'phy-sub-1-10': 10,// 1.10 Application: Infinitely Long Straight Wire
  'phy-sub-1-11': 10,// 1.11 Application: Uniformly Charged Infinite Plane Sheet

  // --- Physics Ch 2: Electrostatic Potential & Capacitance ---
  'phy-sub-2-1': 8,  // 2.1 Electrostatic Potential & Potential Energy
  'phy-sub-2-2': 9,  // 2.2 Potential Due to a Point Charge & System
  'phy-sub-2-3': 9,  // 2.3 Potential Due to an Electric Dipole
  'phy-sub-2-4': 8,  // 2.4 Equipotential Surfaces & Field Gradient
  'phy-sub-2-5': 7,  // 2.5 Conductors in Electrostatic Fields & Shielding
  'phy-sub-2-6': 9,  // 2.6 Dielectrics & Polarisation
  'phy-sub-2-7': 10, // 2.7 Capacitors & Capacitance (Parallel Plate Formula)
  'phy-sub-2-8': 10, // 2.8 Energy Stored in a Capacitor & Dielectric Insertion

  // --- Physics Ch 3: Current Electricity ---
  'phy-sub-3-1': 7,  // 3.1 Electric Current & Current Density
  'phy-sub-3-2': 8,  // 3.2 Ohm's Law & Resistance Factors
  'phy-sub-3-3': 7,  // 3.3 Electrical Resistivity and Conductivity
  'phy-sub-3-4': 8,  // 3.4 Temperature Dependence of Resistivity
  'phy-sub-3-5': 10, // 3.5 Drift Velocity, Relaxation Time & Mobility
  'phy-sub-3-6': 8,  // 3.6 Electrical Energy and Power
  'phy-sub-3-7': 9,  // 3.7 Cells, EMF, Internal Resistance
  'phy-sub-3-8': 9,  // 3.8 Combination of Cells: Series & Parallel
  'phy-sub-3-9': 10, // 3.9 Kirchhoff's Laws & Wheatstone Bridge

  // --- Physics Ch 4: Moving Charges & Magnetism ---
  'phy-sub-4-1': 8,  // 4.1 Magnetic Force on Moving Charge (Lorentz Force)
  'phy-sub-4-2': 9,  // 4.2 Motion of Charged Particle in Magnetic Field
  'phy-sub-4-3': 8,  // 4.3 Magnetic Force on Current-Carrying Conductor
  'phy-sub-4-4': 10, // 4.4 Biot-Savart Law & Vector Formulation
  'phy-sub-4-5': 10, // 4.5 Magnetic Field on Axis of Circular Current Loop
  'phy-sub-4-6': 9,  // 4.6 Ampere's Circuital Law
  'phy-sub-4-7': 8,  // 4.7 Solenoid and Toroid Field
  'phy-sub-4-8': 9,  // 4.8 Force Between Two Parallel Current-Carrying Wires
  'phy-sub-4-9': 9,  // 4.9 Torque on Current Loop (Magnetic Dipole Moment)
  'phy-sub-4-10': 9, // 4.10 Moving Coil Galvanometer & Conversion

  // --- Physics Ch 5: Magnetism & Matter ---
  'phy-sub-5-1': 7,  // 5.1 The Bar Magnet as an Equivalent Solenoid
  'phy-sub-5-2': 8,  // 5.2 Magnetism and Gauss's Law
  'phy-sub-5-3': 7,  // 5.3 Magnetic Properties of Materials

  // --- Physics Ch 6: Electromagnetic Induction ---
  'phy-sub-6-1': 8,  // 6.1 Magnetic Flux (Definition & Units)
  'phy-sub-6-2': 10, // 6.2 Faraday's Laws of Induction & Formulation
  'phy-sub-6-3': 10, // 6.3 Lenz's Law & Conservation of Energy
  'phy-sub-6-4': 7,  // 6.4 Eddy Currents & Applications
  'phy-sub-6-5': 9,  // 6.5 Motional EMF in Straight Rod
  'phy-sub-6-6': 8,  // 6.6 Motional EMF in Rotating Rod
  'phy-sub-6-7': 9,  // 6.7 Self-Inductance & Inductors
  'phy-sub-6-8': 9,  // 6.8 Mutual Inductance
  'phy-sub-6-9': 8,  // 6.9 Energy Stored in an Inductor
  'phy-sub-6-10': 10,// 6.10 AC Generator Principle & Working

  // --- Physics Ch 7: Alternating Current ---
  'phy-sub-7-1': 7,  // 7.1 AC Voltage Applied to a Resistor
  'phy-sub-7-2': 8,  // 7.2 Representation of AC by Phasors
  'phy-sub-7-3': 8,  // 7.3 AC Voltage Applied to an Inductor
  'phy-sub-7-4': 8,  // 7.4 AC Voltage Applied to a Capacitor
  'phy-sub-7-5': 10, // 7.5 Series LCR Circuit & Impedance
  'phy-sub-7-6': 10, // 7.6 Resonance in LCR Circuits (Q-Factor)
  'phy-sub-7-7': 8,  // 7.7 Power in AC Circuit & Power Factor
  'phy-sub-7-8': 10, // 7.8 Transformers Principle, Efficiency & Losses

  // --- Physics Ch 8: Electromagnetic Waves ---
  'phy-sub-8-1': 8,  // 8.1 Displacement Current & Maxwell-Ampere Law
  'phy-sub-8-2': 7,  // 8.2 Electromagnetic Waves Sources & Properties
  'phy-sub-8-3': 8,  // 8.3 Electromagnetic Spectrum Breakdown
  'phy-sub-8-4': 7,  // 8.4 Applications of EM Wave Bands

  // --- Chemistry Ch 1: Solutions ---
  'chem-sub-1-1': 8,  // 1.1 Types of Solutions & Concentration Units (Molarity vs Molality)
  'chem-sub-1-2': 7,  // 1.2 Solubility of Solids in Liquids
  'chem-sub-1-3': 9,  // 1.3 Solubility of Gases & Henry's Law
  'chem-sub-1-4': 10, // 1.4 Vapour Pressure & Raoult's Law (Volatile Solutes)
  'chem-sub-1-5': 10, // 1.5 Ideal and Non-Ideal Solutions (Deviations & Azeotropes)
  'chem-sub-1-6': 9,  // 1.6 Relative Lowering of Vapour Pressure
  'chem-sub-1-7': 10, // 1.7 Elevation of Boiling Point (Kb Formula)
  'chem-sub-1-8': 10, // 1.8 Depression of Freezing Point (Kf Formula)
  'chem-sub-1-9': 9,  // 1.9 Osmosis and Osmotic Pressure (Isotonic, Hypo, Hyper)
  'chem-sub-1-10': 8, // 1.10 Reverse Osmosis & Water Purification
  'chem-sub-1-11': 9, // 1.11 Abnormal Molar Masses & Van 't Hoff Factor
  'chem-sub-1-12': 10,// 1.12 Degree of Association & Dissociation (α)

  // --- Chemistry Ch 2: Electrochemistry ---
  'chem-sub-2-1': 8,  // 2.1 Electrochemical Cells & Daniell Cell
  'chem-sub-2-2': 9,  // 2.2 Galvanic Cells & Standard Electrode Potential
  'chem-sub-2-3': 10, // 2.3 Nernst Equation & Cell EMF
  'chem-sub-2-4': 9,  // 2.4 Equilibrium Constant & Gibbs Free Energy from Cell Potential
  'chem-sub-2-5': 8,  // 2.5 Conductance of Electrolytic Solutions
  'chem-sub-2-6': 10, // 2.6 Kohlrausch's Law of Independent Migration of Ions
  'chem-sub-2-7': 10, // 2.7 Faraday's Laws of Electrolysis
  'chem-sub-2-8': 8,  // 2.8 Commercial Batteries: Primary Cells
  'chem-sub-2-9': 9,  // 2.9 Secondary Batteries (Lead Storage Cell)
  'chem-sub-2-10': 9, // 2.10 Fuel Cells (H2-O2 Cell)
  'chem-sub-2-11': 8, // 2.11 Corrosion & Prevention (Rusting of Iron)

  // --- Chemistry Ch 4: The d- and f-Block Elements ---
  'chem-sub-4-1': 8,  // 4.1 Position and Electronic Configuration of Transition Elements
  'chem-sub-4-2': 9,  // 4.2 General Properties: Metallic Character & Enthalpy of Atomisation
  'chem-sub-4-3': 9,  // 4.3 Atomic and Ionic Radii & Densities
  'chem-sub-4-4': 9,  // 4.4 Ionisation Enthalpies and Variable Oxidation States
  'chem-sub-4-5': 10, // 4.5 Lanthanoid Contraction (Causes & Consequences)
  'chem-sub-4-6': 9,  // 4.6 Standard Electrode Potentials (E° Trends)
  'chem-sub-4-7': 10, // 4.7 Important Compounds: Potassium Permanganate (KMnO4) & Dichromate (K2Cr2O7)

  // --- Chemistry Ch 6: Haloalkanes and Haloarenes ---
  'chem-sub-6-1': 7,  // 6.1 Classification of Haloalkanes and Haloarenes
  'chem-sub-6-2': 6,  // 6.2 IUPAC Nomenclature of Halogen Derivatives
  'chem-sub-6-3': 7,  // 6.3 Nature of C—X Bond
  'chem-sub-6-4': 8,  // 6.4 Methods of Preparation of Haloalkanes
  'chem-sub-6-5': 10, // 6.5 Nucleophilic Substitution Mechanisms: SN1 vs SN2
  'chem-sub-6-6': 9,  // 6.6 Elimination Reactions (Saytzeff's Rule)
  'chem-sub-6-7': 9,  // 6.7 Reaction with Metals: Grignard Reagent & Wurtz Reaction
  'chem-sub-6-8': 8,  // 6.8 Polyhalogen Compounds & Environmental Impacts

  // --- Chemistry Ch 7: Alcohols, Phenols and Ethers ---
  'chem-sub-7-1': 7,  // 7.1 Classification and Nomenclature
  'chem-sub-7-2': 8,  // 7.2 Methods of Preparation of Alcohols
  'chem-sub-7-3': 9,  // 7.3 Reactions of Alcohols: Lucas Test & Acidic Character
  'chem-sub-7-4': 10, // 7.4 Preparation & Reactions of Phenols: Kolbe & Reimer-Tiemann
  'chem-sub-7-5': 9,  // 7.5 Dehydration of Alcohols (Temperature Controlled Mechanism)
  'chem-sub-7-6': 9,  // 7.6 Preparation of Ethers: Williamson Synthesis
  'chem-sub-7-7': 8,  // 7.7 Cleavage of C—O Bond in Ethers with HI

  // --- Biology Ch 1: Sexual Reproduction in Flowering Plants ---
  'bio-sub-1-1': 9,  // 1.1 Flower Structure & Pre-fertilization Events
  'bio-sub-1-2': 10, // 1.2 Microsporogenesis & Pollen Grain Development
  'bio-sub-1-3': 10, // 1.3 Megasporogenesis & Embryo Sac Structure
  'bio-sub-1-4': 10, // 1.4 Double Fertilization, Endosperm & Seed Development

  // --- Biology Ch 2: Human Reproduction ---
  'bio-sub-2-1': 9,  // 2.1 Male Reproductive System Anatomy
  'bio-sub-2-2': 9,  // 2.2 Female Reproductive System Anatomy
  'bio-sub-2-3': 10, // 2.3 Gametogenesis: Spermatogenesis vs Oogenesis
  'bio-sub-2-4': 10, // 2.4 Menstrual Cycle, Hormonal Regulation & Pregnancy

  // --- Biology Ch 3: Reproductive Health ---
  'bio-sub-3-1': 7,  // 3.1 Population Explosion, Birth Control & Contraception
  'bio-sub-3-2': 8,  // 3.2 Infertility & Assisted Reproductive Technologies (ART)

  // --- Biology Ch 4: Principles of Inheritance and Variation ---
  'bio-sub-4-1': 10, // 4.1 Mendel's Laws of Inheritance (Monohybrid & Dihybrid)
  'bio-sub-4-2': 9,  // 4.2 Incomplete Dominance, Codominance & Multiple Alleles
  'bio-sub-4-3': 10, // 4.3 Sex Determination & Genetic Disorders (Pedigree Analysis)

  // --- Biology Ch 5: Molecular Basis of Inheritance ---
  'bio-sub-5-1': 10, // 5.1 DNA Structure, Double Helix & Packaging of DNA
  'bio-sub-5-2': 10, // 5.2 DNA Replication (Meselson-Stahl Experiment & Mechanism)
  'bio-sub-5-3': 10, // 5.3 Transcription, Genetic Code & Translation
  'bio-sub-5-4': 10, // 5.4 Regulation of Gene Expression (Lac Operon) & DNA Fingerprinting

  // --- Biology Ch 6: Evolution ---
  'bio-sub-6-1': 7,  // 6.1 Origin of Life & Evidences of Evolution
  'bio-sub-6-2': 8,  // 6.2 Adaptive Radiation & Darwinian Selection
  'bio-sub-6-3': 9,  // 6.3 Hardy-Weinberg Principle & Speciation

  // --- Psychology Ch 1: Variations in Psychological Attributes ---
  'psy-sub-1-1': 8,  // 1.1 Individual Differences in Human Functioning
  'psy-sub-1-2': 8,  // 1.2 Assessment of Psychological Attributes
  'psy-sub-1-3': 10, // 1.3 Theories of Intelligence: Psychometric & Information Processing
  'psy-sub-1-4': 9,  // 1.4 Theory of Multiple Intelligences (Howard Gardner)
  'psy-sub-1-5': 9,  // 1.5 Triarchic Theory of Intelligence (Robert Sternberg)
  'psy-sub-1-6': 9,  // 1.6 PASS Model of Intelligence
  'psy-sub-1-7': 8,  // 1.7 Heredity and Environment in Intelligence
  'psy-sub-1-8': 7,  // 1.8 Assessment of Intelligence & Psychological Tests
  'psy-sub-1-9': 8,  // 1.9 Aptitude, Interest and Creativity

  // --- Psychology Ch 2: Self and Personality ---
  'psy-sub-2-1': 9,  // 2.1 Concept of Self: Self-Esteem, Self-Efficacy & Self-Regulation
  'psy-sub-2-2': 9,  // 2.2 Concept of Personality & Major Approaches
  'psy-sub-2-3': 8,  // 2.3 Type Approaches to Personality (Hippocrates, Sheldon, Jung, Friedman)
  'psy-sub-2-4': 9,  // 2.4 Trait Approaches (Allport, Cattell 16PF, Eysenck)
  'psy-sub-2-5': 10, // 2.5 Psychodynamic Approach (Freud: Id, Ego, Superego & Defense Mechanisms)
  'psy-sub-2-6': 9,  // 2.6 Post-Freudian Approaches (Adler, Jung, Horney, Erikson)
  'psy-sub-2-7': 8,  // 2.7 Behavioural and Cultural Approaches to Personality
  'psy-sub-2-8': 9,  // 2.8 Humanistic Approach (Carl Rogers & Abraham Maslow)
  'psy-sub-2-9': 8,  // 2.9 Assessment of Personality: Self-Report Measures
  'psy-sub-2-10': 9, // 2.10 Projective Techniques (Rorschach, TAT, Sentence Completion)

  // --- Psychology Ch 3: Meeting Life Challenges ---
  'psy-sub-3-1': 9,  // 3.1 Nature and Sources of Stress (Lazarus Cognitive Appraisal)
  'psy-sub-3-2': 8,  // 3.2 Signs and Symptoms of Stress
  'psy-sub-3-3': 8,  // 3.3 General Adaptation Syndrome (Hans Selye's GAS Model)
  'psy-sub-3-4': 8,  // 3.4 Stress and the Immune System
  'psy-sub-3-5': 10, // 3.5 Coping with Stress: Task-Oriented, Emotion-Focused, Avoidance
  'psy-sub-3-6': 8,  // 3.6 Stress Management Techniques
  'psy-sub-3-7': 8   // 3.7 Promoting Positive Health and Well-being
};

/**
 * Returns default rating for a given chapter or subchapter id
 */
export function getDefaultPriority(id) {
  if (DEFAULT_SUBTOPIC_PRIORITIES[id] !== undefined) {
    return DEFAULT_SUBTOPIC_PRIORITIES[id];
  }
  if (DEFAULT_CHAPTER_PRIORITIES[id] !== undefined) {
    return DEFAULT_CHAPTER_PRIORITIES[id];
  }
  return 7; // Safe default for unrated syllabus elements
}

/**
 * Resolves priority tier styling and metadata for any 0 to 10 rating
 */
export function getPriorityTierInfo(rating) {
  const score = Math.max(0, Math.min(10, Math.round(Number(rating) || 0)));

  if (score >= 9) {
    return {
      score,
      tier: 'CRITICAL',
      label: 'Must Study',
      description: 'Crucial Board Weightage (High Yield)',
      badgeClass: 'bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/30',
      tagColor: '#ef4444',
      flameIcon: true,
      starRating: '★★★★★'
    };
  }

  if (score >= 7) {
    return {
      score,
      tier: 'HIGH',
      label: 'High Priority',
      description: 'Frequently Asked in Board Exams',
      badgeClass: 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30',
      tagColor: '#f59e0b',
      flameIcon: true,
      starRating: '★★★★☆'
    };
  }

  if (score >= 5) {
    return {
      score,
      tier: 'MEDIUM',
      label: 'Core Concept',
      description: 'Foundational Syllabus Topic',
      badgeClass: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
      tagColor: '#10b981',
      flameIcon: false,
      starRating: '★★★☆☆'
    };
  }

  if (score >= 1) {
    return {
      score,
      tier: 'LOW',
      label: 'Foundation',
      description: 'Supplementary & Background Knowledge',
      badgeClass: 'bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30',
      tagColor: '#3b82f6',
      flameIcon: false,
      starRating: '★★☆☆☆'
    };
  }

  return {
    score: 0,
    tier: 'NONE',
    label: 'Optional',
    description: 'Non-evaluated or low-priority background',
    badgeClass: 'bg-neutral-500/10 text-neutral-500 border-neutral-500/20',
    tagColor: '#6b7280',
    flameIcon: false,
    starRating: '☆☆☆☆☆'
  };
}
