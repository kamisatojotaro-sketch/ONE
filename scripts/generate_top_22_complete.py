# -*- coding: utf-8 -*-
"""
Generator script to compile all 22 Top CBSE Class 12 Physics Questions
Strictly matching the NODIA Question Bank and NCERT Textbook style.
Zero emojis, 4 distinct parts, step-by-step derivations with LaTeX,
diagram drawing guides, key points & keywords, and complete terms glossary.
"""

import json
import os

all_questions = []

def add_q(data):
    # Auto-generate backwards-compatible modelAnswer
    statement = "\n".join(data["theory"])
    back_derivations = []
    for d in data.get("derivations", []):
        d_steps = []
        if d.get("setup"):
            d_steps.append(d["setup"])
        for s in d.get("steps", []):
            if isinstance(s, dict):
                t = s.get("text", "")
                eq = s.get("equation", "")
                if t and eq:
                    d_steps.append(f"{t} {eq}")
                elif eq:
                    d_steps.append(eq)
                elif t:
                    d_steps.append(t)
            else:
                d_steps.append(str(s))
        for sc in d.get("specialCases", []):
            d_steps.append(f"{sc.get('title', '')} {sc.get('text', '')} {sc.get('equation', '')}".strip())
        
        back_derivations.append({
            "name": d["name"],
            "steps": d_steps,
            "formula": d.get("finalFormula", "")
        })

    diag_notes = "\n".join(data.get("diagram", {}).get("examDrawingGuide", []))

    data["modelAnswer"] = {
        "statement": statement,
        "derivations": back_derivations,
        "diagramNotes": diag_notes,
        "markingScheme": data.get("markingScheme", []),
        "examinerTips": data.get("examinerTips", "")
    }
    all_questions.append(data)

# ==============================================================================
# Q1: Gauss's Law & Applications
# ==============================================================================
add_q({
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
})

# ==============================================================================
# Q2: Force on Current-Carrying Conductor in Magnetic Field
# ==============================================================================
add_q({
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
})

print("Writing rest of script to file...")
