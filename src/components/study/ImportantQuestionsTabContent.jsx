import { useState, useEffect, useMemo } from 'react';
import { 
  CheckCircle2, Circle, Search, Filter, BookOpen, 
  ChevronDown, ChevronUp, Copy, Check, Sparkles, Award, 
  ExternalLink, AlertTriangle, Layers, Zap, Bookmark, FileText,
  HelpCircle, AlignLeft
} from 'lucide-react';
import { IMPORTANT_PHYSICS_QUESTIONS } from '../../data/importantQuestionsData';
import PhysicsDiagramCard from './PhysicsDiagramCard';
import { FormattedLatex, MathBlock } from './LatexView';

const STORAGE_KEY_MASTERED = 'one_mastered_imp_physics_q';

const DIAGRAM_MAPPING = {
  'imp-phy-1': 'gauss-applications',
  'imp-phy-4': 'transformer',
  'imp-phy-5': 'galvanometer-torque',
  'imp-phy-15': 'wheatstone-bridge',
  'imp-phy-17': 'lcr-circuit',
  'imp-phy-18': 'dipole-fields',
  'imp-phy-20': 'parallel-wires',
  'imp-phy-22': 'galvanometer-conversion'
};

const SQP_CORRELATIONS = {
  'imp-phy-1': { sqpId: 'sqp-2027-q1', label: '2026-27 SQP: Q1 & Q20' },
  'imp-phy-4': { sqpId: 'sqp-2027-q33', label: '2026-27 SQP: Q33 (5M Transformer)' },
  'imp-phy-5': { sqpId: 'sqp-2027-q27', label: '2026-27 SQP: Q27 (3M Galvanometer)' },
  'imp-phy-6': { sqpId: 'sqp-2027-q1', label: '2026-27 SQP: Q1 (Electric Flux)' },
  'imp-phy-7': { sqpId: 'sqp-2027-q31', label: '2026-27 SQP: Q31 (Potential Gradient)' },
  'imp-phy-8': { sqpId: 'sqp-2027-q18', label: '2026-27 SQP: Q18 (Field due to Charge)' },
  'imp-phy-10': { sqpId: 'sqp-2027-q31', label: '2026-27 SQP: Q31 (5M Capacitance)' },
  'imp-phy-11': { sqpId: 'sqp-2027-q2', label: '2026-27 SQP: Q2 (Power & Potential)' },
  'imp-phy-12': { sqpId: 'sqp-2027-q8', label: '2026-27 SQP: Q8 (EM Waves Properties)' },
  'imp-phy-15': { sqpId: 'sqp-2027-q9', label: '2026-27 SQP: Q9 (Wheatstone Bridge)' },
  'imp-phy-16': { sqpId: 'sqp-2027-q20', label: '2026-27 SQP: Q20 (Magnetic Materials)' },
  'imp-phy-17': { sqpId: 'sqp-2027-q33', label: '2026-27 SQP: Q33 (5M Series LCR)' },
  'imp-phy-18': { sqpId: 'sqp-2027-q1', label: '2026-27 SQP: Q1 (Dipole & Field)' },
  'imp-phy-20': { sqpId: 'sqp-2027-q16', label: '2026-27 SQP: Q16 (Parallel Currents)' },
  'imp-phy-21': { sqpId: 'sqp-2027-q8', label: '2026-27 SQP: Q8 (Displacement Current)' },
  'imp-phy-22': { sqpId: 'sqp-2027-q27', label: '2026-27 SQP: Q27 (3M Ammeter Conversion)' }
};

const getDerivationDiagram = (qId, dIdx) => {
  if (qId === 'imp-phy-1') {
    if (dIdx === 0) return { diagramId: 'gauss-applications', subMode: 'wire', title: 'Gaussian Cylinder & Radial Field' };
    if (dIdx === 1) return { diagramId: 'gauss-applications', subMode: 'sheet', title: 'Gaussian Pillbox Piercing Sheet' };
    if (dIdx === 2) return { diagramId: 'gauss-applications', subMode: 'shell', title: 'Concentric Spherical Surfaces & Graph' };
  }
  if (qId === 'imp-phy-2') return { diagramId: 'force-conductor', title: 'Conductor in Uniform B-Field (F = ILB sinθ)' };
  if (qId === 'imp-phy-3') return { diagramId: 'faraday-lenz', title: "Lenz's Law & Induced Current Direction" };
  if (qId === 'imp-phy-4') return { diagramId: 'transformer', title: 'Transformer Core & Mutual Flux Linkage' };
  if (qId === 'imp-phy-5') return { diagramId: 'galvanometer-torque', title: 'Radial Magnetic Field & Deflection Torque' };
  if (qId === 'imp-phy-6') return { diagramId: 'electric-flux-dipole', title: 'Electric Flux & Dipole Field Lines' };
  if (qId === 'imp-phy-7') return { diagramId: 'equipotential-surfaces', title: 'Equipotential Surfaces & Normal Field Lines' };
  if (qId === 'imp-phy-8') return { diagramId: 'point-charge-field', title: 'Radial Field Lines of Point Charge' };
  if (qId === 'imp-phy-9') return { diagramId: 'field-lines-properties', title: 'Electric Field Lines Geometry & Properties' };
  if (qId === 'imp-phy-10') return { diagramId: 'capacitor-circuits', title: 'Series & Parallel Capacitor Networks' };
  if (qId === 'imp-phy-11') return { diagramId: 'cell-circuit', title: 'Cell with Internal Resistance & Load Circuit' };
  if (qId === 'imp-phy-12') return { diagramId: 'em-wave-structure', title: 'Transverse EM Wave: E and B Orthogonal Vectors' };
  if (qId === 'imp-phy-13') return { diagramId: 'ac-rms-waveform', title: 'Sinusoidal AC Waveform & RMS Value' };
  if (qId === 'imp-phy-14' || qId === 'imp-phy-21') return { diagramId: 'displacement-current', title: 'Charging Capacitor & Displacement Current' };
  if (qId === 'imp-phy-15') return { diagramId: 'wheatstone-bridge', title: 'Wheatstone Bridge Null-Deflection Circuit' };
  if (qId === 'imp-phy-16') return { diagramId: 'magnetic-materials', title: 'Magnetic Field Penetration (Dia, Para, Ferro)' };
  if (qId === 'imp-phy-17') {
    if (dIdx === 0) return { diagramId: 'lcr-circuit', subMode: 'phasor', title: 'Series LCR Phasor Diagram' };
    return { diagramId: 'lcr-circuit', subMode: 'resonance', title: 'Series LCR Resonance Curve' };
  }
  if (qId === 'imp-phy-18') {
    if (dIdx === 0) return { diagramId: 'dipole-fields', subMode: 'axial', title: 'Axial Field Vector Alignment' };
    return { diagramId: 'dipole-fields', subMode: 'equatorial', title: 'Equatorial Field Component Cancellation' };
  }
  if (qId === 'imp-phy-19') return { diagramId: 'energy-storage', title: 'Energy Storage in Electric & Magnetic Fields' };
  if (qId === 'imp-phy-20') return { diagramId: 'parallel-wires', subMode: 'attractive', title: 'Magnetic Forces on Parallel Currents' };
  if (qId === 'imp-phy-22') {
    if (dIdx === 0) return { diagramId: 'galvanometer-conversion', subMode: 'ammeter', title: 'Conversion to Ammeter (Parallel Shunt S)' };
    return { diagramId: 'galvanometer-conversion', subMode: 'voltmeter', title: 'Conversion to Voltmeter (Series High R)' };
  }
  return null;
};

export default function ImportantQuestionsTabContent({ onJumpToChapter, onSelectTab }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('ALL');
  const [selectedMarks, setSelectedMarks] = useState('ALL');
  const [selectedStatus, setSelectedStatus] = useState('ALL'); // 'ALL' | 'MASTERED' | 'PENDING'
  const [onlyDiagrams, setOnlyDiagrams] = useState(false);
  const [expandedQuestions, setExpandedQuestions] = useState({});
  const [derivationDiagramOpen, setDerivationDiagramOpen] = useState({});
  const [isCompactMode, setIsCompactMode] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  // Mastered state stored in localStorage
  const [masteredIds, setMasteredIds] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_MASTERED);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_MASTERED, JSON.stringify(masteredIds));
    } catch (e) {
      console.error('Failed to save mastered questions to storage:', e);
    }
  }, [masteredIds]);

  const toggleMastered = (id) => {
    setMasteredIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const toggleExpand = (id) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleCopyAnswer = (q) => {
    let textToCopy = `Question ${q.number}: ${q.title} (${q.marks})\n`;
    textToCopy += `Unit: ${q.unit} | Chapter: ${q.chapterTitle}\n\n`;

    if (q.ncertRef) {
      textToCopy += `NCERT Reference: ${q.ncertRef.textbook} - ${q.ncertRef.section}\n\n`;
    }

    textToCopy += `EXAM QUESTION:\n${q.questionPrompt}\n\n`;

    textToCopy += `PART 1: THEORY & PHYSICAL MECHANISM\n`;
    if (q.theory && q.theory.length > 0) {
      textToCopy += q.theory.map(t => `• ${t}`).join('\n') + '\n\n';
    } else {
      textToCopy += `${q.modelAnswer?.statement}\n\n`;
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
      textToCopy += `PART 4: HIGH-YIELD KEY POINTS & KEYWORDS\n`;
      textToCopy += q.keyPointsAndKeywords.map(k => `• ${k}`).join('\n') + '\n\n';
    }

    if (q.termsGlossary && q.termsGlossary.length > 0) {
      textToCopy += `GLOSSARY OF SYMBOLS & TERMS\n`;
      textToCopy += q.termsGlossary.map(t => `${t.term} (${t.symbol}): ${t.definition}`).join('\n') + '\n\n';
    }

    if (q.modelAnswer?.markingScheme && q.modelAnswer.markingScheme.length > 0) {
      textToCopy += `CBSE MARKING SCHEME BREAKDOWN:\n`;
      textToCopy += q.modelAnswer.markingScheme.map(m => `• ${m}`).join('\n') + '\n\n';
    }

    if (q.modelAnswer?.examinerTips) {
      textToCopy += `EXAMINER TIPS & COMMON PITFALLS:\n${q.modelAnswer.examinerTips}\n`;
    }

    navigator.clipboard?.writeText(textToCopy);
    setCopiedId(q.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Units list for filter
  const unitsList = useMemo(() => {
    const units = Array.from(new Set(IMPORTANT_PHYSICS_QUESTIONS.map(q => q.unit)));
    return ['ALL', ...units];
  }, []);

  // Filtered questions
  const filteredQuestions = useMemo(() => {
    return IMPORTANT_PHYSICS_QUESTIONS.filter(q => {
      // Search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchTitle = q.title.toLowerCase().includes(query);
        const matchPrompt = q.questionPrompt.toLowerCase().includes(query);
        const matchKeywords = q.keyPointsAndKeywords?.some(k => k.toLowerCase().includes(query));
        const matchDerivations = (q.derivations || []).some(d => 
          d.name?.toLowerCase().includes(query) || d.finalFormula?.toLowerCase().includes(query)
        );
        const matchModel = (q.modelAnswer?.derivations || []).some(d => 
          d.name?.toLowerCase().includes(query) || d.formula?.toLowerCase().includes(query)
        );
        const matchNumber = q.number.toString() === query || `q${q.number}` === query;
        if (!matchTitle && !matchPrompt && !matchKeywords && !matchDerivations && !matchModel && !matchNumber) {
          return false;
        }
      }

      // Unit filter
      if (selectedUnit !== 'ALL' && q.unit !== selectedUnit) {
        return false;
      }

      // Marks filter
      if (selectedMarks === '5' && q.marksNum !== 5) return false;
      if (selectedMarks === '3' && q.marksNum !== 3) return false;
      if (selectedMarks === '2' && q.marksNum !== 2) return false;

      // Status filter
      const isMastered = masteredIds.includes(q.id);
      if (selectedStatus === 'MASTERED' && !isMastered) return false;
      if (selectedStatus === 'PENDING' && isMastered) return false;

      // Diagrams only filter
      if (onlyDiagrams && !DIAGRAM_MAPPING[q.id]) return false;

      return true;
    });
  }, [searchQuery, selectedUnit, selectedMarks, selectedStatus, onlyDiagrams, masteredIds]);

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-300">
      {/* 1. Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500/10 via-[var(--bg-surface)] to-[var(--accent-primary)]/10 border border-amber-500/30 p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-500 dark:text-amber-400 text-xs font-bold tracking-wide uppercase">
              <Award size={14} className="text-amber-500" />
              <span>Official CBSE Board • 22 Core Questions</span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Top 22 Questions for the Exam
            </h1>
          </div>

          <button
            onClick={() => setIsCompactMode(prev => !prev)}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer touch-manipulation flex items-center gap-1.5 shrink-0 self-start sm:self-auto ${
              isCompactMode 
                ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)] shadow-xs' 
                : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Layers size={13} />
            {isCompactMode ? 'Exit Quick Revision Sheet' : 'Quick Revision Sheet Mode'}
          </button>
        </div>
      </div>

      {/* 2. Search & Filter Bar */}
      <div className="bg-[var(--bg-surface)] border border-[var(--border-default)] p-3.5 sm:p-4 rounded-2xl space-y-3 shadow-xs">
        {/* Search Input */}
        <div className="relative">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search within the 22 questions (e.g. 'Gauss', 'Transformer', 'Galvanometer', 'RMS', 'Wheatstone', 'RLC')..."
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

          {/* Marks Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-[var(--text-muted)] font-medium shrink-0">Marks:</span>
            {[
              { id: 'ALL', label: 'All' },
              { id: '5', label: '5M (Derivations)' },
              { id: '3', label: '3M' },
              { id: '2', label: '2M' }
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
            <span>Interactive Diagrams ({Object.keys(DIAGRAM_MAPPING).length})</span>
          </button>
        </div>
      </div>

      {/* 3. Question Cards List */}
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
                setSelectedMarks('ALL');
                setSelectedStatus('ALL');
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
                        <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-500 dark:text-amber-400 border border-amber-500/30">
                          Q{q.number}
                        </span>
                        
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider ${
                          q.marksNum === 5 
                            ? 'bg-rose-500/15 text-rose-500 border border-rose-500/30' 
                            : q.marksNum === 3 
                              ? 'bg-blue-500/15 text-blue-500 border border-blue-500/30' 
                              : 'bg-emerald-500/15 text-emerald-500 border border-emerald-500/30'
                        }`}>
                          {q.marks}
                        </span>

                        <span className="text-[11px] text-[var(--text-muted)] font-medium">
                          {q.unit} • {q.chapterTitle}
                        </span>

                        {q.ncertRef && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-500 dark:text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md border border-blue-500/25">
                            <BookOpen size={11} />
                            <span>{q.ncertRef.section.split(':')[0]}</span>
                          </span>
                        )}

                        {DIAGRAM_MAPPING[q.id] && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-md border border-purple-500/30">
                            <Layers size={11} /> Interactive Diagram
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
                        onClick={() => onJumpToChapter('physics', 'phy-vol-1', q.chapterId)}
                        className="px-2.5 py-1.5 rounded-xl text-xs font-semibold border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-colors cursor-pointer touch-manipulation flex items-center gap-1"
                        title="Jump to full chapter notes"
                      >
                        <BookOpen size={13} />
                        <span className="hidden sm:inline">Chapter Notes</span>
                      </button>
                    )}

                    <button
                      onClick={() => toggleExpand(q.id)}
                      className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-primary-hover)] transition-all cursor-pointer touch-manipulation flex items-center gap-1 shadow-2xs"
                    >
                      {isExpanded ? (
                        <>
                          <span>Hide</span>
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
                  <div className="p-3.5 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs sm:text-sm text-[var(--text-primary)] font-mono leading-relaxed whitespace-pre-line">
                    <span className="font-bold text-amber-500 block mb-1">Exam Question Framing:</span>
                    {q.questionPrompt}
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
                            {q.ncertRef.section}
                          </span>
                          {q.ncertRef.equations && (
                            <span className="text-[11px] font-mono text-[var(--text-muted)] font-medium">
                              • {q.ncertRef.equations}
                            </span>
                          )}
                          {q.ncertRef.figures && (
                            <span className="text-[11px] font-mono text-[var(--text-muted)] font-medium">
                              • {q.ncertRef.figures}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                          <strong>{q.ncertRef.textbook}</strong> ({q.ncertRef.chapter}) &mdash; {q.ncertRef.summary}
                        </p>
                      </div>
                    )}

                    {/* PART 1: Theory */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-md text-[11px] font-extrabold uppercase tracking-wider bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30">
                          Part 1
                        </span>
                        <h4 className="text-xs font-extrabold uppercase tracking-wider text-[var(--accent-primary)]">
                          Theory &amp; Physical Mechanism
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

                    {/* PART 2: Step-by-Step Derivations */}
                    {q.derivations && q.derivations.length > 0 && (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-md text-[11px] font-extrabold uppercase tracking-wider bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                            Part 2
                          </span>
                          <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                            Step-by-Step Mathematical Derivations &amp; Proofs
                          </h4>
                        </div>

                        <div className="space-y-4">
                          {q.derivations.map((d, dIdx) => {
                            const derivDiag = getDerivationDiagram(q.id, dIdx);
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

                                {/* Narrative setup matching the textbook screenshot */}
                                {d.setup && (
                                  <div className="text-xs sm:text-sm text-[var(--text-secondary)] italic leading-relaxed pl-2 border-l-2 border-emerald-500/50">
                                    <FormattedLatex content={d.setup} />
                                  </div>
                                )}

                                {/* Steps formatted with KaTeX math blocks and connecting sentences */}
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

                                {/* Embedded Visual Diagram right inside this derivation */}
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

                                {/* Special Cases & Critical Conditions */}
                                {d.specialCases && d.specialCases.length > 0 && (
                                  <div className="p-3 rounded-lg bg-amber-500/5 border border-amber-500/20 space-y-2 mt-2">
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-500 block">
                                      Special Cases &amp; Critical Conditions:
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

                                {/* Final Boxed Result Formula */}
                                {d.finalFormula && (
                                  <div className="p-3 rounded-xl bg-[var(--bg-surface)] border-2 border-emerald-500/40 text-center space-y-1 shadow-xs">
                                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block">
                                      Final Boxed Result
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
                    {(DIAGRAM_MAPPING[q.id] || q.diagram?.hasDiagram) && (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-md text-[11px] font-extrabold uppercase tracking-wider bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/30">
                            Part 3
                          </span>
                          <h4 className="text-xs font-extrabold uppercase tracking-wider text-purple-400">
                            Diagram &amp; CBSE Exam Drawing Guide
                          </h4>
                        </div>

                        {/* Interactive Visual Schematic Card */}
                        {DIAGRAM_MAPPING[q.id] && (
                          <PhysicsDiagramCard diagramId={DIAGRAM_MAPPING[q.id]} />
                        )}

                        {/* Drawing Checklist */}
                        {q.diagram?.examDrawingGuide && q.diagram.examDrawingGuide.length > 0 && (
                          <div className="p-3.5 sm:p-4 rounded-xl bg-purple-500/5 border border-purple-500/20 space-y-2">
                            <span className="text-xs font-extrabold uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                              <Layers size={13} />
                              CBSE Board Exam Drawing &amp; Labeling Guidelines:
                            </span>
                            <ul className="space-y-1.5 text-xs text-[var(--text-secondary)] leading-relaxed pl-1">
                              {q.diagram.examDrawingGuide.map((guide, gIdx) => (
                                <li key={gIdx} className="flex items-start gap-2">
                                  <span className="text-purple-400 font-bold">•</span>
                                  <FormattedLatex content={guide} />
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                    {/* PART 4: Key Points & Keywords */}
                    {q.keyPointsAndKeywords && q.keyPointsAndKeywords.length > 0 && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-md text-[11px] font-extrabold uppercase tracking-wider bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                            Part 4
                          </span>
                          <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-500 dark:text-amber-400">
                            High-Yield Key Points &amp; Examiner Keywords
                          </h4>
                        </div>
                        <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                          <div className="flex flex-wrap gap-2">
                            {q.keyPointsAndKeywords.map((kw, kwIdx) => (
                              <span
                                key={kwIdx}
                                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] shadow-2xs"
                              >
                                {kw}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* GLOSSARY OF SYMBOLS & TERMS */}
                    {q.termsGlossary && q.termsGlossary.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-xs font-extrabold uppercase tracking-wider text-[var(--text-secondary)] flex items-center gap-1.5">
                          <Bookmark size={13} />
                          Glossary of Symbols &amp; Physical Terms
                        </h4>
                        <div className="p-3.5 sm:p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2.5">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {q.termsGlossary.map((term, tIdx) => (
                              <div key={tIdx} className="p-2.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-1">
                                <div className="flex items-center justify-between gap-2 border-b border-[var(--border-subtle)]/50 pb-1">
                                  <span className="font-bold text-xs text-[var(--text-primary)]">
                                    {term.term}
                                  </span>
                                  <span className="px-1.5 py-0.5 rounded bg-[var(--bg-elevated)] text-[11px] font-mono text-[var(--accent-primary)] font-semibold">
                                    <MathBlock math={term.symbol} display={false} />
                                  </span>
                                </div>
                                <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                                  <FormattedLatex content={term.definition} />
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Marking Scheme Breakdown */}
                    {q.modelAnswer?.markingScheme && q.modelAnswer.markingScheme.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1.5">
                          <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                            <Award size={13} />
                            CBSE Marking Scheme Breakdown
                          </h4>
                          <ul className="space-y-1 text-xs text-[var(--text-secondary)] leading-snug">
                            {q.modelAnswer.markingScheme.map((mark, mIdx) => (
                              <li key={mIdx}>• {mark}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-1">
                          <h4 className="text-xs font-extrabold text-amber-500 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                            <AlertTriangle size={13} />
                            Examiner's Warning &amp; Common Mistakes
                          </h4>
                          <p className="text-xs text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                            {q.modelAnswer.examinerTips}
                          </p>
                        </div>
                      </div>
                    )}

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
    </div>
  );
}
