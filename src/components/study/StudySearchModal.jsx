import { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Search, X, Globe, Zap, FlaskConical, Dna, Brain, 
  BookOpen, Bookmark, FileText, ArrowRight, CornerDownLeft, 
  Sparkles, HelpCircle, Layers, ChevronRight, Hash
} from 'lucide-react';
import { NCERT_SYLLABUS } from '../../data/ncertSyllabus';
import { searchStudyContent, POPULAR_SEARCH_SUGGESTIONS } from '../../utils/studySearch';
import PriorityBadge from './PriorityBadge';

export default function StudySearchModal({
  isOpen,
  onClose,
  initialScope = 'all', // 'all' | 'physics' | 'chemistry' | 'biology' | 'psychology'
  onNavigate,
  currentSubject = null,
  getPriority
}) {
  const [query, setQuery] = useState('');
  const [scope, setScope] = useState(initialScope || 'all');
  const [filterType, setFilterType] = useState('all');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const inputRef = useRef(null);
  const listRef = useRef(null);

  // Sync initial scope when modal opens
  useEffect(() => {
    if (isOpen) {
      setScope(initialScope || 'all');
      setFilterType('all');
      setSelectedIndex(0);
      setTimeout(() => {
        inputRef.current?.focus();
        inputRef.current?.select();
      }, 50);
    }
  }, [isOpen, initialScope]);

  // Execute search
  const results = useMemo(() => {
    if (!query.trim()) return [];
    return searchStudyContent({
      query,
      subject: scope,
      type: filterType,
      limit: 60
    });
  }, [query, scope, filterType]);

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [results]);

  // Keyboard navigation inside modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (results.length > 0 ? (prev + 1) % results.length : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (results.length > 0 ? (prev - 1 + results.length) % results.length : 0));
      } else if (e.key === 'Enter') {
        if (results.length > 0 && results[selectedIndex]) {
          e.preventDefault();
          handleSelectResult(results[selectedIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, onClose]);

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current && results.length > 0) {
      const activeEl = listRef.current.querySelector(`[data-index="${selectedIndex}"]`);
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [selectedIndex, results]);

  if (!isOpen) return null;

  const handleSelectResult = (item) => {
    onNavigate({
      subjectId: item.subjectId,
      volumeId: item.volumeId,
      chapterId: item.chapterId,
      subchapterId: item.subchapterId,
      tab: item.tab || 'NOTES',
      sectionId: item.sectionId || null
    });
    onClose();
  };

  const getSubjectIcon = (subjKey, size = 16) => {
    switch (subjKey) {
      case 'physics':
        return <Zap size={size} className="text-[#5B7B9A]" />;
      case 'chemistry':
        return <FlaskConical size={size} className="text-[#C75B3B]" />;
      case 'biology':
        return <Dna size={size} className="text-[#6B7F5E]" />;
      case 'psychology':
        return <Brain size={size} className="text-[#8E44AD]" />;
      default:
        return <Globe size={size} className="text-[var(--accent-primary)]" />;
    }
  };

  const getTypeBadge = (type) => {
    switch (type) {
      case 'topic':
        return {
          icon: <BookOpen size={12} />,
          label: 'Topic',
          style: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20'
        };
      case 'definition':
        return {
          icon: <Bookmark size={12} />,
          label: 'Definition',
          style: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
        };
      case 'formula':
        return {
          icon: <Hash size={12} />,
          label: 'Formula',
          style: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
        };
      case 'reaction':
        return {
          icon: <FlaskConical size={12} />,
          label: 'Reaction',
          style: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20'
        };
      case 'mnemonic':
        return {
          icon: <Sparkles size={12} />,
          label: 'Mnemonic',
          style: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20'
        };
      case 'question':
        return {
          icon: <HelpCircle size={12} />,
          label: 'Board Question',
          style: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20'
        };
      default:
        return {
          icon: <FileText size={12} />,
          label: 'Concept',
          style: 'bg-neutral-500/10 text-neutral-600 dark:text-neutral-400 border-neutral-500/20'
        };
    }
  };

  const highlightMatches = (text, q) => {
    if (!text || !q.trim()) return text;
    const words = q.trim().split(/\s+/).filter(Boolean);
    const regex = new RegExp(`(${words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) => 
      regex.test(part) ? (
        <mark key={i} className="bg-amber-400/30 text-[var(--text-primary)] font-semibold rounded px-0.5">
          {part}
        </mark>
      ) : part
    );
  };

  const suggestions = POPULAR_SEARCH_SUGGESTIONS[scope] || POPULAR_SEARCH_SUGGESTIONS.all;

  const subjectTabs = [
    { id: 'all', label: 'Universal (All)', icon: <Globe size={14} /> },
    { id: 'physics', label: 'Physics', icon: <Zap size={14} /> },
    { id: 'chemistry', label: 'Chemistry', icon: <FlaskConical size={14} /> },
    { id: 'biology', label: 'Biology', icon: <Dna size={14} /> },
    { id: 'psychology', label: 'Psychology', icon: <Brain size={14} /> },
    { id: 'english', label: 'English', icon: <BookOpen size={14} /> }
  ];

  const filterPills = [
    { id: 'all', label: 'All Results' },
    { id: 'topic', label: 'Topics & Chapters' },
    { id: 'definition', label: 'Definitions' },
    { id: 'formula_reaction', label: 'Formulas & Reactions' },
    { id: 'key_point', label: 'Key Concepts' },
    { id: 'question', label: 'Board Qs' }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-start justify-center sm:pt-16 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 cursor-pointer"
      onClick={onClose}
    >
      <div 
        className="w-full sm:max-w-3xl bg-[var(--bg-surface)] border-t sm:border border-[var(--border-default)] rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[94vh] sm:h-auto sm:max-h-[85vh] animate-in slide-in-from-bottom sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-200 cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Swipe / Grab Handle */}
        <div className="sm:hidden w-12 h-1.5 bg-[var(--border-default)] rounded-full mx-auto mt-2.5 mb-1 shrink-0" />

        {/* Top Header & Search Bar */}
        <div className="p-3 sm:p-4 border-b border-[var(--border-default)] bg-[var(--bg-elevated)]/60">
          <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-3">
            {/* Scope Switcher Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none touch-pan-x">
              {subjectTabs.map((tab) => {
                const isActive = scope === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setScope(tab.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all shrink-0 cursor-pointer touch-manipulation active:scale-95 ${
                      isActive
                        ? 'bg-[var(--accent-primary)] text-white shadow-sm font-semibold'
                        : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)]'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={onClose}
              className="p-2 sm:p-1.5 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors cursor-pointer shrink-0 min-w-[36px] min-h-[36px] flex items-center justify-center touch-manipulation"
              title="Close search (Esc)"
            >
              <X size={18} />
            </button>
          </div>

          {/* Search Input Box */}
          <div className="relative flex items-center">
            <div className="absolute left-3.5 pointer-events-none text-[var(--text-muted)]">
              <Search size={18} className="text-[var(--accent-primary)]" />
            </div>

            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={
                scope === 'all'
                  ? 'Search topics, words, formulas, reactions...'
                  : `Search in ${NCERT_SYLLABUS[scope]?.name || scope}...`
              }
              className="w-full pl-10 pr-20 py-2.5 sm:py-3 bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-xl text-base text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent transition-all shadow-inner"
            />

            <div className="absolute right-2.5 flex items-center gap-1.5">
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] text-xs cursor-pointer touch-manipulation"
                  title="Clear search"
                >
                  <X size={14} />
                </button>
              )}
              <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-elevated)] border border-[var(--border-default)] text-[var(--text-muted)]">
                ESC
              </kbd>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 mt-2 sm:mt-2.5 overflow-x-auto pb-0.5 scrollbar-none touch-pan-x text-xs">
            {filterPills.map((pill) => {
              const isPillActive = filterType === pill.id;
              return (
                <button
                  key={pill.id}
                  onClick={() => setFilterType(pill.id)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors shrink-0 cursor-pointer ${
                    isPillActive
                      ? 'bg-[var(--text-primary)] text-[var(--bg-surface)] font-semibold'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
                  }`}
                >
                  {pill.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Body / Suggestions */}
        <div ref={listRef} className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2 divide-y divide-[var(--border-subtle)]">
          {/* 1. Empty Query State: Suggestions */}
          {!query.trim() && (
            <div className="py-6 px-2 space-y-5 animate-in fade-in duration-200">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                  <Sparkles size={14} className="text-[var(--accent-primary)]" />
                  <span>Popular High-Yield Searches ({scope === 'all' ? 'Universal' : NCERT_SYLLABUS[scope]?.name})</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => setQuery(s.query)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-default)] hover:border-[var(--accent-primary)] text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer hover:-translate-y-0.5"
                    >
                      <span>{s.label}</span>
                      <span className="text-[10px] font-mono text-[var(--text-muted)] bg-[var(--bg-surface)] px-1.5 py-0.5 rounded border border-[var(--border-subtle)]">
                        {s.type}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] text-xs text-[var(--text-muted)] leading-relaxed flex items-center justify-between">
                <span>💡 Tip: Search by topic name, formula symbol (e.g. <code>EMF</code>, <code>flux</code>), reaction, or concept definition.</span>
                <span className="hidden sm:inline-flex items-center gap-1 font-mono text-[10px]">
                  Use <kbd className="px-1.5 py-0.5 bg-[var(--bg-elevated)] border rounded">↑</kbd> <kbd className="px-1.5 py-0.5 bg-[var(--bg-elevated)] border rounded">↓</kbd> to navigate
                </span>
              </div>
            </div>
          )}

          {/* 2. No Results Found State */}
          {query.trim() && results.length === 0 && (
            <div className="py-12 px-4 text-center space-y-4 animate-in fade-in duration-200">
              <div className="w-12 h-12 mx-auto rounded-full bg-[var(--bg-elevated)] border border-[var(--border-default)] flex items-center justify-center text-[var(--text-muted)]">
                <Search size={22} />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-[var(--text-primary)]">
                  No matches found for &ldquo;{query}&rdquo;
                </h4>
                <p className="font-sans text-xs text-[var(--text-secondary)] max-w-md mx-auto mt-1">
                  {scope !== 'all' ? (
                    <>No results found in <strong>{NCERT_SYLLABUS[scope]?.name}</strong>. Try expanding your search across all subjects.</>
                  ) : (
                    <>Check your spelling or try broader terms like <em>Faraday</em>, <em>Aldol</em>, <em>Coulomb</em>, <em>flux</em>, or <em>Molarity</em>.</>
                  )}
                </p>
              </div>

              {scope !== 'all' && (
                <button
                  onClick={() => setScope('all')}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--accent-primary)] text-white text-xs font-semibold cursor-pointer shadow-sm hover:bg-[var(--accent-primary-hover)] transition-all"
                >
                  <Globe size={14} />
                  <span>Switch to Universal Search (All Subjects)</span>
                </button>
              )}
            </div>
          )}

          {/* 3. Matching Results List */}
          {query.trim() && results.length > 0 && (
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between text-xs text-[var(--text-muted)] px-1 pb-1">
                <span>Found <strong>{results.length}</strong> matches</span>
                <span className="font-mono text-[11px]">
                  Press <kbd className="px-1.5 py-0.5 bg-[var(--bg-elevated)] border rounded">↵ Enter</kbd> to open
                </span>
              </div>

              {results.map((item, idx) => {
                const isSelected = idx === selectedIndex;
                const typeInfo = getTypeBadge(item.type);

                return (
                  <div
                    key={item.id}
                    data-index={idx}
                    onClick={() => handleSelectResult(item)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`group relative p-3 sm:p-3.5 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[var(--bg-elevated)] border-[var(--accent-primary)] shadow-md ring-1 ring-[var(--accent-primary)]/30'
                        : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:border-[var(--border-default)]'
                    }`}
                  >
                    {/* Top Row: Subject Badge + Type Badge + Breadcrumbs */}
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      {/* Subject Pill */}
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
                        {getSubjectIcon(item.subjectId, 12)}
                        <span>{item.subjectName}</span>
                      </span>

                      {/* Type Badge */}
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold border ${typeInfo.style}`}>
                        {typeInfo.icon}
                        <span>{item.typeLabel || typeInfo.label}</span>
                      </span>

                      {/* Exam Priority Badge */}
                      {getPriority && (item.subchapterId || item.chapterId) && (
                        <PriorityBadge
                          id={item.subchapterId || item.chapterId}
                          rating={getPriority(item.subchapterId || item.chapterId)}
                          interactive={false}
                          size="sm"
                          showMeter={false}
                        />
                      )}

                      {/* Breadcrumbs */}
                      <div className="hidden sm:flex items-center gap-1 text-[11px] text-[var(--text-muted)] ml-auto truncate">
                        <span className="truncate">{item.chapterTitle}</span>
                        {item.subchapterTitle && (
                          <>
                            <ChevronRight size={10} className="shrink-0" />
                            <span className="truncate max-w-[200px]">{item.subchapterTitle}</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Result Title */}
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-serif text-sm sm:text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors leading-snug">
                        {highlightMatches(item.title, query)}
                      </h4>

                      <div className="hidden sm:inline-flex items-center gap-1 text-xs text-[var(--accent-primary)] opacity-0 group-hover:opacity-100 transition-opacity font-semibold shrink-0">
                        <span>Jump</span>
                        <ArrowRight size={14} />
                      </div>
                    </div>

                    {/* Content Snippet */}
                    {item.snippet && (
                      <p className="font-sans text-xs text-[var(--text-secondary)] mt-1.5 leading-relaxed line-clamp-2">
                        {highlightMatches(item.snippet, query)}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer Navigation Bar */}
        <div className="px-4 py-2.5 border-t border-[var(--border-default)] bg-[var(--bg-elevated)]/90 flex items-center justify-between text-xs text-[var(--text-muted)] shrink-0">
          <div className="flex items-center gap-3">
            <span className="sm:hidden text-[11px] text-[var(--text-secondary)] font-medium">
              Tap any result to jump to note
            </span>
            <div className="hidden sm:flex items-center gap-3">
              <span className="inline-flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-[var(--bg-surface)] border border-[var(--border-default)] rounded text-[10px] font-mono">↑</kbd>
                <kbd className="px-1.5 py-0.5 bg-[var(--bg-surface)] border border-[var(--border-default)] rounded text-[10px] font-mono">↓</kbd>
                <span className="ml-0.5 text-[11px]">Navigate</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-[var(--bg-surface)] border border-[var(--border-default)] rounded text-[10px] font-mono">↵</kbd>
                <span className="ml-0.5 text-[11px]">Select</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-[var(--text-muted)]">Class 12 NCERT</span>
          </div>
        </div>
      </div>
    </div>
  );
}
