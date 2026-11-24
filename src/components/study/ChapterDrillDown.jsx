import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Circle, ChevronDown, Check, PenLine, Sparkles, BookOpen, AlertCircle, HelpCircle, BookMarked, ChevronUp, Target, Calculator, Zap, Brain, AlertTriangle, Compass, ArrowRight, Printer, FileDown, Layers } from 'lucide-react';
import { getSubjectSyllabus } from '../../data/ncertSyllabus';
import { STRUCTURED_NOTES_DATA } from '../../data/structuredNotesData';
import FormulaCard, { formatMathString } from './FormulaCard';
import { FormattedLatex } from './LatexView';
import SubtopicPracticePanel from './SubtopicPracticePanel';
import ReactionDiagramCard from './ReactionDiagramCard';
import PhysicsDiagramCard from './PhysicsDiagramCard';
import StructuredSectionView from './StructuredSectionView';
import PriorityBadge from './PriorityBadge';
import Physics4PartSectionView from './Physics4PartSectionView';
import CustomSelect from '../shared/CustomSelect';
import { getDerivationsByChapter, getDerivationsBySubtopic } from '../../data/physicsDerivationsReference';
import { getPhysicsSectionEnrichment } from '../../data/physicsSectionEnrichments';
import { getBiologyImportantQuestionsByChapter } from '../../data/biologyImportantQuestionsData';
import BiologyExamDiagramCard from './BiologyExamDiagramCard';
import { getSectionTopicIds, isTopicCompleted } from '../../utils/studyTopicTicks';

const PHYSICS_SUBTOPIC_DIAGRAMS = {
  // Chapter 1: Electric Charges and Fields
  'phy-sub-1-3': 'point-charge-field',
  'phy-sub-1-4': 'point-charge-field',
  'phy-sub-1-5': 'dipole-fields',
  'phy-sub-1-6': 'dipole-fields',
  'phy-sub-1-7': 'dipole-fields',
  'phy-sub-1-8': 'electric-flux-dipole',
  'phy-sub-1-9': 'gauss-applications',
  'phy-sub-1-10': 'gauss-applications',
  'phy-sub-1-11': 'gauss-applications',

  // Chapter 2: Electrostatic Potential and Capacitance
  'phy-sub-2-2': 'point-charge-field',
  'phy-sub-2-3': 'equipotential-surfaces',
  'phy-sub-2-4': 'dipole-fields',
  'phy-sub-2-7': 'capacitor-circuits',
  'phy-sub-2-8': 'energy-storage',

  // Chapter 3: Current Electricity
  'phy-sub-3-6': 'wheatstone-bridge',
  'phy-sub-3-7': 'cell-circuit',
  'phy-sub-3-8': 'cell-circuit',
  'phy-sub-3-9': 'wheatstone-bridge',

  // Chapter 4: Moving Charges and Magnetism
  'phy-sub-4-3': 'force-conductor',
  'phy-sub-4-7': 'force-conductor',
  'phy-sub-4-8': 'parallel-wires',
  'phy-sub-4-9': 'galvanometer-torque',
  'phy-sub-4-10': 'galvanometer-conversion',

  // Chapter 5: Magnetism and Matter
  'phy-sub-5-1': 'magnetic-materials',
  'phy-sub-5-2': 'magnetic-materials',
  'phy-sub-5-3': 'magnetic-materials',

  // Chapter 6: Electromagnetic Induction
  'phy-sub-6-1': 'faraday-lenz',
  'phy-sub-6-2': 'faraday-lenz',
  'phy-sub-6-3': 'faraday-lenz',
  'phy-sub-6-9': 'energy-storage',

  // Chapter 7: Alternating Current
  'phy-sub-7-2': 'ac-rms-waveform',
  'phy-sub-7-3': 'ac-rms-waveform',
  'phy-sub-7-4': 'lcr-circuit',
  'phy-sub-7-5': 'transformer',
  'phy-sub-7-6': 'lcr-circuit',
  'phy-sub-7-7': 'transformer',
  'phy-sub-7-8': 'ac-rms-waveform',

  // Chapter 8: Electromagnetic Waves
  'phy-sub-8-1': 'em-wave-structure',
  'phy-sub-8-2': 'em-wave-structure',
  'phy-sub-8-3': 'displacement-current',
  'phy-sub-8-4': 'em-wave-structure',

  // Chapter 9: Ray Optics and Optical Instruments
  'phy-sub-9-1': 'ray-optics-instruments',
  'phy-sub-9-2': 'prism-dispersion',
  'phy-sub-9-3': 'ray-optics-instruments',
  'phy-sub-9-4': 'prism-dispersion',
  'phy-sub-9-5': 'ray-optics-instruments',

  // Chapter 10: Wave Optics
  'phy-sub-10-1': 'huygens-wavefronts',
  'phy-sub-10-2': 'huygens-wavefronts',
  'phy-sub-10-3': 'ydse-wave-optics',
  'phy-sub-10-4': 'ydse-wave-optics',
  'phy-sub-10-5': 'single-slit-diffraction',

  // Chapter 11: Dual Nature of Radiation and Matter
  'phy-sub-11-1': 'photoelectric-graphs',
  'phy-sub-11-2': 'photoelectric-graphs',
  'phy-sub-11-3': 'photoelectric-graphs',
  'phy-sub-11-4': 'photoelectric-graphs',

  // Chapter 12: Atoms
  'phy-sub-12-1': 'bohr-atom-spectra',
  'phy-sub-12-2': 'bohr-atom-spectra',
  'phy-sub-12-3': 'bohr-atom-spectra',
  'phy-sub-12-4': 'bohr-atom-spectra',

  // Chapter 13: Nuclei
  'phy-sub-13-1': 'nuclei-binding-force',
  'phy-sub-13-2': 'nuclei-binding-force',
  'phy-sub-13-3': 'nuclei-binding-force',
  'phy-sub-13-4': 'nuclei-binding-force',

  // Chapter 14: Semiconductor Electronics
  'phy-sub-14-1': 'pn-junction-rectifier',
  'phy-sub-14-2': 'pn-junction-rectifier',
  'phy-sub-14-3': 'pn-junction-rectifier',
  'phy-sub-14-4': 'pn-junction-rectifier'
};

const PHYSICS_SUBTOPIC_SUBMODES = {
  // Chapter 9: Ray Optics and Optical Instruments
  'phy-sub-9-1': 'mirror',
  'phy-sub-9-2': 'tir',
  'phy-sub-9-3': 'lens-maker',
  'phy-sub-9-4': 'prism-ray',
  'phy-sub-9-5': 'microscope',

  // Chapter 10: Wave Optics
  'phy-sub-10-1': 'wavefronts',
  'phy-sub-10-2': 'denser',
  'phy-sub-10-3': 'interference-intensity',
  'phy-sub-10-4': 'ydse-geometry',
  'phy-sub-10-5': 'diffraction-lobe',

  // Chapter 11: Dual Nature of Radiation and Matter
  'phy-sub-11-1': 'experimental-setup',
  'phy-sub-11-2': 'einstein-slope',
  'phy-sub-11-3': 'collector-potential',
  'phy-sub-11-4': 'de-broglie',

  // Chapter 12: Atoms
  'phy-sub-12-1': 'alpha-scattering',
  'phy-sub-12-2': 'bohr-orbits',
  'phy-sub-12-3': 'spectral-series',
  'phy-sub-12-4': 'bohr-orbits',

  // Chapter 13: Nuclei
  'phy-sub-13-1': 'nuclear-force',
  'phy-sub-13-2': 'be-curve',
  'phy-sub-13-3': 'nuclear-force',
  'phy-sub-13-4': 'fission-fusion',

  // Chapter 14: Semiconductor Electronics
  'phy-sub-14-1': 'energy-bands',
  'phy-sub-14-2': 'depletion-layer',
  'phy-sub-14-3': 'vi-characteristics',
  'phy-sub-14-4': 'rectifiers'
};

export default function ChapterDrillDown({
  selectedSubject,
  selectedVolume,
  selectedChapter,
  selectedSubchapter,
  chapterStudyMode = 'GENERAL',
  onSetChapterStudyMode,
  onBackToChapters,
  onSelectSubchapter,
  completedSections,
  completedSubchapters,
  onToggleSection,
  onToggleTopic,
  onToggleTopicGroup,
  onMarkSubchapterCompleted,
  userNotes,
  onSaveUserNote,
  activeSubchapterStats,
  getPriority,
  onSetPriority,
  onResetPriority,
  onOpenWolframEngine,
  isCleanMode = false,
  autoPrintChapterId = null,
  onClearAutoPrintChapter,
  autoOpenCustomPdfModal = false,
  onClearAutoOpenCustomPdfModal
}) {
  const subject = getSubjectSyllabus(selectedSubject, isCleanMode);
  const [activeNoteEdit, setActiveNoteEdit] = useState(null);
  const [localNoteText, setLocalNoteText] = useState('');
  const [expandedReferences, setExpandedReferences] = useState({});
  const [openPracticeSections, setOpenPracticeSections] = useState({});
  const [minimizedSections, setMinimizedSections] = useState({});
  const [isPrintingFullChapter, setIsPrintingFullChapter] = useState(false);
  const [isCustomPdfModalOpen, setIsCustomPdfModalOpen] = useState(false);
  const [customPdfScope, setCustomPdfScope] = useState('CHAPTER'); // 'CHAPTER' | 'SUBJECT'
  const [selectedPdfSubtopicIds, setSelectedPdfSubtopicIds] = useState([]);
  const [selectedPdfChapterIds, setSelectedPdfChapterIds] = useState([]);
  const [isPrintingCustomPdf, setIsPrintingCustomPdf] = useState(false);
  const subtopicPrintRef = useRef(null);
  const fullChapterPrintRef = useRef(null);
  const customPdfPrintRef = useRef(null);

  if (!subject) return null;

  // Cross-volume lookup: find chapter across all volumes of this subject
  let chapter = null;
  let resolvedVolume = null;

  for (const vol of subject.volumes) {
    const found = vol.chapters.find((c) => c.id === selectedChapter);
    if (found) {
      chapter = found;
      resolvedVolume = vol;
      break;
    }
  }

  // Fallback to first available chapter if not found
  if (!chapter) {
    resolvedVolume = subject.volumes.find((v) => v.id === selectedVolume) || subject.volumes[0];
    chapter = resolvedVolume?.chapters?.[0];
  }

  if (!chapter) {
    return (
      <div className="p-8 text-center bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-2xl space-y-3">
        <p className="font-serif text-lg font-bold text-[var(--text-primary)]">Chapter not found</p>
        <button onClick={onBackToChapters} className="px-4 py-2 rounded-xl bg-[var(--accent-primary)] text-white text-xs cursor-pointer">
          Return to Chapter List
        </button>
      </div>
    );
  }

  // If chapter has no available content yet
  if (!chapter.available || !chapter.subchapters || chapter.subchapters.length === 0) {
    return (
      <div className="bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-2xl p-10 text-center space-y-4">
        <button
          onClick={onBackToChapters}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--accent-primary)] hover:underline mb-2"
        >
          <ArrowLeft size={14} /> Back to Chapters
        </button>
        <div className="w-14 h-14 mx-auto rounded-full bg-[var(--bg-elevated)] border border-[var(--border-default)] flex items-center justify-center text-[var(--text-muted)]">
          <AlertCircle size={28} />
        </div>
        <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)]">
          Content Not Available For Now
        </h3>
        <p className="font-sans text-sm text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed">
          {isCleanMode ? (
            <>Clean textbook notes for <strong>{chapter.title}</strong> will be added soon.</>
          ) : (
            <>The comprehensive high-yield notes for <strong>{chapter.title}</strong> will be added in upcoming study modules. Currently, complete exam portions are active for Physics and Chemistry Volume 1.</>
          )}
        </p>
      </div>
    );
  }

  const currentSubchapter = chapter.subchapters.find((s) => s.id === selectedSubchapter) || chapter.subchapters[0];
  const isSubCompleted = completedSubchapters.includes(currentSubchapter?.id);

  const handleStartEditNote = (sectionId, existingText) => {
    setActiveNoteEdit(sectionId);
    setLocalNoteText(existingText || '');
  };

  const handleSaveNote = (sectionId) => {
    onSaveUserNote(sectionId, localNoteText);
    setActiveNoteEdit(null);
  };

  const toggleReference = (sectionId) => {
    setExpandedReferences((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const togglePracticeSection = (sectionId) => {
    setOpenPracticeSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Shared PDF Printout builder for both Single Subtopic PDF and Complete Chapter PDF
  const printDomNodeAsPdf = (
    sourceNode,
    { docTitle, headerSubtitle, headerMainTitle, subtopicList = null }
  ) => {
    if (!sourceNode) {
      window.print();
      return;
    }

    const clonedNode = sourceNode.cloneNode(true);

    // 1. Remove interactive-only UI controls (checkbox circles, add/edit note buttons, closed practice toggles)
    clonedNode.querySelectorAll('[data-no-print="true"]').forEach((el) => el.remove());

    // 2. Reveal any collapsed textbook reference or print-expanded sections so nothing is omitted
    clonedNode.querySelectorAll('[data-print-expand="true"]').forEach((el) => {
      el.classList.remove('hidden');
      el.style.display = 'block';
    });

    // 3. Remove line-clamp truncation so full personal notes and titles print completely
    clonedNode.querySelectorAll('.line-clamp-2, .truncate').forEach((el) => {
      el.classList.remove('line-clamp-2', 'truncate');
      el.style.whiteSpace = 'normal';
      el.style.overflow = 'visible';
    });

    // 4. Collect all loaded stylesheets (<style> and <link rel="stylesheet">) from main document
    const headStylesHtml = Array.from(
      document.querySelectorAll('style, link[rel="stylesheet"], link[href*="fonts.googleapis.com"]')
    )
      .map((node) => node.outerHTML)
      .join('\n');

    const versionBadge = isCleanMode ? 'D Version • Exam-Focused Clean Notes' : 'Complete NCERT Study Notes';
    const volumeLabel = resolvedVolume?.title || `${subject.name} Syllabus`;
    const subtopicsTocHtml =
      Array.isArray(subtopicList) && subtopicList.length > 0
        ? `<div class="print-chapter-toc">
            <div class="print-chapter-toc-label">Included Subtopics (${subtopicList.length}):</div>
            <div class="print-chapter-toc-pills">
              ${subtopicList
                .map((st, idx) => `<span class="print-chapter-toc-pill">${idx + 1}. ${st}</span>`)
                .join('')}
            </div>
          </div>`
        : '';

    const printHtml = `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8" />
  <title>${docTitle}</title>
  ${headStylesHtml}
  <style>
    :root, html, body, [data-theme="dark"], [data-theme="light"], .dark {
      --bg-base: #ffffff !important;
      --bg-surface: #f8faf9 !important;
      --bg-elevated: #f1f5f3 !important;
      --text-primary: #0f172a !important;
      --text-secondary: #334155 !important;
      --text-muted: #64748b !important;
      --accent-primary: #166534 !important;
      --accent-primary-hover: #14532d !important;
      --text-accent: #166534 !important;
      --border-default: #cbd5e1 !important;
      --border-subtle: #e2e8f0 !important;
      background-color: #ffffff !important;
      color: #0f172a !important;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    @page {
      size: A4 portrait;
      margin: 12mm;
    }
    body {
      margin: 0;
      padding: 0;
      background: #ffffff !important;
      color: #0f172a !important;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
    }
    .print-sheet-wrapper {
      max-width: 100%;
      margin: 0 auto;
      padding: 4px 0 16px 0;
    }
    .print-header-banner {
      border: 1.5px solid #cbd5e1;
      border-left: 5px solid #166534;
      background: #f8faf9;
      border-radius: 14px;
      padding: 14px 18px;
      margin-bottom: 18px;
    }
    .print-header-meta {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #166534;
      margin-bottom: 6px;
    }
    .print-header-chapter {
      font-size: 12px;
      font-weight: 600;
      color: #475569;
      margin-bottom: 2px;
    }
    .print-header-subtopic {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 20px;
      font-weight: 700;
      color: #0f172a;
      margin: 0;
      line-height: 1.25;
    }
    .print-chapter-toc {
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px solid #cbd5e1;
    }
    .print-chapter-toc-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      color: #475569;
      margin-bottom: 6px;
    }
    .print-chapter-toc-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    .print-chapter-toc-pill {
      font-size: 11px;
      font-weight: 600;
      color: #166534;
      background: #ffffff;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      padding: 3px 8px;
    }
    .print-subtopic-divider {
      border: 1.5px solid #cbd5e1;
      border-left: 4px solid #166534;
      background: #f1f5f3;
      border-radius: 12px;
      padding: 10px 14px;
      margin: 18px 0 12px 0;
    }
    /* Ensure horizontal scroll containers & SVGs fit cleanly on A4 paper without clipping */
    .overflow-x-auto {
      overflow: visible !important;
    }
    svg {
      max-width: 100% !important;
      height: auto !important;
    }
    table {
      width: 100% !important;
      border-collapse: collapse !important;
    }
    tr, svg, .katex-render {
      break-inside: avoid;
      page-break-inside: avoid;
    }
  </style>
</head>
<body>
  <div class="print-sheet-wrapper">
    <div class="print-header-banner">
      <div class="print-header-meta">
        <span>${subject.name} (${subject.code || 'NCERT Class 12'}) • ${volumeLabel}</span>
        <span>${versionBadge}</span>
      </div>
      <div class="print-header-chapter">${headerSubtitle}</div>
      <h1 class="print-header-subtopic">${headerMainTitle}</h1>
      ${subtopicsTocHtml}
    </div>
    ${clonedNode.innerHTML}
  </div>
</body>
</html>`;

    // Remove any previous print iframe
    const existingIframe = document.getElementById('one-subtopic-print-iframe');
    if (existingIframe) existingIframe.remove();

    const iframe = document.createElement('iframe');
    iframe.id = 'one-subtopic-print-iframe';
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    iframe.style.opacity = '0';
    iframe.style.pointerEvents = 'none';
    document.body.appendChild(iframe);

    const iframeDoc = iframe.contentWindow?.document || iframe.contentDocument;
    if (!iframeDoc) {
      window.print();
      return;
    }

    iframeDoc.open();
    iframeDoc.write(printHtml);
    iframeDoc.close();

    const previousTitle = document.title;
    document.title = docTitle;

    const triggerPrint = () => {
      try {
        iframe.contentWindow?.focus();
        iframe.contentWindow?.print();
      } catch {
        window.print();
      } finally {
        setTimeout(() => {
          document.title = previousTitle;
        }, 1200);
      }
    };

    // Wait briefly for external stylesheet / font rules in iframe to settle
    setTimeout(triggerPrint, 450);
  };

  // Print / Save Complete Subtopic as PDF
  const handlePrintSubtopicPdf = () => {
    printDomNodeAsPdf(subtopicPrintRef.current, {
      docTitle: `${subject.name} — Ch ${chapter.number}: ${chapter.title} — ${currentSubchapter.title}`,
      headerSubtitle: `Chapter ${chapter.number}: ${chapter.title}`,
      headerMainTitle: currentSubchapter.title,
      subtopicList: null
    });
  };

  // Print / Save Complete Chapter (All Subtopics) as PDF
  const handlePrintChapterPdf = () => {
    setIsPrintingFullChapter(true);
  };

  useEffect(() => {
    if (!isPrintingFullChapter) return;
    const timer = setTimeout(() => {
      if (fullChapterPrintRef.current) {
        printDomNodeAsPdf(fullChapterPrintRef.current, {
          docTitle: `${subject.name} — Chapter ${chapter.number}: ${chapter.title} (Complete Chapter PDF)`,
          headerSubtitle: `Complete Chapter Handout • ${chapter.subchapters.length} Subtopics`,
          headerMainTitle: `Chapter ${chapter.number}: ${chapter.title}`,
          subtopicList: chapter.subchapters.map((s) => s.title)
        });
      }
      setIsPrintingFullChapter(false);
    }, 220);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPrintingFullChapter]);

  useEffect(() => {
    if (autoPrintChapterId && chapter && autoPrintChapterId === chapter.id) {
      setIsPrintingFullChapter(true);
      onClearAutoPrintChapter?.();
    }
  }, [autoPrintChapterId, chapter, onClearAutoPrintChapter]);

  // All available chapters across this subject (for Subject-wide Custom PDF Selection)
  const allSubjectChapters = subject.volumes.flatMap((v) =>
    (v.chapters || []).filter((c) => c.available && c.subchapters && c.subchapters.length > 0)
  );

  const handleOpenCustomPdfSelector = (initialScope = 'CHAPTER') => {
    setCustomPdfScope(initialScope);
    if (chapter?.subchapters) {
      setSelectedPdfSubtopicIds(chapter.subchapters.map((s) => s.id));
    }
    setSelectedPdfChapterIds([chapter.id]);
    setIsCustomPdfModalOpen(true);
  };

  useEffect(() => {
    if (autoOpenCustomPdfModal && chapter) {
      handleOpenCustomPdfSelector('SUBJECT');
      onClearAutoOpenCustomPdfModal?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoOpenCustomPdfModal, chapter]);

  const togglePdfSubtopicSelection = (subId) => {
    setSelectedPdfSubtopicIds((prev) =>
      prev.includes(subId) ? prev.filter((id) => id !== subId) : [...prev, subId]
    );
  };

  const togglePdfChapterSelection = (chId) => {
    setSelectedPdfChapterIds((prev) =>
      prev.includes(chId) ? prev.filter((id) => id !== chId) : [...prev, chId]
    );
  };

  // Resolve list of { chapterObj, subObj } pairs to render in Custom PDF
  const customPdfItemsToPrint = (() => {
    if (customPdfScope === 'CHAPTER') {
      const subSet = new Set(selectedPdfSubtopicIds);
      return (chapter.subchapters || [])
        .filter((s) => subSet.has(s.id))
        .map((s) => ({ chapterObj: chapter, subObj: s }));
    }
    const chSet = new Set(selectedPdfChapterIds);
    const items = [];
    allSubjectChapters.forEach((ch) => {
      if (chSet.has(ch.id)) {
        (ch.subchapters || []).forEach((s) => {
          items.push({ chapterObj: ch, subObj: s });
        });
      }
    });
    return items;
  })();

  const handleTriggerCustomPdfDownload = () => {
    if (customPdfItemsToPrint.length === 0) return;
    setIsCustomPdfModalOpen(false);
    setIsPrintingCustomPdf(true);
  };

  useEffect(() => {
    if (!isPrintingCustomPdf) return;
    const timer = setTimeout(() => {
      if (customPdfPrintRef.current) {
        const isSubjectMode = customPdfScope === 'SUBJECT';
        const selectedChaptersList = allSubjectChapters.filter((c) => selectedPdfChapterIds.includes(c.id));
        printDomNodeAsPdf(customPdfPrintRef.current, {
          docTitle: isSubjectMode
            ? `${subject.name} — Custom Chapters PDF (${selectedChaptersList.map((c) => `Ch ${c.number}`).join(', ')})`
            : `${subject.name} — Ch ${chapter.number}: ${chapter.title} (${customPdfItemsToPrint.length} Selected Subtopics)`,
          headerSubtitle: isSubjectMode
            ? `Custom Subject Handout • ${selectedChaptersList.length} Chapter(s) • ${customPdfItemsToPrint.length} Subtopics`
            : `Custom Chapter Handout • ${customPdfItemsToPrint.length} of ${chapter.subchapters.length} Subtopics`,
          headerMainTitle: isSubjectMode
            ? `${subject.name}: Selected Chapters (${selectedChaptersList.map((c) => `Ch ${c.number}`).join(', ')})`
            : `Chapter ${chapter.number}: ${chapter.title} (Selected Subtopics)`,
          subtopicList: customPdfItemsToPrint.map((item) =>
            isSubjectMode ? `Ch ${item.chapterObj.number} • ${item.subObj.title}` : item.subObj.title
          )
        });
      }
      setIsPrintingCustomPdf(false);
    }, 260);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPrintingCustomPdf]);

  // Derivation counters and chapter-level derivations bank
  const getSubtopicDerivationCount = (sub) => {
    if (!sub) return 0;
    if (selectedSubject === 'physics') {
      return Math.max(
        getDerivationsBySubtopic(sub.id).length,
        getPhysicsSectionEnrichment(sub.id)?.derivations?.length || 0,
        sub.sections?.filter((s) => Boolean(s.derivations)).length || 0
      );
    }
    return sub.sections?.filter((s) => Boolean(s.derivations)).length || 0;
  };

  const chapterDerivations = selectedSubject === 'physics' ? getDerivationsByChapter(chapter.id) : [];
  const chapterSectionDerivations = chapter.subchapters.flatMap((sub) =>
    (sub.sections || [])
      .filter((sec) => Boolean(sec.derivations))
      .map((sec) => ({
        id: sec.id,
        subtopicId: sub.id,
        subtopicTitle: sub.title,
        title: sec.title,
        derivationText: sec.derivations
      }))
  );
  const totalChapterDerivationsCount =
    selectedSubject === 'physics' ? chapterDerivations.length : chapterSectionDerivations.length;
  const currentSubDrvCount = getSubtopicDerivationCount(currentSubchapter);

  const chapterImportantQuestions =
    selectedSubject === 'biology' ? getBiologyImportantQuestionsByChapter(chapter.id) : [];
  const totalChapterImportantQuestionsCount = chapterImportantQuestions.length;

  const renderChapterImportantQuestionsSection = () => {
    if (totalChapterImportantQuestionsCount === 0) return null;
    // Find the dedicated important questions subchapter for this chapter if present
    const impSub = chapter.subchapters.find((s) => s.title.includes('Important & Repeated Past Board Questions'));
    const impSec = impSub?.sections?.[0];

    return (
      <section
        id="chapter-important-questions-section"
        className="space-y-5 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-[var(--bg-surface)] border-2 border-amber-500/40 shadow-sm"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-4">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/35">
              ★ PAST BOARD PAPERS &amp; YOUR CROSSED TEXTBOOK NOTES
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
              Important &amp; Repeated Past Board Questions — Ch {chapter.number}: {chapter.title}
            </h3>
            <p className="text-xs text-[var(--text-secondary)] font-sans">
              Dedicated chapter section containing all repeated CBSE Past Board Questions (2015–2025) and your crossed/handwritten reference notes in point-wise format.
            </p>
          </div>
          <span className="self-start sm:self-auto shrink-0 px-3 py-1.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/35 text-xs font-mono font-bold">
            {totalChapterImportantQuestionsCount} Repeated Question{totalChapterImportantQuestionsCount === 1 ? '' : 's'}
          </span>
        </div>

        {impSec ? (
          <StructuredSectionView
            section={impSec}
            subtopicId={impSub.id}
            chapterId={chapter.id}
            subjectId={selectedSubject}
            isCleanMode={isCleanMode}
            completedSections={completedSections}
            onToggleTopic={onToggleTopic}
            onToggleTopicGroup={onToggleTopicGroup}
            allSectionTopicIds={getSectionTopicIds(impSec, impSub.id, chapter.id, selectedSubject, isCleanMode)}
          />
        ) : null}
      </section>
    );
  };

  const renderChapterDerivationsSection = () => {
    if (totalChapterDerivationsCount === 0) {
      return (
        <div className="p-8 text-center rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] space-y-2">
          <Compass size={28} className="mx-auto text-[var(--text-muted)]" />
          <h4 className="font-serif text-lg font-bold text-[var(--text-primary)]">
            No Mathematical Derivations Listed in {chapter.title}
          </h4>
          <p className="text-xs text-[var(--text-secondary)]">
            This chapter focuses on qualitative concepts, laws, or descriptive theory.
          </p>
        </div>
      );
    }

    const items = selectedSubject === 'physics' ? chapterDerivations : chapterSectionDerivations;

    return (
      <section
        id="chapter-derivations-section"
        className="space-y-5 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-[var(--bg-surface)] border-2 border-emerald-500/35 shadow-sm"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-4">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/35">
              📐 CHAPTER DERIVATIONS BANK
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
              All Derivations of Ch {chapter.number}: {chapter.title}
            </h3>
            <p className="text-xs text-[var(--text-secondary)] font-sans">
              Dedicated chapter reference containing every step-by-step mathematical proof, diagram, and final formula in this chapter.
            </p>
          </div>
          <span className="self-start sm:self-auto shrink-0 px-3 py-1.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/35 text-xs font-mono font-bold">
            {totalChapterDerivationsCount} Complete Derivation{totalChapterDerivationsCount === 1 ? '' : 's'}
          </span>
        </div>

        {/* Quick-Jump Index Pills */}
        <div className="flex flex-wrap gap-2">
          {items.map((drv, idx) => (
            <a
              key={drv.id}
              href={`#chapter-drv-${drv.id}`}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-emerald-500/50 text-[11px] font-sans font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">#{idx + 1}</span>
              <span className="truncate max-w-[240px]">{drv.title}</span>
            </a>
          ))}
        </div>

        {/* Derivation Cards */}
        <div className="space-y-5">
          {selectedSubject === 'physics'
            ? chapterDerivations.map((drv, idx) => {
                const subtopicObj = chapter.subchapters.find((s) => s.id === drv.subtopicId);
                const resolvedDiagId = drv.diagramId || PHYSICS_SUBTOPIC_DIAGRAMS[drv.subtopicId];
                const resolvedSubMode = drv.diagramSubMode || drv.subMode || PHYSICS_SUBTOPIC_SUBMODES[drv.subtopicId];
                return (
                  <div
                    key={drv.id}
                    id={`chapter-drv-${drv.id}`}
                    className="p-4 sm:p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)] space-y-4 shadow-xs scroll-mt-24"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-[var(--border-subtle)] pb-3">
                      <div className="space-y-1.5 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/40 text-[10px] font-mono font-bold uppercase tracking-wider">
                            📐 DERIVATION {idx + 1}
                          </span>
                          {subtopicObj && (
                            <span className="px-2 py-0.5 rounded-full bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] text-[10px] font-mono font-semibold">
                              {subtopicObj.title}
                            </span>
                          )}
                          {!isCleanMode && drv.importance && (
                            <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/25 text-[10px] font-mono font-bold">
                              {drv.importance}
                            </span>
                          )}
                        </div>
                        <h4 className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)] leading-snug">
                          {drv.title}
                        </h4>
                      </div>
                      {drv.subtopicId && (
                        <button
                          onClick={() => {
                            onSelectSubchapter(drv.subtopicId);
                            onSetChapterStudyMode?.('GENERAL');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="self-start shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-default)] hover:border-[var(--accent-primary)] text-[11px] font-mono font-bold text-[var(--accent-primary)] transition-colors cursor-pointer"
                        >
                          <span>Open Subtopic Notes</span>
                          <ArrowRight size={12} />
                        </button>
                      )}
                    </div>

                    {drv.setup && (
                      <div
                        className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-secondary)] italic leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: formatMathString(drv.setup) }}
                      />
                    )}

                    {resolvedDiagId && (
                      <div className="py-1">
                        <PhysicsDiagramCard diagramId={resolvedDiagId} subMode={resolvedSubMode} inline={true} />
                      </div>
                    )}

                    {drv.steps && drv.steps.length > 0 && (
                      <div className="space-y-2.5">
                        {drv.steps.map((st, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-3 sm:p-3.5 rounded-xl bg-[var(--bg-base)]/60 border border-[var(--border-subtle)] space-y-2"
                          >
                            <div className="flex items-start gap-2">
                              <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 shrink-0">
                                Step {sIdx + 1}:
                              </span>
                              <div
                                className="font-sans text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed flex-1"
                                dangerouslySetInnerHTML={{ __html: formatMathString(st.text || '') }}
                              />
                            </div>
                            {st.equation && (
                              <div className="py-1 px-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] overflow-x-auto text-center scrollbar-none">
                                <FormattedLatex content={`$$${st.equation}$$`} />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {drv.specialCases && drv.specialCases.length > 0 && (
                      <div className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-1.5">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--accent-primary)] block">
                          Special Cases &amp; Physical Deductions:
                        </span>
                        <ul className="space-y-1">
                          {drv.specialCases.map((sc, scIdx) => (
                            <li
                              key={scIdx}
                              className="text-xs text-[var(--text-secondary)] flex items-start gap-2"
                            >
                              <span className="text-emerald-500 font-bold shrink-0">•</span>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: formatMathString(typeof sc === 'string' ? sc : `${sc.title || ''} ${sc.text || ''}`)
                                }}
                              />
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {drv.finalFormula && (
                      <div className="p-3.5 rounded-xl bg-emerald-500/10 border-2 border-emerald-500/40 text-center space-y-1">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-300 font-bold block">
                          FINAL DERIVED FORMULA:
                        </span>
                        <div className="overflow-x-auto scrollbar-none py-1">
                          <FormattedLatex content={`$$${drv.finalFormula}$$`} />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            : chapterSectionDerivations.map((secDrv, idx) => (
                <div
                  key={secDrv.id}
                  id={`chapter-drv-${secDrv.id}`}
                  className="p-4 sm:p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)] space-y-3 shadow-xs scroll-mt-24"
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap border-b border-[var(--border-subtle)] pb-2.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/40 text-[10px] font-mono font-bold uppercase">
                        📐 DERIVATION {idx + 1}
                      </span>
                      <h4 className="font-serif text-base font-bold text-[var(--text-primary)]">{secDrv.title}</h4>
                    </div>
                    <button
                      onClick={() => {
                        onSelectSubchapter(secDrv.subtopicId);
                        onSetChapterStudyMode?.('GENERAL');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-default)] text-[11px] font-mono font-bold text-[var(--accent-primary)] cursor-pointer"
                    >
                      <span>Open Subtopic</span>
                      <ArrowRight size={11} />
                    </button>
                  </div>
                  <div className="font-sans text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-wrap pl-3 border-l-2 border-emerald-500/50 break-words">
                    <FormattedLatex content={secDrv.derivationText} />
                  </div>
                </div>
              ))}
        </div>
      </section>
    );
  };

  return (
    <div className="space-y-6 sm:space-y-8 pb-36 md:pb-24 animate-in fade-in duration-300">
      {/* Top Header: Breadcrumbs & Subchapter Dropdown */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3.5 sm:gap-4 border-b border-[var(--border-default)] pb-4 sm:pb-6">
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
          <button
            onClick={onBackToChapters}
            className="p-2 sm:p-2.5 rounded-xl border border-[var(--border-default)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors shrink-0 shadow-xs cursor-pointer"
            title="Back to Chapter list"
          >
            <ArrowLeft size={16} />
          </button>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-mono">
                <span className="truncate">{subject.name}</span>
                <span>/</span>
                <span className="shrink-0">Ch {chapter.number}</span>
              </div>
              {!isCleanMode && (
                <PriorityBadge
                  id={chapter.id}
                  rating={getPriority ? getPriority(chapter.id) : undefined}
                  onChangePriority={onSetPriority}
                  onResetPriority={onResetPriority}
                  title={chapter.title}
                  size="sm"
                />
              )}
            </div>
            <h2 className="font-serif text-lg sm:text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-0.5 leading-tight break-words">
              {chapter.title}
            </h2>
          </div>
        </div>

        {/* Subchapter Selector Dropdown + Download Entire Chapter PDF Button */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full md:w-auto shrink-0 max-w-full">
          <div className="relative w-full sm:w-72 md:w-76 lg:w-88 shrink-0 max-w-full">
            <CustomSelect
              value={currentSubchapter.id}
              onChange={(e) => onSelectSubchapter(e.target.value)}
              className="w-full bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-default)] px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl font-medium text-xs sm:text-sm hover:border-[var(--accent-primary)] shadow-2xs"
            >
              {chapter.subchapters.map((sub) => {
                const subCompleted = completedSubchapters.includes(sub.id);
                const pRating = getPriority ? getPriority(sub.id) : undefined;
                const pTag = !isCleanMode && pRating !== undefined ? `[P: ${pRating}/10] ` : '';
                const drvCount = getSubtopicDerivationCount(sub);
                const drvBadge = drvCount > 0 ? (drvCount > 1 ? `Derivation ×${drvCount}` : 'Derivation') : undefined;
                return (
                  <option
                    key={sub.id}
                    value={sub.id}
                    data-completed={subCompleted}
                    data-badge={drvBadge}
                  >
                    {pTag}{sub.title}
                  </option>
                );
              })}
            </CustomSelect>
          </div>

          <button
            type="button"
            onClick={handlePrintChapterPdf}
            disabled={isPrintingFullChapter}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 sm:py-2.5 rounded-xl bg-[var(--bg-elevated)] hover:bg-[var(--accent-primary)] text-[var(--accent-primary)] hover:text-white border border-[var(--border-default)] hover:border-[var(--accent-primary)] text-xs font-mono font-bold transition-all shadow-2xs cursor-pointer shrink-0 whitespace-nowrap"
            title={`Download / Print Entire Chapter ${chapter.number}: ${chapter.title} as PDF (${chapter.subchapters.length} Subtopics)`}
          >
            <FileDown size={14} className="shrink-0" />
            <span>{isPrintingFullChapter ? 'Preparing PDF...' : 'Chapter PDF'}</span>
          </button>
        </div>
      </div>

      {/* Subchapter Title Banner (Pinterest Style with soft accent bar) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 sm:p-5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] shadow-xs">
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
          <div className="w-8 h-8 rounded-xl bg-[var(--accent-primary)]/15 flex items-center justify-center text-[var(--accent-primary)] shrink-0">
            <BookOpen size={16} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] block">
                Active NCERT Subtopic
              </span>
              {currentSubDrvCount > 0 && (
                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/35">
                  📐 DERIVATION{currentSubDrvCount > 1 ? ` (${currentSubDrvCount})` : ''}
                </span>
              )}
              {!isCleanMode && (
                <PriorityBadge
                  id={currentSubchapter.id}
                  rating={getPriority ? getPriority(currentSubchapter.id) : undefined}
                  onChangePriority={onSetPriority}
                  onResetPriority={onResetPriority}
                  title={currentSubchapter.title}
                  size="sm"
                />
              )}
            </div>
            <h3 className="font-serif text-sm sm:text-lg md:text-xl font-bold text-[var(--text-primary)] leading-snug break-words">
              {currentSubchapter.title}
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
          {!isCleanMode && onOpenWolframEngine && (
            <button
              onClick={onOpenWolframEngine}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border border-indigo-500/25 text-xs font-semibold cursor-pointer transition-all shadow-xs"
              title="Open Wolfram Engine & Science Calculator"
            >
              <Calculator size={13} />
              <span>Wolfram Solver</span>
            </button>
          )}
          <span className="text-xs font-mono font-medium px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)] shadow-xs shrink-0">
            {activeSubchapterStats.completed} / {activeSubchapterStats.total} Complete
          </span>
        </div>
      </div>

      {/* Mode Switcher Banner: General Study vs Chapter Derivations vs Important Questions vs Quick Cheat Sheet */}
      {(!isCleanMode || totalChapterDerivationsCount > 0 || totalChapterImportantQuestionsCount > 0) && (
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-xs">
        <div className="flex items-center gap-2.5">
          <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
            chapterStudyMode === 'DERIVATIONS'
              ? 'bg-emerald-600 text-white shadow-xs'
              : chapterStudyMode === 'IMPORTANT_QUESTIONS'
              ? 'bg-amber-600 text-white shadow-xs'
              : chapterStudyMode === 'CHEAT_SHEET'
              ? 'bg-[var(--accent-primary)] text-white shadow-xs'
              : 'bg-[var(--bg-elevated)] text-[var(--accent-primary)] border border-[var(--border-subtle)]'
          }`}>
            {chapterStudyMode === 'DERIVATIONS' ? <Compass size={16} /> : chapterStudyMode === 'IMPORTANT_QUESTIONS' ? <Sparkles size={16} /> : chapterStudyMode === 'CHEAT_SHEET' ? <Zap size={16} /> : <BookOpen size={16} />}
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] block">
              {isCleanMode ? 'View' : 'Study Focus Mode'}
            </span>
            <h4 className="font-serif text-sm sm:text-base font-bold text-[var(--text-primary)]">
              {chapterStudyMode === 'DERIVATIONS'
                ? `All Chapter ${chapter.number} Derivations (${totalChapterDerivationsCount})`
                : chapterStudyMode === 'IMPORTANT_QUESTIONS'
                ? `Important & Repeated Past Board Questions (${totalChapterImportantQuestionsCount})`
                : !isCleanMode && chapterStudyMode === 'CHEAT_SHEET'
                ? 'Whole-Chapter Quick Cheat Sheet & Memory Boosters'
                : isCleanMode
                ? 'Study Notes'
                : 'General Study & Complete NCERT Notes'}
            </h4>
          </div>
        </div>

        {/* Toggle Pills */}
        <div className="flex items-center gap-1 bg-[var(--bg-elevated)] p-1 rounded-xl border border-[var(--border-subtle)] shrink-0 w-full sm:w-auto overflow-x-auto scrollbar-none">
          <button
            onClick={() => onSetChapterStudyMode?.('GENERAL')}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 sm:py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer touch-manipulation min-h-[38px] whitespace-nowrap ${
              chapterStudyMode === 'GENERAL'
                ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <BookOpen size={13} />
            <span>{isCleanMode ? 'Study Notes' : 'General Study'}</span>
          </button>
          {(selectedSubject === 'physics' || totalChapterDerivationsCount > 0) && (
            <button
              onClick={() => onSetChapterStudyMode?.('DERIVATIONS')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 sm:py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer touch-manipulation min-h-[38px] whitespace-nowrap ${
                chapterStudyMode === 'DERIVATIONS'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Compass size={13} />
              <span>Derivations ({totalChapterDerivationsCount})</span>
            </button>
          )}
          {totalChapterImportantQuestionsCount > 0 && (
            <button
              onClick={() => onSetChapterStudyMode?.('IMPORTANT_QUESTIONS')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 sm:py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer touch-manipulation min-h-[38px] whitespace-nowrap ${
                chapterStudyMode === 'IMPORTANT_QUESTIONS'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Sparkles size={13} />
              <span>Important &amp; Repeated Qs ({totalChapterImportantQuestionsCount})</span>
            </button>
          )}
          {!isCleanMode && (
            <button
              onClick={() => onSetChapterStudyMode?.('CHEAT_SHEET')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 sm:py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer touch-manipulation min-h-[38px] whitespace-nowrap ${
                chapterStudyMode === 'CHEAT_SHEET'
                  ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Zap size={13} />
              <span>Quick Cheat Sheet</span>
            </button>
          )}
        </div>
      </div>
      )}

      {chapterStudyMode === 'IMPORTANT_QUESTIONS' && (
        <div className="space-y-6 animate-in fade-in duration-300">
          {renderChapterImportantQuestionsSection()}
        </div>
      )}

      {chapterStudyMode === 'DERIVATIONS' && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/35 text-xs text-emerald-700 dark:text-emerald-300 font-medium shadow-2xs">
            <Compass size={16} className="shrink-0 text-emerald-600 dark:text-emerald-400" />
            <span>
              {isCleanMode ? (
                <>Showing all <strong>{totalChapterDerivationsCount}</strong> derivations, diagrams, and final formulas for <strong>Ch {chapter.number}: {chapter.title}</strong>.</>
              ) : (
                <><strong>Chapter Derivations Mode:</strong> Showing all <strong>{totalChapterDerivationsCount}</strong> step-by-step mathematical derivations, schematic diagrams, and boxed final formulas for <strong>Ch {chapter.number}: {chapter.title}</strong> in one dedicated section.</>
              )}
            </span>
          </div>
          {renderChapterDerivationsSection()}
        </div>
      )}

      {!isCleanMode && chapterStudyMode === 'CHEAT_SHEET' && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-xs text-purple-600 dark:text-purple-400 font-medium shadow-2xs">
            <Zap size={16} className="shrink-0" />
            <span>
              <strong>Whole-Chapter Last-Minute Cheat Sheet:</strong> Aggregating all exact Board Definitions, Key Formulas &amp; Reactions, Oswaal Memory Boosters, and Common Board Pitfalls across all {chapter.subchapters.length} subtopics of <strong>{chapter.title}</strong>.
            </span>
          </div>

          <div className="space-y-5">
            {chapter.subchapters.map((sub) => {
              const sData = STRUCTURED_NOTES_DATA[sub.id];
              const subFormulas = sub.sections?.flatMap((sec) => sec.keyFormulas || []) || [];
              return (
                <div key={sub.id} className="p-4 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-xs space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] block">
                        Subtopic Rapid Summary
                      </span>
                      <h4 className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)]">
                        {sub.title}
                      </h4>
                    </div>
                    <button
                      onClick={() => {
                        onSelectSubchapter(sub.id);
                        onSetChapterStudyMode?.('GENERAL');
                      }}
                      className="self-start sm:self-auto px-3 py-1 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] text-xs font-mono text-[var(--accent-primary)] font-semibold cursor-pointer transition-colors"
                    >
                      Open Full Notes →
                    </button>
                  </div>

                  {sData?.definitions && sData.definitions.length > 0 && (
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
                        Exact Board Definitions:
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {sData.definitions.map((d, i) => (
                          <div key={i} className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
                            <span className="text-xs font-serif font-bold text-[var(--accent-primary)] block">{d.term}</span>
                            <div className="text-xs text-[var(--text-secondary)] leading-relaxed" dangerouslySetInnerHTML={{ __html: formatMathString(d.definition || d.meaning || '') }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {subFormulas.length > 0 && (
                    <FormulaCard formulaList={subFormulas} derivations={null} />
                  )}

                  {sData?.oswaalMnemonic && (
                    <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-start gap-2.5">
                      <Brain size={15} className="text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                      <div
                        className="text-xs text-[var(--text-primary)] leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: `<strong>Memory Booster:</strong> ${formatMathString(
                            typeof sData.oswaalMnemonic === 'object'
                              ? `${sData.oswaalMnemonic.title || ''}: ${sData.oswaalMnemonic.phrase || ''} — ${sData.oswaalMnemonic.explanation || ''}`
                              : sData.oswaalMnemonic
                          )}`
                        }}
                      />
                    </div>
                  )}

                  {sData?.commonlyMadeErrors && sData.commonlyMadeErrors.length > 0 && (
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-rose-500 flex items-center gap-1.5">
                        <AlertTriangle size={13} /> Common Board Traps &amp; Corrections:
                      </span>
                      <div className="grid grid-cols-1 gap-2">
                        {sData.commonlyMadeErrors.map((err, idx) => (
                          <div key={idx} className="p-3 rounded-xl bg-rose-500/5 border border-rose-500/20 text-xs grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div className="text-[var(--text-secondary)]" dangerouslySetInnerHTML={{ __html: `<strong class="text-rose-500">✗ Error:</strong> ${formatMathString(err.error || '')}` }} />
                            <div className="text-[var(--text-primary)] font-medium" dangerouslySetInnerHTML={{ __html: `<strong class="text-emerald-500">✓ Tip:</strong> ${formatMathString(err.tip || err.correction || '')}` }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Sections List */}
      {chapterStudyMode !== 'CHEAT_SHEET' && chapterStudyMode !== 'DERIVATIONS' && chapterStudyMode !== 'IMPORTANT_QUESTIONS' && (
      <div ref={subtopicPrintRef} id="subtopic-printable-area" className="space-y-6 sm:space-y-8">
        {currentSubchapter.sections?.map((section) => {
          const sectionTopicIds = getSectionTopicIds(
            section,
            currentSubchapter.id,
            selectedChapter,
            selectedSubject,
            isCleanMode
          );
          const sectionDoneCount = sectionTopicIds.filter((tId) =>
            isTopicCompleted(tId, section.id, completedSections)
          ).length;
          const isDone =
            sectionTopicIds.length > 0
              ? sectionDoneCount === sectionTopicIds.length
              : completedSections.includes(section.id);
          const hasCustomNote = userNotes[section.id];
          const isEditing = activeNoteEdit === section.id;
          const isRefExpanded = expandedReferences[section.id] !== false; // default expanded in general mode
          const isSectionMinimized = Boolean(minimizedSections[section.id]);
          const sectionHasDerivation = currentSubDrvCount > 0 || Boolean(section.derivations);

          return (
            <div
              key={section.id}
              className={`p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border transition-all duration-300 relative space-y-4 sm:space-y-6 shadow-sm ${
                isDone
                  ? 'bg-[var(--bg-surface)] border-[var(--accent-primary)] shadow-md'
                  : 'bg-[var(--bg-surface)] border-[var(--border-default)] hover:border-[var(--border-default)]'
              }`}
            >
              {/* Section Header with Minimize Dropdown Toggle & Clickable Circle Completion Tracker */}
              <div className={`flex items-start justify-between gap-3 sm:gap-4 ${!isSectionMinimized ? 'border-b border-[var(--border-subtle)] pb-4 sm:pb-5' : ''}`}>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1.5 sm:mb-2">
                    <div className="inline-flex max-w-full items-center gap-2 px-2.5 py-0.5 rounded-full bg-[var(--bg-elevated)] text-[10px] sm:text-[11px] font-mono text-[var(--text-accent)] font-semibold uppercase tracking-wider">
                      <span className="truncate">{currentSubchapter.title}</span>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[10px] font-mono font-bold text-[var(--accent-primary)]">
                      {sectionDoneCount} / {sectionTopicIds.length} Topics Done
                    </span>
                    {sectionHasDerivation && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/35 text-[10px] font-mono font-bold uppercase tracking-wider">
                        📐 DERIVATION
                      </span>
                    )}
                  </div>
                  <h4 className="font-serif text-lg sm:text-2xl font-bold text-[var(--text-primary)] leading-snug">
                    {section.title}
                  </h4>
                </div>

                <div className="flex items-center gap-2 shrink-0" data-no-print="true">
                  <button
                    type="button"
                    onClick={() =>
                      setMinimizedSections((prev) => ({
                        ...prev,
                        [section.id]: !prev[section.id]
                      }))
                    }
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-[var(--bg-elevated)] hover:bg-[var(--accent-primary)]/15 border border-[var(--border-default)] text-[11px] font-mono font-bold text-[var(--accent-primary)] transition-colors cursor-pointer"
                    title={isSectionMinimized ? 'Expand subtopic section' : 'Minimize subtopic section'}
                    aria-expanded={!isSectionMinimized}
                  >
                    <span>{isSectionMinimized ? 'Expand' : 'Minimize'}</span>
                    {isSectionMinimized ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
                  </button>

                  {/* Interactive Clickable Circle Tracker (Toggles all independent topics in this section) */}
                  <button
                    onClick={() => onToggleSection(section.id, sectionTopicIds)}
                    className={`p-2 sm:p-2.5 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center shrink-0 ${
                      isDone
                        ? 'bg-[var(--accent-primary)] text-white shadow-md scale-105 sm:scale-110 hover:bg-[var(--accent-primary-hover)]'
                        : 'border-2 border-[var(--border-default)] text-[var(--text-muted)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] hover:scale-105'
                    }`}
                    title={isDone ? 'Untick all topics in this section' : 'Tick all topics in this section completed'}
                  >
                    {isDone ? (
                      <CheckCircle2 size={24} className="fill-current text-white stroke-[var(--accent-primary)]" />
                    ) : (
                      <Circle size={24} strokeWidth={2} />
                    )}
                  </button>
                </div>
              </div>

              <div data-print-expand="true" className={`${isSectionMinimized ? 'hidden' : 'block'} space-y-4 sm:space-y-6`}>

              {selectedSubject === 'physics' ? (
                <Physics4PartSectionView
                  section={section}
                  subtopicId={currentSubchapter.id}
                  chapterId={selectedChapter}
                  diagramId={PHYSICS_SUBTOPIC_DIAGRAMS[currentSubchapter.id]}
                  diagramSubMode={PHYSICS_SUBTOPIC_SUBMODES[currentSubchapter.id]}
                  isCleanMode={isCleanMode}
                  completedSections={completedSections}
                  onToggleTopic={onToggleTopic}
                  onToggleTopicGroup={onToggleTopicGroup}
                  allSectionTopicIds={sectionTopicIds}
                />
              ) : (
                <>
                  {/* General Study Mode: Structured Editorial Notes */}
                  {/* Definitions, Bulleted Key Points, Extra Points & Reactions with Diagrams */}
                  <StructuredSectionView
                    section={section}
                    subtopicId={currentSubchapter.id}
                    chapterId={selectedChapter}
                    subjectId={selectedSubject}
                    isCleanMode={isCleanMode}
                    completedSections={completedSections}
                    onToggleTopic={onToggleTopic}
                    onToggleTopicGroup={onToggleTopicGroup}
                    allSectionTopicIds={sectionTopicIds}
                  />

                  {/* 2. Key Formulas with Variable Breakdown Card */}
                  {section.keyFormulas && section.keyFormulas.length > 0 && (
                    <FormulaCard
                      formulaList={section.keyFormulas}
                      derivations={section.derivations}
                      sectionId={section.id}
                      completedSections={completedSections}
                      onToggleTopic={onToggleTopic}
                      onToggleTopicGroup={onToggleTopicGroup}
                      allSectionTopicIds={sectionTopicIds}
                    />
                  )}

                  {/* Visual Chemical Reaction & Mechanism Diagrams */}
                  <ReactionDiagramCard
                    subtopicId={currentSubchapter.id}
                    chapterId={selectedChapter}
                    isCleanMode={isCleanMode}
                  />

                  {/* Visual Physics Concept & Derivation Diagrams */}
                  {PHYSICS_SUBTOPIC_DIAGRAMS[currentSubchapter.id] && (
                    <div className="py-2">
                      <PhysicsDiagramCard
                        diagramId={PHYSICS_SUBTOPIC_DIAGRAMS[currentSubchapter.id]}
                        subMode={PHYSICS_SUBTOPIC_SUBMODES[currentSubchapter.id]}
                      />
                    </div>
                  )}

                  {/* 3. How questions could be framed / asked */}
                  {!isCleanMode && section.questionFraming && (
                    <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[var(--bg-elevated)] border-l-4 border-l-[var(--text-accent)] border border-[var(--border-subtle)] space-y-2.5 sm:space-y-3 shadow-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-[var(--text-accent)] uppercase tracking-wider flex items-center gap-1.5">
                          <HelpCircle size={14} />
                          Exam Question Blueprint
                        </span>
                        <span className="text-[11px] font-cursive text-[var(--text-muted)]">
                          frequently tested patterns
                        </span>
                      </div>
                      <div
                        className="font-sans text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-wrap pl-2 border-l-2 border-[var(--border-default)] break-words"
                        dangerouslySetInnerHTML={{ __html: formatMathString(section.questionFraming) }}
                      />
                    </div>
                  )}
                </>
              )}

              {/* 4. Detailed Textbook Reference (Editorial Collapsible Box) */}
              {section.textbookRef && (
                <div className="border border-[var(--border-subtle)] rounded-xl sm:rounded-2xl overflow-hidden bg-[var(--bg-base)] shadow-xs">
                  <button
                    onClick={() => toggleReference(section.id)}
                    className="w-full px-4 py-2.5 sm:px-5 sm:py-3 bg-[var(--bg-elevated)] flex items-center justify-between text-xs font-mono font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <BookMarked size={14} className="text-[var(--accent-primary)] shrink-0" />
                      Detailed NCERT Textbook Reference
                    </span>
                    <span data-no-print="true">{isRefExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}</span>
                  </button>

                  <div
                    data-print-expand="true"
                    className={`${isRefExpanded ? 'block' : 'hidden'} p-4 sm:p-5 font-sans text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-wrap border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] break-words`}
                    dangerouslySetInnerHTML={{ __html: formatMathString(section.textbookRef) }}
                  />
                </div>
              )}

              {/* 5. Subtopic-Level 20 MCQs and Board PYQs Practice Drawer */}
              {!isCleanMode && (
              <div className="pt-1" data-no-print={!openPracticeSections[section.id] ? 'true' : undefined}>
                <button
                  data-no-print="true"
                  onClick={() => togglePracticeSection(section.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer shadow-2xs ${
                    openPracticeSections[section.id]
                      ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                      : 'bg-[var(--bg-elevated)] border border-[var(--accent-primary)]/40 text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-white'
                  }`}
                >
                  <Sparkles size={13} />
                  <span>
                    {openPracticeSections[section.id]
                      ? 'Hide Subtopic Practice'
                      : 'Practice 20 MCQs & Board PYQs for this Subtopic'}
                  </span>
                </button>

                {openPracticeSections[section.id] && (
                  <div className="mt-3.5">
                    <SubtopicPracticePanel
                      subjectId={selectedSubject}
                      chapterId={selectedChapter}
                      subtopicId={currentSubchapter.id}
                      subtopicTitle={section.title}
                    />
                  </div>
                )}
              </div>
              )}

              {/* 6. Custom User Notepad for this subtopic */}
              <div
                className="pt-3 sm:pt-4 border-t border-[var(--border-subtle)]"
                data-no-print={!hasCustomNote ? 'true' : undefined}
              >
                {isEditing ? (
                  <div className="space-y-3" data-no-print="true">
                    <textarea
                      value={localNoteText}
                      onChange={(e) => setLocalNoteText(e.target.value)}
                      placeholder="Type your personal insights, worked problem steps, or revision mnemonics..."
                      className="w-full p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[var(--bg-base)] text-[var(--text-primary)] border border-[var(--border-default)] text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)] min-h-[90px] leading-relaxed"
                    />
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => setActiveNoteEdit(null)}
                        className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-medium text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)] transition-colors cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleSaveNote(section.id)}
                        className="px-4 py-1.5 sm:px-5 sm:py-2 rounded-xl text-xs font-medium bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-primary-hover)] transition-colors shadow-xs cursor-pointer"
                      >
                        Save Note
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 text-xs">
                    {hasCustomNote ? (
                      <div className="flex-1 min-w-0 pr-0 sm:pr-4">
                        <span className="font-semibold text-[var(--text-primary)] block mb-0.5">Your Personal Study Note:</span>
                        <p className="italic text-[var(--text-secondary)] line-clamp-2 break-words">
                          "{hasCustomNote}"
                        </p>
                      </div>
                    ) : (
                      <span className="text-[var(--text-muted)] italic">No personal notes added yet for this topic.</span>
                    )}

                    <button
                      data-no-print="true"
                      onClick={() => handleStartEditNote(section.id, hasCustomNote)}
                      className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl border border-[var(--border-default)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors shrink-0 shadow-xs cursor-pointer"
                    >
                      <PenLine size={13} />
                      <span>{hasCustomNote ? 'Edit Note' : 'Add Note'}</span>
                    </button>
                  </div>
                )}
              </div>
              </div>
            </div>
          );
        })}
      </div>
      )}

      {/* Dedicated Chapter-Level Derivations Section directly on the Chapter Page in General Study Mode */}
      {!isCleanMode && chapterStudyMode === 'GENERAL' && totalChapterDerivationsCount > 0 && (
        <div className="pt-2">
          {renderChapterDerivationsSection()}
        </div>
      )}

      {/* Subtopic & Complete Chapter PDF Printout Card + Subtopic Completed Button */}
      <div className="pt-4 sm:pt-6 pb-8 sm:pb-12 space-y-4">
        <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-xs flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex items-start gap-3 min-w-0 flex-1">
            <div className="w-10 h-10 rounded-xl bg-[var(--accent-primary)]/15 border border-[var(--accent-primary)]/30 flex items-center justify-center text-[var(--accent-primary)] shrink-0 mt-0.5">
              <Printer size={18} />
            </div>
            <div className="min-w-0 flex-1 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--accent-primary)] font-bold block">
                Subtopic &amp; Full Chapter PDF Printout
              </span>
              <h5 className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)] leading-snug break-words">
                Print / Download PDF: {currentSubchapter.title} or All of Ch {chapter.number}: {chapter.title}
              </h5>
              <p className="font-sans text-xs text-[var(--text-secondary)] leading-relaxed">
                Generates a clean, ink-friendly A4 PDF handout containing all diagrams, chemical structures &amp; reactions, formulas, definitions, distinguish tables, and Q&amp;A — for this subtopic or for the entire chapter ({chapter.subchapters.length} subtopics).
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full lg:w-auto shrink-0">
            <button
              type="button"
              onClick={handlePrintSubtopicPdf}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-primary-hover)] font-sans text-xs sm:text-sm font-bold transition-all shadow-sm hover:shadow-md cursor-pointer shrink-0"
            >
              <Printer size={15} />
              <span>Print / Save Subtopic PDF</span>
            </button>

            <button
              type="button"
              onClick={handlePrintChapterPdf}
              disabled={isPrintingFullChapter}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl bg-[var(--bg-elevated)] hover:bg-[var(--accent-primary)] text-[var(--accent-primary)] hover:text-white border border-[var(--accent-primary)]/40 hover:border-[var(--accent-primary)] font-sans text-xs sm:text-sm font-bold transition-all shadow-2xs hover:shadow-md cursor-pointer shrink-0"
            >
              <FileDown size={15} />
              <span>
                {isPrintingFullChapter
                  ? 'Preparing Chapter PDF...'
                  : `Download Entire Chapter PDF (${chapter.subchapters.length})`}
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleOpenCustomPdfSelector('CHAPTER')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl bg-[var(--bg-elevated)] hover:bg-[var(--accent-primary)] text-[var(--text-primary)] hover:text-white border border-[var(--border-default)] hover:border-[var(--accent-primary)] font-sans text-xs sm:text-sm font-bold transition-all shadow-2xs hover:shadow-md cursor-pointer shrink-0"
              title="Choose specific subtopics in this chapter or specific chapters of this subject to download as PDF"
            >
              <Layers size={15} />
              <span>Custom PDF (Select Topics / Chapters)</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-2.5 pt-1">
          <button
            disabled={!activeSubchapterStats.isAllCompleted || isSubCompleted}
            onClick={() => onMarkSubchapterCompleted(currentSubchapter.id)}
            className={`w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl font-serif text-sm sm:text-base font-bold transition-all duration-300 shadow-sm ${
              isSubCompleted
                ? 'bg-[var(--accent-primary)]/20 text-[var(--accent-primary)] border border-[var(--accent-primary)] cursor-default'
                : activeSubchapterStats.isAllCompleted
                ? 'bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-primary-hover)] hover:shadow-lg hover:-translate-y-0.5 cursor-pointer animate-bounce'
                : 'bg-[var(--bg-elevated)] text-[var(--text-muted)] border border-[var(--border-default)] opacity-60 cursor-not-allowed'
            }`}
          >
            {isSubCompleted ? (
              <>
                <Check size={18} />
                Subtopic Completed!
              </>
            ) : (
              <>
                <CheckCircle2 size={18} />
                Mark Subtopic Completed
              </>
            )}
          </button>

          {!activeSubchapterStats.isAllCompleted && !isSubCompleted && (
            <p className="text-xs text-[var(--text-muted)] font-sans text-center px-4">
              Mark the completion circle for this subtopic above to unlock.
            </p>
          )}
        </div>
      </div>

      {/* Offscreen Full-Chapter Render Container (Mounted momentarily when generating Entire Chapter PDF) */}
      {isPrintingFullChapter && (
        <div
          ref={fullChapterPrintRef}
          id="full-chapter-printable-area"
          className="fixed -left-[9999px] top-0 w-[900px] pointer-events-none opacity-0 space-y-8"
          aria-hidden="true"
        >
          {chapter.subchapters.map((sub, subIdx) => (
            <div
              key={sub.id}
              className="space-y-6"
              style={
                subIdx > 0
                  ? { pageBreakBefore: 'always', breakBefore: 'page' }
                  : undefined
              }
            >
              <div className="print-subtopic-divider">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--accent-primary)]">
                  Subtopic {subIdx + 1} of {chapter.subchapters.length} • Chapter {chapter.number}: {chapter.title}
                </div>
                <h2 className="font-serif text-lg font-bold text-[var(--text-primary)] mt-0.5">
                  {sub.title}
                </h2>
              </div>

              {sub.sections?.map((section) => {
                const hasCustomNote = userNotes[section.id];
                return (
                  <div
                    key={section.id}
                    className="p-5 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] space-y-5"
                  >
                    <div className="border-b border-[var(--border-subtle)] pb-3">
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[var(--text-accent)] block mb-1">
                        {sub.title}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-[var(--text-primary)]">
                        {section.title}
                      </h3>
                    </div>

                    {selectedSubject === 'physics' ? (
                      <Physics4PartSectionView
                        section={section}
                        subtopicId={sub.id}
                        chapterId={selectedChapter}
                        diagramId={PHYSICS_SUBTOPIC_DIAGRAMS[sub.id]}
                        diagramSubMode={PHYSICS_SUBTOPIC_SUBMODES[sub.id]}
                        isCleanMode={isCleanMode}
                      />
                    ) : (
                      <>
                        <StructuredSectionView
                          section={section}
                          subtopicId={sub.id}
                          chapterId={selectedChapter}
                          subjectId={selectedSubject}
                          isCleanMode={isCleanMode}
                        />

                        {section.keyFormulas && section.keyFormulas.length > 0 && (
                          <FormulaCard
                            formulaList={section.keyFormulas}
                            derivations={section.derivations}
                          />
                        )}

                        <ReactionDiagramCard
                          subtopicId={sub.id}
                          chapterId={selectedChapter}
                          isCleanMode={isCleanMode}
                        />

                        {PHYSICS_SUBTOPIC_DIAGRAMS[sub.id] && (
                          <div className="py-2">
                            <PhysicsDiagramCard
                              diagramId={PHYSICS_SUBTOPIC_DIAGRAMS[sub.id]}
                              subMode={PHYSICS_SUBTOPIC_SUBMODES[sub.id]}
                            />
                          </div>
                        )}

                        {!isCleanMode && section.questionFraming && (
                          <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border-l-4 border-l-[var(--text-accent)] border border-[var(--border-subtle)] space-y-2">
                            <span className="text-xs font-mono font-bold text-[var(--text-accent)] uppercase tracking-wider block">
                              Exam Question Blueprint
                            </span>
                            <div
                              className="font-sans text-xs text-[var(--text-secondary)] leading-relaxed whitespace-pre-wrap"
                              dangerouslySetInnerHTML={{ __html: formatMathString(section.questionFraming) }}
                            />
                          </div>
                        )}
                      </>
                    )}

                    {section.textbookRef && (
                      <div className="border border-[var(--border-subtle)] rounded-xl overflow-hidden bg-[var(--bg-base)]">
                        <div className="px-4 py-2 bg-[var(--bg-elevated)] text-xs font-mono font-semibold text-[var(--text-secondary)]">
                          Detailed NCERT Textbook Reference
                        </div>
                        <div
                          className="p-4 font-sans text-xs text-[var(--text-secondary)] leading-relaxed whitespace-pre-wrap border-t border-[var(--border-subtle)] bg-[var(--bg-surface)]"
                          dangerouslySetInnerHTML={{ __html: formatMathString(section.textbookRef) }}
                        />
                      </div>
                    )}

                    {hasCustomNote && (
                      <div className="pt-3 border-t border-[var(--border-subtle)] text-xs">
                        <span className="font-semibold text-[var(--text-primary)] block mb-0.5">
                          Your Personal Study Note:
                        </span>
                        <p className="italic text-[var(--text-secondary)] whitespace-pre-wrap">
                          "{hasCustomNote}"
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}

          {!isCleanMode && totalChapterDerivationsCount > 0 && (
            <div style={{ pageBreakBefore: 'always', breakBefore: 'page' }}>
              {renderChapterDerivationsSection()}
            </div>
          )}
        </div>
      )}

      {/* Offscreen Custom-Selection Render Container (Mounted when generating Custom Selected Subtopics / Chapters PDF) */}
      {isPrintingCustomPdf && (
        <div
          ref={customPdfPrintRef}
          id="custom-selection-printable-area"
          className="fixed -left-[9999px] top-0 w-[900px] pointer-events-none opacity-0 space-y-8"
          aria-hidden="true"
        >
          {customPdfItemsToPrint.map(({ chapterObj, subObj }, itemIdx) => (
            <div
              key={`${chapterObj.id}-${subObj.id}`}
              className="space-y-6"
              style={
                itemIdx > 0
                  ? { pageBreakBefore: 'always', breakBefore: 'page' }
                  : undefined
              }
            >
              <div className="print-subtopic-divider">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--accent-primary)]">
                  Item {itemIdx + 1} of {customPdfItemsToPrint.length} • Chapter {chapterObj.number}: {chapterObj.title}
                </div>
                <h2 className="font-serif text-lg font-bold text-[var(--text-primary)] mt-0.5">
                  {subObj.title}
                </h2>
              </div>

              {subObj.sections?.map((section) => {
                const hasCustomNote = userNotes[section.id];
                return (
                  <div
                    key={section.id}
                    className="p-5 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] space-y-5"
                  >
                    <div className="border-b border-[var(--border-subtle)] pb-3">
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[var(--text-accent)] block mb-1">
                        Chapter {chapterObj.number}: {chapterObj.title} • {subObj.title}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-[var(--text-primary)]">
                        {section.title}
                      </h3>
                    </div>

                    {selectedSubject === 'physics' ? (
                      <Physics4PartSectionView
                        section={section}
                        subtopicId={subObj.id}
                        chapterId={chapterObj.id}
                        diagramId={PHYSICS_SUBTOPIC_DIAGRAMS[subObj.id]}
                        diagramSubMode={PHYSICS_SUBTOPIC_SUBMODES[subObj.id]}
                        isCleanMode={isCleanMode}
                      />
                    ) : (
                      <>
                        <StructuredSectionView
                          section={section}
                          subtopicId={subObj.id}
                          chapterId={chapterObj.id}
                          subjectId={selectedSubject}
                          isCleanMode={isCleanMode}
                        />

                        {section.keyFormulas && section.keyFormulas.length > 0 && (
                          <FormulaCard
                            formulaList={section.keyFormulas}
                            derivations={section.derivations}
                          />
                        )}

                        <ReactionDiagramCard
                          subtopicId={subObj.id}
                          chapterId={chapterObj.id}
                          isCleanMode={isCleanMode}
                        />

                        {PHYSICS_SUBTOPIC_DIAGRAMS[subObj.id] && (
                          <div className="py-2">
                            <PhysicsDiagramCard
                              diagramId={PHYSICS_SUBTOPIC_DIAGRAMS[subObj.id]}
                              subMode={PHYSICS_SUBTOPIC_SUBMODES[subObj.id]}
                            />
                          </div>
                        )}
                      </>
                    )}

                    {hasCustomNote && (
                      <div className="pt-3 border-t border-[var(--border-subtle)] text-xs">
                        <span className="font-semibold text-[var(--text-primary)] block mb-0.5">
                          Your Personal Study Note:
                        </span>
                        <p className="italic text-[var(--text-secondary)] whitespace-pre-wrap">
                          "{hasCustomNote}"
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}

      {/* Custom PDF Selection Modal (Select Specific Subtopics in Chapter OR Specific Chapters in Subject) */}
      {isCustomPdfModalOpen && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsCustomPdfModalOpen(false)}
        >
          <div
            className="w-full max-w-2xl max-h-[88dvh] flex flex-col rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-[var(--border-subtle)] flex items-start justify-between gap-3 bg-[var(--bg-elevated)]">
              <div className="space-y-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--accent-primary)]/15 text-[var(--accent-primary)] border border-[var(--accent-primary)]/30 text-[10px] font-mono font-bold uppercase tracking-wider">
                  <FileDown size={12} />
                  <span>Custom A4 PDF Builder • {subject.name}</span>
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                  Download Specific Subtopics or Specific Chapters
                </h3>
                <p className="text-xs text-[var(--text-secondary)] font-sans">
                  Tick the exact subtopics in this chapter or choose multiple chapters across {subject.name} to combine into one printable PDF.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsCustomPdfModalOpen(false)}
                className="px-2.5 py-1 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-default)] text-xs font-mono font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Scope Switcher Tabs */}
            <div className="px-4 sm:px-6 pt-3 pb-2 border-b border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-2 bg-[var(--bg-surface)]">
              <div className="inline-flex p-1 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                <button
                  type="button"
                  onClick={() => setCustomPdfScope('CHAPTER')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    customPdfScope === 'CHAPTER'
                      ? 'bg-[var(--accent-primary)] text-white shadow-2xs'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  Specific Subtopics in Ch {chapter.number} ({chapter.subchapters.length})
                </button>
                <button
                  type="button"
                  onClick={() => setCustomPdfScope('SUBJECT')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    customPdfScope === 'SUBJECT'
                      ? 'bg-[var(--accent-primary)] text-white shadow-2xs'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  Specific Chapters of {subject.name} ({allSubjectChapters.length})
                </button>
              </div>

              {/* Select All / Clear All */}
              {customPdfScope === 'CHAPTER' ? (
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setSelectedPdfSubtopicIds(chapter.subchapters.map((s) => s.id))}
                    className="px-2.5 py-1 rounded-lg bg-[var(--bg-elevated)] hover:bg-[var(--accent-primary)]/15 border border-[var(--border-default)] text-[11px] font-mono font-bold text-[var(--accent-primary)] cursor-pointer"
                  >
                    Select All
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedPdfSubtopicIds([])}
                    className="px-2.5 py-1 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-default)] text-[11px] font-mono font-semibold text-[var(--text-secondary)] cursor-pointer"
                  >
                    Clear
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setSelectedPdfChapterIds(allSubjectChapters.map((c) => c.id))}
                    className="px-2.5 py-1 rounded-lg bg-[var(--bg-elevated)] hover:bg-[var(--accent-primary)]/15 border border-[var(--border-default)] text-[11px] font-mono font-bold text-[var(--accent-primary)] cursor-pointer"
                  >
                    Select All Chapters
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedPdfChapterIds([])}
                    className="px-2.5 py-1 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-default)] text-[11px] font-mono font-semibold text-[var(--text-secondary)] cursor-pointer"
                  >
                    Clear
                  </button>
                </div>
              )}
            </div>

            {/* Checklist Body */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-2.5">
              {customPdfScope === 'CHAPTER' ? (
                chapter.subchapters.map((sub, idx) => {
                  const isChecked = selectedPdfSubtopicIds.includes(sub.id);
                  return (
                    <button
                      key={sub.id}
                      type="button"
                      onClick={() => togglePdfSubtopicSelection(sub.id)}
                      className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                        isChecked
                          ? 'bg-[var(--accent-primary)]/10 border-[var(--accent-primary)] text-[var(--text-primary)]'
                          : 'bg-[var(--bg-elevated)] border-[var(--border-default)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)]/50'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="px-2 py-0.5 rounded-md bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-mono text-[11px] font-bold text-[var(--accent-primary)] shrink-0">
                          #{idx + 1}
                        </span>
                        <span className="font-serif text-sm sm:text-base font-bold truncate">
                          {sub.title}
                        </span>
                      </div>
                      <span
                        className={`p-1 rounded-full shrink-0 ${
                          isChecked ? 'bg-[var(--accent-primary)] text-white' : 'text-[var(--text-muted)]'
                        }`}
                      >
                        {isChecked ? <CheckCircle2 size={18} /> : <Circle size={18} />}
                      </span>
                    </button>
                  );
                })
              ) : (
                allSubjectChapters.map((ch) => {
                  const isChecked = selectedPdfChapterIds.includes(ch.id);
                  return (
                    <button
                      key={ch.id}
                      type="button"
                      onClick={() => togglePdfChapterSelection(ch.id)}
                      className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                        isChecked
                          ? 'bg-[var(--accent-primary)]/10 border-[var(--accent-primary)] text-[var(--text-primary)]'
                          : 'bg-[var(--bg-elevated)] border-[var(--border-default)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)]/50'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="px-2.5 py-0.5 rounded-md bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-mono text-[11px] font-bold text-[var(--accent-primary)] shrink-0">
                          Ch {ch.number}
                        </span>
                        <div className="min-w-0">
                          <div className="font-serif text-sm sm:text-base font-bold truncate">
                            {ch.title}
                          </div>
                          <div className="text-[11px] font-mono text-[var(--text-muted)]">
                            {ch.subchapters?.length || 0} subtopics included
                          </div>
                        </div>
                      </div>
                      <span
                        className={`p-1 rounded-full shrink-0 ${
                          isChecked ? 'bg-[var(--accent-primary)] text-white' : 'text-[var(--text-muted)]'
                        }`}
                      >
                        {isChecked ? <CheckCircle2 size={18} /> : <Circle size={18} />}
                      </span>
                    </button>
                  );
                })
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-[var(--border-subtle)] bg-[var(--bg-elevated)] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs font-mono font-semibold text-[var(--text-secondary)]">
                {customPdfItemsToPrint.length} Subtopic{customPdfItemsToPrint.length === 1 ? '' : 's'} selected for PDF printout
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setIsCustomPdfModalOpen(false)}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-default)] text-xs font-bold text-[var(--text-secondary)] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={customPdfItemsToPrint.length === 0}
                  onClick={handleTriggerCustomPdfDownload}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] disabled:opacity-50 text-white text-xs sm:text-sm font-bold shadow-sm cursor-pointer"
                >
                  <FileDown size={15} />
                  <span>Download Selected PDF ({customPdfItemsToPrint.length})</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fixed Viewport Bottom Progress Bar (Elevated above mobile nav on small screens) */}
      <div className="fixed bottom-14 md:bottom-0 left-0 right-0 z-40 bg-[var(--bg-surface)]/95 backdrop-blur-md border-t border-[var(--border-default)] py-2 sm:py-2.5 px-3.5 sm:px-6 shadow-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2.5 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3 text-xs font-medium text-[var(--text-secondary)] min-w-0 flex-1">
            <span className="font-bold text-[var(--text-primary)] truncate max-w-[130px] xs:max-w-[180px] sm:max-w-xs md:max-w-md">
              {currentSubchapter.title}
            </span>
            <span>•</span>
            <span className="font-mono text-[var(--accent-primary)] shrink-0">
              {activeSubchapterStats.percentage}% Complete
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            <button
              type="button"
              onClick={handlePrintSubtopicPdf}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-[var(--bg-elevated)] hover:bg-[var(--accent-primary)] text-[var(--accent-primary)] hover:text-white border border-[var(--border-default)] text-[11px] font-mono font-bold transition-colors cursor-pointer"
              title="Print or Save Complete Subtopic as PDF"
            >
              <Printer size={12} />
              <span className="hidden sm:inline">Subtopic PDF</span>
            </button>

            <button
              type="button"
              onClick={handlePrintChapterPdf}
              disabled={isPrintingFullChapter}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-[var(--bg-elevated)] hover:bg-[var(--accent-primary)] text-[var(--accent-primary)] hover:text-white border border-[var(--border-default)] text-[11px] font-mono font-bold transition-colors cursor-pointer"
              title={`Download / Print Entire Chapter ${chapter.number} as PDF`}
            >
              <FileDown size={12} />
              <span className="hidden xs:inline">Chapter PDF</span>
            </button>

            <button
              type="button"
              onClick={() => handleOpenCustomPdfSelector('CHAPTER')}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-[var(--bg-elevated)] hover:bg-[var(--accent-primary)] text-[var(--text-primary)] hover:text-white border border-[var(--border-default)] text-[11px] font-mono font-bold transition-colors cursor-pointer"
              title="Select specific subtopics or chapters to download as PDF"
            >
              <Layers size={12} />
              <span className="hidden md:inline">Custom PDF</span>
            </button>

            <div className="w-14 xs:w-20 sm:w-36 md:w-52 h-2 sm:h-2.5 rounded-full bg-[var(--border-default)] overflow-hidden shrink-0">
              <div
                className="h-full rounded-full transition-all duration-300 bg-[var(--accent-primary)]"
                style={{ width: `${activeSubchapterStats.percentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
