import { useState, useEffect, useCallback } from 'react';
import { Sparkles, Layers, Check, BookOpen } from 'lucide-react';
import { useStudySession } from '../hooks/useStudySession';
import SubjectGrid from '../components/study/SubjectGrid';
import StudyHeader from '../components/study/StudyHeader';
import StudySidebar from '../components/study/StudySidebar';
import ChapterList from '../components/study/ChapterList';
import ChapterDrillDown from '../components/study/ChapterDrillDown';
import PortionsTabContent from '../components/study/PortionsTabContent';
import PyqTabContent from '../components/study/PyqTabContent';
import McqTabContent from '../components/study/McqTabContent';
import TestMakerTabContent from '../components/study/TestMakerTabContent';
import SamplePaperTabContent from '../components/study/SamplePaperTabContent';
import StudySearchModal from '../components/study/StudySearchModal';
import PhysicsImportantQuestionsModal from '../components/study/PhysicsImportantQuestionsModal';
import WolframEngine from '../components/calculator/WolframEngine';

export default function Notes() {
  const session = useStudySession();

  // Notes Version Prompt State ('D' = Clean UI, 'NON_D' = Full UI)
  // Opens on first visit, and every time the user arrives via a "Notes" click
  // (AppShell / Home set a sessionStorage flag because Notes isn't mounted yet at click time).
  const [isVersionPromptOpen, setIsVersionPromptOpen] = useState(() => {
    let askFlag = false;
    try {
      askFlag = sessionStorage.getItem('notes-ask-version') === '1';
      sessionStorage.removeItem('notes-ask-version');
    } catch { /* ignore */ }
    return askFlag || !session.notesVersion;
  });

  useEffect(() => {
    const handleOpenPrompt = () => {
      try { sessionStorage.removeItem('notes-ask-version'); } catch { /* ignore */ }
      setIsVersionPromptOpen(true);
    };
    window.addEventListener('open-notes-version-prompt', handleOpenPrompt);
    return () => window.removeEventListener('open-notes-version-prompt', handleOpenPrompt);
  }, []);

  const isCleanMode = session.notesVersion === 'D';
  const effectiveSidebarTab = isCleanMode ? 'NOTES' : session.activeSidebarTab;
  const showVersionPrompt = isVersionPromptOpen || !session.notesVersion;

  const handleChooseVersion = (version) => {
    session.setNotesVersion(version);
    setIsVersionPromptOpen(false);
  };

  // Allow Escape to dismiss the prompt when a version is already chosen
  useEffect(() => {
    if (!showVersionPrompt || !session.notesVersion) return;
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsVersionPromptOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [showVersionPrompt, session.notesVersion]);

  // Search Modal State
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchScope, setSearchScope] = useState('all');

  // Physics Important Questions Clean Pop-up State (for D Version Physics)
  const [physicsImpModal, setPhysicsImpModal] = useState({
    open: false,
    filter: 'THEORY_DERIVATIONS',
    chapter: 'ALL',
  });

  const handleOpenPhysicsImpModal = useCallback((filter = 'THEORY_DERIVATIONS', chapter = 'ALL') => {
    setPhysicsImpModal({ open: true, filter, chapter });
  }, []);

  const handleOpenUniversalSearch = useCallback(() => {
    setSearchScope('all');
    setIsSearchOpen(true);
  }, []);

  const handleOpenSubjectSearch = useCallback((subjKey) => {
    setSearchScope(subjKey || session.selectedSubject || 'all');
    setIsSearchOpen(true);
  }, [session.selectedSubject]);

  // Global Keyboard Shortcuts (Ctrl+K or ⌘K for Universal, Ctrl+Shift+F for Subject Search)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Avoid capturing when user is typing in form controls outside modal
      const targetTag = e.target?.tagName?.toLowerCase();
      const isInput = targetTag === 'input' || targetTag === 'textarea' || targetTag === 'select';

      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        handleOpenUniversalSearch();
      } else if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'f') {
        e.preventDefault();
        handleOpenSubjectSearch(session.selectedSubject);
      } else if (e.key === '/' && !isInput && !isSearchOpen) {
        e.preventDefault();
        handleOpenUniversalSearch();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleOpenUniversalSearch, handleOpenSubjectSearch, session.selectedSubject, isSearchOpen]);

  const handleNavigateSearchResult = useCallback((item) => {
    session.jumpToLocation({
      subjectId: item.subjectId,
      volumeId: item.volumeId,
      chapterId: item.chapterId,
      subchapterId: item.subchapterId,
      tab: item.tab || 'NOTES'
    });

    const targetId = item.sectionId || item.rawItem?.id;
    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 350);
    }
  }, [session]);

  const handleJumpToChapter = (subjKey, volumeId, chapterId) => {
    session.setSelectedSubject(subjKey);
    session.setSelectedVolume(volumeId);
    session.setSelectedChapter(chapterId);
    session.setActiveSidebarTab('NOTES');
  };

  return (
    <div className="min-h-full flex flex-col animate-in fade-in duration-300">
      {/* Top Version Bar (Always accessible D / Non-D toggle) */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4 sm:mb-6 px-3.5 py-2.5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-2xs">
        <div className="flex items-center gap-2 text-xs">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono font-bold text-[11px] border ${
            isCleanMode
              ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/35'
              : 'bg-[var(--accent-primary)]/15 text-[var(--accent-primary)] border-[var(--accent-primary)]/35'
          }`}>
            {isCleanMode ? <Sparkles size={12} /> : <Layers size={12} />}
            <span>{isCleanMode ? 'D Version — Clean UI' : 'Non-D Version — Full UI'}</span>
          </span>
          <span className="hidden sm:inline text-[var(--text-muted)] text-[11px]">
            {isCleanMode
              ? 'Clean reading view — pure textbook notes & derivations'
              : 'Complete exam suite with Oswaal boxes, priority tags, and Wolfram Solver'}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <div className="inline-flex items-center p-0.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
            <button
              type="button"
              onClick={() => handleChooseVersion('D')}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                isCleanMode
                  ? 'bg-emerald-600 text-white shadow-2xs'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              D Version
            </button>
            <button
              type="button"
              onClick={() => handleChooseVersion('NON_D')}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                !isCleanMode && session.notesVersion === 'NON_D'
                  ? 'bg-[var(--accent-primary)] text-white shadow-2xs'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Non-D Version
            </button>
          </div>
          <button
            type="button"
            onClick={() => setIsVersionPromptOpen(true)}
            className="px-2.5 py-1 rounded-lg text-[11px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] border border-[var(--border-subtle)] transition-colors cursor-pointer"
          >
            Choose Version
          </button>
        </div>
      </div>

      {/* 1. Subject Grid View (Initial View when no subject is selected) */}
      {!session.selectedSubject ? (
        <SubjectGrid
          isCleanMode={isCleanMode}
          onSelectSubject={session.setSelectedSubject}
          onSelectSubjectAndTab={(subjKey, tab) => {
            session.setSelectedSubject(subjKey);
            session.setActiveSidebarTab(isCleanMode ? 'NOTES' : tab);
          }}
          completedSections={session.completedSections}
          completedPortionChapters={session.completedPortionChapters}
          onOpenUniversalSearch={handleOpenUniversalSearch}
          onOpenSubjectSearch={handleOpenSubjectSearch}
        />
      ) : (
        /* 2. Subject View Layout */
        <div className="flex-1 flex flex-col">
          {/* Top Header Bar */}
          <StudyHeader
            isCleanMode={isCleanMode}
            selectedSubject={session.selectedSubject}
            selectedVolume={session.selectedVolume}
            onSelectVolume={session.setSelectedVolume}
            onBackToSubjects={() => session.setSelectedSubject(null)}
            volumeProgress={session.volumeProgress}
            onOpenUniversalSearch={handleOpenUniversalSearch}
            onOpenSubjectSearch={handleOpenSubjectSearch}
            onOpenPhysicsImportantQuestions={() => handleOpenPhysicsImpModal('THEORY_DERIVATIONS', 'ALL')}
          />

          {/* Clean UI Top Pop-up Bar for Recently Added Physics Important Questions */}
          {isCleanMode && session.selectedSubject === 'physics' && (
            <div className="max-w-4xl w-full mx-auto mb-3.5 sm:mb-5 rounded-2xl bg-gradient-to-r from-indigo-50/90 via-white to-sky-50/90 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800/60 p-3 sm:p-4 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
                <div className="flex items-start gap-2.5 sm:gap-3 min-w-0">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Sparkles size={16} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xs sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                        Recently Added Physics Important Questions &amp; Derivations
                      </h3>
                      <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold bg-indigo-100 text-indigo-700 dark:bg-indigo-900/60 dark:text-indigo-300">
                        Ch 9–14 Pop-up
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 mt-0.5 line-clamp-1 sm:line-clamp-none">
                      Ray Optics, Wave Optics, Dual Nature, Atoms, Nuclei &amp; Semiconductors — Theory, Derivations, Diagrams &amp; NCERT Problems
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleOpenPhysicsImpModal('THEORY_DERIVATIONS', 'ALL')}
                  className="w-full sm:w-auto px-3.5 sm:px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold shadow-xs transition-all shrink-0 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Sparkles size={14} />
                  <span>Open Important Questions Pop-up</span>
                </button>
              </div>

              {/* Quick Chapter & Category Launch Pills — Single-Row Horizontal Scroll on Mobile */}
              <div className="mt-2.5 pt-2 border-t border-indigo-100 dark:border-slate-800 flex items-center gap-1.5 overflow-x-auto scrollbar-none flex-nowrap sm:flex-wrap pb-0.5">
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mr-0.5 shrink-0">
                  Quick open:
                </span>
                {[
                  { label: 'All 33 Topics & Derivations', filter: 'THEORY_DERIVATIONS', ch: 'ALL' },
                  { label: 'Ch 9 Ray Optics', filter: 'THEORY_DERIVATIONS', ch: 9 },
                  { label: 'Ch 10 Wave Optics', filter: 'THEORY_DERIVATIONS', ch: 10 },
                  { label: 'Ch 11 Dual Nature', filter: 'THEORY_DERIVATIONS', ch: 11 },
                  { label: 'Ch 12 Atoms', filter: 'THEORY_DERIVATIONS', ch: 12 },
                  { label: 'Ch 13 Nuclei', filter: 'THEORY_DERIVATIONS', ch: 13 },
                  { label: 'Ch 14 Semiconductors', filter: 'THEORY_DERIVATIONS', ch: 14 },
                  { label: 'NCERT Examples & Exercises (53)', filter: 'EXAMPLES_EXERCISES', ch: 'ALL' },
                ].map((pill) => (
                  <button
                    key={pill.label}
                    type="button"
                    onClick={() => handleOpenPhysicsImpModal(pill.filter, pill.ch)}
                    className="shrink-0 whitespace-nowrap px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/90 dark:border-slate-700 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors cursor-pointer"
                  >
                    {pill.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Body: Left Sidebar (Non-D only) + Main Content Area */}
          <div className={`flex flex-col lg:flex-row items-start gap-8 flex-1 ${isCleanMode ? 'justify-center' : ''}`}>
            {/* Left Vertical Menu (Hidden in D Version for clean calm reading) */}
            {!isCleanMode && (
              <StudySidebar
                activeTab={effectiveSidebarTab}
                onTabChange={session.setActiveSidebarTab}
              />
            )}

            {/* Main Content Area */}
            <div className={`flex-1 w-full min-w-0 ${isCleanMode ? 'max-w-4xl mx-auto' : ''}`}>
              {/* Tab 1: Exam Portions Tracker */}
              {effectiveSidebarTab === 'PORTIONS' && (
                <PortionsTabContent
                  completedPortionChapters={session.completedPortionChapters}
                  onTogglePortionChapter={session.togglePortionChapter}
                  onJumpToChapter={handleJumpToChapter}
                  portionsStats={session.portionsStats}
                  getPriority={session.getPriority}
                />
              )}

              {/* Tab 2: Wolfram Engine & Science Calculator */}
              {effectiveSidebarTab === 'WOLFRAM_ENGINE' && (
                <WolframEngine
                  initialSubject={session.selectedSubject || 'standard_maths'}
                />
              )}

              {/* Tab 3: Official 2026-27 Sample Question Paper & Marking Scheme */}
              {effectiveSidebarTab === 'SAMPLE_PAPER' && (
                <SamplePaperTabContent
                  onJumpToChapter={handleJumpToChapter}
                />
              )}

              {/* Tab 4: Previous Year Questions */}
              {effectiveSidebarTab === 'PYQ' && (
                <PyqTabContent
                  selectedSubject={session.selectedSubject}
                  selectedChapter={session.selectedChapter}
                  selectedSubchapter={session.selectedSubchapter}
                  onSelectChapter={session.setSelectedChapter}
                />
              )}

              {/* Tab 3: Board MCQs Practice */}
              {effectiveSidebarTab === 'MCQ' && (
                <McqTabContent
                  selectedSubject={session.selectedSubject}
                  selectedChapter={session.selectedChapter}
                  selectedSubchapter={session.selectedSubchapter}
                  onSelectChapter={session.setSelectedChapter}
                />
              )}

              {/* Tab 4: Custom Test Maker */}
              {effectiveSidebarTab === 'TEST_MAKER' && (
                <TestMakerTabContent
                  selectedSubject={session.selectedSubject}
                  selectedChapter={session.selectedChapter}
                  onJumpToChapter={handleJumpToChapter}
                  getPriority={session.getPriority}
                  onSetPriority={session.setItemPriority}
                />
              )}

              {/* Tab 5: NOTES (Default NCERT Structured Notes) */}
              {effectiveSidebarTab === 'NOTES' && (
                <>
                  {/* Chapter List (when no chapter is selected) */}
                  {!session.selectedChapter ? (
                    <ChapterList
                      isCleanMode={isCleanMode}
                      selectedSubject={session.selectedSubject}
                      selectedVolume={session.selectedVolume}
                      onSelectChapter={session.setSelectedChapter}
                      completedSections={session.completedSections}
                      completedPortionChapters={session.completedPortionChapters}
                      getPriority={session.getPriority}
                      onSetPriority={session.setItemPriority}
                      onResetPriority={session.resetItemPriority}
                    />
                  ) : (
                    /* Chapter Drill-down View */
                    <ChapterDrillDown
                      isCleanMode={isCleanMode}
                      selectedSubject={session.selectedSubject}
                      selectedVolume={session.selectedVolume}
                      selectedChapter={session.selectedChapter}
                      selectedSubchapter={session.selectedSubchapter}
                      chapterStudyMode={session.chapterStudyMode}
                      onSetChapterStudyMode={session.setChapterStudyMode}
                      onBackToChapters={() => session.setSelectedChapter(null)}
                      onSelectSubchapter={session.setSelectedSubchapter}
                      completedSections={session.completedSections}
                      completedSubchapters={session.completedSubchapters}
                      onToggleSection={session.toggleSection}
                      onMarkSubchapterCompleted={session.markSubchapterCompleted}
                      userNotes={session.userNotes}
                      onSaveUserNote={session.saveUserNote}
                      activeSubchapterStats={session.activeSubchapterStats}
                      getPriority={session.getPriority}
                      onSetPriority={session.setItemPriority}
                      onResetPriority={session.resetItemPriority}
                      onOpenWolframEngine={() => session.setActiveSidebarTab('WOLFRAM_ENGINE')}
                    />
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Version Prompt Modal: D vs Non-D */}
      {showVersionPrompt && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-4 bg-black/55 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="notes-version-prompt-title"
          onClick={() => {
            if (session.notesVersion) setIsVersionPromptOpen(false);
          }}
        >
          <div
            className="w-full max-w-2xl max-h-[90dvh] overflow-y-auto rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-2xl p-4 sm:p-8 space-y-4 sm:space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center space-y-1.5 sm:space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[11px] font-mono uppercase tracking-wider text-[var(--text-accent)] font-bold">
                <BookOpen size={13} />
                <span>Choose Notes Experience</span>
              </div>
              <h2
                id="notes-version-prompt-title"
                className="font-serif text-xl sm:text-3xl font-bold text-[var(--text-primary)]"
              >
                Which version would you like to open?
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[var(--text-secondary)] max-w-lg mx-auto">
                You can switch anytime from the top bar in Notes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* D Version Card */}
              <button
                type="button"
                onClick={() => handleChooseVersion('D')}
                className={`group text-left p-4 sm:p-5 rounded-2xl border-2 transition-all duration-200 flex flex-col justify-between space-y-3 sm:space-y-4 cursor-pointer hover:-translate-y-0.5 hover:shadow-md ${
                  session.notesVersion === 'D'
                    ? 'border-emerald-500 bg-emerald-500/10'
                    : 'border-[var(--border-default)] bg-[var(--bg-elevated)] hover:border-emerald-500/70'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 text-xs font-mono font-bold border border-emerald-500/30">
                      <Sparkles size={13} />
                      D Version
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      Clean &amp; Calm UI
                    </span>
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)]">
                    Clean Study Interface
                  </h3>
                  <ul className="space-y-1 sm:space-y-1.5 text-xs text-[var(--text-secondary)]">
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Pure NCERT theory, definitions, formulas, diagrams &amp; derivations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>No Oswaal boxes, high-yield numericals, or priority scores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>No Wolfram solver or extra sidebar clutter</span>
                    </li>
                  </ul>
                </div>

                <div className="w-full py-2 sm:py-2.5 px-4 rounded-xl bg-emerald-600 group-hover:bg-emerald-700 text-white text-xs font-bold text-center transition-colors">
                  Open D Version (Clean)
                </div>
              </button>

              {/* Non-D Version Card */}
              <button
                type="button"
                onClick={() => handleChooseVersion('NON_D')}
                className={`group text-left p-4 sm:p-5 rounded-2xl border-2 transition-all duration-200 flex flex-col justify-between space-y-3 sm:space-y-4 cursor-pointer hover:-translate-y-0.5 hover:shadow-md ${
                  session.notesVersion === 'NON_D'
                    ? 'border-[var(--accent-primary)] bg-[var(--accent-primary)]/10'
                    : 'border-[var(--border-default)] bg-[var(--bg-elevated)] hover:border-[var(--accent-primary)]'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[var(--accent-primary)]/15 text-[var(--accent-primary)] text-xs font-mono font-bold border border-[var(--accent-primary)]/30">
                      <Layers size={13} />
                      Non-D Version
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">
                      Full Version
                    </span>
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)]">
                    Full Exam Interface
                  </h3>
                  <ul className="space-y-1 sm:space-y-1.5 text-xs text-[var(--text-secondary)]">
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-[var(--accent-primary)] shrink-0 mt-0.5" />
                      <span>Includes Oswaal memory boosters, common errors &amp; exam trends</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-[var(--accent-primary)] shrink-0 mt-0.5" />
                      <span>Priority ratings, filters, PYQs, MCQs &amp; Test Maker</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-[var(--accent-primary)] shrink-0 mt-0.5" />
                      <span>Wolfram Engine, Sample Paper &amp; Exam Portraits</span>
                    </li>
                  </ul>
                </div>

                <div className="w-full py-2 sm:py-2.5 px-4 rounded-xl bg-[var(--accent-primary)] group-hover:bg-[var(--accent-primary-hover)] text-white text-xs font-bold text-center transition-colors">
                  Open Non-D Version (Full)
                </div>
              </button>
            </div>

            {session.notesVersion && (
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setIsVersionPromptOpen(false)}
                  className="text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer underline"
                >
                  Continue with {isCleanMode ? 'D Version' : 'Non-D Version'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Universal & Subject Knowledge Search Modal */}
      <StudySearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        initialScope={searchScope}
        onNavigate={handleNavigateSearchResult}
        currentSubject={session.selectedSubject}
        getPriority={isCleanMode ? undefined : session.getPriority}
        isCleanMode={isCleanMode}
      />

      {/* Clean UI Pop-up Modal for Physics Important Questions & Derivations */}
      <PhysicsImportantQuestionsModal
        isOpen={physicsImpModal.open}
        onClose={() => setPhysicsImpModal((prev) => ({ ...prev, open: false }))}
        initialFilter={physicsImpModal.filter}
        initialChapter={physicsImpModal.chapter}
        onJumpToSubtopic={(loc) => session.jumpToLocation(loc)}
      />
    </div>
  );
}
