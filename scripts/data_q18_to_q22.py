# -*- coding: utf-8 -*-
"""
Questions 18 to 22 for CBSE Class 12 Physics Top 22 Questions
Including the exact axial/equatorial dipole field derivations from NODIA QB page 83!
"""

questions_18_to_22 = [
    # Q18: Electric Dipole: Axial and Equatorial Fields (From user's screenshot & NODIA p. 83)
    {
        "id": "imp-phy-18",
        "number": 18,
        "title": "Electric Field of a Dipole: Axial and Equatorial Positions",
        "shortLabel": "Dipole Field (Axial & Equatorial)",
        "chapterId": "phy-ch-1",
        "chapterTitle": "Electric Charges and Fields",
        "unit": "Electrostatics",
        "marks": "5 Marks",
        "marksNum": 5,
        "category": "Derivation",
        "frequency": "Guaranteed 5-Mark Question (CBSE 2024 SQP Q1, 2023, 2022, 2019)",
        "questionPrompt": "(a) Define an electric dipole and electric dipole moment. Write its SI unit and direction.\n(b) Derive an expression for the electric field intensity at a point on:\n  (i) The axial line of an electric dipole.\n  (ii) The equatorial line of an electric dipole.\n(c) For a short dipole, show that the electric field at an axial point is twice the electric field at an equatorial point at the same distance.",
        "ncertRef": {
            "textbook": "NCERT Physics Class 12, Part 1",
            "chapter": "Chapter 1: Electric Charges and Fields",
            "section": "Section 1.11: Field of an Electric Dipole (pp. 27–31)",
            "equations": "Eqs. (1.15), (1.16), (1.20), (1.21)",
            "figures": "Figs. 1.20, 1.21",
            "summary": "Exact step-by-step vector derivations on dipole axis and equatorial bisector, matching NODIA Chapterwise Question Bank page 83."
        },
        "theory": [
            "An Electric Dipole is a system of two equal and opposite point charges $+q$ and $-q$ separated by a small finite distance $2a$.",
            "Electric Dipole Moment $\\vec{p}$ is a vector quantity defined as the product of the magnitude of either charge $q$ and the displacement vector $2\\vec{a}$ separating them: $$\\vec{p} = q(2\\vec{a})$$",
            "SI unit of dipole moment is Coulomb-metre ($\\text{C}\\cdot\\text{m}$). Direction: By universal convention, directed along the dipole axis from the negative charge ($-q$) to the positive charge ($+q$).",
            "Axial Field Direction: At any point on the axial line, the resultant electric field is parallel to the dipole moment vector $\\vec{p}$.",
            "Equatorial Field Direction: At any point on the equatorial line (perpendicular bisector), the resultant electric field is antiparallel (opposite) to the dipole moment vector $\\vec{p}$."
        ],
        "derivations": [
            {
                "name": "Part 1: Electric Field at a Point on the Axial Line (End-on Position)",
                "setup": "Consider an electric dipole consisting of two point charges $-q$ and $+q$ separated by distance $2a$ and placed in vacuum. Let $P$ be a point on the axial line at distance $r$ from the centre $O$ of the dipole on the side of charge $+q$.",
                "steps": [
                    {
                        "text": "Electric field at point $P$ due to charge $-q$ located at distance $(r + a)$ is directed towards the left (along $-\\hat{p}$):",
                        "equation": "\\vec{E}_{-q} = -\\frac{q}{4\\pi \\varepsilon_0 (r + a)^2} \\hat{p}"
                    },
                    {
                        "text": "where $\\hat{p}$ is a unit vector along the dipole axis from $-q$ to $+q$. Electric field due to charge $+q$ located at distance $(r - a)$ is directed towards the right (along $+\\hat{p}$):",
                        "equation": "\\vec{E}_{+q} = \\frac{q}{4\\pi \\varepsilon_0 (r - a)^2} \\hat{p}"
                    },
                    {
                        "text": "Hence, the resultant electric field at point $P$ is the vector sum of both fields:",
                        "equation": "\\vec{E}_{\\text{axial}} = \\vec{E}_{+q} + \\vec{E}_{-q} = \\frac{q}{4\\pi \\varepsilon_0} \\left[ \\frac{1}{(r - a)^2} - \\frac{1}{(r + a)^2} \\right] \\hat{p}"
                    },
                    {
                        "text": "Taking the common denominator and expanding the terms in the numerator:",
                        "equation": "\\vec{E}_{\\text{axial}} = \\frac{q}{4\\pi \\varepsilon_0} \\left[ \\frac{(r + a)^2 - (r - a)^2}{(r^2 - a^2)^2} \\right] \\hat{p} = \\frac{q}{4\\pi \\varepsilon_0} \\left[ \\frac{(r^2 + 2ar + a^2) - (r^2 - 2ar + a^2)}{(r^2 - a^2)^2} \\right] \\hat{p}"
                    },
                    {
                        "text": "Simplifying the numerator:",
                        "equation": "\\vec{E}_{\\text{axial}} = \\frac{q}{4\\pi \\varepsilon_0} \\frac{4ar}{(r^2 - a^2)^2} \\hat{p} = \\frac{1}{4\\pi \\varepsilon_0} \\frac{2(q \\cdot 2a)r}{(r^2 - a^2)^2} \\hat{p}"
                    },
                    {
                        "text": "Substituting the dipole moment magnitude $p = q(2a)$:",
                        "equation": "\\vec{E}_{\\text{axial}} = \\frac{1}{4\\pi \\varepsilon_0} \\frac{2pr}{(r^2 - a^2)^2} \\hat{p}"
                    }
                ],
                "specialCases": [
                    {
                        "title": "Short Dipole Approximation (r ≫ a):",
                        "text": "For distances much larger than the dipole separation ($r \\gg a$), $a^2$ can be neglected compared to $r^2$:",
                        "equation": "\\vec{E}_{\\text{axial}} = \\frac{1}{4\\pi \\varepsilon_0} \\frac{2pr}{r^4} \\hat{p} = \\frac{1}{4\\pi \\varepsilon_0} \\frac{2\\vec{p}}{r^3}"
                    }
                ],
                "finalFormula": "\\vec{E}_{\\text{axial}} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{2\\vec{p}}{r^3} \\quad (\\text{parallel to } \\vec{p})"
            },
            {
                "name": "Part 2: Electric Field at a Point on the Equatorial Line (Broadside-on Position)",
                "setup": "Consider point $Q$ located on the equatorial line (perpendicular bisector) at distance $r$ from the centre $O$ of the dipole. The distance of point $Q$ from each charge is $\\sqrt{r^2 + a^2}$.",
                "steps": [
                    {
                        "text": "The magnitudes of the electric fields produced by $+q$ and $-q$ at point $Q$ are equal by symmetry:",
                        "equation": "E_{+q} = E_{-q} = \\frac{1}{4\\pi \\varepsilon_0} \\frac{q}{r^2 + a^2}"
                    },
                    {
                        "text": "Resolving both field vectors into components: The components perpendicular to the dipole axis ($E_{+q}\\sin\\theta$ and $E_{-q}\\sin\\theta$) are equal in magnitude and opposite in direction, so they cancel out completely:",
                        "equation": "E_{\\perp} = E_{+q}\\sin\\theta - E_{-q}\\sin\\theta = 0"
                    },
                    {
                        "text": "The components parallel to the dipole axis ($E_{+q}\\cos\\theta$ and $E_{-q}\\cos\\theta$) add up constructively in the direction opposite to $\\vec{p}$ (towards $-\\hat{p}$):",
                        "equation": "\\vec{E}_{\\text{eq}} = -\\left( E_{+q}\\cos\\theta + E_{-q}\\cos\\theta \\right) \\hat{p} = -2 E_{+q}\\cos\\theta \\, \\hat{p}"
                    },
                    {
                        "text": "From the right-angled triangle, $\\cos\\theta = \\frac{a}{\\sqrt{r^2 + a^2}}$. Substituting $E_{+q}$ and $\\cos\\theta$:",
                        "equation": "\\vec{E}_{\\text{eq}} = -2 \\left( \\frac{1}{4\\pi \\varepsilon_0} \\frac{q}{r^2 + a^2} \\right) \\left( \\frac{a}{\\sqrt{r^2 + a^2}} \\right) \\hat{p} = -\\frac{1}{4\\pi \\varepsilon_0} \\frac{q(2a)}{(r^2 + a^2)^{3/2}} \\hat{p}"
                    },
                    {
                        "text": "Substituting dipole moment $p = q(2a)$:",
                        "equation": "\\vec{E}_{\\text{eq}} = -\\frac{1}{4\\pi \\varepsilon_0} \\frac{\\vec{p}}{(r^2 + a^2)^{3/2}}"
                    }
                ],
                "specialCases": [
                    {
                        "title": "Short Dipole Approximation (r ≫ a):",
                        "text": "Neglecting $a^2$ in comparison to $r^2$:",
                        "equation": "\\vec{E}_{\\text{eq}} = -\\frac{1}{4\\pi \\varepsilon_0} \\frac{\\vec{p}}{r^3}"
                    },
                    {
                        "title": "Comparison between Axial and Equatorial Fields:",
                        "text": "For a short dipole at the same distance $r$, the magnitude of the axial field is exactly twice the equatorial field:",
                        "equation": "E_{\\text{axial}} = 2 \\, E_{\\text{eq}}"
                    }
                ],
                "finalFormula": "\\vec{E}_{\\text{eq}} = -\\frac{1}{4\\pi\\varepsilon_0} \\frac{\\vec{p}}{r^3}, \\quad E_{\\text{axial}} = 2 E_{\\text{eq}}"
            }
        ],
        "diagram": {
            "hasDiagram": True,
            "diagramId": "dipole-fields",
            "title": "Electric Dipole: Axial and Equatorial Geometry",
            "examDrawingGuide": [
                "1. Axial Line: Draw horizontal axis with charges $-q$ and $+q$ separated by $2a$; mark midpoint $O$; mark point $P$ at distance $r$ from $O$ along axis; draw longer arrow $\\vec{E}_{+q}$ to the right, shorter arrow $\\vec{E}_{-q}$ to the left, and net arrow $\\vec{E}_{\\text{axial}}$ to the right.",
                "2. Equatorial Line: Draw horizontal dipole $-q$ and $+q$; draw vertical perpendicular bisector from $O$; mark point $Q$ at height $r$; draw $\\vec{E}_{+q}$ pointing diagonally away and $\\vec{E}_{-q}$ pointing diagonally toward $-q$; show vertical components cancelling and horizontal components adding opposite to dipole moment."
            ]
        },
        "keyPointsAndKeywords": [
            "Dipole Moment Vector (p = q(2a), directed -q to +q)",
            "Axial Vector Addition (E_+q to right, E_-q to left)",
            "Equatorial Component Resolution (sinθ cancels, cosθ adds)",
            "Inverse Cube Distance Dependence (E ∝ 1/r³)",
            "Axial Field Parallel to p̂",
            "Equatorial Field Antiparallel to p̂",
            "Ratio Formula: E_axial = 2 × E_eq"
        ],
        "termsGlossary": [
            {
                "symbol": "\\vec{p}",
                "term": "Electric Dipole Moment",
                "definition": "Vector parameter of dipole: $\\vec{p} = q(2\\vec{a})$, measured in $\\text{C}\\cdot\\text{m}$, directed from $-q$ to $+q$."
            },
            {
                "symbol": "2a",
                "term": "Dipole Separation (Length)",
                "definition": "Finite vector distance between the centers of the two constituent point charges."
            },
            {
                "symbol": "r",
                "term": "Observation Distance",
                "definition": "Distance of field point from the geometric center $O$ of the dipole."
            },
            {
                "symbol": "\\hat{p}",
                "term": "Dipole Unit Vector",
                "definition": "Unit vector pointing along the dipole axis in the direction from negative to positive charge."
            }
        ],
        "markingScheme": [
            "1 Mark: Definition of electric dipole moment with formula, SI unit, and direction.",
            "2 Marks: Rigorous step-by-step derivation of axial field $E_{\\text{axial}} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{2p}{r^3}$.",
            "2 Marks: Step-by-step component derivation of equatorial field $E_{\\text{eq}} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{p}{r^3}$ and proof of ratio $E_{\\text{axial}} = 2E_{\\text{eq}}$."
        ],
        "examinerTips": "Common mistake: forgetting vector signs! Write $\\vec{E}_{\\text{axial}}$ with $+\\hat{p}$ and $\\vec{E}_{\\text{eq}}$ with $-\\hat{p}$. In the short dipole step, explicitly state 'neglecting $a^2$ in comparison with $r^2$'."
    },

    # Q19: Torque & Potential Energy of Dipole
    {
        "id": "imp-phy-19",
        "number": 19,
        "title": "Torque and Potential Energy of an Electric Dipole in Uniform Electric Field",
        "shortLabel": "Dipole Torque (τ = p × E) & Potential Energy",
        "chapterId": "phy-ch-1",
        "chapterTitle": "Electric Charges and Fields",
        "unit": "Electrostatics",
        "marks": "3 Marks",
        "marksNum": 3,
        "category": "Derivation",
        "frequency": "High Frequency Core Derivation (CBSE 2024, 2023, 2021, 2019)",
        "questionPrompt": "(a) An electric dipole of dipole moment p is placed in a uniform electric field E making an angle θ with the field. Derive the expression for the torque acting on it.\n(b) Derive the expression for the potential energy stored in the dipole.\n(c) Identify the conditions of: (i) Stable equilibrium, (ii) Unstable equilibrium, and (iii) Maximum torque.",
        "ncertRef": {
            "textbook": "NCERT Physics Class 12, Part 1",
            "chapter": "Chapter 1: Electric Charges and Fields",
            "section": "Section 1.12 & Chapter 2 Section 2.5 (pp. 31–32, 66–68)",
            "equations": "Eqs. (1.22), (1.23), (2.23)",
            "figures": "Fig. 1.22",
            "summary": "Force couple on dipole in uniform field, vector cross product torque derivation, and rotational work integral for potential energy."
        },
        "theory": [
            "When an electric dipole is placed in a uniform electric field $\\vec{E}$, the charge $+q$ experiences force $\\vec{F}_+ = +q\\vec{E}$ and charge $-q$ experiences force $\\vec{F}_- = -q\\vec{E}$.",
            "Net Translational Force: The two forces are equal in magnitude and opposite in direction. Hence, the net translational mechanical force is zero: $$\\vec{F}_{\\text{net}} = +q\\vec{E} + (-q\\vec{E}) = 0$$ The dipole has zero translational acceleration in a uniform field.",
            "Torque Couple: Because the lines of action of the two equal and opposite forces do not coincide, they constitute a couple that tends to rotate the dipole to align its dipole moment $\\vec{p}$ parallel to the external field $\\vec{E}$.",
            "Work done in rotating the dipole against this restoring torque is stored in the system as Electrostatic Potential Energy ($U$)."
        ],
        "derivations": [
            {
                "name": "Part 1: Derivation of Torque (τ = p × E)",
                "setup": "Consider an electric dipole consisting of charges $\\pm q$ separated by length $2a$, placed in a uniform electric field $\\vec{E}$ at an angle $\\theta$ with the field direction.",
                "steps": [
                    {
                        "text": "Magnitude of force on each individual charge is:",
                        "equation": "F = q E"
                    },
                    {
                        "text": "The perpendicular distance between the lines of action of the two forces (perpendicular lever arm) is:",
                        "equation": "d_{\\perp} = 2a \\sin\\theta"
                    },
                    {
                        "text": "The magnitude of the torque $\\tau$ exerted by the couple is given by force multiplied by perpendicular lever arm:",
                        "equation": "\\tau = F \\cdot d_{\\perp} = (q E)(2a \\sin\\theta) = (q \\cdot 2a) E \\sin\\theta"
                    },
                    {
                        "text": "Substituting dipole moment magnitude $p = q(2a)$:",
                        "equation": "\\tau = p E \\sin\\theta"
                    },
                    {
                        "text": "In vector notation, this is the vector cross product of dipole moment $\\vec{p}$ and electric field $\\vec{E}$:",
                        "equation": "\\vec{\\tau} = \\vec{p} \\times \\vec{E}"
                    }
                ],
                "specialCases": [
                    {
                        "title": "Maximum Torque (θ = 90°):",
                        "text": "When the dipole is perpendicular to the electric field ($\\sin 90^\\circ = 1$):",
                        "equation": "\\tau_{\\text{max}} = p E"
                    },
                    {
                        "title": "Zero Torque (θ = 0° or 180°):",
                        "text": "When the dipole is aligned along or opposite to the electric field ($\\sin 0^\\circ = \\sin 180^\\circ = 0$):",
                        "equation": "\\tau = 0"
                    }
                ],
                "finalFormula": "\\vec{\\tau} = \\vec{p} \\times \\vec{E} \\quad \\implies \\quad \\tau = p E \\sin\\theta"
            },
            {
                "name": "Part 2: Derivation of Potential Energy (U = -p · E)",
                "setup": "Let external torque rotate the dipole slowly without angular acceleration from orientation $\\theta_1$ to orientation $\\theta_2$ against the electrostatic torque.",
                "steps": [
                    {
                        "text": "Work done by external agent in rotating dipole through an infinitesimal angular displacement $d\\theta$ is:",
                        "equation": "dW = \\tau_{\\text{ext}} \\, d\\theta = p E \\sin\\theta \\, d\\theta"
                    },
                    {
                        "text": "Total work done in rotating dipole from angle $\\theta_1$ to angle $\\theta_2$ is obtained by integration:",
                        "equation": "W = \\int_{\\theta_1}^{\\theta_2} p E \\sin\\theta \\, d\\theta = p E [-\\cos\\theta]_{\\theta_1}^{\\theta_2} = -p E (\\cos\\theta_2 - \\cos\\theta_1)"
                    },
                    {
                        "text": "Taking the zero-energy reference standard at $\\theta_1 = 90^\\circ$ (where $\\cos 90^\\circ = 0$):",
                        "equation": "U(\\theta) = -p E (\\cos\\theta - \\cos 90^\\circ) = -p E \\cos\\theta"
                    },
                    {
                        "text": "In vector dot product notation:",
                        "equation": "U = -\\vec{p} \\cdot \\vec{E}"
                    }
                ],
                "specialCases": [
                    {
                        "title": "Case 1: Stable Equilibrium (θ = 0°):",
                        "text": "Dipole aligned parallel to field: $\\tau = 0$ and potential energy is minimum:",
                        "equation": "U_{\\text{min}} = -pE \\cos 0^\\circ = -pE"
                    },
                    {
                        "title": "Case 2: Unstable Equilibrium (θ = 180°):",
                        "text": "Dipole aligned antiparallel to field: $\\tau = 0$ and potential energy is maximum:",
                        "equation": "U_{\\text{max}} = -pE \\cos 180^\\circ = +pE"
                    }
                ],
                "finalFormula": "U = -\\vec{p} \\cdot \\vec{E} = -p E \\cos\\theta"
            }
        ],
        "diagram": {
            "hasDiagram": True,
            "diagramId": "dipole-torque",
            "title": "Electric Dipole in Uniform Electric Field: Couple & Torque",
            "examDrawingGuide": [
                "1. Draw parallel horizontal field lines representing uniform field $\\vec{E}$.",
                "2. Draw dipole axis inclined at angle $\\theta$ with charges $-q$ and $+q$ separated by $2a$.",
                "3. Draw force vector $+q\\vec{E}$ to the right at $+q$, and force $-q\\vec{E}$ to the left at $-q$.",
                "4. Draw dashed perpendicular line from $-q$ to the line of action of $+q\\vec{E}$ and label perpendicular lever arm $2a\\sin\\theta$."
            ]
        },
        "keyPointsAndKeywords": [
            "Zero Net Force (F_net = 0 in uniform field)",
            "Restoring Couple and Perpendicular Lever Arm (2a sinθ)",
            "Torque Cross Product (τ = p × E)",
            "Rotational Work Integral (W = ∫ τ dθ)",
            "Potential Energy Dot Product (U = -p · E)",
            "Stable Equilibrium (θ = 0°, U = -pE)",
            "Unstable Equilibrium (θ = 180°, U = +pE)"
        ],
        "termsGlossary": [
            {
                "symbol": "\\vec{\\tau}",
                "term": "Deflecting Torque",
                "definition": "Rotational couple vector tending to align dipole with external field, measured in $\\text{N}\\cdot\\text{m}$."
            },
            {
                "symbol": "U",
                "term": "Electrostatic Potential Energy",
                "definition": "Energy stored in the dipole-field configuration relative to standard $90^\\circ$ perpendicular state, measured in Joules (J)."
            },
            {
                "symbol": "\\theta",
                "term": "Dipole Alignment Angle",
                "definition": "Angle between dipole moment vector $\\vec{p}$ and external electric field $\\vec{E}$."
            }
        ],
        "markingScheme": [
            "1.5 Marks: Derivation of torque $\\tau = pE\\sin\\theta \\implies \\vec{\\tau} = \\vec{p}\\times\\vec{E}$ with labeled diagram.",
            "1 Mark: Derivation of potential energy $U = -pE\\cos\\theta = -\\vec{p}\\cdot\\vec{E}$.",
            "0.5 Mark: Distinction between stable equilibrium ($\\theta = 0^\\circ$) and unstable equilibrium ($\\theta = 180^\\circ$)."
        ],
        "examinerTips": "Remember that if the electric field is NON-uniform, the dipole experiences BOTH a net translational force AND a torque!"
    },

    # Q20: Force Between Two Parallel Current Conductors & Ampere Definition
    {
        "id": "imp-phy-20",
        "number": 20,
        "title": "Force Between Two Parallel Current-Carrying Conductors & Definition of 1 Ampere",
        "shortLabel": "Force Between Parallel Wires & 1 Ampere",
        "chapterId": "phy-ch-4",
        "chapterTitle": "Moving Charges and Magnetism",
        "unit": "Magnetism",
        "marks": "3 Marks",
        "marksNum": 3,
        "category": "Derivation",
        "frequency": "High Frequency Core Derivation (CBSE 2024 SQP Q16, 2023, 2020, 2018)",
        "questionPrompt": "(a) Derive the expression for the magnetic force per unit length acting between two long, straight parallel conductors carrying steady currents I₁ and I₂ separated by distance d in vacuum.\n(b) State whether parallel currents attract or repel, and justify with diagram.\n(c) Use this formula to state the official definition of the SI unit of electric current (the Ampere).",
        "ncertRef": {
            "textbook": "NCERT Physics Class 12, Part 1",
            "chapter": "Chapter 4: Moving Charges and Magnetism",
            "section": "Section 4.7: Force between Two Parallel Currents (pp. 154–157)",
            "equations": "Eqs. (4.26), (4.27), (4.28)",
            "figures": "Figs. 4.19, 4.20",
            "summary": "Biot-Savart field generation by wire 1, Lorentz force on wire 2, mutual attraction/repulsion, and historical definition of the ampere."
        },
        "theory": [
            "Two infinitely long, straight parallel conductors carrying steady currents exert mutual magnetic forces on each other.",
            "Nature of Force: Parallel currents flowing in the SAME direction ATTRACT each other. Antiparallel currents flowing in OPPOSITE directions REPEL each other.",
            "Physical Mechanism: Wire 1 produces a circular magnetic field $\\vec{B}_1$ around it according to the Right-Hand Thumb Rule. Wire 2 carrying current $I_2$ sits inside field $\\vec{B}_1$ and experiences a mechanical magnetic Lorentz force $\\vec{F}_{21} = I_2(\\vec{L} \\times \\vec{B}_1)$ according to Fleming's Left-Hand Rule.",
            "By Newton's Third Law, the force exerted by wire 2 on wire 1 is equal in magnitude and opposite in direction: $$\\vec{F}_{12} = -\\vec{F}_{21}$$"
        ],
        "derivations": [
            {
                "name": "Mathematical Derivation of Force per Unit Length",
                "setup": "Consider two infinitely long, thin straight parallel conductors $X$ and $Y$ separated by distance $d$ in vacuum, carrying steady currents $I_1$ and $I_2$ in the same direction (upwards).",
                "steps": [
                    {
                        "text": "By Ampere's circuital law / Biot-Savart law, the magnitude of the magnetic field produced by conductor $X$ carrying current $I_1$ at all points on conductor $Y$ at distance $d$ is:",
                        "equation": "B_1 = \\frac{\\mu_0 I_1}{2\\pi d}"
                    },
                    {
                        "text": "By the Right-Hand Thumb Rule, the direction of magnetic field $\\vec{B}_1$ at conductor $Y$ is perpendicular to the plane of the wires, directed perpendicularly INTO the paper ($\otimes$).",
                        "equation": "\\vec{B}_1 \\perp \\text{Plane of Wires (Inwards)}"
                    },
                    {
                        "text": "Conductor $Y$ carries current $I_2$ in field $\\vec{B}_1$. The magnetic force experienced by a section of length $L$ of conductor $Y$ is:",
                        "equation": "F_{21} = I_2 L B_1 \\sin 90^\\circ = I_2 L \\left( \\frac{\\mu_0 I_1}{2\\pi d} \\right) = \\frac{\\mu_0 I_1 I_2 L}{2\\pi d}"
                    },
                    {
                        "text": "By Fleming's Left-Hand Rule, the direction of force $\\vec{F}_{21}$ is towards conductor $X$ (attractive force).",
                        "equation": "\\vec{F}_{21} \\text{ directed toward wire } X"
                    },
                    {
                        "text": "The magnetic force per unit length ($f = F/L$) acting on either conductor is:",
                        "equation": "f = \\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}"
                    }
                ],
                "specialCases": [
                    {
                        "title": "Standard Definition of One Ampere:",
                        "text": "If $I_1 = I_2 = 1\\text{ A}$ and $d = 1\\text{ m}$ in vacuum, the force per unit length is:",
                        "equation": "f = \\frac{(4\\pi \\times 10^{-7})(1)(1)}{2\\pi(1)} = 2 \\times 10^{-7} \\text{ N/m}"
                    }
                ],
                "finalFormula": "\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d} = 2 \\times 10^{-7} \\text{ N/m} \\quad (\\text{for } 1\\text{ A at } 1\\text{ m})"
            }
        ],
        "diagram": {
            "hasDiagram": True,
            "diagramId": "parallel-wires",
            "title": "Force Between Parallel Current-Carrying Conductors",
            "examDrawingGuide": [
                "1. Draw two vertical parallel straight wires labeled 1 and 2 separated by distance $d$.",
                "2. Draw current arrows $I_1$ and $I_2$ pointing upward.",
                "3. Draw circular magnetic field lines around wire 1, showing field vector $\\vec{B}_1$ entering perpendicularly into page at wire 2 (marked with $\\otimes$).",
                "4. Draw horizontal attractive force arrows $\\vec{F}_{21}$ pointing left toward wire 1, and $\\vec{F}_{12}$ pointing right toward wire 2."
            ]
        },
        "keyPointsAndKeywords": [
            "Biot-Savart Field (B₁ = μ₀I₁ / 2πd)",
            "Lorentz Force on Current (F = I₂LB₁)",
            "Parallel Currents Attract / Antiparallel Repel",
            "Force per Unit Length Formula (F/L = μ₀I₁I₂ / 2πd)",
            "Standard Definition of 1 Ampere (2 × 10⁻⁷ N/m force in vacuum at 1 m separation)"
        ],
        "termsGlossary": [
            {
                "symbol": "\\mu_0",
                "term": "Permeability of Free Space",
                "definition": "Universal magnetic constant: $\\mu_0 = 4\\pi \\times 10^{-7} \\text{ T}\\cdot\\text{m/A}$ (or $\\text{N/A}^2$)."
            },
            {
                "symbol": "I_1, I_2",
                "term": "Conductor Currents",
                "definition": "Steady electric currents circulating through the two parallel conducting wires (Amperes)."
            },
            {
                "symbol": "d",
                "term": "Separation Distance",
                "definition": "Perpendicular distance separating the axes of the two parallel wires in metres (m)."
            },
            {
                "symbol": "f = F/L",
                "term": "Force per Unit Length",
                "definition": "Mechanical interaction force per metre length of conductor, measured in Newtons per metre (N/m)."
            }
        ],
        "markingScheme": [
            "1.5 Marks: Mathematical derivation of field $B_1 = \\mu_0 I_1 / (2\\pi d)$ and force $F/L = \\mu_0 I_1 I_2 / (2\\pi d)$.",
            "0.5 Mark: Justification of attractive nature with Fleming's Left-Hand Rule.",
            "1 Mark: Exact standard definition of 1 Ampere using $2 \\times 10^{-7}\\text{ N/m}$."
        ],
        "examinerTips": "In defining 1 Ampere, state all three conditions: (1) Straight parallel conductors of infinite length and negligible cross-section, (2) Placed in vacuum 1 metre apart, (3) Producing force of exactly $2 \\times 10^{-7}\\text{ N/m}$."
    },

    # Q21: Maxwell's Equations & Generalized Ampere's Law
    {
        "id": "imp-phy-21",
        "number": 21,
        "title": "Maxwell's Equations & Generalized Ampere's Law in Charging Capacitor",
        "shortLabel": "Maxwell Equations & Ampere-Maxwell Law",
        "chapterId": "phy-ch-8",
        "chapterTitle": "Electromagnetic Waves",
        "unit": "Electromagnetic Waves",
        "marks": "3 Marks",
        "marksNum": 3,
        "category": "Theory & Derivation",
        "frequency": "High Frequency Core Question (CBSE 2024 SQP Q8, 2023, 2021, 2019)",
        "questionPrompt": "(a) Write the four fundamental Maxwell's equations in integral form and state the physical law underlying each equation.\n(b) Using the example of a parallel plate capacitor during charging, explain the apparent paradox in Ampere's circuital law and show how Maxwell's displacement current resolves it.",
        "ncertRef": {
            "textbook": "NCERT Physics Class 12, Part 1",
            "chapter": "Chapter 8: Electromagnetic Waves",
            "section": "Sections 8.2 & 8.3 (pp. 270–274)",
            "equations": "Eqs. (8.4), (8.5), Table 8.1",
            "figures": "Fig. 8.1",
            "summary": "Unified formulation of classical electromagnetism: Gauss electrostatics, Gauss magnetism, Faraday induction, and Ampere-Maxwell law."
        },
        "theory": [
            "Maxwell unified electricity and magnetism into four fundamental equations that govern all classical electromagnetic phenomena:",
            "1. Gauss's Law for Electrostatics: Total electric flux through any closed surface is proportional to net enclosed charge: $$\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{q_{\\text{enclosed}}}{\\varepsilon_0}$$ (Electric charges are sources and sinks of electric field; isolated charges exist).",
            "2. Gauss's Law for Magnetism: Total magnetic flux through any closed surface is always zero: $$\\oint \\vec{B} \\cdot d\\vec{A} = 0$$ (Magnetic monopoles do not exist; magnetic field lines are continuous closed loops).",
            "3. Faraday's Law of Electromagnetic Induction: Line integral of electric field around a closed loop equals negative time rate of change of magnetic flux: $$\\oint \\vec{E} \\cdot d\\vec{l} = -\\frac{d\\Phi_B}{dt}$$ (A time-varying magnetic field induces an electric field).",
            "4. Ampere-Maxwell Circuital Law: Line integral of magnetic field around a closed loop is determined by conduction current and displacement current: $$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_c + \\mu_0 \\varepsilon_0 \\frac{d\\Phi_E}{dt}$$ (Both conduction currents and time-varying electric fields produce magnetic fields)."
        ],
        "derivations": [
            {
                "name": "Resolution of the Charging Capacitor Paradox",
                "setup": "Consider a parallel plate capacitor of area $A$ being charged by conduction current $I_c$. Choose a closed circular path $C$ around the wire outside the capacitor.",
                "steps": [
                    {
                        "text": "For a flat circular surface $S_1$ spanning loop $C$, the wire pierces the surface carrying conduction current $I_c$:",
                        "equation": "\\oint_C \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_c"
                    },
                    {
                        "text": "For a pot-shaped surface $S_2$ with the same perimeter $C$ bulging between the plates, no conduction current pierces it ($I_c = 0$):",
                        "equation": "\\oint_C \\vec{B} \\cdot d\\vec{l} = \\mu_0 (0) = 0"
                    },
                    {
                        "text": "This leads to an impossible physical paradox: the same line integral along the identical boundary loop $C$ cannot be simultaneously $\\mu_0 I_c$ and $0$!",
                        "equation": "\\mu_0 I_c \\neq 0 \\quad (\\text{Paradox})"
                    },
                    {
                        "text": "Maxwell resolved this by recognizing that between the capacitor plates, electric flux $\\Phi_E$ increases at rate:",
                        "equation": "\\frac{d\\Phi_E}{dt} = \\frac{d}{dt}\\left(E A\\right) = \\frac{d}{dt}\\left(\\frac{q}{\\varepsilon_0}\\right) = \\frac{1}{\\varepsilon_0}\\frac{dq}{dt} = \\frac{I_c}{\\varepsilon_0}"
                    },
                    {
                        "text": "Multiplying by $\\varepsilon_0$ gives the displacement current $I_d$ threading surface $S_2$:",
                        "equation": "I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt} = I_c"
                    },
                    {
                        "text": "Evaluating the generalized Ampere-Maxwell law for surface $S_2$:",
                        "equation": "\\oint_C \\vec{B} \\cdot d\\vec{l} = \\mu_0 (0 + I_d) = \\mu_0 I_c"
                    },
                    {
                        "text": "The line integral is now uniquely $\\mu_0 I_c$ regardless of the surface chosen. The paradox is resolved!",
                        "equation": "\\oint_C \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_c \\quad \\text{for both } S_1 \\text{ and } S_2"
                    }
                ],
                "specialCases": [
                    {
                        "title": "Total Current Continuity:",
                        "text": "Total current $I = I_c + I_d$ is continuous throughout the entire circuit:",
                        "equation": "I_{\\text{total}} = \\text{constant across all sections}"
                    }
                ],
                "finalFormula": "\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 \\left( I_c + \\varepsilon_0 \\frac{d\\Phi_E}{dt} \\right)"
            }
        ],
        "diagram": {
            "hasDiagram": True,
            "diagramId": "displacement-current",
            "title": "Maxwell-Ampere Circuit Loop & Surfaces S1 and S2",
            "examDrawingGuide": [
                "1. Draw charging capacitor with connecting wire carrying current $I_c$.",
                "2. Draw circular perimeter curve $C$ around the wire.",
                "3. Draw flat circular surface $S_1$ spanning $C$ pierced by wire.",
                "4. Draw pot-shaped balloon surface $S_2$ sharing rim $C$ passing between plates with no wire.",
                "5. Show electric field vectors $\\vec{E}(t)$ passing through surface $S_2$ between capacitor plates."
            ]
        },
        "keyPointsAndKeywords": [
            "Four Maxwell Equations (Integral Formulation)",
            "Ampere Inconsistency between Capacitor Plates",
            "Surfaces S1 vs S2 Bounding Same Perimeter",
            "Rate of Electric Flux Change (dΦ_E / dt)",
            "Displacement Current Formula (I_d = ε₀ dΦ_E / dt)",
            "Restoration of Current Continuity"
        ],
        "termsGlossary": [
            {
                "symbol": "\\Phi_E",
                "term": "Electric Flux",
                "definition": "Surface integral of electric field over an open or closed surface ($\text{V}\cdot\text{m}$)."
            },
            {
                "symbol": "\\Phi_B",
                "term": "Magnetic Flux",
                "definition": "Surface integral of magnetic field over a surface (Webers, Wb)."
            },
            {
                "symbol": "I_d",
                "term": "Displacement Current",
                "definition": "Maxwell's correction term representing the magnetic effect of a time-varying electric field."
            },
            {
                "symbol": "\\oint \\vec{E}\\cdot d\\vec{l}",
                "term": "Induced Electromotive Force",
                "definition": "Work done per unit charge around a closed loop by non-electrostatic induced electric field."
            }
        ],
        "markingScheme": [
            "1.5 Marks: Correct statement of all 4 Maxwell's equations with associated physical principles.",
            "1 Mark: Demonstration of the charging capacitor paradox using surfaces $S_1$ and $S_2$.",
            "0.5 Mark: Derivation proving $I_d = I_c$ and complete resolution of paradox."
        ],
        "examinerTips": "In Gauss's Law for Magnetism, always state explicitly: 'Physical significance: Isolated magnetic monopoles do not exist in nature.'"
    },

    # Q22: Conversion of Galvanometer to Ammeter and Voltmeter
    {
        "id": "imp-phy-22",
        "number": 22,
        "title": "Conversion of Galvanometer into Ammeter and Voltmeter (Formulas & Circuit)",
        "shortLabel": "Galvanometer to Ammeter & Voltmeter",
        "chapterId": "phy-ch-4",
        "chapterTitle": "Moving Charges and Magnetism",
        "unit": "Magnetism",
        "marks": "3 Marks",
        "marksNum": 3,
        "category": "Derivation",
        "frequency": "Guaranteed Core Question (CBSE 2024 SQP Q27, 2023, 2022, 2020)",
        "questionPrompt": "(a) How can a moving coil galvanometer of resistance G and full scale deflection current I_g be converted into:\n  (i) An ammeter of range 0 to I (I > I_g)?\n  (ii) A voltmeter of range 0 to V?\n(b) Derive the mathematical formula for the required shunt resistance (S) and series resistance (R).\n(c) What are the ideal resistances of an ammeter and a voltmeter?",
        "ncertRef": {
            "textbook": "NCERT Physics Class 12, Part 1",
            "chapter": "Chapter 4: Moving Charges and Magnetism",
            "section": "Section 4.10.1: Conversion of Galvanometer (pp. 165–167)",
            "equations": "Eqs. (4.43), (4.44)",
            "figures": "Figs. 4.26, 4.27",
            "summary": "Parallel shunt resistor calculation for ammeter, series multiplier resistor calculation for voltmeter, and ideal resistance limits."
        },
        "theory": [
            "A Moving Coil Galvanometer is a very sensitive current detector that produces full scale deflection with very small currents ($I_g \\sim \\mu\\text{A}$ or $\\text{mA}$) and has finite internal resistance $G$.",
            "Conversion into Ammeter: An ammeter must be connected in series with the load. To avoid decreasing the circuit current, its effective resistance must be extremely low. This is achieved by connecting a low resistance wire called a Shunt Resistance ($S$) in parallel across the galvanometer coil.",
            "Conversion into Voltmeter: A voltmeter must be connected in parallel across the component. To avoid drawing significant current from the circuit, its effective resistance must be extremely high. This is achieved by connecting a high resistance ($R$) in series with the galvanometer coil.",
            "Ideal Limits: An Ideal Ammeter has ZERO internal resistance ($R_A = 0$). An Ideal Voltmeter has INFINITE internal resistance ($R_V = \\infty$)."
        ],
        "derivations": [
            {
                "name": "Part 1: Conversion into Ammeter (Shunt Resistance Formula)",
                "setup": "Let $G$ be the resistance of the galvanometer and $I_g$ be the current producing full scale deflection. We wish to convert it into an ammeter of range 0 to $I$ ($I > I_g$) by connecting a low shunt resistance $S$ in parallel.",
                "steps": [
                    {
                        "text": "When total current $I$ enters the instrument, current $I_g$ flows through the galvanometer, and the remaining current passes through the shunt resistor:",
                        "equation": "I_s = I - I_g"
                    },
                    {
                        "text": "Since the galvanometer and shunt resistor are connected in parallel, the potential difference across them is equal:",
                        "equation": "V_g = V_s \\quad \\implies \\quad I_g \\cdot G = I_s \\cdot S"
                    },
                    {
                        "text": "Substituting $I_s = I - I_g$ into the equation:",
                        "equation": "I_g G = (I - I_g) S"
                    },
                    {
                        "text": "Solving for required shunt resistance $S$:",
                        "equation": "S = \\frac{I_g G}{I - I_g}"
                    },
                    {
                        "text": "Effective total resistance $R_A$ of the resulting ammeter (parallel combination):",
                        "equation": "\\frac{1}{R_A} = \\frac{1}{G} + \\frac{1}{S} \\quad \\implies \\quad R_A = \\frac{G S}{G + S} < S \\ll G"
                    }
                ],
                "specialCases": [
                    {
                        "title": "Scale Multiplying Factor (n = I / Ig):",
                        "text": "If range is to be extended by factor $n = I / I_g$:",
                        "equation": "S = \\frac{G}{n - 1}"
                    }
                ],
                "finalFormula": "S = \\frac{I_g G}{I - I_g}, \\quad R_A = \\frac{GS}{G+S} \\approx 0"
            },
            {
                "name": "Part 2: Conversion into Voltmeter (Series Resistance Formula)",
                "setup": "Let $G$ be the resistance of the galvanometer and $I_g$ be its full scale deflection current. We wish to convert it into a voltmeter of range 0 to $V$ by connecting a high resistance $R$ in series.",
                "steps": [
                    {
                        "text": "Total resistance of the series combination of galvanometer and multiplier resistor is:",
                        "equation": "R_V = G + R"
                    },
                    {
                        "text": "When maximum potential difference $V$ is applied across the combination, the current through both components is restricted to $I_g$:",
                        "equation": "V = I_g (G + R)"
                    },
                    {
                        "text": "Dividing by $I_g$:",
                        "equation": "G + R = \\frac{V}{I_g}"
                    },
                    {
                        "text": "Solving for the required series resistance $R$:",
                        "equation": "R = \\frac{V}{I_g} - G"
                    },
                    {
                        "text": "Effective total resistance $R_V$ of the resulting voltmeter is very large:",
                        "equation": "R_V = G + R \\gg G"
                    }
                ],
                "specialCases": [
                    {
                        "title": "Ideal Voltmeter:",
                        "text": "For an ideal voltmeter that draws zero current from the circuit:",
                        "equation": "R_V = \\infty \\quad (R \\to \\infty)"
                    }
                ],
                "finalFormula": "R = \\frac{V}{I_g} - G, \\quad R_V = G + R \\to \\infty"
            }
        ],
        "diagram": {
            "hasDiagram": True,
            "diagramId": "galvanometer-conversion",
            "title": "Galvanometer Conversion Circuits: Ammeter & Voltmeter",
            "examDrawingGuide": [
                "1. Ammeter Circuit: Draw galvanometer coil $G$ with branch carrying $I_g$; draw parallel shunt resistor $S$ below it carrying $I - I_g$; enclose both in dashed box labeled 'Ammeter' with terminals connecting to line current $I$.",
                "2. Voltmeter Circuit: Draw galvanometer coil $G$ in series with high resistor $R$; show common current $I_g$ flowing through both; enclose in dashed box labeled 'Voltmeter' across terminals measuring potential $V$."
            ]
        },
        "keyPointsAndKeywords": [
            "Ammeter: Low Shunt Resistance S in Parallel",
            "Voltmeter: High Resistance R in Series",
            "Equal Parallel Potentials (Ig·G = (I - Ig)·S)",
            "Series Ohm's Law (V = Ig·(G + R))",
            "Shunt Formula S = Ig G / (I - Ig)",
            "Series Resistor Formula R = V / Ig - G",
            "Ideal Ammeter Resistance = 0",
            "Ideal Voltmeter Resistance = ∞"
        ],
        "termsGlossary": [
            {
                "symbol": "G",
                "term": "Galvanometer Resistance",
                "definition": "Internal resistance of the moving copper coil of the galvanometer, measured in Ohms ($\\Omega$)."
            },
            {
                "symbol": "I_g",
                "term": "Full Scale Deflection Current",
                "definition": "Minimum current needed to produce complete full scale angular deflection of the galvanometer pointer."
            },
            {
                "symbol": "S",
                "term": "Shunt Resistance",
                "definition": "Very low resistance connected in parallel to bypass the bulk of current around the galvanometer coil."
            },
            {
                "symbol": "R",
                "term": "Series Multiplier Resistance",
                "definition": "Very high resistance connected in series to limit current and drop the bulk of the measured voltage."
            },
            {
                "symbol": "R_A, R_V",
                "term": "Instrument Resistances",
                "definition": "Total effective resistance of converted ammeter ($R_A = GS/(G+S)$) and voltmeter ($R_V = G+R$)."
            }
        ],
        "markingScheme": [
            "1.5 Marks: Circuit diagram and derivation of shunt resistance $S = \\frac{I_g G}{I - I_g}$ for ammeter conversion.",
            "1 Mark: Circuit diagram and derivation of series resistance $R = \\frac{V}{I_g} - G$ for voltmeter conversion.",
            "0.5 Mark: Correct values for ideal ammeter ($0$) and ideal voltmeter ($\\infty$)."
        ],
        "examinerTips": "Remember: Ammeter is connected in SERIES with the circuit, but its internal shunt is connected in PARALLEL. Voltmeter is connected in PARALLEL with the circuit, but its internal resistor is connected in SERIES."
    }
]
