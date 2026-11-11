// NCERT Class 12 Chemistry Remaining Chapters (Ch 3, 5, 8, 9, 10) Structured Notes Database
// Oswaal-grade definitions, key points, mnemonics, commonly made errors, assertion-reason, and exam trends

export const CHEMISTRY_REMAINING_STRUCTURED_NOTES = {
  // ==========================================================================
  // CHAPTER 3: CHEMICAL KINETICS
  // ==========================================================================
  'chem-sub-3-1': {
    definitions: [
      {
        term: 'Average vs Instantaneous Rate of Reaction',
        definition: 'Average rate is the change in molar concentration divided by time interval ($r_{\\text{av}} = -\\Delta[R]/\\Delta t = +\\Delta[P]/\\Delta t$). Instantaneous rate is the rate at a specific instant $t$ ($r_{\\text{inst}} = -d[R]/dt = +d[P]/dt$).'
      }
    ],
    keyPoints: [
      '• <strong>Stoichiometric Equivalence:</strong> For $aA + bB \\longrightarrow cC + dD$, $\\text{Rate} = -\\frac{1}{a}\\frac{d[A]}{dt} = -\\frac{1}{b}\\frac{d[B]}{dt} = +\\frac{1}{c}\\frac{d[C]}{dt} = +\\frac{1}{d}\\frac{d[D]}{dt}$.',
      '• <strong>Standard Unit:</strong> $\\text{mol L}^{-1}\\text{ s}^{-1}$ (or $\\text{atm s}^{-1}$ for gases), which never changes with reaction order.'
    ],
    extraPoints: [
      '• Rate of reaction is always positive; the negative sign before $d[R]/dt$ simply converts the negative concentration change of reactants into a positive rate.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Divide by Stoichiometry for Unique Rate',
      phrase: 'Reactants get Minus (−1/a), Products get Plus (+1/c)',
      explanation: 'Always divide individual species rates by their stoichiometric coefficients before equating them.'
    },
    commonlyMadeErrors: [
      {
        error: 'Multiplying instead of dividing by the stoichiometric coefficient when finding rate of reaction.',
        tip: 'For 2N₂O₅ ⟶ 4NO₂ + O₂, Rate = −(1/2)d[N₂O₅]/dt = +(1/4)d[NO₂]/dt.',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'The rate of a reaction generally decreases with passage of time.',
      reason: 'Rate of reaction is directly proportional to the concentration of reactants, which decreases as the reaction proceeds (except for zero-order reactions).',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'As reactants are consumed, collision frequency drops.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2020',
      frequency: 'High Frequency',
      typicalMarks: '2 Marks',
      questionTypes: 'Calculate rate of formation of one species given rate of disappearance of another',
      hotTopic: 'Ammonia synthesis N₂ + 3H₂ ⟶ 2NH₃ stoichiometric rate relation'
    }
  },
  'chem-sub-3-2': {
    definitions: [
      {
        term: 'Order of a Reaction (n = x + y)',
        definition: 'The sum of powers of the concentration of the reactants in the experimentally determined rate law expression ($\text{Rate} = k[A]^x[B]^y$). It can be 0, 1, 2, 3, or even a fraction.'
      },
      {
        term: 'Molecularity of an Elementary Reaction',
        definition: 'The number of reacting species (atoms, ions, or molecules) taking part in an elementary reaction which must collide simultaneously in order to bring about a chemical reaction.'
      }
    ],
    keyPoints: [
      '• <strong>Order vs Molecularity:</strong> Order is experimental, can be zero/fractional, and applies to complex reactions (governed by slowest Rate-Determining Step); Molecularity is theoretical, always a positive integer (1, 2, or 3), and applies ONLY to a single elementary step.',
      '• <strong>Master Formula for Unit of $k$:</strong> $\\text{Unit of } k = \\text{mol}^{1-n}\\text{ L}^{n-1}\\text{ s}^{-1}$.'
    ],
    extraPoints: [
      '• Reactions of molecularity $> 3$ are extremely rare because the probability of 4 or more molecules colliding simultaneously with proper energy and orientation is negligible.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Order vs Molecularity',
      phrase: 'Order = Experimental (0, ½, 1, 2) | Molecularity = Elementary Collision Count (1, 2, 3 only — NEVER 0!)',
      explanation: 'Top 2-mark distinction question in Chemical Kinetics.'
    },
    commonlyMadeErrors: [
      {
        error: 'Determining reaction order directly from balanced stoichiometric coefficients of a complex reaction.',
        tip: 'Look at the units of rate constant k or experimental initial-rate table to determine order!',
        penalty: 'Loss of 1 mark.'
      }
    ],
    assertionReason: {
      assertion: 'The molecularity of a reaction can never be zero or fractional.',
      reason: 'Molecularity is the number of reacting molecules colliding simultaneously in an elementary step.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'At least one molecule is needed for an elementary step.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2019',
      frequency: '99% Guaranteed',
      typicalMarks: '2 Marks / 3 Marks',
      questionTypes: 'Differentiate between order and molecularity; find order from units of k',
      hotTopic: 'Initial rate table method to find x, y, and k'
    }
  },
  'chem-sub-3-3': {
    definitions: [
      {
        term: 'Half-Life of a Reaction (t₁/₂)',
        definition: 'The time in which the concentration of a reactant is reduced to one-half of its initial concentration ($[R] = [R]_0 / 2$).'
      },
      {
        term: 'Pseudo First-Order Reaction',
        definition: 'A chemical reaction of higher molecularity ($\ge 2$) that follows first-order kinetics because one of the reactants (usually solvent water) is present in large excess.'
      }
    ],
    keyPoints: [
      '• <strong>Zero Order ($n = 0$):</strong> $k = \\frac{[R]_0 - [R]}{t}$, $t_{1/2} = \\frac{[R]_0}{2k}$ ($t_{1/2} \\propto [R]_0$). Linear plot: $[R]$ vs $t$ has slope $= -k$.',
      '• <strong>First Order ($n = 1$):</strong> $k = \\frac{2.303}{t}\\log\\frac{[R]_0}{[R]}$, $t_{1/2} = \\frac{0.693}{k}$ ($t_{1/2}$ is strictly INDEPENDENT of $[R]_0$!). Linear plot: $\\log[R]$ vs $t$ has slope $= -k/2.303$.',
      '• <strong>Golden Time Ratios for 1st Order:</strong> $t_{99.9\\%} = 10 \\times t_{1/2}$; $t_{99\\%} = 2 \\times t_{90\\%}$; $t_{75\\%} = 2 \\times t_{1/2}$.'
    ],
    extraPoints: [
      '• Acid-catalysed hydrolysis of ethyl acetate is pseudo-first-order, whereas alkaline saponification ($\\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{NaOH}$) is a true second-order reaction.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Half-Life Dependence on [R]₀',
      phrase: 'General Law: t₁/₂ ∝ [R]₀^(1 − n) ⟹ Zero Order: t₁/₂ ∝ [R]₀¹ | First Order: t₁/₂ ∝ [R]₀⁰ (Constant!)',
      explanation: 'Instantly solves any graph or MCQ on half-life vs initial concentration.'
    },
    commonlyMadeErrors: [
      {
        error: 'Substituting percentage completed (e.g., 75%) directly as [R] instead of remaining concentration (100 − 75 = 25%) in log([R]₀/[R]).',
        tip: '[R] in the denominator is ALWAYS the concentration REMAINING unreacted at time t!',
        penalty: 'Loss of 2 marks in numericals.'
      }
    ],
    assertionReason: {
      assertion: 'The half-life period of a first-order reaction is independent of the initial concentration of the reactant.',
      reason: 'For a first-order reaction, t₁/₂ = 0.693 / k, which contains no concentration term.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Doubling [R]₀ also doubles the rate, keeping time for 50% completion constant.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2021, 2020',
      frequency: '99% Guaranteed 3M/5M Numerical',
      typicalMarks: '3 Marks / 5 Marks',
      questionTypes: 'First-order integrated rate law numerical + slope of log[R] vs t graph',
      hotTopic: 'Prove t_99.9% = 10 × t_1/2 or calculate time for 80% completion'
    }
  },
  'chem-sub-3-4': {
    definitions: [
      {
        term: 'Activation Energy (Eₐ)',
        definition: 'The extra energy that reactant molecules must acquire over and above their average kinetic energy in order to reach the threshold energy and form the intermediate activated complex.'
      }
    ],
    keyPoints: [
      '• <strong>Arrhenius Equations:</strong> $k = A e^{-E_a/RT}$ and $\\log\\frac{k_2}{k_1} = \\frac{E_a}{2.303 R}\\left[\\frac{T_2 - T_1}{T_1 T_2}\\right]$.',
      '• <strong>Role of Catalyst:</strong> Lowers $E_a$ by providing an alternate mechanism; does NOT change $\\Delta G$, $\\Delta H$, or $K_{\\text{eq}}$.'
    ],
    extraPoints: [
      '• Activation energy $E_a$ can never be zero or negative for an elementary reaction according to Arrhenius equation.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Arrhenius Slope & Unit Guard',
      phrase: 'Plot of log k vs 1/T has Slope = −Eₐ / (2.303 R) | Always convert kJ to J (× 1000)!',
      explanation: 'Since R = 8.314 J K⁻¹ mol⁻¹, Eₐ must be in Joules!'
    },
    commonlyMadeErrors: [
      {
        error: 'Using Eₐ in kJ/mol directly with R = 8.314 J K⁻¹ mol⁻¹ without multiplying Eₐ by 1000.',
        tip: 'Always convert Eₐ into J mol⁻¹ (e.g. 50 kJ/mol = 50,000 J/mol) before dividing by 2.303 × 8.314.',
        penalty: 'Loss of 1.5 marks.'
      }
    ],
    assertionReason: {
      assertion: 'A positive catalyst increases the rate of a chemical reaction without altering the equilibrium constant.',
      reason: 'A catalyst lowers the activation energy for both forward and backward reactions to the same extent.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Both k_f and k_b increase by the same factor, so K_eq = k_f/k_b stays constant.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2020, 2018',
      frequency: 'High Frequency',
      typicalMarks: '3 Marks',
      questionTypes: 'Calculate Eₐ when rate doubles/quadruples between T₁ and T₂',
      hotTopic: 'log(k₂/k₁) numerical with log 2 = 0.3010 or log 4 = 0.6021'
    }
  },
  'chem-sub-3-5': {
    definitions: [
      {
        term: 'Effective Collision & Steric Factor (P)',
        definition: 'Collisions in which molecules collide with sufficient kinetic energy ($\ge$ threshold energy) AND proper steric orientation so as to facilitate breaking of old bonds and formation of new bonds: $k = P \\cdot Z_{AB} e^{-E_a/RT}$.'
      }
    ],
    keyPoints: [
      '• <strong>Two Barriers to Reaction:</strong> (1) Energy Barrier ($E \\ge E_{\\text{th}}$), and (2) Orientation Barrier (Steric factor $P$).'
    ],
    extraPoints: [],
    reactions: [],
    oswaalMnemonic: {
      title: 'Two Keys for Effective Collision',
      phrase: 'Effective Collision = Threshold Energy (E_th) + Proper Orientation (P)',
      explanation: 'Both keys must turn simultaneously for product formation.'
    },
    commonlyMadeErrors: [
      {
        error: 'Assuming every collision with energy ≥ Eₐ forms products.',
        tip: 'Without proper steric orientation (P), even high-energy collisions bounce off elastically!',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'All collisions between reactant molecules do not lead to the formation of products.',
      reason: 'Only those collisions in which molecules have correct orientation and kinetic energy equal to or greater than threshold energy are effective.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Both energy and orientation criteria must be met.'
    },
    examTrend: {
      pastYears: 'CBSE 2023, 2020',
      frequency: 'Moderate',
      typicalMarks: '2 Marks',
      questionTypes: 'Define collision frequency and steric factor',
      hotTopic: 'Two conditions for effective collisions'
    }
  },

  // ==========================================================================
  // CHAPTER 5: COORDINATION COMPOUNDS
  // ==========================================================================
  'chem-sub-5-1': {
    definitions: [
      {
        term: 'Coordination Entity vs Double Salt',
        definition: 'A double salt (e.g. Mohr’s salt) dissociates completely into simple ions in water, whereas a coordination entity (e.g. $[\\text{Fe(CN)}_6]^{4-}$) retains its structural identity in solution.'
      },
      {
        term: 'Chelate Ligand & Ambidentate Ligand',
        definition: 'A di- or polydentate ligand that uses two or more donor atoms to bind a single metal ion forming a ring is a chelating ligand (e.g. en, $\\text{EDTA}^{4-}$). A unidentate ligand with two different donor atoms that binds through only one at a time is ambidentate ($\\text{NO}_2^-$, $\\text{SCN}^-$).'
      }
    ],
    keyPoints: [
      '• <strong>Werner’s Postulates:</strong> Primary valence = Oxidation state (ionisable); Secondary valence = Coordination number (non-ionisable, directional).',
      '• <strong>Silver Nitrate Precipitation Test:</strong> $\\text{CoCl}_3\\cdot 6\\text{NH}_3 \\equiv [\\text{Co(NH}_3)_6]\\text{Cl}_3$ gives $3\\text{ mol AgCl}$; $\\text{CoCl}_3\\cdot 5\\text{NH}_3 \\equiv [\\text{Co(NH}_3)_5\\text{Cl}]\\text{Cl}_2$ gives $2\\text{ mol AgCl}$; $\\text{CoCl}_3\\cdot 4\\text{NH}_3 \\equiv [\\text{Co(NH}_3)_4\\text{Cl}_2]\\text{Cl}$ gives $1\\text{ mol AgCl}$.'
    ],
    extraPoints: [
      '• Chelate complexes are thermodynamically much more stable than complexes with unidentate ligands due to positive entropy change ($\\Delta S > 0$) when bound water molecules are released.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'AgCl Moles = Counter Chloride Ions Outside Brackets',
      phrase: '3 AgCl ⟹ [M(L)₆]Cl₃ (4 ions) | 2 AgCl ⟹ [M(L)₅Cl]Cl₂ (3 ions) | 1 AgCl ⟹ [M(L)₄Cl₂]Cl (2 ions)',
      explanation: 'Only counter-ions outside the square bracket precipitate with AgNO₃!'
    },
    commonlyMadeErrors: [
      {
        error: 'Writing denticity of EDTA⁴⁻ as 4 instead of 6.',
        tip: 'Ethylenediaminetetraacetate (EDTA⁴⁻) is HEXADENTATE (6 donor atoms: 2 Nitrogen + 4 Oxygen atoms).',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'Chelate complexes are more stable than similar complexes containing unidentate ligands.',
      reason: 'Formation of chelate rings increases entropy (ΔS > 0) and prevents easy dissociation of the ligand.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Known as the Chelate Effect.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020',
      frequency: 'High Frequency',
      typicalMarks: '2 Marks',
      questionTypes: 'Werner AgNO₃ precipitation stoichiometry, ambidentate ligand definition',
      hotTopic: 'Formula of CrCl₃·6H₂O from moles of AgCl precipitated'
    }
  },
  'chem-sub-5-2': {
    definitions: [
      {
        term: 'Homoleptic vs Heteroleptic Complexes',
        definition: 'Complexes in which the metal is bound to only one kind of donor group are homoleptic ($[\\text{Co(NH}_3)_6]^{3+}$); those bound to more than one kind of donor group are heteroleptic ($[\\text{Co(NH}_3)_4\\text{Cl}_2]^+$).'
      }
    ],
    keyPoints: [
      '• <strong>IUPAC Golden Rules:</strong> Alphabetical ligands first ⟶ Metal (append <em>-ate</em> if complex ion is negative!) ⟶ Roman numeral oxidation state in parentheses with NO spaces inside the complex name.'
    ],
    extraPoints: [],
    reactions: [],
    oswaalMnemonic: {
      title: 'Double "m" in ammine',
      phrase: 'NH₃ ligand is spelled "ammine" (two m’s); organic group is "amine" (one m)!',
      explanation: 'Always check whether the coordination sphere is cationic (cobalt, platinum, chromium) or anionic (cobaltate, platinate, chromate).'
    },
    commonlyMadeErrors: [
      {
        error: 'Using "cobaltate" or "platinate" for a cationic complex like [Co(NH₃)₆]Cl₃.',
        tip: 'Use "-ate" ONLY when the coordination sphere carries a negative charge (is written second, e.g., K₃[Fe(CN)₆]).',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'The IUPAC name of K₃[Al(C₂O₄)₃] is Potassium trioxalatoaluminate(III).',
      reason: 'In an anionic coordination entity, the name of the central metal atom ends with the suffix -ate.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: '[Al(C₂O₄)₃]³⁻ is an anionic complex.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020, 2019',
      frequency: '99% Guaranteed',
      typicalMarks: '2 Marks / 3 Marks',
      questionTypes: 'Write IUPAC names of given complexes or write formulas from IUPAC names',
      hotTopic: 'IUPAC nomenclature of complexes with (en), oxalato, and ambidentate ligands'
    }
  },
  'chem-sub-5-3': {
    definitions: [
      {
        term: 'Linkage, Ionisation & Solvate Isomerism',
        definition: 'Linkage isomerism arises from ambidentate ligands ($\\text{NO}_2^-/\\text{ONO}^-$); Ionisation isomerism arises from exchange of ligand and counter-ion ($[\\text{Co(NH}_3)_5\\text{SO}_4]\\text{Br}$ vs $[\\text{Co(NH}_3)_5\\text{Br}]\\text{SO}_4$); Solvate isomerism differs in number of water molecules as ligands.'
      }
    ],
    keyPoints: [
      '• <strong>Optical Activity Rule:</strong> $\\text{cis-}[\\text{M(aa)}_2\\text{X}_2]$ and $[\\text{M(aa)}_3]$ are chiral and optically active ($d$ and $l$ enantiomers), whereas $\\text{trans-}[\\text{M(aa)}_2\\text{X}_2]$ has a plane of symmetry and is optically INACTIVE.'
    ],
    extraPoints: [],
    reactions: [],
    oswaalMnemonic: {
      title: 'cis is Chiral, trans is Symmetric',
      phrase: 'In [Co(en)₂Cl₂]⁺: cis = Optically Active (d & l pair) | trans = Optically Inactive (Plane of Symmetry)',
      explanation: 'Total stereoisomers of [Co(en)₂Cl₂]⁺ = 3 (d-cis, l-cis, and trans).'
    },
    commonlyMadeErrors: [
      {
        error: 'Drawing optical isomers for trans-[Co(en)₂Cl₂]⁺ or geometrical isomers for tetrahedral complexes.',
        tip: 'Tetrahedral complexes NEVER show geometrical isomerism; trans-[M(aa)₂X₂] NEVER shows optical isomerism!',
        penalty: '1.5 marks lost.'
      }
    ],
    assertionReason: {
      assertion: 'Tetrahedral complexes of type [MA₂B₂] do not exhibit geometrical isomerism.',
      reason: 'The relative positions of all four unidentate ligands attached to the central metal atom in a tetrahedral geometry are equidistant (109.5°) from each other.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'There are no distinct cis (90°) and trans (180°) positions in a regular tetrahedron.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2021, 2019',
      frequency: '99% Guaranteed',
      typicalMarks: '3 Marks',
      questionTypes: 'Draw cis/trans and d/l isomers of [Co(en)₂Cl₂]⁺ or [Pt(NH₃)₂Cl₂]',
      hotTopic: 'Stereoisomers of [Co(en)₂Cl₂]⁺ and [Co(en)₃]³⁺'
    }
  },
  'chem-sub-5-5': {
    definitions: [
      {
        term: 'Crystal Field Splitting Energy (Δ₀ & Δ_t)',
        definition: 'The energy separation between the split $t_{2g}$ and $e_g$ sets of d-orbitals in an electrostatic ligand field. For tetrahedral vs octahedral fields: $\\Delta_t = \\frac{4}{9}\\Delta_0$.'
      },
      {
        term: 'Synergic Bonding in Metal Carbonyls',
        definition: 'Mutual reinforcement of the metal–carbon bond in metal carbonyls via $\\text{M}\\leftarrow\\text{CO}$ $\\sigma$-donation and $\\text{M}\\rightarrow\\text{CO}$ $\\pi^*$-backbonding.'
      }
    ],
    keyPoints: [
      '• <strong>Four Must-Know VBT Comparisons:</strong>\n  1. $[\\text{Co(NH}_3)_6]^{3+}$ ($3d^6$, strong $\\text{NH}_3$): $d^2sp^3$, Inner orbital, Diamagnetic ($n=0$).\n  2. $[\\text{CoF}_6]^{3-}$ ($3d^6$, weak $\\text{F}^-$): $sp^3d^2$, Outer orbital, Paramagnetic ($n=4, \\mu=4.90\\text{ BM}$).\n  3. $[\\text{Ni(CN)}_4]^{2-}$ ($3d^8$, strong $\\text{CN}^-$): $dsp^2$, Square Planar, Diamagnetic ($n=0$).\n  4. $[\\text{NiCl}_4]^{2-}$ ($3d^8$, weak $\\text{Cl}^-$): $sp^3$, Tetrahedral, Paramagnetic ($n=2, \\mu=2.83\\text{ BM}$).'
    ],
    extraPoints: [
      '• $[\\text{Ni(CO)}_4]$ has $\\text{Ni}(0)$ ($3d^8 4s^2 \\to 3d^{10}$ under strong CO ligand), so it is $sp^3$ Tetrahedral and Diamagnetic!'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Strong vs Weak Field Ligand Quick Rule',
      phrase: 'CO, CN⁻, en, NH₃ = Strong Field (Pair Up, Δ₀ > P, Low Spin) | Halides (I⁻, Br⁻, Cl⁻, F⁻), H₂O = Weak Field (No Pairing, Δ₀ < P, High Spin)',
      explanation: 'Solves 100% of VBT and CFT board questions!'
    },
    commonlyMadeErrors: [
      {
        error: 'Writing [Ni(CO)₄] as dsp² square planar because CO is a strong field ligand.',
        tip: 'In [Ni(CO)₄], Ni is in 0 oxidation state (3d¹⁰ after pairing). Since all five 3d orbitals are completely full, hybridisation uses 4s and 4p to give sp³ TETRAHEDRAL!',
        penalty: 'Loss of 1.5 marks.'
      }
    ],
    assertionReason: {
      assertion: '[Ni(CN)₄]²⁻ is square planar and diamagnetic whereas [NiCl₄]²⁻ is tetrahedral and paramagnetic.',
      reason: 'CN⁻ is a strong field ligand that causes pairing of 3d⁸ electrons into dsp² hybridisation, while Cl⁻ is a weak field ligand leading to sp³ hybridisation with 2 unpaired electrons.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Field strength of ligand dictates pairing and hybridisation.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020, 2018',
      frequency: '99% Guaranteed 3M/5M Question',
      typicalMarks: '3 Marks / 5 Marks',
      questionTypes: 'VBT hybridisation and magnetic moment comparison; CFT d⁴ configuration for Δ₀ > P and Δ₀ < P',
      hotTopic: '[Co(NH₃)₆]³⁺ vs [CoF₆]³⁻ and [Ni(CN)₄]²⁻ vs [NiCl₄]²⁻'
    }
  },

  // ==========================================================================
  // CHAPTER 8: ALDEHYDES, KETONES AND CARBOXYLIC ACIDS
  // ==========================================================================
  'chem-sub-8-1': {
    definitions: [
      {
        term: 'Rosenmund, Stephen & Etard Reactions',
        definition: 'Rosenmund reduces $\\text{RCOCl}$ with $\\text{H}_2/\\text{Pd-BaSO}_4$ to $\\text{RCHO}$; Stephen reduces $\\text{RCN}$ with $\\text{SnCl}_2/\\text{HCl}$ to $\\text{RCHO}$; Etard oxidises toluene with $\\text{CrO}_2\\text{Cl}_2$ in $\\text{CS}_2$ to benzaldehyde.'
      }
    ],
    keyPoints: [
      '• <strong>Selective Aldehyde Synthesis:</strong> DIBAL-H (Diisobutylaluminium hydride) selectively reduces both nitriles ($\\text{RCN}$) and esters ($\\text{RCOOR\'}$) into aldehydes without reducing double bonds.'
    ],
    extraPoints: [],
    reactions: [],
    oswaalMnemonic: {
      title: 'Aldehyde Quartet Named Reactions',
      phrase: 'Rosenmund (Pd/BaSO₄) — Stephen (SnCl₂/HCl) — Etard (CrO₂Cl₂) — Gatterman-Koch (CO + HCl / AlCl₃)',
      explanation: 'All four produce Aldehydes exclusively (never ketones)!'
    },
    commonlyMadeErrors: [
      {
        error: 'Using CrO₃ in conc. H₂SO₄ instead of CrO₂Cl₂ in CS₂ for Etard reaction.',
        tip: 'Etard reaction specifically uses Chromyl Chloride (CrO₂Cl₂) in CS₂ followed by H₃O⁺.',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'In Rosenmund reduction, barium sulphate (BaSO₄) is added to the palladium catalyst.',
      reason: 'BaSO₄ acts as a catalytic poison that prevents further reduction of the aldehyde into a primary alcohol.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Stops hydrogenation at the aldehyde stage.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020',
      frequency: '99% Guaranteed',
      typicalMarks: '2 Marks / 3 Marks',
      questionTypes: 'Complete the reaction or write named reaction equations',
      hotTopic: 'Rosenmund, Stephen, and Etard reactions'
    }
  },
  'chem-sub-8-3': {
    definitions: [
      {
        term: "Tollens' Test, Fehling's Test & Iodoform Test",
        definition: "Tollens' reagent (ammoniacal $\\text{AgNO}_3$) gives a silver mirror with all aldehydes; Fehling's solution gives a red $\\text{Cu}_2\\text{O}$ ppt with aliphatic aldehydes only; Iodoform ($\\text{NaOH} + \\text{I}_2$) gives yellow $\\text{CHI}_3$ ppt with methyl ketones ($\\text{CH}_3\\text{CO}-$) and $\\text{CH}_3\\text{CH(OH)}-\\text{}$ alcohols."
      }
    ],
    keyPoints: [
      '• <strong>Nucleophilic Addition Reactivity Order:</strong> $\\text{HCHO} > \\text{CH}_3\\text{CHO} > \\text{C}_6\\text{H}_5\\text{CHO} > \\text{CH}_3\\text{COCH}_3 > \\text{C}_6\\text{H}_5\\text{COCH}_3 > \\text{C}_6\\text{H}_5\\text{COC}_6\\text{H}_5$ (governed by steric hindrance and $+I / +R$ electronic effects).',
      '• <strong>Semicarbazide Trap:</strong> Semicarbazide ($\\text{NH}_2-\\text{NH}-\\text{CO}-\\text{NH}_2$) has two $-\\text{NH}_2$ groups, but ONLY the $-\\text{NH}_2$ group NOT directly attached to $>\\text{C=O}$ participates in hydrazone formation because the other $-\\text{NH}_2$ lone pair is delocalised in resonance with the carbonyl group!'
    ],
    extraPoints: [],
    reactions: [],
    oswaalMnemonic: {
      title: 'Distinction Test Master Key',
      phrase: 'Aldehyde vs Ketone ⟶ Tollens (Ag Mirror) | Aliphatic vs Benzaldehyde ⟶ Fehling (Red Cu₂O) | Methyl Ketone (CH₃CO–) ⟶ Iodoform (Yellow CHI₃)',
      explanation: 'Solves every single organic distinction question in Chapter 8!'
    },
    commonlyMadeErrors: [
      {
        error: 'Using Fehling’s test to distinguish Benzaldehyde from Acetophenone.',
        tip: 'NEITHER Benzaldehyde nor Acetophenone reacts with Fehling’s solution! Use Tollens’ test (Benzaldehyde gives silver mirror) or Iodoform test (Acetophenone gives yellow CHI₃ ppt).',
        penalty: 'Loss of 1 mark.'
      }
    ],
    assertionReason: {
      assertion: 'Aldehydes are more reactive than ketones towards nucleophilic addition reactions.',
      reason: 'Ketones have two alkyl groups that cause greater steric hindrance and reduce the electrophilicity of the carbonyl carbon by +I effect.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Both steric and electronic factors favour aldehydes.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020, 2019',
      frequency: '99% Guaranteed 5M Question',
      typicalMarks: '3 Marks / 5 Marks',
      questionTypes: 'Arrange in reactivity order + semicarbazide reason + chemical distinction tests',
      hotTopic: 'Distinguish Propanal vs Propanone, Benzaldehyde vs Acetophenone, Pentan-2-one vs Pentan-3-one'
    }
  },
  'chem-sub-8-4': {
    definitions: [
      {
        term: 'Aldol Condensation vs Cannizzaro Reaction',
        definition: 'Aldol condensation occurs in aldehydes/ketones having $\\ge 1$ $\\alpha$-hydrogen with dilute alkali to give $\\alpha,\\beta$-unsaturated carbonyls; Cannizzaro disproportionation occurs in aldehydes with NO $\\alpha$-hydrogen ($\\text{HCHO}, \\text{C}_6\\text{H}_5\\text{CHO}$) with $50\\%$ conc. alkali.'
      }
    ],
    keyPoints: [
      '• <strong>Aldol Example:</strong> $2\\,\\text{CH}_3\\text{CHO} \\xrightarrow{\\text{dil. NaOH}} \\text{CH}_3\\text{CH(OH)CH}_2\\text{CHO} \\xrightarrow{\\Delta, -\\text{H}_2\\text{O}} \\text{CH}_3\\text{CH=CHCHO}$ (But-2-enal).',
      '• <strong>Cannizzaro Example:</strong> $2\\,\\text{C}_6\\text{H}_5\\text{CHO} + \\text{conc. NaOH} \\longrightarrow \\text{C}_6\\text{H}_5\\text{CH}_2\\text{OH} + \\text{C}_6\\text{H}_5\\text{COONa}$.'
    ],
    extraPoints: [],
    reactions: [],
    oswaalMnemonic: {
      title: 'Alpha-H Check for Alkali Reaction',
      phrase: 'Has α-H + Dilute NaOH ⟶ Aldol Condensation | Zero α-H + Conc. (50%) NaOH ⟶ Cannizzaro (Alcohol + Salt)',
      explanation: 'Always count α-hydrogens on the carbon directly attached to –CHO!'
    },
    commonlyMadeErrors: [
      {
        error: 'Stopping Aldol condensation at 3-hydroxybutanal (Aldol) without heating to eliminate H₂O.',
        tip: '"Aldol reaction" forms 3-hydroxybutanal; "Aldol condensation" includes dehydration on heating to form But-2-enal! Always write both steps.',
        penalty: '0.5 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'Formaldehyde (HCHO) and Benzaldehyde (C₆H₅CHO) undergo Cannizzaro reaction with 50% NaOH.',
      reason: 'Neither Formaldehyde nor Benzaldehyde possesses an α-hydrogen atom.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Absence of α-H prevents enolate formation, leading to hydride transfer disproportionation.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020',
      frequency: '99% Guaranteed',
      typicalMarks: '2 Marks / 3 Marks',
      questionTypes: 'Write equations for Aldol condensation, Cross-Aldol, and Cannizzaro reaction',
      hotTopic: 'Aldol vs Cannizzaro products'
    }
  },
  'chem-sub-8-5': {
    definitions: [
      {
        term: 'Hell-Volhard-Zelinsky (HVZ) Reaction',
        definition: 'Carboxylic acids having an $\\alpha$-hydrogen are halogenated at the $\\alpha$-position on treatment with $\\text{Cl}_2$ or $\\text{Br}_2$ in the presence of a small amount of Red Phosphorus: $\\text{RCH}_2\\text{COOH} \\xrightarrow{\\text{1. X}_2/\\text{Red P, 2. H}_2\\text{O}} \\text{RCH(X)COOH}$.'
      }
    ],
    keyPoints: [
      '• <strong>Acidity Rule:</strong> Electron-withdrawing groups ($-I, -R$: $-\\text{CF}_3 > -\\text{NO}_2 > -\\text{CN} > -\\text{F} > -\\text{Cl} > -\\text{Br} > -\\text{I} > -\\text{C}_6\\text{H}_5$) INCREASE acidity (LOWER $pK_a$). Electron-donating alkyl groups ($+I$) DECREASE acidity (HIGHER $pK_a$).',
      '• <strong>Phenol vs Carboxylic Acid Distinction:</strong> Carboxylic acids react with $\\text{NaHCO}_3$ to give brisk effervescence of $\\text{CO}_2$ gas; Phenols do NOT react with $\\text{NaHCO}_3$.'
    ],
    extraPoints: [],
    reactions: [],
    oswaalMnemonic: {
      title: 'Kₐ vs pKₐ Inverse Trap',
      phrase: 'Stronger Acid = Higher Kₐ = LOWER pKₐ (EWG pulls electrons, stabilises RCOO⁻)',
      explanation: 'Read carefully whether the exam question asks for increasing order of "acid strength" or increasing order of "pKₐ"!'
    },
    commonlyMadeErrors: [
      {
        error: 'Using NaBH₄ to reduce a carboxylic acid to a primary alcohol.',
        tip: 'NaBH₄ CANNOT reduce carboxylic acids! Use LiAlH₄ or Diborane (B₂H₆) followed by H₃O⁺.',
        penalty: '1 mark deduction in conversions.'
      }
    ],
    assertionReason: {
      assertion: 'Carboxylic acids do not give the characteristic nucleophilic addition reactions of aldehydes and ketones (such as 2,4-DNP test).',
      reason: 'The lone pair of electrons on the –OH oxygen of the carboxyl group is involved in resonance with the >C=O group, making the carboxyl carbon less electrophilic.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: '+R resonance of –OH reduces positive charge on carboxyl carbon.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020',
      frequency: '99% Guaranteed',
      typicalMarks: '3 Marks',
      questionTypes: 'Arrange substituted acids in order of acidity / pKₐ; HVZ reaction',
      hotTopic: 'Acidity order of fluoroacetic, chloroacetic, acetic, and benzoic acids'
    }
  },

  // ==========================================================================
  // CHAPTER 9: AMINES
  // ==========================================================================
  'chem-sub-9-1': {
    definitions: [
      {
        term: 'Gabriel Phthalimide & Hoffmann Bromamide Reactions',
        definition: 'Gabriel synthesis converts phthalimide ($\\text{KOH}, \\text{R-X}, \\text{NaOH(aq)}$) into pure $1^\\circ$ aliphatic amines; Hoffmann bromamide degrades an amide ($\\text{RCONH}_2 + \\text{Br}_2 + 4\\text{NaOH}$) into a $1^\\circ$ amine with one fewer carbon.'
      }
    ],
    keyPoints: [
      '• <strong>Why Aniline Cannot be Prepared by Gabriel Synthesis:</strong> Aryl halides ($\\text{C}_6\\text{H}_5\\text{Cl}/\\text{Br}$) do NOT undergo nucleophilic substitution with the potassium phthalimide anion due to partial double-bond character of the C–X bond (resonance).'
    ],
    extraPoints: [],
    reactions: [],
    oswaalMnemonic: {
      title: 'Step-Down vs Step-Up Amine Conversions',
      phrase: 'Hoffmann Bromamide (Br₂/NaOH) = Step-DOWN (−1 Carbon) | Nitrile Reduction (KCN + LiAlH₄) = Step-UP (+1 Carbon)',
      explanation: 'Essential for all organic conversions in Chapter 9!'
    },
    commonlyMadeErrors: [
      {
        error: 'Forgetting to balance 4 moles of NaOH in Hoffmann bromamide degradation (RCONH₂ + Br₂ + 4NaOH ⟶ RNH₂ + Na₂CO₃ + 2NaBr + 2H₂O).',
        tip: 'Memorise the coefficients 1 : 1 : 4 on the reactant side.',
        penalty: '0.5 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'Aromatic primary amines cannot be prepared by Gabriel phthalimide synthesis.',
      reason: 'Aryl halides do not undergo nucleophilic substitution with the anion formed by phthalimide.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'sp² C–X bond cleavage in aryl halides is energetically unfavourable.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020',
      frequency: '99% Guaranteed',
      typicalMarks: '2 Marks / 3 Marks',
      questionTypes: 'Why Gabriel synthesis fails for aniline; Hoffmann bromamide equation',
      hotTopic: 'Gabriel synthesis limitation and Hoffmann step-down conversion'
    }
  },
  'chem-sub-9-2': {
    definitions: [
      {
        term: 'Basicity of Amines (K_b & pK_b)',
        definition: 'Amines act as Lewis bases due to the unshared lone pair on nitrogen. Stronger base = Larger $K_b$ = Smaller $pK_b$.'
      }
    ],
    keyPoints: [
      '• <strong>Three Master Basicity Orders:</strong>\n  1. <em>Gas Phase:</em> $3^\\circ > 2^\\circ > 1^\\circ > \\text{NH}_3$ (Purely $+I$ effect).\n  2. <em>Aqueous Ethyl ($\\text{C}_2\\text{H}_5$):</em> $2^\\circ > 3^\\circ > 1^\\circ > \\text{NH}_3$ (**231**).\n  3. <em>Aqueous Methyl ($\\text{CH}_3$):</em> $2^\\circ > 1^\\circ > 3^\\circ > \\text{NH}_3$ (**213**).\n  4. <em>Aromatic vs Aliphatic:</em> Aliphatic amines $> \\text{NH}_3 >$ Aniline (lone pair delocalised into benzene ring).'
    ],
    extraPoints: [],
    reactions: [],
    oswaalMnemonic: {
      title: '213 Methyl vs 231 Ethyl Aqueous Basicity Code',
      phrase: 'Smaller Methyl group = Smaller number 213 (2° > 1° > 3°) | Bigger Ethyl group = Bigger number 231 (2° > 3° > 1°)',
      explanation: 'Combine +I effect, hydration (H-bonding), and steric hindrance!'
    },
    commonlyMadeErrors: [
      {
        error: 'Writing the same order when asked for increasing pK_b instead of increasing basic strength.',
        tip: 'pK_b is INVERSELY related to basic strength! Strongest base has the SMALLEST pK_b.',
        penalty: 'Loss of 1 mark.'
      }
    ],
    assertionReason: {
      assertion: 'pK_b of aniline is more than that of methylamine.',
      reason: 'In aniline, the lone pair of electrons on nitrogen is delocalised into the benzene ring by resonance and is less available for protonation.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Higher pK_b means weaker base.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020, 2019',
      frequency: '99% Guaranteed',
      typicalMarks: '3 Marks',
      questionTypes: 'Arrange amines in order of basic strength / pK_b in gas phase and aqueous solution',
      hotTopic: '231 vs 213 basicity order + pK_b of aniline vs methylamine'
    }
  },
  'chem-sub-9-3': {
    definitions: [
      {
        term: "Carbylamine Test & Hinsberg's Reagent",
        definition: "Carbylamine test ($\\text{CHCl}_3 + \\text{alc. KOH}$) gives foul-smelling isocyanide ($\\text{R-NC}$) with $1^\\circ$ amines only. Hinsberg's reagent is Benzenesulphonyl chloride ($\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$)."
      }
    ],
    keyPoints: [
      '• <strong>Distinction Summary:</strong>\n  – $1^\\circ$ vs $2^\\circ/3^\\circ$ Amine: Carbylamine test (only $1^\\circ$ gives foul smell).\n  – $1^\\circ$ vs $2^\\circ$ vs $3^\\circ$ Amine: Hinsberg reagent ($1^\\circ$ soluble in KOH; $2^\\circ$ insoluble in KOH; $3^\\circ$ no reaction).\n  – Ethylamine (Aliphatic $1^\\circ$) vs Aniline (Aromatic $1^\\circ$): Azo Dye Test with $\\text{NaNO}_2/\\text{HCl}$ ($0$–$5^\\circ\\text{C}$) + $\\beta$-naphthol (Aniline gives orange-red dye; Ethylamine gives brisk $\\text{N}_2$ gas).'
    ],
    extraPoints: [],
    reactions: [],
    oswaalMnemonic: {
      title: 'Hinsberg 1-2-3 Rule',
      phrase: '1° Reacts & Dissolves in KOH (1 acidic H left) | 2° Reacts & Insoluble in KOH (0 H left) | 3° No Reaction!',
      explanation: 'Guaranteed 2M/3M distinction test.'
    },
    commonlyMadeErrors: [
      {
        error: 'Using Carbylamine test to distinguish between Aniline and Ethylamine.',
        tip: 'BOTH Aniline and Ethylamine are primary (1°) amines, so BOTH give a positive Carbylamine test! Use the Azo Dye test instead.',
        penalty: 'Loss of 1 mark.'
      }
    ],
    assertionReason: {
      assertion: 'Tertiary amines do not undergo acylation or react with Hinsberg’s reagent.',
      reason: 'Tertiary amines do not contain any replaceable hydrogen atom attached to the nitrogen atom.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Elimination of HCl requires an N–H proton.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2021, 2019',
      frequency: '99% Guaranteed',
      typicalMarks: '2 Marks / 3 Marks',
      questionTypes: 'Chemical tests to distinguish 1°, 2°, 3° amines and aliphatic vs aromatic amines',
      hotTopic: 'Hinsberg test, Carbylamine reaction, and Azo dye test'
    }
  },
  'chem-sub-9-4': {
    definitions: [
      {
        term: 'Zwitterion of Sulphanilic Acid',
        definition: 'Sulphonation of aniline with conc. $\\text{H}_2\\text{SO}_4$ at $453$–$473\\text{ K}$ yields $p$-aminobenzenesulphonic acid, which exists as an internal dipolar salt ($^+\\text{H}_3\\text{N}-\\text{C}_6\\text{H}_4-\\text{SO}_3^-$).'
      }
    ],
    keyPoints: [
      '• <strong>Three Must-Know Aniline Anomalies:</strong>\n  1. <em>47% meta-Nitroaniline on direct nitration:</em> Acidic medium protonates aniline to meta-directing anilinium ion ($-\\text{NH}_3^+$).\n  2. <em>No Friedel-Crafts reaction:</em> Lewis base aniline forms insoluble salt $[\\text{C}_6\\text{H}_5\\text{NH}_2^+\\text{AlCl}_3^-]$ with Lewis acid catalyst $\\text{AlCl}_3$.\n  3. <em>Acetylation before monobromination/nitration:</em> $-\\text{NHCOCH}_3$ moderates activating power via amide resonance.'
    ],
    extraPoints: [],
    reactions: [],
    oswaalMnemonic: {
      title: 'Aniline Acid/Lewis-Acid Traps',
      phrase: 'HNO₃/H₂SO₄ ⟶ Anilinium ion −NH₃⁺ (47% meta!) | Anhyd. AlCl₃ ⟶ Salt formation (0% Friedel-Crafts!)',
      explanation: 'Two of the most repeated Give-Reason questions in CBSE Organic Chemistry.'
    },
    commonlyMadeErrors: [
      {
        error: 'Writing that anilinium ion is ortho-para directing.',
        tip: 'Aniline (–NH₂) is ortho-para directing, but protonated Anilinium ion (–NH₃⁺) is strongly deactivating and META-directing!',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'Aniline does not undergo Friedel-Crafts alkylation or acylation.',
      reason: 'Aniline forms a salt with anhydrous AlCl₃ (Lewis acid), due to which nitrogen acquires a positive charge and acts as a strong deactivating group.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Lewis acid-base adduct deactivates the ring.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020, 2018',
      frequency: '99% Guaranteed',
      typicalMarks: '3 Marks',
      questionTypes: 'Give reasons for 47% meta-nitroaniline, Friedel-Crafts failure, and acetylation protection',
      hotTopic: 'Electrophilic substitution anomalies of Aniline'
    }
  },
  'chem-sub-9-5': {
    definitions: [
      {
        term: 'Diazotisation & Azo Coupling',
        definition: 'Conversion of primary aromatic amine into diazonium salt with $\\text{NaNO}_2 + \\text{HCl}$ at $273$–$278\\text{ K}$ is diazotisation; electrophilic coupling of $\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^-$ with phenol (orange dye) or aniline (yellow dye) is azo coupling.'
      }
    ],
    keyPoints: [
      '• <strong>Resonance Stability:</strong> Arenediazonium ion ($\\text{C}_6\\text{H}_5\\text{N}_2^+$) is stabilised by resonance dispersal of positive charge over the benzene ring; alkanediazonium ion ($\\text{R-N}_2^+$) has no resonance and decomposes immediately to $\\text{R-OH} + \\text{N}_2\\uparrow$.'
    ],
    extraPoints: [],
    reactions: [],
    oswaalMnemonic: {
      title: 'Azo Coupling Dye Colours',
      phrase: 'Diazonium + Phenol (OH⁻) = Orange Dye | Diazonium + Aniline (H⁺) = Yellow Dye | H₃PO₂ or Ethanol = Benzene!',
      explanation: 'High-yield roadmap completion reactions.'
    },
    commonlyMadeErrors: [
      {
        error: 'Carrying out diazotisation above 278 K (5°C).',
        tip: 'Above 278 K, benzenediazonium chloride hydrolyses with water to form Phenol + N₂ + HCl!',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'Arenediazonium salts are much more stable than alkanediazonium salts in cold aqueous solution.',
      reason: 'The aryl diazonium ion is stabilised by resonance involving the π-electrons of the benzene ring.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Delocalisation of positive charge stabilises C–N bond.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020',
      frequency: '99% Guaranteed',
      typicalMarks: '3 Marks',
      questionTypes: 'Complete A ⟶ B ⟶ C roadmaps involving C₆H₅N₂⁺Cl⁻',
      hotTopic: 'Sandmeyer, H₃PO₂ reduction, and Azo dye coupling'
    }
  },

  // ==========================================================================
  // CHAPTER 10: BIOMOLECULES
  // ==========================================================================
  'chem-sub-10-1': {
    definitions: [
      {
        term: 'Anomers & Invert Sugar',
        definition: 'Cyclic stereoisomers of monosaccharides differing in configuration only at C-1 (anomeric carbon) are anomers ($\\alpha$- and $\\beta$-D-glucose). Hydrolysis of dextrorotatory sucrose ($+66.5^\\circ$) yields a laevorotatory mixture of D-(+)-glucose ($+52.5^\\circ$) and D-($-$)-fructose ($-92.4^\\circ$), called Invert Sugar.'
      }
    ],
    keyPoints: [
      '• <strong>Three Classic Glucose Reactions:</strong>\n  1. $\\text{D-Glucose} + \\text{HI}(\\Delta) \\longrightarrow n\\text{-Hexane}$ (proves straight chain of 6 carbons).\n  2. $\\text{D-Glucose} + \\text{Br}_2\\text{ water} \\longrightarrow \\text{D-Gluconic acid}$ (proves $-\\text{CHO}$ group).\n  3. $\\text{D-Glucose} + \\text{conc. HNO}_3 \\longrightarrow \\text{Saccharic acid}$ (proves primary $-\\text{CH}_2\\text{OH}$ group).',
      '• <strong>Three Reactions NOT Explained by Open-Chain Structure:</strong> (1) Does not give Schiff’s test or $\\text{NaHSO}_3$ addition product; (2) Glucose pentaacetate does not react with $\\text{NH}_2\\text{OH}$; (3) Exists in two crystalline forms ($\\alpha$ and $\\beta$).'
    ],
    extraPoints: [],
    reactions: [],
    oswaalMnemonic: {
      title: 'Glucose Reagent Trio',
      phrase: 'HI = n-Hexane (Chain) | Br₂ water = Gluconic Acid (Aldehyde) | HNO₃ = Saccharic Acid (Primary Alcohol)',
      explanation: 'Asked in almost every single CBSE Chemistry board paper!'
    },
    commonlyMadeErrors: [
      {
        error: 'Writing that Sucrose is a reducing sugar.',
        tip: 'Sucrose is a NON-REDUCING sugar because the reducing groups of both glucose (C1) and fructose (C2) are locked in the glycosidic bond! Maltose and Lactose are reducing sugars.',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'D-Glucose does not react with sodium hydrogensulphite (NaHSO₃) or Schiff’s reagent.',
      reason: 'In D-glucose, the –CHO group at C-1 is locked in a cyclic hemiacetal (pyranose) ring with the –OH group at C-5.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Very little free open-chain aldehyde exists in equilibrium.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020, 2019',
      frequency: '99% Guaranteed 3M Question',
      typicalMarks: '3 Marks',
      questionTypes: 'Reactions of D-glucose with HI, Br₂ water, HNO₃ + limitations of open-chain structure',
      hotTopic: 'Glucose structural elucidation reactions & Amylose vs Amylopectin'
    }
  },
  'chem-sub-10-2': {
    definitions: [
      {
        term: 'Peptide Linkage & Denaturation of Proteins',
        definition: 'Peptide linkage ($-\\text{CO}-\\text{NH}-$) is the amide bond linking $\\alpha$-amino acids. Denaturation is the loss of biological activity of a native protein due to unfolding of $2^\\circ$ and $3^\\circ$ structures (H-bonds broken) on heating or pH change, while $1^\\circ$ structure remains intact.'
      }
    ],
    keyPoints: [
      '• <strong>Fibrous vs Globular Proteins:</strong> Fibrous (Keratin, Myosin — parallel chains, water-insoluble) vs Globular (Insulin, Albumin, Haemoglobin — spherical coiled chains, water-soluble).'
    ],
    extraPoints: [],
    reactions: [],
    oswaalMnemonic: {
      title: 'Denaturation Survivor',
      phrase: 'Denaturation breaks 2° and 3° (H-bonds uncoil), but Primary (1° Peptide Sequence) ALWAYS Survives!',
      explanation: 'Example: Boiling of egg white (coagulation) and curdling of milk.'
    },
    commonlyMadeErrors: [
      {
        error: 'Stating that peptide bonds break during denaturation of proteins.',
        tip: 'Denaturation only disrupts hydrogen bonds and secondary/tertiary folding; covalent peptide bonds (1° structure) are NOT hydrolysed!',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'All naturally occurring α-amino acids except glycine are optically active.',
      reason: 'In glycine (H₂N–CH₂–COOH), the α-carbon atom is attached to two hydrogen atoms and is achiral.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'R = H in glycine eliminates chirality.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020',
      frequency: '99% Guaranteed',
      typicalMarks: '2 Marks / 3 Marks',
      questionTypes: 'Denaturation of proteins, fibrous vs globular, essential vs non-essential amino acids',
      hotTopic: 'Denaturation of protein + Zwitterion structure'
    }
  },
  'chem-sub-10-3': {
    definitions: [
      {
        term: 'Water-Soluble vs Fat-Soluble Vitamins',
        definition: 'Vitamins B-complex and C are water-soluble (excreted in urine, except $\\text{B}_{12}$); Vitamins A, D, E, K are fat-soluble and stored in liver and adipose tissue.'
      }
    ],
    keyPoints: [
      '• <strong>Key Deficiencies:</strong> Vitamin A $\\to$ Night blindness/Xerophthalmia; $\\text{B}_1 \\to$ Beri-beri; $\\text{B}_2 \\to$ Cheilosis; $\\text{B}_6 \\to$ Convulsions; $\\text{B}_{12} \\to$ Pernicious anaemia; C $\\to$ Scurvy; D $\\to$ Rickets; K $\\to$ Increased blood clotting time.'
    ],
    extraPoints: [],
    reactions: [],
    oswaalMnemonic: {
      title: 'Fat-Soluble KEDA',
      phrase: 'K-E-D-A are Fat-Soluble (Stored in Liver) | B & C are Water-Soluble (Washed out in Urine, except B₁₂)',
      explanation: 'Explains why Vitamin C must be taken daily in diet.'
    },
    commonlyMadeErrors: [
      {
        error: 'Writing that Vitamin B₁₂ is excreted in urine like other B-vitamins.',
        tip: 'Vitamin B₁₂ (Cyanocobalamin) is the ONLY water-soluble vitamin that can be stored in the liver!',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'Vitamin C cannot be stored in our body and must be supplied regularly in the diet.',
      reason: 'Vitamin C is water-soluble and is readily excreted in urine.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Water solubility leads to rapid renal excretion.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2020',
      frequency: 'High Frequency',
      typicalMarks: '2 Marks',
      questionTypes: 'Why Vitamin C cannot be stored; deficiency diseases of Vitamins A, B₁₂, C, D, K',
      hotTopic: 'Vitamin deficiency table and water solubility'
    }
  },
  'chem-sub-10-4': {
    definitions: [
      {
        term: 'Nucleoside, Nucleotide & Phosphodiester Linkage',
        definition: 'Sugar + Base ($\\text{C-1\'}$) = Nucleoside; Nucleoside + Phosphate ($\\text{C-5\'}$) = Nucleotide; Dinucleotides are linked between $5\'$ and $3\'$ carbons of pentose sugar by a Phosphodiester linkage.'
      }
    ],
    keyPoints: [
      '• <strong>DNA vs RNA:</strong> DNA has $\\beta$-D-2-deoxyribose, Thymine (A=T, G$\\equiv$C), double-stranded $\\alpha$-helix, and replicates; RNA has $\\beta$-D-ribose, Uracil (U instead of T), is single-stranded, and directs protein synthesis.'
    ],
    extraPoints: [],
    reactions: [],
    oswaalMnemonic: {
      title: 'DNA Thymine vs RNA Uracil',
      phrase: 'DNA = Deoxyribose + Thymine (2 H-bonds with A) | RNA = Ribose + Uracil (Single Stranded)',
      explanation: 'Remember: G and C always pair via THREE hydrogen bonds (G≡C); A and T pair via TWO hydrogen bonds (A=T).'
    },
    commonlyMadeErrors: [
      {
        error: 'Writing that the two strands of DNA are identical to each other.',
        tip: 'The two strands of DNA are COMPLEMENTARY and antiparallel to each other (NOT identical) because A pairs with T and G pairs with C!',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'The two strands of DNA are not identical but are complementary to each other.',
      reason: 'Hydrogen bonds are formed specifically between Adenine and Thymine (A=T) and between Guanine and Cytosine (G≡C).',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Base sequence on one strand automatically fixes the complementary sequence on the other.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020',
      frequency: '99% Guaranteed',
      typicalMarks: '2 Marks / 3 Marks',
      questionTypes: 'Structural and functional differences between DNA and RNA; nucleoside vs nucleotide',
      hotTopic: 'DNA vs RNA comparison and complementary base pairing'
    }
  }
};
