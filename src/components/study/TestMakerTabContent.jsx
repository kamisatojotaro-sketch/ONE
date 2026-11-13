import { useState, useMemo, useEffect, useCallback } from 'react';
import { 
  CheckSquare, Award, Clock, ArrowRight, ArrowLeft, RotateCcw, RotateCw, 
  Sparkles, Filter, Check, Flag, AlertCircle, BarChart3, ChevronDown, 
  BookOpen, Layers, CheckCircle2, XCircle, Sliders, Play, RotateCcw as ResetIcon,
  Zap, HelpCircle, Copy, Eye, EyeOff
} from 'lucide-react';
import { getTestMakerMCQs, getTestMakerPYQs } from '../../data/questionEngine';
import { NCERT_SYLLABUS } from '../../data/ncertSyllabus';
import { formatMathString } from './FormulaCard';
import PriorityBadge from './PriorityBadge';

export default function TestMakerTabContent({
  selectedSubject: initialSubject = 'physics',
  selectedChapter: initialChapter = null,
  onJumpToChapter,
  getPriority,
  onSetPriority
}) {
  const [currentSubjectKey, setCurrentSubjectKey] = useState(initialSubject || 'physics');
  const [currentChapterId, setCurrentChapterId] = useState(initialChapter || null);
  const [selectedChapterIds, setSelectedChapterIds] = useState(() => (initialChapter ? [initialChapter] : []));
  const [selectedSubtopicIds, setSelectedSubtopicIds] = useState([]);
  const [testMode, setTestMode] = useState('MCQ'); // 'MCQ' | 'PYQ'
  const [difficultyFilter, setDifficultyFilter] = useState('ALL'); // 'ALL' | 'easy' | 'medium' | 'hard'
  const [styleFilter, setStyleFilter] = useState('ALL'); // 'ALL' | 'conceptual' | 'numerical' | 'assertion'
  const [pyqMarksFilter, setPyqMarksFilter] = useState('ALL'); // 'ALL' | '1' | '2' | '3' | '5'
  const [questionCount, setQuestionCount] = useState(30); // 10 | 15 | 20 | 30
  const [seed, setSeed] = useState(1);

  // Test Execution & PYQ State
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [isTestSubmitted, setIsTestSubmitted] = useState(false);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [flaggedQuestions, setFlaggedQuestions] = useState(new Set());
  const [timerSeconds, setTimerSeconds] = useState(45 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [instantFeedbackMode, setInstantFeedbackMode] = useState(false); // Practice vs Exam mode
  const [paletteFilter, setPaletteFilter] = useState('ALL'); // 'ALL' | 'FLAGGED' | 'UNANSWERED'
  const [revealedPyqIds, setRevealedPyqIds] = useState(() => new Set());
  const [copiedPaper, setCopiedPaper] = useState(false);

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

  // Synchronize chapter selection safely ensuring valid chapters for current subject
  useEffect(() => {
    if (availableChapters.length === 0) return;
    const validSelected = selectedChapterIds.filter(id => availableChapters.some(ch => ch.id === id));
    if (validSelected.length === 0) {
      const fallback = availableChapters.find(ch => ch.id === initialChapter) || availableChapters[0];
      setCurrentChapterId(fallback.id);
      setSelectedChapterIds([fallback.id]);
      setSelectedSubtopicIds(fallback.subchapters ? fallback.subchapters.map(s => s.id) : []);
    } else if (validSelected.length !== selectedChapterIds.length) {
      setSelectedChapterIds(validSelected);
      setCurrentChapterId(validSelected[0]);
    }
  }, [currentSubjectKey, availableChapters, initialChapter, selectedChapterIds]);

  // Sync when initialChapter prop changes explicitly from parent navigation
  useEffect(() => {
    if (initialChapter && availableChapters.some(ch => ch.id === initialChapter)) {
      const chObj = availableChapters.find(ch => ch.id === initialChapter);
      setCurrentChapterId(initialChapter);
      setSelectedChapterIds([initialChapter]);
      setSelectedSubtopicIds(chObj?.subchapters ? chObj.subchapters.map(s => s.id) : []);
    }
  }, [initialChapter, availableChapters]);

  // Active primary chapter object
  const activeChapter = useMemo(() => {
    return availableChapters.find(ch => ch.id === currentChapterId) || availableChapters[0] || null;
  }, [availableChapters, currentChapterId]);

  // Selected chapters list (supports single & multi-chapter selection)
  const selectedChapters = useMemo(() => {
    const picked = availableChapters.filter(ch => selectedChapterIds.includes(ch.id));
    return picked.length > 0 ? picked : (activeChapter ? [activeChapter] : []);
  }, [availableChapters, selectedChapterIds, activeChapter]);

  // Subchapters across all selected chapters (tagged with parent chapter number)
  const subchapters = useMemo(() => {
    const list = [];
    selectedChapters.forEach(ch => {
      (ch.subchapters || []).forEach(sub => {
        list.push({ ...sub, chapterNumber: ch.number, chapterTitle: ch.title });
      });
    });
    return list;
  }, [selectedChapters]);

  // Toggle single chapter pill cleanly (maintaining at least 1 chapter active)
  const toggleChapterSelection = useCallback((chId) => {
    const chObj = availableChapters.find(c => c.id === chId);
    if (!chObj) return;
    const chSubIds = (chObj.subchapters || []).map(s => s.id);

    setSelectedChapterIds(prev => {
      const isSelected = prev.includes(chId);
      if (isSelected) {
        if (prev.length === 1) return prev; // Keep at least 1 chapter selected
        const next = prev.filter(id => id !== chId);
        setCurrentChapterId(next[0]);
        setSelectedSubtopicIds(prevSubs => prevSubs.filter(sid => !chSubIds.includes(sid)));
        return next;
      } else {
        const next = [...prev, chId];
        setCurrentChapterId(chId);
        setSelectedSubtopicIds(prevSubs => Array.from(new Set([...prevSubs, ...chSubIds])));
        return next;
      }
    });
  }, [availableChapters]);

  // Apply chapter preset (e.g. Book 1, Book 2 Ch 9-14, Optics, Modern Physics, All)
  const applyChapterPreset = useCallback((chapterIds) => {
    const matching = availableChapters.filter(c => chapterIds.includes(c.id));
    if (matching.length === 0) return;
    setSelectedChapterIds(matching.map(c => c.id));
    setCurrentChapterId(matching[0].id);
    const allSubs = [];
    matching.forEach(ch => {
      (ch.subchapters || []).forEach(s => allSubs.push(s.id));
    });
    setSelectedSubtopicIds(allSubs);
  }, [availableChapters]);

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

  // Select all subchapters across chosen chapters
  const handleSelectAll = () => {
    const allIds = subchapters.map(s => s.id);
    setSelectedSubtopicIds(allIds);
  };

  // Clear all subchapters
  const handleClearAll = () => {
    setSelectedSubtopicIds([]);
  };

  // Select only high priority (>= 8/10) subchapters
  const handleSelectHighPriority = () => {
    const highIds = subchapters.filter(s => {
      const p = getPriority ? getPriority(s.id) : 8;
      return p >= 8;
    }).map(s => s.id);
    setSelectedSubtopicIds(highIds.length > 0 ? highIds : subchapters.map(s => s.id));
  };

  // Generate MCQs strictly from ONLY the selected subtopics
  const generatedMCQs = useMemo(() => {
    if (selectedSubtopicIds.length === 0) return [];
    return getTestMakerMCQs(currentSubjectKey, selectedSubtopicIds, questionCount, seed, difficultyFilter, styleFilter);
  }, [currentSubjectKey, selectedSubtopicIds, questionCount, seed, difficultyFilter, styleFilter]);

  // Generate PYQs strictly from ONLY the selected subtopics (supports multi-chapter 53 numericals)
  const generatedPYQs = useMemo(() => {
    if (selectedSubtopicIds.length === 0) return [];
    const pyqLimit = selectedChapterIds.length > 1 ? 55 : 30;
    return getTestMakerPYQs(currentSubjectKey, selectedSubtopicIds, pyqLimit, seed, pyqMarksFilter);
  }, [currentSubjectKey, selectedSubtopicIds, selectedChapterIds.length, seed, pyqMarksFilter]);

  const toggleRevealPyq = useCallback((id) => {
    setRevealedPyqIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const allPyqsRevealed = useMemo(() => {
    return generatedPYQs.length > 0 && generatedPYQs.every((p, idx) => revealedPyqIds.has(p.id || `pyq-${idx}`));
  }, [generatedPYQs, revealedPyqIds]);

  const toggleRevealAllPyqs = useCallback(() => {
    if (allPyqsRevealed) {
      setRevealedPyqIds(new Set());
    } else {
      setRevealedPyqIds(new Set(generatedPYQs.map((p, idx) => p.id || `pyq-${idx}`)));
    }
  }, [allPyqsRevealed, generatedPYQs]);

  const handleCopyTestPaper = useCallback(() => {
    const subjTitle = currentSubject?.name || currentSubjectKey;
    const chLabel = selectedChapters.map(c => `Ch ${c.number}`).join(', ');
    let text = `CBSE CLASS 12 ${subjTitle.toUpperCase()} — CUSTOM PRACTICE PAPER (${chLabel})\n`;
    text += `${'='.repeat(68)}\n\n`;

    if (testMode === 'MCQ') {
      text += `SECTION: MULTIPLE CHOICE QUESTIONS (${generatedMCQs.length} Qs)\n\n`;
      generatedMCQs.forEach((q, idx) => {
        text += `Q${idx + 1}. [${(q.questionStyle || 'conceptual').toUpperCase()} | ${(q.difficulty || 'medium').toUpperCase()}] ${q.question}\n`;
        (q.options || []).forEach((opt, oi) => {
          text += `   (${String.fromCharCode(65 + oi)}) ${opt}\n`;
        });
        text += `\n`;
      });
      text += `${'='.repeat(68)}\nANSWER KEY:\n`;
      generatedMCQs.forEach((q, idx) => {
        text += `Q${idx + 1}: (${String.fromCharCode(65 + (q.correct || 0))}) `;
        if ((idx + 1) % 5 === 0) text += `\n`;
      });
    } else {
      text += `SECTION: CURATED BOARD PYQs & IMPORTANT NUMERICALS (${generatedPYQs.length} Qs)\n\n`;
      generatedPYQs.forEach((pyq, idx) => {
        text += `Q${idx + 1}. [${pyq.marks || 'Board Q'} | ${pyq.year}]\n${pyq.question}\n\nSolution:\n${pyq.solution}\n\n${'-'.repeat(50)}\n\n`;
      });
    }

    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedPaper(true);
        setTimeout(() => setCopiedPaper(false), 2500);
      }).catch(() => {});
    }
  }, [currentSubject, currentSubjectKey, selectedChapters, testMode, generatedMCQs, generatedPYQs]);

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
      <div className="p-4 sm:p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)] flex flex-col gap-4 shadow-2xs overflow-hidden">
        <div className="min-w-0">
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
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[var(--bg-surface)] rounded-xl border border-[var(--border-subtle)] w-full min-w-0">
          {Object.entries(NCERT_SYLLABUS).map(([key, subj]) => {
            const isActive = currentSubjectKey === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => {
                  if (currentSubjectKey !== key) {
                    setCurrentSubjectKey(key);
                    setCurrentChapterId(null);
                    setSelectedChapterIds([]);
                    setSelectedSubtopicIds([]);
                    setRevealedPyqIds(new Set());
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
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
              {/* Chapter Selector Dropdown */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 flex-1 min-w-0 w-full">
                <BookOpen size={16} className="text-[var(--accent-primary)] shrink-0" />
                <span className="text-xs font-bold text-[var(--text-secondary)] shrink-0">
                  {selectedChapterIds.length > 1 ? `Primary Focus (${selectedChapterIds.length} Chs):` : 'Select Chapter:'}
                </span>
                {activeChapter && (
                  <div className="shrink-0">
                    <PriorityBadge
                      id={activeChapter.id}
                      rating={getPriority ? getPriority(activeChapter.id) : undefined}
                      onChangePriority={onSetPriority}
                      title={activeChapter.title}
                      size="sm"
                    />
                  </div>
                )}
                <div className="relative flex-1 min-w-[180px] w-full">
                  <select
                    value={currentChapterId || ''}
                    onChange={(e) => {
                      const newChId = e.target.value;
                      setCurrentChapterId(newChId);
                      setSelectedChapterIds([newChId]);
                      const matchCh = availableChapters.find(c => c.id === newChId);
                      if (matchCh && matchCh.subchapters) {
                        setSelectedSubtopicIds(matchCh.subchapters.map(s => s.id));
                      } else {
                        setSelectedSubtopicIds([]);
                      }
                    }}
                    className="w-full max-w-full truncate appearance-none bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-default)] px-3 py-1.5 pr-8 rounded-xl font-medium text-xs cursor-pointer hover:border-[var(--accent-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)] transition-colors shadow-2xs"
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
              <div className="relative z-10 flex items-center gap-1.5 bg-[var(--bg-elevated)] p-1 rounded-xl border border-[var(--border-subtle)] shrink-0 self-start lg:self-auto">
                <button
                  type="button"
                  onClick={() => setTestMode('MCQ')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    testMode === 'MCQ'
                      ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  Interactive MCQ Test
                </button>
                <button
                  type="button"
                  onClick={() => setTestMode('PYQ')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    testMode === 'PYQ'
                      ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  Curated PYQs
                </button>
              </div>
            </div>

            {/* Multi-Chapter Quick Selector & Subject Presets */}
            <div className="pt-2 border-t border-[var(--border-subtle)] space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-bold text-[var(--text-secondary)] flex items-center gap-1.5">
                  <Layers size={13} className="text-[var(--accent-primary)]" />
                  Multi-Chapter Mix ({selectedChapterIds.length}/{availableChapters.length} chapters included):
                </span>

                {currentSubjectKey === 'physics' && (
                  <div className="flex flex-wrap items-center gap-1.5">
                    {[
                      { label: 'Book 1 (Ch 1–8)', ids: ['phy-ch-1','phy-ch-2','phy-ch-3','phy-ch-4','phy-ch-5','phy-ch-6','phy-ch-7','phy-ch-8'] },
                      { label: 'Book 2 / Ch 9–14 (53 Numericals)', ids: ['phy-ch-9','phy-ch-10','phy-ch-11','phy-ch-12','phy-ch-13','phy-ch-14'] },
                      { label: 'Optics (Ch 9–10)', ids: ['phy-ch-9','phy-ch-10'] },
                      { label: 'Modern Physics (Ch 11–14)', ids: ['phy-ch-11','phy-ch-12','phy-ch-13','phy-ch-14'] },
                      { label: 'All 14 Chapters', ids: availableChapters.map(c => c.id) }
                    ].map(preset => {
                      const isPresetActive =
                        preset.ids.length === selectedChapterIds.length &&
                        preset.ids.every(id => selectedChapterIds.includes(id));
                      return (
                        <button
                          key={preset.label}
                          type="button"
                          onClick={() => applyChapterPreset(preset.ids)}
                          className={`px-2 py-0.5 rounded-md text-[10px] font-semibold border transition-all cursor-pointer ${
                            isPresetActive
                              ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)]'
                              : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--accent-primary)]/50'
                          }`}
                        >
                          {preset.label}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                {availableChapters.map(ch => {
                  const isIn = selectedChapterIds.includes(ch.id);
                  return (
                    <button
                      key={ch.id}
                      type="button"
                      onClick={() => toggleChapterSelection(ch.id)}
                      title={`Toggle Ch ${ch.number}: ${ch.title}`}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-mono border transition-all cursor-pointer ${
                        isIn
                          ? 'bg-[var(--accent-primary)]/15 text-[var(--accent-primary)] border-[var(--accent-primary)] font-bold'
                          : 'bg-[var(--bg-elevated)] text-[var(--text-muted)] border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      Ch {ch.number}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Subchapter Tickbox Grid */}
            <div className="pt-2 border-t border-[var(--border-subtle)]">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-sm font-bold text-[var(--text-primary)]">
                    Pick Subchapters ({selectedChapterIds.length} {selectedChapterIds.length === 1 ? 'chapter' : 'chapters'})
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[var(--accent-primary)]/15 text-[var(--accent-primary)] font-bold">
                    {selectedSubtopicIds.length} of {subchapters.length} chosen
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleSelectHighPriority}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-500 hover:text-amber-400 cursor-pointer"
                    title="Select only topics with Exam Priority rating 8 or higher"
                  >
                    <Zap size={12} className="text-amber-500 fill-amber-500" />
                    <span>High Priority (≥8)</span>
                  </button>
                  <span className="text-[var(--text-muted)]">•</span>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 max-h-[340px] overflow-y-auto pr-1">
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
                      className={`flex items-start gap-3 p-3 rounded-xl border text-xs cursor-pointer select-none transition-all touch-manipulation min-h-[44px] active:scale-[0.99] ${
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
                        <div className="flex items-center justify-between gap-1.5">
                          <span className="block font-medium text-[var(--text-primary)] leading-tight">
                            {selectedChapterIds.length > 1 ? `Ch ${sub.chapterNumber} • ${sub.title}` : sub.title}
                          </span>
                          <PriorityBadge
                            id={sub.id}
                            rating={getPriority ? getPriority(sub.id) : undefined}
                            interactive={false}
                            size="sm"
                            showMeter={false}
                          />
                        </div>
                        <span className="text-[10px] font-mono text-[var(--text-muted)] mt-0.5 block">
                          ID: {sub.id}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Test Customization Bar (Question Count + Difficulty + Question Style + Feedback Mode) */}
            {testMode === 'MCQ' && (
              <div className="pt-3 border-t border-[var(--border-subtle)] space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
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
                          className={`flex-1 py-2 sm:py-1 px-2 rounded-lg text-xs font-mono font-bold border transition-all cursor-pointer touch-manipulation active:scale-95 ${
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
                          className={`flex-1 py-2 sm:py-1 px-2 rounded-lg text-xs font-medium border transition-all cursor-pointer touch-manipulation active:scale-95 ${
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

                  {/* Option 3: Question Style Filter */}
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-[var(--text-secondary)] block">
                      Question Style:
                    </span>
                    <div className="flex items-center gap-1.5">
                      {[
                        { id: 'ALL', label: 'All' },
                        { id: 'conceptual', label: 'Concept' },
                        { id: 'numerical', label: 'Numerical' },
                        { id: 'assertion', label: 'A-R' }
                      ].map(st => (
                        <button
                          key={st.id}
                          onClick={() => setStyleFilter(st.id)}
                          className={`flex-1 py-2 sm:py-1 px-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer touch-manipulation active:scale-95 ${
                            styleFilter === st.id
                              ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)] shadow-xs font-bold'
                              : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--accent-primary)]/50'
                          }`}
                        >
                          {st.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Option 4: Instant Feedback vs Exam Mode */}
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-[var(--text-secondary)] block">
                      Exam Environment:
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setInstantFeedbackMode(false)}
                        className={`flex-1 py-2 sm:py-1 px-2 rounded-lg text-xs font-medium border transition-all cursor-pointer touch-manipulation active:scale-95 ${
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
                        className={`flex-1 py-2 sm:py-1 px-2 rounded-lg text-xs font-medium border transition-all cursor-pointer touch-manipulation active:scale-95 ${
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

            {/* Action Bar: Start Test & Copy Test Paper Buttons */}
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
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    disabled={selectedSubtopicIds.length === 0 || generatedMCQs.length === 0}
                    onClick={handleCopyTestPaper}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-default)] text-xs font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-all cursor-pointer disabled:opacity-40"
                    title="Copy formatted questions + Answer Key to clipboard"
                  >
                    {copiedPaper ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                    <span>{copiedPaper ? 'Copied Paper!' : 'Copy Test Paper'}</span>
                  </button>
                  <button
                    type="button"
                    disabled={selectedSubtopicIds.length === 0 || generatedMCQs.length === 0}
                    onClick={handleStartTest}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-2.5 rounded-xl bg-[var(--accent-primary)] text-white text-xs sm:text-sm font-bold font-serif hover:bg-[var(--accent-primary-hover)] transition-all cursor-pointer shadow-md disabled:opacity-40 disabled:cursor-not-allowed w-full sm:w-auto touch-manipulation min-h-[44px]"
                  >
                    <Play size={14} fill="currentColor" />
                    <span>Start {questionCount}-Question Custom Test</span>
                  </button>
                </div>
              ) : (
                <div className="text-xs font-bold text-[var(--accent-primary)]">
                  Scroll down to view Curated Board PYQs & Numericals ({generatedPYQs.length} questions)
                </div>
              )}
            </div>
          </div>

          {/* If Mode is PYQ, show the curated PYQs list for the chosen subchapters */}
          {testMode === 'PYQ' && (
            <div className="space-y-4">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                <h4 className="font-serif text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <Award size={18} className="text-[var(--accent-primary)]" />
                  Curated Board PYQs & Numericals ({generatedPYQs.length} questions)
                </h4>

                <div className="flex flex-wrap items-center gap-2">
                  {/* Marks Filter Pills */}
                  <div className="flex items-center gap-1 bg-[var(--bg-surface)] p-1 rounded-xl border border-[var(--border-default)]">
                    {[
                      { id: 'ALL', label: 'All Marks' },
                      { id: '1', label: '1M' },
                      { id: '2', label: '2M' },
                      { id: '3', label: '3M' },
                      { id: '5', label: '5M' }
                    ].map(mk => (
                      <button
                        key={mk.id}
                        type="button"
                        onClick={() => setPyqMarksFilter(mk.id)}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                          pyqMarksFilter === mk.id
                            ? 'bg-[var(--accent-primary)] text-white shadow-2xs'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                        }`}
                      >
                        {mk.label}
                      </button>
                    ))}
                  </div>

                  {/* Show / Hide All Solutions */}
                  <button
                    type="button"
                    onClick={toggleRevealAllPyqs}
                    disabled={generatedPYQs.length === 0}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer disabled:opacity-40"
                  >
                    {allPyqsRevealed ? <EyeOff size={13} /> : <Eye size={13} />}
                    <span>{allPyqsRevealed ? 'Hide All Solutions' : 'Show All Solutions'}</span>
                  </button>

                  {/* Copy PYQ Paper */}
                  <button
                    type="button"
                    onClick={handleCopyTestPaper}
                    disabled={generatedPYQs.length === 0}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer disabled:opacity-40"
                  >
                    {copiedPaper ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                    <span>{copiedPaper ? 'Copied!' : 'Copy PYQ Paper'}</span>
                  </button>

                  <button
                    onClick={() => setSeed(prev => prev + 1)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                  >
                    <RotateCw size={12} />
                    <span>Refresh PYQs</span>
                  </button>
                </div>
              </div>

              {generatedPYQs.length === 0 ? (
                <div className="p-8 text-center text-xs text-[var(--text-muted)] bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-default)] space-y-2">
                  <p>
                    No PYQs found matching your selection
                    {pyqMarksFilter !== 'ALL' ? ` for the ${pyqMarksFilter}-Mark filter` : ''}.
                  </p>
                  {pyqMarksFilter !== 'ALL' && (
                    <button
                      type="button"
                      onClick={() => setPyqMarksFilter('ALL')}
                      className="px-3 py-1.5 rounded-lg bg-[var(--accent-primary)] text-white font-bold text-xs cursor-pointer"
                    >
                      Show All Marks
                    </button>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  {generatedPYQs.map((pyq, idx) => {
                    const pyqKey = pyq.id || `pyq-${idx}`;
                    const isRevealed = revealedPyqIds.has(pyqKey);
                    return (
                      <div
                        key={pyqKey}
                        className="bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-2xl p-4 sm:p-5 shadow-xs space-y-3"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--text-secondary)]">
                              PYQ {idx + 1}
                            </span>
                            {pyq.marks && (
                              <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                                {pyq.marks}
                              </span>
                            )}
                            {pyq.sourceType && (
                              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-sky-500/15 text-sky-600 dark:text-sky-400 border border-sky-500/30">
                                {pyq.sourceType}
                              </span>
                            )}
                            <span className="text-[11px] font-mono font-bold text-[var(--accent-primary)] px-2 py-0.5 rounded-full bg-[var(--accent-primary)]/10">
                              {pyq.year}
                            </span>
                          </div>
                          {pyq.chapterName && (
                            <span className="text-[10px] font-mono text-[var(--text-muted)]">
                              {pyq.chapterName}
                            </span>
                          )}
                        </div>
                        <p 
                          className="font-serif text-sm sm:text-base font-bold text-[var(--text-primary)] leading-snug"
                          dangerouslySetInnerHTML={{ __html: formatMathString(pyq.question) }}
                        />
                        <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between">
                          <button
                            type="button"
                            onClick={() => toggleRevealPyq(pyqKey)}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                              isRevealed
                                ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30'
                                : 'bg-[var(--bg-elevated)] text-[var(--accent-primary)] border-[var(--border-default)] hover:border-[var(--accent-primary)]'
                            }`}
                          >
                            {isRevealed ? <EyeOff size={13} /> : <Eye size={13} />}
                            <span>{isRevealed ? 'Hide Board Solution' : 'Reveal Answer & Marking Steps'}</span>
                          </button>
                        </div>
                        {isRevealed && (
                          <div className="pt-2 animate-in fade-in duration-200">
                            <p className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 mb-1 uppercase tracking-wider">
                              Verified Board Model Answer:
                            </p>
                            <pre 
                              className="font-sans text-xs text-[var(--text-secondary)] whitespace-pre-wrap leading-relaxed bg-[var(--bg-elevated)] p-3 rounded-xl border border-[var(--border-subtle)]"
                              dangerouslySetInnerHTML={{ __html: formatMathString(pyq.solution) }}
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
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

                <div className="flex items-center gap-1.5 flex-wrap">
                  {generatedMCQs[currentQIndex].questionStyle && (
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                      generatedMCQs[currentQIndex].questionStyle === 'assertion'
                        ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30'
                        : generatedMCQs[currentQIndex].questionStyle === 'numerical'
                        ? 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30'
                        : 'bg-slate-500/10 text-slate-600 dark:text-slate-300 border-slate-500/30'
                    }`}>
                      {generatedMCQs[currentQIndex].questionStyle === 'assertion'
                        ? 'Assertion-Reason'
                        : generatedMCQs[currentQIndex].questionStyle === 'numerical'
                        ? 'Numerical'
                        : 'Conceptual'}
                    </span>
                  )}
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
                  className="inline-flex items-center gap-1.5 px-4 py-2 sm:py-1.5 rounded-xl border border-[var(--border-default)] text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed touch-manipulation active:scale-95 min-h-[40px]"
                >
                  <ArrowLeft size={14} />
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
                      className="text-xs text-[var(--text-muted)] hover:text-red-500 underline cursor-pointer p-2 touch-manipulation"
                    >
                      Clear Selection
                    </button>
                  )}
                </div>

                <button
                  disabled={currentQIndex === generatedMCQs.length - 1}
                  onClick={() => setCurrentQIndex(prev => Math.min(generatedMCQs.length - 1, prev + 1))}
                  className="inline-flex items-center gap-1.5 px-5 py-2 sm:py-1.5 rounded-xl bg-[var(--accent-primary)] text-white text-xs font-bold hover:bg-[var(--accent-primary-hover)] transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed shadow-xs touch-manipulation active:scale-95 min-h-[40px]"
                >
                  <span>Next</span>
                  <ArrowRight size={14} />
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
