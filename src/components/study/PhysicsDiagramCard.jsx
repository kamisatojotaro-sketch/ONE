import { useState, useEffect } from 'react';
import { 
  Zap, ArrowRight, Layers, CheckCircle2, AlertCircle, Info, 
  ChevronDown, ChevronUp, Scale, Compass, Sparkles, Activity
} from 'lucide-react';

const HUYGENS_SUBMODE_MAP = {
  wavefronts: 0,
  reflection: 1,
  denser: 2,
  rarer: 3
};

export default function PhysicsDiagramCard({ diagramId, subMode, inline = false }) {
  // Tab states for diagrams that have multiple sub-modes when viewed as standalone card
  const [gaussMode, setGaussMode] = useState('wire'); // 'wire' | 'sheet' | 'shell'
  const [dipoleMode, setDipoleMode] = useState('axial'); // 'axial' | 'equatorial'
  const [galvMode, setGalvMode] = useState('ammeter'); // 'ammeter' | 'voltmeter'
  const [lcrMode, setLcrMode] = useState('phasor'); // 'phasor' | 'resonance'
  const [parallelMode, setParallelMode] = useState('attractive'); // 'attractive' | 'repulsive'
  const [equiMode, setEquiMode] = useState('two-surfaces'); // 'two-surfaces' | 'normal-proof' | 'geometry'

  // Vol 2 Ch 9–14 multi-mode states (synced with subMode when provided)
  const [rayOpticsMode, setRayOpticsMode] = useState(() =>
    ['mirror', 'spherical-surface', 'lens-maker', 'microscope', 'astronomical-telescope', 'cassegrain'].includes(subMode)
      ? subMode
      : 'mirror'
  );
  const [prismMode, setPrismMode] = useState(() =>
    ['curve', 'prism-ray', 'tir'].includes(subMode) ? subMode : 'prism-ray'
  );
  const [huygensTab, setHuygensTab] = useState(() =>
    subMode && HUYGENS_SUBMODE_MAP[subMode] !== undefined ? HUYGENS_SUBMODE_MAP[subMode] : 0
  );
  const [ydseMode, setYdseMode] = useState(() =>
    ['ydse-geometry', 'interference-intensity'].includes(subMode) ? subMode : 'ydse-geometry'
  );
  const [diffMode, setDiffMode] = useState(() =>
    ['diffraction-lobe', 'ydse-compare'].includes(subMode) ? subMode : 'diffraction-lobe'
  );
  const [photoMode, setPhotoMode] = useState(() =>
    ['experimental-setup', 'collector-potential', 'einstein-slope', 'de-broglie'].includes(subMode)
      ? subMode
      : 'collector-potential'
  );
  const [bohrMode, setBohrMode] = useState(() =>
    ['alpha-scattering', 'bohr-orbits', 'spectral-series'].includes(subMode) ? subMode : 'spectral-series'
  );
  const [nucleiMode, setNucleiMode] = useState(() =>
    ['be-curve', 'nuclear-force', 'fission-fusion'].includes(subMode) ? subMode : 'be-curve'
  );
  const [semiMode, setSemiMode] = useState(() =>
    ['energy-bands', 'depletion-layer', 'vi-characteristics', 'rectifiers'].includes(subMode)
      ? subMode
      : 'depletion-layer'
  );
  const [activeTab, setActiveTab] = useState(0); // Legacy generic tab fallback

  useEffect(() => {
    if (!subMode) return;
    if (diagramId === 'ray-optics-instruments' && ['mirror', 'spherical-surface', 'lens-maker', 'microscope', 'astronomical-telescope', 'cassegrain'].includes(subMode)) {
      setRayOpticsMode(subMode);
    } else if (diagramId === 'prism-dispersion' && ['curve', 'prism-ray', 'tir'].includes(subMode)) {
      setPrismMode(subMode);
    } else if (diagramId === 'huygens-wavefronts' && HUYGENS_SUBMODE_MAP[subMode] !== undefined) {
      setHuygensTab(HUYGENS_SUBMODE_MAP[subMode]);
    } else if (diagramId === 'ydse-wave-optics' && ['ydse-geometry', 'interference-intensity'].includes(subMode)) {
      setYdseMode(subMode);
    } else if (diagramId === 'single-slit-diffraction' && ['diffraction-lobe', 'ydse-compare'].includes(subMode)) {
      setDiffMode(subMode);
    } else if (diagramId === 'photoelectric-graphs' && ['experimental-setup', 'collector-potential', 'einstein-slope', 'de-broglie'].includes(subMode)) {
      setPhotoMode(subMode);
    } else if (diagramId === 'bohr-atom-spectra' && ['alpha-scattering', 'bohr-orbits', 'spectral-series'].includes(subMode)) {
      setBohrMode(subMode);
    } else if (diagramId === 'nuclei-binding-force' && ['be-curve', 'nuclear-force', 'fission-fusion'].includes(subMode)) {
      setNucleiMode(subMode);
    } else if (diagramId === 'pn-junction-rectifier' && ['energy-bands', 'depletion-layer', 'vi-characteristics', 'rectifiers'].includes(subMode)) {
      setSemiMode(subMode);
    }
  }, [diagramId, subMode]);

  // Render SVG Marker definition helper
  const svgDefs = (
    <defs>
      <marker id="arrow-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
      </marker>
      <marker id="arrow-emerald" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" />
      </marker>
      <marker id="arrow-rose" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#f43f5e" />
      </marker>
      <marker id="arrow-amber" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b" />
      </marker>
      <marker id="arrow-purple" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#a855f7" />
      </marker>
    </defs>
  );

  /* -------------------------------------------------------------
   * 1. GAUSS'S LAW APPLICATIONS (Wire, Plane Sheet, Spherical Shell)
   * ------------------------------------------------------------- */
  if (diagramId === 'gauss-applications') {
    const activeGauss = subMode || gaussMode;

    const wireContent = (
      <div className="flex flex-col lg:flex-row items-center gap-6 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg width="280" height="200" viewBox="0 0 280 200" className="overflow-visible select-none">
            {svgDefs}
            <line x1="140" y1="10" x2="140" y2="190" stroke="#f59e0b" strokeWidth="4" />
            <text x="148" y="25" fill="#f59e0b" fontSize="12" fontWeight="bold" fontFamily="monospace">+</text>
            <text x="148" y="55" fill="#f59e0b" fontSize="12" fontWeight="bold" fontFamily="monospace">+</text>
            <text x="148" y="85" fill="#f59e0b" fontSize="12" fontWeight="bold" fontFamily="monospace">+</text>
            <text x="148" y="115" fill="#f59e0b" fontSize="12" fontWeight="bold" fontFamily="monospace">+</text>
            <text x="148" y="145" fill="#f59e0b" fontSize="12" fontWeight="bold" fontFamily="monospace">+</text>
            <text x="148" y="175" fill="#f59e0b" fontSize="12" fontWeight="bold" fontFamily="monospace">+</text>
            
            <ellipse cx="140" cy="40" rx="70" ry="16" fill="rgba(59, 130, 246, 0.08)" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="140" y1="40" x2="140" y2="15" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-emerald)" />
            <text x="146" y="20" fill="#10b981" fontSize="10" fontWeight="bold">n̂₁ (Φ₁=0)</text>

            <line x1="70" y1="40" x2="70" y2="160" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="210" y1="40" x2="210" y2="160" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />

            <ellipse cx="140" cy="160" rx="70" ry="16" fill="rgba(59, 130, 246, 0.08)" stroke="#3b82f6" strokeWidth="1.5" />
            <line x1="140" y1="160" x2="140" y2="185" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-emerald)" />
            <text x="146" y="192" fill="#10b981" fontSize="10" fontWeight="bold">n̂₂ (Φ₂=0)</text>

            <line x1="140" y1="100" x2="210" y2="100" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="2 2" />
            <text x="175" y="93" fill="var(--text-muted)" fontSize="10" fontWeight="bold">r</text>

            <line x1="210" y1="100" x2="255" y2="100" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow-blue)" />
            <text x="258" y="104" fill="#3b82f6" fontSize="11" fontWeight="bold">E⃗</text>

            <line x1="70" y1="100" x2="25" y2="100" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow-blue)" />
            <text x="8" y="104" fill="#3b82f6" fontSize="11" fontWeight="bold">E⃗</text>

            <line x1="55" y1="40" x2="55" y2="160" stroke="var(--text-muted)" strokeWidth="1" />
            <text x="42" y="105" fill="var(--text-muted)" fontSize="11" fontWeight="bold">L</text>
          </svg>
        </div>

        <div className="w-full lg:w-1/2 space-y-2.5 text-xs">
          <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
            <div className="font-bold text-emerald-400 mb-1 flex items-center gap-1.5">
              <CheckCircle2 size={13} />
              <span>Flat Circular Ends (θ = 90°):</span>
            </div>
            <p className="text-[var(--text-secondary)]">
              E⃗ is radial, but normal n̂ is axial: E⃗ ⟂ n̂ ⟹ cos 90° = 0.
              <span className="block font-mono text-[11px] text-emerald-300 mt-0.5">Φ_top = 0 and Φ_bottom = 0</span>
            </p>
          </div>

          <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
            <div className="font-bold text-blue-400 mb-1 flex items-center gap-1.5">
              <CheckCircle2 size={13} />
              <span>Curved Cylindrical Surface (θ = 0°):</span>
            </div>
            <p className="text-[var(--text-secondary)]">
              E⃗ and dA⃗ are in the same outward radial direction:
              <span className="block font-mono text-[11px] text-blue-300 mt-0.5">Φ_curved = E · (2πrL)</span>
            </p>
          </div>

          <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-center font-bold">
            E · (2πrL) = (λL) / ε₀ ⟹ E = λ / (2πε₀r)
          </div>
        </div>
      </div>
    );

    const sheetContent = (
      <div className="flex flex-col lg:flex-row items-center gap-6 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg width="280" height="200" viewBox="0 0 280 200" className="overflow-visible select-none">
            {svgDefs}
            <polygon points="120,20 160,20 160,180 120,180" fill="rgba(245, 158, 11, 0.12)" stroke="#f59e0b" strokeWidth="2" />
            <text x="135" y="45" fill="#f59e0b" fontSize="12" fontWeight="bold" fontFamily="monospace">+</text>
            <text x="135" y="75" fill="#f59e0b" fontSize="12" fontWeight="bold" fontFamily="monospace">+</text>
            <text x="135" y="105" fill="#f59e0b" fontSize="12" fontWeight="bold" fontFamily="monospace">+</text>
            <text x="135" y="135" fill="#f59e0b" fontSize="12" fontWeight="bold" fontFamily="monospace">+</text>
            <text x="135" y="165" fill="#f59e0b" fontSize="12" fontWeight="bold" fontFamily="monospace">+</text>
            <text x="142" y="195" fill="#f59e0b" fontSize="11" fontWeight="bold">σ = dq/dA</text>

            <line x1="50" y1="85" x2="120" y2="85" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="50" y1="125" x2="120" y2="125" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />
            <ellipse cx="50" cy="105" rx="14" ry="20" fill="rgba(59, 130, 246, 0.15)" stroke="#3b82f6" strokeWidth="1.5" />
            <line x1="50" y1="105" x2="10" y2="105" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow-blue)" />
            <text x="0" y="100" fill="#3b82f6" fontSize="11" fontWeight="bold">E⃗ (A)</text>

            <line x1="160" y1="85" x2="230" y2="85" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="160" y1="125" x2="230" y2="125" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />
            <ellipse cx="230" cy="105" rx="14" ry="20" fill="rgba(59, 130, 246, 0.15)" stroke="#3b82f6" strokeWidth="1.5" />
            <line x1="230" y1="105" x2="270" y2="105" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow-blue)" />
            <text x="255" y="100" fill="#3b82f6" fontSize="11" fontWeight="bold">E⃗ (A)</text>

            <ellipse cx="140" cy="105" rx="12" ry="18" fill="rgba(245, 158, 11, 0.3)" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="135" y="110" fill="#f59e0b" fontSize="10" fontWeight="bold">q=σA</text>
          </svg>
        </div>

        <div className="w-full lg:w-1/2 space-y-2.5 text-xs">
          <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
            <div className="font-bold text-purple-400 mb-1 flex items-center gap-1.5">
              <CheckCircle2 size={13} />
              <span>Curved Surface (No Flux):</span>
            </div>
            <p className="text-[var(--text-secondary)]">
              E⃗ lines are parallel to the sheet and perpendicular to curved surface normal:
              <span className="block font-mono text-[11px] text-purple-300 mt-0.5">E⃗ ⟂ dA⃗ ⟹ Φ_curved = 0</span>
            </p>
          </div>

          <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
            <div className="font-bold text-blue-400 mb-1 flex items-center gap-1.5">
              <CheckCircle2 size={13} />
              <span>Two Flat End Caps (Area A each):</span>
            </div>
            <p className="text-[var(--text-secondary)]">
              Field lines pass normally through both left and right flat caps:
              <span className="block font-mono text-[11px] text-blue-300 mt-0.5">Total Φ = EA + EA = 2EA</span>
            </p>
          </div>

          <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-center font-bold">
            2EA = (σA) / ε₀ ⟹ E = σ / (2ε₀)  [Independent of r!]
          </div>
        </div>
      </div>
    );

    const shellContent = (
      <div className="flex flex-col lg:flex-row items-center gap-6 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg width="280" height="200" viewBox="0 0 280 200" className="overflow-visible select-none">
            {svgDefs}
            <circle cx="140" cy="100" r="50" fill="rgba(245, 158, 11, 0.12)" stroke="#f59e0b" strokeWidth="2.5" />
            <circle cx="140" cy="100" r="80" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="140" cy="100" r="28" fill="none" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 3" />

            <line x1="140" y1="100" x2="190" y2="100" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="165" y="94" fill="#f59e0b" fontSize="10" fontWeight="bold">R</text>

            <line x1="140" y1="100" x2="196" y2="44" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arrow-blue)" />
            <text x="180" y="70" fill="#3b82f6" fontSize="10" fontWeight="bold">r &gt; R</text>

            <line x1="140" y1="100" x2="120" y2="80" stroke="#f43f5e" strokeWidth="1.5" markerEnd="url(#arrow-rose)" />
            <text x="110" y="85" fill="#f43f5e" fontSize="9" fontWeight="bold">r &lt; R</text>

            <text x="140" y="170" textAnchor="middle" fill="var(--text-muted)" fontSize="10">Charged Spherical Shell</text>
          </svg>
        </div>

        <div className="w-full lg:w-1/2 space-y-2 text-xs">
          <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
            <div className="font-bold text-blue-400 mb-1 flex items-center gap-1.5">
              <CheckCircle2 size={13} />
              <span>Case 1: Outside the Shell (r &gt; R)</span>
            </div>
            <p className="text-[var(--text-secondary)]">
              Total charge q is enclosed within Gaussian sphere of radius r:
              <span className="block font-mono text-[11px] text-blue-400 font-bold mt-0.5">E_out = (1 / 4πε₀) · (q / r²) = (σR²) / (ε₀r²)</span>
            </p>
          </div>

          <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30">
            <div className="font-bold text-amber-500 dark:text-amber-400 mb-1 flex items-center gap-1.5">
              <CheckCircle2 size={13} />
              <span>Case 2: On the Surface of the Shell (r = R)</span>
            </div>
            <p className="text-[var(--text-secondary)]">
              Field point lies directly on shell surface, enclosing full charge q = 4πR²σ:
              <span className="block font-mono text-[11px] text-amber-500 dark:text-amber-400 font-bold mt-0.5">E_surface = q / (4πε₀R²) = σ / ε₀ (Maximum)</span>
            </p>
          </div>

          <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
            <div className="font-bold text-rose-400 mb-1 flex items-center gap-1.5">
              <CheckCircle2 size={13} />
              <span>Case 3: Inside the Shell (r &lt; R)</span>
            </div>
            <p className="text-[var(--text-secondary)]">
              All charge resides strictly on outer surface: q_enclosed = 0.
              <span className="block font-mono text-[11px] text-rose-400 font-bold mt-0.5">E_in · (4πr²) = 0 / ε₀ ⟹ E_in = 0 (Shielding)</span>
            </p>
          </div>
        </div>
      </div>
    );

    if (inline) {
      if (activeGauss === 'wire') return wireContent;
      if (activeGauss === 'sheet') return sheetContent;
      return shellContent;
    }

    return (
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 sm:p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-amber-500/15 text-amber-500">
              <Zap size={16} />
            </span>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                Gauss&apos;s Law Application Visualizer
              </h4>
              <p className="text-[11px] text-[var(--text-muted)]">
                Select an application to view its Gaussian surface, field lines &amp; derivation
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-[var(--bg-surface)] p-1 rounded-xl border border-[var(--border-subtle)]">
            <button
              onClick={() => setGaussMode('wire')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                gaussMode === 'wire' 
                  ? 'bg-[var(--accent-primary)] text-white shadow-xs' 
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              1. Straight Wire
            </button>
            <button
              onClick={() => setGaussMode('sheet')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                gaussMode === 'sheet' 
                  ? 'bg-[var(--accent-primary)] text-white shadow-xs' 
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              2. Plane Sheet
            </button>
            <button
              onClick={() => setGaussMode('shell')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                gaussMode === 'shell' 
                  ? 'bg-[var(--accent-primary)] text-white shadow-xs' 
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              3. Spherical Shell
            </button>
          </div>
        </div>

        {activeGauss === 'wire' && wireContent}
        {activeGauss === 'sheet' && sheetContent}
        {activeGauss === 'shell' && shellContent}
      </div>
    );
  }

  /* -------------------------------------------------------------
   * 2. TRANSFORMER CONSTRUCTION & FLUX DERIVATION
   * ------------------------------------------------------------- */
  if (diagramId === 'transformer') {
    const content = (
      <div className="flex flex-col lg:flex-row items-center gap-6 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg width="280" height="210" viewBox="0 0 280 210" className="overflow-visible select-none">
            {svgDefs}
            <rect x="40" y="25" width="200" height="150" rx="10" fill="none" stroke="var(--text-muted)" strokeWidth="18" />
            <rect x="90" y="65" width="100" height="70" rx="4" fill="var(--bg-surface)" stroke="var(--border-default)" strokeWidth="1.5" />
            <line x1="50" y1="40" x2="230" y2="40" stroke="var(--border-subtle)" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="50" y1="160" x2="230" y2="160" stroke="var(--border-subtle)" strokeWidth="1" strokeDasharray="3 3" />
            <text x="140" y="195" textAnchor="middle" fill="var(--text-muted)" fontSize="10">Laminated Soft-Iron Core (Stops Eddy Currents)</text>

            <rect x="65" y="45" width="150" height="110" rx="8" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="5 4" />
            <text x="140" y="58" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">Mutual Flux Φ(t)</text>

            <g stroke="#3b82f6" strokeWidth="3.5" fill="none">
              <path d="M 25,65 Q 40,55 50,65" />
              <path d="M 25,85 Q 40,75 50,85" />
              <path d="M 25,105 Q 40,95 50,105" />
              <path d="M 25,125 Q 40,115 50,125" />
            </g>
            <text x="10" y="100" fill="#3b82f6" fontSize="11" fontWeight="bold">N_p</text>
            <text x="10" y="115" fill="var(--text-muted)" fontSize="9">V_p, I_p</text>

            <g stroke="#f43f5e" strokeWidth="3.5" fill="none">
              <path d="M 230,55 Q 240,45 255,55" />
              <path d="M 230,70 Q 240,60 255,70" />
              <path d="M 230,85 Q 240,75 255,85" />
              <path d="M 230,100 Q 240,90 255,100" />
              <path d="M 230,115 Q 240,105 255,115" />
              <path d="M 230,130 Q 240,120 255,130" />
            </g>
            <text x="260" y="90" fill="#f43f5e" fontSize="11" fontWeight="bold">N_s</text>
            <text x="260" y="105" fill="var(--text-muted)" fontSize="9">V_s, I_s</text>
          </svg>
        </div>

        <div className="w-full lg:w-1/2 space-y-2.5 text-xs">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1">
            <span className="font-bold text-amber-500 uppercase tracking-wide text-[10px]">Transformation Ratio (k):</span>
            <div className="font-mono text-xs text-[var(--text-primary)] font-bold">
              V_s / V_p = N_s / N_p = I_p / I_s = k
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <span className="font-bold block text-xs">Step-Up (k &gt; 1):</span>
              N_s &gt; N_p<br />
              V_s &gt; V_p<br />
              I_s &lt; I_p
            </div>

            <div className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400">
              <span className="font-bold block text-xs">Step-Down (k &lt; 1):</span>
              N_s &lt; N_p<br />
              V_s &lt; V_p<br />
              I_s &gt; I_p
            </div>
          </div>

          <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
            • <strong>Energy Conservation:</strong> Input Power = Output Power (V_p · I_p = V_s · I_s) in an ideal transformer.
          </p>
        </div>
      </div>
    );

    if (inline) return content;

    return (
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 sm:p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-3">
          <span className="p-1.5 rounded-lg bg-amber-500/15 text-amber-500">
            <Zap size={16} />
          </span>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">
              Transformer Core, Mutual Induction &amp; Flux Loop Diagram
            </h4>
            <p className="text-[11px] text-[var(--text-muted)]">
              Laminated soft-iron core with Primary (N_p) &amp; Secondary (N_s) windings
            </p>
          </div>
        </div>
        {content}
      </div>
    );
  }

  /* -------------------------------------------------------------
   * 3. MOVING COIL GALVANOMETER & RADIAL MAGNETIC FIELD
   * ------------------------------------------------------------- */
  if (diagramId === 'galvanometer-torque') {
    const content = (
      <div className="flex flex-col lg:flex-row items-center gap-6 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg width="280" height="200" viewBox="0 0 280 200" className="overflow-visible select-none">
            {svgDefs}
            <path d="M 20,40 L 70,40 A 65 65 0 0 0 70,160 L 20,160 Z" fill="rgba(244, 63, 94, 0.15)" stroke="#f43f5e" strokeWidth="2" />
            <text x="35" y="105" fill="#f43f5e" fontSize="16" fontWeight="bold">N</text>

            <path d="M 260,40 L 210,40 A 65 65 0 0 1 210,160 L 260,160 Z" fill="rgba(59, 130, 246, 0.15)" stroke="#3b82f6" strokeWidth="2" />
            <text x="235" y="105" fill="#3b82f6" fontSize="16" fontWeight="bold">S</text>

            <circle cx="140" cy="100" r="32" fill="var(--bg-elevated)" stroke="var(--text-muted)" strokeWidth="2" />
            <text x="140" y="97" textAnchor="middle" fill="var(--text-muted)" fontSize="9" fontWeight="bold">Soft-Iron</text>
            <text x="140" y="108" textAnchor="middle" fill="var(--text-muted)" fontSize="9">Core</text>

            <line x1="72" y1="70" x2="112" y2="85" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow-emerald)" />
            <line x1="70" y1="100" x2="108" y2="100" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow-emerald)" />
            <line x1="72" y1="130" x2="112" y2="115" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow-emerald)" />

            <line x1="168" y1="85" x2="208" y2="70" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow-emerald)" />
            <line x1="172" y1="100" x2="210" y2="100" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow-emerald)" />
            <line x1="168" y1="115" x2="208" y2="130" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow-emerald)" />

            <rect x="98" y="95" width="84" height="10" rx="3" fill="rgba(245, 158, 11, 0.4)" stroke="#f59e0b" strokeWidth="2" transform="rotate(-25 140 100)" />
            <text x="140" y="180" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">Radial Field: θ = 90° Everywhere</text>
          </svg>
        </div>

        <div className="w-full lg:w-1/2 space-y-2.5 text-xs">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1">
            <span className="font-bold text-amber-500 uppercase tracking-wide text-[10px]">Equilibrium of Torques:</span>
            <p className="text-[var(--text-secondary)] font-mono text-xs">
              Deflecting Torque = Restoring Torque<br />
              <span className="text-amber-400 font-bold">N I A B = C · θ</span>
            </p>
          </div>

          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1">
            <span className="font-bold text-blue-400 uppercase tracking-wide text-[10px]">Why Radial Field is Crucial:</span>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              In a parallel field, torque is τ = NIAB sinθ. Concave poles + soft iron core ensure the plane of the coil is <strong>always parallel to magnetic lines</strong> (θ = 90°), making τ maximum and constant!
            </p>
          </div>

          <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-center font-bold">
            I = (C / NAB) · θ ⟹ I ∝ θ (Linear Scale)
          </div>
        </div>
      </div>
    );

    if (inline) return content;

    return (
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 sm:p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-3">
          <span className="p-1.5 rounded-lg bg-amber-500/15 text-amber-500">
            <Compass size={16} />
          </span>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">
              Moving Coil Galvanometer: Radial Field &amp; Torque Mechanics
            </h4>
            <p className="text-[11px] text-[var(--text-muted)]">
              Why concave magnetic pole pieces ensure θ = 90° for linear current scale (I ∝ θ)
            </p>
          </div>
        </div>
        {content}
      </div>
    );
  }

  /* -------------------------------------------------------------
   * 4. ELECTRIC DIPOLE AXIAL & EQUATORIAL FIELDS
   * ------------------------------------------------------------- */
  if (diagramId === 'dipole-fields') {
    const activeDipole = subMode || dipoleMode;

    const axialContent = (
      <div className="flex flex-col lg:flex-row items-center gap-6 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg width="280" height="150" viewBox="0 0 280 150" className="overflow-visible select-none">
            {svgDefs}
            <line x1="10" y1="80" x2="270" y2="80" stroke="var(--border-subtle)" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="50" cy="80" r="14" fill="#3b82f6" />
            <text x="50" y="85" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">-q</text>
            <circle cx="110" cy="80" r="14" fill="#f43f5e" />
            <text x="110" y="85" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">+q</text>
            <line x1="50" y1="110" x2="110" y2="110" stroke="var(--text-muted)" strokeWidth="1.5" />
            <text x="80" y="125" textAnchor="middle" fill="var(--text-muted)" fontSize="10">2a</text>

            <circle cx="210" cy="80" r="4" fill="var(--text-primary)" />
            <text x="210" y="70" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="bold">P</text>

            <line x1="210" y1="80" x2="265" y2="80" stroke="#f43f5e" strokeWidth="2.5" markerEnd="url(#arrow-rose)" />
            <text x="245" y="65" fill="#f43f5e" fontSize="10" fontWeight="bold">E₊</text>

            <line x1="210" y1="80" x2="175" y2="80" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow-blue)" />
            <text x="175" y="65" fill="#3b82f6" fontSize="10" fontWeight="bold">E₋</text>
            
            <text x="210" y="115" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="bold">E_net = E₊ - E₋ (Along p⃗)</text>
          </svg>
        </div>

        <div className="w-full lg:w-1/2 space-y-2.5 text-xs">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] font-mono space-y-1">
            <span className="text-[10px] font-bold text-amber-500 uppercase">Short Dipole Result (r ≫ a):</span>
            <div className="text-xs font-bold text-emerald-400">
              E_axial = (1 / 4πε₀) · (2p / r³)
            </div>
            <div className="text-[11px] text-[var(--text-secondary)]">
              Direction is PARALLEL to dipole moment p⃗.
            </div>
          </div>
        </div>
      </div>
    );

    const eqContent = (
      <div className="flex flex-col lg:flex-row items-center gap-6 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg width="280" height="180" viewBox="0 0 280 180" className="overflow-visible select-none">
            {svgDefs}
            <line x1="60" y1="140" x2="200" y2="140" stroke="var(--border-subtle)" strokeWidth="1.5" />
            <circle cx="80" cy="140" r="12" fill="#3b82f6" />
            <text x="80" y="144" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">-q</text>
            <circle cx="180" cy="140" r="12" fill="#f43f5e" />
            <text x="180" y="144" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">+q</text>

            <circle cx="130" cy="40" r="4" fill="var(--text-primary)" />
            <text x="130" y="30" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="bold">P (r)</text>

            <line x1="80" y1="140" x2="130" y2="40" stroke="var(--border-subtle)" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="180" y1="140" x2="130" y2="40" stroke="var(--border-subtle)" strokeWidth="1" strokeDasharray="3 3" />

            <line x1="130" y1="40" x2="165" y2="15" stroke="#f43f5e" strokeWidth="2" markerEnd="url(#arrow-rose)" />
            <text x="170" y="20" fill="#f43f5e" fontSize="9" fontWeight="bold">E₊</text>

            <line x1="130" y1="40" x2="95" y2="65" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow-blue)" />
            <text x="85" y="70" fill="#3b82f6" fontSize="9" fontWeight="bold">E₋</text>

            <line x1="130" y1="40" x2="70" y2="40" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrow-emerald)" />
            <text x="50" y="35" fill="#10b981" fontSize="10" fontWeight="bold">E_net (Opposite p⃗)</text>
          </svg>
        </div>

        <div className="w-full lg:w-1/2 space-y-2.5 text-xs">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] font-mono space-y-1">
            <span className="text-[10px] font-bold text-amber-500 uppercase">Short Dipole Result (r ≫ a):</span>
            <div className="text-xs font-bold text-emerald-400">
              E_eq = (1 / 4πε₀) · (p / r³)
            </div>
            <div className="text-[11px] text-amber-400 font-bold mt-1">
              E_axial = 2 · E_eq  (Twice the equatorial strength!)
            </div>
          </div>
        </div>
      </div>
    );

    if (inline) {
      return activeDipole === 'axial' ? axialContent : eqContent;
    }

    return (
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 sm:p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-blue-500/15 text-blue-500">
              <Zap size={16} />
            </span>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                Electric Dipole Field Geometry (Axial vs Equatorial)
              </h4>
              <p className="text-[11px] text-[var(--text-muted)]">
                Vector resolution &amp; inverse-cube distance relationship (E ∝ 1/r³)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-[var(--bg-surface)] p-1 rounded-xl border border-[var(--border-subtle)]">
            <button
              onClick={() => setDipoleMode('axial')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                dipoleMode === 'axial' 
                  ? 'bg-[var(--accent-primary)] text-white shadow-xs' 
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Axial Position
            </button>
            <button
              onClick={() => setDipoleMode('equatorial')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                dipoleMode === 'equatorial' 
                  ? 'bg-[var(--accent-primary)] text-white shadow-xs' 
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Equatorial Position
            </button>
          </div>
        </div>

        {activeDipole === 'axial' ? axialContent : eqContent}
      </div>
    );
  }

  /* -------------------------------------------------------------
   * 5. WHEATSTONE BRIDGE BALANCED CIRCUIT
   * ------------------------------------------------------------- */
  if (diagramId === 'wheatstone-bridge') {
    const content = (
      <div className="flex flex-col lg:flex-row items-center gap-6 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg width="260" height="190" viewBox="0 0 260 190" className="overflow-visible select-none">
            {svgDefs}
            <line x1="40" y1="95" x2="130" y2="25" stroke="#3b82f6" strokeWidth="2.5" />
            <text x="75" y="50" fill="#3b82f6" fontSize="12" fontWeight="bold">P</text>

            <line x1="130" y1="25" x2="220" y2="95" stroke="#10b981" strokeWidth="2.5" />
            <text x="180" y="50" fill="#10b981" fontSize="12" fontWeight="bold">Q</text>

            <line x1="40" y1="95" x2="130" y2="165" stroke="#f59e0b" strokeWidth="2.5" />
            <text x="75" y="145" fill="#f59e0b" fontSize="12" fontWeight="bold">R</text>

            <line x1="130" y1="165" x2="220" y2="95" stroke="#a855f7" strokeWidth="2.5" />
            <text x="180" y="145" fill="#a855f7" fontSize="12" fontWeight="bold">S</text>

            <line x1="130" y1="25" x2="130" y2="165" stroke="var(--text-muted)" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="130" cy="95" r="16" fill="var(--bg-elevated)" stroke="#f43f5e" strokeWidth="2" />
            <text x="130" y="100" textAnchor="middle" fill="#f43f5e" fontSize="12" fontWeight="bold">G</text>

            <text x="25" y="98" fill="var(--text-primary)" fontSize="11" fontWeight="bold">A</text>
            <text x="130" y="15" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="bold">B</text>
            <text x="230" y="98" fill="var(--text-primary)" fontSize="11" fontWeight="bold">C</text>
            <text x="130" y="180" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="bold">D</text>

            <text x="130" y="125" textAnchor="middle" fill="#f43f5e" fontSize="9" fontWeight="bold">I_g = 0</text>
          </svg>
        </div>

        <div className="w-full lg:w-1/2 space-y-2 text-xs">
          <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] font-mono">
            <span className="text-[10px] text-amber-500 font-bold block">Balance Condition: V_B = V_D</span>
            <p className="text-[var(--text-secondary)] text-[11px] mt-0.5">
              Loop ABDA: -I₁P + I₂R = 0 ⟹ I₁P = I₂R<br />
              Loop BCDB: -I₁Q + I₂S = 0 ⟹ I₁Q = I₂S
            </p>
          </div>

          <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-center font-bold">
            Dividing loops: P / Q = R / S
          </div>
        </div>
      </div>
    );

    if (inline) return content;

    return (
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 sm:p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-3">
          <span className="p-1.5 rounded-lg bg-emerald-500/15 text-emerald-500">
            <Activity size={16} />
          </span>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">
              Wheatstone Bridge Null-Deflection Circuit
            </h4>
            <p className="text-[11px] text-[var(--text-muted)]">
              Loop rule KVL derivations leading to P/Q = R/S balance condition
            </p>
          </div>
        </div>
        {content}
      </div>
    );
  }

  /* -------------------------------------------------------------
   * 6. LCR PHASOR DIAGRAM & RESONANCE CURVE
   * ------------------------------------------------------------- */
  if (diagramId === 'lcr-circuit') {
    const activeLcr = subMode || lcrMode;

    const phasorContent = (
      <div className="flex flex-col lg:flex-row items-center gap-6 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg width="260" height="190" viewBox="0 0 260 190" className="overflow-visible select-none">
            {svgDefs}
            <line x1="50" y1="130" x2="190" y2="130" stroke="#3b82f6" strokeWidth="2.5" markerEnd="url(#arrow-blue)" />
            <text x="195" y="134" fill="#3b82f6" fontSize="11" fontWeight="bold">V_R (I₀R)</text>

            <line x1="50" y1="130" x2="50" y2="30" stroke="#a855f7" strokeWidth="2.5" markerEnd="url(#arrow-purple)" />
            <text x="25" y="25" fill="#a855f7" fontSize="10" fontWeight="bold">V_L - V_C</text>

            <line x1="50" y1="130" x2="190" y2="30" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrow-emerald)" />
            <text x="140" y="65" fill="#10b981" fontSize="12" fontWeight="bold">V₀ = I₀Z</text>

            <path d="M 90,130 A 40 40 0 0 0 85,105" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="95" y="118" fill="#f59e0b" fontSize="11" fontWeight="bold">φ</text>
          </svg>
        </div>

        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
            <span className="font-bold text-amber-500 block mb-1">Pythagorean Impedance:</span>
            Z = √[R² + (X_L - X_C)²]<br />
            tan φ = (X_L - X_C) / R
          </div>
        </div>
      </div>
    );

    const resContent = (
      <div className="flex flex-col lg:flex-row items-center gap-6 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg width="260" height="170" viewBox="0 0 260 170" className="overflow-visible select-none">
            {svgDefs}
            <line x1="30" y1="140" x2="240" y2="140" stroke="var(--text-muted)" strokeWidth="1.5" />
            <line x1="30" y1="140" x2="30" y2="20" stroke="var(--text-muted)" strokeWidth="1.5" />
            <text x="245" y="145" fill="var(--text-muted)" fontSize="10">ω</text>
            <text x="20" y="20" fill="var(--text-muted)" fontSize="10">I₀</text>

            <path d="M 40,135 Q 110,130 130,35 Q 150,130 220,135" fill="rgba(16, 185, 129, 0.1)" stroke="#10b981" strokeWidth="2.5" />
            
            <line x1="130" y1="140" x2="130" y2="35" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="130" y="155" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">ω₀ = 1/√(LC)</text>
            <text x="130" y="25" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">I_max = V₀/R</text>
          </svg>
        </div>

        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
            <span className="font-bold text-emerald-400 block mb-1">At Resonance:</span>
            • X_L = X_C ⟹ Z_min = R<br />
            • Current I_max = V₀ / R<br />
            • Power factor cos φ = 1 (purely resistive)
          </div>
        </div>
      </div>
    );

    if (inline) {
      return activeLcr === 'phasor' ? phasorContent : resContent;
    }

    return (
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 sm:p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-purple-500/15 text-purple-500">
              <Activity size={16} />
            </span>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                Series LCR AC Circuit: Phasor Diagram &amp; Electrical Resonance
              </h4>
              <p className="text-[11px] text-[var(--text-muted)]">
                Phase relationships between R, L, C and resonance frequency formula
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-[var(--bg-surface)] p-1 rounded-xl border border-[var(--border-subtle)]">
            <button
              onClick={() => setLcrMode('phasor')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                lcrMode === 'phasor' 
                  ? 'bg-[var(--accent-primary)] text-white shadow-xs' 
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Phasor Diagram
            </button>
            <button
              onClick={() => setLcrMode('resonance')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                lcrMode === 'resonance' 
                  ? 'bg-[var(--accent-primary)] text-white shadow-xs' 
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Resonance Curve
            </button>
          </div>
        </div>

        {activeLcr === 'phasor' ? phasorContent : resContent}
      </div>
    );
  }

  /* -------------------------------------------------------------
   * 7. GALVANOMETER CONVERSION TO AMMETER & VOLTMETER
   * ------------------------------------------------------------- */
  if (diagramId === 'galvanometer-conversion') {
    const activeGalv = subMode || galvMode;

    const ammeterContent = (
      <div className="flex flex-col lg:flex-row items-center gap-6 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg width="270" height="150" viewBox="0 0 270 150" className="overflow-visible select-none">
            {svgDefs}
            <line x1="20" y1="75" x2="60" y2="75" stroke="#3b82f6" strokeWidth="2.5" markerEnd="url(#arrow-blue)" />
            <text x="35" y="65" fill="#3b82f6" fontSize="12" fontWeight="bold">I</text>

            <path d="M 60,75 L 80,35 L 190,35 L 210,75" fill="none" stroke="#f43f5e" strokeWidth="2" />
            <circle cx="135" cy="35" r="16" fill="var(--bg-elevated)" stroke="#f43f5e" strokeWidth="2" />
            <text x="135" y="40" textAnchor="middle" fill="#f43f5e" fontSize="12" fontWeight="bold">G</text>
            <text x="135" y="15" textAnchor="middle" fill="#f43f5e" fontSize="10">I_g</text>

            <path d="M 60,75 L 80,115 L 190,115 L 210,75" fill="none" stroke="#10b981" strokeWidth="2" />
            <rect x="110" y="105" width="50" height="20" rx="3" fill="var(--bg-elevated)" stroke="#10b981" strokeWidth="2" />
            <text x="135" y="119" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="bold">Shunt S</text>
            <text x="135" y="142" textAnchor="middle" fill="#10b981" fontSize="10">I - I_g (Majority)</text>

            <line x1="210" y1="75" x2="250" y2="75" stroke="#3b82f6" strokeWidth="2.5" markerEnd="url(#arrow-blue)" />
            <text x="230" y="65" fill="#3b82f6" fontSize="12" fontWeight="bold">I</text>
          </svg>
        </div>

        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1">
            <span className="text-[10px] text-emerald-400 font-bold block">Shunt Formula:</span>
            <div className="text-xs text-[var(--text-primary)] font-bold">
              S = (I_g · G) / (I - I_g)
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] font-sans mt-1">
              Ideal Ammeter Resistance = <strong>0</strong> (connected in series with circuit).
            </p>
          </div>
        </div>
      </div>
    );

    const voltmeterContent = (
      <div className="flex flex-col lg:flex-row items-center gap-6 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg width="270" height="130" viewBox="0 0 270 130" className="overflow-visible select-none">
            {svgDefs}
            <line x1="20" y1="65" x2="70" y2="65" stroke="#3b82f6" strokeWidth="2" />
            <circle cx="90" cy="65" r="18" fill="var(--bg-elevated)" stroke="#f43f5e" strokeWidth="2" />
            <text x="90" y="70" textAnchor="middle" fill="#f43f5e" fontSize="13" fontWeight="bold">G</text>

            <line x1="108" y1="65" x2="145" y2="65" stroke="#3b82f6" strokeWidth="2" />

            <rect x="145" y="52" width="65" height="26" rx="4" fill="var(--bg-elevated)" stroke="#a855f7" strokeWidth="2" />
            <text x="177" y="69" textAnchor="middle" fill="#a855f7" fontSize="12" fontWeight="bold">High R</text>

            <line x1="210" y1="65" x2="250" y2="65" stroke="#3b82f6" strokeWidth="2" />

            <text x="135" y="110" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">Total Voltage V across (G + R)</text>
          </svg>
        </div>

        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1">
            <span className="text-[10px] text-purple-400 font-bold block">Series Resistor Formula:</span>
            <div className="text-xs text-[var(--text-primary)] font-bold">
              R = (V / I_g) - G
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] font-sans mt-1">
              Ideal Voltmeter Resistance = <strong>∞</strong> (connected in parallel with component).
            </p>
          </div>
        </div>
      </div>
    );

    if (inline) {
      return activeGalv === 'ammeter' ? ammeterContent : voltmeterContent;
    }

    return (
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 sm:p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-emerald-500/15 text-emerald-500">
              <Scale size={16} />
            </span>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                Galvanometer Modification Circuit Visualizer
              </h4>
              <p className="text-[11px] text-[var(--text-muted)]">
                Parallel Shunt (Ammeter) vs Series Multiplier (Voltmeter)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-[var(--bg-surface)] p-1 rounded-xl border border-[var(--border-subtle)]">
            <button
              onClick={() => setGalvMode('ammeter')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                galvMode === 'ammeter' 
                  ? 'bg-[var(--accent-primary)] text-white shadow-xs' 
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Ammeter (Parallel Shunt)
            </button>
            <button
              onClick={() => setGalvMode('voltmeter')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                galvMode === 'voltmeter' 
                  ? 'bg-[var(--accent-primary)] text-white shadow-xs' 
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Voltmeter (Series High R)
            </button>
          </div>
        </div>

        {activeGalv === 'ammeter' ? ammeterContent : voltmeterContent}
      </div>
    );
  }

  /* -------------------------------------------------------------
   * 8. FORCE BETWEEN PARALLEL CURRENT-CARRYING CONDUCTORS
   * ------------------------------------------------------------- */
  if (diagramId === 'parallel-wires') {
    const activeParallel = subMode || parallelMode;

    const parallelContent = (
      <div className="flex flex-col lg:flex-row items-center gap-6 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg width="270" height="180" viewBox="0 0 270 180" className="overflow-visible select-none">
            {svgDefs}
            <line x1="80" y1="20" x2="80" y2="160" stroke="#3b82f6" strokeWidth="4" />
            <line x1="80" y1="60" x2="80" y2="40" stroke="#ffffff" strokeWidth="2" markerEnd="url(#arrow-blue)" />
            <text x="50" y="30" fill="#3b82f6" fontSize="12" fontWeight="bold">I₁</text>

            <line x1="190" y1="20" x2="190" y2="160" stroke="#10b981" strokeWidth="4" />
            {activeParallel === 'attractive' ? (
              <line x1="190" y1="60" x2="190" y2="40" stroke="#ffffff" strokeWidth="2" markerEnd="url(#arrow-emerald)" />
            ) : (
              <line x1="190" y1="120" x2="190" y2="140" stroke="#ffffff" strokeWidth="2" markerEnd="url(#arrow-emerald)" />
            )}
            <text x="205" y={activeParallel === 'attractive' ? 30 : 155} fill="#10b981" fontSize="12" fontWeight="bold">I₂</text>

            <line x1="80" y1="90" x2="190" y2="90" stroke="var(--text-muted)" strokeWidth="1" strokeDasharray="3 3" />
            <text x="135" y="82" textAnchor="middle" fill="var(--text-muted)" fontSize="11" fontWeight="bold">d</text>

            {activeParallel === 'attractive' ? (
              <>
                <line x1="80" y1="90" x2="120" y2="90" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrow-amber)" />
                <text x="100" y="108" fill="#f59e0b" fontSize="10" fontWeight="bold">F₁₂</text>
                <line x1="190" y1="90" x2="150" y2="90" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrow-amber)" />
                <text x="160" y="108" fill="#f59e0b" fontSize="10" fontWeight="bold">F₂₁</text>
                <text x="135" y="145" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="bold">Attractive Force</text>
              </>
            ) : (
              <>
                <line x1="80" y1="90" x2="40" y2="90" stroke="#f43f5e" strokeWidth="3" markerEnd="url(#arrow-rose)" />
                <text x="50" y="108" fill="#f43f5e" fontSize="10" fontWeight="bold">F₁₂</text>
                <line x1="190" y1="90" x2="230" y2="90" stroke="#f43f5e" strokeWidth="3" markerEnd="url(#arrow-rose)" />
                <text x="200" y="108" fill="#f43f5e" fontSize="10" fontWeight="bold">F₂₁</text>
                <text x="135" y="145" textAnchor="middle" fill="#f43f5e" fontSize="11" fontWeight="bold">Repulsive Force</text>
              </>
            )}
          </svg>
        </div>

        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1">
            <span className="text-[10px] text-amber-500 font-bold block">Force per unit length:</span>
            <div className="text-xs text-[var(--text-primary)] font-bold">
              F / L = (μ₀ · I₁ · I₂) / (2π · d)
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] font-sans mt-1">
              <strong>Standard 1 Ampere:</strong> Produces F/L = 2 × 10⁻⁷ N/m when d = 1 m in vacuum.
            </p>
          </div>
        </div>
      </div>
    );

    if (inline) return parallelContent;

    return (
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 sm:p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-blue-500/15 text-blue-500">
              <Compass size={16} />
            </span>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                Parallel Conductors: Magnetic Interaction &amp; 1 Ampere Force
              </h4>
              <p className="text-[11px] text-[var(--text-muted)]">
                Parallel currents attract (Fleming&apos;s Left-Hand Rule) vs Antiparallel repel
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-[var(--bg-surface)] p-1 rounded-xl border border-[var(--border-subtle)]">
            <button
              onClick={() => setParallelMode('attractive')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                parallelMode === 'attractive' 
                  ? 'bg-emerald-600 text-white shadow-xs' 
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Parallel (Attractive)
            </button>
            <button
              onClick={() => setParallelMode('repulsive')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                parallelMode === 'repulsive' 
                  ? 'bg-rose-600 text-white shadow-xs' 
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Antiparallel (Repulsive)
            </button>
          </div>
        </div>
        {parallelContent}
      </div>
    );
  }

  /* -------------------------------------------------------------
   * 9. FORCE ON CONDUCTOR IN B-FIELD (F = ILB sinθ)
   * ------------------------------------------------------------- */
  if (diagramId === 'force-conductor') {
    const content = (
      <div className="flex flex-col lg:flex-row items-center gap-6 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg width="270" height="170" viewBox="0 0 270 170" className="overflow-visible select-none">
            {svgDefs}
            <line x1="30" y1="40" x2="240" y2="40" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#arrow-emerald)" />
            <line x1="30" y1="85" x2="240" y2="85" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#arrow-emerald)" />
            <line x1="30" y1="130" x2="240" y2="130" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#arrow-emerald)" />
            <text x="245" y="44" fill="#10b981" fontSize="11" fontWeight="bold">B⃗</text>

            <line x1="70" y1="140" x2="190" y2="40" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" />
            <line x1="120" y1="98" x2="145" y2="78" stroke="#ffffff" strokeWidth="2.5" markerEnd="url(#arrow-amber)" />
            <text x="135" y="70" fill="#f59e0b" fontSize="12" fontWeight="bold">I (Length L)</text>

            <path d="M 160,65 A 25 25 0 0 0 170,85" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" />
            <text x="175" y="78" fill="var(--text-muted)" fontSize="10">θ</text>

            <line x1="130" y1="90" x2="130" y2="20" stroke="#f43f5e" strokeWidth="3" markerEnd="url(#arrow-rose)" />
            <text x="138" y="25" fill="#f43f5e" fontSize="11" fontWeight="bold">F⃗ = I(L⃗ × B⃗)</text>
          </svg>
        </div>

        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1">
            <span className="text-[10px] text-amber-500 font-bold block uppercase font-sans">Fleming&apos;s Left-Hand Rule:</span>
            <div className="text-xs text-[var(--text-primary)] font-bold">
              F = I · L · B · sin θ
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] font-sans mt-1">
              • <strong>θ = 90° (Perpendicular):</strong> Maximum Force F_max = ILB.<br />
              • <strong>θ = 0° / 180° (Parallel):</strong> Zero Force F = 0.
            </p>
          </div>
        </div>
      </div>
    );

    if (inline) return content;
    return (
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 sm:p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-3">
          <span className="p-1.5 rounded-lg bg-amber-500/15 text-amber-500"><Compass size={16} /></span>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">Force on Current-Carrying Conductor in Magnetic Field</h4>
            <p className="text-[11px] text-[var(--text-muted)]">F = I(L × B) with Fleming&apos;s Left-Hand Rule direction</p>
          </div>
        </div>
        {content}
      </div>
    );
  }

  /* -------------------------------------------------------------
   * 10. FARADAY & LENZ'S LAW
   * ------------------------------------------------------------- */
  if (diagramId === 'faraday-lenz') {
    const content = (
      <div className="flex flex-col lg:flex-row items-center gap-6 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg width="270" height="170" viewBox="0 0 270 170" className="overflow-visible select-none">
            {svgDefs}
            <g stroke="#3b82f6" strokeWidth="3" fill="none">
              <ellipse cx="60" cy="85" rx="14" ry="40" />
              <ellipse cx="85" cy="85" rx="14" ry="40" />
              <ellipse cx="110" cy="85" rx="14" ry="40" />
              <ellipse cx="135" cy="85" rx="14" ry="40" />
            </g>

            <path d="M 60,125 L 60,150 L 98,150" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" />
            <path d="M 135,125 L 135,150 L 102,150" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" />
            <circle cx="100" cy="150" r="10" fill="var(--bg-elevated)" stroke="#f43f5e" strokeWidth="1.5" />
            <text x="100" y="154" textAnchor="middle" fill="#f43f5e" fontSize="9" fontWeight="bold">G</text>

            <rect x="180" y="65" width="40" height="40" fill="#f43f5e" stroke="#f43f5e" strokeWidth="1.5" rx="3" />
            <rect x="220" y="65" width="40" height="40" fill="#3b82f6" stroke="#3b82f6" strokeWidth="1.5" rx="3" />
            <text x="200" y="90" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold">N</text>
            <text x="240" y="90" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold">S</text>

            <line x1="190" y1="45" x2="160" y2="45" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrow-amber)" />
            <text x="175" y="38" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">v⃗ (Motion)</text>

            <text x="142" y="70" fill="#10b981" fontSize="12" fontWeight="bold">N</text>
            <text x="100" y="35" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">Repulsive Opposition (Lenz)</text>
          </svg>
        </div>

        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1">
            <span className="text-[10px] text-emerald-400 font-bold block uppercase font-sans">Faraday-Lenz Law:</span>
            <div className="text-xs text-[var(--text-primary)] font-bold">
              ε = - dΦ_B / dt = - N (ΔΦ / Δt)
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] font-sans mt-1">
              Negative sign signifies <strong>Lenz&apos;s Law</strong>: Induced current opposes the change in flux (conservation of energy).
            </p>
          </div>
        </div>
      </div>
    );

    if (inline) return content;
    return (
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 sm:p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-3">
          <span className="p-1.5 rounded-lg bg-emerald-500/15 text-emerald-500"><Zap size={16} /></span>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">Faraday&apos;s &amp; Lenz&apos;s Law of Induction</h4>
            <p className="text-[11px] text-[var(--text-muted)]">Induced EMF opposing flux change</p>
          </div>
        </div>
        {content}
      </div>
    );
  }

  /* -------------------------------------------------------------
   * 11. DISPLACEMENT CURRENT IN CAPACITOR
   * ------------------------------------------------------------- */
  if (diagramId === 'displacement-current') {
    const content = (
      <div className="flex flex-col lg:flex-row items-center gap-6 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg width="270" height="170" viewBox="0 0 270 170" className="overflow-visible select-none">
            {svgDefs}
            <rect x="90" y="30" width="8" height="110" fill="#3b82f6" rx="2" />
            <rect x="170" y="30" width="8" height="110" fill="#f43f5e" rx="2" />
            <text x="94" y="22" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="bold">+q</text>
            <text x="174" y="22" textAnchor="middle" fill="#f43f5e" fontSize="10" fontWeight="bold">-q</text>

            <line x1="20" y1="85" x2="90" y2="85" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrow-blue)" />
            <text x="45" y="75" fill="#3b82f6" fontSize="11" fontWeight="bold">I_c (Conduction)</text>

            <line x1="178" y1="85" x2="250" y2="85" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrow-blue)" />
            <text x="200" y="75" fill="#3b82f6" fontSize="11" fontWeight="bold">I_c</text>

            <line x1="102" y1="55" x2="165" y2="55" stroke="#a855f7" strokeWidth="2" strokeDasharray="3 3" markerEnd="url(#arrow-purple)" />
            <line x1="102" y1="85" x2="165" y2="85" stroke="#a855f7" strokeWidth="2" strokeDasharray="3 3" markerEnd="url(#arrow-purple)" />
            <line x1="102" y1="115" x2="165" y2="115" stroke="#a855f7" strokeWidth="2" strokeDasharray="3 3" markerEnd="url(#arrow-purple)" />
            <text x="134" y="75" textAnchor="middle" fill="#a855f7" fontSize="10" fontWeight="bold">E(t) Gap</text>
            <text x="134" y="105" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">I_d = ε₀ dΦ_E/dt</text>
          </svg>
        </div>

        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1">
            <span className="text-[10px] text-purple-400 font-bold block uppercase font-sans">Ampere-Maxwell Law Continuity:</span>
            <div className="text-xs text-[var(--text-primary)] font-bold">
              I_d = ε₀ · (dΦ_E / dt) = I_c
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] font-sans mt-1">
              • Outside plates: Conduction current I_c.<br />
              • Inside dielectric gap: Displacement current I_d. Current remains continuous!
            </p>
          </div>
        </div>
      </div>
    );

    if (inline) return content;
    return (
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 sm:p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-3">
          <span className="p-1.5 rounded-lg bg-purple-500/15 text-purple-500"><Zap size={16} /></span>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">Displacement Current &amp; Ampere-Maxwell Law</h4>
            <p className="text-[11px] text-[var(--text-muted)]">Current continuity across charging capacitor</p>
          </div>
        </div>
        {content}
      </div>
    );
  }

  /* -------------------------------------------------------------
   * 12. EQUIPOTENTIAL SURFACES
   * ------------------------------------------------------------- */
  if (diagramId === 'equipotential-surfaces') {
    const activeEqui = subMode || equiMode;

    // 1. Two Equipotential Surfaces & Potential Gradient (NCERT Fig 2.10: Test charge moving between two surfaces)
    const twoSurfacesContent = (
      <div className="flex flex-col lg:flex-row items-center gap-6 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg width="290" height="200" viewBox="0 0 290 200" className="overflow-visible select-none">
            {svgDefs}
            {/* Surface B (Lower Plane: Potential V - dV or V + δV) */}
            <polygon points="35,165 210,165 260,125 85,125" fill="rgba(16, 185, 129, 0.08)" stroke="#10b981" strokeWidth="1.8" strokeDasharray="4 3" />
            <text x="45" y="156" fill="#10b981" fontSize="10" fontWeight="bold">Surface B (Potential V - dV)</text>

            {/* Surface A (Upper Plane: Potential V) */}
            <polygon points="35,90 210,90 260,50 85,50" fill="rgba(16, 185, 129, 0.16)" stroke="#10b981" strokeWidth="2" />
            <text x="45" y="82" fill="#10b981" fontSize="10" fontWeight="bold">Surface A (Potential V)</text>

            {/* Normal line & distance dr connecting Surface B to Surface A */}
            <line x1="145" y1="140" x2="145" y2="70" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
            {/* Right angle symbol on Surface A */}
            <path d="M 145,80 L 153,80 L 153,70" fill="none" stroke="#f59e0b" strokeWidth="1.2" />
            <text x="156" y="110" fill="#f59e0b" fontSize="11" fontWeight="bold">dr (or δl)</text>

            {/* Electric Field Vector E pointing downward (steepest decrease of potential) */}
            <line x1="100" y1="45" x2="100" y2="155" stroke="#3b82f6" strokeWidth="2.5" markerEnd="url(#arrow-blue)" />
            <text x="70" y="105" fill="#3b82f6" fontSize="11" fontWeight="bold">E⃗ ⟂ V</text>
            <text x="50" y="118" fill="var(--text-muted)" fontSize="8">(Downward)</text>

            {/* Unit normal vector n̂ */}
            <line x1="145" y1="70" x2="145" y2="40" stroke="#a855f7" strokeWidth="1.8" markerEnd="url(#arrow-purple)" />
            <text x="152" y="42" fill="#a855f7" fontSize="10" fontWeight="bold">n̂ (Normal)</text>

            {/* Test Charge +q₀ at Surface B */}
            <circle cx="145" cy="140" r="7" fill="#f43f5e" />
            <text x="145" y="143" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">+q₀</text>

            {/* External Force moving +q₀ upward from B to A */}
            <line x1="145" y1="130" x2="145" y2="78" stroke="#f43f5e" strokeWidth="1.8" markerEnd="url(#arrow-rose)" />
            <text x="195" y="125" fill="#f43f5e" fontSize="9" fontWeight="bold">F⃗_ext = -q₀E⃗</text>
            <text x="195" y="137" fill="var(--text-muted)" fontSize="8">Displacement against E⃗</text>
          </svg>
        </div>

        <div className="w-full lg:w-1/2 space-y-2.5 text-xs">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1.5">
            <span className="text-[10px] text-emerald-400 font-bold block uppercase font-mono">
              NCERT Fig. 2.10: Test Charge Between Surfaces
            </span>
            <div className="text-xs text-[var(--text-primary)] font-bold">
              dW = |F⃗_ext| · dr = q₀ E dr
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
              Work done per unit charge in displacing +q₀ from surface B to surface A against electric field E⃗ equals the potential difference:
            </p>
            <div className="font-mono text-[11px] text-amber-400">
              dW = q₀ (V_A - V_B) = q₀ [V - (V - dV)] = q₀ dV
            </div>
            <div className="font-mono text-[11px] text-emerald-400 font-bold bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/30 text-center">
              -q₀ dV = q₀ E dr ⟹ E = -dV / dr
            </div>
          </div>

          <div className="text-[11px] text-[var(--text-secondary)] space-y-1">
            <p>• <strong>Negative Sign:</strong> E⃗ points in the direction of steepest rate of decrease of potential.</p>
            <p>• <strong>Magnitude:</strong> |E| equals potential change per unit normal distance perpendicular to surfaces.</p>
          </div>
        </div>
      </div>
    );

    // 2. Proof that Electric Field is Perpendicular to Equipotential Surface
    const normalProofContent = (
      <div className="flex flex-col lg:flex-row items-center gap-6 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg width="290" height="200" viewBox="0 0 290 200" className="overflow-visible select-none">
            {svgDefs}
            {/* Equipotential Surface S (V = const) */}
            <polygon points="35,160 215,160 265,95 85,95" fill="rgba(16, 185, 129, 0.12)" stroke="#10b981" strokeWidth="2" />
            <text x="45" y="178" fill="#10b981" fontSize="10" fontWeight="bold">Equipotential Surface S (V = constant)</text>

            {/* Displacement along the surface between Points A and B */}
            <circle cx="95" cy="128" r="5" fill="#f43f5e" />
            <text x="86" y="125" fill="var(--text-primary)" fontSize="10" fontWeight="bold">A</text>

            <circle cx="190" cy="128" r="4" fill="#10b981" />
            <text x="198" y="125" fill="var(--text-primary)" fontSize="10" fontWeight="bold">B</text>

            {/* Displacement vector dr along surface */}
            <line x1="95" y1="128" x2="182" y2="128" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-emerald)" />
            <text x="140" y="142" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">dr⃗ (along surface)</text>

            {/* Test Charge +q₀ at point A */}
            <text x="75" y="145" fill="#f43f5e" fontSize="9" fontWeight="bold">+q₀</text>

            {/* Hypothetical Electric Field Vector E at angle θ */}
            <line x1="95" y1="128" x2="165" y2="45" stroke="#3b82f6" strokeWidth="2.5" markerEnd="url(#arrow-blue)" />
            <text x="172" y="45" fill="#3b82f6" fontSize="11" fontWeight="bold">E⃗</text>

            {/* Tangential component along surface */}
            <line x1="95" y1="128" x2="150" y2="128" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3 2" />
            <text x="145" y="116" fill="#3b82f6" fontSize="9" fontWeight="bold">E_∥ = E cos θ</text>

            {/* Surface Normal n̂ */}
            <line x1="95" y1="128" x2="95" y2="35" stroke="#a855f7" strokeWidth="1.8" strokeDasharray="3 3" markerEnd="url(#arrow-purple)" />
            <text x="98" y="32" fill="#a855f7" fontSize="10" fontWeight="bold">n̂ (Surface Normal)</text>

            {/* Angle arc for θ between dr and E */}
            <path d="M 125,128 A 30 30 0 0 0 118,102" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="130" y="108" fill="#f59e0b" fontSize="10" fontWeight="bold">θ = 90°</text>
          </svg>
        </div>

        <div className="w-full lg:w-1/2 space-y-2.5 text-xs">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1.5">
            <span className="text-[10px] text-emerald-400 font-bold block uppercase font-mono">
              Proof: Electric Field is Perpendicular
            </span>
            <div className="text-xs text-[var(--text-primary)] font-bold">
              W_AB = q₀ (V_B - V_A) = 0
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
              Because electrostatic potential is uniform on the surface (V_A = V_B), moving test charge +q₀ between any two points requires strictly zero work:
            </p>
            <div className="font-mono text-[11px] text-amber-400">
              W = ∫ F⃗ · dr⃗ = q₀ (E⃗ · dr⃗) = q₀ E dr cos θ = 0
            </div>
            <div className="font-mono text-[11px] text-emerald-400 font-bold bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/30 text-center">
              Since E ≠ 0 and dr ≠ 0 ⟹ cos θ = 0 ⟹ θ = 90°
            </div>
          </div>

          <div className="text-[11px] text-[var(--text-secondary)] space-y-1">
            <p>• <strong>Zero Tangential Component:</strong> E_∥ = E cos 90° = 0 everywhere on the surface.</p>
            <p>• <strong>Normal Vector:</strong> E⃗ must be strictly oriented along normal unit vector n̂.</p>
          </div>
        </div>
      </div>
    );

    // 3. Shapes & Geometries (Point charge spheres & uniform field planes)
    const geometryContent = (
      <div className="flex flex-col lg:flex-row items-center gap-6 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg width="270" height="170" viewBox="0 0 270 170" className="overflow-visible select-none">
            {svgDefs}
            <circle cx="80" cy="85" r="55" fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="80" cy="85" r="38" fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="80" cy="85" r="20" fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="80" cy="85" r="8" fill="#f43f5e" />
            <text x="80" y="89" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">+q</text>
            <line x1="80" y1="85" x2="145" y2="85" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arrow-blue)" />
            <line x1="80" y1="85" x2="80" y2="20" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arrow-blue)" />
            <text x="80" y="155" textAnchor="middle" fill="#10b981" fontSize="10">Point Charge: Spheres</text>

            <line x1="180" y1="35" x2="180" y2="135" stroke="#10b981" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="210" y1="35" x2="210" y2="135" stroke="#10b981" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="240" y1="35" x2="240" y2="135" stroke="#10b981" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="165" y1="85" x2="255" y2="85" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow-blue)" />
            <text x="210" y="155" textAnchor="middle" fill="#10b981" fontSize="10">Uniform E: Planes</text>
            <text x="255" y="80" fill="#3b82f6" fontSize="10" fontWeight="bold">E⃗ ⟂ V</text>
          </svg>
        </div>

        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1">
            <span className="text-[10px] text-emerald-400 font-bold block uppercase font-sans">Core Shapes & Properties:</span>
            <div className="text-xs text-[var(--text-primary)] font-bold">
              V(r) = q / (4πε₀r) = const ⟹ Spheres
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] font-sans mt-1">
              • <strong>Point charge:</strong> Concentric spherical surfaces with radial outward field.<br />
              • <strong>Uniform field:</strong> Parallel equidistant planes normal to E⃗.<br />
              • <strong>Spacing:</strong> Surfaces are closer together in stronger fields (dr = -dV/E).
            </p>
          </div>
        </div>
      </div>
    );

    const currentContent = 
      activeEqui === 'normal-proof' ? normalProofContent :
      activeEqui === 'geometry' ? geometryContent :
      twoSurfacesContent;

    if (inline) return currentContent;

    return (
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 sm:p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-[var(--border-subtle)] pb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-emerald-500/15 text-emerald-500"><Layers size={16} /></span>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">Equipotential Surfaces &amp; Potential Gradient</h4>
              <p className="text-[11px] text-[var(--text-muted)]">Proof diagrams for E⃗ ⟂ Surface, E = -dV/dr, and geometric sketches</p>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-[var(--bg-surface)] p-1 rounded-xl border border-[var(--border-subtle)] self-start sm:self-auto overflow-x-auto scrollbar-none">
            <button
              onClick={() => setEquiMode('two-surfaces')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeEqui === 'two-surfaces'
                  ? 'bg-emerald-500 text-white shadow-xs'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Two Surfaces (E = -dV/dr)
            </button>
            <button
              onClick={() => setEquiMode('normal-proof')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeEqui === 'normal-proof'
                  ? 'bg-emerald-500 text-white shadow-xs'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Proof: E⃗ ⟂ Surface
            </button>
            <button
              onClick={() => setEquiMode('geometry')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeEqui === 'geometry'
                  ? 'bg-emerald-500 text-white shadow-xs'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Shapes &amp; Geometry
            </button>
          </div>
        </div>

        {currentContent}
      </div>
    );
  }

  /* -------------------------------------------------------------
   * 13. CAPACITORS IN SERIES & PARALLEL
   * ------------------------------------------------------------- */
  if (diagramId === 'capacitor-circuits') {
    const content = (
      <div className="flex flex-col lg:flex-row items-center gap-6 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg width="270" height="170" viewBox="0 0 270 170" className="overflow-visible select-none">
            {svgDefs}
            <line x1="20" y1="45" x2="60" y2="45" stroke="#3b82f6" strokeWidth="2" />
            <line x1="60" y1="30" x2="60" y2="60" stroke="#3b82f6" strokeWidth="3" />
            <line x1="72" y1="30" x2="72" y2="60" stroke="#3b82f6" strokeWidth="3" />
            <text x="66" y="22" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="bold">C₁</text>

            <line x1="72" y1="45" x2="120" y2="45" stroke="#3b82f6" strokeWidth="2" />
            <line x1="120" y1="30" x2="120" y2="60" stroke="#3b82f6" strokeWidth="3" />
            <line x1="132" y1="30" x2="132" y2="60" stroke="#3b82f6" strokeWidth="3" />
            <text x="126" y="22" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="bold">C₂</text>
            <line x1="132" y1="45" x2="170" y2="45" stroke="#3b82f6" strokeWidth="2" />
            <text x="215" y="48" fill="#10b981" fontSize="10" fontWeight="bold">1/C_s = 1/C₁ + 1/C₂</text>

            <line x1="30" y1="125" x2="60" y2="125" stroke="#a855f7" strokeWidth="2" />
            <path d="M 60,125 L 60,105 L 90,105" fill="none" stroke="#a855f7" strokeWidth="2" />
            <path d="M 60,125 L 60,145 L 90,145" fill="none" stroke="#a855f7" strokeWidth="2" />

            <line x1="90" y1="95" x2="90" y2="115" stroke="#a855f7" strokeWidth="3" />
            <line x1="102" y1="95" x2="102" y2="115" stroke="#a855f7" strokeWidth="3" />
            <text x="96" y="90" textAnchor="middle" fill="#a855f7" fontSize="10" fontWeight="bold">C₁</text>

            <line x1="90" y1="135" x2="90" y2="155" stroke="#a855f7" strokeWidth="3" />
            <line x1="102" y1="135" x2="102" y2="155" stroke="#a855f7" strokeWidth="3" />
            <text x="96" y="165" textAnchor="middle" fill="#a855f7" fontSize="10" fontWeight="bold">C₂</text>

            <path d="M 102,105 L 130,105 L 130,125" fill="none" stroke="#a855f7" strokeWidth="2" />
            <path d="M 102,145 L 130,145 L 130,125" fill="none" stroke="#a855f7" strokeWidth="2" />
            <line x1="130" y1="125" x2="160" y2="125" stroke="#a855f7" strokeWidth="2" />
            <text x="215" y="128" fill="#10b981" fontSize="10" fontWeight="bold">C_p = C₁ + C₂</text>
          </svg>
        </div>

        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1">
            <span className="text-[10px] text-blue-400 font-bold block uppercase font-sans">Key Invariants:</span>
            <p className="text-[11px] text-[var(--text-secondary)] font-sans">
              • <strong>Series:</strong> Same Charge Q on each capacitor; V = V₁ + V₂.<br />
              • <strong>Parallel:</strong> Same Voltage V across each capacitor; Q = Q₁ + Q₂.
            </p>
          </div>
        </div>
      </div>
    );

    if (inline) return content;
    return (
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 sm:p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-3">
          <span className="p-1.5 rounded-lg bg-blue-500/15 text-blue-500"><Layers size={16} /></span>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">Capacitors in Series &amp; Parallel</h4>
            <p className="text-[11px] text-[var(--text-muted)]">Equivalent capacitance derivations</p>
          </div>
        </div>
        {content}
      </div>
    );
  }

  /* -------------------------------------------------------------
   * 14. EM WAVE STRUCTURE
   * ------------------------------------------------------------- */
  if (diagramId === 'em-wave-structure') {
    const content = (
      <div className="flex flex-col lg:flex-row items-center gap-6 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg width="270" height="170" viewBox="0 0 270 170" className="overflow-visible select-none">
            {svgDefs}
            <line x1="20" y1="85" x2="250" y2="85" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#arrow-emerald)" />
            <text x="255" y="89" fill="#10b981" fontSize="10" fontWeight="bold">x (c⃗)</text>

            <line x1="40" y1="150" x2="40" y2="20" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arrow-blue)" />
            <text x="32" y="18" fill="#3b82f6" fontSize="10" fontWeight="bold">E⃗ (y)</text>

            <path d="M 40,85 Q 75,25 110,85 Q 145,145 180,85 Q 215,25 250,85" fill="none" stroke="#3b82f6" strokeWidth="2.5" />
            <path d="M 40,85 Q 75,115 110,85 Q 145,55 180,85 Q 215,115 250,85" fill="none" stroke="#f43f5e" strokeWidth="2" strokeDasharray="3 3" />
            <text x="235" y="125" fill="#f43f5e" fontSize="10" fontWeight="bold">B⃗ (z)</text>
            
            <text x="145" y="30" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="bold">E⃗ ⟂ B⃗ ⟂ c⃗</text>
          </svg>
        </div>

        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1">
            <span className="text-[10px] text-blue-400 font-bold block uppercase font-sans">Maxwell Relations:</span>
            <div className="text-xs text-[var(--text-primary)] font-bold">
              c = E₀ / B₀ = 1 / √(μ₀ ε₀)
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] font-sans mt-1">
              • E⃗ and B⃗ oscillate in mutually perpendicular planes, perpendicular to propagation direction c⃗.
            </p>
          </div>
        </div>
      </div>
    );

    if (inline) return content;
    return (
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 sm:p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-3">
          <span className="p-1.5 rounded-lg bg-blue-500/15 text-blue-500"><Zap size={16} /></span>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">Electromagnetic Wave Transverse Structure</h4>
            <p className="text-[11px] text-[var(--text-muted)]">Orthogonal E and B vectors propagating at speed c</p>
          </div>
        </div>
        {content}
      </div>
    );
  }

  /* -------------------------------------------------------------
   * 15. AC RMS & PEAK WAVEFORM
   * ------------------------------------------------------------- */
  if (diagramId === 'ac-rms-waveform') {
    const content = (
      <div className="flex flex-col lg:flex-row items-center gap-6 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg width="270" height="170" viewBox="0 0 270 170" className="overflow-visible select-none">
            {svgDefs}
            <line x1="20" y1="85" x2="250" y2="85" stroke="var(--text-muted)" strokeWidth="1.5" />
            <text x="252" y="89" fill="var(--text-muted)" fontSize="10">ωt</text>

            <line x1="30" y1="160" x2="30" y2="15" stroke="var(--text-muted)" strokeWidth="1.5" />
            <text x="25" y="15" fill="var(--text-muted)" fontSize="10">i(t)</text>

            <path d="M 30,85 Q 75,15 120,85 Q 165,155 210,85" fill="none" stroke="#3b82f6" strokeWidth="2.5" />

            <line x1="30" y1="35" x2="80" y2="35" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="85" y="38" fill="#f43f5e" fontSize="10" fontWeight="bold">I₀ (Peak)</text>

            <line x1="30" y1="50" x2="160" y2="50" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="165" y="53" fill="#10b981" fontSize="10" fontWeight="bold">I_rms = I₀/√2 (0.707 I₀)</text>
            
            <text x="120" y="100" textAnchor="middle" fill="var(--text-muted)" fontSize="9">T/2</text>
            <text x="210" y="100" textAnchor="middle" fill="var(--text-muted)" fontSize="9">T</text>
          </svg>
        </div>

        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1">
            <span className="text-[10px] text-emerald-400 font-bold block uppercase font-sans">Formula Breakdown:</span>
            <div className="text-xs text-[var(--text-primary)] font-bold">
              I_rms = I₀ / √2 ≈ 0.707 I₀
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] font-sans mt-1">
              • Full-cycle Average &lt;I&gt; = 0.<br />
              • Half-cycle Average I_avg = 2I₀ / π ≈ 0.637 I₀.
            </p>
          </div>
        </div>
      </div>
    );

    if (inline) return content;
    return (
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 sm:p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-3">
          <span className="p-1.5 rounded-lg bg-emerald-500/15 text-emerald-500"><Activity size={16} /></span>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">Alternating Current: RMS &amp; Peak Relationship</h4>
            <p className="text-[11px] text-[var(--text-muted)]">I_rms = I_0 / sqrt(2) derivation</p>
          </div>
        </div>
        {content}
      </div>
    );
  }

  /* -------------------------------------------------------------
   * 16. MAGNETIC MATERIALS (DIA, PARA, FERRO)
   * ------------------------------------------------------------- */
  if (diagramId === 'magnetic-materials') {
    const content = (
      <div className="flex flex-col lg:flex-row items-center gap-6 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg width="270" height="170" viewBox="0 0 270 170" className="overflow-visible select-none">
            {svgDefs}
            <rect x="25" y="45" width="45" height="70" fill="rgba(244, 63, 94, 0.1)" stroke="#f43f5e" strokeWidth="1.5" rx="3" />
            <path d="M 10,60 Q 25,45 10,35" fill="none" stroke="#10b981" strokeWidth="1.5" />
            <path d="M 10,100 Q 25,115 10,125" fill="none" stroke="#10b981" strokeWidth="1.5" />
            <text x="47" y="135" textAnchor="middle" fill="#f43f5e" fontSize="9" fontWeight="bold">Dia (Expelled)</text>

            <rect x="110" y="45" width="45" height="70" fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" strokeWidth="1.5" rx="3" />
            <line x1="95" y1="70" x2="170" y2="70" stroke="#10b981" strokeWidth="1.5" />
            <line x1="95" y1="90" x2="170" y2="90" stroke="#10b981" strokeWidth="1.5" />
            <text x="132" y="135" textAnchor="middle" fill="#3b82f6" fontSize="9" fontWeight="bold">Para (Weak in)</text>

            <rect x="195" y="45" width="45" height="70" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" strokeWidth="2" rx="3" />
            <line x1="175" y1="60" x2="255" y2="60" stroke="#10b981" strokeWidth="2" />
            <line x1="175" y1="75" x2="255" y2="75" stroke="#10b981" strokeWidth="2" />
            <line x1="175" y1="90" x2="255" y2="90" stroke="#10b981" strokeWidth="2" />
            <line x1="175" y1="105" x2="255" y2="105" stroke="#10b981" strokeWidth="2" />
            <text x="217" y="135" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="bold">Ferro (Crowded)</text>
          </svg>
        </div>

        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1">
            <span className="text-[10px] text-amber-500 font-bold block uppercase font-sans">Susceptibility χ &amp; Permeability μ_r:</span>
            <p className="text-[11px] text-[var(--text-secondary)] font-sans">
              • <strong>Dia:</strong> χ &lt; 0 (small negative), μ_r &lt; 1.<br />
              • <strong>Para:</strong> χ &gt; 0 (small positive), μ_r &gt; 1.<br />
              • <strong>Ferro:</strong> χ ≫ 1 (very large positive), μ_r ≫ 1.
            </p>
          </div>
        </div>
      </div>
    );

    if (inline) return content;
    return (
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 sm:p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-3">
          <span className="p-1.5 rounded-lg bg-amber-500/15 text-amber-500"><Compass size={16} /></span>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">Magnetic Materials in External Field</h4>
            <p className="text-[11px] text-[var(--text-muted)]">Behavior of Diamagnetic, Paramagnetic &amp; Ferromagnetic substances</p>
          </div>
        </div>
        {content}
      </div>
    );
  }

  /* -------------------------------------------------------------
   * 17. CELL WITH INTERNAL RESISTANCE & POWER
   * ------------------------------------------------------------- */
  if (diagramId === 'cell-circuit') {
    const content = (
      <div className="flex flex-col lg:flex-row items-center gap-6 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg width="270" height="170" viewBox="0 0 270 170" className="overflow-visible select-none">
            {svgDefs}
            <rect x="40" y="30" width="100" height="60" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" rx="4" />
            <text x="90" y="22" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="bold">Real Cell (E, r)</text>

            <line x1="55" y1="50" x2="55" y2="70" stroke="#3b82f6" strokeWidth="3" />
            <line x1="63" y1="55" x2="63" y2="65" stroke="#3b82f6" strokeWidth="3" />
            <text x="59" y="45" textAnchor="middle" fill="#3b82f6" fontSize="9" fontWeight="bold">E</text>

            <rect x="85" y="55" width="30" height="12" fill="var(--bg-elevated)" stroke="#f43f5e" strokeWidth="1.5" />
            <text x="100" y="64" textAnchor="middle" fill="#f43f5e" fontSize="9" fontWeight="bold">r</text>

            <line x1="40" y1="60" x2="25" y2="60" stroke="var(--text-muted)" strokeWidth="2" />
            <line x1="25" y1="60" x2="25" y2="130" stroke="var(--text-muted)" strokeWidth="2" />
            <line x1="25" y1="130" x2="90" y2="130" stroke="var(--text-muted)" strokeWidth="2" />

            <line x1="140" y1="60" x2="230" y2="60" stroke="var(--text-muted)" strokeWidth="2" />
            <line x1="230" y1="60" x2="230" y2="130" stroke="var(--text-muted)" strokeWidth="2" />
            <line x1="230" y1="130" x2="160" y2="130" stroke="var(--text-muted)" strokeWidth="2" />

            <rect x="90" y="122" width="70" height="16" fill="var(--bg-elevated)" stroke="#10b981" strokeWidth="2" rx="3" />
            <text x="125" y="134" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">Load R</text>

            <line x1="25" y1="95" x2="25" y2="115" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow-blue)" />
            <text x="15" y="108" fill="#3b82f6" fontSize="10" fontWeight="bold">I</text>
          </svg>
        </div>

        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1">
            <span className="text-[10px] text-emerald-400 font-bold block uppercase font-sans">Terminal Voltage &amp; Power:</span>
            <div className="text-xs text-[var(--text-primary)] font-bold">
              V = E - I · r = (E · R) / (R + r)
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] font-sans mt-1">
              • <strong>Maximum Power Transfer:</strong> Maximum power P_max = E² / (4r) is delivered to load when R = r.
            </p>
          </div>
        </div>
      </div>
    );

    if (inline) return content;
    return (
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 sm:p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-3">
          <span className="p-1.5 rounded-lg bg-emerald-500/15 text-emerald-500"><Activity size={16} /></span>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">Cell with Internal Resistance &amp; Terminal Potential</h4>
            <p className="text-[11px] text-[var(--text-muted)]">Terminal voltage V = E - Ir</p>
          </div>
        </div>
        {content}
      </div>
    );
  }

  /* -------------------------------------------------------------
   * 18. ENERGY STORAGE IN CAPACITOR & INDUCTOR
   * ------------------------------------------------------------- */
  if (diagramId === 'energy-storage') {
    const content = (
      <div className="flex flex-col lg:flex-row items-center gap-6 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg width="270" height="170" viewBox="0 0 270 170" className="overflow-visible select-none">
            {svgDefs}
            <rect x="30" y="30" width="6" height="100" fill="#3b82f6" rx="2" />
            <rect x="90" y="30" width="6" height="100" fill="#f43f5e" rx="2" />
            <line x1="36" y1="55" x2="86" y2="55" stroke="#a855f7" strokeWidth="2" markerEnd="url(#arrow-purple)" />
            <line x1="36" y1="80" x2="86" y2="80" stroke="#a855f7" strokeWidth="2" markerEnd="url(#arrow-purple)" />
            <line x1="36" y1="105" x2="86" y2="105" stroke="#a855f7" strokeWidth="2" markerEnd="url(#arrow-purple)" />
            <text x="63" y="145" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="bold">U_C = ½CV²</text>
            <text x="63" y="158" textAnchor="middle" fill="var(--text-muted)" fontSize="8">in Electric Field</text>

            <g stroke="#10b981" strokeWidth="2.5" fill="none">
              <ellipse cx="160" cy="80" rx="10" ry="30" />
              <ellipse cx="180" cy="80" rx="10" ry="30" />
              <ellipse cx="200" cy="80" rx="10" ry="30" />
              <ellipse cx="220" cy="80" rx="10" ry="30" />
            </g>
            <line x1="140" y1="80" x2="240" y2="80" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" markerEnd="url(#arrow-amber)" />
            <text x="190" y="145" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">U_L = ½LI²</text>
            <text x="190" y="158" textAnchor="middle" fill="var(--text-muted)" fontSize="8">in Magnetic Field</text>
          </svg>
        </div>

        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1">
            <span className="text-[10px] text-amber-500 font-bold block uppercase font-sans">Energy Densities:</span>
            <p className="text-[11px] text-[var(--text-secondary)] font-sans">
              • <strong>Capacitor:</strong> u_E = ½ ε₀ E² (stored in dielectric / electric field).<br />
              • <strong>Inductor:</strong> u_B = B² / (2μ₀) (stored in magnetic field inside solenoid).
            </p>
          </div>
        </div>
      </div>
    );

    if (inline) return content;
    return (
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 sm:p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-3">
          <span className="p-1.5 rounded-lg bg-amber-500/15 text-amber-500"><Zap size={16} /></span>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">Energy Stored in Capacitor &amp; Inductor</h4>
            <p className="text-[11px] text-[var(--text-muted)]">Electrostatic energy in E-field vs Magnetic energy in B-field</p>
          </div>
        </div>
        {content}
      </div>
    );
  }

  /* -------------------------------------------------------------
   * 19. ELECTRIC FLUX & DIPOLE
   * ------------------------------------------------------------- */
  if (diagramId === 'electric-flux-dipole') {
    const content = (
      <div className="flex flex-col lg:flex-row items-center gap-6 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg width="270" height="170" viewBox="0 0 270 170" className="overflow-visible select-none">
            {svgDefs}
            <path d="M 90,85 C 90,20 180,20 180,85" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
            <path d="M 90,85 C 90,150 180,150 180,85" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
            <line x1="90" y1="85" x2="180" y2="85" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow-blue)" />

            <circle cx="90" cy="85" r="14" fill="#f43f5e" />
            <text x="90" y="90" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">+q</text>

            <circle cx="180" cy="85" r="14" fill="#3b82f6" />
            <text x="180" y="90" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">-q</text>

            <line x1="180" y1="120" x2="90" y2="120" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrow-amber)" />
            <text x="135" y="135" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">p⃗ = q(2a) (-q to +q)</text>
          </svg>
        </div>

        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1">
            <span className="text-[10px] text-amber-500 font-bold block uppercase font-sans">Flux &amp; Dipole Moment:</span>
            <p className="text-[11px] text-[var(--text-secondary)] font-sans">
              • <strong>Electric Flux:</strong> Φ = ∮ E⃗ · dA⃗ = E A cos θ.<br />
              • <strong>Enclosing Dipole:</strong> q_net = (+q) + (-q) = 0 ⟹ Φ_closed = 0.
            </p>
          </div>
        </div>
      </div>
    );

    if (inline) return content;
    return (
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 sm:p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-3">
          <span className="p-1.5 rounded-lg bg-amber-500/15 text-amber-500"><Zap size={16} /></span>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">Electric Flux &amp; Dipole Field Lines</h4>
            <p className="text-[11px] text-[var(--text-muted)]">Flux definition and dipole moment p = q(2a)</p>
          </div>
        </div>
        {content}
      </div>
    );
  }

  /* -------------------------------------------------------------
   * 20. POINT CHARGE FIELD & FIELD LINES
   * ------------------------------------------------------------- */
  if (diagramId === 'point-charge-field' || diagramId === 'field-lines-properties') {
    const content = (
      <div className="flex flex-col lg:flex-row items-center gap-6 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg width="270" height="170" viewBox="0 0 270 170" className="overflow-visible select-none">
            {svgDefs}
            <line x1="135" y1="85" x2="220" y2="85" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow-blue)" />
            <line x1="135" y1="85" x2="50" y2="85" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow-blue)" />
            <line x1="135" y1="85" x2="135" y2="15" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow-blue)" />
            <line x1="135" y1="85" x2="135" y2="155" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow-blue)" />
            <line x1="135" y1="85" x2="195" y2="25" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow-blue)" />
            <line x1="135" y1="85" x2="75" y2="145" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow-blue)" />
            <line x1="135" y1="85" x2="195" y2="145" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow-blue)" />
            <line x1="135" y1="85" x2="75" y2="25" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow-blue)" />

            <circle cx="135" cy="85" r="16" fill="#f43f5e" />
            <text x="135" y="90" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">+q</text>

            <text x="135" y="165" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">E = (1/4πε₀) · (q / r²) ⟹ E ∝ 1/r²</text>
          </svg>
        </div>

        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1">
            <span className="text-[10px] text-blue-400 font-bold block uppercase font-sans">Properties of Field Lines:</span>
            <p className="text-[11px] text-[var(--text-secondary)] font-sans">
              1. Start at positive charges, terminate at negative charges.<br />
              2. Tangent at any point gives direction of E⃗.<br />
              3. Two lines NEVER intersect.<br />
              4. Never form closed loops (conservative nature).
            </p>
          </div>
        </div>
      </div>
    );

    if (inline) return content;
    return (
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 sm:p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-3">
          <span className="p-1.5 rounded-lg bg-blue-500/15 text-blue-500"><Zap size={16} /></span>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">Electric Field of Point Charge &amp; Field Lines Properties</h4>
            <p className="text-[11px] text-[var(--text-muted)]">Radial inverse-square law field and 4 core CBSE properties</p>
          </div>
        </div>
        {content}
      </div>
    );
  }

  /* -------------------------------------------------------------
   * 20b. PRISM REFRACTION, i-δ MINIMUM DEVIATION CURVE & TIR
   * ------------------------------------------------------------- */
  if (diagramId === 'prism-dispersion') {
    const activePrism = (inline && subMode) ? subMode : prismMode;

    const prismCurveSvg = (
      <div className="space-y-2">
        <svg viewBox="0 0 460 220" className="w-full h-auto max-h-56 select-none">
          {svgDefs}
          <line x1="65" y1="190" x2="430" y2="190" stroke="#64748b" strokeWidth="1.5" />
          <line x1="65" y1="20" x2="65" y2="190" stroke="#64748b" strokeWidth="1.5" />
          <text x="220" y="210" fill="var(--text-muted)" fontSize="11" fontWeight="bold">Angle of Incidence (i) →</text>
          <text x="16" y="110" fill="var(--text-muted)" fontSize="11" fontWeight="bold" transform="rotate(-90 16,110)">Deviation (δ) →</text>

          {/* Asymmetric U-shaped i-delta curve */}
          <path d="M 105,45 Q 160,152 215,152 Q 290,152 385,68" fill="none" stroke="#f59e0b" strokeWidth="3" />
          <line x1="65" y1="152" x2="215" y2="152" stroke="#10b981" strokeDasharray="4,3" strokeWidth="1.5" />
          <line x1="215" y1="152" x2="215" y2="190" stroke="#10b981" strokeDasharray="4,3" strokeWidth="1.5" />
          <circle cx="215" cy="152" r="4.5" fill="#10b981" />
          <text x="35" y="155" fill="#10b981" fontSize="11" fontWeight="bold">δ_m</text>
          <text x="182" y="204" fill="#10b981" fontSize="10" fontWeight="bold">i = e = (A+δ_m)/2</text>

          <line x1="65" y1="100" x2="345" y2="100" stroke="#3b82f6" strokeDasharray="3,3" strokeWidth="1" />
          <circle cx="136" cy="100" r="3.5" fill="#3b82f6" />
          <circle cx="332" cy="100" r="3.5" fill="#3b82f6" />
          <text x="142" y="95" fill="#3b82f6" fontSize="10" fontWeight="bold">i₁ (or e)</text>
          <text x="305" y="95" fill="#3b82f6" fontSize="10" fontWeight="bold">i₂ (or i)</text>
          <text x="242" y="38" fill="#f59e0b" fontSize="10.5" fontWeight="bold">Unique δ_m when i = e &amp; r₁ = r₂ = A/2</text>
        </svg>
        <div className="text-xs text-[var(--text-secondary)] font-mono flex flex-wrap justify-between gap-2 pt-1 border-t border-[var(--border-subtle)]">
          <span>Principle of Reversibility: δ same for i₁ &amp; i₂ (= e)</span>
          <span className="text-amber-500 font-bold">n = sin[(A + δ_m)/2] / sin(A/2)</span>
        </div>
      </div>
    );

    const prismRaySvg = (
      <div className="space-y-2">
        <svg viewBox="0 0 460 220" className="w-full h-auto max-h-56 select-none">
          {svgDefs}
          <polygon points="230,28 135,185 325,185" fill="rgba(245, 158, 11, 0.1)" stroke="#f59e0b" strokeWidth="2.2" />
          <text x="230" y="21" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold">A</text>
          <text x="123" y="195" fill="var(--text-muted)" fontSize="11" fontWeight="bold">B</text>
          <text x="330" y="195" fill="var(--text-muted)" fontSize="11" fontWeight="bold">C</text>

          {/* Normals NN' and MN' */}
          <line x1="142" y1="110" x2="230" y2="158" stroke="#64748b" strokeDasharray="3,3" strokeWidth="1.2" />
          <line x1="318" y1="110" x2="230" y2="158" stroke="#64748b" strokeDasharray="3,3" strokeWidth="1.2" />
          <text x="230" y="170" textAnchor="middle" fill="var(--text-muted)" fontSize="9.5" fontWeight="bold">N (r₁ + r₂ = A)</text>

          {/* Incident ray PQ, Refracted QR parallel to base, Emergent RS */}
          <line x1="65" y1="158" x2="173" y2="125" stroke="#f59e0b" strokeWidth="2.4" markerEnd="url(#arrow-amber)" />
          <line x1="173" y1="125" x2="287" y2="125" stroke="#10b981" strokeWidth="2.4" markerEnd="url(#arrow-emerald)" />
          <line x1="287" y1="125" x2="395" y2="158" stroke="#f43f5e" strokeWidth="2.4" markerEnd="url(#arrow-rose)" />

          {/* Extended rays meeting at D to show angle of deviation δ */}
          <line x1="173" y1="125" x2="295" y2="88" stroke="#f59e0b" strokeDasharray="4,3" strokeWidth="1.2" />
          <line x1="185" y1="94" x2="287" y2="125" stroke="#f43f5e" strokeDasharray="4,3" strokeWidth="1.2" />
          <text x="230" y="88" textAnchor="middle" fill="#a855f7" fontSize="11" fontWeight="bold">δ = i + e − A</text>

          <text x="163" y="122" fill="var(--text-primary)" fontSize="10" fontWeight="bold">Q</text>
          <text x="292" y="122" fill="var(--text-primary)" fontSize="10" fontWeight="bold">R</text>
          <text x="115" y="138" fill="#f59e0b" fontSize="10.5" fontWeight="bold">i</text>
          <text x="192" y="120" fill="#10b981" fontSize="9.5" fontWeight="bold">r₁</text>
          <text x="262" y="120" fill="#10b981" fontSize="9.5" fontWeight="bold">r₂</text>
          <text x="342" y="138" fill="#f43f5e" fontSize="10.5" fontWeight="bold">e</text>
          <text x="230" y="139" textAnchor="middle" fill="#10b981" fontSize="9.5" fontWeight="bold">At δ_m: QR ∥ BC</text>
        </svg>
        <div className="text-xs text-[var(--text-secondary)] font-mono flex flex-wrap justify-between gap-2 pt-1 border-t border-[var(--border-subtle)]">
          <span>Thin Prism (small A): δ ≈ (n − 1)A</span>
          <span className="text-amber-500 font-bold">r₁ + r₂ = A | A + δ = i + e</span>
        </div>
      </div>
    );

    const tirSvg = (
      <div className="space-y-2">
        <svg viewBox="0 0 480 215" className="w-full h-auto max-h-56 select-none">
          {svgDefs}
          {/* Left Panel: Critical Angle & TIR at Interface */}
          <rect x="15" y="110" width="275" height="90" fill="rgba(59, 130, 246, 0.1)" rx="4" />
          <line x1="15" y1="110" x2="290" y2="110" stroke="#64748b" strokeWidth="2" />
          <text x="22" y="28" fill="#10b981" fontSize="10" fontWeight="bold">Rarer Medium (Air, n₂)</text>
          <text x="22" y="192" fill="#3b82f6" fontSize="10" fontWeight="bold">Denser Medium (Water/Glass, n₁ &gt; n₂)</text>

          {/* Normals at 3 incidence points */}
          <line x1="80" y1="45" x2="80" y2="175" stroke="#64748b" strokeDasharray="3,3" strokeWidth="1" />
          <line x1="165" y1="45" x2="165" y2="175" stroke="#64748b" strokeDasharray="3,3" strokeWidth="1" />
          <line x1="245" y1="45" x2="245" y2="175" stroke="#64748b" strokeDasharray="3,3" strokeWidth="1" />

          {/* Ray 1: i < ic (Refracted) */}
          <line x1="55" y1="175" x2="80" y2="110" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow-amber)" />
          <line x1="80" y1="110" x2="118" y2="48" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow-amber)" />
          <text x="48" y="142" fill="#f59e0b" fontSize="9.5" fontWeight="bold">i &lt; i_c</text>

          {/* Ray 2: i = ic (Grazing Emergence r = 90°) */}
          <line x1="130" y1="175" x2="165" y2="110" stroke="#10b981" strokeWidth="2.2" markerEnd="url(#arrow-emerald)" />
          <line x1="165" y1="110" x2="215" y2="110" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrow-emerald)" />
          <text x="132" y="142" fill="#10b981" fontSize="9.5" fontWeight="bold">i = i_c</text>
          <text x="182" y="102" fill="#10b981" fontSize="9.5" fontWeight="bold">r = 90°</text>

          {/* Ray 3: i > ic (Total Internal Reflection) */}
          <line x1="205" y1="175" x2="245" y2="110" stroke="#f43f5e" strokeWidth="2.4" markerEnd="url(#arrow-rose)" />
          <line x1="245" y1="110" x2="285" y2="175" stroke="#f43f5e" strokeWidth="2.4" markerEnd="url(#arrow-rose)" />
          <text x="247" y="138" fill="#f43f5e" fontSize="9.5" fontWeight="bold">i &gt; i_c (TIR!)</text>

          {/* Right Panel: Optical Fibre */}
          <rect x="315" y="45" width="150" height="120" rx="8" fill="rgba(168, 85, 247, 0.08)" stroke="#a855f7" strokeWidth="1.5" />
          <rect x="315" y="65" width="150" height="80" fill="rgba(56, 189, 248, 0.14)" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="390" y="58" textAnchor="middle" fill="#a855f7" fontSize="9.5" fontWeight="bold">Cladding (n₂ &lt; n₁)</text>
          <text x="390" y="158" textAnchor="middle" fill="#3b82f6" fontSize="9.5" fontWeight="bold">Optical Fibre Core (n₁)</text>
          <polyline points="300,115 340,67 390,143 440,67 472,112" fill="none" stroke="#f43f5e" strokeWidth="2.2" markerEnd="url(#arrow-rose)" />
          <text x="390" y="108" textAnchor="middle" fill="var(--text-primary)" fontSize="9.5" fontWeight="bold">Multi-TIR Light Pulse</text>
        </svg>
        <div className="text-xs text-[var(--text-secondary)] font-mono flex flex-wrap justify-between gap-2 pt-1 border-t border-[var(--border-subtle)]">
          <span>Conditions: (1) Denser → Rarer  (2) i &gt; i_c</span>
          <span className="text-rose-500 font-bold">sin i_c = n₂ / n₁ = 1 / n₁₂</span>
        </div>
      </div>
    );

    const activeView = activePrism === 'curve' ? prismCurveSvg : activePrism === 'tir' ? tirSvg : prismRaySvg;
    const content = (
      <div className="space-y-4">
        {!(inline && subMode) && (
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'prism-ray', label: '1. Symmetrical Prism Ray (δ_m)' },
              { id: 'curve', label: '2. Prism Deviation (i–δ Curve)' },
              { id: 'tir', label: '3. TIR, Critical Angle i_c & Fibre' }
            ].map(t => (
              <button
                key={t.id}
                type="button"
                onClick={() => setPrismMode(t.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activePrism === t.id
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)]'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        )}
        <div className="bg-[var(--bg-surface)] rounded-xl border border-[var(--border-subtle)] p-4">
          {activeView}
        </div>
      </div>
    );
    if (inline) return content;
    return (
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 sm:p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-3">
          <span className="p-1.5 rounded-lg bg-amber-500/15 text-amber-500"><Zap size={16} /></span>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">Refraction Through a Prism, i–δ Curve &amp; Total Internal Reflection</h4>
            <p className="text-[11px] text-[var(--text-muted)]">Minimum deviation prism formula, asymmetric i–δ plot &amp; TIR critical angle optical fibre</p>
          </div>
        </div>
        {content}
      </div>
    );
  }

  /* -------------------------------------------------------------
   * 20c. SINGLE-SLIT FRAUNHOFER DIFFRACTION vs YDSE INTENSITY CURVE
   * ------------------------------------------------------------- */
  if (diagramId === 'single-slit-diffraction') {
    const activeDiff = (inline && subMode) ? subMode : diffMode;

    const diffractionView = (
      <div className="space-y-2">
        <svg viewBox="0 0 460 210" className="w-full h-auto max-h-56 select-none">
          {svgDefs}
          <line x1="20" y1="175" x2="440" y2="175" stroke="#64748b" strokeWidth="1.5" />
          <line x1="230" y1="15" x2="230" y2="175" stroke="#64748b" strokeDasharray="3,3" strokeWidth="1" />
          <path
            d="M 35,175 Q 65,175 82,163 Q 100,175 112,175 Q 132,145 148,175 C 168,175 186,26 230,26 C 274,26 292,175 312,175 Q 328,145 348,175 Q 360,175 378,163 Q 395,175 425,175"
            fill="#818cf8"
            fillOpacity="0.18"
            stroke="#6366f1"
            strokeWidth="2.5"
          />
          <line x1="168" y1="186" x2="292" y2="186" stroke="#10b981" strokeWidth="2" />
          <text x="172" y="203" fill="#10b981" fontSize="10.5" fontWeight="bold">Central Width = 2λD/a (2β)</text>
          <text x="238" y="34" fill="var(--text-primary)" fontSize="11" fontWeight="bold">I₀ (Central Max)</text>
          <text x="148" y="189" fill="#f43f5e" fontSize="9.5" fontWeight="bold">-λ/a</text>
          <text x="285" y="189" fill="#f43f5e" fontSize="9.5" fontWeight="bold">+λ/a</text>
          <text x="98" y="189" fill="#f43f5e" fontSize="9.5" fontWeight="bold">-2λ/a</text>
          <text x="336" y="189" fill="#f43f5e" fontSize="9.5" fontWeight="bold">+2λ/a</text>
          <text x="308" y="140" fill="#f59e0b" fontSize="9.5" fontWeight="bold">1st Sec. Max (≈ I₀/22)</text>
        </svg>
        <div className="text-xs text-[var(--text-secondary)] font-mono flex flex-wrap justify-between gap-2 pt-1 border-t border-[var(--border-subtle)]">
          <span>Diffraction Minima: a sin θ = nλ (n = 1, 2, 3...)</span>
          <span className="text-indigo-500 font-bold">Central Angular Width 2θ = 2λ/a</span>
        </div>
      </div>
    );

    const ydseCompareView = (
      <div className="space-y-2">
        <svg viewBox="0 0 460 210" className="w-full h-auto max-h-56 select-none">
          <line x1="20" y1="175" x2="440" y2="175" stroke="#64748b" strokeWidth="1.5" />
          <line x1="230" y1="20" x2="230" y2="175" stroke="#64748b" strokeDasharray="3,3" strokeWidth="1" />
          <path
            d="M 45,175 Q 70,50 95,175 Q 120,50 145,175 Q 170,50 195,175 Q 230,50 265,175 Q 290,50 315,175 Q 340,50 365,175 Q 390,50 415,175"
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="2.5"
          />
          <line x1="40" y1="88" x2="420" y2="88" stroke="#10b981" strokeDasharray="4,3" strokeWidth="1" />
          <text x="255" y="42" fill="#0ea5e9" fontSize="11" fontWeight="bold">All Maxima Equal Intensity = 4I₀</text>
          <text x="165" y="197" fill="#10b981" fontSize="10.5" fontWeight="bold">Uniform Fringe Width β = λD/d</text>
        </svg>
        <div className="text-xs text-[var(--text-secondary)] font-mono flex flex-wrap justify-between gap-2 pt-1 border-t border-[var(--border-subtle)]">
          <span>YDSE Maxima: d sin θ = nλ (Uniform Intensity 4I₀)</span>
          <span className="text-sky-500 font-bold">All Dark Fringes I_min = 0</span>
        </div>
      </div>
    );

    const content = (
      <div className="space-y-4">
        {!(inline && subMode) && (
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setDiffMode('diffraction-lobe')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeDiff === 'diffraction-lobe' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)]'
              }`}
            >
              Single-Slit Diffraction I(θ)
            </button>
            <button
              type="button"
              onClick={() => setDiffMode('ydse-compare')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeDiff === 'ydse-compare' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)]'
              }`}
            >
              Compare: YDSE Equal Fringes
            </button>
          </div>
        )}
        <div className="bg-[var(--bg-surface)] rounded-xl border border-[var(--border-subtle)] p-4">
          {activeDiff === 'ydse-compare' ? ydseCompareView : diffractionView}
        </div>
      </div>
    );
    if (inline) return content;
    return (
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 sm:p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-3">
          <span className="p-1.5 rounded-lg bg-indigo-500/15 text-indigo-400"><Zap size={16} /></span>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">Single-Slit Diffraction Pattern vs YDSE</h4>
            <p className="text-[11px] text-[var(--text-muted)]">Double-width central maximum (2λ/a) &amp; rapidly falling secondary maxima</p>
          </div>
        </div>
        {content}
      </div>
    );
  }

  /* -------------------------------------------------------------
   * 20d. NUCLEI: BINDING ENERGY CURVE, NUCLEAR FORCE U(r) & FISSION/FUSION
   * ------------------------------------------------------------- */
  if (diagramId === 'nuclei-binding-force') {
    const activeNuclei = (inline && subMode) ? subMode : nucleiMode;

    const beCurveSvg = (
      <div className="space-y-2">
        <svg viewBox="0 0 460 220" className="w-full h-auto max-h-56 select-none">
          <line x1="55" y1="185" x2="430" y2="185" stroke="#64748b" strokeWidth="1.5" />
          <line x1="55" y1="20" x2="55" y2="185" stroke="#64748b" strokeWidth="1.5" />
          <text x="200" y="206" fill="var(--text-muted)" fontSize="11" fontWeight="bold">Mass Number (A) →</text>
          <text x="15" y="115" fill="var(--text-muted)" fontSize="11" fontWeight="bold" transform="rotate(-90 15,115)">E_bn (MeV) →</text>

          <text x="30" y="42" fill="var(--text-muted)" fontSize="9.5">8.75</text>
          <text x="35" y="65" fill="var(--text-muted)" fontSize="9.5">7.5</text>
          <text x="35" y="135" fill="var(--text-muted)" fontSize="9.5">4.0</text>
          <text x="135" y="198" fill="var(--text-muted)" fontSize="9.5">56 (Fe)</text>
          <text x="275" y="198" fill="var(--text-muted)" fontSize="9.5">170</text>
          <text x="385" y="198" fill="var(--text-muted)" fontSize="9.5">238 (U)</text>

          <polyline
            points="65,172 72,148 79,68 84,96 90,58 96,74 104,54 118,46 142,36 220,40 285,48 395,62"
            fill="none"
            stroke="#f43f5e"
            strokeWidth="2.5"
          />
          <circle cx="79" cy="68" r="3" fill="#f59e0b" />
          <text x="72" y="61" fill="#f59e0b" fontSize="9" fontWeight="bold">⁴He</text>
          <circle cx="90" cy="58" r="3" fill="#f59e0b" />
          <text x="86" y="49" fill="#f59e0b" fontSize="9" fontWeight="bold">¹²C</text>
          <circle cx="142" cy="36" r="4.5" fill="#10b981" />
          <text x="140" y="27" fill="#10b981" fontSize="10" fontWeight="bold">⁵⁶Fe (8.75 MeV Peak)</text>
          <circle cx="395" cy="62" r="4" fill="#3b82f6" />
          <text x="362" y="54" fill="#3b82f6" fontSize="9.5" fontWeight="bold">²³⁸U (7.6 MeV)</text>

          <text x="175" y="100" fill="#10b981" fontSize="10" fontWeight="bold">30 &lt; A &lt; 170 Plateau (Saturation)</text>
          <text x="64" y="112" fill="#f59e0b" fontSize="9.5" fontWeight="bold">Fusion ↑</text>
          <text x="315" y="88" fill="#3b82f6" fontSize="9.5" fontWeight="bold">← Fission Releases Energy</text>
        </svg>
        <div className="text-xs text-[var(--text-secondary)] font-mono flex flex-wrap justify-between gap-2 pt-1 border-t border-[var(--border-subtle)]">
          <span>ρ_nuclear ≈ 2.3×10¹⁷ kg/m³ (Independent of A)</span>
          <span className="text-rose-500 font-bold">Max BE/A = 8.75 MeV (⁵⁶Fe)</span>
        </div>
      </div>
    );

    const nuclearForceSvg = (
      <div className="space-y-2">
        <svg viewBox="0 0 460 220" className="w-full h-auto max-h-56 select-none">
          <line x1="65" y1="88" x2="425" y2="88" stroke="#64748b" strokeWidth="1.5" />
          <line x1="65" y1="20" x2="65" y2="200" stroke="#64748b" strokeWidth="1.5" />
          <text x="355" y="80" fill="var(--text-muted)" fontSize="11" fontWeight="bold">Distance r (fm) →</text>
          <text x="18" y="115" fill="var(--text-muted)" fontSize="11" fontWeight="bold" transform="rotate(-90 18,115)">Potential U(r) →</text>
          <text x="45" y="45" fill="#f43f5e" fontSize="10" fontWeight="bold">+U</text>
          <text x="43" y="165" fill="#10b981" fontSize="10" fontWeight="bold">−U</text>

          <path
            d="M 102,25 C 108,125 120,178 148,178 C 190,178 230,96 340,90 L 415,89"
            fill="none"
            stroke="#f43f5e"
            strokeWidth="3"
          />
          <line x1="148" y1="88" x2="148" y2="178" stroke="#f59e0b" strokeDasharray="4,3" strokeWidth="1.5" />
          <circle cx="148" cy="178" r="4.5" fill="#f59e0b" />
          <text x="130" y="79" fill="#f59e0b" fontSize="10.5" fontWeight="bold">r₀ = 0.8 fm</text>
          <text x="155" y="180" fill="#f59e0b" fontSize="9.5" fontWeight="bold">U_min ≈ −100 MeV (F = 0)</text>
          <text x="72" y="55" fill="#f43f5e" fontSize="9.5" fontWeight="bold">Repulsive (r &lt; 0.8 fm)</text>
          <text x="210" y="138" fill="#10b981" fontSize="9.5" fontWeight="bold">Attractive (r &gt; 0.8 fm, Saturation ~3 fm)</text>
        </svg>
        <div className="text-xs text-[var(--text-secondary)] font-mono flex flex-wrap justify-between gap-2 pt-1 border-t border-[var(--border-subtle)]">
          <span>Charge-Independent (F_nn ≈ F_pp ≈ F_np) | Spin-Dependent</span>
          <span className="text-rose-500 font-bold">Range ≈ 2–3 fm | Core Radius r₀ ≈ 0.8 fm</span>
        </div>
      </div>
    );

    const fissionFusionSvg = (
      <div className="space-y-2">
        <svg viewBox="0 0 480 210" className="w-full h-auto max-h-56 select-none">
          {svgDefs}
          {/* Left: Nuclear Fission */}
          <rect x="10" y="12" width="222" height="186" rx="10" fill="rgba(59, 130, 246, 0.06)" stroke="#3b82f6" strokeWidth="1.2" />
          <text x="121" y="30" textAnchor="middle" fill="#3b82f6" fontSize="11" fontWeight="bold">1. Nuclear Fission (²³⁵U + ¹n)</text>
          <circle cx="32" cy="100" r="6" fill="#f59e0b" />
          <text x="32" y="120" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="bold">¹₀n</text>
          <line x1="40" y1="100" x2="66" y2="100" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow-amber)" />
          <circle cx="92" cy="100" r="21" fill="rgba(244, 63, 94, 0.2)" stroke="#f43f5e" strokeWidth="2" />
          <text x="92" y="103" textAnchor="middle" fill="var(--text-primary)" fontSize="9.5" fontWeight="bold">²³⁶U*</text>
          <line x1="115" y1="90" x2="155" y2="62" stroke="#10b981" strokeWidth="1.8" markerEnd="url(#arrow-emerald)" />
          <line x1="115" y1="110" x2="155" y2="145" stroke="#3b82f6" strokeWidth="1.8" markerEnd="url(#arrow-blue)" />
          <line x1="115" y1="100" x2="165" y2="100" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3,2" markerEnd="url(#arrow-amber)" />
          <circle cx="176" cy="56" r="14" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="1.8" />
          <text x="176" y="60" textAnchor="middle" fill="#10b981" fontSize="9" fontWeight="bold">¹⁴⁴Ba</text>
          <circle cx="176" cy="150" r="12" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="1.8" />
          <text x="176" y="154" textAnchor="middle" fill="#3b82f6" fontSize="9" fontWeight="bold">⁸⁹Kr</text>
          <text x="195" y="103" fill="#f59e0b" fontSize="9.5" fontWeight="bold">3 ¹₀n</text>
          <text x="121" y="186" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">Q ≈ 200 MeV per fission</text>

          {/* Right: Nuclear Fusion */}
          <rect x="248" y="12" width="222" height="186" rx="10" fill="rgba(245, 158, 11, 0.06)" stroke="#f59e0b" strokeWidth="1.2" />
          <text x="359" y="30" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">2. Thermonuclear Fusion (Sun)</text>
          <circle cx="282" cy="75" r="11" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="1.8" />
          <text x="282" y="79" textAnchor="middle" fill="#3b82f6" fontSize="9.5" fontWeight="bold">²H</text>
          <circle cx="282" cy="128" r="11" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" strokeWidth="1.8" />
          <text x="282" y="132" textAnchor="middle" fill="#a855f7" fontSize="9.5" fontWeight="bold">³H</text>
          <line x1="296" y1="80" x2="342" y2="100" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow-amber)" />
          <line x1="296" y1="124" x2="342" y2="104" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow-amber)" />
          <circle cx="366" cy="102" r="17" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" />
          <text x="366" y="106" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">⁴He</text>
          <line x1="385" y1="102" x2="430" y2="102" stroke="#f43f5e" strokeWidth="2" markerEnd="url(#arrow-rose)" />
          <text x="442" y="96" fill="#f43f5e" fontSize="9.5" fontWeight="bold">¹₀n +</text>
          <text x="438" y="110" fill="#f59e0b" fontSize="9.5" fontWeight="bold">17.6 MeV</text>
          <text x="359" y="168" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">4 ¹₁H → ⁴₂He + 2e⁺ + 2ν + 26.7 MeV</text>
          <text x="359" y="186" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">T &gt; 10⁷ K (Overcomes Coulomb Barrier)</text>
        </svg>
        <div className="text-xs text-[var(--text-secondary)] font-mono flex flex-wrap justify-between gap-2 pt-1 border-t border-[var(--border-subtle)]">
          <span>Both increase BE/nucleon toward ⁵⁶Fe plateau (Q = Δm · c²)</span>
          <span className="text-amber-500 font-bold">Fusion yields more MeV/nucleon</span>
        </div>
      </div>
    );

    const activeView = activeNuclei === 'nuclear-force' ? nuclearForceSvg : activeNuclei === 'fission-fusion' ? fissionFusionSvg : beCurveSvg;
    const content = (
      <div className="space-y-4">
        {!(inline && subMode) && (
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'be-curve', label: '1. Binding Energy/Nucleon (BE/A vs A)' },
              { id: 'nuclear-force', label: '2. Nuclear Force Potential U(r) vs r' },
              { id: 'fission-fusion', label: '3. Nuclear Fission & Solar Fusion' }
            ].map(t => (
              <button
                key={t.id}
                type="button"
                onClick={() => setNucleiMode(t.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeNuclei === t.id ? 'bg-rose-600 text-white shadow-sm' : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)]'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        )}
        <div className="bg-[var(--bg-surface)] rounded-xl border border-[var(--border-subtle)] p-4">
          {activeView}
        </div>
      </div>
    );
    if (inline) return content;
    return (
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 sm:p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-3">
          <span className="p-1.5 rounded-lg bg-rose-500/15 text-rose-400"><Zap size={16} /></span>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">Nuclear Binding Energy Curve, Nuclear Force &amp; Fission/Fusion</h4>
            <p className="text-[11px] text-[var(--text-muted)]">BE/A stability plateau, 0.8 fm nuclear potential well &amp; Q-value energy release</p>
          </div>
        </div>
        {content}
      </div>
    );
  }

  /* -------------------------------------------------------------
   * 21. RAY OPTICS: MIRRORS, SPHERICAL REFRACTION, LENSES & INSTRUMENTS (6 Modes)
   * ------------------------------------------------------------- */
  if (diagramId === 'ray-optics-instruments') {
    const activeRay = (inline && subMode) ? subMode : rayOpticsMode;

    const mirrorContent = (
      <div className="flex flex-col lg:flex-row items-center gap-5 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg viewBox="0 0 340 195" className="w-full h-auto max-h-56 overflow-visible select-none">
            {svgDefs}
            {/* Principal Axis */}
            <line x1="15" y1="115" x2="315" y2="115" stroke="#64748b" strokeWidth="1.5" />
            {/* Concave Mirror Arc at right */}
            <path d="M 272,30 Q 304,115 272,180" fill="none" stroke="#3b82f6" strokeWidth="3.5" />
            {/* Polishing hatch marks on back of mirror */}
            <line x1="286" y1="45" x2="294" y2="40" stroke="#64748b" strokeWidth="1.2" />
            <line x1="291" y1="80" x2="299" y2="75" stroke="#64748b" strokeWidth="1.2" />
            <line x1="291" y1="115" x2="299" y2="110" stroke="#64748b" strokeWidth="1.2" />
            <line x1="286" y1="150" x2="294" y2="145" stroke="#64748b" strokeWidth="1.2" />

            {/* Pole P, Focus F, Centre C */}
            <circle cx="288" cy="115" r="3" fill="#3b82f6" />
            <text x="294" y="128" fill="#3b82f6" fontSize="10.5" fontWeight="bold">P</text>
            <circle cx="218" cy="115" r="3.5" fill="#10b981" />
            <text x="215" y="130" fill="#10b981" fontSize="10.5" fontWeight="bold">F</text>
            <circle cx="148" cy="115" r="3.5" fill="#a855f7" />
            <text x="144" y="130" fill="#a855f7" fontSize="10.5" fontWeight="bold">C</text>

            {/* Object AB beyond C */}
            <line x1="72" y1="115" x2="72" y2="55" stroke="#f59e0b" strokeWidth="2.6" markerEnd="url(#arrow-amber)" />
            <text x="64" y="50" fill="#f59e0b" fontSize="10.5" fontWeight="bold">A</text>
            <text x="64" y="128" fill="#f59e0b" fontSize="10.5" fontWeight="bold">B</text>

            {/* Parallel ray AM to mirror and reflected through F */}
            <line x1="72" y1="55" x2="281" y2="55" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow-amber)" />
            <line x1="281" y1="55" x2="152" y2="178" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-emerald)" />
            <text x="285" y="52" fill="var(--text-primary)" fontSize="10" fontWeight="bold">M</text>

            {/* Normal CM & drop perpendicular MD */}
            <line x1="148" y1="115" x2="281" y2="55" stroke="#a855f7" strokeWidth="1.4" strokeDasharray="4,3" />
            <line x1="281" y1="55" x2="281" y2="115" stroke="#64748b" strokeWidth="1.2" strokeDasharray="2,2" />
            <text x="275" y="128" fill="var(--text-muted)" fontSize="9.5" fontWeight="bold">D</text>
            <text x="172" y="96" fill="#a855f7" fontSize="9.5" fontWeight="bold">θ</text>
            <text x="200" y="108" fill="#10b981" fontSize="9.5" fontWeight="bold">2θ</text>

            {/* Ray through C hitting mirror along normal and retracing */}
            <line x1="72" y1="55" x2="279" y2="170" stroke="#f43f5e" strokeWidth="1.8" markerEnd="url(#arrow-rose)" />

            {/* Real Inverted Image A'B' between C and F */}
            <line x1="184" y1="115" x2="184" y2="147" stroke="#0ea5e9" strokeWidth="2.6" markerEnd="url(#arrow-blue)" />
            <text x="177" y="110" fill="#0ea5e9" fontSize="10" fontWeight="bold">B&apos;</text>
            <text x="178" y="160" fill="#0ea5e9" fontSize="10" fontWeight="bold">A&apos;</text>

            <text x="15" y="20" fill="#10b981" fontSize="10" fontWeight="bold">Paraxial Rays: tan θ ≈ MD/CD, tan 2θ ≈ MD/FD ⟹ R = 2f</text>
          </svg>
        </div>
        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1.5">
            <span className="text-[10px] text-blue-500 font-bold block uppercase font-sans">Concave Mirror: R = 2f &amp; Mirror Equation</span>
            <div className="text-xs text-[var(--text-primary)] font-bold">
              f = R / 2   |   1/v + 1/u = 1/f   |   m = −v / u
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] font-sans leading-relaxed">
              • <strong>Triangles △A&apos;B&apos;F ~ △MDF</strong> &amp; <strong>△A&apos;B&apos;P ~ △ABP</strong> yield mirror equation.<br />
              • <strong>New Cartesian Sign Convention:</strong> u, v, f are measured from Pole P; distances opposite to incident ray are negative.
            </p>
          </div>
        </div>
      </div>
    );

    const sphericalSurfaceContent = (
      <div className="flex flex-col lg:flex-row items-center gap-5 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg viewBox="0 0 340 195" className="w-full h-auto max-h-56 overflow-visible select-none">
            {svgDefs}
            {/* Denser Medium n2 right of convex interface */}
            <path d="M 165,25 Q 130,105 165,180 L 325,180 L 325,25 Z" fill="rgba(59, 130, 246, 0.1)" />
            <path d="M 165,25 Q 130,105 165,180" fill="none" stroke="#3b82f6" strokeWidth="3" />
            <text x="35" y="34" fill="#10b981" fontSize="10" fontWeight="bold">Rarer (n₁)</text>
            <text x="230" y="34" fill="#3b82f6" fontSize="10.5" fontWeight="bold">Denser Medium (n₂)</text>

            {/* Principal Axis */}
            <line x1="15" y1="115" x2="325" y2="115" stroke="#64748b" strokeWidth="1.5" />
            <circle cx="148" cy="115" r="3" fill="#3b82f6" />
            <text x="140" y="130" fill="#3b82f6" fontSize="10" fontWeight="bold">P</text>

            {/* Object O, Centre C, Image I */}
            <circle cx="42" cy="115" r="4" fill="#f59e0b" />
            <text x="37" y="132" fill="#f59e0b" fontSize="11" fontWeight="bold">O</text>
            <circle cx="215" cy="115" r="3.5" fill="#a855f7" />
            <text x="211" y="132" fill="#a855f7" fontSize="11" fontWeight="bold">C</text>
            <circle cx="305" cy="115" r="4" fill="#10b981" />
            <text x="301" y="132" fill="#10b981" fontSize="11" fontWeight="bold">I</text>

            {/* Incidence point N on curved surface */}
            <line x1="42" y1="115" x2="152" y2="58" stroke="#f59e0b" strokeWidth="2.2" markerEnd="url(#arrow-amber)" />
            <line x1="152" y1="58" x2="305" y2="115" stroke="#10b981" strokeWidth="2.2" markerEnd="url(#arrow-emerald)" />
            <text x="145" y="50" fill="var(--text-primary)" fontSize="10.5" fontWeight="bold">N</text>

            {/* Normal CN extended */}
            <line x1="215" y1="115" x2="118" y2="28" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4,3" />
            <text x="108" y="34" fill="#a855f7" fontSize="9.5" fontWeight="bold">Normal</text>

            {/* Perpendicular NM */}
            <line x1="152" y1="58" x2="152" y2="115" stroke="#64748b" strokeWidth="1.2" strokeDasharray="2,2" />
            <text x="154" y="128" fill="var(--text-muted)" fontSize="9.5" fontWeight="bold">M</text>

            {/* Angle labels alpha, gamma, beta, i, r */}
            <text x="64" y="110" fill="#f59e0b" fontSize="9.5" fontWeight="bold">α</text>
            <text x="195" y="110" fill="#a855f7" fontSize="9.5" fontWeight="bold">γ</text>
            <text x="266" y="110" fill="#10b981" fontSize="9.5" fontWeight="bold">β</text>
            <text x="128" y="54" fill="#f43f5e" fontSize="9.5" fontWeight="bold">i</text>
            <text x="172" y="64" fill="#10b981" fontSize="9.5" fontWeight="bold">r</text>

            {/* Distance markers -u, +R, +v */}
            <text x="90" y="158" fill="#f59e0b" fontSize="9.5" fontWeight="bold">OM ≈ −u</text>
            <text x="175" y="158" fill="#a855f7" fontSize="9.5" fontWeight="bold">MC ≈ +R</text>
            <text x="242" y="158" fill="#10b981" fontSize="9.5" fontWeight="bold">MI ≈ +v</text>
          </svg>
        </div>
        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1.5">
            <span className="text-[10px] text-emerald-500 font-bold block uppercase font-sans">Refraction at Single Spherical Surface</span>
            <div className="text-xs text-[var(--text-primary)] font-bold">
              n₂ / v − n₁ / u = (n₂ − n₁) / R
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] font-sans leading-relaxed">
              • <strong>Exterior Angles:</strong> i = α + γ and γ = r + β ⟹ r = γ − β.<br />
              • <strong>Paraxial Snell&apos;s Law:</strong> n₁i ≈ n₂r ⟹ n₁(α + γ) = n₂(γ − β). Substitute α ≈ NM/(−u), β ≈ NM/v, γ ≈ NM/R.
            </p>
          </div>
        </div>
      </div>
    );

    const lensMakerContent = (
      <div className="flex flex-col lg:flex-row items-center gap-5 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg viewBox="0 0 340 195" className="w-full h-auto max-h-56 overflow-visible select-none">
            {svgDefs}
            {/* Principal Axis */}
            <line x1="10" y1="105" x2="330" y2="105" stroke="#64748b" strokeWidth="1.5" />

            {/* Biconvex Thin Lens */}
            <path d="M 155,28 Q 178,105 155,182 Q 132,105 155,28 Z" fill="rgba(56, 189, 248, 0.16)" stroke="#3b82f6" strokeWidth="2.2" />
            <text x="148" y="22" fill="#3b82f6" fontSize="10" fontWeight="bold">X (n₂)</text>
            <text x="150" y="192" fill="#3b82f6" fontSize="10" fontWeight="bold">Y</text>
            <circle cx="155" cy="105" r="2.5" fill="var(--text-primary)" />
            <text x="157" y="118" fill="var(--text-primary)" fontSize="9.5" fontWeight="bold">C</text>
            <text x="128" y="88" fill="#f59e0b" fontSize="9">R₁</text>
            <text x="172" y="88" fill="#a855f7" fontSize="9">R₂</text>

            {/* Object O */}
            <circle cx="38" cy="105" r="4" fill="#f59e0b" />
            <text x="33" y="122" fill="#f59e0b" fontSize="11" fontWeight="bold">O</text>

            {/* Incident ray from O to first surface B */}
            <line x1="38" y1="105" x2="149" y2="54" stroke="#f59e0b" strokeWidth="2.2" markerEnd="url(#arrow-amber)" />
            {/* First surface alone would form I1 (dashed) */}
            <line x1="149" y1="54" x2="310" y2="105" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4,3" />
            <circle cx="310" cy="105" r="3.5" fill="#a855f7" />
            <text x="306" y="122" fill="#a855f7" fontSize="10.5" fontWeight="bold">I₁</text>

            {/* Actual emergent ray converging to final image I */}
            <line x1="149" y1="54" x2="161" y2="58" stroke="#10b981" strokeWidth="2.2" />
            <line x1="161" y1="58" x2="255" y2="105" stroke="#10b981" strokeWidth="2.2" markerEnd="url(#arrow-emerald)" />
            <circle cx="255" cy="105" r="4" fill="#10b981" />
            <text x="251" y="122" fill="#10b981" fontSize="11" fontWeight="bold">I</text>

            <text x="72" y="156" fill="#f59e0b" fontSize="9.5" fontWeight="bold">u (−)</text>
            <text x="200" y="156" fill="#10b981" fontSize="9.5" fontWeight="bold">v (Final)</text>
            <text x="274" y="156" fill="#a855f7" fontSize="9.5" fontWeight="bold">v₁ (Virtual Obj)</text>
          </svg>
        </div>
        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1.5">
            <span className="text-[10px] text-blue-500 font-bold block uppercase font-sans">Lens Maker&apos;s Formula (Two-Surface Refraction)</span>
            <div className="text-xs text-[var(--text-primary)] font-bold">
              1/f = (n₂₁ − 1)(1/R₁ − 1/R₂)   |   1/v − 1/u = 1/f
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] font-sans leading-relaxed">
              • <strong>Surface 1 (n₁ → n₂):</strong> n₂/v₁ − n₁/u = (n₂ − n₁)/R₁.<br />
              • <strong>Surface 2 (n₂ → n₁):</strong> n₁/v − n₂/v₁ = (n₁ − n₂)/R₂.<br />
              • <strong>Add both:</strong> n₂/v₁ cancels out! Setting u = ∞ ⟹ v = f.
            </p>
          </div>
        </div>
      </div>
    );

    const microscopeContent = (
      <div className="flex flex-col lg:flex-row items-center gap-5 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg viewBox="0 0 360 205" className="w-full h-auto max-h-60 overflow-visible select-none">
            {svgDefs}
            {/* Principal Axis */}
            <line x1="10" y1="108" x2="350" y2="108" stroke="#64748b" strokeWidth="1.4" />

            {/* Objective Lens L_o (Small aperture, short f_o) */}
            <path d="M 95,62 Q 106,108 95,154 Q 84,108 95,62 Z" fill="rgba(59, 130, 246, 0.18)" stroke="#3b82f6" strokeWidth="2" />
            <text x="95" y="54" textAnchor="middle" fill="#3b82f6" fontSize="9.5" fontWeight="bold">Objective (L_o)</text>

            {/* Eyepiece Lens L_e (Larger aperture, moderate f_e) */}
            <path d="M 275,38 Q 290,108 275,178 Q 260,108 275,38 Z" fill="rgba(16, 185, 129, 0.16)" stroke="#10b981" strokeWidth="2.2" />
            <text x="275" y="30" textAnchor="middle" fill="#10b981" fontSize="9.5" fontWeight="bold">Eyepiece (L_e)</text>

            {/* Object AB just outside F_o */}
            <line x1="36" y1="108" x2="36" y2="88" stroke="#f59e0b" strokeWidth="2.6" markerEnd="url(#arrow-amber)" />
            <text x="25" y="88" fill="#f59e0b" fontSize="10" fontWeight="bold">B</text>
            <text x="25" y="120" fill="#f59e0b" fontSize="10" fontWeight="bold">A</text>
            <circle cx="52" cy="108" r="2.5" fill="#f43f5e" />
            <text x="48" y="122" fill="#f43f5e" fontSize="9" fontWeight="bold">F_o</text>

            {/* Intermediate Real Inverted Image A'B' inside F_e */}
            <line x1="226" y1="108" x2="226" y2="146" stroke="#a855f7" strokeWidth="2.4" markerEnd="url(#arrow-purple)" />
            <text x="220" y="102" fill="#a855f7" fontSize="10" fontWeight="bold">A&apos;</text>
            <text x="221" y="159" fill="#a855f7" fontSize="10" fontWeight="bold">B&apos;</text>
            <circle cx="212" cy="108" r="2.5" fill="#10b981" />
            <text x="204" y="120" fill="#10b981" fontSize="9" fontWeight="bold">F_e</text>

            {/* Rays from Object through Objective to A'B' */}
            <line x1="36" y1="88" x2="95" y2="88" stroke="#f59e0b" strokeWidth="1.6" />
            <line x1="95" y1="88" x2="226" y2="146" stroke="#f59e0b" strokeWidth="1.6" />
            <line x1="36" y1="88" x2="226" y2="146" stroke="#f59e0b" strokeWidth="1.6" />

            {/* Final Virtual Image A''B'' at Least Distance D */}
            <line x1="138" y1="108" x2="138" y2="188" stroke="#0ea5e9" strokeWidth="2.4" strokeDasharray="4,2" />
            <text x="130" y="102" fill="#0ea5e9" fontSize="10" fontWeight="bold">A&apos;&apos;</text>
            <text x="132" y="198" fill="#0ea5e9" fontSize="10" fontWeight="bold">B&apos;&apos; (At D)</text>

            {/* Rays through Eyepiece + backward dashed extensions to B'' */}
            <line x1="226" y1="146" x2="275" y2="146" stroke="#10b981" strokeWidth="1.6" />
            <line x1="275" y1="146" x2="345" y2="178" stroke="#10b981" strokeWidth="1.8" markerEnd="url(#arrow-emerald)" />
            <line x1="226" y1="146" x2="340" y2="195" stroke="#10b981" strokeWidth="1.8" markerEnd="url(#arrow-emerald)" />
            <line x1="275" y1="146" x2="138" y2="188" stroke="#0ea5e9" strokeWidth="1.3" strokeDasharray="3,3" />
            <line x1="226" y1="146" x2="138" y2="188" stroke="#0ea5e9" strokeWidth="1.3" strokeDasharray="3,3" />
          </svg>
        </div>
        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1.5">
            <span className="text-[10px] text-purple-400 font-bold block uppercase font-sans">Simple &amp; Compound Microscope Magnification</span>
            <div className="text-xs text-[var(--text-primary)] font-bold">
              M_D = (L / f_o)(1 + D / f_e)   |   M_∞ = (L / f_o)(D / f_e)
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] font-sans leading-relaxed">
              • <strong>Simple Microscope:</strong> M = 1 + D/f (at near point D = 25 cm); M = D/f (normal adjustment at ∞).<br />
              • <strong>Compound Microscope:</strong> Both f_o and f_e must be small for high magnification; intermediate image A&apos;B&apos; is real &amp; inverted inside F_e.
            </p>
          </div>
        </div>
      </div>
    );

    const astroTelescopeContent = (
      <div className="flex flex-col lg:flex-row items-center gap-5 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg viewBox="0 0 360 195" className="w-full h-auto max-h-56 overflow-visible select-none">
            {svgDefs}
            {/* Principal Axis */}
            <line x1="10" y1="100" x2="350" y2="100" stroke="#64748b" strokeWidth="1.4" />

            {/* Large Objective Lens L_o */}
            <path d="M 85,22 Q 100,100 85,178 Q 70,100 85,22 Z" fill="rgba(59, 130, 246, 0.16)" stroke="#3b82f6" strokeWidth="2.2" />
            <text x="85" y="15" textAnchor="middle" fill="#3b82f6" fontSize="9.5" fontWeight="bold">Objective (Large f_o)</text>

            {/* Small Eyepiece Lens L_e */}
            <path d="M 285,60 Q 295,100 285,140 Q 275,100 285,60 Z" fill="rgba(16, 185, 129, 0.18)" stroke="#10b981" strokeWidth="2.2" />
            <text x="285" y="52" textAnchor="middle" fill="#10b981" fontSize="9.5" fontWeight="bold">Eyepiece (f_e)</text>

            {/* Parallel Rays from distant star at angle alpha */}
            <line x1="12" y1="36" x2="85" y2="54" stroke="#f59e0b" strokeWidth="1.8" markerEnd="url(#arrow-amber)" />
            <line x1="12" y1="82" x2="85" y2="100" stroke="#f59e0b" strokeWidth="1.8" markerEnd="url(#arrow-amber)" />
            <line x1="12" y1="128" x2="85" y2="146" stroke="#f59e0b" strokeWidth="1.8" markerEnd="url(#arrow-amber)" />
            <text x="44" y="92" fill="#f59e0b" fontSize="9.5" fontWeight="bold">α</text>

            {/* Converging at F_o = F_e (Normal Adjustment) */}
            <line x1="85" y1="54" x2="225" y2="136" stroke="#f59e0b" strokeWidth="1.7" />
            <line x1="85" y1="100" x2="225" y2="136" stroke="#f59e0b" strokeWidth="1.7" />
            <line x1="85" y1="146" x2="225" y2="136" stroke="#f59e0b" strokeWidth="1.7" />

            {/* Intermediate Real Inverted Image at F_o, F_e */}
            <line x1="225" y1="100" x2="225" y2="136" stroke="#a855f7" strokeWidth="2.5" />
            <text x="218" y="93" fill="#a855f7" fontSize="9.5" fontWeight="bold">F_o, F_e (A&apos;)</text>
            <text x="220" y="149" fill="#a855f7" fontSize="9.5" fontWeight="bold">B&apos;</text>

            {/* Rays from B' to Eyepiece and parallel emergent bundle to eye at ∞ */}
            <line x1="225" y1="136" x2="285" y2="136" stroke="#10b981" strokeWidth="1.7" />
            <line x1="225" y1="136" x2="285" y2="100" stroke="#10b981" strokeWidth="1.7" />
            <line x1="285" y1="136" x2="345" y2="76" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-emerald)" />
            <line x1="285" y1="100" x2="345" y2="40" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-emerald)" />
            <text x="305" y="108" fill="#10b981" fontSize="9.5" fontWeight="bold">β (Eye at ∞)</text>

            <line x1="85" y1="184" x2="285" y2="184" stroke="var(--text-muted)" strokeWidth="1.2" strokeDasharray="3,2" />
            <text x="185" y="194" textAnchor="middle" fill="var(--text-primary)" fontSize="9.5" fontWeight="bold">Tube Length L = f_o + f_e</text>
          </svg>
        </div>
        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1.5">
            <span className="text-[10px] text-emerald-500 font-bold block uppercase font-sans">Astronomical Refracting Telescope</span>
            <div className="text-xs text-[var(--text-primary)] font-bold">
              M = −f_o / f_e   (L = f_o + f_e)   |   M_D = −(f_o / f_e)(1 + f_e / D)
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] font-sans leading-relaxed">
              • <strong>Objective Aperture:</strong> Made very large to collect more light (higher brightness &amp; resolving power) and large f_o for high magnification.<br />
              • <strong>Eyepiece:</strong> Small f_e so M = f_o / f_e is large.
            </p>
          </div>
        </div>
      </div>
    );

    const cassegrainContent = (
      <div className="flex flex-col lg:flex-row items-center gap-5 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg viewBox="0 0 360 195" className="w-full h-auto max-h-56 overflow-visible select-none">
            {svgDefs}
            {/* Central axis */}
            <line x1="15" y1="100" x2="345" y2="100" stroke="#64748b" strokeWidth="1.2" strokeDasharray="4,3" />

            {/* Large Parabolic Primary Mirror with Central Hole */}
            <path d="M 275,26 Q 302,60 288,88" fill="none" stroke="#3b82f6" strokeWidth="4" />
            <path d="M 288,112 Q 302,140 275,174" fill="none" stroke="#3b82f6" strokeWidth="4" />
            <text x="275" y="18" textAnchor="middle" fill="#3b82f6" fontSize="9.5" fontWeight="bold">Parabolic Objective Mirror</text>

            {/* Small Convex Secondary Mirror */}
            <path d="M 108,76 Q 94,100 108,124" fill="none" stroke="#a855f7" strokeWidth="3.5" />
            <text x="102" y="65" textAnchor="middle" fill="#a855f7" fontSize="9.5" fontWeight="bold">Convex Secondary Mirror</text>

            {/* Incoming Parallel Rays from ∞ (avoiding central shadow) */}
            <line x1="20" y1="42" x2="280" y2="42" stroke="#f59e0b" strokeWidth="2.2" markerEnd="url(#arrow-amber)" />
            <line x1="20" y1="158" x2="280" y2="158" stroke="#f59e0b" strokeWidth="2.2" markerEnd="url(#arrow-amber)" />

            {/* Reflected from Primary toward F1 (dotted) and intercepted by Secondary */}
            <line x1="280" y1="42" x2="105" y2="85" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-emerald)" />
            <line x1="280" y1="158" x2="105" y2="115" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-emerald)" />
            <line x1="105" y1="85" x2="68" y2="94" stroke="#10b981" strokeWidth="1.2" strokeDasharray="3,3" />
            <line x1="105" y1="115" x2="68" y2="106" stroke="#10b981" strokeWidth="1.2" strokeDasharray="3,3" />
            <text x="58" y="103" fill="var(--text-muted)" fontSize="9" fontWeight="bold">F₁</text>

            {/* Reflected by Secondary through Central Aperture to Eyepiece */}
            <line x1="105" y1="85" x2="322" y2="100" stroke="#f43f5e" strokeWidth="2" markerEnd="url(#arrow-rose)" />
            <line x1="105" y1="115" x2="322" y2="100" stroke="#f43f5e" strokeWidth="2" markerEnd="url(#arrow-rose)" />

            {/* Eyepiece Lens behind Central Hole */}
            <path d="M 322,84 Q 330,100 322,116 Q 314,100 322,84 Z" fill="rgba(244, 63, 94, 0.2)" stroke="#f43f5e" strokeWidth="1.8" />
            <text x="328" y="77" textAnchor="middle" fill="#f43f5e" fontSize="9.5" fontWeight="bold">Eyepiece</text>
          </svg>
        </div>
        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1.5">
            <span className="text-[10px] text-rose-400 font-bold block uppercase font-sans">Cassegrain Reflecting Telescope (Advantages over Refractors)</span>
            <div className="text-xs text-[var(--text-primary)] font-bold">
              M = f_o / f_e   |   Zero Chromatic &amp; Zero Spherical Aberration
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] font-sans leading-relaxed">
              • <strong>1. No Chromatic Aberration:</strong> Reflection does not split wavelengths like refraction.<br />
              • <strong>2. No Spherical Aberration:</strong> Parabolic mirror brings all paraxial &amp; marginal rays to one sharp focus.<br />
              • <strong>3. Mechanical Support:</strong> Full back of mirror can be supported + lighter &amp; compact folded path.
            </p>
          </div>
        </div>
      </div>
    );

    const renderSelectedRay = () => {
      switch (activeRay) {
        case 'spherical-surface': return sphericalSurfaceContent;
        case 'lens-maker': return lensMakerContent;
        case 'microscope': return microscopeContent;
        case 'astronomical-telescope': return astroTelescopeContent;
        case 'cassegrain': return cassegrainContent;
        default: return mirrorContent;
      }
    };

    const content = (
      <div className="space-y-4">
        {!(inline && subMode) && (
          <div className="flex flex-wrap gap-1.5">
            {[
              { id: 'mirror', label: '1. Mirror (R=2f)' },
              { id: 'spherical-surface', label: '2. Spherical Refraction' },
              { id: 'lens-maker', label: "3. Lens Maker's" },
              { id: 'microscope', label: '4. Compound Microscope' },
              { id: 'astronomical-telescope', label: '5. Astro Telescope' },
              { id: 'cassegrain', label: '6. Cassegrain Reflector' }
            ].map(t => (
              <button
                key={t.id}
                type="button"
                onClick={() => setRayOpticsMode(t.id)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeRay === t.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-blue-500/40'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        )}
        {renderSelectedRay()}
      </div>
    );

    if (inline) return content;
    return (
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 sm:p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-3">
          <span className="p-1.5 rounded-lg bg-blue-500/15 text-blue-500"><Compass size={16} /></span>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">Ray Optics: Mirrors, Spherical Refraction, Lenses &amp; Instruments</h4>
            <p className="text-[11px] text-[var(--text-muted)]">Switch across all 6 NCERT Ch 9 ray diagrams: Mirror, Spherical Surface, Lens Maker, Microscope &amp; Telescopes</p>
          </div>
        </div>
        {content}
      </div>
    );
  }

  /* -------------------------------------------------------------
   * 22. WAVE OPTICS: YDSE GEOMETRY & COHERENT INTERFERENCE INTENSITY
   * ------------------------------------------------------------- */
  if (diagramId === 'ydse-wave-optics') {
    const activeYdse = (inline && subMode) ? subMode : ydseMode;

    const ydseGeometryContent = (
      <div className="flex flex-col lg:flex-row items-center gap-6 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg viewBox="0 0 320 190" className="w-full h-auto max-h-56 overflow-visible select-none">
            {svgDefs}
            {/* Double Slit Barrier */}
            <line x1="55" y1="15" x2="55" y2="55" stroke="var(--text-primary)" strokeWidth="3" />
            <line x1="55" y1="70" x2="55" y2="115" stroke="var(--text-primary)" strokeWidth="3" />
            <line x1="55" y1="130" x2="55" y2="170" stroke="var(--text-primary)" strokeWidth="3" />
            <text x="36" y="66" fill="#3b82f6" fontSize="10.5" fontWeight="bold">S₁</text>
            <text x="36" y="126" fill="#3b82f6" fontSize="10.5" fontWeight="bold">S₂</text>
            <line x1="46" y1="62" x2="46" y2="122" stroke="#3b82f6" strokeWidth="1" strokeDasharray="2,2" />
            <text x="26" y="96" fill="#3b82f6" fontSize="10" fontWeight="bold">d</text>

            {/* Screen & Central Axis */}
            <line x1="255" y1="15" x2="255" y2="170" stroke="#10b981" strokeWidth="2.5" />
            <line x1="55" y1="92" x2="255" y2="92" stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" />
            <circle cx="255" cy="92" r="3" fill="#10b981" />
            <text x="263" y="96" fill="#10b981" fontSize="10" fontWeight="bold">O (Central Max)</text>

            {/* Point P at y_n */}
            <circle cx="255" cy="36" r="4.5" fill="#f43f5e" />
            <text x="264" y="40" fill="#f43f5e" fontSize="10.5" fontWeight="bold">P (y_n)</text>
            <text x="263" y="68" fill="#f43f5e" fontSize="9.5" fontWeight="bold">y</text>

            {/* Rays S1P and S2P + normal drop S1M for path difference */}
            <line x1="55" y1="62" x2="255" y2="36" stroke="#f59e0b" strokeWidth="2" />
            <line x1="55" y1="122" x2="255" y2="36" stroke="#a855f7" strokeWidth="2" />
            <line x1="55" y1="62" x2="72" y2="115" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3,2" />
            <text x="72" y="132" fill="#a855f7" fontSize="9.5" fontWeight="bold">Δx = S₂M ≈ d sin θ</text>

            {/* Distance D */}
            <line x1="55" y1="162" x2="255" y2="162" stroke="var(--text-muted)" strokeWidth="1.2" strokeDasharray="3,3" />
            <text x="155" y="177" textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontWeight="bold">Screen Distance D (D ≫ d)</text>
          </svg>
        </div>

        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1">
            <span className="text-[10px] text-emerald-400 font-bold block uppercase font-sans">YDSE Path Difference &amp; Fringe Width:</span>
            <div className="text-xs text-[var(--text-primary)] font-bold">
              Δx = y · d / D   |   Fringe Width β = λD / d
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] font-sans mt-1 leading-relaxed">
              • <strong>Bright Fringes (Maxima):</strong> Δx = nλ ⟹ y_n = nλD/d (n = 0, ±1, ±2...).<br />
              • <strong>Dark Fringes (Minima):</strong> Δx = (2n − 1)λ/2 ⟹ y_n = (2n − 1)λD/(2d).<br />
              • <strong>Equal Width:</strong> All bright and dark fringes have equal width β = λD/d!
            </p>
          </div>
        </div>
      </div>
    );

    const interferenceIntensityContent = (
      <div className="flex flex-col lg:flex-row items-center gap-6 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg viewBox="0 0 340 190" className="w-full h-auto max-h-56 overflow-visible select-none">
            <line x1="35" y1="158" x2="320" y2="158" stroke="#64748b" strokeWidth="1.5" />
            <line x1="175" y1="20" x2="175" y2="158" stroke="#64748b" strokeDasharray="3,3" strokeWidth="1.2" />
            <text x="182" y="28" fill="var(--text-primary)" fontSize="10" fontWeight="bold">I(φ) = 4I₀ cos²(φ/2)</text>

            {/* Average Incoherent line 2 I0 */}
            <line x1="40" y1="98" x2="315" y2="98" stroke="#f59e0b" strokeDasharray="5,4" strokeWidth="1.6" />
            <text x="22" y="102" fill="#f59e0b" fontSize="9.5" fontWeight="bold">2I₀</text>
            <text x="18" y="42" fill="#10b981" fontSize="9.5" fontWeight="bold">4I₀</text>
            <line x1="35" y1="38" x2="315" y2="38" stroke="#10b981" strokeDasharray="3,3" strokeWidth="1" />

            {/* Uniform cos² curve peaking at 4I0 and dropping to 0 */}
            <path
              d="M 45,158 Q 88,38 115,38 Q 142,158 145,158 Q 160,38 175,38 Q 190,38 205,158 Q 220,38 235,38 Q 250,38 265,158 Q 280,38 295,38 L 312,110"
              fill="rgba(56, 189, 248, 0.14)"
              stroke="#0ea5e9"
              strokeWidth="2.5"
            />
            <text x="175" y="174" textAnchor="middle" fill="#10b981" fontSize="9.5" fontWeight="bold">φ = 0 (±2π, ±4π)</text>
            <text x="95" y="174" fill="#f43f5e" fontSize="9.5" fontWeight="bold">−π</text>
            <text x="232" y="174" fill="#f43f5e" fontSize="9.5" fontWeight="bold">+π</text>
          </svg>
        </div>
        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1">
            <span className="text-[10px] text-sky-400 font-bold block uppercase font-sans">Coherent Superposition &amp; Energy Conservation</span>
            <div className="text-xs text-[var(--text-primary)] font-bold">
              I = I₁ + I₂ + 2√(I₁I₂) cos φ   ⟹   I_max = (√I₁ + √I₂)²
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] font-sans mt-1 leading-relaxed">
              • <strong>For I₁ = I₂ = I₀:</strong> I(φ) = 4I₀ cos²(φ/2); I_min = 0 at φ = (2n − 1)π.<br />
              • <strong>Conservation of Energy:</strong> Spatial average I_avg = (4I₀ + 0)/2 = 2I₀ (= I₁ + I₂). No energy is destroyed — it shifts from dark fringes to bright fringes!
            </p>
          </div>
        </div>
      </div>
    );

    const content = (
      <div className="space-y-4">
        {!(inline && subMode) && (
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setYdseMode('ydse-geometry')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeYdse === 'ydse-geometry' ? 'bg-emerald-600 text-white shadow-sm' : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)]'
              }`}
            >
              1. YDSE Slit Geometry &amp; Fringe Width (β)
            </button>
            <button
              type="button"
              onClick={() => setYdseMode('interference-intensity')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeYdse === 'interference-intensity' ? 'bg-emerald-600 text-white shadow-sm' : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)]'
              }`}
            >
              2. Coherent Interference I(φ) = 4I₀ cos²(φ/2)
            </button>
          </div>
        )}
        {activeYdse === 'interference-intensity' ? interferenceIntensityContent : ydseGeometryContent}
      </div>
    );

    if (inline) return content;
    return (
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 sm:p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-3">
          <span className="p-1.5 rounded-lg bg-emerald-500/15 text-emerald-500"><Activity size={16} /></span>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">Young&apos;s Double-Slit Interference &amp; Coherent Intensity Curve</h4>
            <p className="text-[11px] text-[var(--text-muted)]">Path difference Δx = yd/D, fringe width β = λD/d &amp; I(φ) = 4I₀ cos²(φ/2)</p>
          </div>
        </div>
        {content}
      </div>
    );
  }

  /* -------------------------------------------------------------
   * 23. DUAL NATURE: PHOTOELECTRIC SETUP, GRAPHS & DE BROGLIE (4 Modes)
   * ------------------------------------------------------------- */
  if (diagramId === 'photoelectric-graphs') {
    const activePhoto = (inline && subMode) ? subMode : photoMode;

    const experimentalSetupContent = (
      <div className="flex flex-col lg:flex-row items-center gap-5 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg viewBox="0 0 340 190" className="w-full h-auto max-h-56 overflow-visible select-none">
            {svgDefs}
            {/* Evacuated Glass Tube */}
            <rect x="45" y="42" width="235" height="90" rx="45" fill="rgba(56, 189, 248, 0.08)" stroke="#64748b" strokeWidth="2" />
            {/* Quartz Window */}
            <ellipse cx="145" cy="42" rx="22" ry="7" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" strokeWidth="1.8" />
            <text x="145" y="16" textAnchor="middle" fill="#a855f7" fontSize="9.5" fontWeight="bold">Quartz Window (UV)</text>

            {/* Light rays hitting Cathode C */}
            <line x1="145" y1="22" x2="88" y2="82" stroke="#f59e0b" strokeWidth="1.8" strokeDasharray="4,2" markerEnd="url(#arrow-amber)" />
            <line x1="158" y1="22" x2="94" y2="95" stroke="#f59e0b" strokeWidth="1.8" strokeDasharray="4,2" markerEnd="url(#arrow-amber)" />
            <text x="165" y="34" fill="#f59e0b" fontSize="9.5" fontWeight="bold">hν &gt; φ₀</text>

            {/* Photosensitive Cathode C (left curved plate) */}
            <path d="M 85,62 Q 72,87 85,112" fill="none" stroke="#f43f5e" strokeWidth="4" />
            <text x="64" y="92" fill="#f43f5e" fontSize="10.5" fontWeight="bold">C</text>

            {/* Collector Anode A (right plate) */}
            <line x1="242" y1="66" x2="242" y2="108" stroke="#10b981" strokeWidth="4" />
            <text x="250" y="92" fill="#10b981" fontSize="10.5" fontWeight="bold">A</text>

            {/* Photoelectrons travelling C -> A */}
            <circle cx="135" cy="82" r="3" fill="#3b82f6" />
            <circle cx="170" cy="90" r="3" fill="#3b82f6" />
            <circle cx="205" cy="84" r="3" fill="#3b82f6" />
            <line x1="115" y1="74" x2="225" y2="74" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arrow-blue)" />
            <text x="170" y="68" textAnchor="middle" fill="#3b82f6" fontSize="9.5" fontWeight="bold">e⁻ (Photoelectrons)</text>

            {/* External Circuit with Microammeter & Commutator Battery */}
            <polyline points="78,87 22,87 22,164 295,164 295,87 244,87" fill="none" stroke="var(--text-muted)" strokeWidth="1.6" />
            <circle cx="90" cy="164" r="12" fill="var(--bg-elevated)" stroke="#10b981" strokeWidth="1.6" />
            <text x="90" y="168" textAnchor="middle" fill="#10b981" fontSize="9.5" fontWeight="bold">μA</text>
            <rect x="145" y="152" width="58" height="22" rx="4" fill="var(--bg-elevated)" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="174" y="167" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="bold">Battery V</text>
            <circle cx="242" cy="164" r="12" fill="var(--bg-elevated)" stroke="#3b82f6" strokeWidth="1.6" />
            <text x="242" y="168" textAnchor="middle" fill="#3b82f6" fontSize="9.5" fontWeight="bold">V</text>
          </svg>
        </div>
        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1">
            <span className="text-[10px] text-purple-400 font-bold block uppercase font-sans">Experimental Photoelectric Apparatus</span>
            <div className="text-xs text-[var(--text-primary)] font-bold">
              Photocurrent i ∝ Intensity I   |   Emission Lag &lt; 10⁻⁹ s
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] font-sans mt-1 leading-relaxed">
              • <strong>Threshold Frequency ν₀:</strong> Minimum frequency below which zero electrons eject, however high the intensity!<br />
              • <strong>Work Function φ₀ = hν₀:</strong> Caesium (2.14 eV) is lowest among alkali metals.<br />
              • <strong>Reversing Polarity (Commutator):</strong> Measures Stopping Potential −V₀ when μA reads zero.
            </p>
          </div>
        </div>
      </div>
    );

    const collectorPotentialContent = (
      <div className="flex flex-col lg:flex-row items-center gap-5 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg viewBox="0 0 320 190" className="w-full h-auto max-h-56 overflow-visible select-none">
            {svgDefs}
            <line x1="25" y1="150" x2="295" y2="150" stroke="#64748b" strokeWidth="1.8" />
            <line x1="130" y1="168" x2="130" y2="18" stroke="#64748b" strokeWidth="1.8" />
            <text x="252" y="165" fill="var(--text-muted)" fontSize="9.5" fontWeight="bold">+V (Collector)</text>
            <text x="136" y="24" fill="var(--text-muted)" fontSize="9.5" fontWeight="bold">Photocurrent i</text>

            {/* Same frequency, different intensities I3 > I2 > I1 */}
            <path d="M 55,150 Q 98,55 155,45 L 275,45" fill="none" stroke="#10b981" strokeWidth="2.4" />
            <path d="M 55,150 Q 98,85 155,78 L 275,78" fill="none" stroke="#3b82f6" strokeWidth="2.4" />
            <path d="M 55,150 Q 98,118 155,110 L 275,110" fill="none" stroke="#f59e0b" strokeWidth="2.4" />

            <circle cx="55" cy="150" r="4.5" fill="#f43f5e" />
            <text x="55" y="168" textAnchor="middle" fill="#f43f5e" fontSize="10" fontWeight="bold">−V₀ (Constant ν)</text>
            <text x="226" y="38" fill="#10b981" fontSize="9.5" fontWeight="bold">I₃ (High Intensity)</text>
            <text x="226" y="71" fill="#3b82f6" fontSize="9.5" fontWeight="bold">I₂</text>
            <text x="226" y="103" fill="#f59e0b" fontSize="9.5" fontWeight="bold">I₁ (Low Intensity)</text>
          </svg>
        </div>

        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1">
            <span className="text-[10px] text-amber-500 font-bold block uppercase font-sans">Effect of Intensity &amp; Stopping Potential (−V₀):</span>
            <div className="text-xs text-[var(--text-primary)] font-bold">
              K_max = eV₀ = hν − φ₀ (Independent of Intensity!)
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] font-sans mt-1 leading-relaxed">
              • <strong>Constant Frequency ν:</strong> Increasing intensity (I₃ &gt; I₂ &gt; I₁) increases saturation current proportionally, but <strong>−V₀ stays identical</strong>.<br />
              • <strong>Increasing Frequency (ν₃ &gt; ν₂ &gt; ν₁):</strong> Saturation current stays same (fixed photon flux), while magnitude of V₀ increases!
            </p>
          </div>
        </div>
      </div>
    );

    const einsteinSlopeContent = (
      <div className="flex flex-col lg:flex-row items-center gap-5 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg viewBox="0 0 320 190" className="w-full h-auto max-h-56 overflow-visible select-none">
            <line x1="48" y1="126" x2="295" y2="126" stroke="#64748b" strokeWidth="1.6" />
            <line x1="65" y1="18" x2="65" y2="180" stroke="#64748b" strokeWidth="1.6" />
            <text x="228" y="142" fill="var(--text-muted)" fontSize="9.5" fontWeight="bold">Frequency ν →</text>
            <text x="14" y="65" fill="var(--text-muted)" fontSize="9.5" fontWeight="bold" transform="rotate(-90 14,65)">Stopping V₀ →</text>

            {/* Metal A parallel line */}
            <line x1="65" y1="148" x2="108" y2="126" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3,3" />
            <line x1="108" y1="126" x2="245" y2="46" stroke="#10b981" strokeWidth="2.6" />
            <circle cx="108" cy="126" r="3.5" fill="#10b981" />
            <text x="102" y="119" fill="#10b981" fontSize="9.5" fontWeight="bold">ν₀A</text>
            <text x="220" y="38" fill="#10b981" fontSize="9.5" fontWeight="bold">Metal A (slope h/e)</text>

            {/* Metal B parallel line */}
            <line x1="65" y1="170" x2="152" y2="126" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3,3" />
            <line x1="152" y1="126" x2="280" y2="52" stroke="#3b82f6" strokeWidth="2.6" />
            <circle cx="152" cy="126" r="3.5" fill="#3b82f6" />
            <text x="150" y="119" fill="#3b82f6" fontSize="9.5" fontWeight="bold">ν₀B</text>
            <text x="218" y="96" fill="#3b82f6" fontSize="9.5" fontWeight="bold">Metal B (φ₀B &gt; φ₀A)</text>

            <text x="18" y="152" fill="#10b981" fontSize="8.5" fontWeight="bold">−φ₀A/e</text>
            <text x="18" y="173" fill="#3b82f6" fontSize="8.5" fontWeight="bold">−φ₀B/e</text>
          </svg>
        </div>
        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1">
            <span className="text-[10px] text-emerald-500 font-bold block uppercase font-sans">Einstein&apos;s Photoelectric Equation &amp; Universal Slope</span>
            <div className="text-xs text-[var(--text-primary)] font-bold">
              V₀ = (h / e)ν − (φ₀ / e)
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] font-sans mt-1 leading-relaxed">
              • <strong>Universal Slope:</strong> Both lines are strictly parallel because slope tan θ = h/e depends ONLY on Planck&apos;s constant &amp; charge e (independent of metal!).<br />
              • <strong> intercepts:</strong> x-intercept gives threshold ν₀; y-intercept gives −φ₀/e.
            </p>
          </div>
        </div>
      </div>
    );

    const deBroglieContent = (
      <div className="flex flex-col lg:flex-row items-center gap-5 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg viewBox="0 0 320 190" className="w-full h-auto max-h-56 overflow-visible select-none">
            {/* Circular Bohr Orbit + Standing de Broglie Wave (n = 4) */}
            <circle cx="155" cy="92" r="56" fill="none" stroke="#64748b" strokeWidth="1.2" strokeDasharray="4,3" />
            <path
              d="M 155,24 C 175,24 185,48 203,44 C 221,40 212,68 223,92 C 234,116 205,120 203,140 C 201,160 175,146 155,160 C 135,174 128,144 107,140 C 86,136 99,112 87,92 C 75,72 103,64 107,44 C 111,24 135,24 155,24 Z"
              fill="none"
              stroke="#a855f7"
              strokeWidth="2.4"
            />
            <circle cx="155" cy="92" r="8" fill="#f43f5e" />
            <text x="155" y="96" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="bold">+</text>
            <text x="155" y="178" textAnchor="middle" fill="#a855f7" fontSize="10" fontWeight="bold">Standing Wave on Bohr Orbit: 2πr = nλ</text>
            <text x="155" y="15" textAnchor="middle" fill="#3b82f6" fontSize="9.5" fontWeight="bold">λ_e = h / √(2m_e eV) = 1.227 / √V nm</text>
          </svg>
        </div>
        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1">
            <span className="text-[10px] text-purple-400 font-bold block uppercase font-sans">de Broglie Matter Waves &amp; Photon Momentum</span>
            <div className="text-xs text-[var(--text-primary)] font-bold">
              λ = h / p = h / (mv) = h / √(2mK) = 1.227 / √V nm
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] font-sans mt-1 leading-relaxed">
              • <strong>For Photon:</strong> E = hν = hc/λ, p = h/λ = E/c, zero rest mass, neutral.<br />
              • <strong>For Equal K:</strong> λ ∝ 1/√m ⟹ λ_electron &gt; λ_proton &gt; λ_alpha.<br />
              • <strong>For Equal V (Potential):</strong> λ ∝ 1/√(mq).
            </p>
          </div>
        </div>
      </div>
    );

    const renderPhoto = () => {
      switch (activePhoto) {
        case 'experimental-setup': return experimentalSetupContent;
        case 'einstein-slope': return einsteinSlopeContent;
        case 'de-broglie': return deBroglieContent;
        default: return collectorPotentialContent;
      }
    };

    const content = (
      <div className="space-y-4">
        {!(inline && subMode) && (
          <div className="flex flex-wrap gap-1.5">
            {[
              { id: 'experimental-setup', label: '1. Quartz Tube Setup' },
              { id: 'collector-potential', label: '2. i vs V Curves' },
              { id: 'einstein-slope', label: '3. V₀ vs ν (Slope h/e)' },
              { id: 'de-broglie', label: '4. de Broglie Matter Wave' }
            ].map(t => (
              <button
                key={t.id}
                type="button"
                onClick={() => setPhotoMode(t.id)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activePhoto === t.id ? 'bg-amber-600 text-white shadow-sm' : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)]'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        )}
        {renderPhoto()}
      </div>
    );

    if (inline) return content;
    return (
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 sm:p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-3">
          <span className="p-1.5 rounded-lg bg-amber-500/15 text-amber-500"><Zap size={16} /></span>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">Photoelectric Effect Setup, V₀–ν Graph &amp; de Broglie Wavelength</h4>
            <p className="text-[11px] text-[var(--text-muted)]">Quartz tube experiment, intensity/stopping-potential curves, Einstein slope h/e &amp; matter waves</p>
          </div>
        </div>
        {content}
      </div>
    );
  }

  /* -------------------------------------------------------------
   * 24. ATOMS: ALPHA SCATTERING, BOHR ORBITS & HYDROGEN SPECTRAL SERIES
   * ------------------------------------------------------------- */
  if (diagramId === 'bohr-atom-spectra') {
    const activeBohr = (inline && subMode) ? subMode : bohrMode;

    const alphaScatteringContent = (
      <div className="flex flex-col lg:flex-row items-center gap-5 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg viewBox="0 0 320 190" className="w-full h-auto max-h-56 overflow-visible select-none">
            {svgDefs}
            {/* Central Gold Nucleus +Ze */}
            <circle cx="220" cy="95" r="10" fill="#f59e0b" stroke="#f43f5e" strokeWidth="2" />
            <text x="220" y="98" textAnchor="middle" fill="#ffffff" fontSize="8.5" fontWeight="bold">+Ze</text>

            {/* Impact parameter b=0 head-on turning at r0 */}
            <line x1="20" y1="95" x2="172" y2="95" stroke="#f43f5e" strokeWidth="2.2" markerEnd="url(#arrow-rose)" />
            <circle cx="174" cy="95" r="3.5" fill="#f43f5e" />
            <line x1="174" y1="95" x2="220" y2="95" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3,2" />
            <text x="196" y="88" textAnchor="middle" fill="#a855f7" fontSize="9.5" fontWeight="bold">r₀</text>
            <text x="72" y="88" fill="#f43f5e" fontSize="9" fontWeight="bold">b = 0 (θ = 180°)</text>

            {/* Small b hyperbolic scattering */}
            <path d="M 20,72 Q 195,70 155,22" fill="none" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow-blue)" />
            <path d="M 20,118 Q 195,120 155,168" fill="none" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow-blue)" />
            <text x="80" y="56" fill="#3b82f6" fontSize="9" fontWeight="bold">Small b (Large θ)</text>

            {/* Large b nearly undeflected */}
            <path d="M 20,30 Q 220,30 295,44" fill="none" stroke="#10b981" strokeWidth="1.8" markerEnd="url(#arrow-emerald)" />
            <path d="M 20,160 Q 220,160 295,146" fill="none" stroke="#10b981" strokeWidth="1.8" markerEnd="url(#arrow-emerald)" />
            <text x="125" y="23" fill="#10b981" fontSize="9" fontWeight="bold">Large b (θ ≈ 0°)</text>
          </svg>
        </div>
        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1">
            <span className="text-[10px] text-rose-400 font-bold block uppercase font-sans">Geiger-Marsden α-Scattering &amp; Closest Approach r₀</span>
            <div className="text-xs text-[var(--text-primary)] font-bold">
              r₀ = (1 / 4πε₀) · (2Ze² / K_α)   |   b ∝ cot(θ/2)
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] font-sans mt-1 leading-relaxed">
              • <strong>At Turning Point r₀:</strong> Initial kinetic energy K_α = ½mv² converts completely into electrostatic PE U = 2Ze²/(4πε₀r₀).<br />
              • <strong>Conclusion:</strong> Most of atom is empty space (~10⁻¹⁰ m), positive charge &amp; mass concentrated in tiny nucleus (~10⁻¹⁴ m).
            </p>
          </div>
        </div>
      </div>
    );

    const bohrOrbitsContent = (
      <div className="flex flex-col lg:flex-row items-center gap-5 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg viewBox="0 0 320 190" className="w-full h-auto max-h-56 overflow-visible select-none">
            {svgDefs}
            {/* Concentric Quantized Orbits n=1, n=2, n=3 */}
            <circle cx="145" cy="95" r="24" fill="none" stroke="#f43f5e" strokeWidth="1.6" strokeDasharray="3,2" />
            <circle cx="145" cy="95" r="48" fill="none" stroke="#3b82f6" strokeWidth="1.8" />
            <circle cx="145" cy="95" r="76" fill="none" stroke="#10b981" strokeWidth="2" />
            <circle cx="145" cy="95" r="9" fill="#f59e0b" />
            <text x="145" y="98" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">+Ze</text>

            {/* Electron on n=2 orbit + force & velocity vectors */}
            <circle cx="193" cy="95" r="5" fill="#3b82f6" />
            <line x1="188" y1="95" x2="160" y2="95" stroke="#f43f5e" strokeWidth="1.8" markerEnd="url(#arrow-rose)" />
            <text x="172" y="88" fill="#f43f5e" fontSize="9" fontWeight="bold">F_c</text>
            <line x1="193" y1="90" x2="193" y2="55" stroke="#10b981" strokeWidth="1.8" markerEnd="url(#arrow-emerald)" />
            <text x="200" y="65" fill="#10b981" fontSize="9.5" fontWeight="bold">v_n</text>

            <text x="145" y="66" textAnchor="middle" fill="#f43f5e" fontSize="8.5" fontWeight="bold">n=1</text>
            <text x="145" y="42" textAnchor="middle" fill="#3b82f6" fontSize="8.5" fontWeight="bold">n=2 (r ∝ n²)</text>
            <text x="145" y="14" textAnchor="middle" fill="#10b981" fontSize="8.5" fontWeight="bold">n=3 (r₃ = 9r₁)</text>
          </svg>
        </div>
        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1">
            <span className="text-[10px] text-blue-400 font-bold block uppercase font-sans">Bohr Quantized nth Orbit Parameters (r_n, v_n, E_n)</span>
            <div className="text-xs text-[var(--text-primary)] font-bold">
              r_n = 0.529 (n²/Z) Å   |   v_n = (c / 137)(Z / n)   |   E_n = −13.6 (Z² / n²) eV
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] font-sans mt-1 leading-relaxed">
              • <strong>Postulate 1:</strong> Centripetal mv²/r = Ze²/(4πε₀r²).<br />
              • <strong>Postulate 2:</strong> Angular momentum mvr = nh/(2π).<br />
              • <strong>Virial Ratio:</strong> Total Energy E_n = −K_n = +U_n / 2 (so K = −E and U = 2E).
            </p>
          </div>
        </div>
      </div>
    );

    const spectralSeriesContent = (
      <div className="flex flex-col lg:flex-row items-center gap-5 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg viewBox="0 0 320 190" className="w-full h-auto max-h-56 overflow-visible select-none">
            {svgDefs}
            <line x1="25" y1="22" x2="215" y2="22" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="220" y="25" fill="#a855f7" fontSize="9" fontWeight="bold">n=∞ (0 eV)</text>

            <line x1="25" y1="42" x2="215" y2="42" stroke="#0ea5e9" strokeWidth="1.6" />
            <text x="220" y="45" fill="#0ea5e9" fontSize="9" fontWeight="bold">n=4 (−0.85 eV)</text>

            <line x1="25" y1="62" x2="215" y2="62" stroke="#10b981" strokeWidth="1.8" />
            <text x="220" y="65" fill="#10b981" fontSize="9" fontWeight="bold">n=3 (−1.51 eV)</text>

            <line x1="25" y1="95" x2="215" y2="95" stroke="#3b82f6" strokeWidth="2" />
            <text x="220" y="98" fill="#3b82f6" fontSize="9" fontWeight="bold">n=2 (−3.40 eV)</text>

            <line x1="25" y1="164" x2="215" y2="164" stroke="#f43f5e" strokeWidth="2.5" />
            <text x="220" y="167" fill="#f43f5e" fontSize="9" fontWeight="bold">n=1 (−13.6 eV)</text>

            {/* Lyman (UV) */}
            <line x1="55" y1="95" x2="55" y2="160" stroke="#f43f5e" strokeWidth="1.8" markerEnd="url(#arrow-rose)" />
            <line x1="78" y1="62" x2="78" y2="160" stroke="#f43f5e" strokeWidth="1.8" markerEnd="url(#arrow-rose)" />
            <line x1="101" y1="42" x2="101" y2="160" stroke="#f43f5e" strokeWidth="1.8" markerEnd="url(#arrow-rose)" />
            <text x="78" y="178" textAnchor="middle" fill="#f43f5e" fontSize="9" fontWeight="bold">Lyman (UV)</text>

            {/* Balmer (Visible) */}
            <line x1="142" y1="62" x2="142" y2="91" stroke="#3b82f6" strokeWidth="1.8" markerEnd="url(#arrow-blue)" />
            <line x1="165" y1="42" x2="165" y2="91" stroke="#3b82f6" strokeWidth="1.8" markerEnd="url(#arrow-blue)" />
            <text x="155" y="110" textAnchor="middle" fill="#3b82f6" fontSize="9" fontWeight="bold">Balmer (Vis)</text>

            {/* Paschen (IR) */}
            <line x1="196" y1="42" x2="196" y2="59" stroke="#10b981" strokeWidth="1.8" markerEnd="url(#arrow-emerald)" />
            <text x="195" y="34" textAnchor="middle" fill="#10b981" fontSize="8.5" fontWeight="bold">Paschen (IR)</text>
          </svg>
        </div>

        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1">
            <span className="text-[10px] text-rose-400 font-bold block uppercase font-sans">Hydrogen Spectral Series (Rydberg Formula)</span>
            <div className="text-xs text-[var(--text-primary)] font-bold">
              1/λ = R_∞ (1/n_1² − 1/n_2²)   |   R_∞ = 1.097 × 10⁷ m⁻¹
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] font-sans mt-1 leading-relaxed">
              • <strong>Lyman (n₁=1, UV):</strong> Shortest λ_min = 91.2 nm (∞→1); Longest H_α = 121.6 nm (2→1).<br />
              • <strong>Balmer (n₁=2, Visible):</strong> H_α (656.3 nm, 3→2) to series limit (364.6 nm).<br />
              • <strong>Paschen (n₁=3), Brackett (4), Pfund (5):</strong> Infrared regions.
            </p>
          </div>
        </div>
      </div>
    );

    const renderBohr = () => {
      switch (activeBohr) {
        case 'alpha-scattering': return alphaScatteringContent;
        case 'bohr-orbits': return bohrOrbitsContent;
        default: return spectralSeriesContent;
      }
    };

    const content = (
      <div className="space-y-4">
        {!(inline && subMode) && (
          <div className="flex flex-wrap gap-1.5">
            {[
              { id: 'alpha-scattering', label: '1. α-Scattering & Closest r₀' },
              { id: 'bohr-orbits', label: '2. Bohr Orbits (r_n, v_n, E_n)' },
              { id: 'spectral-series', label: '3. H-Atom Spectral Series' }
            ].map(t => (
              <button
                key={t.id}
                type="button"
                onClick={() => setBohrMode(t.id)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeBohr === t.id ? 'bg-rose-600 text-white shadow-sm' : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)]'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        )}
        {renderBohr()}
      </div>
    );

    if (inline) return content;
    return (
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 sm:p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-3">
          <span className="p-1.5 rounded-lg bg-rose-500/15 text-rose-500"><Layers size={16} /></span>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">Rutherford α-Scattering, Bohr Model Orbits &amp; Hydrogen Spectra</h4>
            <p className="text-[11px] text-[var(--text-muted)]">Distance of closest approach r₀, quantized r_n/v_n/E_n &amp; Lyman/Balmer/Paschen transitions</p>
          </div>
        </div>
        {content}
      </div>
    );
  }

  /* -------------------------------------------------------------
   * 25. SEMICONDUCTORS: ENERGY BANDS, P-N JUNCTION, V-I CURVE & RECTIFIERS (4 Modes)
   * ------------------------------------------------------------- */
  if (diagramId === 'pn-junction-rectifier') {
    const activeSemi = (inline && subMode) ? subMode : semiMode;

    const energyBandsContent = (
      <div className="flex flex-col lg:flex-row items-center gap-5 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg viewBox="0 0 360 190" className="w-full h-auto max-h-56 overflow-visible select-none">
            {/* 1. Intrinsic */}
            <text x="56" y="18" textAnchor="middle" fill="var(--text-primary)" fontSize="9.5" fontWeight="bold">Intrinsic (Si/Ge)</text>
            <rect x="20" y="28" width="72" height="36" rx="3" fill="rgba(59, 130, 246, 0.14)" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="56" y="50" textAnchor="middle" fill="#3b82f6" fontSize="9.5" fontWeight="bold">CB (n_e)</text>
            <line x1="20" y1="90" x2="92" y2="90" stroke="#64748b" strokeDasharray="3,3" strokeWidth="1.2" />
            <text x="56" y="85" textAnchor="middle" fill="var(--text-muted)" fontSize="8.5" fontWeight="bold">E_F (Midgap)</text>
            <rect x="20" y="114" width="72" height="44" rx="3" fill="rgba(244, 63, 94, 0.14)" stroke="#f43f5e" strokeWidth="1.5" />
            <text x="56" y="139" textAnchor="middle" fill="#f43f5e" fontSize="9.5" fontWeight="bold">VB (n_h)</text>
            <text x="56" y="176" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="bold">n_e = n_h = n_i</text>

            {/* 2. n-Type (Donor Level E_D just below E_C) */}
            <text x="180" y="18" textAnchor="middle" fill="#3b82f6" fontSize="9.5" fontWeight="bold">n-Type (+Pentavalent)</text>
            <rect x="142" y="28" width="76" height="36" rx="3" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="1.6" />
            <text x="180" y="50" textAnchor="middle" fill="#3b82f6" fontSize="9.5" fontWeight="bold">e⁻ (Majority)</text>
            <line x1="142" y1="74" x2="218" y2="74" stroke="#10b981" strokeDasharray="4,2" strokeWidth="2" />
            <text x="180" y="88" textAnchor="middle" fill="#10b981" fontSize="8.5" fontWeight="bold">E_D (~0.01–0.05 eV)</text>
            <rect x="142" y="114" width="76" height="44" rx="3" fill="rgba(244, 63, 94, 0.08)" stroke="#f43f5e" strokeWidth="1.2" />
            <text x="180" y="139" textAnchor="middle" fill="#f43f5e" fontSize="9" fontWeight="bold">Few h⁺</text>
            <text x="180" y="176" textAnchor="middle" fill="#3b82f6" fontSize="9" fontWeight="bold">n_e ≫ n_h</text>

            {/* 3. p-Type (Acceptor Level E_A just above E_V) */}
            <text x="304" y="18" textAnchor="middle" fill="#f43f5e" fontSize="9.5" fontWeight="bold">p-Type (+Trivalent)</text>
            <rect x="266" y="28" width="76" height="36" rx="3" fill="rgba(59, 130, 246, 0.08)" stroke="#3b82f6" strokeWidth="1.2" />
            <text x="304" y="50" textAnchor="middle" fill="#3b82f6" fontSize="9" fontWeight="bold">Few e⁻</text>
            <line x1="266" y1="104" x2="342" y2="104" stroke="#f59e0b" strokeDasharray="4,2" strokeWidth="2" />
            <text x="304" y="96" textAnchor="middle" fill="#f59e0b" fontSize="8.5" fontWeight="bold">E_A (~0.01–0.05 eV)</text>
            <rect x="266" y="114" width="76" height="44" rx="3" fill="rgba(244, 63, 94, 0.2)" stroke="#f43f5e" strokeWidth="1.6" />
            <text x="304" y="139" textAnchor="middle" fill="#f43f5e" fontSize="9.5" fontWeight="bold">h⁺ (Majority)</text>
            <text x="304" y="176" textAnchor="middle" fill="#f43f5e" fontSize="9" fontWeight="bold">n_h ≫ n_e</text>
          </svg>
        </div>
        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1">
            <span className="text-[10px] text-amber-500 font-bold block uppercase font-sans">Semiconductor Classification &amp; Energy Bands</span>
            <div className="text-xs text-[var(--text-primary)] font-bold">
              E_g(Si) = 1.1 eV  |  E_g(Ge) = 0.7 eV  |  n_e · n_h = n_i²
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] font-sans mt-1 leading-relaxed">
              • <strong>Conductor:</strong> Overlapping bands (E_g = 0). <strong>Insulator:</strong> E_g &gt; 3 eV (Diamond ~5.4 eV).<br />
              • <strong>Extrinsic n-type:</strong> Pentavalent dopant (P, As, Sb); donor level E_D just below CB.<br />
              • <strong>Extrinsic p-type:</strong> Trivalent dopant (B, Al, In); acceptor level E_A just above VB.
            </p>
          </div>
        </div>
      </div>
    );

    const depletionLayerContent = (
      <div className="flex flex-col lg:flex-row items-center gap-5 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg viewBox="0 0 280 175" className="w-full h-auto max-h-56 overflow-visible select-none">
            {svgDefs}
            <rect x="25" y="35" width="90" height="75" fill="rgba(244, 63, 94, 0.12)" stroke="#f43f5e" strokeWidth="2" rx="4" />
            <rect x="115" y="35" width="50" height="75" fill="rgba(245, 158, 11, 0.18)" stroke="#f59e0b" strokeWidth="2" />
            <rect x="165" y="35" width="90" height="75" fill="rgba(59, 130, 246, 0.12)" stroke="#3b82f6" strokeWidth="2" rx="4" />

            <text x="65" y="55" textAnchor="middle" fill="#f43f5e" fontSize="11" fontWeight="bold">p-type (Holes)</text>
            <text x="215" y="55" textAnchor="middle" fill="#3b82f6" fontSize="11" fontWeight="bold">n-type (e⁻)</text>
            <text x="140" y="24" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">Depletion Layer (V_B)</text>

            <text x="127" y="65" textAnchor="middle" fill="#f43f5e" fontSize="12" fontWeight="bold">⊖ ⊖</text>
            <text x="153" y="65" textAnchor="middle" fill="#3b82f6" fontSize="12" fontWeight="bold">⊕ ⊕</text>

            <line x1="158" y1="92" x2="122" y2="92" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-emerald)" />
            <text x="140" y="105" textAnchor="middle" fill="#10b981" fontSize="9" fontWeight="bold">E_B (Barrier)</text>

            <text x="140" y="136" textAnchor="middle" fill="var(--text-primary)" fontSize="9.5" fontWeight="bold">
              Diffusion (Majority) ⇌ Drift (Minority by E_B)
            </text>
            <text x="140" y="154" textAnchor="middle" fill="#a855f7" fontSize="9.5" fontWeight="bold">
              Si Barrier V_B ≈ 0.7 V | Ge V_B ≈ 0.3 V
            </text>
          </svg>
        </div>

        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1">
            <span className="text-[10px] text-amber-500 font-bold block uppercase font-sans">p-n Junction Depletion Layer Formation</span>
            <div className="text-xs text-[var(--text-primary)] font-bold">
              I_net = I_diffusion − I_drift = 0 (at Equilibrium)
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] font-sans mt-1 leading-relaxed">
              • <strong>Space-Charge Region:</strong> Immobile −ve acceptor ions (p-side) &amp; +ve donor ions (n-side) create internal barrier field E_B from n to p.<br />
              • <strong>Width W:</strong> Decreases on increasing doping or under Forward Bias; increases under Reverse Bias.
            </p>
          </div>
        </div>
      </div>
    );

    const viCharacteristicsContent = (
      <div className="flex flex-col lg:flex-row items-center gap-5 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg viewBox="0 0 320 190" className="w-full h-auto max-h-56 overflow-visible select-none">
            <line x1="25" y1="110" x2="295" y2="110" stroke="#64748b" strokeWidth="1.6" />
            <line x1="165" y1="18" x2="165" y2="180" stroke="#64748b" strokeWidth="1.6" />
            <text x="242" y="103" fill="#10b981" fontSize="9.5" fontWeight="bold">+V_F (mA Scale)</text>
            <text x="30" y="103" fill="#f43f5e" fontSize="9.5" fontWeight="bold">−V_R (μA Scale)</text>
            <text x="171" y="24" fill="#10b981" fontSize="9.5" fontWeight="bold">I_F (mA)</text>
            <text x="171" y="176" fill="#f43f5e" fontSize="9.5" fontWeight="bold">I_R (μA)</text>

            {/* Forward Bias Curve */}
            <path d="M 165,110 L 210,108 Q 225,105 245,25" fill="none" stroke="#10b981" strokeWidth="2.8" />
            <circle cx="212" cy="107" r="3.5" fill="#f59e0b" />
            <text x="195" y="124" fill="#f59e0b" fontSize="9" fontWeight="bold">V_k (0.7V Si)</text>

            {/* Reverse Bias Curve */}
            <path d="M 165,110 L 150,122 L 58,124 Q 48,125 45,175" fill="none" stroke="#f43f5e" strokeWidth="2.8" />
            <circle cx="52" cy="124" r="3.5" fill="#a855f7" />
            <text x="55" y="140" fill="#a855f7" fontSize="9" fontWeight="bold">V_br (Breakdown)</text>
            <text x="86" y="120" fill="#f43f5e" fontSize="8.5" fontWeight="bold">Reverse Saturation I_s</text>
          </svg>
        </div>
        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1">
            <span className="text-[10px] text-emerald-500 font-bold block uppercase font-sans">p-n Junction I–V Characteristics</span>
            <div className="text-xs text-[var(--text-primary)] font-bold">
              Forward (p → +, n → −): mA   |   Reverse (p → −, n → +): μA
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] font-sans mt-1 leading-relaxed">
              • <strong>Forward Knee Voltage V_k:</strong> ~0.2 V (Ge) and ~0.7 V (Si); dynamic resistance r_d = ΔV/ΔI is very low (~10–50 Ω).<br />
              • <strong>Reverse Bias:</strong> Depletion width grows; only tiny μA drift current of minority carriers flows until Zener/Avalanche breakdown V_br.
            </p>
          </div>
        </div>
      </div>
    );

    const rectifiersContent = (
      <div className="flex flex-col lg:flex-row items-center gap-5 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg viewBox="0 0 360 190" className="w-full h-auto max-h-56 overflow-visible select-none">
            {svgDefs}
            {/* Left: Centre-Tap Full Wave Rectifier Circuit */}
            <text x="95" y="16" textAnchor="middle" fill="#3b82f6" fontSize="9.5" fontWeight="bold">Centre-Tap Full-Wave Rectifier</text>
            <rect x="30" y="34" width="12" height="106" fill="none" stroke="#64748b" strokeWidth="1.5" />
            <line x1="20" y1="55" x2="20" y2="115" stroke="#f59e0b" strokeWidth="2.5" />
            <text x="12" y="90" fill="#f59e0b" fontSize="9" fontWeight="bold">AC</text>
            <line x1="52" y1="42" x2="105" y2="42" stroke="#10b981" strokeWidth="1.8" />
            <polygon points="105,34 105,50 120,42" fill="#10b981" />
            <line x1="120" y1="34" x2="120" y2="50" stroke="#10b981" strokeWidth="2" />
            <text x="112" y="30" textAnchor="middle" fill="#10b981" fontSize="9" fontWeight="bold">D₁</text>

            <line x1="52" y1="132" x2="105" y2="132" stroke="#a855f7" strokeWidth="1.8" />
            <polygon points="105,124 105,140 120,132" fill="#a855f7" />
            <line x1="120" y1="124" x2="120" y2="140" stroke="#a855f7" strokeWidth="2" />
            <text x="112" y="152" textAnchor="middle" fill="#a855f7" fontSize="9" fontWeight="bold">D₂</text>

            <line x1="120" y1="42" x2="155" y2="87" stroke="#10b981" strokeWidth="1.6" />
            <line x1="120" y1="132" x2="155" y2="87" stroke="#a855f7" strokeWidth="1.6" />
            <line x1="52" y1="87" x2="140" y2="87" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3,2" />
            <rect x="132" y="79" width="28" height="16" fill="var(--bg-elevated)" stroke="#f43f5e" strokeWidth="1.5" rx="2" />
            <text x="146" y="90" textAnchor="middle" fill="#f43f5e" fontSize="9" fontWeight="bold">R_L</text>

            {/* Right: Waveforms */}
            <text x="275" y="16" textAnchor="middle" fill="var(--text-primary)" fontSize="9.5" fontWeight="bold">Output Waveforms</text>
            <line x1="195" y1="62" x2="345" y2="62" stroke="#64748b" strokeWidth="1" />
            <path d="M 200,62 Q 218,32 236,62 Q 254,92 272,62 Q 290,32 308,62 Q 326,92 344,62" fill="none" stroke="#f59e0b" strokeWidth="2" />
            <text x="195" y="34" fill="#f59e0b" fontSize="8.5" fontWeight="bold">Input AC (f)</text>

            <line x1="195" y1="122" x2="345" y2="122" stroke="#64748b" strokeWidth="1" />
            <path d="M 200,122 Q 218,92 236,122 L 272,122 Q 290,92 308,122 L 344,122" fill="none" stroke="#3b82f6" strokeWidth="2" />
            <text x="195" y="102" fill="#3b82f6" fontSize="8.5" fontWeight="bold">HWR (f_out = f)</text>

            <line x1="195" y1="168" x2="345" y2="168" stroke="#64748b" strokeWidth="1" />
            <path d="M 200,168 Q 218,138 236,168 Q 254,138 272,168 Q 290,138 308,168 Q 326,138 344,168" fill="none" stroke="#10b981" strokeWidth="2.2" />
            <text x="195" y="150" fill="#10b981" fontSize="8.5" fontWeight="bold">FWR (f_out = 2f)</text>
          </svg>
        </div>
        <div className="w-full lg:w-1/2 space-y-2 text-xs font-mono">
          <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] space-y-1">
            <span className="text-[10px] text-emerald-500 font-bold block uppercase font-sans">Half-Wave vs Full-Wave Rectifier</span>
            <div className="text-xs text-[var(--text-primary)] font-bold">
              HWR (1 Diode): f_out = f_in   |   FWR (2 Diodes): f_out = 2f_in
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] font-sans mt-1 leading-relaxed">
              • <strong>Working of FWR:</strong> D₁ conducts in +ve half-cycle, D₂ in −ve half-cycle; current always flows same direction through R_L!<br />
              • <strong>Capacitor Filter:</strong> Connected in <strong>parallel</strong> across load R_L to charge at peaks and discharge slowly (smooth DC).
            </p>
          </div>
        </div>
      </div>
    );

    const renderSemi = () => {
      switch (activeSemi) {
        case 'energy-bands': return energyBandsContent;
        case 'vi-characteristics': return viCharacteristicsContent;
        case 'rectifiers': return rectifiersContent;
        default: return depletionLayerContent;
      }
    };

    const content = (
      <div className="space-y-4">
        {!(inline && subMode) && (
          <div className="flex flex-wrap gap-1.5">
            {[
              { id: 'energy-bands', label: '1. Energy Bands (n / p-Type)' },
              { id: 'depletion-layer', label: '2. p-n Junction Depletion' },
              { id: 'vi-characteristics', label: '3. Forward/Reverse V–I' },
              { id: 'rectifiers', label: '4. HWR & FWR Rectifiers' }
            ].map(t => (
              <button
                key={t.id}
                type="button"
                onClick={() => setSemiMode(t.id)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeSemi === t.id ? 'bg-amber-600 text-white shadow-sm' : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)]'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        )}
        {renderSemi()}
      </div>
    );

    if (inline) return content;
    return (
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 sm:p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-3">
          <span className="p-1.5 rounded-lg bg-amber-500/15 text-amber-500"><Zap size={16} /></span>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">Semiconductor Energy Bands, p-n Junction, I–V Curve &amp; Rectifiers</h4>
            <p className="text-[11px] text-[var(--text-muted)]">Intrinsic/extrinsic energy bands, depletion layer, forward/reverse characteristics &amp; FWR</p>
          </div>
        </div>
        {content}
      </div>
    );
  }

  /* -------------------------------------------------------------
   * 26. WAVE OPTICS: HUYGENS PRINCIPLE, WAVEFRONT TYPES, REFLECTION & DENSER/RARER REFRACTION
   * ------------------------------------------------------------- */
  if (diagramId === 'huygens-wavefronts') {
    const activeHuygens = (inline && subMode && HUYGENS_SUBMODE_MAP[subMode] !== undefined)
      ? HUYGENS_SUBMODE_MAP[subMode]
      : huygensTab;

    const content = (
      <div className="space-y-4">
        {!(inline && subMode) && (
          <div className="flex flex-wrap gap-2">
            {[
              { id: 0, label: 'Types of Wavefronts' },
              { id: 1, label: 'Reflection (i = r)' },
              { id: 2, label: 'Refraction: Denser (v₂ < v₁)' },
              { id: 3, label: 'Refraction: Rarer (v₂ > v₁)' }
            ].map(t => (
              <button
                key={t.id}
                type="button"
                onClick={() => setHuygensTab(t.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeHuygens === t.id
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-sky-500/40'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        )}

        <div className="bg-[var(--bg-surface)] rounded-xl border border-[var(--border-subtle)] p-4">
          {activeHuygens === 0 && (
            <svg viewBox="0 0 480 185" className="w-full h-auto max-h-56 select-none">
              {svgDefs}
              <circle cx="75" cy="82" r="4" fill="#f59e0b" />
              <circle cx="75" cy="82" r="18" fill="none" stroke="#38bdf8" strokeWidth="1.6" />
              <circle cx="75" cy="82" r="34" fill="none" stroke="#38bdf8" strokeWidth="1.8" strokeDasharray="3,2" />
              <circle cx="75" cy="82" r="50" fill="none" stroke="#38bdf8" strokeWidth="2" />
              <line x1="75" y1="82" x2="128" y2="55" stroke="#10b981" strokeWidth="1.4" markerEnd="url(#arrow-emerald)" />
              <line x1="75" y1="82" x2="128" y2="108" stroke="#10b981" strokeWidth="1.4" markerEnd="url(#arrow-emerald)" />
              <text x="75" y="152" textAnchor="middle" fill="var(--text-primary)" fontSize="10.5" fontWeight="bold">Point Source → Spherical</text>
              <text x="75" y="167" textAnchor="middle" fill="#38bdf8" fontSize="9.5" fontWeight="bold">I ∝ 1/r² (A ∝ 1/r)</text>

              <line x1="235" y1="45" x2="235" y2="118" stroke="#f59e0b" strokeWidth="3" />
              <ellipse cx="235" cy="82" rx="18" ry="42" fill="none" stroke="#a855f7" strokeWidth="1.7" />
              <ellipse cx="235" cy="82" rx="34" ry="50" fill="none" stroke="#a855f7" strokeWidth="1.9" strokeDasharray="3,2" />
              <line x1="235" y1="68" x2="275" y2="68" stroke="#10b981" strokeWidth="1.4" markerEnd="url(#arrow-emerald)" />
              <line x1="235" y1="96" x2="275" y2="96" stroke="#10b981" strokeWidth="1.4" markerEnd="url(#arrow-emerald)" />
              <text x="235" y="152" textAnchor="middle" fill="var(--text-primary)" fontSize="10.5" fontWeight="bold">Linear Slit → Cylindrical</text>
              <text x="235" y="167" textAnchor="middle" fill="#a855f7" fontSize="9.5" fontWeight="bold">I ∝ 1/r (A ∝ 1/√r)</text>

              <line x1="365" y1="38" x2="365" y2="126" stroke="#10b981" strokeWidth="2.2" />
              <line x1="392" y1="38" x2="392" y2="126" stroke="#10b981" strokeWidth="2.2" />
              <line x1="419" y1="38" x2="419" y2="126" stroke="#10b981" strokeWidth="2.2" />
              <line x1="345" y1="55" x2="442" y2="55" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrow-amber)" />
              <line x1="345" y1="82" x2="442" y2="82" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrow-amber)" />
              <line x1="345" y1="109" x2="442" y2="109" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrow-amber)" />
              <text x="395" y="152" textAnchor="middle" fill="var(--text-primary)" fontSize="10.5" fontWeight="bold">Source at ∞ → Plane</text>
              <text x="395" y="167" textAnchor="middle" fill="#10b981" fontSize="9.5" fontWeight="bold">I = const, Rays ⊥ WF</text>
            </svg>
          )}

          {activeHuygens === 1 && (
            <svg viewBox="0 0 460 190" className="w-full h-auto max-h-56 select-none">
              {svgDefs}
              <line x1="55" y1="150" x2="405" y2="150" stroke="#64748b" strokeWidth="2.5" />
              <text x="42" y="154" fill="var(--text-muted)" fontSize="11" fontWeight="bold">X</text>
              <text x="412" y="154" fill="var(--text-muted)" fontSize="11" fontWeight="bold">Y</text>

              <line x1="120" y1="35" x2="120" y2="150" stroke="#64748b" strokeDasharray="3,3" strokeWidth="1" />
              <line x1="315" y1="35" x2="315" y2="150" stroke="#64748b" strokeDasharray="3,3" strokeWidth="1" />

              <line x1="120" y1="150" x2="185" y2="62" stroke="#38bdf8" strokeWidth="2.5" />
              <line x1="70" y1="82" x2="120" y2="150" stroke="#f59e0b" strokeWidth="1.8" markerEnd="url(#arrow-amber)" />
              <line x1="185" y1="62" x2="315" y2="150" stroke="#f59e0b" strokeWidth="1.8" markerEnd="url(#arrow-amber)" />

              <path d="M 120,42 A 108,108 0 0,1 228,150" fill="none" stroke="#a855f7" strokeDasharray="4,3" strokeWidth="1.8" />
              <line x1="120" y1="150" x2="212" y2="96" stroke="#10b981" strokeWidth="1.8" markerEnd="url(#arrow-emerald)" />
              <line x1="212" y1="96" x2="315" y2="150" stroke="#10b981" strokeWidth="2.5" />
              <line x1="315" y1="150" x2="375" y2="85" stroke="#10b981" strokeWidth="1.8" markerEnd="url(#arrow-emerald)" />

              <text x="115" y="166" fill="var(--text-primary)" fontSize="11" fontWeight="bold">A</text>
              <text x="182" y="54" fill="#38bdf8" fontSize="11" fontWeight="bold">B</text>
              <text x="313" y="166" fill="var(--text-primary)" fontSize="11" fontWeight="bold">C</text>
              <text x="208" y="88" fill="#10b981" fontSize="11" fontWeight="bold">E</text>
              <text x="255" y="96" fill="#f59e0b" fontSize="10" fontWeight="bold">BC = vτ</text>
              <text x="148" y="114" fill="#10b981" fontSize="10" fontWeight="bold">AE = vτ</text>
              <text x="230" y="25" textAnchor="middle" fill="#f59e0b" fontSize="10.5" fontWeight="bold">△ABC ≅ △AEC (RHS: AE = BC = vτ, AC common) ⟹ ∠i = ∠r</text>
            </svg>
          )}

          {activeHuygens === 2 && (
            <svg viewBox="0 0 460 195" className="w-full h-auto max-h-56 select-none">
              {svgDefs}
              <rect x="45" y="102" width="370" height="82" fill="#38bdf8" fillOpacity="0.08" />
              <line x1="45" y1="102" x2="415" y2="102" stroke="#64748b" strokeWidth="2.2" />
              <text x="55" y="92" fill="var(--text-muted)" fontSize="10" fontWeight="bold">Medium 1 (Rarer: v₁, n₁)</text>
              <text x="55" y="175" fill="#3b82f6" fontSize="10" fontWeight="bold">Medium 2 (Denser: v₂ &lt; v₁, n₂ &gt; n₁)</text>

              <line x1="125" y1="25" x2="125" y2="175" stroke="#64748b" strokeDasharray="3,3" strokeWidth="1" />
              <line x1="125" y1="102" x2="215" y2="38" stroke="#f59e0b" strokeWidth="2.5" />
              <line x1="80" y1="38" x2="125" y2="102" stroke="#f59e0b" strokeWidth="1.7" markerEnd="url(#arrow-amber)" />
              <line x1="215" y1="38" x2="310" y2="102" stroke="#f59e0b" strokeWidth="1.7" markerEnd="url(#arrow-amber)" />

              <path d="M 125,168 A 66,66 0 0,0 191,102" fill="none" stroke="#a855f7" strokeDasharray="4,3" strokeWidth="1.7" />
              <line x1="125" y1="102" x2="152" y2="162" stroke="#10b981" strokeWidth="1.8" markerEnd="url(#arrow-emerald)" />
              <line x1="152" y1="162" x2="310" y2="102" stroke="#10b981" strokeWidth="2.5" />

              <text x="115" y="114" fill="var(--text-primary)" fontSize="11" fontWeight="bold">A</text>
              <text x="218" y="34" fill="#f59e0b" fontSize="11" fontWeight="bold">B</text>
              <text x="315" y="114" fill="var(--text-primary)" fontSize="11" fontWeight="bold">C</text>
              <text x="148" y="176" fill="#10b981" fontSize="11" fontWeight="bold">E</text>
              <text x="268" y="64" fill="#f59e0b" fontSize="10" fontWeight="bold">BC = v₁τ</text>
              <text x="165" y="156" fill="#10b981" fontSize="10" fontWeight="bold">AE = v₂τ (&lt; BC)</text>
              <text x="275" y="142" fill="#3b82f6" fontSize="10.5" fontWeight="bold">sin i / sin r = v₁ / v₂ = n₂ / n₁ (r &lt; i)</text>
            </svg>
          )}

          {activeHuygens === 3 && (
            <svg viewBox="0 0 460 195" className="w-full h-auto max-h-56 select-none">
              {svgDefs}
              <rect x="45" y="18" width="370" height="84" fill="#a855f7" fillOpacity="0.08" />
              <line x1="45" y1="102" x2="415" y2="102" stroke="#64748b" strokeWidth="2.2" />
              <text x="55" y="32" fill="#a855f7" fontSize="10" fontWeight="bold">Medium 1 (Denser: v₁, n₁)</text>
              <text x="55" y="178" fill="#10b981" fontSize="10" fontWeight="bold">Medium 2 (Rarer: v₂ &gt; v₁, n₂ &lt; n₁) → Bends Away from Normal (r &gt; i)</text>

              <line x1="125" y1="28" x2="125" y2="165" stroke="#64748b" strokeDasharray="3,3" strokeWidth="1" />
              <line x1="125" y1="102" x2="215" y2="55" stroke="#f59e0b" strokeWidth="2.5" />
              <line x1="90" y1="52" x2="125" y2="102" stroke="#f59e0b" strokeWidth="1.7" markerEnd="url(#arrow-amber)" />
              <line x1="215" y1="55" x2="285" y2="102" stroke="#f59e0b" strokeWidth="1.7" markerEnd="url(#arrow-amber)" />

              <path d="M 125,182 A 88,88 0 0,0 218,125" fill="none" stroke="#3b82f6" strokeDasharray="4,3" strokeWidth="1.7" />
              <line x1="125" y1="102" x2="205" y2="145" stroke="#10b981" strokeWidth="1.8" markerEnd="url(#arrow-emerald)" />
              <line x1="205" y1="145" x2="285" y2="102" stroke="#10b981" strokeWidth="2.5" />

              <text x="114" y="115" fill="var(--text-primary)" fontSize="11" fontWeight="bold">A</text>
              <text x="216" y="49" fill="#f59e0b" fontSize="11" fontWeight="bold">B</text>
              <text x="290" y="115" fill="var(--text-primary)" fontSize="11" fontWeight="bold">C</text>
              <text x="208" y="156" fill="#10b981" fontSize="11" fontWeight="bold">E</text>
              <text x="255" y="72" fill="#f59e0b" fontSize="10" fontWeight="bold">BC = v₁τ</text>
              <text x="155" y="148" fill="#10b981" fontSize="10" fontWeight="bold">AE = v₂τ (&gt; BC)</text>
              <text x="292" y="142" fill="#f59e0b" fontSize="10" fontWeight="bold">TIR if BC/AC ≥ v₁/v₂ (i ≥ i_c)</text>
            </svg>
          )}

          <div className="mt-2 text-xs text-[var(--text-secondary)] font-mono flex flex-wrap justify-between gap-2 pt-1 border-t border-[var(--border-subtle)]">
            <span>Snell&apos;s Law: sin i / sin r = v₁ / v₂ = n₂ / n₁</span>
            <span className="text-sky-500 font-bold">Frequency ν = Constant; λ₂ / λ₁ = v₂ / v₁</span>
          </div>
        </div>
      </div>
    );

    if (inline) return content;
    return (
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 sm:p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-3">
          <span className="p-1.5 rounded-lg bg-sky-500/15 text-sky-400"><Layers size={16} /></span>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">Huygens&apos; Principle: Wavefronts, Reflection &amp; Denser/Rarer Refraction</h4>
            <p className="text-[11px] text-[var(--text-muted)]">Types of wavefronts, geometric proof of i = r, and wave-theory refraction at denser &amp; rarer interfaces</p>
          </div>
        </div>
        {content}
      </div>
    );
  }

  return null;
}
