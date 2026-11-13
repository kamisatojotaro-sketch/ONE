import React, { useState, useMemo } from 'react';
import { BookOpen, ChevronDown, ChevronUp, Search, Sparkles, Eye, Layers, ArrowRight } from 'lucide-react';
import { PHYSICS_DERIVATIONS_REFERENCE } from '../../data/physicsDerivationsReference';
import { FormattedLatex, MathBlock } from './LatexView';
import PhysicsDiagramCard from './PhysicsDiagramCard';

/**
 * Interactive reference bank displaying all 47 extracted SlideShare Class 12 Physics Derivations.
 * Can be rendered inside Physics ChapterList or toggled inside ImportantQuestionsTabContent.
 */
export default function PhysicsDerivationsReferencePanel({
  volumeFilter = null, // Optional: 'phy-vol-1' (Ch 1-8) or 'phy-vol-2' (Ch 9-14)
  defaultExpanded = false,
  onJumpToChapter = null
}) {
  const [isOpen, setIsOpen] = useState(defaultExpanded);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChapterNum, setSelectedChapterNum] = useState('ALL');
  const [hideDeleted, setHideDeleted] = useState(false);
  const [expandedCardIds, setExpandedCardIds] = useState(() => new Set(['drv-1-1', 'drv-9-1']));
  const [diagramOpenIds, setDiagramOpenIds] = useState(() => new Set());

  const volumeDerivations = useMemo(() => {
    if (volumeFilter === 'phy-vol-1') {
      return PHYSICS_DERIVATIONS_REFERENCE.filter(d => d.chapterNum <= 8);
    }
    if (volumeFilter === 'phy-vol-2') {
      return PHYSICS_DERIVATIONS_REFERENCE.filter(d => d.chapterNum >= 9);
    }
    return PHYSICS_DERIVATIONS_REFERENCE;
  }, [volumeFilter]);

  const availableChapters = useMemo(() => {
    const map = new Map();
    for (const d of volumeDerivations) {
      if (!map.has(d.chapterNum)) {
        map.set(d.chapterNum, d.chapterTitle);
      }
    }
    return Array.from(map.entries()).sort((a, b) => a[0] - b[0]);
  }, [volumeDerivations]);

  const filteredDerivations = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return volumeDerivations.filter((d) => {
      if (hideDeleted && d.syllabusStatus !== 'Core CBSE 2026') return false;
      if (selectedChapterNum !== 'ALL' && d.chapterNum !== Number(selectedChapterNum)) return false;
      if (!q) return true;
      return (
        d.title.toLowerCase().includes(q) ||
        d.chapterTitle.toLowerCase().includes(q) ||
        d.setup.toLowerCase().includes(q) ||
        d.finalFormula.toLowerCase().includes(q) ||
        d.slideRange.toLowerCase().includes(q)
      );
    });
  }, [volumeDerivations, hideDeleted, selectedChapterNum, searchQuery]);

  const toggleCard = (id) => {
    setExpandedCardIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleDiagram = (id) => {
    setDiagramOpenIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs overflow-hidden">
      {/* Header Banner / Toggle */}
      <div
        onClick={() => setIsOpen(prev => !prev)}
        className="p-4 sm:p-5 bg-gradient-to-r from-indigo-500/10 via-[var(--bg-elevated)] to-sky-500/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer hover:bg-[var(--bg-elevated)] transition-colors"
      >
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-indigo-500/15 text-indigo-500 shrink-0 mt-0.5">
            <BookOpen size={20} />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-indigo-500/15 text-indigo-500 font-bold">
                All Derivations Reference • {volumeDerivations.length} Slides
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold">
                CBSE 2026 Syllabus Tagged
              </span>
            </div>
            <h3 className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)] mt-1">
              Complete Class 12 Physics Derivations Bank ({volumeFilter ? (volumeFilter === 'phy-vol-1' ? 'Vol 1: Ch 1–7' : 'Vol 2: Ch 9–14') : `${PHYSICS_DERIVATIONS_REFERENCE.length} Complete Derivations & Proofs`})
            </h3>
            <p className="text-xs text-[var(--text-secondary)] mt-0.5">
              Step-by-step KaTeX proofs, special cases, boxed final results &amp; interactive ray/field diagrams.
            </p>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold shadow-xs self-start sm:self-center shrink-0 cursor-pointer"
        >
          <Sparkles size={14} />
          {isOpen ? 'Hide Reference' : `Browse ${volumeDerivations.length} Derivations`}
          {isOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
        </button>
      </div>

      {/* Expandable Reference Explorer */}
      {isOpen && (
        <div className="p-4 sm:p-5 border-t border-[var(--border-subtle)] space-y-4">
          {/* Search + Core-only toggle */}
          <div className="flex flex-col sm:flex-row gap-2.5 items-stretch sm:items-center justify-between">
            <div className="relative flex-1">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search derivations (e.g., Lens Maker, Gauss, Dipole, YDSE, Ampere)..."
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-default)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            <button
              type="button"
              onClick={() => setHideDeleted(prev => !prev)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer shrink-0 ${
                hideDeleted
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border-[var(--border-default)] hover:border-indigo-500'
              }`}
            >
              {hideDeleted ? '✓ Core CBSE 2026 Only' : 'Show All (incl. 2 Deleted Slides)'}
            </button>
          </div>

          {/* Chapter Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            <button
              type="button"
              onClick={() => setSelectedChapterNum('ALL')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedChapterNum === 'ALL'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
              }`}
            >
              All Chapters ({volumeDerivations.length})
            </button>
            {availableChapters.map(([chNum, chTitle]) => (
              <button
                key={chNum}
                type="button"
                onClick={() => setSelectedChapterNum(String(chNum))}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedChapterNum === String(chNum)
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
                }`}
              >
                Ch {chNum}: {chTitle.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Derivations Accordion Cards */}
          <div className="space-y-3">
            {filteredDerivations.length === 0 ? (
              <div className="p-6 text-center rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-muted)]">
                No derivations match "{searchQuery}". Clear search or switch chapter filter.
              </div>
            ) : (
              filteredDerivations.map((drv) => {
                const expanded = expandedCardIds.has(drv.id) || searchQuery.trim().length > 0;
                const isDeleted = drv.syllabusStatus !== 'Core CBSE 2026';
                const showDiagram = diagramOpenIds.has(drv.id);

                return (
                  <div
                    key={drv.id}
                    className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => toggleCard(drv.id)}
                      className="w-full p-3.5 sm:p-4 text-left flex items-start justify-between gap-3 cursor-pointer hover:bg-[var(--bg-surface)]/50 transition-colors"
                    >
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-500">
                            {drv.slideRange}
                          </span>
                          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                            Ch {drv.chapterNum}: {drv.chapterTitle}
                          </span>
                          <span
                            className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded ${
                              isDeleted
                                ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400'
                                : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                            }`}
                          >
                            {drv.syllabusStatus}
                          </span>
                          {drv.importance && (
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-rose-500/10 text-rose-500">
                              {drv.importance}
                            </span>
                          )}
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
                          {drv.title}
                        </h4>
                      </div>
                      <span className="p-1.5 rounded-lg bg-[var(--bg-surface)] text-[var(--text-muted)] shrink-0">
                        {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </span>
                    </button>

                    {expanded && (
                      <div className="p-3.5 sm:p-4 pt-0 border-t border-[var(--border-subtle)] space-y-3 text-xs sm:text-sm">
                        <div className="pt-3 text-[var(--text-secondary)]">
                          <span className="font-bold text-[var(--text-primary)]">Setup: </span>
                          <FormattedLatex content={drv.setup} />
                        </div>

                        {/* Proof Steps */}
                        <div className="space-y-2">
                          {drv.steps.map((step, idx) => (
                            <div
                              key={idx}
                              className="p-2.5 sm:p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-1.5"
                            >
                              <div className="flex items-start gap-2">
                                <span className="text-[11px] font-mono font-bold text-indigo-500 shrink-0 mt-0.5">
                                  Step {idx + 1}.
                                </span>
                                <span className="text-[var(--text-primary)]">
                                  <FormattedLatex content={step.text} />
                                </span>
                              </div>
                              {step.equation && (
                                <div className="pl-2 overflow-x-auto">
                                  <MathBlock math={step.equation} display />
                                </div>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Final Result Box */}
                        <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30">
                          <div className="text-[10px] font-mono uppercase tracking-wider font-bold text-indigo-500 mb-1">
                            Final Result (Box in Board Exam)
                          </div>
                          <div className="overflow-x-auto">
                            <MathBlock math={drv.finalFormula} display />
                          </div>
                        </div>

                        {/* Special Cases / Examiner Points */}
                        {drv.specialCases && drv.specialCases.length > 0 && (
                          <div className="p-2.5 rounded-lg bg-amber-500/5 border border-amber-500/20 space-y-1">
                            <div className="text-[10px] font-mono uppercase font-bold text-amber-600 dark:text-amber-400">
                              Key Special Cases &amp; Board Remarks
                            </div>
                            <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
                              {drv.specialCases.map((sc, idx) => (
                                <li key={idx} className="flex items-start gap-1.5">
                                  <span className="text-amber-500 font-bold">•</span>
                                  <FormattedLatex content={sc} />
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Action Bar: Toggle Diagram / Open Chapter */}
                        <div className="flex flex-wrap items-center gap-2 pt-1">
                          {drv.diagramId && (
                            <button
                              type="button"
                              onClick={() => toggleDiagram(drv.id)}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 text-xs font-semibold cursor-pointer hover:bg-sky-500/20 transition-colors"
                            >
                              <Eye size={13} />
                              {showDiagram ? 'Hide Diagram' : 'View Interactive Diagram'}
                            </button>
                          )}
                          {onJumpToChapter && (
                            <button
                              type="button"
                              onClick={() => onJumpToChapter(drv.chapterNum, drv.subtopicId)}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-default)] text-xs font-semibold cursor-pointer hover:border-indigo-500 transition-colors"
                            >
                              <Layers size={13} />
                              Go to Ch {drv.chapterNum} Notes
                              <ArrowRight size={12} />
                            </button>
                          )}
                        </div>

                        {showDiagram && drv.diagramId && (
                          <div className="pt-2">
                            <PhysicsDiagramCard diagramId={drv.diagramId} />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
