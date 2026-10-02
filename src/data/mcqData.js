// Comprehensive CBSE Class 12 MCQ Bank with Explanations
// Mapped by Subject and Exam Portion Chapters

export const MCQ_DATABASE = {
  physics: [
    {
      id: 'phy-mcq-1',
      chapterId: 'phy-ch-1',
      chapterName: 'Ch 1: Electric Charges & Fields',
      subtopicId: 'phy-sub-1-7',
      difficulty: 'medium',
      question: 'An electric dipole of moment p is placed in a uniform electric field E. The torque τ and potential energy U of the dipole when in stable equilibrium are:',
      options: [
        'τ = pE, U = 0',
        'τ = 0, U = −pE',
        'τ = 0, U = +pE',
        'τ = pE/2, U = −pE/2'
      ],
      correct: 1,
      explanation: 'Stable equilibrium occurs when dipole vector p aligns parallel with field E (θ = 0°). Torque τ = pE sin 0° = 0. Potential energy U = −p · E = −pE cos 0° = −pE (minimum potential energy).'
    },
    {
      id: 'phy-mcq-2',
      chapterId: 'phy-ch-1',
      chapterName: 'Ch 1: Electric Charges & Fields',
      subtopicId: 'phy-sub-1-9',
      difficulty: 'easy',
      question: 'A spherical Gaussian surface encloses a point charge q. If the radius of the sphere is doubled, the total outward electric flux through the surface will:',
      options: [
        'Be doubled',
        'Be halved',
        'Remain unchanged',
        'Become four times'
      ],
      correct: 2,
      explanation: 'According to Gauss\'s Law, total electric flux Φ = q_enclosed / ε₀ depends solely on the net charge enclosed and the permittivity of free space, not on the radius or geometry of the Gaussian surface.'
    },
    {
      id: 'phy-mcq-3',
      chapterId: 'phy-ch-2',
      chapterName: 'Ch 2: Electrostatic Potential & Capacitance',
      subtopicId: 'phy-sub-2-2',
      difficulty: 'easy',
      question: 'The electric potential at an equatorial point due to a short electric dipole of dipole moment p at distance r is:',
      options: [
        'kp / r²',
        '2kp / r³',
        'Zero',
        '−kp / r²'
      ],
      correct: 2,
      explanation: 'Any point on the equatorial perpendicular bisector is equidistant from +q and −q charges. Since potential is a scalar sum: V = kq/d + k(−q)/d = 0.'
    },
    {
      id: 'phy-mcq-4',
      chapterId: 'phy-ch-2',
      chapterName: 'Ch 2: Electrostatic Potential & Capacitance',
      subtopicId: 'phy-sub-2-7',
      difficulty: 'medium',
      question: 'A dielectric slab of dielectric constant K is introduced between the plates of an isolated charged parallel-plate capacitor. Which quantity decreases?',
      options: [
        'Capacitance',
        'Charge on plates',
        'Potential difference between plates',
        'Both capacitance and charge'
      ],
      correct: 2,
      explanation: 'Since the capacitor is isolated, charge Q remains constant. Capacitance increases by factor K (C = K C₀). Therefore, potential difference V = Q / C drops to V₀ / K.'
    },
    {
      id: 'phy-mcq-5',
      chapterId: 'phy-ch-3',
      chapterName: 'Ch 3: Current Electricity',
      subtopicId: 'phy-sub-3-3',
      difficulty: 'medium',
      question: 'When temperature of a metallic conductor is increased, its electrical resistivity increases primarily because:',
      options: [
        'Conduction electron density n decreases',
        'Average relaxation time τ decreases',
        'Electron mass m increases',
        'Both n and τ increase'
      ],
      correct: 1,
      explanation: 'Resistivity ρ = m / (n e² τ). In metals, free electron density n is virtually unaffected by temperature, but increased lattice thermal vibrations increase collision frequency, sharply shortening relaxation time τ.'
    },
    {
      id: 'phy-mcq-6',
      chapterId: 'phy-ch-3',
      chapterName: 'Ch 3: Current Electricity',
      subtopicId: 'phy-sub-3-9',
      difficulty: 'medium',
      question: 'In a Wheatstone bridge network, galvanometer shows null deflection. If the battery and galvanometer are interchanged, the balance condition:',
      options: [
        'Remains unchanged',
        'Is completely disrupted',
        'Requires recalibration of all 4 resistors',
        'Doubles the sensitivity'
      ],
      correct: 0,
      explanation: 'By the conjugate property of the Wheatstone bridge, the source branch (battery) and detector branch (galvanometer) are conjugate arms; exchanging them leaves the balance condition P/Q = R/S unchanged.'
    },
    {
      id: 'phy-mcq-7',
      chapterId: 'phy-ch-4',
      chapterName: 'Ch 4: Moving Charges & Magnetism',
      subtopicId: 'phy-sub-4-6',
      difficulty: 'hard',
      question: 'A proton and an alpha particle enter a uniform magnetic field with the same velocity perpendicular to the field. The ratio of radius of proton path to alpha particle path (r_p : r_α) is:',
      options: [
        '1 : 1',
        '1 : 2',
        '2 : 1',
        '1 : 4'
      ],
      correct: 1,
      explanation: 'Radius of gyration r = m v / (q B). For proton: m_p = m, q_p = e. For alpha particle: m_α = 4m, q_α = 2e. Ratio r_p / r_α = (m / e) / (4m / 2e) = 2/4 = 1/2.'
    },
    {
      id: 'phy-mcq-8',
      chapterId: 'phy-ch-6',
      chapterName: 'Ch 6: Electromagnetic Induction',
      subtopicId: 'phy-sub-6-3',
      difficulty: 'medium',
      question: 'A metallic ring is held horizontally and a bar magnet is dropped freely along the axis of the ring with its North pole downwards. The acceleration of the falling magnet is:',
      options: [
        'Equal to g',
        'Greater than g',
        'Less than g',
        'Zero'
      ],
      correct: 2,
      explanation: 'By Lenz\'s law, the induced current in the ring produces an opposing magnetic North pole facing the falling magnet, exerting an upward repulsive force. Hence net downward acceleration a = g − (F_magnetic / m) < g.'
    },
    {
      id: 'phy-mcq-8b',
      chapterId: 'phy-ch-6',
      chapterName: 'Ch 6: Electromagnetic Induction',
      subtopicId: 'phy-sub-6-2',
      difficulty: 'hard',
      question: 'A bar magnet is moved towards a closed circular coil first rapidly in 0.1 s, and then slowly in 1.0 s. The ratio of the induced EMF and total charge flown through the coil in the two cases are respectively:',
      options: [
        'EMF ratio is 10 : 1, while Charge ratio is 1 : 1',
        'EMF ratio is 1 : 1, while Charge ratio is 10 : 1',
        'Both EMF and Charge ratios are 10 : 1',
        'Both EMF and Charge ratios are 1 : 1'
      ],
      correct: 0,
      explanation: 'Induced EMF |ε| = ΔΦ / Δt is inversely proportional to time, so rapid motion produces 10 times higher EMF (10 : 1). However, total induced charge q = ΔΦ / R depends only on net flux change and resistance, completely independent of time, so the charge ratio is strictly 1 : 1.'
    },
    {
      id: 'phy-mcq-9',
      chapterId: 'phy-ch-7',
      chapterName: 'Ch 7: Alternating Current',
      subtopicId: 'phy-sub-7-6',
      difficulty: 'easy',
      question: 'In a series LCR resonant circuit, the phase angle between alternating applied voltage and circuit current is:',
      options: [
        'π / 2 (90°)',
        'π / 4 (45°)',
        'Zero (in phase)',
        'π (180°)'
      ],
      correct: 2,
      explanation: 'At resonance, inductive reactance X_L cancels capacitive reactance X_C (X_L − X_C = 0). Circuit impedance is purely resistive (Z = R), meaning voltage and current oscillate perfectly in phase (φ = 0°).'
    },
    {
      id: 'phy-mcq-10',
      chapterId: 'phy-ch-8',
      chapterName: 'Ch 8: Electromagnetic Waves',
      subtopicId: 'phy-sub-8-4',
      difficulty: 'easy',
      question: 'Which of the following electromagnetic waves has the highest frequency and penetrating power in the electromagnetic spectrum?',
      options: [
        'Microwaves',
        'Ultraviolet rays',
        'Gamma rays',
        'X-rays'
      ],
      correct: 2,
      explanation: 'Gamma rays have the shortest wavelength (< 10⁻¹² m) and highest frequency (> 10²⁰ Hz), giving them the highest photon energy (E = hν) and deepest penetrating ability through dense matter.'
    }
  ],

  chemistry: [
    {
      id: 'chem-mcq-1',
      chapterId: 'chem-ch-1',
      chapterName: 'Ch 1: Solutions',
      subtopicId: 'chem-sub-1-8',
      difficulty: 'medium',
      question: 'Which of the following aqueous solutions exhibits the highest boiling point elevation?',
      options: [
        '0.1 M Glucose',
        '0.1 M NaCl',
        '0.1 M BaCl₂',
        '0.1 M Al₂(SO₄)₃'
      ],
      correct: 3,
      explanation: 'Boiling point elevation ΔT_b = i · K_b · m. Al₂(SO₄)₃ dissociates into 2 Al³⁺ + 3 SO₄²⁻ ions (i = 5). Total effective particle concentration = 5 × 0.1 = 0.5 M, highest among all options.'
    },
    {
      id: 'chem-mcq-2',
      chapterId: 'chem-ch-1',
      chapterName: 'Ch 1: Solutions',
      subtopicId: 'chem-sub-1-2',
      difficulty: 'medium',
      question: 'The value of Henry\'s constant K_H for gases in water:',
      options: [
        'Increases with increase in temperature',
        'Decreases with increase in temperature',
        'Remains constant at all temperatures',
        'First increases then drops to zero'
      ],
      correct: 0,
      explanation: 'Gas dissolution in liquids is an exothermic process (ΔH < 0). By Le Chatelier\'s principle, increasing temperature decreases gas solubility. Since solubility x = p / K_H, K_H must increase as temperature rises.'
    },
    {
      id: 'chem-mcq-3',
      chapterId: 'chem-ch-2',
      chapterName: 'Ch 2: Electrochemistry',
      subtopicId: 'chem-sub-2-10',
      difficulty: 'medium',
      question: 'During discharge of a lead storage battery in an automobile:',
      options: [
        'PbSO₄ is consumed and H₂SO₄ is formed',
        'H₂SO₄ is consumed and density of electrolyte drops',
        'Lead dioxide (PbO₂) is produced at the anode',
        'Density of electrolyte increases'
      ],
      correct: 1,
      explanation: 'Overall discharge reaction: Pb(s) + PbO₂(s) + 2 H₂SO₄(aq) ⟶ 2 PbSO₄(s) + 2 H₂O(l). Sulfuric acid is continuously consumed to form water, decreasing the specific gravity of battery acid from ~1.28 to ~1.15 g/cm³.'
    },
    {
      id: 'chem-mcq-4',
      chapterId: 'chem-ch-2',
      chapterName: 'Ch 2: Electrochemistry',
      subtopicId: 'chem-sub-2-8',
      difficulty: 'hard',
      question: 'The limiting molar conductivities Λ°_m for NaCl, HCl, and CH₃COONa are 126.4, 425.9, and 91.0 S·cm²/mol respectively. The Λ°_m of CH₃COOH is:',
      options: [
        '516.9 S·cm²/mol',
        '390.5 S·cm²/mol',
        '299.5 S·cm²/mol',
        '425.9 S·cm²/mol'
      ],
      correct: 1,
      explanation: 'By Kohlrausch\'s Law: Λ°_m(CH₃COOH) = Λ°_m(CH₃COONa) + Λ°_m(HCl) − Λ°_m(NaCl) = 91.0 + 425.9 − 126.4 = 516.9 − 126.4 = 390.5 S·cm²/mol.'
    },
    {
      id: 'chem-mcq-4b',
      chapterId: 'chem-ch-2',
      chapterName: 'Ch 2: Electrochemistry',
      subtopicId: 'chem-sub-2-7',
      difficulty: 'medium',
      question: 'How many Faradays of electric charge are required for the complete reduction of 1 mole of Al³⁺ ions to metallic aluminum (Al)?',
      options: [
        '1 F',
        '2 F',
        '3 F',
        '96,500 F'
      ],
      correct: 2,
      explanation: 'The cathodic reduction reaction is Al³⁺ + 3 e⁻ ⟶ Al(s). Deposition of 1 mole of Al requires 3 moles of electrons. Since 1 mole of electrons carries 1 Faraday (≈ 96,500 Coulombs) of charge, exactly 3 F (289,500 C) are required.'
    },
    {
      id: 'chem-mcq-5',
      chapterId: 'chem-ch-4',
      chapterName: 'Ch 4: d and f Block Elements',
      subtopicId: 'chem-sub-4-1',
      difficulty: 'medium',
      question: 'The electronic configuration of a 3d transition metal ion with the maximum spin-only magnetic moment is:',
      options: [
        'Fe³⁺ (3d⁵)',
        'Mn²⁺ (3d⁵)',
        'Cr³⁺ (3d³)',
        'Both Fe³⁺ and Mn²⁺ (3d⁵)'
      ],
      correct: 3,
      explanation: 'Spin-only magnetic moment μ = √[n(n+2)] BM. Both Mn²⁺ and Fe³⁺ have a half-filled 3d⁵ configuration with n = 5 unpaired electrons, giving μ = √[5(7)] = √35 ≈ 5.92 BM, the maximum possible in the 3d series.'
    },
    {
      id: 'chem-mcq-6',
      chapterId: 'chem-ch-4',
      chapterName: 'Ch 4: d and f Block Elements',
      subtopicId: 'chem-sub-4-7',
      difficulty: 'easy',
      question: 'When acidified potassium dichromate (K₂Cr₂O₇) acts as an oxidizing agent, the oxidation state of chromium changes from:',
      options: [
        '+6 to +3',
        '+6 to +2',
        '+7 to +2',
        '+4 to +2'
      ],
      correct: 0,
      explanation: 'Reduction half-reaction: Cr₂O₇²⁻ + 14 H⁺ + 6 e⁻ ⟶ 2 Cr³⁺ + 7 H₂O. Chromium is reduced from oxidation state +6 (in orange dichromate) to +3 (in green chromic ion).'
    },
    {
      id: 'chem-mcq-7',
      chapterId: 'chem-ch-6',
      chapterName: 'Ch 6: Haloalkanes and Haloarenes',
      subtopicId: 'chem-sub-6-5',
      difficulty: 'medium',
      question: 'Which of the following alkyl halides undergoes S_N1 substitution reaction at the fastest rate with aqueous KOH?',
      options: [
        'CH₃-CH₂-CH₂-CH₂-Cl',
        '(CH₃)₂CH-CH₂-Cl',
        '(CH₃)₃C-Cl',
        'CH₃-CH₂-CH(Cl)-CH₃'
      ],
      correct: 2,
      explanation: 'S_N1 reaction rate is governed strictly by carbocation intermediate stability: 3° > 2° > 1° > methyl. (CH₃)₃C-Cl ionizes into the highly stable tertiary tert-butyl carbocation (CH₃)₃C⁺ (stabilized by 9 hyperconjugative hydrogens).'
    },
    {
      id: 'chem-mcq-8',
      chapterId: 'chem-ch-7',
      chapterName: 'Ch 7: Alcohols, Phenols and Ethers',
      subtopicId: 'chem-sub-7-6',
      difficulty: 'hard',
      question: 'When anisole (methoxybenzene) is heated with concentrated hydroiodic acid (HI), the products formed are:',
      options: [
        'Iodobenzene + Methanol',
        'Phenol + Methyl iodide',
        'Benzene + Methyl iodide',
        'Phenol + Iodobenzene'
      ],
      correct: 1,
      explanation: 'In protonated anisole C₆H₅-O⁺(H)-CH₃, the C(sp²)-O bond between oxygen and benzene ring has partial double bond character due to resonance and is very strong. Cleavage occurs at the weaker aliphatic C(sp³)-O bond via S_N2 attack by I⁻ on the methyl group, yielding Phenol and CH₃I.'
    }
  ],

  biology: [
    {
      id: 'bio-mcq-1',
      chapterId: 'bio-ch-1',
      chapterName: 'Ch 1: Sexual Reproduction in Flowering Plants',
      subtopicId: 'bio-sub-1-2',
      difficulty: 'medium',
      question: 'The functional megaspore in a typical angiosperm ovule develops into a female gametophyte (embryo sac) that is characterized by:',
      options: [
        '7-celled, 7-nucleate',
        '8-celled, 8-nucleate',
        '7-celled, 8-nucleate',
        '8-celled, 7-nucleate'
      ],
      correct: 2,
      explanation: 'Monosporic development produces: 3 antipodal cells at chalazal end (3 cells, 3 nuclei) + 1 large central cell with 2 polar nuclei (1 cell, 2 nuclei) + egg apparatus consisting of 1 egg cell and 2 synergids (3 cells, 3 nuclei) = total 7 cells, 8 nuclei.'
    },
    {
      id: 'bio-mcq-2',
      chapterId: 'bio-ch-2',
      chapterName: 'Ch 2: Human Reproduction',
      subtopicId: 'bio-sub-2-2',
      difficulty: 'easy',
      question: 'The acrosome of a mature human spermatozoon is derived morphologically from which cellular organelle during spermiogenesis?',
      options: [
        'Mitochondria',
        'Golgi apparatus',
        'Endoplasmic reticulum',
        'Centriole'
      ],
      correct: 1,
      explanation: 'The acrosome is a cap-like structure covering the anterior portion of the sperm nucleus. It is formed by the Golgi apparatus of the spermatid and is packed with hydrolytic enzymes (hyaluronidase and acrosin) that dissolve the corona radiata and zona pellucida during fertilization.'
    },
    {
      id: 'bio-mcq-3',
      chapterId: 'bio-ch-3',
      chapterName: 'Ch 3: Reproductive Health',
      subtopicId: 'bio-sub-3-1',
      difficulty: 'easy',
      question: 'Which of the following intrauterine devices (IUDs) releases copper ions (Cu²⁺) to suppress sperm motility and fertilizing capacity?',
      options: [
        'Lippes loop',
        'Progestasert',
        'CuT and Multiload 375',
        'LNG-20'
      ],
      correct: 2,
      explanation: 'CuT, Cu7, and Multiload 375 are copper-releasing IUDs. The released Cu²⁺ ions suppress sperm motility and their fertilizing capacity. Lippes loop is non-medicated, while Progestasert and LNG-20 are hormone-releasing IUDs.'
    },
    {
      id: 'bio-mcq-4',
      chapterId: 'bio-ch-4',
      chapterName: 'Ch 4: Principles of Inheritance and Variation',
      subtopicId: 'bio-sub-4-1',
      difficulty: 'medium',
      question: 'A human male suffering from Klinefelter\'s syndrome has a chromosome complement of:',
      options: [
        '44 + XO (45 chromosomes)',
        '44 + XXY (47 chromosomes)',
        '44 + XYY (47 chromosomes)',
        '45 + XY (47 chromosomes)'
      ],
      correct: 1,
      explanation: 'Klinefelter\'s syndrome is caused by the presence of an extra copy of the X chromosome, resulting in the karyotype 47, XXY (44 autosomes + XXY sex chromosomes). Individuals have overall masculine development with feminine features like gynaecomastia and are sterile.'
    },
    {
      id: 'bio-mcq-5',
      chapterId: 'bio-ch-5',
      chapterName: 'Ch 5: Molecular Basis of Inheritance',
      subtopicId: 'bio-sub-5-4',
      difficulty: 'hard',
      question: 'In the Jacob-Monod Lac Operon model of Escherichia coli, the repressor protein synthesized by the regulator gene binds to the:',
      options: [
        'Promoter site',
        'Operator site',
        'Structural gene z',
        'CAP site'
      ],
      correct: 1,
      explanation: 'In the absence of lactose (inducer), the active repressor protein synthesized constitutively by the i-gene binds specifically to the operator (o) gene, sterically preventing RNA polymerase from transcribing the structural genes (z, y, a).'
    },
    {
      id: 'bio-mcq-6',
      chapterId: 'bio-ch-6',
      chapterName: 'Ch 6: Evolution',
      subtopicId: 'bio-sub-6-2',
      difficulty: 'easy',
      question: 'The presence of homologous organs such as the forelimbs of humans, cheetahs, whales, and bats provides anatomical evidence for:',
      options: [
        'Convergent evolution',
        'Divergent evolution',
        'Saltation',
        'Retrogressive evolution'
      ],
      correct: 1,
      explanation: 'Homologous organs share a common anatomical origin, basic structural plan, and embryonic development, but have adapted to perform different functions in response to different ecological niches, illustrating divergent evolution.'
    }
  ],

  psychology: [
    {
      id: 'psy-mcq-1',
      chapterId: 'psy-ch-1',
      chapterName: 'Ch 1: Variations in Psychological Attributes',
      subtopicId: 'psy-sub-1-2',
      difficulty: 'hard',
      question: "According to Robert Sternberg's Triarchic Theory of Intelligence, an individual who excels at analyzing, planning, monitoring, and evaluating problem-solving steps is demonstrating high:",
      options: [
        'Componential (Analytical) Intelligence',
        'Experiential (Creative) Intelligence',
        'Contextual (Practical) Intelligence',
        'Spatial Intelligence'
      ],
      correct: 0,
      explanation: 'Componential or analytical intelligence involves the mental mechanisms used in information processing: meta-components (planning and evaluation), performance components (execution), and knowledge acquisition components.'
    },
    {
      id: 'psy-mcq-2',
      chapterId: 'psy-ch-1',
      chapterName: 'Ch 1: Variations in Psychological Attributes',
      subtopicId: 'psy-sub-1-4',
      difficulty: 'medium',
      question: 'A 10-year-old child successfully solves items on the Stanford-Binet test designed for an average 13-year-old. What is the child\'s calculated Intelligence Quotient (IQ)?',
      options: ['130', '100', '115', '77'],
      correct: 0,
      explanation: 'Using the historical formula IQ = (Mental Age / Chronological Age) × 100 = (13 / 10) × 100 = 130 (Superior / Very High intelligence).'
    },
    {
      id: 'psy-mcq-3',
      chapterId: 'psy-ch-1',
      chapterName: 'Ch 1: Variations in Psychological Attributes',
      subtopicId: 'psy-sub-1-5',
      difficulty: 'medium',
      question: 'Which of the following is a mandatory diagnostic criterion for Intellectual Disability according to the DSM-5 / AAMR classification?',
      options: [
        'IQ score below 70, deficits in adaptive behaviour, with onset before the age of 18 years',
        'IQ score below 90 accompanied by learning disability',
        'Pure academic failure in school regardless of everyday social skills',
        'High creativity combined with low arithmetic skills'
      ],
      correct: 0,
      explanation: 'Intellectual disability requires: (1) significantly sub-average general intellectual functioning (IQ < 70), (2) concurrent deficits in adaptive behaviour (daily living, communication, social skills), and (3) manifestation during the developmental period (before 18 years).'
    },
    {
      id: 'psy-mcq-4',
      chapterId: 'psy-ch-1',
      chapterName: 'Ch 1: Variations in Psychological Attributes',
      subtopicId: 'psy-sub-1-7',
      difficulty: 'hard',
      question: 'The "Threshold Theory" of the relationship between intelligence and creativity states that:',
      options: [
        'A certain minimum baseline level of intelligence (around IQ 110-120) is required for high creativity, but beyond that threshold they are relatively independent',
        'High intelligence guarantees extraordinary creative genius',
        'Creativity and intelligence are inversely related',
        'Intelligence tests measure divergent thinking rather than convergent thinking'
      ],
      correct: 0,
      explanation: 'Threshold theory posits that a minimum IQ (~110-120) is necessary to have the basic cognitive resources for creative thought, but beyond that level, non-cognitive factors (curiosity, task commitment, divergent thinking) determine creative achievement.'
    },
    {
      id: 'psy-mcq-5',
      chapterId: 'psy-ch-2',
      chapterName: 'Ch 2: Self and Personality',
      subtopicId: 'psy-sub-2-1',
      difficulty: 'easy',
      question: 'Albert Bandura defined self-efficacy as:',
      options: [
        'An individual\'s belief in their own capability to organize and execute actions required to achieve designated goals',
        'The overall positive or negative evaluation a person attaches to their self-worth',
        'The degree to which personal behaviour is controlled by external environmental reinforcement',
        'The unconditional acceptance received from parents in early childhood'
      ],
      correct: 0,
      explanation: 'Self-efficacy refers to task-specific confidence in one\'s own abilities, which strongly influences the initiation of coping behaviour, amount of effort expended, and persistence in the face of obstacles.'
    },
    {
      id: 'psy-mcq-6',
      chapterId: 'psy-ch-2',
      chapterName: 'Ch 2: Self and Personality',
      subtopicId: 'psy-sub-2-5',
      difficulty: 'medium',
      question: 'Individuals who are excessively competitive, impatient, chronically rushed for time, and prone to hostility are classified as having which personality type, and are at higher risk for:',
      options: [
        'Type A personality ; Coronary heart disease',
        'Type B personality ; Peptic ulcers',
        'Type C personality ; Rheumatoid arthritis',
        'Type D personality ; Asthma'
      ],
      correct: 0,
      explanation: 'Friedman and Rosenman established that Type A behaviour pattern (hostility, competitive drive, time urgency) is a potent independent risk factor for coronary heart disease and hypertension.'
    },
    {
      id: 'psy-mcq-7',
      chapterId: 'psy-ch-2',
      chapterName: 'Ch 2: Self and Personality',
      subtopicId: 'psy-sub-2-6',
      difficulty: 'easy',
      question: 'In the Big Five (Five-Factor) Model of personality (OCEAN), an individual who is highly organized, dependable, disciplined, and goal-directed scores high on:',
      options: [
        'Conscientiousness',
        'Openness to experience',
        'Agreeableness',
        'Extraversion'
      ],
      correct: 0,
      explanation: 'Conscientiousness reflects impulse control, high organization, self-discipline, planfulness, and strong achievement orientation.'
    },
    {
      id: 'psy-mcq-8',
      chapterId: 'psy-ch-2',
      chapterName: 'Ch 2: Self and Personality',
      subtopicId: 'psy-sub-2-7',
      difficulty: 'easy',
      question: 'In Freud\'s structural model of personality, the structure that operates entirely on the "reality principle" and acts as a mediator is the:',
      options: [
        'Ego',
        'Id',
        'Superego',
        'Libido'
      ],
      correct: 0,
      explanation: 'The Ego operates on the reality principle, delaying instinctual gratification until appropriate environmental conditions are found, mediating between the demands of the Id, Superego, and reality.'
    },
    {
      id: 'psy-mcq-9',
      chapterId: 'psy-ch-3',
      chapterName: 'Ch 3: Meeting Life Challenges',
      subtopicId: 'psy-sub-3-1',
      difficulty: 'medium',
      question: 'According to Lazarus and Folkman\'s Cognitive Appraisal Model, "Secondary Appraisal" involves:',
      options: [
        'Assessing one\'s available personal and social coping resources and options to manage the stressor',
        'Judging whether the event represents harm, threat, or challenge',
        'Immediate sympathetic nervous system fight-or-flight discharge',
        'Denial of the stressful situation through defense mechanisms'
      ],
      correct: 0,
      explanation: 'Primary appraisal evaluates the nature and significance of the stressor (harm, threat, challenge), while secondary appraisal assesses the individual\'s coping resources, abilities, and strategies.'
    },
    {
      id: 'psy-mcq-10',
      chapterId: 'psy-ch-3',
      chapterName: 'Ch 3: Meeting Life Challenges',
      subtopicId: 'psy-sub-3-3',
      difficulty: 'easy',
      question: 'In Hans Selye\'s General Adaptation Syndrome (GAS), during which stage does the body sustain prolonged physiological coping before its adaptive energy is depleted?',
      options: [
        'Resistance stage',
        'Alarm reaction stage',
        'Exhaustion stage',
        'Homeostasis stage'
      ],
      correct: 0,
      explanation: 'The three stages of GAS are: (1) Alarm Reaction, (2) Resistance Stage (where the body adapts and sustains coping efforts with elevated endocrine output), and (3) Exhaustion Stage (where reserves collapse).'
    },
    {
      id: 'psy-mcq-11',
      chapterId: 'psy-ch-3',
      chapterName: 'Ch 3: Meeting Life Challenges',
      subtopicId: 'psy-sub-3-5',
      difficulty: 'medium',
      question: 'When a situation is genuinely uncontrollable (such as coping with the death of a close family member), which coping strategy is empirically found to be most adaptive?',
      options: [
        'Emotion-focused coping (seeking emotional support, acceptance, positive reappraisal)',
        'Problem-focused coping (direct alteration of the external stressor)',
        'Aggressive confrontation',
        'Complete emotional suppression'
      ],
      correct: 0,
      explanation: 'When external stressors cannot be changed (uncontrollable events like bereavement), emotion-focused coping helps regulate internal emotional turmoil and distress effectively.'
    }
  ]
};
