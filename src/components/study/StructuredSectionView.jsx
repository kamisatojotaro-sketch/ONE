import { useMemo, useState } from 'react';
import { 
  BookMarked, ListChecks, Sparkles, FlaskConical, ArrowRight, 
  Info, CheckCircle2, Circle, ChevronRight, ChevronDown, ChevronUp, Zap, Award,
  Brain, AlertTriangle, Scale, Target, TrendingUp, XCircle, Lightbulb
} from 'lucide-react';
import { STRUCTURED_NOTES_DATA } from '../../data/structuredNotesData';
import { REACTION_DIAGRAMS } from '../../data/reactionDiagramsData';
import { SingleReactionDiagram } from './ReactionDiagramCard';
import { formatMathString } from './FormulaCard';
import ChemistryExamDiagramCard from './ChemistryExamDiagramCard';
import BiologyExamDiagramCard from './BiologyExamDiagramCard';
import ChemicalReactionDisplay from './ChemicalReactionDisplay';
import { isTopicCompleted } from '../../utils/studyTopicTicks';

/**
 * Splits a multi-sentence or multi-line definition / Q&A answer into clean bullet points
 * so answers and definitions always render in easy-to-scan points.
 */
function splitIntoBulletPoints(rawText = '') {
  if (!rawText) return [];
  const text = String(rawText).trim();
  if (!text) return [];

  // First split by explicit newlines or pipe separators " | "
  const rawLines = text
    .split(/\n+|\s+\|\s+/)
    .map((l) => l.replace(/^[•\-\*]\s*/, '').trim())
    .filter(Boolean);

  const points = [];
  rawLines.forEach((line) => {
    // Split multi-sentence or semicolon-separated lines into individual points while avoiding abbreviations like e.g., i.e., Fig., Eq., No., Dr., vs., conc., dil., aq., mol.
    const sentences = line
      .split(/(?:;\s+|(?<=[.!?])\s+(?=(?:\([0-9a-zA-Z]+\)|[0-9]+\.\s|[A-ZΔαβγ\[<])))/)
      .map((s) => s.replace(/^[•\-\*]\s*/, '').trim())
      .filter(Boolean);

    if (sentences.length > 1) {
      let buffer = '';
      sentences.forEach((s) => {
        if (buffer && /(?:\b(?:e\.g|i\.e|vs|Fig|Eq|Dr|Mr|No|conc|dil|aq|at|mol|wt|sp|var)\.|^[0-9]+\.)$/i.test(buffer)) {
          buffer = `${buffer} ${s}`;
        } else {
          if (buffer) points.push(buffer);
          buffer = s;
        }
      });
      if (buffer) points.push(buffer);
    } else {
      points.push(line);
    }
  });

  return points.length > 0 ? points : [text];
}

// Intelligent fallback parser for sections without manual curation
function parseFallbackContent(section, subtopicId, chapterId) {
  const definitions = [];
  const keyPoints = [];
  const extraPoints = [];
  const reactions = [];

  const rawText = section.explanation || '';
  const textbookText = section.textbookRef || '';
  const questionText = section.questionFraming || '';

  // 1. Break explanation into paragraphs/bullet lines
  const rawLines = rawText.split(/\n+/).map(l => l.trim()).filter(Boolean);

  rawLines.forEach(line => {
    // If line starts with bullet or dash
    const cleanLine = line.replace(/^[•\-\*]\s*/, '').trim();

    // Check if it's a definition: contains "is defined as", "is called", "refers to" or "Term: text"
    const colonMatch = cleanLine.match(/^([A-Za-z0-9\s\(\)·\-]{3,35}):\s+(.+)$/);
    const defMatch = cleanLine.match(/^([A-Za-z0-9\s\(\)·\-]{3,35})\s+(is defined as|refers to|is the)\s+(.+)$/i);

    if (colonMatch && colonMatch[2].length > 25) {
      definitions.push({
        term: colonMatch[1].trim(),
        definition: colonMatch[2].trim()
      });
    } else if (defMatch && defMatch[3].length > 20) {
      definitions.push({
        term: defMatch[1].trim(),
        definition: `${defMatch[2]} ${defMatch[3].trim()}`
      });
    } else {
      // Split long compound paragraphs into distinct sentences for clean bullets
      const sentences = cleanLine.split(/(?<=[.!?])\s+(?=[A-Z0-9•])/).filter(s => s.trim().length > 10);
      sentences.forEach(s => {
        keyPoints.push(s.trim());
      });
    }
  });

  // 2. Extra Points from textbookRef
  if (textbookText) {
    const refSentences = textbookText.split(/(?<=[.!?])\s+(?=[A-Z0-9•])/).filter(s => s.trim().length > 15);
    refSentences.forEach((s, idx) => {
      if (idx < 3) {
        extraPoints.push(s.trim());
      }
    });
  }

  // 3. Find any matching reactions in REACTION_DIAGRAMS
  const matchingDiagrams = REACTION_DIAGRAMS.filter(d => {
    if (subtopicId && d.subtopicId === subtopicId) return true;
    if (!subtopicId && chapterId && d.chapterId === chapterId) return true;
    return false;
  });

  matchingDiagrams.forEach(diag => {
    reactions.push({
      name: diag.title,
      isNamedReaction: diag.category === 'organic' || diag.category === 'mechanism',
      equation: diag.equation || (diag.reactions ? diag.reactions[0]?.equation : null),
      howItWorks: diag.subtitle || (diag.mechanismSteps ? diag.mechanismSteps[0] : 'Standard NCERT reaction pathway.'),
      diagramId: diag.id,
      diagRef: diag
    });
  });

  // 4. Synthesize smart Oswaal-style exam trend & answering tips from questionFraming
  let examTrend = null;
  let commonlyMadeErrors = null;

  if (questionText) {
    examTrend = {
      pattern: questionText.split('—')[0]?.trim() || 'Board Concept & Numerical Question',
      pastYears: 'CBSE Previous Years & Sample Question Papers',
      highYieldPrompt: questionText
    };
  }

  return { definitions, keyPoints, extraPoints, reactions, examTrend, commonlyMadeErrors };
}

export default function StructuredSectionView({
  section,
  subtopicId,
  chapterId,
  subjectId,
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

  // 1. Get structured data (from inline section.structuredData, curated map, or parsed fallback)
  const structuredData = useMemo(() => {
    const curated = section?.structuredData || STRUCTURED_NOTES_DATA[section?.id] || STRUCTURED_NOTES_DATA[subtopicId];
    if (curated) {
      // Enrich curated reactions with diagram references
      const enrichedReactions = (curated.reactions || []).map(r => {
        const matchingDiag = REACTION_DIAGRAMS.find(d => d.id === r.diagramId);
        return {
          ...r,
          diagRef: matchingDiag
        };
      });

      return {
        ...curated,
        reactions: enrichedReactions
      };
    }

    return parseFallbackContent(section, subtopicId, chapterId);
  }, [section, subtopicId, chapterId]);

  const { 
    examBlueprintBadge,
    visualDiagrams,
    definitions, 
    keyPoints, 
    comparisonTables,
    qaPairs,
    extraPoints, 
    reactions,
    oswaalMnemonic,
    commonlyMadeErrors,
    assertionReason,
    examTrend
  } = structuredData;

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* ==================================================================== */}
      {/* 0. TEACHER EXAM FOCUS BADGE & VISUAL DIAGRAMS */}
      {/* ==================================================================== */}
      {examBlueprintBadge && (
        <div className="px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-default)] flex items-center gap-2.5 text-xs sm:text-sm text-[var(--text-primary)] font-medium">
          <BookMarked size={15} className="text-[var(--accent-primary)] shrink-0" />
          <span>{examBlueprintBadge}</span>
        </div>
      )}

      {visualDiagrams && visualDiagrams.length > 0 && (
        <div className="space-y-4">
          {visualDiagrams.map((diag, idx) =>
            diag.subject === 'biology' ? (
              <BiologyExamDiagramCard
                key={diag.id || idx}
                diagramId={diag.id}
                title={diag.title}
                subtitle={diag.subtitle}
              />
            ) : (
              <ChemistryExamDiagramCard
                key={diag.id || idx}
                diagramId={diag.id}
                title={diag.title}
                subtitle={diag.subtitle}
                sectionId={secId}
                completedSections={completedSections}
                onToggleTopic={onToggleTopic}
                onToggleTopicGroup={onToggleTopicGroup}
                allSectionTopicIds={allSectionTopicIds}
              />
            )
          )}
        </div>
      )}
      {/* ==================================================================== */}
      {/* 1. DEFINITIONS (Named Definitions Box — Collapsible + Individual Ticks) */}
      {/* ==================================================================== */}
      {definitions && definitions.length > 0 && (() => {
        const defTopicIds = secId ? definitions.map((_, idx) => `${secId}::def-${idx}`) : [];
        const defDoneCount = secId
          ? defTopicIds.filter((tId) => isTopicCompleted(tId, secId, completedSections)).length
          : 0;
        const allDefsDone = secId && defTopicIds.length > 0 && defDoneCount === defTopicIds.length;

        return (
          <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)] shadow-xs space-y-3 transition-all">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent-primary)]">
              <button
                type="button"
                onClick={() => toggleBlock('definitions')}
                className="text-left flex items-center gap-2 min-w-0 flex-1 cursor-pointer group"
                aria-expanded={!minimizedBlocks.definitions}
              >
                <BookMarked size={16} />
                <span className="group-hover:underline">Definitions ({definitions.length})</span>
              </button>

              <div className="flex items-center gap-2 shrink-0">
                {secId && onToggleTopicGroup && (
                  <button
                    type="button"
                    data-no-print="true"
                    onClick={() => onToggleTopicGroup(defTopicIds, secId, allSectionTopicIds)}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[10px] font-mono font-bold normal-case transition-all cursor-pointer ${
                      allDefsDone
                        ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)]'
                        : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] border-[var(--border-default)] hover:border-[var(--accent-primary)]'
                    }`}
                    title={allDefsDone ? 'Untick all definitions' : 'Tick all definitions completed'}
                  >
                    {allDefsDone ? <CheckCircle2 size={13} /> : <Circle size={13} />}
                    <span>{defDoneCount}/{definitions.length}</span>
                  </button>
                )}

                <button
                  type="button"
                  data-no-print="true"
                  onClick={() => toggleBlock('definitions')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[var(--bg-surface)] hover:bg-[var(--accent-primary)]/15 border border-[var(--border-default)] text-[10px] font-mono font-bold text-[var(--accent-primary)] normal-case transition-colors cursor-pointer"
                >
                  <span>{minimizedBlocks.definitions ? 'Expand' : 'Minimize'}</span>
                  {minimizedBlocks.definitions ? <ChevronDown size={13} /> : <ChevronUp size={13} />}
                </button>
              </div>
            </div>

            <div
              data-print-expand="true"
              className={`${minimizedBlocks.definitions ? 'hidden' : 'block'} divide-y divide-[var(--border-subtle)] space-y-2`}
            >
              {definitions.map((def, idx) => {
                const defTopicId = secId ? `${secId}::def-${idx}` : null;
                const isDefDone = defTopicId ? isTopicCompleted(defTopicId, secId, completedSections) : false;

                return (
                  <div key={idx} className="pt-2.5 first:pt-0 space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2 min-w-0 flex-1">
                        <span className="px-1.5 py-0.5 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-mono text-[10px] font-bold text-[var(--accent-primary)] shrink-0 mt-0.5">
                          #{idx + 1}
                        </span>
                        <span
                          className="font-serif text-sm sm:text-base font-bold text-[var(--text-primary)]"
                          dangerouslySetInnerHTML={{ __html: formatMathString(def.term) }}
                        />
                      </div>

                      {defTopicId && onToggleTopic && (
                        <button
                          type="button"
                          data-no-print="true"
                          onClick={() => onToggleTopic(defTopicId, secId, allSectionTopicIds)}
                          className={`p-1 rounded-full transition-all cursor-pointer flex items-center justify-center shrink-0 ${
                            isDefDone
                              ? 'bg-[var(--accent-primary)] text-white shadow-2xs scale-105'
                              : 'border border-[var(--border-default)] text-[var(--text-muted)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]'
                          }`}
                          title={isDefDone ? `Mark definition #${idx + 1} incomplete` : `Mark definition #${idx + 1} completed`}
                        >
                          {isDefDone ? <CheckCircle2 size={15} /> : <Circle size={15} />}
                        </button>
                      )}
                    </div>
                    <ul className="space-y-1.5 pl-3 border-l-2 border-[var(--accent-primary)]/40">
                      {splitIntoBulletPoints(def.definition).map((pt, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex items-start gap-2 font-sans text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] shrink-0" />
                          <span dangerouslySetInnerHTML={{ __html: formatMathString(pt) }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })()}

      {/* ==================================================================== */}
      {/* 2. KEY POINTS (Clean Bullet Points — Collapsible + Individual Ticks) */}
      {/* ==================================================================== */}
      {keyPoints && keyPoints.length > 0 && (() => {
        const kpTopicIds = secId ? keyPoints.map((_, idx) => `${secId}::kp-${idx}`) : [];
        const kpDoneCount = secId
          ? kpTopicIds.filter((tId) => isTopicCompleted(tId, secId, completedSections)).length
          : 0;
        const allKpDone = secId && kpTopicIds.length > 0 && kpDoneCount === kpTopicIds.length;

        return (
          <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-xs space-y-3 transition-all">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
              <button
                type="button"
                onClick={() => toggleBlock('keyPoints')}
                className="text-left flex items-center gap-2 min-w-0 flex-1 cursor-pointer group"
                aria-expanded={!minimizedBlocks.keyPoints}
              >
                <ListChecks size={16} className="text-emerald-600 dark:text-emerald-400" />
                <span className="group-hover:text-[var(--accent-primary)] transition-colors">Key Points ({keyPoints.length})</span>
              </button>

              <div className="flex items-center gap-2 shrink-0">
                {secId && onToggleTopicGroup && (
                  <button
                    type="button"
                    data-no-print="true"
                    onClick={() => onToggleTopicGroup(kpTopicIds, secId, allSectionTopicIds)}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[10px] font-mono font-bold normal-case transition-all cursor-pointer ${
                      allKpDone
                        ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)]'
                        : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] border-[var(--border-default)] hover:border-[var(--accent-primary)]'
                    }`}
                    title={allKpDone ? 'Untick all key points' : 'Tick all key points completed'}
                  >
                    {allKpDone ? <CheckCircle2 size={13} /> : <Circle size={13} />}
                    <span>{kpDoneCount}/{keyPoints.length}</span>
                  </button>
                )}

                <button
                  type="button"
                  data-no-print="true"
                  onClick={() => toggleBlock('keyPoints')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[var(--bg-elevated)] hover:bg-[var(--accent-primary)]/15 border border-[var(--border-default)] text-[10px] font-mono font-bold text-[var(--accent-primary)] normal-case transition-colors cursor-pointer"
                >
                  <span>{minimizedBlocks.keyPoints ? 'Expand' : 'Minimize'}</span>
                  {minimizedBlocks.keyPoints ? <ChevronDown size={13} /> : <ChevronUp size={13} />}
                </button>
              </div>
            </div>

            <ul
              data-print-expand="true"
              className={`${minimizedBlocks.keyPoints ? 'hidden' : 'block'} space-y-2.5`}
            >
              {keyPoints.map((pt, idx) => {
                const formattedPt = formatMathString(pt);
                const kpTopicId = secId ? `${secId}::kp-${idx}` : null;
                const isKpDone = kpTopicId ? isTopicCompleted(kpTopicId, secId, completedSections) : false;

                return (
                  <li
                    key={idx}
                    className={`flex items-start justify-between gap-2.5 p-2.5 rounded-xl border text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed transition-all ${
                      isKpDone
                        ? 'bg-[var(--bg-elevated)]/70 border-[var(--accent-primary)]'
                        : 'bg-[var(--bg-elevated)]/35 border-[var(--border-subtle)]'
                    }`}
                  >
                    <div className="flex items-start gap-2.5 min-w-0 flex-1">
                      <span className="px-1.5 py-0.5 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-mono text-[10px] font-bold text-[var(--accent-primary)] shrink-0 mt-0.5">
                        #{idx + 1}
                      </span>
                      <span
                        className="flex-1 break-words font-medium"
                        dangerouslySetInnerHTML={{ __html: formattedPt }}
                      />
                    </div>

                    {kpTopicId && onToggleTopic && (
                      <button
                        type="button"
                        data-no-print="true"
                        onClick={() => onToggleTopic(kpTopicId, secId, allSectionTopicIds)}
                        className={`p-1 rounded-full transition-all cursor-pointer flex items-center justify-center shrink-0 mt-0.5 ${
                          isKpDone
                            ? 'bg-[var(--accent-primary)] text-white shadow-2xs scale-105'
                            : 'border border-[var(--border-default)] text-[var(--text-muted)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]'
                        }`}
                        title={isKpDone ? `Mark Key Point #${idx + 1} incomplete` : `Mark Key Point #${idx + 1} completed`}
                      >
                        {isKpDone ? <CheckCircle2 size={15} /> : <Circle size={15} />}
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })()}

      {/* ==================================================================== */}
      {/* 2B. COMPARISON & DISTINGUISH TABLES (Collapsible + Individual Ticks) */}
      {/* ==================================================================== */}
      {comparisonTables && comparisonTables.length > 0 && (
        <div className="space-y-5">
          {comparisonTables.map((tbl, tIdx) => {
            const tblKey = `table-${tIdx}`;
            const isTblMinimized = Boolean(minimizedBlocks[tblKey]);
            const tblTopicId = secId ? `${secId}::tbl-${tIdx}` : null;
            const isTblDone = tblTopicId ? isTopicCompleted(tblTopicId, secId, completedSections) : false;

            return (
              <div
                key={tIdx}
                className={`rounded-2xl bg-[var(--bg-surface)] border shadow-xs overflow-hidden transition-all ${
                  isTblDone ? 'border-[var(--accent-primary)]' : 'border-[var(--border-default)]'
                }`}
              >
                <div
                  className={`px-4 py-3 sm:px-5 sm:py-3.5 bg-[var(--bg-elevated)] flex items-center justify-between gap-2 ${
                    !isTblMinimized ? 'border-b border-[var(--border-subtle)]' : ''
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleBlock(tblKey)}
                    className="text-left flex items-center gap-2 min-w-0 flex-1 cursor-pointer group"
                    aria-expanded={!isTblMinimized}
                  >
                    <Scale size={15} className="text-[var(--accent-primary)] shrink-0" />
                    <h5 className="font-serif text-sm sm:text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                      {tbl.title}
                    </h5>
                  </button>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="hidden sm:inline text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-muted)]">
                      Distinguish Table
                    </span>
                    <button
                      type="button"
                      data-no-print="true"
                      onClick={() => toggleBlock(tblKey)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[var(--bg-surface)] hover:bg-[var(--accent-primary)]/15 border border-[var(--border-default)] text-[10px] font-mono font-bold text-[var(--accent-primary)] transition-colors cursor-pointer"
                    >
                      <span>{isTblMinimized ? 'Expand' : 'Minimize'}</span>
                      {isTblMinimized ? <ChevronDown size={13} /> : <ChevronUp size={13} />}
                    </button>

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
                        title={isTblDone ? 'Mark table incomplete' : 'Mark table completed'}
                      >
                        {isTblDone ? <CheckCircle2 size={16} /> : <Circle size={16} />}
                      </button>
                    )}
                  </div>
                </div>
                <div
                  data-print-expand="true"
                  className={`${isTblMinimized ? 'hidden' : 'block'} overflow-x-auto`}
                >
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-[var(--bg-base)] border-b border-[var(--border-subtle)]">
                        {tbl.headers.map((h, hIdx) => (
                          <th
                            key={hIdx}
                            className="px-3.5 py-2.5 sm:px-4 sm:py-3 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] border-r last:border-r-0 border-[var(--border-subtle)]"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--border-subtle)]">
                      {tbl.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-[var(--bg-elevated)]/40 transition-colors">
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className={`px-3.5 py-2.5 sm:px-4 sm:py-3 align-top leading-relaxed whitespace-pre-wrap border-r last:border-r-0 border-[var(--border-subtle)] ${
                                cIdx === 0
                                  ? 'font-serif font-bold text-[var(--text-primary)] bg-[var(--bg-base)]/40 w-1/4 min-w-[120px]'
                                  : 'font-sans text-[var(--text-secondary)] min-w-[180px]'
                              }`}
                              dangerouslySetInnerHTML={{ __html: formatMathString(cell) }}
                            />
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ==================================================================== */}
      {/* 2C. EXAM QUESTIONS, MLM GIVE REASONS, REMEDIAL Qs & REACTIONS */}
      {/* ==================================================================== */}
      {qaPairs && qaPairs.length > 0 && (() => {
        const qaTopicIds = secId ? qaPairs.map((_, idx) => `${secId}::qa-${idx}`) : [];
        const qaDoneCount = secId
          ? qaTopicIds.filter((tId) => isTopicCompleted(tId, secId, completedSections)).length
          : 0;
        const allQaDone = secId && qaTopicIds.length > 0 && qaDoneCount === qaTopicIds.length;

        return (
          <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-xs space-y-3.5 transition-all">
            <div className="flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => toggleBlock('qaPairs')}
                className="text-left flex items-center gap-2 min-w-0 flex-1 text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors cursor-pointer"
                aria-expanded={!minimizedBlocks.qaPairs}
              >
                <ListChecks size={16} className="text-[var(--accent-primary)] shrink-0" />
                <span>Exam Questions, Give Reasons &amp; Reactions ({qaPairs.length})</span>
              </button>

              <div className="flex items-center gap-2 shrink-0" data-no-print="true">
                {secId && onToggleTopicGroup && (
                  <button
                    type="button"
                    onClick={() => onToggleTopicGroup(qaTopicIds, secId, allSectionTopicIds)}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[10px] font-mono font-bold transition-all cursor-pointer ${
                      allQaDone
                        ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)]'
                        : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] border-[var(--border-default)] hover:border-[var(--accent-primary)]'
                    }`}
                    title={allQaDone ? 'Untick all questions' : 'Tick all questions completed'}
                  >
                    {allQaDone ? <CheckCircle2 size={13} /> : <Circle size={13} />}
                    <span>{qaDoneCount}/{qaPairs.length}</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => toggleBlock('qaPairs')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[var(--bg-elevated)] hover:bg-[var(--accent-primary)]/15 border border-[var(--border-default)] text-[10px] font-mono font-bold text-[var(--accent-primary)] shrink-0 transition-colors cursor-pointer"
                >
                  <span>{minimizedBlocks.qaPairs ? 'Expand' : 'Minimize'}</span>
                  {minimizedBlocks.qaPairs ? <ChevronDown size={13} /> : <ChevronUp size={13} />}
                </button>
              </div>
            </div>

            <div
              data-print-expand="true"
              className={`${minimizedBlocks.qaPairs ? 'hidden' : 'block'} space-y-3`}
            >
              {qaPairs.map((qa, qIdx) => {
                const qaTopicId = secId ? `${secId}::qa-${qIdx}` : null;
                const isQaDone = qaTopicId ? isTopicCompleted(qaTopicId, secId, completedSections) : false;

                return (
                  <div
                    key={qIdx}
                    className={`p-4 sm:p-5 rounded-2xl bg-[var(--bg-elevated)] border space-y-2.5 transition-all ${
                      isQaDone ? 'border-[var(--accent-primary)] shadow-2xs' : 'border-[var(--border-default)]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        {qa.number && (
                          <span className="px-2 py-0.5 rounded-md bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-mono text-[11px] font-bold text-[var(--accent-primary)]">
                            {qa.number}
                          </span>
                        )}
                        {qa.badge && (
                          <span className="px-2.5 py-0.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-mono text-[10px] font-semibold text-[var(--text-secondary)]">
                            {qa.badge}
                          </span>
                        )}
                      </div>

                      {qaTopicId && onToggleTopic && (
                        <button
                          type="button"
                          data-no-print="true"
                          onClick={() => onToggleTopic(qaTopicId, secId, allSectionTopicIds)}
                          className={`p-1 rounded-full transition-all cursor-pointer flex items-center justify-center shrink-0 ${
                            isQaDone
                              ? 'bg-[var(--accent-primary)] text-white shadow-2xs scale-105'
                              : 'border border-[var(--border-default)] text-[var(--text-muted)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]'
                          }`}
                          title={isQaDone ? `Mark ${qa.number || `Question ${qIdx + 1}`} incomplete` : `Mark ${qa.number || `Question ${qIdx + 1}`} completed`}
                        >
                          {isQaDone ? <CheckCircle2 size={16} /> : <Circle size={16} />}
                        </button>
                      )}
                    </div>

                    <h5
                      className="font-serif text-sm sm:text-base font-bold text-[var(--text-primary)] leading-snug whitespace-pre-wrap"
                      dangerouslySetInnerHTML={{ __html: formatMathString(qa.question) }}
                    />

                    <ul className="space-y-1.5 pl-3 border-l-2 border-[var(--accent-primary)]/45">
                      {splitIntoBulletPoints(qa.answer).map((pt, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex items-start gap-2 font-sans text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] shrink-0" />
                          <span dangerouslySetInnerHTML={{ __html: formatMathString(pt) }} />
                        </li>
                      ))}
                    </ul>

                    {qa.equation && (
                      <ChemicalReactionDisplay formula={qa.equation} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })()}

      {/* ==================================================================== */}
      {/* 3. OSWAAL MEMORY BOOSTER & MNEMONICS (Brain Trick) */}
      {/* ==================================================================== */}
      {!isCleanMode && oswaalMnemonic && (
        <div className="p-4 sm:p-5 rounded-2xl bg-purple-500/10 border-2 border-purple-500/35 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300">
            <Brain size={16} className="text-purple-600 dark:text-purple-400 shrink-0" />
            <span>Oswaal Memory Booster & Mnemonic</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-700 dark:text-purple-300 font-bold ml-auto">
              Memory Trick
            </span>
          </div>
          <div className="space-y-2">
            <h5 className="font-serif text-sm sm:text-base font-bold text-[var(--text-primary)]">
              {oswaalMnemonic.title}
            </h5>
            <div 
              className="font-mono text-xs sm:text-sm font-bold p-3 rounded-xl bg-[var(--bg-elevated)] border border-purple-500/30 text-purple-700 dark:text-purple-300 leading-relaxed whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: formatMathString(oswaalMnemonic.phrase) }}
            />
            {oswaalMnemonic.explanation && (
              <p 
                className="text-xs text-[var(--text-secondary)] leading-relaxed font-medium pl-2 border-l-2 border-purple-500/40"
                dangerouslySetInnerHTML={{ __html: formatMathString(oswaalMnemonic.explanation) }}
              />
            )}
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 4. EXTRA POINTS (High-Yield Exam Notes & Nuances) */}
      {/* ==================================================================== */}
      {!isCleanMode && extraPoints && extraPoints.length > 0 && (
        <div className="p-4 sm:p-5 rounded-2xl bg-[var(--badge-recommended-bg)]/15 border border-[var(--badge-recommended-bg)]/35 shadow-xs space-y-2.5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-accent)]">
            <Sparkles size={16} className="text-[var(--text-accent)] shrink-0" />
            <span>Extra Points & High-Yield Exam Notes ({extraPoints.length})</span>
          </div>

          <ul className="space-y-2 pl-1">
            {extraPoints.map((ep, idx) => {
              const epTopicId = secId ? `${secId}::ep-${idx}` : null;
              const isEpDone = epTopicId ? isTopicCompleted(epTopicId, secId, completedSections) : false;

              return (
                <li key={idx} className="flex items-start justify-between gap-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  <div className="flex items-start gap-2 min-w-0 flex-1">
                    <span className="px-1.5 py-0.5 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-mono text-[10px] font-bold text-[var(--text-accent)] shrink-0 mt-0.5">
                      #{idx + 1}
                    </span>
                    <span 
                      className="flex-1 break-words"
                      dangerouslySetInnerHTML={{ __html: formatMathString(ep) }}
                    />
                  </div>
                  {epTopicId && onToggleTopic && (
                    <button
                      type="button"
                      data-no-print="true"
                      onClick={() => onToggleTopic(epTopicId, secId, allSectionTopicIds)}
                      className={`p-1 rounded-full transition-all cursor-pointer flex items-center justify-center shrink-0 mt-0.5 ${
                        isEpDone
                          ? 'bg-[var(--accent-primary)] text-white shadow-2xs scale-105'
                          : 'border border-[var(--border-default)] text-[var(--text-muted)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]'
                      }`}
                      title={isEpDone ? `Mark Extra Point #${idx + 1} incomplete` : `Mark Extra Point #${idx + 1} completed`}
                    >
                      {isEpDone ? <CheckCircle2 size={15} /> : <Circle size={15} />}
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 5. REACTIONS & NAMED REACTIONS (With simplified description & diagrams) */}
      {/* ==================================================================== */}
      {reactions && reactions.length > 0 && (
        <div className="space-y-4 pt-1">
          <div className="flex items-center gap-2 px-1">
            <FlaskConical size={18} className="text-amber-500 shrink-0" />
            <h4 className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)]">
              Reactions & Named Reactions
            </h4>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-muted)] font-semibold ml-auto">
              {reactions.length} Reaction{reactions.length > 1 ? 's' : ''}
            </span>
          </div>

          <div className="space-y-5">
            {reactions.map((rxn, idx) => {
              const rxnTopicId = secId ? `${secId}::rxn-${idx}` : null;
              const isRxnDone = rxnTopicId ? isTopicCompleted(rxnTopicId, secId, completedSections) : false;

              return (
              <div 
                key={idx} 
                className={`p-4 sm:p-5 rounded-2xl bg-[var(--bg-surface)] border shadow-xs space-y-3.5 transition-all ${
                  isRxnDone
                    ? 'border-[var(--accent-primary)] shadow-sm'
                    : 'border-[var(--border-default)] hover:border-[var(--accent-primary)]/50'
                }`}
              >
                {/* 5a. Reaction Name & Named Reaction Pill */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-[var(--bg-elevated)] border border-[var(--border-subtle)] font-mono text-[10px] font-bold text-[var(--accent-primary)]">
                      #{idx + 1}
                    </span>
                    <span className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)]">
                      {rxn.name}
                    </span>
                    {rxn.isNamedReaction && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                        Named Reaction
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[11px] font-mono text-[var(--text-muted)]">
                      NCERT Class 12
                    </span>
                    {rxnTopicId && onToggleTopic && (
                      <button
                        type="button"
                        data-no-print="true"
                        onClick={() => onToggleTopic(rxnTopicId, secId, allSectionTopicIds)}
                        className={`p-1 rounded-full transition-all cursor-pointer flex items-center justify-center shrink-0 ${
                          isRxnDone
                            ? 'bg-[var(--accent-primary)] text-white shadow-2xs scale-105'
                            : 'border border-[var(--border-default)] text-[var(--text-muted)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]'
                        }`}
                        title={isRxnDone ? `Mark Reaction #${idx + 1} incomplete` : `Mark Reaction #${idx + 1} completed`}
                      >
                        {isRxnDone ? <CheckCircle2 size={16} /> : <Circle size={16} />}
                      </button>
                    )}
                  </div>
                </div>

                {/* 5b. Chemical Reaction Equation */}
                {rxn.equation && (
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] block">
                      Chemical Equation:
                    </span>
                    <div 
                      className="font-mono text-xs sm:text-sm font-bold p-3 rounded-xl bg-[var(--bg-elevated)] text-[var(--accent-primary)] border border-[var(--border-subtle)] overflow-x-auto whitespace-pre-wrap break-words"
                      dangerouslySetInnerHTML={{ __html: formatMathString(rxn.equation) }}
                    />
                  </div>
                )}

                {/* 5c. Simplified Description of How It Works */}
                {rxn.howItWorks && (
                  <div className="space-y-1.5 p-3 rounded-xl bg-[var(--bg-base)]/60 border border-[var(--border-subtle)]">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
                      <Zap size={13} className="text-amber-500" />
                      How It Works (Simplified Mechanism):
                    </span>
                    <p 
                      className="font-sans text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed font-medium"
                      dangerouslySetInnerHTML={{ __html: formatMathString(rxn.howItWorks) }}
                    />
                  </div>
                )}

                {/* 5d. Visual Diagram for the Reaction */}
                {rxn.diagRef && (
                  <div className="space-y-1 pt-1">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5 mb-1.5">
                      <Sparkles size={13} className="text-[var(--accent-primary)]" />
                      Visual Diagram of Reaction:
                    </span>
                    <SingleReactionDiagram rxn={rxn.diagRef} isCleanMode={isCleanMode} />
                  </div>
                )}
              </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 6. OSWAAL COMMONLY MADE ERRORS & ANSWERING TIPS (⚠️ / ✅) */}
      {/* ==================================================================== */}
      {!isCleanMode && commonlyMadeErrors && commonlyMadeErrors.length > 0 && (
        <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-xs space-y-3.5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
            <AlertTriangle size={16} className="shrink-0" />
            <span>Commonly Made Errors & CBSE Answering Tips</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-rose-500/15 text-rose-500 font-bold ml-auto">
              Avoid Negative Marking
            </span>
          </div>

          <div className="space-y-3">
            {commonlyMadeErrors.map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                {/* Error Column */}
                <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-rose-600 dark:text-rose-400 font-bold text-xs uppercase tracking-wider font-mono">
                    <XCircle size={14} className="shrink-0" />
                    <span>Commonly Made Error</span>
                  </div>
                  <p 
                    className="text-[var(--text-primary)] font-medium leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: formatMathString(item.error) }}
                  />
                  {item.penalty && (
                    <span className="inline-block text-[10px] font-mono font-bold text-rose-500 bg-rose-500/15 px-2 py-0.5 rounded">
                      Penalty: {item.penalty}
                    </span>
                  )}
                </div>

                {/* Answering Tip Column */}
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider font-mono">
                    <CheckCircle2 size={14} className="shrink-0" />
                    <span>Topper's Answering Tip & Examiner Key</span>
                  </div>
                  <p 
                    className="text-[var(--text-primary)] font-medium leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: formatMathString(item.tip) }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 7. CBSE ASSERTION & REASONING CORNER (⚖️ Section A Special) */}
      {/* ==================================================================== */}
      {!isCleanMode && assertionReason && (
        <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-elevated)] border-2 border-indigo-500/30 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <Scale size={16} className="shrink-0" />
            <span>CBSE Assertion & Reasoning Corner</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 font-bold ml-auto">
              Section A (High-Yield)
            </span>
          </div>

          <div className="space-y-2.5 text-xs sm:text-sm">
            <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2.5">
              <div className="space-y-1">
                <span className="font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase block">
                  Assertion (A):
                </span>
                <p 
                  className="text-[var(--text-primary)] font-medium leading-relaxed pl-2.5 border-l-2 border-indigo-500"
                  dangerouslySetInnerHTML={{ __html: formatMathString(assertionReason.assertion) }}
                />
              </div>

              <div className="space-y-1 pt-2 border-t border-[var(--border-subtle)]">
                <span className="font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase block">
                  Reason (R):
                </span>
                <p 
                  className="text-[var(--text-primary)] font-medium leading-relaxed pl-2.5 border-l-2 border-indigo-500"
                  dangerouslySetInnerHTML={{ __html: formatMathString(assertionReason.reason) }}
                />
              </div>
            </div>

            {assertionReason.correctOption && (
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-1.5">
                <span className="font-mono text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase flex items-center gap-1.5">
                  <CheckCircle2 size={14} />
                  Oswaal Verified Answer:
                </span>
                <p 
                  className="font-bold text-xs sm:text-sm text-[var(--text-primary)]"
                  dangerouslySetInnerHTML={{ __html: formatMathString(assertionReason.correctOption) }}
                />
                {assertionReason.explanation && (
                  <p 
                    className="text-xs text-[var(--text-secondary)] leading-relaxed pt-1"
                    dangerouslySetInnerHTML={{ __html: formatMathString(assertionReason.explanation) }}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 8. CBSE BOARD EXAM TRENDS & RECURRING QUESTIONS (🎯) */}
      {/* ==================================================================== */}
      {!isCleanMode && examTrend && (
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/35 shadow-xs space-y-2.5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            <Target size={16} className="shrink-0" />
            <span>CBSE Board Exam Trend & Recurring Questions</span>
            {examTrend.pastYears && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-800 dark:text-amber-300 font-bold ml-auto">
                {examTrend.pastYears}
              </span>
            )}
          </div>

          <div className="space-y-2 text-xs sm:text-sm">
            {examTrend.pattern && (
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Expected Format:</span>
                <span className="font-mono text-xs font-bold text-[var(--accent-primary)] px-2 py-0.5 rounded bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                  {examTrend.pattern}
                </span>
              </div>
            )}
            {examTrend.highYieldPrompt && (
              <div className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-1">
                <span className="text-[11px] font-mono font-bold text-amber-600 dark:text-amber-400 uppercase block">
                  Frequently Tested Board Question:
                </span>
                <p 
                  className="text-[var(--text-primary)] font-medium leading-relaxed italic"
                  dangerouslySetInnerHTML={{ __html: formatMathString(examTrend.highYieldPrompt) }}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
