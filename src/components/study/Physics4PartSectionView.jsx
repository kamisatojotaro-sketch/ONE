import React, { useState } from 'react';
import { 
  BookMarked, Calculator, HelpCircle, Sparkles, 
  Layers, CheckCircle2, Circle, ChevronDown, ChevronUp, Award, Zap, Compass, Brain, AlertTriangle
} from 'lucide-react';
import { getPhysicsSectionEnrichment } from '../../data/physicsSectionEnrichments';
import { getDerivationsBySubtopic } from '../../data/physicsDerivationsReference';
import { STRUCTURED_NOTES_DATA } from '../../data/structuredNotesData';
import PhysicsDiagramCard from './PhysicsDiagramCard';
import FormulaCard, { formatMathString } from './FormulaCard';
import { FormattedLatex } from './LatexView';
import { isTopicCompleted } from '../../utils/studyTopicTicks';

const normalizeDerivationTitle = (str = '') =>
  str
    .toLowerCase()
    .replace(/\(slide[^)]*\)/gi, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

export default function Physics4PartSectionView({ 
  section, 
  subtopicId, 
  chapterId, 
  diagramId,
  diagramSubMode = null,
  isCleanMode = false,
  completedSections = [],
  onToggleTopic = null,
  onToggleTopicGroup = null,
  allSectionTopicIds = []
}) {
  const [minimizedBlocks, setMinimizedBlocks] = useState({});
  const secId = section?.id;

  const toggleBlock = (key) => {
    setMinimizedBlocks((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const matchedQ = getPhysicsSectionEnrichment(subtopicId);
  const comparisonTable = matchedQ?.comparisonTable || null;

  // 1. Resolve Part 1: Theory
  const theoryPoints = matchedQ?.theory && matchedQ.theory.length > 0 
    ? matchedQ.theory 
    : (section.explanation ? [section.explanation] : []);

  // 2. Resolve Part 2: Derivations (merge curations from physicsDerivationsReference & physicsSectionEnrichments)
  const refDerivations = getDerivationsBySubtopic(subtopicId) || [];
  const enrichDerivations = matchedQ?.derivations || [];
  const mappedRefDerivations = refDerivations.map((d) => ({
    id: d.id,
    name: d.title,
    setup: d.setup,
    steps: d.steps || [],
    specialCases: Array.isArray(d.specialCases)
      ? d.specialCases.map((sc) =>
          typeof sc === 'string'
            ? { title: 'Key Result & Special Case', text: sc }
            : sc
        )
      : [],
    finalFormula: d.finalFormula,
    diagramId: d.diagramId,
    diagramSubMode: d.diagramSubMode || d.subMode || undefined,
    importance: d.importance,
    syllabusStatus: d.syllabusStatus,
    slideRange: d.slideRange
  }));

  const combinedDerivations = [...mappedRefDerivations];
  for (const enrD of enrichDerivations) {
    const enrKey = normalizeDerivationTitle(enrD.name);
    const alreadyCovered = combinedDerivations.some((refD) => {
      const refKey = normalizeDerivationTitle(refD.name);
      if (refKey === enrKey) return true;
      const enrTokens = enrKey.split(' ').filter((w) => w.length >= 4);
      const refTokens = new Set(refKey.split(' ').filter((w) => w.length >= 4));
      if (enrTokens.length === 0) return false;
      const overlap = enrTokens.filter((w) => refTokens.has(w)).length;
      return overlap / enrTokens.length >= 0.6;
    });
    if (!alreadyCovered) {
      combinedDerivations.push({
        ...enrD,
        diagramId: enrD.diagramId || matchedQ?.diagram?.diagramId || diagramId || null,
        diagramSubMode: enrD.diagramSubMode || enrD.subMode || matchedQ?.diagram?.subMode || diagramSubMode || undefined
      });
    }
  }

  const hasCuratedDerivation = combinedDerivations.length > 0;
  const sectionDerivationText = section.derivations || null;
  const hasAnyDerivation = hasCuratedDerivation || Boolean(sectionDerivationText);

  // 3. Resolve Part 3: Diagram
  const resolvedDiagramId = diagramId || matchedQ?.diagram?.diagramId || null;
  const resolvedDiagramSubMode = diagramSubMode || matchedQ?.diagram?.subMode || undefined;
  const examDrawingGuide = matchedQ?.diagram?.examDrawingGuide || [];

  // 4. Resolve Part 4: Key Points & Blueprint
  const keyPoints = matchedQ?.keyPointsAndKeywords && matchedQ.keyPointsAndKeywords.length > 0
    ? matchedQ.keyPointsAndKeywords
    : (section.keyFormulas || []);

  // 5. Terms Glossary
  const termsGlossary = matchedQ?.termsGlossary || [];

  // 6. Oswaal Structured Notes (Definitions, Mnemonic, Common Errors, Assertion-Reason)
  const structuredData = STRUCTURED_NOTES_DATA[subtopicId] || null;
  const oswaalDefinitions = structuredData?.definitions || [];
  const oswaalMnemonic = structuredData?.oswaalMnemonic || null;
  const commonlyMadeErrors = structuredData?.commonlyMadeErrors || [];
  const assertionReason = structuredData?.assertionReason || null;
  const examTrend = structuredData?.examTrend || null;

  return (
    <div className="space-y-6">
      {/* ==================================================================== */}
      {/* EXPLICIT DERIVATION INDICATOR BANNER */}
      {/* ==================================================================== */}
      {hasAnyDerivation && (
        <div className="p-3.5 sm:p-4 rounded-2xl bg-emerald-500/10 border-2 border-emerald-500/40 shadow-xs flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 font-bold text-base">
            📐
          </div>
          <div className="space-y-1.5 min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                Derivation Topic
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-500/30">
                📐 DERIVATION{combinedDerivations.length > 1 ? ` ×${combinedDerivations.length}` : ''}
              </span>
            </div>
            {hasCuratedDerivation ? (
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {combinedDerivations.map((drv, idx) => (
                  <span
                    key={drv.id || idx}
                    className="inline-flex items-center gap-1 text-[11px] font-sans font-semibold px-2.5 py-0.5 rounded-lg bg-[var(--bg-surface)] border border-emerald-500/25 text-[var(--text-primary)]"
                  >
                    <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">#{idx + 1}</span>
                    {drv.name}
                  </span>
                ))}
              </div>
            ) : (
              <p className="font-sans text-xs text-[var(--text-secondary)] leading-relaxed font-medium">
                This subtopic includes a complete mathematical derivation in Part 2 below.
              </p>
            )}
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* PART 1: THEORY (Concise Physical Principles & Microscopic Mechanism) */}
      {/* ==================================================================== */}
      {(() => {
        const theoryTopicIds = secId ? theoryPoints.map((_, idx) => `${secId}::phy-theory-${idx}`) : [];
        const theoryDoneCount = secId
          ? theoryTopicIds.filter((tId) => isTopicCompleted(tId, secId, completedSections)).length
          : 0;
        const allTheoryDone = secId && theoryTopicIds.length > 0 && theoryDoneCount === theoryTopicIds.length;
        const tblTopicId = secId && comparisonTable?.rows ? `${secId}::phy-tbl-0` : null;
        const isTblDone = tblTopicId ? isTopicCompleted(tblTopicId, secId, completedSections) : false;

        return (
          <div className="p-4 sm:p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)] shadow-xs space-y-3.5">
            <div className={`flex flex-wrap items-center justify-between gap-2 ${!minimizedBlocks.theory ? 'border-b border-[var(--border-subtle)] pb-2.5' : ''}`}>
              <button
                type="button"
                onClick={() => toggleBlock('theory')}
                className="text-left flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent-primary)] cursor-pointer group"
                aria-expanded={!minimizedBlocks.theory}
              >
                <BookMarked size={16} />
                <span className="group-hover:underline">
                  {isCleanMode ? 'Theory & Core Principles' : 'Part 1: Theory & Physical Principle'} ({theoryPoints.length})
                </span>
              </button>

              <div className="flex items-center gap-2 shrink-0" data-no-print="true">
                {secId && onToggleTopicGroup && theoryTopicIds.length > 0 && (
                  <button
                    type="button"
                    onClick={() => onToggleTopicGroup(theoryTopicIds, secId, allSectionTopicIds)}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[10px] font-mono font-bold transition-all cursor-pointer ${
                      allTheoryDone
                        ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)]'
                        : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] border-[var(--border-default)] hover:border-[var(--accent-primary)]'
                    }`}
                    title={allTheoryDone ? 'Untick all theory points' : 'Tick all theory points completed'}
                  >
                    {allTheoryDone ? <CheckCircle2 size={13} /> : <Circle size={13} />}
                    <span>{theoryDoneCount}/{theoryPoints.length}</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => toggleBlock('theory')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[var(--bg-surface)] hover:bg-[var(--accent-primary)]/15 border border-[var(--border-default)] text-[10px] font-mono font-bold text-[var(--accent-primary)] transition-colors cursor-pointer"
                >
                  <span>{minimizedBlocks.theory ? 'Expand' : 'Minimize'}</span>
                  {minimizedBlocks.theory ? <ChevronDown size={13} /> : <ChevronUp size={13} />}
                </button>
              </div>
            </div>

            <div data-print-expand="true" className={`${minimizedBlocks.theory ? 'hidden' : 'block'} space-y-3`}>
              <div className="space-y-2.5">
                {theoryPoints.map((pt, idx) => {
                  const ptTopicId = secId ? `${secId}::phy-theory-${idx}` : null;
                  const isPtDone = ptTopicId ? isTopicCompleted(ptTopicId, secId, completedSections) : false;

                  return (
                    <div
                      key={idx}
                      className={`flex items-start justify-between gap-2.5 p-2.5 rounded-xl border text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed transition-all ${
                        isPtDone
                          ? 'bg-[var(--bg-surface)] border-[var(--accent-primary)]'
                          : 'bg-[var(--bg-surface)]/50 border-[var(--border-subtle)]'
                      }`}
                    >
                      <div className="flex items-start gap-2.5 min-w-0 flex-1">
                        <span className="px-1.5 py-0.5 rounded bg-[var(--bg-elevated)] border border-[var(--border-subtle)] font-mono text-[10px] font-bold text-[var(--accent-primary)] shrink-0 mt-0.5">
                          #{idx + 1}
                        </span>
                        <div 
                          className="flex-1 font-medium leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: formatMathString(pt) }}
                        />
                      </div>

                      {ptTopicId && onToggleTopic && (
                        <button
                          type="button"
                          data-no-print="true"
                          onClick={() => onToggleTopic(ptTopicId, secId, allSectionTopicIds)}
                          className={`p-1 rounded-full transition-all cursor-pointer flex items-center justify-center shrink-0 mt-0.5 ${
                            isPtDone
                              ? 'bg-[var(--accent-primary)] text-white shadow-2xs scale-105'
                              : 'border border-[var(--border-default)] text-[var(--text-muted)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]'
                          }`}
                          title={isPtDone ? `Mark Theory Point #${idx + 1} incomplete` : `Mark Theory Point #${idx + 1} completed`}
                        >
                          {isPtDone ? <CheckCircle2 size={15} /> : <Circle size={15} />}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>

              {comparisonTable && comparisonTable.rows && (
                <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                      {comparisonTable.title}
                    </div>
                    {tblTopicId && onToggleTopic && (
                      <button
                        type="button"
                        data-no-print="true"
                        onClick={() => onToggleTopic(tblTopicId, secId, allSectionTopicIds)}
                        className={`p-1 rounded-full transition-all cursor-pointer flex items-center justify-center shrink-0 ${
                          isTblDone
                            ? 'bg-[var(--accent-primary)] text-white shadow-2xs scale-105'
                            : 'border border-[var(--border-default)] text-[var(--text-muted)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]'
                        }`}
                        title={isTblDone ? 'Mark comparison table incomplete' : 'Mark comparison table completed'}
                      >
                        {isTblDone ? <CheckCircle2 size={15} /> : <Circle size={15} />}
                      </button>
                    )}
                  </div>
                  <div className="overflow-x-auto rounded-xl border border-[var(--border-subtle)]">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-[var(--bg-surface)] border-b border-[var(--border-subtle)]">
                          {comparisonTable.headers.map((h, hIdx) => (
                            <th key={hIdx} className="p-2.5 font-bold text-[var(--text-primary)] whitespace-nowrap">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[var(--border-subtle)]">
                        {comparisonTable.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-[var(--bg-surface)]/50">
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`p-2.5 text-[var(--text-secondary)] ${cIdx === 0 ? 'font-semibold text-[var(--text-primary)]' : ''}`}
                                dangerouslySetInnerHTML={{ __html: formatMathString(cell) }}
                              />
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })()}

      {/* ==================================================================== */}
      {/* PART 2: DERIVATION — STEP-BY-STEP MATHEMATICAL PROOF                 */}
      {/* ==================================================================== */}
      {hasAnyDerivation && (() => {
        const drvTopicIds = secId
          ? hasCuratedDerivation
            ? combinedDerivations.map((_, idx) => `${secId}::phy-drv-${idx}`)
            : [`${secId}::phy-drv-0`]
          : [];
        const drvDoneCount = secId
          ? drvTopicIds.filter((tId) => isTopicCompleted(tId, secId, completedSections)).length
          : 0;
        const allDrvDone = secId && drvTopicIds.length > 0 && drvDoneCount === drvTopicIds.length;

        return (
          <div className="p-4 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border-2 border-emerald-500/35 shadow-xs space-y-4">
            <div className={`flex items-center justify-between flex-wrap gap-2 ${!minimizedBlocks.derivation ? 'border-b border-[var(--border-subtle)] pb-2.5' : ''}`}>
              <button
                type="button"
                onClick={() => toggleBlock('derivation')}
                className="text-left flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 cursor-pointer group"
                aria-expanded={!minimizedBlocks.derivation}
              >
                <Calculator size={16} />
                <span className="group-hover:underline">
                  {isCleanMode ? 'Derivation — Step-by-Step Mathematical Proof' : 'Part 2: Derivation — Step-by-Step Mathematical Proof'}
                </span>
              </button>

              <div className="flex items-center gap-2 shrink-0" data-no-print="true">
                {secId && onToggleTopicGroup && drvTopicIds.length > 0 && (
                  <button
                    type="button"
                    onClick={() => onToggleTopicGroup(drvTopicIds, secId, allSectionTopicIds)}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[10px] font-mono font-bold transition-all cursor-pointer ${
                      allDrvDone
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-emerald-600 border-[var(--border-default)] hover:border-emerald-500'
                    }`}
                    title={allDrvDone ? 'Untick derivations' : 'Tick all derivations completed'}
                  >
                    {allDrvDone ? <CheckCircle2 size={13} /> : <Circle size={13} />}
                    <span>{drvDoneCount}/{drvTopicIds.length}</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => toggleBlock('derivation')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[var(--bg-elevated)] hover:bg-emerald-500/15 border border-[var(--border-default)] text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 transition-colors cursor-pointer"
                >
                  <span>{minimizedBlocks.derivation ? 'Expand' : 'Minimize'}</span>
                  {minimizedBlocks.derivation ? <ChevronDown size={13} /> : <ChevronUp size={13} />}
                </button>
              </div>
            </div>

            <div data-print-expand="true" className={minimizedBlocks.derivation ? 'hidden' : 'block'}>
              {hasCuratedDerivation ? (
                <div className="space-y-6 divide-y divide-[var(--border-subtle)]">
                  {combinedDerivations.map((d, dIdx) => {
                    const cardDiagramId = d.diagramId || resolvedDiagramId;
                    const cardDiagramSubMode = d.diagramSubMode || undefined;
                    const showInlineDiagram = Boolean(
                      cardDiagramId && (combinedDerivations.length > 1 || (d.diagramSubMode && d.diagramSubMode !== resolvedDiagramSubMode))
                    );
                    const dTopicId = secId ? `${secId}::phy-drv-${dIdx}` : null;
                    const isDrvDone = dTopicId ? isTopicCompleted(dTopicId, secId, completedSections) : false;

                    return (
                      <div key={d.id || dIdx} className="pt-4 first:pt-0 space-y-3.5">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/40 shrink-0">
                              DERIVATION {dIdx + 1}
                            </span>
                            {!isCleanMode && d.importance && (
                              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/25">
                                {d.importance}
                              </span>
                            )}
                            <h4 className="font-serif text-sm sm:text-base font-bold text-[var(--text-primary)]">
                              {d.name}
                            </h4>
                          </div>

                          {dTopicId && onToggleTopic && (
                            <button
                              type="button"
                              data-no-print="true"
                              onClick={() => onToggleTopic(dTopicId, secId, allSectionTopicIds)}
                              className={`p-1 rounded-full transition-all cursor-pointer flex items-center justify-center shrink-0 ${
                                isDrvDone
                                  ? 'bg-emerald-600 text-white shadow-2xs scale-105'
                                  : 'border border-[var(--border-default)] text-[var(--text-muted)] hover:border-emerald-500 hover:text-emerald-600'
                              }`}
                              title={isDrvDone ? `Mark Derivation ${dIdx + 1} incomplete` : `Mark Derivation ${dIdx + 1} completed`}
                            >
                              {isDrvDone ? <CheckCircle2 size={16} /> : <Circle size={16} />}
                            </button>
                          )}
                        </div>
                        {d.setup && (
                          <div 
                            className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-secondary)] italic leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: formatMathString(d.setup) }}
                          />
                        )}
                        {showInlineDiagram && (
                          <div className="py-1">
                            <PhysicsDiagramCard
                              diagramId={cardDiagramId}
                              subMode={cardDiagramSubMode}
                              inline={true}
                            />
                          </div>
                        )}
                        {d.steps && d.steps.length > 0 && (
                          <div className="space-y-3">
                            {d.steps.map((st, sIdx) => (
                              <div key={sIdx} className="p-3 sm:p-4 rounded-xl bg-[var(--bg-base)]/50 border border-[var(--border-subtle)] space-y-2">
                                <div className="flex items-start gap-2">
                                  <span className="text-xs font-mono font-bold text-[var(--text-muted)] shrink-0">
                                    Step {sIdx + 1}:
                                  </span>
                                  <div 
                                    className="font-sans text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed flex-1"
                                    dangerouslySetInnerHTML={{ __html: formatMathString(st.text) }}
                                  />
                                </div>
                                {st.equation && (
                                  <div className="py-1 px-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] overflow-x-auto text-center scrollbar-none">
                                    <FormattedLatex content={`$$${st.equation}$$`} />
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                        {d.specialCases && d.specialCases.length > 0 && (
                          <div className="space-y-2 pt-1">
                            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--accent-primary)] block">
                              Special Cases &amp; Graph Variation:
                            </span>
                            <div className="grid grid-cols-1 gap-2">
                              {d.specialCases.map((sc, scIdx) => (
                                <div key={scIdx} className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1.5">
                                  <span className="text-xs font-serif font-bold text-[var(--text-primary)] block">
                                    {sc.title}
                                  </span>
                                  <div 
                                    className="font-sans text-xs text-[var(--text-secondary)] leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: formatMathString(sc.text) }}
                                  />
                                  {sc.equation && (
                                    <div className="py-1 px-2.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] overflow-x-auto text-center scrollbar-none">
                                      <FormattedLatex content={`$$${sc.equation}$$`} />
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        {d.finalFormula && (
                          <div className="p-3.5 rounded-xl bg-emerald-500/10 border-2 border-emerald-500/40 text-center space-y-1">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-300 font-bold block">
                              Final Boxed Formula:
                            </span>
                            <div className="overflow-x-auto scrollbar-none py-1">
                              <FormattedLatex content={`$$${d.finalFormula}$$`} />
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="font-sans text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-wrap pl-3 border-l-2 border-[var(--accent-primary)] break-words">
                  <FormattedLatex content={sectionDerivationText} />
                </div>
              )}
            </div>
          </div>
        );
      })()}

      {/* ==================================================================== */}
      {/* PART 3: DIAGRAM & EXAM DRAWING GUIDE */}
      {/* ==================================================================== */}
      {resolvedDiagramId && (() => {
        const diagTopicId = secId ? `${secId}::phy-diag` : null;
        const isDiagDone = diagTopicId ? isTopicCompleted(diagTopicId, secId, completedSections) : false;

        return (
          <div className="p-4 sm:p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)] shadow-xs space-y-4">
            <div className={`flex items-center justify-between gap-2 ${!minimizedBlocks.diagram ? 'border-b border-[var(--border-subtle)] pb-2.5' : ''}`}>
              <button
                type="button"
                onClick={() => toggleBlock('diagram')}
                className="text-left flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-accent)] cursor-pointer group"
                aria-expanded={!minimizedBlocks.diagram}
              >
                <Compass size={16} />
                <span className="group-hover:underline">
                  {isCleanMode ? 'Visual Diagram' : 'Part 3: Diagram & Exam Drawing Guide'}
                </span>
              </button>

              <div className="flex items-center gap-2 shrink-0" data-no-print="true">
                {diagTopicId && onToggleTopic && (
                  <button
                    type="button"
                    onClick={() => onToggleTopic(diagTopicId, secId, allSectionTopicIds)}
                    className={`p-1 rounded-full transition-all cursor-pointer flex items-center justify-center shrink-0 ${
                      isDiagDone
                        ? 'bg-[var(--accent-primary)] text-white shadow-2xs scale-105'
                        : 'border border-[var(--border-default)] text-[var(--text-muted)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]'
                    }`}
                    title={isDiagDone ? 'Mark diagram incomplete' : 'Mark diagram completed'}
                  >
                    {isDiagDone ? <CheckCircle2 size={16} /> : <Circle size={16} />}
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => toggleBlock('diagram')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[var(--bg-surface)] hover:bg-[var(--accent-primary)]/15 border border-[var(--border-default)] text-[10px] font-mono font-bold text-[var(--accent-primary)] transition-colors cursor-pointer"
                >
                  <span>{minimizedBlocks.diagram ? 'Expand' : 'Minimize'}</span>
                  {minimizedBlocks.diagram ? <ChevronDown size={13} /> : <ChevronUp size={13} />}
                </button>
              </div>
            </div>

            <div data-print-expand="true" className={minimizedBlocks.diagram ? 'hidden' : 'block'}>
              <div className="py-2">
                <PhysicsDiagramCard diagramId={resolvedDiagramId} subMode={resolvedDiagramSubMode} />
              </div>

              {!isCleanMode && examDrawingGuide && examDrawingGuide.length > 0 && (
                <div className="p-3.5 sm:p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2 mt-3">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--text-primary)] block">
                    CBSE Exam Drawing Checklist:
                  </span>
                  <ul className="space-y-1.5 pl-1">
                    {examDrawingGuide.map((g, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                        <span className="text-[var(--accent-primary)] font-bold shrink-0">✓</span>
                        <span 
                          className="flex-1"
                          dangerouslySetInnerHTML={{ __html: formatMathString(g) }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        );
      })()}

      {/* ==================================================================== */}
      {/* PART 4: KEY POINTS, KEYWORDS & BLUEPRINT */}
      {/* ==================================================================== */}
      {!isCleanMode && (
      <div className="p-4 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2.5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            <Sparkles size={16} />
            <span>Part 4: Key Points & Examiner Keywords</span>
          </div>
          <span className="text-[10px] font-mono text-[var(--text-muted)]">
            High-Yield Keywords
          </span>
        </div>

        {keyPoints && keyPoints.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {keyPoints.map((kw, idx) => (
              <span 
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)] font-medium"
              >
                {kw}
              </span>
            ))}
          </div>
        )}

        {section.questionFraming && (
          <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border-l-4 border-l-[var(--text-accent)] border border-[var(--border-subtle)] space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--text-accent)] uppercase tracking-wider">
              <HelpCircle size={14} />
              <span>Exam Question Blueprint</span>
            </div>
            <div 
              className="font-sans text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-wrap pl-2 border-l-2 border-[var(--border-default)] break-words font-medium"
              dangerouslySetInnerHTML={{ __html: formatMathString(section.questionFraming) }}
            />
          </div>
        )}
      </div>
      )}

      {/* ==================================================================== */}
      {/* DEDICATED TERMS & VARIABLES GLOSSARY (Shunt, Epsilon, Phi, etc.) */}
      {/* ==================================================================== */}
      {termsGlossary && termsGlossary.length > 0 && (
        <div className="p-4 sm:p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)] shadow-xs space-y-3.5">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2.5">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
              <Layers size={16} />
              <span>Physical Terms & Symbols Glossary</span>
            </div>
            <span className="text-[10px] font-mono text-[var(--text-muted)]">
              Variables & SI Units
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5">
            {termsGlossary.map((item, idx) => (
              <div 
                key={idx}
                className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-start gap-2.5"
              >
                <div className="px-2 py-1 rounded-md bg-[var(--bg-elevated)] border border-[var(--border-default)] font-serif font-bold text-xs shrink-0 text-center min-w-[36px]">
                  <FormattedLatex content={`$${item.symbol}$`} />
                </div>
                <div className="space-y-0.5">
                  <div className="font-sans text-xs font-bold text-[var(--text-primary)]">
                    {item.term}
                  </div>
                  <div 
                    className="font-sans text-[11px] text-[var(--text-secondary)] leading-snug"
                    dangerouslySetInnerHTML={{ __html: formatMathString(item.definition) }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Formula Cards with Curated Variable Metadata */}
      {section.keyFormulas && section.keyFormulas.length > 0 && (
        <FormulaCard 
          formulaList={section.keyFormulas} 
          derivations={null} 
        />
      )}

      {/* ==================================================================== */}
      {/* OSWAAL STRUCTURED DEFINITIONS, MEMORY BOOSTER & COMMONLY MADE ERRORS */}
      {/* ==================================================================== */}
      {!isCleanMode && oswaalDefinitions.length > 0 && (
        <div className="p-4 sm:p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)] shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2.5">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              <Award size={16} />
              <span>Exact Board Definitions &amp; SI Units</span>
            </div>
            {examTrend && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 font-bold border border-indigo-500/30">
                {typeof examTrend === 'object' ? (examTrend.pastYears || examTrend.frequency || 'High Yield') : examTrend}
              </span>
            )}
          </div>
          <div className="grid grid-cols-1 gap-2.5">
            {oswaalDefinitions.map((def, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-1">
                <span className="text-xs font-serif font-bold text-[var(--accent-primary)] block">
                  {def.term}
                </span>
                <div
                  className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: formatMathString(def.definition || def.meaning || '') }}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {!isCleanMode && oswaalMnemonic && (
        <div className="p-4 sm:p-5 rounded-2xl bg-purple-500/10 border-2 border-purple-500/30 shadow-xs space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            <Brain size={15} />
            <span>Oswaal Memory Booster &amp; Exam Trick</span>
          </div>
          <div
            className="font-sans text-xs sm:text-sm text-[var(--text-primary)] font-medium leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: formatMathString(
                typeof oswaalMnemonic === 'object'
                  ? `<strong>${oswaalMnemonic.title || 'Mnemonic'}:</strong> ${oswaalMnemonic.phrase || ''} — ${oswaalMnemonic.explanation || ''}`
                  : oswaalMnemonic
              )
            }}
          />
        </div>
      )}

      {!isCleanMode && commonlyMadeErrors.length > 0 && (
        <div className="p-4 sm:p-5 rounded-2xl bg-rose-500/5 border border-rose-500/30 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
            <AlertTriangle size={15} />
            <span>Commonly Made Board Errors &amp; Answering Tips</span>
          </div>
          <div className="space-y-2.5">
            {commonlyMadeErrors.map((err, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase text-rose-500 block">✗ Common Student Error:</span>
                  <div className="text-[var(--text-secondary)] leading-relaxed" dangerouslySetInnerHTML={{ __html: formatMathString(err.error || '') }} />
                </div>
                <div className="space-y-1 md:border-l md:border-[var(--border-subtle)] md:pl-3">
                  <span className="text-[10px] font-mono font-bold uppercase text-emerald-500 block">✓ Examiner Answering Tip:</span>
                  <div className="text-[var(--text-primary)] font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: formatMathString(err.tip || err.correction || '') }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!isCleanMode && assertionReason && (
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/5 border border-amber-500/30 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              High-Probability Board Assertion–Reason
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 font-bold">
              Ans: {assertionReason.correctOption || assertionReason.answer || ''}
            </span>
          </div>
          <div className="text-xs sm:text-sm text-[var(--text-primary)] space-y-1">
            <div dangerouslySetInnerHTML={{ __html: `<strong>Assertion (A):</strong> ${formatMathString(assertionReason.assertion)}` }} />
            <div dangerouslySetInnerHTML={{ __html: `<strong>Reason (R):</strong> ${formatMathString(assertionReason.reason)}` }} />
          </div>
          {assertionReason.explanation && (
            <div className="text-xs text-[var(--text-secondary)] italic pt-1 border-t border-amber-500/20" dangerouslySetInnerHTML={{ __html: formatMathString(assertionReason.explanation) }} />
          )}
        </div>
      )}
    </div>
  );
}
