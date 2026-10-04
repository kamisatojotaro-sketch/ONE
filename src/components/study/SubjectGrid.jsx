import { Zap, FlaskConical, Dna, ArrowRight, CheckCircle2, Bookmark, Brain, Search, Globe, Sparkles, Award } from 'lucide-react';
import { NCERT_SYLLABUS, EXAM_PORTIONS } from '../../data/ncertSyllabus';

export default function SubjectGrid({ 
  onSelectSubject, 
  onSelectSubjectAndTab,
  completedSections, 
  completedPortionChapters,
  onOpenUniversalSearch,
  onOpenSubjectSearch
}) {
  const subjects = Object.values(NCERT_SYLLABUS);

  const getSubjectIcon = (id) => {
    switch (id) {
      case 'physics':
        return <Zap size={24} className="text-[#5B7B9A]" />;
      case 'chemistry':
        return <FlaskConical size={24} className="text-[#C75B3B]" />;
      case 'biology':
        return <Dna size={24} className="text-[#6B7F5E]" />;
      case 'psychology':
        return <Brain size={24} className="text-[#8E44AD]" />;
      default:
        return <Bookmark size={24} className="text-[var(--accent-primary)]" />;
    }
  };

  const calculateSubjectProgress = (subject) => {
    let totalSections = 0;
    let completed = 0;

    subject.volumes.forEach(vol => {
      vol.chapters.forEach(ch => {
        if (ch.subchapters) {
          ch.subchapters.forEach(sub => {
            if (sub.sections) {
              sub.sections.forEach(sec => {
                totalSections++;
                if (completedSections.includes(sec.id)) {
                  completed++;
                }
              });
            }
          });
        }
      });
    });

    if (totalSections === 0) return 0;
    return Math.round((completed / totalSections) * 100);
  };

  return (
    <div className="space-y-6 sm:space-y-10 animate-in fade-in duration-500">
      {/* Header section matching editorial theme */}
      <div className="border-b border-[var(--border-default)] pb-5 sm:pb-8">
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-default)] text-[11px] sm:text-xs text-[var(--text-secondary)] font-sans uppercase tracking-wider mb-3 sm:mb-4">
          <span>NCERT Class 12</span>
          <span>•</span>
          <span className="font-semibold text-[var(--text-accent)]">CBSE Core</span>
        </div>
        <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight">
          Study Session
          <span className="font-cursive text-xl sm:text-3xl md:text-4xl text-[var(--text-accent)] font-normal ml-2 sm:ml-3">
            quietly mastered
          </span>
        </h1>
        <p className="font-sans text-[var(--text-secondary)] mt-2 sm:mt-3 max-w-2xl text-xs sm:text-base leading-relaxed">
          Select a subject to explore textbook volumes, study high-yield NCERT notes, track completed subtopics, and practice exam portions.
        </p>
      </div>

      {/* Universal Search & Quick Subject Finders */}
      <div className="p-3.5 sm:p-5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)] shadow-xs space-y-3.5">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Universal Search Button Trigger */}
          <button
            onClick={onOpenUniversalSearch}
            className="flex-1 flex items-center justify-between gap-3 px-3.5 sm:px-4 py-3 bg-[var(--bg-surface)] border border-[var(--border-default)] hover:border-[var(--accent-primary)] rounded-xl text-left text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all hover:shadow-xs cursor-pointer group touch-manipulation active:scale-[0.99]"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[var(--accent-primary)]/15 flex items-center justify-center text-[var(--accent-primary)] shrink-0">
                <Search size={16} />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-medium text-[var(--text-primary)] truncate flex items-center gap-2">
                  <span>Universal Knowledge & Topic Search</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono">
                    All Subjects
                  </span>
                </div>
                <div className="text-[11px] text-[var(--text-muted)] truncate hidden sm:block">
                  Search topics, definitions, formulas, reactions & specific words across Physics, Chemistry, Biology & Psychology
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <kbd className="hidden md:inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-muted)]">
                Ctrl + K
              </kbd>
              <div className="p-1 rounded-lg text-[var(--accent-primary)] group-hover:translate-x-0.5 transition-transform">
                <ArrowRight size={16} />
              </div>
            </div>
          </button>
        </div>

        {/* Quick Subject Search Scope Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none touch-pan-x text-xs">
          <span className="text-[var(--text-muted)] text-[11px] font-medium shrink-0 flex items-center gap-1">
            <Sparkles size={12} className="text-[var(--accent-primary)]" />
            Subject Search:
          </span>
          {subjects.map((s) => (
            <button
              key={s.id}
              onClick={() => onOpenSubjectSearch && onOpenSubjectSearch(s.id)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer shrink-0 hover:-translate-y-0.5 touch-manipulation active:scale-95"
            >
              {getSubjectIcon(s.id, 13)}
              <span>Search {s.name}</span>
            </button>
          ))}

          <div className="h-4 w-[1px] bg-[var(--border-subtle)] shrink-0 hidden sm:block" />

          <button
            onClick={() => onSelectSubjectAndTab ? onSelectSubjectAndTab('physics', 'IMPORTANT') : onSelectSubject('physics')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/15 border border-amber-500/35 text-xs font-bold text-amber-500 dark:text-amber-400 hover:bg-amber-500/25 transition-all cursor-pointer shrink-0 hover:-translate-y-0.5 touch-manipulation active:scale-95"
          >
            <Award size={13} className="text-amber-500" />
            <span>Top 22 Guaranteed Physics Questions</span>
          </button>
        </div>
      </div>

      {/* Subject Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {subjects.map((subj) => {
          const progress = calculateSubjectProgress(subj);
          const portionChapters = EXAM_PORTIONS[subj.id] || [];
          const completedPortions = completedPortionChapters.filter(id => portionChapters.includes(id)).length;

          return (
            <div
              key={subj.id}
              onClick={() => onSelectSubject(subj.id)}
              className="group relative flex flex-col justify-between p-5 sm:p-7 bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5 hover:border-[var(--accent-primary)] overflow-hidden touch-manipulation"
            >
              {/* Top Row: Icon & Code & Search */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] transition-colors group-hover:scale-105 duration-200">
                    {getSubjectIcon(subj.id)}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenSubjectSearch && onOpenSubjectSearch(subj.id);
                      }}
                      className="p-2 rounded-xl border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--accent-primary)] hover:bg-[var(--bg-elevated)] transition-colors cursor-pointer min-w-[36px] min-h-[36px] flex items-center justify-center touch-manipulation active:scale-90"
                      title={`Search topics & words in ${subj.name}`}
                    >
                      <Search size={14} />
                    </button>
                    <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)]">
                      Code {subj.code}
                    </span>
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors mb-2">
                  {subj.name}
                </h3>
                <p className="font-sans text-xs text-[var(--text-secondary)] line-clamp-2 leading-relaxed mb-6">
                  {subj.description}
                </p>
              </div>

              {/* Middle: Stats */}
              <div className="space-y-4 pt-4 border-t border-[var(--border-subtle)]">
                <div className="flex items-center justify-between text-xs text-[var(--text-secondary)]">
                  <span>Volumes</span>
                  <span className="font-medium text-[var(--text-primary)]">{subj.volumes.length} Books</span>
                </div>

                <div className="flex items-center justify-between text-xs text-[var(--text-secondary)]">
                  <span>Exam Portions</span>
                  <span className="font-medium text-[var(--accent-primary)] flex items-center gap-1">
                    <CheckCircle2 size={13} />
                    {completedPortions} / {portionChapters.length} Chapters
                  </span>
                </div>

                {/* Progress bar */}
                <div>
                  <div className="flex justify-between items-center text-xs font-medium mb-1.5">
                    <span className="text-[var(--text-muted)]">Notes Progress</span>
                    <span className="text-[var(--text-primary)]">{progress}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[var(--border-default)] overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500 bg-[var(--accent-primary)]"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Bottom action link */}
                <div className="pt-2 flex items-center justify-between text-xs font-medium text-[var(--accent-primary)] group-hover:text-[var(--accent-primary-hover)]">
                  <span>Open Subject Session</span>
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
