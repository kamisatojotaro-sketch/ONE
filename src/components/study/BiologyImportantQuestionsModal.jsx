import React, { useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  X,
  Search,
  ChevronDown,
  ChevronUp,
  BookOpen,
  ExternalLink,
  ListChecks,
  Sparkles
} from 'lucide-react';
import { IMPORTANT_BIOLOGY_CH9_TO_13_QUESTIONS } from '../../data/biologyImportantQuestionsData';
import BiologyExamDiagramCard from './BiologyExamDiagramCard';
import { formatMathString } from './FormulaCard';

const CHAPTER_FILTERS = [
  { id: 'ALL', label: 'All Chapters (Ch 9–13)' },
  { id: '9', label: 'Ch 9: Biotech Principles' },
  { id: '10', label: 'Ch 10: Biotech Applications' },
  { id: '11', label: 'Ch 11: Organisms & Populations' },
  { id: '12', label: 'Ch 12: Ecosystem (DFC vs GFC, pg 211)' },
  { id: '13', label: 'Ch 13: Biodiversity & Conservation' }
];

const SOURCE_FILTERS = [
  { id: 'ALL', label: 'All Important Questions (21)' },
  { id: 'MARKED_NOTES', label: '★ Your Crossed Pages & Handwritten Notes' },
  { id: 'PAST_PAPERS', label: 'CBSE Past 10-Year Repeated' }
];

export default function BiologyImportantQuestionsModal({
  isOpen,
  onClose,
  initialChapter = 'ALL',
  onJumpToSubtopic
}) {
  const [selectedChapter, setSelectedChapter] = useState(initialChapter);
  const [sourceFilter, setSourceFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIds, setExpandedIds] = useState(() =>
    new Set(IMPORTANT_BIOLOGY_CH9_TO_13_QUESTIONS.map((q) => q.id))
  );

  useEffect(() => {
    if (isOpen) {
      setSelectedChapter(initialChapter || 'ALL');
    }
  }, [isOpen, initialChapter]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const filteredQuestions = useMemo(() => {
    return IMPORTANT_BIOLOGY_CH9_TO_13_QUESTIONS.filter((q) => {
      if (selectedChapter !== 'ALL' && String(q.chapterNum) !== String(selectedChapter)) {
        return false;
      }
      if (sourceFilter === 'MARKED_NOTES' && !q.badge.includes('★')) {
        return false;
      }
      if (searchQuery.trim()) {
        const needle = searchQuery.toLowerCase();
        const hay = `${q.question} ${q.answerPoints.join(' ')} ${q.chapterTitle} ${q.badge}`.toLowerCase();
        if (!hay.includes(needle)) return false;
      }
      return true;
    });
  }, [selectedChapter, sourceFilter, searchQuery]);

  if (!isOpen) return null;

  const toggleExpand = (id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const modalContent = (
    <div
      className="fixed inset-0 z-[105] flex items-center justify-center p-2.5 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[90dvh] flex flex-col rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-4 sm:p-5 border-b border-[var(--border-subtle)] bg-[var(--bg-elevated)] flex items-start justify-between gap-3 shrink-0">
          <div className="space-y-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--accent-primary)]/15 text-[var(--accent-primary)] border border-[var(--accent-primary)]/30 text-[10px] font-mono font-bold uppercase tracking-wider">
                <Sparkles size={12} />
                <span>Biology Ch 9–13 • Past Papers &amp; Your Crossed Textbook Notes</span>
              </span>
              <span className="text-[11px] font-mono text-[var(--text-muted)]">
                {filteredQuestions.length} Point-Wise Questions
              </span>
            </div>
            <h2 className="font-serif text-lg sm:text-2xl font-bold text-[var(--text-primary)] leading-snug">
              Important &amp; Repeated Past Board Questions (Chapters 9–13)
            </h2>
            <p className="text-xs text-[var(--text-secondary)] font-sans">
              Includes your handwritten growth-curve phases, DFC vs GFC difference &amp; Standing Crop (pg 211), Inverted Sea Biomass &amp; Limitations (pg 212–214), Humboldt Species-Area curve, Alien Species Invasions &amp; CBSE 10-year repeated questions.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-default)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer shrink-0"
            title="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-3 sm:p-4 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] space-y-2.5 shrink-0">
          <div className="flex flex-wrap items-center gap-1.5">
            {CHAPTER_FILTERS.map((ch) => (
              <button
                key={ch.id}
                type="button"
                onClick={() => setSelectedChapter(ch.id)}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  String(selectedChapter) === String(ch.id)
                    ? 'bg-[var(--accent-primary)] text-white shadow-2xs'
                    : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                }`}
              >
                {ch.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-1.5">
              {SOURCE_FILTERS.map((sf) => (
                <button
                  key={sf.id}
                  type="button"
                  onClick={() => setSourceFilter(sf.id)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold transition-all cursor-pointer ${
                    sourceFilter === sf.id
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]'
                  }`}
                >
                  {sf.label}
                </button>
              ))}
            </div>

            <div className="relative flex-1 max-w-xs">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search DFC, GFC, standing crop, logistic, Z..."
                className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-default)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
              />
            </div>
          </div>
        </div>

        {/* Questions List */}
        <div className="p-3.5 sm:p-5 overflow-y-auto flex-1 space-y-3.5">
          {filteredQuestions.map((q) => {
            const isExpanded = expandedIds.has(q.id);
            return (
              <div
                key={q.id}
                className="rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)] overflow-hidden shadow-2xs"
              >
                <div
                  onClick={() => toggleExpand(q.id)}
                  className="p-3.5 sm:p-4 flex items-start justify-between gap-3 cursor-pointer hover:bg-[var(--bg-surface)]/50 transition-colors"
                >
                  <div className="space-y-1.5 min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded-md bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-mono text-[11px] font-bold text-[var(--accent-primary)]">
                        {q.number} • Ch {q.chapterNum}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-mono text-[10px] font-semibold text-[var(--text-secondary)]">
                        {q.badge}
                      </span>
                    </div>
                    <h4
                      className="font-serif text-sm sm:text-base font-bold text-[var(--text-primary)] leading-snug"
                      dangerouslySetInnerHTML={{ __html: formatMathString(q.question) }}
                    />
                  </div>

                  <button
                    type="button"
                    className="px-2.5 py-1 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-default)] text-[10px] font-mono font-bold text-[var(--accent-primary)] shrink-0 flex items-center gap-1"
                  >
                    <span>{isExpanded ? 'Minimize' : 'Expand'}</span>
                    {isExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                  </button>
                </div>

                {isExpanded && (
                  <div className="px-4 pb-4 pt-2 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)]/40 space-y-3">
                    {q.diagramId && (
                      <BiologyExamDiagramCard
                        diagramId={q.diagramId}
                        title={`NCERT Diagram Reference — Ch ${q.chapterNum}: ${q.chapterTitle}`}
                      />
                    )}

                    <ul className="space-y-2 pl-3 border-l-2 border-[var(--accent-primary)]/50">
                      {q.answerPoints.map((pt, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 font-sans text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-wrap"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] shrink-0" />
                          <span dangerouslySetInnerHTML={{ __html: formatMathString(pt) }} />
                        </li>
                      ))}
                    </ul>

                    {q.formulaOrEquation && (
                      <div className="p-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-default)] font-mono text-xs text-[var(--accent-primary)] font-bold">
                        Key Formula / Summary: {q.formulaOrEquation}
                      </div>
                    )}

                    {onJumpToSubtopic && (
                      <div className="flex justify-end pt-1">
                        <button
                          type="button"
                          onClick={() => {
                            onJumpToSubtopic({
                              subjectId: 'biology',
                              volumeId: 'bio-vol-1',
                              chapterId: q.chapterId,
                              subchapterId: `bio-sub-${q.chapterNum}-${q.chapterNum <= 10 ? 6 : 5}`
                            });
                            onClose();
                          }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--accent-primary)] text-[var(--text-primary)] hover:text-white border border-[var(--border-default)] text-xs font-semibold transition-colors cursor-pointer"
                        >
                          <span>Open in Ch {q.chapterNum} Important Questions Section</span>
                          <ExternalLink size={13} />
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 sm:px-5 sm:py-3 border-t border-[var(--border-default)] bg-[var(--bg-elevated)] flex items-center justify-between text-xs text-[var(--text-muted)] shrink-0">
          <span>Showing {filteredQuestions.length} Important &amp; Repeated Biology Questions (Ch 9–13)</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl font-semibold bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-default)] cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : modalContent;
}
