import React, { useState, useMemo, useEffect } from 'react';
import {
  X,
  Search,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Compass,
  FileText,
  Sparkles,
  ExternalLink,
  Layers,
} from 'lucide-react';
import { IMPORTANT_PHYSICS_QUESTIONS } from '../../data/importantQuestionsData';
import PhysicsDiagramCard from './PhysicsDiagramCard';
import { FormattedLatex, MathBlock } from './LatexView';

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
  { id: 'ALL', label: 'All Chapters (9–14)', shortLabel: 'All (Ch 9–14)' },
  { id: 9, label: 'Ch 9: Ray Optics', shortLabel: 'Ch 9 Ray Optics' },
  { id: 10, label: 'Ch 10: Wave Optics', shortLabel: 'Ch 10 Wave Optics' },
  { id: 11, label: 'Ch 11: Dual Nature', shortLabel: 'Ch 11 Dual Nature' },
  { id: 12, label: 'Ch 12: Atoms', shortLabel: 'Ch 12 Atoms' },
  { id: 13, label: 'Ch 13: Nuclei', shortLabel: 'Ch 13 Nuclei' },
  { id: 14, label: 'Ch 14: Semiconductors', shortLabel: 'Ch 14 Semiconductors' },
];

const CATEGORY_FILTERS = [
  {
    id: 'THEORY_DERIVATIONS',
    label: 'Core Topics & Derivations',
    mobileLabel: 'Topics & Derivations',
    badge: '33',
  },
  {
    id: 'EXAMPLES_EXERCISES',
    label: 'NCERT Examples & Exercises',
    mobileLabel: 'NCERT Problems',
    badge: '53',
  },
  {
    id: 'ALL',
    label: 'All Physics Important Qs',
    mobileLabel: 'All Qs',
    badge: '86',
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
  const [chapterFilter, setChapterFilter] = useState(initialChapter);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIds, setExpandedIds] = useState(() => new Set(['imp-phy-9-th1']));

  useEffect(() => {
    if (isOpen) {
      setCategoryFilter(initialFilter || 'THEORY_DERIVATIONS');
      setChapterFilter(initialChapter || 'ALL');
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

  const expandAllVisible = () => {
    setExpandedIds(new Set(filteredQuestions.map((q) => q.id)));
  };

  const collapseAll = () => {
    setExpandedIds(new Set());
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-2 sm:p-5 bg-slate-900/55 backdrop-blur-sm animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="physics-imp-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl max-h-[92dvh] sm:max-h-[90vh] flex flex-col rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header — Compact on Mobile */}
        <div className="px-3.5 py-2.5 sm:px-5 sm:py-4 border-b border-slate-200 dark:border-slate-800 bg-gradient-to-r from-indigo-50/80 via-white to-sky-50/70 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950/30 flex items-center justify-between gap-2.5 shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-sm shrink-0">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h2
                  id="physics-imp-modal-title"
                  className="text-sm sm:text-xl font-bold text-slate-900 dark:text-white leading-tight truncate"
                >
                  Physics Important Questions &amp; Derivations
                </h2>
                <span className="hidden sm:inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300">
                  Clean Study Pop-up
                </span>
              </div>
              <p className="text-[11px] sm:text-sm text-slate-600 dark:text-slate-400 truncate">
                Ch 9–14 • Ray &amp; Wave Optics, Dual Nature, Atoms, Nuclei, Semiconductors
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0 min-w-[36px] min-h-[36px] flex items-center justify-center cursor-pointer"
            aria-label="Close Physics Important Questions popup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter & Search Controls — Compact Horizontal Scroll Strips on Mobile */}
        <div className="px-3.5 py-2.5 sm:px-5 sm:py-3.5 bg-slate-50/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 space-y-2 shrink-0">
          {/* Row 1: Category Tabs (Single-row scroll on mobile) + Desktop Search */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none flex-nowrap sm:flex-wrap pb-0.5">
              {CATEGORY_FILTERS.map((cat) => {
                const active = categoryFilter === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setCategoryFilter(cat.id)}
                    className={`shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      active
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    <span className="sm:hidden">{cat.mobileLabel}</span>
                    <span className="hidden sm:inline">{cat.label}</span>
                    <span
                      className={`px-1.5 py-0.2 rounded-md text-[10px] sm:text-[11px] font-bold ${
                        active
                          ? 'bg-indigo-500/80 text-white'
                          : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      {cat.badge}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input + Quick Expand/Collapse on Mobile */}
            <div className="flex items-center gap-2">
              <div className="relative flex-1 md:min-w-[250px]">
                <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter topics or formulas..."
                  className="w-full pl-8 sm:pl-9 pr-7 py-1.5 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                    aria-label="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <div className="flex sm:hidden items-center gap-1.5 text-[11px] shrink-0">
                <button
                  type="button"
                  onClick={expandAllVisible}
                  className="px-2 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-400 font-semibold"
                >
                  Expand
                </button>
                <button
                  type="button"
                  onClick={collapseAll}
                  className="px-2 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-medium"
                >
                  Collapse
                </button>
              </div>
            </div>
          </div>

          {/* Row 2: Chapter Pills (Single-row horizontal scroll on mobile) + Desktop Expand/Collapse */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none flex-nowrap sm:flex-wrap pb-0.5 min-w-0">
              {CHAPTER_FILTERS.map((ch) => {
                const active = String(chapterFilter) === String(ch.id);
                return (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => setChapterFilter(ch.id)}
                    className={`shrink-0 whitespace-nowrap px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                      active
                        ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold'
                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    {ch.shortLabel}
                  </button>
                );
              })}
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 shrink-0">
              <span className="font-medium">
                Showing <strong className="text-slate-800 dark:text-slate-200">{filteredQuestions.length}</strong> items
              </span>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <button
                type="button"
                onClick={expandAllVisible}
                className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium cursor-pointer"
              >
                Expand All
              </button>
              <button
                type="button"
                onClick={collapseAll}
                className="text-slate-500 dark:text-slate-400 hover:underline font-medium cursor-pointer"
              >
                Collapse All
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Question Cards List */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-5 space-y-2.5 sm:space-y-3 bg-slate-50/40 dark:bg-slate-950/40">
          {filteredQuestions.length === 0 ? (
            <div className="py-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                No Physics questions match your current filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setCategoryFilter('ALL');
                  setChapterFilter('ALL');
                  setSearchQuery('');
                }}
                className="mt-3 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors cursor-pointer"
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
                  className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm overflow-hidden transition-all"
                >
                  {/* Card Header (Click to Expand/Collapse) */}
                  <button
                    type="button"
                    onClick={() => toggleExpand(q.id)}
                    className="w-full px-3.5 sm:px-5 py-3 sm:py-3.5 text-left flex items-start justify-between gap-2.5 hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
                  >
                    <div className="space-y-1.5 min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <span className="px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          #{idx + 1}
                        </span>
                        <span className="px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
                          Ch {q.chapterNum} • {q.chapterTitle}
                        </span>
                        {hasDerivations && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-semibold bg-amber-50 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/60">
                            📐 Derivation ({q.derivations.length})
                          </span>
                        )}
                        {q.sourceType === 'Board Theory & Derivation' ? (
                          <span className="px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-medium bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300">
                            Core Topic
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-medium bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300">
                            {q.ncertRefCode || q.sourceType}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xs sm:text-base font-bold text-slate-900 dark:text-white leading-snug break-words">
                        {q.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hidden sm:inline">
                        {isExpanded ? 'Hide' : 'View'}
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300">
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </div>
                    </div>
                  </button>

                  {/* Expanded Body */}
                  {isExpanded && (
                    <div className="px-3.5 sm:px-5 pb-4 sm:pb-5 pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-4 sm:space-y-5">
                      {/* Question Prompt */}
                      {q.questionPrompt && (
                        <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
                          <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                              <FileText className="w-3.5 h-3.5 text-indigo-500" />
                              Topic / Question Statement
                            </span>
                            {q.ncertRef && (
                              <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">
                                {typeof q.ncertRef === 'object'
                                  ? [q.ncertRef.section || q.ncertRef.page, q.ncertRef.figures]
                                      .filter(Boolean)
                                      .join(' • ')
                                  : String(q.ncertRef)}
                              </span>
                            )}
                          </div>
                          <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed overflow-x-auto">
                            <FormattedLatex content={q.questionPrompt} />
                          </div>
                        </div>
                      )}

                      {/* Core Theory Points */}
                      {Array.isArray(q.theory) && q.theory.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                            <BookOpen className="w-3.5 h-3.5" />
                            Core Theory &amp; Key Points
                          </h4>
                          <ul className="space-y-2 pl-0.5 sm:pl-1">
                            {q.theory.map((pt, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
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
                          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                            <Compass className="w-3.5 h-3.5" />
                            Step-by-Step Derivation &amp; Formulas
                          </h4>
                          {q.derivations.map((deriv, dIdx) => (
                            <div
                              key={dIdx}
                              className="p-3 sm:p-4 rounded-xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-800/50 space-y-2.5 sm:space-y-3"
                            >
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white min-w-0 break-words">
                                  📐 {deriv.name || `Derivation ${dIdx + 1}`}
                                </span>
                                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 shrink-0">
                                  Derivation
                                </span>
                              </div>

                              {deriv.setup && (
                                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 italic overflow-x-auto">
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
                                        className="p-2.5 sm:p-3 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200/70 dark:border-slate-800 space-y-1.5 min-w-0"
                                      >
                                        {stepText && (
                                          <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 overflow-x-auto">
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
                                <div className="p-2.5 sm:p-3 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/70">
                                  <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 mb-1">
                                    Final Result / Formula
                                  </div>
                                  <div className="overflow-x-auto max-w-full">
                                    <MathBlock math={deriv.finalFormula} display={true} />
                                  </div>
                                </div>
                              )}

                              {Array.isArray(deriv.specialCases) && deriv.specialCases.length > 0 && (
                                <div className="space-y-1.5 pt-1">
                                  <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    Special Cases &amp; Sign Notes
                                  </div>
                                  <div className="space-y-2">
                                    {deriv.specialCases.map((sc, scIdx) => {
                                      const isScObj = typeof sc === 'object' && sc !== null;
                                      return (
                                        <div
                                          key={scIdx}
                                          className="text-xs text-slate-600 dark:text-slate-400 space-y-1 pl-2 border-l-2 border-amber-400/60 overflow-x-auto"
                                        >
                                          {isScObj ? (
                                            <>
                                              {sc.title && (
                                                <div className="font-semibold text-slate-800 dark:text-slate-200">
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

                      {/* Visual Diagram — inline={true} when subMode is present so it locks to the exact question diagram */}
                      {diagramIdToRender && (
                        <div className="space-y-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5" />
                            <span>
                              Labelled Physics Diagram
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
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Symbols &amp; Terms Used
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {q.termsGlossary.map((t, tIdx) => (
                              <div
                                key={tIdx}
                                className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50 text-xs flex items-start gap-2 min-w-0"
                              >
                                {t.symbol && (
                                  <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 shrink-0">
                                    <FormattedLatex content={String(t.symbol)} />
                                  </span>
                                )}
                                <div className="text-slate-600 dark:text-slate-300 min-w-0 overflow-x-auto">
                                  {(t.term || t.name) && (
                                    <strong className="text-slate-800 dark:text-slate-100">
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
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 sm:py-2 rounded-xl text-xs font-semibold bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/70 text-indigo-700 dark:text-indigo-300 transition-colors cursor-pointer"
                          >
                            <span>Open Chapter Subtopic in Notes</span>
                            <ExternalLink className="w-3.5 h-3.5" />
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

        {/* Modal Bottom Footer — Compact on Mobile */}
        <div className="px-3.5 py-2.5 sm:px-5 sm:py-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 shrink-0">
          <span className="truncate mr-2">
            <span className="sm:hidden font-medium text-slate-700 dark:text-slate-300">
              {filteredQuestions.length} Physics items
            </span>
            <span className="hidden sm:inline">
              Clean Study View • Click any topic card to view its theory, derivation steps &amp; diagram
            </span>
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90 transition-opacity shrink-0 cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
