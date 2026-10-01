// NCERT Class 12 CBSE Visual Chemical Reaction & Mechanism Diagrams Database
// Provides structural diagram representations, reaction flow schemes, mechanism pathways, and board tips

export const REACTION_DIAGRAMS = [
  // ==========================================================================
  // CHAPTER 6: HALOALKANES AND HALOARENES
  // ==========================================================================
  {
    id: 'rxn-sn2-mechanism',
    subtopicId: 'chem-sub-6-5',
    chapterId: 'chem-ch-6',
    title: 'SN2 Bimolecular Nucleophilic Substitution Mechanism',
    subtitle: 'Concerted One-Step Reaction with Complete Walden Inversion',
    category: 'mechanism',
    boardNote: 'Examiner Focus: Show 180° backside attack of Nu⁻, pentacoordinate planar transition state with dotted partial bonds, and inverted umbrella configuration (Walden Inversion).',
    diagramType: 'sn2',
    reactants: [
      {
        name: 'Nucleophile (Hydroxide)',
        formula: 'HO⁻',
        structure: 'lone-pair',
        sub: 'Approaches from 180° opposite leaving group'
      },
      {
        name: 'Alkyl Halide (Chloromethane)',
        formula: 'CH₃Cl',
        structure: 'tetrahedral',
        sub: 'Substrate with polarized C(δ+)—Cl(δ−)'
      }
    ],
    conditions: {
      solvent: 'Polar Aprotic (Acetone / DMSO)',
      order: 'Second Order: Rate = k[R-X][Nu⁻]',
      timing: 'Concerted (Bond formation & cleavage occur simultaneously)'
    },
    transitionState: {
      name: 'Pentacoordinate Transition State',
      formula: '[HO ··· CH₃ ··· Cl]‡',
      charge: 'δ− on HO and δ− on Cl',
      geometry: 'Central Carbon is sp² hybridized, planar with three C-H bonds in plane'
    },
    products: [
      {
        name: 'Methanol (Inverted Product)',
        formula: 'HO—CH₃',
        isMajor: true,
        stereochem: '100% Walden Inversion of Configuration'
      },
      {
        name: 'Chloride Ion (Leaving Group)',
        formula: 'Cl⁻',
        isMajor: false,
        stereochem: 'Stable departed anion'
      }
    ],
    mechanismSteps: [
      '1. Backside Attack: The nucleophile (:OH⁻) attacks the electrophilic carbon from exactly 180° opposite the C—Cl bond to minimize electrostatic repulsion.',
      '2. Activated Complex [‡]: Forms a high-energy transition state where C—OH is partially formed and C—Cl is partially broken. The carbon is briefly sp² planar.',
      '3. Inversion & Departure: The leaving group (Cl⁻) departs with its electron pair. The three hydrogen bonds flip over like an umbrella in a storm (Walden Inversion).'
    ],
    reactivityOrder: 'CH₃X > 1° > 2° > 3° (Tertiary is practically unreactive due to severe steric crowding by alkyl groups)'
  },

  {
    id: 'rxn-sn1-mechanism',
    subtopicId: 'chem-sub-6-5',
    chapterId: 'chem-ch-6',
    title: 'SN1 Unimolecular Nucleophilic Substitution Mechanism',
    subtitle: 'Two-Step Reaction via Planar Carbocation Intermediate with Racemization',
    category: 'mechanism',
    boardNote: 'Examiner Focus: Step 1 is slow (r.d.s) generating planar sp² carbocation; Step 2 is fast attack from either top or bottom face, yielding equal retention and inversion (Racemization).',
    diagramType: 'sn1',
    reactants: [
      {
        name: 'Tert-Butyl Bromide (3° Halide)',
        formula: '(CH₃)₃C—Br',
        structure: 'tetrahedral',
        sub: 'Bulky substrate, highly hindered for backside attack'
      }
    ],
    conditions: {
      solvent: 'Polar Protic (H₂O, EtOH, AcOH to solvate ions)',
      order: 'First Order: Rate = k[R-X]',
      temp: 'Room Temperature'
    },
    intermediate: {
      name: 'Planar Carbocation Intermediate',
      formula: '[(CH₃)₃C]⁺',
      geometry: 'sp² Hybridized, Trigonal Planar (120° bond angles, empty p-orbital perpendicular)'
    },
    products: [
      {
        name: 'Retention Product (50%)',
        formula: '(CH₃)₃C—OH',
        isMajor: true,
        note: 'Nu attacks from front face'
      },
      {
        name: 'Inversion Product (50%)',
        formula: 'HO—C(CH₃)₃',
        isMajor: true,
        note: 'Nu attacks from rear face'
      }
    ],
    mechanismSteps: [
      'Step 1 (Slow, Rate-Determining Step): Heterolytic cleavage of C—Br bond assisted by polar protic solvent creates a stable planar 3° carbocation intermediate and Br⁻.',
      'Step 2 (Fast): Nucleophile (H₂O) attacks the unshielded planar carbocation with equal 50% probability from both front and back faces.',
      'Step 3 (Deprotonation): Fast loss of H⁺ yields an equimolar enantiomeric mixture (Racemic Mixture, optically inactive).'
    ],
    reactivityOrder: '3° > 2° > 1° > CH₃X (Governed strictly by carbocation stability: 3° carbocation stabilized by 9 hyperconjugative structures and +I effects)'
  },

  {
    id: 'rxn-saytzeff-elimination',
    subtopicId: 'chem-sub-6-6',
    chapterId: 'chem-ch-6',
    title: 'Saytzeff’s Rule (β-Elimination / Dehydrohalogenation)',
    subtitle: 'Formation of More Substituted, Thermodynamically Stable Alkene',
    category: 'organic',
    boardNote: 'Board Rule: In dehydrohalogenation reactions, the preferred product is that alkene which has the greater number of alkyl groups attached to the doubly bonded carbon atoms.',
    diagramType: 'saytzeff',
    reactants: [
      {
        name: '2-Bromobutane',
        formula: 'CH₃—CH₂—CH(Br)—CH₃',
        structure: 'chain',
        sub: 'Has two distinct β-carbons: β₁ (CH₃) and β₂ (CH₂)'
      }
    ],
    conditions: {
      reagent: 'Alcoholic KOH (alc. KOH)',
      heat: 'Heat (Δ)',
      process: 'β-Elimination'
    },
    products: [
      {
        name: 'But-2-ene (Saytzeff Product)',
        formula: 'CH₃—CH=CH—CH₃',
        yield: '81% (Major Product)',
        isMajor: true,
        note: 'Disubstituted alkene with 6 hyperconjugative α-hydrogens'
      },
      {
        name: 'But-1-ene (Hofmann Product)',
        formula: 'CH₃—CH₂—CH=CH₂',
        yield: '19% (Minor Product)',
        isMajor: false,
        note: 'Monosubstituted alkene with only 2 hyperconjugative α-hydrogens'
      }
    ],
    mechanismSteps: [
      '1. Base Attack: Alcoholic ethoxide ion (C₂H₅O⁻/OH⁻) abstracts a proton from the more substituted β-carbon (C-3 possessing fewer hydrogens).',
      '2. Double Bond Formation: C—H bonding electrons shift inward to form the π-bond between C-2 and C-3.',
      '3. Halide Expulsion: Bromide (Br⁻) leaves simultaneously with K⁺ forming KBr and H₂O.'
    ],
    boardTip: 'Exam Question: Write major and minor products when 2-bromobutane is heated with alcoholic KOH. Always write Saytzeff rule statement and specify But-2-ene as 81% major product.'
  },

  {
    id: 'rxn-finkelstein-swarts',
    subtopicId: 'chem-sub-6-3',
    chapterId: 'chem-ch-6',
    title: 'Halogen Exchange Reactions: Finkelstein & Swarts',
    subtitle: 'Preparation of Alkyl Iodides and Alkyl Fluorides',
    category: 'organic',
    boardNote: 'Examiner Focus: Finkelstein uses NaI in dry acetone (NaCl/NaBr precipitates out driving reaction forward by Le Chatelier’s principle). Swarts uses heavy metal fluorides (AgF, Hg₂F₂, CoF₂).',
    diagramType: 'halogen-exchange',
    reactants: [
      {
        name: 'Alkyl Chloride / Bromide',
        formula: 'R—Cl / R—Br',
        structure: 'linear'
      }
    ],
    reactions: [
      {
        name: 'Finkelstein Reaction',
        reagent: 'NaI in Dry Acetone',
        equation: 'R—X + NaI ⟶ R—I + NaX↓  (where X = Cl, Br)',
        product: 'Alkyl Iodide (R—I)',
        drivingForce: 'NaCl and NaBr are insoluble in dry acetone and precipitate out, shifting equilibrium to the right.'
      },
      {
        name: 'Swarts Reaction',
        reagent: 'AgF / Hg₂F₂ / CoF₃ / SbF₃',
        equation: 'CH₃—Br + AgF ⟶ CH₃—F + AgBr↓',
        product: 'Alkyl Fluoride (Fluoroalkane)',
        drivingForce: 'Precipitation of insoluble AgBr and thermodynamic strength of C—F bond.'
      }
    ],
    boardTip: 'Distinguish clearly: Finkelstein produces R-I (using NaI/acetone); Swarts produces R-F (using AgF).'
  },

  {
    id: 'rxn-wurtz-fittig',
    subtopicId: 'chem-sub-6-7',
    chapterId: 'chem-ch-6',
    title: 'Organometallic Coupling: Wurtz, Wurtz-Fittig & Fittig',
    subtitle: 'Sodium-Mediated Carbon-Carbon Bond Formation in Dry Ether',
    category: 'organic',
    boardNote: 'Examiner Focus: Dry ether solvent is crucial because Na and Grignard react violently with traces of moisture.',
    diagramType: 'coupling',
    reactions: [
      {
        name: '1. Wurtz Reaction (Aliphatic + Aliphatic)',
        equation: '2 R—X + 2 Na ⟶ R—R + 2 NaX (in Dry Ether)',
        example: '2 CH₃—Cl + 2 Na ⟶ CH₃—CH₃ (Ethane) + 2 NaCl',
        note: 'Best for symmetrical higher alkanes with even number of carbons.'
      },
      {
        name: '2. Wurtz-Fittig Reaction (Aromatic + Aliphatic)',
        equation: 'C₆H₅—X + R—X + 2 Na ⟶ C₆H₅—R + 2 NaX (in Dry Ether)',
        example: 'Chlorobenzene + Chloromethane + 2 Na ⟶ Toluene (Methylbenzene) + 2 NaCl',
        note: 'Prepares alkylarenes.'
      },
      {
        name: '3. Fittig Reaction (Aromatic + Aromatic)',
        equation: '2 C₆H₅—Cl + 2 Na ⟶ C₆H₅—C₆H₅ (Biphenyl/Diphenyl) + 2 NaCl (in Dry Ether)',
        example: 'Two chlorobenzene molecules couple together',
        note: 'Prepares diaryl compounds.'
      }
    ],
    boardTip: 'Question: "Why is dry ether used in Wurtz reaction?" Answer: Sodium is highly reactive with moisture/water (2Na + 2H₂O ⟶ 2NaOH + H₂↑), and any water would convert alkyl radicals into alkanes instead of coupled product.'
  },

  {
    id: 'rxn-darzens-thionyl',
    subtopicId: 'chem-sub-6-3',
    chapterId: 'chem-ch-6',
    title: 'Darzens Process: Alcohol with Thionyl Chloride',
    subtitle: 'Best Method for Preparing Pure Alkyl Chlorides',
    category: 'organic',
    boardNote: 'Frequent 1-Mark Question: Why is thionyl chloride (SOCl₂) preferred over PCl₅ or PCl₃ for preparing alkyl chlorides?',
    diagramType: 'reagent-flow',
    equation: 'R—OH + SOCl₂ ⟶ R—Cl + SO₂↑ + HCl↑  (in Pyridine/Reflux)',
    reactants: [
      { name: 'Alcohol', formula: 'R—OH' },
      { name: 'Thionyl Chloride', formula: 'SOCl₂' }
    ],
    products: [
      { name: 'Alkyl Chloride', formula: 'R—Cl', isMajor: true, note: 'Pure liquid product' },
      { name: 'Sulfur Dioxide Gas', formula: 'SO₂↑', note: 'Escapes directly into air' },
      { name: 'Hydrogen Chloride Gas', formula: 'HCl↑', note: 'Escapes directly into air' }
    ],
    boardTip: 'Key Answer: Both by-products (SO₂ and HCl) are escapable gases, leaving behind virtually pure alkyl chloride without demanding separation techniques.'
  },

  // ==========================================================================
  // CHAPTER 7: ALCOHOLS, PHENOLS AND ETHERS
  // ==========================================================================
  {
    id: 'rxn-cumene-to-phenol',
    subtopicId: 'chem-sub-7-2',
    chapterId: 'chem-ch-7',
    title: 'Industrial Preparation of Phenol from Cumene',
    subtitle: 'Aerial Oxidation followed by Acid Hydrolysis (Hock Rearrangement)',
    category: 'organic',
    boardNote: 'Most frequently tested reaction in CBSE Board: Cumene (isopropylbenzene) oxidation gives cumene hydroperoxide, which upon acid hydrolysis produces Phenol along with valuable by-product Acetone.',
    diagramType: 'cumene',
    reactants: [
      {
        name: 'Cumene (Isopropylbenzene)',
        formula: 'C₆H₅—CH(CH₃)₂',
        structure: 'benzene-branch',
        sub: 'Manufactured by Friedel-Crafts alkylation of benzene with propene'
      }
    ],
    steps: [
      {
        stepNum: 1,
        title: 'Aerial Auto-Oxidation',
        reagent: 'O₂ (Air), 368-408 K',
        intermediate: 'Cumene Hydroperoxide',
        formula: 'C₆H₅—C(CH₃)₂—O—O—H',
        note: 'Air bubbles through cumene in presence of mildly alkaline catalyst'
      },
      {
        stepNum: 2,
        title: 'Acid-Catalyzed Hydrolysis',
        reagent: 'Dilute H₂SO₄, 323-343 K',
        products: [
          { name: 'Phenol (Carbolic Acid)', formula: 'C₆H₅—OH', yield: 'High Yield', isMajor: true },
          { name: 'Acetone (Propanone)', formula: 'CH₃—CO—CH₃', yield: 'Valuable By-Product', isMajor: true }
        ]
      }
    ],
    mechanismSteps: [
      '1. Radical Autoxidation: Oxygen inserts into the tertiary C—H bond of isopropyl group, generating cumene hydroperoxide.',
      '2. Protonation: Dilute H₂SO₄ protonates the terminal oxygen of the hydroperoxide group (—O—OH₂⁺).',
      '3. Phenyl Migration: Departure of water triggers concerted 1,2-phenyl migration from carbon to electron-deficient oxygen (Hock Rearrangement).',
      '4. Cleavage: Hydrolysis of the resulting hemiketal yields Phenol and Acetone.'
    ],
    boardTip: 'Exam Question: Write chemical equations for industrial manufacture of phenol from cumene. Name the valuable by-product formed in this process (Answer: Acetone / Propanone).'
  },

  {
    id: 'rxn-kolbe-reaction',
    subtopicId: 'chem-sub-7-4',
    chapterId: 'chem-ch-7',
    title: 'Kolbe’s Reaction (Synthesis of Salicylic Acid)',
    subtitle: 'Carboxylation of Sodium Phenoxide to 2-Hydroxybenzoic Acid',
    category: 'organic',
    boardNote: 'Examiner Focus: Phenoxide ion (C₆H₅O⁻) is significantly more activated towards electrophilic aromatic substitution than phenol. It reacts with weak electrophile CO₂.',
    diagramType: 'kolbe',
    reactants: [
      {
        name: 'Phenol',
        formula: 'C₆H₅—OH',
        structure: 'benzene-ring'
      }
    ],
    steps: [
      {
        stepNum: 1,
        title: 'Phenoxide Generation',
        reagent: 'aq. NaOH',
        product: 'Sodium Phenoxide (C₆H₅—O⁻ Na⁺)',
        note: 'Strongly activates ortho-positions due to electron donation from O⁻'
      },
      {
        stepNum: 2,
        title: 'Electrophilic Carboxylation',
        reagent: 'CO₂ (Carbon Dioxide), 400 K, 4–7 atm Pressure',
        product: 'Sodium Salicylate'
      },
      {
        stepNum: 3,
        title: 'Acidification',
        reagent: 'dil. HCl (H⁺)',
        product: 'Salicylic Acid (2-Hydroxybenzoic Acid)',
        formula: 'o-HO—C₆H₄—COOH',
        isMajor: true,
        note: 'Precursor to Aspirin (Acetylsalicylic acid)'
      }
    ],
    equation: 'C₆H₅OH + NaOH ⟶ C₆H₅ONa  ──(i) CO₂, 400K, 4-7 atm / (ii) H⁺──> o-HO—C₆H₄—COOH (Salicylic Acid)',
    boardTip: 'Salicylic acid on acetylation with acetic anhydride gives Aspirin: Salicylic Acid + (CH₃CO)₂O ⟶ Acetylsalicylic Acid (Aspirin) + CH₃COOH.'
  },

  {
    id: 'rxn-reimer-tiemann',
    subtopicId: 'chem-sub-7-4',
    chapterId: 'chem-ch-7',
    title: 'Reimer-Tiemann Reaction',
    subtitle: 'Formylation of Phenol to Salicylaldehyde via Dichlorocarbene Intermediate',
    category: 'organic',
    boardNote: 'Examiner Focus: The electrophile generated in situ is neutral, electron-deficient Dichlorocarbene (:CCl₂), formed by α-elimination of chloroform with base.',
    diagramType: 'reimer-tiemann',
    reactants: [
      {
        name: 'Phenol',
        formula: 'C₆H₅—OH',
        structure: 'benzene-ring'
      },
      {
        name: 'Chloroform',
        formula: 'CHCl₃',
        sub: 'Source of electrophilic carbene'
      },
      {
        name: 'Aqueous Sodium Hydroxide',
        formula: '3 NaOH (aq)',
        sub: 'Strong base, 340 K'
      }
    ],
    intermediate: {
      name: 'Intermediate Benzal Chloride / Dichlorocarbene',
      formula: ':CCl₂ (Dichlorocarbene) ⟶ o-O⁻Na⁺—C₆H₄—CHCl₂'
    },
    products: [
      {
        name: 'Salicylaldehyde (2-Hydroxybenzaldehyde)',
        formula: 'o-HO—C₆H₄—CHO',
        isMajor: true,
        note: 'Orthoisomer stabilized by intramolecular hydrogen bonding'
      }
    ],
    equation: 'C₆H₅OH + CHCl₃ + 3 NaOH ──(340 K)──> [Intermediate] ──(H⁺)──> o-HO—C₆H₄—CHO (Salicylaldehyde) + 3 NaCl + 2 H₂O',
    boardTip: 'CBSE 1-Mark MCQ: What is the electrophile in the Reimer-Tiemann reaction? (Answer: Dichlorocarbene, :CCl₂). If CCl₄ is used instead of CHCl₃, Salicylic acid is formed!'
  },

  {
    id: 'rxn-williamson-ether',
    subtopicId: 'chem-sub-7-5',
    chapterId: 'chem-ch-7',
    title: 'Williamson Ether Synthesis',
    subtitle: 'SN2 Nucleophilic Displacement for Symmetrical and Unsymmetrical Ethers',
    category: 'organic',
    boardNote: 'Golden Rule for CBSE Board: Alkyl halide MUST be PRIMARY (1°). If a tertiary (3°) alkyl halide is used, elimination takes place exclusively, yielding an alkene instead of an ether!',
    diagramType: 'williamson',
    equation: 'R—X (1° halide) + R\'—O⁻ Na⁺ (Sodium alkoxide) ⟶ R—O—R\' (Ether) + NaX',
    exampleGood: {
      title: 'Successful Synthesis of tert-Butyl Methyl Ether',
      reactants: 'CH₃—Br (1° Methyl bromide) + (CH₃)₃C—O⁻ Na⁺ (Sodium tert-butoxide)',
      product: '(CH₃)₃C—O—CH₃ (tert-Butyl methyl ether) via clean SN2 backside displacement'
    },
    exampleBad: {
      title: 'Failed Synthesis Attempt (Elimination Trap)',
      reactants: '(CH₃)₃C—Br (3° tert-Butyl bromide) + CH₃—O⁻ Na⁺ (Sodium methoxide)',
      product: 'CH₃—C(CH₃)=CH₂ (2-Methylpropene / Isobutylene) + CH₃OH + NaBr (Exclusive β-Elimination!)'
    },
    boardTip: 'Reasoning Question: "Explain why tert-butyl methyl ether cannot be prepared by treating tert-butyl bromide with sodium methoxide." Answer: Sodium methoxide is a strong nucleophile AND a strong base. With a bulky 3° halide, steric hindrance blocks SN2 backside attack, so methoxide abstracts a β-proton, giving 2-methylpropene via E2 elimination.'
  },

  {
    id: 'rxn-alcohol-dehydration',
    subtopicId: 'chem-sub-7-3',
    chapterId: 'chem-ch-7',
    title: 'Dehydration of Alcohols: Temperature-Controlled Pathways',
    subtitle: 'Acid-Catalyzed Elimination to Alkene vs Substitution to Ether',
    category: 'organic',
    boardNote: 'Examiner Focus: Show the dramatic effect of temperature when ethanol is treated with concentrated sulfuric acid.',
    diagramType: 'dehydration',
    reactions: [
      {
        temp: '443 K (170°C)',
        title: 'Intramolecular Dehydration (Alkene Formation)',
        equation: 'C₂H₅—OH + conc. H₂SO₄ ──(443 K)──> CH₂=CH₂ (Ethene) + H₂O',
        mechanism: '3-Step Mechanism: (1) Protonation to oxonium ion C₂H₅OH₂⁺, (2) Slow loss of H₂O forming ethyl carbocation [CH₃CH₂⁺], (3) Elimination of β-H⁺ to form ethene.'
      },
      {
        temp: '413 K (140°C)',
        title: 'Intermolecular Dehydration (Ether Formation)',
        equation: '2 C₂H₅—OH + conc. H₂SO₄ ──(413 K)──> C₂H₅—O—C₂H₅ (Diethyl Ether) + H₂O',
        mechanism: 'SN2 bimolecular attack of unprotonated ethanol on protonated ethanol ion at lower temperature.'
      }
    ],
    boardTip: 'Question: Write the mechanism of acid-catalysed dehydration of ethanol to ethene. (Always draw all 3 steps: protonation, carbocation formation as rate-determining step, and proton elimination).'
  },

  {
    id: 'rxn-lucas-test',
    subtopicId: 'chem-sub-7-7',
    chapterId: 'chem-ch-7',
    title: 'Lucas Test for Distinguishing 1°, 2° and 3° Alcohols',
    subtitle: 'Differential Turbidity Formation with Conc. HCl + Anhydrous ZnCl₂',
    category: 'organic',
    boardNote: 'Distinction Table tested frequently: Immediate turbidity = 3°; 5 minutes = 2°; only upon heating = 1°.',
    diagramType: 'lucas',
    reagent: 'Lucas Reagent: Equimolar mixture of Concentrated HCl and Anhydrous ZnCl₂',
    classes: [
      {
        class: 'Tertiary (3°) Alcohol',
        example: '(CH₃)₃C—OH',
        reaction: '(CH₃)₃C—OH + HCl ──(ZnCl₂)──> (CH₃)₃C—Cl↓ + H₂O',
        observation: 'Immediate Cloudiness / Turbidity appears within seconds at room temperature (Stable 3° carbocation forms instantly).'
      },
      {
        class: 'Secondary (2°) Alcohol',
        example: '(CH₃)₂CH—OH',
        reaction: '(CH₃)₂CH—OH + HCl ──(ZnCl₂)──> (CH₃)₂CH—Cl↓ + H₂O',
        observation: 'Turbidity appears after 5 minutes at room temperature.'
      },
      {
        class: 'Primary (1°) Alcohol',
        example: 'CH₃—CH₂—OH',
        reaction: 'CH₃CH₂OH + HCl ──(ZnCl₂)──> No reaction at room temperature',
        observation: 'Solution remains clear; turbidity appears ONLY on heating.'
      }
    ],
    boardTip: 'Give one chemical test to distinguish between 2-methylpropan-2-ol (3°) and propan-1-ol (1°): Lucas Test.'
  },

  // ==========================================================================
  // CHAPTER 4: d- AND f-BLOCK ELEMENTS
  // ==========================================================================
  {
    id: 'rxn-kmno4-prep',
    subtopicId: 'chem-sub-4-2',
    chapterId: 'chem-ch-4',
    title: 'Manufacture of Potassium Permanganate (KMnO₄)',
    subtitle: 'From Pyrolusite Ore (MnO₂) via Oxidative Fusion and Disproportionation',
    category: 'inorganic',
    boardNote: 'Board Question: Write equations for preparation of KMnO₄ from pyrolusite ore. Mention color change from green (MnO₄²⁻) to deep purple (MnO₄⁻).',
    diagramType: 'kmno4-flow',
    steps: [
      {
        stepNum: 1,
        title: 'Oxidative Alkaline Fusion',
        equation: '2 MnO₂ (black) + 4 KOH + O₂ (air) ──(Fused)──> 2 K₂MnO₄ (Dark Green) + 2 H₂O',
        oxidationState: 'Mn(+4) oxidised to Mn(+6)'
      },
      {
        stepNum: 2,
        title: 'Acidic Disproportionation / Oxidation',
        equation: '3 MnO₄²⁻ (green) + 4 H⁺ ⟶ 2 MnO₄⁻ (Deep Purple) + MnO₂↓ + 2 H₂O',
        oxidationState: 'Mn(+6) disproportionates into Mn(+7) and Mn(+4)',
        alternative: 'Industrial: Electrolytic oxidation in alkaline solution at anode: MnO₄²⁻ ⟶ MnO₄⁻ + e⁻'
      }
    ],
    boardTip: 'Remember: In neutral/alkaline medium, KMnO₄ acts as an oxidising agent where MnO₄⁻ + 2H₂O + 3e⁻ ⟶ MnO₂ + 4OH⁻ (n-factor = 3). In acidic medium: MnO₄⁻ + 8H⁺ + 5e⁻ ⟶ Mn²⁺ + 4H₂O (n-factor = 5).'
  },

  {
    id: 'rxn-k2cr2o7-prep',
    subtopicId: 'chem-sub-4-3',
    chapterId: 'chem-ch-4',
    title: 'Manufacture of Potassium Dichromate (K₂Cr₂O₇)',
    subtitle: 'From Chromite Ore (FeCr₂O₄) via 3-Stage Chemical Process',
    category: 'inorganic',
    boardNote: 'Board Question: Write equations for 3 steps in preparation of K₂Cr₂O₇ from chromite ore. Yellow chromate ⟶ Orange dichromate.',
    diagramType: 'k2cr2o7-flow',
    steps: [
      {
        stepNum: 1,
        title: 'Stage 1: Roasting with Na₂CO₃ in air',
        equation: '4 FeCr₂O₄ + 8 Na₂CO₃ + 7 O₂ ──(Roast)──> 8 Na₂CrO₄ (Yellow Solution) + 2 Fe₂O₃ (residue) + 8 CO₂↑',
        color: 'Yellow'
      },
      {
        stepNum: 2,
        title: 'Stage 2: Acidification with H₂SO₄',
        equation: '2 Na₂CrO₄ (yellow) + 2 H⁺ ⟶ Na₂Cr₂O₇ (Orange Solution) + 2 Na⁺ + H₂O',
        color: 'Orange'
      },
      {
        stepNum: 3,
        title: 'Stage 3: Potassium Chloride Exchange',
        equation: 'Na₂Cr₂O₇ + 2 KCl ⟶ K₂Cr₂O₇ (Bright Orange Crystals)↓ + 2 NaCl',
        note: 'K₂Cr₂O₇ is less soluble than Na₂Cr₂O₇, so it crystallises out readily on cooling.'
      }
    ],
    boardTip: 'Question: Why is K₂Cr₂O₇ preferred over Na₂Cr₂O₇ as a primary standard in volumetric analysis? Answer: Na₂Cr₂O₇ is deliquescent (absorbs moisture from air), whereas K₂Cr₂O₇ is not deliquescent and can be weighed accurately.'
  },

  {
    id: 'rxn-chromate-dichromate',
    subtopicId: 'chem-sub-4-4',
    chapterId: 'chem-ch-4',
    title: 'Structures of Chromate & Dichromate & pH Equilibrium',
    subtitle: 'Tetrahedral Coordination and Reversible pH-Dependent Interconversion',
    category: 'inorganic',
    boardNote: 'Board Question: Draw structures of chromate and dichromate ions. How does pH change affect their interconversion? State the Cr-O-Cr bond angle (126°).',
    diagramType: 'chromate-dichromate',
    equation: '2 CrO₄²⁻ (Yellow, Tetrahedral) + 2 H⁺ ⇌ Cr₂O₇²⁻ (Orange, Linked Tetrahedra) + H₂O',
    structures: [
      {
        ion: 'Chromate Ion [CrO₄]²⁻',
        geometry: 'Discrete Tetrahedral',
        color: 'Yellow',
        favoredAt: 'Alkaline pH (pH > 7)'
      },
      {
        ion: 'Dichromate Ion [Cr₂O₇]²⁻',
        geometry: 'Two Tetrahedra sharing one corner Oxygen atom with Cr—O—Cr angle of 126°',
        color: 'Orange',
        favoredAt: 'Acidic pH (pH < 7)'
      }
    ],
    boardTip: 'Acidifying yellow chromate turns it orange (dichromate). Adding alkali turns orange dichromate back to yellow chromate.'
  },

  // ==========================================================================
  // CHAPTER 2: ELECTROCHEMISTRY
  // ==========================================================================
  {
    id: 'rxn-daniell-cell',
    subtopicId: 'chem-sub-2-2',
    chapterId: 'chem-ch-2',
    title: 'Daniell Galvanic Cell Schematic & Working',
    subtitle: 'Spontaneous Redox Reaction Converting Chemical Energy to Electrical Work',
    category: 'electrochem',
    boardNote: 'Board Question: Draw a neat labeled diagram of Daniell cell. Write anode, cathode, overall reaction, electron flow direction, and salt bridge function.',
    diagramType: 'daniell-cell',
    cellNotation: 'Zn(s) | Zn²⁺(aq, 1 M) || Cu²⁺(aq, 1 M) | Cu(s)',
    potential: 'E°_cell = E°_cathode − E°_anode = +0.34 V − (−0.76 V) = +1.10 V',
    anodeHalf: {
      electrode: 'Zinc Plate (Zn) — Negative Terminal (-)',
      process: 'Oxidation: Zn(s) ⟶ Zn²⁺(aq) + 2e⁻  (E° = −0.76 V)',
      solution: '1.0 M ZnSO₄ aqueous solution'
    },
    cathodeHalf: {
      electrode: 'Copper Plate (Cu) — Positive Terminal (+)',
      process: 'Reduction: Cu²⁺(aq) + 2e⁻ ⟶ Cu(s)  (E° = +0.34 V)',
      solution: '1.0 M CuSO₄ aqueous solution'
    },
    saltBridge: {
      contents: 'Inverted U-tube containing inert electrolyte (KCl / KNO₃ / NH₄NO₃) in Agar-Agar gel',
      functions: [
        '1. Completes the electrical circuit by allowing ion migration between half-cells.',
        '2. Maintains electrical neutrality: K⁺ ions neutralize excess SO₄²⁻ at cathode; Cl⁻ ions neutralize excess Zn²⁺ at anode.',
        '3. Prevents liquid-junction potential.'
      ]
    },
    flows: {
      electrons: 'External wire: From Zinc Anode (-) to Copper Cathode (+)',
      current: 'Conventional current: From Copper (+) to Zinc (-)'
    },
    boardTip: 'If external voltage E_ext = 1.10 V is applied: No electron flow, reaction stops. If E_ext > 1.10 V: Cell functions as an Electrolytic cell, electrons flow from Cu to Zn!'
  },

  {
    id: 'rxn-rusting-corrosion',
    subtopicId: 'chem-sub-2-11',
    chapterId: 'chem-ch-2',
    title: 'Electrochemical Mechanism of Rusting of Iron',
    subtitle: 'Galvanic Cell Formation on Metal Surface in Presence of Moisture & Air',
    category: 'electrochem',
    boardNote: 'Board Question: Explain the electrochemical theory of rusting of iron with anodic, cathodic, and overall reactions.',
    diagramType: 'corrosion',
    anode: {
      location: 'Pure Iron Surface (strain / scratch spot)',
      reaction: '2 Fe(s) ⟶ 2 Fe²⁺(aq) + 4e⁻  (E° = −0.44 V)',
      description: 'Iron metal oxidizes, releasing electrons into the bulk metal.'
    },
    cathode: {
      location: 'Water Droplet boundary in contact with atmospheric oxygen',
      reaction: 'O₂(g) + 4 H⁺(aq) + 4e⁻ ⟶ 2 H₂O(l)  (E° = +1.23 V)',
      description: 'H⁺ ions come from dissolved carbonic acid (H₂O + CO₂ ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻).'
    },
    overall: {
      cellReaction: '2 Fe(s) + O₂(g) + 4 H⁺(aq) ⟶ 2 Fe²⁺(aq) + 2 H₂O(l)  (E°_cell = +1.67 V)',
      rustFormation: '4 Fe²⁺(aq) + O₂(g) + 4 H₂O(l) ⟶ 2 Fe₂O₃(s) + 8 H⁺(aq)',
      rustHydration: 'Fe₂O₃ + x H₂O ⟶ Fe₂O₃ · xH₂O (Rust, reddish-brown flaky solid)'
    },
    prevention: 'Sacrificial Protection (Galvanisation with Zinc, E°_Zn = −0.76 V corrodes preferentially to protect Iron E°_Fe = −0.44 V).'
  }
];
