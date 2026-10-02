import { useState } from 'react';
import { ArrowLeft, CheckCircle2, Circle, ChevronDown, Check, PenLine, Sparkles, BookOpen, AlertCircle, HelpCircle, BookMarked, ChevronUp, Quote, Target } from 'lucide-react';
import { NCERT_SYLLABUS } from '../../data/ncertSyllabus';
import FormulaCard, { formatMathString } from './FormulaCard';
import SubtopicPracticePanel from './SubtopicPracticePanel';
import ReactionDiagramCard from './ReactionDiagramCard';
import StructuredSectionView from './StructuredSectionView';
import PriorityBadge from './PriorityBadge';

export default function ChapterDrillDown({
  selectedSubject,
  selectedVolume,
  selectedChapter,
  selectedSubchapter,
  chapterStudyMode = 'GENERAL',
  onSetChapterStudyMode,
  onBackToChapters,
  onSelectSubchapter,
  completedSections,
  completedSubchapters,
  onToggleSection,
  onMarkSubchapterCompleted,
  userNotes,
  onSaveUserNote,
  activeSubchapterStats,
  getPriority,
  onSetPriority,
  onResetPriority
}) {
  const subject = NCERT_SYLLABUS[selectedSubject];
  const [activeNoteEdit, setActiveNoteEdit] = useState(null);
  const [localNoteText, setLocalNoteText] = useState('');
  const [expandedReferences, setExpandedReferences] = useState({});
  const [openPracticeSections, setOpenPracticeSections] = useState({});
  const [expandedTheories, setExpandedTheories] = useState({});

  if (!subject) return null;

  // Cross-volume lookup: find chapter across all volumes of this subject
  let chapter = null;
  let resolvedVolume = null;

  for (const vol of subject.volumes) {
    const found = vol.chapters.find((c) => c.id === selectedChapter);
    if (found) {
      chapter = found;
      resolvedVolume = vol;
      break;
    }
  }

  // Fallback to first available chapter if not found
  if (!chapter) {
    resolvedVolume = subject.volumes.find((v) => v.id === selectedVolume) || subject.volumes[0];
    chapter = resolvedVolume?.chapters?.[0];
  }

  if (!chapter) {
    return (
      <div className="p-8 text-center bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-2xl space-y-3">
        <p className="font-serif text-lg font-bold text-[var(--text-primary)]">Chapter not found</p>
        <button onClick={onBackToChapters} className="px-4 py-2 rounded-xl bg-[var(--accent-primary)] text-white text-xs cursor-pointer">
          Return to Chapter List
        </button>
      </div>
    );
  }

  // If chapter has no available content yet
  if (!chapter.available || !chapter.subchapters || chapter.subchapters.length === 0) {
    return (
      <div className="bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-2xl p-10 text-center space-y-4">
        <button
          onClick={onBackToChapters}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--accent-primary)] hover:underline mb-2"
        >
          <ArrowLeft size={14} /> Back to Chapters
        </button>
        <div className="w-14 h-14 mx-auto rounded-full bg-[var(--bg-elevated)] border border-[var(--border-default)] flex items-center justify-center text-[var(--text-muted)]">
          <AlertCircle size={28} />
        </div>
        <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)]">
          Content Not Available For Now
        </h3>
        <p className="font-sans text-sm text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed">
          The comprehensive high-yield notes for <strong>{chapter.title}</strong> will be added in upcoming study modules. Currently, complete exam portions are active for Physics and Chemistry Volume 1.
        </p>
      </div>
    );
  }

  const currentSubchapter = chapter.subchapters.find((s) => s.id === selectedSubchapter) || chapter.subchapters[0];
  const isSubCompleted = completedSubchapters.includes(currentSubchapter?.id);

  const handleStartEditNote = (sectionId, existingText) => {
    setActiveNoteEdit(sectionId);
    setLocalNoteText(existingText || '');
  };

  const handleSaveNote = (sectionId) => {
    onSaveUserNote(sectionId, localNoteText);
    setActiveNoteEdit(null);
  };

  const toggleReference = (sectionId) => {
    setExpandedReferences((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const togglePracticeSection = (sectionId) => {
    setOpenPracticeSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const toggleTheory = (sectionId) => {
    setExpandedTheories((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <div className="space-y-6 sm:space-y-8 pb-36 md:pb-24 animate-in fade-in duration-300">
      {/* Top Header: Breadcrumbs & Subchapter Dropdown */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3.5 sm:gap-4 border-b border-[var(--border-default)] pb-4 sm:pb-6">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            onClick={onBackToChapters}
            className="p-2 sm:p-2.5 rounded-xl border border-[var(--border-default)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors shrink-0 shadow-xs cursor-pointer"
            title="Back to Chapter list"
          >
            <ArrowLeft size={16} />
          </button>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-mono">
                <span className="truncate">{subject.name}</span>
                <span>/</span>
                <span className="shrink-0">Ch {chapter.number}</span>
              </div>
              <PriorityBadge
                id={chapter.id}
                rating={getPriority ? getPriority(chapter.id) : undefined}
                onChangePriority={onSetPriority}
                onResetPriority={onResetPriority}
                title={chapter.title}
                size="sm"
              />
            </div>
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-0.5 truncate">
              {chapter.title}
            </h2>
          </div>
        </div>

        {/* Subchapter Selector Dropdown */}
        <div className="relative w-full md:w-auto">
          <select
            value={currentSubchapter.id}
            onChange={(e) => onSelectSubchapter(e.target.value)}
            className="w-full md:w-96 appearance-none bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-default)] px-3.5 py-2 sm:px-4 sm:py-2.5 pr-10 rounded-xl font-medium text-xs sm:text-sm cursor-pointer hover:border-[var(--accent-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)] transition-colors shadow-sm"
          >
            {chapter.subchapters.map((sub) => {
              const subCompleted = completedSubchapters.includes(sub.id);
              const pRating = getPriority ? getPriority(sub.id) : undefined;
              const pTag = pRating !== undefined ? `[P: ${pRating}/10] ` : '';
              return (
                <option key={sub.id} value={sub.id} className="bg-[var(--bg-surface)] text-[var(--text-primary)]">
                  {subCompleted ? '✓ ' : ''}{pTag}{sub.title}
                </option>
              );
            })}
          </select>
          <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--text-muted)]" />
        </div>
      </div>

      {/* Subchapter Title Banner (Pinterest Style with soft accent bar) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 sm:p-5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] shadow-xs">
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <div className="w-8 h-8 rounded-xl bg-[var(--accent-primary)]/15 flex items-center justify-center text-[var(--accent-primary)] shrink-0">
            <BookOpen size={16} />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] block">
                Active NCERT Subtopic
              </span>
              <PriorityBadge
                id={currentSubchapter.id}
                rating={getPriority ? getPriority(currentSubchapter.id) : undefined}
                onChangePriority={onSetPriority}
                onResetPriority={onResetPriority}
                title={currentSubchapter.title}
                size="sm"
              />
            </div>
            <h3 className="font-serif text-base sm:text-lg md:text-xl font-bold text-[var(--text-primary)] truncate">
              {currentSubchapter.title}
            </h3>
          </div>
        </div>
        <span className="text-xs font-mono font-medium px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)] self-start sm:self-auto shadow-xs shrink-0">
          {activeSubchapterStats.completed} / {activeSubchapterStats.total} Complete
        </span>
      </div>

      {/* Mode Switcher Banner: General Study vs Important Questions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-xs">
        <div className="flex items-center gap-2.5">
          <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
            chapterStudyMode === 'QUESTIONS'
              ? 'bg-[var(--accent-primary)] text-white shadow-xs'
              : 'bg-[var(--bg-elevated)] text-[var(--accent-primary)] border border-[var(--border-subtle)]'
          }`}>
            {chapterStudyMode === 'QUESTIONS' ? <Target size={16} /> : <BookOpen size={16} />}
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] block">
              Study Focus Mode
            </span>
            <h4 className="font-serif text-sm sm:text-base font-bold text-[var(--text-primary)]">
              {chapterStudyMode === 'QUESTIONS' ? 'Important Questions & Exam Blueprints' : 'General Study & Complete NCERT Notes'}
            </h4>
          </div>
        </div>

        {/* Toggle Pills */}
        <div className="flex items-center gap-1 bg-[var(--bg-elevated)] p-1 rounded-xl border border-[var(--border-subtle)] shrink-0 w-full sm:w-auto">
          <button
            onClick={() => onSetChapterStudyMode?.('GENERAL')}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 sm:py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer touch-manipulation min-h-[38px] ${
              chapterStudyMode === 'GENERAL'
                ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <BookOpen size={13} />
            <span>General Study</span>
          </button>
          <button
            onClick={() => onSetChapterStudyMode?.('QUESTIONS')}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 sm:py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer touch-manipulation min-h-[38px] ${
              chapterStudyMode === 'QUESTIONS'
                ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Target size={13} />
            <span>Important Questions</span>
          </button>
        </div>
      </div>

      {chapterStudyMode === 'QUESTIONS' && (
        <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-[var(--badge-recommended-bg)]/15 border border-[var(--badge-recommended-bg)]/30 text-xs text-[var(--text-accent)] font-medium shadow-2xs">
          <Target size={16} className="shrink-0 text-[var(--text-accent)]" />
          <span>
            <strong>Important Questions Mode:</strong> Highlighting recurring Board Question Blueprints, Exam Question Framing, Key Formulas, and Instant Practice. Comprehensive theory is collapsed for fast revision.
          </span>
        </div>
      )}

      {/* Sections List */}
      <div className="space-y-6 sm:space-y-8">
        {currentSubchapter.sections?.map((section) => {
          const isDone = completedSections.includes(section.id);
          const hasCustomNote = userNotes[section.id];
          const isEditing = activeNoteEdit === section.id;
          const isRefExpanded = expandedReferences[section.id] !== false; // default expanded in general mode
          const isTheoryExpanded = expandedTheories[section.id] === true;

          return (
            <div
              key={section.id}
              className={`p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border transition-all duration-300 relative space-y-4 sm:space-y-6 shadow-sm ${
                isDone
                  ? 'bg-[var(--bg-surface)] border-[var(--accent-primary)] shadow-md'
                  : 'bg-[var(--bg-surface)] border-[var(--border-default)] hover:border-[var(--border-default)]'
              }`}
            >
              {/* Section Header with Clickable Circle Completion Tracker */}
              <div className="flex items-start justify-between gap-3 sm:gap-4 border-b border-[var(--border-subtle)] pb-4 sm:pb-5">
                <div className="min-w-0 flex-1">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[var(--bg-elevated)] text-[10px] sm:text-[11px] font-mono text-[var(--text-accent)] font-semibold uppercase tracking-wider mb-1.5 sm:mb-2">
                    <span className="truncate">{currentSubchapter.title}</span>
                  </div>
                  <h4 className="font-serif text-lg sm:text-2xl font-bold text-[var(--text-primary)] leading-snug">
                    {section.title}
                  </h4>
                </div>

                {/* Interactive Clickable Circle Tracker (Pinterest Style Checkbox) */}
                <button
                  onClick={() => onToggleSection(section.id)}
                  className={`p-2 sm:p-2.5 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center shrink-0 ${
                    isDone
                      ? 'bg-[var(--accent-primary)] text-white shadow-md scale-105 sm:scale-110 hover:bg-[var(--accent-primary-hover)]'
                      : 'border-2 border-[var(--border-default)] text-[var(--text-muted)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] hover:scale-105'
                  }`}
                  title={isDone ? "Mark subtopic incomplete" : "Mark subtopic completed"}
                >
                  {isDone ? (
                    <CheckCircle2 size={24} className="fill-current text-white stroke-[var(--accent-primary)]" />
                  ) : (
                    <Circle size={24} strokeWidth={2} />
                  )}
                </button>
              </div>

              {/* CONDITIONAL LAYOUT: IMPORTANT QUESTIONS MODE VS GENERAL STUDY */}
              {chapterStudyMode === 'QUESTIONS' ? (
                <>
                  {/* In Important Questions Mode: Exam Question Blueprint is FIRST and Highlighted */}
                  {section.questionFraming && (
                    <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[var(--bg-elevated)] border-l-4 border-l-[var(--text-accent)] border border-[var(--border-subtle)] space-y-2.5 sm:space-y-3 shadow-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-[var(--text-accent)] uppercase tracking-wider flex items-center gap-1.5">
                          <Target size={14} />
                          High-Yield Board Exam Question Blueprint
                        </span>
                        <span className="text-[11px] font-cursive text-[var(--text-muted)]">
                          frequently tested patterns
                        </span>
                      </div>
                      <div
                        className="font-sans text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed whitespace-pre-wrap pl-2 border-l-2 border-[var(--border-default)] break-words font-medium"
                        dangerouslySetInnerHTML={{ __html: formatMathString(section.questionFraming) }}
                      />
                    </div>
                  )}

                  {/* Key Formulas for Solving the Exam Questions */}
                  {section.keyFormulas && section.keyFormulas.length > 0 && (
                    <FormulaCard
                      formulaList={section.keyFormulas}
                      derivations={section.derivations}
                    />
                  )}

                  {/* Visual Chemical Reaction & Mechanism Diagrams */}
                  <ReactionDiagramCard
                    subtopicId={currentSubchapter.id}
                    chapterId={selectedChapter}
                  />

                  {/* Instant Practice Panel (MCQs & Board PYQs) */}
                  <div className="pt-1">
                    <button
                      onClick={() => togglePracticeSection(section.id)}
                      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer shadow-2xs ${
                        openPracticeSections[section.id]
                          ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                          : 'bg-[var(--bg-elevated)] border border-[var(--accent-primary)]/40 text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-white'
                      }`}
                    >
                      <Sparkles size={13} />
                      <span>
                        {openPracticeSections[section.id]
                          ? 'Hide Subtopic Practice'
                          : 'Practice 20 MCQs & Board PYQs for this Subtopic'}
                      </span>
                    </button>

                    {openPracticeSections[section.id] && (
                      <div className="mt-3.5">
                        <SubtopicPracticePanel
                          subjectId={selectedSubject}
                          chapterId={selectedChapter}
                          subtopicId={currentSubchapter.id}
                          subtopicTitle={section.title}
                        />
                      </div>
                    )}
                  </div>

                  {/* Collapsed Theory & Concept Reference Accordion */}
                  {section.explanation && (
                    <div className="border border-[var(--border-subtle)] rounded-xl sm:rounded-2xl overflow-hidden bg-[var(--bg-base)]/50 shadow-2xs">
                      <button
                        onClick={() => toggleTheory(section.id)}
                        className="w-full px-4 py-2.5 sm:px-5 sm:py-3 bg-[var(--bg-elevated)]/60 flex items-center justify-between text-xs font-mono font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                      >
                        <span className="flex items-center gap-2">
                          <BookOpen size={14} className="text-[var(--accent-primary)] shrink-0" />
                          Theoretical Concept & Detailed Background
                        </span>
                        {isTheoryExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      </button>

                      {isTheoryExpanded && (
                        <div className="p-4 sm:p-5 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] space-y-4">
                          <StructuredSectionView
                            section={section}
                            subtopicId={currentSubchapter.id}
                            chapterId={selectedChapter}
                            subjectId={selectedSubject}
                          />
                          {section.textbookRef && (
                            <div className="pt-3 border-t border-[var(--border-subtle)] text-[var(--text-secondary)]">
                              <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                                NCERT Textbook Context:
                              </span>
                              <div dangerouslySetInnerHTML={{ __html: formatMathString(section.textbookRef) }} />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </>
              ) : (
                <>
                  {/* General Study Mode: Structured Editorial Notes */}
                  {/* Definitions, Bulleted Key Points, Extra Points & Reactions with Diagrams */}
                  <StructuredSectionView
                    section={section}
                    subtopicId={currentSubchapter.id}
                    chapterId={selectedChapter}
                    subjectId={selectedSubject}
                  />

                  {/* 2. Key Formulas with Variable Breakdown Card */}
                  {section.keyFormulas && section.keyFormulas.length > 0 && (
                    <FormulaCard
                      formulaList={section.keyFormulas}
                      derivations={section.derivations}
                    />
                  )}

                  {/* 3. How questions could be framed / asked */}
                  {section.questionFraming && (
                    <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[var(--bg-elevated)] border-l-4 border-l-[var(--text-accent)] border border-[var(--border-subtle)] space-y-2.5 sm:space-y-3 shadow-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-[var(--text-accent)] uppercase tracking-wider flex items-center gap-1.5">
                          <HelpCircle size={14} />
                          Exam Question Blueprint
                        </span>
                        <span className="text-[11px] font-cursive text-[var(--text-muted)]">
                          frequently tested patterns
                        </span>
                      </div>
                      <div
                        className="font-sans text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-wrap pl-2 border-l-2 border-[var(--border-default)] break-words"
                        dangerouslySetInnerHTML={{ __html: formatMathString(section.questionFraming) }}
                      />
                    </div>
                  )}

                  {/* 4. Detailed Textbook Reference (Editorial Collapsible Box) */}
                  {section.textbookRef && (
                    <div className="border border-[var(--border-subtle)] rounded-xl sm:rounded-2xl overflow-hidden bg-[var(--bg-base)] shadow-xs">
                      <button
                        onClick={() => toggleReference(section.id)}
                        className="w-full px-4 py-2.5 sm:px-5 sm:py-3 bg-[var(--bg-elevated)] flex items-center justify-between text-xs font-mono font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                      >
                        <span className="flex items-center gap-2">
                          <BookMarked size={14} className="text-[var(--accent-primary)] shrink-0" />
                          Detailed NCERT Textbook Reference
                        </span>
                        {isRefExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      </button>

                      {isRefExpanded && (
                        <div
                          className="p-4 sm:p-5 font-sans text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-wrap border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] break-words"
                          dangerouslySetInnerHTML={{ __html: formatMathString(section.textbookRef) }}
                        />
                      )}
                    </div>
                  )}

                  {/* 5. Subtopic-Level 20 MCQs and Board PYQs Practice Drawer */}
                  <div className="pt-1">
                    <button
                      onClick={() => togglePracticeSection(section.id)}
                      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer shadow-2xs ${
                        openPracticeSections[section.id]
                          ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                          : 'bg-[var(--bg-elevated)] border border-[var(--accent-primary)]/40 text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-white'
                      }`}
                    >
                      <Sparkles size={13} />
                      <span>
                        {openPracticeSections[section.id]
                          ? 'Hide Subtopic Practice'
                          : 'Practice 20 MCQs & Board PYQs for this Subtopic'}
                      </span>
                    </button>

                    {openPracticeSections[section.id] && (
                      <div className="mt-3.5">
                        <SubtopicPracticePanel
                          subjectId={selectedSubject}
                          chapterId={selectedChapter}
                          subtopicId={currentSubchapter.id}
                          subtopicTitle={section.title}
                        />
                      </div>
                    )}
                  </div>
                </>
              )}

              {/* 6. Custom User Notepad for this subtopic */}
              <div className="pt-3 sm:pt-4 border-t border-[var(--border-subtle)]">
                {isEditing ? (
                  <div className="space-y-3">
                    <textarea
                      value={localNoteText}
                      onChange={(e) => setLocalNoteText(e.target.value)}
                      placeholder="Type your personal insights, worked problem steps, or revision mnemonics..."
                      className="w-full p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[var(--bg-base)] text-[var(--text-primary)] border border-[var(--border-default)] text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)] min-h-[90px] leading-relaxed"
                    />
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => setActiveNoteEdit(null)}
                        className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-medium text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)] transition-colors cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleSaveNote(section.id)}
                        className="px-4 py-1.5 sm:px-5 sm:py-2 rounded-xl text-xs font-medium bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-primary-hover)] transition-colors shadow-xs cursor-pointer"
                      >
                        Save Note
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 text-xs">
                    {hasCustomNote ? (
                      <div className="flex-1 min-w-0 pr-0 sm:pr-4">
                        <span className="font-semibold text-[var(--text-primary)] block mb-0.5">Your Personal Study Note:</span>
                        <p className="italic text-[var(--text-secondary)] line-clamp-2 break-words">
                          "{hasCustomNote}"
                        </p>
                      </div>
                    ) : (
                      <span className="text-[var(--text-muted)] italic">No personal notes added yet for this topic.</span>
                    )}

                    <button
                      onClick={() => handleStartEditNote(section.id, hasCustomNote)}
                      className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl border border-[var(--border-default)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors shrink-0 shadow-xs cursor-pointer"
                    >
                      <PenLine size={13} />
                      <span>{hasCustomNote ? 'Edit Note' : 'Add Note'}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Subchapter Completed Button */}
      <div className="pt-4 sm:pt-6 pb-8 sm:pb-12 flex flex-col items-center justify-center space-y-3">
        <button
          disabled={!activeSubchapterStats.isAllCompleted || isSubCompleted}
          onClick={() => onMarkSubchapterCompleted(currentSubchapter.id)}
          className={`w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl font-serif text-sm sm:text-base font-bold transition-all duration-300 shadow-sm ${
            isSubCompleted
              ? 'bg-[var(--accent-primary)]/20 text-[var(--accent-primary)] border border-[var(--accent-primary)] cursor-default'
              : activeSubchapterStats.isAllCompleted
              ? 'bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-primary-hover)] hover:shadow-lg hover:-translate-y-0.5 cursor-pointer animate-bounce'
              : 'bg-[var(--bg-elevated)] text-[var(--text-muted)] border border-[var(--border-default)] opacity-60 cursor-not-allowed'
          }`}
        >
          {isSubCompleted ? (
            <>
              <Check size={18} />
              Subtopic Completed!
            </>
          ) : (
            <>
              <CheckCircle2 size={18} />
              Mark Subtopic Completed
            </>
          )}
        </button>

        {!activeSubchapterStats.isAllCompleted && !isSubCompleted && (
          <p className="text-xs text-[var(--text-muted)] font-sans text-center px-4">
            Mark the completion circle for this subtopic above to unlock.
          </p>
        )}
      </div>

      {/* Fixed Viewport Bottom Progress Bar (Elevated above mobile nav on small screens) */}
      <div className="fixed bottom-14 md:bottom-0 left-0 right-0 z-40 bg-[var(--bg-surface)]/95 backdrop-blur-md border-t border-[var(--border-default)] py-2 sm:py-2.5 px-3.5 sm:px-6 shadow-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2.5 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3 text-xs font-medium text-[var(--text-secondary)] min-w-0 flex-1">
            <span className="font-bold text-[var(--text-primary)] truncate max-w-[130px] xs:max-w-[180px] sm:max-w-xs md:max-w-md">
              {currentSubchapter.title}
            </span>
            <span>•</span>
            <span className="font-mono text-[var(--accent-primary)] shrink-0">
              {activeSubchapterStats.percentage}% Complete
            </span>
          </div>

          <div className="w-20 xs:w-28 sm:w-48 md:w-80 h-2 sm:h-2.5 rounded-full bg-[var(--border-default)] overflow-hidden shrink-0">
            <div
              className="h-full rounded-full transition-all duration-300 bg-[var(--accent-primary)]"
              style={{ width: `${activeSubchapterStats.percentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
