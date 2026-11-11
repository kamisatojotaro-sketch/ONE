// NCERT Class 12 Biology Volume 2 — Short, Point-wise High-Yield Notes (Exam Portion Ch 9–13)
// Each subtopic is flagged `isImportant` when it is a repeatedly asked CBSE board topic.
// Curated deep-dive content (definitions, mnemonics, errors, A-R, PYQ trends) lives in
// biologyVol2StructuredNotes.js and is merged into STRUCTURED_NOTES_DATA.

const imp = (examTag, importantReason) => ({ isImportant: true, examTag, importantReason });

export const BIOLOGY_CHAPTERS_VOL2 = [
  // ==========================================================================
  // CHAPTER 9: BIOTECHNOLOGY: PRINCIPLES AND PROCESSES
  // ==========================================================================
  {
    id: 'bio-ch-9',
    number: 9,
    title: 'Biotechnology: Principles and Processes',
    tag: 'Biotechnology',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'bio-sub-9-1',
        title: '9.1 Principles of Biotechnology & Tools of Recombinant DNA Technology',
        ...imp('Important Question', 'EcoRI palindromic sequence, sticky ends formation & naming convention of restriction enzymes (asked almost every year)'),
        sections: [
          {
            id: 'bio-sec-9-1',
            title: 'Core Principles, Restriction Endonucleases, EcoRI, Palindromes & DNA Ligase',
            explanation: "• EFB Definition: Integration of natural science and organisms, cells, parts thereof, and molecular analogues for products and services.\n• Two core techniques: (1) Genetic Engineering — altering chemistry of genetic material (DNA/RNA) to introduce into host and change phenotype; (2) Bioprocess Engineering — maintenance of sterile (microbial contamination-free) ambience for growth of only desired microbe/eukaryotic cell.\n• First rDNA (1972): Stanley Cohen and Herbert Boyer linked an antibiotic resistance gene with native plasmid of Salmonella typhimurium.\n• Hind II: first restriction endonuclease isolated; cuts DNA at a specific 6 bp recognition sequence.\n• Naming convention (e.g., EcoRI from Escherichia coli RY 13): 'E' = Genus (Escherichia), 'co' = species (coli), 'R' = strain (RY 13), 'I' = Roman numeral (order of isolation).\n• Exonucleases remove nucleotides from ends of DNA; Endonucleases make cuts at specific positions within DNA.\n• Palindromic nucleotide sequence: sequence of base pairs that reads the same on the two strands when orientation of reading is kept the same (5' → 3').\n• EcoRI recognition sequence:\n  5' — G↓A A T T C — 3'\n  3' — C T T A A↑G — 5'\n• EcoRI cuts between G and A away from the centre, leaving overhanging single-stranded 'sticky ends' that form H-bonds with complementary counterparts.\n• DNA Ligase ('molecular glue') joins the sugar-phosphate backbones of foreign DNA and vector DNA.",
            questionFraming: "Most Repeated — 'Explain the convention for naming EcoRI.'\n'Write the palindromic nucleotide sequence for EcoRI and mark the site of action. How do sticky ends facilitate rDNA formation?'\n'Who constructed the first artificial recombinant DNA molecule and how?'",
            textbookRef: "Over 900 restriction enzymes have been isolated from over 230 strains of bacteria.",
            keyFormulas: [
              "EcoRI: 5'-G↓AATTC-3' / 3'-CTTAA↑G-5'",
              "Exonuclease = cuts ends | Endonuclease = cuts inside at palindrome",
              "Same restriction enzyme on vector + foreign DNA → complementary sticky ends",
              "DNA Ligase → phosphodiester bond (rDNA)"
            ],
            isImportant: true,
            examTag: 'Important Question'
          }
        ]
      },
      {
        id: 'bio-sub-9-2',
        title: '9.2 Separation and Isolation of DNA Fragments',
        ...imp('Important Diagram', 'Agarose Gel Electrophoresis diagram, anode/cathode polarity, Ethidium Bromide + UV orange bands & elution (frequent 2M/3M)'),
        sections: [
          {
            id: 'bio-sec-9-2',
            title: 'Agarose Gel Electrophoresis, Ethidium Bromide Staining & Elution',
            explanation: "• Restriction endonuclease digestion produces DNA fragments that are separated by Agarose Gel Electrophoresis.\n• Principle: DNA fragments are negatively charged (due to phosphate groups), so they move towards the positively charged anode under an electric field.\n• Matrix: Agarose is a natural polymer extracted from seaweeds; acts as a molecular sieve.\n• Sieving effect: Smaller DNA fragments move farther (faster) towards the anode; larger fragments remain near the wells.\n• Visualisation: Pure DNA cannot be seen in visible light. Gel is stained with Ethidium Bromide (EtBr) and exposed to UV radiation → bright orange coloured bands of DNA appear.\n• Elution: Separated DNA bands are cut out from the agarose gel piece and extracted/purified for constructing recombinant DNA.",
            questionFraming: "Most Repeated — 'Why do DNA fragments move towards the anode during gel electrophoresis?'\n'How are separated DNA fragments visualised and extracted from the agarose gel? Define elution.'\n'Which DNA band — closest to the well or farthest — represents the smallest DNA fragment? Give reason.'",
            textbookRef: "Bright orange coloured bands of DNA can be seen only after staining with ethidium bromide followed by exposure to UV radiation.",
            keyFormulas: [
              "DNA = negatively charged → moves to Anode (+)",
              "Smaller fragment → moves farther (sieving effect of agarose)",
              "Stain: Ethidium Bromide + UV light → Bright orange bands",
              "Elution = cutting & extracting DNA bands from agarose gel"
            ],
            isImportant: true,
            examTag: 'Important Diagram'
          }
        ]
      },
      {
        id: 'bio-sub-9-3',
        title: '9.3 Cloning Vectors',
        ...imp('Important Diagram', 'pBR322 vector map (ori, rop, ampR, tetR, restriction sites), insertional inactivation & Ti plasmid (guaranteed 3M/5M topic)'),
        sections: [
          {
            id: 'bio-sec-9-3',
            title: 'Features of Cloning Vector, pBR322 Map, Blue-White Screening & Ti Plasmid',
            explanation: "• Essential features of a cloning vector:\n  1. Origin of replication (ori): sequence where replication starts; controls copy number of linked DNA.\n  2. Selectable marker: helps identify and eliminate non-transformants and selectively permit growth of transformants (e.g., ampR, tetR, chloramphenicol, kanamycin resistance genes).\n  3. Cloning (recognition) sites: single unique recognition site for each restriction enzyme; multiple sites fragment the vector.\n• E. coli cloning vector pBR322:\n  – Selectable markers: ampR (ampicillin resistance) and tetR (tetracycline resistance).\n  – Sites in ampR: PstI, PvuI.\n  – Sites in tetR: BamHI, SalI.\n  – Other sites: EcoRI, ClaI, HindIII; rop (codes for proteins involved in replication of plasmid) contains PvuII.\n• Insertional inactivation in pBR322: Foreign DNA ligated at BamHI site of tetR inactivates tetracycline resistance. Recombinants = ampR sensitive to tetracycline (replica plating required).\n• Blue-White Selection (Alternative selectable marker): Foreign DNA inserted into coding sequence of β-galactosidase enzyme → insertional inactivation.\n  – Non-recombinants: active β-galactosidase + chromogenic substrate → Blue colonies.\n  – Recombinants: inactivated β-galactosidase → White (colourless) colonies.\n• Vectors for plants & animals:\n  – Agrobacterium tumefaciens Ti (tumour-inducing) plasmid: T-DNA disarmed (non-pathogenic) to deliver genes into dicot plants.\n  – Disarmed retroviruses: used to deliver desirable genes into animal cells.",
            questionFraming: "Most Repeated — 'Draw a schematic diagram of E. coli cloning vector pBR322 showing ori, rop, ampR, tetR and restriction sites.'\n'Why is insertional inactivation of β-galactosidase gene preferred over antibiotic resistance markers?'\n'How does Agrobacterium tumefaciens act as a natural genetic engineer of plants?'",
            textbookRef: "Selection of recombinants due to inactivation of antibiotics is a cumbersome procedure because it requires simultaneous plating on two plates having different antibiotics.",
            keyFormulas: [
              "pBR322: ampR (PstI, PvuI) | tetR (BamHI, SalI) | rop (PvuII)",
              "Foreign DNA at BamHI → tetR inactivated (grows on Amp, dies on Tet)",
              "β-galactosidase intact = Blue colony (non-recombinant)",
              "β-galactosidase inactivated = White colony (recombinant)"
            ],
            isImportant: true,
            examTag: 'Important Diagram'
          }
        ]
      },
      {
        id: 'bio-sub-9-4',
        title: '9.4 Competent Host & Methods of Gene Transfer',
        ...imp('Important Question', 'Making bacterial host competent (Ca²⁺ + 42 °C heat shock) & direct gene transfer methods (frequent 2M/3M)'),
        sections: [
          {
            id: 'bio-sec-9-4',
            title: 'Competent Host, Ca²⁺ Heat Shock, Microinjection, Biolistics & Disarmed Pathogens',
            explanation: "• Why cells cannot take up DNA directly: DNA is a hydrophilic molecule, so it cannot pass through hydrophobic cell membranes.\n• Making bacterial cells competent:\n  1. Treat bacterial cells with a specific concentration of divalent cation such as Calcium (Ca²⁺), which increases efficiency with which DNA enters the bacterium through pores in its cell wall.\n  2. Heat-shock protocol: Incubate cells with rDNA on ice → place briefly at 42 °C (heat shock) → put back on ice. This enables bacteria to take up rDNA.\n• Vectorless (direct) gene transfer methods:\n  – Microinjection: rDNA is directly injected into the nucleus of an animal cell using a micropipette.\n  – Biolistics or Gene Gun: Plant cells are bombarded with high-velocity micro-particles of gold or tungsten coated with DNA.\n• Vector-mediated transfer: Disarmed pathogen vectors (e.g., disarmed Ti plasmid of Agrobacterium or disarmed retroviruses) infect the host cell and transfer the recombinant DNA.",
            questionFraming: "Most Repeated — 'Why cannot alien DNA pass through the cell membrane easily? How is a bacterial cell made competent to take up rDNA?'\n'Differentiate between microinjection and biolistics (gene gun) with respect to the host cell type.'",
            textbookRef: "Since DNA is a hydrophilic molecule, it cannot pass through cell membranes unless the host cells are made 'competent'.",
            keyFormulas: [
              "Divalent Ca²⁺ → pores in bacterial cell wall",
              "Heat shock: Ice → 42 °C (briefly) → Ice",
              "Microinjection = Animal cell nucleus | Biolistics = Plant cells (Gold/Tungsten)"
            ],
            isImportant: true,
            examTag: 'Important Question'
          }
        ]
      },
      {
        id: 'bio-sub-9-5',
        title: '9.5 Processes of rDNA Technology: DNA Isolation, PCR, Bioreactors & Downstream Processing',
        ...imp('Important Diagram', 'PCR steps (Denaturation, Annealing, Extension + Taq polymerase), Chilled ethanol spooling & Stirred-tank Bioreactor (repeated 3M/5M)'),
        sections: [
          {
            id: 'bio-sec-9-5',
            title: 'DNA Isolation, PCR Amplification, Bioreactors & Downstream Processing',
            explanation: "• Isolation of genetic material (DNA):\n  – Cell wall lysis enzymes: Lysozyme (bacteria), Cellulase (plant cells), Chitinase (fungus).\n  – Removal of macromolecules: Ribonuclease (removes RNA), Protease (removes proteins like histones).\n  – Precipitation: Addition of chilled ethanol precipitates purified DNA as fine threads (removed by spooling).\n• Polymerase Chain Reaction (PCR) — in vitro synthesis of multiple copies (~1 billion) of gene of interest:\n  1. Denaturation (~94 °C): dsDNA separates into two single strands by high temperature.\n  2. Annealing (~50–60 °C): Two sets of small chemically synthesised oligonucleotide primers bind to 3' ends of template strands.\n  3. Extension (~72 °C): Thermostable Taq DNA polymerase (isolated from bacterium Thermus aquaticus) extends the primers using deoxynucleotides (dNTPs) and Mg²⁺.\n• Recombinant protein: Protein encoding gene expressed in a heterologous host.\n• Bioreactors (100–1000 litres): Vessels in which raw materials are biologically converted into specific products.\n  – Simple stirred-tank bioreactor: Cylindrical with curved base to facilitate mixing of reactor contents; agitator system, oxygen delivery system, foam control system, temperature & pH control systems, sampling ports.\n  – Sparged stirred-tank bioreactor: Sterile air bubbles are sparged, dramatically increasing surface area for oxygen transfer.\n• Downstream Processing: Separation and purification of biosynthetic product + formulation with preservatives + strict clinical trials & quality control testing.",
            questionFraming: "Most Repeated — 'Name the enzymes used to break open bacterial, plant and fungal cells to release DNA. How is purified DNA precipitated?'\n'Explain the three steps of PCR with a diagram. Why is Taq polymerase used in PCR?'\n'Why are stirred-tank bioreactors preferred over shake flasks for large-scale production?'",
            textbookRef: "Taq polymerase isolated from Thermus aquaticus remains active during the high temperature-induced denaturation of double-stranded DNA.",
            keyFormulas: [
              "Lysis: Lysozyme (bacteria) | Cellulase (plant) | Chitinase (fungus)",
              "Chilled Ethanol → DNA precipitation (spooling)",
              "PCR: Denaturation (94 °C) → Annealing (54 °C) → Extension (72 °C, Taq polymerase)",
              "After n cycles of PCR → 2^n copies of DNA"
            ],
            isImportant: true,
            examTag: 'Important Diagram'
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CHAPTER 10: BIOTECHNOLOGY AND ITS APPLICATIONS
  // ==========================================================================
  {
    id: 'bio-ch-10',
    number: 10,
    title: 'Biotechnology and its Applications',
    tag: 'Biotechnology',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'bio-sub-10-1',
        title: '10.1 Biotechnological Applications in Agriculture: GMOs & Bt Cotton',
        ...imp('Important Question', 'Bt toxin activation in alkaline insect gut & cryIAc/cryIIAb vs cryIAb specificity (asked almost every year)'),
        sections: [
          {
            id: 'bio-sec-10-1',
            title: 'Benefits of GM Plants, Bacillus thuringiensis & Cry Proteins in Bt Cotton',
            explanation: "• Three options for increasing food production: (i) agro-chemical based agriculture, (ii) organic agriculture, (iii) genetically engineered crop-based agriculture.\n• Advantages of GM plants:\n  1. Crops more tolerant to abiotic stresses (cold, drought, salt, heat).\n  2. Reduced reliance on chemical pesticides (pest-resistant crops).\n  3. Helped reduce post-harvest losses.\n  4. Increased efficiency of mineral usage by plants (prevents early exhaustion of soil fertility).\n  5. Enhanced nutritional value of food (e.g., Golden Rice — Vitamin A enriched rice).\n• Bt Cotton mechanism:\n  – Bacillus thuringiensis produces protein crystals during a particular phase of growth containing insecticidal protein.\n  – Exists as inactive protoxin in the bacterium (hence does not kill the Bacillus itself).\n  – Once ingested by the insect, the inactive toxin is converted into an active form due to the alkaline pH of the insect gut, which solubilises the crystals.\n  – Activated toxin binds to the surface of midgut epithelial cells and creates pores → causes cell swelling and lysis → death of the insect.\n• Insect group targets: Lepidopterans (tobacco budworm, armyworm), Coleopterans (beetles), Dipterans (flies, mosquitoes).\n• Gene specificity (cry gene → Cry protein):\n  – cryIAc and cryIIAb control Cotton Bollworms.\n  – cryIAb controls Corn Borer.",
            questionFraming: "Most Repeated — 'Why does the Bt toxin protein not kill the Bacillus bacterium that produces it, but kills the insect that ingests it?'\n'Name the specific cry genes that control (i) cotton bollworms and (ii) corn borer.'\n'How does the activated Bt toxin cause the death of the insect larva?'",
            textbookRef: "The toxin is coded by a gene cryIAc named cry. Proteins encoded by the genes cryIAc and cryIIAb control the cotton bollworms, that of cryIAb controls corn borer.",
            keyFormulas: [
              "Inactive protoxin --[Alkaline gut pH]--> Active toxin → Midgut pores & lysis",
              "cryIAc & cryIIAb → Cotton Bollworms",
              "cryIAb → Corn Borer",
              "Golden Rice → Vitamin A (beta-carotene) enriched"
            ],
            isImportant: true,
            examTag: 'Important Question'
          }
        ]
      },
      {
        id: 'bio-sub-10-2',
        title: '10.2 Pest-Resistant Plants: RNA Interference (RNAi) against Meloidogyne incognita',
        ...imp('Important Question', 'RNA interference (RNAi) mechanism, dsRNA formation & silencing of nematode mRNA in tobacco roots (guaranteed 3M question)'),
        sections: [
          {
            id: 'bio-sec-10-2',
            title: 'RNA Interference (RNAi) & Protection of Tobacco Roots from Nematode',
            explanation: "• Nematode Meloidogyne incognita infects the roots of tobacco plants and causes a great reduction in yield.\n• Novel strategy: RNA interference (RNAi), which takes place in all eukaryotic organisms as a method of cellular defence.\n• Mechanism of RNAi: Silencing of a specific mRNA due to a complementary double-stranded RNA (dsRNA) molecule that binds to and prevents translation of the mRNA (post-transcriptional gene silencing).\n• Source of complementary RNA: Infection by viruses having RNA genomes or mobile genetic elements (transposons) that replicate via an RNA intermediate.\n• Steps in developing pest-resistant tobacco:\n  1. Nematode-specific genes were introduced into the host tobacco plant using Agrobacterium vectors.\n  2. DNA was introduced such that it produced both sense and anti-sense RNA in the host cells.\n  3. These two RNAs, being complementary to each other, formed a double-stranded RNA (dsRNA) that initiated RNAi.\n  4. When the parasite ingested host RNA, specific mRNA of the nematode was silenced.\n  5. Consequence: The parasite could not survive in the transgenic host expressing specific interfering RNA.",
            questionFraming: "Most Repeated — 'Name the nematode that infects the roots of tobacco plants. Explain the strategy of RNA interference (RNAi) used to make tobacco plants pest-resistant.'\n'How is dsRNA formed inside the transgenic host plant cell during RNAi?'",
            textbookRef: "RNAi involves silencing of a specific mRNA due to a complementary dsRNA molecule that binds to and prevents translation of the mRNA (silencing).",
            keyFormulas: [
              "Pathogen: Meloidogyne incognita (root-knot nematode of tobacco)",
              "Vector: Agrobacterium tumefaciens",
              "Sense RNA + Anti-sense RNA → Complementary dsRNA",
              "dsRNA cleaves/binds target nematode mRNA → Prevents translation (Gene Silencing)"
            ],
            isImportant: true,
            examTag: 'Important Question'
          }
        ]
      },
      {
        id: 'bio-sub-10-3',
        title: '10.3 Biotechnological Applications in Medicine: Genetically Engineered Insulin & Gene Therapy',
        ...imp('Important Diagram', 'Pro-insulin (A + B + C peptide) vs Mature Insulin (disulphide bonds) & ADA Deficiency Gene Therapy (very frequent 3M/5M)'),
        sections: [
          {
            id: 'bio-sec-10-3',
            title: 'Humulin (Eli Lilly, C-Peptide Removal) & ADA Deficiency Gene Therapy',
            explanation: "• Genetically Engineered Insulin:\n  – Earlier insulin extracted from pancreas of slaughtered cattle and pigs caused allergy/immune reactions in some diabetic patients.\n  – Structure of Mature Insulin: Two short polypeptide chains — Chain A and Chain B — linked together by disulphide bridges.\n  – In mammals (including humans), insulin is synthesised as a pro-hormone (pro-insulin) containing an extra stretch called the C-peptide.\n  – During maturation into insulin, the C-peptide is removed; C-peptide is absent in mature insulin.\n  – Eli Lilly (1983, American company): Prepared two DNA sequences corresponding to A and B chains of human insulin → introduced them in plasmids of E. coli to produce insulin chains separately → extracted and combined Chains A and B by creating disulphide bonds to form human insulin (Humulin).\n• Gene Therapy (first clinical trial in 1990 on a 4-year-old girl with ADA deficiency):\n  – Adenosine deaminase (ADA) enzyme is crucial for the immune system to function; disorder is caused by deletion of the gene for adenosine deaminase.\n  – Conventional treatments (not completely curative): Bone marrow transplantation or Enzyme replacement therapy (periodic injection of functional ADA).\n  – Gene Therapy steps: Lymphocytes from patient's blood are grown in culture outside the body → functional ADA cDNA (using a retroviral vector) is introduced into these lymphocytes → genetically engineered lymphocytes are returned to the patient.\n  – Limitation: As lymphocytes are not immortal, the patient requires periodic infusion of such genetically engineered lymphocytes.\n  – Permanent cure: If the gene isolated from marrow cells producing ADA is introduced into cells at early embryonic stages, it could be a permanent cure.",
            questionFraming: "Most Repeated — 'How does pro-insulin differ from mature functional insulin? How did Eli Lilly overcome the challenge of producing human insulin using rDNA technology in 1983?'\n'Explain the steps of gene therapy for ADA deficiency. Why is this therapy not a permanent cure when performed on adult lymphocytes, and how can a permanent cure be achieved?'",
            textbookRef: "The main challenge for production of insulin using rDNA techniques was getting insulin assembled into a mature form.",
            keyFormulas: [
              "Pro-insulin = A-chain + B-chain + C-peptide (inactive)",
              "Mature Insulin = A-chain + B-chain linked by disulphide bridges (no C-peptide)",
              "Eli Lilly (1983): E. coli plasmids express Chain A & Chain B separately → joined via disulphide bonds",
              "ADA Gene Therapy: Patient lymphocytes + Retroviral ADA cDNA → Periodic infusion | Embryonic stage = Permanent cure"
            ],
            isImportant: true,
            examTag: 'Important Diagram'
          }
        ]
      },
      {
        id: 'bio-sub-10-4',
        title: '10.4 Molecular Diagnosis & Transgenic Animals',
        ...imp('Important Question', 'PCR, ELISA, Autoradiography probe detection, Rosie transgenic cow & α-1-antitrypsin (frequent 2M/3M)'),
        sections: [
          {
            id: 'bio-sec-10-4',
            title: 'PCR, Autoradiography, ELISA & Transgenic Animals (Rosie Cow, α-1-Antitrypsin)',
            explanation: "• Molecular Diagnosis (Early detection of disease before high pathogen load/symptoms):\n  1. PCR (Polymerase Chain Reaction): Detects very low concentration of bacteria or viruses by amplification of their nucleic acid. Routinely used to detect HIV in suspected AIDS patients, mutations in genes in suspected cancer patients, and other genetic disorders.\n  2. Autoradiography with Probe: A single-stranded DNA or RNA tagged with a radioactive molecule (probe) hybridises to its complementary DNA in a clone of cells. A mutated gene will NOT appear on the photographic film because the probe does not have complementarity with the mutated gene.\n  3. ELISA (Enzyme-Linked Immunosorbent Assay): Based on the principle of antigen-antibody interaction. Detects infection by presence of pathogen antigens (proteins, glycoproteins) or antibodies synthesised against the pathogen.\n• Transgenic Animals (Animals with manipulated DNA to possess and express an extra foreign gene — over 95% of all existing transgenic animals are mice):\n  – Study of normal physiology and development (e.g., insulin-like growth factor).\n  – Study of disease: models for cancer, cystic fibrosis, rheumatoid arthritis and Alzheimer's.\n  – Biological products:\n    • α-1-antitrypsin: human protein used to treat emphysema.\n    • Rosie (1997, first transgenic cow): produced human protein-enriched milk (2.4 grams per litre) containing human alpha-lactalbumin; nutritionally a more balanced product for human babies than natural cow-milk.\n  – Vaccine safety testing: Transgenic mice used to test safety of polio vaccine before replacing monkeys.\n  – Chemical safety / toxicity testing: Transgenic animals carry genes that make them more sensitive to toxic substances than non-transgenic animals, giving results in less time.",
            questionFraming: "Most Repeated — 'How does a radioactive ssDNA/RNA probe help in detecting a mutated gene using autoradiography?'\n'What is the principle of ELISA?'\n'Why was the milk produced by the first transgenic cow Rosie considered nutritionally more balanced for human babies? Name the protein used to treat emphysema.'",
            textbookRef: "The clone having the mutated gene will hence not appear on the photographic film, because the probe will not have complementarity with the mutated gene.",
            keyFormulas: [
              "Autoradiography: Mutated gene = No hybridisation with probe = No band on film",
              "ELISA principle = Antigen–Antibody interaction",
              "α-1-antitrypsin → treats Emphysema",
              "Rosie (1997) → 2.4 g/L human alpha-lactalbumin in milk"
            ],
            isImportant: true,
            examTag: 'Important Question'
          }
        ]
      },
      {
        id: 'bio-sub-10-5',
        title: '10.5 Ethical Issues, GEAC & Biopiracy',
        ...imp('Important Question', 'GEAC full form & role, Biopiracy definition, Indian Basmati Rice & Turmeric patent cases (repeated 2M/3M)'),
        sections: [
          {
            id: 'bio-sec-10-5',
            title: 'GEAC, Biopiracy, Indian Basmati Rice & Traditional Knowledge Patents',
            explanation: "• GEAC (Genetic Engineering Approval Committee): Set up by the Indian Government to make decisions regarding the validity of GM research and the safety of introducing GM-organisms for public services.\n• Indian Basmati Rice Case:\n  – An estimated 200,000 varieties of rice exist in India alone (one of the richest diversities in the world), including 27 documented varieties of Basmati grown in India.\n  – In 1997, an American company got patent rights on Basmati rice through the US Patent and Trademark Office.\n  – They crossed Indian Basmati with semi-dwarf varieties and claimed it as a 'new' invention/variety, restricting other people selling Basmati rice.\n• Biopiracy: The term used to refer to the use of bio-resources by multinational companies and other organisations without proper authorisation from the countries and people concerned without compensatory payment.\n• Other traditional knowledge patent attempts: Several attempts have been made to patent uses, products and processes based on Indian traditional herbal medicines such as Turmeric (wound healing) and Neem.\n• Indian Patent Bill (Second Amendment): Takes issues of biopiracy into consideration, including patent terms, emergency provisions, and research and development initiatives.",
            questionFraming: "Most Repeated — 'Expand GEAC and state its two main objectives.'\n'Define biopiracy and explain it with reference to the Indian Basmati rice patent case of 1997.'",
            textbookRef: "Industrialised nations are rich financially but poor in biodiversity and traditional knowledge, whereas developing and underdeveloped world is rich in biodiversity and traditional knowledge related to bio-resources.",
            keyFormulas: [
              "GEAC = Genetic Engineering Approval Committee (validity of GM research + safety of GMOs)",
              "Biopiracy = Unauthorised use of bio-resources without compensatory payment",
              "India = 200,000 rice varieties + 27 documented Basmati varieties"
            ],
            isImportant: true,
            examTag: 'Important Question'
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CHAPTER 11: ORGANISMS AND POPULATIONS
  // ==========================================================================
  {
    id: 'bio-ch-11',
    number: 11,
    title: 'Organisms and Populations',
    tag: 'Ecology',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'bio-sub-11-1',
        title: '11.1 Population Attributes: Birth/Death Rates, Sex Ratio & Age Pyramids',
        ...imp('Important Diagram', 'Expanding, Stable and Declining age pyramids & calculation of per capita birth/death rates (frequent 2M/3M)'),
        sections: [
          {
            id: 'bio-sec-11-1',
            title: 'Population Attributes, Per Capita Birth/Death Rates & Age Pyramids',
            explanation: "• Population vs Individual attributes: An individual organism is born and dies, has a sex (male or female), and a specific age; a population has Birth Rate (Natality), Death Rate (Mortality), Sex Ratio, and Age Distribution.\n• Per capita Birth Rate = Change in number (ΔN) / (Initial population N × Time Δt).\n  – NCERT Example: If in a pond there were 20 lotus plants last year and through reproduction 8 new plants are added (total = 28), Birth rate = 8 / 20 = 0.4 offspring per lotus per year.\n• Per capita Death Rate:\n  – NCERT Example: If 4 individuals in a laboratory population of 40 fruitflies died during a week, Death rate = 4 / 40 = 0.1 individuals per fruitfly per week.\n• Sex Ratio: Percentage of males and females in a population (e.g., 60% of the population are females and 40% males).\n• Age Pyramid: Plotting the percent individuals of a given age or age group (Pre-reproductive at base, Reproductive in middle, Post-reproductive at top) gives an age pyramid whose shape reflects growth status:\n  1. Expanding (Triangular): Pre-reproductive > Reproductive > Post-reproductive (rapidly growing population).\n  2. Stable (Bell-shaped): Pre-reproductive ≈ Reproductive (zero growth / stable population).\n  3. Declining (Urn-shaped): Pre-reproductive < Reproductive (narrow base; shrinking population).",
            questionFraming: "Most Repeated — 'Draw and identify the three types of age pyramids for human population. What does the shape of each pyramid indicate?'\n'If 8 new lotus plants are added to a pond of 20 lotus plants in one year, calculate the birth rate of the population.'",
            textbookRef: "Population size, technically called population density (designated as N), need not necessarily be measured in numbers only (e.g., percent cover/biomass for a huge Banyan tree vs 200 Parthenium plants, or pug marks/fecal pellets for tiger census).",
            keyFormulas: [
              "Birth Rate = ΔN_born / N_initial (e.g., 8/20 = 0.4 per lotus/year)",
              "Death Rate = ΔN_died / N_initial (e.g., 4/40 = 0.1 per fruitfly/week)",
              "Expanding = Triangular (Pre > Rep) | Stable = Bell (Pre ≈ Rep) | Declining = Urn (Pre < Rep)"
            ],
            isImportant: true,
            examTag: 'Important Diagram'
          }
        ]
      },
      {
        id: 'bio-sub-11-2',
        title: '11.2 Population Density & Fluctuations',
        ...imp('Important Question', 'Natality, Mortality, Immigration, Emigration flowchart & N_{t+1} = N_t + [(B + I) − (D + E)] (repeated 2M/3M)'),
        sections: [
          {
            id: 'bio-sec-11-2',
            title: 'Natality, Mortality, Immigration, Emigration & Population Density Equation',
            explanation: "• Four basic processes fluctuate population density (N) in a given habitat during a given period:\n  1. Natality (B): Number of births during a given period in the population that are added to the initial density.\n  2. Mortality (D): Number of deaths in the population during a given period.\n  3. Immigration (I): Number of individuals of the same species that have come into the habitat from elsewhere during the time period under consideration.\n  4. Emigration (E): Number of individuals of the population who left the habitat and gone elsewhere during the time period under consideration.\n• Natality (B) and Immigration (I) contribute to an increase in population density (+); Mortality (D) and Emigration (E) contribute to a decrease (−).\n• Equation for Population Density at time t + 1:\n  N_{t+1} = N_t + [(B + I) − (D + E)]\n• Population density increases if (B + I) > (D + E) and decreases if (B + I) < (D + E).\n• Under normal conditions, births and deaths are the most important factors influencing population density, whereas if a new habitat is just being colonised, immigration (I) contributes more significantly than birth rates.",
            questionFraming: "Most Repeated — 'Write the equation that describes population density at time t + 1 in terms of B, D, I and E.'\n'When a new habitat is just being colonised, which factor contributes more significantly to population growth — natality or immigration?'",
            textbookRef: "If a new habitat is just being colonised, immigration may contribute more significantly to population growth than birth rates.",
            keyFormulas: [
              "N_{t+1} = N_t + [(B + I) − (D + E)]",
              "Increase: (B + I) > (D + E) | Decrease: (B + I) < (D + E)",
              "New habitat colonisation → Immigration (I) is primary driver"
            ],
            isImportant: true,
            examTag: 'Important Question'
          }
        ]
      },
      {
        id: 'bio-sub-11-3',
        title: '11.3 Population Growth Models: Exponential vs Logistic',
        ...imp('Important Diagram', 'Exponential (J-shaped) vs Verhulst-Pearl Logistic (S-shaped) growth curves, equations & carrying capacity K (guaranteed 3M/5M)'),
        sections: [
          {
            id: 'bio-sec-11-3',
            title: 'Exponential Growth (J-Curve) vs Verhulst-Pearl Logistic Growth (S-Curve)',
            explanation: "• Exponential Growth (when resources like food and space in the habitat are unlimited):\n  – Each species has the ability to realise fully its innate potential to grow in number (as Darwin observed).\n  – Differential equation: dN/dt = (b − d) × N = rN, where r = (b − d) is the 'intrinsic rate of natural increase'.\n  – Integral form: N_t = N_0 e^{rt} (where N_t = density after time t, N_0 = density at time zero, e = base of natural logarithms 2.71828).\n  – Curve shape: J-shaped curve when N is plotted in relation to time (t).\n  – NCERT r values: Norway rat = 0.015, Flour beetle = 0.12, Human population in India (1981) = 0.0205.\n• Logistic Growth (when resources are limited — more realistic model):\n  – Nature's given habitat has enough resources to support a maximum possible number, beyond which no further growth is possible — called Carrying Capacity (K).\n  – Verhulst-Pearl Logistic Growth equation:\n    dN/dt = rN [(K − N) / K]\n  – Here, (K − N)/K represents environmental resistance.\n  – Curve shape: Sigmoid (S-shaped) curve with phases: Lag phase → Acceleration phase → Deceleration phase → Asymptote (when N reaches K).\n• Life History Variation:\n  – Breed once in lifetime (semelparous): Pacific salmon fish, bamboo.\n  – Large number of small-sized offspring: Oysters, pelagic fishes.\n  – Small number of large-sized offspring: Birds, mammals.",
            questionFraming: "Most Repeated — 'Plot the population growth curves (a) when resources are not limiting and (b) when resources are limiting. Write the differential equations for both and explain the terms r and K.'\n'Why is the logistic growth model considered more realistic in nature?'",
            textbookRef: "Since resources for growth for most animal populations are finite and become limiting sooner or later, the logistic growth model is considered a more realistic one.",
            keyFormulas: [
              "Exponential (unlimited): dN/dt = rN  |  N_t = N_0 e^{rt}  (J-shaped)",
              "Logistic (limited): dN/dt = rN [(K − N) / K]  (S-shaped / Sigmoid)",
              "r = (b − d) = intrinsic rate of natural increase",
              "K = Carrying Capacity | Asymptote reached when N = K"
            ],
            isImportant: true,
            examTag: 'Important Diagram'
          }
        ]
      },
      {
        id: 'bio-sub-11-4',
        title: '11.4 Population Interactions',
        ...imp('Important Question', 'Gause Exclusion vs MacArthur Resource Partitioning, Connell barnacles, Brood parasitism, Commensalism & Fig-Wasp/Ophrys mutualism (guaranteed 3M/5M)'),
        sections: [
          {
            id: 'bio-sec-11-4',
            title: 'Predation, Competition, Parasitism, Commensalism & Mutualism',
            explanation: "• Summary of Interactions: Mutualism (+/+), Competition (−/−), Predation (+/−), Parasitism (+/−), Commensalism (+/0), Amensalism (−/0).\n• Predation (+/−): Conduit for energy transfer; keeps prey populations under control (e.g., Prickly pear cactus in Australia controlled by cactus-feeding moth); maintains species diversity by reducing competition among prey (Pisaster starfish in American Pacific Coast — removing it caused >10 invertebrate species to go extinct).\n  – Prey defences: Camouflage (frogs, insects), Poison (Monarch butterfly — distasteful due to feeding on poisonous weed in caterpillar stage), Thorns (Acacia, Cactus), Cardiac glycosides (Calotropis — cattle/goats never browse on it).\n• Competition (−/−): Fitness of one species (measured in 'r') is significantly lower in presence of another.\n  – Interference competition: Flamingoes and resident fishes competing for zooplankton in South American lakes.\n  – Competitive release & Connell's Elegant Field Experiment: Superior barnacle Balanus dominates rocky sea coasts of Scotland and excludes smaller barnacle Chathamalus.\n  – Gause's Competitive Exclusion Principle: Two closely related species competing for the same limiting resources cannot co-exist indefinitely; the competitively inferior one will be eliminated (e.g., Abingdon tortoise in Galapagos extinct after goats were introduced).\n  – Resource Partitioning (MacArthur): Five closely related species of warblers living on the same tree avoided competition and co-existed due to behavioural differences in their foraging activities.\n• Parasitism (+/−): Adaptations = loss of unnecessary sense organs, adhesive organs/suckers, loss of digestive system, high reproductive capacity. Ectoparasites (lice on humans, ticks on dogs, Cuscuta on hedge plants) vs Endoparasites (Plasmodium, liver fluke). Brood parasitism: Koel (cuckoo) lays eggs in crow's nest.\n• Commensalism (+/0): Orchid (epiphyte) on mango branch; Barnacles on back of whale; Cattle egret and grazing cattle; Sea anemone and clown fish.\n• Mutualism (+/+): Lichens (fungus + algae/cyanobacteria); Mycorrhizae (fungi + roots of higher plants); Fig tree and female wasp (fig pollinated only by its partner wasp; wasp uses fruit as oviposition site & developing seeds as larval food); Mediterranean orchid Ophrys and male bee (sexual deceit / pseudocopulation — one petal resembles female bee).",
            questionFraming: "Most Repeated — 'State Gause's Competitive Exclusion Principle. How did MacArthur show that closely related warbler species can co-exist?' / 'Explain Connell's field experiment on barnacles.'\n'Why do cattle and goats never browse on Calotropis plants?'\n'Explain how the Mediterranean orchid Ophrys ensures pollination by sexual deceit.'",
            textbookRef: "In the rocky intertidal communities of the American Pacific Coast, the starfish Pisaster is an important predator; when all starfish were removed experimentally, more than 10 species of invertebrates became extinct within a year due to interspecific competition.",
            keyFormulas: [
              "Mutualism (+/+) | Competition (−/−) | Predation (+/−) | Parasitism (+/−) | Commensalism (+/0) | Amensalism (−/0)",
              "Pisaster starfish = maintains species diversity | Calotropis = cardiac glycosides",
              "Connell: Balanus excludes Chathamalus | MacArthur: 5 warbler species resource partitioning",
              "Ophrys orchid = sexual deceit (pseudocopulation by male bee)"
            ],
            isImportant: true,
            examTag: 'Important Question'
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CHAPTER 12: ECOSYSTEM
  // ==========================================================================
  {
    id: 'bio-ch-12',
    number: 12,
    title: 'Ecosystem',
    tag: 'Ecology',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'bio-sub-12-1',
        title: '12.1 Ecosystem Structure, Stratification & Productivity',
        ...imp('Important Question', 'GPP vs NPP (NPP = GPP − R), Secondary productivity & annual net primary productivity of biosphere (frequent 2M/3M)'),
        sections: [
          {
            id: 'bio-sec-12-1',
            title: 'Stratification, Primary Productivity (GPP, NPP) & Secondary Productivity',
            explanation: "• Ecosystem Categories: Terrestrial (forest, grassland, desert) and Aquatic (pond, lake, wetland, river, estuary); Man-made ecosystems = Crop fields and an Aquarium.\n• Stratification: Vertical distribution of different species occupying different levels (e.g., in a forest: trees occupy top vertical strata/canopy, shrubs the second, and herbs and grasses occupy the bottom layers).\n• Four functional components of an ecosystem: (i) Productivity, (ii) Decomposition, (iii) Energy flow, and (iv) Nutrient cycling.\n• Primary Productivity: Amount of biomass or organic matter produced per unit area over a time period by plants during photosynthesis. Expressed in terms of weight (g m⁻² yr⁻¹) or energy (kcal m⁻² yr⁻¹).\n  – Gross Primary Productivity (GPP): Rate of production of organic matter during photosynthesis.\n  – Net Primary Productivity (NPP): Available biomass for the consumption to heterotrophs (herbivores and decomposers).\n  – Formula: GPP − R = NPP (where R is respiratory losses of producers).\n• Secondary Productivity: Rate of formation of new organic matter by consumers.\n• Annual Net Primary Productivity of the whole biosphere is approximately 170 billion tons (dry weight) of organic matter.\n  – Despite occupying about 70% of the surface, the productivity of the oceans is only 55 billion tons (due to limiting light and nutrients like nitrogen in deep oceans); remaining 115 billion tons is on land.",
            questionFraming: "Most Repeated — 'Differentiate between Gross Primary Productivity (GPP) and Net Primary Productivity (NPP). Write the equation relating them.'\n'Why is the productivity of oceans only 55 billion tons despite occupying 70% of Earth's surface?'",
            textbookRef: "The annual net primary productivity of the whole biosphere is approximately 170 billion tons (dry weight) of organic matter, of which the oceans contribute only 55 billion tons.",
            keyFormulas: [
              "NPP = GPP − R (R = Respiration loss by plants)",
              "Units of Productivity: g m⁻² yr⁻¹ or kcal m⁻² yr⁻¹",
              "Biosphere NPP = 170 billion tons (Land = 115 billion tons | Oceans = 55 billion tons)"
            ],
            isImportant: true,
            examTag: 'Important Question'
          }
        ]
      },
      {
        id: 'bio-sub-12-2',
        title: '12.2 Decomposition: Steps & Factors Affecting Rate',
        ...imp('Important Question', '5 steps of decomposition (Fragmentation, Leaching, Catabolism, Humification, Mineralisation) & factors affecting rate (asked almost every year)'),
        sections: [
          {
            id: 'bio-sec-12-2',
            title: 'Detritus, Five Steps of Decomposition & Climatic/Chemical Factors',
            explanation: "• Detritus: Dead plant remains such as leaves, bark, flowers and dead remains of animals, including fecal matter, constitute detritus (raw material for decomposition). Earthworm is called the 'farmer's friend' because it helps in breakdown of complex organic matter and loosening of soil.\n• Five steps of Decomposition (Fragmentation, Leaching and Catabolism operate simultaneously on detritus):\n  1. Fragmentation: Detritivores (e.g., earthworm) break down detritus into smaller particles.\n  2. Leaching: Water-soluble inorganic nutrients go down into the soil horizon and get precipitated as unavailable salts.\n  3. Catabolism: Bacterial and fungal enzymes degrade detritus into simpler inorganic substances.\n  4. Humification: Accumulation of a dark coloured amorphous substance called humus, which is highly resistant to microbial action, undergoes decomposition at an extremely slow rate, and being colloidal in nature serves as a reservoir of nutrients.\n  5. Mineralisation: Humus is further degraded by some microbes to release inorganic nutrients.\n• Factors affecting rate of decomposition:\n  – Oxygen requirement: Decomposition is largely an oxygen-requiring (aerobic) process.\n  – Chemical composition of detritus: Slower if detritus is rich in lignin and chitin; quicker if detritus is rich in nitrogen and water-soluble substances like sugars.\n  – Climatic factors (Temperature & Soil Moisture): Warm and moist environment favours decomposition; low temperature and anaerobiosis inhibit decomposition.",
            questionFraming: "Most Repeated — 'Explain the five steps involved in the process of decomposition of detritus.'\n'How do chemical composition of detritus and climatic factors regulate the rate of decomposition?'\n'State two important properties of humus.'",
            textbookRef: "Fragmentation, leaching and catabolism in decomposition operate simultaneously on the detritus.",
            keyFormulas: [
              "Steps: Fragmentation → Leaching → Catabolism → Humification → Mineralisation",
              "Fast decomposition: Nitrogen + Sugars + Warm & Moist + Aerobic",
              "Slow decomposition: Lignin + Chitin + Cold & Anaerobic"
            ],
            isImportant: true,
            examTag: 'Important Question'
          }
        ]
      },
      {
        id: 'bio-sub-12-3',
        title: '12.3 Energy Flow: PAR, GFC vs DFC, Food Web & 10% Law',
        ...imp('Important Question', 'PAR percentages, Grazing vs Detritus Food Chain (GFC vs DFC), standing crop & Lindeman 10% Law (repeated 2M/3M)'),
        sections: [
          {
            id: 'bio-sec-12-3',
            title: 'PAR, Unidirectional Energy Flow, GFC vs DFC & Lindeman 10% Law',
            explanation: "• Photosynthetically Active Radiation (PAR): Of the incident solar radiation, less than 50% is PAR. Plants capture only 2–10% of the PAR (or 1–5% of total incident solar radiation), and this small amount sustains the entire living world.\n• Thermodynamics in Ecosystem: Ecosystems obey First Law (solar energy → chemical energy → heat) and Second Law of Thermodynamics (require a constant supply of energy to synthesise molecules and counteract universal tendency toward increasing disorderliness/entropy). Energy flow is strictly unidirectional (Sun → Producers → Consumers).\n• Grazing Food Chain (GFC): Begins with living green plants (producers).\n  – Example: Grass (Producer) → Goat (Primary Consumer) → Man (Secondary Consumer).\n  – In an aquatic ecosystem, GFC is the major conduit for energy flow.\n• Detritus Food Chain (DFC): Begins with dead organic matter (detritus); made up of decomposers (saprotrophs — heterotrophic fungi and bacteria).\n  – In a terrestrial ecosystem, a much larger fraction of energy flows through the DFC than through the GFC.\n  – DFC may be connected with GFC at some levels (some organisms of DFC are prey to GFC animals).\n• Trophic Level & Standing Crop: Each trophic level has a certain mass of living material at a particular time called the standing crop, measured as biomass (dry weight is more accurate than fresh weight) or number in a unit area.\n• 10% Law (Lindeman, 1942): Only 10% of the energy is transferred to each trophic level from the lower trophic level (90% is lost as heat/respiration), restricting the number of trophic levels in a grazing food chain to 3–4.",
            questionFraming: "Most Repeated — 'Compare Grazing Food Chain (GFC) and Detritus Food Chain (DFC). Which one is the major conduit of energy flow in (i) aquatic and (ii) terrestrial ecosystems?'\n'Why is measurement of biomass in terms of dry weight more accurate than fresh weight?'\n'State the 10% law of energy transfer. Why are grazing food chains generally limited to 3 or 4 trophic levels?'",
            textbookRef: "In an aquatic ecosystem, GFC is the major conduit for energy flow. As against this, in a terrestrial ecosystem, a much larger fraction of energy flows through the detritus food chain than through the GFC.",
            keyFormulas: [
              "PAR = <50% of incident solar radiation | Plants capture 2–10% of PAR",
              "Aquatic major conduit = GFC | Terrestrial major conduit = DFC",
              "10% Law: E_(n+1) = 0.10 × E_n (e.g., 1000 J → 100 J → 10 J → 1 J)"
            ],
            isImportant: true,
            examTag: 'Important Question'
          }
        ]
      },
      {
        id: 'bio-sub-12-4',
        title: '12.4 Ecological Pyramids',
        ...imp('Important Diagram', 'Upright vs Inverted Pyramids of Number and Biomass, always-upright Pyramid of Energy & limitations of ecological pyramids (guaranteed 3M/5M)'),
        sections: [
          {
            id: 'bio-sec-12-4',
            title: 'Pyramids of Number, Biomass & Energy (Upright vs Inverted) & Limitations',
            explanation: "• Ecological Pyramid: Graphical representation of the relationship between organisms at different trophic levels in terms of number, biomass or energy (base = producers/first trophic level; apex = top level consumer).\n• Pyramid of Numbers:\n  – Upright in most ecosystems (e.g., grassland ecosystem: Millions of grasses → Herbivores → Carnivores → Top carnivores).\n  – Inverted or Spindle-shaped on a single big tree: 1 large tree supports hundreds of herbivorous insects, which support still more hyperparasites (inverted), or fewer insectivorous birds (spindle-shaped).\n• Pyramid of Biomass:\n  – Upright in most terrestrial ecosystems (sharp decrease in biomass at higher trophic levels).\n  – Inverted in sea / aquatic ecosystem: Biomass of fishes (zooplankton/fishes) far exceeds that of phytoplankton at any given moment because phytoplankton have a very short lifespan and high turnover/reproduction rate.\n• Pyramid of Energy:\n  – Always upright, can never be inverted, because when energy flows from a particular trophic level to the next trophic level, some energy is always lost as heat at each step (follows 10% law).\n• Three Limitations of Ecological Pyramids:\n  1. Does not take into account the same species belonging to two or more trophic levels (e.g., a sparrow is a primary consumer when eating seeds/fruits, and a secondary consumer when eating insects/worms).\n  2. Assumes a simple food chain (something that almost never exists in nature) and does not accommodate a food web.\n  3. Saprophytes (decomposers) are not given any place in ecological pyramids even though they play a vital role in the ecosystem.",
            questionFraming: "Most Repeated — 'Why is the pyramid of biomass in a sea generally inverted whereas the pyramid of energy is always upright?'\n'State three limitations of ecological pyramids.'\n'Construct a pyramid of numbers for a single large tree supporting herbivorous insects and parasites.'",
            textbookRef: "Pyramid of energy is always upright, can never be inverted, because when energy flows from a particular trophic level to the next trophic level, some energy is always lost as heat at each step.",
            keyFormulas: [
              "Pyramid of Number: Upright (Grassland) | Inverted/Spindle (Single big tree)",
              "Pyramid of Biomass: Upright (Forest/Grassland) | Inverted (Sea: Phytoplankton < Zooplankton/Fishes)",
              "Pyramid of Energy: ALWAYS Upright (10% law; heat loss at each step)"
            ],
            isImportant: true,
            examTag: 'Important Diagram'
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CHAPTER 13: BIODIVERSITY AND CONSERVATION
  // ==========================================================================
  {
    id: 'bio-ch-13',
    number: 13,
    title: 'Biodiversity and Conservation',
    tag: 'Ecology',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'bio-sub-13-1',
        title: '13.1 Levels of Biodiversity & Global/Indian Species Estimates',
        ...imp('Important Diagram', 'Edward Wilson levels of biodiversity (Genetic, Species, Ecological), Robert May 7 million estimate & Pie charts of global biodiversity (frequent 2M/3M)'),
        sections: [
          {
            id: 'bio-sec-13-1',
            title: 'Genetic, Species & Ecological Diversity, Robert May Estimate & Pie Charts',
            explanation: "• Term 'Biodiversity' was popularised by sociobiologist Edward Wilson to describe combined diversity at all levels of biological organisation:\n  1. Genetic Diversity: Single species showing high diversity at the genetic level over its distributional range.\n     – Rauwolfia vomitoria growing in different Himalayan ranges shows variation in potency and concentration of active chemical reserpine.\n     – India has >50,000 genetically different strains of rice and 1,000 varieties of mango.\n  2. Species Diversity: Diversity at the species level (e.g., Western Ghats have a greater amphibian species diversity than the Eastern Ghats).\n  3. Ecological Diversity: Diversity at the ecosystem level (e.g., India with its deserts, rain forests, mangroves, coral reefs, wetlands, estuaries and alpine meadows has greater ecosystem diversity than a Scandinavian country like Norway).\n• Global & Indian Species Diversity:\n  – IUCN (2004): Slightly more than 1.5 million plant and animal species described so far.\n  – Robert May's conservative and scientifically sound estimate puts global species diversity at about 7 million.\n  – Animals (>70% of all recorded species) vs Plants (~22%). Among animals, Insects are the most species-rich taxonomic group, making up more than 70% of the total (out of every 10 animals on this planet, 7 are insects).\n  – Fungi species in the world are more than the combined total of the species of fishes, amphibians, reptiles and mammals.\n  – India's share: Only 2.4% of the world's land area, but impressive 8.1% of global species diversity (~45,000 plant species and ~90,000 animal species), making India one of the 12 mega diversity countries of the world.",
            questionFraming: "Most Repeated — 'Explain the three levels of biodiversity popularised by Edward Wilson with one Indian example for each.'\n'Why is India considered one of the 12 megadiversity countries of the world? Mention its percentage share of world land area and global species diversity.'\n'Identify the missing taxonomic groups in the NCERT pie-charts for invertebrates, vertebrates and plants.'",
            textbookRef: "Out of every 10 animals on this planet, 7 are insects. The number of fungi species in the world is more than the combined total of the species of fishes, amphibians, reptiles and mammals.",
            keyFormulas: [
              "Rauwolfia vomitoria (reserpine) + 50,000 rice strains + 1,000 mango varieties = Genetic diversity",
              "Western Ghats > Eastern Ghats (amphibians) = Species diversity",
              "Robert May global estimate = 7 million species | Described (IUCN 2004) = >1.5 million",
              "India = 2.4% world land area, 8.1% global species diversity"
            ],
            isImportant: true,
            examTag: 'Important Diagram'
          }
        ]
      },
      {
        id: 'bio-sub-13-2',
        title: '13.2 Patterns of Biodiversity: Latitudinal Gradients & Species-Area Relationship',
        ...imp('Important Diagram', 'Reasons for high tropical diversity & Alexander von Humboldt Species-Area curve (S = CA^Z, log S = log C + Z log A) with Z values (guaranteed 3M/5M)'),
        sections: [
          {
            id: 'bio-sec-13-2',
            title: 'Latitudinal Gradients, Tropical Richness & Humboldt Species-Area Relationship',
            explanation: "• Latitudinal Gradients: Species diversity decreases as we move away from the equator towards the poles. Tropics (latitudinal range 23.5° N to 23.5° S) harbour more species than temperate or polar areas.\n  – Examples: Colombia (near equator) has ~1,400 bird species; New York (41° N) has 105; Greenland (71° N) has only 56. India has >1,200 bird species.\n  – Amazonian rain forest in South America has the greatest biodiversity on Earth (>40,000 plant species, 3,000 fishes, 1,300 birds, 427 mammals, 427 amphibians, 378 reptiles, >1,25,000 invertebrates).\n• Three Hypotheses for High Tropical Biodiversity:\n  1. Evolutionary stability: Unlike temperate regions subjected to frequent glaciations in the past, tropical latitudes have remained relatively undisturbed for millions of years → long evolutionary time for species diversification.\n  2. Constant, predictable environment: Tropical environments are less seasonal, relatively more constant and predictable → promotes niche specialisation and greater species diversity.\n  3. High solar energy: More solar energy is available in the tropics → higher productivity → indirectly contributes to greater diversity.\n• Species-Area Relationship (Alexander von Humboldt, German naturalist & geographer):\n  – Within a region, species richness increases with increasing explored area, but only up to a limit.\n  – Rectangular hyperbola equation: S = C A^Z.\n  – Logarithmic linear equation: log S = log C + Z log A (where S = Species richness, A = Area, Z = slope of the line / regression coefficient, C = Y-intercept).\n  – Values of Z (regression coefficient):\n    • Normal small/regional areas: Z = 0.1 to 0.2 regardless of taxonomic group or region.\n    • Very large areas (entire continents): Slope is much steeper, Z = 0.6 to 1.2.\n    • Frugivorous (fruit-eating) birds and mammals in tropical forests of different continents: Z = 1.15.",
            questionFraming: "Most Repeated — 'Give three hypotheses to explain why tropics show the greatest levels of species richness.'\n'Plot the Species-Area relationship graph given by Alexander von Humboldt. Write both the rectangular hyperbola and logarithmic equations, and state the value of Z for (i) small regions, (ii) entire continents, and (iii) frugivorous birds in tropical forests.'",
            textbookRef: "For frugivorous (fruit-eating) birds and mammals in the tropical forests of different continents, the slope is found to be 1.15.",
            keyFormulas: [
              "Hyperbola: S = C A^Z  |  Linear (log scale): log S = log C + Z log A",
              "Z (normal area) = 0.1 to 0.2",
              "Z (entire continent) = 0.6 to 1.2 (steeper slope)",
              "Z (frugivorous birds & mammals in tropical forests) = 1.15"
            ],
            isImportant: true,
            examTag: 'Important Diagram'
          }
        ]
      },
      {
        id: 'bio-sub-13-3',
        title: '13.3 Importance of Species Diversity & Loss of Biodiversity (The Evil Quartet)',
        ...imp('Important Question', 'David Tilman outdoor plots, Paul Ehrlich Rivet Popper Hypothesis & The Evil Quartet with NCERT examples (asked almost every year)'),
        sections: [
          {
            id: 'bio-sec-13-3',
            title: 'Tilman Plots, Rivet Popper Hypothesis & The Evil Quartet of Extinction',
            explanation: "• Importance of Species Diversity to the Ecosystem:\n  – David Tilman's long-term ecosystem experiments using outdoor plots: Plots with more species showed less year-to-year variation in total biomass, and increased diversity contributed to higher productivity.\n  – Rivet Popper Hypothesis (Stanford ecologist Paul Ehrlich):\n    • Airplane = Ecosystem; Rivets = Species.\n    • Passengers popping rivets = Species extinction.\n    • Rivets on the wings = Key (keystone) species that drive major ecosystem functions (loss of wing rivets is a much more serious threat to flight safety than loss of rivets on seats or windows).\n• Recent Extinctions (IUCN Red List 2004 documents 784 species extinct in last 500 years): Dodo (Mauritius), Quagga (Africa), Thylacine (Australia), Steller's Sea Cow (Russia), and three subspecies (Bali, Javan, Caspian) of tiger. Current Sixth Mass Extinction is 100 to 1,000 times faster due to human activities.\n• Causes of Biodiversity Losses — 'The Evil Quartet':\n  1. Habitat loss and fragmentation (Most important cause): Tropical rain forests reduced from 14% to 6% of Earth's land surface. Amazon rain forest ('lungs of the planet') cleared for soya beans or grasslands for beef cattle. Fragmentation badly affects mammals and birds requiring large territories and migratory animals.\n  2. Over-exploitation (when 'need' turns to 'greed'): Extinction of Steller's sea cow and Passenger pigeon; overharvesting of marine fishes.\n  3. Alien species invasions:\n     – Nile perch introduced into Lake Victoria (East Africa) → extinction of >200 species of ecologically unique cichlid fish.\n     – Invasive weeds in India: Carrot grass (Parthenium), Lantana, and Water hyacinth (Eicchornia).\n     – African catfish (Clarias gariepinus) illegally introduced for aquaculture threatens indigenous catfishes in Indian rivers.\n  4. Co-extinctions: When a species becomes extinct, obligatory associated plant/animal species also become extinct (e.g., coevolved plant-pollinator mutualism, or host fish and its unique assemblage of parasites).",
            questionFraming: "Most Repeated — 'Explain Paul Ehrlich's Rivet Popper Hypothesis. What do the airplane, rivets, and wing rivets represent?'\n'Describe \"The Evil Quartet\" — the four major causes of biodiversity loss — giving one specific example for each.'\n'What were the two main conclusions of David Tilman's long-term outdoor plot experiments?'",
            textbookRef: "Habitat loss and fragmentation is the most important cause driving animals and plants to extinction.",
            keyFormulas: [
              "Rivet Popper (Paul Ehrlich): Airplane = Ecosystem | Rivets = Species | Wing rivets = Key species",
              "Evil Quartet: (1) Habitat loss & fragmentation (most important), (2) Over-exploitation, (3) Alien species invasion, (4) Co-extinction",
              "Nile perch in Lake Victoria → >200 cichlid fish species extinct",
              "Clarias gariepinus (African catfish) → threatens indigenous Indian catfishes"
            ],
            isImportant: true,
            examTag: 'Important Question'
          }
        ]
      },
      {
        id: 'bio-sub-13-4',
        title: '13.4 Biodiversity Conservation: Why & How to Conserve',
        ...imp('Important Question', 'Narrowly/Broadly utilitarian & Ethical arguments, In-situ (34 Hotspots, Sacred Groves) vs Ex-situ (Cryopreservation, Seed banks) & Earth Summit (guaranteed 3M/5M)'),
        sections: [
          {
            id: 'bio-sec-13-4',
            title: 'Why Conserve (3 Arguments) & How to Conserve (In-situ vs Ex-situ)',
            explanation: "• Why Should We Conserve Biodiversity? (Three Categories of Arguments):\n  1. Narrowly Utilitarian: Direct economic benefits from nature — food (cereals, pulses, fruits), firewood, fibre, construction material, industrial products (tannins, lubricants, dyes, resins, perfumes) and >25% of drugs currently sold in the market. ~25,000 plant species used in traditional medicines. Bioprospecting: exploring molecular, genetic and species-level diversity for products of economic importance.\n  2. Broadly Utilitarian: Ecosystem services provided by nature that cannot be easily price-tagged:\n     – Oxygen: Amazon forest produces 20% of the total oxygen in the Earth's atmosphere via photosynthesis.\n     – Pollination: By bees, bumblebees, birds and bats.\n     – Aesthetic pleasures: Walking through thick woods, watching spring flowers or waking up to a bulbul's song.\n  3. Ethical Argument: Every species has an intrinsic value, even if it is not of current economic value to us; we have a moral duty to care for their well-being and pass on our biological legacy in good order to future generations.\n• How Do We Conserve Biodiversity?\n  1. In-situ (on-site) Conservation — conserving the whole ecosystem to protect target species (e.g., save the entire forest to save the tiger):\n     – Biodiversity Hotspots (34 globally): Regions with very high levels of species richness and high degree of endemism (species confined to that region and not found anywhere else) + accelerated habitat loss. Cover <2% of Earth's land area; strict protection can reduce ongoing mass extinctions by almost 30%. Three hotspots covering India: Western Ghats and Sri Lanka, Indo-Burma, and Himalaya.\n     – Protected Areas in India: 14 Biosphere Reserves, 90 National Parks, and 448 Wildlife Sanctuaries.\n     – Sacred Groves: Tracts of forest set aside where all trees and wildlife within are venerated and given total protection (last refuges for rare/threatened plants) — Khasi and Jaintia Hills in Meghalaya, Aravalli Hills of Rajasthan, Western Ghat regions of Karnataka and Maharashtra, and Sarguja, Chanda and Bastar areas of Madhya Pradesh.\n  2. Ex-situ (off-site) Conservation — threatened animals and plants are taken out from their natural habitat and placed in special setting for protection and care:\n     – Zoological parks, Botanical gardens, Wildlife Safari parks.\n     – Advanced Ex-situ methods: Cryopreservation of gametes of threatened species in viable and fertile condition for long periods at −196 °C in liquid nitrogen; in vitro fertilisation of eggs; tissue culture propagation of plants; Seed banks to keep seeds of different genetic strains of commercially important plants.\n• International Conventions:\n  – The Earth Summit (Rio de Janeiro, 1992): Historic Convention on Biological Diversity.\n  – World Summit on Sustainable Development (Johannesburg, South Africa, 2002): 190 countries pledged to achieve a significant reduction in the current rate of biodiversity loss by 2010.",
            questionFraming: "Most Repeated — 'Categorise the reasons for conserving biodiversity into Narrowly Utilitarian, Broadly Utilitarian, and Ethical arguments with examples.'\n'Differentiate between in-situ and ex-situ conservation. What are the two criteria for determining a Biodiversity Hotspot? Name the three hotspots covering Indian biodiversity regions.'\n'What are Sacred Groves? Name any two regions in India where they are found.'",
            textbookRef: "Although all the biodiversity hotspots put together cover less than 2 percent of the earth's land area, strict protection of these hotspots could reduce the ongoing mass extinctions by almost 30 percent.",
            keyFormulas: [
              "34 Global Hotspots (<2% land area; prevents ~30% extinctions): High species richness + High endemism + Threat",
              "3 Indian Hotspots: (1) Western Ghats & Sri Lanka, (2) Indo-Burma, (3) Himalaya",
              "India In-situ: 14 Biosphere Reserves | 90 National Parks | 448 Wildlife Sanctuaries | Sacred Groves",
              "Ex-situ: Zoological/Botanical gardens, Wildlife Safari, Cryopreservation (−196 °C), Seed banks, Tissue culture",
              "Earth Summit = Rio de Janeiro (1992) | World Summit = Johannesburg (2002)"
            ],
            isImportant: true,
            examTag: 'Important Question'
          }
        ]
      }
    ]
  }
];
