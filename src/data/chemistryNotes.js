// Full Granular NCERT Class 12 Chemistry High-Yield Notes

export const CHEMISTRY_CHAPTERS = [
  {
    id: 'chem-ch-1',
    number: 1,
    title: 'Solutions',
    tag: 'Physical Chemistry',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'chem-sub-1-1',
        title: '1.1 Concentration Terms (Mass %, Molarity, Molality, Mole Fraction)',
        sections: [
          {
            id: 'chem-sec-1-1',
            title: 'Concentration Units & Temperature Dependence',
            explanation: "These are the standard ways of expressing 'how much solute is dissolved' — mass percentage compares mass of solute to mass of the whole solution; molarity is moles of solute per litre of solution (temperature-dependent, since volume changes with temperature); molality is moles of solute per kg of solvent (temperature-independent, since mass doesn't change); and mole fraction expresses the ratio of moles of one component to total moles present. Choosing molality over molarity is important precisely because colligative-property formulas need a temperature-independent concentration measure.",
            questionFraming: "Numerical — 'Calculate the molarity/molality/mole fraction of a solution given the masses and molar masses of solute and solvent.'",
            textbookRef: "Mass % = (mass of solute / mass of solution) × 100. Molarity M = (moles solute / volume of solution in L). Molality m = (moles solute / mass of solvent in kg). Mole fraction x_A = n_A / (n_A + n_B). Molality and mole fraction are independent of temperature.",
            keyFormulas: [
              "Molarity = n_solute / V_solution(L)",
              "Molality = n_solute / W_solvent(kg)",
              "x_A = n_A / (n_A + n_B), x_A + x_B = 1"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-1-2',
        title: '1.2 Henry’s Law',
        sections: [
          {
            id: 'chem-sec-1-2',
            title: 'Henry’s Law & Biological Applications',
            explanation: "Henry's law states that the partial pressure of a gas over a solution is directly proportional to its mole fraction dissolved in the solution, P = K_H · x. Its everyday applications include why carbonated drinks are bottled under high pressure (keeps CO₂ dissolved), why deep-sea divers must ascend slowly (to avoid nitrogen bubbling out of the blood too fast, causing 'the bends'), and why people feel breathless at high altitude (lower partial pressure of O₂ means less dissolves in blood).",
            questionFraming: "Application / Give-Reason — 'State Henry\'s law and explain any one of its applications.'\n'Why are fishes more comfortable in cold water?' ⟶ Solubility of gas ∝ 1/Temperature, so cold water holds more dissolved oxygen.",
            textbookRef: "P = K_H · x. Higher K_H indicates lower solubility at a given pressure. K_H increases with temperature, which is why gas solubility decreases in warmer water.",
            keyFormulas: [
              "P = K_H · x",
              "Solubility ∝ 1 / K_H",
              "Solubility ∝ 1 / T"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-1-3',
        title: '1.3 Raoult’s Law',
        sections: [
          {
            id: 'chem-sec-1-3',
            title: 'Raoult’s Law for Volatile Liquids',
            explanation: "For a solution of two volatile liquids, Raoult's law states that each component's partial vapour pressure equals its mole fraction in the solution times its vapour pressure in the pure state: P_A = P°_A · x_A, and similarly for B. The total vapour pressure of the solution is the sum of these two partial pressures.",
            questionFraming: "Conceptual — 'State Raoult\'s law for a solution of two volatile liquids.'",
            textbookRef: "p_total = p_A + p_B = p°_A x_A + p°_B x_B. In vapour phase, mole fraction y_A = p_A / p_total.",
            keyFormulas: [
              "p_A = p°_A · x_A",
              "p_total = p°_A x_A + p°_B x_B",
              "Dalton's vapour mole fraction: y_A = p_A / p_total"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-1-4',
        title: '1.4 Ideal and Non-Ideal Solutions',
        sections: [
          {
            id: 'chem-sec-1-4',
            title: 'Thermodynamics of Ideal Solutions',
            explanation: "Ideal solutions obey Raoult's law across the entire concentration range, which happens when solute-solvent interactions are essentially identical in strength to solute-solute and solvent-solvent interactions, so ΔH_mixing = 0 and ΔV_mixing = 0. Non-ideal solutions deviate from Raoult's law because the various interactions differ in strength.",
            questionFraming: "Distinction — 'Distinguish between ideal and non-ideal solutions with two examples of each.'",
            textbookRef: "Ideal criteria: (i) Obeys Raoult's law at all T and C, (ii) ΔH_mix = 0, (iii) ΔV_mix = 0, (iv) A-B force = A-A force = B-B force. Examples: Benzene + Toluene, n-Hexane + n-Heptane, Bromoethane + Chloroethane.",
            keyFormulas: ["Ideal: ΔH_mix = 0, ΔV_mix = 0, F_AB = F_AA = F_BB"]
          }
        ]
      },
      {
        id: 'chem-sub-1-5',
        title: '1.5 Positive and Negative Deviations from Raoult’s Law',
        sections: [
          {
            id: 'chem-sec-1-5',
            title: 'Molecular Basis of Deviations',
            explanation: "Positive deviation occurs when solute-solvent interactions are weaker than the interactions in the pure components, so molecules escape into the vapour phase more easily than Raoult's law predicts (ΔV_mix = +ve, ΔH_mix = +ve); examples are acetone + water and alcohol + water. Negative deviation occurs when solute-solvent interactions are stronger, holding molecules back from the vapour phase (ΔV_mix = −ve, ΔH_mix = −ve); examples are acetone + chloroform and phenol + aniline.",
            questionFraming: "Distinction — 'Distinguish between positive and negative deviation from Raoult\'s law with one example each.'",
            textbookRef: "Positive: A-B < A-A and B-B, ΔH_mix > 0, ΔV_mix > 0, vapour pressure is higher (e.g., Ethanol + Acetone, CS₂ + Acetone). Negative: A-B > A-A and B-B (often due to H-bonding), ΔH_mix < 0, ΔV_mix < 0, vapour pressure is lower (e.g., Chloroform + Acetone, Phenol + Aniline).",
            keyFormulas: [
              "Positive: ΔH_mix > 0, ΔV_mix > 0, p_total > (p_A + p_B)_calc",
              "Negative: ΔH_mix < 0, ΔV_mix < 0, p_total < (p_A + p_B)_calc"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-1-6',
        title: '1.6 Azeotropes (Minimum & Maximum Boiling)',
        sections: [
          {
            id: 'chem-sec-1-6',
            title: 'Constant Boiling Mixtures',
            explanation: "Azeotropes are mixtures of two liquids that boil at a constant temperature and distil over with the same composition as the liquid, so they cannot be separated by simple fractional distillation. Solutions with positive deviation form minimum-boiling azeotropes (e.g., ethanol-water), while solutions with negative deviation form maximum-boiling azeotropes (e.g., nitric acid-water).",
            questionFraming: "Conceptual — 'What are azeotropes? Distinguish between minimum-boiling and maximum-boiling azeotropes.'",
            textbookRef: "Minimum-boiling: formed by large positive deviation at specific composition (e.g. 95.6% ethanol + 4.4% water, boiling at 351.15 K). Maximum-boiling: formed by large negative deviation (e.g. 68% HNO₃ + 32% water by mass, boiling at 393.5 K).",
            keyFormulas: [
              "Positive deviation ⟶ Minimum-boiling azeotrope",
              "Negative deviation ⟶ Maximum-boiling azeotrope"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-1-7',
        title: '1.7 Relative Lowering of Vapour Pressure',
        sections: [
          {
            id: 'chem-sec-1-7',
            title: 'Vapour Pressure Lowering & Molar Mass',
            explanation: "Adding a non-volatile solute to a solvent lowers the solvent's vapour pressure, because solute particles occupy some of the surface, reducing the fraction of solvent molecules able to escape. The relative lowering, (P° − P_s)/P°, is found (for dilute solutions) to equal the mole fraction of the solute — an early and elegant colligative-property result from which molar mass can be determined.",
            questionFraming: "Derivation/Numerical — 'State and derive the relation for relative lowering of vapour pressure, and use it to calculate the molar mass of a non-volatile solute.'",
            textbookRef: "(p°₁ − p₁)/p°₁ = x₂. For dilute solutions: (p°₁ − p₁)/p°₁ ≈ n₂/n₁ = (w₂/M₂) / (w₁/M₁) = (w₂M₁)/(M₂w₁).",
            keyFormulas: [
              "(p° − p_s) / p° = x₂",
              "(p° − p_s) / p° = (w₂ · M₁) / (M₂ · w₁)"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-1-8',
        title: '1.8 Elevation of Boiling Point',
        sections: [
          {
            id: 'chem-sec-1-8',
            title: 'Boiling Point Elevation & Ebullioscopic Constant',
            explanation: "Since the boiling point is the temperature at which vapour pressure equals atmospheric pressure, and a non-volatile solute lowers vapour pressure, a solution must be heated to a higher temperature than the pure solvent to boil — this elevation, ΔT_b = K_b · m, is directly proportional to the molal concentration of solute particles.",
            questionFraming: "Numerical / Give-Reason — 'Calculate boiling point elevation given K_b and molality.'\n'Cooking is faster in a pressure cooker than an open pan' ⟶ Higher internal pressure raises water's boiling point, cooking food faster.",
            textbookRef: "ΔT_b = T_b − T°_b = K_b · m. K_b is the molal elevation constant or ebullioscopic constant (unit: K·kg/mol). M₂ = (K_b · w₂ · 1000) / (ΔT_b · w₁).",
            keyFormulas: [
              "ΔT_b = K_b · m",
              "M₂ = (1000 · K_b · w₂) / (ΔT_b · w₁)"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-1-9',
        title: '1.9 Depression of Freezing Point',
        sections: [
          {
            id: 'chem-sec-1-9',
            title: 'Freezing Point Depression & Cryoscopic Constant',
            explanation: "By similar reasoning, dissolving a solute lowers the temperature at which the solution's vapour pressure matches that of the pure solid solvent, so the solution freezes at a lower temperature than the pure solvent: ΔT_f = K_f · m. This is the principle behind salting roads/snow to prevent ice formation.",
            questionFraming: "Numerical / Give-Reason — 'Why is salt sprinkled on snow in cold countries?' ⟶ Salt dissolves to depress the freezing point of water, melting snow.",
            textbookRef: "ΔT_f = T°_f − T_f = K_f · m. K_f is molal depression constant or cryoscopic constant (unit: K·kg/mol). Ethylene glycol is used as antifreeze in car radiators.",
            keyFormulas: [
              "ΔT_f = K_f · m",
              "M₂ = (1000 · K_f · w₂) / (ΔT_f · w₁)"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-1-10',
        title: '1.10 Osmotic Pressure',
        sections: [
          {
            id: 'chem-sec-1-10',
            title: 'Osmotic Pressure & Macromolecules',
            explanation: "When a solution is separated from pure solvent by a semipermeable membrane, solvent molecules tend to move into the solution by osmosis; osmotic pressure Π = CRT is the external pressure that must be applied to the solution to just prevent this net inflow. Because it can be measured accurately even for very dilute solutions at room temperature, it's a particularly precise colligative property for determining molar mass, especially of macromolecules.",
            questionFraming: "Give-Reason — 'Why is osmotic pressure the preferred method for finding molar mass of macromolecules (proteins, polymers)?' ⟶ Measured at room temperature; proteins decompose at higher temperatures used in boiling/freezing methods.",
            textbookRef: "Π = CRT = (w₂RT) / (M₂V). R = 0.0821 L·atm/(mol·K). Isotonic solutions have identical osmotic pressure (Π₁ = Π₂). Hypertonic solution has higher Π; hypotonic has lower Π.",
            keyFormulas: [
              "Π = CRT = (n / V) · RT",
              "M₂ = (w₂ · R · T) / (Π · V)"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-1-11',
        title: '1.11 Osmosis and Reverse Osmosis',
        sections: [
          {
            id: 'chem-sec-1-11',
            title: 'Osmosis Mechanism & Reverse Osmosis Desalination',
            explanation: "Osmosis is the spontaneous flow of solvent through a semipermeable membrane from a region of lower solute concentration to higher solute concentration. Reverse osmosis applies an external pressure greater than the osmotic pressure on the concentrated side, forcing solvent to flow the other way (against its natural tendency) — this is the principle used in desalination and water purification.",
            questionFraming: "Application / Give-Reason — 'Why do RBCs shrink in saline water but swell in distilled water?' ⟶ Saline is hypertonic, water leaves cell (plasmolysis); distilled water is hypotonic, water enters cell by endosmosis.",
            textbookRef: "When external pressure P > Π is applied to the solution side, pure water is squeezed out through the cellulose acetate semipermeable membrane, leaving behind dissolved salts — industrial water desalination.",
            keyFormulas: [
              "P > Π  ⟶  Reverse Osmosis",
              "Membrane material: Cellulose acetate"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-1-12',
        title: '1.12 Van’t Hoff Factor',
        sections: [
          {
            id: 'chem-sec-1-12',
            title: 'Van’t Hoff Factor & Abnormal Molecular Mass',
            explanation: "Real solutes sometimes associate (e.g., dimerize) or dissociate (e.g., ionize) in solution, which changes the actual number of particles present compared to what the formula weight would suggest, causing measured colligative properties to deviate from calculated ones. The van't Hoff factor, i = observed colligative property/calculated colligative property = normal molar mass/abnormal molar mass, corrects for this — i > 1 for dissociation, i < 1 for association.",
            questionFraming: "Numerical — 'Calculate the van\'t Hoff factor and degree of dissociation for 0.1 M BaCl₂ solution.'",
            textbookRef: "i = (Normal Molar Mass) / (Abnormal Molar Mass) = (Observed CP) / (Calculated CP). For dissociation into n ions: α = (i − 1)/(n − 1). For association of n molecules into n-mer: α = (1 − i)/(1 − 1/n).",
            keyFormulas: [
              "i = (Normal M) / (Abnormal M)",
              "Dissociation: α = (i − 1) / (n − 1)",
              "Association: α = (1 − i) / (1 − 1/n)",
              "Modified formulas: ΔT_b = i·K_b·m, ΔT_f = i·K_f·m, Π = i·CRT"
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'chem-ch-2',
    number: 2,
    title: 'Electrochemistry',
    tag: 'Physical Chemistry',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'chem-sub-2-1',
        title: '2.1 The Salt Bridge',
        sections: [
          {
            id: 'chem-sec-2-1',
            title: 'Salt Bridge Composition & Functions',
            explanation: "A salt bridge is a U-shaped tube filled with an inert electrolyte (KCl, KNO₃, or NH₄NO₃) set in agar-agar gel, connecting the two half-cells of a galvanic cell. It maintains electrical neutrality in each half-cell by letting ions migrate to replace those consumed/produced by the electrode reactions, without allowing the bulk solutions themselves to mix.",
            questionFraming: "Factual — 'What chemicals are used in a salt bridge, and what is its role in a galvanic cell?'",
            textbookRef: "1. Completes the electrical circuit by allowing migration of ions.\n2. Maintains electrical neutrality in both anodic and cathodic half-cell solutions.\n3. Prevents accumulation of charges and eliminates liquid junction potential.",
            keyFormulas: ["Inert electrolytes: KCl, KNO₃, NH₄NO₃ in agar-agar"]
          }
        ]
      },
      {
        id: 'chem-sub-2-2',
        title: '2.2 Electrochemical Cell vs. Electrolytic Cell',
        sections: [
          {
            id: 'chem-sec-2-2',
            title: 'Galvanic vs Electrolytic Operation (E_ext)',
            explanation: "In a galvanic (electrochemical) cell, a spontaneous redox reaction generates electricity; in an electrolytic cell, an external EMF drives a non-spontaneous reaction. For a cell like the Daniell cell (E_cell = 1.1 V), if the external opposing EMF E_ext < 1.1 V, the cell continues acting as a galvanic cell; if E_ext > 1.1 V, the current reverses and it behaves as an electrolytic cell; if E_ext = 1.1 V exactly, no current flows at all — this exact balance is the working principle of a potentiometer.",
            questionFraming: "Distinction — 'Distinguish between an electrochemical cell and an electrolytic cell. What happens when E_ext > 1.1 V, E_ext < 1.1 V, and E_ext = 1.1 V?'",
            textbookRef: "For Daniell Cell (Zn-Cu, E° = 1.1 V):\n• E_ext < 1.1 V: Electrons flow from Zn to Cu, current from Cu to Zn (Galvanic cell).\n• E_ext = 1.1 V: No electron flow, no current, no chemical reaction.\n• E_ext > 1.1 V: Electrons flow from Cu to Zn, current from Zn to Cu. Zinc deposits on Zn electrode and Cu dissolves (Electrolytic cell).",
            keyFormulas: [
              "E_ext < E_cell ⟶ Galvanic action",
              "E_ext = E_cell ⟶ Balance (Potentiometer)",
              "E_ext > E_cell ⟶ Electrolytic action (Reverse current)"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-2-3',
        title: '2.3 Standard Electrode Potential',
        sections: [
          {
            id: 'chem-sec-2-3',
            title: 'Standard Hydrogen Electrode (SHE)',
            explanation: "Since only potential differences (not absolute electrode potentials) can be measured, a reference point is needed — the standard hydrogen electrode (SHE) is assigned a potential of exactly 0 V under standard conditions, and every other electrode's standard potential is measured relative to it.",
            questionFraming: "Conceptual — 'What is meant by standard electrode potential? Why is it measured relative to the SHE?'",
            textbookRef: "SHE consists of a platinum electrode coated with platinum black dipped in 1 M H⁺ solution with pure H₂ gas bubbled at 1 bar at 298 K: Pt(s) | H₂(g, 1 bar) | H⁺(aq, 1 M). E° is arbitrarily set to 0.00 V. E°_cell = E°_cathode − E°_anode.",
            keyFormulas: ["E°(SHE) = 0.00 V", "E°_cell = E°_cathode − E°_anode"]
          }
        ]
      },
      {
        id: 'chem-sub-2-4',
        title: '2.4 The Nernst Equation',
        sections: [
          {
            id: 'chem-sec-2-4',
            title: 'Nernst Formulation & Equilibrium Constant',
            explanation: "Electrode/cell potentials depend on the actual concentrations of the species involved, not just standard conditions; the Nernst equation, E_cell = E°_cell − (0.059/n) log Q, corrects for this. Special cases include using the equilibrium constant when Q = K_c (E°_cell = (0.059/n) log K_c) and pH-dependent electrodes.",
            questionFraming: "Numerical — 'Calculate the EMF of a cell of given concentrations using the Nernst equation.'",
            textbookRef: "E_cell = E°_cell − (2.303 RT / nF) log Q. At 298 K, (2.303 RT / F) = 0.0591. Thus E_cell = E°_cell − (0.0591 / n) log([Anode] / [Cathode]). When E_cell = 0 (at equilibrium), E°_cell = (0.0591 / n) log K_c. ΔG° = −nFE°_cell = −2.303 RT log K_c.",
            keyFormulas: [
              "E_cell = E°_cell − (0.059 / n) log Q",
              "E°_cell = (0.059 / n) log K_c",
              "ΔG° = −nFE°_cell"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-2-5',
        title: '2.5 Molar Conductivity and Degree of Dissociation',
        sections: [
          {
            id: 'chem-sec-2-5',
            title: 'Conductivity & Ostwald Dilution Law',
            explanation: "Molar conductivity Λm = (κ × 1000)/C measures the conducting power of all the ions produced by one mole of electrolyte. For a weak electrolyte, comparing its molar conductivity at a given concentration to its limiting molar conductivity (at infinite dilution) gives the degree of dissociation, α = Λm/Λ°m, and from that, the dissociation constant K_a = α²C/(1 − α).",
            questionFraming: "Numerical — 'Calculate the degree of dissociation of a weak electrolyte given Λm and Λ°m.'",
            textbookRef: "Conductivity κ = (1/R) · (l/A) = G · G*. Molar conductivity Λm = (κ × 1000)/C (S·cm²/mol). Degree of dissociation α = Λm / Λ°m. Dissociation constant K_a = Cα² / (1 − α).",
            keyFormulas: [
              "Λm = (κ × 1000) / C",
              "α = Λm / Λ°m",
              "K_a = Cα² / (1 − α)"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-2-6',
        title: '2.6 Cell Constant',
        sections: [
          {
            id: 'chem-sec-2-6',
            title: 'Cell Constant Definition & Determination',
            explanation: "The cell constant (G* = G × R, or equivalently l/A for the conductivity cell's electrodes) is a fixed geometric property of a particular conductivity cell, used to convert a measured resistance into the solution's actual conductivity/molar conductivity.",
            questionFraming: "Conceptual — 'Define cell constant and state how it is used to calculate the conductivity of a solution.'",
            textbookRef: "G* = l / A = R · κ. It is determined experimentally by measuring the resistance R of the cell filled with a standard KCl solution of known conductivity κ.",
            keyFormulas: ["G* = l / A = R · κ", "κ = G* / R"]
          }
        ]
      },
      {
        id: 'chem-sub-2-7',
        title: '2.7 Faraday’s Laws of Electrolysis',
        sections: [
          {
            id: 'chem-sec-2-7',
            title: "Faraday's Quantitative Laws of Electrolysis",
            explanation: "Faraday's first law states the mass of substance deposited/liberated at an electrode is directly proportional to the quantity of charge passed, w = ZIt. His second law states that, for the same quantity of charge, the masses of different substances deposited are proportional to their equivalent weights, w₁/w₂ = E₁/E₂.",
            questionFraming: "Factual/Numerical — 'State Faraday\'s first and second laws of electrolysis, and calculate the mass of metal deposited by a given current over a given time.'",
            textbookRef: "1st Law: w = ZQ = ZIt, where Z = E / 96500 (electrochemical equivalent). 2nd Law: When same charge Q passes through solutions in series, w₁/w₂ = E₁/E₂.",
            keyFormulas: [
              "w = ZIt = (M · I · t) / (n · F)",
              "1 Faraday F = 96487 ≈ 96500 C/mol",
              "w₁ / w₂ = E₁ / E₂"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-2-8',
        title: '2.8 Kohlrausch’s Law',
        sections: [
          {
            id: 'chem-sec-2-8',
            title: 'Kohlrausch’s Independent Migration of Ions',
            explanation: "Kohlrausch's law states that the limiting molar conductivity of an electrolyte is the sum of the limiting ionic conductivities of its individual ions, each weighted by the number of ions of that type in the formula unit — e.g., Λ°m(CH₃COOH) = λ°(H⁺) + λ°(CH₃COO⁻). This is especially useful for finding Λ°m of weak electrolytes, which cannot be measured directly by extrapolation (since their conductivity doesn't vary linearly with concentration).",
            questionFraming: "Application — 'State Kohlrausch\'s law and use it to calculate the limiting molar conductivity of acetic acid from the given ionic conductivities.'",
            textbookRef: "Λ°m = ν₊ λ°₊ + ν₋ λ°₋. Application: To calculate Λ°m for weak electrolyte CH₃COOH:\nΛ°m(CH₃COOH) = Λ°m(CH₃COONa) + Λ°m(HCl) − Λ°m(NaCl).",
            keyFormulas: [
              "Λ°m = ν₊λ°₊ + ν₋λ°₋",
              "Λ°m(CH₃COOH) = Λ°m(CH₃COONa) + Λ°m(HCl) − Λ°m(NaCl)"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-2-9',
        title: '2.9 Effect of Dilution and Temperature on Conductivity',
        sections: [
          {
            id: 'chem-sec-2-9',
            title: 'Dilution Effect on κ and Λm',
            explanation: "On dilution, the number of ions per unit volume decreases, so specific conductivity (κ) decreases; but ionic mobility increases (less inter-ionic attraction at lower concentration), so molar conductivity (Λm) increases with dilution. For metallic conduction, higher temperature increases atomic vibrations, increasing resistance and thus decreasing conductance; lower temperature has the opposite effect.",
            questionFraming: "Application — 'Explain the effect of dilution on the molar conductivity of an electrolyte, and the effect of temperature on metallic conductance.'",
            textbookRef: "• Conductivity κ: decreases on dilution for both strong and weak electrolytes because number of ions per mL decreases.\n• Molar conductivity Λm: increases on dilution. For strong electrolytes, interionic attraction drops; for weak electrolytes, degree of dissociation α surges.",
            keyFormulas: [
              "Dilution ⟶ κ decreases, Λm increases",
              "Debye-Hückel-Onsager equation: Λm = Λ°m − A√C"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-2-10',
        title: '2.10 Batteries (Primary, Secondary & Fuel Cells)',
        sections: [
          {
            id: 'chem-sec-2-10',
            title: 'Commercial Cells & Fuel Cells',
            explanation: "Primary cells (e.g., dry cell) cannot be recharged and are discarded once the reactants are consumed. Secondary cells (e.g., lead storage battery) can be recharged by passing current in reverse. Mercury cells give a constant voltage throughout their life because their overall cell reaction doesn't involve any solution-phase ion whose concentration changes. Fuel cells are eco-friendly and highly efficient, converting the chemical energy of a fuel directly into electricity (used in spacecraft).",
            questionFraming: "Reasoning — 'Why does a mercury cell provide a constant voltage throughout its life? What are the advantages of a fuel cell?'\nReactions — 'Write the electrode reactions for a mercury cell, a lead storage battery, and a hydrogen–oxygen fuel cell.'",
            textbookRef: "Reactions:\n• Mercury Cell (1.35 V):\n  Anode: Zn(Hg) + 2OH⁻ ⟶ ZnO + H₂O + 2e⁻\n  Cathode: HgO + H₂O + 2e⁻ ⟶ Hg + 2OH⁻\n  Overall: Zn(Hg) + HgO ⟶ ZnO + Hg (no ions in solution!)\n• Lead Storage Battery (discharging, 2.0 V/cell):\n  Anode: Pb + SO₄²⁻ ⟶ PbSO₄ + 2e⁻\n  Cathode: PbO₂ + 4H⁺ + SO₄²⁻ + 2e⁻ ⟶ PbSO₄ + 2H₂O\n• H₂-O₂ Fuel Cell (Apollo spacecraft):\n  Anode: 2H₂ + 4OH⁻ ⟶ 4H₂O + 4e⁻\n  Cathode: O₂ + 2H₂O + 4e⁻ ⟶ 4OH⁻",
            keyFormulas: [
              "Lead battery: Pb + PbO₂ + 2H₂SO₄ ⟶ 2PbSO₄ + 2H₂O",
              "Fuel cell overall: 2H₂ + O₂ ⟶ 2H₂O  (η ≈ 70%)"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-2-11',
        title: '2.11 Corrosion and its Prevention',
        sections: [
          {
            id: 'chem-sec-2-11',
            title: 'Electrochemical Rusting & Sacrificial Protection',
            explanation: "Corrosion (e.g., rusting of iron) is an electrochemical process where a metal is oxidised by the surrounding environment. It can be prevented by covering the metal surface (paint, oil, grease/galvanising) to keep out moisture and oxygen, or by sacrificial protection — coating the metal with a more easily oxidised (more electronegative/more reactive) metal, which corrodes preferentially and protects the base metal.",
            questionFraming: "Application — 'Explain how corrosion of iron can be prevented, including the principle of sacrificial protection.'",
            textbookRef: "Rusting mechanism:\nAnode: 2Fe(s) ⟶ 2Fe²⁺ + 4e⁻ (E° = −0.44 V)\nCathode: O₂ + 4H⁺ + 4e⁻ ⟶ 2H₂O (E° = 1.23 V)\nOverall: 2Fe + O₂ + 4H⁺ ⟶ 2Fe²⁺ + 2H₂O (E° = 1.67 V)\nFe²⁺ is further oxidised to Fe³⁺, forming rust Fe₂O₃·xH₂O.\nSacrificial protection: Galvanization with Zinc (Zn E° = −0.76 V protects Fe E° = −0.44 V).",
            keyFormulas: [
              "Rust formula: Fe₂O₃ · xH₂O",
              "Sacrificial anode: Zn or Mg blocks"
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'chem-ch-4',
    number: 4,
    title: 'The d- and f-Block Elements',
    tag: 'Inorganic Chemistry',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'chem-sub-4-1',
        title: '4.1 General Characteristics of Transition Metals',
        sections: [
          {
            id: 'chem-sec-4-1',
            title: 'Variable Oxidation States & Colours',
            explanation: "Transition metals show variable oxidation states (because their (n-1)d and ns electrons have comparable energies, so different numbers of electrons can be lost) and form coloured complexes (because partially filled d-orbitals allow d–d electronic transitions that absorb specific wavelengths of visible light, transmitting the complementary colour).",
            questionFraming: "Conceptual — 'Why do transition metals show variable oxidation states and form coloured compounds?'",
            textbookRef: "Variable oxidation states arise because energies of (n−1)d and ns electrons are very close. d-d transitions: when ligands approach, degenerate d-orbitals split into eg and t2g. Electron excitation absorbs visible photons; transmitted light gives characteristic colour.",
            keyFormulas: [
              "Spin-only magnetic moment: μ = √[n(n + 2)] B.M. (where n = unpaired electrons)"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-4-2',
        title: '4.2 Preparation of KMnO₄',
        sections: [
          {
            id: 'chem-sec-4-2',
            title: 'Preparation of KMnO₄ from Pyrolusite',
            explanation: "Potassium permanganate is manufactured starting from pyrolusite ore (MnO₂), which is fused with KOH and an oxidising agent (like KNO₃ or air) to give potassium manganate (K₂MnO₄), which is then oxidised (chemically, e.g., by Cl₂, or electrolytically) to potassium permanganate (KMnO₄).",
            questionFraming: "Synthesis — 'Write the step-by-step chemical equations for the preparation of KMnO₄ from pyrolusite ore.'",
            textbookRef: "Step 1: 2MnO₂ + 4KOH + O₂ ⟶ 2K₂MnO₄ (dark green) + 2H₂O\nStep 2: 3MnO₄²⁻ + 4H⁺ ⟶ 2MnO₄⁻ (purple) + MnO₂ + 2H₂O (acidic disproportionation) OR electrolytic oxidation in alkaline solution at anode: MnO₄²⁻ ⟶ MnO₄⁻ + e⁻.",
            keyFormulas: [
              "2MnO₂ + 4KOH + O₂ ⟶ 2K₂MnO₄ + 2H₂O",
              "3MnO₄²⁻ + 4H⁺ ⟶ 2MnO₄⁻ + MnO₂ + 2H₂O"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-4-3',
        title: '4.3 Preparation of K₂Cr₂O₇',
        sections: [
          {
            id: 'chem-sec-4-3',
            title: 'Preparation of K₂Cr₂O₇ from Chromite Ore',
            explanation: "Potassium dichromate is manufactured starting from chromite ore (FeCr₂O₄), which is fused with Na₂CO₃/NaOH in the presence of air to give sodium chromate, which is converted to sodium dichromate by acidification, and finally to potassium dichromate by treatment with KCl (potassium dichromate being less soluble, it crystallises out).",
            questionFraming: "Synthesis — 'Write the step-by-step chemical equations for the preparation of K₂Cr₂O₇ from chromite ore.'",
            textbookRef: "1. Fusion/Roasting: 4FeCr₂O₄ + 8Na₂CO₃ + 7O₂ ⟶ 8Na₂CrO₄ (yellow) + 2Fe₂O₃ + 8CO₂\n2. Acidification: 2Na₂CrO₄ + 2H⁺ ⟶ Na₂Cr₂O₇ (orange) + 2Na⁺ + H₂O\n3. Potassium exchange: Na₂Cr₂O₇ + 2KCl ⟶ K₂Cr₂O₇ (orange crystals) + 2NaCl.",
            keyFormulas: [
              "4FeCr₂O₄ + 8Na₂CO₃ + 7O₂ ⟶ 8Na₂CrO₄ + 2Fe₂O₃ + 8CO₂",
              "2Na₂CrO₄ + 2H⁺ ⟶ Na₂Cr₂O₇ + 2Na⁺ + H₂O",
              "Na₂Cr₂O₇ + 2KCl ⟶ K₂Cr₂O₇ + 2NaCl"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-4-4',
        title: '4.4 Structures of Chromate, Dichromate & Permanganate',
        sections: [
          {
            id: 'chem-sec-4-4',
            title: 'Tetrahedral Structures & pH Equilibrium',
            explanation: "The chromate ion, CrO₄²⁻, is tetrahedral. In acidic solution, two tetrahedral chromate units condense (sharing one oxygen corner) to give the dichromate ion, Cr₂O₇²⁻. Similarly, both the manganate ion (MnO₄²⁻) and the permanganate ion (MnO₄⁻) are tetrahedral, with Mn in the +6 and +7 oxidation states respectively.",
            questionFraming: "Structural — 'Draw and describe the structures of the chromate and dichromate ions. How does pH affect their interconversion?'",
            textbookRef: "Chromate CrO₄²⁻ is tetrahedral (yellow). Dichromate Cr₂O₇²⁻ consists of two tetrahedra sharing one oxygen atom with Cr-O-Cr bond angle of 126° (orange). Interconversion: 2CrO₄²⁻ + 2H⁺ ⇌ Cr₂O₇²⁻ + H₂O (Acidic pH favors orange dichromate; Alkaline pH favors yellow chromate).",
            keyFormulas: ["2CrO₄²⁻ (yellow) + 2H⁺ ⇌ Cr₂O₇²⁻ (orange) + H₂O", "Cr-O-Cr angle = 126°"]
          }
        ]
      },
      {
        id: 'chem-sub-4-5',
        title: '4.5 Lanthanoid Contraction',
        sections: [
          {
            id: 'chem-sec-4-5',
            title: 'Lanthanoid Contraction: Causes & Consequences',
            explanation: "Lanthanoid contraction is the steady, cumulative decrease in atomic and ionic radii across the lanthanoid series, caused by the poor shielding effect of 4f electrons (they shield the increasing nuclear charge less effectively than d or p electrons, so effective nuclear charge — and hence the pull on outer electrons — increases across the series). One important consequence is that Zr (4d series) and Hf (5d series) end up with almost identical atomic/ionic radii, causing them to have very similar chemical properties and making them difficult to separate; another application is the production of misch metal (a lanthanide alloy, used in lighter flints).",
            questionFraming: "Distinguish (multi-part) — '(a) Distinguish between lanthanoid and actinoid contraction. (b) State the causes of lanthanoid contraction. (c) State its consequences. (d) What is misch metal used for?'",
            textbookRef: "Cause: 4f orbitals are diffuse and have poor shielding efficiency. Outer 5s and 5p electrons experience higher effective nuclear charge Z_eff. Consequences: (1) Zr (~160 pm) ≈ Hf (~159 pm) twin elements, (2) Basicity of hydroxides drops La(OH)₃ > Lu(OH)₃, (3) Misch metal (95% lanthanoid, 5% iron, traces of S, C, Ca) used for gas lighters and bullets.",
            keyFormulas: ["Zr ≈ Hf atomic radii", "Basicity: La(OH)₃ > Lu(OH)₃"]
          }
        ]
      },
      {
        id: 'chem-sub-4-6',
        title: '4.6 Lanthanoid vs. Actinoid Contraction',
        sections: [
          {
            id: 'chem-sec-4-6',
            title: 'Comparison: 4f vs 5f Shielding',
            explanation: "Actinoid contraction is similar in nature to lanthanoid contraction (caused by poor shielding, this time by 5f electrons) but is larger in extent and more irregular across the series, because 5f orbitals shield the nuclear charge even less effectively than 4f orbitals do, and because of greater involvement of 5f, 6d, and 7s orbitals in bonding for actinoids.",
            questionFraming: "Distinction — 'How does actinoid contraction differ from lanthanoid contraction?'",
            textbookRef: "Actinoid contraction from element to element is greater than lanthanoid contraction because 5f electrons have poorer shielding effect than 4f electrons, and 5f orbitals extend further into space.",
            keyFormulas: ["Actinoid contraction > Lanthanoid contraction (poorer 5f shielding)"]
          }
        ]
      },
      {
        id: 'chem-sub-4-7',
        title: '4.7 Oxidising Properties & Action of pH on KMnO₄',
        sections: [
          {
            id: 'chem-sec-4-7',
            title: 'Action of pH on Reduction of KMnO₄',
            explanation: "Both KMnO₄ and K₂Cr₂O₇ are powerful oxidising agents due to the high oxidation states of Mn (+7) and Cr (+6). Crucially, the reduction product of permanganate depends on the pH of the medium: in acidic solution, MnO₄⁻ is reduced all the way to Mn²⁺ (colourless); in neutral or faintly alkaline solution, it's reduced only to MnO₂ (brown precipitate); and in strongly alkaline solution, it's reduced only to manganate, MnO₄²⁻ (green).",
            questionFraming: "Reasoning — 'Explain the action of pH on the reduction product of KMnO₄, giving the relevant equations.'\nReactions — 'Describe the oxidising property of KMnO₄ and K₂Cr₂O₇ with suitable examples.'",
            textbookRef: "• Acidic Medium (n = 5):\n  MnO₄⁻ + 8H⁺ + 5e⁻ ⟶ Mn²⁺ + 4H₂O\n  Oxidises Fe²⁺ to Fe³⁺, C₂O₄²⁻ to CO₂, I⁻ to I₂.\n• Neutral/Faintly Alkaline Medium (n = 3):\n  MnO₄⁻ + 2H₂O + 3e⁻ ⟶ MnO₂ + 4OH⁻\n  Oxidises I⁻ to IO₃⁻ (iodate).\n• Strongly Alkaline Medium (n = 1):\n  MnO₄⁻ + e⁻ ⟶ MnO₄²⁻ (green)\n• K₂Cr₂O₇ in Acidic Medium (n = 6):\n  Cr₂O₇²⁻ + 14H⁺ + 6e⁻ ⟶ 2Cr³⁺ (green) + 7H₂O.",
            keyFormulas: [
              "Acidic: MnO₄⁻ ⟶ Mn²⁺ (n = 5)",
              "Neutral: MnO₄⁻ ⟶ MnO₂ (n = 3)",
              "Alkaline: MnO₄⁻ ⟶ MnO₄²⁻ (n = 1)",
              "Dichromate acidic: Cr₂O₇²⁻ ⟶ 2Cr³⁺ (n = 6)"
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'chem-ch-6',
    number: 6,
    title: 'Haloalkanes and Haloarenes',
    tag: 'Organic Chemistry',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'chem-sub-6-1',
        title: '6.1 Classification of Halogen Compounds',
        sections: [
          {
            id: 'chem-sec-6-1',
            title: 'Mono, Di, Polyhalogen & Allylic/Benzylic Types',
            explanation: "Halogen derivatives are classified by the number of halogen atoms (mono, di, poly) and the hybridization of the carbon bonded to halogen:\n• sp³ C-X: Alkyl halides, Allylic halides (CH₂=CH-CH₂X), Benzylic halides (Ar-CH₂X).\n• sp² C-X: Vinylic halides (CH₂=CH-X), Aryl halides (Ar-X).",
            questionFraming: "Classification — 'Differentiate allylic, vinylic, and benzylic halides with structures.'",
            textbookRef: "Allylic: halogen bonded to sp³ carbon next to C=C double bond. Vinylic: halogen directly bonded to sp² carbon of C=C double bond.",
            keyFormulas: ["Allylic: R-CH=CH-CH₂X", "Vinylic: R-CH=CHX", "Benzylic: C₆H₅-CH₂X"]
          }
        ]
      },
      {
        id: 'chem-sub-6-2',
        title: '6.2 Nature of C–X Bond',
        sections: [
          {
            id: 'chem-sec-6-2',
            title: 'Polar C-X Bond & Dipole Moments',
            explanation: "Halogen atoms are more electronegative than carbon, polarizing the carbon-halogen bond: C^(δ+)—X^(δ−). Bond polarity, bond length, and dipole moment follow the electronegativity of the halogens (F > Cl > Br > I).",
            questionFraming: "Conceptual — 'Why is the dipole moment of chloromethane higher than fluoromethane despite fluorine being more electronegative?' ⟶ C-Cl bond length is significantly larger than C-F, making dipole moment (q × d) greater.",
            textbookRef: "Bond enthalpy: C-F > C-Cl > C-Br > C-I. Bond length: C-I > C-Br > C-Cl > C-F. Dipole moment: CH₃Cl (1.860 D) > CH₃F (1.847 D) > CH₃Br > CH₃I.",
            keyFormulas: ["Dipole moment: CH₃Cl > CH₃F > CH₃Br > CH₃I"]
          }
        ]
      },
      {
        id: 'chem-sub-6-3',
        title: '6.3 Methods of Preparation of Haloalkanes',
        sections: [
          {
            id: 'chem-sec-6-3',
            title: 'Thionyl Chloride, Lucas & Halogen Exchange',
            explanation: "From alcohols using SOCl₂ (Darzens process — best method because by-products SO₂ and HCl are escapable gases). Using Lucas reagent (conc. HCl + ZnCl₂). Halogen exchange: Finkelstein reaction (R-Cl/Br + NaI in dry acetone ⟶ R-I) and Swarts reaction (R-Cl/Br + AgF/Hg₂F₂ ⟶ R-F).",
            questionFraming: "Named Reactions — 'Write the chemical equations for Finkelstein and Swarts reactions.'\n'Why is thionyl chloride preferred for preparing alkyl chlorides?' ⟶ By-products SO₂ and HCl escape as gases, leaving pure alkyl chloride.",
            textbookRef: "R-OH + SOCl₂ ⟶ R-Cl + SO₂↑ + HCl↑. Finkelstein: R-X + NaI (acetone) ⟶ R-I + NaX↓. Swarts: CH₃Br + AgF ⟶ CH₃F + AgBr.",
            keyFormulas: [
              "R-OH + SOCl₂ ⟶ R-Cl + SO₂↑ + HCl↑",
              "Finkelstein: R-X + NaI ⟶ R-I + NaX",
              "Swarts: R-X + AgF ⟶ R-F + AgX"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-6-4',
        title: '6.4 Physical Properties',
        sections: [
          {
            id: 'chem-sec-6-4',
            title: 'Boiling Points & Solubility Trends',
            explanation: "Boiling points increase with increasing molecular weight and halogen size: RI > RBr > RCl > RF. For isomeric alkyl halides, boiling point decreases with branching due to decreased surface area and weaker van der Waals forces. Insoluble in water because they cannot form hydrogen bonds with water molecules.",
            questionFraming: "Reasoning — 'Why does p-dichlorobenzene have a higher melting point than o- and m-isomers?' ⟶ Symmetry of p-isomer allows closer fitting in crystal lattice.",
            textbookRef: "Boiling point: 1° > 2° > 3° for isomeric haloalkanes. Para-dichlorobenzene has highest melting point due to crystalline symmetry.",
            keyFormulas: ["Boiling point ∝ Molecular Weight ∝ 1 / Branching"]
          }
        ]
      },
      {
        id: 'chem-sub-6-5',
        title: '6.5 Substitution Mechanisms: SN1 vs SN2',
        sections: [
          {
            id: 'chem-sec-6-5',
            title: 'Detailed Comparison: SN1 vs SN2 Mechanisms',
            explanation: "• SN1 Mechanism: Two-step reaction. Step 1 (slow, rate-determining) forms planar carbocation intermediate. Step 2 (fast) nucleophile attacks from either side, causing partial racemization. Reactivity: 3° > 2° > 1° > CH₃X (stabilized by +I and hyperconjugation). Favored by polar protic solvents.\n• SN2 Mechanism: One-step concerted bimolecular reaction. Nucleophile attacks from back side opposite leaving group via 5-coordinate transition state. Causes complete Walden inversion of configuration. Reactivity: CH₃X > 1° > 2° > 3° (least steric hindrance). Favored by polar aprotic solvents.",
            questionFraming: "Distinction — 'Distinguish between SN1 and SN2 mechanisms with respect to kinetics, stereochemistry, solvent, and order of reactivity.'",
            textbookRef: "SN1: Rate = k[R-X]. Retention + Inversion = Racemisation. Carbocation rearrangement possible.\nSN2: Rate = k[R-X][Nu⁻]. 100% Inversion of configuration (Walden inversion). No carbocation.",
            keyFormulas: [
              "SN1 Reactivity: 3° > 2° > 1° > CH₃X",
              "SN2 Reactivity: CH₃X > 1° > 2° > 3°",
              "SN1: Racemisation (planar carbocation intermediate)",
              "SN2: Walden Inversion (backside attack)"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-6-6',
        title: '6.6 Elimination Reaction & Saytzeff’s Rule',
        sections: [
          {
            id: 'chem-sec-6-6',
            title: 'β-Elimination (Dehydrohalogenation)',
            explanation: "When a haloalkane with β-hydrogen is heated with alcoholic potassium hydroxide (alc. KOH), a molecule of hydrogen halide is eliminated, forming an alkene. According to Saytzeff's Rule, the preferred product is that alkene which has the greater number of alkyl groups attached to the doubly bonded carbon atoms (most substituted, stable alkene).",
            questionFraming: "Rule Application — 'State Saytzeff\'s rule with a suitable reaction example (e.g. 2-bromobutane with alc. KOH).'",
            textbookRef: "2-bromobutane + alc. KOH ⟶ But-2-ene (81%, major Saytzeff product) + But-1-ene (19%, minor Hofmann product).",
            keyFormulas: [
              "CH₃-CH₂-CH(Br)-CH₃ + alc. KOH ⟶ CH₃-CH=CH-CH₃ (81%) + CH₃-CH₂-CH=CH₂ (19%)"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-6-7',
        title: '6.7 Reaction with Metals (Wurtz, Grignard & Fittig)',
        sections: [
          {
            id: 'chem-sec-6-7',
            title: 'Grignard Reagents, Wurtz & Fittig Reactions',
            explanation: "Alkyl halides react with magnesium in dry ether to form Grignard reagents (R-Mg-X, organometallic compound). Wurtz reaction: two alkyl halides couple with sodium in dry ether to give symmetric higher alkanes (2R-X + 2Na ⟶ R-R + 2NaX). Wurtz-Fittig: alkyl halide + aryl halide + 2Na ⟶ alkylarene. Fittig: 2 aryl halides + 2Na ⟶ diphenyl.",
            questionFraming: "Reasoning — 'Why should Grignard reagents be prepared under strictly anhydrous conditions?' ⟶ They react violently with water/moisture to form alkanes: RMgX + H₂O ⟶ R-H + Mg(OH)X.",
            textbookRef: "R-X + Mg (dry ether) ⟶ R-Mg-X. Wurtz: 2CH₃Cl + 2Na ⟶ CH₃-CH₃ + 2NaCl. Fittig: 2C₆H₅Cl + 2Na ⟶ C₆H₅-C₆H₅ (biphenyl).",
            keyFormulas: [
              "R-X + Mg (dry ether) ⟶ R-Mg-X",
              "R-Mg-X + H₂O ⟶ R-H + Mg(OH)X",
              "2R-X + 2Na (dry ether) ⟶ R-R + 2NaX"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-6-8',
        title: '6.8 Polyhalogen Compounds & Environmental Effects',
        sections: [
          {
            id: 'chem-sec-6-8',
            title: 'DDT, Freons, Chloroform & Iodoform',
            explanation: "• Dichloromethane (CH₂Cl₂): solvent in paint removers.\n• Chloroform (CHCl₃): stored in dark closed bottles because light and air oxidize it to deadly phosgene gas (COCl₂).\n• Iodoform (CHI₃): yellow antiseptic with characteristic odor due to liberation of free iodine.\n• Freons (CF₂Cl₂, CFC-12): stable refrigerants that deplete the ozone layer via chlorine radical chain reaction.\n• DDT: non-biodegradable persistent insecticide banned globally due to biomagnification in food chains.",
            questionFraming: "Reasoning — 'Why is chloroform stored in dark, amber-coloured bottles filled to the brim?' ⟶ To prevent oxidation by air and sunlight into toxic carbonyl chloride (phosgene): 2CHCl₃ + O₂ ⟶ 2COCl₂ + 2HCl.",
            textbookRef: "2CHCl₃ + O₂ (light) ⟶ 2COCl₂ (phosgene) + 2HCl. 1% ethanol is added to convert phosgene to non-toxic diethyl carbonate.",
            keyFormulas: ["2CHCl₃ + O₂ ⟶ 2COCl₂ (phosgene) + 2HCl", "CFC-12: CF₂Cl₂"]
          }
        ]
      }
    ]
  },
  {
    id: 'chem-ch-7',
    number: 7,
    title: 'Alcohols, Phenols and Ethers',
    tag: 'Organic Chemistry',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'chem-sub-7-1',
        title: '7.1 Classification & Nomenclature',
        sections: [
          {
            id: 'chem-sec-7-1',
            title: 'Monohydric, Dihydric & 1°/2°/3° Alcohols',
            explanation: "Alcohols are classified by the number of -OH groups (monohydric, dihydric, trihydric) and the hybridization and degree of the carbon atom: Primary (1°), Secondary (2°), and Tertiary (3°). Phenols have -OH directly attached to an aromatic benzene ring. Ethers are classified as symmetrical (R-O-R) or unsymmetrical (R-O-R').",
            questionFraming: "IUPAC Nomenclature — 'Write IUPAC names for given structures of polyhydric alcohols and ethers.'",
            textbookRef: "1°: R-CH₂OH, 2°: R₂CH-OH, 3°: R₃C-OH. IUPAC names replace '-e' of alkane with '-ol'. Ethers named as 'alkoxyalkanes'.",
            keyFormulas: ["1°: R-CH₂OH", "2°: R₂CHOH", "3°: R₃COH", "Ether: R-O-R'"]
          }
        ]
      },
      {
        id: 'chem-sub-7-2',
        title: '7.2 Methods of Preparation of Alcohols and Phenols',
        sections: [
          {
            id: 'chem-sec-7-2',
            title: 'Hydration, Hydroboration & Cumene Process',
            explanation: "• From alkenes:\n  1. Acid-catalysed hydration: Markovnikov addition.\n  2. Hydroboration-oxidation (B₂H₆ / THF followed by H₂O₂/OH⁻): Anti-Markovnikov addition of water.\n• From carbonyl compounds: Reduction with NaBH₄/LiAlH₄.\n• Preparation of Phenol from Cumene (industrial process): Cumene (isopropylbenzene) is oxidised by air to cumene hydroperoxide, which on acid hydrolysis yields phenol and acetone (valuable by-product).",
            questionFraming: "Synthesis — 'How is phenol prepared industrially from cumene? Write the equations.'\n'Differentiate between acid-catalysed hydration and hydroboration-oxidation of propene.'",
            textbookRef: "Cumene + O₂ ⟶ Cumene hydroperoxide ⟶ (H⁺/H₂O) ⟶ Phenol + Acetone. Hydroboration gives propan-1-ol from propene (anti-Markovnikov); acid hydration gives propan-2-ol (Markovnikov).",
            keyFormulas: [
              "Cumene + O₂ ⟶ Cumene hydroperoxide ⟶ Phenol + (CH₃)₂C=O",
              "Hydroboration: Anti-Markovnikov alcohol"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-7-3',
        title: '7.3 Physical Properties & Intermolecular H-Bonding',
        sections: [
          {
            id: 'chem-sec-7-3',
            title: 'Hydrogen Bonding, Boiling Points & Solubility',
            explanation: "Alcohols and phenols have much higher boiling points than alkanes, ethers, and haloalkanes of comparable molecular mass due to intermolecular hydrogen bonding. Boiling points decrease with branching due to decreased surface area. Lower alcohols are completely miscible with water because their -OH groups form H-bonds with water molecules; solubility decreases as the hydrophobic alkyl chain grows.",
            questionFraming: "Reasoning — 'Why do alcohols have higher boiling points than isomeric ethers?' ⟶ Intermolecular hydrogen bonding exists in alcohols but is absent in ethers.",
            textbookRef: "Boiling point: Alcohols > Ethers ≈ Alkanes of similar molar mass. Ethanol (bp 78°C) vs Methoxymethane (bp −24°C).",
            keyFormulas: ["Intermolecular H-bonding: R-O-H ··· O(H)-R"]
          }
        ]
      },
      {
        id: 'chem-sub-7-4',
        title: '7.4 Chemical Reactions of Alcohols (Acidity & Oxidation)',
        sections: [
          {
            id: 'chem-sec-7-4',
            title: 'Acidity, Esterification & Oxidation States',
            explanation: "• Acidity of Alcohols: Act as Bronsted acids, reacting with active metals (Na, K, Al) to liberate H₂ gas: 2R-OH + 2Na ⟶ 2R-ONa + H₂↑. Acidity order: 1° > 2° > 3° (due to +I inductive effect of alkyl groups destabilizing alkoxide ion).\n• Esterification: Alcohol + Carboxylic acid (in conc. H₂SO₄) ⇌ Ester + H₂O.\n• Oxidation:\n  - 1° alcohol ⟶ Aldehyde (PCC / Collins reagent) ⟶ Carboxylic acid (alk. KMnO₄ / Jones)\n  - 2° alcohol ⟶ Ketone (CrO₃)\n  - 3° alcohol ⟶ Resists oxidation; dehydrates with Cu/573K to give alkene.",
            questionFraming: "Reagents — 'Give the reagent used to convert ethanol to ethanal (PCC).' 'What happens when vapours of tertiary butyl alcohol are passed over heated Cu at 573 K?' ⟶ Dehydration to 2-methylpropene.",
            textbookRef: "PCC (pyridinium chlorochromate) oxidises 1° alcohols to aldehydes selectively without over-oxidation to acids. Cu at 573 K: 1° gives aldehyde, 2° gives ketone, 3° gives alkene.",
            keyFormulas: [
              "1° Alcohol + PCC ⟶ Aldehyde",
              "2° Alcohol + CrO₃ ⟶ Ketone",
              "3° Alcohol + Cu/573 K ⟶ Alkene"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-7-5',
        title: '7.5 Chemical Reactions of Phenols (Kolbe & Reimer-Tiemann)',
        sections: [
          {
            id: 'chem-sec-7-5',
            title: 'Phenol Acidity, Kolbe & Reimer-Tiemann Reactions',
            explanation: "• Acidity of Phenols: Phenols are significantly more acidic than alcohols (pK_a ≈ 10 vs 16-18) because the phenoxide ion is resonance-stabilized (negative charge delocalized over the benzene ring). Electron-withdrawing groups (-NO₂) increase acidity (especially at ortho/para positions); electron-donating groups (-CH₃, -OCH₃) decrease acidity.\n• Kolbe’s Reaction: Sodium phenoxide heated with CO₂ at 400 K and 4-7 atm pressure, followed by acidification, gives salicylic acid (2-hydroxybenzoic acid).\n• Reimer-Tiemann Reaction: Phenol treated with chloroform (CHCl₃) in presence of aq. NaOH, followed by acidification, introduces a -CHO group ortho to -OH, yielding salicylaldehyde (2-hydroxybenzaldehyde). The intermediate involves dichlorocarbene (:CCl₂).",
            questionFraming: "Named Reactions / Conversions — 'Write the chemical equation and mechanism for Reimer-Tiemann reaction and Kolbe\'s reaction.'\n'Convert phenol to salicylic acid and aspirin.'",
            textbookRef: "Salicylic acid is acetylated with acetic anhydride in presence of acid to produce Aspirin (acetylsalicylic acid):\nSalicylic acid + (CH₃CO)₂O ⟶ Aspirin + CH₃COOH.",
            keyFormulas: [
              "Kolbe: Phenol + NaOH + CO₂ ⟶ Salicylic acid",
              "Reimer-Tiemann: Phenol + CHCl₃ + NaOH ⟶ Salicylaldehyde",
              "Salicylic acid + Ac₂O ⟶ Aspirin (Acetylsalicylic acid)"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-7-6',
        title: '7.6 Ethers: Preparation by Williamson Synthesis & Cleavage',
        sections: [
          {
            id: 'chem-sec-7-6',
            title: 'Williamson Ether Synthesis & Cleavage by HI',
            explanation: "• Williamson Synthesis: Reaction of alkyl halide with sodium alkoxide (R-ONa + R'-X ⟶ R-O-R' + NaX). Involves SN2 attack. Crucial rule: The alkyl halide R'X must be primary (1°). If a tertiary (3°) alkyl halide is used, elimination predominates to form an alkene instead of ether!\n• Cleavage of Ethers by HI:\n  - With dialkyl ethers: smaller alkyl group forms alkyl iodide via SN2 (R-O-R' + HI ⟶ R-I + R'-OH).\n  - If one group is tertiary (3°), it forms 3° alkyl iodide via SN1 (stable carbocation)!\n  - With anisole (C₆H₅-O-CH₃): reacts with HI to yield phenol (C₆H₅OH) and methyl iodide (CH₃I). Phenol does not react further because of partial double bond character of C_Ar-O bond.",
            questionFraming: "Predict Products — 'Predict the products when tert-butyl methyl ether is heated with HI.' ⟶ tert-butyl iodide + methanol (due to stable 3° carbocation!).\n'How would you prepare tert-butyl ethyl ether using Williamson synthesis?' ⟶ Sodium tert-butoxide + ethyl bromide (never tert-butyl bromide + sodium ethoxide!).",
            textbookRef: "(CH₃)₃C-O⁻ Na⁺ + CH₃CH₂Br ⟶ (CH₃)₃C-O-CH₂CH₃ + NaBr. If (CH₃)₃C-Br + CH₃CH₂O⁻ Na⁺ is used, 2-methylpropene is formed exclusively.",
            keyFormulas: [
              "Williamson: R-O⁻ + R'-X (1°) ⟶ R-O-R'",
              "(CH₃)₃C-O-CH₃ + HI ⟶ (CH₃)₃C-I + CH₃OH",
              "C₆H₅-O-CH₃ + HI ⟶ C₆H₅OH + CH₃I"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-7-7',
        title: '7.7 Distinguishing Tests (Lucas Test & FeCl₃ Test)',
        sections: [
          {
            id: 'chem-sec-7-7',
            title: 'Lucas Reagent & Phenol Ferric Chloride Test',
            explanation: "• Lucas Test distinguishes 1°, 2°, and 3° alcohols using Lucas reagent (conc. HCl + anhydrous ZnCl₂):\n  - 3° alcohol: Turbidity appears immediately (fast SN1 reaction via 3° carbocation).\n  - 2° alcohol: Turbidity appears within 5 minutes.\n  - 1° alcohol: Solution remains clear at room temperature; turbidity appears only upon heating.\n• Neutral FeCl₃ Test: Phenols give a characteristic violet/purple colouration with neutral ferric chloride solution due to formation of a coordination complex [Fe(OC₆H₅)₆]³⁻, whereas aliphatic alcohols do not give this test.",
            questionFraming: "Distinction Tests — 'Give a simple chemical test to distinguish between (a) propan-1-ol and propan-2-ol (Lucas test / Iodoform test), (b) phenol and ethanol (neutral FeCl₃ test / NaHCO₃ test).'",
            textbookRef: "Lucas test is based on the difference in reactivity of 1°, 2°, and 3° alcohols with halogen acids via carbocation stability (3° > 2° > 1°). Phenol + neutral FeCl₃ ⟶ Violet coloured complex.",
            keyFormulas: [
              "Lucas Reagent = conc. HCl + anh. ZnCl₂",
              "3°: Immediate turbidity | 2°: 5 mins | 1°: Only on heating",
              "Phenol + neutral FeCl₃ ⟶ Violet colouration"
            ]
          }
        ]
      }
    ]
  }
];
