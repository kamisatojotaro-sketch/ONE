# -*- coding: utf-8 -*-
"""
Structured notes data for Physics Chapters 1 & 2 (Electrostatics)
Strictly conforming to NCERT and NODIA Class 12 CBSE standards.
"""

ch1_ch2_data = {
    # 1.1 Coulomb's Law
    "phy-sub-1-1": {
        "definitions": [
            {
                "term": "Coulomb's Law",
                "definition": "The electrostatic force of attraction or repulsion between two stationary point charges is directly proportional to the product of their magnitudes and inversely proportional to the square of the distance between them, acting along the line joining their centers: $F = \\frac{1}{4\\pi\\varepsilon_0} \\frac{|q_1 q_2|}{r^2}$."
            },
            {
                "term": "Permittivity of Free Space (ε₀)",
                "definition": "A fundamental physical constant describing the ability of vacuum to permit electric field lines: $\\varepsilon_0 \\approx 8.854 \\times 10^{-12} \\text{ C}^2/(\\text{N}\\cdot\\text{m}^2)$. Electrostatic constant $k = \\frac{1}{4\\pi\\varepsilon_0} \\approx 8.988 \\times 10^9 \\text{ N}\\cdot\\text{m}^2/\\text{C}^2$."
            },
            {
                "term": "Relative Permittivity / Dielectric Constant (εᵣ or K)",
                "definition": "The ratio of permittivity of a medium to that of vacuum: $\\varepsilon_r = \\frac{\\varepsilon}{\\varepsilon_0} = \\frac{F_{\\text{vacuum}}}{F_{\\text{medium}}} \\ge 1$. For water, $K \\approx 80$; for metals, $K \\to \\infty$."
            }
        ],
        "keyPoints": [
            "• <strong>Vector Formulation:</strong> Force on charge 1 due to charge 2 is $\\vec{F}_{12} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q_1 q_2}{r^2} \\hat{r}_{21} = -\\vec{F}_{21}$, proving Coulomb's law strictly obeys Newton's Third Law of Motion.",
            "• <strong>Central Force Nature:</strong> The electrostatic force acts strictly along the line joining the centers of the two charges.",
            "• <strong>Medium Attenuation:</strong> In a dielectric medium of dielectric constant $K$, electrostatic force is reduced by factor $K$: $F_m = F_0 / K$.",
            "• <strong>Principle of Superposition:</strong> The total electrostatic force on any single charge due to a system of discrete charges is the vector sum of individual Coulomb forces: $\\vec{F}_{\\text{net}} = \\sum_{i=1}^n \\vec{F}_i$."
        ],
        "extraPoints": [
            "• <strong>Comparison with Gravitational Force:</strong> For two electrons, the ratio of electrostatic repulsion to gravitational attraction is immense: $F_e / F_g \\approx 10^{42}$, showing gravity is completely negligible at atomic scales.",
            "• <strong>Point Charge Limitation:</strong> Coulomb's law applies strictly to stationary point charges. For extended spherical charges, it holds only for distances greater than their radii."
        ],
        "reactions": [],
        "oswaalMnemonic": {
            "title": "Coulomb's Inverse Square Law",
            "phrase": "Charges Multiply Up Top, Distance Squared Drops the Force",
            "explanation": "Double the distance, force drops to one-fourth (1/4). Double both charges, force quadruples (4x)."
        },
        "commonlyMadeErrors": [
            {
                "error": "Forgetting to square the distance r in the denominator or omitting dielectric constant K for material media.",
                "tip": "Always check medium: if medium is not vacuum, write F = (1 / 4πε₀K) · (q₁q₂ / r²).",
                "penalty": "Loss of 1 mark in numerical problem."
            }
        ],
        "assertionReason": {
            "assertion": "The electrostatic force between two point charges placed in water is much smaller than that in air.",
            "reason": "Water has a very high dielectric constant (K ≈ 80), reducing the force by a factor of 80.",
            "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
            "explanation": "F_medium = F_vacuum / K. Since K_water ≈ 80, force reduces to 1/80th of its vacuum value."
        },
        "examTrend": {
            "pastYears": "CBSE 2024, 2023, 2022, 2020",
            "frequency": "High Frequency",
            "typicalMarks": "2 to 3 Marks",
            "questionTypes": "Vector Form Derivation, Medium Effect, Superposition Numericals",
            "hotTopic": "Force reduction in dielectric slab & neutral third charge equilibrium"
        }
    },

    # 1.2 & 1.3 Electric Field Intensity & Point Charge
    "phy-sub-1-2": {
        "definitions": [
            {
                "term": "Electric Field Intensity (E⃗)",
                "definition": "The electrostatic force experienced per unit positive test charge placed at a given point in space: $\\vec{E} = \\lim_{q_0 \\to 0} \\frac{\\vec{F}}{q_0}$. SI Unit: $\\text{N/C}$ or $\\text{V/m}$. Vector quantity."
            },
            {
                "term": "Vanishing Test Charge Condition (q₀ → 0)",
                "definition": "The test charge must be infinitesimally small so that its own electric field does not perturb the spatial distribution of the source charges producing the field."
            }
        ],
        "keyPoints": [
            "• <strong>Point Charge Formula:</strong> Field due to an isolated point charge $q$ at radial distance $r$ is $\\vec{E} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q}{r^2} \\hat{r}$.",
            "• <strong>Field Direction:</strong> Directed radially outward from positive charge ($+q$), and radially inward toward negative charge ($-q$).",
            "• <strong>Force on Charge in Field:</strong> A charge $q$ in field $\\vec{E}$ experiences force $\\vec{F} = q\\vec{E}$. Positive charges accelerate along $\\vec{E}$; negative charges accelerate opposite to $\\vec{E}$."
        ],
        "extraPoints": [
            "• <strong>Physical Reality of Field:</strong> Electric field exists at every point in space surrounding charges, independent of whether a test charge is present to detect it."
        ],
        "reactions": [],
        "oswaalMnemonic": {
            "title": "Positive Points Out, Negative Pulls In",
            "phrase": "Plus Pushes Outward | Minus pulls Inward",
            "explanation": "Field vectors diverge away from positive charge and converge toward negative charge."
        },
        "commonlyMadeErrors": [
            {
                "error": "Treating electric field as scalar and adding magnitudes algebraically instead of using vector components.",
                "tip": "Always resolve fields into orthogonal x and y components before finding the resultant.",
                "penalty": "Loss of 1.5 marks."
            }
        ],
        "assertionReason": {
            "assertion": "A test charge used to measure electric field must be infinitesimally small.",
            "reason": "A finite test charge would exert forces on the source charges and alter their spatial distribution.",
            "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
            "explanation": "If q₀ is not negligible, its reaction force perturbs the source charge configuration."
        },
        "examTrend": {
            "pastYears": "CBSE 2024 SQP, 2023, 2021",
            "frequency": "Core Concept",
            "typicalMarks": "2 Marks",
            "questionTypes": "Definition with limit, Zero field point between charges",
            "hotTopic": "Finding null point where E_net = 0 on line joining two charges"
        }
    },

    # 1.4 Properties of Field Lines
    "phy-sub-1-4": {
        "definitions": [
            {
                "term": "Electric Field Line",
                "definition": "An imaginary smooth continuous curve drawn in an electric field such that the geometric tangent drawn at any point gives the direction of electric field intensity at that point."
            }
        ],
        "keyPoints": [
            "• <strong>Origin & Termination:</strong> Lines start at positive charges and terminate on negative charges; for isolated charges, they extend to/from infinity.",
            "• <strong>Non-Intersection Proof:</strong> Two field lines can NEVER intersect. If they did, two tangents could be drawn at the point of intersection, implying two directions of resultant electric field at a single point, which is physically impossible.",
            "• <strong>No Closed Loops:</strong> Electrostatic field lines NEVER form closed loops because electrostatic fields are conservative in nature ($\\oint \\vec{E} \\cdot d\\vec{l} = 0$).",
            "• <strong>Field Density:</strong> Relative crowding of field lines indicates field strength: closer lines mean stronger field."
        ],
        "extraPoints": [
            "• <strong>Conductor Boundary Condition:</strong> Field lines are always strictly perpendicular to the surface of any conductor in electrostatic equilibrium ($E_\\parallel = 0$)."
        ],
        "reactions": [],
        "oswaalMnemonic": {
            "title": "Field Line Non-Intersection",
            "phrase": "One Point, One Tangent, One Vector",
            "explanation": "Two crossing lines would give two tangents and two directions—an impossible physical contradiction."
        },
        "commonlyMadeErrors": [
            {
                "error": "Drawing closed loops for electrostatic field lines, confusing them with magnetic field lines.",
                "tip": "Electrostatic field lines NEVER form closed loops. Magnetic field lines ALWAYS form continuous closed loops.",
                "penalty": "Loss of 1 mark."
            }
        ],
        "assertionReason": {
            "assertion": "Two electric field lines can never cross each other.",
            "reason": "At the point of intersection, there would be two tangents indicating two directions of electric field at that single point.",
            "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
            "explanation": "The resultant field vector at any spatial location is unique and unambiguous."
        },
        "examTrend": {
            "pastYears": "CBSE 2024, 2023, 2020, 2018",
            "frequency": "High Frequency Conceptual",
            "typicalMarks": "2 Marks",
            "questionTypes": "Why lines never cross, sketch field lines for dipole and like charges",
            "hotTopic": "Non-intersection proof & non-closed loop justification"
        }
    },

    # 1.5 & 1.6 Electric Dipole & Fields (Axial & Equatorial)
    "phy-sub-1-5": {
        "definitions": [
            {
                "term": "Electric Dipole & Dipole Moment (p⃗)",
                "definition": "A pair of equal and opposite point charges $+q$ and $-q$ separated by a small distance $2a$. Dipole moment: $\\vec{p} = q(2\\vec{a})$, directed along the axis from negative charge ($-q$) to positive charge ($+q$). SI Unit: $\\text{C}\\cdot\\text{m}$."
            },
            {
                "term": "Axial Field Formula (Short Dipole)",
                "definition": "At distance $r$ on the axial line ($r \\gg a$): $\\vec{E}_{\\text{axial}} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{2\\vec{p}}{r^3}$ (parallel to dipole moment $\\vec{p}$)."
            },
            {
                "term": "Equatorial Field Formula (Short Dipole)",
                "definition": "At distance $r$ on the equatorial line ($r \\gg a$): $\\vec{E}_{\\text{eq}} = -\\frac{1}{4\\pi\\varepsilon_0} \\frac{\\vec{p}}{r^3}$ (antiparallel to dipole moment $\\vec{p}$)."
            }
        ],
        "keyPoints": [
            "• <strong>Distance Dependence:</strong> Dipole electric field falls off as inverse-cube ($E \\propto 1/r^3$), much faster than point charge ($1/r^2$), due to mutual cancellation of opposite charges.",
            "• <strong>Axial to Equatorial Ratio:</strong> At the same distance $r$ for a short dipole, the axial field magnitude is exactly twice the equatorial field: $E_{\\text{axial}} = 2 E_{\\text{eq}}$.",
            "• <strong>Directional Polarity:</strong> Axial field points along $+\\vec{p}$; Equatorial field points along $-\\vec{p}$."
        ],
        "extraPoints": [
            "• <strong>General Point Formula:</strong> At arbitrary position $(r, \\theta)$: $E = \\frac{1}{4\\pi\\varepsilon_0} \\frac{p}{r^3} \\sqrt{1 + 3\\cos^2\\theta}$ and $\\tan\\alpha = \\frac{1}{2}\\tan\\theta$."
        ],
        "reactions": [],
        "oswaalMnemonic": {
            "title": "Dipole Field Ratio",
            "phrase": "Axial is Always Double the Equator (2 to 1)",
            "explanation": "E_axial = 2kp/r³ (parallel to p); E_equatorial = kp/r³ (opposite to p)."
        },
        "commonlyMadeErrors": [
            {
                "error": "Writing 1/r² instead of 1/r³ for dipole field variation.",
                "tip": "Point charges have 1/r²; Dipoles have 1/r³; Quadrupoles have 1/r⁴.",
                "penalty": "Loss of 1 mark in derivation/formula."
            }
        ],
        "assertionReason": {
            "assertion": "The electric field of an electric dipole falls off as 1/r³ at large distances.",
            "reason": "The equal and opposite charges of the dipole partially cancel each other's field at distant points.",
            "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
            "explanation": "Opposite charges separated by finite distance produce overlapping fields that cancel out the 1/r² leading term."
        },
        "examTrend": {
            "pastYears": "CBSE 2024 SQP Q1, 2023, 2022, 2019",
            "frequency": "Guaranteed 5-Mark Question",
            "typicalMarks": "3 to 5 Marks",
            "questionTypes": "Full derivation of axial and equatorial fields, ratio comparison",
            "hotTopic": "Exact derivation matching NODIA QB page 83"
        }
    },

    # 1.7 Torque on Dipole
    "phy-sub-1-7": {
        "definitions": [
            {
                "term": "Dipole Torque in Uniform Field (τ⃗)",
                "definition": "The rotational couple exerted on an electric dipole placed in a uniform electric field: $\\vec{\\tau} = \\vec{p} \\times \\vec{E}$, magnitude $\\tau = p E \\sin\\theta$. SI Unit: $\\text{N}\\cdot\\text{m}$."
            },
            {
                "term": "Dipole Potential Energy (U)",
                "definition": "The energy stored in the dipole configuration relative to perpendicular orientation: $U = -\\vec{p} \\cdot \\vec{E} = -p E \\cos\\theta$. SI Unit: Joules (J)."
            }
        ],
        "keyPoints": [
            "• <strong>Uniform Field Net Force:</strong> $\\vec{F}_{\\text{net}} = +q\\vec{E} + (-q\\vec{E}) = 0$. The dipole experiences ZERO translational acceleration in a uniform field.",
            "• <strong>Non-Uniform Field:</strong> In a non-uniform field, dipole experiences BOTH a net translational force AND a torque couple.",
            "• <strong>Stable Equilibrium:</strong> At $\\theta = 0^\\circ$, $\\vec{\\tau} = 0$ and $U_{\\text{min}} = -pE$ (dipole aligned parallel to field).",
            "• <strong>Unstable Equilibrium:</strong> At $\\theta = 180^\\circ$, $\\vec{\\tau} = 0$ and $U_{\\text{max}} = +pE$ (dipole aligned antiparallel to field).",
            "• <strong>Maximum Torque:</strong> At $\\theta = 90^\\circ$, $\\tau_{\\text{max}} = pE$."
        ],
        "extraPoints": [
            "• <strong>Work Done in Rotation:</strong> $W = -pE(\\cos\\theta_2 - \\cos\\theta_1)$. Rotating from stable ($0^\\circ$) to unstable ($180^\\circ$) requires work $W = 2pE$."
        ],
        "reactions": [],
        "oswaalMnemonic": {
            "title": "Equilibrium States of Dipole",
            "phrase": "Zero is Zen (Stable Min Energy -pE), 180 is Upset (Unstable Max Energy +pE)",
            "explanation": "θ = 0° aligns naturally with lowest energy; θ = 180° is unstable with highest energy."
        },
        "commonlyMadeErrors": [
            {
                "error": "Claiming that a dipole in a uniform electric field experiences a net translational force.",
                "tip": "In uniform E-field, net force is identically ZERO. Net force is non-zero ONLY in non-uniform fields.",
                "penalty": "Loss of 1 mark on conceptual reasoning."
            }
        ],
        "assertionReason": {
            "assertion": "An electric dipole placed in a uniform electric field experiences zero net translational force.",
            "reason": "The forces +qE and -qE acting on the two charges are equal in magnitude and opposite in direction.",
            "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
            "explanation": "Equal and opposite collinear/parallel forces cancel vectorially to zero net force."
        },
        "examTrend": {
            "pastYears": "CBSE 2024, 2023, 2021, 2019",
            "frequency": "High Frequency Core",
            "typicalMarks": "3 Marks",
            "questionTypes": "Derive torque τ = p × E and potential energy U = -p · E; stable vs unstable equilibrium",
            "hotTopic": "Work done in rotating dipole through 180°"
        }
    },

    # 1.8 & 1.9 & 1.11 Gauss's Law & Applications
    "phy-sub-1-11": {
        "definitions": [
            {
                "term": "Gauss's Law in Electrostatics",
                "definition": "The total electric flux emerging through any closed Gaussian surface in free space is equal to $\\frac{1}{\\varepsilon_0}$ times the net electric charge enclosed by that surface: $\\Phi_E = \\oint \\vec{E} \\cdot d\\vec{A} = \\frac{q_{\\text{enclosed}}}{\\varepsilon_0}$."
            },
            {
                "term": "Infinitely Long Charged Wire Field",
                "definition": "Electric field at distance $r$ from an infinite straight wire of linear charge density $\\lambda$: $E = \\frac{\\lambda}{2\\pi\\varepsilon_0 r}$, directed radially outward ($E \\propto 1/r$)."
            },
            {
                "term": "Infinite Plane Sheet Field",
                "definition": "Electric field due to an infinite uniformly charged plane sheet of surface charge density $\\sigma$: $E = \\frac{\\sigma}{2\\varepsilon_0}$. Crucial feature: completely independent of distance $r$!"
            },
            {
                "term": "Uniformly Charged Spherical Shell Field",
                "definition": "Outside ($r \\ge R$): $E = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{r^2}$; Inside ($r < R$): $E = 0$; On surface ($r = R$): $E = \\frac{\\sigma}{\\varepsilon_0}$."
            }
        ],
        "keyPoints": [
            "• <strong>Shape Independence:</strong> Electric flux through a closed surface depends only on enclosed charge, independent of the size, radius, or shape of the surface.",
            "• <strong>External Charges:</strong> Charges outside the Gaussian surface contribute zero net flux because every field line entering exits the surface.",
            "• <strong>Dipole Flux is Zero:</strong> A closed surface enclosing an electric dipole has $q_{\\text{enc}} = +q + (-q) = 0$, giving $\\Phi_E = 0$ (though local field $E \\neq 0$ on the surface).",
            "• <strong>Zero Field Inside Shell (Electrostatic Shielding):</strong> Since all charge resides on the outer surface of a conductor/shell, no charge is enclosed inside ($q_{\\text{enc}} = 0$), so $E_{\\text{inside}} = 0$."
        ],
        "extraPoints": [
            "• <strong>Field Between Two Parallel Oppositely Charged Plates:</strong> Between plates: $E = \\frac{\\sigma}{2\\varepsilon_0} + \\frac{\\sigma}{2\\varepsilon_0} = \\frac{\\sigma}{\\varepsilon_0}$; Outside plates: $E = 0$ (basis of parallel plate capacitor)."
        ],
        "reactions": [],
        "oswaalMnemonic": {
            "title": "Gauss's Three Geometries",
            "phrase": "Wire drops as 1/r, Sheet stays Constant, Shell drops as 1/r² outside and Dies to Zero inside",
            "explanation": "Summary of distance dependencies for all three CBSE Gauss law derivations."
        },
        "commonlyMadeErrors": [
            {
                "error": "Writing E = σ / ε₀ for a single thin sheet instead of E = σ / (2ε₀).",
                "tip": "For a thin sheet of charge, E = σ / (2ε₀). For a conducting plate having two charged faces, E = σ / ε₀.",
                "penalty": "Loss of 1 mark in derivation."
            }
        ],
        "assertionReason": {
            "assertion": "The electric field inside a uniformly charged thin spherical shell is zero.",
            "reason": "The net charge enclosed by a concentric Gaussian surface inside the shell is zero.",
            "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
            "explanation": "By Gauss's law, ∮ E · dA = q_enc / ε₀ = 0 / ε₀ = 0, so E_inside = 0."
        },
        "examTrend": {
            "pastYears": "CBSE 2024, 2023, 2022, 2020, 2019",
            "frequency": "99% Guaranteed Exam Question",
            "typicalMarks": "5 Marks",
            "questionTypes": "Full derivation of wire, sheet, or shell field, graph of E vs r",
            "hotTopic": "Gauss's theorem statement + Derivation of wire/sheet/shell"
        }
    },

    # 2.3 Equipotential Surfaces & Potential Gradient
    "phy-sub-2-3": {
        "definitions": [
            {
                "term": "Equipotential Surface",
                "definition": "Any surface that has the same constant electrostatic potential at every point on it ($V = \\text{constant}$). Work done in moving any charge between two points on an equipotential surface is strictly zero: $W = q\\Delta V = 0$."
            },
            {
                "term": "Potential Gradient Relation",
                "definition": "The mathematical differential connection between electric field intensity and potential: $E = -\\frac{dV}{dr}$. The negative sign indicates that $\\vec{E}$ points in the direction of maximum rate of decrease of potential."
            }
        ],
        "keyPoints": [
            "• <strong>Normal Field Rule:</strong> Electric field lines are always perpendicular to the equipotential surface at every point ($E_\\parallel = 0$).",
            "• <strong>Non-Intersection Rule:</strong> Two equipotential surfaces can never intersect each other.",
            "• <strong>Field Strength Spacing:</strong> Equipotential surfaces are crowded closer together in strong field regions ($dr = -dV/E$, smaller $dr$) and spaced further apart in weak field regions.",
            "• <strong>Equipotential Shapes:</strong> (1) Point charge: Concentric spheres; (2) Line charge: Coaxial cylinders; (3) Uniform field: Parallel equidistant planes."
        ],
        "extraPoints": [
            "• <strong>Conductor Surface:</strong> The entire surface of a charged conductor in electrostatic equilibrium is an equipotential surface, and its interior volume is an equipotential region ($V = \\text{constant}$, $E = 0$)."
        ],
        "reactions": [],
        "oswaalMnemonic": {
            "title": "Equipotential Rules",
            "phrase": "No Work, Always Normal, Never Crossing",
            "explanation": "Zero work along surface; field lines always perpendicular; two surfaces never cross."
        },
        "commonlyMadeErrors": [
            {
                "error": "Stating that electric field is parallel to equipotential surfaces.",
                "tip": "Electric field is ALWAYS strictly perpendicular (normal) to equipotential surfaces.",
                "penalty": "Loss of 1 mark on conceptual question."
            }
        ],
        "assertionReason": {
            "assertion": "Electric field lines are always normal to equipotential surfaces.",
            "reason": "If the electric field had a tangential component, non-zero work would be done in moving a charge along the surface, violating the definition of equipotential.",
            "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
            "explanation": "W = q(E_parallel · dr) = 0 implies E_parallel = 0, so field must be entirely normal."
        },
        "examTrend": {
            "pastYears": "CBSE 2024, 2023, 2022, 2020",
            "frequency": "Guaranteed Core Concept",
            "typicalMarks": "2 to 3 Marks",
            "questionTypes": "Draw surfaces for point charge/dipole/uniform field, derive E = -dV/dr",
            "hotTopic": "Proof of normal field & negative gradient derivation"
        }
    },

    # 2.7 Parallel Plate Capacitor with & without Dielectric
    "phy-sub-2-7": {
        "definitions": [
            {
                "term": "Capacitance (C)",
                "definition": "The ratio of the magnitude of electric charge $Q$ on either plate to the electrostatic potential difference $V$ maintained between them: $C = Q / V$. SI Unit: Farad (F) ($1\\text{ F} = 1\\text{ C/V}$)."
            },
            {
                "term": "Parallel Plate Capacitor (Vacuum)",
                "definition": "Capacitance of two parallel plates of area $A$ separated by distance $d$ in vacuum: $C_0 = \\frac{\\varepsilon_0 A}{d}$."
            },
            {
                "term": "Capacitor with Dielectric Slab of Thickness t (t < d)",
                "definition": "When a dielectric of constant $K$ and thickness $t$ is inserted: $C = \\frac{\\varepsilon_0 A}{d - t(1 - 1/K)}$. If completely filled ($t = d$): $C = K C_0$."
            }
        ],
        "keyPoints": [
            "• <strong>Physical Effect of Dielectric:</strong> Dielectric polarization creates internal opposing field $\\vec{E}_p$, reducing net field $E = E_0 / K$. This decreases potential difference $V = V_0 / K$, causing capacitance to increase by factor $K$ ($C = K C_0$).",
            "• <strong>Battery Connected vs Disconnected (CBSE Top Ranker Trap):</strong>",
            "  - <em>Battery Remained Connected:</em> Voltage $V$ stays CONSTANT ($V = V_0$). Charge increases ($Q = K Q_0$). Field stays constant ($E = E_0$). Energy increases ($U = K U_0$).",
            "  - <em>Battery Disconnected:</em> Charge $Q$ stays CONSTANT ($Q = Q_0$). Voltage decreases ($V = V_0 / K$). Field decreases ($E = E_0 / K$). Energy decreases ($U = U_0 / K$)."
        ],
        "extraPoints": [
            "• <strong>Conducting Slab Insertion (K → ∞):</strong> If a conducting sheet of thickness $t$ is placed between plates, $C = \\frac{\\varepsilon_0 A}{d - t}$."
        ],
        "reactions": [],
        "oswaalMnemonic": {
            "title": "Battery Connected vs Disconnected Trap",
            "phrase": "Connected = Voltage Stays Constant | Disconnected = Charge Stays Constant",
            "explanation": "If battery stays on, V is fixed; if battery removed, charge Q has nowhere to go."
        },
        "commonlyMadeErrors": [
            {
                "error": "Confusing battery-connected vs battery-disconnected outcomes in dielectric numericals.",
                "tip": "Check first word of problem: 'Battery disconnected' -> Q = const; 'Battery remains connected' -> V = const.",
                "penalty": "Loss of 2 marks."
            }
        ],
        "assertionReason": {
            "assertion": "When a dielectric slab is inserted into a charged isolated capacitor, its stored energy decreases.",
            "reason": "For an isolated capacitor, charge Q remains constant while capacitance C increases, so U = Q² / (2C) decreases.",
            "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
            "explanation": "U = Q² / (2KC) = U₀ / K. The remaining energy is spent by the field doing work pulling the dielectric slab inside."
        },
        "examTrend": {
            "pastYears": "CBSE 2024 SQP Q31, 2023, 2020, 2019",
            "frequency": "Guaranteed 5-Mark Question",
            "typicalMarks": "3 to 5 Marks",
            "questionTypes": "Derive C = ε₀A/[d - t(1 - 1/K)], battery connected/disconnected table",
            "hotTopic": "Dielectric slab potential derivation and battery disconnection impact"
        }
    }
}

print(f"Loaded {len(ch1_ch2_data)} high-yield subtopics for Chapters 1 & 2.")
