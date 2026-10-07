// Derivations, step-by-step mechanisms, drawing guides and refined theory for Page Questions (Page Q1 - Q27)

export const PAGE_QUESTIONS_ENHANCEMENTS = {
  "bio-page-1": {
    diagramId: "embryo-sac",
    diagram: {
      hasDiagram: true,
      diagramId: "embryo-sac",
      title: "7-Celled, 8-Nucleate Mature Embryo Sac",
      examDrawingGuide: [
        "1. Draw oval female gametophyte showing Chalazal pole at top and Micropylar pole at bottom.",
        "2. At Chalazal end: Draw 3 Antipodal cells (n).",
        "3. In Center: Draw large Central cell with 2 Polar nuclei (n+n).",
        "4. At Micropylar end: Draw Egg apparatus consisting of 1 central Egg cell (n) and 2 flanking Synergids (n) with finger-like Filiform apparatus."
      ]
    },
    theory: [
      "• Monosporic Development: Typical embryo sac (Polygonum type) develops from the single functional chalazal megaspore through 3 consecutive mitotic nuclear divisions.",
      "• Nuclear vs Cellular Tally: Contains 8 nuclei that organize into 7 cells: 3 Antipodal cells (chalazal), 1 large Central cell with 2 polar nuclei, and 3-celled Egg apparatus (micropylar).",
      "• Egg Apparatus Composition: One central haploid egg cell and two flanking synergids bearing cellular filiform apparatus."
    ],
    derivations: [
      {
        name: "Monosporic Embryo Sac Nuclear Divisions & Cellularization",
        setup: "Successive free nuclear divisions of the functional megaspore.",
        steps: [
          { text: "Division 1 (Free nuclear mitosis):", equation: "1 \\text{ Megaspore Nucleus } (n) \\xrightarrow{} 2 \\text{ Nuclei (move to opposite poles)}" },
          { text: "Division 2:", equation: "2 \\text{ Nuclei } \\xrightarrow{} 4 \\text{ Nuclei (2 at each pole)}" },
          { text: "Division 3:", equation: "4 \\text{ Nuclei } \\xrightarrow{} 8 \\text{ Nuclei (4 at chalazal pole, 4 at micropylar pole)}" },
          { text: "Cellularization & spatial organization:", equation: "3 \\text{ Antipodals (Chalaza)} + 1 \\text{ Central Cell (2 Polar Nuclei)} + 3 \\text{ Egg Apparatus (Micropyle)}" }
        ],
        finalFormula: "7 \\text{ Cells and } 8 \\text{ Nuclei} \\; (\\text{Polygonum type monosporic female gametophyte})"
      }
    ]
  },

  "bio-page-2": {
    diagramId: "megasporangium",
    diagram: {
      hasDiagram: true,
      diagramId: "megasporangium",
      title: "Longitudinal Section of Anatropous Ovule",
      examDrawingGuide: [
        "1. Draw inverted ovule body attached to placenta by Funicle (stalk) and Hilum (junction).",
        "2. Draw outer and inner Integuments leaving an apical pore: Micropyle.",
        "3. Draw opposite basal region: Chalaza.",
        "4. Draw central nutritive parenchymatous Nucellus embedding the mature female gametophyte (embryo sac)."
      ]
    },
    theory: [
      "• Anatropous Architecture: Most common ovule type in angiosperms (>80%), where the ovule body is inverted by 180° such that the micropyle lies close to the funicle.",
      "• Integuments & Nucellus: Two protective envelopes (integuments) encircle the central parenchymatous nutritive tissue (nucellus), except at the micropylar aperture.",
      "• Hilum & Funicle: Funicle attaches the ovule to the placenta; Hilum is the anatomical scar where the funicle fuses with the body."
    ],
    derivations: [
      {
        name: "Anatomical Components of the Integumented Megasporangium",
        setup: "Longitudinal section of mature angiospermic ovule.",
        steps: [
          { text: "Stalk and junction:", equation: "\\text{Funicle (stalk)} + \\text{Hilum (fusion zone with ovule body)}" },
          { text: "Protective layers:", equation: "\\text{Outer and Inner Integuments enclose ovule body}" },
          { text: "Nutritive tissue and gametophyte:", equation: "\\text{Nucellus (abundant reserve food)} \\implies \\text{Embeds 7-celled Embryo Sac}" },
          { text: "Poles and orientation:", equation: "\\text{Micropyle (entry pore)} \\longleftrightarrow \\text{Chalaza (basal vegetative pole)}" }
        ],
        finalFormula: "\\text{Integumented Megasporangium} \\implies \\text{Develops into Seed after fertilisation}"
      }
    ]
  },

  "bio-page-3": {
    theory: [
      "• Syngamy: The fusion of one haploid male gamete ($n$) with the egg cell nucleus ($n$) producing a diploid zygote ($2n$), which develops into the embryo.",
      "• Triple Fusion: The fusion of the second haploid male gamete ($n$) with the two haploid polar nuclei ($n+n$) of the central cell, forming the triploid Primary Endosperm Nucleus ($PEN, 3n$).",
      "• Endosperm Precedence: Endosperm development always precedes embryo development to ensure a guaranteed nutritive tissue reserve for the dividing zygote."
    ],
    derivations: [
      {
        name: "Nuclear Arithmetic of Angiospermic Fertilisation",
        setup: "Double fertilisation events following siphonogamous pollen tube entry.",
        steps: [
          { text: "Syngamy fusion:", equation: "\\text{Male Gamete } (n) + \\text{Egg Cell } (n) \\xrightarrow{} \\text{Zygote } (2n) \\to \\text{Embryo}" },
          { text: "Triple Fusion:", equation: "\\text{Male Gamete } (n) + 2 \\text{ Polar Nuclei } (n+n) \\xrightarrow{} \\text{PEN } (3n) \\to \\text{Endosperm}" }
        ],
        finalFormula: "\\text{Double Fertilisation} = \\text{Syngamy (2n)} + \\text{Triple Fusion (3n)}"
      }
    ]
  },

  "bio-page-4": {
    theory: [
      "• Perisperm Definition: Persistent, residual, nutritive nucellar tissue retained in mature seeds after fertilisation.",
      "• Distinction from Endosperm: Endosperm is triploid ($3n$) formed by triple fusion; Perisperm is maternal diploid ($2n$) originating directly from the nucellus.",
      "• Classical Examples: Black pepper (Piper nigrum), Beetroot (Beta vulgaris), and Water lily (Nymphaea)."
    ],
    derivations: [
      {
        name: "Origin & Ploidy Comparison: Perisperm vs Endosperm",
        setup: "Embryonic reserve tissue analysis in angiosperms.",
        steps: [
          { text: "Perisperm origin & ploidy:", equation: "\\text{Residual Nucellus (Maternal tissue)} \\implies \\text{Diploid } (2n)" },
          { text: "Endosperm origin & ploidy:", equation: "\\text{Triple Fusion (PEN)} \\implies \\text{Triploid } (3n)" }
        ],
        finalFormula: "\\text{Perisperm} = \\text{Persistent Maternal Diploid Nucellus (e.g. Black Pepper, Beet)}"
      }
    ]
  },

  "bio-page-5": {
    diagramId: "pollen-grain",
    diagram: {
      hasDiagram: true,
      diagramId: "pollen-grain",
      title: "Microspore Maturation into Pollen Grain",
      examDrawingGuide: [
        "1. Draw microspore undergoing vacuolation and asymmetric mitotic spindle formation.",
        "2. Draw unequal division into a large Vegetative cell and small Generative cell.",
        "3. Show exine sculpturing and prominent germ pores.",
        "4. Label mature 2-celled pollen grain."
      ]
    },
    theory: [
      "• Microsporogenesis: Formation of haploid microspores from diploid pollen mother cells (PMC) via meiosis inside microsporangia.",
      "• Asymmetric Mitosis: Microspore undergoes unequal mitotic division, resulting in a large Vegetative cell with irregular nucleus and a small spindle-shaped Generative cell.",
      "• Cell Fates: Vegetative cell provides nutrients and forms pollen tube; Generative cell divides to yield two haploid male gametes."
    ],
    derivations: [
      {
        name: "Microspore Mitotic Cytokinesis & 2-Celled Transition",
        setup: "Maturation of unicellular microspore into male gametophyte.",
        steps: [
          { text: "1. Microspore enlargement & vacuolation:", equation: "\\text{Microspore grows, large central vacuole develops, nucleus shifts to periphery}" },
          { text: "2. Asymmetric spindle mitosis:", equation: "\\text{Unequal cytokinesis} \\implies \\text{Large Vegetative cell} + \\text{Small Generative cell}" },
          { text: "3. Wall development:", equation: "\\text{Deposition of sporopollenin exine & cellulose intine}" }
        ],
        finalFormula: "1 \\text{ Microspore (n)} \\xrightarrow{\\text{Asymmetric Mitosis}} \\text{2-Celled Pollen Grain (Vegetative + Generative)}"
      }
    ]
  },

  "bio-page-6": {
    theory: [
      "• Apocarpous Pistil: Gynoecium where carpels are completely free and separate from one another (e.g. Michelia, Lotus, Rose).",
      "• Syncarpous Pistil: Gynoecium where two or more carpels are fused together into a single compound pistil (e.g. Papaver, Hibiscus, Tomato).",
      "• Fruit Consequence: Apocarpous pistils form aggregated fruits (etaerio of achenes/drupes); Syncarpous pistils form simple fruits."
    ],
    derivations: [
      {
        name: "Morphological Framework: Apocarpous vs Syncarpous",
        setup: "Carpellary fusion states in angiosperm gynoecia.",
        steps: [
          { text: "Apocarpous (Free carpels):", equation: "\\text{Individual carpels separate} \\implies \\text{Michelia, Lotus, Rose}" },
          { text: "Syncarpous (Fused carpels):", equation: "\\text{Carpels united into compound pistil} \\implies \\text{Papaver, Hibiscus, Tomato}" }
        ],
        finalFormula: "\\text{Apocarpous = Free Carpels (Michelia)} \\quad | \\quad \\text{Syncarpous = Fused Carpels (Papaver)}"
      }
    ]
  },

  "bio-page-7": {
    diagramId: "blastocyst",
    diagram: {
      hasDiagram: true,
      diagramId: "blastocyst",
      title: "Blastocyst Architecture & Implantation",
      examDrawingGuide: [
        "1. Draw spherical blastocyst cross-section with outer single layer of flattened Trophoblast cells.",
        "2. Draw inner cluster of rounded cells at embryonic pole: Inner Cell Mass.",
        "3. Label large fluid-filled cavity: Blastocoel.",
        "4. Show Trophoblast developing chorionic villi for endometrial implantation."
      ]
    },
    theory: [
      "• Blastocyst (Blastodermic Vesicle): Human embryo at 64–128 cell stage, cavitated with an outer single layer (Trophoblast) and an Inner Cell Mass.",
      "• Trophoblast Function: Outer cellular envelope that secretes proteolytic enzymes, adheres to endometrium, forms chorionic villi, and gives rise to the placenta.",
      "• Inner Cell Mass (ICM): Pluripotent embryonic stem cells that differentiate into all three primary germ layers (ectoderm, mesoderm, endoderm) forming the embryo proper."
    ],
    derivations: [
      {
        name: "Cell Lineage Separation in the Human Blastocyst",
        setup: "First developmental cell fate determination in mammalian embryogenesis.",
        steps: [
          { text: "Trophoblast layer (Outer trophectoderm):", equation: "\\text{Flattened cells} \\implies \\text{Attaches to endometrium & forms fetal placenta}" },
          { text: "Inner Cell Mass (Embryoblast):", equation: "\\text{Cluster at embryonic pole} \\implies \\text{Forms embryo proper (Ectoderm, Mesoderm, Endoderm)}" },
          { text: "Central Blastocoel cavity:", equation: "\\text{Fluid-filled cavity facilitating cell migration and spatial patterning}" }
        ],
        finalFormula: "\\text{Trophoblast = Extra-embryonic Placenta} \\quad | \\quad \\text{Inner Cell Mass = Embryo Proper}"
      }
    ]
  },

  "bio-page-8": {
    diagramId: "monocot-embryo",
    diagram: {
      hasDiagram: true,
      diagramId: "monocot-embryo",
      title: "Longitudinal Section of Monocot Embryo (Grass)",
      examDrawingGuide: [
        "1. Draw single large shield-shaped cotyledon situated laterally: Scutellum.",
        "2. Draw embryonal axis showing shoot apex (plumule) enclosed in foliar sheath: Coleoptile.",
        "3. Draw root cap and radicle at lower end enclosed in undifferentiated sheath: Coleorhiza.",
        "4. Label epiblast (remnant of second cotyledon) opposite scutellum."
      ]
    },
    theory: [
      "• Coleoptile: Conical, protective foliar sheath enclosing the young shoot apex (plumule) and rudimentary leaves in monocot grass embryos.",
      "• Coleorhiza: Solid, undifferentiated protective parenchymatous sheath enclosing the radicle and root cap in monocot embryos.",
      "• Germination Behavior: Coleoptile pierces soil and turns green during germination; Coleorhiza remains non-green and is ruptured by emerging root."
    ],
    derivations: [
      {
        name: "Comparative Anatomy: Coleoptile vs Coleorhiza",
        setup: "Embryonal axis sheathing in monocotyledonous grasses (Poaceae).",
        steps: [
          { text: "Coleoptile (Epicotyl sheath):", equation: "\\text{Encloses Plumule} \\implies \\text{Foliar nature, pierces soil, photosynthesises}" },
          { text: "Coleorhiza (Hypocotyl sheath):", equation: "\\text{Encloses Radicle & Root Cap} \\implies \\text{Non-foliar, ruptured by primary root}" }
        ],
        finalFormula: "\\text{Coleoptile = Protects Plumule (Shoot)} \\quad | \\quad \\text{Coleorhiza = Protects Radicle (Root)}"
      }
    ]
  },

  "bio-page-9": {
    diagramId: "placenta-fetus",
    diagram: {
      hasDiagram: true,
      diagramId: "placenta-fetus",
      title: "Human Placenta & Fetal Circulation",
      examDrawingGuide: [
        "1. Draw uterine wall showing maternal tissue interdigitating with fetal chorionic villi.",
        "2. Draw Umbilical cord connecting fetus to placenta with umbilical arteries and vein.",
        "3. Draw Amniotic cavity filled with amniotic fluid enclosing the fetus.",
        "4. Label endocrine secretions: hCG, hPL, Estrogens, Progesterone, and Relaxin."
      ]
    },
    theory: [
      "• Structural Link: The placenta is an intimate vascular connection formed by the interdigitation of fetal Chorionic Villi with maternal Uterine Endometrium.",
      "• Physiological Exchange: Facilitates delivery of oxygen and nutrients from maternal blood to fetus, and removal of fetal carbon dioxide and nitrogenous wastes.",
      "• Endocrine Secretions: Secretes hCG (human chorionic gonadotropin), hPL (human placental lactogen), estrogens, and progesterone; ovary secretes Relaxin in later pregnancy.",
      "• Pregnancy Markers: hCG, hPL, and relaxin are produced exclusively during pregnancy (hCG serves as basis for urine pregnancy tests)."
    ],
    derivations: [
      {
        name: "Dual Physiological & Endocrine Functions of Placenta",
        setup: "Maternal-fetal feto-placental circulation and hormonal balance.",
        steps: [
          { text: "Physiological exchange (via umbilical cord):", equation: "\\text{Mother to fetus: } \\text{O}_2, \\text{ Glucose, Amino acids} \\quad | \\quad \\text{Fetus to mother: } \\text{CO}_2, \\text{ Urea}" },
          { text: "Exclusive pregnancy hormones:", equation: "\\text{hCG (maintains corpus luteum)} + \\text{hPL (maternal lactation priming)} + \\text{Relaxin (pubic symphysis softening)}" },
          { text: "Steroid hormones maintaining pregnancy:", equation: "\\text{High Progesterone} + \\text{High Estrogens} \\implies \\text{Suppresses uterine contractions}" }
        ],
        finalFormula: "\\text{Placenta} = \\text{Transport Conduit} + \\text{Endocrine Organ (hCG, hPL, Progesterone)}"
      }
    ]
  },

  "bio-page-10": {
    theory: [
      "• Principle: Pre-natal diagnostic technique where a small amount of amniotic fluid containing fetal desquamated cells is aspirated trans-abdominally under ultrasound guidance.",
      "• Legitimate Medical Purpose: Detection of fetal chromosomal aneuploidies (Down's syndrome, Turner's, Klinefelter's), inborn errors of metabolism, and neural tube defects (alpha-fetoprotein).",
      "• Misuse & Statutory Ban: Illegally misused for pre-natal fetal sex determination followed by female foeticide, leading to a strict statutory ban under the PC-PNDT Act in India."
    ],
    derivations: [
      {
        name: "Diagnostic Protocol & Statutory Ban Framework of Amniocentesis",
        setup: "Clinical karyotyping of desquamated fetal amniocytes.",
        steps: [
          { text: "Aspiration procedure (15–18 weeks):", equation: "\\text{Ultrasound-guided transabdominal needle} \\implies \\text{10–20 mL Amniotic fluid drawn}" },
          { text: "Karyotype analysis:", equation: "\\text{Fetal cells cultured} \\implies \\text{Screened for Trisomy 21 (Down's), XXY, XO}" },
          { text: "Illegal sex determination & ban:", equation: "\\text{Barr body / Y-chromosome detection} \\xrightarrow{\\text{Abuse}} \\text{Female foeticide} \\implies \\text{Banned under PC-PNDT Act}" }
        ],
        finalFormula: "\\text{Amniocentesis} \\implies \\text{Legitimate for Genetic Defects} \\; | \\; \\text{Statutory Ban on Sex Determination}"
      }
    ]
  },

  "bio-page-11": {
    theory: [
      "• Monohybrid Cross: Tracks inheritance of a single character pair (e.g. Stem height: Tall TT $\\times$ Dwarf tt). F₁ is heterozygous tall (Tt); F₂ produces phenotypic ratio 3:1 and genotypic ratio 1:2:1.",
      "• Dihybrid Cross: Simultaneously tracks inheritance of two independent character pairs (e.g. Seed shape and color: Round Yellow RRYY $\\times$ Wrinkled Green rryy).",
      "• Dihybrid Phenotypic Ratio: F₂ generation yields 4 phenotypic classes in the classic Mendelian ratio 9:3:3:1 (Round-Yellow 9, Round-Green 3, Wrinkled-Yellow 3, Wrinkled-Green 1)."
    ],
    derivations: [
      {
        name: "Monohybrid Cross (Height: TT x tt) Punnett Grid",
        setup: "Single locus cross in Pisum sativum.",
        steps: [
          { text: "F₁ generation cross:", equation: "TT \\times tt \\implies \\text{F}_1: Tt \\; (100\\% \\text{ Tall})" },
          { text: "F₂ generation 4-box Punnett square:", equation: "1 \\; TT \\; (\\text{Tall}) : 2 \\; Tt \\; (\\text{Tall}) : 1 \\; tt \\; (\\text{Dwarf})" }
        ],
        finalFormula: "\\text{Monohybrid F}_2 \\text{ Phenotypic Ratio} = 3 : 1 \\quad | \\quad \\text{Genotypic Ratio} = 1 : 2 : 1"
      },
      {
        name: "Dihybrid Cross (Shape & Color: RRYY x rryy) 16-Box Grid",
        setup: "Two unlinked loci cross in Pisum sativum.",
        steps: [
          { text: "F₁ generation:", equation: "RRYY \\times rryy \\implies \\text{F}_1: RrYy \\; (\\text{All Round Yellow})" },
          { text: "F₁ gametes produced:", equation: "RY, \\; Ry, \\; rY, \\; ry \\; (25\\% \\text{ each})" },
          { text: "F₂ 16-box progeny distribution:", equation: "9 \\text{ Round-Yellow} : 3 \\text{ Round-Green} : 3 \\text{ Wrinkled-Yellow} : 1 \\text{ Wrinkled-Green}" }
        ],
        finalFormula: "\\text{Dihybrid F}_2 \\text{ Phenotypic Ratio} = 9 : 3 : 3 : 1"
      }
    ]
  },

  "bio-page-12": {
    theory: [
      "• Female Heterogamety: In birds, females produce two morphologically distinct types of gametes (heterogametic), while males produce identical gametes (homogametic).",
      "• Male Karyotype: Homogametic male has two identical sex chromosomes: ZZ.",
      "• Female Karyotype: Heterogametic female has two different sex chromosomes: ZW.",
      "• Sex Determination: Sex of the offspring is determined exclusively by the ovum: egg carrying Z yields male (ZZ); egg carrying W yields female (ZW)."
    ],
    derivations: [
      {
        name: "ZZ-ZW Sex Determination Scheme in Birds",
        setup: "Chromosomal inheritance in Gallus domesticus (fowl).",
        steps: [
          { text: "Parental genotypes:", equation: "\\text{Male: } ZZ \\; (\\text{Homogametic}) \\quad \\times \\quad \\text{Female: } ZW \\; (\\text{Heterogametic})" },
          { text: "Gametes produced:", equation: "\\text{Male produces all } Z \\text{ sperms} \\quad | \\quad \\text{Female produces } 50\\% \\; Z \\text{ and } 50\\% \\; W \\text{ eggs}" },
          { text: "Fertilisation progeny:", equation: "ZZ \\; (\\text{Male, } 50\\%) \\quad | \\quad ZW \\; (\\text{Female, } 50\\%)" }
        ],
        finalFormula: "\\text{Male} = ZZ \\quad | \\quad \\text{Female} = ZW \\implies \\text{Female Heterogamety decides sex}"
      }
    ]
  },

  "bio-page-13": {
    theory: [
      "• Aneuploidy: Loss or gain of one or a few individual chromosomes due to failure of sister chromatid segregation (non-disjunction) during cell division (e.g. $2n-1, 2n+1$).",
      "• Polyploidy: Increase in one or more whole sets of chromosomes due to failure of cytokinesis after telophase ($3n, 4n, 6n$).",
      "• Organismal Occurrence: Aneuploidy is commonly seen in human syndromes (Down's, Turner's, Klinefelter's); Polyploidy is lethal in higher animals but widespread and beneficial in flowering plants (wheat, cotton, sugarcane)."
    ],
    derivations: [
      {
        name: "Mechanistic Contrast: Non-Disjunction vs Cytokinesis Failure",
        setup: "Meiotic and mitotic chromosomal aberrations.",
        steps: [
          { text: "Aneuploidy cause:", equation: "\\text{Non-disjunction of chromatids} \\implies 2n + 1 \\text{ (Trisomy)} \\; \\text{or} \\; 2n - 1 \\text{ (Monosomy)}" },
          { text: "Polyploidy cause:", equation: "\\text{Failure of cytokinesis after telophase} \\implies 3n \\text{ (Triploid)}, \\; 4n \\text{ (Tetraploid)}" }
        ],
        finalFormula: "\\text{Aneuploidy = Altered chromosome count (e.g. Down's)} \\quad | \\quad \\text{Polyploidy = Whole set increase (Plants)}"
      }
    ]
  },

  "bio-page-14": {
    theory: [
      "• 2'-OH Group Reactivity: RNA contains a reactive 2'-OH hydroxyl group on every ribose sugar, making it chemically labile, reactive, and easily degradable.",
      "• Thymine vs Uracil: DNA contains Thymine (5-methyluracil), conferring greater biochemical and photochemical stability compared to Uracil in RNA.",
      "• Double-Stranded Complementarity: Complementary double-stranded configuration of DNA resists chemical denaturation and facilitates repair mechanisms.",
      "• Evolutionary Transition: RNA was the first genetic material (catalytic), but DNA evolved chemically from RNA for superior long-term storage of genetic information."
    ],
    derivations: [
      {
        name: "Biochemical Basis of DNA Stability over RNA",
        setup: "Thermodynamic and enzymatic stability of polynucleotides.",
        steps: [
          { text: "1. Sugar modification:", equation: "\\text{DNA: 2'-deoxyribose (lacks reactive 2'-OH)} \\implies \\text{Resistant to alkali hydrolysis}" },
          { text: "2. Pyrimidine methylation:", equation: "\\text{Thymine (5-methyluracil)} \\implies \\text{Protected against spontaneous deamination}" },
          { text: "3. Structural helical stacking:", equation: "\\text{Double helix base pairing} \\implies \\text{Exonuclease resistance and proofreading}" }
        ],
        finalFormula: "\\text{DNA = Chemically Less Reactive & Structurally More Stable} \\implies \\text{Ideal Genetic Repository}"
      }
    ]
  },

  "bio-page-15": {
    theory: [
      "• Single RNA Polymerase: In prokaryotes, a single DNA-dependent RNA polymerase catalyses transcription of all three RNA types (mRNA, tRNA, rRNA).",
      "• Three Sequential Steps: Initiation, Elongation, and Termination.",
      "• Sigma Factor ($\\sigma$): Core enzyme associates transiently with initiation factor sigma ($\\sigma$) to recognise and bind the promoter.",
      "• Rho Factor ($\\rho$): Core enzyme associates with termination factor rho ($\\rho$) to terminate transcription and release nascent RNA.",
      "• Coupled Transcription-Translation: In bacteria, translation can begin before mRNA is fully transcribed due to absence of a nuclear membrane."
    ],
    derivations: [
      {
        name: "Three-Stage Mechanism of Prokaryotic Transcription",
        setup: "Transcription by RNA Polymerase holoenzyme in E. coli.",
        steps: [
          { text: "1. Initiation:", equation: "\\text{Core Polymerase} + \\sigma\\text{-factor} \\implies \\text{Binds Promoter region, unwinds DNA}" },
          { text: "2. Elongation:", equation: "\\text{Core Polymerase synthesises RNA in } 5' \\to 3' \\text{ direction using ribonucleotides}" },
          { text: "3. Termination:", equation: "\\text{Core Polymerase} + \\rho\\text{-factor} \\implies \\text{Releases nascent RNA at Terminator site}" }
        ],
        finalFormula: "\\text{Initiation (}\\sigma\\text{)} \\longrightarrow \\text{Elongation (Core)} \\longrightarrow \\text{Termination (}\\rho\\text{)}"
      }
    ]
  },

  "bio-page-16": {
    theory: [
      "• Genome Size: Human genome contains $3164.7 \\times 10^6$ (3.164 billion) nucleotide base pairs.",
      "• Gene Number: Total number of genes is estimated at roughly 30,000 (much lower than earlier estimates of 80,000–140,000).",
      "• Average Gene Size: An average gene consists of 3,000 bases; largest human gene is Dystrophin with 2.4 million bases.",
      "• Non-coding DNA: Less than 2% of the genome codes for proteins; repetitive sequences constitute vast portion.",
      "• Chromosome Extremes: Chromosome 1 has the most genes (2,968) and the Y chromosome has the fewest (231).",
      "• SNPs: Scientists identified about 1.4 million locations with single nucleotide polymorphisms (SNPs) across human DNA."
    ],
    derivations: [
      {
        name: "Key Numerical Benchmarks of the Human Genome Project",
        setup: "Genomic metrics sequenced by international consortium (1990–2003).",
        steps: [
          { text: "Total genome base pairs:", equation: "3.164 \\times 10^9 \\text{ bp (3.164 billion base pairs)}" },
          { text: "Total protein-coding genes:", equation: "\\sim 30,000 \\text{ genes (only } <2\\% \\text{ genome is coding)}" },
          { text: "Extreme gene sizes:", equation: "\\text{Average} = 3000 \\text{ bp} \\quad | \\quad \\text{Largest: Dystrophin} = 2.4 \\times 10^6 \\text{ bp}" },
          { text: "Single Nucleotide Polymorphisms (SNPs):", equation: "1.4 \\text{ million locations across human genome}" }
        ],
        finalFormula: "3.164 \\text{ Billion bp} \\; | \\; 30,000 \\text{ Genes} \\; | \\; <2\\% \\text{ Coding} \\; | \\; \\text{Chr 1: 2968 genes, Y: 231 genes}"
      }
    ]
  },

  "bio-page-17": {
    diagramId: "miller-urey",
    diagram: {
      hasDiagram: true,
      diagramId: "miller-urey",
      title: "Miller-Urey Spark Discharge Experiment (1953)",
      examDrawingGuide: [
        "1. Draw closed 5-liter glass reaction flask containing tungsten electrodes.",
        "2. Label gases: Methane (CH4), Ammonia (NH3), Hydrogen (H2), and water vapour in ratio 2:1:2 at 800°C.",
        "3. Draw electric spark discharge simulating primitive lightning.",
        "4. Draw boiling flask generating steam, condenser cooling reaction mixture, and U-tube trap collecting condensed amino acids."
      ]
    },
    theory: [
      "• Objective: Experimental verification of the Oparin-Haldane hypothesis of chemical evolution (abiogenesis from inorganic precursors).",
      "• Experimental Setup (1953): Stanley Miller and Harold Urey created primitive reducing atmospheric conditions in a closed glass apparatus.",
      "• Reaction Conditions: Mixture of $CH_4, NH_3, H_2,$ and water vapour at $800^\\circ\\text{C}$ with continuous electric spark discharge from tungsten electrodes for one week.",
      "• Chemical Yield: Condenser collected liquid sample revealing formation of simple Amino Acids (Glycine, Alanine, Aspartic acid)."
    ],
    derivations: [
      {
        name: "Chemical Evolution Reaction Protocol in Miller's Apparatus",
        setup: "Simulation of prebiotic Earth's reducing atmosphere.",
        steps: [
          { text: "Gas ratio in reaction flask:", equation: "\\text{CH}_4 : \\text{NH}_3 : \\text{H}_2 = 2 : 1 : 2 + \\text{Water vapour}" },
          { text: "Energy input:", equation: "\\text{Continuous electric spark discharge at } 800^\\circ\\text{C} \\text{ for 7 days}" },
          { text: "Organic products synthesized:", equation: "\\text{Glycine} + \\text{Alanine} + \\text{Aspartic acid} + \\text{Purines, Sugars}" }
        ],
        finalFormula: "\\text{Inorganic Gases } (\\text{CH}_4, \\text{NH}_3, \\text{H}_2, \\text{H}_2\\text{O}) \\xrightarrow{800^\\circ\\text{C Spark}} \\text{Amino Acids (Abiogenesis Validated)}"
      }
    ]
  },

  "bio-page-18": {
    diagramId: "hardy-weinberg-selection",
    diagram: {
      hasDiagram: true,
      diagramId: "hardy-weinberg-selection",
      title: "Natural Selection Dynamics on Phenotypic Traits",
      examDrawingGuide: [
        "1. Draw original normal bell-shaped phenotypic distribution curve with mean phenotype in center.",
        "2. Stabilizing Selection: Show peak becoming higher and narrower (favors average intermediate phenotype).",
        "3. Directional Selection: Show peak shifting toward one extreme (favors one directional extreme).",
        "4. Disruptive Selection: Show two distinct peaks formed at both extremes with a valley in center (favors both extremes over intermediate)."
      ]
    },
    theory: [
      "• Equilibrium Principle: In a large, random-mating, diploid population, allele frequencies remain constant and stable from generation to generation in absence of evolutionary forces.",
      "• Binomial Expansion: Represented algebraically as: $p^2 + 2pq + q^2 = 1$, where $p$ and $q$ represent frequencies of dominant ($A$) and recessive ($a$) alleles.",
      "• Five Disruptive Factors: Gene migration/gene flow, Genetic drift (Sewall Wright effect), Mutation, Genetic recombination, and Natural selection.",
      "• Selection Trajectories: Stabilizing selection (favors mean phenotype), Directional selection (shifts peak toward one extreme), Disruptive selection (produces two distinct peaks at both extremes)."
    ],
    derivations: [
      {
        name: "Algebraic Formulation & Five Disruptive Evolutionary Factors",
        setup: "Population genetics equilibrium equation for biallelic locus.",
        steps: [
          { text: "Allele frequency equation:", equation: "p + q = 1 \\quad (p = \\text{freq of } A, \\; q = \\text{freq of } a)" },
          { text: "Genotype frequencies in diploid population:", equation: "(p + q)^2 = p^2 + 2pq + q^2 = 1 \\quad (p^2 = AA, \\; 2pq = Aa, \\; q^2 = aa)" },
          { text: "5 Disruptive Factors causing Evolutionary Shift:", equation: "\\text{1. Gene Flow} \\; | \\; \\text{2. Genetic Drift} \\; | \\; \\text{3. Mutation} \\; | \\; \\text{4. Recombination} \\; | \\; \\text{5. Natural Selection}" }
        ],
        specialCases: [
          { title: "Founder Effect & Bottleneck", text: "When a small colonizing group separates from a larger population, random genetic drift alters allele frequencies dramatically, establishing a founder population." }
        ],
        finalFormula: "p^2 + 2pq + q^2 = 1 \\implies \\text{Deviation from 1.0 confirms Evolutionary Change}"
      }
    ]
  },

  "bio-page-19": {
    theory: [
      "• Adaptive Radiation Definition: The evolutionary process of an ancestral stock radiating into diverse ecological niches, giving rise to morphologically varied new species.",
      "• Darwin's Finches: Darwin observed varied finch beaks radiating from an ancestral seed-eating stock in the Galápagos Islands into insectivorous, vegetarian, and cactus-feeding beaks.",
      "• Australian Marsupials: A variety of marsupials (Tasmanian wolf, sugar glider, wombat, bandicoot) evolved from a single ancestral marsupial within the isolated Australian continent.",
      "• Convergent Evolution: When more than one adaptive radiation occurs in an isolated geographical area representing different habitats, it results in convergent evolution (e.g. Placental mammals vs Australian marsupials)."
    ],
    derivations: [
      {
        name: "Ecological Divergence & Convergent Radiation Parallelism",
        setup: "Adaptive radiation from single common ancestral stem.",
        steps: [
          { text: "Darwin's Finches (Galápagos):", equation: "\\text{Ancestral seed-eating finch} \\implies \\text{Beak adaptations: Insectivorous, Woodpecker, Vegetarian, Cactus}" },
          { text: "Australian Marsupials:", equation: "\\text{Ancestral marsupial} \\implies \\text{Kangaroo, Koala, Wombat, Tasmanian Wolf}" },
          { text: "Placental vs Marsupial Convergent Counterparts:", equation: "\\text{Anteater} \\longleftrightarrow \\text{Numbat} \\; | \\; \\text{Flying squirrel} \\longleftrightarrow \\text{Sugar glider} \\; | \\; \\text{Wolf} \\longleftrightarrow \\text{Tasmanian wolf}" }
        ],
        finalFormula: "\\text{Common Ancestral Stock} \\xrightarrow{\\text{Niche Exploitation}} \\text{Diverse Species (Adaptive Radiation)}"
      }
    ]
  },

  "bio-page-20": {
    theory: [
      "• Allergy Definition: An exaggerated, hypersensitive immune response to environmental antigens (allergens).",
      "• Antibody Involved: Characterised by elevated production of Immunoglobulin E (IgE) antibodies.",
      "• Chemical Mediators: IgE binds to mast cells; allergen re-exposure causes degranulation and release of Histamine and Serotonin.",
      "• Clinical Symptoms: Sneezing, watery eyes, running nose, difficulty in breathing (bronchospasm), urticaria, and skin rashes.",
      "• Therapeutic Treatment: Rapidly alleviated by administration of anti-histamines, adrenaline, and corticosteroids."
    ],
    derivations: [
      {
        name: "Immunological Cascade of Type-I Hypersensitivity (Allergy)",
        setup: "Degranulation of mast cells upon allergen cross-linking.",
        steps: [
          { text: "Sensitisation phase:", equation: "\\text{Allergen (Pollen/Dust)} \\implies \\text{Plasma cells secrete high levels of IgE}" },
          { text: "Mast cell priming:", equation: "\\text{IgE binds Fc receptors on tissue Mast cells}" },
          { text: "Allergen challenge & degranulation:", equation: "\\text{Allergen cross-links IgE} \\implies \\text{Degranulation releasing Histamine & Serotonin}" },
          { text: "Pharmacotherapy:", equation: "\\text{Anti-histamines} + \\text{Adrenaline} + \\text{Corticosteroids} \\implies \\text{Symptom relief}" }
        ],
        finalFormula: "\\text{Allergen} + \\text{IgE on Mast Cells} \\implies \\text{Histamine Release} \\implies \\text{Allergic Symptoms}"
      }
    ]
  },

  "bio-page-21": {
    diagramId: "hiv-lifecycle",
    diagram: {
      hasDiagram: true,
      diagramId: "hiv-lifecycle",
      title: "Replication Cycle of Retrovirus (HIV) in Human Host Cells",
      examDrawingGuide: [
        "1. Draw HIV virus with glycoprotein coat and ssRNA entering animal cell.",
        "2. Show Reverse Transcriptase converting viral ssRNA into viral dsDNA.",
        "3. Show viral dsDNA integrating into host genome (catalysed by Integrase) inside nucleus.",
        "4. Show host cell transcribing viral DNA into new viral RNA and proteins, assembling virions, and budding out (Macrophage as HIV factory).",
        "5. Show subsequent infection and lysis of Helper T-lymphocytes (CD4+ count drop)."
      ]
    },
    theory: [
      "• Retrovirus Etiology: Human Immunodeficiency Virus (HIV) possesses an enveloped single-stranded RNA genome and the enzyme Reverse Transcriptase.",
      "• Macrophage as HIV Factory: HIV enters macrophages; viral RNA is reverse transcribed into DNA and integrated into host genome, continuously producing new viral progeny while the macrophage survives.",
      "• Helper T-Cell Destruction: Progeny virions attack Helper T-lymphocytes ($T_H$, CD4+), replicating and lysing them, causing progressive progressive decline in $T_H$ cell count.",
      "• Immunodeficiency & Opportunistic Infections: When $T_H$ count drops severely ($<200/\\mu L$), patient succumbs to opportunistic infections (Mycobacterium, Toxoplasma, viruses, fungi).",
      "• Antiretroviral Therapy (ART): Cocktails of reverse transcriptase inhibitors and protease inhibitors prolong life but cannot cure."
    ],
    derivations: [
      {
        name: "Stepwise Infection & Replication Pathway of HIV",
        setup: "Retroviral replication cycle in macrophages and CD4+ T-lymphocytes.",
        steps: [
          { text: "Step 1: Viral entry into Macrophage:", equation: "\\text{Viral envelope fuses with host membrane; ssRNA enters cytoplasm}" },
          { text: "Step 2: Reverse transcription:", equation: "\\text{Viral ssRNA} \\xrightarrow{\\text{Reverse Transcriptase}} \\text{Viral dsDNA}" },
          { text: "Step 3: Integration into host chromosome:", equation: "\\text{Viral dsDNA} \\xrightarrow{\\text{Integrase}} \\text{Provirus in host genome}" },
          { text: "Step 4: Progeny assembly & budding:", equation: "\\text{Transcription of viral RNA & proteins} \\implies \\text{Macrophage functions as HIV factory}" },
          { text: "Step 5: Helper T-cell depletion:", equation: "\\text{HIV attacks } T_H \\text{ lymphocytes} \\implies \\text{Severe drop in CD4 count} \\implies \\text{Clinical AIDS}" }
        ],
        finalFormula: "\\text{Viral ssRNA} \\xrightarrow{\\text{Reverse Transcriptase}} \\text{DNA} \\implies \\text{Helper T-Cell Count Drops} \\implies \\text{AIDS}"
      }
    ]
  },

  "bio-page-22": {
    theory: [
      "• Opioids: Bind to opioid receptors in central nervous system and gastrointestinal tract (e.g. Morphine, Heroin/Smack). Morphine is extracted from latex of Papaver somniferum; Heroin is diacetylmorphine, a depressant slowing body functions.",
      "• Cannabinoids: Interact with cannabinoid receptors principally in brain (e.g. Marijuana, Hashish, Charas, Ganja). Extracted from inflorescences of Cannabis sativa; effects primarily cardiovascular.",
      "• Cocaine (Coca Alkaloid): Extracted from Erythroxylum coca; interferes with dopamine reuptake, producing euphoria and energy; excessive doses cause hallucinations."
    ],
    derivations: [
      {
        name: "Tabulation of Drug Classes: Chemical Nature, Source & Effects",
        setup: "Pharmacological classification of commonly abused psychoactive drugs.",
        steps: [
          { text: "Opioids (Morphine, Heroin/Smack):", equation: "\\text{Source: } \\text{Papaver somniferum (Poppy)} \\implies \\text{CNS/GI receptors, Depressant, slows body functions}" },
          { text: "Cannabinoids (Ganja, Charas, Marijuana):", equation: "\\text{Source: } \\text{Cannabis sativa} \\implies \\text{Cannabinoid receptors in brain, affects cardiovascular system}" },
          { text: "Coca Alkaloid (Cocaine / Crack):", equation: "\\text{Source: } \\text{Erythroxylum coca} \\implies \\text{Blocks Dopamine transport, Stimulant & Hallucinogen at high dose}" }
        ],
        finalFormula: "\\text{Opioids (Poppy/Depressant)} \\; | \\; \\text{Cannabinoids (Hemp/Cardiovascular)} \\; | \\; \\text{Cocaine (Erythroxylum/Dopamine)}"
      }
    ]
  },

  "bio-page-23": {
    theory: [
      "• Biocontrol Concept: The use of biological methods for controlling plant diseases and pests instead of synthetic toxic pesticides.",
      "• Bacillus thuringiensis (Bt): Soil bacterium used against butterfly caterpillars; spores contain toxic Cry protein crystals that dissolve in alkaline insect midgut, creating pores and causing larval death.",
      "• Baculoviruses (NPV): Nucleopolyhedrovirus genus targets insects and arthropods; excellent candidates for species-specific, narrow spectrum insecticidal applications without adverse impact on non-target organisms.",
      "• Trichoderma: Free-living soil fungus effective against several root-borne plant pathogens."
    ],
    derivations: [
      {
        name: "Mechanism of Biocontrol Agents: Bacillus thuringiensis & Baculoviruses",
        setup: "Ecological pest management strategies.",
        steps: [
          { text: "Bacillus thuringiensis (Bt):", equation: "\\text{Ingested Cry endotoxin} \\xrightarrow{\\text{Alkaline Gut pH}} \\text{Toxin solubilised} \\to \\text{Midgut pore lysis} \\implies \\text{Larval death}" },
          { text: "Baculoviruses (Nucleopolyhedrovirus):", equation: "\\text{Species-specific & narrow-spectrum} \\implies \\text{Zero damage to mammals, birds, fish, or non-target insects}" },
          { text: "Integrated Pest Management (IPM):", equation: "\\text{Preserves beneficial insects while targeting specific agricultural pests}" }
        ],
        finalFormula: "\\text{Bt = Alkaline Gut Midgut Lysis} \\quad | \\quad \\text{Baculoviruses = Species-Specific Narrow Spectrum Bio-insecticides}"
      }
    ]
  },

  "bio-page-24": {
    diagramId: "homologous-analogous",
    diagram: {
      hasDiagram: true,
      diagramId: "homologous-analogous",
      title: "Homologous vs Analogous Organs & Evolutionary Divergence",
      examDrawingGuide: [
        "1. Homologous Structures: Draw forelimbs of Whale, Bat, Cheetah, and Human showing identical skeletal elements (Humerus, Radius, Ulna, Carpals, Metacarpals, Phalanges) adapted for swimming, flying, running, grasping.",
        "2. Analogous Structures: Draw wings of butterfly (invertebrate epidermal fold) vs wings of bird (feathered forelimb) adapted for flight.",
        "3. Label: Homology = Divergent Evolution (common ancestor); Analogy = Convergent Evolution (convergent adaptation)."
      ]
    },
    theory: [
      "• Homologous Organs (Divergent Evolution): Structures sharing the same fundamental anatomical plan and embryonic origin, adapted to perform different functions in different environments.",
      "• Homology Examples: Forelimbs of Human, Cheetah, Whale, and Bat; Thorns of Bougainvillea and Tendrils of Cucurbita (both modified axillary buds).",
      "• Analogous Organs (Convergent Evolution): Structures having different basic anatomical architecture and embryonic origin, but performing similar functions under common selective pressures.",
      "• Analogy Examples: Wings of Butterfly and Bird; Eye of Octopus and Mammal; Sweet potato (root tuber) and Potato (stem tuber)."
    ],
    derivations: [
      {
        name: "Comparative Framework: Divergent vs Convergent Evolution",
        setup: "Morphological and anatomical evidence for evolution.",
        steps: [
          { text: "Homology (Divergent Evolution):", equation: "\\text{Same basic anatomy} \\xrightarrow{\\text{Different habitats}} \\text{Diverse functional adaptations (Common Ancestry)}" },
          { text: "Analogy (Convergent Evolution):", equation: "\\text{Different basic origins} \\xrightarrow{\\text{Similar habitat pressure}} \\text{Convergent function (Adaptation)}" }
        ],
        finalFormula: "\\text{Homology = Divergent Evolution (Bougainvillea/Cucurbita)} \\; | \\; \\text{Analogy = Convergent Evolution (Potato/Sweet Potato)}"
      }
    ]
  },

  "bio-page-25": {
    theory: [
      "• Lamarckism: Theory of inheritance of acquired characters and use/disuse of organs (e.g. elongation of giraffe neck due to stretching for tree foliage).",
      "• Darwinism (Natural Selection): Evolution by gradual natural selection acting on minor continuous variations; survival of the fittest based on differential reproductive success.",
      "• Hugo de Vries (Mutation Theory): Proposed that evolution occurs through large, sudden, discontinuous, single-step mutations (Saltation) based on experiments on Evening Primrose (Oenothera lamarckiana).",
      "• Directionality: Darwinian variations are small and directional; de Vriesian mutations are random and directionless."
    ],
    derivations: [
      {
        name: "Comparison of Evolutionary Theories: Darwinism vs Hugo de Vries",
        setup: "Mechanisms generating species diversity.",
        steps: [
          { text: "Darwinian Evolution:", equation: "\\text{Minor continuous variations} \\implies \\text{Gradual, slow, and directional evolution}" },
          { text: "Hugo de Vries Mutation Theory:", equation: "\\text{Single step large mutation (Saltation)} \\implies \\text{Discontinuous, sudden, and directionless evolution}" }
        ],
        finalFormula: "\\text{Darwin = Gradual Directional Selection} \\quad | \\quad \\text{De Vries = Single Step Large Mutation (Saltation)}"
      }
    ]
  },

  "bio-page-26": {
    diagramId: "transcription-unit",
    diagram: {
      hasDiagram: true,
      diagramId: "transcription-unit",
      title: "Schematic Architecture of a Transcription Unit",
      examDrawingGuide: [
        "1. Draw double-stranded DNA: Template strand (3'->5') and Coding strand (5'->3').",
        "2. Draw Promoter located at 5' end (upstream) of coding strand.",
        "3. Draw Structural gene in the middle.",
        "4. Draw Terminator located at 3' end (downstream) of coding strand.",
        "5. Show arrow indicating 5' to 3' synthesis of nascent RNA transcript."
      ]
    },
    theory: [
      "• Three Components: A transcription unit in DNA consists of: (i) Promoter, (ii) Structural gene, (iii) Terminator.",
      "• Polarity Rules: RNA Polymerase synthesises RNA strictly in the $5'\\to 3'$ direction; hence the DNA strand with $3'\\to 5'$ polarity serves as the Template Strand.",
      "• Coding Strand Reference: The strand with $5'\\to 3'$ polarity is called the Coding Strand; all positions (promoter at 5'-end, terminator at 3'-end) are referenced with respect to the coding strand."
    ],
    derivations: [
      {
        name: "Structural Organization & Polarity Conventions of Transcription Unit",
        setup: "DNA duplex organization required for transcription.",
        steps: [
          { text: "Template Strand:", equation: "\\text{Polarity: } 3' \\to 5' \\implies \\text{Acts as template for RNA Polymerase}" },
          { text: "Coding Strand (Reference strand):", equation: "\\text{Polarity: } 5' \\to 3' \\implies \\text{Sequence matches RNA (with T instead of U)}" },
          { text: "Promoter & Terminator landmarks:", equation: "\\text{Promoter at 5'-end (upstream)} \\quad \\longleftrightarrow \\quad \\text{Terminator at 3'-end (downstream)}" }
        ],
        finalFormula: "\\text{Template: } 3'\\to 5' \\quad | \\quad \\text{Coding: } 5'\\to 3' \\quad | \\quad \\text{Promoter = 5'-end upstream of coding strand}"
      }
    ]
  },

  "bio-page-27": {
    diagramId: "replicating-fork",
    diagram: {
      hasDiagram: true,
      diagramId: "replicating-fork",
      title: "Asymmetric DNA Replication Fork",
      examDrawingGuide: [
        "1. Draw Y-shaped replication fork showing unzipped parental strands (3'->5' and 5'->3').",
        "2. Show continuous synthesis of Leading strand in 5'->3' direction pointing towards the fork.",
        "3. Show discontinuous synthesis of Lagging strand away from fork in Okazaki fragments.",
        "4. Show DNA Ligase joining Okazaki fragments and label RNA primers at 5' ends."
      ]
    },
    theory: [
      "• Replication Fork: Y-shaped structure formed when DNA Helicase unzips parental DNA duplex during replication.",
      "• Unidirectional Polymerase: DNA-dependent DNA polymerase synthesises new strands strictly in the $5'\\to 3'$ direction.",
      "• Leading Strand (Continuous): On the $3'\\to 5'$ parental template strand, synthesis occurs continuously toward the replicating fork.",
      "• Lagging Strand (Discontinuous): On the $5'\\to 3'$ parental template strand, synthesis occurs discontinuously away from the fork in short Okazaki fragments, subsequently joined by DNA Ligase."
    ],
    derivations: [
      {
        name: "Asymmetric Synthesis Dynamics at the DNA Replication Fork",
        setup: "Semi-discontinuous DNA replication mechanism.",
        steps: [
          { text: "Leading Strand synthesis:", equation: "\\text{Template: } 3'\\to 5' \\implies \\text{Continuous synthesis in } 5'\\to 3' \\text{ direction towards fork}" },
          { text: "Lagging Strand synthesis:", equation: "\\text{Template: } 5'\\to 3' \\implies \\text{Discontinuous Okazaki fragments synthesised away from fork}" },
          { text: "Enzymatic ligation:", equation: "\\text{Okazaki fragments joined by DNA Ligase phosphodiester bonds}" }
        ],
        finalFormula: "\\text{Leading = Continuous (towards fork)} \\quad | \\quad \\text{Lagging = Discontinuous (Okazaki fragments + DNA Ligase)}"
      }
    ]
  }
};
