// NCERT Class 12 Structured Notes Database
// Enhanced with Oswaal-grade study aids: Mnemonics, Commonly Made Errors, CBSE Assertion-Reason, and Exam Trends
// Covers all active subtopics across Chapters 1, 2, 4, 6, and 7

import { REACTION_DIAGRAMS } from './reactionDiagramsData.js';

export const STRUCTURED_NOTES_DATA = {
  "chem-sub-1-1": {
    "definitions": [
      {
        "term": "Molarity (M)",
        "definition": "The number of moles of solute dissolved in one litre (1 dm³) of the solution: M = (moles of solute) / (volume of solution in litres). Unit: mol·L⁻¹ or M."
      },
      {
        "term": "Molality (m)",
        "definition": "The number of moles of solute dissolved per kilogram (1000 g) of the pure solvent: m = (moles of solute) / (mass of solvent in kg). Unit: mol·kg⁻¹ or m."
      },
      {
        "term": "Mole Fraction (x)",
        "definition": "The ratio of the number of moles of a particular component to the total number of moles of all components present in the solution: x_A = n_A / (n_A + n_B), where x_A + x_B = 1."
      },
      {
        "term": "Mass Percentage (w/w %)",
        "definition": "The mass of the solute present in 100 g of the solution: Mass % = (mass of solute / total mass of solution) × 100."
      },
      {
        "term": "Parts Per Million (ppm)",
        "definition": "The ratio of parts of a solute to one million parts of the solution: ppm = (mass of solute / total mass of solution) × 10⁶, used for trace pollutants."
      }
    ],
    "keyPoints": [
      "• <strong>Temperature Independence:</strong> Molality (m) and Mole Fraction (x) do NOT change with temperature because mass is temperature-independent.",
      "• <strong>Temperature Dependence:</strong> Molarity (M) and Normality (N) change with temperature because the liquid volume expands or contracts with temperature changes.",
      "• <strong>Dilution Formula:</strong> For diluting a concentrated solution from initial state to final state: M₁V₁ = M₂V₂.",
      "• <strong>Mixing Solutions:</strong> For mixing two non-reacting solutions of the same solute: M_mix = (M₁V₁ + M₂V₂) / (V₁ + V₂)."
    ],
    "extraPoints": [
      "• <strong>Colligative Property Rationale:</strong> Colligative property measurements (like boiling point elevation and freezing point depression) use molality instead of molarity specifically to eliminate temperature errors.",
      "• <strong>Molal vs Molar Comparison:</strong> For dilute aqueous solutions at 4 °C (where water density is 1.0 g/mL), 1 Molar is slightly more concentrated than 1 Molal because 1 L of solution contains less than 1 kg of solvent."
    ],
    "reactions": [],
    "oswaalMnemonic": {
      "title": "Molarity Moves with Temperature, Molality Matters for Mass",
      "phrase": "Molarity = Molecules per Litre (Expands with Heat) | Molality = Moles per Kilo (Constant like Mass)",
      "explanation": "Volume expands with rising temperature, lowering molarity. Mass is temperature-independent, so molality is constant."
    },
    "commonlyMadeErrors": [
      {
        "error": "Using total volume of solution instead of mass of pure solvent in molality formula.",
        "tip": "In molality (m = n₂ / W₁), W₁ is strictly mass of SOLVENT in kg, never solution mass!",
        "penalty": "Loss of 1 to 2 marks on concentration numericals."
      }
    ],
    "assertionReason": {
      "assertion": "Molality of a solution does not change with temperature, whereas molarity changes.",
      "reason": "Volume of solution depends on temperature whereas mass of solvent does not.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Thermal expansion increases volume, decreasing M = n/V. Mass is invariant, so molality stays constant."
    },
    "examTrend": {
      "pattern": "1-Mark MCQ / 2-Mark Numerical [CBSE 2023, 2020, 2018]",
      "pastYears": "CBSE 2023, 2020, 2018",
      "highYieldPrompt": "Calculate the molality and mole fraction of a 20% (w/w) aqueous KI solution."
    }
  },
  "chem-sub-1-2": {
    "definitions": [
      {
        "term": "Henry’s Law",
        "definition": "At a constant temperature, the solubility of a gas in a liquid is directly proportional to the partial pressure of the gas present above the surface of the liquid or solution: p = K_H · x."
      },
      {
        "term": "Henry’s Law Constant (K_H)",
        "definition": "The proportionality factor in Henry’s law characteristic of the gas and solvent at a given temperature. Higher K_H corresponds to lower solubility of the gas at a given pressure."
      }
    ],
    "keyPoints": [
      "• <strong>Mathematical Expression:</strong> p = K_H · x, where p is partial pressure of gas, x is mole fraction of gas in liquid, and K_H is Henry’s law constant.",
      "• <strong>Inverse Relation to Solubility:</strong> At identical pressure, a gas with a HIGHER K_H value has a LOWER solubility in liquid (Solubility ∝ 1 / K_H).",
      "• <strong>Temperature Effect on K_H:</strong> K_H increases as temperature increases; consequently, the solubility of gases in liquids decreases with rising temperature.",
      "• <strong>Exothermic Dissolution:</strong> Dissolution of gas in liquid is an exothermic equilibrium process (Gas + Solvent ⇌ Solution + Heat); by Le Chatelier’s principle, increasing temperature shifts equilibrium backwards."
    ],
    "extraPoints": [
      "• <strong>Aquatic Life Survival:</strong> Aquatic species (like fish) are more comfortable in cold water than warm water because cold water holds a significantly higher concentration of dissolved oxygen due to lower K_H.",
      "• <strong>Scuba Diving & The Bends:</strong> Deep-sea divers breathe air under high pressure. On rapid ascent, dissolved N₂ rapidly bubbles out of the blood capillaries, causing painful and potentially fatal \"bends\". To avoid this, diving tanks are diluted with Helium (11.7% He, 56.2% N₂, 32.1% O₂).",
      "• <strong>Soda Carbonation:</strong> Soft drink bottles are sealed under high pressure to increase CO₂ solubility; when opened, pressure drops and CO₂ fizzes out rapidly.",
      "• <strong>High Altitude Anoxia:</strong> At high altitudes, low atmospheric partial pressure of oxygen results in low oxygen concentrations in climbers blood and tissues, causing cognitive fatigue and hypoxia (anoxia)."
    ],
    "reactions": [],
    "oswaalMnemonic": {
      "title": "Cold Waters Oxygenate: High K_H means Low Gas",
      "phrase": "K_H is the Gatekeeper: High K_H = Gate Closed (Low Solubility) | Cold Water = Low K_H = More Dissolved Oxygen!",
      "explanation": "Gas solubility is inversely proportional to Henry’s constant K_H. As temperature falls, K_H drops and oxygen dissolves more."
    },
    "commonlyMadeErrors": [
      {
        "error": "Writing that fish prefer cold water because they breathe faster or because cold water has less pressure.",
        "tip": "Must state: O₂ solubility is higher in cold water because K_H increases with temperature (Solubility ∝ 1/K_H).",
        "penalty": "0 marks for give-reason if K_H or inverse temperature dependence is omitted."
      }
    ],
    "assertionReason": {
      "assertion": "Aquatic animals are more comfortable in cold water than in warm water.",
      "reason": "Solubility of oxygen in water increases with decrease in temperature due to lower K_H.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Gas dissolution in liquid is exothermic. Lower temperature shifts equilibrium forward, raising dissolved oxygen."
    },
    "examTrend": {
      "pattern": "2-Mark Give-Reason [CBSE 2023, 2020, 2019, 2016, 2014]",
      "pastYears": "CBSE 2023, 2020, 2019, 2016",
      "highYieldPrompt": "Why are soft drinks sealed under high pressure? What is the role of Helium in scuba diving tanks?"
    }
  },
  "chem-sub-1-3": {
    "definitions": [
      {
        "term": "Raoult’s Law (for Volatile Liquids)",
        "definition": "For a solution of volatile liquids, the partial vapour pressure of each volatile component is directly proportional to its mole fraction in the solution: p_A = p°_A · x_A and p_B = p°_B · x_B."
      },
      {
        "term": "Dalton’s Law in Vapour Phase",
        "definition": "The mole fraction of a component in the vapour phase (y_A) equals its partial vapour pressure divided by total vapour pressure: y_A = p_A / p_total."
      }
    ],
    "keyPoints": [
      "• <strong>Total Vapour Pressure Equation:</strong> p_total = p_A + p_B = p°_A · x_A + p°_B · x_B = p°_A + (p°_B − p°_A) · x_B.",
      "• <strong>Linear Composition Dependence:</strong> Total vapour pressure varies linearly with the mole fraction of either component in the liquid phase.",
      "• <strong>Vapour Phase Enrichment:</strong> The vapour phase is always richer in the more volatile component (the component having the higher pure vapour pressure p°).",
      "• <strong>Raoult’s Law as a Special Case of Henry’s Law:</strong> For a volatile solute in liquid, Henry’s law states p = K_H · x. If K_H equals the vapour pressure of pure component p°, Henry’s law becomes Raoult’s law."
    ],
    "extraPoints": [
      "• <strong>Vapour vs Liquid Composition Trap:</strong> Students often equate liquid mole fraction (x_A) with vapour mole fraction (y_A). Always calculate p_A first, then divide by p_total to find y_A."
    ],
    "reactions": [],
    "oswaalMnemonic": {
      "title": "Dalton in the Sky, Raoult on the Surface",
      "phrase": "Raoult rules the Liquid (p_A = p°_A · x_A) | Dalton rules the Vapour (y_A = p_A / p_total)",
      "explanation": "Use liquid mole fraction x_A to find partial pressures, then Dalton’s law to calculate vapour mole fraction y_A."
    },
    "commonlyMadeErrors": [
      {
        "error": "Equating liquid mole fraction (x_A) directly with vapour phase mole fraction (y_A).",
        "tip": "Vapour phase is always enriched in the more volatile component! Calculate y_A = p_A / p_total.",
        "penalty": "Results in 0/3 marks on Dalton-Raoult numerical questions."
      }
    ],
    "assertionReason": {
      "assertion": "In a solution of two volatile liquids A and B, the vapour phase is always richer in the more volatile component.",
      "reason": "The more volatile component has a higher pure vapour pressure p° than the less volatile component.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Since p°_A > p°_B, component A evaporates more rapidly, ensuring y_A > x_A."
    },
    "examTrend": {
      "pattern": "3-Mark Numerical on Vapour Phase Composition [CBSE 2022, 2019, 2017]",
      "pastYears": "CBSE 2022, 2019, 2017",
      "highYieldPrompt": "Calculate total vapour pressure and vapour phase mole fractions for an equimolar solution of chloroform and dichloromethane."
    }
  },
  "chem-sub-1-4": {
    "definitions": [
      {
        "term": "Ideal Solution",
        "definition": "A binary solution which obeys Raoult’s law over the entire range of concentration and temperature, having zero enthalpy of mixing (ΔH_mix = 0) and zero volume change on mixing (ΔV_mix = 0)."
      }
    ],
    "keyPoints": [
      "• <strong>Four Essential Criteria for Ideal Behavior:</strong> (1) Obeys Raoult’s law at all concentrations and temperatures; (2) Enthalpy of mixing is zero: ΔH_mix = 0; (3) Volume change on mixing is zero: ΔV_mix = 0; (4) Intermolecular attractive forces between A—B are identical in strength to A—A and B—B interactions.",
      "• <strong>Thermodynamic Spontaneity:</strong> Although ΔH_mix = 0, ideal solutions mix spontaneously because entropy increases: ΔS_mix > 0, ensuring Gibbs free energy ΔG_mix = ΔH − TΔS < 0.",
      "• <strong>Classic Ideal Pairs:</strong> (1) n-Hexane + n-Heptane; (2) Benzene + Toluene; (3) Bromoethane + Chloroethane; (4) Chlorobenzene + Bromobenzene."
    ],
    "extraPoints": [
      "• <strong>Structural Similarity:</strong> Ideal solutions only form between components that have nearly identical molecular shapes, polarities, and intermolecular forces."
    ],
    "reactions": [],
    "oswaalMnemonic": {
      "title": "Ideal Solution: No Heat, No Swell, Pure Harmony",
      "phrase": "ΔH_mix = 0, ΔV_mix = 0, F_AB = F_AA = F_BB (Twins of Chemistry)",
      "explanation": "Ideal solutions only form when molecular shapes and polarities are nearly identical, like Benzene + Toluene."
    },
    "commonlyMadeErrors": [
      {
        "error": "Writing that ΔS_mixing = 0 for ideal solutions.",
        "tip": "ΔS_mixing is ALWAYS POSITIVE (entropy increases when two liquids mix). Only ΔH_mix and ΔV_mix are zero!",
        "penalty": "1 mark lost on thermodynamic criteria questions."
      }
    ],
    "assertionReason": {
      "assertion": "A mixture of benzene and toluene forms an almost ideal solution.",
      "reason": "Benzene and toluene have similar molecular structures and identical magnitudes of intermolecular forces.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "A-B forces equal A-A and B-B forces, so no heat is evolved/absorbed and no volume change occurs."
    },
    "examTrend": {
      "pattern": "2-Mark Definition & Examples [CBSE 2023, 2020, 2018]",
      "pastYears": "CBSE 2023, 2020, 2018",
      "highYieldPrompt": "State any two conditions for an ideal solution. Give two examples."
    }
  },
  "chem-sub-1-5": {
    "definitions": [
      {
        "term": "Positive Deviation from Raoult’s Law",
        "definition": "A non-ideal solution where the observed total vapour pressure is higher than that predicted by Raoult’s law, occurring when solute-solvent (A—B) attractive forces are weaker than pure A—A and B—B interactions."
      },
      {
        "term": "Negative Deviation from Raoult’s Law",
        "definition": "A non-ideal solution where the observed total vapour pressure is lower than that predicted by Raoult’s law, occurring when solute-solvent (A—B) attractive forces are stronger than pure A—A and B—B interactions."
      }
    ],
    "keyPoints": [
      "• <strong>Thermodynamic Signatures of Positive Deviation:</strong> A—B < A—A, B—B; ΔH_mix > 0 (Endothermic dissolution); ΔV_mix > 0 (Volume expands on mixing); p_total > p_calc.",
      "• <strong>Thermodynamic Signatures of Negative Deviation:</strong> A—B > A—A, B—B; ΔH_mix < 0 (Exothermic dissolution); ΔV_mix < 0 (Volume contracts on mixing); p_total < p_calc.",
      "• <strong>Examples of Positive Deviation:</strong> Ethanol + Acetone (acetone disrupts strong ethanol H-bonds); Carbon disulfide (CS₂) + Acetone; Ethanol + Water.",
      "• <strong>Examples of Negative Deviation:</strong> Chloroform + Acetone (strong intermolecular H-bonding forms between chloroform C—H and acetone C=O); Phenol + Aniline; Nitric acid + Water."
    ],
    "extraPoints": [
      "• <strong>H-Bonding Trap in Chloroform + Acetone:</strong> In pure chloroform and pure acetone, intermolecular H-bonding is absent. Upon mixing, a strong C—H···O hydrogen bond forms between the acidic hydrogen of CHCl₃ and carbonyl oxygen of acetone, causing negative deviation."
    ],
    "reactions": [
      {
        "name": "Raoult’s Law Deviations & Azeotrope Thermodynamics",
        "isNamedReaction": false,
        "equation": "Positive: p_total > (p°_A·x_A + p°_B·x_B) [ΔH>0, ΔV>0] &nbsp;|&nbsp; Negative: p_total < (p°_A·x_A + p°_B·x_B) [ΔH<0, ΔV<0]",
        "howItWorks": "Weak solute-solvent interactions allow molecules to escape into vapour phase more easily (positive deviation); strong solute-solvent forces anchor molecules in the liquid (negative deviation).",
        "diagramId": "rxn-raoult-deviations"
      }
    ],
    "oswaalMnemonic": {
      "title": "Positive Parting vs Negative Nesting",
      "phrase": "Positive = Break Bonds (A-B weaker, ΔH>0, ΔV>0, VP UP!) | Negative = Make Bonds (A-B stronger H-bonds, ΔH<0, ΔV<0, VP DOWN!)",
      "explanation": "Ethanol + Acetone breaks ethanol H-bonds (positive); Acetone + Chloroform creates new H-bonds (negative)."
    },
    "commonlyMadeErrors": [
      {
        "error": "Classifying Acetone + Chloroform as positive deviation.",
        "tip": "Acetone + Chloroform is the classic NEGATIVE deviation because a strong new C—H···O=C hydrogen bond forms between them.",
        "penalty": "Direct deduction of 1 to 2 marks."
      }
    ],
    "assertionReason": {
      "assertion": "Mixing acetone and chloroform is accompanied by evolution of heat (ΔH_mix < 0).",
      "reason": "New hydrogen bonds formed between acetone and chloroform are stronger than interactions in pure components.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Formation of stronger new intermolecular forces releases enthalpy, lowering total vapour pressure below ideal."
    },
    "examTrend": {
      "pattern": "3-Mark Distinction Table & Graphs [CBSE 2023, 2022, 2019, 2017]",
      "pastYears": "CBSE 2023, 2022, 2019",
      "highYieldPrompt": "Distinguish between solutions showing positive and negative deviations from Raoult’s law with graphs and examples."
    }
  },
  "chem-sub-1-6": {
    "definitions": [
      {
        "term": "Azeotrope (Constant Boiling Mixture)",
        "definition": "A binary liquid mixture having the same composition in both liquid and vapour phases and boiling at a constant temperature without any change in composition."
      },
      {
        "term": "Minimum-Boiling Azeotrope",
        "definition": "An azeotropic mixture formed by solutions exhibiting large positive deviation from Raoult’s law, boiling at a temperature lower than either of its pure constituents."
      },
      {
        "term": "Maximum-Boiling Azeotrope",
        "definition": "An azeotropic mixture formed by solutions exhibiting large negative deviation from Raoult’s law, boiling at a temperature higher than either of its pure constituents."
      }
    ],
    "keyPoints": [
      "• <strong>Distillation Inseparability:</strong> Because the liquid and vapour compositions are identical at the azeotropic point, simple or fractional distillation cannot separate the components beyond this composition.",
      "• <strong>Minimum-Boiling Example:</strong> 95.6% Ethanol + 4.4% Water by mass. Boils at 351.15 K (lower than pure ethanol b.p. 351.3 K and pure water 373 K).",
      "• <strong>Maximum-Boiling Example:</strong> 68% Nitric Acid (HNO₃) + 32% Water by mass. Boils at 393.5 K (higher than pure HNO₃ b.p. 359 K and pure water 373 K).",
      "• <strong>Obtaining 100% Pure Ethanol:</strong> Rectified spirit (95.6% ethanol) cannot be concentrated further by fractional distillation; it requires azeotropic distillation with benzene or chemical drying with CaO."
    ],
    "extraPoints": [
      "• <strong>Board Exam Distinction:</strong> Large positive deviation ⟶ Maximum vapour pressure ⟶ Minimum boiling point azeotrope. Large negative deviation ⟶ Minimum vapour pressure ⟶ Maximum boiling point azeotrope."
    ],
    "reactions": [],
    "oswaalMnemonic": {
      "title": "Opposites Boil: Positive Deviation = Minimum Boiling",
      "phrase": "High Vapour Pressure = Low Boiling Point (Minimum Azeotrope: 95.6% Ethanol) | Low Vapour Pressure = High Boiling Point (Maximum Azeotrope: 68% HNO₃)",
      "explanation": "Vapour pressure and boiling point are inversely related. High positive deviation lowers boiling point."
    },
    "commonlyMadeErrors": [
      {
        "error": "Claiming that 100% pure ethanol can be prepared by fractional distillation of rectified spirit.",
        "tip": "At 95.6% ethanol, liquid and vapour have identical compositions (azeotrope); fractional distillation cannot separate them!",
        "penalty": "1 mark lost on separation question."
      }
    ],
    "assertionReason": {
      "assertion": "An azeotropic mixture cannot be separated into pure components by fractional distillation.",
      "reason": "At azeotropic composition, the solution boils at constant temperature with identical liquid and vapour compositions.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Identical composition in liquid and vapour phases makes distillation separation impossible."
    },
    "examTrend": {
      "pattern": "2-Mark Conceptual / Give-Reason [CBSE 2023, 2020, 2018]",
      "pastYears": "CBSE 2023, 2020, 2018",
      "highYieldPrompt": "What are azeotropes? What type of azeotrope is formed by a solution showing large negative deviation?"
    }
  },
  "chem-sub-1-7": {
    "definitions": [
      {
        "term": "Colligative Properties",
        "definition": "Properties of dilute solutions that depend solely on the number of solute particles (ions or molecules) present in a given amount of solvent, regardless of their nature or chemical identity."
      },
      {
        "term": "Relative Lowering of Vapour Pressure (RLVP)",
        "definition": "The ratio of the lowering of vapour pressure of a solvent (p°₁ − p₁) by the addition of a non-volatile solute to the vapour pressure of the pure solvent (p°₁): RLVP = (p°₁ − p₁) / p°₁ = x₂."
      }
    ],
    "keyPoints": [
      "• <strong>Surface Occupation Principle:</strong> When a non-volatile solute dissolves, solute particles occupy a portion of the liquid surface, decreasing the surface area available for solvent vaporization.",
      "• <strong>Mathematical Relation:</strong> (p°₁ − p₁) / p°₁ = x₂ = n₂ / (n₁ + n₂).",
      "• <strong>Dilute Solution Approximation:</strong> For dilute solutions where n₂ ≪ n₁: (p°₁ − p₁) / p°₁ ≈ n₂ / n₁ = (w₂ / M₂) / (w₁ / M₁) = (w₂ · M₁) / (M₂ · w₁).",
      "• <strong>Molar Mass Calculation:</strong> M₂ = (w₂ · M₁ · p°₁) / [w₁ · (p°₁ − p₁)]."
    ],
    "extraPoints": [
      "• <strong>Ostwald-Walker Dynamic Method:</strong> Classical experimental method used to measure relative lowering of vapour pressure by bubbling dry air successively through solution and solvent bulbs."
    ],
    "reactions": [],
    "oswaalMnemonic": {
      "title": "Surface Stealer: Non-Volatile Solute Blocks Evaporation",
      "phrase": "Solute molecules sit on the surface, blocking escape: (p°₁ − p₁) / p°₁ = x₂",
      "explanation": "Relative lowering of vapour pressure is solely governed by the fraction of surface sites blocked by solute molecules."
    },
    "commonlyMadeErrors": [
      {
        "error": "Confusing \"Lowering of vapour pressure\" (Δp) with \"Relative lowering of vapour pressure\" (Δp/p°).",
        "tip": "Lowering of vapour pressure (Δp) is NOT a colligative property; RELATIVE lowering (Δp/p°) is the true colligative property!",
        "penalty": "0 marks if asked to pick colligative property and student selects Δp."
      }
    ],
    "assertionReason": {
      "assertion": "Relative lowering of vapour pressure of a solution containing non-volatile solute equals mole fraction of solute.",
      "reason": "Solute particles occupy liquid surface area, reducing the escaping tendency of solvent molecules into vapour.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Surface blockage directly accounts for the proportional drop in solvent vapour pressure."
    },
    "examTrend": {
      "pattern": "3-Mark Derivation & Numerical [CBSE 2023, 2021, 2019, 2015]",
      "pastYears": "CBSE 2023, 2021, 2019",
      "highYieldPrompt": "State Raoult’s law for non-volatile solute and show that relative lowering of vapour pressure is a colligative property."
    }
  },
  "chem-sub-1-8": {
    "definitions": [
      {
        "term": "Boiling Point",
        "definition": "The temperature at which the vapour pressure of a liquid becomes equal to the external atmospheric pressure."
      },
      {
        "term": "Elevation of Boiling Point (ΔT_b)",
        "definition": "The difference between the boiling point of the solution (T_b) containing a non-volatile solute and the boiling point of the pure solvent (T°_b): ΔT_b = T_b − T°_b = K_b · m."
      },
      {
        "term": "Molal Elevation Constant (Ebullioscopic Constant, K_b)",
        "definition": "The boiling point elevation produced when 1 mole of a non-volatile solute is dissolved in 1 kilogram (1000 g) of the solvent. Unit: K·kg·mol⁻¹."
      }
    ],
    "keyPoints": [
      "• <strong>Mechanism of Elevation:</strong> Adding a non-volatile solute lowers vapour pressure; hence, the solution must be heated to a higher temperature so that its vapour pressure reaches 1 atm.",
      "• <strong>Proportionality:</strong> ΔT_b ∝ m ⟹ ΔT_b = K_b · m, where m is molality.",
      "• <strong>Formula for Molar Mass:</strong> M₂ = (1000 · K_b · w₂) / (ΔT_b · w₁), where w₂ is solute mass (g) and w₁ is solvent mass (g).",
      "• <strong>Thermodynamic Value of K_b:</strong> K_b = (R · M₁ · (T°_b)²) / (1000 · Δ_vapH). For water, K_b = 0.52 K·kg·mol⁻¹."
    ],
    "extraPoints": [
      "• <strong>Pressure Cooker Physics:</strong> A pressure cooker elevates the internal pressure above 1 atm, raising water’s boiling point up to ~120 °C, which cooks food much faster.",
      "• <strong>Cooking on Mountains:</strong> At high altitude, atmospheric pressure is low, so water boils at a temperature below 100 °C, requiring more time to cook food."
    ],
    "reactions": [],
    "oswaalMnemonic": {
      "title": "Cookers Compress, Salts Elevate",
      "phrase": "Cooker raises Pressure ⟶ Water boils at 120°C ⟶ Food cooks fast! | Solute lowers Vapour ⟶ Solution boils at higher Temp (ΔT_b = K_b · m)",
      "explanation": "Non-volatile solute depresses vapour pressure, requiring a higher temperature for vapour pressure to match external atmospheric pressure."
    },
    "commonlyMadeErrors": [
      {
        "error": "Writing unit of K_b as K/mol or K·mol/kg.",
        "tip": "Unit of K_b is K·kg·mol⁻¹ (or °C·kg·mol⁻¹). Incorrect units cost 0.5 to 1 mark in numericals!",
        "penalty": "0.5 mark deduction for unit error."
      }
    ],
    "assertionReason": {
      "assertion": "Cooking of food takes less time in a pressure cooker.",
      "reason": "The pressure cooker increases the boiling point of water by elevating internal pressure.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Higher external pressure forces water to boil above 100 °C, accelerating chemical cooking kinetics."
    },
    "examTrend": {
      "pattern": "3-Mark Numerical on Molar Mass M₂ [CBSE 2023, 2022, 2020, 2018]",
      "pastYears": "CBSE 2023, 2022, 2020",
      "highYieldPrompt": "A solution of 18 g glucose dissolved in 1 kg water boils at 100.052 °C. Calculate K_b of water."
    }
  },
  "chem-sub-1-9": {
    "definitions": [
      {
        "term": "Freezing Point",
        "definition": "The temperature at which the liquid and solid states of a substance have identical vapour pressures."
      },
      {
        "term": "Depression of Freezing Point (ΔT_f)",
        "definition": "The difference between the freezing point of the pure solvent (T°_f) and that of the solution (T_f) containing a non-volatile solute: ΔT_f = T°_f − T_f = K_f · m."
      },
      {
        "term": "Molal Depression Constant (Cryoscopic Constant, K_f)",
        "definition": "The depression in freezing point produced when 1 mole of a non-volatile solute is dissolved in 1 kilogram (1000 g) of solvent. Unit: K·kg·mol⁻¹."
      }
    ],
    "keyPoints": [
      "• <strong>Mechanism:</strong> A solution freezes when its vapour pressure equals that of the pure solid solvent. Since solute lowers vapour pressure, this intersection occurs at a lower temperature.",
      "• <strong>Mathematical Expression:</strong> ΔT_f = K_f · m = (1000 · K_f · w₂) / (M₂ · w₁).",
      "• <strong>Thermodynamic Relation:</strong> K_f = (R · M₁ · (T°_f)²) / (1000 · Δ_fusH). For water, K_f = 1.86 K·kg·mol⁻¹.",
      "• <strong>Antifreeze Solutions:</strong> Ethylene glycol (ethane-1,2-diol) mixed with water lowers the freezing point in automotive radiators, preventing freeze-up in winter climates."
    ],
    "extraPoints": [
      "• <strong>Salting Icy Roads:</strong> Spreading common salt (NaCl) or anhydrous CaCl₂ over ice-covered roads lowers the freezing point of water below 0 °C, causing snow and ice to melt."
    ],
    "reactions": [],
    "oswaalMnemonic": {
      "title": "Radiator Glycol & Road Salt",
      "phrase": "Ethylene Glycol in Cars = Antifreeze (Lowers freezing in winter, elevates boiling in summer!) | Salt on Snowy Roads = Melts ice below 0°C",
      "explanation": "Adding solute depresses freezing point (ΔT_f = K_f · m), preventing engine freeze-up and clearing icy streets."
    },
    "commonlyMadeErrors": [
      {
        "error": "Writing solution freezing point T_f as positive when solvent is water.",
        "tip": "ΔT_f = T°_f − T_f. For water (T°_f = 0 °C), solution freezing point is NEGATIVE: T_f = 0 − ΔT_f!",
        "penalty": "1 mark lost by writing positive freezing temperature."
      }
    ],
    "assertionReason": {
      "assertion": "Ethylene glycol is added to water in car radiators in sub-zero climates.",
      "reason": "Ethylene glycol depresses the freezing point of water and elevates its boiling point.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Acts as dual antifreeze in winter and coolant in summer."
    },
    "examTrend": {
      "pattern": "3-Mark Numerical on Antifreeze / Depression [CBSE 2023, 2020, 2019, 2016]",
      "pastYears": "CBSE 2023, 2020, 2019",
      "highYieldPrompt": "45 g of ethylene glycol is mixed with 600 g of water. Calculate (a) freezing point depression, and (b) freezing point of solution."
    }
  },
  "chem-sub-1-10": {
    "definitions": [
      {
        "term": "Osmosis",
        "definition": "The spontaneous flow of solvent molecules from a pure solvent or dilute solution to a concentrated solution through a semipermeable membrane (SPM)."
      },
      {
        "term": "Semipermeable Membrane (SPM)",
        "definition": "A continuous membrane featuring submicroscopic pores that allows small solvent molecules (like H₂O) to pass through while blocking larger solute molecules or ions."
      },
      {
        "term": "Osmotic Pressure (Π)",
        "definition": "The excess hydrostatic pressure that must be applied to the solution side across a semipermeable membrane to completely halt the inward flow of solvent: Π = C·R·T."
      },
      {
        "term": "Reverse Osmosis (RO)",
        "definition": "The phenomenon where solvent flow is reversed—moving from the concentrated solution into pure solvent across an SPM—by applying hydrostatic pressure greater than the osmotic pressure (P > Π)."
      },
      {
        "term": "Isotonic Solutions",
        "definition": "Two solutions that exert identical osmotic pressure across a semipermeable membrane at the same temperature (Π₁ = Π₂)."
      }
    ],
    "keyPoints": [
      "• <strong>Van ’t Hoff Formula for Osmotic Pressure:</strong> Π = C·R·T = (n₂ / V)·R·T = (w₂ · R · T) / (M₂ · V).",
      "• <strong>Cell Behavior in Isotonic Solution:</strong> 0.9% (mass/volume) aqueous NaCl solution is isotonic with human red blood cells.",
      "• <strong>Hypertonic Solution (> 0.9% NaCl):</strong> Higher osmotic pressure than cell fluids; water flows out of cells causing them to shrink and shrivel (Plasmolysis).",
      "• <strong>Hypotonic Solution (< 0.9% NaCl):</strong> Lower osmotic pressure; water enters cells rapidly causing them to swell and burst (Hemolysis).",
      "• <strong>Reverse Osmosis Desalination:</strong> Piston pressure exceeding Π is applied to sea water; clean water is forced through a porous cellulose acetate SPM into the fresh water reservoir."
    ],
    "extraPoints": [
      "• <strong>Preservation by Salt and Sugar:</strong> Salting meat and preserving fruits in high sugar syrup kills bacteria via plasmolysis (water is drawn out of bacterial cells, causing death).",
      "• <strong>Edema:</strong> Excessive salt intake causes water retention in tissue cells via osmosis, leading to swelling (edema)."
    ],
    "reactions": [
      {
        "name": "Reverse Osmosis (Desalination of Sea Water)",
        "isNamedReaction": false,
        "equation": "Applied Hydrostatic Pressure P > Π ──(Cellulose Acetate SPM)──> Pure Solvent (H₂O) Flow Reversal",
        "howItWorks": "Applying mechanical pressure greater than osmotic pressure overcomes the natural chemical potential gradient, forcing pure water molecules backwards across the SPM from concentrated saline brine into the fresh water reservoir.",
        "diagramId": "rxn-reverse-osmosis"
      }
    ],
    "oswaalMnemonic": {
      "title": "Piston Exceeds Pi: Flow Reverses!",
      "phrase": "P < Π ⟶ Normal Osmosis (Fresh flows to Saline) | P > Π ⟶ Reverse Osmosis (Saline forced back to Fresh Drinking Water through Cellulose SPM)",
      "explanation": "When applied hydrostatic pressure exceeds osmotic pressure Π, water flows in reverse against its chemical potential gradient."
    },
    "commonlyMadeErrors": [
      {
        "error": "Stating that saline water flows through SPM during reverse osmosis.",
        "tip": "The SPM allows ONLY pure solvent (H₂O) molecules to pass through; salt ions (Na⁺, Cl⁻) are blocked!",
        "penalty": "0.5 mark deduction on mechanism explanation."
      }
    ],
    "assertionReason": {
      "assertion": "Reverse osmosis is used for desalination of sea water.",
      "reason": "When pressure greater than osmotic pressure is applied to sea water, pure water is squeezed out through the semipermeable membrane.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Hydrostatic pressure overcomes osmotic resistance, forcing pure water from brine into fresh reservoir."
    },
    "examTrend": {
      "pattern": "2-Mark Definition / Application [CBSE 2023, 2021, 2019, 2017]",
      "pastYears": "CBSE 2023, 2021, 2019",
      "highYieldPrompt": "What is reverse osmosis? Mention its practical application and name the membrane used."
    }
  },
  "chem-sub-1-11": {
    "definitions": [
      {
        "term": "Van ’t Hoff Factor (i)",
        "definition": "The ratio of the experimentally observed colligative property to the theoretical colligative property calculated assuming no dissociation or association: i = (Observed Colligative Property) / (Calculated Colligative Property)."
      },
      {
        "term": "Abnormal Molar Mass",
        "definition": "The experimentally determined molar mass of a solute that deviates from its theoretical molecular weight due to ionization, dissociation, or association in solution."
      },
      {
        "term": "Degree of Dissociation (α)",
        "definition": "The fraction of total solute molecules that dissociate into ions in solution: α = (i − 1) / (n − 1), where n is the number of ions produced per formula unit."
      },
      {
        "term": "Degree of Association (α)",
        "definition": "The fraction of total solute molecules that associate into multimers: α = (1 − i) / (1 − 1/n), where n is the number of associating molecules."
      }
    ],
    "keyPoints": [
      "• <strong>Formulas for Van ’t Hoff Factor:</strong> i = (Normal Molar Mass / Abnormal Molar Mass) = (Total moles of particles after dissociation or association) / (Initial moles of solute).",
      "• <strong>Dissociation (i > 1):</strong> Ionic solutes produce more particles than dissolved, increasing colligative values and lowering observed molar mass (e.g. NaCl: i ≈ 2; K₂SO₄: i ≈ 3).",
      "• <strong>Association (i < 1):</strong> Molecules combine into dimers or polymers, decreasing particle count and doubling the observed molar mass.",
      "• <strong>Acetic Acid in Benzene:</strong> Acetic acid (CH₃COOH) dimerizes in non-polar benzene via cyclic intermolecular hydrogen bonding, giving i ≈ 0.5 and an observed molar mass of ~120 g/mol instead of 60 g/mol."
    ],
    "extraPoints": [
      "• <strong>Modified Colligative Equations:</strong> Always prepend factor i: (1) RLVP: Δp/p° = i·x₂; (2) Elevation of b.p.: ΔT_b = i·K_b·m; (3) Depression of f.p.: ΔT_f = i·K_f·m; (4) Osmotic Pressure: Π = i·C·R·T."
    ],
    "reactions": [],
    "oswaalMnemonic": {
      "title": "Dissociation Divides, Association Assembles",
      "phrase": "Dissociate = More Particles (i > 1, α = (i-1)/(n-1)) | Associate = Fewer Particles (i < 1, α = (1-i)/(1 - 1/n)) | Acetic acid dimers in benzene: i ≈ 0.5, Mass doubles!",
      "explanation": "Carboxylic acids dimerize in non-polar solvents via hydrogen bonds, halving particle count and doubling apparent molecular weight."
    },
    "commonlyMadeErrors": [
      {
        "error": "Forgetting to include Van ’t Hoff factor i when calculating colligative properties for ionic solutes like NaCl, BaCl₂, or K₂SO₄.",
        "tip": "Always write: ΔT_f = i · K_f · m. For BaCl₂ assuming 100% dissociation, n = 3, so i = 3!",
        "penalty": "Complete numerical answer gets marked wrong."
      }
    ],
    "assertionReason": {
      "assertion": "The molecular weight of acetic acid determined by depression of freezing point in benzene is around 120 g/mol.",
      "reason": "Acetic acid dimerizes in benzene through intermolecular hydrogen bonding.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Two molecules join to form a dimer, cutting particle count by half and doubling observed molar mass (60 × 2 = 120 g/mol)."
    },
    "examTrend": {
      "pattern": "3-Mark / 5-Mark Numerical on i and α [CBSE 2023, 2022, 2020, 2019, 2017]",
      "pastYears": "CBSE 2023, 2022, 2020",
      "highYieldPrompt": "A 0.01 m aqueous solution of Al₂(SO₄)₃ freezes at −0.075 °C. Calculate Van ’t Hoff factor and degree of dissociation."
    }
  },
  "chem-sub-1-12": {
    "definitions": [
      {
        "term": "Molecular Weight Determination of Macromolecules",
        "definition": "The analytical process of finding the molar mass of polymers, proteins, and biomolecules, for which osmotic pressure is the universally preferred colligative method."
      }
    ],
    "keyPoints": [
      "• <strong>Three Reasons Osmotic Pressure is Best for Biomolecules:</strong> (1) Measured at room temperature (prevents thermal breakdown and denaturation of proteins); (2) Uses molarity instead of molality; (3) Magnitude of Π is large and easily measured even for very dilute solutions of high molecular mass (>10,000 g/mol).",
      "• <strong>Failure of Other Methods:</strong> ΔT_b and ΔT_f values for polymers are so infinitesimal (~0.001 K) that they cannot be determined accurately with standard Beckmann thermometers.",
      "• <strong>Comparative Summary of Four Colligative Formulas:</strong> (1) Δp/p° = i(w₂M₁)/(M₂w₁); (2) ΔT_b = i·K_b·m; (3) ΔT_f = i·K_f·m; (4) Π = i·C·R·T."
    ],
    "extraPoints": [
      "• <strong>High-Yield Numerical Trap:</strong> Always check if solute associates or dissociates before calculating molar mass; neglecting factor i will result in an erroneous molecular weight."
    ],
    "reactions": [],
    "oswaalMnemonic": {
      "title": "Biomolecules Love Osmotic Pressure",
      "phrase": "Why Osmotic Pressure for Proteins? (1) Room temp avoids heat damage (2) Large measurable Pi (3) Uses Molarity M = n/V",
      "explanation": "High molar mass macromolecules give negligible ΔT_b and ΔT_f (< 0.001 K), but generate substantial osmotic pressure (~mm of water column) easily measured at room temperature."
    },
    "commonlyMadeErrors": [
      {
        "error": "Recommending boiling point elevation to determine molar mass of proteins.",
        "tip": "Proteins undergo irreversible thermal denaturation and coagulation at high boiling temperatures; Osmotic pressure at room temp must be used!",
        "penalty": "1 mark lost on give-reason question."
      }
    ],
    "assertionReason": {
      "assertion": "Osmotic pressure measurement is preferred for determining the molar mass of proteins and polymers.",
      "reason": "Proteins are unstable at higher temperatures and their osmotic pressure values are large enough to be measured accurately even in dilute solutions.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Biomolecules denature on heating; osmotic pressure operates gently at room temperature with high sensitivity."
    },
    "examTrend": {
      "pattern": "2-Mark Give-Reason [CBSE 2023, 2020, 2018, 2015]",
      "pastYears": "CBSE 2023, 2020, 2018",
      "highYieldPrompt": "Why is osmotic pressure measurement preferred over other colligative methods for determination of molecular mass of biomolecules?"
    }
  },
  "chem-sub-2-1": {
    "definitions": [
      {
        "term": "Galvanic (Voltaic) Cell",
        "definition": "An electrochemical cell that converts the chemical energy of a spontaneous redox reaction (ΔG < 0) directly into electrical work."
      },
      {
        "term": "Electrolytic Cell",
        "definition": "An electrochemical cell that utilizes electrical energy from an external power supply to drive a non-spontaneous chemical redox reaction (ΔG > 0)."
      },
      {
        "term": "Anode",
        "definition": "The electrode at which oxidation occurs in any electrochemical cell. In a galvanic cell it is negative (-); in an electrolytic cell it is positive (+)."
      },
      {
        "term": "Cathode",
        "definition": "The electrode at which reduction occurs in any electrochemical cell. In a galvanic cell it is positive (+); in an electrolytic cell it is negative (-)."
      }
    ],
    "keyPoints": [
      "• <strong>Universal Mnemonic (AN OX / RED CAT):</strong> Oxidation ALWAYS occurs at Anode; Reduction ALWAYS occurs at Cathode.",
      "• <strong>Electron Flow:</strong> Electrons flow through the external circuit from Anode (-) to Cathode (+). Conventional current flows in the opposite direction (Cathode to Anode).",
      "• <strong>Gibbs Free Energy & Cell Potential:</strong> ΔG = −n·F·E_cell. For a spontaneous process, E_cell must be POSITIVE, making ΔG NEGATIVE."
    ],
    "extraPoints": [
      "• <strong>Electrode Polarity Sign Confusion:</strong> Students frequently mix up signs. Remember: Galvanic Anode is negative because it releases electrons into the wire; Electrolytic Anode is positive because it is wired to the positive terminal of the DC battery."
    ],
    "reactions": [],
    "oswaalMnemonic": {
      "title": "AN OX & RED CAT at the LOAN Bank",
      "phrase": "LOAN = Left, Oxidation, Anode, Negative. RED CAT = Reduction at Cathode (+).",
      "explanation": "In galvanic cells, the left beaker is the Anode, where Oxidation occurs, having Negative polarity."
    },
    "commonlyMadeErrors": [
      {
        "error": "Confusing electrode polarity between Galvanic and Electrolytic cells.",
        "tip": "Remember: Anode is ALWAYS oxidation; Galvanic Anode is (-) while Electrolytic Anode is (+)!",
        "penalty": "1 mark lost on cell schematic questions."
      }
    ],
    "assertionReason": {
      "assertion": "In a galvanic cell, oxidation takes place at the anode, which is negatively charged.",
      "reason": "Electrons are released at the anode due to oxidation of metal atoms and travel into the external circuit.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Liberation of electrons at the anode imparts a negative electrostatic potential to that electrode."
    },
    "examTrend": {
      "pattern": "1-Mark MCQ / 2-Mark Distinction [CBSE 2023, 2021, 2018]",
      "pastYears": "CBSE 2023, 2021, 2018",
      "highYieldPrompt": "Distinguish between galvanic cell and electrolytic cell with respect to energy conversion and electrode signs."
    }
  },
  "chem-sub-2-2": {
    "definitions": [
      {
        "term": "Daniell Cell",
        "definition": "A specific galvanic cell consisting of a zinc electrode immersed in ZnSO₄ solution and a copper electrode immersed in CuSO₄ solution, yielding a standard potential of 1.10 V at 298 K."
      },
      {
        "term": "Salt Bridge",
        "definition": "An inverted U-tube filled with an agar-agar gel containing an inert electrolyte (KCl, KNO₃, or NH₄NO₃) that maintains electrical neutrality and completes the cell circuit without intermixing solutions."
      }
    ],
    "keyPoints": [
      "• <strong>Cell Reactions:</strong> Anode: Zn(s) ⟶ Zn²⁺(aq) + 2e⁻ (E° = −0.76 V); Cathode: Cu²⁺(aq) + 2e⁻ ⟶ Cu(s) (E° = +0.34 V).",
      "• <strong>Standard Cell Potential:</strong> E°_cell = E°_cathode − E°_anode = +0.34 V − (−0.76 V) = +1.10 V.",
      "• <strong>Three Functions of Salt Bridge:</strong> (1) Completes circuit by allowing migration of ions; (2) Maintains electrical neutrality in both half-cells; (3) Prevents liquid-junction potential.",
      "• <strong>Inert Electrolyte Requirement:</strong> The ionic mobilities of cation and anion in the salt bridge must be virtually identical (as in K⁺ and Cl⁻)."
    ],
    "extraPoints": [
      "• <strong>External Voltage Effects (Crucial Board Topic):</strong> (1) When E_ext < 1.10 V: Electrons flow from Zn to Cu, cell acts normally; (2) When E_ext = 1.10 V: Cell current stops, no chemical reaction occurs; (3) When E_ext > 1.10 V: Cell operation REVERSES! Electrons flow from Cu to Zn; cell functions as an electrolytic cell, depositing Zn on zinc plate."
    ],
    "reactions": [
      {
        "name": "Daniell Cell Spontaneous Redox Reaction",
        "isNamedReaction": false,
        "equation": "Zn(s) + Cu²⁺(aq, 1 M) ⟶ Zn²⁺(aq, 1 M) + Cu(s) &nbsp; [E°_cell = +1.10 V]",
        "howItWorks": "Zinc atoms at the anode give up 2 electrons into the external wire and dissolve as Zn²⁺. Electrons travel across the circuit to the cathode, where Cu²⁺ ions capture them to deposit metallic copper.",
        "diagramId": "rxn-daniell-cell"
      }
    ],
    "oswaalMnemonic": {
      "title": "Daniell Cell Triple Voltage Rule",
      "phrase": "E_ext < 1.10 V: Normal Galvanic | E_ext = 1.10 V: Dead Stop (I=0) | E_ext > 1.10 V: REVERSE Electrolytic (Cu oxidizes, Zn deposits!)",
      "explanation": "When opposing external potential matches cell EMF (1.10 V), current ceases. Exceeding it drives the non-spontaneous reverse reaction."
    },
    "commonlyMadeErrors": [
      {
        "error": "Writing that when E_ext = 1.10 V the cell continues to run slowly.",
        "tip": "When E_ext = 1.10 V, NO electron flow occurs and current drops to ZERO. When E_ext > 1.10 V, reaction reverses!",
        "penalty": "1 mark lost in 1-mark objective/VSA."
      }
    ],
    "assertionReason": {
      "assertion": "In a Daniell cell, current stops flowing when external applied voltage equals 1.10 V.",
      "reason": "At this point, the opposing external potential completely cancels the cell electromotive force.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Net driving potential becomes E_net = 1.10 V − 1.10 V = 0 V; hence current drops to zero."
    },
    "examTrend": {
      "pattern": "3-Mark Labeled Diagram & Conditions [CBSE 2023, 2020, 2018, 2015]",
      "pastYears": "CBSE 2023, 2020, 2018",
      "highYieldPrompt": "What happens to the Daniell cell when external voltage E_ext is (i) < 1.1 V, (ii) = 1.1 V, (iii) > 1.1 V?"
    }
  },
  "chem-sub-2-3": {
    "definitions": [
      {
        "term": "Standard Electrode Potential (E°)",
        "definition": "The potential difference developed between an electrode and its solution when the concentration of all species in the half-cell is unity (1 M), gas pressure is 1 bar, and temperature is 298 K."
      },
      {
        "term": "Standard Hydrogen Electrode (SHE)",
        "definition": "The universal primary reference electrode consisting of a platinum wire coated with platinum black immersed in 1 M H⁺ solution with pure H₂ gas bubbling at 1 bar, arbitrarily assigned E° = 0.00 V at all temperatures."
      }
    ],
    "keyPoints": [
      "• <strong>IUPAC Convention:</strong> Standard electrode potential universally means standard REDUCTION potential.",
      "• <strong>SHE Cell Notation:</strong> Pt(s) | H₂(g, 1 bar) | H⁺(aq, 1 M).",
      "• <strong>SHE Half-Reaction:</strong> H⁺(aq) + e⁻ ⇌ 1/2 H₂(g) &nbsp; [E° = 0.00 V].",
      "• <strong>Platinum Black Role:</strong> Finely divided platinum black provides large surface area and adsorbs hydrogen gas to establish rapid redox equilibrium between H₂ gas and H⁺ ions."
    ],
    "extraPoints": [
      "• <strong>Measurement Principle:</strong> An unknown electrode is coupled with SHE. If the unknown half-cell undergoes reduction relative to SHE, its E° is positive (e.g. Cu²⁺/Cu = +0.34 V); if it oxidizes, its E° is negative (e.g. Zn²⁺/Zn = −0.76 V)."
    ],
    "reactions": [],
    "oswaalMnemonic": {
      "title": "SHE is the Zero Benchmark",
      "phrase": "Pt(s) | H₂(1 bar) | H⁺(1 M) = ZERO Volts (The universal yardstick for all electrode potentials)",
      "explanation": "SHE is assigned 0.00 V at all temperatures by IUPAC convention. Any coupled electrode higher than SHE is positive; lower is negative."
    },
    "commonlyMadeErrors": [
      {
        "error": "Omitting the platinum wire and platinum black when drawing the SHE diagram.",
        "tip": "Platinum is essential: it adsorbs H₂ gas to establish equilibrium between H₂ gas and H⁺ ions!",
        "penalty": "0.5 mark deduction on diagram questions."
      }
    ],
    "assertionReason": {
      "assertion": "Standard Hydrogen Electrode (SHE) is assigned an electrode potential of 0.00 V at 298 K.",
      "reason": "SHE is universally adopted as the primary reference electrode by IUPAC convention.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "It is an arbitrary reference standard against which all other reduction potentials are measured."
    },
    "examTrend": {
      "pattern": "2-Mark Construction & Working [CBSE 2022, 2019, 2017]",
      "pastYears": "CBSE 2022, 2019, 2017",
      "highYieldPrompt": "Describe the construction of standard hydrogen electrode with cell notation and half-reaction."
    }
  },
  "chem-sub-2-4": {
    "definitions": [
      {
        "term": "Electrochemical Series",
        "definition": "The arrangement of chemical elements and half-cell couples in the increasing order of their standard reduction potentials (E°)."
      },
      {
        "term": "Feasibility Criterion",
        "definition": "A redox reaction is spontaneous (feasible) under standard conditions if and only if E°_cell = E°_cathode − E°_anode > 0 (or ΔG° = −nFE°_cell < 0)."
      }
    ],
    "keyPoints": [
      "• <strong>Reducing Agent Trend:</strong> Substances with lower (more negative) E° values are stronger reducing agents (Lithium has lowest E° = −3.05 V; Li is strongest reducing agent in water).",
      "• <strong>Oxidizing Agent Trend:</strong> Substances with higher (more positive) E° values are stronger oxidizing agents (Fluorine has highest E° = +2.87 V; F₂ is strongest oxidizing agent).",
      "• <strong>Displacement Rule:</strong> A metal with lower E° can displace a metal with higher E° from its salt solution (e.g. Zn with E° = −0.76 V displaces Cu with E° = +0.34 V).",
      "• <strong>Hydrogen Liberation Rule:</strong> Only metals with negative reduction potentials (E° < 0.00 V) can displace H₂ gas from dilute mineral acids (HCl, H₂SO₄)."
    ],
    "extraPoints": [
      "• <strong>Why Copper cannot displace H₂:</strong> Copper has positive reduction potential (+0.34 V > 0.00 V); therefore, reduction of Cu²⁺ is favored over H⁺, and Cu cannot reduce H⁺ to H₂ gas.",
      "• <strong>Vessel Storage Question:</strong> \"Can you store CuSO₄ solution in a zinc container?\" No, because Zn oxidizes spontaneously, corroding the pot: Zn + Cu²⁺ ⟶ Zn²⁺ + Cu."
    ],
    "reactions": [],
    "oswaalMnemonic": {
      "title": "Negative Potential Displaces Hydrogen",
      "phrase": "Negative E° = Strong Reducer (Li = −3.05 V) ⟶ Can liberate H₂ from acids! | Positive E° = Weak Reducer (Cu = +0.34 V) ⟶ CANNOT liberate H₂!",
      "explanation": "Metals with negative reduction potentials are stronger reducing agents than hydrogen, displacing H⁺ from dilute acids."
    },
    "commonlyMadeErrors": [
      {
        "error": "Stating that copper can displace hydrogen from dilute HCl because it is a metal.",
        "tip": "Copper has positive reduction potential (+0.34 V > 0.00 V); hence it CANNOT displace H₂ from dilute mineral acids!",
        "penalty": "Direct 0/1 mark on give-reason."
      }
    ],
    "assertionReason": {
      "assertion": "Copper does not liberate hydrogen gas on reaction with dilute hydrochloric acid.",
      "reason": "Standard reduction potential of Cu²⁺/Cu (+0.34 V) is higher than that of H⁺/H₂ (0.00 V).",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Cu is a weaker reducing agent than H₂, so it cannot donate electrons to H⁺ ions."
    },
    "examTrend": {
      "pattern": "2-Mark Give-Reason / Feasibility [CBSE 2023, 2020, 2018]",
      "pastYears": "CBSE 2023, 2020, 2018",
      "highYieldPrompt": "Can you store 1 M copper sulfate solution in a zinc container? Justify on the basis of E° values."
    }
  },
  "chem-sub-2-5": {
    "definitions": [
      {
        "term": "Nernst Equation (Single Electrode)",
        "definition": "An equation relating the electrode potential of a half-cell to standard electrode potential, temperature, and active concentrations of species: E = E° − (RT / nF) ln(1 / [Mⁿ⁺])."
      }
    ],
    "keyPoints": [
      "• <strong>Working Formula at 298 K:</strong> E = E° − (0.0591 / n) log(1 / [Mⁿ⁺]) = E° + (0.0591 / n) log [Mⁿ⁺].",
      "• <strong>Concentration Effect:</strong> Increasing the concentration of metal ions [Mⁿ⁺] in solution increases the electrode reduction potential.",
      "• <strong>Pure Solid Convention:</strong> The activity or concentration of pure solids, liquids, and gases at 1 bar is taken as unity ([M(s)] = 1)."
    ],
    "extraPoints": [
      "• <strong>Temperature Trap:</strong> The 0.0591 factor is valid ONLY at 298 K (25 °C). If temperature is different, use 2.303·R·T / nF."
    ],
    "reactions": [],
    "oswaalMnemonic": {
      "title": "Nernst Logarithm: Products over Reactants",
      "phrase": "E = E° − (0.0591 / n) log(1 / [Mⁿ⁺]) (More Cations = Higher Reduction Potential!)",
      "explanation": "At 298 K, 2.303 RT/F condenses to 0.0591. Increasing metal ion concentration shifts equilibrium forward, elevating potential."
    },
    "commonlyMadeErrors": [
      {
        "error": "Using the 0.0591 constant when temperature is NOT 298 K.",
        "tip": "The 0.0591 factor is valid ONLY at 298 K (25 °C). If T differs, use 2.303·R·T / nF!",
        "penalty": "Calculation error on non-standard temperature questions."
      }
    ],
    "assertionReason": {
      "assertion": "Electrode potential of a metal electrode increases with increase in concentration of metal ions in solution.",
      "reason": "According to Nernst equation, E = E° + (0.0591/n) log[Mⁿ⁺] at 298 K.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Increasing [Mⁿ⁺] increases the reduction tendency of metal ions."
    },
    "examTrend": {
      "pattern": "2-Mark Numerical on Single Electrode [CBSE 2023, 2020, 2017]",
      "pastYears": "CBSE 2023, 2020, 2017",
      "highYieldPrompt": "Calculate the electrode potential of a hydrogen electrode dipping in a solution of pH = 10 at 298 K."
    }
  },
  "chem-sub-2-6": {
    "definitions": [
      {
        "term": "Nernst Equation (Complete Cell)",
        "definition": "The electrochemical relation for cell potential under non-standard conditions: E_cell = E°_cell − (0.0591 / n) log Q, where Q is reaction quotient."
      },
      {
        "term": "Equilibrium Constant (K_c) in Electrochemistry",
        "definition": "The state where E_cell = 0 and Q = K_c: log K_c = (n · E°_cell) / 0.0591 at 298 K."
      }
    ],
    "keyPoints": [
      "• <strong>Complete Formula:</strong> E_cell = E°_cell − (0.0591 / n) log ([Anode ions]^a / [Cathode ions]^c).",
      "• <strong>Equilibrium Condition:</strong> At equilibrium, cell stops functioning (E_cell = 0), and battery dies: log K_c = (n · E°_cell) / 0.0591.",
      "• <strong>Relation with Gibbs Free Energy:</strong> ΔG° = −n · F · E°_cell = −2.303 · R · T · log K_c.",
      "• <strong>Maximum Electrical Work:</strong> W_max = −ΔG = n·F·E_cell."
    ],
    "extraPoints": [
      "• <strong>Concentration Cells:</strong> Cells composed of identical electrodes dipping into solutions of the same electrolyte at different concentrations (E°_cell = 0, but E_cell > 0 if C₂ > C₁)."
    ],
    "reactions": [],
    "oswaalMnemonic": {
      "title": "Dead Battery at Equilibrium: E_cell = 0",
      "phrase": "At Equilibrium: Battery is DEAD (E_cell = 0) ⟶ log K_c = n · E°_cell / 0.0591 | ΔG° = −n · F · E°_cell",
      "explanation": "A galvanic cell does work as long as it is away from equilibrium. At equilibrium, chemical potential equalizes and current stops."
    },
    "commonlyMadeErrors": [
      {
        "error": "Writing E°_cell = 0 at equilibrium instead of E_cell = 0.",
        "tip": "E°_cell is a thermodynamic constant that NEVER changes! It is the non-standard E_cell that drops to zero at equilibrium!",
        "penalty": "Severe 1 mark penalty on conceptual equilibrium questions."
      }
    ],
    "assertionReason": {
      "assertion": "At equilibrium, the cell potential E_cell of a galvanic cell becomes zero.",
      "reason": "At equilibrium, the rate of forward redox reaction equals the rate of backward reaction.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Chemical potentials in both half-cells become equal, ceasing net electron flow."
    },
    "examTrend": {
      "pattern": "3-Mark / 5-Mark Comprehensive Numerical [CBSE 2023, 2022, 2020, 2019, 2018]",
      "pastYears": "CBSE 2023, 2022, 2020",
      "highYieldPrompt": "Calculate EMF and ΔG° for the cell: Mg(s) | Mg²⁺(0.001 M) || Cu²⁺(0.0001 M) | Cu(s) at 298 K."
    }
  },
  "chem-sub-2-7": {
    "definitions": [
      {
        "term": "Faraday’s First Law of Electrolysis",
        "definition": "The mass (w) of a substance deposited or liberated at any electrode during electrolysis is directly proportional to the quantity of electricity (electric charge Q) passed through the electrolyte: w = z · Q = z · I · t."
      },
      {
        "term": "Faraday’s Second Law of Electrolysis",
        "definition": "When the same quantity of electricity is passed through different electrolytic solutions connected in series, the masses of different substances deposited at the electrodes are directly proportional to their chemical equivalent weights: w₁ / w₂ = E₁ / E₂."
      },
      {
        "term": "Electrochemical Equivalent (z)",
        "definition": "The mass of a substance deposited by the passage of 1 Coulomb of electric charge (1 Ampere for 1 second): z = Equivalent Weight / F = M / (n · F). Unit: g/C or kg/C."
      },
      {
        "term": "Faraday Constant (F)",
        "definition": "The absolute electric charge carried by 1 mole of electrons: 1 F = N_A · e = (6.022 × 10²³ mol⁻¹) × (1.602 × 10⁻¹⁹ C) = 96487 C/mol ≈ 96500 C/mol."
      }
    ],
    "keyPoints": [
      "• <strong>Fundamental Calculation Equation:</strong> Mass deposited w = (M · I · t) / (n · 96500), where M = molar mass (g/mol), I = current (A), t = time in SECONDS (s), n = valence electrons transferred, F = 96500 C/mol.",
      "• <strong>Stoichiometric Deposition Requirements (Must-Memorize):</strong>\n  - Al³⁺ + 3e⁻ ⟶ Al (27 g) requires 3 Faradays (3 × 96500 C = 289,500 C).\n  - Cu²⁺ + 2e⁻ ⟶ Cu (63.5 g) requires 2 Faradays (2 × 96500 C = 193,000 C).\n  - Ag⁺ + e⁻ ⟶ Ag (108 g) requires 1 Faraday (96500 C).\n  - 1 mol of O₂ from H₂O requires 4 Faradays (2 H₂O ⟶ O₂ + 4H⁺ + 4e⁻)!",
      "• <strong>Series Electrolysis (Second Law Application):</strong> If cells containing AgNO₃ and CuSO₄ are in series: (Mass of Ag / Mass of Cu) = (Equiv. wt of Ag / Equiv. wt of Cu) = (108/1) / (63.5/2) = 108 / 31.75 = 3.40.",
      "• <strong>Overpotential & Product Prediction at Electrodes:</strong>\n  - <em>Electrolysis of Molten NaCl</em>: Na at cathode, Cl₂ at anode.\n  - <em>Electrolysis of Aqueous NaCl</em>: H₂ gas at cathode (reduction of water is easier than Na⁺ reduction); Cl₂ gas at anode instead of O₂ because liberation of O₂ requires extra activation voltage (OVERPOTENTIAL!).\n  - <em>Electrolysis of Aqueous CuSO₄ with Pt electrodes</em>: Cu deposits at cathode, O₂ gas evolves at anode.\n  - <em>Electrolysis of Aqueous CuSO₄ with Cu electrodes</em>: Cu deposits at cathode, Cu dissolves from anode (Electrolytic refining)."
    ],
    "extraPoints": [
      "• <strong>Current Efficiency (η):</strong> Actual mass obtained / Theoretical mass calculated × 100%. Often industrial cells run at 90–95% efficiency due to secondary side reactions.",
      "• <strong>Time Trap Warning:</strong> In board numerics, time is always given in minutes or hours (e.g. 20 minutes, 2 hours). You MUST multiply by 60 or 3600 to convert to seconds before plugging into w = zIt!"
    ],
    "reactions": [
      {
        "name": "Quantitative Electrolytic Deposition of Copper",
        "isNamedReaction": false,
        "equation": "Cathode: Cu²⁺(aq) + 2e⁻ ⟶ Cu(s)  [Requires 2 F = 2 × 96500 C per mole]",
        "howItWorks": "Two moles of electrons are transferred per mole of copper deposited on the cathode surface.",
        "diagramId": "rxn-faraday-electrolysis"
      }
    ],
    "oswaalMnemonic": {
      "title": "Faraday Charge Formula: Q = I · t and n · F Deposits 1 Mole",
      "phrase": "Charge Q = I × t (time in seconds!) | 1 Faraday = 96500 C = 1 Mole Electrons! | Al³⁺ takes 3F, Cu²⁺ takes 2F, Ag⁺ takes 1F!",
      "explanation": "To deposit 1 mole of any metal M, charge needed is exactly n × 96500 C, where n is its cationic charge (valency)."
    },
    "commonlyMadeErrors": [
      {
        "error": "Forgetting to convert time in minutes/hours into seconds in w = (M · I · t) / (n · F).",
        "tip": "Always substitute t in SECONDS! If time = 10 min, t = 10 × 60 = 600 s. If time = 2 hr, t = 2 × 3600 = 7200 s.",
        "penalty": "Complete numerical answer lost (typically 2 marks)."
      },
      {
        "error": "Predicting O₂ evolution at the anode in electrolysis of concentrated aqueous NaCl.",
        "tip": "Due to the OVERPOTENTIAL of oxygen, oxidation of Cl⁻ to Cl₂ gas occurs at the anode instead of H₂O oxidation!",
        "penalty": "1 mark deduction on electrolysis products question."
      },
      {
        "error": "Confusing Faraday (charge) with Farad (capacitance).",
        "tip": "Faraday (F) is the unit of electric charge (96500 C). Farad (F) is the unit of capacitance (Coulomb/Volt).",
        "penalty": "Loss of unit marks."
      }
    ],
    "assertionReason": {
      "assertion": "The mass of copper deposited by passing 2 Faradays of electricity through CuSO₄ solution is 63.5 g.",
      "reason": "Reduction of one mole of Cu²⁺ to Cu requires 2 moles of electrons: Cu²⁺ + 2e⁻ ⟶ Cu.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Cu²⁺ has valency n = 2. Therefore 1 mole of Cu (63.5 g) requires 2 Faradays (2 × 96500 C)."
    },
    "examTrend": {
      "pattern": "3-Mark Numerical on Faraday’s Laws [CBSE 2024, 2023, 2022, 2020, 2019, 2016]",
      "pastYears": "CBSE 2024, 2023, 2022, 2020",
      "highYieldPrompt": "A solution of CuSO₄ is electrolyzed for 20 minutes with a current of 1.5 A. Calculate the mass of copper deposited at the cathode. (Molar mass of Cu = 63.5 g/mol, 1 F = 96500 C/mol)."
    }
  },
  "chem-sub-2-8": {
    "definitions": [
      {
        "term": "Kohlrausch’s Law of Independent Migration of Ions",
        "definition": "At infinite dilution, where dissociation is complete and inter-ionic interactions vanish, the limiting molar conductivity of an electrolyte equals the sum of the individual contributions of its anions and cations: Λ°_m = ν₊ λ°₊ + ν₋ λ°₋."
      },
      {
        "term": "Limiting Molar Conductivity (Λ°_m)",
        "definition": "The molar conductivity of an electrolytic solution as concentration approaches zero (infinite dilution)."
      }
    ],
    "keyPoints": [
      "• <strong>Strong Electrolytes (Debye-Hückel-Onsager):</strong> Λ_m = Λ°_m − A√c. Plot of Λ_m vs √c is linear with negative slope −A, extrapolating smoothly to intercept Λ°_m at zero concentration.",
      "• <strong>Weak Electrolytes (Steep Asymptote):</strong> In weak electrolytes (like CH₃COOH), degree of ionization α increases sharply at high dilution. The curve runs asymptotic to the y-axis, making Λ°_m unobtainable by graphical extrapolation.",
      "• <strong>Calculation of Λ°_m for Weak Electrolytes:</strong> Kohlrausch law allows calculation of Λ°_m for weak acids from strong salt data: Λ°_m(CH₃COOH) = Λ°_m(CH₃COONa) + Λ°_m(HCl) − Λ°_m(NaCl).",
      "• <strong>Degree of Dissociation & K_a:</strong> α = Λ_m / Λ°_m and K_a = (c · α²) / (1 − α)."
    ],
    "extraPoints": [
      "• <strong>Examiner Favorite Numerical:</strong> Finding α and dissociation constant K_a of acetic acid using Kohlrausch law data."
    ],
    "reactions": [
      {
        "name": "Kohlrausch’s Law & Limiting Molar Conductivity Curve",
        "isNamedReaction": true,
        "equation": "Λ°_m(CH₃COOH) = Λ°_m(CH₃COONa) + Λ°_m(HCl) − Λ°_m(NaCl) &nbsp;|&nbsp; Λ_m = Λ°_m − A√c",
        "howItWorks": "At infinite dilution, individual ions migrate completely independently of their counter-ions. Weak electrolytes ionize completely only at infinite dilution, where Λ°_m can be calculated additively.",
        "diagramId": "rxn-kohlrausch-graph"
      }
    ],
    "oswaalMnemonic": {
      "title": "Kohlrausch Ion Freedom at Zero Concentration",
      "phrase": "At Zero Concentration, every ion travels solo! Λ°_m(Weak Acid) = Salt + Strong Acid − Neutralizer (Na-Salt + HCl − NaCl)",
      "explanation": "Kohlrausch allows calculating limiting molar conductivity of weak electrolytes from strong salt data additively."
    },
    "commonlyMadeErrors": [
      {
        "error": "Attempting to find Λ°_m of weak electrolytes (like CH₃COOH) by linear extrapolation of Λ_m vs √c plot.",
        "tip": "Weak electrolytes curve upward asymptotically at high dilution; Λ°_m CANNOT be found by extrapolation! Must use Kohlrausch law.",
        "penalty": "1 mark lost on graphical interpretation."
      }
    ],
    "assertionReason": {
      "assertion": "Limiting molar conductivity of acetic acid cannot be determined experimentally by extrapolating Λ_m vs √c curve.",
      "reason": "At infinite dilution, the degree of dissociation of weak electrolytes approaches unity and the curve runs parallel to the axis.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Steep asymptotic rise prevents reaching the y-intercept by extrapolation."
    },
    "examTrend": {
      "pattern": "3-Mark Kohlrausch Law & α Calculation [CBSE 2023, 2020, 2019, 2017]",
      "pastYears": "CBSE 2023, 2020, 2019",
      "highYieldPrompt": "State Kohlrausch’s law of independent migration of ions. Calculate Λ°_m for acetic acid given values for CH₃COONa, HCl, and NaCl."
    }
  },
  "chem-sub-2-9": {
    "definitions": [
      {
        "term": "Conductance (G)",
        "definition": "The ease with which electric current flows through an electrolytic conductor, defined as the reciprocal of resistance: G = 1 / R. Unit: Siemens (S) or Ω⁻¹."
      },
      {
        "term": "Conductivity / Specific Conductance (κ)",
        "definition": "The conductance of an electrolytic solution contained between two electrodes of 1 m² (or 1 cm²) area placed 1 m (or 1 cm) apart: κ = G · (l / A). Unit: S·m⁻¹ or S·cm⁻¹."
      },
      {
        "term": "Molar Conductivity (Λ_m)",
        "definition": "The conducting power of all ions produced by dissolving 1 mole of an electrolyte in solution: Λ_m = (1000 · κ) / M. Unit: S·cm²·mol⁻¹."
      },
      {
        "term": "Cell Constant (G*)",
        "definition": "The geometric ratio of distance between electrodes (l) to electrode cross-sectional area (A): G* = l / A = R · κ."
      }
    ],
    "keyPoints": [
      "• <strong>Conductivity on Dilution:</strong> Conductivity (κ) ALWAYS DECREASES upon dilution because the number of current-carrying ions per unit volume (per cm³ or mL) of solution decreases.",
      "• <strong>Molar Conductivity on Dilution:</strong> Molar conductivity (Λ_m) ALWAYS INCREASES upon dilution because the increase in total volume containing 1 mole of electrolyte far outweighs the decrease in κ.",
      "• <strong>Strong vs Weak Electrolytes on Dilution:</strong>\n  - <em>Strong Electrolytes (e.g. KCl, HCl)</em>: Λ_m increases slowly and linearly with dilution because inter-ionic attractions weaken. Follows Debye-Hückel-Onsager equation: Λ_m = Λ°_m − A√C.\n  - <em>Weak Electrolytes (e.g. CH₃COOH)</em>: Λ_m increases steeply at high dilution because degree of dissociation (α) surges according to Ostwald’s dilution law.",
      "• <strong>Effect of Temperature:</strong> In electrolytic conductors, conductance INCREASES with rising temperature because ionic mobility increases and viscosity of solvent decreases. (Opposite of metallic conductors where resistance rises with temperature!)."
    ],
    "extraPoints": [
      "• <strong>Why Kohlrausch’s Law is needed for Weak Electrolytes:</strong> Since the Λ_m vs √C curve for weak electrolytes is asymptotic and runs parallel to the y-axis at infinite dilution, Λ°_m cannot be obtained by extrapolation; it MUST be calculated using Kohlrausch’s law!"
    ],
    "reactions": [],
    "oswaalMnemonic": {
      "title": "Conductivity Drops, Molar Conductivity Climbs",
      "phrase": "Dilution dilutes ions per cm³ ⟶ Conductivity κ DROPS! | Volume containing 1 mole expands enormously ⟶ Molar Conductivity Λ_m CLIMBS!",
      "explanation": "Conductivity is per unit volume; dilution reduces ions per cm³. Molar conductivity is per mole; expanding volume dominates."
    },
    "commonlyMadeErrors": [
      {
        "error": "Mixing up units in Λ_m = (1000 · κ) / M.",
        "tip": "When using 1000 in numerator, κ must be in S·cm⁻¹ to give Λ_m in S·cm²·mol⁻¹!",
        "penalty": "Calculation off by a factor of 10⁶."
      }
    ],
    "assertionReason": {
      "assertion": "Conductivity of all electrolytes decreases with decrease in concentration (dilution).",
      "reason": "The number of ions per unit volume that carry current in a solution decreases on dilution.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Current carrying capacity per unit volume decreases as solution is diluted."
    },
    "examTrend": {
      "pattern": "2-Mark Give-Reason / 3-Mark Numerical [CBSE 2024, 2023, 2022, 2020, 2018]",
      "pastYears": "CBSE 2024, 2023, 2022, 2020",
      "highYieldPrompt": "Explain why conductivity decreases while molar conductivity increases with dilution for both strong and weak electrolytes."
    }
  },
  "chem-sub-2-10": {
    "definitions": [
      {
        "term": "Primary Battery",
        "definition": "A non-rechargeable electrochemical cell in which the redox reaction occurs only once, after which the cell becomes dead (e.g. Dry cell, Mercury button cell)."
      },
      {
        "term": "Secondary Battery",
        "definition": "A rechargeable electrochemical cell that can be restored to its original state by passing an external direct electrical current in the reverse direction (e.g. Lead storage battery, Ni-Cd cell)."
      },
      {
        "term": "Fuel Cell",
        "definition": "A galvanic cell designed to continuously convert the chemical energy from the combustion of fossil or molecular fuels (like H₂, CH₄, CO) directly into electrical energy without a thermal Carnot engine."
      }
    ],
    "keyPoints": [
      "• <strong>Dry Cell (Leclanché):</strong> Anode: Zn container; Cathode: Graphite rod surrounded by powdered MnO₂ and carbon; Electrolyte: Moist paste of NH₄Cl and ZnCl₂; Potential: ~1.5 V.",
      "• <strong>Mercury Cell:</strong> Potential remains constant at ~1.35 V throughout its operational life because the overall reaction contains no ions in solution whose concentration could change.",
      "• <strong>Lead Storage Battery (Discharge):</strong> Anode: Spongy lead Pb; Cathode: PbO₂ grid; Electrolyte: 38% H₂SO₄ (density 1.30 g/mL). Discharging consumes H₂SO₄, forming insoluble PbSO₄ on both plates.",
      "• <strong>H₂–O₂ Fuel Cell Advantages:</strong> (1) High thermodynamic efficiency (~70% vs ~40% for thermal plants); (2) Pollution-free: sole product is pure drinking water; (3) Continuous operation."
    ],
    "extraPoints": [
      "• <strong>Recharging Chemistry of Lead Battery:</strong> Applying external DC voltage reverses all reactions: PbSO₄ at anode is reduced back to Pb; PbSO₄ at cathode is oxidized back to PbO₂; H₂SO₄ is regenerated, restoring density to 1.30 g/mL."
    ],
    "reactions": [
      {
        "name": "Lead Storage Battery (Discharge & Recharge)",
        "isNamedReaction": false,
        "equation": "Pb(s) + PbO₂(s) + 2 H₂SO₄(aq) ⇌ (Discharge / Recharge) ⇌ 2 PbSO₄(s) + 2 H₂O(l) &nbsp; [2.0 V/cell]",
        "howItWorks": "During discharge, spongy lead is oxidized at the anode and lead dioxide is reduced at the cathode, both converting to insoluble lead sulfate. Recharging reverses current, regenerating lead, lead dioxide, and sulfuric acid.",
        "diagramId": "rxn-lead-storage"
      },
      {
        "name": "Hydrogen-Oxygen (H₂–O₂) Fuel Cell Reactions",
        "isNamedReaction": false,
        "equation": "Anode: 2 H₂ + 4 OH⁻ ⟶ 4 H₂O + 4e⁻ &nbsp;|&nbsp; Cathode: O₂ + 2 H₂O + 4e⁻ ⟶ 4 OH⁻ &nbsp;|&nbsp; Net: 2 H₂ + O₂ ⟶ 2 H₂O",
        "howItWorks": "Hydrogen and oxygen gases bubble through porous carbon electrodes impregnated with platinum catalyst into hot concentrated aqueous KOH, cleanly combining to yield electric current and pure water.",
        "diagramId": "rxn-fuel-cell"
      }
    ],
    "oswaalMnemonic": {
      "title": "Battery Chem: Lead Sulfates Discharging, Apollo Drinks H2O",
      "phrase": "Lead Battery: Both plates turn into PbSO₄(s) on discharge! | Fuel Cell: 2H₂ + O₂ ⟶ 2H₂O (70% efficiency, astronaut drinking water)",
      "explanation": "Lead storage battery uses 38% sulfuric acid; both anode (Pb) and cathode (PbO₂) convert to PbSO₄ during discharge."
    },
    "commonlyMadeErrors": [
      {
        "error": "Writing that lead storage battery produces different salts at anode and cathode.",
        "tip": "Both plates form the SAME insoluble salt: Lead Sulfate (PbSO₄) during discharge!",
        "penalty": "0.5 mark deduction per half-reaction."
      }
    ],
    "assertionReason": {
      "assertion": "Mercury cell provides a constant voltage of 1.35 V throughout its operational life.",
      "reason": "The overall cell reaction does not involve any ions in solution whose concentration could change.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Absence of ionic reactants/products in electrolyte keeps cell potential completely steady."
    },
    "examTrend": {
      "pattern": "2-Mark / 3-Mark Battery Reactions [CBSE 2023, 2020, 2019, 2017, 2015]",
      "pastYears": "CBSE 2023, 2020, 2019",
      "highYieldPrompt": "Write the anode and cathode reactions taking place during discharging of a lead storage battery. Mention two advantages of H₂–O₂ fuel cell."
    }
  },
  "chem-sub-2-11": {
    "definitions": [
      {
        "term": "Corrosion",
        "definition": "The electrochemical deterioration and destruction of metals caused by spontaneous reaction with surrounding atmospheric moisture, oxygen, and acidic gases."
      },
      {
        "term": "Rusting of Iron",
        "definition": "The specific corrosion of iron leading to the formation of reddish-brown hydrated ferric oxide of formula Fe₂O₃ · xH₂O."
      },
      {
        "term": "Sacrificial Protection (Galvanization)",
        "definition": "A method of protecting iron from corrosion by coating it with a layer of a more electropositive (more easily oxidized) metal, such as Zinc (Zn)."
      }
    ],
    "keyPoints": [
      "• <strong>Electrochemical Cell on Metal:</strong> A drop of water on iron acts as an electrochemical cell. Anode spot forms at a metal strain defect where iron oxidizes: 2 Fe ⟶ 2 Fe²⁺ + 4e⁻ (E° = −0.44 V).",
      "• <strong>Cathode at Droplet Boundary:</strong> High oxygen concentration at the droplet perimeter acts as cathode, reducing atmospheric oxygen: O₂ + 4 H⁺ + 4e⁻ ⟶ 2 H₂O (E° = +1.23 V).",
      "• <strong>Hydrated Rust Formation:</strong> Fe²⁺ ions migrate and oxidize further to Fe³⁺, depositing flaky rust: 4 Fe²⁺ + O₂ + 4 H₂O ⟶ 2 Fe₂O₃ + 8 H⁺, which hydrates to Fe₂O₃ · xH₂O."
    ],
    "extraPoints": [
      "• <strong>Zinc Protection Principle:</strong> Zinc has a more negative standard electrode potential (E° = −0.76 V) than iron (E° = −0.44 V). Therefore, zinc oxidizes preferentially, protecting the iron even if the protective coating is scratched."
    ],
    "reactions": [
      {
        "name": "Electrochemical Mechanism of Rusting of Iron",
        "isNamedReaction": false,
        "equation": "2 Fe(s) + O₂(g) + 4 H⁺(aq) ⟶ 2 Fe²⁺(aq) + 2 H₂O(l) ──(+ O₂, H₂O)──> Fe₂O₃ · xH₂O (Rust)",
        "howItWorks": "Iron metal oxidizes at an anodic site, releasing electrons through the bulk metal to the cathodic water-air interface where oxygen is reduced. Dissolved Fe²⁺ oxidizes further to deposit hydrated iron(III) oxide (rust).",
        "diagramId": "rxn-rusting-corrosion"
      }
    ],
    "oswaalMnemonic": {
      "title": "Zinc Dies to Save Iron: Sacrificial Galvanization",
      "phrase": "E°_Zn (−0.76 V) is more negative than E°_Fe (−0.44 V) ⟶ Zinc oxidizes preferentially, shielding iron even if scratched!",
      "explanation": "Zinc acts as a sacrificial anode because its lower reduction potential makes it corrode before iron."
    },
    "commonlyMadeErrors": [
      {
        "error": "Writing that galvanization protects iron because zinc is harder than iron.",
        "tip": "Zinc protects electrochemically! It has more negative E° (−0.76 V vs −0.44 V), so it oxidizes preferentially.",
        "penalty": "1 mark lost on scientific reasoning."
      }
    ],
    "assertionReason": {
      "assertion": "Galvanized iron does not rust even if the protective zinc coating is scratched.",
      "reason": "Zinc has a more negative reduction potential than iron and corrodes preferentially as a sacrificial anode.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Lower standard reduction potential makes zinc oxidize preferentially over iron."
    },
    "examTrend": {
      "pattern": "3-Mark Electrochemical Mechanism of Rusting [CBSE 2023, 2020, 2018, 2016]",
      "pastYears": "CBSE 2023, 2020, 2018",
      "highYieldPrompt": "Explain the electrochemical theory of rusting of iron with anodic, cathodic, and overall reactions."
    }
  },
  "chem-sub-4-1": {
    "definitions": [
      {
        "term": "Transition Element",
        "definition": "An element which has an incompletely filled d-subshell (d¹ to d⁹) either in its ground state electronic configuration or in any one of its common oxidation states."
      },
      {
        "term": "Non-Typical Transition Elements",
        "definition": "Elements of Group 12 (Zinc, Cadmium, and Mercury) which have completely filled d-subshells (d¹⁰) both in their ground elemental states and in their stable common oxidation states (+2), and are therefore not regarded as true transition elements."
      }
    ],
    "keyPoints": [
      "• <strong>General Electronic Configuration:</strong> (n−1)d¹⁻¹⁰ ns¹⁻², where (n−1) stands for penultimate shell and n is outermost shell.",
      "• <strong>Anomalous Electronic Configurations:</strong> Chromium ([Ar] 3d⁵ 4s¹) and Copper ([Ar] 3d¹⁰ 4s¹) deviate from Aufbau principle due to the extra exchange energy and symmetrical stabilization of half-filled (d⁵) and completely filled (d¹⁰) subshells.",
      "• <strong>High Enthalpies of Atomization:</strong> Transition metals possess very high enthalpies of atomization due to strong interatomic metallic bonding involving both (n−1)d and ns electrons.",
      "• <strong>Peak Melting Points:</strong> Maximum melting points and enthalpies of atomization occur near the middle of the 3d series (Cr, Mo, W) where the number of unpaired d-electrons is maximum."
    ],
    "extraPoints": [
      "• <strong>Why Copper is considered a Transition Element:</strong> In ground state, Cu has 3d¹⁰ (filled); however, in its common +2 oxidation state (Cu²⁺), it has a 3d⁹ configuration with an incompletely filled d-subshell. Hence, copper is a transition metal."
    ],
    "reactions": [],
    "oswaalMnemonic": {
      "title": "Group 12 Outsiders: Zn, Cd, Hg Have Full d-Bags",
      "phrase": "Zn, Cd, Hg have completely filled 3d¹⁰/4d¹⁰/5d¹⁰ in elemental and +2 states ⟶ NOT true transition metals!",
      "explanation": "Transition elements strictly require incompletely filled d-orbitals in ground or common oxidation states."
    },
    "commonlyMadeErrors": [
      {
        "error": "Stating that copper is not a transition element because its atom has 3d¹⁰ 4s¹.",
        "tip": "Copper IS a transition element because in its common +2 oxidation state (Cu²⁺), it has incompletely filled 3d⁹ configuration!",
        "penalty": "1 mark lost in definition question."
      }
    ],
    "assertionReason": {
      "assertion": "Zinc, cadmium, and mercury are not regarded as typical transition elements.",
      "reason": "They have fully filled (n−1)d¹⁰ orbitals both in their ground states and in their common oxidation states.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Absence of partially filled d-orbitals excludes them from strict transition metal definition."
    },
    "examTrend": {
      "pattern": "1-Mark MCQ / 2-Mark Give-Reason [CBSE 2023, 2020, 2019]",
      "pastYears": "CBSE 2023, 2020, 2019",
      "highYieldPrompt": "Why are Zn, Cd, and Hg not considered transition metals? Why is Copper considered a transition metal?"
    }
  },
  "chem-sub-4-2": {
    "definitions": [
      {
        "term": "Variable Oxidation State",
        "definition": "The ability of transition metals to exhibit multiple oxidation states due to the comparable energy levels of (n−1)d and ns electrons, allowing both to participate in chemical bonding."
      },
      {
        "term": "Electrode Potential Trend (E° M²⁺/M)",
        "definition": "The net thermodynamic standard reduction potential governed by the interplay of enthalpy of sublimation, first and second ionization enthalpies, and enthalpy of hydration: Δ_subH + IE₁ + IE₂ + Δ_hydH."
      }
    ],
    "keyPoints": [
      "• <strong>Maximum Oxidation State:</strong> Manganese (Mn) exhibits the highest oxidation state in the 3d series (+7 in KMnO₄), corresponding to the loss/sharing of all 3d⁵ and 4s² electrons.",
      "• <strong>Stability of +2 vs +3:</strong> Fe²⁺ ([Ar]3d⁶) oxidizes readily to Fe³⁺ ([Ar]3d⁵) because half-filled d⁵ is exceptionally stable; Mn³⁺ ([Ar]3d⁴) is a strong oxidizing agent because it readily reduces to stable Mn²⁺ ([Ar]3d⁵).",
      "• <strong>The Copper Anomaly (Positive E°):</strong> Cu is the only 3d metal with a positive E°_M²⁺/M (+0.34 V). The exceptionally high enthalpy of atomization and high ionization enthalpy of copper are not compensated by its hydration enthalpy."
    ],
    "extraPoints": [
      "• <strong>Disproportionation of Cu⁺:</strong> In aqueous solution, Cu⁺ is unstable and disproportionates: 2 Cu⁺(aq) ⟶ Cu²⁺(aq) + Cu(s). This is because the much more negative hydration enthalpy of Cu²⁺ easily compensates for the second ionization enthalpy of copper."
    ],
    "reactions": [],
    "oswaalMnemonic": {
      "title": "Manganese Maxes +7, Copper Disproportionates in Water",
      "phrase": "Mn reaches +7 (shares all 3d⁵ 4s² electrons) | Cu⁺ disproportionates to Cu²⁺ + Cu (Hydration energy of Cu²⁺ pays the bill!)",
      "explanation": "Hydration enthalpy of Cu²⁺ is vastly more negative than Cu⁺, compensating for second ionization enthalpy."
    },
    "commonlyMadeErrors": [
      {
        "error": "Claiming Cu⁺ is more stable in water because it has filled 3d¹⁰ configuration.",
        "tip": "In aqueous solution, Cu²⁺ (3d⁹) is MORE stable than Cu⁺ (3d¹⁰) because its high hydration enthalpy overcomes second ionization energy!",
        "penalty": "Direct deduction of 1 mark on stability comparison."
      }
    ],
    "assertionReason": {
      "assertion": "Cu⁺ ion is not stable in aqueous solution and readily disproportionates into Cu²⁺ and Cu.",
      "reason": "The hydration enthalpy of Cu²⁺ is much more negative than that of Cu⁺, which compensates for second ionization energy of Cu.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Lattice and hydration thermodynamics favor Cu²⁺ in water despite Cu⁺ having filled 3d¹⁰ subshell."
    },
    "examTrend": {
      "pattern": "2-Mark Give-Reason [CBSE 2023, 2022, 2020, 2018]",
      "pastYears": "CBSE 2023, 2022, 2020",
      "highYieldPrompt": "Explain why E° for Cu²⁺/Cu is positive (+0.34 V). Why is Cu²⁺ more stable than Cu⁺ in aqueous solution?"
    }
  },
  "chem-sub-4-3": {
    "definitions": [
      {
        "term": "Paramagnetism",
        "definition": "The magnetic property arising from the presence of one or more unpaired electrons in atomic or ionic orbitals, causing the substance to be attracted into an external magnetic field."
      },
      {
        "term": "Spin-Only Magnetic Moment (μ_s)",
        "definition": "The quantitative measure of magnetic moment calculated exclusively from unpaired electron spins: μ_s = √(n(n + 2)) Bohr Magnetons (BM), where n is the number of unpaired electrons."
      },
      {
        "term": "d-d Transition & Crystal Field Splitting",
        "definition": "The absorption of specific wavelengths of visible light causing an electron to transition from a lower d-orbital energy level (t_2g) to an upper level (e_g), reflecting the complementary color."
      }
    ],
    "keyPoints": [
      "• <strong>Color Requirement:</strong> An ion exhibits color in aqueous solution only if it contains partially filled d-orbitals (d¹ to d⁹). Ions with d⁰ (Sc³⁺, Ti⁴⁺) or d¹⁰ (Zn²⁺, Cu⁺) are completely colorless.",
      "• <strong>Maximum Magnetic Moment in 3d Series:</strong> Mn²⁺ and Fe³⁺ have d⁵ configuration with 5 unpaired electrons, giving μ_s = √(5(5+2)) = √35 ≈ 5.92 BM.",
      "• <strong>Charge-Transfer Color Exception:</strong> KMnO₄ (deep purple) and K₂Cr₂O₇ (orange) have transition metals in d⁰ states (Mn⁷⁺ and Cr⁶⁺); their intense colors are NOT due to d-d transitions, but due to Charge-Transfer Spectra (ligand-to-metal charge transfer from O²⁻ to metal)."
    ],
    "extraPoints": [
      "• <strong>Exam Trap on Color:</strong> If asked why KMnO₄ is colored even though Mn⁷⁺ is 3d⁰, always write: \"Color is due to Ligand-to-Metal Charge Transfer (LMCT), not d-d transitions.\""
    ],
    "reactions": [],
    "oswaalMnemonic": {
      "title": "Spin-Only Formula & Permanganate Charge Transfer",
      "phrase": "μ = √(n(n+2)) BM | KMnO₄ and K₂Cr₂O₇ are d⁰ yet colored due to Charge-Transfer Spectra (NOT d-d transitions!)",
      "explanation": "Ions with d⁰ or d¹⁰ lack d-d transitions. Intense color in MnO₄⁻ and Cr₂O₇²⁻ comes from ligand-to-metal charge transfer."
    },
    "commonlyMadeErrors": [
      {
        "error": "Writing that KMnO₄ is colored purple due to d-d transitions.",
        "tip": "Mn⁷⁺ in KMnO₄ has d⁰ configuration (zero d-electrons)! Its purple color is strictly due to Ligand-to-Metal Charge Transfer (LMCT).",
        "penalty": "Lose 1 mark on color explanation."
      }
    ],
    "assertionReason": {
      "assertion": "Potassium permanganate (KMnO₄) has an intense dark purple color.",
      "reason": "The purple color of KMnO₄ is due to d-d electronic transitions in manganese.",
      "correctOption": "Option (c): Assertion is true, but Reason is false.",
      "explanation": "Mn⁷⁺ has 3d⁰ configuration with no d-electrons; color originates from ligand-to-metal charge transfer (LMCT)."
    },
    "examTrend": {
      "pattern": "2-Mark Magnetic Moment / Color Reason [CBSE 2023, 2021, 2019, 2017]",
      "pastYears": "CBSE 2023, 2021, 2019",
      "highYieldPrompt": "Calculate the spin-only magnetic moment of M²⁺ ion (Z = 27). Why is Sc³⁺ colorless while Ti³⁺ is colored?"
    }
  },
  "chem-sub-4-4": {
    "definitions": [
      {
        "term": "Potassium Permanganate (KMnO₄)",
        "definition": "A dark purple crystalline inorganic compound containing manganese in the +7 oxidation state, acting as a powerful oxidizing agent in acidic, neutral, and alkaline media."
      },
      {
        "term": "Potassium Dichromate (K₂Cr₂O₇)",
        "definition": "An orange crystalline inorganic compound containing chromium in the +6 oxidation state, widely used as a primary standard in volumetric redox titrations."
      }
    ],
    "keyPoints": [
      "• <strong>KMnO₄ Industrial Preparation:</strong> Step 1: Fusion of pyrolusite ore (MnO₂) with KOH in the presence of air (O₂) yields green potassium manganate (K₂MnO₄): 2 MnO₂ + 4 KOH + O₂ ⟶ 2 K₂MnO₄ + 2 H₂O; Step 2: Electrolytic or acid disproportionation gives purple KMnO₄: 3 MnO₄²⁻ + 4 H⁺ ⟶ 2 MnO₄⁻ + MnO₂ + 2 H₂O.",
      "• <strong>K₂Cr₂O₇ Industrial Preparation:</strong> Step 1: Fusion of chromite ore (FeCr₂O₄) with Na₂CO₃ in air yields yellow sodium chromate: 4 FeCr₂O₄ + 8 Na₂CO₃ + 7 O₂ ⟶ 8 Na₂CrO₄ + 2 Fe₂O₃ + 8 CO₂; Step 2: Acidification with H₂SO₄ gives orange sodium dichromate: 2 Na₂CrO₄ + 2 H⁺ ⟶ Na₂Cr₂O₇ + 2 Na⁺ + H₂O; Step 3: Metathesis with KCl precipitates less soluble orange K₂Cr₂O₇.",
      "• <strong>Chromate-Dichromate pH Equilibrium:</strong> In acidic solution (pH < 7), yellow chromate converts to orange dichromate: 2 CrO₄²⁻ + 2 H⁺ ⇌ Cr₂O₇²⁻ + H₂O. In alkaline solution (pH > 7), orange dichromate reverts to yellow chromate: Cr₂O₇²⁻ + 2 OH⁻ ⇌ 2 CrO₄²⁻ + H₂O.",
      "• <strong>Oxidizing Equivalent in Acid:</strong> MnO₄⁻ + 8 H⁺ + 5e⁻ ⟶ Mn²⁺ + 4 H₂O (Change in O.S. = 5); Cr₂O₇²⁻ + 14 H⁺ + 6e⁻ ⟶ 2 Cr³⁺ + 7 H₂O (Change in O.S. = 6)."
    ],
    "extraPoints": [
      "• <strong>Why K₂Cr₂O₇ is preferred over Na₂Cr₂O₇ in Volumetric Analysis:</strong> Na₂Cr₂O₇ is highly hygroscopic (absorbs moisture from air), whereas K₂Cr₂O₇ is non-hygroscopic and can be weighed out precisely as a primary standard."
    ],
    "reactions": [
      {
        "name": "Manufacture of Potassium Permanganate (KMnO₄)",
        "isNamedReaction": false,
        "equation": "2 MnO₂ + 4 KOH + O₂ ⟶ 2 K₂MnO₄ (Green) + 2 H₂O ──(4 H⁺)──> 2 KMnO₄ (Purple) + MnO₂↓ + 2 H₂O",
        "howItWorks": "Black pyrolusite ore is fused with potassium hydroxide and air to generate green manganate ion [MnO₄]²⁻, which undergoes acid-catalyzed disproportionation into deep purple permanganate [MnO₄]⁻.",
        "diagramId": "rxn-kmno4-prep"
      },
      {
        "name": "Manufacture of Potassium Dichromate (K₂Cr₂O₇)",
        "isNamedReaction": false,
        "equation": "4 FeCr₂O₄ + 8 Na₂CO₃ + 7 O₂ ⟶ 8 Na₂CrO₄ + 2 Fe₂O₃ + 8 CO₂ ──(H⁺)──> Na₂Cr₂O₇ ──(KCl)──> K₂Cr₂O₇",
        "howItWorks": "Chromite ore is roasted with sodium carbonate to form yellow sodium chromate, acidified to orange sodium dichromate, and reacted with potassium chloride to crystallize out orange potassium dichromate.",
        "diagramId": "rxn-k2cr2o7-prep"
      },
      {
        "name": "Chromate ⇌ Dichromate pH-Dependent Equilibrium",
        "isNamedReaction": false,
        "equation": "2 CrO₄²⁻ (Yellow) + 2 H⁺ ⇌ Cr₂O₇²⁻ (Orange) + H₂O &nbsp;|&nbsp; Cr₂O₇²⁻ + 2 OH⁻ ⇌ 2 CrO₄²⁻ + H₂O",
        "howItWorks": "Yellow tetrahedral chromate ions condense in acidic medium via a 126° bridging oxygen to form orange dichromate ions. Addition of alkali neutralizes H⁺, shifting the equilibrium back to yellow chromate.",
        "diagramId": "rxn-chromate-dichromate"
      }
    ],
    "oswaalMnemonic": {
      "title": "KMnO4 Medium n-Factor: 1 5 3 Rule",
      "phrase": "Alkaline = 1 (MnO₄⁻ ⟶ MnO₄²⁻) | Acidic = 5 (MnO₄⁻ ⟶ Mn²⁺) | Neutral = 3 (MnO₄⁻ ⟶ MnO₂)",
      "explanation": "The change in oxidation state of manganese dictates equivalent weight: Acidic (n=5, M/5), Neutral (n=3, M/3)."
    },
    "commonlyMadeErrors": [
      {
        "error": "Confusing the colors of manganate and permanganate.",
        "tip": "Manganate (MnO₄²⁻) is DARK GREEN; Permanganate (MnO₄⁻) is DEEP PURPLE!",
        "penalty": "0.5 mark deduction on preparation step."
      }
    ],
    "assertionReason": {
      "assertion": "Orange color of potassium dichromate solution turns yellow when alkali is added.",
      "reason": "In alkaline medium, orange dichromate ions (Cr₂O₇²⁻) convert into yellow chromate ions (CrO₄²⁻).",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Addition of OH⁻ shifts equilibrium: Cr₂O₇²⁻ + 2 OH⁻ ⇌ 2 CrO₄²⁻ + H₂O."
    },
    "examTrend": {
      "pattern": "3-Mark / 5-Mark Preparation & Redox Equations [CBSE 2023, 2022, 2020, 2019, 2018]",
      "pastYears": "CBSE 2023, 2022, 2020",
      "highYieldPrompt": "Write balanced ionic equations for action of acidified KMnO₄ on (i) Fe²⁺, (ii) Oxalate ion, (iii) Iodide ion."
    }
  },
  "chem-sub-4-5": {
    "definitions": [
      {
        "term": "Interstitial Compounds",
        "definition": "Non-stoichiometric compounds formed when small non-metal atoms (H, B, C, N) are trapped inside the interstitial void spaces of transition metal crystal lattices."
      },
      {
        "term": "Alloys",
        "definition": "Homogeneous solid solutions of two or more metals, formed easily by transition metals because of their nearly identical atomic radii (within 15% of each other)."
      }
    ],
    "keyPoints": [
      "• <strong>Four Key Properties of Interstitial Compounds:</strong> (1) Very high melting points (higher than pure metals); (2) Extremely hard (some borides approach diamond hardness); (3) Retain full metallic electrical and thermal conductivity; (4) Chemically inert.",
      "• <strong>Why Transition Metals are Excellent Catalysts:</strong> (1) Ability to adopt multiple variable oxidation states and form unstable intermediates; (2) Large surface area that provides vacant d-orbitals for reactant adsorption and bond activation.",
      "• <strong>Industrial Catalyst Examples:</strong> Finely divided Fe in Haber process (NH₃); V₂O₅ in Contact process (H₂SO₄); Ni in hydrogenation of vegetable oils; TiCl₄ + Al(C₂H₅)₃ (Ziegler-Natta catalyst) in ethene polymerization.",
      "• <strong>Famous Alloys:</strong> Brass (Cu + Zn); Bronze (Cu + Sn); Stainless steel (Fe + Cr + Ni + C)."
    ],
    "extraPoints": [
      "• <strong>Hume-Rothery Rule:</strong> Transition metals form alloys readily because their atomic radii differ by less than 15%, allowing one metal atom to readily replace another in the crystal lattice."
    ],
    "reactions": [],
    "oswaalMnemonic": {
      "title": "Hole Fillers & Metallic Blends",
      "phrase": "Interstitial: Small atoms (H, C, N) plug lattice gaps ⟶ Super hard & high melting point! | Alloys: 15% radius rule allows seamless mixing.",
      "explanation": "Trapped interstitial non-metals prevent metal plane sliding, conferring hardness and chemical inertia."
    },
    "commonlyMadeErrors": [
      {
        "error": "Writing that interstitial compounds lose their metallic conductivity.",
        "tip": "Interstitial compounds RETAIN full metallic electrical and thermal conductivity while gaining extreme hardness!",
        "penalty": "0.5 mark deduction."
      }
    ],
    "assertionReason": {
      "assertion": "Transition metals readily form interstitial compounds with small non-metal atoms like H, C, and N.",
      "reason": "Small non-metal atoms get trapped inside the interstitial void spaces of transition metal crystal lattices.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Small non-metal atoms fit into voids without disrupting the host metallic bond framework."
    },
    "examTrend": {
      "pattern": "2-Mark Definition & Properties [CBSE 2023, 2020, 2018]",
      "pastYears": "CBSE 2023, 2020, 2018",
      "highYieldPrompt": "What are interstitial compounds? State two characteristics. Why do transition metals act as good catalysts?"
    }
  },
  "chem-sub-4-6": {
    "definitions": [
      {
        "term": "Lanthanoid Contraction",
        "definition": "The steady, gradual decrease in atomic and ionic radii of the lanthanoid elements from Lanthanum (La³⁺, 103 pm) to Lutetium (Lu³⁺, 86 pm) with increasing atomic number."
      },
      {
        "term": "Mischmetall",
        "definition": "A pyrophoric lanthanoid alloy consisting of ~95% lanthanoid metals (primarily Cerium and Lanthanum), ~5% iron, and trace amounts of S, C, and Ca, used in making lighter flints and bullets."
      }
    ],
    "keyPoints": [
      "• <strong>Cause of Lanthanoid Contraction:</strong> The imperfect, diffuse shielding of 4f electrons. As atomic number increases by +1, the nuclear charge increases while 4f electrons shield poorly, pulling the outer 5s and 5p shells inward.",
      "• <strong>Three Crucial Consequences:</strong> (1) Similarity in Size of 4d and 5d Elements: Zr (160 pm) and Hf (159 pm) have virtually identical radii (\"chemical twins\"), making separation very difficult; (2) Decreasing Basicity of Hydroxides: Covalent character increases from La(OH)₃ to Lu(OH)₃; therefore La(OH)₃ is most basic and Lu(OH)₃ is least basic; (3) High Density of 5d Series: Masses double while volumes remain small, leading to extremely high densities in Os and Ir.",
      "• <strong>Common +3 Oxidation State:</strong> All lanthanoids show steady +3 oxidation state. Ce⁴⁺ is a strong oxidizing agent because it readily reverts to stable +3; Eu²⁺ is a strong reducing agent ([Xe] 4f⁷ half-filled)."
    ],
    "extraPoints": [
      "• <strong>Chemical Twins Question:</strong> \"Why do Zirconium (Zr) and Hafnium (Hf) have identical chemical properties?\" Due to lanthanoid contraction, their covalent radii are almost identical (160 pm vs 159 pm), so they occur together in nature and are extremely difficult to separate."
    ],
    "reactions": [
      {
        "name": "Lanthanoid Contraction in 4f Series (La³⁺ to Lu³⁺)",
        "isNamedReaction": true,
        "equation": "La³⁺ (103 pm) ──(+14 nuclear charges, poor 4f shielding)──> Lu³⁺ (86 pm) &nbsp; [Δr = 17 pm contraction]",
        "howItWorks": "Because 4f orbitals are diffuse in shape, they shield nuclear attraction poorly. With each successive proton added, the effective nuclear charge felt by outer electrons increases steadily, contracting the entire ion.",
        "diagramId": "rxn-lanthanoid-contraction"
      }
    ],
    "oswaalMnemonic": {
      "title": "4f Shielding is Flimsy: Zr & Hf are Twins",
      "phrase": "Diffuse 4f orbitals shield poorly ⟶ Nuclear charge pulls shells inward ⟶ Zr (160 pm) and Hf (159 pm) become chemical twins!",
      "explanation": "Imperfect shielding of 4f electrons causes steady radius shrinkage from La to Lu, equalizing 4d and 5d sizes."
    },
    "commonlyMadeErrors": [
      {
        "error": "Attributing lanthanoid contraction to shielding of 5d electrons.",
        "tip": "The cause is specifically the IMPERFECT SHIELDING OF 4f ELECTRONS by one another!",
        "penalty": "1 mark lost on cause definition."
      }
    ],
    "assertionReason": {
      "assertion": "Zirconium (Zr) and Hafnium (Hf) have almost identical atomic and ionic radii.",
      "reason": "The filling of 4f subshell before 5d series results in lanthanoid contraction.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Lanthanoid contraction precisely balances the expected size expansion from 4d to 5d."
    },
    "examTrend": {
      "pattern": "3-Mark Definitive Question [CBSE 2023, 2020, 2019, 2018, 2015, 2013]",
      "pastYears": "CBSE 2023, 2020, 2019, 2018",
      "highYieldPrompt": "What is lanthanoid contraction? What is its cause? State two important consequences."
    }
  },
  "chem-sub-4-7": {
    "definitions": [
      {
        "term": "Actinoids",
        "definition": "The 14 radioactive elements following Actinium (from Thorium Z=90 to Lawrencium Z=103) characterized by progressive filling of the 5f inner subshell."
      },
      {
        "term": "Actinoid Contraction",
        "definition": "The gradual decrease in size of actinoid atoms and ions with increasing atomic number, which is quantitatively greater than lanthanoid contraction due to even poorer shielding by 5f electrons."
      }
    ],
    "keyPoints": [
      "• <strong>Wider Range of Oxidation States:</strong> Actinoids exhibit a much greater variety of oxidation states (up to +7 in Np and Pu) than lanthanoids because the energy levels of 5f, 6d, and 7s orbitals are of comparable magnitude.",
      "• <strong>Greater Actinoid Contraction:</strong> The contraction in size from element to element is greater in actinoids because 5f orbitals have poorer shielding efficacy than 4f orbitals.",
      "• <strong>Radioactivity:</strong> All actinoid elements are radioactive, and those beyond Uranium (Z > 92, Transuranic elements) are synthetic and short-lived.",
      "• <strong>Complex Formation:</strong> Actinoids show a much higher tendency to form complex compounds than lanthanoids due to their smaller ionic size and higher charge densities."
    ],
    "extraPoints": [
      "• <strong>Lanthanoids vs Actinoids Comparison:</strong> Lanthanoids exhibit mostly +3 (with occasional +2 and +4), have lesser complexing ability, and are non-radioactive (except Promethium). Actinoids exhibit multiple states up to +7, complex readily, and are all radioactive."
    ],
    "reactions": [],
    "oswaalMnemonic": {
      "title": "5f Energy Overlap Unleashes +7 in Actinoids",
      "phrase": "5f, 6d, 7s have comparable energies ⟶ Actinoids reach up to +7! (Lanthanoids stuck mostly at +3)",
      "explanation": "Small energy gaps in actinoids allow 5f, 6d, and 7s electrons to participate in bonding, giving wide oxidation states."
    },
    "commonlyMadeErrors": [
      {
        "error": "Stating that actinoids have smaller contraction than lanthanoids.",
        "tip": "Actinoid contraction is GREATER than lanthanoid contraction because 5f orbitals have poorer shielding efficacy than 4f orbitals!",
        "penalty": "1 mark lost on comparison question."
      }
    ],
    "assertionReason": {
      "assertion": "Actinoids exhibit a greater number of oxidation states than lanthanoids.",
      "reason": "The energy difference between 5f, 6d, and 7s orbitals is very small, allowing all to participate in bonding.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Comparable orbital energies in actinoids allow valence expansion up to +7 in Np and Pu."
    },
    "examTrend": {
      "pattern": "2-Mark Comparison Table [CBSE 2022, 2019, 2017]",
      "pastYears": "CBSE 2022, 2019, 2017",
      "highYieldPrompt": "Give two points of difference between lanthanoids and actinoids with respect to oxidation states and chemical reactivity."
    }
  },
  "chem-sub-6-1": {
    "definitions": [
      {
        "term": "Haloalkanes (Alkyl Halides)",
        "definition": "Halogen derivatives of alkanes where one or more hydrogen atoms are replaced by halogen atoms (X = F, Cl, Br, I), having general formula CₙH₂ₙ₊₁X."
      },
      {
        "term": "Allylic Halides",
        "definition": "Compounds in which the halogen atom is bonded to an sp³-hybridized carbon atom adjacent to a carbon-carbon double bond (C=C—C—X)."
      },
      {
        "term": "Vinylic Halides",
        "definition": "Compounds in which the halogen atom is bonded directly to an sp²-hybridized carbon atom of a carbon-carbon double bond (C=C—X)."
      },
      {
        "term": "Benzylic Halides",
        "definition": "Compounds in which the halogen atom is bonded to an sp³-hybridized carbon atom directly attached to an aromatic benzene ring (Ar—CH₂—X)."
      },
      {
        "term": "Aryl Halides (Haloarenes)",
        "definition": "Compounds in which the halogen atom is bonded directly to an sp²-hybridized carbon atom of an aromatic ring (Ar—X)."
      }
    ],
    "keyPoints": [
      "• <strong>Classification by Degree:</strong> Primary (1°), Secondary (2°), and Tertiary (3°) classification is determined by the number of carbon atoms attached to the carbon bearing the halogen.",
      "• <strong>Resonance Activation:</strong> Allylic and Benzylic halides show enhanced reactivity in nucleophilic substitution due to resonance stabilization of their carbocation intermediates.",
      "• <strong>Resonance Deactivation:</strong> Vinylic and Aryl halides are extremely unreactive towards nucleophilic substitution due to partial double bond character from resonance and sp² hybridization."
    ],
    "extraPoints": [
      "• <strong>Common Exam Trap:</strong> Students frequently confuse Allylic (halogen on sp³ carbon NEXT to double bond) with Vinylic (halogen DIRECTLY on sp² double-bonded carbon).",
      "• <strong>IUPAC Priority Rule:</strong> Numbering gives lowest locant to double/triple bond over halogen substituents because unsaturation has higher priority."
    ],
    "reactions": [],
    "oswaalMnemonic": {
      "title": "Allylic is Neighborly, Vinylic is Direct",
      "phrase": "Allylic = Halogen on sp³ carbon NEXT to double bond (C=C—C—X) | Vinylic = Halogen DIRECTLY on double bond carbon (C=C—X)",
      "explanation": "Allylic halides are reactive due to resonance-stabilized allylic carbocations; vinylic halides are unreactive due to partial double bond character."
    },
    "commonlyMadeErrors": [
      {
        "error": "Confusing Allylic with Vinylic halides in classification questions.",
        "tip": "Allylic carbon is sp³ hybridized adjacent to double bond; Vinylic carbon is sp² hybridized part of double bond!",
        "penalty": "0.5 mark deduction per structure."
      }
    ],
    "assertionReason": {
      "assertion": "Allyl chloride undergoes nucleophilic substitution reactions more readily than n-propyl chloride.",
      "reason": "Allyl carbocation intermediate formed after chloride departure is stabilized by resonance.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Delocalization of positive charge across two carbons stabilizes the allylic carbocation."
    },
    "examTrend": {
      "pattern": "1-Mark IUPAC / Classification [CBSE 2023, 2020, 2019]",
      "pastYears": "CBSE 2023, 2020, 2019",
      "highYieldPrompt": "Classify the following as allylic, vinylic, benzylic, or aryl halides: (i) CH₂=CH—CH(Br)—CH₃, (ii) C₆H₅—CH₂—Cl."
    }
  },
  "chem-sub-6-2": {
    "definitions": [
      {
        "term": "Polar C—X Bond",
        "definition": "A covalent bond between carbon and a halogen where electronegativity difference polarizes electron density towards the halogen, creating a partial positive charge on carbon and negative on halogen: C(δ+)—X(δ−)."
      },
      {
        "term": "Dipole Moment (μ)",
        "definition": "The product of partial electric charge and distance between the separated charges: μ = q × d, measured in Debye units (D)."
      }
    ],
    "keyPoints": [
      "• <strong>Bond Length Order:</strong> C—F (139 pm) < C—Cl (178 pm) < C—Br (193 pm) < C—I (214 pm) — increases with halogen atomic size.",
      "• <strong>Bond Enthalpy Order:</strong> C—F (452 kJ/mol) > C—Cl (351 kJ/mol) > C—Br (293 kJ/mol) > C—I (234 kJ/mol) — C—I is easiest to cleave.",
      "• <strong>Dipole Moment Anomaly:</strong> CH₃Cl (1.860 D) > CH₃F (1.847 D) > CH₃Br (1.830 D) > CH₃I (1.636 D).",
      "• <strong>Why CH₃Cl has higher Dipole Moment than CH₃F:</strong> Although fluorine is more electronegative than chlorine, the C—Cl bond length is considerably greater than C—F (178 pm vs 139 pm). In the formula μ = q × d, the larger bond distance in CH₃Cl more than compensates for the smaller partial charge, yielding a higher dipole moment."
    ],
    "extraPoints": [
      "• <strong>High-Frequency Board Question:</strong> \"Why is the dipole moment of chloromethane higher than that of fluoromethane?\" State formula μ = q × d and explain the compensating effect of C—Cl bond length."
    ],
    "reactions": [],
    "oswaalMnemonic": {
      "title": "Chloromethane Length Overcomes Fluorine Charge",
      "phrase": "μ = q × d: CH₃Cl (1.86 D) beats CH₃F (1.84 D) because C—Cl bond length is 28% longer!",
      "explanation": "Although fluorine has higher charge q, chlorine’s longer bond distance d overcompensates, giving CH₃Cl a higher dipole moment."
    },
    "commonlyMadeErrors": [
      {
        "error": "Predicting that CH₃F has higher dipole moment than CH₃Cl solely based on fluorine’s electronegativity.",
        "tip": "Dipole moment is charge times DISTANCE (μ = q × d). The larger C—Cl distance outweighs the charge difference!",
        "penalty": "1 mark lost on dipole ranking."
      }
    ],
    "assertionReason": {
      "assertion": "The dipole moment of chloromethane is higher than that of fluoromethane.",
      "reason": "The C—Cl bond length is significantly larger than the C—F bond length, compensating for the smaller electronegativity of chlorine.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Product q × d is quantitatively larger for chloromethane."
    },
    "examTrend": {
      "pattern": "2-Mark Give-Reason [CBSE 2023, 2021, 2019, 2017]",
      "pastYears": "CBSE 2023, 2021, 2019",
      "highYieldPrompt": "Why is the dipole moment of chloromethane higher than that of fluoromethane?"
    }
  },
  "chem-sub-6-3": {
    "definitions": [
      {
        "term": "Darzens Process",
        "definition": "The reaction of alcohols with thionyl chloride (SOCl₂) in the presence of pyridine to prepare pure alkyl chlorides."
      },
      {
        "term": "Finkelstein Reaction",
        "definition": "A halogen exchange reaction where an alkyl chloride or alkyl bromide is treated with sodium iodide (NaI) in dry acetone to yield an alkyl iodide."
      },
      {
        "term": "Swarts Reaction",
        "definition": "A halogen exchange reaction where an alkyl chloride or bromide is heated with heavy metallic fluorides (AgF, Hg₂F₂, CoF₃) to produce alkyl fluorides."
      },
      {
        "term": "Sandmeyer Reaction",
        "definition": "The replacement of the diazonium group in benzene diazonium chloride by chlorine or bromine using cuprous halides (Cu₂Cl₂/HCl or Cu₂Br₂/HBr)."
      }
    ],
    "keyPoints": [
      "• <strong>Best Method for Alkyl Chlorides:</strong> Reaction with SOCl₂ is preferred over PCl₃ and PCl₅ because the by-products (SO₂ and HCl) are escapable gases, leaving behind virtually pure alkyl chloride.",
      "• <strong>Driving Force of Finkelstein Reaction:</strong> NaCl and NaBr have very low solubility in dry acetone and precipitate out, shifting the equilibrium forward according to Le Chatelier’s principle.",
      "• <strong>Heavy Metal Fluorination:</strong> Direct fluorination is violently exothermic; hence Swarts reaction with AgF or Hg₂F₂ is the standard laboratory method for fluoroalkanes.",
      "• <strong>Sandmeyer vs Gattermann:</strong> Sandmeyer uses Cu₂X₂ in HX and gives much higher yields than Gattermann reaction which uses metallic copper powder and HX."
    ],
    "extraPoints": [
      "• <strong>Preparation of Iodobenzene:</strong> Unlike chloro and bromo derivatives, iodobenzene requires no cuprous halide; simply warming the diazonium salt with aqueous KI affords iodobenzene in high yield."
    ],
    "reactions": [
      {
        "name": "Darzens Process (Thionyl Chloride Method)",
        "isNamedReaction": true,
        "equation": "R—OH + SOCl₂ ──(Pyridine)──> R—Cl + SO₂↑ + HCl↑",
        "howItWorks": "Alcohol oxygen attacks the sulfur of thionyl chloride, displacing chloride to form an alkyl chlorosulfite. Internal collapse or backside attack by chloride releases pure alkyl chloride along with escaping gaseous SO₂ and HCl.",
        "diagramId": "rxn-darzens-thionyl"
      },
      {
        "name": "Finkelstein Reaction (Halogen Exchange to Iodide)",
        "isNamedReaction": true,
        "equation": "R—X + NaI ──(Dry Acetone)──> R—I + NaX↓  (where X = Cl, Br)",
        "howItWorks": "Nucleophilic SN2 displacement where dissolved iodide ion (I⁻) attacks the alkyl halide, precipitating out insoluble NaCl or NaBr and driving the conversion to alkyl iodide.",
        "diagramId": "rxn-finkelstein-swarts"
      },
      {
        "name": "Swarts Reaction (Halogen Exchange to Fluoride)",
        "isNamedReaction": true,
        "equation": "CH₃—Br + AgF ⟶ CH₃—F + AgBr↓",
        "howItWorks": "Halogen exchange between alkyl bromide/chloride and metallic fluoride driven by the high lattice enthalpy and precipitation of silver bromide (AgBr).",
        "diagramId": "rxn-finkelstein-swarts"
      },
      {
        "name": "Sandmeyer Reaction (Synthesis of Aryl Halides)",
        "isNamedReaction": true,
        "equation": "Ar—NH₂ ──(NaNO₂ + HCl, 0–5 °C)──> Ar—N₂⁺Cl⁻ ──(Cu₂Cl₂ / HCl)──> Ar—Cl + N₂↑",
        "howItWorks": "Aniline is diazotized with nitrous acid to form benzene diazonium chloride, which readily decomposes in the presence of cuprous salts with loss of N₂ gas to yield chlorobenzene or bromobenzene.",
        "diagramId": "rxn-sandmeyer"
      }
    ],
    "oswaalMnemonic": {
      "title": "Darzens Escapes, Finkelstein Precipitates, Swarts Fluorinates",
      "phrase": "Darzens: SO₂↑ & HCl↑ bubble away leaving PURE R-Cl | Finkelstein: NaI + Acetone drops NaCl↓ | Swarts: AgF puts F on R",
      "explanation": "SOCl₂ reaction produces only escapable gaseous by-products, giving high purity without requiring fractional distillation."
    },
    "commonlyMadeErrors": [
      {
        "error": "Confusing Finkelstein reagent (NaI in dry acetone) with Swarts reagent (AgF / metallic fluorides).",
        "tip": "Finkelstein prepares IODIDES (using NaI); Swarts prepares FLUORIDES (using AgF)!",
        "penalty": "0 marks for mismatched reagent."
      }
    ],
    "assertionReason": {
      "assertion": "Thionyl chloride (SOCl₂) method is preferred over PCl₅ and PCl₃ for preparing alkyl chlorides from alcohols.",
      "reason": "The by-products of the reaction (SO₂ and HCl) are escapable gases, leaving behind pure alkyl chloride.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Spontaneous gas evolution leaves pure liquid alkyl chloride with no complicated separation needed."
    },
    "examTrend": {
      "pattern": "2-Mark Named Reaction / Give-Reason [CBSE 2023, 2022, 2020, 2018]",
      "pastYears": "CBSE 2023, 2022, 2020",
      "highYieldPrompt": "Why is thionyl chloride preferred for preparing alkyl chlorides? Write equations for Finkelstein and Swarts reactions."
    }
  },
  "chem-sub-6-4": {
    "definitions": [
      {
        "term": "Boiling Point Trend in Alkyl Halides",
        "definition": "The variation of boiling temperature with molecular weight and surface area, governed by the strength of intermolecular dipole-dipole and van der Waals attractions."
      },
      {
        "term": "Crystal Packing Effect in Para-Isomers",
        "definition": "The enhanced thermodynamic lattice stability of para-disubstituted benzenes resulting from symmetrical molecular symmetry, allowing tighter packing in the crystal grid."
      }
    ],
    "keyPoints": [
      "• <strong>Boiling Point with Halogen:</strong> For the same alkyl group: R—I > R—Br > R—Cl > R—F, because molecular mass and polarizability increase, strengthening van der Waals forces.",
      "• <strong>Branching Effect in Isomers:</strong> Boiling point DECREASES with branching: n-butyl bromide > sec-butyl bromide > tert-butyl bromide. Branching makes the molecule more spherical, reducing contact surface area.",
      "• <strong>Melting Point of Para-Isomer:</strong> Para-dichlorobenzene has a significantly higher melting point (~323 K) than ortho (~256 K) and meta (~249 K) isomers because its symmetrical shape fits into the crystal lattice more snugly.",
      "• <strong>Water Insolubility:</strong> Haloalkanes are virtually insoluble in water because the energy released when haloalkane-water attractions form is insufficient to break the strong existing water-water hydrogen bonds."
    ],
    "extraPoints": [
      "• <strong>Density Order:</strong> Alkyl iodides > Alkyl bromides > Alkyl chlorides > Hydrocarbons (density increases with halogen atomic mass and number of halogen atoms)."
    ],
    "reactions": [],
    "oswaalMnemonic": {
      "title": "Branching Spheres Boil Low, Symmetrical Para Melts High",
      "phrase": "Branching = Spherical = Lower surface area = Lower Boiling Point! | Para-Dichlorobenzene = Symmetric crystal packing = High Melting Point!",
      "explanation": "Branching decreases van der Waals contact area. Symmetrical para isomer packs tightly into the crystal lattice."
    },
    "commonlyMadeErrors": [
      {
        "error": "Writing that haloalkanes are soluble in water because they have polar C—X bonds.",
        "tip": "Haloalkanes are INSOLUBLE in water because they cannot form hydrogen bonds with water or break existing water H-bonds!",
        "penalty": "1 mark lost on solubility give-reason."
      }
    ],
    "assertionReason": {
      "assertion": "Para-dichlorobenzene has a higher melting point than ortho and meta isomers.",
      "reason": "The symmetrical structure of the para-isomer fits more snugly into the crystal lattice, leading to stronger intermolecular lattice forces.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Symmetry enables dense packing, requiring more heat energy to break the solid lattice."
    },
    "examTrend": {
      "pattern": "2-Mark Give-Reason [CBSE 2023, 2020, 2019, 2017]",
      "pastYears": "CBSE 2023, 2020, 2019",
      "highYieldPrompt": "Why does para-dichlorobenzene have a higher melting point and lower solubility than its ortho and meta isomers?"
    }
  },
  "chem-sub-6-5": {
    "definitions": [
      {
        "term": "SN2 Mechanism (Bimolecular Nucleophilic Substitution)",
        "definition": "A single-step, concerted substitution reaction where bond breaking and bond making occur simultaneously via a pentacoordinate transition state, following second-order kinetics."
      },
      {
        "term": "SN1 Mechanism (Unimolecular Nucleophilic Substitution)",
        "definition": "A two-step substitution reaction where the rate-determining step is heterolytic cleavage of the C—X bond to form a planar carbocation intermediate, following first-order kinetics."
      },
      {
        "term": "Walden Inversion",
        "definition": "The complete stereochemical inversion of configuration at a chiral carbon atom that occurs during an SN2 backside attack, akin to an umbrella turning inside out in a gale."
      },
      {
        "term": "Racemization",
        "definition": "The process of converting an optically active compound into an equimolar mixture of enantiomers (d and l forms), resulting in total loss of optical activity."
      }
    ],
    "keyPoints": [
      "• <strong>SN2 Reactivity Order:</strong> Methyl > 1° > 2° > 3°. Governed strictly by steric hindrance around the alpha carbon (tertiary alkyl halides are virtually unreactive in SN2).",
      "• <strong>SN1 Reactivity Order:</strong> 3° > 2° > 1° > Methyl. Governed strictly by carbocation intermediate stability (3° carbocation stabilized by 9 hyperconjugative structures and +I effects).",
      "• <strong>Solvent Preferences:</strong> SN2 prefers polar aprotic solvents (Acetone, DMSO, DMF) which solvate cations leaving naked reactive nucleophiles; SN1 prefers polar protic solvents (H₂O, EtOH, AcOH) which stabilize both carbocation and departing halide anion.",
      "• <strong>Stereochemical Outcome:</strong> SN2 yields 100% Walden Inversion; SN1 yields partial or complete Racemization (50% retention + 50% inversion)."
    ],
    "extraPoints": [
      "• <strong>Allylic and Benzylic Halides:</strong> Show exceptionally high reactivity in BOTH SN1 (resonance-stabilized carbocations) and SN2 mechanisms."
    ],
    "reactions": [
      {
        "name": "SN2 Nucleophilic Substitution Mechanism",
        "isNamedReaction": true,
        "equation": "HO⁻ + CH₃—Cl ⟶ [HO ··· CH₃ ··· Cl]‡ ⟶ HO—CH₃ + Cl⁻",
        "howItWorks": "Concerted one-step pathway where nucleophile attacks from 180° opposite the leaving group, passing through a planar pentacoordinate transition state and producing complete Walden inversion.",
        "diagramId": "rxn-sn2-mechanism"
      },
      {
        "name": "SN1 Nucleophilic Substitution Mechanism",
        "isNamedReaction": true,
        "equation": "(CH₃)₃C—Br ──(Slow, rds)──> [(CH₃)₃C]⁺ + Br⁻ ──(Fast, +H₂O)──> (CH₃)₃C—OH (Racemic)",
        "howItWorks": "Two-step pathway initiated by slow heterolytic ionization yielding an sp² planar carbocation, which is subsequently captured with equal probability from either face, producing racemization.",
        "diagramId": "rxn-sn1-mechanism"
      }
    ],
    "oswaalMnemonic": {
      "title": "2 for 1-Step Backside, 1 for 2-Step Carbocation",
      "phrase": "SN2 = 2 in rate law, 1 concerted step, Walden inversion, favors 1° | SN1 = 1 in rate law, 2 steps, planar carbocation, Racemic, favors 3°",
      "explanation": "SN2 proceeds via backside attack with steric hindrance control. SN1 proceeds via carbocation intermediate stability."
    },
    "commonlyMadeErrors": [
      {
        "error": "Predicting that tertiary alkyl halides react via SN2.",
        "tip": "Tertiary alkyl halides NEVER undergo SN2 substitution due to severe steric crowding; they undergo SN1 or elimination!",
        "penalty": "1 mark lost on reactivity ordering."
      }
    ],
    "assertionReason": {
      "assertion": "SN2 reaction of optically active 2-bromooctane proceeds with complete inversion of configuration.",
      "reason": "The nucleophile attacks the chiral carbon atom from the side opposite to the departing bromide leaving group.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "180° backside attack inverts configuration like an umbrella in a gale."
    },
    "examTrend": {
      "pattern": "3-Mark Mechanism / Reactivity Order [CBSE 2023, 2022, 2020, 2019, 2018]",
      "pastYears": "CBSE 2023, 2022, 2020",
      "highYieldPrompt": "Which alkyl halide in each pair reacts faster in SN2: (i) 1-bromobutane or 2-bromobutane? (ii) (CH₃)₃C—Br or (CH₃)₂CH—Br? Give reasons."
    }
  },
  "chem-sub-6-6": {
    "definitions": [
      {
        "term": "β-Elimination (Dehydrohalogenation)",
        "definition": "A reaction in which an alkyl halide with hydrogen on its beta-carbon is heated with alcoholic potassium hydroxide, eliminating HX to form an alkene."
      },
      {
        "term": "Saytzeff’s Rule (Zaitsev’s Rule)",
        "definition": "In dehydrohalogenation reactions, the preferred major product is that alkene which has the greater number of alkyl groups attached to the doubly bonded carbon atoms."
      }
    ],
    "keyPoints": [
      "• <strong>Elimination vs Substitution Reagents:</strong> Alcoholic KOH (alc. KOH) acts as a strong base promoting β-elimination; Aqueous KOH (aq. KOH) contains hydrated OH⁻ acting as a nucleophile promoting substitution to alcohols.",
      "• <strong>Major Product Criterion:</strong> The more highly substituted alkene is more stable due to greater number of hyperconjugative α-hydrogens.",
      "• <strong>Example of 2-Bromobutane:</strong> Reacting 2-bromobutane with alc. KOH yields 81% But-2-ene (major Saytzeff product, 6 α-H) and 19% But-1-ene (minor Hofmann product, 2 α-H)."
    ],
    "extraPoints": [
      "• <strong>Steric Bulk of Base:</strong> If a very bulky base is used (e.g. Potassium tert-butoxide), it abstracts the more accessible proton from the less hindered methyl carbon, giving the Hofmann product as major."
    ],
    "reactions": [
      {
        "name": "Saytzeff β-Elimination (Dehydrohalogenation)",
        "isNamedReaction": true,
        "equation": "CH₃—CH₂—CH(Br)—CH₃ ──(alc. KOH, Δ)──> CH₃—CH=CH—CH₃ (81% Major) + CH₃—CH₂—CH=CH₂ (19% Minor)",
        "howItWorks": "Base abstracts a proton from the more substituted β-carbon (possessing fewer hydrogens), shifting C—H electrons to form the double bond and ejecting bromide ion.",
        "diagramId": "rxn-saytzeff-elimination"
      }
    ],
    "oswaalMnemonic": {
      "title": "Saytzeff: The Poor in Hydrogen Get Poorer",
      "phrase": "Alcoholic KOH = Alkene (β-Elimination) | Aqueous KOH = Alcohol (Nucleophilic Substitution) | Saytzeff takes H from carbon with fewer hydrogens!",
      "explanation": "Alcoholic base abstracts a proton from the more substituted beta carbon to yield the more stable alkene with maximum hyperconjugation."
    },
    "commonlyMadeErrors": [
      {
        "error": "Confusing alcoholic KOH with aqueous KOH.",
        "tip": "Alcoholic KOH acts as a BASE promoting elimination to ALKENES; Aqueous KOH acts as a NUCLEOPHILE promoting substitution to ALCOHOLS!",
        "penalty": "Direct deduction of full marks on reagent questions."
      }
    ],
    "assertionReason": {
      "assertion": "Dehydrohalogenation of 2-bromobutane gives but-2-ene as the major product.",
      "reason": "According to Saytzeff’s rule, the more substituted and more stable alkene is predominantly formed.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "But-2-ene has 6 hyperconjugative alpha-hydrogens compared to only 2 in but-1-ene."
    },
    "examTrend": {
      "pattern": "2-Mark Reaction / Rule Statement [CBSE 2023, 2020, 2018, 2016]",
      "pastYears": "CBSE 2023, 2020, 2018",
      "highYieldPrompt": "State Saytzeff’s rule. Write the major and minor products formed when 2-bromobutane is heated with alcoholic KOH."
    }
  },
  "chem-sub-6-7": {
    "definitions": [
      {
        "term": "Dow’s Process",
        "definition": "The industrial conversion of chlorobenzene into phenol by heating with aqueous sodium hydroxide at 623 K and 300 atm, followed by acidification."
      },
      {
        "term": "Wurtz-Fittig Reaction",
        "definition": "A coupling reaction where an equimolar mixture of an aryl halide and an alkyl halide is treated with sodium metal in dry ether to yield an alkylarene."
      },
      {
        "term": "Fittig Reaction",
        "definition": "A coupling reaction where two molecules of an aryl halide are treated with sodium metal in dry ether to produce a diaryl compound (such as biphenyl)."
      }
    ],
    "keyPoints": [
      "• <strong>Extreme Unreactivity of Aryl Halides in Nucleophilic Substitution:</strong> Caused by: (1) Resonance effect (lone pair delocalization imparts partial double bond character to C—Cl bond); (2) sp² hybridized carbon (higher s-character holds electrons tighter); (3) Instability of phenyl cation; (4) Electrostatic repulsion between nucleophile and electron-rich aromatic ring.",
      "• <strong>Activation by Electron-Withdrawing Groups (-NO₂):</strong> Presence of strong electron-withdrawing groups at ortho and para positions stabilizes the carbanionic Meisenheimer intermediate, drastically facilitating nucleophilic substitution (2,4,6-trinitrochlorobenzene hydrolyzes with mere warm water!).",
      "• <strong>Electrophilic Substitution Orientation:</strong> Halogen is ortho-para directing (due to +R effect stabilizing ortho/para carbocation) but deactivating (due to strong −I inductive effect)."
    ],
    "extraPoints": [
      "• <strong>Why Meta position NO₂ does not activate:</strong> The negative charge in the Meisenheimer intermediate is never delocalized onto the carbon bearing the meta-NO₂ group."
    ],
    "reactions": [
      {
        "name": "Dow’s Process (Hydrolysis of Chlorobenzene)",
        "isNamedReaction": true,
        "equation": "C₆H₅—Cl + 2 NaOH ──(623 K, 300 atm)──> C₆H₅—O⁻Na⁺ ──(dil. HCl)──> C₆H₅—OH (Phenol) + NaCl",
        "howItWorks": "Under drastic conditions (623 K and 300 atm), hydroxide overcomes the partial double bond character of the aryl C—Cl bond to yield sodium phenoxide, which acidifies to phenol.",
        "diagramId": "rxn-dows-process"
      },
      {
        "name": "Coupling Reactions: Wurtz, Wurtz-Fittig & Fittig",
        "isNamedReaction": true,
        "equation": "Wurtz-Fittig: C₆H₅—Cl + CH₃—Cl + 2 Na ──(Dry Ether)──> C₆H₅—CH₃ (Toluene) + 2 NaCl &nbsp;|&nbsp; Fittig: 2 C₆H₅—Cl + 2 Na ⟶ C₆H₅—C₆H₅ (Biphenyl) + 2 NaCl",
        "howItWorks": "Sodium metal donates single electrons to form radical or organosodium intermediates in dry ether, coupling aryl and alkyl fragments cleanly.",
        "diagramId": "rxn-wurtz-fittig"
      }
    ],
    "oswaalMnemonic": {
      "title": "Resonance Locks Chlorobenzene, Nitro Unlocks It",
      "phrase": "Chlorobenzene C—Cl has partial double bond character (resonance) ⟶ Needs 623 K & 300 atm! | Add ortho/para NO₂ ⟶ Water hydrolyzes with gentle warm!",
      "explanation": "Electron-withdrawing nitro groups stabilize the negative carbanion intermediate at ortho/para positions, facilitating nucleophilic substitution."
    },
    "commonlyMadeErrors": [
      {
        "error": "Placing the activating NO₂ group at the meta position.",
        "tip": "NO₂ group activates aryl halides ONLY at ORTHO and PARA positions! Meta position does not disperse negative charge in the intermediate.",
        "penalty": "1 mark lost on mechanism reasoning."
      }
    ],
    "assertionReason": {
      "assertion": "Chlorobenzene is extremely unreactive towards nucleophilic substitution compared to chloroethane.",
      "reason": "The C—Cl bond in chlorobenzene acquires partial double bond character due to resonance with the benzene ring.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Partial double bond character shortens and strengthens the bond, impeding nucleophilic displacement."
    },
    "examTrend": {
      "pattern": "3-Mark Give-Reason / Dow’s Process [CBSE 2023, 2022, 2020, 2018, 2017]",
      "pastYears": "CBSE 2023, 2022, 2020",
      "highYieldPrompt": "Give reasons: (i) Haloarenes are much less reactive than haloalkanes towards nucleophilic substitution. (ii) Presence of NO₂ group at ortho/para position increases reactivity."
    }
  },
  "chem-sub-6-8": {
    "definitions": [
      {
        "term": "Polyhalogen Compounds",
        "definition": "Carbon compounds containing more than one halogen atom per molecule, widely used as industrial solvents, anesthetics, refrigerants, and pesticides."
      },
      {
        "term": "Phosgene (Carbonyl Chloride, COCl₂)",
        "definition": "An extremely poisonous, suffocating gas produced by the photochemical oxidation of chloroform in the presence of air and sunlight."
      },
      {
        "term": "Freons (Chlorofluorocarbons, CFCs)",
        "definition": "Chlorofluorocarbon compounds of methane and ethane that are extremely stable, unreactive, non-corrosive, non-toxic, and liquefiable under mild pressure."
      },
      {
        "term": "DDT (p,p’-Dichlorodiphenyltrichloroethane)",
        "definition": "A non-biodegradable chlorinated hydrocarbon insecticide that persists in the environment and bioaccumulates through food chains."
      }
    ],
    "keyPoints": [
      "• <strong>Chloroform Storage Precaution:</strong> Stored in dark brown bottles completely filled to the brim to prevent light and air from oxidizing it into lethal phosgene: 2 CHCl₃ + O₂ ⟶ 2 COCl₂ + 2 HCl.",
      "• <strong>Ethanol Quenching:</strong> 1% ethanol is added to chloroform to convert any phosgene formed into harmless diethyl carbonate: COCl₂ + 2 C₂H₅OH ⟶ (C₂H₅O)₂C=O + 2 HCl.",
      "• <strong>Iodoform Antiseptic Action:</strong> The antiseptic action of iodoform (CHI₃) is not due to iodoform itself, but due to the slow liberation of free elemental iodine.",
      "• <strong>Freon-12 (CCl₂F₂):</strong> Manufactured via Swarts reaction from CCl₄; acts as a catalytic agent for stratospheric ozone layer depletion."
    ],
    "extraPoints": [
      "• <strong>DDT Environmental Ban:</strong> DDT is extremely fat-soluble and resistant to biological metabolism, causing eggshell thinning in predatory birds and bioaccumulating in human tissues."
    ],
    "reactions": [
      {
        "name": "Photo-Oxidation of Chloroform to Phosgene",
        "isNamedReaction": false,
        "equation": "2 CHCl₃ + O₂ ──(Light / Air)──> 2 COCl₂ (Phosgene) + 2 HCl ──(+ 2 EtOH)──> (EtO)₂C=O (Diethyl Carbonate)",
        "howItWorks": "Sunlight initiates free radical oxidation of chloroform by atmospheric oxygen, producing toxic carbonyl chloride (phosgene). Addition of 1% ethanol traps phosgene as non-toxic diethyl carbonate.",
        "diagramId": "rxn-phosgene-chloroform"
      }
    ],
    "oswaalMnemonic": {
      "title": "Brown Bottle Shield: Phosgene Poison Quenched by Ethanol",
      "phrase": "Sunlight + O₂ oxidizes CHCl₃ to COCl₂ (Phosgene) | 1% Ethanol traps phosgene as non-toxic Diethyl Carbonate!",
      "explanation": "Stored in dark amber bottles to exclude light and air, with 1% ethanol added to neutralize any formed phosgene."
    },
    "commonlyMadeErrors": [
      {
        "error": "Writing that chloroform is stored in brown bottles to prevent evaporation.",
        "tip": "Brown bottles prevent PHOTO-OXIDATION to toxic PHOSGENE (COCl₂)! Must mention light-induced oxidation.",
        "penalty": "0 marks for generic evaporation answer."
      }
    ],
    "assertionReason": {
      "assertion": "Chloroform is stored in closed dark brown bottles completely filled to the brim.",
      "reason": "Chloroform gets oxidized by atmospheric oxygen in the presence of light to form poisonous phosgene gas.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Amber glass filters out UV light and full filling excludes oxygen, suppressing phosgene formation."
    },
    "examTrend": {
      "pattern": "2-Mark Give-Reason / Structure [CBSE 2023, 2020, 2019, 2016]",
      "pastYears": "CBSE 2023, 2020, 2019",
      "highYieldPrompt": "Why is chloroform stored in dark-coloured bottles filled to the brim? Write the reaction for formation of phosgene."
    }
  },
  "chem-sub-7-1": {
    "definitions": [
      {
        "term": "Alcohols",
        "definition": "Organic compounds formed when a hydrogen atom in an aliphatic hydrocarbon is replaced by a hydroxyl (—OH) group bonded to an sp³ carbon."
      },
      {
        "term": "Phenols",
        "definition": "Organic compounds containing an —OH group bonded directly to an sp² hybridized carbon of an aromatic benzene ring."
      },
      {
        "term": "Ethers",
        "definition": "Compounds having general formula R—O—R’ or Ar—O—R, regarded as dialkyl/diaryl derivatives of water or monoalkyl derivatives of alcohols."
      }
    ],
    "keyPoints": [
      "• <strong>Classification by Hydroxyl Count:</strong> Monohydric (1 —OH, e.g. Ethanol); Dihydric (2 —OH, e.g. Ethane-1,2-diol / Glycol); Trihydric (3 —OH, e.g. Propane-1,2,3-triol / Glycerol).",
      "• <strong>Degree Classification:</strong> Primary (1°), Secondary (2°), and Tertiary (3°) based on the carbon holding the —OH group.",
      "• <strong>Ethers IUPAC Rule:</strong> Named as Alkoxyalkanes. The larger alkyl chain is chosen as the parent alkane; the smaller alkyl group along with the oxygen forms the alkoxy substituent (e.g. C₂H₅—O—CH₃ is 1-Methoxyethane)."
    ],
    "extraPoints": [
      "• <strong>Functional Isomerism:</strong> Monohydric alcohols and ethers having the same molecular formula (CₙH₂ₙ₊₂O) are functional isomers (e.g. Ethanol and Dimethyl ether)."
    ],
    "reactions": [],
    "oswaalMnemonic": {
      "title": "Alkoxy Rules the Small, Alkane Rules the Long",
      "phrase": "Ether IUPAC: Smaller chain + Oxygen = ALKOXY | Larger chain = ALKANE (e.g. CH₃—O—C₂H₅ is Methoxyethane)",
      "explanation": "The larger alkyl group forms the root alkane, and the smaller alkyl group is treated as an alkoxy substituent."
    },
    "commonlyMadeErrors": [
      {
        "error": "Naming CH₃—O—C₂H₅ as Ethoxymethane.",
        "tip": "IUPAC rule: The longer chain (ethane) is the parent! Correct name is Methoxyethane.",
        "penalty": "1 mark lost on IUPAC nomenclature."
      }
    ],
    "assertionReason": {
      "assertion": "Ethanol and methoxymethane have the same molecular formula C₂H₆O but different boiling points.",
      "reason": "Ethanol molecules are associated through intermolecular hydrogen bonding whereas methoxymethane molecules are not.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Hydrogen bonding elevates ethanol boiling point to 351 K compared to 248 K for dimethyl ether."
    },
    "examTrend": {
      "pattern": "1-Mark IUPAC / Isomerism [CBSE 2023, 2021, 2019]",
      "pastYears": "CBSE 2023, 2021, 2019",
      "highYieldPrompt": "Write the IUPAC names of: (i) CH₃—CH(OH)—CH₂—OCH₃, (ii) C₆H₅—O—CH₂—CH₃."
    }
  },
  "chem-sub-7-2": {
    "definitions": [
      {
        "term": "Acid-Catalyzed Hydration of Alkenes",
        "definition": "The addition of water to an alkene in the presence of dilute acid (H₂SO₄) following Markovnikov’s rule to yield an alcohol."
      },
      {
        "term": "Hydroboration-Oxidation",
        "definition": "A two-step reaction where diborane (B₂H₆) adds to an alkene followed by alkaline hydrogen peroxide oxidation, producing an alcohol corresponding to anti-Markovnikov hydration."
      },
      {
        "term": "Industrial Preparation from Cumene",
        "definition": "The commercial manufacture of phenol and acetone by the air oxidation of cumene (isopropylbenzene) followed by dilute acid hydrolysis."
      }
    ],
    "keyPoints": [
      "• <strong>Markovnikov vs Anti-Markovnikov:</strong> Acid-catalyzed hydration yields Markovnikov product with possibility of carbocation rearrangement; Hydroboration-oxidation gives anti-Markovnikov alcohol without any carbocation rearrangement.",
      "• <strong>Grignard Synthesis of Alcohols:</strong> Methanal (HCHO) + RMgX ⟶ 1° Alcohol; Other Aldehydes (R’CHO) + RMgX ⟶ 2° Alcohol; Ketones (R’COR”) + RMgX ⟶ 3° Alcohol.",
      "• <strong>Economic Value of Cumene Process:</strong> Cumene process is the dominant commercial route because it yields acetone as an economically valuable co-product in equimolar amounts."
    ],
    "extraPoints": [
      "• <strong>Grignard Warning:</strong> All Grignard reactions must be carried out in strictly anhydrous dry ether because RMgX reacts instantly with traces of water to form alkanes: RMgX + H₂O ⟶ R—H + Mg(OH)X."
    ],
    "reactions": [
      {
        "name": "Cumene to Phenol Industrial Process",
        "isNamedReaction": true,
        "equation": "C₆H₅—CH(CH₃)₂ + O₂ ⟶ C₆H₅—C(CH₃)₂—OOH ──(dil. H₂SO₄)──> C₆H₅—OH (Phenol) + CH₃—CO—CH₃ (Acetone)",
        "howItWorks": "Cumene is oxidized by air into cumene hydroperoxide, which undergoes acid-catalyzed cleavage and phenyl rearrangement to yield phenol along with acetone as a co-product.",
        "diagramId": "rxn-cumene-to-phenol"
      }
    ],
    "oswaalMnemonic": {
      "title": "Cumene Air Oxidation: Acetone Pays the Rent",
      "phrase": "Cumene + Air ⟶ Cumene Hydroperoxide ──(H⁺)──> Phenol + Acetone (Valuable byproduct makes it dominant industrial process)",
      "explanation": "Hydroperoxide rearrangement yields equimolar acetone, making cumene the most cost-effective commercial phenol synthesis."
    },
    "commonlyMadeErrors": [
      {
        "error": "Writing that acid-catalyzed hydration of propene gives propan-1-ol.",
        "tip": "Acid-catalyzed hydration follows MARKOVNIKOV’s rule yielding Propan-2-ol! For Propan-1-ol, use Hydroboration-Oxidation.",
        "penalty": "1 mark lost on synthesis conversion."
      }
    ],
    "assertionReason": {
      "assertion": "Hydroboration-oxidation of propene yields propan-1-ol as the major product.",
      "reason": "The overall reaction corresponds to addition of water across the double bond contrary to Markovnikov’s rule.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Anti-Markovnikov regioselectivity yields primary propan-1-ol without carbocation rearrangement."
    },
    "examTrend": {
      "pattern": "3-Mark Industrial Prep / Conversions [CBSE 2023, 2022, 2020, 2019, 2018]",
      "pastYears": "CBSE 2023, 2022, 2020",
      "highYieldPrompt": "Explain the manufacture of phenol from cumene with balanced equations. How do you convert propene into propan-1-ol?"
    }
  },
  "chem-sub-7-3": {
    "definitions": [
      {
        "term": "Intermolecular Hydrogen Bonding in Alcohols",
        "definition": "The electrostatic attraction between the polarized hydroxyl hydrogen (δ+) of one alcohol molecule and the electronegative oxygen (δ−) of a neighboring alcohol molecule."
      },
      {
        "term": "Acidity of Phenols",
        "definition": "The ability of phenols to donate a proton to form a phenoxide ion, which is exceptionally stabilized by resonance delocalization of the negative charge into the benzene ring."
      }
    ],
    "keyPoints": [
      "• <strong>Boiling Point Comparison:</strong> Alcohols have substantially higher boiling points than isomeric ethers and hydrocarbons of comparable molecular mass due to extensive intermolecular hydrogen bonding.",
      "• <strong>Why Phenol is more Acidic than Alcohols:</strong> (1) In phenol, the —OH is bonded to an sp² carbon which is more electronegative than sp³ carbon in alcohols, weakening the O—H bond; (2) The phenoxide ion is resonance-stabilized over 5 canonical structures, whereas alkoxide ion (RO⁻) has no resonance and is destabilized by +I effect of alkyl group.",
      "• <strong>Substituent Effects on Phenol Acidity:</strong> Electron-Withdrawing Groups (—NO₂) at ortho and para positions strongly INCREASE acidity (Picric acid, 2,4,6-trinitrophenol, is stronger than carbonic acid!); Electron-Donating Groups (—CH₃, —OCH₃) DECREASE acidity."
    ],
    "extraPoints": [
      "• <strong>Ortho-Nitrophenol vs Para-Nitrophenol:</strong> Ortho-nitrophenol exhibits INTRAmolecular H-bonding (chelation) making it steam-volatile; Para-nitrophenol exhibits INTERmolecular H-bonding, giving it a higher boiling point and making it non-steam volatile. They are separated by steam distillation."
    ],
    "reactions": [],
    "oswaalMnemonic": {
      "title": "Phenoxide Resonance Trumps Alkoxide Inductive",
      "phrase": "Phenol loses H⁺ ⟶ Phenoxide ion stabilized over 5 resonance rings | Alcohol loses H⁺ ⟶ Alkoxide destabilized by +I alkyl push!",
      "explanation": "Negative charge in phenoxide is delocalized into the aromatic pi-cloud, making phenol a million times more acidic than alcohols."
    },
    "commonlyMadeErrors": [
      {
        "error": "Writing that ortho-nitrophenol has higher boiling point than para-nitrophenol.",
        "tip": "Ortho-nitrophenol has INTRAmolecular H-bonding (chelation) and is steam-volatile; Para-nitrophenol has INTERmolecular H-bonding and has a HIGHER boiling point!",
        "penalty": "1 mark deduction on physical property comparison."
      }
    ],
    "assertionReason": {
      "assertion": "Phenol is more acidic than ethanol.",
      "reason": "Phenoxide ion formed by deprotonation is resonance stabilized, whereas ethoxide ion is destabilized by +I effect of ethyl group.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Delocalization of negative charge over benzene ring enhances phenoxide stability."
    },
    "examTrend": {
      "pattern": "3-Mark Acidity Ranking & Steam Distillation [CBSE 2023, 2022, 2020, 2019, 2017]",
      "pastYears": "CBSE 2023, 2022, 2020",
      "highYieldPrompt": "Arrange the following in increasing order of acid strength: Phenol, p-Nitrophenol, p-Cresol, Ethanol. Explain why ortho-nitrophenol is steam volatile."
    }
  },
  "chem-sub-7-4": {
    "definitions": [
      {
        "term": "Lucas Test",
        "definition": "A diagnostic chemical test used to distinguish between primary, secondary, and tertiary alcohols based on the relative rate of formation of insoluble alkyl chloride turbidity using Lucas reagent (conc. HCl + anh. ZnCl₂)."
      },
      {
        "term": "Catalytic Dehydrogenation",
        "definition": "The oxidation of alcohols by passing their vapours over heated copper gauze at 573 K, converting 1° to aldehydes, 2° to ketones, and dehydrating 3° to alkenes."
      },
      {
        "term": "Esterification",
        "definition": "The reversible reaction of an alcohol or phenol with a carboxylic acid, acid anhydride, or acid chloride in the presence of concentrated H₂SO₄ to yield an ester and water."
      }
    ],
    "keyPoints": [
      "• <strong>Lucas Test Turbidity Observations:</strong> 3° Alcohols produce immediate cloudiness/turbidity; 2° Alcohols produce turbidity within 5 minutes; 1° Alcohols produce no turbidity at room temperature (turbidity appears only on prolonged heating).",
      "• <strong>Copper at 573 K (Examiner Favorite):</strong> 1° Alcohol ⟶ Aldehyde + H₂; 2° Alcohol ⟶ Ketone + H₂; 3° Alcohol ⟶ Alkene + H₂O (Tertiary alcohols do NOT undergo dehydrogenation; they undergo DEHYDRATION due to absence of alpha-hydrogen!).",
      "• <strong>Oxidation with PCC vs KMnO₄:</strong> Pyridinium chlorochromate (PCC in CH₂Cl₂) stops oxidation cleanly at the aldehyde stage without oxidizing further to carboxylic acid; Acidified KMnO₄ or K₂Cr₂O₇ oxidizes 1° alcohols completely to carboxylic acids."
    ],
    "extraPoints": [
      "• <strong>Aspirin Synthesis:</strong> Salicylic acid + Acetic anhydride ──(H⁺)──> Acetylsalicylic acid (Aspirin) + Acetic acid."
    ],
    "reactions": [
      {
        "name": "Lucas Test for Distinguishing 1°, 2°, 3° Alcohols",
        "isNamedReaction": true,
        "equation": "R—OH + HCl ──(anh. ZnCl₂)──> R—Cl↓ (Turbidity) + H₂O",
        "howItWorks": "Anhydrous ZnCl₂ coordinates with the alcohol oxygen to weaken the C—O bond. Tertiary alcohols rapidly form stable 3° carbocations producing immediate cloudiness, whereas 1° alcohols fail to react at room temperature.",
        "diagramId": "rxn-lucas-test"
      },
      {
        "name": "Catalytic Dehydrogenation over Hot Copper at 573 K",
        "isNamedReaction": true,
        "equation": "1°: RCH₂OH ──(Cu, 573K)──> RCHO + H₂ &nbsp;|&nbsp; 2°: R₂CHOH ──(Cu, 573K)──> R₂CO + H₂ &nbsp;|&nbsp; 3°: (CH₃)₃COH ──(Cu, 573K)──> (CH₃)₂C=CH₂ + H₂O",
        "howItWorks": "Primary and secondary alcohols lose two hydrogen atoms across the C—O bond to form carbonyls. Tertiary alcohols lack an alpha-hydrogen and instead eliminate a molecule of water to produce an alkene.",
        "diagramId": "rxn-cu-dehydrogenation"
      }
    ],
    "oswaalMnemonic": {
      "title": "Lucas Clocks Turbidity, Cu at 573 K Dehydrates 3°",
      "phrase": "Lucas Test: 3° immediate cloud | 2° in 5 min | 1° stays clear! | Hot Cu at 573 K: 1° ⟶ Aldehyde, 2° ⟶ Ketone, 3° ⟶ ALKENE (Elimination!)",
      "explanation": "Tertiary alcohols lack an alpha-hydrogen, so passing over hot copper causes dehydration to alkene instead of dehydrogenation."
    },
    "commonlyMadeErrors": [
      {
        "error": "Writing that tertiary alcohols undergo dehydrogenation to give ketones over Cu at 573 K.",
        "tip": "Tertiary alcohols have NO alpha-hydrogen! Over Cu at 573 K, they undergo DEHYDRATION yielding 2-methylpropene (alkene)!",
        "penalty": "Direct deduction of 1 full mark."
      }
    ],
    "assertionReason": {
      "assertion": "Tertiary alcohols give turbidity immediately with Lucas reagent at room temperature.",
      "reason": "Tertiary alcohols react via SN1 mechanism forming a highly stable tertiary carbocation intermediate.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Stable 3° carbocation rapidly reacts with chloride ion to precipitate insoluble alkyl chloride."
    },
    "examTrend": {
      "pattern": "3-Mark Distinction Test & Reagent Action [CBSE 2023, 2022, 2020, 2019, 2018]",
      "pastYears": "CBSE 2023, 2022, 2020",
      "highYieldPrompt": "How will you distinguish between 1°, 2°, and 3° alcohols using Lucas reagent and catalytic dehydrogenation over hot copper?"
    }
  },
  "chem-sub-7-5": {
    "definitions": [
      {
        "term": "Kolbe’s Reaction",
        "definition": "The carboxylation of sodium phenoxide with carbon dioxide under pressure (4–7 atm) at 400 K followed by acidification to produce ortho-hydroxybenzoic acid (Salicylic acid)."
      },
      {
        "term": "Reimer-Tiemann Reaction",
        "definition": "The formylation of phenol by heating with chloroform in aqueous sodium hydroxide at 340 K followed by acidification to produce ortho-hydroxybenzaldehyde (Salicylaldehyde)."
      }
    ],
    "keyPoints": [
      "• <strong>Phenoxide Ion Activation:</strong> In both reactions, treating phenol with NaOH converts it into phenoxide ion (C₆H₅O⁻), which has a much higher electron density on the ring than neutral phenol, allowing reaction with weak electrophiles.",
      "• <strong>Electrophiles Involved:</strong> In Kolbe’s reaction, the electrophile is carbon dioxide (CO₂); in Reimer-Tiemann, the electrophile is neutral dichlorocarbene (:CCl₂), generated by base-induced alpha-elimination of chloroform.",
      "• <strong>Ortho Isomer Predominance:</strong> Ortho product predominates in both reactions due to intramolecular hydrogen bonding and chelation with sodium ion."
    ],
    "extraPoints": [
      "• <strong>Carbon Tetrachloride Variant:</strong> If CCl₄ is used instead of CHCl₃ in Reimer-Tiemann reaction, Salicylic acid is formed instead of Salicylaldehyde!"
    ],
    "reactions": [
      {
        "name": "Kolbe’s Reaction (Synthesis of Salicylic Acid)",
        "isNamedReaction": true,
        "equation": "C₆H₅—OH + NaOH ⟶ C₆H₅—O⁻Na⁺ ──(CO₂, 400 K, 4–7 atm)──> 2-Hydroxybenzoate ──(H⁺)──> Salicylic Acid",
        "howItWorks": "Phenol is converted to strongly activated sodium phenoxide, which undergoes electrophilic aromatic attack by carbon dioxide at the ortho position, yielding salicylic acid upon acidification.",
        "diagramId": "rxn-kolbe-reaction"
      },
      {
        "name": "Reimer-Tiemann Reaction (Synthesis of Salicylaldehyde)",
        "isNamedReaction": true,
        "equation": "C₆H₅—OH + CHCl₃ + 3 NaOH ──(340 K)──> Ortho-Intermediate ──(H⁺)──> Salicylaldehyde (2-Hydroxybenzaldehyde)",
        "howItWorks": "Chloroform reacts with base to generate dichlorocarbene (:CCl₂), which attacks the phenoxide ring at the ortho position to yield an intermediate benzal chloride, hydrolyzing to salicylaldehyde.",
        "diagramId": "rxn-reimer-tiemann"
      }
    ],
    "oswaalMnemonic": {
      "title": "Kolbe Adds Carbon Dioxide, Reimer-Tiemann Employs Carbene",
      "phrase": "Kolbe = Phenol + CO₂ ⟶ Salicylic Acid (Aspirin precursor) | Reimer-Tiemann = Phenol + CHCl₃ ⟶ Salicylaldehyde (via :CCl₂ carbene)",
      "explanation": "Both reactions form ortho-substituted products due to sodium chelation and intramolecular hydrogen bonding."
    },
    "commonlyMadeErrors": [
      {
        "error": "Writing that the electrophile in Reimer-Tiemann reaction is chloroform or carbon tetrachloride.",
        "tip": "The active electrophile in Reimer-Tiemann reaction is neutral DICHLOROCARBENE (:CCl₂), generated by base-induced alpha-elimination!",
        "penalty": "1 mark lost on mechanism question."
      }
    ],
    "assertionReason": {
      "assertion": "Reaction of phenol with chloroform in the presence of NaOH produces salicylaldehyde.",
      "reason": "The reaction proceeds via generation of an electrophilic intermediate, dichlorocarbene (:CCl₂).",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Dichlorocarbene acts as an electrophile that attacks the activated phenoxide ring."
    },
    "examTrend": {
      "pattern": "3-Mark Named Reaction / Conversions [CBSE 2023, 2022, 2020, 2019, 2018, 2016]",
      "pastYears": "CBSE 2023, 2022, 2020",
      "highYieldPrompt": "Write equations for (i) Kolbe’s reaction, (ii) Reimer-Tiemann reaction. How is aspirin prepared from salicylic acid?"
    }
  },
  "chem-sub-7-6": {
    "definitions": [
      {
        "term": "Williamson Ether Synthesis",
        "definition": "An SN2 substitution reaction where an alkyl halide is treated with a sodium alkoxide or sodium phenoxide to prepare symmetrical or unsymmetrical ethers."
      },
      {
        "term": "Acid-Catalyzed Dehydration of Alcohols",
        "definition": "The intermolecular condensation of primary alcohols in the presence of concentrated H₂SO₄ at 413 K to yield symmetrical ethers."
      }
    ],
    "keyPoints": [
      "• <strong>Crucial Substrate Restriction in Williamson Synthesis:</strong> The alkyl halide MUST BE PRIMARY (1°). If a 3° alkyl halide is used, the strongly basic alkoxide causes exclusive β-elimination, yielding an ALKENE instead of an ether!",
      "• <strong>Preparing Tert-Butyl Ethers:</strong> To prepare tert-butyl methyl ether, react Sodium tert-butoxide ((CH₃)₃C—O⁻Na⁺) with Methyl bromide (CH₃—Br). Never use tert-butyl bromide with sodium methoxide.",
      "• <strong>Temperature Sensitivity in Ethanol Dehydration:</strong> At 413 K (140 °C), ethanol yields Diethyl ether (C₂H₅—O—C₂H₅) via bimolecular SN2 substitution; At 443 K (170 °C), ethanol yields Ethene (CH₂=CH₂) via unimolecular elimination!"
    ],
    "extraPoints": [
      "• <strong>Aryl Halide Inapplicability:</strong> Diaryl ethers cannot be prepared by Williamson synthesis because aryl halides are unreactive towards nucleophilic attack by alkoxide."
    ],
    "reactions": [
      {
        "name": "Williamson Ether Synthesis",
        "isNamedReaction": true,
        "equation": "R—X (1° Halide) + R’—O⁻Na⁺ ⟶ R—O—R’ + NaX",
        "howItWorks": "Alkoxide ion acts as a strong nucleophile, carrying out an SN2 backside displacement on the primary alkyl halide to form an ether linkage.",
        "diagramId": "rxn-williamson-ether"
      },
      {
        "name": "Acid-Catalyzed Dehydration of Ethanol (Temperature Control)",
        "isNamedReaction": false,
        "equation": "At 413 K: 2 C₂H₅OH ──(conc. H₂SO₄)──> C₂H₅—O—C₂H₅ + H₂O &nbsp;|&nbsp; At 443 K: C₂H₅OH ──(conc. H₂SO₄)──> CH₂=CH₂ + H₂O",
        "howItWorks": "At lower temperature (413 K), protonated alcohol is attacked by a second unprotonated alcohol molecule via SN2 to form ether; at higher temperature (443 K), loss of beta-proton causes elimination to ethene.",
        "diagramId": "rxn-alcohol-dehydration"
      }
    ],
    "oswaalMnemonic": {
      "title": "Williamson 1° Halide Rule: Halide Must Be Slim!",
      "phrase": "1° Halide + Alkoxide = ETHER. 3° Halide + Alkoxide = ALKENE (Saytzeff Elimination!). 413 K = Ether, 443 K = Ethene.",
      "explanation": "Alkoxides are strong Bronsted bases; reacting with a bulky 3° halide causes elimination of HX instead of substitution."
    },
    "commonlyMadeErrors": [
      {
        "error": "Selecting tert-butyl bromide and sodium methoxide to prepare tert-butyl methyl ether.",
        "tip": "Never use 3° halide in Williamson synthesis! Use Sodium tert-butoxide + Methyl bromide (CH₃Br) to avoid elimination.",
        "penalty": "Zero awarded on synthesis reaction."
      }
    ],
    "assertionReason": {
      "assertion": "Tert-butyl methyl ether cannot be prepared by the reaction of tert-butyl bromide with sodium methoxide.",
      "reason": "Sodium methoxide is a strong base that causes dehydrohalogenation of tertiary alkyl halides to form 2-methylpropene.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Sterically hindered 3° halides undergo exclusive E2 elimination with alkoxide bases."
    },
    "examTrend": {
      "pattern": "2-Mark Reaction / Give-Reason [CBSE 2023, 2020, 2019, 2017, 2016]",
      "pastYears": "CBSE 2023, 2020, 2019",
      "highYieldPrompt": "Write the reaction and reagents for preparation of 2-methoxy-2-methylpropane by Williamson ether synthesis. Explain why tert-butyl bromide cannot be used."
    }
  },
  "chem-sub-7-7": {
    "definitions": [
      {
        "term": "Ether Cleavage by Halogen Acids (HX)",
        "definition": "The nucleophilic cleavage of the ethereal C—O bond by concentrated hydrogen halides (HI > HBr > HCl) at elevated temperatures."
      }
    ],
    "keyPoints": [
      "• <strong>Reactivity Order of Halogen Acids:</strong> HI > HBr > HCl (governed by acid strength and strong nucleophilicity of iodide).",
      "• <strong>Cleavage of Alkyl Alkyl Ethers (Primary/Secondary):</strong> Follows SN2 mechanism: the smaller alkyl group forms the alkyl halide, while the larger alkyl group forms the alcohol (e.g. Methoxyethane + HI ⟶ Methyl iodide + Ethanol).",
      "• <strong>Cleavage with Tertiary Alkyl Ethers:</strong> Follows SN1 mechanism: the tertiary group forms the more stable 3° carbocation, yielding tertiary alkyl halide and primary alcohol (e.g. (CH₃)₃C—O—CH₃ + HI ⟶ (CH₃)₃C—I + CH₃OH).",
      "• <strong>Cleavage of Alkyl Aryl Ethers (Anisole):</strong> Anisole + HI yields PHENOL and Methyl iodide (never iodobenzene and methanol!) because the aromatic sp² C—O bond has partial double bond character from resonance and cannot be cleaved."
    ],
    "extraPoints": [
      "• <strong>Excess HI Effect:</strong> If excess HI is heated with aliphatic ethers, the initially formed alcohol also reacts with HI, yielding two molecules of alkyl iodide."
    ],
    "reactions": [],
    "oswaalMnemonic": {
      "title": "HI Cleavage: Small Alkyl Takes the Iodine, Anisole Saves Phenol",
      "phrase": "Primary Ether: Smaller alkyl gets Iodine (SN2 backside) | Tertiary Ether: 3° alkyl gets Iodine (SN1 carbocation) | Anisole + HI = Phenol + CH₃I (Never Iodobenzene!)",
      "explanation": "The aromatic sp² C—O bond in anisole has partial double bond character from resonance, resisting cleavage and yielding phenol."
    },
    "commonlyMadeErrors": [
      {
        "error": "Writing that cleavage of anisole with HI yields iodobenzene and methanol.",
        "tip": "Anisole + HI gives PHENOL and METHYL IODIDE! The aromatic C—O bond cannot be broken due to partial double bond character from resonance.",
        "penalty": "1 mark lost on ether cleavage."
      }
    ],
    "assertionReason": {
      "assertion": "Reaction of anisole with concentrated HI yields phenol and methyl iodide.",
      "reason": "The phenyl-oxygen bond in anisole has partial double bond character due to resonance and is stronger than the methyl-oxygen bond.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Nucleophilic iodide attacks the less hindered sp³ methyl carbon, releasing phenol."
    },
    "examTrend": {
      "pattern": "2-Mark / 3-Mark Ether Cleavage Reactions [CBSE 2023, 2022, 2020, 2019, 2017]",
      "pastYears": "CBSE 2023, 2022, 2020",
      "highYieldPrompt": "Write the products formed when the following ethers are treated with HI: (i) Anisole, (ii) (CH₃)₃C—O—CH₃, (iii) C₂H₅—O—CH₃."
    }
  },
  "phy-sub-6-2": {
    "definitions": [
      {
        "term": "Magnetic Flux (Φ_B)",
        "definition": "The total number of magnetic field lines passing normally through a given area: Φ_B = B⃗ · A⃗ = B · A · cos θ, where θ is the angle between the magnetic field vector and the normal area vector. SI Unit: Weber (Wb) or Tesla·metre² (T·m²). Scalar quantity."
      },
      {
        "term": "Faraday’s First Law of Electromagnetic Induction",
        "definition": "Whenever the magnetic flux linked with a closed circuit changes with time, an electromotive force (EMF) is induced in the circuit. The induced EMF persists as long as the change in magnetic flux continues."
      },
      {
        "term": "Faraday’s Second Law of Electromagnetic Induction",
        "definition": "The magnitude of the induced EMF is directly proportional to the time rate of change of magnetic flux linked with the circuit: |ε| = N · |dΦ_B / dt|, where N is the number of turns in the coil."
      },
      {
        "term": "Lenz’s Law",
        "definition": "The polarity of the induced EMF is such that it tends to produce an electric current whose magnetic effect opposes the change in magnetic flux that produces it: ε = −N · (dΦ_B / dt). This is a direct manifestation of the Law of Conservation of Energy."
      },
      {
        "term": "Induced Current (I) & Induced Charge (q)",
        "definition": "In a closed circuit of resistance R, Induced Current I = ε / R = −(N / R)(dΦ_B / dt). Induced Charge q = ∫ I dt = (N / R) · ΔΦ_B. Crucial Rule: Total induced charge is completely independent of time and magnet speed!"
      }
    ],
    "keyPoints": [
      "• <strong>Three Methods to Change Magnetic Flux (Φ_B = B A cos θ):</strong> (1) By changing the magnetic field strength B; (2) By changing the active coil surface area A enclosed within the field; (3) By rotating the coil to change the angle θ between B and normal A (the core operating principle of AC generators: ε = NBAω sin ωt).",
      "• <strong>Open Circuit vs Closed Circuit:</strong> In an OPEN circuit, induced EMF is developed across the terminals, but NO induced current flows (I = 0). In a CLOSED circuit of resistance R, both induced EMF and induced current flow (I = ε / R).",
      "• <strong>Relative Motion is Essential (Stationary Magnet Trap):</strong> A stationary magnet inside a coil—even with an immense field of 100 Tesla—produces ZERO induced EMF and ZERO current because dΦ_B / dt = 0! Flux must actively change with time.",
      "• <strong>Induced Charge is Time-Independent (CBSE Top Ranker Trap):</strong> If a bar magnet is pushed rapidly into a coil (small Δt) vs pushed slowly (large Δt), the induced EMF is MUCH LARGER for rapid motion (ε ∝ 1/Δt). HOWEVER, the total induced charge q = ΔΦ_B / R is IDENTICAL in both cases, because time Δt cancels out!",
      "• <strong>Conservation of Energy in Lenz’s Law:</strong> Mechanical work done by an external agent against the opposing magnetic force (repulsion during approach, attraction during withdrawal) is converted into electrical energy, which is ultimately dissipated as Joule heat (I²Rt)."
    ],
    "extraPoints": [
      "• <strong>Faraday & Henry’s Three Landmark Experiments (1831):</strong> (1) Magnet-Coil relative motion; (2) Current-carrying primary coil C₁ moved relative to secondary coil C₂; (3) Tapping key make-and-break in stationary primary coil C₁ inducing momentary deflections in secondary C₂.",
      "• <strong>Dimensional Formulas:</strong> Magnetic Flux [Φ_B] = [M L² T⁻² A⁻¹] (Weber). Induced EMF [ε] = [M L² T⁻³ A⁻¹] (Volt). Resistance [R] = [M L² T⁻³ A⁻²] (Ohm). Charge [q] = [A T] (Coulomb).",
      "• <strong>Fleming's Right-Hand Rule:</strong> Used for straight conductor moving in a magnetic field: Stretch Thumb (Motion of conductor), Forefinger (Magnetic Field), and Central finger (Induced Current) mutually perpendicular to each other."
    ],
    "reactions": [
      {
        "name": "Faraday-Henry Electromagnetic Induction Experiment",
        "isNamedReaction": true,
        "equation": "Induced EMF: ε = −N · (dΦ_B / dt) &nbsp;|&nbsp; Induced Charge: q = (N · ΔΦ_B) / R",
        "howItWorks": "Approaching North pole increases flux into coil; coil induces counter-clockwise current creating an opposing North pole (repulsion). Withdrawing magnet creates South pole (attraction), resisting separation.",
        "diagramId": "rxn-faraday-induction"
      }
    ],
    "oswaalMnemonic": {
      "title": "Flux Change Sparks, Lenz Opposes the Cause",
      "phrase": "EMF = −N (dΦ / dt) [No Flux CHANGE = Zero EMF!] | Charge q = ΔΦ / R (Strictly INDEPENDENT of speed and time!) | Lenz = Nature resists change in flux!",
      "explanation": "A rapid motion gives high EMF but identical total charge q as a slow motion, because charge q = ΔΦ / R has no time variable."
    },
    "commonlyMadeErrors": [
      {
        "error": "Assuming that total induced charge depends on how fast the magnet is moved into the coil.",
        "tip": "Induced EMF depends on speed/time (ε = ΔΦ / Δt), but induced charge q = ΔΦ / R is STRICTLY INDEPENDENT of time and speed!",
        "penalty": "Complete loss of 2 marks on CBSE conceptual comparison questions."
      },
      {
        "error": "Believing a stationary magnet placed inside a multi-turn coil generates an electric current.",
        "tip": "Induction requires CHANGE in flux (dΦ/dt ≠ 0). For a stationary magnet (v = 0), flux is constant, so induced EMF = 0!",
        "penalty": "1 mark deduction in CBSE assertion-reason or MCQs."
      },
      {
        "error": "Omitting the negative sign in Faraday’s law: writing ε = N (dΦ/dt) without explanation.",
        "tip": "Always write ε = −N (dΦ_B / dt) and explicitly state that the negative sign represents Lenz’s law (opposition to cause).",
        "penalty": "½ mark deduction for missing vector polarity."
      }
    ],
    "assertionReason": {
      "assertion": "When a bar magnet is pushed rapidly into a coil, the galvanometer shows a larger deflection than when it is pushed slowly, but the total charge flowing through the coil is the same in both cases.",
      "reason": "Induced EMF is inversely proportional to the time taken (ε = ΔΦ / Δt), while the total charge flown q = ΔΦ / R is independent of time.",
      "correctOption": "Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
      "explanation": "Higher velocity reduces Δt, producing larger instantaneous EMF and galvanometer deflection. But total charge q = ∫ I dt = (ΔΦ / RΔt) · Δt = ΔΦ / R has no time dependency."
    },
    "examTrend": {
      "pattern": "2-Mark & 3-Mark Derivation / Conceptual Blueprint [CBSE 2024, 2023, 2022, 2020, 2018]",
      "pastYears": "CBSE 2024, 2023, 2022, 2020",
      "highYieldPrompt": "State Faraday's laws of electromagnetic induction. A rectangular coil of resistance R is moved out of a uniform magnetic field in time t. Show that the charge induced depends only on the change in flux and resistance, and is independent of time."
    }
  }
};
