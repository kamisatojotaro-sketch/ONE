// Complete CBSE Class 12 Physics Derivations Reference Bank
// Extracted and synthesized from the 47-Slide "All Derivations - Physics Class 12" (Shobhit Nirwan) deck,
// verified against NCERT Part I & II and CBSE 2026 Rationalized Syllabus.

export const PHYSICS_DERIVATIONS_REFERENCE = [
  // =========================================================================
  // CHAPTER 1: ELECTRIC CHARGES AND FIELDS (Slides 1–6)
  // =========================================================================
  {
    id: 'drv-1-1',
    slideRange: 'Slide 1',
    chapterNum: 1,
    chapterId: 'phy-ch-1',
    chapterTitle: 'Electric Charges and Fields',
    subtopicId: 'phy-sub-1-6',
    title: 'Electric Field on the Axial Line of an Electric Dipole',
    syllabusStatus: 'Core CBSE 2026',
    importance: '5 Marks Board Staple',
    diagramId: 'dipole-fields',
    subMode: 'axial',
    setup: 'Consider an electric dipole consisting of charges $-q$ at $A$ and $+q$ at $B$ separated by distance $2a$, with midpoint $O$ and dipole moment $p = q(2a)$ directed from $-q$ to $+q$. Find net electric field $\\vec{E}$ at axial point $P$ at distance $r$ from $O$ ($r > a$).',
    steps: [
      { text: 'Distance of $P$ from $+q$ is $(r - a)$ and from $-q$ is $(r + a)$. Field due to $+q$ points radially away (along $\\hat{p}$):', equation: 'E_{+q} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q}{(r - a)^2}' },
      { text: 'Field due to $-q$ points towards $-q$ (along $-\\hat{p}$):', equation: 'E_{-q} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q}{(r + a)^2}' },
      { text: 'Since $E_{+q} > E_{-q}$ and the vectors are antiparallel, net axial field $E_{\\text{axial}} = E_{+q} - E_{-q}$:', equation: 'E_{\\text{axial}} = \\frac{q}{4\\pi\\varepsilon_0}\\left[\\frac{1}{(r-a)^2} - \\frac{1}{(r+a)^2}\\right] = \\frac{q}{4\\pi\\varepsilon_0}\\frac{4ra}{(r^2-a^2)^2}' },
      { text: 'Substitute dipole moment $p = q \\cdot 2a$:', equation: '\\vec{E}_{\\text{axial}} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{2pr}{(r^2 - a^2)^2}\\,\\hat{p}' },
      { text: 'For a short dipole ($r \\gg a$, neglecting $a^2$ compared to $r^2$):', equation: '\\vec{E}_{\\text{axial}} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{2\\vec{p}}{r^3}' }
    ],
    finalFormula: 'E_{\\text{axial}} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{2p}{r^3} \\quad (\\text{along } +\\vec{p})',
    specialCases: ['Direction of $\\vec{E}_{\\text{axial}}$ is parallel to dipole moment $\\vec{p}$ ($\\theta = 0^\\circ$).', 'Follows inverse-cube law ($E \\propto 1/r^3$) for short dipoles.']
  },
  {
    id: 'drv-1-2',
    slideRange: 'Slide 2',
    chapterNum: 1,
    chapterId: 'phy-ch-1',
    chapterTitle: 'Electric Charges and Fields',
    subtopicId: 'phy-sub-1-6',
    title: 'Electric Field on the Equatorial Plane of an Electric Dipole',
    syllabusStatus: 'Core CBSE 2026',
    importance: '5 Marks Board Staple',
    diagramId: 'dipole-fields',
    subMode: 'equatorial',
    setup: 'Place point $P$ on the perpendicular bisector (equatorial line) of dipole $AB$ ($-q$ to $+q$, separation $2a$) at distance $r$ from centre $O$. Distance from each charge to $P$ is $\\sqrt{r^2 + a^2}$.',
    steps: [
      { text: 'Magnitudes of fields due to $+q$ and $-q$ at $P$ are equal:', equation: 'E_{+q} = E_{-q} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q}{r^2 + a^2}' },
      { text: 'Resolve both fields perpendicular and parallel to dipole axis: normal components $E_{+q}\\sin\\theta$ and $E_{-q}\\sin\\theta$ are equal and opposite, cancelling completely.' },
      { text: 'Parallel components $E_{+q}\\cos\\theta$ and $E_{-q}\\cos\\theta$ both point opposite to $\\vec{p}$ ($-\\hat{p}$), using $\\cos\\theta = \\frac{a}{\\sqrt{r^2+a^2}}$:', equation: 'E_{\\text{eq}} = 2 E_{+q}\\cos\\theta = 2\\cdot\\frac{q}{4\\pi\\varepsilon_0(r^2+a^2)}\\cdot\\frac{a}{(r^2+a^2)^{1/2}}' },
      { text: 'Substitute $p = 2qa$ and take short-dipole limit ($r \\gg a$):', equation: '\\vec{E}_{\\text{eq}} = -\\frac{1}{4\\pi\\varepsilon_0}\\frac{\\vec{p}}{(r^2+a^2)^{3/2}} \\approx -\\frac{1}{4\\pi\\varepsilon_0}\\frac{\\vec{p}}{r^3}' }
    ],
    finalFormula: 'E_{\\text{eq}} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{p}{r^3} \\implies E_{\\text{axial}} = 2 E_{\\text{eq}}',
    specialCases: ['Direction of $\\vec{E}_{\\text{eq}}$ is strictly antiparallel ($180^\\circ$) to $\\vec{p}$.', 'At the same far distance $r$, axial field is double the equatorial field.']
  },
  {
    id: 'drv-1-3',
    slideRange: 'Slide 3',
    chapterNum: 1,
    chapterId: 'phy-ch-1',
    chapterTitle: 'Electric Charges and Fields',
    subtopicId: 'phy-sub-1-7',
    title: 'Torque and Potential Energy of a Dipole in a Uniform Electric Field',
    syllabusStatus: 'Core CBSE 2026',
    importance: '3 Marks High Yield',
    diagramId: 'dipole-fields',
    subMode: 'axial',
    setup: 'Place electric dipole $\\vec{p}$ of length $2a$ in a uniform electric field $\\vec{E}$ at angle $\\theta$. Charges $+q$ and $-q$ experience equal and opposite forces $+q\\vec{E}$ and $-q\\vec{E}$.',
    steps: [
      { text: 'Net translational force on dipole in uniform field is zero: $\\vec{F}_{\\text{net}} = q\\vec{E} - q\\vec{E} = 0$. However, the couple produces a torque about centre $O$:', equation: '\\tau = \\text{Force} \\times \\perp\\text{ arm} = (qE)(2a\\sin\\theta) = pE\\sin\\theta \\implies \\vec{\\tau} = \\vec{p} \\times \\vec{E}' },
      { text: 'Work done in rotating dipole against restoring torque from angle $\\theta_1$ to $\\theta_2$ is stored as potential energy $U$:', equation: 'W = \\int_{\\theta_1}^{\\theta_2} pE\\sin\\theta\\,d\\theta = pE(\\cos\\theta_1 - \\cos\\theta_2)' },
      { text: 'Taking zero potential energy reference at $\\theta_1 = 90^\\circ$ and $\\theta_2 = \\theta$:', equation: 'U(\\theta) = -pE\\cos\\theta = -\\vec{p}\\cdot\\vec{E}' }
    ],
    finalFormula: '\\tau = pE\\sin\\theta, \\qquad U = -pE\\cos\\theta',
    specialCases: ['$\\theta = 0^\\circ$: $\\tau = 0, U = -pE$ (Stable Equilibrium).', '$\\theta = 180^\\circ$: $\\tau = 0, U = +pE$ (Unstable Equilibrium).', '$\\theta = 90^\\circ$: $\\tau = pE$ (maximum torque), $U = 0$.']
  },
  {
    id: 'drv-1-4',
    slideRange: 'Slide 4',
    chapterNum: 1,
    chapterId: 'phy-ch-1',
    chapterTitle: 'Electric Charges and Fields',
    subtopicId: 'phy-sub-1-10',
    title: 'Deduction of Coulomb’s Law from Gauss’s Law',
    syllabusStatus: 'Core CBSE 2026',
    importance: '2 Marks Conceptual Proof',
    diagramId: 'point-charge-field',
    setup: 'Consider an isolated point charge $+q$ at $O$. Draw a concentric spherical Gaussian surface of radius $r$ around $O$. By spherical symmetry, $\\vec{E}$ is radial and constant in magnitude over the sphere.',
    steps: [
      { text: 'At every area element $d\\vec{A}$ on the Gaussian sphere, $\\vec{E}$ is parallel to $d\\vec{A}$ ($\\theta = 0^\\circ$):', equation: '\\oint \\vec{E}\\cdot d\\vec{A} = E \\oint dA = E(4\\pi r^2)' },
      { text: 'By Gauss’s Theorem $\\Phi_E = q/\\varepsilon_0$:', equation: 'E(4\\pi r^2) = \\frac{q}{\\varepsilon_0} \\implies E = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{r^2}' },
      { text: 'Force on a test charge $q_0$ placed on this sphere gives Coulomb’s Law:', equation: 'F = q_0 E = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q q_0}{r^2}' }
    ],
    finalFormula: 'F = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q q_0}{r^2}',
    specialCases: ['Confirms Gauss’s law is equivalent to Coulomb’s inverse-square law in electrostatics.']
  },
  {
    id: 'drv-1-5',
    slideRange: 'Slide 5',
    chapterNum: 1,
    chapterId: 'phy-ch-1',
    chapterTitle: 'Electric Charges and Fields',
    subtopicId: 'phy-sub-1-11',
    title: 'Gauss’s Law: Field Due to Infinitely Long Wire & Infinite Plane Sheet',
    syllabusStatus: 'Core CBSE 2026',
    importance: '5 Marks Guaranteed Derivation',
    diagramId: 'gauss-applications',
    subMode: 'wire',
    setup: 'Construct coaxial cylindrical Gaussian surfaces tailored to cylindrical symmetry (uniformly charged wire, linear density $\\lambda$) and planar symmetry (infinite sheet, surface density $\\sigma$).',
    steps: [
      { text: '(A) Infinite Straight Wire: Take coaxial cylinder of radius $r$, length $l$. Flat end caps have $\\vec{E}\\perp d\\vec{A}$ ($\\Phi_{\\text{caps}} = 0$). Curved surface gives $\\Phi = E(2\\pi r l)$ with $q_{\\text{in}} = \\lambda l$:', equation: 'E(2\\pi r l) = \\frac{\\lambda l}{\\varepsilon_0} \\implies E = \\frac{\\lambda}{2\\pi\\varepsilon_0 r}' },
      { text: '(B) Infinite Plane Sheet: Construct Gaussian pillbox of cross-section $A$ piercing sheet normally. Curved side has $\\vec{E}\\perp d\\vec{A}$ ($\\Phi_{\\text{curved}}=0$); two flat ends contribute $2EA$ with $q_{\\text{in}} = \\sigma A$:', equation: '2EA = \\frac{\\sigma A}{\\varepsilon_0} \\implies E = \\frac{\\sigma}{2\\varepsilon_0}' }
    ],
    finalFormula: 'E_{\\text{wire}} = \\frac{\\lambda}{2\\pi\\varepsilon_0 r}, \\qquad E_{\\text{sheet}} = \\frac{\\sigma}{2\\varepsilon_0}',
    specialCases: ['For an infinite plane sheet, $E$ is strictly independent of distance $r$.', 'For two oppositely charged parallel sheets $+\\sigma, -\\sigma$: $E = \\sigma/\\varepsilon_0$ inside and $0$ outside.']
  },
  {
    id: 'drv-1-6',
    slideRange: 'Slide 6',
    chapterNum: 1,
    chapterId: 'phy-ch-1',
    chapterTitle: 'Electric Charges and Fields',
    subtopicId: 'phy-sub-1-11',
    title: 'Gauss’s Law: Electric Field Due to a Thin Uniformly Charged Spherical Shell',
    syllabusStatus: 'Core CBSE 2026',
    importance: '5 Marks Guaranteed Derivation',
    diagramId: 'gauss-applications',
    subMode: 'shell',
    setup: 'Consider a thin spherical shell of radius $R$ carrying total surface charge $q = 4\\pi R^2\\sigma$. Choose concentric spherical Gaussian surfaces of radius $r > R$, $r = R$, and $r < R$.',
    steps: [
      { text: 'Case (i) Outside ($r > R$): Gaussian sphere encloses full charge $q$:', equation: 'E(4\\pi r^2) = \\frac{q}{\\varepsilon_0} \\implies E = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{r^2} = \\frac{\\sigma R^2}{\\varepsilon_0 r^2}' },
      { text: 'Case (ii) On Surface ($r = R$): Putting $r = R$ gives maximum field:', equation: 'E_{\\text{surface}} = \\frac{q}{4\\pi\\varepsilon_0 R^2} = \\frac{\\sigma}{\\varepsilon_0}' },
      { text: 'Case (iii) Inside ($r < R$): All charge resides on the outer surface, so $q_{\\text{enclosed}} = 0$:', equation: 'E_{\\text{inside}}(4\\pi r^2) = 0 \\implies E_{\\text{inside}} = 0' }
    ],
    finalFormula: 'E_{\\text{out}} = \\frac{kq}{r^2}, \\quad E_{\\text{surf}} = \\frac{\\sigma}{\\varepsilon_0}, \\quad E_{\\text{in}} = 0',
    specialCases: ['Electrostatic shielding: field inside any closed hollow conductor is zero.', '$E$ jumps discontinuously at $r = R$ from $0$ to $\\sigma/\\varepsilon_0$, then decays as $1/r^2$.']
  },

  // =========================================================================
  // CHAPTER 2: ELECTROSTATIC POTENTIAL AND CAPACITANCE (Slides 7–14)
  // =========================================================================
  {
    id: 'drv-2-1',
    slideRange: 'Slide 7',
    chapterNum: 2,
    chapterId: 'phy-ch-2',
    chapterTitle: 'Electrostatic Potential and Capacitance',
    subtopicId: 'phy-sub-2-2',
    title: 'Electric Potential Due to a Point Charge',
    syllabusStatus: 'Core CBSE 2026',
    importance: '3 Marks Standard Derivation',
    diagramId: 'equipotential-surfaces',
    setup: 'Bring a unit positive test charge from $\\infty$ to distance $r$ from source charge $+q$ slowly against electrostatic repulsion without acceleration.',
    steps: [
      { text: 'At intermediate distance $x$ from $+q$, force on unit positive charge is $F = \\frac{q}{4\\pi\\varepsilon_0 x^2}$ outward. Small work $dW$ for inward displacement $dx$ ($\\theta = 180^\\circ$, $dx < 0$):', equation: 'dW = -\\vec{E}\\cdot d\\vec{r} = -\\frac{q}{4\\pi\\varepsilon_0 x^2}\\,dx' },
      { text: 'Integrate $dW$ from $x = \\infty$ to $x = r$:', equation: 'V(r) = \\int_{\\infty}^{r} -\\frac{q}{4\\pi\\varepsilon_0 x^2}\\,dx = \\frac{q}{4\\pi\\varepsilon_0}\\left[\\frac{1}{x}\\right]_{\\infty}^{r} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{r}' }
    ],
    finalFormula: 'V = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{r} \\qquad (V \\propto 1/r)',
    specialCases: ['Electric potential is a scalar; net potential due to $N$ charges is $V = \\sum kq_i/r_i$.', '$V$ drops as $1/r$ while $E$ drops faster as $1/r^2$.']
  },
  {
    id: 'drv-2-2',
    slideRange: 'Slide 8',
    chapterNum: 2,
    chapterId: 'phy-ch-2',
    chapterTitle: 'Electrostatic Potential and Capacitance',
    subtopicId: 'phy-sub-2-2',
    title: 'Electric Potential Due to a Dipole at Any General Point (r, θ)',
    syllabusStatus: 'Core CBSE 2026',
    importance: '3 Marks High Yield',
    diagramId: 'dipole-fields',
    setup: 'Consider dipole $-q$ and $+q$ (separation $2a$, centre $O$) and general point $P(r,\\theta)$ at distances $r_1$ from $+q$ and $r_2$ from $-q$ ($r \\gg a$).',
    steps: [
      { text: 'By scalar superposition of potentials:', equation: 'V = \\frac{q}{4\\pi\\varepsilon_0}\\left(\\frac{1}{r_1} - \\frac{1}{r_2}\\right) = \\frac{q}{4\\pi\\varepsilon_0}\\frac{r_2 - r_1}{r_1 r_2}' },
      { text: 'By geometry for $r \\gg a$, $r_1 \\approx r - a\\cos\\theta$, $r_2 \\approx r + a\\cos\\theta$, so $r_2 - r_1 \\approx 2a\\cos\\theta$ and $r_1 r_2 \\approx r^2$:', equation: 'V = \\frac{q(2a\\cos\\theta)}{4\\pi\\varepsilon_0 r^2} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{p\\cos\\theta}{r^2} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{\\vec{p}\\cdot\\hat{r}}{r^2}' }
    ],
    finalFormula: 'V(r,\\theta) = \\frac{1}{4\\pi\\varepsilon_0}\\frac{p\\cos\\theta}{r^2}',
    specialCases: ['Axial point ($\\theta = 0^\\circ$ or $180^\\circ$): $V = \\pm\\frac{kp}{r^2}$.', 'Equatorial plane ($\\theta = 90^\\circ$): $V = 0$ everywhere, though $E \\ne 0$!']
  },
  {
    id: 'drv-2-3',
    slideRange: 'Slide 9',
    chapterNum: 2,
    chapterId: 'phy-ch-2',
    chapterTitle: 'Electrostatic Potential and Capacitance',
    subtopicId: 'phy-sub-2-3',
    title: 'Relation Between Electric Field and Potential Gradient',
    syllabusStatus: 'Core CBSE 2026',
    importance: '2 Marks Guaranteed Proof',
    diagramId: 'equipotential-surfaces',
    subMode: 'two-surfaces',
    setup: 'Consider two closely spaced equipotential surfaces $A$ and $B$ at potentials $V$ and $V + dV$ separated by normal distance $dr$.',
    steps: [
      { text: 'Work done by external agent in moving unit positive charge from surface $A$ ($V$) to $B$ ($V + dV$) is:', equation: 'dW = (V + dV) - V = dV' },
      { text: 'Work done against electric field force ($-\\vec{E}$ per unit charge) across displacement $dr$ is:', equation: 'dW = -E\\,dr' },
      { text: 'Equating the two expressions for $dW$:', equation: 'dV = -E\\,dr \\implies E = -\\frac{dV}{dr}' }
    ],
    finalFormula: 'E = -\\frac{dV}{dr}',
    specialCases: ['Negative sign shows $\\vec{E}$ always points in the direction of steepest decrease of potential $V$.', 'Equipotential spacing $dr \\propto 1/E$: closer equipotentials indicate stronger electric field.']
  },
  {
    id: 'drv-2-4',
    slideRange: 'Slide 10',
    chapterNum: 2,
    chapterId: 'phy-ch-2',
    chapterTitle: 'Electrostatic Potential and Capacitance',
    subtopicId: 'phy-sub-2-4',
    title: 'Potential Energy of Two Point Charges (Without & With External Field)',
    syllabusStatus: 'Core CBSE 2026',
    importance: '3 Marks Standard Derivation',
    diagramId: 'point-charge-field',
    setup: 'Bring charges $q_1$ and $q_2$ sequentially from $\\infty$ to position vectors $\\vec{r}_1$ and $\\vec{r}_2$ separated by $r_{12} = |\\vec{r}_1 - \\vec{r}_2|$.',
    steps: [
      { text: '(A) Free Space ($\\vec{E}_{\\text{ext}} = 0$): Work to bring $q_1$ to $\\vec{r}_1$ is $W_1 = 0$. Work to bring $q_2$ against field of $q_1$ is $W_2 = q_2 V_1(\\vec{r}_2)$:', equation: 'U = W_1 + W_2 = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q_1 q_2}{r_{12}}' },
      { text: '(B) External Field $V(\\vec{r})$: Work to place $q_1$ is $q_1 V(\\vec{r}_1)$; work on $q_2$ against external field plus field of $q_1$ is:', equation: 'U = q_1 V(\\vec{r}_1) + q_2 V(\\vec{r}_2) + \\frac{1}{4\\pi\\varepsilon_0}\\frac{q_1 q_2}{r_{12}}' }
    ],
    finalFormula: 'U = q_1 V(\\vec{r}_1) + q_2 V(\\vec{r}_2) + \\frac{1}{4\\pi\\varepsilon_0}\\frac{q_1 q_2}{r_{12}}',
    specialCases: ['Like charges ($q_1 q_2 > 0$) have $U > 0$ (work done in assembling).', 'Unlike charges ($q_1 q_2 < 0$) form a bound system with $U < 0$.']
  },
  {
    id: 'drv-2-5',
    slideRange: 'Slide 11',
    chapterNum: 2,
    chapterId: 'phy-ch-2',
    chapterTitle: 'Electrostatic Potential and Capacitance',
    subtopicId: 'phy-sub-2-7',
    title: 'Parallel Plate Capacitor: Air, Dielectric Slab & Conducting Slab',
    syllabusStatus: 'Core CBSE 2026',
    importance: '5 Marks Board Staple',
    diagramId: 'capacitor-circuits',
    setup: 'Two parallel plates of area $A$, charge densities $\\pm\\sigma = \\pm Q/A$, separated by distance $d$. Insert a dielectric ($K$) or conducting slab of thickness $t < d$.',
    steps: [
      { text: '(i) Vacuum/Air: Uniform field $E_0 = \\sigma/\\varepsilon_0 = Q/(\\varepsilon_0 A)$. Potential $V_0 = E_0 d = \\frac{Qd}{\\varepsilon_0 A}$:', equation: 'C_0 = \\frac{Q}{V_0} = \\frac{\\varepsilon_0 A}{d}' },
      { text: '(ii) Dielectric Slab of thickness $t$ ($E = E_0/K$ inside slab, $E_0$ in air gap $d-t$):', equation: 'V = E_0(d - t) + \\frac{E_0}{K}t = \\frac{Q}{\\varepsilon_0 A}\\left[d - t\\left(1 - \\frac{1}{K}\\right)\\right] \\implies C = \\frac{\\varepsilon_0 A}{d - t\\left(1 - \\frac{1}{K}\\right)}' },
      { text: '(iii) Conducting Slab of thickness $t$ ($K \\to \\infty$, interior field $E_{\\text{cond}} = 0$):', equation: 'V = E_0(d - t) \\implies C = \\frac{\\varepsilon_0 A}{d - t}' }
    ],
    finalFormula: 'C_{\\text{diel}} = \\frac{\\varepsilon_0 A}{d - t(1 - 1/K)}, \\qquad C_{\\text{cond}} = \\frac{\\varepsilon_0 A}{d - t}',
    specialCases: ['If dielectric fills the entire gap ($t = d$), $C = K\\frac{\\varepsilon_0 A}{d} = KC_0$.']
  },
  {
    id: 'drv-2-6',
    slideRange: 'Slide 12',
    chapterNum: 2,
    chapterId: 'phy-ch-2',
    chapterTitle: 'Electrostatic Potential and Capacitance',
    subtopicId: 'phy-sub-2-7',
    title: 'Capacitors in Series & Parallel Combinations',
    syllabusStatus: 'Core CBSE 2026',
    importance: '2 Marks Numerical Foundation',
    diagramId: 'capacitor-circuits',
    setup: 'Connect capacitors $C_1, C_2, C_3$ either end-to-end (series: same charge $Q$) or across the same common terminals (parallel: same voltage $V$).',
    steps: [
      { text: 'Series Combination (Same $Q$, potential splits $V = V_1 + V_2 + V_3$):', equation: '\\frac{Q}{C_s} = \\frac{Q}{C_1} + \\frac{Q}{C_2} + \\frac{Q}{C_3} \\implies \\frac{1}{C_s} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\frac{1}{C_3}' },
      { text: 'Parallel Combination (Same $V$, charge splits $Q = Q_1 + Q_2 + Q_3$):', equation: 'C_p V = C_1 V + C_2 V + C_3 V \\implies C_p = C_1 + C_2 + C_3' }
    ],
    finalFormula: '\\frac{1}{C_s} = \\sum \\frac{1}{C_i}, \\qquad C_p = \\sum C_i',
    specialCases: ['Remember capacitor rules are opposite to resistor rules ($R_s = \\sum R_i$).']
  },
  {
    id: 'drv-2-7',
    slideRange: 'Slide 13',
    chapterNum: 2,
    chapterId: 'phy-ch-2',
    chapterTitle: 'Electrostatic Potential and Capacitance',
    subtopicId: 'phy-sub-2-8',
    title: 'Energy Stored in a Capacitor & Electrostatic Energy Density',
    syllabusStatus: 'Core CBSE 2026',
    importance: '3 Marks Guaranteed Derivation',
    diagramId: 'energy-storage',
    setup: 'Compute external work required to build charge $Q$ on a capacitor $C$ bit-by-bit in infinitesimal increments $dq\'$.',
    steps: [
      { text: 'At intermediate charge $q\'$, plate voltage is $V\' = q\'/C$. Small work $dW = V\'\\,dq\' = \\frac{q\'}{C}\\,dq\'$:', equation: 'U = W = \\int_0^Q \\frac{q\'}{C}\\,dq\' = \\frac{Q^2}{2C} = \\frac{1}{2}CV^2 = \\frac{1}{2}QV' },
      { text: 'Energy density $u_e$ (energy per unit volume $Ad$ between parallel plates) using $C = \\frac{\\varepsilon_0 A}{d}$ and $V = Ed$:', equation: 'u_e = \\frac{U}{Ad} = \\frac{\\frac{1}{2}(\\varepsilon_0 A/d)(E^2 d^2)}{Ad} = \\frac{1}{2}\\varepsilon_0 E^2' }
    ],
    finalFormula: 'U = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C}, \\qquad u_e = \\frac{1}{2}\\varepsilon_0 E^2',
    specialCases: ['In a dielectric medium of constant $K$, $u_e = \\frac{1}{2}K\\varepsilon_0 E^2$.', 'Battery disconnected vs connected comparison: $U$ drops by $1/K$ if disconnected, increases $K$ times if connected.']
  },
  {
    id: 'drv-2-8',
    slideRange: 'Slide 14',
    chapterNum: 2,
    chapterId: 'phy-ch-2',
    chapterTitle: 'Electrostatic Potential and Capacitance',
    subtopicId: 'phy-sub-2-8',
    title: 'Common Potential & Energy Loss on Sharing Charges',
    syllabusStatus: 'Core CBSE 2026',
    importance: '3 Marks High-Yield Numerical',
    diagramId: 'capacitor-circuits',
    setup: 'Two isolated capacitors $(C_1, V_1)$ and $(C_2, V_2)$ are connected in parallel via a conducting wire until charges redistribute to a common potential $V_c$.',
    steps: [
      { text: 'By conservation of total charge ($Q_{\\text{initial}} = Q_{\\text{final}}$):', equation: 'C_1 V_1 + C_2 V_2 = (C_1 + C_2)V_c \\implies V_c = \\frac{C_1 V_1 + C_2 V_2}{C_1 + C_2}' },
      { text: 'Compare initial stored energy $U_i = \\frac{1}{2}C_1 V_1^2 + \\frac{1}{2}C_2 V_2^2$ and final stored energy $U_f = \\frac{1}{2}(C_1 + C_2)V_c^2$:', equation: '\\Delta U = U_i - U_f = \\frac{1}{2}C_1 V_1^2 + \\frac{1}{2}C_2 V_2^2 - \\frac{(C_1 V_1 + C_2 V_2)^2}{2(C_1 + C_2)}' },
      { text: 'Simplify the numerator algebraically:', equation: '\\Delta U = \\frac{C_1 C_2}{2(C_1 + C_2)}(V_1 - V_2)^2 > 0' }
    ],
    finalFormula: 'V_c = \\frac{C_1 V_1 + C_2 V_2}{C_1 + C_2}, \\qquad \\Delta U_{\\text{lost}} = \\frac{C_1 C_2}{2(C_1 + C_2)}(V_1 - V_2)^2',
    specialCases: ['Whenever $V_1 \\ne V_2$, energy $\\Delta U > 0$ is dissipated as heat/sparking during charge flow.', 'Only if $V_1 = V_2$ is $\\Delta U = 0$ (no charge transfer occurs).']
  },

  // =========================================================================
  // CHAPTER 3: CURRENT ELECTRICITY (Slides 15–19)
  // =========================================================================
  {
    id: 'drv-3-1',
    slideRange: 'Slide 15',
    chapterNum: 3,
    chapterId: 'phy-ch-3',
    chapterTitle: 'Current Electricity',
    subtopicId: 'phy-sub-3-5',
    title: 'Drift Velocity, I = nAev_d, Vector Ohm’s Law & Microscopic Resistivity',
    syllabusStatus: 'Core CBSE 2026',
    importance: '5 Marks Board Staple',
    diagramId: 'cell-circuit',
    setup: 'Apply electric field $\\vec{E} = -V/l$ across a conductor of length $l$, cross-sectional area $A$, free-electron number density $n$, and average relaxation time $\\tau$.',
    steps: [
      { text: 'Each electron experiences acceleration $\\vec{a} = -e\\vec{E}/m$. Averaging velocities $\\vec{v}_i = \\vec{u}_i + \\vec{a}\\tau_i$ over all electrons ($\\langle\\vec{u}_i\\rangle = 0$):', equation: '\\vec{v}_d = -\\frac{e\\vec{E}}{m}\\tau, \\qquad \\mu = \\frac{|v_d|}{E} = \\frac{e\\tau}{m}' },
      { text: 'In time $\\Delta t$, charge crossing cross-section $A$ lies in cylinder of volume $A v_d \\Delta t$ containing $n A v_d \\Delta t$ electrons:', equation: 'I = \\frac{\\Delta Q}{\\Delta t} = n A e v_d' },
      { text: 'Substitute $v_d = \\frac{eE\\tau}{m} = \\frac{eV\\tau}{ml}$ to deduce Ohm’s Law & Resistivity:', equation: 'I = \\frac{n e^2 \\tau A}{m l} V \\implies R = \\frac{V}{I} = \\frac{m}{n e^2 \\tau}\\frac{l}{A} \\implies \\rho = \\frac{m}{n e^2 \\tau}, \\; \\sigma = \\frac{n e^2 \\tau}{m}' },
      { text: 'In vector form using current density $J = I/A = nev_d$:', equation: '\\vec{J} = \\sigma \\vec{E}' }
    ],
    finalFormula: 'v_d = \\frac{eE\\tau}{m}, \\quad I = nAev_d, \\quad \\rho = \\frac{m}{n e^2 \\tau}, \\quad \\vec{J} = \\sigma\\vec{E}',
    specialCases: ['Metals: rising $T$ lowers $\\tau$ so $\\rho$ increases ($\\alpha > 0$).', 'Semiconductors: rising $T$ increases $n$ exponentially, dominating $\\tau\\downarrow$, so $\\rho$ decreases ($\\alpha < 0$).']
  },
  {
    id: 'drv-3-2',
    slideRange: 'Slide 16',
    chapterNum: 3,
    chapterId: 'phy-ch-3',
    chapterTitle: 'Current Electricity',
    subtopicId: 'phy-sub-3-8',
    title: 'Terminal Potential Difference, EMF & Internal Resistance of a Cell',
    syllabusStatus: 'Core CBSE 2026',
    importance: '3 Marks Standard Derivation',
    diagramId: 'cell-circuit',
    setup: 'Connect a cell of EMF $\\mathcal{E}$ and internal resistance $r$ across external load resistance $R$. Total circuit resistance is $(R + r)$.',
    steps: [
      { text: 'Current drawn from the cell during discharging is:', equation: 'I = \\frac{\\mathcal{E}}{R + r} \\implies \\mathcal{E} = I R + I r = V + I r' },
      { text: 'Terminal potential difference across load $R$:', equation: 'V = \\mathcal{E} - I r \\quad (\\text{discharging}), \\qquad V = \\mathcal{E} + I r \\quad (\\text{charging})' },
      { text: 'Using $I = V/R$, express internal resistance $r$:', equation: 'r = \\left(\\frac{\\mathcal{E} - V}{V}\\right)R' }
    ],
    finalFormula: 'V = \\mathcal{E} - Ir, \\qquad r = R\\left(\\frac{\\mathcal{E}}{V} - 1\\right)',
    specialCases: ['$V$ vs $I$ graph is a straight line with y-intercept $\\mathcal{E}$ and negative slope $-r$.', 'Maximum power transfer to load $R$ occurs when $R = r$.']
  },
  {
    id: 'drv-3-3',
    slideRange: 'Slide 17',
    chapterNum: 3,
    chapterId: 'phy-ch-3',
    chapterTitle: 'Current Electricity',
    subtopicId: 'phy-sub-3-8',
    title: 'Cells in Series and Parallel Combinations',
    syllabusStatus: 'Core CBSE 2026',
    importance: '3 Marks Guaranteed Proof',
    diagramId: 'cell-circuit',
    setup: 'Combine two non-ideal cells $(\\mathcal{E}_1, r_1)$ and $(\\mathcal{E}_2, r_2)$ in series or parallel and match with a single equivalent cell $(\\mathcal{E}_{\\text{eq}}, r_{\\text{eq}})$.',
    steps: [
      { text: 'Series Combination (terminal voltages add $V = V_1 + V_2$):', equation: 'V = (\\mathcal{E}_1 - I r_1) + (\\mathcal{E}_2 - I r_2) = (\\mathcal{E}_1 + \\mathcal{E}_2) - I(r_1 + r_2) \\implies \\mathcal{E}_{\\text{eq}} = \\mathcal{E}_1 + \\mathcal{E}_2, \\; r_{\\text{eq}} = r_1 + r_2' },
      { text: 'Parallel Combination (currents add $I = I_1 + I_2$ at common terminal voltage $V$):', equation: 'I = \\frac{\\mathcal{E}_1 - V}{r_1} + \\frac{\\mathcal{E}_2 - V}{r_2} = \\left(\\frac{\\mathcal{E}_1}{r_1} + \\frac{\\mathcal{E}_2}{r_2}\\right) - V\\left(\\frac{1}{r_1} + \\frac{1}{r_2}\\right)' },
      { text: 'Rearranging to $V = \\mathcal{E}_{\\text{eq}} - I r_{\\text{eq}}$:', equation: '\\mathcal{E}_{\\text{eq}} = \\frac{\\mathcal{E}_1 r_2 + \\mathcal{E}_2 r_1}{r_1 + r_2}, \\qquad r_{\\text{eq}} = \\frac{r_1 r_2}{r_1 + r_2}' }
    ],
    finalFormula: '\\frac{\\mathcal{E}_{\\text{eq}}}{r_{\\text{eq}}} = \\frac{\\mathcal{E}_1}{r_1} + \\frac{\\mathcal{E}_2}{r_2}, \\qquad \\frac{1}{r_{\\text{eq}}} = \\frac{1}{r_1} + \\frac{1}{r_2}',
    specialCases: ['If a cell opposes polarity in series, replace $+\\mathcal{E}_2$ by $-\\mathcal{E}_2$, while $r_{\\text{eq}} = r_1 + r_2$ ALWAYS adds!']
  },
  {
    id: 'drv-3-4',
    slideRange: 'Slide 18',
    chapterNum: 3,
    chapterId: 'phy-ch-3',
    chapterTitle: 'Current Electricity',
    subtopicId: 'phy-sub-3-9',
    title: 'Wheatstone Bridge Balanced Condition via Kirchhoff’s Rules',
    syllabusStatus: 'Core CBSE 2026',
    importance: '3 Marks Guaranteed Proof',
    diagramId: 'wheatstone-bridge',
    setup: 'Four resistors $R_1, R_2, R_3, R_4$ form closed quadrilateral $ABCD$ with battery across $AC$ and galvanometer across $BD$. Adjust until null deflection ($I_g = 0$).',
    steps: [
      { text: 'Apply Kirchhoff’s Junction Rule at nodes $B$ and $D$ when $I_g = 0$:', equation: 'I_1 = I_3 \\quad \\text{and} \\quad I_2 = I_4' },
      { text: 'Apply Kirchhoff’s Loop Rule to closed loop $ABDA$ and loop $BCDB$ with $I_g = 0$:', equation: '-I_1 R_1 + I_2 R_2 = 0 \\implies I_1 R_1 = I_2 R_2' },
      { text: 'For loop $BCDB$:', equation: '-I_3 R_3 + I_4 R_4 = 0 \\implies I_1 R_3 = I_2 R_4' },
      { text: 'Divide the two loop equations:', equation: '\\frac{R_1}{R_3} = \\frac{R_2}{R_4} \\quad \\text{or} \\quad \\frac{R_1}{R_2} = \\frac{R_3}{R_4}' }
    ],
    finalFormula: '\\frac{R_1}{R_2} = \\frac{R_3}{R_4} \\qquad (\\text{at } I_g = 0)',
    specialCases: ['Exchanging battery and galvanometer does NOT alter the balance condition.']
  },
  {
    id: 'drv-3-5',
    slideRange: 'Slide 19',
    chapterNum: 3,
    chapterId: 'phy-ch-3',
    chapterTitle: 'Current Electricity',
    subtopicId: 'phy-sub-3-9',
    title: 'Metre Bridge (Slide Wire Bridge) Principle & Formula',
    syllabusStatus: 'Deleted in Rationalized CBSE (Lab/Competitive Ref)',
    importance: 'Lab / JEE Reference',
    diagramId: 'wheatstone-bridge',
    setup: 'A $100\\text{ cm}$ uniform constantan/manganin wire acts as two adjacent arms ($R_{\\text{wire}} \\propto l$) of a Wheatstone bridge alongside known $R$ and unknown $S$.',
    steps: [
      { text: 'Find null point on jockey at length $l$ cm from left end, leaving $(100 - l)$ cm on right end.', equation: '\\frac{R}{S} = \\frac{r_{\\text{cm}} \\cdot l}{r_{\\text{cm}} \\cdot (100 - l)} = \\frac{l}{100 - l}' },
      { text: 'Solve for unknown resistance $S$:', equation: 'S = R\\left(\\frac{100 - l}{l}\\right)' }
    ],
    finalFormula: 'S = R\\left(\\frac{100 - l}{l}\\right)',
    specialCases: ['Constantan/manganin alloys are used for their high resistivity and near-zero temperature coefficient $\\alpha$.']
  },

  // =========================================================================
  // CHAPTER 4: MOVING CHARGES AND MAGNETISM (Slides 20–28)
  // =========================================================================
  {
    id: 'drv-4-1',
    slideRange: 'Slide 20',
    chapterNum: 4,
    chapterId: 'phy-ch-4',
    chapterTitle: 'Moving Charges and Magnetism',
    subtopicId: 'phy-sub-4-2',
    title: 'Magnetic Field at the Centre of a Circular Current-Carrying Loop',
    syllabusStatus: 'Core CBSE 2026',
    importance: '2 Marks Biot-Savart Proof',
    diagramId: 'galvanometer-torque',
    setup: 'Apply Biot-Savart Law $d\\vec{B} = \\frac{\\mu_0}{4\\pi}\\frac{I(d\\vec{l}\\times\\hat{r})}{r^2}$ at the centre $O$ of a circular coil of radius $R$ ($N$ turns, current $I$).',
    steps: [
      { text: 'Every current element $d\\vec{l}$ along the circumference is perpendicular to radius vector $\\vec{R}$ ($\\theta = 90^\\circ$, $\\sin 90^\\circ = 1$):', equation: 'dB = \\frac{\\mu_0}{4\\pi}\\frac{I\\,dl\\sin 90^\\circ}{R^2} = \\frac{\\mu_0 I\\,dl}{4\\pi R^2}' },
      { text: 'All $d\\vec{B}$ vectors point along the same axial direction (Right-Hand Thumb Rule), so scalar integration around the full circle ($\\oint dl = 2\\pi R$) gives:', equation: 'B = \\frac{\\mu_0 I}{4\\pi R^2}(2\\pi R) = \\frac{\\mu_0 I}{2R} \\implies \\text{For } N \\text{ turns: } B = \\frac{\\mu_0 N I}{2R}' }
    ],
    finalFormula: 'B_{\\text{centre}} = \\frac{\\mu_0 N I}{2R}',
    specialCases: ['For an arc subtending angle $\\alpha$ (rad) at the centre: $B = \\frac{\\mu_0 I \\alpha}{4\\pi R}$.']
  },
  {
    id: 'drv-4-2',
    slideRange: 'Slide 21',
    chapterNum: 4,
    chapterId: 'phy-ch-4',
    chapterTitle: 'Moving Charges and Magnetism',
    subtopicId: 'phy-sub-4-2',
    title: 'Magnetic Field on the Axis of a Circular Current-Carrying Loop',
    syllabusStatus: 'Core CBSE 2026',
    importance: '5 Marks Guaranteed Derivation',
    diagramId: 'galvanometer-torque',
    setup: 'Circular loop of radius $R$ in the $y-z$ plane carries current $I$. Point $P$ lies on the $x$-axis at distance $x$ from centre $O$, at slant distance $r = \\sqrt{R^2 + x^2}$ from element $d\\vec{l}$.',
    steps: [
      { text: 'Since $d\\vec{l}$ is tangential and $\\vec{r}$ lies in a perpendicular radial-axial plane, $d\\vec{l} \\perp \\vec{r}$ ($\\sin 90^\\circ = 1$):', equation: 'dB = \\frac{\\mu_0 I\\,dl}{4\\pi r^2} = \\frac{\\mu_0 I\\,dl}{4\\pi(R^2 + x^2)}' },
      { text: 'Resolve $d\\vec{B}$ into axial component $dB_x = dB\\cos\\phi$ and radial component $dB_{\\perp} = dB\\sin\\phi$. Symmetrically opposite elements cancel $dB_{\\perp}$ ($\\sum dB_{\\perp} = 0$).' },
      { text: 'Using geometry $\\cos\\phi = \\frac{R}{\\sqrt{R^2+x^2}}$ and integrating over the circumference ($\\oint dl = 2\\pi R$):', equation: 'B_x = \\oint dB\\cos\\phi = \\frac{\\mu_0 I}{4\\pi(R^2+x^2)}\\frac{R}{(R^2+x^2)^{1/2}}(2\\pi R) = \\frac{\\mu_0 I R^2}{2(R^2 + x^2)^{3/2}}' }
    ],
    finalFormula: 'B_{\\text{axis}} = \\frac{\\mu_0 N I R^2}{2(R^2 + x^2)^{3/2}}',
    specialCases: ['At centre ($x = 0$): recovers $B = \\frac{\\mu_0 I}{2R}$.', 'Far-field ($x \\gg R$): $B \\approx \\frac{\\mu_0}{4\\pi}\\frac{2m}{x^3}$ where $m = IA$ is magnetic dipole moment!']
  },
  {
    id: 'drv-4-3',
    slideRange: 'Slide 22',
    chapterNum: 4,
    chapterId: 'phy-ch-4',
    chapterTitle: 'Moving Charges and Magnetism',
    subtopicId: 'phy-sub-4-3',
    title: 'Ampere’s Circuital Law: Thin Wire & Thick Cylindrical Conductor',
    syllabusStatus: 'Core CBSE 2026',
    importance: '3 Marks High Yield + Graph',
    diagramId: 'parallel-wires',
    subMode: 'attractive',
    setup: 'State Ampere’s Circuital Law $\\oint \\vec{B}\\cdot d\\vec{l} = \\mu_0 I_{\\text{enc}}$ and apply it to a long cylindrical wire of radius $a$ carrying uniform current $I$ both outside ($r > a$) and inside ($r < a$).',
    steps: [
      { text: 'Outside the wire ($r > a$): Circular Amperian loop of radius $r$ encloses full current $I$:', equation: 'B(2\\pi r) = \\mu_0 I \\implies B_{\\text{out}} = \\frac{\\mu_0 I}{2\\pi r} \\quad (B \\propto 1/r)' },
      { text: 'On the surface ($r = a$): Maximum magnetic field occurs at $r = a$:', equation: 'B_{\\max} = \\frac{\\mu_0 I}{2\\pi a}' },
      { text: 'Inside the solid wire ($r < a$): Uniform current density $J = \\frac{I}{\\pi a^2}$, so enclosed current inside radius $r$ is $I_{\\text{enc}} = J(\\pi r^2) = I\\frac{r^2}{a^2}$:', equation: 'B_{\\text{in}}(2\\pi r) = \\mu_0 I \\frac{r^2}{a^2} \\implies B_{\\text{in}} = \\frac{\\mu_0 I r}{2\\pi a^2} \\quad (B \\propto r)' }
    ],
    finalFormula: 'B_{\\text{in}} = \\frac{\\mu_0 I r}{2\\pi a^2} \\; (r<a), \\qquad B_{\\text{out}} = \\frac{\\mu_0 I}{2\\pi r} \\; (r>a)',
    specialCases: ['$B$ increases linearly from $0$ at axis to max at $r=a$, then falls hyperbolically as $1/r$ outside.']
  },
  {
    id: 'drv-4-4',
    slideRange: 'Slide 23',
    chapterNum: 4,
    chapterId: 'phy-ch-4',
    chapterTitle: 'Moving Charges and Magnetism',
    subtopicId: 'phy-sub-4-4',
    title: 'Magnetic Field Inside a Long Straight Solenoid',
    syllabusStatus: 'Core CBSE 2026',
    importance: '3 Marks Guaranteed Proof',
    diagramId: 'faraday-lenz',
    setup: 'Take a long closely wound solenoid with $n = N/L$ turns per unit length carrying current $I$. Construct rectangular Amperian loop $abcd$ of length $l$ along axis.',
    steps: [
      { text: 'Decompose line integral around loop $abcd$: $ab$ is inside parallel to $\\vec{B}$, $cd$ is far outside ($B \\approx 0$), and sides $bc, da$ are perpendicular to $\\vec{B}$ ($\\cos 90^\\circ = 0$):', equation: '\\oint \\vec{B}\\cdot d\\vec{l} = \\int_a^b B\\,dl + 0 + 0 + 0 = B l' },
      { text: 'Loop $abcd$ encloses $n l$ turns, each carrying current $I$, so $I_{\\text{enc}} = n l I$. By Ampere’s law:', equation: 'B l = \\mu_0 (n l I) \\implies B = \\mu_0 n I' }
    ],
    finalFormula: 'B_{\\text{inside}} = \\mu_0 n I, \\qquad B_{\\text{ends}} = \\frac{1}{2}\\mu_0 n I',
    specialCases: ['With an iron/ferromagnetic core of relative permeability $\\mu_r$: $B = \\mu_0 \\mu_r n I$.']
  },
  {
    id: 'drv-4-5',
    slideRange: 'Slide 24',
    chapterNum: 4,
    chapterId: 'phy-ch-4',
    chapterTitle: 'Moving Charges and Magnetism',
    subtopicId: 'phy-sub-4-4',
    title: 'Magnetic Field Inside a Toroid',
    syllabusStatus: 'Deleted in Rationalized CBSE (Competitive Ref)',
    importance: 'Competitive Reference',
    diagramId: 'faraday-lenz',
    setup: 'An endless circular solenoid of mean radius $r$ with $N$ total turns ($n = N / 2\\pi r$). Apply Ampere’s law to three circular loops: $r_1 < R_{\\text{in}}$, $r$ inside core, and $r_3 > R_{\\text{out}}$.',
    steps: [
      { text: 'Inside core ($r$): Loop encloses $N$ currents $I$ piercing in the same sense:', equation: 'B(2\\pi r) = \\mu_0 N I \\implies B = \\frac{\\mu_0 N I}{2\\pi r} = \\mu_0 n I' },
      { text: 'Inner open space ($I_{\\text{enc}}=0$) and exterior ($N$ currents in, $N$ out $\\implies I_{\\text{net}}=0$):', equation: 'B_{\\text{inner space}} = 0, \\qquad B_{\\text{outside}} = 0' }
    ],
    finalFormula: 'B_{\\text{core}} = \\mu_0 n I',
    specialCases: ['Magnetic field inside a toroid is strictly confined within the core and zero everywhere else.']
  },
  {
    id: 'drv-4-6',
    slideRange: 'Slide 25',
    chapterNum: 4,
    chapterId: 'phy-ch-4',
    chapterTitle: 'Moving Charges and Magnetism',
    subtopicId: 'phy-sub-4-7',
    title: 'Force on a Current-Carrying Conductor in a Uniform Magnetic Field',
    syllabusStatus: 'Core CBSE 2026',
    importance: '3 Marks Standard Derivation',
    diagramId: 'force-conductor',
    setup: 'Straight conductor of length $l$, cross-sectional area $A$, free-electron density $n$, carrying current $I$ (drift speed $v_d$) at angle $\\theta$ to uniform $\\vec{B}$.',
    steps: [
      { text: 'Lorentz magnetic force on one drifting electron ($q = -e$): $\\vec{f} = -e(\\vec{v}_d \\times \\vec{B})$.' },
      { text: 'Total mobile electrons in volume $Al$ is $N = nAl$. Summing force over all $N$ electrons with $n e A \\vec{v}_d = -I\\hat{l}$:', equation: '\\vec{F} = (n A l)[-e(\\vec{v}_d \\times \\vec{B})] = I(\\vec{l} \\times \\vec{B})' },
      { text: 'Magnitude of magnetic force:', equation: 'F = I l B \\sin\\theta' }
    ],
    finalFormula: '\\vec{F} = I(\\vec{l} \\times \\vec{B}), \\qquad F = I l B \\sin\\theta',
    specialCases: ['Max force $F = IlB$ when $\\theta = 90^\\circ$; zero force when parallel ($\\theta = 0^\\circ, 180^\\circ$).', 'Direction given by Fleming’s Left-Hand Rule.']
  },
  {
    id: 'drv-4-7',
    slideRange: 'Slide 26',
    chapterNum: 4,
    chapterId: 'phy-ch-4',
    chapterTitle: 'Moving Charges and Magnetism',
    subtopicId: 'phy-sub-4-8',
    title: 'Force Between Two Parallel Current-Carrying Conductors & 1 Ampere',
    syllabusStatus: 'Core CBSE 2026',
    importance: '5 Marks Guaranteed Derivation',
    diagramId: 'parallel-wires',
    subMode: 'attractive',
    setup: 'Two infinitely long parallel conductors separated by distance $d$ carry currents $I_1$ and $I_2$ in free space.',
    steps: [
      { text: 'Magnetic field produced by wire 1 at the location of wire 2:', equation: 'B_1 = \\frac{\\mu_0 I_1}{2\\pi d}' },
      { text: 'Wire 2 of length $l$ sits perpendicular ($\\theta = 90^\\circ$) to $B_1$, experiencing force $F_{21} = I_2 l B_1\\sin 90^\\circ$:', equation: '\\frac{F}{l} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}' },
      { text: 'Set $I_1 = I_2 = 1\\text{ A}$, $d = 1\\text{ m}$ ($\\mu_0/2\\pi = 2\\times 10^{-7}$): defines $1\\text{ Ampere}$ as steady current producing force $2\\times 10^{-7}\\text{ N/m}$.' }
    ],
    finalFormula: '\\frac{F}{l} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}',
    specialCases: ['Same-direction currents ATTRACT; opposite-direction currents REPEL (Newton’s 3rd law pair).']
  },
  {
    id: 'drv-4-8',
    slideRange: 'Slide 27',
    chapterNum: 4,
    chapterId: 'phy-ch-4',
    chapterTitle: 'Moving Charges and Magnetism',
    subtopicId: 'phy-sub-4-9',
    title: 'Torque on a Current Loop in a Uniform Magnetic Field',
    syllabusStatus: 'Core CBSE 2026',
    importance: '3 Marks Standard Derivation',
    diagramId: 'galvanometer-torque',
    setup: 'Rectangular coil $PQRS$ of length $l$, breadth $b$, $N$ turns, current $I$ suspended in uniform magnetic field $\\vec{B}$ with area normal $\\hat{n}$ at angle $\\theta$ to $\\vec{B}$.',
    steps: [
      { text: 'Forces on horizontal arms $QR$ and $SP$ are equal, opposite, and collinear $\\implies$ cancel without torque.' },
      { text: 'Vertical arms $PQ$ and $RS$ experience perpendicular forces $F = NIlB$ (since arm $\\perp \\vec{B}$), separated by perpendicular lever arm $b\\sin\\theta$:', equation: '\\tau = (N I l B)(b\\sin\\theta) = N I A B\\sin\\theta' },
      { text: 'Using magnetic dipole moment $\\vec{m} = N I \\vec{A}$:', equation: '\\vec{\\tau} = \\vec{m} \\times \\vec{B}' }
    ],
    finalFormula: '\\tau = N I A B\\sin\\theta = m B\\sin\\theta',
    specialCases: ['In a radial magnetic field (concave poles + soft iron core), plane is always parallel to $\\vec{B}$ ($\\theta = 90^\\circ$), making $\\tau = NIAB$ linear in current!']
  },
  {
    id: 'drv-4-9',
    slideRange: 'Slide 28',
    chapterNum: 4,
    chapterId: 'phy-ch-4',
    chapterTitle: 'Moving Charges and Magnetism',
    subtopicId: 'phy-sub-4-10',
    title: 'Moving Coil Galvanometer & Conversion to Ammeter / Voltmeter',
    syllabusStatus: 'Core CBSE 2026',
    importance: '5 Marks Board Staple',
    diagramId: 'galvanometer-conversion',
    subMode: 'ammeter',
    setup: 'Galvanometer coil (resistance $G$, full-scale deflection current $I_g$) reaches equilibrium twist $\\phi$ when deflecting torque $NIAB$ balances restoring spring torque $k\\phi$.',
    steps: [
      { text: 'Galvanometer deflection & sensitivity: $N I A B = k \\phi \\implies I = \\left(\\frac{k}{NAB}\\right)\\phi$. Current sensitivity $I_s = \\frac{\\phi}{I} = \\frac{NAB}{k}$; Voltage sensitivity $V_s = \\frac{\\phi}{V} = \\frac{NAB}{kR}$.' },
      { text: 'Ammeter Conversion (range $0–I$): Connect a small shunt $S$ in PARALLEL with $G$ so excess $(I - I_g)$ bypasses $G$:', equation: 'I_g G = (I - I_g)S \\implies S = \\frac{I_g G}{I - I_g}' },
      { text: 'Voltmeter Conversion (range $0–V$): Connect high multiplier resistance $R$ in SERIES with $G$:', equation: 'V = I_g(G + R) \\implies R = \\frac{V}{I_g} - G' }
    ],
    finalFormula: 'S = \\frac{I_g G}{I - I_g} \\; (\\parallel), \\qquad R = \\frac{V}{I_g} - G \\; (\\text{series})',
    specialCases: ['Doubling $N$ doubles $I_s$, but $R$ also doubles so voltage sensitivity $V_s$ remains unchanged!', 'Ideal ammeter has $R_A = 0$; ideal voltmeter has $R_V = \\infty$.']
  },

  // =========================================================================
  // CHAPTER 6: ELECTROMAGNETIC INDUCTION (Slides 29–31)
  // =========================================================================
  {
    id: 'drv-6-1',
    slideRange: 'Slide 29',
    chapterNum: 6,
    chapterId: 'phy-ch-6',
    chapterTitle: 'Electromagnetic Induction',
    subtopicId: 'phy-sub-6-5',
    title: 'Motional EMF (Sliding & Rotating Conductor), Force & Power Dissipated',
    syllabusStatus: 'Core CBSE 2026',
    importance: '5 Marks Guaranteed Numerical + Proof',
    diagramId: 'faraday-lenz',
    setup: 'Slide conducting rod $PQ$ of length $l$ at uniform velocity $v$ perpendicular to $\\vec{B}$ across U-shaped rails of total loop resistance $R$ ($x$ enclosed length). Also analyse rod rotating at angular speed $\\omega$.',
    steps: [
      { text: '(A) Straight Sliding Rod: Enclosed flux $\\Phi_B = B A = B l x$. By Faraday’s law:', equation: '|\\varepsilon| = \\left|\\frac{d\\Phi_B}{dt}\\right| = Bl\\left(-\\frac{dx}{dt}\\right) = Blv' },
      { text: 'Induced current $I = \\frac{Blv}{R}$ opposes motion with magnetic braking force $F = I l B = \\frac{B^2 l^2 v}{R}$. Mechanical power equals Joule heat:', equation: 'P_{\\text{mech}} = F v = \\frac{B^2 l^2 v^2}{R} = I^2 R = P_{\\text{heat}}' },
      { text: '(B) Rotating Conducting Rod of length $l$ (frequency $\\nu$, $\\omega = 2\\pi\\nu$): Sweep area $A = \\pi l^2$ per period $T = 1/\\nu$:', equation: '\\varepsilon = B\\frac{dA}{dt} = B\\frac{\\pi l^2}{T} = \\frac{1}{2}B\\omega l^2 = B\\pi\\nu l^2' }
    ],
    finalFormula: '\\varepsilon_{\\text{slide}} = Blv, \\qquad \\varepsilon_{\\text{rotate}} = \\frac{1}{2}B\\omega l^2',
    specialCases: ['If a conductor moves parallel to $\\vec{B}$ ($\\vec{v} \\parallel \\vec{B}$), motional EMF is zero.', 'Rotation EMF depends on rod length squared ($\\varepsilon \\propto l^2$).']
  },
  {
    id: 'drv-6-2',
    slideRange: 'Slide 30',
    chapterNum: 6,
    chapterId: 'phy-ch-6',
    chapterTitle: 'Electromagnetic Induction',
    subtopicId: 'phy-sub-6-8',
    title: 'Self-Inductance of a Long Solenoid',
    syllabusStatus: 'Core CBSE 2026',
    importance: '3 Marks Standard Derivation',
    diagramId: 'energy-storage',
    setup: 'Long solenoid of length $l$, cross-sectional area $A$, $n = N/l$ turns/length, carrying current $I$ around a core of relative permeability $\\mu_r$.',
    steps: [
      { text: 'Uniform axial magnetic field inside solenoid:', equation: 'B = \\mu_0 \\mu_r n I' },
      { text: 'Total magnetic flux linkage across all $N = n l$ turns:', equation: '\\Phi_{\\text{total}} = N (B A) = (n l)(\\mu_0 \\mu_r n I) A = \\mu_0 \\mu_r n^2 A l I' },
      { text: 'Comparing with defining relation $\\Phi_{\\text{total}} = L I$:', equation: 'L = \\mu_0 \\mu_r n^2 A l = \\frac{\\mu_0 \\mu_r N^2 A}{l}' }
    ],
    finalFormula: 'L = \\mu_0 \\mu_r n^2 A l = \\frac{\\mu_0 \\mu_r N^2 A}{l}',
    specialCases: ['Self-inductance $L$ is purely a geometrical + core-medium constant (independent of current $I$).']
  },
  {
    id: 'drv-6-3',
    slideRange: 'Slide 31',
    chapterNum: 6,
    chapterId: 'phy-ch-6',
    chapterTitle: 'Electromagnetic Induction',
    subtopicId: 'phy-sub-6-8',
    title: 'Mutual Inductance of Two Long Coaxial Solenoids',
    syllabusStatus: 'Core CBSE 2026',
    importance: '5 Marks Guaranteed Derivation',
    diagramId: 'transformer',
    setup: 'Two long coaxial solenoids of common length $l$, inner radius $r_1$ (cross-section $A_1 = \\pi r_1^2$, turns/m $n_1$) and outer radius $r_2$ ($n_2$), over core $\\mu_r$.',
    steps: [
      { text: 'Pass current $I_2$ through outer solenoid $S_2$: uniform field produced within it is $B_2 = \\mu_0 \\mu_r n_2 I_2$.' },
      { text: 'Flux linked with all $N_1 = n_1 l$ turns of inner solenoid $S_1$:', equation: '\\Phi_{12} = N_1 (B_2 A_1) = (n_1 l)(\\mu_0 \\mu_r n_2 I_2) A_1 = \\mu_0 \\mu_r n_1 n_2 A_1 l I_2' },
      { text: 'Comparing with $\\Phi_{12} = M_{12} I_2$ and verifying reciprocity theorem ($M_{12} = M_{21} = M$):', equation: 'M = \\mu_0 \\mu_r n_1 n_2 A_1 l = \\frac{\\mu_0 \\mu_r N_1 N_2 A_1}{l}' }
    ],
    finalFormula: 'M = \\mu_0 \\mu_r n_1 n_2 (\\pi r_1^2) l',
    specialCases: ['Notice ONLY the INNER cross-sectional area $A_1 = \\pi r_1^2$ appears because outside field of a long solenoid is zero!', 'Reciprocity: $M_{12} = M_{21} = M$.']
  },

  // =========================================================================
  // CHAPTER 7: ALTERNATING CURRENT (Slides 32–37)
  // =========================================================================
  {
    id: 'drv-7-1',
    slideRange: 'Slide 32',
    chapterNum: 7,
    chapterId: 'phy-ch-7',
    chapterTitle: 'Alternating Current',
    subtopicId: 'phy-sub-7-8',
    title: 'RMS and Average Values of Alternating Current',
    syllabusStatus: 'Core CBSE 2026',
    importance: '3 Marks Standard Proof',
    diagramId: 'ac-rms-waveform',
    setup: 'Take alternating current $I(t) = I_0\\sin\\omega t$ ($T = 2\\pi/\\omega$) flowing through resistor $R$ over one full cycle.',
    steps: [
      { text: 'Equate total Joule heat produced by AC over $T$ to steady DC $I_{\\text{rms}}$ over $T$:', equation: 'I_{\\text{rms}}^2 R T = \\int_0^T I_0^2 R \\sin^2(\\omega t)\\,dt' },
      { text: 'Since average of $\\sin^2(\\omega t)$ over one full period is $1/2$ ($\\int_0^T \\sin^2\\omega t\\,dt = T/2$):', equation: 'I_{\\text{rms}}^2 = \\frac{I_0^2}{2} \\implies I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}} \\approx 0.707\\,I_0' },
      { text: 'Mean/average value over a positive half cycle ($0 \\to T/2$):', equation: 'I_{\\text{avg (half)}} = \\frac{1}{T/2}\\int_0^{T/2} I_0\\sin\\omega t\\,dt = \\frac{2 I_0}{\\pi} \\approx 0.637\\,I_0' }
    ],
    finalFormula: 'I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}} \\approx 0.707\\,I_0, \\qquad I_{\\text{avg (half)}} = \\frac{2 I_0}{\\pi} \\approx 0.637\\,I_0',
    specialCases: ['Average AC over a complete cycle is zero; AC meters always measure RMS values.']
  },
  {
    id: 'drv-7-2',
    slideRange: 'Slide 33',
    chapterNum: 7,
    chapterId: 'phy-ch-7',
    chapterTitle: 'Alternating Current',
    subtopicId: 'phy-sub-7-2',
    title: 'AC Applied to Pure Resistor (R), Pure Inductor (L) & Pure Capacitor (C)',
    syllabusStatus: 'Core CBSE 2026',
    importance: '5 Marks Phasor Basics',
    diagramId: 'lcr-circuit',
    subMode: 'phasor',
    setup: 'Apply sinusoidal EMF $V = V_m\\sin\\omega t$ separately across pure $R$, pure $L$, and pure $C$, and determine current phase and reactance.',
    steps: [
      { text: 'Pure Resistor: $V = I R \\implies I = \\frac{V_m}{R}\\sin\\omega t$. Phase difference $\\phi = 0^\\circ$ ($I$ & $V$ in phase).' },
      { text: 'Pure Inductor: $V - L\\frac{dI}{dt} = 0 \\implies I = \\int \\frac{V_m}{L}\\sin\\omega t\\,dt = -\\frac{V_m}{\\omega L}\\cos\\omega t = I_m\\sin(\\omega t - \\frac{\\pi}{2})$. Current lags voltage by $\\frac{\\pi}{2}$; $X_L = \\omega L$.' },
      { text: 'Pure Capacitor: $I = \\frac{dq}{dt} = C\\frac{dV}{dt} = \\omega C V_m\\cos\\omega t = I_m\\sin(\\omega t + \\frac{\\pi}{2})$. Current leads voltage by $\\frac{\\pi}{2}$; $X_C = \\frac{1}{\\omega C}$.' }
    ],
    finalFormula: 'X_L = \\omega L = 2\\pi\\nu L, \\qquad X_C = \\frac{1}{\\omega C} = \\frac{1}{2\\pi\\nu C}',
    specialCases: ['For DC ($\\nu = 0$): $X_L = 0$ (inductor acts as short circuit) and $X_C = \\infty$ (capacitor blocks DC).']
  },
  {
    id: 'drv-7-3',
    slideRange: 'Slide 34',
    chapterNum: 7,
    chapterId: 'phy-ch-7',
    chapterTitle: 'Alternating Current',
    subtopicId: 'phy-sub-7-4',
    title: 'Series LCR Circuit: Phasor Impedance & Electrical Resonance',
    syllabusStatus: 'Core CBSE 2026',
    importance: '5 Marks Guaranteed Board Staple',
    diagramId: 'lcr-circuit',
    subMode: 'resonance',
    setup: 'AC current $I = I_m\\sin\\omega t$ flows through series $R-L-C$. $V_R$ is in phase with $I$, $V_L$ leads $I$ by $90^\\circ$, and $V_C$ lags $I$ by $90^\\circ$.',
    steps: [
      { text: 'Combine orthogonal phasors $V_R$ and $(V_L - V_C)$ by Pythagoras’ theorem:', equation: 'V_m = \\sqrt{V_{Rm}^2 + (V_{Lm} - V_{Cm})^2} = I_m\\sqrt{R^2 + (X_L - X_C)^2}' },
      { text: 'Impedance $Z$ and phase angle $\\phi$ of voltage relative to current:', equation: 'Z = \\sqrt{R^2 + (X_L - X_C)^2}, \\qquad \\tan\\phi = \\frac{X_L - X_C}{R}' },
      { text: 'At Resonance ($X_L = X_C$), impedance reaches minimum $Z_{\\min} = R$ and current peaks at $I_{\\max} = V_m/R$:', equation: '\\omega_r L = \\frac{1}{\\omega_r C} \\implies \\omega_r = \\frac{1}{\\sqrt{LC}}, \\qquad \\nu_r = \\frac{1}{2\\pi\\sqrt{LC}}' }
    ],
    finalFormula: 'Z = \\sqrt{R^2 + (X_L - X_C)^2}, \\qquad \\nu_r = \\frac{1}{2\\pi\\sqrt{LC}}',
    specialCases: ['At resonance, $\\phi = 0^\\circ$ and power factor $\\cos\\phi = 1$ (purely resistive).', 'Resonance frequency depends ONLY on $L$ and $C$, independent of $R$ (though sharpness $Q$ increases when $R$ decreases).']
  },
  {
    id: 'drv-7-4',
    slideRange: 'Slide 35',
    chapterNum: 7,
    chapterId: 'phy-ch-7',
    chapterTitle: 'Alternating Current',
    subtopicId: 'phy-sub-7-7',
    title: 'Average Power in AC Circuit & Wattless Current',
    syllabusStatus: 'Core CBSE 2026',
    importance: '3 Marks High Yield',
    diagramId: 'lcr-circuit',
    subMode: 'phasor',
    setup: 'Given instantaneous voltage $v = V_m\\sin\\omega t$ and current $i = I_m\\sin(\\omega t + \\phi)$ in an AC network.',
    steps: [
      { text: 'Instantaneous power $p = v i = V_m I_m \\sin\\omega t \\sin(\\omega t + \\phi)$. Expanding $\\sin(\\omega t + \\phi)$:', equation: 'p = V_m I_m\\left[\\sin^2(\\omega t)\\cos\\phi + \\frac{1}{2}\\sin(2\\omega t)\\sin\\phi\\right]' },
      { text: 'Averaging over one complete cycle: $\\langle\\sin^2\\omega t\\rangle = \\frac{1}{2}$ and $\\langle\\sin 2\\omega t\\rangle = 0$:', equation: 'P_{\\text{avg}} = \\frac{V_m I_m}{2}\\cos\\phi = V_{\\text{rms}} I_{\\text{rms}} \\cos\\phi' }
    ],
    finalFormula: 'P_{\\text{avg}} = V_{\\text{rms}} I_{\\text{rms}} \\cos\\phi, \\qquad \\cos\\phi = \\frac{R}{Z}',
    specialCases: ['In a pure $L$ or pure $C$ circuit, $\\phi = \\pm 90^\\circ \\implies P_{\\text{avg}} = 0$ (Wattless current: $I_{\\text{rms}}\\sin\\phi$).']
  },
  {
    id: 'drv-7-5',
    slideRange: 'Slide 36',
    chapterNum: 7,
    chapterId: 'phy-ch-7',
    chapterTitle: 'Alternating Current',
    subtopicId: 'phy-sub-6-9',
    title: 'Magnetic Energy Stored in an Inductor & Magnetic Energy Density',
    syllabusStatus: 'Core CBSE 2026',
    importance: '3 Marks Standard Proof',
    diagramId: 'energy-storage',
    setup: 'Build current in a pure inductor $L$ from $0$ to $I_0$ against back EMF $\\varepsilon = L\\frac{dI}{dt}$.',
    steps: [
      { text: 'Instantaneous rate of work done against self-induced back EMF:', equation: '\\frac{dW}{dt} = |\\varepsilon| I = L I \\frac{dI}{dt} \\implies dW = L I\\,dI' },
      { text: 'Integrate from $I = 0$ to final steady current $I_0$:', equation: 'U_B = W = \\int_0^{I_0} L I\\,dI = \\frac{1}{2} L I_0^2' },
      { text: 'For a long solenoid ($L = \\mu_0 n^2 A l$, $B = \\mu_0 n I_0 \\implies I_0 = B/(\\mu_0 n)$), magnetic energy density $u_B = U_B/(Al)$:', equation: 'u_B = \\frac{\\frac{1}{2}(\\mu_0 n^2 A l)(B/\\mu_0 n)^2}{A l} = \\frac{B^2}{2\\mu_0}' }
    ],
    finalFormula: 'U_B = \\frac{1}{2}L I_0^2, \\qquad u_B = \\frac{B^2}{2\\mu_0}',
    specialCases: ['Notice exact electromagnetic duality: capacitor $u_e = \\frac{1}{2}\\varepsilon_0 E^2$ vs inductor $u_B = \\frac{B^2}{2\\mu_0}$.']
  },
  {
    id: 'drv-7-6',
    slideRange: 'Slide 37',
    chapterNum: 7,
    chapterId: 'phy-ch-7',
    chapterTitle: 'Alternating Current',
    subtopicId: 'phy-sub-7-5',
    title: 'Ideal Transformer: Principle, Turns Ratio & Energy Losses',
    syllabusStatus: 'Core CBSE 2026',
    importance: '5 Marks Guaranteed Board Question',
    diagramId: 'transformer',
    setup: 'Two insulated coils ($N_p$ primary, $N_s$ secondary turns) wound on a laminated soft-iron core sharing identical magnetic flux $\\phi_B(t)$.',
    steps: [
      { text: 'By Faraday’s law, EMF induced per turn is identical across primary & secondary:', equation: 'E_p = -N_p\\frac{d\\phi_B}{dt}, \\qquad E_s = -N_s\\frac{d\\phi_B}{dt}' },
      { text: 'Assuming zero resistance ($V_p \\approx E_p$, $V_s \\approx E_s$) and $100\\%$ ideal power efficiency ($V_p I_p = V_s I_s$):', equation: '\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s} = k \\; (\\text{turns ratio})' }
    ],
    finalFormula: '\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s}',
    specialCases: ['Step-Up ($N_s > N_p$): raises voltage, lowers current.', 'Key Losses & Fixes: (1) Eddy currents $\\to$ Laminated core; (2) Hysteresis $\\to$ Soft iron; (3) Copper loss ($I^2R$) $\\to$ Thick wires; (4) Flux leakage $\\to$ Shell core winding.']
  },

  // =========================================================================
  // CHAPTER 9: RAY OPTICS AND OPTICAL INSTRUMENTS (Slides 38–41 + Complete Core)
  // =========================================================================
  {
    id: 'drv-9-0a',
    slideRange: 'Ray Optics Core 1',
    chapterNum: 9,
    chapterId: 'phy-ch-9',
    chapterTitle: 'Ray Optics and Optical Instruments',
    subtopicId: 'phy-sub-9-1',
    title: 'Relation Between Focal Length and Radius of Curvature (f = R/2)',
    syllabusStatus: 'Core CBSE 2026',
    importance: '2 Marks / 3 Marks Board Derivation',
    diagramId: 'ray-optics-instruments',
    setup: 'A paraxial ray $MD$ parallel to the principal axis strikes a spherical mirror (pole $P$, focus $F$, centre of curvature $C$, $PC = R$, $PF = f$) at small aperture point $M$.',
    steps: [
      { text: 'Normal $MC$ bisects the angle between incident and reflected rays ($\\angle DMC = \\angle CMF = \\theta$). By alternate interior angles, $\\angle MCP = \\theta$ and exterior angle $\\angle MFP = 2\\theta$.' },
      { text: 'Drop perpendicular $MD$ onto the principal axis ($D \\approx P$ for paraxial rays):', equation: '\\tan\\theta \\approx \\theta = \\frac{MD}{CD} \\approx \\frac{MD}{R}, \\qquad \\tan 2\\theta \\approx 2\\theta = \\frac{MD}{FD} \\approx \\frac{MD}{f}' },
      { text: 'Equate $\\theta$ from both relations:', equation: '\\frac{MD}{f} = 2\\left(\\frac{MD}{R}\\right) \\implies f = \\frac{R}{2}' }
    ],
    finalFormula: 'f = \\frac{R}{2} \\quad (R = 2f \\text{ for paraxial rays})',
    specialCases: ['Holds for both concave ($f, R < 0$) and convex ($f, R > 0$) mirrors strictly under the paraxial approximation.']
  },
  {
    id: 'drv-9-1',
    slideRange: 'Slide 38',
    chapterNum: 9,
    chapterId: 'phy-ch-9',
    chapterTitle: 'Ray Optics and Optical Instruments',
    subtopicId: 'phy-sub-9-1',
    title: 'Mirror Equation (1/v + 1/u = 1/f) & Linear Magnification (m = −v/u)',
    syllabusStatus: 'Core CBSE 2026',
    importance: '3 Marks Board Classic',
    diagramId: 'ray-optics-instruments',
    setup: 'Object $AB$ placed beyond $C$ in front of a concave mirror forms real inverted image $A\'B\'$ between $C$ and $F$. Apply paraxial triangle similarity + Cartesian signs ($u, v, f < 0$).',
    steps: [
      { text: 'From similar right triangles $\\triangle A\'B\'F \\sim \\triangle MPF$ ($MP = AB$):', equation: '\\frac{B\'A\'}{BA} = \\frac{B\'F}{FP} = \\frac{B\'P - FP}{FP}' },
      { text: 'From pole-reflected ray triangles $\\triangle A\'B\'P \\sim \\triangle ABP$:', equation: '\\frac{B\'A\'}{BA} = \\frac{B\'P}{BP} \\implies m = \\frac{-h\'}{h} = \\frac{-v}{-u} = -\\frac{v}{u}' },
      { text: 'Equate ratios and substitute signs ($B\'P = -v$, $FP = -f$, $BP = -u$):', equation: '\\frac{-v - (-f)}{-f} = \\frac{-v}{-u} \\implies \\frac{v}{f} - 1 = \\frac{v}{u} \\xrightarrow{\\div v} \\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}' }
    ],
    finalFormula: '\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f} = \\frac{2}{R}, \\qquad m = -\\frac{v}{u}',
    specialCases: ['Focal length of a mirror ($f = R/2$) NEVER changes when immersed in water.', 'Alternative forms: $m = \\frac{f}{f - u} = \\frac{f - v}{f}$.']
  },
  {
    id: 'drv-9-1b',
    slideRange: 'Ray Optics Core 2',
    chapterNum: 9,
    chapterId: 'phy-ch-9',
    chapterTitle: 'Ray Optics and Optical Instruments',
    subtopicId: 'phy-sub-9-2',
    title: 'Total Internal Reflection (TIR), Critical Angle & Apparent Depth',
    syllabusStatus: 'Core CBSE 2026',
    importance: '3 Marks Guaranteed Concept + Prism Derivation',
    diagramId: 'prism-dispersion',
    setup: 'Light travels from optically denser medium $n_d$ to optically rarer medium $n_r$ ($n_d > n_r$) at angle of incidence $i$.',
    steps: [
      { text: 'By Snell’s law $n_d \\sin i = n_r \\sin r$. At the critical angle $i = i_c$, refracted ray grazes the boundary ($r = 90^\\circ$):', equation: 'n_d \\sin i_c = n_r \\sin 90^\\circ \\implies \\sin i_c = \\frac{n_r}{n_d} = \\frac{1}{n_{dr}}' },
      { text: 'For $i > i_c$, $\\sin r > 1$ has no real solution $\\implies$ 100% Total Internal Reflection back into the denser medium.' },
      { text: 'Apparent depth for near-normal viewing into slab of index $n$ and normal shift $\\Delta t$:', equation: 'd_{\\text{app}} = \\frac{d_{\\text{real}}}{n}, \\qquad \\Delta t = t\\left(1 - \\frac{1}{n}\\right)' }
    ],
    finalFormula: '\\sin i_c = \\frac{n_{\\text{rarer}}}{n_{\\text{denser}}} = \\frac{1}{n}, \\qquad \\text{TIR: (1) Denser } \\to \\text{ Rarer, (2) } i > i_c',
    specialCases: ['Applications: Optical fibres ($n_{\\text{core}} > n_{\\text{cladding}}$), Porro/totally reflecting $45^\\circ\\text{–}90^\\circ\\text{–}45^\\circ$ prisms, diamond ($i_c = 24.4^\\circ$).']
  },
  {
    id: 'drv-9-2',
    slideRange: 'Slide 39',
    chapterNum: 9,
    chapterId: 'phy-ch-9',
    chapterTitle: 'Ray Optics and Optical Instruments',
    subtopicId: 'phy-sub-9-3',
    title: 'Refraction at a Convex Spherical Surface',
    syllabusStatus: 'Core CBSE 2026',
    importance: '5 Marks Guaranteed Derivation',
    diagramId: 'ray-optics-instruments',
    setup: 'Point object $O$ in rarer medium ($n_1$) forms real image $I$ in denser medium ($n_2$) through convex spherical interface of radius of curvature $R$. Paraxial angles $\\alpha, \\beta, \\gamma$ are small.',
    steps: [
      { text: 'Small-angle trigonometry ($NM \\approx h$ perpendicular dropped from point of incidence $N$):', equation: '\\tan\\alpha \\approx \\alpha = \\frac{h}{-u}, \\quad \\tan\\beta \\approx \\beta = \\frac{h}{+v}, \\quad \\tan\\gamma \\approx \\gamma = \\frac{h}{+R}' },
      { text: 'Exterior angles give $i = \\alpha + \\gamma$ and $r = \\gamma - \\beta$. Small-angle Snell’s Law gives $n_1 i = n_2 r$:', equation: 'n_1(\\alpha + \\gamma) = n_2(\\gamma - \\beta)' },
      { text: 'Substitute $\\alpha, \\beta, \\gamma$ in terms of $u, v, R$ and cancel $h$:', equation: 'n_1\\left(\\frac{1}{-u} + \\frac{1}{R}\\right) = n_2\\left(\\frac{1}{R} - \\frac{1}{v}\\right) \\implies \\frac{n_2}{v} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R}' }
    ],
    finalFormula: '\\frac{n_2}{v} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R}',
    specialCases: ['Note: This single formula is universal across all spherical boundaries once Cartesian signs are put in for $u, v, R$.']
  },
  {
    id: 'drv-9-3',
    slideRange: 'Slide 40',
    chapterNum: 9,
    chapterId: 'phy-ch-9',
    chapterTitle: 'Ray Optics and Optical Instruments',
    subtopicId: 'phy-sub-9-3',
    title: 'Lens Maker’s Formula & Thin Lenses in Contact',
    syllabusStatus: 'Core CBSE 2026',
    importance: '5 Marks #1 Board Derivation',
    diagramId: 'ray-optics-instruments',
    setup: 'Thin lens (refractive index $n_2$, radii $R_1, R_2$) in surrounding medium $n_1$. Trace refraction step-by-step across Surface 1 ($I_1$ virtual image) and Surface 2 (final image $I$).',
    steps: [
      { text: 'Refraction at first surface ($n_1 \\to n_2$, radius $R_1$):', equation: '\\frac{n_2}{v_1} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R_1}' },
      { text: 'Refraction at second surface ($n_2 \\to n_1$, radius $R_2$, $I_1$ acts as object):', equation: '\\frac{n_1}{v} - \\frac{n_2}{v_1} = \\frac{n_1 - n_2}{R_2} = -\\frac{n_2 - n_1}{R_2}' },
      { text: 'Add both equations ($n_2/v_1$ cancels) and set $u = \\infty \\implies v = f$:', equation: '\\frac{n_1}{f} = (n_2 - n_1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right) \\implies \\frac{1}{f} = \\left(\\frac{n_2}{n_1} - 1\\right)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)' },
      { text: 'Equivalent focal length of two thin lenses in contact:', equation: '\\frac{1}{F} = \\frac{1}{f_1} + \\frac{1}{f_2}, \\qquad P = P_1 + P_2' }
    ],
    finalFormula: '\\frac{1}{f} = (n_{21} - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)',
    specialCases: ['If $n_1 = n_2$ (e.g., glass $1.47$ in glycerine $1.47$), $1/f = 0 \\implies f = \\infty$ (lens disappears!).', 'In water, $(n_{g}/n_{w} - 1) < (n_g - 1)$, so focal length of glass lens INCREASES ($\\sim 4 f_{\\text{air}}$).']
  },
  {
    id: 'drv-9-4',
    slideRange: 'Slide 41',
    chapterNum: 9,
    chapterId: 'phy-ch-9',
    chapterTitle: 'Ray Optics and Optical Instruments',
    subtopicId: 'phy-sub-9-4',
    title: 'Prism Deviation & Refractive Index at Minimum Deviation',
    syllabusStatus: 'Core CBSE 2026',
    importance: '5 Marks Board Derivation',
    diagramId: 'ray-optics-instruments',
    setup: 'Triangular glass prism of refracting angle $A$ and refractive index $n$. Incident angle $i$, emergent angle $e$, internal refraction angles $r_1, r_2$, and deviation $\\delta$.',
    steps: [
      { text: 'From quadrilateral $AQNR$ and internal triangle $QNR$: $A + \\angle QNR = 180^\\circ$ and $r_1 + r_2 + \\angle QNR = 180^\\circ$:', equation: 'r_1 + r_2 = A' },
      { text: 'Exterior angle total deviation $\\delta = (i - r_1) + (e - r_2)$:', equation: '\\delta = i + e - A \\quad \\iff \\quad i + e = A + \\delta' },
      { text: 'At Minimum Deviation ($\\delta = \\delta_m$), ray passes symmetrically ($i = e$ and $r_1 = r_2 = r$):', equation: 'r = \\frac{A}{2}, \\qquad i = \\frac{A + \\delta_m}{2}' },
      { text: 'Apply Snell’s Law at first face ($n = \\sin i / \\sin r$):', equation: 'n = \\frac{\\sin\\left(\\frac{A + \\delta_m}{2}\\right)}{\\sin\\left(\\frac{A}{2}\\right)}' }
    ],
    finalFormula: 'n = \\frac{\\sin\\left(\\frac{A + \\delta_m}{2}\\right)}{\\sin\\left(\\frac{A}{2}\\right)}',
    specialCases: ['For thin prisms ($A \\le 10^\\circ$, $\\sin\\theta \\approx \\theta$): $\\delta_m = (n - 1)A$.', 'Condition for no emergence at face 2 regardless of $i$: $A > 2 i_c$.']
  },
  {
    id: 'drv-9-5',
    slideRange: 'Ray Optics Core 3',
    chapterNum: 9,
    chapterId: 'phy-ch-9',
    chapterTitle: 'Ray Optics and Optical Instruments',
    subtopicId: 'phy-sub-9-5',
    title: 'Simple & Compound Microscope: Magnifying Power at Near Point D and Infinity',
    syllabusStatus: 'Core CBSE 2026',
    importance: '5 Marks Guaranteed Ray Diagram + Derivation',
    diagramId: 'ray-optics-instruments',
    setup: 'Simple microscope uses one converging lens ($f < D$). Compound microscope uses short-$f_o$ objective and larger-aperture eyepiece ($f_e$) separated by tube length $L$.',
    steps: [
      { text: 'Simple Microscope at near point ($v = -D$): Since $m = h\'/h = D/u_o$ and $\\frac{1}{-D} - \\frac{1}{-u_o} = \\frac{1}{f} \\implies \\frac{D}{u_o} = 1 + \\frac{D}{f}$:', equation: 'm_{\\text{simple}}(D) = 1 + \\frac{D}{f}, \\qquad m_{\\text{simple}}(\\infty) = \\frac{D}{f}' },
      { text: 'Compound Microscope total angular magnification equals objective linear magnification times eyepiece angular magnification ($m = m_o \\times m_e$):', equation: 'm_D = \\frac{v_o}{|u_o|}\\left(1 + \\frac{D}{f_e}\\right) \\approx \\frac{L}{f_o}\\left(1 + \\frac{D}{f_e}\\right)' },
      { text: 'Compound Microscope in Normal Adjustment (image at $\\infty$):', equation: 'm_\\infty = \\frac{v_o}{|u_o|}\\left(\\frac{D}{f_e}\\right) \\approx \\frac{L}{f_o}\\left(\\frac{D}{f_e}\\right)' }
    ],
    finalFormula: 'm_{\\text{simple}} = 1 + \\frac{D}{f}; \\qquad m_{\\text{compound}} = \\frac{v_o}{|u_o|}\\left(1 + \\frac{D}{f_e}\\right)',
    specialCases: ['For high magnifying power in a compound microscope, BOTH $f_o$ and $f_e$ should be small (with $f_o < f_e$ so magnification stays large and image stays real before $F_e$).']
  },
  {
    id: 'drv-9-6',
    slideRange: 'Ray Optics Core 4',
    chapterNum: 9,
    chapterId: 'phy-ch-9',
    chapterTitle: 'Ray Optics and Optical Instruments',
    subtopicId: 'phy-sub-9-5',
    title: 'Astronomical Refracting Telescope & Cassegrain Reflecting Telescope',
    syllabusStatus: 'Core CBSE 2026',
    importance: '5 Marks Guaranteed Optical Instrument Question',
    diagramId: 'ray-optics-instruments',
    setup: 'Distant object subtends angle $\\alpha \\approx h\'/f_o$ at objective ($f_o \\gg f_e$); real inverted image $A\'B\'$ at $F_o$ acts as object for eyepiece subtending angle $\\beta \\approx h\'/|u_e|$.',
    steps: [
      { text: 'Angular magnification of Astronomical Refracting Telescope:', equation: 'm = \\frac{\\tan\\beta}{\\tan\\alpha} = \\frac{h\'/|u_e|}{h\'/f_o} = \\frac{f_o}{|u_e|}' },
      { text: 'Normal Adjustment (final image at $\\infty$, $|u_e| = f_e$, $L = f_o + f_e$):', equation: 'm_\\infty = \\frac{f_o}{f_e}, \\qquad L = f_o + f_e' },
      { text: 'Near Point Adjustment ($v_e = -D \\implies \\frac{1}{|u_e|} = \\frac{1}{f_e}(1 + \\frac{f_e}{D})$):', equation: 'm_D = \\frac{f_o}{f_e}\\left(1 + \\frac{f_e}{D}\\right)' },
      { text: 'Cassegrain Reflecting Telescope uses a concave parabolic primary mirror ($R = 2f_o$) with a central hole + convex secondary mirror feeding eyepiece ($m = f_o/f_e$), completely eliminating chromatic & spherical aberration.' }
    ],
    finalFormula: 'm_\\infty = \\frac{f_o}{f_e} \\;(L = f_o + f_e), \\qquad m_D = \\frac{f_o}{f_e}\\left(1 + \\frac{f_e}{D}\\right)',
    specialCases: ['Reflecting (Cassegrain) advantages: (1) Zero chromatic aberration, (2) Parabolic mirror removes spherical aberration, (3) Huge aperture without lens sag, (4) Easy back support.']
  },

  // =========================================================================
  // CHAPTER 10: WAVE OPTICS
  // =========================================================================
  {
    id: 'drv-10-0a',
    slideRange: 'Wave Optics Core 1',
    chapterNum: 10,
    chapterId: 'phy-ch-10',
    chapterTitle: 'Wave Optics',
    subtopicId: 'phy-sub-10-1',
    title: 'Types of Wavefronts (Spherical, Cylindrical, Plane) & Optical Transformations',
    syllabusStatus: 'Core CBSE 2026',
    importance: '2 Marks / 3 Marks Board Staple',
    diagramId: 'huygens-wavefronts',
    setup: 'A wavefront is a continuous locus of points oscillating in identical phase at time $t$; light rays propagate perpendicular to the wavefront.',
    steps: [
      { text: 'Spherical Wavefront: Emitted by a point source in an isotropic medium; spherical area $4\\pi r^2$ scales intensity as $I \\propto \\frac{1}{r^2}$ and amplitude as $A \\propto \\frac{1}{r}$.' },
      { text: 'Cylindrical Wavefront: Emitted by a linear slit source; cylindrical area $2\\pi r l$ scales intensity as $I \\propto \\frac{1}{r}$ and amplitude as $A \\propto \\frac{1}{\\sqrt{r}}$.' },
      { text: 'Plane Wavefront: Small portion of a spherical or cylindrical wavefront from a source at infinity ($r \\to \\infty$), with uniform amplitude and parallel rays.', equation: '\\vec{k} \\perp \\text{Wavefront}, \\qquad I_{\\text{plane}} = \\text{const}' }
    ],
    finalFormula: '\\text{Point} \\to \\text{Spherical } (I \\propto r^{-2}), \\quad \\text{Line} \\to \\text{Cylindrical } (I \\propto r^{-1}), \\quad \\infty \\to \\text{Plane}',
    specialCases: ['Plane WF on convex mirror diverges as a spherical WF from virtual $F$; point source at convex lens focus emerges as a plane WF.', 'Plane WF incident on a triangular prism emerges as a tilted plane WF bent toward the thicker base.']
  },
  {
    id: 'drv-10-0b',
    slideRange: 'Wave Optics Core 2',
    chapterNum: 10,
    chapterId: 'phy-ch-10',
    chapterTitle: 'Wave Optics',
    subtopicId: 'phy-sub-10-1',
    title: 'Huygens’ Principle & Secondary Wavelets Envelope Construction',
    syllabusStatus: 'Core CBSE 2026',
    importance: '2 Marks / 3 Marks Conceptual Proof',
    diagramId: 'huygens-wavefronts',
    setup: 'Given primary wavefront $AB$ at $t = 0$ in a homogeneous medium of wave speed $v$, construct the wavefront position at $t = \\tau$.',
    steps: [
      { text: 'Postulate 1: Every point on primary wavefront $AB$ acts as an independent point source of secondary spherical wavelets travelling outward at speed $v$.' },
      { text: 'Postulate 2: After time $\\tau$, draw spheres of radius $r = v\\tau$ centred on each point of $AB$; their forward common tangent envelope $A\'B\'$ gives the new wavefront:', equation: 'r = v \\cdot \\tau' }
    ],
    finalFormula: '\\text{Forward Envelope Radius } r = v\\tau \\quad (\\text{Amplitude } \\propto 1 + \\cos\\theta \\implies 0 \\text{ at } \\theta = 180^\\circ)',
    specialCases: ['No backward wavefront is observed because the obliquity factor $(1 + \\cos\\theta)$ vanishes in the backward direction ($\\theta = \\pi$).']
  },
  {
    id: 'drv-10-0c',
    slideRange: 'Wave Optics Core 3',
    chapterNum: 10,
    chapterId: 'phy-ch-10',
    chapterTitle: 'Wave Optics',
    subtopicId: 'phy-sub-10-2',
    title: 'Reflection of a Plane Wavefront on the Basis of Wave Theory (i = r)',
    syllabusStatus: 'Core CBSE 2026',
    importance: '3 Marks Guaranteed Wave-Theory Proof',
    diagramId: 'huygens-wavefronts',
    setup: 'Plane wavefront $AB$ is incident obliquely at angle $i$ on reflecting mirror $XY$ in a medium of constant wave speed $v$.',
    steps: [
      { text: 'Point $B$ on the wavefront travels to mirror point $C$ in time $\\tau$ covering distance $BC = v\\tau$.' },
      { text: 'Simultaneously, secondary spherical wavelet from $A$ spreads into the same medium of radius $AE = v\\tau$.' },
      { text: 'In right triangles $\\triangle EAC$ and $\\triangle BAC$: $\\angle AEC = \\angle ABC = 90^\\circ$, $AE = BC = v\\tau$, and $AC$ is common $\\implies \\triangle EAC \\cong \\triangle BAC$ (RHS):', equation: '\\angle BAC = \\angle ECA \\implies \\angle i = \\angle r' }
    ],
    finalFormula: 'AE = BC = v\\tau \\implies \\triangle EAC \\cong \\triangle BAC \\implies \\angle i = \\angle r',
    specialCases: ['Incident ray, normal, and reflected ray all lie perpendicular to wavefronts in the same plane of incidence.']
  },
  {
    id: 'drv-10-0d',
    slideRange: 'Wave Optics Core 4',
    chapterNum: 10,
    chapterId: 'phy-ch-10',
    chapterTitle: 'Wave Optics',
    subtopicId: 'phy-sub-10-2',
    title: 'Refraction of a Plane Wavefront at a Denser Medium (Snell’s Law, v₂ < v₁)',
    syllabusStatus: 'Core CBSE 2026',
    importance: '3 Marks / 5 Marks #1 Board Derivation',
    diagramId: 'huygens-wavefronts',
    setup: 'Plane wavefront $AB$ enters from rarer medium $1$ (speed $v_1$, index $n_1$) into denser medium $2$ (speed $v_2 < v_1$, index $n_2 > n_1$) across boundary $XY$.',
    steps: [
      { text: 'In transit time $\\tau$ taken by disturbance from $B$ to reach $C$ ($BC = v_1\\tau$), secondary wavelet from $A$ advances into medium 2 by shorter radius $AE = v_2\\tau$.' },
      { text: 'Draw tangent plane $CE$ from $C$ ($\\angle AEC = 90^\\circ$) to obtain refracted wavefront at angle $r$:', equation: '\\sin i = \\frac{v_1\\tau}{AC}, \\qquad \\sin r = \\frac{v_2\\tau}{AC}' },
      { text: 'Divide both relations:', equation: '\\frac{\\sin i}{\\sin r} = \\frac{v_1}{v_2} = \\frac{c/n_1}{c/n_2} = \\frac{n_2}{n_1} \\implies n_1 \\sin i = n_2 \\sin r' }
    ],
    finalFormula: '\\frac{\\sin i}{\\sin r} = \\frac{v_1}{v_2} = \\frac{n_2}{n_1} \\quad (v_2 < v_1 \\implies r < i)',
    specialCases: ['Frequency $\\nu$ remains invariant while wavelength decreases as $\\lambda_2 = \\lambda_1 (v_2/v_1) = \\lambda_1/n_{21}$.']
  },
  {
    id: 'drv-10-0e',
    slideRange: 'Wave Optics Core 5',
    chapterNum: 10,
    chapterId: 'phy-ch-10',
    chapterTitle: 'Wave Optics',
    subtopicId: 'phy-sub-10-2',
    title: 'Refraction of a Plane Wavefront at a Rarer Medium (v₂ > v₁, r > i & Critical Angle)',
    syllabusStatus: 'Core CBSE 2026',
    importance: '3 Marks Classic Board Variation',
    diagramId: 'huygens-wavefronts',
    setup: 'Plane wavefront $AB$ travels from optically denser medium $1$ (speed $v_1, n_1$) into optically rarer medium $2$ (speed $v_2 > v_1, n_2 < n_1$) across interface $XY$.',
    steps: [
      { text: 'In time $\\tau$ during which $B$ reaches $C$ in the denser medium ($BC = v_1\\tau$), the secondary wavelet from $A$ travels FASTER in the rarer medium ($AE = v_2\\tau > BC$).' },
      { text: 'From right triangles $\\triangle ABC$ and $\\triangle AEC$ sharing $AC$:', equation: '\\frac{\\sin i}{\\sin r} = \\frac{v_1\\tau/AC}{v_2\\tau/AC} = \\frac{v_1}{v_2} < 1 \\implies \\sin r > \\sin i \\implies r > i' },
      { text: 'Critical angle ($i = i_c$) occurs when the rarer-medium wavelet radius reaches $AE = AC$, forcing grazing emergence ($r = 90^\\circ$):', equation: '\\sin i_c = \\frac{BC}{AC} = \\frac{v_1\\tau}{v_2\\tau} = \\frac{v_1}{v_2} = \\frac{n_2}{n_1}' }
    ],
    finalFormula: 'v_2 > v_1 \\implies r > i \\; (\\text{away from normal}), \\qquad \\sin i_c = \\frac{v_1}{v_2} = \\frac{n_2}{n_1}',
    specialCases: ['For $i > i_c$, $v_2\\tau > AC$, so no real tangent $CE$ can be drawn into medium 2 and the entire wavefront undergoes Total Internal Reflection.']
  },
  {
    id: 'drv-10-0f',
    slideRange: 'Wave Optics Core 6',
    chapterNum: 10,
    chapterId: 'phy-ch-10',
    chapterTitle: 'Wave Optics',
    subtopicId: 'phy-sub-10-3',
    title: 'Interference of Waves: Coherent Superposition & Resultant Intensity I = 4I₀ cos²(φ/2)',
    syllabusStatus: 'Core CBSE 2026',
    importance: '3 Marks / 5 Marks Board Derivation',
    diagramId: 'ydse-wave-optics',
    setup: 'Two coherent waves $y_1 = a_1\\cos(\\omega t)$ and $y_2 = a_2\\cos(\\omega t + \\phi)$ of constant phase difference $\\phi$ superpose at point $P$.',
    steps: [
      { text: 'Resultant displacement $y = y_1 + y_2 = A\\cos(\\omega t + \\theta)$ has squared amplitude:', equation: 'A^2 = a_1^2 + a_2^2 + 2a_1a_2\\cos\\phi \\implies I = I_1 + I_2 + 2\\sqrt{I_1 I_2}\\cos\\phi' },
      { text: 'For identical sources ($I_1 = I_2 = I_0$):', equation: 'I = 2I_0(1 + \\cos\\phi) = 4I_0\\cos^2\\!\\left(\\frac{\\phi}{2}\\right)' },
      { text: 'Maxima ($\\phi = 2n\\pi, \\Delta x = n\\lambda$): $I_{\\max} = (\\sqrt{I_1} + \\sqrt{I_2})^2$. Minima ($\\phi = (2n+1)\\pi, \\Delta x = (n + 1/2)\\lambda$): $I_{\\min} = (\\sqrt{I_1} - \\sqrt{I_2})^2$.', equation: '\\frac{I_{\\max}}{I_{\\min}} = \\frac{(a_1 + a_2)^2}{(a_1 - a_2)^2}' }
    ],
    finalFormula: 'I = I_1 + I_2 + 2\\sqrt{I_1 I_2}\\cos\\phi \\xrightarrow{I_1=I_2=I_0} 4I_0\\cos^2\\!\\left(\\frac{\\phi}{2}\\right)',
    specialCases: ['Energy is conserved: $I_{\\text{avg}} = \\frac{1}{2}(I_{\\max} + I_{\\min}) = I_1 + I_2$; interference only redistributes energy from dark to bright zones.']
  },
  {
    id: 'drv-10-1',
    slideRange: 'Slide 42',
    chapterNum: 10,
    chapterId: 'phy-ch-10',
    chapterTitle: 'Wave Optics',
    subtopicId: 'phy-sub-10-4',
    title: 'Young’s Double-Slit Experiment (YDSE): Path Difference & Fringe Width',
    syllabusStatus: 'Core CBSE 2026',
    importance: '5 Marks Guaranteed Derivation',
    diagramId: 'ydse-wave-optics',
    setup: 'Two coherent slits $S_1, S_2$ separated by $d$ illuminate a screen at distance $D \\gg d$. Point $P$ lies at distance $y$ from central maximum $O$.',
    steps: [
      { text: 'Path lengths from slits to $P$: $S_2 P^2 - S_1 P^2 = \\left[D^2 + \\left(y + \\frac{d}{2}\\right)^2\\right] - \\left[D^2 + \\left(y - \\frac{d}{2}\\right)^2\\right] = 2 y d$.' },
      { text: 'Factor $(S_2 P - S_1 P)(S_2 P + S_1 P) = 2yd$. Since $D \\gg d, y$, set $S_2 P + S_1 P \\approx 2D$:', equation: '\\Delta x = S_2 P - S_1 P = \\frac{y d}{D}' },
      { text: 'Bright fringes ($\\Delta x = n\\lambda$): $y_n = \\frac{n\\lambda D}{d}$. Dark fringes ($\\Delta x = (2n-1)\\frac{\\lambda}{2}$): $y\'_n = \\frac{(2n-1)\\lambda D}{2d}$.' },
      { text: 'Fringe width $\\beta = y_{n+1} - y_n$ (equal for bright and dark fringes):', equation: '\\beta = \\frac{\\lambda D}{d}, \\qquad \\theta = \\frac{\\beta}{D} = \\frac{\\lambda}{d}' }
    ],
    finalFormula: '\\Delta x = \\frac{y d}{D}, \\qquad \\beta = \\frac{\\lambda D}{d}',
    specialCases: ['If immersed in liquid of index $n$, $\\lambda\' = \\lambda/n \\implies$ fringe width shrinks to $\\beta\' = \\beta/n$.']
  },
  {
    id: 'drv-10-2',
    slideRange: 'Slide 43',
    chapterNum: 10,
    chapterId: 'phy-ch-10',
    chapterTitle: 'Wave Optics',
    subtopicId: 'phy-sub-10-5',
    title: 'Single-Slit Diffraction: Minima Condition & Central Maximum Width',
    syllabusStatus: 'Core CBSE 2026',
    importance: '3 Marks / 5 Marks Board Derivation',
    diagramId: 'single-slit-diffraction',
    setup: 'Monochromatic plane wave of wavelength $\\lambda$ falls normally on a single slit of width $a$. Focus diffracted rays at angle $\\theta$ onto screen at distance $D$.',
    steps: [
      { text: 'Path difference between top edge $A$ and bottom edge $B$ of slit is $\\Delta x = a\\sin\\theta$.' },
      { text: 'First Minimum ($n = 1$): Divide slit into 2 equal halves ($a/2$). Top half & bottom half differ in path by $\\frac{a}{2}\\sin\\theta_1 = \\frac{\\lambda}{2}$ $\\implies$ pairwise destructive cancellation:', equation: 'a\\sin\\theta_n = n\\lambda \\quad (n = \\pm 1, \\pm 2, \\pm 3, \\dots) \\quad [\\text{Minima!}]' },
      { text: 'Central Maximum lies between first minima ($\\pm\\theta_1$, small angle $\\sin\\theta_1 \\approx \\theta_1 = \\lambda/a$):', equation: '\\text{Angular Width } (2\\theta_1) = \\frac{2\\lambda}{a}, \\qquad \\text{Linear Width } W_c = 2 y_1 = \\frac{2\\lambda D}{a}' }
    ],
    finalFormula: 'a\\sin\\theta_n = n\\lambda \\; (\\text{Minima}), \\qquad W_c = \\frac{2\\lambda D}{a}',
    specialCases: ['Secondary maxima occur approximately midway at $a\\sin\\theta = (n + 1/2)\\lambda$ with rapidly decreasing intensities.', 'Central maximum is TWICE as wide as every secondary fringe!']
  },

  // =========================================================================
  // CHAPTER 11: DUAL NATURE OF RADIATION AND MATTER (Slides 44–45 + Core)
  // =========================================================================
  {
    id: 'drv-11-00',
    slideRange: 'Dual Nature Core 0',
    chapterNum: 11,
    chapterId: 'phy-ch-11',
    chapterTitle: 'Dual Nature of Radiation and Matter',
    subtopicId: 'phy-sub-11-1',
    title: 'Electron Emission, Work Function (φ₀) & Experimental Study of Photoelectric Effect',
    syllabusStatus: 'Core CBSE 2026',
    importance: '2 Marks / 3 Marks Board Concept + Setup',
    diagramId: 'photoelectric-graphs',
    setup: 'Free electrons in metals require minimum energy $\\phi_0$ (work function) to escape the surface potential barrier via thermionic, field, or photoelectric emission.',
    steps: [
      { text: 'Work function $\\phi_0$ depends strictly on the metal identity and surface purity (Cesium lowest $2.14\\text{ eV}$, Platinum highest $5.65\\text{ eV}$):', equation: '\\phi_0 = h\\nu_0 = \\frac{hc}{\\lambda_0}' },
      { text: 'Three electron emission modes: (1) Thermionic (heating metal), (2) Field emission (strong $\\vec{E} \\sim 10^8\\text{ V/m}$), (3) Photoelectric emission (light of $\\nu \\ge \\nu_0$).' },
      { text: 'Experimental Study (Lenard–Hallwachs): Evacuated quartz tube with photosensitive emitter $C$ and reversible collector $A$; microammeter measures photocurrent $I$ as Intensity, Collector Potential $V$, and Frequency $\\nu$ vary independently.' }
    ],
    finalFormula: '\\phi_0 = h\\nu_0 = \\frac{hc}{\\lambda_0}, \\qquad K_{\\max} = eV_0',
    specialCases: ['Alkali metals (Li, Na, K, Rb, Cs) emit photoelectrons with visible light because their $\\phi_0$ is low; Zn, Cd, Mg require UV light.']
  },
  {
    id: 'drv-11-0a',
    slideRange: 'Dual Nature Core 1',
    chapterNum: 11,
    chapterId: 'phy-ch-11',
    chapterTitle: 'Dual Nature of Radiation and Matter',
    subtopicId: 'phy-sub-11-2',
    title: 'Laws of Photoelectric Emission & Experimental Hallwachs–Lenard Graphs',
    syllabusStatus: 'Core CBSE 2026',
    importance: '3 Marks Guaranteed Graph & Laws Question',
    diagramId: 'photoelectric-graphs',
    setup: 'Monochromatic light of frequency $\\nu > \\nu_0$ and intensity $I$ illuminates photosensitive cathode $C$ opposite variable anode $A$ in an evacuated quartz tube.',
    steps: [
      { text: 'Law 1 (Intensity): For fixed $\\nu > \\nu_0$, saturation photoelectric current $i_{\\text{sat}} \\propto I$ (more photons eject more electrons/s), while $V_0$ is independent of $I$.' },
      { text: 'Law 2 (Threshold): Below material threshold frequency $\\nu_0 = \\phi_0/h$, zero emission occurs regardless of how intense the light is.' },
      { text: 'Laws 3 & 4 (Frequency & Instantaneity): Above $\\nu_0$, stopping potential $V_0$ and $K_{\\max} = eV_0$ increase linearly with $\\nu$, and emission occurs instantaneously ($< 10^{-9}\\text{ s}$).', equation: 'i_{\\text{sat}} \\propto I \\; (V_0 \\text{ fixed}), \\qquad K_{\\max} = eV_0 \\propto (\\nu - \\nu_0)' }
    ],
    finalFormula: 'i_{\\text{sat}} \\propto I, \\quad K_{\\max} = eV_0 \\; (\\text{independent of } I), \\quad \\nu \\ge \\nu_0 \\; (\\Delta t < 10^{-9}\\text{ s})',
    specialCases: ['All curves for $I_3 > I_2 > I_1$ at same frequency $\\nu$ converge at the SAME stopping potential $-V_0$ on the negative collector axis.']
  },
  {
    id: 'drv-11-0b',
    slideRange: 'Dual Nature Core 2',
    chapterNum: 11,
    chapterId: 'phy-ch-11',
    chapterTitle: 'Dual Nature of Radiation and Matter',
    subtopicId: 'phy-sub-11-3',
    title: 'Characteristic Properties of a Photon (Particle Nature of Radiation)',
    syllabusStatus: 'Core CBSE 2026',
    importance: '2 Marks / 3 Marks Board Concept Staple',
    diagramId: 'photoelectric-graphs',
    setup: 'In interaction with matter, electromagnetic radiation behaves as discrete energy–momentum packets called photons (radiation quanta).',
    steps: [
      { text: 'Energy and Momentum: Each photon of frequency $\\nu$ and wavelength $\\lambda$ moves in vacuum at speed $c$ with discrete energy and linear momentum:', equation: 'E = h\\nu = \\frac{hc}{\\lambda}, \\qquad p = \\frac{E}{c} = \\frac{h\\nu}{c} = \\frac{h}{\\lambda}' },
      { text: 'Rest Mass & Charge: A photon has strictly zero rest mass ($m_0 = 0$) and zero electric charge ($q = 0$), so $E$ and $B$ fields cannot deflect a photon beam.' },
      { text: 'Intensity vs Photon Energy: Increasing light intensity at fixed $\\nu$ increases the number of photons/s ($N$), leaving each photon energy $h\\nu$ unchanged; photon number need not be conserved in collisions.' }
    ],
    finalFormula: 'E = h\\nu = \\frac{hc}{\\lambda}, \\quad p = \\frac{h}{\\lambda}, \\quad m_0 = 0, \\quad q = 0',
    specialCases: ['When a photon enters a medium of index $n$, its speed ($v = c/n$) and wavelength ($\\lambda\' = \\lambda/n$) change, while frequency $\\nu$ and photon energy $h\\nu$ remain constant.']
  },
  {
    id: 'drv-11-1',
    slideRange: 'Slide 44',
    chapterNum: 11,
    chapterId: 'phy-ch-11',
    chapterTitle: 'Dual Nature of Radiation and Matter',
    subtopicId: 'phy-sub-11-3',
    title: 'Einstein’s Photoelectric Equation & Graphical Verification',
    syllabusStatus: 'Core CBSE 2026',
    importance: '3 Marks Board Staple',
    diagramId: 'photoelectric-graphs',
    setup: 'Incident photon of energy $h\\nu$ transfers its entire energy in a single all-or-none elastic quantum collision to a surface electron (work function $\\phi_0 = h\\nu_0$).',
    steps: [
      { text: 'Conservation of energy yields Einstein’s Photoelectric Equation:', equation: 'K_{\\max} = \\frac{1}{2}m v_{\\max}^2 = h\\nu - \\phi_0 = h(\\nu - \\nu_0)' },
      { text: 'Stopping potential $V_0$ brings most energetic electron ($K_{\\max}$) to rest ($K_{\\max} = e V_0$):', equation: 'V_0 = \\left(\\frac{h}{e}\\right)\\nu - \\frac{\\phi_0}{e}' }
    ],
    finalFormula: 'eV_0 = K_{\\max} = h\\nu - \\phi_0 \\quad \\implies \\quad \\text{Slope of } V_0\\text{ vs }\\nu = \\frac{h}{e}',
    specialCases: ['Slope $h/e$ is universal and identical for ALL photosensitive metals!', 'Threshold condition: emission occurs ONLY if $\\nu \\ge \\nu_0$ ($\\lambda \\le \\lambda_0$), regardless of intensity.']
  },
  {
    id: 'drv-11-2',
    slideRange: 'Slide 45',
    chapterNum: 11,
    chapterId: 'phy-ch-11',
    chapterTitle: 'Dual Nature of Radiation and Matter',
    subtopicId: 'phy-sub-11-4',
    title: 'de Broglie Wavelength of Matter Waves & Electron Accelerator Shortcut',
    syllabusStatus: 'Core CBSE 2026',
    importance: '3 Marks High-Yield Derivation + Numerical',
    diagramId: 'photoelectric-graphs',
    setup: 'Generalize photon momentum $p = E/c = h/\\lambda$ to all moving particles of mass $m$, speed $v$, kinetic energy $K$, and accelerating potential $V$.',
    steps: [
      { text: 'de Broglie relation between wavelength $\\lambda$ and linear momentum $p = mv$:', equation: '\\lambda = \\frac{h}{p} = \\frac{h}{mv}' },
      { text: 'Express momentum via kinetic energy $K = \\frac{p^2}{2m} \\implies p = \\sqrt{2mK}$ and electrostatic acceleration $K = qV$:', equation: '\\lambda = \\frac{h}{\\sqrt{2mK}} = \\frac{h}{\\sqrt{2 m q V}}' },
      { text: 'Substitute electron constants ($m = 9.1\\times 10^{-31}\\text{ kg}, q = 1.6\\times 10^{-19}\\text{ C}, h = 6.63\\times 10^{-34}\\text{ J}\\cdot\\text{s}$):', equation: '\\lambda_e = \\frac{1.227}{\\sqrt{V}}\\text{ nm} = \\frac{12.27}{\\sqrt{V}}\\text{ \\AA}' }
    ],
    finalFormula: '\\lambda = \\frac{h}{\\sqrt{2mqV}}, \\qquad \\lambda_e = \\frac{12.27}{\\sqrt{V}}\\text{ \\AA}',
    specialCases: ['For same $V$, $\\lambda_{\\text{proton}} / \\lambda_\\alpha = \\sqrt{\\frac{m_\\alpha q_\\alpha}{m_p q_p}} = \\sqrt{4 \\times 2} = 2\\sqrt{2}$.', 'Macroscopic bodies have negligible $\\lambda$ ($\\sim 10^{-34}\\text{ m}$), showing no observable diffraction.']
  },

  // =========================================================================
  // CHAPTER 12: ATOMS (Slides 46–47 + Core)
  // =========================================================================
  {
    id: 'drv-12-0',
    slideRange: 'Atoms Core 1',
    chapterNum: 12,
    chapterId: 'phy-ch-12',
    chapterTitle: 'Atoms',
    subtopicId: 'phy-sub-12-1',
    title: 'Rutherford Alpha-Particle Scattering, Closest Approach (r₀) & Impact Parameter (b)',
    syllabusStatus: 'Core CBSE 2026',
    importance: '3 Marks Guaranteed Modern Physics Derivation',
    diagramId: 'bohr-atom-spectra',
    setup: 'Alpha particle ($q_1 = +2e$, kinetic energy $K = \\frac{1}{2}mv_0^2$) from $^{214}_{83}\\text{Bi}$ approaches stationary heavy nucleus ($q_2 = +Ze$) head-on ($b = 0, \\theta = 180^\\circ$).',
    steps: [
      { text: 'At distance of closest approach $r_0$, the $\\alpha$-particle stops momentarily ($K_f = 0$) and initial kinetic energy converts entirely into electrostatic potential energy:', equation: 'K = \\frac{1}{4\\pi\\varepsilon_0}\\frac{(2e)(Ze)}{r_0} \\implies r_0 = \\frac{1}{4\\pi\\varepsilon_0}\\frac{2Ze^2}{K}' },
      { text: 'Impact parameter $b$ determines scattering angle $\\theta$:', equation: 'b = \\frac{1}{4\\pi\\varepsilon_0}\\frac{Ze^2 \\cot(\\theta/2)}{K}, \\qquad N(\\theta) \\propto \\frac{1}{\\sin^4(\\theta/2)}' },
      { text: 'Limitations of Rutherford Model: Fails to explain (1) Atomic stability (accelerating electron radiates EM waves and should collapse in $\\sim 10^{-8}\\text{ s}$), and (2) Discrete hydrogen line spectra.' }
    ],
    finalFormula: 'r_0 = \\frac{1}{4\\pi\\varepsilon_0}\\frac{2Ze^2}{K}, \\qquad b = \\frac{Ze^2 \\cot(\\theta/2)}{4\\pi\\varepsilon_0 K}',
    specialCases: ['For a head-on collision ($\\theta = 180^\\circ$), $\\cot(90^\\circ) = 0 \\implies b = 0$; $r_0$ sets an upper bound on nuclear radius ($\\sim 10^{-14}\\text{ m}$).']
  },
  {
    id: 'drv-12-1',
    slideRange: 'Slide 46',
    chapterNum: 12,
    chapterId: 'phy-ch-12',
    chapterTitle: 'Atoms',
    subtopicId: 'phy-sub-12-2',
    title: 'Bohr Model: Quantized Radius and Orbital Velocity of Hydrogen Atom',
    syllabusStatus: 'Core CBSE 2026',
    importance: '5 Marks Board Classic',
    diagramId: 'bohr-atom-spectra',
    setup: 'Electron ($m, -e$) revolves in circular orbit of radius $r$ at speed $v$ around nucleus $+Ze$. Coulomb attraction provides centripetal force, paired with Bohr’s angular momentum quantization.',
    steps: [
      { text: 'Centripetal force balance ($k = \\frac{1}{4\\pi\\varepsilon_0}$):', equation: '\\frac{m v^2}{r} = \\frac{k Z e^2}{r^2} \\implies m v^2 r = k Z e^2 \\quad \\text{--- (1)}' },
      { text: 'Bohr’s Second Postulate (Quantization of angular momentum):', equation: 'm v r = \\frac{n h}{2\\pi} \\implies v = \\frac{n h}{2\\pi m r} \\quad \\text{--- (2)}' },
      { text: 'Substitute $v$ from (2) into (1) to solve for $n^{\\text{th}}$ orbit radius $r_n$:', equation: 'r_n = \\frac{\\varepsilon_0 n^2 h^2}{\\pi m Z e^2} = \\frac{0.529\\,n^2}{Z}\\text{ \\AA} \\quad (r_n \\propto n^2)' },
      { text: 'Substitute $r_n$ back into (2) for orbital speed $v_n$:', equation: 'v_n = \\frac{Z e^2}{2\\varepsilon_0 n h} \\approx \\frac{2.18\\times 10^6 Z}{n}\\text{ m/s} \\quad (v_n \\propto 1/n)' }
    ],
    finalFormula: 'r_n = \\frac{\\varepsilon_0 n^2 h^2}{\\pi m Z e^2} = 0.529\\frac{n^2}{Z}\\text{ \\AA}, \\qquad v_n = \\frac{Z e^2}{2\\varepsilon_0 n h}',
    specialCases: ['Bohr radius $a_0 = r_1 (Z=1) = 0.529\\text{ \\AA} = 5.29\\times 10^{-11}\\text{ m}$.', 'Time period of revolution scales as $T_n \\propto r_n / v_n \\propto n^3$.']
  },
  {
    id: 'drv-12-2',
    slideRange: 'Slide 47',
    chapterNum: 12,
    chapterId: 'phy-ch-12',
    chapterTitle: 'Atoms',
    subtopicId: 'phy-sub-12-2',
    title: 'Bohr Model: Kinetic, Potential & Total Energy in nth Orbit',
    syllabusStatus: 'Core CBSE 2026',
    importance: '5 Marks Guaranteed Board Derivation',
    diagramId: 'bohr-atom-spectra',
    setup: 'Evaluate total mechanical energy $E_n = K_n + U_n$ of an electron bound in the $n^{\\text{th}}$ Bohr orbit of a hydrogen-like atom ($Z$).',
    steps: [
      { text: 'From centripetal force $\\frac{mv^2}{r} = \\frac{kZe^2}{r^2}$, kinetic energy is:', equation: 'K_n = \\frac{1}{2}mv_n^2 = \\frac{k Z e^2}{2 r_n}' },
      { text: 'Electrostatic potential energy of $+Ze$ and $-e$ at separation $r_n$ is negative:', equation: 'U_n = -\\frac{k Z e^2}{r_n} = -2 K_n' },
      { text: 'Sum for Total Energy $E_n = K_n + U_n$ and substitute $r_n = \\frac{\\varepsilon_0 n^2 h^2}{\\pi m Z e^2}$:', equation: 'E_n = -\\frac{k Z e^2}{2 r_n} = -K_n = -\\frac{m Z^2 e^4}{8 \\varepsilon_0^2 n^2 h^2}' },
      { text: 'Substituting fundamental constants gives energy in electron-volts:', equation: 'E_n = -\\frac{13.6\\,Z^2}{n^2}\\text{ eV}' }
    ],
    finalFormula: 'E_n = -\\frac{13.6\\,Z^2}{n^2}\\text{ eV} \\qquad (K_n = -E_n, \\; U_n = 2E_n)',
    specialCases: ['Hydrogen Ground State ($n=1$): $E_1 = -13.6\\text{ eV}$, $K_1 = +13.6\\text{ eV}$, $U_1 = -27.2\\text{ eV}$.', 'Negative total energy proves the electron is bound to the nucleus ($13.6\\text{ eV}$ ionization energy needed to free it).']
  },
  {
    id: 'drv-12-3',
    slideRange: 'Atoms Core 2',
    chapterNum: 12,
    chapterId: 'phy-ch-12',
    chapterTitle: 'Atoms',
    subtopicId: 'phy-sub-12-3',
    title: 'Hydrogen Spectral Series, Rydberg Formula & de Broglie Standing Wave Proof',
    syllabusStatus: 'Core CBSE 2026',
    importance: '3 Marks Guaranteed Spectral Formula + de Broglie Proof',
    diagramId: 'bohr-atom-spectra',
    setup: 'Electron transition from higher orbit $n_i$ to lower orbit $n_f$ emits photon $h\\nu = E_{n_i} - E_{n_f}$. Circular matter wave fits $n$ wavelengths around orbit circumference.',
    steps: [
      { text: 'Substitute $E_n = -\\frac{mZ^2e^4}{8\\varepsilon_0^2 n^2 h^2}$ into Bohr’s 3rd postulate $hc/\\lambda = E_{n_i} - E_{n_f}$:', equation: '\\frac{1}{\\lambda} = R Z^2 \\left(\\frac{1}{n_f^2} - \\frac{1}{n_i^2}\\right), \\qquad R = \\frac{me^4}{8\\varepsilon_0^2 c h^3} \\approx 1.097 \\times 10^7\\text{ m}^{-1}' },
      { text: 'Five Spectral Series of Hydrogen ($Z = 1$): Lyman ($n_f=1$, UV), Balmer ($n_f=2$, Visible), Paschen ($n_f=3$, IR), Brackett ($n_f=4$, IR), Pfund ($n_f=5$, Far IR).' },
      { text: 'de Broglie derivation of Bohr’s 2nd postulate (stationary standing wave along circular circumference $2\\pi r_n$):', equation: '2\\pi r_n = n\\lambda = \\frac{nh}{mv_n} \\implies m v_n r_n = \\frac{nh}{2\\pi}' }
    ],
    finalFormula: '\\frac{1}{\\lambda} = R\\left(\\frac{1}{n_f^2} - \\frac{1}{n_i^2}\\right), \\qquad 2\\pi r_n = n\\lambda',
    specialCases: ['Longest $\\lambda_{\\max}$ (1st line): $n_i = n_f + 1$. Shortest $\\lambda_{\\min}$ (series limit): $n_i = \\infty$.', 'Number of emission lines possible when jumping from level $n$: $N = \\frac{n(n-1)}{2}$.']
  },

  // =========================================================================
  // CHAPTER 13: NUCLEI
  // =========================================================================
  {
    id: 'drv-13-1',
    slideRange: 'Nuclei Core 1',
    chapterNum: 13,
    chapterId: 'phy-ch-13',
    chapterTitle: 'Nuclei',
    subtopicId: 'phy-sub-13-2',
    title: 'Constant Nuclear Density, Mass Defect & Binding Energy per Nucleon Curve',
    syllabusStatus: 'Core CBSE 2026',
    importance: '3 Marks Guaranteed Graph + Density Proof',
    diagramId: 'nuclei-binding-force',
    setup: 'Nucleus $^A_Z X$ has radius $R = R_0 A^{1/3}$ ($R_0 = 1.2\\text{ fm}$), nucleon mass $m$, constituent masses $Zm_p + (A-Z)m_n$, and observed rest mass $M$.',
    steps: [
      { text: 'Nuclear density $\\rho = \\text{Mass}/\\text{Volume}$ cancels $A$ identically:', equation: '\\rho = \\frac{mA}{\\frac{4}{3}\\pi (R_0 A^{1/3})^3} = \\frac{3m}{4\\pi R_0^3} \\approx 2.3 \\times 10^{17}\\text{ kg/m}^3 \\;(\\text{independent of } A)' },
      { text: 'Mass defect $\\Delta m$ and Nuclear Binding Energy $E_b$ ($1\\text{ u} \\equiv 931.5\\text{ MeV}$):', equation: '\\Delta m = [Z m_p + (A - Z)m_n] - M, \\qquad E_b = \\Delta m \\cdot c^2, \\qquad E_{bn} = \\frac{E_b}{A}' },
      { text: 'Binding Energy Curve: Nearly flat plateau ($\\sim 8.0\\text{–}8.75\\text{ MeV}$) for $30 < A < 170$ peaking at $^{56}_{26}\\text{Fe}$ ($8.75\\text{ MeV}$); drops for $A < 20$ and $A > 170$ ($^{238}\\text{U} \\approx 7.6\\text{ MeV}$).' }
    ],
    finalFormula: 'R = R_0 A^{1/3}, \\quad \\rho \\approx 2.3 \\times 10^{17}\\text{ kg/m}^3, \\quad E_b = \\Delta m(u) \\times 931.5\\text{ MeV}',
    specialCases: ['Both nuclear fission ($A=235 \\to$ middle $A$) and nuclear fusion ($A < 20 \\to$ higher $E_{bn}$) increase binding energy per nucleon of products, releasing exothermic energy.']
  },
  {
    id: 'drv-13-2',
    slideRange: 'Nuclei Core 2',
    chapterNum: 13,
    chapterId: 'phy-ch-13',
    chapterTitle: 'Nuclei',
    subtopicId: 'phy-sub-13-3',
    title: 'Strong Nuclear Force (U(r) Curve at 0.8 fm), Nuclear Fission & Nuclear Fusion',
    syllabusStatus: 'Core CBSE 2026',
    importance: '3 Marks Guaranteed Graph + Concept',
    diagramId: 'nuclei-binding-force',
    setup: 'Analyze nucleon-nucleon potential energy $U(r)$ vs separation $r$ and nuclear energy release via thermal fission vs thermonuclear fusion.',
    steps: [
      { text: 'From $F = -dU/dr$: potential $U(r)$ attains minimum ($\\sim -100\\text{ MeV}$) at $r_0 \\approx 0.8\\text{ fm}$; force is ATTRACTIVE for $0.8\\text{ fm} < r < 3\\text{ fm}$ and steeply REPULSIVE for $r < 0.8\\text{ fm}$.' },
      { text: 'Properties of Nuclear Force: Strongest fundamental interaction, short-ranged ($\\sim 2\\text{–}3\\text{ fm}$), charge-independent ($F_{nn} \\approx F_{pp} \\approx F_{pn}$), saturated, spin-dependent.' },
      { text: 'Fission vs Fusion Equations:', equation: '{^{235}_{92}\\text{U}} + {^1_0\\text{n}} \\to {^{141}_{56}\\text{Ba}} + {^{92}_{36}\\text{Kr}} + 3\\,{^1_0\\text{n}} + 200\\text{ MeV}; \\qquad 4\\,{^1_1\\text{H}} + 2e^- \\to {^4_2\\text{He}} + 2\\nu_e + 26.7\\text{ MeV}' }
    ],
    finalFormula: 'r_0 \\approx 0.8\\text{ fm} \\; (U_{\\min}); \\quad Q_{\\text{fission}} \\approx 200\\text{ MeV}, \\quad Q_{\\text{fusion}} \\approx 26.7\\text{ MeV} \\;(\\approx 6.7\\text{ MeV/u})',
    specialCases: ['Slow thermal neutrons easily split $^{235}\\text{U}$ (zero Coulomb barrier), whereas light nuclei fusion requires $T \\sim 10^7\\text{ K}$ to overcome Coulomb repulsion.']
  },

  // =========================================================================
  // CHAPTER 14: SEMICONDUCTOR ELECTRONICS
  // =========================================================================
  {
    id: 'drv-14-1',
    slideRange: 'Semiconductors Core 1',
    chapterNum: 14,
    chapterId: 'phy-ch-14',
    chapterTitle: 'Semiconductor Electronics',
    subtopicId: 'phy-sub-14-2',
    title: 'Classification by Energy Bands (E_g) & Intrinsic vs Extrinsic (n-type / p-type)',
    syllabusStatus: 'Core CBSE 2026',
    importance: '3 Marks Board Band Diagram & Doping Question',
    diagramId: 'pn-junction-rectifier',
    setup: 'Compare crystalline solids by forbidden band gap $E_g = E_C - E_V$, and doped Group-14 crystals (Si/Ge) obeying thermal equilibrium Mass Action Law.',
    steps: [
      { text: 'Energy Band Classification: Metals ($E_g \\approx 0$, overlapping bands), Semiconductors ($E_g < 3\\text{ eV}$: Si $1.1\\text{ eV}$, Ge $0.72\\text{ eV}$), Insulators ($E_g > 3\\text{ eV}$, diamond $5.4\\text{ eV}$).' },
      { text: 'Intrinsic Semiconductor: Pure Si/Ge where thermal bond-breaking yields $n_e = n_h = n_i$ and $I = I_e + I_h$; acts as insulator at $0\\text{ K}$ and $\\rho$ decreases as $T$ rises.' },
      { text: 'Extrinsic Semiconductors obey Mass Action Law ($n_e n_h = n_i^2$): n-type (pentavalent P/As/Sb, donor $E_D$ below $E_C$, $n_e \\gg n_h$) vs p-type (trivalent B/Al/In/Ga, acceptor $E_A$ above $E_V$, $n_h \\gg n_e$).', equation: 'n_e \\cdot n_h = n_i^2, \\qquad \\sigma = e(n_e \\mu_e + n_h \\mu_h)' }
    ],
    finalFormula: 'E_g(\\text{Si}) = 1.1\\text{ eV}, \\; E_g(\\text{Ge}) = 0.72\\text{ eV}; \\qquad n_e \\cdot n_h = n_i^2',
    specialCases: ['Both n-type and p-type semiconductors remain 100% electrically neutral overall because every dopant atom is neutral.']
  },
  {
    id: 'drv-14-2',
    slideRange: 'Semiconductors Core 2',
    chapterNum: 14,
    chapterId: 'phy-ch-14',
    chapterTitle: 'Semiconductor Electronics',
    subtopicId: 'phy-sub-14-3',
    title: 'p-n Junction Formation (Diffusion & Drift) and Forward / Reverse V–I Curve',
    syllabusStatus: 'Core CBSE 2026',
    importance: '3 Marks / 5 Marks Guaranteed Diode Question',
    diagramId: 'pn-junction-rectifier',
    setup: 'Metallurgical p-n junction reaches equilibrium barrier potential $V_0$ ($0.7\\text{ V}$ Si, $0.3\\text{ V}$ Ge) and responds asymmetrically to forward vs reverse DC bias.',
    steps: [
      { text: 'Two junction formation processes: (1) Diffusion of majority carriers ($p \\to n$ holes, $n \\to p$ electrons) uncovering immobile ions (depletion width $W$); (2) Drift of minority carriers under barrier field ($n \\to p$) until $I_{\\text{diff}} = I_{\\text{drift}}$.' },
      { text: 'Forward Bias ($p \\to +, n \\to -$): Effective barrier drops to $V_0 - V$, depletion width narrows, majority current grows rapidly in $\\text{mA}$ above knee $V_k$ with small dynamic resistance:', equation: 'r_d = \\frac{\\Delta V}{\\Delta I} \\sim 10\\text{–}20\\ \\Omega' },
      { text: 'Reverse Bias ($p \\to -, n \\to +$): Effective barrier rises to $V_0 + V$, depletion width widens, majority diffusion stops, leaving tiny voltage-independent minority drift current ($\\sim \\mu\\text{A}$) until breakdown.' }
    ],
    finalFormula: '\\text{Equilibrium: } I_{\\text{diff}} = I_{\\text{drift}}; \\qquad V_{\\text{eff,FB}} = V_0 - V \\;(\\text{mA}), \\; V_{\\text{eff,RB}} = V_0 + V \\;(\\mu\\text{A})',
    specialCases: ['Watch axes when reading V–I graphs: Forward current is in milliampere ($10^{-3}\\text{ A}$) while Reverse current is in microampere ($10^{-6}\\text{ A}$).']
  },
  {
    id: 'drv-14-3',
    slideRange: 'Semiconductors Core 3',
    chapterNum: 14,
    chapterId: 'phy-ch-14',
    chapterTitle: 'Semiconductor Electronics',
    subtopicId: 'phy-sub-14-4',
    title: 'p-n Junction Diode as Half-Wave Rectifier & Full-Wave Rectifier (+ Filter)',
    syllabusStatus: 'Core CBSE 2026',
    importance: '5 Marks Guaranteed Circuit + Waveform Derivation',
    diagramId: 'pn-junction-rectifier',
    setup: 'AC mains voltage $V = V_m\\sin\\omega t$ stepped down via transformer feeds either a single diode (HWR) or two diodes $D_1, D_2$ with centre-tap secondary (FWR) into load $R_L$.',
    steps: [
      { text: 'Half-Wave Rectifier (1 diode): Conducts only in positive half-cycle ($V > 0$) and blocks negative half-cycle $\\implies$ discontinuous DC pulses at fundamental frequency:', equation: 'f_{\\text{out,HWR}} = f_{\\text{in}} \\quad (50\\text{ Hz mains} \\to 50\\text{ Hz output})' },
      { text: 'Centre-Tap Full-Wave Rectifier (2 diodes $D_1, D_2$): $D_1$ conducts in positive half-cycle and $D_2$ conducts in negative half-cycle; BOTH drive current through $R_L$ in the SAME direction $X \\to Y$:', equation: 'f_{\\text{out,FWR}} = 2 f_{\\text{in}} \\quad (50\\text{ Hz mains} \\to 100\\text{ Hz ripple})' },
      { text: 'Capacitor Filter ($C$ in PARALLEL across $R_L$): Charges to peak $V_m$ and discharges slowly through $R_L$ ($\\tau = R_L C \\gg T$), bypassing AC ripples ($X_C = 1/\\omega C$) to give steady DC.' }
    ],
    finalFormula: 'f_{\\text{HWR}} = f_{\\text{in}}, \\qquad f_{\\text{FWR}} = 2 f_{\\text{in}}, \\qquad \\text{Filter Capacitor } C \\parallel R_L',
    specialCases: ['Always draw full AC input wave cleanly above unidirectional output pulses, showing $T/2$ spacing for full-wave vs $T$ spacing for half-wave.']
  }
];

export const getDerivationsByChapter = (chapterId) =>
  PHYSICS_DERIVATIONS_REFERENCE.filter((d) => d.chapterId === chapterId);

export const getDerivationsBySubtopic = (subtopicId) =>
  PHYSICS_DERIVATIONS_REFERENCE.filter((d) => d.subtopicId === subtopicId);
