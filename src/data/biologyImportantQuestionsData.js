// Official CBSE Class 12 Biology High-Yield Question Bank
// Clean, Concise, and Rigorously Formatted into 4 Distinct Parts:
// Part 1: Core Biological Principles & NCERT Definitions (Point-wise bullets)
// Part 2: Step-by-Step Biological Mechanism, Flowchart or Genetic Cross (Setup, Steps, Boxed Final Result)
// Part 3: NCERT Diagram & CBSE Exam Drawing Guide (Labelled Schematics & Drawing Instructions)
// Part 4: High-Yield Key Points & Mandatory Keywords + Official Marking Scheme + Examiner's Tips

export const BIG_ORANGE_CORE_QUESTIONS = [
  {
    "id": "bio-core-1",
    "number": 1,
    "section": "core",
    "title": "Mendel's Laws of Inheritance (Dominance, Segregation & Independent Assortment)",
    "shortLabel": "Mendel's 3 Laws of Inheritance",
    "chapterId": "bio-ch-4",
    "chapterTitle": "Principles of Inheritance and Variation",
    "unit": "Genetics and Evolution",
    "marks": "5 Marks",
    "marksNum": 5,
    "category": "Big Orange",
    "frequency": "Asked 9+ times in CBSE Board Exams (Guaranteed Core)",
    "questionPrompt": "(a) State and explain Mendel's Law of Dominance using a monohybrid cross.\n(b) Why is Mendel's Law of Segregation called universally applicable without exception?\n(c) State the Law of Independent Assortment with a phenotypic ratio of a dihybrid cross.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 4: Principles of Inheritance and Variation",
      "page": "Pages 56–63",
      "figures": "Fig 4.2 & Fig 4.7"
    },
    "theory": [
      "• Principle of Dominance: Characters are governed by discrete hereditary units called factors (genes) occurring in pairs. In a dissimilar pair, one factor dominates over the other (recessive).",
      "• Principle of Segregation (Purity of Gametes): Alleles of a gene pair segregate cleanly during gametogenesis without blending, ensuring each gamete receives only one allele. Valid universally without exception.",
      "• Principle of Independent Assortment: Segregation of one pair of traits during gamete formation is completely independent of the segregation of another pair of traits (observed in dihybrid crosses)."
    ],
    "keyPointsAndKeywords": [
      "Factors occur in pairs",
      "Dominant allele masks recessive",
      "No blending of alleles",
      "Universally applicable (Purity of gametes)",
      "Independent assortment gives 9:3:3:1 phenotypic ratio"
    ],
    "modelAnswer": {
      "statement": "Mendel formulated three fundamental principles of inheritance: Dominance, Segregation, and Independent Assortment based on monohybrid and dihybrid hybridization experiments on Pisum sativum.",
      "markingScheme": [
        "1.5 Marks: Law of Dominance definition + cross representation showing F₁ (Tt) phenotypically tall.",
        "1.5 Marks: Law of Segregation definition + reason for universality (no blending, heterozygous individual produces 50% gametes of each allele).",
        "2 Marks: Law of Independent Assortment statement + F₂ phenotypic ratio 9:3:3:1 (Round-Yellow: 9, Round-Green: 3, Wrinkled-Yellow: 3, Wrinkled-Green: 1)."
      ],
      "examinerTips": "Remember: Law of Segregation has NO exceptions, whereas Law of Dominance has exceptions (Incomplete dominance, Co-dominance) and Law of Independent Assortment has exceptions (Linkage)."
    },
    "derivations": [
      {
        "name": "Application 1: Monohybrid Cross (Dominance & Segregation)",
        "setup": "Cross between pure Tall (TT) and pure Dwarf (tt) garden pea plants (Pisum sativum).",
        "steps": [
          {
            "text": "Parental cross:",
            "equation": "\\text{Parents: } TT \\; (\\text{Tall}) \\times tt \\; (\\text{Dwarf})"
          },
          {
            "text": "F₁ generation hybrid:",
            "equation": "\\text{Gametes: } T, t \\implies \\text{F}_1: Tt \\; (100\\% \\text{ Phenotypically Tall})"
          },
          {
            "text": "F₂ generation selfing ($Tt \\times Tt$):",
            "equation": "\\text{Gametes: } 50\\% \\; T, \\; 50\\% \\; t"
          },
          {
            "text": "Punnett square 4-box progeny classification:",
            "equation": "1 \\; TT \\; (\\text{Tall}) : 2 \\; Tt \\; (\\text{Tall}) : 1 \\; tt \\; (\\text{Dwarf})"
          }
        ],
        "specialCases": [
          {
            "title": "Universal Purity of Gametes",
            "text": "Dwarf character (tt) emerges unmodified in F₂ despite being completely masked in F₁, proving alleles do not blend."
          }
        ],
        "finalFormula": "\\text{F}_2 \\text{ Phenotypic Ratio} = 3 \\text{ Tall} : 1 \\text{ Dwarf} \\quad | \\quad \\text{Genotypic Ratio} = 1 \\; TT : 2 \\; Tt : 1 \\; tt \\; (1:2:1)"
      },
      {
        "name": "Application 2: Dihybrid Cross (Independent Assortment)",
        "setup": "Cross between Round Yellow seeds (RRYY) and Wrinkled Green seeds (rryy).",
        "steps": [
          {
            "text": "F₁ dihybrid generation:",
            "equation": "RRYY \\times rryy \\implies \\text{F}_1: RrYy \\; (100\\% \\text{ Round Yellow})"
          },
          {
            "text": "F₁ gametes formed in equal proportions (25% each):",
            "equation": "RY, \\; Ry, \\; rY, \\; ry"
          },
          {
            "text": "F₂ 16-box Punnett square phenotypic distribution:",
            "equation": "9 \\text{ Round-Yellow} : 3 \\text{ Round-Green} : 3 \\text{ Wrinkled-Yellow} : 1 \\text{ Wrinkled-Green}"
          }
        ],
        "specialCases": [
          {
            "title": "Exception to Independent Assortment",
            "text": "Physical linkage between genes located on the same chromosome (T.H. Morgan) restricts independent assortment."
          }
        ],
        "finalFormula": "\\text{Dihybrid Phenotypic Ratio} = 9 : 3 : 3 : 1"
      }
    ]
  },
  {
    "id": "bio-core-2",
    "number": 2,
    "section": "core",
    "title": "Deviations of Mendel's Laws: Incomplete Dominance & Co-dominance",
    "shortLabel": "Incomplete Dominance & Co-dominance",
    "chapterId": "bio-ch-4",
    "chapterTitle": "Principles of Inheritance and Variation",
    "unit": "Genetics and Evolution",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Big Orange",
    "frequency": "Repeated 3M Question (CBSE 2017, 2019, 2023)",
    "questionPrompt": "Differentiate between Incomplete Dominance and Co-dominance. Give one suitable genetic cross example for each with F₂ phenotypic and genotypic ratios.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 4: Principles of Inheritance and Variation",
      "page": "Pages 60–63",
      "figures": "Fig 4.3"
    },
    "theory": [
      "• Incomplete Dominance: Neither allele shows absolute dominance. The heterozygous F₁ phenotype is intermediate between the two homozygous parental phenotypes.",
      "• Co-dominance: Both alleles of a gene express themselves fully and simultaneously in the heterozygote without blending or dominance.",
      "• Classical Examples: Snapdragon / Antirrhinum majus (flower color) for Incomplete Dominance; Human ABO blood grouping ($I^A I^B$) for Co-dominance."
    ],
    "keyPointsAndKeywords": [
      "Intermediate phenotype in F₁",
      "Snapdragon (Antirrhinum majus)",
      "Phenotypic = Genotypic ratio (1:2:1)",
      "Simultaneous full expression of both alleles",
      "ABO blood groups (I^A I^B genotype)"
    ],
    "modelAnswer": {
      "statement": "Deviations from Mendelian 3:1 ratio include Incomplete Dominance (intermediate blending-like phenotype) and Co-dominance (independent equal expression of both alleles).",
      "markingScheme": [
        "1.5 Marks: Incomplete dominance definition, Antirrhinum cross, and F₂ ratio (1:2:1 phenotypic and genotypic).",
        "1.5 Marks: Co-dominance definition, ABO blood group I^A I^B explanation, and absence of intermediate phenotype."
      ],
      "examinerTips": "Highlight that in Incomplete Dominance, phenotypic ratio changes from 3:1 to 1:2:1, exactly matching the genotypic ratio."
    },
    "derivations": [
      {
        "name": "Mechanism 1: Incomplete Dominance in Snapdragon (Antirrhinum majus)",
        "setup": "True-breeding Red flowered plant (RR) crossed with true-breeding White flowered plant (rr).",
        "steps": [
          {
            "text": "Parental cross and F₁ pink intermediate:",
            "equation": "\\text{Red } (RR) \\times \\text{White } (rr) \\implies \\text{F}_1: Rr \\; (\\text{Pink Flowers})"
          },
          {
            "text": "Selfing F₁ generation ($Rr \\times Rr$):",
            "equation": "\\text{Gametes: } R, r"
          },
          {
            "text": "F₂ generation outcome:",
            "equation": "1 \\; RR \\; (\\text{Red}) : 2 \\; Rr \\; (\\text{Pink}) : 1 \\; rr \\; (\\text{White})"
          }
        ],
        "specialCases": [
          {
            "title": "Identical Ratios",
            "text": "In incomplete dominance, the phenotypic ratio (1:2:1) is identical to the genotypic ratio (1:2:1)."
          }
        ],
        "finalFormula": "\\text{Phenotypic Ratio} = \\text{Genotypic Ratio} = 1 \\text{ Red} : 2 \\text{ Pink} : 1 \\text{ White} = 1:2:1"
      },
      {
        "name": "Mechanism 2: Co-dominance in Human ABO Blood Groups",
        "setup": "Gene I controls RBC plasma membrane sugar polymers with 3 alleles: $I^A, I^B, i$.",
        "steps": [
          {
            "text": "Dominance hierarchy:",
            "equation": "I^A > i, \\quad I^B > i, \\quad I^A = I^B \\; (\\text{Codominant})"
          },
          {
            "text": "Expression in heterozygous state ($I^A I^B$):",
            "equation": "\\text{Both A and B glycoprotein antigens expressed on RBC surface} \\implies \\text{Blood Group AB}"
          }
        ],
        "finalFormula": "\\text{Genotype } I^A I^B \\implies \\text{Blood Group AB (Dual Antigen Expression, Zero Blending)}"
      }
    ]
  },
  {
    "id": "bio-core-3",
    "number": 3,
    "section": "core",
    "title": "Sex Determination in Honeybees (Haplodiploidy Mechanism)",
    "shortLabel": "Honeybee Haplodiploidy",
    "chapterId": "bio-ch-4",
    "chapterTitle": "Principles of Inheritance and Variation",
    "unit": "Genetics and Evolution",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Big Orange",
    "frequency": "CBSE 2018, 2020, 2022, 2024 (Very High Probability)",
    "questionPrompt": "Explain the haplodiploid mechanism of sex determination in honeybees. Why do male honeybees (drones) have no father and cannot have sons, but have a grandfather and can have grandsons?",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 4: Principles of Inheritance and Variation",
      "page": "Pages 69–70",
      "figures": "Fig 4.13"
    },
    "theory": [
      "• Haplodiploid Mechanism: Sex determination depends on chromosome set ploidy: diploid females (2n=32) vs haploid males (n=16).",
      "• Females (Queens & Workers): Arise through fertilization of an egg (n=16) by sperm (n=16) $\\to$ 2n = 32 chromosomes.",
      "• Males (Drones): Arise via parthenogenesis from unfertilized eggs without fertilization $\\to$ n = 16 chromosomes.",
      "• Spermatogenesis: Drones produce sperms by Mitosis, preserving their haploid chromosome count."
    ],
    "keyPointsAndKeywords": [
      "Haplodiploid mechanism",
      "Female 2n = 32 (fertilization)",
      "Male n = 16 (parthenogenesis)",
      "Males produce sperm via mitosis",
      "No father, no sons; has grandfather and grandsons"
    ],
    "modelAnswer": {
      "statement": "Honeybees exhibit haplodiploidy where sex is decided by ploidy: unfertilised eggs develop into haploid males (drones, n=16) via parthenogenesis, while fertilised eggs develop into diploid females (queens/workers, 2n=32).",
      "markingScheme": [
        "1 Mark: Explanation of female (2n=32, fertilized) vs male (n=16, parthenogenesis).",
        "1 Mark: Mitotic sperm production in haploid males.",
        "1 Mark: Logical justification of the father/son/grandfather/grandson lineage paradox."
      ],
      "examinerTips": "Always draw the quick flow diagram: Female (2n=32) ⟶ Meiosis ⟶ Egg (n=16); Male (n=16) ⟶ Mitosis ⟶ Sperm (n=16). Egg + Sperm = Female (2n); Unfertilized Egg = Male (n)."
    },
    "derivations": [
      {
        "name": "Haplodiploid Chromosomal Cycle & Lineage Paradox",
        "setup": "Apis mellifera sex determination and generational inheritance flow.",
        "steps": [
          {
            "text": "Queen gametogenesis via Meiosis:",
            "equation": "\\text{Diploid Queen } (2n = 32) \\xrightarrow{\\text{Meiosis}} \\text{Eggs } (n = 16)"
          },
          {
            "text": "Parthenogenetic male production:",
            "equation": "\\text{Unfertilized Egg } (n = 16) \\xrightarrow{\\text{Parthenogenesis}} \\text{Male Drone } (n = 16)"
          },
          {
            "text": "Mitotic sperm production in haploid males:",
            "equation": "\\text{Haploid Drone } (n = 16) \\xrightarrow{\\text{Mitosis}} \\text{Sperm } (n = 16)"
          },
          {
            "text": "Syngamy producing female offspring:",
            "equation": "\\text{Egg } (n = 16) + \\text{Sperm } (n = 16) \\implies \\text{Female } (2n = 32)"
          }
        ],
        "specialCases": [
          {
            "title": "Generational Paradox",
            "text": "Males have no father (unfertilized egg) and no sons (sperms only yield diploid females), but have a grandfather and grandsons."
          }
        ],
        "finalFormula": "\\text{Male (Drone): } n = 16 \\; (\\text{Parthenogenesis}) \\quad | \\quad \\text{Female: } 2n = 32 \\; (\\text{Fertilization})"
      }
    ]
  },
  {
    "id": "bio-core-4",
    "number": 4,
    "section": "core",
    "title": "Mendelian Disorders: Haemophilia, Sickle-Cell Anaemia & Thalassemia",
    "shortLabel": "Mendelian Disorders Comparison",
    "chapterId": "bio-ch-4",
    "chapterTitle": "Principles of Inheritance and Variation",
    "unit": "Genetics and Evolution",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Big Orange",
    "frequency": "CBSE 2016, 2018, 2020, 2023",
    "questionPrompt": "What are Mendelian disorders? Describe the genetic basis, inheritance pattern, and symptoms of:\n(i) Haemophilia\n(ii) Sickle-cell anaemia\n(iii) Thalassemia",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 4: Principles of Inheritance and Variation",
      "page": "Pages 72–74",
      "figures": "Fig 4.15 & Fig 4.16"
    },
    "theory": [
      "• Mendelian Disorders: Genetic disorders caused by mutation or alteration in a single gene, transmitted along strict Mendelian pedigree patterns.",
      "• Haemophilia: X-linked recessive bleeding disorder resulting from defective clotting factor VIII or IX in the coagulation cascade.",
      "• Sickle-Cell Anaemia: Autosomal recessive disorder (chromosome 11) caused by a point mutation in the beta-globin gene.",
      "• Thalassemia: Autosomal recessive quantitative defect caused by reduced synthesis of alpha or beta globin chains."
    ],
    "keyPointsAndKeywords": [
      "Mutation in a single gene",
      "Haemophilia: X-linked recessive, clotting cascade failure",
      "Sickle cell: GAG to GUG point mutation, Glu to Val at 6th position of beta-globin",
      "Thalassemia: Quantitative defect in globin synthesis"
    ],
    "modelAnswer": {
      "statement": "Mendelian disorders follow typical pedigree inheritance patterns based on dominant/recessive and autosomal/sex-linked loci.",
      "markingScheme": [
        "1 Mark: Haemophilia: X-linked recessive, defective clotting protein, royal disease context.",
        "1 Mark: Sickle-cell anaemia: Point mutation (GAG → GUG, Glu → Val at 6th residue), HbS polymerisation under hypoxia.",
        "1 Mark: Thalassemia: Quantitative defect vs qualitative defect distinction."
      ],
      "examinerTips": "Distinguish clearly: Sickle cell is a QUALITATIVE defect (abnormal globin synthesized). Thalassemia is a QUANTITATIVE defect (deficient amount of normal globin synthesized)."
    },
    "derivations": [
      {
        "name": "Molecular Mechanism: Sickle-Cell Anaemia (Point Mutation)",
        "setup": "Single nucleotide transversion in beta-globin chain at codon 6 on chromosome 11.",
        "steps": [
          {
            "text": "Codon mutation in DNA and mRNA:",
            "equation": "\\text{DNA: } \\text{CTC} \\to \\text{CAC} \\quad | \\quad \\text{mRNA: } \\text{GAG} \\to \\text{GUG}"
          },
          {
            "text": "Amino acid substitution at residue 6 of beta-globin:",
            "equation": "\\text{Glutamic acid (Glu, Polar)} \\longrightarrow \\text{Valine (Val, Non-polar)}"
          },
          {
            "text": "Polymerisation under hypoxic tension:",
            "equation": "\\text{Hb}^S \\text{ polymerises} \\implies \\text{Biconcave RBC} \\to \\text{Sickle-shaped RBC}"
          }
        ],
        "specialCases": [
          {
            "title": "Qualitative vs Quantitative Defect",
            "text": "Sickle-cell is a qualitative defect (abnormal HbS synthesized). Thalassemia is a quantitative defect (deficient volume of normal chains)."
          }
        ],
        "finalFormula": "\\text{Genotype } \\text{Hb}^S\\text{Hb}^S = \\text{Sickle-Cell Disease} \\quad | \\quad \\text{Hb}^A\\text{Hb}^S = \\text{Asymptomatic Carrier (Malaria Resistant)}"
      }
    ]
  },
  {
    "id": "bio-core-5",
    "number": 5,
    "section": "core",
    "title": "Chromosomal Disorders: Down's, Klinefelter's & Turner's Syndromes",
    "shortLabel": "Down's, Klinefelter's & Turner's",
    "chapterId": "bio-ch-4",
    "chapterTitle": "Principles of Inheritance and Variation",
    "unit": "Genetics and Evolution",
    "marks": "3 / 4 / 5 Marks",
    "marksNum": 4,
    "category": "Big Orange",
    "frequency": "CBSE 2015, 2017, 2019, 2021, 2023 (Guaranteed 3M / 4M / 5M)",
    "questionPrompt": "Compare Down's syndrome, Klinefelter's syndrome, and Turner's syndrome in terms of karyotype, chromosomal cause, and characteristic clinical symptoms.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 4: Principles of Inheritance and Variation",
      "page": "Pages 75–76",
      "figures": "Fig 4.17"
    },
    "theory": [
      "• Aneuploidy: Gain or loss of one or more chromosomes due to failure of sister chromatid segregation (non-disjunction) during meiotic cell division.",
      "• Down's Syndrome: Autosomal trisomy of chromosome 21 ($47, +21$). Symptoms: furrowed tongue, palm crease, flat back of head, mental retardation.",
      "• Klinefelter's Syndrome: Sex-chromosomal trisomy in males ($47, XXY$). Symptoms: gynaecomastia, tall feminine stature, sterile.",
      "• Turner's Syndrome: Sex-chromosomal monosomy in females ($45, XO$). Symptoms: rudimentary ovaries, webbed neck, sterile."
    ],
    "keyPointsAndKeywords": [
      "Down's: 47, +21 (Trisomy 21), furrowed tongue, palm crease",
      "Klinefelter's: 47, XXY, gynaecomastia, masculine with feminine traits, sterile",
      "Turner's: 45, XO, sterile female, rudimentary ovaries, webbed neck",
      "Aneuploidy caused by non-disjunction"
    ],
    "modelAnswer": {
      "statement": "Chromosomal disorders result from aneuploidy (non-disjunction of homologous chromosomes during meiosis), leading to abnormal chromosome numbers.",
      "markingScheme": [
        "1.5 Marks: Down's syndrome: 47 chromosomes (Trisomy 21) + 2 physical symptoms (furrowed tongue, palm crease).",
        "1.5 Marks: Klinefelter's syndrome: 47, XXY + gynaecomastia + masculine build + sterility.",
        "1 Mark: Turner's syndrome: 45, XO + rudimentary ovaries + lack of secondary sexual characters + sterility."
      ],
      "examinerTips": "Remember: Down's is AUTOSOMAL aneuploidy, while Klinefelter's and Turner's are SEX-CHROMOSOMAL aneuploidies."
    },
    "derivations": [
      {
        "name": "Karyotypic Classification of Major Aneuploidies",
        "setup": "Non-disjunction of homologous chromosomes during gametogenesis.",
        "steps": [
          {
            "text": "Down's Syndrome (Autosomal Trisomy 21):",
            "equation": "2n + 1 = 47 \\; (\\text{Trisomy of Chromosome 21})"
          },
          {
            "text": "Klinefelter's Syndrome (Sex Chromosome Trisomy):",
            "equation": "2n + 1 = 47, \\; XXY \\; (\\text{Male with extra X})"
          },
          {
            "text": "Turner's Syndrome (Sex Chromosome Monosomy):",
            "equation": "2n - 1 = 45, \\; XO \\; (\\text{Female lacking one X})"
          }
        ],
        "finalFormula": "\\text{Down's} = 47 (+21) \\quad | \\quad \\text{Klinefelter's} = 47 (XXY) \\quad | \\quad \\text{Turner's} = 45 (XO)"
      }
    ]
  },
  {
    "id": "bio-core-6",
    "number": 6,
    "section": "core",
    "title": "Linkage and Recombination: Definitions & Morgan's Dihybrid Cross",
    "shortLabel": "Linkage and Recombination",
    "chapterId": "bio-ch-4",
    "chapterTitle": "Principles of Inheritance and Variation",
    "unit": "Genetics and Evolution",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Big Orange",
    "frequency": "CBSE 2016, 2018, 2020, 2024",
    "questionPrompt": "(a) Define Linkage and Recombination.\n(b) Explain why T.H. Morgan selected Drosophila melanogaster for his genetic studies.\n(c) How does the physical distance between two genes on a chromosome affect their recombination frequency?",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 4: Principles of Inheritance and Variation",
      "page": "Pages 65–68",
      "figures": "Fig 4.11"
    },
    "theory": [
      "• Linkage: The physical association and tendency of genes situated on the same chromosome to remain together during meiotic inheritance.",
      "• Recombination: Generation of non-parental gene combinations resulting from crossing-over between homologous chromosomes during pachytene of meiosis I.",
      "• Physical Distance Rule: Recombination frequency is directly proportional to the physical distance between linked genes on a chromosome.",
      "• Model Organism: T.H. Morgan selected Drosophila melanogaster due to its 2-week life cycle, simple synthetic medium growth, and distinct sexual dimorphism."
    ],
    "keyPointsAndKeywords": [
      "Linkage = Physical association of genes on same chromosome",
      "Recombination = Generation of non-parental gene combinations",
      "Recombination frequency ∝ physical distance between genes",
      "Drosophila advantages (2-week cycle, simple medium, sexual dimorphism)",
      "Alfred Sturtevant genetic mapping"
    ],
    "modelAnswer": {
      "statement": "Morgan demonstrated that linked genes deviate from Mendel's 9:3:3:1 ratio because physical linkage on the same chromosome restricts independent assortment.",
      "markingScheme": [
        "1 Mark: Accurate definition of Linkage and Recombination.",
        "1 Mark: Any two valid reasons for selecting Drosophila melanogaster.",
        "1 Mark: Relationship between physical distance and recombination percentage + genetic mapping reference."
      ],
      "examinerTips": "Recombination frequency can NEVER exceed 50% for genes on the same chromosome (50% recombination behaves like independent assortment)."
    },
    "derivations": [
      {
        "name": "Morgan's Dihybrid Cross & Recombination Frequency (Alfred Sturtevant)",
        "setup": "Analysis of linkage in Drosophila melanogaster for body color, eye color, and wing size.",
        "steps": [
          {
            "text": "Tightly linked genes (Yellow body & White eye):",
            "equation": "\\text{Parental types} = 98.7\\%, \\quad \\text{Recombinants} = 1.3\\%"
          },
          {
            "text": "Loosely linked genes (White eye & Miniature wing):",
            "equation": "\\text{Parental types} = 62.8\\%, \\quad \\text{Recombinants} = 37.2\\%"
          },
          {
            "text": "Genetic mapping principle (Sturtevant):",
            "equation": "1\\% \\text{ Recombination} = 1 \\text{ map unit (centiMorgan / cM)}"
          }
        ],
        "specialCases": [
          {
            "title": "Maximum Recombination Limit",
            "text": "Recombination frequency between linked genes on the same chromosome cannot exceed 50% (at 50%, genes assort independently)."
          }
        ],
        "finalFormula": "\\text{Recombination Frequency (\\%)} \\propto \\text{Physical Distance Between Linked Genes}"
      }
    ]
  },
  {
    "id": "bio-core-7",
    "number": 7,
    "section": "core",
    "title": "Polygenic Inheritance & Pleiotropy: Principles & Examples",
    "shortLabel": "Polygenic Inheritance & Pleiotropy",
    "chapterId": "bio-ch-4",
    "chapterTitle": "Principles of Inheritance and Variation",
    "unit": "Genetics and Evolution",
    "marks": "2 / 3 Marks",
    "marksNum": 3,
    "category": "Big Orange",
    "frequency": "CBSE 2017, 2019, 2022",
    "questionPrompt": "Differentiate between Polygenic Inheritance and Pleiotropy with one suitable biological example for each.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 4: Principles of Inheritance and Variation",
      "page": "Pages 70–71"
    },
    "theory": [
      "• Polygenic Inheritance: Quantitative inheritance where three or more genes control a single phenotypic trait in an additive, cumulative manner.",
      "• Polygenic Example: Human skin colour controlled by three genes (A, B, C). Dominant alleles add melanin gradient: AABBCC (darkest) to aabbcc (lightest).",
      "• Pleiotropy: A single gene influences multiple phenotypic traits simultaneously by regulating a key metabolic pathway.",
      "• Pleiotropy Example: Phenylketonuria (mutation in phenylalanine hydroxylase causes mental retardation, hair loss, and skin hypopigmentation)."
    ],
    "keyPointsAndKeywords": [
      "Polygenic: Multiple genes control a single trait (additive effect)",
      "Human skin colour (A, B, C genes)",
      "Pleiotropy: Single gene controls multiple phenotypic traits",
      "Phenylketonuria (mental retardation + skin pigmentation loss)",
      "Pea seed starch synthesis (size vs shape)"
    ],
    "modelAnswer": {
      "statement": "Polygenic inheritance represents 'many genes → one trait' (quantitative), whereas Pleiotropy represents 'one gene → many traits' (multiple effects).",
      "markingScheme": [
        "1.5 Marks: Polygenic inheritance definition + additive effect + skin colour example.",
        "1.5 Marks: Pleiotropy definition + Phenylketonuria / Starch synthesis example showing multiple traits."
      ],
      "examinerTips": "Remember: Polygenic = Quantitative inheritance (forms bell-shaped continuous gradient). Pleiotropy = Single locus pleiotropic pleomorphism."
    },
    "derivations": [
      {
        "name": "Genetic Mechanism: Quantitative Gradient vs Pleiotropic Multi-Effect",
        "setup": "Comparison of gene-to-phenotype mapping in polygenic vs pleiotropic loci.",
        "steps": [
          {
            "text": "Polygenic (Multiple genes $\\to$ 1 trait):",
            "equation": "3 \\text{ Genes } (A, B, C) \\implies 7 \\text{ Phenotypic skin gradations (bell-shaped curve)}"
          },
          {
            "text": "Pleiotropy (1 gene $\\to$ Multiple traits):",
            "equation": "1 \\text{ Defective Gene } (PAH) \\implies \\text{Mental retardation} + \\text{Skin hypopigmentation} + \\text{Urinary excretion}"
          }
        ],
        "finalFormula": "\\text{Polygenic} = \\text{Many Genes } \\to \\text{ 1 Trait} \\quad | \\quad \\text{Pleiotropy} = \\text{1 Gene } \\to \\text{ Many Traits}"
      }
    ]
  },
  {
    "id": "bio-core-8",
    "number": 8,
    "section": "core",
    "title": "Phenylketonuria (PKU): Biochemical Basis, Genetics & Symptoms",
    "shortLabel": "Phenylketonuria (PKU)",
    "chapterId": "bio-ch-4",
    "chapterTitle": "Principles of Inheritance and Variation",
    "unit": "Genetics and Evolution",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Big Orange",
    "frequency": "CBSE 2018, 2021, 2023",
    "questionPrompt": "(a) What is the genetic cause of Phenylketonuria (PKU)?\n(b) Explain the biochemical pathway disrupted in this inborn error of metabolism.\n(c) List the major clinical symptoms shown by an affected individual.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 4: Principles of Inheritance and Variation",
      "page": "Page 74"
    },
    "theory": [
      "• Genetic Etiology: Inborn error of metabolism inherited as an autosomal recessive trait located on chromosome 12.",
      "• Biochemical Defect: Deficiency of liver enzyme Phenylalanine Hydroxylase, which normally converts phenylalanine into tyrosine.",
      "• Pathological Accumulation: Phenylalanine accumulates and is transaminated into phenylpyruvic acid and related neurotoxic derivatives.",
      "• Clinical Manifestations: Severe mental retardation, hypopigmentation of hair and skin, and poor tubular reabsorption causing excretion in urine."
    ],
    "keyPointsAndKeywords": [
      "Autosomal recessive inborn error of metabolism",
      "Deficiency of phenylalanine hydroxylase enzyme",
      "Phenylalanine cannot convert to tyrosine",
      "Accumulation of phenylpyruvic acid",
      "Mental retardation, skin/hair hypopigmentation, excretion in urine"
    ],
    "modelAnswer": {
      "statement": "Phenylketonuria is a classic pleiotropic autosomal recessive disease where failure of phenylalanine hydroxylase leads to neurotoxic accumulation of phenylpyruvic acid.",
      "markingScheme": [
        "1 Mark: Autosomal recessive inheritance + absence of phenylalanine hydroxylase.",
        "1 Mark: Biochemical block (Phe → Tyr blocked, Phe converted to phenylpyruvate).",
        "1 Mark: Symptoms: Mental retardation, urine excretion, hair/skin hypopigmentation."
      ],
      "examinerTips": "Always highlight that PKU is an example of both an Autosomal Recessive Mendelian disorder and Pleiotropy."
    },
    "derivations": [
      {
        "name": "Biochemical Pathway Block in Phenylketonuria",
        "setup": "Metabolic fate of dietary essential amino acid phenylalanine.",
        "steps": [
          {
            "text": "Normal hepatic metabolic pathway:",
            "equation": "\\text{Phenylalanine} \\xrightarrow{\\text{Phenylalanine Hydroxylase}} \\text{Tyrosine} \\to \\text{Melanin, Dopamine, Thyroxine}"
          },
          {
            "text": "Metabolic block in PKU (enzyme deficiency):",
            "equation": "\\text{Phenylalanine accumulation} \\xrightarrow{\\text{Transamination}} \\text{Phenylpyruvic acid} + \\text{Phenyl-lactic acid}"
          },
          {
            "text": "Neurotoxic accumulation in CSF and brain:",
            "equation": "\\text{Phenylpyruvate} \\implies \\text{Damage to developing CNS / Mental retardation}"
          }
        ],
        "finalFormula": "\\text{Phe } \\not\\to \\text{ Tyr} \\implies \\text{Accumulation of Phenylpyruvate} \\implies \\text{Mental Retardation + Hypopigmentation}"
      }
    ]
  },
  {
    "id": "bio-core-9",
    "number": 9,
    "section": "core",
    "title": "Transforming Principle & Biochemical Characterisation",
    "shortLabel": "Griffith & Avery-MacLeod-McCarty",
    "chapterId": "bio-ch-5",
    "chapterTitle": "Molecular Basis of Inheritance",
    "unit": "Genetics and Evolution",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Big Orange",
    "frequency": "CBSE 2016, 2018, 2020, 2022, 2024 (Core 3M)",
    "questionPrompt": "(a) Describe Frederick Griffith's experiments on Streptococcus pneumoniae.\n(b) How did Avery, MacLeod, and McCarty chemically prove the biochemical nature of the transforming principle?",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 5: Molecular Basis of Inheritance",
      "page": "Pages 82–84"
    },
    "theory": [
      "• Bacterial Transformation: The uptake and phenotypic integration of exogenous naked DNA by competent bacterial recipient cells.",
      "• Griffith's Experiment (1928): In vivo mice transformation using virulent encapsulated S-strain and avirulent rough R-strain of Streptococcus pneumoniae.",
      "• Biochemical Proof (Avery, MacLeod, McCarty, 1944): In vitro enzymatic digestion demonstrating that DNA alone is the transforming genetic principle."
    ],
    "keyPointsAndKeywords": [
      "S-strain (smooth, virulent) vs R-strain (rough, avirulent)",
      "Heat-killed S + Live R kills mice",
      "Transforming principle transfer",
      "Protease and RNase do not affect transformation",
      "DNase inhibits transformation",
      "DNA is the transforming material"
    ],
    "modelAnswer": {
      "statement": "Griffith discovered bacterial transformation in Streptococcus pneumoniae, and Avery, MacLeod, and McCarty proved that the transforming molecule was DNA using specific enzymatic digestions.",
      "markingScheme": [
        "1.5 Marks: Griffith's 4 steps and observation of living S strain in dead mice.",
        "1.5 Marks: Avery, MacLeod & McCarty experiment: Protease/RNase (no effect) vs DNase (inhibits transformation) proving DNA is genetic material."
      ],
      "examinerTips": "Note spelling difference: DNase is the enzyme; DNA is the substance. DNase digests DNA and abolishes transformation."
    },
    "derivations": [
      {
        "name": "Protocol 1: Frederick Griffith's In Vivo Mice Assay (1928)",
        "setup": "Streptococcus pneumoniae strains injected into laboratory mice.",
        "steps": [
          {
            "text": "Injection 1 (Live S strain, smooth virulent):",
            "equation": "\\text{Live S-strain} \\implies \\text{Mice die of pneumonia}"
          },
          {
            "text": "Injection 2 (Live R strain, rough avirulent):",
            "equation": "\\text{Live R-strain} \\implies \\text{Mice survive}"
          },
          {
            "text": "Injection 3 (Heat-killed S strain):",
            "equation": "\\text{Heat-killed S-strain} \\implies \\text{Mice survive}"
          },
          {
            "text": "Injection 4 (Heat-killed S + Live R strain):",
            "equation": "\\text{Heat-killed S} + \\text{Live R} \\implies \\text{Mice die; Live S recovered!}"
          }
        ],
        "finalFormula": "\\text{Transforming principle transferred from heat-killed S to live R strain}"
      },
      {
        "name": "Protocol 2: Avery, MacLeod & McCarty Enzymatic Hydrolysis Assay (1944)",
        "setup": "Purified biochemical fractions from heat-killed S-cells treated with selective hydrolytic enzymes.",
        "steps": [
          {
            "text": "Extract treated with Protease (protein digestion):",
            "equation": "\\text{Extract} + \\text{Protease} \\implies \\text{Transformation still occurs}"
          },
          {
            "text": "Extract treated with RNase (RNA digestion):",
            "equation": "\\text{Extract} + \\text{RNase} \\implies \\text{Transformation still occurs}"
          },
          {
            "text": "Extract treated with DNase (DNA digestion):",
            "equation": "\\text{Extract} + \\text{DNase} \\implies \\text{Transformation completely abolished!}"
          }
        ],
        "specialCases": [
          {
            "title": "Enzyme vs Substance Nomenclature",
            "text": "DNase is the hydrolytic enzyme; DNA is the genetic substance destroyed by the enzyme."
          }
        ],
        "finalFormula": "\\text{Only DNase inhibits transformation} \\implies \\text{DNA is the Transforming Genetic Material}"
      }
    ]
  },
  {
    "id": "bio-core-10",
    "number": 10,
    "section": "core",
    "title": "Transcription in Eukaryotes (Splicing, Capping, Tailing & RNA Polymerases)",
    "shortLabel": "Eukaryotic Transcription",
    "chapterId": "bio-ch-5",
    "chapterTitle": "Molecular Basis of Inheritance",
    "unit": "Genetics and Evolution",
    "marks": "3 / 5 Marks",
    "marksNum": 5,
    "category": "Big Orange",
    "frequency": "CBSE 2017, 2019, 2021, 2023 (High Yield — 3M or 5M Question)",
    "questionPrompt": "Explain the complex process of transcription in eukaryotes. Describe the three types of RNA polymerases and the post-transcriptional modifications of hnRNA (Splicing, Capping, and Tailing).",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 5: Molecular Basis of Inheritance",
      "page": "Pages 92–94",
      "figures": "Fig 5.11"
    },
    "theory": [
      "• Eukaryotic Nuclear RNA Polymerases: Three distinct enzymes: RNA Pol I (rRNAs: 28S, 18S, 5.8S), RNA Pol II (precursor hnRNA / mRNA), RNA Pol III (tRNA, 5S rRNA, snRNA).",
      "• Splicing: Primary hnRNA contains functional coding sequences (exons) split by non-coding intervening sequences (introns); spliceosomes excise introns and join exons.",
      "• Capping & Tailing: Capping adds 7-methylguanosine triphosphate (7-mG) at 5'-end; Tailing adds poly-A tail (200–300 adenylate residues) at 3'-end in template-independent manner."
    ],
    "keyPointsAndKeywords": [
      "RNA Pol I (28S, 18S, 5.8S rRNA)",
      "RNA Pol II (hnRNA / mRNA)",
      "RNA Pol III (tRNA, 5S rRNA, snRNA)",
      "Splicing (introns removed, exons joined)",
      "Capping (methyl guanosine triphosphate at 5'-end)",
      "Tailing (poly-A tail at 3'-end)"
    ],
    "modelAnswer": {
      "statement": "Eukaryotic transcription requires three distinct RNA polymerases and extensive post-transcriptional modification (capping, tailing, splicing) to convert nascent hnRNA into translatable mRNA.",
      "markingScheme": [
        "1.5 Marks: Detailed functions and products of RNA Polymerase I, II, and III.",
        "1.5 Marks: Splicing mechanism: removal of intervening non-coding introns and enzymatic ligation of coding exons.",
        "1 Mark: Capping mechanism (addition of methyl guanosine triphosphate at 5'-end).",
        "1 Mark: Tailing mechanism (addition of 200–300 adenylate residues at 3'-end)."
      ],
      "examinerTips": "Remember: Splicing represents the dominance of the 'RNA World', showing that introns are evolutionary relics."
    },
    "diagramId": "transcription-unit",
    "diagram": {
      "hasDiagram": true,
      "diagramId": "transcription-unit",
      "title": "Transcription Unit & Eukaryotic hnRNA Modifications",
      "examDrawingGuide": [
        "1. Draw transcription unit: Promoter at 5' end of coding strand, Structural gene in center, and Terminator at 3' end.",
        "2. Draw precursor hnRNA with alternating Exons (coding) and Introns (non-coding).",
        "3. Show Capping at 5' end with 7-methylguanosine triphosphate and Tailing at 3' end with poly-A tail (200–300 adenylate residues).",
        "4. Show loop-out removal of Introns via spliceosomes to yield mature mRNA."
      ]
    },
    "derivations": [
      {
        "name": "Sequential Post-Transcriptional Processing of Eukaryotic hnRNA",
        "setup": "Conversion of nascent heterogeneous nuclear RNA into mature exportable mRNA.",
        "steps": [
          {
            "text": "1. 5'-End Capping:",
            "equation": "\\text{Addition of 7-methylguanosine triphosphate } (7\\text{-mGppp}) \\text{ at } 5'\\text{-terminus}"
          },
          {
            "text": "2. Spliceosome-mediated Splicing:",
            "equation": "\\text{Looping and excision of introns} \\xrightarrow{\\text{Ligase}} \\text{Continuous mature exon sequence}"
          },
          {
            "text": "3. 3'-End Polyadenylation (Tailing):",
            "equation": "\\text{Addition of poly-A tail (200–300 residues) at } 3'\\text{-terminus}"
          }
        ],
        "specialCases": [
          {
            "title": "Evolutionary Significance of Split Genes",
            "text": "The split-gene arrangement and presence of introns reflects the ancient dominance of the RNA world."
          }
        ],
        "finalFormula": "\\text{hnRNA} \\xrightarrow{\\text{Capping + Splicing + Tailing}} \\text{Mature mRNA (transported to cytoplasm)}"
      }
    ]
  },
  {
    "id": "bio-core-11",
    "number": 11,
    "section": "core",
    "title": "DNA Double Helix Structure (Watson-Crick Model & Salient Features)",
    "shortLabel": "Watson-Crick DNA Double Helix",
    "chapterId": "bio-ch-5",
    "chapterTitle": "Molecular Basis of Inheritance",
    "unit": "Genetics and Evolution",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Big Orange",
    "frequency": "CBSE 2015, 2019, 2022",
    "questionPrompt": "State the salient features of the double helix structure of B-DNA as proposed by Watson and Crick (1953). Include pitch, base pairing, and antiparallel polarity.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 5: Molecular Basis of Inheritance",
      "page": "Pages 80–82",
      "figures": "Fig 5.6 & Fig 5.7"
    },
    "theory": [
      "• Watson-Crick Model (1953): Proposed double helical structure of B-DNA based on X-ray diffraction data of Rosalind Franklin and Maurice Wilkins.",
      "• Antiparallel Chains: Two polynucleotide chains running in opposite directions ($5'\\to 3'$ and $3'\\to 5'$) with sugar-phosphate backbones outside and bases inside.",
      "• Complementary Base Pairing: Adenine pairs with Thymine via 2 hydrogen bonds ($A = T$); Guanine pairs with Cytosine via 3 hydrogen bonds ($G \\equiv C$), maintaining constant 2.0 nm width.",
      "• Helical Dimensions: Pitch = 3.4 nm (34 Å), roughly 10 base pairs per turn, and distance between adjacent base pairs = 0.34 nm (3.4 Å)."
    ],
    "keyPointsAndKeywords": [
      "Two polynucleotide chains with sugar-phosphate backbone",
      "Antiparallel polarity (5'→3' and 3'→5')",
      "A=T (2 H-bonds) and G≡C (3 H-bonds)",
      "Helical pitch = 3.4 nm, 10 bp per turn, distance between bp = 0.34 nm",
      "Base stacking gives thermodynamic stability"
    ],
    "modelAnswer": {
      "statement": "Watson and Crick based their double helix model on X-ray diffraction data by Rosalind Franklin and Maurice Wilkins, and Chargaff's equivalence rule ([A]+[G] = [T]+[C]).",
      "markingScheme": [
        "1 Mark: Antiparallel polarity + Sugar-phosphate backbone with inward bases.",
        "1 Mark: Complementary H-bonding (A=T, G≡C) ensuring uniform width.",
        "1 Mark: Helical dimensions: pitch = 3.4 nm, 10 bp/turn, distance = 0.34 nm."
      ],
      "examinerTips": "Remember: Purine always pairs with a pyrimidine (A with T, G with C), which keeps the distance between the two strands constant throughout."
    },
    "derivations": [
      {
        "name": "Geometric Parameters & Chargaff's Equivalence Rule",
        "setup": "Chemical stoichiometry and structural dimensions of double-stranded B-DNA.",
        "steps": [
          {
            "text": "Complementary base pairing:",
            "equation": "A = T \\; (2 \\text{ H-bonds}), \\quad G \\equiv C \\; (3 \\text{ H-bonds})"
          },
          {
            "text": "Chargaff's Rule for double-stranded DNA:",
            "equation": "[A] = [T], \\; [G] = [C] \\implies \\frac{[A] + [G]}{[T] + [C]} = 1.0"
          },
          {
            "text": "Helical axial distance per base pair:",
            "equation": "\\text{Distance per bp} = \\frac{\\text{Pitch (3.4 nm)}}{10 \\text{ bp/turn}} = 0.34 \\text{ nm (3.4 \\AA)}"
          }
        ],
        "finalFormula": "\\text{Chargaff's Rule: } \\frac{\\text{Purines}}{\\text{Pyrimidines}} = 1.0 \\quad | \\quad \\text{Pitch} = 3.4 \\text{ nm} \\quad | \\quad \\text{Diameter} = 2.0 \\text{ nm}"
      }
    ]
  },
  {
    "id": "bio-core-12",
    "number": 12,
    "section": "core",
    "title": "Semiconservative Replication: Meselson and Stahl's Experiment",
    "shortLabel": "Meselson-Stahl Experiment",
    "chapterId": "bio-ch-5",
    "chapterTitle": "Molecular Basis of Inheritance",
    "unit": "Genetics and Evolution",
    "marks": "3 / 4 / 5 Marks",
    "marksNum": 4,
    "category": "Big Orange",
    "frequency": "CBSE 2016, 2018, 2020, 2023 (Very High Frequency)",
    "questionPrompt": "Describe the experimental proof given by Matthew Meselson and Franklin Stahl (1958) to prove that DNA replication is semiconservative. Detail the isotopes used, generation times, and CsCl density gradient centrifugation results.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 5: Molecular Basis of Inheritance",
      "page": "Pages 86–88",
      "figures": "Fig 5.9"
    },
    "theory": [
      "• Semiconservative Mechanism: During DNA replication, the two parent strands separate, each serving as a template for synthesizing a new complementary daughter strand.",
      "• Meselson & Stahl Experiment (1958): Demonstrated semiconservative replication in E. coli using heavy isotope $^{15}\\text{N}$ and CsCl density gradient centrifugation.",
      "• Taylor's Confirmation (1958): Proved semiconservative replication at chromosomal level in Vicia faba using radioactive tritiated thymidine."
    ],
    "keyPointsAndKeywords": [
      "Heavy isotope ¹⁵N (not radioactive!) vs normal ¹⁴N",
      "CsCl density gradient centrifugation",
      "0 min: 100% heavy (¹⁵N-¹⁵N)",
      "20 min (Gen 1): 100% hybrid (¹⁵N-¹⁴N)",
      "40 min (Gen 2): 50% hybrid (¹⁵N-¹⁴N) and 50% light (¹⁴N-¹⁴N)",
      "Taylor et al. proved same on Vicia faba using tritiated thymidine"
    ],
    "modelAnswer": {
      "statement": "Meselson and Stahl utilized heavy isotope ¹⁵N and CsCl density equilibrium centrifugation in E. coli to definitively prove semiconservative DNA replication.",
      "markingScheme": [
        "1 Mark: Setup using ¹⁵NH₄Cl medium followed by transfer to ¹⁴NH₄Cl medium.",
        "1.5 Marks: Generation 1 (20 min) hybrid intermediate band explanation.",
        "1.5 Marks: Generation 2 (40 min) 1:1 ratio of light and hybrid bands + diagram representation."
      ],
      "examinerTips": "State clearly: ¹⁵N is a HEAVY stable isotope of nitrogen, NOT a radioactive isotope (do not confuse with radioactive ³²P or ³⁵S)."
    },
    "diagramId": "replicating-fork",
    "diagram": {
      "hasDiagram": true,
      "diagramId": "replicating-fork",
      "title": "DNA Replication Fork & Density Gradient Bands",
      "examDrawingGuide": [
        "1. Draw replication fork showing template strands with 3'->5' and 5'->3' polarities.",
        "2. Draw continuous synthesis of Leading strand (5'->3') pointing into the fork.",
        "3. Draw discontinuous synthesis of Lagging strand in Okazaki fragments joined by DNA Ligase.",
        "4. Draw 3 test tubes showing CsCl gradient: Gen 0 = 100% heavy 15N band at bottom; Gen 1 = 100% hybrid band in middle; Gen 2 = 50% hybrid and 50% light 14N band at top."
      ]
    },
    "derivations": [
      {
        "name": "Meselson and Stahl's Density Gradient Centrifugation Protocol",
        "setup": "E. coli grown in 15NH4Cl medium transferred to 14NH4Cl medium (division cycle = 20 min).",
        "steps": [
          {
            "text": "Generation 0 (After multiple cycles in 15N):",
            "equation": "100\\% \\; ^{15}\\text{N-}^{15}\\text{N} \\implies \\text{Heavy Density Band at bottom of CsCl gradient}"
          },
          {
            "text": "Generation 1 (After 1 cycle = 20 min in 14N):",
            "equation": "100\\% \\; ^{14}\\text{N-}^{15}\\text{N} \\implies \\text{Intermediate Hybrid Density Band}"
          },
          {
            "text": "Generation 2 (After 2 cycles = 40 min in 14N):",
            "equation": "50\\% \\; ^{14}\\text{N-}^{15}\\text{N} \\; (\\text{Hybrid}) + 50\\% \\; ^{14}\\text{N-}^{14}\\text{N} \\; (\\text{Light Band})"
          }
        ],
        "specialCases": [
          {
            "title": "Heavy vs Radioactive Isotope",
            "text": "15N is a heavy non-radioactive stable isotope separated strictly by density equilibrium in CsCl, not radiation detection."
          }
        ],
        "finalFormula": "\\text{Gen 1: 100\\% Hybrid} \\quad | \\quad \\text{Gen 2: 50\\% Hybrid + 50\\% Light} \\implies \\text{Proves Semiconservative Replication}"
      }
    ]
  },
  {
    "id": "bio-core-13",
    "number": 13,
    "section": "core",
    "title": "Lac Operon: Regulatory Mechanism, Inducer & Structural Genes",
    "shortLabel": "Lac Operon (Jacob & Monod)",
    "chapterId": "bio-ch-5",
    "chapterTitle": "Molecular Basis of Inheritance",
    "unit": "Genetics and Evolution",
    "marks": "3 / 5 Marks",
    "marksNum": 5,
    "category": "Big Orange",
    "frequency": "CBSE 2015, 2017, 2019, 2022, 2024 (Classic 5M Question)",
    "diagramId": "lac-operon",
    "questionPrompt": "(a) What is an operon? Explain the organization of the Lac Operon in E. coli as proposed by Francois Jacob and Jacques Monod.\n(b) Explain the working of the operon in: (i) Absence of lactose, (ii) Presence of lactose.\n(c) State the enzyme coded by genes z, y, and a, and give the role of allolactose.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 5: Molecular Basis of Inheritance",
      "page": "Pages 98–101",
      "figures": "Fig 5.14"
    },
    "theory": [
      "• Operon Concept: A coordinated unit of gene expression in prokaryotes comprising regulatory genes, a promoter, an operator, and structural genes (Jacob & Monod).",
      "• Structural Genes: z gene codes for Beta-galactosidase (hydrolyzes lactose); y gene codes for Permease (increases lactose uptake); a gene codes for Transacetylase.",
      "• Negative Regulation: Operon is switched OFF by default because the repressor protein binds to the operator, sterically blocking RNA polymerase."
    ],
    "keyPointsAndKeywords": [
      "i gene codes for repressor constitutively",
      "Operator acts as molecular on/off switch",
      "z codes for beta-galactosidase, y for permease, a for transacetylase",
      "Lactose / allolactose acts as inducer",
      "Negative control by repressor protein"
    ],
    "modelAnswer": {
      "statement": "The lac operon is an inducible metabolic unit where transcription of structural genes is repressed until the inducer (allolactose) inactivates the repressor.",
      "markingScheme": [
        "1.5 Marks: Operon layout (p-i-p-o-z-y-a) and enzymes coded by z, y, a.",
        "1.5 Marks: Switched OFF state (active repressor binds operator, blocks RNA Pol).",
        "1.5 Marks: Switched ON state (inducer binds repressor, inactive repressor frees operator, RNA Pol transcribes).",
        "0.5 Mark: Mention of negative regulation."
      ],
      "examinerTips": "Remember: A very low basal level of lac operon expression must ALWAYS be present in E. coli cell, otherwise lactose cannot enter the cell initially via permease!"
    },
    "diagram": {
      "hasDiagram": true,
      "diagramId": "lac-operon",
      "title": "Organization & Working of the Lac Operon",
      "examDrawingGuide": [
        "1. Draw operon genes in order: p - i - p - o - z - y - a.",
        "2. Absence of Inducer: Show i gene transcribing repressor protein, arrow binding to operator 'o', and a cross blocking RNA Polymerase from reaching z, y, a.",
        "3. Presence of Inducer: Show Inducer (lactose) binding repressor, rendering it inactive; show RNA Polymerase transcribing polycistronic mRNA.",
        "4. Label enzymes: z -> β-galactosidase, y -> Permease, a -> Transacetylase."
      ]
    },
    "derivations": [
      {
        "name": "Mechanism 1: Absence of Inducer (Repressed State - Operon OFF)",
        "setup": "E. coli cultured in glucose medium or without lactose.",
        "steps": [
          {
            "text": "Constitutive expression of regulator i-gene:",
            "equation": "i\\text{-gene} \\to \\text{Repressor mRNA} \\to \\text{Active Repressor Protein}"
          },
          {
            "text": "Repressor binds operator region:",
            "equation": "\\text{Repressor} + \\text{Operator } (o) \\implies \\text{Operator Blocked}"
          },
          {
            "text": "Inhibition of transcription:",
            "equation": "\\text{RNA Polymerase cannot transcribe } z, y, a \\implies \\text{Operon OFF}"
          }
        ],
        "specialCases": [
          {
            "title": "Basal Permease Requirement",
            "text": "A very low basal level of lac operon expression is always present; without it, lactose could never enter the bacterial cell."
          }
        ],
        "finalFormula": "\\text{Repressor binds Operator} \\implies \\text{Zero mRNA synthesis} \\implies \\text{Operon OFF}"
      },
      {
        "name": "Mechanism 2: Presence of Inducer (Induced State - Operon ON)",
        "setup": "Lactose enters E. coli cell and acts as inducer.",
        "steps": [
          {
            "text": "Inducer binds repressor protein:",
            "equation": "\\text{Repressor} + \\text{Inducer (Allolactose)} \\implies \\text{Inactive Repressor Complex}"
          },
          {
            "text": "Operator freed for RNA Polymerase:",
            "equation": "\\text{Operator free} \\implies \\text{RNA Polymerase binds Promoter and transcribes } z, y, a"
          },
          {
            "text": "Enzyme synthesis & lactose utilization:",
            "equation": "z \\to \\beta\\text{-galactosidase}, \\quad y \\to \\text{Permease}, \\quad a \\to \\text{Transacetylase}"
          }
        ],
        "finalFormula": "\\text{Inducer inactivates Repressor} \\implies \\text{Enzymes Synthesized} \\implies \\text{Operon ON}"
      }
    ]
  },
  {
    "id": "bio-core-14",
    "number": 14,
    "section": "core",
    "title": "DNA Fingerprinting: Steps, Principle & Applications",
    "shortLabel": "DNA Fingerprinting (Alec Jeffreys)",
    "chapterId": "bio-ch-5",
    "chapterTitle": "Molecular Basis of Inheritance",
    "unit": "Genetics and Evolution",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Big Orange",
    "frequency": "CBSE 2017, 2019, 2021, 2023",
    "questionPrompt": "(a) What is the basis of DNA fingerprinting?\n(b) List the sequential steps involved in Alec Jeffreys' DNA fingerprinting technique.\n(c) Name the probe used and explain the role of VNTRs.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 5: Molecular Basis of Inheritance",
      "page": "Pages 104–106",
      "figures": "Fig 5.16"
    },
    "theory": [
      "• Basis of DNA Fingerprinting: DNA polymorphism (inherited variations in non-coding repetitive DNA) and Variable Number Tandem Repeats (VNTRs, minisatellites).",
      "• VNTR Specificity: Minisatellites (10–60 bp) show extreme copy-number variation between individuals, yielding an individual-specific pattern (except identical twins).",
      "• Applications: Forensic suspect identification, paternity dispute resolution, and evolutionary population genetics."
    ],
    "keyPointsAndKeywords": [
      "DNA polymorphism in repetitive DNA",
      "VNTR (Variable Number Tandem Repeats) minisatellite",
      "Southern blotting onto nylon membrane",
      "Radioactive VNTR probe hybridisation",
      "Autoradiography detection band pattern",
      "Forensic & paternity testing"
    ],
    "modelAnswer": {
      "statement": "Alec Jeffreys developed DNA fingerprinting using minisatellite VNTR probes that generate individual-specific autoradiographic bar-code banding patterns.",
      "markingScheme": [
        "1 Mark: Principle of DNA polymorphism and VNTRs.",
        "1.5 Marks: Sequential 6 steps: Isolation → Restriction cutting → Electrophoresis → Southern blotting → VNTR probe hybridization → Autoradiography.",
        "0.5 Mark: Applications in forensics and paternity."
      ],
      "examinerTips": "Remember: The size of VNTR varies from 0.1 to 20 kb. Identical (monozygotic) twins share 100% identical DNA fingerprints."
    },
    "derivations": [
      {
        "name": "Step-by-Step Laboratory Protocol of DNA Fingerprinting (Alec Jeffreys)",
        "setup": "Forensic DNA typing from biological traces (blood, hair root, semen).",
        "steps": [
          {
            "text": "1. DNA Isolation:",
            "equation": "\\text{Lysis of cells} \\implies \\text{High molecular weight genomic DNA extracted}"
          },
          {
            "text": "2. Restriction Digestion:",
            "equation": "\\text{Incubation with Restriction Endonucleases to generate fragments}"
          },
          {
            "text": "3. Agarose Gel Electrophoresis:",
            "equation": "\\text{Separation of DNA fragments based on molecular size (-ve to +ve)}"
          },
          {
            "text": "4. Southern Blotting:",
            "equation": "\\text{Denatured single strands blotted onto synthetic nitrocellulose/nylon membrane}"
          },
          {
            "text": "5. Radioactive VNTR Hybridisation:",
            "equation": "\\text{Membrane incubated with } ^{32}\\text{P-labeled single-stranded VNTR probes}"
          },
          {
            "text": "6. Autoradiography Detection:",
            "equation": "\\text{X-ray film exposure yields characteristic bar-code dark banding pattern}"
          }
        ],
        "finalFormula": "\\text{Unique VNTR Banding Profile} \\implies \\text{Definitive Forensic Match / Paternity Confirmation}"
      }
    ]
  },
  {
    "id": "bio-core-15",
    "number": 15,
    "section": "core",
    "title": "Structure of Microsporangium: 4 Wall Layers & Tapetum",
    "shortLabel": "Microsporangium 4 Wall Layers",
    "chapterId": "bio-ch-1",
    "chapterTitle": "Sexual Reproduction in Flowering Plants",
    "unit": "Reproduction",
    "marks": "2 / 3 Marks",
    "marksNum": 3,
    "category": "Big Orange",
    "frequency": "CBSE 2016, 2018, 2020, 2022, 2024",
    "diagramId": "microsporangium-walls",
    "questionPrompt": "Draw a neat, labelled diagram of the transverse section of a mature microsporangium. List its four wall layers from outside to inside and describe the function of each layer.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 1: Sexual Reproduction in Flowering Plants",
      "page": "Pages 5–7",
      "figures": "Fig 1.3"
    },
    "theory": [
      "• Wall Architecture: A typical angiosperm microsporangium is encircled by four distinct wall layers: Epidermis, Endothecium, Middle layers, and Tapetum.",
      "• Protective & Dehiscence Outer Layers: The outer three layers (Epidermis, Endothecium, Middle layers) protect the pollen and facilitate anther dehiscence.",
      "• Nutritive Tapetum: The innermost layer (Tapetum) possesses dense cytoplasm, multiple nuclei/polyploidy, nourishes developing microspores, and secretes pollen wall precursors."
    ],
    "keyPointsAndKeywords": [
      "Epidermis (outer protection)",
      "Endothecium (alpha-cellulose thickenings, hygroscopic dehiscence)",
      "Middle layers (1-3 rows, nutritive)",
      "Tapetum (innermost, multinucleate, dense cytoplasm, nourishes microspores)",
      "Sporogenous tissue / PMC (2n)"
    ],
    "modelAnswer": {
      "statement": "The microsporangium is enclosed by four wall layers: the outer three perform protection and dehiscence, while the innermost tapetum nourishes developing pollen grains.",
      "markingScheme": [
        "1.5 Marks: Labelled diagram showing Epidermis, Endothecium, Middle layers, Tapetum, and Sporogenous tissue.",
        "1.5 Marks: Specific functions of each layer, especially Endothecium dehiscence and Tapetal nourishment."
      ],
      "examinerTips": "Always emphasize that the outer 3 layers perform protection and dehiscence, while tapetum alone is the nutritive layer."
    },
    "diagram": {
      "hasDiagram": true,
      "diagramId": "microsporangium-walls",
      "title": "Microsporangium Wall Layers & Dehiscence",
      "examDrawingGuide": [
        "1. Draw cross-section of bilobed anther showing four microsporangia at four corners.",
        "2. Draw the 4 concentric layers from outside to inside: Epidermis -> Endothecium -> Middle layers -> Tapetum.",
        "3. Show Endothecium with radial fibrous thickenings and Tapetum with dense cytoplasm and prominent multiple nuclei.",
        "4. Draw central mass of diploid Sporogenous tissue inside each microsporangium."
      ]
    },
    "derivations": [
      {
        "name": "Four Concentric Wall Layers & Functional Specialization",
        "setup": "Transverse section of young bilobed anther.",
        "steps": [
          {
            "text": "1. Epidermis (Outermost):",
            "equation": "\\text{Single cell layer thick} \\implies \\text{Protective mechanical barrier}"
          },
          {
            "text": "2. Endothecium (Sub-epidermal):",
            "equation": "\\text{Alpha-cellulose fibrous bands} \\implies \\text{Hygroscopic rupture (dehiscence) at stomium}"
          },
          {
            "text": "3. Middle Layers (Intermediate):",
            "equation": "2\\text{ to } 3 \\text{ ephemeral cell layers} \\implies \\text{Nutrient reserve, crushed at maturity}"
          },
          {
            "text": "4. Tapetum (Innermost nutritive):",
            "equation": "\\text{Dense cytoplasm + Multinucleate} \\implies \\text{Nourishes microspores, secretes Ubisch bodies & pollenkitt}"
          }
        ],
        "finalFormula": "\\text{Outer 3 layers = Protection + Dehiscence} \\quad | \\quad \\text{Tapetum = Microspore Nourishment}"
      }
    ]
  },
  {
    "id": "bio-core-16",
    "number": 16,
    "section": "core",
    "title": "Structure of Pollen Grains & Sporopollenin Exine",
    "shortLabel": "Pollen Grain & Sporopollenin",
    "chapterId": "bio-ch-1",
    "chapterTitle": "Sexual Reproduction in Flowering Plants",
    "unit": "Reproduction",
    "marks": "2 / 3 Marks",
    "marksNum": 3,
    "category": "Big Orange",
    "frequency": "CBSE 2017, 2019, 2021, 2023",
    "questionPrompt": "(a) Draw a labelled diagram of a mature 2-celled pollen grain.\n(b) Differentiate between the vegetative cell and generative cell.\n(c) What is sporopollenin and why are pollen grains well preserved as fossils?",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 1: Sexual Reproduction in Flowering Plants",
      "page": "Pages 7–9",
      "figures": "Fig 1.5"
    },
    "theory": [
      "• Sporoderm (Pollen Wall): Two-layered protective envelope comprising an outer sculpted Exine and an inner continuous Intine.",
      "• Sporopollenin Exine: Composed of sporopollenin, the most resistant biological material known, withstanding high temperatures, strong acids, alkalis, and enzymes.",
      "• Germ Pores: Apertures on exine where sporopollenin is absent, allowing pollen tube emergence upon germination on the stigma.",
      "• Two-Celled Organization: Mature pollen grain contains a large Vegetative cell (food storage) and a small spindle-shaped Generative cell."
    ],
    "keyPointsAndKeywords": [
      "Exine made of sporopollenin",
      "Sporopollenin is resistant to acids, alkali, enzymes",
      "Germ pores lack sporopollenin",
      "Intine made of cellulose and pectin",
      "Vegetative cell (large, food reserve) vs Generative cell (small, divides into 2 male gametes)"
    ],
    "modelAnswer": {
      "statement": "Pollen grains represent male gametophytes with a durable sporopollenin-rich exine and an unequal cellular division into vegetative and generative cells.",
      "markingScheme": [
        "1 Mark: Diagram showing Exine, Intine, Germ pore, Vegetative cell, and Generative cell.",
        "1 Mark: Differences between Vegetative and Generative cells.",
        "1 Mark: Sporopollenin definition and reason for fossil preservation."
      ],
      "examinerTips": "Remember: Pollen allergy is caused by Parthenium (carrot grass). Pollen grains can be preserved for years in liquid nitrogen at -196°C in pollen banks."
    },
    "diagramId": "pollen-grain",
    "diagram": {
      "hasDiagram": true,
      "diagramId": "pollen-grain",
      "title": "Structure of Pollen Grain & 2-Celled Stage",
      "examDrawingGuide": [
        "1. Draw outer spherical sculptured Exine layer with distinct Germ Pores where exine is absent.",
        "2. Draw continuous inner smooth Intine layer beneath exine.",
        "3. Draw large Vegetative cell with abundant food reserves and irregular nucleus.",
        "4. Draw spindle-shaped Generative cell with dense cytoplasm floating in vegetative cell."
      ]
    },
    "derivations": [
      {
        "name": "Pollen Wall Stratification & Shedding Stage",
        "setup": "Male gametophyte organization in angiosperms.",
        "steps": [
          {
            "text": "Exine (Outer hard resistant coat):",
            "equation": "\\text{Composed of Sporopollenin} \\implies \\text{Fossil preservation & environmental resistance}"
          },
          {
            "text": "Intine (Inner delicate coat):",
            "equation": "\\text{Continuous thin layer of Pectin and Cellulose}"
          },
          {
            "text": "Cellular constitution at shedding:",
            "equation": "\\text{Large Vegetative cell} + \\text{Spindle Generative cell}"
          }
        ],
        "specialCases": [
          {
            "title": "60% vs 40% Angiosperm Rule",
            "text": "In >60% of angiosperms, pollen is shed at the 2-celled stage; in <40%, the generative cell divides mitotically to yield 2 male gametes prior to shedding (3-celled stage)."
          }
        ],
        "finalFormula": "\\text{Exine (Sporopollenin)} + \\text{Intine (Pectocellulose)} \\implies \\text{2-Celled / 3-Celled Male Gametophyte}"
      }
    ]
  },
  {
    "id": "bio-core-17",
    "number": 17,
    "section": "core",
    "title": "Filiform Apparatus: Structure, Location & Function",
    "shortLabel": "Filiform Apparatus Function",
    "chapterId": "bio-ch-1",
    "chapterTitle": "Sexual Reproduction in Flowering Plants",
    "unit": "Reproduction",
    "marks": "2 / 3 Marks",
    "marksNum": 2,
    "category": "Big Orange",
    "frequency": "CBSE 2016, 2018, 2021, 2024 (Frequently asked 2M)",
    "diagramId": "embryo-sac",
    "questionPrompt": "Where is the filiform apparatus located in an angiosperm ovule? Describe its structural nature and state its precise function during fertilization.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 1: Sexual Reproduction in Flowering Plants",
      "page": "Page 10",
      "figures": "Fig 1.8(d)"
    },
    "theory": [
      "• Location: Specialized finger-like cellular wall projections located at the micropylar tip of the synergid cells.",
      "• Primary Function: Chemotropically directs and guides the entry of the pollen tube into the synergid during fertilisation.",
      "• Degeneration: The penetrated synergid degenerates, discharging the two male gametes into the cytoplasm of the synergid."
    ],
    "keyPointsAndKeywords": [
      "Micropylar tip of synergids",
      "Cellular finger-like wall thickenings",
      "Guides pollen tube entry into synergid",
      "Chemotropic guidance"
    ],
    "modelAnswer": {
      "statement": "The filiform apparatus is a specialized micropylar synergid wall thickening responsible for guiding pollen tube entry into the female gametophyte.",
      "markingScheme": [
        "1 Mark: Exact anatomical location (micropylar tip of synergids) and nature (finger-like cellular wall thickenings).",
        "1 Mark: Precise function (chemotactic guidance of pollen tube entry)."
      ],
      "examinerTips": "State clearly: The pollen tube enters into one of the synergids through the filiform apparatus."
    },
    "diagram": {
      "hasDiagram": true,
      "diagramId": "embryo-sac",
      "title": "Egg Apparatus & Filiform Apparatus",
      "examDrawingGuide": [
        "1. Draw micropylar end of embryo sac showing 3-celled egg apparatus (1 central Egg cell and 2 flanking Synergids).",
        "2. Draw finger-like cellular thickenings at micropylar tips of both synergids: Filiform Apparatus.",
        "3. Show pollen tube entering one of the synergids guided chemotropically by the filiform apparatus."
      ]
    },
    "derivations": [
      {
        "name": "Chemotropic Guidance & Pollen Tube Entry Pathway",
        "setup": "Micropylar interaction during siphonogamous fertilisation.",
        "steps": [
          {
            "text": "Pollen tube reaches ovule:",
            "equation": "\\text{Pollen tube grows through style} \\longrightarrow \\text{Enters ovule through micropyle}"
          },
          {
            "text": "Chemotropic recognition by filiform apparatus:",
            "equation": "\\text{Synergid filiform apparatus secretes chemotropic signals guiding pollen tube tip}"
          },
          {
            "text": "Pollen tube discharge into synergid:",
            "equation": "\\text{Pollen tube ruptures into one synergid} \\implies \\text{Discharges 2 male gametes}"
          }
        ],
        "finalFormula": "\\text{Filiform Apparatus} \\implies \\text{Chemotropic Guidance of Pollen Tube into Synergid}"
      }
    ]
  },
  {
    "id": "bio-core-18",
    "number": 18,
    "section": "core",
    "title": "Pollination: Autogamy, Geitonogamy & Xenogamy",
    "shortLabel": "Autogamy vs Geitonogamy",
    "chapterId": "bio-ch-1",
    "chapterTitle": "Sexual Reproduction in Flowering Plants",
    "unit": "Reproduction",
    "marks": "2 / 3 Marks",
    "marksNum": 3,
    "category": "Big Orange",
    "frequency": "CBSE 2015, 2017, 2019, 2022",
    "questionPrompt": "Define and distinguish between Autogamy, Geitonogamy, and Xenogamy. Why is geitonogamy functionally cross-pollination but genetically self-pollination?",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 1: Sexual Reproduction in Flowering Plants",
      "page": "Pages 11–13"
    },
    "theory": [
      "• Autogamy: Pollen transferred from anther to stigma of the same flower. Requires synchrony in pollen release and stigma receptivity, and close proximity.",
      "• Geitonogamy: Pollen transferred from anther to stigma of another flower on the same plant. Functionally cross-pollination (requires pollinator), genetically autogamous.",
      "• Xenogamy: Pollen transferred from anther to stigma of a flower on a different plant of the same species. Introduces genetic variation.",
      "• Cleistogamy: Flowers that never open (e.g. Viola, Oxalis, Commelina), ensuring 100% autogamous seed-set even in absence of pollinators."
    ],
    "keyPointsAndKeywords": [
      "Autogamy = Same flower",
      "Geitonogamy = Different flower, same plant",
      "Functionally cross-pollination (requires agent)",
      "Genetically self-pollination (identical alleles)",
      "Xenogamy = Different plant (genetic variation)"
    ],
    "modelAnswer": {
      "statement": "Pollination types depend on the source of pollen: Autogamy (same flower), Geitonogamy (same plant, different flower), and Xenogamy (different plant).",
      "markingScheme": [
        "1 Mark: Definitions of Autogamy and Xenogamy.",
        "2 Marks: Geitonogamy definition + justification of functionally cross (requires pollinator) vs genetically self (same plant parent)."
      ],
      "examinerTips": "Remember: Cleistogamous flowers are invariant autogamous because they never open; seed setting is assured even in the absence of pollinators."
    },
    "derivations": [
      {
        "name": "Comparative Matrix of Pollination Modes & Genetic Outcomes",
        "setup": "Transfer of microspores from stamen to carpel.",
        "steps": [
          {
            "text": "Autogamy (Same flower):",
            "equation": "\\text{Anther} \\to \\text{Stigma of same flower} \\implies \\text{Genetically identical (Inbreeding)}"
          },
          {
            "text": "Geitonogamy (Same plant, different flower):",
            "equation": "\\text{Functionally ecological cross-pollination} \\implies \\text{Genetically self-pollination (Identical alleles)}"
          },
          {
            "text": "Xenogamy (Different plant):",
            "equation": "\\text{Anther} \\to \\text{Stigma of genetically distinct plant} \\implies \\text{Genetic recombination & diversity}"
          }
        ],
        "finalFormula": "\\text{Autogamy = Same flower} \\quad | \\quad \\text{Geitonogamy = Same plant} \\quad | \\quad \\text{Xenogamy = True Cross}"
      }
    ]
  },
  {
    "id": "bio-core-19",
    "number": 19,
    "section": "core",
    "title": "Outbreeding Devices: Mechanisms to Prevent Inbreeding",
    "shortLabel": "Outbreeding Devices",
    "chapterId": "bio-ch-1",
    "chapterTitle": "Sexual Reproduction in Flowering Plants",
    "unit": "Reproduction",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Big Orange",
    "frequency": "CBSE 2016, 2018, 2020, 2023 (Guaranteed 3M)",
    "questionPrompt": "Continued self-pollination leads to inbreeding depression. Enumerate any four outbreeding devices developed by flowering plants to discourage self-pollination and encourage cross-pollination.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 1: Sexual Reproduction in Flowering Plants",
      "page": "Pages 13–15"
    },
    "theory": [
      "• Inbreeding Depression: Continuous self-pollination reduces fertility and vigour in angiosperms; outbreeding devices promote cross-pollination.",
      "• Dichogamy (Temporal Separation): Pollen release and stigma receptivity are non-synchronised (Protandry: anthers mature first; Protogyny: stigma matures first).",
      "• Herkogamy (Spatial Separation): Anther and stigma placed at different physical positions so pollen cannot contact the stigma of the same flower.",
      "• Self-Incompatibility (Genetic Barrier): Maternal genetic mechanism preventing self-pollen from fertilising the ovules by inhibiting pollen germination or pollen tube growth in the pistil.",
      "• Dicliny (Unisexual Flowers): Production of unisexual flowers (Monoecious: e.g. castor, maize prevents autogamy; Dioecious: e.g. papaya prevents both autogamy and geitonogamy)."
    ],
    "keyPointsAndKeywords": [
      "Prevent inbreeding depression",
      "Dichogamy: Non-synchronisation of pollen and stigma",
      "Herkogamy: Anther and stigma at different positions",
      "Self-incompatibility: Genetic inhibition of self-pollen germination",
      "Dioecy: Papaya prevents both autogamy and geitonogamy"
    ],
    "modelAnswer": {
      "statement": "Outbreeding devices are structural and genetic adaptations that ensure cross-pollination to maintain genetic heterozygosity.",
      "markingScheme": [
        "1.5 Marks: Explanation of Dichogamy (Protandry/Protogyny) and Herkogamy.",
        "1.5 Marks: Explanation of Self-Incompatibility (genetic) and Dioecy (e.g., Papaya)."
      ],
      "examinerTips": "Remember: Castor and maize prevent autogamy but NOT geitonogamy. Papaya prevents BOTH autogamy and geitonogamy."
    },
    "derivations": [
      {
        "name": "Four Major Floral Mechanisms Preventing Inbreeding",
        "setup": "Structural and genetic adaptations promoting xenogamy.",
        "steps": [
          {
            "text": "1. Non-synchronisation (Dichogamy):",
            "equation": "\\text{Protandry (pollen first) or Protogyny (stigma first)} \\implies \\text{Zero self-pollination}"
          },
          {
            "text": "2. Positional barrier (Herkogamy):",
            "equation": "\\text{Physical distance / height differences between anther and stigma}"
          },
          {
            "text": "3. Genetic rejection (Self-incompatibility):",
            "equation": "\\text{Inhibition of pollen tube in style if pollen carries matching } S\\text{-allele}"
          },
          {
            "text": "4. Unisexuality (Dioecy):",
            "equation": "\\text{Male and female flowers on separate plants (e.g. Papaya)} \\implies \\text{Only Xenogamy possible}"
          }
        ],
        "finalFormula": "\\text{Outbreeding Devices} \\implies \\text{Prevents Inbreeding Depression & Promotes Hybrid Vigour}"
      }
    ]
  },
  {
    "id": "bio-core-20",
    "number": 20,
    "section": "core",
    "title": "Double Fertilisation: Syngamy and Triple Fusion",
    "shortLabel": "Double Fertilisation & Triple Fusion",
    "chapterId": "bio-ch-1",
    "chapterTitle": "Sexual Reproduction in Flowering Plants",
    "unit": "Reproduction",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Big Orange",
    "frequency": "CBSE 2015, 2017, 2019, 2021, 2024",
    "questionPrompt": "Why is the process of fertilisation in angiosperms referred to as 'Double Fertilisation'? Name the events and resulting ploidy of the products.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 1: Sexual Reproduction in Flowering Plants",
      "page": "Page 16",
      "figures": "Fig 1.12"
    },
    "theory": [
      "• Unique Angiosperm Event: Double fertilisation involves two independent nuclear fusions within the female gametophyte (discovered by S.G. Nawaschin, 1898).",
      "• Syngamy (Generative Fertilisation): Fusion of one haploid male gamete with the haploid egg cell nucleus, producing a diploid zygote ($2n$).",
      "• Triple Fusion (Vegetative Fertilisation): Fusion of the second haploid male gamete with the two polar nuclei of the central cell, producing a triploid Primary Endosperm Nucleus ($PEN, 3n$).",
      "• Post-Fertilisation Fates: Zygote develops into the embryo; central cell with PEN develops into the nutritive endosperm tissue."
    ],
    "keyPointsAndKeywords": [
      "Syngamy: Male gamete (n) + Egg (n) → Zygote (2n)",
      "Triple fusion: Male gamete (n) + 2 Polar nuclei (n+n) → PEN (3n)",
      "Primary Endosperm Cell (PEC) develops into endosperm",
      "Unique to flowering plants (angiosperms)"
    ],
    "modelAnswer": {
      "statement": "Double fertilisation comprises two simultaneous fusions: Syngamy (forming diploid zygote, 2n) and Triple Fusion (forming triploid primary endosperm nucleus, 3n).",
      "markingScheme": [
        "1 Mark: Definition and equation of Syngamy: Male gamete (n) + Egg cell (n) = Zygote (2n).",
        "1 Mark: Definition and equation of Triple Fusion: Male gamete (n) + 2 Polar nuclei (2n) = PEN (3n)."
      ],
      "examinerTips": "Do not forget to mention the ploidy: Zygote is 2n (diploid) and PEN is 3n (triploid)."
    },
    "diagramId": "embryo-sac",
    "diagram": {
      "hasDiagram": true,
      "diagramId": "embryo-sac",
      "title": "Double Fertilisation in Angiosperms",
      "examDrawingGuide": [
        "1. Draw embryo sac showing micropylar egg apparatus and central cell.",
        "2. Show Syngamy: 1 male gamete (n) fusing with Egg cell nucleus (n) to form diploid Zygote (2n).",
        "3. Show Triple Fusion: 2nd male gamete (n) fusing with 2 Polar Nuclei (n+n) in Central Cell to form triploid Primary Endosperm Nucleus (PEN, 3n).",
        "4. Label: Syngamy -> Embryo; Triple Fusion -> Nutritive Endosperm."
      ]
    },
    "derivations": [
      {
        "name": "Stepwise Nuclear Fusions of Double Fertilisation",
        "setup": "Discharge of two non-motile male gametes into embryo sac.",
        "steps": [
          {
            "text": "Syngamy (Generative fusion):",
            "equation": "\\text{Male Gamete } (n) + \\text{Egg Cell } (n) \\xrightarrow{} \\text{Zygote } (2n) \\to \\text{Embryo}"
          },
          {
            "text": "Triple Fusion (Vegetative fusion):",
            "equation": "\\text{Male Gamete } (n) + 2 \\text{ Polar Nuclei } (n+n) \\xrightarrow{} \\text{PEN } (3n) \\to \\text{Endosperm}"
          }
        ],
        "specialCases": [
          {
            "title": "Nuclear Tally",
            "text": "Total of 5 nuclei participate: 1 egg + 1 sperm = 2 in syngamy; 2 polar nuclei + 1 sperm = 3 in triple fusion."
          }
        ],
        "finalFormula": "\\text{Double Fertilisation} = \\text{Syngamy } (2n \\text{ Zygote}) + \\text{Triple Fusion } (3n \\text{ PEN})"
      }
    ]
  },
  {
    "id": "bio-core-21",
    "number": 21,
    "section": "core",
    "title": "False Fruit vs True Fruit vs Parthenocarpic Fruit",
    "shortLabel": "False Fruit & Parthenocarpy",
    "chapterId": "bio-ch-1",
    "chapterTitle": "Sexual Reproduction in Flowering Plants",
    "unit": "Reproduction",
    "marks": "1 / 2 Marks",
    "marksNum": 2,
    "category": "Big Orange",
    "frequency": "CBSE 2018, 2020, 2023",
    "questionPrompt": "Differentiate between True Fruit, False Fruit, and Parthenocarpic Fruit with one example of each.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 1: Sexual Reproduction in Flowering Plants",
      "page": "Pages 18–19",
      "figures": "Fig 1.15"
    },
    "theory": [
      "• True Fruit: Fruit derived strictly from the ripened ovary after fertilisation without contribution from other floral parts (e.g. Mango, Tomato).",
      "• False Fruit (Pseudocarp): Fruit where floral parts other than ovary (especially the fleshy thalamus) contribute significantly to fruit formation (e.g. Apple, Strawberry, Cashew nut).",
      "• Parthenocarpic Fruit: Fruit that develops without fertilisation of ovules; naturally seedless (e.g. Banana, seedless grapes), and can be induced with auxins and gibberellins."
    ],
    "keyPointsAndKeywords": [
      "True fruit: Exclusively from ovary (Mango)",
      "False fruit: Thalamus contributes to fruit formation (Apple, Strawberry)",
      "Parthenocarpic: Fruit develops without fertilisation; seedless (Banana)",
      "Induced by auxins and gibberellins"
    ],
    "modelAnswer": {
      "statement": "Fruits are classified based on origin: True (ovary only), False (thalamus contributes), and Parthenocarpic (no fertilisation, seedless).",
      "markingScheme": [
        "1 Mark: False fruit definition (thalamus contributes) + examples (apple, strawberry, cashew).",
        "1 Mark: True fruit vs Parthenocarpic fruit definitions + examples (mango vs banana)."
      ],
      "examinerTips": "In apples, the fleshy edible portion is the thalamus, not the pericarp. This is a very common 1-mark question."
    },
    "derivations": [
      {
        "name": "Classification of Angiospermic Fruits by Ontogeny",
        "setup": "Anatomical origin and developmental triggers of fruit tissues.",
        "steps": [
          {
            "text": "True Fruit:",
            "equation": "\\text{Ovary alone} \\xrightarrow{\\text{Fertilisation}} \\text{Pericarp enclosing seeds (e.g. Mango)}"
          },
          {
            "text": "False Fruit (Pseudocarp):",
            "equation": "\\text{Ovary} + \\text{Fleshy Thalamus} \\xrightarrow{\\text{Fertilisation}} \\text{Edible fruit (e.g. Apple, Strawberry)}"
          },
          {
            "text": "Parthenocarpic Fruit:",
            "equation": "\\text{Unfertilised Ovary} \\xrightarrow{\\text{Hormonal Trigger}} \\text{Seedless Fruit (e.g. Banana)}"
          }
        ],
        "finalFormula": "\\text{True = Ovary only} \\quad | \\quad \\text{False = Thalamus involved} \\quad | \\quad \\text{Parthenocarpic = Zero fertilisation}"
      }
    ]
  },
  {
    "id": "bio-core-22",
    "number": 22,
    "section": "core",
    "title": "Female Accessory Ducts: Fallopian Tubes & Fimbriae Function",
    "shortLabel": "Fimbriae & Fallopian Tube",
    "chapterId": "bio-ch-2",
    "chapterTitle": "Human Reproduction",
    "unit": "Reproduction",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Big Orange",
    "frequency": "CBSE 2017, 2019, 2022",
    "questionPrompt": "Describe the three anatomical parts of the Fallopian tube (Oviduct). What is the specific function of fimbriae?",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 2: Human Reproduction",
      "page": "Pages 26–27",
      "figures": "Fig 2.3"
    },
    "theory": [
      "• Fallopian Tubes (Oviducts): 10–12 cm muscular conduits comprising Infundibulum, Ampulla, and Isthmus.",
      "• Fimbriae: Finger-like projections at the margin of the infundibulum that sweep over the ovary surface to collect the secondary oocyte released during ovulation.",
      "• Site of Fertilisation: Fertilisation occurs in the Ampullary-isthmic junction of the fallopian tube.",
      "• Ciliated Epithelium: Ciliated simple columnar cells propel the non-motile ovum/zygote toward the uterus."
    ],
    "keyPointsAndKeywords": [
      "Infundibulum, Ampulla, Isthmus",
      "Fimbriae: Finger-like projections at edges of infundibulum",
      "Collection of ovum after ovulation",
      "Site of fertilisation = Ampulla"
    ],
    "modelAnswer": {
      "statement": "The oviduct comprises infundibulum, ampulla, and isthmus; fimbriae capture the ovum post-ovulation.",
      "markingScheme": [
        "1 Mark: Three parts of oviduct (Infundibulum, Ampulla, Isthmus) with anatomical sequence.",
        "1 Mark: Specific function of fimbriae (capturing/collecting released ovum post-ovulation)."
      ],
      "examinerTips": "NCERT revised: Fertilisation occurs in the 'ampullary region' (older textbooks said ampullary-isthmic junction)."
    },
    "derivations": [
      {
        "name": "Pathway of Ovum Capture & Transport in Fallopian Tube",
        "setup": "Ovulatory release and luminal transport mechanism.",
        "steps": [
          {
            "text": "1. Ovary releases secondary oocyte:",
            "equation": "\\text{Graafian follicle ruptures} \\implies \\text{Ovum expelled into peritoneal cavity}"
          },
          {
            "text": "2. Ciliary suction by Fimbriae:",
            "equation": "\\text{Fimbriae sweeps over ovary} \\implies \\text{Directs ovum into Ostium of Infundibulum}"
          },
          {
            "text": "3. Ampullary transport & fertilisation:",
            "equation": "\\text{Infundibulum} \\to \\text{Ampulla (Site of Fertilisation)} \\to \\text{Isthmus} \\to \\text{Uterine Cavity}"
          }
        ],
        "finalFormula": "\\text{Fimbriae (Capture)} \\to \\text{Infundibulum} \\to \\text{Ampulla (Fertilisation)} \\to \\text{Uterus}"
      }
    ]
  },
  {
    "id": "bio-core-23",
    "number": 23,
    "section": "core",
    "title": "Structure of Uterus: Perimetrium, Myometrium & Endometrium",
    "shortLabel": "Uterine Wall 3 Layers",
    "chapterId": "bio-ch-2",
    "chapterTitle": "Human Reproduction",
    "unit": "Reproduction",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Big Orange",
    "frequency": "CBSE 2016, 2018, 2021, 2023",
    "questionPrompt": "Describe the three tissue layers that constitute the uterine wall and explain the functional significance of each layer during menstruation and parturition.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 2: Human Reproduction",
      "page": "Page 27",
      "figures": "Fig 2.3"
    },
    "theory": [
      "• Perimetrium (Outer): External thin membranous serous covering providing structural protection.",
      "• Myometrium (Middle): Thick muscular layer of interlaced smooth muscle fibres; exhibits strong coordinated contractions during parturition under oxytocin stimulation.",
      "• Endometrium (Inner): Highly vascular, glandular mucous membrane lining the uterine cavity; undergoes cyclic breakdown during menstrual cycle and supports blastocyst implantation."
    ],
    "keyPointsAndKeywords": [
      "Perimetrium: Outer membranous protective layer",
      "Myometrium: Middle thick smooth muscle, contracts during parturition (oxytocin)",
      "Endometrium: Inner glandular vascular layer, cyclic changes during menstrual cycle, implantation site"
    ],
    "modelAnswer": {
      "statement": "The uterine wall comprises outer perimetrium, middle myometrium (labor contractions), and inner endometrium (menstrual cycle and implantation).",
      "markingScheme": [
        "1 Mark: Perimetrium description and protective function.",
        "1 Mark: Myometrium smooth muscle composition and role in labor/parturition.",
        "1 Mark: Endometrium vascular/glandular nature, menstrual cyclic changes, and implantation."
      ],
      "examinerTips": "Clearly link Myometrium to parturition contractions and Endometrium to menstruation and implantation."
    },
    "diagramId": "placenta-fetus",
    "diagram": {
      "hasDiagram": true,
      "diagramId": "placenta-fetus",
      "title": "Uterine Anatomy & Fetal Membranes",
      "examDrawingGuide": [
        "1. Draw inverted pear-shaped uterus showing fundus, body, and cervix.",
        "2. Draw 3 distinct uterine wall layers from outer to inner: Perimetrium, Myometrium, and Endometrium.",
        "3. Show thick muscular Myometrium and glandular vascular Endometrium bordering uterine cavity.",
        "4. Label Myometrium as site of oxytocin contractions during parturition and Endometrium as site of cyclic changes and implantation."
      ]
    },
    "derivations": [
      {
        "name": "Three Uterine Wall Layers & Functional Roles",
        "setup": "Microscopic cross-section of human uterine wall.",
        "steps": [
          {
            "text": "1. Perimetrium (Outer serosa):",
            "equation": "\\text{Thin peritoneal membrane} \\implies \\text{Protective outer envelope}"
          },
          {
            "text": "2. Myometrium (Middle muscular):",
            "equation": "\\text{Smooth muscle bundles} \\implies \\text{Forceful contractions during childbirth (Parturition)}"
          },
          {
            "text": "3. Endometrium (Inner glandular):",
            "equation": "\\text{Glandular layer} \\implies \\text{Cyclic menstrual shedding & Blastocyst Implantation}"
          }
        ],
        "finalFormula": "\\text{Perimetrium (Protection)} + \\text{Myometrium (Labour Contraction)} + \\text{Endometrium (Implantation)}"
      }
    ]
  },
  {
    "id": "bio-core-24",
    "number": 24,
    "section": "core",
    "title": "Embryonic Development: Cleavage, Morula, Blastocyst & Implantation",
    "shortLabel": "Zygote to Blastocyst Implantation",
    "chapterId": "bio-ch-2",
    "chapterTitle": "Human Reproduction",
    "unit": "Reproduction",
    "marks": "2 / 3 Marks",
    "marksNum": 3,
    "category": "Big Orange",
    "frequency": "CBSE 2017, 2020, 2022, 2024",
    "diagramId": "blastocyst",
    "questionPrompt": "Describe the progressive development of a human zygote into a blastocyst and its subsequent implantation into the endometrium.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 2: Human Reproduction",
      "page": "Pages 34–36",
      "figures": "Fig 2.11"
    },
    "theory": [
      "• Cleavage: Rapid mitotic divisions of the zygote without cytoplasmic growth as it moves through the isthmus toward the uterus ($2 \\to 4 \\to 8 \\to 16$ daughter blastomeres).",
      "• Morula: Solid mulberry-like ball of 8–16 blastomeres.",
      "• Blastocyst (64+ cells): Cavitated spherical structure with an outer Trophoblast layer, fluid-filled Blastocoel, and an Inner Cell Mass (stem cells that form the embryo).",
      "• Implantation: Embedding of the blastocyst into the vascular uterine endometrium roughly 7 days after fertilisation, mediated by trophoblastic proteolytic enzymes."
    ],
    "keyPointsAndKeywords": [
      "Cleavage produces blastomeres",
      "Morula: Solid ball of 8-16 blastomeres",
      "Blastocyst: Trophoblast + Inner Cell Mass + Blastocoel",
      "Trophoblast attaches to endometrium",
      "Inner cell mass forms embryo proper",
      "Implantation establishes pregnancy"
    ],
    "modelAnswer": {
      "statement": "Cleavage converts zygote into morula (8-16 cells) and subsequently into a blastocyst consisting of outer trophoblast and inner cell mass, which embeds into endometrium.",
      "markingScheme": [
        "1 Mark: Cleavage definition, blastomeres, and morula stage.",
        "1 Mark: Blastocyst structure (Trophoblast and Inner cell mass differentiation).",
        "1 Mark: Implantation mechanism into the endometrium."
      ],
      "examinerTips": "Remember: Stem cells capable of giving rise to all tissues and organs are located in the Inner Cell Mass (ICM)."
    },
    "diagram": {
      "hasDiagram": true,
      "diagramId": "blastocyst",
      "title": "Blastocyst Structure & Implantation",
      "examDrawingGuide": [
        "1. Draw circular blastocyst showing outer single cell layer: Trophoblast.",
        "2. Draw inner cell cluster attached to one side: Inner Cell Mass (embryoblast).",
        "3. Label central fluid-filled cavity: Blastocoel.",
        "4. Show Trophoblast attaching to uterine endometrium with chorionic villi for implantation."
      ]
    },
    "derivations": [
      {
        "name": "Stepwise Cleavage Timeline from Zygote to Implantation",
        "setup": "Early embryonic development in human female oviduct and uterus.",
        "steps": [
          {
            "text": "Day 0 (Zygote in ampulla):",
            "equation": "\\text{Single-cell diploid zygote } (2n = 46)"
          },
          {
            "text": "Day 1–3 (Cleavage divisions):",
            "equation": "2\\text{-cell} \\to 4\\text{-cell} \\to 8\\text{-cell} \\to 16\\text{-cell Morula}"
          },
          {
            "text": "Day 4–5 (Blastocyst formation):",
            "equation": "\\text{Cavitation} \\implies \\text{Trophoblast (placenta)} + \\text{Inner Cell Mass (embryo)}"
          },
          {
            "text": "Day 7 (Implantation in endometrium):",
            "equation": "\\text{Trophoblast adheres to endometrium} \\implies \\text{Blastocyst embedded, pregnancy established}"
          }
        ],
        "finalFormula": "\\text{Zygote} \\to \\text{Morula (16 cells)} \\to \\text{Blastocyst} \\xrightarrow{\\text{Day 7}} \\text{Implantation in Endometrium}"
      }
    ]
  },
  {
    "id": "bio-core-25",
    "number": 25,
    "number_label": "25",
    "section": "core",
    "title": "The Menstrual Cycle: Hormonal Control & Phasic Changes",
    "shortLabel": "Menstrual Cycle & Hormones",
    "chapterId": "bio-ch-2",
    "chapterTitle": "Human Reproduction",
    "unit": "Reproduction",
    "marks": "3 / 5 Marks",
    "marksNum": 5,
    "category": "Big Orange",
    "frequency": "CBSE 2015, 2018, 2021, 2023 (Guaranteed 3M or 5M Question)",
    "diagramId": "menstrual-cycle",
    "questionPrompt": "(a) Explain the phases of the human menstrual cycle.\n(b) Detail the hormonal feedback involving FSH, LH, Estrogen, and Progesterone.\n(c) What causes the LH surge and what is its physiological effect?",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 2: Human Reproduction",
      "page": "Pages 31–33",
      "figures": "Fig 2.9"
    },
    "theory": [
      "• Menstrual Phase (Days 1–5): Fall in progesterone triggers breakdown of endometrial lining and blood vessels, discharged as menstrual flow (50–100 mL).",
      "• Follicular / Proliferative Phase (Days 6–13): Pituitary FSH stimulates ovarian follicle development; mature Graafian follicle secretes Estrogen, regenerating the endometrium.",
      "• Ovulatory Phase (Day 14): Mid-cycle peak in LH (LH Surge) induces rupture of mature Graafian follicle and release of secondary oocyte (ovulation).",
      "• Luteal / Secretory Phase (Days 15–28): Ruptured Graafian follicle transforms into Corpus Luteum, secreting large amounts of Progesterone to maintain the endometrium for pregnancy."
    ],
    "keyPointsAndKeywords": [
      "Menstrual phase (Days 1-5): Endometrium sheds due to low progesterone",
      "Follicular phase (Days 6-13): FSH matures follicle, Estrogen repairs endometrium",
      "Day 14: LH Surge triggers ovulation",
      "Luteal phase (Days 15-28): Corpus luteum secretes Progesterone",
      "Corpus luteum degenerates if no fertilisation"
    ],
    "modelAnswer": {
      "statement": "The menstrual cycle is orchestrated by gonadotropins (FSH, LH) and ovarian steroids (Estrogen, Progesterone) controlling ovarian and uterine cycles.",
      "markingScheme": [
        "1 Mark: Menstrual phase (Days 1–5) and Follicular phase (Days 6–13) events and hormonal regulation.",
        "1 Mark: Day 14 Ovulatory phase: LH surge mechanism and release of secondary oocyte.",
        "1.5 Marks: Luteal phase (Days 15–28): Corpus luteum formation and progesterone maintenance of endometrium.",
        "1.5 Marks: Fate in absence of fertilisation (corpus albicans, progesterone fall) vs presence of pregnancy."
      ],
      "examinerTips": "Progesterone is often called the 'pregnancy hormone' because it maintains the endometrium and prevents uterine contractions."
    },
    "diagram": {
      "hasDiagram": true,
      "diagramId": "menstrual-cycle",
      "title": "Hormonal Regulators & Menstrual Cycle Phases",
      "examDrawingGuide": [
        "1. Draw 4 parallel horizontal tracks: Pituitary hormones (FSH, LH), Ovarian events, Ovarian hormones (Estrogen, Progesterone), and Endometrial thickness.",
        "2. Mark Day 14 with LH surge (highest peak) and secondary Estrogen peak inducing ovulation.",
        "3. Show Progesterone rising only during Luteal Phase (Days 15–28) secreted by Corpus Luteum.",
        "4. Show endometrial breakdown (Days 1–5), proliferative repair (Days 6–13), and secretory thickness (Days 15–28)."
      ]
    },
    "derivations": [
      {
        "name": "Four Phases of the Menstrual Cycle & Hormonal Interplay",
        "setup": "28-day cyclic event in human females regulated by pituitary-ovarian axis.",
        "steps": [
          {
            "text": "Phase 1: Menstrual Phase (Days 1–5):",
            "equation": "\\text{Progesterone drop} \\implies \\text{Endometrial shedding & bleeding}"
          },
          {
            "text": "Phase 2: Follicular Phase (Days 6–13):",
            "equation": "\\text{FSH rise} \\implies \\text{Follicular growth} \\implies \\text{High Estrogen} \\implies \\text{Endometrial proliferation}"
          },
          {
            "text": "Phase 3: Ovulatory Surge (Day 14):",
            "equation": "\\text{LH Surge (peak LH)} \\implies \\text{Graafian follicle ruptures} \\implies \\text{Ovulation}"
          },
          {
            "text": "Phase 4: Luteal Phase (Days 15–28):",
            "equation": "\\text{Corpus Luteum} \\implies \\text{High Progesterone} \\implies \\text{Secretory endometrium maintained}"
          }
        ],
        "specialCases": [
          {
            "title": "Absence of Pregnancy",
            "text": "Corpus luteum degenerates into Corpus albicans; progesterone plummets, causing endometrial shedding (new cycle begins)."
          }
        ],
        "finalFormula": "\\text{Day 14 LH Surge} = \\text{Ovulation} \\quad | \\quad \\text{Corpus Luteum Progesterone} = \\text{Endometrial Maintenance}"
      }
    ]
  },
  {
    "id": "bio-core-26",
    "number": 26,
    "section": "core",
    "title": "Spermatogenesis vs Oogenesis: Stepwise Comparison",
    "shortLabel": "Spermatogenesis vs Oogenesis",
    "chapterId": "bio-ch-2",
    "chapterTitle": "Human Reproduction",
    "unit": "Reproduction",
    "marks": "4 / 5 Marks",
    "marksNum": 5,
    "category": "Big Orange",
    "frequency": "CBSE 2016, 2019, 2022, 2024",
    "questionPrompt": "Compare Spermatogenesis and Oogenesis with respect to: time of initiation, number of functional gametes produced, division symmetry, and ploidy of cells.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 2: Human Reproduction",
      "page": "Pages 28–31",
      "figures": "Fig 2.5 & Fig 2.7"
    },
    "theory": [
      "• Spermatogenesis: Continuous production of motile spermatozoa in male testes initiated at puberty under GnRH, LH (Leydig cells $\\to$ testosterone), and FSH (Sertoli cells).",
      "• Oogenesis: Discontinuous production of ovum in female ovaries initiated during embryonic life, arrested at Diplotene I until puberty, and completed only after sperm entry.",
      "• Cytoplasmic Asymmetry: Spermatogenesis produces 4 equal functional spermatozoa; Oogenesis produces only 1 functional ovum and 2–3 tiny degenerate polar bodies.",
      "• Gamete Yield: 1 Primary Spermatocyte yields 4 functional sperms; 1 Primary Oocyte yields only 1 functional ovum."
    ],
    "keyPointsAndKeywords": [
      "Spermatogenesis begins at puberty; Oogenesis begins during embryonic life",
      "Equal division produces 4 functional sperms",
      "Unequal division produces 1 functional ovum + polar bodies",
      "Primary oocyte arrested at Diplotene of Prophase I",
      "Secondary oocyte arrested at Metaphase II until fertilization"
    ],
    "modelAnswer": {
      "statement": "Spermatogenesis produces four motile sperms continuously from puberty, while Oogenesis begins embryonically, undergoes meiotic arrest, and yields a single ovum.",
      "markingScheme": [
        "1 Mark: Onset time differences (puberty vs embryonic stage).",
        "1.5 Marks: Division symmetry and gamete yield (4 sperms vs 1 ovum + polar bodies).",
        "1.5 Marks: Meiotic arrests in oogenesis (Prophase I and Metaphase II) vs continuous spermatogenesis."
      ],
      "examinerTips": "Remember: The second meiotic division in oogenesis is completed ONLY upon entry of sperm into the secondary oocyte."
    },
    "derivations": [
      {
        "name": "Stepwise Spermatogenesis vs Oogenesis Progression",
        "setup": "Comparative meiotic gametogenesis in human males and females.",
        "steps": [
          {
            "text": "Spermatogenesis (Continuous):",
            "equation": "\\text{Spermatogonium } (2n) \\xrightarrow{\\text{Mitosis}} \\text{Primary Spermatocyte } (2n) \\xrightarrow{\\text{Meiosis I}} 2 \\text{ Secondary } (n) \\xrightarrow{\\text{Meiosis II}} 4 \\text{ Spermatids } (n) \\to 4 \\text{ Sperms}"
          },
          {
            "text": "Oogenesis (Discontinuous):",
            "equation": "\\text{Oogonium } (2n) \\xrightarrow{\\text{Mitosis}} \\text{Primary Oocyte } (2n) \\xrightarrow{\\text{Meiosis I}} 1 \\text{ Secondary Oocyte } (n) + 1\\text{st Polar Body} \\xrightarrow{\\text{Fertilisation}} 1 \\text{ Ovum} + 2\\text{nd Polar Body}"
          }
        ],
        "finalFormula": "1 \\text{ Primary Spermatocyte} \\implies 4 \\text{ Sperms} \\quad | \\quad 1 \\text{ Primary Oocyte} \\implies 1 \\text{ Ovum} + \\text{Polar Bodies}"
      }
    ]
  },
  {
    "id": "bio-core-27",
    "number": 27,
    "section": "core",
    "title": "Methods of Birth Control: Categories, Mechanisms & Examples",
    "shortLabel": "Methods of Birth Control",
    "chapterId": "bio-ch-3",
    "chapterTitle": "Reproductive Health",
    "unit": "Reproduction",
    "marks": "4 / 5 Marks",
    "marksNum": 5,
    "category": "Big Orange",
    "frequency": "CBSE 2015, 2017, 2019, 2021, 2023 (High Yield — 4M or 5M Question)",
    "questionPrompt": "Categorise and describe the principal contraceptive methods available to humans:\n(a) Natural / Traditional methods\n(b) Barrier methods\n(c) Intrauterine Devices (IUDs)\n(d) Oral Contraceptive Pills\n(e) Surgical / Terminal methods",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 3: Reproductive Health",
      "page": "Pages 42–46"
    },
    "theory": [
      "• Contraceptive Categories: Natural/behavioral methods, Barrier methods, Intrauterine Devices (IUDs), Oral hormonal pills, Injections/implants, and Surgical sterilization.",
      "• IUD Mechanisms: Non-medicated (Lippes loop); Copper-releasing (CuT, Cu7, Multiload 375: suppress sperm motility and fertilising capacity); Hormone-releasing (Progestasert, LNG-20: make uterus hostile to implantation).",
      "• Oral Contraceptives: Progestogen-estrogen combinations inhibit ovulation and implantation, and alter cervical mucus; 'Saheli' is a non-steroidal once-a-week pill (Centchroman).",
      "• Terminal Methods: Vasectomy (severing/tying vas deferens in males) and Tubectomy (severing/tying fallopian tubes in females); highly effective but irreversible."
    ],
    "keyPointsAndKeywords": [
      "Natural: Periodic abstinence, lactational amenorrhea",
      "Barrier: Condoms prevent STIs",
      "IUDs: Non-medicated (Lippes loop), Cu-releasing (CuT), Hormone-releasing (LNG-20)",
      "Oral: Saheli (non-steroidal, once-a-week, CDRI Lucknow)",
      "Surgical: Vasectomy (males) and Tubectomy (females)"
    ],
    "modelAnswer": {
      "statement": "Contraceptive methods prevent unwanted pregnancies through behavioral, mechanical, chemical, and surgical interventions.",
      "markingScheme": [
        "1 Mark: Natural and Barrier methods with STI protection highlight.",
        "1.5 Marks: Detailed classification of IUDs (Copper-releasing vs Hormone-releasing vs Non-medicated).",
        "1.5 Marks: Oral pills (Saheli features) and Surgical sterilization (Vasectomy vs Tubectomy)."
      ],
      "examinerTips": "Remember: 'Saheli' is non-steroidal, developed by CDRI (Central Drug Research Institute) in Lucknow, and is taken once a week."
    },
    "derivations": [
      {
        "name": "Categorical Classification & Mechanisms of Modern Contraceptives",
        "setup": "Interventions preventing gametic encounter or zygotic implantation.",
        "steps": [
          {
            "text": "1. Barrier Methods (Condoms, Diaphragms):",
            "equation": "\\text{Physical prevention of sperm deposition into female genital tract}"
          },
          {
            "text": "2. Copper IUDs (CuT, Multiload 375):",
            "equation": "\\text{Release } \\text{Cu}^{2+} \\implies \\text{Phagocytosis of sperms} + \\text{Suppression of sperm motility}"
          },
          {
            "text": "3. Hormone IUDs (LNG-20):",
            "equation": "\\text{Alters endometrium (hostile to implantation)} + \\text{Thickens cervical mucus}"
          },
          {
            "text": "4. Oral Pills (Combined & Saheli):",
            "equation": "\\text{Inhibits ovulation} + \\text{Prevents implantation}"
          },
          {
            "text": "5. Surgical Sterilisation (Vasectomy/Tubectomy):",
            "equation": "\\text{Block gamete transport} \\implies \\text{Permanent terminal contraception}"
          }
        ],
        "finalFormula": "\\text{Most widely accepted method in India} = \\text{IUDs} \\quad | \\quad \\text{Zero failure non-steroidal pill} = \\text{Saheli}"
      }
    ]
  },
  {
    "id": "bio-core-28",
    "number": 28,
    "section": "core",
    "title": "Sexually Transmitted Infections (STIs) & Prevention",
    "shortLabel": "STIs & Prevention",
    "chapterId": "bio-ch-3",
    "chapterTitle": "Reproductive Health",
    "unit": "Reproduction",
    "marks": "2 / 3 Marks",
    "marksNum": 2,
    "category": "Big Orange",
    "frequency": "CBSE 2016, 2018, 2022",
    "questionPrompt": "Name any four Sexually Transmitted Infections (STIs). Which three STIs are not completely curable? Mention any two preventive measures.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 3: Reproductive Health",
      "page": "Pages 46–47"
    },
    "theory": [
      "• Transmission: Infections transmitted through sexual intercourse (e.g. Gonorrhoea, Syphilis, Chlamydiasis, Genital herpes, Genital warts, Trichomoniasis, Hepatitis-B, HIV).",
      "• Incurable STIs: HIV/AIDS, Genital Herpes, and Hepatitis-B are completely incurable once established; other bacterial and protozoan STIs are curable if detected early.",
      "• Clinical Complications: Untreated STIs lead to Pelvic Inflammatory Disease (PID), stillbirths, ectopic pregnancies, abortions, and tubal infertility.",
      "• Prevention: Avoid sex with multiple partners, consistent condom usage, and early medical consultation upon unusual discharge or genital ulcers."
    ],
    "keyPointsAndKeywords": [
      "STIs / Venereal diseases / RTIs",
      "Incurable trio: HIV, Hepatitis-B, Genital herpes",
      "Barrier protection using condoms",
      "Early diagnosis and complete treatment"
    ],
    "modelAnswer": {
      "statement": "STIs spread through sexual contact; Hepatitis-B, genital herpes, and HIV are incurable, highlighting the need for prevention.",
      "markingScheme": [
        "1 Mark: Four STIs listed + explicit mention of the 3 incurable STIs (HIV, Hepatitis-B, Genital herpes).",
        "1 Mark: Two clear preventive measures."
      ],
      "examinerTips": "Do not forget: Hepatitis-B and HIV can also be transmitted via infected blood transfusions, shared needles, and from mother to foetus."
    },
    "derivations": [
      {
        "name": "STI Etiology, Curability Classification & Preventive Strategy",
        "setup": "Epidemiological classification of sexually transmitted infections.",
        "steps": [
          {
            "text": "Curable STIs (Early antibiotic treatment):",
            "equation": "\\text{Syphilis (Treponema), Gonorrhoea (Neisseria), Trichomoniasis (protozoan)}"
          },
          {
            "text": "Incurable Viral STIs:",
            "equation": "\\text{HIV (AIDS), Genital Herpes (HSV), Hepatitis B (HBV)}"
          },
          {
            "text": "High-risk age bracket:",
            "equation": "\\text{Adolescents and young adults aged 15–24 years}"
          }
        ],
        "finalFormula": "\\text{Incurable Trio: HIV, Genital Herpes, Hepatitis B} \\quad | \\quad \\text{Complication: Pelvic Inflammatory Disease & Infertility}"
      }
    ]
  },
  {
    "id": "bio-core-29",
    "number": 29,
    "section": "core",
    "title": "Medical Termination of Pregnancy (MTP): Legalities & Conditions",
    "shortLabel": "MTP & MTP Amendment Act",
    "chapterId": "bio-ch-3",
    "chapterTitle": "Reproductive Health",
    "unit": "Reproduction",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Big Orange",
    "frequency": "CBSE 2017, 2019, 2021, 2024",
    "questionPrompt": "What is Medical Termination of Pregnancy (MTP)? When was it legalised in India and what are the provisions of the MTP (Amendment) Act 2017 regarding gestation limits?",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 3: Reproductive Health",
      "page": "Pages 45–46"
    },
    "theory": [
      "• Definition: Medical Termination of Pregnancy (MTP) or induced abortion is voluntary termination before full-term fetus viability.",
      "• Legal Status: Legalised in India in 1971 with stringent statutory conditions to prevent female foeticide.",
      "• Safety Window: Safe during the 1st trimester (up to 12 weeks of pregnancy); 2nd trimester terminations (up to 20/24 weeks) carry high maternal morbidity.",
      "• Legal Grounds: Failure of contraceptive device used by married couple, rape, or continuation posing grave risk to maternal life or severe physical/mental child abnormality."
    ],
    "keyPointsAndKeywords": [
      "Voluntary termination before full term",
      "Legalised in India in 1971 to prevent misuse",
      "Safe up to 12 weeks (First trimester)",
      "MTP Amendment Act 2017: 1 RMP up to 12 weeks, 2 RMPs up to 24 weeks",
      "Strict ban on sex-selective abortion"
    ],
    "modelAnswer": {
      "statement": "MTP is safe up to 12 weeks; the MTP Amendment Act 2017 regulates procedures up to 24 weeks under RMP medical supervision.",
      "markingScheme": [
        "1 Mark: Definition of MTP + Legalisation year (1971).",
        "1 Mark: Safe period (first trimester / 12 weeks) vs risky second trimester.",
        "1 Mark: MTP Amendment Act 2017: 1 RMP up to 12 weeks, 2 RMPs up to 24 weeks for vulnerable cases."
      ],
      "examinerTips": "Remember: MTP is NOT meant for sex determination or general birth control, but for emergency medical and reproductive safety."
    },
    "derivations": [
      {
        "name": "Regulatory Framework & Safety Protocol of MTP (MTP Amendment Act 2021)",
        "setup": "Statutory parameters governing clinical abortions in India.",
        "steps": [
          {
            "text": "Up to 12 weeks (1st trimester):",
            "equation": "\\text{Safe period} \\implies \\text{Requires opinion of 1 Registered Medical Practitioner (RMP)}"
          },
          {
            "text": "12 to 20 weeks (2nd trimester):",
            "equation": "\\text{Higher risk} \\implies \\text{Requires opinion of 2 Registered Medical Practitioners}"
          },
          {
            "text": "Prohibited indication:",
            "equation": "\\text{Sex determination via amniocentesis for female foeticide is strictly illegal}"
          }
        ],
        "finalFormula": "\\text{1st Trimester (up to 12 weeks) = Safest period} \\quad | \\quad \\text{Statutory Ban on Pre-natal Sex Determination}"
      }
    ]
  },
  {
    "id": "bio-core-30",
    "number": 30,
    "section": "core",
    "title": "Assisted Reproductive Technologies (ART): ZIFT, GIFT, ICSI & IVF",
    "shortLabel": "ART: ZIFT vs GIFT vs ICSI",
    "chapterId": "bio-ch-3",
    "chapterTitle": "Reproductive Health",
    "unit": "Reproduction",
    "marks": "3 / 5 Marks",
    "marksNum": 5,
    "category": "Big Orange",
    "frequency": "CBSE 2016, 2018, 2020, 2022, 2024 (Very High Yield — 3M or 5M Question)",
    "questionPrompt": "Explain the full forms, principles, and clinical indications for the following Assisted Reproductive Technologies (ART):\n(a) IVF-ET (In Vitro Fertilisation & Embryo Transfer)\n(b) ZIFT (Zygote Intra-Fallopian Transfer)\n(c) GIFT (Gamete Intra-Fallopian Transfer)\n(d) ICSI (Intra-Cytoplasmic Sperm Injection)\n(e) IUI (Intra-Uterine Insemination)",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 3: Reproductive Health",
      "page": "Pages 47–48"
    },
    "theory": [
      "• Assisted Reproductive Technologies (ART): Clinical interventions to assist infertile couples who cannot conceive naturally.",
      "• IVF-ET (In Vitro Fertilisation & Embryo Transfer): Fertilisation of ovum and sperm outside body in laboratory followed by embryo transfer.",
      "• ZIFT vs IUT: Zygote or early embryo up to 8 blastomeres transferred into Fallopian tube (ZIFT); Embryo >8 blastomeres transferred directly into Uterus (IUT).",
      "• GIFT & ICSI: Transfer of collected ovum into fallopian tube of female who cannot produce one (GIFT); Direct mechanical microinjection of sperm into ovum cytoplasm in vitro (ICSI)."
    ],
    "keyPointsAndKeywords": [
      "IVF: Fertilisation outside the body",
      "ZIFT: Zygote / embryo up to 8 blastomeres into fallopian tube",
      "IUT: Embryo > 8 blastomeres into uterus",
      "GIFT: Transfer of unfertilised ovum into fallopian tube",
      "ICSI: Direct sperm injection into ovum cytoplasm",
      "IUI: Artificial insemination into uterus (oligospermia)"
    ],
    "modelAnswer": {
      "statement": "ART encompasses clinical procedures to overcome infertility: ZIFT (embryo ≤8 cells into tube), IUT (>8 cells into uterus), GIFT (gamete transfer into tube), ICSI (direct microinjection), and IUI (uterine insemination).",
      "markingScheme": [
        "1 Mark: (a) IVF-ET principle (fertilisation outside the body in vitro under simulated conditions followed by embryo transfer).",
        "1 Mark: (b) ZIFT vs IUT: Zygote or embryo ≤ 8 blastomeres into Fallopian tube (ZIFT) vs embryo > 8 blastomeres into uterus (IUT).",
        "1 Mark: (c) GIFT: Transfer of ovum from donor female into Fallopian tube of another female who cannot produce ovum but can support pregnancy.",
        "1 Mark: (d) ICSI: Intra-Cytoplasmic Sperm Injection — microinjection of a single sperm directly into the cytoplasm of an ovum in vitro.",
        "1 Mark: (e) IUI: Intra-Uterine Insemination — semen introduced artificially into the uterus for low sperm count (oligospermia) or male erectile dysfunction."
      ],
      "examinerTips": "Do not confuse ZIFT and GIFT: ZIFT transfers a ZYGOTE/EMBRYO (post-fertilisation), whereas GIFT transfers a GAMETE/OVUM (pre-fertilisation)."
    },
    "derivations": [
      {
        "name": "Decision Matrix & Blastomere Threshold in ART Procedures",
        "setup": "Laboratory and clinical protocols for infertile couples.",
        "steps": [
          {
            "text": "1. IVF (Test Tube Baby Programme):",
            "equation": "\\text{Ovum} + \\text{Sperm} \\xrightarrow{\\text{In vitro}} \\text{Zygote / Embryo}"
          },
          {
            "text": "2. ZIFT (Zygote Intra-Fallopian Transfer):",
            "equation": "\\le 8 \\text{ blastomeres transferred into Fallopian tube}"
          },
          {
            "text": "3. IUT (Intra-Uterine Transfer):",
            "equation": "> 8 \\text{ blastomeres transferred directly into Uterine cavity}"
          },
          {
            "text": "4. GIFT (Gamete Intra-Fallopian Transfer):",
            "equation": "\\text{Donor ovum placed in fallopian tube for in vivo fertilisation}"
          },
          {
            "text": "5. ICSI (Intra-Cytoplasmic Sperm Injection):",
            "equation": "\\text{Sperm micro-injected into ovum for severe male oligospermia}"
          }
        ],
        "finalFormula": "\\le 8 \\text{ Blastomeres} = \\text{ZIFT (Fallopian Tube)} \\quad | \\quad > 8 \\text{ Blastomeres} = \\text{IUT (Uterus)}"
      }
    ]
  },
  {
    "id": "bio-core-31",
    "number": 31,
    "section": "core",
    "title": "Innate Immunity: Four Protective Barriers",
    "shortLabel": "Innate Immunity 4 Barriers",
    "chapterId": "bio-ch-7",
    "chapterTitle": "Human Health and Disease",
    "unit": "Biology in Human Welfare",
    "marks": "2 / 3 Marks",
    "marksNum": 3,
    "category": "Big Orange",
    "frequency": "CBSE 2016, 2018, 2021, 2023",
    "questionPrompt": "What is innate immunity? Describe the four major types of barriers that constitute non-specific innate immunity in humans with two examples of each.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 7: Human Health and Disease",
      "page": "Pages 134–135"
    },
    "theory": [
      "• Innate Immunity: Non-specific defence mechanisms present from birth providing the first and second lines of physiological protection.",
      "• Four Defensive Barriers: Physical barriers (skin, mucus membranes), Physiological barriers (stomach acid, saliva, tears), Cellular barriers (PMNL-neutrophils, monocytes, macrophages), and Cytokine barriers (interferons).",
      "• Virus Defence: Virus-infected cells secrete Interferons (glycoproteins) that protect uninfected neighbour cells from viral infection."
    ],
    "keyPointsAndKeywords": [
      "Non-specific, present from birth",
      "Physical: Skin & Mucus coating",
      "Physiological: Stomach acid, saliva, lysozyme in tears",
      "Cellular: PMNL-neutrophils, monocytes, macrophages",
      "Cytokine: Interferons protect non-infected cells from viruses"
    ],
    "modelAnswer": {
      "statement": "Innate immunity comprises physical, physiological, cellular, and cytokine barriers providing immediate non-specific protection.",
      "markingScheme": [
        "0.5 Mark: Innate immunity definition (non-specific, present from birth).",
        "2.5 Marks: Detailed explanation of all 4 barriers with accurate biological examples (Skin/Mucus, Acid/Lysozyme, PMNL/Macrophage, Interferons)."
      ],
      "examinerTips": "Interferons are heavily tested in 1M/2M questions: remember they are secreted by VIRUS-INFECTED cells to protect uninfected cells."
    },
    "derivations": [
      {
        "name": "Four Protective Barrier Lines of Innate Immunity",
        "setup": "Constitutive non-specific antimicrobial defenses in humans.",
        "steps": [
          {
            "text": "1. Physical Barriers:",
            "equation": "\\text{Skin (keratinized stratum corneum)} + \\text{Mucus coating of respiratory, GI, and urogenital tracts}"
          },
          {
            "text": "2. Physiological Barriers:",
            "equation": "\\text{Stomach } \\text{HCl (pH 1.5–2.0)} + \\text{Lysozyme in tears and saliva}"
          },
          {
            "text": "3. Cellular Barriers:",
            "equation": "\\text{Phagocytes: PMNL-neutrophils, Monocytes, Natural Killer (NK) lymphocytes, Macrophages}"
          },
          {
            "text": "4. Cytokine Barriers:",
            "equation": "\\text{Interferons (IFN)} \\implies \\text{Inhibit viral protein synthesis in adjacent healthy cells}"
          }
        ],
        "finalFormula": "\\text{Physical} + \\text{Physiological} + \\text{Cellular} + \\text{Cytokine Barriers} \\implies \\text{Innate Protection}"
      }
    ]
  },
  {
    "id": "bio-core-32",
    "number": 32,
    "section": "core",
    "title": "Antibody Structure & Immunoglobulin Classes",
    "shortLabel": "Antibody Molecule H2L2",
    "chapterId": "bio-ch-7",
    "chapterTitle": "Human Health and Disease",
    "unit": "Biology in Human Welfare",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Big Orange",
    "frequency": "CBSE 2017, 2019, 2022, 2024",
    "diagramId": "antibody-molecule",
    "questionPrompt": "Draw a labelled diagram of an antibody molecule. Why is it represented as H₂L₂? Name any two classes of antibodies and state their primary function.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 7: Human Health and Disease",
      "page": "Page 138",
      "figures": "Fig 7.4"
    },
    "theory": [
      "• Immunoglobulin Architecture: Glycoprotein molecule produced by B-lymphocyte plasma cells consisting of four polypeptide chains: two identical Heavy ($H$) chains and two identical Light ($L$) chains ($H_2L_2$).",
      "• Disulfide Bridges: Chains are interconnected by interchain and intrachain disulfide bonds ($-S-S-$).",
      "• Antigen-Binding Site: Variable regions ($V_H, V_L$) at the N-terminal ends of the two arms form two identical antigen-binding pockets (paratopes).",
      "• Five Immunoglobulin Classes: IgA (secretory in colostrum), IgD (B-cell receptor), IgE (allergies), IgG (most abundant, crosses placenta), IgM (pentamer, primary response)."
    ],
    "keyPointsAndKeywords": [
      "H₂L₂: Two heavy chains and two light chains",
      "Linked by disulfide bonds (-S-S-)",
      "Antigen-binding sites at amino tips",
      "IgA in colostrum (passive natural immunity)",
      "IgE in allergic responses"
    ],
    "modelAnswer": {
      "statement": "Antibodies are Y-shaped glycoproteins consisting of two heavy and two light polypeptide chains linked by disulfide bridges.",
      "markingScheme": [
        "1 Mark: Labelled diagram showing Heavy chains, Light chains, Disulfide bonds, and Antigen-binding sites.",
        "0.5 Mark: Justification of H₂L₂ formula.",
        "0.5 Mark: Specific functions of IgA (colostrum) and IgE (allergic reactions)."
      ],
      "examinerTips": "Colostrum contains abundant IgA antibodies that provide essential passive natural immunity to the newborn infant."
    },
    "diagram": {
      "hasDiagram": true,
      "diagramId": "antibody-molecule",
      "title": "Structure of an Antibody Molecule (H2L2)",
      "examDrawingGuide": [
        "1. Draw a 'Y'-shaped immunoglobulin structure composed of four polypeptide chains: 2 long Heavy (H) chains and 2 short Light (L) chains.",
        "2. Connect the chains with interchain and intrachain Disulfide bonds (-S-S-).",
        "3. Label the N-terminal tips of both arms as Antigen-Binding Sites (Paratope / Variable regions V_H and V_L).",
        "4. Label the C-terminal stems as Constant regions (C_H and C_L) and write the formula H_2L_2."
      ]
    },
    "derivations": [
      {
        "name": "Polypeptide Architecture & Chemical Stoichiometry of Antibody (H2L2)",
        "setup": "Serum immunoglobulin produced by plasma cells.",
        "steps": [
          {
            "text": "Subunit formula:",
            "equation": "2 \\text{ Heavy Chains } (\\sim 50\\text{ kDa}) + 2 \\text{ Light Chains } (\\sim 25\\text{ kDa}) \\implies \\text{H}_2\\text{L}_2 \\; (\\sim 150\\text{ kDa})"
          },
          {
            "text": "Antigen binding sites per monomer:",
            "equation": "2 \\text{ Variable Antigen-Binding Sites (Bivalent paratope)}"
          },
          {
            "text": "Structural stabilization:",
            "equation": "\\text{Intrachain and interchain Disulfide bridges } (-\\text{S}-\\text{S}-)"
          }
        ],
        "finalFormula": "\\text{Antibody Formula} = \\text{H}_2\\text{L}_2 \\; (\\text{Bivalent Y-shaped Immunoglobulin with Disulfide Bonds})"
      }
    ]
  },
  {
    "id": "bio-core-33",
    "number": 33,
    "section": "core",
    "title": "Innate vs Acquired Immunity & Active vs Passive Immunity",
    "shortLabel": "Innate vs Acquired / Active vs Passive",
    "chapterId": "bio-ch-7",
    "chapterTitle": "Human Health and Disease",
    "unit": "Biology in Human Welfare",
    "marks": "3 / 4 / 5 Marks",
    "marksNum": 4,
    "category": "Big Orange",
    "frequency": "CBSE 2015, 2018, 2020, 2023",
    "questionPrompt": "(a) Differentiate between Innate and Acquired Immunity.\n(b) Differentiate between Active and Passive Immunity with one example of each.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 7: Human Health and Disease",
      "page": "Pages 134–136"
    },
    "theory": [
      "• Innate vs Acquired Immunity: Innate is non-specific, present from birth, and lacks memory; Acquired is pathogen-specific, characterised by immunological memory, mediated by B and T lymphocytes.",
      "• Primary vs Secondary Response: Primary response on first encounter is slow and of low intensity; Secondary (anamnestic) response upon re-exposure is rapid, heightened, and intense due to memory cells.",
      "• Active Immunity: Body's own immune system produces antibodies upon exposure to living/attenuated antigens; slow to develop, but long-lasting (e.g. natural infection, vaccines).",
      "• Passive Immunity: Pre-formed antibodies directly administered to the individual; provides instant protection, but short-lived with no memory (e.g. colostrum IgA, anti-tetanus serum, anti-venom)."
    ],
    "keyPointsAndKeywords": [
      "Innate: Non-specific, from birth, no memory",
      "Acquired: Pathogen-specific, memory-based, B & T cells",
      "Active: Host produces antibodies, slow, long-lasting memory (vaccine)",
      "Passive: Readymade antibodies given, fast, no memory (Colostrum IgA, Anti-tetanus serum)"
    ],
    "modelAnswer": {
      "statement": "Immunity divides into Innate (inborn non-specific) vs Acquired (learned specific), and Active (host-synthesized antibodies) vs Passive (preformed antibodies).",
      "markingScheme": [
        "2 Marks: Innate vs Acquired immunity (Specificity, Memory, Timing, Mediators).",
        "2 Marks: Active vs Passive immunity (Antibody source, Speed, Duration/Memory, Examples)."
      ],
      "examinerTips": "Snake antivenom is an example of PASSIVE immunity because preformed neutralizing antibodies are injected immediately."
    },
    "derivations": [
      {
        "name": "Comparative Framework: Active vs Passive & Primary vs Anamnestic Response",
        "setup": "Immune kinetics and humoral memory dynamics.",
        "steps": [
          {
            "text": "Primary Immune Response:",
            "equation": "\\text{First antigen encounter} \\implies \\text{Lag phase, low antibody titer (mostly IgM)}"
          },
          {
            "text": "Secondary (Anamnestic) Response:",
            "equation": "\\text{Second encounter} \\implies \\text{Rapid, heightened, sustained IgG secretion by memory cells}"
          },
          {
            "text": "Active vs Passive Immunity:",
            "equation": "\\text{Active: Host makes antibodies (long-lasting)} \\quad | \\quad \\text{Passive: Ready-made antibodies received (instant, temporary)}"
          }
        ],
        "specialCases": [
          {
            "title": "Colostrum & Placental Antibodies",
            "text": "Colostrum contains yellowish milk with abundant secretory IgA protecting infants. Maternal IgG crosses placenta to fetus."
          }
        ],
        "finalFormula": "\\text{Active = Host-derived + Memory} \\quad | \\quad \\text{Passive = Pre-formed + Instant + Zero Memory}"
      }
    ]
  },
  {
    "id": "bio-core-34",
    "number": 34,
    "section": "core",
    "title": "Cancer Biology: Hallmarks, Contact Inhibition & Treatment",
    "shortLabel": "Cancer Biology & Metastasis",
    "chapterId": "bio-ch-7",
    "chapterTitle": "Human Health and Disease",
    "unit": "Biology in Human Welfare",
    "marks": "2 / 3 Marks",
    "marksNum": 3,
    "category": "Big Orange",
    "frequency": "CBSE 2017, 2019, 2021, 2024",
    "questionPrompt": "(a) How do normal cells differ from cancerous cells regarding contact inhibition and apoptosis?\n(b) Differentiate between Benign and Malignant tumours.\n(c) What is metastasis and why is it considered the most feared property of malignant tumours?",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 7: Human Health and Disease",
      "page": "Pages 141–142"
    },
    "theory": [
      "• Breakdown of Growth Regulation: Cancer arises when normal cells lose the property of Contact Inhibition (where cell-to-cell contact inhibits uncontrolled proliferation).",
      "• Tumour Classification: Benign tumours remain confined to original site and cause minimal damage; Malignant tumours proliferate rapidly, invade surrounding tissues, and destroy normal cells.",
      "• Metastasis: The most dreaded property of cancer cells where cells detach from malignant tumours, enter blood/lymph, and establish secondary tumours at distant body sites.",
      "• Carcinogens: Physical agents (X-rays, gamma-rays, UV rays), chemical agents (tobacco smoke), and oncogenic viruses convert normal cellular proto-oncogenes into active oncogenes."
    ],
    "keyPointsAndKeywords": [
      "Loss of contact inhibition in cancer cells",
      "Benign (localized) vs Malignant (invasive neoplasm)",
      "Metastasis: Spread through blood/lymph to seed secondary tumours",
      "Oncogenic viruses and proto-oncogenes activation",
      "Treatment: Surgery, Radiation, Chemotherapy, Immunotherapy (alpha-interferon)"
    ],
    "modelAnswer": {
      "statement": "Cancer results from breakdown of regulatory growth controls; malignant cells invade tissues and exhibit metastasis via circulation.",
      "markingScheme": [
        "1 Mark: Loss of contact inhibition explanation.",
        "1 Mark: Benign vs Malignant tumour differences.",
        "1 Mark: Metastasis definition and justification as the most feared property."
      ],
      "examinerTips": "Remember: Alpha-interferon is used in cancer immunotherapy as a biological response modifier to activate the patient's immune system to destroy tumours."
    },
    "derivations": [
      {
        "name": "Neoplastic Transformation & Metastatic Progression",
        "setup": "Loss of cellular homeostasis and invasion cascade.",
        "steps": [
          {
            "text": "1. Loss of Contact Inhibition:",
            "equation": "\\text{Uncontrolled mitotic proliferation} \\implies \\text{Mass of neoplastic cells (Tumour)}"
          },
          {
            "text": "2. Proto-oncogene Mutation:",
            "equation": "\\text{Proto-oncogenes} \\xrightarrow{\\text{Carcinogen}} \\text{Oncogenes (constitutive growth signaling)}"
          },
          {
            "text": "3. Metastatic Dissemination:",
            "equation": "\\text{Malignant cells detach} \\xrightarrow{\\text{Blood / Lymph}} \\text{Colonise distant organs (Metastasis)}"
          }
        ],
        "finalFormula": "\\text{Hallmark 1: Loss of Contact Inhibition} \\quad | \\quad \\text{Hallmark 2: Metastasis (Distant Infiltration)}"
      }
    ]
  },
  {
    "id": "bio-core-35",
    "number": 35,
    "section": "core",
    "title": "Propionibacterium sharmanii & Swiss Cheese Production",
    "shortLabel": "Propionibacterium sharmanii",
    "chapterId": "bio-ch-8",
    "chapterTitle": "Microbes in Human Welfare",
    "unit": "Biology in Human Welfare",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Big Orange",
    "frequency": "CBSE 2016, 2018, 2021, 2023",
    "questionPrompt": "Name the bacterium responsible for the ripening of Swiss cheese. Why does Swiss cheese have large characteristic holes?",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 8: Microbes in Human Welfare",
      "page": "Page 149"
    },
    "theory": [
      "• Microbe Involved: The bacterium Propionibacterium sharmanii.",
      "• Commercial Product: Swiss cheese, characterised by large holes and distinct flavour.",
      "• Mechanism of Hole Formation: During anaerobic fermentation, Propionibacterium sharmanii consumes lactic acid and produces large volumes of carbon dioxide ($CO_2$), propionic acid, and acetic acid.",
      "• Ripening Effect: Bubbles of released $CO_2$ gas become trapped within the curd matrix, creating the characteristic large round holes."
    ],
    "keyPointsAndKeywords": [
      "Propionibacterium sharmanii",
      "Large holes due to production of large amount of CO₂",
      "Lactic acid fermented to propionic acid + CO₂",
      "Roquefort cheese ripened by Penicillium roqueforti fungus"
    ],
    "modelAnswer": {
      "statement": "Propionibacterium sharmanii ferments cheese curd, generating copious CO₂ gas bubbles that form the characteristic large holes in Swiss cheese.",
      "markingScheme": [
        "1 Mark: Correct scientific name: Propionibacterium sharmanii.",
        "1 Mark: Explanation of large CO₂ gas production during fermentation."
      ],
      "examinerTips": "Remember to write the scientific name with proper capitalization: Propionibacterium sharmanii."
    },
    "derivations": [
      {
        "name": "Propionic Fermentation Pathway in Swiss Cheese",
        "setup": "Secondary fermentation of curd matrix during cheese ripening.",
        "steps": [
          {
            "text": "Bacterial inoculum:",
            "equation": "\\text{Propionibacterium sharmanii}"
          },
          {
            "text": "Fermentation reaction:",
            "equation": "3 \\text{ Lactic Acid} \\xrightarrow{\\text{Fermentation}} 2 \\text{ Propionic Acid} + \\text{Acetic Acid} + \\text{CO}_2 \\uparrow"
          },
          {
            "text": "Hole formation:",
            "equation": "\\text{CO}_2 \\text{ gas trapped in curd matrix} \\implies \\text{Large round holes created}"
          }
        ],
        "finalFormula": "\\text{Propionibacterium sharmanii} \\implies \\text{High CO}_2 \\text{ release} \\implies \\text{Large holes in Swiss Cheese}"
      }
    ]
  },
  {
    "id": "bio-core-36",
    "number": 36,
    "section": "core",
    "title": "Bioactive Molecules: Cyclosporin A & Statins",
    "shortLabel": "Cyclosporin A & Statins",
    "chapterId": "bio-ch-8",
    "chapterTitle": "Microbes in Human Welfare",
    "unit": "Biology in Human Welfare",
    "marks": "2 / 5 Marks",
    "marksNum": 5,
    "category": "Big Orange",
    "frequency": "CBSE 2015, 2017, 2019, 2022, 2024 (Guaranteed 2M or 5M Question)",
    "questionPrompt": "Explain the microbial sources and clinical / commercial applications of the following bioactive molecules and microbial products:\n(a) Cyclosporin A\n(b) Statins\n(c) Streptokinase\n(d) Organic Acids (Citric, Acetic, Butyric & Lactic acids)\n(e) Industrial Microbes (Saccharomyces cerevisiae & Propionibacterium sharmanii)",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 8: Microbes in Human Welfare",
      "page": "Pages 150–151"
    },
    "theory": [
      "• Cyclosporin A: Bioactive cyclic peptide produced by the fungus Trichoderma polysporum; acts as a potent immunosuppressive agent in organ transplant patients.",
      "• Statins: Secondary metabolite produced by the yeast Monascus purpureus; acts as a blood-cholesterol lowering agent.",
      "• Statin Mechanism: Statins act by competitively inhibiting the rate-limiting enzyme HMG-CoA reductase responsible for endogenous cholesterol synthesis in the liver.",
      "• Streptokinase: Produced by the bacterium Streptococcus and genetically modified; used as a 'clot buster' for removing thrombi in myocardial infarction."
    ],
    "keyPointsAndKeywords": [
      "Cyclosporin A from Trichoderma polysporum fungus (immunosuppressant)",
      "Statins from Monascus purpureus yeast (lowers blood cholesterol, competitive inhibition)",
      "Streptokinase from Streptococcus bacterium (clot buster for myocardial infarction)",
      "Citric acid (Aspergillus niger), Acetic acid (Acetobacter aceti)",
      "Butyric acid (Clostridium butylicum), Lactic acid (Lactobacillus)"
    ],
    "modelAnswer": {
      "statement": "Microbes produce potent pharmaceuticals and chemicals: Cyclosporin A (immunosuppressant), Statins (cholesterol reduction), Streptokinase (clot removal), organic acids, and fermentation products.",
      "markingScheme": [
        "1 Mark: (a) Cyclosporin A: Trichoderma polysporum fungus + Immunosuppressive agent in organ-transplant patients.",
        "1 Mark: (b) Statins: Monascus purpureus yeast + Competitive inhibition of cholesterol synthesis enzymes.",
        "1 Mark: (c) Streptokinase: Streptococcus bacterium + Clot buster for clearing myocardial infarction thrombi.",
        "1 Mark: (d) Organic acids: Citric acid (Aspergillus niger), Acetic acid (Acetobacter aceti), Butyric acid (Clostridium butylicum), Lactic acid (Lactobacillus).",
        "1 Mark: (e) Traditional microbes: Saccharomyces cerevisiae (ethanol fermentation & bread dough) and Propionibacterium sharmanii (CO₂ holes in Swiss cheese)."
      ],
      "examinerTips": "Statins act via 'competitive inhibition' of cholesterol synthesis enzymes — mention this keyword for full marks!"
    },
    "derivations": [
      {
        "name": "Microbial Industrial Production & Pharmacological Mechanism",
        "setup": "Fermentation bioprocesses of high-value medical bioactive agents.",
        "steps": [
          {
            "text": "Cyclosporin A (Immunosuppressant):",
            "equation": "\\text{Fungus: } \\text{Trichoderma polysporum} \\implies \\text{Inhibits T-cell activation in organ transplants}"
          },
          {
            "text": "Statins (Hypocholesterolemic):",
            "equation": "\\text{Yeast: } \\text{Monascus purpureus} \\implies \\text{Competitive inhibitor of HMG-CoA reductase}"
          },
          {
            "text": "Streptokinase (Thrombolytic):",
            "equation": "\\text{Bacterium: } \\text{Streptococcus} \\implies \\text{Lyses fibrin clots in myocardial infarction}"
          }
        ],
        "finalFormula": "\\text{Cyclosporin A (Trichoderma polysporum)} \\; | \\; \\text{Statins (Monascus purpureus: HMG-CoA inhibition)}"
      }
    ]
  },
  {
    "id": "bio-core-37",
    "number": 37,
    "section": "core",
    "title": "Microbial Industrial Enzymes: Lipases, Pectinases & Proteases",
    "shortLabel": "Industrial Microbial Enzymes",
    "chapterId": "bio-ch-8",
    "chapterTitle": "Microbes in Human Welfare",
    "unit": "Biology in Human Welfare",
    "marks": "2 / 4 Marks",
    "marksNum": 4,
    "category": "Big Orange",
    "frequency": "CBSE 2016, 2018, 2020, 2023",
    "questionPrompt": "State the industrial/commercial application of the following microbial enzymes:\n(a) Lipases\n(b) Pectinases and Proteases\n(c) Streptokinase",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 8: Microbes in Human Welfare",
      "page": "Page 151"
    },
    "theory": [
      "• Microbial Lipases: Extracted from Candida lipolytica and used in detergent formulations to remove oily and greasy stains from laundry.",
      "• Pectinases and Proteases: Used commercially to clarify bottled fruit juices, hydrolysing pectin and proteinaceous hazes to yield crystal-clear juice.",
      "• Streptokinase (Clot Buster): Modified enzyme produced by Streptococcus used to dissolve intravascular thrombi in heart attack patients."
    ],
    "keyPointsAndKeywords": [
      "Lipases in detergents for oil/grease stain removal",
      "Pectinases & Proteases clarify bottled fruit juices",
      "Streptokinase as clot buster"
    ],
    "modelAnswer": {
      "statement": "Enzymes from microbes have vital industrial roles: Lipases remove stains, and pectinases/proteases clarify fruit juices.",
      "markingScheme": [
        "1 Mark: Lipases (detergents, oil stain removal).",
        "1 Mark: Pectinases and Proteases (clearing bottled fruit juices)."
      ],
      "examinerTips": "Why are market bottled fruit juices clearer than homemade ones? Because commercial juices are treated with pectinases and proteases!"
    },
    "derivations": [
      {
        "name": "Industrial Applications of Microbial Enzymes",
        "setup": "Biotechnological use of microbial extracellular enzymes.",
        "steps": [
          {
            "text": "Lipases in Detergents:",
            "equation": "\\text{Lipase hydrolyses ester bonds of lipids} \\implies \\text{Removal of oil and grease stains from clothes}"
          },
          {
            "text": "Pectinases & Proteases in Juice Clarification:",
            "equation": "\\text{Hydrolyses insoluble pectins & proteins} \\implies \\text{Clears turbidity of commercial fruit juices}"
          },
          {
            "text": "Streptokinase in Myocardial Infarction:",
            "equation": "\\text{Converts plasminogen to plasmin} \\implies \\text{Dissolves coronary blood clots}"
          }
        ],
        "finalFormula": "\\text{Lipases (Detergents)} \\; | \\; \\text{Pectinases (Clarified Juice)} \\; | \\; \\text{Streptokinase (Clot Buster)}"
      }
    ]
  },
  {
    "id": "bio-core-38",
    "number": 38,
    "section": "core",
    "title": "Sewage Treatment: Primary vs Secondary (Biological) Treatment & BOD",
    "shortLabel": "Sewage Treatment & BOD",
    "chapterId": "bio-ch-8",
    "chapterTitle": "Microbes in Human Welfare",
    "unit": "Biology in Human Welfare",
    "marks": "5 Marks",
    "marksNum": 5,
    "category": "Big Orange",
    "frequency": "CBSE 2015, 2017, 2019, 2022, 2024 (Guaranteed 5M Question)",
    "questionPrompt": "Describe the sequential process of Sewage Treatment in Sewage Treatment Plants (STPs):\n(a) Primary Treatment (Physical)\n(b) Secondary Treatment (Biological) with reference to Flocs and BOD\n(c) Anaerobic Sludge Digestion and Biogas production",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 8: Microbes in Human Welfare",
      "page": "Pages 151–153"
    },
    "theory": [
      "• Sewage Composition: Domestic wastewater carrying human excreta, rich in organic matter and pathogenic microbes.",
      "• Primary Treatment (Physical): Removal of large and small particles through sequential filtration (floating debris) and sedimentation (grit, soil, pebbles), yielding Primary Sludge and Primary Effluent.",
      "• Secondary Treatment (Biological): Primary effluent agitated in large Aeration Tanks with aerobic microbes forming Flocs (bacterial mesh tied by fungal filaments), drastically reducing Biochemical Oxygen Demand (BOD).",
      "• Sludge Digestion & Biogas: Settled Activated Sludge pumped into Anaerobic Sludge Digesters where anaerobic methanogens produce inflammable Biogas ($CH_4 + CO_2 + H_2S$)."
    ],
    "keyPointsAndKeywords": [
      "Primary treatment = Physical filtration & sedimentation",
      "Primary effluent passed to Aeration tanks",
      "Flocs: Bacteria + Fungal filaments mesh",
      "BOD: Biochemical Oxygen Demand measure of organic pollution",
      "Activated sludge sedimented in settling tank",
      "Anaerobic sludge digester produces Biogas (CH₄ + CO₂ + H₂S)"
    ],
    "modelAnswer": {
      "statement": "Sewage treatment utilizes physical sedimentation (primary) followed by aerobic microbial flocs to reduce BOD, and anaerobic digestion yielding biogas.",
      "markingScheme": [
        "1.5 Marks: Primary treatment (sequential filtration, grit sedimentation, primary sludge vs effluent).",
        "2 Marks: Secondary aeration tank, Flocs definition, and BOD reduction mechanism.",
        "1.5 Marks: Settling tank, activated sludge inoculum, and anaerobic sludge digester producing biogas (CH₄, CO₂, H₂S)."
      ],
      "examinerTips": "Remember: BOD is directly proportional to polluting potential — the greater the BOD of waste water, the more is its polluting potential."
    },
    "derivations": [
      {
        "name": "Stage 1: Primary Treatment (Physical Separation)",
        "setup": "Raw domestic sewage enters sewage treatment plant.",
        "steps": [
          {
            "text": "Sequential filtration:",
            "equation": "\\text{Raw Sewage} \\xrightarrow{\\text{Wire mesh screens}} \\text{Removal of floating debris}"
          },
          {
            "text": "Grit settling in sedimentation tank:",
            "equation": "\\text{Settling} \\implies \\text{Primary Sludge (settled solids)} + \\text{Primary Effluent (supernatant)}"
          }
        ],
        "finalFormula": "\\text{Primary Effluent passed to secondary treatment}"
      },
      {
        "name": "Stage 2: Secondary / Biological Treatment (Aeration Tank & BOD Drop)",
        "setup": "Aeration tank with continuous air pumping and mechanical agitation.",
        "steps": [
          {
            "text": "Growth of aerobic flocs:",
            "equation": "\\text{Flocs} = \\text{Masses of bacteria associated with fungal filaments}"
          },
          {
            "text": "Consumption of organic matter & BOD drop:",
            "equation": "\\text{Flocs consume organic pollutants} \\implies \\text{Sharp decline in BOD (cleaner water)}"
          },
          {
            "text": "Settling tank & activated sludge:",
            "equation": "\\text{Treated effluent} \\to \\text{Settling tank} \\implies \\text{Flocs sediment as Activated Sludge}"
          }
        ],
        "finalFormula": "\\text{BOD reduced by } >90\\% \\implies \\text{Treated water discharged into natural water bodies}"
      },
      {
        "name": "Stage 3: Anaerobic Sludge Digester & Biogas Generation",
        "setup": "Activated sludge pumped into closed anaerobic digesters.",
        "steps": [
          {
            "text": "Anaerobic bacterial digestion:",
            "equation": "\\text{Activated Sludge} \\xrightarrow{\\text{Anaerobic Methanogens}} \\text{Digested Sludge}"
          },
          {
            "text": "Biogas fuel mixture produced:",
            "equation": "\\text{Biogas} = \\text{Methane } (\\text{CH}_4) + \\text{Carbon dioxide } (\\text{CO}_2) + \\text{Hydrogen sulfide } (\\text{H}_2\\text{S})"
          }
        ],
        "finalFormula": "\\text{Biogas Output: } \\text{CH}_4 + \\text{CO}_2 + \\text{H}_2\\text{S} \\; (\\text{Clean Combustible Energy})"
      }
    ]
  },
  {
    "id": "bio-core-39",
    "number": 39,
    "section": "core",
    "title": "Steps of Recombinant DNA (rDNA) Technology",
    "shortLabel": "Process of rDNA Technology",
    "chapterId": "bio-ch-9",
    "chapterTitle": "Biotechnology: Principles and Processes",
    "unit": "Biotechnology",
    "marks": "3 / 5 Marks",
    "marksNum": 5,
    "category": "Big Orange",
    "frequency": "CBSE 2016, 2018, 2021, 2023 (High Yield — 3M or 5M Question)",
    "questionPrompt": "Outline the sequential steps involved in Recombinant DNA (rDNA) Technology from donor DNA isolation to obtaining the foreign gene product.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 9: Biotechnology: Principles and Processes",
      "page": "Pages 164–172",
      "figures": "Fig 9.2"
    },
    "theory": [
      "• Recombinant DNA Technology: The genetic engineering process of isolating a desired gene and splicing it into a cloning vector to transform a host for mass production.",
      "• Key Reagents: Restriction Endonucleases ('molecular scissors'), DNA Ligase ('molecular glue'), Cloning Vectors (plasmids, bacteriophages), and Competent Host cells.",
      "• Bioreactors & DSP: Large-scale culturing in stirred-tank bioreactors (100–1000 litres) followed by downstream processing (separation, purification, formulation, clinical trials)."
    ],
    "keyPointsAndKeywords": [
      "Isolation of DNA (chilled ethanol)",
      "Restriction endonuclease cleavage",
      "PCR amplification (Taq polymerase)",
      "DNA Ligase creates recombinant vector",
      "Transformation of competent host",
      "Bioreactors for large-scale culture",
      "Downstream processing (purification)"
    ],
    "modelAnswer": {
      "statement": "Recombinant DNA technology involves isolation, cleavage, PCR amplification, vector ligation, transformation, bioreactor culture, and downstream processing.",
      "markingScheme": [
        "1 Mark: Step 1 & 2: Enzymatic isolation of purified DNA and cleavage with restriction endonucleases generating sticky ends.",
        "1 Mark: Step 3: Amplification of gene of interest using PCR (Denaturation, Primer Annealing, Primer Extension by Taq polymerase).",
        "1 Mark: Step 4: Ligation of cut foreign gene into plasmid vector using DNA Ligase.",
        "1 Mark: Step 5: Transfer of rDNA into competent host (heat shock / microinjection / gene gun).",
        "1 Mark: Step 6 & 7: Mass culture in stirred-tank Bioreactors and downstream processing (purification & quality control)."
      ],
      "examinerTips": "Remember: Both foreign DNA and plasmid vector MUST be cleaved with the SAME restriction enzyme to generate identical complementary sticky ends."
    },
    "derivations": [
      {
        "name": "Complete 7-Step Sequential Workflow of rDNA Technology",
        "setup": "Insertion of alien gene of interest into recipient organism.",
        "steps": [
          {
            "text": "1. Isolation of Genetic Material (DNA):",
            "equation": "\\text{Cell lysis (Lysozyme/Cellulase)} \\to \\text{Deproteinization} \\to \\text{Chilled Ethanol Precipitation}"
          },
          {
            "text": "2. Restriction Enzyme Digestion:",
            "equation": "\\text{Cleavage of vector and donor DNA using the SAME restriction endonuclease}"
          },
          {
            "text": "3. Agarose Gel Electrophoresis:",
            "equation": "\\text{Separation and recovery of cut DNA fragment of interest}"
          },
          {
            "text": "4. Gene Amplification by PCR:",
            "equation": "\\text{Denaturation } (94^\\circ\\text{C}) \\to \\text{Annealing } (54^\\circ\\text{C}) \\to \\text{Extension } (72^\\circ\\text{C}, \\text{Taq Pol}) \\implies 10^9 \\times"
          },
          {
            "text": "5. Ligation into Cloning Vector:",
            "equation": "\\text{Cut Vector} + \\text{Alien DNA} \\xrightarrow{\\text{DNA Ligase}} \\text{Recombinant DNA (rDNA)}"
          },
          {
            "text": "6. Insertion into Competent Host:",
            "equation": "\\text{Transformation via } \\text{CaCl}_2 \\text{ + Heat Shock } (42^\\circ\\text{C})"
          },
          {
            "text": "7. Culturing in Bioreactor & Downstream Processing:",
            "equation": "\\text{Stirred-tank bioreactor} \\implies \\text{Separation, Purification & Preservation (DSP)}"
          }
        ],
        "finalFormula": "\\text{Isolation} \\to \\text{Cutting} \\to \\text{PCR} \\to \\text{Ligation} \\to \\text{Transformation} \\to \\text{Bioreactor} \\to \\text{DSP}"
      }
    ]
  },
  {
    "id": "bio-core-40",
    "number": 40,
    "section": "core",
    "title": "Isolation of Genetic Material (DNA): Enzymatic Lysis & Spooling",
    "shortLabel": "Isolation of Pure DNA",
    "chapterId": "bio-ch-9",
    "chapterTitle": "Biotechnology: Principles and Processes",
    "unit": "Biotechnology",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Big Orange",
    "frequency": "CBSE 2017, 2019, 2022",
    "questionPrompt": "Describe the step-by-step procedure for the isolation of purified DNA from bacterial, fungal, or plant cells. Why is chilled ethanol added at the end?",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 9: Biotechnology: Principles and Processes",
      "page": "Page 171",
      "figures": "Fig 9.7"
    },
    "theory": [
      "• Cellular Barrier Lysis: Specific enzymes digest outer walls: Lysozyme for bacterial cells, Cellulase for plant cells, and Chitinase for fungal cells.",
      "• Deproteinisation & Nucleic Acid Purification: Ribonuclease (RNase) removes RNA, Proteases remove histone and non-histone proteins.",
      "• Chilled Ethanol Precipitation: Pure DNA is precipitated as fine white insoluble threads by adding ice-cold (chilled) ethanol.",
      "• Spooling: Collection of precipitated DNA threads by winding around a clean glass rod."
    ],
    "keyPointsAndKeywords": [
      "Lysozyme (bacteria), Cellulase (plants), Chitinase (fungi)",
      "Ribonuclease (removes RNA)",
      "Protease (removes proteins)",
      "Chilled ethanol precipitates DNA as fine threads",
      "Spooling collects pure DNA"
    ],
    "modelAnswer": {
      "statement": "Isolation of DNA requires specific cell-wall enzymatic lysis, removal of RNA and proteins by enzymes, and precipitation using chilled ethanol.",
      "markingScheme": [
        "1 Mark: Specific enzymes for bacterial (lysozyme), plant (cellulase), and fungal (chitinase) cell lysis.",
        "1 Mark: Ribonuclease and Protease treatments to remove RNA and proteins.",
        "1 Mark: Chilled ethanol precipitation and spooling description."
      ],
      "examinerTips": "Why CHILLED ethanol? Because DNA is insoluble in cold alcohol and precipitates out immediately as visible white fibres."
    },
    "derivations": [
      {
        "name": "Enzymatic Extraction & Ethanol Spooling Protocol",
        "setup": "Biochemical purification of macromolecular genomic DNA.",
        "steps": [
          {
            "text": "Step 1: Cell wall lysis:",
            "equation": "\\text{Bacteria: Lysozyme} \\; | \\; \\text{Plants: Cellulase} \\; | \\; \\text{Fungi: Chitinase}"
          },
          {
            "text": "Step 2: Removal of macromolecules:",
            "equation": "\\text{RNA removed by RNase} \\; | \\; \\text{Proteins removed by Protease}"
          },
          {
            "text": "Step 3: Precipitation & Spooling:",
            "equation": "\\text{Add ice-cold ethanol} \\implies \\text{DNA threads precipitate, spooled onto glass rod}"
          }
        ],
        "finalFormula": "\\text{Enzymatic Lysis} \\to \\text{Deproteinisation} \\to \\text{Chilled Ethanol Spooling} \\implies \\text{Purified DNA}"
      }
    ]
  },
  {
    "id": "bio-core-41",
    "number": 41,
    "section": "core",
    "title": "Restriction Enzymes (Endonucleases): Palindromes & Sticky Ends",
    "shortLabel": "Restriction Endonucleases & EcoRI",
    "chapterId": "bio-ch-9",
    "chapterTitle": "Biotechnology: Principles and Processes",
    "unit": "Biotechnology",
    "marks": "3 / 5 Marks",
    "marksNum": 5,
    "category": "Big Orange",
    "frequency": "CBSE 2015, 2018, 2020, 2024 (High Yield — 3M or 5M Question)",
    "questionPrompt": "(a) What are Restriction Endonucleases and why are they called 'molecular scissors'?\n(b) Define Palindromic Nucleotide Sequences with the specific recognition sequence of EcoRI.\n(c) What are sticky ends and how do they facilitate genetic recombination?\n(d) Explain how DNA fragments are separated and visualized using Agarose Gel Electrophoresis.\n(e) What is Elution?",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 9: Biotechnology: Principles and Processes",
      "page": "Pages 164–168",
      "figures": "Fig 9.1 & Fig 9.3"
    },
    "theory": [
      "• Molecular Scissors: Restriction Endonucleases make cuts at specific locations within DNA (isolated first in 1963 in E. coli).",
      "• Palindromic Recognition Sequences: Specific recognition sequences where the nucleotide sequence reads identically on both strands in the $5'\\to 3'$ direction.",
      "• Staggered Cleavage & Sticky Ends: Cleaves both strands at points slightly away from the centre of symmetry, producing single-stranded overhangs called Sticky Ends.",
      "• Role of DNA Ligase: Complementary sticky ends generated by the same enzyme pair via hydrogen bonds, permanently sealed by DNA ligase."
    ],
    "keyPointsAndKeywords": [
      "Molecular scissors cut at specific internal sites",
      "Palindromic sequence reads identical 5'→3' on both strands",
      "EcoRI cuts between G and A (5'-GAATTC-3')",
      "Sticky ends: Single-stranded overhanging sequences",
      "Agarose gel electrophoresis: Negative DNA moves to positive anode",
      "Ethidium bromide (EtBr) + UV = bright orange bands",
      "Elution: Extraction of DNA from sliced gel"
    ],
    "modelAnswer": {
      "statement": "Restriction endonucleases recognize specific palindromic sequences and generate sticky ends that enable seamless ligation of recombinant vectors, resolved and purified via agarose gel electrophoresis.",
      "markingScheme": [
        "1 Mark: (a) Endonuclease definition ('molecular scissors' cutting DNA phosphodiester bonds at specific internal recognition sites).",
        "1 Mark: (b) Palindromic sequence definition + EcoRI sequence: 5'-GAATTC-3' / 3'-CTTAAG-5' cutting between G and A.",
        "1 Mark: (c) Sticky ends definition and role in facilitating complementary base pairing with vector DNA for DNA ligase.",
        "1 Mark: (d) Agarose gel electrophoresis principle (negative DNA moves to anode, separated by size via sieving effect) and staining with Ethidium Bromide under UV light (bright orange bands).",
        "1 Mark: (e) Elution definition (cutting out DNA bands from agarose gel and extracting pure DNA)."
      ],
      "examinerTips": "Remember naming of EcoRI: 'E' from Escherichia (genus), 'co' from coli (species), 'R' from strain RY13, and 'I' is Roman numeral indicating the order of isolation."
    },
    "derivations": [
      {
        "name": "Restriction Endonuclease EcoRI Cleavage Mechanism",
        "setup": "Action of EcoRI isolated from Escherichia coli RY13.",
        "steps": [
          {
            "text": "Palindromic recognition sequence:",
            "equation": "5'-\\text{G A A T T C}-3' \\quad \\text{and} \\quad 3'-\\text{C T T A A G}-5'"
          },
          {
            "text": "Staggered cut location:",
            "equation": "\\text{EcoRI cuts between G and A on both strands away from center}"
          },
          {
            "text": "Sticky end formation:",
            "equation": "5'-\\text{G} \\quad \\text{and} \\quad 5'-\\text{A A T T C}-3' \\; (\\text{Complementary single-stranded overhangs})"
          }
        ],
        "specialCases": [
          {
            "title": "Nomenclature Rules",
            "text": "E = Escherichia (genus), co = coli (species), R = RY13 (strain), I = First endonuclease isolated from this strain."
          }
        ],
        "finalFormula": "\\text{EcoRI cuts between G and A} \\implies \\text{Sticky Ends Annealed by DNA Ligase}"
      }
    ]
  },
  {
    "id": "bio-core-42",
    "number": 42,
    "section": "core",
    "title": "Competent Host: Methods of Gene Transfer (Divalent Cations, Heat Shock & Biolistics)",
    "shortLabel": "Competent Host & Gene Transfer",
    "chapterId": "bio-ch-9",
    "chapterTitle": "Biotechnology: Principles and Processes",
    "unit": "Biotechnology",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Big Orange",
    "frequency": "CBSE 2016, 2018, 2021, 2023",
    "questionPrompt": "Since DNA is a hydrophilic molecule, it cannot pass across hydrophobic cell membranes. Explain the methods used to make host cells 'competent' to take up recombinant DNA:\n(a) Chemical treatment & Heat shock (bacteria)\n(b) Micro-injection (animal cells)\n(c) Gene gun / Biolistics (plant cells)\n(d) Disarmed pathogen vectors",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 9: Biotechnology: Principles and Processes",
      "page": "Pages 169–170"
    },
    "theory": [
      "• Hydrophilic Barrier: DNA is a hydrophilic, negatively charged molecule that cannot naturally pass through lipid bilayer cell membranes; host cells must be made competent.",
      "• Chemical Divalent Cation Treatment: Incubation with ice-cold divalent cations like calcium ($Ca^{2+}$) increases membrane permeability through cell wall pores.",
      "• Heat Shock Method: Incubation of cells with recombinant DNA on ice $\\to$ brief heat shock at $42^\\circ\\text{C}$ for 42 seconds $\\to$ immediate return to ice.",
      "• Physical Gene Transfer: Micro-injection (direct injection into nucleus of animal cells); Biolistics / Gene Gun (gold or tungsten micro-particles coated with DNA bombarded into plant cells at high velocity)."
    ],
    "keyPointsAndKeywords": [
      "Hydrophilic DNA cannot cross lipid membrane",
      "Divalent Ca²⁺ increases cell wall pore permeability",
      "Heat shock at 42°C forces plasmid uptake",
      "Micro-injection directly into nucleus (animal cells)",
      "Biolistics/gene gun using gold/tungsten particles (plants)",
      "Disarmed Agrobacterium tumefaciens"
    ],
    "modelAnswer": {
      "statement": "Host competency is achieved via divalent Ca²⁺ and heat shock (bacteria), microinjection (animals), biolistics (plants), or disarmed vectors.",
      "markingScheme": [
        "1 Mark: Chemical treatment with Ca²⁺ + Heat shock at 42°C procedure.",
        "1 Mark: Microinjection for animal cells (direct nuclear injection).",
        "1 Mark: Biolistics/gene gun for plant cells (gold/tungsten particles) + Disarmed vectors."
      ],
      "examinerTips": "Remember: Biolistics uses GOLD or TUNGSTEN microparticles because they are inert and do not react with cellular components."
    },
    "derivations": [
      {
        "name": "Chemical Competence & Physical Gene Delivery Methods",
        "setup": "Transforming recombinant plasmids into recipient host cells.",
        "steps": [
          {
            "text": "Bacterial Competence (Chemical + Heat Shock):",
            "equation": "\\text{Cold } \\text{CaCl}_2 \\to \\text{Ice incubation} \\to \\text{Heat Shock } (42^\\circ\\text{C}, 42\\text{ s}) \\to \\text{Ice}"
          },
          {
            "text": "Animal Cells (Micro-injection):",
            "equation": "\\text{Direct injection of rDNA into animal cell nucleus via glass micropipette}"
          },
          {
            "text": "Plant Cells (Biolistics / Gene Gun):",
            "equation": "\\text{Gold/Tungsten microprojectiles coated with DNA shot into plant tissue}"
          }
        ],
        "finalFormula": "\\text{Bacteria: } \\text{CaCl}_2 \\text{ + Heat Shock} \\quad | \\quad \\text{Animals: Micro-injection} \\quad | \\quad \\text{Plants: Biolistics}"
      }
    ]
  },
  {
    "id": "bio-core-43",
    "number": 43,
    "section": "core",
    "title": "Transgenic Animals: Reasons for Production & Rosie Cow",
    "shortLabel": "Transgenic Animals & Rosie Cow",
    "chapterId": "bio-ch-10",
    "chapterTitle": "Biotechnology and its Applications",
    "unit": "Biotechnology",
    "marks": "2 / 3 Marks",
    "marksNum": 3,
    "category": "Big Orange",
    "frequency": "CBSE 2015, 2017, 2019, 2022, 2024",
    "questionPrompt": "(a) What are transgenic animals?\n(b) State any three major benefits of creating transgenic animals.\n(c) What was special about 'Rosie', the first transgenic cow produced in 1997?",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 10: Biotechnology and its Applications",
      "page": "Pages 178–180"
    },
    "theory": [
      "• Transgenic Animals: Animals whose genome has been genetically altered to carry and express an alien (foreign) gene.",
      "• Primary Objectives: (i) Study normal physiology and development, (ii) Study human diseases (cancer, cystic fibrosis, Alzheimer's), (iii) Produce biological products, (iv) Vaccine safety testing, (v) Chemical toxicity testing.",
      "• Rosie Cow (1997): First transgenic cow produced human protein-enriched milk containing 2.4 grams per litre of human alpha-lactalbumin, nutritionally superior to natural cow milk for human infants."
    ],
    "keyPointsAndKeywords": [
      "DNA manipulated to express foreign gene",
      "95% transgenic animals are mice",
      "Alpha-1-antitrypsin for emphysema",
      "Vaccine safety testing (Polio)",
      "Rosie cow (1997): Human alpha-lactalbumin enriched milk (2.4 g/L)"
    ],
    "modelAnswer": {
      "statement": "Transgenic animals are engineered to investigate physiology, model diseases, test vaccines, and produce therapeutic proteins like alpha-lactalbumin in Rosie cow.",
      "markingScheme": [
        "0.5 Mark: Transgenic animal definition.",
        "1.5 Marks: Three valid applications (Disease study, Biological products like alpha-1-antitrypsin, Vaccine testing).",
        "1 Mark: Rosie cow details: human alpha-lactalbumin, 2.4 g/L, nutritionally balanced for babies."
      ],
      "examinerTips": "Remember: Emphysema is treated using alpha-1-antitrypsin produced by transgenic animals."
    },
    "derivations": [
      {
        "name": "Five Key Applications & Case Study of Rosie Cow",
        "setup": "Genetic modification of mammals for biomedical and therapeutic benefit.",
        "steps": [
          {
            "text": "1. Biological Products (Rosie Cow):",
            "equation": "\\text{Human gene for } \\alpha\\text{-lactalbumin inserted} \\implies 2.4 \\text{ g/L humanized infant milk}"
          },
          {
            "text": "2. Disease Models:",
            "equation": "\\text{Transgenic mice models for Cancer, Cystic Fibrosis, Rheumatoid Arthritis, Alzheimer's}"
          },
          {
            "text": "3. Vaccine Safety Testing:",
            "equation": "\\text{Transgenic mice used to test safety of Polio vaccine before human trials}"
          }
        ],
        "finalFormula": "\\text{Rosie Cow (1997)} \\implies 2.4 \\text{ g/L Human } \\alpha\\text{-lactalbumin Enriched Milk for Infants}"
      }
    ]
  },
  {
    "id": "bio-core-44",
    "number": 44,
    "section": "core",
    "title": "Gene Therapy: Clinical Trial for ADA Deficiency",
    "shortLabel": "ADA Gene Therapy",
    "chapterId": "bio-ch-10",
    "chapterTitle": "Biotechnology and its Applications",
    "unit": "Biotechnology",
    "marks": "3 / 5 Marks",
    "marksNum": 3,
    "category": "Big Orange",
    "frequency": "CBSE 2016, 2018, 2020, 2023 (Classic 3M/5M)",
    "questionPrompt": "Explain the clinical protocol of Gene Therapy administered in 1990 to a 4-year-old girl with Adenosine Deaminase (ADA) deficiency. Why is this treatment not permanent, and how can a permanent cure be achieved?",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 10: Biotechnology and its Applications",
      "page": "Pages 176–177"
    },
    "theory": [
      "• Gene Therapy Definition: A collection of clinical methods that allows correction of a gene defect diagnosed in a child or embryo.",
      "• Target Disease: Adenosine Deaminase (ADA) deficiency, an autosomal recessive disorder causing Severe Combined Immunodeficiency (SCID) due to failure of purine metabolism.",
      "• Clinical Trial (1990): First clinical gene therapy performed on a 4-year-old girl with ADA deficiency using retroviral ex vivo transduction of patient lymphocytes.",
      "• Permanent Cure: Gene therapy introduced into bone marrow stem cells at early embryonic stages produces a permanent cure, unlike periodic lymphocyte infusions."
    ],
    "keyPointsAndKeywords": [
      "Adenosine Deaminase deficiency causes SCID",
      "First clinical gene therapy in 1990 on 4-year-old girl",
      "Retroviral vector introduces functional ADA cDNA into lymphocytes",
      "Periodic infusions needed because lymphocytes have limited lifespan",
      "Permanent cure: Gene introduced at early embryonic stage"
    ],
    "modelAnswer": {
      "statement": "ADA deficiency gene therapy uses retroviral vectors to insert functional ADA cDNA into patient lymphocytes, requiring lifelong infusions unless performed embryonically.",
      "markingScheme": [
        "1 Mark: ADA deficiency cause (gene deletion leading to SCID).",
        "1 Mark: Gene therapy procedure (lymphocyte culture → retroviral ADA cDNA insertion → patient re-infusion).",
        "1 Mark: Reason why non-permanent (finite lifespan of lymphocytes) vs permanent cure (early embryonic gene introduction)."
      ],
      "examinerTips": "Other temporary treatments for ADA deficiency include Bone Marrow Transplantation and Enzyme Replacement Therapy (ERT injections), but gene therapy is the modern molecular approach."
    },
    "derivations": [
      {
        "name": "Stepwise Ex Vivo Retroviral Gene Therapy Protocol for ADA-SCID",
        "setup": "Correction of adenosine deaminase deficiency using retroviral vector.",
        "steps": [
          {
            "text": "Step 1: Lymphocyte collection:",
            "equation": "\\text{Lymphocytes extracted from peripheral blood of ADA-deficient patient}"
          },
          {
            "text": "Step 2: Ex vivo culture:",
            "equation": "\\text{Lymphocytes cultured in vitro in laboratory medium}"
          },
          {
            "text": "Step 3: Functional cDNA introduction:",
            "equation": "\\text{Functional ADA cDNA inserted into lymphocytes using a disabled Retroviral vector}"
          },
          {
            "text": "Step 4: Re-infusion:",
            "equation": "\\text{Genetically modified lymphocytes infused back into patient's circulation}"
          }
        ],
        "specialCases": [
          {
            "title": "Why is it not permanent?",
            "text": "Lymphocytes are not immortal and die after a few weeks, requiring periodic repeated infusions. A permanent cure is achieved only if functional ADA gene is introduced into bone marrow cells during early embryonic development."
          }
        ],
        "finalFormula": "\\text{Patient Lymphocytes} \\xrightarrow{\\text{Retroviral ADA cDNA}} \\text{Functional ADA Enzyme Synthesised}"
      }
    ]
  }
];

export const BIG_ORANGE_PAGE_QUESTIONS = [
  {
    "id": "bio-page-1",
    "number": 45,
    "section": "page",
    "title": "Embryo Sac (7-Celled, 8-Nucleate Organization) — Diagram Pg 10",
    "shortLabel": "Embryo Sac (Pg 10)",
    "chapterId": "bio-ch-1",
    "chapterTitle": "Sexual Reproduction in Flowering Plants",
    "unit": "Reproduction",
    "marks": "3 / 5 Marks",
    "marksNum": 5,
    "category": "Big Orange (NCERT Page-Referenced)",
    "frequency": "Exact NCERT Diagram Pg 10 (CBSE 2016, 2018, 2021, 2023 — 3M or 5M Question)",
    "diagramId": "embryo-sac",
    "questionPrompt": "Draw a neat, labelled diagram of a mature female gametophyte (embryo sac) of an angiosperm as illustrated on NCERT Page 10. Label: Antipodals, Polar nuclei, Central cell, Egg cell, Synergids, and Filiform apparatus. Explain monosporic development and why the embryo sac is 7-celled but 8-nucleate.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 1: Sexual Reproduction in Flowering Plants",
      "page": "Page 10",
      "figures": "Fig 1.8(d)"
    },
    "theory": [
      "• Monosporic Development: Typical embryo sac (Polygonum type) develops from the single functional chalazal megaspore through 3 consecutive mitotic nuclear divisions.",
      "• Nuclear vs Cellular Tally: Contains 8 nuclei that organize into 7 cells: 3 Antipodal cells (chalazal), 1 large Central cell with 2 polar nuclei, and 3-celled Egg apparatus (micropylar).",
      "• Egg Apparatus Composition: One central haploid egg cell and two flanking synergids bearing cellular filiform apparatus."
    ],
    "keyPointsAndKeywords": [
      "7 cells and 8 nuclei",
      "Chalazal pole: 3 Antipodals",
      "Central cell: 2 Polar nuclei",
      "Micropylar pole: 1 Egg cell + 2 Synergids",
      "Filiform apparatus guides pollen tube"
    ],
    "modelAnswer": {
      "statement": "The mature angiosperm embryo sac is a 7-celled, 8-nucleate structure with chalazal antipodals, a bi-nucleate central cell, and a micropylar egg apparatus, formed via monosporic development.",
      "markingScheme": [
        "2.5 Marks: Accurate diagram with correct chalazal/micropylar orientation and all 6 essential labels (Antipodals, Polar nuclei, Central cell, Egg cell, Synergids, Filiform apparatus).",
        "1.5 Marks: Description of monosporic development (3 successive free-nuclear mitotic divisions from 1 functional megaspore).",
        "1 Mark: Explanation of 7-celled vs 8-nucleate condition (two polar nuclei share the central cell)."
      ],
      "examinerTips": "Remember: Never label 8 cells! It is strictly 7-celled because the central cell encloses both polar nuclei."
    },
    "diagram": {
      "hasDiagram": true,
      "diagramId": "embryo-sac",
      "title": "7-Celled, 8-Nucleate Mature Embryo Sac",
      "examDrawingGuide": [
        "1. Draw oval female gametophyte showing Chalazal pole at top and Micropylar pole at bottom.",
        "2. At Chalazal end: Draw 3 Antipodal cells (n).",
        "3. In Center: Draw large Central cell with 2 Polar nuclei (n+n).",
        "4. At Micropylar end: Draw Egg apparatus consisting of 1 central Egg cell (n) and 2 flanking Synergids (n) with finger-like Filiform apparatus."
      ]
    },
    "derivations": [
      {
        "name": "Monosporic Embryo Sac Nuclear Divisions & Cellularization",
        "setup": "Successive free nuclear divisions of the functional megaspore.",
        "steps": [
          {
            "text": "Division 1 (Free nuclear mitosis):",
            "equation": "1 \\text{ Megaspore Nucleus } (n) \\xrightarrow{} 2 \\text{ Nuclei (move to opposite poles)}"
          },
          {
            "text": "Division 2:",
            "equation": "2 \\text{ Nuclei } \\xrightarrow{} 4 \\text{ Nuclei (2 at each pole)}"
          },
          {
            "text": "Division 3:",
            "equation": "4 \\text{ Nuclei } \\xrightarrow{} 8 \\text{ Nuclei (4 at chalazal pole, 4 at micropylar pole)}"
          },
          {
            "text": "Cellularization & spatial organization:",
            "equation": "3 \\text{ Antipodals (Chalaza)} + 1 \\text{ Central Cell (2 Polar Nuclei)} + 3 \\text{ Egg Apparatus (Micropyle)}"
          }
        ],
        "finalFormula": "7 \\text{ Cells and } 8 \\text{ Nuclei} \\; (\\text{Polygonum type monosporic female gametophyte})"
      }
    ]
  },
  {
    "id": "bio-page-2",
    "number": 46,
    "section": "page",
    "title": "Megasporangium (Anatropous Ovule) — Diagram Pg 9",
    "shortLabel": "Megasporangium / Ovule",
    "chapterId": "bio-ch-1",
    "chapterTitle": "Sexual Reproduction in Flowering Plants",
    "unit": "Reproduction",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Big Orange (NCERT Page-Referenced)",
    "frequency": "NCERT Fig 1.7(d) Pg 9 (CBSE 2017, 2019, 2022)",
    "diagramId": "megasporangium",
    "questionPrompt": "Draw a labelled diagram of a typical anatropous ovule (megasporangium). Label Funicle, Hilum, Micropyle, Outer integument, Inner integument, Nucellus, Embryo sac, and Chalaza.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 1: Sexual Reproduction in Flowering Plants",
      "page": "Page 9",
      "figures": "Fig 1.7(d)"
    },
    "theory": [
      "• Anatropous Architecture: Most common ovule type in angiosperms (>80%), where the ovule body is inverted by 180° such that the micropyle lies close to the funicle.",
      "• Integuments & Nucellus: Two protective envelopes (integuments) encircle the central parenchymatous nutritive tissue (nucellus), except at the micropylar aperture.",
      "• Hilum & Funicle: Funicle attaches the ovule to the placenta; Hilum is the anatomical scar where the funicle fuses with the body."
    ],
    "keyPointsAndKeywords": [
      "Funicle attaches ovule to placenta",
      "Hilum is junction point",
      "Micropyle pore opposite Chalaza base",
      "Nucellus contains food reserves"
    ],
    "modelAnswer": {
      "statement": "An anatropous ovule is inverted such that the micropyle lies close to the funicle, with chalaza at the opposite basal end.",
      "markingScheme": [
        "1.5 Marks: Accurate curved anatropous ovule drawing.",
        "1.5 Marks: Correct labelling of all 8 anatomical components."
      ],
      "examinerTips": "Ensure the micropyle points downwards near the funicle stalk to depict a true anatropous ovule."
    },
    "diagram": {
      "hasDiagram": true,
      "diagramId": "megasporangium",
      "title": "Longitudinal Section of Anatropous Ovule",
      "examDrawingGuide": [
        "1. Draw inverted ovule body attached to placenta by Funicle (stalk) and Hilum (junction).",
        "2. Draw outer and inner Integuments leaving an apical pore: Micropyle.",
        "3. Draw opposite basal region: Chalaza.",
        "4. Draw central nutritive parenchymatous Nucellus embedding the mature female gametophyte (embryo sac)."
      ]
    },
    "derivations": [
      {
        "name": "Anatomical Components of the Integumented Megasporangium",
        "setup": "Longitudinal section of mature angiospermic ovule.",
        "steps": [
          {
            "text": "Stalk and junction:",
            "equation": "\\text{Funicle (stalk)} + \\text{Hilum (fusion zone with ovule body)}"
          },
          {
            "text": "Protective layers:",
            "equation": "\\text{Outer and Inner Integuments enclose ovule body}"
          },
          {
            "text": "Nutritive tissue and gametophyte:",
            "equation": "\\text{Nucellus (abundant reserve food)} \\implies \\text{Embeds 7-celled Embryo Sac}"
          },
          {
            "text": "Poles and orientation:",
            "equation": "\\text{Micropyle (entry pore)} \\longleftrightarrow \\text{Chalaza (basal vegetative pole)}"
          }
        ],
        "finalFormula": "\\text{Integumented Megasporangium} \\implies \\text{Develops into Seed after fertilisation}"
      }
    ]
  },
  {
    "id": "bio-page-3",
    "number": 47,
    "section": "page",
    "title": "Fertilisation & Triple Fusion in Angiosperms",
    "shortLabel": "Fertilisation & Triple Fusion",
    "chapterId": "bio-ch-1",
    "chapterTitle": "Sexual Reproduction in Flowering Plants",
    "unit": "Reproduction",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Big Orange (NCERT Page-Referenced)",
    "frequency": "CBSE 2018, 2020, 2023",
    "questionPrompt": "What is Triple Fusion? Where does it occur in the ovule? Name the nuclei involved and the ploidy of the resulting product.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 1: Sexual Reproduction in Flowering Plants",
      "page": "Page 16"
    },
    "theory": [
      "• Syngamy: The fusion of one haploid male gamete ($n$) with the egg cell nucleus ($n$) producing a diploid zygote ($2n$), which develops into the embryo.",
      "• Triple Fusion: The fusion of the second haploid male gamete ($n$) with the two haploid polar nuclei ($n+n$) of the central cell, forming the triploid Primary Endosperm Nucleus ($PEN, 3n$).",
      "• Endosperm Precedence: Endosperm development always precedes embryo development to ensure a guaranteed nutritive tissue reserve for the dividing zygote."
    ],
    "keyPointsAndKeywords": [
      "Male gamete (n) + 2 Polar nuclei (n+n)",
      "Occurs in the central cell",
      "Product is triploid PEN (3n)",
      "Develops into nutritive endosperm"
    ],
    "modelAnswer": {
      "statement": "Triple fusion is the vegetative fusion of a male gamete (n) with two polar nuclei (2n) inside the central cell yielding the triploid PEN (3n).",
      "markingScheme": [
        "1 Mark: Three nuclei involved (1 male gamete + 2 polar nuclei) and site (central cell).",
        "1 Mark: Product identity (Primary Endosperm Nucleus / PEN) and triploid (3n) ploidy."
      ],
      "examinerTips": "Triple fusion precedes embryo development to ensure food reserves (endosperm) are available for the developing embryo."
    },
    "derivations": [
      {
        "name": "Nuclear Arithmetic of Angiospermic Fertilisation",
        "setup": "Double fertilisation events following siphonogamous pollen tube entry.",
        "steps": [
          {
            "text": "Syngamy fusion:",
            "equation": "\\text{Male Gamete } (n) + \\text{Egg Cell } (n) \\xrightarrow{} \\text{Zygote } (2n) \\to \\text{Embryo}"
          },
          {
            "text": "Triple Fusion:",
            "equation": "\\text{Male Gamete } (n) + 2 \\text{ Polar Nuclei } (n+n) \\xrightarrow{} \\text{PEN } (3n) \\to \\text{Endosperm}"
          }
        ],
        "finalFormula": "\\text{Double Fertilisation} = \\text{Syngamy (2n)} + \\text{Triple Fusion (3n)}"
      }
    ]
  },
  {
    "id": "bio-page-4",
    "number": 48,
    "section": "page",
    "title": "Perisperm: Definition, Significance & Examples",
    "shortLabel": "Perisperm Definition & Examples",
    "chapterId": "bio-ch-1",
    "chapterTitle": "Sexual Reproduction in Flowering Plants",
    "unit": "Reproduction",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Big Orange (NCERT Page-Referenced)",
    "frequency": "CBSE 2017, 2019, 2022 (Classic 1M/2M)",
    "questionPrompt": "What is perisperm? How does it differ from endosperm? Give two examples of seeds possessing perisperm.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 1: Sexual Reproduction in Flowering Plants",
      "page": "Page 18"
    },
    "theory": [
      "• Perisperm Definition: Persistent, residual, nutritive nucellar tissue retained in mature seeds after fertilisation.",
      "• Distinction from Endosperm: Endosperm is triploid ($3n$) formed by triple fusion; Perisperm is maternal diploid ($2n$) originating directly from the nucellus.",
      "• Classical Examples: Black pepper (Piper nigrum), Beetroot (Beta vulgaris), and Water lily (Nymphaea)."
    ],
    "keyPointsAndKeywords": [
      "Persistent residual nucellus",
      "Diploid (2n) maternal origin",
      "Examples: Black pepper and Beet",
      "Differs from triploid (3n) endosperm"
    ],
    "modelAnswer": {
      "statement": "Perisperm represents persistent diploid nucellar tissue in mature seeds of black pepper and beet.",
      "markingScheme": [
        "1 Mark: Definition (persistent residual nucellus in seed).",
        "1 Mark: Two correct examples: Black pepper and Beet."
      ],
      "examinerTips": "Do not confuse Perisperm (persistent nucellus, 2n) with Pericarp (fruit wall derived from ovary wall, 2n)."
    },
    "derivations": [
      {
        "name": "Origin & Ploidy Comparison: Perisperm vs Endosperm",
        "setup": "Embryonic reserve tissue analysis in angiosperms.",
        "steps": [
          {
            "text": "Perisperm origin & ploidy:",
            "equation": "\\text{Residual Nucellus (Maternal tissue)} \\implies \\text{Diploid } (2n)"
          },
          {
            "text": "Endosperm origin & ploidy:",
            "equation": "\\text{Triple Fusion (PEN)} \\implies \\text{Triploid } (3n)"
          }
        ],
        "finalFormula": "\\text{Perisperm} = \\text{Persistent Maternal Diploid Nucellus (e.g. Black Pepper, Beet)}"
      }
    ]
  },
  {
    "id": "bio-page-5",
    "number": 49,
    "section": "page",
    "title": "Microspore / Developing Pollen Grains — Pg 7",
    "shortLabel": "Microsporogenesis (Pg 7)",
    "chapterId": "bio-ch-1",
    "chapterTitle": "Sexual Reproduction in Flowering Plants",
    "unit": "Reproduction",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Big Orange (NCERT Page-Referenced)",
    "frequency": "NCERT Pg 7 (CBSE 2018, 2021)",
    "diagramId": "pollen-grain",
    "questionPrompt": "Explain microsporogenesis. How does a single microspore mother cell (PMC) develop into four functional pollen grains?",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 1: Sexual Reproduction in Flowering Plants",
      "page": "Page 7"
    },
    "theory": [
      "• Microsporogenesis: Formation of haploid microspores from diploid pollen mother cells (PMC) via meiosis inside microsporangia.",
      "• Asymmetric Mitosis: Microspore undergoes unequal mitotic division, resulting in a large Vegetative cell with irregular nucleus and a small spindle-shaped Generative cell.",
      "• Cell Fates: Vegetative cell provides nutrients and forms pollen tube; Generative cell divides to yield two haploid male gametes."
    ],
    "keyPointsAndKeywords": [
      "PMC (2n) undergoes meiosis",
      "Microspore tetrad (n)",
      "All 4 microspores develop into functional pollen",
      "Anther dehydration separates tetrad"
    ],
    "modelAnswer": {
      "statement": "Microsporogenesis involves meiotic reduction of a diploid PMC into a tetrad of four haploid, viable pollen grains.",
      "markingScheme": [
        "1 Mark: Definition of microsporogenesis + meiotic division of PMC (2n).",
        "1 Mark: Dissociation of microspore tetrad into 4 functional pollen grains."
      ],
      "examinerTips": "Remember: 1 PMC gives 4 functional pollen grains. If an anther has 100 PMCs, it produces 400 pollen grains."
    },
    "diagram": {
      "hasDiagram": true,
      "diagramId": "pollen-grain",
      "title": "Microspore Maturation into Pollen Grain",
      "examDrawingGuide": [
        "1. Draw microspore undergoing vacuolation and asymmetric mitotic spindle formation.",
        "2. Draw unequal division into a large Vegetative cell and small Generative cell.",
        "3. Show exine sculpturing and prominent germ pores.",
        "4. Label mature 2-celled pollen grain."
      ]
    },
    "derivations": [
      {
        "name": "Microspore Mitotic Cytokinesis & 2-Celled Transition",
        "setup": "Maturation of unicellular microspore into male gametophyte.",
        "steps": [
          {
            "text": "1. Microspore enlargement & vacuolation:",
            "equation": "\\text{Microspore grows, large central vacuole develops, nucleus shifts to periphery}"
          },
          {
            "text": "2. Asymmetric spindle mitosis:",
            "equation": "\\text{Unequal cytokinesis} \\implies \\text{Large Vegetative cell} + \\text{Small Generative cell}"
          },
          {
            "text": "3. Wall development:",
            "equation": "\\text{Deposition of sporopollenin exine & cellulose intine}"
          }
        ],
        "finalFormula": "1 \\text{ Microspore (n)} \\xrightarrow{\\text{Asymmetric Mitosis}} \\text{2-Celled Pollen Grain (Vegetative + Generative)}"
      }
    ]
  },
  {
    "id": "bio-page-6",
    "number": 50,
    "section": "page",
    "title": "Apocarpous vs Syncarpous Pistil",
    "shortLabel": "Apocarpous vs Syncarpous",
    "chapterId": "bio-ch-1",
    "chapterTitle": "Sexual Reproduction in Flowering Plants",
    "unit": "Reproduction",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Big Orange (NCERT Page-Referenced)",
    "frequency": "NCERT Pg 8 Fig 1.7 (CBSE 2016, 2019, 2023)",
    "questionPrompt": "Differentiate between an apocarpous pistil and a syncarpous pistil with one example of each.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 1: Sexual Reproduction in Flowering Plants",
      "page": "Page 8",
      "figures": "Fig 1.7(a) & (b)"
    },
    "theory": [
      "• Apocarpous Pistil: Gynoecium where carpels are completely free and separate from one another (e.g. Michelia, Lotus, Rose).",
      "• Syncarpous Pistil: Gynoecium where two or more carpels are fused together into a single compound pistil (e.g. Papaver, Hibiscus, Tomato).",
      "• Fruit Consequence: Apocarpous pistils form aggregated fruits (etaerio of achenes/drupes); Syncarpous pistils form simple fruits."
    ],
    "keyPointsAndKeywords": [
      "Apocarpous: Carpels are free (Michelia)",
      "Syncarpous: Carpels are fused (Papaver)",
      "Multicarpellary condition"
    ],
    "modelAnswer": {
      "statement": "Multicarpellary gynoecia are either apocarpous (free carpels as in Michelia) or syncarpous (fused carpels as in Papaver).",
      "markingScheme": [
        "1 Mark: Apocarpous definition (free carpels) + example (Michelia).",
        "1 Mark: Syncarpous definition (fused carpels) + example (Papaver)."
      ],
      "examinerTips": "NCERT Figure 1.7 clearly illustrates: Fig 1.7(a) multicarpellary syncarpous pistil of Papaver; Fig 1.7(b) multicarpellary apocarpous gynoecium of Michelia."
    },
    "derivations": [
      {
        "name": "Morphological Framework: Apocarpous vs Syncarpous",
        "setup": "Carpellary fusion states in angiosperm gynoecia.",
        "steps": [
          {
            "text": "Apocarpous (Free carpels):",
            "equation": "\\text{Individual carpels separate} \\implies \\text{Michelia, Lotus, Rose}"
          },
          {
            "text": "Syncarpous (Fused carpels):",
            "equation": "\\text{Carpels united into compound pistil} \\implies \\text{Papaver, Hibiscus, Tomato}"
          }
        ],
        "finalFormula": "\\text{Apocarpous = Free Carpels (Michelia)} \\quad | \\quad \\text{Syncarpous = Fused Carpels (Papaver)}"
      }
    ]
  },
  {
    "id": "bio-page-7",
    "number": 51,
    "section": "page",
    "title": "Blastocyst (2 Marks) — Implantation & Layers",
    "shortLabel": "Blastocyst Implantation (2M)",
    "chapterId": "bio-ch-2",
    "chapterTitle": "Human Reproduction",
    "unit": "Reproduction",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Big Orange (NCERT Page-Referenced)",
    "frequency": "Explicitly requested: Blastocyst (2 marks) - Implantation - outer layer and inside it",
    "diagramId": "blastocyst",
    "questionPrompt": "Describe the structural organization of a blastocyst and explain how its outer layer and inner cellular mass participate in implantation.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 2: Human Reproduction",
      "page": "Pages 36–37",
      "figures": "Fig 2.11(e)"
    },
    "theory": [
      "• Blastocyst (Blastodermic Vesicle): Human embryo at 64–128 cell stage, cavitated with an outer single layer (Trophoblast) and an Inner Cell Mass.",
      "• Trophoblast Function: Outer cellular envelope that secretes proteolytic enzymes, adheres to endometrium, forms chorionic villi, and gives rise to the placenta.",
      "• Inner Cell Mass (ICM): Pluripotent embryonic stem cells that differentiate into all three primary germ layers (ectoderm, mesoderm, endoderm) forming the embryo proper."
    ],
    "keyPointsAndKeywords": [
      "Trophoblast: Outer layer, attaches to endometrium, forms placenta",
      "Inner Cell Mass (ICM): Pluripotent stem cells, forms embryo proper",
      "Implantation embeds blastocyst into uterine wall"
    ],
    "modelAnswer": {
      "statement": "The blastocyst consists of outer trophoblast (attaches to endometrium, placenta) and inner cell mass (embryo proper).",
      "markingScheme": [
        "1 Mark: Trophoblast function in attaching to endometrium.",
        "1 Mark: Inner cell mass differentiation into embryonic germ layers + implantation definition."
      ],
      "examinerTips": "Trophoblast forms extra-embryonic membranes (placenta), NOT the embryo itself. The embryo is formed strictly from the ICM."
    },
    "diagram": {
      "hasDiagram": true,
      "diagramId": "blastocyst",
      "title": "Blastocyst Architecture & Implantation",
      "examDrawingGuide": [
        "1. Draw spherical blastocyst cross-section with outer single layer of flattened Trophoblast cells.",
        "2. Draw inner cluster of rounded cells at embryonic pole: Inner Cell Mass.",
        "3. Label large fluid-filled cavity: Blastocoel.",
        "4. Show Trophoblast developing chorionic villi for endometrial implantation."
      ]
    },
    "derivations": [
      {
        "name": "Cell Lineage Separation in the Human Blastocyst",
        "setup": "First developmental cell fate determination in mammalian embryogenesis.",
        "steps": [
          {
            "text": "Trophoblast layer (Outer trophectoderm):",
            "equation": "\\text{Flattened cells} \\implies \\text{Attaches to endometrium & forms fetal placenta}"
          },
          {
            "text": "Inner Cell Mass (Embryoblast):",
            "equation": "\\text{Cluster at embryonic pole} \\implies \\text{Forms embryo proper (Ectoderm, Mesoderm, Endoderm)}"
          },
          {
            "text": "Central Blastocoel cavity:",
            "equation": "\\text{Fluid-filled cavity facilitating cell migration and spatial patterning}"
          }
        ],
        "finalFormula": "\\text{Trophoblast = Extra-embryonic Placenta} \\quad | \\quad \\text{Inner Cell Mass = Embryo Proper}"
      }
    ]
  },
  {
    "id": "bio-page-8",
    "number": 52,
    "section": "page",
    "title": "Coleoptile vs Coleorhiza — Differentiate Pg 19",
    "shortLabel": "Coleoptile vs Coleorhiza (Pg 19)",
    "chapterId": "bio-ch-1",
    "chapterTitle": "Sexual Reproduction in Flowering Plants",
    "unit": "Reproduction",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Big Orange (NCERT Page-Referenced)",
    "frequency": "Exact NCERT Pg 19 query (CBSE 2017, 2020, 2023)",
    "diagramId": "monocot-embryo",
    "questionPrompt": "Differentiate between Coleoptile and Coleorhiza found in a monocotyledonous embryo on the basis of location, structure, and protective function.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 1: Sexual Reproduction in Flowering Plants",
      "page": "Page 19",
      "figures": "Fig 1.14(b)"
    },
    "theory": [
      "• Coleoptile: Conical, protective foliar sheath enclosing the young shoot apex (plumule) and rudimentary leaves in monocot grass embryos.",
      "• Coleorhiza: Solid, undifferentiated protective parenchymatous sheath enclosing the radicle and root cap in monocot embryos.",
      "• Germination Behavior: Coleoptile pierces soil and turns green during germination; Coleorhiza remains non-green and is ruptured by emerging root."
    ],
    "keyPointsAndKeywords": [
      "Coleoptile: Foliar sheath protecting plumule / shoot apex",
      "Coleorhiza: Undifferentiated sheath protecting radicle / root cap",
      "Coleoptile emerges above ground; Coleorhiza remains below"
    ],
    "modelAnswer": {
      "statement": "Coleoptile is a foliar sheath protecting the plumule, while Coleorhiza is an undifferentiated sheath protecting the radicle in monocot embryos.",
      "markingScheme": [
        "1 Mark: Coleoptile (location at epicotyl, protects plumule/shoot apex).",
        "1 Mark: Coleorhiza (location at hypocotyl, protects radicle/root cap)."
      ],
      "examinerTips": "Coleoptile is phototropic and turns green; coleorhiza never turns green and breaks open during root emergence."
    },
    "diagram": {
      "hasDiagram": true,
      "diagramId": "monocot-embryo",
      "title": "Longitudinal Section of Monocot Embryo (Grass)",
      "examDrawingGuide": [
        "1. Draw single large shield-shaped cotyledon situated laterally: Scutellum.",
        "2. Draw embryonal axis showing shoot apex (plumule) enclosed in foliar sheath: Coleoptile.",
        "3. Draw root cap and radicle at lower end enclosed in undifferentiated sheath: Coleorhiza.",
        "4. Label epiblast (remnant of second cotyledon) opposite scutellum."
      ]
    },
    "derivations": [
      {
        "name": "Comparative Anatomy: Coleoptile vs Coleorhiza",
        "setup": "Embryonal axis sheathing in monocotyledonous grasses (Poaceae).",
        "steps": [
          {
            "text": "Coleoptile (Epicotyl sheath):",
            "equation": "\\text{Encloses Plumule} \\implies \\text{Foliar nature, pierces soil, photosynthesises}"
          },
          {
            "text": "Coleorhiza (Hypocotyl sheath):",
            "equation": "\\text{Encloses Radicle & Root Cap} \\implies \\text{Non-foliar, ruptured by primary root}"
          }
        ],
        "finalFormula": "\\text{Coleoptile = Protects Plumule (Shoot)} \\quad | \\quad \\text{Coleorhiza = Protects Radicle (Root)}"
      }
    ]
  },
  {
    "id": "bio-page-9",
    "number": 53,
    "section": "page",
    "title": "Placenta: Structure & Endocrine Functions — Pg 37",
    "shortLabel": "Placenta Structure & Hormones",
    "chapterId": "bio-ch-2",
    "chapterTitle": "Human Reproduction",
    "unit": "Reproduction",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Big Orange (NCERT Page-Referenced)",
    "frequency": "NCERT Pg 37 (CBSE 2016, 2018, 2021, 2024)",
    "diagramId": "placenta-fetus",
    "questionPrompt": "(a) What is placenta? How is it formed?\n(b) Explain the physiological transport functions of placenta.\n(c) Name the hormones secreted exclusively during pregnancy by the placenta.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 2: Human Reproduction",
      "page": "Page 37",
      "figures": "Fig 2.12"
    },
    "theory": [
      "• Structural Link: The placenta is an intimate vascular connection formed by the interdigitation of fetal Chorionic Villi with maternal Uterine Endometrium.",
      "• Physiological Exchange: Facilitates delivery of oxygen and nutrients from maternal blood to fetus, and removal of fetal carbon dioxide and nitrogenous wastes.",
      "• Endocrine Secretions: Secretes hCG (human chorionic gonadotropin), hPL (human placental lactogen), estrogens, and progesterone; ovary secretes Relaxin in later pregnancy.",
      "• Pregnancy Markers: hCG, hPL, and relaxin are produced exclusively during pregnancy (hCG serves as basis for urine pregnancy tests)."
    ],
    "keyPointsAndKeywords": [
      "Chorionic villi + uterine tissue interdigitation",
      "Transport of O₂, nutrients and removal of CO₂, waste",
      "Umbilical cord connection",
      "Hormones: hCG, hPL, estrogens, progesterone, relaxin",
      "hCG and hPL produced ONLY during pregnancy"
    ],
    "modelAnswer": {
      "statement": "Placenta connects foetus and maternal tissue for metabolic exchange and functions as an endocrine organ secreting hCG, hPL, estrogens, and progesterone.",
      "markingScheme": [
        "1 Mark: Structural formation (chorionic villi interdigitating with uterine tissue).",
        "1 Mark: Transport role (O₂/nutrient uptake and CO₂/waste clearance via umbilical cord).",
        "1 Mark: Endocrine role with exclusive pregnancy hormones (hCG, hPL, relaxin)."
      ],
      "examinerTips": "Remember: hCG, hPL, and relaxin are secreted ONLY during pregnancy in human females."
    },
    "diagram": {
      "hasDiagram": true,
      "diagramId": "placenta-fetus",
      "title": "Human Placenta & Fetal Circulation",
      "examDrawingGuide": [
        "1. Draw uterine wall showing maternal tissue interdigitating with fetal chorionic villi.",
        "2. Draw Umbilical cord connecting fetus to placenta with umbilical arteries and vein.",
        "3. Draw Amniotic cavity filled with amniotic fluid enclosing the fetus.",
        "4. Label endocrine secretions: hCG, hPL, Estrogens, Progesterone, and Relaxin."
      ]
    },
    "derivations": [
      {
        "name": "Dual Physiological & Endocrine Functions of Placenta",
        "setup": "Maternal-fetal feto-placental circulation and hormonal balance.",
        "steps": [
          {
            "text": "Physiological exchange (via umbilical cord):",
            "equation": "\\text{Mother to fetus: } \\text{O}_2, \\text{ Glucose, Amino acids} \\quad | \\quad \\text{Fetus to mother: } \\text{CO}_2, \\text{ Urea}"
          },
          {
            "text": "Exclusive pregnancy hormones:",
            "equation": "\\text{hCG (maintains corpus luteum)} + \\text{hPL (maternal lactation priming)} + \\text{Relaxin (pubic symphysis softening)}"
          },
          {
            "text": "Steroid hormones maintaining pregnancy:",
            "equation": "\\text{High Progesterone} + \\text{High Estrogens} \\implies \\text{Suppresses uterine contractions}"
          }
        ],
        "finalFormula": "\\text{Placenta} = \\text{Transport Conduit} + \\text{Endocrine Organ (hCG, hPL, Progesterone)}"
      }
    ]
  },
  {
    "id": "bio-page-10",
    "number": 54,
    "section": "page",
    "title": "Amniocentesis: Principle, Misuse & Statutory Ban — Pg 42",
    "shortLabel": "Amniocentesis & Ban (Pg 42)",
    "chapterId": "bio-ch-3",
    "chapterTitle": "Reproductive Health",
    "unit": "Reproduction",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Big Orange (NCERT Page-Referenced)",
    "frequency": "NCERT Pg 42 (CBSE 2017, 2019, 2022)",
    "questionPrompt": "What is amniocentesis? Why is there a statutory ban on its use in India despite its diagnostic utility?",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 3: Reproductive Health",
      "page": "Page 42"
    },
    "theory": [
      "• Principle: Pre-natal diagnostic technique where a small amount of amniotic fluid containing fetal desquamated cells is aspirated trans-abdominally under ultrasound guidance.",
      "• Legitimate Medical Purpose: Detection of fetal chromosomal aneuploidies (Down's syndrome, Turner's, Klinefelter's), inborn errors of metabolism, and neural tube defects (alpha-fetoprotein).",
      "• Misuse & Statutory Ban: Illegally misused for pre-natal fetal sex determination followed by female foeticide, leading to a strict statutory ban under the PC-PNDT Act in India."
    ],
    "keyPointsAndKeywords": [
      "Sampling amniotic fluid containing foetal cells",
      "Karyotyping detects genetic/chromosomal disorders (Down's)",
      "Misuse for pre-natal sex determination",
      "Statutory ban to prevent female foeticide"
    ],
    "modelAnswer": {
      "statement": "Amniocentesis analyzes foetal amniotic cells for genetic defects; banned legally to prevent prenatal sex selection and female foeticide.",
      "markingScheme": [
        "1 Mark: Principle of amniocentesis (amniotic fluid karyotyping for chromosomal defects).",
        "1 Mark: Justification for statutory ban (misuse for female foeticide)."
      ],
      "examinerTips": "Emphasize that the technique itself is medically valuable for genetic screening, but the statutory ban strictly penalizes its use for sex determination."
    },
    "derivations": [
      {
        "name": "Diagnostic Protocol & Statutory Ban Framework of Amniocentesis",
        "setup": "Clinical karyotyping of desquamated fetal amniocytes.",
        "steps": [
          {
            "text": "Aspiration procedure (15–18 weeks):",
            "equation": "\\text{Ultrasound-guided transabdominal needle} \\implies \\text{10–20 mL Amniotic fluid drawn}"
          },
          {
            "text": "Karyotype analysis:",
            "equation": "\\text{Fetal cells cultured} \\implies \\text{Screened for Trisomy 21 (Down's), XXY, XO}"
          },
          {
            "text": "Illegal sex determination & ban:",
            "equation": "\\text{Barr body / Y-chromosome detection} \\xrightarrow{\\text{Abuse}} \\text{Female foeticide} \\implies \\text{Banned under PC-PNDT Act}"
          }
        ],
        "finalFormula": "\\text{Amniocentesis} \\implies \\text{Legitimate for Genetic Defects} \\; | \\; \\text{Statutory Ban on Sex Determination}"
      }
    ]
  },
  {
    "id": "bio-page-11",
    "number": 55,
    "section": "page",
    "title": "Monohybrid & Dihybrid Crosses — Punnett Squares Pg 57",
    "shortLabel": "Monohybrid & Dihybrid Crosses",
    "chapterId": "bio-ch-4",
    "chapterTitle": "Principles of Inheritance and Variation",
    "unit": "Genetics and Evolution",
    "marks": "3 / 5 Marks",
    "marksNum": 5,
    "category": "Big Orange (NCERT Page-Referenced)",
    "frequency": "NCERT Pg 57 & Pg 61 (CBSE 2016, 2019, 2023 — 3M or 5M Question)",
    "questionPrompt": "Using Punnett squares, demonstrate:\n(a) Monohybrid cross between Tall (TT) and Dwarf (tt) pea plants (F₁ and F₂ phenotypic and genotypic ratios).\n(b) Dihybrid cross phenotypic and genotypic segregation for Round Yellow (RRYY) × Wrinkled Green (rryy) and state Mendel's Law of Independent Assortment.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 4: Principles of Inheritance and Variation",
      "page": "Pages 57–62",
      "figures": "Fig 4.2 & Fig 4.7"
    },
    "theory": [
      "• Monohybrid Cross: Tracks inheritance of a single character pair (e.g. Stem height: Tall TT $\\times$ Dwarf tt). F₁ is heterozygous tall (Tt); F₂ produces phenotypic ratio 3:1 and genotypic ratio 1:2:1.",
      "• Dihybrid Cross: Simultaneously tracks inheritance of two independent character pairs (e.g. Seed shape and color: Round Yellow RRYY $\\times$ Wrinkled Green rryy).",
      "• Dihybrid Phenotypic Ratio: F₂ generation yields 4 phenotypic classes in the classic Mendelian ratio 9:3:3:1 (Round-Yellow 9, Round-Green 3, Wrinkled-Yellow 3, Wrinkled-Green 1)."
    ],
    "keyPointsAndKeywords": [
      "Monohybrid F₂: 3:1 phenotypic, 1:2:1 genotypic",
      "Dihybrid F₂: 9:3:3:1 phenotypic",
      "Punnett square invented by Reginald C. Punnett",
      "Independent Assortment of non-linked genes"
    ],
    "modelAnswer": {
      "statement": "Punnett squares illustrate allele segregation: monohybrid yields 3:1 (1:2:1 genotypic) and dihybrid yields 9:3:3:1 ratio with independent assortment.",
      "markingScheme": [
        "2 Marks: Monohybrid cross Punnett square + 3:1 phenotypic and 1:2:1 genotypic ratios.",
        "2 Marks: Dihybrid cross 16-box Punnett square and 9:3:3:1 phenotypic ratio breakdown.",
        "1 Mark: Statement of Mendel's Law of Independent Assortment."
      ],
      "examinerTips": "In dihybrid crosses, two new non-parental recombinant combinations appear: Round Green (3) and Wrinkled Yellow (3)."
    },
    "derivations": [
      {
        "name": "Monohybrid Cross (Height: TT x tt) Punnett Grid",
        "setup": "Single locus cross in Pisum sativum.",
        "steps": [
          {
            "text": "F₁ generation cross:",
            "equation": "TT \\times tt \\implies \\text{F}_1: Tt \\; (100\\% \\text{ Tall})"
          },
          {
            "text": "F₂ generation 4-box Punnett square:",
            "equation": "1 \\; TT \\; (\\text{Tall}) : 2 \\; Tt \\; (\\text{Tall}) : 1 \\; tt \\; (\\text{Dwarf})"
          }
        ],
        "finalFormula": "\\text{Monohybrid F}_2 \\text{ Phenotypic Ratio} = 3 : 1 \\quad | \\quad \\text{Genotypic Ratio} = 1 : 2 : 1"
      },
      {
        "name": "Dihybrid Cross (Shape & Color: RRYY x rryy) 16-Box Grid",
        "setup": "Two unlinked loci cross in Pisum sativum.",
        "steps": [
          {
            "text": "F₁ generation:",
            "equation": "RRYY \\times rryy \\implies \\text{F}_1: RrYy \\; (\\text{All Round Yellow})"
          },
          {
            "text": "F₁ gametes produced:",
            "equation": "RY, \\; Ry, \\; rY, \\; ry \\; (25\\% \\text{ each})"
          },
          {
            "text": "F₂ 16-box progeny distribution:",
            "equation": "9 \\text{ Round-Yellow} : 3 \\text{ Round-Green} : 3 \\text{ Wrinkled-Yellow} : 1 \\text{ Wrinkled-Green}"
          }
        ],
        "finalFormula": "\\text{Dihybrid F}_2 \\text{ Phenotypic Ratio} = 9 : 3 : 3 : 1"
      }
    ]
  },
  {
    "id": "bio-page-12",
    "number": 56,
    "section": "page",
    "title": "Bird Gender Determination: ZZ-ZW Mechanism",
    "shortLabel": "Bird Sex Determination (ZZ-ZW)",
    "chapterId": "bio-ch-4",
    "chapterTitle": "Principles of Inheritance and Variation",
    "unit": "Genetics and Evolution",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Big Orange (NCERT Page-Referenced)",
    "frequency": "NCERT Pg 69 Fig 4.12(b) (CBSE 2017, 2020, 2023)",
    "questionPrompt": "Explain the mechanism of sex determination in birds. Why is female heterogamety observed in birds unlike human male heterogamety?",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 4: Principles of Inheritance and Variation",
      "page": "Page 69",
      "figures": "Fig 4.12(b)"
    },
    "theory": [
      "• Female Heterogamety: In birds, females produce two morphologically distinct types of gametes (heterogametic), while males produce identical gametes (homogametic).",
      "• Male Karyotype: Homogametic male has two identical sex chromosomes: ZZ.",
      "• Female Karyotype: Heterogametic female has two different sex chromosomes: ZW.",
      "• Sex Determination: Sex of the offspring is determined exclusively by the ovum: egg carrying Z yields male (ZZ); egg carrying W yields female (ZW)."
    ],
    "keyPointsAndKeywords": [
      "ZZ-ZW mechanism",
      "Female heterogamety (ZW females)",
      "Male homogamety (ZZ males)",
      "Maternal egg determines sex of chick"
    ],
    "modelAnswer": {
      "statement": "Birds exhibit female heterogamety (ZW female, ZZ male) where maternal ova decide offspring gender.",
      "markingScheme": [
        "1 Mark: Female heterogamety (ZW) vs Male homogamety (ZZ) genotype.",
        "1 Mark: Cross showing Z-sperm + Z-egg = Male (ZZ) and Z-sperm + W-egg = Female (ZW)."
      ],
      "examinerTips": "Remember contrast: Humans = Male heterogamety (XY); Birds = Female heterogamety (ZW)."
    },
    "derivations": [
      {
        "name": "ZZ-ZW Sex Determination Scheme in Birds",
        "setup": "Chromosomal inheritance in Gallus domesticus (fowl).",
        "steps": [
          {
            "text": "Parental genotypes:",
            "equation": "\\text{Male: } ZZ \\; (\\text{Homogametic}) \\quad \\times \\quad \\text{Female: } ZW \\; (\\text{Heterogametic})"
          },
          {
            "text": "Gametes produced:",
            "equation": "\\text{Male produces all } Z \\text{ sperms} \\quad | \\quad \\text{Female produces } 50\\% \\; Z \\text{ and } 50\\% \\; W \\text{ eggs}"
          },
          {
            "text": "Fertilisation progeny:",
            "equation": "ZZ \\; (\\text{Male, } 50\\%) \\quad | \\quad ZW \\; (\\text{Female, } 50\\%)"
          }
        ],
        "finalFormula": "\\text{Male} = ZZ \\quad | \\quad \\text{Female} = ZW \\implies \\text{Female Heterogamety decides sex}"
      }
    ]
  },
  {
    "id": "bio-page-13",
    "number": 57,
    "section": "page",
    "title": "Aneuploidy vs Polyploidy",
    "shortLabel": "Aneuploidy vs Polyploidy",
    "chapterId": "bio-ch-4",
    "chapterTitle": "Principles of Inheritance and Variation",
    "unit": "Genetics and Evolution",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Big Orange (NCERT Page-Referenced)",
    "frequency": "NCERT Pg 75 (CBSE 2018, 2022)",
    "questionPrompt": "Differentiate between Aneuploidy and Polyploidy based on cytological mechanism, chromosome number changes, and biological occurrence.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 4: Principles of Inheritance and Variation",
      "page": "Page 75"
    },
    "theory": [
      "• Aneuploidy: Loss or gain of one or a few individual chromosomes due to failure of sister chromatid segregation (non-disjunction) during cell division (e.g. $2n-1, 2n+1$).",
      "• Polyploidy: Increase in one or more whole sets of chromosomes due to failure of cytokinesis after telophase ($3n, 4n, 6n$).",
      "• Organismal Occurrence: Aneuploidy is commonly seen in human syndromes (Down's, Turner's, Klinefelter's); Polyploidy is lethal in higher animals but widespread and beneficial in flowering plants (wheat, cotton, sugarcane)."
    ],
    "keyPointsAndKeywords": [
      "Aneuploidy: Non-disjunction of chromatids (gain/loss of individual chromosomes, 2n±1)",
      "Polyploidy: Failure of cytokinesis (gain of whole chromosome sets, 3n/4n)",
      "Polyploidy is widespread in plants"
    ],
    "modelAnswer": {
      "statement": "Aneuploidy alters individual chromosome counts via non-disjunction, whereas Polyploidy multiplies entire chromosomal genomes via failed cytokinesis.",
      "markingScheme": [
        "1 Mark: Aneuploidy cause (chromatid non-disjunction) + example ($2n pm 1$, Down's syndrome).",
        "1 Mark: Polyploidy cause (cytokinesis failure) + occurrence in plants ($3n, 4n$)."
      ],
      "examinerTips": "Always tie the cytological mechanism to the definition: Aneuploidy = chromatid segregation failure; Polyploidy = cytokinesis failure."
    },
    "derivations": [
      {
        "name": "Mechanistic Contrast: Non-Disjunction vs Cytokinesis Failure",
        "setup": "Meiotic and mitotic chromosomal aberrations.",
        "steps": [
          {
            "text": "Aneuploidy cause:",
            "equation": "\\text{Non-disjunction of chromatids} \\implies 2n + 1 \\text{ (Trisomy)} \\; \\text{or} \\; 2n - 1 \\text{ (Monosomy)}"
          },
          {
            "text": "Polyploidy cause:",
            "equation": "\\text{Failure of cytokinesis after telophase} \\implies 3n \\text{ (Triploid)}, \\; 4n \\text{ (Tetraploid)}"
          }
        ],
        "finalFormula": "\\text{Aneuploidy = Altered chromosome count (e.g. Down's)} \\quad | \\quad \\text{Polyploidy = Whole set increase (Plants)}"
      }
    ]
  },
  {
    "id": "bio-page-14",
    "number": 58,
    "section": "page",
    "title": "DNA vs RNA Chemical Stability — Pg 86",
    "shortLabel": "DNA vs RNA Stability (Pg 86)",
    "chapterId": "bio-ch-5",
    "chapterTitle": "Molecular Basis of Inheritance",
    "unit": "Genetics and Evolution",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Big Orange (NCERT Page-Referenced)",
    "frequency": "NCERT Pg 86 (CBSE 2016, 2019, 2022, 2024)",
    "questionPrompt": "Why is DNA chemically and structurally more stable than RNA as genetic material? Give three specific biochemical reasons.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 5: Molecular Basis of Inheritance",
      "page": "Page 86"
    },
    "theory": [
      "• 2'-OH Group Reactivity: RNA contains a reactive 2'-OH hydroxyl group on every ribose sugar, making it chemically labile, reactive, and easily degradable.",
      "• Thymine vs Uracil: DNA contains Thymine (5-methyluracil), conferring greater biochemical and photochemical stability compared to Uracil in RNA.",
      "• Double-Stranded Complementarity: Complementary double-stranded configuration of DNA resists chemical denaturation and facilitates repair mechanisms.",
      "• Evolutionary Transition: RNA was the first genetic material (catalytic), but DNA evolved chemically from RNA for superior long-term storage of genetic information."
    ],
    "keyPointsAndKeywords": [
      "2'-OH group makes RNA labile and catalytic",
      "Deoxyribose lacks 2'-OH group (chemically inert)",
      "Thymine (5-methyl uracil) provides extra stability",
      "Double strands resist denaturation"
    ],
    "modelAnswer": {
      "statement": "DNA is superior for information storage due to deoxyribose lacking the reactive 2'-OH group, thymine presence, and double-helical base stacking.",
      "markingScheme": [
        "1 Mark: Absence of 2'-OH group in DNA vs presence in RNA.",
        "1 Mark: Thymine (5-methyl uracil) in DNA conferring chemical stability.",
        "1 Mark: Double-stranded complementary structure vs single-stranded catalytic RNA."
      ],
      "examinerTips": "Remember: RNA can act as a catalyst (ribozyme) because of its reactive 2'-OH group; catalysts are inherently reactive and unstable."
    },
    "derivations": [
      {
        "name": "Biochemical Basis of DNA Stability over RNA",
        "setup": "Thermodynamic and enzymatic stability of polynucleotides.",
        "steps": [
          {
            "text": "1. Sugar modification:",
            "equation": "\\text{DNA: 2'-deoxyribose (lacks reactive 2'-OH)} \\implies \\text{Resistant to alkali hydrolysis}"
          },
          {
            "text": "2. Pyrimidine methylation:",
            "equation": "\\text{Thymine (5-methyluracil)} \\implies \\text{Protected against spontaneous deamination}"
          },
          {
            "text": "3. Structural helical stacking:",
            "equation": "\\text{Double helix base pairing} \\implies \\text{Exonuclease resistance and proofreading}"
          }
        ],
        "finalFormula": "\\text{DNA = Chemically Less Reactive & Structurally More Stable} \\implies \\text{Ideal Genetic Repository}"
      }
    ]
  },
  {
    "id": "bio-page-15",
    "number": 59,
    "section": "page",
    "title": "Transcription in Prokaryotes — Initiation, Elongation & Termination (Pg 86-90)",
    "shortLabel": "Prokaryotic Transcription",
    "chapterId": "bio-ch-5",
    "chapterTitle": "Molecular Basis of Inheritance",
    "unit": "Genetics and Evolution",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Big Orange (NCERT Page-Referenced)",
    "frequency": "NCERT Pg 90 Fig 5.10 (CBSE 2017, 2020, 2023)",
    "questionPrompt": "Describe transcription in bacteria. Explain the three steps (Initiation, Elongation, Termination) and the role of Sigma (σ) factor, Rho (ρ) factor, and single RNA polymerase. Why can transcription and translation be coupled in bacteria?",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 5: Molecular Basis of Inheritance",
      "page": "Pages 90–91",
      "figures": "Fig 5.10"
    },
    "theory": [
      "• Single RNA Polymerase: In prokaryotes, a single DNA-dependent RNA polymerase catalyses transcription of all three RNA types (mRNA, tRNA, rRNA).",
      "• Three Sequential Steps: Initiation, Elongation, and Termination.",
      "• Sigma Factor ($\\sigma$): Core enzyme associates transiently with initiation factor sigma ($\\sigma$) to recognise and bind the promoter.",
      "• Rho Factor ($\\rho$): Core enzyme associates with termination factor rho ($\\rho$) to terminate transcription and release nascent RNA.",
      "• Coupled Transcription-Translation: In bacteria, translation can begin before mRNA is fully transcribed due to absence of a nuclear membrane."
    ],
    "keyPointsAndKeywords": [
      "Single RNA polymerase transcribes all RNAs",
      "Initiation requires Sigma (σ) factor",
      "Termination requires Rho (ρ) factor",
      "No nuclear membrane allows coupled transcription-translation"
    ],
    "modelAnswer": {
      "statement": "Bacterial transcription proceeds via a single RNA polymerase with σ-mediated initiation and ρ-mediated termination, coupled directly to translation.",
      "markingScheme": [
        "1 Mark: Three steps (Initiation, Elongation, Termination).",
        "1 Mark: Specific roles of Sigma (σ) and Rho (ρ) factors.",
        "1 Mark: Explanation of coupled transcription and translation in prokaryotes."
      ],
      "examinerTips": "Remember: RNA polymerase core enzyme alone can only perform elongation; it needs σ factor for initiation and ρ factor for termination."
    },
    "derivations": [
      {
        "name": "Three-Stage Mechanism of Prokaryotic Transcription",
        "setup": "Transcription by RNA Polymerase holoenzyme in E. coli.",
        "steps": [
          {
            "text": "1. Initiation:",
            "equation": "\\text{Core Polymerase} + \\sigma\\text{-factor} \\implies \\text{Binds Promoter region, unwinds DNA}"
          },
          {
            "text": "2. Elongation:",
            "equation": "\\text{Core Polymerase synthesises RNA in } 5' \\to 3' \\text{ direction using ribonucleotides}"
          },
          {
            "text": "3. Termination:",
            "equation": "\\text{Core Polymerase} + \\rho\\text{-factor} \\implies \\text{Releases nascent RNA at Terminator site}"
          }
        ],
        "finalFormula": "\\text{Initiation (}\\sigma\\text{)} \\longrightarrow \\text{Elongation (Core)} \\longrightarrow \\text{Termination (}\\rho\\text{)}"
      }
    ]
  },
  {
    "id": "bio-page-16",
    "number": 60,
    "section": "page",
    "title": "Human Genome Project (HGP): 6 Salient Features — Pg 106",
    "shortLabel": "HGP 6 Salient Features (Pg 106)",
    "chapterId": "bio-ch-5",
    "chapterTitle": "Molecular Basis of Inheritance",
    "unit": "Genetics and Evolution",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Big Orange (NCERT Page-Referenced)",
    "frequency": "Explicitly requested: 'Pg-106-6steps' (CBSE 2016, 2019, 2022, 2024)",
    "questionPrompt": "State any six salient features of the human genome as determined by the Human Genome Project (NCERT Page 106).",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 5: Molecular Basis of Inheritance",
      "page": "Page 106"
    },
    "theory": [
      "• Genome Size: Human genome contains $3164.7 \\times 10^6$ (3.164 billion) nucleotide base pairs.",
      "• Gene Number: Total number of genes is estimated at roughly 30,000 (much lower than earlier estimates of 80,000–140,000).",
      "• Average Gene Size: An average gene consists of 3,000 bases; largest human gene is Dystrophin with 2.4 million bases.",
      "• Non-coding DNA: Less than 2% of the genome codes for proteins; repetitive sequences constitute vast portion.",
      "• Chromosome Extremes: Chromosome 1 has the most genes (2,968) and the Y chromosome has the fewest (231).",
      "• SNPs: Scientists identified about 1.4 million locations with single nucleotide polymorphisms (SNPs) across human DNA."
    ],
    "keyPointsAndKeywords": [
      "3.164 billion nucleotide base pairs",
      "Average gene = 3000 bases; Largest gene = Dystrophin (2.4 Mb)",
      "30,000 total genes; 99.9% identical in all humans",
      "Less than 2% genome encodes proteins",
      "Chromosome 1 has 2968 genes; Y has 231 genes",
      "Single Nucleotide Polymorphisms (SNPs at 1.4 million locations)"
    ],
    "modelAnswer": {
      "statement": "The Human Genome Project mapped 3.164 billion bp and ~30,000 genes, revealing that <2% encodes proteins and 99.9% is identical across humans.",
      "markingScheme": [
        "3 Marks: 0.5 mark for each of the 6 salient features accurately stated with quantitative values."
      ],
      "examinerTips": "Memorize the numbers: 3164.7 million bp, 30,000 genes, <2% coding, Chromosome 1 = 2968 genes, Chromosome Y = 231 genes."
    },
    "derivations": [
      {
        "name": "Key Numerical Benchmarks of the Human Genome Project",
        "setup": "Genomic metrics sequenced by international consortium (1990–2003).",
        "steps": [
          {
            "text": "Total genome base pairs:",
            "equation": "3.164 \\times 10^9 \\text{ bp (3.164 billion base pairs)}"
          },
          {
            "text": "Total protein-coding genes:",
            "equation": "\\sim 30,000 \\text{ genes (only } <2\\% \\text{ genome is coding)}"
          },
          {
            "text": "Extreme gene sizes:",
            "equation": "\\text{Average} = 3000 \\text{ bp} \\quad | \\quad \\text{Largest: Dystrophin} = 2.4 \\times 10^6 \\text{ bp}"
          },
          {
            "text": "Single Nucleotide Polymorphisms (SNPs):",
            "equation": "1.4 \\text{ million locations across human genome}"
          }
        ],
        "finalFormula": "3.164 \\text{ Billion bp} \\; | \\; 30,000 \\text{ Genes} \\; | \\; <2\\% \\text{ Coding} \\; | \\; \\text{Chr 1: 2968 genes, Y: 231 genes}"
      }
    ]
  },
  {
    "id": "bio-page-17",
    "number": 61,
    "section": "page",
    "title": "Miller-Urey Spark Discharge Experiment — Diagram Pg 117",
    "shortLabel": "Miller-Urey Experiment (Pg 117)",
    "chapterId": "bio-ch-6",
    "chapterTitle": "Evolution",
    "unit": "Genetics and Evolution",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Big Orange (NCERT Page-Referenced)",
    "frequency": "NCERT Fig 6.1 Pg 117 (CBSE 2015, 2018, 2021, 2024)",
    "diagramId": "miller-urey",
    "questionPrompt": "Draw a labelled schematic diagram of S.L. Miller's spark-discharge experiment (1953) as given on NCERT Page 117. Mention the gases used, temperature, energy source, and the biochemical products obtained.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 6: Evolution",
      "page": "Page 117",
      "figures": "Fig 6.1"
    },
    "theory": [
      "• Objective: Experimental verification of the Oparin-Haldane hypothesis of chemical evolution (abiogenesis from inorganic precursors).",
      "• Experimental Setup (1953): Stanley Miller and Harold Urey created primitive reducing atmospheric conditions in a closed glass apparatus.",
      "• Reaction Conditions: Mixture of $CH_4, NH_3, H_2,$ and water vapour at $800^\\circ\\text{C}$ with continuous electric spark discharge from tungsten electrodes for one week.",
      "• Chemical Yield: Condenser collected liquid sample revealing formation of simple Amino Acids (Glycine, Alanine, Aspartic acid)."
    ],
    "keyPointsAndKeywords": [
      "Gases: CH₄, NH₃, H₂O, H₂",
      "Temperature: 800°C electric spark",
      "Condenser and boiling flask setup",
      "Amino acids formed: Glycine, Alanine, Aspartic acid",
      "Validates Oparin-Haldane chemical evolution"
    ],
    "modelAnswer": {
      "statement": "Miller simulated primitive reducing conditions (CH₄, NH₃, H₂, H₂O at 800°C with electric sparks), generating amino acids to support chemical evolution.",
      "markingScheme": [
        "1.5 Marks: Labelled diagram showing spark chamber, electrodes, condenser, boiling flask, and trap.",
        "1.5 Marks: Gas mixture, temperature (800°C), and products identified (amino acids: glycine, alanine, aspartic acid)."
      ],
      "examinerTips": "Remember: Temperature must be accurately stated as 800°C, and the atmosphere was strictly REDUCING without free oxygen ($O_2$)."
    },
    "diagram": {
      "hasDiagram": true,
      "diagramId": "miller-urey",
      "title": "Miller-Urey Spark Discharge Experiment (1953)",
      "examDrawingGuide": [
        "1. Draw closed 5-liter glass reaction flask containing tungsten electrodes.",
        "2. Label gases: Methane (CH4), Ammonia (NH3), Hydrogen (H2), and water vapour in ratio 2:1:2 at 800°C.",
        "3. Draw electric spark discharge simulating primitive lightning.",
        "4. Draw boiling flask generating steam, condenser cooling reaction mixture, and U-tube trap collecting condensed amino acids."
      ]
    },
    "derivations": [
      {
        "name": "Chemical Evolution Reaction Protocol in Miller's Apparatus",
        "setup": "Simulation of prebiotic Earth's reducing atmosphere.",
        "steps": [
          {
            "text": "Gas ratio in reaction flask:",
            "equation": "\\text{CH}_4 : \\text{NH}_3 : \\text{H}_2 = 2 : 1 : 2 + \\text{Water vapour}"
          },
          {
            "text": "Energy input:",
            "equation": "\\text{Continuous electric spark discharge at } 800^\\circ\\text{C} \\text{ for 7 days}"
          },
          {
            "text": "Organic products synthesized:",
            "equation": "\\text{Glycine} + \\text{Alanine} + \\text{Aspartic acid} + \\text{Purines, Sugars}"
          }
        ],
        "finalFormula": "\\text{Inorganic Gases } (\\text{CH}_4, \\text{NH}_3, \\text{H}_2, \\text{H}_2\\text{O}) \\xrightarrow{800^\\circ\\text{C Spark}} \\text{Amino Acids (Abiogenesis Validated)}"
      }
    ]
  },
  {
    "id": "bio-page-18",
    "number": 62,
    "section": "page",
    "title": "Hardy-Weinberg Principle: 5 Factors Disrupting Equilibrium — Pg 121",
    "shortLabel": "Hardy-Weinberg 5 Factors (Pg 121)",
    "chapterId": "bio-ch-6",
    "chapterTitle": "Evolution",
    "unit": "Genetics and Evolution",
    "marks": "5 Marks",
    "marksNum": 5,
    "category": "Big Orange (NCERT Page-Referenced)",
    "frequency": "NCERT Pg 121 (CBSE 2016, 2018, 2020, 2023 — Guaranteed 5M Question)",
    "diagramId": "hardy-weinberg-selection",
    "questionPrompt": "State Hardy-Weinberg Principle and give its algebraic equation. Explain the five evolutionary factors that upset Hardy-Weinberg genetic equilibrium (NCERT Page 121).",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 6: Evolution",
      "page": "Pages 120–122",
      "figures": "Fig 6.8"
    },
    "theory": [
      "• Equilibrium Principle: In a large, random-mating, diploid population, allele frequencies remain constant and stable from generation to generation in absence of evolutionary forces.",
      "• Binomial Expansion: Represented algebraically as: $p^2 + 2pq + q^2 = 1$, where $p$ and $q$ represent frequencies of dominant ($A$) and recessive ($a$) alleles.",
      "• Five Disruptive Factors: Gene migration/gene flow, Genetic drift (Sewall Wright effect), Mutation, Genetic recombination, and Natural selection.",
      "• Selection Trajectories: Stabilizing selection (favors mean phenotype), Directional selection (shifts peak toward one extreme), Disruptive selection (produces two distinct peaks at both extremes)."
    ],
    "keyPointsAndKeywords": [
      "Allele frequencies remain constant (p² + 2pq + q² = 1)",
      "1. Gene migration / gene flow",
      "2. Genetic drift (Founder effect)",
      "3. Mutation",
      "4. Genetic recombination",
      "5. Natural selection"
    ],
    "modelAnswer": {
      "statement": "Hardy-Weinberg equilibrium ($p^2+2pq+q^2=1$) is disturbed by five evolutionary forces: gene flow, genetic drift, mutation, recombination, and natural selection.",
      "markingScheme": [
        "1 Mark: Statement of principle and binomial expansion formula ($p^2 + 2pq + q^2 = 1$, $p + q = 1$).",
        "4 Marks: Detailed explanation of all 5 factors: Gene migration/flow (0.8M), Genetic drift and Founder effect (0.8M), Mutation (0.8M), Genetic recombination (0.8M), Natural selection and 3 curve profiles (0.8M)."
      ],
      "examinerTips": "Remember: When a small founding population establishes a new colony with drastically different allele frequencies, it is called the Founder Effect."
    },
    "diagram": {
      "hasDiagram": true,
      "diagramId": "hardy-weinberg-selection",
      "title": "Natural Selection Dynamics on Phenotypic Traits",
      "examDrawingGuide": [
        "1. Draw original normal bell-shaped phenotypic distribution curve with mean phenotype in center.",
        "2. Stabilizing Selection: Show peak becoming higher and narrower (favors average intermediate phenotype).",
        "3. Directional Selection: Show peak shifting toward one extreme (favors one directional extreme).",
        "4. Disruptive Selection: Show two distinct peaks formed at both extremes with a valley in center (favors both extremes over intermediate)."
      ]
    },
    "derivations": [
      {
        "name": "Algebraic Formulation & Five Disruptive Evolutionary Factors",
        "setup": "Population genetics equilibrium equation for biallelic locus.",
        "steps": [
          {
            "text": "Allele frequency equation:",
            "equation": "p + q = 1 \\quad (p = \\text{freq of } A, \\; q = \\text{freq of } a)"
          },
          {
            "text": "Genotype frequencies in diploid population:",
            "equation": "(p + q)^2 = p^2 + 2pq + q^2 = 1 \\quad (p^2 = AA, \\; 2pq = Aa, \\; q^2 = aa)"
          },
          {
            "text": "5 Disruptive Factors causing Evolutionary Shift:",
            "equation": "\\text{1. Gene Flow} \\; | \\; \\text{2. Genetic Drift} \\; | \\; \\text{3. Mutation} \\; | \\; \\text{4. Recombination} \\; | \\; \\text{5. Natural Selection}"
          }
        ],
        "specialCases": [
          {
            "title": "Founder Effect & Bottleneck",
            "text": "When a small colonizing group separates from a larger population, random genetic drift alters allele frequencies dramatically, establishing a founder population."
          }
        ],
        "finalFormula": "p^2 + 2pq + q^2 = 1 \\implies \\text{Deviation from 1.0 confirms Evolutionary Change}"
      }
    ]
  },
  {
    "id": "bio-page-19",
    "number": 63,
    "section": "page",
    "title": "Adaptive Radiation: Darwin's Finches & Australian Marsupials",
    "shortLabel": "Adaptive Radiation",
    "chapterId": "bio-ch-6",
    "chapterTitle": "Evolution",
    "unit": "Genetics and Evolution",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Big Orange (NCERT Page-Referenced)",
    "frequency": "NCERT Pg 118 Fig 6.5 & 6.6 (CBSE 2017, 2019, 2022, 2024)",
    "questionPrompt": "Define Adaptive Radiation. Explain how Darwin's Finches on the Galapagos Islands and Australian Marsupials serve as classic examples.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 6: Evolution",
      "page": "Pages 118–119",
      "figures": "Fig 6.5 & Fig 6.6"
    },
    "theory": [
      "• Adaptive Radiation Definition: The evolutionary process of an ancestral stock radiating into diverse ecological niches, giving rise to morphologically varied new species.",
      "• Darwin's Finches: Darwin observed varied finch beaks radiating from an ancestral seed-eating stock in the Galápagos Islands into insectivorous, vegetarian, and cactus-feeding beaks.",
      "• Australian Marsupials: A variety of marsupials (Tasmanian wolf, sugar glider, wombat, bandicoot) evolved from a single ancestral marsupial within the isolated Australian continent.",
      "• Convergent Evolution: When more than one adaptive radiation occurs in an isolated geographical area representing different habitats, it results in convergent evolution (e.g. Placental mammals vs Australian marsupials)."
    ],
    "keyPointsAndKeywords": [
      "Evolution radiating from common ancestor to diverse niches",
      "Darwin's finches: Seed-eating to diverse beaks",
      "Australian marsupials radiating within isolated continent",
      "Convergent evolution when compared with placental mammals"
    ],
    "modelAnswer": {
      "statement": "Adaptive radiation is diversification of an ancestral species into ecological niches, exemplified by Galapagos finches and Australian marsupials.",
      "markingScheme": [
        "1 Mark: Definition of adaptive radiation.",
        "1 Mark: Darwin's finches explanation (seed-eating ancestor → beak adaptations).",
        "1 Mark: Australian marsupials radiation and convergent evolution concept."
      ],
      "examinerTips": "Placental wolf and Tasmanian wolf look remarkably similar because of convergent evolution resulting from parallel adaptive radiation."
    },
    "derivations": [
      {
        "name": "Ecological Divergence & Convergent Radiation Parallelism",
        "setup": "Adaptive radiation from single common ancestral stem.",
        "steps": [
          {
            "text": "Darwin's Finches (Galápagos):",
            "equation": "\\text{Ancestral seed-eating finch} \\implies \\text{Beak adaptations: Insectivorous, Woodpecker, Vegetarian, Cactus}"
          },
          {
            "text": "Australian Marsupials:",
            "equation": "\\text{Ancestral marsupial} \\implies \\text{Kangaroo, Koala, Wombat, Tasmanian Wolf}"
          },
          {
            "text": "Placental vs Marsupial Convergent Counterparts:",
            "equation": "\\text{Anteater} \\longleftrightarrow \\text{Numbat} \\; | \\; \\text{Flying squirrel} \\longleftrightarrow \\text{Sugar glider} \\; | \\; \\text{Wolf} \\longleftrightarrow \\text{Tasmanian wolf}"
          }
        ],
        "finalFormula": "\\text{Common Ancestral Stock} \\xrightarrow{\\text{Niche Exploitation}} \\text{Diverse Species (Adaptive Radiation)}"
      }
    ]
  },
  {
    "id": "bio-page-20",
    "number": 64,
    "section": "page",
    "title": "Allergies: Mechanism, Symptoms & Treatment — Pg 136 (3 Marks)",
    "shortLabel": "Allergies (Pg 136, 3M)",
    "chapterId": "bio-ch-7",
    "chapterTitle": "Human Health and Disease",
    "unit": "Biology in Human Welfare",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Big Orange (NCERT Page-Referenced)",
    "frequency": "Explicitly requested: 'Pg 136 allergies (3mark) (symptoms and treatment)' (CBSE 2016, 2018, 2021, 2023)",
    "questionPrompt": "(a) What is allergy? Name the antibody type and chemicals released during an allergic reaction.\n(b) List common symptoms of allergy.\n(c) What medications are administered to treat allergic symptoms quickly?",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 7: Human Health and Disease",
      "page": "Page 136"
    },
    "theory": [
      "• Allergy Definition: An exaggerated, hypersensitive immune response to environmental antigens (allergens).",
      "• Antibody Involved: Characterised by elevated production of Immunoglobulin E (IgE) antibodies.",
      "• Chemical Mediators: IgE binds to mast cells; allergen re-exposure causes degranulation and release of Histamine and Serotonin.",
      "• Clinical Symptoms: Sneezing, watery eyes, running nose, difficulty in breathing (bronchospasm), urticaria, and skin rashes.",
      "• Therapeutic Treatment: Rapidly alleviated by administration of anti-histamines, adrenaline, and corticosteroids."
    ],
    "keyPointsAndKeywords": [
      "Exaggerated response mediated by IgE",
      "Mast cells release Histamine and Serotonin",
      "Symptoms: Sneezing, watery eyes, running nose, wheezing",
      "Treatment: Antihistamines, Adrenaline, and Steroids"
    ],
    "modelAnswer": {
      "statement": "Allergy is an IgE-mediated hypersensitivity reaction causing mast cell degranulation (histamine, serotonin); treated with antihistamines and steroids.",
      "markingScheme": [
        "1 Mark: Definition + IgE antibody + Histamine and Serotonin release from mast cells.",
        "1 Mark: Symptoms (sneezing, watery eyes, running nose, breathing difficulty).",
        "1 Mark: Medical treatment (Antihistamines, Adrenaline, Steroids)."
      ],
      "examinerTips": "Modern lifestyle and protected indoor environments have led to lowered immunity and higher sensitivity to allergens in urban children."
    },
    "derivations": [
      {
        "name": "Immunological Cascade of Type-I Hypersensitivity (Allergy)",
        "setup": "Degranulation of mast cells upon allergen cross-linking.",
        "steps": [
          {
            "text": "Sensitisation phase:",
            "equation": "\\text{Allergen (Pollen/Dust)} \\implies \\text{Plasma cells secrete high levels of IgE}"
          },
          {
            "text": "Mast cell priming:",
            "equation": "\\text{IgE binds Fc receptors on tissue Mast cells}"
          },
          {
            "text": "Allergen challenge & degranulation:",
            "equation": "\\text{Allergen cross-links IgE} \\implies \\text{Degranulation releasing Histamine & Serotonin}"
          },
          {
            "text": "Pharmacotherapy:",
            "equation": "\\text{Anti-histamines} + \\text{Adrenaline} + \\text{Corticosteroids} \\implies \\text{Symptom relief}"
          }
        ],
        "finalFormula": "\\text{Allergen} + \\text{IgE on Mast Cells} \\implies \\text{Histamine Release} \\implies \\text{Allergic Symptoms}"
      }
    ]
  },
  {
    "id": "bio-page-21",
    "number": 65,
    "section": "page",
    "title": "HIV Life Cycle & Antiretroviral Drugs (Case-Based)",
    "shortLabel": "HIV Replication & Treatment",
    "chapterId": "bio-ch-7",
    "chapterTitle": "Human Health and Disease",
    "unit": "Biology in Human Welfare",
    "marks": "5 Marks",
    "marksNum": 5,
    "category": "Big Orange (NCERT Page-Referenced)",
    "frequency": "NCERT Fig 7.6 Pg 139 (Case-Based CBSE 2017, 2020, 2022, 2024)",
    "diagramId": "hiv-lifecycle",
    "questionPrompt": "(a) Describe the step-by-step life cycle of HIV inside a human macrophage and Helper T-lymphocyte (TH).\n(b) Why is macrophage called an 'HIV factory'?\n(c) What class of drugs is used for treatment and why are they not a permanent cure?",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 7: Human Health and Disease",
      "page": "Pages 139–141",
      "figures": "Fig 7.6"
    },
    "theory": [
      "• Retrovirus Etiology: Human Immunodeficiency Virus (HIV) possesses an enveloped single-stranded RNA genome and the enzyme Reverse Transcriptase.",
      "• Macrophage as HIV Factory: HIV enters macrophages; viral RNA is reverse transcribed into DNA and integrated into host genome, continuously producing new viral progeny while the macrophage survives.",
      "• Helper T-Cell Destruction: Progeny virions attack Helper T-lymphocytes ($T_H$, CD4+), replicating and lysing them, causing progressive progressive decline in $T_H$ cell count.",
      "• Immunodeficiency & Opportunistic Infections: When $T_H$ count drops severely ($<200/\\mu L$), patient succumbs to opportunistic infections (Mycobacterium, Toxoplasma, viruses, fungi).",
      "• Antiretroviral Therapy (ART): Cocktails of reverse transcriptase inhibitors and protease inhibitors prolong life but cannot cure."
    ],
    "keyPointsAndKeywords": [
      "Retrovirus uses Reverse Transcriptase",
      "Viral DNA incorporates into host chromosome",
      "Macrophage acts as HIV factory",
      "Progressive decline in Helper T (TH) cells",
      "Antiretroviral drugs prolong life, but cannot cure"
    ],
    "modelAnswer": {
      "statement": "HIV infects macrophages and T_H cells via reverse transcriptase and genome integration; antiretrovirals suppress replication but cannot eradicate integrated proviruses.",
      "markingScheme": [
        "2 Marks: Sequential replication steps (Binding → Reverse transcription → Integration → Viral synthesis → Budding).",
        "1.5 Marks: Macrophage 'HIV factory' concept and mechanism of $T_H$ cell depletion.",
        "1.5 Marks: Antiretroviral therapy (ART) mechanism and limitation (prolongs life, not a cure)."
      ],
      "examinerTips": "Remember: Diagnostic test for HIV is ELISA (Enzyme Linked Immunosorbent Assay); confirmatory test is Western Blot."
    },
    "diagram": {
      "hasDiagram": true,
      "diagramId": "hiv-lifecycle",
      "title": "Replication Cycle of Retrovirus (HIV) in Human Host Cells",
      "examDrawingGuide": [
        "1. Draw HIV virus with glycoprotein coat and ssRNA entering animal cell.",
        "2. Show Reverse Transcriptase converting viral ssRNA into viral dsDNA.",
        "3. Show viral dsDNA integrating into host genome (catalysed by Integrase) inside nucleus.",
        "4. Show host cell transcribing viral DNA into new viral RNA and proteins, assembling virions, and budding out (Macrophage as HIV factory).",
        "5. Show subsequent infection and lysis of Helper T-lymphocytes (CD4+ count drop)."
      ]
    },
    "derivations": [
      {
        "name": "Stepwise Infection & Replication Pathway of HIV",
        "setup": "Retroviral replication cycle in macrophages and CD4+ T-lymphocytes.",
        "steps": [
          {
            "text": "Step 1: Viral entry into Macrophage:",
            "equation": "\\text{Viral envelope fuses with host membrane; ssRNA enters cytoplasm}"
          },
          {
            "text": "Step 2: Reverse transcription:",
            "equation": "\\text{Viral ssRNA} \\xrightarrow{\\text{Reverse Transcriptase}} \\text{Viral dsDNA}"
          },
          {
            "text": "Step 3: Integration into host chromosome:",
            "equation": "\\text{Viral dsDNA} \\xrightarrow{\\text{Integrase}} \\text{Provirus in host genome}"
          },
          {
            "text": "Step 4: Progeny assembly & budding:",
            "equation": "\\text{Transcription of viral RNA & proteins} \\implies \\text{Macrophage functions as HIV factory}"
          },
          {
            "text": "Step 5: Helper T-cell depletion:",
            "equation": "\\text{HIV attacks } T_H \\text{ lymphocytes} \\implies \\text{Severe drop in CD4 count} \\implies \\text{Clinical AIDS}"
          }
        ],
        "finalFormula": "\\text{Viral ssRNA} \\xrightarrow{\\text{Reverse Transcriptase}} \\text{DNA} \\implies \\text{Helper T-Cell Count Drops} \\implies \\text{AIDS}"
      }
    ]
  },
  {
    "id": "bio-page-22",
    "number": 66,
    "section": "page",
    "title": "Tabulation of Drugs: Opioids, Cannabinoids & Cocaine",
    "shortLabel": "Drugs Tabulation (Opioids, Cocaine)",
    "chapterId": "bio-ch-7",
    "chapterTitle": "Human Health and Disease",
    "unit": "Biology in Human Welfare",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Big Orange (NCERT Page-Referenced)",
    "frequency": "NCERT Pages 142–144 (CBSE 2015, 2017, 2019, 2021, 2024)",
    "questionPrompt": "Construct a comparative table of Opioids, Cannabinoids, and Cocaine including Plant Source, Chemical Name/Form, Cellular Receptors, Mode of Intake, and Physiological Effects on the human body.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 7: Human Health and Disease",
      "page": "Pages 142–144",
      "figures": "Fig 7.7, 7.8, 7.9"
    },
    "theory": [
      "• Opioids: Bind to opioid receptors in central nervous system and gastrointestinal tract (e.g. Morphine, Heroin/Smack). Morphine is extracted from latex of Papaver somniferum; Heroin is diacetylmorphine, a depressant slowing body functions.",
      "• Cannabinoids: Interact with cannabinoid receptors principally in brain (e.g. Marijuana, Hashish, Charas, Ganja). Extracted from inflorescences of Cannabis sativa; effects primarily cardiovascular.",
      "• Cocaine (Coca Alkaloid): Extracted from Erythroxylum coca; interferes with dopamine reuptake, producing euphoria and energy; excessive doses cause hallucinations."
    ],
    "keyPointsAndKeywords": [
      "Opioids: Papaver somniferum, CNS/GI receptors, depressant",
      "Heroin is diacetylmorphine",
      "Cannabinoids: Cannabis sativa, brain receptors, cardiovascular effects",
      "Cocaine: Erythroxylum coca, blocks dopamine reuptake, euphoria, hallucinations"
    ],
    "modelAnswer": {
      "statement": "Abused drugs target specific receptor classes: Opioids (CNS/GI depressants), Cannabinoids (brain receptors affecting heart), and Cocaine (dopamine stimulant).",
      "markingScheme": [
        "1 Mark: Opioids: Papaver somniferum, diacetylmorphine, CNS receptors, depressant.",
        "1 Mark: Cannabinoids: Cannabis sativa, brain receptors, cardiovascular impact.",
        "1 Mark: Cocaine: Erythroxylum coca, dopamine transport interference, CNS stimulant & hallucinations."
      ],
      "examinerTips": "Remember: Plants like Atropa belladonna and Datura also possess hallucinogenic properties."
    },
    "derivations": [
      {
        "name": "Tabulation of Drug Classes: Chemical Nature, Source & Effects",
        "setup": "Pharmacological classification of commonly abused psychoactive drugs.",
        "steps": [
          {
            "text": "Opioids (Morphine, Heroin/Smack):",
            "equation": "\\text{Source: } \\text{Papaver somniferum (Poppy)} \\implies \\text{CNS/GI receptors, Depressant, slows body functions}"
          },
          {
            "text": "Cannabinoids (Ganja, Charas, Marijuana):",
            "equation": "\\text{Source: } \\text{Cannabis sativa} \\implies \\text{Cannabinoid receptors in brain, affects cardiovascular system}"
          },
          {
            "text": "Coca Alkaloid (Cocaine / Crack):",
            "equation": "\\text{Source: } \\text{Erythroxylum coca} \\implies \\text{Blocks Dopamine transport, Stimulant & Hallucinogen at high dose}"
          }
        ],
        "finalFormula": "\\text{Opioids (Poppy/Depressant)} \\; | \\; \\text{Cannabinoids (Hemp/Cardiovascular)} \\; | \\; \\text{Cocaine (Erythroxylum/Dopamine)}"
      }
    ]
  },
  {
    "id": "bio-page-23",
    "number": 67,
    "section": "page",
    "title": "Biocontrol Agents: Baculoviruses & Bacillus thuringiensis",
    "shortLabel": "Biocontrol Agents & Bt",
    "chapterId": "bio-ch-8",
    "chapterTitle": "Microbes in Human Welfare",
    "unit": "Biology in Human Welfare",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Big Orange (NCERT Page-Referenced)",
    "frequency": "NCERT Pages 153–154 (CBSE 2016, 2018, 2021, 2023)",
    "questionPrompt": "(a) What are Biocontrol agents? Give two traditional examples (Ladybird, Dragonfly).\n(b) Why are Baculoviruses (genus Nucleopolyhedrovirus) desirable in Integrated Pest Management (IPM)?\n(c) Explain the biocontrol mechanism of Bacillus thuringiensis (Bt).",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 8: Microbes in Human Welfare",
      "page": "Pages 153–154"
    },
    "theory": [
      "• Biocontrol Concept: The use of biological methods for controlling plant diseases and pests instead of synthetic toxic pesticides.",
      "• Bacillus thuringiensis (Bt): Soil bacterium used against butterfly caterpillars; spores contain toxic Cry protein crystals that dissolve in alkaline insect midgut, creating pores and causing larval death.",
      "• Baculoviruses (NPV): Nucleopolyhedrovirus genus targets insects and arthropods; excellent candidates for species-specific, narrow spectrum insecticidal applications without adverse impact on non-target organisms.",
      "• Trichoderma: Free-living soil fungus effective against several root-borne plant pathogens."
    ],
    "keyPointsAndKeywords": [
      "Ladybird controls aphids; Dragonfly controls mosquitoes",
      "Baculovirus (Nucleopolyhedrovirus): Species-specific, narrow spectrum",
      "Zero non-target toxicity, ideal for IPM",
      "Bacillus thuringiensis: Alkaline gut pH solubilizes Cry endotoxin, gut pore formation and death"
    ],
    "modelAnswer": {
      "statement": "Biocontrol utilizes natural predation: Ladybirds control aphids, Baculoviruses provide species-specific pest control in IPM, and Bt crystalline toxins lyse insect midguts.",
      "markingScheme": [
        "1 Mark: Ladybird (aphids) and Dragonfly (mosquitoes) biocontrol examples.",
        "1 Mark: Nucleopolyhedrovirus advantages in IPM (narrow spectrum, non-target safety).",
        "1 Mark: Bacillus thuringiensis mechanism (inactive protoxin activated by alkaline insect gut pH causing pore formation and lysis)."
      ],
      "examinerTips": "Remember: Bt toxin is INACTIVE in the bacterium (protoxin) and does NOT kill the bacterium; it is activated ONLY inside the insect midgut by alkaline pH."
    },
    "derivations": [
      {
        "name": "Mechanism of Biocontrol Agents: Bacillus thuringiensis & Baculoviruses",
        "setup": "Ecological pest management strategies.",
        "steps": [
          {
            "text": "Bacillus thuringiensis (Bt):",
            "equation": "\\text{Ingested Cry endotoxin} \\xrightarrow{\\text{Alkaline Gut pH}} \\text{Toxin solubilised} \\to \\text{Midgut pore lysis} \\implies \\text{Larval death}"
          },
          {
            "text": "Baculoviruses (Nucleopolyhedrovirus):",
            "equation": "\\text{Species-specific & narrow-spectrum} \\implies \\text{Zero damage to mammals, birds, fish, or non-target insects}"
          },
          {
            "text": "Integrated Pest Management (IPM):",
            "equation": "\\text{Preserves beneficial insects while targeting specific agricultural pests}"
          }
        ],
        "finalFormula": "\\text{Bt = Alkaline Gut Midgut Lysis} \\quad | \\quad \\text{Baculoviruses = Species-Specific Narrow Spectrum Bio-insecticides}"
      }
    ]
  },
  {
    "id": "bio-page-24",
    "number": 68,
    "section": "page",
    "title": "Evidences for Evolution: Homologous vs Analogous Organs",
    "shortLabel": "Homologous vs Analogous (PDF Pg 1)",
    "chapterId": "bio-ch-6",
    "chapterTitle": "Evolution",
    "unit": "Genetics and Evolution",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Big Orange (NCERT Page-Referenced)",
    "frequency": "PDF Reference Pg 1 & NCERT Pg 115 (CBSE 2017, 2019, 2022)",
    "diagramId": "homologous-analogous",
    "questionPrompt": "Differentiate between Homologous organs and Analogous organs. Explain how they indicate Divergent Evolution and Convergent Evolution respectively, with two examples of each.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 6: Evolution",
      "page": "Pages 114–116",
      "figures": "Fig 6.3 & Fig 6.4"
    },
    "theory": [
      "• Homologous Organs (Divergent Evolution): Structures sharing the same fundamental anatomical plan and embryonic origin, adapted to perform different functions in different environments.",
      "• Homology Examples: Forelimbs of Human, Cheetah, Whale, and Bat; Thorns of Bougainvillea and Tendrils of Cucurbita (both modified axillary buds).",
      "• Analogous Organs (Convergent Evolution): Structures having different basic anatomical architecture and embryonic origin, but performing similar functions under common selective pressures.",
      "• Analogy Examples: Wings of Butterfly and Bird; Eye of Octopus and Mammal; Sweet potato (root tuber) and Potato (stem tuber)."
    ],
    "keyPointsAndKeywords": [
      "Homologous: Same structure, different function",
      "Indicates Divergent Evolution & common ancestry",
      "Forelimbs of whale, bat, cheetah, human",
      "Analogous: Different structure, same function",
      "Indicates Convergent Evolution",
      "Wings of butterfly vs bird, Sweet potato vs potato"
    ],
    "modelAnswer": {
      "statement": "Homologous organs demonstrate divergent evolution from common ancestors, while analogous organs represent convergent evolution driven by shared environmental demands.",
      "markingScheme": [
        "1.5 Marks: Homologous organs definition + Divergent evolution + Forelimbs of vertebrates example.",
        "1.5 Marks: Analogous organs definition + Convergent evolution + Butterfly/Bird wings or Sweet potato/Potato example."
      ],
      "examinerTips": "Remember: 'Homology indicates Common Ancestry (Divergent)', while 'Analogy indicates Similar Selection Pressures (Convergent)'."
    },
    "diagram": {
      "hasDiagram": true,
      "diagramId": "homologous-analogous",
      "title": "Homologous vs Analogous Organs & Evolutionary Divergence",
      "examDrawingGuide": [
        "1. Homologous Structures: Draw forelimbs of Whale, Bat, Cheetah, and Human showing identical skeletal elements (Humerus, Radius, Ulna, Carpals, Metacarpals, Phalanges) adapted for swimming, flying, running, grasping.",
        "2. Analogous Structures: Draw wings of butterfly (invertebrate epidermal fold) vs wings of bird (feathered forelimb) adapted for flight.",
        "3. Label: Homology = Divergent Evolution (common ancestor); Analogy = Convergent Evolution (convergent adaptation)."
      ]
    },
    "derivations": [
      {
        "name": "Comparative Framework: Divergent vs Convergent Evolution",
        "setup": "Morphological and anatomical evidence for evolution.",
        "steps": [
          {
            "text": "Homology (Divergent Evolution):",
            "equation": "\\text{Same basic anatomy} \\xrightarrow{\\text{Different habitats}} \\text{Diverse functional adaptations (Common Ancestry)}"
          },
          {
            "text": "Analogy (Convergent Evolution):",
            "equation": "\\text{Different basic origins} \\xrightarrow{\\text{Similar habitat pressure}} \\text{Convergent function (Adaptation)}"
          }
        ],
        "finalFormula": "\\text{Homology = Divergent Evolution (Bougainvillea/Cucurbita)} \\; | \\; \\text{Analogy = Convergent Evolution (Potato/Sweet Potato)}"
      }
    ]
  },
  {
    "id": "bio-page-25",
    "number": 69,
    "section": "page",
    "title": "Theories of Evolution: Lamarckism, Darwinism & Hugo de Vries (Saltation)",
    "shortLabel": "Theories of Evolution (PDF Pg 1)",
    "chapterId": "bio-ch-6",
    "chapterTitle": "Evolution",
    "unit": "Genetics and Evolution",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Big Orange (NCERT Page-Referenced)",
    "frequency": "PDF Reference Pg 1 & NCERT Pg 118 (CBSE 2016, 2018, 2021)",
    "questionPrompt": "Compare the three major theories of biological evolution:\n(a) Lamarckism (Use and disuse of organs)\n(b) Darwinism (Branching descent & Natural Selection)\n(c) Mutation Theory of Hugo de Vries (Saltation)",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 6: Evolution",
      "page": "Pages 118–120"
    },
    "theory": [
      "• Lamarckism: Theory of inheritance of acquired characters and use/disuse of organs (e.g. elongation of giraffe neck due to stretching for tree foliage).",
      "• Darwinism (Natural Selection): Evolution by gradual natural selection acting on minor continuous variations; survival of the fittest based on differential reproductive success.",
      "• Hugo de Vries (Mutation Theory): Proposed that evolution occurs through large, sudden, discontinuous, single-step mutations (Saltation) based on experiments on Evening Primrose (Oenothera lamarckiana).",
      "• Directionality: Darwinian variations are small and directional; de Vriesian mutations are random and directionless."
    ],
    "keyPointsAndKeywords": [
      "Lamarckism: Use and disuse of organs (giraffe neck)",
      "Darwinism: Branching descent and Natural Selection",
      "Darwin variations: Small, continuous, and directional",
      "Hugo de Vries: Mutations are large, random, and directionless",
      "Saltation: Single-step large mutation causing speciation"
    ],
    "modelAnswer": {
      "statement": "Biological evolution theories evolved from Lamarckian use/disuse, to Darwinian gradual natural selection, to de Vriesian saltationary mutations.",
      "markingScheme": [
        "1 Mark: Lamarckism (use/disuse principle + giraffe example).",
        "1 Mark: Darwinism (two key concepts: Branching descent & Natural selection; gradual directional variations).",
        "1 Mark: Hugo de Vries Mutation Theory (random, directionless mutations + Saltation definition)."
      ],
      "examinerTips": "Contrast Darwin vs de Vries: Darwinian variations are small and directional; de Vriesian mutations are large, random, and directionless."
    },
    "derivations": [
      {
        "name": "Comparison of Evolutionary Theories: Darwinism vs Hugo de Vries",
        "setup": "Mechanisms generating species diversity.",
        "steps": [
          {
            "text": "Darwinian Evolution:",
            "equation": "\\text{Minor continuous variations} \\implies \\text{Gradual, slow, and directional evolution}"
          },
          {
            "text": "Hugo de Vries Mutation Theory:",
            "equation": "\\text{Single step large mutation (Saltation)} \\implies \\text{Discontinuous, sudden, and directionless evolution}"
          }
        ],
        "finalFormula": "\\text{Darwin = Gradual Directional Selection} \\quad | \\quad \\text{De Vries = Single Step Large Mutation (Saltation)}"
      }
    ]
  },
  {
    "id": "bio-page-26",
    "number": 70,
    "section": "page",
    "title": "Schematic Structure of a Transcription Unit — Diagram",
    "shortLabel": "Transcription Unit Diagram (PDF Pg 8)",
    "chapterId": "bio-ch-5",
    "chapterTitle": "Molecular Basis of Inheritance",
    "unit": "Genetics and Evolution",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Big Orange (NCERT Page-Referenced)",
    "frequency": "PDF Reference Pg 8 & NCERT Fig 5.9 (CBSE 2017, 2020, 2023)",
    "diagramId": "transcription-unit",
    "questionPrompt": "Draw a neat labelled schematic diagram of a Transcription Unit as outlined on PDF Page 8 / NCERT Figure 5.9. Label Promoter, Structural gene, Terminator, Template strand, and Coding strand. Why is the coding strand called 'coding' even though it does not code for RNA?",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 5: Molecular Basis of Inheritance",
      "page": "Page 91",
      "figures": "Fig 5.9"
    },
    "theory": [
      "• Three Components: A transcription unit in DNA consists of: (i) Promoter, (ii) Structural gene, (iii) Terminator.",
      "• Polarity Rules: RNA Polymerase synthesises RNA strictly in the $5'\\to 3'$ direction; hence the DNA strand with $3'\\to 5'$ polarity serves as the Template Strand.",
      "• Coding Strand Reference: The strand with $5'\\to 3'$ polarity is called the Coding Strand; all positions (promoter at 5'-end, terminator at 3'-end) are referenced with respect to the coding strand."
    ],
    "keyPointsAndKeywords": [
      "Promoter (upstream at 5' end of coding strand)",
      "Structural gene (coding region)",
      "Terminator (downstream at 3' end of coding strand)",
      "Template strand: 3' → 5' polarity",
      "Coding strand: 5' → 3' polarity; reference strand"
    ],
    "modelAnswer": {
      "statement": "A transcription unit comprises a promoter, structural gene, and terminator; all reference polarities are established relative to the 5'→3' coding strand.",
      "markingScheme": [
        "1.5 Marks: Accurate schematic diagram with all 5 labels (Promoter, Structural gene, Terminator, Template strand 3'→5', Coding strand 5'→3').",
        "1.5 Marks: Polarity explanation and justification for why coding strand is used as the reference."
      ],
      "examinerTips": "Remember: RNA polymerase always polymerizes in the 5' → 3' direction; therefore, the template strand MUST run 3' → 5'."
    },
    "diagram": {
      "hasDiagram": true,
      "diagramId": "transcription-unit",
      "title": "Schematic Architecture of a Transcription Unit",
      "examDrawingGuide": [
        "1. Draw double-stranded DNA: Template strand (3'->5') and Coding strand (5'->3').",
        "2. Draw Promoter located at 5' end (upstream) of coding strand.",
        "3. Draw Structural gene in the middle.",
        "4. Draw Terminator located at 3' end (downstream) of coding strand.",
        "5. Show arrow indicating 5' to 3' synthesis of nascent RNA transcript."
      ]
    },
    "derivations": [
      {
        "name": "Structural Organization & Polarity Conventions of Transcription Unit",
        "setup": "DNA duplex organization required for transcription.",
        "steps": [
          {
            "text": "Template Strand:",
            "equation": "\\text{Polarity: } 3' \\to 5' \\implies \\text{Acts as template for RNA Polymerase}"
          },
          {
            "text": "Coding Strand (Reference strand):",
            "equation": "\\text{Polarity: } 5' \\to 3' \\implies \\text{Sequence matches RNA (with T instead of U)}"
          },
          {
            "text": "Promoter & Terminator landmarks:",
            "equation": "\\text{Promoter at 5'-end (upstream)} \\quad \\longleftrightarrow \\quad \\text{Terminator at 3'-end (downstream)}"
          }
        ],
        "finalFormula": "\\text{Template: } 3'\\to 5' \\quad | \\quad \\text{Coding: } 5'\\to 3' \\quad | \\quad \\text{Promoter = 5'-end upstream of coding strand}"
      }
    ]
  },
  {
    "id": "bio-page-27",
    "number": 71,
    "section": "page",
    "title": "DNA Replicating Fork: Continuous vs Discontinuous Synthesis — Diagram",
    "shortLabel": "Replication Fork Diagram (PDF Pg 8)",
    "chapterId": "bio-ch-5",
    "chapterTitle": "Molecular Basis of Inheritance",
    "unit": "Genetics and Evolution",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Big Orange (NCERT Page-Referenced)",
    "frequency": "PDF Reference Pg 8 & NCERT Fig 5.8 (CBSE 2016, 2018, 2021, 2024)",
    "diagramId": "replicating-fork",
    "questionPrompt": "Draw a labelled diagram of the DNA Replicating Fork as given on PDF Page 8 / NCERT Figure 5.8. Clearly show the continuous synthesis on the leading strand and discontinuous synthesis on the lagging strand. Name the enzyme that joins Okazaki fragments.",
    "ncertRef": {
      "textbook": "NCERT Biology Class 12",
      "chapter": "Chapter 5: Molecular Basis of Inheritance",
      "page": "Page 88",
      "figures": "Fig 5.8"
    },
    "theory": [
      "• Replication Fork: Y-shaped structure formed when DNA Helicase unzips parental DNA duplex during replication.",
      "• Unidirectional Polymerase: DNA-dependent DNA polymerase synthesises new strands strictly in the $5'\\to 3'$ direction.",
      "• Leading Strand (Continuous): On the $3'\\to 5'$ parental template strand, synthesis occurs continuously toward the replicating fork.",
      "• Lagging Strand (Discontinuous): On the $5'\\to 3'$ parental template strand, synthesis occurs discontinuously away from the fork in short Okazaki fragments, subsequently joined by DNA Ligase."
    ],
    "keyPointsAndKeywords": [
      "Y-shaped replicating fork",
      "DNA Polymerase works strictly 5' → 3'",
      "Continuous leading strand on 3' → 5' template",
      "Discontinuous lagging strand forming Okazaki fragments",
      "DNA Ligase seals fragments"
    ],
    "modelAnswer": {
      "statement": "The DNA replication fork exhibits continuous 5'→3' leading strand synthesis and discontinuous lagging strand synthesis joined by DNA ligase.",
      "markingScheme": [
        "1.5 Marks: Accurate diagram showing Y-fork, parental template polarities, leading strand, and lagging strand.",
        "1 Mark: Explanation of continuous vs discontinuous synthesis due to 5'→3' polymerase constraint.",
        "0.5 Mark: Identification of DNA Ligase enzyme."
      ],
      "examinerTips": "Remember: The unwinding of DNA into a replication fork is catalyzed by DNA Helicase, while Topoisomerase/Gyrase relieves supercoiling tension."
    },
    "diagram": {
      "hasDiagram": true,
      "diagramId": "replicating-fork",
      "title": "Asymmetric DNA Replication Fork",
      "examDrawingGuide": [
        "1. Draw Y-shaped replication fork showing unzipped parental strands (3'->5' and 5'->3').",
        "2. Show continuous synthesis of Leading strand in 5'->3' direction pointing towards the fork.",
        "3. Show discontinuous synthesis of Lagging strand away from fork in Okazaki fragments.",
        "4. Show DNA Ligase joining Okazaki fragments and label RNA primers at 5' ends."
      ]
    },
    "derivations": [
      {
        "name": "Asymmetric Synthesis Dynamics at the DNA Replication Fork",
        "setup": "Semi-discontinuous DNA replication mechanism.",
        "steps": [
          {
            "text": "Leading Strand synthesis:",
            "equation": "\\text{Template: } 3'\\to 5' \\implies \\text{Continuous synthesis in } 5'\\to 3' \\text{ direction towards fork}"
          },
          {
            "text": "Lagging Strand synthesis:",
            "equation": "\\text{Template: } 5'\\to 3' \\implies \\text{Discontinuous Okazaki fragments synthesised away from fork}"
          },
          {
            "text": "Enzymatic ligation:",
            "equation": "\\text{Okazaki fragments joined by DNA Ligase phosphodiester bonds}"
          }
        ],
        "finalFormula": "\\text{Leading = Continuous (towards fork)} \\quad | \\quad \\text{Lagging = Discontinuous (Okazaki fragments + DNA Ligase)}"
      }
    ]
  }
];

export const ALL_BIG_ORANGE_QUESTIONS = [
  ...BIG_ORANGE_CORE_QUESTIONS,
  ...BIG_ORANGE_PAGE_QUESTIONS
];
