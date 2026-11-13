// Remaining NCERT Class 12 Physics Volume 1 Structured Notes (38 subtopics completing Ch 1–8)
// Ensures 100% structured note coverage across all 63 Vol 1 subtopics alongside structuredNotesData.js

export const PHYSICS_VOL1_REMAINING_STRUCTURED_NOTES = {
  // CHAPTER 1 MISSING SUBTOPICS: 1-3, 1-6, 1-8, 1-9, 1-10
  'phy-sub-1-3': {
    definitions: [
      {
        term: 'Electric Field Due to a Point Charge',
        definition: 'The electrostatic force experienced per unit positive test charge placed at distance $r$ from source charge $q$: $\\vec{E}(r) = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q}{r^2} \\hat{r}$. For $q > 0$, $\\vec{E}$ is radially outward; for $q < 0$, $\\vec{E}$ is radially inward.'
      },
      {
        term: 'Superposition Principle for Electric Fields',
        definition: 'The net electric field at a point due to a system of discrete charges $q_1, q_2, \\dots, q_n$ is the vector sum of fields produced by each charge independently: $\\vec{E}_{\\text{net}} = \\sum_{i=1}^n \\frac{1}{4\\pi\\varepsilon_0} \\frac{q_i}{r_i^2} \\hat{r}_i$.'
      }
    ],
    keyPoints: [
      '• <strong>Radial Symmetry & Inverse-Square Law:</strong> $E \\propto 1/r^2$ gives spherical symmetry in field magnitude around an isolated point charge; plotting $E$ vs $1/r^2$ yields a straight line of slope $kq$.',
      '• <strong>Null Point Rule:</strong> For two like charges $q_1, q_2$ separated by $d$, the zero-field (null) point lies BETWEEN them closer to the smaller charge at $x = \\frac{d}{1 + \\sqrt{q_2/q_1}}$. For unlike charges, it lies OUTSIDE on the side of the smaller-magnitude charge.'
    ],
    extraPoints: [
      '• In a medium of dielectric constant $K$, $E_{\\text{med}} = E_{\\text{vac}} / K$ because induced dipole charges oppose the external field.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Null Point Location Shortcut',
      phrase: 'Like charges → Null point INSIDE (near weaker charge) | Unlike charges → Null point OUTSIDE (near weaker |q|)',
      explanation: 'Saves 2–3 minutes of quadratic solving in board numericals.'
    },
    commonlyMadeErrors: [
      {
        error: 'Adding electric fields from two charges algebraically without checking directions.',
        tip: 'Electric field is a VECTOR. Always draw arrows from positive source charges (away) and toward negative source charges (towards) before taking components or vector sum.',
        penalty: 'Full numerical credit lost in superposition problems.'
      }
    ],
    assertionReason: {
      assertion: 'The electric field due to a point charge has spherical symmetry around the charge.',
      reason: 'The magnitude of electric field $E = \\frac{1}{4\\pi\\varepsilon_0}\\frac{|q|}{r^2}$ depends solely on the radial distance $r$ from the charge.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Equal distances in all directions experience equal field magnitude.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2020',
      frequency: 'High Frequency',
      typicalMarks: '2–3 Marks',
      questionTypes: 'Null point calculation, net E at vertex of triangle/square, E vs 1/r² graph comparison',
      hotTopic: 'Vector superposition and null point location'
    }
  },

  'phy-sub-1-6': {
    definitions: [
      {
        term: 'Axial Electric Field of a Dipole',
        definition: 'Electric field at distance $r$ along the axis passing through $-q$ and $+q$ (separation $2a$): $E_{\\text{axial}} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{2pr}{(r^2 - a^2)^2} \\xrightarrow{r \\gg a} \\frac{1}{4\\pi\\varepsilon_0} \\frac{2p}{r^3}$ directed parallel to dipole moment $\\vec{p}$ ($-q \\to +q$).'
      },
      {
        term: 'Equatorial Electric Field of a Dipole',
        definition: 'Electric field on the perpendicular bisector of the dipole at distance $r$: $E_{\\text{eq}} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{p}{(r^2 + a^2)^{3/2}} \\xrightarrow{r \\gg a} \\frac{1}{4\\pi\\varepsilon_0} \\frac{p}{r^3}$ directed ANTIPARALLEL to $\\vec{p}$.'
      }
    ],
    keyPoints: [
      '• <strong>Golden Ratio Result:</strong> For a short electric dipole ($r \\gg a$) at the same distance $r$, $\\frac{E_{\\text{axial}}}{E_{\\text{eq}}} = 2 : 1$, and $\\vec{E}_{\\text{axial}} = -2\\vec{E}_{\\text{eq}}$ in vector form.',
      '• <strong>Derivation Crucial Step:</strong> On the equatorial line, vertical components $E_+ \\sin\\theta$ and $E_- \\sin\\theta$ cancel out while horizontal components $E_+ \\cos\\theta + E_- \\cos\\theta$ add up toward $-q$ (opposite to $\\vec{p}$).'
    ],
    extraPoints: [
      '• Electric field of an isolated monopole falls as $1/r^2$, whereas a short dipole falls faster as $1/r^3$ because the two opposite charges nearly cancel at large $r$.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: '2 : 1 Dipole Rule & Direction',
      phrase: 'Axial = 2kp/r³ (ALONG p⃗) | Equatorial = kp/r³ (OPPOSITE to p⃗) → Angle between E_axial and E_eq is 180°!',
      explanation: 'Tested frequently in 1M MCQs and 3M SlideShare board derivations.'
    },
    commonlyMadeErrors: [
      {
        error: 'Writing equatorial electric field in the same direction as $\\vec{p}$ or claiming angle between $\\vec{E}_{\\text{axial}}$ and $\\vec{E}_{\\text{eq}}$ is 90°.',
        tip: 'Dipole moment $\\vec{p}$ points from $-q$ to $+q$, whereas $\\vec{E}_{\\text{eq}}$ points from $+q$ side towards $-q$ side — strictly antiparallel ($180^\\circ$ to $\\vec{p}$ and $\\vec{E}_{\\text{axial}}$).',
        penalty: 'Loss of 1 mark on vector direction.'
      }
    ],
    assertionReason: {
      assertion: 'The electric field of a short electric dipole falls off more rapidly ($\\propto 1/r^3$) than that of a single point charge ($\\propto 1/r^2$).',
      reason: 'At large distances, the opposite fields of $+q$ and $-q$ largely cancel each other, leaving only a residual field proportional to dipole separation $2a$.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Multipole expansion makes a neutral dipole decay as $1/r^3$.'
    },
    examTrend: {
      pastYears: 'CBSE 2025, 2024, 2023, 2020, 2019',
      frequency: '99% Guaranteed 3M Derivation',
      typicalMarks: '3 Marks',
      questionTypes: 'Derive axial/equatorial electric field of a dipole; find ratio E_axial/E_eq',
      hotTopic: 'Slide 4–5 Axial & Equatorial dipole derivations'
    }
  },

  'phy-sub-1-8': {
    definitions: [
      {
        term: 'Electric Flux ($\\Phi_E$)',
        definition: 'A scalar measure of total electric field lines passing normally through a surface of area vector $\\Delta\\vec{S}$: $\\Phi_E = \\int \\vec{E} \\cdot d\\vec{S} = \\int E\\, dS \\cos\\theta$, where $\\theta$ is the angle between $\\vec{E}$ and outward area normal $\\hat{n}$. SI unit: $\\text{N m}^2\\text{ C}^{-1}$ or $\\text{V m}$.'
      }
    ],
    keyPoints: [
      '• <strong>Sign & Zero-Flux Cases:</strong> Outward flux ($\\theta < 90^\\circ$) is positive; inward flux ($\\theta > 90^\\circ$) is negative. When electric field is parallel to the surface plane, the area normal $\\hat{n} \\perp \\vec{E}$ ($\\theta = 90^\\circ$), so $\\Phi_E = 0$.',
      '• <strong>Angle Trap:</strong> Always check whether the given angle $\\alpha$ is with the SURFACE PLANE or with the NORMAL! If $\\alpha$ is with the plane, $\\theta = 90^\\circ - \\alpha$, so use $EA\\sin\\alpha$.'
    ],
    extraPoints: [
      '• Net flux through any closed surface containing ZERO net charge in a uniform electric field is ALWAYS zero ($\\Phi_{\\text{in}} + \\Phi_{\\text{out}} = 0$).'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Normal Vector Trap Guard',
      phrase: 'Plane normal $\\hat{n}$ decides $\\theta$: Field in plane → $\\theta = 90^\\circ$ → ZERO Flux!',
      explanation: 'Prevents the #1 sin/cos confusion in electric flux numericals.'
    },
    commonlyMadeErrors: [
      {
        error: 'Substituting the angle made with the plane directly into $EA\\cos\\theta$.',
        tip: 'In $\\Phi_E = EA\\cos\\theta$, $\\theta$ is ALWAYS between $\\vec{E}$ and the area NORMAL $\\hat{n}$ (which points outward perpendicular to the surface).',
        penalty: 'Wrong numerical value and formula credit lost.'
      }
    ],
    assertionReason: {
      assertion: 'The net electric flux leaving a closed cube placed in a uniform electric field is zero.',
      reason: 'Number of field lines entering one face of the cube equals the number of field lines leaving the opposite face.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Zero enclosed charge implies $\\Phi_{\\text{net}} = 0$.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022',
      frequency: 'High Frequency',
      typicalMarks: '2–3 Marks',
      questionTypes: 'Cube in non-uniform E = αx î flux problem; inclined square sheet flux',
      hotTopic: 'Cube flux with position-dependent field'
    }
  },

  'phy-sub-1-9': {
    definitions: [
      {
        term: "Gauss's Law in Electrostatics",
        definition: 'The total electric flux through any closed Gaussian surface in vacuum is equal to $1/\\varepsilon_0$ times the algebraic sum of charges enclosed inside it: $\\Phi_E = \\oint \\vec{E}\\cdot d\\vec{S} = \\frac{q_{\\text{enc}}}{\\varepsilon_0}$.'
      }
    ],
    keyPoints: [
      '• <strong>Independent of Size & Shape:</strong> Doubling the radius of a spherical Gaussian surface or replacing it with a cube does NOT change net flux $\\Phi_E$ as long as enclosed charge $q_{\\text{enc}}$ is unchanged.',
      '• <strong>Crucial Subtlety (Internal vs External Charges):</strong> In $\\oint \\vec{E}\\cdot d\\vec{S} = q_{\\text{enc}}/\\varepsilon_0$, $\\vec{E}$ on the LHS is the field due to ALL charges (both inside and outside), whereas $q_{\\text{enc}}$ on the RHS includes ONLY enclosed charges!'
    ],
    extraPoints: [
      '• If a charge $q$ is placed at the centre of one face of a cube (or corner of a cube), complete symmetry with 2 cubes (giving $q/2\\varepsilon_0$) or 8 cubes (giving $q/8\\varepsilon_0$) yields the flux through the cube.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Cube Symmetry Flux Fractions',
      phrase: 'Centre of Cube = q/ε₀ | Face Centre = q/2ε₀ | Edge Centre = q/4ε₀ | Corner = q/8ε₀',
      explanation: 'Instant 1-mark MCQ shortcut by symmetry of identical cubes enclosing q.'
    },
    commonlyMadeErrors: [
      {
        error: 'Thinking electric field $\\vec{E}$ everywhere on the Gaussian surface depends only on enclosed charges.',
        tip: 'Flux $\\Phi_E$ depends only on $q_{\\text{enc}}$, NOT outside charges; however $\\vec{E}$ at individual points on the surface is the superposition of ALL charges inside and outside.',
        penalty: 'Loss of 1 mark in conceptual/A-R questions.'
      }
    ],
    assertionReason: {
      assertion: 'Total electric flux through a closed surface containing an electric dipole is zero.',
      reason: 'The net charge enclosed by a closed surface surrounding an electric dipole is $+q + (-q) = 0$.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Since $q_{\\text{enc}} = 0$, $\\Phi_E = 0$ regardless of dipole orientation.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2021',
      frequency: 'Very High Frequency',
      typicalMarks: '2–3 Marks',
      questionTypes: 'Concentric spheres flux ratio S1:S2; charge above square centre (cone/cube symmetry)',
      hotTopic: 'Symmetry flux problems & external vs internal charge distinction'
    }
  },

  'phy-sub-1-10': {
    definitions: [
      {
        term: "Deducing Coulomb's Law from Gauss's Law",
        definition: 'Considering a spherical Gaussian surface of radius $r$ centred at point charge $q_1$: $\\oint \\vec{E}\\cdot d\\vec{S} = E(4\\pi r^2) = \\frac{q_1}{\\varepsilon_0} \\implies E = \\frac{q_1}{4\\pi\\varepsilon_0 r^2}$. Force on a test charge $q_2$ at distance $r$ is $F = q_2 E = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q_1 q_2}{r^2}$.'
      }
    ],
    keyPoints: [
      '• <strong>Proof Steps:</strong> Choose concentric sphere of radius $r$ around $q_1$ → by symmetry $E$ is constant in magnitude and radially outward everywhere ($\\theta = 0^\\circ$ with $d\\vec{S}$) → integrate $\\int dS = 4\\pi r^2$ → obtain $E$ → multiply by $q_2$.',
      '• <strong>Validity of Gauss Law:</strong> Gauss’s law holds strictly ONLY because electrostatic force obeys an exact inverse-square ($1/r^2$) law so that $r^2$ in $4\\pi r^2$ cancels $1/r^2$ in $E$.'
    ],
    extraPoints: [
      '• Both laws are mathematically equivalent in electrostatics, though Gauss’s law remains valid even for moving charges (as one of Maxwell’s four equations).'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Sphere Symmetry 3-Line Proof',
      phrase: 'Sphere radius r → $\\vec{E} \\parallel d\\vec{S}$ ($\\cos 0^\\circ = 1$) → $E(4\\pi r^2) = q_1/\\varepsilon_0$ → $F = q_2 E$',
      explanation: 'Slide 8 derivation — cleanly earns full 2 marks in 4 lines.'
    },
    commonlyMadeErrors: [
      {
        error: 'Pulling $E$ out of the surface integral without justifying why $E$ is uniform and parallel to $d\\vec{S}$.',
        tip: 'Explicitly write "By spherical symmetry, $|\\vec{E}|$ has the same magnitude everywhere on the sphere and points radially along $d\\vec{S}$ ($\\theta = 0^\\circ$)" to get full derivation marks.',
        penalty: '0.5 mark deducted in CBSE marking scheme.'
      }
    ],
    assertionReason: {
      assertion: "Gauss's law in electrostatics is valid only if the electrostatic field varies inversely as the square of distance.",
      reason: 'The surface area of a sphere scales as $r^2$, which cancels the $1/r^2$ dependence of $E$ so total flux remains independent of radius.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Any deviation from $1/r^2$ would make flux depend on Gaussian surface radius.'
    },
    examTrend: {
      pastYears: 'CBSE 2023, 2020',
      frequency: 'Medium-High Frequency',
      typicalMarks: '2 Marks',
      questionTypes: "Deduce Coulomb's law using Gauss's theorem",
      hotTopic: 'Step-by-step symmetry justification in Gauss → Coulomb proof'
    }
  },

  // CHAPTER 2 MISSING SUBTOPICS: 2-1, 2-2, 2-4, 2-5, 2-6, 2-8
  'phy-sub-2-1': {
    definitions: [
      {
        term: 'Electric Potential ($V$) & Potential Difference ($\\Delta V$)',
        definition: 'Work done per unit positive test charge by an external agent in bringing it slowly (without acceleration) from infinity to a point: $V = \\frac{W_{\\infty \\to P}}{q_0}$. Potential difference $\\Delta V = V_B - V_A = \\frac{W_{AB}}{q_0}$. SI unit: $\\text{volt (V)} = \\text{J C}^{-1}$ (scalar).'
      },
      {
        term: 'Relation Between Electric Field and Potential Gradient',
        definition: 'Electric field is the negative spatial gradient of electric potential: $E = -\\frac{dV}{dr}$, showing that $\\vec{E}$ always points in the direction of DECREASING potential.'
      }
    ],
    keyPoints: [
      '• <strong>Path Independence:</strong> Since electrostatic force is conservative, work done $W = q(V_B - V_A)$ depends ONLY on initial and final potentials and is zero around any closed loop.',
      '• <strong>Two Consequences of $E = -dV/dr$:</strong> (1) Magnitude of $E$ equals steepness of $V$ with distance; (2) Moving along an electric field line drops potential ($V_A > V_B$ if lines go $A \\to B$).'
    ],
    extraPoints: [
      '• Electron-volt ($1\\text{ eV} = 1.6 \\times 10^{-19}\\text{ J}$) is a unit of ENERGY (not potential!), equal to kinetic energy gained by $1e$ accelerated across $1\\text{ V}$.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Field Points Downhill in V',
      phrase: 'Electric Field goes from HIGH V → LOW V ($E = -dV/dr$); Negative sign = downhill drop!',
      explanation: 'Resolves sign comparison questions on test charges instantly.'
    },
    commonlyMadeErrors: [
      {
        error: 'Omitting "slowly / without acceleration / by external force" in the NCERT definition of potential.',
        tip: 'CBSE marking scheme specifically looks for "without acceleration (or quasi-statically)" so kinetic energy change $\\Delta K = 0$.',
        penalty: '0.5 mark deduction on 1M/2M definition.'
      }
    ],
    assertionReason: {
      assertion: 'Work done in moving a test charge between two points in an electrostatic field is independent of the path followed.',
      reason: 'The electrostatic field is a conservative vector field whose line integral depends only on end-point potentials.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Conservative force implies $\\oint \\vec{E}\\cdot d\\vec{l} = 0$.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2021',
      frequency: 'High Frequency',
      typicalMarks: '2 Marks',
      questionTypes: 'Relate E = -dV/dr, identify sign of q(VA-VB), work done by field vs external agent',
      hotTopic: 'Comparison of V and E for concentric shells / graphs vs r and 1/r'
    }
  },

  'phy-sub-2-2': {
    definitions: [
      {
        term: 'Potential Due to Point Charge & Dipole',
        definition: 'Due to a point charge $q$: $V = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q}{r}$. Due to an electric dipole at general polar coordinates $(r, \\theta)$ ($r \\gg a$): $V = \\frac{1}{4\\pi\\varepsilon_0} \\frac{p\\cos\\theta}{r^2} = \\frac{\\vec{p}\\cdot\\hat{r}}{4\\pi\\varepsilon_0 r^2}$.'
      }
    ],
    keyPoints: [
      '• <strong>Axial vs Equatorial Potential:</strong> On the axial line ($\\theta = 0^\\circ$ or $180^\\circ$), $V = \\pm \\frac{kp}{r^2}$; on the equatorial plane ($\\theta = 90^\\circ$), $V = 0$ EVERYWHERE even though $E_{\\text{eq}} \\ne 0$!',
      '• <strong>Power-Law Comparison:</strong> For a point charge $V \\propto 1/r$ and $E \\propto 1/r^2$; for a short dipole $V \\propto 1/r^2$ and $E \\propto 1/r^3$. On a graph of $V$ vs $1/r$ for two point charges $q_1, q_2$, steeper slope means larger $|q|$.'
    ],
    extraPoints: [
      '• At any point where $V = 0$ (such as midpoint between $+q$ and $-q$ or equatorial plane), electric field $E$ need NOT be zero!'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Dipole Equatorial Surprise',
      phrase: 'At Equatorial point of Dipole: V = 0, but E ≠ 0! | Inside Charged Hollow Shell: E = 0, but V = constant ≠ 0!',
      explanation: 'Classic pair of board counter-examples proving E=0 and V=0 are independent.'
    },
    commonlyMadeErrors: [
      {
        error: 'Assuming $V = 0$ guarantees $E = 0$ (or vice versa).',
        tip: 'Since $E = -dV/dr$, a region of CONSTANT non-zero $V$ has $E = 0$ (inside a conducting shell), whereas a point where $V$ crosses zero with non-zero slope has $V = 0, E \\ne 0$ (equatorial plane of a dipole)!',
        penalty: 'Loss of 1–2 marks in reasoning questions.'
      }
    ],
    assertionReason: {
      assertion: 'Work done in moving a test charge along the equatorial line of an electric dipole is zero.',
      reason: 'Electric potential at every point on the equatorial plane of an electric dipole is zero.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Equidistance from $+q$ and $-q$ makes $V = kq/r - kq/r = 0$ everywhere on the plane.'
    },
    examTrend: {
      pastYears: 'CBSE 2025, 2024, 2023, 2020',
      frequency: '98% Guaranteed Board Concept',
      typicalMarks: '2–3 Marks',
      questionTypes: 'Derive V at general point of dipole; V vs 1/r graph slope comparison; zero-potential point between two unlike charges',
      hotTopic: 'Dipole potential derivation (Slide 11) and zero-V points'
    }
  },

  'phy-sub-2-4': {
    definitions: [
      {
        term: 'Potential Energy of a Dipole in Uniform Electric Field',
        definition: 'Work done by an external torque in rotating a dipole $\\vec{p}$ from reference angle $\\theta_1 = 90^\\circ$ to $\\theta$: $U(\\theta) = -pE\\cos\\theta = -\\vec{p}\\cdot\\vec{E}$. General work done rotating from $\\theta_1 \\to \\theta_2$: $W = U_2 - U_1 = pE(\\cos\\theta_1 - \\cos\\theta_2)$.'
      }
    ],
    keyPoints: [
      '• <strong>Equilibrium States ($\\tau = pE\\sin\\theta = 0$):</strong>\n  1. $\\theta = 0^\\circ$ ($\\vec{p} \\parallel \\vec{E}$): $U_{\\min} = -pE$ → <strong>Stable Equilibrium</strong>.\n  2. $\\theta = 180^\\circ$ ($\\vec{p}$ antiparallel $\\vec{E}$): $U_{\\max} = +pE$ → <strong>Unstable Equilibrium</strong>.\n  3. $\\theta = 90^\\circ$: $U = 0$, $\\tau_{\\max} = pE$.',
      '• <strong>Two-Charge Potential Energy:</strong> $U = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q_1 q_2}{r_{12}}$ (positive for like charges = repulsion, negative for unlike charges = attraction); external field adds $q_1 V(r_1) + q_2 V(r_2)$.'
    ],
    extraPoints: [
      '• Rotating a dipole from stable equilibrium ($\\theta_1 = 0^\\circ$) to unstable equilibrium ($\\theta_2 = 180^\\circ$) requires maximum work $W = 2pE$.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Stable = Minimum U (−pE)',
      phrase: 'cos 0° gives U = −pE (STABLE) | cos 180° gives U = +pE (UNSTABLE) | Work 0°→180° = 2pE',
      explanation: 'Direct formula from Slide 13 and MLL Ch 2.'
    },
    commonlyMadeErrors: [
      {
        error: 'Writing $U = pE(\\cos\\theta_2 - \\cos\\theta_1)$ with reversed sign for external work.',
        tip: 'Always check against physical sense: rotating AWAY from stable equilibrium ($0^\\circ \\to 180^\\circ$) must require POSITIVE work: $pE(\\cos 0^\\circ - \\cos 180^\\circ) = +2pE$.',
        penalty: 'Sign error loses 1 mark.'
      }
    ],
    assertionReason: {
      assertion: 'An electric dipole is in stable equilibrium when its dipole moment is parallel to a uniform electric field.',
      reason: 'In this orientation ($\\theta = 0^\\circ$), both net torque is zero and potential energy $U = -pE$ is minimum.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Any small angular displacement creates a restoring torque back toward $\\theta = 0^\\circ$.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022',
      frequency: 'High Frequency',
      typicalMarks: '2–3 Marks',
      questionTypes: 'Derive U = -pE cosθ; identify stable/unstable equilibrium; work done rotating dipole',
      hotTopic: 'Stable vs unstable equilibrium work ($2pE$)'
    }
  },

  'phy-sub-2-5': {
    definitions: [
      {
        term: 'Dielectrics (Polar vs Non-Polar Molecules)',
        definition: 'Insulating materials that transmit electric effects without conducting. <em>Non-polar molecules</em> ($\\text{H}_2, \\text{O}_2, \\text{CO}_2, \\text{CH}_4$) have coincident positive/negative charge centres (zero permanent dipole moment). <em>Polar molecules</em> ($\\text{HCl}, \\text{H}_2\\text{O}, \\text{NH}_3$) have permanent dipole moment due to asymmetric charge distribution.'
      },
      {
        term: 'Electrostatic Shielding',
        definition: 'The electric field inside the cavity of a conductor is ALWAYS zero ($E_{\\text{inside}} = 0$), protecting sensitive instruments from external electric fields (Faraday cage / car during lightning).'
      }
    ],
    keyPoints: [
      '• <strong>Dielectric Field Reduction:</strong> Inside an external field $\\vec{E}_0$, induced surface charges on a dielectric create an opposing internal field $\\vec{E}_i$, reducing the net internal field to $E = E_0 - E_i = E_0 / K$ ($K > 1$).',
      '• <strong>Conductor vs Dielectric:</strong> For a metal conductor $E_i = E_0$ so $E_{\\text{inside}} = 0$ and dielectric constant $K = \\infty$; for a dielectric $E_i < E_0$ so net internal field is reduced by factor $K$ but non-zero.'
    ],
    extraPoints: [
      '• Electric field lines always meet a conductor surface at $90^\\circ$ and never penetrate inside a charged conductor in electrostatic equilibrium.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'CO2 Symmetry Exception',
      phrase: 'Non-Polar = Symmetric (CO₂, CH₄, N₂, O₂) | Polar = Bent/Asymmetric (H₂O, HCl, NH₃)',
      explanation: 'CO₂ is linear symmetric so bond dipoles cancel — frequent 1M question!'
    },
    commonlyMadeErrors: [
      {
        error: 'Classifying $\\text{CO}_2$ as polar or saying dielectrics reduce internal electric field to zero.',
        tip: 'Dielectrics only REDUCE the field to $E_0/K$; ONLY conductors cancel the internal field completely ($E_{\\text{inside}} = 0$) in electrostatics.',
        penalty: 'Loss of 1 mark.'
      }
    ],
    assertionReason: {
      assertion: 'It is safer to sit inside a closed metallic car than to stand under a tree during a lightning thunderstorm.',
      reason: 'Because of electrostatic shielding, the electric field inside the hollow metallic body of the car remains zero.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Charges reside on the outer conducting shell and discharge harmlessly to the ground.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2022, 2020',
      frequency: 'Medium-High Frequency',
      typicalMarks: '2 Marks',
      questionTypes: 'Distinguish polar & non-polar dielectrics with examples; explain electrostatic shielding',
      hotTopic: 'Behaviour of conductor vs dielectric in external E'
    }
  },

  'phy-sub-2-6': {
    definitions: [
      {
        term: 'Polarization ($\\vec{P}$) & Electric Susceptibility ($\\chi_e$)',
        definition: 'Polarization is the induced dipole moment per unit volume of a dielectric: $\\vec{P} = \\varepsilon_0 \\chi_e \\vec{E}$ (for linear isotropic dielectrics), where $\\chi_e$ is a dimensionless constant called electric susceptibility.'
      },
      {
        term: 'Relation Between $K$ and $\\chi_e$',
        definition: 'Dielectric constant $K = 1 + \\chi_e$, and induced bound surface charge density is $\\sigma_p = |\\vec{P}| = \\sigma_f (1 - 1/K)$.'
      }
    ],
    keyPoints: [
      '• <strong>Dielectric Slab Capacitance Effect:</strong> Inserting a dielectric slab of thickness $t < d$ and constant $K$ between parallel plates gives $C = \\frac{\\varepsilon_0 A}{d - t(1 - 1/K)}$.',
      '• <strong>Dielectric Strength vs Dielectric Constant:</strong> Dielectric constant $K$ is dimensionless; Dielectric strength is the MAXIMUM electric field (in $\\text{V/m}$ or $\\text{kV/mm}$) a dielectric can withstand without insulation breakdown.'
    ],
    extraPoints: [
      '• For air at STP, dielectric strength is $\\approx 3 \\times 10^6\\text{ V/m}$.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'K vs χ_e & Bound Charge',
      phrase: 'K = 1 + χₑ | σ_bound = σ_free (1 − 1/K) | Conducting slab (K=∞): C = ε₀A/(d − t)',
      explanation: 'Putting K=∞ immediately gives the conducting-slab capacitance formula!'
    },
    commonlyMadeErrors: [
      {
        error: 'Confusing dielectric constant $K$ (dimensionless ratio) with dielectric strength ($\\text{V/m}$ breakdown limit).',
        tip: '$K = C/C_0 = E_0/E$ has no units; dielectric strength has units of electric field ($\\text{V/m}$).',
        penalty: 'Loss of 1 mark in 1M/2M conceptual items.'
      }
    ],
    assertionReason: {
      assertion: 'Inserting a metallic slab of thickness $t < d$ increases capacitance to $C = \\frac{\\varepsilon_0 A}{d - t}$.',
      reason: 'Electric field inside a conductor is zero ($K = \\infty$), reducing the effective gap between capacitor plates to $(d - t)$.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Special case of the dielectric slab formula as $K \\to \\infty$.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2019',
      frequency: 'High Frequency',
      typicalMarks: '3 Marks',
      questionTypes: 'Derive capacitance with dielectric slab t<d; find induced surface charge density σ_p',
      hotTopic: 'Capacitance with partial dielectric slab'
    }
  },

  'phy-sub-2-8': {
    definitions: [
      {
        term: 'Energy Stored in a Capacitor & Energy Density',
        definition: 'Electrostatic potential energy stored while charging a capacitor to charge $Q$ and voltage $V$: $U = \\frac{1}{2}CV^2 = \\frac{1}{2}\\frac{Q^2}{C} = \\frac{1}{2}QV$. Electrostatic energy density in vacuum is $u = \\frac{1}{2}\\varepsilon_0 E^2$ ($\\text{J/m}^3$).'
      }
    ],
    keyPoints: [
      '• <strong>Battery Connected vs Disconnected Matrix (MLL Ch 2 Table):</strong> When inserting a dielectric $K$:\n  - <em>Battery Disconnected ($Q$ constant):</em> $C \\to KC$, $V \\to V/K$, $E \\to E/K$, $U \\to U/K$ (energy decreases — slab pulled IN).\n  - <em>Battery Connected ($V$ constant):</em> $C \\to KC$, $Q \\to KQ$, $E$ constant, $U \\to KU$ (battery supplies extra energy!).',
      '• <strong>Loss of Energy on Sharing Charges:</strong> Connecting two charged capacitors $C_1, V_1$ and $C_2, V_2$ reaches common potential $V_c = \\frac{C_1 V_1 + C_2 V_2}{C_1 + C_2}$ with energy loss $\\Delta U = \\frac{1}{2}\\frac{C_1 C_2}{C_1 + C_2}(V_1 - V_2)^2 > 0$ dissipated as heat/sparks.'
    ],
    extraPoints: [
      '• In charging from a battery of emf $V$, the battery does work $QV$, half ($\\frac{1}{2}QV$) is stored in the capacitor and half ($\\frac{1}{2}QV$) is dissipated as heat in connecting wires.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Battery Q vs V Anchor',
      phrase: 'Battery OFF → Q Constant → use Q²/(2C) (U drops ÷K) | Battery ON → V Constant → use ½CV² (U grows ×K)',
      explanation: 'Eliminates every mistake in capacitor parameter-change numericals.'
    },
    commonlyMadeErrors: [
      {
        error: 'Using $U = \\frac{1}{2}CV^2$ when battery is disconnected (thinking $U$ increases with $K$).',
        tip: 'Always pick the formula containing the CONSTANT quantity: $Q^2/(2C)$ when battery is disconnected ($Q$ constant), $\\frac{1}{2}CV^2$ when battery remains connected ($V$ constant)!',
        penalty: 'Reversed answer loses full 2–3 marks.'
      }
    ],
    assertionReason: {
      assertion: 'When two charged conductors at different potentials are connected by a wire, total electrostatic energy decreases.',
      reason: 'A fraction of electrostatic energy is dissipated as heat in the connecting wire and electromagnetic radiation during charge redistribution.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: '$\\Delta U = \\frac{1}{2}\\frac{C_1 C_2}{C_1 + C_2}(V_1 - V_2)^2 \\ge 0$, zero only if $V_1 = V_2$.'
    },
    examTrend: {
      pastYears: 'CBSE 2025, 2024, 2023, 2022',
      frequency: '99% Guaranteed Numerical',
      typicalMarks: '3 Marks',
      questionTypes: 'Dielectric insertion with battery on/off; common potential and energy loss numerical; energy density derivation',
      hotTopic: 'Battery connected vs disconnected table + energy loss on sharing'
    }
  },

  // CHAPTER 3 MISSING SUBTOPICS: 3-1, 3-2, 3-3, 3-4, 3-6, 3-7
  'phy-sub-3-1': {
    definitions: [
      {
        term: 'Electric Current ($I$) & Current Density ($\\vec{J}$)',
        definition: 'Electric current is the net rate of charge flow across any cross-section: $I = \\frac{dq}{dt}$ (Scalar, SI unit: $\\text{A}$). Current density is a VECTOR defined as current per unit normal cross-sectional area: $\\vec{J} = \\frac{dI}{dA}\\hat{n} = n e \\vec{v}_d = \\sigma \\vec{E}$ (SI unit: $\\text{A m}^{-2}$).'
      }
    ],
    keyPoints: [
      '• <strong>Scalar vs Vector Distinction:</strong> Even though current has magnitude and arrow direction, $I$ is a SCALAR because currents add algebraically (KCL) rather than by triangle vector addition, whereas $\\vec{J} = \\sigma\\vec{E}$ is a true vector.',
      '• <strong>Steady-Current Conservation in Non-Uniform Wire:</strong> In a tapering wire connected to a battery, current $I$ is IDENTICAL at every cross-section, whereas current density $J = I/A$, drift velocity $v_d = I/(neA)$, and electric field $E = J/\\sigma$ are LARGER at the narrower end.'
    ],
    extraPoints: [
      '• For time-varying current $I(t)$, total charge flowing between $t_1$ and $t_2$ equals $q = \\int_{t_1}^{t_2} I\\,dt$ (area under $I$–$t$ graph).'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Tapering Wire Gradient Rule',
      phrase: 'Same Current I everywhere in series! Narrow end → SMALLER Area A → LARGER J, E, and Drift Speed v_d!',
      explanation: 'Directly answers 2-mark non-uniform cross-section wire comparisons.'
    },
    commonlyMadeErrors: [
      {
        error: 'Thinking current $I$ changes when wire thickness changes in a series conductor.',
        tip: 'By charge conservation in steady state, $I$ is strictly constant along a single wire; only $J$, $E$, and $v_d$ change inversely with area $A$.',
        penalty: 'Loss of 1 mark in conceptual MCQs.'
      }
    ],
    assertionReason: {
      assertion: 'Electric current is a scalar quantity despite having both magnitude and direction.',
      reason: 'Electric current obeys ordinary algebraic addition (Kirchhoff’s junction rule) rather than the laws of vector addition.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Angle between two incoming wires does not change the outgoing current $I_1 + I_2$.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023',
      frequency: 'High Frequency',
      typicalMarks: '2 Marks',
      questionTypes: 'Compare I, J, E, vd in non-uniform metallic conductor; microscopic Ohm law J = σE',
      hotTopic: 'Tapering wire current vs drift speed'
    }
  },

  'phy-sub-3-2': {
    definitions: [
      {
        term: "Ohm's Law & Resistance ($R$)",
        definition: "Macroscopic Ohm's law states that at constant temperature and physical conditions, current $I$ is directly proportional to potential difference $V$: $V = IR$. Resistance $R = \\rho \\frac{l}{A} = \\frac{ml}{ne^2\\tau A}$ (SI unit: $\\text{ohm } \\Omega$)."
      }
    ],
    keyPoints: [
      '• <strong>Vector / Microscopic Form:</strong> $\\vec{J} = \\sigma \\vec{E}$ where conductivity $\\sigma = \\frac{1}{\\rho} = \\frac{ne^2\\tau}{m}$.',
      '• <strong>Wire Stretching Trap (Volume Conserved):</strong> If a wire of length $l$ is stretched to $n l$, its cross-sectional area shrinks to $A/n$, so new resistance becomes $R\' = n^2 R$! (Similarly, halving radius $r \\to r/2$ multiplies $R$ by $16$ because $R \\propto 1/r^4$ at constant volume).'
    ],
    extraPoints: [
      '• On a $V$–$I$ graph, slope ($\\Delta V/\\Delta I$) = $R$; on an $I$–$V$ graph, slope = $1/R$ (conductance).'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Wire Stretching Square Power Law',
      phrase: 'Stretched to length n·l (same volume) → R\' = n²R | Radius changed to r/n → R\' = n⁴R',
      explanation: 'Fastest MCQ formula for wire-stretching numericals (Slide 16 / MLL Ch 3).'
    },
    commonlyMadeErrors: [
      {
        error: 'Writing $R\' = nR$ instead of $R\' = n^2 R$ when a wire is STRETCHED to $n$ times its length.',
        tip: 'Stretching preserves volume ($l_1 A_1 = l_2 A_2$), so BOTH length increases ($\\times n$) AND area shrinks ($\\div n$), giving $n^2 R$. Read carefully whether a wire is STRETCHED or simply REPLACED by another of same thickness.',
        penalty: 'Loss of 2 marks in board numericals.'
      }
    ],
    assertionReason: {
      assertion: 'If a copper wire is stretched to double its original length, its electrical resistivity remains unchanged while resistance becomes four times.',
      reason: 'Resistivity depends only on material nature and temperature, whereas resistance depends on length and cross-sectional area ($R = \\rho l/A$).',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Doubling $l$ halves $A$, making $R\' = 4R$ without altering $\\rho$.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2020',
      frequency: 'Very High Frequency',
      typicalMarks: '2 Marks',
      questionTypes: 'Derive R = ml/(ne²τA) or J = σE; wire stretching resistance numerical; V-I vs I-V slope comparison',
      hotTopic: 'Wire stretching ($n^2 R$) and microscopic Ohm law derivation'
    }
  },

  'phy-sub-3-3': {
    definitions: [
      {
        term: 'Temperature Coefficient of Resistance ($\\alpha$)',
        definition: 'Fractional change in resistance (or resistivity) per unit rise in temperature: $\\alpha = \\frac{R_T - R_0}{R_0 (T - T_0)}$, giving $R_T = R_0[1 + \\alpha(T - T_0)]$. SI unit: $\\text{K}^{-1}$ or $^\\circ\\text{C}^{-1}$.'
      }
    ],
    keyPoints: [
      '• <strong>Sign of $\\alpha$ by Material Class:</strong>\n  1. <em>Metals (Cu, Al):</em> $\\alpha > 0$ (as $T$ increases, lattice vibrations intensify, relaxation time $\\tau$ drops, so $R$ and $\\rho$ INCREASE).\n  2. <em>Alloys (Manganin, Constantan, Nichrome):</em> Very small positive $\\alpha \\approx 0$ — used for standard resistors and bridge wires!\n  3. <em>Semiconductors (Si, Ge) & Carbon:</em> $\\alpha < 0$ (carrier density $n$ rises exponentially with $T$, so $\\rho$ DECREASES).'
    ],
    extraPoints: [
      '• $I$–$V$ slope vs temperature: on an $I$ vs $V$ plot, higher temperature $T_2 > T_1$ gives a metal line with SMALLER slope ($1/R_2 < 1/R_1$, closer to the $V$-axis).'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Standard Resistor Alloy Trio',
      phrase: 'Manganin, Constantan, Nichrome: High ρ + Near-Zero α → Ideal for Meter/Wheatstone Standard Coils!',
      explanation: 'Direct MLL Ch 3 board reason question.'
    },
    commonlyMadeErrors: [
      {
        error: 'Thinking metals have $\\alpha > 0$ because $n$ drops.',
        tip: 'In metals, free electron density $n$ is practically constant; $\\rho$ increases strictly because relaxation time $\\tau$ decreases due to more frequent lattice collisions.',
        penalty: 'Loss of 1 mark on molecular reasoning.'
      }
    ],
    assertionReason: {
      assertion: 'Alloys like Manganin and Constantan are used for making standard resistance coils.',
      reason: 'They possess high electrical resistivity and a negligible temperature coefficient of resistance ($\\alpha \\approx 0$).',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Resistance remains nearly constant despite small heating during use.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2022, 2020',
      frequency: 'High Frequency',
      typicalMarks: '2 Marks',
      questionTypes: 'Why Manganin/Constantan used in standard resistors; compute unknown T using platinum/silver coil R_T formula',
      hotTopic: 'Material graphs ($\\rho$ vs T) for Cu, Nichrome, Si'
    }
  },

  'phy-sub-3-4': {
    definitions: [
      {
        term: "Ohmic vs Non-Ohmic Conductors (Limitations of Ohm's Law)",
        definition: 'Devices whose $V$–$I$ characteristic is non-linear, asymmetric, or non-unique violate Ohm’s law. Examples: p-n junction diode ($I$ depends on forward vs reverse polarity), water voltameter, vacuum tubes, and Gallium Arsenide (GaAs).'
      }
    ],
    keyPoints: [
      '• <strong>Three NCERT Violations Shown by Non-Ohmic Devices:</strong>\n  1. $V$ ceases to be proportional to $I$ at high currents (self-heating of metallic filament).\n  2. Relation depends on SIGN of $V$ (p-n junction diode).\n  3. Relation is NOT UNIQUE — same current $I$ occurs at multiple voltages, showing a <strong>Negative Differential Resistance</strong> region ($\\Delta V / \\Delta I < 0$) as in GaAs LED/Gunn devices (MLL Ch 3).'
    ],
    extraPoints: [
      '• A device can have non-linear $V$–$I$ curve yet still have static resistance $R = V/I$ defined at a specific operating point.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: '3 Violations of Ohm Law (GaAs Curve)',
      phrase: 'Non-Linear (Torch bulb) | Polarity-Sensitive (p-n Diode) | Non-Unique Negative-R Region (GaAs)!',
      explanation: 'Directly matches the MLL Ch 3 GaAs I-V curve.'
    },
    commonlyMadeErrors: [
      {
        error: 'Assuming a non-ohmic device is one that obeys $V = I^2 R$.',
        tip: 'Quote the three NCERT examples cleanly: filament high-current heating, diode asymmetry, and GaAs negative resistance region.',
        penalty: 'Loss of 1 mark.'
      }
    ],
    assertionReason: {
      assertion: 'Gallium Arsenide (GaAs) exhibits a negative resistance region in its $I$–$V$ characteristic curve.',
      reason: 'Beyond a threshold voltage, current decreases as applied voltage increases, making the relation between $V$ and $I$ non-unique.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Exact NCERT Fig. 3.6 limitation of Ohm’s law.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023 SQP, 2020',
      frequency: 'Medium-High Frequency',
      typicalMarks: '2 Marks',
      questionTypes: 'Draw GaAs I-V curve marking linear and negative-resistance regions; state 3 limitations of Ohm law',
      hotTopic: 'GaAs non-unique negative resistance graph'
    }
  },

  'phy-sub-3-6': {
    definitions: [
      {
        term: 'Microscopic Formula of Resistivity ($\\rho$) & Relaxation Time',
        definition: 'Resistivity $\\rho = \\frac{m}{n e^2 \\tau}$, where $m$ is electron mass, $n$ is free electron number density, $e$ is electronic charge, and $\\tau$ is mean relaxation time between collisions. It depends ONLY on material nature ($n$) and temperature ($\\tau$, and for semiconductors $n$).'
      }
    ],
    keyPoints: [
      '• <strong>Why $\\rho$ Increases with $T$ in Metals:</strong> Since $n$ is huge ($\\sim 10^{28}\\text{ m}^{-3}$) and nearly constant, heating increases thermal rms speed and lattice vibration amplitude, reducing $\\tau$ and raising $\\rho$.',
      '• <strong>Why $\\rho$ Decreases with $T$ in Semiconductors:</strong> Although $\\tau$ decreases slightly, covalent bond breaking makes carrier density $n$ grow EXPONENTIALLY ($n \\propto e^{-E_g / 2k_B T}$), dominating $\\rho = \\frac{m}{ne^2\\tau}$.'
    ],
    extraPoints: [
      '• Nichrome has high residual resistivity even near $0\\text{ K}$ due to atomic disorder scattering, giving an approximately straight-line $\\rho$ vs $T$ curve with non-zero intercept.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'n vs τ Tug-of-War',
      phrase: 'Metals: τ wins (τ↓ so ρ↑) | Semiconductors: n wins (n↑↑ exponentially so ρ↓↓)',
      explanation: 'Explains both opposite temperature trends from one formula ρ = m/(ne²τ)!'
    },
    commonlyMadeErrors: [
      {
        error: 'Saying relaxation time increases in semiconductors when heated.',
        tip: 'In BOTH metals and semiconductors, relaxation time $\\tau$ DECREASES on heating; semiconductors conduct better only because $n$ explodes exponentially.',
        penalty: 'Conceptual deduction of 1 mark.'
      }
    ],
    assertionReason: {
      assertion: 'Electrical resistivity of copper increases almost linearly with temperature near room temperature, whereas that of silicon decreases rapidly.',
      reason: 'With rising temperature, collision frequency increases (decreasing $\\tau$) in both, while free carrier density $n$ increases exponentially only in silicon.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: '$\\rho = m / (ne^2\\tau)$ governs both behaviours.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2021',
      frequency: 'Very High Frequency',
      typicalMarks: '2 Marks',
      questionTypes: 'Explain resistivity vs temperature difference between metals and semiconductors using ρ = m/(ne²τ); draw ρ vs T curves',
      hotTopic: 'Competing roles of $n$ and $\\tau$'
    }
  },

  'phy-sub-3-7': {
    definitions: [
      {
        term: 'Electrical Energy, Joule Heating & Power',
        definition: 'Heat energy dissipated in a resistor carrying current $I$ for time $t$: $H = I^2 R t = \\frac{V^2}{R}t = V I t$. Instantaneous electrical power: $P = VI = I^2 R = \\frac{V^2}{R}$ (SI unit: $\\text{watt}$, $1\\text{ kWh} = 3.6 \\times 10^6\\text{ J}$).'
      }
    ],
    keyPoints: [
      '• <strong>Series vs Parallel Appliance Rule:</strong>\n  - <em>In Series ($I$ same):</em> Use $P = I^2 R \\implies$ HIGHER resistance bulb glows brighter (higher wattage rated bulb actually has LOWER resistance $R = V^2/P$, so a $25\\text{ W}$ bulb glows brighter than a $100\\text{ W}$ bulb in series!).\n  - <em>In Parallel ($V$ same):</em> Use $P = V^2/R \\implies$ LOWER resistance / HIGHER wattage rated bulb ($100\\text{ W}$) glows brighter.',
      '• <strong>High-Voltage Transmission Advantage:</strong> Power lost in transmission cables of resistance $R_c$ carrying power $P$ at voltage $V$ is $P_{\\text{loss}} = I^2 R_c = \\frac{P^2 R_c}{V^2} \\propto 1/V^2$ — hence power is stepped up to $100\\text{–}400\\text{ kV}$ before long-distance transmission.'
    ],
    extraPoints: [
      '• Maximum Power Transfer Theorem: A cell ($E, r$) delivers maximum power $P_{\\max} = E^2 / (4r)$ when external load $R = r$.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: '25 W vs 100 W Bulb Paradox',
      phrase: 'Resistance $R \\propto 1/P_{\\text{rated}}$ | Series ($I$ same → $I^2 R$): 25W glows brighter! | Parallel ($V$ same → $V^2/R$): 100W glows brighter!',
      explanation: 'Solves series/parallel heater and bulb questions cleanly every time.'
    },
    commonlyMadeErrors: [
      {
        error: 'Assuming a 100 W bulb always glows brighter than a 40 W bulb even when connected in series.',
        tip: 'Rated power applies ONLY at rated voltage ($V_{\\text{rated}}$). Compute $R = V_{\\text{rated}}^2 / P_{\\text{rated}}$ first!',
        penalty: 'Loss of 2 marks.'
      }
    ],
    assertionReason: {
      assertion: 'Two electric bulbs rated 25 W, 220 V and 100 W, 220 V are connected in series to a 220 V supply; the 25 W bulb is more likely to fuse if supply rises to 440 V.',
      reason: 'The 25 W bulb has four times the resistance of the 100 W bulb, so it drops 80% of the series voltage across itself.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'In series, $V_{\\text{drop}} \\propto R \\propto 1/P_{\\text{rated}}$.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2022, 2020',
      frequency: 'High Frequency',
      typicalMarks: '2 Marks',
      questionTypes: 'Compare brightness of two rated bulbs in series vs parallel; power loss in transmission cables; maximum power theorem R=r',
      hotTopic: 'Series bulb brightness & max power $R = r$'
    }
  },

  // CHAPTER 4 MISSING SUBTOPICS: 4-1, 4-3, 4-4, 4-5, 4-6, 4-9
  'phy-sub-4-1': {
    definitions: [
      {
        term: 'Biot–Savart Law',
        definition: 'Magnetic field $d\\vec{B}$ produced by a current element $I\\,d\\vec{l}$ at position $\\vec{r}$ is $d\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I(d\\vec{l} \\times \\vec{r})}{r^3}$, with magnitude $dB = \\frac{\\mu_0}{4\\pi}\\frac{I\\,dl\\sin\\theta}{r^2}$. SI unit: $\\text{tesla (T)}$ ($1\\text{ T} = 10^4\\text{ gauss}$).'
      }
    ],
    keyPoints: [
      '• <strong>Vector Direction & Zero Points:</strong> $d\\vec{B}$ is perpendicular to BOTH $d\\vec{l}$ and $\\vec{r}$ (right-hand screw/palm rule). Along the axis of a current element ($\\theta = 0^\\circ$ or $180^\\circ$), $dB = 0$. Maximum occurs at $\\theta = 90^\\circ$.',
      '• <strong>Comparison with Coulomb’s Law:</strong> Both follow $1/r^2$ and superposition, EXCEPT Coulomb’s field is produced by a scalar charge $q$ (acting radially along $\\vec{r}$), whereas Biot–Savart field is produced by a vector current element $I\\,d\\vec{l}$ (acting perpendicular to the plane of $d\\vec{l}$ and $\\vec{r}$) and depends on angle $\\theta$.'
    ],
    extraPoints: [
      '• Value of permeability of free space: $\\mu_0 = 4\\pi \\times 10^{-7}\\text{ T m A}^{-1}$, and $\\frac{1}{\\sqrt{\\mu_0\\varepsilon_0}} = c = 3 \\times 10^8\\text{ m/s}$.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: '1 Tesla = 10^4 Gauss (NOT 10^-4)',
      phrase: 'dB = (μ₀/4π)(I dl sinθ)/r² | On wire axis θ=0° → dB=0 | 1 Tesla = 10⁴ Gauss (1 G = 10⁻⁴ T)',
      explanation: 'Fixes unit conversion traps in numericals.'
    },
    commonlyMadeErrors: [
      {
        error: 'Writing $r^2$ instead of $r^3$ in the vector form $\\frac{I(d\\vec{l} \\times \\vec{r})}{r^3}$ (or forgetting $\\hat{r}$).',
        tip: 'Check dimensions: $d\\vec{l} \\times \\vec{r}$ has an extra factor of distance $r$ in the numerator compared to $d\\vec{l} \\times \\hat{r}$, so the denominator MUST be $r^3$!',
        penalty: 'Loss of 0.5–1 mark on law statement.'
      }
    ],
    assertionReason: {
      assertion: 'The magnetic field at any point lying on the axis of a straight current-carrying wire is zero.',
      reason: 'For any point along the line of the straight wire, the angle $\\theta$ between $d\\vec{l}$ and $\\vec{r}$ is $0^\\circ$ or $180^\\circ$, making $\\sin\\theta = 0$.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Straight lead-in wires contribute zero field at points collinear with them.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022',
      frequency: 'Very High Frequency',
      typicalMarks: '2–3 Marks',
      questionTypes: 'State Biot-Savart law in vector form; compare electrostatic E and magnetostatic B; magnetic field of semi-circular arc + straight arms',
      hotTopic: 'Vector form $r^3$ denominator + arc-and-straight-lead geometry'
    }
  },

  'phy-sub-4-3': {
    definitions: [
      {
        term: "Ampere's Circuital Law",
        definition: 'The line integral of magnetic field $\\vec{B}$ around any closed Amperian loop in free space equals $\\mu_0$ times the net steady current $I_{\\text{enc}}$ threading the area bounded by the loop: $\\oint \\vec{B}\\cdot d\\vec{l} = \\mu_0 I_{\\text{enc}}$.'
      }
    ],
    keyPoints: [
      '• <strong>Straight Wire Application:</strong> Choosing a circle of radius $r$ coaxial with a long wire gives $B(2\\pi r) = \\mu_0 I \\implies B = \\frac{\\mu_0 I}{2\\pi r}$ ($\\propto 1/r$).',
      '• <strong>Thick Solid Cylindrical Wire of Radius $R$:</strong> Inside ($r < R$), $I_{\\text{enc}} = I(r^2/R^2) \\implies B_{\\text{in}} = \\frac{\\mu_0 I r}{2\\pi R^2} \\propto r$; on surface $B_{\\max} = \\frac{\\mu_0 I}{2\\pi R}$; outside ($r > R$), $B_{\\text{out}} \\propto 1/r$!'
    ],
    extraPoints: [
      '• Ampere’s law is to magnetostatics what Gauss’s law is to electrostatics — maximally useful for highly symmetric current geometries (infinite wire, cylinder, solenoid).'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Thick Wire B vs r Peak at Surface',
      phrase: 'Inside wire (r < R): B ∝ r (Linear Up!) | At surface (r = R): B_max | Outside (r > R): B ∝ 1/r (Hyperbolic Down!)',
      explanation: 'Direct 2-mark board graph question (Slide 22 / MLL).'
    },
    commonlyMadeErrors: [
      {
        error: 'Thinking magnetic field inside a thick current-carrying solid conductor is zero.',
        tip: 'For a HOLLOW pipe, $B_{\\text{in}} = 0$; for a SOLID uniform wire, current enclosed within radius $r$ is $I(r^2/R^2)$, so $B$ rises linearly with $r$!',
        penalty: 'Wrong graph loses 2 marks.'
      }
    ],
    assertionReason: {
      assertion: 'Ampere’s circuital law holds strictly for any closed path enclosing steady currents, even if the path is non-circular.',
      reason: 'Just like Gauss’s law, the closed loop integral $\\oint \\vec{B}\\cdot d\\vec{l}$ depends only on the net enclosed steady current $I_{\\text{enc}}$, not on the loop shape.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Symmetry is chosen merely to make evaluation easy.'
    },
    examTrend: {
      pastYears: 'CBSE 2025, 2024, 2023',
      frequency: 'High Frequency',
      typicalMarks: '2–3 Marks',
      questionTypes: "Derive B for infinitely long straight wire; plot B vs r for thick cylindrical wire",
      hotTopic: 'Thick conductor inside-vs-outside B graph'
    }
  },

  'phy-sub-4-4': {
    definitions: [
      {
        term: 'Magnetic Field of a Long Solenoid',
        definition: 'For an ideal long tightly-wound solenoid with $n = N/l$ turns per unit length carrying current $I$, Ampere’s law across a rectangular loop gives uniform axial field inside: $B = \\mu_0 n I$, and at an open end $B_{\\text{end}} = \\frac{1}{2}\\mu_0 n I$ (outside $B \\approx 0$).'
      }
    ],
    keyPoints: [
      '• <strong>Rectangular Amperian Loop Proof (4 Sides):</strong> Side $ab$ inside ($\\theta = 0^\\circ$) gives $Bl$; sides $bc$ and $da$ are perpendicular ($\\theta = 90^\\circ \\implies 0$); side $cd$ outside ($B = 0 \\implies 0$). Net $Bl = \\mu_0 (n l I) \\implies B = \\mu_0 n I$.',
      '• <strong>Important CBSE Rationalization Note:</strong> Keep focus on the <strong>Long Solenoid</strong> ($B = \\mu_0 n I$); <em>Toroid</em> ($B = \\mu_0 n I$ inside core) was dropped from current rationalized NCERT Chapter 4 (tagged clearly in SlideShare Slide 24).'
    ],
    extraPoints: [
      '• Inserting a soft iron core of relative permeability $\\mu_r$ boosts solenoid field to $B = \\mu_0 \\mu_r n I$.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Solenoid Half-at-Ends Rule',
      phrase: 'Inside deep centre: B = μ₀nI | At exact end face: B_end = ½μ₀nI | Far outside: B ≈ 0',
      explanation: 'Saves careless factors of 2 in end-field questions.'
    },
    commonlyMadeErrors: [
      {
        error: 'Substituting total number of turns $N$ instead of turn density $n = N/l$ into $B = \\mu_0 n I$.',
        tip: 'Always check units: $n = N/l$ has units $\\text{m}^{-1}$. Multiply $n = \\frac{\\text{total turns}}{\\text{length in metres}}$.',
        penalty: 'Numerical error loses 1.5 marks.'
      }
    ],
    assertionReason: {
      assertion: 'The magnetic field lines inside a long current-carrying solenoid are nearly parallel and equidistant near the central region.',
      reason: 'An ideal long solenoid produces an almost uniform axial magnetic field $B = \\mu_0 n I$ independent of radial distance from the axis.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Equidistant parallel lines represent a uniform magnetic field.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2021',
      frequency: 'High Frequency',
      typicalMarks: '2–3 Marks',
      questionTypes: "Derive B = μ₀nI inside a solenoid using Ampere's law; compare electric dipole vs current solenoid",
      hotTopic: 'Rectangular loop Ampere derivation for solenoid'
    }
  },

  'phy-sub-4-5': {
    definitions: [
      {
        term: 'Lorentz Force (Electric + Magnetic Force)',
        definition: 'Total electromagnetic force acting on a charge $q$ moving with velocity $\\vec{v}$ in combined fields $\\vec{E}$ and $\\vec{B}$: $\\vec{F} = q\\vec{E} + q(\\vec{v} \\times \\vec{B})$.'
      }
    ],
    keyPoints: [
      '• <strong>Zero Work Done by Magnetic Force:</strong> Since magnetic force $\\vec{F}_m = q(\\vec{v} \\times \\vec{B})$ is ALWAYS perpendicular to instantaneous velocity $\\vec{v}$, power $P = \\vec{F}_m \\cdot \\vec{v} = 0$, so magnetic field can NEVER change speed or kinetic energy of a charged particle — only direction!',
      '• <strong>Special Angles & Velocity Selector:</strong> At $\\theta = 0^\\circ$ or $180^\\circ$ or $v = 0$, $F_m = 0$. In crossed $\\vec{E} \\perp \\vec{B}$, zero net deflection occurs when $qE = qvB \\implies v = E/B$ (Velocity Selector).'
    ],
    extraPoints: [
      '• Force on a negative charge ($q < 0$, e.g., electron) is OPPOSITE to the direction given by $\\vec{v} \\times \\vec{B}$.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Magnetic Force Never Speeds You Up',
      phrase: 'F_m ⊥ v always → Work W = 0 & ΔKE = 0 | Crossed E⊥B Straight Path → v = E/B!',
      explanation: 'Covers Slide 25 and 90% of conceptual Lorentz questions.'
    },
    commonlyMadeErrors: [
      {
        error: 'Applying Right-Hand Rule blindly for an electron without reversing direction for negative charge.',
        tip: 'Fleming’s Left-Hand Rule uses conventional current direction — reverse velocity direction for an electron!',
        penalty: 'Opposite trajectory direction in 1M/2M figure questions.'
      }
    ],
    assertionReason: {
      assertion: 'A uniform magnetic field cannot change the kinetic energy of a moving charged particle.',
      reason: 'The magnetic Lorentz force $\\vec{F}_m = q(\\vec{v}\\times\\vec{B})$ always acts perpendicular to velocity $\\vec{v}$, performing zero mechanical work.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'By work-energy theorem, $W = 0 \\implies \\Delta K = 0$.'
    },
    examTrend: {
      pastYears: 'CBSE 2025, 2024, 2023, 2022',
      frequency: '99% Guaranteed Concept',
      typicalMarks: '2 Marks',
      questionTypes: 'Velocity selector v = E/B numerical; why work done by magnetic field is zero; proton vs alpha particle deflection',
      hotTopic: 'Velocity selector and zero magnetic work'
    }
  },

  'phy-sub-4-6': {
    definitions: [
      {
        term: 'Circular & Helical Motion in Uniform Magnetic Field',
        definition: 'When $\\vec{v} \\perp \\vec{B}$ ($\\theta = 90^\\circ$), magnetic force provides centripetal force: $r = \\frac{mv}{qB} = \\frac{p}{qB} = \\frac{\\sqrt{2mK}}{qB}$, time period $T = \\frac{2\\pi m}{qB}$, frequency $\\nu = \\frac{qB}{2\\pi m}$ (INDEPENDENT of speed $v$ and radius $r$). If $0^\\circ < \\theta < 90^\\circ$, path is a HELIX of radius $r = \\frac{mv\\sin\\theta}{qB}$ and pitch $p = (v\\cos\\theta)T$.'
      }
    ],
    keyPoints: [
      '• <strong>Proton vs Alpha vs Deuteron Comparison:</strong> Same velocity $v \\implies r \\propto m/q$ ($p : d : \\alpha = 1 : 2 : 2$). Same kinetic energy $K \\implies r \\propto \\sqrt{m}/q$ ($p : \\alpha = 1 : 1$, deuteron = $\\sqrt{2}$)!',
      '• <strong>Time Period Independence:</strong> Faster particles trace larger circles at proportionally higher speeds, taking the EXACT SAME time $T = 2\\pi m/(qB)$ per revolution!'
    ],
    extraPoints: [
      '• Cyclotron was removed from rationalized CBSE, but all circular/helical $r, T, \\nu$ and pitch derivations remain core syllabus!'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'p-d-α Radius Comparison',
      phrase: 'Same v → r ∝ m/q | Same Momentum p → r ∝ 1/q | Same KE → r ∝ √m/q (so p and α have EQUAL radius!)',
      explanation: 'Solves the #1 CBSE Chapter 4 ratio MCQ in 5 seconds.'
    },
    commonlyMadeErrors: [
      {
        error: 'Saying proton and alpha particle accelerated through the SAME kinetic energy have different radii.',
        tip: 'For proton ($m=1, q=1$) $\\sqrt{1}/1 = 1$; for alpha ($m=4, q=2$) $\\sqrt{4}/2 = 1$ — EQUAL radius when KE or accelerating potential $V$ differs/matches: check carefully whether SAME $v$, SAME $K$, or SAME $V$ is given!',
        penalty: 'Wrong ratio loses 2 marks.'
      }
    ],
    assertionReason: {
      assertion: 'The time period of revolution of a charged particle moving perpendicular to a uniform magnetic field is independent of its speed and radius.',
      reason: 'Radius increases linearly with speed ($r = mv/qB$), so circumference $2\\pi r$ divided by speed $v$ cancels $v$ completely.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: '$T = 2\\pi r/v = 2\\pi m/(qB)$.'
    },
    examTrend: {
      pastYears: 'CBSE 2025, 2024, 2023, 2020',
      frequency: 'Very High Frequency',
      typicalMarks: '2–3 Marks',
      questionTypes: 'Helix pitch and radius derivation; compare radius of proton, deuteron and alpha particle with same KE/v',
      hotTopic: 'Helical path + p/d/α radius ratio under equal K, p, or v'
    }
  },

  'phy-sub-4-9': {
    definitions: [
      {
        term: 'Torque on a Current Loop ($\\vec{\\tau}$)',
        definition: 'A planar loop of $N$ turns, area $A$, and current $I$ has magnetic dipole moment $\\vec{m} = NIA\\hat{n}$ and experiences torque $\\vec{\\tau} = \\vec{m} \\times \\vec{B}$ in a uniform magnetic field $\\vec{B}$, with magnitude $\\tau = NIAB\\sin\\theta$ ($\\theta$ = angle between area normal $\\hat{n}$ and $\\vec{B}$) or $\\tau = NIAB\\cos\\alpha$ ($\\alpha$ = angle between coil plane and $\\vec{B}$).'
      }
    ],
    keyPoints: [
      '• <strong>Net Force is Zero:</strong> In a UNIFORM magnetic field, the net translational force on any closed current loop is ALWAYS ZERO regardless of its shape ($\\vec{F}_{\\text{net}} = 0$), even though torque $\\tau$ can be non-zero.',
      '• <strong>Equilibrium & Angle Trap:</strong> If plane of coil is PARALLEL to $\\vec{B}$ ($\\alpha = 0^\\circ, \\theta = 90^\\circ$), torque is MAXIMUM ($NIAB$). If plane is PERPENDICULAR to $\\vec{B}$ ($\\theta = 0^\\circ$), torque is ZERO (stable equilibrium).'
    ],
    extraPoints: [
      '• Radial magnetic field in a Moving Coil Galvanometer uses concave pole pieces and a soft iron core so the coil plane is ALWAYS parallel to $\\vec{B}$ ($\\theta = 90^\\circ$), giving a linear scale $\\phi \\propto I$.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Normal (sinθ) vs Plane (cosα)',
      phrase: 'Plane PARALLEL to B → Normal is 90° to B → MAX Torque = NIAB! Net Force in uniform B = ZERO!',
      explanation: 'Slide 28 derivation & MCG working foundation.'
    },
    commonlyMadeErrors: [
      {
        error: 'Substituting the angle made by the PLANE of the coil directly into $NIAB\\sin\\theta$.',
        tip: 'Just like electric flux, check whether the problem gives angle with the NORMAL ($\\sin\\theta$) or with the PLANE ($\\cos\\alpha$).',
        penalty: 'Loss of 1 mark.'
      }
    ],
    assertionReason: {
      assertion: 'A current-carrying closed loop placed in a uniform magnetic field experiences zero net force but may experience a non-zero torque.',
      reason: 'Forces on opposite sides of the loop are equal and opposite, forming a mechanical couple whenever the loop’s normal is not aligned with $\\vec{B}$.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Non-collinear equal opposite forces produce torque with zero net force.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2021',
      frequency: 'High Frequency',
      typicalMarks: '3 Marks',
      questionTypes: 'Derive τ = NIAB sinθ for rectangular loop; why radial magnetic field is used in MCG',
      hotTopic: 'Rectangular loop torque derivation & angle with plane vs normal'
    }
  },

  // CHAPTER 5 MISSING SUBTOPICS: 5-1, 5-2
  'phy-sub-5-1': {
    definitions: [
      {
        term: 'Diamagnetic Substances',
        definition: 'Materials that are feebly REPELLED by a magnetic field and tend to move from stronger to weaker field regions ($\\chi_m$ is small and NEGATIVE, $-1 \\le \\chi_m < 0$; $0 \\le \\mu_r < 1$; strictly INDEPENDENT of temperature). Examples: Bismuth, Copper, Water, Gold, Silicon, Superconductors (perfect diamagnets: $\\chi_m = -1$, Meissner effect).'
      }
    ],
    keyPoints: [
      '• <strong>Origin & Field Lines:</strong> Atoms have paired electrons with zero net permanent dipole moment; an external field induces an opposing orbital dipole (Lenz effect). Magnetic field lines are EXPELLED from the interior of a diamagnetic specimen.',
      '• <strong>Curie Law Exception:</strong> Diamagnetism is a universal property present in all matter and is completely INDEPENDENT of temperature $T$!'
    ],
    extraPoints: [
      '• A superconductor cooled below critical temperature exhibits perfect diamagnetism ($B_{\\text{inside}} = 0, \\mu_r = 0, \\chi_m = -1$), known as the Meissner effect.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'DIA = Disagree & Push Away',
      phrase: 'Diamagnetic: χ < 0 (small negative) | μ_r < 1 | Moves STRONG → WEAK field | Expels B-lines | NO T-dependence!',
      explanation: 'Immediate distinction from paramagnetic and ferromagnetic materials.'
    },
    commonlyMadeErrors: [
      {
        error: 'Writing that diamagnetic susceptibility obeys Curie’s law ($\\chi \\propto 1/T$).',
        tip: 'ONLY paramagnetic (and ferromagnetic above Curie point) depend on temperature; diamagnetism is temperature-independent!',
        penalty: '1 mark deduction in property table.'
      }
    ],
    assertionReason: {
      assertion: 'Diamagnetism is universal and independent of temperature.',
      reason: 'Induced magnetic dipoles arise from orbital velocity changes governed by Lenz’s law rather than thermal alignment of permanent dipoles.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Thermal agitation does not affect induced diamagnetic response.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022',
      frequency: 'Very High Frequency',
      typicalMarks: '2 Marks',
      questionTypes: 'Draw B-lines through diamagnetic vs paramagnetic block; identify material from χ value (e.g. -0.0005)',
      hotTopic: 'Negative χ identification & field-line expulsion diagram'
    }
  },

  'phy-sub-5-2': {
    definitions: [
      {
        term: 'Paramagnetic Substances & Curie Law',
        definition: 'Materials feebly ATTRACTED by magnets that move from weaker to stronger field regions ($\\chi_m$ is small and POSITIVE, $\\mu_r > 1$). By <em>Curie’s Law</em>, magnetization $M = C B / T$ and susceptibility $\\chi_m = C / T$ (inversely proportional to absolute temperature $T$). Examples: Aluminium, Sodium, Oxygen, Calcium, Copper chloride.'
      }
    ],
    keyPoints: [
      '• <strong>Origin & Field Lines:</strong> Atoms possess permanent magnetic dipole moments due to unpaired electron spins; external field partially aligns them against thermal agitation, slightly concentrating field lines inside the specimen.',
      '• <strong>Susceptibility Table Anchor:</strong> Diamagnetic ($\\chi \\sim -10^{-5}$), Paramagnetic ($\\chi \\sim +10^{-5}$ to $+10^{-3}$), Ferromagnetic ($\\chi \\gg 1$, e.g. $10^3$).'
    ],
    extraPoints: [
      '• A paramagnetic U-tube liquid rises slightly in the limb placed inside a strong magnetic pole gap, whereas a diamagnetic liquid level depresses.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'PARA = Positive χ, Curie 1/T',
      phrase: 'Paramagnetic: Small +χ | μ_r slightly > 1 | Moves WEAK → STRONG | χ ∝ 1/T (Curie Law) | Al, Na, O₂',
      explanation: 'Direct match to MLL Unit-III magnetic material table.'
    },
    commonlyMadeErrors: [
      {
        error: 'Treating aluminium as diamagnetic or saying $\\chi$ is large for paramagnets.',
        tip: 'Copper is diamagnetic; ALUMINIUM is paramagnetic (remember: Al = positive, Cu = negative)!',
        penalty: 'Loss of 1 mark on examples.'
      }
    ],
    assertionReason: {
      assertion: 'The magnetic susceptibility of a paramagnetic substance increases when it is cooled.',
      reason: 'According to Curie’s law, reduced thermal agitation at lower temperatures allows greater alignment of permanent atomic dipoles ($\\chi \\propto 1/T$).',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Valid up to saturation at very low temperature.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2020',
      frequency: 'High Frequency',
      typicalMarks: '2 Marks',
      questionTypes: 'Draw χ vs 1/T and B-lines through paramagnetic sphere; compare dia, para, ferro (3-mark table)',
      hotTopic: '3-way dia/para/ferro table + field-line diagram'
    }
  },

  // CHAPTER 6 MISSING SUBTOPICS: 6-1, 6-4, 6-6, 6-8, 6-9, 6-10
  'phy-sub-6-1': {
    definitions: [
      {
        term: 'Magnetic Flux ($\\Phi_B$)',
        definition: 'Number of magnetic field lines passing normally through a surface of area $\\vec{A}$: $\\Phi_B = \\vec{B}\\cdot\\vec{A} = BA\\cos\\theta$ (for uniform field), or $\\int \\vec{B}\\cdot d\\vec{A}$. SI unit: $\\text{weber (Wb)} = \\text{T m}^2$; CGS unit: $\\text{maxwell}$ ($1\\text{ Wb} = 10^8\\text{ maxwell}$).'
      }
    ],
    keyPoints: [
      '• <strong>Three Ways to Change $\\Phi_B$ (and Induce EMF):</strong> Changing magnetic field magnitude $B$, changing enclosed area $A$, or changing orientation angle $\\theta = \\omega t$ between $\\vec{B}$ and area normal $\\hat{n}$.',
      '• <strong>Magnetic Flux Across Closed Surface:</strong> By Gauss’s law for magnetism, total magnetic flux through ANY closed surface is ALWAYS ZERO ($\\oint \\vec{B}\\cdot d\\vec{A} = 0$) because magnetic monopoles do not exist.'
    ],
    extraPoints: [
      '• Dimensional formula of $\\Phi_B$: $[M^1 L^2 T^{-2} A^{-1}]$.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: '1 Weber = 10^8 Maxwell & Angle with Normal',
      phrase: 'Φ_B = BA cosθ (θ with NORMAL!) | Change ANY of B, A, or θ → EMF Induced!',
      explanation: 'Core starting formula for Faraday/Lenz numericals.'
    },
    commonlyMadeErrors: [
      {
        error: 'Claiming an induced EMF appears merely because magnetic flux $\\Phi_B$ is large.',
        tip: 'Constant large flux induces ZERO emf! Induced emf depends solely on the RATE OF CHANGE of flux ($-d\\Phi_B/dt$).',
        penalty: 'Conceptual mark lost.'
      }
    ],
    assertionReason: {
      assertion: 'No induced emf is produced in a coil placed in a very strong constant magnetic field if the coil remains stationary.',
      reason: 'Induced emf depends on the time rate of change of magnetic flux ($-d\\Phi_B/dt$), not on the constant magnitude of flux.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Zero $d\\Phi_B/dt$ implies zero emf.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023',
      frequency: 'High Frequency',
      typicalMarks: '2 Marks',
      questionTypes: 'Find flux when B and plane angle are given; calculate flux change on rotating coil by 90° or 180°',
      hotTopic: 'Flux reversal $\\Delta\\Phi = 2NBA$ on 180° flip'
    }
  },

  'phy-sub-6-4': {
    definitions: [
      {
        term: "Fleming's Right-Hand Rule vs Left-Hand Rule",
        definition: "<em>Fleming's Right-Hand Rule (Generators/EMI):</em> Stretch thumb, forefinger, middle finger mutually perpendicular — Forefinger = Magnetic Field ($\\vec{B}$), Thumb = Motion of conductor ($\\vec{v}$), Middle finger = INDUCED Current ($I$). <em>Left-Hand Rule (Motors/Force):</em> Predicts direction of mechanical Force/Motion from existing current."
      }
    ],
    keyPoints: [
      '• <strong>Simple Memory Split:</strong> <strong>Right Hand = Generator</strong> (we use motion + field to CREATE current); <strong>Left Hand = Motor</strong> (we supply current + field to get Force/Motion).',
      '• Both rules agree completely with $\\vec{F} = q(\\vec{v} \\times \\vec{B})$: in a moving rod, free electrons feel force $-e(\\vec{v} \\times \\vec{B})$, driving positive conventional current along $\\vec{v} \\times \\vec{B}$.'
    ],
    extraPoints: [
      '• For radial wires on a rotating spoked wheel in uniform $\\vec{B}$, Fleming’s Right-Hand Rule shows all spokes have induced emf in the same radial sense (parallel, NOT series!).'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Right = GeneRator, Left = Motor (Force)',
      phrase: 'Father (Thumb Force/Motion) | Mother (First Finger Magnetic Field) | Child (Middle Finger Current)',
      explanation: 'Never mix up Motor vs Generator hand rules in the exam hall.'
    },
    commonlyMadeErrors: [
      {
        error: 'Applying Left-Hand Rule to find direction of induced current in a moving rod.',
        tip: 'Induced current / EMI ALWAYS uses Fleming’s RIGHT-Hand Rule (or Lenz’s law / $\\vec{v} \\times \\vec{B}$).',
        penalty: 'Opposite polarity loses 1 mark.'
      }
    ],
    assertionReason: {
      assertion: 'If a bicycle wheel with metallic spokes rotates perpendicular to a uniform magnetic field, induced emf across axle and rim is independent of the number of spokes.',
      reason: 'All radial spokes experience identical induced emf connected in parallel between the centre axle and outer rim.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Parallel identical batteries retain same emf $\\frac{1}{2}B\\omega R^2$.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2022',
      frequency: 'Medium Frequency',
      typicalMarks: '2 Marks',
      questionTypes: 'Identify high/low potential end of moving rod; bicycle wheel rotating in Earth horizontal B numerical',
      hotTopic: 'Polarity of moving rod and rotating spoke wheel ($\\frac{1}{2}B\\omega l^2$)'
    }
  },

  'phy-sub-6-6': {
    definitions: [
      {
        term: 'Methods of Generating Induced EMF',
        definition: 'Since $\\Phi_B = BA\\cos\\theta$, induced emf $e = -\\frac{d}{dt}(NBA\\cos\\theta)$ can be generated by: (1) varying $B$ with time (transformer), (2) varying effective area $A$ inside field (sliding rail motional emf), or (3) rotating the coil ($\\theta = \\omega t$, AC generator).'
      }
    ],
    keyPoints: [
      '• <strong>Induced Charge Formula (Time-Independent!):</strong> Total charge flowing when flux changes from $\\Phi_1$ to $\\Phi_2$ in a circuit of resistance $R$ is $Q = \\int I\\,dt = \\frac{|\\Delta\\Phi_B|}{R} = \\frac{N|\\Phi_2 - \\Phi_1|}{R}$, completely INDEPENDENT of how fast or slow the flux changes!',
      '• Power dissipated ($P = e^2/R$), however, DOES depend inversely on the time taken $\\Delta t$.'
    ],
    extraPoints: [
      '• Rotating a coil at angular frequency $\\omega$ gives peak emf $e_0 = NBA\\omega$.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Charge = ΔΦ/R (Speed Doesn’t Matter!)',
      phrase: 'Induced EMF e ∝ ΔΦ/Δt (Fast = Bigger V) | Induced Charge Q = ΔΦ/R (Independent of Time Δt!)',
      explanation: 'Classic 2-mark board twist comparing fast vs slow magnet motion.'
    },
    commonlyMadeErrors: [
      {
        error: 'Thinking pulling a loop out of a magnetic field twice as fast doubles the total induced CHARGE.',
        tip: 'Pulling twice as fast doubles the EMF ($e$) and doubles the CURRENT ($I$) for HALF the time ($\\Delta t/2$), so total CHARGE $Q = I\\Delta t = \\Delta\\Phi/R$ remains IDENTICAL!',
        penalty: 'Loss of 1 mark.'
      }
    ],
    assertionReason: {
      assertion: 'Total charge induced in a closed coil when magnetic flux through it changes from $\\Phi_1$ to $\\Phi_2$ does not depend on the time taken for the change.',
      reason: 'Induced charge $q = \\int \\frac{e}{R}dt = \\frac{\\Phi_1 - \\Phi_2}{R}$ depends only on net flux change and circuit resistance.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Time interval $dt$ cancels during integration.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2021',
      frequency: 'High Frequency',
      typicalMarks: '2–3 Marks',
      questionTypes: 'Area-expanding loop emf & induced charge calculation; flux flip $180^\\circ$ numerical',
      hotTopic: 'Induced charge $Q = \\Delta\\Phi / R$ independence of time'
    }
  },

  'phy-sub-6-8': {
    definitions: [
      {
        term: 'Self-Inductance ($L$) & Mutual Inductance ($M$) of Long Solenoids',
        definition: 'Self-inductance of an air-core long solenoid of length $l$, area $A$, turns $N$: $L = \\mu_0 n^2 A l = \\frac{\\mu_0 N^2 A}{l}$. Mutual inductance of two coaxial long solenoids of same length $l$ (inner radius $r_1$, outer radius $r_2$): $M = \\frac{\\mu_0 N_1 N_2 A_1}{l} = \\mu_0 n_1 n_2 (\\pi r_1^2) l$.'
      }
    ],
    keyPoints: [
      '• <strong>Crucial Area Rule for Mutual Inductance:</strong> Always use the cross-sectional area of the <strong>INNER (SMALLER)</strong> solenoid $A_1 = \\pi r_1^2$, NEVER the outer solenoid area, because magnetic flux exists only inside the inner core when inner carries current (or only $A_1$ links both coils)!',
      '• <strong>Reciprocity Theorem & Coupling:</strong> $M_{12} = M_{21} = M \\le \\sqrt{L_1 L_2}$ (with $M = k\\sqrt{L_1 L_2}$, $0 \\le k \\le 1$). Inserting an iron core of $\\mu_r$ multiplies $L$ and $M$ by $\\mu_r$.'
    ],
    extraPoints: [
      '• Factors affecting $M$: geometry/size of coils, number of turns $N_1, N_2$, relative orientation/separation, and permeability $\\mu_r$ of the core material.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Smaller Radius Wins M!',
      phrase: 'Self L = μ₀N²A/l | Coaxial Mutual M = μ₀n₁n₂(πr_inner²)l → Always use SMALLER coil area! M₁₂ = M₂₁!',
      explanation: 'Prevents the #1 error in Slide 35 mutual inductance derivation.'
    },
    commonlyMadeErrors: [
      {
        error: 'Using outer solenoid radius $r_2$ instead of inner radius $r_1$ when finding mutual inductance of coaxial solenoids.',
        tip: 'Flux only links both solenoids across the common overlapping region, which is $\\pi r_1^2$ (the smaller cross-sectional area).',
        penalty: 'Loss of 1 mark in derivation and numericals.'
      }
    ],
    assertionReason: {
      assertion: 'The mutual inductance between two long coaxial solenoids depends only on the cross-sectional area of the inner solenoid.',
      reason: 'The magnetic field produced outside a long solenoid is practically zero, so magnetic flux linking both solenoids is confined within the smaller cross-section.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Reciprocity ensures $M_{12} = M_{21} = \\mu_0 n_1 n_2 (\\pi r_{\\text{inner}}^2) l$.'
    },
    examTrend: {
      pastYears: 'CBSE 2025, 2024, 2023, 2020',
      frequency: '99% Guaranteed 3M Derivation',
      typicalMarks: '3 Marks',
      questionTypes: 'Derive M = μ₀n₁n₂πr₁²l for coaxial solenoids; state 3 factors affecting mutual inductance; show M₁₂ = M₂₁',
      hotTopic: 'Coaxial solenoid mutual inductance (Slide 35)'
    }
  },

  'phy-sub-6-9': {
    definitions: [
      {
        term: 'Magnetic Energy Stored in an Inductor',
        definition: 'Work done against back-emf $e = L\\frac{dI}{dt}$ in building current from $0$ to $I$ is stored as magnetic potential energy: $U = \\int_0^I L i\\,di = \\frac{1}{2} L I^2$. Magnetic energy density in a solenoid field $B$ is $u_B = \\frac{B^2}{2\\mu_0}$ ($\\text{J/m}^3$).'
      }
    ],
    keyPoints: [
      '• <strong>Mechanical Analogy:</strong> Self-inductance $L$ plays the exact role of INERTIAL MASS $m$ in electricity ($U = \\frac{1}{2}LI^2 \\leftrightarrow \\frac{1}{2}mv^2$), opposing any sudden change in current $I$.',
      '• <strong>Derivation of Energy Density:</strong> Substituting $L = \\mu_0 n^2 A l$ and $I = B/(\\mu_0 n)$ into $U = \\frac{1}{2}LI^2$ directly yields $\\frac{U}{Al} = \\frac{B^2}{2\\mu_0}$.'
    ],
    extraPoints: [
      '• Just as capacitor energy density $u_E = \\frac{1}{2}\\varepsilon_0 E^2$ resides in the electric field, inductor energy resides in the magnetic field.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Inductor Energy Density Symmetry',
      phrase: 'Capacitor U = ½CV² (u = ½ε₀E²)  ↔  Inductor U = ½LI² (u = B²/2μ₀)!',
      explanation: 'Slide 36 derivation in 4 clean algebra lines.'
    },
    commonlyMadeErrors: [
      {
        error: 'Confusing $U = \\frac{1}{2}LI^2$ with resistor Joule heat $I^2 Rt$.',
        tip: 'An ideal inductor stores energy REVERSIBLY in its magnetic field without dissipating heat.',
        penalty: 'Loss of 1 mark.'
      }
    ],
    assertionReason: {
      assertion: 'A spark is often observed across a switch when an inductive circuit carrying heavy current is suddenly opened.',
      reason: 'Rapidly dropping current from $I$ to $0$ makes $dI/dt$ huge, generating a large self-induced emf $e = -L(dI/dt)$ that ionizes air across the gap.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Stored energy $\\frac{1}{2}LI^2$ discharges across the air gap.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023',
      frequency: 'High Frequency',
      typicalMarks: '2–3 Marks',
      questionTypes: 'Derive U = ½LI² and magnetic energy density u = B²/(2μ₀); explain sparking on breaking inductive circuit',
      hotTopic: 'Inductor energy derivation & solenoid energy density'
    }
  },

  'phy-sub-6-10': {
    definitions: [
      {
        term: 'AC Generator (Principle & EMF Derivation)',
        definition: 'A device converting mechanical energy into alternating electrical energy using electromagnetic induction. When a coil ($N$ turns, area $A$) rotates at uniform angular speed $\\omega = 2\\pi\\nu$ in uniform field $B$: $\\Phi_B = NBA\\cos(\\omega t) \\implies e = -\\frac{d\\Phi_B}{dt} = NBA\\omega\\sin(\\omega t) = e_0\\sin(\\omega t)$.'
      }
    ],
    keyPoints: [
      '• <strong>Maximum vs Zero EMF Positions:</strong>\n  - <em>Coil Plane PARALLEL to $\\vec{B}$ ($\\theta = \\omega t = 90^\\circ$):</em> Flux $\\Phi_B = 0$, but rate of change $|d\\Phi/dt|$ and induced emf are <strong>MAXIMUM ($e_0 = NBA\\omega$)</strong>!\n  - <em>Coil Plane PERPENDICULAR to $\\vec{B}$ ($\\theta = 0^\\circ, 180^\\circ$):</em> Flux $\\Phi_B = \\pm NBA$ is maximum, but induced emf is <strong>ZERO</strong>!',
      '• <strong>Essential Components:</strong> Field magnet, Armature coil, Slip rings (preserve AC polarity without commutating), Carbon brushes.'
    ],
    extraPoints: [
      '• Household AC in India operates at $\\nu = 50\\text{ Hz}$ ($\\omega = 100\\pi\\text{ rad/s}$), changing direction $100$ times per second.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Zero Flux = Max EMF!',
      phrase: 'Coil plane PARALLEL to B → Φ = 0, EMF = MAX (NBAω) | Slip Rings = AC Generator!',
      explanation: 'Guaranteed 5-mark Ch 6 board question alongside labelled diagram.'
    },
    commonlyMadeErrors: [
      {
        error: 'Writing split-ring commutator instead of slip rings for an AC generator, or claiming peak emf occurs when flux is maximum.',
        tip: 'Since $e = -d\\Phi/dt$, $\\cos(\\omega t)$ differentiates to $\\sin(\\omega t)$ — $90^\\circ$ out of phase with flux! Also AC uses FULL circular SLIP RINGS (DC uses split rings).',
        penalty: 'Loss of 1–1.5 marks on 5M diagram/derivation.'
      }
    ],
    assertionReason: {
      assertion: 'In an AC generator, induced emf reaches its peak value at the instant when magnetic flux linked with the armature coil is zero.',
      reason: 'Magnetic flux $\\Phi = NBA\\cos\\omega t$ and induced emf $e = NBA\\omega\\sin\\omega t$ differ in phase by $\\pi/2$, so $|d\\Phi/dt|$ is steepest when $\\Phi$ crosses zero.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Derivative of cosine is zero-crossing maximum of sine.'
    },
    examTrend: {
      pastYears: 'CBSE 2025, 2024, 2023, 2022',
      frequency: '99% Guaranteed 3M/5M Question',
      typicalMarks: '3–5 Marks',
      questionTypes: 'Draw labelled AC generator diagram; state principle & derive e = NBAω sinωt; calculate peak and rms emf from rpm',
      hotTopic: 'AC generator labelled diagram + e_0 = NBAω derivation'
    }
  },

  // CHAPTER 7 MISSING SUBTOPICS: 7-1, 7-3, 7-6, 7-7
  'phy-sub-7-1': {
    definitions: [
      {
        term: 'AC Through a Pure Resistor ($R$)',
        definition: 'Applying $V = V_0\\sin(\\omega t)$ across pure resistor $R$ gives $I = I_0\\sin(\\omega t)$ with $I_0 = V_0/R$. Voltage and current are strictly IN PHASE ($\\phi = 0^\\circ$), average power $P_{\\text{avg}} = V_{\\text{rms}} I_{\\text{rms}} = I_{\\text{rms}}^2 R > 0$, and impedance $Z = R$ (independent of frequency).'
      }
    ],
    keyPoints: [
      '• <strong>Phasor & Frequency Independence:</strong> Voltage phasor $\\vec{V}_R$ and current phasor $\\vec{I}$ point along the SAME line ($\\phi = 0^\\circ$). Resistance $R$ does NOT depend on AC frequency $\\nu$ — ideal straight horizontal line on an $R$ vs $\\nu$ plot.',
      '• <strong>Power Pulsates at $2\\omega$:</strong> Instantaneous power $p(t) = I_0^2 R\\sin^2(\\omega t) = \\frac{1}{2}I_0^2 R(1 - \\cos 2\\omega t)$ is never negative and averages to $V_{\\text{rms}} I_{\\text{rms}}$.'
    ],
    extraPoints: [
      '• Mean value of pure sinusoidal AC over a FULL cycle is zero, whereas over a HALF cycle it is $I_{\\text{avg, half}} = \\frac{2 I_0}{\\pi} \\approx 0.637 I_0$.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Resistor = Zero Phase, Flat with Frequency',
      phrase: 'Pure R: φ = 0° | R independent of f | Average Full-Cycle Current = 0, RMS = I₀/√2 = 0.707 I₀',
      explanation: 'Foundational baseline for pure L, pure C, and RLC phasors.'
    },
    commonlyMadeErrors: [
      {
        error: 'Thinking a resistor blocks DC or changes resistance when AC frequency doubles.',
        tip: 'Pure resistance $R$ is frequency-independent; ONLY reactances $X_L = 2\\pi\\nu L$ and $X_C = \\frac{1}{2\\pi\\nu C}$ change with frequency $\\nu$!',
        penalty: 'Loss of 1 mark on $X_L, X_C, R$ vs $\\nu$ graph question.'
      }
    ],
    assertionReason: {
      assertion: 'Although the average value of alternating current over one complete cycle is zero, an electric heater still produces heat on an AC supply.',
      reason: 'Joule heating $H \\propto I^2 R$ depends on the square of current ($I_{\\text{rms}}^2$), which is always positive during both half-cycles.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Instantaneous heating power is always $\\ge 0$.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023',
      frequency: 'High Frequency',
      typicalMarks: '2 Marks',
      questionTypes: 'Show I and V in phase; plot R, X_L, X_C vs frequency; compute I_rms vs half-cycle average',
      hotTopic: 'Pure R vs L vs C comparison table (MLL Ch 7)'
    }
  },

  'phy-sub-7-3': {
    definitions: [
      {
        term: 'AC Through a Pure Capacitor ($C$)',
        definition: 'Applying $V = V_0\\sin(\\omega t)$ gives charge $q = C V_0\\sin(\\omega t)$ and current $I = \\frac{dq}{dt} = \\frac{V_0}{X_C}\\sin(\\omega t + \\pi/2)$, where capacitive reactance $X_C = \\frac{1}{\\omega C} = \\frac{1}{2\\pi\\nu C}$ (Unit: $\\Omega$). Current LEADS voltage by $\\pi/2$ ($90^\\circ$).'
      }
    ],
    keyPoints: [
      '• <strong>Frequency Behaviour:</strong> $X_C \\propto 1/\\nu$ (rectangular hyperbola!). For steady DC ($\\nu = 0$), $X_C = \\infty$ → a capacitor BLOCKS DC and EASILY PASSES high-frequency AC.',
      '• <strong>Zero Average Power (Wattless Current):</strong> Because $\\phi = \\pi/2$, $P_{\\text{avg}} = V_{\\text{rms}} I_{\\text{rms}} \\cos 90^\\circ = 0$ — capacitor charges during two quarters and returns energy to source during the next two quarters.'
    ],
    extraPoints: [
      '• Increasing frequency $\\nu$ doubles current in a pure capacitor (since $X_C$ halves), whereas in a pure inductor current halves (since $X_L$ doubles)!'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'CIVIL Rule for AC Phase',
      phrase: 'In C: I leads V (I before V) | In L: V leads I (V before I) | X_C = 1/(2πνC) Blocks DC (ν=0)!',
      explanation: 'Never forget phase lead/lag or why capacitors block DC.'
    },
    commonlyMadeErrors: [
      {
        error: 'Writing $X_C = \\omega C$ instead of $\\frac{1}{\\omega C}$, or forgetting average power is zero in both pure $L$ and pure $C$.',
        tip: 'Remember capacitive reactance decreases with frequency ($X_C = 1/(\\omega C)$), so bright lamp in series with capacitor gets BRIGHTER at higher frequency!',
        penalty: 'Loss of 1–2 marks on brightness-frequency board problems.'
      }
    ],
    assertionReason: {
      assertion: 'A capacitor blocks steady direct current (DC) but permits alternating current (AC) to pass.',
      reason: 'Capacitive reactance $X_C = \\frac{1}{2\\pi\\nu C}$ becomes infinite at $\\nu = 0$ (DC) and decreases as frequency $\\nu$ increases.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Exact MLL Ch 7 pure capacitive circuit concept.'
    },
    examTrend: {
      pastYears: 'CBSE 2025, 2024, 2023, 2021',
      frequency: '98% Guaranteed Board Topic',
      typicalMarks: '2–3 Marks',
      questionTypes: 'Prove current leads V by π/2 in pure capacitor; prove P_avg = 0; series bulb + capacitor frequency effect',
      hotTopic: 'Pure C derivation, phasor, X_C vs f graph, series bulb effect'
    }
  },

  'phy-sub-7-6': {
    definitions: [
      {
        term: 'Electrical Resonance in Series LCR Circuit',
        definition: 'The condition at resonant angular frequency $\\omega_r = \\frac{1}{\\sqrt{LC}}$ ($\\nu_r = \\frac{1}{2\\pi\\sqrt{LC}}$) where inductive and capacitive reactances cancel ($X_L = X_C$), making impedance minimum ($Z_{\\min} = R$), current MAXIMUM ($I_{\\max} = V/R$), and phase angle $\\phi = 0^\\circ$ (purely resistive).'
      },
      {
        term: 'Quality Factor ($Q$-Factor) / Sharpness',
        definition: 'Measure of resonance sharpness: $Q = \\frac{\\omega_r L}{R} = \\frac{1}{\\omega_r C R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$ (dimensionless). Higher $Q$ gives a narrower, sharper peak (better tuning selectivity in radios).'
      }
    ],
    keyPoints: [
      '• <strong>Resonance Conditions Summary:</strong> At $\\nu = \\nu_r$: (1) $X_L = X_C$, (2) $V_L = V_C$ (so $V_{\\text{source}} = V_R$, even though $V_L$ and $V_C$ can individually exceed $V_{\\text{source}}$!), (3) $Z = R$ (min), (4) $I = V/R$ (max), (5) Power factor $\\cos\\phi = 1$.',
      '• <strong>Graph Curve:</strong> Plotting current $I$ vs frequency $\\nu$ peaks sharply at $\\nu_r$; smaller resistance $R$ gives TALLER and SHARPER resonance peak.'
    ],
    extraPoints: [
      '• Bandwidth $\\Delta\\omega = R/L$, so $Q = \\omega_r / \\Delta\\omega$. (NCERT rationalized emphasizes resonance condition + qualitative sharpness with $R$.)'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Resonance Checklist at ω_r = 1/√(LC)',
      phrase: 'X_L = X_C → Z = R (min) → I = V/R (MAX) → φ = 0° (cosφ = 1) → V_L + V_C = 0 (Cancel!) → Lower R = Sharper Peak!',
      explanation: 'All 5 one-mark MCQs and 3-mark resonance numericals solved in one place.'
    },
    commonlyMadeErrors: [
      {
        error: 'Adding $V_R + V_L + V_C$ algebraically at resonance and thinking $V_L$ cannot exceed source voltage $V$.',
        tip: 'Since $V_L$ and $V_C$ are $180^\\circ$ out of phase, $V = \\sqrt{V_R^2 + (V_L - V_C)^2} = V_R$ at resonance even if $V_L = V_C = 10\\times V$!',
        penalty: 'Loss of 2 marks on voltmeter-across-LC questions.'
      }
    ],
    assertionReason: {
      assertion: 'At resonance in a series LCR circuit, the voltage measured across the combined inductor-capacitor (LC) pair is zero even though individual voltages across L and C are large.',
      reason: 'At resonance $X_L = X_C$, so $V_L$ and $V_C$ have equal magnitude but opposite phase ($180^\\circ$ apart) and cancel out.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Peak current still passes without net $LC$ drop.'
    },
    examTrend: {
      pastYears: 'CBSE 2025, 2024, 2023, 2022',
      frequency: '99% Guaranteed Numerical + Concept',
      typicalMarks: '3–5 Marks',
      questionTypes: 'Compute resonant frequency f_r, max current, power dissipated, voltage across L and C at resonance; plot I vs ω for two values of R',
      hotTopic: 'Resonance numerical + sharpness curve for small R vs large R'
    }
  },

  'phy-sub-7-7': {
    definitions: [
      {
        term: 'Average Power in AC & Power Factor ($\\cos\\phi$)',
        definition: 'Average power over a full AC cycle in an LCR circuit is $P_{\\text{avg}} = V_{\\text{rms}} I_{\\text{rms}} \\cos\\phi = I_{\\text{rms}}^2 R$, where power factor $\\cos\\phi = \\frac{R}{Z} = \\frac{R}{\\sqrt{R^2 + (X_L - X_C)^2}}$ lies between $0$ and $1$.'
      },
      {
        term: 'Wattless Current',
        definition: 'The quadrature current component $I_{\\text{rms}}\\sin\\phi$ ($90^\\circ$ out of phase with voltage) that consumes ZERO average power over a cycle (e.g., ideal pure $L$ or $C$ where $\\cos\\phi = 0$).'
      }
    ],
    keyPoints: [
      '• <strong>Values of Power Factor:</strong> Pure $R$ or Resonant LCR: $\\cos\\phi = 1$ (maximum power dissipated); Pure $L$ or Pure $C$: $\\cos\\phi = 0$ (zero power loss — why choke coils are preferred over resistors in fluorescent tubes!).',
      '• <strong>Derivation Step:</strong> Starting from $p(t) = V_0 I_0 \\sin(\\omega t)\\sin(\\omega t - \\phi)$ and using $2\\sin A\\sin B = \\cos(A-B) - \\cos(A+B)$, the oscillating $2\\omega t$ cosine term averages to $0$, leaving $\\frac{1}{2}V_0 I_0 \\cos\\phi = V_{\\text{rms}} I_{\\text{rms}} \\cos\\phi$.'
    ],
    extraPoints: [
      '• Power factor is a dimensionless scalar ($0 \\le \\cos\\phi \\le 1$). Adding a resistor in series increases $P_{\\text{avg}}$, whereas an ideal choke coil limits current without wasting energy.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Cosφ = R/Z Power Anchor',
      phrase: 'P_avg = V_rms I_rms cosφ = I²_rms R | Wattless Current = I_rms sinφ | Pure L/C/Choke Coil → φ=90° → ZERO Heat!',
      explanation: 'Slide 39 derivation & black-box circuit identification.'
    },
    commonlyMadeErrors: [
      {
        error: 'Multiplying $V_{\\text{rms}} \\times I_{\\text{rms}}$ directly as average power in an RL or RC circuit without multiplying by $\\cos\\phi = R/Z$.',
        tip: '$V_{\\text{rms}} I_{\\text{rms}}$ is APPARENT power; TRUE (dissipated) power ALWAYS requires the power factor $\\cos\\phi = R/Z$ (or use $I_{\\text{rms}}^2 R$ directly since only $R$ dissipates heat!).',
        penalty: 'Loss of 1–2 marks in AC numericals.'
      }
    ],
    assertionReason: {
      assertion: 'A choke coil (inductor) is preferred over an ohmic resistor to reduce alternating current in AC circuits.',
      reason: 'An ideal choke coil offers inductive reactance $X_L = \\omega L$ with $\\phi \\approx 90^\\circ$, resulting in nearly zero power factor ($\\cos\\phi \\approx 0$) and minimal Joule heat loss.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Resistors waste $I^2 R$ heat whereas ideal inductors return energy each cycle.'
    },
    examTrend: {
      pastYears: 'CBSE 2025, 2024, 2023, 2020',
      frequency: 'High Frequency',
      typicalMarks: '2–3 Marks',
      questionTypes: 'Derive P = V_rms I_rms cosφ; identify black-box element from phase/power; compute power factor & wattless current',
      hotTopic: 'Power factor cosφ = R/Z + wattless current'
    }
  },

  // CHAPTER 8 MISSING SUBTOPICS: 8-1, 8-2, 8-4
  'phy-sub-8-1': {
    definitions: [
      {
        term: 'Electromagnetic Spectrum Order & Wave Production',
        definition: 'Continuous arrangement of EM waves in order of decreasing wavelength / increasing frequency: <strong>Radio waves</strong> ($> 0.1\\text{ m}$) → <strong>Microwaves</strong> ($0.1\\text{ m–}1\\text{ mm}$) → <strong>Infrared</strong> ($1\\text{ mm–}700\\text{ nm}$) → <strong>Visible</strong> ($700\\text{–}400\\text{ nm}$) → <strong>UV</strong> ($400\\text{–}1\\text{ nm}$) → <strong>X-rays</strong> ($1\\text{ nm–}10^{-3}\\text{ nm}$) → <strong>Gamma rays</strong> ($< 10^{-3}\\text{ nm}$).'
      }
    ],
    keyPoints: [
      '• <strong>Guaranteed Board Match (Production, Detection & Use):</strong>\n  1. <em>Radio waves:</em> Accelerated charges in LC circuits/antennas → Radio/TV.\n  2. <em>Microwaves:</em> Klystron/Magnetron/Gunn diodes → RADAR, aircraft navigation, microwave ovens (water resonance).\n  3. <em>Infrared:</em> Hot bodies/molecular vibrations → Physical therapy, remote controls, night vision, greenhouse effect ("heat waves").\n  4. <em>UV rays:</em> Sun, special lamps, inner-shell transitions → LASIK eye surgery, water purifiers (sterilization), burglar alarms (blocked by ordinary glass!).\n  5. <em>X-rays:</em> Fast electrons hitting high-$Z$ metal target → Medical fracture imaging, crystal structure.\n  6. <em>Gamma rays:</em> Radioactive nuclear decay → Cancer radiotherapy.'
    ],
    extraPoints: [
      '• Welders wear special glass goggles because ordinary glass ABSORBS harmful UV radiation emitted by welding arcs.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'RMI-VUX-G Spectrum Order',
      phrase: 'Roman Men Invented Very Unusual X-ray Guns: Radio → Micro → IR → Visible → UV → X-ray → Gamma (λ↓, ν↑, E↑)',
      explanation: 'Guaranteed 2–3 mark Question in every single CBSE Physics set!'
    },
    commonlyMadeErrors: [
      {
        error: 'Mixing up production origins of X-rays (inner electronic shell / decelerating fast electrons) vs Gamma rays (nuclear origin).',
        tip: 'Even when wavelengths overlap, X-rays originate from electron transitions/deceleration, while Gamma rays strictly originate from NUCLEI!',
        penalty: 'Loss of 1 mark on distinguishing question.'
      }
    ],
    assertionReason: {
      assertion: 'Infrared waves are often referred to as heat waves.',
      reason: 'Water molecules, $\\text{CO}_2$, and $\\text{NH}_3$ readily absorb infrared radiation, increasing their thermal vibrational kinetic energy and heating the surroundings.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Explains both IR heating and Earth’s greenhouse warming.'
    },
    examTrend: {
      pastYears: 'CBSE 2025, 2024, 2023, 2022, 2020',
      frequency: '100% Guaranteed Board Table',
      typicalMarks: '2–3 Marks',
      questionTypes: 'Identify EM wave from wavelength/use (RADAR, LASIK, radiotherapy, hot bodies); state production + detection',
      hotTopic: 'Production, detection & application of Microwave / IR / UV / X-ray / Gamma'
    }
  },

  'phy-sub-8-2': {
    definitions: [
      {
        term: "Maxwell's Four Equations & EM Wave Source",
        definition: '(1) Gauss Electro: $\\oint \\vec{E}\\cdot d\\vec{A} = q/\\varepsilon_0$; (2) Gauss Magneto: $\\oint \\vec{B}\\cdot d\\vec{A} = 0$; (3) Faraday: $\\oint \\vec{E}\\cdot d\\vec{l} = -\\frac{d\\Phi_B}{dt}$; (4) Ampere–Maxwell: $\\oint \\vec{B}\\cdot d\\vec{l} = \\mu_0(I_c + \\varepsilon_0 \\frac{d\\Phi_E}{dt})$. Accelerating/oscillating charges produce EM waves.'
      }
    ],
    keyPoints: [
      '• <strong>Stationary vs Uniform vs Accelerated Charge (MLL Ch 8):</strong> Stationary charge → ONLY $\\vec{E}$; Steady uniform velocity → $\\vec{E}$ and steady $\\vec{B}$ (NO radiation); <strong>Accelerated / Oscillating charge → radiates EM waves</strong> of frequency equal to oscillation frequency!',
      '• Symmetric coupling of Faraday ($\\Delta B \\to E$) and Ampere–Maxwell ($\\Delta E \\to B$) sustains EM propagation without any material medium.'
    ],
    extraPoints: [
      '• Speed of EM wave in vacuum $c = \\frac{1}{\\sqrt{\\mu_0\\varepsilon_0}}$ and in medium $v = \\frac{1}{\\sqrt{\\mu\\varepsilon}} = \\frac{c}{\\sqrt{\\mu_r\\varepsilon_r}}$.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Charge Speed → Field Trio',
      phrase: 'At rest: E only | Uniform v: E + B (No EM wave) | Accelerated charge: Radiates EM Waves (Maxwell)!',
      explanation: 'Directly highlights MLL Ch 8 minimum learning concept.'
    },
    commonlyMadeErrors: [
      {
        error: 'Saying a charge moving with constant velocity radiates electromagnetic waves.',
        tip: 'Uniform motion produces a steady current (constant $\\vec{B}$), NOT radiating EM waves; ACCELERATION is strictly required to radiate!',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'An oscillating electric charge radiates electromagnetic waves of the same frequency as its oscillation.',
      reason: 'An oscillating charge is continuously accelerating, producing time-varying electric and magnetic fields that regenerate each other.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Direct synthesis of Maxwell’s equations.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2021',
      frequency: 'High Frequency',
      typicalMarks: '2 Marks',
      questionTypes: 'Source of EM waves (accelerated charge); sketch oscillating E and B perpendicular to propagation axis',
      hotTopic: 'Accelerated charge source + 4 Maxwell equations'
    }
  },

  'phy-sub-8-4': {
    definitions: [
      {
        term: 'Properties of Electromagnetic Waves',
        definition: 'Transverse waves in which $\\vec{E}$ and $\\vec{B}$ oscillate perpendicularly to each other and to wave propagation $\\hat{k}$ (along $\\vec{E} \\times \\vec{B}$), strictly IN PHASE: $E_0 / B_0 = c$, with speed $c = 1/\\sqrt{\\mu_0\\varepsilon_0} = 3 \\times 10^8\\text{ m/s}$.'
      }
    ],
    keyPoints: [
      '• <strong>Five Core CBSE Properties (MLL Ch 8):</strong>\n  1. <em>Transverse nature:</em> $\\vec{E} \\perp \\vec{B} \\perp \\vec{c}$ (propagation direction given by $\\vec{E} \\times \\vec{B}$).\n  2. <em>Zero net charge:</em> Undeflected by external electric or magnetic fields.\n  3. <em>Same phase:</em> $E_y = E_0\\sin(kx - \\omega t)$ and $B_z = B_0\\sin(kx - \\omega t)$ peak simultaneously.\n  4. <em>Amplitude ratio & Energy Partition:</em> $E_0 = c B_0$, and average energy density is EQUALLY divided ($u_E = u_B$, ratio $1:1$, total $u = \\frac{1}{2}\\varepsilon_0 E_{\\text{rms}}^2 + \\frac{B_{\\text{rms}}^2}{2\\mu_0}$).\n  5. <em>Momentum & Radiation Pressure:</em> Carry momentum $p = U/c$ (total absorption) or $2U/c$ (total reflection).'
    ],
    extraPoints: [
      '• From equation $E_y = 60\\cos(2\\times 10^6 x - 6\\times 10^{14} t)$, read $k$, $\\omega$, propagation direction ($+x$ because signs differ!), and find $B_0 = E_0/c$ directly!'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'E × B = Direction & u_E = u_B',
      phrase: 'Direction of EM Wave = E⃗ × B⃗ | E₀ = cB₀ | Electric : Magnetic Energy Density = 1 : 1 | Momentum = U/c',
      explanation: 'Solves wave-equation numericals like E_y = E₀ sin(kx + ωt) → −x propagation!'
    },
    commonlyMadeErrors: [
      {
        error: 'Thinking $\\vec{E}$ and $\\vec{B}$ are $90^\\circ$ out of phase or getting the propagation direction sign wrong in $\\sin(kx \\pm \\omega t)$.',
        tip: 'In vacuum, $\\vec{E}$ and $\\vec{B}$ are strictly IN PHASE (ratio $E/B = c$ at every instant). Moreover, $(kx - \\omega t)$ moves along $+x$, whereas $(kx + \\omega t)$ moves along $-x$!',
        penalty: 'Sign/phase error loses 1–2 marks.'
      }
    ],
    assertionReason: {
      assertion: 'In an electromagnetic wave propagating in vacuum, the average energy density associated with the electric field equals that of the magnetic field.',
      reason: 'Since $E = cB$ and $c^2 = 1/(\\mu_0\\varepsilon_0)$, $\\frac{1}{2}\\varepsilon_0 E_{\\text{rms}}^2 = \\frac{1}{2}\\varepsilon_0 (c^2 B_{\\text{rms}}^2) = \\frac{B_{\\text{rms}}^2}{2\\mu_0}$.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: '50% electric energy + 50% magnetic energy.'
    },
    examTrend: {
      pastYears: 'CBSE 2025, 2024, 2023, 2022',
      frequency: '99% Guaranteed Numerical/Property',
      typicalMarks: '2–3 Marks',
      questionTypes: 'Find λ, ν, B₀ and wave equation from given E⃗; prove u_E = u_B; show direction via E × B',
      hotTopic: 'Finding B⃗ equation and propagation direction from given E⃗(x,t)'
    }
  }
};
