import React from 'react';
import { 
  BookMarked, Calculator, HelpCircle, Sparkles, 
  Layers, CheckCircle2, Award, Zap, Compass, Brain, AlertTriangle
} from 'lucide-react';
import { getPhysicsSectionEnrichment } from '../../data/physicsSectionEnrichments';
import { getImportantSubtopicInfo } from '../../data/importantSubtopicsMapping';
import { STRUCTURED_NOTES_DATA } from '../../data/structuredNotesData';
import PhysicsDiagramCard from './PhysicsDiagramCard';
import FormulaCard, { formatMathString } from './FormulaCard';
import { FormattedLatex } from './LatexView';

export default function Physics4PartSectionView({ 
  section, 
  subtopicId, 
  chapterId, 
  diagramId 
}) {
  const importantInfo = getImportantSubtopicInfo(subtopicId);
  const matchedQ = getPhysicsSectionEnrichment(subtopicId);
  const comparisonTable = matchedQ?.comparisonTable || null;

  // 1. Resolve Part 1: Theory
  const theoryPoints = matchedQ?.theory && matchedQ.theory.length > 0 
    ? matchedQ.theory 
    : (section.explanation ? [section.explanation] : []);

  // 2. Resolve Part 2: Derivations
  const hasCuratedDerivation = matchedQ && matchedQ.derivations && matchedQ.derivations.length > 0;
  const sectionDerivationText = section.derivations || null;

  // 3. Resolve Part 3: Diagram
  const resolvedDiagramId = diagramId || matchedQ?.diagram?.diagramId || null;
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
      {/* HANDWRITTEN REVISION SHEET IMPORTANT BADGE */}
      {/* ==================================================================== */}
      {importantInfo && (
        <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-500/10 border-2 border-amber-500/40 shadow-xs flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 font-bold">
            ★
          </div>
          <div className="space-y-0.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                Important Board Exam Question
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 font-bold">
                {importantInfo.examTag}
              </span>
            </div>
            <p className="font-sans text-xs text-[var(--text-secondary)] leading-relaxed font-medium">
              {importantInfo.reason}
            </p>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* PART 1: THEORY (Concise Physical Principles & Microscopic Mechanism) */}
      {/* ==================================================================== */}
      <div className="p-4 sm:p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)] shadow-xs space-y-3.5">
        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2.5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent-primary)]">
            <BookMarked size={16} />
            <span>Part 1: Theory & Physical Principle</span>
          </div>
          <span className="text-[10px] font-mono text-[var(--text-muted)]">
            Concise NCERT Core Concepts
          </span>
        </div>

        <div className="space-y-2.5">
          {theoryPoints.map((pt, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] mt-2 shrink-0" />
              <div 
                className="flex-1 font-medium leading-relaxed"
                dangerouslySetInnerHTML={{ __html: formatMathString(pt) }}
              />
            </div>
          ))}
        </div>

        {comparisonTable && comparisonTable.rows && (
          <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              {comparisonTable.title}
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

      {/* ==================================================================== */}
      {/* PART 2: STEP-BY-STEP DERIVATION (NODIA QB Page 83 Standard) */}
      {/* ==================================================================== */}
      {(hasCuratedDerivation || sectionDerivationText) && (
        <div className="p-4 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border-2 border-[var(--border-default)] shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2.5">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <Calculator size={16} />
              <span>Part 2: Step-by-Step Derivation</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/30">
              Board Derivation Steps
            </span>
          </div>

          {hasCuratedDerivation ? (
            <div className="space-y-6 divide-y divide-[var(--border-subtle)]">
              {matchedQ.derivations.map((d, dIdx) => (
                <div key={dIdx} className="pt-4 first:pt-0 space-y-3.5">
                  <h4 className="font-serif text-sm sm:text-base font-bold text-[var(--text-primary)]">
                    {d.name}
                  </h4>
                  {d.setup && (
                    <div 
                      className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-secondary)] italic leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: formatMathString(d.setup) }}
                    />
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
              ))}
            </div>
          ) : (
            <div className="font-sans text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-wrap pl-3 border-l-2 border-[var(--accent-primary)] break-words">
              <FormattedLatex content={sectionDerivationText} />
            </div>
          )}
        </div>
      )}

      {/* ==================================================================== */}
      {/* PART 3: DIAGRAM & EXAM DRAWING GUIDE */}
      {/* ==================================================================== */}
      {resolvedDiagramId && (
        <div className="p-4 sm:p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)] shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2.5">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-accent)]">
              <Compass size={16} />
              <span>Part 3: Diagram & Exam Drawing Guide</span>
            </div>
            <span className="text-[10px] font-mono text-[var(--text-muted)]">
              Labeling & Ray Checklist
            </span>
          </div>

          <div className="py-2">
            <PhysicsDiagramCard diagramId={resolvedDiagramId} />
          </div>

          {examDrawingGuide && examDrawingGuide.length > 0 && (
            <div className="p-3.5 sm:p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2">
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
      )}

      {/* ==================================================================== */}
      {/* PART 4: KEY POINTS, KEYWORDS & BLUEPRINT */}
      {/* ==================================================================== */}
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
      {oswaalDefinitions.length > 0 && (
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

      {oswaalMnemonic && (
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

      {commonlyMadeErrors.length > 0 && (
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

      {assertionReason && (
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
