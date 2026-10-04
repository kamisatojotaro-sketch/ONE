import { useMemo } from 'react';
import { 
  BookMarked, ListChecks, Sparkles, FlaskConical, ArrowRight, 
  Info, CheckCircle2, ChevronRight, Zap, Award,
  Brain, AlertTriangle, Scale, Target, TrendingUp, XCircle, Lightbulb
} from 'lucide-react';
import { STRUCTURED_NOTES_DATA } from '../../data/structuredNotesData';
import { REACTION_DIAGRAMS } from '../../data/reactionDiagramsData';
import { SingleReactionDiagram } from './ReactionDiagramCard';
import { formatMathString } from './FormulaCard';

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

export default function StructuredSectionView({ section, subtopicId, chapterId, subjectId }) {
  // 1. Get structured data (either curated or parsed)
  const structuredData = useMemo(() => {
    const curated = STRUCTURED_NOTES_DATA[subtopicId];
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
    definitions, 
    keyPoints, 
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
      {/* 1. DEFINITIONS (Named Definitions Box) */}
      {/* ==================================================================== */}
      {definitions && definitions.length > 0 && (
        <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)] shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent-primary)]">
            <BookMarked size={16} />
            <span>Definitions</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-muted)] ml-auto">
              {definitions.length} Standard NCERT Definition{definitions.length > 1 ? 's' : ''}
            </span>
          </div>

          <div className="divide-y divide-[var(--border-subtle)] space-y-2">
            {definitions.map((def, idx) => (
              <div key={idx} className="pt-2 first:pt-0 space-y-1">
                <div className="flex items-start gap-2">
                  <span 
                    className="font-serif text-sm sm:text-base font-bold text-[var(--text-primary)]"
                    dangerouslySetInnerHTML={{ __html: formatMathString(def.term) }}
                  />
                </div>
                <p 
                  className="font-sans text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed pl-3 border-l-2 border-[var(--accent-primary)]/40"
                  dangerouslySetInnerHTML={{ __html: formatMathString(def.definition) }}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 2. KEY POINTS (Clean Bullet Points — NOT a paragraph!) */}
      {/* ==================================================================== */}
      {keyPoints && keyPoints.length > 0 && (
        <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
            <ListChecks size={16} className="text-emerald-600 dark:text-emerald-400" />
            <span>Key Points</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-muted)] ml-auto">
              Core Concept Summary
            </span>
          </div>

          <ul className="space-y-2.5">
            {keyPoints.map((pt, idx) => {
              const formattedPt = formatMathString(pt);
              return (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] mt-2 shrink-0" />
                  <span 
                    className="flex-1 break-words font-medium"
                    dangerouslySetInnerHTML={{ __html: formattedPt }}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 3. OSWAAL MEMORY BOOSTER & MNEMONICS (Brain Trick) */}
      {/* ==================================================================== */}
      {oswaalMnemonic && (
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
      {extraPoints && extraPoints.length > 0 && (
        <div className="p-4 sm:p-5 rounded-2xl bg-[var(--badge-recommended-bg)]/15 border border-[var(--badge-recommended-bg)]/35 shadow-xs space-y-2.5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-accent)]">
            <Sparkles size={16} className="text-[var(--text-accent)] shrink-0" />
            <span>Extra Points & High-Yield Exam Notes</span>
          </div>

          <ul className="space-y-2 pl-1">
            {extraPoints.map((ep, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                <ChevronRight size={14} className="text-[var(--text-accent)] mt-0.5 shrink-0" />
                <span 
                  className="flex-1 break-words"
                  dangerouslySetInnerHTML={{ __html: formatMathString(ep) }}
                />
              </li>
            ))}
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
            {reactions.map((rxn, idx) => (
              <div 
                key={idx} 
                className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-xs space-y-3.5 hover:border-[var(--accent-primary)]/50 transition-all"
              >
                {/* 5a. Reaction Name & Named Reaction Pill */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)]">
                      {rxn.name}
                    </span>
                    {rxn.isNamedReaction && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                        Named Reaction
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] font-mono text-[var(--text-muted)]">
                    NCERT Class 12
                  </span>
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
                    <SingleReactionDiagram rxn={rxn.diagRef} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 6. OSWAAL COMMONLY MADE ERRORS & ANSWERING TIPS (⚠️ / ✅) */}
      {/* ==================================================================== */}
      {commonlyMadeErrors && commonlyMadeErrors.length > 0 && (
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
      {assertionReason && (
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
      {examTrend && (
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
