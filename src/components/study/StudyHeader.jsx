import { ArrowLeft, Play, Pause, RotateCcw, Clock, BookOpen, Search, Globe } from 'lucide-react';
import { getSubjectSyllabus } from '../../data/ncertSyllabus';
import { useTimer } from '../../context/TimerContext';
import CustomSelect from '../shared/CustomSelect';

export default function StudyHeader({
  isCleanMode = false,
  selectedSubject,
  selectedVolume,
  onSelectVolume,
  onBackToSubjects,
  volumeProgress,
  onOpenUniversalSearch,
  onOpenSubjectSearch,
  onOpenPhysicsImportantQuestions,
  onOpenBiologyImportantQuestions
}) {
  const subject = getSubjectSyllabus(selectedSubject, isCleanMode);
  const timer = useTimer();

  if (!subject) return null;

  return (
    <header className="bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-2xl p-3 sm:p-5 mb-4 sm:mb-8 shadow-sm">
      <div className="flex flex-col lg:flex-row lg:flex-wrap items-stretch lg:items-center justify-between gap-3 sm:gap-4">
        
        {/* Left Row: Back button, Dynamic Volume Progress & Mobile Search Icons */}
        <div className="flex items-center justify-between gap-2.5 sm:gap-4 flex-1 min-w-[200px]">
          <div className="flex items-center gap-2.5 sm:gap-3 flex-1 min-w-0">
            <button
              onClick={onBackToSubjects}
              className="p-2 sm:p-2.5 rounded-xl border border-[var(--border-default)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors flex items-center justify-center shrink-0 min-w-[36px] min-h-[36px] touch-manipulation cursor-pointer"
              title="Back to all subjects"
            >
              <ArrowLeft size={18} />
            </button>

            <div className="flex-1 min-w-[100px] max-w-xs">
              <div className="flex items-center justify-between text-xs mb-1 font-medium">
                <span className="text-[var(--text-muted)] flex items-center gap-1.5 truncate text-[11px] sm:text-xs">
                  <BookOpen size={12} className="text-[var(--accent-primary)] shrink-0" />
                  <span className="sm:hidden truncate">{subject.name}</span>
                  <span className="hidden sm:inline truncate">{subject.name} Progress</span>
                </span>
                <span className="text-[var(--text-primary)] font-mono ml-2 shrink-0 text-[11px] sm:text-xs">{volumeProgress}%</span>
              </div>
              <div className="w-full h-1.5 sm:h-2 rounded-full bg-[var(--border-default)] overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500 bg-[var(--accent-primary)]"
                  style={{ width: `${volumeProgress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Quick Mobile Search Buttons (Visible on mobile/tablet) */}
          <div className="flex lg:hidden items-center gap-1.5 shrink-0">
            {isCleanMode && selectedSubject === 'physics' && onOpenPhysicsImportantQuestions && (
              <button
                onClick={() => onOpenPhysicsImportantQuestions()}
                className="px-2.5 py-2 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-default)] text-[var(--text-primary)] text-xs font-medium hover:bg-[var(--bg-surface-hover)] transition-all min-h-[36px] flex items-center gap-1.5 touch-manipulation cursor-pointer"
                title="Open Physics Important Questions Pop-up"
              >
                <BookOpen size={14} className="text-[var(--accent-primary)]" />
                <span>Imp Qs</span>
              </button>
            )}
            {selectedSubject === 'biology' && onOpenBiologyImportantQuestions && (
              <button
                onClick={() => onOpenBiologyImportantQuestions()}
                className="px-2.5 py-2 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-default)] text-[var(--text-primary)] text-xs font-medium hover:bg-[var(--bg-surface-hover)] transition-all min-h-[36px] flex items-center gap-1.5 touch-manipulation cursor-pointer"
                title="Open Biology Important & Repeated Past Board Questions (Ch 9–13)"
              >
                <BookOpen size={14} className="text-[var(--accent-primary)]" />
                <span>Imp Qs (Ch 9–13)</span>
              </button>
            )}
            <button
              onClick={() => onOpenSubjectSearch && onOpenSubjectSearch(selectedSubject)}
              className="p-2 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-default)] text-[var(--accent-primary)] hover:bg-[var(--bg-surface-hover)] transition-all min-w-[36px] min-h-[36px] flex items-center justify-center touch-manipulation cursor-pointer"
              title={`Search in ${subject.name}`}
            >
              <Search size={16} />
            </button>
            {!isCleanMode && (
              <button
                onClick={onOpenUniversalSearch}
                className="p-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all min-w-[36px] min-h-[36px] flex items-center justify-center touch-manipulation cursor-pointer"
                title="Universal Search (All Subjects)"
              >
                <Globe size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Center / Action: Full Subject Search & Universal Search Buttons (Desktop) */}
        <div className="hidden lg:flex items-center gap-2">
          {isCleanMode && selectedSubject === 'physics' && onOpenPhysicsImportantQuestions && (
            <button
              onClick={() => onOpenPhysicsImportantQuestions()}
              className="flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-default)] hover:border-[var(--accent-primary)] text-[var(--text-primary)] font-medium text-xs sm:text-sm transition-all hover:shadow-xs cursor-pointer"
              title="Open Physics Important Questions & Derivations Pop-up"
            >
              <BookOpen size={14} className="text-[var(--accent-primary)] shrink-0" />
              <span>Important Questions</span>
            </button>
          )}
          {selectedSubject === 'biology' && onOpenBiologyImportantQuestions && (
            <button
              onClick={() => onOpenBiologyImportantQuestions()}
              className="flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-default)] hover:border-[var(--accent-primary)] text-[var(--text-primary)] font-medium text-xs sm:text-sm transition-all hover:shadow-xs cursor-pointer"
              title="Open Biology Important & Repeated Past Board Questions (Ch 9–13)"
            >
              <BookOpen size={14} className="text-[var(--accent-primary)] shrink-0" />
              <span>Important Questions (Ch 9–13)</span>
            </button>
          )}

          {/* Subject Search Button */}
          <button
            onClick={() => onOpenSubjectSearch && onOpenSubjectSearch(selectedSubject)}
            className="flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-default)] hover:border-[var(--accent-primary)] text-[var(--text-primary)] font-medium text-xs sm:text-sm transition-all hover:shadow-xs cursor-pointer group"
            title={`Search specific topics, formulas, or words in ${subject.name}`}
          >
            <Search size={14} className="text-[var(--accent-primary)] transition-transform group-hover:scale-110" />
            <span className="truncate">Search {subject.name}</span>
          </button>

          {/* Universal Search Button */}
          {!isCleanMode && (
            <button
              onClick={onOpenUniversalSearch}
              className="flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-default)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium text-xs sm:text-sm transition-all cursor-pointer group"
              title="Search topics, definitions, formulas, or words across all Class 12 subjects (Ctrl+K)"
            >
              <Globe size={14} className="text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] transition-colors" />
              <span>Universal Search</span>
              <kbd className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-muted)]">
                Ctrl+K
              </kbd>
            </button>
          )}
        </div>

        {/* Bottom/Right: Volume Dropdown + Timer Widget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap items-center gap-2 sm:gap-3 shrink-0">
          {/* NCERT Volume Dropdown */}
          <div className="relative w-full lg:w-auto">
            <CustomSelect
              value={selectedVolume || ''}
              onChange={(e) => onSelectVolume(e.target.value)}
              className="w-full lg:min-w-[230px] bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-default)] px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl font-medium text-xs sm:text-sm hover:border-[var(--accent-primary)] shadow-2xs"
            >
              {subject.volumes.map((vol) => (
                <option key={vol.id} value={vol.id}>
                  {vol.title}
                </option>
              ))}
            </CustomSelect>
          </div>

          {/* Study Timer Widget */}
          <div className="flex items-center justify-between gap-2.5 sm:gap-3 bg-[var(--bg-elevated)] border border-[var(--border-default)] px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl">
            <div className="flex items-center gap-2">
              <Clock size={15} className="text-[var(--accent-primary)] shrink-0" />
              {/* Minutes input */}
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  min="1"
                  max="180"
                  value={timer.minutes}
                  disabled={timer.isRunning}
                  onChange={(e) => timer.changeDuration(e.target.value)}
                  className="w-11 text-center text-xs font-mono font-semibold py-0.5 sm:py-1 bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-default)] rounded-md focus:outline-none disabled:opacity-60"
                  title="Set study minutes"
                />
                <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-mono">min</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[var(--border-default)]">|</span>

              {/* Digital Timer Display */}
              <span className={`font-mono text-sm sm:text-base font-bold tracking-wider ${timer.isRunning ? 'text-[var(--accent-primary)] animate-pulse' : 'text-[var(--text-primary)]'}`}>
                {timer.formattedTime}
              </span>

              {/* Timer Action Buttons */}
              <div className="flex items-center gap-1 ml-0.5">
                <button
                  onClick={timer.isRunning ? timer.pauseTimer : timer.startTimer}
                  className="min-w-[34px] min-h-[34px] p-2 rounded-lg bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-primary-hover)] transition-colors flex items-center justify-center cursor-pointer touch-manipulation"
                  title={timer.isRunning ? "Pause Timer" : "Start Timer"}
                >
                  {timer.isRunning ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
                </button>
                <button
                  onClick={timer.resetTimer}
                  className="min-w-[34px] min-h-[34px] p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] transition-colors flex items-center justify-center cursor-pointer touch-manipulation"
                  title="Reset Timer"
                >
                  <RotateCcw size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
