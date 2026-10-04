# -*- coding: utf-8 -*-
"""
Structured notes data for Physics Chapters 7 & 8 (AC & EM Waves)
Strictly conforming to NCERT and NODIA Class 12 CBSE standards.
"""

ch7_ch8_data = {
    # 7.2 AC Through Pure Inductor & Pure Capacitor
    "phy-sub-7-2": {
        "definitions": [
            {
                "term": "Inductive Reactance (X_L)",
                "definition": "The effective opposition offered by an ideal inductor to alternating current: $X_L = \\omega L = 2\\pi f L$. SI Unit: Ohm ($\\Omega$). Direct current ($f = 0$) faces zero inductive reactance ($X_L = 0$)."
            },
            {
                "term": "Capacitive Reactance (X_C)",
                "definition": "The effective opposition offered by an ideal capacitor to alternating current: $X_C = \\frac{1}{\\omega C} = \\frac{1}{2\\pi f C}$. SI Unit: Ohm ($\\Omega$). Direct current ($f = 0$) faces infinite capacitive reactance ($X_C = \\infty$, blocks DC)."
            }
        ],
        "keyPoints": [
            "• <strong>Phase in Pure Inductor:</strong> Alternating voltage LEADS alternating current by a phase angle of $\\pi/2$ ($90^\\circ$): if $V = V_0 \\sin(\\omega t)$, then $I = I_0 \\sin(\\omega t - \\pi/2)$. Average power dissipated is strictly zero: $P_{\\text{avg}} = V_{\\text{rms}} I_{\\text{rms}} \\cos 90^\\circ = 0$.",
            "• <strong>Phase in Pure Capacitor:</strong> Alternating current LEADS alternating voltage by a phase angle of $\\pi/2$ ($90^\\circ$): if $V = V_0 \\sin(\\omega t)$, then $I = I_0 \\sin(\\omega t + \\pi/2)$. Average power dissipated is strictly zero: $P_{\\text{avg}} = 0$.",
            "• <strong>Wattless Current:</strong> When phase difference is $\\pi/2$ (pure L or pure C), current flows without consuming any average electrical power ($P = 0$)."
        ],
        "extraPoints": [
            "• <strong>Choke Coil:</strong> A coil with very high inductance $L$ and negligible resistance $R$ used to control AC current in fluorescent lamps without significant power dissipation ($P \\approx 0$)."
        ],
        "reactions": [],
        "oswaalMnemonic": {
            "title": "CIVIL Mnemonic for AC Phase",
            "phrase": "C - I - V (In Capacitor, I leads V) | V - I - L (In Inductor, V leads I)",
            "explanation": "Remember CIVIL: In C, Current leads Voltage. In L, Voltage leads Current."
        },
        "commonlyMadeErrors": [
            {
                "error": "Claiming that pure inductors and capacitors consume energy/power in AC circuits.",
                "tip": "In pure L or pure C, phase angle is 90°, so power factor cos(90°) = 0, meaning average power consumed is ZERO.",
                "penalty": "Loss of 1 mark on conceptual reasoning."
            }
        ],
        "assertionReason": {
            "assertion": "A capacitor blocks direct current (DC) but conducts alternating current (AC).",
            "reason": "Capacitive reactance X_C = 1 / (2πfC) is infinite for DC (f = 0) and finite for AC.",
            "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
            "explanation": "For DC, f = 0 giving X_C = ∞, so capacitor acts as an open circuit once charged."
        },
        "examTrend": {
            "pastYears": "CBSE 2024, 2023, 2022, 2020",
            "frequency": "Core Concept",
            "typicalMarks": "3 Marks",
            "questionTypes": "Show voltage leads current by π/2 in inductor, derive average power P = 0, explain choke coil",
            "hotTopic": "Phase lead/lag phasor diagrams and zero power proof"
        }
    },

    # 7.4 Series LCR Circuit & Resonance
    "phy-sub-7-4": {
        "definitions": [
            {
                "term": "Series LCR Circuit Impedance (Z)",
                "definition": "The total effective opposition offered by a series LCR circuit to alternating current: $Z = \\sqrt{R^2 + (X_L - X_C)^2} = \\sqrt{R^2 + \\left(\\omega L - \\frac{1}{\\omega C}\\right)^2}$. SI Unit: Ohm ($\\Omega$)."
            },
            {
                "term": "Phase Angle (ϕ)",
                "definition": "The angle by which alternating voltage leads or lags current: $\\tan\\phi = \\frac{X_L - X_C}{R} = \\frac{\\omega L - 1/(\\omega C)}{R}$."
            },
            {
                "term": "Electrical Resonance Condition",
                "definition": "The state where inductive reactance equals capacitive reactance ($X_L = X_C$), giving minimum impedance $Z = R$, maximum current amplitude $I_0 = V_0 / R$, and resonant frequency $\\omega_r = \\frac{1}{\\sqrt{LC}}$ ($f_r = \\frac{1}{2\\pi\\sqrt{LC}}$)."
            },
            {
                "term": "Quality Factor (Q-factor)",
                "definition": "A dimensionless measure of the sharpness of resonance and voltage magnification at resonance: $Q = \\frac{\\omega_r L}{R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}} = \\frac{\\omega_r}{2\\Delta\\omega}$."
            }
        ],
        "keyPoints": [
            "• <strong>Phasor Relations:</strong> $V_R$ in phase with $I$; $V_L$ leads by $90^\\circ$; $V_C$ lags by $90^\\circ$. Resultant voltage: $V_0 = \\sqrt{V_R^2 + (V_L - V_C)^2}$.",
            "• <strong>Power Factor:</strong> $\\cos\\phi = \\frac{R}{Z}$. Average power is $P_{\\text{avg}} = V_{\\text{rms}} I_{\\text{rms}} \\cos\\phi$. At resonance, $\\phi = 0^\\circ \\implies \\cos\\phi = 1$ (maximum power).",
            "• <strong>Radio Tuning Application:</strong> In radio receivers, an antenna couples signals into a series LCR circuit. Turning the tuning dial changes variable capacitance $C$ until $f_r$ matches the desired station's broadcast frequency."
        ],
        "extraPoints": [
            "• <strong>Acceptor Circuit:</strong> Series LCR circuit is called an acceptor circuit because it admits maximum current at its resonant frequency while rejecting others."
        ],
        "reactions": [],
        "oswaalMnemonic": {
            "title": "LCR Resonance Trifecta",
            "phrase": "XL equals XC, Z drops to R, Current hits the Roof",
            "explanation": "At resonance: reactances cancel, impedance is minimum (Z = R), and current is maximum."
        },
        "commonlyMadeErrors": [
            {
                "error": "Adding voltages algebraically (V₀ = V_R + V_L + V_C) instead of vector/phasor addition.",
                "tip": "Never add AC peak voltages algebraically! Always use phasor sum: V₀ = √[V_R² + (V_L - V_C)²].",
                "penalty": "Loss of 2 marks."
            }
        ],
        "assertionReason": {
            "assertion": "At resonance, the impedance of a series LCR circuit is purely resistive and minimum.",
            "reason": "At resonant frequency, inductive reactance and capacitive reactance cancel each other out (X_L = X_C).",
            "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
            "explanation": "Z = √[R² + (X_L - X_C)²]. When X_L = X_C, Z_min = R."
        },
        "examTrend": {
            "pastYears": "CBSE 2024 SQP Q33, 2023, 2022, 2020",
            "frequency": "Guaranteed 5-Mark Question",
            "typicalMarks": "5 Marks",
            "questionTypes": "Phasor derivation of Z and tan ϕ, resonance condition ω = 1/√(LC), Q-factor formula",
            "hotTopic": "Full phasor derivation of impedance and resonance condition"
        }
    },

    # 7.5 AC Transformer
    "phy-sub-7-5": {
        "definitions": [
            {
                "term": "AC Transformer",
                "definition": "A static electrical machine operating on the principle of Mutual Induction used to increase or decrease alternating voltage without changing frequency: $\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s} = K$."
            },
            {
                "term": "Transformation Ratio (K)",
                "definition": "The ratio of secondary turns to primary turns: $K = N_s / N_p$. For Step-Up: $K > 1$ ($V_s > V_p, I_s < I_p$). For Step-Down: $K < 1$ ($V_s < V_p, I_s > I_p$)."
            }
        ],
        "keyPoints": [
            "• <strong>DC Failure Rationale:</strong> A transformer cannot work on direct current (DC) because steady DC produces constant flux ($d\\Phi/dt = 0$), resulting in zero induced secondary voltage.",
            "• <strong>Four Major Energy Losses:</strong>",
            "  1. <em>Copper Loss (I²R):</em> Joule heating in copper windings; minimized by using thick, low-resistance copper wires.",
            "  2. <em>Eddy Current Loss:</em> Circulating currents induced in the iron core; minimized by using laminated soft iron core sheets insulated with varnish.",
            "  3. <em>Hysteresis Loss:</em> Energy dissipated per magnetic cycle; minimized by using soft iron core having high permeability and narrow hysteresis loop.",
            "  4. <em>Flux Leakage:</em> Not all primary flux links secondary; minimized by winding primary and secondary coils coaxially over each other."
        ],
        "extraPoints": [
            "• <strong>Long-Distance Power Transmission:</strong> Generated electricity is stepped up to hundreds of kilovolts ($132\\text{ kV}$ or $400\\text{ kV}$) to minimize transmission line $I^2R$ heat losses before being stepped down near towns."
        ],
        "reactions": [],
        "oswaalMnemonic": {
            "title": "Transformer 4 Losses & Fixes (CHEF)",
            "phrase": "Copper (Thick Wire), Hysteresis (Soft Iron), Eddy (Lamination), Flux (Coaxial Windings)",
            "explanation": "Memory hook for all 4 energy losses and their engineering solutions."
        },
        "commonlyMadeErrors": [
            {
                "error": "Stating that a transformer creates extra electrical power in step-up mode.",
                "tip": "A transformer conserves power (P_in ≈ P_out). In stepping up voltage, current is stepped down proportionally: V_s I_s = V_p I_p.",
                "penalty": "Loss of 1 mark."
            }
        ],
        "assertionReason": {
            "assertion": "A transformer cannot be used to step up a direct current (DC) voltage.",
            "reason": "Direct current produces a constant magnetic flux, so no EMF is induced in the secondary coil.",
            "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
            "explanation": "Faraday's law requires dΦ/dt ≠ 0. Constant DC current produces dΦ/dt = 0, giving V_s = 0."
        },
        "examTrend": {
            "pastYears": "CBSE 2024, 2023, 2020, 2019",
            "frequency": "Guaranteed 5-Mark Question",
            "typicalMarks": "5 Marks",
            "questionTypes": "Principle, labeled diagram, derivation of transformation ratio, explain 4 energy losses",
            "hotTopic": "Working derivation + 4 real energy dissipation mechanisms"
        }
    },

    # 7.8 Average & RMS Values of AC
    "phy-sub-7-8": {
        "definitions": [
            {
                "term": "Root-Mean-Square (RMS) Current (I_rms)",
                "definition": "The steady direct current (DC) that produces the same Joule heating in a given resistor in a given time as produced by the alternating current over one complete cycle: $I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}} \\approx 0.707 I_0$."
            },
            {
                "term": "Mean / Average Value of AC over Half-Cycle",
                "definition": "$I_{\\text{mean}} = \\frac{2 I_0}{\\pi} \\approx 0.637 I_0$. Over a full cycle, average current is identically zero: $\\langle I \\rangle_{\\text{full cycle}} = 0$."
            }
        ],
        "keyPoints": [
            "• <strong>Joule Heating Basis:</strong> Heat generated in time $dt$ is $dH = I^2 R dt = I_0^2 R \\sin^2(\\omega t) dt$. Integrating over period $T$ gives $H = \\frac{I_0^2 R T}{2}$. Equating to $I_{\\text{rms}}^2 R T$ yields $I_{\\text{rms}} = I_0 / \\sqrt{2}$.",
            "• <strong>Domestic AC Rating:</strong> In India, the $220\\text{ V}$ mains rating is the RMS voltage. The peak voltage is: $V_0 = \\sqrt{2} \\times 220\\text{ V} \\approx 311\\text{ V}$.",
            "• <strong>Why AC Shock is More Dangerous:</strong> $220\\text{ V}$ AC oscillates up to $\\pm 311\\text{ V}$ twice every cycle and freezes muscles at $50\\text{ Hz}$, whereas $220\\text{ V}$ DC stays constant at $220\\text{ V}$."
        ],
        "extraPoints": [
            "• <strong>AC Ammeters & Voltmeters:</strong> Operate on the thermal (hot-wire) effect ($H \\propto I^2$), therefore they always measure RMS values directly, not peak or average values."
        ],
        "reactions": [],
        "oswaalMnemonic": {
            "title": "RMS vs Peak Voltage",
            "phrase": "Peak Pokes Higher by Root Two (V₀ = 1.414 × V_rms)",
            "explanation": "Peak voltage is always 1.414 times higher than RMS rating (220 V becomes 311 V)."
        },
        "commonlyMadeErrors": [
            {
                "error": "Integrating average AC over a full cycle and obtaining zero, then concluding AC cannot do work.",
                "tip": "Average current is zero, but squared current I² is always positive, so thermal work is non-zero (H = I_rms²RT).",
                "penalty": "Loss of 1 mark on conceptual reasoning."
            }
        ],
        "assertionReason": {
            "assertion": "A 220 V AC line is more dangerous than a 220 V DC line.",
            "reason": "The peak voltage of a 220 V AC line is approximately 311 V.",
            "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
            "explanation": "The human body experiences peak voltage ±311 V from a 220 V RMS AC mains supply."
        },
        "examTrend": {
            "pastYears": "CBSE 2024, 2023, 2020, 2018",
            "frequency": "High Frequency Derivation",
            "typicalMarks": "3 Marks",
            "questionTypes": "Derive I_rms = I₀/√2 using calculus, calculate peak voltage for 220 V AC",
            "hotTopic": "Calculus derivation of RMS current from Joule heating integral"
        }
    },

    # 8.3 & 8.4 Displacement Current, Maxwell's Equations & EM Waves
    "phy-sub-8-3": {
        "definitions": [
            {
                "term": "Displacement Current (I_d)",
                "definition": "The current arising due to the time rate of change of electric flux: $I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt}$. Produces the exact same magnetic field as a conduction current."
            },
            {
                "term": "Generalized Ampere-Maxwell Circuital Law",
                "definition": "$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 (I_c + I_d) = \\mu_0 I_c + \\mu_0 \\varepsilon_0 \\frac{d\\Phi_E}{dt}$."
            },
            {
                "term": "Speed of Light in Vacuum (c)",
                "definition": "$c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} = \\frac{E_0}{B_0} \\approx 3 \\times 10^8 \\text{ m/s}$."
            }
        ],
        "keyPoints": [
            "• <strong>Ampere Paradox Resolution:</strong> Outside capacitor, conduction current $I_c \\neq 0$ and $I_d = 0$. Between capacitor plates, $I_c = 0$ and $I_d \\neq 0$. Total current $I = I_c + I_d$ is continuous across the entire circuit ($I_c = I_d$).",
            "• <strong>Four Maxwell Equations:</strong>",
            "  1. Gauss Electrostatics: $\\oint \\vec{E} \\cdot d\\vec{A} = q_{\\text{enc}} / \\varepsilon_0$.",
            "  2. Gauss Magnetism: $\\oint \\vec{B} \\cdot d\\vec{A} = 0$ (no magnetic monopoles).",
            "  3. Faraday Induction: $\\oint \\vec{E} \\cdot d\\vec{l} = -d\\Phi_B / dt$.",
            "  4. Ampere-Maxwell: $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_c + \\mu_0 \\varepsilon_0 d\\Phi_E / dt$.",
            "• <strong>Transverse EM Waves:</strong> $\\vec{E} \\perp \\vec{B} \\perp \\vec{k}$. Electric and magnetic energy densities are equal: $u_E = \\frac{1}{2}\\varepsilon_0 E^2 = \\frac{B^2}{2\\mu_0} = u_B$."
        ],
        "extraPoints": [
            "• <strong>Electromagnetic Spectrum Applications:</strong> Radio (communication), Microwaves (radar, ovens), Infrared (heat lamps, physiotherapy), Visible (vision), Ultraviolet (germicidal sterilization), X-rays (medical radiography), Gamma rays (cancer radiotherapy)."
        ],
        "reactions": [],
        "oswaalMnemonic": {
            "title": "EM Spectrum Order (Increasing Frequency)",
            "phrase": "Radio Men In Vegas Used X-ray Guns (R - M - IR - Visible - UV - X - Gamma)",
            "explanation": "Radio (lowest f, longest λ) to Gamma (highest f, shortest λ)."
        },
        "commonlyMadeErrors": [
            {
                "error": "Believing that displacement current involves physical motion of electric charges.",
                "tip": "Displacement current is purely due to the rate of change of electric flux in space, not physical electrons.",
                "penalty": "Loss of 1 mark on conceptual reasoning."
            }
        ],
        "assertionReason": {
            "assertion": "A charging capacitor produces a magnetic field between its plates.",
            "reason": "The time-varying electric field between the capacitor plates generates a displacement current, which produces a magnetic field.",
            "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
            "explanation": "By the Ampere-Maxwell law, changing electric flux produces displacement current I_d = ε₀ dΦ/dt, generating a magnetic field."
        },
        "examTrend": {
            "pastYears": "CBSE 2024 SQP Q8, 2023, 2022, 2020",
            "frequency": "High Frequency",
            "typicalMarks": "3 Marks",
            "questionTypes": "Why Ampere law was incomplete, derive I_d = ε₀ dΦ/dt, EM wave speed relation c = 1/√(μ₀ε₀)",
            "hotTopic": "Displacement current derivation and charging capacitor paradox"
        }
    }
}

print(f"Loaded {len(ch7_ch8_data)} high-yield subtopics for Chapters 7 & 8.")
