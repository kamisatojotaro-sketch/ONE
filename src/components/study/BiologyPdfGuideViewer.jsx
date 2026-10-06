import { useState } from 'react';
import { 
  BookOpen, FileText, Layers, CheckCircle2, Award, 
  ExternalLink, ChevronDown, ChevronUp, Copy, Check, Sparkles,
  Zap, Dna, Eye
} from 'lucide-react';
import BiologyDiagramCard from './BiologyDiagramCard';

export default function BiologyPdfGuideViewer({ onSelectQuestion, onBackToQuestions }) {
  const [activePage, setActivePage] = useState('all'); // 'all' | 'p1' | 'p2' | 'p3-5' | 'p6-8'
  const [openDiagrams, setOpenDiagrams] = useState({});

  const toggleDiagram = (key) => {
    setOpenDiagrams(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-amber-500/15 via-[var(--bg-surface)] to-emerald-500/15 border border-amber-500/30 space-y-3 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase tracking-wide">
              <FileText size={13} />
              <span>Reference Document • 8-Page Master Guide</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)]">
              Class 12 Biology: Essential Revision Guide
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
              Direct digital revision notes matching your uploaded guide: Evolution, Reproductive Health, Big Orange Core Questions, and Page-Referenced Diagrams.
            </p>
          </div>

          {onBackToQuestions && (
            <button
              onClick={onBackToQuestions}
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-[var(--bg-elevated)] hover:bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-subtle)] shadow-xs transition-all cursor-pointer flex items-center gap-1.5"
            >
              <BookOpen size={14} className="text-amber-500" />
              <span>Switch to Question Cards (71 Qs)</span>
            </button>
          )}
        </div>

        {/* Page Selector Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-[var(--border-subtle)]">
          {[
            { id: 'all', label: 'All 8 Pages Combined' },
            { id: 'p1', label: 'Page 1: Evolution' },
            { id: 'p2', label: 'Page 2: Reproductive Health' },
            { id: 'p3-5', label: 'Pages 3–5: Big Orange Core' },
            { id: 'p6-8', label: 'Pages 6–8: Page-Referenced & Diagrams' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActivePage(tab.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activePage === tab.id
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ====================================================================
       * PAGE 1: EVOLUTION: FULL CHAPTER SHORT NOTES
       * ==================================================================== */}
      {(activePage === 'all' || activePage === 'p1') && (
        <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] space-y-5 shadow-xs">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-6 bg-amber-500 rounded-full" />
              <h3 className="text-base sm:text-lg font-extrabold text-[var(--text-primary)]">
                Evolution: Full Chapter Short Notes <span className="text-xs font-normal text-[var(--text-muted)]">(Page 1)</span>
              </h3>
            </div>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-500">
              Ch 6 • High Yield
            </span>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            {/* 1. Origin of Life */}
            <div className="p-4 rounded-xl bg-[var(--bg-elevated)] space-y-2 border border-[var(--border-subtle)]">
              <div className="flex items-center justify-between">
                <strong className="text-sm font-bold text-[var(--text-primary)]">
                  1. Origin of Life
                </strong>
                <button
                  onClick={() => toggleDiagram('miller-urey-p1')}
                  className="px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400 hover:bg-amber-500/25 transition-all cursor-pointer flex items-center gap-1"
                >
                  <Layers size={12} />
                  <span>{openDiagrams['miller-urey-p1'] ? 'Hide Miller-Urey Diagram' : 'View Miller-Urey Diagram'}</span>
                </button>
              </div>
              <p>
                Life appeared approximately <strong className="text-[var(--text-primary)]">500 million years</strong> after the Earth was formed. The <strong className="text-[var(--text-primary)]">Oparin-Haldane theory</strong> proposed that first life came from pre-existing non-living organic molecules (chemical evolution). This was experimentally proved by <strong className="text-[var(--text-primary)]">S.L. Miller and H.C. Urey (1953)</strong>, who created conditions of early Earth (high temp of <strong className="text-amber-500">800°C</strong>, volcanic storms, reducing atmosphere with $CH_4$, $NH_3$, $H_2$, and water vapor) and observed the formation of simple <strong className="text-[var(--text-primary)]">amino acids</strong> (glycine, alanine, aspartic acid).
              </p>
              {openDiagrams['miller-urey-p1'] && (
                <div className="pt-2">
                  <BiologyDiagramCard diagramId="miller-urey" />
                </div>
              )}
            </div>

            {/* 2. Evidences for Evolution */}
            <div className="p-4 rounded-xl bg-[var(--bg-elevated)] space-y-2.5 border border-[var(--border-subtle)]">
              <div className="flex items-center justify-between">
                <strong className="text-sm font-bold text-[var(--text-primary)]">
                  2. Evidences for Evolution
                </strong>
                <button
                  onClick={() => toggleDiagram('homologous-p1')}
                  className="px-2.5 py-1 rounded-lg text-xs font-bold bg-teal-500/15 text-teal-600 dark:text-teal-400 hover:bg-teal-500/25 transition-all cursor-pointer flex items-center gap-1"
                >
                  <Layers size={12} />
                  <span>{openDiagrams['homologous-p1'] ? 'Hide Comparison Card' : 'View Homologous/Analogous Card'}</span>
                </button>
              </div>
              <ul className="space-y-2 pl-2">
                <li>
                  • <strong className="text-[var(--text-primary)]">Paleontological Evidence:</strong> Fossils found in sedimentary rocks show that life forms changed over time and certain life forms are restricted to certain geological time spans.
                </li>
                <li>
                  • <strong className="text-[var(--text-primary)]">Homologous Organs:</strong> Same structure, different functions (e.g., forelimbs of whales, bats, cheetahs, and humans sharing humerus, radius, ulna). Indicates <strong className="text-blue-500">Divergent Evolution</strong> and common ancestry.
                </li>
                <li>
                  • <strong className="text-[var(--text-primary)]">Analogous Organs:</strong> Different structures, same function (e.g., wings of butterflies and birds; sweet potato and potato). Indicates <strong className="text-amber-500">Convergent Evolution</strong> (similar habitats forcing similar adaptations).
                </li>
              </ul>
              {openDiagrams['homologous-p1'] && (
                <div className="pt-2">
                  <BiologyDiagramCard diagramId="homologous-analogous" />
                </div>
              )}
            </div>

            {/* 3. Adaptive Radiation */}
            <div className="p-4 rounded-xl bg-[var(--bg-elevated)] space-y-1.5 border border-[var(--border-subtle)]">
              <strong className="text-sm font-bold text-[var(--text-primary)]">
                3. Adaptive Radiation
              </strong>
              <p>
                The process of evolution of different species in a given geographical area starting from a point and radiating to other geographical areas (habitats).
              </p>
              <div className="p-2.5 rounded-lg bg-[var(--bg-surface)] text-xs">
                <strong>Examples:</strong> Darwin's Finches in the Galapagos Islands (diversified beaks from seed-eating ancestor) and Australian Marsupials radiating within the isolated continent.
              </div>
            </div>

            {/* 4. Biological Evolution Theories */}
            <div className="p-4 rounded-xl bg-[var(--bg-elevated)] space-y-2 border border-[var(--border-subtle)]">
              <strong className="text-sm font-bold text-[var(--text-primary)]">
                4. Biological Evolution Theories
              </strong>
              <ul className="space-y-1.5 pl-2">
                <li>
                  • <strong className="text-[var(--text-primary)]">Lamarckism:</strong> Evolution driven by the use and disuse of organs (e.g., elongation of giraffe's neck to reach foliage).
                </li>
                <li>
                  • <strong className="text-[var(--text-primary)]">Darwinism:</strong> Based on two key concepts: <strong className="text-emerald-500">Branching descent</strong> and <strong className="text-emerald-500">Natural Selection</strong>. Nature selects the fittest organisms that survive and reproduce more offspring.
                </li>
                <li>
                  • <strong className="text-[var(--text-primary)]">Mutation Theory (Hugo de Vries):</strong> Evolution is driven by mutations (large, random, directionless changes), not minor continuous variations. He termed single-step large mutations <strong className="text-rose-500">"Saltation"</strong>.
                </li>
              </ul>
            </div>

            {/* 5. Hardy-Weinberg Principle */}
            <div className="p-4 rounded-xl bg-[var(--bg-elevated)] space-y-2 border border-[var(--border-subtle)]">
              <div className="flex items-center justify-between">
                <strong className="text-sm font-bold text-[var(--text-primary)]">
                  5. Hardy-Weinberg Principle
                </strong>
                <button
                  onClick={() => toggleDiagram('hw-p1')}
                  className="px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/25 transition-all cursor-pointer flex items-center gap-1"
                >
                  <Layers size={12} />
                  <span>{openDiagrams['hw-p1'] ? 'Hide Selection Curves' : 'View Selection Curves'}</span>
                </button>
              </div>
              <p>
                States that allele frequencies in a population are stable and remain constant from generation to generation (Genetic Equilibrium) if undisturbed.
              </p>
              <div className="p-2.5 rounded-lg bg-[var(--bg-surface)] font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                Binomial Equation: p² + 2pq + q² = 1
              </div>
              <p>
                <strong className="text-[var(--text-primary)]">Five factors affecting it:</strong> (1) Gene migration / gene flow, (2) Genetic drift (Founder effect), (3) Mutation, (4) Genetic recombination, and (5) Natural selection (Stabilizing, Directional, Disruptive).
              </p>
              {openDiagrams['hw-p1'] && (
                <div className="pt-2">
                  <BiologyDiagramCard diagramId="hardy-weinberg-selection" />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
       * PAGE 2: REPRODUCTIVE HEALTH: FULL CHAPTER SHORT NOTES
       * ==================================================================== */}
      {(activePage === 'all' || activePage === 'p2') && (
        <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] space-y-5 shadow-xs">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-6 bg-rose-500 rounded-full" />
              <h3 className="text-base sm:text-lg font-extrabold text-[var(--text-primary)]">
                Reproductive Health: Full Chapter Short Notes <span className="text-xs font-normal text-[var(--text-muted)]">(Page 2)</span>
              </h3>
            </div>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-rose-500/10 text-rose-500">
              Ch 3 • High Yield
            </span>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            {/* 1. Definition */}
            <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
              <strong className="text-[var(--text-primary)] block">1. WHO Definition of Reproductive Health:</strong>
              <p>
                According to WHO, reproductive health means total well-being in all aspects of reproduction, i.e., <strong className="text-[var(--text-primary)]">physical, emotional, behavioral, and social</strong>.
              </p>
            </div>

            {/* 2. Population Explosion & Birth Control Table */}
            <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-3">
              <strong className="text-[var(--text-primary)] block">2. Population Explosion &amp; Birth Control Methods Table:</strong>
              <p className="text-xs text-[var(--text-muted)]">
                A good contraceptive should be user-friendly, easily available, effective, and have minimal side effects.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-[var(--border-subtle)] text-[var(--text-muted)]">
                      <th className="py-2 pr-4 font-bold w-24">Method</th>
                      <th className="py-2 font-bold">Mechanism / Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border-subtle)]/60 text-[var(--text-secondary)]">
                    <tr>
                      <td className="py-2.5 pr-4 font-bold text-[var(--text-primary)]">Natural</td>
                      <td className="py-2.5">Periodic abstinence (avoiding sex from day 10–17 of cycle), Withdrawal (coitus interruptus), Lactational amenorrhea (absence of menstruation during intense lactation up to 6 months).</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 font-bold text-[var(--text-primary)]">Barrier</td>
                      <td className="py-2.5">Condoms, diaphragms, cervical caps. They physically prevent sperm and ovum from meeting. <strong className="text-emerald-500">Condoms also protect against STIs</strong>.</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 font-bold text-[var(--text-primary)]">IUDs</td>
                      <td className="py-2.5">Intra Uterine Devices (e.g., Copper-T, Hormone-releasing IUDs like LNG-20). They increase phagocytosis of sperms; copper ions suppress sperm motility and fertilising capacity.</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 font-bold text-[var(--text-primary)]">Oral Pills</td>
                      <td className="py-2.5">Contain progestogens or progestogen-estrogen combinations. Inhibit ovulation and implantation. <strong className="text-rose-500">Saheli</strong> is a non-steroidal weekly pill developed by CDRI Lucknow.</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 font-bold text-[var(--text-primary)]">Surgical</td>
                      <td className="py-2.5">Terminal sterilization to block gamete transport: <strong className="text-[var(--text-primary)]">Vasectomy</strong> (in males, cutting vas deferens), <strong className="text-[var(--text-primary)]">Tubectomy</strong> (in females, cutting fallopian tubes).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3, 4, 5 Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
                <strong className="text-sm font-bold text-[var(--text-primary)] block">3. MTP:</strong>
                <p className="text-xs">
                  Intentional or voluntary termination of pregnancy before full term. Relatively safe up to <strong className="text-amber-500">first trimester (12 weeks)</strong>.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
                <strong className="text-sm font-bold text-[var(--text-primary)] block">4. STIs:</strong>
                <p className="text-xs">
                  Diseases transmitted through sexual contact (HIV, Syphilis, Gonorrhea). Prevented by using condoms, avoiding multiple partners.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
                <strong className="text-sm font-bold text-[var(--text-primary)] block">5. Amniocentesis:</strong>
                <p className="text-xs">
                  A fetal sex and chromosomal disorder diagnostic test using amniotic fluid. <strong className="text-red-500">Legally banned</strong> to prevent female foeticide.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
       * PAGES 3-5: CATEGORY: BIG ORANGE - IMPORTANT QUESTIONS
       * ==================================================================== */}
      {(activePage === 'all' || activePage === 'p3-5') && (
        <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border border-amber-500/30 space-y-5 shadow-xs">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-6 bg-amber-500 rounded-full" />
              <h3 className="text-base sm:text-lg font-extrabold text-[var(--text-primary)]">
                Category: Big Orange - Important Questions <span className="text-xs font-normal text-[var(--text-muted)]">(Pages 3–5)</span>
              </h3>
            </div>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-500">
              High-Yield Question Bank
            </span>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            {/* Unit: Principles of Inheritance */}
            <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2">
              <strong className="text-sm font-extrabold text-amber-500 block uppercase tracking-wide">
                Principles of Inheritance &amp; Variation
              </strong>
              <ul className="space-y-1.5 pl-2">
                <li>• <strong className="text-[var(--text-primary)]">Mendel's Laws:</strong> Dominance (one allele masks another), Segregation (alleles separate during gamete formation without blending), Independent Assortment.</li>
                <li>• <strong className="text-[var(--text-primary)]">Deviations:</strong> Incomplete Dominance (blended phenotype, e.g. Snapdragon $1:2:1$) &amp; Co-dominance (both alleles express fully, e.g. AB blood group).</li>
                <li>• <strong className="text-[var(--text-primary)]">Honeybee Sex Determination:</strong> Haplo-diploid system. Females (queens/workers) are diploid (32) by fertilization; Males (drones) are haploid (16) via parthenogenesis.</li>
                <li>• <strong className="text-[var(--text-primary)]">Polygenic Inheritance (2–3M):</strong> Controlled by three or more genes (skin color, height). Cumulative contribution of each allele.</li>
                <li>• <strong className="text-[var(--text-primary)]">Pleiotropy (3M):</strong> Single gene exhibits multiple phenotypic expressions (e.g. Phenylketonuria affects mental development, hair, skin pigmentation).</li>
                <li>• <strong className="text-[var(--text-primary)]">Phenylketonuria (3M):</strong> Autosomal recessive inborn error of metabolism; lack of phenylalanine hydroxylase leads to accumulation of phenylpyruvate.</li>
                <li>• <strong className="text-[var(--text-primary)]">Chromosomal Disorders (3–4M):</strong> Down Syndrome (Trisomy 21), Klinefelter's (XXY, gynaecomastia, sterile), Turner's (XO, sterile female with rudimentary ovaries).</li>
                <li>• <strong className="text-[var(--text-primary)]">Linkage &amp; Recombination:</strong> Linkage is physical association on same chromosome; Recombination is generation of non-parental combinations via crossing over.</li>
              </ul>
            </div>

            {/* Unit: Molecular Basis */}
            <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2">
              <strong className="text-sm font-extrabold text-blue-500 block uppercase tracking-wide">
                Molecular Basis of Inheritance
              </strong>
              <ul className="space-y-1.5 pl-2">
                <li>• <strong className="text-[var(--text-primary)]">Transforming Principle (3M):</strong> Griffith's experiment with Streptococcus pneumoniae (S-strain vs R-strain); Avery, MacLeod, McCarty proved DNA was the transforming substance.</li>
                <li>• <strong className="text-[var(--text-primary)]">Transcription in Eukaryotes (3M):</strong> Pre-mRNA undergoes Capping (methyl guanosine triphosphate), Tailing (poly-A tail), and Splicing (introns removed, exons joined).</li>
                <li>• <strong className="text-[var(--text-primary)]">DNA Double Helix (3M):</strong> Watson-Crick B-DNA: antiparallel strands, complementary base pairing (A=T, G≡C), pitch 3.4 nm with 10 bp/turn.</li>
                <li>• <strong className="text-[var(--text-primary)]">Semiconservative Replication (3–4M):</strong> Meselson and Stahl proved parental + newly synthesized strand using heavy ¹⁵N isotopes and CsCl gradient.</li>
                <li>• <strong className="text-[var(--text-primary)]">Lac Operon (3–5M):</strong> Absence of lactose = repressor binds operator, blocks RNA Pol. Lactose (inducer) binds repressor = transcription of z (β-galactosidase), y (permease), a (transacetylase).</li>
                <li>• <strong className="text-[var(--text-primary)]">Steps in DNA Fingerprinting (3M):</strong> Isolation of DNA → Restriction digestion → Electrophoresis → Southern blotting to nylon membrane → Hybridization with VNTR probe → Autoradiography.</li>
              </ul>
            </div>

            {/* Other Units in Quick Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1.5">
                <strong className="text-xs font-bold text-emerald-500 uppercase tracking-wide block">
                  Flowering Plants &amp; Human Reproduction
                </strong>
                <ul className="space-y-1 text-xs">
                  <li>• <strong className="text-[var(--text-primary)]">Microsporangium:</strong> 4 layers (Epidermis, Endothecium, Middle, Tapetum).</li>
                  <li>• <strong className="text-[var(--text-primary)]">Pollen grains:</strong> Exine (sporopollenin) + Intine (cellulose/pectin).</li>
                  <li>• <strong className="text-[var(--text-primary)]">Filiform apparatus:</strong> Micropylar synergid thickenings guiding pollen tube.</li>
                  <li>• <strong className="text-[var(--text-primary)]">Double Fertilisation:</strong> Syngamy (zygote 2n) + Triple Fusion (PEN 3n).</li>
                  <li>• <strong className="text-[var(--text-primary)]">Menstrual Cycle:</strong> Day 14 LH surge triggers ovulation; corpus luteum secretes progesterone.</li>
                  <li>• <strong className="text-[var(--text-primary)]">Spermatogenesis vs Oogenesis:</strong> 4 motile sperms vs 1 ovum + polar bodies.</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1.5">
                <strong className="text-xs font-bold text-purple-400 uppercase tracking-wide block">
                  Health, Microbes &amp; Biotechnology
                </strong>
                <ul className="space-y-1 text-xs">
                  <li>• <strong className="text-[var(--text-primary)]">Innate Immunity:</strong> Physical, physiological, cellular, cytokine (interferons).</li>
                  <li>• <strong className="text-[var(--text-primary)]">Antibody Molecule:</strong> Y-shaped H₂L₂ with disulfide bonds.</li>
                  <li>• <strong className="text-[var(--text-primary)]">Cancer Cells:</strong> Loss of contact inhibition, metastasis.</li>
                  <li>• <strong className="text-[var(--text-primary)]">Sewage Treatment:</strong> Aerobic flocs reduce BOD; anaerobic digester produces biogas.</li>
                  <li>• <strong className="text-[var(--text-primary)]">Biotech:</strong> Restriction enzymes cut palindromes; Gene therapy for ADA deficiency.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
       * PAGES 6-8: SEPARATE SECTION: [06/10/26, 10:13:50 AM] BIG ORANGE
       * ==================================================================== */}
      {(activePage === 'all' || activePage === 'p6-8') && (
        <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border border-sky-500/30 space-y-5 shadow-xs">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-6 bg-sky-500 rounded-full" />
              <h3 className="text-base sm:text-lg font-extrabold text-[var(--text-primary)]">
                Separate Section: [06/10/26, 10:13:50 AM] Big Orange <span className="text-xs font-normal text-[var(--text-muted)]">(Pages 6–8)</span>
              </h3>
            </div>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-sky-500/10 text-sky-400">
              NCERT Page References &amp; Diagrams
            </span>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            {/* Core Diagram Trigger Boxes as requested in the PDF */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Diagram 1: Embryo Sac */}
              <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border-2 border-dashed border-emerald-500/40 text-center space-y-1.5">
                <span className="text-xs font-bold text-emerald-500 block">Embryo Sac (Pg-10)</span>
                <p className="text-[11px] text-[var(--text-muted)]">7-celled, 8-nucleate structure</p>
                <button
                  onClick={() => toggleDiagram('embryo-sac-p6')}
                  className="w-full py-1 rounded-lg text-xs font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/25 transition-all cursor-pointer"
                >
                  {openDiagrams['embryo-sac-p6'] ? 'Hide Diagram' : 'View Pg-10 Diagram'}
                </button>
              </div>

              {/* Diagram 2: Pollen Grain Structure */}
              <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border-2 border-dashed border-amber-500/40 text-center space-y-1.5">
                <span className="text-xs font-bold text-amber-500 block">Microspore / Pollen (Pg-7)</span>
                <p className="text-[11px] text-[var(--text-muted)]">Exine, Intine, 2-celled stage</p>
                <button
                  onClick={() => toggleDiagram('pollen-grain-p6')}
                  className="w-full py-1 rounded-lg text-xs font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400 hover:bg-amber-500/25 transition-all cursor-pointer"
                >
                  {openDiagrams['pollen-grain-p6'] ? 'Hide Diagram' : 'View Pg-7 Diagram'}
                </button>
              </div>

              {/* Diagram 3: Placenta and Embryo */}
              <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border-2 border-dashed border-rose-500/40 text-center space-y-1.5">
                <span className="text-xs font-bold text-rose-500 block">Placenta &amp; Fetus (Pg-37)</span>
                <p className="text-[11px] text-[var(--text-muted)]">Human Fetus inside Uterus</p>
                <button
                  onClick={() => toggleDiagram('placenta-fetus-p6')}
                  className="w-full py-1 rounded-lg text-xs font-bold bg-rose-500/15 text-rose-600 dark:text-rose-400 hover:bg-rose-500/25 transition-all cursor-pointer"
                >
                  {openDiagrams['placenta-fetus-p6'] ? 'Hide Diagram' : 'View Pg-37 Diagram'}
                </button>
              </div>

              {/* Diagram 4: Transcription Unit & Replication Fork */}
              <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border-2 border-dashed border-sky-500/40 text-center space-y-1.5">
                <span className="text-xs font-bold text-sky-400 block">Transcription &amp; Fork</span>
                <p className="text-[11px] text-[var(--text-muted)]">NCERT Pg-91 &amp; Pg-88</p>
                <button
                  onClick={() => toggleDiagram('transcription-fork-p6')}
                  className="w-full py-1 rounded-lg text-xs font-bold bg-sky-500/15 text-sky-400 hover:bg-sky-500/25 transition-all cursor-pointer"
                >
                  {openDiagrams['transcription-fork-p6'] ? 'Hide Diagram' : 'View Molecular Schematics'}
                </button>
              </div>
            </div>

            {/* Inline Opened Diagrams */}
            {openDiagrams['embryo-sac-p6'] && (
              <div className="pt-2">
                <BiologyDiagramCard diagramId="embryo-sac" />
              </div>
            )}

            {openDiagrams['pollen-grain-p6'] && (
              <div className="pt-2">
                <BiologyDiagramCard diagramId="pollen-grain" />
              </div>
            )}

            {openDiagrams['placenta-fetus-p6'] && (
              <div className="pt-2">
                <BiologyDiagramCard diagramId="placenta-fetus" />
              </div>
            )}

            {openDiagrams['transcription-fork-p6'] && (
              <div className="space-y-4 pt-2">
                <BiologyDiagramCard diagramId="transcription-unit" />
                <BiologyDiagramCard diagramId="replicating-fork" />
              </div>
            )}

            {/* List of Definitions & Key Items verbatim from PDF Pages 6-8 */}
            <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2.5">
              <strong className="text-sm font-bold text-[var(--text-primary)] block">
                Verbatim Definitions &amp; High-Yield Board Points:
              </strong>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div>• <strong className="text-[var(--text-primary)]">Megasporangium:</strong> Also known as the Ovule, where the embryo sac develops.</div>
                <div>• <strong className="text-[var(--text-primary)]">Triple Fusion:</strong> Fusion of second male gamete with two polar nuclei to form triploid Primary Endosperm Nucleus (PEN).</div>
                <div>• <strong className="text-[var(--text-primary)]">Perisperm:</strong> Residual, persistent nucellus in seed (e.g. black pepper, beet).</div>
                <div>• <strong className="text-[var(--text-primary)]">4 Wall Layers:</strong> Epidermis, Endothecium (hygroscopic dehiscence), Middle layers, Tapetum (nourishes pollen).</div>
                <div>• <strong className="text-[var(--text-primary)]">Apocarpous vs Syncarpous:</strong> Apocarpous: Carpels are free (lotus, rose). Syncarpous: Carpels are fused together (Papaver, Hibiscus).</div>
                <div>• <strong className="text-[var(--text-primary)]">Blastocyst (2M):</strong> Outer Trophoblast (attaches to endometrium) + Inner Cell Mass (embryo proper). Implantation: attachment to uterine wall.</div>
                <div>• <strong className="text-[var(--text-primary)]">Parthenocarpic fruits:</strong> Fruits developing without fertilization (e.g. banana); seedless.</div>
                <div>• <strong className="text-[var(--text-primary)]">Coleoptile vs Coleorhiza (Pg-19):</strong> Coleoptile protects plumule/shoot apex; Coleorhiza protects radicle/root cap.</div>
                <div>• <strong className="text-[var(--text-primary)]">Amniocentesis (Pg-42):</strong> Karyotyping test using amniotic fluid; banned to prevent female foeticide.</div>
                <div>• <strong className="text-[var(--text-primary)]">MTP (Pg-46 Yellow Box):</strong> Safe up to 12 weeks with 1 RMP; up to 24 weeks with 2 RMPs for vulnerable cases.</div>
                <div>• <strong className="text-[var(--text-primary)]">ART (Pg-48):</strong> ZIFT (zygote ≤8 blastomeres into tube) vs GIFT (ovum into fallopian tube).</div>
                <div>• <strong className="text-[var(--text-primary)]">Monohybrid vs Dihybrid (Pg-57):</strong> Monohybrid ratio 3:1 (1:2:1); Dihybrid ratio 9:3:3:1.</div>
                <div>• <strong className="text-[var(--text-primary)]">Complete vs Incomplete:</strong> Complete masks recessive; Incomplete expresses blend (pink Antirrhinum).</div>
                <div>• <strong className="text-[var(--text-primary)]">Bird vs Honey Bee:</strong> Birds have ZZ male and ZW female (female heterogamety). Bees have haplodiploidy (female 32, male 16).</div>
                <div>• <strong className="text-[var(--text-primary)]">Aneuploidy vs Polyploidy:</strong> Aneuploidy: failure of chromatid segregation (2n±1). Polyploidy: failure of cytokinesis (3n, 4n).</div>
                <div>• <strong className="text-[var(--text-primary)]">S-strain (Pg-48):</strong> Smooth virulent strain with mucous coat in Griffith's experiment.</div>
                <div>• <strong className="text-[var(--text-primary)]">Allergies (Pg-136, 3M):</strong> IgE mediated, mast cells release histamine/serotonin. Antihistamines &amp; steroids treatment.</div>
                <div>• <strong className="text-[var(--text-primary)]">HIV / Cancer:</strong> HIV depletes Helper T-cells, ARV drugs prolong life; Cancer cells lose contact inhibition, show metastasis (Pg-141).</div>
                <div>• <strong className="text-[var(--text-primary)]">Biocontrol Agents:</strong> Bacillus thuringiensis (Bt) controls caterpillars; Baculoviruses (Nucleopolyhedrovirus) for narrow-spectrum IPM.</div>
              </div>
            </div>

            {/* Tabulation of Drugs Table from PDF Page 8 */}
            <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2.5">
              <strong className="text-sm font-bold text-[var(--text-primary)] block">
                Tabulation of Drugs (Verbatim PDF Page 8 Table):
              </strong>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-[var(--border-subtle)] text-[var(--text-muted)]">
                      <th className="py-2 pr-4 font-bold">Drug Type</th>
                      <th className="py-2 pr-4 font-bold">Source Plant</th>
                      <th className="py-2 font-bold">Effect / Receptors</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border-subtle)]/60 text-[var(--text-secondary)]">
                    <tr>
                      <td className="py-2 pr-4 font-bold text-rose-500">Opioids (Heroin)</td>
                      <td className="py-2 pr-4">Poppy plant (<em>Papaver somniferum</em>)</td>
                      <td className="py-2">Binds to receptors in CNS &amp; GI tract. Depressant, slows body functions.</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-bold text-emerald-500">Cannabinoids</td>
                      <td className="py-2 pr-4">Hemp plant (<em>Cannabis sativa</em>)</td>
                      <td className="py-2">Affects cardiovascular system. Examples: Marijuana, Hashish, Ganja.</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-bold text-amber-500">Cocaine</td>
                      <td className="py-2 pr-4">Coca plant (<em>Erythroxylum coca</em>)</td>
                      <td className="py-2">Interferes with dopamine transport. Strong stimulant, causes euphoria and hallucinations.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
