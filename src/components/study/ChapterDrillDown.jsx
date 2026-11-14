import { useState } from 'react';
import { ArrowLeft, CheckCircle2, Circle, ChevronDown, Check, PenLine, Sparkles, BookOpen, AlertCircle, HelpCircle, BookMarked, ChevronUp, Target, Calculator, Zap, Brain, AlertTriangle, Compass, ArrowRight } from 'lucide-react';
import { NCERT_SYLLABUS } from '../../data/ncertSyllabus';
import { STRUCTURED_NOTES_DATA } from '../../data/structuredNotesData';
import FormulaCard, { formatMathString } from './FormulaCard';
import { FormattedLatex } from './LatexView';
import SubtopicPracticePanel from './SubtopicPracticePanel';
import ReactionDiagramCard from './ReactionDiagramCard';
import PhysicsDiagramCard from './PhysicsDiagramCard';
import StructuredSectionView from './StructuredSectionView';
import PriorityBadge from './PriorityBadge';
import Physics4PartSectionView from './Physics4PartSectionView';
import { getDerivationsByChapter, getDerivationsBySubtopic } from '../../data/physicsDerivationsReference';
import { getPhysicsSectionEnrichment } from '../../data/physicsSectionEnrichments';

const PHYSICS_SUBTOPIC_DIAGRAMS = {
  // Chapter 1: Electric Charges and Fields
  'phy-sub-1-3': 'point-charge-field',
  'phy-sub-1-4': 'point-charge-field',
  'phy-sub-1-5': 'dipole-fields',
  'phy-sub-1-6': 'dipole-fields',
  'phy-sub-1-7': 'dipole-fields',
  'phy-sub-1-8': 'electric-flux-dipole',
  'phy-sub-1-9': 'gauss-applications',
  'phy-sub-1-10': 'gauss-applications',
  'phy-sub-1-11': 'gauss-applications',

  // Chapter 2: Electrostatic Potential and Capacitance
  'phy-sub-2-2': 'point-charge-field',
  'phy-sub-2-3': 'equipotential-surfaces',
  'phy-sub-2-4': 'dipole-fields',
  'phy-sub-2-7': 'capacitor-circuits',
  'phy-sub-2-8': 'energy-storage',

  // Chapter 3: Current Electricity
  'phy-sub-3-6': 'wheatstone-bridge',
  'phy-sub-3-7': 'cell-circuit',
  'phy-sub-3-8': 'cell-circuit',
  'phy-sub-3-9': 'wheatstone-bridge',

  // Chapter 4: Moving Charges and Magnetism
  'phy-sub-4-3': 'force-conductor',
  'phy-sub-4-7': 'force-conductor',
  'phy-sub-4-8': 'parallel-wires',
  'phy-sub-4-9': 'galvanometer-torque',
  'phy-sub-4-10': 'galvanometer-conversion',

  // Chapter 5: Magnetism and Matter
  'phy-sub-5-1': 'magnetic-materials',
  'phy-sub-5-2': 'magnetic-materials',
  'phy-sub-5-3': 'magnetic-materials',

  // Chapter 6: Electromagnetic Induction
  'phy-sub-6-1': 'faraday-lenz',
  'phy-sub-6-2': 'faraday-lenz',
  'phy-sub-6-3': 'faraday-lenz',
  'phy-sub-6-9': 'energy-storage',

  // Chapter 7: Alternating Current
  'phy-sub-7-2': 'ac-rms-waveform',
  'phy-sub-7-3': 'ac-rms-waveform',
  'phy-sub-7-4': 'lcr-circuit',
  'phy-sub-7-5': 'transformer',
  'phy-sub-7-6': 'lcr-circuit',
  'phy-sub-7-7': 'transformer',
  'phy-sub-7-8': 'ac-rms-waveform',

  // Chapter 8: Electromagnetic Waves
  'phy-sub-8-1': 'em-wave-structure',
  'phy-sub-8-2': 'em-wave-structure',
  'phy-sub-8-3': 'displacement-current',
  'phy-sub-8-4': 'em-wave-structure',

  // Chapter 9: Ray Optics and Optical Instruments
  'phy-sub-9-1': 'ray-optics-instruments',
  'phy-sub-9-2': 'prism-dispersion',
  'phy-sub-9-3': 'ray-optics-instruments',
  'phy-sub-9-4': 'prism-dispersion',
  'phy-sub-9-5': 'ray-optics-instruments',

  // Chapter 10: Wave Optics
  'phy-sub-10-1': 'huygens-wavefronts',
  'phy-sub-10-2': 'huygens-wavefronts',
  'phy-sub-10-3': 'ydse-wave-optics',
  'phy-sub-10-4': 'ydse-wave-optics',
  'phy-sub-10-5': 'single-slit-diffraction',

  // Chapter 11: Dual Nature of Radiation and Matter
  'phy-sub-11-1': 'photoelectric-graphs',
  'phy-sub-11-2': 'photoelectric-graphs',
  'phy-sub-11-3': 'photoelectric-graphs',
  'phy-sub-11-4': 'photoelectric-graphs',

  // Chapter 12: Atoms
  'phy-sub-12-1': 'bohr-atom-spectra',
  'phy-sub-12-2': 'bohr-atom-spectra',
  'phy-sub-12-3': 'bohr-atom-spectra',
  'phy-sub-12-4': 'bohr-atom-spectra',

  // Chapter 13: Nuclei
  'phy-sub-13-1': 'nuclei-binding-force',
  'phy-sub-13-2': 'nuclei-binding-force',
  'phy-sub-13-3': 'nuclei-binding-force',
  'phy-sub-13-4': 'nuclei-binding-force',

  // Chapter 14: Semiconductor Electronics
  'phy-sub-14-1': 'pn-junction-rectifier',
  'phy-sub-14-2': 'pn-junction-rectifier',
  'phy-sub-14-3': 'pn-junction-rectifier',
  'phy-sub-14-4': 'pn-junction-rectifier'
};

const PHYSICS_SUBTOPIC_SUBMODES = {
  // Chapter 9: Ray Optics and Optical Instruments
  'phy-sub-9-1': 'mirror',
  'phy-sub-9-2': 'tir',
  'phy-sub-9-3': 'lens-maker',
  'phy-sub-9-4': 'prism-ray',
  'phy-sub-9-5': 'microscope',

  // Chapter 10: Wave Optics
  'phy-sub-10-1': 'wavefronts',
  'phy-sub-10-2': 'denser',
  'phy-sub-10-3': 'interference-intensity',
  'phy-sub-10-4': 'ydse-geometry',
  'phy-sub-10-5': 'diffraction-lobe',

  // Chapter 11: Dual Nature of Radiation and Matter
  'phy-sub-11-1': 'experimental-setup',
  'phy-sub-11-2': 'einstein-slope',
  'phy-sub-11-3': 'collector-potential',
  'phy-sub-11-4': 'de-broglie',

  // Chapter 12: Atoms
  'phy-sub-12-1': 'alpha-scattering',
  'phy-sub-12-2': 'bohr-orbits',
  'phy-sub-12-3': 'spectral-series',
  'phy-sub-12-4': 'bohr-orbits',

  // Chapter 13: Nuclei
  'phy-sub-13-1': 'nuclear-force',
  'phy-sub-13-2': 'be-curve',
  'phy-sub-13-3': 'nuclear-force',
  'phy-sub-13-4': 'fission-fusion',

  // Chapter 14: Semiconductor Electronics
  'phy-sub-14-1': 'energy-bands',
  'phy-sub-14-2': 'depletion-layer',
  'phy-sub-14-3': 'vi-characteristics',
  'phy-sub-14-4': 'rectifiers'
};

export default function ChapterDrillDown({
  selectedSubject,
  selectedVolume,
  selectedChapter,
  selectedSubchapter,
  chapterStudyMode = 'GENERAL',
  onSetChapterStudyMode,
  onBackToChapters,
  onSelectSubchapter,
  completedSections,
  completedSubchapters,
  onToggleSection,
  onMarkSubchapterCompleted,
  userNotes,
  onSaveUserNote,
  activeSubchapterStats,
  getPriority,
  onSetPriority,
  onResetPriority,
  onOpenWolframEngine
}) {
  const subject = NCERT_SYLLABUS[selectedSubject];
  const [activeNoteEdit, setActiveNoteEdit] = useState(null);
  const [localNoteText, setLocalNoteText] = useState('');
  const [expandedReferences, setExpandedReferences] = useState({});
  const [openPracticeSections, setOpenPracticeSections] = useState({});

  if (!subject) return null;

  // Cross-volume lookup: find chapter across all volumes of this subject
  let chapter = null;
  let resolvedVolume = null;

  for (const vol of subject.volumes) {
    const found = vol.chapters.find((c) => c.id === selectedChapter);
    if (found) {
      chapter = found;
      resolvedVolume = vol;
      break;
    }
  }

  // Fallback to first available chapter if not found
  if (!chapter) {
    resolvedVolume = subject.volumes.find((v) => v.id === selectedVolume) || subject.volumes[0];
    chapter = resolvedVolume?.chapters?.[0];
  }

  if (!chapter) {
    return (
      <div className="p-8 text-center bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-2xl space-y-3">
        <p className="font-serif text-lg font-bold text-[var(--text-primary)]">Chapter not found</p>
        <button onClick={onBackToChapters} className="px-4 py-2 rounded-xl bg-[var(--accent-primary)] text-white text-xs cursor-pointer">
          Return to Chapter List
        </button>
      </div>
    );
  }

  // If chapter has no available content yet
  if (!chapter.available || !chapter.subchapters || chapter.subchapters.length === 0) {
    return (
      <div className="bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-2xl p-10 text-center space-y-4">
        <button
          onClick={onBackToChapters}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--accent-primary)] hover:underline mb-2"
        >
          <ArrowLeft size={14} /> Back to Chapters
        </button>
        <div className="w-14 h-14 mx-auto rounded-full bg-[var(--bg-elevated)] border border-[var(--border-default)] flex items-center justify-center text-[var(--text-muted)]">
          <AlertCircle size={28} />
        </div>
        <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)]">
          Content Not Available For Now
        </h3>
        <p className="font-sans text-sm text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed">
          The comprehensive high-yield notes for <strong>{chapter.title}</strong> will be added in upcoming study modules. Currently, complete exam portions are active for Physics and Chemistry Volume 1.
        </p>
      </div>
    );
  }

  const currentSubchapter = chapter.subchapters.find((s) => s.id === selectedSubchapter) || chapter.subchapters[0];
  const isSubCompleted = completedSubchapters.includes(currentSubchapter?.id);

  const handleStartEditNote = (sectionId, existingText) => {
    setActiveNoteEdit(sectionId);
    setLocalNoteText(existingText || '');
  };

  const handleSaveNote = (sectionId) => {
    onSaveUserNote(sectionId, localNoteText);
    setActiveNoteEdit(null);
  };

  const toggleReference = (sectionId) => {
    setExpandedReferences((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const togglePracticeSection = (sectionId) => {
    setOpenPracticeSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Derivation counters and chapter-level derivations bank
  const getSubtopicDerivationCount = (sub) => {
    if (!sub) return 0;
    if (selectedSubject === 'physics') {
      return Math.max(
        getDerivationsBySubtopic(sub.id).length,
        getPhysicsSectionEnrichment(sub.id)?.derivations?.length || 0,
        sub.sections?.filter((s) => Boolean(s.derivations)).length || 0
      );
    }
    return sub.sections?.filter((s) => Boolean(s.derivations)).length || 0;
  };

  const chapterDerivations = selectedSubject === 'physics' ? getDerivationsByChapter(chapter.id) : [];
  const chapterSectionDerivations = chapter.subchapters.flatMap((sub) =>
    (sub.sections || [])
      .filter((sec) => Boolean(sec.derivations))
      .map((sec) => ({
        id: sec.id,
        subtopicId: sub.id,
        subtopicTitle: sub.title,
        title: sec.title,
        derivationText: sec.derivations
      }))
  );
  const totalChapterDerivationsCount =
    selectedSubject === 'physics' ? chapterDerivations.length : chapterSectionDerivations.length;
  const currentSubDrvCount = getSubtopicDerivationCount(currentSubchapter);

  const renderChapterDerivationsSection = () => {
    if (totalChapterDerivationsCount === 0) {
      return (
        <div className="p-8 text-center rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] space-y-2">
          <Compass size={28} className="mx-auto text-[var(--text-muted)]" />
          <h4 className="font-serif text-lg font-bold text-[var(--text-primary)]">
            No Mathematical Derivations Listed in {chapter.title}
          </h4>
          <p className="text-xs text-[var(--text-secondary)]">
            This chapter focuses on qualitative concepts, laws, or descriptive theory.
          </p>
        </div>
      );
    }

    const items = selectedSubject === 'physics' ? chapterDerivations : chapterSectionDerivations;

    return (
      <section
        id="chapter-derivations-section"
        className="space-y-5 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-[var(--bg-surface)] border-2 border-emerald-500/35 shadow-sm"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-4">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/35">
              📐 CHAPTER DERIVATIONS BANK
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
              All Derivations of Ch {chapter.number}: {chapter.title}
            </h3>
            <p className="text-xs text-[var(--text-secondary)] font-sans">
              Dedicated chapter reference containing every step-by-step mathematical proof, diagram, and final formula in this chapter.
            </p>
          </div>
          <span className="self-start sm:self-auto shrink-0 px-3 py-1.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/35 text-xs font-mono font-bold">
            {totalChapterDerivationsCount} Complete Derivation{totalChapterDerivationsCount === 1 ? '' : 's'}
          </span>
        </div>

        {/* Quick-Jump Index Pills */}
        <div className="flex flex-wrap gap-2">
          {items.map((drv, idx) => (
            <a
              key={drv.id}
              href={`#chapter-drv-${drv.id}`}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-emerald-500/50 text-[11px] font-sans font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">#{idx + 1}</span>
              <span className="truncate max-w-[240px]">{drv.title}</span>
            </a>
          ))}
        </div>

        {/* Derivation Cards */}
        <div className="space-y-5">
          {selectedSubject === 'physics'
            ? chapterDerivations.map((drv, idx) => {
                const subtopicObj = chapter.subchapters.find((s) => s.id === drv.subtopicId);
                const resolvedDiagId = drv.diagramId || PHYSICS_SUBTOPIC_DIAGRAMS[drv.subtopicId];
                const resolvedSubMode = drv.diagramSubMode || drv.subMode || PHYSICS_SUBTOPIC_SUBMODES[drv.subtopicId];
                return (
                  <div
                    key={drv.id}
                    id={`chapter-drv-${drv.id}`}
                    className="p-4 sm:p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)] space-y-4 shadow-xs scroll-mt-24"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-[var(--border-subtle)] pb-3">
                      <div className="space-y-1.5 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/40 text-[10px] font-mono font-bold uppercase tracking-wider">
                            📐 DERIVATION {idx + 1}
                          </span>
                          {subtopicObj && (
                            <span className="px-2 py-0.5 rounded-full bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] text-[10px] font-mono font-semibold">
                              {subtopicObj.title}
                            </span>
                          )}
                          {drv.importance && (
                            <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/25 text-[10px] font-mono font-bold">
                              {drv.importance}
                            </span>
                          )}
                        </div>
                        <h4 className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)] leading-snug">
                          {drv.title}
                        </h4>
                      </div>
                      {drv.subtopicId && (
                        <button
                          onClick={() => {
                            onSelectSubchapter(drv.subtopicId);
                            onSetChapterStudyMode?.('GENERAL');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="self-start shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-default)] hover:border-[var(--accent-primary)] text-[11px] font-mono font-bold text-[var(--accent-primary)] transition-colors cursor-pointer"
                        >
                          <span>Open Subtopic Notes</span>
                          <ArrowRight size={12} />
                        </button>
                      )}
                    </div>

                    {drv.setup && (
                      <div
                        className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-secondary)] italic leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: formatMathString(drv.setup) }}
                      />
                    )}

                    {resolvedDiagId && (
                      <div className="py-1">
                        <PhysicsDiagramCard diagramId={resolvedDiagId} subMode={resolvedSubMode} inline={true} />
                      </div>
                    )}

                    {drv.steps && drv.steps.length > 0 && (
                      <div className="space-y-2.5">
                        {drv.steps.map((st, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-3 sm:p-3.5 rounded-xl bg-[var(--bg-base)]/60 border border-[var(--border-subtle)] space-y-2"
                          >
                            <div className="flex items-start gap-2">
                              <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 shrink-0">
                                Step {sIdx + 1}:
                              </span>
                              <div
                                className="font-sans text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed flex-1"
                                dangerouslySetInnerHTML={{ __html: formatMathString(st.text || '') }}
                              />
                            </div>
                            {st.equation && (
                              <div className="py-1 px-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] overflow-x-auto text-center scrollbar-none">
                                <FormattedLatex content={`$$${st.equation}$$`} />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {drv.specialCases && drv.specialCases.length > 0 && (
                      <div className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-1.5">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--accent-primary)] block">
                          Special Cases &amp; Physical Deductions:
                        </span>
                        <ul className="space-y-1">
                          {drv.specialCases.map((sc, scIdx) => (
                            <li
                              key={scIdx}
                              className="text-xs text-[var(--text-secondary)] flex items-start gap-2"
                            >
                              <span className="text-emerald-500 font-bold shrink-0">•</span>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: formatMathString(typeof sc === 'string' ? sc : `${sc.title || ''} ${sc.text || ''}`)
                                }}
                              />
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {drv.finalFormula && (
                      <div className="p-3.5 rounded-xl bg-emerald-500/10 border-2 border-emerald-500/40 text-center space-y-1">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-300 font-bold block">
                          FINAL DERIVED FORMULA:
                        </span>
                        <div className="overflow-x-auto scrollbar-none py-1">
                          <FormattedLatex content={`$$${drv.finalFormula}$$`} />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            : chapterSectionDerivations.map((secDrv, idx) => (
                <div
                  key={secDrv.id}
                  id={`chapter-drv-${secDrv.id}`}
                  className="p-4 sm:p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)] space-y-3 shadow-xs scroll-mt-24"
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap border-b border-[var(--border-subtle)] pb-2.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/40 text-[10px] font-mono font-bold uppercase">
                        📐 DERIVATION {idx + 1}
                      </span>
                      <h4 className="font-serif text-base font-bold text-[var(--text-primary)]">{secDrv.title}</h4>
                    </div>
                    <button
                      onClick={() => {
                        onSelectSubchapter(secDrv.subtopicId);
                        onSetChapterStudyMode?.('GENERAL');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-default)] text-[11px] font-mono font-bold text-[var(--accent-primary)] cursor-pointer"
                    >
                      <span>Open Subtopic</span>
                      <ArrowRight size={11} />
                    </button>
                  </div>
                  <div className="font-sans text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-wrap pl-3 border-l-2 border-emerald-500/50 break-words">
                    <FormattedLatex content={secDrv.derivationText} />
                  </div>
                </div>
              ))}
        </div>
      </section>
    );
  };

  return (
    <div className="space-y-6 sm:space-y-8 pb-36 md:pb-24 animate-in fade-in duration-300">
      {/* Top Header: Breadcrumbs & Subchapter Dropdown */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3.5 sm:gap-4 border-b border-[var(--border-default)] pb-4 sm:pb-6">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            onClick={onBackToChapters}
            className="p-2 sm:p-2.5 rounded-xl border border-[var(--border-default)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors shrink-0 shadow-xs cursor-pointer"
            title="Back to Chapter list"
          >
            <ArrowLeft size={16} />
          </button>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-mono">
                <span className="truncate">{subject.name}</span>
                <span>/</span>
                <span className="shrink-0">Ch {chapter.number}</span>
              </div>
              <PriorityBadge
                id={chapter.id}
                rating={getPriority ? getPriority(chapter.id) : undefined}
                onChangePriority={onSetPriority}
                onResetPriority={onResetPriority}
                title={chapter.title}
                size="sm"
              />
            </div>
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-0.5 truncate">
              {chapter.title}
            </h2>
          </div>
        </div>

        {/* Subchapter Selector Dropdown */}
        <div className="relative w-full md:w-auto">
          <select
            value={currentSubchapter.id}
            onChange={(e) => onSelectSubchapter(e.target.value)}
            className="w-full md:w-96 appearance-none bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-default)] px-3.5 py-2 sm:px-4 sm:py-2.5 pr-10 rounded-xl font-medium text-xs sm:text-sm cursor-pointer hover:border-[var(--accent-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)] transition-colors shadow-sm"
          >
            {chapter.subchapters.map((sub) => {
              const subCompleted = completedSubchapters.includes(sub.id);
              const pRating = getPriority ? getPriority(sub.id) : undefined;
              const pTag = pRating !== undefined ? `[P: ${pRating}/10] ` : '';
              const drvCount = getSubtopicDerivationCount(sub);
              const drvTag = drvCount > 0 ? `📐 [DERIVATION${drvCount > 1 ? ` ×${drvCount}` : ''}] ` : '';
              return (
                <option key={sub.id} value={sub.id} className="bg-[var(--bg-surface)] text-[var(--text-primary)]">
                  {subCompleted ? '✓ ' : ''}{drvTag}{pTag}{sub.title}
                </option>
              );
            })}
          </select>
          <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--text-muted)]" />
        </div>
      </div>

      {/* Subchapter Title Banner (Pinterest Style with soft accent bar) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 sm:p-5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] shadow-xs">
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <div className="w-8 h-8 rounded-xl bg-[var(--accent-primary)]/15 flex items-center justify-center text-[var(--accent-primary)] shrink-0">
            <BookOpen size={16} />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] block">
                Active NCERT Subtopic
              </span>
              {currentSubDrvCount > 0 && (
                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/35">
                  📐 DERIVATION{currentSubDrvCount > 1 ? ` (${currentSubDrvCount})` : ''}
                </span>
              )}
              <PriorityBadge
                id={currentSubchapter.id}
                rating={getPriority ? getPriority(currentSubchapter.id) : undefined}
                onChangePriority={onSetPriority}
                onResetPriority={onResetPriority}
                title={currentSubchapter.title}
                size="sm"
              />
            </div>
            <h3 className="font-serif text-base sm:text-lg md:text-xl font-bold text-[var(--text-primary)] truncate">
              {currentSubchapter.title}
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
          {onOpenWolframEngine && (
            <button
              onClick={onOpenWolframEngine}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border border-indigo-500/25 text-xs font-semibold cursor-pointer transition-all shadow-xs"
              title="Open Wolfram Engine & Science Calculator"
            >
              <Calculator size={13} />
              <span>Wolfram Solver</span>
            </button>
          )}
          <span className="text-xs font-mono font-medium px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)] shadow-xs shrink-0">
            {activeSubchapterStats.completed} / {activeSubchapterStats.total} Complete
          </span>
        </div>
      </div>

      {/* Mode Switcher Banner: General Study vs Chapter Derivations vs Quick Cheat Sheet */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-xs">
        <div className="flex items-center gap-2.5">
          <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
            chapterStudyMode === 'DERIVATIONS'
              ? 'bg-emerald-600 text-white shadow-xs'
              : chapterStudyMode === 'CHEAT_SHEET'
              ? 'bg-[var(--accent-primary)] text-white shadow-xs'
              : 'bg-[var(--bg-elevated)] text-[var(--accent-primary)] border border-[var(--border-subtle)]'
          }`}>
            {chapterStudyMode === 'DERIVATIONS' ? <Compass size={16} /> : chapterStudyMode === 'CHEAT_SHEET' ? <Zap size={16} /> : <BookOpen size={16} />}
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] block">
              Study Focus Mode
            </span>
            <h4 className="font-serif text-sm sm:text-base font-bold text-[var(--text-primary)]">
              {chapterStudyMode === 'DERIVATIONS'
                ? `All Chapter ${chapter.number} Derivations (${totalChapterDerivationsCount})`
                : chapterStudyMode === 'CHEAT_SHEET'
                ? 'Whole-Chapter Quick Cheat Sheet & Memory Boosters'
                : 'General Study & Complete NCERT Notes'}
            </h4>
          </div>
        </div>

        {/* Toggle Pills */}
        <div className="flex items-center gap-1 bg-[var(--bg-elevated)] p-1 rounded-xl border border-[var(--border-subtle)] shrink-0 w-full sm:w-auto overflow-x-auto scrollbar-none">
          <button
            onClick={() => onSetChapterStudyMode?.('GENERAL')}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 sm:py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer touch-manipulation min-h-[38px] whitespace-nowrap ${
              chapterStudyMode === 'GENERAL'
                ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <BookOpen size={13} />
            <span>General Study</span>
          </button>
          {(selectedSubject === 'physics' || totalChapterDerivationsCount > 0) && (
            <button
              onClick={() => onSetChapterStudyMode?.('DERIVATIONS')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 sm:py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer touch-manipulation min-h-[38px] whitespace-nowrap ${
                chapterStudyMode === 'DERIVATIONS'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Compass size={13} />
              <span>Derivations ({totalChapterDerivationsCount})</span>
            </button>
          )}
          <button
            onClick={() => onSetChapterStudyMode?.('CHEAT_SHEET')}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 sm:py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer touch-manipulation min-h-[38px] whitespace-nowrap ${
              chapterStudyMode === 'CHEAT_SHEET'
                ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Zap size={13} />
            <span>Quick Cheat Sheet</span>
          </button>
        </div>
      </div>

      {chapterStudyMode === 'DERIVATIONS' && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/35 text-xs text-emerald-700 dark:text-emerald-300 font-medium shadow-2xs">
            <Compass size={16} className="shrink-0 text-emerald-600 dark:text-emerald-400" />
            <span>
              <strong>Chapter Derivations Mode:</strong> Showing all <strong>{totalChapterDerivationsCount}</strong> step-by-step mathematical derivations, schematic diagrams, and boxed final formulas for <strong>Ch {chapter.number}: {chapter.title}</strong> in one dedicated section.
            </span>
          </div>
          {renderChapterDerivationsSection()}
        </div>
      )}

      {chapterStudyMode === 'CHEAT_SHEET' && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-xs text-purple-600 dark:text-purple-400 font-medium shadow-2xs">
            <Zap size={16} className="shrink-0" />
            <span>
              <strong>Whole-Chapter Last-Minute Cheat Sheet:</strong> Aggregating all exact Board Definitions, Key Formulas &amp; Reactions, Oswaal Memory Boosters, and Common Board Pitfalls across all {chapter.subchapters.length} subtopics of <strong>{chapter.title}</strong>.
            </span>
          </div>

          <div className="space-y-5">
            {chapter.subchapters.map((sub) => {
              const sData = STRUCTURED_NOTES_DATA[sub.id];
              const subFormulas = sub.sections?.flatMap((sec) => sec.keyFormulas || []) || [];
              return (
                <div key={sub.id} className="p-4 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-xs space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] block">
                        Subtopic Rapid Summary
                      </span>
                      <h4 className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)]">
                        {sub.title}
                      </h4>
                    </div>
                    <button
                      onClick={() => {
                        onSelectSubchapter(sub.id);
                        onSetChapterStudyMode?.('GENERAL');
                      }}
                      className="self-start sm:self-auto px-3 py-1 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] text-xs font-mono text-[var(--accent-primary)] font-semibold cursor-pointer transition-colors"
                    >
                      Open Full Notes →
                    </button>
                  </div>

                  {sData?.definitions && sData.definitions.length > 0 && (
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
                        Exact Board Definitions:
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {sData.definitions.map((d, i) => (
                          <div key={i} className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
                            <span className="text-xs font-serif font-bold text-[var(--accent-primary)] block">{d.term}</span>
                            <div className="text-xs text-[var(--text-secondary)] leading-relaxed" dangerouslySetInnerHTML={{ __html: formatMathString(d.definition || d.meaning || '') }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {subFormulas.length > 0 && (
                    <FormulaCard formulaList={subFormulas} derivations={null} />
                  )}

                  {sData?.oswaalMnemonic && (
                    <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-start gap-2.5">
                      <Brain size={15} className="text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                      <div
                        className="text-xs text-[var(--text-primary)] leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: `<strong>Memory Booster:</strong> ${formatMathString(
                            typeof sData.oswaalMnemonic === 'object'
                              ? `${sData.oswaalMnemonic.title || ''}: ${sData.oswaalMnemonic.phrase || ''} — ${sData.oswaalMnemonic.explanation || ''}`
                              : sData.oswaalMnemonic
                          )}`
                        }}
                      />
                    </div>
                  )}

                  {sData?.commonlyMadeErrors && sData.commonlyMadeErrors.length > 0 && (
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-rose-500 flex items-center gap-1.5">
                        <AlertTriangle size={13} /> Common Board Traps &amp; Corrections:
                      </span>
                      <div className="grid grid-cols-1 gap-2">
                        {sData.commonlyMadeErrors.map((err, idx) => (
                          <div key={idx} className="p-3 rounded-xl bg-rose-500/5 border border-rose-500/20 text-xs grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div className="text-[var(--text-secondary)]" dangerouslySetInnerHTML={{ __html: `<strong class="text-rose-500">✗ Error:</strong> ${formatMathString(err.error || '')}` }} />
                            <div className="text-[var(--text-primary)] font-medium" dangerouslySetInnerHTML={{ __html: `<strong class="text-emerald-500">✓ Tip:</strong> ${formatMathString(err.tip || err.correction || '')}` }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Sections List */}
      {chapterStudyMode !== 'CHEAT_SHEET' && chapterStudyMode !== 'DERIVATIONS' && (
      <div className="space-y-6 sm:space-y-8">
        {currentSubchapter.sections?.map((section) => {
          const isDone = completedSections.includes(section.id);
          const hasCustomNote = userNotes[section.id];
          const isEditing = activeNoteEdit === section.id;
          const isRefExpanded = expandedReferences[section.id] !== false; // default expanded in general mode
          const sectionHasDerivation = currentSubDrvCount > 0 || Boolean(section.derivations);

          return (
            <div
              key={section.id}
              className={`p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border transition-all duration-300 relative space-y-4 sm:space-y-6 shadow-sm ${
                isDone
                  ? 'bg-[var(--bg-surface)] border-[var(--accent-primary)] shadow-md'
                  : 'bg-[var(--bg-surface)] border-[var(--border-default)] hover:border-[var(--border-default)]'
              }`}
            >
              {/* Section Header with Clickable Circle Completion Tracker */}
              <div className="flex items-start justify-between gap-3 sm:gap-4 border-b border-[var(--border-subtle)] pb-4 sm:pb-5">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1.5 sm:mb-2">
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[var(--bg-elevated)] text-[10px] sm:text-[11px] font-mono text-[var(--text-accent)] font-semibold uppercase tracking-wider">
                      <span className="truncate">{currentSubchapter.title}</span>
                    </div>
                    {sectionHasDerivation && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/35 text-[10px] font-mono font-bold uppercase tracking-wider">
                        📐 DERIVATION
                      </span>
                    )}
                  </div>
                  <h4 className="font-serif text-lg sm:text-2xl font-bold text-[var(--text-primary)] leading-snug">
                    {section.title}
                  </h4>
                </div>

                {/* Interactive Clickable Circle Tracker (Pinterest Style Checkbox) */}
                <button
                  onClick={() => onToggleSection(section.id)}
                  className={`p-2 sm:p-2.5 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center shrink-0 ${
                    isDone
                      ? 'bg-[var(--accent-primary)] text-white shadow-md scale-105 sm:scale-110 hover:bg-[var(--accent-primary-hover)]'
                      : 'border-2 border-[var(--border-default)] text-[var(--text-muted)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] hover:scale-105'
                  }`}
                  title={isDone ? "Mark subtopic incomplete" : "Mark subtopic completed"}
                >
                  {isDone ? (
                    <CheckCircle2 size={24} className="fill-current text-white stroke-[var(--accent-primary)]" />
                  ) : (
                    <Circle size={24} strokeWidth={2} />
                  )}
                </button>
              </div>

              {selectedSubject === 'physics' ? (
                <Physics4PartSectionView
                  section={section}
                  subtopicId={currentSubchapter.id}
                  chapterId={selectedChapter}
                  diagramId={PHYSICS_SUBTOPIC_DIAGRAMS[currentSubchapter.id]}
                  diagramSubMode={PHYSICS_SUBTOPIC_SUBMODES[currentSubchapter.id]}
                />
              ) : (
                <>
                  {/* General Study Mode: Structured Editorial Notes */}
                  {/* Definitions, Bulleted Key Points, Extra Points & Reactions with Diagrams */}
                  <StructuredSectionView
                    section={section}
                    subtopicId={currentSubchapter.id}
                    chapterId={selectedChapter}
                    subjectId={selectedSubject}
                  />

                  {/* 2. Key Formulas with Variable Breakdown Card */}
                  {section.keyFormulas && section.keyFormulas.length > 0 && (
                    <FormulaCard
                      formulaList={section.keyFormulas}
                      derivations={section.derivations}
                    />
                  )}

                  {/* Visual Chemical Reaction & Mechanism Diagrams */}
                  <ReactionDiagramCard
                    subtopicId={currentSubchapter.id}
                    chapterId={selectedChapter}
                  />

                  {/* Visual Physics Concept & Derivation Diagrams */}
                  {PHYSICS_SUBTOPIC_DIAGRAMS[currentSubchapter.id] && (
                    <div className="py-2">
                      <PhysicsDiagramCard
                        diagramId={PHYSICS_SUBTOPIC_DIAGRAMS[currentSubchapter.id]}
                        subMode={PHYSICS_SUBTOPIC_SUBMODES[currentSubchapter.id]}
                      />
                    </div>
                  )}

                  {/* 3. How questions could be framed / asked */}
                  {section.questionFraming && (
                    <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[var(--bg-elevated)] border-l-4 border-l-[var(--text-accent)] border border-[var(--border-subtle)] space-y-2.5 sm:space-y-3 shadow-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-[var(--text-accent)] uppercase tracking-wider flex items-center gap-1.5">
                          <HelpCircle size={14} />
                          Exam Question Blueprint
                        </span>
                        <span className="text-[11px] font-cursive text-[var(--text-muted)]">
                          frequently tested patterns
                        </span>
                      </div>
                      <div
                        className="font-sans text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-wrap pl-2 border-l-2 border-[var(--border-default)] break-words"
                        dangerouslySetInnerHTML={{ __html: formatMathString(section.questionFraming) }}
                      />
                    </div>
                  )}
                </>
              )}

              {/* 4. Detailed Textbook Reference (Editorial Collapsible Box) */}
              {section.textbookRef && (
                <div className="border border-[var(--border-subtle)] rounded-xl sm:rounded-2xl overflow-hidden bg-[var(--bg-base)] shadow-xs">
                  <button
                    onClick={() => toggleReference(section.id)}
                    className="w-full px-4 py-2.5 sm:px-5 sm:py-3 bg-[var(--bg-elevated)] flex items-center justify-between text-xs font-mono font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <BookMarked size={14} className="text-[var(--accent-primary)] shrink-0" />
                      Detailed NCERT Textbook Reference
                    </span>
                    {isRefExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>

                  {isRefExpanded && (
                    <div
                      className="p-4 sm:p-5 font-sans text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-wrap border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] break-words"
                      dangerouslySetInnerHTML={{ __html: formatMathString(section.textbookRef) }}
                    />
                  )}
                </div>
              )}

              {/* 5. Subtopic-Level 20 MCQs and Board PYQs Practice Drawer */}
              <div className="pt-1">
                <button
                  onClick={() => togglePracticeSection(section.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer shadow-2xs ${
                    openPracticeSections[section.id]
                      ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                      : 'bg-[var(--bg-elevated)] border border-[var(--accent-primary)]/40 text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-white'
                  }`}
                >
                  <Sparkles size={13} />
                  <span>
                    {openPracticeSections[section.id]
                      ? 'Hide Subtopic Practice'
                      : 'Practice 20 MCQs & Board PYQs for this Subtopic'}
                  </span>
                </button>

                {openPracticeSections[section.id] && (
                  <div className="mt-3.5">
                    <SubtopicPracticePanel
                      subjectId={selectedSubject}
                      chapterId={selectedChapter}
                      subtopicId={currentSubchapter.id}
                      subtopicTitle={section.title}
                    />
                  </div>
                )}
              </div>

              {/* 6. Custom User Notepad for this subtopic */}
              <div className="pt-3 sm:pt-4 border-t border-[var(--border-subtle)]">
                {isEditing ? (
                  <div className="space-y-3">
                    <textarea
                      value={localNoteText}
                      onChange={(e) => setLocalNoteText(e.target.value)}
                      placeholder="Type your personal insights, worked problem steps, or revision mnemonics..."
                      className="w-full p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[var(--bg-base)] text-[var(--text-primary)] border border-[var(--border-default)] text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)] min-h-[90px] leading-relaxed"
                    />
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => setActiveNoteEdit(null)}
                        className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-medium text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)] transition-colors cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleSaveNote(section.id)}
                        className="px-4 py-1.5 sm:px-5 sm:py-2 rounded-xl text-xs font-medium bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-primary-hover)] transition-colors shadow-xs cursor-pointer"
                      >
                        Save Note
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 text-xs">
                    {hasCustomNote ? (
                      <div className="flex-1 min-w-0 pr-0 sm:pr-4">
                        <span className="font-semibold text-[var(--text-primary)] block mb-0.5">Your Personal Study Note:</span>
                        <p className="italic text-[var(--text-secondary)] line-clamp-2 break-words">
                          "{hasCustomNote}"
                        </p>
                      </div>
                    ) : (
                      <span className="text-[var(--text-muted)] italic">No personal notes added yet for this topic.</span>
                    )}

                    <button
                      onClick={() => handleStartEditNote(section.id, hasCustomNote)}
                      className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl border border-[var(--border-default)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors shrink-0 shadow-xs cursor-pointer"
                    >
                      <PenLine size={13} />
                      <span>{hasCustomNote ? 'Edit Note' : 'Add Note'}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      )}

      {/* Dedicated Chapter-Level Derivations Section directly on the Chapter Page in General Study Mode */}
      {chapterStudyMode === 'GENERAL' && totalChapterDerivationsCount > 0 && (
        <div className="pt-2">
          {renderChapterDerivationsSection()}
        </div>
      )}

      {/* Subchapter Completed Button */}
      <div className="pt-4 sm:pt-6 pb-8 sm:pb-12 flex flex-col items-center justify-center space-y-3">
        <button
          disabled={!activeSubchapterStats.isAllCompleted || isSubCompleted}
          onClick={() => onMarkSubchapterCompleted(currentSubchapter.id)}
          className={`w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl font-serif text-sm sm:text-base font-bold transition-all duration-300 shadow-sm ${
            isSubCompleted
              ? 'bg-[var(--accent-primary)]/20 text-[var(--accent-primary)] border border-[var(--accent-primary)] cursor-default'
              : activeSubchapterStats.isAllCompleted
              ? 'bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-primary-hover)] hover:shadow-lg hover:-translate-y-0.5 cursor-pointer animate-bounce'
              : 'bg-[var(--bg-elevated)] text-[var(--text-muted)] border border-[var(--border-default)] opacity-60 cursor-not-allowed'
          }`}
        >
          {isSubCompleted ? (
            <>
              <Check size={18} />
              Subtopic Completed!
            </>
          ) : (
            <>
              <CheckCircle2 size={18} />
              Mark Subtopic Completed
            </>
          )}
        </button>

        {!activeSubchapterStats.isAllCompleted && !isSubCompleted && (
          <p className="text-xs text-[var(--text-muted)] font-sans text-center px-4">
            Mark the completion circle for this subtopic above to unlock.
          </p>
        )}
      </div>

      {/* Fixed Viewport Bottom Progress Bar (Elevated above mobile nav on small screens) */}
      <div className="fixed bottom-14 md:bottom-0 left-0 right-0 z-40 bg-[var(--bg-surface)]/95 backdrop-blur-md border-t border-[var(--border-default)] py-2 sm:py-2.5 px-3.5 sm:px-6 shadow-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2.5 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3 text-xs font-medium text-[var(--text-secondary)] min-w-0 flex-1">
            <span className="font-bold text-[var(--text-primary)] truncate max-w-[130px] xs:max-w-[180px] sm:max-w-xs md:max-w-md">
              {currentSubchapter.title}
            </span>
            <span>•</span>
            <span className="font-mono text-[var(--accent-primary)] shrink-0">
              {activeSubchapterStats.percentage}% Complete
            </span>
          </div>

          <div className="w-20 xs:w-28 sm:w-48 md:w-80 h-2 sm:h-2.5 rounded-full bg-[var(--border-default)] overflow-hidden shrink-0">
            <div
              className="h-full rounded-full transition-all duration-300 bg-[var(--accent-primary)]"
              style={{ width: `${activeSubchapterStats.percentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
