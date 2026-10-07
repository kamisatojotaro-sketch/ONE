import { useState } from 'react';
import { 
  Layers, CheckCircle2, AlertCircle, Info, 
  Sparkles, Eye, ZoomIn, X, BookOpen, PenTool, Award
} from 'lucide-react';

// Comprehensive Registry of Official NCERT Class 12 Biology Textbook Diagrams
const BIOLOGY_DIAGRAMS_REGISTRY = {
  'microsporangium-walls': {
    title: 'T.S. of Anther & 4 Microsporangial Wall Layers',
    ncertFig: 'NCERT Fig 1.3 / Fig 2.3 • Page 7 / Page 21',
    badge: 'CBSE Guaranteed 3M/5M Diagram',
    marks: '3–5 Marks',
    imageSrc: '/images/ncert/microsporangium-walls.png',
    caption: 'Official NCERT Diagram: Transverse section of young anther and enlarged microsporangial wall architecture showing all 4 distinct layers and central sporogenous tissue.',
    keyLabels: [
      { name: '1. Epidermis', tag: 'Protective', desc: 'Outermost single protective layer of flattened cells; continuous around all 4 lobes.' },
      { name: '2. Endothecium', tag: 'Dehiscence', desc: 'Sub-epidermal layer with radial alpha-cellulosic fibrous thickenings; hygroscopic, aids dehiscence at stomium.' },
      { name: '3. Middle Layers', tag: 'Ephemeral', desc: '1 to 3 layers of thin-walled parenchymatous cells; degenerate to supply nutrients to developing microspores.' },
      { name: '4. Tapetum', tag: 'Nutritive', desc: 'Innermost nutritive layer; dense cytoplasm, polyploid/multinucleate; secretes callase and Ubisch granules (sporopollenin).' },
      { name: '5. Sporogenous Cells (PMC 2n)', tag: 'Gametogenesis', desc: 'Compactly arranged diploid tissue at microsporangium centre; undergoes meiosis to produce microspore tetrads.' },
      { name: '6. Stomium & Connective', tag: 'Structural', desc: 'Point of dehiscence between pollen sacs; connective contains central vascular bundle.' }
    ],
    drawingSteps: [
      'Draw an outline of 4 interconnected lobes (bilobed, dithecous anther) with a shallow groove.',
      'From outside to inside, sketch 4 concentric cellular concentric strata: Epidermis (1 cell thick), Endothecium (elongated cells), Middle layers (2-3 compressed layers), and Tapetum (innermost layer of large cells with prominent multiple nuclei).',
      'Fill the center of each lobe with polygonal sporogenous cells (Microspore Mother Cells 2n).',
      'Mark the stomium (line of dehiscence) at the junction between two microsporangia and vascular bundle in connective tissue.'
    ],
    examinerTip: 'CBSE marking schemes strictly allocate 0.5M each for Epidermis, Endothecium, Middle Layers, and Tapetum in order from outer to inner. Always mention that the Tapetum is multinucleate and provides nourishment.'
  },

  'embryo-sac': {
    title: 'Mature Female Gametophyte (Embryo Sac) — 7-Celled, 8-Nucleate',
    ncertFig: 'NCERT Fig 1.8(d) / Fig 2.8(c) • Page 10 / Page 26',
    badge: 'CBSE Repeated 3M/5M Diagram',
    marks: '3–5 Marks',
    imageSrc: '/images/ncert/embryo-sac.png',
    caption: 'Official NCERT Diagram: Diagrammatic representation of mature 7-celled, 8-nucleate embryo sac alongside stages of 2, 4, and 8-nucleate development from functional megaspore.',
    keyLabels: [
      { name: '1. Chalazal End: 3 Antipodals (n)', tag: 'Haploid (n)', desc: 'Group of three cells situated at the chalazal pole; degenerate before or soon after fertilization.' },
      { name: '2. Central Cell with 2 Polar Nuclei (n+n)', tag: 'Diploid Unit (n+n)', desc: 'Largest cell occupying center of embryo sac containing two haploid polar nuclei; forms triploid PEN (3n) upon triple fusion.' },
      { name: '3. Micropylar End: Egg Cell (n)', tag: 'Female Gamete', desc: 'Single female gamete located between the two synergids; fuses with 1st male gamete in syngamy to form zygote (2n).' },
      { name: '4. Two Synergid Cells (n)', tag: 'Guiding', desc: 'Flank the egg cell; possess filiform apparatus at micropylar tips; degenerate after pollen tube discharge.' },
      { name: '5. Filiform Apparatus', tag: 'Chemotropic Guide', desc: 'Finger-like cellular thickenings at synergid micropylar tips; guides pollen tube chemotactically into synergid.' }
    ],
    drawingSteps: [
      'Draw an elongated oval boundary representing the embryo sac wall.',
      'At top (Chalazal end), draw 3 triangular or oval antipodal cells each with a distinct nucleus.',
      'In the large central space, draw a prominent vacuole and 2 round polar nuclei lying close together in the central cell.',
      'At bottom (Micropylar end), draw 1 egg cell flanked by 2 synergids with wavy finger-like filiform apparatus at their base.'
    ],
    examinerTip: 'Ensure you clearly distinguish between Chalazal end (antipodals) and Micropylar end (egg apparatus). Never label the polar nuclei as "2n" prior to fertilization; label as "2 polar nuclei (n + n)".'
  },

  'megasporangium': {
    title: 'Diagrammatic View of a Typical Anatropous Ovule (Megasporangium)',
    ncertFig: 'NCERT Fig 1.7(d) / Fig 2.7(d) • Page 9 / Page 25',
    badge: 'Repeated 3M CBSE Question',
    marks: '3 Marks',
    imageSrc: '/images/ncert/megasporangium.png',
    caption: 'Official NCERT Diagram: L.S. of typical inverted (anatropous) ovule illustrating funicle, hilum, micropyle, integuments, nucellus, and female gametophyte.',
    keyLabels: [
      { name: '1. Funicle & Hilum', tag: 'Attachment', desc: 'Funicle is the stalk attaching ovule to placenta; Hilum is the point of fusion between ovule body and funicle.' },
      { name: '2. Micropyle & Micropylar Pole', tag: 'Pore', desc: 'Small aperture at ovule apex left unsealed by integuments; entry route for pollen tube during fertilization.' },
      { name: '3. Outer & Inner Integuments', tag: 'Seed Coat', desc: 'Two protective envelopes surrounding nucellus; transform into testa and tegmen of seed coat.' },
      { name: '4. Nucellus (2n)', tag: 'Nutritive', desc: 'Central mass of diploid parenchymatous vegetative tissue containing abundant food reserves.' },
      { name: '5. Embryo Sac (Female Gametophyte)', tag: 'Haploid', desc: 'Seven-celled female gametophyte embedded inside nucellus at micropylar end.' },
      { name: '6. Chalazal Pole (Chalaza)', tag: 'Base', desc: 'Swollen basal region of ovule opposite to micropyle where integuments originate.' }
    ],
    drawingSteps: [
      'Draw the funicle stalk on the left curving up to the hilum junction.',
      'Sketch an inverted U-shaped ovule body with outer and inner integuments leaving a narrow micropylar opening at the top.',
      'Draw the central cellular nucellus mass inside the integuments.',
      'Place the oval embryo sac at the center and label the Chalaza at the basal end and Micropyle at the apex.'
    ],
    examinerTip: 'In anatropous ovule, the ovule is completely inverted (180° curvature) so the micropyle and hilum lie close together. Label all 7 standard parts for full 3 marks.'
  },

  'blastocyst': {
    title: 'Blastocyst Stage, Cleavage & Passage to Implantation',
    ncertFig: 'NCERT Fig 2.11 / Fig 3.11 • Page 36 / Page 52',
    badge: 'Repeated 2M/3M Question',
    marks: '2–3 Marks',
    imageSrc: '/images/ncert/blastocyst.png',
    caption: 'Official NCERT Diagram: Passage of growing embryo through fallopian tube, cleavage from zygote to morula, and blastocyst implantation into uterine endometrium.',
    keyLabels: [
      { name: '1. Trophoblast (Outer Layer)', tag: 'Placenta Formative', desc: 'Single layer of flattened peripheral cells; attaches to uterine endometrium and secretes enzymes for implantation; forms chorionic villi.' },
      { name: '2. Inner Cell Mass (Embryoblast)', tag: 'Stem Cells', desc: 'Cluster of pluripotent cells attached to one pole of trophoblast; gives rise to all 3 embryonic germ layers of fetus proper.' },
      { name: '3. Blastocoel (Blastocyst Cavity)', tag: 'Cavity', desc: 'Fluid-filled cavity formed inside blastocyst.' },
      { name: '4. Uterine Endometrium', tag: 'Implantation Site', desc: 'Glandular lining of uterus where blastocyst becomes completely embedded on Day 7 post-fertilization.' }
    ],
    drawingSteps: [
      'Draw a circle with a single outer ring of flattened cells representing the trophoblast layer.',
      'At one pole (embryonic pole), draw a compact clump of rounded cells representing the inner cell mass.',
      'Leave the remaining large central area clear to represent the blastocoel cavity.',
      'Show the blastocyst adhering to the wavy epithelial lining of uterine endometrium.'
    ],
    examinerTip: 'Clear demarcation between Trophoblast (forms extra-embryonic membranes/placenta) and Inner Cell Mass (forms embryo) is the key test point in CBSE.'
  },

  'placenta-fetus': {
    title: 'Human Fetus Within Uterus & Placental Relationship',
    ncertFig: 'NCERT Fig 2.12 / Fig 3.12 • Page 37 / Page 53',
    badge: 'High-Yield 3M Diagram',
    marks: '3 Marks',
    imageSrc: '/images/ncert/placenta-fetus.png',
    caption: 'Official NCERT Diagram: Diagrammatic representation of human fetus within uterus, chorionic/placental villi interdigitating with maternal uterine tissue, and umbilical cord.',
    keyLabels: [
      { name: '1. Placental Villi', tag: 'Interdigitation', desc: 'Finger-like projections of trophoblast interdigitating with uterine tissue to establish structural/functional exchange unit.' },
      { name: '2. Umbilical Cord with Vessels', tag: 'Vascular Link', desc: 'Connects fetus to placenta; contains 2 umbilical arteries (deoxygenated waste to placenta) and 1 umbilical vein (oxygenated blood to fetus).' },
      { name: '3. Cavity of Uterus & Amnion', tag: 'Fluid Sac', desc: 'Uterine cavity surrounding amniotic sac filled with protective amniotic fluid.' },
      { name: '4. Plug of Mucus in Cervix', tag: 'Protective Barrier', desc: 'Dense mucus plug sealing cervical canal during pregnancy to prevent bacterial invasion.' },
      { name: '5. Developing Fetus & Yolk Sac', tag: 'Fetal Body', desc: 'Developing human fetus cushioned in amniotic cavity.' }
    ],
    drawingSteps: [
      'Draw the pear-shaped uterine wall outline with thick myometrium and cervical canal at the bottom.',
      'Draw the interdigitating placental villi along the upper fundal uterine wall.',
      'Draw the fetus suspended inside with the coiled umbilical cord connecting fetal abdomen to placenta.',
      'Label the mucus plug at the cervix and cavity of uterus.'
    ],
    examinerTip: 'Remember to mention both transport function (O2, nutrients in; CO2, urea out) and endocrine function (secretes hCG, hPL, estrogen, progesterone, relaxin).'
  },

  'monocot-embryo': {
    title: 'L.S. of Embryo of Grass (Monocot) & Typical Dicot Embryo',
    ncertFig: 'NCERT Fig 1.14 / Fig 2.14 • Page 19 / Page 35',
    badge: 'CBSE Guaranteed Difference 3M',
    marks: '3 Marks',
    imageSrc: '/images/ncert/monocot-embryo.png',
    caption: 'Official NCERT Diagram: Longitudinal section of embryo of grass (monocotyledon) highlighting Scutellum, Coleoptile, Coleorhiza, Epiblast, Radicle, and Shoot apex.',
    keyLabels: [
      { name: '1. Scutellum', tag: 'Single Cotyledon', desc: 'Large, shield-shaped single cotyledon situated laterally on embryonal axis.' },
      { name: '2. Coleoptile', tag: 'Foliar Sheath', desc: 'Conical protective sheath enclosing shoot apex (plumule) and first leaf primordia; phototropic.' },
      { name: '3. Shoot Apex / Plumule', tag: 'Shoot Meristem', desc: 'Embryonic shoot tip enclosed within coleoptile.' },
      { name: '4. Epiblast', tag: 'Rudiment', desc: 'Small tongue-like outgrowth representing reduced second cotyledon.' },
      { name: '5. Radicle & Root Cap', tag: 'Root Meristem', desc: 'Embryonic root and its protective calyptra located at lower pole.' },
      { name: '6. Coleorhiza', tag: 'Root Sheath', desc: 'Undifferentiated solid protective sheath enclosing radicle and root cap.' }
    ],
    drawingSteps: [
      'Draw the shield-shaped curved scutellum body along one side.',
      'At upper embryonal axis, draw the pointed coleoptile surrounding the leafy shoot apex.',
      'At lower axis, draw the radicle with root cap covered by the blunt protective coleorhiza.',
      'Indicate the small epiblast flap opposite to scutellum.'
    ],
    examinerTip: 'Classic CBSE 2M question: Differentiate Coleoptile (foliar sheath covering plumule, breaks open during germination) and Coleorhiza (solid sheath covering radicle, remains in soil).'
  },

  'menstrual-cycle': {
    title: 'Hormonal Events & Phasic Stages of Menstrual Cycle',
    ncertFig: 'NCERT Fig 2.9 / Fig 3.9 • Page 33 / Page 49',
    badge: 'CBSE High-Yield 5M Diagram',
    marks: '5 Marks',
    imageSrc: '/images/ncert/menstrual-cycle.png',
    caption: 'Official NCERT Diagram: Complete 28-day chart correlating Pituitary hormones (FSH, LH), Ovarian follicles, Ovarian hormones (Estrogen, Progesterone), and Endometrial changes.',
    keyLabels: [
      { name: '1. Menstrual Phase (Days 1–5)', tag: 'Menses', desc: 'Breakdown of endometrial lining and uterine blood vessels due to sudden drop in progesterone.' },
      { name: '2. Follicular Phase (Days 6–13)', tag: 'Proliferative', desc: 'FSH stimulates primary follicle into Graafian follicle; growing follicle secretes Estrogen which proliferates endometrium.' },
      { name: '3. LH Surge & Ovulation (Day 14)', tag: 'Ovulatory Peak', desc: 'Rapid surge of LH induces rupture of Graafian follicle and release of secondary oocyte (ovum).' },
      { name: '4. Luteal Phase (Days 15–28)', tag: 'Secretory', desc: 'Ruptured follicle transforms into Corpus Luteum; secretes high Progesterone to maintain secretory endometrium for implantation.' },
      { name: '5. Regression of Corpus Luteum', tag: 'Day 26–28', desc: 'In absence of pregnancy, Corpus Luteum degenerates into Corpus Albicans -> Progesterone falls -> next cycle starts.' }
    ],
    drawingSteps: [
      'Set up 4 horizontal panels on a horizontal 28-day timeline: (1) Pituitary hormones, (2) Ovarian events, (3) Ovarian hormones, (4) Uterine wall.',
      'Draw FSH curve gentle rise and LH sharp spike at Day 14 (LH Surge).',
      'In ovarian events, show primary follicle -> secondary -> tertiary -> mature Graafian follicle -> ruptured follicle releasing egg (Day 14) -> corpus luteum -> regressing corpus luteum.',
      'Draw Estrogen peak right before Day 14 and Progesterone high dome during Days 20-22.',
      'Draw uterine lining thin at Days 1-5, progressively thickening and vascularizing up to Day 28.'
    ],
    examinerTip: 'Never mix up the order of hormonal peaks: Estrogen peaks JUST BEFORE ovulation, LH peaks AT ovulation (Day 14), and Progesterone peaks AFTER ovulation (Days 20–22).'
  },

  'antibody-molecule': {
    title: 'Structure of an Antibody Molecule (H₂L₂ Monomer)',
    ncertFig: 'NCERT Fig 7.4 / Fig 8.4 • Page 135 / Page 151',
    badge: 'CBSE Repeated 2M/3M Question',
    marks: '2–3 Marks',
    imageSrc: '/images/ncert/antibody-molecule.png',
    caption: 'Official NCERT Diagram: Structure of an antibody molecule illustrating two heavy chains, two light chains, disulfide bridges, and bivalent antigen-binding sites.',
    keyLabels: [
      { name: '1. Two Heavy Chains (H)', tag: 'Long Chains', desc: 'Two identical longer polypeptide chains (~440 amino acids each, high molecular weight).' },
      { name: '2. Two Light Chains (L)', tag: 'Short Chains', desc: 'Two identical shorter polypeptide chains (~220 amino acids each, low molecular weight).' },
      { name: '3. Antigen Binding Sites', tag: 'Paratope', desc: 'Located at N-terminal variable domains (VH + VL) at the tip of each Y-arm; binds specific epitope.' },
      { name: '4. Disulfide Bonds (-S-S-)', tag: 'Crosslinks', desc: 'Interchain and intrachain covalent bonds linking heavy-to-heavy and heavy-to-light chains.' },
      { name: '5. Constant Region (Fc Stem)', tag: 'C-Terminus', desc: 'Constant domains at C-terminal end that mediate effector functions and binding to immune cells.' }
    ],
    drawingSteps: [
      'Draw a central vertical stem with two parallel heavy chains joined together by disulfide bonds (-S-S-).',
      'Branch each heavy chain outward to form a Y-shaped fork.',
      'Draw a shorter parallel light chain along the outer upper branch of each arm.',
      'Add disulfide (-S-S-) bridges between heavy and light chains and between the two heavy chains.',
      'Label N-terminals at top tips (Antigen-binding sites) and C-terminals at bottom base.'
    ],
    examinerTip: 'Formula is H₂L₂. Always indicate the antigen binding site at the N-terminal tips and show disulfide bonds clearly with letter "S-S".'
  },

  'lac-operon': {
    title: 'The lac Operon Regulation: Repressed vs Induced States',
    ncertFig: 'NCERT Fig 5.14 / Fig 6.14 • Page 101 / Page 117',
    badge: 'CBSE Guaranteed 3M/5M Question',
    marks: '3–5 Marks',
    imageSrc: '/images/ncert/lac-operon.png',
    caption: 'Official NCERT Diagram: Gene arrangement of lac operon (p, i, p, o, z, y, a) showing repression in absence of inducer and transcriptional induction in presence of lactose.',
    keyLabels: [
      { name: '1. Regulator Gene (i)', tag: 'Inhibitor', desc: 'Transcribes repressor mRNA constitutively; codes for repressor protein.' },
      { name: '2. Promoter (p) & Operator (o)', tag: 'Regulatory DNA', desc: 'RNA polymerase binds at promoter; operator acts as the on/off switch where repressor binds.' },
      { name: '3. Structural Gene z', tag: 'β-Galactosidase', desc: 'Hydrolyzes lactose into glucose and galactose.' },
      { name: '4. Structural Gene y', tag: 'Permease', desc: 'Increases cell membrane permeability of E. coli to β-galactosides (lactose).' },
      { name: '5. Structural Gene a', tag: 'Transacetylase', desc: 'Transfers acetyl group from acetyl-CoA to β-galactosides.' },
      { name: '6. In Absence of Inducer', tag: 'OFF State', desc: 'Active repressor binds operator (o) -> blocks RNA polymerase -> no transcription.' },
      { name: '7. In Presence of Inducer (Lactose)', tag: 'ON State', desc: 'Lactose binds repressor -> inactive repressor cannot bind operator -> RNA polymerase transcribes z, y, a.' }
    ],
    drawingSteps: [
      'Draw two horizontal DNA strips divided into segments: [p] - [i] - [p] - [o] - [z] - [y] - [a].',
      'Top strip (In absence of inducer): Show i gene -> repressor mRNA -> active repressor protein binding to [o] operator, with blocking arrow preventing RNA polymerase.',
      'Bottom strip (In presence of inducer): Show inducer (lactose) binding to repressor -> inactive repressor. Show lac mRNA transcribed from z, y, a and translated into β-galactosidase, permease, transacetylase.'
    ],
    examinerTip: 'CBSE frequently asks for the specific functions of z, y, and a genes. Make sure to specify that regulation of lac operon is negative regulation (repressor controlled).'
  },

  'miller-urey': {
    title: "Miller-Urey Spark Discharge Experiment Apparatus",
    ncertFig: 'NCERT Fig 6.1 / Fig 7.1 • Page 117 / Page 128',
    badge: 'High-Yield 3M Diagram',
    marks: '3 Marks',
    imageSrc: '/images/ncert/miller-urey.png',
    caption: "Official NCERT Diagram: Spark discharge glass apparatus used by Stanley Miller (1953) to demonstrate abiotic synthesis of organic compounds (amino acids) in primitive atmosphere.",
    keyLabels: [
      { name: '1. Spark Discharge Chamber', tag: 'Lightning Simulation', desc: 'Large closed glass flask containing tungsten electrodes generating 75,000 V electric sparks at 800°C.' },
      { name: '2. Gas Mixture (Reducing)', tag: 'CH₄, NH₃, H₂O, H₂', desc: 'Methane (CH₄), Ammonia (NH₃), and Hydrogen (H₂) in 2:1:2 ratio with water vapor; strictly NO O₂.' },
      { name: '3. Boiling Water Flask', tag: 'Steam Supply', desc: 'Simulates primitive oceans; provides continuous water vapor circulation.' },
      { name: '4. Condenser & Trap', tag: 'Cooling / Collection', desc: 'Condenses circulating steam into liquid; trap collects red fluid containing amino acids (glycine, alanine, aspartic acid).' },
      { name: '5. Vacuum Pump Connection', tag: 'Anaerobic State', desc: 'Evacuates air to ensure strictly anaerobic/reducing environment.' }
    ],
    drawingSteps: [
      'Draw the closed circuit glass tubing with a large spherical spark flask at top and smaller boiling flask at bottom.',
      'Inside spark chamber, draw two opposing tungsten electrodes with spark lines and label gases: CH₄, NH₃, H₂O, H₂.',
      'Draw condenser jacket with "Water in" and "Water out" on the downward pipe.',
      'Draw U-tube trap at the bottom with valve to collect synthesized organic compounds.'
    ],
    examinerTip: 'Always mention temperature (800°C), absence of oxygen, and specific amino acids formed (glycine, alanine, aspartic acid).'
  },

  'hardy-weinberg-selection': {
    title: 'Operation of Natural Selection on Different Traits',
    ncertFig: 'NCERT Fig 6.8 / Fig 7.8 • Page 121 / Page 136',
    badge: 'CBSE Repeated 3M Question',
    marks: '3 Marks',
    imageSrc: '/images/ncert/hardy-weinberg-selection.png',
    caption: 'Official NCERT Diagram: Graphical curves depicting three modes of natural selection on phenotypic distribution: (a) Stabilising, (b) Directional, and (c) Disruptive.',
    keyLabels: [
      { name: '1. Stabilising Selection', tag: 'Mean Favored', desc: 'Favors average phenotypes; extreme variations eliminated; curve becomes higher and narrower (e.g., human infant birth weight ~3kg).' },
      { name: '2. Directional Selection', tag: 'One Extreme Favored', desc: 'Favors one phenotypic extreme over average and other extreme; peak shifts in one direction (e.g., industrial melanism in Biston betularia, antibiotic resistance).' },
      { name: '3. Disruptive Selection', tag: 'Both Extremes Favored', desc: 'Favors individuals at both extremes of distribution; intermediate phenotype selected against; curve splits into two distinct peaks.' },
      { name: '4. Axes', tag: 'Variables', desc: 'X-axis: Phenotypes favored by natural selection; Y-axis: Number of individuals with phenotype.' }
    ],
    drawingSteps: [
      'Draw the baseline bell-shaped normal distribution curve on the left with central arrow.',
      'For (a) Stabilising: Draw a taller, narrower bell curve with peak centered at the mean.',
      'For (b) Directional: Draw a bell curve shifted horizontally to the right.',
      'For (c) Disruptive: Draw a bimodal curve with two distinct peaks and a trough in the middle.'
    ],
    examinerTip: 'Label the axes clearly. Stabilising = peak narrower; Directional = peak shifts; Disruptive = two peaks form.'
  },

  'hiv-lifecycle': {
    title: 'Replication of Retrovirus (HIV Lifecycle in Host Cell)',
    ncertFig: 'NCERT Fig 7.6 / Fig 8.6 • Page 138 / Page 155',
    badge: 'CBSE Case-Based / 3M Diagram',
    marks: '3 Marks',
    imageSrc: '/images/ncert/hiv-lifecycle.png',
    caption: 'Official NCERT Diagram: Replication of retrovirus inside animal host cell (macrophage/helper T-cell) via reverse transcription and genomic integration.',
    keyLabels: [
      { name: '1. Retrovirus Structure', tag: 'Viral RNA + Coat', desc: 'Spherical virion with viral RNA core and reverse transcriptase enzyme surrounded by protein coat.' },
      { name: '2. Viral Entry & Uncoating', tag: 'Infection', desc: 'Virus infects normal cell; viral protein coat remains outside while viral RNA is introduced into cytoplasm.' },
      { name: '3. Reverse Transcription', tag: 'RNA -> DNA', desc: 'Viral RNA is transcribed into complementary viral DNA by viral reverse transcriptase enzyme.' },
      { name: '4. Genomic Integration', tag: 'Host Incorporation', desc: 'Viral DNA enters nucleus and incorporates into host genome DNA.' },
      { name: '5. Viral Assembly & Budding', tag: 'New Virions', desc: 'Host cell transcribes new viral RNA and proteins; new virions bud off to infect other helper T-cells (TH).' }
    ],
    drawingSteps: [
      'Draw the outer circle representing retrovirus (RNA core + protein coat).',
      'Draw large animal cell with outer plasma membrane and inner nucleus with host DNA.',
      'Trace step arrows: Viral RNA -> Reverse transcriptase -> Viral DNA -> Enters nucleus -> Integrates with host DNA.',
      'Show new viral RNA produced -> translated into proteins -> assembly into progeny viruses that bud out.'
    ],
    examinerTip: 'Note the crucial NCERT caption: "Infected cell can survive while viruses are being replicated and released." Macrophages act as HIV factories.'
  },

  'pollen-grain': {
    title: 'Microsporogenesis & Mature Pollen Grain Structure',
    ncertFig: 'NCERT Fig 1.4 & 1.5 / Fig 2.4 & 2.5 • Page 7 / Page 23',
    badge: 'CBSE 2M/3M Question',
    marks: '2–3 Marks',
    imageSrc: '/images/ncert/pollen-grain.png',
    caption: 'Official NCERT Diagram: Stages of microspore maturing into a 2-celled pollen grain illustrating vacuole development, asymmetric spindle, vegetative cell, and generative cell.',
    keyLabels: [
      { name: '1. Microspore Tetrad', tag: 'Meiotic Product', desc: 'Four haploid microspores arranged in tetrahedral or isobilateral cluster formed from PMC (2n).' },
      { name: '2. Asymmetric Spindle', tag: 'Unequal Division', desc: 'Mitotic division with asymmetric spindle apparatus leading to unequal daughter cells.' },
      { name: '3. Vegetative Cell', tag: 'Nutritive Cell', desc: 'Bigger cell with abundant food reserve and large irregularly shaped nucleus.' },
      { name: '4. Generative Cell', tag: 'Gametic Cell', desc: 'Small spindle-shaped cell with dense cytoplasm and nucleus; floats in vegetative cell cytoplasm; divides into 2 male gametes.' },
      { name: '5. Exine & Germ Pore', tag: 'Outer Wall', desc: 'Sporopollenin-rich sculptured outer wall; germ pore is aperture where sporopollenin is absent.' },
      { name: '6. Intine', tag: 'Inner Wall', desc: 'Thin continuous inner wall made of cellulose and pectin.' }
    ],
    drawingSteps: [
      'Draw microspore with central nucleus and developing vacuoles.',
      'Draw asymmetric spindle with chromosomes aligned off-center.',
      'Draw 2-celled mature pollen grain: large upper vegetative cell with irregular nucleus and smaller lens-shaped generative cell floating at the bottom.',
      'Add sculptured outer exine with 1-3 circular germ pores and continuous smooth inner intine.'
    ],
    examinerTip: 'In over 60% angiosperms, pollen is shed at 2-celled stage (vegetative + generative). In remaining 40%, generative cell divides into two male gametes before shedding (3-celled stage).'
  },

  'microspore-pollen': {
    title: 'Microspore Maturation & Pollen Grain Cellular Formation',
    ncertFig: 'NCERT Fig 1.5 / Fig 2.5 • Page 7 / Page 23',
    badge: 'CBSE 2M Question',
    marks: '2 Marks',
    imageSrc: '/images/ncert/microspore-pollen.png',
    caption: 'Official NCERT Diagram: Cellular development from single microspore to functional 2-celled male gametophyte.',
    keyLabels: [
      { name: '1. Single Microspore with Nucleus', tag: 'Initial', desc: 'Haploid cell with dense cytoplasm and central nucleus.' },
      { name: '2. Vacuolation Phase', tag: 'Asymmetry', desc: 'Appearance of large vacuoles pushing nucleus to peripheral position.' },
      { name: '3. Asymmetric Mitotic Spindle', tag: 'Division', desc: 'Spindle fibers orient unequally to generate two unequal cells.' },
      { name: '4. 2-Celled Pollen Grain', tag: 'Mature', desc: 'Large vegetative cell + small floating generative cell.' }
    ],
    drawingSteps: [
      'Draw 4 circular stages left-to-right showing microspore -> vacuolated cell -> asymmetric spindle -> 2-celled pollen.'
    ],
    examinerTip: 'State clearly that the generative cell floats in the cytoplasm of the vegetative cell.'
  },

  'transcription-unit': {
    title: 'Schematic Structure of a Transcription Unit',
    ncertFig: 'NCERT Fig 5.9 / Fig 6.9 • Page 87 / Page 108',
    badge: 'CBSE Repeated 2M/3M Question',
    marks: '2–3 Marks',
    imageSrc: '/images/ncert/transcription-unit.png',
    caption: 'Official NCERT Diagram: Basic components of transcription unit showing promoter, structural gene, terminator, template strand (3’→5’), and coding strand (5’→3’).',
    keyLabels: [
      { name: '1. Promoter', tag: 'Upstream 5’', desc: 'Located towards 5’-end of coding strand; provides RNA polymerase binding site.' },
      { name: '2. Transcription Start Site', tag: 'Initiation', desc: 'Point adjacent to promoter where RNA synthesis begins.' },
      { name: '3. Structural Gene', tag: 'Coding Region', desc: 'Segment of DNA bounded by promoter and terminator that is transcribed into RNA.' },
      { name: '4. Terminator', tag: 'Downstream 3’', desc: 'Located towards 3’-end of coding strand; terminates transcription process.' },
      { name: '5. Template Strand (3’ → 5’)', tag: 'Transcribed', desc: 'Strand with 3’→5’ polarity used by RNA polymerase as template.' },
      { name: '6. Coding Strand (5’ → 3’)', tag: 'Reference Strand', desc: 'Strand with 5’→3’ polarity; identical in sequence to synthesized RNA (except T instead of U); all promoter/terminator positions are defined relative to it.' }
    ],
    drawingSteps: [
      'Draw two parallel lines representing double-stranded DNA with polarities: top line 3’ to 5’ (Template), bottom line 5’ to 3’ (Coding).',
      'Draw a box on left labeled "Promoter" with a transcription start arrow pointing right.',
      'Label middle region as "Structural gene".',
      'Draw a box on right labeled "Terminator".'
    ],
    examinerTip: 'Key rule: All reference points (upstream/downstream) in a transcription unit are defined WITH RESPECT TO THE CODING STRAND (5’ to 3’).'
  },

  'transcription-prokaryotes': {
    title: 'Process of Transcription in Bacteria (Prokaryotes)',
    ncertFig: 'NCERT Fig 5.10 / Fig 6.10 • Page 89 / Page 109',
    badge: 'CBSE High-Yield 3M Diagram',
    marks: '3 Marks',
    imageSrc: '/images/ncert/transcription-prokaryotes.png',
    caption: 'Official NCERT Diagram: Three stages of prokaryotic transcription: Initiation (with σ sigma factor), Elongation (RNA polymerase alone), and Termination (with ρ rho factor).',
    keyLabels: [
      { name: '1. Initiation', tag: 'Sigma Factor (σ)', desc: 'RNA polymerase associates transiently with initiation factor (σ factor) to bind promoter and initiate transcription.' },
      { name: '2. Elongation', tag: 'Polymerisation', desc: 'Core RNA polymerase alone catalyzes RNA synthesis in 5’→3’ direction using nucleoside triphosphates.' },
      { name: '3. Termination', tag: 'Rho Factor (ρ)', desc: 'RNA polymerase associates transiently with termination factor (ρ factor); nascent RNA and enzyme dissociate.' }
    ],
    drawingSteps: [
      'Draw 3 stages vertically: Initiation, Elongation, Termination.',
      'Initiation: Show RNA polymerase bound to DNA helix promoter with oval σ (sigma factor).',
      'Elongation: Show transcription bubble with emerging single-stranded RNA chain.',
      'Termination: Show RNA polymerase dissociated at terminator with round ρ (rho factor) and released mRNA.'
    ],
    examinerTip: 'Core RNA polymerase can only elongate; it requires σ factor for initiation and ρ factor for termination.'
  },

  'replicating-fork': {
    title: 'Replicating Fork: Continuous & Discontinuous Synthesis',
    ncertFig: 'NCERT Fig 5.8 / Fig 6.8 • Page 93 / Page 107',
    badge: 'CBSE High-Yield 3M/4M Question',
    marks: '3–4 Marks',
    imageSrc: '/images/ncert/replicating-fork.png',
    caption: 'Official NCERT Diagram: Y-shaped replicating fork showing continuous synthesis on 3’→5’ template and discontinuous Okazaki synthesis on 5’→3’ template.',
    keyLabels: [
      { name: '1. Parental Template Strands', tag: '3’→5’ & 5’→3’', desc: 'Unwound parental DNA strands separated by DNA helicase.' },
      { name: '2. Continuous Synthesis (Leading Strand)', tag: '3’→5’ Template', desc: 'Synthesized continuously in 5’→3’ direction towards the opening replication fork.' },
      { name: '3. Discontinuous Synthesis (Lagging Strand)', tag: '5’→3’ Template', desc: 'Synthesized discontinuously as short Okazaki fragments in 5’→3’ direction away from the fork.' },
      { name: '4. DNA Ligase', tag: 'Enzyme', desc: 'Seals the nicks between Okazaki fragments by forming phosphodiester bonds.' }
    ],
    drawingSteps: [
      'Draw an inverted Y-shape representing the unwound replication fork.',
      'Label parental template polarities: left arm 3’ at top to 5’ at fork; right arm 5’ at top to 3’ at fork.',
      'On left arm, draw a continuous bold arrow pointing down towards fork (5’ to 3’ continuous).',
      'On right arm, draw short dashed/arrow segments pointing away from fork (5’ to 3’ discontinuous Okazaki fragments).'
    ],
    examinerTip: 'DNA polymerase catalyzes polymerisation strictly in 5’→3’ direction. That is why one strand is continuous and the opposite strand is discontinuous.'
  },

  'homologous-analogous': {
    title: 'Homologous Organs (Divergent Evolution) in Plants and Animals',
    ncertFig: 'NCERT Fig 6.3 / Fig 7.3 • Page 115 / Page 131',
    badge: 'CBSE 2M/3M Question',
    marks: '2–3 Marks',
    imageSrc: '/images/ncert/homologous-analogous.png',
    caption: 'Official NCERT Diagram: Examples of homologous organs showing common anatomical ancestry: Thorns & Tendrils in plants; Forelimbs in Man, Cheetah, Whale, and Bat.',
    keyLabels: [
      { name: '1. Plant Homology', tag: 'Thorn & Tendril', desc: 'Thorns of Bougainvillea (protection) and Tendrils of Cucurbita (climbing) both arise as modified axillary buds.' },
      { name: '2. Animal Homology (Forelimbs)', tag: 'Vertebrates', desc: 'Forelimbs of Man, Cheetah, Whale, and Bat share common skeletal elements (humerus, radius, ulna, carpals, metacarpals, phalanges) but perform different functions.' },
      { name: '3. Evolutionary Concept', tag: 'Divergent Evolution', desc: 'Same basic structure developed along different directions due to adaptation to different needs; indicates common ancestry.' }
    ],
    drawingSteps: [
      'Plant part: Sketch Bougainvillea stem with pointed thorn and Cucurbita stem with coiled tendril.',
      'Animal part: Sketch simple bone plans of forelimbs of human (grasping), cheetah (running), whale (swimming flipper), bat (flying wing).'
    ],
    examinerTip: 'Homologous = Same origin/anatomy, different functions (Divergent evolution). Analogous = Different origin/anatomy, same function (Convergent evolution).'
  }
};

export default function BiologyDiagramCard({ diagramId, subMode, inline = false }) {
  const [activeTab, setActiveTab] = useState('ncert'); // 'ncert' | 'labels' | 'guide'
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  // Normalize fallback diagram IDs
  const effectiveId = diagramId === 'microspore' ? 'pollen-grain' : diagramId;
  const diagram = BIOLOGY_DIAGRAMS_REGISTRY[effectiveId] || BIOLOGY_DIAGRAMS_REGISTRY['microsporangium-walls'];

  return (
    <div className="bg-[var(--bg-surface)] rounded-2xl border border-emerald-500/30 overflow-hidden shadow-sm transition-all">
      {/* 1. Header Banner */}
      <div className="p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 bg-[var(--bg-elevated)]/60 border-b border-[var(--border-subtle)]">
        <div className="flex items-center gap-2.5 flex-1 min-w-0">
          <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono font-bold text-xs shrink-0 flex items-center gap-1">
            <BookOpen size={13} />
            {diagram.ncertFig}
          </span>
          <h4 className="font-bold text-sm text-[var(--text-primary)] truncate">
            {diagram.title}
          </h4>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[11px] font-semibold text-amber-500 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20 flex items-center gap-1">
            <Award size={12} />
            {diagram.badge}
          </span>
        </div>
      </div>

      {/* 2. Mode Selector Tabs */}
      <div className="px-4 sm:px-5 pt-3 flex items-center gap-2 border-b border-[var(--border-subtle)] bg-[var(--bg-elevated)]/20 overflow-x-auto scrollbar-none">
        <button
          onClick={() => setActiveTab('ncert')}
          className={`pb-2.5 px-3 text-xs font-bold transition-all border-b-2 flex items-center gap-1.5 cursor-pointer shrink-0 ${
            activeTab === 'ncert'
              ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
              : 'border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)]'
          }`}
        >
          <Eye size={13} />
          <span>Official NCERT Cutout</span>
        </button>

        <button
          onClick={() => setActiveTab('labels')}
          className={`pb-2.5 px-3 text-xs font-bold transition-all border-b-2 flex items-center gap-1.5 cursor-pointer shrink-0 ${
            activeTab === 'labels'
              ? 'border-blue-500 text-blue-600 dark:text-blue-400'
              : 'border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)]'
          }`}
        >
          <Layers size={13} />
          <span>CBSE Marking Labels ({diagram.keyLabels.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('guide')}
          className={`pb-2.5 px-3 text-xs font-bold transition-all border-b-2 flex items-center gap-1.5 cursor-pointer shrink-0 ${
            activeTab === 'guide'
              ? 'border-purple-500 text-purple-600 dark:text-purple-400'
              : 'border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)]'
          }`}
        >
          <PenTool size={13} />
          <span>3-Min Board Drawing Steps</span>
        </button>
      </div>

      {/* 3. Tab Body */}
      <div className="p-4 sm:p-5">
        {/* TAB 1: OFFICIAL NCERT TEXTBOOK IMAGE CUTOUT */}
        {activeTab === 'ncert' && (
          <div className="space-y-4">
            <div className="relative group bg-white rounded-xl border border-[var(--border-subtle)] p-3 sm:p-5 flex flex-col items-center justify-center overflow-hidden shadow-2xs">
              <img
                src={diagram.imageSrc}
                alt={diagram.title}
                className="max-h-[340px] sm:max-h-[400px] w-auto object-contain mx-auto transition-transform duration-200 group-hover:scale-[1.01]"
                loading="lazy"
              />

              {/* Enlarge Button Overlay */}
              <button
                onClick={() => setIsZoomOpen(true)}
                className="absolute top-3 right-3 p-2 rounded-lg bg-neutral-900/80 text-white hover:bg-neutral-900 transition-colors cursor-pointer shadow-md flex items-center gap-1 text-xs font-semibold backdrop-blur-xs"
                title="Click to view full-resolution image"
              >
                <ZoomIn size={14} />
                <span className="hidden sm:inline">Enlarge</span>
              </button>
            </div>

            {/* Caption & NCERT Verification Note */}
            <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20 flex items-start gap-2.5 text-xs text-[var(--text-secondary)]">
              <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-semibold text-[var(--text-primary)]">
                  {diagram.caption}
                </p>
                <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
                  Authentic NCERT Textbook Illustration. In CBSE Board Examinations, labeling questions and anatomical evaluation are graded directly against this textbook figure.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: KEY LABELS & MARKING CRITERIA */}
        {activeTab === 'labels' && (
          <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {diagram.keyLabels.map((lbl, idx) => (
                <div 
                  key={idx}
                  className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1"
                >
                  <div className="flex items-center justify-between gap-1.5">
                    <span className="font-bold text-xs text-[var(--text-primary)]">
                      {lbl.name}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono text-[10px] font-bold">
                      {lbl.tag}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {lbl.desc}
                  </p>
                </div>
              ))}
            </div>

            {diagram.examinerTip && (
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25 space-y-1 text-xs">
                <span className="font-bold uppercase tracking-wider text-amber-500 flex items-center gap-1.5 text-[11px]">
                  <Sparkles size={13} />
                  CBSE Evaluator Marking Note:
                </span>
                <p className="text-[var(--text-primary)] leading-relaxed">
                  {diagram.examinerTip}
                </p>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: STEP-BY-STEP DRAWING INSTRUCTIONS */}
        {activeTab === 'guide' && (
          <div className="space-y-3.5">
            <div className="p-3.5 rounded-xl bg-purple-500/5 border border-purple-500/20 space-y-2.5">
              <div className="flex items-center gap-2">
                <PenTool size={14} className="text-purple-400" />
                <span className="font-bold text-xs uppercase tracking-wider text-purple-400">
                  How to Draw in CBSE Exam (3-Minute Protocol):
                </span>
              </div>
              <ol className="space-y-2 text-xs text-[var(--text-primary)] leading-relaxed list-decimal pl-4">
                {diagram.drawingSteps.map((step, idx) => (
                  <li key={idx} className="pl-1">
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-muted)] flex items-start gap-2">
              <Info size={14} className="text-blue-400 shrink-0 mt-0.5" />
              <span>
                Always use an HB pencil for the diagram outline and draw clean, horizontal, uncrossed label leader lines on the right-hand margin.
              </span>
            </div>
          </div>
        )}
      </div>

      {/* 4. Fullscreen Zoom Modal */}
      {isZoomOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-2xl p-4 sm:p-6 shadow-2xl flex flex-col items-center">
            <div className="w-full flex items-center justify-between pb-3 border-b border-neutral-200">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold font-mono">
                  {diagram.ncertFig}
                </span>
                <h3 className="font-bold text-sm text-neutral-900 truncate">
                  {diagram.title}
                </h3>
              </div>
              <button
                onClick={() => setIsZoomOpen(false)}
                className="p-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors cursor-pointer"
                title="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="w-full py-4 flex items-center justify-center overflow-auto max-h-[80vh]">
              <img
                src={diagram.imageSrc}
                alt={diagram.title}
                className="max-h-[75vh] w-auto object-contain rounded-lg"
              />
            </div>

            <div className="w-full pt-3 border-t border-neutral-200 text-center text-xs text-neutral-600">
              {diagram.caption}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
