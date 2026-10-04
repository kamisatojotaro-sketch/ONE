# -*- coding: utf-8 -*-
"""
Questions 1 to 5 for CBSE Class 12 Physics Top 22 Questions
"""

questions_1_to_5 = [
    # Q1: Gauss's Law & Applications
    {
        "id": "imp-phy-1",
        "number": 1,
        "title": "Gauss's Law & Applications: Plane Sheet, Straight Wire & Spherical Shell",
        "shortLabel": "Gauss's Law (Plane, Wire, Shell)",
        "chapterId": "phy-ch-1",
        "chapterTitle": "Electric Charges and Fields",
        "unit": "Electrostatics",
        "marks": "5 Marks",
        "marksNum": 5,
        "category": "Derivation",
        "frequency": "99% Frequency (Asked in almost every CBSE Board Exam)",
        "questionPrompt": "(a) State Gauss's law in electrostatics.\n(b) Using Gauss's law, derive an expression for the electric field due to:\n  (i) An infinitely long straight uniformly charged wire of linear charge density λ.\n  (ii) An infinite uniformly charged plane sheet of surface charge density σ.\n  (iii) A thin spherical shell of radius R and surface charge density σ, at points outside (r ≥ R) and inside (r < R) the shell.",
        "ncertRef": {
            "textbook": "NCERT Physics Class 12, Part 1",
            "chapter": "Chapter 1: Electric Charges and Fields",
            "section": "Sections 1.14 & 1.15 (pp. 33–40)",
            "equations": "Eqs. (1.31), (1.32), (1.33), (1.35), (1.36)",
            "figures": "Figs. 1.29, 1.30, 1.31",
            "summary": "Gauss flux theorem and field derivations for cylindrical symmetry (wire), planar symmetry (sheet), and spherical symmetry (shell)."
        },
        "theory": [
            "Gauss's Law states that the total electric flux $\\Phi_E$ through any closed Gaussian surface in free space is equal to $\\frac{1}{\\varepsilon_0}$ times the net electric charge $q_{\\text{enclosed}}$ enclosed by that surface: $$\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{q_{\\text{enclosed}}}{\\varepsilon_0}$$",
            "Electric flux is independent of the size, radius, or geometric shape of the Gaussian surface chosen.",
            "If a Gaussian surface encloses zero net charge ($q_{\\text{enclosed}} = 0$), the net outward electric flux through the surface is strictly zero.",
            "Charges lying outside the closed Gaussian surface do not contribute to the net flux, because every field line entering the surface exits it."
        ],
        "derivations": [
            {
                "name": "Application 1: Infinitely Long Uniformly Charged Wire",
                "setup": "Consider an infinitely long, thin straight wire carrying a uniform linear charge density $\\lambda$. By cylindrical symmetry, the electric field $\\vec{E}$ is directed radially outward everywhere perpendicular to the wire, and its magnitude depends only on radial distance $r$. Construct a closed coaxial cylindrical Gaussian surface of radius $r$ and length $l$ around the wire.",
                "steps": [
                    {
                        "text": "Total electric flux through the Gaussian surface decomposes into three parts (two flat circular end-caps $S_1, S_2$ and one curved cylindrical mantle $S_3$):",
                        "equation": "\\oint \\vec{E} \\cdot d\\vec{A} = \\int_{S_1} \\vec{E} \\cdot d\\vec{A} + \\int_{S_2} \\vec{E} \\cdot d\\vec{A} + \\int_{S_3} \\vec{E} \\cdot d\\vec{A}"
                    },
                    {
                        "text": "On the two flat circular ends $S_1$ and $S_2$, field $\\vec{E}$ is perpendicular to area normal $d\\vec{A}$ ($\\theta = 90^\\circ$):",
                        "equation": "\\int_{S_1} E \\, dA \\cos 90^\\circ = 0, \\quad \\int_{S_2} E \\, dA \\cos 90^\\circ = 0"
                    },
                    {
                        "text": "On the curved cylindrical surface $S_3$, $\\vec{E}$ is parallel to outward area normal $d\\vec{A}$ ($\\theta = 0^\\circ$) at every point:",
                        "equation": "\\int_{S_3} \\vec{E} \\cdot d\\vec{A} = E \\int_{S_3} dA = E(2\\pi r l)"
                    },
                    {
                        "text": "The net charge enclosed within the Gaussian cylinder of length $l$ is:",
                        "equation": "q_{\\text{enclosed}} = \\lambda \\cdot l"
                    },
                    {
                        "text": "Applying Gauss's Law:",
                        "equation": "E(2\\pi r l) = \\frac{\\lambda l}{\\varepsilon_0}"
                    },
                    {
                        "text": "Hence, the electric field at distance $r$ from the wire is:",
                        "equation": "E = \\frac{\\lambda}{2\\pi \\varepsilon_0 r} \\quad \\implies \\quad \\vec{E} = \\frac{\\lambda}{2\\pi \\varepsilon_0 r}\\hat{r}"
                    }
                ],
                "specialCases": [
                    {
                        "title": "Variation with Distance:",
                        "text": "The electric field is inversely proportional to distance $r$:",
                        "equation": "E \\propto \\frac{1}{r}"
                    }
                ],
                "finalFormula": "E = \\frac{\\lambda}{2\\pi \\varepsilon_0 r}"
            },
            {
                "name": "Application 2: Infinite Uniformly Charged Plane Sheet",
                "setup": "Consider an infinite thin plane sheet carrying uniform surface charge density $\\sigma$. By planar symmetry, the electric field $\\vec{E}$ is directed perpendicular to the sheet on both sides, with magnitude independent of position along the sheet. Construct a cylindrical pillbox of cross-sectional area $A$ extending symmetrically distance $r$ on both sides of the sheet.",
                "steps": [
                    {
                        "text": "On the curved cylindrical surface of the pillbox, $\\vec{E}$ is parallel to the sheet while $d\\vec{A}$ is perpendicular ($\\theta = 90^\\circ$), so flux through the curved surface is zero:",
                        "equation": "\\Phi_{\\text{curved}} = 0"
                    },
                    {
                        "text": "On both flat circular end-caps, $\\vec{E}$ is parallel to area vector $d\\vec{A}$ ($\\theta = 0^\\circ$). Flux through each end-cap is $E \\cdot A$:",
                        "equation": "\\Phi_{\\text{total}} = E A + E A = 2 E A"
                    },
                    {
                        "text": "Net charge enclosed inside cross-sectional area $A$ of the sheet:",
                        "equation": "q_{\\text{enclosed}} = \\sigma \\cdot A"
                    },
                    {
                        "text": "Applying Gauss's Law:",
                        "equation": "2 E A = \\frac{\\sigma A}{\\varepsilon_0}"
                    },
                    {
                        "text": "Hence, the electric field due to an infinite plane sheet is:",
                        "equation": "E = \\frac{\\sigma}{2\\varepsilon_0} \\quad \\implies \\quad \\vec{E} = \\frac{\\sigma}{2\\varepsilon_0}\\hat{n}"
                    }
                ],
                "specialCases": [
                    {
                        "title": "Distance Independence:",
                        "text": "The field is completely uniform and independent of distance $r$ from the sheet:",
                        "equation": "E = \\text{constant} \\quad (\\text{for all } r)"
                    }
                ],
                "finalFormula": "E = \\frac{\\sigma}{2\\varepsilon_0}"
            },
            {
                "name": "Application 3: Thin Uniformly Charged Spherical Shell",
                "setup": "Consider a thin spherical shell of radius $R$ carrying total charge $q = 4\\pi R^2 \\sigma$ uniformly distributed on its surface. By spherical symmetry, electric field $\\vec{E}$ is directed radially outward everywhere.",
                "steps": [
                    {
                        "text": "Case (i) Outside the Shell ($r \\ge R$): Construct a concentric spherical Gaussian surface of radius $r > R$. Electric flux is:",
                        "equation": "\\oint \\vec{E} \\cdot d\\vec{A} = E(4\\pi r^2)"
                    },
                    {
                        "text": "Since net enclosed charge is $q_{\\text{enclosed}} = q$, applying Gauss's Law gives:",
                        "equation": "E(4\\pi r^2) = \\frac{q}{\\varepsilon_0} \\quad \\implies \\quad E_{\\text{outside}} = \\frac{1}{4\\pi \\varepsilon_0}\\frac{q}{r^2}"
                    },
                    {
                        "text": "Case (ii) Inside the Shell ($r < R$): Construct a concentric spherical Gaussian surface of radius $r < R$. All charge resides on the outer surface, so enclosed charge is zero:",
                        "equation": "q_{\\text{enclosed}} = 0"
                    },
                    {
                        "text": "Applying Gauss's Law inside the shell:",
                        "equation": "E(4\\pi r^2) = \\frac{0}{\\varepsilon_0} \\quad \\implies \\quad E_{\\text{inside}} = 0"
                    }
                ],
                "specialCases": [
                    {
                        "title": "At the Surface ($r = R$):",
                        "text": "The electric field exhibits a step discontinuity across the surface:",
                        "equation": "E_{\\text{surface}} = \\frac{1}{4\\pi \\varepsilon_0}\\frac{q}{R^2} = \\frac{\\sigma}{\\varepsilon_0}"
                    }
                ],
                "finalFormula": "E_{\\text{out}} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{r^2}, \\quad E_{\\text{in}} = 0"
            }
        ],
        "diagram": {
            "hasDiagram": True,
            "diagramId": "gauss-applications",
            "title": "Gauss's Law Application Geometries",
            "examDrawingGuide": [
                "1. Straight Wire: Draw central charged wire with positive signs; draw coaxial cylinder of radius r and length l; draw normal vectors on circular ends (at 90° to E) and curved mantle (parallel to E).",
                "2. Plane Sheet: Draw vertical plane sheet with uniform positive charges; draw cylindrical pillbox puncturing perpendicularly with circular end-caps on both sides; draw field vectors E pointing away on both sides.",
                "3. Spherical Shell: Draw shell of radius R; draw outer Gaussian sphere r > R and inner Gaussian sphere r < R; plot the classic E versus r curve showing E = 0 for r < R, jumping to maximum at r = R, and decaying as 1/r² for r > R."
            ]
        },
        "keyPointsAndKeywords": [
            "Gaussian Surface Symmetry",
            "Flux Decomposition (End Caps vs Curved Surface)",
            "Linear Charge Density (λ = dq/dl)",
            "Surface Charge Density (σ = dq/dA)",
            "Distance Independence for Plane Sheet",
            "Zero Electric Field Inside Hollow Conductor/Shell"
        ],
        "termsGlossary": [
            {
                "symbol": "\\Phi_E",
                "term": "Electric Flux",
                "definition": "Total number of electric field lines passing normally through a given area: Φ_E = ∮ E · dA. Measured in N·m²/C or V·m."
            },
            {
                "symbol": "\\varepsilon_0",
                "term": "Permittivity of Free Space",
                "definition": "Physical constant representing the capability of vacuum to permit electric field lines. Value: ε₀ ≈ 8.854 × 10⁻¹² C²/(N·m²)."
            },
            {
                "symbol": "\\lambda",
                "term": "Linear Charge Density",
                "definition": "Charge per unit length along a 1D conductor: λ = dq/dl, measured in Coulombs per metre (C/m)."
            },
            {
                "symbol": "\\sigma",
                "term": "Surface Charge Density",
                "definition": "Charge per unit surface area: σ = dq/dA, measured in Coulombs per square metre (C/m²)."
            },
            {
                "symbol": "d\\vec{A} = dA \\, \\hat{n}",
                "term": "Area Vector",
                "definition": "Vector of magnitude dA directed along the outward unit normal n̂ to the closed surface element."
            }
        ],
        "markingScheme": [
            "1 Mark: Statement of Gauss's Law with mathematical formula ∮ E · dA = q_enc/ε₀.",
            "1.5 Marks: Application 1 (Wire): Choice of Gaussian cylinder, flux evaluation showing zero end flux, and final formula E = λ/(2πε₀r).",
            "1.5 Marks: Application 2 (Sheet): Choice of pillbox, evaluation of 2EA = σA/ε₀, and final formula E = σ/(2ε₀).",
            "1 Mark: Application 3 (Shell): Derivation for r ≥ R (E = kq/r²) and proof that E = 0 for r < R."
        ],
        "examinerTips": "Always draw the Gaussian surface and show the area normal vector n̂ and field vector E explicitly with their angle θ. Remember to emphasize that for an infinite plane sheet, the electric field is strictly independent of distance."
    },

    # Q2: Force on Current-Carrying Conductor in Magnetic Field
    {
        "id": "imp-phy-2",
        "number": 2,
        "title": "Force on a Current-Carrying Conductor in a Magnetic Field",
        "shortLabel": "Force on Conductor (F = ILB sinθ)",
        "chapterId": "phy-ch-4",
        "chapterTitle": "Moving Charges and Magnetism",
        "unit": "Magnetism",
        "marks": "3 Marks",
        "marksNum": 3,
        "category": "Derivation",
        "frequency": "High Frequency (CBSE 2023, 2022, 2019, 2018)",
        "questionPrompt": "(a) Derive the expression for the magnetic force experienced by a straight conductor of length L carrying current I placed in a uniform magnetic field B.\n(b) State the rule used to determine the direction of this force.\n(c) What are the conditions for maximum and zero force?",
        "ncertRef": {
            "textbook": "NCERT Physics Class 12, Part 1",
            "chapter": "Chapter 4: Moving Charges and Magnetism",
            "section": "Section 4.2.2: Magnetic Force on a Current-Carrying Conductor (pp. 135–136)",
            "equations": "Eqs. (4.4), (4.5)",
            "figures": "Fig. 4.4",
            "summary": "Integration of microscopic Lorentz forces on mobile electrons with drift velocity to yield macroscopic mechanical force."
        },
        "theory": [
            "When a current-carrying conductor is placed in an external magnetic field, the mobile charge carriers (electrons) moving with drift velocity experience microscopic magnetic Lorentz forces.",
            "These individual microscopic forces are transmitted to the crystal lattice ions via collisions, resulting in a net macroscopic mechanical force: $$\\vec{F} = I(\\vec{L} \\times \\vec{B})$$",
            "Direction of the magnetic force is determined by Fleming's Left-Hand Rule or the Right-Hand Palm Rule.",
            "A conductor aligned parallel to the magnetic field ($\\theta = 0^\\circ$ or $180^\\circ$) experiences zero force.",
            "A conductor oriented perpendicular to the magnetic field ($\\theta = 90^\\circ$) experiences the maximum possible force: $F_{\\text{max}} = I L B$."
        ],
        "derivations": [
            {
                "name": "Derivation from Microscopic Electron Drift Dynamics",
                "setup": "Consider a straight conductor of length $l$ and uniform cross-sectional area $A$ carrying a steady current $I$. It is placed in a uniform external magnetic field $\\vec{B}$ making an angle $\\theta$ with the length of the conductor. Let $n$ be the number density of free conduction electrons in the material.",
                "steps": [
                    {
                        "text": "Total number of mobile conduction electrons inside the volume $V = A l$ of the conductor is:",
                        "equation": "N = n A l"
                    },
                    {
                        "text": "When steady current $I$ flows, conduction electrons drift with average drift velocity $\\vec{v}_d$. The magnetic Lorentz force on a single electron of charge $-e$ is:",
                        "equation": "\\vec{f} = -e(\\vec{v}_d \\times \\vec{B})"
                    },
                    {
                        "text": "The total macroscopic magnetic force $\\vec{F}$ on the conductor is the vector sum of forces on all $N$ mobile electrons:",
                        "equation": "\\vec{F} = N \\vec{f} = (n A l)[-e(\\vec{v}_d \\times \\vec{B})] = -n e A l (\\vec{v}_d \\times \\vec{B})"
                    },
                    {
                        "text": "By definition of electric current, macroscopic current is $I = n e A v_d$. In vector form, current flowing along the length vector $\\vec{l}$ satisfies:",
                        "equation": "-n e A l \\vec{v}_d = I \\vec{l}"
                    },
                    {
                        "text": "Substituting this relation into the total force equation yields:",
                        "equation": "\\vec{F} = I(\\vec{l} \\times \\vec{B})"
                    },
                    {
                        "text": "The magnitude of the magnetic force is:",
                        "equation": "F = I l B \\sin\\theta"
                    }
                ],
                "specialCases": [
                    {
                        "title": "Case 1: Maximum Force (θ = 90°)",
                        "text": "When the conductor is perpendicular to the magnetic field ($\\sin 90^\\circ = 1$):",
                        "equation": "F_{\\text{max}} = I l B"
                    },
                    {
                        "title": "Case 2: Zero Force (θ = 0° or 180°)",
                        "text": "When the conductor is parallel or antiparallel to the magnetic field ($\\sin 0^\\circ = 0$):",
                        "equation": "F = 0"
                    }
                ],
                "finalFormula": "\\vec{F} = I(\\vec{l} \\times \\vec{B}) \\quad \\implies \\quad F = I l B \\sin\\theta"
            }
        ],
        "diagram": {
            "hasDiagram": True,
            "diagramId": "force-conductor",
            "title": "Current Conductor in External B-Field",
            "examDrawingGuide": [
                "1. Draw straight cylindrical conductor of length $l$ and cross-section $A$.",
                "2. Draw parallel magnetic field lines $\\vec{B}$ making angle $\\theta$ with conductor axis.",
                "3. Show current $I$ flowing along length vector $\\vec{l}$, with electron drift velocity $\\vec{v}_d$ pointing in the opposite direction.",
                "4. Draw resulting mechanical force vector $\\vec{F}$ perpendicular to both $\\vec{l}$ and $\\vec{B}$ according to Fleming's Left-Hand Rule."
            ]
        },
        "keyPointsAndKeywords": [
            "Magnetic Lorentz Force on Free Electrons",
            "Drift Velocity (v_d) and Current Relation (I = n e A v_d)",
            "Length Vector (l) along Current Direction",
            "Fleming's Left-Hand Rule",
            "Maximum Force at θ = 90°",
            "Zero Force along Field Lines (θ = 0°)"
        ],
        "termsGlossary": [
            {
                "symbol": "I",
                "term": "Macroscopic Current",
                "definition": "Net rate of charge transport through the conductor: $I = n e A v_d$, measured in Amperes (A)."
            },
            {
                "symbol": "\\vec{B}",
                "term": "Magnetic Field (Flux Density)",
                "definition": "Uniform external magnetic field vector exerting magnetic Lorentz force on moving charges, measured in Tesla (T)."
            },
            {
                "symbol": "n",
                "term": "Electron Number Density",
                "definition": "Number of mobile conduction electrons per unit volume of the conductor ($\\text{m}^{-3}$)."
            },
            {
                "symbol": "\\vec{v}_d",
                "term": "Drift Velocity",
                "definition": "Average velocity acquired by conduction electrons opposite to the electric field inside the conductor."
            },
            {
                "symbol": "\\vec{l}",
                "term": "Length Vector",
                "definition": "Vector of magnitude equal to length of the conductor directed along the direction of electric current."
            },
            {
                "symbol": "\\theta",
                "term": "Orientation Angle",
                "definition": "Angle between length vector $\\vec{l}$ (current direction) and the external magnetic field $\\vec{B}$."
            }
        ],
        "markingScheme": [
            "1.5 Marks: Step-by-step mathematical transition from single electron Lorentz force $\\vec{f} = -e(\\vec{v}_d \\times \\vec{B})$ to macroscopic force $\\vec{F} = I(\\vec{l} \\times \\vec{B})$.",
            "0.5 Mark: Statement of Fleming's Left-Hand Rule or Right-Hand Palm Rule for direction.",
            "1 Mark: Correct identification of special cases (maximum at $\\theta = 90^\\circ$, zero at $\\theta = 0^\\circ$)."
        ],
        "examinerTips": "Direction Rule: Fleming's Left-Hand Rule — Forefinger points along Field B, Middle finger points along Current I, and Thumb points along Force F. Remember that a conductor aligned along the magnetic field experiences ZERO force."
    },

    # Q3: Faraday's & Lenz's Laws
    {
        "id": "imp-phy-3",
        "number": 3,
        "title": "Faraday's Laws of Induction & Lenz's Law (Energy Conservation)",
        "shortLabel": "Faraday's & Lenz's Laws",
        "chapterId": "phy-ch-6",
        "chapterTitle": "Electromagnetic Induction",
        "unit": "Electromagnetic Induction",
        "marks": "3 Marks",
        "marksNum": 3,
        "category": "Conceptual & Theory",
        "frequency": "Guaranteed Core Question (Every Alternate Year)",
        "questionPrompt": "(a) State Faraday's laws of electromagnetic induction.\n(b) State Lenz's law. Explain how Lenz's law is a direct consequence of the principle of conservation of energy.\n(c) A bar magnet is pushed towards a closed conducting loop. Show that mechanical work is converted into electrical energy.",
        "ncertRef": {
            "textbook": "NCERT Physics Class 12, Part 1",
            "chapter": "Chapter 6: Electromagnetic Induction",
            "section": "Sections 6.4 & 6.5 (pp. 207–213)",
            "equations": "Eqs. (6.1), (6.2), (6.3)",
            "figures": "Figs. 6.6, 6.7",
            "summary": "Quantitative formulation of induced emf and Lenz polarity law as an essential manifestation of energy conservation."
        },
        "theory": [
            "Faraday's First Law: Whenever the magnetic flux linked with a closed conducting circuit changes with time, an electromotive force (emf) is induced in the circuit, which lasts as long as the flux continues to change.",
            "Faraday's Second Law: The magnitude of the induced emf is directly proportional to the time rate of change of magnetic flux linked with the circuit: $$\\varepsilon = -\\frac{d\\Phi_B}{dt} \\quad \\left(\\text{for } N \\text{ turns: } \\varepsilon = -N\\frac{d\\Phi_B}{dt}\\right)$$",
            "Lenz's Law: The direction of induced current is always such that it opposes the change in magnetic flux that produces it.",
            "Lenz's law is a direct consequence of the Law of Conservation of Energy: when a magnet is pushed toward a loop, the loop develops an opposing magnetic pole. An external agent must do mechanical work against this magnetic repulsion, and this mechanical work is converted into electrical energy (and ultimately Joule heat)."
        ],
        "derivations": [
            {
                "name": "Energy Conservation Proof via Lenz's Law",
                "setup": "Consider a closed conducting loop placed in front of the North pole of a bar magnet. An external agent moves the magnet toward the loop with constant velocity.",
                "steps": [
                    {
                        "text": "By Faraday's law, the rate of change of magnetic flux induces an emf across the loop:",
                        "equation": "\\varepsilon = -\\frac{d\\Phi_B}{dt}"
                    },
                    {
                        "text": "By Lenz's law, the induced current flows counter-clockwise (viewed from the magnet side), establishing an induced North pole on the near face of the loop:",
                        "equation": "\\vec{B}_{\\text{induced}} \\text{ opposes the increase in } \\vec{B}_{\\text{external}}"
                    },
                    {
                        "text": "The induced North pole repels the incoming North pole of the magnet with magnetic force $F_{\\text{mag}}$. The mechanical work done by the external agent moving distance $dx$ against this force is:",
                        "equation": "dW_{\\text{mech}} = F_{\\text{ext}} \\, dx = F_{\\text{mag}} \\, dx"
                    },
                    {
                        "text": "If induced current is $I$ and loop resistance is $R$, electrical energy dissipated as Joule heat in time $dt$ is:",
                        "equation": "dH_{\\text{electrical}} = I^2 R \\, dt = \\varepsilon I \\, dt"
                    },
                    {
                        "text": "By energy balance, mechanical work input exactly equals electrical energy generated:",
                        "equation": "dW_{\\text{mech}} = dH_{\\text{electrical}}"
                    }
                ],
                "specialCases": [
                    {
                        "title": "Proof by Contradiction:",
                        "text": "If Lenz's law were opposite (induced South pole attracted the magnet), the magnet would accelerate spontaneously without external work, generating infinite energy from nothing and violating the First Law of Thermodynamics.",
                        "equation": "\\text{Lenz's opposition is mandatory for energy conservation}"
                    }
                ],
                "finalFormula": "\\varepsilon = -N\\frac{d\\Phi_B}{dt}"
            }
        ],
        "diagram": {
            "hasDiagram": True,
            "diagramId": "faraday-lenz",
            "title": "Lenz's Law & Magnet-Coil Induction",
            "examDrawingGuide": [
                "1. Draw circular loop with incoming North pole of bar magnet.",
                "2. Draw counter-clockwise arrow on loop face showing induced current forming 'N' letter with arrowheads at tips.",
                "3. Draw receding North pole with clockwise induced current forming 'S' letter showing attraction opposing motion."
            ]
        },
        "keyPointsAndKeywords": [
            "Magnetic Flux Change Rate (dΦ/dt)",
            "Opposition to Flux Change (Lenz's Law)",
            "Mechanical Work Conversion to Electrical Energy",
            "Joule Heat Dissipation (I²Rt)",
            "Conservation of Energy Principle"
        ],
        "termsGlossary": [
            {
                "symbol": "\\varepsilon",
                "term": "Induced Electromotive Force (EMF)",
                "definition": "Potential difference generated around a closed circuit due to changing magnetic flux, measured in Volts (V)."
            },
            {
                "symbol": "\\Phi_B",
                "term": "Magnetic Flux",
                "definition": "Surface integral of magnetic field passing normally through a loop: $\\Phi_B = \\int \\vec{B} \\cdot d\\vec{A}$, measured in Webers (Wb) or $\\text{T}\\cdot\\text{m}^2$."
            },
            {
                "symbol": "N",
                "term": "Number of Turns",
                "definition": "Total number of tightly wound conducting loops in the coil."
            },
            {
                "symbol": "R",
                "term": "Circuit Resistance",
                "definition": "Ohmic resistance of the conducting coil loop, measured in Ohms (Ω)."
            }
        ],
        "markingScheme": [
            "1 Mark: Precise statement of Faraday's first and second laws with formula $\\varepsilon = -d\\Phi/dt$.",
            "1 Mark: Precise statement of Lenz's law.",
            "1 Mark: Complete justification of energy conservation (mechanical work against repulsion converting to electrical energy)."
        ],
        "examinerTips": "In the formula $\\varepsilon = -d\\Phi_B/dt$, state clearly that the negative sign is the mathematical representation of Lenz's law."
    },

    # Q4: Transformer
    {
        "id": "imp-phy-4",
        "number": 4,
        "title": "Transformer: Principle, Construction, Working Derivation & Energy Losses",
        "shortLabel": "Transformer (Working & Losses)",
        "chapterId": "phy-ch-7",
        "chapterTitle": "Alternating Current",
        "unit": "Electromagnetic Induction & Alternating Current",
        "marks": "5 Marks",
        "marksNum": 5,
        "category": "Derivation",
        "frequency": "Very High Frequency (CBSE 2024, 2023, 2020, 2019)",
        "questionPrompt": "(a) State the working principle of an AC transformer.\n(b) With the help of a labeled diagram, explain its construction and derive the relation between primary and secondary voltages and currents.\n(c) Name and explain four major sources of energy loss in a practical transformer, and state how each is minimized.",
        "ncertRef": {
            "textbook": "NCERT Physics Class 12, Part 1",
            "chapter": "Chapter 7: Alternating Current",
            "section": "Section 7.9: Transformers (pp. 259–262)",
            "equations": "Eqs. (7.45), (7.46), (7.47), (7.48)",
            "figures": "Fig. 7.20",
            "summary": "Principle of mutual induction, voltage ratio derivation, ideal power conservation, and four major real energy dissipation mechanisms."
        },
        "theory": [
            "Principle: An AC transformer works on the principle of Mutual Induction — whenever alternating current in the primary coil changes, it creates a time-varying magnetic flux in the common soft iron core, which links with the secondary coil and induces an alternating emf across it.",
            "A transformer cannot operate on Direct Current (DC) because steady direct current produces constant magnetic flux ($d\\Phi/dt = 0$), resulting in zero induced secondary voltage.",
            "Step-up Transformer: Number of turns in secondary exceeds primary ($N_s > N_p$), stepping up voltage ($V_s > V_p$) while stepping down current ($I_s < I_p$).",
            "Step-down Transformer: Number of turns in primary exceeds secondary ($N_p > N_s$), stepping down voltage ($V_s < V_p$) while stepping up current ($I_s > I_p$)."
        ],
        "derivations": [
            {
                "name": "Working Derivation: Voltage & Current Transformation Ratios",
                "setup": "Consider an ideal transformer having primary coil of $N_p$ turns and secondary coil of $N_s$ turns wound on a laminated soft iron core. Assume zero flux leakage so that same flux $\\Phi$ links each turn of both primary and secondary coils.",
                "steps": [
                    {
                        "text": "By Faraday's law of induction, alternating flux $\\Phi$ induces back emf in the primary coil:",
                        "equation": "\\varepsilon_p = -N_p \\frac{d\\Phi}{dt}"
                    },
                    {
                        "text": "Similarly, the induced emf in the secondary coil is:",
                        "equation": "\\varepsilon_s = -N_s \\frac{d\\Phi}{dt}"
                    },
                    {
                        "text": "For an ideal transformer with negligible winding resistance, primary terminal voltage $V_p \\approx \\varepsilon_p$ and open-circuit secondary voltage $V_s \\approx \\varepsilon_s$. Dividing equations gives:",
                        "equation": "\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = K \\quad (\\text{Transformation Ratio})"
                    },
                    {
                        "text": "For an ideal transformer with 100% efficiency, electrical power input equals electrical power output:",
                        "equation": "P_{\\text{in}} = P_{\\text{out}} \\quad \\implies \\quad V_p I_p = V_s I_s"
                    },
                    {
                        "text": "Hence, current ratio is inversely proportional to voltage ratio:",
                        "equation": "\\frac{I_p}{I_s} = \\frac{V_s}{V_p} = \\frac{N_s}{N_p}"
                    }
                ],
                "specialCases": [
                    {
                        "title": "Real Transformer Efficiency:",
                        "text": "In practical transformers, efficiency is less than 100% due to core and winding losses:",
                        "equation": "\\eta = \\frac{P_{\\text{out}}}{P_{\\text{in}}} \\times 100\\% = \\frac{V_s I_s}{V_p I_p} \\times 100\\%"
                    }
                ],
                "finalFormula": "\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s} = K"
            }
        ],
        "diagram": {
            "hasDiagram": True,
            "diagramId": "transformer",
            "title": "AC Transformer Construction & Flux Linkage",
            "examDrawingGuide": [
                "1. Draw rectangular laminated soft iron core with thin insulated sheets visible.",
                "2. Draw Primary Coil on left limb with $N_p$ turns connected to AC source $V_p \\sim$.",
                "3. Draw Secondary Coil on right limb with $N_s$ turns connected to load resistor $R_L$.",
                "4. Show dashed magnetic flux loop $\\Phi(t)$ circulating through the iron core linking both coils."
            ]
        },
        "keyPointsAndKeywords": [
            "Mutual Induction Principle",
            "Laminated Soft Iron Core",
            "Transformation Ratio (K = Ns/Np)",
            "Eddy Current Losses & Lamination",
            "Copper Loss (I²R)",
            "Hysteresis Loss & Soft Iron Magnetic Retentivity",
            "Flux Leakage"
        ],
        "termsGlossary": [
            {
                "symbol": "N_p, N_s",
                "term": "Primary & Secondary Turns",
                "definition": "Number of tightly wound copper turns in the primary and secondary coils respectively."
            },
            {
                "symbol": "V_p, V_s",
                "term": "Primary & Secondary Voltages",
                "definition": "RMS potential difference across the input primary terminals and output secondary terminals."
            },
            {
                "symbol": "I_p, I_s",
                "term": "Primary & Secondary Currents",
                "definition": "Alternating currents flowing through the primary and secondary circuits."
            },
            {
                "symbol": "K = N_s/N_p",
                "term": "Transformation Ratio",
                "definition": "Ratio of secondary turns to primary turns; $K > 1$ for step-up, $K < 1$ for step-down."
            },
            {
                "symbol": "\\text{Eddy Currents}",
                "term": "Eddy Currents",
                "definition": "Circulating closed loops of induced electric currents in bulk iron cores produced by time-varying magnetic flux, causing thermal energy loss."
            }
        ],
        "markingScheme": [
            "1 Mark: Principle of mutual induction with explanation.",
            "1.5 Marks: Labeled diagram showing primary, secondary, and laminated core.",
            "1 Mark: Mathematical derivation of voltage and current transformation ratio $V_s/V_p = N_s/N_p = I_p/I_s$.",
            "1.5 Marks: Description of 4 real energy losses (Copper loss, Eddy current loss, Hysteresis loss, Flux leakage) with mitigation methods."
        ],
        "examinerTips": "In explaining energy losses: (1) Copper loss is minimized by thick wires; (2) Eddy current loss is minimized by laminated core; (3) Hysteresis loss is minimized by soft iron (narrow hysteresis loop); (4) Flux leakage is minimized by winding primary and secondary over one another."
    },

    # Q5: Moving Coil Galvanometer
    {
        "id": "imp-phy-5",
        "number": 5,
        "title": "Moving Coil Galvanometer: Principle, Torque Derivation & Radial Field",
        "shortLabel": "Moving Coil Galvanometer (Torque & Radial Field)",
        "chapterId": "phy-ch-4",
        "chapterTitle": "Moving Charges and Magnetism",
        "unit": "Magnetism",
        "marks": "5 Marks",
        "marksNum": 5,
        "category": "Derivation",
        "frequency": "Guaranteed Core 5-Mark Question (CBSE 2024 SQP, 2023, 2022, 2020)",
        "questionPrompt": "(a) State the principle of a Moving Coil Galvanometer.\n(b) With the help of a neat diagram, derive the expression for deflecting torque on the coil.\n(c) Explain the function of: (i) Cylindrical soft iron core, and (ii) Radial magnetic field.\n(d) Define current sensitivity and voltage sensitivity.",
        "ncertRef": {
            "textbook": "NCERT Physics Class 12, Part 1",
            "chapter": "Chapter 4: Moving Charges and Magnetism",
            "section": "Section 4.10: The Moving Coil Galvanometer (pp. 163–165)",
            "equations": "Eqs. (4.40), (4.41), (4.42)",
            "figures": "Figs. 4.24, 4.25",
            "summary": "Torque on rectangular loop in uniform field, role of concave pole pieces in generating radial magnetic field, and sensitivity formulas."
        },
        "theory": [
            "Principle: When a current-carrying coil is placed in an external magnetic field, it experiences a deflecting magnetic torque: $$\\tau_{\\text{def}} = N I A B \\sin\\theta$$",
            "Function of Radial Magnetic Field: Created by concave cylindrical pole pieces and a soft iron core. It ensures that the magnetic field lines are always parallel to the plane of the coil (perpendicular to coil's area vector, $\\theta = 90^\\circ$) at every rotational position, keeping torque maximum and deflection linear: $\\phi \\propto I$.",
            "Function of Soft Iron Core: Being ferromagnetic with high relative permeability ($\\mu_r \\gg 1$), it concentrates and intensifies magnetic flux lines inside the air gap, increasing sensitivity.",
            "Restoring Couple: Provided by the torsion of a phosphor-bronze suspension ribbon or hair-spring, resisting deflection with torque $\\tau_{\\text{rest}} = k \\phi$."
        ],
        "derivations": [
            {
                "name": "Derivation of Deflection & Sensitivity Equations",
                "setup": "Consider a rectangular coil of $N$ turns, length $l$, and breadth $b$ (area $A = l \\cdot b$) carrying steady current $I$, suspended in a radial magnetic field of flux density $B$. Let $k$ be the restoring couple per unit twist of the phosphor-bronze suspension.",
                "steps": [
                    {
                        "text": "In a radial magnetic field, the plane of the coil is always parallel to field lines $\\vec{B}$, meaning angle between area normal and field is always $\\theta = 90^\\circ$ ($\\sin 90^\\circ = 1$). Deflecting torque is:",
                        "equation": "\\tau_{\\text{def}} = N I A B"
                    },
                    {
                        "text": "As the coil rotates through angle $\\phi$, restoring torque developed in the phosphor-bronze spring is:",
                        "equation": "\\tau_{\\text{rest}} = k \\cdot \\phi"
                    },
                    {
                        "text": "At rotational mechanical equilibrium, deflecting torque equals restoring torque:",
                        "equation": "N I A B = k \\phi"
                    },
                    {
                        "text": "Hence, angular deflection $\\phi$ is directly proportional to current $I$ (linear scale):",
                        "equation": "\\phi = \\left(\\frac{N A B}{k}\\right) I \\quad \\implies \\quad \\phi \\propto I"
                    },
                    {
                        "text": "Current Sensitivity $I_s$ is deflection per unit current:",
                        "equation": "I_s = \\frac{\\phi}{I} = \\frac{N A B}{k}"
                    },
                    {
                        "text": "Voltage Sensitivity $V_s$ is deflection per unit voltage ($V = I R$):",
                        "equation": "V_s = \\frac{\\phi}{V} = \\frac{\\phi}{I R} = \\frac{N A B}{k R}"
                    }
                ],
                "specialCases": [
                    {
                        "title": "Sensitivity Condition:",
                        "text": "Increasing number of turns $N$ increases Current Sensitivity $I_s$, but does NOT necessarily increase Voltage Sensitivity $V_s$ because coil resistance $R$ increases proportionally ($R \\propto N$):",
                        "equation": "V_s = \\frac{I_s}{R} = \\text{constant}"
                    }
                ],
                "finalFormula": "\\phi = \\left(\\frac{N A B}{k}\\right) I, \\quad I_s = \\frac{N A B}{k}, \\quad V_s = \\frac{N A B}{k R}"
            }
        ],
        "diagram": {
            "hasDiagram": True,
            "diagramId": "galvanometer-torque",
            "title": "Moving Coil Galvanometer & Radial Field",
            "examDrawingGuide": [
                "1. Draw concave cylindrical North and South magnetic pole pieces.",
                "2. Draw central soft iron cylinder core with radial field lines pointing radially toward center.",
                "3. Draw rectangular copper coil suspended between poles by phosphor-bronze strip.",
                "4. Show upper torsion head, lower hair-spring, and pointer moving over linear circular scale."
            ]
        },
        "keyPointsAndKeywords": [
            "Radial Magnetic Field (sinθ = 1 at all angles)",
            "Concave Cylindrical Pole Pieces",
            "Cylindrical Soft Iron Core (High Permeability)",
            "Phosphor-Bronze Suspension (Low Torsion Constant k)",
            "Deflecting Torque τ = NIAB",
            "Restoring Torque τ = kφ",
            "Current Sensitivity (NAB/k)",
            "Voltage Sensitivity (NAB/kR)"
        ],
        "termsGlossary": [
            {
                "symbol": "k",
                "term": "Torsional Constant (Restoring Couple)",
                "definition": "Restoring torque produced per unit twist in the suspension spring/strip, measured in $\\text{N}\\cdot\\text{m/rad}$."
            },
            {
                "symbol": "\\phi",
                "term": "Angular Deflection",
                "definition": "Angle through which the coil rotates, indicated by the pointer on the linear scale."
            },
            {
                "symbol": "I_s",
                "term": "Current Sensitivity",
                "definition": "Deflection produced in the galvanometer when unit current passes through it: $I_s = \\phi/I = NAB/k$, measured in $\\text{rad/A}$ or $\\text{div/A}$."
            },
            {
                "symbol": "V_s",
                "term": "Voltage Sensitivity",
                "definition": "Deflection produced in the galvanometer per unit potential difference applied across its terminals: $V_s = \\phi/V = NAB/(kR)$, measured in $\\text{rad/V}$ or $\\text{div/V}$."
            },
            {
                "symbol": "B",
                "term": "Radial Magnetic Field",
                "definition": "Magnetic field whose lines of force are directed along the radii of cylindrical pole pieces, ensuring $\\vec{B}$ is always parallel to the plane of the coil."
            }
        ],
        "markingScheme": [
            "1 Mark: Statement of principle (torque on current loop in magnetic field).",
            "1.5 Marks: Labeled diagram showing concave poles, core, coil, and suspension.",
            "1.5 Marks: Derivation of $NIAB = k\\phi \\implies \\phi \\propto I$.",
            "1 Mark: Definitions of current and voltage sensitivity with explanations of soft iron core and radial field."
        ],
        "examinerTips": "Common mistake: forgetting to explain WHY the radial field is necessary. State explicitly: 'To ensure deflecting torque remains independent of the angle of rotation, producing a linear scale where deflection is directly proportional to current.'"
    }
]
