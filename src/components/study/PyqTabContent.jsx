import { useState, useMemo, useEffect } from 'react';
import { ChevronDown, ChevronUp, Award, Filter, Sparkles, RotateCw, BookOpen } from 'lucide-react';
import { getGeneratedPYQs } from '../../data/questionEngine';
import { NCERT_SYLLABUS } from '../../data/ncertSyllabus';

export default function PyqTabContent({
  selectedSubject,
  selectedChapter,
  selectedSubchapter,
  onSelectChapter
}) {
  const [seed, setSeed] = useState(1);
  const [expandedId, setExpandedId] = useState(null);
  const [chapterFilter, setChapterFilter] = useState(selectedChapter || 'ALL');

  // Sync when selectedChapter changes from parent
  useEffect(() => {
    if (selectedChapter) {
      setChapterFilter(selectedChapter);
    } else {
      setChapterFilter('ALL');
    }
    setExpandedId(null);
  }, [selectedChapter]);

  // Extract chapters for this subject
  const subject = NCERT_SYLLABUS[selectedSubject];
  const availableChapters = useMemo(() => {
    if (!subject) return [];
    const list = [];
    subject.volumes.forEach(vol => {
      vol.chapters.forEach(ch => {
        list.push({ id: ch.id, title: `Ch ${ch.number}: ${ch.title}` });
      });
    });
    return list;
  }, [subject]);

  // Fetch PYQs dynamically from engine
  const pyqs = useMemo(() => {
    const chId = chapterFilter === 'ALL' ? null : chapterFilter;
    return getGeneratedPYQs(selectedSubject, chId, null, 25, seed);
  }, [selectedSubject, chapterFilter, seed]);

  const handleRefresh = () => {
    setSeed(prev => prev + 1);
    setExpandedId(null);
  };

  return (
    <div className="space-y-4 sm:space-y-6 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 p-4 sm:p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)]">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--bg-surface)] text-[11px] font-mono text-[var(--accent-primary)] font-semibold uppercase tracking-wider mb-1.5 border border-[var(--border-subtle)]">
            <Sparkles size={11} />
            <span>CBSE Board Examination Bank (1000+ Questions Pool)</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
            <Award size={20} className="text-[var(--accent-primary)] shrink-0" />
            Previous Year Questions (PYQs)
          </h3>
          <p className="font-sans text-xs text-[var(--text-secondary)] mt-1">
            {chapterFilter === 'ALL'
              ? 'Displaying handpicked board exam questions across all syllabus chapters.'
              : `Scoped specifically to ${availableChapters.find(c => c.id === chapterFilter)?.title || 'this chapter'}.`}
          </p>
        </div>

        {/* Filter & Refresh Controls */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 shrink-0">
          {/* Chapter Filter Selector */}
          <div className="flex items-center gap-1.5 flex-1 sm:flex-none">
            <Filter size={13} className="text-[var(--text-muted)] shrink-0" />
            <div className="relative w-full sm:w-60">
              <select
                value={chapterFilter}
                onChange={(e) => {
                  const val = e.target.value;
                  setChapterFilter(val);
                  setExpandedId(null);
                  if (onSelectChapter && val !== 'ALL') {
                    onSelectChapter(val);
                  }
                }}
                className="w-full appearance-none bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-default)] px-3 py-1.5 pr-8 rounded-xl font-medium text-xs cursor-pointer hover:border-[var(--accent-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)] transition-colors shadow-xs"
              >
                <option value="ALL">All Syllabus Chapters</option>
                {availableChapters.map((ch) => (
                  <option key={ch.id} value={ch.id}>
                    {ch.title}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--text-muted)]" />
            </div>
          </div>

          <button
            onClick={handleRefresh}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[var(--border-default)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] transition-colors cursor-pointer shadow-xs"
            title="Load different questions from 1000+ pool"
          >
            <RotateCw size={13} />
            Refresh
          </button>
        </div>
      </div>

      {/* Scope Status Bar */}
      <div className="flex items-center justify-between px-1 text-xs text-[var(--text-muted)] font-mono">
        <span>Showing {pyqs.length} Board Questions ({chapterFilter === 'ALL' ? 'All Chapters' : 'Active Chapter'})</span>
        <span>Click chevron to expand marking scheme</span>
      </div>

      {/* Question Cards List */}
      <div className="space-y-3 sm:space-y-4">
        {pyqs.map((item, idx) => {
          const isExpanded = expandedId === item.id || (idx === 0 && expandedId === null);

          return (
            <div
              key={item.id || idx}
              className="bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-2xl p-4 sm:p-6 transition-all shadow-sm hover:border-[var(--border-default)]"
            >
              <div className="flex items-start justify-between gap-3 sm:gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5 mb-2">
                    <span className="inline-block text-[11px] sm:text-xs font-mono font-bold text-[var(--text-accent)] bg-[var(--badge-recommended-bg)]/10 border border-[var(--badge-recommended-bg)]/20 px-2.5 py-0.5 rounded-full">
                      {item.year || 'CBSE Board Standard'}
                    </span>
                    {item.chapterName && (
                      <span className="inline-block text-[10px] sm:text-[11px] font-mono text-[var(--text-secondary)] bg-[var(--bg-elevated)] border border-[var(--border-subtle)] px-2 py-0.5 rounded-md">
                        {item.chapterName}
                      </span>
                    )}
                  </div>
                  <p className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)] leading-relaxed">
                    {item.question}
                  </p>
                </div>

                <button
                  onClick={() => setExpandedId(isExpanded ? 'NONE' : item.id)}
                  className="p-1.5 sm:p-2 rounded-xl border border-[var(--border-default)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors shrink-0 cursor-pointer shadow-xs"
                  title={isExpanded ? "Hide solution" : "View marking scheme solution"}
                >
                  {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              </div>

              {isExpanded && (
                <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-[var(--border-subtle)] space-y-2 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] sm:text-xs font-mono font-bold text-[var(--accent-primary)] uppercase tracking-wider block">
                      Official Stepwise Marking Scheme:
                    </span>
                    <span className="text-[10px] font-cursive text-[var(--text-muted)]">
                      board examiner answer key
                    </span>
                  </div>
                  <div className="font-sans text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-wrap bg-[var(--bg-elevated)] p-3.5 sm:p-4 rounded-xl border border-[var(--border-subtle)] break-words">
                    {item.solution}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
