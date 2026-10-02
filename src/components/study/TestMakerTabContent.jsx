import { useState, useMemo, useEffect, useCallback } from 'react';
import { 
  CheckSquare, Award, Clock, ArrowRight, ArrowLeft, RotateCcw, RotateCw, 
  Sparkles, Filter, Check, Flag, AlertCircle, BarChart3, ChevronDown, 
  BookOpen, Layers, CheckCircle2, XCircle, Sliders, Play, RotateCcw as ResetIcon,
  Zap, HelpCircle
} from 'lucide-react';
import { getTestMakerMCQs, getTestMakerPYQs } from '../../data/questionEngine';
import { NCERT_SYLLABUS } from '../../data/ncertSyllabus';
import { formatMathString } from './FormulaCard';

export default function TestMakerTabContent({
  selectedSubject: initialSubject = 'physics',
  selectedChapter: initialChapter = null,
  onJumpToChapter
}) {
  const [currentSubjectKey, setCurrentSubjectKey] = useState(initialSubject || 'physics');
  const [currentChapterId, setCurrentChapterId] = useState(initialChapter || null);
  const [selectedSubtopicIds, setSelectedSubtopicIds] = useState([]);
  const [testMode, setTestMode] = useState('MCQ'); // 'MCQ' | 'PYQ'
  const [difficultyFilter, setDifficultyFilter] = useState('ALL'); // 'ALL' | 'easy' | 'medium' | 'hard'
  const [questionCount, setQuestionCount] = useState(30); // 10 | 15 | 20 | 30
  const [seed, setSeed] = useState(1);

  // Test Execution State
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [isTestSubmitted, setIsTestSubmitted] = useState(false);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [flaggedQuestions, setFlaggedQuestions] = useState(new Set());
  const [timerSeconds, setTimerSeconds] = useState(45 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [instantFeedbackMode, setInstantFeedbackMode] = useState(false); // Practice vs Exam mode
  const [paletteFilter, setPaletteFilter] = useState('ALL'); // 'ALL' | 'FLAGGED' | 'UNANSWERED'

  // Subject syllabus & chapters
  const currentSubject = NCERT_SYLLABUS[currentSubjectKey];
  
  const availableChapters = useMemo(() => {
    if (!currentSubject) return [];
    const list = [];
    currentSubject.volumes.forEach(vol => {
      vol.chapters.forEach(ch => {
        if (ch.available !== false) {
          list.push(ch);
        }
      });
    });
    return list;
  }, [currentSubject]);

  // Synchronize when initial props change
  useEffect(() => {
    if (initialSubject && NCERT_SYLLABUS[initialSubject]) {
      setCurrentSubjectKey(initialSubject);
    }
  }, [initialSubject]);

  // Synchronize chapter safely ensuring it belongs to current subject
  useEffect(() => {
    if (availableChapters.length > 0) {
      const match = availableChapters.find(ch => ch.id === currentChapterId);
      if (!match) {
        // Fall back to initialChapter if valid in this subject, else first available
        const fallback = availableChapters.find(ch => ch.id === initialChapter) || availableChapters[0];
        setCurrentChapterId(fallback.id);
        if (fallback.subchapters) {
          setSelectedSubtopicIds(fallback.subchapters.map(s => s.id));
        }
      }
    }
  }, [currentSubjectKey, availableChapters, currentChapterId, initialChapter]);

  // Active chapter object
  const activeChapter = useMemo(() => {
    return availableChapters.find(ch => ch.id === currentChapterId) || availableChapters[0] || null;
  }, [availableChapters, currentChapterId]);

  // Subchapters of the active chapter
  const subchapters = useMemo(() => {
    if (!activeChapter || !activeChapter.subchapters) return [];
    return activeChapter.subchapters;
  }, [activeChapter]);

  // Auto-select all subchapters when switching chapter
  useEffect(() => {
    if (subchapters.length > 0) {
      setSelectedSubtopicIds(subchapters.map(s => s.id));
    }
  }, [currentChapterId]);

  // Toggle single subchapter tickbox (rock-solid, single-event handler)
  const toggleSubchapter = useCallback((id) => {
    setSelectedSubtopicIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  }, []);

  // Select all subchapters of current chapter
  const handleSelectAll = () => {
    const allIds = subchapters.map(s => s.id);
    setSelectedSubtopicIds(allIds);
  };

  // Clear all subchapters
  const handleClearAll = () => {
    setSelectedSubtopicIds([]);
  };

  // Generate MCQs strictly from ONLY the selected subtopics
  const generatedMCQs = useMemo(() => {
    if (selectedSubtopicIds.length === 0) return [];
    return getTestMakerMCQs(currentSubjectKey, selectedSubtopicIds, questionCount, seed, difficultyFilter);
  }, [currentSubjectKey, selectedSubtopicIds, questionCount, seed, difficultyFilter]);

  // Generate PYQs strictly from ONLY the selected subtopics
  const generatedPYQs = useMemo(() => {
    if (selectedSubtopicIds.length === 0) return [];
    return getTestMakerPYQs(currentSubjectKey, selectedSubtopicIds, 25, seed);
  }, [currentSubjectKey, selectedSubtopicIds, seed]);

  // Calculate default timer duration based on question count
  const defaultTimerForCount = useMemo(() => {
    if (questionCount <= 10) return 15 * 60;
    if (questionCount <= 15) return 20 * 60;
    if (questionCount <= 20) return 30 * 60;
    return 45 * 60; // 30 questions
  }, [questionCount]);

  // Timer countdown
  useEffect(() => {
    let interval = null;
    if (isTestStarted && !isTestSubmitted && isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0 && isTestStarted && !isTestSubmitted) {
      setIsTestSubmitted(true);
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTestStarted, isTestSubmitted, isTimerRunning, timerSeconds]);

  // Format timer MM:SS
  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Start test
  const handleStartTest = () => {
    if (selectedSubtopicIds.length === 0) return;
    setIsTestStarted(true);
    setIsTestSubmitted(false);
    setCurrentQIndex(0);
    setUserAnswers({});
    setFlaggedQuestions(new Set());
    setTimerSeconds(defaultTimerForCount);
    setIsTimerRunning(true);
    setPaletteFilter('ALL');
  };

  // Handle option selection
  const handleSelectOption = (qId, optIdx) => {
    if (isTestSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  // Toggle flag
  const toggleFlag = (qId) => {
    if (!qId) return;
    setFlaggedQuestions(prev => {
      const next = new Set(prev);
      if (next.has(qId)) next.delete(qId);
      else next.add(qId);
      return next;
    });
  };

  // Submit test
  const handleSubmitTest = () => {
    setIsTestSubmitted(true);
    setIsTimerRunning(false);
  };

  // Retake or reset
  const handleResetTest = () => {
    setIsTestStarted(false);
    setIsTestSubmitted(false);
    setUserAnswers({});
    setFlaggedQuestions(new Set());
    setSeed(prev => prev + 1);
  };

  // Keyboard navigation during active test
  useEffect(() => {
    if (!isTestStarted || isTestSubmitted) return;

    const handleKeyDown = (e) => {
      // Don't intercept if inside an input or textarea
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;

      const activeQ = generatedMCQs[currentQIndex];

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        setCurrentQIndex(prev => Math.min(generatedMCQs.length - 1, prev + 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentQIndex(prev => Math.max(0, prev - 1));
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        if (activeQ) toggleFlag(activeQ.id);
      } else if (['1', '2', '3', '4'].includes(e.key)) {
        e.preventDefault();
        const optIdx = parseInt(e.key, 10) - 1;
        if (activeQ && activeQ.options && activeQ.options[optIdx]) {
          handleSelectOption(activeQ.id, optIdx);
        }
      } else if (['a', 'b', 'c', 'd', 'A', 'B', 'C', 'D'].includes(e.key)) {
        e.preventDefault();
        const optIdx = e.key.toUpperCase().charCodeAt(0) - 65;
        if (activeQ && activeQ.options && activeQ.options[optIdx]) {
          handleSelectOption(activeQ.id, optIdx);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTestStarted, isTestSubmitted, currentQIndex, generatedMCQs]);

  // Compute test scorecard stats
  const scoreStats = useMemo(() => {
    let correct = 0;
    let attempted = 0;
    const subtopicScores = {};
    const diffScores = { easy: { total: 0, correct: 0 }, medium: { total: 0, correct: 0 }, hard: { total: 0, correct: 0 } };

    generatedMCQs.forEach(q => {
      const choice = userAnswers[q.id];
      const isAns = choice !== undefined;
      const isCor = isAns && choice === q.correct;

      if (isAns) attempted++;
      if (isCor) correct++;

      // By subtopic
      const sId = q.subtopicId || 'general';
      if (!subtopicScores[sId]) {
        subtopicScores[sId] = { title: q.subtopicName || sId, total: 0, correct: 0 };
      }
      subtopicScores[sId].total++;
      if (isCor) subtopicScores[sId].correct++;

      // By difficulty
      const diff = q.difficulty || 'medium';
      if (diffScores[diff]) {
        diffScores[diff].total++;
        if (isCor) diffScores[diff].correct++;
      }
    });

    const total = generatedMCQs.length;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

    return {
      total,
      attempted,
      correct,
      incorrect: attempted - correct,
      unattempted: total - attempted,
      percentage,
      subtopicScores,
      diffScores
    };
  }, [generatedMCQs, userAnswers]);

  // Filtered palette indices for quick jump
  const filteredPaletteIndices = useMemo(() => {
    return generatedMCQs.map((q, idx) => ({ q, idx })).filter(({ q, idx }) => {
      if (paletteFilter === 'FLAGGED') return flaggedQuestions.has(q.id);
      if (paletteFilter === 'UNANSWERED') return userAnswers[q.id] === undefined;
      return true;
    });
  }, [generatedMCQs, paletteFilter, flaggedQuestions, userAnswers]);

  return (
    <div className="space-y-5 sm:space-y-6 animate-in fade-in duration-300">
      {/* 1. Header Banner */}
      <div className="p-4 sm:p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)] flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-2xs">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--bg-surface)] text-[11px] font-mono text-[var(--accent-primary)] font-semibold uppercase tracking-wider mb-1.5 border border-[var(--border-subtle)]">
            <Sliders size={12} />
            <span>Interactive Custom Exam Generator</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-primary)] flex items-center gap-2">
            Custom Test Maker
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[var(--text-secondary)] mt-1 max-w-2xl">
            Pick specific subchapters using the tickboxes below. The test engine compiles an authentic 
            <span className="font-bold text-[var(--text-primary)]"> {questionCount}-Question Mock Exam </span> 
            strictly from <span className="underline decoration-[var(--accent-primary)] font-semibold">ONLY the subtopics you chose</span>.
          </p>
        </div>

        {/* Subject Switcher Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[var(--bg-surface)] rounded-xl border border-[var(--border-subtle)] shrink-0">
          {Object.entries(NCERT_SYLLABUS).map(([key, subj]) => {
            const isActive = currentSubjectKey === key;
            return (
              <button
                key={key}
                onClick={() => {
                  if (currentSubjectKey !== key) {
                    setCurrentSubjectKey(key);
                    setCurrentChapterId(null);
                    setIsTestStarted(false);
                    setIsTestSubmitted(false);
                  }
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
                }`}
              >
                {subj.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Test Configuration & Subchapter Selection Panel (Visible when test is not running) */}
      {!isTestStarted && (
        <div className="space-y-5">
          {/* Controls Bar: Chapter Dropdown + Mode Toggle + Select All */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              {/* Chapter Selector Dropdown */}
              <div className="flex items-center gap-2 flex-1 min-w-[240px]">
                <BookOpen size={16} className="text-[var(--accent-primary)] shrink-0" />
                <span className="text-xs font-bold text-[var(--text-secondary)] shrink-0">Select Chapter:</span>
                <div className="relative flex-1">
                  <select
                    value={currentChapterId || ''}
                    onChange={(e) => {
                      const newChId = e.target.value;
                      setCurrentChapterId(newChId);
                      const matchCh = availableChapters.find(c => c.id === newChId);
                      if (matchCh && matchCh.subchapters) {
                        setSelectedSubtopicIds(matchCh.subchapters.map(s => s.id));
                      } else {
                        setSelectedSubtopicIds([]);
                      }
                    }}
                    className="w-full appearance-none bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-default)] px-3 py-1.5 pr-8 rounded-xl font-medium text-xs cursor-pointer hover:border-[var(--accent-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)] transition-colors shadow-2xs"
                  >
                    {availableChapters.map(ch => (
                      <option key={ch.id} value={ch.id}>
                        Ch {ch.number}: {ch.title}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--text-muted)]" />
                </div>
              </div>

              {/* Mode Toggle: MCQs Test vs Curated PYQs */}
              <div className="flex items-center gap-1.5 bg-[var(--bg-elevated)] p-1 rounded-xl border border-[var(--border-subtle)] shrink-0">
                <button
                  onClick={() => setTestMode('MCQ')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    testMode === 'MCQ'
                      ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  Interactive MCQ Test
                </button>
                <button
                  onClick={() => setTestMode('PYQ')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    testMode === 'PYQ'
                      ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  Curated PYQs
                </button>
              </div>
            </div>

            {/* Subchapter Tickbox Grid */}
            <div className="pt-2 border-t border-[var(--border-subtle)]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-sm font-bold text-[var(--text-primary)]">
                    Pick Subchapters for this Test
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[var(--accent-primary)]/15 text-[var(--accent-primary)] font-bold">
                    {selectedSubtopicIds.length} of {subchapters.length} chosen
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleSelectAll}
                    className="text-[11px] font-medium text-[var(--accent-primary)] hover:underline cursor-pointer"
                  >
                    Select All
                  </button>
                  <span className="text-[var(--text-muted)]">•</span>
                  <button
                    onClick={handleClearAll}
                    className="text-[11px] font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] underline cursor-pointer"
                  >
                    Clear All
                  </button>
                </div>
              </div>

              {/* Robust Checkbox Cards (Single-event, keyboard accessible, non-double-firing) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {subchapters.map((sub) => {
                  const isChecked = selectedSubtopicIds.includes(sub.id);
                  return (
                    <div
                      key={sub.id}
                      role="button"
                      tabIndex={0}
                      onClick={() => toggleSubchapter(sub.id)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          toggleSubchapter(sub.id);
                        }
                      }}
                      className={`flex items-start gap-3 p-3 rounded-xl border text-xs cursor-pointer select-none transition-all ${
                        isChecked
                          ? 'bg-[var(--accent-primary)]/10 border-[var(--accent-primary)] shadow-xs font-medium text-[var(--text-primary)]'
                          : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)]/50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        readOnly
                        tabIndex={-1}
                        className="pointer-events-none mt-0.5 w-4 h-4 rounded text-[var(--accent-primary)] focus:ring-[var(--accent-primary)] cursor-pointer"
                      />
                      <div className="flex-1 min-w-0 pointer-events-none">
                        <span className="block font-medium text-[var(--text-primary)] leading-tight">
                          {sub.title}
                        </span>
                        <span className="text-[10px] font-mono text-[var(--text-muted)] mt-0.5 block">
                          ID: {sub.id}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Test Customization Bar (Question Count + Difficulty + Feedback Mode) */}
            {testMode === 'MCQ' && (
              <div className="pt-3 border-t border-[var(--border-subtle)] space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Option 1: Question Count */}
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-[var(--text-secondary)] block">
                      Number of Questions:
                    </span>
                    <div className="flex items-center gap-1.5">
                      {[10, 15, 20, 30].map(cnt => (
                        <button
                          key={cnt}
                          onClick={() => setQuestionCount(cnt)}
                          className={`flex-1 py-1 px-2 rounded-lg text-xs font-mono font-bold border transition-all cursor-pointer ${
                            questionCount === cnt
                              ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)] shadow-xs'
                              : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--accent-primary)]/50'
                          }`}
                        >
                          {cnt} Qs
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Option 2: Difficulty Filter */}
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-[var(--text-secondary)] block">
                      Difficulty Level:
                    </span>
                    <div className="flex items-center gap-1.5">
                      {[
                        { id: 'ALL', label: 'All' },
                        { id: 'easy', label: 'Easy' },
                        { id: 'medium', label: 'Med' },
                        { id: 'hard', label: 'Hard' }
                      ].map(lvl => (
                        <button
                          key={lvl.id}
                          onClick={() => setDifficultyFilter(lvl.id)}
                          className={`flex-1 py-1 px-2 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                            difficultyFilter === lvl.id
                              ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)] shadow-xs font-bold'
                              : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--accent-primary)]/50'
                          }`}
                        >
                          {lvl.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Option 3: Instant Feedback vs Exam Mode */}
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-[var(--text-secondary)] block">
                      Exam Environment:
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setInstantFeedbackMode(false)}
                        className={`flex-1 py-1 px-2 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                          !instantFeedbackMode
                            ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)] shadow-xs font-bold'
                            : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border-[var(--border-subtle)]'
                        }`}
                        title="Real timed board exam simulation"
                      >
                        ⏱ Mock Exam
                      </button>
                      <button
                        onClick={() => setInstantFeedbackMode(true)}
                        className={`flex-1 py-1 px-2 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                          instantFeedbackMode
                            ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)] shadow-xs font-bold'
                            : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border-[var(--border-subtle)]'
                        }`}
                        title="Instant feedback & explanations after each answer"
                      >
                        ⚡ Practice
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Action Bar: Start Test Button */}
            <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="text-xs text-[var(--text-muted)]">
                {selectedSubtopicIds.length === 0 ? (
                  <span className="text-amber-600 dark:text-amber-400 font-medium flex items-center gap-1">
                    <AlertCircle size={13} /> Tick at least 1 subchapter above to generate the test
                  </span>
                ) : (
                  <span>
                    Ready to generate strictly for <strong className="text-[var(--text-primary)]">{selectedSubtopicIds.length}</strong> selected subchapters ({questionCount} questions • {Math.round(defaultTimerForCount / 60)} min limit).
                  </span>
                )}
              </div>

              {testMode === 'MCQ' ? (
                <button
                  disabled={selectedSubtopicIds.length === 0}
                  onClick={handleStartTest}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[var(--accent-primary)] text-white text-xs font-bold font-serif hover:bg-[var(--accent-primary-hover)] transition-all cursor-pointer shadow-md disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Play size={14} fill="currentColor" />
                  <span>Start {questionCount}-Question Custom Test</span>
                </button>
              ) : (
                <div className="text-xs font-bold text-[var(--accent-primary)]">
                  Scroll down to view Curated Board PYQs ({generatedPYQs.length} questions)
                </div>
              )}
            </div>
          </div>

          {/* If Mode is PYQ, show the curated PYQs list for the chosen subchapters */}
          {testMode === 'PYQ' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-serif text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <Award size={18} className="text-[var(--accent-primary)]" />
                  Curated Board PYQs ({generatedPYQs.length} questions)
                </h4>
                <button
                  onClick={() => setSeed(prev => prev + 1)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[var(--border-default)] text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                >
                  <RotateCw size={12} />
                  <span>Refresh PYQs</span>
                </button>
              </div>

              {generatedPYQs.length === 0 ? (
                <div className="p-8 text-center text-xs text-[var(--text-muted)] bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-default)]">
                  No PYQs found for the selected subchapters. Try checking more subchapters above.
                </div>
              ) : (
                <div className="space-y-4">
                  {generatedPYQs.map((pyq, idx) => (
                    <div
                      key={pyq.id || idx}
                      className="bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-2xl p-4 sm:p-5 shadow-xs space-y-3"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--text-secondary)]">
                            PYQ {idx + 1}
                          </span>
                          <span className="text-[11px] font-mono font-bold text-[var(--accent-primary)] px-2 py-0.5 rounded-full bg-[var(--accent-primary)]/10">
                            {pyq.year}
                          </span>
                        </div>
                        {pyq.subtopicName && (
                          <span className="text-[10px] font-mono text-[var(--text-muted)]">
                            {pyq.subtopicName}
                          </span>
                        )}
                      </div>
                      <p 
                        className="font-serif text-sm sm:text-base font-bold text-[var(--text-primary)] leading-snug"
                        dangerouslySetInnerHTML={{ __html: formatMathString(pyq.question) }}
                      />
                      <div className="pt-3 border-t border-[var(--border-subtle)]">
                        <p className="text-xs font-bold text-[var(--accent-primary)] mb-1">
                          Official Marking Scheme Solution:
                        </p>
                        <pre 
                          className="font-sans text-xs text-[var(--text-secondary)] whitespace-pre-wrap leading-relaxed bg-[var(--bg-elevated)] p-3 rounded-xl border border-[var(--border-subtle)]"
                          dangerouslySetInnerHTML={{ __html: formatMathString(pyq.solution) }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* 3. Live Question MCQ Exam Session */}
      {isTestStarted && !isTestSubmitted && (
        <div className="space-y-4 sm:space-y-6">
          {/* Top Exam Navigation Bar */}
          <div className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-xs flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="font-serif font-bold text-base text-[var(--text-primary)]">
                Question {currentQIndex + 1} of {generatedMCQs.length}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--bg-elevated)] text-[var(--text-muted)]">
                {Object.keys(userAnswers).length} / {generatedMCQs.length} Answered
              </span>
              {instantFeedbackMode && (
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                  ⚡ Instant Practice Mode
                </span>
              )}
            </div>

            {/* Timer, Mode Toggle & Controls */}
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1.5 font-mono text-xs font-bold px-3 py-1.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--accent-primary)]">
                <Clock size={14} />
                <span>{formatTime(timerSeconds)}</span>
              </div>

              <button
                onClick={() => toggleFlag(generatedMCQs[currentQIndex]?.id)}
                className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                  flaggedQuestions.has(generatedMCQs[currentQIndex]?.id)
                    ? 'bg-amber-500/15 border-amber-500 text-amber-600 dark:text-amber-400'
                    : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
                title="Flag question for review (Key: F)"
              >
                <Flag size={14} />
              </button>

              <button
                onClick={handleSubmitTest}
                className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
              >
                Submit Exam
              </button>
            </div>
          </div>

          {/* 1-30 Question Palette (Responsive Quick Jump Grid) */}
          <div className="p-3 sm:p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-2xs space-y-2.5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-[var(--text-muted)]">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[var(--text-secondary)]">Question Palette:</span>
                {/* Filter Pills */}
                <div className="flex items-center gap-1">
                  {['ALL', 'FLAGGED', 'UNANSWERED'].map(f => (
                    <button
                      key={f}
                      onClick={() => setPaletteFilter(f)}
                      className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors cursor-pointer ${
                        paletteFilter === f
                          ? 'bg-[var(--accent-primary)] text-white font-bold'
                          : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 text-[10px] font-mono">
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-emerald-500"></span> Answered ({Object.keys(userAnswers).length})</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-amber-500"></span> Flagged ({flaggedQuestions.size})</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-[var(--bg-elevated)] border border-[var(--border-subtle)]"></span> Unvisited ({generatedMCQs.length - Object.keys(userAnswers).length})</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {filteredPaletteIndices.map(({ q, idx }) => {
                const isCurrent = idx === currentQIndex;
                const isAns = userAnswers[q.id] !== undefined;
                const isFlag = flaggedQuestions.has(q.id);

                let btnBg = 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border-[var(--border-subtle)]';
                if (isAns) btnBg = 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-500/60 font-bold';
                if (isFlag) btnBg = 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/60 font-bold';
                if (isCurrent) btnBg += ' ring-2 ring-[var(--accent-primary)] font-bold';

                return (
                  <button
                    key={q.id || idx}
                    onClick={() => setCurrentQIndex(idx)}
                    className={`h-7 w-7 rounded-lg border text-xs font-mono transition-all cursor-pointer flex items-center justify-center shrink-0 ${btnBg}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Question Card */}
          {generatedMCQs[currentQIndex] && (
            <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-sm space-y-4">
              {/* Question Metadata Header */}
              <div className="flex items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--text-secondary)]">
                    Q{currentQIndex + 1} of {generatedMCQs.length}
                  </span>
                  <span className="text-[11px] font-mono text-[var(--text-muted)]">
                    {generatedMCQs[currentQIndex].chapterName} • {generatedMCQs[currentQIndex].subtopicName}
                  </span>
                </div>

                <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                  generatedMCQs[currentQIndex].difficulty === 'hard'
                    ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30'
                    : generatedMCQs[currentQIndex].difficulty === 'medium'
                    ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30'
                    : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
                }`}>
                  {generatedMCQs[currentQIndex].difficulty === 'hard'
                    ? 'Hard • HOTS'
                    : generatedMCQs[currentQIndex].difficulty === 'medium'
                    ? 'Medium • Board'
                    : 'Easy • Foundation'}
                </span>
              </div>

              {/* Question Stem with formatted typography */}
              <div 
                className="font-serif text-base sm:text-xl font-bold text-[var(--text-primary)] leading-snug"
                dangerouslySetInnerHTML={{ __html: formatMathString(generatedMCQs[currentQIndex].question) }}
              />

              {/* 4 Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                {generatedMCQs[currentQIndex].options.map((opt, i) => {
                  const currentQ = generatedMCQs[currentQIndex];
                  const isChosen = userAnswers[currentQ.id] === i;
                  const isAnswered = userAnswers[currentQ.id] !== undefined;
                  const isCorrect = i === currentQ.correct;

                  // Dynamic styles for Practice Mode vs Exam Mode
                  let cardStyle = 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)]/60';
                  
                  if (instantFeedbackMode && isAnswered) {
                    if (isCorrect) {
                      cardStyle = 'bg-emerald-500/15 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-bold';
                    } else if (isChosen && !isCorrect) {
                      cardStyle = 'bg-rose-500/15 border-rose-500 text-rose-700 dark:text-rose-300 font-bold line-through';
                    }
                  } else if (isChosen) {
                    cardStyle = 'bg-[var(--accent-primary)]/15 border-[var(--accent-primary)] font-bold text-[var(--text-primary)] shadow-xs';
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => handleSelectOption(currentQ.id, i)}
                      className={`p-3.5 sm:p-4 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between gap-2.5 cursor-pointer ${cardStyle}`}
                    >
                      <div className="flex items-start gap-2.5">
                        <span className={`font-mono font-bold text-[11px] px-1.5 py-0.5 rounded border shrink-0 ${
                          isChosen
                            ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)]'
                            : 'bg-[var(--bg-surface)] text-[var(--accent-primary)] border-[var(--border-subtle)]'
                        }`}>
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span 
                          className="break-words leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: formatMathString(opt) }}
                        />
                      </div>
                      {isChosen && (
                        <CheckCircle2 size={16} className="text-[var(--accent-primary)] shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Instant Feedback Explanation (In Practice Mode) */}
              {instantFeedbackMode && userAnswers[generatedMCQs[currentQIndex].id] !== undefined && (
                <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] space-y-1 animate-in fade-in">
                  <div className="flex items-center gap-1.5 font-bold text-[var(--accent-primary)]">
                    <Zap size={14} className="text-amber-500" />
                    <span>Instant Solution Insight:</span>
                  </div>
                  <div 
                    className="leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: formatMathString(generatedMCQs[currentQIndex].explanation) }}
                  />
                </div>
              )}

              {/* Navigation buttons */}
              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between gap-3">
                <button
                  disabled={currentQIndex === 0}
                  onClick={() => setCurrentQIndex(prev => Math.max(0, prev - 1))}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[var(--border-default)] text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ArrowLeft size={13} />
                  <span>Previous</span>
                </button>

                <div className="flex items-center gap-2">
                  {userAnswers[generatedMCQs[currentQIndex]?.id] !== undefined && (
                    <button
                      onClick={() => {
                        const nextAns = { ...userAnswers };
                        delete nextAns[generatedMCQs[currentQIndex]?.id];
                        setUserAnswers(nextAns);
                      }}
                      className="text-xs text-[var(--text-muted)] hover:text-red-500 underline cursor-pointer"
                    >
                      Clear Selection
                    </button>
                  )}
                </div>

                <button
                  disabled={currentQIndex === generatedMCQs.length - 1}
                  onClick={() => setCurrentQIndex(prev => Math.min(generatedMCQs.length - 1, prev + 1))}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-[var(--accent-primary)] text-white text-xs font-bold hover:bg-[var(--accent-primary-hover)] transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed shadow-xs"
                >
                  <span>Next</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 4. Scorecard & Detailed Solution Review (Visible after test submission) */}
      {isTestSubmitted && (
        <div className="space-y-6 animate-in fade-in duration-300">
          {/* Summary Scorecard Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-sm text-center space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--accent-primary)]/15 text-[var(--accent-primary)] text-xs font-bold">
              Test Completed
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
              {scoreStats.percentage >= 80 ? '🌟 Outstanding Performance!' : scoreStats.percentage >= 60 ? '👍 Great Effort!' : '📚 Keep Revising!'}
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              You scored <strong className="text-[var(--text-primary)] text-lg">{scoreStats.correct}</strong> out of <strong className="text-[var(--text-primary)] text-lg">{scoreStats.total}</strong> ({scoreStats.percentage}%)
            </p>

            {/* Score Breakdown Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto pt-2">
              <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                <span className="block text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Correct</span>
                <span className="text-lg font-mono font-bold text-emerald-600 dark:text-emerald-400">{scoreStats.correct}</span>
              </div>
              <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                <span className="block text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Incorrect</span>
                <span className="text-lg font-mono font-bold text-rose-600 dark:text-rose-400">{scoreStats.incorrect}</span>
              </div>
              <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                <span className="block text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Unattempted</span>
                <span className="text-lg font-mono font-bold text-[var(--text-muted)]">{scoreStats.unattempted}</span>
              </div>
              <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                <span className="block text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Accuracy</span>
                <span className="text-lg font-mono font-bold text-[var(--accent-primary)]">{scoreStats.percentage}%</span>
              </div>
            </div>

            {/* Subtopic Accuracy Breakdown */}
            <div className="pt-4 border-t border-[var(--border-subtle)] text-left max-w-2xl mx-auto space-y-2">
              <h5 className="font-serif text-sm font-bold text-[var(--text-primary)] mb-2">
                Performance by Selected Subchapters:
              </h5>
              <div className="space-y-1.5">
                {Object.entries(scoreStats.subtopicScores).map(([subId, st]) => {
                  const subPct = st.total > 0 ? Math.round((st.correct / st.total) * 100) : 0;
                  return (
                    <div key={subId} className="flex items-center justify-between text-xs p-2 rounded-lg bg-[var(--bg-elevated)]">
                      <span className="font-medium text-[var(--text-primary)] truncate max-w-[70%]">
                        {st.title}
                      </span>
                      <span className="font-mono font-bold text-[var(--accent-primary)]">
                        {st.correct} / {st.total} ({subPct}%)
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <button
                onClick={handleStartTest}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[var(--accent-primary)] text-white text-xs font-bold hover:bg-[var(--accent-primary-hover)] transition-all cursor-pointer shadow-sm"
              >
                <ResetIcon size={13} />
                <span>Retake This Test</span>
              </button>
              <button
                onClick={handleResetTest}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-[var(--border-default)] text-xs font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
              >
                <span>Change Subchapters</span>
              </button>
            </div>
          </div>

          {/* Full Question-by-Question Solution Review */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
              <BarChart3 size={20} className="text-[var(--accent-primary)]" />
              Full Solution Rationale & Explanations
            </h4>

            {generatedMCQs.map((q, idx) => {
              const userChoice = userAnswers[q.id];
              const isCorrect = userChoice === q.correct;
              const isUnanswered = userChoice === undefined;

              return (
                <div
                  key={q.id || idx}
                  className={`p-4 sm:p-5 rounded-2xl border shadow-xs space-y-3 ${
                    isCorrect
                      ? 'bg-emerald-500/5 border-emerald-500/40'
                      : isUnanswered
                      ? 'bg-[var(--bg-surface)] border-[var(--border-default)]'
                      : 'bg-rose-500/5 border-rose-500/40'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--text-secondary)]">
                        Q{idx + 1}
                      </span>
                      {isCorrect ? (
                        <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 size={13} /> Correct (+1)
                        </span>
                      ) : isUnanswered ? (
                        <span className="text-[11px] font-bold text-[var(--text-muted)]">
                          Unanswered (0)
                        </span>
                      ) : (
                        <span className="text-[11px] font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1">
                          <XCircle size={13} /> Incorrect (0)
                        </span>
                      )}
                    </div>

                    <span className="text-[10px] font-mono text-[var(--text-muted)]">
                      {q.subtopicName}
                    </span>
                  </div>

                  <p 
                    className="font-serif text-sm sm:text-base font-bold text-[var(--text-primary)] leading-snug"
                    dangerouslySetInnerHTML={{ __html: formatMathString(q.question) }}
                  />

                  {/* 4 Options with clear solution tags */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {q.options.map((opt, i) => {
                      let itemStyle = 'bg-[var(--bg-elevated)]/50 border-[var(--border-subtle)] text-[var(--text-muted)]';
                      if (i === q.correct) {
                        itemStyle = 'bg-emerald-500/15 border-emerald-500 font-bold text-emerald-700 dark:text-emerald-300';
                      } else if (i === userChoice && !isCorrect) {
                        itemStyle = 'bg-rose-500/15 border-rose-500 font-bold text-rose-700 dark:text-rose-300 line-through';
                      }

                      return (
                        <div
                          key={i}
                          className={`p-2.5 rounded-xl border flex items-center justify-between gap-2 ${itemStyle}`}
                        >
                          <div className="flex items-start gap-2">
                            <span className="font-mono font-bold">{String.fromCharCode(65 + i)}.</span>
                            <span 
                              className="break-words leading-relaxed"
                              dangerouslySetInnerHTML={{ __html: formatMathString(opt) }}
                            />
                          </div>
                          {i === q.correct && <Check size={14} className="text-emerald-600 shrink-0" />}
                        </div>
                      );
                    })}
                  </div>

                  {/* Official solution explanation */}
                  <div className="pt-2 border-t border-[var(--border-subtle)] text-xs text-[var(--text-secondary)]">
                    <strong className="text-[var(--accent-primary)] mr-1">Rationale:</strong>
                    <span dangerouslySetInnerHTML={{ __html: formatMathString(q.explanation) }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
