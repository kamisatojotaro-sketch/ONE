import { useState, useMemo, useEffect } from 'react';
import { ChevronDown, ChevronUp, Award, Filter, Sparkles, RotateCw, BookOpen, CheckCircle2, Copy, Check } from 'lucide-react';
import { getGeneratedPYQs } from '../../data/questionEngine';
import { NCERT_SYLLABUS } from '../../data/ncertSyllabus';
import { formatMathString } from './FormulaCard';

export default function PyqTabContent({
  selectedSubject,
  selectedChapter,
  selectedSubchapter,
  onSelectChapter
}) {
  const [seed, setSeed] = useState(1);
  const [expandedId, setExpandedId] = useState(null);
  const [chapterFilter, setChapterFilter] = useState(selectedChapter || 'ALL');
  const [subchapterFilter, setSubchapterFilter] = useState(selectedSubchapter || 'ALL');

  // Sync when selectedChapter or selectedSubchapter changes from parent
  useEffect(() => {
    if (selectedChapter) {
      setChapterFilter(selectedChapter);
    } else {
      setChapterFilter('ALL');
    }
    setSubchapterFilter(selectedSubchapter || 'ALL');
    setExpandedId(null);
  }, [selectedChapter, selectedSubchapter]);

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

  // Extract subchapters when a specific chapter is selected
  const availableSubchapters = useMemo(() => {
    if (!subject || chapterFilter === 'ALL') return [];
    for (const vol of subject.volumes) {
      const ch = vol.chapters.find(c => c.id === chapterFilter);
      if (ch && ch.subchapters) return ch.subchapters;
    }
    return [];
  }, [subject, chapterFilter]);

  // Fetch PYQs dynamically from engine with strict scoping
  const pyqs = useMemo(() => {
    const chId = chapterFilter === 'ALL' ? null : chapterFilter;
    const subId = subchapterFilter === 'ALL' ? null : subchapterFilter;
    return getGeneratedPYQs(selectedSubject, chId, subId, 25, seed);
  }, [selectedSubject, chapterFilter, subchapterFilter, seed]);

  const [copiedId, setCopiedId] = useState(null);

  const handleCopyAnswer = (text, id) => {
    if (!text) return;
    const plain = text.replace(/<[^>]+>/g, '').replace(/\*\*/g, '');
    navigator.clipboard.writeText(plain).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }).catch(() => {});
  };

  const handleRefresh = () => {
    setSeed(prev => prev + 1);
    setExpandedId(null);
  };

  return (
    <div className="space-y-4 sm:space-y-6 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3.5 p-4 sm:p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)]">
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
              : subchapterFilter === 'ALL'
              ? `Scoped specifically to ${availableChapters.find(c => c.id === chapterFilter)?.title || 'this chapter'}.`
              : `Curated exclusively for subchapter: ${availableSubchapters.find(s => s.id === subchapterFilter)?.title || subchapterFilter}.`}
          </p>
        </div>

        {/* Filter & Refresh Controls */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          {/* Chapter Filter Selector */}
          <div className="flex items-center gap-1.5">
            <Filter size={13} className="text-[var(--text-muted)] shrink-0" />
            <div className="relative w-full sm:w-52">
              <select
                value={chapterFilter}
                onChange={(e) => {
                  const val = e.target.value;
                  setChapterFilter(val);
                  setSubchapterFilter('ALL');
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

          {/* Subchapter Filter Selector */}
          {chapterFilter !== 'ALL' && availableSubchapters.length > 0 && (
            <div className="relative w-full sm:w-56">
              <select
                value={subchapterFilter}
                onChange={(e) => {
                  setSubchapterFilter(e.target.value);
                  setExpandedId(null);
                }}
                className="w-full appearance-none bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-default)] px-3 py-1.5 pr-8 rounded-xl font-medium text-xs cursor-pointer hover:border-[var(--accent-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)] transition-colors shadow-xs"
              >
                <option value="ALL">All Subchapters in Ch</option>
                {availableSubchapters.map((sub) => (
                  <option key={sub.id} value={sub.id}>
                    {sub.title}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--text-muted)]" />
            </div>
          )}

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
        <span>Click chevron to view verified model answer</span>
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
                  <p 
                    className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: formatMathString(item.question) }}
                  />
                </div>

                <button
                  onClick={() => setExpandedId(isExpanded ? 'NONE' : item.id)}
                  className="p-1.5 sm:p-2 rounded-xl border border-[var(--border-default)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors shrink-0 cursor-pointer shadow-xs"
                  title={isExpanded ? "Hide answer" : "View verified model answer"}
                >
                  {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              </div>

              {isExpanded && (
                <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-[var(--border-subtle)] space-y-2.5 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                      <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                      Verified Board Model Answer:
                    </span>
                    <button
                      onClick={() => handleCopyAnswer(item.solution, item.id)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-[var(--border-default)] text-[11px] font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors cursor-pointer"
                      title="Copy model answer"
                    >
                      {copiedId === item.id ? (
                        <>
                          <Check size={12} className="text-emerald-500 shrink-0" />
                          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={12} className="shrink-0" />
                          <span>Copy Answer</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div 
                    className="font-sans text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-wrap bg-[var(--bg-elevated)] p-3.5 sm:p-4 rounded-xl border border-[var(--border-subtle)] break-words"
                    dangerouslySetInnerHTML={{ __html: formatMathString(item.solution) }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
