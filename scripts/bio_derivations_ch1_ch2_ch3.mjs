// Derivations, step-by-step mechanisms, drawing guides and refined theory for Chapters 1, 2, 3 (Core Q15 - Q30)

export const CH1_CH2_CH3_ENHANCEMENTS = {
  "bio-core-15": {
    diagramId: "microsporangium-walls",
    diagram: {
      hasDiagram: true,
      diagramId: "microsporangium-walls",
      title: "Microsporangium Wall Layers & Dehiscence",
      examDrawingGuide: [
        "1. Draw cross-section of bilobed anther showing four microsporangia at four corners.",
        "2. Draw the 4 concentric layers from outside to inside: Epidermis -> Endothecium -> Middle layers -> Tapetum.",
        "3. Show Endothecium with radial fibrous thickenings and Tapetum with dense cytoplasm and prominent multiple nuclei.",
        "4. Draw central mass of diploid Sporogenous tissue inside each microsporangium."
      ]
    },
    theory: [
      "• Wall Architecture: A typical angiosperm microsporangium is encircled by four distinct wall layers: Epidermis, Endothecium, Middle layers, and Tapetum.",
      "• Protective & Dehiscence Outer Layers: The outer three layers (Epidermis, Endothecium, Middle layers) protect the pollen and facilitate anther dehiscence.",
      "• Nutritive Tapetum: The innermost layer (Tapetum) possesses dense cytoplasm, multiple nuclei/polyploidy, nourishes developing microspores, and secretes pollen wall precursors."
    ],
    derivations: [
      {
        name: "Four Concentric Wall Layers & Functional Specialization",
        setup: "Transverse section of young bilobed anther.",
        steps: [
          { text: "1. Epidermis (Outermost):", equation: "\\text{Single cell layer thick} \\implies \\text{Protective mechanical barrier}" },
          { text: "2. Endothecium (Sub-epidermal):", equation: "\\text{Alpha-cellulose fibrous bands} \\implies \\text{Hygroscopic rupture (dehiscence) at stomium}" },
          { text: "3. Middle Layers (Intermediate):", equation: "2\\text{ to } 3 \\text{ ephemeral cell layers} \\implies \\text{Nutrient reserve, crushed at maturity}" },
          { text: "4. Tapetum (Innermost nutritive):", equation: "\\text{Dense cytoplasm + Multinucleate} \\implies \\text{Nourishes microspores, secretes Ubisch bodies & pollenkitt}" }
        ],
        finalFormula: "\\text{Outer 3 layers = Protection + Dehiscence} \\quad | \\quad \\text{Tapetum = Microspore Nourishment}"
      }
    ]
  },

  "bio-core-16": {
    diagramId: "pollen-grain",
    diagram: {
      hasDiagram: true,
      diagramId: "pollen-grain",
      title: "Structure of Pollen Grain & 2-Celled Stage",
      examDrawingGuide: [
        "1. Draw outer spherical sculptured Exine layer with distinct Germ Pores where exine is absent.",
        "2. Draw continuous inner smooth Intine layer beneath exine.",
        "3. Draw large Vegetative cell with abundant food reserves and irregular nucleus.",
        "4. Draw spindle-shaped Generative cell with dense cytoplasm floating in vegetative cell."
      ]
    },
    theory: [
      "• Sporoderm (Pollen Wall): Two-layered protective envelope comprising an outer sculpted Exine and an inner continuous Intine.",
      "• Sporopollenin Exine: Composed of sporopollenin, the most resistant biological material known, withstanding high temperatures, strong acids, alkalis, and enzymes.",
      "• Germ Pores: Apertures on exine where sporopollenin is absent, allowing pollen tube emergence upon germination on the stigma.",
      "• Two-Celled Organization: Mature pollen grain contains a large Vegetative cell (food storage) and a small spindle-shaped Generative cell."
    ],
    derivations: [
      {
        name: "Pollen Wall Stratification & Shedding Stage",
        setup: "Male gametophyte organization in angiosperms.",
        steps: [
          { text: "Exine (Outer hard resistant coat):", equation: "\\text{Composed of Sporopollenin} \\implies \\text{Fossil preservation & environmental resistance}" },
          { text: "Intine (Inner delicate coat):", equation: "\\text{Continuous thin layer of Pectin and Cellulose}" },
          { text: "Cellular constitution at shedding:", equation: "\\text{Large Vegetative cell} + \\text{Spindle Generative cell}" }
        ],
        specialCases: [
          { title: "60% vs 40% Angiosperm Rule", text: "In >60% of angiosperms, pollen is shed at the 2-celled stage; in <40%, the generative cell divides mitotically to yield 2 male gametes prior to shedding (3-celled stage)." }
        ],
        finalFormula: "\\text{Exine (Sporopollenin)} + \\text{Intine (Pectocellulose)} \\implies \\text{2-Celled / 3-Celled Male Gametophyte}"
      }
    ]
  },

  "bio-core-17": {
    diagramId: "embryo-sac",
    diagram: {
      hasDiagram: true,
      diagramId: "embryo-sac",
      title: "Egg Apparatus & Filiform Apparatus",
      examDrawingGuide: [
        "1. Draw micropylar end of embryo sac showing 3-celled egg apparatus (1 central Egg cell and 2 flanking Synergids).",
        "2. Draw finger-like cellular thickenings at micropylar tips of both synergids: Filiform Apparatus.",
        "3. Show pollen tube entering one of the synergids guided chemotropically by the filiform apparatus."
      ]
    },
    theory: [
      "• Location: Specialized finger-like cellular wall projections located at the micropylar tip of the synergid cells.",
      "• Primary Function: Chemotropically directs and guides the entry of the pollen tube into the synergid during fertilisation.",
      "• Degeneration: The penetrated synergid degenerates, discharging the two male gametes into the cytoplasm of the synergid."
    ],
    derivations: [
      {
        name: "Chemotropic Guidance & Pollen Tube Entry Pathway",
        setup: "Micropylar interaction during siphonogamous fertilisation.",
        steps: [
          { text: "Pollen tube reaches ovule:", equation: "\\text{Pollen tube grows through style} \\longrightarrow \\text{Enters ovule through micropyle}" },
          { text: "Chemotropic recognition by filiform apparatus:", equation: "\\text{Synergid filiform apparatus secretes chemotropic signals guiding pollen tube tip}" },
          { text: "Pollen tube discharge into synergid:", equation: "\\text{Pollen tube ruptures into one synergid} \\implies \\text{Discharges 2 male gametes}" }
        ],
        finalFormula: "\\text{Filiform Apparatus} \\implies \\text{Chemotropic Guidance of Pollen Tube into Synergid}"
      }
    ]
  },

  "bio-core-18": {
    theory: [
      "• Autogamy: Pollen transferred from anther to stigma of the same flower. Requires synchrony in pollen release and stigma receptivity, and close proximity.",
      "• Geitonogamy: Pollen transferred from anther to stigma of another flower on the same plant. Functionally cross-pollination (requires pollinator), genetically autogamous.",
      "• Xenogamy: Pollen transferred from anther to stigma of a flower on a different plant of the same species. Introduces genetic variation.",
      "• Cleistogamy: Flowers that never open (e.g. Viola, Oxalis, Commelina), ensuring 100% autogamous seed-set even in absence of pollinators."
    ],
    derivations: [
      {
        name: "Comparative Matrix of Pollination Modes & Genetic Outcomes",
        setup: "Transfer of microspores from stamen to carpel.",
        steps: [
          { text: "Autogamy (Same flower):", equation: "\\text{Anther} \\to \\text{Stigma of same flower} \\implies \\text{Genetically identical (Inbreeding)}" },
          { text: "Geitonogamy (Same plant, different flower):", equation: "\\text{Functionally ecological cross-pollination} \\implies \\text{Genetically self-pollination (Identical alleles)}" },
          { text: "Xenogamy (Different plant):", equation: "\\text{Anther} \\to \\text{Stigma of genetically distinct plant} \\implies \\text{Genetic recombination & diversity}" }
        ],
        finalFormula: "\\text{Autogamy = Same flower} \\quad | \\quad \\text{Geitonogamy = Same plant} \\quad | \\quad \\text{Xenogamy = True Cross}"
      }
    ]
  },

  "bio-core-19": {
    theory: [
      "• Inbreeding Depression: Continuous self-pollination reduces fertility and vigour in angiosperms; outbreeding devices promote cross-pollination.",
      "• Dichogamy (Temporal Separation): Pollen release and stigma receptivity are non-synchronised (Protandry: anthers mature first; Protogyny: stigma matures first).",
      "• Herkogamy (Spatial Separation): Anther and stigma placed at different physical positions so pollen cannot contact the stigma of the same flower.",
      "• Self-Incompatibility (Genetic Barrier): Maternal genetic mechanism preventing self-pollen from fertilising the ovules by inhibiting pollen germination or pollen tube growth in the pistil.",
      "• Dicliny (Unisexual Flowers): Production of unisexual flowers (Monoecious: e.g. castor, maize prevents autogamy; Dioecious: e.g. papaya prevents both autogamy and geitonogamy)."
    ],
    derivations: [
      {
        name: "Four Major Floral Mechanisms Preventing Inbreeding",
        setup: "Structural and genetic adaptations promoting xenogamy.",
        steps: [
          { text: "1. Non-synchronisation (Dichogamy):", equation: "\\text{Protandry (pollen first) or Protogyny (stigma first)} \\implies \\text{Zero self-pollination}" },
          { text: "2. Positional barrier (Herkogamy):", equation: "\\text{Physical distance / height differences between anther and stigma}" },
          { text: "3. Genetic rejection (Self-incompatibility):", equation: "\\text{Inhibition of pollen tube in style if pollen carries matching } S\\text{-allele}" },
          { text: "4. Unisexuality (Dioecy):", equation: "\\text{Male and female flowers on separate plants (e.g. Papaya)} \\implies \\text{Only Xenogamy possible}" }
        ],
        finalFormula: "\\text{Outbreeding Devices} \\implies \\text{Prevents Inbreeding Depression & Promotes Hybrid Vigour}"
      }
    ]
  },

  "bio-core-20": {
    diagramId: "embryo-sac",
    diagram: {
      hasDiagram: true,
      diagramId: "embryo-sac",
      title: "Double Fertilisation in Angiosperms",
      examDrawingGuide: [
        "1. Draw embryo sac showing micropylar egg apparatus and central cell.",
        "2. Show Syngamy: 1 male gamete (n) fusing with Egg cell nucleus (n) to form diploid Zygote (2n).",
        "3. Show Triple Fusion: 2nd male gamete (n) fusing with 2 Polar Nuclei (n+n) in Central Cell to form triploid Primary Endosperm Nucleus (PEN, 3n).",
        "4. Label: Syngamy -> Embryo; Triple Fusion -> Nutritive Endosperm."
      ]
    },
    theory: [
      "• Unique Angiosperm Event: Double fertilisation involves two independent nuclear fusions within the female gametophyte (discovered by S.G. Nawaschin, 1898).",
      "• Syngamy (Generative Fertilisation): Fusion of one haploid male gamete with the haploid egg cell nucleus, producing a diploid zygote ($2n$).",
      "• Triple Fusion (Vegetative Fertilisation): Fusion of the second haploid male gamete with the two polar nuclei of the central cell, producing a triploid Primary Endosperm Nucleus ($PEN, 3n$).",
      "• Post-Fertilisation Fates: Zygote develops into the embryo; central cell with PEN develops into the nutritive endosperm tissue."
    ],
    derivations: [
      {
        name: "Stepwise Nuclear Fusions of Double Fertilisation",
        setup: "Discharge of two non-motile male gametes into embryo sac.",
        steps: [
          { text: "Syngamy (Generative fusion):", equation: "\\text{Male Gamete } (n) + \\text{Egg Cell } (n) \\xrightarrow{} \\text{Zygote } (2n) \\to \\text{Embryo}" },
          { text: "Triple Fusion (Vegetative fusion):", equation: "\\text{Male Gamete } (n) + 2 \\text{ Polar Nuclei } (n+n) \\xrightarrow{} \\text{PEN } (3n) \\to \\text{Endosperm}" }
        ],
        specialCases: [
          { title: "Nuclear Tally", text: "Total of 5 nuclei participate: 1 egg + 1 sperm = 2 in syngamy; 2 polar nuclei + 1 sperm = 3 in triple fusion." }
        ],
        finalFormula: "\\text{Double Fertilisation} = \\text{Syngamy } (2n \\text{ Zygote}) + \\text{Triple Fusion } (3n \\text{ PEN})"
      }
    ]
  },

  "bio-core-21": {
    theory: [
      "• True Fruit: Fruit derived strictly from the ripened ovary after fertilisation without contribution from other floral parts (e.g. Mango, Tomato).",
      "• False Fruit (Pseudocarp): Fruit where floral parts other than ovary (especially the fleshy thalamus) contribute significantly to fruit formation (e.g. Apple, Strawberry, Cashew nut).",
      "• Parthenocarpic Fruit: Fruit that develops without fertilisation of ovules; naturally seedless (e.g. Banana, seedless grapes), and can be induced with auxins and gibberellins."
    ],
    derivations: [
      {
        name: "Classification of Angiospermic Fruits by Ontogeny",
        setup: "Anatomical origin and developmental triggers of fruit tissues.",
        steps: [
          { text: "True Fruit:", equation: "\\text{Ovary alone} \\xrightarrow{\\text{Fertilisation}} \\text{Pericarp enclosing seeds (e.g. Mango)}" },
          { text: "False Fruit (Pseudocarp):", equation: "\\text{Ovary} + \\text{Fleshy Thalamus} \\xrightarrow{\\text{Fertilisation}} \\text{Edible fruit (e.g. Apple, Strawberry)}" },
          { text: "Parthenocarpic Fruit:", equation: "\\text{Unfertilised Ovary} \\xrightarrow{\\text{Hormonal Trigger}} \\text{Seedless Fruit (e.g. Banana)}" }
        ],
        finalFormula: "\\text{True = Ovary only} \\quad | \\quad \\text{False = Thalamus involved} \\quad | \\quad \\text{Parthenocarpic = Zero fertilisation}"
      }
    ]
  },

  "bio-core-22": {
    theory: [
      "• Fallopian Tubes (Oviducts): 10–12 cm muscular conduits comprising Infundibulum, Ampulla, and Isthmus.",
      "• Fimbriae: Finger-like projections at the margin of the infundibulum that sweep over the ovary surface to collect the secondary oocyte released during ovulation.",
      "• Site of Fertilisation: Fertilisation occurs in the Ampullary-isthmic junction of the fallopian tube.",
      "• Ciliated Epithelium: Ciliated simple columnar cells propel the non-motile ovum/zygote toward the uterus."
    ],
    derivations: [
      {
        name: "Pathway of Ovum Capture & Transport in Fallopian Tube",
        setup: "Ovulatory release and luminal transport mechanism.",
        steps: [
          { text: "1. Ovary releases secondary oocyte:", equation: "\\text{Graafian follicle ruptures} \\implies \\text{Ovum expelled into peritoneal cavity}" },
          { text: "2. Ciliary suction by Fimbriae:", equation: "\\text{Fimbriae sweeps over ovary} \\implies \\text{Directs ovum into Ostium of Infundibulum}" },
          { text: "3. Ampullary transport & fertilisation:", equation: "\\text{Infundibulum} \\to \\text{Ampulla (Site of Fertilisation)} \\to \\text{Isthmus} \\to \\text{Uterine Cavity}" }
        ],
        finalFormula: "\\text{Fimbriae (Capture)} \\to \\text{Infundibulum} \\to \\text{Ampulla (Fertilisation)} \\to \\text{Uterus}"
      }
    ]
  },

  "bio-core-23": {
    diagramId: "placenta-fetus",
    diagram: {
      hasDiagram: true,
      diagramId: "placenta-fetus",
      title: "Uterine Anatomy & Fetal Membranes",
      examDrawingGuide: [
        "1. Draw inverted pear-shaped uterus showing fundus, body, and cervix.",
        "2. Draw 3 distinct uterine wall layers from outer to inner: Perimetrium, Myometrium, and Endometrium.",
        "3. Show thick muscular Myometrium and glandular vascular Endometrium bordering uterine cavity.",
        "4. Label Myometrium as site of oxytocin contractions during parturition and Endometrium as site of cyclic changes and implantation."
      ]
    },
    theory: [
      "• Perimetrium (Outer): External thin membranous serous covering providing structural protection.",
      "• Myometrium (Middle): Thick muscular layer of interlaced smooth muscle fibres; exhibits strong coordinated contractions during parturition under oxytocin stimulation.",
      "• Endometrium (Inner): Highly vascular, glandular mucous membrane lining the uterine cavity; undergoes cyclic breakdown during menstrual cycle and supports blastocyst implantation."
    ],
    derivations: [
      {
        name: "Three Uterine Wall Layers & Functional Roles",
        setup: "Microscopic cross-section of human uterine wall.",
        steps: [
          { text: "1. Perimetrium (Outer serosa):", equation: "\\text{Thin peritoneal membrane} \\implies \\text{Protective outer envelope}" },
          { text: "2. Myometrium (Middle muscular):", equation: "\\text{Smooth muscle bundles} \\implies \\text{Forceful contractions during childbirth (Parturition)}" },
          { text: "3. Endometrium (Inner glandular):", equation: "\\text{Glandular layer} \\implies \\text{Cyclic menstrual shedding & Blastocyst Implantation}" }
        ],
        finalFormula: "\\text{Perimetrium (Protection)} + \\text{Myometrium (Labour Contraction)} + \\text{Endometrium (Implantation)}"
      }
    ]
  },

  "bio-core-24": {
    diagramId: "blastocyst",
    diagram: {
      hasDiagram: true,
      diagramId: "blastocyst",
      title: "Blastocyst Structure & Implantation",
      examDrawingGuide: [
        "1. Draw circular blastocyst showing outer single cell layer: Trophoblast.",
        "2. Draw inner cell cluster attached to one side: Inner Cell Mass (embryoblast).",
        "3. Label central fluid-filled cavity: Blastocoel.",
        "4. Show Trophoblast attaching to uterine endometrium with chorionic villi for implantation."
      ]
    },
    theory: [
      "• Cleavage: Rapid mitotic divisions of the zygote without cytoplasmic growth as it moves through the isthmus toward the uterus ($2 \\to 4 \\to 8 \\to 16$ daughter blastomeres).",
      "• Morula: Solid mulberry-like ball of 8–16 blastomeres.",
      "• Blastocyst (64+ cells): Cavitated spherical structure with an outer Trophoblast layer, fluid-filled Blastocoel, and an Inner Cell Mass (stem cells that form the embryo).",
      "• Implantation: Embedding of the blastocyst into the vascular uterine endometrium roughly 7 days after fertilisation, mediated by trophoblastic proteolytic enzymes."
    ],
    derivations: [
      {
        name: "Stepwise Cleavage Timeline from Zygote to Implantation",
        setup: "Early embryonic development in human female oviduct and uterus.",
        steps: [
          { text: "Day 0 (Zygote in ampulla):", equation: "\\text{Single-cell diploid zygote } (2n = 46)" },
          { text: "Day 1–3 (Cleavage divisions):", equation: "2\\text{-cell} \\to 4\\text{-cell} \\to 8\\text{-cell} \\to 16\\text{-cell Morula}" },
          { text: "Day 4–5 (Blastocyst formation):", equation: "\\text{Cavitation} \\implies \\text{Trophoblast (placenta)} + \\text{Inner Cell Mass (embryo)}" },
          { text: "Day 7 (Implantation in endometrium):", equation: "\\text{Trophoblast adheres to endometrium} \\implies \\text{Blastocyst embedded, pregnancy established}" }
        ],
        finalFormula: "\\text{Zygote} \\to \\text{Morula (16 cells)} \\to \\text{Blastocyst} \\xrightarrow{\\text{Day 7}} \\text{Implantation in Endometrium}"
      }
    ]
  },

  "bio-core-25": {
    diagramId: "menstrual-cycle",
    diagram: {
      hasDiagram: true,
      diagramId: "menstrual-cycle",
      title: "Hormonal Regulators & Menstrual Cycle Phases",
      examDrawingGuide: [
        "1. Draw 4 parallel horizontal tracks: Pituitary hormones (FSH, LH), Ovarian events, Ovarian hormones (Estrogen, Progesterone), and Endometrial thickness.",
        "2. Mark Day 14 with LH surge (highest peak) and secondary Estrogen peak inducing ovulation.",
        "3. Show Progesterone rising only during Luteal Phase (Days 15–28) secreted by Corpus Luteum.",
        "4. Show endometrial breakdown (Days 1–5), proliferative repair (Days 6–13), and secretory thickness (Days 15–28)."
      ]
    },
    theory: [
      "• Menstrual Phase (Days 1–5): Fall in progesterone triggers breakdown of endometrial lining and blood vessels, discharged as menstrual flow (50–100 mL).",
      "• Follicular / Proliferative Phase (Days 6–13): Pituitary FSH stimulates ovarian follicle development; mature Graafian follicle secretes Estrogen, regenerating the endometrium.",
      "• Ovulatory Phase (Day 14): Mid-cycle peak in LH (LH Surge) induces rupture of mature Graafian follicle and release of secondary oocyte (ovulation).",
      "• Luteal / Secretory Phase (Days 15–28): Ruptured Graafian follicle transforms into Corpus Luteum, secreting large amounts of Progesterone to maintain the endometrium for pregnancy."
    ],
    derivations: [
      {
        name: "Four Phases of the Menstrual Cycle & Hormonal Interplay",
        setup: "28-day cyclic event in human females regulated by pituitary-ovarian axis.",
        steps: [
          { text: "Phase 1: Menstrual Phase (Days 1–5):", equation: "\\text{Progesterone drop} \\implies \\text{Endometrial shedding & bleeding}" },
          { text: "Phase 2: Follicular Phase (Days 6–13):", equation: "\\text{FSH rise} \\implies \\text{Follicular growth} \\implies \\text{High Estrogen} \\implies \\text{Endometrial proliferation}" },
          { text: "Phase 3: Ovulatory Surge (Day 14):", equation: "\\text{LH Surge (peak LH)} \\implies \\text{Graafian follicle ruptures} \\implies \\text{Ovulation}" },
          { text: "Phase 4: Luteal Phase (Days 15–28):", equation: "\\text{Corpus Luteum} \\implies \\text{High Progesterone} \\implies \\text{Secretory endometrium maintained}" }
        ],
        specialCases: [
          { title: "Absence of Pregnancy", text: "Corpus luteum degenerates into Corpus albicans; progesterone plummets, causing endometrial shedding (new cycle begins)." }
        ],
        finalFormula: "\\text{Day 14 LH Surge} = \\text{Ovulation} \\quad | \\quad \\text{Corpus Luteum Progesterone} = \\text{Endometrial Maintenance}"
      }
    ]
  },

  "bio-core-26": {
    theory: [
      "• Spermatogenesis: Continuous production of motile spermatozoa in male testes initiated at puberty under GnRH, LH (Leydig cells $\\to$ testosterone), and FSH (Sertoli cells).",
      "• Oogenesis: Discontinuous production of ovum in female ovaries initiated during embryonic life, arrested at Diplotene I until puberty, and completed only after sperm entry.",
      "• Cytoplasmic Asymmetry: Spermatogenesis produces 4 equal functional spermatozoa; Oogenesis produces only 1 functional ovum and 2–3 tiny degenerate polar bodies.",
      "• Gamete Yield: 1 Primary Spermatocyte yields 4 functional sperms; 1 Primary Oocyte yields only 1 functional ovum."
    ],
    derivations: [
      {
        name: "Stepwise Spermatogenesis vs Oogenesis Progression",
        setup: "Comparative meiotic gametogenesis in human males and females.",
        steps: [
          { text: "Spermatogenesis (Continuous):", equation: "\\text{Spermatogonium } (2n) \\xrightarrow{\\text{Mitosis}} \\text{Primary Spermatocyte } (2n) \\xrightarrow{\\text{Meiosis I}} 2 \\text{ Secondary } (n) \\xrightarrow{\\text{Meiosis II}} 4 \\text{ Spermatids } (n) \\to 4 \\text{ Sperms}" },
          { text: "Oogenesis (Discontinuous):", equation: "\\text{Oogonium } (2n) \\xrightarrow{\\text{Mitosis}} \\text{Primary Oocyte } (2n) \\xrightarrow{\\text{Meiosis I}} 1 \\text{ Secondary Oocyte } (n) + 1\\text{st Polar Body} \\xrightarrow{\\text{Fertilisation}} 1 \\text{ Ovum} + 2\\text{nd Polar Body}" }
        ],
        finalFormula: "1 \\text{ Primary Spermatocyte} \\implies 4 \\text{ Sperms} \\quad | \\quad 1 \\text{ Primary Oocyte} \\implies 1 \\text{ Ovum} + \\text{Polar Bodies}"
      }
    ]
  },

  "bio-core-27": {
    theory: [
      "• Contraceptive Categories: Natural/behavioral methods, Barrier methods, Intrauterine Devices (IUDs), Oral hormonal pills, Injections/implants, and Surgical sterilization.",
      "• IUD Mechanisms: Non-medicated (Lippes loop); Copper-releasing (CuT, Cu7, Multiload 375: suppress sperm motility and fertilising capacity); Hormone-releasing (Progestasert, LNG-20: make uterus hostile to implantation).",
      "• Oral Contraceptives: Progestogen-estrogen combinations inhibit ovulation and implantation, and alter cervical mucus; 'Saheli' is a non-steroidal once-a-week pill (Centchroman).",
      "• Terminal Methods: Vasectomy (severing/tying vas deferens in males) and Tubectomy (severing/tying fallopian tubes in females); highly effective but irreversible."
    ],
    derivations: [
      {
        name: "Categorical Classification & Mechanisms of Modern Contraceptives",
        setup: "Interventions preventing gametic encounter or zygotic implantation.",
        steps: [
          { text: "1. Barrier Methods (Condoms, Diaphragms):", equation: "\\text{Physical prevention of sperm deposition into female genital tract}" },
          { text: "2. Copper IUDs (CuT, Multiload 375):", equation: "\\text{Release } \\text{Cu}^{2+} \\implies \\text{Phagocytosis of sperms} + \\text{Suppression of sperm motility}" },
          { text: "3. Hormone IUDs (LNG-20):", equation: "\\text{Alters endometrium (hostile to implantation)} + \\text{Thickens cervical mucus}" },
          { text: "4. Oral Pills (Combined & Saheli):", equation: "\\text{Inhibits ovulation} + \\text{Prevents implantation}" },
          { text: "5. Surgical Sterilisation (Vasectomy/Tubectomy):", equation: "\\text{Block gamete transport} \\implies \\text{Permanent terminal contraception}" }
        ],
        finalFormula: "\\text{Most widely accepted method in India} = \\text{IUDs} \\quad | \\quad \\text{Zero failure non-steroidal pill} = \\text{Saheli}"
      }
    ]
  },

  "bio-core-28": {
    theory: [
      "• Transmission: Infections transmitted through sexual intercourse (e.g. Gonorrhoea, Syphilis, Chlamydiasis, Genital herpes, Genital warts, Trichomoniasis, Hepatitis-B, HIV).",
      "• Incurable STIs: HIV/AIDS, Genital Herpes, and Hepatitis-B are completely incurable once established; other bacterial and protozoan STIs are curable if detected early.",
      "• Clinical Complications: Untreated STIs lead to Pelvic Inflammatory Disease (PID), stillbirths, ectopic pregnancies, abortions, and tubal infertility.",
      "• Prevention: Avoid sex with multiple partners, consistent condom usage, and early medical consultation upon unusual discharge or genital ulcers."
    ],
    derivations: [
      {
        name: "STI Etiology, Curability Classification & Preventive Strategy",
        setup: "Epidemiological classification of sexually transmitted infections.",
        steps: [
          { text: "Curable STIs (Early antibiotic treatment):", equation: "\\text{Syphilis (Treponema), Gonorrhoea (Neisseria), Trichomoniasis (protozoan)}" },
          { text: "Incurable Viral STIs:", equation: "\\text{HIV (AIDS), Genital Herpes (HSV), Hepatitis B (HBV)}" },
          { text: "High-risk age bracket:", equation: "\\text{Adolescents and young adults aged 15–24 years}" }
        ],
        finalFormula: "\\text{Incurable Trio: HIV, Genital Herpes, Hepatitis B} \\quad | \\quad \\text{Complication: Pelvic Inflammatory Disease & Infertility}"
      }
    ]
  },

  "bio-core-29": {
    theory: [
      "• Definition: Medical Termination of Pregnancy (MTP) or induced abortion is voluntary termination before full-term fetus viability.",
      "• Legal Status: Legalised in India in 1971 with stringent statutory conditions to prevent female foeticide.",
      "• Safety Window: Safe during the 1st trimester (up to 12 weeks of pregnancy); 2nd trimester terminations (up to 20/24 weeks) carry high maternal morbidity.",
      "• Legal Grounds: Failure of contraceptive device used by married couple, rape, or continuation posing grave risk to maternal life or severe physical/mental child abnormality."
    ],
    derivations: [
      {
        name: "Regulatory Framework & Safety Protocol of MTP (MTP Amendment Act 2021)",
        setup: "Statutory parameters governing clinical abortions in India.",
        steps: [
          { text: "Up to 12 weeks (1st trimester):", equation: "\\text{Safe period} \\implies \\text{Requires opinion of 1 Registered Medical Practitioner (RMP)}" },
          { text: "12 to 20 weeks (2nd trimester):", equation: "\\text{Higher risk} \\implies \\text{Requires opinion of 2 Registered Medical Practitioners}" },
          { text: "Prohibited indication:", equation: "\\text{Sex determination via amniocentesis for female foeticide is strictly illegal}" }
        ],
        finalFormula: "\\text{1st Trimester (up to 12 weeks) = Safest period} \\quad | \\quad \\text{Statutory Ban on Pre-natal Sex Determination}"
      }
    ]
  },

  "bio-core-30": {
    theory: [
      "• Assisted Reproductive Technologies (ART): Clinical interventions to assist infertile couples who cannot conceive naturally.",
      "• IVF-ET (In Vitro Fertilisation & Embryo Transfer): Fertilisation of ovum and sperm outside body in laboratory followed by embryo transfer.",
      "• ZIFT vs IUT: Zygote or early embryo up to 8 blastomeres transferred into Fallopian tube (ZIFT); Embryo >8 blastomeres transferred directly into Uterus (IUT).",
      "• GIFT & ICSI: Transfer of collected ovum into fallopian tube of female who cannot produce one (GIFT); Direct mechanical microinjection of sperm into ovum cytoplasm in vitro (ICSI)."
    ],
    derivations: [
      {
        name: "Decision Matrix & Blastomere Threshold in ART Procedures",
        setup: "Laboratory and clinical protocols for infertile couples.",
        steps: [
          { text: "1. IVF (Test Tube Baby Programme):", equation: "\\text{Ovum} + \\text{Sperm} \\xrightarrow{\\text{In vitro}} \\text{Zygote / Embryo}" },
          { text: "2. ZIFT (Zygote Intra-Fallopian Transfer):", equation: "\\le 8 \\text{ blastomeres transferred into Fallopian tube}" },
          { text: "3. IUT (Intra-Uterine Transfer):", equation: "> 8 \\text{ blastomeres transferred directly into Uterine cavity}" },
          { text: "4. GIFT (Gamete Intra-Fallopian Transfer):", equation: "\\text{Donor ovum placed in fallopian tube for in vivo fertilisation}" },
          { text: "5. ICSI (Intra-Cytoplasmic Sperm Injection):", equation: "\\text{Sperm micro-injected into ovum for severe male oligospermia}" }
        ],
        finalFormula: "\\le 8 \\text{ Blastomeres} = \\text{ZIFT (Fallopian Tube)} \\quad | \\quad > 8 \\text{ Blastomeres} = \\text{IUT (Uterus)}"
      }
    ]
  }
};
