import { useState, useMemo } from 'react';
import { CheckCircle2, ChevronRight, AlertCircle, Sparkles, BookOpen, Target, ArrowDownUp, Filter, Flame } from 'lucide-react';
import { NCERT_SYLLABUS } from '../../data/ncertSyllabus';
import PriorityBadge from './PriorityBadge';
import { getDefaultPriority } from '../../data/priorityData';

export default function ChapterList({
  selectedSubject,
  selectedVolume,
  onSelectChapter,
  completedSections = [],
  completedPortionChapters = [],
  getPriority,
  onSetPriority,
  onResetPriority
}) {
  const [priorityFilter, setPriorityFilter] = useState('ALL'); // 'ALL' | 'HIGH' | 'MED' | 'LOW'
  const [sortBy, setSortBy] = useState('DEFAULT'); // 'DEFAULT' | 'PRIORITY_DESC' | 'PRIORITY_ASC'

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

  // Enrich chapters with priority ratings
  const chaptersWithPriority = useMemo(() => {
    return volume.chapters.map((ch) => {
      const priority = getPriority ? getPriority(ch.id) : getDefaultPriority(ch.id);
      return {
        ...ch,
        priority
      };
    });
  }, [volume.chapters, getPriority]);

  // Priority count stats for filter tabs
  const priorityStats = useMemo(() => {
    let high = 0;
    let med = 0;
    let low = 0;
    chaptersWithPriority.forEach((c) => {
      if (c.priority >= 8) high++;
      else if (c.priority >= 5) med++;
      else low++;
    });
    return {
      all: chaptersWithPriority.length,
      high,
      med,
      low
    };
  }, [chaptersWithPriority]);

  // Filtered & Sorted Chapter List
  const displayedChapters = useMemo(() => {
    let list = chaptersWithPriority.filter((c) => {
      if (priorityFilter === 'HIGH') return c.priority >= 8;
      if (priorityFilter === 'MED') return c.priority >= 5 && c.priority <= 7;
      if (priorityFilter === 'LOW') return c.priority <= 4;
      return true;
    });

    if (sortBy === 'PRIORITY_DESC') {
      list = [...list].sort((a, b) => b.priority - a.priority);
    } else if (sortBy === 'PRIORITY_ASC') {
      list = [...list].sort((a, b) => a.priority - b.priority);
    }
    return list;
  }, [chaptersWithPriority, priorityFilter, sortBy]);

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

      {/* Filter and Sort Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-2xs">
        {/* Priority Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
          <button
            onClick={() => setPriorityFilter('ALL')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer touch-manipulation ${
              priorityFilter === 'ALL'
                ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
            }`}
          >
            All Chapters ({priorityStats.all})
          </button>
          <button
            onClick={() => setPriorityFilter('HIGH')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer touch-manipulation ${
              priorityFilter === 'HIGH'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-amber-500 border border-[var(--border-subtle)]'
            }`}
          >
            <Flame size={13} className={priorityFilter === 'HIGH' ? 'text-white' : 'text-amber-500'} />
            High Priority 8-10 ({priorityStats.high})
          </button>
          <button
            onClick={() => setPriorityFilter('MED')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer touch-manipulation ${
              priorityFilter === 'MED'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-sky-500 border border-[var(--border-subtle)]'
            }`}
          >
            Core 5-7 ({priorityStats.med})
          </button>
          <button
            onClick={() => setPriorityFilter('LOW')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer touch-manipulation ${
              priorityFilter === 'LOW'
                ? 'bg-stone-600 text-white shadow-xs'
                : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
            }`}
          >
            Low 0-4 ({priorityStats.low})
          </button>
        </div>

        {/* Sort Controls */}
        <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
          <span className="text-[11px] font-mono text-[var(--text-muted)] hidden md:inline">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs font-semibold bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-default)] px-3 py-1.5 rounded-xl cursor-pointer hover:border-[var(--accent-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)]"
          >
            <option value="DEFAULT">Syllabus Order</option>
            <option value="PRIORITY_DESC">🔥 Priority: High to Low</option>
            <option value="PRIORITY_ASC">⚡ Priority: Low to High</option>
          </select>
        </div>
      </div>

      {/* Chapters Grid */}
      {displayedChapters.length === 0 ? (
        <div className="p-8 text-center bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-2xl space-y-3">
          <p className="text-sm font-sans text-[var(--text-secondary)]">No chapters match the selected priority filter.</p>
          <button
            onClick={() => setPriorityFilter('ALL')}
            className="px-4 py-2 rounded-xl bg-[var(--accent-primary)] text-white text-xs font-bold cursor-pointer"
          >
            Show All Chapters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {displayedChapters.map((ch) => {
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
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                      Chapter {ch.number}
                    </span>
                    <PriorityBadge
                      id={ch.id}
                      rating={ch.priority}
                      title={ch.title}
                      onChangePriority={onSetPriority}
                      onResetPriority={onResetPriority}
                      size="sm"
                    />
                  </div>

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
                <div className="pt-4 mt-4 border-t border-[var(--border-subtle)] space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[var(--text-muted)]">
                      {ch.subchapters?.length || 0} Topics • {stats.total} Sections
                    </span>
                    <span className="font-mono font-medium text-[var(--accent-primary)]">
                      {stats.percentage}%
                    </span>
                  </div>

                  <div className="w-full h-1.5 rounded-full bg-[var(--border-default)] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[var(--accent-primary)] transition-all duration-300"
                      style={{ width: `${stats.percentage}%` }}
                    />
                  </div>

                  {/* Mode Selector Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectChapter(ch.id, 'GENERAL');
                      }}
                      className="flex items-center justify-center gap-1.5 px-2.5 py-1.5 sm:py-2 rounded-xl text-xs font-semibold bg-[var(--bg-elevated)] border border-[var(--border-default)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-all cursor-pointer shadow-2xs"
                      title="Read complete NCERT theory, derivations & notes"
                    >
                      <BookOpen size={13} className="text-[var(--accent-primary)] shrink-0" />
                      <span className="truncate">General Study</span>
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectChapter(ch.id, 'QUESTIONS');
                      }}
                      className="flex items-center justify-center gap-1.5 px-2.5 py-1.5 sm:py-2 rounded-xl text-xs font-semibold bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-primary-hover)] transition-all cursor-pointer shadow-xs"
                      title="Focus on important exam questions, blueprints & PYQs"
                    >
                      <Target size={13} className="shrink-0" />
                      <span className="truncate">Important Qs</span>
                    </button>
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
    )}
  </div>
);
}
