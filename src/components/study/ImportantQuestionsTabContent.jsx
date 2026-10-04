import { useState, useMemo, useEffect } from 'react';
import { 
  Flame, CheckCircle2, Circle, Search, Filter, BookOpen, 
  ChevronDown, ChevronUp, Copy, Check, Sparkles, Award, 
  ExternalLink, RotateCcw, AlertTriangle, Layers, Zap, Bookmark
} from 'lucide-react';
import { IMPORTANT_PHYSICS_QUESTIONS } from '../../data/importantQuestionsData';

const STORAGE_KEY_MASTERED = 'one_mastered_imp_physics_q';

export default function ImportantQuestionsTabContent({ onJumpToChapter }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('ALL');
  const [selectedMarks, setSelectedMarks] = useState('ALL');
  const [selectedStatus, setSelectedStatus] = useState('ALL'); // 'ALL' | 'MASTERED' | 'PENDING'
  const [expandedQuestions, setExpandedQuestions] = useState({});
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

  const expandAll = () => {
    const all = {};
    IMPORTANT_PHYSICS_QUESTIONS.forEach(q => { all[q.id] = true; });
    setExpandedQuestions(all);
  };

  const collapseAll = () => {
    setExpandedQuestions({});
  };

  const handleCopyAnswer = (q) => {
    const textToCopy = `Question ${q.number}: ${q.title} (${q.marks})\n\n` +
      `QUESTION:\n${q.questionPrompt}\n\n` +
      `STATEMENT:\n${q.modelAnswer.statement}\n\n` +
      `DERIVATION & KEY FORMULAS:\n` +
      q.modelAnswer.derivations.map(d => `${d.name}\n${d.steps.join('\n')}\nFormula: ${d.formula}`).join('\n\n') +
      `\n\nEXAMINER TIPS:\n${q.modelAnswer.examinerTips}`;

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
        const matchFormulas = q.modelAnswer.derivations.some(d => 
          d.name.toLowerCase().includes(query) || d.formula.toLowerCase().includes(query)
        );
        const matchNumber = q.number.toString() === query || `q${q.number}` === query;
        if (!matchTitle && !matchPrompt && !matchFormulas && !matchNumber) {
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

      return true;
    });
  }, [searchQuery, selectedUnit, selectedMarks, selectedStatus, masteredIds]);

  const masteredCount = masteredIds.length;
  const totalCount = IMPORTANT_PHYSICS_QUESTIONS.length;
  const progressPercent = Math.round((masteredCount / totalCount) * 100);

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-300">
      {/* 1. Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500/10 via-[var(--bg-surface)] to-[var(--accent-primary)]/10 border border-amber-500/30 p-5 sm:p-7 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-500 dark:text-amber-400 text-xs font-bold tracking-wide uppercase">
              <Flame size={14} className="animate-pulse" />
              <span>Official CBSE Board Hitlist • All 22 Questions</span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Top 22 Guaranteed Physics Questions
            </h1>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-2xl leading-relaxed">
              These exact 22 derivations and conceptual questions form the backbone of the CBSE Class 12 Physics theory paper (accounting for ~50+ out of 70 marks). Master each model answer, diagram, and step to guarantee full marks.
            </p>
          </div>

          {/* Mastery Progress Card */}
          <div className="shrink-0 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] p-4 rounded-2xl min-w-[240px] shadow-xs">
            <div className="flex items-center justify-between text-xs font-semibold mb-2">
              <span className="text-[var(--text-secondary)] flex items-center gap-1.5">
                <Award size={14} className="text-amber-500" />
                Exam Readiness
              </span>
              <span className="font-mono text-amber-500 dark:text-amber-400 font-bold">
                {masteredCount} / {totalCount} ({progressPercent}%)
              </span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full h-2.5 bg-[var(--bg-surface)] rounded-full overflow-hidden border border-[var(--border-subtle)]">
              <div 
                className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <div className="flex items-center justify-between mt-3 text-[11px] text-[var(--text-muted)]">
              <span>{progressPercent === 100 ? '🎉 All Mastered!' : `${totalCount - masteredCount} questions remaining`}</span>
              {masteredCount > 0 && (
                <button
                  onClick={() => setMasteredIds([])}
                  className="hover:text-rose-400 transition-colors cursor-pointer inline-flex items-center gap-1"
                  title="Reset all checkboxes"
                >
                  <RotateCcw size={10} />
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Action Bar (Expand all, compact mode toggle) */}
        <div className="mt-5 pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={expandAll}
              className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer touch-manipulation"
            >
              Expand All Answers
            </button>
            <button
              onClick={collapseAll}
              className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer touch-manipulation"
            >
              Collapse All
            </button>
          </div>

          <button
            onClick={() => setIsCompactMode(prev => !prev)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer touch-manipulation flex items-center gap-1.5 ${
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
              { id: 'MASTERED', label: 'Mastered ✓' }
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
                {m => s.label}
                {s.label}
              </button>
            ))}
          </div>
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

                        {isMastered && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                            <Check size={11} /> Mastered
                          </span>
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
                    {/* 1. Principle / Definition */}
                    <div className="space-y-1.5">
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-[var(--accent-primary)] flex items-center gap-1.5">
                        <Sparkles size={13} />
                        1. Definition / Principle Statement (Exam Answer Key)
                      </h4>
                      <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed whitespace-pre-line">
                        {q.modelAnswer.statement}
                      </div>
                    </div>

                    {/* 2. Step-by-Step Derivation & Formulas */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-blue-500 dark:text-blue-400 flex items-center gap-1.5">
                        <Zap size={13} />
                        2. Step-by-Step Mathematical Derivations & Proofs
                      </h4>
                      
                      <div className="space-y-3">
                        {q.modelAnswer.derivations.map((d, dIdx) => (
                          <div key={dIdx} className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2.5">
                            <h5 className="text-xs font-bold text-blue-400 tracking-wide">
                              • {d.name}
                            </h5>
                            
                            <ul className="space-y-1.5 text-xs text-[var(--text-secondary)] leading-relaxed pl-1">
                              {d.steps.map((step, sIdx) => (
                                <li key={sIdx} className="flex items-start gap-2">
                                  <span className="text-[var(--text-muted)] font-mono shrink-0">[{sIdx + 1}]</span>
                                  <span>{step}</span>
                                </li>
                              ))}
                            </ul>

                            {d.formula && (
                              <div className="mt-2 p-2.5 rounded-lg bg-[var(--bg-surface)] border border-blue-500/30 text-blue-500 dark:text-blue-400 font-mono text-xs font-bold text-center">
                                {d.formula}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 3. Schematic Diagram & CBSE Marking Scheme */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Diagram Guidance */}
                      <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1.5">
                        <h4 className="text-xs font-extrabold uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                          <Layers size={13} />
                          Schematic Diagram Guidance
                        </h4>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                          {q.modelAnswer.diagramNotes}
                        </p>
                      </div>

                      {/* Marking Scheme */}
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
                    </div>

                    {/* 4. Common Exam Pitfalls & Oswaal Tips */}
                    <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-1">
                      <h4 className="text-xs font-extrabold text-amber-500 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                        <AlertTriangle size={13} />
                        Examiner's Warning & Common Mistakes
                      </h4>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                        {q.modelAnswer.examinerTips}
                      </p>
                    </div>

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
                        <span>{isMastered ? 'Marked as Mastered ✓' : 'Mark as Mastered'}</span>
                      </button>

                      <button
                        onClick={() => toggleExpand(q.id)}
                        className="text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
                      >
                        Collapse Question ▲
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
