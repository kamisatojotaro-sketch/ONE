import { CheckCircle2, ChevronRight, AlertCircle, Sparkles } from 'lucide-react';
import { NCERT_SYLLABUS } from '../../data/ncertSyllabus';

export default function ChapterList({
  selectedSubject,
  selectedVolume,
  onSelectChapter,
  completedSections,
  completedPortionChapters
}) {
  const subject = NCERT_SYLLABUS[selectedSubject];
  if (!subject) return null;

  const volume = subject.volumes.find((v) => v.id === selectedVolume) || subject.volumes[0];
  if (!volume) return null;

  const calculateChapterCompletion = (chapter) => {
    if (!chapter.subchapters) return { total: 0, completed: 0, percentage: 0 };
    let total = 0;
    let completed = 0;

    chapter.subchapters.forEach((sub) => {
      if (sub.sections) {
        sub.sections.forEach((sec) => {
          total++;
          if (completedSections.includes(sec.id)) {
            completed++;
          }
        });
      }
    });

    if (total === 0) return { total: 0, completed: 0, percentage: 0 };
    return {
      total,
      completed,
      percentage: Math.round((completed / total) * 100)
    };
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Volume Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 p-3.5 sm:p-5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)]">
        <div>
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[var(--text-accent)] font-semibold">
            {subject.name} • {volume.title}
          </span>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-primary)] mt-0.5 sm:mt-1">
            {volume.subtitle}
          </h2>
        </div>
        <div className="text-xs font-sans text-[var(--text-secondary)]">
          <span className="font-semibold text-[var(--text-primary)]">{volume.chapters.length}</span> Chapters in this volume
        </div>
      </div>

      {/* Chapters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {volume.chapters.map((ch) => {
          const stats = calculateChapterCompletion(ch);
          const isPortion = ch.isExamPortion;
          const isPortionMarked = completedPortionChapters.includes(ch.id);

          return (
            <div
              key={ch.id}
              onClick={() => onSelectChapter(ch.id)}
              className={`p-4 sm:p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                ch.available
                  ? 'bg-[var(--bg-surface)] border-[var(--border-default)] hover:border-[var(--accent-primary)] hover:shadow-md hover:-translate-y-1'
                  : 'bg-[var(--bg-surface)]/60 border-[var(--border-subtle)] opacity-75'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                    Chapter {ch.number}
                  </span>

                  <div className="flex items-center gap-1.5">
                    {isPortion && (
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-full bg-[var(--badge-recommended-bg)]/15 text-[var(--text-accent)] border border-[var(--badge-recommended-bg)]/30">
                        <Sparkles size={11} />
                        Exam Portion
                      </span>
                    )}

                    {!ch.available && (
                      <span className="text-[10px] font-sans px-2 py-0.5 rounded-md bg-[var(--bg-base)] text-[var(--text-muted)] border border-[var(--border-subtle)] flex items-center gap-1">
                        <AlertCircle size={11} />
                        Not available yet
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-2 line-clamp-2">
                  {ch.title}
                </h3>
              </div>

              {ch.available ? (
                <div className="pt-4 mt-4 border-t border-[var(--border-subtle)]">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-[var(--text-muted)]">
                      {ch.subchapters?.length || 0} Topics • {stats.total} Sections
                    </span>
                    <span className="font-mono font-medium text-[var(--accent-primary)]">
                      {stats.percentage}%
                    </span>
                  </div>

                  <div className="w-full h-1.5 rounded-full bg-[var(--border-default)] overflow-hidden mb-3">
                    <div
                      className="h-full rounded-full bg-[var(--accent-primary)] transition-all duration-300"
                      style={{ width: `${stats.percentage}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs text-[var(--accent-primary)] font-medium">
                    <span className="flex items-center gap-1">
                      {stats.percentage === 100 && (
                        <CheckCircle2 size={13} className="text-[var(--accent-primary)]" />
                      )}
                      {stats.percentage === 100 ? 'Completed' : 'Study Notes'}
                    </span>
                    <ChevronRight size={15} />
                  </div>
                </div>
              ) : (
                <div className="pt-4 mt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-muted)]">
                  <span>Content not available for now</span>
                  <ChevronRight size={15} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
