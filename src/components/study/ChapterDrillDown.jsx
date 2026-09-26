import { useState } from 'react';
import { ArrowLeft, CheckCircle2, Circle, ChevronDown, Check, PenLine, Sparkles, BookOpen, AlertCircle, HelpCircle, BookMarked, ChevronUp, Quote } from 'lucide-react';
import { NCERT_SYLLABUS } from '../../data/ncertSyllabus';
import FormulaCard, { formatMathString } from './FormulaCard';

export default function ChapterDrillDown({
  selectedSubject,
  selectedVolume,
  selectedChapter,
  selectedSubchapter,
  onBackToChapters,
  onSelectSubchapter,
  completedSections,
  completedSubchapters,
  onToggleSection,
  onMarkSubchapterCompleted,
  userNotes,
  onSaveUserNote,
  activeSubchapterStats
}) {
  const subject = NCERT_SYLLABUS[selectedSubject];
  const [activeNoteEdit, setActiveNoteEdit] = useState(null);
  const [localNoteText, setLocalNoteText] = useState('');
  const [expandedReferences, setExpandedReferences] = useState({});

  if (!subject) return null;
  const volume = subject.volumes.find((v) => v.id === selectedVolume) || subject.volumes[0];
  const chapter = volume?.chapters.find((c) => c.id === selectedChapter);

  if (!chapter) return null;

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

  return (
    <div className="space-y-8 pb-24 animate-in fade-in duration-300">
      {/* Top Header: Breadcrumbs & Subchapter Dropdown */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--border-default)] pb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToChapters}
            className="p-2.5 rounded-xl border border-[var(--border-default)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors shrink-0 shadow-xs"
            title="Back to Chapter list"
          >
            <ArrowLeft size={16} />
          </button>
          <div>
            <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] font-mono">
              <span>{subject.name}</span>
              <span>/</span>
              <span>Chapter {chapter.number}</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-0.5">
              {chapter.title}
            </h2>
          </div>
        </div>

        {/* Subchapter Selector Dropdown */}
        <div className="relative w-full md:w-auto">
          <select
            value={currentSubchapter.id}
            onChange={(e) => onSelectSubchapter(e.target.value)}
            className="w-full md:w-96 appearance-none bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-default)] px-4 py-2.5 pr-10 rounded-xl font-medium text-sm cursor-pointer hover:border-[var(--accent-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)] transition-colors shadow-sm"
          >
            {chapter.subchapters.map((sub) => {
              const subCompleted = completedSubchapters.includes(sub.id);
              return (
                <option key={sub.id} value={sub.id} className="bg-[var(--bg-surface)] text-[var(--text-primary)]">
                  {subCompleted ? '✓ ' : ''}{sub.title}
                </option>
              );
            })}
          </select>
          <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--text-muted)]" />
        </div>
      </div>

      {/* Subchapter Title Banner (Pinterest Style with soft accent bar) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[var(--accent-primary)]/15 flex items-center justify-center text-[var(--accent-primary)]">
            <BookOpen size={18} />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] block">
              Active NCERT Subtopic
            </span>
            <h3 className="font-serif text-lg md:text-xl font-bold text-[var(--text-primary)]">
              {currentSubchapter.title}
            </h3>
          </div>
        </div>
        <span className="text-xs font-mono font-medium px-3 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)] self-start sm:self-auto shadow-xs">
          {activeSubchapterStats.completed} / {activeSubchapterStats.total} Subtopics Complete
        </span>
      </div>

      {/* Sections List */}
      <div className="space-y-8">
        {currentSubchapter.sections?.map((section) => {
          const isDone = completedSections.includes(section.id);
          const hasCustomNote = userNotes[section.id];
          const isEditing = activeNoteEdit === section.id;
          const isRefExpanded = expandedReferences[section.id] !== false; // default expanded

          return (
            <div
              key={section.id}
              className={`p-6 md:p-8 rounded-3xl border transition-all duration-300 relative space-y-6 shadow-sm ${
                isDone
                  ? 'bg-[var(--bg-surface)] border-[var(--accent-primary)] shadow-md'
                  : 'bg-[var(--bg-surface)] border-[var(--border-default)] hover:border-[var(--border-default)]'
              }`}
            >
              {/* Section Header with Clickable Circle Completion Tracker */}
              <div className="flex items-start justify-between gap-4 border-b border-[var(--border-subtle)] pb-5">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[var(--bg-elevated)] text-[11px] font-mono text-[var(--text-accent)] font-semibold uppercase tracking-wider mb-2">
                    <span>{currentSubchapter.title}</span>
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[var(--text-primary)]">
                    {section.title}
                  </h4>
                </div>

                {/* Interactive Clickable Circle Tracker (Pinterest Style Checkbox) */}
                <button
                  onClick={() => onToggleSection(section.id)}
                  className={`p-2.5 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center shrink-0 ${
                    isDone
                      ? 'bg-[var(--accent-primary)] text-white shadow-md scale-110 hover:bg-[var(--accent-primary-hover)]'
                      : 'border-2 border-[var(--border-default)] text-[var(--text-muted)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] hover:scale-105'
                  }`}
                  title={isDone ? "Mark subtopic incomplete" : "Mark subtopic completed"}
                >
                  {isDone ? (
                    <CheckCircle2 size={26} className="fill-current text-white stroke-[var(--accent-primary)]" />
                  ) : (
                    <Circle size={26} strokeWidth={2} />
                  )}
                </button>
              </div>

              {/* 1. Core Explanation (Clean, aesthetic typography) */}
              {section.explanation && (
                <div className="space-y-2.5 bg-[var(--bg-base)]/50 p-5 rounded-2xl border border-[var(--border-subtle)]">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent-primary)]">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)]" />
                    <span>Explanation & Key Concepts</span>
                  </div>
                  <div
                    className="font-sans text-[var(--text-primary)] text-sm md:text-base leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: formatMathString(section.explanation) }}
                  />
                </div>
              )}

              {/* 2. Key Formulas with Variable Breakdown Card */}
              {section.keyFormulas && section.keyFormulas.length > 0 && (
                <FormulaCard
                  formulaList={section.keyFormulas}
                  derivations={section.derivations}
                />
              )}

              {/* 3. How questions could be framed / asked (Pinterest Exam Flashcard) */}
              {section.questionFraming && (
                <div className="p-5 md:p-6 rounded-2xl bg-[var(--bg-elevated)] border-l-4 border-l-[var(--text-accent)] border border-[var(--border-subtle)] space-y-3 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[var(--text-accent)] uppercase tracking-wider flex items-center gap-1.5">
                      <HelpCircle size={15} />
                      Exam Question Blueprint
                    </span>
                    <span className="text-[11px] font-cursive text-[var(--text-muted)]">
                      frequently tested patterns
                    </span>
                  </div>
                  <div
                    className="font-sans text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-wrap pl-2 border-l-2 border-[var(--border-default)]"
                    dangerouslySetInnerHTML={{ __html: formatMathString(section.questionFraming) }}
                  />
                </div>
              )}

              {/* 4. Detailed Textbook Reference (Editorial Collapsible Box) */}
              {section.textbookRef && (
                <div className="border border-[var(--border-subtle)] rounded-2xl overflow-hidden bg-[var(--bg-base)] shadow-xs">
                  <button
                    onClick={() => toggleReference(section.id)}
                    className="w-full px-5 py-3 bg-[var(--bg-elevated)] flex items-center justify-between text-xs font-mono font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <BookMarked size={15} className="text-[var(--accent-primary)]" />
                      Detailed NCERT Textbook Reference
                    </span>
                    {isRefExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                  </button>

                  {isRefExpanded && (
                    <div
                      className="p-5 font-sans text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-wrap border-t border-[var(--border-subtle)] bg-[var(--bg-surface)]"
                      dangerouslySetInnerHTML={{ __html: formatMathString(section.textbookRef) }}
                    />
                  )}
                </div>
              )}

              {/* 5. Custom User Notepad for this subtopic */}
              <div className="pt-4 border-t border-[var(--border-subtle)]">
                {isEditing ? (
                  <div className="space-y-3">
                    <textarea
                      value={localNoteText}
                      onChange={(e) => setLocalNoteText(e.target.value)}
                      placeholder="Type your personal insights, worked problem steps, or revision mnemonics..."
                      className="w-full p-4 rounded-2xl bg-[var(--bg-base)] text-[var(--text-primary)] border border-[var(--border-default)] text-sm focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)] min-h-[100px] leading-relaxed"
                    />
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => setActiveNoteEdit(null)}
                        className="px-4 py-2 rounded-xl text-xs font-medium text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)] transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleSaveNote(section.id)}
                        className="px-5 py-2 rounded-xl text-xs font-medium bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-primary-hover)] transition-colors shadow-xs"
                      >
                        Save Note
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between text-xs">
                    {hasCustomNote ? (
                      <div className="flex-1 pr-4">
                        <span className="font-semibold text-[var(--text-primary)] block mb-1">Your Personal Study Note:</span>
                        <p className="italic text-[var(--text-secondary)] line-clamp-2">
                          "{hasCustomNote}"
                        </p>
                      </div>
                    ) : (
                      <span className="text-[var(--text-muted)] italic">No personal notes added yet for this topic.</span>
                    )}

                    <button
                      onClick={() => handleStartEditNote(section.id, hasCustomNote)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-[var(--border-default)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors shrink-0 shadow-xs cursor-pointer"
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
      <div className="pt-6 pb-12 flex flex-col items-center justify-center space-y-3">
        <button
          disabled={!activeSubchapterStats.isAllCompleted || isSubCompleted}
          onClick={() => onMarkSubchapterCompleted(currentSubchapter.id)}
          className={`flex items-center gap-2.5 px-8 py-4 rounded-2xl font-serif text-base font-bold transition-all duration-300 shadow-sm ${
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
          <p className="text-xs text-[var(--text-muted)] font-sans">
            Mark the completion circle for this subtopic above to unlock.
          </p>
        )}
      </div>

      {/* Fixed Viewport Bottom Progress Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[var(--bg-surface)]/95 backdrop-blur-md border-t border-[var(--border-default)] py-2.5 px-6 shadow-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs font-medium text-[var(--text-secondary)]">
            <span className="font-bold text-[var(--text-primary)] truncate max-w-[200px] md:max-w-md">
              {currentSubchapter.title}
            </span>
            <span>•</span>
            <span className="font-mono text-[var(--accent-primary)]">
              {activeSubchapterStats.percentage}% Completed
            </span>
          </div>

          <div className="w-48 md:w-80 h-2.5 rounded-full bg-[var(--border-default)] overflow-hidden shrink-0">
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
