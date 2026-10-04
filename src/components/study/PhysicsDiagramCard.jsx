import { useState } from 'react';
import { 
  Zap, ArrowRight, Layers, CheckCircle2, AlertCircle, Info, 
  ChevronDown, ChevronUp, Scale, Compass, Sparkles, Activity
} from 'lucide-react';

export default function PhysicsDiagramCard({ diagramId, subMode, inline = false }) {
  // Tab states for diagrams that have multiple sub-modes when viewed as standalone card
  const [gaussMode, setGaussMode] = useState('wire'); // 'wire' | 'sheet' | 'shell'
  const [dipoleMode, setDipoleMode] = useState('axial'); // 'axial' | 'equatorial'
  const [galvMode, setGalvMode] = useState('ammeter'); // 'ammeter' | 'voltmeter'
  const [lcrMode, setLcrMode] = useState('phasor'); // 'phasor' | 'resonance'
  const [parallelMode, setParallelMode] = useState('attractive'); // 'attractive' | 'repulsive'

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

        <div className="w-full lg:w-1/2 space-y-2.5 text-xs">
          <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
            <div className="font-bold text-rose-400 mb-1 flex items-center gap-1.5">
              <CheckCircle2 size={13} />
              <span>Case 1: Inside the Shell (r &lt; R)</span>
            </div>
            <p className="text-[var(--text-secondary)]">
              All charge resides entirely on the outer shell: q_enclosed = 0.
              <span className="block font-mono text-[11px] text-rose-400 font-bold mt-0.5">E_in · (4πr²) = 0 / ε₀ ⟹ E_in = 0</span>
            </p>
          </div>

          <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
            <div className="font-bold text-emerald-400 mb-1 flex items-center gap-1.5">
              <CheckCircle2 size={13} />
              <span>Case 2: Outside the Shell (r ≥ R)</span>
            </div>
            <p className="text-[var(--text-secondary)]">
              Total charge q is enclosed within Gaussian sphere of radius r:
              <span className="block font-mono text-[11px] text-emerald-400 font-bold mt-0.5">E_out = (1 / 4πε₀) · (q / r²)</span>
            </p>
          </div>

          <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-center font-bold">
            Surface (r = R): E_max = q / (4πε₀R²) = σ / ε₀
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
    const content = (
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
            <span className="text-[10px] text-emerald-400 font-bold block uppercase font-sans">Core Properties:</span>
            <div className="text-xs text-[var(--text-primary)] font-bold">
              W = q · ΔV = 0  (Zero work done)
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] font-sans mt-1">
              • Electric field E⃗ is <strong>always perpendicular</strong> to equipotential surfaces.<br />
              • Two equipotential surfaces <strong>never intersect</strong>.
            </p>
          </div>
        </div>
      </div>
    );

    if (inline) return content;
    return (
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 sm:p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-3">
          <span className="p-1.5 rounded-lg bg-emerald-500/15 text-emerald-500"><Layers size={16} /></span>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">Equipotential Surfaces &amp; Geometry</h4>
            <p className="text-[11px] text-[var(--text-muted)]">Spherical shells for point charges and parallel planes for uniform fields</p>
          </div>
        </div>
        {content}
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

  return null;
}
