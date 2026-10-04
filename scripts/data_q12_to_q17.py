# -*- coding: utf-8 -*-
"""
Questions 12 to 17 for CBSE Class 12 Physics Top 22 Questions
"""

questions_12_to_17 = [
    # Q12: EM Waves Properties & Spectrum
    {
        "id": "imp-phy-12",
        "number": 12,
        "title": "Properties of Electromagnetic Waves & EM Spectrum Applications",
        "shortLabel": "EM Waves Properties & Spectrum",
        "chapterId": "phy-ch-8",
        "chapterTitle": "Electromagnetic Waves",
        "unit": "Electromagnetic Waves",
        "marks": "3 Marks",
        "marksNum": 3,
        "category": "Theory & Conceptual",
        "frequency": "High Frequency Core Question (CBSE 2024 SQP Q8, 2023, 2022)",
        "questionPrompt": "(a) State four important characteristic properties of electromagnetic waves.\n(b) Prove that the speed of electromagnetic waves in vacuum is given by c = 1 / √(μ₀ε₀).\n(c) Name the electromagnetic radiations used for: (i) Radar systems, (ii) Water purification, (iii) Treating muscular strains, and (iv) Diagnostic medical imaging.",
        "ncertRef": {
            "textbook": "NCERT Physics Class 12, Part 1",
            "chapter": "Chapter 8: Electromagnetic Waves",
            "section": "Sections 8.3 & 8.4 (pp. 274–284)",
            "equations": "Eqs. (8.9), (8.10), (8.13)",
            "figures": "Figs. 8.4, 8.5",
            "summary": "Transverse nature of electric and magnetic fields, Maxwell speed relation, energy transport, and complete electromagnetic spectrum breakdown."
        },
        "theory": [
            "An Electromagnetic Wave is a self-sustaining wave propagating through space composed of sinusoidally oscillating electric ($\\vec{E}$) and magnetic ($\\vec{B}$) fields oriented mutually perpendicular to each other and perpendicular to the direction of propagation.",
            "Property 1 (Transverse Nature): Both $\\vec{E}$ and $\\vec{B}$ vectors oscillate perpendicular to the wave propagation vector $\\vec{k}$ ($$\\vec{E} \\perp \\vec{B} \\perp \\vec{k}$$).",
            "Property 2 (Speed in Vacuum): All EM waves travel in free space with the invariant speed of light: $$c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} \\approx 3 \\times 10^8 \\text{ m/s}$$",
            "Property 3 (Electric to Magnetic Amplitude Ratio): At every point and instant, the ratio of electric field amplitude to magnetic field amplitude equals the speed of light: $$\\frac{E_0}{B_0} = c$$",
            "Property 4 (Equal Energy Sharing): Total energy density $u$ is partitioned equally between electric and magnetic fields: $$u_E = \\frac{1}{2}\\varepsilon_0 E^2 = \\frac{B^2}{2\\mu_0} = u_B \\quad \\implies \\quad u = \\varepsilon_0 E^2 = \\frac{B^2}{\\mu_0}$$",
            "Property 5 (Radiation Pressure): EM waves carry linear momentum $p = U / c$. When absorbed by a surface, they exert mechanical radiation pressure."
        ],
        "derivations": [
            {
                "name": "Derivation of Wave Speed Relation from Maxwell's Equations",
                "setup": "Consider a plane electromagnetic wave propagating along the positive x-axis in vacuum, with electric field oscillating along the y-axis and magnetic field oscillating along the z-axis.",
                "steps": [
                    {
                        "text": "The harmonic wave equations for electric and magnetic field components are:",
                        "equation": "E_y(x, t) = E_0 \\sin(kx - \\omega t), \\quad B_z(x, t) = B_0 \\sin(kx - \\omega t)"
                    },
                    {
                        "text": "Applying Faraday's Law in differential form ($\\frac{\\partial E_y}{\\partial x} = -\\frac{\\partial B_z}{\\partial t}$):",
                        "equation": "k E_0 \\cos(kx - \\omega t) = \\omega B_0 \\cos(kx - \\omega t) \\quad \\implies \\quad \\frac{E_0}{B_0} = \\frac{\\omega}{k} = c"
                    },
                    {
                        "text": "Applying Ampere-Maxwell's Law in vacuum ($\\frac{\\partial B_z}{\\partial x} = -\\mu_0 \\varepsilon_0 \\frac{\\partial E_y}{\\partial t}$):",
                        "equation": "k B_0 = \\mu_0 \\varepsilon_0 \\omega E_0 \\quad \\implies \\quad \\frac{B_0}{E_0} = \\mu_0 \\varepsilon_0 \\left(\\frac{\\omega}{k}\\right) = \\mu_0 \\varepsilon_0 c"
                    },
                    {
                        "text": "Multiplying the two amplitude ratio equations:",
                        "equation": "\\left(\\frac{E_0}{B_0}\\right) \\cdot \\left(\\frac{B_0}{E_0}\\right) = c \\cdot (\\mu_0 \\varepsilon_0 c) \\quad \\implies \\quad 1 = \\mu_0 \\varepsilon_0 c^2"
                    },
                    {
                        "text": "Solving for wave speed $c$:",
                        "equation": "c^2 = \\frac{1}{\\mu_0 \\varepsilon_0} \\quad \\implies \\quad c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}}"
                    }
                ],
                "specialCases": [
                    {
                        "title": "Speed in Material Medium:",
                        "text": "In a dielectric medium with permittivity $\\varepsilon$ and permeability $\\mu$, refractive index $n$ is:",
                        "equation": "v = \\frac{1}{\\sqrt{\\mu \\varepsilon}} = \\frac{c}{\\sqrt{\\mu_r \\varepsilon_r}} = \\frac{c}{n}"
                    }
                ],
                "finalFormula": "c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} = 3 \\times 10^8 \\text{ m/s}, \\quad \\frac{E_0}{B_0} = c"
            }
        ],
        "diagram": {
            "hasDiagram": True,
            "diagramId": "em-wave-structure",
            "title": "Transverse Electromagnetic Wave Propagation",
            "examDrawingGuide": [
                "1. Draw 3D orthogonal coordinate axes: X (propagation direction), Y (electric field), Z (magnetic field).",
                "2. Draw transverse sine wave in XY plane representing oscillating electric field $\\vec{E}$.",
                "3. Draw transverse sine wave in XZ plane representing oscillating magnetic field $\\vec{B}$ in phase with $\\vec{E}$.",
                "4. Draw arrows showing $\\vec{E} \\times \\vec{B}$ pointing along the positive X direction."
            ]
        },
        "keyPointsAndKeywords": [
            "Transverse Wave Character (E ⟂ B ⟂ v)",
            "Vacuum Speed c = 1/√(μ₀ε₀)",
            "Amplitude Ratio E₀/B₀ = c",
            "Equal Energy Density Division (u_E = u_B)",
            "Momentum and Radiation Pressure (p = U/c)",
            "Spectrum Applications (Microwaves for radar, UV for germicidal purification, IR for muscular therapy, X-rays for bone radiography)"
        ],
        "termsGlossary": [
            {
                "symbol": "c",
                "term": "Speed of Light in Vacuum",
                "definition": "Universal speed constant of electromagnetic waves ($2.9979 \\times 10^8 \\text{ m/s}$)."
            },
            {
                "symbol": "\\mu_0",
                "term": "Permeability of Free Space",
                "definition": "Magnetic constant ($4\\pi \\times 10^{-7} \\text{ T}\\cdot\\text{m/A}$)."
            },
            {
                "symbol": "\\varepsilon_0",
                "term": "Permittivity of Free Space",
                "definition": "Electric constant ($8.854 \\times 10^{-12} \\text{ C}^2/\\text{N}\\cdot\\text{m}^2$)."
            },
            {
                "symbol": "u",
                "term": "Total Energy Density",
                "definition": "Total electromagnetic energy stored per unit volume of space ($\\text{J/m}^3$)."
            }
        ],
        "markingScheme": [
            "1 Mark: Statement of four characteristic properties of EM waves.",
            "1 Mark: Mathematical derivation of $c = 1/\\sqrt{\\mu_0\\varepsilon_0}$ from Maxwell equations.",
            "1 Mark: Identification of all four spectrum applications (0.25 Mark each)."
        ],
        "examinerTips": "In spectrum applications: Radar uses Microwaves; Water purification uses Ultraviolet (germicidal); Muscular pain uses Infrared (heat lamps); Bone diagnostics uses X-rays."
    },

    # Q13: RMS Value of AC
    {
        "id": "imp-phy-13",
        "number": 13,
        "title": "Root-Mean-Square (RMS) Values of AC: Derivation of I_rms and E_rms",
        "shortLabel": "RMS Value of AC (I_rms = I₀/√2)",
        "chapterId": "phy-ch-7",
        "chapterTitle": "Alternating Current",
        "unit": "Electromagnetic Induction & Alternating Current",
        "marks": "3 Marks",
        "marksNum": 3,
        "category": "Derivation",
        "frequency": "High Frequency Core Derivation (CBSE 2024, 2023, 2020, 2018)",
        "questionPrompt": "(a) Define the root-mean-square (RMS) or effective value of alternating current.\n(b) Derive the mathematical relation between RMS value (I_rms) and peak value (I₀) of sinusoidal alternating current over a complete cycle.\n(c) The household AC mains voltage in India is 220 V at 50 Hz. Calculate its peak voltage and explain why a 220 V AC shock is more severe than a 220 V DC shock.",
        "ncertRef": {
            "textbook": "NCERT Physics Class 12, Part 1",
            "chapter": "Chapter 7: Alternating Current",
            "section": "Sections 7.2 & 7.3 (pp. 235–239)",
            "equations": "Eqs. (7.7), (7.8), (7.9)",
            "figures": "Fig. 7.3",
            "summary": "Joule heating equivalence, integration of squared sinusoidal waveform over full period, and comparison between peak and RMS values."
        },
        "theory": [
            "The Root-Mean-Square (RMS) or virtual/effective value of alternating current is defined as that value of steady direct current (DC) which would generate the same amount of heat in a given resistor in a given time as is produced by the AC passing through the same resistor for the same time (one complete cycle).",
            "The average value of AC over a complete cycle is identically zero ($\\langle I \\rangle_{\\text{cycle}} = 0$) because positive and negative half-cycles cancel out. Hence, AC cannot be rated by its simple arithmetic average.",
            "Heating effect depends on $I^2 R$, and since $I^2$ is always positive, thermal dissipation provides an unambiguous physical measure of AC magnitude.",
            "Domestic AC rating of $220\\text{ V}$ is the RMS voltage ($V_{\\text{rms}}$). The corresponding peak voltage is: $$V_0 = \\sqrt{2} \\times 220\\text{ V} \\approx 311.13\\text{ V}$$",
            "A $220\\text{ V}$ AC shock is more fatal and dangerous than a $220\\text{ V}$ DC shock because the AC voltage fluctuates up to a peak value of $\\pm 311\\text{ V}$ twice every cycle, whereas DC remains steady at $220\\text{ V}$."
        ],
        "derivations": [
            {
                "name": "Mathematical Derivation of I_rms = I₀ / √2",
                "setup": "Consider a sinusoidal alternating current flowing through a resistor of resistance $R$: $$I = I_0 \\sin(\\omega t)$$ where $I_0$ is the peak amplitude, $\\omega = 2\\pi/T$ is the angular frequency, and $T$ is the time period of one complete cycle.",
                "steps": [
                    {
                        "text": "By Joule's law of heating, the thermal energy $dH$ generated in the resistor during an infinitesimal time interval $dt$ is:",
                        "equation": "dH = I^2 R \\, dt = [I_0 \\sin(\\omega t)]^2 R \\, dt = I_0^2 R \\sin^2(\\omega t) \\, dt"
                    },
                    {
                        "text": "Total heat $H$ produced in the resistor over one complete cycle period ($t = 0$ to $t = T$) is obtained by integration:",
                        "equation": "H = \\int_0^T I_0^2 R \\sin^2(\\omega t) \\, dt = I_0^2 R \\int_0^T \\sin^2(\\omega t) \\, dt"
                    },
                    {
                        "text": "Using trigonometric identity $\\sin^2(\\omega t) = \\frac{1 - \\cos(2\\omega t)}{2}$:",
                        "equation": "H = I_0^2 R \\int_0^T \\frac{1 - \\cos(2\\omega t)}{2} \\, dt = \\frac{I_0^2 R}{2} \\left[ \\int_0^T dt - \\int_0^T \\cos(2\\omega t) \\, dt \\right]"
                    },
                    {
                        "text": "Evaluating the definite integrals over one complete period $T = 2\\pi/\\omega$:",
                        "equation": "\\int_0^T dt = T, \\quad \\int_0^T \\cos(2\\omega t) \\, dt = \\left[ \\frac{\\sin(2\\omega t)}{2\\omega} \\right]_0^T = \\frac{\\sin(4\\pi) - \\sin(0)}{2\\omega} = 0"
                    },
                    {
                        "text": "Therefore, total heat produced by alternating current in one cycle is:",
                        "equation": "H = \\frac{I_0^2 R T}{2}"
                    },
                    {
                        "text": "If steady current $I_{\\text{rms}}$ produces the exact same amount of heat in the same resistance $R$ over the same time $T$:",
                        "equation": "H = I_{\\text{rms}}^2 R T"
                    },
                    {
                        "text": "Equating the two heat expressions:",
                        "equation": "I_{\\text{rms}}^2 R T = \\frac{I_0^2 R T}{2} \\quad \\implies \\quad I_{\\text{rms}}^2 = \\frac{I_0^2}{2}"
                    },
                    {
                        "text": "Taking the square root on both sides:",
                        "equation": "I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}} \\approx 0.707 \\, I_0"
                    }
                ],
                "specialCases": [
                    {
                        "title": "RMS Voltage Relation:",
                        "text": "By Ohm's law, the effective RMS voltage relates identically to peak voltage:",
                        "equation": "V_{\\text{rms}} = \\frac{V_0}{\\sqrt{2}} \\approx 0.707 \\, V_0 \\quad \\implies \\quad V_0 = \\sqrt{2} \\, V_{\\text{rms}}"
                    }
                ],
                "finalFormula": "I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}} = 0.707 I_0, \\quad V_{\\text{rms}} = \\frac{V_0}{\\sqrt{2}} = 0.707 V_0"
            }
        ],
        "diagram": {
            "hasDiagram": True,
            "diagramId": "ac-rms-waveform",
            "title": "Sinusoidal AC Waveform & RMS Value",
            "examDrawingGuide": [
                "1. Draw coordinate axes: horizontal time axis $t$, vertical current axis $I(t)$.",
                "2. Draw one full cycle of sine wave reaching positive peak $+I_0$ at $T/4$ and negative peak $-I_0$ at $3T/4$.",
                "3. Draw squared current curve $I^2(t)$ which is entirely positive and oscillates between $0$ and $I_0^2$.",
                "4. Draw dashed horizontal line at $I_0^2/2$ representing the mean squared current, and mark $I_{\\text{rms}} = I_0/\\sqrt{2} \\approx 0.707 I_0$."
            ]
        },
        "keyPointsAndKeywords": [
            "Joule Heating Equivalence Definition",
            "Zero Average Current Over Full Cycle (⟨I⟩ = 0)",
            "Integration of sin²(ωt) over Period T = T/2",
            "Heat Balance Equation (I_rms²RT = I₀²RT / 2)",
            "RMS Formula (I_rms = I₀ / √2)",
            "Domestic Peak Voltage (V₀ = 220 × √2 = 311 V)"
        ],
        "termsGlossary": [
            {
                "symbol": "I_{\\text{rms}}",
                "term": "Root-Mean-Square Current",
                "definition": "Effective thermal value of alternating current ($I_{\\text{rms}} = I_0 / \\sqrt{2}$), measured in Amperes (A)."
            },
            {
                "symbol": "I_0",
                "term": "Peak Current (Amplitude)",
                "definition": "Maximum instantaneous value attained by alternating current in either half-cycle (A)."
            },
            {
                "symbol": "T",
                "term": "Time Period",
                "definition": "Time required to execute one full electrical cycle: $T = 1/f = 2\\pi/\\omega$, measured in seconds (s)."
            },
            {
                "symbol": "\\omega",
                "term": "Angular Frequency",
                "definition": "Rate of change of phase angle: $\\omega = 2\\pi f$, measured in radians per second (rad/s)."
            }
        ],
        "markingScheme": [
            "1 Mark: Definition of RMS current in terms of Joule heating equivalence.",
            "1.5 Marks: Step-by-step calculus integration of heat $H = \\int I^2 R dt$ using identity $\\sin^2\\omega t = (1 - \\cos 2\\omega t)/2$.",
            "0.5 Mark: Numerical calculation of peak voltage ($311\\text{ V}$) and explanation of why AC shock is more hazardous."
        ],
        "examinerTips": "In evaluating $\\int_0^T \\cos(2\\omega t) dt$, show explicitly that it integrates to zero. Skipping this step often costs 0.5 marks in CBSE evaluation."
    },

    # Q14: Displacement Current & Ampere-Maxwell Law
    {
        "id": "imp-phy-14",
        "number": 14,
        "title": "Displacement Current: Need, Mathematical Derivation & Continuity Proof",
        "shortLabel": "Displacement Current & Ampere-Maxwell Law",
        "chapterId": "phy-ch-8",
        "chapterTitle": "Electromagnetic Waves",
        "unit": "Electromagnetic Waves",
        "marks": "3 Marks",
        "marksNum": 3,
        "category": "Derivation & Conceptual",
        "frequency": "High Frequency (CBSE 2024 SQP Q8, 2023, 2020, 2019)",
        "questionPrompt": "(a) State Ampere's circuital law and explain why Maxwell found it logically inconsistent during the charging of a capacitor.\n(b) Define displacement current and derive its mathematical expression in terms of time rate of change of electric flux.\n(c) Show that conduction current in the connecting wires is equal to displacement current inside the dielectric gap during capacitor charging.",
        "ncertRef": {
            "textbook": "NCERT Physics Class 12, Part 1",
            "chapter": "Chapter 8: Electromagnetic Waves",
            "section": "Sections 8.2 & 8.3 (pp. 269–274)",
            "equations": "Eqs. (8.1), (8.4), (8.5)",
            "figures": "Figs. 8.1, 8.2",
            "summary": "Inconsistency of Ampere's circuital law across capacitor plates, displacement current definition, and modified Maxwell-Ampere circuital law."
        },
        "theory": [
            "Ampere's Circuital Law states that the line integral of magnetic field $\\vec{B}$ around any closed loop equals $\\mu_0$ times the total current threading the loop: $$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_c$$",
            "Maxwell pointed out that this law is mathematically inconsistent for time-dependent electromagnetic situations (such as charging a capacitor).",
            "Contradiction: If we construct a flat disc surface $S_1$ capped by a circular loop enclosing the wire, current pierces the surface ($I_{\\text{enc}} = I_c$). But if we construct a pot-shaped surface $S_2$ bulging between the capacitor plates sharing the exact same perimeter loop, no wire passes through it, so $I_{\\text{enc}} = 0$. This leads to the contradiction $\\mu_0 I_c = 0$.",
            "Maxwell's Resolution: A changing electric field in the space between capacitor plates induces a fictitious current termed Displacement Current ($I_d$).",
            "Displacement Current is that current which arises due to the time rate of change of electric flux, producing the same magnetic effects as a conduction current."
        ],
        "derivations": [
            {
                "name": "Mathematical Derivation of Displacement Current (Id = ε₀ dΦ/dt)",
                "setup": "Consider a parallel plate capacitor with plates of area $A$ being charged by a conduction current $I_c(t)$. At any instant $t$, let charge on the plates be $q(t)$.",
                "steps": [
                    {
                        "text": "The uniform electric field between the capacitor plates at instant $t$ is:",
                        "equation": "E(t) = \\frac{\\sigma(t)}{\\varepsilon_0} = \\frac{q(t)}{\\varepsilon_0 A}"
                    },
                    {
                        "text": "The total electric flux $\\Phi_E$ crossing between the plates of area $A$ is:",
                        "equation": "\\Phi_E = E(t) \\cdot A = \\left( \\frac{q(t)}{\\varepsilon_0 A} \\right) A = \\frac{q(t)}{\\varepsilon_0}"
                    },
                    {
                        "text": "Rearranging to express the instantaneous plate charge $q(t)$ in terms of electric flux:",
                        "equation": "q(t) = \\varepsilon_0 \\Phi_E"
                    },
                    {
                        "text": "Differentiating both sides with respect to time $t$:",
                        "equation": "\\frac{dq}{dt} = \\varepsilon_0 \\frac{d\\Phi_E}{dt}"
                    },
                    {
                        "text": "Since the rate of charge accumulation $dq/dt$ is the conduction current $I_c$ flowing into the plates:",
                        "equation": "I_c = \\varepsilon_0 \\frac{d\\Phi_E}{dt}"
                    },
                    {
                        "text": "Maxwell identified this time-derivative of electric flux as the Displacement Current $I_d$:",
                        "equation": "I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt}"
                    },
                    {
                        "text": "Hence, the conduction current in the leads equals the displacement current in the gap at every instant:",
                        "equation": "I_c = I_d \\quad (\\text{Continuity of Current})"
                    }
                ],
                "specialCases": [
                    {
                        "title": "Generalized Ampere-Maxwell Circuital Law:",
                        "text": "Total current is the sum of conduction current and displacement current, restoring universal consistency:",
                        "equation": "\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 (I_c + I_d) = \\mu_0 I_c + \\mu_0 \\varepsilon_0 \\frac{d\\Phi_E}{dt}"
                    }
                ],
                "finalFormula": "I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt}, \\quad \\oint \\vec{B}\\cdot d\\vec{l} = \\mu_0\\left(I_c + \\varepsilon_0\\frac{d\\Phi_E}{dt}\\right)"
            }
        ],
        "diagram": {
            "hasDiagram": True,
            "diagramId": "displacement-current",
            "title": "Charging Capacitor & Displacement Current",
            "examDrawingGuide": [
                "1. Draw parallel plate capacitor connected to an AC or charging DC battery circuit with conduction current $I_c$.",
                "2. Draw circular Ampere loop $C$ around the wire outside the capacitor.",
                "3. Draw flat disc surface $S_1$ pierced by wire ($I_{\\text{enc}} = I_c$).",
                "4. Draw pot-shaped balloon surface $S_2$ passing through the plates with rim $C$, showing changing electric field $\\vec{E}(t)$ generating displacement current $I_d$."
            ]
        },
        "keyPointsAndKeywords": [
            "Inconsistency of Ampere's Law for Time-Varying Fields",
            "Pot-shaped Gaussian Surface Contradiction",
            "Electric Flux Relation (Φ_E = q / ε₀)",
            "Displacement Current Formula (I_d = ε₀ dΦ_E / dt)",
            "Continuity Principle (I_c = I_d)",
            "Generalized Ampere-Maxwell Law (∮ B · dl = μ₀(I_c + I_d))"
        ],
        "termsGlossary": [
            {
                "symbol": "I_d",
                "term": "Displacement Current",
                "definition": "Current produced by a time-varying electric field ($I_d = \\varepsilon_0 d\\Phi_E / dt$), having units of Amperes (A)."
            },
            {
                "symbol": "I_c",
                "term": "Conduction Current",
                "definition": "Rate of physical transfer of charge carriers through conducting wires ($I_c = dq/dt$)."
            },
            {
                "symbol": "\\Phi_E",
                "term": "Electric Flux",
                "definition": "Total electric field lines crossing through the capacitor cross-sectional area ($\text{V}\cdot\text{m}$)."
            },
            {
                "symbol": "\\mu_0 \\varepsilon_0",
                "term": "Electromagnetic Vacuum Product",
                "definition": "Product of magnetic and electric vacuum constants relating wave propagation to the speed of light ($1/c^2$)."
            }
        ],
        "markingScheme": [
            "1 Mark: Clear explanation of Ampere's circuital law contradiction using two surfaces $S_1$ and $S_2$.",
            "1 Mark: Mathematical derivation connecting charge $q = \\varepsilon_0 \\Phi_E$ to $I_d = \\varepsilon_0 d\\Phi_E/dt$.",
            "1 Mark: Proof that $I_c = I_d$ and statement of the generalized Ampere-Maxwell equation."
        ],
        "examinerTips": "Do NOT write that displacement current involves physical moving electrons! It is purely due to the rate of change of electric flux, yet produces identical magnetic fields."
    },

    # Q15: Wheatstone Bridge
    {
        "id": "imp-phy-15",
        "number": 15,
        "title": "Wheatstone Bridge: Principle, Balanced Condition Derivation & Metre Bridge",
        "shortLabel": "Wheatstone Bridge (Balanced Condition P/Q = R/S)",
        "chapterId": "phy-ch-3",
        "chapterTitle": "Current Electricity",
        "unit": "Current Electricity",
        "marks": "3 Marks",
        "marksNum": 3,
        "category": "Derivation",
        "frequency": "High Frequency Core Derivation (CBSE 2024 SQP Q9, 2023, 2022, 2019)",
        "questionPrompt": "(a) State the working principle of a Wheatstone bridge.\n(b) Using Kirchhoff's circuit rules, derive the balanced condition for a Wheatstone bridge network: P / Q = R / S.\n(c) Why is the Wheatstone bridge null deflection method considered superior to an ordinary ohmmeter for measuring resistance?",
        "ncertRef": {
            "textbook": "NCERT Physics Class 12, Part 1",
            "chapter": "Chapter 3: Current Electricity",
            "section": "Sections 3.13 & 3.14 (pp. 118–121)",
            "equations": "Eqs. (3.44), (3.45), (3.46)",
            "figures": "Figs. 3.25, 3.26",
            "summary": "Bridge loop network, application of Kirchhoff's Junction and Loop rules, and null balance condition."
        },
        "theory": [
            "A Wheatstone Bridge is an electrical circuit arrangement consisting of four resistors $P, Q, R, S$ interconnected in a diamond loop, used to measure an unknown electrical resistance with high precision.",
            "Working Principle (Null Deflection Method): When the bridge is balanced, the electric potential at junction $B$ equals the electric potential at junction $D$ ($V_B = V_D$). Consequently, zero current flows through the central galvanometer branch ($I_g = 0$), producing null deflection.",
            "Superiority over ordinary meters: Because it operates on a null deflection principle, no current is drawn from the circuit at balance. The measurement is completely independent of the internal resistance of the cell and galvanometer resistance.",
            "Maximum Sensitivity: The Wheatstone bridge achieves maximum measurement sensitivity when all four arm resistances $P, Q, R, S$ are of approximately the same order of magnitude."
        ],
        "derivations": [
            {
                "name": "Derivation of Balanced Condition Using Kirchhoff's Rules",
                "setup": "Consider four resistors $P, Q, R, S$ arranged along arms $AB, BC, AD, DC$ of diamond network $ABCD$. A galvanometer of resistance $G$ connects between junctions $B$ and $D$. A battery of EMF $\\varepsilon$ is connected between junctions $A$ and $C$.",
                "steps": [
                    {
                        "text": "Let current entering junction $A$ split into $I_1$ along arm $AB$ (resistor $P$) and $I_2$ along arm $AD$ (resistor $R$). At junction $B$, current $I_g$ enters the galvanometer.",
                        "equation": "I = I_1 + I_2"
                    },
                    {
                        "text": "Applying Kirchhoff's Current Law (Junction Rule) at junction $B$ and junction $D$:",
                        "equation": "I_{BC} = I_1 - I_g, \\quad I_{DC} = I_2 + I_g"
                    },
                    {
                        "text": "Applying Kirchhoff's Voltage Law (Loop Rule) to closed mesh $ABDA$ (traversing clockwise):",
                        "equation": "-I_1 P - I_g G + I_2 R = 0 \\quad \\implies \\quad I_1 P + I_g G = I_2 R"
                    },
                    {
                        "text": "Applying Kirchhoff's Voltage Law (Loop Rule) to closed mesh $BCDB$ (traversing clockwise):",
                        "equation": "-(I_1 - I_g)Q + (I_2 + I_g)S + I_g G = 0"
                    },
                    {
                        "text": "Under the balanced condition, the galvanometer shows null deflection, meaning $I_g = 0$:",
                        "equation": "I_g = 0"
                    },
                    {
                        "text": "Substituting $I_g = 0$ into the loop equation for $ABDA$:",
                        "equation": "I_1 P = I_2 R \\quad \\text{--- (Equation 1)}"
                    },
                    {
                        "text": "Substituting $I_g = 0$ into the loop equation for $BCDB$:",
                        "equation": "I_1 Q = I_2 S \\quad \\text{--- (Equation 2)}"
                    },
                    {
                        "text": "Dividing Equation 1 by Equation 2:",
                        "equation": "\\frac{I_1 P}{I_1 Q} = \\frac{I_2 R}{I_2 S} \\quad \\implies \\quad \\frac{P}{Q} = \\frac{R}{S}"
                    }
                ],
                "specialCases": [
                    {
                        "title": "Metre Bridge Application:",
                        "text": "If arms $P$ and $Q$ are replaced by a uniform slide-wire of length $100\\text{ cm}$ with balance point at length $l$:",
                        "equation": "\\frac{R}{S} = \\frac{l}{100 - l} \\quad \\implies \\quad S = R \\left(\\frac{100 - l}{l}\\right)"
                    }
                ],
                "finalFormula": "\\frac{P}{Q} = \\frac{R}{S} \\quad (\\text{when } I_g = 0)"
            }
        ],
        "diagram": {
            "hasDiagram": True,
            "diagramId": "wheatstone-bridge",
            "title": "Wheatstone Bridge Network & Balanced Deflection",
            "examDrawingGuide": [
                "1. Draw diamond shaped quadrilateral labeled junctions $A, B, C, D$.",
                "2. Place resistor $P$ along $AB$, resistor $Q$ along $BC$, resistor $R$ along $AD$, resistor $S$ along $DC$.",
                "3. Draw galvanometer $G$ with key $K_2$ bridging opposite junctions $B$ and $D$.",
                "4. Draw external battery $\\varepsilon$ with key $K_1$ connected across opposite junctions $A$ and $C$."
            ]
        },
        "keyPointsAndKeywords": [
            "Null Deflection Principle (Ig = 0)",
            "Equal Potentials at Junctions (VB = VD)",
            "Kirchhoff's Junction Rule Application",
            "Kirchhoff's Loop Rule Application",
            "Balanced Ratio Formula (P/Q = R/S)",
            "Independent of Galvanometer & Cell Resistance"
        ],
        "termsGlossary": [
            {
                "symbol": "P, Q",
                "term": "Ratio Arms",
                "definition": "Known standard resistance arms whose ratio determines the measurement scale."
            },
            {
                "symbol": "R",
                "term": "Known Standard Resistance",
                "definition": "Variable precision resistance box adjusted to achieve exact null balance."
            },
            {
                "symbol": "S",
                "term": "Unknown Resistance",
                "definition": "Resistance of the test conductor to be measured ($S = R \\cdot Q/P$)."
            },
            {
                "symbol": "I_g",
                "term": "Galvanometer Current",
                "definition": "Current flowing through the detector bridge branch ($I_g = 0$ at balance)."
            }
        ],
        "markingScheme": [
            "0.5 Mark: Principle of Wheatstone bridge (null deflection, $V_B = V_D$).",
            "2 Marks: Rigorous derivation applying Kirchhoff's loop equations to loops ABDA and BCDB and dividing.",
            "0.5 Mark: Explanation of superiority (draws zero current from circuit at balance)."
        ],
        "examinerTips": "Clearly show the sign conventions when traversing loops clockwise. If an arrow is drawn against current traversal, the IR term must be written with a positive sign."
    },

    # Q16: Magnetic Materials (Dia, Para, Ferro)
    {
        "id": "imp-phy-16",
        "number": 16,
        "title": "Magnetic Materials: Properties of Diamagnetic, Paramagnetic & Ferromagnetic",
        "shortLabel": "Magnetic Materials (Dia, Para, Ferro)",
        "chapterId": "phy-ch-5",
        "chapterTitle": "Magnetism and Matter",
        "unit": "Magnetism",
        "marks": "3 Marks",
        "marksNum": 3,
        "category": "Comparative Theory",
        "frequency": "High Frequency Comparative Question (CBSE 2024 SQP Q20, 2023, 2020)",
        "questionPrompt": "(a) Classify magnetic materials into diamagnetic, paramagnetic, and ferromagnetic substances on the basis of their magnetic susceptibility (χ) and relative permeability (μ_r).\n(b) Explain how the magnetic susceptibility of each type varies with absolute temperature T (State Curie's Law and Curie-Weiss Law).\n(c) How does a specimen of each material behave when suspended freely in a non-uniform external magnetic field?",
        "ncertRef": {
            "textbook": "NCERT Physics Class 12, Part 1",
            "chapter": "Chapter 5: Magnetism and Matter",
            "section": "Sections 5.6 & 5.7 (pp. 191–197)",
            "equations": "Eqs. (5.14), (5.15), (5.16), (5.17)",
            "figures": "Figs. 5.11, 5.12, 5.13",
            "summary": "Atomic origin of magnetism, comparative table of dia, para, and ferro substances, Curie's temperature dependence, and domain theory."
        },
        "theory": [
            "Diamagnetic Substances: Substances that develop weak magnetization in a direction opposite to the applied external magnetic field. They are feebly repelled by magnets. Origin: Induced paired electron orbital magnetic moments opposing external flux (Lenz's law). Examples: Bismuth, Copper, Water, Lead, Nitrogen.",
            "Paramagnetic Substances: Substances that develop weak magnetization in the same direction as the applied external magnetic field. They are feebly attracted by magnets. Origin: Permanent atomic dipole moments aligning partially along the field against thermal agitation. Examples: Aluminium, Sodium, Calcium, Oxygen (gas), Platinum.",
            "Ferromagnetic Substances: Substances that develop strong magnetization in the same direction as the applied external magnetic field, retaining magnetism even after field removal. Origin: Spontaneous quantum exchange interaction causing macroscopic magnetic domains ($\\sim 10^{11}$ atoms) to align collectively. Examples: Iron, Cobalt, Nickel, Alnico, Gadolinium.",
            "Behavior in Non-Uniform Magnetic Field: Diamagnetic moves from stronger to weaker field regions; Paramagnetic moves from weaker to stronger field regions feebly; Ferromagnetic moves rapidly from weaker to stronger regions."
        ],
        "derivations": [
            {
                "name": "Mathematical Comparison & Temperature Dependence Laws",
                "setup": "Magnetic susceptibility $\\chi_m$ relates induced magnetization $\\vec{M}$ to magnetic intensity $\\vec{H}$: $$\\vec{M} = \\chi_m \\vec{H}$$. Relative permeability is related by: $$\\mu_r = 1 + \\chi_m$$.",
                "steps": [
                    {
                        "text": "1. Diamagnetic Materials: Susceptibility is small, negative, and independent of temperature:",
                        "equation": "-1 \\le \\chi_m < 0, \\quad 0 \\le \\mu_r < 1, \\quad \\frac{d\\chi_m}{dT} = 0 \\quad (\\text{Independent of } T)"
                    },
                    {
                        "text": "For a perfect diamagnet / superconductor (Meissner effect):",
                        "equation": "\\chi_m = -1 \\quad \\implies \\quad \\mu_r = 0 \\quad (\\text{Total flux expulsion})"
                    },
                    {
                        "text": "2. Paramagnetic Materials: Susceptibility is small, positive, and inversely proportional to absolute temperature (Curie's Law):",
                        "equation": "0 < \\chi_m \\ll 1, \\quad \\mu_r > 1, \\quad \\chi_m = \\frac{C}{T} \\quad (C = \\text{Curie's constant})"
                    },
                    {
                        "text": "3. Ferromagnetic Materials: Susceptibility is very large, positive ($\\chi_m \\gg 1000$), and drops above the Curie temperature $T_c$ according to the Curie-Weiss Law:",
                        "equation": "\\chi_m = \\frac{C'}{T - T_c} \\quad (\\text{for } T > T_c)"
                    },
                    {
                        "text": "Above the critical Curie Temperature $T_c$, thermal agitation disrupts domain alignment, and a ferromagnetic substance transitions into a simple paramagnetic substance:",
                        "equation": "\\text{Ferromagnetic} \\xrightarrow{T > T_c} \\text{Paramagnetic}"
                    }
                ],
                "specialCases": [
                    {
                        "title": "Magnetic Field Line Behavior inside Material:",
                        "text": "Diamagnetic expels field lines (lines avoid material); Paramagnetic concentrates field lines slightly; Ferromagnetic pulls field lines strongly inward:",
                        "equation": "B_{\\text{dia}} < B_0, \\quad B_{\\text{para}} > B_0, \\quad B_{\\text{ferro}} \\gg B_0"
                    }
                ],
                "finalFormula": "\\text{Dia: } \\chi < 0 (T\\text{-indep}); \\quad \\text{Para: } \\chi = \\frac{C}{T}; \\quad \\text{Ferro: } \\chi = \\frac{C'}{T - T_c} (T > T_c)"
            }
        ],
        "diagram": {
            "hasDiagram": True,
            "diagramId": "magnetic-materials",
            "title": "Behavior of Magnetic Field Lines in Dia, Para, and Ferro Substances",
            "examDrawingGuide": [
                "1. Draw three rectangular blocks representing specimens in uniform external field lines.",
                "2. Diamagnetic: Show field lines bending outward and avoiding the specimen ($B < B_0$).",
                "3. Paramagnetic: Show field lines bending slightly inward and passing through the specimen ($B > B_0$).",
                "4. Ferromagnetic: Show field lines crowding strongly and densely into the specimen ($B \\gg B_0$)."
            ]
        },
        "keyPointsAndKeywords": [
            "Magnetic Susceptibility (χ = M/H)",
            "Relative Permeability (μ_r = 1 + χ)",
            "Diamagnetic Negative Susceptibility (Independent of T)",
            "Paramagnetic Curie's Law (χ ∝ 1/T)",
            "Ferromagnetic Domain Theory",
            "Curie-Weiss Law (χ = C'/(T - Tc))",
            "Meissner Effect in Superconductors (χ = -1, μ_r = 0)"
        ],
        "termsGlossary": [
            {
                "symbol": "\\chi_m",
                "term": "Magnetic Susceptibility",
                "definition": "Dimensionless ratio of intensity of magnetization $M$ to applied magnetic intensity $H$."
            },
            {
                "symbol": "\\mu_r",
                "term": "Relative Magnetic Permeability",
                "definition": "Ratio of magnetic permeability of material to vacuum permeability ($\\mu_r = \\mu / \\mu_0 = 1 + \\chi_m$)."
            },
            {
                "symbol": "T_c",
                "term": "Curie Temperature",
                "definition": "Critical threshold temperature above which a ferromagnetic material loses its spontaneous magnetization and turns paramagnetic (e.g. Iron $T_c = 1043\\text{ K}$)."
            },
            {
                "symbol": "C",
                "term": "Curie Constant",
                "definition": "Material-specific constant in Curie's law governing temperature decay of magnetic alignment."
            }
        ],
        "markingScheme": [
            "1 Mark: Complete comparative table of $\\chi_m$ and $\\mu_r$ ranges for dia, para, and ferro.",
            "1 Mark: Statement and mathematical forms of Curie's Law and Curie-Weiss Law with temperature dependence.",
            "1 Mark: Behavior in non-uniform field and field line sketches showing expulsion vs crowding."
        ],
        "examinerTips": "Remember that diamagnetism is universal (present in all substances), but masked whenever paramagnetic or ferromagnetic dipole moments exist."
    },

    # Q17: Series LCR Circuit & Resonance
    {
        "id": "imp-phy-17",
        "number": 17,
        "title": "AC Circuits: Pure Inductor, Pure Capacitor & Series LCR Resonance",
        "shortLabel": "Series LCR Resonance & Impedance",
        "chapterId": "phy-ch-7",
        "chapterTitle": "Alternating Current",
        "unit": "Electromagnetic Induction & Alternating Current",
        "marks": "5 Marks",
        "marksNum": 5,
        "category": "Derivation",
        "frequency": "Guaranteed 5-Mark Question (CBSE 2024 SQP Q33, 2023, 2022, 2020)",
        "questionPrompt": "(a) A series combination of an inductor L, capacitor C, and resistor R is connected across an AC source V = V₀ sin(ωt). Using phasor diagram technique, derive expressions for:\n  (i) Impedance (Z) of the circuit.\n  (ii) Phase angle (ϕ) between alternating voltage and current.\n(b) Define electrical resonance. Derive the formula for resonant frequency (ωᵣ) and define Quality Factor (Q-factor).",
        "ncertRef": {
            "textbook": "NCERT Physics Class 12, Part 1",
            "chapter": "Chapter 7: Alternating Current",
            "section": "Sections 7.4, 7.5, 7.6 (pp. 240–252)",
            "equations": "Eqs. (7.25), (7.26), (7.27), (7.36), (7.40)",
            "figures": "Figs. 7.12, 7.13, 7.14",
            "summary": "Phasor analysis of series LCR circuit, impedance triangle, resonance frequency condition, and sharpness of resonance (Q-factor)."
        },
        "theory": [
            "In a Series LCR Circuit, the same alternating current $I = I_0 \\sin(\\omega t)$ flows through the resistor $R$, inductor $L$, and capacitor $C$ in series.",
            "Voltage across Resistor: $V_R = I R$ is completely in phase with current $I$ (phase difference $\\phi = 0$).",
            "Voltage across Inductor: $V_L = I X_L = I(\\omega L)$ leads current $I$ by a phase angle of $\\pi/2$ ($90^\\circ$).",
            "Voltage across Capacitor: $V_C = I X_C = I(1/\\omega C)$ lags current $I$ by a phase angle of $\\pi/2$ ($90^\\circ$).",
            "Electrical Resonance occurs when inductive reactance equals capacitive reactance ($X_L = X_C$). Under this condition, the net reactive voltage is zero ($V_L - V_C = 0$), impedance is strictly minimum ($Z = R$), current amplitude is maximum ($I_0 = V_0/R$), and voltage and current are in phase (power factor $\\cos\\phi = 1$)."
        ],
        "derivations": [
            {
                "name": "Part 1: Derivation of Impedance Z & Phase Angle ϕ using Phasors",
                "setup": "Let alternating current in the circuit be $I = I_0 \\sin(\\omega t)$. Let peak voltages across components be represented by rotating phasors $\\vec{V}_R$, $\\vec{V}_L$, and $\\vec{V}_C$. Assume $V_L > V_C$ (predominantly inductive circuit).",
                "steps": [
                    {
                        "text": "Peak voltage across resistor $R$ along the current phasor direction is:",
                        "equation": "V_R = I_0 R"
                    },
                    {
                        "text": "Peak voltage across inductor $L$ leading current by $+90^\\circ$ is:",
                        "equation": "V_L = I_0 X_L = I_0 (\\omega L)"
                    },
                    {
                        "text": "Peak voltage across capacitor $C$ lagging current by $-90^\\circ$ is:",
                        "equation": "V_C = I_0 X_C = I_0 \\left(\\frac{1}{\\omega C}\\right)"
                    },
                    {
                        "text": "Since phasors $\\vec{V}_L$ and $\\vec{V}_C$ are collinear and point in opposite directions ($180^\\circ$ apart), their resultant reactive phasor is:",
                        "equation": "V_L - V_C = I_0(X_L - X_C) = I_0\\left(\\omega L - \\frac{1}{\\omega C}\\right)"
                    },
                    {
                        "text": "By the Pythagorean theorem in the phasor voltage right-triangle:",
                        "equation": "V_0^2 = V_R^2 + (V_L - V_C)^2 = (I_0 R)^2 + [I_0(X_L - X_C)]^2"
                    },
                    {
                        "text": "Factoring out $I_0^2$:",
                        "equation": "V_0^2 = I_0^2 \\left[ R^2 + (X_L - X_C)^2 \\right] \\quad \\implies \\quad V_0 = I_0 \\sqrt{R^2 + (X_L - X_C)^2}"
                    },
                    {
                        "text": "The total effective opposition offered by the circuit to AC is called Impedance ($Z = V_0 / I_0$):",
                        "equation": "Z = \\sqrt{R^2 + (X_L - X_C)^2} = \\sqrt{R^2 + \\left(\\omega L - \\frac{1}{\\omega C}\\right)^2}"
                    },
                    {
                        "text": "From the phasor triangle, the phase angle $\\phi$ between source voltage and current satisfies:",
                        "equation": "\\tan\\phi = \\frac{V_L - V_C}{V_R} = \\frac{I_0(X_L - X_C)}{I_0 R} = \\frac{X_L - X_C}{R} = \\frac{\\omega L - \\frac{1}{\\omega C}}{R}"
                    }
                ],
                "specialCases": [
                    {
                        "title": "Power Factor:",
                        "text": "The power factor of the circuit is given by the cosine of the phase angle:",
                        "equation": "\\cos\\phi = \\frac{R}{Z} = \\frac{R}{\\sqrt{R^2 + (X_L - X_C)^2}}"
                    }
                ],
                "finalFormula": "Z = \\sqrt{R^2 + \\left(\\omega L - \\frac{1}{\\omega C}\\right)^2}, \\quad \\tan\\phi = \\frac{\\omega L - 1/(\\omega C)}{R}"
            },
            {
                "name": "Part 2: Resonance Condition & Quality Factor (Q-factor)",
                "setup": "Electrical resonance occurs at that angular frequency $\\omega_r$ where inductive reactance exactly equals capacitive reactance.",
                "steps": [
                    {
                        "text": "Condition for resonance:",
                        "equation": "X_L = X_C \\quad \\implies \\quad \\omega_r L = \\frac{1}{\\omega_r C}"
                    },
                    {
                        "text": "Solving for resonant angular frequency $\\omega_r$:",
                        "equation": "\\omega_r^2 = \\frac{1}{L C} \\quad \\implies \\quad \\omega_r = \\frac{1}{\\sqrt{L C}}"
                    },
                    {
                        "text": "Resonant linear frequency in Hertz ($f_r = \\omega_r / 2\\pi$):",
                        "equation": "f_r = \\frac{1}{2\\pi \\sqrt{L C}}"
                    },
                    {
                        "text": "At resonance, impedance is purely resistive and minimum:",
                        "equation": "Z_{\\text{min}} = \\sqrt{R^2 + 0} = R"
                    },
                    {
                        "text": "Current amplitude attains its maximum possible value:",
                        "equation": "I_{0,\\text{max}} = \\frac{V_0}{R}"
                    },
                    {
                        "text": "Quality Factor ($Q$-factor) is defined as the voltage magnification across inductor or capacitor at resonance compared to source voltage:",
                        "equation": "Q = \\frac{V_L}{V} = \\frac{I_0 X_L}{I_0 R} = \\frac{\\omega_r L}{R} = \\frac{1}{\\sqrt{LC}} \\frac{L}{R} = \\frac{1}{R} \\sqrt{\\frac{L}{C}}"
                    }
                ],
                "specialCases": [
                    {
                        "title": "Sharpness of Tuning:",
                        "text": "A higher $Q$-factor indicates a sharper, narrower resonance curve, giving better channel selectivity in radio receivers:",
                        "equation": "Q = \\frac{\\omega_r}{2\\Delta\\omega} = \\frac{\\text{Resonant Frequency}}{\\text{Bandwidth}}"
                    }
                ],
                "finalFormula": "\\omega_r = \\frac{1}{\\sqrt{LC}}, \\quad Z_{\\text{min}} = R, \\quad Q = \\frac{1}{R}\\sqrt{\\frac{L}{C}}"
            }
        ],
        "diagram": {
            "hasDiagram": True,
            "diagramId": "lcr-circuit",
            "title": "Series LCR Phasor Diagram & Resonance Curve",
            "examDrawingGuide": [
                "1. Draw series circuit loop containing AC generator $V$, inductor $L$, capacitor $C$, and resistor $R$.",
                "2. Draw Phasor Diagram: horizontal current axis with phasor $V_R$; vertical phasor $V_L$ pointing up ($+90^\\circ$); vertical phasor $V_C$ pointing down ($-90^\\circ$).",
                "3. Draw net reactive vector $V_L - V_C$ pointing upwards; complete the rectangle to draw diagonal resultant source voltage $V_0$ at angle $\\phi$.",
                "4. Draw resonance response curve: current $I$ versus angular frequency $\\omega$ peaking sharply at $\\omega = \\omega_r$."
            ]
        },
        "keyPointsAndKeywords": [
            "Series Current Common to all Components",
            "Phasor Leads and Lags (VL leads by π/2, VC lags by π/2)",
            "Impedance Formula Z = √(R² + (XL - XC)²)",
            "Resonance Condition (XL = XC)",
            "Resonant Frequency (ω = 1/√(LC))",
            "Minimum Impedance (Z = R) & Maximum Current",
            "Quality Factor (Q = (1/R)√(L/C))"
        ],
        "termsGlossary": [
            {
                "symbol": "Z",
                "term": "Impedance",
                "definition": "Total effective opposition offered by an AC circuit to current flow, measured in Ohms ($\\Omega$)."
            },
            {
                "symbol": "X_L = \\omega L",
                "term": "Inductive Reactance",
                "definition": "Opposition offered by inductor to alternating current, proportional to frequency ($\\Omega$)."
            },
            {
                "symbol": "X_C = \\frac{1}{\\omega C}",
                "term": "Capacitive Reactance",
                "definition": "Opposition offered by capacitor to alternating current, inversely proportional to frequency ($\\Omega$)."
            },
            {
                "symbol": "\\phi",
                "term": "Phase Angle",
                "definition": "Angle by which applied voltage leads or lags resultant current in the circuit."
            },
            {
                "symbol": "Q",
                "term": "Quality Factor (Q-factor)",
                "definition": "Dimensionless figure of merit measuring sharpness of resonance and voltage magnification: $Q = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$."
            }
        ],
        "markingScheme": [
            "1.5 Marks: Clear phasor diagram and geometric derivation of impedance $Z = \\sqrt{R^2 + (X_L - X_C)^2}$.",
            "1 Mark: Derivation of phase angle $\\tan\\phi = (X_L - X_C)/R$.",
            "1.5 Marks: Derivation of resonant frequency $\\omega_r = 1/\\sqrt{LC}$ from condition $X_L = X_C$.",
            "1 Mark: Definition and mathematical formula of Quality Factor $Q = (1/R)\\sqrt{L/C}$."
        ],
        "examinerTips": "In the phasor diagram, clearly mark the right triangle and show the direction of angle $\\phi$. State explicitly that at resonance, current and voltage are in the same phase ($\\\\phi = 0$)."
    }
]
