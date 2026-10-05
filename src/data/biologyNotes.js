// NCERT Class 12 Biology — Short, Point-wise High-Yield Notes (Exam Portion Ch 1–6)
// Each subtopic is flagged `isImportant` when it is a repeatedly asked CBSE board topic.
// Curated deep-dive content (definitions, mnemonics, errors, A-R, PYQ trends) lives in
// biologyStructuredNotes*.js and is merged into STRUCTURED_NOTES_DATA.

const imp = (examTag, importantReason) => ({ isImportant: true, examTag, importantReason });

export const BIOLOGY_CHAPTERS = [
  // ==========================================================================
  // CHAPTER 1: SEXUAL REPRODUCTION IN FLOWERING PLANTS
  // ==========================================================================
  {
    id: 'bio-ch-1',
    number: 1,
    title: 'Sexual Reproduction in Flowering Plants',
    tag: 'Reproduction',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'bio-sub-1-1',
        title: '1.1 Stamen, Microsporangium & Pollen Grain',
        ...imp('Important Diagram', 'T.S. of anther, wall layers & tapetum role, 2-celled pollen diagram (asked almost every year)'),
        sections: [
          {
            id: 'bio-sec-1-1',
            title: 'Anther Wall, Microsporogenesis & Pollen Grain',
            explanation: "• Anther is bilobed, dithecous and tetrasporangiate (4 microsporangia).\n• Wall layers (outside → inside): Epidermis → Endothecium → Middle layers → Tapetum.\n• Tapetum: innermost layer, nourishes developing pollen; cells are multinucleate with dense cytoplasm.\n• Microsporogenesis: Pollen mother cell (2n) → Meiosis → Microspore tetrad (n) → Pollen grains.\n• Exine: made of sporopollenin (most resistant organic material); absent at germ pores.\n• Intine: thin, made of cellulose + pectin.\n• Mature pollen: Vegetative cell (large, food reserve) + Generative cell (small, divides to form 2 male gametes).\n• Shed at 2-celled stage in 60% of angiosperms; 3-celled in the rest.\n• Viability: 30 min (rice, wheat) to months (Rosaceae, Leguminosae, Solanaceae). Stored at −196 °C in liquid N₂ (pollen banks).",
            questionFraming: "Most Repeated — 'Draw a labelled T.S. of a mature anther / microsporangium and state the function of tapetum.'\n'Why are pollen grains well preserved as fossils?' ⟶ Exine has sporopollenin.\n'Draw a labelled diagram of a 2-celled mature pollen grain.'",
            textbookRef: "Pollen allergy is caused by Parthenium (carrot grass). Pollen tablets are used as food supplements.",
            keyFormulas: [
              "Wall: Epidermis → Endothecium → Middle layers → Tapetum",
              "PMC (2n) → Meiosis → Tetrad (n)",
              "Exine = Sporopollenin | Intine = Cellulose + Pectin",
              "Generative cell → 2 male gametes"
            ],
            isImportant: true,
            examTag: 'Important Diagram'
          }
        ]
      },
      {
        id: 'bio-sub-1-2',
        title: '1.2 Pistil, Ovule & Embryo Sac',
        ...imp('Important Diagram', 'Labelled anatropous ovule & 7-celled 8-nucleate embryo sac (repeated 3M/5M diagram)'),
        sections: [
          {
            id: 'bio-sec-1-2',
            title: 'Megasporangium, Megasporogenesis & Female Gametophyte',
            explanation: "• Ovule parts: Funicle, Hilum, Integuments, Micropyle, Chalaza, Nucellus, Embryo sac.\n• Megasporogenesis: Megaspore mother cell (2n) → Meiosis → 4 megaspores (n); 3 degenerate, 1 functional (monosporic development).\n• Functional megaspore → 3 free-nuclear mitoses → 8 nuclei.\n• Mature embryo sac = 7 cells, 8 nuclei:\n  – Micropylar end: Egg apparatus = 1 egg + 2 synergids (with filiform apparatus)\n  – Centre: 1 central cell with 2 polar nuclei\n  – Chalazal end: 3 antipodals\n• Filiform apparatus guides the pollen tube into the synergid.",
            questionFraming: "Most Repeated — 'Draw a labelled diagram of a mature embryo sac (7-celled, 8-nucleate).'\n'Draw a labelled L.S. of an anatropous ovule.'\n'What is the function of filiform apparatus?'",
            textbookRef: "Ovules per ovary: one (wheat, paddy, mango) to many (papaya, watermelon, orchids).",
            keyFormulas: [
              "MMC (2n) → 4 megaspores (n) → 1 functional",
              "3 mitoses → 8 nuclei, 7 cells",
              "Egg apparatus = 1 egg + 2 synergids",
              "Filiform apparatus = guides pollen tube"
            ],
            isImportant: true,
            examTag: 'Important Diagram'
          }
        ]
      },
      {
        id: 'bio-sub-1-3',
        title: '1.3 Pollination & Outbreeding Devices',
        ...imp('Important Question', 'Autogamy vs Geitonogamy vs Xenogamy, cleistogamy, outbreeding devices (very frequent 2M/3M)'),
        sections: [
          {
            id: 'bio-sec-1-3',
            title: 'Types, Agents & Outbreeding Devices',
            explanation: "• Autogamy: pollen → stigma of same flower. Chasmogamous (open) vs Cleistogamous (never open; Viola, Oxalis, Commelina).\n• Geitonogamy: different flower, same plant — functionally cross, genetically self.\n• Xenogamy: different plant — only type bringing genetically different pollen.\n• Wind: light, non-sticky pollen; well-exposed stamens; large feathery stigma; single ovule (grasses, maize tassels).\n• Water: Vallisneria (on surface), Zostera (submerged; long ribbon-like pollen); water hyacinth & lily are insect-pollinated.\n• Insects: large, colourful, fragrant flowers; nectar; sticky pollen. Amorphophallus (tallest flower). Yucca–moth mutualism.\n• Outbreeding devices: (1) non-synchrony of pollen release & stigma receptivity, (2) different positions of anther & stigma, (3) self-incompatibility, (4) unisexual flowers (castor, maize — monoecious prevents autogamy; papaya — dioecious prevents both).",
            questionFraming: "Most Repeated — 'Differentiate between autogamy, geitonogamy and xenogamy.'\n'Cleistogamous flowers are invariably autogamous. Explain.' / 'Mention one advantage and one disadvantage of cleistogamy.'\n'List any three outbreeding devices.'",
            textbookRef: "Cleistogamy gives assured seed set even without pollinators (advantage) but no genetic variation (disadvantage).",
            keyFormulas: [
              "Geitonogamy = functionally cross, genetically self",
              "Xenogamy = only genetic variation",
              "Cleistogamy = assured seed set, no variation",
              "Dioecy prevents autogamy + geitonogamy"
            ],
            isImportant: true,
            examTag: 'Important Question'
          }
        ]
      },
      {
        id: 'bio-sub-1-4',
        title: '1.4 Pollen–Pistil Interaction & Artificial Hybridisation',
        ...imp('Important Question', 'Steps of artificial hybridisation: emasculation & bagging (frequent 2M)'),
        sections: [
          {
            id: 'bio-sec-1-4',
            title: 'Compatibility, Pollen Tube & Emasculation–Bagging',
            explanation: "• Pistil recognises compatible pollen via chemical interaction of pollen and pistil; incompatible pollen is rejected.\n• Compatible pollen germinates → pollen tube grows through germ pore → stigma → style → ovule → enters via micropyle → synergid (guided by filiform apparatus).\n• Artificial hybridisation (crop improvement): only desired pollen used.\n  – Emasculation: removal of anthers from bisexual flower bud before dehiscence.\n  – Bagging: cover emasculated flower with butter-paper bag to prevent contamination.\n  – Pollinate with desired pollen when stigma becomes receptive, then re-bag.\n• Unisexual female flowers need no emasculation — only bagging.",
            questionFraming: "Most Repeated — 'Explain emasculation and bagging. Why are they important in artificial hybridisation?'\n'If you are provided with a unisexual female flower, which step will you skip?' ⟶ Emasculation.",
            textbookRef: "All events from pollen deposition on stigma to entry of pollen tube into the ovule are together called pollen-pistil interaction.",
            keyFormulas: [
              "Emasculation → Bagging → Pollination → Re-bagging",
              "Unisexual female flower: no emasculation"
            ],
            isImportant: true,
            examTag: 'Important Question'
          }
        ]
      },
      {
        id: 'bio-sub-1-5',
        title: '1.5 Double Fertilisation',
        ...imp('Important 3M/5M Question', 'Double fertilisation: syngamy + triple fusion with ploidy (one of the most repeated Bio questions)'),
        sections: [
          {
            id: 'bio-sec-1-5',
            title: 'Syngamy & Triple Fusion',
            explanation: "• Pollen tube releases 2 male gametes into a synergid.\n• Syngamy: male gamete (n) + egg (n) → Zygote (2n) → Embryo.\n• Triple fusion: male gamete (n) + 2 polar nuclei (n + n) → Primary Endosperm Nucleus (3n) → Endosperm.\n• Two fusions in one embryo sac = Double fertilisation — unique to angiosperms.\n• Central cell becomes Primary Endosperm Cell (PEC).",
            questionFraming: "Most Repeated — 'What is double fertilisation? Explain with ploidy of products.'\n'Why is it called double fertilisation?'\n'Name the product of triple fusion and give its ploidy.' ⟶ PEN, 3n.",
            textbookRef: "Synergids degenerate after the pollen tube discharges its contents.",
            keyFormulas: [
              "Syngamy: n + n → 2n (Zygote)",
              "Triple fusion: n + n + n → 3n (PEN)",
              "Unique to angiosperms"
            ],
            isImportant: true,
            examTag: 'Important 3M/5M Question'
          }
        ]
      },
      {
        id: 'bio-sub-1-6',
        title: '1.6 Post-Fertilisation: Endosperm, Embryo, Seed & Fruit',
        ...imp('Important Question', 'Endosperm before embryo, monocot embryo parts, seed dormancy, false fruit & parthenocarpy'),
        sections: [
          {
            id: 'bio-sec-1-6',
            title: 'Endosperm, Embryo, Seed & Fruit Development',
            explanation: "• Endosperm develops BEFORE embryo — to provide nutrition to the developing embryo.\n• Free-nuclear endosperm: coconut water; cellular endosperm: white coconut kernel.\n• Albuminous seeds retain endosperm (wheat, maize, castor); Non-albuminous consume it (pea, groundnut).\n• Perisperm: persistent nucellus (black pepper, beet).\n• Embryo: Zygote → Proembryo → Globular → Heart-shaped → Mature embryo.\n• Dicot embryo: embryonal axis + 2 cotyledons; epicotyl (plumule) & hypocotyl (radicle).\n• Monocot embryo: 1 cotyledon = scutellum; coleoptile covers plumule, coleorhiza covers radicle.\n• Ovule → Seed; Integuments → Seed coat; Micropyle → small pore for O₂ & water; Ovary → Fruit; Ovary wall → Pericarp.\n• False fruit: thalamus also forms fruit (apple, strawberry, cashew).\n• Parthenocarpy: fruit without fertilisation (banana) — induced by growth hormones; seedless.\n• Seed dormancy & viability: lupine (10,000 yrs), date palm (2000 yrs).",
            questionFraming: "Most Repeated — 'Why does endosperm development precede embryo development?'\n'Draw a labelled diagram of L.S. of a monocot (grass) embryo.'\n'Differentiate between albuminous and non-albuminous seeds / perisperm and pericarp.'\n'What is a false fruit? Give one example.' 'What is parthenocarpy?'",
            textbookRef: "Advantages of seeds: dormancy, dispersal, food reserve, genetic recombination & variation.",
            keyFormulas: [
              "Ovule → Seed | Ovary → Fruit",
              "Integuments → Seed coat | Ovary wall → Pericarp",
              "Perisperm = residual nucellus",
              "Scutellum = monocot cotyledon",
              "Parthenocarpy = seedless fruit, no fertilisation"
            ],
            isImportant: true,
            examTag: 'Important Question'
          }
        ]
      },
      {
        id: 'bio-sub-1-7',
        title: '1.7 Apomixis & Polyembryony',
        ...imp('Important Question', 'Apomixis definition & importance for hybrid seed industry (repeated 2M/3M)'),
        sections: [
          {
            id: 'bio-sec-1-7',
            title: 'Seeds Without Fertilisation',
            explanation: "• Apomixis: formation of seeds without fertilisation — asexual reproduction mimicking sexual reproduction (Asteraceae, grasses).\n• Ways: diploid egg cell forms embryo without fertilisation, OR nucellus cells divide and protrude into embryo sac to form embryos.\n• Polyembryony: more than one embryo in a seed (Citrus, mango) — extra embryos from nucellar cells.\n• Importance: hybrid seeds must be bought every year (hybrid traits segregate). Apomictic hybrids keep hybrid characters for many generations → farmers can reuse seeds.",
            questionFraming: "Most Repeated — 'What is apomixis? Mention its importance in agriculture / hybrid seed industry.'\n'What is polyembryony? Give an example.'\n'Nucellar embryos are genetically identical to the parent. Why?'",
            textbookRef: "Nucellar embryos are diploid and genetically identical to the mother plant (clones).",
            keyFormulas: [
              "Apomixis = seed without fertilisation",
              "Polyembryony = Citrus, Mango",
              "Apomictic hybrid = no segregation of traits"
            ],
            isImportant: true,
            examTag: 'Important Question'
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CHAPTER 2: HUMAN REPRODUCTION
  // ==========================================================================
  {
    id: 'bio-ch-2',
    number: 2,
    title: 'Human Reproduction',
    tag: 'Reproduction',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'bio-sub-2-1',
        title: '2.1 Male Reproductive System',
        ...imp('Important Diagram', 'Sperm pathway, Sertoli vs Leydig cells, accessory glands, seminiferous tubule diagram'),
        sections: [
          {
            id: 'bio-sec-2-1',
            title: 'Testes, Ducts & Accessory Glands',
            explanation: "• Testes in scrotum — kept 2–2.5 °C below body temperature for spermatogenesis.\n• Each testis: ~250 lobules, each with 1–3 seminiferous tubules.\n• Spermatogonia → sperms (lining of tubules).\n• Sertoli cells: nourish germ cells.\n• Leydig (interstitial) cells: secrete androgens (testosterone).\n• Duct pathway: Seminiferous tubules → Rete testis → Vasa efferentia → Epididymis → Vas deferens → Ejaculatory duct → Urethra → Urethral meatus.\n• Accessory glands: paired seminal vesicles, prostate, paired bulbourethral glands → seminal plasma (fructose, Ca²⁺, enzymes). Bulbourethral secretion lubricates penis.",
            questionFraming: "Most Repeated — 'Trace the path of sperms from seminiferous tubules to the outside.'\n'Write the functions of Sertoli cells and Leydig cells.'\n'Draw a labelled diagram of a sectional view of a seminiferous tubule.'",
            textbookRef: "Semen = sperms + seminal plasma.",
            keyFormulas: [
              "Tubules → Rete testis → Vasa efferentia → Epididymis → Vas deferens → Ejaculatory duct → Urethra",
              "Sertoli = nourish | Leydig = testosterone",
              "Scrotum = 2–2.5 °C lower"
            ],
            isImportant: true,
            examTag: 'Important Diagram'
          }
        ]
      },
      {
        id: 'bio-sub-2-2',
        title: '2.2 Female Reproductive System & Mammary Gland',
        sections: [
          {
            id: 'bio-sec-2-2',
            title: 'Ovary, Oviduct, Uterus & Mammary Gland',
            explanation: "• Ovaries: produce ovum + steroid hormones (estrogen, progesterone).\n• Oviduct: Infundibulum (fimbriae collect ovum) → Ampulla → Isthmus → Uterus.\n• Uterus wall: Perimetrium (outer), Myometrium (smooth muscle; strong contractions at delivery), Endometrium (glandular; cyclic changes).\n• Cervix + vagina = birth canal.\n• External genitalia: mons pubis, labia majora, labia minora, hymen, clitoris.\n• Mammary gland: 15–20 mammary lobes → alveoli → mammary tubules → mammary ducts → mammary ampulla → lactiferous duct → nipple.",
            questionFraming: "Frequent — 'Draw a labelled diagram of the human female reproductive system.'\n'Name the three layers of the uterus and state the function of the myometrium and endometrium.'\n'Trace the path of milk in the mammary gland.'",
            textbookRef: "Presence or absence of hymen is not a reliable indicator of virginity.",
            keyFormulas: [
              "Infundibulum → Ampulla → Isthmus",
              "Myometrium = contractions | Endometrium = cyclic changes",
              "Alveoli → Tubules → Ducts → Ampulla → Lactiferous duct"
            ]
          }
        ]
      },
      {
        id: 'bio-sub-2-3',
        title: '2.3 Gametogenesis: Spermatogenesis & Oogenesis',
        ...imp('Important 5M Question', 'Schematic of spermatogenesis/oogenesis with ploidy, hormonal control, sperm diagram (very high frequency)'),
        sections: [
          {
            id: 'bio-sec-2-3',
            title: 'Spermatogenesis, Oogenesis & Sperm Structure',
            explanation: "• Spermatogenesis (from puberty): Spermatogonia (2n) → Primary spermatocyte (2n) → Meiosis I → 2 Secondary spermatocytes (n) → Meiosis II → 4 Spermatids (n) → Spermiogenesis → 4 Sperms.\n• Hormones: GnRH (hypothalamus) → LH acts on Leydig cells (androgens); FSH acts on Sertoli cells (spermiogenesis factors).\n• Spermiation: release of sperms from seminiferous tubules.\n• Sperm: Head (acrosome with enzymes + nucleus), Neck, Middle piece (mitochondria — energy), Tail.\n• Oogenesis (starts in foetal life): Oogonia (2n) → Primary oocyte (2n, arrested in Prophase I) → at puberty Meiosis I completes in Graafian follicle → Secondary oocyte (n) + 1st polar body.\n• Meiosis II completes only after sperm entry → ovum + 2nd polar body.\n• Follicles: Primary → Secondary → Tertiary (antrum) → Graafian follicle.",
            questionFraming: "Most Repeated — 'Draw a schematic representation of spermatogenesis / oogenesis with ploidy.'\n'Differentiate between spermatogenesis and oogenesis (time, number of gametes, meiosis completion).'\n'Draw a labelled diagram of a human sperm.' 'Role of LH and FSH in spermatogenesis.'",
            textbookRef: "1 primary spermatocyte → 4 sperms; 1 primary oocyte → 1 ovum + 2–3 polar bodies.",
            keyFormulas: [
              "1 primary spermatocyte → 4 sperms",
              "1 primary oocyte → 1 ovum + polar bodies",
              "LH → Leydig | FSH → Sertoli",
              "Meiosis II of oocyte completes at fertilisation"
            ],
            isImportant: true,
            examTag: 'Important 5M Question'
          }
        ]
      },
      {
        id: 'bio-sub-2-4',
        title: '2.4 Menstrual Cycle',
        ...imp('Important 5M Question', 'Phases of menstrual cycle with hormone graph, LH surge, corpus luteum (very high frequency)'),
        sections: [
          {
            id: 'bio-sec-2-4',
            title: 'Phases & Hormonal Control',
            explanation: "• Menarche = first menstruation; Menopause ≈ 50 yrs. Average cycle = 28/29 days.\n• Menstrual phase (Day 1–5): endometrium breaks down (no fertilisation, progesterone falls).\n• Follicular / Proliferative phase (Day 6–13): FSH & LH ↑ → follicle grows → estrogen ↑ → endometrium regenerates.\n• Ovulatory phase (Day 14): LH surge (peak) → Graafian follicle ruptures → ovulation.\n• Luteal / Secretory phase (Day 15–28): ruptured follicle → corpus luteum → progesterone ↑ → maintains endometrium.\n• No fertilisation → corpus luteum degenerates → progesterone ↓ → menstruation.\n• Pregnancy → corpus luteum maintained → no menstruation.",
            questionFraming: "Most Repeated — 'Describe the events of the menstrual cycle with hormonal regulation.'\n'What is LH surge? What does it cause?'\n'Why does menstruation not occur during pregnancy?'\n'Draw a graph showing levels of ovarian & pituitary hormones in the cycle.'",
            textbookRef: "Lack of menstruation may indicate pregnancy, stress or poor health.",
            keyFormulas: [
              "Day 1–5 Menstrual | 6–13 Follicular | 14 Ovulation | 15–28 Luteal",
              "Estrogen → proliferation | Progesterone → maintenance",
              "LH surge → Ovulation",
              "Corpus luteum → Progesterone"
            ],
            isImportant: true,
            examTag: 'Important 5M Question'
          }
        ]
      },
      {
        id: 'bio-sub-2-5',
        title: '2.5 Fertilisation & Implantation',
        ...imp('Important Question', 'Site of fertilisation, block to polyspermy, blastocyst & implantation (repeated 2M/3M)'),
        sections: [
          {
            id: 'bio-sec-2-5',
            title: 'Fertilisation, Cleavage & Implantation',
            explanation: "• Fertilisation occurs in the ampullary region (ampullary-isthmic junction) of the oviduct.\n• Sperm contacts zona pellucida → induces changes in membrane → blocks entry of additional sperms (prevents polyspermy).\n• Acrosome enzymes help sperm enter cytoplasm → secondary oocyte completes meiosis II → zygote (2n).\n• Sex of baby is decided by the father's sperm (X or Y).\n• Cleavage: Zygote → 2, 4, 8, 16 blastomeres → Morula (8–16 cells) → Blastocyst.\n• Blastocyst: outer trophoblast + inner cell mass.\n• Implantation: trophoblast attaches to endometrium; inner cell mass becomes the embryo.",
            questionFraming: "Most Repeated — 'Where does fertilisation occur in humans? How is polyspermy prevented?'\n'Draw a labelled diagram of a human blastocyst.'\n'What is implantation?' 'Who determines the sex of the baby? Explain.'",
            textbookRef: "Only an ovum released at the time can be fertilised if sperms reach the ampullary region simultaneously.",
            keyFormulas: [
              "Site: Ampullary-isthmic junction",
              "Zona pellucida blocks polyspermy",
              "Morula → Blastocyst (Trophoblast + Inner cell mass)",
              "Trophoblast → implantation | ICM → embryo"
            ],
            isImportant: true,
            examTag: 'Important Question'
          }
        ]
      },
      {
        id: 'bio-sub-2-6',
        title: '2.6 Pregnancy, Placenta & Embryonic Development',
        ...imp('Important Question', 'Placenta as endocrine organ (hCG, hPL), germ layers, stem cells'),
        sections: [
          {
            id: 'bio-sec-2-6',
            title: 'Placenta, Hormones & Development Milestones',
            explanation: "• Placenta: chorionic villi + uterine tissue; connected to embryo by umbilical cord.\n• Functions: supply O₂ & nutrients, remove CO₂ & wastes, endocrine organ.\n• Placental hormones: hCG, hPL, estrogens, progestogens. Relaxin from ovary.\n• hCG, hPL, relaxin produced ONLY during pregnancy.\n• Inner cell mass → ectoderm, mesoderm, endoderm; contains stem cells (can form all tissues/organs).\n• Milestones: Heart — end of 1st month; Limbs & digits — end of 2nd month; Major organs + external genitalia — end of 1st trimester (12 weeks); First movements & hair — 5th month; Eyelids separate & eyelashes — end of 2nd trimester (24 weeks).\n• Gestation ≈ 9 months.",
            questionFraming: "Most Repeated — 'Explain the role of placenta as an endocrine organ.'\n'Name the hormones produced only during pregnancy.'\n'Mention the developmental changes at the end of 1st and 2nd trimester.'",
            textbookRef: "Detection of hCG in urine is the basis of pregnancy test kits.",
            keyFormulas: [
              "Only in pregnancy: hCG, hPL, Relaxin",
              "Heart: 1st month | Limbs: 2nd month",
              "1st trimester: organs | 5th month: movement & hair"
            ],
            isImportant: true,
            examTag: 'Important Question'
          }
        ]
      },
      {
        id: 'bio-sub-2-7',
        title: '2.7 Parturition & Lactation',
        sections: [
          {
            id: 'bio-sec-2-7',
            title: 'Foetal Ejection Reflex, Oxytocin & Colostrum',
            explanation: "• Parturition: delivery of foetus, induced by a complex neuroendocrine mechanism.\n• Signals from fully developed foetus + placenta → mild uterine contractions = foetal ejection reflex.\n• Reflex triggers oxytocin release from maternal pituitary → stronger uterine contractions → more oxytocin (positive feedback).\n• Lactation: milk production towards end of pregnancy.\n• Colostrum: milk of first few days; rich in antibodies (IgA) → gives passive immunity to newborn.",
            questionFraming: "Frequent — 'Explain the role of oxytocin in parturition (foetal ejection reflex).'\n'Why is breast-feeding recommended during the initial period? / What is colostrum?'",
            textbookRef: "Placenta is expelled after the baby is delivered.",
            keyFormulas: [
              "Foetal ejection reflex → Oxytocin → contractions",
              "Colostrum = IgA antibodies = passive immunity"
            ]
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CHAPTER 3: REPRODUCTIVE HEALTH
  // ==========================================================================
  {
    id: 'bio-ch-3',
    number: 3,
    title: 'Reproductive Health',
    tag: 'Reproduction',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'bio-sub-3-1',
        title: '3.1 Reproductive Health: Problems & Strategies',
        sections: [
          {
            id: 'bio-sec-3-1',
            title: 'RCH Programmes, Amniocentesis Ban & Population',
            explanation: "• Reproductive health (WHO): total well-being in physical, emotional, behavioural & social aspects of reproduction.\n• India was among the first countries to start a national family planning programme (1951); now RCH (Reproductive and Child Health Care) programmes.\n• Strategies: sex education in schools, awareness of STIs, birth control, care of pregnant mothers, post-natal care, breast-feeding.\n• Statutory ban on amniocentesis for sex determination — to curb female foeticide.\n• Population explosion causes: decline in death rate, MMR & IMR; increase in people of reproductive age.\n• Raised marriageable age: females 18, males 21 (now proposed 21 for females).",
            questionFraming: "Frequent — 'Why is there a statutory ban on amniocentesis?' ⟶ Misused for sex determination → female foeticide.\n'Suggest any two measures to make people aware of reproductive health.'\n'Give reasons for population explosion in India.'",
            textbookRef: "Amniocentesis is used legitimately to detect genetic disorders like Down's syndrome in the foetus.",
            keyFormulas: [
              "Amniocentesis = foetal chromosome test via amniotic fluid",
              "Ban → prevent female foeticide",
              "↓ MMR + ↓ IMR → population explosion"
            ]
          }
        ]
      },
      {
        id: 'bio-sub-3-2',
        title: '3.2 Contraceptive Methods',
        ...imp('Important 3M/5M Question', 'IUDs (Cu-T action), oral pills & Saheli, ideal contraceptive features (most repeated Ch 3 question)'),
        sections: [
          {
            id: 'bio-sec-3-2',
            title: 'Natural, Barrier, IUDs, Pills & Surgical Methods',
            explanation: "• Ideal contraceptive: user-friendly, easily available, effective, reversible, no/least side effects, doesn't interfere with sexual drive.\n• Natural: periodic abstinence (day 10–17), withdrawal (coitus interruptus), lactational amenorrhea (up to 6 months after parturition).\n• Barriers: condoms (also protect from STIs/AIDS), diaphragms, cervical caps, vaults + spermicidal creams.\n• IUDs:\n  – Non-medicated: Lippes loop\n  – Copper-releasing: CuT, Cu7, Multiload 375 → Cu ions suppress sperm motility & fertilising capacity\n  – Hormone-releasing: Progestasert, LNG-20 → uterus unsuitable for implantation, cervix hostile to sperm\n  – IUDs increase phagocytosis of sperms in uterus; ideal for spacing children.\n• Oral pills (progestogen ± estrogen): inhibit ovulation & implantation, thicken cervical mucus. Saheli (CDRI Lucknow): non-steroidal, once a week.\n• Injections/implants: progestogens under skin.\n• Emergency contraception: within 72 hours of coitus (pills/IUD).\n• Surgical (terminal): Vasectomy (vas deferens cut & tied), Tubectomy (fallopian tube cut & tied).",
            questionFraming: "Most Repeated — 'How does Cu-T act as an effective contraceptive?'\n'Explain the mode of action of oral contraceptive pills. What is Saheli?'\n'List the features of an ideal contraceptive.'\n'Why is lactational amenorrhea a natural contraceptive? What is its limitation?'\n'Name the surgical methods of sterilisation in males and females.'",
            textbookRef: "Contraceptives are NOT regular requirements; they have side effects like nausea, abdominal pain, breakthrough bleeding, irregular bleeding or even breast cancer.",
            keyFormulas: [
              "Cu-IUD: Cu ions ↓ sperm motility",
              "Hormonal IUD: uterus unsuitable for implantation",
              "Pills: inhibit ovulation + implantation",
              "Saheli: non-steroidal, weekly (CDRI)",
              "Emergency: within 72 h"
            ],
            isImportant: true,
            examTag: 'Important 3M/5M Question'
          }
        ]
      },
      {
        id: 'bio-sub-3-3',
        title: '3.3 Medical Termination of Pregnancy (MTP)',
        sections: [
          {
            id: 'bio-sec-3-3',
            title: 'MTP Act & Safety',
            explanation: "• MTP: intentional or voluntary termination of pregnancy before full term.\n• MTP Amendment Act 2017: allowed up to 12 weeks on opinion of 1 doctor; 12–24 weeks requires 2 registered medical practitioners.\n• Grounds: risk to mother's life, foetal abnormalities.\n• Safest during the first trimester (up to 12 weeks).\n• Misuse: illegal female foeticide; unsafe MTPs by unqualified quacks are dangerous.",
            questionFraming: "Frequent — 'Why is MTP considered safe only during the first trimester?'\n'Mention any two reasons why MTP is advised. Why has the government legalised MTP?'",
            textbookRef: "Nearly 45–50 million MTPs are performed worldwide every year (1/5th of total conceived pregnancies).",
            keyFormulas: ["MTP safe up to 12 weeks", "12–24 weeks: 2 doctors' opinion"]
          }
        ]
      },
      {
        id: 'bio-sub-3-4',
        title: '3.4 Sexually Transmitted Infections (STIs)',
        sections: [
          {
            id: 'bio-sec-3-4',
            title: 'Examples, Complications & Prevention',
            explanation: "• STIs / VD / RTI: gonorrhoea, syphilis, genital herpes, chlamydiasis, genital warts, trichomoniasis, hepatitis-B, HIV/AIDS.\n• Hepatitis-B, genital herpes & HIV are NOT completely curable.\n• Hep-B & HIV also spread via sharing needles, transfusion, infected mother → foetus.\n• High-risk age group: 15–24 years.\n• Complications if untreated: PID, abortions, still births, ectopic pregnancy, infertility, cancer of reproductive tract.\n• Prevention: avoid unknown/multiple partners, always use condoms, consult a doctor early.",
            questionFraming: "Frequent — 'Name any two STIs that are not completely curable.'\n'Suggest preventive measures against STIs.'\n'Mention two complications of untreated STIs.'",
            textbookRef: "Early detection & treatment are key; symptoms are often absent or mild in early stages.",
            keyFormulas: ["Incurable: Hep-B, Genital herpes, HIV", "High-risk age: 15–24 years"]
          }
        ]
      },
      {
        id: 'bio-sub-3-5',
        title: '3.5 Infertility & Assisted Reproductive Technologies',
        ...imp('Important 3M Question', 'IVF, ZIFT, IUT, GIFT, ICSI, AI/IUI expansions & differences (very high frequency)'),
        sections: [
          {
            id: 'bio-sec-3-5',
            title: 'IVF-ET, ZIFT, IUT, GIFT, ICSI & AI',
            explanation: "• Infertility: inability to conceive despite unprotected sexual cohabitation (causes: physical, congenital, diseases, drugs, immunological, psychological).\n• IVF-ET ('test-tube baby'): fertilisation outside body + embryo transfer.\n• ZIFT: zygote or early embryo (up to 8 blastomeres) → fallopian tube.\n• IUT: embryo with more than 8 blastomeres → uterus.\n• GIFT: ovum from donor → fallopian tube of female who cannot produce ova but can provide environment.\n• ICSI: sperm directly injected into ovum (in lab).\n• AI / IUI: semen from husband/donor introduced into vagina or uterus — for low sperm count or inability to inseminate.\n• Embryo formed by in-vivo fertilisation can also be transferred.",
            questionFraming: "Most Repeated — 'Expand and explain: ZIFT, GIFT, IUT, ICSI.'\n'Differentiate between ZIFT and GIFT.'\n'Suggest a technique for a couple where the male has very low sperm count.' ⟶ AI / IUI or ICSI.\n'Why is ART not widely adopted in India?' ⟶ Expensive, emotional/social/legal issues; adoption is an alternative.",
            textbookRef: "Adoption of orphaned and destitute children is suggested as an alternative to ART.",
            keyFormulas: [
              "ZIFT: ≤ 8 blastomeres → fallopian tube",
              "IUT: > 8 blastomeres → uterus",
              "GIFT: ovum → fallopian tube",
              "ICSI: sperm injected into ovum",
              "AI/IUI: low sperm count"
            ],
            isImportant: true,
            examTag: 'Important 3M Question'
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CHAPTER 4: PRINCIPLES OF INHERITANCE AND VARIATION
  // ==========================================================================
  {
    id: 'bio-ch-4',
    number: 4,
    title: 'Principles of Inheritance and Variation',
    tag: 'Genetics',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'bio-sub-4-1',
        title: "4.1 Mendel's Monohybrid Cross, Dominance & Segregation",
        ...imp('Important 3M/5M Question', 'Monohybrid cross, law of segregation, test cross with Punnett square (very high frequency)'),
        sections: [
          {
            id: 'bio-sec-4-1',
            title: 'Monohybrid Cross, Laws & Test Cross',
            explanation: "• Mendel (1856–63) used garden pea: 7 pairs of contrasting traits, true-breeding lines, large sample size, statistical analysis.\n• Monohybrid: TT × tt → F₁ all Tt (tall) → F₂ 3 tall : 1 dwarf (phenotype); 1 TT : 2 Tt : 1 tt (genotype).\n• Law of Dominance: in a heterozygote only one factor (dominant) expresses; characters controlled by discrete units (factors) in pairs.\n• Law of Segregation: alleles do not blend; they separate during gamete formation so each gamete gets one allele.\n• Test cross: organism with dominant phenotype × homozygous recessive → reveals genotype.\n  – Tt × tt → 1 : 1 (heterozygous); TT × tt → all dominant (homozygous).",
            questionFraming: "Most Repeated — 'State and explain the law of segregation with a monohybrid cross.'\n'What is a test cross? How can it determine the genotype of a tall pea plant?'\n'Why did Mendel select the pea plant?'",
            textbookRef: "Punnett square was developed by Reginald C. Punnett.",
            keyFormulas: [
              "Monohybrid F₂: 3 : 1 (pheno), 1 : 2 : 1 (geno)",
              "Test cross Tt × tt → 1 : 1",
              "Segregation = purity of gametes"
            ],
            isImportant: true,
            examTag: 'Important 3M/5M Question'
          }
        ]
      },
      {
        id: 'bio-sub-4-2',
        title: '4.2 Incomplete Dominance, Codominance & Multiple Alleles',
        ...imp('Important Question', 'Snapdragon 1:2:1 cross, ABO blood group codominance & multiple alleles (frequent cross question)'),
        sections: [
          {
            id: 'bio-sec-4-2',
            title: 'Snapdragon, ABO Blood Groups & Starch Grain Size',
            explanation: "• Incomplete dominance: F₁ is intermediate. Snapdragon (Antirrhinum): RR (red) × rr (white) → Rr (pink). F₂: 1 red : 2 pink : 1 white — phenotypic = genotypic ratio.\n• Codominance: both alleles express fully in heterozygote. ABO blood group: alleles Iᴬ, Iᴮ, i. Iᴬ & Iᴮ codominant (AB group); both dominant over i.\n• Multiple alleles: more than 2 alleles for one gene in a population (ABO — 3 alleles). An individual carries only 2.\n• ABO: 6 genotypes, 4 phenotypes.\n• Pea seed shape: starch grain size shows incomplete dominance (Bb = intermediate) though seed shape shows complete dominance.",
            questionFraming: "Most Repeated — 'Explain incomplete dominance with a cross in snapdragon. Why are phenotypic & genotypic ratios same?'\n'Explain codominance with ABO blood groups. How many genotypes and phenotypes?'\n'A child has blood group O; parents are A and B. Work out the parents' genotypes.' ⟶ Iᴬi × Iᴮi.",
            textbookRef: "Dominance is not autonomous to a gene — it depends on the gene product and the phenotype considered.",
            keyFormulas: [
              "Incomplete dominance F₂: 1 : 2 : 1 (pheno = geno)",
              "ABO: 3 alleles, 6 genotypes, 4 phenotypes",
              "Iᴬ = Iᴮ > i"
            ],
            isImportant: true,
            examTag: 'Important Question'
          }
        ]
      },
      {
        id: 'bio-sub-4-3',
        title: '4.3 Dihybrid Cross & Independent Assortment',
        ...imp('Important 5M Question', 'Dihybrid cross RrYy × RrYy, 9:3:3:1, law of independent assortment'),
        sections: [
          {
            id: 'bio-sec-4-3',
            title: 'Dihybrid Cross & 9 : 3 : 3 : 1',
            explanation: "• Cross: RRYY (round yellow) × rryy (wrinkled green) → F₁ RrYy (round yellow).\n• F₁ gametes: RY, Ry, rY, ry (4 types, equal frequency).\n• F₂ phenotypic ratio: 9 Round Yellow : 3 Round Green : 3 Wrinkled Yellow : 1 Wrinkled Green.\n• Law of Independent Assortment: when 2 pairs of traits combine in a hybrid, segregation of one pair is independent of the other.\n• Dihybrid test cross: RrYy × rryy → 1 : 1 : 1 : 1.",
            questionFraming: "Most Repeated — 'State the law of independent assortment. Explain with a dihybrid cross (Punnett square).'\n'Work out the probability of rryy in F₂.' ⟶ 1/16.",
            textbookRef: "Independent assortment is valid only for genes on different chromosomes (or far apart on the same chromosome).",
            keyFormulas: [
              "Dihybrid F₂: 9 : 3 : 3 : 1",
              "Dihybrid test cross: 1 : 1 : 1 : 1",
              "F₁ gametes: RY, Ry, rY, ry"
            ],
            isImportant: true,
            examTag: 'Important 5M Question'
          }
        ]
      },
      {
        id: 'bio-sub-4-4',
        title: '4.4 Chromosomal Theory, Linkage & Recombination',
        ...imp('Important Question', "Morgan's Drosophila experiments, why Drosophila, linkage vs recombination (repeated 3M)"),
        sections: [
          {
            id: 'bio-sec-4-4',
            title: 'Sutton–Boveri, Morgan & Genetic Maps',
            explanation: "• Chromosomal theory (Sutton & Boveri): genes are on chromosomes; chromosomes and genes occur in pairs and segregate & assort independently.\n• Morgan chose Drosophila: grows on simple synthetic medium, 2-week life cycle, many progeny per mating, clear sexual dimorphism, many visible hereditary variations.\n• Linkage: physical association of genes on a chromosome → parental combinations more frequent.\n• Recombination: generation of non-parental gene combinations (crossing over).\n• Tightly linked genes (white–yellow) → low recombination (1.3%); loosely linked (white–miniature) → higher (37.2%).\n• Sturtevant: recombination frequency used as a measure of distance → genetic maps.",
            questionFraming: "Most Repeated — 'Why did Morgan choose Drosophila for his experiments? (any 4 reasons)'\n'Differentiate between linkage and recombination.'\n'How did Sturtevant use recombination frequency?'",
            textbookRef: "Morgan coined the terms linkage and recombination.",
            keyFormulas: [
              "Tight linkage → low recombination",
              "White–yellow: 1.3% | White–miniature: 37.2%",
              "Recombination frequency ∝ gene distance"
            ],
            isImportant: true,
            examTag: 'Important Question'
          }
        ]
      },
      {
        id: 'bio-sub-4-5',
        title: '4.5 Polygenic Inheritance & Pleiotropy',
        sections: [
          {
            id: 'bio-sec-4-5',
            title: 'Skin Colour & Phenylketonuria',
            explanation: "• Polygenic inheritance: trait controlled by 3 or more genes; each allele adds an effect (additive); environment also influences. Example: human skin colour (AABBCC darkest, aabbcc lightest), height.\n• Shows a continuous range of phenotypes (bell-shaped distribution).\n• Pleiotropy: a single gene affects multiple phenotypic traits. Example: Phenylketonuria — mutation in phenylalanine hydroxylase gene → mental retardation + reduced hair & skin pigmentation.\n• Starch synthesis gene in pea also pleiotropic (seed shape + starch grain size).",
            questionFraming: "Frequent — 'What is polygenic inheritance? Explain with human skin colour.'\n'What is pleiotropy? Give an example.'\n'Differentiate between polygenic inheritance and pleiotropy.'",
            textbookRef: "Polygenic traits — many genes, one trait; Pleiotropy — one gene, many traits.",
            keyFormulas: ["Polygenic: many genes → 1 trait", "Pleiotropy: 1 gene → many traits (PKU)"]
          }
        ]
      },
      {
        id: 'bio-sub-4-6',
        title: '4.6 Sex Determination',
        ...imp('Important Question', 'XX-XY, XX-XO, ZW-ZZ & haplodiploidy in honeybee (frequent 3M)'),
        sections: [
          {
            id: 'bio-sec-4-6',
            title: 'XY, XO, ZW Systems & Honeybee',
            explanation: "• Henking discovered the X body (in insects).\n• Male heterogamety:\n  – XX–XO: grasshopper (female XX, male XO)\n  – XX–XY: humans, Drosophila\n• Female heterogamety: ZW–ZZ in birds (female ZW, male ZZ).\n• Humans: 22 pairs autosomes + XX (female) / XY (male). Male produces 50% X + 50% Y sperms → father decides sex; 50% chance of male/female each time.\n• Honeybee (haplodiploid): fertilised egg (2n = 32) → female (queen/worker); unfertilised egg (n = 16) → male drone by parthenogenesis. Males produce sperms by mitosis; males have no father and cannot have sons, but have a grandfather and grandsons.",
            questionFraming: "Most Repeated — 'Explain sex determination in honeybee.'\n'Differentiate between male heterogamety and female heterogamety with examples.'\n'Is it correct to blame the mother for the birth of a female child? Explain.'",
            textbookRef: "Sex of the child is determined by the type of sperm (X or Y) that fertilises the ovum.",
            keyFormulas: [
              "Grasshopper: XX–XO | Humans: XX–XY | Birds: ZW–ZZ",
              "Honeybee: 2n = 32 female, n = 16 drone",
              "Drone sperms by mitosis"
            ],
            isImportant: true,
            examTag: 'Important Question'
          }
        ]
      },
      {
        id: 'bio-sub-4-7',
        title: '4.7 Mutation & Pedigree Analysis',
        sections: [
          {
            id: 'bio-sec-4-7',
            title: 'Point Mutations, Frameshift & Pedigree Symbols',
            explanation: "• Mutation: alteration in DNA sequence → change in genotype & phenotype.\n• Chromosomal aberrations: deletion, duplication, inversion, translocation (common in cancer cells).\n• Point mutation: change in single base pair (sickle cell anaemia).\n• Frameshift: insertion/deletion of bases shifting the reading frame.\n• Mutagens: UV radiation, chemicals.\n• Pedigree analysis: tracing a trait across generations using a family tree.\n  – Square = male, circle = female, shaded = affected, half-shaded/dot = carrier, double line = consanguineous mating.",
            questionFraming: "Frequent — 'Study the given pedigree and identify whether the trait is dominant/recessive, autosomal/sex-linked.'\n'Differentiate between point mutation and frameshift mutation.'",
            textbookRef: "Pedigree analysis is used because controlled crosses cannot be performed in humans.",
            keyFormulas: ["Point mutation: 1 base change", "Frameshift: insertion/deletion"]
          }
        ]
      },
      {
        id: 'bio-sub-4-8',
        title: '4.8 Mendelian Disorders',
        ...imp('Important 3M Question', 'Haemophilia, colour blindness, sickle-cell anaemia (GAG→GUG), PKU, thalassemia (very high frequency)'),
        sections: [
          {
            id: 'bio-sec-4-8',
            title: 'Haemophilia, Colour Blindness, Sickle-Cell, PKU, Thalassemia',
            explanation: "• Haemophilia: X-linked recessive; defect in a clotting-factor protein → non-stop bleeding from a small cut. Carrier mother passes to sons; females rarely affected (needs carrier mother + haemophilic father). Queen Victoria's family.\n• Colour blindness: X-linked recessive; defect in red/green cone → 8% males, 0.4% females.\n• Sickle-cell anaemia: autosomal recessive; Glu → Val at 6th position of β-globin due to GAG → GUG. HbˢHbˢ affected; HbᴬHbˢ carrier. RBCs become sickle-shaped under low O₂.\n• Phenylketonuria: autosomal recessive; lack of phenylalanine hydroxylase → phenylpyruvic acid accumulates → mental retardation.\n• Thalassemia: autosomal recessive; reduced synthesis of α or β globin chains (α: chromosome 16, HBA1 & HBA2; β: chromosome 11, HBB) → anaemia. Quantitative problem (vs sickle cell = qualitative).",
            questionFraming: "Most Repeated — 'Explain the molecular basis of sickle-cell anaemia.'\n'Why are human females rarely haemophilic?' / 'A haemophilic man marries a normal woman — show progeny with a cross.'\n'Differentiate between sickle-cell anaemia and thalassemia.'\n'Colour blindness is more common in males. Why?'",
            textbookRef: "Sickle-cell anaemia is a qualitative problem (incorrectly functioning globin); thalassemia is quantitative (too few globin molecules).",
            keyFormulas: [
              "Sickle cell: GAG → GUG, Glu → Val (6th, β-chain)",
              "Haemophilia & colour blindness: X-linked recessive",
              "PKU, Sickle cell, Thalassemia: autosomal recessive",
              "α-thal: Chr 16 | β-thal: Chr 11"
            ],
            isImportant: true,
            examTag: 'Important 3M Question'
          }
        ]
      },
      {
        id: 'bio-sub-4-9',
        title: '4.9 Chromosomal Disorders',
        ...imp('Important Question', "Down's, Klinefelter's & Turner's syndrome karyotype and symptoms (frequent 2M/3M)"),
        sections: [
          {
            id: 'bio-sec-4-9',
            title: "Aneuploidy: Down's, Klinefelter's, Turner's",
            explanation: "• Aneuploidy: gain/loss of chromosomes due to failure of segregation (non-disjunction) of chromatids in cell division.\n• Polyploidy: increase in whole chromosome sets (failure of cytokinesis) — common in plants.\n• Down's syndrome: Trisomy 21 (47) — short stature, small round head, furrowed tongue, partially open mouth, palm crease, retarded mental development. (Langdon Down, 1866)\n• Klinefelter's: 47, XXY — male, sterile, gynaecomastia (breast development), overall masculine development.\n• Turner's: 45, X0 — female, sterile (rudimentary ovaries), lack of secondary sexual characters.",
            questionFraming: "Most Repeated — 'Write the karyotype and any two symptoms of Down's / Klinefelter's / Turner's syndrome.'\n'What is aneuploidy? How is it different from polyploidy?'",
            textbookRef: "Non-disjunction during meiosis gives gametes with extra or missing chromosomes.",
            keyFormulas: [
              "Down's: 47, +21",
              "Klinefelter's: 47, XXY (male)",
              "Turner's: 45, X0 (female)"
            ],
            isImportant: true,
            examTag: 'Important Question'
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CHAPTER 5: MOLECULAR BASIS OF INHERITANCE
  // ==========================================================================
  {
    id: 'bio-ch-5',
    number: 5,
    title: 'Molecular Basis of Inheritance',
    tag: 'Genetics',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'bio-sub-5-1',
        title: '5.1 Structure of DNA & Double Helix',
        ...imp('Important Question', "Watson–Crick model features, Chargaff's rule numericals, nucleoside vs nucleotide (frequent)"),
        sections: [
          {
            id: 'bio-sec-5-1',
            title: 'Polynucleotide Chain & Watson–Crick Model',
            explanation: "• Nucleoside = nitrogenous base + pentose sugar (N-glycosidic bond). Nucleotide = nucleoside + phosphate (phosphoester bond).\n• Nucleotides join by 3'–5' phosphodiester bonds.\n• Purines: A, G | Pyrimidines: C, T (DNA), U (RNA).\n• Watson & Crick (1953), based on X-ray data of Wilkins & Franklin:\n  – Two antiparallel polynucleotide chains (5'→3' and 3'→5').\n  – Sugar-phosphate backbone outside; bases inside.\n  – A=T (2 H-bonds), G≡C (3 H-bonds); purine always pairs with pyrimidine → uniform width.\n  – Right-handed helix; pitch 3.4 nm; 10 bp per turn; 0.34 nm between bp.\n• Chargaff's rule: A = T, G = C → (A + G)/(T + C) = 1.\n• Length of DNA = total bp × 0.34 × 10⁻⁹ m (human: 6.6 × 10⁹ bp → ~2.2 m).",
            questionFraming: "Most Repeated — 'List the salient features of the Watson–Crick double helix model.'\n'A DNA has 20% cytosine. Calculate % of adenine.' ⟶ 30%.\n'Differentiate between nucleoside and nucleotide.'\n'Draw a labelled diagram of a dinucleotide / polynucleotide chain.'",
            textbookRef: "φ×174 has 5386 nucleotides; λ phage 48502 bp; E. coli 4.6 × 10⁶ bp; human haploid 3.3 × 10⁹ bp.",
            keyFormulas: [
              "A = T (2 H-bonds) | G ≡ C (3 H-bonds)",
              "(A + G)/(T + C) = 1",
              "Pitch 3.4 nm, 10 bp/turn, 0.34 nm/bp",
              "Length = bp × 0.34 nm"
            ],
            isImportant: true,
            examTag: 'Important Question'
          }
        ]
      },
      {
        id: 'bio-sub-5-2',
        title: '5.2 Packaging of DNA Helix',
        sections: [
          {
            id: 'bio-sec-5-2',
            title: 'Nucleosome, Euchromatin & Heterochromatin',
            explanation: "• Prokaryotes: DNA held with positively charged proteins in the nucleoid.\n• Eukaryotes: histones (rich in lysine & arginine — basic, +ve) bind negatively charged DNA.\n• Histone octamer (2 each of H2A, H2B, H3, H4) + ~200 bp DNA = Nucleosome.\n• Nucleosomes = 'beads-on-string' under EM → chromatin fibres → chromosomes at metaphase.\n• Higher packaging needs Non-Histone Chromosomal (NHC) proteins.\n• Euchromatin: loosely packed, light-stained, transcriptionally active.\n• Heterochromatin: densely packed, dark-stained, inactive.",
            questionFraming: "Frequent — 'Describe the structure of a nucleosome.'\n'Differentiate between euchromatin and heterochromatin.'\n'Why are histones positively charged?' ⟶ Rich in lysine & arginine.",
            textbookRef: "H1 histone binds linker DNA between nucleosomes.",
            keyFormulas: [
              "Nucleosome = histone octamer + ~200 bp DNA",
              "Histones: lysine + arginine (+ve)",
              "Euchromatin = active | Heterochromatin = inactive"
            ]
          }
        ]
      },
      {
        id: 'bio-sub-5-3',
        title: '5.3 Search for Genetic Material',
        ...imp('Important 5M Question', 'Griffith transformation & Hershey–Chase experiment (one of the most repeated 5M questions)'),
        sections: [
          {
            id: 'bio-sec-5-3',
            title: 'Griffith, Avery–MacLeod–McCarty & Hershey–Chase',
            explanation: "• Griffith (1928), Streptococcus pneumoniae:\n  – S-strain (capsule, smooth) → mice die; R-strain (no capsule) → mice live.\n  – Heat-killed S → mice live; Heat-killed S + live R → mice die.\n  – R-strain transformed by a 'transforming principle' from dead S.\n• Avery, MacLeod & McCarty: DNA alone transformed R to S; proteases & RNases didn't stop it, DNase did → DNA is the transforming principle.\n• Hershey & Chase (1952), bacteriophage T2:\n  – ³²P labels DNA; ³⁵S labels protein.\n  – Infection → Blending → Centrifugation.\n  – ³²P found inside bacteria (pellet); ³⁵S in supernatant → DNA is the genetic material.",
            questionFraming: "Most Repeated — 'Describe the Hershey–Chase experiment. What did it prove?'\n'Describe Griffith's experiment. What was the conclusion?'\n'Why was ³⁵S used for protein and ³²P for DNA?' ⟶ DNA has no S; protein has no P.",
            textbookRef: "Biochemical nature of the transforming principle was not defined by Griffith.",
            keyFormulas: [
              "Heat-killed S + live R → mice die (transformation)",
              "³²P = DNA | ³⁵S = protein",
              "Infection → Blending → Centrifugation"
            ],
            isImportant: true,
            examTag: 'Important 5M Question'
          }
        ]
      },
      {
        id: 'bio-sub-5-4',
        title: '5.4 Properties of Genetic Material & RNA World',
        sections: [
          {
            id: 'bio-sec-5-4',
            title: 'Why DNA Is a Better Genetic Material',
            explanation: "• Criteria for genetic material: replicate; chemically & structurally stable; allow slow changes (mutation) for evolution; express itself as Mendelian characters.\n• DNA more stable than RNA: 2'-OH in RNA makes it reactive/labile; thymine (5-methyl uracil) adds stability; double strand.\n• RNA mutates faster → viruses with RNA genome evolve fast.\n• RNA was the first genetic material (RNA world): acts as genetic material and catalyst (ribozymes).\n• DNA evolved from RNA with chemical modifications for stability.",
            questionFraming: "Most Repeated — 'Why is DNA a better genetic material than RNA?'\n'Give reasons why RNA is believed to be the first genetic material.'\n'List four criteria a molecule must fulfil to act as genetic material.'",
            textbookRef: "Protein synthesis needs RNA; DNA is preferred for storage, RNA for transmission/expression.",
            keyFormulas: ["RNA: 2'-OH → reactive", "DNA: Thymine + double strand → stable", "RNA world: genetic material + catalyst"]
          }
        ]
      },
      {
        id: 'bio-sub-5-5',
        title: '5.5 DNA Replication',
        ...imp('Important 5M Question', 'Meselson–Stahl experiment, replication fork, leading/lagging strand, Okazaki fragments (very high frequency)'),
        sections: [
          {
            id: 'bio-sec-5-5',
            title: 'Semiconservative Replication & Machinery',
            explanation: "• Semiconservative: each daughter DNA has one parental + one new strand (Watson–Crick proposal).\n• Meselson & Stahl (1958): E. coli in ¹⁵NH₄Cl → transferred to ¹⁴NH₄Cl → CsCl density gradient centrifugation.\n  – 20 min (1st gen): all hybrid (¹⁵N¹⁴N) — intermediate band.\n  – 40 min (2nd gen): 50% hybrid + 50% light.\n• Taylor proved the same in Vicia faba using radioactive thymidine.\n• Machinery: DNA-dependent DNA polymerase (polymerises only 5'→3'), deoxyribonucleoside triphosphates (substrate + energy).\n• Origin of replication → replication fork.\n• Leading strand: continuous (template 3'→5'). Lagging strand: discontinuous Okazaki fragments (template 5'→3'), joined by DNA ligase.\n• Occurs in S-phase of the cell cycle.",
            questionFraming: "Most Repeated — 'Describe the Meselson–Stahl experiment. What would be the result after 60 minutes?' ⟶ 25% hybrid + 75% light.\n'Draw a replication fork and label leading strand, lagging strand, Okazaki fragments.'\n'Why is replication continuous on one strand and discontinuous on the other?'",
            textbookRef: "E. coli replicates its 4.6 × 10⁶ bp in 18 minutes (≈2000 bp/s).",
            keyFormulas: [
              "Gen 1: 100% hybrid | Gen 2: 50% hybrid + 50% light",
              "Gen 3: 25% hybrid + 75% light",
              "DNA polymerase: 5'→3' only",
              "Okazaki fragments joined by ligase"
            ],
            isImportant: true,
            examTag: 'Important 5M Question'
          }
        ]
      },
      {
        id: 'bio-sub-5-6',
        title: '5.6 Transcription',
        ...imp('Important 3M/5M Question', 'Transcription unit, template vs coding strand, splicing–capping–tailing (very high frequency)'),
        sections: [
          {
            id: 'bio-sec-5-6',
            title: 'Transcription Unit, Prokaryotic & Eukaryotic Transcription',
            explanation: "• Transcription: copying genetic info from one DNA strand into RNA.\n• Transcription unit: Promoter (5' end of coding strand, upstream) — Structural gene — Terminator (3' end, downstream).\n• Template strand: 3'→5' polarity. Coding strand: 5'→3'; same sequence as mRNA (T replaced by U); doesn't code anything.\n• Gene: monocistronic (eukaryotes, split genes with exons & introns) / polycistronic (prokaryotes).\n• Bacteria: one RNA polymerase; σ factor = initiation, ρ factor = termination.\n• Eukaryotes: RNA Pol I → rRNAs (28S, 18S, 5.8S); RNA Pol II → hnRNA (precursor of mRNA); RNA Pol III → tRNA, 5S rRNA, snRNA.\n• hnRNA processing: Splicing (introns removed, exons joined), Capping (methyl guanosine triphosphate at 5'), Tailing (poly-A 200–300 at 3').",
            questionFraming: "Most Repeated — 'Draw a schematic structure of a transcription unit and label promoter, structural gene, terminator, template & coding strand.'\n'Explain post-transcriptional processing of hnRNA in eukaryotes.'\n'Name the three RNA polymerases in eukaryotes and their products.'\n'Given a coding strand sequence, write the mRNA.'",
            textbookRef: "Split gene arrangement represents an ancient feature of the genome.",
            keyFormulas: [
              "Promoter — Structural gene — Terminator",
              "mRNA = coding strand (T → U)",
              "Pol I: rRNA | Pol II: hnRNA | Pol III: tRNA, 5S, snRNA",
              "Splicing + Capping + Tailing"
            ],
            isImportant: true,
            examTag: 'Important 3M/5M Question'
          }
        ]
      },
      {
        id: 'bio-sub-5-7',
        title: '5.7 Genetic Code & tRNA',
        ...imp('Important Question', 'Salient features of genetic code, tRNA clover-leaf as adaptor (frequent 2M/3M)'),
        sections: [
          {
            id: 'bio-sec-5-7',
            title: 'Features of Genetic Code & Adaptor Molecule',
            explanation: "• George Gamow proposed triplet code; Nirenberg & Khorana deciphered it (Severo Ochoa enzyme helped).\n• Features:\n  – Triplet: 64 codons; 61 code amino acids; 3 stop codons (UAA, UAG, UGA).\n  – Unambiguous & specific: one codon → one amino acid.\n  – Degenerate: some amino acids coded by more than one codon.\n  – Read contiguously, no punctuation (commaless).\n  – Nearly universal (UUU = Phe in bacteria to humans; exceptions in mitochondria & some protozoa).\n  – AUG: dual function — Methionine + initiator codon.\n• tRNA = adaptor molecule (sRNA); clover-leaf (2D), inverted L (3D). Has anticodon loop + amino acid acceptor end.\n• Point mutation (frameshift) evidence: insertion/deletion of 1–2 bases changes reading frame; 3 bases → one amino acid added/removed.",
            questionFraming: "Most Repeated — 'Explain the salient features of the genetic code: degenerate, unambiguous, universal.'\n'Why is tRNA called an adaptor molecule? Draw its clover-leaf structure.'\n'AUG has dual function. Explain.'",
            textbookRef: "Specific tRNAs exist for each amino acid; initiator tRNA is distinct; no tRNA for stop codons.",
            keyFormulas: [
              "64 codons = 61 sense + 3 stop",
              "Stop: UAA, UAG, UGA",
              "AUG = Met + Start",
              "tRNA = adaptor (anticodon + aa acceptor end)"
            ],
            isImportant: true,
            examTag: 'Important Question'
          }
        ]
      },
      {
        id: 'bio-sub-5-8',
        title: '5.8 Translation',
        sections: [
          {
            id: 'bio-sec-5-8',
            title: 'Charging, Initiation, Elongation & Termination',
            explanation: "• Charging (aminoacylation) of tRNA: amino acid activated by ATP and linked to its tRNA.\n• Ribosome: small + large subunit; 23S rRNA in bacteria acts as peptidyl transferase (ribozyme).\n• Initiation: small subunit binds mRNA at AUG with initiator tRNA (Met); large subunit joins.\n• Elongation: aminoacyl tRNAs enter by codon–anticodon pairing; peptide bonds formed; ribosome moves codon to codon.\n• Termination: release factor binds stop codon → polypeptide released.\n• UTRs (untranslated regions) at 5' and 3' ends increase translation efficiency.",
            questionFraming: "Frequent — 'Explain the process of charging of tRNA.'\n'What is the role of the ribosome / 23S rRNA in translation?'\n'What are UTRs? State their function.'",
            textbookRef: "mRNA has additional sequences not translated: UTRs before start codon (5') and after stop codon (3').",
            keyFormulas: ["23S rRNA = peptidyl transferase (ribozyme)", "Release factor at stop codon", "UTRs ↑ translation efficiency"]
          }
        ]
      },
      {
        id: 'bio-sub-5-9',
        title: '5.9 Regulation of Gene Expression: Lac Operon',
        ...imp('Important 5M Question', 'Lac operon switched on/off with diagram — among the most repeated Bio 5M questions'),
        sections: [
          {
            id: 'bio-sec-5-9',
            title: 'Inducible Lac Operon (Jacob & Monod)',
            explanation: "• Operon: polycistronic structural genes regulated by a common promoter & operator.\n• Lac operon components: regulatory gene i (repressor), promoter (p), operator (o), structural genes z, y, a.\n  – z → β-galactosidase (lactose → glucose + galactose)\n  – y → permease (↑ lactose entry)\n  – a → transacetylase\n• No lactose: repressor (from i gene) binds operator → RNA polymerase blocked → operon OFF.\n• Lactose present (inducer): lactose binds repressor → repressor inactivated → can't bind operator → RNA polymerase transcribes z, y, a → operon ON.\n• Negative regulation; low-level expression of lac operon always present (so lactose can enter).\n• Regulation levels in eukaryotes: transcriptional (primary transcript), processing (splicing), transport of mRNA, translational.",
            questionFraming: "Most Repeated — 'Explain the working of the lac operon in the presence and absence of lactose (with diagram).'\n'Why is the lac operon called an inducible operon? Name the inducer.'\n'What would happen if the i gene is mutated / if lactose is absent?'\n'Name the three enzymes coded by z, y, a.'",
            textbookRef: "Glucose/galactose cannot act as inducers for the lac operon.",
            keyFormulas: [
              "i → Repressor | z → β-galactosidase | y → Permease | a → Transacetylase",
              "Inducer = Lactose (allolactose)",
              "No lactose: repressor + operator → OFF",
              "Lactose: repressor inactivated → ON"
            ],
            isImportant: true,
            examTag: 'Important 5M Question'
          }
        ]
      },
      {
        id: 'bio-sub-5-10',
        title: '5.10 Human Genome Project',
        ...imp('Important Question', 'Goals & salient features of HGP, ESTs vs sequence annotation (frequent 3M)'),
        sections: [
          {
            id: 'bio-sec-5-10',
            title: 'Goals, Methodology & Salient Features',
            explanation: "• HGP (1990–2003) — mega project; coordinated by US Dept. of Energy & NIH; Wellcome Trust (UK) a major partner.\n• Goals: identify all ~20,000–25,000 genes; determine sequence of 3 billion bp; store info in databases; improve analysis tools; transfer technology to industry; address ethical, legal & social issues (ELSI).\n• Methods: ESTs (Expressed Sequence Tags — identify expressed genes) and Sequence Annotation (sequence whole genome, assign functions).\n• Vectors: BAC (bacterial artificial chromosome), YAC (yeast artificial chromosome); automated sequencers (Sanger's method).\n• Salient features:\n  – 3164.7 million bp; average gene 3000 bases; largest gene dystrophin (2.4 million bases).\n  – ~30,000 genes; 99.9% bases identical in all humans.\n  – Function unknown for > 50% of genes; < 2% genome codes proteins.\n  – Repeated sequences make up a large portion.\n  – Chromosome 1 has most genes (2968); Y has fewest (231).\n  – ~1.4 million SNPs identified.",
            questionFraming: "Most Repeated — 'List any four goals / salient features of the Human Genome Project.'\n'Differentiate between ESTs and sequence annotation.'\n'Name the vectors used in HGP.' ⟶ BAC & YAC.",
            textbookRef: "Sequence of chromosome 1 was completed only in May 2006.",
            keyFormulas: [
              "3164.7 million bp | ~30,000 genes",
              "Dystrophin = largest gene (2.4 Mb)",
              "Chr 1: 2968 genes | Y: 231 genes",
              "< 2% coding | 99.9% identical | 1.4 million SNPs"
            ],
            isImportant: true,
            examTag: 'Important Question'
          }
        ]
      },
      {
        id: 'bio-sub-5-11',
        title: '5.11 DNA Fingerprinting',
        ...imp('Important 3M/5M Question', 'Principle (VNTR), steps & applications of DNA fingerprinting (very high frequency)'),
        sections: [
          {
            id: 'bio-sec-5-11',
            title: 'VNTRs, Steps & Applications',
            explanation: "• Developed by Alec Jeffreys; uses VNTRs (Variable Number of Tandem Repeats) as probes — a satellite DNA showing high polymorphism.\n• Satellite DNA: repetitive DNA separating as a minor peak in density gradient centrifugation; does not code proteins.\n• Polymorphism arises by mutation (inheritable when in germ cells); if allele frequency > 0.01 → DNA polymorphism.\n• Steps:\n  1. Isolation of DNA\n  2. Digestion with restriction endonucleases\n  3. Separation by gel electrophoresis\n  4. Southern blotting onto nitrocellulose / nylon membrane\n  5. Hybridisation with labelled VNTR probe\n  6. Detection by autoradiography\n• VNTR size varies 0.1 to 20 kb.\n• Applications: forensics (crime), paternity disputes, population & evolutionary studies. PCR increases sensitivity — a single cell is enough.",
            questionFraming: "Most Repeated — 'Explain the steps involved in DNA fingerprinting.'\n'What are VNTRs? Why are they used in DNA fingerprinting?'\n'Mention any two applications of DNA fingerprinting.'",
            textbookRef: "DNA from blood, hair follicle, skin, bone, saliva, sperm etc. can be used.",
            keyFormulas: [
              "Probe = VNTR (satellite DNA)",
              "Isolate → Digest → Electrophoresis → Southern blot → Hybridise → Autoradiograph",
              "VNTR size: 0.1–20 kb"
            ],
            isImportant: true,
            examTag: 'Important 3M/5M Question'
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CHAPTER 6: EVOLUTION
  // ==========================================================================
  {
    id: 'bio-ch-6',
    number: 6,
    title: 'Evolution',
    tag: 'Evolution',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'bio-sub-6-1',
        title: '6.1 Origin of Life & Miller–Urey Experiment',
        ...imp('Important Question', 'Oparin–Haldane & Miller experiment setup/conclusion (repeated 2M/3M)'),
        sections: [
          {
            id: 'bio-sec-6-1',
            title: 'Big Bang, Chemical Evolution & Miller',
            explanation: "• Universe ≈ 20 billion yrs old (Big Bang); Earth ≈ 4.5 billion yrs.\n• Early atmosphere: no free O₂ (reducing) — water vapour, CH₄, CO₂, NH₃.\n• Theories: Special creation, Panspermia (spores from outer space), Spontaneous generation (disproved by Louis Pasteur).\n• Oparin & Haldane: first life came from pre-existing non-living organic molecules (RNA, proteins) — chemical evolution.\n• S.L. Miller (1953): closed flask with CH₄, H₂, NH₃ + water vapour at 800 °C, electric discharge → amino acids formed.\n• First non-cellular life ≈ 3 billion yrs ago; first cellular forms ≈ 2000 million yrs ago (mya).",
            questionFraming: "Most Repeated — 'Describe Miller's experiment. What did it prove?'\n'What is the theory of chemical evolution (Oparin–Haldane)?'\n'How did Louis Pasteur disprove spontaneous generation?'",
            textbookRef: "Sugars, nitrogen bases, pigments and fats were found in similar experiments by others.",
            keyFormulas: [
              "Miller: CH₄ + H₂ + NH₃ + H₂O, 800 °C, spark → amino acids",
              "Earth: 4.5 billion yrs",
              "First cells: ~2000 mya"
            ],
            isImportant: true,
            examTag: 'Important Question'
          }
        ]
      },
      {
        id: 'bio-sub-6-2',
        title: '6.2 Evidences for Evolution: Homology & Analogy',
        ...imp('Important 3M Question', 'Homologous vs analogous organs, divergent vs convergent evolution (most repeated Ch 6 question)'),
        sections: [
          {
            id: 'bio-sec-6-2',
            title: 'Palaeontology, Comparative Anatomy & Biochemistry',
            explanation: "• Palaeontological: fossils in rock layers show life forms changed over time.\n• Homologous organs: same structure/origin, different functions → Divergent evolution (common ancestry).\n  – Forelimbs of whale, bat, cheetah, human; vertebrate hearts & brains; thorn of Bougainvillea & tendril of Cucurbita.\n• Analogous organs: different structure/origin, same function → Convergent evolution.\n  – Wings of butterfly & bird; eye of octopus & mammal; flippers of penguin & dolphin; sweet potato (root) & potato (stem).\n• Biochemical (molecular) homology: similarities in proteins & genes indicate common ancestry.\n• Embryological support (Haeckel) disproved by Karl Ernst von Baer.",
            questionFraming: "Most Repeated — 'Differentiate between homologous and analogous organs with examples.'\n'How do homologous organs support divergent evolution?'\n'Sweet potato and potato are analogous. Explain.' 'Thorns of Bougainvillea and tendrils of Cucurbita are homologous. Why?'",
            textbookRef: "Similarities in proteins and genes performing a given function among diverse organisms give clues to common ancestry.",
            keyFormulas: [
              "Homologous → Divergent (common ancestor)",
              "Analogous → Convergent (similar habitat)",
              "Potato (stem) vs Sweet potato (root) = analogous"
            ],
            isImportant: true,
            examTag: 'Important 3M Question'
          }
        ]
      },
      {
        id: 'bio-sub-6-3',
        title: '6.3 Natural Selection Evidence & Adaptive Radiation',
        ...imp('Important Question', "Industrial melanism, Darwin's finches & Australian marsupials (frequent 3M)"),
        sections: [
          {
            id: 'bio-sec-6-3',
            title: 'Industrial Melanism, Resistance & Adaptive Radiation',
            explanation: "• Industrial melanism (England, Biston betularia): before industrialisation white moths > dark (lichens on trees); after, soot darkened bark → dark moths survived predation → more dark moths.\n• Anthropogenic evidence: herbicide/pesticide resistance, antibiotic-resistant microbes — evolution in years, not centuries.\n• Adaptive radiation: evolution of different species from a common ancestor radiating into different habitats.\n  – Darwin's finches (Galapagos): varied beaks from seed-eating ancestor.\n  – Australian marsupials radiating from a common ancestor.\n• Convergent evolution: >1 adaptive radiation in isolated areas — placental mammals & Australian marsupials (e.g., placental wolf & Tasmanian wolf).",
            questionFraming: "Most Repeated — 'Explain industrial melanism as an example of natural selection.'\n'What is adaptive radiation? Give two examples.'\n'How do Australian marsupials and placental mammals illustrate convergent evolution?'",
            textbookRef: "Natural selection by industrial melanism: no variant was wiped out completely.",
            keyFormulas: [
              "Industrial melanism → Natural selection",
              "Adaptive radiation: Darwin's finches, Australian marsupials",
              "Placental vs marsupial = convergent"
            ],
            isImportant: true,
            examTag: 'Important Question'
          }
        ]
      },
      {
        id: 'bio-sub-6-4',
        title: '6.4 Theories & Mechanism of Evolution',
        sections: [
          {
            id: 'bio-sec-6-4',
            title: 'Lamarck, Darwin, de Vries & Saltation',
            explanation: "• Lamarck: use and disuse of organs; inheritance of acquired characters (giraffe neck) — rejected.\n• Darwin (HMS Beagle; with Alfred Wallace): Natural selection — variation, overproduction, struggle for existence, survival of the fittest (reproductive fitness), branching descent.\n• Hugo de Vries (Oenothera, evening primrose): Mutation theory — large sudden heritable changes cause speciation (saltation = single-step large mutation).\n• Darwinian variations: small, directional. Mutations: random, directionless.\n• Fitness = reproductive fitness (leaving more progeny).",
            questionFraming: "Frequent — 'Differentiate between Darwin's and de Vries' views on variation.'\n'Explain the theory of natural selection.'\n'What is saltation?'",
            textbookRef: "Darwin's two key concepts: branching descent and natural selection.",
            keyFormulas: ["Lamarck: use & disuse", "Darwin: natural selection, small variations", "de Vries: mutation, saltation"]
          }
        ]
      },
      {
        id: 'bio-sub-6-5',
        title: '6.5 Hardy–Weinberg Principle & Types of Natural Selection',
        ...imp('Important 3M Question', 'H-W equation numericals, 5 factors affecting equilibrium, stabilising/directional/disruptive graphs'),
        sections: [
          {
            id: 'bio-sec-6-5',
            title: 'Genetic Equilibrium & Selection Graphs',
            explanation: "• Hardy–Weinberg: allele frequencies in a population are stable and constant across generations (genetic equilibrium).\n• p + q = 1 and p² + 2pq + q² = 1 (p² = AA, 2pq = Aa, q² = aa).\n• Disturbing factors (5): Gene migration/gene flow, Genetic drift (founder effect), Mutation, Genetic recombination, Natural selection.\n• Deviation from equilibrium = evolution.\n• Natural selection types:\n  – Stabilising: favours average; peak gets higher & narrower.\n  – Directional: favours one extreme; peak shifts.\n  – Disruptive: favours both extremes; two peaks.",
            questionFraming: "Most Repeated — 'State Hardy–Weinberg principle. List five factors affecting it.'\n'In a population, q² = 0.16. Find frequency of heterozygotes.' ⟶ q = 0.4, p = 0.6, 2pq = 0.48.\n'Draw graphs showing stabilising, directional and disruptive selection.'\n'What is founder effect?'",
            textbookRef: "Founder effect: the original drifted population becomes the founder of a new species.",
            keyFormulas: [
              "p + q = 1",
              "p² + 2pq + q² = 1",
              "Heterozygote freq = 2pq",
              "Factors: Gene flow, Drift, Mutation, Recombination, Selection"
            ],
            isImportant: true,
            examTag: 'Important 3M Question'
          }
        ]
      },
      {
        id: 'bio-sub-6-6',
        title: '6.6 Brief Account of Evolution (Geological Timeline)',
        sections: [
          {
            id: 'bio-sec-6-6',
            title: 'Plants & Animals Through Time',
            explanation: "• ~2000 mya: first cellular life; ~500 mya: invertebrates active.\n• ~350 mya: jawless fish; lobefins (coelacanth) → first amphibians.\n• ~320 mya: sea weeds & few plants.\n• Reptiles from amphibians; thecodonts → dinosaurs. Dinosaurs disappeared ~65 mya.\n• Tyrannosaurus rex: ~20 ft tall, huge dagger-like teeth.\n• Plants: Psilophyton → ferns, gymnosperms, angiosperms. Rhynia-type → early land plants.\n• Mammals: first were shrew-like; pouched mammals in Australia survived due to lack of competition.\n• Horse, hippopotamus, bear, rabbit evolved in South America; continental drift isolated Australian marsupials.",
            questionFraming: "Occasional — 'Name the first amphibian ancestors (lobefins / coelacanth).'\n'Why did pouched mammals of Australia survive?' ⟶ No competition from other mammals.",
            textbookRef: "Coelacanth, thought extinct, was caught in South Africa in 1938.",
            keyFormulas: ["Lobefins (Coelacanth) → Amphibians", "Thecodonts → Dinosaurs", "Dinosaurs extinct ~65 mya"]
          }
        ]
      },
      {
        id: 'bio-sub-6-7',
        title: '6.7 Origin & Evolution of Man',
        ...imp('Important Question', 'Sequence & brain capacities: Dryopithecus → Homo sapiens (frequent 2M/3M)'),
        sections: [
          {
            id: 'bio-sec-6-7',
            title: 'Dryopithecus to Homo sapiens',
            explanation: "• ~15 mya: Dryopithecus (ape-like) & Ramapithecus (man-like) — hairy, walked like gorillas.\n• ~2 mya: Australopithecines (East African grasslands) — hunted with stone weapons, ate fruit.\n• Homo habilis: first human-like being; brain 650–800 cc; did not eat meat.\n• Homo erectus (~1.5 mya, Java man): brain ~900 cc; ate meat.\n• Neanderthal man (100,000–40,000 yrs ago, East & Central Asia): brain ~1400 cc; buried dead; used hides.\n• Homo sapiens arose in Africa, moved across continents (75,000–10,000 yrs ago, ice age).\n• Prehistoric cave art ~18,000 yrs ago (Bhimbetka, MP). Agriculture ~10,000 yrs ago.",
            questionFraming: "Most Repeated — 'Arrange in order of evolution with brain capacities: H. erectus, H. habilis, Neanderthal, H. sapiens.'\n'Which hominid first used stone tools / ate meat / buried the dead?'",
            textbookRef: "Human settlements and agriculture began ~10,000 years ago.",
            keyFormulas: [
              "Dryopithecus → Australopithecus → H. habilis (650–800 cc) → H. erectus (900 cc) → Neanderthal (1400 cc) → H. sapiens",
              "H. erectus: first meat eater",
              "Neanderthal: buried dead"
            ],
            isImportant: true,
            examTag: 'Important Question'
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CHAPTER 7: HUMAN HEALTH AND DISEASE
  // ==========================================================================
  {
    id: 'bio-ch-7',
    number: 7,
    title: 'Human Health and Disease',
    tag: 'Health',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'bio-sub-7-1',
        title: '7.1 Common Infectious Diseases in Humans',
        ...imp('Important Question', 'Pathogens, symptoms, and tests for Typhoid, Pneumonia, Malaria (frequent 3M/5M)'),
        sections: [
          {
            id: 'bio-sec-7-1',
            title: 'Bacterial, Viral, Protozoan & Helminthic Diseases',
            explanation: "• Typhoid: Caused by Salmonella typhi (bacterium). Enters small intestine via contaminated food/water; migrates to other organs via blood. Symptoms: sustained high fever (39°C to 40°C), weakness, stomach pain, constipation, headache, intestinal perforation in severe cases. Confirmatory test: Widal test. Classic carrier: Mary Mallon ('Typhoid Mary').\n• Pneumonia: Caused by Streptococcus pneumoniae and Haemophilus influenzae. Infects alveoli of lungs; alveoli get filled with fluid leading to severe breathing problems. Symptoms: fever, chills, cough, headache; lips and finger nails may turn grey to bluish in severe cases. Transmitted by inhaling droplets/aerosols or sharing glasses/utensils.\n• Common Cold: Caused by Rhinoviruses. Infects nose and respiratory passage, but NOT the lungs! Symptoms: nasal congestion, discharge, sore throat, hoarseness, cough, headache; lasts 3–7 days.\n• Malaria: Caused by protozoan parasite Plasmodium (P. vivax, P. malariae, P. falciparum - malignant malaria caused by P. falciparum is fatal). Vector: female Anopheles mosquito.\n• Amoebiasis (Amoebic dysentery): Caused by Entamoeba histolytica (protozoan) in large intestine. Symptoms: constipation, abdominal pain, cramps, stools with excess mucous and blood clots. Mechanical carrier: housefly.\n• Ascariasis: Caused by Ascaris lumbricoides (intestinal roundworm). Symptoms: internal bleeding, muscular pain, fever, anaemia, blockage of intestinal passage. Eggs excreted in faeces contaminate soil, water, plants.\n• Filariasis (Elephantiasis): Caused by Wuchereria bancrofti and Wuchereria malayi (filarial worms). Chronic inflammation of lymphatic vessels of lower limbs and genital organs. Vector: female Culex mosquito.\n• Ringworms: Caused by fungi of genera Microsporum, Trichophyton, and Epidermophyton. Dry, scaly lesions on skin, nails, scalp with intense itching; heat and moisture help fungi grow in skin folds (groin, between toes).",
            questionFraming: "Most Repeated — 'Name the causative organism and confirmatory test of typhoid fever.'\n'Differentiate between symptoms of common cold and pneumonia.' ⟶ Common cold spares lungs, pneumonia fills alveoli with fluid.\n'Describe the symptoms and pathogen causing amoebic dysentery.'",
            textbookRef: "Good humor hypothesis by Hippocrates was disproved by William Harvey's discovery of blood circulation and demonstration of normal body temperature using clinical thermometer.",
            keyFormulas: [
              "Typhoid: Salmonella typhi | Widal test",
              "Pneumonia: S. pneumoniae | Alveoli fluid",
              "Common cold: Rhinovirus | Spares lungs",
              "Amoebiasis: Entamoeba histolytica | Housefly carrier",
              "Elephantiasis: Wuchereria bancrofti | Culex vector"
            ],
            isImportant: true,
            examTag: 'Important Question'
          }
        ]
      },
      {
        id: 'bio-sub-7-2',
        title: '7.2 Life Cycle of Plasmodium',
        ...imp('Important Diagram', 'Life cycle schematic of Plasmodium vivax showing human host and mosquito vector stages (repeated 5M)'),
        sections: [
          {
            id: 'bio-sec-7-2',
            title: 'Human Host & Mosquito Vector Cycle',
            explanation: "• Two hosts required: Human (primary host for asexual cycle) and Female Anopheles mosquito (vector and host for sexual cycle).\n• Stage 1 (Infection): Infected female Anopheles bites human, injecting infectious sporozoites with saliva.\n• Stage 2 (Liver Schizogony): Sporozoites reach liver via blood; reproduce asexually inside liver cells, bursting cells to release merozoites.\n• Stage 3 (Erythrocytic Cycle): Parasites attack Red Blood Cells (RBCs), reproduce asexually, and burst RBCs.\n• Haemozoin Toxin: Rupture of RBCs releases toxic haemozoin granules, which induce chilling rigors followed by recurring high fever every 3 to 4 days.\n• Stage 4 (Gametocytes): Some parasites differentiate into sexual stages (male and female gametocytes) within human RBCs.\n• Stage 5 (Mosquito Uptake): Female Anopheles mosquito bites infected human, sucking gametocytes with blood meal.\n• Stage 6 (Fertilisation & Sporogony): Fertilisation and zygote development occur in mosquito gut (stomach); motile ookinete penetrates gut wall and forms oocyst.\n• Stage 7 (Storage): Oocyst undergoes sporogony producing thousands of mature sporozoites; sporozoites escape and migrate to mosquito salivary glands, ready for next human bite.",
            questionFraming: "Most Repeated — 'Trace the life cycle of Plasmodium in human body and mosquito with a schematic flow diagram.'\n'Why does a malaria patient experience recurring chill and fever?' ⟶ Rupture of RBCs releases haemozoin.\n'Where does sexual reproduction of Plasmodium take place?' ⟶ In the gut of female Anopheles mosquito.",
            textbookRef: "Plasmodium falciparum causes the most severe and potentially fatal cerebral malaria.",
            keyFormulas: [
              "Sporozoites (infectious stage) → Liver cells → RBCs",
              "RBC rupture → Haemozoin → Chills & high fever",
              "Sexual stage (fertilisation) = Mosquito gut",
              "Sporozoites stored = Mosquito salivary glands"
            ],
            isImportant: true,
            examTag: 'Important Diagram'
          }
        ]
      },
      {
        id: 'bio-sub-7-3',
        title: '7.3 Immunity: Innate & Acquired',
        ...imp('CBSE High Yield', 'Four innate barriers, CMI vs Humoral, antibody structure H2L2 (repeated 3M)'),
        sections: [
          {
            id: 'bio-sec-7-3',
            title: 'Innate Barriers, Humoral & Cell-Mediated Immunity',
            explanation: "• Innate Immunity: Non-specific defense present from birth; comprises four barriers:\n  1. Physical barriers: Skin (stratum corneum prevents microbial entry), Mucus coating of respiratory, gastrointestinal and urogenital tracts.\n  2. Physiological barriers: Acid in stomach (HCl), saliva in mouth, lysozyme in tears.\n  3. Cellular barriers: Leukocytes like PMNL (Polymorpho-Nuclear Leukocytes / neutrophils), monocytes, Natural Killer (NK) lymphocytes, tissue macrophages.\n  4. Cytokine barriers: Virus-infected cells secrete proteins called Interferons, which protect non-infected surrounding cells from viral attack.\n• Acquired Immunity: Pathogen-specific, characterized by immunological memory.\n  – Primary response: low intensity upon first encounter.\n  – Secondary (Anamnestic) response: highly intensified upon re-encounter due to memory cells.\n• Humoral Immunity: Mediated by B lymphocytes producing antibodies into blood and lymph.\n• Cell-Mediated Immunity (CMI): Mediated by T lymphocytes (Helper TH, Cytotoxic TC, Suppressor TS);\n  – Critical: CMI is responsible for Graft Rejection in organ transplants (tissue matching and immunosuppressants like cyclosporin A required).\n• Antibody Structure: Composed of 4 polypeptide chains linked by disulfide bridges: 2 long Heavy (H) chains + 2 short Light (L) chains -> represented as H₂L₂.\n• Antibody Classes: IgG (most abundant, crosses placenta), IgA (present in colostrum, saliva, mucus), IgM (first produced, pentamer), IgE (mediates allergic reactions), IgD.",
            questionFraming: "Most Repeated — 'Explain the four barriers of innate immunity with one example each.'\n'Draw a labelled diagram of an antibody molecule (H₂L₂).'\n'Which branch of immunity is responsible for graft rejection?' ⟶ Cell-Mediated Immunity (T lymphocytes).",
            textbookRef: "T cells do not secrete antibodies directly but assist B cells in antibody production.",
            keyFormulas: [
              "Innate Barriers: Physical, Physiological, Cellular, Cytokine (Interferons)",
              "Antibody formula = H₂L₂ (2 Heavy + 2 Light)",
              "Graft rejection = Cell-Mediated Immunity (CMI / T-cells)",
              "Colostrum = IgA | Allergy = IgE | Crosses placenta = IgG"
            ],
            isImportant: true,
            examTag: 'CBSE High Yield'
          }
        ]
      },
      {
        id: 'bio-sub-7-4',
        title: '7.4 Active & Passive Immunity, Vaccination & Allergies',
        ...imp('Important Question', 'Active vs Passive immunity, recombinant vaccines, allergy mechanism & autoimmunity (frequent 3M)'),
        sections: [
          {
            id: 'bio-sec-7-4',
            title: 'Vaccines, Hypersensitivity & Autoimmune Disorders',
            explanation: "• Active Immunity: Host exposed to living or dead microbes produces antibodies; slow but long-lasting (e.g. natural infection, vaccines).\n• Passive Immunity: Pre-formed antibodies directly administered to the body; provides immediate quick relief (e.g. Colostrum IgA, Anti-Tetanus Serum ATS, Anti-venom for snake bites).\n• Vaccination Principle: Based on memory of immune system. Inactivated/weakened pathogen introduces antigenic proteins, generating memory B and T cells.\n• Recombinant DNA Vaccines: Produced by cloning antigenic polypeptide genes in microorganisms (e.g. Hepatitis-B vaccine produced in transgenic yeast).\n• Allergies: Exaggerated immune response to environmental antigens (allergens: pollen, dust mites, animal dander).\n  – Mediated by IgE antibodies.\n  – Triggers release of chemicals like Histamine and Serotonin from mast cells.\n  – Symptoms: sneezing, watery eyes, running nose, difficulty in breathing.\n  – Treatment: Antihistamines, adrenaline, and corticosteroids rapidly reduce symptoms.\n• Autoimmunity: Failure of self-tolerance where immune system attacks body's own cells, leading to tissue damage (e.g. Rheumatoid Arthritis).",
            questionFraming: "Most Repeated — 'Differentiate between active and passive immunity with examples.'\n'What are the chemicals released during allergic reaction and how are they treated?' ⟶ Histamine & serotonin from mast cells; treated with antihistamines/adrenaline.\n'Define autoimmunity with one clinical example.' ⟶ Rheumatoid arthritis.",
            textbookRef: "Modern lifestyle and protected sanitised environments in early childhood have lowered immunity, causing increased sensitivity and allergies in children of metro cities.",
            keyFormulas: [
              "Active = Slow, Memory | Passive = Fast, Pre-formed antibodies",
              "Snake venom / Tetanus = Passive immunity",
              "Allergy = IgE + Mast cell (Histamine + Serotonin)",
              "Autoimmunity = Self-attack (Rheumatoid arthritis)"
            ],
            isImportant: true,
            examTag: 'Important Question'
          }
        ]
      },
      {
        id: 'bio-sub-7-5',
        title: '7.5 Lymphoid Organs: Primary & Secondary',
        ...imp('Important Question', 'Primary vs Secondary lymphoid organs, role of bone marrow, thymus, spleen, MALT (repeated 2M/3M)'),
        sections: [
          {
            id: 'bio-sec-7-5',
            title: 'Maturation, Proliferation & Tissue Distribution',
            explanation: "• Primary Lymphoid Organs: Organs where immature lymphocytes differentiate and mature into antigen-sensitive lymphocytes:\n  1. Bone Marrow: Main lymphoid organ where all blood cells including B and T lymphocytes are produced; site of B-cell maturation.\n  2. Thymus: Lobed organ near heart behind breastbone; quite large at birth but steadily reduces in size with age; site of T-cell maturation.\n• Secondary Lymphoid Organs: Organs where mature lymphocytes encounter antigens, proliferate, and differentiate into effector cells:\n  1. Spleen: Large bean-shaped organ containing lymphocytes and phagocytes; acts as a blood filter trapping blood-borne microorganisms; reservoir of erythrocytes (graveyard of old RBCs).\n  2. Lymph Nodes: Small solid structures located along lymphatic system; trap microbes travelling in lymph fluid, activating lymphocytes.\n  3. Tonsils, Peyer's Patches of small intestine, Appendix.\n  4. MALT (Mucosa-Associated Lymphoid Tissue): Lymphoid tissue located inside mucosal lining of respiratory, digestive, and urogenital tracts; constitutes approximately 50% of all lymphoid tissue in the human body!",
            questionFraming: "Most Repeated — 'Distinguish between primary and secondary lymphoid organs with examples.'\n'Name the lymphoid organ that acts as a filter of blood.' ⟶ Spleen.\n'What is MALT? What percentage of lymphoid tissue does it constitute?' ⟶ Mucosa-Associated Lymphoid Tissue, constitutes 50%.",
            textbookRef: "Both bone marrow and thymus provide micro-environments for the development and maturation of T-lymphocytes.",
            keyFormulas: [
              "Primary = Bone marrow & Thymus (Maturation)",
              "Secondary = Spleen, Lymph nodes, Peyer's patches, MALT (Encounter)",
              "Spleen = Blood filter + RBC reservoir",
              "MALT = 50% of lymphoid tissue"
            ],
            isImportant: true,
            examTag: 'Important Question'
          }
        ]
      },
      {
        id: 'bio-sub-7-6',
        title: '7.6 AIDS (Acquired Immuno Deficiency Syndrome)',
        ...imp('CBSE High Yield', 'HIV structure, replication cycle in macrophages and TH cells, transmission, ELISA (repeated 5M)'),
        sections: [
          {
            id: 'bio-sec-7-6',
            title: 'HIV Structure, Replication Cycle, Pathology & Prevention',
            explanation: "• Causative Agent: Human Immunodeficiency Virus (HIV), a retrovirus having an RNA genome enclosed in an envelope and carrying Reverse Transcriptase enzyme.\n• Modes of Transmission: Sexual contact with infected partner, transfusion of contaminated blood/blood products, sharing infected needles/syringes (intravenous drug abusers), infected mother to fetus through placenta.\n• NOT Transmitted by: Social touch, physical contact, hugging, sharing food or mosquito bites!\n• Replication Mechanism (HIV in Host Body):\n  1. Virus enters Macrophages: Viral RNA reverse-transcribes into viral DNA by Reverse Transcriptase.\n  2. Viral DNA incorporates into host chromosomal DNA, directing cell to produce new viral particles; macrophages act as an 'HIV Factory'.\n  3. HIV attacks Helper T Lymphocytes (TH / CD4+ cells): Replicates and releases progeny viruses, destroying host TH cells.\n  4. Progressive Drop in TH Count: helper T cell count plunges below 200 cells/mm³; patient becomes severely immunocompromised.\n  5. Opportunistic Infections: Patient succumbs to bouts of fever, diarrhea, and infections by Mycobacterium, viruses, fungi, and parasites like Toxoplasma.\n• Diagnostic Test: ELISA (Enzyme Linked Immunosorbent Assay); Confirmed by Western Blot.\n• Prevention & Control: NACO (National AIDS Control Organisation), disposable syringes, testing blood banks, condom use, antiretroviral drugs (prolong life but cannot cure).",
            questionFraming: "Most Repeated — 'Describe the replication cycle of retrovirus HIV inside human body with a flow chart.'\n'Why are macrophages referred to as an HIV factory?'\n'Name the cell type whose progressive reduction causes immunodeficiency in AIDS.' ⟶ Helper T lymphocytes (TH cells).",
            textbookRef: "AIDS was first reported in 1981, and over the last 25 years, has killed more than 25 million people worldwide.",
            keyFormulas: [
              "Retrovirus (RNA) --[Reverse Transcriptase]--> Viral DNA",
              "Macrophage = HIV Factory",
              "Progressive depletion = Helper T (TH / CD4+) cells",
              "Screening = ELISA | Confirmatory = Western Blot"
            ],
            isImportant: true,
            examTag: 'CBSE High Yield'
          }
        ]
      },
      {
        id: 'bio-sub-7-7',
        title: '7.7 Cancer & Drug/Alcohol Abuse',
        ...imp('Important Question', 'Contact inhibition loss, metastasis, carcinogens, opioids, cannabinoids, coca alkaloids (repeated 3M/5M)'),
        sections: [
          {
            id: 'bio-sec-7-7',
            title: 'Cancer Biology, Tumour Types, Drugs & Alcohol Abuse',
            explanation: "• Cancer Biology: Uncontrolled cell division caused by breakdown of regulatory mechanisms.\n  – Normal cells show Contact Inhibition: contact with neighboring cells inhibits uncontrolled growth.\n  – Cancer cells lose contact inhibition, proliferating continuously to form tumours.\n• Tumour Types: Benign (remains confined to original site, non-cancerous) vs Malignant (invasive, cancerous mass of neoplastic cells that starve normal cells).\n• Metastasis: Malignant cells detach, travel via bloodstream, invade distant tissues and seed secondary tumours (most feared characteristic of cancer!).\n• Carcinogens (Cancer-Inducing Agents):\n  – Physical: Ionising radiations (X-rays, gamma rays) and non-ionising radiation (UV rays causing DNA damage).\n  – Chemical: Tobacco smoke (major cause of lung cancer), chemical dyes.\n  – Biological: Oncogenic viruses carrying viral oncogenes; activation of cellular oncogenes (c-onc / proto-oncogenes).\n• Cancer Detection: Biopsy & histopathology, radiography, CT scan (3D X-ray slice), MRI (magnetic resonance, non-ionising), antibodies against cancer antigens.\n• Cancer Therapy: Surgery, Radiotherapy, Chemotherapy (side effects: hair loss, anaemia), Immunotherapy (α-interferon biological response modifier activates immune destruction).\n• Drugs Abuse:\n  1. Opioids: Bind opioid receptors in CNS and gastrointestinal tract; Heroin (Smack / Diacetylmorphine, obtained by acetylation of morphine from latex of Papaver somniferum / opium poppy); depressant, slows body functions.\n  2. Cannabinoids: Interact with cannabinoid receptors in brain; extracted from inflorescences of Cannabis sativa; Marijuana, hashish, charas, ganja; affects cardiovascular system.\n  3. Coca Alkaloid / Cocaine (Coke/Crack): Extracted from Erythroxylum coca (South America); blocks dopamine neurotransmitter reuptake; stimulates CNS, induces euphoria, hallucinations at high doses.\n  4. Hallucinogens: Atropa belladonna, Datura, LSD (from Claviceps purpurea).\n• Tobacco: Contains nicotine alkaloid; stimulates adrenal gland to release adrenaline/noradrenaline; increases heart rate and blood pressure; causes lung, urinary bladder, throat cancer, emphysema, coronary heart disease.",
            questionFraming: "Most Repeated — 'What is contact inhibition? How do cancer cells violate it?'\n'Define metastasis. Why is it the most dreaded property of malignant tumours?'\n'Name the source plant and chemical nature of: (a) Smack/Heroin, (b) Cocaine, (c) Cannabinoids.'\n'State the side effects of anabolic steroids in male and female athletes.'",
            textbookRef: "Morphine is a very effective sedative and painkiller, widely used in patients who have undergone surgery.",
            keyFormulas: [
              "Contact inhibition lost → Neoplastic transformation",
              "Metastasis = Blood migration to distant organs (Malignant)",
              "Heroin = Diacetylmorphine from Papaver somniferum (Depressant)",
              "Cannabinoids = Cannabis sativa (Cardiovascular effect)",
              "Cocaine = Erythroxylum coca (Dopamine reuptake block)"
            ],
            isImportant: true,
            examTag: 'Important Question'
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CHAPTER 8: MICROBES IN HUMAN WELFARE
  // ==========================================================================
  {
    id: 'bio-ch-8',
    number: 8,
    title: 'Microbes in Human Welfare',
    tag: 'Microbiology',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'bio-sub-8-1',
        title: '8.1 Microbes in Household Products',
        ...imp('Important Question', 'LAB in curd & Vitamin B12, Baker\'s yeast, Swiss cheese Propionibacterium (frequent 2M)'),
        sections: [
          {
            id: 'bio-sec-8-1',
            title: 'Dairy Fermentation, Dough & Traditional Foods',
            explanation: "• Lactic Acid Bacteria (LAB / Lactobacillus): Grow in milk and convert it into curd. Produce acids that coagulate and partially digest milk proteins (casein).\n  – Benefits of LAB: (1) Improves nutritional value by significantly increasing Vitamin B₁₂ content, (2) Checks growth of disease-causing microbes in gut.\n• Dough for Bread: Fermented using Saccharomyces cerevisiae (Baker's yeast). Puffed-up appearance of dough is due to carbon dioxide (CO₂) gas production during anaerobic respiration.\n• Dough for Dosa and Idli: Fermented by bacteria; puffed appearance caused by CO₂ bubbles.\n• Toddy: Traditional drink of southern India made by fermenting sap from palms.\n• Fermented Cheese Varieties:\n  – Swiss Cheese: Has large holes caused by huge amounts of CO₂ produced by bacterium Propionibacterium shermanii.\n  – Roquefort Cheese: Ripened by growing specific fungus Penicillium roqueforti on it, giving characteristic texture and flavor.\n  – Camembert Cheese: Ripened by fungus Penicillium camemberti.",
            questionFraming: "Most Repeated — 'Explain the role of Lactic Acid Bacteria (LAB) in converting milk into curd. State two nutritional/health benefits.'\n'Why does Swiss cheese have large holes?' ⟶ High CO₂ production by Propionibacterium shermanii.\n'Name the scientific name of Baker\'s yeast and explain the puffed appearance of dough.'",
            textbookRef: "A small amount of curd added to fresh milk as inoculum or starter contains millions of LAB.",
            keyFormulas: [
              "LAB: Milk → Curd | Adds Vitamin B₁₂ | Checks gut pathogens",
              "Baker's yeast = Saccharomyces cerevisiae (CO₂ puffs dough)",
              "Swiss cheese = Propionibacterium shermanii (Large holes)",
              "Roquefort cheese = Penicillium roqueforti (Fungal ripening)"
            ],
            isImportant: true,
            examTag: 'Important Question'
          }
        ]
      },
      {
        id: 'bio-sub-8-2',
        title: '8.2 Microbes in Industrial Products: Chemicals, Enzymes & Bioactive Molecules',
        ...imp('CBSE High Yield', 'Streptokinase, Cyclosporin A, Statins, organic acids and microbial sources (asked every year)'),
        sections: [
          {
            id: 'bio-sec-8-2',
            title: 'Fermented Beverages, Antibiotics & Bioactive Agents',
            explanation: "• Fermented Beverages: Saccharomyces cerevisiae (Brewer's yeast) ferments malted cereals and fruit juices into ethanol.\n  – Without Distillation: Wine and Beer (lower alcohol percentage).\n  – With Distillation: Whisky, Brandy, and Rum (concentrated alcohol percentage).\n• Antibiotics: Chemical substances produced by microbes that inhibit or kill disease-causing microbes in low concentration.\n  – Alexander Fleming (1928) discovered Penicillin while working on Staphylococcus bacteria; observed mould Penicillium notatum inhibiting bacteria.\n  – Full potential established by Howard Florey and Ernst Chain; widely used to treat wounded Allied soldiers in World War II (awarded Nobel Prize in 1945).\n• Organic Acids & Microbes:\n  – Citric Acid: Fungus Aspergillus niger.\n  – Acetic Acid: Bacterium Acetobacter aceti.\n  – Butyric Acid: Bacterium Clostridium butylicum.\n  – Lactic Acid: Bacterium Lactobacillus.\n• Commercial Enzymes:\n  – Lipases: Used in detergent formulations to remove oily stains.\n  – Pectinases and Proteases: Used to clarify bottled fruit juices, making them clearer than homemade juices.\n• Bioactive Molecules (Highest CBSE Weightage):\n  1. Streptokinase: Produced by bacterium Streptococcus, modified by genetic engineering; used as a 'Clot Buster' for removing blood clots from vessels of patients suffering from myocardial infarction.\n  2. Cyclosporin A: Produced by fungus Trichoderma polysporum; used as an Immunosuppressive agent in organ transplant patients.\n  3. Statins: Produced by yeast Monascus purpureus; used as Blood cholesterol lowering agents; competitively inhibits HMG-CoA reductase enzyme responsible for cholesterol synthesis.",
            questionFraming: "Most Repeated — 'Name the microbial sources and clinical applications of: (i) Cyclosporin A, (ii) Streptokinase, (iii) Statins.'\n'Match the organic acid with its microbial producer: Citric acid, Butyric acid, Acetic acid.'\n'Why are bottled fruit juices clearer compared to home-squeezed ones?' ⟶ Clarified using pectinases and proteases.",
            textbookRef: "Antibiotics have transformed medicine into curing deadly diseases like plague, whooping cough (kali khansi), diphtheria (gal ghotu), and leprosy (kusht rog).",
            keyFormulas: [
              "Streptokinase = Streptococcus (Clot buster for heart attack)",
              "Cyclosporin A = Trichoderma polysporum (Immunosuppressant)",
              "Statins = Monascus purpureus (Lowers cholesterol)",
              "Citric acid = Aspergillus niger | Butyric = Clostridium butylicum",
              "Juice clarifiers = Pectinases + Proteases | Oily stains = Lipases"
            ],
            isImportant: true,
            examTag: 'CBSE High Yield'
          }
        ]
      },
      {
        id: 'bio-sub-8-3',
        title: '8.3 Microbes in Sewage Treatment (STP)',
        ...imp('Important Question', 'Primary vs Secondary treatment, flocs, BOD significance, activated sludge (repeated 3M/5M)'),
        sections: [
          {
            id: 'bio-sec-8-3',
            title: 'Primary (Physical) & Secondary (Biological) Treatment',
            explanation: "• Sewage: Municipal wastewater containing large amounts of organic matter and pathogenic microbes; cannot be discharged into water bodies without treatment in Sewage Treatment Plants (STPs).\n• Primary Treatment (Physical Removal):\n  – Step 1: Sequential Filtration removes floating debris.\n  – Step 2: Sedimentation removes grit (soil and small pebbles).\n  – Solid settles as Primary Sludge; supernatant liquid forms Primary Effluent.\n• Secondary Treatment (Biological Treatment):\n  – Primary effluent pumped into large Aeration Tanks with vigorous mechanical agitation and air pumping.\n  – Promotes vigorous growth of aerobic microbes into Flocs (masses of bacteria associated with fungal filaments to form mesh-like networks).\n  – Flocs consume major part of organic matter, significantly reducing BOD (Biochemical Oxygen Demand).\n  – BOD Definition: The amount of oxygen required by microbes to oxidize all organic matter in 1 litre of water. High BOD = High polluting potential; Low BOD = Cleaner water.\n  – Once BOD is drastically reduced, effluent passed into Settling Tank where flocs sediment as Activated Sludge.\n  – A small portion of activated sludge pumped back into aeration tank as Inoculum.\n  – Major part pumped into Anaerobic Sludge Digesters: anaerobic bacteria digest sludge and bacteria/fungi, producing Biogas (methane, H₂S, CO₂).\n• Action Plans: Ganga Action Plan (GAP) and Yamuna Action Plan (YAP) initiated by Ministry of Environment and Forests to construct major STPs.",
            questionFraming: "Most Repeated — 'Explain the steps involved in secondary sewage treatment. What are flocs and what is their role?'\n'Define BOD. What is its relationship with the polluting potential of water?' ⟶ Directly proportional: Higher BOD means higher organic pollution.\n'What happens to activated sludge in sewage treatment plant?' ⟶ Small part used as inoculum; remaining goes to anaerobic sludge digester to generate biogas.",
            textbookRef: "Until today, no man-made technology has been able to rival the microbial action in treatment of sewage.",
            keyFormulas: [
              "Primary = Physical (Filtration + Sedimentation)",
              "Secondary = Biological (Aeration tank + Flocs + BOD reduction)",
              "Flocs = Bacteria + Fungal filaments mesh",
              "High BOD = Highly polluted water",
              "Anaerobic digester = Generates Biogas (CH₄ + H₂S + CO₂)"
            ],
            isImportant: true,
            examTag: 'Important Question'
          }
        ]
      },
      {
        id: 'bio-sub-8-4',
        title: '8.4 Microbes in Biogas Production',
        ...imp('Important Diagram', 'KVIC/IARI Biogas plant diagram, Methanobacterium role, dung slurry anaerobic digestion (repeated 3M)'),
        sections: [
          {
            id: 'bio-sec-8-4',
            title: 'Methanogens, Rumen Ecology & Biogas Plant Design',
            explanation: "• Biogas: Mixture of gases (predominantly Methane CH₄ 50–70%, CO₂ 30–40%, with traces of H₂ and H₂S) produced by anaerobic microbial digestion of biomass; used as clean fuel for cooking and lighting.\n• Methanogens: Strictly anaerobic bacteria that grow anaerobically on cellulosic material; example: Methanobacterium.\n• Natural Habitat of Methanogens:\n  1. Anaerobic sludge in sewage treatment plants.\n  2. Rumen (first stomach chamber) of cattle: where they break down cellulose in cattle food.\n  – Dung of cattle (Gobar) is extremely rich in methanogens and cellulosic waste; hence biogas is popularly called Gobar Gas.\n• Biogas Plant Design (KVIC / IARI Model):\n  – A 10 to 15 feet deep concrete tank collecting dung slurry (cattle dung + water in 1:1 ratio).\n  – Floating Gas Holder Cover placed over slurry, which rises as gas is generated by anaerobic bacteria.\n  – Gas Outlet with valve connected to pipes supplying biogas to rural households.\n  – Spent Slurry Outlet removes spent slurry through another chamber, used as nitrogen-phosphorus rich organic manure/fertiliser.\n• Pioneer Institutions: Indian Agricultural Research Institute (IARI) and Khadi and Village Industries Commission (KVIC) developed this rural technology in India.",
            questionFraming: "Most Repeated — 'Draw a labelled schematic diagram of a typical biogas plant.'\n'Name the group of bacteria producing biogas and mention their natural habitats.' ⟶ Methanogens (Methanobacterium); found in anaerobic sludge and rumen of cattle.\n'Name two Indian organizations that developed biogas technology in rural India.' ⟶ IARI and KVIC.",
            textbookRef: "Biogas burns with a non-smoky blue flame, producing no soot, making it environmentally friendly.",
            keyFormulas: [
              "Biogas = CH₄ (50-70%) + CO₂ (30-40%) + H₂S",
              "Bacteria = Methanobacterium (Methanogens)",
              "Raw material = Cattle dung (Gobar) + Water",
              "Developed by = IARI & KVIC",
              "Spent slurry = Rich organic manure"
            ],
            isImportant: true,
            examTag: 'Important Diagram'
          }
        ]
      },
      {
        id: 'bio-sub-8-5',
        title: '8.5 Microbes as Biocontrol Agents & Biofertilisers',
        ...imp('CBSE High Yield', 'Bt, Trichoderma, Baculoviruses (NPV in IPM), Rhizobium, Glomus mycorrhiza, Cyanobacteria (repeated 3M/5M)'),
        sections: [
          {
            id: 'bio-sec-8-5',
            title: 'Biological Pest Management & Soil Enrichment',
            explanation: "• Biocontrol: Use of biological methods for controlling plant diseases and insect pests, minimizing synthetic chemical pesticides:\n  1. Ladybird Beetle: Controls Aphids.\n  2. Dragonfly: Controls Mosquitoes.\n  3. Bacillus thuringiensis (Bt): Bacterium controlling butterfly caterpillars. Available as dried spores mixed with water and sprayed on vulnerable plants (Brassica, fruit trees); larvae ingest spores, toxin released in alkaline gut pore-formation kills larva; Bt toxin genes transferred into crops (Bt cotton).\n  4. Trichoderma: Free-living soil fungus common in root ecosystems; effective biocontrol agent against several fungal plant pathogens.\n  5. Baculoviruses (Genus Nucleopolyhedrovirus / NPV): Pathogens that attack insects and arthropods. Excellent candidates for species-specific, narrow-spectrum insecticidal applications; have NO negative impacts on plants, mammals, birds, fish, or non-target insects; highly desirable in Integrated Pest Management (IPM) in ecologically sensitive zones.\n• Biofertilisers: Organisms that enrich the nutrient quality of soil by fixing atmospheric nitrogen or solubilising minerals:\n  1. Bacteria:\n     – Rhizobium: Symbiotic nitrogen fixer in root nodules of leguminous plants.\n     – Azotobacter & Azospirillum: Free-living nitrogen-fixing bacteria in soil.\n  2. Fungi (Mycorrhiza):\n     – Genus Glomus forms symbiotic mycorrhizal associations with plant roots.\n     – Fungal hyphae absorb Phosphorus from soil and pass it to plant.\n     – Confers resistance to root-borne pathogens, tolerance to salinity and drought, enhances plant growth.\n  3. Cyanobacteria (Blue-Green Algae):\n     – Autotrophic microbes widespread in aquatic and terrestrial habitats: Anabaena, Nostoc, Oscillatoria.\n     – Fix atmospheric nitrogen; act as vital biofertilisers in paddy/rice fields, adding organic matter and increasing soil fertility.",
            questionFraming: "Most Repeated — 'Why are Baculoviruses (Nucleopolyhedrovirus) considered desirable in Integrated Pest Management (IPM)?'\n'Name a genus of fungus forming mycorrhiza and state two benefits it confers to the host plant.' ⟶ Genus Glomus; absorbs phosphorus, provides pathogen resistance.\n'Explain the role of cyanobacteria as biofertilisers in paddy fields.'\n'Name the biocontrol agent used against: (a) Aphids, (b) Mosquitoes, (c) Butterfly caterpillars.'",
            textbookRef: "Chemical fertilisers and pesticides pollute soil and water bodies; biofertilisers represent an eco-friendly renewable alternative.",
            keyFormulas: [
              "Ladybird = Aphids | Dragonfly = Mosquitoes",
              "Bt = Butterfly caterpillars (Alkaline gut endotoxin)",
              "Baculoviruses (NPV) = Species-specific, narrow spectrum, IPM safe",
              "Mycorrhiza (Glomus) = Phosphorus absorption + Pathogen resistance",
              "Cyanobacteria (Anabaena, Nostoc) = Paddy field biofertilisers"
            ],
            isImportant: true,
            examTag: 'CBSE High Yield'
          }
        ]
      }
    ]
  }
];
