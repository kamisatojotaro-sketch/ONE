import { ArrowLeft, Play, Pause, RotateCcw, Clock, BookOpen, ChevronDown, Search, Globe } from 'lucide-react';
import { NCERT_SYLLABUS } from '../../data/ncertSyllabus';
import { useStudyTimer } from '../../hooks/useStudyTimer';

export default function StudyHeader({
  selectedSubject,
  selectedVolume,
  onSelectVolume,
  onBackToSubjects,
  volumeProgress,
  onOpenUniversalSearch,
  onOpenSubjectSearch
}) {
  const subject = NCERT_SYLLABUS[selectedSubject];
  const timer = useStudyTimer(25);

  if (!subject) return null;

  return (
    <header className="bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-2xl p-3.5 sm:p-5 mb-5 sm:mb-8 shadow-sm">
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3.5 sm:gap-6">
        
        {/* Left: Back button & Dynamic Volume Progress */}
        <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
          <button
            onClick={onBackToSubjects}
            className="p-2 sm:p-2.5 rounded-xl border border-[var(--border-default)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors flex items-center justify-center shrink-0"
            title="Back to all subjects"
          >
            <ArrowLeft size={18} />
          </button>

          <div className="flex-1 min-w-0 max-w-xs">
            <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
              <span className="text-[var(--text-muted)] flex items-center gap-1.5 truncate">
                <BookOpen size={13} className="text-[var(--accent-primary)] shrink-0" />
                <span className="truncate">Volume Progress</span>
              </span>
              <span className="text-[var(--text-primary)] font-mono ml-2 shrink-0">{volumeProgress}%</span>
            </div>
            <div className="w-full h-2 sm:h-2.5 rounded-full bg-[var(--border-default)] overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500 bg-[var(--accent-primary)]"
                style={{ width: `${volumeProgress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Center / Action: Subject Search & Universal Search Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
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
          <button
            onClick={onOpenUniversalSearch}
            className="flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-default)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium text-xs sm:text-sm transition-all cursor-pointer group"
            title="Search topics, definitions, formulas, or words across all Class 12 subjects (Ctrl+K)"
          >
            <Globe size={14} className="text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] transition-colors" />
            <span className="hidden sm:inline">Universal Search</span>
            <span className="sm:hidden">All Subjects</span>
            <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-muted)]">
              Ctrl+K
            </kbd>
          </button>
        </div>

        {/* Right Section on mobile: Volume Dropdown + Timer */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 shrink-0">
          {/* NCERT Volume Dropdown */}
          <div className="relative w-full sm:w-auto">
            <select
              value={selectedVolume || ''}
              onChange={(e) => onSelectVolume(e.target.value)}
              className="w-full sm:w-auto appearance-none bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-default)] px-3.5 py-2 sm:px-4 sm:py-2.5 pr-9 rounded-xl font-medium text-xs sm:text-sm cursor-pointer hover:border-[var(--accent-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)] transition-colors shadow-sm"
            >
              {subject.volumes.map((vol) => (
                <option key={vol.id} value={vol.id} className="bg-[var(--bg-surface)] text-[var(--text-primary)]">
                  {vol.title}
                </option>
              ))}
            </select>
            <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--text-muted)]" />
          </div>

          {/* Study Timer Widget */}
          <div className="flex items-center justify-between sm:justify-end gap-2.5 sm:gap-3 bg-[var(--bg-elevated)] border border-[var(--border-default)] px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl">
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

            <div className="flex items-center gap-2.5">
              <span className="text-[var(--border-default)]">|</span>

              {/* Digital Timer Display */}
              <span className={`font-mono text-sm sm:text-base font-bold tracking-wider ${timer.isRunning ? 'text-[var(--accent-primary)] animate-pulse' : 'text-[var(--text-primary)]'}`}>
                {timer.formattedTime}
              </span>

              {/* Timer Action Buttons */}
              <div className="flex items-center gap-1 ml-0.5">
                <button
                  onClick={timer.isRunning ? timer.pauseTimer : timer.startTimer}
                  className="p-1.5 rounded-lg bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-primary-hover)] transition-colors cursor-pointer"
                  title={timer.isRunning ? "Pause Timer" : "Start Timer"}
                >
                  {timer.isRunning ? <Pause size={12} /> : <Play size={12} className="ml-0.5" />}
                </button>
                <button
                  onClick={timer.resetTimer}
                  className="p-1.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] transition-colors cursor-pointer"
                  title="Reset Timer"
                >
                  <RotateCcw size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
