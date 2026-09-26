import { useState, useMemo, useEffect } from 'react';
import { CheckCircle2, XCircle, RotateCcw, CheckSquare, Filter, Sparkles, Trophy, RotateCw, ArrowRight } from 'lucide-react';
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

  // Sync when selectedChapter changes from parent
  useEffect(() => {
    if (selectedChapter) {
      setChapterFilter(selectedChapter);
    } else {
      setChapterFilter('ALL');
    }
    setSelectedAnswers({});
  }, [selectedChapter]);

  // Extract chapters for this subject
  const subject = NCERT_SYLLABUS[selectedSubject];
  const availableChapters = useMemo(() => {
    if (!subject) return [];
    const list = [];
    subject.volumes.forEach(vol => {
      vol.chapters.forEach(ch => {
        list.push({ id: ch.id, title: `Ch ${ch.number}: ${ch.title}` });
      });
    });
    return list;
  }, [subject]);

  // Generate 20 MCQs dynamically based on scope and seed
  const mcqs = useMemo(() => {
    const chId = chapterFilter === 'ALL' ? null : chapterFilter;
    return getGeneratedMCQs(selectedSubject, chId, null, 20, seed);
  }, [selectedSubject, chapterFilter, seed]);

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

  return (
    <div className="space-y-4 sm:space-y-6 animate-in fade-in duration-300">
      {/* Top Banner with Quiz Stats & Chapter Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 p-4 sm:p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)]">
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
              : `Focusing exclusively on ${availableChapters.find(c => c.id === chapterFilter)?.title || 'active chapter'}.`}
          </p>
        </div>

        {/* Filter & Controls */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 shrink-0">
          {/* Chapter Filter */}
          <div className="flex items-center gap-1.5 flex-1 sm:flex-none">
            <Filter size={13} className="text-[var(--text-muted)] shrink-0" />
            <div className="relative w-full sm:w-56">
              <select
                value={chapterFilter}
                onChange={(e) => {
                  const val = e.target.value;
                  setChapterFilter(val);
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
                  {q.chapterName && (
                    <span className="inline-block text-[10px] font-mono text-[var(--text-muted)] mb-1">
                      {q.chapterName} {q.subtopicName ? `• ${q.subtopicName}` : ''}
                    </span>
                  )}
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
                      <span className="break-words">{opt}</span>
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
