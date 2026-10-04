import React from 'react';
import { 
  BookMarked, Calculator, HelpCircle, Sparkles, 
  Layers, CheckCircle2, Award, Zap, Compass
} from 'lucide-react';
import { IMPORTANT_PHYSICS_QUESTIONS } from '../../data/importantQuestionsData';
import { getImportantSubtopicInfo } from '../../data/importantSubtopicsMapping';
import PhysicsDiagramCard from './PhysicsDiagramCard';
import FormulaCard, { formatMathString } from './FormulaCard';
import { FormattedLatex } from './LatexView';

// Mapping from physics subtopic IDs to Top 22 question IDs
const SUBTOPIC_TO_IMPORTANT_Q = {
  'phy-sub-1-1': 'imp-phy-8',
  'phy-sub-1-2': 'imp-phy-8',
  'phy-sub-1-3': 'imp-phy-8',
  'phy-sub-1-4': 'imp-phy-9',
  'phy-sub-1-6': 'imp-phy-18',
  'phy-sub-1-7': 'imp-phy-19',
  'phy-sub-1-8': 'imp-phy-6',
  'phy-sub-1-9': 'imp-phy-1',
  'phy-sub-1-10': 'imp-phy-1',
  'phy-sub-1-11': 'imp-phy-1',
  'phy-sub-2-2': 'imp-phy-7',
  'phy-sub-2-3': 'imp-phy-7',
  'phy-sub-2-4': 'imp-phy-19',
  'phy-sub-2-7': 'imp-phy-10',
  'phy-sub-2-8': 'imp-phy-10',
  'phy-sub-3-5': 'imp-phy-11',
  'phy-sub-3-7': 'imp-phy-11',
  'phy-sub-3-8': 'imp-phy-11',
  'phy-sub-3-9': 'imp-phy-15',
  'phy-sub-4-2': 'imp-phy-2',
  'phy-sub-4-7': 'imp-phy-2',
  'phy-sub-4-8': 'imp-phy-20',
  'phy-sub-4-9': 'imp-phy-5',
  'phy-sub-4-10': 'imp-phy-22',
  'phy-sub-5-1': 'imp-phy-16',
  'phy-sub-5-2': 'imp-phy-16',
  'phy-sub-5-3': 'imp-phy-16',
  'phy-sub-6-2': 'imp-phy-3',
  'phy-sub-6-3': 'imp-phy-3',
  'phy-sub-6-5': 'imp-phy-3',
  'phy-sub-7-4': 'imp-phy-17',
  'phy-sub-7-5': 'imp-phy-4',
  'phy-sub-7-6': 'imp-phy-17',
  'phy-sub-7-8': 'imp-phy-13',
  'phy-sub-8-1': 'imp-phy-12',
  'phy-sub-8-2': 'imp-phy-21',
  'phy-sub-8-3': 'imp-phy-14',
  'phy-sub-8-4': 'imp-phy-12'
};

export default function Physics4PartSectionView({ 
  section, 
  subtopicId, 
  chapterId, 
  diagramId 
}) {
  const importantInfo = getImportantSubtopicInfo(subtopicId);
  const matchedQId = SUBTOPIC_TO_IMPORTANT_Q[subtopicId];
  const matchedQ = matchedQId 
    ? IMPORTANT_PHYSICS_QUESTIONS.find(q => q.id === matchedQId)
    : null;

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
    </div>
  );
}
