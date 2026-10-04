# -*- coding: utf-8 -*-
"""
Structured notes data for Physics Chapters 5 & 6 (Magnetism and Matter & EMI)
Strictly conforming to NCERT and NODIA Class 12 CBSE standards.
"""

ch5_ch6_data = {
    # 5.5 Magnetic Properties of Materials (Dia, Para, Ferro)
    "phy-sub-5-3": {
        "definitions": [
            {
                "term": "Magnetic Susceptibility (χ_m)",
                "definition": "The dimensionless ratio of the intensity of induced magnetization $\\vec{M}$ to the applied magnetic intensity $\\vec{H}$: $\\chi_m = M / H$. Measures how easily a material becomes magnetized."
            },
            {
                "term": "Relative Magnetic Permeability (μ_r)",
                "definition": "The ratio of magnetic permeability of a substance to that of free space: $\\mu_r = \\mu / \\mu_0 = 1 + \\chi_m$."
            },
            {
                "term": "Curie's Law (Paramagnetism)",
                "definition": "For paramagnetic materials, susceptibility is inversely proportional to absolute temperature: $\\chi_m = C / T$, where $C$ is Curie's constant."
            },
            {
                "term": "Curie-Weiss Law (Ferromagnetism)",
                "definition": "Above the Curie temperature $T_c$, a ferromagnetic material transitions into a paramagnetic state with susceptibility: $\\chi_m = \\frac{C'}{T - T_c}$ (for $T > T_c$)."
            }
        ],
        "keyPoints": [
            "• <strong>Diamagnetic:</strong> $\\chi_m$ is small, negative ($-1 \\le \\chi_m < 0$), $\\mu_r < 1$, independent of temperature. Feebly repelled by magnets. Expels magnetic field lines ($B < B_0$). E.g. Bi, Cu, H₂O, Pb.",
            "• <strong>Paramagnetic:</strong> $\\chi_m$ is small, positive ($0 < \\chi_m \\ll 1$), $\\mu_r > 1$, obeys Curie's law $\\chi_m \\propto 1/T$. Feebly attracted by magnets. Slightly concentrates field lines ($B > B_0$). E.g. Al, Na, O₂ (gas), Pt.",
            "• <strong>Ferromagnetic:</strong> $\\chi_m \\gg 1000$, $\\mu_r \\gg 1000$, form macroscopic magnetic domains. Strongly attracted by magnets. Strongly crowds field lines ($B \\gg B_0$). Above Curie temperature $T_c$, loses ferromagnetism and becomes paramagnetic. E.g. Fe, Co, Ni.",
            "• <strong>Meissner Effect:</strong> In a superconductor (perfect diamagnet), $\\chi_m = -1$ and $\\mu_r = 0$, completely expelling all magnetic flux from its interior."
        ],
        "extraPoints": [
            "• <strong>Behavior in Non-Uniform Field:</strong> Diamagnetic moves from stronger to weaker field; Paramagnetic moves feebly from weaker to stronger field; Ferromagnetic moves vigorously from weaker to stronger field."
        ],
        "reactions": [],
        "oswaalMnemonic": {
            "title": "Magnetic Substance Signs",
            "phrase": "Dia is Defiant (Negative χ), Para is Polite (Small Positive χ), Ferro is Fierce (Giant Positive χ)",
            "explanation": "Dia: χ < 0 (repels); Para: 0 < χ ≪ 1 (attracts feebly); Ferro: χ ≫ 1000 (attracts strongly)."
        },
        "commonlyMadeErrors": [
            {
                "error": "Applying Curie's law to diamagnetic materials.",
                "tip": "Diamagnetism is temperature-INDEPENDENT. Curie's law applies strictly to PARAMAGNETIC substances.",
                "penalty": "Loss of 1 mark."
            }
        ],
        "assertionReason": {
            "assertion": "A diamagnetic substance is feebly repelled by a magnetic field.",
            "reason": "When placed in an external magnetic field, paired electron orbits precess to induce a magnetic moment opposite to the applied field.",
            "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
            "explanation": "By Lenz's law on atomic orbital electrons, induced dipoles oppose the external flux, creating repulsion."
        },
        "examTrend": {
            "pastYears": "CBSE 2024 SQP Q20, 2023, 2022, 2020",
            "frequency": "High Frequency Comparative",
            "typicalMarks": "3 Marks",
            "questionTypes": "Comparison table of dia/para/ferro properties, field lines behavior, Curie's law",
            "hotTopic": "Magnetic susceptibility comparison and field line expulsion vs crowding"
        }
    },

    # 6.3 Lenz's Law & Energy Conservation
    "phy-sub-6-3": {
        "definitions": [
            {
                "term": "Lenz's Law",
                "definition": "The polarity of induced electromotive force (EMF) is always such that it tends to produce an electric current whose magnetic flux opposes the change in magnetic flux that produces it: $\\varepsilon = -\\frac{d\\Phi_B}{dt}$."
            },
            {
                "term": "Energy Conservation Principle in Lenz's Law",
                "definition": "Mechanical work done by an external agent against the opposing magnetic Lorentz force is converted directly into electrical energy in the circuit, which ultimately dissipates as Joule heat: $dW_{\\text{mech}} = I^2 R \\, dt = dH_{\\text{Joule}}$."
            }
        ],
        "keyPoints": [
            "• <strong>Proof by Contradiction:</strong> If the induced pole attracted the approaching magnet instead of repelling it, the magnet would accelerate spontaneously without any external mechanical work. This would generate infinite free electrical energy from nothing, violating the First Law of Thermodynamics.",
            "• <strong>Approaching Magnet:</strong> Moving North pole toward a loop induces counter-clockwise current (viewed from magnet side), forming an induced North pole that repels the incoming magnet.",
            "• <strong>Receding Magnet:</strong> Pulling North pole away from a loop induces clockwise current, forming an induced South pole that attracts and opposes the receding magnet.",
            "• <strong>Negative Sign Significance:</strong> The negative sign in Faraday-Lenz equation $\\varepsilon = -d\\Phi_B/dt$ is the exact mathematical embodiment of Lenz's law opposition."
        ],
        "extraPoints": [
            "• <strong>Falling Magnet through Copper Pipe:</strong> A magnet dropped down a vertical copper tube experiences magnetic drag from eddy currents (Lenz's law), reaching a slow constant terminal velocity."
        ],
        "reactions": [],
        "oswaalMnemonic": {
            "title": "Lenz's Rule of Rejection",
            "phrase": "If You Come Closer, I Repel You; If You Go Away, I Pull You Back",
            "explanation": "Induced current always opposes relative motion between magnet and conductor."
        },
        "commonlyMadeErrors": [
            {
                "error": "Forgetting the negative sign in ε = -dΦ/dt or failing to explain energy conservation.",
                "tip": "Always state: 'The negative sign represents Lenz's law: mechanical work against magnetic repulsion equals electrical energy generated.'",
                "penalty": "Loss of 1 mark."
            }
        ],
        "assertionReason": {
            "assertion": "Lenz's law is a consequence of the law of conservation of energy.",
            "reason": "An external agent must do mechanical work against the opposing magnetic force to generate electrical energy.",
            "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
            "explanation": "Mechanical energy expended exactly equals electrical energy (and Joule heat) generated."
        },
        "examTrend": {
            "pastYears": "CBSE 2024, 2023, 2021, 2019",
            "frequency": "Core Concept",
            "typicalMarks": "3 Marks",
            "questionTypes": "State Lenz's law, justify energy conservation, determine induced current direction",
            "hotTopic": "Energy conservation justification & loop polarity determination"
        }
    },

    # 6.5 Motional EMF
    "phy-sub-6-5": {
        "definitions": [
            {
                "term": "Motional Electromotive Force",
                "definition": "The electromotive force induced across the ends of a conducting rod moving with velocity $\\vec{v}$ through a magnetic field $\\vec{B}$: $\\varepsilon = B v l$ (when $\\vec{v} \\perp \\vec{B} \\perp \\vec{l}$)."
            }
        ],
        "keyPoints": [
            "• <strong>Lorentz Force Origin:</strong> Free electrons of charge $-e$ moving with velocity $\\vec{v}$ in field $\\vec{B}$ experience magnetic force $\\vec{f} = -e(\\vec{v} \\times \\vec{B})$ directed along the length of the rod, separating charges and establishing motional EMF.",
            "• <strong>Induced Current:</strong> In a closed loop of resistance $R$: $I = \\frac{\\varepsilon}{R} = \\frac{Bvl}{R}$.",
            "• <strong>Opposing Retarding Force:</strong> Moving conductor carries current $I$ in field $B$, experiencing retarding force: $F = I l B = \\frac{B^2 l^2 v}{R}$.",
            "• <strong>Mechanical Power Conservation:</strong> Power supplied by external pulling agent $P_{\\text{mech}} = F v = \\frac{B^2 l^2 v^2}{R}$ exactly equals electrical Joule heating power dissipated $P_{\\text{elec}} = I^2 R = \\frac{B^2 l^2 v^2}{R}$!"
        ],
        "extraPoints": [
            "• <strong>Rotating Conducting Rod:</strong> A rod of length $l$ rotating with angular velocity $\\omega$ in a normal magnetic field develops EMF: $\\varepsilon = \\frac{1}{2} B \\omega l^2$."
        ],
        "reactions": [],
        "oswaalMnemonic": {
            "title": "Motional EMF Formula",
            "phrase": "ε = B v l (BVL - Big Voltage Leads)",
            "explanation": "Field × Velocity × Length gives induced motional voltage."
        },
        "commonlyMadeErrors": [
            {
                "error": "Using ε = Bvl for a rotating rod instead of ε = (1/2)Bωl².",
                "tip": "For linear translation: ε = Bvl. For rotation about one end: ε = (1/2)Bωl² (integrating v = ωr).",
                "penalty": "Loss of 1.5 marks."
            }
        ],
        "assertionReason": {
            "assertion": "Mechanical power spent in pulling a conducting rod through a magnetic field equals electrical power dissipated in the circuit.",
            "reason": "By energy conservation, external work done against magnetic retarding force converts completely into Joule heat.",
            "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
            "explanation": "P_mech = F · v = (B²l²v/R)v = B²l²v²/R = I²R."
        },
        "examTrend": {
            "pastYears": "CBSE 2023, 2022, 2020",
            "frequency": "High Frequency Derivation",
            "typicalMarks": "3 Marks",
            "questionTypes": "Derive ε = Bvl, power balance proof, rotating rod EMF derivation",
            "hotTopic": "Proof of mechanical to electrical power equivalence"
        }
    },

    # 6.7 & 6.8 Self & Mutual Inductance
    "phy-sub-6-7": {
        "definitions": [
            {
                "term": "Self-Induction & Coefficient of Self-Inductance (L)",
                "definition": "The property of a coil by which it opposes any change in electric current flowing through itself by inducing a back EMF: $\\Phi = L I \\implies \\varepsilon = -L \\frac{dI}{dt}$. SI Unit: Henry (H) ($1\\text{ H} = 1\\text{ V}\\cdot\\text{s/A}$)."
            },
            {
                "term": "Mutual Induction & Coefficient of Mutual Inductance (M)",
                "definition": "The phenomenon by which changing current in a primary coil induces an EMF in an adjacent secondary coil: $\\Phi_s = M I_p \\implies \\varepsilon_s = -M \\frac{dI_p}{dt}$. SI Unit: Henry (H)."
            },
            {
                "term": "Self-Inductance of a Long Solenoid",
                "definition": "$L = \\mu_0 n^2 A l = \\frac{\\mu_0 N^2 A}{l}$, where $n = N/l$ is turns per unit length."
            },
            {
                "term": "Mutual Inductance of Two Coaxial Solenoids",
                "definition": "$M = \\mu_0 n_1 n_2 A l = \\frac{\\mu_0 N_1 N_2 A}{l}$, where $A$ is the cross-sectional area of the inner solenoid."
            }
        ],
        "keyPoints": [
            "• <strong>Electrical Inertia:</strong> Self-inductance is called the 'inertia of electricity' because it opposes both growth and decay of electric current (Lenz's law).",
            "• <strong>Magnetic Energy Stored in Inductor:</strong> $U = \\frac{1}{2} L I^2$. Magnetic energy density: $u_B = \\frac{B^2}{2\\mu_0}$.",
            "• <strong>Reciprocity Theorem:</strong> The mutual inductance of coil 1 with respect to coil 2 equals that of coil 2 with respect to coil 1: $M_{12} = M_{21} = M$."
        ],
        "extraPoints": [
            "• <strong>Coupling Coefficient (k):</strong> $M = k\\sqrt{L_1 L_2}$, where $0 \\le k \\le 1$ ($k = 1$ for perfect mutual flux linkage)."
        ],
        "reactions": [],
        "oswaalMnemonic": {
            "title": "Inductance Formula",
            "phrase": "Turns Squared for Self, Product of Turns for Mutual",
            "explanation": "Self inductance L ∝ N²; Mutual inductance M ∝ N₁·N₂."
        },
        "commonlyMadeErrors": [
            {
                "error": "Writing L ∝ N instead of L ∝ N² for self-inductance of a solenoid.",
                "tip": "Self-inductance is proportional to the SQUARE of turns: L = μ₀ N² A / l.",
                "penalty": "Loss of 1 mark on proportionality question."
            }
        ],
        "assertionReason": {
            "assertion": "Self-inductance is called electrical inertia.",
            "reason": "Self-inductance opposes both the increase and decrease of electric current in the circuit.",
            "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
            "explanation": "Just as mass opposes changes in velocity in mechanics, inductance opposes changes in current in electrodynamics."
        },
        "examTrend": {
            "pastYears": "CBSE 2024, 2023, 2021, 2018",
            "frequency": "High Frequency",
            "typicalMarks": "3 Marks",
            "questionTypes": "Define 1 Henry, derive L for solenoid, derive M for two coaxial solenoids",
            "hotTopic": "Derivation of mutual inductance of coaxial solenoids"
        }
    }
}

print(f"Loaded {len(ch5_ch6_data)} high-yield subtopics for Chapters 5 & 6.")
