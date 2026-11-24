// NCERT Class 12 Biology Volume 2 (Chapters 9 to 13) — Important & Repeated Past Board Questions
// Combines CBSE Past 10-Year Repeated Questions (2015–2025) + User's Handwritten Notes & Crossed/Bracketed NCERT Textbook Pages (pg 197–224).

export const IMPORTANT_BIOLOGY_CH9_TO_13_QUESTIONS = [
  // ==========================================================================
  // CHAPTER 9: BIOTECHNOLOGY: PRINCIPLES AND PROCESSES
  // ==========================================================================
  {
    id: 'bio-imp-9-1',
    number: 'Q1',
    chapterId: 'bio-ch-9',
    chapterNum: 9,
    chapterTitle: 'Biotechnology: Principles and Processes',
    subtopicId: 'bio-sub-9-1',
    marks: '3 Marks',
    frequency: 'CBSE 2024, 2023, 2022, 2020, 2018 (Most Repeated)',
    badge: 'CBSE Past Paper • 3 Marks • 99% Repeated',
    sourceTag: 'Past Board Paper',
    question:
      'What are restriction endonucleases? Explain the convention for naming EcoRI. Write the palindromic nucleotide sequence recognised by EcoRI and show where it cuts the DNA strands to form sticky ends.',
    answerPoints: [
      'Restriction Endonucleases ("Molecular Scissors"): Enzymes that inspect the length of a DNA sequence, bind to a specific palindromic recognition sequence (4–8 base pairs), and cleave both strands of the sugar-phosphate backbone at specific points.',
      'Naming Convention of EcoRI (isolated from Escherichia coli RY 13): "E" stands for Genus (Escherichia), "co" stands for species (coli), "R" stands for strain (RY 13), and Roman numeral "I" indicates the order in which the enzyme was isolated from that strain of bacteria.',
      'Palindromic Nucleotide Sequence: A sequence of base pairs that reads the same on the two strands when orientation of reading is kept the same (5\' → 3\').',
      'EcoRI Recognition Site & Cut:\n  5\' — G ↓ A A T T C — 3\'\n  3\' — C T T A A ↑ G — 5\'',
      'Formation of Sticky Ends: EcoRI cuts the DNA strands between G and A away from the centre of the palindrome, leaving overhanging single-stranded stretches called "sticky ends". These sticky ends form hydrogen bonds with their complementary cut counterparts, facilitating the action of DNA Ligase.'
    ],
    formulaOrEquation: "5'-G↓AATTC-3'  /  3'-CTTAA↑G-5'  ──(EcoRI)──►  Sticky Overhangs + DNA Ligase ──► rDNA"
  },
  {
    id: 'bio-imp-9-2',
    number: 'Q2',
    chapterId: 'bio-ch-9',
    chapterNum: 9,
    chapterTitle: 'Biotechnology: Principles and Processes',
    subtopicId: 'bio-sub-9-2',
    marks: '3 Marks',
    frequency: 'CBSE 2024, 2023, 2021, 2019',
    badge: 'CBSE Past Paper • 3 Marks • Repeated',
    sourceTag: 'Past Board Paper',
    question:
      'Explain the principle of separation of DNA fragments using Agarose Gel Electrophoresis. How are the separated DNA fragments visualised and extracted from the gel for recombinant DNA construction?',
    answerPoints: [
      'Charge-Based Migration: Since DNA fragments are negatively charged molecules (due to phosphate groups in the backbone), they can be separated by forcing them to move towards the positively charged anode (+) under an electric field through a medium/matrix.',
      'Sieving Effect of Agarose Matrix: Agarose (a natural polymer extracted from seaweeds) acts as a molecular sieve. The smaller the DNA fragment size, the farther (and faster) it moves towards the anode.',
      'Visualisation with Ethidium Bromide + UV: Pure DNA fragments cannot be seen in visible light without staining. The separated DNA fragments are stained with Ethidium Bromide (EtBr) followed by exposure to UV radiation, where they appear as bright orange-coloured bands.',
      'Elution: The separated bands of DNA are cut out from the agarose gel piece and extracted/purified from the gel piece. This step is called elution.'
    ],
    formulaOrEquation: 'Negative DNA ──(Electric Field / Agarose Sieve)──► Anode (+)  |  EtBr + UV Light ──► Bright Orange Bands'
  },
  {
    id: 'bio-imp-9-3',
    number: 'Q3',
    chapterId: 'bio-ch-9',
    chapterNum: 9,
    chapterTitle: 'Biotechnology: Principles and Processes',
    subtopicId: 'bio-sub-9-3',
    marks: '5 Marks',
    frequency: 'CBSE 2024, 2023, 2022, 2020, 2017 (Guaranteed 5M/3M)',
    badge: 'CBSE Past Paper • 5 Marks • Guaranteed Topic',
    sourceTag: 'Past Board Paper',
    question:
      'List the essential features of a cloning vector. Describe the structure of E. coli cloning vector pBR322 and explain why insertional inactivation of the β-galactosidase gene (blue-white screening) is preferred over antibiotic resistance markers.',
    answerPoints: [
      'Origin of Replication (ori): A sequence from where replication starts; any piece of foreign DNA linked to this sequence can be made to replicate within host cells, and it also controls the copy number of the linked DNA.',
      'Selectable Marker: Helps in identifying and eliminating non-transformants and selectively permitting the growth of transformants (e.g., genes encoding resistance to antibiotics such as ampicillin amp^R and tetracycline tet^R).',
      'Cloning (Recognition) Sites in pBR322: A vector must have a single unique recognition site for each restriction enzyme. In E. coli vector pBR322: amp^R contains PstI and PvuI sites; tet^R contains BamHI and SalI sites; rop (codes for proteins involved in replication of the plasmid) contains PvuII; top junction has EcoRI, ClaI, and HindIII.',
      'Insertional Inactivation in pBR322: When foreign DNA is ligated at the BamHI site of the tet^R gene, recombinant plasmids lose tetracycline resistance. However, selecting recombinants requires simultaneous replica plating on two antibiotic plates (cumbersome procedure).',
      'Advantage of β-galactosidase Blue-White Screening: When foreign DNA is inserted within the coding sequence of the enzyme β-galactosidase, the enzyme is inactivated (insertional inactivation). In the presence of a chromogenic substrate, non-recombinants produce blue-coloured colonies, while recombinants do not produce any colour and form white colonies on a single plate.'
    ],
    formulaOrEquation: 'pBR322: amp^R (PstI, PvuI) | tet^R (BamHI, SalI) | rop (PvuII)  |  β-galactosidase inactivated = White Recombinant Colony'
  },
  {
    id: 'bio-imp-9-4',
    number: 'Q4',
    chapterId: 'bio-ch-9',
    chapterNum: 9,
    chapterTitle: 'Biotechnology: Principles and Processes',
    subtopicId: 'bio-sub-9-4',
    marks: '3 Marks',
    frequency: 'CBSE 2023, 2022, 2019',
    badge: 'CBSE Past Paper • 3 Marks',
    sourceTag: 'Past Board Paper',
    question:
      'Why cannot alien DNA pass through cell membranes directly? How is a bacterial host cell made competent to take up recombinant DNA? Differentiate between Microinjection and Biolistics (Gene Gun).',
    answerPoints: [
      'Hydrophilic Nature of DNA: Since DNA is a hydrophilic (water-loving) molecule, it cannot pass through the hydrophobic lipid bilayer of cell membranes.',
      'Divalent Cation Treatment: Bacterial cells are treated with a specific concentration of a divalent cation such as Calcium (Ca²⁺), which increases the efficiency with which DNA enters the bacterium through pores in its cell wall.',
      'Heat-Shock Protocol: Cells are incubated with recombinant DNA on ice, followed by placing them briefly at 42 °C (heat shock), and then putting them back on ice. This enables the bacteria to take up the recombinant DNA.',
      'Microinjection (for Animal Cells): Recombinant DNA is directly injected into the nucleus of an animal cell using a fine glass micropipette.',
      'Biolistics / Gene Gun (for Plant Cells): Plant cells are bombarded with high-velocity micro-particles of gold or tungsten coated with DNA.'
    ]
  },
  {
    id: 'bio-imp-9-5',
    number: 'Q5',
    chapterId: 'bio-ch-9',
    chapterNum: 9,
    chapterTitle: 'Biotechnology: Principles and Processes',
    subtopicId: 'bio-sub-9-5',
    marks: '5 Marks',
    frequency: 'CBSE 2024, 2023, 2022, 2020, 2018 (Most Repeated)',
    badge: 'CBSE Past Paper • 5 Marks • 99% Repeated',
    sourceTag: 'Past Board Paper',
    question:
      'Explain the three steps involved in the Polymerase Chain Reaction (PCR). Name the source organism of the DNA polymerase used in PCR and explain why it is essential. Also mention the enzymes used to lyse bacterial, plant, and fungal cells during DNA isolation.',
    answerPoints: [
      'Step 1 — Denaturation (~94 °C): The double-stranded target DNA is heated to high temperature (94 °C) so that hydrogen bonds break and the two strands separate into single-stranded DNA templates.',
      'Step 2 — Annealing (~50–60 °C): Two sets of small chemically synthesised oligonucleotide primers bind (hybridise) to their complementary sequences at the 3\' ends of the separated single strands.',
      'Step 3 — Extension (~72 °C): Thermostable Taq DNA polymerase extends the primers in the 5\' → 3\' direction using deoxynucleotides (dNTPs) and Mg²⁺ ions, amplifying the DNA segment to ~1 billion copies after 30 cycles.',
      'Source & Role of Taq Polymerase: Isolated from the thermophilic bacterium Thermus aquaticus. It remains active during the high-temperature denaturation of double-stranded DNA, whereas ordinary DNA polymerases would denature.',
      'Enzymes for Cell Wall Lysis & DNA Precipitation: Lysozyme for bacterial cells, Cellulase for plant cells, and Chitinase for fungal cells (plus Ribonuclease to remove RNA and Protease to remove histones). Purified DNA is precipitated by adding chilled ethanol and collected by spooling.'
    ],
    formulaOrEquation: 'PCR Cycle: Denaturation (94 °C) ──► Annealing (54 °C) ──► Extension (72 °C, Taq Polymerase)  [n cycles = 2^n copies]'
  },

  // ==========================================================================
  // CHAPTER 10: BIOTECHNOLOGY AND ITS APPLICATIONS
  // ==========================================================================
  {
    id: 'bio-imp-10-1',
    number: 'Q6',
    chapterId: 'bio-ch-10',
    chapterNum: 10,
    chapterTitle: 'Biotechnology and its Applications',
    subtopicId: 'bio-sub-10-1',
    marks: '3 Marks',
    frequency: 'CBSE 2024, 2023, 2022, 2020, 2019 (Most Repeated)',
    badge: 'CBSE Past Paper • 3 Marks • 99% Repeated',
    sourceTag: 'Past Board Paper',
    question:
      'Why does the Bt toxin protein produced by Bacillus thuringiensis not kill the bacterium itself, but kills the insect pest that ingests it? Name the specific cry genes that control (i) cotton bollworms and (ii) corn borer.',
    answerPoints: [
      'Inactive Protoxin in Bacterium: In Bacillus thuringiensis, the Bt toxin protein exists as an inactive crystalline protoxin, so it does not harm the bacterium itself.',
      'Alkaline Activation in Insect Gut: Once an insect ingests the inactive toxin, it is converted into an active form of toxin due to the alkaline pH of the insect gut, which solubilises the protein crystals.',
      'Midgut Lysis & Insect Death: The activated toxin binds to the surface of midgut epithelial cells and creates pores that cause cell swelling and lysis, eventually leading to the death of the insect.',
      'Specific cry Genes for Cotton Bollworms: The proteins encoded by the genes cryIAc and cryIIAb control cotton bollworms.',
      'Specific cry Gene for Corn Borer: The protein encoded by the gene cryIAb controls corn borer.'
    ],
    formulaOrEquation: 'Inactive Bt Protoxin ──(Alkaline pH of Insect Gut)──► Active Toxin ──► Midgut Epithelial Pores & Lysis'
  },
  {
    id: 'bio-imp-10-2',
    number: 'Q7',
    chapterId: 'bio-ch-10',
    chapterNum: 10,
    chapterTitle: 'Biotechnology and its Applications',
    subtopicId: 'bio-sub-10-2',
    marks: '3 Marks',
    frequency: 'CBSE 2024, 2023, 2022, 2019',
    badge: 'CBSE Past Paper • 3 Marks • Repeated',
    sourceTag: 'Past Board Paper',
    question:
      'Name the nematode that infects the roots of tobacco plants and reduces yield. Explain the strategy of RNA interference (RNAi) used to make tobacco plants resistant to this pest.',
    answerPoints: [
      'Target Nematode Pest: The nematode Meloidogyne incognita infects the roots of tobacco plants and causes a great reduction in yield.',
      'Principle of RNA Interference (RNAi): RNAi is a method of cellular defence in all eukaryotic organisms. It involves silencing of a specific mRNA due to a complementary double-stranded RNA (dsRNA) molecule that binds to and prevents translation of the mRNA (silencing).',
      'Vector-Mediated Gene Introduction: Using Agrobacterium vectors, nematode-specific genes were introduced into the host tobacco plant.',
      'Formation of Complementary dsRNA: The introduction of DNA was such that it produced both sense and anti-sense RNA in the host cells. These two RNAs being complementary to each other formed a double-stranded RNA (dsRNA) that initiated RNAi.',
      'Survival Failure of Parasite: When the nematode ingested the host cell contents, its specific mRNA was cleaved/silenced, and the parasite could not survive in the transgenic host expressing specific interfering RNA.'
    ],
    formulaOrEquation: 'Sense RNA + Anti-sense RNA ──► Complementary dsRNA ──► Cleaves/Silences Nematode mRNA (Blocks Translation)'
  },
  {
    id: 'bio-imp-10-3',
    number: 'Q8',
    chapterId: 'bio-ch-10',
    chapterNum: 10,
    chapterTitle: 'Biotechnology and its Applications',
    subtopicId: 'bio-sub-10-3',
    marks: '5 Marks',
    frequency: 'CBSE 2024, 2023, 2022, 2020, 2018 (Most Repeated)',
    badge: 'CBSE Past Paper • 5 Marks • 99% Repeated',
    sourceTag: 'Past Board Paper',
    question:
      'How does pro-insulin differ structurally from mature functional human insulin? Explain how Eli Lilly produced human insulin (Humulin) in 1983 using recombinant DNA technology. Why was animal insulin from slaughtered cattle and pigs discontinued?',
    answerPoints: [
      'Disadvantage of Slaughtered Animal Insulin: Insulin used for diabetes was earlier extracted from the pancreas of slaughtered cattle and pigs, which caused some patients to develop allergy or other types of immune reactions to the foreign protein.',
      'Structure of Mature Human Insulin: Mature insulin consists of two short polypeptide chains — Chain A and Chain B — that are linked together by disulphide bridges.',
      'Pro-insulin vs Mature Insulin: In mammals (including humans), insulin is synthesised as a pro-hormone (pro-insulin) which contains an extra stretch called the C-peptide. This C-peptide is not present in mature insulin and is removed during maturation into active insulin.',
      'Main rDNA Challenge: The main challenge for production of insulin using rDNA techniques in prokaryotes (E. coli) was getting insulin assembled into a mature form without the C-peptide.',
      'Eli Lilly Solution (1983): Using rDNA technology, American company Eli Lilly prepared two separate DNA sequences corresponding to A and B chains of human insulin and introduced them into plasmids of E. coli to produce insulin chains separately. Chains A and B were produced separately, extracted, and combined by creating disulphide bonds to form human insulin (Humulin).'
    ],
    formulaOrEquation: 'Pro-insulin (Chain A + Chain B + C-Peptide) ──(Remove C-Peptide)──► Mature Insulin (Chain A —S—S— Chain B)'
  },
  {
    id: 'bio-imp-10-4',
    number: 'Q9',
    chapterId: 'bio-ch-10',
    chapterNum: 10,
    chapterTitle: 'Biotechnology and its Applications',
    subtopicId: 'bio-sub-10-3',
    marks: '3 Marks',
    frequency: 'CBSE 2024, 2023, 2021, 2019',
    badge: 'CBSE Past Paper • 3 Marks • Repeated',
    sourceTag: 'Past Board Paper',
    question:
      'What causes ADA deficiency and how does it affect the body? Describe the step-by-step gene therapy procedure given to a 4-year-old girl in 1990. Why is this treatment not a permanent cure, and how can a permanent cure be achieved?',
    answerPoints: [
      'Cause & Effect of ADA Deficiency: Caused by the deletion of the gene for Adenosine Deaminase (ADA), an enzyme crucial for the immune system (T-lymphocytes) to function.',
      'Step 1 (Lymphocyte Culture): As a first step towards gene therapy (first given in 1990 to a 4-year-old girl), lymphocytes from the blood of the patient are grown in a culture outside the body.',
      'Step 2 (Retroviral Gene Transfer): A functional ADA cDNA (using a disarmed retroviral vector) is then introduced into these lymphocytes, which are subsequently returned to the patient.',
      'Why Not a Permanent Cure: Since lymphocytes are not immortal and have a finite lifespan, the patient requires periodic infusion of such genetically engineered lymphocytes.',
      'Permanent Cure Condition: If the functional gene isolated from bone marrow cells producing ADA is introduced into cells at early embryonic stages, it could be a permanent cure.'
    ]
  },
  {
    id: 'bio-imp-10-5',
    number: 'Q10',
    chapterId: 'bio-ch-10',
    chapterNum: 10,
    chapterTitle: 'Biotechnology and its Applications',
    subtopicId: 'bio-sub-10-4',
    marks: '3 Marks',
    frequency: 'CBSE 2024, 2022, 2020',
    badge: 'CBSE Past Paper • 3 Marks',
    sourceTag: 'Past Board Paper',
    question:
      '(a) How does a radioactive ssDNA/ssRNA probe detect a mutated gene using Autoradiography? (b) Mention the significance of transgenic cow Rosie (1997) and α-1-antitrypsin. (c) Define Biopiracy and expand GEAC.',
    answerPoints: [
      'Autoradiography Probe Detection: A single-stranded DNA or RNA tagged with a radioactive molecule (probe) is allowed to hybridise to its complementary DNA in a clone of cells followed by detection using autoradiography. The clone having the mutated gene will NOT appear on the photographic film because the probe will not have complementarity with the mutated gene.',
      'Transgenic Cow Rosie (1997) & α-1-Antitrypsin: Rosie produced human protein-enriched milk (2.4 grams per litre) containing human alpha-lactalbumin, which was nutritionally a more balanced product for human babies than natural cow-milk. Human protein α-1-antitrypsin produced by transgenic animals is used to treat emphysema.',
      'GEAC Expansion & Role: Genetic Engineering Approval Committee — makes decisions regarding the validity of GM research and the safety of introducing GM-organisms for public services.',
      'Biopiracy & Basmati Patent Case: Biopiracy is the use of bio-resources by multinational companies and other organisations without proper authorisation from the countries and people concerned without compensatory payment (e.g., 1997 US patent on Indian Basmati rice and attempts to patent Turmeric and Neem).'
    ]
  },

  // ==========================================================================
  // CHAPTER 11: ORGANISMS AND POPULATIONS (With User's Handwritten & Marked Pages)
  // ==========================================================================
  {
    id: 'bio-imp-11-1',
    number: 'Q11',
    chapterId: 'bio-ch-11',
    chapterNum: 11,
    chapterTitle: 'Organisms and Populations',
    subtopicId: 'bio-sub-11-3',
    marks: '5 Marks',
    frequency: 'User Handwritten Notes + CBSE 2024, 2023, 2022, 2020 (Guaranteed 5M)',
    badge: '★ Your Handwritten Note + CBSE Past Paper • 5 Marks',
    sourceTag: 'Your Handwritten Notes & Past Paper',
    diagramId: 'population-density-and-growth-curves',
    question:
      'Differentiate between Exponential (J-shape) and Logistic (S-sigmoid) population growth models. Write their mathematical equations, define r and K, and list the four phases of the Logistic Sigmoid growth curve from your handwritten notes.',
    answerPoints: [
      'Exponential Growth (J-Shape Curve — Unlimited Resources): When resources (food and space) in the habitat are unlimited, each species realises its full innate potential to grow in number, producing a J-shaped curve when population density N is plotted against time t.',
      'Exponential Growth Equations:\n  • Differential form: dN/dt = (b − d) × N = rN\n  • Integral form: N_t = N_0 e^(rt)',
      'Logistic Growth (S-Shape / Sigmoid Curve — Limited Resources): In nature, resources are finite and limiting; a given habitat has enough resources to support a maximum possible number called Carrying Capacity (K). It is considered the more realistic growth model.',
      'Verhulst-Pearl Logistic Growth Equation:\n  • dN/dt = rN [(K − N) / K]',
      'Four Phases of Logistic (Sigmoid) Growth (from your handwritten notes):\n  1. Lag phase — Initial phase (slow adaptation).\n  2. Log phase / Exponential phase — Accelerating phase (rapid growth).\n  3. Decelerating phase — Growth slows due to environmental resistance (K − N)/K.\n  4. Asymptote — Resting phase (when population density N reaches carrying capacity K, so dN/dt = 0).',
      'Definitions of Symbols (from your handwritten notes):\n  • r = Intrinsic rate of natural increase (r = b − d).\n  • K = Carrying capacity (maximum population size a habitat can support).'
    ],
    formulaOrEquation: 'Exponential (J-Shape): dN/dt = rN  |  Logistic (S-Sigmoid): dN/dt = rN [(K − N) / K]'
  },
  {
    id: 'bio-imp-11-2',
    number: 'Q12',
    chapterId: 'bio-ch-11',
    chapterNum: 11,
    chapterTitle: 'Organisms and Populations',
    subtopicId: 'bio-sub-11-2',
    marks: '3 Marks',
    frequency: 'Your Marked Textbook Fig. 11.2 + CBSE 2024, 2023, 2021',
    badge: '★ Your Marked Textbook Page (Fig. 11.2) + CBSE Past Paper • 3 Marks',
    sourceTag: 'Your Marked Textbook Page & Past Paper',
    question:
      'Define the four basic processes (Natality, Mortality, Immigration, Emigration) that fluctuate population density (N). Write the equation connecting N_(t+1) with N_t, and state which factor contributes more significantly when a new habitat is just being colonised.',
    answerPoints: [
      '(i) Natality (B) [+]: Refers to the number of births during a given period in the population that are added to the initial density.',
      '(ii) Mortality (D) [−]: The number of deaths in the population during a given period.',
      '(iii) Immigration (I) [+]: The number of individuals of the same species that have come into the habitat from elsewhere during the time period under consideration.',
      '(iv) Emigration (E) [−]: The number of individuals of the population who left the habitat and gone elsewhere during the time period under consideration.',
      'Population Density Equation at time t + 1 (NCERT Fig. 11.2):\n  • N_(t+1) = N_t + [(B + I) − (D + E)]\n  • Population density increases if (B + I) > (D + E) and decreases if (B + I) < (D + E).',
      'Colonisation of a New Habitat: Under normal conditions, births and deaths are the most important factors influencing population density, but if a new habitat is just being colonised, Immigration (I) contributes more significantly to population growth than birth rates.'
    ],
    formulaOrEquation: 'N_(t+1) = N_t + [(B + I) − (D + E)]'
  },
  {
    id: 'bio-imp-11-3',
    number: 'Q13',
    chapterId: 'bio-ch-11',
    chapterNum: 11,
    chapterTitle: 'Organisms and Populations',
    subtopicId: 'bio-sub-11-4',
    marks: '3 Marks',
    frequency: 'Your Crossed/Bracketed Textbook Pages (pg 197–198) + CBSE 2024, 2023, 2020',
    badge: '★ Your Crossed Textbook Page (Predation) + CBSE Past Paper • 3 Marks',
    sourceTag: 'Your Crossed Textbook Page & Past Paper',
    question:
      'Explain the ecological roles of Predators in an ecosystem (with reference to Prickly pear cactus in Australia and Pisaster starfish). Why are predators in nature said to be "prudent"? Mention the chemical defences evolved by Monarch butterfly and Calotropis.',
    answerPoints: [
      '1. Keeping Prey Populations Under Control & Biological Control (Bracketed on your textbook page): But for predators, prey species could achieve very high population densities and cause ecosystem instability. Example: The prickly pear cactus introduced into Australia in the early 1920s caused havoc by spreading rapidly into millions of hectares of rangeland, and was brought under control only after a cactus-feeding predator (a moth) from its natural habitat was introduced.',
      '2. Maintaining Species Diversity in a Community (Bracketed on your textbook page): Predators reduce the intensity of competition among competing prey species. Example: In the rocky intertidal communities of the American Pacific Coast, the starfish Pisaster is an important predator; when all starfish were removed experimentally, more than 10 species of invertebrates became extinct within a year due to interspecific competition.',
      '3. Why Predators are "Prudent" in Nature (Bracketed on your textbook page): If a predator is too efficient and overexploits its prey, then the prey might become extinct and following it, the predator will also become extinct for lack of food. Therefore, predators in nature are prudent.',
      '4. Prey Defences Against Predators:\n  • Monarch Butterfly: Highly distasteful to its predator (bird) because of a special chemical present in its body, acquired during its caterpillar stage by feeding on a poisonous weed.\n  • Calotropis & Thorns: Thorns (Acacia, Cactus) are morphological defences. The weed Calotropis produces highly poisonous cardiac glycosides, which is why cattle or goats never browse on this plant.'
    ]
  },
  {
    id: 'bio-imp-11-4',
    number: 'Q14',
    chapterId: 'bio-ch-11',
    chapterNum: 11,
    chapterTitle: 'Organisms and Populations',
    subtopicId: 'bio-sub-11-4',
    marks: '5 Marks',
    frequency: 'Your Bracketed Textbook Pages (pg 199–200) + CBSE 2024, 2023, 2022, 2019',
    badge: '★ Your Bracketed Textbook Page (Competition & Parasitism) + CBSE Past Paper • 5 Marks',
    sourceTag: 'Your Crossed Textbook Page & Past Paper',
    question:
      '(a) State Gause\'s Competitive Exclusion Principle and give the Abingdon tortoise example. How did Connell\'s field experiment demonstrate competitive release, and how did MacArthur show resource partitioning? (b) List the four special adaptations evolved by parasites and explain Brood Parasitism.',
    answerPoints: [
      'Abingdon Tortoise Extinction (Bracketed on your textbook page 199): The Abingdon tortoise in Galapagos Islands became extinct within a decade after goats were introduced on the island, apparently due to the greater browsing efficiency of the goats.',
      'Competitive Release & Connell\'s Elegant Field Experiment: A species whose distribution is restricted to a small geographical area because of the presence of a competitively superior species expands its distributional range dramatically when the competing species is experimentally removed. Connell showed that on the rocky sea coasts of Scotland, the larger and competitively superior barnacle Balanus dominates the intertidal area and excludes the smaller barnacle Chathamalus from that zone.',
      'Gause\'s Competitive Exclusion Principle (Bracketed on your textbook page 199): States that two closely related species competing for the same limiting resources cannot co-exist indefinitely and the competitively inferior one will be eliminated eventually.',
      'Resource Partitioning (MacArthur\'s Warblers): Species facing competition evolve mechanisms that promote co-existence rather than exclusion. MacArthur showed that five closely related species of warblers living on the same tree were able to avoid competition and co-exist due to behavioural differences in their foraging activities (different times for feeding or different foraging patterns).',
      'Four Special Adaptations of Parasites (Bracketed on your textbook page 200):\n  1. Loss of unnecessary sense organs,\n  2. Presence of adhesive organs or suckers to cling on to the host,\n  3. Loss of digestive system, and\n  4. High reproductive capacity (plus complex life cycles like human liver fluke using two intermediate hosts: a snail and a fish).',
      'Ectoparasites, Endoparasites & Brood Parasitism: Ectoparasites feed on the external surface (lice on humans, ticks on dogs, copepods on marine fish, Cuscuta on hedge plants). In Brood Parasitism in birds, the parasitic bird (cuckoo/koel) lays its eggs in the nest of its host (crow) and lets the host incubate them; the parasitic eggs have evolved to resemble the host\'s egg in size and colour.'
    ]
  },

  // ==========================================================================
  // CHAPTER 12: ECOSYSTEM (With User's Note: "Dfc and GFC diff Standing crop pg211 Only crossed")
  // ==========================================================================
  {
    id: 'bio-imp-12-1',
    number: 'Q15',
    chapterId: 'bio-ch-12',
    chapterNum: 12,
    chapterTitle: 'Ecosystem',
    subtopicId: 'bio-sub-12-3',
    marks: '3 Marks',
    frequency: 'Your Requested Note (pg 211: DFC vs GFC + Standing Crop) + CBSE 2024, 2023, 2022',
    badge: '★ Your Note: DFC vs GFC & Standing Crop (pg 211) + CBSE Past Paper • 3 Marks',
    sourceTag: 'Your Crossed Textbook Page 211 & Past Paper',
    question:
      'Differentiate between Grazing Food Chain (GFC) and Detritus Food Chain (DFC). Define Standing Crop (NCERT pg 211) and explain why measuring biomass in terms of dry weight is more accurate than fresh weight.',
    answerPoints: [
      'Grazing Food Chain (GFC) vs Detritus Food Chain (DFC) — Key Differences:\n  1. Primary Source of Energy: GFC begins with living green plants (producers) that fix solar radiant energy (e.g., Grass → Goat → Man). DFC begins with dead organic matter (detritus).\n  2. First Trophic Level Organisms: In GFC, autotrophic producers form the first level. In DFC, decomposers (saprotrophs — heterotrophic fungi and bacteria) secrete digestive enzymes to break down dead and waste materials into simple, inorganic materials.\n  3. Major Conduit of Energy Flow: In an aquatic ecosystem, GFC is the major conduit for energy flow. In a terrestrial ecosystem, a much larger fraction of energy flows through the DFC than through the GFC.\n  4. Interconnection: DFC may be connected with GFC at some levels (some of the organisms of DFC are prey to the GFC animals like earthworms eaten by birds).',
      'Standing Crop (NCERT pg 211): Each trophic level has a certain mass of living material at a particular time called the standing crop.',
      'Measurement of Standing Crop: The standing crop is measured as the mass of living organisms (biomass) or the number in a unit area.',
      'Why Dry Weight is More Accurate: The biomass of a species is expressed in terms of fresh or dry weight. Measurement of biomass in terms of dry weight is much more accurate because fresh weight varies with seasonal/environmental moisture content.'
    ],
    formulaOrEquation: 'Aquatic Ecosystem Major Conduit = GFC  |  Terrestrial Ecosystem Major Conduit = DFC'
  },
  {
    id: 'bio-imp-12-2',
    number: 'Q16',
    chapterId: 'bio-ch-12',
    chapterNum: 12,
    chapterTitle: 'Ecosystem',
    subtopicId: 'bio-sub-12-4',
    marks: '5 Marks',
    frequency: 'Your Crossed Pages 212–214 ("Limitation") + CBSE 2024, 2023, 2022, 2020 (Guaranteed)',
    badge: '★ Your Crossed Pages 212–214 (Inverted Sea Biomass & Limitations) • 5 Marks',
    sourceTag: 'Your Crossed Textbook Pages 212–214 & Past Paper',
    diagramId: 'ecological-pyramids-comparison',
    question:
      '(a) Why is the pyramid of biomass in a sea generally inverted (Fig. 12.4c, pg 212–213) whereas the pyramid of energy is always upright? (b) State the three limitations of ecological pyramids (marked "Limitation" on your textbook page 214).',
    answerPoints: [
      'Why Pyramid of Biomass in Sea is Generally Inverted (Bracketed on your textbook page 212–213): In an aquatic/sea ecosystem, the biomass of fishes (and zooplankton, PC = 21 g m⁻²) far exceeds that of phytoplankton (producers, P = 4 g m⁻²) at any given instant. Even though phytoplankton have a small standing crop at any moment, they reproduce and turn over rapidly to support a large standing crop of zooplankton and fishes.',
      'Why Pyramid of Energy is ALWAYS Upright (Page 213): Pyramid of energy is always upright and can never be inverted, because when energy flows from a particular trophic level to the next trophic level, some energy is always lost as heat at each step (following Lindeman\'s 10% law). Each bar in the energy pyramid indicates the amount of energy present at each trophic level in a given time or annually per unit area.',
      'Limitation 1 of Ecological Pyramids (Marked "Limitation" in pen on your page 214): It does not take into account the same species belonging to two or more trophic levels (e.g., a sparrow is a primary consumer when it eats seeds/fruits, and a secondary consumer when it eats insects/worms).',
      'Limitation 2 of Ecological Pyramids (Page 214): It assumes a simple food chain, something that almost never exists in nature; it does not accommodate a food web.',
      'Limitation 3 of Ecological Pyramids (Page 214): Saprophytes (decomposers) are not given any place in ecological pyramids even though they play a vital role in the ecosystem.'
    ]
  },
  {
    id: 'bio-imp-12-3',
    number: 'Q17',
    chapterId: 'bio-ch-12',
    chapterNum: 12,
    chapterTitle: 'Ecosystem',
    subtopicId: 'bio-sub-12-1',
    marks: '3 Marks',
    frequency: 'CBSE 2024, 2023, 2021, 2019 (Most Repeated)',
    badge: 'CBSE Past Paper • 3 Marks • 99% Repeated',
    sourceTag: 'Past Board Paper',
    question:
      '(a) Differentiate between Gross Primary Productivity (GPP) and Net Primary Productivity (NPP) and write the equation relating them. (b) Explain the five steps involved in the process of decomposition of detritus and the factors that speed up or slow down decomposition.',
    answerPoints: [
      'Gross Primary Productivity (GPP) vs Net Primary Productivity (NPP): GPP is the rate of production of organic matter during photosynthesis. A considerable amount of GPP is utilised by plants in respiration (R). Gross primary productivity minus respiration losses (R) is the Net Primary Productivity (GPP − R = NPP), which is the available biomass for the consumption to heterotrophs (herbivores and decomposers).',
      'Step 1 & 2 — Fragmentation & Leaching: Detritivores (e.g., earthworm) break down detritus into smaller particles (fragmentation). By leaching, water-soluble inorganic nutrients go down into the soil horizon and get precipitated as unavailable salts.',
      'Step 3 — Catabolism: Bacterial and fungal enzymes degrade detritus into simpler inorganic substances. (Fragmentation, leaching, and catabolism operate simultaneously on detritus).',
      'Step 4 & 5 — Humification & Mineralisation: Humification leads to accumulation of a dark-coloured amorphous substance called humus that is highly resistant to microbial action, decomposes at an extremely slow rate, and acts as a colloidal nutrient reservoir. The humus is further degraded by some microbes to release inorganic nutrients (mineralisation).',
      'Factors Regulating Decomposition Rate: Decomposition is faster if detritus is rich in nitrogen and water-soluble substances like sugars in a warm and moist aerobic environment. It is slower if detritus is rich in lignin and chitin, or under low temperature and anaerobiosis.'
    ],
    formulaOrEquation: 'NPP = GPP − R  |  Biosphere NPP = 170 Billion Tons (Land = 115 B Tons, Oceans = 55 B Tons)'
  },

  // ==========================================================================
  // CHAPTER 13: BIODIVERSITY AND CONSERVATION (With User's Crossed Pages 218–223)
  // ==========================================================================
  {
    id: 'bio-imp-13-1',
    number: 'Q18',
    chapterId: 'bio-ch-13',
    chapterNum: 13,
    chapterTitle: 'Biodiversity and Conservation',
    subtopicId: 'bio-sub-13-1',
    marks: '3 Marks',
    frequency: 'Your Crossed Textbook Page 218 (Fig. 13.1) + CBSE 2024, 2023, 2021',
    badge: '★ Your Crossed Page 218 (Fig. 13.1 Pie Charts) + CBSE Past Paper • 3 Marks',
    sourceTag: 'Your Crossed Textbook Page 218 & Past Paper',
    diagramId: 'biodiversity-pie-and-humboldt-graph',
    question:
      'Based on NCERT Figure 13.1 (crossed on your textbook page 218), state the proportionate biodiversity shares of animals, plants, insects, and fungi. Why are conventional taxonomic methods not suitable for estimating prokaryotic diversity? Also mention India\'s share of world land area and global species diversity.',
    answerPoints: [
      'Animals vs Plants Share (Page 218): More than 70 per cent of all the species recorded are animals, while plants (including algae, fungi, bryophytes, gymnosperms and angiosperms) comprise no more than 22 per cent of the total.',
      'Dominance of Insects Among Animals: Among animals, insects are the most species-rich taxonomic group, making up more than 70 per cent of the total. That means, out of every 10 animals on this planet, 7 are insects.',
      'Fungi Species Diversity (Fig. 13.1): The number of fungi species in the world is more than the combined total of the species of fishes, amphibians, reptiles and mammals.',
      'Why Prokaryotes are Excluded from Estimates (Bottom of Page 218): Conventional taxonomic methods are not suitable for identifying microbial species and many species are simply not culturable under laboratory conditions. If biochemical or molecular criteria are accepted, prokaryotic diversity might run into millions.',
      'India as one of the 12 Mega-Diversity Countries (Top of Page 219): Although India has only 2.4 per cent of the world\'s land area, its share of the global species diversity is an impressive 8.1 per cent (~45,000 species of plants and ~90,000 species of animals recorded).'
    ]
  },
  {
    id: 'bio-imp-13-2',
    number: 'Q19',
    chapterId: 'bio-ch-13',
    chapterNum: 13,
    chapterTitle: 'Biodiversity and Conservation',
    subtopicId: 'bio-sub-13-2',
    marks: '5 Marks',
    frequency: 'Your Bracketed Pages 219–220 (Fig. 13.2) + CBSE 2024, 2023, 2022, 2020 (Guaranteed)',
    badge: '★ Your Bracketed Pages 219–220 (Tropical Richness & Humboldt Curve) • 5 Marks',
    sourceTag: 'Your Crossed Textbook Pages 219–220 & Past Paper',
    question:
      '(a) State the three hypotheses proposed by ecologists to explain why tropics harbour greater biological diversity than temperate or polar regions (bracketed on your pages 219–220). (b) Explain Alexander von Humboldt\'s Species-Area relationship with both equations and state the underlined Z-values for small regions, entire continents, and frugivorous birds.',
    answerPoints: [
      'Hypothesis (a) — Long Undisturbed Evolutionary Time (Bracketed on pages 219–220): Speciation is generally a function of time. Unlike temperate regions subjected to frequent glaciations in the past, tropical latitudes (23.5° N to 23.5° S) have remained relatively undisturbed for millions of years and thus had a long evolutionary time for species diversification.',
      'Hypothesis (b) — Constant, Less Seasonal Environment: Tropical environments, unlike temperate ones, are less seasonal, relatively more constant and predictable. Such constant environments promote niche specialisation and lead to a greater species diversity.',
      'Hypothesis (c) — Higher Solar Energy & Productivity: There is more solar energy available in the tropics, which contributes to higher productivity; this in turn might contribute indirectly to greater diversity.',
      'Alexander von Humboldt\'s Species-Area Relationship (Page 220, Fig. 13.2): Within a region, species richness (S) increased with increasing explored area (A), but only up to a limit. The relationship for a wide variety of taxa (angiosperm plants, birds, bats, freshwater fishes) turns out to be a rectangular hyperbola:\n  • Rectangular Hyperbola Equation: S = C A^Z\n  • Logarithmic Straight-Line Equation: log S = log C + Z log A\n  (where S = Species richness, A = Area, Z = slope of the line / regression coefficient, C = Y-intercept).',
      'Underlined Values of Slope Z (Page 220):\n  • Small / Normal regions (regardless of taxonomic group or region): Z lies in the range of 0.1 to 0.2.\n  • Very large areas like entire continents: The slope of the line is much steeper, with Z values in the range of 0.6 to 1.2.\n  • Frugivorous (fruit-eating) birds and mammals in tropical forests of different continents: The slope Z is found to be 1.15.'
    ],
    formulaOrEquation: 'Hyperbola: S = C A^Z  |  Log-Linear: log S = log C + Z log A  |  Z = 0.1–0.2 (Small), 0.6–1.2 (Continent), 1.15 (Frugivores)'
  },
  {
    id: 'bio-imp-13-3',
    number: 'Q20',
    chapterId: 'bio-ch-13',
    chapterNum: 13,
    chapterTitle: 'Biodiversity and Conservation',
    subtopicId: 'bio-sub-13-3',
    marks: '5 Marks',
    frequency: 'Your Marked Page 223 ("Alien species invasions") + CBSE 2024, 2023, 2022, 2019',
    badge: '★ Your Marked Page 223 (Alien Species & Co-extinctions) + CBSE Past Paper • 5 Marks',
    sourceTag: 'Your Crossed Textbook Page 223 & Past Paper',
    question:
      'Describe "The Evil Quartet" — the four major causes of biodiversity losses — with special emphasis on the Alien Species Invasions and Co-extinctions marked on your textbook page 223. Also explain Paul Ehrlich\'s Rivet Popper Hypothesis.',
    answerPoints: [
      '1. Habitat Loss and Fragmentation (Most Important Cause): Tropical rain forests once covered >14% of Earth\'s land surface, now cover no more than 6%. The Amazon rain forest ("lungs of the planet") is being cut and cleared for cultivating soya beans or for conversion to grasslands for raising beef cattle. Fragmentation badly affects mammals and birds requiring large territories and animals with migratory habits.',
      '2. Over-Exploitation (Page 223): When human "need" turns to "greed", it leads to over-exploitation of natural resources. Many species extinctions in the last 500 years (Steller\'s sea cow, passenger pigeon) were due to overexploitation by humans.',
      '3. Alien Species Invasions (Marked with pencil on your page 223): When alien species are introduced unintentionally or deliberately, some of them turn invasive and cause decline or extinction of indigenous species:\n  • Nile Perch in Lake Victoria (East Africa): Led eventually to the extinction of an ecologically unique assemblage of more than 200 species of cichlid fish in the lake.\n  • Invasive Weed Species in India: Carrot grass (Parthenium), Lantana, and water hyacinth (Eicchornia).\n  • African Catfish (Clarias gariepinus): Illegally introduced for aquaculture purposes, posing a severe threat to the indigenous catfishes in our rivers.',
      '4. Co-extinctions (Page 223): When a species becomes extinct, the plant and animal species associated with it in an obligatory way also become extinct (e.g., when a host fish species becomes extinct, its unique assemblage of parasites also meets the same fate; or a coevolved plant-pollinator mutualism).',
      'Paul Ehrlich\'s Rivet Popper Hypothesis: Compares an ecosystem to an airplane where all parts are joined using thousands of rivets (species). If every passenger pops a rivet to take home (causing a species to become extinct), it may not affect flight safety initially, but as more rivets are removed the plane becomes dangerously weak. Loss of rivets on the wings (key species that drive major ecosystem functions) is a much more serious threat to flight safety than loss of a few rivets on the seats or windows.'
    ]
  },
  {
    id: 'bio-imp-13-4',
    number: 'Q21',
    chapterId: 'bio-ch-13',
    chapterNum: 13,
    chapterTitle: 'Biodiversity and Conservation',
    subtopicId: 'bio-sub-13-4',
    marks: '5 Marks',
    frequency: 'CBSE 2024, 2023, 2022, 2020 (Most Repeated)',
    badge: 'CBSE Past Paper • 5 Marks • 99% Repeated',
    sourceTag: 'Past Board Paper',
    question:
      '(a) Categorise the reasons for conserving biodiversity into Narrowly Utilitarian, Broadly Utilitarian, and Ethical arguments. (b) Differentiate between In-situ and Ex-situ conservation strategies. State the two criteria for a Biodiversity Hotspot and name the three hotspots covering India.',
    answerPoints: [
      'Narrowly Utilitarian Arguments: Humans derive countless direct economic benefits from nature — food (cereals, pulses, fruits), firewood, fibre, construction material, industrial products (tannins, lubricants, dyes, resins, perfumes) and >25% of drugs currently sold in the market (~25,000 species of plants used in traditional medicines). Includes bioprospecting.',
      'Broadly Utilitarian Arguments: Biodiversity plays a major role in many ecosystem services that nature provides: (i) Amazon forest produces 20% of the total oxygen in the Earth\'s atmosphere via photosynthesis, (ii) Pollination by bees, bumblebees, birds and bats, and (iii) Intangible aesthetic pleasures of walking through thick woods or waking up to a bulbul\'s song.',
      'Ethical Argument: Every species has an intrinsic value, even if it may not be of current or any economic value to us. We have a moral duty to care for their well-being and pass on our biological legacy in good order to future generations.',
      'In-situ (On-site) Conservation & Biodiversity Hotspots: Conserving and protecting the whole ecosystem so its biodiversity at all levels is protected (e.g., saving the entire forest to save the tiger). Includes 34 global Biodiversity Hotspots (covering <2% land area, can reduce ongoing mass extinctions by ~30%), 14 Biosphere Reserves, 90 National Parks, 448 Wildlife Sanctuaries, and Sacred Groves (Khasi & Jaintia Hills in Meghalaya, Aravalli Hills of Rajasthan, Western Ghats of Karnataka/Maharashtra, Sarguja/Chanda/Bastar of MP).\n  • Two Criteria for a Hotspot: (1) Very high levels of species richness, and (2) High degree of endemism (species confined to that region and not found anywhere else).\n  • Three Hotspots Covering India: Western Ghats and Sri Lanka, Indo-Burma, and Himalaya.',
      'Ex-situ (Off-site) Conservation: Threatened animals and plants are taken out from their natural habitat and placed in special settings where they can be protected and given special care. Includes Zoological parks, Botanical gardens, Wildlife Safari parks, Cryopreservation of gametes in viable and fertile condition for long periods in liquid nitrogen (−196 °C), in vitro fertilisation, tissue culture propagation, and Seed banks.'
    ]
  }
];

export const getBiologyImportantQuestionsByChapter = (chapterId) =>
  IMPORTANT_BIOLOGY_CH9_TO_13_QUESTIONS.filter((q) => q.chapterId === chapterId);
