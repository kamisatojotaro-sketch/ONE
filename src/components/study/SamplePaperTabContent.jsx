import { useState, useMemo, useEffect } from 'react';
import { 
  FileText, CheckCircle2, Circle, Search, Filter, 
  ChevronDown, ChevronUp, Copy, Check, Award, 
  RotateCcw, AlertTriangle, Layers, BookOpen, ExternalLink,
  Sliders, Eye, EyeOff, Sparkles, HelpCircle
} from 'lucide-react';
import { PHYSICS_SAMPLE_PAPER_2026_27 } from '../../data/physicsSamplePaper2026_27';

const STORAGE_KEY_SQP_MASTERED = 'one_mastered_physics_sqp_2026_27';

export default function SamplePaperTabContent({ onJumpToChapter }) {
  const paper = PHYSICS_SAMPLE_PAPER_2026_27;

  // Filter & Search States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSection, setSelectedSection] = useState('ALL'); // 'ALL' | 'A' | 'B' | 'C' | 'D' | 'E'
  const [selectedType, setSelectedType] = useState('ALL');
  const [selectedStatus, setSelectedStatus] = useState('ALL'); // 'ALL' | 'SOLVED' | 'PENDING'
  const [onlyInternalChoice, setOnlyInternalChoice] = useState(false);

  // View Mode: 'study' (default with expandable marking scheme), 'question_only' (mock test style), 'marking_scheme' (examiner grading breakdown)
  const [viewMode, setViewMode] = useState('study');

  // Expanded marking schemes / answers
  const [expandedSolutions, setExpandedSolutions] = useState({});
  // Selected option tabs for questions with internal choices (hasOrChoice): 'MAIN' or 'OR'
  const [orChoiceSelections, setOrChoiceSelections] = useState({});
  // Interactive test answers for MCQs in mock mode
  const [userSelectedMcq, setUserSelectedMcq] = useState({});
  // Show instructions modal/card
  const [showInstructions, setShowInstructions] = useState(false);

  const [copiedId, setCopiedId] = useState(null);

  // Mastered / Solved status stored in localStorage
  const [masteredIds, setMasteredIds] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_SQP_MASTERED);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_SQP_MASTERED, JSON.stringify(masteredIds));
    } catch (e) {
      console.error('Failed to save SQP status:', e);
    }
  }, [masteredIds]);

  const toggleMastered = (id) => {
    setMasteredIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleExpand = (id) => {
    setExpandedSolutions((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const all = {};
    paper.questions.forEach((q) => { all[q.id] = true; });
    setExpandedSolutions(all);
  };

  const collapseAll = () => {
    setExpandedSolutions({});
  };

  const handleCopy = (q) => {
    const isOrSelected = orChoiceSelections[q.id] === 'OR';
    const textToCopy = `CBSE Class XII Physics (042) SQP 2026-27\n` +
      `Question ${q.number} (Section ${q.section}, ${q.marks} Mark${q.marks > 1 ? 's' : ''}) - ${q.chapter}\n\n` +
      `QUESTION:\n${isOrSelected && q.orQuestionText ? q.orQuestionText : q.questionText}\n\n` +
      `OFFICIAL MARKING SCHEME / SOLUTION:\n${q.markingScheme}\n\n` +
      (q.explanation ? `EXPLANATION / KEY CONCEPT:\n${q.explanation}\n` : '');

    navigator.clipboard?.writeText(textToCopy);
    setCopiedId(q.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Section summary meta
  const sectionStats = useMemo(() => {
    return {
      A: { count: 16, marks: 16, label: 'Section A (MCQs & A-R)', desc: '16 Qs × 1 Mark' },
      B: { count: 5, marks: 10, label: 'Section B (Short Answer I)', desc: '5 Qs × 2 Marks' },
      C: { count: 7, marks: 21, label: 'Section C (Short Answer II)', desc: '7 Qs × 3 Marks' },
      D: { count: 2, marks: 8, label: 'Section D (Case Studies)', desc: '2 Qs × 4 Marks' },
      E: { count: 3, marks: 15, label: 'Section E (Long Answer)', desc: '3 Qs × 5 Marks' }
    };
  }, []);

  // Filtered Questions
  const filteredQuestions = useMemo(() => {
    return paper.questions.filter((q) => {
      // Search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchNumber = q.number.toString() === query || `q${q.number}` === query;
        const matchText = q.questionText?.toLowerCase().includes(query) || false;
        const matchOrText = q.orQuestionText?.toLowerCase().includes(query) || false;
        const matchChapter = q.chapter?.toLowerCase().includes(query) || false;
        const matchScheme = q.markingScheme?.toLowerCase().includes(query) || false;
        const matchCase = q.casePassage?.toLowerCase().includes(query) || false;

        if (!matchNumber && !matchText && !matchOrText && !matchChapter && !matchScheme && !matchCase) {
          return false;
        }
      }

      // Section Filter
      if (selectedSection !== 'ALL' && q.section !== selectedSection) {
        return false;
      }

      // Type Filter
      if (selectedType !== 'ALL') {
        if (selectedType === 'MCQ' && q.type !== 'mcq') return false;
        if (selectedType === 'AR' && q.type !== 'assertion-reason') return false;
        if (selectedType === 'CASE' && q.type !== 'case-study') return false;
        if (selectedType === 'LONG' && q.type !== 'long-answer-5m') return false;
      }

      // Internal Choice Filter
      if (onlyInternalChoice && !q.hasOrChoice) {
        return false;
      }

      // Solved / Pending Status
      const isSolved = masteredIds.includes(q.id);
      if (selectedStatus === 'SOLVED' && !isSolved) return false;
      if (selectedStatus === 'PENDING' && isSolved) return false;

      return true;
    });
  }, [paper.questions, searchQuery, selectedSection, selectedType, onlyInternalChoice, selectedStatus, masteredIds]);

  const solvedCount = masteredIds.length;
  const totalCount = paper.questions.length;
  const solvedPercent = Math.round((solvedCount / totalCount) * 100);

  return (
    <div className="space-y-6 pb-16 animate-in fade-in duration-300">
      {/* 1. Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/10 via-[var(--bg-surface)] to-[var(--accent-primary)]/10 border border-blue-500/30 p-5 sm:p-7 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-wide uppercase">
              <Award size={14} className="text-blue-500" />
              <span>Official CBSE Sample Question Paper 2026–27</span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Class XII Physics (042) • Full Paper & Marking Scheme
            </h1>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-2xl leading-relaxed">
              Complete 70-mark sample paper with official CBSE step-by-step marking criteria, alternative choices, case-study questions, and model answers with exact point-wise distributions.
            </p>
          </div>

          {/* Progress Tracker Card */}
          <div className="shrink-0 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] p-4 rounded-2xl min-w-[240px] shadow-xs">
            <div className="flex items-center justify-between text-xs font-semibold mb-2">
              <span className="text-[var(--text-secondary)] flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-blue-500" />
                Paper Mastery
              </span>
              <span className="font-mono text-blue-600 dark:text-blue-400 font-bold">
                {solvedCount} / {totalCount} ({solvedPercent}%)
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2.5 bg-[var(--bg-surface)] rounded-full overflow-hidden border border-[var(--border-subtle)]">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-500 rounded-full"
                style={{ width: `${solvedPercent}%` }}
              />
            </div>

            <div className="flex items-center justify-between mt-3 text-[11px] text-[var(--text-muted)]">
              <span>{solvedPercent === 100 ? 'All 33 Questions Solved' : `${totalCount - solvedCount} questions left`}</span>
              {solvedCount > 0 && (
                <button
                  onClick={() => setMasteredIds([])}
                  className="hover:text-rose-400 transition-colors cursor-pointer inline-flex items-center gap-1"
                  title="Reset completion status"
                >
                  <RotateCcw size={10} />
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Exam Quick Specs Bar */}
        <div className="mt-5 pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[var(--text-secondary)] font-medium">
            <span className="bg-[var(--bg-surface)] px-2.5 py-1 rounded-lg border border-[var(--border-subtle)]">
              Max Marks: <strong className="text-[var(--text-primary)]">70</strong>
            </span>
            <span className="bg-[var(--bg-surface)] px-2.5 py-1 rounded-lg border border-[var(--border-subtle)]">
              Time Allowed: <strong className="text-[var(--text-primary)]">3 Hours</strong>
            </span>
            <span className="bg-[var(--bg-surface)] px-2.5 py-1 rounded-lg border border-[var(--border-subtle)]">
              Questions: <strong className="text-[var(--text-primary)]">33 (Sections A–E)</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowInstructions((prev) => !prev)}
              className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-blue-500 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer touch-manipulation flex items-center gap-1.5"
            >
              <HelpCircle size={13} className="text-blue-500" />
              {showInstructions ? 'Hide Instructions' : 'General Instructions'}
            </button>
          </div>
        </div>

        {/* Expandable Exam Instructions */}
        {showInstructions && (
          <div className="mt-4 p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            <h4 className="font-bold text-[var(--text-primary)] flex items-center gap-1.5 text-sm">
              <FileText size={15} className="text-blue-500" />
              Official CBSE General Instructions (Physics 042)
            </h4>
            <ul className="list-disc pl-5 space-y-1 leading-relaxed">
              {paper.examInfo.instructions.map((inst, idx) => (
                <li key={idx}>{inst}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 2. Mode Selector Bar (Study vs Question-Only vs Examiner Marking Scheme) */}
      <div className="bg-[var(--bg-surface)] border border-[var(--border-default)] p-3 sm:p-4 rounded-2xl flex flex-wrap items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider hidden sm:inline">
            Viewing Mode:
          </span>
          <div className="inline-flex p-1 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
            <button
              onClick={() => setViewMode('study')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer touch-manipulation flex items-center gap-1.5 ${
                viewMode === 'study'
                  ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <BookOpen size={13} />
              <span>Study & Solution Mode</span>
            </button>

            <button
              onClick={() => setViewMode('question_only')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer touch-manipulation flex items-center gap-1.5 ${
                viewMode === 'question_only'
                  ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <EyeOff size={13} />
              <span>Mock Test (Questions Only)</span>
            </button>

            <button
              onClick={() => {
                setViewMode('marking_scheme');
                expandAll();
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer touch-manipulation flex items-center gap-1.5 ${
                viewMode === 'marking_scheme'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Award size={13} />
              <span>Examiner Marking Scheme</span>
            </button>
          </div>
        </div>

        {/* Global Expand / Collapse for Solutions */}
        {viewMode !== 'question_only' && (
          <div className="flex items-center gap-2">
            <button
              onClick={expandAll}
              className="px-2.5 py-1.5 rounded-lg text-xs font-medium bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            >
              Expand All Solutions
            </button>
            <button
              onClick={collapseAll}
              className="px-2.5 py-1.5 rounded-lg text-xs font-medium bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            >
              Collapse All
            </button>
          </div>
        )}
      </div>

      {/* 3. Search & Section Filters Bar */}
      <div className="bg-[var(--bg-surface)] border border-[var(--border-default)] p-3.5 sm:p-4 rounded-2xl space-y-3 shadow-xs">
        {/* Search Input */}
        <div className="relative">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions by topic, formula or number (e.g. 'Gauss', 'Q31', 'Transformer', 'Snell', 'Capacitance')..."
            className="w-full pl-10 pr-4 py-2 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] focus:border-blue-500 rounded-xl text-xs sm:text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-hidden transition-colors"
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
          {/* Section Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5">
            <span className="text-[var(--text-muted)] font-medium shrink-0 flex items-center gap-1">
              <Filter size={12} /> Section:
            </span>
            <button
              onClick={() => setSelectedSection('ALL')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer whitespace-nowrap touch-manipulation ${
                selectedSection === 'ALL'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
              }`}
            >
              All (33 Qs)
            </button>
            {Object.entries(sectionStats).map(([secKey, sec]) => (
              <button
                key={secKey}
                onClick={() => setSelectedSection(secKey)}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer whitespace-nowrap touch-manipulation ${
                  selectedSection === secKey
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                }`}
                title={sec.desc}
              >
                Sec {secKey} ({sec.count} Qs • {sec.marks}M)
              </button>
            ))}
          </div>

          <div className="h-4 w-[1px] bg-[var(--border-subtle)] hidden sm:block" />

          {/* Type Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-[var(--text-muted)] font-medium shrink-0">Type:</span>
            {[
              { id: 'ALL', label: 'All' },
              { id: 'MCQ', label: 'MCQs' },
              { id: 'AR', label: 'Assertion-Reason' },
              { id: 'CASE', label: 'Case Studies' },
              { id: 'LONG', label: '5-Markers' }
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedType(t.id)}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer touch-manipulation ${
                  selectedType === t.id
                    ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                    : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="h-4 w-[1px] bg-[var(--border-subtle)] hidden sm:block" />

          {/* Internal Choice Only */}
          <button
            onClick={() => setOnlyInternalChoice((prev) => !prev)}
            className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer touch-manipulation flex items-center gap-1.5 ${
              onlyInternalChoice
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
            }`}
          >
            <Sliders size={12} className={onlyInternalChoice ? 'text-white' : 'text-amber-500'} />
            <span>Has OR Option</span>
          </button>

          <div className="h-4 w-[1px] bg-[var(--border-subtle)] hidden sm:block" />

          {/* Solved Status Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-[var(--text-muted)] font-medium shrink-0">Status:</span>
            {[
              { id: 'ALL', label: 'All' },
              { id: 'PENDING', label: 'To Solve' },
              { id: 'SOLVED', label: 'Solved' }
            ].map((s) => (
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
        </div>
      </div>

      {/* 4. Questions List */}
      <div className="space-y-5">
        {filteredQuestions.length === 0 ? (
          <div className="text-center py-12 bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-default)] p-6 space-y-3">
            <AlertTriangle size={32} className="mx-auto text-amber-500" />
            <p className="text-sm font-semibold text-[var(--text-primary)]">No matching questions found</p>
            <p className="text-xs text-[var(--text-muted)]">Try adjusting your filters or search terms.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedSection('ALL');
                setSelectedType('ALL');
                setSelectedStatus('ALL');
                setOnlyInternalChoice(false);
              }}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredQuestions.map((q) => {
            const isSolved = masteredIds.includes(q.id);
            const isExpanded = viewMode === 'marking_scheme' ? true : !!expandedSolutions[q.id];
            const isOrActive = orChoiceSelections[q.id] === 'OR';

            return (
              <div
                key={q.id}
                id={q.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden shadow-xs ${
                  isSolved
                    ? 'bg-[var(--bg-surface)] border-emerald-500/30 dark:border-emerald-500/20'
                    : 'bg-[var(--bg-surface)] border-[var(--border-default)] hover:border-blue-500/40'
                }`}
              >
                {/* Question Header Card */}
                <div className="p-4 sm:p-5 border-b border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-3 bg-[var(--bg-surface)]">
                  <div className="flex flex-wrap items-center gap-2.5">
                    {/* Mastery Checkbox */}
                    <button
                      onClick={() => toggleMastered(q.id)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer touch-manipulation ${
                        isSolved
                          ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                          : 'bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                      }`}
                      title={isSolved ? 'Mark as Unsolved' : 'Mark as Solved / Mastered'}
                    >
                      {isSolved ? (
                        <>
                          <CheckCircle2 size={13} className="text-emerald-500" />
                          <span>Solved</span>
                        </>
                      ) : (
                        <>
                          <Circle size={13} />
                          <span>Mark Solved</span>
                        </>
                      )}
                    </button>

                    {/* Question Number Badge */}
                    <span className="font-mono text-sm font-extrabold px-2.5 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                      Q{q.number}
                    </span>

                    {/* Section Badge */}
                    <span className="px-2 py-0.5 rounded-md bg-[var(--bg-elevated)] text-[var(--text-secondary)] text-xs font-semibold border border-[var(--border-subtle)]">
                      Section {q.section}
                    </span>

                    {/* Marks Badge */}
                    <span className="px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-600 dark:text-amber-400 text-xs font-bold border border-amber-500/20">
                      {q.marks} Mark{q.marks > 1 ? 's' : ''}
                    </span>

                    {/* Chapter Tag */}
                    <span className="text-xs text-[var(--text-secondary)] font-medium hidden sm:inline">
                      • {q.chapter}
                    </span>
                  </div>

                  {/* Actions (Copy, Toggle Solution) */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopy(q)}
                      className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors cursor-pointer"
                      title="Copy Question & Marking Scheme"
                    >
                      {copiedId === q.id ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                    </button>

                    {viewMode !== 'question_only' && (
                      <button
                        onClick={() => toggleExpand(q.id)}
                        className="px-3 py-1 rounded-lg text-xs font-semibold bg-[var(--bg-elevated)] hover:bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        <span>{isExpanded ? 'Hide Solution' : 'View Scheme'}</span>
                        {isExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                      </button>
                    )}
                  </div>
                </div>

                {/* Question Body */}
                <div className="p-4 sm:p-6 space-y-4">
                  {/* Case Passage (for Section D Case Studies) */}
                  {q.type === 'case-study' && q.casePassage && (
                    <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed space-y-2">
                      <div className="font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                        <BookOpen size={13} />
                        Case Study Context
                      </div>
                      <p className="whitespace-pre-line">{q.casePassage}</p>
                    </div>
                  )}

                  {/* Internal Choice Switcher if question has OR option */}
                  {q.hasOrChoice && (
                    <div className="inline-flex p-1 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs">
                      <button
                        onClick={() => setOrChoiceSelections((prev) => ({ ...prev, [q.id]: 'MAIN' }))}
                        className={`px-3 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                          !isOrActive
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                        }`}
                      >
                        Option A (Primary)
                      </button>
                      <button
                        onClick={() => setOrChoiceSelections((prev) => ({ ...prev, [q.id]: 'OR' }))}
                        className={`px-3 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                          isOrActive
                            ? 'bg-amber-600 text-white shadow-xs'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                        }`}
                      >
                        Option B (OR Choice)
                      </button>
                    </div>
                  )}

                  {/* Active Question Text */}
                  <div className="text-sm sm:text-base text-[var(--text-primary)] font-medium leading-relaxed whitespace-pre-line">
                    {isOrActive && q.orQuestionText ? q.orQuestionText : q.questionText}
                  </div>

                  {/* MCQs Option Selector (Section A & Sub-questions) */}
                  {q.options && q.options.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {q.options.map((opt, optIdx) => {
                        const optKey = opt.charAt(0);
                        const isUserChoice = userSelectedMcq[q.id] === optKey;
                        const isCorrect = q.correctOption === optKey;
                        const showCorrectness = viewMode !== 'question_only' || isUserChoice;

                        let cardStyle = 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] hover:border-blue-400';
                        if (showCorrectness && isCorrect && isExpanded) {
                          cardStyle = 'bg-emerald-500/10 border-emerald-500/40 text-emerald-700 dark:text-emerald-300 font-semibold';
                        } else if (isUserChoice) {
                          cardStyle = 'bg-blue-500/15 border-blue-500/40 text-blue-700 dark:text-blue-300 font-semibold';
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => setUserSelectedMcq((prev) => ({ ...prev, [q.id]: optKey }))}
                            className={`p-3 rounded-xl border text-left text-xs sm:text-sm transition-all cursor-pointer touch-manipulation flex items-start gap-2.5 ${cardStyle}`}
                          >
                            <span className="font-mono font-bold text-xs px-1.5 py-0.5 rounded-md bg-[var(--bg-surface)] border border-[var(--border-subtle)] shrink-0">
                              {optKey}
                            </span>
                            <span className="leading-snug">{opt.slice(3)}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Assertion-Reason Standard CBSE Rules Hint */}
                  {q.type === 'assertion-reason' && (
                    <div className="p-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)] space-y-1">
                      <span className="font-semibold text-[var(--text-secondary)]">Assertion-Reason Marking Key:</span>
                      <p>(A) Both A and R are true and R is correct explanation of A.</p>
                      <p>(B) Both A and R are true but R is NOT correct explanation of A.</p>
                      <p>(C) A is true but R is false. • (D) A is false but R is true.</p>
                    </div>
                  )}

                  {/* Case Study Sub-questions (Section D) */}
                  {q.type === 'case-study' && q.subQuestions && q.subQuestions.length > 0 && (
                    <div className="space-y-3 pt-2">
                      <div className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">
                        Case Study Questions:
                      </div>
                      {q.subQuestions.map((sq, sqIdx) => (
                        <div key={sqIdx} className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-blue-600 dark:text-blue-400">
                              Part ({sq.part})
                            </span>
                            <span className="text-[11px] font-semibold text-amber-500">
                              {sq.marks} Mark
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-[var(--text-primary)] font-medium">
                            {sq.question}
                          </p>
                          {sq.options && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 text-xs">
                              {sq.options.map((sopt, soptIdx) => (
                                <div key={soptIdx} className="p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
                                  {sopt}
                                </div>
                              ))}
                            </div>
                          )}
                          {isExpanded && sq.markingScheme && (
                            <div className="mt-2 p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-800 dark:text-emerald-200">
                              <span className="font-bold block mb-1">Marking Scheme:</span>
                              <p className="whitespace-pre-line">{sq.markingScheme}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* 5. Official CBSE Marking Scheme (Collapsible / Full Examiner View) */}
                {(isExpanded || viewMode === 'marking_scheme') && (
                  <div className="border-t border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 p-4 sm:p-6 space-y-4 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Award size={15} className="text-blue-500" />
                        <h4 className="font-bold text-xs sm:text-sm text-[var(--text-primary)] uppercase tracking-wide">
                          Official CBSE Marking Scheme & Value Points
                        </h4>
                      </div>
                      <span className="text-[11px] font-mono text-[var(--text-muted)] bg-[var(--bg-surface)] px-2 py-0.5 rounded-md border border-[var(--border-subtle)]">
                        Max: {q.marks}M
                      </span>
                    </div>

                    {/* Marking Scheme Value Points */}
                    <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-default)] text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed space-y-2">
                      <div className="whitespace-pre-line font-mono text-xs text-[var(--text-primary)]">
                        {q.markingScheme}
                      </div>
                    </div>

                    {/* Teacher Explanation / Examiner Tips */}
                    {q.explanation && (
                      <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-[var(--text-secondary)] space-y-1">
                        <div className="font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                          <Sparkles size={12} />
                          Examiner Concept Breakdown
                        </div>
                        <p className="leading-relaxed">{q.explanation}</p>
                      </div>
                    )}
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
