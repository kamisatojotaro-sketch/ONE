// CBSE Class 12 Syllabus Priority & Weightage Database
// Every Chapter (44) and Subchapter (154) has a baseline 0-10 Exam Priority Rating
// Ratings are fully customizable by the user and persist in local storage.

export const DEFAULT_CHAPTER_PRIORITIES = {
  // Physics Volume 1 (Total: 35 Marks)
  'phy-ch-1': 6,  // Electric Charges & Fields (~5-6 marks in board)
  'phy-ch-2': 6,  // Electrostatic Potential & Capacitance (~5-6 marks in board)
  'phy-ch-3': 7,  // Current Electricity (Kirchhoff's Rules, Drift Velocity, Cells ~7 marks)
  'phy-ch-4': 7,  // Moving Charges & Magnetism (Biot-Savart, Ampere, Galvanometer ~6 marks)
  'phy-ch-5': 3,  // Magnetism & Matter (Minor qualitative chapter, ~2-3 marks)
  'phy-ch-6': 6,  // Electromagnetic Induction (Faraday's Laws, Lenz's Law, Motional EMF ~4-5 marks)
  'phy-ch-7': 7,  // Alternating Current (LCR Circuit, Resonance, Transformers ~5 marks)
  'phy-ch-8': 2,  // Electromagnetic Waves (Minor qualitative chapter, ~2-3 marks)

  // Physics Volume 2 (Total: 35 Marks)
  'phy-ch-9': 10, // Ray Optics & Optical Instruments (Highest weightage in Physics: ~9-10 marks!)
  'phy-ch-10': 8, // Wave Optics (Huygens Principle, YDSE Fringe Width, Diffraction ~7-8 marks)
  'phy-ch-11': 5, // Dual Nature of Radiation & Matter (~5 marks)
  'phy-ch-12': 4, // Atoms (Bohr Model, Spectral Lines ~3-4 marks)
  'phy-ch-13': 3, // Nuclei (Binding Energy, Fission/Fusion ~3 marks)
  'phy-ch-14': 7, // Semiconductor Electronics (p-n Junction, Rectifier ~7 marks)

  // Chemistry Volume 1 (Total: 35 Marks)
  'chem-ch-1': 7, // Solutions (Colligative Properties, Van 't Hoff Factor ~7 marks)
  'chem-ch-2': 9, // Electrochemistry (Highest Physical Chemistry Chapter: ~9 marks!)
  'chem-ch-3': 7, // Chemical Kinetics (Rate Laws, Arrhenius Equation ~7 marks)
  'chem-ch-4': 7, // d- and f-Block Elements (Lanthanoid Contraction, KMnO4/K2Cr2O7 ~7 marks)
  'chem-ch-5': 7, // Coordination Compounds (IUPAC, VBT, CFT, Isomerism ~7 marks)

  // Chemistry Volume 2 (Total: 35 Marks)
  'chem-ch-6': 6, // Haloalkanes & Haloarenes (SN1/SN2 Mechanisms, Grignard ~6 marks)
  'chem-ch-7': 6, // Alcohols, Phenols & Ethers (Named Reactions, Williamson, Acidity ~6 marks)
  'chem-ch-8': 10,// Aldehydes, Ketones & Carboxylic Acids (King of Organic: ~8-9 marks!)
  'chem-ch-9': 6, // Amines (Basicity, Diazonium Salts, Hoffmann Bromamide ~6 marks)
  'chem-ch-10': 5,// Biomolecules (Carbohydrates, Proteins, Nucleic Acids ~7 marks)

  // Biology (Total: 70 Marks)
  'bio-ch-1': 6,  // Sexual Reproduction in Flowering Plants (~6 marks)
  'bio-ch-2': 7,  // Human Reproduction (Gametogenesis, Menstrual Cycle ~7 marks)
  'bio-ch-3': 3,  // Reproductive Health (Minor Chapter: ~3 marks)
  'bio-ch-4': 9,  // Principles of Inheritance & Variation (Mendelian Genetics, Linkage ~9 marks)
  'bio-ch-5': 10, // Molecular Basis of Inheritance (Highest weightage in Biology: ~10 marks!)
  'bio-ch-6': 4,  // Evolution (Hardy-Weinberg, Darwinism ~3-4 marks)
  'bio-ch-7': 7,  // Human Health & Disease (Immunity, AIDS, Cancer ~7-8 marks)
  'bio-ch-8': 3,  // Microbes in Human Welfare (STP, Biogas ~3 marks)
  'bio-ch-9': 8,  // Biotechnology: Principles & Processes (rDNA, PCR, Restriction Enzymes ~8 marks)
  'bio-ch-10': 6, // Biotechnology & its Applications (Bt Cotton, Insulin, Gene Therapy ~5-6 marks)
  'bio-ch-11': 4, // Organisms & Populations (Growth Models, Interactions ~3-4 marks)
  'bio-ch-12': 3, // Ecosystem (Productivity, Pyramids, Energy Flow ~3 marks)
  'bio-ch-13': 3, // Biodiversity & Conservation (Loss Patterns, In-situ/Ex-situ ~3 marks)

  // Psychology (Total: 70 Marks)
  'psy-ch-1': 9,  // Variations in Psychological Attributes (Theories of Intelligence ~13 marks!)
  'psy-ch-2': 10, // Self & Personality (Freud, Trait Theories, Assessment ~13 marks!)
  'psy-ch-3': 6,  // Meeting Life Challenges (Stress Appraisal, GAS Model ~9 marks)
  'psy-ch-4': 9,  // Psychological Disorders (Schizophrenia, Anxiety, Mood ~12 marks!)
  'psy-ch-5': 6,  // Therapeutic Approaches (CBT, Psychodynamic, Humanistic ~9 marks)
  'psy-ch-6': 5,  // Attitude & Social Cognition (Attitude Change, Prejudice ~8 marks)
  'psy-ch-7': 3,  // Social Influence & Group Processes (Smallest Chapter: ~6 marks)

  // English Core (Total: 80 Marks)
  'eng-ch-1': 9,  // The Last Lesson (High-yield Opening Prose, Linguistic Chauvinism)
  'eng-ch-2': 8,  // Lost Spring (Stories of Stolen Childhood, Saheb & Mukesh)
  'eng-ch-3': 8,  // Deep Water (William Douglas, Overcoming Phobia)
  'eng-ch-4': 9,  // The Rattrap (Metaphor & Edla's Compassion)
  'eng-ch-5': 9,  // Indigo (Champaran Movement & Gandhi's Civil Disobedience)
  'eng-ch-6': 8,  // My Mother at Sixty-Six (Poetic Devices & Aging)
  'eng-ch-7': 8,  // Keeping Quiet (Pablo Neruda, Universal Stillness)
  'eng-ch-8': 10, // A Thing of Beauty (John Keats, Endymion, 7 Beauties & 7 Sufferings)
  'eng-ch-9': 8,  // The Third Level (Jack Finney, Psychological Escapism & 1894 Galesburg)
  'eng-ch-10': 9, // The Tiger King (Kalki, Satire on Power & 100th Tiger Prophecy)
  'eng-ch-11': 8, // Journey to the End of the Earth (Tishani Doshi, Antarctica & Phytoplankton)
  'eng-ch-12': 9, // Unseen Passages (Section A: 22 Marks Reading Comprehension)
  'eng-ch-13': 8, // Notice Writing (Section B: 4 Marks Short Writing Task)
  'eng-ch-14': 8, // Invitations and Replies (Section B: 4 Marks Short Writing Task)
  'eng-ch-15': 9, // Letter to the Editor (Section B: 5 Marks Long Writing Task)
  'eng-ch-16': 9  // Job Application with Bio-Data (Section B: 5 Marks Long Writing Task)
};

// Calibrated Granular Subtopic Priorities (0 to 10 scale)
export const DEFAULT_SUBTOPIC_PRIORITIES = {
  // --- Physics Ch 1: Electric Charges & Fields ---
  'phy-sub-1-1': 7, // 1.1 Coulomb's Law & Vector Form (Standard numericals)
  'phy-sub-1-2': 5, // 1.2 Electric Field & Superposition (Point charge formula)
  'phy-sub-1-3': 3, // 1.3 Continuous Charge Distribution (Linear, surface, volume definition)
  'phy-sub-1-4': 4, // 1.4 Electric Field Lines Properties (Qualitative give-reason)
  'phy-sub-1-5': 6, // 1.5 Electric Flux Concept & Formulation (Flux through closed surfaces)
  'phy-sub-1-6': 8, // 1.6 Electric Dipole & Field on Axial / Equatorial (Standard derivations)
  'phy-sub-1-7': 6, // 1.7 Torque on a Dipole in Uniform Field (Torque formula & equilibrium)
  'phy-sub-1-8': 5, // 1.8 Potential Energy of Dipole in Field (Work done & potential energy)
  'phy-sub-1-9': 9, // 1.9 Gauss's Law Statement & Proof (High-yield board proof)
  'phy-sub-1-10': 8,// 1.10 Application: Infinitely Long Straight Wire (Cylindrical surface derivation)
  'phy-sub-1-11': 8,// 1.11 Application: Uniformly Charged Infinite Plane Sheet (E = σ/2ε₀ derivation)

  // --- Physics Ch 2: Electrostatic Potential & Capacitance ---
  'phy-sub-2-1': 4, // 2.1 Electrostatic Potential & Potential Energy (Basic definitions)
  'phy-sub-2-2': 5, // 2.2 Potential Due to a Point Charge & System (V = kq/r formula)
  'phy-sub-2-3': 6, // 2.3 Potential Due to an Electric Dipole (Axial/equatorial derivation)
  'phy-sub-2-4': 5, // 2.4 Equipotential Surfaces & Field Gradient (E = -dV/dr relations)
  'phy-sub-2-5': 4, // 2.5 Conductors in Electrostatic Fields & Shielding (Electrostatic shielding)
  'phy-sub-2-6': 6, // 2.6 Dielectrics & Polarisation (Bound charge & dielectric constant)
  'phy-sub-2-7': 9, // 2.7 Capacitors & Capacitance (Parallel plate with dielectric slab)
  'phy-sub-2-8': 8, // 2.8 Energy Stored in Capacitor & Dielectric Insertion (U = 1/2 CV² & battery cases)

  // --- Physics Ch 3: Current Electricity ---
  'phy-sub-3-1': 3, // 3.1 Electric Current & Current Density (Basic definitions)
  'phy-sub-3-2': 4, // 3.2 Ohm's Law & Resistance Factors (V = IR & geometric factors)
  'phy-sub-3-3': 4, // 3.3 Electrical Resistivity and Conductivity (Resistivity definitions)
  'phy-sub-3-4': 5, // 3.4 Temperature Dependence of Resistivity (α formula & graphs)
  'phy-sub-3-5': 9, // 3.5 Drift Velocity, Relaxation Time & Mobility (Deduction of Ohm's Law: I = neAv_d)
  'phy-sub-3-6': 4, // 3.6 Electrical Energy and Power (P = VI & Joule heating)
  'phy-sub-3-7': 6, // 3.7 Cells, EMF, Internal Resistance (V = E - Ir terminal voltage)
  'phy-sub-3-8': 7, // 3.8 Combination of Cells: Series & Parallel (Equivalent EMF derivation)
  'phy-sub-3-9': 9, // 3.9 Kirchhoff's Laws & Wheatstone Bridge (Guaranteed numerical & bridge balance)

  // --- Physics Ch 4: Moving Charges & Magnetism ---
  'phy-sub-4-1': 5, // 4.1 Magnetic Force on Moving Charge (Lorentz Force F = q(v×B))
  'phy-sub-4-2': 6, // 4.2 Motion of Charged Particle in Magnetic Field (Radius & pitch of helix)
  'phy-sub-4-3': 5, // 4.3 Magnetic Force on Current-Carrying Conductor (F = I(l×B))
  'phy-sub-4-4': 8, // 4.4 Biot-Savart Law & Vector Formulation (Statement & vector formula)
  'phy-sub-4-5': 9, // 4.5 Magnetic Field on Axis of Circular Current Loop (Major 5-mark derivation)
  'phy-sub-4-6': 6, // 4.6 Ampere's Circuital Law (Line integral of magnetic field)
  'phy-sub-4-7': 6, // 4.7 Solenoid and Toroid Field (B = μ₀nI derivation)
  'phy-sub-4-8': 8, // 4.8 Force Between Two Parallel Current-Carrying Wires (Definition of 1 Ampere)
  'phy-sub-4-9': 5, // 4.9 Torque on Current Loop (Magnetic Dipole Moment τ = M×B)
  'phy-sub-4-10': 8,// 4.10 Moving Coil Galvanometer & Conversion (Conversion to Ammeter & Voltmeter)

  // --- Physics Ch 5: Magnetism & Matter ---
  'phy-sub-5-1': 4, // 5.1 The Bar Magnet as an Equivalent Solenoid (Magnetic moment)
  'phy-sub-5-2': 3, // 5.2 Magnetism and Gauss's Law (Monopoles non-existence)
  'phy-sub-5-3': 4, // 5.3 Magnetic Properties of Materials (Dia, Para, Ferro comparison table)

  // --- Physics Ch 6: Electromagnetic Induction ---
  'phy-sub-6-1': 3, // 6.1 Magnetic Flux (Definition & Units)
  'phy-sub-6-2': 9, // 6.2 Faraday's Laws of Induction & Formulation (Induced EMF formula)
  'phy-sub-6-3': 8, // 6.3 Lenz's Law & Conservation of Energy (Direction & energy justification)
  'phy-sub-6-4': 3, // 6.4 Eddy Currents & Applications (Damping & induction furnace)
  'phy-sub-6-5': 7, // 6.5 Motional EMF in Straight Rod (ε = Blv & power dissipated)
  'phy-sub-6-6': 5, // 6.6 Motional EMF in Rotating Rod (ε = 1/2 Bωl²)
  'phy-sub-6-7': 7, // 6.7 Self-Inductance & Inductors (Self-inductance of solenoid)
  'phy-sub-6-8': 7, // 6.8 Mutual Inductance (Mutual inductance of coaxial solenoids)
  'phy-sub-6-9': 4, // 6.9 Energy Stored in an Inductor (U = 1/2 LI²)
  'phy-sub-6-10': 8,// 6.10 AC Generator Principle & Working (Working diagram & induced EMF)

  // --- Physics Ch 7: Alternating Current ---
  'phy-sub-7-1': 3, // 7.1 AC Voltage Applied to a Resistor (RMS derivation)
  'phy-sub-7-2': 4, // 7.2 Representation of AC by Phasors (Phasor diagram basics)
  'phy-sub-7-3': 5, // 7.3 AC Voltage Applied to an Inductor (Inductive reactance X_L)
  'phy-sub-7-4': 5, // 7.4 AC Voltage Applied to a Capacitor (Capacitive reactance X_C)
  'phy-sub-7-5': 9, // 7.5 Series LCR Circuit & Impedance (Major 5-mark derivation & impedance triangle)
  'phy-sub-7-6': 8, // 7.6 Resonance in LCR Circuits (Resonance frequency & Q-factor)
  'phy-sub-7-7': 6, // 7.7 Power in AC Circuit & Power Factor (Wattless current & cos φ)
  'phy-sub-7-8': 8, // 7.8 Transformers Principle, Efficiency & Losses (Working & 4 major losses)

  // --- Physics Ch 8: Electromagnetic Waves ---
  'phy-sub-8-1': 4, // 8.1 Displacement Current & Maxwell-Ampere Law (Inconsistency resolution)
  'phy-sub-8-2': 3, // 8.2 Electromagnetic Waves Sources & Properties (Transverse nature & c = E/B)
  'phy-sub-8-3': 5, // 8.3 Electromagnetic Spectrum Breakdown (Wavelength/frequency order)
  'phy-sub-8-4': 4, // 8.4 Applications of EM Wave Bands (Microwaves, UV, X-ray uses)

  // --- Chemistry Ch 1: Solutions ---
  'chem-sub-1-1': 4,  // 1.1 Types of Solutions & Concentration Units (Molarity vs Molality)
  'chem-sub-1-2': 3,  // 1.2 Solubility of Solids in Liquids (Temperature & Le Chatelier)
  'chem-sub-1-3': 6,  // 1.3 Solubility of Gases & Henry's Law (K_H constant & applications)
  'chem-sub-1-4': 8,  // 1.4 Ideal and Non-Ideal Solutions (5-point distinction table & criteria)
  'chem-sub-1-5': 8,  // 1.5 Positive and Negative Deviations from Raoult's Law (Acetone+Chloroform)
  'chem-sub-1-6': 5,  // 1.6 Azeotropes: Minimum & Maximum Boiling (Constant boiling mixtures)
  'chem-sub-1-7': 6,  // 1.7 Relative Lowering of Vapour Pressure (Raoult's Law numericals)
  'chem-sub-1-8': 7,  // 1.8 Elevation of Boiling Point (K_b molal elevation constant)
  'chem-sub-1-9': 8,  // 1.9 Depression of Freezing Point (K_f formula & antifreeze numericals)
  'chem-sub-1-10': 7, // 1.10 Osmosis and Osmotic Pressure (Isotonic solutions & polymer molar mass)
  'chem-sub-1-11': 4, // 1.11 Reverse Osmosis & Water Purification (Desalination & cellulose acetate)
  'chem-sub-1-12': 9, // 1.12 Van 't Hoff Factor & Abnormal Molar Masses (i factor & dissociation α)

  // --- Chemistry Ch 2: Electrochemistry ---
  'chem-sub-2-1': 5,  // 2.1 Electrochemical Cells & Daniell Cell (Salt bridge function)
  'chem-sub-2-2': 6,  // 2.2 Galvanic Cells & Standard Electrode Potential (SHE & EMF of cell)
  'chem-sub-2-3': 10, // 2.3 Nernst Equation & Cell EMF (Guaranteed high-weightage numerical)
  'chem-sub-2-4': 7,  // 2.4 Equilibrium Constant & Gibbs Free Energy (ΔG° = -nFE° formula)
  'chem-sub-2-5': 5,  // 2.5 Conductance of Electrolytic Solutions (Conductivity & molar conductivity)
  'chem-sub-2-6': 9,  // 2.6 Kohlrausch's Law of Independent Migration (Weak electrolyte calculations)
  'chem-sub-2-7': 7,  // 2.7 Faraday's Laws of Electrolysis (w = ZIt quantitative numericals)
  'chem-sub-2-8': 4,  // 2.8 Commercial Batteries: Primary Cells (Dry cell & mercury cell)
  'chem-sub-2-9': 7,  // 2.9 Secondary Batteries: Lead Storage Cell (Discharging/charging reactions)
  'chem-sub-2-10': 6, // 2.10 Fuel Cells (H2-O2 cell reactions & advantages)
  'chem-sub-2-11': 4, // 2.11 Corrosion & Prevention (Rusting electrochemical mechanism)

  // --- Chemistry Ch 4: The d- and f-Block Elements ---
  'chem-sub-4-1': 4,  // 4.1 Position and Electronic Configuration (Cr & Cu exceptions)
  'chem-sub-4-2': 5,  // 4.2 General Properties: Metallic Character & Enthalpy of Atomisation
  'chem-sub-4-3': 5,  // 4.3 Atomic and Ionic Radii & Densities (Trends across 3d series)
  'chem-sub-4-4': 7,  // 4.4 Ionisation Enthalpies & Variable Oxidation States (Transition valency)
  'chem-sub-4-5': 9,  // 4.5 Lanthanoid Contraction: Causes & Consequences (Crucial 3-marker)
  'chem-sub-4-6': 6,  // 4.6 Standard Electrode Potentials (E° trends of Cu²⁺/Cu)
  'chem-sub-4-7': 8,  // 4.7 Important Compounds: KMnO4 & K2Cr2O7 (Preparation & redox equations)

  // --- Chemistry Ch 6: Haloalkanes and Haloarenes ---
  'chem-sub-6-1': 3,  // 6.1 Classification of Haloalkanes and Haloarenes (Allylic, benzylic, aryl)
  'chem-sub-6-2': 3,  // 6.2 IUPAC Nomenclature of Halogen Derivatives (Naming rules)
  'chem-sub-6-3': 4,  // 6.3 Nature of C—X Bond (Polarity & bond length trends)
  'chem-sub-6-4': 6,  // 6.4 Methods of Preparation of Haloalkanes (From alcohols & Sandmeyer)
  'chem-sub-6-5': 10, // 6.5 Nucleophilic Substitution Mechanisms: SN1 vs SN2 (King of organic chemistry!)
  'chem-sub-6-6': 7,  // 6.6 Elimination Reactions (Saytzeff's Rule & β-elimination)
  'chem-sub-6-7': 6,  // 6.7 Reaction with Metals: Grignard Reagent & Wurtz-Fittig
  'chem-sub-6-8': 3,  // 6.8 Polyhalogen Compounds & Environmental Impacts (Freons, DDT)

  // --- Chemistry Ch 7: Alcohols, Phenols and Ethers ---
  'chem-sub-7-1': 3,  // 7.1 Classification and Nomenclature (Primary, secondary, tertiary)
  'chem-sub-7-2': 5,  // 7.2 Methods of Preparation of Alcohols (Hydration, hydroboration)
  'chem-sub-7-3': 7,  // 7.3 Reactions of Alcohols: Lucas Test & Acidic Character
  'chem-sub-7-4': 9,  // 7.4 Preparation & Reactions of Phenols: Kolbe & Reimer-Tiemann (Named reactions)
  'chem-sub-7-5': 8,  // 7.5 Dehydration of Alcohols Mechanism (Acid-catalysed dehydration at 443 K)
  'chem-sub-7-6': 8,  // 7.6 Preparation of Ethers: Williamson Synthesis (Alkoxide + primary halide)
  'chem-sub-7-7': 8,  // 7.7 Cleavage of C—O Bond in Ethers with HI (Mechanism with 3° alkyl groups)

  // --- Biology Ch 1: Sexual Reproduction in Flowering Plants ---
  'bio-sub-1-1': 3,  // 1.1 Flower Structure & Pre-fertilization Events (Anatomy overview)
  'bio-sub-1-2': 7,  // 1.2 Microsporogenesis & Pollen Grain Development (Tapetum & sporopollenin)
  'bio-sub-1-3': 8,  // 1.3 Megasporogenesis & Embryo Sac Structure (7-celled 8-nucleate structure)
  'bio-sub-1-4': 8,  // 1.4 Double Fertilization, Endosperm & Seed Development (Syngamy & triple fusion)

  // --- Biology Ch 2: Human Reproduction ---
  'bio-sub-2-1': 4,  // 2.1 Male Reproductive System Anatomy (Seminiferous tubules & Leydig cells)
  'bio-sub-2-2': 5,  // 2.2 Female Reproductive System Anatomy (Ovary & Fallopian tubes)
  'bio-sub-2-3': 9,  // 2.3 Gametogenesis: Spermatogenesis vs Oogenesis (Hormonal control & stages)
  'bio-sub-2-4': 9,  // 2.4 Menstrual Cycle, Hormonal Regulation & Pregnancy (LH surge & progesterone)

  // --- Biology Ch 3: Reproductive Health ---
  'bio-sub-3-1': 4,  // 3.1 Population Explosion, Birth Control & Contraception (Barrier, IUD, pills)
  'bio-sub-3-2': 5,  // 3.2 Infertility & Assisted Reproductive Technologies (IVF, ZIFT, ICSI)

  // --- Biology Ch 4: Principles of Inheritance and Variation ---
  'bio-sub-4-1': 9,  // 4.1 Mendel's Laws of Inheritance (Monohybrid & Dihybrid crosses)
  'bio-sub-4-2': 7,  // 4.2 Incomplete Dominance, Codominance & Multiple Alleles (ABO blood groups)
  'bio-sub-4-3': 8,  // 4.3 Sex Determination & Genetic Disorders (Pedigree analysis, Down, Turner)

  // --- Biology Ch 5: Molecular Basis of Inheritance ---
  'bio-sub-5-1': 7,  // 5.1 DNA Structure, Double Helix & Packaging of DNA (Histone octamer)
  'bio-sub-5-2': 10, // 5.2 DNA Replication (Meselson-Stahl Experiment & Replication Fork mechanism)
  'bio-sub-5-3': 10, // 5.3 Transcription, Genetic Code & Translation (RNA processing & protein synthesis)
  'bio-sub-5-4': 9,  // 5.4 Regulation of Gene Expression (Lac Operon) & DNA Fingerprinting

  // --- Biology Ch 6: Evolution ---
  'bio-sub-6-1': 4,  // 6.1 Origin of Life & Evidences of Evolution (Homologous vs Analogous)
  'bio-sub-6-2': 5,  // 6.2 Adaptive Radiation & Darwinian Selection (Finches & industrial melanism)
  'bio-sub-6-3': 6,  // 6.3 Hardy-Weinberg Principle & Speciation (p² + 2pq + q² = 1 calculations)

  // --- Psychology Ch 1: Variations in Psychological Attributes ---
  'psy-sub-1-1': 3,  // 1.1 Individual Differences in Human Functioning (Basic concepts)
  'psy-sub-1-2': 4,  // 1.2 Assessment of Psychological Attributes (Methods of inquiry)
  'psy-sub-1-3': 8,  // 1.3 Theories of Intelligence: Psychometric & Information Processing (Spearman, Thurstone)
  'psy-sub-1-4': 9,  // 1.4 Theory of Multiple Intelligences (Howard Gardner's 8 types)
  'psy-sub-1-5': 8,  // 1.5 Triarchic Theory of Intelligence (Robert Sternberg's Componential, Experiential, Contextual)
  'psy-sub-1-6': 8,  // 1.6 PASS Model of Intelligence (Planning, Attention, Simultaneous, Successive)
  'psy-sub-1-7': 4,  // 1.7 Heredity and Environment in Intelligence (Twin studies)
  'psy-sub-1-8': 5,  // 1.8 Assessment of Intelligence & Psychological Tests (Culture-fair vs Culture-biased)
  'psy-sub-1-9': 5,  // 1.9 Aptitude, Interest and Creativity (Creativity-intelligence relationship)

  // --- Psychology Ch 2: Self and Personality ---
  'psy-sub-2-1': 5,  // 2.1 Concept of Self: Self-Esteem, Self-Efficacy & Self-Regulation
  'psy-sub-2-2': 4,  // 2.2 Concept of Personality & Major Approaches (Overview)
  'psy-sub-2-3': 5,  // 2.3 Type Approaches to Personality (Hippocrates, Sheldon, Friedman Type A/B)
  'psy-sub-2-4': 8,  // 2.4 Trait Approaches (Allport, Cattell 16PF, Eysenck H-I-N-E)
  'psy-sub-2-5': 10, // 2.5 Psychodynamic Approach (Freud: Id, Ego, Superego & 8 Defense Mechanisms)
  'psy-sub-2-6': 6,  // 2.6 Post-Freudian Approaches (Adler, Jung, Horney, Erikson)
  'psy-sub-2-7': 4,  // 2.7 Behavioural and Cultural Approaches to Personality (Bandura, Social learning)
  'psy-sub-2-8': 7,  // 2.8 Humanistic Approach (Carl Rogers Fully Functioning & Maslow Hierarchy)
  'psy-sub-2-9': 6,  // 2.9 Assessment of Personality: Self-Report Measures (MMPI, 16PF)
  'psy-sub-2-10': 8, // 2.10 Projective Techniques (Rorschach Inkblot, TAT, Sentence Completion)

  // --- Psychology Ch 3: Meeting Life Challenges ---
  'psy-sub-3-1': 5,  // 3.1 Nature and Sources of Stress (Lazarus Primary & Secondary Appraisal)
  'psy-sub-3-2': 3,  // 3.2 Signs and Symptoms of Stress (Physical, emotional, behavioural)
  'psy-sub-3-3': 8,  // 3.3 General Adaptation Syndrome (Hans Selye's GAS: Alarm, Resistance, Exhaustion)
  'psy-sub-3-4': 6,  // 3.4 Stress and the Immune System (Psychoneuroimmunology)
  'psy-sub-3-5': 7,  // 3.5 Coping with Stress: Task-Oriented, Emotion-Focused, Avoidance
  'psy-sub-3-6': 5,  // 3.6 Stress Management Techniques (Biofeedback, relaxation, exercise)
  'psy-sub-3-7': 4,  // 3.7 Promoting Positive Health and Well-being (Life skills)

  // --- English Flamingo Prose ---
  'eng-sub-1-1': 8,  // 1.1 The Prussian Conquest & Franz’s Reluctance
  'eng-sub-1-2': 9,  // 1.2 The Unusual Classroom & M. Hamel’s Announcement
  'eng-sub-1-3': 10, // 1.3 Linguistic Chauvinism & Mother Tongue as Key to Prison
  'eng-sub-1-4': 9,  // 1.4 The Emotional Climax — "Vive La France!"
  'eng-sub-2-1': 9,  // 2.1 Saheb & Seemapuri Ragpickers
  'eng-sub-2-2': 8,  // 2.2 Mukesh & Firozabad Bangle Makers
  'eng-sub-3-1': 7,  // 3.1 Childhood Phobia & The YMCA Pool Misadventure
  'eng-sub-3-2': 8,  // 3.2 Near-Drowning Traumatic Experience
  'eng-sub-3-3': 9,  // 3.3 Overcoming Fear — Instructor & Roosevelt Philosophy
  'eng-sub-4-1': 8,  // 4.1 The World as a Rattrap & 30 Kronor Theft
  'eng-sub-4-2': 7,  // 4.2 Entrapment in the Woods & Ramsjö Ironworks
  'eng-sub-4-3': 10, // 4.3 Edla’s Compassion & Captain von Stahle's Redemption
  'eng-sub-5-1': 8,  // 5.1 Rajkumar Shukla & Tinkathia System
  'eng-sub-5-2': 9,  // 5.2 Civil Disobedience at Motihari
  'eng-sub-5-3': 8,  // 5.3 The 25% Compromise & Social Transformation

  // --- English Flamingo Poetry ---
  'eng-sub-6-1': 8,  // 6.1 Cochin Airport & Sprinting Trees Contrast
  'eng-sub-6-2': 9,  // 6.2 Late Winter's Moon & Parting Smile
  'eng-sub-7-1': 7,  // 7.1 Counting to Twelve & Exotic Moment
  'eng-sub-7-2': 8,  // 7.2 Stopping Wars & Ecological Assault
  'eng-sub-7-3': 8,  // 7.3 Stillness vs Total Inactivity & Earth's Lesson
  'eng-sub-8-1': 9,  // 8.1 A Thing of Beauty — Joy Forever & Quiet Bower
  'eng-sub-8-2': 10, // 8.2 The 7 Things of Beauty vs The 7 Causes of Suffering
  'eng-sub-8-3': 9,  // 8.3 The Endless Fountain of Immortal Drink

  // --- English Vistas Supplementary ---
  'eng-sub-9-1': 8,  // 9.1 Charley & Grand Central Third Level
  'eng-sub-9-2': 7,  // 9.2 The World of 1894 Galesburg
  'eng-sub-9-3': 9,  // 9.3 Sam Weiner's Letter from Galesburg
  'eng-sub-10-1': 8, // 10.1 Tiger King Infant's Miracle & Vow
  'eng-sub-10-2': 8, // 10.2 British Officer Crisis & 50 Diamond Rings
  'eng-sub-10-3': 10,// 10.3 The 100th Tiger Mystery & Wooden Toy Revenge
  'eng-sub-11-1': 7, // 11.1 Journey to Antarctica & Gondwana
  'eng-sub-11-2': 8, // 11.2 Climate Change & Students on Ice
  'eng-sub-11-3': 9, // 11.3 Phytoplankton & Take Care of Small Things

  // --- English Writing & Reading Skills ---
  'eng-sub-12-1': 9, // 12.1 Unseen Passage Reading Strategies
  'eng-sub-13-1': 9, // 13.1 Notice Writing (Format, 50 Words & Box)
  'eng-sub-14-1': 8, // 14.1 Invitations and Replies (Formal & Informal)
  'eng-sub-15-1': 10,// 15.1 Letter to the Editor (3-Paragraph Layout)
  'eng-sub-16-1': 10 // 16.1 Job Application with Bio-Data
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
