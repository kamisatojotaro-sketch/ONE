# -*- coding: utf-8 -*-
"""
Structured notes data for Physics Chapters 3 & 4 (Current Electricity & Magnetism)
Strictly conforming to NCERT and NODIA Class 12 CBSE standards.
"""

ch3_ch4_data = {
    # 3.1 & 3.5 Drift Velocity & Microscopic Ohm's Law
    "phy-sub-3-5": {
        "definitions": [
            {
                "term": "Drift Velocity (v⃗_d)",
                "definition": "The average velocity with which free conduction electrons drift in a conductor opposite to the applied electric field: $\\vec{v}_d = -\\frac{e\\vec{E}}{m}\\tau$, where $\\tau$ is relaxation time. Typically $\\sim 10^{-4}\\text{ m/s}$."
            },
            {
                "term": "Relaxation Time (τ)",
                "definition": "The average time interval elapsed between two successive collisions of a conduction electron with fixed lattice ions. Decreases as temperature increases ($\v_d$ drops, resistance increases)."
            },
            {
                "term": "Mobility (μ)",
                "definition": "The magnitude of drift velocity acquired per unit electric field: $\\mu = \\frac{|v_d|}{E} = \\frac{e\\tau}{m}$. SI Unit: $\\text{m}^2/(\\text{V}\\cdot\\text{s})$. Always positive."
            },
            {
                "term": "Current - Drift Velocity Relation",
                "definition": "Macroscopic current relates to microscopic drift velocity by: $I = n e A v_d$, where $n$ is electron number density and $A$ is cross-sectional area."
            }
        ],
        "keyPoints": [
            "• <strong>Deduction of Ohm's Law:</strong> Substituting $v_d = \\frac{eE}{m}\\tau = \\frac{eV}{ml}\\tau$ into $I = neAv_d$ gives: $I = \\left(\\frac{n e^2 A \\tau}{m l}\\right) V \\implies V = \\left(\\frac{m}{n e^2 \\tau}\\frac{l}{A}\\right) I = R I$.",
            "• <strong>Electrical Resistivity Formula:</strong> $\\rho = \\frac{m}{n e^2 \\tau}$. Resistivity depends only on material nature ($n$) and temperature ($\\tau$), completely independent of dimensions $l$ and $A$.",
            "• <strong>Temperature Effect in Metals:</strong> As temperature rises, thermal vibrations of ions increase, shortening relaxation time $\\tau$. Since $\\rho \\propto 1/\\tau$, resistivity $\\rho$ and resistance $R$ increase."
        ],
        "extraPoints": [
            "• <strong>Current Density Vector (j⃗):</strong> $\\vec{j} = \\sigma \\vec{E} = n e \\vec{v}_d$, microscopic vector form of Ohm's law, where conductivity $\\sigma = 1/\\rho = \\frac{n e^2 \\tau}{m}$."
        ],
        "reactions": [],
        "oswaalMnemonic": {
            "title": "Current Carrier Formula",
            "phrase": "I = n e A v_d (NEAVd - Free Electrons Advance)",
            "explanation": "Remember I = n·e·A·v_d for every microscopic current problem."
        },
        "commonlyMadeErrors": [
            {
                "error": "Confusing drift velocity (~10⁻⁴ m/s) with the speed of electric signal transmission (~3 × 10⁸ m/s).",
                "tip": "Electrons drift very slowly (~mm/s), but the electromagnetic field propagates almost at the speed of light, lighting bulbs instantaneously.",
                "penalty": "Loss of 1 mark on conceptual reasoning."
            }
        ],
        "assertionReason": {
            "assertion": "When temperature of a metallic conductor increases, its resistance increases.",
            "reason": "With increase in temperature, the relaxation time between electron collisions decreases.",
            "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
            "explanation": "R = (m/ne²τ)(l/A). As T rises, ion collisions are more frequent, shortening τ, so R rises."
        },
        "examTrend": {
            "pastYears": "CBSE 2024, 2023, 2020, 2019",
            "frequency": "High Frequency Derivation",
            "typicalMarks": "3 Marks",
            "questionTypes": "Derive I = neAv_d, deduce Ohm's law R = ml/(ne²τA), define mobility",
            "hotTopic": "Deduction of Ohm's law from microscopic electron dynamics"
        }
    },

    # 3.8 Cells, EMF, Internal Resistance & Terminal Voltage
    "phy-sub-3-8": {
        "definitions": [
            {
                "term": "Electromotive Force (EMF, ε)",
                "definition": "The potential difference between the terminals of a cell in an open circuit (when no current is drawn, $I = 0$). Measured in Volts (V)."
            },
            {
                "term": "Terminal Potential Difference (V)",
                "definition": "The potential difference between the cell terminals when current $I$ is being drawn in a closed circuit: $V = \\varepsilon - Ir$ (discharging) or $V = \\varepsilon + Ir$ (charging)."
            },
            {
                "term": "Internal Resistance (r)",
                "definition": "The opposition offered by the electrolyte and electrodes of the cell to the flow of ionic current: $r = \\left(\\frac{\\varepsilon}{V} - 1\\right)R$."
            }
        ],
        "keyPoints": [
            "• <strong>Circuit Equation:</strong> Circuit current through load $R$ is $I = \\frac{\\varepsilon}{R + r}$, giving terminal voltage $V = IR = \\varepsilon - Ir$.",
            "• <strong>Open vs Short Circuit:</strong> On open circuit ($R \\to \\infty$), $I = 0$ and $V = \\varepsilon$. On short circuit ($R = 0$), $I_{\\text{max}} = \\varepsilon / r$ and $V = 0$.",
            "• <strong>Maximum Power Transfer Theorem:</strong> Power delivered to load $P = I^2 R = \\frac{\\varepsilon^2 R}{(R+r)^2}$ is maximum when external resistance matches internal resistance ($R = r$). Peak power: $P_{\\text{max}} = \\frac{\\varepsilon^2}{4r}$."
        ],
        "extraPoints": [
            "• <strong>Cells in Series:</strong> $\\varepsilon_{\\text{eq}} = \\varepsilon_1 + \\varepsilon_2$, $r_{\\text{eq}} = r_1 + r_2$.",
            "• <strong>Cells in Parallel:</strong> $\\varepsilon_{\\text{eq}} = \\frac{\\varepsilon_1 r_2 + \\varepsilon_2 r_1}{r_1 + r_2}$, $r_{\\text{eq}} = \\frac{r_1 r_2}{r_1 + r_2}$."
        ],
        "reactions": [],
        "oswaalMnemonic": {
            "title": "Discharging vs Charging Terminal Voltage",
            "phrase": "Discharge Drops Voltage (V = ε - Ir), Charging Charges Higher (V = ε + Ir)",
            "explanation": "During battery discharge, internal drop reduces terminal voltage below EMF."
        },
        "commonlyMadeErrors": [
            {
                "error": "Writing V = ε - Ir during battery charging.",
                "tip": "During charging, external current enters the positive electrode, reversing the sign of Ir: V = ε + Ir.",
                "penalty": "Loss of 1 mark."
            }
        ],
        "assertionReason": {
            "assertion": "Terminal voltage of a cell can be greater than its EMF.",
            "reason": "When a cell is being recharged by an external DC supply, current flows into the positive terminal, making V = ε + Ir.",
            "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
            "explanation": "In charging mode, external source drives current against cell EMF, so terminal voltage exceeds EMF."
        },
        "examTrend": {
            "pastYears": "CBSE 2024 SQP Q2, 2023, 2021, 2018",
            "frequency": "High Frequency",
            "typicalMarks": "3 Marks",
            "questionTypes": "Derive V = ε - Ir and r = (ε/V - 1)R, cells in series and parallel, max power proof",
            "hotTopic": "Internal resistance formula & maximum power theorem"
        }
    },

    # 3.9 Kirchhoff's Laws & Wheatstone Bridge
    "phy-sub-3-9": {
        "definitions": [
            {
                "term": "Kirchhoff's First Law (Junction Rule / KCL)",
                "definition": "The algebraic sum of currents entering and leaving any electrical junction in a network is zero: $\\sum I = 0$. Conservation Law: Law of Conservation of Electric Charge."
            },
            {
                "term": "Kirchhoff's Second Law (Loop Rule / KVL)",
                "definition": "The algebraic sum of changes in potential around any closed circuit loop is zero: $\\sum \\Delta V = \\sum \\varepsilon - \\sum IR = 0$. Conservation Law: Law of Conservation of Energy."
            },
            {
                "term": "Wheatstone Bridge Balanced Condition",
                "definition": "For a bridge network of four resistors $P, Q, R, S$, when the galvanometer in the central bridge arm shows null deflection ($I_g = 0$), the ratio of resistances is: $\\frac{P}{Q} = \\frac{R}{S}$."
            }
        ],
        "keyPoints": [
            "• <strong>Null Deflection Advantage:</strong> At balance, $V_B = V_D$, so zero current flows through the galvanometer. Because no current is drawn, measurement is independent of cell internal resistance and galvanometer coil resistance.",
            "• <strong>Metre Bridge Application:</strong> With balancing length $l$ on a $100\\text{ cm}$ wire: $\\frac{R}{S} = \\frac{l}{100 - l} \\implies S = R \\left(\\frac{100 - l}{l}\\right)$.",
            "• <strong>Highest Sensitivity Condition:</strong> A Wheatstone bridge is most sensitive when all four arm resistances $P, Q, R, S$ are approximately equal in magnitude."
        ],
        "extraPoints": [
            "• <strong>Interchanging Battery and Galvanometer:</strong> If battery and galvanometer connections are interchanged, the balanced condition remains unchanged ($P/Q = R/S$ still holds)."
        ],
        "reactions": [],
        "oswaalMnemonic": {
            "title": "Kirchhoff's Conservation Laws",
            "phrase": "Junction Juggles Charge, Loop Loops Energy",
            "explanation": "KCL represents conservation of charge; KVL represents conservation of energy."
        },
        "commonlyMadeErrors": [
            {
                "error": "Incorrect signs in Kirchhoff's loop equations when traversing against current or passing battery terminals.",
                "tip": "Tracing along current: -IR. Tracing against current: +IR. From negative to positive plate of battery: +ε.",
                "penalty": "Loss of 2 marks on loop analysis."
            }
        ],
        "assertionReason": {
            "assertion": "Kirchhoff's junction rule reflects the law of conservation of charge.",
            "reason": "At any circuit junction, electric charge cannot accumulate or vanish in steady state.",
            "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
            "explanation": "Current in = current out because charge is conserved and no charge builds up at junction nodes."
        },
        "examTrend": {
            "pastYears": "CBSE 2024 SQP Q9, 2023, 2022, 2019",
            "frequency": "Guaranteed Question",
            "typicalMarks": "3 to 5 Marks",
            "questionTypes": "State Kirchhoff rules and their conservation principles; derive Wheatstone bridge balance P/Q = R/S",
            "hotTopic": "Derivation of P/Q = R/S using loop equations"
        }
    },

    # 4.2 Biot-Savart Law & Circular Loop
    "phy-sub-4-2": {
        "definitions": [
            {
                "term": "Biot-Savart Law",
                "definition": "The magnetic field $d\\vec{B}$ produced by a small current element $I d\\vec{l}$ at displacement vector $\\vec{r}$: $d\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I (d\\vec{l} \\times \\hat{r})}{r^2} = \\frac{\\mu_0}{4\\pi} \\frac{I dl \\sin\\theta}{r^2}$. SI Unit: Tesla (T)."
            },
            {
                "term": "Magnetic Field on Axis of Circular Loop",
                "definition": "For a circular coil of $N$ turns and radius $R$ carrying current $I$, at axial distance $x$ from the center: $B_{\\text{axis}} = \\frac{\\mu_0 N I R^2}{2(R^2 + x^2)^{3/2}}$. At center ($x = 0$): $B_{\\text{center}} = \\frac{\\mu_0 N I}{2R}$."
            }
        ],
        "keyPoints": [
            "• <strong>Direction of Field:</strong> Determined by the Right-Hand Thumb Rule: curl fingers along current direction, thumb points along axial magnetic field $\\vec{B}$.",
            "• <strong>Distant Axial Field:</strong> For $x \\gg R$, $B = \\frac{\\mu_0}{4\\pi} \\frac{2(N I \\cdot \\pi R^2)}{x^3} = \\frac{\\mu_0}{4\\pi} \\frac{2m}{x^3}$, identical to the axial field of a magnetic dipole of magnetic moment $m = N I A$!",
            "• <strong>Cancellation of Perpendicular Components:</strong> In the circular loop integration, components of $d\\vec{B}$ perpendicular to the axis cancel out by diametric symmetry, and only axial components $\\cos\\phi$ add up."
        ],
        "extraPoints": [
            "• <strong>Helmholtz Coils:</strong> Two identical coaxial coils separated by distance equal to their radius produce a remarkably uniform magnetic field in the central region."
        ],
        "reactions": [],
        "oswaalMnemonic": {
            "title": "Circular Loop Field",
            "phrase": "Center is μ₀NI / (2R), Axis has Radius Squared Up Top",
            "explanation": "B_center = μ₀NI / 2R. At axial distance x, B = μ₀NIR² / [2(R² + x²)^(3/2)]."
        },
        "commonlyMadeErrors": [
            {
                "error": "Forgetting that diametrically opposite current elements cancel out the perpendicular field components.",
                "tip": "Explicitly state in derivation: 'Components perpendicular to the coil axis cancel pairwise by symmetry.'",
                "penalty": "Loss of 0.5 to 1 mark."
            }
        ],
        "assertionReason": {
            "assertion": "A planar circular current loop behaves as a magnetic dipole at large distances.",
            "reason": "Its magnetic field along the axis decays as 1/x³ and matches the formula B = (μ₀/4π)(2m/x³).",
            "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
            "explanation": "A current loop has magnetic moment m = IA, producing a dipole magnetic field."
        },
        "examTrend": {
            "pastYears": "CBSE 2024, 2023, 2021, 2018",
            "frequency": "High Frequency Derivation",
            "typicalMarks": "3 to 5 Marks",
            "questionTypes": "Full derivation of axial magnetic field, center value reduction",
            "hotTopic": "Biot-Savart circular loop axial derivation"
        }
    },

    # 4.7 Magnetic Force on Current Conductor
    "phy-sub-4-7": {
        "definitions": [
            {
                "term": "Magnetic Force on Current Conductor (F⃗ = I(L⃗ × B⃗))",
                "definition": "The macroscopic mechanical force experienced by a conductor of length $l$ carrying current $I$ in a uniform magnetic field $\\vec{B}$: $\\vec{F} = I(\\vec{l} \\times \\vec{B})$, magnitude $F = I l B \\sin\\theta$. Direction given by Fleming's Left-Hand Rule."
            }
        ],
        "keyPoints": [
            "• <strong>Microscopic Derivation:</strong> Single electron experiences Lorentz force $\\vec{f} = -e(\\vec{v}_d \\times \\vec{B})$. Total force on $N = nAl$ electrons is $\\vec{F} = (nAl)[-e(\\vec{v}_d \\times \\vec{B})] = -neAl(\\vec{v}_d \\times \\vec{B}) = I(\\vec{l} \\times \\vec{B})$ since $I\\vec{l} = -neA\\vec{v}_d l$.",
            "• <strong>Special Cases:</strong> Maximum force at $\\theta = 90^\\circ$ ($F_{\\text{max}} = I l B$); Zero force at $\\theta = 0^\\circ$ or $180^\\circ$ ($F = 0$ along field lines).",
            "• <strong>Fleming's Left-Hand Rule:</strong> Forefinger = Field B, Middle finger = Current I, Thumb = Force F."
        ],
        "extraPoints": [
            "• <strong>Arbitrary Shaped Wire:</strong> For a curved wire between endpoints in a uniform field, $\\vec{F} = I(\\vec{L}_{\\text{end-to-end}} \\times \\vec{B})$."
        ],
        "reactions": [],
        "oswaalMnemonic": {
            "title": "Fleming's Left-Hand Rule (FBI)",
            "phrase": "Thumb = Force (F), Forefinger = B-Field, Middle = Current (I)",
            "explanation": "FBI mnemonic: Force (Thumb), B-Field (Forefinger), I-Current (Middle)."
        },
        "commonlyMadeErrors": [
            {
                "error": "Using right hand instead of left hand for motor force on a current-carrying wire.",
                "tip": "LEFT hand for MOTOR effect (force on wire). RIGHT hand for GENERATOR effect (induced current).",
                "penalty": "Loss of 1 mark on direction."
            }
        ],
        "assertionReason": {
            "assertion": "A straight current-carrying conductor placed parallel to a magnetic field experiences zero force.",
            "reason": "The magnetic force is F = ILB sinθ, and sin 0° = 0.",
            "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
            "explanation": "When length vector and field vector are collinear, vector cross product IL × B is zero."
        },
        "examTrend": {
            "pastYears": "CBSE 2023, 2022, 2019, 2018",
            "frequency": "Core Derivation",
            "typicalMarks": "3 Marks",
            "questionTypes": "Derive F = ILB sinθ from electron drift dynamics, state Fleming's left hand rule",
            "hotTopic": "Microscopic Lorentz integration to macroscopic mechanical force"
        }
    },

    # 4.8 Parallel Currents & 1 Ampere
    "phy-sub-4-8": {
        "definitions": [
            {
                "term": "Force Between Parallel Currents",
                "definition": "The mutual magnetic force per unit length between two infinitely long straight parallel conductors carrying currents $I_1$ and $I_2$ separated by distance $d$: $\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$."
            },
            {
                "term": "SI Definition of One Ampere",
                "definition": "That constant current which, if maintained in two straight parallel conductors of infinite length and negligible circular cross-section, placed 1 metre apart in vacuum, produces between them a force equal to $2 \\times 10^{-7}$ Newtons per metre length."
            }
        ],
        "keyPoints": [
            "• <strong>Attraction vs Repulsion:</strong> Parallel currents in the SAME direction ATTRACT each other. Antiparallel currents in OPPOSITE directions REPEL each other.",
            "• <strong>Newton's Third Law:</strong> $\\vec{F}_{12} = -\\vec{F}_{21}$, forces form an action-reaction pair.",
            "• <strong>Electromagnetic Basis:</strong> Wire 1 produces field $B_1 = \\frac{\\mu_0 I_1}{2\\pi d}$; wire 2 in this field experiences Lorentz force $F = I_2 L B_1 = \\frac{\\mu_0 I_1 I_2 L}{2\\pi d}$."
        ],
        "extraPoints": [
            "• <strong>Historical SI Standard:</strong> The Ampere was defined dynamically via this exact magnetic force relation."
        ],
        "reactions": [],
        "oswaalMnemonic": {
            "title": "Current Attraction Law",
            "phrase": "Likes Attract (Parallel Wires Pull Together), Opposites Repel",
            "explanation": "Opposite to electrostatic charges: same currents attract, opposite currents repel."
        },
        "commonlyMadeErrors": [
            {
                "error": "Stating that like currents repel (confusing with like electric charges).",
                "tip": "Like electric charges REPEL (+ and + repel). Like electric currents ATTRACT (parallel currents pull together).",
                "penalty": "Loss of 1 mark on conceptual reasoning."
            }
        ],
        "assertionReason": {
            "assertion": "Two parallel wires carrying currents in the same direction attract each other.",
            "reason": "By Right-Hand Thumb Rule and Fleming's Left-Hand Rule, the magnetic Lorentz force on each wire is directed toward the other wire.",
            "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
            "explanation": "Applying Biot-Savart field direction and Fleming's force rule yields mutual inward attraction."
        },
        "examTrend": {
            "pastYears": "CBSE 2024 SQP Q16, 2023, 2020, 2018",
            "frequency": "High Frequency",
            "typicalMarks": "3 Marks",
            "questionTypes": "Derive F/L = μ₀I₁I₂/(2πd), define 1 Ampere, state attraction/repulsion rule",
            "hotTopic": "Standard definition of 1 Ampere with derivation"
        }
    },

    # 4.10 Galvanometer & Conversions
    "phy-sub-4-10": {
        "definitions": [
            {
                "term": "Moving Coil Galvanometer",
                "definition": "An electromagnetic instrument used to detect and measure very small electric currents, operating on the principle of deflecting torque on a current coil in a radial magnetic field: $\\tau_{\\text{def}} = N I A B = k\\phi \\implies \\phi \\propto I$."
            },
            {
                "term": "Shunt Resistance (S)",
                "definition": "A very low resistance wire connected in parallel with the galvanometer to convert it into an ammeter of range $I$: $S = \\frac{I_g G}{I - I_g}$. Effective resistance: $R_A = \\frac{GS}{G+S} \\ll G$."
            },
            {
                "term": "Series Multiplier Resistance (R)",
                "definition": "A very high resistance connected in series with the galvanometer to convert it into a voltmeter of range $V$: $R = \\frac{V}{I_g} - G$. Effective resistance: $R_V = G + R \\gg G$."
            }
        ],
        "keyPoints": [
            "• <strong>Radial Magnetic Field Function:</strong> Created by concave cylindrical pole pieces and a soft iron core. It ensures that field lines are always parallel to the plane of the coil ($\\theta = 90^\\circ$, $\\sin 90^\\circ = 1$) at all rotation angles, keeping torque maximum and producing a strictly linear scale ($\\phi \\propto I$).",
            "• <strong>Cylindrical Soft Iron Core Function:</strong> High relative permeability concentrates and intensifies magnetic flux lines inside the air gap, vastly boosting sensitivity.",
            "• <strong>Current Sensitivity:</strong> $I_s = \\frac{\\phi}{I} = \\frac{NAB}{k}$. Increasing turns $N$ increases $I_s$.",
            "• <strong>Voltage Sensitivity:</strong> $V_s = \\frac{\\phi}{V} = \\frac{NAB}{k R_{\\text{coil}}}$. Increasing turns $N$ does NOT increase $V_s$ because coil resistance increases proportionally ($R \\propto N$)!",
            "• <strong>Ideal Resistances:</strong> Ideal Ammeter $R_A = 0$; Ideal Voltmeter $R_V = \\infty$."
        ],
        "extraPoints": [
            "• <strong>Phosphor-Bronze Suspension:</strong> Used because of its exceptionally low torsional constant $k$, high tensile strength, and non-magnetic properties."
        ],
        "reactions": [],
        "oswaalMnemonic": {
            "title": "Ammeter vs Voltmeter Conversions",
            "phrase": "Ammeter Adds Parallel Shunt (Low S), Voltmeter Visits Series Resistor (High R)",
            "explanation": "Ammeter requires low S in parallel; Voltmeter requires high R in series."
        },
        "commonlyMadeErrors": [
            {
                "error": "Connecting the shunt in series or the multiplier in parallel.",
                "tip": "Ammeter connects in series with circuit, but its internal shunt S is in PARALLEL. Voltmeter connects in parallel with circuit, but its internal resistor R is in SERIES.",
                "penalty": "Loss of 1.5 marks."
            }
        ],
        "assertionReason": {
            "assertion": "Increasing the current sensitivity of a galvanometer does not necessarily increase its voltage sensitivity.",
            "reason": "When number of turns N is doubled, coil resistance R also doubles, so V_s = I_s / R remains constant.",
            "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
            "explanation": "V_s = NAB/(kR). Since R is proportional to wire length (and thus N), doubling N leaves V_s unchanged."
        },
        "examTrend": {
            "pastYears": "CBSE 2024 SQP Q27, 2023, 2022, 2020",
            "frequency": "Guaranteed 5-Mark Question",
            "typicalMarks": "3 to 5 Marks",
            "questionTypes": "Principle, radial field function, derivation of S and R, sensitivity relations",
            "hotTopic": "Why radial field is needed & calculation of shunt S"
        }
    }
}

print(f"Loaded {len(ch3_ch4_data)} high-yield subtopics for Chapters 3 & 4.")
