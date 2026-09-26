import { Target, CheckCircle2, Circle, ArrowRight, Zap, FlaskConical, Dna } from 'lucide-react';
import { NCERT_SYLLABUS, EXAM_PORTIONS } from '../../data/ncertSyllabus';

export default function PortionsTabContent({
  completedPortionChapters,
  onTogglePortionChapter,
  onJumpToChapter,
  portionsStats
}) {
  const getSubjectIcon = (subjKey) => {
    switch (subjKey) {
      case 'physics':
        return <Zap size={18} className="text-[#5B7B9A]" />;
      case 'chemistry':
        return <FlaskConical size={18} className="text-[#C75B3B]" />;
      case 'biology':
        return <Dna size={18} className="text-[#6B7F5E]" />;
      default:
        return <Target size={18} className="text-[var(--accent-primary)]" />;
    }
  };

  const getSubjectPortionChapters = (subjKey) => {
    const subject = NCERT_SYLLABUS[subjKey];
    const chapterIds = EXAM_PORTIONS[subjKey] || [];
    const list = [];

    subject.volumes.forEach((vol) => {
      vol.chapters.forEach((ch) => {
        if (chapterIds.includes(ch.id)) {
          list.push({ ...ch, volumeId: vol.id });
        }
      });
    });

    return list;
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      {/* Top Banner: Exam Readiness Progress Bar */}
      <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)] shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[10px] sm:text-xs text-[var(--text-secondary)] font-mono uppercase tracking-wider mb-2">
              <Target size={13} className="text-[var(--accent-primary)]" />
              <span>Target Exam Portions</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Exam Portions Tracker
            </h2>
            <p className="font-sans text-xs text-[var(--text-secondary)] mt-1">
              Mark off syllabus chapters as you master them to track overall exam readiness.
            </p>
          </div>

          <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 pt-2 sm:pt-0 border-[var(--border-subtle)]">
            <span className="font-mono text-2xl sm:text-3xl font-bold text-[var(--accent-primary)]">
              {portionsStats.percentage}%
            </span>
            <span className="block text-[11px] sm:text-xs text-[var(--text-muted)] font-mono">
              {portionsStats.completed} of {portionsStats.total} Chapters Done
            </span>
          </div>
        </div>

        {/* Master Progress Bar */}
        <div className="w-full h-2.5 sm:h-3 rounded-full bg-[var(--border-default)] overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500 bg-[var(--accent-primary)]"
            style={{ width: `${portionsStats.percentage}%` }}
          />
        </div>
      </div>

      {/* 3 Subject Portions Breakdowns */}
      <div className="space-y-4 sm:space-y-6">
        {['physics', 'biology', 'chemistry'].map((subjKey) => {
          const subject = NCERT_SYLLABUS[subjKey];
          const chapters = getSubjectPortionChapters(subjKey);
          const completedCount = chapters.filter((c) => completedPortionChapters.includes(c.id)).length;
          const subjectPct = Math.round((completedCount / (chapters.length || 1)) * 100);

          return (
            <div
              key={subjKey}
              className="bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-2xl p-4 sm:p-6 shadow-sm space-y-3 sm:space-y-4"
            >
              {/* Subject Title & Sub-Progress */}
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3 sm:pb-4 gap-2">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] shrink-0">
                    {getSubjectIcon(subjKey)}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[var(--text-primary)] truncate">
                      {subject.name}
                    </h3>
                    <span className="text-[11px] sm:text-xs text-[var(--text-muted)] font-sans">
                      {completedCount} / {chapters.length} Portion Chapters
                    </span>
                  </div>
                </div>

                <div className="w-24 sm:w-32 shrink-0">
                  <div className="flex justify-between text-[11px] sm:text-xs font-mono mb-1 text-[var(--text-secondary)]">
                    <span>Progress</span>
                    <span>{subjectPct}%</span>
                  </div>
                  <div className="w-full h-1.5 sm:h-2 rounded-full bg-[var(--border-default)] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[var(--accent-primary)] transition-all duration-300"
                      style={{ width: `${subjectPct}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Chapters Checklist */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                {chapters.map((ch) => {
                  const isDone = completedPortionChapters.includes(ch.id);

                  return (
                    <div
                      key={ch.id}
                      className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 transition-all ${
                        isDone
                          ? 'bg-[var(--accent-primary)]/10 border-[var(--accent-primary)]/40 text-[var(--text-primary)]'
                          : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--border-default)]'
                      }`}
                    >
                      <button
                        onClick={() => onTogglePortionChapter(ch.id)}
                        className="flex items-center gap-3 text-left flex-1 cursor-pointer"
                        title={isDone ? "Mark chapter uncompleted" : "Mark chapter completed"}
                      >
                        <span className={`shrink-0 ${isDone ? 'text-[var(--accent-primary)]' : 'text-[var(--text-muted)]'}`}>
                          {isDone ? (
                            <CheckCircle2 size={20} className="fill-current text-white stroke-[var(--accent-primary)]" />
                          ) : (
                            <Circle size={20} strokeWidth={2} />
                          )}
                        </span>
                        <div>
                          <span className="text-[11px] font-mono text-[var(--text-muted)] block">
                            Ch {ch.number}
                          </span>
                          <span className="text-sm font-semibold font-serif block line-clamp-1">
                            {ch.title}
                          </span>
                        </div>
                      </button>

                      {ch.available && (
                        <button
                          onClick={() => onJumpToChapter(subjKey, ch.volumeId, ch.id)}
                          className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--accent-primary)] hover:bg-[var(--bg-surface)] transition-colors shrink-0"
                          title="Open chapter notes"
                        >
                          <ArrowRight size={16} />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
