import { useStudySession } from '../hooks/useStudySession';
import SubjectGrid from '../components/study/SubjectGrid';
import StudyHeader from '../components/study/StudyHeader';
import StudySidebar from '../components/study/StudySidebar';
import ChapterList from '../components/study/ChapterList';
import ChapterDrillDown from '../components/study/ChapterDrillDown';
import PortionsTabContent from '../components/study/PortionsTabContent';
import PyqTabContent from '../components/study/PyqTabContent';
import McqTabContent from '../components/study/McqTabContent';

export default function Notes() {
  const session = useStudySession();

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
          completedSections={session.completedSections}
          completedPortionChapters={session.completedPortionChapters}
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
                />
              )}

              {/* Tab 2: Previous Year Questions */}
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

              {/* Tab 4: NOTES (Default NCERT Structured Notes) */}
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
                    />
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
