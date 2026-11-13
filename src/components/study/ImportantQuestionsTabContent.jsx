import { useState, useEffect, useMemo } from 'react';
import { 
  CheckCircle2, Circle, Search, Filter, BookOpen, 
  ChevronDown, ChevronUp, Copy, Check, Sparkles, Award, 
  ExternalLink, AlertTriangle, Layers, Zap, Bookmark, FileText,
  HelpCircle, AlignLeft, Dna, Eye, FlaskConical, Brain
} from 'lucide-react';
import { IMPORTANT_PHYSICS_QUESTIONS } from '../../data/importantQuestionsData';
import { PHYSICS_DERIVATIONS_REFERENCE } from '../../data/physicsDerivationsReference';
import { IMPORTANT_CHEMISTRY_QUESTIONS } from '../../data/chemistryImportantQuestionsData';
import { 
  ALL_BIG_ORANGE_QUESTIONS, 
  BIG_ORANGE_CORE_QUESTIONS, 
  BIG_ORANGE_PAGE_QUESTIONS 
} from '../../data/biologyImportantQuestionsData';
import { IMPORTANT_PSYCHOLOGY_QUESTIONS } from '../../data/psychologyImportantQuestionsData';
import { IMPORTANT_ENGLISH_QUESTIONS } from '../../data/englishImportantQuestionsData';
import PhysicsDiagramCard from './PhysicsDiagramCard';
import PhysicsDerivationsReferencePanel from './PhysicsDerivationsReferencePanel';
import BiologyDiagramCard from './BiologyDiagramCard';
import BiologyPdfGuideViewer from './BiologyPdfGuideViewer';
import { FormattedLatex, MathBlock } from './LatexView';

const STORAGE_KEY_MASTERED_PHYSICS = 'one_mastered_imp_physics_q';
const STORAGE_KEY_MASTERED_CHEMISTRY = 'one_mastered_imp_chem_q';
const STORAGE_KEY_MASTERED_BIOLOGY = 'one_mastered_imp_bio_q';
const STORAGE_KEY_MASTERED_PSYCHOLOGY = 'one_mastered_imp_psy_q';
const STORAGE_KEY_MASTERED_ENGLISH = 'one_mastered_imp_eng_q';

const DIAGRAM_MAPPING = {
  'imp-phy-9-ex2': 'ray-optics-instruments',
  'imp-phy-9-ex4': 'ray-optics-instruments',
  'imp-phy-9-ex5': 'ray-optics-instruments',
  'imp-phy-9-ex7': 'ray-optics-instruments',
  'imp-phy-9-ex8': 'ray-optics-instruments',
  'imp-phy-9-q1': 'ray-optics-instruments',
  'imp-phy-9-q5': 'ray-optics-instruments',
  'imp-phy-9-q11': 'ray-optics-instruments',
  'imp-phy-9-q13': 'ray-optics-instruments',
  'imp-phy-9-q21': 'prism-dispersion',
  'imp-phy-9-q26': 'ray-optics-instruments',
  'imp-phy-9-q29': 'ray-optics-instruments',
  'imp-phy-9-th1': 'ray-optics-instruments',
  'imp-phy-9-th2': 'ray-optics-instruments',
  'imp-phy-9-th3': 'ray-optics-instruments',
  'imp-phy-9-th4': 'ray-optics-instruments',
  'imp-phy-9-th5': 'prism-dispersion',
  'imp-phy-9-th6': 'prism-dispersion',
  'imp-phy-9-th7': 'ray-optics-instruments',
  'imp-phy-9-th8': 'ray-optics-instruments',
  'imp-phy-9-th9': 'ray-optics-instruments',
  'imp-phy-10-q1': 'ydse-wave-optics',
  'imp-phy-10-q4': 'ydse-wave-optics',
  'imp-phy-10-q5': 'ydse-wave-optics',
  'imp-phy-10-th1': 'huygens-wavefronts',
  'imp-phy-10-th2': 'huygens-wavefronts',
  'imp-phy-10-th3': 'huygens-wavefronts',
  'imp-phy-10-th4': 'huygens-wavefronts',
  'imp-phy-10-th5': 'huygens-wavefronts',
  'imp-phy-10-th6': 'ydse-wave-optics',
  'imp-phy-10-th7': 'ydse-wave-optics',
  'imp-phy-10-th8': 'single-slit-diffraction',
  'imp-phy-11-ex2': 'photoelectric-graphs',
  'imp-phy-11-q2': 'photoelectric-graphs',
  'imp-phy-11-q6': 'photoelectric-graphs',
  'imp-phy-11-th1': 'photoelectric-graphs',
  'imp-phy-11-th2': 'photoelectric-graphs',
  'imp-phy-11-th3': 'photoelectric-graphs',
  'imp-phy-11-th4': 'photoelectric-graphs',
  'imp-phy-11-th5': 'photoelectric-graphs',
  'imp-phy-11-th6': 'photoelectric-graphs',
  'imp-phy-12-ex3': 'bohr-atom-spectra',
  'imp-phy-12-q5': 'bohr-atom-spectra',
  'imp-phy-12-th1': 'bohr-atom-spectra',
  'imp-phy-12-th2': 'bohr-atom-spectra',
  'imp-phy-12-th3': 'bohr-atom-spectra',
  'imp-phy-12-th4': 'bohr-atom-spectra',
  'imp-phy-13-ex1': 'nuclei-binding-force',
  'imp-phy-13-q2': 'nuclei-binding-force',
  'imp-phy-13-q5': 'nuclei-binding-force',
  'imp-phy-13-th1': 'nuclei-binding-force',
  'imp-phy-13-th2': 'nuclei-binding-force',
  'imp-phy-13-th3': 'nuclei-binding-force',
  'imp-phy-14-ex1': 'pn-junction-rectifier',
  'imp-phy-14-ex2': 'pn-junction-rectifier',
  'imp-phy-14-ex4': 'pn-junction-rectifier',
  'imp-phy-14-th1': 'pn-junction-rectifier',
  'imp-phy-14-th2': 'pn-junction-rectifier',
  'imp-phy-14-th3': 'pn-junction-rectifier'
};

const SQP_CORRELATIONS = {
  'imp-phy-9-ex7': { sqpId: 'sqp-2027-q14', label: '2026-27 SQP: Q14 (Thin Lens)' },
  'imp-phy-9-q5': { sqpId: 'sqp-2027-q25', label: '2026-27 SQP: Q25 (TIR & Critical Angle)' },
  'imp-phy-9-q11': { sqpId: 'sqp-2027-q32', label: '2026-27 SQP: Q32 (5M Compound Microscope)' },
  'imp-phy-9-q21': { sqpId: 'sqp-2027-q25', label: '2026-27 SQP: Q25 (Critical Angle & Prism)' },
  'imp-phy-9-q26': { sqpId: 'sqp-2027-q32', label: '2026-27 SQP: Q32 (5M Microscope Design)' },
  'imp-phy-10-q4': { sqpId: 'sqp-2027-q15', label: '2026-27 SQP: Q15 (YDSE Interference)' },
  'imp-phy-10-q5': { sqpId: 'sqp-2027-q15', label: '2026-27 SQP: Q15 (YDSE Intensity)' },
  'imp-phy-11-q2': { sqpId: 'sqp-2027-q30', label: '2026-27 SQP: Q30 (Case Study: Photoelectric)' },
  'imp-phy-11-q6': { sqpId: 'sqp-2027-q30', label: '2026-27 SQP: Q30 (Threshold & Stopping V₀)' },
  'imp-phy-12-ex4': { sqpId: 'sqp-2027-q21', label: '2026-27 SQP: Q21 (Hydrogen Spectral Lines)' },
  'imp-phy-12-q7': { sqpId: 'sqp-2027-q21', label: '2026-27 SQP: Q21 (Bohr Series Transition)' },
  'imp-phy-13-ex3': { sqpId: 'sqp-2027-q24', label: '2026-27 SQP: Q24 (Exact ¹⁶O Binding Energy)' },
  'imp-phy-13-q2': { sqpId: 'sqp-2027-q24', label: '2026-27 SQP: Q24 (3M Binding Energy)' },
  'imp-phy-14-ex1': { sqpId: 'sqp-2027-q22', label: '2026-27 SQP: Q22 (3M Energy Bands)' },
  'imp-phy-14-ex4': { sqpId: 'sqp-2027-q29', label: '2026-27 SQP: Q29 (Case Study: p-n Diode)' }
};

const getDerivationDiagram = (qId) => {
  const diagramId = DIAGRAM_MAPPING[qId];
  if (!diagramId) return null;
  const labels = {
    'ray-optics-instruments': 'Ray Optics: Mirrors, Refraction, Lenses & Instruments',
    'prism-dispersion': 'Prism Refraction, Minimum Deviation & TIR Condition',
    'huygens-wavefronts': 'Huygens Wavefronts: Types, Reflection & Refraction (Denser / Rarer)',
    'ydse-wave-optics': 'Wave Optics: YDSE Fringes & Interference Intensity',
    'single-slit-diffraction': 'Single-Slit Diffraction & Angular Width',
    'photoelectric-graphs': 'Photoelectric Effect: Stopping Potential vs Frequency',
    'bohr-atom-spectra': 'Bohr Model Orbits & Hydrogen Spectral Series',
    'nuclei-binding-force': 'Binding Energy per Nucleon Curve & Nuclear Force',
    'pn-junction-rectifier': 'Semiconductor Energy Bands, p-n Diode & V–I Curve'
  };
  return { diagramId, title: labels[diagramId] || 'Interactive Physics Diagram' };
};

export default function ImportantQuestionsTabContent({ 
  selectedSubject: propSelectedSubject = 'physics', 
  onJumpToChapter, 
  onSelectTab 
}) {
  // Current subject view: 'physics', 'chemistry', 'biology', 'psychology', or 'english'
  const [activeSubject, setActiveSubject] = useState(() => {
    if (['physics', 'chemistry', 'biology', 'psychology', 'english'].includes(propSelectedSubject)) {
      return propSelectedSubject;
    }
    return 'physics';
  });

  useEffect(() => {
    if (['physics', 'chemistry', 'biology', 'psychology', 'english'].includes(propSelectedSubject)) {
      setActiveSubject(propSelectedSubject);
    }
  }, [propSelectedSubject]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('ALL');
  const [selectedChapter, setSelectedChapter] = useState('ALL'); // 'ALL' | '9'..'14' (Physics)
  const [selectedSource, setSelectedSource] = useState('ALL'); // 'ALL' | 'NCERT Example' | 'NCERT Exercise' (Physics)
  const [selectedMarks, setSelectedMarks] = useState('ALL');
  const [selectedStatus, setSelectedStatus] = useState('ALL'); // 'ALL' | 'MASTERED' | 'PENDING'
  const [selectedCategory, setSelectedCategory] = useState('ALL'); // 'ALL' | 'CORE' | 'PAGE' (Biology only)
  const [onlyDiagrams, setOnlyDiagrams] = useState(false);
  const [expandedQuestions, setExpandedQuestions] = useState({});
  const [derivationDiagramOpen, setDerivationDiagramOpen] = useState({});
  const [isCompactMode, setIsCompactMode] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const [showPdfGuide, setShowPdfGuide] = useState(false);
  const [showDerivationsRef, setShowDerivationsRef] = useState(false);

  // Mastered state for Physics
  const [masteredPhysicsIds, setMasteredPhysicsIds] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_MASTERED_PHYSICS);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Mastered state for Chemistry
  const [masteredChemistryIds, setMasteredChemistryIds] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_MASTERED_CHEMISTRY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Mastered state for Biology
  const [masteredBiologyIds, setMasteredBiologyIds] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_MASTERED_BIOLOGY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Mastered state for Psychology
  const [masteredPsychologyIds, setMasteredPsychologyIds] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_MASTERED_PSYCHOLOGY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Mastered state for English
  const [masteredEnglishIds, setMasteredEnglishIds] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_MASTERED_ENGLISH);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_MASTERED_PHYSICS, JSON.stringify(masteredPhysicsIds));
    } catch (e) {
      console.error('Failed to save mastered physics questions:', e);
    }
  }, [masteredPhysicsIds]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_MASTERED_CHEMISTRY, JSON.stringify(masteredChemistryIds));
    } catch (e) {
      console.error('Failed to save mastered chemistry questions:', e);
    }
  }, [masteredChemistryIds]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_MASTERED_BIOLOGY, JSON.stringify(masteredBiologyIds));
    } catch (e) {
      console.error('Failed to save mastered biology questions:', e);
    }
  }, [masteredBiologyIds]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_MASTERED_PSYCHOLOGY, JSON.stringify(masteredPsychologyIds));
    } catch (e) {
      console.error('Failed to save mastered psychology questions:', e);
    }
  }, [masteredPsychologyIds]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_MASTERED_ENGLISH, JSON.stringify(masteredEnglishIds));
    } catch (e) {
      console.error('Failed to save mastered english questions:', e);
    }
  }, [masteredEnglishIds]);

  const isBiology = activeSubject === 'biology';
  const isChemistry = activeSubject === 'chemistry';
  const isPsychology = activeSubject === 'psychology';
  const isEnglish = activeSubject === 'english';
  const isPhysics = activeSubject === 'physics';

  const masteredIds = isEnglish
    ? masteredEnglishIds
    : isBiology
      ? masteredBiologyIds
      : isChemistry
        ? masteredChemistryIds
        : isPsychology
          ? masteredPsychologyIds
          : masteredPhysicsIds;

  const toggleMastered = (id) => {
    if (isEnglish) {
      setMasteredEnglishIds(prev => 
        prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
      );
    } else if (isBiology) {
      setMasteredBiologyIds(prev => 
        prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
      );
    } else if (isChemistry) {
      setMasteredChemistryIds(prev => 
        prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
      );
    } else if (isPsychology) {
      setMasteredPsychologyIds(prev => 
        prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
      );
    } else {
      setMasteredPhysicsIds(prev => 
        prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
      );
    }
  };

  const toggleExpand = (id) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSelectFromGuide = (qId) => {
    setShowPdfGuide(false);
    setTimeout(() => {
      const el = document.getElementById(qId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setExpandedQuestions(prev => ({ ...prev, [qId]: true }));
      }
    }, 150);
  };

  const handleCopyAnswer = (q) => {
    let textToCopy = `Question ${q.number}: ${q.title} (${q.marks})\n`;
    textToCopy += `Unit: ${q.unit} | Chapter: ${q.chapterTitle}\n\n`;

    if (q.ncertRef) {
      textToCopy += `NCERT Reference: ${q.ncertRef.textbook} - ${q.ncertRef.page || q.ncertRef.section}\n\n`;
    }

    textToCopy += `EXAM QUESTION:\n${q.questionPrompt}\n\n`;

    textToCopy += `PART 1: THEORY & MODEL ANSWER\n`;
    if (q.theory && q.theory.length > 0) {
      textToCopy += q.theory.map(t => `• ${t}`).join('\n') + '\n\n';
    } else if (q.modelAnswer?.statement) {
      textToCopy += `${q.modelAnswer.statement}\n\n`;
    }

    if (q.derivations && q.derivations.length > 0) {
      textToCopy += `PART 2: STEP-BY-STEP MATHEMATICAL DERIVATIONS\n`;
      textToCopy += q.derivations.map(d => {
        let dText = `[${d.name}]\n`;
        if (d.setup) dText += `Setup: ${d.setup}\n`;
        if (d.steps) {
          dText += d.steps.map(s => {
            if (typeof s === 'object' && s !== null) {
              return `${s.text || ''} ${s.equation ? '=> ' + s.equation : ''}`.trim();
            }
            return String(s);
          }).join('\n') + '\n';
        }
        if (d.specialCases && d.specialCases.length > 0) {
          dText += `Special Cases:\n` + d.specialCases.map(sc => `${sc.title}: ${sc.text} ${sc.equation || ''}`).join('\n') + '\n';
        }
        if (d.finalFormula) dText += `Final Formula: ${d.finalFormula}\n`;
        return dText;
      }).join('\n') + '\n';
    }

    if (q.diagram?.examDrawingGuide && q.diagram.examDrawingGuide.length > 0) {
      textToCopy += `PART 3: DIAGRAM & EXAM DRAWING GUIDE\n`;
      textToCopy += q.diagram.examDrawingGuide.map(g => `• ${g}`).join('\n') + '\n\n';
    }

    if (q.keyPointsAndKeywords && q.keyPointsAndKeywords.length > 0) {
      textToCopy += `HIGH-YIELD KEY POINTS & KEYWORDS\n`;
      textToCopy += q.keyPointsAndKeywords.map(k => `• ${k}`).join('\n') + '\n\n';
    }

    if (q.termsGlossary && q.termsGlossary.length > 0) {
      textToCopy += `GLOSSARY OF TERMS\n`;
      textToCopy += q.termsGlossary.map(t => `${t.term}: ${t.definition}`).join('\n') + '\n\n';
    }

    const copyMarking = q.markingScheme || q.modelAnswer?.markingScheme;
    if (copyMarking && copyMarking.length > 0) {
      textToCopy += `CBSE MARKING SCHEME BREAKDOWN:\n`;
      textToCopy += copyMarking.map(m => `• ${m}`).join('\n') + '\n\n';
    }

    const copyTips = q.examinerTips || q.modelAnswer?.examinerTips || q.examinerTip;
    if (copyTips) {
      textToCopy += `EXAMINER TIPS & COMMON PITFALLS:\n${copyTips}\n`;
    }

    navigator.clipboard?.writeText(textToCopy);
    setCopiedId(q.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Active question set based on subject
  const currentQuestions = isEnglish 
    ? IMPORTANT_ENGLISH_QUESTIONS 
    : isBiology
      ? ALL_BIG_ORANGE_QUESTIONS
      : isChemistry
        ? IMPORTANT_CHEMISTRY_QUESTIONS
        : isPsychology
          ? IMPORTANT_PSYCHOLOGY_QUESTIONS
          : IMPORTANT_PHYSICS_QUESTIONS;

  // Units list for filter
  const unitsList = useMemo(() => {
    const units = Array.from(new Set(currentQuestions.map(q => q.unit)));
    return ['ALL', ...units];
  }, [currentQuestions]);

  // Filtered questions
  const filteredQuestions = useMemo(() => {
    return currentQuestions.filter(q => {
      // Category filter (Biology only)
      if (isBiology && selectedCategory !== 'ALL') {
        if (selectedCategory === 'CORE' && q.section !== 'core') return false;
        if (selectedCategory === 'PAGE' && q.section !== 'page') return false;
      }

      // Physics Chapter & Source filters
      if (isPhysics) {
        if (selectedChapter !== 'ALL' && String(q.chapterNum) !== selectedChapter) return false;
        if (selectedSource !== 'ALL' && q.sourceType !== selectedSource) return false;
      }

      // Search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchTitle = q.title.toLowerCase().includes(query);
        const matchPrompt = q.questionPrompt.toLowerCase().includes(query);
        const matchRef = q.ncertRefCode?.toLowerCase().includes(query) || q.shortLabel?.toLowerCase().includes(query);
        const matchKeywords = q.keyPointsAndKeywords?.some(k => k.toLowerCase().includes(query));
        const matchTheory = q.theory?.some(t => t.toLowerCase().includes(query));
        const matchDerivations = (q.derivations || []).some(d => 
          d.name?.toLowerCase().includes(query) || d.finalFormula?.toLowerCase().includes(query)
        );
        const matchModel = (q.modelAnswer?.derivations || []).some(d => 
          d.name?.toLowerCase().includes(query) || d.formula?.toLowerCase().includes(query)
        );
        const matchNumber = q.number.toString() === query || `q${q.number}` === query;
        if (!matchTitle && !matchPrompt && !matchRef && !matchKeywords && !matchTheory && !matchDerivations && !matchModel && !matchNumber) {
          return false;
        }
      }

      // Unit filter
      if (selectedUnit !== 'ALL' && q.unit !== selectedUnit) {
        return false;
      }

      // Marks filter: supports single marks and multi-mark questions (e.g. '3 / 5 Marks', '2 / 5 Marks', '4 / 5 Marks')
      if (selectedMarks !== 'ALL') {
        const target = selectedMarks;
        const matchesMark = () => {
          if (q.marksNum === Number(target)) return true;
          if (Array.isArray(q.marksAllowed) && q.marksAllowed.includes(Number(target))) return true;
          if (typeof q.marks === 'string') {
            const digits = q.marks.match(/\b\d\b/g);
            if (digits && digits.includes(target)) return true;
          }
          return false;
        };
        if (!matchesMark()) return false;
      }

      // Status filter
      const isMastered = masteredIds.includes(q.id);
      if (selectedStatus === 'MASTERED' && !isMastered) return false;
      if (selectedStatus === 'PENDING' && isMastered) return false;

      // Diagrams only filter
      if (onlyDiagrams) {
        if (isBiology && !q.diagramId) return false;
        if (!isBiology && !DIAGRAM_MAPPING[q.id]) return false;
      }

      return true;
    });
  }, [currentQuestions, isBiology, isPhysics, selectedCategory, selectedChapter, selectedSource, searchQuery, selectedUnit, selectedMarks, selectedStatus, onlyDiagrams, masteredIds]);

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-300">
      {/* 1. Subject Switcher Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[var(--bg-surface)] p-2 rounded-2xl border border-[var(--border-default)] shadow-xs">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => {
              setActiveSubject('physics');
              setSelectedUnit('ALL');
              setSelectedChapter('ALL');
              setSelectedSource('ALL');
              setSelectedMarks('ALL');
              setSelectedCategory('ALL');
              setShowPdfGuide(false);
              setShowDerivationsRef(false);
            }}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 touch-manipulation ${
              isPhysics
                ? 'bg-[#5B7B9A] text-white shadow-xs'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
            }`}
          >
            <Zap size={15} />
            <span>Physics ({IMPORTANT_PHYSICS_QUESTIONS.length})</span>
          </button>

          <button
            onClick={() => {
              setActiveSubject('chemistry');
              setSelectedUnit('ALL');
              setSelectedChapter('ALL');
              setSelectedSource('ALL');
              setSelectedMarks('ALL');
              setSelectedCategory('ALL');
              setShowPdfGuide(false);
              setShowDerivationsRef(false);
            }}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 touch-manipulation ${
              isChemistry
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
            }`}
          >
            <FlaskConical size={15} />
            <span>Chemistry ({IMPORTANT_CHEMISTRY_QUESTIONS.length})</span>
          </button>

          <button
            onClick={() => {
              setActiveSubject('biology');
              setSelectedUnit('ALL');
              setSelectedChapter('ALL');
              setSelectedSource('ALL');
              setSelectedMarks('ALL');
              setSelectedCategory('ALL');
              setShowDerivationsRef(false);
            }}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 touch-manipulation ${
              isBiology
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
            }`}
          >
            <Dna size={15} />
            <span>Biology ({ALL_BIG_ORANGE_QUESTIONS.length})</span>
          </button>

          <button
            onClick={() => {
              setActiveSubject('psychology');
              setSelectedUnit('ALL');
              setSelectedChapter('ALL');
              setSelectedSource('ALL');
              setSelectedMarks('ALL');
              setSelectedCategory('ALL');
              setShowPdfGuide(false);
              setShowDerivationsRef(false);
            }}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 touch-manipulation ${
              isPsychology
                ? 'bg-purple-600 text-white shadow-xs'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
            }`}
          >
            <Brain size={15} />
            <span>Psychology ({IMPORTANT_PSYCHOLOGY_QUESTIONS.length})</span>
          </button>

          <button
            onClick={() => {
              setActiveSubject('english');
              setSelectedUnit('ALL');
              setSelectedChapter('ALL');
              setSelectedSource('ALL');
              setSelectedMarks('ALL');
              setSelectedCategory('ALL');
              setShowPdfGuide(false);
              setShowDerivationsRef(false);
            }}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 touch-manipulation ${
              isEnglish
                ? 'bg-amber-700 text-white shadow-xs'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
            }`}
          >
            <BookOpen size={15} />
            <span>English ({IMPORTANT_ENGLISH_QUESTIONS.length})</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          {isPhysics && (
            <button
              onClick={() => setShowDerivationsRef(prev => !prev)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer touch-manipulation flex items-center gap-1.5 shrink-0 ${
                showDerivationsRef
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                  : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <BookOpen size={13} />
              <span>{showDerivationsRef ? `${IMPORTANT_PHYSICS_QUESTIONS.length} Important Questions` : `${PHYSICS_DERIVATIONS_REFERENCE.length} Derivations Reference`}</span>
            </button>
          )}

          {isBiology && (
            <button
              onClick={() => setShowPdfGuide(prev => !prev)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer touch-manipulation flex items-center gap-1.5 shrink-0 ${
                showPdfGuide 
                  ? 'bg-amber-600 text-white border-amber-600 shadow-xs' 
                  : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <FileText size={13} />
              <span>{showPdfGuide ? 'Question Cards (71 Qs)' : '8-Page Reference Guide (PDF View)'}</span>
            </button>
          )}

          <button
            onClick={() => setIsCompactMode(prev => !prev)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer touch-manipulation flex items-center gap-1.5 shrink-0 ${
              isCompactMode 
                ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)] shadow-xs' 
                : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Layers size={13} />
            {isCompactMode ? 'Exit Quick Revision Mode' : 'Quick Revision Sheet'}
          </button>
        </div>
      </div>

      {/* 2. Main Content: PDF Guide / Derivations Panel or Question Cards Bank */}
      {isPhysics && showDerivationsRef ? (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/30">
            <div>
              <h2 className="text-base sm:text-lg font-extrabold text-[var(--text-primary)]">
                Complete {PHYSICS_DERIVATIONS_REFERENCE.length} Class 12 Physics Derivations (Ch 1–14 Reference Bank)
              </h2>
              <p className="text-xs text-[var(--text-secondary)]">
                Every chapter derivation from Ch 1–14 with physical setups, step-by-step KaTeX proofs, special cases, and chapter note links.
              </p>
            </div>
            <button
              onClick={() => setShowDerivationsRef(false)}
              className="px-3.5 py-1.5 rounded-xl bg-[var(--accent-primary)] text-white text-xs font-bold cursor-pointer hover:opacity-90 transition-opacity"
            >
              ← Back to {IMPORTANT_PHYSICS_QUESTIONS.length} Important Questions
            </button>
          </div>
          <PhysicsDerivationsReferencePanel
            defaultExpanded={true}
            onJumpToChapter={
              onJumpToChapter
                ? (chapterNum) =>
                    onJumpToChapter('physics', chapterNum >= 9 ? 'phy-vol-2' : 'phy-vol-1', `phy-ch-${chapterNum}`)
                : null
            }
          />
        </div>
      ) : isBiology && showPdfGuide ? (
        <BiologyPdfGuideViewer 
          onSelectQuestion={handleSelectFromGuide} 
          onBackToQuestions={() => setShowPdfGuide(false)}
        />
      ) : (
        <>
          {/* 2. Header Banner */}
          {!isBiology && (
            <div className="relative overflow-hidden rounded-3xl p-5 sm:p-6 shadow-sm border bg-gradient-to-br from-blue-500/10 via-[var(--bg-surface)] to-amber-500/10 border-blue-500/30">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full text-xs font-bold tracking-wide uppercase bg-amber-500/15 border border-amber-500/30 text-amber-500 dark:text-amber-400">
                  <Award size={14} className="text-amber-500" />
                  <span>
                    {isChemistry
                      ? 'Official CBSE Board • Top 20 Guaranteed Chemistry Questions'
                      : isPsychology
                        ? 'Official CBSE Board • Top 14 Guaranteed Psychology Questions'
                        : isEnglish
                          ? 'Official CBSE Board • High-Yield English Literature & Writing Bank'
                          : 'Official CBSE Board • Rationalized NCERT Chapters 9–14'}
                  </span>
                </div>
                
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
                  {isChemistry
                    ? 'Top 20 Chemistry Guaranteed Board Questions (All 10 Chapters)'
                    : isPsychology
                      ? 'Top 14 Psychology Guaranteed Board Questions (Units I–VII)'
                      : isEnglish
                        ? 'English Core (301) Guaranteed Board Question Bank'
                        : 'Important Questions'}
                </h1>
                
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-3xl leading-relaxed">
                  {isChemistry
                    ? 'Complete Physical Chemistry numerical frameworks, d/f-block & coordination reasoning, and Organic named reactions with CBSE marking schemes.'
                    : isPsychology
                      ? 'Structured 4-mark and 6-mark model answers covering intelligence theories, psychodynamic defence mechanisms, GAS, DSM-5 disorders, and therapies.'
                      : isEnglish
                        ? 'High-scoring thematic analyses, character sketches, poetic devices, and official CBSE marking rubrics across Flamingo & Vistas.'
                        : `All ${IMPORTANT_PHYSICS_QUESTIONS.length} high-yield Rationalized NCERT Physics questions (53 NCERT Examples & Exercises + 33 Board Theory & Derivations across Ch 9–14: Ray Optics, Wave Optics, Dual Nature, Atoms, Nuclei & Semiconductors) with complete step-by-step solutions and examiner tips.`}
                </p>
              </div>
            </div>
          )}

      {/* 3. Search & Filter Bar */}
      <div className="bg-[var(--bg-surface)] border border-[var(--border-default)] p-3.5 sm:p-4 rounded-2xl space-y-3 shadow-xs">
        {/* Search Input */}
        <div className="relative">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              isBiology 
                ? "Search Big Orange questions (e.g. 'Embryo sac', 'Lac operon', 'Hardy-Weinberg', 'Antibody', 'MTP', 'Down syndrome')..."
                : isPhysics
                  ? `Search ${IMPORTANT_PHYSICS_QUESTIONS.length} important questions (e.g. 'Huygens', 'Wavefront', 'YDSE', 'Diffraction', 'Einstein', 'de Broglie', '9.21')...`
                  : "Search questions, keywords, or formulas..."
            }
            className="w-full pl-10 pr-4 py-2 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] focus:border-[var(--accent-primary)] rounded-xl text-xs sm:text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-hidden transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        {/* Biology Category Tabs */}
        {isBiology && (
          <div className="flex flex-wrap items-center gap-2 pt-1 border-b border-[var(--border-subtle)] pb-2.5">
            <span className="text-[var(--text-muted)] text-xs font-semibold shrink-0">Category:</span>
            <button
              onClick={() => { setSelectedCategory('ALL'); setShowPdfGuide(false); }}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === 'ALL' && !showPdfGuide
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
              }`}
            >
              All Big Orange ({ALL_BIG_ORANGE_QUESTIONS.length})
            </button>

            <button
              onClick={() => { setSelectedCategory('CORE'); setShowPdfGuide(false); }}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === 'CORE' && !showPdfGuide
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
              }`}
            >
              Core High-Yield Questions ({BIG_ORANGE_CORE_QUESTIONS.length})
            </button>

            <button
              onClick={() => { setSelectedCategory('PAGE'); setShowPdfGuide(false); }}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === 'PAGE' && !showPdfGuide
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
              }`}
            >
              Page-Referenced &amp; Core Diagrams ({BIG_ORANGE_PAGE_QUESTIONS.length})
            </button>

            <button
              onClick={() => setShowPdfGuide(true)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                showPdfGuide
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
              }`}
            >
              <FileText size={12} />
              <span>Reference Guide (PDF 8 Pages)</span>
            </button>
          </div>
        )}

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
          {/* Unit Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5">
            <span className="text-[var(--text-muted)] font-medium shrink-0 flex items-center gap-1">
              <Filter size={12} /> Unit:
            </span>
            {unitsList.map(unit => (
              <button
                key={unit}
                onClick={() => setSelectedUnit(unit)}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer whitespace-nowrap touch-manipulation ${
                  selectedUnit === unit
                    ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                    : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                }`}
              >
                {unit === 'ALL' ? 'All Units' : unit}
              </button>
            ))}
          </div>

          <div className="h-4 w-[1px] bg-[var(--border-subtle)] hidden sm:block" />

          {/* Physics Chapter & Source Filters */}
          {isPhysics && (
            <>
              <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5">
                <span className="text-[var(--text-muted)] font-medium shrink-0">Chapter:</span>
                {['ALL', '9', '10', '11', '12', '13', '14'].map(ch => (
                  <button
                    key={ch}
                    onClick={() => setSelectedChapter(ch)}
                    className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer whitespace-nowrap touch-manipulation ${
                      selectedChapter === ch
                        ? 'bg-[#5B7B9A] text-white shadow-xs'
                        : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                    }`}
                  >
                    {ch === 'ALL' ? 'All (Ch 9–14)' : `Ch ${ch}`}
                  </button>
                ))}
              </div>

              <div className="h-4 w-[1px] bg-[var(--border-subtle)] hidden sm:block" />

              <div className="flex items-center gap-1.5">
                <span className="text-[var(--text-muted)] font-medium shrink-0">Source:</span>
                {[
                  { id: 'ALL', label: `All (${IMPORTANT_PHYSICS_QUESTIONS.length})` },
                  { id: 'NCERT Example', label: 'Examples' },
                  { id: 'NCERT Exercise', label: 'Exercises' },
                  { id: 'Board Theory & Derivation', label: 'Theory & Derivations' }
                ].map(src => (
                  <button
                    key={src.id}
                    onClick={() => setSelectedSource(src.id)}
                    className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer whitespace-nowrap touch-manipulation ${
                      selectedSource === src.id
                        ? 'bg-sky-600 text-white shadow-xs'
                        : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                    }`}
                  >
                    {src.label}
                  </button>
                ))}
              </div>

              <div className="h-4 w-[1px] bg-[var(--border-subtle)] hidden sm:block" />
            </>
          )}

          {/* Marks Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-[var(--text-muted)] font-medium shrink-0">Marks:</span>
            {[
              { id: 'ALL', label: 'All' },
              { id: '5', label: '5M' },
              { id: '4', label: '4M' },
              { id: '3', label: '3M' },
              { id: '2', label: '2M' },
              ...(isPhysics ? [{ id: '1', label: '1M' }] : [])
            ].map(m => (
              <button
                key={m.id}
                onClick={() => setSelectedMarks(m.id)}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer touch-manipulation ${
                  selectedMarks === m.id
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          <div className="h-4 w-[1px] bg-[var(--border-subtle)] hidden sm:block" />

          {/* Status Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-[var(--text-muted)] font-medium shrink-0">Status:</span>
            {[
              { id: 'ALL', label: 'All' },
              { id: 'PENDING', label: 'To Learn' },
              { id: 'MASTERED', label: 'Mastered' }
            ].map(s => (
              <button
                key={s.id}
                onClick={() => setSelectedStatus(s.id)}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer touch-manipulation ${
                  selectedStatus === s.id
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="h-4 w-[1px] bg-[var(--border-subtle)] hidden sm:block" />

          {/* Interactive Diagrams Filter */}
          <button
            onClick={() => setOnlyDiagrams(prev => !prev)}
            className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer touch-manipulation flex items-center gap-1.5 ${
              onlyDiagrams
                ? 'bg-purple-600 text-white shadow-xs'
                : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
            }`}
          >
            <Layers size={12} className={onlyDiagrams ? 'text-white' : 'text-purple-400'} />
            <span>Interactive Diagrams</span>
          </button>
        </div>
      </div>

      {/* 4. Question Cards List */}
      <div className="space-y-4">
        {filteredQuestions.length === 0 ? (
          <div className="text-center py-12 bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-default)] p-6 space-y-3">
            <AlertTriangle size={32} className="mx-auto text-amber-500" />
            <p className="text-sm font-semibold text-[var(--text-primary)]">No matching questions found</p>
            <p className="text-xs text-[var(--text-muted)]">Try relaxing your search query or clearing the filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedUnit('ALL');
                setSelectedChapter('ALL');
                setSelectedSource('ALL');
                setSelectedMarks('ALL');
                setSelectedStatus('ALL');
                setSelectedCategory('ALL');
                setOnlyDiagrams(false);
              }}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-primary-hover)] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredQuestions.map((q) => {
            const isMastered = masteredIds.includes(q.id);
            const isExpanded = !!expandedQuestions[q.id] || isCompactMode;
            const hasBiologyDiagram = isBiology && !!q.diagramId;
            const hasPhysicsDiagram = !isBiology && !!DIAGRAM_MAPPING[q.id];

            return (
              <div 
                key={q.id}
                id={q.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isMastered 
                    ? 'bg-[var(--bg-surface)] border-emerald-500/40 shadow-xs' 
                    : 'bg-[var(--bg-surface)] border-[var(--border-default)] hover:border-amber-500/40'
                }`}
              >
                {/* Question Header Bar */}
                <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[var(--bg-elevated)]/40 border-b border-[var(--border-subtle)]">
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    {/* Mastered Checkbox Button */}
                    <button
                      onClick={() => toggleMastered(q.id)}
                      className={`mt-0.5 p-1 rounded-lg transition-transform active:scale-90 cursor-pointer touch-manipulation ${
                        isMastered 
                          ? 'text-emerald-500 bg-emerald-500/10 hover:bg-emerald-500/20' 
                          : 'text-[var(--text-muted)] hover:text-emerald-500 hover:bg-[var(--bg-elevated)]'
                      }`}
                      title={isMastered ? 'Mark as needing revision' : 'Mark as mastered'}
                    >
                      {isMastered ? <CheckCircle2 size={20} /> : <Circle size={20} />}
                    </button>

                    {/* Question Number & Title */}
                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`font-mono text-xs font-extrabold px-2 py-0.5 rounded-md border ${
                          isBiology 
                            ? 'bg-amber-500/15 text-amber-500 dark:text-amber-400 border-amber-500/30'
                            : 'bg-blue-500/15 text-blue-500 border-blue-500/30'
                        }`}>
                          Q{q.number}
                        </span>
                        
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider ${
                          (q.marksNum >= 5 || (typeof q.marks === 'string' && q.marks.includes('5')))
                            ? 'bg-rose-500/15 text-rose-500 border border-rose-500/30' 
                            : (q.marksNum === 4 || (typeof q.marks === 'string' && q.marks.includes('4')))
                              ? 'bg-purple-500/15 text-purple-400 border border-purple-500/30'
                              : (q.marksNum === 3 || (typeof q.marks === 'string' && q.marks.includes('3')))
                                ? 'bg-blue-500/15 text-blue-500 border border-blue-500/30' 
                                : 'bg-emerald-500/15 text-emerald-500 border border-emerald-500/30'
                        }`}>
                          {q.marks}
                        </span>

                        {q.sourceType && (
                          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                            q.sourceType === 'NCERT Example'
                              ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                              : 'bg-sky-500/15 text-sky-600 dark:text-sky-300 border border-sky-500/30'
                          }`}>
                            {q.ncertRefCode ? `${q.sourceType}: ${q.ncertRefCode}` : q.sourceType}
                          </span>
                        )}

                        {q.category && (
                          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                            q.category.includes('Page')
                              ? 'bg-sky-500/15 text-sky-600 dark:text-sky-300 border border-sky-500/30'
                              : 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                          }`}>
                            {q.category}
                          </span>
                        )}

                        <span className="text-[11px] text-[var(--text-muted)] font-medium">
                          {q.unit} • {q.chapterTitle}
                        </span>

                        {q.ncertRef && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-500 dark:text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md border border-blue-500/25">
                            <BookOpen size={11} />
                            <span>{q.ncertRef.page || q.ncertRef.section?.split(':')[0]}</span>
                          </span>
                        )}

                        {(hasBiologyDiagram || hasPhysicsDiagram) && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-md border border-purple-500/30">
                            <Layers size={11} /> Diagram Card
                          </span>
                        )}

                        {isMastered && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                            <Check size={11} /> Mastered
                          </span>
                        )}

                        {SQP_CORRELATIONS[q.id] && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (onSelectTab) {
                                onSelectTab('SAMPLE_PAPER');
                                setTimeout(() => {
                                  const el = document.getElementById(SQP_CORRELATIONS[q.id].sqpId);
                                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                }, 250);
                              }
                            }}
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 px-2 py-0.5 rounded-md border border-blue-500/30 transition-colors cursor-pointer"
                            title="Jump to this question in the official 2026-27 Sample Question Paper"
                          >
                            <FileText size={11} />
                            <span>{SQP_CORRELATIONS[q.id].label}</span>
                          </button>
                        )}
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-[var(--text-primary)] leading-snug">
                        {q.title}
                      </h3>
                    </div>
                  </div>

                  {/* Header Actions */}
                  <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                    <button
                      onClick={() => handleCopyAnswer(q)}
                      className="p-2 rounded-xl text-xs font-medium border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-colors cursor-pointer touch-manipulation"
                      title="Copy complete model answer"
                    >
                      {copiedId === q.id ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                    </button>

                    {onJumpToChapter && (
                      <button
                        onClick={() => {
                          const chNum = parseInt((q.chapterId || '').split('-').pop(), 10) || 1;
                          let volId = 'phy-vol-1';
                          if (isBiology) volId = chNum >= 9 ? 'bio-vol-2' : 'bio-vol-1';
                          else if (isChemistry) volId = chNum >= 6 ? 'chem-vol-2' : 'chem-vol-1';
                          else if (isPsychology) volId = chNum >= 4 ? 'psy-vol-2' : 'psy-vol-1';
                          else if (isEnglish) volId = (q.chapterId || '').startsWith('eng-vis') ? 'eng-vol-2' : 'eng-vol-1';
                          else volId = chNum >= 9 ? 'phy-vol-2' : 'phy-vol-1';
                          onJumpToChapter(activeSubject, volId, q.chapterId);
                        }}
                        className="px-2.5 py-1.5 rounded-xl text-xs font-semibold border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-colors cursor-pointer touch-manipulation flex items-center gap-1"
                        title="Jump to full chapter notes"
                      >
                        <BookOpen size={13} />
                        <span className="hidden sm:inline">Chapter Notes</span>
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => toggleExpand(q.id)}
                      className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-primary-hover)] transition-all cursor-pointer touch-manipulation flex items-center gap-1 shadow-2xs"
                    >
                      {isExpanded ? (
                        <>
                          <span>Hide Answer</span>
                          <ChevronUp size={14} />
                        </>
                      ) : (
                        <>
                          <span>View Answer</span>
                          <ChevronDown size={14} />
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Question Prompt Callout */}
                <div className="p-4 sm:p-5 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)]/60">
                  <div className="p-3.5 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed whitespace-pre-line">
                    <span className="font-bold text-amber-500 block mb-1">Exam Question Framing:</span>
                    <FormattedLatex content={q.questionPrompt} />
                  </div>
                </div>

                {/* Expandable Model Answer Body */}
                {isExpanded && (
                  <div className="p-4 sm:p-6 space-y-6 bg-[var(--bg-surface)]">
                    {/* NCERT Official Textbook Reference Banner */}
                    {q.ncertRef && (
                      <div className="p-3.5 sm:p-4 rounded-xl bg-blue-500/10 border border-blue-500/25 space-y-1.5 shadow-2xs">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-bold text-[11px] font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                            <BookOpen size={13} />
                            NCERT Standard Textbook Reference:
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-600 dark:text-blue-300 font-mono text-[11px] font-bold">
                            {q.ncertRef.page || q.ncertRef.section}
                          </span>
                          {q.ncertRef.figures && (
                            <span className="text-[11px] font-mono text-[var(--text-muted)] font-medium">
                              • {q.ncertRef.figures}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                          <strong>{q.ncertRef.textbook}</strong> ({q.ncertRef.chapter})
                        </p>
                      </div>
                    )}

                    {/* PART 1: Theory / Model Answer */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-md text-[11px] font-extrabold uppercase tracking-wider bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30">
                          Part 1
                        </span>
                        <h4 className="text-xs font-extrabold uppercase tracking-wider text-[var(--accent-primary)]">
                          {isBiology ? 'Core Biological Principles & NCERT Definitions' : 'Theory & Physical Mechanism'}
                        </h4>
                      </div>
                      <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2.5">
                        {q.theory && q.theory.length > 0 ? (
                          q.theory.map((pt, ptIdx) => (
                            <div key={ptIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] mt-2 shrink-0" />
                              <FormattedLatex content={pt} />
                            </div>
                          ))
                        ) : (
                          <div className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed whitespace-pre-line">
                            {q.modelAnswer?.statement}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* PART 2: Step-by-Step Derivations / Mechanisms / Processes / Crosses */}
                    {q.derivations && q.derivations.length > 0 && (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-md text-[11px] font-extrabold uppercase tracking-wider bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                            Part 2
                          </span>
                          <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                            {isBiology 
                              ? 'Step-by-Step Biological Mechanism, Flowchart or Genetic Cross' 
                              : 'Step-by-Step Mathematical Derivations & Proofs'}
                          </h4>
                        </div>

                        <div className="space-y-4">
                          {q.derivations.map((d, dIdx) => {
                            const derivDiag = !isBiology ? getDerivationDiagram(q.id, dIdx) : null;
                            const diagKey = `${q.id}-${dIdx}`;
                            const isDiagOpen = derivationDiagramOpen[diagKey] !== false;

                            return (
                              <div key={dIdx} className="p-4 sm:p-5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-3.5">
                                <div className="flex items-center justify-between gap-2 border-b border-[var(--border-subtle)]/60 pb-2.5">
                                  <h5 className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 tracking-wide">
                                    • {d.name}
                                  </h5>

                                  {derivDiag && (
                                    <button
                                      onClick={() => setDerivationDiagramOpen(prev => ({
                                        ...prev,
                                        [diagKey]: prev[diagKey] === false ? true : false
                                      }))}
                                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 border border-purple-500/30 transition-colors cursor-pointer touch-manipulation"
                                      title={isDiagOpen ? "Hide visual diagram" : "Show visual diagram"}
                                    >
                                      <Layers size={12} />
                                      <span>{isDiagOpen ? 'Hide Diagram' : 'View Diagram'}</span>
                                    </button>
                                  )}
                                </div>

                                {d.setup && (
                                  <div className="text-xs sm:text-sm text-[var(--text-secondary)] italic leading-relaxed pl-2 border-l-2 border-emerald-500/50">
                                    <FormattedLatex content={d.setup} />
                                  </div>
                                )}

                                <div className="space-y-3 pt-1">
                                  {d.steps && d.steps.map((step, sIdx) => {
                                    const isObj = typeof step === 'object' && step !== null;
                                    const stepText = isObj ? step.text : step;
                                    const stepEq = isObj ? step.equation : null;

                                    return (
                                      <div key={sIdx} className="space-y-1.5 text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
                                        {stepText && (
                                          <div className="text-[var(--text-secondary)]">
                                            <FormattedLatex content={stepText} />
                                          </div>
                                        )}
                                        {stepEq && (
                                          <div className="p-2 sm:p-2.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] overflow-x-auto scrollbar-none my-1.5 shadow-2xs">
                                            <MathBlock math={stepEq} display={true} className="text-[var(--text-primary)]" />
                                          </div>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>

                                {derivDiag && isDiagOpen && (
                                  <div className="pt-2">
                                    <div className="text-[11px] font-bold text-[var(--text-muted)] mb-1.5 flex items-center gap-1.5 uppercase tracking-wide">
                                      <Layers size={12} className="text-purple-400" />
                                      <span>Labelled Derivation Schematic ({derivDiag.title})</span>
                                    </div>
                                    <PhysicsDiagramCard 
                                      diagramId={derivDiag.diagramId} 
                                      subMode={derivDiag.subMode} 
                                      inline={true} 
                                    />
                                  </div>
                                )}

                                {d.specialCases && d.specialCases.length > 0 && (
                                  <div className="p-3 rounded-lg bg-amber-500/5 border border-amber-500/20 space-y-2 mt-2">
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-500 block">
                                      {isBiology ? 'Critical Conditions, Exceptions & Controls:' : 'Special Cases & Critical Conditions:'}
                                    </span>
                                    {d.specialCases.map((sc, scIdx) => (
                                      <div key={scIdx} className="space-y-1 text-xs text-[var(--text-secondary)]">
                                        <div className="font-semibold text-[var(--text-primary)]">{sc.title}</div>
                                        {sc.text && <FormattedLatex content={sc.text} />}
                                        {sc.equation && (
                                          <div className="py-1">
                                            <MathBlock math={sc.equation} display={true} />
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                )}

                                {d.finalFormula && (
                                  <div className="p-3 rounded-xl bg-[var(--bg-surface)] border-2 border-emerald-500/40 text-center space-y-1 shadow-xs">
                                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block">
                                      {isBiology ? 'Final Key Result / Phenotypic Ratio / Output' : 'Final Boxed Result'}
                                    </span>
                                    <MathBlock math={d.finalFormula} display={true} className="text-emerald-600 dark:text-emerald-400 font-bold" />
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* PART 3: Diagram & Exam Drawing Guide */}
                    {((!isBiology && (DIAGRAM_MAPPING[q.id] || q.diagram?.hasDiagram)) || 
                      (isBiology && (q.diagramId || q.diagram?.diagramId || q.diagram?.hasDiagram))) && (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-md text-[11px] font-extrabold uppercase tracking-wider bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/30">
                            Part 3
                          </span>
                          <h4 className="text-xs font-extrabold uppercase tracking-wider text-purple-400">
                            {isBiology ? 'NCERT Diagram & CBSE Exam Drawing Guide' : 'Diagram & CBSE Exam Drawing Guide'}
                          </h4>
                        </div>

                        {!isBiology && DIAGRAM_MAPPING[q.id] && (
                          <PhysicsDiagramCard diagramId={DIAGRAM_MAPPING[q.id]} />
                        )}

                        {isBiology && (q.diagramId || q.diagram?.diagramId) && (
                          <BiologyDiagramCard diagramId={q.diagramId || q.diagram?.diagramId} />
                        )}

                        {q.diagram?.examDrawingGuide && q.diagram.examDrawingGuide.length > 0 && (
                          <div className="p-3.5 sm:p-4 rounded-xl bg-purple-500/5 border border-purple-500/20 space-y-2">
                            <span className="text-xs font-extrabold uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                              <Layers size={13} />
                              CBSE Board Exam Drawing &amp; Labeling Guidelines:
                            </span>
                            <ul className="space-y-1.5 text-xs text-[var(--text-secondary)] leading-relaxed pl-1">
                              {q.diagram.examDrawingGuide.map((guide, gIdx) => (
                                <li key={gIdx} className="flex items-start gap-2">
                                  <span className="text-purple-400 font-bold shrink-0">•</span>
                                  <span>{guide}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                    {/* PART 4: KEY POINTS & KEYWORDS */}
                    {q.keyPointsAndKeywords && q.keyPointsAndKeywords.length > 0 && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-md text-[11px] font-extrabold uppercase tracking-wider bg-amber-500/15 text-amber-500 dark:text-amber-400 border border-amber-500/30">
                            Part 4
                          </span>
                          <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-500 dark:text-amber-400">
                            High-Yield Key Points &amp; Mandatory Keywords
                          </h4>
                        </div>
                        <div className="p-3.5 sm:p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                          <div className="flex flex-wrap gap-2">
                            {q.keyPointsAndKeywords.map((k, kIdx) => (
                              <span 
                                key={kIdx}
                                className="px-2.5 py-1 rounded-lg bg-[var(--bg-elevated)] border border-amber-500/30 text-xs text-[var(--text-primary)] font-medium"
                              >
                                • {k}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Marking Scheme Breakdown & Examiner Tip */}
                    {(() => {
                      const markingList = q.markingScheme || q.modelAnswer?.markingScheme || [];
                      const tipsText = q.examinerTips || q.modelAnswer?.examinerTips || q.examinerTip;
                      if (markingList.length === 0 && !tipsText) return null;
                      return (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {markingList.length > 0 && (
                            <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1.5">
                              <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                                <Award size={13} />
                                CBSE Marking Scheme Breakdown
                              </h4>
                              <ul className="space-y-1 text-xs text-[var(--text-secondary)] leading-snug">
                                {markingList.map((mark, mIdx) => (
                                  <li key={mIdx} className="flex items-start gap-1.5">
                                    <span>•</span>
                                    <FormattedLatex content={mark} />
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {tipsText && (
                            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-1">
                              <h4 className="text-xs font-extrabold text-amber-500 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                                <AlertTriangle size={13} />
                                Examiner's Tips &amp; Common Mistakes
                              </h4>
                              <div className="text-xs text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                                <FormattedLatex content={tipsText} />
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })()}

                    {/* Toggle Mastered Button at bottom */}
                    <div className="pt-2 flex items-center justify-between border-t border-[var(--border-subtle)]">
                      <button
                        onClick={() => toggleMastered(q.id)}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer touch-manipulation ${
                          isMastered
                            ? 'bg-emerald-600 text-white shadow-xs'
                            : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-emerald-500 border border-[var(--border-subtle)]'
                        }`}
                      >
                        {isMastered ? <CheckCircle2 size={16} /> : <Circle size={16} />}
                        <span>{isMastered ? 'Marked as Mastered' : 'Mark as Mastered'}</span>
                      </button>

                      <button
                        onClick={() => toggleExpand(q.id)}
                        className="text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
                      >
                        Collapse Question
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
        </>
      )}
    </div>
  );
}
