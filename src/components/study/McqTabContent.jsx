import { useState, useMemo, useEffect } from 'react';
import { CheckCircle2, XCircle, RotateCcw, CheckSquare, Filter, Sparkles, Trophy, RotateCw, ArrowRight, ChevronDown } from 'lucide-react';
import { getGeneratedMCQs } from '../../data/questionEngine';
import { NCERT_SYLLABUS } from '../../data/ncertSyllabus';

export default function McqTabContent({
  selectedSubject,
  selectedChapter,
  selectedSubchapter,
  onSelectChapter
}) {
  const [seed, setSeed] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [chapterFilter, setChapterFilter] = useState(selectedChapter || 'ALL');
  const [subchapterFilter, setSubchapterFilter] = useState(selectedSubchapter || 'ALL');
  const [difficultyFilter, setDifficultyFilter] = useState('ALL'); // 'ALL' | 'easy' | 'medium' | 'hard'

  // Sync when selectedChapter changes from parent
  useEffect(() => {
    if (selectedChapter) {
      setChapterFilter(selectedChapter);
    } else {
      setChapterFilter('ALL');
    }
    setSubchapterFilter(selectedSubchapter || 'ALL');
    setSelectedAnswers({});
  }, [selectedChapter, selectedSubchapter]);

  // Extract chapters for this subject
  const subject = NCERT_SYLLABUS[selectedSubject];
  const availableChapters = useMemo(() => {
    if (!subject) return [];
    const list = [];
    subject.volumes.forEach(vol => {
      vol.chapters.forEach(ch => {
        list.push({ id: ch.id, title: `Ch ${ch.number}: ${ch.title}`, raw: ch });
      });
    });
    return list;
  }, [subject]);

  // Extract subchapters when a specific chapter is selected
  const availableSubchapters = useMemo(() => {
    if (!subject || chapterFilter === 'ALL') return [];
    for (const vol of subject.volumes) {
      const ch = vol.chapters.find(c => c.id === chapterFilter);
      if (ch && ch.subchapters) return ch.subchapters;
    }
    return [];
  }, [subject, chapterFilter]);

  // Generate 20 MCQs dynamically with strict scoping and difficulty filter
  const mcqs = useMemo(() => {
    const chId = chapterFilter === 'ALL' ? null : chapterFilter;
    const subId = subchapterFilter === 'ALL' ? null : subchapterFilter;
    return getGeneratedMCQs(selectedSubject, chId, subId, 20, seed, difficultyFilter);
  }, [selectedSubject, chapterFilter, subchapterFilter, seed, difficultyFilter]);

  const handleSelectOption = (questionId, optionIdx) => {
    if (selectedAnswers[questionId] !== undefined) return; // locked once chosen
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIdx }));
  };

  const handleRefreshNewBatch = () => {
    setSeed(prev => prev + 1);
    setSelectedAnswers({});
  };

  const handleResetCurrent = () => {
    setSelectedAnswers({});
  };

  // Score computation
  const stats = useMemo(() => {
    let answered = 0;
    let correct = 0;

    mcqs.forEach(q => {
      const ans = selectedAnswers[q.id];
      if (ans !== undefined) {
        answered++;
        if (ans === q.correct) {
          correct++;
        }
      }
    });

    const isAllFinished = mcqs.length > 0 && answered === mcqs.length;

    return {
      answered,
      correct,
      total: mcqs.length,
      percentage: answered > 0 ? Math.round((correct / answered) * 100) : 0,
      isAllFinished
    };
  }, [mcqs, selectedAnswers]);

  // Live breakdown of questions by difficulty
  const difficultyCounts = useMemo(() => {
    const fullBatch = getGeneratedMCQs(
      selectedSubject,
      chapterFilter === 'ALL' ? null : chapterFilter,
      subchapterFilter === 'ALL' ? null : subchapterFilter,
      50,
      seed,
      null
    );
    const counts = { ALL: fullBatch.length, easy: 0, medium: 0, hard: 0 };
    fullBatch.forEach(q => {
      if (counts[q.difficulty] !== undefined) counts[q.difficulty]++;
    });
    return counts;
  }, [selectedSubject, chapterFilter, subchapterFilter, seed]);

  return (
    <div className="space-y-4 sm:space-y-6 animate-in fade-in duration-300">
      {/* Top Banner with Quiz Stats & Chapter/Subchapter Filter */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3.5 p-4 sm:p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)]">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--bg-surface)] text-[11px] font-mono text-[var(--accent-primary)] font-semibold uppercase tracking-wider mb-1.5 border border-[var(--border-subtle)]">
            <Sparkles size={11} />
            <span>20 Questions per Session • 1000+ Question Pool</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
            <CheckSquare size={20} className="text-[var(--accent-primary)] shrink-0" />
            Board MCQ Practice
          </h3>
          <p className="font-sans text-xs text-[var(--text-secondary)] mt-1">
            {chapterFilter === 'ALL'
              ? 'Practicing full board mock set across all syllabus chapters.'
              : subchapterFilter === 'ALL'
              ? `Strictly scoped to ${availableChapters.find(c => c.id === chapterFilter)?.title || 'active chapter'}.`
              : `Curated exclusively for subchapter: ${availableSubchapters.find(s => s.id === subchapterFilter)?.title || subchapterFilter}.`}
          </p>
        </div>

        {/* Filter & Controls */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          {/* Chapter Filter */}
          <div className="flex items-center gap-1.5">
            <Filter size={13} className="text-[var(--text-muted)] shrink-0" />
            <div className="relative w-full sm:w-52">
              <select
                value={chapterFilter}
                onChange={(e) => {
                  const val = e.target.value;
                  setChapterFilter(val);
                  setSubchapterFilter('ALL');
                  setSelectedAnswers({});
                  if (onSelectChapter && val !== 'ALL') {
                    onSelectChapter(val);
                  }
                }}
                className="w-full appearance-none bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-default)] px-3 py-1.5 pr-8 rounded-xl font-medium text-xs cursor-pointer hover:border-[var(--accent-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)] transition-colors shadow-xs"
              >
                <option value="ALL">All Syllabus Chapters</option>
                {availableChapters.map((ch) => (
                  <option key={ch.id} value={ch.id}>
                    {ch.title}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--text-muted)]" />
            </div>
          </div>

          {/* Subchapter Filter (when chapter is selected) */}
          {chapterFilter !== 'ALL' && availableSubchapters.length > 0 && (
            <div className="relative w-full sm:w-56">
              <select
                value={subchapterFilter}
                onChange={(e) => {
                  setSubchapterFilter(e.target.value);
                  setSelectedAnswers({});
                }}
                className="w-full appearance-none bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-default)] px-3 py-1.5 pr-8 rounded-xl font-medium text-xs cursor-pointer hover:border-[var(--accent-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)] transition-colors shadow-xs"
              >
                <option value="ALL">All Subchapters in Ch</option>
                {availableSubchapters.map((sub) => (
                  <option key={sub.id} value={sub.id}>
                    {sub.title}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--text-muted)]" />
            </div>
          )}

          {/* Refresh New 20 Questions */}
          <button
            onClick={handleRefreshNewBatch}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[var(--border-default)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] transition-colors cursor-pointer shadow-xs"
            title="Generate a completely new set of 20 MCQs"
          >
            <RotateCw size={13} />
            Next 20 Set
          </button>
        </div>
      </div>

      {/* Difficulty Header Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-xs">
        <div className="flex items-center gap-2 text-xs">
          <span className="font-bold text-[var(--text-primary)]">Difficulty Header:</span>
          <span className="text-[var(--text-muted)] hidden sm:inline">•</span>
          <span className="text-[var(--text-secondary)] hidden sm:inline">Filter by question cognitive depth</span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {[
            { id: 'ALL', label: 'All Levels', count: difficultyCounts.ALL, color: 'border-[var(--border-default)]' },
            { id: 'easy', label: 'Easy (NCERT Core)', count: difficultyCounts.easy, color: 'text-emerald-600 dark:text-emerald-400 border-emerald-500/30' },
            { id: 'medium', label: 'Medium (Board)', count: difficultyCounts.medium, color: 'text-amber-600 dark:text-amber-400 border-amber-500/30' },
            { id: 'hard', label: 'Hard (HOTS)', count: difficultyCounts.hard, color: 'text-rose-600 dark:text-rose-400 border-rose-500/30' }
          ].map(lvl => (
            <button
              key={lvl.id}
              onClick={() => {
                setDifficultyFilter(lvl.id);
                setSelectedAnswers({});
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-all cursor-pointer flex items-center gap-1.5 ${
                difficultyFilter === lvl.id
                  ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)] shadow-xs font-bold'
                  : `bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)] ${lvl.color}`
              }`}
            >
              <span>{lvl.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                difficultyFilter === lvl.id ? 'bg-white/20 text-white' : 'bg-[var(--bg-surface)] text-[var(--text-muted)]'
              }`}>
                {lvl.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Live Quiz Score Tracker */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 p-3.5 sm:p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-xs text-xs">
        <div className="flex items-center gap-2">
          <Trophy size={16} className="text-[var(--accent-primary)] shrink-0" />
          <span className="font-medium text-[var(--text-secondary)]">Current Score:</span>
          <span className="font-mono font-bold text-[var(--accent-primary)]">
            {stats.correct} / {stats.answered} Correct
          </span>
          {stats.answered > 0 && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--bg-elevated)] text-[var(--text-muted)]">
              {stats.percentage}% accuracy
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[var(--text-muted)] font-mono text-[11px]">
            {stats.answered} of {stats.total} Answered
          </span>
          <button
            onClick={handleResetCurrent}
            className="text-[11px] font-medium text-[var(--text-secondary)] hover:text-[var(--accent-primary)] underline cursor-pointer"
          >
            Retry Current Set
          </button>
        </div>
      </div>

      {/* Completion Banner when all 20 are answered */}
      {stats.isAllFinished && (
        <div className="p-4 sm:p-5 rounded-2xl bg-[var(--accent-primary)]/15 border border-[var(--accent-primary)] text-center space-y-2 animate-in fade-in duration-300">
          <h4 className="font-serif text-lg sm:text-xl font-bold text-[var(--text-primary)]">
            🎉 Set Completed! You scored {stats.correct} / {stats.total} ({stats.percentage}%)
          </h4>
          <p className="font-sans text-xs text-[var(--text-secondary)]">
            Ready to test yourself on 20 brand new questions from the 1000+ pool?
          </p>
          <button
            onClick={handleRefreshNewBatch}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--accent-primary)] text-white text-xs font-bold font-serif hover:bg-[var(--accent-primary-hover)] transition-all cursor-pointer shadow-md"
          >
            <span>Practice Next 20 Questions</span>
            <ArrowRight size={14} />
          </button>
        </div>
      )}

      {/* 20 MCQs List */}
      <div className="space-y-4 sm:space-y-6">
        {mcqs.map((q, idx) => {
          const userChoice = selectedAnswers[q.id];
          const isAnswered = userChoice !== undefined;

          return (
            <div
              key={q.id || idx}
              className="bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-2xl p-4 sm:p-6 shadow-sm space-y-3 sm:space-y-4"
            >
              <div className="flex items-start gap-2.5 sm:gap-3">
                <span className="font-mono text-xs font-bold px-2 py-0.5 sm:py-1 rounded bg-[var(--bg-elevated)] text-[var(--text-secondary)] shrink-0">
                  Q{idx + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    {q.chapterName && (
                      <span className="text-[10px] font-mono text-[var(--text-muted)]">
                        {q.chapterName} {q.subtopicName ? `• ${q.subtopicName}` : ''}
                      </span>
                    )}
                    <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                      q.difficulty === 'hard'
                        ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30'
                        : q.difficulty === 'medium'
                        ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30'
                        : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
                    }`}>
                      {q.difficulty === 'hard' ? 'Hard • HOTS' : q.difficulty === 'medium' ? 'Medium • Board' : 'Easy • Foundation'}
                    </span>
                  </div>
                  <p className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)] leading-snug">
                    {q.question}
                  </p>
                </div>
              </div>

              {/* 4 Options Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3 pt-1 sm:pt-2">
                {q.options.map((opt, i) => {
                  let btnStyle = 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--accent-primary)]';

                  if (isAnswered) {
                    if (i === q.correct) {
                      btnStyle = 'bg-green-500/15 border-green-500/60 text-green-700 dark:text-green-300 font-bold';
                    } else if (i === userChoice) {
                      btnStyle = 'bg-red-500/15 border-red-500/60 text-red-700 dark:text-red-300';
                    } else {
                      btnStyle = 'bg-[var(--bg-elevated)]/50 border-[var(--border-subtle)] opacity-50';
                    }
                  }

                  return (
                    <button
                      key={i}
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(q.id, i)}
                      className={`p-3 sm:p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between gap-2 cursor-pointer ${btnStyle}`}
                    >
                      <div className="flex items-start gap-2.5">
                        <span className="font-mono font-bold text-[11px] px-1.5 py-0.5 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] shrink-0 text-[var(--accent-primary)]">
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span className="break-words">{opt}</span>
                      </div>
                      {isAnswered && i === q.correct && (
                        <CheckCircle2 size={16} className="text-green-600 shrink-0" />
                      )}
                      {isAnswered && i === userChoice && i !== q.correct && (
                        <XCircle size={16} className="text-red-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Revealable Explanation after answering */}
              {isAnswered && (
                <div className="pt-3 border-t border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] font-sans animate-in fade-in duration-200">
                  <span className="font-bold text-[var(--accent-primary)] mr-1">Official Solution Rationale:</span>
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
