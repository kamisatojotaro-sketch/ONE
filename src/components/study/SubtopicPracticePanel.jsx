import { useState, useMemo } from 'react';
import { CheckSquare, Award, RotateCw, CheckCircle2, XCircle, ChevronDown, ChevronUp, Trophy, ArrowRight, Sparkles } from 'lucide-react';
import { getGeneratedMCQs, getGeneratedPYQs } from '../../data/questionEngine';
import { formatMathString } from './FormulaCard';

export default function SubtopicPracticePanel({
  subjectId,
  chapterId,
  subtopicId,
  subtopicTitle
}) {
  const [activeTab, setActiveTab] = useState('MCQ'); // 'MCQ' | 'PYQ'
  const [mcqSeed, setMcqSeed] = useState(1);
  const [pyqSeed, setPyqSeed] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [expandedPyqId, setExpandedPyqId] = useState(null);
  const [difficultyFilter, setDifficultyFilter] = useState('ALL'); // 'ALL' | 'easy' | 'medium' | 'hard'

  // Generate MCQs strictly for this specific subtopic with optional difficulty filter
  const mcqs = useMemo(() => {
    return getGeneratedMCQs(subjectId, chapterId, subtopicId, 20, mcqSeed, difficultyFilter);
  }, [subjectId, chapterId, subtopicId, mcqSeed, difficultyFilter]);

  // Generate PYQs strictly for this specific subtopic
  const pyqs = useMemo(() => {
    return getGeneratedPYQs(subjectId, chapterId, subtopicId, 15, pyqSeed);
  }, [subjectId, chapterId, subtopicId, pyqSeed]);

  // Difficulty counts for the subtopic batch
  const difficultyCounts = useMemo(() => {
    const fullBatch = getGeneratedMCQs(subjectId, chapterId, subtopicId, 40, mcqSeed, null);
    const counts = { ALL: fullBatch.length, easy: 0, medium: 0, hard: 0 };
    fullBatch.forEach(q => {
      if (counts[q.difficulty] !== undefined) counts[q.difficulty]++;
    });
    return counts;
  }, [subjectId, chapterId, subtopicId, mcqSeed]);

  const handleSelectOption = (questionId, optionIdx) => {
    if (selectedAnswers[questionId] !== undefined) return;
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIdx }));
  };

  const handleRefreshMcq = () => {
    setMcqSeed(prev => prev + 1);
    setSelectedAnswers({});
  };

  const handleRefreshPyq = () => {
    setPyqSeed(prev => prev + 1);
    setExpandedPyqId(null);
  };

  // MCQ Stats
  const mcqStats = useMemo(() => {
    let answered = 0;
    let correct = 0;
    mcqs.forEach(q => {
      const ans = selectedAnswers[q.id];
      if (ans !== undefined) {
        answered++;
        if (ans === q.correct) correct++;
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
    <div className="rounded-2xl border border-[var(--accent-primary)]/40 bg-[var(--bg-elevated)]/60 p-4 sm:p-5 space-y-4 shadow-sm animate-in fade-in duration-200">
      {/* Top Header & Sub-Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-3.5">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-[var(--accent-primary)] font-bold uppercase tracking-wider">
            <Sparkles size={11} />
            <span>Target Subtopic Practice</span>
          </div>
          <h5 className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)]">
            {subtopicTitle}
          </h5>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-1.5 bg-[var(--bg-surface)] p-1 rounded-xl border border-[var(--border-subtle)] self-start sm:self-auto shrink-0">
          <button
            onClick={() => setActiveTab('MCQ')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'MCQ'
                ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <CheckSquare size={13} />
            <span>20 MCQs ({mcqStats.answered}/20)</span>
          </button>

          <button
            onClick={() => setActiveTab('PYQ')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'PYQ'
                ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Award size={13} />
            <span>Board PYQs ({pyqs.length})</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: Subtopic 20 MCQs */}
      {activeTab === 'MCQ' && (
        <div className="space-y-4">
          {/* Controls & Score Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs bg-[var(--bg-surface)] p-3 rounded-xl border border-[var(--border-subtle)]">
            <div className="flex items-center gap-2">
              <Trophy size={14} className="text-[var(--accent-primary)] shrink-0" />
              <span className="font-medium text-[var(--text-secondary)]">Score:</span>
              <span className="font-mono font-bold text-[var(--accent-primary)]">
                {mcqStats.correct} / {mcqStats.answered}
              </span>
              {mcqStats.answered > 0 && (
                <span className="text-[10px] font-mono text-[var(--text-muted)]">
                  ({mcqStats.percentage}% correct)
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] text-[var(--text-muted)] font-mono">
                {mcqStats.answered} of {mcqStats.total} answered
              </span>
              <button
                onClick={handleRefreshMcq}
                className="inline-flex items-center gap-1 text-[11px] font-bold text-[var(--accent-primary)] hover:underline ml-2 cursor-pointer"
                title="Generate 20 fresh questions from 1000+ pool"
              >
                <RotateCw size={11} />
                Refresh 20 Set
              </button>
            </div>
          </div>

          {/* Finished completion prompt */}
          {mcqStats.isAllFinished && (
            <div className="p-3.5 rounded-xl bg-[var(--accent-primary)]/15 border border-[var(--accent-primary)] text-center space-y-1.5 animate-in fade-in duration-200">
              <p className="font-serif text-sm font-bold text-[var(--text-primary)]">
                🎉 Subtopic Set Completed! You scored {mcqStats.correct} / {mcqStats.total} ({mcqStats.percentage}%)
              </p>
              <button
                onClick={handleRefreshMcq}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[var(--accent-primary)] text-white text-xs font-bold font-serif hover:bg-[var(--accent-primary-hover)] transition-all cursor-pointer shadow-xs"
              >
                <span>Practice Next 20 Questions</span>
                <ArrowRight size={12} />
              </button>
            </div>
          )}

          {/* Difficulty Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs">
            <span className="font-bold text-[var(--text-secondary)] text-[11px]">Difficulty Header:</span>
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { id: 'ALL', label: 'All', count: difficultyCounts.ALL },
                { id: 'easy', label: 'Easy', count: difficultyCounts.easy, color: 'text-emerald-600 dark:text-emerald-400' },
                { id: 'medium', label: 'Medium', count: difficultyCounts.medium, color: 'text-amber-600 dark:text-amber-400' },
                { id: 'hard', label: 'Hard', count: difficultyCounts.hard, color: 'text-rose-600 dark:text-rose-400' }
              ].map(lvl => (
                <button
                  key={lvl.id}
                  onClick={() => {
                    setDifficultyFilter(lvl.id);
                    setSelectedAnswers({});
                  }}
                  className={`px-2 py-0.5 rounded-lg text-[11px] font-medium border transition-all cursor-pointer flex items-center gap-1 ${
                    difficultyFilter === lvl.id
                      ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)] font-bold'
                      : `bg-[var(--bg-elevated)] text-[var(--text-secondary)] border-[var(--border-subtle)] ${lvl.color || ''}`
                  }`}
                >
                  <span>{lvl.label}</span>
                  <span className="text-[10px] font-mono opacity-80">({lvl.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Questions list */}
          <div className="space-y-3.5 max-h-[600px] overflow-y-auto pr-1">
            {mcqs.map((q, idx) => {
              const userChoice = selectedAnswers[q.id];
              const isAnswered = userChoice !== undefined;

              return (
                <div
                  key={q.id || idx}
                  className="bg-[var(--bg-surface)] p-3.5 sm:p-4 rounded-xl border border-[var(--border-subtle)] space-y-2.5 shadow-2xs"
                >
                  <div className="flex items-start gap-2">
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--text-secondary)] shrink-0">
                      Q{idx + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.2 rounded border ${
                          q.difficulty === 'hard'
                            ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30'
                            : q.difficulty === 'medium'
                            ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30'
                            : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
                        }`}>
                          {q.difficulty === 'hard' ? 'Hard • HOTS' : q.difficulty === 'medium' ? 'Medium' : 'Easy'}
                        </span>
                      </div>
                      <p className="font-serif text-xs sm:text-sm font-bold text-[var(--text-primary)] leading-snug">
                        {q.question}
                      </p>
                    </div>
                  </div>

                  {/* 4 Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {q.options.map((opt, i) => {
                      let btnStyle = 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--accent-primary)]';
                      if (isAnswered) {
                        if (i === q.correct) {
                          btnStyle = 'bg-green-500/15 border-green-500/60 text-green-700 dark:text-green-300 font-bold';
                        } else if (i === userChoice) {
                          btnStyle = 'bg-red-500/15 border-red-500/60 text-red-700 dark:text-red-300';
                        } else {
                          btnStyle = 'bg-[var(--bg-elevated)]/40 border-[var(--border-subtle)] opacity-40';
                        }
                      }

                      return (
                        <button
                          key={i}
                          disabled={isAnswered}
                          onClick={() => handleSelectOption(q.id, i)}
                          className={`p-2.5 rounded-lg border text-left text-[11px] sm:text-xs transition-all flex items-center justify-between gap-1.5 cursor-pointer ${btnStyle}`}
                        >
                          <div className="flex items-start gap-2">
                            <span className="font-mono font-bold text-[10px] px-1 py-0.5 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] shrink-0 text-[var(--accent-primary)]">
                              {String.fromCharCode(65 + i)}
                            </span>
                            <span className="break-words">{opt}</span>
                          </div>
                          {isAnswered && i === q.correct && (
                            <CheckCircle2 size={13} className="text-green-600 shrink-0" />
                          )}
                          {isAnswered && i === userChoice && i !== q.correct && (
                            <XCircle size={13} className="text-red-600 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Reveal explanation */}
                  {isAnswered && (
                    <div className="pt-2 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-secondary)] font-sans">
                      <span className="font-bold text-[var(--accent-primary)] mr-1">Rationale:</span>
                      {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* VIEW 2: Subtopic Board PYQs */}
      {activeTab === 'PYQ' && (
        <div className="space-y-3.5">
          <div className="flex items-center justify-between text-xs bg-[var(--bg-surface)] p-3 rounded-xl border border-[var(--border-subtle)]">
            <span className="text-[var(--text-muted)] font-mono">
              Showing {pyqs.length} Board PYQs for this subtopic
            </span>
            <button
              onClick={handleRefreshPyq}
              className="inline-flex items-center gap-1 text-[11px] font-bold text-[var(--accent-primary)] hover:underline cursor-pointer"
            >
              <RotateCw size={11} />
              Refresh PYQs
            </button>
          </div>

          <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
            {pyqs.map((item, idx) => {
              const isExpanded = expandedPyqId === item.id || (idx === 0 && expandedPyqId === null);

              return (
                <div
                  key={item.id || idx}
                  className="bg-[var(--bg-surface)] p-3.5 sm:p-4 rounded-xl border border-[var(--border-subtle)] space-y-2 shadow-2xs"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="inline-block text-[10px] font-mono font-bold text-[var(--text-accent)] bg-[var(--badge-recommended-bg)]/10 px-2 py-0.5 rounded-full mb-1">
                        {item.year || 'CBSE Board Standard'}
                      </span>
                      <p 
                        className="font-serif text-xs sm:text-sm font-bold text-[var(--text-primary)] leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: formatMathString(item.question) }}
                      />
                    </div>

                    <button
                      onClick={() => setExpandedPyqId(isExpanded ? 'NONE' : item.id)}
                      className="p-1 rounded-lg border border-[var(--border-default)] text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)] shrink-0 cursor-pointer"
                      title={isExpanded ? "Hide answer" : "View verified model answer"}
                    >
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="pt-2.5 border-t border-[var(--border-subtle)] space-y-1 animate-in fade-in duration-200">
                      <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">
                        Verified Model Answer & Solution:
                      </span>
                      <div 
                        className="font-sans text-[11px] sm:text-xs text-[var(--text-secondary)] leading-relaxed whitespace-pre-wrap bg-[var(--bg-elevated)] p-2.5 rounded-lg border border-[var(--border-subtle)] break-words"
                        dangerouslySetInnerHTML={{ __html: formatMathString(item.solution) }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
