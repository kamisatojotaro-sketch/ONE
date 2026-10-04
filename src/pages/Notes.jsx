import { useState, useEffect, useCallback } from 'react';
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
import ImportantQuestionsTabContent from '../components/study/ImportantQuestionsTabContent';
import SamplePaperTabContent from '../components/study/SamplePaperTabContent';
import StudySearchModal from '../components/study/StudySearchModal';
import WolframEngine from '../components/calculator/WolframEngine';

export default function Notes() {
  const session = useStudySession();

  // Search Modal State
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchScope, setSearchScope] = useState('all');

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
      {/* 1. Subject Grid View (Initial View when no subject is selected) */}
      {!session.selectedSubject ? (
        <SubjectGrid
          onSelectSubject={session.setSelectedSubject}
          onSelectSubjectAndTab={(subjKey, tab) => {
            session.setSelectedSubject(subjKey);
            session.setActiveSidebarTab(tab);
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
            selectedSubject={session.selectedSubject}
            selectedVolume={session.selectedVolume}
            onSelectVolume={session.setSelectedVolume}
            onBackToSubjects={() => session.setSelectedSubject(null)}
            volumeProgress={session.volumeProgress}
            onOpenUniversalSearch={handleOpenUniversalSearch}
            onOpenSubjectSearch={handleOpenSubjectSearch}
          />

          {/* Body: Left Sidebar + Main Content Area */}
          <div className="flex flex-col lg:flex-row items-start gap-8 flex-1">
            {/* Left Vertical Menu */}
            <StudySidebar
              activeTab={session.activeSidebarTab}
              onTabChange={session.setActiveSidebarTab}
            />

            {/* Main Content Area */}
            <div className="flex-1 w-full min-w-0">
              {/* Tab 1: Exam Portions Tracker */}
              {session.activeSidebarTab === 'PORTIONS' && (
                <PortionsTabContent
                  completedPortionChapters={session.completedPortionChapters}
                  onTogglePortionChapter={session.togglePortionChapter}
                  onJumpToChapter={handleJumpToChapter}
                  portionsStats={session.portionsStats}
                  getPriority={session.getPriority}
                />
              )}

              {/* Tab 2: Wolfram Engine & Science Calculator */}
              {session.activeSidebarTab === 'WOLFRAM_ENGINE' && (
                <WolframEngine
                  initialSubject={session.selectedSubject || 'standard_maths'}
                />
              )}

              {/* Tab 3: Top 22 Questions for the Exam */}
              {session.activeSidebarTab === 'IMPORTANT' && (
                <ImportantQuestionsTabContent
                  onJumpToChapter={handleJumpToChapter}
                  onSelectTab={session.setActiveSidebarTab}
                />
              )}

              {/* Tab 3: Official 2026-27 Sample Question Paper & Marking Scheme */}
              {session.activeSidebarTab === 'SAMPLE_PAPER' && (
                <SamplePaperTabContent
                  onJumpToChapter={handleJumpToChapter}
                />
              )}

              {/* Tab 4: Previous Year Questions */}
              {session.activeSidebarTab === 'PYQ' && (
                <PyqTabContent
                  selectedSubject={session.selectedSubject}
                  selectedChapter={session.selectedChapter}
                  selectedSubchapter={session.selectedSubchapter}
                  onSelectChapter={session.setSelectedChapter}
                />
              )}

              {/* Tab 3: Board MCQs Practice */}
              {session.activeSidebarTab === 'MCQ' && (
                <McqTabContent
                  selectedSubject={session.selectedSubject}
                  selectedChapter={session.selectedChapter}
                  selectedSubchapter={session.selectedSubchapter}
                  onSelectChapter={session.setSelectedChapter}
                />
              )}

              {/* Tab 4: Custom Test Maker */}
              {session.activeSidebarTab === 'TEST_MAKER' && (
                <TestMakerTabContent
                  selectedSubject={session.selectedSubject}
                  selectedChapter={session.selectedChapter}
                  onJumpToChapter={handleJumpToChapter}
                  getPriority={session.getPriority}
                  onSetPriority={session.setItemPriority}
                />
              )}

              {/* Tab 5: NOTES (Default NCERT Structured Notes) */}
              {session.activeSidebarTab === 'NOTES' && (
                <>
                  {/* Chapter List (when no chapter is selected) */}
                  {!session.selectedChapter ? (
                    <ChapterList
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

      {/* Universal & Subject Knowledge Search Modal */}
      <StudySearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        initialScope={searchScope}
        onNavigate={handleNavigateSearchResult}
        currentSubject={session.selectedSubject}
        getPriority={session.getPriority}
      />
    </div>
  );
}
