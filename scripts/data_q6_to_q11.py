# -*- coding: utf-8 -*-
"""
Questions 6 to 11 for CBSE Class 12 Physics Top 22 Questions
"""

questions_6_to_11 = [
    # Q6: Electric Flux & Dipole
    {
        "id": "imp-phy-6",
        "number": 6,
        "title": "Electric Flux through Closed Surface Containing an Electric Dipole",
        "shortLabel": "Electric Flux & Dipole (Gauss Law)",
        "chapterId": "phy-ch-1",
        "chapterTitle": "Electric Charges and Fields",
        "unit": "Electrostatics",
        "marks": "2 Marks",
        "marksNum": 2,
        "category": "Conceptual & Derivation",
        "frequency": "High Frequency Core Conceptual (CBSE 2024 SQP Q1, 2023, 2020)",
        "questionPrompt": "(a) Define electric flux. Write its SI unit.\n(b) An electric dipole of dipole moment p is enclosed by a closed Gaussian surface S. What is the total electric flux emerging through the surface? Does the electric field on the surface necessarily vanish?",
        "ncertRef": {
            "textbook": "NCERT Physics Class 12, Part 1",
            "chapter": "Chapter 1: Electric Charges and Fields",
            "section": "Sections 1.10 & 1.14 (pp. 25–27, 33–35)",
            "equations": "Eqs. (1.28), (1.31)",
            "figures": "Fig. 1.25",
            "summary": "Definition of electric flux, dipole charge balance (+q and -q summing to zero), and distinction between net flux and local field intensity."
        },
        "theory": [
            "Electric Flux $\\Phi_E$ is defined as the total number of electric field lines crossing normally through a given surface area. Mathematically: $$\\Phi_E = \\int \\vec{E} \\cdot d\\vec{A}$$",
            "SI unit of electric flux is $\\text{N}\\cdot\\text{m}^2\\text{C}^{-1}$ (or $\\text{V}\\cdot\\text{m}$). It is a scalar quantity.",
            "An electric dipole consists of two equal and opposite point charges ($+q$ and $-q$). Hence, the net enclosed charge inside any closed surface containing the entire dipole is identically zero: $$q_{\\text{enclosed}} = +q + (-q) = 0$$",
            "Crucial Exam Concept: Although the total electric flux through the enclosing surface is zero, the electric field $\\vec{E}$ at individual points on the surface is NOT zero. Field lines originate at $+q$, pass through the surface, and re-enter to terminate at $-q$."
        ],
        "derivations": [
            {
                "name": "Evaluation of Total Flux Using Gauss's Law",
                "setup": "Consider a closed Gaussian surface $S$ of arbitrary shape enclosing an electric dipole consisting of point charges $+q$ and $-q$ separated by distance $2a$.",
                "steps": [
                    {
                        "text": "By Gauss's Law, the total outward electric flux through any closed surface is proportional to the net charge enclosed:",
                        "equation": "\\Phi_E = \\oint_S \\vec{E} \\cdot d\\vec{A} = \\frac{q_{\\text{enclosed}}}{\\varepsilon_0}"
                    },
                    {
                        "text": "The algebraic sum of all charges enclosed by the Gaussian surface is:",
                        "equation": "q_{\\text{enclosed}} = (+q) + (-q) = 0"
                    },
                    {
                        "text": "Substituting the enclosed charge into Gauss's Law:",
                        "equation": "\\Phi_E = \\frac{0}{\\varepsilon_0} = 0"
                    },
                    {
                        "text": "Physical interpretation: The number of electric field lines leaving the surface from $+q$ equals the number of field lines entering the surface to terminate on $-q$. Hence, net flux vanishes:",
                        "equation": "\\Phi_{\\text{out}} - \\Phi_{\\text{in}} = 0"
                    }
                ],
                "specialCases": [
                    {
                        "title": "Local Electric Field vs Net Flux:",
                        "text": "Net flux is zero, but electric field at any point on the surface is finite due to proximity to individual charges:",
                        "equation": "\\vec{E} \\neq 0 \\quad \\text{even though} \\quad \\oint \\vec{E} \\cdot d\\vec{A} = 0"
                    }
                ],
                "finalFormula": "\\Phi_E = \\oint_S \\vec{E} \\cdot d\\vec{A} = 0, \\quad \\vec{E}_{\\text{surface}} \\neq 0"
            }
        ],
        "diagram": {
            "hasDiagram": True,
            "diagramId": "electric-flux-dipole",
            "title": "Closed Gaussian Surface Enclosing an Electric Dipole",
            "examDrawingGuide": [
                "1. Draw arbitrary closed boundary representing Gaussian surface $S$.",
                "2. Place $+q$ and $-q$ inside separated by distance $2a$.",
                "3. Draw curved electric field lines emerging outwards from $+q$ piercing through the surface.",
                "4. Draw field lines looping back and entering through the surface to terminate on $-q$, clearly showing equal inward and outward flux."
            ]
        },
        "keyPointsAndKeywords": [
            "Definition of Electric Flux (Φ = ∫ E · dA)",
            "SI Unit (N·m²/C or V·m)",
            "Net Enclosed Charge of Dipole = 0",
            "Gauss's Law Application (Φ = 0)",
            "Local Electric Field E ≠ 0 on Surface",
            "Inward Flux Cancels Outward Flux"
        ],
        "termsGlossary": [
            {
                "symbol": "\\Phi_E",
                "term": "Electric Flux",
                "definition": "Surface integral of electric field over a closed surface, scalar quantity measured in $\\text{N}\\cdot\\text{m}^2/\\text{C}$."
            },
            {
                "symbol": "\\vec{p}",
                "term": "Electric Dipole Moment",
                "definition": "Vector pointing from $-q$ to $+q$ of magnitude $p = q(2a)$, measured in Coulomb-metres ($\\text{C}\\cdot\\text{m}$)."
            },
            {
                "symbol": "q_{\\text{enclosed}}",
                "term": "Net Enclosed Charge",
                "definition": "Algebraic sum of all discrete charges bounded inside the chosen Gaussian surface."
            },
            {
                "symbol": "\\varepsilon_0",
                "term": "Permittivity of Free Space",
                "definition": "Constant of electrostatics ($8.854 \\times 10^{-12} \\text{ C}^2\\text{N}^{-1}\\text{m}^{-2}$)."
            }
        ],
        "markingScheme": [
            "1 Mark: Definition of electric flux and correct SI unit ($\text{N}\cdot\text{m}^2/\text{C}$ or $\text{V}\cdot\text{m}$).",
            "0.5 Mark: Proof that total flux $\Phi_E = 0$ using Gauss's law since $q_{\text{net}} = 0$.",
            "0.5 Mark: Explicit clarification that $\vec{E} \neq 0$ on the surface."
        ],
        "examinerTips": "Do NOT write that electric field is zero on the surface! Only the total integral (flux) is zero because lines entering equal lines leaving."
    },

    # Q7: Equipotential Surfaces & Potential Gradient
    {
        "id": "imp-phy-7",
        "number": 7,
        "title": "Equipotential Surfaces: Definition, Properties & Potential Gradient Relation",
        "shortLabel": "Equipotential Surfaces & E = -dV/dr",
        "chapterId": "phy-ch-2",
        "chapterTitle": "Electrostatic Potential and Capacitance",
        "unit": "Electrostatics",
        "marks": "3 Marks",
        "marksNum": 3,
        "category": "Derivation & Conceptual",
        "frequency": "Guaranteed Core Question (CBSE 2024, 2023, 2022, 2020)",
        "questionPrompt": "(a) What is an equipotential surface? State its two important properties.\n(b) Prove that electric field is always perpendicular to the equipotential surface at every point.\n(c) Derive the relation between electric field and electrostatic potential: E = -dV/dr.\n(d) Sketch equipotential surfaces for: (i) A single positive point charge, and (ii) A uniform electric field.",
        "ncertRef": {
            "textbook": "NCERT Physics Class 12, Part 1",
            "chapter": "Chapter 2: Electrostatic Potential and Capacitance",
            "section": "Sections 2.4 & 2.5 (pp. 60–63)",
            "equations": "Eqs. (2.19), (2.20)",
            "figures": "Figs. 2.9, 2.10, 2.11",
            "summary": "Definition of equipotential surface, zero work theorem, normal field vector proof, and differential relation between field and potential."
        },
        "theory": [
            "An Equipotential Surface is any geometric surface that has the same constant electrostatic potential at all points ($V = \\text{constant}$).",
            "Property 1: No work is done in moving a test charge between any two points on an equipotential surface: $$W = q_0(V_B - V_A) = q_0(0) = 0$$",
            "Property 2: Electric field lines are always mutually perpendicular (normal) to the equipotential surface at every point.",
            "Property 3: Two equipotential surfaces can never intersect each other (otherwise two distinct potentials would exist at the line of intersection).",
            "Property 4: Equipotential surfaces are crowded closer together in regions of strong electric field and spaced wider apart in regions of weak field."
        ],
        "derivations": [
            {
                "name": "Proof 1: Electric Field is Perpendicular to Equipotential Surface",
                "setup": "Consider two infinitesimally close points $A$ and $B$ lying on the same equipotential surface, separated by displacement vector $d\\vec{r}$. Let electric field at this location be $\\vec{E}$.",
                "steps": [
                    {
                        "text": "Work done by electrostatic force in displacing test charge $q_0$ from $A$ to $B$ is:",
                        "equation": "dW = \\vec{F} \\cdot d\\vec{r} = q_0 (\\vec{E} \\cdot d\\vec{r})"
                    },
                    {
                        "text": "By definition of electrostatic potential difference:",
                        "equation": "dW = -q_0 \\, dV"
                    },
                    {
                        "text": "Since points $A$ and $B$ lie on the same equipotential surface, potential difference vanishes ($dV = V_B - V_A = 0$):",
                        "equation": "q_0 (\\vec{E} \\cdot d\\vec{r}) = 0 \\quad \\implies \\quad \\vec{E} \\cdot d\\vec{r} = 0"
                    },
                    {
                        "text": "Expanding the scalar dot product:",
                        "equation": "E \\, dr \\cos\\theta = 0 \\quad (\\text{since } E \\neq 0 \\text{ and } dr \\neq 0 \\implies \\cos\\theta = 0)"
                    },
                    {
                        "text": "Hence, angle between electric field and displacement along the surface is $90^\\circ$:",
                        "equation": "\\theta = 90^\\circ \\quad \\implies \\quad \\vec{E} \\perp d\\vec{r}"
                    }
                ],
                "specialCases": [
                    {
                        "title": "Physical Conclusion:",
                        "text": "Electric field has zero tangential component along an equipotential surface; it is entirely directed along the surface normal:",
                        "equation": "E_{\\parallel} = 0, \\quad E_{\\perp} = |\\vec{E}|"
                    }
                ],
                "finalFormula": "\\vec{E} \\perp \\text{Equipotential Surface}"
            },
            {
                "name": "Proof 2: Potential Gradient Relation (E = -dV/dr)",
                "setup": "Consider two parallel equipotential surfaces $A$ and $B$ separated by small normal perpendicular distance $dr$, having potentials $V$ and $V - dV$ respectively.",
                "steps": [
                    {
                        "text": "Work done in moving unit positive charge ($q_0 = +1$) from surface $B$ to surface $A$ against the electric field $\\vec{E}$ is:",
                        "equation": "dW = |\\vec{F}_{\\text{ext}}| \\, dr = E \\, dr"
                    },
                    {
                        "text": "By definition, work done per unit positive charge equals the potential difference between the surfaces:",
                        "equation": "dW = V_A - V_B = V - (V - dV) = dV"
                    },
                    {
                        "text": "Equating mechanical work to potential increase along the field direction (field points towards decreasing potential):",
                        "equation": "-E \\, dr = dV"
                    },
                    {
                        "text": "Hence, electric field magnitude equals the negative spatial derivative of potential:",
                        "equation": "E = -\\frac{dV}{dr}"
                    }
                ],
                "specialCases": [
                    {
                        "title": "Physical Meaning of Negative Sign:",
                        "text": "The negative sign indicates that electric field $\\vec{E}$ points in the direction of maximum rate of decrease of electrostatic potential:",
                        "equation": "\\vec{E} = -\\nabla V = -\\frac{\\partial V}{\\partial r}\\hat{r}"
                    }
                ],
                "finalFormula": "E = -\\frac{dV}{dr}"
            }
        ],
        "diagram": {
            "hasDiagram": True,
            "diagramId": "equipotential-surfaces",
            "title": "Equipotential Surfaces & Normal Field Lines",
            "examDrawingGuide": [
                "1. Positive Point Charge: Draw concentric spherical circles around charge $+q$; show spacing increasing with distance ($r$); draw radial outward field lines perpendicular to circles.",
                "2. Uniform Electric Field: Draw parallel equidistant vertical lines for field $\\vec{E}$; draw parallel equidistant planar sheets perpendicular to field lines."
            ]
        },
        "keyPointsAndKeywords": [
            "Constant Potential Surface (V = const)",
            "Zero Work Done (W = 0)",
            "Normal Orientation of Field (E ⟂ surface)",
            "Non-Intersecting Nature",
            "Potential Gradient (E = -dV/dr)",
            "Negative Sign Significance (Direction of Decreasing Potential)"
        ],
        "termsGlossary": [
            {
                "symbol": "V",
                "term": "Electrostatic Potential",
                "definition": "Work done in bringing unit positive test charge from infinity to that point, measured in Volts (V) or J/C."
            },
            {
                "symbol": "\\frac{dV}{dr}",
                "term": "Potential Gradient",
                "definition": "Rate of change of potential with respect to spatial displacement, measured in $\\text{V/m}$."
            },
            {
                "symbol": "d\\vec{r}",
                "term": "Displacement Vector",
                "definition": "Infinitesimal vector separating two adjacent points on or between equipotential surfaces."
            }
        ],
        "markingScheme": [
            "1 Mark: Definition of equipotential surface and two properties.",
            "1 Mark: Derivation showing $W = q_0(\vec{E}\cdot d\vec{r}) = 0 \implies \vec{E} \perp d\vec{r}$.",
            "1 Mark: Derivation of $E = -dV/dr$ and sketches for point charge and uniform field."
        ],
        "examinerTips": "In diagrams, ensure field lines are explicitly marked with perpendicular symbols ($90^\\circ$) at the intersection with equipotential surfaces."
    },

    # Q8: Electric Field of Point Charge & Superposition
    {
        "id": "imp-phy-8",
        "number": 8,
        "title": "Electric Field Due to a Point Charge (Derivation & Superposition)",
        "shortLabel": "Point Charge Field & Superposition",
        "chapterId": "phy-ch-1",
        "chapterTitle": "Electric Charges and Fields",
        "unit": "Electrostatics",
        "marks": "3 Marks",
        "marksNum": 3,
        "category": "Derivation",
        "frequency": "High Frequency Foundation Question (CBSE 2024, 2023, 2021, 2019)",
        "questionPrompt": "(a) Define electric field intensity at a point. Write its SI unit.\n(b) Derive the expression for electric field intensity at distance r from an isolated point charge q placed in vacuum.\n(c) State the principle of superposition of electric fields for a system of n discrete charges.",
        "ncertRef": {
            "textbook": "NCERT Physics Class 12, Part 1",
            "chapter": "Chapter 1: Electric Charges and Fields",
            "section": "Sections 1.8 & 1.9 (pp. 18–23)",
            "equations": "Eqs. (1.6), (1.8), (1.9)",
            "figures": "Figs. 1.13, 1.14",
            "summary": "Coulomb interaction with test charge, definition of electric field as force per unit charge, and vector sum formulation."
        },
        "theory": [
            "Electric Field Intensity $\\vec{E}$ at a point in space is defined as the electrostatic force experienced per unit positive test charge placed at that point: $$\\vec{E} = \\lim_{q_0 \\to 0} \\frac{\\vec{F}}{q_0}$$",
            "The test charge $q_0$ must be vanishingly small ($q_0 \\to 0$) so that its presence does not distort the source charge distribution.",
            "SI unit of electric field intensity is $\\text{N/C}$ (Newtons per Coulomb) or $\\text{V/m}$ (Volts per metre). It is a vector quantity.",
            "Direction: Radially outward away from positive source charge ($+q$), and radially inward towards negative source charge ($-q$)."
        ],
        "derivations": [
            {
                "name": "Derivation of Electric Field of an Isolated Point Charge",
                "setup": "Consider an isolated point charge $+q$ situated at origin $O$ in vacuum. Let $P$ be an arbitrary field point at position vector $\\vec{r}$ ($|\\vec{r}| = r$). Place an infinitesimal positive test charge $q_0$ at $P$.",
                "steps": [
                    {
                        "text": "By Coulomb's Law, the electrostatic force $\\vec{F}$ exerted by source charge $q$ on test charge $q_0$ is:",
                        "equation": "\\vec{F} = \\frac{1}{4\\pi \\varepsilon_0} \\frac{q \\, q_0}{r^2} \\hat{r}"
                    },
                    {
                        "text": "where $\\hat{r} = \\vec{r}/r$ is the unit vector directed radially outward from source charge $O$ toward field point $P$.",
                        "equation": "\\hat{r} = \\frac{\\vec{r}}{|\\vec{r}|}"
                    },
                    {
                        "text": "By definition, the electric field intensity $\\vec{E}$ at point $P$ is the force per unit test charge:",
                        "equation": "\\vec{E} = \\frac{\\vec{F}}{q_0} = \\frac{1}{q_0} \\left( \\frac{1}{4\\pi \\varepsilon_0} \\frac{q \\, q_0}{r^2} \\hat{r} \\right)"
                    },
                    {
                        "text": "Canceling the test charge $q_0$ yields the vector electric field expression:",
                        "equation": "\\vec{E} = \\frac{1}{4\\pi \\varepsilon_0} \\frac{q}{r^2} \\hat{r}"
                    },
                    {
                        "text": "The scalar magnitude of the electric field depends strictly on radial distance $r$:",
                        "equation": "E = \\frac{1}{4\\pi \\varepsilon_0} \\frac{q}{r^2} \\quad \\implies \\quad E \\propto \\frac{1}{r^2}"
                    }
                ],
                "specialCases": [
                    {
                        "title": "Superposition Principle for n Charges:",
                        "text": "The resultant field due to a system of discrete charges $q_1, q_2, \\dots, q_n$ is the vector sum of individual fields:",
                        "equation": "\\vec{E}_{\\text{total}} = \\sum_{i=1}^n \\vec{E}_i = \\frac{1}{4\\pi\\varepsilon_0} \\sum_{i=1}^n \\frac{q_i}{r_i^2}\\hat{r}_i"
                    }
                ],
                "finalFormula": "\\vec{E} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{r^2}\\hat{r}"
            }
        ],
        "diagram": {
            "hasDiagram": True,
            "diagramId": "point-charge-field",
            "title": "Radial Field of a Point Charge",
            "examDrawingGuide": [
                "1. Draw source charge $+q$ at origin $O$.",
                "2. Mark field point $P$ at distance $r$ along position vector $\\vec{r}$.",
                "3. Draw test charge $q_0$ at $P$ and show force vector $\\vec{F}$ pointing along radial unit vector $\\hat{r}$.",
                "4. Draw radially diverging field vectors $\\vec{E}$ around $+q$ with lengths diminishing as $1/r^2$."
            ]
        },
        "keyPointsAndKeywords": [
            "Force per Unit Test Charge (E = F/q₀)",
            "Vanishing Test Charge Condition (q₀ → 0)",
            "Inverse Square Law (E ∝ 1/r²)",
            "Spherical Symmetry of Field",
            "Vector Superposition Principle"
        ],
        "termsGlossary": [
            {
                "symbol": "\\vec{E}",
                "term": "Electric Field Intensity",
                "definition": "Electrostatic force per unit positive charge, measured in N/C or V/m."
            },
            {
                "symbol": "q_0",
                "term": "Test Charge",
                "definition": "Vanishingly small positive charge used to probe the electrostatic field without perturbing it."
            },
            {
                "symbol": "\\hat{r}",
                "term": "Radial Unit Vector",
                "definition": "Dimensionless unit vector pointing along the line joining source charge to field point."
            },
            {
                "symbol": "\\varepsilon_0",
                "term": "Permittivity of Free Space",
                "definition": "Vacuum electrical permittivity constant ($8.854 \\times 10^{-12} \\text{ C}^2/\\text{N}\\cdot\\text{m}^2$)."
            }
        ],
        "markingScheme": [
            "1 Mark: Definition of electric field intensity and limit form with SI units.",
            "1.5 Marks: Derivation from Coulomb's law showing cancellation of test charge $q_0$.",
            "0.5 Mark: Statement and mathematical formulation of the superposition principle."
        ],
        "examinerTips": "Remember to state why $q_0 \\to 0$: 'So that the test charge does not disturb the position of the source charge distribution.'"
    },

    # Q9: Electric Field Lines & Non-Intersection
    {
        "id": "imp-phy-9",
        "number": 9,
        "title": "Properties of Electric Field Lines & Why They Never Intersect",
        "shortLabel": "Electric Field Lines & Non-Intersection",
        "chapterId": "phy-ch-1",
        "chapterTitle": "Electric Charges and Fields",
        "unit": "Electrostatics",
        "marks": "3 Marks",
        "marksNum": 3,
        "category": "Conceptual Proof",
        "frequency": "Core CBSE Conceptual Question (CBSE 2024, 2023, 2020, 2018)",
        "questionPrompt": "(a) What is an electric field line? State four characteristic properties of electric field lines.\n(b) Prove that two electric field lines can never intersect each other.\n(c) Why do electrostatic field lines never form closed loops?",
        "ncertRef": {
            "textbook": "NCERT Physics Class 12, Part 1",
            "chapter": "Chapter 1: Electric Charges and Fields",
            "section": "Section 1.9: Electric Field Lines (pp. 23–26)",
            "equations": "Conceptual geometry",
            "figures": "Figs. 1.15, 1.16, 1.17",
            "summary": "Visual geometric representation of electric fields, tangent rule for direction, non-intersection proof, and conservative nature."
        },
        "theory": [
            "An Electric Field Line is a continuous curve drawn in an electric field such that the tangent to it at any point gives the direction of electric field intensity at that point.",
            "Property 1: Field lines originate from positive charges ($+q$) and terminate at negative charges ($-q$). For an isolated single charge, they extend to or from infinity.",
            "Property 2: The tangent drawn at any point on the field line gives the unambiguous direction of the electric field vector $\\vec{E}$ at that location.",
            "Property 3: Two electric field lines can NEVER intersect each other.",
            "Property 4: Electrostatic field lines never form closed continuous loops because electrostatic fields are conservative in nature ($$\\oint \\vec{E} \\cdot d\\vec{l} = 0$$).",
            "Property 5: The relative density of field lines (number of lines per unit cross-sectional area) is proportional to the magnitude of the electric field."
        ],
        "derivations": [
            {
                "name": "Rigorous Proof: Non-Intersection of Electric Field Lines",
                "setup": "We prove by contradiction (reductio ad absurdum). Suppose two electric field lines $L_1$ and $L_2$ intersect at a common spatial point $P$.",
                "steps": [
                    {
                        "text": "By definition, the tangent to a field line represents the direction of the resultant electric field vector $\\vec{E}$ at that point.",
                        "equation": "\\vec{E} \\parallel \\text{Tangent to Field Line}"
                    },
                    {
                        "text": "Since curve $L_1$ passes through point $P$, we can draw tangent $T_1$ representing electric field direction $\\vec{E}_1$.",
                        "equation": "\\vec{E}_1 \\text{ along tangent } T_1"
                    },
                    {
                        "text": "Simultaneously, curve $L_2$ passes through the same point $P$, so we can draw a distinct tangent $T_2$ representing field direction $\\vec{E}_2$.",
                        "equation": "\\vec{E}_2 \\text{ along tangent } T_2"
                    },
                    {
                        "text": "This implies that at the single point $P$, the electric field has TWO different directions simultaneously:",
                        "equation": "\\vec{E}(P) = \\vec{E}_1 \\quad \\text{and} \\quad \\vec{E}(P) = \\vec{E}_2 \\quad (T_1 \\neq T_2)"
                    },
                    {
                        "text": "This is physically impossible because at any given point in space, there can only be ONE unique resultant electric field vector. Hence, two field lines can never cross:",
                        "equation": "\\text{Contradiction} \\implies \\text{Field lines cannot intersect}"
                    }
                ],
                "specialCases": [
                    {
                        "title": "Why No Closed Loops?",
                        "text": "If field lines formed closed loops, work done in moving a test charge around the closed loop would be non-zero, violating the conservative nature of electrostatic forces:",
                        "equation": "\\oint \\vec{E} \\cdot d\\vec{l} = 0 \\quad (\\text{Conservative Field})"
                    }
                ],
                "finalFormula": "\\text{Two field lines cannot intersect: Resultant } \\vec{E} \\text{ is uniquely defined}"
            }
        ],
        "diagram": {
            "hasDiagram": True,
            "diagramId": "field-lines-properties",
            "title": "Electric Field Lines: Properties & Contradiction Geometry",
            "examDrawingGuide": [
                "1. Draw hypothetical intersection of two curved field lines at point $P$.",
                "2. Draw two divergent tangent vectors $T_1$ and $T_2$ at point $P$ and label with a prominent 'Contradiction: Two Directions' callout.",
                "3. Draw correct field patterns for: (i) Isolated positive charge (radial spokes outward); (ii) Dipole (smooth curves from $+q$ to $-q$)."
            ]
        },
        "keyPointsAndKeywords": [
            "Tangent Gives Direction of Field",
            "Proof by Contradiction",
            "Uniqueness of Resultant Field Vector",
            "Conservative Electrostatic Field",
            "No Closed Loops (∮ E · dl = 0)",
            "Field Line Density Proportional to Magnitude"
        ],
        "termsGlossary": [
            {
                "symbol": "\\vec{E}",
                "term": "Resultant Electric Field",
                "definition": "Unique net electrostatic force per unit charge at a given spatial point."
            },
            {
                "symbol": "T_1, T_2",
                "term": "Tangent Vectors",
                "definition": "Geometric tangents indicating instantaneous direction of the field curve."
            },
            {
                "symbol": "\\oint \\vec{E}\\cdot d\\vec{l}",
                "term": "Circulation Integral",
                "definition": "Work done per unit charge around a closed contour, identically zero for static conservative fields."
            }
        ],
        "markingScheme": [
            "1 Mark: Definition of electric field lines and two properties.",
            "1 Mark: Complete contradiction proof explaining why two tangents cannot exist at one point.",
            "1 Mark: Justification for why field lines cannot form closed loops (conservative nature)."
        ],
        "examinerTips": "In your answer, use the exact phrase: 'A point cannot have two directions of resultant electric field at the same time.'"
    },

    # Q10: Parallel Plate Capacitor with & without Dielectric
    {
        "id": "imp-phy-10",
        "number": 10,
        "title": "Capacitance of Parallel Plate Capacitor: With & Without Dielectric Slab",
        "shortLabel": "Capacitor with Dielectric Slab",
        "chapterId": "phy-ch-2",
        "chapterTitle": "Electrostatic Potential and Capacitance",
        "unit": "Electrostatics",
        "marks": "5 Marks",
        "marksNum": 5,
        "category": "Derivation",
        "frequency": "Guaranteed 5-Mark Question (CBSE 2024 SQP Q31, 2023, 2020, 2019)",
        "questionPrompt": "(a) Define capacitance of a conductor. Write its SI unit.\n(b) Derive an expression for the capacitance of a parallel plate capacitor having plate area A and plate separation d in vacuum.\n(c) A dielectric slab of thickness t (t < d) and dielectric constant K is inserted between the plates. Derive the new formula for capacitance.",
        "ncertRef": {
            "textbook": "NCERT Physics Class 12, Part 1",
            "chapter": "Chapter 2: Electrostatic Potential and Capacitance",
            "section": "Sections 2.8, 2.9, 2.10 (pp. 73–79)",
            "equations": "Eqs. (2.35), (2.41), (2.46)",
            "figures": "Figs. 2.25, 2.26, 2.27",
            "summary": "Uniform electric field between plates, definition of capacitance, dielectric polarization, and modified potential difference."
        },
        "theory": [
            "Capacitance $C$ of a capacitor is defined as the ratio of charge $Q$ on either conducting plate to the potential difference $V$ maintained between them: $$C = \\frac{Q}{V}$$",
            "SI unit of capacitance is the Farad (F) ($1\\text{ F} = 1\\text{ C/V}$). Practical capacitors use microfarads ($\\mu\\text{F}$) or picofarads ($\\text{pF}$).",
            "When a dielectric slab is introduced into an electric field, induced bound polarization charges appear on its faces, creating an internal opposing field $\\vec{E}_p$.",
            "The net electric field inside the dielectric is reduced by factor $K$ (dielectric constant): $$E = \\frac{E_0}{K}$$",
            "Because the electric field is reduced, the potential difference between plates decreases ($V < V_0$), causing capacitance to increase ($C > C_0$)."
        ],
        "derivations": [
            {
                "name": "Part 1: Capacitance in Vacuum (No Dielectric)",
                "setup": "Consider two parallel planar conducting plates of area $A$ separated by small distance $d$ in vacuum ($d^2 \\ll A$). The plates carry equal and opposite charges $+Q$ and $-Q$, corresponding to uniform surface charge density $\\sigma = Q/A$.",
                "steps": [
                    {
                        "text": "By Gauss's Law, the electric fields produced by the two plates add constructively in the region between them:",
                        "equation": "E_0 = \\frac{\\sigma}{2\\varepsilon_0} + \\frac{\\sigma}{2\\varepsilon_0} = \\frac{\\sigma}{\\varepsilon_0} = \\frac{Q}{\\varepsilon_0 A}"
                    },
                    {
                        "text": "Since the field is uniform, the electrostatic potential difference $V_0$ between the plates is:",
                        "equation": "V_0 = E_0 \\cdot d = \\frac{Q \\, d}{\\varepsilon_0 A}"
                    },
                    {
                        "text": "By definition of capacitance, $C_0 = Q / V_0$:",
                        "equation": "C_0 = \\frac{Q}{(Q d) / (\\varepsilon_0 A)} = \\frac{\\varepsilon_0 A}{d}"
                    }
                ],
                "specialCases": [
                    {
                        "title": "Dependence on Geometry:",
                        "text": "Capacitance depends only on geometric factors (area $A$ and separation $d$) and medium permittivity $\\varepsilon_0$, independent of charge $Q$:",
                        "equation": "C_0 \\propto A, \\quad C_0 \\propto \\frac{1}{d}"
                    }
                ],
                "finalFormula": "C_0 = \\frac{\\varepsilon_0 A}{d}"
            },
            {
                "name": "Part 2: Capacitance with Dielectric Slab of Thickness t (t < d)",
                "setup": "A dielectric slab of thickness $t < d$ and dielectric constant $K$ is introduced between the plates parallel to them. The region $(d - t)$ contains vacuum/air, and thickness $t$ contains dielectric.",
                "steps": [
                    {
                        "text": "Electric field in the air/vacuum region of thickness $(d - t)$ remains unchanged:",
                        "equation": "E_0 = \\frac{\\sigma}{\\varepsilon_0} = \\frac{Q}{\\varepsilon_0 A}"
                    },
                    {
                        "text": "Electric field inside the dielectric slab of thickness $t$ is reduced by factor $K$ due to dielectric polarization:",
                        "equation": "E = \\frac{E_0}{K}"
                    },
                    {
                        "text": "Total potential difference $V$ across the plates is the sum of potentials across air and dielectric regions:",
                        "equation": "V = E_0(d - t) + E \\cdot t = E_0(d - t) + \\left(\\frac{E_0}{K}\\right)t"
                    },
                    {
                        "text": "Factoring out $E_0$:",
                        "equation": "V = E_0 \\left[ (d - t) + \\frac{t}{K} \\right] = E_0 \\left[ d - t\\left(1 - \\frac{1}{K}\\right) \\right]"
                    },
                    {
                        "text": "Substituting $E_0 = Q / (\\varepsilon_0 A)$:",
                        "equation": "V = \\frac{Q}{\\varepsilon_0 A} \\left[ d - t\\left(1 - \\frac{1}{K}\\right) \\right]"
                    },
                    {
                        "text": "Hence, the new capacitance $C = Q / V$ is:",
                        "equation": "C = \\frac{\\varepsilon_0 A}{d - t\\left(1 - \\frac{1}{K}\\right)}"
                    }
                ],
                "specialCases": [
                    {
                        "title": "Case (i) Completely Filled with Dielectric (t = d):",
                        "text": "When dielectric occupies the entire space between the plates:",
                        "equation": "C = \\frac{\\varepsilon_0 A}{d - d(1 - 1/K)} = K \\frac{\\varepsilon_0 A}{d} = K C_0"
                    },
                    {
                        "title": "Case (ii) Conducting Metal Slab (K → ∞, thickness t):",
                        "text": "For a conducting slab inserted between plates ($K = \\infty$):",
                        "equation": "C = \\frac{\\varepsilon_0 A}{d - t}"
                    }
                ],
                "finalFormula": "C = \\frac{\\varepsilon_0 A}{d - t(1 - 1/K)} \\quad \\xrightarrow{t=d} \\quad C = K C_0"
            }
        ],
        "diagram": {
            "hasDiagram": True,
            "diagramId": "capacitor-circuits",
            "title": "Parallel Plate Capacitor with Dielectric Slab",
            "examDrawingGuide": [
                "1. Draw two parallel vertical rectangular plates separated by distance $d$.",
                "2. Mark $+Q$ (surface charge $+\\sigma$) on left plate and $-Q$ (surface charge $-\\sigma$) on right plate.",
                "3. Draw dielectric slab of thickness $t$ placed in the gap.",
                "4. Show bound charges $-\\sigma_p$ on left slab face and $+\\sigma_p$ on right slab face.",
                "5. Label field $E_0$ in air gaps of width $(d-t)$ and reduced field $E = E_0/K$ inside slab."
            ]
        },
        "keyPointsAndKeywords": [
            "Uniform Field E₀ = σ/ε₀ = Q/(ε₀A)",
            "Vacuum Capacitance C₀ = ε₀A/d",
            "Dielectric Polarization",
            "Reduced Field Inside Slab (E = E₀/K)",
            "Total Potential Split V = E₀(d - t) + E·t",
            "Effective Separation Reduction d' = d - t(1 - 1/K)"
        ],
        "termsGlossary": [
            {
                "symbol": "C_0, C",
                "term": "Capacitance (Vacuum & Dielectric)",
                "definition": "Ratio of charge to potential difference, measured in Farads (F)."
            },
            {
                "symbol": "K",
                "term": "Dielectric Constant (Relative Permittivity)",
                "definition": "Ratio of capacitance with dielectric to capacitance in vacuum ($K = C/C_0 \\ge 1$)."
            },
            {
                "symbol": "t",
                "term": "Slab Thickness",
                "definition": "Physical thickness of the dielectric slab inserted between the capacitor plates ($t \\le d$)."
            },
            {
                "symbol": "E_p",
                "term": "Polarization Electric Field",
                "definition": "Opposing internal electric field generated by aligned molecular dipoles within the dielectric."
            }
        ],
        "markingScheme": [
            "1 Mark: Definition of capacitance and vacuum field derivation $E_0 = Q/(\\varepsilon_0 A)$.",
            "1 Mark: Derivation of vacuum capacitance $C_0 = \\varepsilon_0 A / d$.",
            "2 Marks: Derivation of potential difference with slab $V = E_0[d - t(1 - 1/K)]$ and capacitance formula.",
            "1 Mark: Special cases for $t = d$ ($C = KC_0$) and conducting slab ($K \\to \\infty$)."
        ],
        "examinerTips": "In writing potential $V$, clearly write $V = E_0(d-t) + E t$. Do not skip this step, as CBSE marking schemes assign 1 full mark to this decomposition."
    },

    # Q11: Electric Cell & Maximum Power Theorem
    {
        "id": "imp-phy-11",
        "number": 11,
        "title": "Electric Current, Terminal Potential Difference, Internal Resistance & Power",
        "shortLabel": "Cell EMF, Internal Resistance & Max Power",
        "chapterId": "phy-ch-3",
        "chapterTitle": "Current Electricity",
        "unit": "Current Electricity",
        "marks": "3 Marks",
        "marksNum": 3,
        "category": "Derivation",
        "frequency": "High Frequency (CBSE 2024 SQP Q2, 2023, 2020, 2018)",
        "questionPrompt": "(a) Distinguish between EMF of a cell and its terminal potential difference.\n(b) Derive the relation between EMF (ε), terminal voltage (V), internal resistance (r), and external load resistance (R).\n(c) State and prove the Maximum Power Transfer Theorem for an electric cell delivering power to a variable load resistor.",
        "ncertRef": {
            "textbook": "NCERT Physics Class 12, Part 1",
            "chapter": "Chapter 3: Current Electricity",
            "section": "Sections 3.10 & 3.11 (pp. 110–114)",
            "equations": "Eqs. (3.33), (3.34), (3.35)",
            "figures": "Figs. 3.18, 3.19",
            "summary": "Chemical EMF origin, electrolyte internal resistance, closed circuit terminal voltage drops, and load power optimization."
        },
        "theory": [
            "Electromotive Force (EMF, $\\varepsilon$) is the potential difference between the two electrodes of a cell in an open circuit (when no current is drawn: $I = 0$).",
            "Terminal Potential Difference ($V$) is the potential difference between the terminals of a cell in a closed circuit (when current $I$ is being drawn through an external circuit).",
            "Internal Resistance ($r$) is the opposition offered by the electrolyte and electrodes of the cell to the flow of electric current through it.",
            "When a cell discharges through a load: $$V = \\varepsilon - I r \\quad (V < \\varepsilon)$$",
            "When a cell is being recharged by an external charger: $$V = \\varepsilon + I r \\quad (V > \\varepsilon)$$"
        ],
        "derivations": [
            {
                "name": "Part 1: Derivation of Relation between ε, V, r, and R",
                "setup": "Consider a cell of EMF $\\varepsilon$ and internal resistance $r$ connected across an external load resistor of resistance $R$. A steady current $I$ circulates through the complete circuit.",
                "steps": [
                    {
                        "text": "Total resistance of the closed series circuit is the sum of external and internal resistances:",
                        "equation": "R_{\\text{total}} = R + r"
                    },
                    {
                        "text": "By Ohm's Law, current delivered by the cell is:",
                        "equation": "I = \\frac{\\varepsilon}{R + r}"
                    },
                    {
                        "text": "The terminal potential difference $V$ across the external resistor $R$ is:",
                        "equation": "V = I R = \\left(\\frac{\\varepsilon}{R + r}\\right) R"
                    },
                    {
                        "text": "Rearranging the current equation: $\\varepsilon = I(R + r) = IR + Ir = V + Ir$:",
                        "equation": "V = \\varepsilon - I r"
                    },
                    {
                        "text": "Expressing internal resistance $r$ in terms of terminal voltage and EMF:",
                        "equation": "I r = \\varepsilon - V \\implies r = \\frac{\\varepsilon - V}{I} = \\frac{\\varepsilon - V}{V / R} = \\left( \\frac{\\varepsilon}{V} - 1 \\right) R"
                    }
                ],
                "specialCases": [
                    {
                        "title": "Open Circuit Condition:",
                        "text": "When external switch is open ($R \\to \\infty$, $I = 0$):",
                        "equation": "V = \\varepsilon"
                    },
                    {
                        "title": "Short Circuit Condition:",
                        "text": "When terminals are shorted ($R = 0$):",
                        "equation": "I_{\\text{max}} = \\frac{\\varepsilon}{r}, \\quad V = 0"
                    }
                ],
                "finalFormula": "V = \\varepsilon - I r, \\quad r = \\left(\\frac{\\varepsilon}{V} - 1\\right)R"
            },
            {
                "name": "Part 2: Maximum Power Transfer Theorem",
                "setup": "Determine the value of variable load resistance $R$ for which power delivered to the load by the cell is maximum.",
                "steps": [
                    {
                        "text": "Electric power dissipated across the load resistor $R$ is:",
                        "equation": "P = I^2 R = \\left( \\frac{\\varepsilon}{R + r} \\right)^2 R = \\frac{\\varepsilon^2 R}{(R + r)^2}"
                    },
                    {
                        "text": "To find the maximum power, differentiate $P$ with respect to load resistance $R$ and set to zero ($dP/dR = 0$):",
                        "equation": "\\frac{dP}{dR} = \\varepsilon^2 \\left[ \\frac{(R + r)^2 (1) - R \\cdot 2(R + r)}{(R + r)^4} \\right] = 0"
                    },
                    {
                        "text": "Simplifying the numerator:",
                        "equation": "(R + r) - 2R = 0 \\quad \\implies \\quad r - R = 0 \\quad \\implies \\quad R = r"
                    },
                    {
                        "text": "Substituting $R = r$ into the power equation yields the maximum power:",
                        "equation": "P_{\\text{max}} = \\frac{\\varepsilon^2 (r)}{(r + r)^2} = \\frac{\\varepsilon^2 r}{(2r)^2} = \\frac{\\varepsilon^2}{4r}"
                    }
                ],
                "specialCases": [
                    {
                        "title": "Efficiency at Maximum Power:",
                        "text": "At maximum power transfer, internal drop equals external voltage ($V = \\varepsilon/2$), so efficiency is exactly 50%:",
                        "equation": "\\eta = \\frac{P_{\\text{out}}}{P_{\\text{total}}} = \\frac{I^2 r}{I^2(2r)} = 50\\%"
                    }
                ],
                "finalFormula": "R = r \\implies P_{\\text{max}} = \\frac{\\varepsilon^2}{4r}"
            }
        ],
        "diagram": {
            "hasDiagram": True,
            "diagramId": "cell-circuit",
            "title": "Cell Circuit with Internal Resistance & Load",
            "examDrawingGuide": [
                "1. Draw battery symbol with long positive and short negative plates labeled EMF $\\varepsilon$.",
                "2. Place internal resistor $r$ in series enclosed in a dashed box representing cell enclosure.",
                "3. Draw external circuit loop with switch and load resistor $R$.",
                "4. Draw voltmeter across cell terminals showing reading $V = \\varepsilon - Ir$.",
                "5. Plot $P$ versus $R$ curve peaking sharply at $R = r$."
            ]
        },
        "keyPointsAndKeywords": [
            "Open Circuit EMF (I = 0, V = ε)",
            "Closed Circuit Terminal Voltage (V = ε - Ir)",
            "Internal Resistance Formula r = (ε/V - 1)R",
            "Charging Condition (V = ε + Ir)",
            "Maximum Power Transfer Condition (R = r)",
            "Maximum Power Value (P_max = ε² / 4r)"
        ],
        "termsGlossary": [
            {
                "symbol": "\\varepsilon",
                "term": "Electromotive Force (EMF)",
                "definition": "Maximum potential difference between cell terminals on open circuit, measured in Volts (V)."
            },
            {
                "symbol": "V",
                "term": "Terminal Potential Difference",
                "definition": "Potential difference between terminals when active current flows through load, measured in Volts (V)."
            },
            {
                "symbol": "r",
                "term": "Internal Resistance",
                "definition": "Inherent resistance offered by cell electrolyte to ionic charge carrier movement ($\\Omega$)."
            },
            {
                "symbol": "P_{\\text{max}}",
                "term": "Maximum Power",
                "definition": "Peak electrical power transferred to load when load matches internal resistance ($R = r$)."
            }
        ],
        "markingScheme": [
            "1 Mark: Distinction between EMF and Terminal Potential Difference with units.",
            "1 Mark: Algebraic derivation of $V = \\varepsilon - Ir$ and $r = (\\varepsilon/V - 1)R$.",
            "1 Mark: Mathematical proof of Maximum Power Transfer condition $R = r$ and $P_{\\text{max}} = \\varepsilon^2/(4r)$."
        ],
        "examinerTips": "Remember to note that during charging of a battery, current enters the positive terminal, making $V = \\varepsilon + Ir$, so terminal voltage exceeds EMF."
    }
]
