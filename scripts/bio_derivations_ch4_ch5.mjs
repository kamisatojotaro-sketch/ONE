// Derivations, step-by-step mechanisms, drawing guides and refined theory for Chapter 4 & 5 (Core Q1 - Q14)

export const CH4_CH5_ENHANCEMENTS = {
  "bio-core-1": {
    theory: [
      "• Principle of Dominance: Characters are governed by discrete hereditary units called factors (genes) occurring in pairs. In a dissimilar pair, one factor dominates over the other (recessive).",
      "• Principle of Segregation (Purity of Gametes): Alleles of a gene pair segregate cleanly during gametogenesis without blending, ensuring each gamete receives only one allele. Valid universally without exception.",
      "• Principle of Independent Assortment: Segregation of one pair of traits during gamete formation is completely independent of the segregation of another pair of traits (observed in dihybrid crosses)."
    ],
    derivations: [
      {
        name: "Application 1: Monohybrid Cross (Dominance & Segregation)",
        setup: "Cross between pure Tall (TT) and pure Dwarf (tt) garden pea plants (Pisum sativum).",
        steps: [
          { text: "Parental cross:", equation: "\\text{Parents: } TT \\; (\\text{Tall}) \\times tt \\; (\\text{Dwarf})" },
          { text: "F₁ generation hybrid:", equation: "\\text{Gametes: } T, t \\implies \\text{F}_1: Tt \\; (100\\% \\text{ Phenotypically Tall})" },
          { text: "F₂ generation selfing ($Tt \\times Tt$):", equation: "\\text{Gametes: } 50\\% \\; T, \\; 50\\% \\; t" },
          { text: "Punnett square 4-box progeny classification:", equation: "1 \\; TT \\; (\\text{Tall}) : 2 \\; Tt \\; (\\text{Tall}) : 1 \\; tt \\; (\\text{Dwarf})" }
        ],
        specialCases: [
          { title: "Universal Purity of Gametes", text: "Dwarf character (tt) emerges unmodified in F₂ despite being completely masked in F₁, proving alleles do not blend." }
        ],
        finalFormula: "\\text{F}_2 \\text{ Phenotypic Ratio} = 3 \\text{ Tall} : 1 \\text{ Dwarf} \\quad | \\quad \\text{Genotypic Ratio} = 1 \\; TT : 2 \\; Tt : 1 \\; tt \\; (1:2:1)"
      },
      {
        name: "Application 2: Dihybrid Cross (Independent Assortment)",
        setup: "Cross between Round Yellow seeds (RRYY) and Wrinkled Green seeds (rryy).",
        steps: [
          { text: "F₁ dihybrid generation:", equation: "RRYY \\times rryy \\implies \\text{F}_1: RrYy \\; (100\\% \\text{ Round Yellow})" },
          { text: "F₁ gametes formed in equal proportions (25% each):", equation: "RY, \\; Ry, \\; rY, \\; ry" },
          { text: "F₂ 16-box Punnett square phenotypic distribution:", equation: "9 \\text{ Round-Yellow} : 3 \\text{ Round-Green} : 3 \\text{ Wrinkled-Yellow} : 1 \\text{ Wrinkled-Green}" }
        ],
        specialCases: [
          { title: "Exception to Independent Assortment", text: "Physical linkage between genes located on the same chromosome (T.H. Morgan) restricts independent assortment." }
        ],
        finalFormula: "\\text{Dihybrid Phenotypic Ratio} = 9 : 3 : 3 : 1"
      }
    ]
  },

  "bio-core-2": {
    theory: [
      "• Incomplete Dominance: Neither allele shows absolute dominance. The heterozygous F₁ phenotype is intermediate between the two homozygous parental phenotypes.",
      "• Co-dominance: Both alleles of a gene express themselves fully and simultaneously in the heterozygote without blending or dominance.",
      "• Classical Examples: Snapdragon / Antirrhinum majus (flower color) for Incomplete Dominance; Human ABO blood grouping ($I^A I^B$) for Co-dominance."
    ],
    derivations: [
      {
        name: "Mechanism 1: Incomplete Dominance in Snapdragon (Antirrhinum majus)",
        setup: "True-breeding Red flowered plant (RR) crossed with true-breeding White flowered plant (rr).",
        steps: [
          { text: "Parental cross and F₁ pink intermediate:", equation: "\\text{Red } (RR) \\times \\text{White } (rr) \\implies \\text{F}_1: Rr \\; (\\text{Pink Flowers})" },
          { text: "Selfing F₁ generation ($Rr \\times Rr$):", equation: "\\text{Gametes: } R, r" },
          { text: "F₂ generation outcome:", equation: "1 \\; RR \\; (\\text{Red}) : 2 \\; Rr \\; (\\text{Pink}) : 1 \\; rr \\; (\\text{White})" }
        ],
        specialCases: [
          { title: "Identical Ratios", text: "In incomplete dominance, the phenotypic ratio (1:2:1) is identical to the genotypic ratio (1:2:1)." }
        ],
        finalFormula: "\\text{Phenotypic Ratio} = \\text{Genotypic Ratio} = 1 \\text{ Red} : 2 \\text{ Pink} : 1 \\text{ White} = 1:2:1"
      },
      {
        name: "Mechanism 2: Co-dominance in Human ABO Blood Groups",
        setup: "Gene I controls RBC plasma membrane sugar polymers with 3 alleles: $I^A, I^B, i$.",
        steps: [
          { text: "Dominance hierarchy:", equation: "I^A > i, \\quad I^B > i, \\quad I^A = I^B \\; (\\text{Codominant})" },
          { text: "Expression in heterozygous state ($I^A I^B$):", equation: "\\text{Both A and B glycoprotein antigens expressed on RBC surface} \\implies \\text{Blood Group AB}" }
        ],
        finalFormula: "\\text{Genotype } I^A I^B \\implies \\text{Blood Group AB (Dual Antigen Expression, Zero Blending)}"
      }
    ]
  },

  "bio-core-3": {
    theory: [
      "• Haplodiploid Mechanism: Sex determination depends on chromosome set ploidy: diploid females (2n=32) vs haploid males (n=16).",
      "• Females (Queens & Workers): Arise through fertilization of an egg (n=16) by sperm (n=16) $\\to$ 2n = 32 chromosomes.",
      "• Males (Drones): Arise via parthenogenesis from unfertilized eggs without fertilization $\\to$ n = 16 chromosomes.",
      "• Spermatogenesis: Drones produce sperms by Mitosis, preserving their haploid chromosome count."
    ],
    derivations: [
      {
        name: "Haplodiploid Chromosomal Cycle & Lineage Paradox",
        setup: "Apis mellifera sex determination and generational inheritance flow.",
        steps: [
          { text: "Queen gametogenesis via Meiosis:", equation: "\\text{Diploid Queen } (2n = 32) \\xrightarrow{\\text{Meiosis}} \\text{Eggs } (n = 16)" },
          { text: "Parthenogenetic male production:", equation: "\\text{Unfertilized Egg } (n = 16) \\xrightarrow{\\text{Parthenogenesis}} \\text{Male Drone } (n = 16)" },
          { text: "Mitotic sperm production in haploid males:", equation: "\\text{Haploid Drone } (n = 16) \\xrightarrow{\\text{Mitosis}} \\text{Sperm } (n = 16)" },
          { text: "Syngamy producing female offspring:", equation: "\\text{Egg } (n = 16) + \\text{Sperm } (n = 16) \\implies \\text{Female } (2n = 32)" }
        ],
        specialCases: [
          { title: "Generational Paradox", text: "Males have no father (unfertilized egg) and no sons (sperms only yield diploid females), but have a grandfather and grandsons." }
        ],
        finalFormula: "\\text{Male (Drone): } n = 16 \\; (\\text{Parthenogenesis}) \\quad | \\quad \\text{Female: } 2n = 32 \\; (\\text{Fertilization})"
      }
    ]
  },

  "bio-core-4": {
    theory: [
      "• Mendelian Disorders: Genetic disorders caused by mutation or alteration in a single gene, transmitted along strict Mendelian pedigree patterns.",
      "• Haemophilia: X-linked recessive bleeding disorder resulting from defective clotting factor VIII or IX in the coagulation cascade.",
      "• Sickle-Cell Anaemia: Autosomal recessive disorder (chromosome 11) caused by a point mutation in the beta-globin gene.",
      "• Thalassemia: Autosomal recessive quantitative defect caused by reduced synthesis of alpha or beta globin chains."
    ],
    derivations: [
      {
        name: "Molecular Mechanism: Sickle-Cell Anaemia (Point Mutation)",
        setup: "Single nucleotide transversion in beta-globin chain at codon 6 on chromosome 11.",
        steps: [
          { text: "Codon mutation in DNA and mRNA:", equation: "\\text{DNA: } \\text{CTC} \\to \\text{CAC} \\quad | \\quad \\text{mRNA: } \\text{GAG} \\to \\text{GUG}" },
          { text: "Amino acid substitution at residue 6 of beta-globin:", equation: "\\text{Glutamic acid (Glu, Polar)} \\longrightarrow \\text{Valine (Val, Non-polar)}" },
          { text: "Polymerisation under hypoxic tension:", equation: "\\text{Hb}^S \\text{ polymerises} \\implies \\text{Biconcave RBC} \\to \\text{Sickle-shaped RBC}" }
        ],
        specialCases: [
          { title: "Qualitative vs Quantitative Defect", text: "Sickle-cell is a qualitative defect (abnormal HbS synthesized). Thalassemia is a quantitative defect (deficient volume of normal chains)." }
        ],
        finalFormula: "\\text{Genotype } \\text{Hb}^S\\text{Hb}^S = \\text{Sickle-Cell Disease} \\quad | \\quad \\text{Hb}^A\\text{Hb}^S = \\text{Asymptomatic Carrier (Malaria Resistant)}"
      }
    ]
  },

  "bio-core-5": {
    theory: [
      "• Aneuploidy: Gain or loss of one or more chromosomes due to failure of sister chromatid segregation (non-disjunction) during meiotic cell division.",
      "• Down's Syndrome: Autosomal trisomy of chromosome 21 ($47, +21$). Symptoms: furrowed tongue, palm crease, flat back of head, mental retardation.",
      "• Klinefelter's Syndrome: Sex-chromosomal trisomy in males ($47, XXY$). Symptoms: gynaecomastia, tall feminine stature, sterile.",
      "• Turner's Syndrome: Sex-chromosomal monosomy in females ($45, XO$). Symptoms: rudimentary ovaries, webbed neck, sterile."
    ],
    derivations: [
      {
        name: "Karyotypic Classification of Major Aneuploidies",
        setup: "Non-disjunction of homologous chromosomes during gametogenesis.",
        steps: [
          { text: "Down's Syndrome (Autosomal Trisomy 21):", equation: "2n + 1 = 47 \\; (\\text{Trisomy of Chromosome 21})" },
          { text: "Klinefelter's Syndrome (Sex Chromosome Trisomy):", equation: "2n + 1 = 47, \\; XXY \\; (\\text{Male with extra X})" },
          { text: "Turner's Syndrome (Sex Chromosome Monosomy):", equation: "2n - 1 = 45, \\; XO \\; (\\text{Female lacking one X})" }
        ],
        finalFormula: "\\text{Down's} = 47 (+21) \\quad | \\quad \\text{Klinefelter's} = 47 (XXY) \\quad | \\quad \\text{Turner's} = 45 (XO)"
      }
    ]
  },

  "bio-core-6": {
    theory: [
      "• Linkage: The physical association and tendency of genes situated on the same chromosome to remain together during meiotic inheritance.",
      "• Recombination: Generation of non-parental gene combinations resulting from crossing-over between homologous chromosomes during pachytene of meiosis I.",
      "• Physical Distance Rule: Recombination frequency is directly proportional to the physical distance between linked genes on a chromosome.",
      "• Model Organism: T.H. Morgan selected Drosophila melanogaster due to its 2-week life cycle, simple synthetic medium growth, and distinct sexual dimorphism."
    ],
    derivations: [
      {
        name: "Morgan's Dihybrid Cross & Recombination Frequency (Alfred Sturtevant)",
        setup: "Analysis of linkage in Drosophila melanogaster for body color, eye color, and wing size.",
        steps: [
          { text: "Tightly linked genes (Yellow body & White eye):", equation: "\\text{Parental types} = 98.7\\%, \\quad \\text{Recombinants} = 1.3\\%" },
          { text: "Loosely linked genes (White eye & Miniature wing):", equation: "\\text{Parental types} = 62.8\\%, \\quad \\text{Recombinants} = 37.2\\%" },
          { text: "Genetic mapping principle (Sturtevant):", equation: "1\\% \\text{ Recombination} = 1 \\text{ map unit (centiMorgan / cM)}" }
        ],
        specialCases: [
          { title: "Maximum Recombination Limit", text: "Recombination frequency between linked genes on the same chromosome cannot exceed 50% (at 50%, genes assort independently)." }
        ],
        finalFormula: "\\text{Recombination Frequency (\\%)} \\propto \\text{Physical Distance Between Linked Genes}"
      }
    ]
  },

  "bio-core-7": {
    theory: [
      "• Polygenic Inheritance: Quantitative inheritance where three or more genes control a single phenotypic trait in an additive, cumulative manner.",
      "• Polygenic Example: Human skin colour controlled by three genes (A, B, C). Dominant alleles add melanin gradient: AABBCC (darkest) to aabbcc (lightest).",
      "• Pleiotropy: A single gene influences multiple phenotypic traits simultaneously by regulating a key metabolic pathway.",
      "• Pleiotropy Example: Phenylketonuria (mutation in phenylalanine hydroxylase causes mental retardation, hair loss, and skin hypopigmentation)."
    ],
    derivations: [
      {
        name: "Genetic Mechanism: Quantitative Gradient vs Pleiotropic Multi-Effect",
        setup: "Comparison of gene-to-phenotype mapping in polygenic vs pleiotropic loci.",
        steps: [
          { text: "Polygenic (Multiple genes $\\to$ 1 trait):", equation: "3 \\text{ Genes } (A, B, C) \\implies 7 \\text{ Phenotypic skin gradations (bell-shaped curve)}" },
          { text: "Pleiotropy (1 gene $\\to$ Multiple traits):", equation: "1 \\text{ Defective Gene } (PAH) \\implies \\text{Mental retardation} + \\text{Skin hypopigmentation} + \\text{Urinary excretion}" }
        ],
        finalFormula: "\\text{Polygenic} = \\text{Many Genes } \\to \\text{ 1 Trait} \\quad | \\quad \\text{Pleiotropy} = \\text{1 Gene } \\to \\text{ Many Traits}"
      }
    ]
  },

  "bio-core-8": {
    theory: [
      "• Genetic Etiology: Inborn error of metabolism inherited as an autosomal recessive trait located on chromosome 12.",
      "• Biochemical Defect: Deficiency of liver enzyme Phenylalanine Hydroxylase, which normally converts phenylalanine into tyrosine.",
      "• Pathological Accumulation: Phenylalanine accumulates and is transaminated into phenylpyruvic acid and related neurotoxic derivatives.",
      "• Clinical Manifestations: Severe mental retardation, hypopigmentation of hair and skin, and poor tubular reabsorption causing excretion in urine."
    ],
    derivations: [
      {
        name: "Biochemical Pathway Block in Phenylketonuria",
        setup: "Metabolic fate of dietary essential amino acid phenylalanine.",
        steps: [
          { text: "Normal hepatic metabolic pathway:", equation: "\\text{Phenylalanine} \\xrightarrow{\\text{Phenylalanine Hydroxylase}} \\text{Tyrosine} \\to \\text{Melanin, Dopamine, Thyroxine}" },
          { text: "Metabolic block in PKU (enzyme deficiency):", equation: "\\text{Phenylalanine accumulation} \\xrightarrow{\\text{Transamination}} \\text{Phenylpyruvic acid} + \\text{Phenyl-lactic acid}" },
          { text: "Neurotoxic accumulation in CSF and brain:", equation: "\\text{Phenylpyruvate} \\implies \\text{Damage to developing CNS / Mental retardation}" }
        ],
        finalFormula: "\\text{Phe } \\not\\to \\text{ Tyr} \\implies \\text{Accumulation of Phenylpyruvate} \\implies \\text{Mental Retardation + Hypopigmentation}"
      }
    ]
  },

  "bio-core-9": {
    theory: [
      "• Bacterial Transformation: The uptake and phenotypic integration of exogenous naked DNA by competent bacterial recipient cells.",
      "• Griffith's Experiment (1928): In vivo mice transformation using virulent encapsulated S-strain and avirulent rough R-strain of Streptococcus pneumoniae.",
      "• Biochemical Proof (Avery, MacLeod, McCarty, 1944): In vitro enzymatic digestion demonstrating that DNA alone is the transforming genetic principle."
    ],
    derivations: [
      {
        name: "Protocol 1: Frederick Griffith's In Vivo Mice Assay (1928)",
        setup: "Streptococcus pneumoniae strains injected into laboratory mice.",
        steps: [
          { text: "Injection 1 (Live S strain, smooth virulent):", equation: "\\text{Live S-strain} \\implies \\text{Mice die of pneumonia}" },
          { text: "Injection 2 (Live R strain, rough avirulent):", equation: "\\text{Live R-strain} \\implies \\text{Mice survive}" },
          { text: "Injection 3 (Heat-killed S strain):", equation: "\\text{Heat-killed S-strain} \\implies \\text{Mice survive}" },
          { text: "Injection 4 (Heat-killed S + Live R strain):", equation: "\\text{Heat-killed S} + \\text{Live R} \\implies \\text{Mice die; Live S recovered!}" }
        ],
        finalFormula: "\\text{Transforming principle transferred from heat-killed S to live R strain}"
      },
      {
        name: "Protocol 2: Avery, MacLeod & McCarty Enzymatic Hydrolysis Assay (1944)",
        setup: "Purified biochemical fractions from heat-killed S-cells treated with selective hydrolytic enzymes.",
        steps: [
          { text: "Extract treated with Protease (protein digestion):", equation: "\\text{Extract} + \\text{Protease} \\implies \\text{Transformation still occurs}" },
          { text: "Extract treated with RNase (RNA digestion):", equation: "\\text{Extract} + \\text{RNase} \\implies \\text{Transformation still occurs}" },
          { text: "Extract treated with DNase (DNA digestion):", equation: "\\text{Extract} + \\text{DNase} \\implies \\text{Transformation completely abolished!}" }
        ],
        specialCases: [
          { title: "Enzyme vs Substance Nomenclature", text: "DNase is the hydrolytic enzyme; DNA is the genetic substance destroyed by the enzyme." }
        ],
        finalFormula: "\\text{Only DNase inhibits transformation} \\implies \\text{DNA is the Transforming Genetic Material}"
      }
    ]
  },

  "bio-core-10": {
    diagramId: "transcription-unit",
    diagram: {
      hasDiagram: true,
      diagramId: "transcription-unit",
      title: "Transcription Unit & Eukaryotic hnRNA Modifications",
      examDrawingGuide: [
        "1. Draw transcription unit: Promoter at 5' end of coding strand, Structural gene in center, and Terminator at 3' end.",
        "2. Draw precursor hnRNA with alternating Exons (coding) and Introns (non-coding).",
        "3. Show Capping at 5' end with 7-methylguanosine triphosphate and Tailing at 3' end with poly-A tail (200–300 adenylate residues).",
        "4. Show loop-out removal of Introns via spliceosomes to yield mature mRNA."
      ]
    },
    theory: [
      "• Eukaryotic Nuclear RNA Polymerases: Three distinct enzymes: RNA Pol I (rRNAs: 28S, 18S, 5.8S), RNA Pol II (precursor hnRNA / mRNA), RNA Pol III (tRNA, 5S rRNA, snRNA).",
      "• Splicing: Primary hnRNA contains functional coding sequences (exons) split by non-coding intervening sequences (introns); spliceosomes excise introns and join exons.",
      "• Capping & Tailing: Capping adds 7-methylguanosine triphosphate (7-mG) at 5'-end; Tailing adds poly-A tail (200–300 adenylate residues) at 3'-end in template-independent manner."
    ],
    derivations: [
      {
        name: "Sequential Post-Transcriptional Processing of Eukaryotic hnRNA",
        setup: "Conversion of nascent heterogeneous nuclear RNA into mature exportable mRNA.",
        steps: [
          { text: "1. 5'-End Capping:", equation: "\\text{Addition of 7-methylguanosine triphosphate } (7\\text{-mGppp}) \\text{ at } 5'\\text{-terminus}" },
          { text: "2. Spliceosome-mediated Splicing:", equation: "\\text{Looping and excision of introns} \\xrightarrow{\\text{Ligase}} \\text{Continuous mature exon sequence}" },
          { text: "3. 3'-End Polyadenylation (Tailing):", equation: "\\text{Addition of poly-A tail (200–300 residues) at } 3'\\text{-terminus}" }
        ],
        specialCases: [
          { title: "Evolutionary Significance of Split Genes", text: "The split-gene arrangement and presence of introns reflects the ancient dominance of the RNA world." }
        ],
        finalFormula: "\\text{hnRNA} \\xrightarrow{\\text{Capping + Splicing + Tailing}} \\text{Mature mRNA (transported to cytoplasm)}"
      }
    ]
  },

  "bio-core-11": {
    theory: [
      "• Watson-Crick Model (1953): Proposed double helical structure of B-DNA based on X-ray diffraction data of Rosalind Franklin and Maurice Wilkins.",
      "• Antiparallel Chains: Two polynucleotide chains running in opposite directions ($5'\\to 3'$ and $3'\\to 5'$) with sugar-phosphate backbones outside and bases inside.",
      "• Complementary Base Pairing: Adenine pairs with Thymine via 2 hydrogen bonds ($A = T$); Guanine pairs with Cytosine via 3 hydrogen bonds ($G \\equiv C$), maintaining constant 2.0 nm width.",
      "• Helical Dimensions: Pitch = 3.4 nm (34 Å), roughly 10 base pairs per turn, and distance between adjacent base pairs = 0.34 nm (3.4 Å)."
    ],
    derivations: [
      {
        name: "Geometric Parameters & Chargaff's Equivalence Rule",
        setup: "Chemical stoichiometry and structural dimensions of double-stranded B-DNA.",
        steps: [
          { text: "Complementary base pairing:", equation: "A = T \\; (2 \\text{ H-bonds}), \\quad G \\equiv C \\; (3 \\text{ H-bonds})" },
          { text: "Chargaff's Rule for double-stranded DNA:", equation: "[A] = [T], \\; [G] = [C] \\implies \\frac{[A] + [G]}{[T] + [C]} = 1.0" },
          { text: "Helical axial distance per base pair:", equation: "\\text{Distance per bp} = \\frac{\\text{Pitch (3.4 nm)}}{10 \\text{ bp/turn}} = 0.34 \\text{ nm (3.4 \\AA)}" }
        ],
        finalFormula: "\\text{Chargaff's Rule: } \\frac{\\text{Purines}}{\\text{Pyrimidines}} = 1.0 \\quad | \\quad \\text{Pitch} = 3.4 \\text{ nm} \\quad | \\quad \\text{Diameter} = 2.0 \\text{ nm}"
      }
    ]
  },

  "bio-core-12": {
    diagramId: "replicating-fork",
    diagram: {
      hasDiagram: true,
      diagramId: "replicating-fork",
      title: "DNA Replication Fork & Density Gradient Bands",
      examDrawingGuide: [
        "1. Draw replication fork showing template strands with 3'->5' and 5'->3' polarities.",
        "2. Draw continuous synthesis of Leading strand (5'->3') pointing into the fork.",
        "3. Draw discontinuous synthesis of Lagging strand in Okazaki fragments joined by DNA Ligase.",
        "4. Draw 3 test tubes showing CsCl gradient: Gen 0 = 100% heavy 15N band at bottom; Gen 1 = 100% hybrid band in middle; Gen 2 = 50% hybrid and 50% light 14N band at top."
      ]
    },
    theory: [
      "• Semiconservative Mechanism: During DNA replication, the two parent strands separate, each serving as a template for synthesizing a new complementary daughter strand.",
      "• Meselson & Stahl Experiment (1958): Demonstrated semiconservative replication in E. coli using heavy isotope $^{15}\\text{N}$ and CsCl density gradient centrifugation.",
      "• Taylor's Confirmation (1958): Proved semiconservative replication at chromosomal level in Vicia faba using radioactive tritiated thymidine."
    ],
    derivations: [
      {
        name: "Meselson and Stahl's Density Gradient Centrifugation Protocol",
        setup: "E. coli grown in 15NH4Cl medium transferred to 14NH4Cl medium (division cycle = 20 min).",
        steps: [
          { text: "Generation 0 (After multiple cycles in 15N):", equation: "100\\% \\; ^{15}\\text{N-}^{15}\\text{N} \\implies \\text{Heavy Density Band at bottom of CsCl gradient}" },
          { text: "Generation 1 (After 1 cycle = 20 min in 14N):", equation: "100\\% \\; ^{14}\\text{N-}^{15}\\text{N} \\implies \\text{Intermediate Hybrid Density Band}" },
          { text: "Generation 2 (After 2 cycles = 40 min in 14N):", equation: "50\\% \\; ^{14}\\text{N-}^{15}\\text{N} \\; (\\text{Hybrid}) + 50\\% \\; ^{14}\\text{N-}^{14}\\text{N} \\; (\\text{Light Band})" }
        ],
        specialCases: [
          { title: "Heavy vs Radioactive Isotope", text: "15N is a heavy non-radioactive stable isotope separated strictly by density equilibrium in CsCl, not radiation detection." }
        ],
        finalFormula: "\\text{Gen 1: 100\\% Hybrid} \\quad | \\quad \\text{Gen 2: 50\\% Hybrid + 50\\% Light} \\implies \\text{Proves Semiconservative Replication}"
      }
    ]
  },

  "bio-core-13": {
    diagramId: "lac-operon",
    diagram: {
      hasDiagram: true,
      diagramId: "lac-operon",
      title: "Organization & Working of the Lac Operon",
      examDrawingGuide: [
        "1. Draw operon genes in order: p - i - p - o - z - y - a.",
        "2. Absence of Inducer: Show i gene transcribing repressor protein, arrow binding to operator 'o', and a cross blocking RNA Polymerase from reaching z, y, a.",
        "3. Presence of Inducer: Show Inducer (lactose) binding repressor, rendering it inactive; show RNA Polymerase transcribing polycistronic mRNA.",
        "4. Label enzymes: z -> β-galactosidase, y -> Permease, a -> Transacetylase."
      ]
    },
    theory: [
      "• Operon Concept: A coordinated unit of gene expression in prokaryotes comprising regulatory genes, a promoter, an operator, and structural genes (Jacob & Monod).",
      "• Structural Genes: z gene codes for Beta-galactosidase (hydrolyzes lactose); y gene codes for Permease (increases lactose uptake); a gene codes for Transacetylase.",
      "• Negative Regulation: Operon is switched OFF by default because the repressor protein binds to the operator, sterically blocking RNA polymerase."
    ],
    derivations: [
      {
        name: "Mechanism 1: Absence of Inducer (Repressed State - Operon OFF)",
        setup: "E. coli cultured in glucose medium or without lactose.",
        steps: [
          { text: "Constitutive expression of regulator i-gene:", equation: "i\\text{-gene} \\to \\text{Repressor mRNA} \\to \\text{Active Repressor Protein}" },
          { text: "Repressor binds operator region:", equation: "\\text{Repressor} + \\text{Operator } (o) \\implies \\text{Operator Blocked}" },
          { text: "Inhibition of transcription:", equation: "\\text{RNA Polymerase cannot transcribe } z, y, a \\implies \\text{Operon OFF}" }
        ],
        specialCases: [
          { title: "Basal Permease Requirement", text: "A very low basal level of lac operon expression is always present; without it, lactose could never enter the bacterial cell." }
        ],
        finalFormula: "\\text{Repressor binds Operator} \\implies \\text{Zero mRNA synthesis} \\implies \\text{Operon OFF}"
      },
      {
        name: "Mechanism 2: Presence of Inducer (Induced State - Operon ON)",
        setup: "Lactose enters E. coli cell and acts as inducer.",
        steps: [
          { text: "Inducer binds repressor protein:", equation: "\\text{Repressor} + \\text{Inducer (Allolactose)} \\implies \\text{Inactive Repressor Complex}" },
          { text: "Operator freed for RNA Polymerase:", equation: "\\text{Operator free} \\implies \\text{RNA Polymerase binds Promoter and transcribes } z, y, a" },
          { text: "Enzyme synthesis & lactose utilization:", equation: "z \\to \\beta\\text{-galactosidase}, \\quad y \\to \\text{Permease}, \\quad a \\to \\text{Transacetylase}" }
        ],
        finalFormula: "\\text{Inducer inactivates Repressor} \\implies \\text{Enzymes Synthesized} \\implies \\text{Operon ON}"
      }
    ]
  },

  "bio-core-14": {
    theory: [
      "• Basis of DNA Fingerprinting: DNA polymorphism (inherited variations in non-coding repetitive DNA) and Variable Number Tandem Repeats (VNTRs, minisatellites).",
      "• VNTR Specificity: Minisatellites (10–60 bp) show extreme copy-number variation between individuals, yielding an individual-specific pattern (except identical twins).",
      "• Applications: Forensic suspect identification, paternity dispute resolution, and evolutionary population genetics."
    ],
    derivations: [
      {
        name: "Step-by-Step Laboratory Protocol of DNA Fingerprinting (Alec Jeffreys)",
        setup: "Forensic DNA typing from biological traces (blood, hair root, semen).",
        steps: [
          { text: "1. DNA Isolation:", equation: "\\text{Lysis of cells} \\implies \\text{High molecular weight genomic DNA extracted}" },
          { text: "2. Restriction Digestion:", equation: "\\text{Incubation with Restriction Endonucleases to generate fragments}" },
          { text: "3. Agarose Gel Electrophoresis:", equation: "\\text{Separation of DNA fragments based on molecular size (-ve to +ve)}" },
          { text: "4. Southern Blotting:", equation: "\\text{Denatured single strands blotted onto synthetic nitrocellulose/nylon membrane}" },
          { text: "5. Radioactive VNTR Hybridisation:", equation: "\\text{Membrane incubated with } ^{32}\\text{P-labeled single-stranded VNTR probes}" },
          { text: "6. Autoradiography Detection:", equation: "\\text{X-ray film exposure yields characteristic bar-code dark banding pattern}" }
        ],
        finalFormula: "\\text{Unique VNTR Banding Profile} \\implies \\text{Definitive Forensic Match / Paternity Confirmation}"
      }
    ]
  }
};
