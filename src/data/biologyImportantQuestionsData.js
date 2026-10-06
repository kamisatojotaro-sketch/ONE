// Official CBSE Class 12 Biology High-Yield Question Bank
// Categorized into Two Special Sections:
// 1. "Big Orange: High-Yield Chapter Questions" (Category: "Big Orange")
// 2. "Big Orange: Page-Referenced & Core Diagrams" (Category: "Big Orange (NCERT Page-Referenced)")
// Every question is researched against NCERT 2024-2026 textbook pages, CBSE marking schemes, and 10-year PYQ patterns.

export const BIG_ORANGE_CORE_QUESTIONS = [
  // ==========================================================================
  // CHAPTER 4: PRINCIPLES OF INHERITANCE AND VARIATION
  // ==========================================================================
  {
    id: "bio-core-1",
    number: 1,
    section: "core",
    title: "Mendel's Laws of Inheritance (Dominance, Segregation & Independent Assortment)",
    shortLabel: "Mendel's 3 Laws of Inheritance",
    chapterId: "bio-ch-4",
    chapterTitle: "Principles of Inheritance and Variation",
    unit: "Genetics and Evolution",
    marks: "5 Marks",
    marksNum: 5,
    category: "Big Orange",
    frequency: "Asked 9+ times in CBSE Board Exams (Guaranteed Core)",
    questionPrompt: "(a) State and explain Mendel's Law of Dominance using a monohybrid cross.\n(b) Why is Mendel's Law of Segregation called universally applicable without exception?\n(c) State the Law of Independent Assortment with a phenotypic ratio of a dihybrid cross.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 4: Principles of Inheritance and Variation",
      page: "Pages 56–63",
      figures: "Fig 4.2 & Fig 4.7"
    },
    theory: [
      "1. Law of Dominance: (i) Characters are controlled by discrete units called factors (genes). (ii) Factors occur in pairs. (iii) In a dissimilar pair of factors, one member of the pair dominates (dominant) the other (recessive). E.g., Tall (TT) × Dwarf (tt) → All F₁ are Tall (Tt).",
      "2. Law of Segregation (Purity of Gametes): Alleles do not show any blending. Both characters are recovered as such in the F₂ generation though one is not seen at F₁. During gamete formation, the factors of a pair separate/segregate such that a gamete receives only one of the two alleles. This law is universally accepted without exception.",
      "3. Law of Independent Assortment: When two pairs of traits are combined in a hybrid, segregation of one pair of characters is independent of the other pair of characters during gamete formation. In a dihybrid cross (Round Yellow × Wrinkled Green), the F₂ phenotypic ratio is 9:3:3:1."
    ],
    keyPointsAndKeywords: [
      "Factors occur in pairs",
      "Dominant allele masks recessive",
      "No blending of alleles",
      "Universally applicable (Purity of gametes)",
      "Independent assortment gives 9:3:3:1 phenotypic ratio"
    ],
    modelAnswer: {
      statement: "Mendel formulated three fundamental principles of inheritance: Dominance, Segregation, and Independent Assortment based on monohybrid and dihybrid hybridization experiments on Pisum sativum.",
      markingScheme: [
        "1.5 Marks: Law of Dominance definition + cross representation showing F₁ (Tt) phenotypically tall.",
        "1.5 Marks: Law of Segregation definition + reason for universality (no blending, heterozygous individual produces 50% gametes of each allele).",
        "2 Marks: Law of Independent Assortment statement + F₂ phenotypic ratio 9:3:3:1 (Round-Yellow: 9, Round-Green: 3, Wrinkled-Yellow: 3, Wrinkled-Green: 1)."
      ],
      examinerTips: "Remember: Law of Segregation has NO exceptions, whereas Law of Dominance has exceptions (Incomplete dominance, Co-dominance) and Law of Independent Assortment has exceptions (Linkage)."
    }
  },
  {
    id: "bio-core-2",
    number: 2,
    section: "core",
    title: "Deviations of Mendel's Laws: Incomplete Dominance & Co-dominance",
    shortLabel: "Incomplete Dominance & Co-dominance",
    chapterId: "bio-ch-4",
    chapterTitle: "Principles of Inheritance and Variation",
    unit: "Genetics and Evolution",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange",
    frequency: "Repeated 3M Question (CBSE 2017, 2019, 2023)",
    questionPrompt: "Differentiate between Incomplete Dominance and Co-dominance. Give one suitable genetic cross example for each with F₂ phenotypic and genotypic ratios.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 4: Principles of Inheritance and Variation",
      page: "Pages 60–63",
      figures: "Fig 4.3"
    },
    theory: [
      "• Incomplete Dominance: Neither allele is completely dominant over the other. The F₁ hybrid exhibits an intermediate phenotype between the two parental extremes.",
      "  – Example: Flower colour in Snapdragon (Antirrhinum majus) or Mirabilis jalapa. True-breeding Red (RR) × White (rr) → F₁ Pink (Rr).",
      "  – F₂ Generation: Phenotypic ratio = 1 Red : 2 Pink : 1 White (1:2:1); Genotypic ratio = 1 RR : 2 Rr : 1 rr (1:2:1). Both ratios are identical!",
      "• Co-dominance: Both alleles of a gene express themselves equally and simultaneously in the heterozygous state without blending.",
      "  – Example: ABO blood grouping in humans governed by gene I. Alleles I^A and I^B are codominant. When present together (I^A I^B), both produce their respective surface glycoprotein antigens, resulting in AB blood group."
    ],
    keyPointsAndKeywords: [
      "Intermediate phenotype in F₁",
      "Snapdragon (Antirrhinum majus)",
      "Phenotypic = Genotypic ratio (1:2:1)",
      "Simultaneous full expression of both alleles",
      "ABO blood groups (I^A I^B genotype)"
    ],
    modelAnswer: {
      statement: "Deviations from Mendelian 3:1 ratio include Incomplete Dominance (intermediate blending-like phenotype) and Co-dominance (independent equal expression of both alleles).",
      markingScheme: [
        "1.5 Marks: Incomplete dominance definition, Antirrhinum cross, and F₂ ratio (1:2:1 phenotypic and genotypic).",
        "1.5 Marks: Co-dominance definition, ABO blood group I^A I^B explanation, and absence of intermediate phenotype."
      ],
      examinerTips: "Highlight that in Incomplete Dominance, phenotypic ratio changes from 3:1 to 1:2:1, exactly matching the genotypic ratio."
    }
  },
  {
    id: "bio-core-3",
    number: 3,
    section: "core",
    title: "Sex Determination in Honeybees (Haplodiploidy Mechanism)",
    shortLabel: "Honeybee Haplodiploidy",
    chapterId: "bio-ch-4",
    chapterTitle: "Principles of Inheritance and Variation",
    unit: "Genetics and Evolution",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange",
    frequency: "CBSE 2018, 2020, 2022, 2024 (Very High Probability)",
    questionPrompt: "Explain the haplodiploid mechanism of sex determination in honeybees. Why do male honeybees (drones) have no father and cannot have sons, but have a grandfather and can have grandsons?",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 4: Principles of Inheritance and Variation",
      page: "Pages 69–70",
      figures: "Fig 4.13"
    },
    theory: [
      "• Sex determination in honeybees is based on the number of sets of chromosomes an individual receives (Haplodiploid mechanism).",
      "• Females (Queen & Worker): Formed by the union of sperm (n=16) and egg (n=16) → Diploid (2n = 32 chromosomes).",
      "• Males (Drones): Develop parthenogenetically from unfertilized eggs without sperm union → Haploid (n = 16 chromosomes).",
      "• Spermatogenesis in males occurs by Mitosis (since they are already haploid, n=16 produces n=16 sperms).",
      "• Unique Lineage Paradox: A male drone produces sperms that only fertilize eggs to yield diploid females (workers/queens). Thus, drones have no sons. Drones arise from unfertilized eggs of the queen, so they have no father. However, the queen herself developed from a fertilised egg produced by a female and male (grandfather). Hence, drones have a grandfather and can have grandsons!"
    ],
    keyPointsAndKeywords: [
      "Haplodiploid mechanism",
      "Female 2n = 32 (fertilization)",
      "Male n = 16 (parthenogenesis)",
      "Males produce sperm via mitosis",
      "No father, no sons; has grandfather and grandsons"
    ],
    modelAnswer: {
      statement: "Honeybees exhibit haplodiploidy where sex is decided by ploidy: unfertilised eggs develop into haploid males (drones, n=16) via parthenogenesis, while fertilised eggs develop into diploid females (queens/workers, 2n=32).",
      markingScheme: [
        "1 Mark: Explanation of female (2n=32, fertilized) vs male (n=16, parthenogenesis).",
        "1 Mark: Mitotic sperm production in haploid males.",
        "1 Mark: Logical justification of the father/son/grandfather/grandson lineage paradox."
      ],
      examinerTips: "Always draw the quick flow diagram: Female (2n=32) ⟶ Meiosis ⟶ Egg (n=16); Male (n=16) ⟶ Mitosis ⟶ Sperm (n=16). Egg + Sperm = Female (2n); Unfertilized Egg = Male (n)."
    }
  },
  {
    id: "bio-core-4",
    number: 4,
    section: "core",
    title: "Mendelian Disorders: Haemophilia, Sickle-Cell Anaemia & Thalassemia",
    shortLabel: "Mendelian Disorders Comparison",
    chapterId: "bio-ch-4",
    chapterTitle: "Principles of Inheritance and Variation",
    unit: "Genetics and Evolution",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange",
    frequency: "CBSE 2016, 2018, 2020, 2023",
    questionPrompt: "What are Mendelian disorders? Describe the genetic basis, inheritance pattern, and symptoms of:\n(i) Haemophilia\n(ii) Sickle-cell anaemia\n(iii) Thalassemia",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 4: Principles of Inheritance and Variation",
      page: "Pages 72–74",
      figures: "Fig 4.15 & Fig 4.16"
    },
    theory: [
      "• Mendelian disorders are genetic disorders caused by mutation or alteration in a single gene, transmitted to offspring following Mendelian principles.",
      "1. Haemophilia: Sex-linked (X-linked) recessive disorder. A single protein in the blood clotting cascade is defective. A simple cut results in non-stop bleeding. Heterozygous carrier females transmit it to 50% of sons. Extremely rare in females (requires hemophilic father + carrier mother).",
      "2. Sickle-Cell Anaemia: Autosomal recessive disorder (chromosome 11). Point mutation replaces Glutamic acid (GAG) with Valine (GUG) at the 6th position of the beta-globin chain. Under low oxygen tension, HbS polymerises, turning biconcave RBCs into sickle-shaped, causing severe anaemia and vaso-occlusion.",
      "3. Thalassemia: Autosomal recessive blood disorder caused by mutation or deletion leading to reduced rate of synthesis of one of the globin chains (alpha or beta). Quantitative defect (too few globin molecules synthesised), unlike sickle-cell anaemia which is a qualitative defect."
    ],
    keyPointsAndKeywords: [
      "Mutation in a single gene",
      "Haemophilia: X-linked recessive, clotting cascade failure",
      "Sickle cell: GAG to GUG point mutation, Glu to Val at 6th position of beta-globin",
      "Thalassemia: Quantitative defect in globin synthesis"
    ],
    modelAnswer: {
      statement: "Mendelian disorders follow typical pedigree inheritance patterns based on dominant/recessive and autosomal/sex-linked loci.",
      markingScheme: [
        "1 Mark: Haemophilia: X-linked recessive, defective clotting protein, royal disease context.",
        "1 Mark: Sickle-cell anaemia: Point mutation (GAG → GUG, Glu → Val at 6th residue), HbS polymerisation under hypoxia.",
        "1 Mark: Thalassemia: Quantitative defect vs qualitative defect distinction."
      ],
      examinerTips: "Distinguish clearly: Sickle cell is a QUALITATIVE defect (abnormal globin synthesized). Thalassemia is a QUANTITATIVE defect (deficient amount of normal globin synthesized)."
    }
  },
  {
    id: "bio-core-5",
    number: 5,
    section: "core",
    title: "Chromosomal Disorders: Down's, Klinefelter's & Turner's Syndromes",
    shortLabel: "Down's, Klinefelter's & Turner's",
    chapterId: "bio-ch-4",
    chapterTitle: "Principles of Inheritance and Variation",
    unit: "Genetics and Evolution",
    marks: "4 Marks",
    marksNum: 4,
    category: "Big Orange",
    frequency: "CBSE 2015, 2017, 2019, 2021, 2023 (Guaranteed 3M/4M)",
    questionPrompt: "Compare Down's syndrome, Klinefelter's syndrome, and Turner's syndrome in terms of karyotype, chromosomal cause, and characteristic clinical symptoms.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 4: Principles of Inheritance and Variation",
      page: "Pages 75–76",
      figures: "Fig 4.17"
    },
    theory: [
      "1. Down's Syndrome: Karyotype = 47, +21 (Trisomy of chromosome 21 caused by non-disjunction).",
      "   – Symptoms: Short stature, small round head, furrowed tongue, partially open mouth, broad palm with characteristic palm crease, physical/psychomotor/mental retardation.",
      "2. Klinefelter's Syndrome: Karyotype = 47, XXY (Gain of an extra X chromosome in males due to non-disjunction).",
      "   – Symptoms: Overall masculine development with feminine features, gynaecomastia (development of breasts), tall stature with feminine voice, sterile individuals.",
      "3. Turner's Syndrome: Karyotype = 45, XO (Monosomy of X chromosome in females; absence of one X chromosome).",
      "   – Symptoms: Sterile females, rudimentary ovaries, lack of secondary sexual characteristics, webbed neck, short stature."
    ],
    keyPointsAndKeywords: [
      "Down's: 47, +21 (Trisomy 21), furrowed tongue, palm crease",
      "Klinefelter's: 47, XXY, gynaecomastia, masculine with feminine traits, sterile",
      "Turner's: 45, XO, sterile female, rudimentary ovaries, webbed neck",
      "Aneuploidy caused by non-disjunction"
    ],
    modelAnswer: {
      statement: "Chromosomal disorders result from aneuploidy (non-disjunction of homologous chromosomes during meiosis), leading to abnormal chromosome numbers.",
      markingScheme: [
        "1.5 Marks: Down's syndrome: 47 chromosomes (Trisomy 21) + 2 physical symptoms (furrowed tongue, palm crease).",
        "1.5 Marks: Klinefelter's syndrome: 47, XXY + gynaecomastia + masculine build + sterility.",
        "1 Mark: Turner's syndrome: 45, XO + rudimentary ovaries + lack of secondary sexual characters + sterility."
      ],
      examinerTips: "Remember: Down's is AUTOSOMAL aneuploidy, while Klinefelter's and Turner's are SEX-CHROMOSOMAL aneuploidies."
    }
  },
  {
    id: "bio-core-6",
    number: 6,
    section: "core",
    title: "Linkage and Recombination: Definitions & Morgan's Dihybrid Cross",
    shortLabel: "Linkage and Recombination",
    chapterId: "bio-ch-4",
    chapterTitle: "Principles of Inheritance and Variation",
    unit: "Genetics and Evolution",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange",
    frequency: "CBSE 2016, 2018, 2020, 2024",
    questionPrompt: "(a) Define Linkage and Recombination.\n(b) Explain why T.H. Morgan selected Drosophila melanogaster for his genetic studies.\n(c) How does the physical distance between two genes on a chromosome affect their recombination frequency?",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 4: Principles of Inheritance and Variation",
      page: "Pages 65–68",
      figures: "Fig 4.11"
    },
    theory: [
      "• Linkage: The physical association and tendency of genes located on the same chromosome to be inherited together during meiosis without separating.",
      "• Recombination: The generation of non-parental gene combinations in progeny resulting from crossing over between homologous chromosomes during pachytene of meiosis I.",
      "• Why Drosophila melanogaster? (i) Can be grown on simple synthetic medium in the laboratory. (ii) Short life cycle of about 2 weeks. (iii) Single mating produces hundreds of progeny. (iv) Clear sexual dimorphism (male is smaller than female). (v) Many hereditary variations visible under low power microscope.",
      "• Distance vs Recombination: Recombination frequency is directly proportional to the physical distance between two linked genes on a chromosome. Tightly linked genes show very low recombination (e.g. yellow body and white eye = 1.3%), whereas loosely linked genes show higher recombination (e.g. white eye and miniature wing = 37.2%). Alfred Sturtevant used recombination frequencies as a measure of distance to map genes (Genetic Maps)."
    ],
    keyPointsAndKeywords: [
      "Linkage = Physical association of genes on same chromosome",
      "Recombination = Generation of non-parental gene combinations",
      "Recombination frequency ∝ physical distance between genes",
      "Drosophila advantages (2-week cycle, simple medium, sexual dimorphism)",
      "Alfred Sturtevant genetic mapping"
    ],
    modelAnswer: {
      statement: "Morgan demonstrated that linked genes deviate from Mendel's 9:3:3:1 ratio because physical linkage on the same chromosome restricts independent assortment.",
      markingScheme: [
        "1 Mark: Accurate definition of Linkage and Recombination.",
        "1 Mark: Any two valid reasons for selecting Drosophila melanogaster.",
        "1 Mark: Relationship between physical distance and recombination percentage + genetic mapping reference."
      ],
      examinerTips: "Recombination frequency can NEVER exceed 50% for genes on the same chromosome (50% recombination behaves like independent assortment)."
    }
  },
  {
    id: "bio-core-7",
    number: 7,
    section: "core",
    title: "Polygenic Inheritance & Pleiotropy: Principles & Examples",
    shortLabel: "Polygenic Inheritance & Pleiotropy",
    chapterId: "bio-ch-4",
    chapterTitle: "Principles of Inheritance and Variation",
    unit: "Genetics and Evolution",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange",
    frequency: "CBSE 2017, 2019, 2022",
    questionPrompt: "Differentiate between Polygenic Inheritance and Pleiotropy with one suitable biological example for each.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 4: Principles of Inheritance and Variation",
      page: "Pages 70–71"
    },
    theory: [
      "• Polygenic Inheritance: Traits that are controlled by three or more genes (polygenes). The phenotype reflects the cumulative/additive effect of each allele and is also influenced by the environment.",
      "  – Example: Human skin colour controlled by 3 genes (A, B, C). Dominant alleles (A, B, C) add melanin. AABBCC = darkest skin; aabbcc = lightest skin; AaBbCc = intermediate mulatto skin.",
      "• Pleiotropy: A phenomenon where a single gene influences multiple phenotypic traits simultaneously.",
      "  – Example 1: Phenylketonuria (PKU) in humans. Mutation in the gene encoding phenylalanine hydroxylase leads to mental retardation, reduction in hair, and skin pigmentation.",
      "  – Example 2: Starch synthesis in pea seeds (gene B controls both starch grain size and seed shape). BB = large starch grains, round seeds; bb = small starch grains, wrinkled seeds; Bb = intermediate starch grains, round seeds."
    ],
    keyPointsAndKeywords: [
      "Polygenic: Multiple genes control a single trait (additive effect)",
      "Human skin colour (A, B, C genes)",
      "Pleiotropy: Single gene controls multiple phenotypic traits",
      "Phenylketonuria (mental retardation + skin pigmentation loss)",
      "Pea seed starch synthesis (size vs shape)"
    ],
    modelAnswer: {
      statement: "Polygenic inheritance represents 'many genes → one trait' (quantitative), whereas Pleiotropy represents 'one gene → many traits' (multiple effects).",
      markingScheme: [
        "1.5 Marks: Polygenic inheritance definition + additive effect + skin colour example.",
        "1.5 Marks: Pleiotropy definition + Phenylketonuria / Starch synthesis example showing multiple traits."
      ],
      examinerTips: "Remember: Polygenic = Quantitative inheritance (forms bell-shaped continuous gradient). Pleiotropy = Single locus pleiotropic pleomorphism."
    }
  },
  {
    id: "bio-core-8",
    number: 8,
    section: "core",
    title: "Phenylketonuria (PKU): Biochemical Basis, Genetics & Symptoms",
    shortLabel: "Phenylketonuria (PKU)",
    chapterId: "bio-ch-4",
    chapterTitle: "Principles of Inheritance and Variation",
    unit: "Genetics and Evolution",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange",
    frequency: "CBSE 2018, 2021, 2023",
    questionPrompt: "(a) What is the genetic cause of Phenylketonuria (PKU)?\n(b) Explain the biochemical pathway disrupted in this inborn error of metabolism.\n(c) List the major clinical symptoms shown by an affected individual.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 4: Principles of Inheritance and Variation",
      page: "Page 74"
    },
    theory: [
      "• Genetic Cause: Autosomal recessive inborn error of metabolism located on chromosome 12.",
      "• Biochemical Disruption: Affected individual lacks the liver enzyme phenylalanine hydroxylase that converts the essential amino acid phenylalanine into tyrosine.",
      "• Pathophysiological Consequence: As a result, phenylalanine accumulates in the blood and tissues, and is converted into phenylpyruvic acid and other derivatives.",
      "• Clinical Symptoms: (i) Severe mental retardation due to accumulation in brain tissue. (ii) Poor absorption in kidneys leads to excretion in urine. (iii) Hypopigmentation of skin and hair (since tyrosine is required for melanin synthesis)."
    ],
    keyPointsAndKeywords: [
      "Autosomal recessive inborn error of metabolism",
      "Deficiency of phenylalanine hydroxylase enzyme",
      "Phenylalanine cannot convert to tyrosine",
      "Accumulation of phenylpyruvic acid",
      "Mental retardation, skin/hair hypopigmentation, excretion in urine"
    ],
    modelAnswer: {
      statement: "Phenylketonuria is a classic pleiotropic autosomal recessive disease where failure of phenylalanine hydroxylase leads to neurotoxic accumulation of phenylpyruvic acid.",
      markingScheme: [
        "1 Mark: Autosomal recessive inheritance + absence of phenylalanine hydroxylase.",
        "1 Mark: Biochemical block (Phe → Tyr blocked, Phe converted to phenylpyruvate).",
        "1 Mark: Symptoms: Mental retardation, urine excretion, hair/skin hypopigmentation."
      ],
      examinerTips: "Always highlight that PKU is an example of both an Autosomal Recessive Mendelian disorder and Pleiotropy."
    }
  },

  // ==========================================================================
  // CHAPTER 5: MOLECULAR BASIS OF INHERITANCE
  // ==========================================================================
  {
    id: "bio-core-9",
    number: 9,
    section: "core",
    title: "Transforming Principle & Biochemical Characterisation",
    shortLabel: "Griffith & Avery-MacLeod-McCarty",
    chapterId: "bio-ch-5",
    chapterTitle: "Molecular Basis of Inheritance",
    unit: "Genetics and Evolution",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange",
    frequency: "CBSE 2016, 2018, 2020, 2022, 2024 (Core 3M)",
    questionPrompt: "(a) Describe Frederick Griffith's experiments on Streptococcus pneumoniae.\n(b) How did Avery, MacLeod, and McCarty chemically prove the biochemical nature of the transforming principle?",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 5: Molecular Basis of Inheritance",
      page: "Pages 82–84"
    },
    theory: [
      "• Griffith's Experiment (1928): Used two strains of Streptococcus pneumoniae: S-strain (smooth mucous polysaccharide coat, virulent) and R-strain (rough colonies, non-virulent).",
      "  – S-strain injected into mice → Mice died.",
      "  – R-strain injected into mice → Mice lived.",
      "  – Heat-killed S-strain injected into mice → Mice lived.",
      "  – Heat-killed S-strain + Live R-strain injected into mice → Mice died! Living S-strain bacteria recovered from dead mice.",
      "  – Conclusion: Some 'transforming principle' was transferred from heat-killed S to live R strain, enabling it to synthesize smooth polysaccharide coat and become virulent.",
      "• Biochemical Characterisation (Avery, MacLeod, McCarty, 1944):",
      "  – Purified biochemicals (proteins, RNA, DNA) from heat-killed S cells.",
      "  – Discovered that Protein-digesting enzymes (Proteases) and RNA-digesting enzymes (RNases) did NOT inhibit transformation.",
      "  – Only DNA-digesting enzyme (DNase) completely inhibited transformation.",
      "  – Concluded unequivocally that DNA is the hereditary transforming substance."
    ],
    keyPointsAndKeywords: [
      "S-strain (smooth, virulent) vs R-strain (rough, avirulent)",
      "Heat-killed S + Live R kills mice",
      "Transforming principle transfer",
      "Protease and RNase do not affect transformation",
      "DNase inhibits transformation",
      "DNA is the transforming material"
    ],
    modelAnswer: {
      statement: "Griffith discovered bacterial transformation in Streptococcus pneumoniae, and Avery, MacLeod, and McCarty proved that the transforming molecule was DNA using specific enzymatic digestions.",
      markingScheme: [
        "1.5 Marks: Griffith's 4 steps and observation of living S strain in dead mice.",
        "1.5 Marks: Avery, MacLeod & McCarty experiment: Protease/RNase (no effect) vs DNase (inhibits transformation) proving DNA is genetic material."
      ],
      examinerTips: "Note spelling difference: DNase is the enzyme; DNA is the substance. DNase digests DNA and abolishes transformation."
    }
  },
  {
    id: "bio-core-10",
    number: 10,
    section: "core",
    title: "Transcription in Eukaryotes (Splicing, Capping, Tailing & RNA Polymerases)",
    shortLabel: "Eukaryotic Transcription",
    chapterId: "bio-ch-5",
    chapterTitle: "Molecular Basis of Inheritance",
    unit: "Genetics and Evolution",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange",
    frequency: "CBSE 2017, 2019, 2021, 2023",
    questionPrompt: "Explain the complex process of transcription in eukaryotes. Describe the three types of RNA polymerases and the post-transcriptional modifications of hnRNA (Splicing, Capping, and Tailing).",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 5: Molecular Basis of Inheritance",
      page: "Pages 92–94",
      figures: "Fig 5.11"
    },
    theory: [
      "• Three RNA Polymerases in Eukaryotic Nucleus:",
      "  1. RNA Polymerase I: Transcribes rRNAs (28S, 18S, and 5.8S).",
      "  2. RNA Polymerase II: Transcribes precursor of mRNA called heterogeneous nuclear RNA (hnRNA).",
      "  3. RNA Polymerase III: Transcribes tRNA, 5S rRNA, and snRNAs (small nuclear RNAs).",
      "• Post-Transcriptional Processing of hnRNA:",
      "  1. Splicing: Primary transcript contains functional coding sequences (Exons) interrupted by non-coding sequences (Introns). Introns are removed and exons are joined in a defined order by spliceosomes.",
      "  2. Capping: An unusual nucleotide, Methyl guanosine triphosphate (mGppp), is added to the 5'-end of hnRNA.",
      "  3. Tailing: Adenylate residues (200–300 residues, Poly-A tail) are added at the 3'-end in a template-independent manner.",
      "• Fully processed hnRNA is now called mature mRNA and transported out of the nucleus for translation."
    ],
    keyPointsAndKeywords: [
      "RNA Pol I (28S, 18S, 5.8S rRNA)",
      "RNA Pol II (hnRNA / mRNA)",
      "RNA Pol III (tRNA, 5S rRNA, snRNA)",
      "Splicing (introns removed, exons joined)",
      "Capping (methyl guanosine triphosphate at 5'-end)",
      "Tailing (poly-A tail at 3'-end)"
    ],
    modelAnswer: {
      statement: "Eukaryotic transcription requires three distinct RNA polymerases and extensive post-transcriptional modification (capping, tailing, splicing) to convert nascent hnRNA into translatable mRNA.",
      markingScheme: [
        "1 Mark: Functions of RNA Polymerase I, II, and III.",
        "1 Mark: Explanation of Splicing (removal of introns and ligation of exons).",
        "1 Mark: Explanation of Capping (5'-methylguanosine triphosphate) and Tailing (3'-polyadenylation)."
      ],
      examinerTips: "Remember: Splicing represents the dominance of the 'RNA World', showing that introns are evolutionary relics."
    }
  },
  {
    id: "bio-core-11",
    number: 11,
    section: "core",
    title: "DNA Double Helix Structure (Watson-Crick Model & Salient Features)",
    shortLabel: "Watson-Crick DNA Double Helix",
    chapterId: "bio-ch-5",
    chapterTitle: "Molecular Basis of Inheritance",
    unit: "Genetics and Evolution",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange",
    frequency: "CBSE 2015, 2019, 2022",
    questionPrompt: "State the salient features of the double helix structure of B-DNA as proposed by Watson and Crick (1953). Include pitch, base pairing, and antiparallel polarity.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 5: Molecular Basis of Inheritance",
      page: "Pages 80–82",
      figures: "Fig 5.6 & Fig 5.7"
    },
    theory: [
      "• Salient Features of Watson-Crick B-DNA Double Helix:",
      "  1. Two Polynucleotide Chains: Made of two polynucleotide chains with a sugar-phosphate backbone, and nitrogenous bases projecting inside.",
      "  2. Antiparallel Polarity: One chain runs 5' → 3', while the other runs in the opposite 3' → 5' direction.",
      "  3. Complementary Base Pairing: Adenine pairs strictly with Thymine by two hydrogen bonds (A = T), and Guanine pairs with Cytosine by three hydrogen bonds (G ≡ C). Purine always pairs with pyrimidine, keeping uniform diameter (2 nm / 20 Å).",
      "  4. Right-Handed Helical Pitch: The double helix is coiled in a right-handed fashion. The pitch of the helix is 3.4 nm (34 Å), with roughly 10 base pairs per turn. Distance between adjacent base pairs is 0.34 nm (3.4 Å).",
      "  5. Stacking Stability: The plane of one base pair stacks over the other in the double helix. This stacking, in addition to H-bonds, confers stability to the helical structure."
    ],
    keyPointsAndKeywords: [
      "Two polynucleotide chains with sugar-phosphate backbone",
      "Antiparallel polarity (5'→3' and 3'→5')",
      "A=T (2 H-bonds) and G≡C (3 H-bonds)",
      "Helical pitch = 3.4 nm, 10 bp per turn, distance between bp = 0.34 nm",
      "Base stacking gives thermodynamic stability"
    ],
    modelAnswer: {
      statement: "Watson and Crick based their double helix model on X-ray diffraction data by Rosalind Franklin and Maurice Wilkins, and Chargaff's equivalence rule ([A]+[G] = [T]+[C]).",
      markingScheme: [
        "1 Mark: Antiparallel polarity + Sugar-phosphate backbone with inward bases.",
        "1 Mark: Complementary H-bonding (A=T, G≡C) ensuring uniform width.",
        "1 Mark: Helical dimensions: pitch = 3.4 nm, 10 bp/turn, distance = 0.34 nm."
      ],
      examinerTips: "Remember: Purine always pairs with a pyrimidine (A with T, G with C), which keeps the distance between the two strands constant throughout."
    }
  },
  {
    id: "bio-core-12",
    number: 12,
    section: "core",
    title: "Semiconservative Replication: Meselson and Stahl's Experiment",
    shortLabel: "Meselson-Stahl Experiment",
    chapterId: "bio-ch-5",
    chapterTitle: "Molecular Basis of Inheritance",
    unit: "Genetics and Evolution",
    marks: "4 Marks",
    marksNum: 4,
    category: "Big Orange",
    frequency: "CBSE 2016, 2018, 2020, 2023 (Very High Frequency)",
    questionPrompt: "Describe the experimental proof given by Matthew Meselson and Franklin Stahl (1958) to prove that DNA replication is semiconservative. Detail the isotopes used, generation times, and CsCl density gradient centrifugation results.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 5: Molecular Basis of Inheritance",
      page: "Pages 86–88",
      figures: "Fig 5.9"
    },
    theory: [
      "• Principle: In semiconservative replication, each replicated daughter DNA molecule contains one conserved parental strand and one newly synthesised complementary strand.",
      "• Experimental Procedure (Meselson & Stahl, 1958 using E. coli):",
      "  1. Grew E. coli in a medium containing heavy isotope of nitrogen (¹⁵NH₄Cl) as sole nitrogen source for many generations. Both strands of DNA became heavy (¹⁵N-¹⁵N).",
      "  2. Transferred the heavy ¹⁵N cells to a normal medium containing light nitrogen (¹⁴NH₄Cl) and took samples at 20-minute intervals (E. coli division time = 20 min).",
      "  3. DNA was extracted and centrifuged on a Caesium Chloride (CsCl) density gradient.",
      "• Results and Analysis:",
      "  – Generation 0 (at 0 min): DNA settled as a single HEAVY band (¹⁵N-¹⁵N).",
      "  – Generation 1 (after 20 min): Extracted DNA showed a single HYBRID intermediate density band (¹⁵N-¹⁴N). This ruled out conservative replication!",
      "  – Generation 2 (after 40 min): DNA resolved into TWO equal bands: 50% Hybrid intermediate (¹⁵N-¹⁴N) and 50% Light (¹⁴N-¹⁴N).",
      "• Conclusion: Perfectly proved the semiconservative replication of DNA."
    ],
    keyPointsAndKeywords: [
      "Heavy isotope ¹⁵N (not radioactive!) vs normal ¹⁴N",
      "CsCl density gradient centrifugation",
      "0 min: 100% heavy (¹⁵N-¹⁵N)",
      "20 min (Gen 1): 100% hybrid (¹⁵N-¹⁴N)",
      "40 min (Gen 2): 50% hybrid (¹⁵N-¹⁴N) and 50% light (¹⁴N-¹⁴N)",
      "Taylor et al. proved same on Vicia faba using tritiated thymidine"
    ],
    modelAnswer: {
      statement: "Meselson and Stahl utilized heavy isotope ¹⁵N and CsCl density equilibrium centrifugation in E. coli to definitively prove semiconservative DNA replication.",
      markingScheme: [
        "1 Mark: Setup using ¹⁵NH₄Cl medium followed by transfer to ¹⁴NH₄Cl medium.",
        "1.5 Marks: Generation 1 (20 min) hybrid intermediate band explanation.",
        "1.5 Marks: Generation 2 (40 min) 1:1 ratio of light and hybrid bands + diagram representation."
      ],
      examinerTips: "State clearly: ¹⁵N is a HEAVY stable isotope of nitrogen, NOT a radioactive isotope (do not confuse with radioactive ³²P or ³⁵S)."
    }
  },
  {
    id: "bio-core-13",
    number: 13,
    section: "core",
    title: "Lac Operon: Regulatory Mechanism, Inducer & Structural Genes",
    shortLabel: "Lac Operon (Jacob & Monod)",
    chapterId: "bio-ch-5",
    chapterTitle: "Molecular Basis of Inheritance",
    unit: "Genetics and Evolution",
    marks: "3 / 5 Marks",
    marksNum: 5,
    category: "Big Orange",
    frequency: "CBSE 2015, 2017, 2019, 2022, 2024 (Classic 5M Question)",
    diagramId: "lac-operon",
    questionPrompt: "(a) What is an operon? Explain the organization of the Lac Operon in E. coli as proposed by Francois Jacob and Jacques Monod.\n(b) Explain the working of the operon in: (i) Absence of lactose, (ii) Presence of lactose.\n(c) State the enzyme coded by genes z, y, and a, and give the role of allolactose.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 5: Molecular Basis of Inheritance",
      page: "Pages 98–101",
      figures: "Fig 5.14"
    },
    theory: [
      "• An operon is a polycistronic structural gene regulated by a common promoter and regulatory genes, typical of prokaryotes.",
      "• Components of Lac Operon:",
      "  1. Regulator Gene (i gene): Codes for repressor protein constitutively.",
      "  2. Promoter Gene (p): Binding site for RNA polymerase.",
      "  3. Operator Gene (o): Binding site for repressor protein; acts as switch.",
      "  4. Structural Genes: z, y, and a.",
      "• Structural Gene Functions:",
      "  – z gene: Codes for Beta-galactosidase (hydrolyzes lactose into glucose and galactose).",
      "  – y gene: Codes for Permease (increases cell permeability to beta-galactosides/lactose).",
      "  – a gene: Codes for Transacetylase (transfers acetyl group to beta-galactosides).",
      "• Regulation Mechanism:",
      "  – In ABSENCE of Inducer (OFF): Repressor protein binds to operator (o) region, sterically blocking RNA polymerase from transcribing z, y, a structural genes.",
      "  – In PRESENCE of Inducer (Lactose/Allolactose) (ON): Inducer binds to repressor protein, altering its conformation and inactivating it. Repressor cannot bind to operator. RNA polymerase accesses promoter and transcribes z, y, and a genes.",
      "• Note: Regulation of lac operon by repressor is referred to as Negative Regulation."
    ],
    keyPointsAndKeywords: [
      "i gene codes for repressor constitutively",
      "Operator acts as molecular on/off switch",
      "z codes for beta-galactosidase, y for permease, a for transacetylase",
      "Lactose / allolactose acts as inducer",
      "Negative control by repressor protein"
    ],
    modelAnswer: {
      statement: "The lac operon is an inducible metabolic unit where transcription of structural genes is repressed until the inducer (allolactose) inactivates the repressor.",
      markingScheme: [
        "1.5 Marks: Operon layout (p-i-p-o-z-y-a) and enzymes coded by z, y, a.",
        "1.5 Marks: Switched OFF state (active repressor binds operator, blocks RNA Pol).",
        "1.5 Marks: Switched ON state (inducer binds repressor, inactive repressor frees operator, RNA Pol transcribes).",
        "0.5 Mark: Mention of negative regulation."
      ],
      examinerTips: "Remember: A very low basal level of lac operon expression must ALWAYS be present in E. coli cell, otherwise lactose cannot enter the cell initially via permease!"
    }
  },
  {
    id: "bio-core-14",
    number: 14,
    section: "core",
    title: "DNA Fingerprinting: Steps, Principle & Applications",
    shortLabel: "DNA Fingerprinting (Alec Jeffreys)",
    chapterId: "bio-ch-5",
    chapterTitle: "Molecular Basis of Inheritance",
    unit: "Genetics and Evolution",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange",
    frequency: "CBSE 2017, 2019, 2021, 2023",
    questionPrompt: "(a) What is the basis of DNA fingerprinting?\n(b) List the sequential steps involved in Alec Jeffreys' DNA fingerprinting technique.\n(c) Name the probe used and explain the role of VNTRs.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 5: Molecular Basis of Inheritance",
      page: "Pages 104–106",
      figures: "Fig 5.16"
    },
    theory: [
      "• Principle & Basis: DNA fingerprinting is based on DNA polymorphism (inherited variations at repetitive non-coding DNA regions). Repetitive DNA contains satellite DNA classified as micro- and mini-satellites. Variable Number Tandem Repeats (VNTRs) belong to minisatellites (10–100 bp repeat units showing high copy-number polymorphism).",
      "• Sequential Steps in DNA Fingerprinting:",
      "  1. Isolation of DNA from biological samples (blood, semen, hair follicle).",
      "  2. Digestion of DNA by restriction endonucleases at specific sites.",
      "  3. Separation of DNA fragments by agarose gel electrophoresis based on fragment size.",
      "  4. Transfer (blotting) of separated DNA fragments to synthetic membranes such as nitrocellulose or nylon (Southern Blotting).",
      "  5. Hybridisation using radioactively labeled VNTR probe.",
      "  6. Detection of hybridised DNA fragments by Autoradiography (gives unique band pattern).",
      "• Applications: Forensic crime scene identification, paternity dispute resolution, studying genetic diversity."
    ],
    keyPointsAndKeywords: [
      "DNA polymorphism in repetitive DNA",
      "VNTR (Variable Number Tandem Repeats) minisatellite",
      "Southern blotting onto nylon membrane",
      "Radioactive VNTR probe hybridisation",
      "Autoradiography detection band pattern",
      "Forensic & paternity testing"
    ],
    modelAnswer: {
      statement: "Alec Jeffreys developed DNA fingerprinting using minisatellite VNTR probes that generate individual-specific autoradiographic bar-code banding patterns.",
      markingScheme: [
        "1 Mark: Principle of DNA polymorphism and VNTRs.",
        "1.5 Marks: Sequential 6 steps: Isolation → Restriction cutting → Electrophoresis → Southern blotting → VNTR probe hybridization → Autoradiography.",
        "0.5 Mark: Applications in forensics and paternity."
      ],
      examinerTips: "Remember: The size of VNTR varies from 0.1 to 20 kb. Identical (monozygotic) twins share 100% identical DNA fingerprints."
    }
  },

  // ==========================================================================
  // CHAPTER 1: SEXUAL REPRODUCTION IN FLOWERING PLANTS
  // ==========================================================================
  {
    id: "bio-core-15",
    number: 15,
    section: "core",
    title: "Structure of Microsporangium: 4 Wall Layers & Tapetum",
    shortLabel: "Microsporangium 4 Wall Layers",
    chapterId: "bio-ch-1",
    chapterTitle: "Sexual Reproduction in Flowering Plants",
    unit: "Reproduction",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange",
    frequency: "CBSE 2016, 2018, 2020, 2022, 2024",
    diagramId: "microsporangium-walls",
    questionPrompt: "Draw a neat, labelled diagram of the transverse section of a mature microsporangium. List its four wall layers from outside to inside and describe the function of each layer.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 1: Sexual Reproduction in Flowering Plants",
      page: "Pages 5–7",
      figures: "Fig 1.3"
    },
    theory: [
      "• A typical angiosperm anther is bilobed, dithecous, and tetrasporangiate with 4 microsporangia.",
      "• Four Wall Layers (Outside to Inside):",
      "  1. Epidermis: Single outermost protective cell layer.",
      "  2. Endothecium: Second layer with radially elongated cells possessing fibrous bands of alpha-cellulose; hygroscopic in nature; aids in dehiscence of anther at maturity.",
      "  3. Middle Layers: 1 to 3 layers of thin-walled ephemeral cells; store food and degenerate during pollen development.",
      "  4. Tapetum: Innermost nutritive layer surrounding sporogenous tissue; cells have dense cytoplasm and are generally multinucleate/polyploid; synthesizes nutrients for developing pollen and secretes sporopollenin precursors.",
      "• Centre: Contains diploid Sporogenous tissue whose cells (Microspore Mother Cells / PMCs) undergo meiosis to produce haploid microspore tetrads."
    ],
    keyPointsAndKeywords: [
      "Epidermis (outer protection)",
      "Endothecium (alpha-cellulose thickenings, hygroscopic dehiscence)",
      "Middle layers (1-3 rows, nutritive)",
      "Tapetum (innermost, multinucleate, dense cytoplasm, nourishes microspores)",
      "Sporogenous tissue / PMC (2n)"
    ],
    modelAnswer: {
      statement: "The microsporangium is enclosed by four wall layers: the outer three perform protection and dehiscence, while the innermost tapetum nourishes developing pollen grains.",
      markingScheme: [
        "1.5 Marks: Labelled diagram showing Epidermis, Endothecium, Middle layers, Tapetum, and Sporogenous tissue.",
        "1.5 Marks: Specific functions of each layer, especially Endothecium dehiscence and Tapetal nourishment."
      ],
      examinerTips: "Always emphasize that the outer 3 layers perform protection and dehiscence, while tapetum alone is the nutritive layer."
    }
  },
  {
    id: "bio-core-16",
    number: 16,
    section: "core",
    title: "Structure of Pollen Grains & Sporopollenin Exine",
    shortLabel: "Pollen Grain & Sporopollenin",
    chapterId: "bio-ch-1",
    chapterTitle: "Sexual Reproduction in Flowering Plants",
    unit: "Reproduction",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange",
    frequency: "CBSE 2017, 2019, 2021, 2023",
    questionPrompt: "(a) Draw a labelled diagram of a mature 2-celled pollen grain.\n(b) Differentiate between the vegetative cell and generative cell.\n(c) What is sporopollenin and why are pollen grains well preserved as fossils?",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 1: Sexual Reproduction in Flowering Plants",
      page: "Pages 7–9",
      figures: "Fig 1.5"
    },
    theory: [
      "• Pollen Grain Wall Layers:",
      "  – Exine: Hard outer layer made of Sporopollenin. Most resistant organic material known; withstands high temperatures, strong acids, and alkali; no enzyme can degrade it. Has prominent apertures called Germ Pores where sporopollenin is absent.",
      "  – Intine: Thin and continuous inner layer made of Cellulose and Pectin.",
      "• Cellular Organization at Shedding (2-Celled Stage in 60% of Angiosperms):",
      "  1. Vegetative Cell: Bigger, contains abundant food reserves and a large, irregularly shaped nucleus.",
      "  2. Generative Cell: Small, spindle-shaped with dense cytoplasm and a nucleus; floats in the cytoplasm of the vegetative cell. In remaining 40% angiosperms, it divides mitotically into two male gametes before shedding (3-celled stage)."
    ],
    keyPointsAndKeywords: [
      "Exine made of sporopollenin",
      "Sporopollenin is resistant to acids, alkali, enzymes",
      "Germ pores lack sporopollenin",
      "Intine made of cellulose and pectin",
      "Vegetative cell (large, food reserve) vs Generative cell (small, divides into 2 male gametes)"
    ],
    modelAnswer: {
      statement: "Pollen grains represent male gametophytes with a durable sporopollenin-rich exine and an unequal cellular division into vegetative and generative cells.",
      markingScheme: [
        "1 Mark: Diagram showing Exine, Intine, Germ pore, Vegetative cell, and Generative cell.",
        "1 Mark: Differences between Vegetative and Generative cells.",
        "1 Mark: Sporopollenin definition and reason for fossil preservation."
      ],
      examinerTips: "Remember: Pollen allergy is caused by Parthenium (carrot grass). Pollen grains can be preserved for years in liquid nitrogen at -196°C in pollen banks."
    }
  },
  {
    id: "bio-core-17",
    number: 17,
    section: "core",
    title: "Filiform Apparatus: Structure, Location & Function",
    shortLabel: "Filiform Apparatus Function",
    chapterId: "bio-ch-1",
    chapterTitle: "Sexual Reproduction in Flowering Plants",
    unit: "Reproduction",
    marks: "2 Marks",
    marksNum: 2,
    category: "Big Orange",
    frequency: "CBSE 2016, 2018, 2021, 2024 (Frequently asked 2M)",
    diagramId: "embryo-sac",
    questionPrompt: "Where is the filiform apparatus located in an angiosperm ovule? Describe its structural nature and state its precise function during fertilization.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 1: Sexual Reproduction in Flowering Plants",
      page: "Page 10",
      figures: "Fig 1.8(d)"
    },
    theory: [
      "• Location: Located at the micropylar tip of the synergids in the egg apparatus of the female gametophyte (embryo sac).",
      "• Nature: Consists of special finger-like cellular wall thickenings projecting into the synergid cytoplasm.",
      "• Function:",
      "  1. Plays an important role in guiding the entry of the pollen tube into the synergid.",
      "  2. Chemotropically guides and absorbs nutrients from the nucellus to transfer to the embryo sac."
    ],
    keyPointsAndKeywords: [
      "Micropylar tip of synergids",
      "Cellular finger-like wall thickenings",
      "Guides pollen tube entry into synergid",
      "Chemotropic guidance"
    ],
    modelAnswer: {
      statement: "The filiform apparatus is a specialized micropylar synergid wall thickening responsible for guiding pollen tube entry into the female gametophyte.",
      markingScheme: [
        "1 Mark: Exact anatomical location (micropylar tip of synergids) and nature (finger-like cellular wall thickenings).",
        "1 Mark: Precise function (chemotactic guidance of pollen tube entry)."
      ],
      examinerTips: "State clearly: The pollen tube enters into one of the synergids through the filiform apparatus."
    }
  },
  {
    id: "bio-core-18",
    number: 18,
    section: "core",
    title: "Pollination: Autogamy, Geitonogamy & Xenogamy",
    shortLabel: "Autogamy vs Geitonogamy",
    chapterId: "bio-ch-1",
    chapterTitle: "Sexual Reproduction in Flowering Plants",
    unit: "Reproduction",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange",
    frequency: "CBSE 2015, 2017, 2019, 2022",
    questionPrompt: "Define and distinguish between Autogamy, Geitonogamy, and Xenogamy. Why is geitonogamy functionally cross-pollination but genetically self-pollination?",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 1: Sexual Reproduction in Flowering Plants",
      page: "Pages 11–13"
    },
    theory: [
      "• 1. Autogamy (Self-pollination): Transfer of pollen grains from the anther to the stigma of the same flower. Requires synchrony in pollen release and stigma receptivity, and close proximity of anthers and stigma (e.g. Cleistogamous flowers like Oxalis, Commelina, Viola).",
      "• 2. Geitonogamy: Transfer of pollen grains from the anther of one flower to the stigma of another flower on the same plant.",
      "  – Functionally: It is cross-pollination because it involves a pollinating agent (wind, insects).",
      "  – Genetically: It is strictly self-pollination because the pollen grains come from the same genetically identical plant parent.",
      "• 3. Xenogamy (Cross-pollination): Transfer of pollen grains from anther to the stigma of a flower of a different plant of the same species. Brings genetically different types of pollen grains to the stigma."
    ],
    keyPointsAndKeywords: [
      "Autogamy = Same flower",
      "Geitonogamy = Different flower, same plant",
      "Functionally cross-pollination (requires agent)",
      "Genetically self-pollination (identical alleles)",
      "Xenogamy = Different plant (genetic variation)"
    ],
    modelAnswer: {
      statement: "Pollination types depend on the source of pollen: Autogamy (same flower), Geitonogamy (same plant, different flower), and Xenogamy (different plant).",
      markingScheme: [
        "1 Mark: Definitions of Autogamy and Xenogamy.",
        "2 Marks: Geitonogamy definition + justification of functionally cross (requires pollinator) vs genetically self (same plant parent)."
      ],
      examinerTips: "Remember: Cleistogamous flowers are invariant autogamous because they never open; seed setting is assured even in the absence of pollinators."
    }
  },
  {
    id: "bio-core-19",
    number: 19,
    section: "core",
    title: "Outbreeding Devices: Mechanisms to Prevent Inbreeding",
    shortLabel: "Outbreeding Devices",
    chapterId: "bio-ch-1",
    chapterTitle: "Sexual Reproduction in Flowering Plants",
    unit: "Reproduction",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange",
    frequency: "CBSE 2016, 2018, 2020, 2023 (Guaranteed 3M)",
    questionPrompt: "Continued self-pollination leads to inbreeding depression. Enumerate any four outbreeding devices developed by flowering plants to discourage self-pollination and encourage cross-pollination.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 1: Sexual Reproduction in Flowering Plants",
      page: "Pages 13–15"
    },
    theory: [
      "• Flowering plants have developed several morphological and physiological mechanisms to prevent self-pollination and promote cross-pollination:",
      "  1. Dichogamy (Non-synchronisation): Pollen release and stigma receptivity are not synchronised. Either pollen is released before stigma becomes receptive (Protandry, e.g. Sunflower), or stigma becomes receptive before pollen is shed (Protogyny, e.g. Mirabilis).",
      "  2. Herkogamy (Spatial separation): Anther and stigma are placed at different heights or positions so that pollen cannot contact stigma of the same flower (e.g. Primula).",
      "  3. Self-incompatibility: A genetically controlled mechanism that prevents self-pollen (from same flower or same plant) from fertilising ovules by inhibiting pollen germination or pollen tube growth in the pistil.",
      "  4. Production of Unisexual Flowers (Dicliny):",
      "     – Monoecious plants: Male and female flowers on same plant (e.g. Castor, Maize); prevents autogamy but allows geitonogamy.",
      "     – Dioecious plants: Male and female flowers on different plants (e.g. Papaya, Date palm); prevents both autogamy and geitonogamy."
    ],
    keyPointsAndKeywords: [
      "Prevent inbreeding depression",
      "Dichogamy: Non-synchronisation of pollen and stigma",
      "Herkogamy: Anther and stigma at different positions",
      "Self-incompatibility: Genetic inhibition of self-pollen germination",
      "Dioecy: Papaya prevents both autogamy and geitonogamy"
    ],
    modelAnswer: {
      statement: "Outbreeding devices are structural and genetic adaptations that ensure cross-pollination to maintain genetic heterozygosity.",
      markingScheme: [
        "1.5 Marks: Explanation of Dichogamy (Protandry/Protogyny) and Herkogamy.",
        "1.5 Marks: Explanation of Self-Incompatibility (genetic) and Dioecy (e.g., Papaya)."
      ],
      examinerTips: "Remember: Castor and maize prevent autogamy but NOT geitonogamy. Papaya prevents BOTH autogamy and geitonogamy."
    }
  },
  {
    id: "bio-core-20",
    number: 20,
    section: "core",
    title: "Double Fertilisation: Syngamy and Triple Fusion",
    shortLabel: "Double Fertilisation & Triple Fusion",
    chapterId: "bio-ch-1",
    chapterTitle: "Sexual Reproduction in Flowering Plants",
    unit: "Reproduction",
    marks: "2 Marks",
    marksNum: 2,
    category: "Big Orange",
    frequency: "CBSE 2015, 2017, 2019, 2021, 2024",
    questionPrompt: "Why is the process of fertilisation in angiosperms referred to as 'Double Fertilisation'? Name the events and resulting ploidy of the products.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 1: Sexual Reproduction in Flowering Plants",
      page: "Page 16",
      figures: "Fig 1.12"
    },
    theory: [
      "• After entering one of the synergids, the pollen tube discharges two male gametes into the cytoplasm of the synergid.",
      "• Two Distinct Nuclear Fusion Events Occur (Double Fertilisation):",
      "  1. Syngamy (Generative Fertilisation): One male gamete (n) moves towards the egg cell and fuses with its nucleus to form a diploid Zygote (2n), which develops into the embryo.",
      "  2. Triple Fusion (Vegetative Fertilisation): The second male gamete (n) moves towards the central cell and fuses with the two polar nuclei (n+n) to produce a triploid Primary Endosperm Nucleus (PEN, 3n), which develops into endosperm.",
      "• Since two types of fusions (Syngamy and Triple Fusion) take place in an embryo sac, the phenomenon is termed Double Fertilisation (unique to angiosperms, discovered by Nawaschin)."
    ],
    keyPointsAndKeywords: [
      "Syngamy: Male gamete (n) + Egg (n) → Zygote (2n)",
      "Triple fusion: Male gamete (n) + 2 Polar nuclei (n+n) → PEN (3n)",
      "Primary Endosperm Cell (PEC) develops into endosperm",
      "Unique to flowering plants (angiosperms)"
    ],
    modelAnswer: {
      statement: "Double fertilisation comprises two simultaneous fusions: Syngamy (forming diploid zygote, 2n) and Triple Fusion (forming triploid primary endosperm nucleus, 3n).",
      markingScheme: [
        "1 Mark: Definition and equation of Syngamy: Male gamete (n) + Egg cell (n) = Zygote (2n).",
        "1 Mark: Definition and equation of Triple Fusion: Male gamete (n) + 2 Polar nuclei (2n) = PEN (3n)."
      ],
      examinerTips: "Do not forget to mention the ploidy: Zygote is 2n (diploid) and PEN is 3n (triploid)."
    }
  },
  {
    id: "bio-core-21",
    number: 21,
    section: "core",
    title: "False Fruit vs True Fruit vs Parthenocarpic Fruit",
    shortLabel: "False Fruit & Parthenocarpy",
    chapterId: "bio-ch-1",
    chapterTitle: "Sexual Reproduction in Flowering Plants",
    unit: "Reproduction",
    marks: "2 Marks",
    marksNum: 2,
    category: "Big Orange",
    frequency: "CBSE 2018, 2020, 2023",
    questionPrompt: "Differentiate between True Fruit, False Fruit, and Parthenocarpic Fruit with one example of each.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 1: Sexual Reproduction in Flowering Plants",
      page: "Pages 18–19",
      figures: "Fig 1.15"
    },
    theory: [
      "• True Fruit: A fruit that develops exclusively from the ovary after fertilisation without contribution from other floral parts (e.g. Mango, Tomato, Pea).",
      "• False Fruit (Pseudocarp): A fruit in which floral parts other than the ovary (especially the thalamus) contribute to fruit formation (e.g. Apple, Strawberry, Cashew). In apple and pear, the edible fleshy part is the swollen thalamus.",
      "• Parthenocarpic Fruit: A fruit that develops without fertilisation of the ovary. These fruits are naturally seedless (e.g. Banana). Parthenocarpy can also be induced artificially by applying phytohormones like auxins and gibberellins."
    ],
    keyPointsAndKeywords: [
      "True fruit: Exclusively from ovary (Mango)",
      "False fruit: Thalamus contributes to fruit formation (Apple, Strawberry)",
      "Parthenocarpic: Fruit develops without fertilisation; seedless (Banana)",
      "Induced by auxins and gibberellins"
    ],
    modelAnswer: {
      statement: "Fruits are classified based on origin: True (ovary only), False (thalamus contributes), and Parthenocarpic (no fertilisation, seedless).",
      markingScheme: [
        "1 Mark: False fruit definition (thalamus contributes) + examples (apple, strawberry, cashew).",
        "1 Mark: True fruit vs Parthenocarpic fruit definitions + examples (mango vs banana)."
      ],
      examinerTips: "In apples, the fleshy edible portion is the thalamus, not the pericarp. This is a very common 1-mark question."
    }
  },

  // ==========================================================================
  // CHAPTER 2: HUMAN REPRODUCTION
  // ==========================================================================
  {
    id: "bio-core-22",
    number: 22,
    section: "core",
    title: "Female Accessory Ducts: Fallopian Tubes & Fimbriae Function",
    shortLabel: "Fimbriae & Fallopian Tube",
    chapterId: "bio-ch-2",
    chapterTitle: "Human Reproduction",
    unit: "Reproduction",
    marks: "2 Marks",
    marksNum: 2,
    category: "Big Orange",
    frequency: "CBSE 2017, 2019, 2022",
    questionPrompt: "Describe the three anatomical parts of the Fallopian tube (Oviduct). What is the specific function of fimbriae?",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 2: Human Reproduction",
      page: "Pages 26–27",
      figures: "Fig 2.3"
    },
    theory: [
      "• Each Fallopian tube (10–12 cm long) extends from the periphery of each ovary to the uterus and consists of three parts:",
      "  1. Infundibulum: Funnel-shaped part closer to the ovary. The edges of the infundibulum possess finger-like projections called Fimbriae.",
      "  2. Ampulla: Wider, curved middle portion of the oviduct. Site of fertilisation (ampullary region).",
      "  3. Isthmus: Last, narrow portion with a thick muscular wall leading into the uterus.",
      "• Function of Fimbriae: Following ovulation, the fimbriae perform gentle undulating movements to collect the released ovum from the peritoneal cavity into the infundibulum."
    ],
    keyPointsAndKeywords: [
      "Infundibulum, Ampulla, Isthmus",
      "Fimbriae: Finger-like projections at edges of infundibulum",
      "Collection of ovum after ovulation",
      "Site of fertilisation = Ampulla"
    ],
    modelAnswer: {
      statement: "The oviduct comprises infundibulum, ampulla, and isthmus; fimbriae capture the ovum post-ovulation.",
      markingScheme: [
        "1 Mark: Three parts of oviduct (Infundibulum, Ampulla, Isthmus) with anatomical sequence.",
        "1 Mark: Specific function of fimbriae (capturing/collecting released ovum post-ovulation)."
      ],
      examinerTips: "NCERT revised: Fertilisation occurs in the 'ampullary region' (older textbooks said ampullary-isthmic junction)."
    }
  },
  {
    id: "bio-core-23",
    number: 23,
    section: "core",
    title: "Structure of Uterus: Perimetrium, Myometrium & Endometrium",
    shortLabel: "Uterine Wall 3 Layers",
    chapterId: "bio-ch-2",
    chapterTitle: "Human Reproduction",
    unit: "Reproduction",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange",
    frequency: "CBSE 2016, 2018, 2021, 2023",
    questionPrompt: "Describe the three tissue layers that constitute the uterine wall and explain the functional significance of each layer during menstruation and parturition.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 2: Human Reproduction",
      page: "Page 27",
      figures: "Fig 2.3"
    },
    theory: [
      "• The wall of the uterus (womb) is composed of three distinct histological layers:",
      "  1. Perimetrium: External thin membranous serous layer providing outer protective covering.",
      "  2. Myometrium: Middle thick layer of interlacing smooth muscle fibres. Exhibits strong, rhythmic contractions during parturition (childbirth) induced by oxytocin to expel the foetus.",
      "  3. Endometrium: Inner highly vascular, glandular mucous layer lining the uterine cavity. Undergoes cyclic cyclical changes during menstrual cycle (breaks down during menstruation; thickens during proliferative/secretory phases) and provides site for blastocyst implantation and placenta formation."
    ],
    keyPointsAndKeywords: [
      "Perimetrium: Outer membranous protective layer",
      "Myometrium: Middle thick smooth muscle, contracts during parturition (oxytocin)",
      "Endometrium: Inner glandular vascular layer, cyclic changes during menstrual cycle, implantation site"
    ],
    modelAnswer: {
      statement: "The uterine wall comprises outer perimetrium, middle myometrium (labor contractions), and inner endometrium (menstrual cycle and implantation).",
      markingScheme: [
        "1 Mark: Perimetrium description and protective function.",
        "1 Mark: Myometrium smooth muscle composition and role in labor/parturition.",
        "1 Mark: Endometrium vascular/glandular nature, menstrual cyclic changes, and implantation."
      ],
      examinerTips: "Clearly link Myometrium to parturition contractions and Endometrium to menstruation and implantation."
    }
  },
  {
    id: "bio-core-24",
    number: 24,
    section: "core",
    title: "Embryonic Development: Cleavage, Morula, Blastocyst & Implantation",
    shortLabel: "Zygote to Blastocyst Implantation",
    chapterId: "bio-ch-2",
    chapterTitle: "Human Reproduction",
    unit: "Reproduction",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange",
    frequency: "CBSE 2017, 2020, 2022, 2024",
    diagramId: "blastocyst",
    questionPrompt: "Describe the progressive development of a human zygote into a blastocyst and its subsequent implantation into the endometrium.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 2: Human Reproduction",
      page: "Pages 34–36",
      figures: "Fig 2.11"
    },
    theory: [
      "• Cleavage: Mitotic divisions start as the zygote moves through the isthmus towards the uterus, forming 2, 4, 8, 16 daughter cells called blastomeres.",
      "• Morula: The solid embryo with 8 to 16 blastomeres resembles a little mulberry (morula). Continues to divide and transforms into blastocyst as it moves into the uterus.",
      "• Blastocyst Structure: A hollow fluid-filled ball of cells consisting of:",
      "  – Trophoblast: Outer single layer of flat epithelial cells.",
      "  – Inner Cell Mass (ICM): Inner cluster of cells attached to one pole of trophoblast (embryonic pole).",
      "  – Blastocoel: Fluid-filled cavity.",
      "• Implantation (Day 7): Trophoblast layer gets attached to uterine endometrium. Uterine cells divide rapidly and cover the blastocyst. As a result, the blastocyst becomes embedded in the endometrium, leading to pregnancy."
    ],
    keyPointsAndKeywords: [
      "Cleavage produces blastomeres",
      "Morula: Solid ball of 8-16 blastomeres",
      "Blastocyst: Trophoblast + Inner Cell Mass + Blastocoel",
      "Trophoblast attaches to endometrium",
      "Inner cell mass forms embryo proper",
      "Implantation establishes pregnancy"
    ],
    modelAnswer: {
      statement: "Cleavage converts zygote into morula (8-16 cells) and subsequently into a blastocyst consisting of outer trophoblast and inner cell mass, which embeds into endometrium.",
      markingScheme: [
        "1 Mark: Cleavage definition, blastomeres, and morula stage.",
        "1 Mark: Blastocyst structure (Trophoblast and Inner cell mass differentiation).",
        "1 Mark: Implantation mechanism into the endometrium."
      ],
      examinerTips: "Remember: Stem cells capable of giving rise to all tissues and organs are located in the Inner Cell Mass (ICM)."
    }
  },
  {
    id: "bio-core-25",
    number: 25,
    number_label: "25",
    section: "core",
    title: "The Menstrual Cycle: Hormonal Control & Phasic Changes",
    shortLabel: "Menstrual Cycle & Hormones",
    chapterId: "bio-ch-2",
    chapterTitle: "Human Reproduction",
    unit: "Reproduction",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange",
    frequency: "CBSE 2015, 2018, 2021, 2023 (Guaranteed Question)",
    diagramId: "menstrual-cycle",
    questionPrompt: "(a) Explain the phases of the human menstrual cycle.\n(b) Detail the hormonal feedback involving FSH, LH, Estrogen, and Progesterone.\n(c) What causes the LH surge and what is its physiological effect?",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 2: Human Reproduction",
      page: "Pages 31–33",
      figures: "Fig 2.9"
    },
    theory: [
      "• Phasic Breakdown of 28-Day Cycle:",
      "  1. Menstrual Phase (Days 1–5): Breakdown of endometrial lining and uterine blood vessels due to progesterone withdrawal; blood and tissue discharged through vagina.",
      "  2. Follicular / Proliferative Phase (Days 6–13): Pituitary FSH stimulates primary follicles to grow into mature Graafian follicles. Maturing follicles secrete Estrogen. Estrogen stimulates proliferation and repair of endometrium.",
      "  3. Ovulatory Phase (Day 14): Both LH and FSH attain peak levels in mid-cycle. Rapid secretion of LH leading to its maximum level is called LH Surge. LH surge induces rupture of Graafian follicle and release of ovum (Ovulation).",
      "  4. Luteal / Secretory Phase (Days 15–28): Ruptured Graafian follicle transforms into Corpus Luteum under LH influence. Corpus luteum secretes large amounts of Progesterone essential for maintenance of thickened endometrium for implantation. If fertilisation does not occur, corpus luteum degenerates into corpus albicans, progesterone levels plummet, causing disintegration of endometrium and starting new cycle."
    ],
    keyPointsAndKeywords: [
      "Menstrual phase (Days 1-5): Endometrium sheds due to low progesterone",
      "Follicular phase (Days 6-13): FSH matures follicle, Estrogen repairs endometrium",
      "Day 14: LH Surge triggers ovulation",
      "Luteal phase (Days 15-28): Corpus luteum secretes Progesterone",
      "Corpus luteum degenerates if no fertilisation"
    ],
    modelAnswer: {
      statement: "The menstrual cycle is orchestrated by gonadotropins (FSH, LH) and ovarian steroids (Estrogen, Progesterone) controlling ovarian and uterine cycles.",
      markingScheme: [
        "1 Mark: Menstrual phase and Follicular phase events and hormonal triggers.",
        "1 Mark: LH surge mechanism on Day 14 triggering ovulation.",
        "1 Mark: Luteal phase, Corpus Luteum secretion of Progesterone, and fate in absence of fertilization."
      ],
      examinerTips: "Progesterone is often called the 'pregnancy hormone' because it maintains the endometrium and prevents uterine contractions."
    }
  },
  {
    id: "bio-core-26",
    number: 26,
    section: "core",
    title: "Spermatogenesis vs Oogenesis: Stepwise Comparison",
    shortLabel: "Spermatogenesis vs Oogenesis",
    chapterId: "bio-ch-2",
    chapterTitle: "Human Reproduction",
    unit: "Reproduction",
    marks: "4 Marks",
    marksNum: 4,
    category: "Big Orange",
    frequency: "CBSE 2016, 2019, 2022, 2024",
    questionPrompt: "Compare Spermatogenesis and Oogenesis with respect to: time of initiation, number of functional gametes produced, division symmetry, and ploidy of cells.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 2: Human Reproduction",
      page: "Pages 28–31",
      figures: "Fig 2.5 & Fig 2.7"
    },
    theory: [
      "• 1. Time of Initiation:",
      "  – Spermatogenesis starts at puberty due to significant increase in GnRH secretion.",
      "  – Oogenesis is initiated during embryonic development; millions of oogonia are formed in foetal ovary and no more are added after birth.",
      "• 2. Division Symmetry & Products:",
      "  – Spermatogenesis: Cytokinesis is equal throughout. One primary spermatocyte (2n) yields 4 functional haploid spermatozoa (sperms).",
      "  – Oogenesis: Meiotic divisions are highly unequal. First meiotic division produces a large secondary oocyte (n) and a tiny First Polar Body. Second meiotic division produces one large Ootid / Ovum (n) and a Second Polar Body. Only 1 functional ovum is produced per primary oocyte.",
      "• 3. Arrest Points:",
      "  – Spermatogenesis proceeds continuously without meiotic arrest.",
      "  – Oogenesis has two prolonged meiotic arrests: Prophase I (diplotene stage until puberty) and Metaphase II (arrested until sperm entry)."
    ],
    keyPointsAndKeywords: [
      "Spermatogenesis begins at puberty; Oogenesis begins during embryonic life",
      "Equal division produces 4 functional sperms",
      "Unequal division produces 1 functional ovum + polar bodies",
      "Primary oocyte arrested at Diplotene of Prophase I",
      "Secondary oocyte arrested at Metaphase II until fertilization"
    ],
    modelAnswer: {
      statement: "Spermatogenesis produces four motile sperms continuously from puberty, while Oogenesis begins embryonically, undergoes meiotic arrest, and yields a single ovum.",
      markingScheme: [
        "1 Mark: Onset time differences (puberty vs embryonic stage).",
        "1.5 Marks: Division symmetry and gamete yield (4 sperms vs 1 ovum + polar bodies).",
        "1.5 Marks: Meiotic arrests in oogenesis (Prophase I and Metaphase II) vs continuous spermatogenesis."
      ],
      examinerTips: "Remember: The second meiotic division in oogenesis is completed ONLY upon entry of sperm into the secondary oocyte."
    }
  },

  // ==========================================================================
  // CHAPTER 3: REPRODUCTIVE HEALTH
  // ==========================================================================
  {
    id: "bio-core-27",
    number: 27,
    section: "core",
    title: "Methods of Birth Control: Categories, Mechanisms & Examples",
    shortLabel: "Methods of Birth Control",
    chapterId: "bio-ch-3",
    chapterTitle: "Reproductive Health",
    unit: "Reproduction",
    marks: "4 Marks",
    marksNum: 4,
    category: "Big Orange",
    frequency: "CBSE 2015, 2017, 2019, 2021, 2023",
    questionPrompt: "Categorise and describe the principal contraceptive methods available to humans:\n(a) Natural / Traditional methods\n(b) Barrier methods\n(c) Intrauterine Devices (IUDs)\n(d) Oral Contraceptive Pills\n(e) Surgical / Terminal methods",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 3: Reproductive Health",
      page: "Pages 42–46"
    },
    theory: [
      "• 1. Natural Methods: Periodic abstinence (avoid coitus from day 10 to 17 of menstrual cycle), Coitus interruptus (withdrawal of penis before ejaculation), Lactational amenorrhea (absence of menstruation during intense lactation, effective up to 6 months).",
      "• 2. Barrier Methods: Prevent physical meeting of sperm and ovum. Condoms (rubber/latex sheaths; also protect against STIs), Diaphragms, cervical caps, and vaults (reusable rubber barriers inserted into female cervix).",
      "• 3. Intrauterine Devices (IUDs): Inserted by doctors into uterus via vagina. Most widely accepted method in India:",
      "  – Non-medicated IUDs: Lippes loop (increases phagocytosis of sperms).",
      "  – Copper-releasing IUDs: CuT, Cu7, Multiload 375 (Cu ions suppress sperm motility and fertilising capacity).",
      "  – Hormone-releasing IUDs: Progestasert, LNG-20 (make uterus unsuitable for implantation and cervix hostile to sperms).",
      "• 4. Oral Pills: Progestogens or Progestogen-estrogen combinations (e.g. Mala-D). Inhibit ovulation and implantation, alter cervical mucus quality. 'Saheli' is a non-steroidal oral pill developed by CDRI Lucknow, taken once a week with very few side effects.",
      "• 5. Surgical Methods (Sterilization): Terminal and irreversible.",
      "  – Vasectomy: Small part of vas deferens removed or tied up in males.",
      "  – Tubectomy: Small part of fallopian tubes removed or tied up in females."
    ],
    keyPointsAndKeywords: [
      "Natural: Periodic abstinence, lactational amenorrhea",
      "Barrier: Condoms prevent STIs",
      "IUDs: Non-medicated (Lippes loop), Cu-releasing (CuT), Hormone-releasing (LNG-20)",
      "Oral: Saheli (non-steroidal, once-a-week, CDRI Lucknow)",
      "Surgical: Vasectomy (males) and Tubectomy (females)"
    ],
    modelAnswer: {
      statement: "Contraceptive methods prevent unwanted pregnancies through behavioral, mechanical, chemical, and surgical interventions.",
      markingScheme: [
        "1 Mark: Natural and Barrier methods with STI protection highlight.",
        "1.5 Marks: Detailed classification of IUDs (Copper-releasing vs Hormone-releasing vs Non-medicated).",
        "1.5 Marks: Oral pills (Saheli features) and Surgical sterilization (Vasectomy vs Tubectomy)."
      ],
      examinerTips: "Remember: 'Saheli' is non-steroidal, developed by CDRI (Central Drug Research Institute) in Lucknow, and is taken once a week."
    }
  },
  {
    id: "bio-core-28",
    number: 28,
    section: "core",
    title: "Sexually Transmitted Infections (STIs) & Prevention",
    shortLabel: "STIs & Prevention",
    chapterId: "bio-ch-3",
    chapterTitle: "Reproductive Health",
    unit: "Reproduction",
    marks: "2 Marks",
    marksNum: 2,
    category: "Big Orange",
    frequency: "CBSE 2016, 2018, 2022",
    questionPrompt: "Name any four Sexually Transmitted Infections (STIs). Which three STIs are not completely curable? Mention any two preventive measures.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 3: Reproductive Health",
      page: "Pages 46–47"
    },
    theory: [
      "• Infections or diseases transmitted through sexual intercourse are called STIs (Venereal Diseases / RTIs).",
      "• Common STIs: Gonorrhoea, Syphilis, Genital herpes, Chlamydiasis, Genital warts, Trichomoniasis, Hepatitis-B, and HIV/AIDS.",
      "• Non-Curable STIs: Hepatitis-B, Genital herpes, and HIV infection are NOT completely curable even if detected early. All other STIs are completely curable if diagnosed and treated early.",
      "• Preventive Measures: (1) Avoid sex with unknown partners or multiple partners. (2) Always use condoms during coitus. (3) In case of doubt, consult a qualified doctor immediately for early detection and full course treatment."
    ],
    keyPointsAndKeywords: [
      "STIs / Venereal diseases / RTIs",
      "Incurable trio: HIV, Hepatitis-B, Genital herpes",
      "Barrier protection using condoms",
      "Early diagnosis and complete treatment"
    ],
    modelAnswer: {
      statement: "STIs spread through sexual contact; Hepatitis-B, genital herpes, and HIV are incurable, highlighting the need for prevention.",
      markingScheme: [
        "1 Mark: Four STIs listed + explicit mention of the 3 incurable STIs (HIV, Hepatitis-B, Genital herpes).",
        "1 Mark: Two clear preventive measures."
      ],
      examinerTips: "Do not forget: Hepatitis-B and HIV can also be transmitted via infected blood transfusions, shared needles, and from mother to foetus."
    }
  },
  {
    id: "bio-core-29",
    number: 29,
    section: "core",
    title: "Medical Termination of Pregnancy (MTP): Legalities & Conditions",
    shortLabel: "MTP & MTP Amendment Act",
    chapterId: "bio-ch-3",
    chapterTitle: "Reproductive Health",
    unit: "Reproduction",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange",
    frequency: "CBSE 2017, 2019, 2021, 2024",
    questionPrompt: "What is Medical Termination of Pregnancy (MTP)? When was it legalised in India and what are the provisions of the MTP (Amendment) Act 2017 regarding gestation limits?",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 3: Reproductive Health",
      page: "Pages 45–46"
    },
    theory: [
      "• Definition: Intentional or voluntary termination of pregnancy before full term is called Medical Termination of Pregnancy (MTP) or induced abortion.",
      "• Legal Status: Government of India legalised MTP in 1971 with strict conditions to avoid its misuse (such as female foeticide).",
      "• MTP (Amendment) Act, 2017 Provisions:",
      "  1. Safe Period: MTP is relatively safe during the First Trimester (up to 12 weeks of pregnancy). Second-trimester abortions are much riskier.",
      "  2. Requirements: Up to 12 weeks of gestation, opinion of One Registered Medical Practitioner (RMP) is required. From 12 weeks to 24 weeks, opinion of Two RMPs is mandatorily required for defined vulnerable categories of women (rape survivors, minors, substantial foetal abnormalities).",
      "• Acceptable Grounds for MTP: (i) Continuation of pregnancy entails risk to the life of the pregnant woman or grave injury to physical/mental health. (ii) Substantial risk that the child if born would suffer from serious physical/mental abnormalities."
    ],
    keyPointsAndKeywords: [
      "Voluntary termination before full term",
      "Legalised in India in 1971 to prevent misuse",
      "Safe up to 12 weeks (First trimester)",
      "MTP Amendment Act 2017: 1 RMP up to 12 weeks, 2 RMPs up to 24 weeks",
      "Strict ban on sex-selective abortion"
    ],
    modelAnswer: {
      statement: "MTP is safe up to 12 weeks; the MTP Amendment Act 2017 regulates procedures up to 24 weeks under RMP medical supervision.",
      markingScheme: [
        "1 Mark: Definition of MTP + Legalisation year (1971).",
        "1 Mark: Safe period (first trimester / 12 weeks) vs risky second trimester.",
        "1 Mark: MTP Amendment Act 2017: 1 RMP up to 12 weeks, 2 RMPs up to 24 weeks for vulnerable cases."
      ],
      examinerTips: "Remember: MTP is NOT meant for sex determination or general birth control, but for emergency medical and reproductive safety."
    }
  },
  {
    id: "bio-core-30",
    number: 30,
    section: "core",
    title: "Assisted Reproductive Technologies (ART): ZIFT, GIFT, ICSI & IVF",
    shortLabel: "ART: ZIFT vs GIFT vs ICSI",
    chapterId: "bio-ch-3",
    chapterTitle: "Reproductive Health",
    unit: "Reproduction",
    marks: "3 / 5 Marks",
    marksNum: 5,
    category: "Big Orange",
    frequency: "CBSE 2016, 2018, 2020, 2022, 2024 (Very High Yield — 3M or 5M Question)",
    questionPrompt: "Explain the full forms, principles, and clinical indications for the following Assisted Reproductive Technologies (ART):\n(a) IVF-ET (In Vitro Fertilisation & Embryo Transfer)\n(b) ZIFT (Zygote Intra-Fallopian Transfer)\n(c) GIFT (Gamete Intra-Fallopian Transfer)\n(d) ICSI (Intra-Cytoplasmic Sperm Injection)\n(e) IUI (Intra-Uterine Insemination)",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 3: Reproductive Health",
      page: "Pages 47–48"
    },
    theory: [
      "• 1. IVF-ET (In Vitro Fertilisation - Embryo Transfer): Fertilisation takes place outside the body in simulated laboratory conditions ('test-tube baby'). The developing embryo is transferred back:",
      "  – ZIFT (Zygote Intra-Fallopian Transfer): Zygote or early embryo up to 8 blastomeres is transferred into the Fallopian tube.",
      "  – IUT (Intra-Uterine Transfer): Embryos with more than 8 blastomeres are transferred directly into the uterus.",
      "• 2. GIFT (Gamete Intra-Fallopian Transfer): Transfer of an ovum collected from a donor female into the Fallopian tube of another female who cannot produce an ovum, but can provide a suitable internal environment for fertilisation and development.",
      "• 3. ICSI (Intra-Cytoplasmic Sperm Injection): Specialized laboratory technique in which a single sperm is directly injected into the cytoplasm of an ovum to form an embryo in vitro.",
      "• 4. IUI (Intra-Uterine Insemination): Semen collected from husband or healthy donor is introduced artificially directly into the uterus of the female (indicated for low sperm count/oligospermia or inability of male partner to inseminate)."
    ],
    keyPointsAndKeywords: [
      "IVF: Fertilisation outside the body",
      "ZIFT: Zygote / embryo up to 8 blastomeres into fallopian tube",
      "IUT: Embryo > 8 blastomeres into uterus",
      "GIFT: Transfer of unfertilised ovum into fallopian tube",
      "ICSI: Direct sperm injection into ovum cytoplasm",
      "IUI: Artificial insemination into uterus (oligospermia)"
    ],
    modelAnswer: {
      statement: "ART encompasses clinical procedures to overcome infertility: ZIFT (embryo ≤8 cells into tube), IUT (>8 cells into uterus), GIFT (gamete transfer into tube), ICSI (direct microinjection), and IUI (uterine insemination).",
      markingScheme: [
        "1 Mark: (a) IVF-ET principle (fertilisation outside the body in vitro under simulated conditions followed by embryo transfer).",
        "1 Mark: (b) ZIFT vs IUT: Zygote or embryo ≤ 8 blastomeres into Fallopian tube (ZIFT) vs embryo > 8 blastomeres into uterus (IUT).",
        "1 Mark: (c) GIFT: Transfer of ovum from donor female into Fallopian tube of another female who cannot produce ovum but can support pregnancy.",
        "1 Mark: (d) ICSI: Intra-Cytoplasmic Sperm Injection — microinjection of a single sperm directly into the cytoplasm of an ovum in vitro.",
        "1 Mark: (e) IUI: Intra-Uterine Insemination — semen introduced artificially into the uterus for low sperm count (oligospermia) or male erectile dysfunction."
      ],
      examinerTips: "Do not confuse ZIFT and GIFT: ZIFT transfers a ZYGOTE/EMBRYO (post-fertilisation), whereas GIFT transfers a GAMETE/OVUM (pre-fertilisation)."
    }
  },

  // ==========================================================================
  // CHAPTER 7: HUMAN HEALTH AND DISEASE
  // ==========================================================================
  {
    id: "bio-core-31",
    number: 31,
    section: "core",
    title: "Innate Immunity: Four Protective Barriers",
    shortLabel: "Innate Immunity 4 Barriers",
    chapterId: "bio-ch-7",
    chapterTitle: "Human Health and Disease",
    unit: "Biology in Human Welfare",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange",
    frequency: "CBSE 2016, 2018, 2021, 2023",
    questionPrompt: "What is innate immunity? Describe the four major types of barriers that constitute non-specific innate immunity in humans with two examples of each.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 7: Human Health and Disease",
      page: "Pages 134–135"
    },
    theory: [
      "• Innate Immunity is non-specific defence present from the time of birth, providing the first line of defence through four barriers:",
      "  1. Physical Barriers: Skin (outer stratum corneum prevents entry of micro-organisms); Mucous coating of the epithelium lining the respiratory, gastrointestinal, and urogenital tracts traps invading microbes.",
      "  2. Physiological Barriers: Acid in the stomach ($HCl$ kills ingested bacteria); Saliva in the mouth and Lysozyme in tears prevent microbial growth.",
      "  3. Cellular Barriers: Phagocytic white blood cells like Polymorphonuclear Leukocytes (PMNL-neutrophils), Monocytes, Natural Killer (NK) lymphocytes in blood, and Macrophages in tissues engulf and destroy pathogens.",
      "  4. Cytokine Barriers: Virus-infected cells secrete proteins called Interferons, which protect non-infected surrounding cells from further viral infection."
    ],
    keyPointsAndKeywords: [
      "Non-specific, present from birth",
      "Physical: Skin & Mucus coating",
      "Physiological: Stomach acid, saliva, lysozyme in tears",
      "Cellular: PMNL-neutrophils, monocytes, macrophages",
      "Cytokine: Interferons protect non-infected cells from viruses"
    ],
    modelAnswer: {
      statement: "Innate immunity comprises physical, physiological, cellular, and cytokine barriers providing immediate non-specific protection.",
      markingScheme: [
        "0.5 Mark: Innate immunity definition (non-specific, present from birth).",
        "2.5 Marks: Detailed explanation of all 4 barriers with accurate biological examples (Skin/Mucus, Acid/Lysozyme, PMNL/Macrophage, Interferons)."
      ],
      examinerTips: "Interferons are heavily tested in 1M/2M questions: remember they are secreted by VIRUS-INFECTED cells to protect uninfected cells."
    }
  },
  {
    id: "bio-core-32",
    number: 32,
    section: "core",
    title: "Antibody Structure & Immunoglobulin Classes",
    shortLabel: "Antibody Molecule H2L2",
    chapterId: "bio-ch-7",
    chapterTitle: "Human Health and Disease",
    unit: "Biology in Human Welfare",
    marks: "2 Marks",
    marksNum: 2,
    category: "Big Orange",
    frequency: "CBSE 2017, 2019, 2022, 2024",
    diagramId: "antibody-molecule",
    questionPrompt: "Draw a labelled diagram of an antibody molecule. Why is it represented as H₂L₂? Name any two classes of antibodies and state their primary function.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 7: Human Health and Disease",
      page: "Page 138",
      figures: "Fig 7.4"
    },
    theory: [
      "• Structure: Each antibody molecule has 4 polypeptide chains: two identical small light (L) chains and two identical longer heavy (H) chains. Hence, represented as H₂L₂.",
      "• Disulfide Bonds: Chains are linked together by inter-chain and intra-chain disulfide (-S-S-) bonds forming a Y-shaped structure.",
      "• Binding Sites: The two tips of the Y arms contain hypervariable Antigen-Binding Sites (Paratopes) that bind specifically to epitopes on antigens.",
      "• Major Classes: IgA (abundant in colostrum, protects infant's gut), IgG (most abundant in blood, crosses placenta), IgM (first responder pentamer), IgE (mediates allergic reactions by binding to mast cells)."
    ],
    keyPointsAndKeywords: [
      "H₂L₂: Two heavy chains and two light chains",
      "Linked by disulfide bonds (-S-S-)",
      "Antigen-binding sites at amino tips",
      "IgA in colostrum (passive natural immunity)",
      "IgE in allergic responses"
    ],
    modelAnswer: {
      statement: "Antibodies are Y-shaped glycoproteins consisting of two heavy and two light polypeptide chains linked by disulfide bridges.",
      markingScheme: [
        "1 Mark: Labelled diagram showing Heavy chains, Light chains, Disulfide bonds, and Antigen-binding sites.",
        "0.5 Mark: Justification of H₂L₂ formula.",
        "0.5 Mark: Specific functions of IgA (colostrum) and IgE (allergic reactions)."
      ],
      examinerTips: "Colostrum contains abundant IgA antibodies that provide essential passive natural immunity to the newborn infant."
    }
  },
  {
    id: "bio-core-33",
    number: 33,
    section: "core",
    title: "Innate vs Acquired Immunity & Active vs Passive Immunity",
    shortLabel: "Innate vs Acquired / Active vs Passive",
    chapterId: "bio-ch-7",
    chapterTitle: "Human Health and Disease",
    unit: "Biology in Human Welfare",
    marks: "4 Marks",
    marksNum: 4,
    category: "Big Orange",
    frequency: "CBSE 2015, 2018, 2020, 2023",
    questionPrompt: "(a) Differentiate between Innate and Acquired Immunity.\n(b) Differentiate between Active and Passive Immunity with one example of each.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 7: Human Health and Disease",
      page: "Pages 134–136"
    },
    theory: [
      "• 1. Innate vs Acquired Immunity:",
      "  – Innate: Present from birth; non-specific defence; no immunological memory; responds immediately (e.g. skin, stomach acid).",
      "  – Acquired: Developed during lifetime; pathogen-specific; characterized by immunological memory; primary response is slow, secondary anamnestic response is highly intensified (mediated by B-lymphocytes and T-lymphocytes).",
      "• 2. Active vs Passive Immunity:",
      "  – Active Immunity: Host body's own immune system produces antibodies upon exposure to living or dead microbes (antigens). Slow and takes time to develop, but provides long-lasting immunological memory. (e.g. Natural infection, or artificial vaccination with polio/measles vaccine).",
      "  – Passive Immunity: Ready-made, pre-formed antibodies are directly administered into the body. Provides immediate fast protection, but temporary with no immunological memory. (e.g. IgA in colostrum, anti-tetanus serum / ATS, anti-venom for snake bites)."
    ],
    keyPointsAndKeywords: [
      "Innate: Non-specific, from birth, no memory",
      "Acquired: Pathogen-specific, memory-based, B & T cells",
      "Active: Host produces antibodies, slow, long-lasting memory (vaccine)",
      "Passive: Readymade antibodies given, fast, no memory (Colostrum IgA, Anti-tetanus serum)"
    ],
    modelAnswer: {
      statement: "Immunity divides into Innate (inborn non-specific) vs Acquired (learned specific), and Active (host-synthesized antibodies) vs Passive (preformed antibodies).",
      markingScheme: [
        "2 Marks: Innate vs Acquired immunity (Specificity, Memory, Timing, Mediators).",
        "2 Marks: Active vs Passive immunity (Antibody source, Speed, Duration/Memory, Examples)."
      ],
      examinerTips: "Snake antivenom is an example of PASSIVE immunity because preformed neutralizing antibodies are injected immediately."
    }
  },
  {
    id: "bio-core-34",
    number: 34,
    section: "core",
    title: "Cancer Biology: Hallmarks, Contact Inhibition & Treatment",
    shortLabel: "Cancer Biology & Metastasis",
    chapterId: "bio-ch-7",
    chapterTitle: "Human Health and Disease",
    unit: "Biology in Human Welfare",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange",
    frequency: "CBSE 2017, 2019, 2021, 2024",
    questionPrompt: "(a) How do normal cells differ from cancerous cells regarding contact inhibition and apoptosis?\n(b) Differentiate between Benign and Malignant tumours.\n(c) What is metastasis and why is it considered the most feared property of malignant tumours?",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 7: Human Health and Disease",
      page: "Pages 141–142"
    },
    theory: [
      "• Cancer Hallmarks:",
      "  – Normal cells show Contact Inhibition (contact with other cells inhibits uncontrolled growth). Cancer cells lose contact inhibition, continuing to divide and pile up to form masses of cells (tumours).",
      "  – Cancer cells bypass apoptosis (programmed cell death) and divide uncontrollably.",
      "• Benign vs Malignant Tumours:",
      "  – Benign Tumour: Remains confined to its original location; does not spread to other body parts; causes relatively little damage.",
      "  – Malignant Tumour: Mass of proliferating neoplastic cells that grow rapidly, invade and damage surrounding normal tissues; starve normal cells by competing for vital nutrients.",
      "• Metastasis: Cells sloughed from malignant tumours reach distant sites through blood or lymph. Wherever they lodge, they initiate a new secondary tumour. It is the most dreaded property because it spreads cancer throughout the body, making surgical eradication difficult."
    ],
    keyPointsAndKeywords: [
      "Loss of contact inhibition in cancer cells",
      "Benign (localized) vs Malignant (invasive neoplasm)",
      "Metastasis: Spread through blood/lymph to seed secondary tumours",
      "Oncogenic viruses and proto-oncogenes activation",
      "Treatment: Surgery, Radiation, Chemotherapy, Immunotherapy (alpha-interferon)"
    ],
    modelAnswer: {
      statement: "Cancer results from breakdown of regulatory growth controls; malignant cells invade tissues and exhibit metastasis via circulation.",
      markingScheme: [
        "1 Mark: Loss of contact inhibition explanation.",
        "1 Mark: Benign vs Malignant tumour differences.",
        "1 Mark: Metastasis definition and justification as the most feared property."
      ],
      examinerTips: "Remember: Alpha-interferon is used in cancer immunotherapy as a biological response modifier to activate the patient's immune system to destroy tumours."
    }
  },

  // ==========================================================================
  // CHAPTER 8: MICROBES IN HUMAN WELFARE
  // ==========================================================================
  {
    id: "bio-core-35",
    number: 35,
    section: "core",
    title: "Propionibacterium sharmanii & Swiss Cheese Production",
    shortLabel: "Propionibacterium sharmanii",
    chapterId: "bio-ch-8",
    chapterTitle: "Microbes in Human Welfare",
    unit: "Biology in Human Welfare",
    marks: "2 Marks",
    marksNum: 2,
    category: "Big Orange",
    frequency: "CBSE 2016, 2018, 2021, 2023",
    questionPrompt: "Name the bacterium responsible for the ripening of Swiss cheese. Why does Swiss cheese have large characteristic holes?",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 8: Microbes in Human Welfare",
      page: "Page 149"
    },
    theory: [
      "• Bacterium: Propionibacterium sharmanii.",
      "• Reason for Large Holes: During fermentation and ripening, the bacterium ferments lactic acid into propionic acid, acetic acid, and large volumes of Carbon Dioxide gas ($CO_2$).",
      "• The trapped bubbles of escaping $CO_2$ produce the characteristic large holes in Swiss cheese.",
      "• Note: Roquefort cheese is ripened by growing a specific fungus (Penicillium roqueforti) on it, giving it a particular flavor."
    ],
    keyPointsAndKeywords: [
      "Propionibacterium sharmanii",
      "Large holes due to production of large amount of CO₂",
      "Lactic acid fermented to propionic acid + CO₂",
      "Roquefort cheese ripened by Penicillium roqueforti fungus"
    ],
    modelAnswer: {
      statement: "Propionibacterium sharmanii ferments cheese curd, generating copious CO₂ gas bubbles that form the characteristic large holes in Swiss cheese.",
      markingScheme: [
        "1 Mark: Correct scientific name: Propionibacterium sharmanii.",
        "1 Mark: Explanation of large CO₂ gas production during fermentation."
      ],
      examinerTips: "Remember to write the scientific name with proper capitalization: Propionibacterium sharmanii."
    }
  },
  {
    id: "bio-core-36",
    number: 36,
    section: "core",
    title: "Bioactive Molecules: Cyclosporin A & Statins",
    shortLabel: "Cyclosporin A & Statins",
    chapterId: "bio-ch-8",
    chapterTitle: "Microbes in Human Welfare",
    unit: "Biology in Human Welfare",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange",
    frequency: "CBSE 2015, 2017, 2019, 2022, 2024 (Guaranteed 3M)",
    questionPrompt: "Tabulate the microbial source and medical application of:\n(a) Cyclosporin A\n(b) Statins\n(c) Streptokinase",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 8: Microbes in Human Welfare",
      page: "Page 151"
    },
    theory: [
      "• 1. Cyclosporin A:",
      "  – Microbial Source: Fungus Trichoderma polysporum.",
      "  – Medical Application: Used as an immunosuppressive agent in organ-transplant patients to prevent graft rejection by inhibiting T-cell activation.",
      "• 2. Statins:",
      "  – Microbial Source: Yeast Monascus purpureus.",
      "  – Medical Application: Blood cholesterol-lowering agents. Competitively inhibits the enzyme (HMG-CoA reductase) responsible for the synthesis of cholesterol in the liver.",
      "• 3. Streptokinase (Clot Buster):",
      "  – Microbial Source: Bacterium Streptococcus (modified by genetic engineering).",
      "  – Medical Application: Used as a 'clot buster' to dissolve blood clots from blood vessels of patients who have suffered myocardial infarction leading to heart attack."
    ],
    keyPointsAndKeywords: [
      "Cyclosporin A from Trichoderma polysporum fungus (immunosuppressant)",
      "Statins from Monascus purpureus yeast (lowers blood cholesterol, competitive inhibition)",
      "Streptokinase from Streptococcus bacterium (clot buster for myocardial infarction)"
    ],
    modelAnswer: {
      statement: "Microbes produce potent pharmaceuticals: Cyclosporin A (immunosuppressant), Statins (cholesterol reduction), and Streptokinase (clot removal).",
      markingScheme: [
        "1 Mark: Cyclosporin A: Trichoderma polysporum + Immunosuppressive agent in organ transplants.",
        "1 Mark: Statins: Monascus purpureus + Competitive inhibitor lowering cholesterol.",
        "1 Mark: Streptokinase: Streptococcus + Clot buster for heart attack patients."
      ],
      examinerTips: "Statins act via 'competitive inhibition' of cholesterol synthesis enzymes — mention this keyword for full marks!"
    }
  },
  {
    id: "bio-core-37",
    number: 37,
    section: "core",
    title: "Microbial Industrial Enzymes: Lipases, Pectinases & Proteases",
    shortLabel: "Industrial Microbial Enzymes",
    chapterId: "bio-ch-8",
    chapterTitle: "Microbes in Human Welfare",
    unit: "Biology in Human Welfare",
    marks: "2 Marks",
    marksNum: 2,
    category: "Big Orange",
    frequency: "CBSE 2016, 2018, 2020, 2023",
    questionPrompt: "State the industrial/commercial application of the following microbial enzymes:\n(a) Lipases\n(b) Pectinases and Proteases\n(c) Streptokinase",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 8: Microbes in Human Welfare",
      page: "Page 151"
    },
    theory: [
      "• 1. Lipases: Used in detergent formulations to remove oily and greasy stains from laundry.",
      "• 2. Pectinases and Proteases: Used for clarifying commercial bottled fruit juices (bottled juices bought from market are clearer than homemade juices because they are treated with pectinases and proteases).",
      "• 3. Streptokinase: Used in medicine as a clot buster for removing blood clots from thrombotic blood vessels."
    ],
    keyPointsAndKeywords: [
      "Lipases in detergents for oil/grease stain removal",
      "Pectinases & Proteases clarify bottled fruit juices",
      "Streptokinase as clot buster"
    ],
    modelAnswer: {
      statement: "Enzymes from microbes have vital industrial roles: Lipases remove stains, and pectinases/proteases clarify fruit juices.",
      markingScheme: [
        "1 Mark: Lipases (detergents, oil stain removal).",
        "1 Mark: Pectinases and Proteases (clearing bottled fruit juices)."
      ],
      examinerTips: "Why are market bottled fruit juices clearer than homemade ones? Because commercial juices are treated with pectinases and proteases!"
    }
  },
  {
    id: "bio-core-38",
    number: 38,
    section: "core",
    title: "Sewage Treatment: Primary vs Secondary (Biological) Treatment & BOD",
    shortLabel: "Sewage Treatment & BOD",
    chapterId: "bio-ch-8",
    chapterTitle: "Microbes in Human Welfare",
    unit: "Biology in Human Welfare",
    marks: "5 Marks",
    marksNum: 5,
    category: "Big Orange",
    frequency: "CBSE 2015, 2017, 2019, 2022, 2024 (Guaranteed 5M Question)",
    questionPrompt: "Describe the sequential process of Sewage Treatment in Sewage Treatment Plants (STPs):\n(a) Primary Treatment (Physical)\n(b) Secondary Treatment (Biological) with reference to Flocs and BOD\n(c) Anaerobic Sludge Digestion and Biogas production",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 8: Microbes in Human Welfare",
      page: "Pages 151–153"
    },
    theory: [
      "• Sewage contains large amounts of organic matter and pathogenic microbes, necessitating STP processing before environmental discharge.",
      "• 1. Primary Treatment (Physical Separation):",
      "  – Involves physical removal of large and small particles through filtration and sedimentation.",
      "  – Floating debris is removed by sequential filtration through wire mesh.",
      "  – Grit (soil and small pebbles) is removed by sedimentation in grit chambers.",
      "  – All solids that settle form the Primary Sludge, and the supernatant forms the Primary Effluent.",
      "• 2. Secondary Treatment (Biological Treatment):",
      "  – Primary effluent is passed into large Aeration Tanks where it is constantly agitated mechanically and air is pumped into it.",
      "  – Promotes vigorous growth of useful aerobic microbes into Flocs (masses of bacteria associated with fungal filaments to form mesh-like networks).",
      "  – Growing microbes consume major organic matter, significantly reducing BOD (Biochemical Oxygen Demand).",
      "  – BOD refers to the amount of oxygen required to oxidise all organic matter in one litre of water by bacteria. High BOD = High polluting potential.",
      "• 3. Settling and Anaerobic Digestion:",
      "  – Once BOD is reduced, effluent is passed into Settling Tanks where flocs sediment to form Activated Sludge.",
      "  – A small part of activated sludge is pumped back to aeration tank as Inoculum.",
      "  – Remaining major sludge is pumped into Anaerobic Sludge Digesters where anaerobic bacteria digest bacteria and fungi, producing Biogas (mixture of Methane, $CO_2$, and $H_2S$)."
    ],
    keyPointsAndKeywords: [
      "Primary treatment = Physical filtration & sedimentation",
      "Primary effluent passed to Aeration tanks",
      "Flocs: Bacteria + Fungal filaments mesh",
      "BOD: Biochemical Oxygen Demand measure of organic pollution",
      "Activated sludge sedimented in settling tank",
      "Anaerobic sludge digester produces Biogas (CH₄ + CO₂ + H₂S)"
    ],
    modelAnswer: {
      statement: "Sewage treatment utilizes physical sedimentation (primary) followed by aerobic microbial flocs to reduce BOD, and anaerobic digestion yielding biogas.",
      markingScheme: [
        "1.5 Marks: Primary treatment (sequential filtration, grit sedimentation, primary sludge vs effluent).",
        "2 Marks: Secondary aeration tank, Flocs definition, and BOD reduction mechanism.",
        "1.5 Marks: Settling tank, activated sludge inoculum, and anaerobic sludge digester producing biogas (CH₄, CO₂, H₂S)."
      ],
      examinerTips: "Remember: BOD is directly proportional to polluting potential — the greater the BOD of waste water, the more is its polluting potential."
    }
  },

  // ==========================================================================
  // CHAPTER 9: BIOTECHNOLOGY: PRINCIPLES AND PROCESSES
  // ==========================================================================
  {
    id: "bio-core-39",
    number: 39,
    section: "core",
    title: "Steps of Recombinant DNA (rDNA) Technology",
    shortLabel: "Process of rDNA Technology",
    chapterId: "bio-ch-9",
    chapterTitle: "Biotechnology: Principles and Processes",
    unit: "Biotechnology",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange",
    frequency: "CBSE 2016, 2018, 2021, 2023",
    questionPrompt: "Outline the sequential steps involved in Recombinant DNA (rDNA) Technology from donor DNA isolation to obtaining the foreign gene product.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 9: Biotechnology: Principles and Processes",
      page: "Pages 164–172",
      figures: "Fig 9.2"
    },
    theory: [
      "• Sequential Steps in rDNA Technology:",
      "  1. Isolation of Genetic Material (DNA): Lysis of cells, removal of macromolecules, and alcohol spooling of pure DNA.",
      "  2. Cutting of DNA at Specific Locations: Using restriction endonucleases to cut both source DNA and cloning vector at palindrome recognition sites.",
      "  3. Amplification of Gene of Interest using PCR: In vitro exponential DNA copying using Taq DNA polymerase, primers, and dNTPs (Denaturation, Annealing, Extension).",
      "  4. Ligation of DNA Fragment into a Vector: Using DNA Ligase to join sticky ends, forming recombinant DNA (chimeric DNA).",
      "  5. Insertion of rDNA into Host Organism: Using competent cells, microinjection, or biolistics.",
      "  6. Culturing Host Cells in Medium at Large Scale: In Bioreactors (stirred-tank) under optimal growth parameters.",
      "  7. Downstream Processing: Separation, purification, quality testing, and formulation of the recombinant product."
    ],
    keyPointsAndKeywords: [
      "Isolation of DNA (chilled ethanol)",
      "Restriction endonuclease cleavage",
      "PCR amplification (Taq polymerase)",
      "DNA Ligase creates recombinant vector",
      "Transformation of competent host",
      "Bioreactors for large-scale culture",
      "Downstream processing (purification)"
    ],
    modelAnswer: {
      statement: "Recombinant DNA technology involves isolation, cleavage, PCR amplification, vector ligation, transformation, bioreactor culture, and downstream processing.",
      markingScheme: [
        "1 Mark: Steps 1 to 3: Isolation, restriction cleavage, PCR amplification.",
        "1 Mark: Steps 4 and 5: Ligation with cloning vector and host transformation.",
        "1 Mark: Steps 6 and 7: Bioreactor production and downstream processing."
      ],
      examinerTips: "Remember: Both foreign DNA and plasmid vector MUST be cleaved with the SAME restriction enzyme to generate identical complementary sticky ends."
    }
  },
  {
    id: "bio-core-40",
    number: 40,
    section: "core",
    title: "Isolation of Genetic Material (DNA): Enzymatic Lysis & Spooling",
    shortLabel: "Isolation of Pure DNA",
    chapterId: "bio-ch-9",
    chapterTitle: "Biotechnology: Principles and Processes",
    unit: "Biotechnology",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange",
    frequency: "CBSE 2017, 2019, 2022",
    questionPrompt: "Describe the step-by-step procedure for the isolation of purified DNA from bacterial, fungal, or plant cells. Why is chilled ethanol added at the end?",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 9: Biotechnology: Principles and Processes",
      page: "Page 171",
      figures: "Fig 9.7"
    },
    theory: [
      "• DNA is enclosed within membranes along with macromolecules (proteins, RNA, lipids, polysaccharides) and must be isolated in pure form.",
      "• Step 1: Cell Wall Breakdown (Lysis):",
      "  – Bacterial cells treated with Lysozyme.",
      "  – Plant cells treated with Cellulase (and pectinase).",
      "  – Fungal cells treated with Chitinase.",
      "• Step 2: Elimination of Macromolecules:",
      "  – RNA is removed by treatment with Ribonuclease (RNase).",
      "  – Proteins (histones) are removed by treatment with Protease.",
      "• Step 3: Precipitation and Spooling:",
      "  – Pure DNA is precipitated out by adding Chilled Ethanol.",
      "  – DNA precipitates as a collection of fine white threads in suspension and is gathered by spooling (winding around a glass rod)."
    ],
    keyPointsAndKeywords: [
      "Lysozyme (bacteria), Cellulase (plants), Chitinase (fungi)",
      "Ribonuclease (removes RNA)",
      "Protease (removes proteins)",
      "Chilled ethanol precipitates DNA as fine threads",
      "Spooling collects pure DNA"
    ],
    modelAnswer: {
      statement: "Isolation of DNA requires specific cell-wall enzymatic lysis, removal of RNA and proteins by enzymes, and precipitation using chilled ethanol.",
      markingScheme: [
        "1 Mark: Specific enzymes for bacterial (lysozyme), plant (cellulase), and fungal (chitinase) cell lysis.",
        "1 Mark: Ribonuclease and Protease treatments to remove RNA and proteins.",
        "1 Mark: Chilled ethanol precipitation and spooling description."
      ],
      examinerTips: "Why CHILLED ethanol? Because DNA is insoluble in cold alcohol and precipitates out immediately as visible white fibres."
    }
  },
  {
    id: "bio-core-41",
    number: 41,
    section: "core",
    title: "Restriction Enzymes (Endonucleases): Palindromes & Sticky Ends",
    shortLabel: "Restriction Endonucleases & EcoRI",
    chapterId: "bio-ch-9",
    chapterTitle: "Biotechnology: Principles and Processes",
    unit: "Biotechnology",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange",
    frequency: "CBSE 2015, 2018, 2020, 2024",
    questionPrompt: "(a) What are Restriction Endonucleases and why are they called 'molecular scissors'?\n(b) Explain Palindromic Nucleotide Sequences with the specific recognition sequence of EcoRI.\n(c) What are sticky ends and how do they facilitate genetic recombination?",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 9: Biotechnology: Principles and Processes",
      page: "Pages 164–167",
      figures: "Fig 9.1"
    },
    theory: [
      "• Restriction endonucleases are bacterial defense enzymes that cut double-stranded DNA at specific recognition nucleotide sequences internally, hence called 'molecular scissors'.",
      "• Palindromic Recognition Sequence: A sequence of base pairs that reads identical on both strands when reading in the same direction of polarity (5' → 3' or 3' → 5').",
      "• EcoRI Palindrome Sequence:",
      "  5' - G A A T T C - 3'",
      "  3' - C T T A A G - 5'",
      "• Cutting Mechanism: EcoRI cuts both strands between the same two bases (G and A), slightly away from the center of the palindrome.",
      "• Sticky Ends: This asymmetrical cleavage leaves single-stranded overhanging stretches of bases called 'sticky ends'. These sticky ends facilitate hydrogen bonding with complementary sticky ends of vector DNA, enabling DNA Ligase to seal them efficiently."
    ],
    keyPointsAndKeywords: [
      "Molecular scissors cut at specific internal sites",
      "Palindromic sequence reads identical 5'→3' on both strands",
      "EcoRI cuts between G and A (5'-GAATTC-3')",
      "Sticky ends: Single-stranded overhanging sequences",
      "Hydrogen bond facilitation for DNA ligase"
    ],
    modelAnswer: {
      statement: "Restriction endonucleases recognize specific palindromic sequences and generate sticky ends that enable seamless ligation of recombinant vectors.",
      markingScheme: [
        "1 Mark: Endonuclease definition and 'molecular scissors' justification.",
        "1 Mark: Palindromic sequence definition + EcoRI sequence (5'-GAATTC-3' / 3'-CTTAAG-5').",
        "1 Mark: Sticky ends definition and role in DNA ligation."
      ],
      examinerTips: "Remember naming of EcoRI: 'E' from Escherichia (genus), 'co' from coli (species), 'R' from strain RY13, and 'I' is Roman numeral indicating the order of isolation."
    }
  },
  {
    id: "bio-core-42",
    number: 42,
    section: "core",
    title: "Competent Host: Methods of Gene Transfer (Divalent Cations, Heat Shock & Biolistics)",
    shortLabel: "Competent Host & Gene Transfer",
    chapterId: "bio-ch-9",
    chapterTitle: "Biotechnology: Principles and Processes",
    unit: "Biotechnology",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange",
    frequency: "CBSE 2016, 2018, 2021, 2023",
    questionPrompt: "Since DNA is a hydrophilic molecule, it cannot pass across hydrophobic cell membranes. Explain the methods used to make host cells 'competent' to take up recombinant DNA:\n(a) Chemical treatment & Heat shock (bacteria)\n(b) Micro-injection (animal cells)\n(c) Gene gun / Biolistics (plant cells)\n(d) Disarmed pathogen vectors",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 9: Biotechnology: Principles and Processes",
      page: "Pages 169–170"
    },
    theory: [
      "• DNA is a hydrophilic molecule and cannot cross hydrophobic lipid membranes without special treatments.",
      "• 1. Chemical Treatment & Heat Shock (for Bacteria):",
      "  – Cells are treated with a specific concentration of a divalent cation such as Calcium ($Ca^{2+}$), which increases permeability of the bacterial cell wall through membrane pores.",
      "  – Recombinant DNA is incubated with cells on ice, followed by brief Heat Shock at 42°C, and put back on ice. This forces bacteria to take up the plasmid.",
      "• 2. Micro-injection (for Animal Cells):",
      "  – Recombinant DNA is directly injected into the nucleus of an animal cell using a fine microscopic needle.",
      "• 3. Gene Gun / Biolistics (for Plant Cells):",
      "  – Cells are bombarded with high-velocity microscopic particles of Gold or Tungsten coated with DNA.",
      "• 4. Disarmed Pathogen Vectors:",
      "  – Vectors such as disarmed Agrobacterium tumefaciens (for plants) or Retroviruses (for animals) transfer rDNA into hosts without causing disease."
    ],
    keyPointsAndKeywords: [
      "Hydrophilic DNA cannot cross lipid membrane",
      "Divalent Ca²⁺ increases cell wall pore permeability",
      "Heat shock at 42°C forces plasmid uptake",
      "Micro-injection directly into nucleus (animal cells)",
      "Biolistics/gene gun using gold/tungsten particles (plants)",
      "Disarmed Agrobacterium tumefaciens"
    ],
    modelAnswer: {
      statement: "Host competency is achieved via divalent Ca²⁺ and heat shock (bacteria), microinjection (animals), biolistics (plants), or disarmed vectors.",
      markingScheme: [
        "1 Mark: Chemical treatment with Ca²⁺ + Heat shock at 42°C procedure.",
        "1 Mark: Microinjection for animal cells (direct nuclear injection).",
        "1 Mark: Biolistics/gene gun for plant cells (gold/tungsten particles) + Disarmed vectors."
      ],
      examinerTips: "Remember: Biolistics uses GOLD or TUNGSTEN microparticles because they are inert and do not react with cellular components."
    }
  },

  // ==========================================================================
  // CHAPTER 10: BIOTECHNOLOGY AND ITS APPLICATIONS
  // ==========================================================================
  {
    id: "bio-core-43",
    number: 43,
    section: "core",
    title: "Transgenic Animals: Reasons for Production & Rosie Cow",
    shortLabel: "Transgenic Animals & Rosie Cow",
    chapterId: "bio-ch-10",
    chapterTitle: "Biotechnology and its Applications",
    unit: "Biotechnology",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange",
    frequency: "CBSE 2015, 2017, 2019, 2022, 2024",
    questionPrompt: "(a) What are transgenic animals?\n(b) State any three major benefits of creating transgenic animals.\n(c) What was special about 'Rosie', the first transgenic cow produced in 1997?",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 10: Biotechnology and its Applications",
      page: "Pages 178–180"
    },
    theory: [
      "• Definition: Animals that have had their DNA manipulated to possess and express an extra (foreign) gene are known as Transgenic Animals (e.g. transgenic mice, rats, rabbits, pigs, sheep, cows). Over 95% of all existing transgenic animals are mice.",
      "• Key Benefits of Transgenic Animals:",
      "  1. Normal Physiology and Development: Study gene regulation and effects on body functions (e.g. Insulin-like growth factor).",
      "  2. Study of Disease: Serve as models for human diseases like Cancer, Cystic fibrosis, Rheumatoid arthritis, and Alzheimer's to test novel treatments.",
      "  3. Biological Products: Transgenic animals produce useful human proteins economically. E.g. Human protein alpha-1-antitrypsin used to treat Emphysema; PKU and cystic fibrosis treatments.",
      "  4. Vaccine Safety Testing: Transgenic mice are used to test the safety of vaccines (e.g. Polio vaccine) before human trials.",
      "  5. Chemical Safety Testing (Toxicity): Transgenic animals are made sensitive to toxic chemicals to obtain faster toxicity results.",
      "• Transgenic Cow 'Rosie' (1997): Produced human protein-enriched milk (2.4 grams per litre) containing the human gene for alpha-lactalbumin. The milk was nutritionally more balanced for human babies than natural cow milk."
    ],
    keyPointsAndKeywords: [
      "DNA manipulated to express foreign gene",
      "95% transgenic animals are mice",
      "Alpha-1-antitrypsin for emphysema",
      "Vaccine safety testing (Polio)",
      "Rosie cow (1997): Human alpha-lactalbumin enriched milk (2.4 g/L)"
    ],
    modelAnswer: {
      statement: "Transgenic animals are engineered to investigate physiology, model diseases, test vaccines, and produce therapeutic proteins like alpha-lactalbumin in Rosie cow.",
      markingScheme: [
        "0.5 Mark: Transgenic animal definition.",
        "1.5 Marks: Three valid applications (Disease study, Biological products like alpha-1-antitrypsin, Vaccine testing).",
        "1 Mark: Rosie cow details: human alpha-lactalbumin, 2.4 g/L, nutritionally balanced for babies."
      ],
      examinerTips: "Remember: Emphysema is treated using alpha-1-antitrypsin produced by transgenic animals."
    }
  },
  {
    id: "bio-core-44",
    number: 44,
    section: "core",
    title: "Gene Therapy: Clinical Trial for ADA Deficiency",
    shortLabel: "ADA Gene Therapy",
    chapterId: "bio-ch-10",
    chapterTitle: "Biotechnology and its Applications",
    unit: "Biotechnology",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange",
    frequency: "CBSE 2016, 2018, 2020, 2023 (Classic 3M/5M)",
    questionPrompt: "Explain the clinical protocol of Gene Therapy administered in 1990 to a 4-year-old girl with Adenosine Deaminase (ADA) deficiency. Why is this treatment not permanent, and how can a permanent cure be achieved?",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 10: Biotechnology and its Applications",
      page: "Pages 176–177"
    },
    theory: [
      "• Gene Therapy is a collection of methods that allows correction of a gene defect that has been diagnosed in a child or embryo by inserting a normal functional gene.",
      "• Cause of ADA Deficiency: Caused by deletion of the gene encoding the enzyme Adenosine Deaminase, leading to Severe Combined Immunodeficiency (SCID) where immune T- and B-cells fail to function.",
      "• Clinical Protocol in 1990 (4-year-old girl):",
      "  1. Lymphocytes from the blood of the patient are grown in a culture outside the body.",
      "  2. A functional ADA cDNA (complementary DNA) is introduced into these cultured lymphocytes using a Retroviral vector.",
      "  3. The genetically engineered lymphocytes are infused back into the patient's bloodstream.",
      "• Why not a Permanent Cure? Because lymphocytes are not immortal and have a limited lifespan. The patient requires periodic infusions of genetically engineered lymphocytes.",
      "• How to achieve a Permanent Cure: If the functional ADA gene isolated from bone marrow cells is introduced into target cells at Early Embryonic Stages, it could provide a permanent cure."
    ],
    keyPointsAndKeywords: [
      "Adenosine Deaminase deficiency causes SCID",
      "First clinical gene therapy in 1990 on 4-year-old girl",
      "Retroviral vector introduces functional ADA cDNA into lymphocytes",
      "Periodic infusions needed because lymphocytes have limited lifespan",
      "Permanent cure: Gene introduced at early embryonic stage"
    ],
    modelAnswer: {
      statement: "ADA deficiency gene therapy uses retroviral vectors to insert functional ADA cDNA into patient lymphocytes, requiring lifelong infusions unless performed embryonically.",
      markingScheme: [
        "1 Mark: ADA deficiency cause (gene deletion leading to SCID).",
        "1 Mark: Gene therapy procedure (lymphocyte culture → retroviral ADA cDNA insertion → patient re-infusion).",
        "1 Mark: Reason why non-permanent (finite lifespan of lymphocytes) vs permanent cure (early embryonic gene introduction)."
      ],
      examinerTips: "Other temporary treatments for ADA deficiency include Bone Marrow Transplantation and Enzyme Replacement Therapy (ERT injections), but gene therapy is the modern molecular approach."
    }
  }
];

// ============================================================================
// SECTION 2: "Big Orange: Page-Referenced & Core Diagrams"
// (Category: "Big Orange (NCERT Page-Referenced)")
// All 43 distinct items requested with specific NCERT page references & diagrams.
// ============================================================================

export const BIG_ORANGE_PAGE_QUESTIONS = [
  {
    id: "bio-page-1",
    number: 45,
    section: "page",
    title: "Embryo Sac (7-Celled, 8-Nucleate Organization) — Diagram Pg 10",
    shortLabel: "Embryo Sac (Pg 10)",
    chapterId: "bio-ch-1",
    chapterTitle: "Sexual Reproduction in Flowering Plants",
    unit: "Reproduction",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange (NCERT Page-Referenced)",
    frequency: "Exact NCERT Diagram Pg 10 (Asked in 2016, 2018, 2021, 2023)",
    diagramId: "embryo-sac",
    questionPrompt: "Draw a neat, labelled diagram of a mature female gametophyte (embryo sac) of an angiosperm as illustrated on NCERT Page 10. Label: Antipodals, Polar nuclei, Central cell, Egg cell, Synergids, and Filiform apparatus. Explain why it is 7-celled but 8-nucleate.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 1: Sexual Reproduction in Flowering Plants",
      page: "Page 10",
      figures: "Fig 1.8(d)"
    },
    theory: [
      "• The female gametophyte develops from a single functional megaspore via 3 successive free-nuclear mitotic divisions (Monosporic development).",
      "• 8 nuclei distribute as follows:",
      "  – 3 at Chalazal end: Organize into 3 Antipodal cells.",
      "  – 3 at Micropylar end: Organize into Egg apparatus (1 central Egg cell + 2 Synergids with filiform apparatus).",
      "  – 2 Polar nuclei move to the centre and reside within the single large Central Cell.",
      "• Hence, mature embryo sac has 7 cells (3 antipodals + 1 central cell + 1 egg cell + 2 synergids) containing 8 nuclei."
    ],
    keyPointsAndKeywords: [
      "7 cells and 8 nuclei",
      "Chalazal pole: 3 Antipodals",
      "Central cell: 2 Polar nuclei",
      "Micropylar pole: 1 Egg cell + 2 Synergids",
      "Filiform apparatus guides pollen tube"
    ],
    modelAnswer: {
      statement: "The mature angiosperm embryo sac is a 7-celled, 8-nucleate structure with chalazal antipodals, a bi-nucleate central cell, and a micropylar egg apparatus.",
      markingScheme: [
        "2 Marks: Neat, clear diagram with all 6 required labels.",
        "1 Mark: Explanation of 7-celled vs 8-nucleate condition (two polar nuclei share the central cell)."
      ],
      examinerTips: "Remember: Never label 8 cells! It is strictly 7-celled because the central cell encloses both polar nuclei."
    }
  },
  {
    id: "bio-page-2",
    number: 46,
    section: "page",
    title: "Megasporangium (Anatropous Ovule) — Diagram Pg 9",
    shortLabel: "Megasporangium / Ovule",
    chapterId: "bio-ch-1",
    chapterTitle: "Sexual Reproduction in Flowering Plants",
    unit: "Reproduction",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange (NCERT Page-Referenced)",
    frequency: "NCERT Fig 1.7(d) Pg 9 (CBSE 2017, 2019, 2022)",
    diagramId: "megasporangium",
    questionPrompt: "Draw a labelled diagram of a typical anatropous ovule (megasporangium). Label Funicle, Hilum, Micropyle, Outer integument, Inner integument, Nucellus, Embryo sac, and Chalaza.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 1: Sexual Reproduction in Flowering Plants",
      page: "Page 9",
      figures: "Fig 1.7(d)"
    },
    theory: [
      "• Funicle: Stalk attaching the ovule to the placenta.",
      "• Hilum: Junction point where the body of the ovule fuses with the funicle.",
      "• Integuments: One or two protective envelopes surrounding the nucellus.",
      "• Micropyle: Small opening at the apex where integuments do not cover the nucellus.",
      "• Chalaza: Basal swollen region opposite the micropyle representing the origin of integuments.",
      "• Nucellus: Central mass of parenchymatous nutritive cells (2n).",
      "• Embryo sac: Female gametophyte located inside the nucellus."
    ],
    keyPointsAndKeywords: [
      "Funicle attaches ovule to placenta",
      "Hilum is junction point",
      "Micropyle pore opposite Chalaza base",
      "Nucellus contains food reserves"
    ],
    modelAnswer: {
      statement: "An anatropous ovule is inverted such that the micropyle lies close to the funicle, with chalaza at the opposite basal end.",
      markingScheme: [
        "1.5 Marks: Accurate curved anatropous ovule drawing.",
        "1.5 Marks: Correct labelling of all 8 anatomical components."
      ],
      examinerTips: "Ensure the micropyle points downwards near the funicle stalk to depict a true anatropous ovule."
    }
  },
  {
    id: "bio-page-3",
    number: 47,
    section: "page",
    title: "Fertilisation & Triple Fusion in Angiosperms",
    shortLabel: "Fertilisation & Triple Fusion",
    chapterId: "bio-ch-1",
    chapterTitle: "Sexual Reproduction in Flowering Plants",
    unit: "Reproduction",
    marks: "2 Marks",
    marksNum: 2,
    category: "Big Orange (NCERT Page-Referenced)",
    frequency: "CBSE 2018, 2020, 2023",
    questionPrompt: "What is Triple Fusion? Where does it occur in the ovule? Name the nuclei involved and the ploidy of the resulting product.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 1: Sexual Reproduction in Flowering Plants",
      page: "Page 16"
    },
    theory: [
      "• Triple fusion is the fusion of the second haploid male gamete (n) with the two haploid polar nuclei (n+n) in the central cell of the embryo sac.",
      "• Since three haploid nuclei fuse together, it is termed Triple Fusion.",
      "• Product: Triploid Primary Endosperm Nucleus (PEN, 3n), which divides mitotically to form the nutritive Endosperm tissue."
    ],
    keyPointsAndKeywords: [
      "Male gamete (n) + 2 Polar nuclei (n+n)",
      "Occurs in the central cell",
      "Product is triploid PEN (3n)",
      "Develops into nutritive endosperm"
    ],
    modelAnswer: {
      statement: "Triple fusion is the vegetative fusion of a male gamete (n) with two polar nuclei (2n) inside the central cell yielding the triploid PEN (3n).",
      markingScheme: [
        "1 Mark: Three nuclei involved (1 male gamete + 2 polar nuclei) and site (central cell).",
        "1 Mark: Product identity (Primary Endosperm Nucleus / PEN) and triploid (3n) ploidy."
      ],
      examinerTips: "Triple fusion precedes embryo development to ensure food reserves (endosperm) are available for the developing embryo."
    }
  },
  {
    id: "bio-page-4",
    number: 48,
    section: "page",
    title: "Perisperm: Definition, Significance & Examples",
    shortLabel: "Perisperm Definition & Examples",
    chapterId: "bio-ch-1",
    chapterTitle: "Sexual Reproduction in Flowering Plants",
    unit: "Reproduction",
    marks: "2 Marks",
    marksNum: 2,
    category: "Big Orange (NCERT Page-Referenced)",
    frequency: "CBSE 2017, 2019, 2022 (Classic 1M/2M)",
    questionPrompt: "What is perisperm? How does it differ from endosperm? Give two examples of seeds possessing perisperm.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 1: Sexual Reproduction in Flowering Plants",
      page: "Page 18"
    },
    theory: [
      "• Definition: Perisperm is the persistent, residual nucellus that remains intact in certain mature seeds.",
      "• Difference from Endosperm: Endosperm is triploid (3n) formed by triple fusion, whereas perisperm is diploid (2n) maternal nutritive tissue originating from the nucellus.",
      "• Examples: Black pepper (Piper nigrum) and Beet (Beta vulgaris)."
    ],
    keyPointsAndKeywords: [
      "Persistent residual nucellus",
      "Diploid (2n) maternal origin",
      "Examples: Black pepper and Beet",
      "Differs from triploid (3n) endosperm"
    ],
    modelAnswer: {
      statement: "Perisperm represents persistent diploid nucellar tissue in mature seeds of black pepper and beet.",
      markingScheme: [
        "1 Mark: Definition (persistent residual nucellus in seed).",
        "1 Mark: Two correct examples: Black pepper and Beet."
      ],
      examinerTips: "Do not confuse Perisperm (persistent nucellus, 2n) with Pericarp (fruit wall derived from ovary wall, 2n)."
    }
  },
  {
    id: "bio-page-5",
    number: 49,
    section: "page",
    title: "Microspore / Developing Pollen Grains — Pg 7",
    shortLabel: "Microsporogenesis (Pg 7)",
    chapterId: "bio-ch-1",
    chapterTitle: "Sexual Reproduction in Flowering Plants",
    unit: "Reproduction",
    marks: "2 Marks",
    marksNum: 2,
    category: "Big Orange (NCERT Page-Referenced)",
    frequency: "NCERT Pg 7 (CBSE 2018, 2021)",
    diagramId: "pollen-grain",
    questionPrompt: "Explain microsporogenesis. How does a single microspore mother cell (PMC) develop into four functional pollen grains?",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 1: Sexual Reproduction in Flowering Plants",
      page: "Page 7"
    },
    theory: [
      "• Microsporogenesis is the process of formation of haploid microspores from a diploid Pollen Mother Cell (PMC) through meiosis.",
      "• As the anther develops, each diploid sporogenous cell (PMC, 2n) undergoes meiosis to produce a cluster of four haploid cells arranged as a Microspore Tetrad (n).",
      "• As anthers mature and dehydrate, microspores dissociate from each other and develop into pollen grains.",
      "• Note: Unlike female megasporogenesis where 3 out of 4 megaspores degenerate, in microsporogenesis all 4 microspores develop into functional pollen grains."
    ],
    keyPointsAndKeywords: [
      "PMC (2n) undergoes meiosis",
      "Microspore tetrad (n)",
      "All 4 microspores develop into functional pollen",
      "Anther dehydration separates tetrad"
    ],
    modelAnswer: {
      statement: "Microsporogenesis involves meiotic reduction of a diploid PMC into a tetrad of four haploid, viable pollen grains.",
      markingScheme: [
        "1 Mark: Definition of microsporogenesis + meiotic division of PMC (2n).",
        "1 Mark: Dissociation of microspore tetrad into 4 functional pollen grains."
      ],
      examinerTips: "Remember: 1 PMC gives 4 functional pollen grains. If an anther has 100 PMCs, it produces 400 pollen grains."
    }
  },
  {
    id: "bio-page-6",
    number: 50,
    section: "page",
    title: "Apocarpous vs Syncarpous Pistil",
    shortLabel: "Apocarpous vs Syncarpous",
    chapterId: "bio-ch-1",
    chapterTitle: "Sexual Reproduction in Flowering Plants",
    unit: "Reproduction",
    marks: "2 Marks",
    marksNum: 2,
    category: "Big Orange (NCERT Page-Referenced)",
    frequency: "NCERT Pg 8 Fig 1.7 (CBSE 2016, 2019, 2023)",
    questionPrompt: "Differentiate between an apocarpous pistil and a syncarpous pistil with one example of each.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 1: Sexual Reproduction in Flowering Plants",
      page: "Page 8",
      figures: "Fig 1.7(a) & (b)"
    },
    theory: [
      "• Apocarpous Pistil: A multicarpellary gynoecium in which the carpels are completely free from each other.",
      "  – Example: Michelia (Champa), Rose, Lotus.",
      "• Syncarpous Pistil: A multicarpellary gynoecium in which the carpels are fused together into a single unit.",
      "  – Example: Papaver (Opium poppy), Hibiscus (China rose), Tomato."
    ],
    keyPointsAndKeywords: [
      "Apocarpous: Carpels are free (Michelia)",
      "Syncarpous: Carpels are fused (Papaver)",
      "Multicarpellary condition"
    ],
    modelAnswer: {
      statement: "Multicarpellary gynoecia are either apocarpous (free carpels as in Michelia) or syncarpous (fused carpels as in Papaver).",
      markingScheme: [
        "1 Mark: Apocarpous definition (free carpels) + example (Michelia).",
        "1 Mark: Syncarpous definition (fused carpels) + example (Papaver)."
      ],
      examinerTips: "NCERT Figure 1.7 clearly illustrates: Fig 1.7(a) multicarpellary syncarpous pistil of Papaver; Fig 1.7(b) multicarpellary apocarpous gynoecium of Michelia."
    }
  },
  {
    id: "bio-page-7",
    number: 51,
    section: "page",
    title: "Blastocyst (2 Marks) — Implantation & Layers",
    shortLabel: "Blastocyst Implantation (2M)",
    chapterId: "bio-ch-2",
    chapterTitle: "Human Reproduction",
    unit: "Reproduction",
    marks: "2 Marks",
    marksNum: 2,
    category: "Big Orange (NCERT Page-Referenced)",
    frequency: "Explicitly requested: Blastocyst (2 marks) - Implantation - outer layer and inside it",
    diagramId: "blastocyst",
    questionPrompt: "Describe the structural organization of a blastocyst and explain how its outer layer and inner cellular mass participate in implantation.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 2: Human Reproduction",
      page: "Pages 36–37",
      figures: "Fig 2.11(e)"
    },
    theory: [
      "• Outer Layer (Trophoblast): An outer single layer of cells that attaches directly to the uterine endometrium during implantation. Gives rise to chorionic villi that interdigitate with uterine tissue to form the placenta.",
      "• Inside (Inner Cell Mass / ICM): A cluster of cells attached to the inner side of the trophoblast at the embryonic pole. Contains pluripotent stem cells that differentiate to form all tissues and organs of the embryo proper (Ectoderm, Mesoderm, Endoderm).",
      "• Implantation: Uterine cells divide rapidly and cover the blastocyst, completely embedding it in the endometrium (Day 7 post-fertilisation)."
    ],
    keyPointsAndKeywords: [
      "Trophoblast: Outer layer, attaches to endometrium, forms placenta",
      "Inner Cell Mass (ICM): Pluripotent stem cells, forms embryo proper",
      "Implantation embeds blastocyst into uterine wall"
    ],
    modelAnswer: {
      statement: "The blastocyst consists of outer trophoblast (attaches to endometrium, placenta) and inner cell mass (embryo proper).",
      markingScheme: [
        "1 Mark: Trophoblast function in attaching to endometrium.",
        "1 Mark: Inner cell mass differentiation into embryonic germ layers + implantation definition."
      ],
      examinerTips: "Trophoblast forms extra-embryonic membranes (placenta), NOT the embryo itself. The embryo is formed strictly from the ICM."
    }
  },
  {
    id: "bio-page-8",
    number: 52,
    section: "page",
    title: "Coleoptile vs Coleorhiza — Differentiate Pg 19",
    shortLabel: "Coleoptile vs Coleorhiza (Pg 19)",
    chapterId: "bio-ch-1",
    chapterTitle: "Sexual Reproduction in Flowering Plants",
    unit: "Reproduction",
    marks: "2 Marks",
    marksNum: 2,
    category: "Big Orange (NCERT Page-Referenced)",
    frequency: "Exact NCERT Pg 19 query (CBSE 2017, 2020, 2023)",
    diagramId: "monocot-embryo",
    questionPrompt: "Differentiate between Coleoptile and Coleorhiza found in a monocotyledonous embryo on the basis of location, structure, and protective function.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 1: Sexual Reproduction in Flowering Plants",
      page: "Page 19",
      figures: "Fig 1.14(b)"
    },
    theory: [
      "• Coleoptile: A hollow foliar protective sheath that encloses the epicotyl, shoot apex, and leaf primordia. Located at the terminal end. Pierces through the soil and turns green during germination.",
      "• Coleorhiza: An undifferentiated protective sheath that encloses the hypocotyl, radicle, and root cap. Located at the basal end. Remains underground and does not turn green.",
      "• Key Mnemonic: ColeopTILE protects the plumule/TIp; ColeoRHIZA protects the RHIZome/radicle (root)."
    ],
    keyPointsAndKeywords: [
      "Coleoptile: Foliar sheath protecting plumule / shoot apex",
      "Coleorhiza: Undifferentiated sheath protecting radicle / root cap",
      "Coleoptile emerges above ground; Coleorhiza remains below"
    ],
    modelAnswer: {
      statement: "Coleoptile is a foliar sheath protecting the plumule, while Coleorhiza is an undifferentiated sheath protecting the radicle in monocot embryos.",
      markingScheme: [
        "1 Mark: Coleoptile (location at epicotyl, protects plumule/shoot apex).",
        "1 Mark: Coleorhiza (location at hypocotyl, protects radicle/root cap)."
      ],
      examinerTips: "Coleoptile is phototropic and turns green; coleorhiza never turns green and breaks open during root emergence."
    }
  },
  {
    id: "bio-page-9",
    number: 53,
    section: "page",
    title: "Placenta: Structure & Endocrine Functions — Pg 37",
    shortLabel: "Placenta Structure & Hormones",
    chapterId: "bio-ch-2",
    chapterTitle: "Human Reproduction",
    unit: "Reproduction",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange (NCERT Page-Referenced)",
    frequency: "NCERT Pg 37 (CBSE 2016, 2018, 2021, 2024)",
    diagramId: "placenta-fetus",
    questionPrompt: "(a) What is placenta? How is it formed?\n(b) Explain the physiological transport functions of placenta.\n(c) Name the hormones secreted exclusively during pregnancy by the placenta.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 2: Human Reproduction",
      page: "Page 37",
      figures: "Fig 2.12"
    },
    theory: [
      "• Formation: Chorionic villi of the trophoblast interdigitate with the uterine endometrium to form a structural and functional unit between the developing embryo and maternal body, termed the Placenta.",
      "• Transport Functions: Facilitates supply of oxygen ($O_2$) and nutrients to the embryo; removes carbon dioxide ($CO_2$) and nitrogenous excretory wastes produced by the foetus. Connected to foetus via the Umbilical Cord.",
      "• Endocrine Functions (Placental Hormones):",
      "  – Secretes human Chorionic Gonadotropin (hCG), human Placental Lactogen (hPL), Estrogens, and Progesterone.",
      "  – Note: hCG, hPL, and Relaxin (secreted by ovary in late pregnancy) are produced in women ONLY during pregnancy. Detection of hCG in urine is the basis of pregnancy test strips (Gravindex)."
    ],
    keyPointsAndKeywords: [
      "Chorionic villi + uterine tissue interdigitation",
      "Transport of O₂, nutrients and removal of CO₂, waste",
      "Umbilical cord connection",
      "Hormones: hCG, hPL, estrogens, progesterone, relaxin",
      "hCG and hPL produced ONLY during pregnancy"
    ],
    modelAnswer: {
      statement: "Placenta connects foetus and maternal tissue for metabolic exchange and functions as an endocrine organ secreting hCG, hPL, estrogens, and progesterone.",
      markingScheme: [
        "1 Mark: Structural formation (chorionic villi interdigitating with uterine tissue).",
        "1 Mark: Transport role (O₂/nutrient uptake and CO₂/waste clearance via umbilical cord).",
        "1 Mark: Endocrine role with exclusive pregnancy hormones (hCG, hPL, relaxin)."
      ],
      examinerTips: "Remember: hCG, hPL, and relaxin are secreted ONLY during pregnancy in human females."
    }
  },
  {
    id: "bio-page-10",
    number: 54,
    section: "page",
    title: "Amniocentesis: Principle, Misuse & Statutory Ban — Pg 42",
    shortLabel: "Amniocentesis & Ban (Pg 42)",
    chapterId: "bio-ch-3",
    chapterTitle: "Reproductive Health",
    unit: "Reproduction",
    marks: "2 Marks",
    marksNum: 2,
    category: "Big Orange (NCERT Page-Referenced)",
    frequency: "NCERT Pg 42 (CBSE 2017, 2019, 2022)",
    questionPrompt: "What is amniocentesis? Why is there a statutory ban on its use in India despite its diagnostic utility?",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 3: Reproductive Health",
      page: "Page 42"
    },
    theory: [
      "• Amniocentesis is a foetal sex and disorder determination test based on the chromosomal pattern (karyotyping) of cells collected from the amniotic fluid surrounding the developing embryo.",
      "• Legitimate Diagnostic Utility: Used to detect genetic and chromosomal abnormalities such as Down's syndrome, Haemophilia, and Sickle-cell anaemia in the foetus, and to assess foetal maturity.",
      "• Reason for Statutory Ban: It was being widely misused for pre-natal sex determination leading to female foeticide of female foetuses, causing an alarming decline in the child sex ratio in India. Hence, a strict legal ban was imposed."
    ],
    keyPointsAndKeywords: [
      "Sampling amniotic fluid containing foetal cells",
      "Karyotyping detects genetic/chromosomal disorders (Down's)",
      "Misuse for pre-natal sex determination",
      "Statutory ban to prevent female foeticide"
    ],
    modelAnswer: {
      statement: "Amniocentesis analyzes foetal amniotic cells for genetic defects; banned legally to prevent prenatal sex selection and female foeticide.",
      markingScheme: [
        "1 Mark: Principle of amniocentesis (amniotic fluid karyotyping for chromosomal defects).",
        "1 Mark: Justification for statutory ban (misuse for female foeticide)."
      ],
      examinerTips: "Emphasize that the technique itself is medically valuable for genetic screening, but the statutory ban strictly penalizes its use for sex determination."
    }
  },
  {
    id: "bio-page-11",
    number: 55,
    section: "page",
    title: "Monohybrid & Dihybrid Crosses — Punnett Squares Pg 57",
    shortLabel: "Monohybrid & Dihybrid Crosses",
    chapterId: "bio-ch-4",
    chapterTitle: "Principles of Inheritance and Variation",
    unit: "Genetics and Evolution",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange (NCERT Page-Referenced)",
    frequency: "NCERT Pg 57 & Pg 61 (CBSE 2016, 2019, 2023)",
    questionPrompt: "Using Punnett squares, demonstrate:\n(a) Monohybrid cross between Tall (TT) and Dwarf (tt) pea plants (F₁ and F₂ phenotypic and genotypic ratios).\n(b) Dihybrid cross phenotypic ratio for Round Yellow (RRYY) × Wrinkled Green (rryy).",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 4: Principles of Inheritance and Variation",
      page: "Pages 57–62",
      figures: "Fig 4.2 & Fig 4.7"
    },
    theory: [
      "• Monohybrid Cross (Height):",
      "  – Parents: Tall (TT) × Dwarf (tt) → Gametes: T and t.",
      "  – F₁ Generation: All Tt (Heterozygous Tall).",
      "  – F₂ Generation (Selfing Tt × Tt): Gametes T, t.",
      "  – Punnett Square: TT (Tall), Tt (Tall), Tt (Tall), tt (Dwarf).",
      "  – Phenotypic Ratio = 3 Tall : 1 Dwarf (3:1).",
      "  – Genotypic Ratio = 1 TT : 2 Tt : 1 tt (1:2:1).",
      "• Dihybrid Cross (Seed Shape and Colour):",
      "  – Parents: Round Yellow (RRYY) × Wrinkled Green (rryy) → F₁ RrYy (Round Yellow).",
      "  – F₂ Phenotypic Ratio = 9 Round Yellow : 3 Round Green : 3 Wrinkled Yellow : 1 Wrinkled Green (9:3:3:1)."
    ],
    keyPointsAndKeywords: [
      "Monohybrid F₂: 3:1 phenotypic, 1:2:1 genotypic",
      "Dihybrid F₂: 9:3:3:1 phenotypic",
      "Punnett square invented by Reginald C. Punnett",
      "Selfing of F₁ hybrids"
    ],
    modelAnswer: {
      statement: "Punnett squares illustrate allele segregation: monohybrid yields 3:1 (1:2:1 genotypic) and dihybrid yields 9:3:3:1 ratio.",
      markingScheme: [
        "1.5 Marks: Monohybrid cross Punnett square + 3:1 phenotypic and 1:2:1 genotypic ratios.",
        "1.5 Marks: Dihybrid cross F₂ phenotypic ratio breakdown (9:3:3:1)."
      ],
      examinerTips: "In dihybrid crosses, two new non-parental recombinant combinations appear: Round Green (3) and Wrinkled Yellow (3)."
    }
  },
  {
    id: "bio-page-12",
    number: 56,
    section: "page",
    title: "Bird Gender Determination: ZZ-ZW Mechanism",
    shortLabel: "Bird Sex Determination (ZZ-ZW)",
    chapterId: "bio-ch-4",
    chapterTitle: "Principles of Inheritance and Variation",
    unit: "Genetics and Evolution",
    marks: "2 Marks",
    marksNum: 2,
    category: "Big Orange (NCERT Page-Referenced)",
    frequency: "NCERT Pg 69 Fig 4.12(b) (CBSE 2017, 2020, 2023)",
    questionPrompt: "Explain the mechanism of sex determination in birds. Why is female heterogamety observed in birds unlike human male heterogamety?",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 4: Principles of Inheritance and Variation",
      page: "Page 69",
      figures: "Fig 4.12(b)"
    },
    theory: [
      "• In birds, sex determination follows the ZZ-ZW mechanism:",
      "• Males (Homogametic): Possess two identical Z chromosomes (ZZ). Produce only one type of sperm carrying Z chromosome.",
      "• Females (Heterogametic): Possess two different sex chromosomes, one Z and one W (ZW). Produce two different types of eggs: 50% carrying Z chromosome and 50% carrying W chromosome.",
      "• Sex Determination: It is the female egg that determines the sex of the offspring. If a Z-sperm fertilises a Z-egg → ZZ Male. If a Z-sperm fertilises a W-egg → ZW Female."
    ],
    keyPointsAndKeywords: [
      "ZZ-ZW mechanism",
      "Female heterogamety (ZW females)",
      "Male homogamety (ZZ males)",
      "Maternal egg determines sex of chick"
    ],
    modelAnswer: {
      statement: "Birds exhibit female heterogamety (ZW female, ZZ male) where maternal ova decide offspring gender.",
      markingScheme: [
        "1 Mark: Female heterogamety (ZW) vs Male homogamety (ZZ) genotype.",
        "1 Mark: Cross showing Z-sperm + Z-egg = Male (ZZ) and Z-sperm + W-egg = Female (ZW)."
      ],
      examinerTips: "Remember contrast: Humans = Male heterogamety (XY); Birds = Female heterogamety (ZW)."
    }
  },
  {
    id: "bio-page-13",
    number: 57,
    section: "page",
    title: "Aneuploidy vs Polyploidy",
    shortLabel: "Aneuploidy vs Polyploidy",
    chapterId: "bio-ch-4",
    chapterTitle: "Principles of Inheritance and Variation",
    unit: "Genetics and Evolution",
    marks: "2 Marks",
    marksNum: 2,
    category: "Big Orange (NCERT Page-Referenced)",
    frequency: "NCERT Pg 75 (CBSE 2018, 2022)",
    questionPrompt: "Differentiate between Aneuploidy and Polyploidy based on cytological mechanism, chromosome number changes, and biological occurrence.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 4: Principles of Inheritance and Variation",
      page: "Page 75"
    },
    theory: [
      "• Aneuploidy: Failure of segregation of chromatids during cell division cycle results in the gain or loss of one or few chromosomes ($2n \pm 1$ or $2n \pm 2$).",
      "  – Examples: Down's syndrome ($2n+1=47$), Turner's syndrome ($2n-1=45$). Common in animals and humans.",
      "• Polyploidy: Failure of cytokinesis after telophase stage of cell division results in an increase in a whole set of chromosomes ($3n, 4n$, etc.).",
      "  – Example: Common in plants (wheat, cotton) leading to increased vigour and fruit size, but rare in animals."
    ],
    keyPointsAndKeywords: [
      "Aneuploidy: Non-disjunction of chromatids (gain/loss of individual chromosomes, 2n±1)",
      "Polyploidy: Failure of cytokinesis (gain of whole chromosome sets, 3n/4n)",
      "Polyploidy is widespread in plants"
    ],
    modelAnswer: {
      statement: "Aneuploidy alters individual chromosome counts via non-disjunction, whereas Polyploidy multiplies entire chromosomal genomes via failed cytokinesis.",
      markingScheme: [
        "1 Mark: Aneuploidy cause (chromatid non-disjunction) + example ($2n \pm 1$, Down's syndrome).",
        "1 Mark: Polyploidy cause (cytokinesis failure) + occurrence in plants ($3n, 4n$)."
      ],
      examinerTips: "Always tie the cytological mechanism to the definition: Aneuploidy = chromatid segregation failure; Polyploidy = cytokinesis failure."
    }
  },
  {
    id: "bio-page-14",
    number: 58,
    section: "page",
    title: "DNA vs RNA Chemical Stability — Pg 86",
    shortLabel: "DNA vs RNA Stability (Pg 86)",
    chapterId: "bio-ch-5",
    chapterTitle: "Molecular Basis of Inheritance",
    unit: "Genetics and Evolution",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange (NCERT Page-Referenced)",
    frequency: "NCERT Pg 86 (CBSE 2016, 2019, 2022, 2024)",
    questionPrompt: "Why is DNA chemically and structurally more stable than RNA as genetic material? Give three specific biochemical reasons.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 5: Molecular Basis of Inheritance",
      page: "Page 86"
    },
    theory: [
      "• 1. 2'-OH Group: RNA has a reactive $2'-OH$ (hydroxyl) group present at every nucleotide in ribose sugar. This makes RNA chemically labile, reactive, and easily degradable. DNA has deoxyribose ($2'-H$), lacking this reactive group, making it much more chemically stable.",
      "• 2. Thymine vs Uracil: DNA contains Thymine (5-methyl uracil) instead of Uracil in RNA. Presence of methyl group in thymine confers additional chemical stability against photochemical mutations.",
      "• 3. Double-Stranded Nature: DNA is double-stranded with complementary base pairing and stacking interactions, resisting denaturation and possessing repair mechanisms. RNA is single-stranded and acts as a catalytic enzyme (ribozyme), making it reactive.",
      "• Conclusion: DNA is better suited for long-term storage of genetic information, while RNA is suited for transmission."
    ],
    keyPointsAndKeywords: [
      "2'-OH group makes RNA labile and catalytic",
      "Deoxyribose lacks 2'-OH group (chemically inert)",
      "Thymine (5-methyl uracil) provides extra stability",
      "Double strands resist denaturation"
    ],
    modelAnswer: {
      statement: "DNA is superior for information storage due to deoxyribose lacking the reactive 2'-OH group, thymine presence, and double-helical base stacking.",
      markingScheme: [
        "1 Mark: Absence of 2'-OH group in DNA vs presence in RNA.",
        "1 Mark: Thymine (5-methyl uracil) in DNA conferring chemical stability.",
        "1 Mark: Double-stranded complementary structure vs single-stranded catalytic RNA."
      ],
      examinerTips: "Remember: RNA can act as a catalyst (ribozyme) because of its reactive 2'-OH group; catalysts are inherently reactive and unstable."
    }
  },
  {
    id: "bio-page-15",
    number: 59,
    section: "page",
    title: "Transcription in Prokaryotes — Initiation, Elongation & Termination (Pg 86-90)",
    shortLabel: "Prokaryotic Transcription",
    chapterId: "bio-ch-5",
    chapterTitle: "Molecular Basis of Inheritance",
    unit: "Genetics and Evolution",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange (NCERT Page-Referenced)",
    frequency: "NCERT Pg 90 Fig 5.10 (CBSE 2017, 2020, 2023)",
    questionPrompt: "Describe transcription in bacteria. Explain the three steps (Initiation, Elongation, Termination) and the role of Sigma (σ) factor, Rho (ρ) factor, and single RNA polymerase. Why can transcription and translation be coupled in bacteria?",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 5: Molecular Basis of Inheritance",
      page: "Pages 90–91",
      figures: "Fig 5.10"
    },
    theory: [
      "• In bacteria, a single DNA-dependent RNA polymerase catalyses transcription of all three types of RNA (mRNA, tRNA, rRNA).",
      "• 1. Initiation: RNA polymerase binds to promoter sequence of DNA with the transient association of Sigma (σ) initiation factor.",
      "• 2. Elongation: RNA polymerase moves along DNA template strand (3' → 5'), polymerising ribonucleotides in 5' → 3' direction. Only a short stretch of RNA remains bound to enzyme.",
      "• 3. Termination: When RNA polymerase reaches the terminator region, it associates with Rho (ρ) termination factor, causing nascent RNA and enzyme to detach.",
      "• Coupled Transcription-Translation: In bacteria, mRNA does not require post-transcriptional processing and there is no nuclear envelope separating cytosol from chromosome. Hence, translation can begin before mRNA is fully transcribed (coupled)."
    ],
    keyPointsAndKeywords: [
      "Single RNA polymerase transcribes all RNAs",
      "Initiation requires Sigma (σ) factor",
      "Termination requires Rho (ρ) factor",
      "No nuclear membrane allows coupled transcription-translation"
    ],
    modelAnswer: {
      statement: "Bacterial transcription proceeds via a single RNA polymerase with σ-mediated initiation and ρ-mediated termination, coupled directly to translation.",
      markingScheme: [
        "1 Mark: Three steps (Initiation, Elongation, Termination).",
        "1 Mark: Specific roles of Sigma (σ) and Rho (ρ) factors.",
        "1 Mark: Explanation of coupled transcription and translation in prokaryotes."
      ],
      examinerTips: "Remember: RNA polymerase core enzyme alone can only perform elongation; it needs σ factor for initiation and ρ factor for termination."
    }
  },
  {
    id: "bio-page-16",
    number: 60,
    section: "page",
    title: "Human Genome Project (HGP): 6 Salient Features — Pg 106",
    shortLabel: "HGP 6 Salient Features (Pg 106)",
    chapterId: "bio-ch-5",
    chapterTitle: "Molecular Basis of Inheritance",
    unit: "Genetics and Evolution",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange (NCERT Page-Referenced)",
    frequency: "Explicitly requested: 'Pg-106-6steps' (CBSE 2016, 2019, 2022, 2024)",
    questionPrompt: "State any six salient features of the human genome as determined by the Human Genome Project (NCERT Page 106).",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 5: Molecular Basis of Inheritance",
      page: "Page 106"
    },
    theory: [
      "• 1. Total Base Pairs: The human genome contains 3164.7 million (3.164 billion) nucleotide base pairs.",
      "• 2. Average Gene Size: The average gene consists of 3000 bases. The largest known human gene is Dystrophin with 2.4 million bases.",
      "• 3. Estimated Gene Count: Total number of genes is estimated at 30,000 (much lower than earlier estimates of 80,000–140,000). Almost 99.9% of nucleotide bases are exactly the same in all humans.",
      "• 4. Unknown Gene Functions: Functions are unknown for over 50% of the discovered genes.",
      "• 5. Coding Sequences: Less than 2% of the human genome codes for proteins.",
      "• 6. Repetitive Sequences & Chromosome Extremes: Repeated sequences make up very large portion of the genome. Chromosome 1 has the most genes (2968), and the Y chromosome has the fewest (231)."
    ],
    keyPointsAndKeywords: [
      "3.164 billion nucleotide base pairs",
      "Average gene = 3000 bases; Largest gene = Dystrophin (2.4 Mb)",
      "30,000 total genes; 99.9% identical in all humans",
      "Less than 2% genome encodes proteins",
      "Chromosome 1 has 2968 genes; Y has 231 genes",
      "Single Nucleotide Polymorphisms (SNPs at 1.4 million locations)"
    ],
    modelAnswer: {
      statement: "The Human Genome Project mapped 3.164 billion bp and ~30,000 genes, revealing that <2% encodes proteins and 99.9% is identical across humans.",
      markingScheme: [
        "3 Marks: 0.5 mark for each of the 6 salient features accurately stated with quantitative values."
      ],
      examinerTips: "Memorize the numbers: 3164.7 million bp, 30,000 genes, <2% coding, Chromosome 1 = 2968 genes, Chromosome Y = 231 genes."
    }
  },
  {
    id: "bio-page-17",
    number: 61,
    section: "page",
    title: "Miller-Urey Spark Discharge Experiment — Diagram Pg 117",
    shortLabel: "Miller-Urey Experiment (Pg 117)",
    chapterId: "bio-ch-6",
    chapterTitle: "Evolution",
    unit: "Genetics and Evolution",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange (NCERT Page-Referenced)",
    frequency: "NCERT Fig 6.1 Pg 117 (CBSE 2015, 2018, 2021, 2024)",
    diagramId: "miller-urey",
    questionPrompt: "Draw a labelled schematic diagram of S.L. Miller's spark-discharge experiment (1953) as given on NCERT Page 117. Mention the gases used, temperature, energy source, and the biochemical products obtained.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 6: Evolution",
      page: "Page 117",
      figures: "Fig 6.1"
    },
    theory: [
      "• Objective: Provide experimental validation for Oparin-Haldane chemical evolution hypothesis (abiogenesis).",
      "• Experimental Setup:",
      "  – Closed glass apparatus simulating primitive reducing Earth atmosphere.",
      "  – Gas Mixture: Methane ($CH_4$), Ammonia ($NH_3$), Hydrogen ($H_2$), and Water vapor ($H_2O$) in ratio 2:1:2.",
      "  – Energy Source: High-voltage electric spark discharge created across tungsten electrodes at 800°C (simulating lightning).",
      "  – Boiling flask continuously supplied steam; condenser cooled circulating gases into liquid collected in a U-trap.",
      "• Results: After one week, chemical analysis revealed formation of simple amino acids: Glycine, Alanine, and Aspartic acid, along with sugars, nitrogenous bases, and pigments."
    ],
    keyPointsAndKeywords: [
      "Gases: CH₄, NH₃, H₂O, H₂",
      "Temperature: 800°C electric spark",
      "Condenser and boiling flask setup",
      "Amino acids formed: Glycine, Alanine, Aspartic acid",
      "Validates Oparin-Haldane chemical evolution"
    ],
    modelAnswer: {
      statement: "Miller simulated primitive reducing conditions (CH₄, NH₃, H₂, H₂O at 800°C with electric sparks), generating amino acids to support chemical evolution.",
      markingScheme: [
        "1.5 Marks: Labelled diagram showing spark chamber, electrodes, condenser, boiling flask, and trap.",
        "1.5 Marks: Gas mixture, temperature (800°C), and products identified (amino acids: glycine, alanine, aspartic acid)."
      ],
      examinerTips: "Remember: Temperature must be accurately stated as 800°C, and the atmosphere was strictly REDUCING without free oxygen ($O_2$)."
    }
  },
  {
    id: "bio-page-18",
    number: 62,
    section: "page",
    title: "Hardy-Weinberg Principle: 5 Factors Disrupting Equilibrium — Pg 121",
    shortLabel: "Hardy-Weinberg 5 Factors (Pg 121)",
    chapterId: "bio-ch-6",
    chapterTitle: "Evolution",
    unit: "Genetics and Evolution",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange (NCERT Page-Referenced)",
    frequency: "NCERT Pg 121 (CBSE 2016, 2018, 2020, 2023)",
    diagramId: "hardy-weinberg-selection",
    questionPrompt: "State Hardy-Weinberg Principle and give its algebraic equation. Explain the five evolutionary factors that upset Hardy-Weinberg genetic equilibrium (NCERT Page 121).",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 6: Evolution",
      page: "Pages 120–122",
      figures: "Fig 6.8"
    },
    theory: [
      "• Principle: Allele frequencies in a large, randomly mating population are stable and remain constant from generation to generation in the absence of evolutionary influences. Gene pool remains constant.",
      "• Mathematical Equation: $p^2 + 2pq + q^2 = 1$, where $p$ is frequency of dominant allele A, $q$ is frequency of recessive allele a, $p^2$ is AA, $2pq$ is Aa, and $q^2$ is aa.",
      "• Five Factors That Affect Genetic Equilibrium:",
      "  1. Gene Migration / Gene Flow: Movement of gene alleles into or out of a population due to migration.",
      "  2. Genetic Drift: Random change in allele frequencies occurring purely by chance in small populations (Founder Effect & Bottleneck Effect).",
      "  3. Mutation: Directional or random pre-adaptive mutations create new alleles.",
      "  4. Genetic Recombination: Shuffling of alleles due to crossing over during meiosis.",
      "  5. Natural Selection: Differential survival and reproduction of genotypes leading to Stabilizing, Directional, or Disruptive selection."
    ],
    keyPointsAndKeywords: [
      "Allele frequencies remain constant (p² + 2pq + q² = 1)",
      "1. Gene migration / gene flow",
      "2. Genetic drift (Founder effect)",
      "3. Mutation",
      "4. Genetic recombination",
      "5. Natural selection"
    ],
    modelAnswer: {
      statement: "Hardy-Weinberg equilibrium ($p^2+2pq+q^2=1$) is disturbed by five evolutionary forces: gene flow, genetic drift, mutation, recombination, and natural selection.",
      markingScheme: [
        "1 Mark: Statement of principle and binomial formula ($p^2 + 2pq + q^2 = 1$).",
        "2 Marks: Description of the 5 factors upsetting equilibrium."
      ],
      examinerTips: "Remember: When a small founding population establishes a new colony with drastically different allele frequencies, it is called the Founder Effect."
    }
  },
  {
    id: "bio-page-19",
    number: 63,
    section: "page",
    title: "Adaptive Radiation: Darwin's Finches & Australian Marsupials",
    shortLabel: "Adaptive Radiation",
    chapterId: "bio-ch-6",
    chapterTitle: "Evolution",
    unit: "Genetics and Evolution",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange (NCERT Page-Referenced)",
    frequency: "NCERT Pg 118 Fig 6.5 & 6.6 (CBSE 2017, 2019, 2022, 2024)",
    questionPrompt: "Define Adaptive Radiation. Explain how Darwin's Finches on the Galapagos Islands and Australian Marsupials serve as classic examples.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 6: Evolution",
      page: "Pages 118–119",
      figures: "Fig 6.5 & Fig 6.6"
    },
    theory: [
      "• Definition: The evolutionary process starting from a single ancestral species in a given geographical area and radiating to other geographical areas (habitats), adapting to different ecological niches.",
      "• Example 1: Darwin's Finches in Galapagos Islands:",
      "  – From original seed-eating ancestral stock, different beak varieties evolved enabling them to exploit diverse feeding niches (insectivorous finches, vegetarian tree finches, cactus finches, warbler finches).",
      "• Example 2: Australian Marsupials:",
      "  – A number of diverse marsupials (Tasmanian wolf, Tiger cat, Bandicoot, Wombat, Banded anteater, Kangaroo) evolved from an ancestral stock, all within the isolated Australian island continent.",
      "• Note: When more than one adaptive radiation occurs in an isolated geographical area representing different habitats, it results in Convergent Evolution (e.g. Placental mammals vs Australian Marsupials)."
    ],
    keyPointsAndKeywords: [
      "Evolution radiating from common ancestor to diverse niches",
      "Darwin's finches: Seed-eating to diverse beaks",
      "Australian marsupials radiating within isolated continent",
      "Convergent evolution when compared with placental mammals"
    ],
    modelAnswer: {
      statement: "Adaptive radiation is diversification of an ancestral species into ecological niches, exemplified by Galapagos finches and Australian marsupials.",
      markingScheme: [
        "1 Mark: Definition of adaptive radiation.",
        "1 Mark: Darwin's finches explanation (seed-eating ancestor → beak adaptations).",
        "1 Mark: Australian marsupials radiation and convergent evolution concept."
      ],
      examinerTips: "Placental wolf and Tasmanian wolf look remarkably similar because of convergent evolution resulting from parallel adaptive radiation."
    }
  },
  {
    id: "bio-page-20",
    number: 64,
    section: "page",
    title: "Allergies: Mechanism, Symptoms & Treatment — Pg 136 (3 Marks)",
    shortLabel: "Allergies (Pg 136, 3M)",
    chapterId: "bio-ch-7",
    chapterTitle: "Human Health and Disease",
    unit: "Biology in Human Welfare",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange (NCERT Page-Referenced)",
    frequency: "Explicitly requested: 'Pg 136 allergies (3mark) (symptoms and treatment)' (CBSE 2016, 2018, 2021, 2023)",
    questionPrompt: "(a) What is allergy? Name the antibody type and chemicals released during an allergic reaction.\n(b) List common symptoms of allergy.\n(c) What medications are administered to treat allergic symptoms quickly?",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 7: Human Health and Disease",
      page: "Page 136"
    },
    theory: [
      "• Definition: The exaggerated immune response of the immune system to certain foreign substances (allergens) present in the environment is called Allergy.",
      "• Mediating Antibody & Chemicals: Mediated by antibodies of the IgE type. Allergens trigger mast cells to release inflammatory chemicals such as Histamine and Serotonin.",
      "• Common Allergens: Mites in dust, pollens (Parthenium), animal dander, drugs (penicillin).",
      "• Symptoms: Sneezing, watery eyes, running nose, difficulty in breathing (bronchospasm), and skin rashes.",
      "• Treatment / Medication: Drugs that quickly reduce symptoms of allergy include Antihistamines, Adrenaline, and Steroids (corticosteroids)."
    ],
    keyPointsAndKeywords: [
      "Exaggerated response mediated by IgE",
      "Mast cells release Histamine and Serotonin",
      "Symptoms: Sneezing, watery eyes, running nose, wheezing",
      "Treatment: Antihistamines, Adrenaline, and Steroids"
    ],
    modelAnswer: {
      statement: "Allergy is an IgE-mediated hypersensitivity reaction causing mast cell degranulation (histamine, serotonin); treated with antihistamines and steroids.",
      markingScheme: [
        "1 Mark: Definition + IgE antibody + Histamine and Serotonin release from mast cells.",
        "1 Mark: Symptoms (sneezing, watery eyes, running nose, breathing difficulty).",
        "1 Mark: Medical treatment (Antihistamines, Adrenaline, Steroids)."
      ],
      examinerTips: "Modern lifestyle and protected indoor environments have led to lowered immunity and higher sensitivity to allergens in urban children."
    }
  },
  {
    id: "bio-page-21",
    number: 65,
    section: "page",
    title: "HIV Life Cycle & Antiretroviral Drugs (Case-Based)",
    shortLabel: "HIV Replication & Treatment",
    chapterId: "bio-ch-7",
    chapterTitle: "Human Health and Disease",
    unit: "Biology in Human Welfare",
    marks: "5 Marks",
    marksNum: 5,
    category: "Big Orange (NCERT Page-Referenced)",
    frequency: "NCERT Fig 7.6 Pg 139 (Case-Based CBSE 2017, 2020, 2022, 2024)",
    diagramId: "hiv-lifecycle",
    questionPrompt: "(a) Describe the step-by-step life cycle of HIV inside a human macrophage and Helper T-lymphocyte (TH).\n(b) Why is macrophage called an 'HIV factory'?\n(c) What class of drugs is used for treatment and why are they not a permanent cure?",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 7: Human Health and Disease",
      page: "Pages 139–141",
      figures: "Fig 7.6"
    },
    theory: [
      "• Step 1: HIV binds to CD4 receptor on human Macrophage / Helper T ($T_H$) cell and injects its viral RNA genome.",
      "• Step 2: Reverse Transcriptase converts viral single-stranded RNA into double-stranded viral DNA.",
      "• Step 3: Viral DNA enters host nucleus and incorporates into host cell genome via Integrase.",
      "• Step 4: Host cellular machinery transcribes viral RNA and produces new viral proteins.",
      "• Step 5: New HIV virions assemble and bud off to infect other cells.",
      "• Macrophage as 'HIV Factory': In macrophages, HIV continues to replicate and produce new virions over long periods without immediately killing the macrophage, acting like an ongoing viral production factory.",
      "• $T_H$ Cell Destruction: Simultaneously, HIV enters Helper T-cells ($T_H$), replicates, and lyses them, progressively reducing $T_H$ count below 200/mm³, leading to immunodeficiency where patient suffers opportunistic infections (Mycobacterium, Toxoplasma, fungi).",
      "• Treatment (Antiretroviral Drugs): Combinations of Reverse Transcriptase Inhibitors (e.g. Zidovudine) and Protease Inhibitors. They prolong patient life by retarding viral replication, but CANNOT completely eradicate the virus because the provirus integrates into host DNA."
    ],
    keyPointsAndKeywords: [
      "Retrovirus uses Reverse Transcriptase",
      "Viral DNA incorporates into host chromosome",
      "Macrophage acts as HIV factory",
      "Progressive decline in Helper T (TH) cells",
      "Antiretroviral drugs prolong life, but cannot cure"
    ],
    modelAnswer: {
      statement: "HIV infects macrophages and T_H cells via reverse transcriptase and genome integration; antiretrovirals suppress replication but cannot eradicate integrated proviruses.",
      markingScheme: [
        "2 Marks: Sequential replication steps (Binding → Reverse transcription → Integration → Viral synthesis → Budding).",
        "1.5 Marks: Macrophage 'HIV factory' concept and mechanism of $T_H$ cell depletion.",
        "1.5 Marks: Antiretroviral therapy (ART) mechanism and limitation (prolongs life, not a cure)."
      ],
      examinerTips: "Remember: Diagnostic test for HIV is ELISA (Enzyme Linked Immunosorbent Assay); confirmatory test is Western Blot."
    }
  },
  {
    id: "bio-page-22",
    number: 66,
    section: "page",
    title: "Tabulation of Drugs: Opioids, Cannabinoids & Cocaine",
    shortLabel: "Drugs Tabulation (Opioids, Cocaine)",
    chapterId: "bio-ch-7",
    chapterTitle: "Human Health and Disease",
    unit: "Biology in Human Welfare",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange (NCERT Page-Referenced)",
    frequency: "NCERT Pages 142–144 (CBSE 2015, 2017, 2019, 2021, 2024)",
    questionPrompt: "Construct a comparative table of Opioids, Cannabinoids, and Cocaine including Plant Source, Chemical Name/Form, Cellular Receptors, Mode of Intake, and Physiological Effects on the human body.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 7: Human Health and Disease",
      page: "Pages 142–144",
      figures: "Fig 7.7, 7.8, 7.9"
    },
    theory: [
      "• 1. Opioids (Heroin / Smack / Morphine):",
      "  – Source: Latex of Poppy plant Papaver somniferum. Heroin is diacetylmorphine (white, bitter, crystalline compound produced by acetylation of morphine).",
      "  – Receptors: Specific opioid receptors in Central Nervous System (CNS) and Gastrointestinal tract.",
      "  – Mode of Intake: Snorting and intravenous injection.",
      "  – Physiological Effect: Powerful depressant; slows down bodily functions.",
      "• 2. Cannabinoids (Marijuana, Hashish, Charas, Ganja):",
      "  – Source: Inflorescences, leaves, and resin of Cannabis sativa (Hemp plant).",
      "  – Receptors: Cannabinoid receptors located principally in the brain.",
      "  – Mode of Intake: Inhalation and oral ingestion.",
      "  – Physiological Effect: Affects the cardiovascular system of the body.",
      "• 3. Cocaine (Coca Alkaloid / Coke / Crack):",
      "  – Source: Leaves of South American coca bush Erythroxylum coca.",
      "  – Mode of Action: Interferes with the transport/reuptake of the neurotransmitter Dopamine.",
      "  – Mode of Intake: Snorted.",
      "  – Physiological Effect: Stimulates CNS, producing euphoria and increased energy; excessive dosage causes potent hallucinations."
    ],
    keyPointsAndKeywords: [
      "Opioids: Papaver somniferum, CNS/GI receptors, depressant",
      "Heroin is diacetylmorphine",
      "Cannabinoids: Cannabis sativa, brain receptors, cardiovascular effects",
      "Cocaine: Erythroxylum coca, blocks dopamine reuptake, euphoria, hallucinations"
    ],
    modelAnswer: {
      statement: "Abused drugs target specific receptor classes: Opioids (CNS/GI depressants), Cannabinoids (brain receptors affecting heart), and Cocaine (dopamine stimulant).",
      markingScheme: [
        "1 Mark: Opioids: Papaver somniferum, diacetylmorphine, CNS receptors, depressant.",
        "1 Mark: Cannabinoids: Cannabis sativa, brain receptors, cardiovascular impact.",
        "1 Mark: Cocaine: Erythroxylum coca, dopamine transport interference, CNS stimulant & hallucinations."
      ],
      examinerTips: "Remember: Plants like Atropa belladonna and Datura also possess hallucinogenic properties."
    }
  },
  {
    id: "bio-page-23",
    number: 67,
    section: "page",
    title: "Biocontrol Agents: Baculoviruses & Bacillus thuringiensis",
    shortLabel: "Biocontrol Agents & Bt",
    chapterId: "bio-ch-8",
    chapterTitle: "Microbes in Human Welfare",
    unit: "Biology in Human Welfare",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange (NCERT Page-Referenced)",
    frequency: "NCERT Pages 153–154 (CBSE 2016, 2018, 2021, 2023)",
    questionPrompt: "(a) What are Biocontrol agents? Give two traditional examples (Ladybird, Dragonfly).\n(b) Why are Baculoviruses (genus Nucleopolyhedrovirus) desirable in Integrated Pest Management (IPM)?\n(c) Explain the biocontrol mechanism of Bacillus thuringiensis (Bt).",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 8: Microbes in Human Welfare",
      page: "Pages 153–154"
    },
    theory: [
      "• Biocontrol refers to the use of biological methods for controlling plant diseases and pests without toxic chemical pesticides.",
      "  – Ladybird beetle controls Aphids.",
      "  – Dragonflies control Mosquitoes.",
      "• Baculoviruses (Genus Nucleopolyhedrovirus):",
      "  – Pathogens that attack insects and other arthropods.",
      "  – Desirability in IPM: They are species-specific, narrow spectrum insecticidal agents. They have no negative impacts on plants, mammals, birds, fish, or non-target beneficial insects.",
      "  – Highly desirable in ecologically sensitive areas and Integrated Pest Management (IPM) programmes.",
      "• Bacillus thuringiensis (Bt):",
      "  – Soil bacterium available as dried spores mixed with water and sprayed on plants.",
      "  – Spores contain toxic crystalline protein (Cry protein). When eaten by insect larvae, the toxin is activated in the alkaline pH of insect gut.",
      "  – Activated toxin binds to midgut epithelial cells, creates pores, causes cell swelling and lysis, killing the larva (e.g. caterpillars)."
    ],
    keyPointsAndKeywords: [
      "Ladybird controls aphids; Dragonfly controls mosquitoes",
      "Baculovirus (Nucleopolyhedrovirus): Species-specific, narrow spectrum",
      "Zero non-target toxicity, ideal for IPM",
      "Bacillus thuringiensis: Alkaline gut pH solubilizes Cry endotoxin, gut pore formation and death"
    ],
    modelAnswer: {
      statement: "Biocontrol utilizes natural predation: Ladybirds control aphids, Baculoviruses provide species-specific pest control in IPM, and Bt crystalline toxins lyse insect midguts.",
      markingScheme: [
        "1 Mark: Ladybird (aphids) and Dragonfly (mosquitoes) biocontrol examples.",
        "1 Mark: Nucleopolyhedrovirus advantages in IPM (narrow spectrum, non-target safety).",
        "1 Mark: Bacillus thuringiensis mechanism (inactive protoxin activated by alkaline insect gut pH causing pore formation and lysis)."
      ],
      examinerTips: "Remember: Bt toxin is INACTIVE in the bacterium (protoxin) and does NOT kill the bacterium; it is activated ONLY inside the insect midgut by alkaline pH."
    }
  },
  {
    id: "bio-page-24",
    number: 68,
    section: "page",
    title: "Evidences for Evolution: Homologous vs Analogous Organs",
    shortLabel: "Homologous vs Analogous (PDF Pg 1)",
    chapterId: "bio-ch-6",
    chapterTitle: "Evolution",
    unit: "Genetics and Evolution",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange (NCERT Page-Referenced)",
    frequency: "PDF Reference Pg 1 & NCERT Pg 115 (CBSE 2017, 2019, 2022)",
    diagramId: "homologous-analogous",
    questionPrompt: "Differentiate between Homologous organs and Analogous organs. Explain how they indicate Divergent Evolution and Convergent Evolution respectively, with two examples of each.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 6: Evolution",
      page: "Pages 114–116",
      figures: "Fig 6.3 & Fig 6.4"
    },
    theory: [
      "• 1. Homologous Organs (Divergent Evolution):",
      "  – Organs that have the same anatomical structure and embryonic origin, but perform different functions in different organisms.",
      "  – Anatomical commonality: Forelimbs of whales, bats, cheetahs, and humans all share humerus, radius, ulna, carpals, metacarpals, and phalanges.",
      "  – Plant example: Thorns of Bougainvillea and tendrils of Cucurbita (both are modified axillary buds).",
      "  – Evolutionary Significance: Indicates Divergent Evolution based on common ancestry (adaptation to diverse habitats).",
      "• 2. Analogous Organs (Convergent Evolution):",
      "  – Organs that have different anatomical structures and embryonic origins, but perform similar functions.",
      "  – Animal example: Wings of butterflies (fold of integument) and wings of birds (modified feathered forelimbs). Eye of octopus and eye of mammals.",
      "  – Plant example: Sweet potato (root modification) and potato (stem tuber) for storage of food.",
      "  – Evolutionary Significance: Indicates Convergent Evolution where similar environmental habitats force similar adaptations."
    ],
    keyPointsAndKeywords: [
      "Homologous: Same structure, different function",
      "Indicates Divergent Evolution & common ancestry",
      "Forelimbs of whale, bat, cheetah, human",
      "Analogous: Different structure, same function",
      "Indicates Convergent Evolution",
      "Wings of butterfly vs bird, Sweet potato vs potato"
    ],
    modelAnswer: {
      statement: "Homologous organs demonstrate divergent evolution from common ancestors, while analogous organs represent convergent evolution driven by shared environmental demands.",
      markingScheme: [
        "1.5 Marks: Homologous organs definition + Divergent evolution + Forelimbs of vertebrates example.",
        "1.5 Marks: Analogous organs definition + Convergent evolution + Butterfly/Bird wings or Sweet potato/Potato example."
      ],
      examinerTips: "Remember: 'Homology indicates Common Ancestry (Divergent)', while 'Analogy indicates Similar Selection Pressures (Convergent)'."
    }
  },
  {
    id: "bio-page-25",
    number: 69,
    section: "page",
    title: "Theories of Evolution: Lamarckism, Darwinism & Hugo de Vries (Saltation)",
    shortLabel: "Theories of Evolution (PDF Pg 1)",
    chapterId: "bio-ch-6",
    chapterTitle: "Evolution",
    unit: "Genetics and Evolution",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange (NCERT Page-Referenced)",
    frequency: "PDF Reference Pg 1 & NCERT Pg 118 (CBSE 2016, 2018, 2021)",
    questionPrompt: "Compare the three major theories of biological evolution:\n(a) Lamarckism (Use and disuse of organs)\n(b) Darwinism (Branching descent & Natural Selection)\n(c) Mutation Theory of Hugo de Vries (Saltation)",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 6: Evolution",
      page: "Pages 118–120"
    },
    theory: [
      "• 1. Lamarckism (Theory of Inheritance of Acquired Characters):",
      "  – Proposed by Jean-Baptiste Lamarck (1809).",
      "  – Evolution is driven by the Use and Disuse of organs.",
      "  – Example: Giraffes elongated their necks to forage on tall trees; acquired character of elongated neck was passed to next generations (now disproved).",
      "• 2. Darwinism (Theory of Natural Selection):",
      "  – Proposed by Charles Darwin (1859).",
      "  – Based on two key concepts: Branching Descent and Natural Selection.",
      "  – Variations are small, continuous, and directional. Nature selects organisms with favorable fitness (reproductive fitness), surviving to leave more progeny.",
      "• 3. Mutation Theory of Hugo de Vries (1901):",
      "  – Based on experiments on Evening Primrose (Oenothera lamarckiana).",
      "  – Evolution is driven by Mutations: large, random, and directionless changes, rather than minor continuous variations.",
      "  – Believed mutation caused speciation in a single step, termed 'Saltation' (single-step large mutation)."
    ],
    keyPointsAndKeywords: [
      "Lamarckism: Use and disuse of organs (giraffe neck)",
      "Darwinism: Branching descent and Natural Selection",
      "Darwin variations: Small, continuous, and directional",
      "Hugo de Vries: Mutations are large, random, and directionless",
      "Saltation: Single-step large mutation causing speciation"
    ],
    modelAnswer: {
      statement: "Biological evolution theories evolved from Lamarckian use/disuse, to Darwinian gradual natural selection, to de Vriesian saltationary mutations.",
      markingScheme: [
        "1 Mark: Lamarckism (use/disuse principle + giraffe example).",
        "1 Mark: Darwinism (two key concepts: Branching descent & Natural selection; gradual directional variations).",
        "1 Mark: Hugo de Vries Mutation Theory (random, directionless mutations + Saltation definition)."
      ],
      examinerTips: "Contrast Darwin vs de Vries: Darwinian variations are small and directional; de Vriesian mutations are large, random, and directionless."
    }
  },
  {
    id: "bio-page-26",
    number: 70,
    section: "page",
    title: "Schematic Structure of a Transcription Unit — Diagram",
    shortLabel: "Transcription Unit Diagram (PDF Pg 8)",
    chapterId: "bio-ch-5",
    chapterTitle: "Molecular Basis of Inheritance",
    unit: "Genetics and Evolution",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange (NCERT Page-Referenced)",
    frequency: "PDF Reference Pg 8 & NCERT Fig 5.9 (CBSE 2017, 2020, 2023)",
    diagramId: "transcription-unit",
    questionPrompt: "Draw a neat labelled schematic diagram of a Transcription Unit as outlined on PDF Page 8 / NCERT Figure 5.9. Label Promoter, Structural gene, Terminator, Template strand, and Coding strand. Why is the coding strand called 'coding' even though it does not code for RNA?",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 5: Molecular Basis of Inheritance",
      page: "Page 91",
      figures: "Fig 5.9"
    },
    theory: [
      "• A transcription unit in DNA consists of three functional regions:",
      "  1. A Promoter: Binding site for RNA polymerase located towards the 5'-end (upstream) of the coding strand.",
      "  2. The Structural Gene: The sequence transcribed into RNA.",
      "  3. A Terminator: Located towards the 3'-end (downstream) of the coding strand; stops transcription.",
      "• Two Strands with Opposite Polarities:",
      "  – Template Strand: Has 3' → 5' polarity; serves as template for transcription by RNA polymerase.",
      "  – Coding Strand: Has 5' → 3' polarity; does NOT code for RNA, but has the exact same sequence as the synthesized RNA (except Thymine in place of Uracil).",
      "• Why named 'Coding Strand'? Because all positions and reference points in a transcription unit (promoter, terminator) are defined with respect to the 5' and 3' ends of this strand!"
    ],
    keyPointsAndKeywords: [
      "Promoter (upstream at 5' end of coding strand)",
      "Structural gene (coding region)",
      "Terminator (downstream at 3' end of coding strand)",
      "Template strand: 3' → 5' polarity",
      "Coding strand: 5' → 3' polarity; reference strand"
    ],
    modelAnswer: {
      statement: "A transcription unit comprises a promoter, structural gene, and terminator; all reference polarities are established relative to the 5'→3' coding strand.",
      markingScheme: [
        "1.5 Marks: Accurate schematic diagram with all 5 labels (Promoter, Structural gene, Terminator, Template strand 3'→5', Coding strand 5'→3').",
        "1.5 Marks: Polarity explanation and justification for why coding strand is used as the reference."
      ],
      examinerTips: "Remember: RNA polymerase always polymerizes in the 5' → 3' direction; therefore, the template strand MUST run 3' → 5'."
    }
  },
  {
    id: "bio-page-27",
    number: 71,
    section: "page",
    title: "DNA Replicating Fork: Continuous vs Discontinuous Synthesis — Diagram",
    shortLabel: "Replication Fork Diagram (PDF Pg 8)",
    chapterId: "bio-ch-5",
    chapterTitle: "Molecular Basis of Inheritance",
    unit: "Genetics and Evolution",
    marks: "3 Marks",
    marksNum: 3,
    category: "Big Orange (NCERT Page-Referenced)",
    frequency: "PDF Reference Pg 8 & NCERT Fig 5.8 (CBSE 2016, 2018, 2021, 2024)",
    diagramId: "replicating-fork",
    questionPrompt: "Draw a labelled diagram of the DNA Replicating Fork as given on PDF Page 8 / NCERT Figure 5.8. Clearly show the continuous synthesis on the leading strand and discontinuous synthesis on the lagging strand. Name the enzyme that joins Okazaki fragments.",
    ncertRef: {
      textbook: "NCERT Biology Class 12",
      chapter: "Chapter 5: Molecular Basis of Inheritance",
      page: "Page 88",
      figures: "Fig 5.8"
    },
    theory: [
      "• Replicating Fork: The Y-shaped unwound region of the DNA double helix where DNA replication takes place.",
      "• DNA Polymerase Constraint: DNA-dependent DNA polymerase can catalyse polymerisation only in one direction: strictly 5' → 3'.",
      "• Asymmetric Strand Synthesis:",
      "  1. Continuous (Leading) Strand: On the template strand with polarity 3' → 5', new DNA is synthesized continuously in the 5' → 3' direction towards the replicating fork.",
      "  2. Discontinuous (Lagging) Strand: On the template strand with polarity 5' → 3', new DNA is synthesized discontinuously as short segments away from the fork. These segments are called Okazaki fragments.",
      "• Role of DNA Ligase: The discontinuously synthesized Okazaki fragments are later joined covalently by the enzyme DNA Ligase."
    ],
    keyPointsAndKeywords: [
      "Y-shaped replicating fork",
      "DNA Polymerase works strictly 5' → 3'",
      "Continuous leading strand on 3' → 5' template",
      "Discontinuous lagging strand forming Okazaki fragments",
      "DNA Ligase seals fragments"
    ],
    modelAnswer: {
      statement: "The DNA replication fork exhibits continuous 5'→3' leading strand synthesis and discontinuous lagging strand synthesis joined by DNA ligase.",
      markingScheme: [
        "1.5 Marks: Accurate diagram showing Y-fork, parental template polarities, leading strand, and lagging strand.",
        "1 Mark: Explanation of continuous vs discontinuous synthesis due to 5'→3' polymerase constraint.",
        "0.5 Mark: Identification of DNA Ligase enzyme."
      ],
      examinerTips: "Remember: The unwinding of DNA into a replication fork is catalyzed by DNA Helicase, while Topoisomerase/Gyrase relieves supercoiling tension."
    }
  }
];

export const ALL_BIG_ORANGE_QUESTIONS = [
  ...BIG_ORANGE_CORE_QUESTIONS,
  ...BIG_ORANGE_PAGE_QUESTIONS
];
