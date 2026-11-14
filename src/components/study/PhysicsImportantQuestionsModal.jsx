import React, { useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  X,
  Search,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Compass,
  FileText,
  ExternalLink,
  Layers,
} from 'lucide-react';
import { IMPORTANT_PHYSICS_QUESTIONS } from '../../data/importantQuestionsData';
import PhysicsDiagramCard from './PhysicsDiagramCard';
import { FormattedLatex, MathBlock } from './LatexView';
import CustomSelect from '../shared/CustomSelect';

// Exact per-question diagramId + subMode mapping matching PhysicsDiagramCard
const QUESTION_DIAGRAM_CONFIG = {
  // Chapter 9: Ray Optics & Optical Instruments
  'imp-phy-9-ex2': { diagramId: 'ray-optics-instruments', subMode: 'mirror', title: 'Concave Mirror Image Formation & Magnification' },
  'imp-phy-9-ex4': { diagramId: 'ray-optics-instruments', subMode: 'mirror', title: 'Spherical Mirror Geometry (f = R/2)' },
  'imp-phy-9-ex5': { diagramId: 'ray-optics-instruments', subMode: 'spherical-surface', title: 'Refraction at a Convex Spherical Surface (n₂/v − n₁/u = (n₂ − n₁)/R)' },
  'imp-phy-9-ex7': { diagramId: 'ray-optics-instruments', subMode: 'lens-maker', title: "Double Convex Thin Lens & Lens Maker's Formula" },
  'imp-phy-9-ex8': { diagramId: 'ray-optics-instruments', subMode: 'lens-maker', title: 'Coaxial Thin Lens Combination' },
  'imp-phy-9-q1': { diagramId: 'ray-optics-instruments', subMode: 'mirror', title: 'Concave Mirror Ray Diagram & Mirror Equation' },
  'imp-phy-9-q5': { diagramId: 'prism-dispersion', subMode: 'tir', title: 'Total Internal Reflection (TIR) & Critical Cone i_c' },
  'imp-phy-9-q11': { diagramId: 'ray-optics-instruments', subMode: 'microscope', title: 'Compound Microscope Two-Lens Ray Diagram' },
  'imp-phy-9-q13': { diagramId: 'ray-optics-instruments', subMode: 'astronomical-telescope', title: 'Astronomical Refracting Telescope (Normal Adjustment)' },
  'imp-phy-9-q21': { diagramId: 'prism-dispersion', subMode: 'tir', title: 'Prism Critical Angle & Total Internal Reflection' },
  'imp-phy-9-q26': { diagramId: 'ray-optics-instruments', subMode: 'microscope', title: 'Compound Microscope Design (M = 30×)' },
  'imp-phy-9-q29': { diagramId: 'ray-optics-instruments', subMode: 'microscope', title: 'Magnifier Angular vs Area Magnification' },
  'imp-phy-9-th1': { diagramId: 'ray-optics-instruments', subMode: 'mirror', title: 'Concave Spherical Mirror: Relation R = 2f Paraxial Geometry' },
  'imp-phy-9-th2': { diagramId: 'ray-optics-instruments', subMode: 'mirror', title: 'Concave Mirror Ray Diagram & Mirror Equation (1/v + 1/u = 1/f)' },
  'imp-phy-9-th3': { diagramId: 'ray-optics-instruments', subMode: 'spherical-surface', title: 'Refraction at a Convex Spherical Surface (n₂/v − n₁/u = (n₂ − n₁)/R)' },
  'imp-phy-9-th4': { diagramId: 'ray-optics-instruments', subMode: 'lens-maker', title: "Double Convex Thin Lens & Lens Maker's Formula" },
  'imp-phy-9-th5': { diagramId: 'prism-dispersion', subMode: 'tir', title: 'Total Internal Reflection (TIR), Critical Angle i_c & Optical Fibre' },
  'imp-phy-9-th6': { diagramId: 'prism-dispersion', subMode: 'prism-ray', title: 'Triangular Prism Refraction & i–δ Minimum Deviation Curve' },
  'imp-phy-9-th7': { diagramId: 'ray-optics-instruments', subMode: 'microscope', title: 'Compound Microscope Two-Lens Ray Diagram (Objective & Eyepiece)' },
  'imp-phy-9-th8': { diagramId: 'ray-optics-instruments', subMode: 'astronomical-telescope', title: 'Astronomical Refracting Telescope (L = f_o + f_e, M = f_o / f_e)' },
  'imp-phy-9-th9': { diagramId: 'ray-optics-instruments', subMode: 'cassegrain', title: 'Cassegrain Reflecting Telescope (Parabolic Primary & Convex Secondary Mirror)' },

  // Chapter 10: Wave Optics
  'imp-phy-10-q1': { diagramId: 'huygens-wavefronts', subMode: 'denser', title: "Huygens' Refraction at Denser Medium (Snell's Law)" },
  'imp-phy-10-q4': { diagramId: 'ydse-wave-optics', subMode: 'ydse-geometry', title: "Young's Double-Slit Geometry & Fringe Width (β = λD/d)" },
  'imp-phy-10-q5': { diagramId: 'ydse-wave-optics', subMode: 'interference-intensity', title: 'Coherent Interference Intensity Curve I(φ) = 4I₀ cos²(φ/2)' },
  'imp-phy-10-th1': { diagramId: 'huygens-wavefronts', subMode: 'wavefronts', title: 'Types of Wavefronts: Spherical, Cylindrical & Plane' },
  'imp-phy-10-th2': { diagramId: 'huygens-wavefronts', subMode: 'wavefronts', title: "Huygens' Principle & Secondary Wavefront Construction" },
  'imp-phy-10-th3': { diagramId: 'huygens-wavefronts', subMode: 'reflection', title: 'Reflection at a Plane Surface on Wave Theory (∠i = ∠r)' },
  'imp-phy-10-th4': { diagramId: 'huygens-wavefronts', subMode: 'denser', title: "Refraction at a Denser Medium (v₂ < v₁) on Huygens' Theory" },
  'imp-phy-10-th5': { diagramId: 'huygens-wavefronts', subMode: 'rarer', title: 'Refraction at a Rarer Medium (v₂ > v₁) & Critical Angle Condition' },
  'imp-phy-10-th6': { diagramId: 'ydse-wave-optics', subMode: 'interference-intensity', title: 'Coherent Interference Intensity I(φ) = 4I₀ cos²(φ/2)' },
  'imp-phy-10-th7': { diagramId: 'ydse-wave-optics', subMode: 'ydse-geometry', title: "Young's Double-Slit Path Difference & Fringe Width (β = λD/d)" },
  'imp-phy-10-th8': { diagramId: 'single-slit-diffraction', subMode: 'diffraction-lobe', title: 'Single-Slit Fraunhofer Diffraction Pattern vs YDSE' },

  // Chapter 11: Dual Nature of Radiation & Matter
  'imp-phy-11-ex2': { diagramId: 'photoelectric-graphs', subMode: 'einstein-slope', title: 'Einstein Photoelectric Slope (V₀ vs ν) & Threshold ν₀' },
  'imp-phy-11-q2': { diagramId: 'photoelectric-graphs', subMode: 'einstein-slope', title: "Einstein's Equation V₀ = (h/e)ν − φ₀/e" },
  'imp-phy-11-q6': { diagramId: 'photoelectric-graphs', subMode: 'collector-potential', title: 'Photocurrent vs Collector Potential (−V₀)' },
  'imp-phy-11-th1': { diagramId: 'photoelectric-graphs', subMode: 'collector-potential', title: 'Laws of Photoelectric Emission: Intensity & Stopping Potential Curves' },
  'imp-phy-11-th2': { diagramId: 'photoelectric-graphs', subMode: 'einstein-slope', title: "Einstein's Photoelectric Equation & Universal Slope h/e" },
  'imp-phy-11-th3': { diagramId: 'photoelectric-graphs', subMode: 'einstein-slope', title: 'Quantum Picture of Radiation: Photon Energy & Momentum' },
  'imp-phy-11-th4': { diagramId: 'photoelectric-graphs', subMode: 'de-broglie', title: 'de Broglie Matter Wave (λ = h/p) & Bohr Standing Electron Wave' },
  'imp-phy-11-th5': { diagramId: 'photoelectric-graphs', subMode: 'experimental-setup', title: 'Electron Emission, Work Function φ₀ & Quartz Tube Apparatus' },
  'imp-phy-11-th6': { diagramId: 'photoelectric-graphs', subMode: 'experimental-setup', title: 'Lenard-Millikan Photoelectric Experimental Setup & Collector Curves' },

  // Chapter 12: Atoms
  'imp-phy-12-ex3': { diagramId: 'bohr-atom-spectra', subMode: 'bohr-orbits', title: 'Bohr Quantized Hydrogen Orbits (r_n, v_n)' },
  'imp-phy-12-q5': { diagramId: 'bohr-atom-spectra', subMode: 'spectral-series', title: 'Hydrogen Spectral Transitions (Lyman, Balmer & Paschen)' },
  'imp-phy-12-th1': { diagramId: 'bohr-atom-spectra', subMode: 'alpha-scattering', title: 'Rutherford Nuclear Atom & Geiger-Marsden α-Scattering' },
  'imp-phy-12-th2': { diagramId: 'bohr-atom-spectra', subMode: 'alpha-scattering', title: 'Alpha-Particle Closest Approach r₀ & Impact Parameter b' },
  'imp-phy-12-th3': { diagramId: 'bohr-atom-spectra', subMode: 'bohr-orbits', title: 'Bohr Atom Model: Quantized Orbits, Radius r_n, Velocity v_n & Energy E_n' },
  'imp-phy-12-th4': { diagramId: 'bohr-atom-spectra', subMode: 'spectral-series', title: 'Hydrogen Atom Energy Levels & Spectral Series (Lyman/Balmer/Paschen)' },

  // Chapter 13: Nuclei
  'imp-phy-13-ex1': { diagramId: 'nuclei-binding-force', subMode: 'be-curve', title: 'Nuclear Density Independence & Binding Energy Curve' },
  'imp-phy-13-q2': { diagramId: 'nuclei-binding-force', subMode: 'be-curve', title: 'Mass Defect & Binding Energy per Nucleon Curve (⁵⁶Fe Peak)' },
  'imp-phy-13-q5': { diagramId: 'nuclei-binding-force', subMode: 'fission-fusion', title: 'Nuclear Fission & Thermonuclear Fusion Q-Value' },
  'imp-phy-13-th1': { diagramId: 'nuclei-binding-force', subMode: 'be-curve', title: 'Binding Energy per Nucleon (BE/A vs A) Stability Curve' },
  'imp-phy-13-th2': { diagramId: 'nuclei-binding-force', subMode: 'nuclear-force', title: 'Strong Nuclear Force Potential Energy U(r) vs Distance r' },
  'imp-phy-13-th3': { diagramId: 'nuclei-binding-force', subMode: 'fission-fusion', title: 'Nuclear Fission (²³⁵U) & Solar Proton-Proton Fusion' },

  // Chapter 14: Semiconductor Electronics
  'imp-phy-14-ex1': { diagramId: 'pn-junction-rectifier', subMode: 'energy-bands', title: 'Energy Band Classification: Insulator vs Semiconductor (E_g)' },
  'imp-phy-14-ex2': { diagramId: 'pn-junction-rectifier', subMode: 'energy-bands', title: 'Extrinsic n-Type & p-Type Energy Bands (n_e · n_h = n_i²)' },
  'imp-phy-14-ex4': { diagramId: 'pn-junction-rectifier', subMode: 'vi-characteristics', title: 'Silicon Diode Forward & Reverse V–I Characteristics' },
  'imp-phy-14-th1': { diagramId: 'pn-junction-rectifier', subMode: 'energy-bands', title: 'Solid Classification & n-Type / p-Type Semiconductor Energy Bands' },
  'imp-phy-14-th2': { diagramId: 'pn-junction-rectifier', subMode: 'vi-characteristics', title: 'p-n Junction Depletion Layer, Forward Bias & Reverse Bias V–I Curve' },
  'imp-phy-14-th3': { diagramId: 'pn-junction-rectifier', subMode: 'rectifiers', title: 'Half-Wave & Centre-Tap Full-Wave Rectifier Circuits & Waveforms' },
};

const CHAPTER_FILTERS = [
  { id: 'ALL', label: 'All Chapters (Ch 9–14)' },
  { id: '9', label: 'Ch 9: Ray Optics' },
  { id: '10', label: 'Ch 10: Wave Optics' },
  { id: '11', label: 'Ch 11: Dual Nature' },
  { id: '12', label: 'Ch 12: Atoms' },
  { id: '13', label: 'Ch 13: Nuclei' },
  { id: '14', label: 'Ch 14: Semiconductors' },
];

const CATEGORY_FILTERS = [
  {
    id: 'THEORY_DERIVATIONS',
    label: 'Topics & Derivations',
    count: 33,
  },
  {
    id: 'EXAMPLES_EXERCISES',
    label: 'NCERT Problems',
    count: 53,
  },
  {
    id: 'ALL',
    label: 'All',
    count: 86,
  },
];

export default function PhysicsImportantQuestionsModal({
  isOpen,
  onClose,
  initialFilter = 'THEORY_DERIVATIONS',
  initialChapter = 'ALL',
  onJumpToSubtopic,
}) {
  const [categoryFilter, setCategoryFilter] = useState(initialFilter);
  const [chapterFilter, setChapterFilter] = useState(String(initialChapter || 'ALL'));
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIds, setExpandedIds] = useState(() => new Set(['imp-phy-9-th1']));

  useEffect(() => {
    if (isOpen) {
      setCategoryFilter(initialFilter || 'THEORY_DERIVATIONS');
      setChapterFilter(String(initialChapter || 'ALL'));
    }
  }, [isOpen, initialFilter, initialChapter]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filteredQuestions = useMemo(() => {
    return IMPORTANT_PHYSICS_QUESTIONS.filter((q) => {
      if (categoryFilter === 'THEORY_DERIVATIONS' && q.sourceType !== 'Board Theory & Derivation') {
        return false;
      }
      if (
        categoryFilter === 'EXAMPLES_EXERCISES' &&
        q.sourceType !== 'NCERT Example' &&
        q.sourceType !== 'NCERT Exercise'
      ) {
        return false;
      }
      if (chapterFilter !== 'ALL' && Number(q.chapterNum) !== Number(chapterFilter)) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const hay = `${q.title || ''} ${q.shortLabel || ''} ${q.questionPrompt || ''} ${q.chapterTitle || ''} ${q.ncertRefCode || ''}`.toLowerCase();
        if (!hay.includes(query)) return false;
      }
      return true;
    });
  }, [categoryFilter, chapterFilter, searchQuery]);

  const toggleExpand = (id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  if (!isOpen) return null;

  const modalContent = (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="physics-imp-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[90dvh] sm:max-h-[88vh] flex flex-col rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Calm Editorial Header */}
        <div className="px-4 py-3 sm:px-5 sm:py-4 border-b border-[var(--border-default)] bg-[var(--bg-surface)] flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--accent-primary)] flex items-center justify-center shrink-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h2
                id="physics-imp-modal-title"
                className="font-serif text-base sm:text-xl font-bold text-[var(--text-primary)] leading-tight truncate"
              >
                Important Questions &amp; Derivations
              </h2>
              <p className="text-[11px] sm:text-xs text-[var(--text-muted)] truncate">
                Physics Ch 9–14 • Ray Optics, Wave Optics, Dual Nature, Atoms, Nuclei &amp; Semiconductors
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors shrink-0 min-w-[36px] min-h-[36px] flex items-center justify-center cursor-pointer"
            aria-label="Close Physics Important Questions popup"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Calm Filter & Search Controls */}
        <div className="px-3.5 py-2.5 sm:px-5 sm:py-3 bg-[var(--bg-base)] border-b border-[var(--border-default)] space-y-2 shrink-0">
          {/* Segmented Category Bar */}
          <div className="flex items-center justify-between gap-2">
            <div className="grid grid-cols-3 sm:inline-flex w-full sm:w-auto p-1 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] gap-1">
              {CATEGORY_FILTERS.map((cat) => {
                const active = categoryFilter === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setCategoryFilter(cat.id)}
                    className={`px-2 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-medium transition-all cursor-pointer flex items-center justify-center gap-1.5 truncate ${
                      active
                        ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] font-semibold shadow-2xs border border-[var(--border-default)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    <span className="truncate">{cat.label}</span>
                    <span className="font-mono text-[10px] text-[var(--text-muted)] shrink-0">
                      ({cat.count})
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs text-[var(--text-muted)] shrink-0">
              <span>{filteredQuestions.length} items</span>
            </div>
          </div>

          {/* Chapter Select Dropdown + Search Input (Single Clean Row on Mobile & Desktop) */}
          <div className="flex items-center gap-2">
            <div className="relative w-44 sm:w-56 shrink-0">
              <CustomSelect
                value={chapterFilter}
                onChange={(e) => setChapterFilter(e.target.value)}
                aria-label="Filter by chapter"
                className="w-full px-3 py-1.5 rounded-xl text-xs bg-[var(--bg-surface)] border border-[var(--border-default)] text-[var(--text-primary)] font-medium hover:border-[var(--accent-primary)]"
              >
                {CHAPTER_FILTERS.map((ch) => (
                  <option key={ch.id} value={ch.id}>
                    {ch.label}
                  </option>
                ))}
              </CustomSelect>
            </div>

            <div className="relative flex-1 min-w-0">
              <Search className="w-3.5 h-3.5 text-[var(--text-muted)] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topic or formula..."
                className="w-full pl-8 pr-7 py-1.5 rounded-xl text-xs bg-[var(--bg-surface)] border border-[var(--border-default)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Scrollable Question Cards List */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-5 space-y-2.5 bg-[var(--bg-base)]">
          {filteredQuestions.length === 0 ? (
            <div className="py-10 text-center bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-default)] p-6">
              <p className="text-sm font-medium text-[var(--text-secondary)]">
                No questions match this filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setCategoryFilter('ALL');
                  setChapterFilter('ALL');
                  setSearchQuery('');
                }}
                className="mt-3 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-default)] hover:bg-[var(--bg-surface-hover)] transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredQuestions.map((q, idx) => {
              const isExpanded = expandedIds.has(q.id);
              const hasDerivations = Array.isArray(q.derivations) && q.derivations.length > 0;
              const diagramCfg = QUESTION_DIAGRAM_CONFIG[q.id];
              const diagramIdToRender = diagramCfg?.diagramId || q.diagram?.diagramId;
              const diagramSubMode = diagramCfg?.subMode;

              return (
                <div
                  key={q.id}
                  className="rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] overflow-hidden transition-colors"
                >
                  {/* Calm Card Header */}
                  <button
                    type="button"
                    onClick={() => toggleExpand(q.id)}
                    className="w-full px-3.5 sm:px-5 py-3 sm:py-3.5 text-left flex items-start justify-between gap-3 hover:bg-[var(--bg-surface-hover)] transition-colors cursor-pointer"
                  >
                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-[var(--text-muted)]">
                        <span>
                          {idx + 1}. Ch {q.chapterNum} • {q.chapterTitle}
                        </span>
                        {hasDerivations && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                            Derivation
                          </span>
                        )}
                        {q.ncertRefCode && q.sourceType !== 'Board Theory & Derivation' && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                            {q.ncertRefCode}
                          </span>
                        )}
                      </div>

                      <h3 className="font-serif text-sm sm:text-base font-bold text-[var(--text-primary)] leading-snug break-words">
                        {q.title}
                      </h3>
                    </div>

                    <div className="w-7 h-7 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] shrink-0 mt-0.5">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Body */}
                  {isExpanded && (
                    <div className="px-3.5 sm:px-5 pb-4 sm:pb-5 pt-3 border-t border-[var(--border-subtle)] space-y-4">
                      {/* Question Prompt */}
                      {q.questionPrompt && (
                        <div className="p-3 sm:p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                          <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                            <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
                              <FileText className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                              Topic / Question
                            </span>
                            {q.ncertRef && (
                              <span className="text-[10px] sm:text-[11px] font-mono text-[var(--text-muted)]">
                                {typeof q.ncertRef === 'object'
                                  ? [q.ncertRef.section || q.ncertRef.page, q.ncertRef.figures]
                                      .filter(Boolean)
                                      .join(' • ')
                                  : String(q.ncertRef)}
                              </span>
                            )}
                          </div>
                          <div className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed overflow-x-auto">
                            <FormattedLatex content={q.questionPrompt} />
                          </div>
                        </div>
                      )}

                      {/* Core Theory Points */}
                      {Array.isArray(q.theory) && q.theory.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--text-secondary)] flex items-center gap-1.5">
                            <BookOpen className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                            Core Theory &amp; Key Points
                          </h4>
                          <ul className="space-y-2 pl-0.5">
                            {q.theory.map((pt, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] mt-2 shrink-0" />
                                <div className="flex-1 min-w-0 overflow-x-auto">
                                  <FormattedLatex content={typeof pt === 'string' ? pt : pt?.text || ''} />
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Step-by-Step Derivations / Solutions */}
                      {hasDerivations && (
                        <div className="space-y-3">
                          <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--text-secondary)] flex items-center gap-1.5">
                            <Compass className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                            Step-by-Step Derivation &amp; Formulas
                          </h4>
                          {q.derivations.map((deriv, dIdx) => (
                            <div
                              key={dIdx}
                              className="p-3 sm:p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-default)] space-y-2.5 sm:space-y-3"
                            >
                              <div className="flex items-center justify-between gap-2">
                                <span className="font-serif text-xs sm:text-sm font-bold text-[var(--text-primary)] min-w-0 break-words">
                                  {deriv.name || `Derivation ${dIdx + 1}`}
                                </span>
                                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] shrink-0">
                                  Derivation
                                </span>
                              </div>

                              {deriv.setup && (
                                <div className="text-xs sm:text-sm text-[var(--text-secondary)] italic overflow-x-auto">
                                  <FormattedLatex content={deriv.setup} />
                                </div>
                              )}

                              {Array.isArray(deriv.steps) && deriv.steps.length > 0 && (
                                <div className="space-y-2">
                                  {deriv.steps.map((step, sIdx) => {
                                    const isObj = typeof step === 'object' && step !== null;
                                    const stepText = isObj ? step.text : step;
                                    const stepEq = isObj ? step.equation : null;
                                    return (
                                      <div
                                        key={sIdx}
                                        className="p-2.5 sm:p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-1.5 min-w-0"
                                      >
                                        {stepText && (
                                          <div className="text-xs sm:text-sm text-[var(--text-primary)] overflow-x-auto">
                                            <FormattedLatex content={stepText} />
                                          </div>
                                        )}
                                        {stepEq && (
                                          <div className="overflow-x-auto py-1 max-w-full">
                                            <MathBlock math={stepEq} display={true} />
                                          </div>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              )}

                              {deriv.finalFormula && (
                                <div className="p-2.5 sm:p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-default)]">
                                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--accent-primary)] mb-1">
                                    Final Result / Formula
                                  </div>
                                  <div className="overflow-x-auto max-w-full">
                                    <MathBlock math={deriv.finalFormula} display={true} />
                                  </div>
                                </div>
                              )}

                              {Array.isArray(deriv.specialCases) && deriv.specialCases.length > 0 && (
                                <div className="space-y-1.5 pt-1">
                                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">
                                    Special Cases &amp; Notes
                                  </div>
                                  <div className="space-y-2">
                                    {deriv.specialCases.map((sc, scIdx) => {
                                      const isScObj = typeof sc === 'object' && sc !== null;
                                      return (
                                        <div
                                          key={scIdx}
                                          className="text-xs text-[var(--text-secondary)] space-y-1 pl-2.5 border-l-2 border-[var(--border-default)] overflow-x-auto"
                                        >
                                          {isScObj ? (
                                            <>
                                              {sc.title && (
                                                <div className="font-semibold text-[var(--text-primary)]">
                                                  {sc.title}
                                                </div>
                                              )}
                                              {sc.text && <FormattedLatex content={sc.text} />}
                                              {sc.equation && (
                                                <div className="py-1 overflow-x-auto max-w-full">
                                                  <MathBlock math={sc.equation} display={true} />
                                                </div>
                                              )}
                                            </>
                                          ) : (
                                            <FormattedLatex content={String(sc)} />
                                          )}
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Visual Diagram */}
                      {diagramIdToRender && (
                        <div className="space-y-2">
                          <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--text-secondary)] flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                            <span>
                              Labelled Diagram
                              {diagramCfg?.title ? ` — ${diagramCfg.title}` : ''}
                            </span>
                          </h4>
                          <PhysicsDiagramCard
                            diagramId={diagramIdToRender}
                            subMode={diagramSubMode}
                            inline={Boolean(diagramSubMode)}
                          />
                        </div>
                      )}

                      {/* Key Terms Glossary */}
                      {Array.isArray(q.termsGlossary) && q.termsGlossary.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">
                            Symbols &amp; Terms
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {q.termsGlossary.map((t, tIdx) => (
                              <div
                                key={tIdx}
                                className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs flex items-start gap-2 min-w-0"
                              >
                                {t.symbol && (
                                  <span className="font-mono font-bold text-[var(--accent-primary)] shrink-0">
                                    <FormattedLatex content={String(t.symbol)} />
                                  </span>
                                )}
                                <div className="text-[var(--text-secondary)] min-w-0 overflow-x-auto">
                                  {(t.term || t.name) && (
                                    <strong className="text-[var(--text-primary)]">
                                      {t.term || t.name}:{' '}
                                    </strong>
                                  )}
                                  <FormattedLatex content={String(t.definition || t.meaning || '')} />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Action Footer: Jump to Subtopic in Notes */}
                      {onJumpToSubtopic && q.chapterId && (
                        <div className="pt-1 flex items-center justify-end">
                          <button
                            type="button"
                            onClick={() => {
                              onJumpToSubtopic({
                                subjectId: 'physics',
                                volumeId: q.chapterNum >= 9 ? 'phy-vol-2' : 'phy-vol-1',
                                chapterId: q.chapterId,
                                subchapterId: q.subtopicId || null,
                              });
                              onClose();
                            }}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[var(--bg-elevated)] hover:bg-[var(--bg-surface-hover)] text-[var(--text-primary)] border border-[var(--border-default)] transition-colors cursor-pointer"
                          >
                            <span>Open in Chapter Notes</span>
                            <ExternalLink className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Calm Modal Bottom Footer */}
        <div className="px-4 py-2.5 sm:px-5 sm:py-3 border-t border-[var(--border-default)] bg-[var(--bg-surface)] flex items-center justify-between text-xs text-[var(--text-muted)] shrink-0">
          <span className="truncate mr-2">
            Showing {filteredQuestions.length} Physics topics
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl font-semibold bg-[var(--bg-elevated)] hover:bg-[var(--bg-surface-hover)] text-[var(--text-primary)] border border-[var(--border-default)] transition-colors shrink-0 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : modalContent;
}
