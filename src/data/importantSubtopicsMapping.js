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
  },

  // =========================================================================
  // BIOLOGY CHAPTERS 1 TO 8: "BIG ORANGE" HIGH-YIELD BOARD FOCUS
  // =========================================================================
  'bio-sub-1-1': {
    title: 'Microsporangium 4 Wall Layers, Tapetum & Pollen Grain',
    reason: 'Big Orange: 4 Wall layers (endothecium dehiscence, tapetum nutrition), sporopollenin exine, 2-celled pollen',
    examTag: 'Big Orange: Important Diagram & 3M',
    chapterNum: 1
  },
  'bio-sub-1-2': {
    title: 'Megasporangium (Anatropous Ovule) & 7-Celled Embryo Sac',
    reason: 'Big Orange: Anatropous ovule diagram (pg 9), 7-celled 8-nucleate embryo sac (pg 10), filiform apparatus function',
    examTag: 'Big Orange: Core Diagram & 5M',
    chapterNum: 1
  },
  'bio-sub-1-3': {
    title: 'Pollination: Autogamy, Geitonogamy & Outbreeding Devices',
    reason: 'Big Orange: Geitonogamy functionally cross vs genetically self; outbreeding devices preventing inbreeding depression',
    examTag: 'Big Orange: 3M Focus',
    chapterNum: 1
  },
  'bio-sub-1-5': {
    title: 'Double Fertilisation & Triple Fusion',
    reason: 'Big Orange: Syngamy (2n zygote) + Triple fusion (3n PEN) in central cell; unique to angiosperms',
    examTag: 'Big Orange: Core Concept 2M',
    chapterNum: 1
  },
  'bio-sub-1-6': {
    title: 'Embryo Development: Monocot vs Dicot & Coleoptile vs Coleorhiza',
    reason: 'Big Orange: Pg 19 differentiate coleoptile (plumule sheath) vs coleorhiza (radicle sheath); scutellum',
    examTag: 'Big Orange: Differentiate 2M',
    chapterNum: 1
  },
  'bio-sub-1-7': {
    title: 'Perisperm, False Fruit & Parthenocarpy',
    reason: 'Big Orange: Perisperm in black pepper/beet; false fruit (apple/strawberry thalamus); parthenocarpic seedless banana',
    examTag: 'Big Orange: Definitions 2M',
    chapterNum: 1
  },
  'bio-sub-2-2': {
    title: 'Female Accessory Ducts: Fimbriae & Uterine Wall Layers',
    reason: 'Big Orange: Fimbriae ovum collection post-ovulation; Myometrium parturition contractions vs Endometrium menstruation',
    examTag: 'Big Orange: 2M/3M Question',
    chapterNum: 2
  },
  'bio-sub-2-3': {
    title: 'Spermatogenesis vs Oogenesis',
    reason: 'Big Orange: Stepwise comparison: unequal meiotic divisions in oogenesis (1 ovum + polar bodies), meiotic arrest points',
    examTag: 'Big Orange: 4M Comparison',
    chapterNum: 2
  },
  'bio-sub-2-4': {
    title: 'Menstrual Cycle: Hormonal Curves & LH Surge',
    reason: 'Big Orange: Day 14 LH surge triggers ovulation; Corpus luteum secretes progesterone; endometrial phase curves',
    examTag: 'Big Orange: Core 3M/5M Curve',
    chapterNum: 2
  },
  'bio-sub-2-6': {
    title: 'Blastocyst Structure & Implantation (2 Marks)',
    reason: 'Big Orange: Trophoblast attaches to endometrium (forms placenta); Inner cell mass forms embryo proper',
    examTag: 'Big Orange: 2M High Yield',
    chapterNum: 2
  },
  'bio-sub-2-7': {
    title: 'Placenta: Functions & Endocrine Hormones (Pg 37)',
    reason: 'Big Orange: Maternal-foetal exchange via umbilical cord; exclusive pregnancy hormones hCG, hPL, relaxin',
    examTag: 'Big Orange: 3M Focus',
    chapterNum: 2
  },
  'bio-sub-3-2': {
    title: 'Methods of Birth Control: IUDs, Saheli & Sterilisation',
    reason: 'Big Orange: IUD classifications (Lippes loop, CuT, LNG-20); Saheli non-steroidal pill; Vasectomy/Tubectomy',
    examTag: 'Big Orange: 4M Methods',
    chapterNum: 3
  },
  'bio-sub-3-3': {
    title: 'Amniocentesis & MTP (Amendment) Act 2017',
    reason: 'Big Orange: Amniocentesis karyotyping & statutory ban (pg 42); MTP safe up to 12 weeks with 1 RMP, 24 weeks with 2 RMPs (pg 46)',
    examTag: 'Big Orange: 2M/3M Legalities',
    chapterNum: 3
  },
  'bio-sub-3-4': {
    title: 'Sexually Transmitted Infections (STIs)',
    reason: 'Big Orange: Incurable STI trio: HIV, Hepatitis-B, Genital herpes; transmission and prevention',
    examTag: 'Big Orange: 2M Focus',
    chapterNum: 3
  },
  'bio-sub-3-5': {
    title: 'Assisted Reproductive Technologies: ZIFT, GIFT, ICSI, IVF-ET',
    reason: 'Big Orange: ZIFT (embryo ≤8 blastomeres into tube) vs GIFT (unfertilized ovum into tube); ICSI & IUI',
    examTag: 'Big Orange: 3M/5M Differentiation',
    chapterNum: 3
  },
  'bio-sub-4-1': {
    title: "Mendel's Laws of Inheritance & Monohybrid Cross",
    reason: 'Big Orange: Law of Dominance (3:1), Law of Segregation (purity of gametes without exception, 1:2:1)',
    examTag: 'Big Orange: 3M/5M Core',
    chapterNum: 4
  },
  'bio-sub-4-2': {
    title: 'Deviations of Mendel: Incomplete Dominance & Co-dominance',
    reason: 'Big Orange: Antirrhinum pink flowers (1:2:1 phenotypic=genotypic); ABO blood group codominant I^A and I^B',
    examTag: 'Big Orange: 3M Cross',
    chapterNum: 4
  },
  'bio-sub-4-4': {
    title: 'Linkage and Recombination (T.H. Morgan)',
    reason: 'Big Orange: Linkage vs recombination definitions; recombination frequency ∝ gene distance; Drosophila selection',
    examTag: 'Big Orange: 3M Core',
    chapterNum: 4
  },
  'bio-sub-4-5': {
    title: 'Polygenic Inheritance & Pleiotropy',
    reason: 'Big Orange: Polygenic skin colour (additive genes) vs Pleiotropic single gene multiple traits (PKU, starch synthesis)',
    examTag: 'Big Orange: 2M/3M Focus',
    chapterNum: 4
  },
  'bio-sub-4-6': {
    title: 'Sex Determination in Honeybees & Birds',
    reason: 'Big Orange: Honeybee haplodiploidy (female 2n=32, male n=16 parthenogenesis); Bird female heterogamety (ZW female, ZZ male)',
    examTag: 'Big Orange: 3M Mechanism',
    chapterNum: 4
  },
  'bio-sub-4-8': {
    title: 'Mendelian Disorders: Haemophilia, Sickle-Cell & PKU',
    reason: 'Big Orange: Haemophilia X-linked clotting failure; Sickle cell point mutation Glu to Val at 6th position; PKU phenylalanine hydroxylase failure',
    examTag: 'Big Orange: 3M Focus',
    chapterNum: 4
  },
  'bio-sub-4-9': {
    title: "Chromosomal Disorders: Down's, Klinefelter's & Turner's",
    reason: 'Big Orange: Down (47, +21 trisomy), Klinefelter (47, XXY gynaecomastia), Turner (45, XO sterile female); Aneuploidy vs Polyploidy',
    examTag: 'Big Orange: 3M/4M Syndrome Bank',
    chapterNum: 4
  },
  'bio-sub-5-1': {
    title: 'DNA Double Helix & Chemical Stability vs RNA (Pg 86)',
    reason: 'Big Orange: Watson-Crick B-DNA pitch 3.4 nm, 10 bp/turn; DNA stability due to lack of 2-OH and presence of thymine',
    examTag: 'Big Orange: 3M Structural',
    chapterNum: 5
  },
  'bio-sub-5-3': {
    title: 'Transforming Principle: Griffith & Avery-MacLeod-McCarty',
    reason: 'Big Orange: Heat-killed S + Live R kills mice; DNase abolishes transformation proving DNA is genetic material',
    examTag: 'Big Orange: 3M Proof',
    chapterNum: 5
  },
  'bio-sub-5-4': {
    title: 'Semiconservative Replication: Meselson & Stahl',
    reason: 'Big Orange: Heavy ¹⁵N isotope, CsCl density gradient centrifugation; Gen 1 hybrid (¹⁵N-¹⁴N), Gen 2 50% hybrid + 50% light',
    examTag: 'Big Orange: 3M/4M Experiment',
    chapterNum: 5
  },
  'bio-sub-5-5': {
    title: 'Transcription in Prokaryotes & Eukaryotes',
    reason: 'Big Orange: Prokaryotes σ initiation & ρ termination factor; Eukaryotes RNA Pol I, II, III, Splicing, Capping, Tailing',
    examTag: 'Big Orange: 3M Mechanism',
    chapterNum: 5
  },
  'bio-sub-5-9': {
    title: 'Lac Operon: Jacob-Monod Model (Pg 93 & Pg 101)',
    reason: 'Big Orange: OFF vs ON with allolactose inducer; z (beta-galactosidase), y (permease), a (transacetylase); negative regulation',
    examTag: 'Big Orange: 3M/5M Core',
    chapterNum: 5
  },
  'bio-sub-5-10': {
    title: 'Human Genome Project: 6 Salient Features (Pg 106)',
    reason: 'Big Orange: 3.164 billion bp, 30000 genes, dystrophin 2.4 Mb, <2% coding, chromosome 1 (2968) vs Y (231)',
    examTag: 'Big Orange: 3M Direct Q',
    chapterNum: 5
  },
  'bio-sub-5-11': {
    title: 'DNA Fingerprinting: Alec Jeffreys & VNTRs',
    reason: 'Big Orange: DNA polymorphism, VNTR minisatellites, Southern blotting, radioactive probe hybridisation, autoradiography',
    examTag: 'Big Orange: 3M Steps',
    chapterNum: 5
  },
  'bio-sub-6-1': {
    title: 'Miller-Urey Chemical Evolution Experiment (Pg 117)',
    reason: 'Big Orange: Spark discharge at 800°C with CH₄, NH₃, H₂O, H₂; synthesized amino acids (glycine, alanine, aspartic acid)',
    examTag: 'Big Orange: Core Diagram 3M',
    chapterNum: 6
  },
  'bio-sub-6-4': {
    title: 'Adaptive Radiation: Darwin Finches & Marsupials',
    reason: 'Big Orange: Radiating to ecological niches: Galapagos finch beaks, Australian marsupials, convergent evolution',
    examTag: 'Big Orange: 3M Focus',
    chapterNum: 6
  },
  'bio-sub-6-5': {
    title: 'Hardy-Weinberg Principle: 5 Factors (Pg 121)',
    reason: 'Big Orange: Equation p²+2pq+q²=1; 5 disrupting factors: gene flow, genetic drift, mutation, recombination, natural selection',
    examTag: 'Big Orange: 3M Algebraic & Curves',
    chapterNum: 6
  },
  'bio-sub-7-2': {
    title: 'Innate Immunity: Four Protective Barriers',
    reason: 'Big Orange: Physical (skin/mucus), Physiological (HCl/lysozyme), Cellular (PMNL/macrophage), Cytokine (interferons)',
    examTag: 'Big Orange: 3M Barriers',
    chapterNum: 7
  },
  'bio-sub-7-3': {
    title: 'Antibody Molecule H₂L₂ (Pg 138) & Active vs Passive Immunity',
    reason: 'Big Orange: H₂L₂ structure with disulfide bonds, antigen-binding sites; IgA colostrum passive immunity',
    examTag: 'Big Orange: Core Diagram & 3M',
    chapterNum: 7
  },
  'bio-sub-7-4': {
    title: 'Allergies: Symptoms & Treatment (Pg 136)',
    reason: 'Big Orange: IgE mediated mast cell release of histamine and serotonin; treatment with antihistamines, adrenaline, steroids',
    examTag: 'Big Orange: 3M Direct Q',
    chapterNum: 7
  },
  'bio-sub-7-5': {
    title: 'HIV Life Cycle & Antiretroviral Therapy (Pg 139)',
    reason: 'Big Orange: Retrovirus reverse transcriptase, macrophage HIV factory, Helper T cell depletion; reverse transcriptase inhibitors',
    examTag: 'Big Orange: Case-Based 5M',
    chapterNum: 7
  },
  'bio-sub-7-6': {
    title: 'Cancer Biology: Contact Inhibition & Metastasis (Pg 141)',
    reason: 'Big Orange: Loss of contact inhibition, Benign vs Malignant tumours, Metastasis spreading through blood/lymph',
    examTag: 'Big Orange: 3M Focus',
    chapterNum: 7
  },
  'bio-sub-7-7': {
    title: 'Tabulation of Drugs: Opioids, Cannabinoids & Cocaine',
    reason: 'Big Orange: Opioids (Papaver somniferum, CNS/GI depressant), Cannabinoids (Cannabis sativa, heart), Cocaine (Erythroxylum coca, dopamine)',
    examTag: 'Big Orange: 3M Tabulation',
    chapterNum: 7
  },
  'bio-sub-8-1': {
    title: 'Propionibacterium sharmanii & Swiss Cheese (Pg 149)',
    reason: 'Big Orange: Propionibacterium sharmanii ferments lactic acid to propionic acid + large CO₂ gas bubbles creating holes',
    examTag: 'Big Orange: 2M Focus',
    chapterNum: 8
  },
  'bio-sub-8-2': {
    title: 'Bioactive Molecules & Microbial Enzymes',
    reason: 'Big Orange: Cyclosporin A (Trichoderma polysporum), Statins (Monascus purpureus), Streptokinase clot buster, lipases, pectinases',
    examTag: 'Big Orange: 3M High Yield',
    chapterNum: 8
  },
  'bio-sub-8-3': {
    title: 'Sewage Treatment: Primary, Flocs, BOD & Biogas',
    reason: 'Big Orange: Primary physical vs Secondary biological treatment: Flocs reduce BOD; anaerobic sludge digester produces biogas (CH₄, CO₂, H₂S)',
    examTag: 'Big Orange: Guaranteed 5M',
    chapterNum: 8
  },
  'bio-sub-8-4': {
    title: 'Biocontrol Agents: Baculoviruses & Bacillus thuringiensis',
    reason: 'Big Orange: Nucleopolyhedrovirus narrow-spectrum IPM safety; Bacillus thuringiensis alkaline gut pore lysis',
    examTag: 'Big Orange: 3M Focus',
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
