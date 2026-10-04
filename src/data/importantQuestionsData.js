// Top 22 Guaranteed CBSE Class 12 Physics Board Exam Questions
// Rigorous Step-by-Step Derivations with Exact NCERT Textbook References

export const IMPORTANT_PHYSICS_QUESTIONS = [
  {
    id: 'imp-phy-1',
    number: 1,
    title: "Gauss's Law & Applications: Plane Sheet, Straight Wire & Spherical Shell",
    shortLabel: "Gauss's Law (Plane, Wire, Shell)",
    chapterId: 'phy-ch-1',
    chapterTitle: 'Electric Charges and Fields',
    unit: 'Electrostatics',
    marks: '5 Marks',
    marksNum: 5,
    category: 'Derivation',
    frequency: '99% Frequency (Asked in almost every CBSE Board Exam)',
    questionPrompt: "(a) State Gauss's law in electrostatics.\n(b) Using Gauss's law, derive an expression for the electric field due to:\n  (i) An infinitely long straight uniformly charged wire of linear charge density λ.\n  (ii) An infinite uniformly charged plane sheet of surface charge density σ.\n  (iii) A thin spherical shell of radius R and surface charge density σ, at points outside (r ≥ R) and inside (r < R) the shell.",
    ncertRef: {
      textbook: 'NCERT Physics Class 12, Part 1',
      chapter: 'Chapter 1: Electric Charges and Fields',
      section: 'Sections 1.14 & 1.15 (pp. 33–40)',
      equations: 'Eqs. (1.31), (1.32), (1.33), (1.35), (1.36)',
      figures: 'Figs. 1.29, 1.30, 1.31',
      summary: 'Gauss\'s flux theorem and rigorous field derivations for cylindrical symmetry (wire), planar symmetry (sheet), and spherical symmetry (shell).'
    },
    modelAnswer: {
      statement: "Gauss's Law: The total electric flux Φ_E through any closed Gaussian surface in free space is equal to 1/ε₀ times the net charge q_enclosed enclosed by that surface:\n∮ E⃗ · dA⃗ = q_enclosed / ε₀",
      derivations: [
        {
          name: "Application 1: Infinitely Long Straight Wire (Linear Charge Density λ) [NCERT Section 1.15.1]",
          steps: [
            "Setup & Symmetry: Consider an infinitely long, thin straight wire carrying uniform linear charge density λ = dq/dL. By cylindrical symmetry, the electric field E⃗ is directed radially outward (if λ > 0) perpendicular to the wire, and its magnitude depends only on radial distance r.",
            "Choice of Gaussian Surface: Construct a closed coaxial cylindrical Gaussian surface of radius r and length L centered on the wire.",
            "Decomposition of Flux: The total surface consists of three parts: two flat circular end-caps (S₁ and S₂) and one curved cylindrical surface (S₃): ∮ E⃗ · dA⃗ = ∫_S₁ E⃗ · dA⃗ + ∫_S₂ E⃗ · dA⃗ + ∫_S₃ E⃗ · dA⃗.",
            "Flux through Flat Circular Ends: At the flat end-caps, field E⃗ is radial while the area unit normal n̂ is parallel to the wire axis: E⃗ ⟂ n̂ (θ = 90°). Thus, cos(90°) = 0, giving ∫_S₁ E⃗ · dA⃗ = 0 and ∫_S₂ E⃗ · dA⃗ = 0.",
            "Flux through Curved Surface: Everywhere on the curved mantle, E⃗ is parallel to the outward area normal n̂ (θ = 0°), and |E⃗| = E is constant at fixed distance r. Thus: ∫_S₃ E⃗ · dA⃗ = E ∫_S₃ dA = E · (2πrL).",
            "Enclosed Charge: The length of wire enclosed inside the Gaussian cylinder is L, so q_enclosed = λ · L.",
            "Applying Gauss's Law: ∮ E⃗ · dA⃗ = q_enclosed / ε₀ ⟹ E · (2πrL) = (λL) / ε₀.",
            "Final Scalar & Vector Expression: Canceling L gives E = λ / (2πε₀r). In vector notation: E⃗ = [λ / (2πε₀r)] r̂ (where r̂ is the radial unit vector in the plane normal to the wire)."
          ],
          formula: "E = λ / (2πε₀r) ⟹ E ∝ 1/r"
        },
        {
          name: "Application 2: Infinite Uniformly Charged Plane Sheet (Surface Density σ) [NCERT Section 1.15.2]",
          steps: [
            "Setup & Symmetry: Consider an infinite, thin plane sheet with uniform surface charge density σ = dq/dA. By planar symmetry, electric field E⃗ is directed perpendicularly away from the sheet on both sides (if σ > 0), with magnitude independent of coordinates parallel to the sheet.",
            "Choice of Gaussian Pillbox: Construct a cylindrical 'pillbox' of cross-sectional area A and length 2r passing symmetrically through the sheet, with its two flat faces parallel to the sheet at distance r on either side.",
            "Flux through Curved Cylinder Wall: On the curved surface of the pillbox, E⃗ is parallel to the sheet while dA⃗ is perpendicular to the mantle: E⃗ ⟂ dA⃗ (θ = 90°), so the flux through the curved surface is zero.",
            "Flux through Flat End-Caps: On both circular end-caps (left and right), E⃗ is parallel to dA⃗ (θ = 0°). Flux through each end-cap is E · A, so total flux through the pillbox is: Φ_total = E·A + E·A = 2EA.",
            "Enclosed Charge: The cross-sectional area of the sheet enclosed within the pillbox is A, hence q_enclosed = σ · A.",
            "Applying Gauss's Law: 2EA = q_enclosed / ε₀ = (σA) / ε₀.",
            "Final Result: Canceling A gives E = σ / (2ε₀). Vector form: E⃗ = [σ / (2ε₀)] n̂, where n̂ is the outward unit normal from the sheet. Crucially, E is completely INDEPENDENT of distance r!"
          ],
          formula: "E = σ / (2ε₀)  [Uniform field; independent of distance r]"
        },
        {
          name: "Application 3: Thin Uniformly Charged Spherical Shell (Radius R, Total Charge q) [NCERT Section 1.15.3]",
          steps: [
            "Setup & Symmetry: Consider a thin spherical shell of radius R carrying total charge q = 4πR²σ uniformly distributed on its surface. By spherical symmetry, electric field E⃗ is directed radially outward everywhere.",
            "Case (i) Outside the Shell (r ≥ R): Choose a concentric spherical Gaussian surface of radius r > R. At every point on this sphere, E⃗ is radial and parallel to dA⃗ (θ = 0°), and |E⃗| = E is uniform. Flux Φ = ∮ E dA = E · (4πr²). The total charge enclosed is q_enclosed = q. By Gauss's law: E · (4πr²) = q / ε₀ ⟹ E_out = (1 / 4πε₀) · (q / r²).",
            "Physical Meaning for r ≥ R: For points outside, the charged shell behaves exactly as if all its charge were concentrated at the center.",
            "Case (ii) Inside the Shell (r < R): Choose a concentric spherical Gaussian surface of radius r < R inside the shell. Since all charge resides strictly on the outer surface of the shell, no charge is enclosed: q_enclosed = 0. By Gauss's law: E · (4πr²) = 0 / ε₀ ⟹ E_in = 0.",
            "At the Surface (r = R): E_surface = q / (4πε₀R²) = σ / ε₀ (discontinuous jump from 0 to σ/ε₀ across the charged layer)."
          ],
          formula: "E_out = (1/4πε₀)(q/r²) for r ≥ R ; E_in = 0 for r < R ; E_surface = σ/ε₀"
        }
      ],
      diagramNotes: "Draw 3 distinct diagrams: (1) Wire with coaxial Gaussian cylinder and radial field vectors; (2) Infinite plane with cylindrical pillbox cutting through it; (3) Spherical shell showing r > R and r < R Gaussian spheres and the E versus r discontinuity graph.",
      markingScheme: [
        "1 Mark: Statement of Gauss's Law with mathematical equation ∮ E⃗ · dA⃗ = q_enclosed / ε₀.",
        "1.5 Marks: Application 1 (Straight wire): Choice of Gaussian cylinder, flux evaluation showing zero end flux, and final formula E = λ/(2πε₀r).",
        "1.5 Marks: Application 2 (Plane sheet): Choice of pillbox, evaluation of 2EA = σA/ε₀, and final formula E = σ/(2ε₀).",
        "1 Mark: Application 3 (Spherical shell): Derivation for r ≥ R (E = kq/r²) and proof that E = 0 for r < R."
      ],
      examinerTips: "Always draw the Gaussian surface and show the area normal vector n̂ and field vector E⃗ explicitly with their angle θ. Remember to emphasize that for an infinite plane sheet, the electric field is strictly independent of distance."
    }
  },
  {
    id: 'imp-phy-2',
    number: 2,
    title: "Force on a Current-Carrying Conductor in a Magnetic Field",
    shortLabel: "Force on Conductor (F = ILB sinθ)",
    chapterId: 'phy-ch-4',
    chapterTitle: 'Moving Charges and Magnetism',
    unit: 'Magnetism',
    marks: '3 Marks',
    marksNum: 3,
    category: 'Derivation',
    frequency: 'High Frequency (CBSE 2023, 2022, 2019, 2018)',
    questionPrompt: "(a) Derive the expression for the magnetic force experienced by a straight conductor of length L carrying current I placed in a uniform magnetic field B.\n(b) State the rule used to determine the direction of this force.\n(c) What are the conditions for maximum and zero force?",
    ncertRef: {
      textbook: 'NCERT Physics Class 12, Part 1',
      chapter: 'Chapter 4: Moving Charges and Magnetism',
      section: 'Section 4.2.2: Magnetic Force on a Current-Carrying Conductor (pp. 135–136)',
      equations: 'Eqs. (4.4), (4.5)',
      figures: 'Fig. 4.4',
      summary: 'Integration of microscopic Lorentz forces on mobile electrons with drift velocity v_d to yield the macroscopic force F⃗ = I(L⃗ × B⃗).'
    },
    modelAnswer: {
      statement: "When a current-carrying conductor is placed in an external magnetic field, the mobile charge carriers (electrons) moving with drift velocity experience microscopic magnetic Lorentz forces. These individual forces are transmitted to the lattice ions, resulting in a net macroscopic mechanical force: F⃗ = I(L⃗ × B⃗).",
      derivations: [
        {
          name: "Derivation from Microscopic Electron Drift Dynamics [NCERT Section 4.2.2]",
          steps: [
            "Conductor Geometry: Consider a straight conductor of uniform cross-sectional area A and length L, placed in a uniform external magnetic field B⃗ at angle θ to its length vector L⃗.",
            "Free Electron Density: Let n be the number density of conduction electrons (number of free electrons per unit volume).",
            "Total Charge Carriers: The total volume of the conductor is V = A · L. Therefore, the total number of mobile electrons in the conductor is N = n · A · L.",
            "Microscopic Lorentz Force: When steady current I flows, the conduction electrons drift with average drift velocity v⃗_d opposite to current direction. Each electron carries charge q = -e. The magnetic force on a single electron is: f⃗ = -e (v⃗_d × B⃗).",
            "Summing Forces over All Carriers: The total magnetic force F⃗ experienced by the conductor is the vector sum over all N electrons: F⃗ = N · f⃗ = (nAL) · [-e (v⃗_d × B⃗)].",
            "Rearranging in Terms of Current: Grouping the microscopic terms: F⃗ = [n · e · A · (-v⃗_d)] L × B⃗. By definition of electric current, current density is j⃗ = n e (-v⃗_d) and macroscopic current is I = n e A v_d. In vector form, current flowing along the length vector satisfies: I L⃗ = n A L (-e v⃗_d).",
            "Macroscopic Vector Equation: Substituting I L⃗ gives: F⃗ = I (L⃗ × B⃗).",
            "Scalar Magnitude & Special Cases: The magnitude of the force is F = I L B sinθ (where θ is the angle between the conductor's length vector along current and field B⃗).",
            "Special Case 1 (Maximum Force): When conductor is perpendicular to the field (θ = 90°, sin 90° = 1): F_max = I L B.",
            "Special Case 2 (Zero Force): When conductor is parallel or antiparallel to the field (θ = 0° or 180°, sinθ = 0): F = 0."
          ],
          formula: "F⃗ = I(L⃗ × B⃗)  ⟹  F = I L B sinθ  [F_max = ILB at θ = 90° ; F = 0 at θ = 0°]"
        }
      ],
      diagramNotes: "Draw a straight wire segment of length L at angle θ to uniform B lines; show drift velocity v_d opposite to current I, and force vector F normal to both L and B.",
      markingScheme: [
        "1.5 Marks: Step-by-step mathematical transition from single electron Lorentz force f = -e(v_d × B) to macroscopic force F = I(L × B).",
        "0.5 Mark: Statement of Fleming's Left-Hand Rule or Right-Hand Palm Rule for direction.",
        "1 Mark: Analysis of special cases: maximum force at θ = 90° and zero force at θ = 0°/180°."
      ],
      examinerTips: "Direction Rule: Fleming's Left-Hand Rule — Forefinger points along Field B, Middle finger points along Current I, and Thumb points along Force F. Remember that a conductor aligned along the magnetic field experiences ZERO force."
    }
  },
  {
    id: 'imp-phy-3',
    number: 3,
    title: "Faraday's Laws of Induction & Lenz's Law (Energy Conservation)",
    shortLabel: "Faraday's & Lenz's Laws",
    chapterId: 'phy-ch-6',
    chapterTitle: 'Electromagnetic Induction',
    unit: 'Electromagnetic Induction',
    marks: '3 Marks',
    marksNum: 3,
    category: 'Conceptual & Theory',
    frequency: 'Guaranteed Core Question (Every Alternate Year)',
    questionPrompt: "(a) State Faraday's laws of electromagnetic induction.\n(b) State Lenz's law. Explain how Lenz's law is a direct consequence of the principle of conservation of energy.\n(c) A bar magnet is pushed towards a closed conducting loop. Show that mechanical work is converted into electrical energy.",
    ncertRef: {
      textbook: 'NCERT Physics Class 12, Part 1',
      chapter: 'Chapter 6: Electromagnetic Induction',
      section: 'Sections 6.4 & 6.5 (pp. 207–213)',
      equations: 'Eqs. (6.1), (6.2), (6.3)',
      figures: 'Figs. 6.6, 6.7',
      summary: 'Quantitative formulation of induced emf ε = -dΦ_B/dt and Lenz\'s polarity law as an essential manifestation of energy conservation.'
    },
    modelAnswer: {
      statement: "• Faraday's First Law: Whenever the magnetic flux linked with a closed conducting circuit changes with time, an electromotive force (emf) is induced in the circuit, lasting as long as the flux continues to change.\n• Faraday's Second Law: The magnitude of the induced emf is directly proportional to the time rate of change of magnetic flux linked with the circuit:\nε = -dΦ_B / dt  (for a coil of N tightly wound turns: ε = -N dΦ_B / dt)",
      derivations: [
        {
          name: "Lenz's Law and Conservation of Energy Proof [NCERT Section 6.5]",
          steps: [
            "Statement of Lenz's Law: The polarity of the induced emf is such that it produces an induced current whose magnetic effect opposes the change in magnetic flux that produces it.",
            "Significance of Negative Sign: In ε = -dΦ_B/dt, the negative sign mathematically encodes this opposition prescribed by Lenz's law.",
            "Energy Conservation Case 1 (Approaching N-pole): When the North pole of a bar magnet is pushed toward a closed loop, the magnetic flux linked with the loop increases. By Lenz's law, the induced current flows anticlockwise (as seen from the magnet side), establishing an induced North magnetic pole on the near face of the loop. This induced North pole repels the incoming North pole of the magnet.",
            "Mechanical Work Requirement: To maintain the forward motion of the magnet against this repulsive magnetic force, an external agent must do mechanical work.",
            "Energy Transformation: This mechanical work done by the external agent is continuously converted into electrical energy in the coil, which eventually dissipates as Joule heat (H = I²Rt).",
            "Proof by Contradiction: Suppose Lenz's law were opposite (induced current produced a South pole). The incoming North pole would experience an attractive force that accelerates it forward without any external push. The speed and kinetic energy of the magnet would increase continuously while generating electrical energy simultaneously — creating energy from nothing and violating the First Law of Thermodynamics!",
            "Conclusion: Therefore, Lenz's law is a direct, necessary consequence of the Law of Conservation of Energy."
          ],
          formula: "ε = -dΦ_B / dt = -N (dΦ_B / dt)  [Negative sign represents Lenz's opposition]"
        }
      ],
      diagramNotes: "Draw a circular loop with approaching N-pole showing counter-clockwise induced current (N-pole face); draw receding N-pole showing clockwise current (S-pole face).",
      markingScheme: [
        "1 Mark: Precise statement of Faraday's first and second laws with formula ε = -dΦ/dt.",
        "1 Mark: Precise statement of Lenz's law.",
        "1 Mark: Complete justification of energy conservation (mechanical work against magnetic repulsion converting to electrical/Joule energy)."
      ],
      examinerTips: "Precise phrasing is critical: write 'opposes the change in magnetic flux that produces it' — never write 'opposes the current'. Emphasize the work-energy conversion."
    }
  },
  {
    id: 'imp-phy-4',
    number: 4,
    title: "Transformer: Principle, Construction, Working Derivation & Energy Losses",
    shortLabel: "Transformer Construction & Derivation",
    chapterId: 'phy-ch-7',
    chapterTitle: 'Alternating Current',
    unit: 'Alternating Current',
    marks: '5 Marks',
    marksNum: 5,
    category: 'Derivation & 5-Marker',
    frequency: 'Top 5-Marker Derivation (CBSE 2023, 2020, 2018, 2016)',
    questionPrompt: "(a) State the principle of an AC transformer.\n(b) Describe its construction with a neat labelled diagram.\n(c) Derive the relation between input and output voltages and currents for an ideal transformer.\n(d) Mention 4 major energy losses in a practical transformer and how each is minimized.",
    ncertRef: {
      textbook: 'NCERT Physics Class 12, Part 1',
      chapter: 'Chapter 7: Alternating Current',
      section: 'Section 7.9: Transformers (pp. 259–262)',
      equations: 'Eqs. (7.54), (7.55), (7.57)',
      figures: 'Fig. 7.20',
      summary: 'Mutual flux linkage across primary and secondary windings on laminated iron core; derivation of voltage and current transformation ratios.'
    },
    modelAnswer: {
      statement: "Principle: A transformer works on the principle of Mutual Induction — when an alternating current flows through the primary winding, a time-varying magnetic flux is set up in the laminated iron core which links the secondary winding, inducing an alternating emf of the same frequency across its terminals.",
      derivations: [
        {
          name: "Mathematical Derivation of Transformation Ratio [NCERT Section 7.9]",
          steps: [
            "Setup & Assumptions: Let primary winding have N_p turns and secondary have N_s turns, both wound on a soft-iron core of high magnetic permeability. Assume ideal conditions: (1) no magnetic flux leakage (same flux Φ links each turn of both coils); (2) zero resistance in windings; (3) negligible core losses.",
            "Primary Back EMF: The alternating current in primary creates magnetic flux Φ in the core. The induced self-emf in primary is: ε_p = -N_p (dΦ/dt).",
            "Secondary Induced EMF: Since the same magnetic flux links each turn of the secondary winding, the induced emf in secondary is: ε_s = -N_s (dΦ/dt).",
            "Terminal Voltage Ratio: For ideal zero-resistance windings, terminal voltages equal induced emfs: V_p = ε_p and V_s = ε_s. Taking the ratio: V_s / V_p = [ -N_s (dΦ/dt) ] / [ -N_p (dΦ/dt) ] ⟹ V_s / V_p = N_s / N_p = k (transformation ratio).",
            "Step-Up vs Step-Down Classification:",
            "  • Step-Up Transformer: N_s > N_p ⟹ k > 1 ⟹ V_s > V_p (Output voltage exceeds input voltage).",
            "  • Step-Down Transformer: N_s < N_p ⟹ k < 1 ⟹ V_s < V_p (Output voltage is less than input voltage).",
            "Current Relation via Conservation of Energy: For an ideal transformer with 100% efficiency, input power equals output power: P_in = P_out ⟹ V_p · I_p = V_s · I_s.",
            "Current Ratio: Rearranging gives: I_p / I_s = V_s / V_p = N_s / N_p = k.",
            "Conclusion: In a step-up transformer, voltage is stepped up by factor k, but current is stepped down by the exact same factor k, strictly conserving electrical power!"
          ],
          formula: "V_s / V_p = I_p / I_s = N_s / N_p = k  [Step-up: k > 1 ; Step-down: k < 1]"
        }
      ],
      diagramNotes: "Draw a closed rectangular soft-iron laminated core; show Primary winding (N_p, V_p, I_p) on one limb, Secondary winding (N_s, V_s, I_s) on other limb, with dashed lines indicating mutual flux Φ.",
      markingScheme: [
        "1 Mark: Principle of mutual induction and neat labelled diagram with core lamination.",
        "2 Marks: Mathematical derivation of V_s/V_p = N_s/N_p and I_p/I_s = V_s/V_p using power conservation.",
        "2 Marks: Explaining 4 energy losses with their specific engineering remedies (0.5 mark each)."
      ],
      examinerTips: "The 4 Essential Transformer Losses & Remedies:\n1. Copper Loss (I²R heating in windings) ⟶ Minimized by using thick copper wires with low resistance.\n2. Eddy Current Loss (heating in iron core) ⟶ Minimized by using a laminated core of thin varnished steel sheets.\n3. Hysteresis Loss (continuous reversal of core magnetization) ⟶ Minimized by using soft iron / silicon steel with a narrow hysteresis loop.\n4. Flux Leakage (not all flux links both coils) ⟶ Minimized by winding primary and secondary coaxially one over the other."
    }
  },
  {
    id: 'imp-phy-5',
    number: 5,
    title: "Moving Coil Galvanometer: Principle, Torque Derivation & Radial Field",
    shortLabel: "Moving Coil Galvanometer & Torque",
    chapterId: 'phy-ch-4',
    chapterTitle: 'Moving Charges and Magnetism',
    unit: 'Magnetism',
    marks: '5 Marks',
    marksNum: 5,
    category: 'Derivation',
    frequency: 'Guaranteed 5-Marker in Set 1/2/3',
    questionPrompt: "(a) State the principle of a Moving Coil Galvanometer (MCG).\n(b) Derive the expression for the deflecting torque acting on the coil.\n(c) Explain the function of: (i) cylindrical concave magnetic poles, (ii) soft-iron cylindrical core.\n(d) Define current sensitivity and voltage sensitivity. Show that increasing current sensitivity may not necessarily increase voltage sensitivity.",
    ncertRef: {
      textbook: 'NCERT Physics Class 12, Part 1',
      chapter: 'Chapter 4: Moving Charges and Magnetism',
      section: 'Section 4.10.3: The Moving Coil Galvanometer (pp. 163–165)',
      equations: 'Eqs. (4.40), (4.41), (4.42)',
      figures: 'Fig. 4.25',
      summary: 'Torque on a rectangular current loop in a radial magnetic field balanced by the mechanical restoring torque of a phosphor-bronze suspension.'
    },
    modelAnswer: {
      statement: "Principle: A current-carrying coil placed in a magnetic field experiences a deflecting mechanical torque which tends to rotate it. In a radial magnetic field, this deflection is directly proportional to the current passing through the coil.",
      derivations: [
        {
          name: "Deflecting & Restoring Torque Equilibrium [NCERT Section 4.10.3]",
          steps: [
            "Coil Geometry: Consider a rectangular coil of N turns, length l, and breadth b (area A = l · b) carrying steady current I, suspended in a magnetic field B⃗.",
            "General Deflecting Torque: The magnetic torque on a planar current loop of magnetic dipole moment m⃗ = N I A⃗ in field B⃗ is: τ⃗ = m⃗ × B⃗ ⟹ τ_def = N I A B sinθ, where θ is the angle between the magnetic field B⃗ and the normal to the coil plane.",
            "Role of Radial Magnetic Field: Concave magnetic poles combined with a central soft-iron core create a RADIAL magnetic field. In a radial field, magnetic field lines are always directed along the radii of the cylindrical poles, meaning the plane of the coil is ALWAYS parallel to the field lines in every angular position (θ = 90°, sin 90° = 1).",
            "Maximum Constant Deflecting Torque: Therefore, regardless of rotation: τ_def = N I A B.",
            "Restoring Torque: As the coil deflects through angle θ, the suspension strip (phosphor-bronze) is twisted, exerting a restoring torque: τ_rest = C · θ (where C is the restoring torque per unit twist, also known as torsional constant).",
            "Equilibrium Condition: At steady deflection: τ_def = τ_rest ⟹ N I A B = C · θ.",
            "Current-Deflection Relation: I = (C / NAB) · θ ⟹ I = K · θ (where K = C/NAB is the galvanometer reduction factor).",
            "Conclusion: Since C, N, A, B are constants: θ ∝ I. Deflection is strictly linear with current, giving a uniform scale!",
            "Sensitivities Definition:",
            "  • Current Sensitivity (S_i): Deflection per unit current: S_i = θ / I = (NAB) / C.",
            "  • Voltage Sensitivity (S_v): Deflection per unit voltage: S_v = θ / V = θ / (IR) = (NAB) / (CR) = S_i / R.",
            "Why Increasing S_i Does Not Always Increase S_v: If we double the number of turns N, the current sensitivity S_i doubles. However, doubling N doubles the total wire length, which doubles the coil resistance R. Hence: S_v' = (2 · S_i) / (2 · R) = S_i / R = S_v. The voltage sensitivity remains unchanged!"
          ],
          formula: "I = (C / NAB) θ ⟹ θ ∝ I ; S_i = NAB/C ; S_v = NAB/(CR) = S_i / R"
        }
      ],
      diagramNotes: "Draw horseshoe magnet with cylindrical concave poles N and S, soft-iron core at center, rectangular coil, phosphor-bronze suspension with mirror, and lower hairspring.",
      markingScheme: [
        "1 Mark: Statement of principle and neat labelled diagram.",
        "2 Marks: Derivation of deflecting torque, radial field condition (θ = 90°), and equilibrium N I A B = C θ.",
        "1 Mark: Explicit explanation of functions of concave poles and soft-iron core (to produce radial field and amplify B).",
        "1 Mark: Mathematical proof showing why doubling N doubles both S_i and R, leaving S_v constant."
      ],
      examinerTips: "Remember the two functions of the soft-iron core:\n1. It produces a radial magnetic field so the torque remains maximum (τ = NIAB) for all deflections.\n2. Due to high magnetic permeability (μ_r ≫ 1), it concentrates magnetic lines, significantly increasing field strength B."
    }
  },
  {
    id: 'imp-phy-6',
    number: 6,
    title: "Electric Flux, Electric Dipole & Electric Dipole Moment",
    shortLabel: "Electric Flux & Dipole Moment",
    chapterId: 'phy-ch-1',
    chapterTitle: 'Electric Charges and Fields',
    unit: 'Electrostatics',
    marks: '3 Marks',
    marksNum: 3,
    category: 'Definitions & Conceptual',
    frequency: 'Core Definitions & Formulas (CBSE 2023, 2021, 2019)',
    questionPrompt: "(a) Define electric flux. Write its SI unit and dimensional formula. Is it scalar or vector?\n(b) Define an electric dipole and electric dipole moment. State its direction and SI unit.\n(c) Derive the torque acting on an electric dipole placed in a uniform electric field.",
    ncertRef: {
      textbook: 'NCERT Physics Class 12, Part 1',
      chapter: 'Chapter 1: Electric Charges and Fields',
      section: 'Sections 1.10, 1.11, 1.13 (pp. 27–33)',
      equations: 'Eqs. (1.8), (1.13), (1.27)',
      figures: 'Figs. 1.22, 1.25',
      summary: 'Mathematical formulation of electric flux Φ_E = ∫ E⃗ · dA⃗, dipole moment p⃗ = q(2a⃗), torque couple τ⃗ = p⃗ × E⃗, and electrostatic potential energy U = -p⃗ · E⃗.'
    },
    modelAnswer: {
      statement: "• Electric Flux (Φ_E): The measure of the total number of electric field lines crossing a given surface area. Mathematically: Φ_E = ∫ E⃗ · dA⃗ = E A cosθ. SI Unit: N·m²/C or V·m. Dimensions: [M L³ T⁻³ A⁻¹]. It is a SCALAR quantity.\n• Electric Dipole: A pair of equal and opposite point charges (+q and -q) separated by a small vector distance 2a⃗.\n• Electric Dipole Moment (p⃗): A vector quantity defined as the product of the charge magnitude q and separation vector 2a⃗: p⃗ = q(2a⃗). Direction: Strictly from NEGATIVE charge (-q) to POSITIVE charge (+q). SI Unit: Coulomb-metre (C·m).",
      derivations: [
        {
          name: "Derivation of Torque Couple on Dipole [NCERT Section 1.11]",
          steps: [
            "Setup: Consider an electric dipole with charges -q and +q separated by distance 2a, placed in a uniform electric field E⃗ at angle θ to the dipole axis.",
            "Translational Equilibrium: Force on +q is F₁ = +q E⃗ along the field; force on -q is F₂ = -q E⃗ opposite to the field. Net translational force is: F_net = +qE - qE = 0. The dipole experiences NO net translational motion.",
            "Couple Formation: Since the two equal and opposite forces act along different, non-coincident lines of action, they constitute a torque couple.",
            "Torque Magnitude: Torque magnitude τ is the product of either force magnitude and the perpendicular distance between their lines of action: τ = Force × (Perpendicular arm) = (q E) × (2a sinθ).",
            "Grouping Dipole Moment: Using p = q · (2a): τ = (q · 2a) E sinθ = p E sinθ.",
            "Vector Formulation: In vector notation: τ⃗ = p⃗ × E⃗.",
            "Direction: By right-hand screw rule, τ⃗ acts perpendicular to the plane containing p⃗ and E⃗, tending to align p⃗ parallel to E⃗.",
            "Equilibrium States:",
            "  • Stable Equilibrium (θ = 0°): p⃗ is aligned parallel to E⃗. Torque τ = 0, and potential energy U = -pE (minimum).",
            "  • Unstable Equilibrium (θ = 180°): p⃗ is antiparallel to E⃗. Torque τ = 0, but potential energy U = +pE (maximum)."
          ],
          formula: "τ⃗ = p⃗ × E⃗ ⟹ τ = p E sinθ ; Potential Energy U = -p⃗ · E⃗ = -p E cosθ"
        }
      ],
      diagramNotes: "Draw dipole charges -q and +q separated by 2a at angle θ to horizontal E lines; show equal and opposite forces qE and perpendicular distance arm 2a sinθ.",
      markingScheme: [
        "1 Mark: Electric flux definition, formula Φ = ∫E·dA, SI unit N·m²/C (or V·m), and scalar nature.",
        "1 Mark: Dipole moment definition p = q(2a), SI unit C·m, and precise direction (-q to +q).",
        "1 Mark: Step-by-step derivation of torque couple τ = p E sinθ and vector form τ⃗ = p⃗ × E⃗."
      ],
      examinerTips: "Crucial Physics Convention: In physics, dipole moment p⃗ is strictly directed from -q to +q (chemistry uses the opposite convention). Never write +q to -q!"
    }
  },
  {
    id: 'imp-phy-7',
    number: 7,
    title: "Equipotential Surfaces: Definition, Properties & Shapes",
    shortLabel: "Equipotential Surfaces & Properties",
    chapterId: 'phy-ch-2',
    chapterTitle: 'Electrostatic Potential and Capacitance',
    unit: 'Electrostatics',
    marks: '3 Marks',
    marksNum: 3,
    category: 'Theory & Properties',
    frequency: 'Guaranteed 2-3 Mark Reasoning Question',
    questionPrompt: "(a) What is an equipotential surface?\n(b) State four important properties of equipotential surfaces with reasons.\n(c) Sketch equipotential surfaces for: (i) an isolated positive point charge, (ii) a uniform electric field along the z-axis.",
    ncertRef: {
      textbook: 'NCERT Physics Class 12, Part 1',
      chapter: 'Chapter 2: Electrostatic Potential and Capacitance',
      section: 'Section 2.4: Equipotential Surfaces (pp. 60–63)',
      equations: 'Eq. (2.17)',
      figures: 'Figs. 2.9, 2.10, 2.11',
      summary: 'Properties of surfaces with constant electrostatic potential V, proof of zero work dW = 0, field perpendicularity E⃗ ⟂ surface, non-intersection, and geometric spacing dr = -dV/E.'
    },
    modelAnswer: {
      statement: "An Equipotential Surface is any geometric surface over which the electrostatic potential has a constant value at every point (V(x,y,z) = constant). Consequently, the potential difference between any two points on such a surface is identically zero (ΔV = 0).",
      derivations: [
        {
          name: "4 Essential Properties with Mathematical Proofs [NCERT Section 2.4]",
          steps: [
            "Property 1: No work is done in moving a test charge over an equipotential surface.",
            "  Mathematical Proof: Work done in moving test charge q₀ from point A to B is W_AB = q₀ (V_B - V_A). Since points A and B lie on the same equipotential surface, V_A = V_B ⟹ W_AB = q₀(0) = 0.",
            "Property 2: Electric field lines are always PERPENDICULAR to the equipotential surface at every point.",
            "  Mathematical Proof: Work done in an infinitesimal displacement dr⃗ on the surface is dW = -E⃗ · dr⃗ = -E dr cosθ = 0. Since E ≠ 0 and dr ≠ 0, cosθ must be 0 ⟹ θ = 90°. Hence, E⃗ is strictly normal to the surface.",
            "Property 3: Two equipotential surfaces can NEVER intersect each other.",
            "  Reasoning: If two surfaces with different potentials V₁ and V₂ intersected, the line of intersection would possess two distinct values of potential at the same point, and two different electric field directions would exist at that point, which is physically impossible.",
            "Property 4: Spacing between equipotential surfaces reflects electric field strength (closer together in strong fields, farther apart in weak fields).",
            "  Mathematical Proof: From the potential gradient relation: E = -dV/dr ⟹ dr = |dV| / E. For a constant potential difference dV between successive surfaces, dr ∝ 1/E. Where field E is strong, spacing dr is small (surfaces are crowded); where E is weak, dr is large (surfaces are widely spaced)."
          ],
          formula: "W = q(V_B - V_A) = 0 ; E⃗ ⊥ Surface ; dr = |dV| / E ⟹ Crowded where E is strong"
        }
      ],
      diagramNotes: "Point charge: concentric spheres with radial spacing increasing outward; Uniform field along z: equidistant parallel planes in the xy-plane.",
      markingScheme: [
        "1 Mark: Definition of equipotential surface and proof that work W = 0.",
        "1 Mark: 2 properties with mathematical reasons (E is perpendicular to surface; surfaces never intersect).",
        "1 Mark: Correct sketches for point charge (concentric spheres with increasing gap) and uniform field (parallel planes)."
      ],
      examinerTips: "When sketching equipotential surfaces for a point charge, the concentric circles must get progressively farther apart as distance increases because dr ∝ 1/E!"
    }
  },
  {
    id: 'imp-phy-8',
    number: 8,
    title: "Electric Field Due to a Point Charge (Derivation & Superposition)",
    shortLabel: "Field Due to a Point Charge",
    chapterId: 'phy-ch-1',
    chapterTitle: 'Electric Charges and Fields',
    unit: 'Electrostatics',
    marks: '2 Marks',
    marksNum: 2,
    category: 'Derivation',
    frequency: 'Fundamental 2-Marker',
    questionPrompt: "(a) Define electric field intensity at a point.\n(b) Derive the expression for the electric field at a distance r from an isolated point charge q.\n(c) Plot a graph showing the variation of E with distance r.",
    ncertRef: {
      textbook: 'NCERT Physics Class 12, Part 1',
      chapter: 'Chapter 1: Electric Charges and Fields',
      section: 'Section 1.8: Electric Field (pp. 18–21)',
      equations: 'Eqs. (1.6), (1.7)',
      figures: 'Fig. 1.12',
      summary: 'Rigorous definition of electric field from test charge limit E⃗ = lim(q₀→0) F⃗/q₀ and derivation from Coulomb\'s law.'
    },
    modelAnswer: {
      statement: "Electric field intensity E⃗ at any point is defined as the electrostatic force experienced per unit positive test charge placed at that point, in the limit where the test charge is vanishingly small so as not to disturb the source charge configuration:\nE⃗ = lim(q₀ → 0) [ F⃗ / q₀ ]",
      derivations: [
        {
          name: "Derivation from Coulomb's Law [NCERT Section 1.8]",
          steps: [
            "Source Configuration: Place an isolated source point charge +q at the origin O.",
            "Test Charge: To calculate electric field at field point P at distance r from O, place an infinitesimal positive test charge q₀ at P.",
            "Coulomb Force on Test Charge: By Coulomb's Law, the electrostatic force on q₀ is: F⃗ = [1 / (4πε₀)] · [ (q · q₀) / r² ] r̂, where r̂ = r⃗/r is the unit vector pointing along the line from O to P.",
            "Electric Field Definition: By definition: E⃗ = F⃗ / q₀.",
            "Substituting Force: E⃗ = [ (1 / 4πε₀) · (q q₀ / r²) r̂ ] / q₀ = [1 / (4πε₀)] · (q / r²) r̂.",
            "Magnitude: E = (1 / 4πε₀) · (q / r²).",
            "Direction: Directed radially outward from charge q if q > 0; directed radially inward toward charge q if q < 0.",
            "Graph Variation: As r increases, E decays inversely as r² (E ∝ 1/r²), yielding an asymptotic inverse-square hyperbola."
          ],
          formula: "E = (1 / 4πε₀) · (q / r²)  [E ∝ 1/r² ; Inverse-square law]"
        }
      ],
      diagramNotes: "Point charge +q at origin O, field point P at distance r along r̂ vector, and E vs r plot showing 1/r² decay curve.",
      markingScheme: [
        "0.5 Mark: Exact definition of electric field with limit q₀ → 0.",
        "1 Mark: Mathematical derivation using Coulomb's law arriving at E = kq/r².",
        "0.5 Mark: Correct graph of E versus r."
      ],
      examinerTips: "State why the test charge q₀ must be vanishingly small: so its own electric field does not shift or alter the distribution of the source charge."
    }
  },
  {
    id: 'imp-phy-9',
    number: 9,
    title: "Properties of Electric Field Lines & Why They Never Intersect",
    shortLabel: "Properties of Electric Field Lines",
    chapterId: 'phy-ch-1',
    chapterTitle: 'Electric Charges and Fields',
    unit: 'Electrostatics',
    marks: '2 Marks',
    marksNum: 2,
    category: 'Conceptual & Theory',
    frequency: 'Extremely Frequent 2-Marker',
    questionPrompt: "(a) State 4 characteristic properties of electric lines of force.\n(b) Why do two electric field lines never intersect each other?\n(c) Why do electric field lines not form continuous closed loops?",
    ncertRef: {
      textbook: 'NCERT Physics Class 12, Part 1',
      chapter: 'Chapter 1: Electric Charges and Fields',
      section: 'Section 1.9: Electric Field Lines (pp. 23–26)',
      equations: 'Section 1.9 key principles',
      figures: 'Figs. 1.16, 1.17, 1.18',
      summary: 'Faraday\'s line of force concept, tangent gives field direction, non-intersection proof, and proof why electrostatic fields forbid closed loops.'
    },
    modelAnswer: {
      statement: "An electric field line is an imaginary smooth continuous curve drawn in an electrostatic field such that the tangent to it at any point gives the direction of the electric field intensity at that point.",
      derivations: [
        {
          name: "Core Properties & Foundational Reasoning [NCERT Section 1.9]",
          steps: [
            "Property 1 (Start and End): Field lines originate at positive charges and terminate on negative charges. If there is an isolated single charge, they extend to or from infinity.",
            "Property 2 (Tangent gives Direction): The tangent to a field line at any point indicates the direction of electric field E⃗ at that point.",
            "Property 3 (Non-Intersection Theorem): Two electric field lines can NEVER intersect each other.",
            "  Proof by Contradiction: If two field lines intersected at point P, two distinct tangents could be drawn at that single intersection point, which would imply two different directions of the net electric field at the same point. A single point in space cannot have two net field vectors, so lines can never cross!",
            "Property 4 (No Closed Loops): Electric field lines do NOT form closed loops.",
            "  Physical Reason: Electrostatic fields are conservative in nature (line integral ∮ E⃗ · dr⃗ = 0). Since lines start on +q and end on -q, forming closed loops would imply continuous circulation of electrostatic field, violating energy conservation.",
            "Property 5 (Normal to Conductors): Field lines are always perpendicular to the surface of a charged conductor at static equilibrium.",
            "Property 6 (Density reflects Magnitude): The number of lines crossing per unit area normal to the lines is proportional to the magnitude of E⃗ (crowded where field is strong)."
          ],
          formula: "Tangent = Direction of E⃗ ; ∮ E⃗ · dr⃗ = 0 (Conservative field ⟹ No closed loops)"
        }
      ],
      diagramNotes: "Draw two hypothetical intersecting curves at point P showing two tangents T₁ and T₂ labeled 'Impossible!'.",
      markingScheme: [
        "1 Mark: Statement of 2 key properties.",
        "0.5 Mark: Precise reasoning why two field lines never intersect (two tangents = two field directions).",
        "0.5 Mark: Precise reasoning why electric lines cannot form closed loops (electrostatic field is conservative)."
      ],
      examinerTips: "Comparison with magnetic lines: Magnetic field lines DO form continuous closed loops because magnetic monopoles do not exist. Electric field lines DO NOT form closed loops because isolated positive and negative charges exist."
    }
  },
  {
    id: 'imp-phy-10',
    number: 10,
    title: "Capacitors in Series and Parallel Combinations (Derivation)",
    shortLabel: "Capacitor Series & Parallel Combinations",
    chapterId: 'phy-ch-2',
    chapterTitle: 'Electrostatic Potential and Capacitance',
    unit: 'Electrostatics',
    marks: '3 Marks',
    marksNum: 3,
    category: 'Derivation',
    frequency: 'Very High Frequency (CBSE 2023, 2022, 2019)',
    questionPrompt: "(a) Derive the expression for equivalent capacitance of three capacitors C₁, C₂, and C₃ connected in:\n  (i) Series combination\n  (ii) Parallel combination\n(b) In which combination is the equivalent capacitance: (i) minimum, (ii) maximum?",
    ncertRef: {
      textbook: 'NCERT Physics Class 12, Part 1',
      chapter: 'Chapter 2: Electrostatic Potential and Capacitance',
      section: 'Section 2.10: Combination of Capacitors (pp. 78–81)',
      equations: 'Eqs. (2.41), (2.45)',
      figures: 'Figs. 2.26, 2.27',
      summary: 'Equivalent capacitance derivations based on charge conservation in series (1/C_s = Σ 1/C_i) and potential equality in parallel (C_p = Σ C_i).'
    },
    modelAnswer: {
      statement: "Capacitor networks are configured to tailor effective capacitance in a circuit:\n• In Series: The charge Q on every capacitor is identical; the total potential difference V divides across them.\n• In Parallel: The potential difference V across each capacitor is identical; the total charge Q divides among them.",
      derivations: [
        {
          name: "Derivation for Series Combination [NCERT Section 2.10.1]",
          steps: [
            "Circuit Setup: Connect three capacitors of capacitances C₁, C₂, C₃ in series across a battery of potential difference V.",
            "Charge Equality: By electrostatic induction, the magnitude of charge on every capacitor plate is identical: Q₁ = Q₂ = Q₃ = Q.",
            "Potential Division: The total potential difference V supplied by the source is the sum of potential differences across the individual capacitors: V = V₁ + V₂ + V₃.",
            "Applying V = Q/C: Express individual voltages in terms of capacitance: V₁ = Q / C₁, V₂ = Q / C₂, V₃ = Q / C₃.",
            "Substituting into Potential Sum: V = Q / C₁ + Q / C₂ + Q / C₃ = Q · (1/C₁ + 1/C₂ + 1/C₃).",
            "Equivalent Series Capacitance C_s: If C_s is the equivalent capacitance of the combination, then V = Q / C_s.",
            "Equating: Q / C_s = Q · (1/C₁ + 1/C₂ + 1/C₃).",
            "Final Series Formula: Dividing by Q gives: 1 / C_s = 1/C₁ + 1/C₂ + 1/C₃.",
            "Property: C_s is strictly smaller than the smallest individual capacitor in the combination."
          ],
          formula: "1/C_s = 1/C₁ + 1/C₂ + 1/C₃  [Equivalent capacitance is minimized]"
        },
        {
          name: "Derivation for Parallel Combination [NCERT Section 2.10.2]",
          steps: [
            "Circuit Setup: Connect three capacitors C₁, C₂, C₃ in parallel across a battery maintaining common potential difference V.",
            "Potential Equality: The potential difference across each capacitor is identical: V₁ = V₂ = V₃ = V.",
            "Charge Division: Total charge Q drawn from the battery divides among the three capacitors according to charge conservation: Q = Q₁ + Q₂ + Q₃.",
            "Applying Q = CV: Charge on individual capacitors: Q₁ = C₁ V, Q₂ = C₂ V, Q₃ = C₃ V.",
            "Substituting: Q = C₁ V + C₂ V + C₃ V = (C₁ + C₂ + C₃) · V.",
            "Equivalent Parallel Capacitance C_p: If C_p is the equivalent capacitance, then Q = C_p · V.",
            "Final Parallel Formula: C_p · V = (C₁ + C₂ + C₃) · V ⟹ C_p = C₁ + C₂ + C₃.",
            "Property: C_p is strictly larger than the largest individual capacitor in the combination."
          ],
          formula: "C_p = C₁ + C₂ + C₃  [Equivalent capacitance is maximized]"
        }
      ],
      diagramNotes: "Series diagram showing 3 capacitors in a line with charge +Q/-Q on each; Parallel diagram showing 3 capacitors connected across common busbars with potential V.",
      markingScheme: [
        "1.5 Marks: Series derivation: stating same charge Q, V = V₁ + V₂ + V₃, and arriving at 1/C_s = Σ(1/C_i).",
        "1.5 Marks: Parallel derivation: stating common potential V, Q = Q₁ + Q₂ + Q₃, and arriving at C_p = ΣC_i."
      ],
      examinerTips: "Do not confuse capacitor combinations with resistor combinations! Resistors add in series (R_s = R₁ + R₂), whereas capacitors add in parallel (C_p = C₁ + C₂)."
    }
  },
  {
    id: 'imp-phy-11',
    number: 11,
    title: "Electric Current, Terminal Potential Difference, Internal Resistance & Power",
    shortLabel: "Current, Terminal Voltage & Power",
    chapterId: 'phy-ch-3',
    chapterTitle: 'Current Electricity',
    unit: 'Current Electricity',
    marks: '3 Marks',
    marksNum: 3,
    category: 'Derivation & Relations',
    frequency: 'Core 3-Marker & Numerical Foundation',
    questionPrompt: "(a) Distinguish between EMF of a cell and Terminal Potential Difference.\n(b) Derive the relationship between EMF (ε), terminal potential difference (V), internal resistance (r), and external resistance (R).\n(c) Under what condition is terminal voltage greater than EMF?\n(d) Derive the condition for maximum power delivered to external load (Maximum Power Transfer Theorem).",
    ncertRef: {
      textbook: 'NCERT Physics Class 12, Part 1',
      chapter: 'Chapter 3: Current Electricity',
      section: 'Sections 3.7 & 3.11 (pp. 105–107, 110–113)',
      equations: 'Eqs. (3.23), (3.33), (3.34)',
      figures: 'Fig. 3.18',
      summary: 'Electromotive force vs terminal potential difference, discharging and charging cell relations V = ε ∓ Ir, internal resistance measurement, and maximum power transfer.'
    },
    modelAnswer: {
      statement: "• Electromotive Force (EMF, ε): The maximum potential difference between the electrodes of a cell when no current is drawn from it (open circuit).\n• Terminal Potential Difference (V): The potential difference between the electrodes of a cell in a closed circuit when current I is flowing. During discharging, V < ε due to the internal voltage drop Ir across the electrolyte.",
      derivations: [
        {
          name: "Derivation of V = ε - Ir and r = [(ε-V)/V]R [NCERT Section 3.11]",
          steps: [
            "Circuit Description: Consider a cell of EMF ε and internal resistance r connected across an external load resistance R.",
            "Total Circuit Resistance: The internal resistance r and external load R are in series, so total resistance is R_total = R + r.",
            "Circuit Current: By Ohm's law, steady current in the circuit is: I = ε / (R + r).",
            "Energy Balance Equation: Rearranging gives: ε = I(R + r) = IR + Ir.",
            "Terminal Potential Difference: By Ohm's law, the potential difference across the external load R is V = IR. Substituting V into the equation: ε = V + Ir ⟹ V = ε - Ir (Discharging formula).",
            "Internal Resistance Expression: From Ir = ε - V, we get r = (ε - V) / I. Since I = V / R, substitute for I: r = [ (ε - V) / (V / R) ] = [ (ε - V) / V ] · R = (ε/V - 1) · R.",
            "Special Case (Charging): When the cell is recharged by connecting to an external DC source, current enters the positive terminal: V = ε + Ir (Terminal voltage EXCEEDS EMF!).",
            "Maximum Power Transfer Theorem: Power delivered to load is P = I²R = [ε / (R + r)]² · R = (ε² R) / (R + r)². To find maximum power, set dP/dR = 0: dP/dR = ε² · [ (R + r)² - 2R(R + r) ] / (R + r)⁴ = 0 ⟹ (R + r) - 2R = 0 ⟹ R = r.",
            "Maximum Power Value: When load matches internal resistance (R = r), power is maximized: P_max = ε² · r / (2r)² = ε² / (4r)."
          ],
          formula: "V = ε - Ir ; r = [(ε - V) / V] R ; Charging: V = ε + Ir ; P_max = ε² / (4r) at R = r"
        }
      ],
      diagramNotes: "Circuit showing cell represented as ideal source ε in series with internal r inside dashed box, connected to external load R and voltmeter across terminals.",
      markingScheme: [
        "1 Mark: Distinction between EMF (open circuit) and terminal voltage (closed circuit).",
        "1 Mark: Derivation of V = ε - Ir and internal resistance formula r = [(ε-V)/V]R.",
        "0.5 Mark: Condition when V > ε (during charging of the cell).",
        "0.5 Mark: Maximum power transfer condition R = r and expression P_max = ε²/(4r)."
      ],
      examinerTips: "Remember: (1) Open circuit (I = 0) ⟹ V = ε; (2) Short circuit (R = 0) ⟹ I_max = ε/r and V = 0; (3) Charging cell ⟹ V = ε + Ir."
    }
  },
  {
    id: 'imp-phy-12',
    number: 12,
    title: "Properties of Electromagnetic Waves & EM Spectrum Applications",
    shortLabel: "Properties & Applications of EM Waves",
    chapterId: 'phy-ch-8',
    chapterTitle: 'Electromagnetic Waves',
    unit: 'Electromagnetic Waves',
    marks: '3 Marks',
    marksNum: 3,
    category: 'Theory & Applications',
    frequency: 'Guaranteed 2-3 Mark Question from Ch 8',
    questionPrompt: "(a) State 4 fundamental properties of electromagnetic waves.\n(b) Write the relation between speed of light, electric field amplitude E₀, and magnetic field amplitude B₀.\n(c) Name the EM waves used in: (i) Radar systems, (ii) Water purifiers to kill germs, (iii) Treating muscular strains, (iv) Cancer therapy, and (v) Remote controls.",
    ncertRef: {
      textbook: 'NCERT Physics Class 12, Part 1',
      chapter: 'Chapter 8: Electromagnetic Waves',
      section: 'Sections 8.3 & 8.4 (pp. 274–284)',
      equations: 'Eqs. (8.8), (8.9), (8.10)',
      figures: 'Fig. 8.4; Table 8.1',
      summary: 'Orthogonal transverse structure of E and B vectors, wave velocity c = 1/√(μ₀ε₀), amplitude ratio E₀/B₀ = c, energy density, and spectrum classification.'
    },
    modelAnswer: {
      statement: "Electromagnetic waves are self-propagating, coupled time-varying electric and magnetic fields traveling through space at the speed of light, oscillating sinusoidally in mutually perpendicular planes that are both orthogonal to the direction of wave propagation.",
      derivations: [
        {
          name: "4 Fundamental Properties of EM Waves [NCERT Section 8.3]",
          steps: [
            "1. Transverse Nature: The electric field vector E⃗ and magnetic field vector B⃗ oscillate perpendicular to each other and perpendicular to the propagation vector k̂. The propagation direction is given by the Poynting vector: ĉ = E⃗ × B⃗.",
            "2. Universal Speed in Vacuum: EM waves propagate in free space at universal speed c given by Maxwell's relation: c = 1 / √(μ₀ε₀) ≈ 3.0 × 10⁸ m/s, completely independent of frequency or frame velocity.",
            "3. Amplitude Relationship: The ratio of peak electric field amplitude E₀ to peak magnetic field amplitude B₀ at every point in the wave is strictly equal to the speed of light: E₀ / B₀ = c (or E_rms / B_rms = c).",
            "4. Energy Density & Momentum: EM waves carry energy shared equally between electric and magnetic fields: u_E = (1/2)ε₀E² and u_B = B²/(2μ₀). Total average energy density is u_avg = ε₀ E_rms² = B_rms²/μ₀. They carry linear momentum p = U/c and exert radiation pressure P = I/c.",
            "5. Charge Neutrality: Being uncharged photon disturbances, EM waves are not deflected by static external electric or magnetic fields."
          ],
          formula: "c = 1 / √(μ₀ε₀) ; E₀ / B₀ = c ; ĉ ∥ E⃗ × B⃗ ; Momentum p = U / c"
        }
      ],
      diagramNotes: "Draw 3D sinusoidal wave: E-field oscillating along y-axis, B-field along z-axis, wave propagating along x-axis with c = E₀/B₀.",
      markingScheme: [
        "1 Mark: Stating 3 distinct physical properties of EM waves.",
        "0.5 Mark: Mathematical relations c = 1/√(μ₀ε₀) and E₀/B₀ = c.",
        "1.5 Marks: Correct identification of spectrum types for all 5 applications (0.3 mark each)."
      ],
      examinerTips: "Official CBSE Spectrum Applications Table:\n• Radar & Satellite Communication ⟶ Microwaves (short wavelength, penetrate atmosphere)\n• Water Purification & LASIK Surgery ⟶ Ultraviolet (UV) rays (germicidal sterilization)\n• Muscular Strain Therapy & Greenhouse Heating ⟶ Infrared (IR) rays (heat waves)\n• Cancer Radiotherapy & Sterilizing Surgical Tools ⟶ Gamma (γ) rays (high penetrating power)\n• TV Remote Controls ⟶ Infrared (IR) LEDs\n• Detecting Bone Fractures & Airport Baggage Scans ⟶ X-rays"
    }
  },
  {
    id: 'imp-phy-13',
    number: 13,
    title: "Root-Mean-Square (RMS) Values of AC: Derivation of I_rms and E_rms",
    shortLabel: "RMS Value of AC Derivation (I_rms & E_rms)",
    chapterId: 'phy-ch-7',
    chapterTitle: 'Alternating Current',
    unit: 'Alternating Current',
    marks: '3 Marks',
    marksNum: 3,
    category: 'Derivation',
    frequency: 'Core Derivation (CBSE 2023, 2020, 2017)',
    questionPrompt: "(a) Define root mean square (rms) or virtual value of alternating current.\n(b) Derive the relationship between rms value (I_rms) and peak value (I₀) of alternating current.\n(c) Why is 220 V AC more dangerous than 220 V DC?",
    ncertRef: {
      textbook: 'NCERT Physics Class 12, Part 1',
      chapter: 'Chapter 7: Alternating Current',
      section: 'Section 7.2: AC Voltage Applied to a Resistor (pp. 235–238)',
      equations: 'Eqs. (7.4), (7.5), (7.6)',
      figures: 'Fig. 7.3',
      summary: 'Definition of root-mean-square current from Joule heating equivalence and first-principles cycle integration.'
    },
    modelAnswer: {
      statement: "The Root Mean Square (RMS) or virtual/effective value of an alternating current (I_rms) is defined as that steady direct current (DC) which, when flowing through a given resistor for a given time, produces the same amount of heat as is produced by the alternating current flowing through the same resistor for the same time.",
      derivations: [
        {
          name: "Mathematical Derivation of I_rms = I₀ / √2 [NCERT Section 7.2]",
          steps: [
            "Instantaneous Current: Let alternating current be represented as I(t) = I₀ sin(ωt), where I₀ is peak current amplitude and ω = 2π/T is angular frequency.",
            "Heat in Infinitesimal Time dt: By Joule's law, heat generated in resistor R during dt is: dH = I² R dt = [I₀ sin(ωt)]² R dt = I₀² R sin²(ωt) dt.",
            "Total Heat Over Complete Cycle: Integrate dH over one full time period T = 2π/ω: H = ∫₀ᵀ I₀² R sin²(ωt) dt = I₀² R ∫₀ᵀ sin²(ωt) dt.",
            "Trigonometric Identity: Using sin²(ωt) = [1 - cos(2ωt)] / 2: H = I₀² R ∫₀ᵀ [ (1 - cos 2ωt) / 2 ] dt = (I₀² R / 2) [ ∫₀ᵀ dt - ∫₀ᵀ cos(2ωt) dt ].",
            "Vanishing of Second Integral: The integral of cos(2ωt) over a full period is zero: ∫₀ᵀ cos(2ωt) dt = [ sin(2ωt) / (2ω) ]₀ᵀ = [ sin(4π) - sin(0) ] / (2ω) = 0.",
            "Resulting Heat: Therefore: H = (I₀² R / 2) · T.",
            "Equating to Effective DC Heat: By definition of RMS current, an equivalent DC current I_rms produces heat H = I_rms² R T in time T.",
            "Equating Expressions: I_rms² R T = (I₀² R T) / 2.",
            "Taking Square Root: I_rms² = I₀² / 2 ⟹ I_rms = I₀ / √2 ≈ 0.707 I₀.",
            "RMS Alternating Voltage: By identical mathematical integration for V(t) = V₀ sin(ωt): V_rms = E_rms = V₀ / √2 ≈ 0.707 V₀."
          ],
          formula: "I_rms = I₀ / √2 ≈ 0.707 I₀ ; V_rms = V₀ / √2 ≈ 0.707 V₀"
        }
      ],
      diagramNotes: "Draw sinusoidal AC wave showing peak I₀, horizontal dashed line for RMS value at 0.707 I₀, and average value over half cycle at 0.637 I₀.",
      markingScheme: [
        "1 Mark: Definition of RMS current based on Joule heating equivalence.",
        "1.5 Marks: Step-by-step mathematical derivation using sin²ωt = (1 - cos 2ωt)/2 to arrive at I_rms = I₀/√2.",
        "0.5 Mark: Explanation why 220 V AC is more dangerous (peak value reaches 311 V)."
      ],
      examinerTips: "Exam Reasoning Trap: 'Why is 220 V AC more dangerous than 220 V DC?' ⟶ An AC rating of 220 V specifies the RMS value. Its peak instantaneous voltage is V₀ = V_rms · √2 = 220 × 1.414 = 311.1 V! While 220 V DC stays constant at 220 V, 220 V AC fluctuates between +311 V and -311 V (a 622 V peak-to-peak swing)."
    }
  },
  {
    id: 'imp-phy-14',
    number: 14,
    title: "Displacement Current: Need, Mathematical Derivative & Continuity Proof",
    shortLabel: "Displacement Current & Derivative",
    chapterId: 'phy-ch-8',
    chapterTitle: 'Electromagnetic Waves',
    unit: 'Electromagnetic Waves',
    marks: '3 Marks',
    marksNum: 3,
    category: 'Derivation & Theory',
    frequency: 'High Yield Conceptual Derivation',
    questionPrompt: "(a) What was the inconsistency pointed out by Maxwell in Ampère's circuital law?\n(b) Derive the expression for displacement current in terms of time rate of change of electric flux.\n(c) Prove that during charging of a capacitor, conduction current in the connecting wires is equal to displacement current between the plates.",
    ncertRef: {
      textbook: 'NCERT Physics Class 12, Part 1',
      chapter: 'Chapter 8: Electromagnetic Waves',
      section: 'Section 8.2: Displacement Current (pp. 269–273)',
      equations: 'Eqs. (8.1), (8.2), (8.4), (8.5)',
      figures: 'Figs. 8.1, 8.2',
      summary: 'Resolution of Ampère\'s circuital law inconsistency for charging capacitor, derivative I_d = ε₀(dΦ_E/dt), and proof of current continuity.'
    },
    modelAnswer: {
      statement: "Displacement Current (I_d): The current that arises in a region of space where the electric field (and therefore electric flux) changes with time, even in the complete absence of physical conduction of charge carriers. It acts as a source of magnetic field exactly like conduction current.",
      derivations: [
        {
          name: "Mathematical Derivation: I_d = ε₀ (dΦ_E / dt) [NCERT Section 8.2]",
          steps: [
            "Inconsistency in Ampère's Law: Consider a parallel-plate capacitor being charged by conduction current I_c. Apply Ampère's circuital law ∮ B⃗ · dl⃗ = μ₀ I_enclosed to a circular loop C around the wire.",
            "Surface S₁ (Flat Disc): Disc S₁ spans loop C and cuts the wire carrying current I_c: ∮ B⃗ · dl⃗ = μ₀ I_c.",
            "Surface S₂ (Pot-shaped Bag): Bag S₂ has the same boundary loop C but bulges out so its surface passes through the gap between capacitor plates where no conduction wire exists. Since no charge penetrates S₂: ∮ B⃗ · dl⃗ = 0. This creates an impossible mathematical contradiction (μ₀ I_c = 0)!",
            "Maxwell's Resolution: During charging, charge Q accumulates on capacitor plates of area A. The electric field between plates is: E = σ / ε₀ = Q / (A ε₀).",
            "Electric Flux Calculation: The electric flux Φ_E through the surface passing between plates is: Φ_E = E · A = [ Q / (A ε₀) ] · A = Q / ε₀.",
            "Expressing Charge: Q = ε₀ · Φ_E.",
            "Time Derivative: Differentiating both sides with respect to time t: dQ / dt = ε₀ · (dΦ_E / dt).",
            "Conduction Current Equivalence: In the connecting wires, conduction current is the rate of charge flow: I_c = dQ/dt. Therefore: I_c = ε₀ (dΦ_E / dt).",
            "Displacement Current Definition: Maxwell defined displacement current as: I_d = ε₀ (dΦ_E / dt).",
            "Proof of Continuity: Hence, I_c = I_d. Inside the wires, current is pure conduction (I_c ≠ 0, I_d = 0); in the gap between plates, current is pure displacement (I_c = 0, I_d ≠ 0). Total current I_total = I_c + I_d is continuous across any cross-section of the circuit!",
            "Ampère-Maxwell Law: ∮ B⃗ · dl⃗ = μ₀ (I_c + I_d) = μ₀ [ I_c + ε₀ (dΦ_E / dt) ]."
          ],
          formula: "I_d = ε₀ (dΦ_E / dt) ⟹ I_c = I_d ; ∮ B⃗ · dl⃗ = μ₀ [I_c + ε₀ (dΦ_E / dt)]"
        }
      ],
      diagramNotes: "Draw charging capacitor circuit showing loop C, flat surface S₁ cutting wire, and bulging bag surface S₂ passing between plates with electric flux arrows.",
      markingScheme: [
        "1 Mark: Explaining Ampère's circuital law inconsistency using two different surfaces spanning the same loop.",
        "1.5 Marks: Step-by-step mathematical derivation of Φ_E = Q/ε₀ to I_d = ε₀(dΦ_E/dt) = I_c.",
        "0.5 Mark: Final unified Ampère-Maxwell Law equation."
      ],
      examinerTips: "Remember: Inside the copper wires, I_c ≠ 0 and I_d = 0. Between the insulating capacitor plates, I_c = 0 and I_d ≠ 0. The total generalized current I = I_c + I_d is strictly constant at all points."
    }
  },
  {
    id: 'imp-phy-15',
    number: 15,
    title: "Wheatstone Bridge: Principle, Balanced Condition Derivation & Metre Bridge",
    shortLabel: "Wheatstone Bridge Balancing Conditions",
    chapterId: 'phy-ch-3',
    chapterTitle: 'Current Electricity',
    unit: 'Current Electricity',
    marks: '3 Marks',
    marksNum: 3,
    category: 'Derivation',
    frequency: 'Core Derivation & Metre Bridge Base',
    questionPrompt: "(a) State the principle of a Wheatstone bridge.\n(b) Using Kirchhoff's rules, derive the balanced condition for a Wheatstone bridge (P/Q = R/S).\n(c) What is the condition for maximum sensitivity of a Wheatstone bridge?",
    ncertRef: {
      textbook: 'NCERT Physics Class 12, Part 1',
      chapter: 'Chapter 3: Current Electricity',
      section: 'Section 3.14: Wheatstone Bridge (pp. 118–120)',
      equations: 'Eqs. (3.53), (3.54)',
      figures: 'Fig. 3.25',
      summary: 'Null-deflection condition for 4-resistor bridge network derived using Kirchhoff\'s Voltage and Current Laws.'
    },
    modelAnswer: {
      statement: "A Wheatstone Bridge is an electrical network of four resistors P, Q, R, and S arranged in a closed diamond loop, used to measure an unknown electrical resistance with high accuracy using a null-deflection balance condition.",
      derivations: [
        {
          name: "Derivation of P/Q = R/S Using Kirchhoff's Voltage Law (KVL) [NCERT Section 3.14]",
          steps: [
            "Bridge Network Description: Connect four resistors P, Q, R, S in four arms forming diamond loop ABCD. Connect galvanometer G of resistance R_g across diagonal BD. Connect battery of EMF ε across diagonal AC.",
            "Current Distribution: Total current I enters junction A and splits into I₁ through arm AB (resistor P) and I₂ through arm AD (resistor R), such that I = I₁ + I₂.",
            "Galvanometer Branch: At junction B, current I_g branches through galvanometer toward D. The current remaining in arm BC (resistor Q) is (I₁ - I_g).",
            "Arm CD Current: At junction D, current I₂ combines with I_g to give (I₂ + I_g) flowing through arm DC (resistor S).",
            "Applying KVL to Mesh 1 (Loop ABDA): Traversing loop ABDA clockwise: -I₁ P - I_g R_g + I₂ R = 0  ⟶ [Equation 1].",
            "Applying KVL to Mesh 2 (Loop BCDB): Traversing loop BCDB clockwise: -(I₁ - I_g) Q + (I₂ + I_g) S + I_g R_g = 0  ⟶ [Equation 2].",
            "Condition of Balance: The bridge is balanced when potentials at nodes B and D are equal (V_B = V_D). In this state, zero current flows through the galvanometer: I_g = 0 (null deflection).",
            "Substituting I_g = 0 into Equation 1: -I₁ P - 0 + I₂ R = 0 ⟹ I₁ P = I₂ R  ⟶ [Equation 3].",
            "Substituting I_g = 0 into Equation 2: -I₁ Q + I₂ S + 0 = 0 ⟹ I₁ Q = I₂ S  ⟶ [Equation 4].",
            "Dividing Equation 3 by Equation 4: (I₁ P) / (I₁ Q) = (I₂ R) / (I₂ S).",
            "Canceling Common Currents: P / Q = R / S.",
            "Conclusion: This is the fundamental condition for a balanced Wheatstone bridge."
          ],
          formula: "P / Q = R / S  [Balanced bridge condition when I_g = 0]"
        }
      ],
      diagramNotes: "Draw diamond ABCD with resistors P (AB), Q (BC), R (AD), S (DC); galvanometer across BD; battery and key across AC.",
      markingScheme: [
        "0.5 Mark: Principle of Wheatstone bridge and defining balanced null condition (I_g = 0).",
        "2 Marks: Circuit diagram with currents and rigorous application of KVL to both loops to derive P/Q = R/S.",
        "0.5 Mark: Stating condition for maximum bridge sensitivity (P ≈ Q ≈ R ≈ S)."
      ],
      examinerTips: "Invariance Property: If the battery and galvanometer are interchanged across diagonals AC and BD in a balanced Wheatstone bridge, the balance condition P/Q = R/S remains completely unchanged!"
    }
  },
  {
    id: 'imp-phy-16',
    number: 16,
    title: "Magnetic Materials: Properties of Diamagnetic, Paramagnetic & Ferromagnetic",
    shortLabel: "Properties of Dia, Para & Ferro Materials",
    chapterId: 'phy-ch-5',
    chapterTitle: 'Magnetism and Matter',
    unit: 'Magnetism',
    marks: '3 Marks',
    marksNum: 3,
    category: 'Comparative Matrix & Properties',
    frequency: 'Guaranteed 3-Mark Table Question',
    questionPrompt: "(a) Compare Diamagnetic, Paramagnetic, and Ferromagnetic substances on the basis of:\n  (i) Magnetic susceptibility (χ)\n  (ii) Relative permeability (μ_r)\n  (iii) Behavior in a non-uniform magnetic field\n  (iv) Effect of temperature\n(b) Give two examples of each type.",
    ncertRef: {
      textbook: 'NCERT Physics Class 12, Part 1',
      chapter: 'Chapter 5: Magnetism and Matter',
      section: 'Sections 5.5.1, 5.5.2, 5.5.3 (pp. 191–197)',
      equations: 'Eq. (5.14)',
      figures: 'Figs. 5.11, 5.12, 5.13',
      summary: 'Classification of magnetic substances by atomic dipole origin, susceptibility χ_m, relative permeability μ_r, Curie\'s law, and field line behavior.'
    },
    modelAnswer: {
      statement: "Materials are classified into diamagnetic, paramagnetic, and ferromagnetic based on the magnetic response of their atomic electrons and magnetic dipole moments when placed in an external magnetic field.",
      derivations: [
        {
          name: "6-Point NCERT Comprehensive Comparison Matrix [NCERT Section 5.5]",
          steps: [
            "1. Atomic Dipole Origin:",
            "   • Diamagnetic: All electron orbital pairs are filled; net permanent atomic dipole moment is zero. External B induces tiny opposing orbital dipoles.",
            "   • Paramagnetic: Atoms have unpaired electrons possessing permanent magnetic dipole moments, but thermal agitation randomly disorients them (net M = 0 without field).",
            "   • Ferromagnetic: Atoms have permanent dipole moments that spontaneously align in microscopic macroscopic domains due to strong quantum mechanical exchange coupling.",
            "2. Magnetic Susceptibility (χ_m):",
            "   • Diamagnetic: Small and NEGATIVE (-1 ≤ χ < 0), independent of temperature.",
            "   • Paramagnetic: Small and POSITIVE (0 < χ < 10⁻³), inversely proportional to absolute temperature.",
            "   • Ferromagnetic: Extremely LARGE and POSITIVE (χ ≫ 1000), non-linear function of field and temperature.",
            "3. Relative Permeability (μ_r = 1 + χ_m):",
            "   • Diamagnetic: Slightly LESS than 1 (0 ≤ μ_r < 1).",
            "   • Paramagnetic: Slightly GREATER than 1 (μ_r > 1).",
            "   • Ferromagnetic: Enormously GREATER than 1 (μ_r ≫ 1000).",
            "4. Behavior in Non-Uniform Magnetic Field:",
            "   • Diamagnetic: Feebly repelled; moves from regions of stronger field to weaker field.",
            "   • Paramagnetic: Feebly attracted; moves from regions of weaker field to stronger field.",
            "   • Ferromagnetic: Strongly attracted; rapidly rushes into regions of strongest magnetic field.",
            "5. Temperature Dependence:",
            "   • Diamagnetic: Strictly INDEPENDENT of temperature.",
            "   • Paramagnetic: Obeys Curie's Law: χ = C / T (susceptibility decreases as temperature rises).",
            "   • Ferromagnetic: Obeys Curie-Weiss Law above Curie temperature T_c: χ = C / (T - T_c). Above T_c, ferromagnetic substance transitions into a paramagnetic substance!",
            "6. Standard NCERT Examples:",
            "   • Diamagnetic: Bismuth (Bi), Copper (Cu), Lead (Pb), Silicon, Water (H₂O), Nitrogen at STP.",
            "   • Paramagnetic: Aluminium (Al), Sodium (Na), Calcium, Platinum (Pt), Liquid Oxygen (O₂).",
            "   • Ferromagnetic: Iron (Fe), Cobalt (Co), Nickel (Ni), Gadolinium (Gd), Alnico."
          ],
          formula: "Dia: -1 ≤ χ < 0, μ_r < 1 | Para: χ = C/T, μ_r > 1 | Ferro: χ ≫ 10³, μ_r ≫ 10³"
        }
      ],
      diagramNotes: "Draw magnetic lines: expelled by diamagnetic rod (B_in < B_out); drawn slightly inward by paramagnetic rod; heavily concentrated by ferromagnetic rod.",
      markingScheme: [
        "1 Mark: Correct susceptibility values (with signs) and relative permeabilities for all 3 classes.",
        "1 Mark: Behavior in non-uniform field and field line concentration/expulsion sketch.",
        "1 Mark: Temperature laws (Curie law, Curie temperature transition) and authentic examples."
      ],
      examinerTips: "Meissner Effect in Superconductors: Superconductors are perfect diamagnets with susceptibility χ = -1 and relative permeability μ_r = 0. They completely expel all internal magnetic field lines (B_in = 0)."
    }
  },
  {
    id: 'imp-phy-17',
    number: 17,
    title: "AC Circuits: Pure Inductor, Pure Capacitor & Series LCR Resonance",
    shortLabel: "AC Circuits: Inductor, Capacitor & Series LCR",
    chapterId: 'phy-ch-7',
    chapterTitle: 'Alternating Current',
    unit: 'Alternating Current',
    marks: '5 Marks',
    marksNum: 5,
    category: 'Derivation & 5-Marker',
    frequency: 'Guaranteed 5-Marker Derivation in AC',
    questionPrompt: "(a) Show that in an AC circuit containing:\n  (i) A pure inductor, current lags voltage by π/2 radians.\n  (ii) A pure capacitor, current leads voltage by π/2 radians.\n(b) For a series LCR circuit driven by V = V₀ sin ωt:\n  (i) Derive the expression for impedance Z using a phasor diagram.\n  (ii) Derive the resonance frequency condition (ω₀) and state the characteristics of electrical resonance.",
    ncertRef: {
      textbook: 'NCERT Physics Class 12, Part 1',
      chapter: 'Chapter 7: Alternating Current',
      section: 'Sections 7.3, 7.4, 7.5, 7.6 (pp. 238–251)',
      equations: 'Eqs. (7.11), (7.19), (7.25), (7.27)',
      figures: 'Figs. 7.5, 7.9, 7.13, 7.14',
      summary: 'Inductive and capacitive phase shifts (±π/2), phasor derivation of impedance Z = √[R² + (X_L - X_C)²], and resonance ω₀ = 1/√(LC).'
    },
    modelAnswer: {
      statement: "In AC circuits, pure inductive reactance X_L = ωL causes current to lag voltage by 90°, while capacitive reactance X_C = 1/(ωC) causes current to lead voltage by 90°. In a series LCR circuit, total opposition is represented by impedance Z = √[R² + (X_L - X_C)²].",
      derivations: [
        {
          name: "Derivation 1: Pure Inductor (Current Lags by π/2) [NCERT Section 7.3]",
          steps: [
            "Circuit: Connect pure inductor L across AC voltage V = V₀ sin(ωt).",
            "Self-Induced EMF: By Faraday-Lenz law, back emf across inductor is ε = -L (dI/dt).",
            "Loop Rule: By Kirchhoff's loop law: V - L(dI/dt) = 0 ⟹ dI = (V / L) dt = (V₀ / L) sin(ωt) dt.",
            "Integrating for Current: I(t) = ∫ (V₀ / L) sin(ωt) dt = - (V₀ / ωL) cos(ωt).",
            "Trigonometric Conversion: Using -cos(ωt) = sin(ωt - π/2): I(t) = (V₀ / ωL) sin(ωt - π/2).",
            "Inductive Reactance: Define X_L = ωL = 2πfL. Peak current is I₀ = V₀ / X_L.",
            "Phase Conclusion: The current equation I = I₀ sin(ωt - π/2) proves that current LAGS voltage by π/2 radians (90°)."
          ],
          formula: "I = I₀ sin(ωt - π/2) ; X_L = ωL = 2πfL  [Current lags by π/2]"
        },
        {
          name: "Derivation 2: Pure Capacitor (Current Leads by π/2) [NCERT Section 7.4]",
          steps: [
            "Circuit: Connect pure capacitor C across AC voltage V = V₀ sin(ωt).",
            "Instantaneous Charge: At any instant: q(t) = C · V = C · V₀ sin(ωt).",
            "Differentiating for Current: I(t) = dq/dt = d/dt [C V₀ sin(ωt)] = C V₀ ω cos(ωt).",
            "Trigonometric Conversion: Using cos(ωt) = sin(ωt + π/2): I(t) = [ V₀ / (1 / ωC) ] sin(ωt + π/2).",
            "Capacitive Reactance: Define X_C = 1 / (ωC) = 1 / (2πfC). Peak current is I₀ = V₀ / X_C.",
            "Phase Conclusion: The current equation I = I₀ sin(ωt + π/2) proves that current LEADS voltage by π/2 radians (90°)."
          ],
          formula: "I = I₀ sin(ωt + π/2) ; X_C = 1 / (ωC) = 1 / (2πfC)  [Current leads by π/2]"
        },
        {
          name: "Derivation 3: Series LCR Circuit Phasor Derivation & Resonance [NCERT Section 7.5 & 7.6]",
          steps: [
            "Circuit: Resistor R, Inductor L, and Capacitor C are connected in series across V = V₀ sin(ωt). Common current is I = I₀ sin(ωt - φ).",
            "Phasor Voltages: Voltage across R is V_R = I₀ R (in phase with I). Voltage across L is V_L = I₀ X_L (leads I by 90°). Voltage across C is V_C = I₀ X_C (lags I by 90°).",
            "Resultant Reactive Voltage: Since V_L and V_C are along the same straight line in opposite directions, their resultant is (V_L - V_C) perpendicular to V_R.",
            "Phasor Triangle (Pythagorean Theorem): V₀² = V_R² + (V_L - V_C)² = (I₀ R)² + [ I₀ (X_L - X_C) ]².",
            "Factoring I₀: V₀² = I₀² · [ R² + (X_L - X_C)² ] ⟹ V₀ = I₀ √[ R² + (X_L - X_C)² ].",
            "Impedance Expression: Impedance Z = V₀ / I₀ = √[ R² + (X_L - X_C)² ].",
            "Phase Angle: tanφ = (V_L - V_C) / V_R = (X_L - X_C) / R.",
            "RESONANCE CONDITION: Electrical resonance occurs when inductive reactance equals capacitive reactance: X_L = X_C ⟹ ω₀ L = 1 / (ω₀ C).",
            "Resonant Frequency: ω₀² = 1 / (LC) ⟹ ω₀ = 1 / √(LC) ⟹ f₀ = 1 / [ 2π √(LC) ].",
            "Characteristics of Electrical Resonance:",
            "  1. Impedance is at its absolute MINIMUM: Z_min = R (purely resistive circuit).",
            "  2. Current amplitude is at its absolute MAXIMUM: I₀_max = V₀ / R.",
            "  3. Current and voltage are exactly in phase (φ = 0, power factor cosφ = 1).",
            "  4. Sharpness of resonance is governed by Quality Factor: Q = (ω₀ L) / R = (1 / R) √(L / C)."
          ],
          formula: "Z = √[R² + (X_L - X_C)²] ; ω₀ = 1 / √(LC) ; Z_res = R ; I_max = V₀ / R"
        }
      ],
      diagramNotes: "Phasor diagram with V_R along x-axis, (V_L - V_C) along y-axis, resultant V₀ at angle φ; Resonance curve of current I versus frequency ω showing peak at ω₀.",
      markingScheme: [
        "1 Mark: Mathematical proof that current lags voltage by π/2 in pure inductor.",
        "1 Mark: Mathematical proof that current leads voltage by π/2 in pure capacitor.",
        "2 Marks: Phasor diagram and derivation of impedance Z = √[R² + (X_L - X_C)²].",
        "1 Mark: Derivation of resonance frequency ω₀ = 1/√(LC) and stating resonance properties."
      ],
      examinerTips: "Behavior at DC (frequency f = 0): Inductor offers zero opposition (X_L = 0, acts as short circuit); Capacitor offers infinite opposition (X_C = 1/0 = ∞, blocks DC completely)!"
    }
  },
  {
    id: 'imp-phy-18',
    number: 18,
    title: "Electric Field of a Dipole: Axial and Equatorial Positions",
    shortLabel: "Dipole Field: Axial & Equatorial Derivations",
    chapterId: 'phy-ch-1',
    chapterTitle: 'Electric Charges and Fields',
    unit: 'Electrostatics',
    marks: '5 Marks',
    marksNum: 5,
    category: 'Derivation',
    frequency: 'Classic 5-Marker Derivation (CBSE 2023, 2020, 2017)',
    questionPrompt: "(a) Derive an expression for the electric field at a point on the AXIAL LINE of an electric dipole of dipole moment p⃗.\n(b) Derive an expression for the electric field at a point on the EQUATORIAL LINE of the dipole.\n(c) What is the ratio of axial to equatorial field for a short dipole at the same distance r?",
    ncertRef: {
      textbook: 'NCERT Physics Class 12, Part 1',
      chapter: 'Chapter 1: Electric Charges and Fields',
      section: 'Section 1.10.1: The Field of an Electric Dipole (pp. 27–30)',
      equations: 'Eqs. (1.9), (1.11)',
      figures: 'Figs. 1.20(a), 1.20(b)',
      summary: 'End-on (axial) and broadside-on (equatorial) electric field derivations from Coulomb\'s law and short dipole inverse-cube ratio E_axial = 2 E_eq.'
    },
    modelAnswer: {
      statement: "An electric dipole consists of charges -q and +q separated by vector distance 2a⃗, with dipole moment p⃗ = q(2a⃗) directed from -q to +q. Its electric field decays with distance as 1/r³ for a short dipole.",
      derivations: [
        {
          name: "Derivation 1: Axial Line (End-On Position) [NCERT Section 1.10.1]",
          steps: [
            "Setup: Let point P lie on the axial line of the dipole at distance r from the dipole center O.",
            "Distance to Charges: The distance of point P from +q is (r - a); distance from -q is (r + a).",
            "Field due to +q: E₊ = [1 / (4πε₀)] · [ q / (r - a)² ], directed away from +q (along p⃗).",
            "Field due to -q: E₋ = [1 / (4πε₀)] · [ q / (r + a)² ], directed toward -q (opposite to p⃗).",
            "Net Axial Field: Since E₊ and E₋ are collinear and opposite with E₊ > E₋: E_axial = E₊ - E₋ = [q / (4πε₀)] · [ 1 / (r - a)² - 1 / (r + a)² ].",
            "Algebraic Simplification: E_axial = [q / (4πε₀)] · [ (r + a)² - (r - a)² ] / [ (r² - a²)² ].",
            "Expanding Numerator: (r + a)² - (r - a)² = (r² + 2ar + a²) - (r² - 2ar + a²) = 4ar.",
            "Substituting: E_axial = [q / (4πε₀)] · [ 4ar ] / (r² - a²)² = [1 / (4πε₀)] · [ 2(q · 2a)r ] / (r² - a²)².",
            "Using p = q · 2a: E_axial = [1 / (4πε₀)] · [ 2pr ] / (r² - a²)².",
            "Short Dipole Approximation (r ≫ a): Neglect a² compared to r² (r² - a² ≈ r²): E_axial = [1 / (4πε₀)] · (2pr / r⁴) = [1 / (4πε₀)] · (2p / r³).",
            "Vector Form: E⃗_axial = [1 / (4πε₀)] · (2p⃗ / r³) (directed PARALLEL to p⃗)."
          ],
          formula: "E_axial = [1 / (4πε₀)] · (2p / r³)  [Parallel to dipole moment p⃗]"
        },
        {
          name: "Derivation 2: Equatorial Line (Broadside-On Position) [NCERT Section 1.10.1]",
          steps: [
            "Setup: Let point P lie on the perpendicular bisector of the dipole at distance r from dipole center O.",
            "Distance to Charges: By Pythagoras theorem, the distance of P from both +q and -q is identical: d = √(r² + a²).",
            "Field Magnitudes: Magnitude of field due to each charge is equal: E₊ = E₋ = [1 / (4πε₀)] · [ q / (r² + a²) ].",
            "Resolving Components: Let angle between dipole axis and line joining charges to P be θ. Resolve E₊ and E₋ into rectangular components:",
            "  • Vertical Components: E₊ sinθ (upward) and E₋ sinθ (downward) are equal in magnitude and opposite in direction. They cancel out completely!",
            "  • Horizontal Components: E₊ cosθ and E₋ cosθ are both directed parallel to the dipole axis, opposite to p⃗. They add up constructively.",
            "Net Equatorial Field: E_eq = E₊ cosθ + E₋ cosθ = 2 E₊ cosθ = 2 · [1 / (4πε₀)] · [ q / (r² + a²) ] · cosθ.",
            "Evaluating cosθ: From geometry of the right triangle: cosθ = Base / Hypotenuse = a / √(r² + a²).",
            "Substituting cosθ: E_eq = [1 / (4πε₀)] · [ 2qa ] / [ (r² + a²)(r² + a²)^(1/2) ] = [1 / (4πε₀)] · [ p ] / (r² + a²)^(3/2).",
            "Short Dipole Approximation (r ≫ a): Neglect a² compared to r²: E_eq = [1 / (4πε₀)] · (p / r³).",
            "Vector Form: E⃗_eq = - [1 / (4πε₀)] · (p⃗ / r³) (directed strictly OPPOSITE to p⃗).",
            "Ratio Comparison: E_axial / E_eq = [ 2p / (4πε₀ r³) ] / [ p / (4πε₀ r³) ] = 2. In vector form: E⃗_axial = -2 E⃗_eq."
          ],
          formula: "E_eq = [1 / (4πε₀)] · (p / r³)  [Opposite to p⃗ ; E_axial / E_eq = 2]"
        }
      ],
      diagramNotes: "Axial diagram showing charges -q, +q and point P with E₊ away and E₋ toward; Equatorial diagram showing isosceles triangle, canceling vertical sinθ components, and adding horizontal cosθ components.",
      markingScheme: [
        "2 Marks: Complete axial derivation with clear algebraic steps and formula E_axial = 2p/(4πε₀r³).",
        "2 Marks: Complete equatorial derivation showing component resolution and formula E_eq = p/(4πε₀r³).",
        "1 Mark: Ratio relationship E_axial / E_eq = 2 and vector direction comparison."
      ],
      examinerTips: "Vector Signs: E⃗_axial points in the SAME direction as p⃗, while E⃗_eq points in the OPPOSITE direction to p⃗. Hence in vector form: E⃗_axial = -2 E⃗_eq. Never forget the negative sign when writing the vector relation!"
    }
  },
  {
    id: 'imp-phy-19',
    number: 19,
    title: "Energy Stored in a Capacitor and Energy Stored in an Inductor",
    shortLabel: "Energy Stored in Capacitor & Inductor",
    chapterId: 'phy-ch-2',
    chapterTitle: 'Electrostatic Potential and Capacitance',
    unit: 'Electrostatics & EMI',
    marks: '3 Marks',
    marksNum: 3,
    category: 'Derivation',
    frequency: 'Frequent 3-Marker Derivation',
    questionPrompt: "(a) Derive an expression for the electrostatic energy stored in a charged capacitor of capacitance C with potential difference V.\n(b) Express this energy in terms of energy density (u_E) of the electric field.\n(c) Derive an expression for the magnetic energy stored in an inductor of self-inductance L carrying steady current I₀.",
    ncertRef: {
      textbook: 'NCERT Physics Class 12, Part 1',
      chapter: 'Chapter 2 (Capacitor) & Chapter 6 (Inductor)',
      section: 'Sections 2.11 (pp. 81–83) & 6.7.2 (pp. 222–224)',
      equations: 'Eqs. (2.49), (2.50), (6.19)',
      figures: 'Figs. 2.29, 6.13',
      summary: 'Integration of infinitesimal work dW = V dq to obtain U = (1/2)CV² and dW = L I dI to obtain U = (1/2)LI², with energy densities u_E = (1/2)ε₀E² and u_B = B²/(2μ₀).'
    },
    modelAnswer: {
      statement: "Energy is stored in reactive circuit components by performing work against opposing electrostatic or magnetic fields:\n• In a Capacitor: Work done charging the plates is stored as electrostatic potential energy in the ELECTRIC FIELD between the plates.\n• In an Inductor: Work done against the self-induced back emf is stored as magnetic potential energy in the MAGNETIC FIELD inside its core.",
      derivations: [
        {
          name: "Derivation 1: Electrostatic Energy in Capacitor [NCERT Section 2.11]",
          steps: [
            "Charging Process: Suppose a capacitor of capacitance C is charged by gradually transferring infinitesimal charge elements dq from plate 2 to plate 1.",
            "Intermediate Potential: At any intermediate stage when charge on the plates is q', the potential difference between them is V' = q' / C.",
            "Small Work Done: The work done in transferring additional charge dq' across this potential difference is: dW = V' dq' = (q' / C) dq'.",
            "Total Work Integration: Total work done in charging the capacitor from initial charge 0 to final charge Q is: W = ∫₀^Q (q' / C) dq' = (1 / C) [ q'² / 2 ]₀^Q = Q² / (2C).",
            "Potential Energy Forms: This work is stored as electrostatic potential energy U. Using Q = C · V: U = Q² / (2C) = (1/2) C V² = (1/2) Q V.",
            "Energy Density Derivation: For a parallel-plate capacitor with plate area A and separation d: C = ε₀ A / d and V = E · d. Substitute C and V into U = (1/2) C V²: U = (1/2) · [ (ε₀ A) / d ] · (E d)² = (1/2) ε₀ E² · (A · d).",
            "Volume of Field Region: The volume between the capacitor plates is Volume = A · d. Energy density u_E is energy per unit volume: u_E = U / (A d) = (1/2) ε₀ E²."
          ],
          formula: "U = (1/2) C V² = Q² / (2C) = (1/2) Q V ; u_E = (1/2) ε₀ E²"
        },
        {
          name: "Derivation 2: Magnetic Energy in Inductor [NCERT Section 6.7.2]",
          steps: [
            "Current Growth: When current increases from 0 to I in an inductor of self-inductance L, a self-induced back emf opposes current growth: |ε| = L (dI / dt).",
            "Rate of Work Done (Power): To maintain current growth, the external source must perform work against this back emf. The instantaneous power is: P = dW / dt = |ε| · I = [ L (dI / dt) ] · I.",
            "Infinitesimal Work: The work done in time dt is: dW = P dt = L · I · dI.",
            "Total Work Integration: Total work done in building up the current from 0 to steady maximum value I₀: W = ∫₀^(I₀) L I dI = L [ I² / 2 ]₀^(I₀) = (1/2) L I₀².",
            "Magnetic Potential Energy: This work is stored as magnetic potential energy U_B in the magnetic field: U_B = (1/2) L I₀².",
            "Magnetic Energy Density: For a long solenoid of cross-sectional area A and length l (Volume = Al): B = μ₀ n I and L = μ₀ n² Al. Substituting gives magnetic energy density: u_B = U_B / (A l) = B² / (2μ₀)."
          ],
          formula: "U_B = (1/2) L I₀² ; u_B = B² / (2μ₀)  [Symmetric to u_E = (1/2)ε₀E²]"
        }
      ],
      diagramNotes: "Capacitor showing charging curve and electric field E between plates; Inductor coil showing back EMF opposing current growth.",
      markingScheme: [
        "1.5 Marks: Capacitor energy derivation dW = (q/C)dq to U = (1/2)CV² and energy density formula u_E = (1/2)ε₀E².",
        "1.5 Marks: Inductor energy derivation dW = L I dI to U = (1/2)LI₀² and magnetic energy density formula."
      ],
      examinerTips: "Symmetry of Field Energy Densities:\n• Electric Field: u_E = (1/2) ε₀ E²\n• Magnetic Field: u_B = (1/2μ₀) B² = B² / (2μ₀)\nBoth expressions follow the exact same mathematical structure!"
    }
  },
  {
    id: 'imp-phy-20',
    number: 20,
    title: "Force Between Two Parallel Current-Carrying Conductors & Definition of 1 Ampere",
    shortLabel: "Force Between Parallel Conductors (1 Ampere)",
    chapterId: 'phy-ch-4',
    chapterTitle: 'Moving Charges and Magnetism',
    unit: 'Magnetism',
    marks: '3 Marks',
    marksNum: 3,
    category: 'Derivation & Definition',
    frequency: 'Extremely High Frequency (CBSE 2023, 2022, 2020)',
    questionPrompt: "(a) Derive the expression for the force per unit length between two infinitely long straight parallel conductors carrying currents I₁ and I₂ separated by distance d in vacuum.\n(b) Hence define one ampere of electric current.\n(c) State whether the force is attractive or repulsive when currents flow in: (i) same direction, (ii) opposite directions.",
    ncertRef: {
      textbook: 'NCERT Physics Class 12, Part 1',
      chapter: 'Chapter 4: Moving Charges and Magnetism',
      section: 'Section 4.7: Force Between Two Parallel Currents (pp. 154–156)',
      equations: 'Eqs. (4.29), (4.30)',
      figures: 'Fig. 4.19',
      summary: 'Field of wire 1 B₁ = μ₀I₁/(2πd) exerting Lorentz force on wire 2, force per unit length f = μ₀I₁I₂/(2πd), and the official SI Ampere definition.'
    },
    modelAnswer: {
      statement: "Two parallel current-carrying conductors exert magnetic forces on each other because current in conductor 1 produces a magnetic field that exerts a Lorentz force on moving charges in conductor 2, and vice versa.",
      derivations: [
        {
          name: "Derivation of Force Per Unit Length [NCERT Section 4.7]",
          steps: [
            "Conductor Arrangement: Consider two long, straight parallel conductors 1 and 2 placed in vacuum separated by distance d, carrying steady currents I₁ and I₂.",
            "Magnetic Field Produced by Conductor 1: By Ampère's Law / Biot-Savart Law, current I₁ produces magnetic field B₁ at all points on conductor 2: B₁ = (μ₀ I₁) / (2π d).",
            "Field Direction: By the Right-Hand Thumb Rule, field B₁ at conductor 2 is directed perpendicular to the plane containing both wires, into the page.",
            "Lorentz Force on Conductor 2: Segment of conductor 2 of length L carrying current I₂ in field B₁ experiences magnetic force: F₂ = I₂ L B₁ sin(90°) = I₂ L · [ (μ₀ I₁) / (2π d) ].",
            "Total Force on Length L: F = (μ₀ I₁ I₂ L) / (2π d).",
            "Force Per Unit Length: Dividing by length L gives force per unit length (f = F/L): f = F / L = (μ₀ I₁ I₂) / (2π d).",
            "Equal and Opposite Reaction: By Newton's third law, conductor 2 exerts an equal and opposite force on conductor 1: F⃗₁₂ = -F⃗₂₁.",
            "Direction of Force (Fleming's Left-Hand Rule):",
            "  • Parallel Currents (Same Direction): Force is ATTRACTIVE (conductors pull toward each other).",
            "  • Antiparallel Currents (Opposite Directions): Force is REPULSIVE (conductors push away from each other)."
          ],
          formula: "F / L = (μ₀ I₁ I₂) / (2π d)  [Parallel currents attract ; Antiparallel currents repel]"
        },
        {
          name: "Official SI Definition of One Ampere [NCERT Section 4.7]",
          steps: [
            "Setting Parameters: In the force formula f = (μ₀ I₁ I₂) / (2π d), set: I₁ = I₂ = 1 A, d = 1 m, and μ₀ = 4π × 10⁻⁷ T·m/A.",
            "Evaluating Force: f = (4π × 10⁻⁷ × 1 × 1) / (2π × 1) = 2 × 10⁻⁷ N/m.",
            "Standard SI Definition: 'One Ampere is that constant current which, if maintained in two straight parallel conductors of infinite length and negligible circular cross-section, placed one metre apart in vacuum, produces between these conductors a force equal to 2 × 10⁻⁷ newton per metre of length.'"
          ],
          formula: "1 Ampere ⟹ F / L = 2 × 10⁻⁷ N/m at separation d = 1 m in vacuum"
        }
      ],
      diagramNotes: "Draw two parallel wires with currents I₁ and I₂ at separation d; show B₁ into the page and attractive force vectors F₁₂ and F₂₁.",
      markingScheme: [
        "1.5 Marks: Derivation of field B₁ = μ₀I₁/(2πd) and force per unit length f = μ₀I₁I₂/(2πd).",
        "0.5 Mark: Identification of attractive force for parallel currents and repulsive for antiparallel currents.",
        "1 Mark: Exact standard definition of one ampere (specifying parallel conductors, 1 metre separation, vacuum, and 2 × 10⁻⁷ N/m)."
      ],
      examinerTips: "Remember: Electric charges vs Currents: Like electric charges REPEL, but like electric currents ATTRACT each other! Antiparallel currents repel."
    }
  },
  {
    id: 'imp-phy-21',
    number: 21,
    title: "Maxwell's Equations & Physical Significance of Displacement Current",
    shortLabel: "Maxwell's Equations & Displacement Current",
    chapterId: 'phy-ch-8',
    chapterTitle: 'Electromagnetic Waves',
    unit: 'Electromagnetic Waves',
    marks: '3 Marks',
    marksNum: 3,
    category: 'Theoretical & Unification',
    frequency: 'Core Foundation of Ch 8 (CBSE 2023, 2022, 2019)',
    questionPrompt: "(a) What was the missing term identified by James Clerk Maxwell in electromagnetism?\n(b) Write Maxwell's four fundamental equations in integral form and state the physical significance of each.\n(c) Explain how Maxwell's prediction established that light is an electromagnetic wave.",
    ncertRef: {
      textbook: 'NCERT Physics Class 12, Part 1',
      chapter: 'Chapter 8: Electromagnetic Waves',
      section: 'Sections 8.2 & 8.3 (pp. 270–274)',
      equations: 'Table 8.2: Maxwell\'s Equations',
      figures: 'Figs. 8.2, 8.3',
      summary: 'Electromagnetic unification, 4 fundamental integral equations, physical significance of each law, and velocity of light c = 1/√(μ₀ε₀).'
    },
    modelAnswer: {
      statement: "James Clerk Maxwell recognized that the fundamental laws of electricity and magnetism lacked symmetry: Faraday had established that a time-varying magnetic field produces an electric field, but Ampère's circuital law lacked the symmetric term showing that a time-varying electric field produces a magnetic field. Adding displacement current I_d = ε₀(dΦ_E/dt) completed the unification.",
      derivations: [
        {
          name: "Maxwell's Four Fundamental Equations in Integral Form [NCERT Table 8.2]",
          steps: [
            "1. Gauss's Law for Electrostatics: ∮ E⃗ · dA⃗ = q_enclosed / ε₀",
            "   Physical Significance: The electric flux through any closed surface is proportional to the net enclosed charge. Electric charges act as sources or sinks of electric fields. Isolated electric charges (monopoles) exist.",
            "2. Gauss's Law for Magnetism: ∮ B⃗ · dA⃗ = 0",
            "   Physical Significance: The net magnetic flux through any closed surface is always zero. Magnetic monopoles DO NOT exist; magnetic field lines are continuous closed loops with no beginning or end.",
            "3. Faraday's Law of Electromagnetic Induction: ∮ E⃗ · dl⃗ = -dΦ_B / dt",
            "   Physical Significance: The line integral of electric field around any closed loop equals the negative time rate of change of magnetic flux through that loop. A changing magnetic field generates an induced electric field.",
            "4. Ampère-Maxwell Law: ∮ B⃗ · dl⃗ = μ₀ (I_c + I_d) = μ₀ [ I_c + ε₀ (dΦ_E / dt) ]",
            "   Physical Significance: Magnetic fields are generated both by conduction currents (moving electric charges) AND by displacement currents (time-varying electric fields)."
          ],
          formula: "∮ B⃗ · dl⃗ = μ₀ [I_c + ε₀ (dΦ_E / dt)] ; c = 1 / √(μ₀ε₀)"
        },
        {
          name: "Unification of Optics and Electromagnetism [NCERT Section 8.3]",
          steps: [
            "Free Space Equations: In vacuum with no charges (q = 0) and no conduction currents (I_c = 0), Maxwell's equations couple changing E⃗ and changing B⃗ symmetrically.",
            "Wave Equation: Taking the curl of Faraday's law and substituting the Ampère-Maxwell law leads to the classical wave equation for both E⃗ and B⃗ with wave velocity: v = 1 / √(μ₀ε₀).",
            "Evaluation of Constants: Substituting experimental values of vacuum permittivity and permeability:",
            "  μ₀ = 4π × 10⁻⁷ T·m/A = 1.2566 × 10⁻⁶ H/m",
            "  ε₀ = 8.8542 × 10⁻¹² C²/(N·m²)",
            "Velocity Value: c = 1 / √[ (4π × 10⁻⁷) × (8.8542 × 10⁻¹²) ] = 2.9979 × 10⁸ m/s.",
            "Historical Conclusion: Since this calculated velocity precisely matched the experimentally measured velocity of light, Maxwell deduced that light is an electromagnetic wave!"
          ],
          formula: "c = 1 / √(μ₀ε₀) = 3 × 10⁸ m/s  [Light is an electromagnetic wave]"
        }
      ],
      diagramNotes: "Self-propagating wave: changing E creates B, changing B creates E, propagating through vacuum at speed c.",
      markingScheme: [
        "1.5 Marks: Writing all four Maxwell equations in correct mathematical integral notation.",
        "1 Mark: Stating the physical significance corresponding to each of the four equations.",
        "0.5 Mark: Explanation of how wave speed c = 1/√(μ₀ε₀) established the electromagnetic nature of light."
      ],
      examinerTips: "Remember: ∮ B⃗ · dA⃗ = 0 proves that magnetic monopoles do not exist in nature. If a magnetic monopole were ever discovered, the right-hand side would become μ₀ · q_m!"
    }
  },
  {
    id: 'imp-phy-22',
    number: 22,
    title: "Conversion of Galvanometer into Ammeter and Voltmeter (Formulas & Circuit)",
    shortLabel: "Conversion: Galvanometer to Ammeter & Voltmeter",
    chapterId: 'phy-ch-4',
    chapterTitle: 'Moving Charges and Magnetism',
    unit: 'Magnetism',
    marks: '3 Marks',
    marksNum: 3,
    category: 'Derivation & Circuit Design',
    frequency: 'Extremely Frequent 3-Marker & Practical Numerical',
    questionPrompt: "(a) How is a moving coil galvanometer converted into an AMMETER to measure up to current I? Derive the expression for the required shunt resistance S.\n(b) How is a galvanometer converted into a VOLTMETER to measure up to voltage V? Derive the expression for the required series resistance R.\n(c) What is the resistance of: (i) an ideal ammeter, (ii) an ideal voltmeter?",
    ncertRef: {
      textbook: 'NCERT Physics Class 12, Part 1',
      chapter: 'Chapter 4: Moving Charges and Magnetism',
      section: 'Section 4.10.3: Conversion to Ammeter and Voltmeter (pp. 165–166)',
      equations: 'Eqs. (4.42), (4.43)',
      figures: 'Figs. 4.26, 4.27',
      summary: 'Derivation of low shunt resistance in parallel (S = I_g G / (I - I_g)) for ammeters and high multiplier resistance in series (R = V/I_g - G) for voltmeters.'
    },
    modelAnswer: {
      statement: "A moving coil galvanometer has internal resistance G and gives full-scale deflection for a very small current I_g (typically 1–10 mA). It cannot be inserted directly into power circuits without modification:\n• To measure larger current I: Connect a small SHUNT resistance S in PARALLEL.\n• To measure larger voltage V: Connect a high resistance R in SERIES.",
      derivations: [
        {
          name: "Conversion into Ammeter (Parallel Shunt S) [NCERT Section 4.10.3]",
          steps: [
            "Circuit Design: To measure currents up to I > I_g, connect a very small resistance called a SHUNT (S) in parallel with the galvanometer coil of resistance G.",
            "Current Division: At the input node, total current I divides: a small safe current I_g passes through the galvanometer coil, while the bulk of the current (I - I_g) bypasses through the shunt.",
            "Parallel Voltage Equality: Since the galvanometer and shunt are connected in parallel, potential difference across both branches is identical: V_g = V_s ⟹ I_g · G = (I - I_g) · S.",
            "Shunt Formula: Solving for S: S = (I_g · G) / (I - I_g).",
            "Effective Ammeter Resistance R_A: 1/R_A = 1/G + 1/S ⟹ R_A = (G · S) / (G + S). Since S ≪ G: R_A ≈ S (extremely small).",
            "Ideal Ammeter Resistance: R_ideal = 0 (an ideal ammeter has zero internal resistance so that inserting it in series in a circuit does not reduce the circuit current)."
          ],
          formula: "S = (I_g · G) / (I - I_g) ; R_A = (G · S) / (G + S) ; Ideal R_A = 0"
        },
        {
          name: "Conversion into Voltmeter (Series Multiplier R) [NCERT Section 4.10.3]",
          steps: [
            "Circuit Design: To measure potential differences up to V, connect a very large resistance R (multiplier) in series with the galvanometer coil.",
            "Total Series Resistance: The total resistance of the combination is R_total = G + R.",
            "Ohm's Law for Full Scale Deflection: For maximum voltage V, current through the series branch must equal full-scale deflection current I_g: V = I_g · (G + R).",
            "Solving for Series Resistance: V / I_g = G + R ⟹ R = (V / I_g) - G.",
            "Effective Voltmeter Resistance R_V: R_V = G + R (very large).",
            "Ideal Voltmeter Resistance: R_ideal = ∞ (an ideal voltmeter has infinite resistance so that connecting it in parallel across a component draws zero current from the main circuit)."
          ],
          formula: "R = (V / I_g) - G ; R_V = G + R ; Ideal R_V = ∞"
        }
      ],
      diagramNotes: "Ammeter circuit: Galvanometer G in parallel with small shunt S, input I dividing into I_g and (I-I_g); Voltmeter circuit: Galvanometer G in series with high resistor R, total voltage V.",
      markingScheme: [
        "1.5 Marks: Ammeter derivation: parallel shunt arrangement, formula S = I_g G / (I - I_g), circuit diagram, ideal R_A = 0.",
        "1.5 Marks: Voltmeter derivation: series multiplier arrangement, formula R = V/I_g - G, circuit diagram, ideal R_V = ∞."
      ],
      examinerTips: "Essential Mnemonic: 'Ammeters are Small (parallel Shunt); Voltmeters are Vast (series High resistance)'. In numericals, always convert I_g from mA to A (1 mA = 10⁻³ A) before computing!"
    }
  }
];

// Quick index & helper
export const IMPORTANT_QUESTIONS_BY_ID = Object.fromEntries(
  IMPORTANT_PHYSICS_QUESTIONS.map(q => [q.id, q])
);
