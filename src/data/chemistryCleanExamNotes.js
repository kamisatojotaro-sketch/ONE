// ============================================================================
// D-VERSION (CLEAN UI) EXAM-FOCUSED CHEMISTRY SYLLABUS & MLM / REMEDIAL NOTES
// ============================================================================
// Built directly from:
// 1. Teacher's remedial & exam hints ("big orange" WhatsApp breakdown)
// 2. All 35 handwritten Chemistry revision notebook pages
// 3. The attached 43-page Minimum Level Material (MLM) PDF
// ============================================================================

export const CLEAN_CHEMISTRY_CHAPTERS = [
  // ==========================================================================
  // CHAPTER 1: BIOMOLECULES
  // ==========================================================================
  {
    id: 'chem-d-ch-1',
    number: 1,
    title: 'Biomolecules: 5 Glucose Reactions, Structures & 6 Remedial Qs',
    description:
      '2–3 out of 5 Glucose reactions, Straight-chain & Cyclic Haworth structures, Mam’s 6 Remedial Questions (RNA, Fibrous vs Globular, Denaturation, Curdling of Milk, Vitamins, Enzymes), Zwitter ion, Peptide bond & 6 Distinguish tables.',
    available: true,
    tag: '2–3 of 5 Reactions • 2 Structures • 6 Remedial Qs',
    subchapters: [
      {
        id: 'chem-d-sub-1-1',
        title: '1.1 Preparation & The 5 Reactions of D-Glucose (2–3 in Exam)',
        sections: [
          {
            id: 'chem-d-sec-1-1-1',
            title: 'Preparation of Glucose & The 5 Structural Proof Reactions (Open-Chain)',
            explanation:
              'Glucose (C₆H₁₂O₆) is an aldohexose. Its open-chain formula CHO–(CHOH)₄–CH₂OH is established by 5 classic chemical reactions, out of which 2 or 3 are directly asked in the exam.',
            keyFormulas: [
              {
                name: '1. Reaction with HI / Heat (Proves 6 carbons in a straight chain)',
                formula: 'CHO-(CHOH)_4-CH_2OH + HI ->[\\Delta] CH_3-CH_2-CH_2-CH_2-CH_2-CH_3 \\text{ (n-Hexane)}',
                description: 'On prolonged heating with HI, glucose forms n-hexane, proving all six carbon atoms are linked in a straight (linear) chain.'
              },
              {
                name: '2. Reaction with NH₂OH or HCN (Proves presence of Carbonyl >C=O group)',
                formula: 'CHO-(CHOH)_4-CH_2OH + NH_2OH -> CH=N-OH-(CHOH)_4-CH_2OH + H_2O \\text{ (Glucose oxime)}',
                description: 'Glucose reacts with hydroxylamine (NH₂OH) to form an oxime and adds a molecule of HCN to give a cyanohydrin, confirming a carbonyl (>C=O) group.'
              },
              {
                name: '3. Reaction with Bromine Water Br₂/H₂O (Proves Carbonyl is an Aldehyde –CHO group)',
                formula: 'CHO-(CHOH)_4-CH_2OH + [O] ->[Br_2 / H_2O] COOH-(CHOH)_4-CH_2OH \\text{ (Gluconic acid)}',
                description: 'Glucose gets oxidised to a 6-carbon carboxylic acid (gluconic acid) on reaction with a mild oxidising agent like bromine water, proving the carbonyl group is present as an aldehydic (–CHO) group.'
              },
              {
                name: '4. Acetylation with Acetic Anhydride (Proves presence of five –OH groups)',
                formula: 'CHO-(CHOH)_4-CH_2OH + 5(CH_3CO)_2O -> CHO-(CH-O-COCH_3)_4-CH_2-O-COCH_3 + 5CH_3COOH',
                description: 'Acetylation of glucose with acetic anhydride gives glucose pentaacetate, confirming the presence of five –OH groups attached to five different carbon atoms.'
              },
              {
                name: '5. Oxidation with Conc. HNO₃ (Proves presence of one Primary Alcoholic –CH₂OH group)',
                formula: 'CHO-(CHOH)_4-CH_2OH + [O] ->[\\text{Conc. } HNO_3] COOH-(CHOH)_4-COOH \\text{ (Saccharic acid)}',
                description: 'On oxidation with nitric acid (HNO₃), both glucose and gluconic acid yield a dicarboxylic acid, saccharic acid (glucaric acid), indicating a primary alcoholic (–CH₂OH) group.'
              }
            ],
            structuredData: {
              examBlueprintBadge: 'Teacher Exam Focus • 2 or 3 out of these 5 Glucose reactions will come in the exam',
              definitions: [
                {
                  term: 'Monosaccharides',
                  definition:
                    'Carbohydrates that cannot be hydrolysed further to give simpler units of polyhydroxy aldehyde or ketone (e.g., Glucose, Fructose, Ribose).'
                },
                {
                  term: 'Preparation of Glucose from Sucrose (Cane Sugar)',
                  definition:
                    'When sucrose is boiled with dilute HCl or H₂SO₄ in alcoholic solution, it gives equimolar amounts of glucose and fructose: C₁₂H₂₂O₁₁ + H₂O →(H⁺) C₆H₁₂O₆ (Glucose) + C₆H₁₂O₆ (Fructose).'
                },
                {
                  term: 'Preparation of Glucose from Starch (Commercial Method)',
                  definition:
                    'Commercially, glucose is obtained by hydrolysis of starch by boiling it with dilute H₂SO₄ at 393 K under 2–3 atm pressure: (C₆H₁₀O₅)ₙ + nH₂O →(H⁺, 393 K, 2–3 atm) nC₆H₁₂O₆ (Glucose).'
                }
              ],
              qaPairs: [
                {
                  number: 'Rxn 1',
                  badge: 'Straight Chain Proof',
                  question: 'Show that glucose is a six-membered straight / linear carbon chain.',
                  answer: 'On prolonged heating with HI, glucose is completely reduced to n-hexane, proving that all 6 carbon atoms are linked in a straight chain.',
                  equation: 'CHO–(CHOH)₄–CH₂OH  ──(HI, Heat)──►  CH₃–CH₂–CH₂–CH₂–CH₂–CH₃ (n-Hexane)'
                },
                {
                  number: 'Rxn 2',
                  badge: 'Carbonyl (>C=O) Proof',
                  question: 'Show that glucose contains a carbonyl (>C=O) group.',
                  answer: 'Glucose reacts with hydroxylamine (NH₂OH) to form glucose oxime (and with HCN to form glucose cyanohydrin).',
                  equation: 'CHO–(CHOH)₄–CH₂OH + NH₂OH  ──►  H–C(=N–OH)–(CHOH)₄–CH₂OH (Glucose oxime) + H₂O'
                },
                {
                  number: 'Rxn 3',
                  badge: 'Aldehyde (–CHO) Proof',
                  question: 'Show that glucose contains an aldehyde (–CHO) group.',
                  answer: 'On mild oxidation with bromine water (Br₂/H₂O), glucose is oxidised to gluconic acid (a 6-carbon monocarboxylic acid).',
                  equation: 'CHO–(CHOH)₄–CH₂OH  ──(Br₂ / H₂O)──►  COOH–(CHOH)₄–CH₂OH (Gluconic acid)'
                },
                {
                  number: 'Rxn 4',
                  badge: 'Five –OH Groups Proof',
                  question: 'Show that glucose contains five –OH (hydroxyl) groups.',
                  answer: 'On acetylation with acetic anhydride in pyridine, glucose forms glucose pentaacetate, confirming 5 –OH groups on different carbons.',
                  equation: 'CHO–(CHOH)₄–CH₂OH  ──(CH₃CO–O–CO–CH₃, Acetylation)──►  CHO–(CHOCOCH₃)₄–CH₂OCOCH₃ (Glucose pentaacetate)'
                },
                {
                  number: 'Rxn 5',
                  badge: '1° Alcohol (–CH₂OH) Proof',
                  question: 'Show that glucose contains one primary (1°) alcoholic (–CH₂OH) group.',
                  answer: 'On oxidation with conc. HNO₃, glucose (and gluconic acid) gives saccharic acid (a dicarboxylic acid), proving the presence of one primary –CH₂OH group.',
                  equation: 'CHO–(CHOH)₄–CH₂OH  ──(Conc. HNO₃)──►  COOH–(CHOH)₄–COOH (Saccharic acid)'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'chem-d-sub-1-2',
        title: '1.2 Straight-Chain & Cyclic Structures, Anomers & Carbohydrates',
        sections: [
          {
            id: 'chem-d-sec-1-2-1',
            title: 'Straight-Chain (Fischer) & Cyclic (Haworth) Structures, Anomers, Starch & Glycogen',
            explanation:
              'Glucose exists both in an open-chain Fischer form (with one –CHO, four 2° –CHOH, and one 1° –CH₂OH group) and in two cyclic hemiacetal pyranose forms: α-D-(+)-glucopyranose and β-D-(+)-glucopyranose.',
            structuredData: {
              examBlueprintBadge: 'Teacher Exam Focus • Straight-Chain & Cyclic Structures + Handwritten Carbohydrate Qs',
              visualDiagrams: [
                {
                  id: 'glucose-structures',
                  title: 'Straight-Chain (Fischer) & Cyclic (Haworth) Structures of Glucose',
                  subtitle: 'Open-Chain vs α-D / β-D Glucopyranose'
                }
              ],
              definitions: [
                {
                  term: 'Anomers',
                  definition:
                    'The two cyclic hemiacetal stereoisomeric forms of glucose (α-D-glucose and β-D-glucose) which differ only in the configuration (orientation) of the hydroxyl (–OH) group at C1 (the anomeric / hemiacetal carbon).'
                },
                {
                  term: 'Invert Sugar',
                  definition:
                    'Sucrose is dextrorotatory (+66.5°), but on hydrolysis it gives equimolar dextrorotatory D-(+)-glucose (+52.5°) and laevorotatory D-(-)-fructose (-92.4°). Since the laevorotation of fructose is greater than the dextrorotation of glucose, the resulting mixture is laevorotatory, and the product is called invert sugar.'
                },
                {
                  term: 'Glycosidic Linkage',
                  definition:
                    'The oxide linkage (–O–) formed between two monosaccharide units through an oxygen atom by the loss of a water molecule.'
                }
              ],
              keyPoints: [
                'Reactions of Glucose NOT explained by Open-Chain Structure (Proving Cyclic Structure): (1) Despite having an aldehyde group, glucose does not give Schiff’s test or 2,4-DNP test and does not form a hydrogensulphite addition product with NaHSO₃. (2) The pentaacetate of glucose does not react with hydroxylamine (NH₂OH), indicating the absence of a free –CHO group. (3) Glucose exists in two crystalline stereoisomeric forms (α and β).',
                'Monomers of Disaccharides: (i) Sucrose → α-D-glucose + β-D-fructose (Non-reducing sugar); (ii) Lactose (Milk sugar) → β-D-galactose + β-D-glucose (Reducing sugar); (iii) Maltose → Two α-D-glucose units linked by C1–C4 glycosidic linkage (Reducing sugar).'
              ],
              comparisonTables: [
                {
                  title: 'Distinguish: Amylose vs Amylopectin (Components of Starch)',
                  headers: ['Feature', 'Amylose', 'Amylopectin'],
                  rows: [
                    ['Water Solubility & % in Starch', 'Water-soluble; constitutes 15–20% of starch.', 'Water-insoluble; constitutes 80–85% of starch.'],
                    ['Chain Structure', 'Long unbranched linear chain polymer of α-D-(+)-glucose.', 'Branched-chain polymer of α-D-(+)-glucose.'],
                    ['Glycosidic Linkage', 'C1–C4 α-glycosidic linkage only.', 'C1–C4 α-glycosidic chain linkage with branching at C1–C6 glycosidic linkage.']
                  ]
                }
              ],
              qaPairs: [
                {
                  number: 'Q1',
                  badge: 'Handwritten Note',
                  question: 'Name the two components of starch.',
                  answer: 'Amylose (15–20%, water-soluble) and Amylopectin (80–85%, water-insoluble).'
                },
                {
                  number: 'Q2',
                  badge: 'Handwritten Note',
                  question: 'What is the structural difference between Starch and Cellulose?',
                  answer: 'Starch is a polymer of α-D-glucose units joined by C1–C4 α-glycosidic linkages (with C1–C6 branching in amylopectin), whereas Cellulose is a straight-chain polysaccharide of β-D-glucose units joined by C1–C4 β-glycosidic linkages. (Note: your class notebook also notes Starch C1–C4 vs Cellulose C1–C4 linkage).'
                },
                {
                  number: 'Q3',
                  badge: 'Handwritten Note',
                  question: 'What is the chemical composition of glycogen and why is it called animal starch?',
                  answer: 'Glycogen is a branched polysaccharide of α-D-glucose (structure similar to amylopectin but more highly branched). It is called animal starch because carbohydrates are stored in the animal body (in liver, muscles, and brain, as well as in fungi) as glycogen for energy storage.'
                },
                {
                  number: 'Q4',
                  badge: 'Handwritten Note',
                  question: 'Which one is a polysaccharide among: Sucrose, Glucose, Starch, Fructose?',
                  answer: 'Starch (Glucose and Fructose are monosaccharides; Sucrose is a disaccharide).'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'chem-d-sub-1-3',
        title: '1.3 Mam’s 6 Remedial Questions, Proteins, Nucleic Acids, Vitamins & Distinguish Tables',
        sections: [
          {
            id: 'chem-d-sec-1-3-1',
            title: 'Mam’s 6 Remedial Questions + Zwitter Ion, Peptide Bond & All 6 Biomolecule Distinguish Tables',
            explanation:
              'Complete answers to the 6 remedial questions dictated by Mam in class, along with all handwritten Biomolecules revision notes (Zwitter ion, Peptide linkage, Amino acid types, Nucleic acids, and Distinguish tables).',
            structuredData: {
              examBlueprintBadge: 'Mam’s 6 Remedial Questions + Biomolecules Distinguish Tables',
              visualDiagrams: [
                {
                  id: 'zwitter-peptide-structures',
                  title: 'Zwitter Ion & Peptide Bond (–CO–NH–) Linkage',
                  subtitle: 'Handwritten Biomolecules Sheet'
                }
              ],
              qaPairs: [
                {
                  number: 'Remedial Q1',
                  badge: 'Mam’s Remedial Q1',
                  question: 'What does Ribonucleic Acid (RNA) contain, what are its types, and what is the function/use of RNA & Nucleic Acids?',
                  answer:
                    '• Composition of RNA: Contains D-Ribose sugar, phosphoric acid (phosphate group), and four nitrogenous bases: Adenine (A), Guanine (G), Cytosine (C), and Uracil (U) in a single-stranded helix.\n• Three Types of RNA: (i) Messenger RNA (m-RNA), (ii) Ribosomal RNA (r-RNA), (iii) Transfer RNA (t-RNA).\n• Function / Use: RNA directly carries out protein synthesis in the cell, while DNA stores and transfers genetic information (heredity).'
                },
                {
                  number: 'Remedial Q2',
                  badge: 'Mam’s Remedial Q2',
                  question: 'Distinguish between Fibrous Proteins and Globular Proteins.',
                  answer:
                    '• Fibrous Proteins: (i) Polypeptide chains run parallel to give a fibre-like structure held together by hydrogen and disulphide bonds. (ii) Insoluble in water. Examples: Keratin (in hair, wool, silk) and Myosin (in muscles).\n• Globular Proteins: (i) Polypeptide chains coil around to give a spherical shape. (ii) Soluble in water. Examples: Insulin and Albumins.'
                },
                {
                  number: 'Remedial Q3',
                  badge: 'Mam’s Remedial Q3',
                  question: 'What is Denaturation of Proteins? Give examples.',
                  answer:
                    'When a protein in its native form is subjected to physical change (like change in temperature / heating) or chemical change (like change in pH), the hydrogen bonds are disturbed. Due to this, globules unfold and the helix gets uncoiled: the secondary (2°) and tertiary (3°) structures are destroyed (while 1° primary structure remains intact), and the protein loses its biological activity. This is called denaturation of protein.\n• Examples: (1) Coagulation of egg white on boiling, (2) Curdling of milk.'
                },
                {
                  number: 'Remedial Q4',
                  badge: 'Mam’s Remedial Q4',
                  question: 'Explain Curdling of Milk.',
                  answer:
                    'Curdling of milk is a classic example of denaturation of proteins caused by the formation of lactic acid by the bacteria (Lactobacillus) present in milk. The change in pH disturbs the 2° and 3° structures of milk protein (lactalbumin/casein), causing it to uncoil and coagulate into curd.'
                },
                {
                  number: 'Remedial Q5',
                  badge: 'Mam’s Remedial Q5',
                  question: 'How are Vitamins classified? Give examples of each class.',
                  answer:
                    'Vitamins are classified into two groups depending upon their solubility in water or fat:\n1. Fat-Soluble Vitamins: Vitamins which are soluble in fat and oils but insoluble in water. They are stored in liver and adipose (fat-storing) tissues. Examples: Vitamins A, D, E, and K.\n2. Water-Soluble Vitamins: Vitamins which are soluble in water. Water-soluble vitamins must be supplied regularly in diet because they are readily excreted in urine and cannot be stored in our body (except Vitamin B₁₂). Examples: B group vitamins (B₁, B₂, B₆, B₁₂) and Vitamin C.'
                },
                {
                  number: 'Remedial Q6',
                  badge: 'Mam’s Remedial Q6',
                  question: 'What are Enzymes?',
                  answer:
                    'Enzymes are biological catalysts (biocatalysts) that catalyse specific biochemical reactions in living organisms under mild temperature and pH conditions. Chemically, almost all enzymes are globular proteins.'
                },
                {
                  number: 'Note Q7',
                  badge: 'Handwritten Note',
                  question: 'What are Acidic, Basic, and Neutral Amino Acids?',
                  answer:
                    '• Neutral Amino Acid: Contains an equal number of amino (–NH₂) and carboxyl (–COOH) groups (e.g., Glycine, Alanine).\n• Acidic Amino Acid: Contains more carboxyl (–COOH) groups than amino (–NH₂) groups (e.g., Aspartic acid, Glutamic acid).\n• Basic Amino Acid: Contains more amino (–NH₂) groups than carboxyl (–COOH) groups (e.g., Lysine, Arginine).'
                },
                {
                  number: 'Note Q8',
                  badge: 'Handwritten Note',
                  question: 'What are Essential and Non-Essential Amino Acids?',
                  answer:
                    '• Non-Essential Amino Acids: Amino acids which can be synthesised in our body (e.g., Glycine, Alanine).\n• Essential Amino Acids: Amino acids which cannot be synthesised in our body and must be obtained through diet (e.g., Valine, Leucine, Lysine).'
                },
                {
                  number: 'Note Q9',
                  badge: 'Handwritten Note',
                  question: 'What is a Zwitter Ion and what is a Peptide Bond (Peptide Linkage)?',
                  answer:
                    '• Zwitter Ion: In aqueous solution, the carboxyl group (–COOH) of an amino acid loses a proton and the amino group (–NH₂) accepts a proton, giving rise to a dipolar ion called a zwitter ion: H₃N⁺–CH(R)–COO⁻.\n• Peptide Linkage: An amide bond (–CO–NH–) formed between the –COOH group of one amino acid molecule and the –NH₂ group of another amino acid molecule by the elimination of a water molecule.'
                },
                {
                  number: 'Note Q10',
                  badge: 'Handwritten Note',
                  question: 'Name the linkages present in: (a) Tertiary (3°) structure of proteins, and (b) Between nucleotides in nucleic acids.',
                  answer:
                    '• (a) Tertiary structure of proteins is stabilised by 4 main forces/linkages: Hydrogen bonds, Disulphide linkages (–S–S–), van der Waals forces, and Electrostatic forces of attraction.\n• (b) Nucleotides in nucleic acids (DNA/RNA) are joined together by Phosphodiester linkage (between 5′ and 3′ carbon atoms of pentose sugar).'
                }
              ],
              comparisonTables: [
                {
                  title: '1. Distinguish: Fibrous Proteins vs Globular Proteins',
                  headers: ['Basis', 'Fibrous Proteins', 'Globular Proteins'],
                  rows: [
                    ['Shape / Structure', 'Polypeptide chains run parallel (fibre-like / thread-like structure) held by H-bonds and disulphide bonds.', 'Polypeptide chains coil around to give a spherical structure.'],
                    ['Solubility in Water', 'Insoluble in water.', 'Soluble in water.'],
                    ['Examples', 'Keratin (present in hair, wool, silk) and Myosin (present in muscles).', 'Insulin and Albumins.']
                  ]
                },
                {
                  title: '2. Distinguish: Reducing Sugars vs Non-Reducing Sugars',
                  headers: ['Basis', 'Reducing Sugars', 'Non-Reducing Sugars'],
                  rows: [
                    ['Tollens’ & Fehling’s Test', 'Reduce Tollens’ reagent and Fehling’s solution.', 'Do not reduce Tollens’ reagent or Fehling’s solution.'],
                    ['Functional Group', 'Have a free aldehydic (–CHO) or ketonic (>C=O) hemiacetal group.', 'Aldehydic and ketonic groups are bonded in glycosidic linkage (no free reducing group).'],
                    ['Examples', 'All monosaccharides (Glucose, Fructose), Maltose, and Lactose.', 'Sucrose and all polysaccharides (Starch, Cellulose).']
                  ]
                },
                {
                  title: '3. Distinguish: α-Helix vs β-Pleated Sheet Structure of Proteins',
                  headers: ['Basis', 'α-Helix Structure', 'β-Pleated Sheet Structure'],
                  rows: [
                    ['Chain Arrangement', 'Polypeptide chain is twisted into a right-handed screw (helix).', 'Peptide chains are stretched out and laid side by side like pleated folds of drapery.'],
                    ['Hydrogen Bonding', 'Stabilised by intramolecular H-bonding between –NH– and >C=O of adjacent turns.', 'Stabilised by intermolecular H-bonding between adjacent parallel peptide chains.']
                  ]
                },
                {
                  title: '4. Distinguish: DNA vs RNA',
                  headers: ['Basis', 'DNA (Deoxyribonucleic Acid)', 'RNA (Ribonucleic Acid)'],
                  rows: [
                    ['Pentose Sugar', 'Contains β-D-2-deoxyribose sugar.', 'Contains β-D-ribose sugar.'],
                    ['Nitrogenous Bases', 'Contains Adenine (A), Guanine (G), Cytosine (C), and Thymine (T).', 'Contains Adenine (A), Guanine (G), Cytosine (C), and Uracil (U).'],
                    ['Strand Structure & Function', 'Double-stranded α-helix; transfers hereditary/genetic characters.', 'Single-stranded helix; directly helps in protein synthesis.']
                  ]
                },
                {
                  title: '5. Distinguish: Nucleotide vs Nucleoside',
                  headers: ['Basis', 'Nucleotide', 'Nucleoside'],
                  rows: [
                    ['Chemical Composition', 'Contains Nitrogenous Base + Pentose Sugar + Phosphate Group.', 'Contains Nitrogenous Base + Pentose Sugar only (No Phosphate Group).'],
                    ['Role', 'Monomer unit of nucleic acids (DNA and RNA) linked by phosphodiester bonds.', 'Formed when N-base attaches to 1′ position of pentose sugar (Nucleoside + Phosphate = Nucleotide).']
                  ]
                }
              ]
            }
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CHAPTER 2: COORDINATION COMPOUNDS
  // ==========================================================================
  {
    id: 'chem-d-ch-2',
    number: 2,
    title: 'Coordination Compounds: CFT Diagrams, d⁴, Synergic Effect & Revision Qs',
    description:
      '1 of 2 Crystal Field Splitting Diagrams (Octahedral & Tetrahedral), d⁴ (Δ₀ < P vs Δ₀ > P), Metal Carbonyl Back-Bonding (Synergic Effect), 2 One-Line Questions, VBT & Isomerism Revision Qs 1–12.',
    available: true,
    tag: '1 CFT Diagram • Synergic Effect • 2 One-Liners • Q1–12',
    subchapters: [
      {
        id: 'chem-d-sub-2-1',
        title: '2.1 Crystal Field Splitting Diagrams (Octahedral & Tetrahedral), d⁴ & Synergic Effect',
        sections: [
          {
            id: 'chem-d-sec-2-1-1',
            title: 'Octahedral & Tetrahedral CFT Splitting Diagrams, d⁴ (Δ₀ < P vs Δ₀ > P) & Metal Carbonyl Back-Bonding',
            explanation:
              'In Crystal Field Theory (CFT), the 5 degenerate d-orbitals of a free metal ion split into two sets of different energies in the electrostatic field of approaching ligands. One of the two CFT diagrams (Octahedral or Tetrahedral) is guaranteed in the exam.',
            structuredData: {
              examBlueprintBadge: 'Teacher Exam Focus • 1 of 2 CFT Diagrams + d⁴ Pairing Energy + Metal Carbonyl Synergic Effect',
              visualDiagrams: [
                {
                  id: 'cft-octahedral-tetrahedral',
                  title: 'Crystal Field Splitting Diagrams: (a) Octahedral Complex & (b) Tetrahedral Complex',
                  subtitle: '1 of these 2 diagrams will come in the exam'
                },
                {
                  id: 'cft-d4-pairing',
                  title: 'd⁴ Electronic Configuration: Δ₀ > P (Low Spin) vs Δ₀ < P (High Spin)',
                  subtitle: 'Handwritten Q6 & MLM 2b'
                },
                {
                  id: 'metal-carbonyl-synergic',
                  title: 'Bonding in Metal Carbonyls: dπ–pπ* Back-Bonding & Synergic Effect',
                  subtitle: 'Handwritten Q7 & MLM Page 14'
                }
              ],
              definitions: [
                {
                  term: 'Crystal Field Splitting in Octahedral Coordination Entities (Δ₀)',
                  definition:
                    'In an octahedral complex (CN = 6), ligands approach along the coordinate axes. The two axial d-orbitals (d_(x²-y²) and d_(z²), designated as e_g) experience greater repulsion and rise in energy by +(3/5)Δ₀ (+0.6Δ₀) above the barycentre, while the three non-axial d-orbitals (d_xy, d_yz, d_zx, designated as t_2g) lie between the axes and decrease in energy by -(2/5)Δ₀ (-0.4Δ₀) below the barycentre.'
                },
                {
                  term: 'Crystal Field Splitting in Tetrahedral Coordination Entities (Δₜ)',
                  definition:
                    'In a tetrahedral complex (CN = 4), the d-orbital splitting is inverted and smaller: Δₜ = (4/9)Δ₀. The three t₂ orbitals (d_xy, d_yz, d_zx) are closer to the ligand approach direction and rise by +(2/5)Δₜ above the barycentre, while the two e orbitals (d_(x²-y²), d_(z²)) drop by -(3/5)Δₜ below the barycentre.'
                },
                {
                  term: 'Bonding in Metal Carbonyls (Synergic Effect & Back-Bonding)',
                  definition:
                    'The metal–carbon (M–C) bond in metal carbonyls (e.g., [Ni(CO)₄], [Fe(CO)₅], [Cr(CO)₆]) possesses both σ and π character. The M–C σ bond is formed by the donation of a lone pair of electrons on the carbonyl carbon into a vacant orbital of the metal. The M–C π bond (back-bonding) is formed by the donation of a pair of electrons from a filled d-orbital of the metal into the vacant antibonding π* orbital of carbon monoxide (CO). This metal-to-ligand bonding creates a synergic effect which strengthens the bond between CO and the metal.'
                }
              ],
              qaPairs: [
                {
                  number: 'CFT Q1',
                  badge: 'Handwritten Q6',
                  question: 'On the basis of Crystal Field Theory, write the electronic configuration for a d⁴ ion if: (i) Δ₀ < P, and (ii) Δ₀ > P.',
                  answer:
                    '• (i) When Δ₀ < P (Weak field ligand, pairing energy P exceeds splitting energy Δ₀): The 4th electron enters one of the higher-energy e_g orbitals rather than pairing in t_2g. Configuration = t_2g³ e_g¹ (High-spin complex, 4 unpaired electrons).\n• (ii) When Δ₀ > P (Strong field ligand, splitting energy Δ₀ exceeds pairing energy P): The 4th electron pairs up in the lower-energy t_2g orbitals. Configuration = t_2g⁴ e_g⁰ (Low-spin complex, 2 unpaired electrons).'
                },
                {
                  number: 'CFT Q2',
                  badge: 'Handwritten Q7',
                  question: 'Explain bonding in metal carbonyls (What is the synergic effect / back-bonding?).',
                  answer:
                    'In metal carbonyls, the metal-carbon bond has both σ and π character:\n1. M←C σ-bond: Formed by donation of lone pair of electrons on the carbonyl carbon into a vacant hybrid orbital of the metal.\n2. M→C π-bond (dπ–pπ* back-bonding): Formed by sidewise donation of a pair of electrons from a filled d-orbital of the metal into the vacant antibonding π* orbital of CO.\n3. Synergic Effect: The metal-to-ligand back-bonding strengthens the σ-bond and vice-versa, creating a synergic effect that strengthens the M–CO bond.'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'chem-d-sub-2-2',
        title: '2.2 One-Line Definitions, Werner’s Theory, VBT & Revision Questions (Q1–Q12)',
        sections: [
          {
            id: 'chem-d-sec-2-2-1',
            title: '2 One-Line Questions + All 12 Handwritten Coordination Compounds Revision Questions Solved',
            explanation:
              'Complete definitions for the 2 one-line questions and step-by-step solutions to every problem on the handwritten Coordination Compounds revision sheets.',
            structuredData: {
              examBlueprintBadge: 'Teacher Exam Focus • 2 One-Line Definitions + All 12 Handwritten Revision Questions',
              visualDiagrams: [
                {
                  id: 'coordination-vbt-isomers',
                  title: 'VBT Hybridisation & Geometrical / Optical Isomers of [Co(en)₂Cl₂]⁺',
                  subtitle: 'Handwritten Sheets 1.38.55 PM & 1.38.56 PM'
                }
              ],
              definitions: [
                {
                  term: 'Ambidentate Ligand (One-Liner Q1a)',
                  definition:
                    'A unidentate ligand which has two different donor atoms and can coordinate (ligate) to the central metal atom/ion through either of the two atoms. Examples: NO₂⁻ (nitrito-N) / ONO⁻ (nitrito-O) and SCN⁻ (thiocyanato) / NCS⁻ (isothiocyanato).'
                },
                {
                  term: 'Homoleptic and Heteroleptic Complexes (One-Liner Q1b)',
                  definition:
                    '• Homoleptic Complex: A complex in which a metal is bound to only one kind of donor groups/ligands, e.g., [Co(NH₃)₆]³⁺, [Ni(CO)₄].\n• Heteroleptic Complex: A complex in which a metal is bound to more than one kind of donor groups/ligands, e.g., [Co(NH₃)₄Cl₂]⁺, [Pt(NH₃)₂Cl₂].'
                },
                {
                  term: 'Chelating Ligand & Chelate Complex (One-Liner Q1c)',
                  definition:
                    'When a di- or polydentate ligand (such as ethane-1,2-diamine "en", oxalate C₂O₄²⁻, or EDTA⁴⁻) uses two or more donor atoms simultaneously to bind a single central metal ion, it forms a ring structure called a chelate complex. Chelating ligands confer extra stability to the complex (Chelate Effect).'
                },
                {
                  term: 'Double Salt vs Complex Salt',
                  definition:
                    '• Double Salt: Dissociates completely into simple ions in water (e.g., Mohr’s salt FeSO₄·(NH₄)₂SO₄·6H₂O, Potash alum).\n• Complex Salt: Contains a complex ion in square brackets that does not dissociate into simple metal ions in water (e.g., K₄[Fe(CN)₆] → 4K⁺ + [Fe(CN)₆]⁴⁻).'
                }
              ],
              qaPairs: [
                {
                  number: 'Rev Q2',
                  badge: 'Isomerism Identification',
                  question: 'What type of isomerism do the following complexes exhibit?\n(a) [Cr(H₂O)₆]Cl₃  (b) [Co(ONO)(NH₃)₅]Cl  (c) [Co(NH₃)₆][Cr(CN)₆]  (d) [CoBr(NH₃)₅]SO₄  (e) [Co(en)₃]Cl₃ and [Co(en)₂Cl₂]⁺',
                  answer:
                    '• (a) [Cr(H₂O)₆]Cl₃: Solvate (Hydrate) isomerism (due to exchange of H₂O as ligand and counter ion).\n• (b) [Co(ONO)(NH₃)₅]Cl: Linkage isomerism (due to ambidentate ligand –ONO vs –NO₂).\n• (c) [Co(NH₃)₆][Cr(CN)₆]: Coordination isomerism (interchange of ligands between cationic and anionic complex entities).\n• (d) [CoBr(NH₃)₅]SO₄: Ionisation isomerism (exchange of Br⁻ and SO₄²⁻ counter ion; isomer is [Co(SO₄)(NH₃)₅]Br).\n• (e) [Co(en)₃]Cl₃: Optical isomerism (d and l enantiomers); [Co(en)₂Cl₂]⁺: Both Geometrical (cis/trans) and Optical isomerism (cis-isomer is optically active).'
                },
                {
                  number: 'Rev Q3',
                  badge: 'AgNO₃ Precipitation',
                  question: 'When a coordination compound CrCl₃·6H₂O (or CoCl₃·6H₂O) is mixed with AgNO₃, write the structural formula and IUPAC name of the complex if:\n(i) 1 mole of AgCl is precipitated\n(ii) 2 moles of AgCl are precipitated\n(iii) 3 moles of AgCl are precipitated',
                  answer:
                    '• (i) 1 mole AgCl precipitated (1 Cl⁻ outside square bracket): [Cr(H₂O)₄Cl₂]Cl·2H₂O — Tetraaquadichloridochromium(III) chloride dihydrate (or Cobalt(III)).\n• (ii) 2 moles AgCl precipitated (2 Cl⁻ outside square bracket): [Cr(H₂O)₅Cl]Cl₂·H₂O — Pentaaquachloridochromium(III) chloride monohydrate.\n• (iii) 3 moles AgCl precipitated (3 Cl⁻ outside square bracket): [Cr(H₂O)₆]Cl₃ — Hexaaquachromium(III) chloride.'
                },
                {
                  number: 'Rev Q4',
                  badge: 'Chelate Stability',
                  question: 'Among the following complexes, which is most stable and why?\n(a) [Cr(en)₃]Cl₃   (b) [Cr(NH₃)₃Cl₃]   (c) [Fe(CN)₆]³⁻',
                  answer:
                    '(a) [Cr(en)₃]Cl₃ is the most stable complex because "en" (ethane-1,2-diamine) is a bidentate chelating ligand that forms stable 5-membered chelate rings with Cr³⁺ (Chelate Effect).'
                },
                {
                  number: 'Rev Q5 & Q12',
                  badge: 'VBT Hybridisation & Magnetism',
                  question: 'Write the hybridisation, geometry, and magnetic behaviour of:\n(i) [Ni(CO)₄]   (ii) [Fe(H₂O)₆]²⁺   (iii) [Ni(CN)₄]²⁻',
                  answer:
                    '• (i) [Ni(CO)₄]: Ni is in 0 oxidation state (3d⁸ 4s²). Strong ligand CO pairs all 4s electrons into 3d (3d¹⁰) → sp³ hybridisation, Tetrahedral geometry, Diamagnetic (0 unpaired electrons).\n• (ii) [Fe(H₂O)₆]²⁺: Fe²⁺ (3d⁶). H₂O is a weak field ligand (no pairing) → sp³d² hybridisation (Outer orbital / High spin), Octahedral geometry, Paramagnetic (4 unpaired electrons, μ = √(4(4+2)) = √24 = 4.90 BM).\n• (iii) [Ni(CN)₄]²⁻: Ni²⁺ (3d⁸). CN⁻ is a strong field ligand (pairs the two unpaired 3d electrons) → dsp² hybridisation, Square planar geometry, Diamagnetic (0 unpaired electrons).'
                },
                {
                  number: 'Rev Q8',
                  badge: '[CoF₆]³⁻ vs [Co(en)₃]³⁺',
                  question: 'Out of [CoF₆]³⁻ and [Co(en)₃]³⁺, which complex is:\n(i) Paramagnetic   (ii) More stable   (iii) Inner orbital complex   (iv) High spin complex',
                  answer:
                    'Both contain Co³⁺ (3d⁶). F⁻ is a weak field ligand (sp³d², 4 unpaired e⁻), whereas "en" is a strong field chelating ligand (d²sp³, 0 unpaired e⁻):\n• (i) Paramagnetic: [CoF₆]³⁻ (4 unpaired electrons)\n• (ii) More stable: [Co(en)₃]³⁺ (due to chelate effect of bidentate ligand "en")\n• (iii) Inner orbital complex: [Co(en)₃]³⁺ (d²sp³ hybridisation using inner 3d orbitals)\n• (iv) High spin complex: [CoF₆]³⁻ (sp³d² outer orbital complex)'
                },
                {
                  number: 'Rev Q9 & Q10',
                  badge: '[Co(en)₂Cl₂]⁺ & [Pt(NH₃)₂Cl₂]Cl₂',
                  question: 'For [Co(en)₂Cl₂]⁺ and [Pt(NH₃)₂Cl₂]Cl₂, find Oxidation Number, Coordination Number, IUPAC Name, Hybridisation, Geometry, Magnetic Nature, and Isomers.',
                  answer:
                    '• For [Co(en)₂Cl₂]⁺: O.N. of Co = x + 2(0) + 2(-1) = +1 ⇒ x = +3; C.N. = 6 (since "en" is bidentate: 2×2 + 2 = 6); IUPAC Name = Dichloridobis(ethane-1,2-diamine)cobalt(III) ion; Hybridisation = d²sp³ (inner orbital, low spin); Geometry = Octahedral; Magnetic nature = Diamagnetic (0 unpaired e⁻); Isomerism = Shows cis and trans geometrical isomers, and cis-[Co(en)₂Cl₂]⁺ is optically active (d and l forms).\n• For [Pt(NH₃)₂Cl₂]Cl₂: O.N. of Pt = +4 (5d⁶); C.N. = 4; IUPAC Name = Diamminedichloridoplatinum(IV) chloride; Hybridisation = dsp² / d²sp³; Diamagnetic; shows cis and trans geometrical isomers.'
                },
                {
                  number: 'Rev Q11',
                  badge: 'Werner’s Theory',
                  question: 'What are the postulates of Werner’s Coordination Theory?',
                  answer:
                    '1. In coordination compounds, metal atoms exhibit two types of linkages (valencies): Primary valency and Secondary valency.\n2. Primary valencies are normally ionisable, correspond to the oxidation state of the metal, and are satisfied by negative ions.\n3. Secondary valencies are non-ionisable, correspond to the coordination number (fixed for a metal), and are satisfied by neutral molecules or negative ions (ligands).\n4. The ions/groups bound by secondary linkages to the metal have characteristic spatial arrangements (coordination polyhedra) corresponding to different coordination numbers (e.g., CN = 6 is octahedral; CN = 4 is tetrahedral or square planar).'
                }
              ]
            }
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CHAPTER 3: CHEMICAL KINETICS
  // ==========================================================================
  {
    id: 'chem-d-ch-3',
    number: 3,
    title: 'Chemical Kinetics: Rate Law, Order vs Molecularity, Pseudo-1st-Order & Numericals',
    description:
      'Rate of reaction, Rate law, Order vs Molecularity distinguish, Pseudo-first-order reaction & formula, Zero & 1st order integrated rate equations, Half-life, Effect of temperature (Arrhenius) & 5 solved numericals.',
    available: true,
    tag: 'Order vs Molecularity • Pseudo-1st-Order • 1st Order & Arrhenius',
    subchapters: [
      {
        id: 'chem-d-sub-3-1',
        title: '3.1 Rate Law, Order vs Molecularity Distinguish & Pseudo-First-Order Formula (MLM 1, 2, 4)',
        sections: [
          {
            id: 'chem-d-sec-3-1-1',
            title: 'Rate of Reaction, Rate Law, Order vs Molecularity Distinguish & Pseudo-First-Order Reaction',
            explanation:
              'Covers every definition requested by Mam in Chemical Kinetics: Rate of reaction, Rate law, Order of reaction, Molecularity of a reaction, Distinguish between Order and Molecularity (at least 3–4 points), Factors affecting rate, and Pseudo-first-order reaction formula.',
            keyFormulas: [
              {
                name: 'Rate Law & Order of Reaction (n = x + y)',
                formula: '\\text{Rate} = k[A]^x[B]^y \\quad \\Rightarrow \\quad \\text{Order } (n) = x + y',
                description: 'x and y are experimentally determined powers of reactant concentrations; k is the rate constant.'
              },
              {
                name: 'General Unit of Rate Constant (k) for Order n',
                formula: '\\text{Unit of } k = (\\text{mol L}^{-1})^{1-n}\\text{s}^{-1}',
                description: 'Zero Order (n=0): mol L⁻¹ s⁻¹  |  First Order (n=1): s⁻¹  |  Second Order (n=2): mol⁻¹ L s⁻¹'
              },
              {
                name: 'Pseudo-First-Order Reaction Formula (Acid Hydrolysis of Ester)',
                formula: 'CH_3COOC_2H_5 + H_2O\\text{ (excess)} ->[H^+] CH_3COOH + C_2H_5OH \\implies \\text{Rate} = k[CH_3COOC_2H_5]',
                description: 'Since water is present in large excess, [H₂O] remains practically constant: Rate = k′[CH₃COOC₂H₅][H₂O] = k[CH₃COOC₂H₅] (Order = 1, Molecularity = 2).'
              }
            ],
            structuredData: {
              examBlueprintBadge: 'Teacher Exam Focus • Rate Law • Order vs Molecularity Distinguish • Pseudo-First-Order Formula',
              definitions: [
                {
                  term: 'Rate of a Reaction',
                  definition:
                    'The change in molar concentration of either a reactant or a product per unit time. Unit: mol L⁻¹ s⁻¹ (or atm s⁻¹ for gases). For N₂ + 3H₂ → 2NH₃, Rate = -d[N₂]/dt = -(1/3)d[H₂]/dt = +(1/2)d[NH₃]/dt.'
                },
                {
                  term: 'Rate Law (Rate Expression) & Specific Rate Constant (k)',
                  definition:
                    'The mathematical expression that denotes the experimentally observed rate of a reaction in terms of the molar concentrations of reactants raised to some powers (which may or may not equal stoichiometric coefficients): Rate = k[A]ˣ[B]ʸ. The rate constant k (specific reaction rate) is equal to the rate of reaction when the concentration of each reactant is unity ([A] = [B] = 1 mol L⁻¹).'
                },
                {
                  term: 'Order of a Reaction',
                  definition:
                    'The sum of powers (exponents) of the concentration of the reactants in the rate law expression is called the order of that chemical reaction (Order = x + y). It is an experimental quantity and can be zero, a positive integer, negative, or a fraction.'
                },
                {
                  term: 'Molecularity of a Reaction',
                  definition:
                    'The number of reacting species (atoms, ions, or molecules) taking part in an elementary reaction which must collide simultaneously in order to bring about a chemical reaction. It is a theoretical concept and is always a positive whole number (1, 2, or 3); it can never be zero or fractional.'
                },
                {
                  term: 'Pseudo-First-Order Reaction & Formula',
                  definition:
                    'A chemical reaction which is truly of higher order (bimolecular, molecularity = 2) but behaves as a first-order reaction (order = 1) under given conditions because one of the reactants (usually the solvent H₂O) is present in large excess. Examples:\n1. Acid Hydrolysis of Ethyl Acetate: CH₃COOC₂H₅ + H₂O (excess) →(H⁺) CH₃COOH + C₂H₅OH; Formula: Rate = k[CH₃COOC₂H₅].\n2. Inversion of Cane Sugar: C₁₂H₂₂O₁₁ + H₂O (excess) →(H⁺) C₆H₁₂O₆ (Glucose) + C₆H₁₂O₆ (Fructose); Formula: Rate = k[C₁₂H₂₂O₁₁].'
                }
              ],
              keyPoints: [
                'Factors Affecting Rate of Reaction (MLM 2): (1) Nature of reactants (lower activation energy Eₐ reacts faster), (2) Concentration of reactants (Rate increases with concentration), (3) Temperature (Rate nearly doubles for every 10°C rise), (4) Presence of a catalyst (lowers Eₐ by providing an alternate pathway, increasing rate), (5) Surface area of reactants, and (6) Exposure to radiation (photochemical reactions).'
              ],
              comparisonTables: [
                {
                  title: 'Distinguish Between Order of a Reaction and Molecularity of a Reaction (MLM 4)',
                  headers: ['S.No.', 'Order of a Reaction', 'Molecularity of a Reaction'],
                  rows: [
                    ['1.', 'It is the sum of the powers (exponents) to which the concentration terms are raised in the rate law expression.', 'It is the number of reacting species (atoms, ions, or molecules) that must collide simultaneously in an elementary step.'],
                    ['2.', 'It is an experimentally determined quantity obtained from the rate law.', 'It is a theoretical concept determined from the reaction mechanism (slowest elementary step).'],
                    ['3.', 'It may be zero, a whole number, a fraction, or even negative.', 'It is always a positive whole number (1, 2, or 3) and can never be zero, negative, or fractional.'],
                    ['4.', 'It is applicable to both elementary and complex (multi-step) reactions.', 'It is applicable only to elementary (single-step) reactions; overall molecularity has no meaning for complex reactions.']
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        id: 'chem-d-sub-3-2',
        title: '3.2 Zero & 1st Order Integrated Equations, Half-Life, Graphs & Temperature Effect (MLM 3, 5, 6, 8)',
        sections: [
          {
            id: 'chem-d-sec-3-2-1',
            title: 'Zero Order & First Order Rate Equations, Half-Life (t₁/₂), Graphs & Effect of Temperature (Arrhenius)',
            explanation:
              'Complete formula sheet, graphs, and derivations from your handwritten notebook for Zero Order reactions, First Order reactions, Half-life period, and the Effect of Temperature on reaction rate.',
            keyFormulas: [
              {
                name: '1. Zero Order Integrated Rate Constant & Half-Life',
                formula: 'k = \\frac{[R]_0 - [R]}{t} \\quad \\text{and} \\quad t_{1/2} = \\frac{[R]_0}{2k}',
                description: 'For a zero-order reaction, t₁/₂ is directly proportional to initial concentration [R]₀. Plot of [R] vs t has Slope = -k.'
              },
              {
                name: '2. First Order Integrated Rate Constant & Half-Life',
                formula: 'k = \\frac{2.303}{t}\\log\\frac{[R]_0}{[R]} = \\frac{2.303}{t}\\log\\left(\\frac{a}{a - x}\\right) \\quad \\text{and} \\quad t_{1/2} = \\frac{0.693}{k}',
                description: 'For a first-order reaction, half-life t₁/₂ = 0.693/k is independent of initial concentration [R]₀. Plot of log[R] vs t has Slope = -k/2.303.'
              },
              {
                name: '3. Arrhenius Equation (Effect of Temperature on Rate Constant)',
                formula: 'k = A e^{-E_a / RT} \\quad \\Rightarrow \\quad \\log\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{2.303 R}\\left[\\frac{T_2 - T_1}{T_1 T_2}\\right]',
                description: 'Convert °C to Kelvin (T = t°C + 273). Use R = 8.314 J mol⁻¹ K⁻¹ (so 2.303 × R = 19.15 J mol⁻¹ K⁻¹).'
              }
            ],
            structuredData: {
              examBlueprintBadge: 'Teacher Exam Focus • 1st Order Reaction • Effect of Temperature on Rate • Graphs & Half-Life',
              visualDiagrams: [
                {
                  id: 'kinetics-order-graphs',
                  title: 'Zero Order vs First Order Concentration-Time Graphs & Activation Energy Profile',
                  subtitle: 'Handwritten MLM 8 & Reaction Profile'
                }
              ],
              definitions: [
                {
                  term: 'Effect of Temperature on Rate of Reaction (Handwritten MLM 5)',
                  definition:
                    'The rate of a chemical reaction increases with an increase in temperature (whether the reaction is exothermic or endothermic) because kinetic energy of molecules increases, increasing the fraction of molecules having energy equal to or greater than activation energy (e^(-Eₐ/RT)). It nearly doubles (increases 2 to 3 times) for every 10°C (10 K) rise in temperature. The quantitative relationship between rate constant (k) and temperature (T) is given by the Arrhenius equation: k = A·e^(-Eₐ/RT).'
                },
                {
                  term: 'Half-Life Period of a Reaction (t₁/₂)',
                  definition:
                    'The time in which the concentration of a reactant is reduced to one-half of its initial concentration ([R] = [R]₀ / 2). For a zero-order reaction, t₁/₂ = [R]₀ / (2k) (directly proportional to [R]₀). For a first-order reaction, t₁/₂ = 0.693 / k (independent of initial concentration [R]₀).'
                },
                {
                  term: 'Activation Energy (Eₐ) & Collision Theory (MLM 3)',
                  definition:
                    '• Activation Energy (Eₐ): The extra minimum energy that reactant molecules must absorb so their energy becomes equal to the threshold energy and they can form the intermediate activated complex.\n• Collision Theory: Rate = P · Z_AB · e^(-Eₐ/RT), where Z_AB is collision frequency and P is the steric/orientation factor. For a collision to be effective, molecules must cross both the Energy Barrier (≥ Eₐ) and the Orientation Barrier.'
                }
              ],
              comparisonTables: [
                {
                  title: 'Quick Comparison: Zero Order vs First Order Reaction (Handwritten Formula Sheet)',
                  headers: ['Property', 'Zero Order Reaction (n = 0)', 'First Order Reaction (n = 1)'],
                  rows: [
                    ['Differential Rate Law', 'Rate = -d[R]/dt = k[R]⁰ = k', 'Rate = -d[R]/dt = k[R]¹'],
                    ['Unit of Rate Constant (k)', 'mol L⁻¹ s⁻¹', 's⁻¹ (or min⁻¹)'],
                    ['Integrated Rate Equation', 'k = ([R]₀ - [R]) / t', 'k = (2.303 / t) log([R]₀ / [R])'],
                    ['Half-Life Formula (t₁/₂)', 't₁/₂ = [R]₀ / (2k)  (Proportional to [R]₀)', 't₁/₂ = 0.693 / k  (Independent of [R]₀)'],
                    ['Straight-Line Graph & Slope', '[R] vs t → Slope = -k, Intercept = [R]₀', 'ln[R] vs t → Slope = -k  |  log[R] vs t → Slope = -k / 2.303']
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        id: 'chem-d-sub-3-3',
        title: '3.3 Handwritten Solved Kinetics Numericals (Order Effect, 50%→80%, t₉₉%=2t₉₀%, Arrhenius Eₐ)',
        sections: [
          {
            id: 'chem-d-sec-3-3-1',
            title: 'All 5 Handwritten Chemical Kinetics Numerical Problems (Step-by-Step)',
            explanation:
              'Exact worked-out solutions for all 5 numerical problems from your Chemical Kinetics class notebook.',
            structuredData: {
              examBlueprintBadge: 'Handwritten Notebook Numericals • Step-by-Step Exam Solutions',
              qaPairs: [
                {
                  number: 'Num 1',
                  badge: 'Handwritten Q7',
                  question: 'A reaction is of 1st order in A and 2nd order in B:\n(i) Write the differential rate equation.\n(ii) How is the rate affected on increasing the concentration of B three times?\n(iii) How is the rate affected when the concentrations of both A and B are doubled?\n(iv) How is the rate affected when the concentration of B is reduced to half?',
                  answer:
                    '• (i) Differential rate equation: Rate = k[A]¹[B]²\n• (ii) When [B] is tripled (3B): Rate′ = k[A](3[B])² = 9·k[A][B]² ⇒ Rate increases by 9 times.\n• (iii) When both [A] and [B] are doubled (2A, 2B): Rate′ = k(2[A])(2[B])² = 2 × 4 × k[A][B]² = 8·k[A][B]² ⇒ Rate increases by 8 times.\n• (iv) When [B] is reduced to half (½B): Rate′ = k[A](½[B])² = (1/4)·k[A][B]² ⇒ Rate decreases to 1/4 times its initial value.'
                },
                {
                  number: 'Num 2',
                  badge: 'Sample Q1 (50% → 80%)',
                  question: 'A first-order reaction is 50% complete in 25 minutes. Calculate the time for 80% completion of the reaction. [Given: log 5 = 0.6990]',
                  answer:
                    'Step 1: Find rate constant k from 50% completion (t₁/₂ = 25 min):\n  k = 0.693 / t₁/₂ = 0.693 / 25 min⁻¹\nStep 2: For 80% completion, let initial concentration a = 100, so remaining concentration (a - x) = 100 - 80 = 20:\n  t = (2.303 / k) log(a / (a - x))\n  t = (2.303 × 25 / 0.693) × log(100 / 20)\n  t = (2.303 × 25 / 0.693) × log(5)\n  t = (2.303 × 25 × 0.6990) / 0.693 = 83.23 minutes.'
                },
                {
                  number: 'Num 3',
                  badge: 'Sample Q2 (t₉₉% = 2 t₉₀%)',
                  question: 'For a first-order reaction, show that the time required for 99% completion is twice the time required for the completion of 90% of reaction.',
                  answer:
                    '• For 99% completion (a = 100, a - x = 100 - 99 = 1):\n  t₉₉% = (2.303 / k) log(100 / 1) = (2.303 / k) log(10²) = 2 × (2.303 / k)   ...(i)\n• For 90% completion (a = 100, a - x = 100 - 90 = 10):\n  t₉₀% = (2.303 / k) log(100 / 10) = (2.303 / k) log(10) = 1 × (2.303 / k)   ...(ii)\n• Dividing equation (i) by (ii):\n  t₉₉% / t₉₀% = 2  ⇒  t₉₉% = 2 × t₉₀%. (Hence proved).'
                },
                {
                  number: 'Num 4',
                  badge: 'Sample Q3 (Arrhenius Eₐ)',
                  question: 'The rate of a reaction quadruples when the temperature changes from 293 K to 313 K. Calculate the energy of activation (Eₐ) of the reaction assuming that it does not change with temperature. [log 4 = 0.6021, 2.303 R = 19.15 J mol⁻¹ K⁻¹]',
                  answer:
                    'Given: T₁ = 293 K, T₂ = 313 K, k₂ / k₁ = 4, log(4) = 0.6021, and 2.303 R = 19.15 J mol⁻¹ K⁻¹.\nUsing Arrhenius Equation:\n  log(k₂ / k₁) = (Eₐ / 19.15) × [(T₂ - T₁) / (T₁ × T₂)]\n  0.6021 = (Eₐ / 19.15) × [(313 - 293) / (293 × 313)]\n  0.6021 = (Eₐ / 19.15) × [20 / 91709]\n  Eₐ = (0.6021 × 19.15 × 91709) / 20 = 52862.9 J mol⁻¹ = 52.86 kJ mol⁻¹.'
                },
                {
                  number: 'Num 5',
                  badge: 'Energy Profile Curve',
                  question: 'From the Potential Energy vs Reaction Coordinate diagram where Reactant energy E_R = 100 kJ, Activated complex peak = 300 kJ, and Product energy E_P = 200 kJ, find: (i) Activation energy Eₐ, (ii) ΔH of the reaction, and (iii) Nature of forward & reverse reactions.',
                  answer:
                    '• (i) Activation Energy (Eₐ) = Energy of Activated Complex - Energy of Reactants = 300 - 100 = 200 kJ.\n• (ii) Enthalpy Change (ΔH) = E_P - E_R = 200 - 100 = +100 kJ.\n• (iii) Since ΔH = +ve (+100 kJ), the forward reaction is Endothermic. For the reverse reaction (P → R), ΔH = -100 kJ (-ve, Exothermic) and Eₐ(reverse) = 300 - 200 = 100 kJ.'
                }
              ]
            }
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CHAPTER 4: ORGANIC CHEMISTRY I — TEACHER-MARKED MLM "GIVE REASONS" & TRENDS
  // ==========================================================================
  {
    id: 'chem-d-ch-4',
    number: 4,
    title: 'Organic Chem I: Teacher-Marked MLM "Give Reasons" & Property Trends',
    description:
      'Handwritten 5–6M Property Rules (Acidity, Basicity 2130/2310, Boiling Point, Solubility, Nucleophilic Addition) + All 16 Marked MLM Give Reasons for Aldehydes/Ketones/Acids + All 12 Marked MLM Give Reasons for Amines.',
    available: true,
    tag: '5–6M Properties • 28 Teacher-Marked MLM Give Reasons',
    subchapters: [
      {
        id: 'chem-d-sub-4-1',
        title: '4.1 Handwritten Property Cheat-Rules (Acidity, Basicity 2130/2310, Solubility & Boiling Point)',
        sections: [
          {
            id: 'chem-d-sec-4-1-1',
            title: 'Master Cheat-Rules for Organic Property & Arrangement Questions (5–6 Marks)',
            explanation:
              'From your handwritten notebook ("min 5–6M → property: acidity, basicity, solubility"): these 5 rules solve every arrangement and reasoning question in Organic Chemistry.',
            structuredData: {
              examBlueprintBadge: 'Handwritten Top Note • Min 5–6 Marks from Property (Acidity, Basicity, Solubility, Reactivity)',
              definitions: [
                {
                  term: '1. Nucleophilic Addition Reactivity (Aldehydes vs Ketones)',
                  definition:
                    'Reactivity order: HCHO > CH₃CHO > CH₃CH₂CHO > CH₃COCH₃ > C₆H₅COCH₃ > C₆H₅COC₆H₅ (and Propanal > Benzaldehyde). Reasons:\n• (i) Steric Effect: Presence of bulky alkyl/phenyl groups around the carbonyl carbon (>C=O) hinders the approaching nucleophile (Nu⁻).\n• (ii) Electronic (+I / Resonance) Effect: Alkyl groups have a +I (electron-releasing) effect which reduces the electrophilicity (+ve charge) of the carbonyl carbon. In benzaldehyde, resonance with the benzene ring reduces the polarity of the >C=O group.'
                },
                {
                  term: '2. Acidic Character of Carboxylic Acids (–I/EWG vs +I/EDG)',
                  definition:
                    '• Electron-Withdrawing Groups (–I / EWG: –NO₂ > –CN > –F > –Cl > –Br > –I) stabilise the carboxylate anion by dispersing negative charge → INCREASE Acid Strength (Decrease pKₐ).\n• Electron-Donating Groups (+I / EDG: –CH₃, –C₂H₅, –OCH₃) destabilise the carboxylate anion by intensifying negative charge → DECREASE Acid Strength (Increase pKₐ).\n• Key Orders:\n  1. p-NO₂-C₆H₄COOH > C₆H₅COOH > p-CH₃-C₆H₄COOH\n  2. CCl₃COOH > CHCl₂COOH > ClCH₂COOH > CH₃COOH\n  3. FCH₂COOH > ClCH₂COOH > BrCH₂COOH > CH₃COOH\n  4. CH₃CH₂CH(Br)COOH > CH₃CH(Br)CH₂COOH > CH₃CH₂CH₂COOH > (CH₃)₂CHCOOH'
                },
                {
                  term: '3. Basicity of Amines (Gas Phase vs Aqueous Phase 2130 & 2310 Rules)',
                  definition:
                    'Basicity ∝ K_b ∝ 1 / pK_b (More basic = Higher K_b = Smaller pK_b).\n• In Gas Phase (Pure +I effect): 3° > 2° > 1° > NH₃  ⇒  (CH₃)₃N > (CH₃)₂NH > CH₃NH₂ > NH₃.\n• In Aqueous Phase (Combined +I, Solvation/H-bonding & Steric effects):\n  – For Methyl (–CH₃) group [Rule 2130]: 2° > 1° > 3° > NH₃  ⇒  (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃\n  – For Ethyl (–C₂H₅) group [Rule 2310]: 2° > 3° > 1° > NH₃  ⇒  (C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃\n• Aliphatic vs Aromatic Amine: CH₃CH₂NH₂ > C₆H₅NH₂ (In ethylamine, +I effect of ethyl group increases electron density on N; in aniline, lone pair on N is delocalised over the benzene ring by resonance and is less available for protonation).\n• Substituted Anilines: p-CH₃-C₆H₄NH₂ (p-toluidine, +I/EDG) > C₆H₅NH₂ (Aniline) > p-NO₂-C₆H₄NH₂ (p-nitroaniline, –I/EWG).'
                },
                {
                  term: '4. Boiling Point & Water Solubility Trends',
                  definition:
                    '• Across Functional Groups: Carboxylic Acid > Alcohol > Aldehyde/Ketone > Ether > Alkane (Carboxylic acids form extensive intermolecular H-bonded dimers; alcohols form intermolecular H-bonds; aldehydes/ketones have dipole–dipole interactions; alkanes have weak van der Waals forces).\n• Isomeric Amines Boiling Point & Solubility: 1° Amine (2 H atoms on N) > 2° Amine (1 H atom on N) > 3° Amine (No H atom on N for H-bonding). Thus: CH₃CH₂NH₂ > CH₃NHCH₃ > (CH₃)₃N.\n• Ethylamine vs Aniline Solubility: CH₃CH₂NH₂ is soluble in water (forms H-bonds with water), whereas C₆H₅NH₂ is insoluble due to the large hydrophobic benzene ring.'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'chem-d-sub-4-2',
        title: '4.2 Aldehydes, Ketones & Carboxylic Acids — 16 Teacher-Marked MLM Give Reasons',
        sections: [
          {
            id: 'chem-d-sec-4-2-1',
            title: 'All 16 Teacher-Selected MLM Give Reasons (#1, 2, 3, 5, 6, 7, 8, 9, 11, 12, 13, 18, 20, 21, 25, 27)',
            explanation:
              'On your handwritten page ("G R (aldehyde, ketone, CA): 1, 2, 3, 5, 6, 7, 8, 9, 11, 12, 13, 18, 20, 21, 25, 27"), these 16 exact questions from MLM pages 28–29 were marked for the exam.',
            structuredData: {
              examBlueprintBadge: 'Handwritten Selection • MLM Aldehydes, Ketones & Carboxylic Acids #1, 2, 3, 5–9, 11–13, 18, 20, 21, 25, 27',
              qaPairs: [
                {
                  number: 'MLM #1',
                  badge: 'Nucleophilic Addition Order',
                  question: 'Arrange in increasing order of reactivity towards nucleophilic addition: CH₃COCH₃, C₆H₅COC₆H₅, CH₃CHO.',
                  answer: 'C₆H₅COC₆H₅ < CH₃COCH₃ < CH₃CHO (Diphenyl ketone has maximum steric hindrance from two phenyl rings; ethanal is an aldehyde with least steric hindrance and only one +I methyl group).'
                },
                {
                  number: 'MLM #2',
                  badge: 'Acidic Character Order',
                  question: 'Arrange in increasing order of acidic character: Cl–CH₂–COOH, Cl₂CH–COOH, CCl₃–COOH.',
                  answer: 'Cl–CH₂–COOH < Cl₂CH–COOH < CCl₃–COOH (As the number of electron-withdrawing –Cl atoms increases, the –I effect increases, stabilising the carboxylate ion).'
                },
                {
                  number: 'MLM #3',
                  badge: 'Nucleophilic Addition Order',
                  question: 'Arrange in increasing order of reactivity towards nucleophilic addition: CH₃CHO, C₆H₅CHO, HCHO.',
                  answer: 'C₆H₅CHO < CH₃CHO < HCHO (Benzaldehyde is stabilised by resonance which decreases the +ve charge on carbonyl carbon; methanal has no alkyl group and zero steric hindrance).'
                },
                {
                  number: 'MLM #5',
                  badge: 'Acidic Character Order',
                  question: 'Arrange in increasing order of acidic character: ClCH₂COOH, FCH₂COOH, CH₃COOH.',
                  answer: 'CH₃COOH < Cl–CH₂–COOH < F–CH₂–COOH (Fluorine has a stronger –I electron-withdrawing effect than chlorine, while CH₃COOH has no halogen).'
                },
                {
                  number: 'MLM #6 & #20',
                  badge: 'Acid Strength Order',
                  question: 'Arrange in increasing order of acid strength: (CH₃)₂CHCOOH, CH₃CH₂CH(Br)COOH, CH₃CH(Br)CH₂COOH.',
                  answer: '(CH₃)₂CHCOOH < CH₃CH(Br)CH₂COOH < CH₃CH₂CH(Br)COOH (The –I effect of –Br decreases with distance; α-bromobutanoic acid has –Br closest to –COOH).'
                },
                {
                  number: 'MLM #7',
                  badge: 'Give Reason',
                  question: 'Give reason: Aldehydes are more reactive than ketones towards nucleophilic addition.',
                  answer: '1. Steric reason: Ketones have two bulky alkyl/aryl groups which sterically hinder the approach of the nucleophile to the carbonyl carbon, whereas aldehydes have only one.\n2. Electronic reason: Two alkyl groups in ketones reduce the electrophilicity (+ve charge) of the carbonyl carbon more effectively by their +I effect than a single alkyl group in aldehydes.'
                },
                {
                  number: 'MLM #8',
                  badge: 'Give Reason',
                  question: 'Give reason: The boiling points of aldehydes and ketones are lower than those of the corresponding carboxylic acids.',
                  answer: 'Because carboxylic acids form extensive intermolecular hydrogen bonding (existing as cyclic dimers), whereas aldehydes and ketones have only weaker dipole–dipole interactions.'
                },
                {
                  number: 'MLM #9',
                  badge: 'Give Reason',
                  question: 'Give reason: Aldehydes and ketones undergo nucleophilic addition reactions.',
                  answer: 'Due to the greater electronegativity of oxygen compared to carbon, the carbon atom of the polar carbonyl (>C=O) bond acquires a partial positive (δ+) charge and acts as an electrophilic centre, so it is readily attacked by nucleophiles.'
                },
                {
                  number: 'MLM #11',
                  badge: 'Give Reason',
                  question: 'Give reason: Ethanoic acid is a weaker acid than benzoic acid.',
                  answer: 'In ethanoic acid (CH₃COOH), the methyl (–CH₃) group exerts a +I (electron-releasing) effect which destabilises the acetate anion by intensifying the negative charge, whereas in benzoic acid the phenyl group attached to –COOH is sp²-hybridised (electron-withdrawing).'
                },
                {
                  number: 'MLM #12',
                  badge: 'Give Reason',
                  question: 'Give reason: Why are lower members of aldehydes easily miscible with water?',
                  answer: 'Lower members of aldehydes (like methanal, ethanal) can form intermolecular hydrogen bonds with water molecules. As the size of the hydrophobic alkyl chain increases in higher members, solubility decreases.'
                },
                {
                  number: 'MLM #13',
                  badge: 'Acid Strength Order',
                  question: 'Arrange in increasing order of acid strength: Benzoic acid, 4-Nitrobenzoic acid, 3,4-Dinitrobenzoic acid, 4-Methoxybenzoic acid.',
                  answer: '4-Methoxybenzoic acid < Benzoic acid < 4-Nitrobenzoic acid < 3,4-Dinitrobenzoic acid (–OCH₃ is an electron-donating group which decreases acidity, while –NO₂ is a strong electron-withdrawing group which increases acidity).'
                },
                {
                  number: 'MLM #18',
                  badge: 'Reactivity Towards HCN',
                  question: 'Arrange in increasing order of reactivity towards HCN: Acetaldehyde, Acetone, Methyl tert-butyl ketone.',
                  answer: 'Methyl tert-butyl ketone < Acetone < Acetaldehyde (Steric hindrance and +I effect are maximum in methyl tert-butyl ketone and minimum in acetaldehyde).'
                },
                {
                  number: 'MLM #21',
                  badge: 'Give Reason',
                  question: 'Give reason: Ethanal is more reactive than acetone towards nucleophilic addition reaction.',
                  answer: 'Due to greater steric hindrance of two methyl groups in acetone and the stronger +I effect of two –CH₃ groups which decreases the positive charge on the carbonyl carbon of acetone.'
                },
                {
                  number: 'MLM #25',
                  badge: 'Give Reason',
                  question: 'Would you expect benzaldehyde to be more reactive or less reactive in nucleophilic addition reactions than propanal? Explain.',
                  answer: 'Benzaldehyde is LESS reactive than propanal. The carbon atom of the carbonyl group of benzaldehyde is less electrophilic than that of propanal because the polarity of the >C=O group in benzaldehyde is reduced due to resonance (+R effect) with the benzene ring.'
                },
                {
                  number: 'MLM #27',
                  badge: 'Give Reason',
                  question: 'Give reason: Carboxylic acids are higher boiling liquids than alcohols of comparable molecular masses.',
                  answer: 'Due to more extensive association of carboxylic acid molecules through strong intermolecular hydrogen bonding (forming stable dimer rings even in the vapour phase) compared to alcohols.'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'chem-d-sub-4-3',
        title: '4.3 Amines & Diazonium Salts — 12 Teacher-Marked MLM Give Reasons',
        sections: [
          {
            id: 'chem-d-sec-4-3-1',
            title: 'All 12 Teacher-Selected MLM Give Reasons for Amines (#1, 2, 3, 5, 8, 11, 13, 14, 15, 16, 17, 18)',
            explanation:
              'On your handwritten page ("Amines: 1, 2, 3, 5, 8, 11, 13, 14, 15, 16, 17, 18"), these 12 exact questions from MLM pages 29–31 were marked for the exam.',
            structuredData: {
              examBlueprintBadge: 'Handwritten Selection • MLM Amines #1, 2, 3, 5, 8, 11, 13, 14, 15, 16, 17, 18',
              qaPairs: [
                {
                  number: 'MLM #1',
                  badge: 'Basic Strength Order',
                  question: 'Arrange the following in increasing order of basic strength: C₆H₅NH₂, CH₃CH₂NH₂, C₆H₅NHCH₃.',
                  answer: 'C₆H₅NH₂ < C₆H₅NHCH₃ < CH₃CH₂NH₂ (In aniline, lone pair is delocalised in benzene ring; N-methylaniline has +I of –CH₃; ethylamine has no resonance loss and strong +I effect of –C₂H₅).'
                },
                {
                  number: 'MLM #2',
                  badge: 'Water Solubility Order',
                  question: 'Arrange in increasing order of solubility in water: CH₃NH₂, (CH₃)₃N, CH₃NHCH₃.',
                  answer: '(CH₃)₃N < CH₃NHCH₃ < CH₃NH₂ (1° amine has two H-atoms on N for extensive intermolecular H-bonding with water; 2° has one H-atom; 3° has no H-atom on N).'
                },
                {
                  number: 'MLM #3',
                  badge: 'Give Reason',
                  question: 'Give reason: p-Methylaniline (p-toluidine) is more basic than p-nitroaniline.',
                  answer: 'The –CH₃ group shows a +I (electron-releasing) effect which increases electron density on the N atom, whereas the –NO₂ group shows strong –I and –R (electron-withdrawing) effects which decrease electron density on N.'
                },
                {
                  number: 'MLM #5 & #16',
                  badge: 'Basic Strength Order',
                  question: 'Arrange in order of basic strength: Aniline (C₆H₅NH₂), p-Nitroaniline (p-NO₂-C₆H₄NH₂), and p-Toluidine (p-CH₃-C₆H₄NH₂).',
                  answer: 'Increasing basicity: p-Nitroaniline < Aniline < p-Toluidine.\nDecreasing basicity (#16): p-Toluidine > Aniline > p-Nitroaniline.'
                },
                {
                  number: 'MLM #8',
                  badge: 'Give Reason',
                  question: 'Give reason: Aniline does not undergo Friedel-Crafts reaction (alkylation or acylation).',
                  answer: 'Aniline being a Lewis base reacts with the catalyst anhydrous AlCl₃ (a Lewis acid) to form an insoluble salt (C₆H₅NH₂⁺AlCl₃⁻). Due to this, the nitrogen atom of aniline acquires a positive charge and acts as a strong deactivating group for further reaction.'
                },
                {
                  number: 'MLM #11',
                  badge: 'Give Reason',
                  question: 'Give reason: Ethylamine is freely soluble in water whereas aniline is only slightly soluble (insoluble).',
                  answer: 'Ethylamine forms intermolecular hydrogen bonds with water molecules, whereas in aniline the large hydrophobic benzene (C₆H₅–) group retards hydrogen bonding and repels water.'
                },
                {
                  number: 'MLM #13',
                  badge: 'Aqueous Basicity (Rule 2130)',
                  question: 'Arrange in increasing order of basic strength in aqueous solution: NH₃, CH₃NH₂, (CH₃)₂NH, (CH₃)₃N.',
                  answer: 'NH₃ < (CH₃)₃N < CH₃NH₂ < (CH₃)₂NH  (Decreasing order: (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃ — Rule 2130).'
                },
                {
                  number: 'MLM #14',
                  badge: 'Aqueous Basicity (Rule 2310)',
                  question: 'Arrange in increasing order of basic strength in aqueous solution: NH₃, C₂H₅NH₂, (C₂H₅)₂NH, (C₂H₅)₃N.',
                  answer: 'NH₃ < C₂H₅NH₂ < (C₂H₅)₃N < (C₂H₅)₂NH  (Decreasing order: (C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃ — Rule 2310).'
                },
                {
                  number: 'MLM #15',
                  badge: 'Basic Strength Order',
                  question: 'Arrange in increasing order of basic strength: C₆H₅NH₂, C₆H₅N(CH₃)₂, (C₂H₅)₂NH, and CH₃NH₂.',
                  answer: 'C₆H₅NH₂ < C₆H₅N(CH₃)₂ < CH₃NH₂ < (C₂H₅)₂NH.'
                },
                {
                  number: 'MLM #17',
                  badge: 'pK_b Values Order',
                  question: 'Arrange in increasing order of pK_b values: C₂H₅NH₂, C₆H₅NHCH₃, (C₂H₅)₂NH, and C₆H₅NH₂.',
                  answer: '(C₂H₅)₂NH < C₂H₅NH₂ < C₆H₅NHCH₃ < C₆H₅NH₂  (Remember: Stronger base has smaller pK_b value!).'
                },
                {
                  number: 'MLM #18',
                  badge: 'Gas Phase Basicity',
                  question: 'Give reason: The order of basicity of amines in the gaseous phase follows the order: Tertiary amine (3°) > Secondary amine (2°) > Primary amine (1°) > NH₃.',
                  answer: 'In the gas phase, there is no solvation effect by water. Basicity depends purely on the +I (electron-donating) effect of alkyl groups: the greater the number of electron-donating alkyl groups attached to N, the higher the electron density and basicity.'
                },
                {
                  number: 'Bonus MLM #6 & #20',
                  badge: 'Frequent Aniline Reasons',
                  question: 'Give reason: (a) pK_b of aniline is more than that of methylamine. (b) Aniline on nitration gives a substantial amount (47%) of m-nitroaniline.',
                  answer:
                    '• (a) In aniline, the lone pair on N is delocalised into the benzene ring by resonance and is less available for donation, whereas in methylamine the +I effect of –CH₃ increases electron density on N. Thus aniline is a weaker base and has a higher pK_b.\n• (b) In the strongly acidic nitrating mixture (conc. HNO₃ + conc. H₂SO₄), aniline gets protonated to form the anilinium ion (C₆H₅–NH₃⁺), which is meta-directing.'
                }
              ]
            }
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CHAPTER 5: ORGANIC CHEMISTRY II — 6 DISTINGUISH TESTS & 18 NAME REACTIONS
  // ==========================================================================
  {
    id: 'chem-d-ch-5',
    number: 5,
    title: 'Organic Chem II: 6 Distinguish Tests (Min 2 in Exam) & 18 Exam Reactions',
    description:
      'All 6 Distinguish Tests (Lucas, Iodoform, Neutral FeCl₃, Tollens/Fehling, Hinsberg 1°/2°/3°, Carbylamine & Azo Dye Coupling) + All 18 Handwritten Exam Name Reactions + Benzene Diazonium Chloride Spider Map.',
    available: true,
    tag: 'Min 2 of 6 Distinguish • 18 Handwritten Reactions',
    subchapters: [
      {
        id: 'chem-d-sub-5-1',
        title: '5.1 The 6 Distinguish Tests & Handwritten Amine Distinguish Tables (Min 2 in Exam)',
        sections: [
          {
            id: 'chem-d-sec-5-1-1',
            title: 'The 6 Core Organic Distinguish Tests + High-Yield Compound Pairs (MLM Pages 31–34)',
            explanation:
              'From your teacher’s exam hint ("from 6 distinguish min 2 will come") and handwritten sheet #5 (Hinsberg & Coupling distinguish tables): master these 6 chemical tests and the top compound pairs.',
            structuredData: {
              examBlueprintBadge: 'Teacher Exam Focus • Minimum 2 out of 6 Distinguish Tests Guaranteed in Exam',
              comparisonTables: [
                {
                  title: 'Master Table: The 6 Core Organic Distinguish Tests',
                  headers: ['Test Name', 'Reagent Used', 'Who Gives Positive Test & Observation', 'Who Does NOT React'],
                  rows: [
                    [
                      '1. Lucas Test (1°, 2°, 3° Alcohols)',
                      'Conc. HCl + Anhydrous ZnCl₂ (Lucas Reagent)',
                      '• 3° Alcohol ((CH₃)₃COH): White turbidity appears IMMEDIATELY.\n• 2° Alcohol (CH₃CH(OH)CH₃): White turbidity after 5–10 minutes.',
                      '1° Alcohol (CH₃CH₂OH): No turbidity at room temperature.'
                    ],
                    [
                      '2. Iodoform Test (Methyl Ketones & CH₃CH(OH)– Alcohols)',
                      'I₂ + NaOH (or NaOI), warm',
                      'Compounds with CH₃–C(=O)– or CH₃–CH(OH)– group (Ethanol, Propan-2-ol, Ethanal, Acetone, Acetophenone, Pentan-2-one): Forms YELLOW precipitate of CHI₃ (Iodoform).',
                      'Methanol, Propan-1-ol, Propanal, Benzaldehyde, Benzophenone, Pentan-3-one: No yellow ppt.'
                    ],
                    [
                      '3. Neutral FeCl₃ Test (Phenol vs Alcohols)',
                      'Neutral FeCl₃ solution',
                      'Phenol (C₆H₅OH): Gives a VIOLET colouration [(C₆H₅O)₃Fe].',
                      'Alcohols (Ethanol CH₃CH₂OH, Methanol CH₃OH): No violet colouration.'
                    ],
                    [
                      '4. Tollens’ & Fehling’s Test (Aldehydes vs Ketones)',
                      '• Tollens: Ammoniacal AgNO₃\n• Fehling: CuSO₄ (A) + Alkaline Rochelle Salt (B)',
                      '• Tollens: All Aldehydes (Aliphatic & Aromatic like Benzaldehyde) give a BRIGHT SILVER MIRROR (Ag↓).\n• Fehling: Only Aliphatic Aldehydes give a REDDISH-BROWN ppt of Cu₂O.',
                      '• Ketones do not give Tollens’ or Fehling’s test.\n• Aromatic aldehydes (Benzaldehyde) do NOT give Fehling’s test.'
                    ],
                    [
                      '5. Hinsberg’s Test (1°, 2°, 3° Amines — Handwritten Sheet #5)',
                      'Benzenesulphonyl chloride (C₆H₅SO₂Cl) + aq. KOH',
                      '• 1° Amine (C₂H₅NH₂): Forms precipitate SOLUBLE in alkali (KOH).\n• 2° Amine ((C₂H₅)₂NH): Forms precipitate INSOLUBLE in alkali (KOH).',
                      '3° Amine ((C₂H₅)₃N): No reaction with Hinsberg reagent.'
                    ],
                    [
                      '6. Carbylamine Test & Azo Dye Coupling Test (Amines)',
                      '• Carbylamine: CHCl₃ + alc. KOH, heat\n• Coupling: C₆H₅N₂⁺Cl⁻ (or NaNO₂/HCl, 0–5°C + β-naphthol)',
                      '• Carbylamine: Only 1° Amines (RNH₂ or C₆H₅NH₂) give an OFFENSIVE / FOUL SMELL of isocyanide (R–NC).\n• Coupling / Azo Dye: Aromatic 1° Amine (Aniline) gives a YELLOW PPT of p-aminoazobenzene (or orange dye with β-naphthol).',
                      '• 2° & 3° Amines (e.g., C₆H₅NHCH₃) do NOT give Carbylamine test.\n• Aliphatic 1° Amine (CH₃NH₂) does NOT give Azo dye.'
                    ]
                  ]
                },
                {
                  title: 'Handwritten Sheet #5: Hinsberg Test Table (1° vs 2° vs 3° Amines)',
                  headers: ['Reagent', '1° Amine (R–NH₂)', '2° Amine (R₂NH)', '3° Amine (R₃N)'],
                  rows: [
                    [
                      'Hinsberg Reagent: Benzenesulphonyl chloride (C₆H₅SO₂Cl) + Alkali',
                      'Forms N-alkylbenzenesulphonamide — Product is SOLUBLE in alkali (due to acidic H on N).',
                      'Forms N,N-dialkylbenzenesulphonamide — Product is INSOLUBLE in alkali (no H on N).',
                      'No reaction.'
                    ]
                  ]
                },
                {
                  title: 'Handwritten Sheet #5: Coupling Reaction Table (Aliphatic vs Aromatic 1° Amine)',
                  headers: ['Reagent', 'Aliphatic Amine (CH₃NH₂ / C₂H₅NH₂)', 'Aromatic Amine (Aniline C₆H₅NH₂)'],
                  rows: [
                    [
                      'Coupling Reaction with Benzene Diazonium Chloride (C₆H₅N₂⁺Cl⁻)',
                      'No coupling reaction (No azo dye formed).',
                      'Forms a YELLOW precipitate of p-aminoazobenzene (yellow azo dye).'
                    ]
                  ]
                }
              ],
              qaPairs: [
                {
                  number: 'Pair 1',
                  badge: 'Iodoform Test',
                  question: 'Give a chemical test to distinguish between: (a) Ethanol (CH₃CH₂OH) and Methanol (CH₃OH), or (b) Propan-2-ol and Propan-1-ol.',
                  answer: 'Iodoform Test (warm with I₂ and NaOH): Ethanol and Propan-2-ol contain the CH₃CH(OH)– group and form a yellow precipitate of iodoform (CHI₃), whereas Methanol and Propan-1-ol give no reaction.',
                  equation: 'CH₃CH₂OH + 4I₂ + 6NaOH ──► CHI₃↓ (Yellow ppt) + HCOONa + 5NaI + 5H₂O'
                },
                {
                  number: 'Pair 2',
                  badge: 'Neutral FeCl₃ Test',
                  question: 'Give a chemical test to distinguish between Phenol (C₆H₅OH) and Ethanol (CH₃CH₂OH) [or Benzyl alcohol].',
                  answer: 'Neutral FeCl₃ Test: Phenol reacts with neutral FeCl₃ solution to give a violet colouration [(C₆H₅O)₃Fe], whereas Ethanol (or Benzyl alcohol) shows no reaction.',
                  equation: '3C₆H₅OH + FeCl₃ ──► (C₆H₅O)₃Fe (Violet colouration) + 3HCl'
                },
                {
                  number: 'Pair 3',
                  badge: 'Iodoform / Tollens Test',
                  question: 'Give a chemical test to distinguish between: (a) Acetophenone (C₆H₅COCH₃) and Benzophenone (C₆H₅COC₆H₅), or (b) Ethanal (CH₃CHO) and Benzaldehyde (C₆H₅CHO).',
                  answer:
                    '• (a) Acetophenone vs Benzophenone (Iodoform Test): Acetophenone is a methyl ketone (–COCH₃) and gives a yellow precipitate of CHI₃ with I₂/NaOH, whereas Benzophenone does not react.\n• (b) Ethanal vs Benzaldehyde (Fehling’s or Iodoform Test): Ethanal gives a yellow ppt in Iodoform test and a reddish-brown ppt of Cu₂O with Fehling’s solution, whereas Benzaldehyde gives neither.',
                  equation: 'C₆H₅COCH₃ + 3I₂ + 4NaOH ──► CHI₃↓ (Yellow ppt) + C₆H₅COONa + 3NaI + 3H₂O'
                },
                {
                  number: 'Pair 4',
                  badge: 'Carbylamine Test',
                  question: 'Give a chemical test to distinguish between Aniline (C₆H₅NH₂) and N-Methylaniline (C₆H₅NHCH₃) [or Ethylamine and Diethylamine].',
                  answer: 'Carbylamine Test (heat with CHCl₃ and alcoholic KOH): Aniline (1° amine) forms phenyl isocyanide (C₆H₅NC) which has an offensive/foul smell, whereas N-methylaniline (2° amine) does not react.',
                  equation: 'C₆H₅NH₂ + CHCl₃ + 3KOH (alc.) ──(Heat)──► C₆H₅NC (Foul smell) + 3KCl + 3H₂O'
                },
                {
                  number: 'Pair 5',
                  badge: 'NaHCO₃ Test',
                  question: 'Give a chemical test to distinguish between Benzoic acid (or Ethanoic acid) and Phenol.',
                  answer: 'Sodium Bicarbonate (NaHCO₃) Test: Carboxylic acids (Benzoic acid / Ethanoic acid) react with aq. NaHCO₃ to produce brisk effervescence of CO₂ gas, whereas Phenol does not react with NaHCO₃.',
                  equation: 'C₆H₅COOH + NaHCO₃ ──► C₆H₅COONa + CO₂↑ (Brisk effervescence) + H₂O'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'chem-d-sub-5-2',
        title: '5.2 The 18 Handwritten Exam Reactions & Benzene Diazonium Chloride Spider Map',
        sections: [
          {
            id: 'chem-d-sec-5-2-1',
            title: 'All 18 Numbered Reactions from Your Handwritten Notebook + Diazonium Salt Flowchart',
            explanation:
              'Every single numbered reaction (1 to 18) written in your handwritten notebook pages (1.39.02 PM & 1.39.03 PM) plus the Benzene Diazonium Chloride (C₆H₅N₂⁺Cl⁻) master conversion map.',
            structuredData: {
              examBlueprintBadge: 'Handwritten Reaction List #1–18 + Benzene Diazonium Chloride Master Map',
              visualDiagrams: [
                {
                  id: 'diazonium-reaction-map',
                  title: 'Benzene Diazonium Chloride (C₆H₅N₂⁺Cl⁻) Master Reaction Map (9 Pathways)',
                  subtitle: 'Handwritten Pages 1.38.51 PM & 1.38.57 PM'
                }
              ],
              qaPairs: [
                {
                  number: 'Rxn 1',
                  badge: 'Nitro Reduction',
                  question: '1. Reduction of Nitrobenzene (C₆H₅NO₂) with Sn/HCl or Fe/HCl',
                  answer: 'Nitrobenzene is reduced to Aniline (Fe/HCl is preferred because FeCl₂ formed gets hydrolysed to release HCl, so only a small amount of HCl is needed to initiate the reaction).',
                  equation: 'C₆H₅–NO₂ + 6[H]  ──(Sn/HCl or Fe/HCl)──►  C₆H₅–NH₂ (Aniline) + 2H₂O'
                },
                {
                  number: 'Rxn 2',
                  badge: 'Aniline Nitration',
                  question: '2. Direct Nitration of Aniline (C₆H₅NH₂) with Conc. HNO₃ + Conc. H₂SO₄',
                  answer: 'Direct nitration of aniline at 288 K yields a mixture of three products: p-nitroaniline (51%), m-nitroaniline (47% — due to protonation of aniline to meta-directing anilinium ion), and o-nitroaniline (2%).',
                  equation: 'C₆H₅–NH₂  ──(Conc. HNO₃ + Conc. H₂SO₄, 288 K)──►  p-NO₂-C₆H₄NH₂ (51%) + m-NO₂-C₆H₄NH₂ (47%) + o-NO₂-C₆H₄NH₂ (2%)'
                },
                {
                  number: 'Rxn 3',
                  badge: 'Aniline Bromination',
                  question: '3. Bromination of Aniline (C₆H₅NH₂) with Bromine Water (Br₂ aq.)',
                  answer: 'Aniline reacts instantly with bromine water at room temperature to give a white precipitate of 2,4,6-tribromoaniline.',
                  equation: 'C₆H₅–NH₂ + 3Br₂(aq)  ──►  2,4,6-Tribromoaniline (White ppt) + 3HBr'
                },
                {
                  number: 'Rxn 4 & 14',
                  badge: 'Carbylamine Test',
                  question: '4. Carbylamine Reaction (Isocyanide Test)',
                  answer: 'Aliphatic and aromatic primary (1°) amines on heating with chloroform (CHCl₃) and alcoholic KOH form foul-smelling isocyanides (carbylamines).',
                  equation: 'CH₃–NH₂ + CHCl₃ + 3KOH(alc.) ──(Δ)──► CH₃–NC (Methyl isocyanide) + 3KCl + 3H₂O\nC₆H₅–NH₂ + CHCl₃ + 3KOH(alc.) ──(Δ)──► C₆H₅–NC (Phenyl isocyanide) + 3KCl + 3H₂O'
                },
                {
                  number: 'Rxn 5 & 13',
                  badge: 'Step-Down Amine Synthesis',
                  question: '5. Hoffmann Bromamide Degradation Reaction',
                  answer: 'When a primary amide is treated with bromine (Br₂) in an aqueous or ethanolic solution of NaOH (or KOH), it forms a primary amine containing ONE carbon atom less than the original amide.',
                  equation: 'CH₃–CO–NH₂ + Br₂ + 4NaOH  ──►  CH₃–NH₂ (Methanamine) + Na₂CO₃ + 2NaBr + 2H₂O\nC₆H₅–CO–NH₂ + Br₂ + 4NaOH  ──►  C₆H₅–NH₂ (Aniline) + Na₂CO₃ + 2NaBr + 2H₂O'
                },
                {
                  number: 'Rxn 6',
                  badge: 'No α-Hydrogen Aldehydes',
                  question: '6. Cannizzaro Reaction',
                  answer: 'Aldehydes which do NOT have an α-hydrogen atom (e.g., Formaldehyde HCHO, Benzaldehyde C₆H₅CHO) undergo self-oxidation and reduction (disproportionation) on heating with concentrated alkali: one molecule is reduced to alcohol and another is oxidised to carboxylic acid salt.',
                  equation: '2HCHO + Conc. KOH  ──►  CH₃OH (Methanol) + HCOOK (Potassium formate)\n2C₆H₅CHO + Conc. NaOH  ──►  C₆H₅CH₂OH (Benzyl alcohol) + C₆H₅COONa (Sodium benzoate)'
                },
                {
                  number: 'Rxn 7',
                  badge: '>C=O to –CH₂– (Acidic)',
                  question: '7. Clemmensen Reduction',
                  answer: 'The carbonyl (>C=O) group of aldehydes and ketones is reduced to a –CH₂– (methylene) group on treatment with zinc amalgam (Zn–Hg) and concentrated hydrochloric acid (Conc. HCl), forming alkanes.',
                  equation: 'CH₃–CHO + 4[H]  ──(Zn–Hg / Conc. HCl)──►  CH₃–CH₃ (Ethane) + H₂O\nCH₃–CO–CH₃ + 4[H]  ──(Zn–Hg / Conc. HCl)──►  CH₃–CH₂–CH₃ (Propane) + H₂O'
                },
                {
                  number: 'Rxn 8',
                  badge: '>C=O to –CH₂– (Basic)',
                  question: '8. Wolff-Kishner Reduction',
                  answer: 'The carbonyl (>C=O) group of aldehydes and ketones is reduced to a –CH₂– group by treating with hydrazine (NH₂NH₂) to form a hydrazone, followed by heating with KOH or NaOH in a high-boiling solvent like ethylene glycol.',
                  equation: '>C=O  ──(NH₂NH₂, -H₂O)──►  >C=N–NH₂  ──(KOH / Ethylene glycol, Heat)──►  >CH₂ + N₂'
                },
                {
                  number: 'Rxn 9',
                  badge: 'Acyl Chloride to Aldehyde',
                  question: '9. Rosenmund Reduction',
                  answer: 'Acyl chloride (acid chloride) is selectively hydrogenated over a catalyst of palladium on barium sulphate (Pd / BaSO₄) to form the corresponding aldehyde.',
                  equation: 'C₆H₅–COCl (Benzoyl chloride) + H₂  ──(Pd / BaSO₄)──►  C₆H₅–CHO (Benzaldehyde) + HCl'
                },
                {
                  number: 'Rxn 10',
                  badge: 'Benzene to Benzaldehyde',
                  question: '10. Gatterman-Koch Reaction',
                  answer: 'When benzene or its derivative is treated with carbon monoxide (CO) and hydrogen chloride (HCl) in the presence of anhydrous aluminium chloride (AlCl₃) or cuprous chloride (CuCl), it gives benzaldehyde.',
                  equation: 'C₆H₆ (Benzene) + CO + HCl  ──(Anhyd. AlCl₃ / CuCl)──►  C₆H₅–CHO (Benzaldehyde)'
                },
                {
                  number: 'Rxn 11',
                  badge: 'Step-Down to Alkane',
                  question: '11. Decarboxylation Reaction',
                  answer: 'Sodium salts of carboxylic acids lose carbon dioxide to form hydrocarbons (alkanes with one carbon less) when heated with soda lime (a 3:1 mixture of NaOH and CaO).',
                  equation: 'CH₃COONa (Sodium acetate) + NaOH  ──(CaO, Heat)──►  CH₄ (Methane) + Na₂CO₃'
                },
                {
                  number: 'Rxn 12',
                  badge: 'α-Halogenation of Acids',
                  question: '12. Hell-Volhard-Zelinsky (HVZ) Reaction',
                  answer: 'Carboxylic acids having an α-hydrogen are halogenated at the α-position on treatment with chlorine or bromine in the presence of a small amount of red phosphorus to give α-halocarboxylic acids.',
                  equation: 'R–CH₂–COOH  ──((i) X₂ / Red Phosphorus  (ii) H₂O)──►  R–CH(X)–COOH  (where X = Cl, Br)'
                },
                {
                  number: 'Rxn 15',
                  badge: '0–5°C (273–278 K)',
                  question: '15. Diazotisation Reaction',
                  answer: 'Conversion of aniline into benzene diazonium chloride by treating it with nitrous acid (generated in situ from NaNO₂ and HCl) at low temperature 273–278 K (0–5°C).',
                  equation: 'C₆H₅–NH₂ + NaNO₂ + 2HCl  ──(273–278 K / 0–5°C)──►  C₆H₅–N₂⁺Cl⁻ (Benzene diazonium chloride) + NaCl + 2H₂O'
                },
                {
                  number: 'Rxn 16',
                  badge: 'Cu₂X₂ / HX',
                  question: '16. Sandmeyer’s Reaction',
                  answer: 'Cl⁻, Br⁻, and CN⁻ nucleophiles can easily be introduced into the benzene ring by treating freshly prepared benzene diazonium salt with cuprous chloride (Cu₂Cl₂/HCl), cuprous bromide (Cu₂Br₂/HBr), or cuprous cyanide (CuCN/KCN).',
                  equation: 'C₆H₅–N₂⁺Cl⁻  ──(Cu₂Cl₂/HCl or Cu₂Br₂/HBr or CuCN/KCN)──►  C₆H₅–Cl / C₆H₅–Br / C₆H₅–CN + N₂'
                },
                {
                  number: 'Rxn 17',
                  badge: 'Cu Powder / HX',
                  question: '17. Gatterman Reaction',
                  answer: 'Chlorine or bromine can be introduced into the benzene ring by treating benzene diazonium salt solution with the corresponding halogen acid (HCl or HBr) in the presence of copper powder (Cu).',
                  equation: 'C₆H₅–N₂⁺Cl⁻  ──(Cu / HCl or Cu / HBr)──►  C₆H₅–Cl or C₆H₅–Br + N₂ + CuX'
                },
                {
                  number: 'Rxn 18',
                  badge: 'Yellow & Orange Azo Dyes',
                  question: '18. Coupling Reaction (Formation of p-Aminoazobenzene Yellow Dye & p-Hydroxyazobenzene Orange Dye)',
                  answer: 'Benzene diazonium chloride couples with electron-rich aromatic compounds like aniline (in mildly acidic medium) to give p-aminoazobenzene (yellow dye), and with phenol (in mildly alkaline medium) to give p-hydroxyazobenzene (orange dye).',
                  equation: 'C₆H₅–N₂⁺Cl⁻ + H–C₆H₄–NH₂  ──(H⁺ / OH⁻)──►  C₆H₅–N=N–C₆H₄–NH₂ (p-Aminoazobenzene, Yellow dye) + Cl⁻ + H₂O\nC₆H₅–N₂⁺Cl⁻ + H–C₆H₄–OH  ──(OH⁻)──►  C₆H₅–N=N–C₆H₄–OH (p-Hydroxyazobenzene, Orange dye) + Cl⁻ + H₂O'
                },
                {
                  number: 'Bonus Rxn',
                  badge: 'Handwritten Sheet 1.38.58 PM',
                  question: 'Gabriel Phthalimide Synthesis & Aldol Condensation',
                  answer:
                    '• Gabriel Phthalimide Synthesis: Phthalimide on treatment with ethanolic KOH forms potassium phthalimide, which on heating with alkyl halide (R–X) followed by alkaline hydrolysis (NaOH aq) produces a pure primary aliphatic amine (R–NH₂). (Aromatic primary amines like aniline cannot be prepared because aryl halides do not undergo nucleophilic substitution).\n• Aldol Condensation: Aldehydes/ketones having at least one α-hydrogen (e.g., 2CH₃CHO) condense in the presence of dilute NaOH to form β-hydroxyaldehyde (3-hydroxybutanal / aldol), which on heating loses H₂O to form α,β-unsaturated aldehyde (But-2-enal).',
                  equation: 'Phthalimide ──(1. KOH  2. R–X  3. NaOH(aq))──► R–NH₂ (1° Aliphatic Amine) + Sodium phthalate\n2CH₃CHO ──(dil. NaOH)──► CH₃–CH(OH)–CH₂–CHO ──(Δ, -H₂O)──► CH₃–CH=CH–CHO (But-2-enal)'
                }
              ]
            }
          }
        ]
      }
    ]
  }
];

export const CLEAN_CHEMISTRY_SYLLABUS = {
  id: 'chemistry',
  name: 'Chemistry',
  code: '043',
  accentColor: '#C75B3B',
  description:
    'Exam-Focused MLM & Remedial Notes: Biomolecules (5 Reactions & 6 Remedial Qs), Coordination Compounds (CFT Diagrams & Synergic Effect), Chemical Kinetics & Organic Chem (MLM Give Reasons, 6 Distinguish & 18 Reactions)',
  volumes: [
    {
      id: 'chem-d-vol-1',
      title: 'D Version Chemistry • Exam Focus & MLM',
      subtitle:
        'Biomolecules, Coordination Compounds, Chemical Kinetics, MLM Give Reasons, 6 Distinguish Tests & 18 Name Reactions',
      chapters: CLEAN_CHEMISTRY_CHAPTERS
    }
  ]
};
