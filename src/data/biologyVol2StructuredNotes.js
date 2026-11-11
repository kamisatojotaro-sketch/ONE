// NCERT Class 12 Biology Volume 2 (Chapters 9–13) Structured Notes Database
// Oswaal-grade definitions, key points, mnemonics, commonly made errors, assertion-reason, and exam trends

export const BIOLOGY_VOL2_STRUCTURED_NOTES = {
  // ==========================================================================
  // CHAPTER 9: BIOTECHNOLOGY: PRINCIPLES AND PROCESSES
  // ==========================================================================
  'bio-sub-9-1': {
    definitions: [
      {
        term: 'Restriction Endonucleases (Molecular Scissors)',
        definition: 'Enzymes that inspect the length of a DNA sequence, bind to a specific recognition sequence (4 to 8 bp palindrome), and cut both strands of the DNA double helix at specific points within their sugar-phosphate backbones.'
      },
      {
        term: 'Palindromic Nucleotide Sequence',
        definition: 'A sequence of base pairs in double-stranded DNA that reads the same on the two strands when orientation of reading is kept the same (e.g., $5\'\\to 3\'$): for EcoRI, $5\'-\\text{GAATTC}-3\'$ / $3\'-\\text{CTTAAG}-5\'$.'
      }
    ],
    keyPoints: [
      '• <strong>Naming Convention (e.g. EcoRI):</strong> $E$ = Genus (<em>Escherichia</em>), $co$ = species (<em>coli</em>), $R$ = strain (RY 13), $I$ = Roman numeral order of isolation from that strain.',
      '• <strong>Sticky Ends & DNA Ligase:</strong> EcoRI cuts between G and A on both strands away from the centre of the palindrome, leaving overhanging single-stranded "sticky ends" that form hydrogen bonds with complementary cut counterparts and are covalently sealed by T4 DNA Ligase.'
    ],
    extraPoints: [
      '• <em>Hind II</em> was the first restriction endonuclease isolated and characterised; it always cuts DNA at a specific 6 bp recognition sequence producing blunt ends.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'EcoRI Cut Site',
      phrase: 'G ↓ A A T T C  (Cut between G and A on both strands!)',
      explanation: 'Always draw the arrows between G and A on both 5\'→3\' and 3\'→5\' strands in board diagrams.'
    },
    commonlyMadeErrors: [
      {
        error: 'Defining a DNA palindrome like a word palindrome (reading same left-to-right on a single strand).',
        tip: 'A DNA palindrome reads the same on the TWO complementary strands when read in the SAME polarity (e.g. 5\'→3\' on both strands).',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'Restriction endonucleases are also called molecular scissors.',
      reason: 'They cleave the phosphodiester backbone of duplex DNA at specific palindromic recognition sites.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Essential for generating recombinant DNA molecules.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020',
      frequency: '99% Guaranteed',
      typicalMarks: '3 Marks',
      questionTypes: 'Explain EcoRI naming, palindromic sequence, and sticky end formation',
      hotTopic: 'Action of EcoRI and DNA ligase in forming rDNA'
    }
  },
  'bio-sub-9-2': {
    definitions: [
      {
        term: 'Agarose Gel Electrophoresis & Elution',
        definition: 'A matrix separation technique where negatively charged DNA fragments migrate toward the positive anode under an electric field and separate by size (sieving effect). Cutting out and extracting purified DNA bands from the agarose gel piece is called Elution.'
      }
    ],
    keyPoints: [
      '• <strong>Charge & Size Separation:</strong> DNA is negatively charged (due to phosphate groups), so it moves from cathode ($-$) to anode ($+$). Smaller fragments travel faster and farther toward the anode.',
      '• <strong>Visualisation:</strong> Separated DNA fragments are stained with <strong>Ethidium Bromide (EtBr)</strong> and exposed to <strong>UV radiation</strong>, appearing as bright orange-coloured bands.'
    ],
    extraPoints: [],
    reactions: [],
    oswaalMnemonic: {
      title: 'Gel Electrophoresis Trio',
      phrase: 'DNA is Negative (Moves to Anode +) | Smallest goes Farthest | EtBr + UV = Bright Orange Bands!',
      explanation: 'Covers all 3 sub-parts of the standard 3-mark gel electrophoresis question.'
    },
    commonlyMadeErrors: [
      {
        error: 'Writing that DNA fragments can be seen in visible light after staining with ethidium bromide.',
        tip: 'DNA stained with Ethidium Bromide is visible ONLY under UV radiation as bright orange bands!',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'In agarose gel electrophoresis, smaller DNA fragments move farther towards the anode than larger fragments.',
      reason: 'DNA is negatively charged and agarose gel acts as a molecular sieve based on fragment size.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Sieving effect retards larger fragments more than smaller ones.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2019',
      frequency: '99% Guaranteed',
      typicalMarks: '2 Marks / 3 Marks',
      questionTypes: 'Labelled gel diagram (wells at cathode, smallest band at anode), EtBr + UV role, elution definition',
      hotTopic: 'EtBr orange fluorescence + elution'
    }
  },
  'bio-sub-9-3': {
    definitions: [
      {
        term: 'Origin of Replication (ori) & Selectable Marker',
        definition: 'ori is the sequence where replication starts and controls copy number of linked DNA. A selectable marker ($amp^R, tet^R$) helps identify and eliminate non-transformants and selectively permit the growth of transformants.'
      },
      {
        term: 'Insertional Inactivation (Blue-White Screening)',
        definition: 'Insertion of foreign DNA into the coding sequence of the $\\beta$-galactosidase gene inactivates the enzyme; recombinant colonies cannot hydrolyse chromogenic substrate and remain WHITE, while non-recombinants turn BLUE.'
      }
    ],
    keyPoints: [
      '• <strong>E. coli Cloning Vector pBR322 Map:</strong>\n  – $ori$: Origin of replication\n  – $rop$: Codes for proteins involved in replication of the plasmid (contains <em>Pvu II</em> site)\n  – $amp^R$ gene: Contains <em>Pst I</em> and <em>Pvu I</em> restriction sites\n  – $tet^R$ gene: Contains <em>BamH I</em> and <em>Sal I</em> restriction sites\n  – Top junction: <em>EcoR I</em>, <em>Cla I</em>, <em>Hind III</em>.',
      '• <strong>Disarmed Pathogens as Vectors:</strong> <em>Agrobacterium tumefaciens</em> Ti plasmid (T-DNA modified for dicot plants) and disarmed Retroviruses (for animal cells).'
    ],
    extraPoints: [],
    reactions: [],
    oswaalMnemonic: {
      title: 'pBR322 Restriction Sites',
      phrase: 'amp^R = Pst I & Pvu I ("PP in Amp") | tet^R = BamH I & Sal I ("BS in Tet") | rop = Pvu II',
      explanation: 'Never mix up BamHI/SalI (in tet^R) with PstI/PvuI (in amp^R)!'
    },
    commonlyMadeErrors: [
      {
        error: 'Writing that recombinant colonies turn blue in insertional inactivation of β-galactosidase.',
        tip: 'Recombinants have an INACTIVATED β-galactosidase gene, so they give WHITE colonies; non-recombinants give BLUE colonies!',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'Selection of recombinants using insertional inactivation of the β-galactosidase gene is preferred over antibiotic resistance markers.',
      reason: 'Antibiotic inactivation requires cumbersome simultaneous replica plating on two different antibiotic plates, whereas chromogenic selection distinguishes recombinants in a single step on one plate.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'One-step visual differentiation of white vs blue colonies.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020, 2018',
      frequency: '99% Guaranteed 3M/5M Question',
      typicalMarks: '3 Marks / 5 Marks',
      questionTypes: 'Label pBR322 diagram, explain BamHI ligation into tet^R, or explain blue-white screening',
      hotTopic: 'pBR322 vector map and insertional inactivation'
    }
  },
  'bio-sub-9-4': {
    definitions: [
      {
        term: 'Competent Host, Microinjection & Biolistics (Gene Gun)',
        definition: 'Divalent $\\text{Ca}^{2+}$ + heat shock ($42^\\circ\\text{C}$) makes bacterial walls competent to take up hydrophilic DNA. Microinjection injects rDNA directly into an animal nucleus; Biolistics bombards plant cells with gold/tungsten microparticles coated with DNA.'
      }
    ],
    keyPoints: [
      '• <strong>Why DNA Cannot Pass Passively Through Cell Membranes:</strong> DNA is a hydrophilic (water-loving) molecule, so it cannot pass through the hydrophobic lipid bilayer of cell membranes unless divalent cations ($\\text{Ca}^{2+}$) create transient pores.'
    ],
    extraPoints: [],
    reactions: [],
    oswaalMnemonic: {
      title: 'Host-Specific Gene Transfer',
      phrase: 'Bacteria = Ca²⁺ + 42°C Heat Shock | Animal Cell = Microinjection | Plant Cell = Biolistics (Gold/Tungsten Gene Gun)',
      explanation: 'Quick 2-mark matching question.'
    },
    commonlyMadeErrors: [
      {
        error: 'Saying DNA is hydrophobic and hence cannot cross the plasma membrane.',
        tip: 'DNA is HYDROPHILIC (due to negatively charged phosphate groups), whereas the membrane core is hydrophobic!',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'Bacterial cells are treated with divalent calcium ions (Ca²⁺) followed by heat shock at 42°C during transformation.',
      reason: 'DNA is a hydrophilic molecule and cannot pass through cell membranes unless transient pores are facilitated.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Ca²⁺ neutralises electrostatic repulsion and facilitates pore entry.'
    },
    examTrend: {
      pastYears: 'CBSE 2023, 2021, 2019',
      frequency: 'High Frequency',
      typicalMarks: '2 Marks / 3 Marks',
      questionTypes: 'How bacterial cells are made competent; biolistics vs microinjection',
      hotTopic: 'Ca²⁺ + Ice → 42°C → Ice protocol'
    }
  },
  'bio-sub-9-5': {
    definitions: [
      {
        term: 'Polymerase Chain Reaction (PCR)',
        definition: 'In vitro amplification of a gene of interest intobillions of copies using two sets of primers and thermostable <em>Taq</em> DNA polymerase (isolated from <em>Thermus aquaticus</em>) via cyclic Denaturation ($94^\\circ\\text{C}$), Annealing ($54^\\circ\\text{C}$), and Extension ($72^\\circ\\text{C}$).'
      }
    ],
    keyPoints: [
      '• <strong>Cell Lysis Enzymes for DNA Isolation:</strong> Bacteria ⟶ Lysozyme; Plant cells ⟶ Cellulase; Fungus ⟶ Chitinase; RNA removed by Ribonuclease; Proteins removed by Protease; Purified DNA precipitated by <strong>chilled ethanol</strong> (spooling).',
      '• <strong>Three Steps of PCR:</strong> (1) Denaturation ($94^\\circ\\text{C}$, H-bonds break); (2) Annealing ($54^\\circ\\text{C}$, oligonucleotide primers bind to $3\'$ ends); (3) Extension ($72^\\circ\\text{C}$, <em>Taq</em> polymerase + dNTPs + $\\text{Mg}^{2+}$ synthesise new strands).',
      '• <strong>Bioreactors:</strong> Stirred-tank bioreactors provide optimal pH, temperature, dissolved oxygen, substrate, salts, and vitamins for large-scale ($100$–$1000\\text{ L}$) culture.'
    ],
    extraPoints: [],
    reactions: [],
    oswaalMnemonic: {
      title: 'PCR D-A-E Temperature Ladder',
      phrase: 'D-A-E: Denaturation (94°C) ⟶ Annealing (54°C) ⟶ Extension (72°C with Taq Polymerase)',
      explanation: 'Never swap the order of Annealing and Extension!'
    },
    commonlyMadeErrors: [
      {
        error: 'Using warm ethanol instead of chilled ethanol to precipitate DNA, or using cellulase to lyse fungal cells.',
        tip: 'Fungal cell walls are made of chitin (use Chitinase!), and DNA precipitates only in CHILLED ethanol.',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'Taq polymerase is indispensable for the Polymerase Chain Reaction (PCR).',
      reason: 'Taq polymerase is a thermostable DNA polymerase isolated from Thermus aquaticus that remains active during the high-temperature denaturation step (94°C).',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Ordinary DNA polymerases denature above 90°C.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020, 2019',
      frequency: '99% Guaranteed',
      typicalMarks: '3 Marks / 5 Marks',
      questionTypes: 'Three steps of PCR with temperatures + role of Taq polymerase; stirred-tank bioreactor features',
      hotTopic: 'PCR amplification steps and Taq polymerase source'
    }
  },

  // ==========================================================================
  // CHAPTER 10: BIOTECHNOLOGY AND ITS APPLICATIONS
  // ==========================================================================
  'bio-sub-10-1': {
    definitions: [
      {
        term: 'Bt Toxin & cry Genes',
        definition: 'Insecticidal crystal protein (protoxin) encoded by <em>cry</em> genes of <em>Bacillus thuringiensis</em>. <em>cryIAc</em> and <em>cryIIAb</em> control cotton bollworms; <em>cryIAb</em> controls corn borer.'
      },
      {
        term: 'RNA Interference (RNAi)',
        definition: 'A cellular defence mechanism in all eukaryotes where complementary double-stranded RNA (dsRNA) binds to and cleaves specific mRNA (silencing its translation), used to protect tobacco roots against nematode <em>Meloidogyne incognita</em>.'
      }
    ],
    keyPoints: [
      '• <strong>Why Bt Toxin Does Not Kill Bacillus Bacterium Itself:</strong> It is produced as an inactive crystalline protoxin; it converts into active toxin ONLY in the <strong>alkaline pH</strong> of the insect midgut, where it solubilises, binds to midgut epithelial cells, creates pores, causes cell swelling/lysis, and kills the insect.'
    ],
    extraPoints: [],
    reactions: [],
    oswaalMnemonic: {
      title: 'cry Gene Target Matching',
      phrase: 'cryIAc & cryIIAb = Cotton Bollworm (2 genes for 2 words) | cryIAb = Corn Borer (1 gene)',
      explanation: '100% guaranteed 1-mark or 3-mark board question!'
    },
    commonlyMadeErrors: [
      {
        error: 'Writing that Bt toxin is activated by acidic pH in the insect stomach.',
        tip: 'Bt protoxin is solubilised and activated strictly by ALKALINE pH in the insect midgut!',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'Bacillus thuringiensis is not killed by the toxic insecticidal protein it produces.',
      reason: 'The Bt toxin protein exists as an inactive protoxin in the bacterium and requires alkaline pH of the insect gut for solubilisation and activation.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Alkaline gut trigger ensures specificity.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020, 2018',
      frequency: '99% Guaranteed 3M/5M Question',
      typicalMarks: '3 Marks / 5 Marks',
      questionTypes: 'Mechanism of Bt toxin activation; RNAi silencing of Meloidogyne incognita in tobacco',
      hotTopic: 'Bt cotton cry genes + RNAi mechanism'
    }
  },
  'bio-sub-10-2': {
    definitions: [
      {
        term: 'Genetically Engineered Insulin (Humulin)',
        definition: 'Human insulin synthesised as a pro-hormone containing A-peptide, B-peptide, and an extra stretch called C-peptide (removed during maturation into active insulin linked by disulphide bonds). Prepared by Eli Lilly (1983) using E. coli plasmids.'
      },
      {
        term: 'Gene Therapy for ADA Deficiency',
        definition: 'Adenosine deaminase (ADA) deficiency impairs T-lymphocyte immunity. Functional ADA cDNA is introduced into patient’s cultured lymphocytes via a disarmed retroviral vector; permanent cure requires gene transfer at early embryonic bone-marrow stage.'
      }
    ],
    keyPoints: [
      '• <strong>Eli Lilly Strategy (1983):</strong> Because bacteria cannot splice out the C-peptide from pro-insulin, Eli Lilly chemically synthesised two separate DNA sequences corresponding to A-chain and B-chain, expressed them separately in <em>E. coli</em> plasmids, extracted the chains, and joined them chemically via <strong>disulphide bonds</strong>.',
      '• <strong>Molecular Diagnosis:</strong> PCR (detects very low concentration of HIV/cancer mutations early), ELISA (based on Antigen-Antibody interaction), and Autoradiography with radioactive ssDNA/ssRNA probes.'
    ],
    extraPoints: [],
    reactions: [],
    oswaalMnemonic: {
      title: 'Proinsulin vs Mature Insulin',
      phrase: 'Pro-Insulin = A + B + C peptide (Inactive) | Mature Insulin = A + B linked by Disulphide Bonds (C-peptide Removed!)',
      explanation: 'Draw the C-peptide removal clearly in the 3-mark diagram.'
    },
    commonlyMadeErrors: [
      {
        error: 'Saying Eli Lilly inserted the pro-insulin gene into E. coli to produce mature insulin.',
        tip: 'Prokaryotic E. coli lacks enzymes to cleave the C-peptide! Hence Eli Lilly expressed Chain A and Chain B in SEPARATE E. coli plasmids and joined them via disulphide bridges.',
        penalty: 'Loss of 1.5 marks.'
      }
    ],
    assertionReason: {
      assertion: 'Gene therapy using genetically engineered lymphocytes for ADA deficiency is not a permanent cure.',
      reason: 'Lymphocytes are not immortal and have a finite lifespan, requiring periodic infusions of genetically engineered lymphocytes.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Only introducing the ADA gene into bone marrow cells at early embryonic stages gives a permanent cure.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020, 2019',
      frequency: '99% Guaranteed 3M/5M Question',
      typicalMarks: '3 Marks / 5 Marks',
      questionTypes: 'Proinsulin maturation diagram + Eli Lilly rDNA insulin; ADA deficiency gene therapy',
      hotTopic: 'Maturation of proinsulin to insulin & ADA gene therapy'
    }
  },
  'bio-sub-10-3': {
    definitions: [
      {
        term: 'Transgenic Animals, GEAC & Biopiracy',
        definition: 'Transgenic animals have foreign DNA expressed in their genome (e.g. Rosie cow producing $\\alpha$-lactalbumin ($2.4\\text{ g/L}$), $\\alpha$-1-antitrypsin for emphysema). GEAC (Genetic Engineering Approval Committee) regulates GM safety. Biopiracy is unauthorised exploitation of bio-resources without compensation (e.g. Basmati rice, Turmeric, Neem).'
      }
    ],
    keyPoints: [
      '• <strong>95% of all existing transgenic animals are mice!</strong> Used for normal physiology, disease models (cancer, cystic fibrosis, Alzheimer’s), biological products, vaccine safety (polio), and chemical toxicity testing.'
    ],
    extraPoints: [],
    reactions: [],
    oswaalMnemonic: {
      title: 'Rosie & Emphysema Duo',
      phrase: 'Rosie (1997) = Human alpha-lactalbumin (2.4 g/L) | Alpha-1-antitrypsin = Treats Emphysema',
      explanation: 'Frequently tested 2-mark factual question.'
    },
    commonlyMadeErrors: [
      {
        error: 'Expanding GEAC as Genetic Engineering Assessment Council.',
        tip: 'NCERT official expansion: Genetic Engineering Approval Committee (GEAC).',
        penalty: '0.5 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'Milk produced by the transgenic cow Rosie was nutritionally more balanced for human babies than natural cow milk.',
      reason: 'Rosie’s milk contained human alpha-lactalbumin at 2.4 grams per litre.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Enriched with human milk protein.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2020',
      frequency: 'High Frequency',
      typicalMarks: '2 Marks / 3 Marks',
      questionTypes: 'Role of GEAC, biopiracy of Indian Basmati rice, applications of transgenic animals',
      hotTopic: 'Rosie cow, α-1-antitrypsin, and Biopiracy'
    }
  },

  // ==========================================================================
  // CHAPTER 11: ORGANISMS AND POPULATIONS
  // ==========================================================================
  'bio-sub-11-1': {
    definitions: [
      {
        term: 'Age Pyramids & Population Density Change',
        definition: 'Graphical representation of pre-reproductive, reproductive, and post-reproductive age groups: Expanding (triangular), Stable (bell-shaped), Declining (urn-shaped). Density at time $t+1$: $N_{t+1} = N_t + [(B + I) - (D + E)]$.'
      },
      {
        term: 'Exponential (J-Shaped) vs Logistic (S-Shaped) Growth',
        definition: 'Unlimited resources give Exponential growth ($dN/dt = rN$ or $N_t = N_0 e^{rt}$). Limited resources with carrying capacity $K$ give Verhulst-Pearl Logistic growth: $dN/dt = rN\\left(\\frac{K - N}{K}\\right)$.'
      }
    ],
    keyPoints: [
      '• <strong>Immigration (I) vs Natality (B):</strong> In a newly colonised habitat, Immigration ($I$) contributes more significantly to population growth than birth rate ($B$).',
      '• <strong>Carrying Capacity ($K$):</strong> The maximum population size of a species that the given habitat’s resources can sustainably support; logistic curve shows lag phase $\\to$ acceleration $\\to$ deceleration $\\to$ asymptote ($N = K$).'
    ],
    extraPoints: [],
    reactions: [],
    oswaalMnemonic: {
      title: 'Age Pyramid Shapes',
      phrase: 'Triangular = Expanding | Bell = Stable | Urn (Narrow Base) = Declining',
      explanation: 'Look at the width of the bottom pre-reproductive bar compared to the middle reproductive bar!'
    },
    commonlyMadeErrors: [
      {
        error: 'Writing the logistic equation as dN/dt = rN(N − K)/K instead of rN(K − N)/K.',
        tip: 'Carrying capacity K is larger than N, so the term in brackets is (K − N) / K!',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'The Verhulst-Pearl logistic growth model is considered more realistic in nature than the exponential growth model.',
      reason: 'Resources for growth for most animal populations in nature are finite and become limiting sooner or later.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Environmental resistance imposes carrying capacity K.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020, 2019',
      frequency: '99% Guaranteed 3M/5M Question',
      typicalMarks: '3 Marks / 5 Marks',
      questionTypes: 'Identify age pyramids; plot J-shaped vs S-shaped growth curves with equations',
      hotTopic: 'Exponential vs Logistic growth curves and carrying capacity K'
    }
  },
  'bio-sub-11-2': {
    definitions: [
      {
        term: "Gause's Competitive Exclusion Principle vs Resource Partitioning",
        definition: 'Gause states that two closely related species competing for the same limiting resources cannot coexist indefinitely; MacArthur showed that 5 species of warblers coexist on the same tree by behavioural foraging differences (Resource Partitioning).'
      }
    ],
    keyPoints: [
      '• <strong>Population Interactions Matrix:</strong>\n  – Mutualism ($+,+$): Lichens, Mycorrhiza, Fig + Wasp, <em>Ophrys</em> Mediterranean orchid (sexual deceit with male bee pseudocopulation).\n  – Competition ($-,-$): Abingdon tortoise + goats; Connell’s field experiment (<em>Balanus</em> vs <em>Chthamalus</em> barnacles).\n  – Predation ($+,-$): Prickly pear cactus controlled by moth; <em>Pisaster</em> starfish maintains 10 invertebrate species diversity; Monarch butterfly distasteful glycosides; <em>Calotropis</em> cardiac glycosides.\n  – Parasitism ($+,-$): <em>Cuscuta</em>, Brood parasitism (Cuckoo/Koel laying eggs in Crow’s nest).\n  – Commensalism ($+,0$): Epiphytic orchid on mango, Barnacles on whale, Cattle egret & grazing cattle, Sea anemone & Clownfish.\n  – Amensalism ($-,0$).'
    ],
    extraPoints: [],
    reactions: [],
    oswaalMnemonic: {
      title: 'Commensalism (+, 0) Classic Quartet',
      phrase: 'Orchid on Mango, Barnacle on Whale, Egret with Cattle, Clownfish in Sea Anemone = All (+, 0) Commensalism!',
      explanation: 'Frequently confused with mutualism (+,+) in board MCQs and 3-mark questions.'
    },
    commonlyMadeErrors: [
      {
        error: 'Classifying Epiphytic orchid on mango branch or Clownfish + Sea anemone as Mutualism (+,+).',
        tip: 'Mango tree and Sea anemone derive NO benefit (0), so both are strictly Commensalism (+, 0)!',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'Cattle or goats never browse on Calotropis plants growing in abandoned fields.',
      reason: 'Calotropis produces highly poisonous cardiac glycosides as a chemical defence against herbivores.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Secondary metabolites act as anti-herbivory defences.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020',
      frequency: '99% Guaranteed',
      typicalMarks: '3 Marks / 5 Marks',
      questionTypes: 'Gause exclusion vs MacArthur resource partitioning; Ophrys sexual deceit; interaction signs (+, -, 0)',
      hotTopic: 'Mutualism (Fig-Wasp, Ophrys) and Commensalism examples'
    }
  },

  // ==========================================================================
  // CHAPTER 12: ECOSYSTEM
  // ==========================================================================
  'bio-sub-12-1': {
    definitions: [
      {
        term: 'Gross Primary Productivity (GPP) vs Net Primary Productivity (NPP)',
        definition: 'GPP is the rate of production of organic matter during photosynthesis. $\\text{NPP} = \\text{GPP} - R$ (where $R$ is respiratory loss) is the available biomass for the consumption of heterotrophs.'
      },
      {
        term: 'Five Steps of Decomposition',
        definition: 'Fragmentation (by detritivores like earthworm) $\\to$ Leaching (water-soluble nutrients precipitate into soil) $\\to$ Catabolism (bacterial/fungal enzymes) $\\to$ Humification (dark amorphous humus reservoir) $\\to$ Mineralisation (release of inorganic nutrients).'
      }
    ],
    keyPoints: [
      '• <strong>Factors Controlling Decomposition Rate:</strong> Fast when detritus is rich in <strong>nitrogen and water-soluble sugars</strong> under <strong>warm and moist aerobic</strong> conditions. Slow when detritus is rich in <strong>lignin and chitin</strong> or under cold/anaerobic conditions.',
      '• <strong>Ocean Productivity Paradox:</strong> Oceans cover $70\\%$ of Earth’s surface but contribute only $55\\text{ billion tons}$ out of $170\\text{ billion tons}$ global NPP because light and nutrients (nitrogen/iron) are limiting in deep waters.'
    ],
    extraPoints: [],
    reactions: [],
    oswaalMnemonic: {
      title: 'Decomposition 5 Steps',
      phrase: 'F-L-C-H-M: Fragmentation, Leaching, Catabolism (Simultaneous Trio) ⟶ Humification ⟶ Mineralisation',
      explanation: 'Fragmentation, leaching, and catabolism operate simultaneously on detritus!'
    },
    commonlyMadeErrors: [
      {
        error: 'Writing GPP = NPP − R instead of NPP = GPP − R.',
        tip: 'Gross (GPP) is always the total before subtracting Respiration (R): GPP − R = NPP!',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'Decomposition is an oxygen-requiring process that proceeds faster in warm and moist environments.',
      reason: 'Soil microbes require oxygen and optimal temperature/moisture for enzymatic catabolism of detritus.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Anaerobiosis and low temperature inhibit decomposer enzymes.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020',
      frequency: '99% Guaranteed',
      typicalMarks: '3 Marks',
      questionTypes: 'GPP vs NPP equation; 5 steps of decomposition and factors affecting rate',
      hotTopic: 'Decomposition steps and lignin/chitin vs nitrogen/sugar effect'
    }
  },
  'bio-sub-12-3': {
    definitions: [
      {
        term: "Lindeman's 10% Energy Law & Ecological Pyramids",
        definition: 'Only $10\\%$ of energy is transferred to each higher trophic level from the lower trophic level ($90\\%$ lost as heat). Ecological pyramids plot Producers at the base and Top Carnivores at the apex.'
      }
    ],
    keyPoints: [
      '• <strong>Pyramid of Energy is ALWAYS Upright (Never Inverted):</strong> Because when energy flows from one trophic level to the next, some energy is always lost as heat at each step ($10\\%$ law).',
      '• <strong>Inverted Pyramid of Biomass in Sea/Aquatic Ecosystem:</strong> Phytoplankton (producers) have a much smaller standing crop biomass at any instant than the fishes (consumers) they support, because phytoplankton reproduce and turn over rapidly.',
      '• <strong>Limitations of Ecological Pyramids:</strong> (1) Do not accommodate a species belonging to two or more trophic levels (e.g. sparrow), (2) Assume a simple food chain (do not accommodate food webs), (3) <strong>Saprophytes / Decomposers are NOT given any place</strong> despite their vital role!'
    ],
    extraPoints: [],
    reactions: [],
    oswaalMnemonic: {
      title: 'Pyramid Inversion Rules',
      phrase: 'Energy Pyramid = 100% Upright Forever | Sea Biomass Pyramid = Inverted (Phytoplankton < Fish) | Tree Number Pyramid = Inverted/Spindle',
      explanation: 'High-yield 3-mark diagram + reasoning question.'
    },
    commonlyMadeErrors: [
      {
        error: 'Drawing an energy pyramid with J (Joules) increasing or without reducing values by 10x at each trophic level.',
        tip: 'Always label T₁ = 10,000 J ⟶ T₂ = 1,000 J ⟶ T₃ = 100 J ⟶ T₄ = 10 J (given 1,000,000 J of sunlight at 1% PAR capture).',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'The pyramid of energy is always upright and can never be inverted.',
      reason: 'When energy flows from a particular trophic level to the next trophic level, some energy is always lost as heat at each step.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Second law of thermodynamics and Lindeman 10% law.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020, 2019',
      frequency: '99% Guaranteed 3M Question',
      typicalMarks: '3 Marks',
      questionTypes: 'Why energy pyramid is always upright; inverted biomass pyramid in sea; limitations of ecological pyramids',
      hotTopic: 'Upright energy pyramid vs inverted aquatic biomass pyramid'
    }
  },

  // ==========================================================================
  // CHAPTER 13: BIODIVERSITY AND CONSERVATION
  // ==========================================================================
  'bio-sub-13-1': {
    definitions: [
      {
        term: 'Genetic, Species & Ecological Diversity',
        definition: 'Genetic diversity: variation of potency/concentration of reserpine in <em>Rauwolfia vomitoria</em> in Himalayas ($>50,000$ rice strains, $1,000$ mango varieties). Species diversity: Western Ghats amphibians $>$ Eastern Ghats. Ecological diversity: Deserts, rainforests, mangroves, coral reefs.'
      },
      {
        term: "Alexander von Humboldt's Species-Area Relationship",
        definition: 'Within a region, species richness ($S$) increases with explored area ($A$) up to a limit according to the rectangular hyperbola $S = C A^Z$, or linearly on a log-log scale: $\\log S = \\log C + Z \\log A$.'
      }
    ],
    keyPoints: [
      '• <strong>Regression Coefficient $Z$ (Slope of line) Values:</strong>\n  – Normal small/medium regions regardless of taxonomic group: $Z = 0.1\\text{ to }0.2$.\n  – Very large areas like entire continents: $Z = 0.6\\text{ to }1.2$ (steeper slope!).\n  – Frugivorous (fruit-eating) birds and mammals in tropical forests: $Z = 1.15$.',
      '• <strong>Why Tropics ($23.5^\\circ\\text{N}$ to $23.5^\\circ\\text{S}$) Have Greatest Biodiversity:</strong> (1) Undisturbed for millions of years (no frequent glaciations unlike temperate regions); (2) Less seasonal, more constant and predictable environment promoting niche specialisation; (3) More solar energy available, leading to higher productivity.'
    ],
    extraPoints: [
      '• Robert May’s global species estimate $= 7\\text{ million}$. India has $2.4\\%$ of world’s land area but $8.1\\%$ of global species diversity (one of 12 Mega-diversity countries).'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Humboldt Slope Z Values',
      phrase: 'Small Region Z = 0.1–0.2 | Continent Z = 0.6–1.2 | Tropical Frugivores Z = 1.15',
      explanation: 'Steeper slope means larger Z!'
    },
    commonlyMadeErrors: [
      {
        error: 'Swapping the equations of the rectangular hyperbola (S = CA^Z) and the straight line (log S = log C + Z log A) on Humboldt’s graph.',
        tip: 'The curved line is S = CA^Z; the straight dashed line is log S = log C + Z log A!',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'Tropical latitudes have remained much richer in species biodiversity than temperate or polar regions.',
      reason: 'Tropical environments have remained relatively undisturbed for millions of years, are less seasonal, and receive abundant solar energy.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Evolutionary time, climate stability, and solar energy drive tropical richness.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020, 2018',
      frequency: '99% Guaranteed 3M/5M Question',
      typicalMarks: '3 Marks / 5 Marks',
      questionTypes: 'Draw Species-Area curve + equations + significance of slope Z; why tropics have more biodiversity',
      hotTopic: 'Humboldt Species-Area relationship graph and Z values'
    }
  },
  'bio-sub-13-2': {
    definitions: [
      {
        term: 'The Evil Quartet (Four Major Causes of Biodiversity Loss)',
        definition: '(1) Habitat Loss and Fragmentation (most important driver, e.g. Amazon rainforest "lungs of the planet" cleared for soya/cattle); (2) Over-exploitation (Steller’s sea cow, Passenger pigeon); (3) Alien Species Invasions (Nile perch in Lake Victoria extincted 200 cichlid fish; Carrot grass <em>Parthenium</em>, <em>Lantana</em>, Water hyacinth <em>Eichhornia</em>, African catfish <em>Clarias gariepinus</em>); (4) Co-extinctions (host-parasite or obligatory plant-pollinator mutualism).'
      },
      {
        term: 'In-Situ vs Ex-Situ Conservation',
        definition: 'In-situ (on-site) protects the whole ecosystem (34 Biodiversity Hotspots — Western Ghats/Sri Lanka, Indo-Burma, Himalaya; 14 Biosphere Reserves, 90 National Parks, 448 Wildlife Sanctuaries, Sacred Groves). Ex-situ (off-site) protects threatened species outside their natural habitat (Zoological parks, Botanical gardens, Wildlife Safari parks, Cryopreservation of gametes in liquid $\\text{N}_2$ at $-196^\\circ\\text{C}$, Seed banks, Tissue culture).'
      }
    ],
    keyPoints: [
      '• <strong>Paul Ehrlich’s Rivet Popper Hypothesis:</strong> Airplane = Ecosystem; Rivets = Species; Popping rivets by passengers = Species extinction; Rivets on wings = Key species (keystone species) whose loss gravely threatens ecosystem safety.',
      '• <strong>Two Criteria for Biodiversity Hotspots:</strong> (1) High degree of species richness, and (2) High degree of <strong>Endemism</strong> (species confined to that region and found nowhere else) + accelerated habitat loss.'
    ],
    extraPoints: [
      '• Earth Summit (Rio de Janeiro, 1992) vs World Summit on Sustainable Development (Johannesburg, 2002).'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'In-Situ vs Ex-Situ Conservation',
      phrase: 'In-Situ (Inside Nature): Hotspots, Biosphere Reserves, National Parks, Sacred Groves | Ex-Situ (External Lab/Park): Cryopreservation (−196°C), Seed Banks, Botanical Gardens, Safari Parks',
      explanation: 'Sacred Groves (Khasi & Jaintia Hills in Meghalaya, Aravalli Hills) are IN-SITU!'
    },
    commonlyMadeErrors: [
      {
        error: 'Classifying Sacred Groves or Biosphere Reserves under Ex-situ conservation, or Botanical Gardens under In-situ conservation.',
        tip: 'Sacred Groves are undisturbed natural forest tracts (In-situ); Botanical Gardens and Wildlife Safari Parks are human-created off-site facilities (Ex-situ)!',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'Cryopreservation of gametes of threatened species is an advanced method of ex-situ conservation.',
      reason: 'Gametes of threatened species can be preserved in viable and fertile condition for long periods in liquid nitrogen at −196°C.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Allows off-site preservation and in-vitro fertilisation.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020, 2019',
      frequency: '99% Guaranteed 3M/5M Question',
      typicalMarks: '3 Marks / 5 Marks',
      questionTypes: 'Explain Evil Quartet with examples; differentiate In-situ and Ex-situ conservation; Rivet popper hypothesis',
      hotTopic: 'Alien species invasion examples + In-situ vs Ex-situ'
    }
  }
};
