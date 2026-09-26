// Full Granular NCERT Class 12 Biology High-Yield Notes

export const BIOLOGY_CHAPTERS = [
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
        title: '1.1 Flower Structure & Microsporogenesis',
        sections: [
          {
            id: 'bio-sec-1-1',
            title: 'Flower Whorls & Pollen Grain Wall Layers',
            explanation: "Androecium (stamens — male) and gynoecium (pistil/carpel — female) are the essential reproductive whorls. Pollen grains develop inside the microsporangium via meiosis. Mature pollen wall has an outer exine made of sporopollenin (most resistant organic material known, withstands high temperature, strong acids, and enzymes) with germ pores where sporopollenin is absent; inner thin intine is composed of cellulose and pectin.",
            questionFraming: "Reasoning — 'Why are pollen grains well-preserved as fossils?' ⟶ Due to presence of highly resistant chemical sporopollenin in the exine.",
            textbookRef: "Sporopollenin is synthesized by tapetum. Pollen viability varies from 30 minutes in rice/wheat to months in Rosaceae, Leguminosae, and Solanaceae.",
            keyFormulas: ["Exine: Sporopollenin (germ pores lack it)", "Intine: Cellulose + Pectin"]
          }
        ]
      },
      {
        id: 'bio-sub-1-2',
        title: '1.2 Megasporogenesis & Embryo Sac',
        sections: [
          {
            id: 'bio-sec-1-2',
            title: '7-Celled, 8-Nucleate Female Gametophyte',
            explanation: "A single functional megaspore at the chalazal end undergoes 3 successive mitotic free-nuclear divisions to form the female gametophyte (embryo sac). At maturity, cell walls form resulting in a typical 7-celled, 8-nucleate structure: 3 antipodal cells at the chalazal end, 1 central cell with 2 polar nuclei, and the egg apparatus at the micropylar end containing 1 egg cell and 2 synergids with filiform apparatus.",
            questionFraming: "Diagrammatic / Conceptual — 'Draw a labelled diagram of a mature 7-celled, 8-nucleate embryo sac. What is the role of the filiform apparatus?' ⟶ Guides the entry of the pollen tube into the synergid.",
            textbookRef: "Monosporic development (Polygonum type): 1 functional megaspore gives rise to the entire embryo sac while the other 3 degenerate.",
            keyFormulas: ["Embryo sac: 7 cells, 8 nuclei", "Filiform apparatus = Pollen tube guide"]
          }
        ]
      },
      {
        id: 'bio-sub-1-3',
        title: '1.3 Pollination & Outbreeding Devices',
        sections: [
          {
            id: 'bio-sec-1-3',
            title: 'Autogamy, Geitonogamy, Xenogamy & Outbreeding',
            explanation: "• Autogamy: Pollen transferred to stigma of same flower (chasmogamous or cleistogamous — Viola/Oxalis never open, ensuring seed set without pollinators).\n• Geitonogamy: Pollen transferred to another flower of same plant (genetically autogamous, functionally cross-pollination).\n• Xenogamy: Pollen transferred to flower of a different plant (brings genetic variation).\n• Outbreeding devices prevent self-pollination: Non-synchronisation of pollen release and stigma receptivity, anther and stigma placed at different positions, self-incompatibility (genetic mechanism), production of unisexual flowers (dioecious like papaya).",
            questionFraming: "Distinction — 'Differentiate between autogamy, geitonogamy, and xenogamy.' 'List any four outbreeding devices developed by flowering plants.'",
            textbookRef: "Cleistogamous flowers produce assured seed-set even in the absence of pollinators. Self-incompatibility prevents self-pollen from fertilising ovules by inhibiting pollen germination or pollen tube growth in the pistil.",
            keyFormulas: ["Cleistogamous = No cross-pollination, 100% autogamous", "Xenogamy = Genetic variation"]
          }
        ]
      },
      {
        id: 'bio-sub-1-4',
        title: '1.4 Double Fertilisation & Post-Fertilisation',
        sections: [
          {
            id: 'bio-sec-1-4',
            title: 'Syngamy, Triple Fusion & Apomixis',
            explanation: "Double fertilisation is unique to angiosperms:\n1. Syngamy: One male gamete (n) fuses with egg nucleus (n) ⟶ Diploid Zygote (2n), developing into embryo.\n2. Triple Fusion: Second male gamete (n) fuses with 2 polar nuclei (2n) in central cell ⟶ Triploid Primary Endosperm Nucleus (PEN, 3n), developing into nutritive endosperm (endosperm development precedes embryo development).\n• Apomixis: Form of asexual reproduction that mimics sexual reproduction, producing seeds without fertilisation (e.g. Asteraceae and grasses). Polyembryony: Occurrence of more than one embryo in a seed (Citrus, Mango).",
            questionFraming: "Conceptual — 'Explain why endosperm development precedes embryo development.' ⟶ To ensure continuous nutrient supply to the developing embryo.\n'What is apomixis and what is its agricultural importance?' ⟶ Clones hybrid vigor across generations without segregation.",
            textbookRef: "Ovule ⟶ Seed; Integuments ⟶ Seed coat (testa, tegmen); Ovary ⟶ Fruit (pericarp); Coconut water is free-nuclear endosperm.",
            keyFormulas: [
              "Syngamy: n + n ⟶ 2n (Zygote)",
              "Triple Fusion: n + 2n ⟶ 3n (PEN)",
              "Apomixis: Seed formation without fertilisation"
            ]
          }
        ]
      }
    ]
  },
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
        title: '2.1 Male & Female Reproductive Systems',
        sections: [
          {
            id: 'bio-sec-2-1',
            title: 'Seminiferous Tubules, Ovaries & Accessory Glands',
            explanation: "• Male: Testes located outside abdominal cavity in scrotum (maintains 2-2.5°C lower temperature for spermatogenesis). Seminiferous tubules contain Sertoli cells (nourish germ cells) and Leydig/interstitial cells (secrete androgens/testosterone). Accessory glands: Seminal vesicles, Prostate, Bulbourethral glands (secrete seminal plasma rich in fructose, calcium, enzymes).\n• Female: Ovaries (produce ova and steroid hormones), Fallopian tubes (infundibulum with fimbriae, ampulla, isthmus), Uterus (endometrium, myometrium, perimetrium), Cervix, Vagina.",
            questionFraming: "Pathway / Role — 'Trace the path of sperm from seminiferous tubules to outside the male body.' (Rete testis ⟶ Vasa efferentia ⟶ Epididymis ⟶ Vas deferens ⟶ Ejaculatory duct ⟶ Urethra).\n'State functions of Sertoli cells and Leydig cells.'",
            textbookRef: "Scrotum thermoregulation: 2-2.5°C below core body temperature. Fimbriae help in collection of ovum after ovulation.",
            keyFormulas: ["Pathway: Tubules ⟶ Rete ⟶ Vasa efferentia ⟶ Epididymis ⟶ Vas deferens ⟶ Urethra"]
          }
        ]
      },
      {
        id: 'bio-sub-2-2',
        title: '2.2 Gametogenesis (Spermatogenesis vs Oogenesis)',
        sections: [
          {
            id: 'bio-sec-2-2',
            title: 'Spermatogenesis vs Oogenesis Comparison',
            explanation: "• Spermatogenesis: Starts at puberty. Spermatogonia (2n) ⟶ Primary spermatocyte (2n) ⟶ Meiosis I ⟶ 2 Secondary spermatocytes (n) ⟶ Meiosis II ⟶ 4 Spermatids (n) ⟶ Spermiogenesis ⟶ 4 functional Spermatozoa.\n• Oogenesis: Initiated during embryonic fetal life. Oogonia (2n) form primary oocytes (2n), arrested in Prophase-I until puberty. Meiosis-I completes just prior to ovulation, yielding large Secondary oocyte (n) and 1st polar body. Meiosis-II completes only upon entry of sperm into ovum, yielding functional ovum (ootid) and 2nd polar body.",
            questionFraming: "Distinction — 'Distinguish between spermatogenesis and oogenesis with respect to time of initiation, products, and meiosis completion.'",
            textbookRef: "Spermiogenesis: Transformation of spermatids into spermatozoa. Spermiation: Release of mature sperms from Sertoli cells into cavity of seminiferous tubules.",
            keyFormulas: [
              "Spermatogenesis: 1 primary spermatocyte ⟶ 4 functional sperms",
              "Oogenesis: 1 primary oocyte ⟶ 1 ovum + polar bodies"
            ]
          }
        ]
      },
      {
        id: 'bio-sub-2-3',
        title: '2.3 Menstrual Cycle Hormonal Regulation',
        sections: [
          {
            id: 'bio-sec-2-3',
            title: 'Menstrual Phases, LH Surge & Hormones',
            explanation: "The menstrual cycle averages 28-29 days:\n1. Menstrual phase (days 1-5): Breakdown of endometrial lining due to progesterone withdrawal.\n2. Follicular/Proliferative phase (days 6-13): Pituitary FSH & LH stimulate follicle maturation; growing follicles secrete Estrogen which proliferates endometrium.\n3. Ovulatory phase (day 14): Rapid secretion of LH reaches maximum peak (LH Surge), causing rupture of mature Graafian follicle and release of ovum (ovulation).\n4. Luteal/Secretory phase (days 15-28): Ruptured follicle transforms into Corpus Luteum, secreting large amounts of Progesterone to maintain endometrium for pregnancy.",
            questionFraming: "Hormonal Regulation — 'Describe the hormonal control of the menstrual cycle in human females. What is the significance of the LH surge?'",
            textbookRef: "If fertilisation does not occur, corpus luteum degenerates into corpus albicans, progesterone levels plummet, triggering the next menstrual bleeding.",
            keyFormulas: ["LH Surge (Day 14) ⟶ Ovulation", "Corpus Luteum ⟶ Progesterone"]
          }
        ]
      },
      {
        id: 'bio-sub-2-4',
        title: '2.4 Fertilisation, Implantation & Pregnancy',
        sections: [
          {
            id: 'bio-sec-2-4',
            title: 'Ampullary Fertilisation, Cleavage & Placenta',
            explanation: "Fertilisation occurs at the ampullary-isthmic junction of the fallopian tube. Acrosome of sperm releases enzymes (hyaluronidase, acrosin) facilitating penetration of corona radiata and zona pellucida. Entry of sperm triggers cortical reaction blocking polyspermy. Mitotic cleavage forms morula (8-16 cells) then blastocyst (trophoblast outer layer + inner cell mass). Trophoblast attaches to endometrium (implantation). Placenta acts as endocrine organ secreting hCG, hPL, estrogens, progesterone, and relaxin.",
            questionFraming: "Mechanism — 'How does the zona pellucida prevent polyspermy in humans?' ⟶ Cortical granule release induces chemical hardening of zona pellucida upon entry of first sperm.",
            textbookRef: "Human chorionic gonadotropin (hCG), hPL, and relaxin (from ovary) are produced in women only during pregnancy. Detection of hCG in urine is the basis of pregnancy tests.",
            keyFormulas: ["Fertilisation site: Ampullary-isthmic junction", "Hormones exclusive to pregnancy: hCG, hPL, Relaxin"]
          }
        ]
      }
    ]
  },
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
        title: '3.1 Birth Control Methods',
        sections: [
          {
            id: 'bio-sec-3-1',
            title: 'Barriers, IUDs, Oral Contraceptives & Surgical Sterilization',
            explanation: "• Natural methods: Periodic abstinence (day 10-17 fertile period), coitus interruptus, lactational amenorrhea (up to 6 months post-partum).\n• Barrier methods: Condoms (protect against STIs/AIDS), diaphragms, cervical caps.\n• Intrauterine Devices (IUDs):\n  - Non-medicated: Lippes loop\n  - Copper-releasing: CuT, Cu7, Multiload 375 (Cu²⁺ ions suppress sperm motility and fertilising capacity)\n  - Hormone-releasing: Progestasert, LNG-20 (make uterus unsuitable for implantation and cervix hostile to sperm)\n• Oral pills: Inhibit ovulation and implantation; Saheli is a non-steroidal oral pill developed by CDRI Lucknow, taken once a week.\n• Surgical methods (permanent sterilization): Vasectomy in males (cutting vas deferens), Tubectomy in females (cutting fallopian tubes).",
            questionFraming: "Application — 'Explain the mode of action of Cu-T and oral contraceptive pills.' 'What makes Saheli an ideal contraceptive pill?'",
            textbookRef: "MTP (Medical Termination of Pregnancy) Act allows legal abortion up to 24 weeks under specified medical conditions to prevent maternal mortality and unsafe abortions.",
            keyFormulas: ["Cu-IUDs: Suppress sperm motility", "Hormone IUDs: Inhibit implantation & ovulation"]
          }
        ]
      },
      {
        id: 'bio-sub-3-2',
        title: '3.2 Infertility & Assisted Reproductive Technologies (ART)',
        sections: [
          {
            id: 'bio-sec-3-2',
            title: 'IVF, ZIFT, GIFT & ICSI Procedures',
            explanation: "When couples cannot conceive naturally, ART techniques provide assisted conception:\n• In Vitro Fertilisation (IVF): Ova and sperm fertilised outside body in laboratory ('test-tube baby').\n• ZIFT (Zygote Intra-Fallopian Transfer): Zygote or early embryo up to 8 blastomeres transferred into fallopian tube.\n• IUT (Intra-Uterine Transfer): Embryo with more than 8 blastomeres transferred directly into uterus.\n• GIFT (Gamete Intra-Fallopian Transfer): Transfer of ovum collected from donor into fallopian tube of female who cannot produce one but can provide environment.\n• ICSI (Intra-Cytoplasmic Sperm Injection): Single sperm directly injected into ovum cytoplasm (for severe oligozoospermia).\n• AI / IUI: Artificial Insemination into uterus.",
            questionFraming: "Distinction — 'Distinguish between ZIFT and GIFT.' 'Under what clinical conditions is ICSI recommended?'",
            textbookRef: "Amniocentesis: Diagnostic procedure analyzing chromosomal patterns of fetal cells in amniotic fluid. Legally banned for sex determination in India to stop female foeticide.",
            keyFormulas: [
              "ZIFT: Embryo ≤ 8 blastomeres into fallopian tube",
              "IUT: Embryo > 8 blastomeres into uterus",
              "GIFT: Gamete (ovum) transfer into fallopian tube",
              "ICSI: Direct microinjection of sperm"
            ]
          }
        ]
      }
    ]
  },
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
        title: '4.1 Mendel’s Laws of Inheritance',
        sections: [
          {
            id: 'bio-sec-4-1',
            title: 'Dominance, Segregation & Independent Assortment',
            explanation: "Gregor Mendel studied garden pea (Pisum sativum) with 7 contrasting characters:\n1. Law of Dominance: In a monohybrid cross between two pure-breeding parents, only the dominant trait expresses in F₁; recessive is masked.\n2. Law of Segregation (Purity of Gametes): Alleles do not blend; during gametogenesis, the two alleles segregate so that each gamete receives only one allele (universal law with no exceptions).\n3. Law of Independent Assortment: When two pairs of traits are combined in a hybrid, segregation of one pair is independent of the other pair during gamete formation (dihybrid F₂ phenotypic ratio 9:3:3:1).",
            questionFraming: "Crosses — 'A heterozygous round yellow seeded plant (RrYy) is self-pollinated. Calculate the probability of getting plants with wrinkled green seeds (rryy = 1/16).' 'What is a test cross?' ⟶ Cross with homozygous recessive (F₁ × recessive) to determine unknown genotype.",
            textbookRef: "Monohybrid F₂: Phenotypic 3:1, Genotypic 1:2:1. Dihybrid F₂: 9:3:3:1. Test cross ratio for monohybrid is 1:1; for dihybrid is 1:1:1:1.",
            keyFormulas: [
              "Monohybrid F₂: 3:1 (phenotypic), 1:2:1 (genotypic)",
              "Dihybrid F₂: 9:3:3:1 (phenotypic)",
              "Test cross: F₁ (Aa) × aa ⟶ 1:1"
            ]
          }
        ]
      },
      {
        id: 'bio-sub-4-2',
        title: '4.2 Incomplete Dominance & Codominance',
        sections: [
          {
            id: 'bio-sec-4-2',
            title: 'Snapdragon Blending & ABO Blood Groups',
            explanation: "• Incomplete Dominance: F₁ phenotype does not resemble either parent and is an intermediate blend. Example: Snapdragon (Antirrhinum majus) / Mirabilis jalapa flower colour. Red (RR) × White (rr) ⟶ Pink (Rr). F₂ phenotypic and genotypic ratios are identical: 1 Red : 2 Pink : 1 White (1:2:1).\n• Codominance: Both alleles express simultaneously and independently in heterozygote. Example: Human ABO blood group controlled by gene I with 3 alleles (I^A, I^B, i). I^A and I^B are codominant (AB blood group), both dominant over recessive allele i. Produces 6 genotypes and 4 phenotypes.",
            questionFraming: "Genetic Cross — 'Show with a cross why the phenotypic and genotypic ratios are identical (1:2:1) in incomplete dominance.' 'A man with blood group A marries a woman with blood group B. What are the possible blood groups of their children?'",
            textbookRef: "Multiple alleles: More than two alleles governing the same gene locus in a population (ABO blood grouping). Pleiotropy: Single gene influencing multiple phenotypic traits (e.g. Phenylketonuria).",
            keyFormulas: [
              "Incomplete dominance F₂: 1:2:1 (both phenotypic & genotypic)",
              "ABO Blood: 6 genotypes (I^A I^A, I^A i, I^B I^B, I^B i, I^A I^B, ii), 4 phenotypes (A, B, AB, O)"
            ]
          }
        ]
      },
      {
        id: 'bio-sub-4-3',
        title: '4.3 Linkage, Recombination & Genetic Disorders',
        sections: [
          {
            id: 'bio-sec-4-3',
            title: 'Morgan’s Drosophila Linkage & Mendelian Disorders',
            explanation: "• Chromosomal Theory of Inheritance (Sutton & Boveri): Chromosomes and genes occur in pairs and segregate at gametogenesis.\n• Linkage & Recombination (T.H. Morgan): Genes on the same chromosome that tend to be inherited together are linked. Recombination frequency between gene pairs is proportional to the distance between them (Alfred Sturtevant used this to construct chromosome genetic maps).\n• Mendelian Disorders:\n  - Haemophilia: X-linked recessive, defect in clotting factor.\n  - Sickle-cell anaemia: Autosomal recessive, GAG ⟶ GUG point mutation at 6th codon of β-globin chain (Glutamic acid replaced by Valine), causing HbS polymerization and sickling under low O₂.\n  - Phenylketonuria: Autosomal recessive inborn error of metabolism.\n• Chromosomal Disorders:\n  - Down's Syndrome: Trisomy of chromosome 21 (47, +21).\n  - Klinefelter's Syndrome: 47, XXY (sterile male with gynaecomastia).\n  - Turner's Syndrome: 45, X0 (sterile female with rudimentary ovaries).",
            questionFraming: "Molecular Pathology — 'Explain the genetic and molecular basis of sickle cell anaemia.' 'Why is haemophilia rarely seen in human females?' ⟶ Mother must be carrier and father must be haemophilic.",
            textbookRef: "Sex determination: XX-XY (Humans, Drosophila), ZZ-ZW (Birds - female heterogamety), XX-X0 (Grasshopper - male heterogamety).",
            keyFormulas: [
              "Sickle cell mutation: GAG ⟶ GUG (Glu ⟶ Val at position 6)",
              "Down's: 47 (+21) | Klinefelter's: 47 (XXY) | Turner's: 45 (X0)"
            ]
          }
        ]
      }
    ]
  },
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
        title: '5.1 DNA Structure & Packaging',
        sections: [
          {
            id: 'bio-sec-5-1',
            title: 'Watson-Crick Double Helix & Nucleosome Model',
            explanation: "• Watson & Crick Double Helix (1953) based on Rosalind Franklin's X-ray crystallography: Two polynucleotide chains with antiparallel polarity (5'⟶3' and 3'⟶5'). Bases pair via hydrogen bonds: Adenine pairs with Thymine (2 H-bonds: A=T), Guanine pairs with Cytosine (3 H-bonds: G≡C). Pitch of helix = 3.4 nm, 10 base pairs per turn (0.34 nm per bp).\n• Chargaff’s Rules: For double-stranded DNA, [A] = [T] and [G] = [C], hence [A + G] / [T + C] = 1.\n• DNA Packaging in Eukaryotes: Positively charged basic histone octamer (2 each of H2A, H2B, H3, H4) wrapped around by 200 bp of negatively charged DNA to form a Nucleosome ('beads on a string'). H1 histone binds linker DNA.",
            questionFraming: "Numerical — 'If a double stranded DNA has 20% cytosine, calculate the percentage of adenine.' (C = 20% ⟹ G = 20%, A + T = 60% ⟹ A = 30%).\n'Describe the structure of a nucleosome.'",
            textbookRef: "Euchromatin: Loosely packed, stains light, transcriptionally active.\nHeterochromatin: Densely packed, stains dark, transcriptionally inactive.",
            keyFormulas: [
              "Chargaff's Rule: A + G = T + C",
              "Nucleosome = Histone octamer + ~200 bp DNA"
            ]
          }
        ]
      },
      {
        id: 'bio-sub-5-2',
        title: '5.2 DNA as Genetic Material & Replication',
        sections: [
          {
            id: 'bio-sec-5-2',
            title: 'Hershey-Chase & Meselson-Stahl Experiments',
            explanation: "• Hershey & Chase Experiment (1952): Used bacteriophage T2 labeled with radioactive ³⁵S (protein coat) and ³²P (DNA). After infection, blending, and centrifugation, only ³²P was found inside E. coli bacterial pellet, definitively proving DNA is the genetic material.\n• Meselson & Stahl Experiment (1958): Grew E. coli in ¹⁵NH₄Cl heavy medium, then shifted to ¹⁴NH₄Cl light medium. CsCl density gradient centrifugation after 1 generation (20 min) showed intermediate hybrid density (¹⁵N-¹⁴N), and after 2 generations (40 min) showed equal hybrid and light bands, proving semiconservative replication.",
            questionFraming: "Experimental Proof — 'Describe the experiment that unequivocally proved that DNA is the genetic material (Hershey-Chase).' 'How did Meselson and Stahl prove semiconservative replication?'",
            textbookRef: "DNA Polymerase synthesises DNA only in 5'⟶3' direction. Continuous synthesis on leading strand; discontinuous synthesis as Okazaki fragments on lagging strand, joined by DNA Ligase.",
            keyFormulas: [
              "Hershey-Chase: ³²P inside cells (DNA is genetic material)",
              "Meselson-Stahl: 1st gen = 100% hybrid, 2nd gen = 50% hybrid + 50% light"
            ]
          }
        ]
      },
      {
        id: 'bio-sub-5-3',
        title: '5.3 Transcription, Genetic Code & Translation',
        sections: [
          {
            id: 'bio-sec-5-3',
            title: 'Central Dogma, Genetic Code & Protein Synthesis',
            explanation: "• Central Dogma: DNA ⟶ (transcription) ⟶ mRNA ⟶ (translation) ⟶ Protein.\n• Transcription Unit: Promoter (RNA polymerase binding site with TATA box), Structural gene, and Terminator. In eukaryotes: Pre-mRNA (hnRNA) undergoes splicing (introns removed, exons joined), capping (methyl guanosine triphosphate at 5' end), and tailing (poly-A tail of 200-300 adenylate residues at 3' end).\n• Genetic Code: Triplet codons; degenerate (61 codons code for 20 amino acids); universal; AUG codes for Methionine and is the initiator codon; UAA, UAG, UGA are stop codons.\n• Translation: Ribosome attaches to mRNA. Aminoacyl-tRNA recognizes codon through its anticodon loop (adaptor molecule). Peptide bond synthesized by peptidyl transferase (23S rRNA in bacteria).",
            questionFraming: "Conceptual — 'Explain the features of the genetic code: degenerate, unambiguous, universal.' 'What are the post-transcriptional modifications that hnRNA undergoes in eukaryotes?'",
            textbookRef: "Template strand has 3'⟶5' polarity; coding strand has 5'⟶3' polarity. mRNA sequence matches coding strand with Uracil in place of Thymine.",
            keyFormulas: [
              "Initiator: AUG (Methionine)",
              "Stop codons: UAA, UAG, UGA",
              "Splicing = Exons retained, Introns removed"
            ]
          }
        ]
      },
      {
        id: 'bio-sub-5-4',
        title: '5.4 Gene Expression Regulation (Lac Operon) & DNA Fingerprinting',
        sections: [
          {
            id: 'bio-sec-5-4',
            title: 'Lac Operon Induction & VNTR Fingerprinting',
            explanation: "• Lac Operon (Jacob & Monod): An inducible operon system for lactose catabolism in E. coli:\n  - In absence of inducer (lactose): Regulatory gene i produces repressor protein which binds operator region (O), preventing RNA polymerase from transcribing structural genes.\n  - In presence of inducer (lactose/allolactose): Inducer binds repressor, rendering it inactive. RNA polymerase binds promoter and transcribes:\n    1. lacZ: codes for β-galactosidase (hydrolyses lactose to glucose + galactose)\n    2. lacY: codes for Permease (increases cell permeability to lactose)\n    3. lacA: codes for Transacetylase.\n• DNA Fingerprinting (Alec Jeffreys): Relies on Variable Number Tandem Repeats (VNTRs) / satellite DNA showing high degree of polymorphism. Steps: DNA extraction ⟶ Restriction digestion (EcoRI) ⟶ Gel electrophoresis ⟶ Southern blotting ⟶ Radioactive VNTR probe hybridization ⟶ Autoradiography.",
            questionFraming: "Mechanism — 'Explain how the Lac operon is switched on in the presence of lactose with a neat schematic diagram.' 'State the principle and steps of DNA fingerprinting.'",
            textbookRef: "Human Genome Project (HGP): 3.164 billion nucleotide base pairs; average gene contains 3000 bases; chromosome 1 has most genes (2968), Y has fewest (231).",
            keyFormulas: [
              "lacZ: β-galactosidase",
              "lacY: Permease",
              "lacA: Transacetylase",
              "DNA Fingerprinting = VNTR probe hybridization"
            ]
          }
        ]
      }
    ]
  },
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
        title: '6.1 Origin of Life & Miller-Urey Experiment',
        sections: [
          {
            id: 'bio-sec-6-1',
            title: 'Chemical Evolution & Abiogenesis',
            explanation: "Oparin-Haldane hypothesis stated that life originated from non-living organic molecules ('chemical evolution'). S.L. Miller and H.C. Urey (1953) created experimental simulation of primitive Earth's reducing atmosphere:\n• Enclosed flask with CH₄, NH₃, H₂, and water vapour at 800°C.\n• Electric discharge using tungsten electrodes.\n• Condensation revealed synthesis of simple amino acids (glycine, alanine, aspartic acid), supporting abiogenesis.",
            questionFraming: "Experimental Setup — 'Describe the Miller-Urey experiment with a labelled diagram. What gases were used and what was synthesized?'",
            textbookRef: "First cellular forms of life originated about 2000 million years ago (mya). Early atmosphere lacked free oxygen (reducing atmosphere).",
            keyFormulas: ["Gases: CH₄ + NH₃ + H₂ + H₂O vapour at 800°C with electric spark"]
          }
        ]
      },
      {
        id: 'bio-sub-6-2',
        title: '6.2 Evidence for Evolution: Homology vs Analogy',
        sections: [
          {
            id: 'bio-sec-6-2',
            title: 'Homologous vs Analogous Organs & Adaptive Radiation',
            explanation: "• Homologous Organs: Same embryonic origin and anatomical structure, adapted for different functions. Represents Divergent Evolution. Indicates common ancestry. Examples: Forelimbs of cheetah, whale, bat, and human; thorns of Bougainvillea and tendrils of Cucurbita.\n• Analogous Organs: Different anatomical structure and origin, adapted for similar function. Represents Convergent Evolution. Does not indicate common ancestry. Examples: Wings of bird and butterfly; eye of octopus and mammal; sweet potato (root) and potato (stem).\n• Adaptive Radiation: Evolutionary diversification of a single ancestral species into multiple diverse forms in separate ecological niches. Example: Darwin's finches in Galapagos Islands and Australian marsupials.",
            questionFraming: "Distinction — 'Differentiate between homologous and analogous organs. How do they support divergent and convergent evolution?' 'Give an example of adaptive radiation.'",
            textbookRef: "Industrial Melanism in peppered moth (Biston betularia): Prior to industrialization, white-winged moths were favored; after pollution covered tree bark with dark soot, dark melanic moths survived predation by birds, demonstrating natural selection.",
            keyFormulas: [
              "Homology ⟶ Divergent Evolution (Common ancestor)",
              "Analogy ⟶ Convergent Evolution (Similar ecological pressure)"
            ]
          }
        ]
      },
      {
        id: 'bio-sub-6-3',
        title: '6.3 Hardy-Weinberg Principle & Natural Selection',
        sections: [
          {
            id: 'bio-sec-6-3',
            title: 'Hardy-Weinberg Equilibrium & Human Evolution',
            explanation: "• Hardy-Weinberg Principle: In a large, randomly mating diploid population with no mutation, gene flow, genetic drift, or selection, allele frequencies remain constant from generation to generation:\n  p² + 2pq + q² = 1 (where p = frequency of dominant allele A, q = frequency of recessive allele a, p + q = 1).\n• Disrupting Factors: Gene migration/flow, Genetic drift (Founder effect, Bottleneck), Mutation, Genetic recombination, Natural selection (stabilizing, directional, or disruptive).\n• Human Evolution Timeline:\n  Dryopithecus & Ramapithecus (15 mya) ⟶ Australopithecus (2 mya, hunted with stone tools, ate fruits) ⟶ Homo habilis ('handy man', brain 650-800 cc) ⟶ Homo erectus (1.5 mya, brain 900 cc, ate meat) ⟶ Neanderthal man (100,000-40,000 years ago, brain 1400 cc, buried dead) ⟶ Homo sapiens (modern human, evolved in Africa during ice age).",
            questionFraming: "Numerical — 'In a population at Hardy-Weinberg equilibrium, frequency of recessive trait is 16%. Calculate the frequency of heterozygous carriers (q² = 0.16 ⟹ q = 0.4, p = 0.6, 2pq = 2×0.6×0.4 = 0.48 or 48%).'\n'Arrange the ancestral stages of human evolution in chronological order.'",
            textbookRef: "Types of Natural Selection curves: Stabilizing (peak gets higher and narrower, selects average), Directional (peak shifts in one direction), Disruptive (two peaks form at extremes).",
            keyFormulas: [
              "p + q = 1",
              "p² + 2pq + q² = 1",
              "Carrier frequency = 2pq",
              "Timeline: Australopithecus ⟶ H. habilis (650-800 cc) ⟶ H. erectus (900 cc) ⟶ Neanderthal (1400 cc) ⟶ H. sapiens"
            ]
          }
        ]
      }
    ]
  }
];
