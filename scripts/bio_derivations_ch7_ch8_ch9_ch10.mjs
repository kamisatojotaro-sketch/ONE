// Derivations, step-by-step mechanisms, drawing guides and refined theory for Chapters 7, 8, 9, 10 (Core Q31 - Q44)

export const CH7_CH8_CH9_CH10_ENHANCEMENTS = {
  "bio-core-31": {
    theory: [
      "• Innate Immunity: Non-specific defence mechanisms present from birth providing the first and second lines of physiological protection.",
      "• Four Defensive Barriers: Physical barriers (skin, mucus membranes), Physiological barriers (stomach acid, saliva, tears), Cellular barriers (PMNL-neutrophils, monocytes, macrophages), and Cytokine barriers (interferons).",
      "• Virus Defence: Virus-infected cells secrete Interferons (glycoproteins) that protect uninfected neighbour cells from viral infection."
    ],
    derivations: [
      {
        name: "Four Protective Barrier Lines of Innate Immunity",
        setup: "Constitutive non-specific antimicrobial defenses in humans.",
        steps: [
          { text: "1. Physical Barriers:", equation: "\\text{Skin (keratinized stratum corneum)} + \\text{Mucus coating of respiratory, GI, and urogenital tracts}" },
          { text: "2. Physiological Barriers:", equation: "\\text{Stomach } \\text{HCl (pH 1.5–2.0)} + \\text{Lysozyme in tears and saliva}" },
          { text: "3. Cellular Barriers:", equation: "\\text{Phagocytes: PMNL-neutrophils, Monocytes, Natural Killer (NK) lymphocytes, Macrophages}" },
          { text: "4. Cytokine Barriers:", equation: "\\text{Interferons (IFN)} \\implies \\text{Inhibit viral protein synthesis in adjacent healthy cells}" }
        ],
        finalFormula: "\\text{Physical} + \\text{Physiological} + \\text{Cellular} + \\text{Cytokine Barriers} \\implies \\text{Innate Protection}"
      }
    ]
  },

  "bio-core-32": {
    diagramId: "antibody-molecule",
    diagram: {
      hasDiagram: true,
      diagramId: "antibody-molecule",
      title: "Structure of an Antibody Molecule (H2L2)",
      examDrawingGuide: [
        "1. Draw a 'Y'-shaped immunoglobulin structure composed of four polypeptide chains: 2 long Heavy (H) chains and 2 short Light (L) chains.",
        "2. Connect the chains with interchain and intrachain Disulfide bonds (-S-S-).",
        "3. Label the N-terminal tips of both arms as Antigen-Binding Sites (Paratope / Variable regions V_H and V_L).",
        "4. Label the C-terminal stems as Constant regions (C_H and C_L) and write the formula H_2L_2."
      ]
    },
    theory: [
      "• Immunoglobulin Architecture: Glycoprotein molecule produced by B-lymphocyte plasma cells consisting of four polypeptide chains: two identical Heavy ($H$) chains and two identical Light ($L$) chains ($H_2L_2$).",
      "• Disulfide Bridges: Chains are interconnected by interchain and intrachain disulfide bonds ($-S-S-$).",
      "• Antigen-Binding Site: Variable regions ($V_H, V_L$) at the N-terminal ends of the two arms form two identical antigen-binding pockets (paratopes).",
      "• Five Immunoglobulin Classes: IgA (secretory in colostrum), IgD (B-cell receptor), IgE (allergies), IgG (most abundant, crosses placenta), IgM (pentamer, primary response)."
    ],
    derivations: [
      {
        name: "Polypeptide Architecture & Chemical Stoichiometry of Antibody (H2L2)",
        setup: "Serum immunoglobulin produced by plasma cells.",
        steps: [
          { text: "Subunit formula:", equation: "2 \\text{ Heavy Chains } (\\sim 50\\text{ kDa}) + 2 \\text{ Light Chains } (\\sim 25\\text{ kDa}) \\implies \\text{H}_2\\text{L}_2 \\; (\\sim 150\\text{ kDa})" },
          { text: "Antigen binding sites per monomer:", equation: "2 \\text{ Variable Antigen-Binding Sites (Bivalent paratope)}" },
          { text: "Structural stabilization:", equation: "\\text{Intrachain and interchain Disulfide bridges } (-\\text{S}-\\text{S}-)" }
        ],
        finalFormula: "\\text{Antibody Formula} = \\text{H}_2\\text{L}_2 \\; (\\text{Bivalent Y-shaped Immunoglobulin with Disulfide Bonds})"
      }
    ]
  },

  "bio-core-33": {
    theory: [
      "• Innate vs Acquired Immunity: Innate is non-specific, present from birth, and lacks memory; Acquired is pathogen-specific, characterised by immunological memory, mediated by B and T lymphocytes.",
      "• Primary vs Secondary Response: Primary response on first encounter is slow and of low intensity; Secondary (anamnestic) response upon re-exposure is rapid, heightened, and intense due to memory cells.",
      "• Active Immunity: Body's own immune system produces antibodies upon exposure to living/attenuated antigens; slow to develop, but long-lasting (e.g. natural infection, vaccines).",
      "• Passive Immunity: Pre-formed antibodies directly administered to the individual; provides instant protection, but short-lived with no memory (e.g. colostrum IgA, anti-tetanus serum, anti-venom)."
    ],
    derivations: [
      {
        name: "Comparative Framework: Active vs Passive & Primary vs Anamnestic Response",
        setup: "Immune kinetics and humoral memory dynamics.",
        steps: [
          { text: "Primary Immune Response:", equation: "\\text{First antigen encounter} \\implies \\text{Lag phase, low antibody titer (mostly IgM)}" },
          { text: "Secondary (Anamnestic) Response:", equation: "\\text{Second encounter} \\implies \\text{Rapid, heightened, sustained IgG secretion by memory cells}" },
          { text: "Active vs Passive Immunity:", equation: "\\text{Active: Host makes antibodies (long-lasting)} \\quad | \\quad \\text{Passive: Ready-made antibodies received (instant, temporary)}" }
        ],
        specialCases: [
          { title: "Colostrum & Placental Antibodies", text: "Colostrum contains yellowish milk with abundant secretory IgA protecting infants. Maternal IgG crosses placenta to fetus." }
        ],
        finalFormula: "\\text{Active = Host-derived + Memory} \\quad | \\quad \\text{Passive = Pre-formed + Instant + Zero Memory}"
      }
    ]
  },

  "bio-core-34": {
    theory: [
      "• Breakdown of Growth Regulation: Cancer arises when normal cells lose the property of Contact Inhibition (where cell-to-cell contact inhibits uncontrolled proliferation).",
      "• Tumour Classification: Benign tumours remain confined to original site and cause minimal damage; Malignant tumours proliferate rapidly, invade surrounding tissues, and destroy normal cells.",
      "• Metastasis: The most dreaded property of cancer cells where cells detach from malignant tumours, enter blood/lymph, and establish secondary tumours at distant body sites.",
      "• Carcinogens: Physical agents (X-rays, gamma-rays, UV rays), chemical agents (tobacco smoke), and oncogenic viruses convert normal cellular proto-oncogenes into active oncogenes."
    ],
    derivations: [
      {
        name: "Neoplastic Transformation & Metastatic Progression",
        setup: "Loss of cellular homeostasis and invasion cascade.",
        steps: [
          { text: "1. Loss of Contact Inhibition:", equation: "\\text{Uncontrolled mitotic proliferation} \\implies \\text{Mass of neoplastic cells (Tumour)}" },
          { text: "2. Proto-oncogene Mutation:", equation: "\\text{Proto-oncogenes} \\xrightarrow{\\text{Carcinogen}} \\text{Oncogenes (constitutive growth signaling)}" },
          { text: "3. Metastatic Dissemination:", equation: "\\text{Malignant cells detach} \\xrightarrow{\\text{Blood / Lymph}} \\text{Colonise distant organs (Metastasis)}" }
        ],
        finalFormula: "\\text{Hallmark 1: Loss of Contact Inhibition} \\quad | \\quad \\text{Hallmark 2: Metastasis (Distant Infiltration)}"
      }
    ]
  },

  "bio-core-35": {
    theory: [
      "• Microbe Involved: The bacterium Propionibacterium sharmanii.",
      "• Commercial Product: Swiss cheese, characterised by large holes and distinct flavour.",
      "• Mechanism of Hole Formation: During anaerobic fermentation, Propionibacterium sharmanii consumes lactic acid and produces large volumes of carbon dioxide ($CO_2$), propionic acid, and acetic acid.",
      "• Ripening Effect: Bubbles of released $CO_2$ gas become trapped within the curd matrix, creating the characteristic large round holes."
    ],
    derivations: [
      {
        name: "Propionic Fermentation Pathway in Swiss Cheese",
        setup: "Secondary fermentation of curd matrix during cheese ripening.",
        steps: [
          { text: "Bacterial inoculum:", equation: "\\text{Propionibacterium sharmanii}" },
          { text: "Fermentation reaction:", equation: "3 \\text{ Lactic Acid} \\xrightarrow{\\text{Fermentation}} 2 \\text{ Propionic Acid} + \\text{Acetic Acid} + \\text{CO}_2 \\uparrow" },
          { text: "Hole formation:", equation: "\\text{CO}_2 \\text{ gas trapped in curd matrix} \\implies \\text{Large round holes created}" }
        ],
        finalFormula: "\\text{Propionibacterium sharmanii} \\implies \\text{High CO}_2 \\text{ release} \\implies \\text{Large holes in Swiss Cheese}"
      }
    ]
  },

  "bio-core-36": {
    theory: [
      "• Cyclosporin A: Bioactive cyclic peptide produced by the fungus Trichoderma polysporum; acts as a potent immunosuppressive agent in organ transplant patients.",
      "• Statins: Secondary metabolite produced by the yeast Monascus purpureus; acts as a blood-cholesterol lowering agent.",
      "• Statin Mechanism: Statins act by competitively inhibiting the rate-limiting enzyme HMG-CoA reductase responsible for endogenous cholesterol synthesis in the liver.",
      "• Streptokinase: Produced by the bacterium Streptococcus and genetically modified; used as a 'clot buster' for removing thrombi in myocardial infarction."
    ],
    derivations: [
      {
        name: "Microbial Industrial Production & Pharmacological Mechanism",
        setup: "Fermentation bioprocesses of high-value medical bioactive agents.",
        steps: [
          { text: "Cyclosporin A (Immunosuppressant):", equation: "\\text{Fungus: } \\text{Trichoderma polysporum} \\implies \\text{Inhibits T-cell activation in organ transplants}" },
          { text: "Statins (Hypocholesterolemic):", equation: "\\text{Yeast: } \\text{Monascus purpureus} \\implies \\text{Competitive inhibitor of HMG-CoA reductase}" },
          { text: "Streptokinase (Thrombolytic):", equation: "\\text{Bacterium: } \\text{Streptococcus} \\implies \\text{Lyses fibrin clots in myocardial infarction}" }
        ],
        finalFormula: "\\text{Cyclosporin A (Trichoderma polysporum)} \\; | \\; \\text{Statins (Monascus purpureus: HMG-CoA inhibition)}"
      }
    ]
  },

  "bio-core-37": {
    theory: [
      "• Microbial Lipases: Extracted from Candida lipolytica and used in detergent formulations to remove oily and greasy stains from laundry.",
      "• Pectinases and Proteases: Used commercially to clarify bottled fruit juices, hydrolysing pectin and proteinaceous hazes to yield crystal-clear juice.",
      "• Streptokinase (Clot Buster): Modified enzyme produced by Streptococcus used to dissolve intravascular thrombi in heart attack patients."
    ],
    derivations: [
      {
        name: "Industrial Applications of Microbial Enzymes",
        setup: "Biotechnological use of microbial extracellular enzymes.",
        steps: [
          { text: "Lipases in Detergents:", equation: "\\text{Lipase hydrolyses ester bonds of lipids} \\implies \\text{Removal of oil and grease stains from clothes}" },
          { text: "Pectinases & Proteases in Juice Clarification:", equation: "\\text{Hydrolyses insoluble pectins & proteins} \\implies \\text{Clears turbidity of commercial fruit juices}" },
          { text: "Streptokinase in Myocardial Infarction:", equation: "\\text{Converts plasminogen to plasmin} \\implies \\text{Dissolves coronary blood clots}" }
        ],
        finalFormula: "\\text{Lipases (Detergents)} \\; | \\; \\text{Pectinases (Clarified Juice)} \\; | \\; \\text{Streptokinase (Clot Buster)}"
      }
    ]
  },

  "bio-core-38": {
    theory: [
      "• Sewage Composition: Domestic wastewater carrying human excreta, rich in organic matter and pathogenic microbes.",
      "• Primary Treatment (Physical): Removal of large and small particles through sequential filtration (floating debris) and sedimentation (grit, soil, pebbles), yielding Primary Sludge and Primary Effluent.",
      "• Secondary Treatment (Biological): Primary effluent agitated in large Aeration Tanks with aerobic microbes forming Flocs (bacterial mesh tied by fungal filaments), drastically reducing Biochemical Oxygen Demand (BOD).",
      "• Sludge Digestion & Biogas: Settled Activated Sludge pumped into Anaerobic Sludge Digesters where anaerobic methanogens produce inflammable Biogas ($CH_4 + CO_2 + H_2S$)."
    ],
    derivations: [
      {
        name: "Stage 1: Primary Treatment (Physical Separation)",
        setup: "Raw domestic sewage enters sewage treatment plant.",
        steps: [
          { text: "Sequential filtration:", equation: "\\text{Raw Sewage} \\xrightarrow{\\text{Wire mesh screens}} \\text{Removal of floating debris}" },
          { text: "Grit settling in sedimentation tank:", equation: "\\text{Settling} \\implies \\text{Primary Sludge (settled solids)} + \\text{Primary Effluent (supernatant)}" }
        ],
        finalFormula: "\\text{Primary Effluent passed to secondary treatment}"
      },
      {
        name: "Stage 2: Secondary / Biological Treatment (Aeration Tank & BOD Drop)",
        setup: "Aeration tank with continuous air pumping and mechanical agitation.",
        steps: [
          { text: "Growth of aerobic flocs:", equation: "\\text{Flocs} = \\text{Masses of bacteria associated with fungal filaments}" },
          { text: "Consumption of organic matter & BOD drop:", equation: "\\text{Flocs consume organic pollutants} \\implies \\text{Sharp decline in BOD (cleaner water)}" },
          { text: "Settling tank & activated sludge:", equation: "\\text{Treated effluent} \\to \\text{Settling tank} \\implies \\text{Flocs sediment as Activated Sludge}" }
        ],
        finalFormula: "\\text{BOD reduced by } >90\\% \\implies \\text{Treated water discharged into natural water bodies}"
      },
      {
        name: "Stage 3: Anaerobic Sludge Digester & Biogas Generation",
        setup: "Activated sludge pumped into closed anaerobic digesters.",
        steps: [
          { text: "Anaerobic bacterial digestion:", equation: "\\text{Activated Sludge} \\xrightarrow{\\text{Anaerobic Methanogens}} \\text{Digested Sludge}" },
          { text: "Biogas fuel mixture produced:", equation: "\\text{Biogas} = \\text{Methane } (\\text{CH}_4) + \\text{Carbon dioxide } (\\text{CO}_2) + \\text{Hydrogen sulfide } (\\text{H}_2\\text{S})" }
        ],
        finalFormula: "\\text{Biogas Output: } \\text{CH}_4 + \\text{CO}_2 + \\text{H}_2\\text{S} \\; (\\text{Clean Combustible Energy})"
      }
    ]
  },

  "bio-core-39": {
    theory: [
      "• Recombinant DNA Technology: The genetic engineering process of isolating a desired gene and splicing it into a cloning vector to transform a host for mass production.",
      "• Key Reagents: Restriction Endonucleases ('molecular scissors'), DNA Ligase ('molecular glue'), Cloning Vectors (plasmids, bacteriophages), and Competent Host cells.",
      "• Bioreactors & DSP: Large-scale culturing in stirred-tank bioreactors (100–1000 litres) followed by downstream processing (separation, purification, formulation, clinical trials)."
    ],
    derivations: [
      {
        name: "Complete 7-Step Sequential Workflow of rDNA Technology",
        setup: "Insertion of alien gene of interest into recipient organism.",
        steps: [
          { text: "1. Isolation of Genetic Material (DNA):", equation: "\\text{Cell lysis (Lysozyme/Cellulase)} \\to \\text{Deproteinization} \\to \\text{Chilled Ethanol Precipitation}" },
          { text: "2. Restriction Enzyme Digestion:", equation: "\\text{Cleavage of vector and donor DNA using the SAME restriction endonuclease}" },
          { text: "3. Agarose Gel Electrophoresis:", equation: "\\text{Separation and recovery of cut DNA fragment of interest}" },
          { text: "4. Gene Amplification by PCR:", equation: "\\text{Denaturation } (94^\\circ\\text{C}) \\to \\text{Annealing } (54^\\circ\\text{C}) \\to \\text{Extension } (72^\\circ\\text{C}, \\text{Taq Pol}) \\implies 10^9 \\times" },
          { text: "5. Ligation into Cloning Vector:", equation: "\\text{Cut Vector} + \\text{Alien DNA} \\xrightarrow{\\text{DNA Ligase}} \\text{Recombinant DNA (rDNA)}" },
          { text: "6. Insertion into Competent Host:", equation: "\\text{Transformation via } \\text{CaCl}_2 \\text{ + Heat Shock } (42^\\circ\\text{C})" },
          { text: "7. Culturing in Bioreactor & Downstream Processing:", equation: "\\text{Stirred-tank bioreactor} \\implies \\text{Separation, Purification & Preservation (DSP)}" }
        ],
        finalFormula: "\\text{Isolation} \\to \\text{Cutting} \\to \\text{PCR} \\to \\text{Ligation} \\to \\text{Transformation} \\to \\text{Bioreactor} \\to \\text{DSP}"
      }
    ]
  },

  "bio-core-40": {
    theory: [
      "• Cellular Barrier Lysis: Specific enzymes digest outer walls: Lysozyme for bacterial cells, Cellulase for plant cells, and Chitinase for fungal cells.",
      "• Deproteinisation & Nucleic Acid Purification: Ribonuclease (RNase) removes RNA, Proteases remove histone and non-histone proteins.",
      "• Chilled Ethanol Precipitation: Pure DNA is precipitated as fine white insoluble threads by adding ice-cold (chilled) ethanol.",
      "• Spooling: Collection of precipitated DNA threads by winding around a clean glass rod."
    ],
    derivations: [
      {
        name: "Enzymatic Extraction & Ethanol Spooling Protocol",
        setup: "Biochemical purification of macromolecular genomic DNA.",
        steps: [
          { text: "Step 1: Cell wall lysis:", equation: "\\text{Bacteria: Lysozyme} \\; | \\; \\text{Plants: Cellulase} \\; | \\; \\text{Fungi: Chitinase}" },
          { text: "Step 2: Removal of macromolecules:", equation: "\\text{RNA removed by RNase} \\; | \\; \\text{Proteins removed by Protease}" },
          { text: "Step 3: Precipitation & Spooling:", equation: "\\text{Add ice-cold ethanol} \\implies \\text{DNA threads precipitate, spooled onto glass rod}" }
        ],
        finalFormula: "\\text{Enzymatic Lysis} \\to \\text{Deproteinisation} \\to \\text{Chilled Ethanol Spooling} \\implies \\text{Purified DNA}"
      }
    ]
  },

  "bio-core-41": {
    theory: [
      "• Molecular Scissors: Restriction Endonucleases make cuts at specific locations within DNA (isolated first in 1963 in E. coli).",
      "• Palindromic Recognition Sequences: Specific recognition sequences where the nucleotide sequence reads identically on both strands in the $5'\\to 3'$ direction.",
      "• Staggered Cleavage & Sticky Ends: Cleaves both strands at points slightly away from the centre of symmetry, producing single-stranded overhangs called Sticky Ends.",
      "• Role of DNA Ligase: Complementary sticky ends generated by the same enzyme pair via hydrogen bonds, permanently sealed by DNA ligase."
    ],
    derivations: [
      {
        name: "Restriction Endonuclease EcoRI Cleavage Mechanism",
        setup: "Action of EcoRI isolated from Escherichia coli RY13.",
        steps: [
          { text: "Palindromic recognition sequence:", equation: "5'-\\text{G A A T T C}-3' \\quad \\text{and} \\quad 3'-\\text{C T T A A G}-5'" },
          { text: "Staggered cut location:", equation: "\\text{EcoRI cuts between G and A on both strands away from center}" },
          { text: "Sticky end formation:", equation: "5'-\\text{G} \\quad \\text{and} \\quad 5'-\\text{A A T T C}-3' \\; (\\text{Complementary single-stranded overhangs})" }
        ],
        specialCases: [
          { title: "Nomenclature Rules", text: "E = Escherichia (genus), co = coli (species), R = RY13 (strain), I = First endonuclease isolated from this strain." }
        ],
        finalFormula: "\\text{EcoRI cuts between G and A} \\implies \\text{Sticky Ends Annealed by DNA Ligase}"
      }
    ]
  },

  "bio-core-42": {
    theory: [
      "• Hydrophilic Barrier: DNA is a hydrophilic, negatively charged molecule that cannot naturally pass through lipid bilayer cell membranes; host cells must be made competent.",
      "• Chemical Divalent Cation Treatment: Incubation with ice-cold divalent cations like calcium ($Ca^{2+}$) increases membrane permeability through cell wall pores.",
      "• Heat Shock Method: Incubation of cells with recombinant DNA on ice $\\to$ brief heat shock at $42^\\circ\\text{C}$ for 42 seconds $\\to$ immediate return to ice.",
      "• Physical Gene Transfer: Micro-injection (direct injection into nucleus of animal cells); Biolistics / Gene Gun (gold or tungsten micro-particles coated with DNA bombarded into plant cells at high velocity)."
    ],
    derivations: [
      {
        name: "Chemical Competence & Physical Gene Delivery Methods",
        setup: "Transforming recombinant plasmids into recipient host cells.",
        steps: [
          { text: "Bacterial Competence (Chemical + Heat Shock):", equation: "\\text{Cold } \\text{CaCl}_2 \\to \\text{Ice incubation} \\to \\text{Heat Shock } (42^\\circ\\text{C}, 42\\text{ s}) \\to \\text{Ice}" },
          { text: "Animal Cells (Micro-injection):", equation: "\\text{Direct injection of rDNA into animal cell nucleus via glass micropipette}" },
          { text: "Plant Cells (Biolistics / Gene Gun):", equation: "\\text{Gold/Tungsten microprojectiles coated with DNA shot into plant tissue}" }
        ],
        finalFormula: "\\text{Bacteria: } \\text{CaCl}_2 \\text{ + Heat Shock} \\quad | \\quad \\text{Animals: Micro-injection} \\quad | \\quad \\text{Plants: Biolistics}"
      }
    ]
  },

  "bio-core-43": {
    theory: [
      "• Transgenic Animals: Animals whose genome has been genetically altered to carry and express an alien (foreign) gene.",
      "• Primary Objectives: (i) Study normal physiology and development, (ii) Study human diseases (cancer, cystic fibrosis, Alzheimer's), (iii) Produce biological products, (iv) Vaccine safety testing, (v) Chemical toxicity testing.",
      "• Rosie Cow (1997): First transgenic cow produced human protein-enriched milk containing 2.4 grams per litre of human alpha-lactalbumin, nutritionally superior to natural cow milk for human infants."
    ],
    derivations: [
      {
        name: "Five Key Applications & Case Study of Rosie Cow",
        setup: "Genetic modification of mammals for biomedical and therapeutic benefit.",
        steps: [
          { text: "1. Biological Products (Rosie Cow):", equation: "\\text{Human gene for } \\alpha\\text{-lactalbumin inserted} \\implies 2.4 \\text{ g/L humanized infant milk}" },
          { text: "2. Disease Models:", equation: "\\text{Transgenic mice models for Cancer, Cystic Fibrosis, Rheumatoid Arthritis, Alzheimer's}" },
          { text: "3. Vaccine Safety Testing:", equation: "\\text{Transgenic mice used to test safety of Polio vaccine before human trials}" }
        ],
        finalFormula: "\\text{Rosie Cow (1997)} \\implies 2.4 \\text{ g/L Human } \\alpha\\text{-lactalbumin Enriched Milk for Infants}"
      }
    ]
  },

  "bio-core-44": {
    theory: [
      "• Gene Therapy Definition: A collection of clinical methods that allows correction of a gene defect diagnosed in a child or embryo.",
      "• Target Disease: Adenosine Deaminase (ADA) deficiency, an autosomal recessive disorder causing Severe Combined Immunodeficiency (SCID) due to failure of purine metabolism.",
      "• Clinical Trial (1990): First clinical gene therapy performed on a 4-year-old girl with ADA deficiency using retroviral ex vivo transduction of patient lymphocytes.",
      "• Permanent Cure: Gene therapy introduced into bone marrow stem cells at early embryonic stages produces a permanent cure, unlike periodic lymphocyte infusions."
    ],
    derivations: [
      {
        name: "Stepwise Ex Vivo Retroviral Gene Therapy Protocol for ADA-SCID",
        setup: "Correction of adenosine deaminase deficiency using retroviral vector.",
        steps: [
          { text: "Step 1: Lymphocyte collection:", equation: "\\text{Lymphocytes extracted from peripheral blood of ADA-deficient patient}" },
          { text: "Step 2: Ex vivo culture:", equation: "\\text{Lymphocytes cultured in vitro in laboratory medium}" },
          { text: "Step 3: Functional cDNA introduction:", equation: "\\text{Functional ADA cDNA inserted into lymphocytes using a disabled Retroviral vector}" },
          { text: "Step 4: Re-infusion:", equation: "\\text{Genetically modified lymphocytes infused back into patient's circulation}" }
        ],
        specialCases: [
          { title: "Why is it not permanent?", text: "Lymphocytes are not immortal and die after a few weeks, requiring periodic repeated infusions. A permanent cure is achieved only if functional ADA gene is introduced into bone marrow cells during early embryonic development." }
        ],
        finalFormula: "\\text{Patient Lymphocytes} \\xrightarrow{\\text{Retroviral ADA cDNA}} \\text{Functional ADA Enzyme Synthesised}"
      }
    ]
  }
};
