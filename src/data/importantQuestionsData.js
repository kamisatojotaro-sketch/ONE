// Top 22 Guaranteed CBSE Class 12 Physics Board Exam Questions
// High-Yield Master Questions Curated for Direct Revision

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
    questionPrompt: "(a) State Gauss's law in electrostatics.\n(b) Using Gauss's law, derive an expression for the electric field due to:\n  (i) An infinitely long straight uniformly charged wire of linear charge density λ.\n  (ii) An infinite uniformly charged plane sheet of surface charge density σ.\n  (iii) A thin spherical shell of radius R and surface charge density σ, at points outside and inside the shell.",
    modelAnswer: {
      statement: "Gauss's Law states that the total electric flux Φ_E through any closed Gaussian surface in free space is equal to 1/ε₀ times the net charge q_enclosed enclosed by that surface:\n∮ E⃗ · dA⃗ = q_enclosed / ε₀",
      derivations: [
        {
          name: "Application 1: Infinitely Long Straight Wire (Linear Charge Density λ)",
          steps: [
            "Consider an infinitely long thin straight wire carrying uniform linear charge density λ = dq/dL.",
            "Choose a cylindrical Gaussian surface of radius r and length L coaxial with the wire.",
            "Flux through the two flat circular ends: Angle between E⃗ (radial) and area vector n̂ (axial) is 90°, so E⃗ · dA⃗ = E dA cos(90°) = 0.",
            "Flux through the curved surface: E⃗ is perpendicular to the wire and parallel to dA⃗ at every point (θ = 0°).",
            "Total Flux Φ = ∮_curved E dA cos(0°) = E ∮ dA = E · (2πrL).",
            "By Gauss's law: Φ = q_enclosed / ε₀ = (λL) / ε₀.",
            "Equating: E · (2πrL) = λL / ε₀ ⟹ E = λ / (2πε₀r).",
            "Vector form: E⃗ = (λ / 2πε₀r) r̂ (directed radially outward if λ > 0, inward if λ < 0)."
          ],
          formula: "E = λ / (2πε₀r) ⟹ E ∝ 1/r"
        },
        {
          name: "Application 2: Infinite Thin Plane Sheet of Charge (Surface Density σ)",
          steps: [
            "Consider an infinite thin plane sheet with uniform surface charge density σ = dq/dA.",
            "By symmetry, electric field E⃗ is directed perpendicular to the sheet outward on both sides.",
            "Choose a cylindrical Gaussian pillbox of cross-sectional area A cutting symmetrically through the sheet with length 2r.",
            "Curved surface: E⃗ is parallel to sheet, area vector is perpendicular ⟹ E⃗ · dA⃗ = 0 (no flux through curved surface).",
            "Two flat end-caps: E⃗ and dA⃗ are parallel on both sides (θ = 0°).",
            "Total Flux Φ = 2 · (E · A).",
            "Enclosed charge q_enclosed = σ · A.",
            "By Gauss's law: 2EA = (σA) / ε₀ ⟹ E = σ / (2ε₀).",
            "Crucial result: E is INDEPENDENT of distance r from the sheet!"
          ],
          formula: "E = σ / (2ε₀)  [Independent of distance r]"
        },
        {
          name: "Application 3: Thin Spherical Shell of Radius R (Charge q = 4πR²σ)",
          steps: [
            "Case (i) Outside the shell (r ≥ R):",
            "Choose a concentric spherical Gaussian surface of radius r > R.",
            "Total Flux Φ = ∮ E dA cos(0°) = E · (4πr²).",
            "Enclosed charge = q.",
            "E · (4πr²) = q / ε₀ ⟹ E_out = (1 / 4πε₀) · (q / r²) = (σ R²) / (ε₀ r²).",
            "Case (ii) Inside the shell (r < R):",
            "Choose a concentric spherical Gaussian surface of radius r < R.",
            "Since charge resides entirely on the outer surface of the conducting/thin shell, q_enclosed = 0.",
            "E · (4πr²) = 0 / ε₀ ⟹ E_in = 0."
          ],
          formula: "E_out = (1/4πε₀)(q/r²) ; E_surface = σ/ε₀ ; E_in = 0"
        }
      ],
      diagramNotes: "Draw a cylinder around wire with radial field arrows; draw pillbox intersecting sheet with outward field on both caps; draw spherical shell with E=0 inside and 1/r² curve outside.",
      markingScheme: [
        "1 Mark: Statement of Gauss's Law with mathematical formula ∮ E⃗ · dA⃗ = q/ε₀.",
        "1.5 Marks: Clear derivation and Gaussian surface for straight wire with E = λ/(2πε₀r).",
        "1.5 Marks: Derivation for plane sheet showing 2EA = σA/ε₀ ⟹ E = σ/(2ε₀).",
        "1 Mark: Derivation for spherical shell showing E_out = q/(4πε₀r²) and E_in = 0."
      ],
      examinerTips: "Always draw the Gaussian surface and indicate the area vectors n̂ clearly. Do not forget to state that E for a plane sheet is independent of distance."
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
    modelAnswer: {
      statement: "When a current-carrying conductor is placed in an external magnetic field, the mobile charge carriers (electrons) experience the Lorentz magnetic force, which is transmitted to the lattice of the conductor, resulting in a net macroscopic force F⃗ = I(L⃗ × B⃗).",
      derivations: [
        {
          name: "Derivation from Microscopic Drift Velocity",
          steps: [
            "Consider a conductor of length L, uniform cross-sectional area A, containing n free electrons per unit volume.",
            "Total number of mobile electrons in conductor N = n · A · L.",
            "Each conduction electron has charge -e and moves with average drift velocity v⃗_d.",
            "Magnetic Lorentz force on a single electron: f⃗ = -e (v⃗_d × B⃗).",
            "Total force on conductor F⃗ = N · f⃗ = (nAL) · [-e (v⃗_d × B⃗)].",
            "Rearranging: F⃗ = [n A e (-v⃗_d)] · L × B⃗.",
            "Since current density j⃗ = n e (-v⃗_d) and current I = j · A = n A e v_d along length vector L⃗:",
            "I L⃗ = n A L (-e v⃗_d).",
            "Therefore: F⃗ = I (L⃗ × B⃗).",
            "Magnitude: F = I L B sinθ, where θ is the angle between the conductor length (current direction) and B⃗."
          ],
          formula: "F⃗ = I(L⃗ × B⃗)  ⟹  F = I L B sinθ"
        }
      ],
      diagramNotes: "Conductor oriented at angle θ with uniform B lines, showing drift velocity v_d opposite to current I, and force vector F perpendicular to both L and B.",
      markingScheme: [
        "1.5 Marks: Mathematical derivation from single electron Lorentz force f = -e(v_d × B) to F = I(L × B).",
        "0.5 Mark: Fleming's Left-Hand Rule statement.",
        "1 Mark: Special cases: θ = 90° (F_max = ILB) and θ = 0° or 180° (F = 0)."
      ],
      examinerTips: "Direction is given by Fleming's Left-Hand Rule: Forefinger = Field B, Middle finger = Current I, Thumb = Force F. Note that a conductor along the field experiences ZERO force."
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
    questionPrompt: "(a) State Faraday's laws of electromagnetic induction.\n(b) State Lenz's law. Explain how Lenz's law is a consequence of the principle of conservation of energy.\n(c) A bar magnet is moved towards a closed conducting loop. Show that mechanical work is converted into electrical energy.",
    modelAnswer: {
      statement: "Faraday's First Law: Whenever the magnetic flux linked with a closed circuit changes, an electromotive force (emf) is induced in the circuit, which lasts as long as the change in flux continues.\nFaraday's Second Law: The magnitude of the induced emf is directly proportional to the time rate of change of magnetic flux linked with the circuit:\nε = -dΦ_B / dt  (for N turns: ε = -N dΦ_B / dt)",
      derivations: [
        {
          name: "Lenz's Law and Conservation of Energy Proof",
          steps: [
            "Statement of Lenz's Law: The direction of induced current is such that it always opposes the cause (change in magnetic flux) that produces it.",
            "Why the negative sign: In ε = -dΦ/dt, the negative sign represents Lenz's opposition.",
            "Energy Conservation Argument:",
            "1. When the North pole of a magnet is pushed toward a coil, the induced current creates an opposing North pole on the facing side of the coil, repelling the incoming magnet.",
            "2. To move the magnet forward against this repulsive magnetic force, external mechanical work must be done.",
            "3. This mechanical work done by the external agent is converted into electrical energy (and eventually Joule heat I²Rt) in the coil.",
            "4. Proof by Contradiction: If the induced current assisted the motion (created a South pole), the magnet would accelerate spontaneously without any external force, creating energy out of nothing, violating the Law of Conservation of Energy!",
            "5. Hence, Lenz's law is a direct consequence of the Principle of Conservation of Energy."
          ],
          formula: "ε = -dΦ_B / dt = -N (dΦ_B / dt)"
        }
      ],
      diagramNotes: "Coil with bar magnet N-pole moving in producing anticlockwise (N-pole) current; pulling magnet out produces clockwise (S-pole) current.",
      markingScheme: [
        "1 Mark: Exact statements of Faraday's 1st and 2nd laws with mathematical formula.",
        "1 Mark: Exact statement of Lenz's law.",
        "1 Mark: Clear justification showing mechanical work done against repulsive force converts to electrical energy."
      ],
      examinerTips: "Remember: 'Opposes the cause that produces it' — do not say 'opposes current'. If N-pole approaches, front face becomes North (counter-clockwise current)."
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
    modelAnswer: {
      statement: "Principle: A transformer works on the principle of Mutual Induction — when an alternating current flows through the primary coil, a changing magnetic flux is linked with the secondary coil, inducing an alternating emf across it.",
      derivations: [
        {
          name: "Mathematical Derivation of Transformation Ratio",
          steps: [
            "Let primary have N_p turns and secondary have N_s turns wound on a high-permeability laminated soft-iron core.",
            "Assuming no flux leakage, the same magnetic flux Φ links each turn of both primary and secondary coils at any instant.",
            "Induced EMF in primary coil: ε_p = -N_p (dΦ/dt).",
            "Induced EMF in secondary coil: ε_s = -N_s (dΦ/dt).",
            "Dividing secondary by primary: ε_s / ε_p = N_s / N_p.",
            "For an ideal transformer with zero winding resistance, terminal voltages equal induced emfs: V_s / V_p = N_s / N_p = k (transformation ratio).",
            "Step-Up Transformer: N_s > N_p ⟹ V_s > V_p and k > 1.",
            "Step-Down Transformer: N_s < N_p ⟹ V_s < V_p and k < 1.",
            "For an ideal transformer with 100% efficiency: Input Power = Output Power ⟹ V_p I_p = V_s I_s.",
            "Therefore: I_p / I_s = V_s / V_p = N_s / N_p.",
            "Hence, in a step-up transformer, voltage increases but current decreases in the exact same proportion!"
          ],
          formula: "V_s / V_p = I_p / I_s = N_s / N_p = k"
        }
      ],
      diagramNotes: "Rectangular laminated soft-iron core with Primary winding (N_p, V_p, I_p) on left limb and Secondary winding (N_s, V_s, I_s) on right limb.",
      markingScheme: [
        "1 Mark: Principle (Mutual induction) and neat labelled diagram.",
        "2 Marks: Mathematical derivation of V_s/V_p = N_s/N_p and I_p/I_s relation.",
        "2 Marks: 4 Energy losses and their remedies (0.5 mark each)."
      ],
      examinerTips: "The 4 Major Energy Losses to write:\n1. Copper Loss (Joule heating in windings) ⟶ Minimized by using thick copper wires.\n2. Iron/Eddy Current Loss (in core) ⟶ Minimized by using a laminated core of thin insulated sheets.\n3. Hysteresis Loss (continuous magnetisation reversal) ⟶ Minimized by using soft-iron core with narrow hysteresis loop.\n4. Flux Leakage Loss ⟶ Minimized by winding primary and secondary coils coaxially one over the other."
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
    modelAnswer: {
      statement: "Principle: A current-carrying coil placed in a uniform magnetic field experiences a deflecting torque which tends to rotate it. The deflection is directly proportional to the electric current passing through the coil.",
      derivations: [
        {
          name: "Deflecting & Restoring Torque Derivation",
          steps: [
            "Consider a rectangular coil of N turns, length l, breadth b (Area A = l·b) carrying current I in magnetic field B.",
            "Deflecting torque τ_def = N I A B sinθ, where θ is the angle between the magnetic field and the normal to the coil plane.",
            "In a radial magnetic field produced by concave poles and soft iron core, the plane of the coil is ALWAYS parallel to the field lines in all positions (θ = 90° at all times).",
            "Therefore, maximum constant deflecting torque: τ_def = N I A B.",
            "As the coil rotates through angle θ, the suspension phosphor-bronze strip is twisted and develops a restoring torque:",
            "τ_rest = C · θ  (where C is the restoring torque per unit twist / torsional constant).",
            "At equilibrium: τ_def = τ_rest ⟹ N I A B = C θ.",
            "Current I = (C / NAB) · θ ⟹ I = K · θ (where K = C/NAB is the galvanometer constant).",
            "Hence, deflection θ is strictly directly proportional to current I: θ ∝ I (linear scale!)."
          ],
          formula: "I = (C / NAB) θ ⟹ θ ∝ I ; Current Sensitivity S_i = θ/I = NAB/C ; Voltage Sensitivity S_v = θ/V = NAB/(CR)"
        }
      ],
      diagramNotes: "Concave cylindrical poles N and S, soft-iron core inside coil, phosphor-bronze strip, mirror, hairspring at bottom.",
      markingScheme: [
        "1 Mark: Principle and labelled diagram.",
        "2 Marks: Derivation of deflecting torque and equilibrium condition N I A B = C θ.",
        "1 Mark: Functions of concave poles & soft-iron core (to make the magnetic field radial and increase field strength).",
        "1 Mark: Sensitivity formulas and proof: doubling N doubles R as well, so S_v = S_i / R remains unchanged!"
      ],
      examinerTips: "Crucial Conceptual Trap: 'Why increasing current sensitivity may not increase voltage sensitivity?' Answer: S_v = S_i / R. Increasing N increases S_i proportionally, but also increases wire resistance R proportionally. Thus S_v = (NAB)/(CR) remains constant!"
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
    modelAnswer: {
      statement: "• Electric Flux (Φ_E): The total number of electric field lines passing normally through a given surface area. Mathematically: Φ_E = ∫ E⃗ · dA⃗ = E A cosθ. SI Unit: N·m²/C or V·m. It is a SCALAR quantity.\n• Electric Dipole: A system of two equal and opposite point charges (+q and -q) separated by a small finite distance 2a.\n• Electric Dipole Moment (p⃗): A vector quantity defined as the product of the magnitude of either charge q and the dipole separation vector 2a⃗: p⃗ = q(2a⃗). Direction is from NEGATIVE charge (-q) to POSITIVE charge (+q). SI Unit: Coulomb-metre (C·m).",
      derivations: [
        {
          name: "Torque on Dipole in Uniform Electric Field",
          steps: [
            "Consider an electric dipole of dipole moment p = q(2a) inclined at angle θ to a uniform electric field E⃗.",
            "Force on +q: F₁ = +qE⃗ along the field.",
            "Force on -q: F₂ = -qE⃗ opposite to the field.",
            "Net force on dipole: F_net = qE - qE = 0 (No translational motion).",
            "Since the two forces are equal, opposite, and act along different lines of action, they form a couple.",
            "Torque magnitude τ = Force × Perpendicular distance between lines of action = (qE) × (2a sinθ) = (q · 2a) E sinθ = p E sinθ.",
            "Vector form: τ⃗ = p⃗ × E⃗.",
            "Stable equilibrium: θ = 0° (p⃗ parallel to E⃗, τ = 0, U = -pE minimum).",
            "Unstable equilibrium: θ = 180° (p⃗ antiparallel to E⃗, τ = 0, U = +pE maximum)."
          ],
          formula: "τ⃗ = p⃗ × E⃗ ⟹ τ = p E sinθ ; Potential Energy U = -p⃗ · E⃗ = -p E cosθ"
        }
      ],
      diagramNotes: "Dipole with -q and +q separated by 2a in field E at angle θ, showing opposite forces creating torque couple.",
      markingScheme: [
        "1 Mark: Electric flux definition, formula Φ = E·A, and unit N·m²/C (or V·m).",
        "1 Mark: Dipole moment definition p = q(2a), unit C·m, and direction (-q to +q).",
        "1 Mark: Torque derivation showing τ = p E sinθ and vector form τ⃗ = p⃗ × E⃗."
      ],
      examinerTips: "Never write dipole moment direction from positive to negative! In physics, dipole moment p⃗ is strictly directed from -q to +q (chemistry convention is opposite)."
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
    modelAnswer: {
      statement: "An Equipotential Surface is any surface over which the electrostatic potential is the same at every point (V = constant).",
      derivations: [
        {
          name: "4 Essential Properties with Justifications",
          steps: [
            "1. No work is done in moving a test charge over an equipotential surface:",
            "   Reason: W_AB = q₀ (V_B - V_A). Since V_A = V_B, W_AB = q₀(0) = 0.",
            "2. Electric field lines are always PERPENDICULAR (normal) to the equipotential surface:",
            "   Reason: dW = E⃗ · dr⃗ = E dr cosθ = 0. Since E ≠ 0 and dr ≠ 0, cosθ = 0 ⟹ θ = 90°.",
            "3. Two equipotential surfaces NEVER intersect each other:",
            "   Reason: If they intersected, there would be two different values of potential at the point of intersection, which is physically impossible.",
            "4. Equipotential surfaces are closer together in regions of strong electric field and farther apart in weak field:",
            "   Reason: From E = -dV/dr ⟹ dr = -dV/E. For a constant potential difference dV, dr ∝ 1/E. Hence, where E is strong, distance dr is small (surfaces are crowded)."
          ],
          formula: "W = q(V_B - V_A) = 0 ; E⃗ ⊥ Surface ; dr = |dV| / E ⟹ Crowded where E is strong"
        }
      ],
      diagramNotes: "Isolated point charge: concentric spheres with spacing increasing outward. Uniform field along z: equidistant parallel planes perpendicular to z-axis (in xy planes).",
      markingScheme: [
        "1 Mark: Precise definition and W = 0 justification.",
        "1 Mark: 2 properties with reasons (E perpendicular to surface, never intersect).",
        "1 Mark: Correct sketches for point charge (concentric spheres) and uniform field (parallel planes)."
      ],
      examinerTips: "When drawing equipotential surfaces for a point charge, the concentric circles must get progressively farther apart as distance increases because dr ∝ 1/E!"
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
    modelAnswer: {
      statement: "Electric field intensity at any point is defined as the electrostatic force experienced per unit positive test charge placed at that point without disturbing the source charge configuration:\nE⃗ = lim(q₀ → 0) F⃗ / q₀",
      derivations: [
        {
          name: "Derivation from Coulomb's Law",
          steps: [
            "Place a source point charge +q at the origin O.",
            "To calculate electric field at a point P at distance r from O, place an infinitesimal positive test charge q₀ at P.",
            "By Coulomb's Law, the electrostatic force on q₀ is: F⃗ = (1 / 4πε₀) · (q q₀ / r²) r̂, where r̂ is unit vector along OP.",
            "By definition of electric field intensity: E⃗ = F⃗ / q₀.",
            "Substituting F⃗: E⃗ = (1 / 4πε₀) · (q / r²) r̂.",
            "Magnitude: E = (1 / 4πε₀) · (q / r²).",
            "Direction: Radially outward if q > 0; radially inward if q < 0."
          ],
          formula: "E = (1 / 4πε₀) · (q / r²)  [E ∝ 1/r²]"
        }
      ],
      diagramNotes: "Source charge +q at origin, test charge q₀ at distance r along r̂, graph showing inverse-square decay curve E vs r.",
      markingScheme: [
        "0.5 Mark: Definition of electric field intensity with limit q₀ ⟶ 0.",
        "1 Mark: Step-by-step derivation using Coulomb's law.",
        "0.5 Mark: Correct graph of E versus r (hyperbolic inverse square decay)."
      ],
      examinerTips: "State why test charge q₀ must be vanishingly small: so that its own electric field does not shift or alter the distribution of the source charge."
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
    modelAnswer: {
      statement: "An electric field line is an imaginary smooth curve drawn in an electric field such that the tangent to it at any point gives the direction of the electric field intensity at that point.",
      derivations: [
        {
          name: "Essential Properties & Reasoning",
          steps: [
            "1. Origin and Termination: Field lines start from positive charges and end on negative charges. If there is a single charge, they extend to/from infinity.",
            "2. Tangent indicates Direction: The tangent to a field line at any point gives the direction of electric field E⃗ at that point.",
            "3. Why two lines NEVER intersect: If two lines intersected at point P, two tangents could be drawn at that single point, which would mean two different directions of electric field at the same point. This is physically impossible!",
            "4. Why they do NOT form closed loops: Electrostatic fields are conservative in nature (∮ E⃗ · dr⃗ = 0). Since lines start at +q and end at -q, they do not circulate back, unlike magnetic field lines.",
            "5. Normal to conductor surface: Field lines are always perpendicular to the surface of a charged conductor (otherwise, surface tangential component would cause continuous surface currents).",
            "6. Density reflects Strength: The relative crowding of field lines indicates the strength of the electric field (closer lines = stronger field)."
          ],
          formula: "Tangent = E⃗ direction ; ∮ E⃗ · dr⃗ = 0 (Conservative ⟹ No closed loops)"
        }
      ],
      diagramNotes: "Two intersecting lines at P with two distinct tangents T₁ and T₂ labeled 'Impossible!'.",
      markingScheme: [
        "1 Mark: Statement of 2 key properties.",
        "0.5 Mark: Precise reasoning why lines never intersect (two tangents = two directions = impossible).",
        "0.5 Mark: Precise reasoning why lines do not form closed loops (electrostatic field is conservative)."
      ],
      examinerTips: "Comparison question with magnetic lines: Magnetic field lines DO form continuous closed loops because magnetic monopoles do not exist. Electric field lines DO NOT form closed loops."
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
    modelAnswer: {
      statement: "Capacitors are combined to increase or decrease the effective capacitance in a circuit.\n• In series: Charge Q remains the SAME on every capacitor; total potential divides.\n• In parallel: Potential difference V remains the SAME across every capacitor; total charge divides.",
      derivations: [
        {
          name: "Derivation for Series Combination",
          steps: [
            "Connect three capacitors C₁, C₂, C₃ in series across potential difference V.",
            "Same charge Q appears on each capacitor.",
            "Total potential difference V is the sum of potentials across individual capacitors: V = V₁ + V₂ + V₃.",
            "Since V = Q / C: V₁ = Q/C₁, V₂ = Q/C₂, V₃ = Q/C₃.",
            "Substituting: V = Q/C₁ + Q/C₂ + Q/C₃ = Q (1/C₁ + 1/C₂ + 1/C₃).",
            "If C_s is equivalent series capacitance: V = Q / C_s.",
            "Therefore: Q / C_s = Q (1/C₁ + 1/C₂ + 1/C₃) ⟹ 1/C_s = 1/C₁ + 1/C₂ + 1/C₃.",
            "Conclusion: Equivalent capacitance in series is LESS than the smallest individual capacitance."
          ],
          formula: "1/C_s = 1/C₁ + 1/C₂ + 1/C₃  [Minimizes capacitance]"
        },
        {
          name: "Derivation for Parallel Combination",
          steps: [
            "Connect three capacitors C₁, C₂, C₃ in parallel across potential difference V.",
            "Potential difference V across each capacitor is identical.",
            "Total charge supplied by battery divides: Q = Q₁ + Q₂ + Q₃.",
            "Since Q = C V: Q₁ = C₁V, Q₂ = C₂V, Q₃ = C₃V.",
            "Substituting: Q = C₁V + C₂V + C₃V = (C₁ + C₂ + C₃) V.",
            "If C_p is equivalent parallel capacitance: Q = C_p V.",
            "Therefore: C_p V = (C₁ + C₂ + C₃) V ⟹ C_p = C₁ + C₂ + C₃.",
            "Conclusion: Equivalent capacitance in parallel is GREATER than the largest individual capacitance."
          ],
          formula: "C_p = C₁ + C₂ + C₃  [Maximizes capacitance]"
        }
      ],
      diagramNotes: "Series circuit showing Q same and V = V₁+V₂+V₃; Parallel circuit showing V same and Q = Q₁+Q₂+Q₃.",
      markingScheme: [
        "1.5 Marks: Series derivation: stating same Q, V = V₁+V₂+V₃, and final formula 1/C_s = Σ(1/C_i).",
        "1.5 Marks: Parallel derivation: stating same V, Q = Q₁+Q₂+Q₃, and final formula C_p = ΣC_i."
      ],
      examinerTips: "Don't confuse with resistors! Resistors add in series (R_s = R₁+R₂), but capacitors add in parallel (C_p = C₁+C₂)."
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
    modelAnswer: {
      statement: "• EMF (ε): The maximum potential difference between the electrodes of a cell in an OPEN circuit (when no current is drawn from the cell).\n• Terminal Potential Difference (V): The potential difference between the terminals of a cell in a CLOSED circuit (when current I flows through it). Always V < ε during discharging due to internal voltage drop Ir.",
      derivations: [
        {
          name: "Derivation of Relation V = ε - Ir and r = [(ε-V)/V]R",
          steps: [
            "Consider a cell of EMF ε and internal resistance r connected to an external resistor R.",
            "Total resistance of the circuit = R + r.",
            "Current drawn from the cell: I = ε / (R + r) ⟹ ε = I(R + r) = IR + Ir.",
            "Since terminal voltage V = IR across external resistance:",
            "V = ε - Ir  (Discharging formula).",
            "Internal resistance expression: Ir = ε - V ⟹ r = (ε - V) / I.",
            "Since I = V / R: r = [(ε - V) / V] · R = (ε/V - 1) · R.",
            "Special Case (Charging): When the cell is being charged by an external source, current enters the positive terminal: V = ε + Ir (Terminal voltage EXCEEDS EMF!).",
            "Maximum Power Transfer: Power P = I²R = [ε / (R + r)]² R. To maximize P, dP/dR = 0 ⟹ R = r. Maximum power P_max = ε² / (4r)."
          ],
          formula: "V = ε - Ir ; r = [(ε - V) / V] R ; Charging: V = ε + Ir ; P_max = ε² / (4r) when R = r"
        }
      ],
      diagramNotes: "Cell circuit with internal r inside dashed box, external load R, voltmeter across terminals.",
      markingScheme: [
        "1 Mark: Distinction between EMF and Terminal Potential Difference.",
        "1 Mark: Derivation of V = ε - Ir and r = [(ε-V)/V]R.",
        "0.5 Mark: Condition when V > ε (during charging of cell).",
        "0.5 Mark: Maximum power condition R = r and formula P_max = ε²/(4r)."
      ],
      examinerTips: "Remember: In open circuit (I = 0), V = ε. In short circuit (R = 0), I_max = ε/r and V = 0. During charging, V = ε + Ir."
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
    modelAnswer: {
      statement: "Electromagnetic waves are coupled, time-varying electric and magnetic fields propagating through space at the speed of light, oscillating mutually perpendicular to each other and to the direction of wave propagation.",
      derivations: [
        {
          name: "4 Fundamental Properties of EM Waves",
          steps: [
            "1. Transverse Nature: The electric field vector E⃗ and magnetic field vector B⃗ oscillate perpendicular to each other and to the direction of propagation k̂: c⃗ = E⃗ × B⃗.",
            "2. Speed in Vacuum: Travel in vacuum with universal speed c = 1 / √(μ₀ε₀) ≈ 3 × 10⁸ m/s, independent of frequency and source motion.",
            "3. Ratio of Amplitudes: The ratio of peak electric field to peak magnetic field equals the speed of light: E₀ / B₀ = c.",
            "4. Energy and Momentum: Carry energy and linear momentum. Energy is divided equally between electric and magnetic fields: u_total = (1/2)ε₀E² + (1/2μ₀)B² = ε₀E_rms². Momentum p = U / c; exert radiation pressure P = I / c.",
            "5. Neutrality: Being neutral photons without charge, they are not deflected by external electric or magnetic fields."
          ],
          formula: "c = 1 / √(μ₀ε₀) ; E₀ / B₀ = c ; c⃗ = E⃗ × B⃗ ; Momentum p = U / c"
        }
      ],
      diagramNotes: "3D sinusoidal wave: E-field along y-axis, B-field along z-axis, wave propagation along x-axis with c = E₀/B₀.",
      markingScheme: [
        "1 Mark: Statement of 3 fundamental properties.",
        "0.5 Mark: Formula relations c = 1/√(μ₀ε₀) and E₀/B₀ = c.",
        "1.5 Marks: Correct identification of spectrum applications (0.3 mark each)."
      ],
      examinerTips: "Must-Know EM Spectrum Applications Table:\n• Radar & Satellite communication ⟶ Microwaves (short wavelength)\n• Water purification & LASIK eye surgery ⟶ Ultraviolet (UV) rays (germicidal)\n• Muscular strain therapy & Greenhouse heaters ⟶ Infrared (IR) rays (heat waves)\n• Cancer radiotherapy & Sterilising surgical tools ⟶ Gamma (γ) rays (high energy)\n• TV Remote controls ⟶ Infrared (IR) LEDs\n• Detecting fractures & baggage scanning ⟶ X-rays"
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
    modelAnswer: {
      statement: "The RMS (Root Mean Square) or effective/virtual value of an alternating current is defined as that steady direct current (DC) which, when flowing through a given resistor for a given time, produces the same amount of heat as is produced by the alternating current flowing through the same resistor for the same time.",
      derivations: [
        {
          name: "Derivation of I_rms = I₀ / √2",
          steps: [
            "Let alternating current be represented by I = I₀ sin(ωt).",
            "Small amount of heat produced in resistor R in time dt is: dH = I² R dt = (I₀ sin ωt)² R dt = I₀² R sin²(ωt) dt.",
            "Total heat produced over one complete cycle (time T = 2π/ω):",
            "H = ∫₀ᵀ I₀² R sin²(ωt) dt = I₀² R ∫₀ᵀ [(1 - cos 2ωt) / 2] dt.",
            "H = (I₀² R / 2) [ ∫₀ᵀ dt - ∫₀ᵀ cos(2ωt) dt ].",
            "Since the integral of cos(2ωt) over a full period T is ZERO: ∫₀ᵀ cos(2ωt) dt = 0.",
            "Therefore: H = (I₀² R / 2) · T.",
            "If I_rms is the effective DC current producing the same heat H in time T: H = I_rms² R T.",
            "Equating the two expressions: I_rms² R T = (I₀² R T) / 2.",
            "Taking square root: I_rms = I₀ / √2 ≈ 0.707 I₀.",
            "Similarly for AC Voltage: E_rms = V_rms = E₀ / √2 ≈ 0.707 E₀."
          ],
          formula: "I_rms = I₀ / √2 ≈ 0.707 I₀ ; E_rms = E₀ / √2 ≈ 0.707 E₀"
        }
      ],
      diagramNotes: "Sinusoidal AC wave showing peak I₀, RMS level at 0.707 I₀, and average level over half cycle at 0.637 I₀.",
      markingScheme: [
        "1 Mark: Precise definition based on Joule heating equivalence.",
        "1.5 Marks: Step-by-step mathematical integration using sin²ωt = (1 - cos 2ωt)/2 to get I_rms = I₀/√2.",
        "0.5 Mark: Explanation why 220V AC is more dangerous (peak is 220√2 = 311 V!)."
      ],
      examinerTips: "Key Exam Trap: 'Why is 220 V AC more dangerous than 220 V DC?' ⟶ An AC supply marked 220 V is the RMS value. Its peak value is V₀ = V_rms · √2 = 220 × 1.414 = 311 V! A 220 V DC remains at 220 V constantly, but AC fluctuates between +311 V and -311 V."
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
    modelAnswer: {
      statement: "Displacement current is that current which comes into existence in a region where the electric field (and hence electric flux) is changing with time, even in the complete absence of physical motion of electric charges.",
      derivations: [
        {
          name: "Mathematical Derivation: I_d = ε₀ (dΦ_E / dt)",
          steps: [
            "Consider a parallel plate capacitor with plate area A and instantaneous charge Q during charging.",
            "Electric field between the plates at that instant: E = σ / ε₀ = Q / (A ε₀).",
            "Electric flux through the region between plates: Φ_E = E · A = [Q / (A ε₀)] · A = Q / ε₀.",
            "Rearranging: Q = ε₀ Φ_E.",
            "Differentiating both sides with respect to time t: dQ / dt = ε₀ (dΦ_E / dt).",
            "Since dQ/dt is the rate of flow of charge in the connecting wires (conduction current I_c):",
            "I_c = ε₀ (dΦ_E / dt).",
            "Maxwell defined the displacement current as: I_d = ε₀ (dΦ_E / dt).",
            "Therefore: I_d = I_c.",
            "This proves that current is continuous: in the wires it is conduction current (I_c), and in the gap between the plates it is displacement current (I_d).",
            "Generalized Ampère-Maxwell Law: ∮ B⃗ · dl⃗ = μ₀ (I_c + I_d) = μ₀ [I_c + ε₀ (dΦ_E / dt)]."
          ],
          formula: "I_d = ε₀ (dΦ_E / dt) ⟹ I_c = I_d ; ∮ B⃗ · dl⃗ = μ₀(I_c + ε₀ dΦ_E/dt)"
        }
      ],
      diagramNotes: "Capacitor circuit with surface S₁ bounded by loop around wire (carrying I_c) and pot-shaped surface S₂ passing between plates (carrying I_d).",
      markingScheme: [
        "1 Mark: Explaining Ampère's circuital law inconsistency using two different surfaces bounded by the same loop.",
        "1.5 Marks: Step-by-step derivative Φ_E = Q/ε₀ ⟹ I_d = ε₀(dΦ_E/dt) = dQ/dt = I_c.",
        "0.5 Mark: Statement of Ampère-Maxwell Law equation."
      ],
      examinerTips: "Remember: Inside the wires, I_c ≠ 0 and I_d = 0. Between the capacitor plates, I_c = 0 and I_d ≠ 0. The total current I = I_c + I_d is constant across any cross-section!"
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
    modelAnswer: {
      statement: "A Wheatstone bridge is an electrical circuit consisting of four resistances P, Q, R, and S arranged in a closed diamond network, used to measure an unknown resistance with high precision by null deflection.",
      derivations: [
        {
          name: "Derivation of P/Q = R/S Using Kirchhoff's Voltage Law (KVL)",
          steps: [
            "Let four resistors P, Q, R, S form loop ABCD. Galvanometer G is connected between B and D; battery of EMF ε is connected across A and C.",
            "Total current I enters junction A and divides into I₁ through P and I₂ through R (I = I₁ + I₂).",
            "Current through galvanometer branch BD is I_g.",
            "Apply KVL to closed loop ABDA:",
            "  -I₁ P - I_g G + I₂ R = 0  ⟶ (Equation 1)",
            "Apply KVL to closed loop BCDB:",
            "  -(I₁ - I_g) Q + (I₂ + I_g) S + I_g G = 0  ⟶ (Equation 2)",
            "Balanced Condition: The bridge is balanced when potentials at B and D are equal (V_B = V_D), so galvanometer current I_g = 0 (null deflection).",
            "Substitute I_g = 0 into Equation 1: -I₁ P + I₂ R = 0 ⟹ I₁ P = I₂ R  ⟶ (Equation 3)",
            "Substitute I_g = 0 into Equation 2: -I₁ Q + I₂ S = 0 ⟹ I₁ Q = I₂ S  ⟶ (Equation 4)",
            "Dividing Equation 3 by Equation 4: (I₁ P) / (I₁ Q) = (I₂ R) / (I₂ S).",
            "Canceling currents: P / Q = R / S.",
            "This is the condition for a balanced Wheatstone bridge."
          ],
          formula: "P / Q = R / S  [Balanced when I_g = 0]"
        }
      ],
      diagramNotes: "Diamond bridge ABCD with P between AB, Q between BC, R between AD, S between DC, galvanometer between BD.",
      markingScheme: [
        "0.5 Mark: Principle and balanced bridge definition (I_g = 0).",
        "2 Marks: Circuit diagram and correct application of Kirchhoff's rules to both loops to arrive at P/Q = R/S.",
        "0.5 Mark: Maximum sensitivity condition (when all 4 resistances are of nearly equal magnitude: P ≈ Q ≈ R ≈ S)."
      ],
      examinerTips: "Remember: If battery and galvanometer are interchanged in a balanced bridge, the balance condition remains unchanged! The bridge is most sensitive when all four arms have comparable resistances."
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
    modelAnswer: {
      statement: "Materials are classified into diamagnetic, paramagnetic, and ferromagnetic based on the response of their atomic magnetic dipoles to an external magnetic field.",
      derivations: [
        {
          name: "6-Point CBSE Board Comparison Matrix",
          steps: [
            "1. Atomic Dipole Origin:",
            "   • Diamagnetic: Paired electrons; no permanent atomic dipole moment.",
            "   • Paramagnetic: Unpaired electrons; each atom has a permanent dipole moment, but randomly oriented by thermal agitation.",
            "   • Ferromagnetic: Spontaneous domain alignment of atomic dipoles due to strong exchange coupling.",
            "2. Magnetic Susceptibility (χ_m):",
            "   • Dia: Small and NEGATIVE (-1 ≤ χ < 0), independent of temperature.",
            "   • Para: Small and POSITIVE (0 < χ < ε), inversely proportional to T.",
            "   • Ferro: Very LARGE and POSITIVE (χ ≫ 1000), decreases with temperature.",
            "3. Relative Permeability (μ_r = 1 + χ):",
            "   • Dia: Slightly LESS than 1 (0 ≤ μ_r < 1).",
            "   • Para: Slightly GREATER than 1 (μ_r > 1).",
            "   • Ferro: Much GREATER than 1 (μ_r ≫ 1000).",
            "4. Motion in Non-Uniform Magnetic Field:",
            "   • Dia: Feebly repelled; moves from stronger to weaker field.",
            "   • Para: Feebly attracted; moves from weaker to stronger field.",
            "   • Ferro: Strongly attracted; rushes rapidly into regions of strongest field.",
            "5. Temperature Dependence:",
            "   • Dia: INDEPENDENT of temperature.",
            "   • Para: Obeys Curie's Law: χ ∝ 1/T (χ = C/T).",
            "   • Ferro: Obeys Curie-Weiss Law above Curie temperature T_c: χ = C/(T - T_c). Above T_c, ferromagnetic becomes paramagnetic!",
            "6. Examples:",
            "   • Dia: Bismuth (Bi), Copper (Cu), Water (H₂O), Lead (Pb), Nitrogen at STP.",
            "   • Para: Aluminium (Al), Sodium (Na), Platinum (Pt), Liquid Oxygen (O₂).",
            "   • Ferro: Iron (Fe), Cobalt (Co), Nickel (Ni), Gadolinium (Gd), Alnico."
          ],
          formula: "Dia: -1 ≤ χ < 0, μ_r < 1 | Para: χ ∝ 1/T, μ_r > 1 | Ferro: χ ≫ 10³, μ_r ≫ 10³"
        }
      ],
      diagramNotes: "Magnetic field lines expelled by diamagnetic rod (B_in < B_out), concentrated slightly by paramagnetic, heavily concentrated by ferromagnetic.",
      markingScheme: [
        "1 Mark: Correct susceptibility and permeability values with signs for all 3 classes.",
        "1 Mark: Behavior in non-uniform field and field line expulsion/concentration.",
        "1 Mark: Temperature dependence (Curie law, Curie temperature) and authentic examples."
      ],
      examinerTips: "Superconductors exhibit perfect diamagnetism (χ = -1, μ_r = 0), completely expelling all magnetic field lines — this is known as the Meissner Effect!"
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
    modelAnswer: {
      statement: "In an AC circuit, components oppose current through resistance (R) or reactances (X_L, X_C), causing a phase shift between alternating voltage and current.",
      derivations: [
        {
          name: "Pure Inductor: Current Lags by π/2",
          steps: [
            "Connect inductor L across V = V₀ sin(ωt).",
            "Back EMF induced: ε = -L (dI/dt). Applying Kirchhoff's loop rule: V - L(dI/dt) = 0 ⟹ dI = (V₀/L) sin(ωt) dt.",
            "Integrate: I = -(V₀ / ωL) cos(ωt) = (V₀ / ωL) sin(ωt - π/2).",
            "Inductive Reactance: X_L = ωL = 2πfL (increases linearly with frequency).",
            "Peak current: I₀ = V₀ / X_L.",
            "Conclusion: Current LAGS voltage by 90° (π/2 radians)."
          ],
          formula: "I = I₀ sin(ωt - π/2) ; X_L = ωL = 2πfL"
        },
        {
          name: "Pure Capacitor: Current Leads by π/2",
          steps: [
            "Connect capacitor C across V = V₀ sin(ωt).",
            "Charge on capacitor at any instant: q = C V = C V₀ sin(ωt).",
            "Current I = dq/dt = C V₀ ω cos(ωt) = (V₀ / [1/ωC]) sin(ωt + π/2).",
            "Capacitive Reactance: X_C = 1 / (ωC) = 1 / (2πfC) (inversely proportional to frequency).",
            "Conclusion: Current LEADS voltage by 90° (π/2 radians)."
          ],
          formula: "I = I₀ sin(ωt + π/2) ; X_C = 1 / (ωC)"
        },
        {
          name: "Series LCR Circuit & Resonance Derivation",
          steps: [
            "Connect R, L, C in series across V = V₀ sin(ωt). Let current be I = I₀ sin(ωt - φ).",
            "Phasor amplitudes: V_R = I₀ R (in phase with I); V_L = I₀ X_L (leads I by 90°); V_C = I₀ X_C (lags I by 90°).",
            "Net reactive voltage = V_L - V_C perpendicular to V_R.",
            "By Pythagorean theorem on phasor diagram: V₀² = V_R² + (V_L - V_C)² = (I₀R)² + [I₀(X_L - X_C)]².",
            "V₀ = I₀ √[R² + (X_L - X_C)²] ⟹ Impedance Z = √[R² + (X_L - X_C)²].",
            "Phase angle: tanφ = (X_L - X_C) / R.",
            "RESONANCE CONDITION: Resonance occurs when X_L = X_C ⟹ ω₀ L = 1 / (ω₀ C).",
            "Resonant Angular Frequency: ω₀ = 1 / √(LC) ⟹ Resonant Frequency f₀ = 1 / (2π√(LC)).",
            "At Resonance:",
            "  1. Impedance is MINIMUM: Z_min = R (purely resistive).",
            "  2. Current amplitude is MAXIMUM: I₀_max = V₀ / R.",
            "  3. Phase angle φ = 0 (voltage and current in phase, power factor cosφ = 1).",
            "  4. Quality factor Q = (ω₀L) / R = (1 / R) √(L / C)."
          ],
          formula: "Z = √[R² + (X_L - X_C)²] ; ω₀ = 1 / √(LC) ; Z_res = R ; I_max = V₀/R"
        }
      ],
      diagramNotes: "Phasor diagram with V_R along x-axis, (V_L - V_C) along y-axis, resultant V₀ at angle φ. Resonance curve of I vs ω showing peak at ω₀.",
      markingScheme: [
        "1 Mark: Inductor derivation showing current lags by π/2.",
        "1 Mark: Capacitor derivation showing current leads by π/2.",
        "2 Marks: Phasor diagram and derivation of impedance Z = √[R² + (X_L - X_C)²].",
        "1 Mark: Resonance frequency ω₀ = 1/√(LC) and resonance characteristics."
      ],
      examinerTips: "For DC (f = 0): Inductor offers zero resistance (X_L = 0, acts as short circuit); Capacitor offers infinite resistance (X_C = ∞, blocks DC completely)!"
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
    modelAnswer: {
      statement: "An electric dipole consists of charges -q and +q separated by distance 2a. Its dipole moment is p⃗ = q(2a⃗) directed from -q to +q.",
      derivations: [
        {
          name: "Derivation 1: Axial Line (End-On Position)",
          steps: [
            "Consider point P on the dipole axis at distance r from dipole center O.",
            "Distance of P from +q is (r - a); distance of P from -q is (r + a).",
            "Electric field due to +q: E₊ = [1 / (4πε₀)] · [q / (r - a)²] (directed away from +q, along p⃗).",
            "Electric field due to -q: E₋ = [1 / (4πε₀)] · [q / (r + a)²] (directed toward -q, opposite to p⃗).",
            "Net field E_axial = E₊ - E₋ = [q / (4πε₀)] · [1 / (r - a)² - 1 / (r + a)²].",
            "Taking common denominator: E_axial = [q / (4πε₀)] · [(r + a)² - (r - a)²] / (r² - a²)².",
            "Numerator simplifies to 4ar = 2 · (2a) · r.",
            "E_axial = [1 / (4πε₀)] · [2(q · 2a)r] / (r² - a²)² = [1 / (4πε₀)] · [2pr] / (r² - a²)².",
            "For a short dipole (r ≫ a): a² can be neglected compared to r²:",
            "E_axial = [1 / (4πε₀)] · (2p / r³), directed PARALLEL to p⃗."
          ],
          formula: "E_axial = [1 / (4πε₀)] · (2p / r³)  [Along p⃗]"
        },
        {
          name: "Derivation 2: Equatorial Line (Broadside-On Position)",
          steps: [
            "Consider point P on the perpendicular bisector of the dipole at distance r from center O.",
            "Distance of P from each charge is √(r² + a²).",
            "Magnitudes: E₊ = E₋ = [1 / (4πε₀)] · [q / (r² + a²)].",
            "Resolve E₊ and E₋ into components:",
            "  Vertical components: E₊ sinθ and E₋ sinθ are equal and opposite, so they cancel out completely.",
            "  Horizontal components: E₊ cosθ and E₋ cosθ are in the SAME direction (opposite to p⃗) and add up.",
            "Net field E_eq = 2 E₊ cosθ = 2 · [1 / (4πε₀)] · [q / (r² + a²)] · cosθ.",
            "From geometry, cosθ = a / √(r² + a²).",
            "Substituting: E_eq = [1 / (4πε₀)] · [2qa] / (r² + a²)^(3/2) = [1 / (4πε₀)] · p / (r² + a²)^(3/2).",
            "For a short dipole (r ≫ a): E_eq = [1 / (4πε₀)] · (p / r³), directed OPPOSITE to p⃗."
          ],
          formula: "E_eq = [1 / (4πε₀)] · (p / r³)  [Opposite to p⃗]"
        }
      ],
      diagramNotes: "Axial diagram showing collinear charges and field vectors; Equatorial diagram showing isosceles triangle with canceling sinθ and adding cosθ components.",
      markingScheme: [
        "2 Marks: Complete axial derivation with clear steps and final formula E_axial = 2p/(4πε₀r³).",
        "2 Marks: Complete equatorial derivation showing component resolution and E_eq = p/(4πε₀r³).",
        "1 Mark: Comparison ratio: E_axial / E_eq = 2 for short dipole at same distance r."
      ],
      examinerTips: "Do not forget vector directions: E⃗_axial is in the SAME direction as p⃗, while E⃗_eq is in the OPPOSITE direction to p⃗. Hence: E⃗_axial = -2 E⃗_eq."
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
    modelAnswer: {
      statement: "Work must be done by a source against the opposing electric or magnetic field to store energy in capacitors and inductors.\n• In capacitor: Energy is stored in the ELECTRIC FIELD between plates as electrostatic potential energy.\n• In inductor: Energy is stored in the MAGNETIC FIELD within its core as magnetic potential energy.",
      derivations: [
        {
          name: "Derivation 1: Energy in Capacitor U_E = (1/2)CV²",
          steps: [
            "Suppose a capacitor of capacitance C is charged by transferring small charge dq from one plate to another.",
            "At any intermediate stage when charge on plates is q, potential difference is V' = q / C.",
            "Small work done in transferring additional charge dq: dW = V' dq = (q / C) dq.",
            "Total work done in charging the capacitor from 0 to final charge Q:",
            "W = ∫₀^Q (q / C) dq = (1 / C) [q² / 2]₀^Q = Q² / (2C).",
            "This work is stored as electrostatic potential energy U:",
            "Using Q = CV: U = Q² / (2C) = (1/2) C V² = (1/2) Q V.",
            "Energy Density: For parallel plate capacitor C = ε₀A/d and V = Ed:",
            "U = (1/2)(ε₀A/d)(Ed)² = (1/2) ε₀ E² (A d).",
            "Volume = A·d, so Energy Density u_E = U / Volume = (1/2) ε₀ E²."
          ],
          formula: "U = (1/2)CV² = Q²/(2C) = (1/2)QV ; u_E = (1/2) ε₀ E²"
        },
        {
          name: "Derivation 2: Energy in Inductor U_B = (1/2)LI₀²",
          steps: [
            "When current grows in an inductor, a back EMF is induced: |ε| = L (dI / dt).",
            "Work must be done by the source against this back EMF to maintain current growth.",
            "Rate of doing work (Power): P = dW/dt = |ε| · I = [L (dI/dt)] · I.",
            "Work done in small time dt: dW = P dt = L I dI.",
            "Total work done in establishing current from 0 to steady maximum value I₀:",
            "W = ∫₀^(I₀) L I dI = L [I² / 2]₀^(I₀) = (1/2) L I₀².",
            "This work is stored as magnetic potential energy U_B:",
            "U_B = (1/2) L I₀².",
            "Magnetic Energy Density: u_B = B² / (2μ₀)."
          ],
          formula: "U_B = (1/2) L I₀² ; u_B = B² / (2μ₀)"
        }
      ],
      diagramNotes: "Capacitor showing charging curve and electric field E between plates; Inductor coil with back EMF opposing current growth.",
      markingScheme: [
        "1.5 Marks: Capacitor energy derivation dW = (q/C)dq to U = (1/2)CV² and energy density formula.",
        "1.5 Marks: Inductor energy derivation dW = L I dI to U = (1/2)LI₀²."
      ],
      examinerTips: "Remember the beautiful symmetry between electricity and magnetism:\nCapacitor: U = (1/2) C V² ⟶ Energy density u_E = (1/2) ε₀ E².\nInductor: U = (1/2) L I² ⟶ Energy density u_B = (1/2μ₀) B²."
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
    modelAnswer: {
      statement: "Two parallel conductors carrying electric currents exert magnetic forces on each other because each conductor produces a magnetic field that exerts a Lorentz force on the other.",
      derivations: [
        {
          name: "Derivation of Force Per Unit Length: F/L = (μ₀ I₁ I₂) / (2π d)",
          steps: [
            "Consider two long, straight parallel conductors 1 and 2 separated by distance d, carrying currents I₁ and I₂.",
            "Current I₁ in conductor 1 produces a magnetic field B₁ at the position of conductor 2:",
            "By Biot-Savart / Ampère's Law: B₁ = (μ₀ I₁) / (2π d).",
            "By Right-Hand Thumb Rule, B₁ is directed perpendicular to the plane containing both wires into the page.",
            "Conductor 2 of length L carrying current I₂ in field B₁ experiences a magnetic force:",
            "F₂ = I₂ L B₁ sin(90°) = I₂ L [(μ₀ I₁) / (2π d)].",
            "Force magnitude on length L: F = (μ₀ I₁ I₂ L) / (2π d).",
            "Force per unit length (f = F / L):",
            "f = F / L = (μ₀ I₁ I₂) / (2π d).",
            "By Fleming's Left-Hand Rule:",
            "• If currents are in the SAME direction (parallel currents): Force is ATTRACTIVE.",
            "• If currents are in OPPOSITE directions (antiparallel currents): Force is REPULSIVE."
          ],
          formula: "F / L = (μ₀ I₁ I₂) / (2π d)  [Parallel attract ; Antiparallel repel]"
        },
        {
          name: "Standard SI Definition of One Ampere",
          steps: [
            "Set I₁ = I₂ = 1 A, d = 1 m, and μ₀ = 4π × 10⁻⁷ T·m/A in the formula:",
            "F / L = (4π × 10⁻⁷ × 1 × 1) / (2π × 1) = 2 × 10⁻⁷ N/m.",
            "Official SI Definition:",
            "'One Ampere is that steady current which, when maintained in each of two infinitely long straight parallel conductors of negligible circular cross-section, placed one metre apart in vacuum, produces between them a force equal to 2 × 10⁻⁷ newton per metre of length.'"
          ],
          formula: "1 Ampere ⟹ F/L = 2 × 10⁻⁷ N/m at separation d = 1 m in vacuum"
        }
      ],
      diagramNotes: "Two parallel wires with currents I₁ and I₂ at separation d, showing B₁ into page and attractive force arrows F₁₂ and F₂₁.",
      markingScheme: [
        "1.5 Marks: Derivation of field B₁ = μ₀I₁/(2πd) and force F/L = μ₀I₁I₂/(2πd).",
        "0.5 Mark: Identification of attractive force for like currents and repulsive for unlike currents.",
        "1 Mark: Exact standard definition of one ampere specifying: parallel conductors, 1 metre apart, in vacuum, force of 2 × 10⁻⁷ N/m."
      ],
      examinerTips: "Memorable rule for students: Unlike electric charges (where like charges repel), like currents ATTRACT each other! Antiparallel currents repel."
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
    modelAnswer: {
      statement: "Maxwell demonstrated that the laws of electricity and magnetism were asymmetric: while Faraday showed that a changing magnetic field produces an electric field, Ampère's law omitted the symmetric effect that a changing electric field produces a magnetic field. Adding displacement current I_d resolved this asymmetry.",
      derivations: [
        {
          name: "Maxwell's Four Fundamental Equations",
          steps: [
            "1. Gauss's Law for Electrostatics: ∮ E⃗ · dA⃗ = q_enclosed / ε₀",
            "   Significance: Electrostatic field is produced by electric charges. Isolated electric charges (monopoles) exist.",
            "2. Gauss's Law for Magnetism: ∮ B⃗ · dA⃗ = 0",
            "   Significance: Isolated magnetic poles (monopoles) DO NOT exist; magnetic field lines are continuous closed loops.",
            "3. Faraday's Law of Electromagnetic Induction: ∮ E⃗ · dl⃗ = -dΦ_B / dt",
            "   Significance: A time-varying magnetic field induces an electric field (induced non-electrostatic EMF).",
            "4. Ampère-Maxwell Law: ∮ B⃗ · dl⃗ = μ₀ (I_c + I_d) = μ₀ [I_c + ε₀ (dΦ_E / dt)]",
            "   Significance: Magnetic fields are produced both by conduction currents (moving charges) AND by time-varying electric fields (displacement currents)."
          ],
          formula: "∮ B⃗ · dl⃗ = μ₀ [I_c + ε₀ (dΦ_E / dt)] ; c = 1 / √(μ₀ε₀)"
        },
        {
          name: "Unification and Light as an EM Wave",
          steps: [
            "By combining Faraday's Law and the Ampère-Maxwell Law in free space (where charges I_c = 0 and q = 0):",
            "A time-varying electric field generates a magnetic field, which varies in time and generates an electric field, propagating self-sustained through empty space.",
            "Maxwell derived the wave equation for these coupled fields with wave velocity v = 1 / √(μ₀ε₀).",
            "Substituting known physical constants:",
            "  μ₀ = 4π × 10⁻⁷ N/A²  and  ε₀ = 8.854 × 10⁻¹² C²/(N·m²)",
            "  c = 1 / √[(4π × 10⁻⁷) × (8.854 × 10⁻¹²)] ≈ 2.998 × 10⁸ m/s.",
            "Since this precisely matched the experimentally measured speed of light, Maxwell concluded that light is an electromagnetic wave!"
          ],
          formula: "c = 1 / √(μ₀ε₀) = 3 × 10⁸ m/s  [Light is an EM wave]"
        }
      ],
      diagramNotes: "Self-propagating wave: changing E creates B, changing B creates E, propagating at speed c.",
      markingScheme: [
        "1.5 Marks: Writing all four Maxwell equations in correct integral mathematical notation.",
        "1 Mark: Physical law/significance corresponding to each of the four equations.",
        "0.5 Mark: Explanation of how wave speed c = 1/√(μ₀ε₀) unified optics with electromagnetism."
      ],
      examinerTips: "Remember: ∮ B⃗ · dA⃗ = 0 proves that magnetic monopoles do not exist. If magnetic monopoles are ever discovered, the right side would become μ₀ · q_m!"
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
    modelAnswer: {
      statement: "A moving coil galvanometer has coil resistance G and shows full-scale deflection for a very small current I_g (typically a few milliamperes). It cannot be used directly to measure large currents or voltages without modification.",
      derivations: [
        {
          name: "Conversion into Ammeter (Shunt in Parallel)",
          steps: [
            "To measure higher current I > I_g, a LOW resistance called a SHUNT (S) is connected in PARALLEL with the galvanometer coil.",
            "Most of the current (I - I_g) bypasses the sensitive galvanometer through the low-resistance shunt, while only safe current I_g passes through the coil.",
            "Since galvanometer and shunt are in parallel, the potential difference across both branches is equal:",
            "V_g = V_s ⟹ I_g · G = (I - I_g) · S.",
            "Shunt Resistance formula: S = (I_g · G) / (I - I_g).",
            "Total equivalent resistance of Ammeter (R_A):",
            "1/R_A = 1/G + 1/S ⟹ R_A = (G · S) / (G + S) ≈ S (very small).",
            "Ideal Ammeter Resistance = 0 (so that connecting it in series does not alter the circuit current)."
          ],
          formula: "S = (I_g · G) / (I - I_g) ; R_A = (G·S)/(G+S) ; Ideal R_A = 0"
        },
        {
          name: "Conversion into Voltmeter (High Resistance in Series)",
          steps: [
            "To measure potential difference up to V, a HIGH resistance R is connected in SERIES with the galvanometer coil.",
            "Total resistance of combination becomes (G + R).",
            "Applying Ohm's law for full-scale deflection: V = I_g · (G + R).",
            "Dividing by I_g: V / I_g = G + R.",
            "Series Resistance formula: R = (V / I_g) - G.",
            "Total equivalent resistance of Voltmeter (R_V):",
            "R_V = G + R (very large).",
            "Ideal Voltmeter Resistance = ∞ (infinity, so that connecting it in parallel draws negligible current from the main circuit)."
          ],
          formula: "R = (V / I_g) - G ; R_V = G + R ; Ideal R_V = ∞"
        }
      ],
      diagramNotes: "Ammeter circuit: Galvanometer G in parallel with small shunt S, input I dividing into I_g and (I-I_g); Voltmeter circuit: Galvanometer G in series with high resistor R, total voltage V.",
      markingScheme: [
        "1.5 Marks: Ammeter conversion: parallel shunt, formula S = I_g·G/(I - I_g), circuit diagram, ideal R_A = 0.",
        "1.5 Marks: Voltmeter conversion: series multiplier, formula R = V/I_g - G, circuit diagram, ideal R_V = ∞."
      ],
      examinerTips: "Quick mnemonic: 'Ammeters are Small (parallel Shunt); Voltmeters are Vast (series High resistance)'. In ammeter numericals, make sure to convert I_g from mA to A before calculating!"
    }
  }
];

// Quick index & helper
export const IMPORTANT_QUESTIONS_BY_ID = Object.fromEntries(
  IMPORTANT_PHYSICS_QUESTIONS.map(q => [q.id, q])
);
