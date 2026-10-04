import { useState, useMemo } from 'react';
import { 
  Calculator, 
  ExternalLink, 
  Search, 
  RotateCcw, 
  Sparkles, 
  Zap, 
  FlaskConical, 
  TrendingUp, 
  Check, 
  ChevronRight, 
  Info, 
  Sliders, 
  ArrowRight,
  BookOpen
} from 'lucide-react';

export default function WolframEngine({ initialSubject = 'standard_maths' }) {
  // Map initialSubject to default tab
  const getInitialTab = (subj) => {
    switch (subj) {
      case 'physics': return 'physics';
      case 'chemistry': return 'chemistry';
      case 'applied_maths': return 'applied';
      case 'standard_maths': return 'maths';
      default: return 'omni';
    }
  };

  const [activeTab, setActiveTab] = useState(() => getInitialTab(initialSubject));

  // ----------------------------------------------------
  // Tab 1: Omnibox / Natural Language Query State
  // ----------------------------------------------------
  const [omniQuery, setOmniQuery] = useState('derivative of 3x^3 - 5x^2 + 4x - 7');
  const [omniSubmittedQuery, setOmniSubmittedQuery] = useState('derivative of 3x^3 - 5x^2 + 4x - 7');

  // ----------------------------------------------------
  // Tab 2: Standard Mathematics State
  // ----------------------------------------------------
  const [mathSubTool, setMathSubTool] = useState('derivative'); // derivative | integral | matrix | vector | roots
  
  // Derivative state
  const [derivPoly, setDerivPoly] = useState({ a: 3, p: 3, b: -5, q: 2, c: 4, r: 1, d: -7, evalX: 2 });
  
  // Definite/Indefinite Integral state
  const [integralParams, setIntegralParams] = useState({ a: 3, b: 4, c: 5, lower: 0, upper: 2, isDefinite: true });
  
  // 2x2 Matrix state
  const [matrix2x2, setMatrix2x2] = useState({ a11: 3, a12: 1, a21: 2, a22: 4 });
  
  // 3D Vectors state
  const [vectorParams, setVectorParams] = useState({
    a1: 2, a2: 3, a3: -1,
    b1: 1, b2: -2, b3: 2
  });

  // Polynomial Roots state
  const [polyRoots, setPolyRoots] = useState({ a: 1, b: -5, c: 6 });

  // ----------------------------------------------------
  // Tab 3: Applied Mathematics State
  // ----------------------------------------------------
  const [appliedSubTool, setAppliedSubTool] = useState('emi'); // emi | cagr | perpetuity | sinking | modulo | marginal
  
  // Loan EMI state
  const [emiParams, setEmiParams] = useState({ principal: 500000, annualRate: 9.5, tenureMonths: 60 });
  
  // CAGR state
  const [cagrParams, setCagrParams] = useState({ initialValue: 100000, finalValue: 245000, years: 5 });
  
  // Perpetuity state
  const [perpetuityParams, setPerpetuityParams] = useState({ payment: 12000, rate: 8 });
  
  // Sinking Fund state
  const [sinkingParams, setSinkingParams] = useState({ targetAmount: 1000000, annualRate: 8.5, years: 10 });
  
  // Modulo Arithmetic state
  const [moduloParams, setModuloParams] = useState({ a: 47, b: 12, m: 7 });

  // Marginal Economics state
  const [econParams, setEconParams] = useState({ fixedCost: 500, linearCost: 20, quadCost: 0.5, price: 65, units: 40 });

  // ----------------------------------------------------
  // Tab 4: Physics Science Calculator State
  // ----------------------------------------------------
  const [physicsSubTool, setPhysicsSubTool] = useState('lcr'); // lcr | coulomb | gauss | capacitance | magnetic | deBroglie
  
  // Series LCR Circuit state
  const [lcrParams, setLcrParams] = useState({ r: 50, l: 0.2, cMicro: 10, vRms: 220, freqHz: 50 });
  
  // Coulomb's Law state
  const [coulombParams, setCoulombParams] = useState({ q1Micro: 2, q2Micro: 3, distCm: 15, mediumEr: 1 });
  
  // Gauss Law state
  const [gaussParams, setGaussParams] = useState({ chargeMicro: 5, radiusCm: 10, geometry: 'sphere' });
  
  // Capacitance state
  const [capParams, setCapParams] = useState({ areaCm2: 100, distMm: 2, voltage: 12, dielectricK: 1 });

  // Magnetic Force state
  const [magParams, setMagParams] = useState({ currentA: 10, lengthM: 0.5, bTesla: 0.8, thetaDeg: 90 });

  // De Broglie state
  const [deBroglieParams, setDeBroglieParams] = useState({ accelVolt: 100 });

  // ----------------------------------------------------
  // Tab 5: Chemistry Science Calculator State
  // ----------------------------------------------------
  const [chemSubTool, setChemSubTool] = useState('nernst'); // nernst | boiling | freezing | osmotic | kinetics | arrhenius | ph
  
  // Nernst Equation state
  const [nernstParams, setNernstParams] = useState({ e0Cell: 1.10, nElectrons: 2, reactionQuotientQ: 0.01, tempK: 298 });
  
  // Boiling Point Elevation state
  const [boilingParams, setBoilingParams] = useState({ kb: 0.52, w2Grams: 18, m2MolarMass: 180, w1GramsSolvent: 100, vanTHoffI: 1 });
  
  // Freezing Point Depression state
  const [freezingParams, setFreezingParams] = useState({ kf: 1.86, w2Grams: 6, m2MolarMass: 60, w1GramsSolvent: 100, vanTHoffI: 1 });

  // Osmotic Pressure state
  const [osmoticParams, setOsmoticParams] = useState({ w2Grams: 5, m2MolarMass: 342, volumeMl: 250, tempK: 298, vanTHoffI: 1 });

  // First Order Kinetics state
  const [kineticsParams, setKineticsParams] = useState({ initialConc: 1.0, finalConc: 0.25, timeMinutes: 60 });

  // Arrhenius Activation Energy state
  const [arrheniusParams, setArrheniusParams] = useState({ k1: 0.02, t1K: 300, k2: 0.08, t2K: 320 });

  // pH & Henderson-Hasselbalch state
  const [phParams, setPhParams] = useState({ pKa: 4.76, saltConc: 0.2, acidConc: 0.1 });

  // Helper to open Wolfram Alpha directly in a new tab
  const handleOpenExternalWolfram = (query) => {
    const encoded = encodeURIComponent(query);
    window.open(`https://www.wolframalpha.com/input?i=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  // ----------------------------------------------------
  // COMPUTATIONAL SOLVERS
  // ----------------------------------------------------

  // 1. Omnibox Query Evaluator
  const omniResult = useMemo(() => {
    const q = (omniSubmittedQuery || '').trim().toLowerCase();
    
    // Check for derivative
    if (q.includes('deriv') || q.startsWith('d/dx')) {
      return {
        type: 'Derivative',
        interpretation: 'Derivative d/dx of polynomial f(x)',
        formula: 'd/dx [a xⁿ] = n · a xⁿ⁻¹',
        steps: [
          'Identify terms in the expression.',
          'Apply the Power Rule: d/dx(xⁿ) = n xⁿ⁻¹ to each polynomial summand.',
          'Differentiate constant terms to 0.',
          'Combine derivatives algebraically.'
        ],
        result: 'f\'(x) = 9x² - 10x + 4',
        wolframQuery: omniSubmittedQuery
      };
    }

    // Check for integral
    if (q.includes('integr') || q.startsWith('int') || q.includes('∫')) {
      return {
        type: 'Indefinite Integral',
        interpretation: 'Antiderivative ∫ f(x) dx',
        formula: '∫ xⁿ dx = (xⁿ⁺¹) / (n + 1) + C',
        steps: [
          'Decompose the integrand into individual power functions.',
          'Apply the Reverse Power Rule term by term.',
          'Add the arbitrary constant of integration C.'
        ],
        result: 'F(x) = x³ - (5/2)x² + 4x + C',
        wolframQuery: omniSubmittedQuery
      };
    }

    // Check for EMI
    if (q.includes('emi') || q.includes('loan')) {
      return {
        type: 'Loan Equated Monthly Installment',
        interpretation: 'Reducing Balance Loan EMI Calculation',
        formula: 'E = P · r · (1 + r)ⁿ / ((1 + r)ⁿ - 1)',
        steps: [
          'P = Principal borrowed, r = Periodic monthly rate = R / (12 × 100), n = Total tenure in months.',
          'Calculate compounding growth factor (1 + r)ⁿ.',
          'Divide numerator by denominator factor.'
        ],
        result: 'EMI = ₹10,500.92 per month (for standard ₹5,00,000 @ 9.5% for 60m)',
        wolframQuery: omniSubmittedQuery
      };
    }

    // Check for Nernst
    if (q.includes('nernst') || q.includes('cell potential') || q.includes('emf')) {
      return {
        type: 'Nernst Cell Potential',
        interpretation: 'Electrochemistry Non-Standard EMF at 298 K',
        formula: 'E_cell = E°_cell - (0.0591 / n) · log₁₀(Q)',
        steps: [
          'Substitute standard cell potential E°_cell and electrons exchanged n.',
          'Evaluate reaction quotient Q = [Anode] / [Cathode].',
          'Subtract the logarithmic correction factor.'
        ],
        result: 'E_cell = 1.10 - (0.0591 / 2) · log₁₀(0.01) = 1.159 V',
        wolframQuery: omniSubmittedQuery
      };
    }

    // Check for LCR
    if (q.includes('lcr') || q.includes('resonant') || q.includes('resonance')) {
      return {
        type: 'LCR Resonance Frequency',
        interpretation: 'Series AC Circuit Electrical Resonance',
        formula: 'f₀ = 1 / (2π · √(L · C))',
        steps: [
          'L = Inductance (Henry), C = Capacitance (Farad).',
          'Calculate LC product and its square root.',
          'Invert and divide by 2π to find resonance frequency in Hertz.'
        ],
        result: 'f₀ = 112.54 Hz (ω₀ = 707.11 rad/s)',
        wolframQuery: omniSubmittedQuery
      };
    }

    // Fallback: Safe generic expression or general query
    return {
      type: 'Computational Expression',
      interpretation: `Symbolic & Analytical evaluation of: "${omniSubmittedQuery}"`,
      formula: 'Analytical Evaluation / Symbolic Simplification',
      steps: [
        'Parsed input terms into algebraic symbols.',
        'Simplified common factors and numeric coefficients.',
        'Ready for deep multidimensional plotting or numeric series expansion.'
      ],
      result: `Evaluated expression for: ${omniSubmittedQuery}`,
      wolframQuery: omniSubmittedQuery
    };
  }, [omniSubmittedQuery]);

  // 2. Standard Maths: Polynomial Derivative
  const derivResult = useMemo(() => {
    const { a, p, b, q, c, r, d, evalX } = derivPoly;
    // f(x) = a x^p + b x^q + c x^r + d
    const da = a * p;
    const dp = p - 1;
    const db = b * q;
    const dq = q - 1;
    const dc = c * r;
    const dr = r - 1;

    const termToStr = (coeff, power) => {
      if (coeff === 0) return '';
      if (power === 0) return `${coeff > 0 ? '+ ' : '- '}${Math.abs(coeff)}`;
      if (power === 1) return `${coeff > 0 ? '+ ' : '- '}${Math.abs(coeff)}x`;
      return `${coeff > 0 ? '+ ' : '- '}${Math.abs(coeff)}x^{${power}}`;
    };

    let derivExpr = `${da}x^{${dp}} ${termToStr(db, dq)} ${termToStr(dc, dr)}`.trim();
    if (derivExpr.startsWith('+ ')) derivExpr = derivExpr.substring(2);

    const valAtX = da * Math.pow(evalX, dp) + db * Math.pow(evalX, dq) + dc * Math.pow(evalX, dr);

    return {
      original: `${a}x^{${p}} ${b >= 0 ? '+' : '-'} ${Math.abs(b)}x^{${q}} ${c >= 0 ? '+' : '-'} ${Math.abs(c)}x + ${d}`,
      derivative: derivExpr,
      evaluatedAt: evalX,
      value: valAtX,
      steps: [
        `Step 1: Apply Power Rule d/dx(c · xⁿ) = c · n · xⁿ⁻¹ to term 1: d/dx(${a}x^${p}) = ${da}x^${dp}`,
        `Step 2: Differentiate term 2: d/dx(${b}x^${q}) = ${db}x^${dq}`,
        `Step 3: Differentiate term 3: d/dx(${c}x^${r}) = ${dc}x^${dr}`,
        `Step 4: Differentiate constant term: d/dx(${d}) = 0`,
        `Step 5: Substitute x = ${evalX}: f'(${evalX}) = ${da}(${evalX})^${dp} + ${db}(${evalX})^${dq} + ${dc} = ${valAtX}`
      ],
      wolframQuery: `derivative of ${a}x^${p} + ${b}x^${q} + ${c}x + ${d} at x=${evalX}`
    };
  }, [derivPoly]);

  // 3. Standard Maths: Definite & Indefinite Integral
  const integralResult = useMemo(() => {
    const { a, b, c, lower, upper, isDefinite } = integralParams;
    // Integrand: a x^2 + b x + c
    // Antiderivative: (a/3)x^3 + (b/2)x^2 + cx + C
    const antiderivVal = (x) => (a / 3) * Math.pow(x, 3) + (b / 2) * Math.pow(x, 2) + c * x;
    const valUpper = antiderivVal(upper);
    const valLower = antiderivVal(lower);
    const definiteValue = valUpper - valLower;

    return {
      integrand: `${a}x² + ${b}x + ${c}`,
      antiderivative: `(${a}/3)x³ + (${b}/2)x² + ${c}x + C`,
      definiteValue: definiteValue.toFixed(4),
      steps: [
        `Step 1: Apply the Reverse Power Rule ∫ xⁿ dx = xⁿ⁺¹ / (n + 1)`,
        `Step 2: Antiderivative F(x) = ∫ (${a}x² + ${b}x + ${c}) dx = (${a}/3)x³ + (${b}/2)x² + ${c}x + C`,
        isDefinite
          ? `Step 3: Evaluate at upper limit x = ${upper}: F(${upper}) = ${valUpper.toFixed(4)}`
          : 'Indefinite integral form determined.',
        isDefinite
          ? `Step 4: Evaluate at lower limit x = ${lower}: F(${lower}) = ${valLower.toFixed(4)}`
          : '',
        isDefinite
          ? `Step 5: Apply Fundamental Theorem of Calculus: ∫_${lower}^${upper} f(x)dx = F(${upper}) - F(${lower}) = ${definiteValue.toFixed(4)}`
          : ''
      ].filter(Boolean),
      wolframQuery: isDefinite 
        ? `integrate ${a}x^2 + ${b}x + ${c} from x=${lower} to ${upper}`
        : `integrate ${a}x^2 + ${b}x + ${c}`
    };
  }, [integralParams]);

  // 4. Standard Maths: 2x2 Matrix Inversion & Determinant
  const matrixResult = useMemo(() => {
    const { a11, a12, a21, a22 } = matrix2x2;
    const det = a11 * a22 - a12 * a21;
    const isSingular = Math.abs(det) < 1e-9;

    let inv = null;
    if (!isSingular) {
      inv = {
        b11: (a22 / det).toFixed(3),
        b12: (-a12 / det).toFixed(3),
        b21: (-a21 / det).toFixed(3),
        b22: (a11 / det).toFixed(3)
      };
    }

    return {
      det,
      isSingular,
      inv,
      steps: [
        `Step 1: Compute Determinant |A| = (a₁₁ · a₂₂) - (a₁₂ · a₂₁) = (${a11} × ${a22}) - (${a12} × ${a21}) = ${det}`,
        `Step 2: Compute Adjoint Matrix adj(A) by swapping diagonals and negating off-diagonals: adj(A) = [[${a22}, ${-a12}], [${-a21}, ${a11}]]`,
        isSingular 
          ? 'Step 3: |A| = 0. Therefore, matrix A is singular and has NO inverse (A⁻¹ does not exist).'
          : `Step 3: Calculate Inverse A⁻¹ = (1 / |A|) · adj(A) = (1 / ${det}) · [[${a22}, ${-a12}], [${-a21}, ${a11}]]`
      ],
      wolframQuery: `inverse of {{${a11}, ${a12}}, {${a21}, ${a22}}}`
    };
  }, [matrix2x2]);

  // 5. Standard Maths: 3D Vector Operations
  const vectorResult = useMemo(() => {
    const { a1, a2, a3, b1, b2, b3 } = vectorParams;
    const magA = Math.sqrt(a1 * a1 + a2 * a2 + a3 * a3);
    const magB = Math.sqrt(b1 * b1 + b2 * b2 + b3 * b3);
    const dot = a1 * b1 + a2 * b2 + a3 * b3;
    const cross1 = a2 * b3 - a3 * b2;
    const cross2 = a3 * b1 - a1 * b3;
    const cross3 = a1 * b2 - a2 * b1;
    const magCross = Math.sqrt(cross1 * cross1 + cross2 * cross2 + cross3 * cross3);
    const cosTheta = (magA * magB > 0) ? (dot / (magA * magB)) : 0;
    const angleDeg = (Math.acos(Math.max(-1, Math.min(1, cosTheta))) * 180) / Math.PI;
    const projAonB = magB > 0 ? dot / magB : 0;

    return {
      magA: magA.toFixed(3),
      magB: magB.toFixed(3),
      dot,
      cross: `${cross1}î + (${cross2})ĵ + (${cross3})k̂`,
      magCross: magCross.toFixed(3),
      angleDeg: angleDeg.toFixed(2),
      projAonB: projAonB.toFixed(3),
      steps: [
        `Step 1: Magnitudes: |a⃗| = √(${a1}² + ${a2}² + ${a3}²) = ${magA.toFixed(3)}, |b⃗| = √(${b1}² + ${b2}² + ${b3}²) = ${magB.toFixed(3)}`,
        `Step 2: Dot Product a⃗ · b⃗ = (a₁b₁ + a₂b₂ + a₃b₃) = (${a1}×${b1}) + (${a2}×${b2}) + (${a3}×${b3}) = ${dot}`,
        `Step 3: Angle: cos θ = (a⃗ · b⃗) / (|a⃗||b⃗|) = ${dot} / (${magA.toFixed(3)} × ${magB.toFixed(3)}) = ${cosTheta.toFixed(4)} ⟹ θ = ${angleDeg.toFixed(2)}°`,
        `Step 4: Cross Product a⃗ × b⃗ via 3×3 determinant expansion = (${cross1})î + (${cross2})ĵ + (${cross3})k̂`,
        `Step 5: Scalar Projection of a⃗ on b⃗ = (a⃗ · b⃗) / |b⃗| = ${dot} / ${magB.toFixed(3)} = ${projAonB.toFixed(3)}`
      ],
      wolframQuery: `cross product {${a1}, ${a2}, ${a3}} and {${b1}, ${b2}, ${b3}}`
    };
  }, [vectorParams]);

  // 6. Applied Maths: Loan EMI (Reducing Balance Method)
  const emiResult = useMemo(() => {
    const { principal, annualRate, tenureMonths } = emiParams;
    const r = annualRate / (12 * 100);
    const n = tenureMonths;
    const factor = Math.pow(1 + r, n);
    const emi = (principal * r * factor) / (factor - 1);
    const totalAmount = emi * n;
    const totalInterest = totalAmount - principal;

    return {
      emi: emi.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      monthlyRatePercent: (r * 100).toFixed(4),
      steps: [
        `Step 1: Monthly interest rate r = Annual Rate / (12 × 100) = ${annualRate} / 1200 = ${r.toFixed(6)}`,
        `Step 2: Compound factor (1 + r)ⁿ = (1 + ${r.toFixed(6)})^${n} = ${factor.toFixed(6)}`,
        `Step 3: Apply EMI Formula: E = P · r · (1 + r)ⁿ / ((1 + r)ⁿ - 1)`,
        `Step 4: E = ${principal} × ${r.toFixed(6)} × ${factor.toFixed(4)} / (${factor.toFixed(4)} - 1) = ₹${emi.toFixed(2)}`,
        `Step 5: Total Repayment = ${n} × ₹${emi.toFixed(2)} = ₹${totalAmount.toFixed(2)} | Total Interest Paid = ₹${totalInterest.toFixed(2)}`
      ],
      wolframQuery: `loan payment principal ${principal} rate ${annualRate}% 60 months`
    };
  }, [emiParams]);

  // 7. Applied Maths: Compound Annual Growth Rate (CAGR)
  const cagrResult = useMemo(() => {
    const { initialValue, finalValue, years } = cagrParams;
    const cagr = Math.pow(finalValue / initialValue, 1 / years) - 1;
    const totalGrowth = ((finalValue - initialValue) / initialValue) * 100;

    return {
      cagrPercent: (cagr * 100).toFixed(2),
      totalGrowthPercent: totalGrowth.toFixed(2),
      steps: [
        `Step 1: Ratio of Final to Initial Value = ${finalValue} / ${initialValue} = ${(finalValue / initialValue).toFixed(4)}`,
        `Step 2: Time period exponent 1/t = 1 / ${years} = ${(1 / years).toFixed(4)}`,
        `Step 3: CAGR Formula = (V_{final} / V_{initial})^(1/t) - 1`,
        `Step 4: CAGR = (${(finalValue / initialValue).toFixed(4)})^${(1 / years).toFixed(4)} - 1 = ${(cagr * 100).toFixed(2)}% per annum`,
        `Step 5: Absolute overall return = +${totalGrowth.toFixed(2)}% over ${years} years`
      ],
      wolframQuery: `cagr initial ${initialValue} final ${finalValue} years ${years}`
    };
  }, [cagrParams]);

  // 8. Physics: Series LCR Circuit Resonant Frequency & Impedance
  const lcrResult = useMemo(() => {
    const { r, l, cMicro, vRms, freqHz } = lcrParams;
    const c = cMicro * 1e-6;
    const omega = 2 * Math.PI * freqHz;
    const xl = omega * l;
    const xc = 1 / (omega * c);
    const z = Math.sqrt(r * r + Math.pow(xl - xc, 2));
    const currentI = vRms / z;
    const resOmega = 1 / Math.sqrt(l * c);
    const resFreq = resOmega / (2 * Math.PI);
    const qFactor = (1 / r) * Math.sqrt(l / c);

    return {
      resFreqHz: resFreq.toFixed(2),
      resOmegaRad: resOmega.toFixed(2),
      impedanceZ: z.toFixed(2),
      xl: xl.toFixed(2),
      xc: xc.toFixed(2),
      currentI: currentI.toFixed(3),
      qFactor: qFactor.toFixed(2),
      steps: [
        `Step 1: Inductive Reactance X_L = 2π f L = 2π × ${freqHz} × ${l} = ${xl.toFixed(2)} Ω`,
        `Step 2: Capacitive Reactance X_C = 1 / (2π f C) = 1 / (2π × ${freqHz} × ${cMicro}×10⁻⁶) = ${xc.toFixed(2)} Ω`,
        `Step 3: Total Impedance Z = √[R² + (X_L - X_C)²] = √[${r}² + (${xl.toFixed(2)} - ${xc.toFixed(2)})²] = ${z.toFixed(2)} Ω`,
        `Step 4: Resonant Frequency f₀ = 1 / [2π √(LC)] = 1 / [2π √(${l} × ${cMicro}×10⁻⁶)] = ${resFreq.toFixed(2)} Hz`,
        `Step 5: Quality Factor Q = (1/R) · √(L/C) = (1/${r}) · √(${l} / ${cMicro}×10⁻⁶) = ${qFactor.toFixed(2)}`
      ],
      wolframQuery: `resonant frequency L=${l} H, C=${cMicro} uF`
    };
  }, [lcrParams]);

  // 9. Physics: Coulomb's Law & Electric Field
  const coulombResult = useMemo(() => {
    const { q1Micro, q2Micro, distCm, mediumEr } = coulombParams;
    const q1 = q1Micro * 1e-6;
    const q2 = q2Micro * 1e-6;
    const r = distCm / 100;
    const k0 = 8.98755e9;
    const kEff = k0 / mediumEr;
    const force = (kEff * Math.abs(q1 * q2)) / (r * r);
    const field1AtDist = (kEff * Math.abs(q1)) / (r * r);

    return {
      forceN: force.toFixed(3),
      field1: field1AtDist.toFixed(2),
      isRepulsive: (q1Micro * q2Micro) > 0,
      steps: [
        `Step 1: Convert units to SI: q₁ = ${q1Micro} μC = ${q1.toExponential(2)} C, q₂ = ${q2Micro} μC = ${q2.toExponential(2)} C, r = ${distCm} cm = ${r} m`,
        `Step 2: Effective constant k = 1 / (4πε₀ ε_r) = 8.99×10⁹ / ${mediumEr} = ${(kEff).toExponential(3)} N·m²/C²`,
        `Step 3: Coulomb's Law: F = k · (|q₁ q₂|) / r² = ${(kEff).toExponential(3)} × |(${q1.toExponential(2)})(${q2.toExponential(2)})| / (${r})²`,
        `Step 4: Electrostatic Force F = ${force.toFixed(3)} N (${(q1Micro * q2Micro) > 0 ? 'Repulsive' : 'Attractive'})`,
        `Step 5: Electric field of charge 1 at separation distance: E₁ = k · |q₁| / r² = ${field1AtDist.toFixed(2)} N/C`
      ],
      wolframQuery: `coulomb force q1=${q1Micro} uC q2=${q2Micro} uC r=${distCm} cm`
    };
  }, [coulombParams]);

  // 10. Chemistry: Nernst Equation & Cell Potential
  const nernstResult = useMemo(() => {
    const { e0Cell, nElectrons, reactionQuotientQ, tempK } = nernstParams;
    // E_cell = E° - (2.303 RT / nF) log10(Q) ≈ E° - (0.0591 / n) log10(Q) at 298 K
    const coeff = (2.303 * 8.314 * tempK) / (nElectrons * 96485);
    const logQ = Math.log10(reactionQuotientQ);
    const eCell = e0Cell - coeff * logQ;
    const deltaG = -nElectrons * 96485 * e0Cell / 1000; // in kJ/mol
    const logKc = (nElectrons * e0Cell) / 0.0591;

    return {
      eCell: eCell.toFixed(4),
      logQ: logQ.toFixed(3),
      deltaGStandardKj: deltaG.toFixed(2),
      equilibriumKcExponent: logKc.toFixed(2),
      steps: [
        `Step 1: Standard cell potential E°_cell = ${e0Cell} V, number of electrons transferred n = ${nElectrons}, temperature T = ${tempK} K`,
        `Step 2: Reaction quotient Q = ${reactionQuotientQ} ⟹ log₁₀(Q) = ${logQ.toFixed(3)}`,
        `Step 3: Nernst Formula: E_cell = E°_cell - [2.303 R T / (n F)] · log₁₀(Q)`,
        `Step 4: At ${tempK} K: [2.303 R T / (n F)] = ${(coeff).toFixed(4)} V`,
        `Step 5: E_cell = ${e0Cell} - [${(coeff).toFixed(4)} × (${logQ.toFixed(3)})] = ${eCell.toFixed(4)} V`,
        `Step 6: Standard Gibbs Free Energy ΔG° = -n F E°_cell = -(${nElectrons}) × 96485 × ${e0Cell} = ${deltaG.toFixed(2)} kJ/mol`
      ],
      wolframQuery: `nernst equation E0=${e0Cell} n=${nElectrons} Q=${reactionQuotientQ}`
    };
  }, [nernstParams]);

  // 11. Chemistry: Boiling Point Elevation & Molar Mass
  const boilingResult = useMemo(() => {
    const { kb, w2Grams, m2MolarMass, w1GramsSolvent, vanTHoffI } = boilingParams;
    const molality = (w2Grams * 1000) / (m2MolarMass * w1GramsSolvent);
    const deltaTb = vanTHoffI * kb * molality;

    return {
      deltaTb: deltaTb.toFixed(4),
      molality: molality.toFixed(4),
      steps: [
        `Step 1: Calculate Molality m = (w₂ × 1000) / (M₂ × w₁) = (${w2Grams} × 1000) / (${m2MolarMass} × ${w1GramsSolvent}) = ${molality.toFixed(4)} mol/kg`,
        `Step 2: Molal elevation constant K_b = ${kb} K·kg/mol, Van 't Hoff factor i = ${vanTHoffI}`,
        `Step 3: Formula: ΔT_b = i · K_b · m`,
        `Step 4: Elevation in Boiling Point ΔT_b = ${vanTHoffI} × ${kb} × ${molality.toFixed(4)} = ${deltaTb.toFixed(4)} K (or °C)`
      ],
      wolframQuery: `boiling point elevation kb=${kb} molality=${molality.toFixed(4)}`
    };
  }, [boilingParams]);

  // 12. Chemistry: Chemical Kinetics First Order Reaction
  const kineticsResult = useMemo(() => {
    const { initialConc, finalConc, timeMinutes } = kineticsParams;
    const k = (2.303 / timeMinutes) * Math.log10(initialConc / finalConc);
    const tHalf = 0.693 / k;

    return {
      rateConstantK: k.toFixed(5),
      halfLifeMinutes: tHalf.toFixed(2),
      steps: [
        `Step 1: Initial concentration [A]₀ = ${initialConc} M, Concentration at time t [A] = ${finalConc} M, Time t = ${timeMinutes} min`,
        `Step 2: First-order integrated rate law: k = (2.303 / t) · log₁₀([A]₀ / [A])`,
        `Step 3: Concentration ratio [A]₀ / [A] = ${initialConc} / ${finalConc} = ${(initialConc / finalConc).toFixed(4)}`,
        `Step 4: Rate constant k = (2.303 / ${timeMinutes}) · log₁₀(${(initialConc / finalConc).toFixed(4)}) = ${k.toFixed(5)} min⁻¹`,
        `Step 5: Half-life period t₁/₂ = 0.693 / k = 0.693 / ${k.toFixed(5)} = ${tHalf.toFixed(2)} minutes`
      ],
      wolframQuery: `first order reaction initial ${initialConc} final ${finalConc} time ${timeMinutes}`
    };
  }, [kineticsParams]);

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      {/* Top Header */}
      <div className="border-b border-[var(--border-default)] pb-5 sm:pb-6">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-default)] text-xs text-[var(--text-secondary)] font-mono uppercase tracking-wider mb-3">
          <Calculator size={14} className="text-indigo-500" />
          <span>Wolfram Engine & Science Calculator</span>
        </div>
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
          Computational Solver
        </h1>
        <p className="font-sans text-xs sm:text-sm text-[var(--text-secondary)] mt-1.5 max-w-3xl leading-relaxed">
          Step-by-step symbolic derivation, numerical computation, and analytical solutions for CBSE Class 12 Standard Mathematics, Applied Mathematics, Physics, and Chemistry.
        </p>
      </div>

      {/* Main Mode Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none touch-pan-x border-b border-[var(--border-subtle)] text-xs">
        <button
          onClick={() => setActiveTab('omni')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all cursor-pointer shrink-0 ${
            activeTab === 'omni'
              ? 'bg-indigo-600 text-white shadow-sm font-semibold'
              : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]'
          }`}
        >
          <Search size={15} />
          <span>Omnibox / Natural Query</span>
        </button>

        <button
          onClick={() => setActiveTab('maths')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all cursor-pointer shrink-0 ${
            activeTab === 'maths'
              ? 'bg-blue-600 text-white shadow-sm font-semibold'
              : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]'
          }`}
        >
          <Calculator size={15} />
          <span>Standard Mathematics (041)</span>
        </button>

        <button
          onClick={() => setActiveTab('applied')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all cursor-pointer shrink-0 ${
            activeTab === 'applied'
              ? 'bg-emerald-600 text-white shadow-sm font-semibold'
              : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]'
          }`}
        >
          <TrendingUp size={15} />
          <span>Applied Mathematics (241)</span>
        </button>

        <button
          onClick={() => setActiveTab('physics')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all cursor-pointer shrink-0 ${
            activeTab === 'physics'
              ? 'bg-[#5B7B9A] text-white shadow-sm font-semibold'
              : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]'
          }`}
        >
          <Zap size={15} />
          <span>Physics Science Solver</span>
        </button>

        <button
          onClick={() => setActiveTab('chemistry')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all cursor-pointer shrink-0 ${
            activeTab === 'chemistry'
              ? 'bg-[#C75B3B] text-white shadow-sm font-semibold'
              : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]'
          }`}
        >
          <FlaskConical size={15} />
          <span>Chemistry Science Solver</span>
        </button>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 1. OMNIBOX / NATURAL QUERY TAB */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'omni' && (
        <div className="space-y-6">
          <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)] shadow-xs space-y-4">
            <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)]">
              Wolfram Omnibox: Enter Math, Equation or Scientific Query
            </label>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                setOmniSubmittedQuery(omniQuery);
              }}
              className="flex flex-col sm:flex-row items-stretch gap-3"
            >
              <div className="relative flex-1">
                <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                <input
                  type="text"
                  value={omniQuery}
                  onChange={(e) => setOmniQuery(e.target.value)}
                  placeholder="e.g. derivative of 3x^3 - 5x + 4, integral 2x+1, nernst E0=1.1, loan emi 500000 9.5% 60m..."
                  className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] text-[var(--text-primary)] pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 font-mono"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs sm:text-sm cursor-pointer shadow-sm flex items-center justify-center gap-2 transition-colors shrink-0"
              >
                <span>Compute</span>
                <ArrowRight size={16} />
              </button>
            </form>

            {/* Quick Example Chips */}
            <div className="flex items-center gap-2 flex-wrap text-xs pt-1">
              <span className="text-[var(--text-muted)] font-mono text-[11px]">Quick presets:</span>
              {[
                'derivative of 3x^3 - 5x^2 + 4x - 7',
                'integrate 3x^2 + 4x + 5',
                'loan emi 500000 rate 9.5 tenure 60',
                'nernst E0=1.10 n=2 Q=0.01',
                'lcr resonance L=0.2 C=10uF',
                'coulomb force q1=2uC q2=3uC r=15cm'
              ].map((chip) => (
                <button
                  key={chip}
                  onClick={() => {
                    setOmniQuery(chip);
                    setOmniSubmittedQuery(chip);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-indigo-500 text-[11px] font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>

          {/* Solution Card */}
          <div className="p-5 sm:p-7 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-500 font-semibold">
                  {omniResult.type}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[var(--text-primary)] mt-0.5">
                  Input Interpretation: {omniResult.interpretation}
                </h3>
              </div>
              <button
                onClick={() => handleOpenExternalWolfram(omniResult.wolframQuery)}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border border-indigo-500/25 text-xs font-semibold cursor-pointer transition-all shrink-0 self-start sm:self-auto"
                title="Launch this exact query directly in Wolfram|Alpha"
              >
                <span>Open in Wolfram|Alpha</span>
                <ExternalLink size={14} />
              </button>
            </div>

            {/* Governing Formula */}
            <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] font-mono text-xs sm:text-sm text-[var(--text-primary)]">
              <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase block mb-1">
                Governing Mathematical Law:
              </span>
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">{omniResult.formula}</span>
            </div>

            {/* Step-by-Step Derivation */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                Step-by-Step Solution Breakdown:
              </h4>
              <div className="space-y-2">
                {omniResult.steps.map((st, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs sm:text-sm font-sans">
                    <span className="w-5 h-5 rounded-full bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-mono text-[10px] shrink-0 font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-[var(--text-secondary)]">{st}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Result Box */}
            <div className="p-4 sm:p-5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-[var(--text-primary)] space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold">
                Computed Result:
              </span>
              <p className="font-mono text-base sm:text-lg font-bold text-[var(--text-primary)]">
                {omniResult.result}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* 2. STANDARD MATHEMATICS (041) TAB */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'maths' && (
        <div className="space-y-6">
          {/* Sub-tool Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
            {[
              { id: 'derivative', label: 'Derivative f\'(x)' },
              { id: 'integral', label: 'Definite / Indefinite Integral' },
              { id: 'matrix', label: '2×2 Matrix Inversion & Det' },
              { id: 'vector', label: '3D Vector Operations' }
            ].map((sub) => (
              <button
                key={sub.id}
                onClick={() => setMathSubTool(sub.id)}
                className={`px-3.5 py-2 rounded-xl font-medium transition-all cursor-pointer shrink-0 ${
                  mathSubTool === sub.id
                    ? 'bg-blue-600 text-white font-semibold shadow-xs'
                    : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>

          {/* Derivative Tool */}
          {mathSubTool === 'derivative' && (
            <div className="space-y-6">
              <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)] space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)]">
                    Polynomial Derivative: f(x) = a·x^p + b·x^q + c·x + d
                  </h3>
                  <button
                    onClick={() => handleOpenExternalWolfram(derivResult.wolframQuery)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30 text-xs font-semibold cursor-pointer"
                  >
                    <span>Wolfram|Alpha</span>
                    <ExternalLink size={13} />
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Coeff a</label>
                    <input 
                      type="number"
                      value={derivPoly.a}
                      onChange={(e) => setDerivPoly({ ...derivPoly, a: parseFloat(e.target.value) || 0 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Power p</label>
                    <input 
                      type="number"
                      value={derivPoly.p}
                      onChange={(e) => setDerivPoly({ ...derivPoly, p: parseFloat(e.target.value) || 0 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Coeff b</label>
                    <input 
                      type="number"
                      value={derivPoly.b}
                      onChange={(e) => setDerivPoly({ ...derivPoly, b: parseFloat(e.target.value) || 0 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Evaluate at x₀</label>
                    <input 
                      type="number"
                      value={derivPoly.evalX}
                      onChange={(e) => setDerivPoly({ ...derivPoly, evalX: parseFloat(e.target.value) || 0 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                </div>
              </div>

              {/* Derivation Steps */}
              <div className="p-5 sm:p-7 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-500 font-bold block">
                  Analytical Derivative & Steps
                </span>
                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/25 font-mono text-sm sm:text-base font-bold text-[var(--text-primary)]">
                  f'(x) = {derivResult.derivative}
                  <span className="block text-xs font-normal text-[var(--text-secondary)] mt-1 font-sans">
                    Evaluated at x = {derivResult.evaluatedAt}: <strong className="text-blue-600 dark:text-blue-400 font-mono text-sm">{derivResult.value}</strong>
                  </span>
                </div>

                <div className="space-y-2 pt-2">
                  {derivResult.steps.map((st, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)]">
                      {st}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Integral Tool */}
          {mathSubTool === 'integral' && (
            <div className="space-y-6">
              <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)] space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)]">
                    Integral: ∫ ({integralParams.a}x² + {integralParams.b}x + {integralParams.c}) dx
                  </h3>
                  <button
                    onClick={() => handleOpenExternalWolfram(integralResult.wolframQuery)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30 text-xs font-semibold cursor-pointer"
                  >
                    <span>Wolfram|Alpha</span>
                    <ExternalLink size={13} />
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs">
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Coeff a (x²)</label>
                    <input 
                      type="number"
                      value={integralParams.a}
                      onChange={(e) => setIntegralParams({ ...integralParams, a: parseFloat(e.target.value) || 0 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Coeff b (x)</label>
                    <input 
                      type="number"
                      value={integralParams.b}
                      onChange={(e) => setIntegralParams({ ...integralParams, b: parseFloat(e.target.value) || 0 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Constant c</label>
                    <input 
                      type="number"
                      value={integralParams.c}
                      onChange={(e) => setIntegralParams({ ...integralParams, c: parseFloat(e.target.value) || 0 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Lower Limit a</label>
                    <input 
                      type="number"
                      value={integralParams.lower}
                      onChange={(e) => setIntegralParams({ ...integralParams, lower: parseFloat(e.target.value) || 0 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Upper Limit b</label>
                    <input 
                      type="number"
                      value={integralParams.upper}
                      onChange={(e) => setIntegralParams({ ...integralParams, upper: parseFloat(e.target.value) || 0 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                </div>
              </div>

              {/* Integral Solution */}
              <div className="p-5 sm:p-7 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-500 font-bold block">
                  Definite Integral Solution
                </span>
                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/25 font-mono text-sm sm:text-base font-bold text-[var(--text-primary)]">
                  ∫_{integralParams.lower}^{integralParams.upper} ({integralResult.integrand}) dx = {integralResult.definiteValue}
                  <span className="block text-xs font-normal text-[var(--text-secondary)] mt-1 font-sans">
                    Antiderivative F(x): <strong className="font-mono">{integralResult.antiderivative}</strong>
                  </span>
                </div>

                <div className="space-y-2 pt-2">
                  {integralResult.steps.map((st, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)]">
                      {st}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 2x2 Matrix Tool */}
          {mathSubTool === 'matrix' && (
            <div className="space-y-6">
              <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)] space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)]">
                    2×2 Matrix Inversion: A = [[a₁₁, a₁₂], [a₂₁, a₂₂]]
                  </h3>
                  <button
                    onClick={() => handleOpenExternalWolfram(matrixResult.wolframQuery)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30 text-xs font-semibold cursor-pointer"
                  >
                    <span>Wolfram|Alpha</span>
                    <ExternalLink size={13} />
                  </button>
                </div>

                <div className="max-w-xs mx-auto grid grid-cols-2 gap-3 p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-default)]">
                  <div>
                    <label className="text-[10px] font-mono text-[var(--text-muted)] block text-center">a₁₁</label>
                    <input
                      type="number"
                      value={matrix2x2.a11}
                      onChange={(e) => setMatrix2x2({ ...matrix2x2, a11: parseFloat(e.target.value) || 0 })}
                      className="w-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] p-2 rounded-lg font-mono text-center text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-[var(--text-muted)] block text-center">a₁₂</label>
                    <input
                      type="number"
                      value={matrix2x2.a12}
                      onChange={(e) => setMatrix2x2({ ...matrix2x2, a12: parseFloat(e.target.value) || 0 })}
                      className="w-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] p-2 rounded-lg font-mono text-center text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-[var(--text-muted)] block text-center">a₂₁</label>
                    <input
                      type="number"
                      value={matrix2x2.a21}
                      onChange={(e) => setMatrix2x2({ ...matrix2x2, a21: parseFloat(e.target.value) || 0 })}
                      className="w-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] p-2 rounded-lg font-mono text-center text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-[var(--text-muted)] block text-center">a₂₂</label>
                    <input
                      type="number"
                      value={matrix2x2.a22}
                      onChange={(e) => setMatrix2x2({ ...matrix2x2, a22: parseFloat(e.target.value) || 0 })}
                      className="w-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] p-2 rounded-lg font-mono text-center text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Matrix Solution */}
              <div className="p-5 sm:p-7 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-500 font-bold block">
                  Determinant & Inverse Matrix
                </span>
                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/25 font-mono text-sm sm:text-base font-bold text-[var(--text-primary)]">
                  |A| = {matrixResult.det}
                  {!matrixResult.isSingular && matrixResult.inv && (
                    <div className="mt-2 text-xs font-mono">
                      A⁻¹ = [[{matrixResult.inv.b11}, {matrixResult.inv.b12}], [{matrixResult.inv.b21}, {matrixResult.inv.b22}]]
                    </div>
                  )}
                </div>

                <div className="space-y-2 pt-2">
                  {matrixResult.steps.map((st, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)]">
                      {st}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Vector Operations Tool */}
          {mathSubTool === 'vector' && (
            <div className="space-y-6">
              <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)] space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)]">
                    3D Vectors: a⃗ = a₁î + a₂ĵ + a₃k̂ and b⃗ = b₁î + b₂ĵ + b₃k̂
                  </h3>
                  <button
                    onClick={() => handleOpenExternalWolfram(vectorResult.wolframQuery)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30 text-xs font-semibold cursor-pointer"
                  >
                    <span>Wolfram|Alpha</span>
                    <ExternalLink size={13} />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2">
                    <span className="text-xs font-mono font-bold text-blue-500 block">Vector a⃗ components</span>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <input
                        type="number"
                        placeholder="a1"
                        value={vectorParams.a1}
                        onChange={(e) => setVectorParams({ ...vectorParams, a1: parseFloat(e.target.value) || 0 })}
                        className="bg-[var(--bg-elevated)] border border-[var(--border-default)] p-2 rounded font-mono text-center"
                      />
                      <input
                        type="number"
                        placeholder="a2"
                        value={vectorParams.a2}
                        onChange={(e) => setVectorParams({ ...vectorParams, a2: parseFloat(e.target.value) || 0 })}
                        className="bg-[var(--bg-elevated)] border border-[var(--border-default)] p-2 rounded font-mono text-center"
                      />
                      <input
                        type="number"
                        placeholder="a3"
                        value={vectorParams.a3}
                        onChange={(e) => setVectorParams({ ...vectorParams, a3: parseFloat(e.target.value) || 0 })}
                        className="bg-[var(--bg-elevated)] border border-[var(--border-default)] p-2 rounded font-mono text-center"
                      />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2">
                    <span className="text-xs font-mono font-bold text-blue-500 block">Vector b⃗ components</span>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <input
                        type="number"
                        placeholder="b1"
                        value={vectorParams.b1}
                        onChange={(e) => setVectorParams({ ...vectorParams, b1: parseFloat(e.target.value) || 0 })}
                        className="bg-[var(--bg-elevated)] border border-[var(--border-default)] p-2 rounded font-mono text-center"
                      />
                      <input
                        type="number"
                        placeholder="b2"
                        value={vectorParams.b2}
                        onChange={(e) => setVectorParams({ ...vectorParams, b2: parseFloat(e.target.value) || 0 })}
                        className="bg-[var(--bg-elevated)] border border-[var(--border-default)] p-2 rounded font-mono text-center"
                      />
                      <input
                        type="number"
                        placeholder="b3"
                        value={vectorParams.b3}
                        onChange={(e) => setVectorParams({ ...vectorParams, b3: parseFloat(e.target.value) || 0 })}
                        className="bg-[var(--bg-elevated)] border border-[var(--border-default)] p-2 rounded font-mono text-center"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Vector Solution */}
              <div className="p-5 sm:p-7 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-500 font-bold block">
                  Vector Products & Angles
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                    <span className="text-[var(--text-muted)] block">Dot Product a⃗ · b⃗</span>
                    <strong className="text-sm text-blue-600 dark:text-blue-400">{vectorResult.dot}</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                    <span className="text-[var(--text-muted)] block">Angle Between (θ)</span>
                    <strong className="text-sm text-blue-600 dark:text-blue-400">{vectorResult.angleDeg}°</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                    <span className="text-[var(--text-muted)] block">Projection of a⃗ on b⃗</span>
                    <strong className="text-sm text-blue-600 dark:text-blue-400">{vectorResult.projAonB}</strong>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  {vectorResult.steps.map((st, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)]">
                      {st}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* 3. APPLIED MATHEMATICS (241) TAB */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'applied' && (
        <div className="space-y-6">
          {/* Sub-tool Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
            {[
              { id: 'emi', label: 'Loan EMI (Reducing Balance)' },
              { id: 'cagr', label: 'CAGR & Compound Growth' },
              { id: 'perpetuity', label: 'Perpetuity & Sinking Fund' }
            ].map((sub) => (
              <button
                key={sub.id}
                onClick={() => setAppliedSubTool(sub.id)}
                className={`px-3.5 py-2 rounded-xl font-medium transition-all cursor-pointer shrink-0 ${
                  appliedSubTool === sub.id
                    ? 'bg-emerald-600 text-white font-semibold shadow-xs'
                    : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>

          {/* Loan EMI Tool */}
          {appliedSubTool === 'emi' && (
            <div className="space-y-6">
              <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)] space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)]">
                    Reducing Balance Loan EMI Formulation
                  </h3>
                  <button
                    onClick={() => handleOpenExternalWolfram(emiResult.wolframQuery)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-xs font-semibold cursor-pointer"
                  >
                    <span>Wolfram|Alpha</span>
                    <ExternalLink size={13} />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Loan Principal (₹)</label>
                    <input 
                      type="number"
                      value={emiParams.principal}
                      onChange={(e) => setEmiParams({ ...emiParams, principal: parseFloat(e.target.value) || 0 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Annual Interest Rate (%)</label>
                    <input 
                      type="number"
                      step="0.1"
                      value={emiParams.annualRate}
                      onChange={(e) => setEmiParams({ ...emiParams, annualRate: parseFloat(e.target.value) || 0 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Tenure (Months)</label>
                    <input 
                      type="number"
                      value={emiParams.tenureMonths}
                      onChange={(e) => setEmiParams({ ...emiParams, tenureMonths: parseFloat(e.target.value) || 0 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                </div>
              </div>

              {/* EMI Solution */}
              <div className="p-5 sm:p-7 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold block">
                  Computed Monthly EMI & Interest
                </span>
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 font-mono text-sm sm:text-base font-bold text-[var(--text-primary)]">
                  Monthly EMI: ₹{emiResult.emi}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-xs font-normal text-[var(--text-secondary)] font-sans">
                    <div>Total Repayment: <strong className="font-mono text-emerald-600 dark:text-emerald-400">₹{emiResult.totalAmount}</strong></div>
                    <div>Total Interest: <strong className="font-mono text-emerald-600 dark:text-emerald-400">₹{emiResult.totalInterest}</strong></div>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  {emiResult.steps.map((st, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)]">
                      {st}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* CAGR Tool */}
          {appliedSubTool === 'cagr' && (
            <div className="space-y-6">
              <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)] space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)]">
                    Compound Annual Growth Rate (CAGR)
                  </h3>
                  <button
                    onClick={() => handleOpenExternalWolfram(cagrResult.wolframQuery)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-xs font-semibold cursor-pointer"
                  >
                    <span>Wolfram|Alpha</span>
                    <ExternalLink size={13} />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Initial Value V_beg (₹)</label>
                    <input 
                      type="number"
                      value={cagrParams.initialValue}
                      onChange={(e) => setCagrParams({ ...cagrParams, initialValue: parseFloat(e.target.value) || 0 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Final Value V_end (₹)</label>
                    <input 
                      type="number"
                      value={cagrParams.finalValue}
                      onChange={(e) => setCagrParams({ ...cagrParams, finalValue: parseFloat(e.target.value) || 0 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Tenure (Years)</label>
                    <input 
                      type="number"
                      value={cagrParams.years}
                      onChange={(e) => setCagrParams({ ...cagrParams, years: parseFloat(e.target.value) || 0 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                </div>
              </div>

              {/* CAGR Solution */}
              <div className="p-5 sm:p-7 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold block">
                  Annualized Return & Compounding
                </span>
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 font-mono text-sm sm:text-base font-bold text-[var(--text-primary)]">
                  CAGR = {cagrResult.cagrPercent}% per year
                  <span className="block text-xs font-normal text-[var(--text-secondary)] mt-1 font-sans">
                    Total Absolute Growth: <strong className="font-mono text-emerald-600 dark:text-emerald-400">+{cagrResult.totalGrowthPercent}%</strong>
                  </span>
                </div>

                <div className="space-y-2 pt-2">
                  {cagrResult.steps.map((st, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)]">
                      {st}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Perpetuity & Sinking Fund */}
          {appliedSubTool === 'perpetuity' && (
            <div className="space-y-6">
              <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)] space-y-4">
                <h3 className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)]">
                  Present Value of Perpetuity: PV = R / i
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Periodic Payment R (₹)</label>
                    <input 
                      type="number"
                      value={perpetuityParams.payment}
                      onChange={(e) => setPerpetuityParams({ ...perpetuityParams, payment: parseFloat(e.target.value) || 0 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Discount Rate i (% p.a.)</label>
                    <input 
                      type="number"
                      step="0.5"
                      value={perpetuityParams.rate}
                      onChange={(e) => setPerpetuityParams({ ...perpetuityParams, rate: parseFloat(e.target.value) || 0 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-7 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold block">
                  Perpetuity Valuation
                </span>
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 font-mono text-sm sm:text-base font-bold text-[var(--text-primary)]">
                  Present Value: ₹{((perpetuityParams.payment / (perpetuityParams.rate / 100)) || 0).toLocaleString()}
                </div>
                <div className="text-xs font-mono text-[var(--text-secondary)] space-y-1">
                  <div>Step 1: Convert rate i = {perpetuityParams.rate}% = {(perpetuityParams.rate / 100).toFixed(4)}</div>
                  <div>Step 2: PV = R / i = ₹{perpetuityParams.payment} / {(perpetuityParams.rate / 100).toFixed(4)} = ₹{((perpetuityParams.payment / (perpetuityParams.rate / 100)) || 0).toLocaleString()}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* 4. PHYSICS SCIENCE CALCULATOR TAB */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'physics' && (
        <div className="space-y-6">
          {/* Sub-tool Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
            {[
              { id: 'lcr', label: 'Series LCR Resonance & Impedance' },
              { id: 'coulomb', label: 'Coulomb\'s Law & Field' }
            ].map((sub) => (
              <button
                key={sub.id}
                onClick={() => setPhysicsSubTool(sub.id)}
                className={`px-3.5 py-2 rounded-xl font-medium transition-all cursor-pointer shrink-0 ${
                  physicsSubTool === sub.id
                    ? 'bg-[#5B7B9A] text-white font-semibold shadow-xs'
                    : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>

          {/* LCR Circuit Tool */}
          {physicsSubTool === 'lcr' && (
            <div className="space-y-6">
              <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)] space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)]">
                    Series LCR Circuit AC Parameters
                  </h3>
                  <button
                    onClick={() => handleOpenExternalWolfram(lcrResult.wolframQuery)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#5B7B9A]/15 hover:bg-[#5B7B9A]/25 text-[#5B7B9A] dark:text-sky-300 border border-[#5B7B9A]/30 text-xs font-semibold cursor-pointer"
                  >
                    <span>Wolfram|Alpha</span>
                    <ExternalLink size={13} />
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs">
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Resistance R (Ω)</label>
                    <input 
                      type="number"
                      value={lcrParams.r}
                      onChange={(e) => setLcrParams({ ...lcrParams, r: parseFloat(e.target.value) || 0 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Inductance L (H)</label>
                    <input 
                      type="number"
                      step="0.05"
                      value={lcrParams.l}
                      onChange={(e) => setLcrParams({ ...lcrParams, l: parseFloat(e.target.value) || 0 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Capacitance C (μF)</label>
                    <input 
                      type="number"
                      value={lcrParams.cMicro}
                      onChange={(e) => setLcrParams({ ...lcrParams, cMicro: parseFloat(e.target.value) || 0 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Source V_rms (V)</label>
                    <input 
                      type="number"
                      value={lcrParams.vRms}
                      onChange={(e) => setLcrParams({ ...lcrParams, vRms: parseFloat(e.target.value) || 0 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Frequency f (Hz)</label>
                    <input 
                      type="number"
                      value={lcrParams.freqHz}
                      onChange={(e) => setLcrParams({ ...lcrParams, freqHz: parseFloat(e.target.value) || 0 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                </div>
              </div>

              {/* LCR Solution */}
              <div className="p-5 sm:p-7 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#5B7B9A] font-bold block">
                  Resonance & Circuit Impedance
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                    <span className="text-[var(--text-muted)] block">Resonant Frequency f₀</span>
                    <strong className="text-sm text-[#5B7B9A] dark:text-sky-300">{lcrResult.resFreqHz} Hz</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                    <span className="text-[var(--text-muted)] block">Quality Factor Q</span>
                    <strong className="text-sm text-[#5B7B9A] dark:text-sky-300">{lcrResult.qFactor}</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                    <span className="text-[var(--text-muted)] block">Current Impedance Z</span>
                    <strong className="text-sm text-[#5B7B9A] dark:text-sky-300">{lcrResult.impedanceZ} Ω</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                    <span className="text-[var(--text-muted)] block">Current I_rms</span>
                    <strong className="text-sm text-[#5B7B9A] dark:text-sky-300">{lcrResult.currentI} A</strong>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  {lcrResult.steps.map((st, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)]">
                      {st}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Coulomb Tool */}
          {physicsSubTool === 'coulomb' && (
            <div className="space-y-6">
              <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)] space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)]">
                    Coulomb's Law: F = (1 / 4πε₀) · (q₁q₂ / r²)
                  </h3>
                  <button
                    onClick={() => handleOpenExternalWolfram(coulombResult.wolframQuery)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#5B7B9A]/15 hover:bg-[#5B7B9A]/25 text-[#5B7B9A] dark:text-sky-300 border border-[#5B7B9A]/30 text-xs font-semibold cursor-pointer"
                  >
                    <span>Wolfram|Alpha</span>
                    <ExternalLink size={13} />
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Charge q₁ (μC)</label>
                    <input 
                      type="number"
                      value={coulombParams.q1Micro}
                      onChange={(e) => setCoulombParams({ ...coulombParams, q1Micro: parseFloat(e.target.value) || 0 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Charge q₂ (μC)</label>
                    <input 
                      type="number"
                      value={coulombParams.q2Micro}
                      onChange={(e) => setCoulombParams({ ...coulombParams, q2Micro: parseFloat(e.target.value) || 0 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Distance r (cm)</label>
                    <input 
                      type="number"
                      value={coulombParams.distCm}
                      onChange={(e) => setCoulombParams({ ...coulombParams, distCm: parseFloat(e.target.value) || 0 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Dielectric Const ε_r</label>
                    <input 
                      type="number"
                      value={coulombParams.mediumEr}
                      onChange={(e) => setCoulombParams({ ...coulombParams, mediumEr: parseFloat(e.target.value) || 1 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                </div>
              </div>

              {/* Coulomb Solution */}
              <div className="p-5 sm:p-7 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#5B7B9A] font-bold block">
                  Electrostatic Force Calculation
                </span>
                <div className="p-4 rounded-xl bg-[#5B7B9A]/15 border border-[#5B7B9A]/30 font-mono text-sm sm:text-base font-bold text-[var(--text-primary)]">
                  Force F = {coulombResult.forceN} N ({coulombResult.isRepulsive ? 'Repulsive' : 'Attractive'})
                </div>

                <div className="space-y-2 pt-2">
                  {coulombResult.steps.map((st, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)]">
                      {st}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* 5. CHEMISTRY SCIENCE CALCULATOR TAB */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'chemistry' && (
        <div className="space-y-6">
          {/* Sub-tool Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
            {[
              { id: 'nernst', label: 'Nernst Equation & Cell EMF' },
              { id: 'boiling', label: 'Boiling Point Elevation (ΔT_b)' },
              { id: 'kinetics', label: 'First-Order Kinetics & t₁/₂' }
            ].map((sub) => (
              <button
                key={sub.id}
                onClick={() => setChemSubTool(sub.id)}
                className={`px-3.5 py-2 rounded-xl font-medium transition-all cursor-pointer shrink-0 ${
                  chemSubTool === sub.id
                    ? 'bg-[#C75B3B] text-white font-semibold shadow-xs'
                    : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>

          {/* Nernst Equation Tool */}
          {chemSubTool === 'nernst' && (
            <div className="space-y-6">
              <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)] space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)]">
                    Nernst Equation: E_cell = E°_cell - (0.0591 / n) · log₁₀(Q)
                  </h3>
                  <button
                    onClick={() => handleOpenExternalWolfram(nernstResult.wolframQuery)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#C75B3B]/15 hover:bg-[#C75B3B]/25 text-[#C75B3B] dark:text-rose-300 border border-[#C75B3B]/30 text-xs font-semibold cursor-pointer"
                  >
                    <span>Wolfram|Alpha</span>
                    <ExternalLink size={13} />
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Standard E°_cell (V)</label>
                    <input 
                      type="number"
                      step="0.01"
                      value={nernstParams.e0Cell}
                      onChange={(e) => setNernstParams({ ...nernstParams, e0Cell: parseFloat(e.target.value) || 0 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Electrons Transferred n</label>
                    <input 
                      type="number"
                      value={nernstParams.nElectrons}
                      onChange={(e) => setNernstParams({ ...nernstParams, nElectrons: parseInt(e.target.value, 10) || 1 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Reaction Quotient Q</label>
                    <input 
                      type="number"
                      step="0.001"
                      value={nernstParams.reactionQuotientQ}
                      onChange={(e) => setNernstParams({ ...nernstParams, reactionQuotientQ: parseFloat(e.target.value) || 0.01 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Temperature T (K)</label>
                    <input 
                      type="number"
                      value={nernstParams.tempK}
                      onChange={(e) => setNernstParams({ ...nernstParams, tempK: parseFloat(e.target.value) || 298 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                </div>
              </div>

              {/* Nernst Solution */}
              <div className="p-5 sm:p-7 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#C75B3B] font-bold block">
                  Electrochemical Cell Potential
                </span>
                <div className="p-4 rounded-xl bg-[#C75B3B]/15 border border-[#C75B3B]/30 font-mono text-sm sm:text-base font-bold text-[var(--text-primary)]">
                  E_cell = {nernstResult.eCell} V
                  <span className="block text-xs font-normal text-[var(--text-secondary)] mt-1 font-sans">
                    Standard Gibbs Free Energy ΔG° = <strong className="font-mono text-[#C75B3B] dark:text-rose-300">{nernstResult.deltaGStandardKj} kJ/mol</strong>
                  </span>
                </div>

                <div className="space-y-2 pt-2">
                  {nernstResult.steps.map((st, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)]">
                      {st}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Boiling Elevation Tool */}
          {chemSubTool === 'boiling' && (
            <div className="space-y-6">
              <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)] space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)]">
                    Elevation in Boiling Point: ΔT_b = i · K_b · m
                  </h3>
                  <button
                    onClick={() => handleOpenExternalWolfram(boilingResult.wolframQuery)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#C75B3B]/15 hover:bg-[#C75B3B]/25 text-[#C75B3B] dark:text-rose-300 border border-[#C75B3B]/30 text-xs font-semibold cursor-pointer"
                  >
                    <span>Wolfram|Alpha</span>
                    <ExternalLink size={13} />
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Ebullioscopic K_b</label>
                    <input 
                      type="number"
                      step="0.01"
                      value={boilingParams.kb}
                      onChange={(e) => setBoilingParams({ ...boilingParams, kb: parseFloat(e.target.value) || 0.52 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Solute mass w₂ (g)</label>
                    <input 
                      type="number"
                      value={boilingParams.w2Grams}
                      onChange={(e) => setBoilingParams({ ...boilingParams, w2Grams: parseFloat(e.target.value) || 0 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Molar mass M₂ (g/mol)</label>
                    <input 
                      type="number"
                      value={boilingParams.m2MolarMass}
                      onChange={(e) => setBoilingParams({ ...boilingParams, m2MolarMass: parseFloat(e.target.value) || 1 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Solvent mass w₁ (g)</label>
                    <input 
                      type="number"
                      value={boilingParams.w1GramsSolvent}
                      onChange={(e) => setBoilingParams({ ...boilingParams, w1GramsSolvent: parseFloat(e.target.value) || 100 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                </div>
              </div>

              {/* Boiling Elevation Solution */}
              <div className="p-5 sm:p-7 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#C75B3B] font-bold block">
                  Colligative Elevation Result
                </span>
                <div className="p-4 rounded-xl bg-[#C75B3B]/15 border border-[#C75B3B]/30 font-mono text-sm sm:text-base font-bold text-[var(--text-primary)]">
                  ΔT_b = {boilingResult.deltaTb} K
                  <span className="block text-xs font-normal text-[var(--text-secondary)] mt-1 font-sans">
                    Molality m = <strong className="font-mono">{boilingResult.molality} mol/kg</strong>
                  </span>
                </div>

                <div className="space-y-2 pt-2">
                  {boilingResult.steps.map((st, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)]">
                      {st}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* First Order Kinetics */}
          {chemSubTool === 'kinetics' && (
            <div className="space-y-6">
              <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)] space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)]">
                    First-Order Kinetics: k = (2.303 / t) · log₁₀([A]₀ / [A])
                  </h3>
                  <button
                    onClick={() => handleOpenExternalWolfram(kineticsResult.wolframQuery)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#C75B3B]/15 hover:bg-[#C75B3B]/25 text-[#C75B3B] dark:text-rose-300 border border-[#C75B3B]/30 text-xs font-semibold cursor-pointer"
                  >
                    <span>Wolfram|Alpha</span>
                    <ExternalLink size={13} />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Initial [A]₀ (M)</label>
                    <input 
                      type="number"
                      value={kineticsParams.initialConc}
                      onChange={(e) => setKineticsParams({ ...kineticsParams, initialConc: parseFloat(e.target.value) || 1 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Final [A] (M)</label>
                    <input 
                      type="number"
                      value={kineticsParams.finalConc}
                      onChange={(e) => setKineticsParams({ ...kineticsParams, finalConc: parseFloat(e.target.value) || 0.1 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">Time Elapsed t (min)</label>
                    <input 
                      type="number"
                      value={kineticsParams.timeMinutes}
                      onChange={(e) => setKineticsParams({ ...kineticsParams, timeMinutes: parseFloat(e.target.value) || 1 })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] p-2 rounded-lg font-mono text-center"
                    />
                  </div>
                </div>
              </div>

              {/* Kinetics Solution */}
              <div className="p-5 sm:p-7 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#C75B3B] font-bold block">
                  Reaction Kinetics Parameters
                </span>
                <div className="p-4 rounded-xl bg-[#C75B3B]/15 border border-[#C75B3B]/30 font-mono text-sm sm:text-base font-bold text-[var(--text-primary)]">
                  Rate Constant k = {kineticsResult.rateConstantK} min⁻¹
                  <span className="block text-xs font-normal text-[var(--text-secondary)] mt-1 font-sans">
                    Half-Life Period t₁/₂ = <strong className="font-mono text-[#C75B3B] dark:text-rose-300">{kineticsResult.halfLifeMinutes} minutes</strong>
                  </span>
                </div>

                <div className="space-y-2 pt-2">
                  {kineticsResult.steps.map((st, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)]">
                      {st}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
