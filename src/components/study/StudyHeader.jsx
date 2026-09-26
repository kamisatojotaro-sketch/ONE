import { ArrowLeft, Play, Pause, RotateCcw, Clock, BookOpen, ChevronDown } from 'lucide-react';
import { NCERT_SYLLABUS } from '../../data/ncertSyllabus';
import { useStudyTimer } from '../../hooks/useStudyTimer';

export default function StudyHeader({
  selectedSubject,
  selectedVolume,
  onSelectVolume,
  onBackToSubjects,
  volumeProgress
}) {
  const subject = NCERT_SYLLABUS[selectedSubject];
  const timer = useStudyTimer(25);

  if (!subject) return null;

  return (
    <header className="bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-2xl p-5 mb-8 shadow-sm">
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6">
        
        {/* Left: Back button & Dynamic Volume Progress */}
        <div className="flex items-center gap-4 flex-1">
          <button
            onClick={onBackToSubjects}
            className="p-2.5 rounded-xl border border-[var(--border-default)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors flex items-center justify-center shrink-0"
            title="Back to all subjects"
          >
            <ArrowLeft size={18} />
          </button>

          <div className="flex-1 max-w-xs">
            <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
              <span className="text-[var(--text-muted)] flex items-center gap-1.5 truncate">
                <BookOpen size={13} className="text-[var(--accent-primary)] shrink-0" />
                Volume Progress
              </span>
              <span className="text-[var(--text-primary)] font-mono">{volumeProgress}%</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-[var(--border-default)] overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500 bg-[var(--accent-primary)]"
                style={{ width: `${volumeProgress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Middle Top: NCERT Volume Dropdown */}
        <div className="flex items-center justify-center shrink-0">
          <div className="relative">
            <select
              value={selectedVolume || ''}
              onChange={(e) => onSelectVolume(e.target.value)}
              className="appearance-none bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-default)] px-4 py-2.5 pr-9 rounded-xl font-medium text-sm cursor-pointer hover:border-[var(--accent-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)] transition-colors shadow-sm"
            >
              {subject.volumes.map((vol) => (
                <option key={vol.id} value={vol.id} className="bg-[var(--bg-surface)] text-[var(--text-primary)]">
                  {vol.title}
                </option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--text-muted)]" />
          </div>
        </div>

        {/* Top Right: Study Timer Widget */}
        <div className="flex items-center justify-end gap-3 bg-[var(--bg-elevated)] border border-[var(--border-default)] px-3.5 py-2 rounded-xl shrink-0">
          <Clock size={16} className="text-[var(--accent-primary)] shrink-0" />

          {/* Minutes input */}
          <div className="flex items-center gap-1">
            <input
              type="number"
              min="1"
              max="180"
              value={timer.minutes}
              disabled={timer.isRunning}
              onChange={(e) => timer.changeDuration(e.target.value)}
              className="w-12 text-center text-xs font-mono font-semibold py-1 bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-default)] rounded-md focus:outline-none disabled:opacity-60"
              title="Set study minutes"
            />
            <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-mono">min</span>
          </div>

          <span className="text-[var(--border-default)]">|</span>

          {/* Digital Timer Display */}
          <span className={`font-mono text-base font-bold tracking-wider ${timer.isRunning ? 'text-[var(--accent-primary)] animate-pulse' : 'text-[var(--text-primary)]'}`}>
            {timer.formattedTime}
          </span>

          {/* Timer Action Buttons */}
          <div className="flex items-center gap-1 ml-1">
            <button
              onClick={timer.isRunning ? timer.pauseTimer : timer.startTimer}
              className="p-1.5 rounded-lg bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-primary-hover)] transition-colors"
              title={timer.isRunning ? "Pause Timer" : "Start Timer"}
            >
              {timer.isRunning ? <Pause size={13} /> : <Play size={13} className="ml-0.5" />}
            </button>
            <button
              onClick={timer.resetTimer}
              className="p-1.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] transition-colors"
              title="Reset Timer"
            >
              <RotateCcw size={13} />
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}
