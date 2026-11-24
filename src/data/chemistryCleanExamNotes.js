// ============================================================================
// D-VERSION (CLEAN UI) EXAM-FOCUSED CHEMISTRY SYLLABUS (CHAPTERS 1–10)
// ============================================================================
// Exact NCERT Chapter Numbering (Ch 1–5 in Volume 1, Ch 6–10 in Volume 2),
// simplified to show only the teacher's exam hints, remedial questions,
// handwritten revision notebook pages, and Minimum Level Material (MLM) PDF.
// ============================================================================

export const CLEAN_CHEMISTRY_VOL1_CHAPTERS = [
  // ==========================================================================
  // CHAPTER 1: SOLUTIONS (MLM Pages 1–3)
  // ==========================================================================
  {
    id: 'chem-ch-1',
    number: 1,
    title: 'Solutions',
    description:
      'MLM Gist: Molarity vs Molality, Henry’s Law & Applications, Raoult’s Law, Ideal vs Non-Ideal Solutions, Positive vs Negative Deviation, Azeotropes, 4 Colligative Properties & Van’t Hoff Factor (i).',
    available: true,
    tag: 'MLM Pages 1–3 • Raoult’s Law & Colligative Properties',
    subchapters: [
      {
        id: 'chem-d-sub-1-1',
        title: '1.1 Concentration Terms, Henry’s Law, Raoult’s Law & Ideal vs Non-Ideal Solutions',
        sections: [
          {
            id: 'chem-d-sec-1-1-1',
            title: 'Concentration Terms, Henry’s Law, Raoult’s Law & Positive / Negative Deviations (MLM Pages 1–2)',
            explanation:
              'Complete Gist Points from MLM pages 1–2 covering Molarity, Molality, Mole Fraction, Henry’s Law, Raoult’s Law, Ideal vs Non-Ideal solutions, and Azeotropes.',
            keyFormulas: [
              {
                name: '1. Molarity (M) vs Molality (m)',
                formula: 'M = \\frac{n_{\\text{solute}}}{V_{\\text{solution (L)}}} \\text{ (Temp. dependent)} \\quad | \\quad m = \\frac{n_{\\text{solute}}}{W_{\\text{solvent (kg)}}} \\text{ (Temp. independent)}',
                description: 'Molality (m) is independent of temperature because mass does not change with temperature, whereas Molarity (M) changes with temperature due to volume expansion.'
              },
              {
                name: '2. Henry’s Law (Solubility of a Gas in a Liquid)',
                formula: 'p = K_H \\cdot x',
                description: 'The partial pressure of the gas in vapour phase (p) is directly proportional to the mole fraction of the gas (x) in the solution. Higher K_H = Lower solubility.'
              },
              {
                name: '3. Raoult’s Law for Volatile Components',
                formula: 'p_A = p_A^\\circ x_A, \\quad p_B = p_B^\\circ x_B \\quad \\Rightarrow \\quad P_{\\text{total}} = p_A + p_B = p_A^\\circ x_A + p_B^\\circ x_B',
                description: 'For a solution of volatile liquids, the partial vapour pressure of each component in the solution is directly proportional to its mole fraction.'
              }
            ],
            structuredData: {
              examBlueprintBadge: 'MLM Pages 1–2 • Henry’s Law, Raoult’s Law, Ideal vs Non-Ideal & Azeotropes',
              definitions: [
                {
                  term: 'Applications of Henry’s Law (MLM Page 1)',
                  definition:
                    '1. Packing of soda water and soft drinks: Bottles are sealed under high pressure to increase the solubility of CO₂.\n2. Deep-sea diving (Avoid Bends): Scuba divers use tanks diluted with Helium (11.7% He, 56.2% N₂, 32.1% O₂) because He is sparingly soluble in blood.\n3. High altitudes (Anoxia): At high altitudes, partial pressure of oxygen is lower than at ground level; low blood oxygen causes weakness and inability to think clearly (anoxia).'
                },
                {
                  term: 'Azeotropes (Constant Boiling Mixtures — MLM Page 2)',
                  definition:
                    'Binary mixtures having the same composition in liquid and vapour phase that boil at a constant temperature (cannot be separated by fractional distillation):\n• Minimum Boiling Azeotropes: Formed by non-ideal solutions showing large positive deviation from Raoult’s law (e.g., 95% Ethanol + 5% Water).\n• Maximum Boiling Azeotropes: Formed by non-ideal solutions showing large negative deviation from Raoult’s law (e.g., 68% HNO₃ + 32% Water).'
                }
              ],
              comparisonTables: [
                {
                  title: '1. Distinguish: Ideal Solution vs Non-Ideal Solution (MLM Page 1)',
                  headers: ['Basis', 'Ideal Solution', 'Non-Ideal Solution'],
                  rows: [
                    ['Raoult’s Law', 'Obeys Raoult’s law at all temperatures and concentrations (P = P_A + P_B = P°_A x_A + P°_B x_B).', 'Does not obey Raoult’s law over the entire range of concentration (P ≠ P°_A x_A + P°_B x_B).'],
                    ['Molecular Interactions', 'A–B interactions are equal to A–A and B–B interactions.', 'A–B interactions are different from A–A and B–B interactions.'],
                    ['Volume & Enthalpy of Mixing', 'ΔV_mix = 0 and ΔH_mix = 0.', 'ΔV_mix ≠ 0 and ΔH_mix ≠ 0.'],
                    ['Examples', 'n-Hexane + n-Heptane; Benzene + Toluene.', 'Acetone + Water; Acetone + Chloroform (CHCl₃).']
                  ]
                },
                {
                  title: '2. Distinguish: Positive Deviation vs Negative Deviation from Raoult’s Law (MLM Page 2)',
                  headers: ['Basis', 'Positive Deviation from Raoult’s Law', 'Negative Deviation from Raoult’s Law'],
                  rows: [
                    ['Vapour Pressure', 'Vapour pressure is GREATER than predicted by Raoult’s law (P > P°_A x_A + P°_B x_B).', 'Vapour pressure is LESS than predicted by Raoult’s law (P < P°_A x_A + P°_B x_B).'],
                    ['Intermolecular Forces', 'A–B attractive forces are WEAKER than pure A–A and B–B forces.', 'A–B attractive forces are STRONGER than pure A–A and B–B forces (new H-bond formed).'],
                    ['ΔV_mix & ΔH_mix', 'ΔV_mix = +ve (Volume increases) and ΔH_mix = +ve (Endothermic).', 'ΔV_mix = -ve (Volume decreases) and ΔH_mix = -ve (Exothermic).'],
                    ['Azeotrope & Examples', 'Forms Minimum Boiling Azeotrope. Examples: Ethanol + Water, Acetone + Ethanol.', 'Forms Maximum Boiling Azeotrope. Examples: Acetone + Chloroform (CHCl₃), HNO₃ + Water.']
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        id: 'chem-d-sub-1-2',
        title: '1.2 Colligative Properties, Reverse Osmosis & Van’t Hoff Factor (i)',
        sections: [
          {
            id: 'chem-d-sec-1-2-1',
            title: 'The 4 Colligative Properties, Reverse Osmosis & Van’t Hoff Factor (MLM Pages 2–3)',
            explanation:
              'Properties of dilute solutions that depend only on the number of solute particles and not on their nature: Relative lowering of vapour pressure, Elevation of boiling point, Depression of freezing point, and Osmotic pressure.',
            keyFormulas: [
              {
                name: '1. Relative Lowering of Vapour Pressure (RLVP)',
                formula: '\\frac{p_1^\\circ - p_1}{p_1^\\circ} = x_2 = \\frac{w_2 \\times M_1}{M_2 \\times w_1}',
                description: 'Equal to the mole fraction (x₂) of the non-volatile solute.'
              },
              {
                name: '2. Elevation of Boiling Point (ΔT_b) & Depression of Freezing Point (ΔT_f)',
                formula: '\\Delta T_b = i \\cdot K_b \\cdot m = i \\cdot K_b \\frac{w_2 \\times 1000}{M_2 \\times w_1} \\quad | \\quad \\Delta T_f = i \\cdot K_f \\cdot m = i \\cdot K_f \\frac{w_2 \\times 1000}{M_2 \\times w_1}',
                description: 'K_b = Molal elevation constant; K_f = Molal depression constant.'
              },
              {
                name: '3. Osmotic Pressure (π) & Van’t Hoff Factor (i)',
                formula: '\\pi = i \\cdot C R T = i \\frac{n_2}{V} R T \\quad | \\quad i = \\frac{\\text{Observed Colligative Property}}{\\text{Calculated Colligative Property}} = \\frac{\\text{Normal Molar Mass}}{\\text{Abnormal Molar Mass}}',
                description: 'For dissociation (NaCl → i=2, MgCl₂ → i=3, K₄[Fe(CN)₆] → i=5), i > 1. For association (dimerisation in benzene → i=1/2), i < 1.'
              }
            ],
            structuredData: {
              examBlueprintBadge: 'MLM Pages 2–3 • 4 Colligative Properties, Reverse Osmosis & Van’t Hoff Factor (i)',
              definitions: [
                {
                  term: 'Colligative Properties',
                  definition:
                    'The properties of dilute solutions which depend only on the number of solute particles present in the solution and not on their chemical identity.'
                },
                {
                  term: 'Osmosis, Osmotic Pressure (π) & Reverse Osmosis',
                  definition:
                    '• Osmosis: Spontaneous flow of pure solvent molecules from a region of lower solute concentration to higher solute concentration through a semi-permeable membrane (SPM).\n• Osmotic Pressure (π = CRT): The excess pressure that must be applied to the solution side to just prevent the flow of solvent through the semi-permeable membrane.\n• Reverse Osmosis (RO): If a pressure larger than the osmotic pressure is applied to the solution side, pure solvent flows out of the solution through the SPM. Application: Desalination of sea water.'
                }
              ],
              comparisonTables: [
                {
                  title: 'Van’t Hoff Factor (i) Values for Association & Complete Dissociation (MLM Page 3)',
                  headers: ['Process / Solute', 'Type / Formula', 'Van’t Hoff Factor (i)'],
                  rows: [
                    ['Association (in Benzene)', 'Dimerisation (e.g., CH₃COOH or Benzoic acid in benzene)', 'i = 1/2 = 0.5  (Trimerisation: i = 1/3; Tetramerisation: i = 1/4)'],
                    ['Dissociation (Strong Electrolytes)', 'NaCl → Na⁺ + Cl⁻  |  MgCl₂ → Mg²⁺ + 2Cl⁻', 'NaCl: i = 2  |  MgCl₂ (or K₂SO₄): i = 3'],
                    ['Dissociation (Polyvalent)', 'AlCl₃ → Al³⁺ + 3Cl⁻  |  K₄[Fe(CN)₆] → 4K⁺ + [Fe(CN)₆]⁴⁻', 'AlCl₃: i = 4  |  K₄[Fe(CN)₆]: i = 5']
                  ]
                }
              ]
            }
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CHAPTER 2: ELECTROCHEMISTRY (MLM Pages 3–5)
  // ==========================================================================
  {
    id: 'chem-ch-2',
    number: 2,
    title: 'Electrochemistry',
    description:
      'MLM Gist: Conductance, Conductivity (κ) vs Molar Conductivity (Λ_m) on dilution, Kohlrausch’s Law, Faraday’s 1st & 2nd Laws, Nernst Equation, ΔG° = -nFE°, Products of Electrolysis & Batteries.',
    available: true,
    tag: 'MLM Pages 3–5 • Kohlrausch, Nernst & Batteries',
    subchapters: [
      {
        id: 'chem-d-sub-2-1',
        title: '2.1 Conductivity, Kohlrausch’s Law, Faraday’s Laws & Nernst Equation',
        sections: [
          {
            id: 'chem-d-sec-2-1-1',
            title: 'Conductivity (κ), Molar Conductivity (Λ_m), Kohlrausch’s Law, Nernst Equation & Faraday’s Laws',
            explanation:
              'Complete formulas and definitions from MLM pages 3–4 for electrolytic conductance, variation with dilution, Kohlrausch’s Law, Nernst Equation, Gibbs energy, and Faraday’s laws.',
            keyFormulas: [
              {
                name: '1. Molar Conductivity (Λ_m) & Degree of Dissociation (α)',
                formula: '\\Lambda_m = \\frac{\\kappa \\times 1000}{M} \\ (\\text{S cm}^2\\text{mol}^{-1}) \\quad | \\quad \\alpha = \\frac{\\Lambda_m}{\\Lambda_m^\\circ} \\quad | \\quad K_a = \\frac{C\\alpha^2}{1 - \\alpha}',
                description: 'κ (conductivity) always DECREASES with dilution (fewer ions per unit cm³), whereas Λ_m always INCREASES with dilution.'
              },
              {
                name: '2. Nernst Equation at 298 K & Equilibrium Constant (K_c)',
                formula: 'E_{\\text{cell}} = E_{\\text{cell}}^\\circ - \\frac{0.059}{n}\\log\\frac{[\\text{Product}]}{[\\text{Reactant}]} \\quad | \\quad E_{\\text{cell}}^\\circ = \\frac{0.059}{n}\\log K_c',
                description: 'At equilibrium, E_cell = 0 and Q = K_c.'
              },
              {
                name: '3. Gibbs Free Energy (Δ_rG°) & Faraday’s First Law of Electrolysis',
                formula: '\\Delta_r G^\\circ = -n F E_{\\text{cell}}^\\circ = -2.303 R T \\log K_c \\quad | \\quad w = Z \\cdot I \\cdot t = \\frac{M \\cdot I \\cdot t}{n \\cdot F}',
                description: 'F = 96500 C mol⁻¹; w is mass deposited at electrode in grams.'
              }
            ],
            structuredData: {
              examBlueprintBadge: 'MLM Pages 3–4 • Kohlrausch’s Law, Nernst Equation & Faraday’s Laws',
              definitions: [
                {
                  term: 'Variation of Molar Conductivity (Λ_m) with Concentration / Dilution (MLM Page 3)',
                  definition:
                    '• Strong Electrolytes (e.g., KCl): Λ_m increases slowly with dilution because it is already 100% ionised and dilution only reduces inter-ionic attractions (Λ_m = Λ°_m - A√C).\n• Weak Electrolytes (e.g., CH₃COOH): Λ_m increases sharply with dilution because the degree of dissociation (α) increases rapidly on dilution.'
                },
                {
                  term: 'Kohlrausch’s Law of Independent Migration of Ions & Applications',
                  definition:
                    'Limiting molar conductivity of an electrolyte at infinite dilution (Λ°_m) is the sum of the individual contributions of the anion and cation of the electrolyte. Example: Λ°_m(CaCl₂) = λ°(Ca²⁺) + 2λ°(Cl⁻).\n• Applications: (1) Calculation of Λ°_m for weak electrolytes, (2) Calculation of degree of dissociation α = Λ_m / Λ°_m, (3) Calculation of dissociation constant K_a = Cα² / (1 - α).'
                },
                {
                  term: 'Faraday’s First & Second Laws of Electrolysis',
                  definition:
                    '• First Law: The amount of chemical substance deposited at any electrode during electrolysis is directly proportional to the quantity of electricity passed (w = ZIt).\n• Second Law: When the same quantity of electricity is passed through different electrolytic solutions connected in series, the masses of different substances liberated are directly proportional to their chemical equivalent weights (w₁ / w₂ = E₁ / E₂).'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'chem-d-sub-2-2',
        title: '2.2 Products of Electrolysis, Primary/Secondary Batteries, Fuel Cells & Corrosion',
        sections: [
          {
            id: 'chem-d-sec-2-2-1',
            title: 'Products of Electrolysis, Mercury/Dry/Lead Storage/Fuel Cells & Rusting (MLM Pages 4–5)',
            explanation:
              'Complete tables from MLM pages 4–5 covering cathode/anode electrolysis products, primary cells (Mercury, Dry cell), secondary batteries (Lead storage), H₂–O₂ Fuel cell, and Corrosion.',
            structuredData: {
              examBlueprintBadge: 'MLM Pages 4–5 • Products of Electrolysis & Commercial Cells Table',
              comparisonTables: [
                {
                  title: '1. Products of Electrolysis (MLM Page 4)',
                  headers: ['Electrolyte & Electrodes', 'Cathode Reaction (Reduction)', 'Anode Reaction (Oxidation)'],
                  rows: [
                    ['Molten NaCl (Pt electrodes)', 'Na⁺(l) + e⁻ → Na(s)', 'Cl⁻ → ½Cl₂(g) + e⁻'],
                    ['Aqueous NaCl (Pt electrodes)', 'H₂O(l) + e⁻ → ½H₂(g) + OH⁻ (H₂ gas)', 'Cl⁻ → ½Cl₂(g) + e⁻ (Cl₂ gas due to overpotential of O₂)'],
                    ['Dilute H₂SO₄ (Pt electrodes)', 'H⁺ + e⁻ → ½H₂(g)', '2H₂O(l) → O₂(g) + 4H⁺ + 4e⁻ (O₂ gas)'],
                    ['Conc. H₂SO₄ (Pt electrodes)', 'H⁺ + e⁻ → ½H₂(g)', '2SO₄²⁻(aq) → S₂O₈²⁻(aq) + 2e⁻ (Peroxodisulphate)'],
                    ['Aqueous AgNO₃ with Ag electrodes', 'Ag⁺(aq) + e⁻ → Ag(s)', 'Ag(s) → Ag⁺(aq) + e⁻ (Silver anode dissolves)'],
                    ['Aqueous AgNO₃ with Pt electrodes', 'Ag⁺(aq) + e⁻ → Ag(s)', '2H₂O(l) → O₂(g) + 4H⁺ + 4e⁻']
                  ]
                },
                {
                  title: '2. Commercial Cells, Fuel Cell & Corrosion Summary (MLM Page 4)',
                  headers: ['Cell / Process', 'Electrolyte', 'Anode & Cathode Reactions', 'Key Exam Remark'],
                  rows: [
                    [
                      '1. Mercury Cell (Primary)',
                      'Paste of KOH and ZnO',
                      '• Anode (Zn–Hg): Zn(Hg) + 2OH⁻ → ZnO(s) + H₂O + 2e⁻\n• Cathode (HgO + C): HgO + H₂O + 2e⁻ → Hg(l) + 2OH⁻',
                      'Gives a CONSTANT voltage (1.35 V) throughout its life because the overall reaction involves no ions in solution whose concentration can change.'
                    ],
                    [
                      '2. Dry Cell / Leclanché Cell (Primary)',
                      'Moist paste of NH₄Cl and ZnCl₂',
                      '• Anode (Zn container): Zn(s) → Zn²⁺ + 2e⁻\n• Cathode (Graphite rod + MnO₂): MnO₂ + NH₄⁺ + e⁻ → MnO(OH) + NH₃',
                      'Voltage = 1.5 V. NH₃ liberated forms complex [Zn(NH₃)₄]²⁺ with Zn²⁺.'
                    ],
                    [
                      '3. Lead Storage Battery (Secondary)',
                      '38% H₂SO₄ solution',
                      '• Anode (Pb): Pb(s) + SO₄²⁻ → PbSO₄(s) + 2e⁻\n• Cathode (PbO₂): PbO₂(s) + SO₄²⁻ + 4H⁺ + 2e⁻ → PbSO₄(s) + 2H₂O(l)',
                      'Overall discharging: Pb + PbO₂ + 2H₂SO₄ → 2PbSO₄ + 2H₂O. On recharging, reactions are reversed.'
                    ],
                    [
                      '4. H₂–O₂ Fuel Cell',
                      'Concentrated aq. KOH / NaOH',
                      '• Anode: 2H₂(g) + 4OH⁻ → 4H₂O(l) + 4e⁻\n• Cathode: O₂(g) + 2H₂O(l) + 4e⁻ → 4OH⁻',
                      'Overall: 2H₂ + O₂ → 2H₂O. Pollution-free, high efficiency (60–70%), used in Apollo space programme.'
                    ],
                    [
                      '5. Corrosion of Iron (Rusting)',
                      'H₂CO₃ (Moisture + CO₂)',
                      '• Anode: 2Fe(s) → 2Fe²⁺ + 4e⁻\n• Cathode: O₂(g) + 4H⁺ + 4e⁻ → 2H₂O(l)',
                      'Rust formula: Fe₂O₃·xH₂O. Prevented by painting, galvanisation (Zn sacrificial protection), or cathodic protection.'
                    ]
                  ]
                }
              ]
            }
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CHAPTER 3: CHEMICAL KINETICS (Teacher Exam Focus + Handwritten MLM 1–8)
  // ==========================================================================
  {
    id: 'chem-ch-3',
    number: 3,
    title: 'Chemical Kinetics',
    description:
      'Teacher Exam Focus: Rate of reaction, Rate law, Order vs Molecularity distinguish, Pseudo-first-order reaction & formula, Zero & 1st order integrated rate equations, Half-life, Effect of temperature (Arrhenius) & 5 solved numericals.',
    available: true,
    tag: 'Exam Focus • Order vs Molecularity • Pseudo-1st-Order & Numericals',
    subchapters: [
      {
        id: 'chem-d-sub-3-1',
        title: '3.1 Rate Law, Order vs Molecularity Distinguish & Pseudo-First-Order Formula (MLM 1, 2, 4)',
        sections: [
          {
            id: 'chem-d-sec-3-1-1',
            title: 'Rate of Reaction, Rate Law, Order vs Molecularity Distinguish & Pseudo-First-Order Reaction',
            explanation:
              'Covers every definition requested by Mam in Chemical Kinetics: Rate of reaction, Rate law, Order of reaction, Molecularity of a reaction, Distinguish between Order and Molecularity (at least 3–4 points), Factors affecting rate, and Pseudo-first-order reaction formula.',
            keyFormulas: [
              {
                name: '1. Rate of a Reaction (Average & Instantaneous Rate)',
                formula: '\\text{Rate} = -\\frac{\\Delta [R]}{\\Delta t} = +\\frac{\\Delta [P]}{\\Delta t} \\quad \\Big| \\quad r_{\\text{inst}} = -\\frac{1}{a}\\frac{d[A]}{dt} = -\\frac{1}{b}\\frac{d[B]}{dt} = +\\frac{1}{c}\\frac{d[C]}{dt}',
                description: 'For N₂ + 3H₂ → 2NH₃: Rate = −d[N₂]/dt = −(1/3)d[H₂]/dt = +(1/2)d[NH₃]/dt  |  SI Unit: mol L⁻¹ s⁻¹ (or atm s⁻¹ for gases).'
              },
              {
                name: '2. Rate Law & Order of Reaction (n = x + y)',
                formula: '\\text{Rate} = k[A]^x[B]^y \\quad \\Rightarrow \\quad \\text{Order } (n) = x + y',
                description: 'x and y are experimentally determined powers of reactant concentrations; k is the rate constant.'
              },
              {
                name: '3. General Unit of Rate Constant (k) for Order n',
                formula: '\\text{Unit of } k = (\\text{mol L}^{-1})^{1-n}\\text{s}^{-1}',
                description: 'Zero Order (n=0): mol L⁻¹ s⁻¹  |  First Order (n=1): s⁻¹  |  Second Order (n=2): mol⁻¹ L s⁻¹'
              },
              {
                name: '4. Pseudo-First-Order Reaction Formula (Acid Hydrolysis of Ester)',
                reaction: 'CH₃COOC₂H₅ (Ethyl acetate) + H₂O (Excess) ->[H⁺] CH₃COOH (Acetic acid) + C₂H₅OH (Ethanol)',
                description: 'Since water is present in large excess, [H₂O] remains practically constant: Rate = k′[CH₃COOC₂H₅][H₂O] = k[CH₃COOC₂H₅] (Order = 1, Molecularity = 2).'
              }
            ],
            structuredData: {
              examBlueprintBadge: 'Teacher Exam Focus • Rate Law • Order vs Molecularity Distinguish • Pseudo-First-Order Formula',
              definitions: [
                {
                  term: 'Rate of a Reaction',
                  definition:
                    '• The change in molar concentration of either a reactant or a product per unit time.\n• Formula: Rate = −Δ[R]/Δt = +Δ[P]/Δt (Average) and r_inst = −d[R]/dt = +d[P]/dt (Instantaneous).\n• Unit: mol L⁻¹ s⁻¹ (or atm s⁻¹ for gaseous reactions).\n• Example (for N₂ + 3H₂ → 2NH₃): Rate = −d[N₂]/dt = −(1/3)d[H₂]/dt = +(1/2)d[NH₃]/dt.'
                },
                {
                  term: 'Rate Law (Rate Expression) & Specific Rate Constant (k)',
                  definition:
                    '• Rate Law: The mathematical expression that denotes the experimentally observed rate of a reaction in terms of the molar concentrations of reactants raised to some powers (which may or may not equal stoichiometric coefficients).\n• Formula: Rate = k[A]ˣ[B]ʸ.\n• Specific Rate Constant (k): Equal to the rate of reaction when the molar concentration of each reactant is unity ([A] = [B] = 1 mol L⁻¹).'
                },
                {
                  term: 'Order of a Reaction',
                  definition:
                    '• The sum of powers (exponents) of the concentration of the reactants in the experimentally determined rate law expression.\n• Formula: Order (n) = x + y (where Rate = k[A]ˣ[B]ʸ).\n• It is purely an experimental quantity and can be zero, a positive integer, negative, or a fraction.'
                },
                {
                  term: 'Molecularity of a Reaction',
                  definition:
                    '• The number of reacting species (atoms, ions, or molecules) taking part in an elementary reaction which must collide simultaneously to bring about a chemical reaction.\n• It is a theoretical concept applicable only to elementary (single-step) reactions.\n• It is always a positive whole number (1, 2, or 3) and can never be zero or fractional.'
                },
                {
                  term: 'Pseudo-First-Order Reaction & Formula',
                  definition:
                    '• A chemical reaction which is truly of higher order (bimolecular, molecularity = 2) but behaves as a first-order reaction (order = 1) because one of the reactants (usually solvent H₂O) is present in large excess.\n• Example 1 (Acid Hydrolysis of Ethyl Acetate): CH₃COOC₂H₅ + H₂O (excess) →(H⁺) CH₃COOH + C₂H₅OH  |  Formula: Rate = k[CH₃COOC₂H₅].\n• Example 2 (Inversion of Cane Sugar): C₁₂H₂₂O₁₁ + H₂O (excess) →(H⁺) C₆H₁₂O₆ (Glucose) + C₆H₁₂O₆ (Fructose)  |  Formula: Rate = k[C₁₂H₂₂O₁₁].'
                }
              ],
              keyPoints: [
                'Factors Affecting Rate of Reaction (MLM 2): (1) Nature of reactants (lower activation energy Eₐ reacts faster), (2) Concentration of reactants (Rate increases with concentration), (3) Temperature (Rate nearly doubles for every 10°C rise), (4) Presence of a catalyst (lowers Eₐ by providing an alternate pathway, increasing rate), (5) Surface area of reactants, and (6) Exposure to radiation (photochemical reactions).'
              ],
              comparisonTables: [
                {
                  title: 'Distinguish Between Order of a Reaction and Molecularity of a Reaction (MLM 4)',
                  headers: ['S.No.', 'Order of a Reaction', 'Molecularity of a Reaction'],
                  rows: [
                    ['1.', 'It is the sum of the powers (exponents) to which the concentration terms are raised in the rate law expression.', 'It is the number of reacting species (atoms, ions, or molecules) that must collide simultaneously in an elementary step.'],
                    ['2.', 'It is an experimentally determined quantity obtained from the rate law.', 'It is a theoretical concept determined from the reaction mechanism (slowest elementary step).'],
                    ['3.', 'It may be zero, a whole number, a fraction, or even negative.', 'It is always a positive whole number (1, 2, or 3) and can never be zero, negative, or fractional.'],
                    ['4.', 'It is applicable to both elementary and complex (multi-step) reactions.', 'It is applicable only to elementary (single-step) reactions; overall molecularity has no meaning for complex reactions.']
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        id: 'chem-d-sub-3-2',
        title: '3.2 Zero & 1st Order Integrated Equations, Half-Life, Graphs & Temperature Effect (MLM 3, 5, 6, 8)',
        sections: [
          {
            id: 'chem-d-sec-3-2-1',
            title: 'Zero Order & First Order Rate Equations, Half-Life (t₁/₂), Graphs & Effect of Temperature (Arrhenius)',
            explanation:
              'Complete formula sheet, graphs, and derivations from your handwritten notebook for Zero Order reactions, First Order reactions, Half-life period, and the Effect of Temperature on reaction rate.',
            keyFormulas: [
              {
                name: '1. Zero Order Integrated Rate Constant & Half-Life',
                formula: 'k = \\frac{[R]_0 - [R]}{t} \\quad \\text{and} \\quad t_{1/2} = \\frac{[R]_0}{2k}',
                description: 'For a zero-order reaction, t₁/₂ is directly proportional to initial concentration [R]₀. Plot of [R] vs t has Slope = -k.'
              },
              {
                name: '2. First Order Integrated Rate Constant & Half-Life',
                formula: 'k = \\frac{2.303}{t}\\log\\frac{[R]_0}{[R]} = \\frac{2.303}{t}\\log\\left(\\frac{a}{a - x}\\right) \\quad \\text{and} \\quad t_{1/2} = \\frac{0.693}{k}',
                description: 'For a first-order reaction, half-life t₁/₂ = 0.693/k is independent of initial concentration [R]₀. Plot of log[R] vs t has Slope = -k/2.303.'
              },
              {
                name: '3. Arrhenius Equation (Effect of Temperature on Rate Constant)',
                formula: 'k = A e^{-E_a / RT} \\quad \\Rightarrow \\quad \\log\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{2.303 R}\\left[\\frac{T_2 - T_1}{T_1 T_2}\\right]',
                description: 'Convert °C to Kelvin (T = t°C + 273). Use R = 8.314 J mol⁻¹ K⁻¹ (so 2.303 × R = 19.15 J mol⁻¹ K⁻¹).'
              }
            ],
            structuredData: {
              examBlueprintBadge: 'Teacher Exam Focus • 1st Order Reaction • Effect of Temperature on Rate • Graphs & Half-Life',
              visualDiagrams: [
                {
                  id: 'kinetics-order-graphs',
                  title: 'Zero Order vs First Order Concentration-Time Graphs & Activation Energy Profile',
                  subtitle: 'Handwritten MLM 8 & Reaction Profile'
                }
              ],
              definitions: [
                {
                  term: 'Effect of Temperature on Rate of Reaction (Handwritten MLM 5)',
                  definition:
                    'The rate of a chemical reaction increases with an increase in temperature (whether the reaction is exothermic or endothermic) because kinetic energy of molecules increases, increasing the fraction of molecules having energy equal to or greater than activation energy (e^(-Eₐ/RT)). It nearly doubles (increases 2 to 3 times) for every 10°C (10 K) rise in temperature. The quantitative relationship between rate constant (k) and temperature (T) is given by the Arrhenius equation: k = A·e^(-Eₐ/RT).'
                },
                {
                  term: 'Half-Life Period of a Reaction (t₁/₂)',
                  definition:
                    'The time in which the concentration of a reactant is reduced to one-half of its initial concentration ([R] = [R]₀ / 2). For a zero-order reaction, t₁/₂ = [R]₀ / (2k) (directly proportional to [R]₀). For a first-order reaction, t₁/₂ = 0.693 / k (independent of initial concentration [R]₀).'
                },
                {
                  term: 'Activation Energy (Eₐ) & Collision Theory (MLM 3)',
                  definition:
                    '• Activation Energy (Eₐ): The extra minimum energy that reactant molecules must absorb so their energy becomes equal to the threshold energy and they can form the intermediate activated complex.\n• Collision Theory: Rate = P · Z_AB · e^(-Eₐ/RT), where Z_AB is collision frequency and P is the steric/orientation factor. For a collision to be effective, molecules must cross both the Energy Barrier (≥ Eₐ) and the Orientation Barrier.'
                }
              ],
              comparisonTables: [
                {
                  title: 'Quick Comparison: Zero Order vs First Order Reaction (Handwritten Formula Sheet)',
                  headers: ['Property', 'Zero Order Reaction (n = 0)', 'First Order Reaction (n = 1)'],
                  rows: [
                    ['Differential Rate Law', 'Rate = -d[R]/dt = k[R]⁰ = k', 'Rate = -d[R]/dt = k[R]¹'],
                    ['Unit of Rate Constant (k)', 'mol L⁻¹ s⁻¹', 's⁻¹ (or min⁻¹)'],
                    ['Integrated Rate Equation', 'k = ([R]₀ - [R]) / t', 'k = (2.303 / t) log([R]₀ / [R])'],
                    ['Half-Life Formula (t₁/₂)', 't₁/₂ = [R]₀ / (2k)  (Proportional to [R]₀)', 't₁/₂ = 0.693 / k  (Independent of [R]₀)'],
                    ['Straight-Line Graph & Slope', '[R] vs t → Slope = -k, Intercept = [R]₀', 'ln[R] vs t → Slope = -k  |  log[R] vs t → Slope = -k / 2.303']
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        id: 'chem-d-sub-3-3',
        title: '3.3 Handwritten Solved Kinetics Numericals (Order Effect, 50%→80%, t₉₉%=2t₉₀%, Arrhenius Eₐ)',
        sections: [
          {
            id: 'chem-d-sec-3-3-1',
            title: 'All 5 Handwritten Chemical Kinetics Numerical Problems (Step-by-Step)',
            explanation:
              'Exact worked-out solutions for all 5 numerical problems from your Chemical Kinetics class notebook.',
            structuredData: {
              examBlueprintBadge: 'Handwritten Notebook Numericals • Step-by-Step Exam Solutions',
              qaPairs: [
                {
                  number: 'Num 1',
                  badge: 'Handwritten Q7',
                  question: 'A reaction is of 1st order in A and 2nd order in B:\n(i) Write the differential rate equation.\n(ii) How is the rate affected on increasing the concentration of B three times?\n(iii) How is the rate affected when the concentrations of both A and B are doubled?\n(iv) How is the rate affected when the concentration of B is reduced to half?',
                  answer:
                    '• (i) Differential rate equation: Rate = k[A]¹[B]²\n• (ii) When [B] is tripled (3B): Rate′ = k[A](3[B])² = 9·k[A][B]² ⇒ Rate increases by 9 times.\n• (iii) When both [A] and [B] are doubled (2A, 2B): Rate′ = k(2[A])(2[B])² = 2 × 4 × k[A][B]² = 8·k[A][B]² ⇒ Rate increases by 8 times.\n• (iv) When [B] is reduced to half (½B): Rate′ = k[A](½[B])² = (1/4)·k[A][B]² ⇒ Rate decreases to 1/4 times its initial value.'
                },
                {
                  number: 'Num 2',
                  badge: 'Sample Q1 (50% → 80%)',
                  question: 'A first-order reaction is 50% complete in 25 minutes. Calculate the time for 80% completion of the reaction. [Given: log 5 = 0.6990]',
                  answer:
                    'Step 1: Find rate constant k from 50% completion (t₁/₂ = 25 min):\n  k = 0.693 / t₁/₂ = 0.693 / 25 min⁻¹\nStep 2: For 80% completion, let initial concentration a = 100, so remaining concentration (a - x) = 100 - 80 = 20:\n  t = (2.303 / k) log(a / (a - x))\n  t = (2.303 × 25 / 0.693) × log(100 / 20)\n  t = (2.303 × 25 / 0.693) × log(5)\n  t = (2.303 × 25 × 0.6990) / 0.693 = 83.23 minutes.'
                },
                {
                  number: 'Num 3',
                  badge: 'Sample Q2 (t₉₉% = 2 t₉₀%)',
                  question: 'For a first-order reaction, show that the time required for 99% completion is twice the time required for the completion of 90% of reaction.',
                  answer:
                    '• For 99% completion (a = 100, a - x = 100 - 99 = 1):\n  t₉₉% = (2.303 / k) log(100 / 1) = (2.303 / k) log(10²) = 2 × (2.303 / k)   ...(i)\n• For 90% completion (a = 100, a - x = 100 - 90 = 10):\n  t₉₀% = (2.303 / k) log(100 / 10) = (2.303 / k) log(10) = 1 × (2.303 / k)   ...(ii)\n• Dividing equation (i) by (ii):\n  t₉₉% / t₉₀% = 2  ⇒  t₉₉% = 2 × t₉₀%. (Hence proved).'
                },
                {
                  number: 'Num 4',
                  badge: 'Sample Q3 (Arrhenius Eₐ)',
                  question: 'The rate of a reaction quadruples when the temperature changes from 293 K to 313 K. Calculate the energy of activation (Eₐ) of the reaction assuming that it does not change with temperature. [log 4 = 0.6021, 2.303 R = 19.15 J mol⁻¹ K⁻¹]',
                  answer:
                    'Given: T₁ = 293 K, T₂ = 313 K, k₂ / k₁ = 4, log(4) = 0.6021, and 2.303 R = 19.15 J mol⁻¹ K⁻¹.\nUsing Arrhenius Equation:\n  log(k₂ / k₁) = (Eₐ / 19.15) × [(T₂ - T₁) / (T₁ × T₂)]\n  0.6021 = (Eₐ / 19.15) × [(313 - 293) / (293 × 313)]\n  0.6021 = (Eₐ / 19.15) × [20 / 91709]\n  Eₐ = (0.6021 × 19.15 × 91709) / 20 = 52862.9 J mol⁻¹ = 52.86 kJ mol⁻¹.'
                },
                {
                  number: 'Num 5',
                  badge: 'Energy Profile Curve',
                  question: 'From the Potential Energy vs Reaction Coordinate diagram where Reactant energy E_R = 100 kJ, Activated complex peak = 300 kJ, and Product energy E_P = 200 kJ, find: (i) Activation energy Eₐ, (ii) ΔH of the reaction, and (iii) Nature of forward & reverse reactions.',
                  answer:
                    '• (i) Activation Energy (Eₐ) = Energy of Activated Complex - Energy of Reactants = 300 - 100 = 200 kJ.\n• (ii) Enthalpy Change (ΔH) = E_P - E_R = 200 - 100 = +100 kJ.\n• (iii) Since ΔH = +ve (+100 kJ), the forward reaction is Endothermic. For the reverse reaction (P → R), ΔH = -100 kJ (-ve, Exothermic) and Eₐ(reverse) = 300 - 200 = 100 kJ.'
                }
              ]
            }
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CHAPTER 4: THE d- AND f-BLOCK ELEMENTS (MLM Pages 9–11)
  // ==========================================================================
  {
    id: 'chem-ch-4',
    number: 4,
    title: 'The d- and f-Block Elements',
    description:
      'MLM Pages 9–11: Top Transition Metal Give Reasons, K₂Cr₂O₇ & KMnO₄ Preparation and Acidic Oxidising Reactions, Lanthanoid Contraction (Cause & Consequences) & Lanthanoids vs Actinoids.',
    available: true,
    tag: 'MLM Pages 9–11 • Give Reasons, KMnO₄/K₂Cr₂O₇ & Lanthanoids',
    subchapters: [
      {
        id: 'chem-d-sub-4-1',
        title: '4.1 d-Block MLM Give Reasons (Colour, Magnetism, Oxidation States, Catalytic & E° Trends)',
        sections: [
          {
            id: 'chem-d-sec-4-1-1',
            title: 'High-Yield d-Block Reasoning Questions from MLM Pages 9–10',
            explanation:
              'Every classic d-block reasoning question from the MLM table (pages 9–10) in clean Q&A format.',
            structuredData: {
              examBlueprintBadge: 'MLM Pages 9–10 • Transition Elements Reasoning Questions',
              qaPairs: [
                {
                  number: 'MLM #1–3',
                  badge: 'Transition Element Definition',
                  question: 'Why are Zn, Cd, and Hg not regarded as transition elements, whereas Sc³⁺ (d⁰) and Cu (3d¹⁰) are transition metals?',
                  answer:
                    '• Transition elements are defined as elements having incompletely filled d-orbitals in their ground state or in any one of their common oxidation states.\n• Zn (3d¹⁰4s²), Cd (4d¹⁰5s²), and Hg (5d¹⁰6s²) have completely filled d¹⁰ orbitals in both their ground state and their common +2 oxidation state, so they are not regarded as transition elements.\n• Sc (3d¹4s²) has a partially filled d-orbital in its ground state, and Cu (3d¹⁰4s¹) has an incomplete 3d⁹ configuration in its +2 oxidation state (Cu²⁺), so both are transition elements.'
                },
                {
                  number: 'MLM #7–8',
                  badge: 'Enthalpy of Atomisation',
                  question: 'Why do transition metals have high enthalpy of atomisation and high melting points, while Zn, Cd, and Hg are soft with low melting points?',
                  answer:
                    'Transition metals have a large number of unpaired electrons in their (n-1)d orbitals, leading to strong interatomic metallic bonding and high enthalpy of atomisation. Zn, Cd, and Hg have all paired electrons (d¹⁰), so metallic bonding is very weak.'
                },
                {
                  number: 'MLM #9–11',
                  badge: 'Variable Oxidation States',
                  question: 'Why do transition elements show variable oxidation states? Which 3d metal shows the highest oxidation state (+7), and which shows only one (+3)?',
                  answer:
                    '• Variable oxidation states arise because the energy difference between (n-1)d and ns orbitals is very small, allowing both (n-1)d and ns electrons to participate in bonding.\n• Manganese (Mn, 3d⁵4s²) shows the highest oxidation state (+7 in MnO₄⁻) due to the maximum number of unpaired electrons.\n• Scandium (Sc) does not show variable oxidation states (shows only +3, achieving noble gas configuration).'
                },
                {
                  number: 'MLM #12–13 & #20–22',
                  badge: 'Stability & Electrode Potentials',
                  question: 'Give reasons: (a) Cr³⁺ is more stable than Cr²⁺ (E° Cr³⁺/Cr²⁺ is -ve), whereas E° Mn³⁺/Mn²⁺ is highly +ve. (b) Cu²⁺ is more stable in aqueous solution than Cu⁺, and E°(Cu²⁺/Cu) is positive (+0.34 V).',
                  answer:
                    '• (a) Cr³⁺ (3d³) has a stable half-filled t_2g³ configuration in aqueous medium, so Cr²⁺ is a strong reducing agent. Conversely, Mn²⁺ (3d⁵) has an extra-stable half-filled d⁵ configuration, so Mn³⁺ readily reduces to Mn²⁺ (E° is +ve).\n• (b) In aqueous solution, Cu²⁺ is more stable than Cu⁺ (2Cu⁺ → Cu²⁺ + Cu disproportionation) due to the much more negative hydration enthalpy (Δ_hyd H°) of Cu²⁺, which more than compensates for IE₂ of Cu. E°(Cu²⁺/Cu) is +0.34 V because the high enthalpy of atomisation and high IE₁ + IE₂ of Cu are not balanced by its hydration enthalpy.'
                },
                {
                  number: 'MLM #15–16 & #33',
                  badge: 'Oxides & Fluorides',
                  question: 'Why are the highest oxidation states of transition metals found in oxides and fluorides, and why do oxides outperform fluorides (e.g., Mn₂O₇ vs MnF₄)?',
                  answer:
                    'Oxygen and fluorine have small size and high electronegativity, allowing them to oxidise the metal to its highest state. Oxygen outperforms fluorine because oxygen can form multiple bonds (dπ–pπ double bonds) with transition metals, whereas fluorine forms only single bonds. Higher oxides (e.g., Mn₂O₇, CrO₃) are acidic due to high polarizing power, while lower oxides (MnO, CrO) are basic.'
                },
                {
                  number: 'MLM #23–26',
                  badge: 'Colour & Paramagnetism',
                  question: 'Why are most transition metal ions coloured and paramagnetic, whereas Sc³⁺, Ti⁴⁺, Zn²⁺, and Cu⁺ are colourless and diamagnetic?',
                  answer:
                    '• Colour is due to d–d transition of unpaired electrons (1 to 9 d-electrons) in split d-orbitals by absorbing visible light. Sc³⁺ and Ti⁴⁺ have empty d⁰ configuration, while Zn²⁺ and Cu⁺ have completely filled d¹⁰ configuration, so d–d transition is not possible and they are colourless.\n• Paramagnetism arises from the presence of unpaired d-electrons: μ = √(n(n+2)) BM.'
                },
                {
                  number: 'MLM #27–32',
                  badge: 'Catalysts, Interstitial & Alloys',
                  question: 'Give reasons: Transition metals form (a) Good catalysts, (b) Interstitial compounds, and (c) Alloys.',
                  answer:
                    '• (a) Catalysts: Due to variable oxidation states, availability of vacant d-orbitals to form reaction intermediates, and large surface area.\n• (b) Interstitial compounds: Small non-metal atoms (H, B, C, N) get trapped in the vacant interstitial voids of the transition metal crystal lattice. They have high melting points, are very hard, retain metallic conductivity, and are chemically inert.\n• (c) Alloys: Transition metals have very similar atomic/metallic radii and can substitute each other in the crystal lattice.'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'chem-d-sub-4-2',
        title: '4.2 K₂Cr₂O₇, KMnO₄, Lanthanoid Contraction & Lanthanoids vs Actinoids (MLM Page 11)',
        sections: [
          {
            id: 'chem-d-sec-4-2-1',
            title: 'Potassium Dichromate (K₂Cr₂O₇), Potassium Permanganate (KMnO₄) & f-Block (MLM Page 11)',
            explanation:
              'Complete preparation equations, pH effect, acidic oxidising half-reactions, Lanthanoid Contraction cause/consequences, and Lanthanoids vs Actinoids comparison table.',
            structuredData: {
              examBlueprintBadge: 'MLM Page 11 • K₂Cr₂O₇ & KMnO₄ Equations + Lanthanoid Contraction',
              definitions: [
                {
                  term: 'Lanthanoid Contraction — Cause & 3 Consequences (MLM Page 11)',
                  definition:
                    '• Definition: The steady and regular decrease in atomic and ionic radii (M³⁺) of lanthanoids with increasing atomic number from La to Lu.\n• Cause: Imperfect / poor shielding of one 4f electron by another 4f electron as nuclear charge increases along the series.\n• Consequences:\n  1. Similarity in atomic radii of 2nd (4d) and 3rd (5d) transition series (e.g., Zr [160 pm] and Hf [159 pm] have almost identical radii and occur together).\n  2. Difficulty in separation of lanthanoids due to very small differences in their chemical properties.\n  3. Basic strength of hydroxides decreases from La(OH)₃ (most basic) to Lu(OH)₃ (least basic).'
                },
                {
                  term: 'Preparation & pH Equilibrium of Potassium Dichromate (K₂Cr₂O₇) from Chromite Ore (FeCr₂O₄)',
                  definition:
                    '• Step 1: 4FeCr₂O₄ + 8Na₂CO₃ + 7O₂ ──(Roasting)──► 8Na₂CrO₄ (Yellow) + 2Fe₂O₃ + 8CO₂\n• Step 2: 2Na₂CrO₄ (Yellow) + 2H⁺ ──► Na₂Cr₂O₇ (Orange) + 2Na⁺ + H₂O\n• Step 3: Na₂Cr₂O₇ + 2KCl ──► K₂Cr₂O₇ (Orange crystals) + 2NaCl\n• Effect of pH: Cr₂O₇²⁻ (Orange, stable in acidic pH) + 2OH⁻ ⇌ 2CrO₄²⁻ (Yellow, stable in basic pH) + H₂O.'
                },
                {
                  term: 'Preparation of Potassium Permanganate (KMnO₄) from Pyrolusite Ore (MnO₂)',
                  definition:
                    '• Step 1: 2MnO₂ (Black) + 4KOH + O₂ ──(Heat)──► 2K₂MnO₄ (Potassium manganate, Green) + 2H₂O\n• Step 2 (Disproportionation in acidic/neutral medium): 3MnO₄²⁻ (Green) + 4H⁺ ──► 2MnO₄⁻ (Permanganate, Purple) + MnO₂ + 2H₂O.'
                }
              ],
              keyPoints: [
                'Oxidising Reactions of K₂Cr₂O₇ in Acidic Medium (Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O): Oxidises (1) I⁻ → I₂ (Cr₂O₇²⁻ + 14H⁺ + 6I⁻ → 2Cr³⁺ + 3I₂ + 7H₂O), (2) Fe²⁺ → Fe³⁺ (Cr₂O₇²⁻ + 14H⁺ + 6Fe²⁺ → 2Cr³⁺ + 6Fe³⁺ + 7H₂O), (3) Sn²⁺ → Sn⁴⁺ (+ 3Sn²⁺ → 3Sn⁴⁺), and (4) H₂S → S (+ 3H₂S + 8H⁺ → 2Cr³⁺ + 3S + 7H₂O).',
                'Oxidising Reactions of KMnO₄ in Acidic Medium (MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O): Oxidises (1) Fe²⁺ → Fe³⁺ (MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O), (2) Oxalate C₂O₄²⁻ → CO₂ (2MnO₄⁻ + 16H⁺ + 5C₂O₄²⁻ → 2Mn²⁺ + 10CO₂ + 8H₂O), (3) I⁻ → I₂ (2MnO₄⁻ + 16H⁺ + 10I⁻ → 2Mn²⁺ + 5I₂ + 8H₂O), whereas in Neutral/Faintly Alkaline medium, KMnO₄ oxidises I⁻ to Iodate IO₃⁻ (2MnO₄⁻ + H₂O + I⁻ → 2MnO₂ + IO₃⁻ + 2OH⁻).'
              ],
              comparisonTables: [
                {
                  title: 'Distinguish: Lanthanoids vs Actinoids (MLM Page 11)',
                  headers: ['Basis', 'Lanthanoids (4f Series)', 'Actinoids (5f Series)'],
                  rows: [
                    ['Subshell Filled', 'Last differentiating electron enters the 4f orbital.', 'Last differentiating electron enters the 5f orbital.'],
                    ['Oxidation States', 'Show limited oxidation states: mainly +3 (and occasionally +2, +4).', 'Show a wide range of oxidation states: +3, +4, +5, +6, +7 (due to comparable energies of 5f, 6d, 7s).'],
                    ['Radioactivity', 'All are non-radioactive except Promethium (Pm).', 'All actinoids are radioactive (elements after Uranium are synthetic transuranic elements).'],
                    ['Contraction', 'Element-to-element lanthanoid contraction is smaller (4f shielding is better than 5f).', 'Element-to-element actinoid contraction is greater due to very poor shielding by 5f electrons.']
                  ]
                }
              ]
            }
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CHAPTER 5: COORDINATION COMPOUNDS (Teacher Exam Focus + CFT Diagrams + Q1–12)
  // ==========================================================================
  {
    id: 'chem-ch-5',
    number: 5,
    title: 'Coordination Compounds',
    description:
      'Teacher Exam Focus: 1 of 2 Crystal Field Splitting Diagrams (Octahedral & Tetrahedral), d⁴ (Δ₀ < P vs Δ₀ > P), Metal Carbonyl Back-Bonding (Synergic Effect), 2 One-Line Questions, VBT & Isomerism Revision Qs 1–12.',
    available: true,
    tag: 'Exam Focus • 1 CFT Diagram • Synergic Effect • 2 One-Liners • Q1–12',
    subchapters: [
      {
        id: 'chem-d-sub-5-1',
        title: '5.1 Crystal Field Splitting Diagrams (Octahedral & Tetrahedral), d⁴ & Synergic Effect',
        sections: [
          {
            id: 'chem-d-sec-5-1-1',
            title: 'Octahedral & Tetrahedral CFT Splitting Diagrams, d⁴ (Δ₀ < P vs Δ₀ > P) & Metal Carbonyl Back-Bonding',
            explanation:
              'In Crystal Field Theory (CFT), the 5 degenerate d-orbitals of a free metal ion split into two sets of different energies in the electrostatic field of approaching ligands. One of the two CFT diagrams (Octahedral or Tetrahedral) is guaranteed in the exam.',
            structuredData: {
              examBlueprintBadge: 'Teacher Exam Focus • 1 of 2 CFT Diagrams + d⁴ Pairing Energy + Metal Carbonyl Synergic Effect',
              visualDiagrams: [
                {
                  id: 'cft-octahedral-tetrahedral',
                  title: 'Crystal Field Splitting Diagrams: (a) Octahedral Complex & (b) Tetrahedral Complex',
                  subtitle: '1 of these 2 diagrams will come in the exam'
                },
                {
                  id: 'cft-d4-pairing',
                  title: 'd⁴ Electronic Configuration: Δ₀ > P (Low Spin) vs Δ₀ < P (High Spin)',
                  subtitle: 'Handwritten Q6 & MLM 2b'
                },
                {
                  id: 'metal-carbonyl-synergic',
                  title: 'Bonding in Metal Carbonyls: dπ–pπ* Back-Bonding & Synergic Effect',
                  subtitle: 'Handwritten Q7 & MLM Page 14'
                }
              ],
              definitions: [
                {
                  term: 'Crystal Field Splitting in Octahedral Coordination Entities (Δ₀)',
                  definition:
                    'In an octahedral complex (CN = 6), ligands approach along the coordinate axes. The two axial d-orbitals (d_(x²-y²) and d_(z²), designated as e_g) experience greater repulsion and rise in energy by +(3/5)Δ₀ (+0.6Δ₀) above the barycentre, while the three non-axial d-orbitals (d_xy, d_yz, d_zx, designated as t_2g) lie between the axes and decrease in energy by -(2/5)Δ₀ (-0.4Δ₀) below the barycentre.'
                },
                {
                  term: 'Crystal Field Splitting in Tetrahedral Coordination Entities (Δₜ)',
                  definition:
                    'In a tetrahedral complex (CN = 4), the d-orbital splitting is inverted and smaller: Δₜ = (4/9)Δ₀. The three t₂ orbitals (d_xy, d_yz, d_zx) are closer to the ligand approach direction and rise by +(2/5)Δₜ above the barycentre, while the two e orbitals (d_(x²-y²), d_(z²)) drop by -(3/5)Δₜ below the barycentre.'
                },
                {
                  term: 'Bonding in Metal Carbonyls (Synergic Effect & Back-Bonding)',
                  definition:
                    'The metal–carbon (M–C) bond in metal carbonyls (e.g., [Ni(CO)₄], [Fe(CO)₅], [Cr(CO)₆]) possesses both σ and π character. The M–C σ bond is formed by the donation of a lone pair of electrons on the carbonyl carbon into a vacant orbital of the metal. The M–C π bond (back-bonding) is formed by the donation of a pair of electrons from a filled d-orbital of the metal into the vacant antibonding π* orbital of carbon monoxide (CO). This metal-to-ligand bonding creates a synergic effect which strengthens the bond between CO and the metal.'
                }
              ],
              qaPairs: [
                {
                  number: 'CFT Q1',
                  badge: 'Handwritten Q6',
                  question: 'On the basis of Crystal Field Theory, write the electronic configuration for a d⁴ ion if: (i) Δ₀ < P, and (ii) Δ₀ > P.',
                  answer:
                    '• (i) When Δ₀ < P (Weak field ligand, pairing energy P exceeds splitting energy Δ₀): The 4th electron enters one of the higher-energy e_g orbitals rather than pairing in t_2g. Configuration = t_2g³ e_g¹ (High-spin complex, 4 unpaired electrons).\n• (ii) When Δ₀ > P (Strong field ligand, splitting energy Δ₀ exceeds pairing energy P): The 4th electron pairs up in the lower-energy t_2g orbitals. Configuration = t_2g⁴ e_g⁰ (Low-spin complex, 2 unpaired electrons).'
                },
                {
                  number: 'CFT Q2',
                  badge: 'Handwritten Q7',
                  question: 'Explain bonding in metal carbonyls (What is the synergic effect / back-bonding?).',
                  answer:
                    'In metal carbonyls, the metal-carbon bond has both σ and π character:\n1. M←C σ-bond: Formed by donation of lone pair of electrons on the carbonyl carbon into a vacant hybrid orbital of the metal.\n2. M→C π-bond (dπ–pπ* back-bonding): Formed by sidewise donation of a pair of electrons from a filled d-orbital of the metal into the vacant antibonding π* orbital of CO.\n3. Synergic Effect: The metal-to-ligand back-bonding strengthens the σ-bond and vice-versa, creating a synergic effect that strengthens the M–CO bond.'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'chem-d-sub-5-2',
        title: '5.2 One-Line Definitions, Werner’s Theory, VBT & Revision Questions (Q1–Q12)',
        sections: [
          {
            id: 'chem-d-sec-5-2-1',
            title: '2 One-Line Questions + All 12 Handwritten Coordination Compounds Revision Questions Solved',
            explanation:
              'Complete definitions for the 2 one-line questions and step-by-step solutions to every problem on the handwritten Coordination Compounds revision sheets.',
            structuredData: {
              examBlueprintBadge: 'Teacher Exam Focus • 2 One-Line Definitions + All 12 Handwritten Revision Questions',
              visualDiagrams: [
                {
                  id: 'coordination-vbt-isomers',
                  title: 'VBT Hybridisation & Geometrical / Optical Isomers of [Co(en)₂Cl₂]⁺',
                  subtitle: 'Handwritten Sheets 1.38.55 PM & 1.38.56 PM'
                }
              ],
              definitions: [
                {
                  term: 'Ambidentate Ligand (One-Liner Q1a)',
                  definition:
                    'A unidentate ligand which has two different donor atoms and can coordinate (ligate) to the central metal atom/ion through either of the two atoms. Examples: NO₂⁻ (nitrito-N) / ONO⁻ (nitrito-O) and SCN⁻ (thiocyanato) / NCS⁻ (isothiocyanato).'
                },
                {
                  term: 'Homoleptic and Heteroleptic Complexes (One-Liner Q1b)',
                  definition:
                    '• Homoleptic Complex: A complex in which a metal is bound to only one kind of donor groups/ligands, e.g., [Co(NH₃)₆]³⁺, [Ni(CO)₄].\n• Heteroleptic Complex: A complex in which a metal is bound to more than one kind of donor groups/ligands, e.g., [Co(NH₃)₄Cl₂]⁺, [Pt(NH₃)₂Cl₂].'
                },
                {
                  term: 'Chelating Ligand & Chelate Complex (One-Liner Q1c)',
                  definition:
                    'When a di- or polydentate ligand (such as ethane-1,2-diamine "en", oxalate C₂O₄²⁻, or EDTA⁴⁻) uses two or more donor atoms simultaneously to bind a single central metal ion, it forms a ring structure called a chelate complex. Chelating ligands confer extra stability to the complex (Chelate Effect).'
                },
                {
                  term: 'Double Salt vs Complex Salt',
                  definition:
                    '• Double Salt: Dissociates completely into simple ions in water (e.g., Mohr’s salt FeSO₄·(NH₄)₂SO₄·6H₂O, Potash alum).\n• Complex Salt: Contains a complex ion in square brackets that does not dissociate into simple metal ions in water (e.g., K₄[Fe(CN)₆] → 4K⁺ + [Fe(CN)₆]⁴⁻).'
                }
              ],
              qaPairs: [
                {
                  number: 'Rev Q2',
                  badge: 'Isomerism Identification',
                  question: 'What type of isomerism do the following complexes exhibit?\n(a) [Cr(H₂O)₆]Cl₃  (b) [Co(ONO)(NH₃)₅]Cl  (c) [Co(NH₃)₆][Cr(CN)₆]  (d) [CoBr(NH₃)₅]SO₄  (e) [Co(en)₃]Cl₃ and [Co(en)₂Cl₂]⁺',
                  answer:
                    '• (a) [Cr(H₂O)₆]Cl₃: Solvate (Hydrate) isomerism (due to exchange of H₂O as ligand and counter ion).\n• (b) [Co(ONO)(NH₃)₅]Cl: Linkage isomerism (due to ambidentate ligand –ONO vs –NO₂).\n• (c) [Co(NH₃)₆][Cr(CN)₆]: Coordination isomerism (interchange of ligands between cationic and anionic complex entities).\n• (d) [CoBr(NH₃)₅]SO₄: Ionisation isomerism (exchange of Br⁻ and SO₄²⁻ counter ion; isomer is [Co(SO₄)(NH₃)₅]Br).\n• (e) [Co(en)₃]Cl₃: Optical isomerism (d and l enantiomers); [Co(en)₂Cl₂]⁺: Both Geometrical (cis/trans) and Optical isomerism (cis-isomer is optically active).'
                },
                {
                  number: 'Rev Q3',
                  badge: 'AgNO₃ Precipitation',
                  question: 'When a coordination compound CrCl₃·6H₂O (or CoCl₃·6H₂O) is mixed with AgNO₃, write the structural formula and IUPAC name of the complex if:\n(i) 1 mole of AgCl is precipitated\n(ii) 2 moles of AgCl are precipitated\n(iii) 3 moles of AgCl are precipitated',
                  answer:
                    '• (i) 1 mole AgCl precipitated (1 Cl⁻ outside square bracket): [Cr(H₂O)₄Cl₂]Cl·2H₂O — Tetraaquadichloridochromium(III) chloride dihydrate.\n• (ii) 2 moles AgCl precipitated (2 Cl⁻ outside square bracket): [Cr(H₂O)₅Cl]Cl₂·H₂O — Pentaaquachloridochromium(III) chloride monohydrate.\n• (iii) 3 moles AgCl precipitated (3 Cl⁻ outside square bracket): [Cr(H₂O)₆]Cl₃ — Hexaaquachromium(III) chloride.'
                },
                {
                  number: 'Rev Q4',
                  badge: 'Chelate Stability',
                  question: 'Among the following complexes, which is most stable and why?\n(a) [Cr(en)₃]Cl₃   (b) [Cr(NH₃)₃Cl₃]   (c) [Fe(CN)₆]³⁻',
                  answer:
                    '(a) [Cr(en)₃]Cl₃ is the most stable complex because "en" (ethane-1,2-diamine) is a bidentate chelating ligand that forms stable 5-membered chelate rings with Cr³⁺ (Chelate Effect).'
                },
                {
                  number: 'Rev Q5 & Q12',
                  badge: 'VBT Hybridisation & Magnetism',
                  question: 'Write the hybridisation, geometry, and magnetic behaviour of:\n(i) [Ni(CO)₄]   (ii) [Fe(H₂O)₆]²⁺   (iii) [Ni(CN)₄]²⁻',
                  answer:
                    '• (i) [Ni(CO)₄]: Ni is in 0 oxidation state (3d⁸ 4s²). Strong ligand CO pairs all 4s electrons into 3d (3d¹⁰) → sp³ hybridisation, Tetrahedral geometry, Diamagnetic (0 unpaired electrons).\n• (ii) [Fe(H₂O)₆]²⁺: Fe²⁺ (3d⁶). H₂O is a weak field ligand (no pairing) → sp³d² hybridisation (Outer orbital / High spin), Octahedral geometry, Paramagnetic (4 unpaired electrons, μ = √24 = 4.90 BM).\n• (iii) [Ni(CN)₄]²⁻: Ni²⁺ (3d⁸). CN⁻ is a strong field ligand (pairs the two unpaired 3d electrons) → dsp² hybridisation, Square planar geometry, Diamagnetic (0 unpaired electrons).'
                },
                {
                  number: 'Rev Q8',
                  badge: '[CoF₆]³⁻ vs [Co(en)₃]³⁺',
                  question: 'Out of [CoF₆]³⁻ and [Co(en)₃]³⁺, which complex is:\n(i) Paramagnetic   (ii) More stable   (iii) Inner orbital complex   (iv) High spin complex',
                  answer:
                    'Both contain Co³⁺ (3d⁶). F⁻ is a weak field ligand (sp³d², 4 unpaired e⁻), whereas "en" is a strong field chelating ligand (d²sp³, 0 unpaired e⁻):\n• (i) Paramagnetic: [CoF₆]³⁻ (4 unpaired electrons)\n• (ii) More stable: [Co(en)₃]³⁺ (due to chelate effect of bidentate ligand "en")\n• (iii) Inner orbital complex: [Co(en)₃]³⁺ (d²sp³ hybridisation using inner 3d orbitals)\n• (iv) High spin complex: [CoF₆]³⁻ (sp³d² outer orbital complex)'
                },
                {
                  number: 'Rev Q9 & Q10',
                  badge: '[Co(en)₂Cl₂]⁺ & [Pt(NH₃)₂Cl₂]Cl₂',
                  question: 'For [Co(en)₂Cl₂]⁺ and [Pt(NH₃)₂Cl₂]Cl₂, find Oxidation Number, Coordination Number, IUPAC Name, Hybridisation, Geometry, Magnetic Nature, and Isomers.',
                  answer:
                    '• For [Co(en)₂Cl₂]⁺: O.N. of Co = +3; C.N. = 6; IUPAC Name = Dichloridobis(ethane-1,2-diamine)cobalt(III) ion; Hybridisation = d²sp³ (inner orbital, low spin); Geometry = Octahedral; Magnetic nature = Diamagnetic (0 unpaired e⁻); Isomerism = Shows cis and trans geometrical isomers, and cis-[Co(en)₂Cl₂]⁺ is optically active (d and l forms).\n• For [Pt(NH₃)₂Cl₂]Cl₂: O.N. of Pt = +4 (5d⁶); C.N. = 4; IUPAC Name = Diamminedichloridoplatinum(IV) chloride; Hybridisation = dsp² / d²sp³; Diamagnetic; shows cis and trans geometrical isomers.'
                },
                {
                  number: 'Rev Q11',
                  badge: 'Werner’s Theory',
                  question: 'What are the postulates of Werner’s Coordination Theory?',
                  answer:
                    '1. In coordination compounds, metal atoms exhibit two types of linkages (valencies): Primary valency and Secondary valency.\n2. Primary valencies are normally ionisable, correspond to the oxidation state of the metal, and are satisfied by negative ions.\n3. Secondary valencies are non-ionisable, correspond to the coordination number (fixed for a metal), and are satisfied by neutral molecules or negative ions (ligands).\n4. The ions/groups bound by secondary linkages to the metal have characteristic spatial arrangements (coordination polyhedra) corresponding to different coordination numbers.'
                }
              ]
            }
          }
        ]
      }
    ]
  }
];

export const CLEAN_CHEMISTRY_VOL2_CHAPTERS = [
  // ==========================================================================
  // CHAPTER 6: HALOALKANES AND HALOARENES (MLM Pages 20, 23, 25–26)
  // ==========================================================================
  {
    id: 'chem-ch-6',
    number: 6,
    title: 'Haloalkanes and Haloarenes',
    description:
      'MLM Pages 20, 23, 25–26: SN1 vs SN2 Comparison Table, Name Reactions (Finkelstein, Swarts, Wurtz, Fittig, Wurtz-Fittig), AgNO₃ & Carbylamine Distinguish Tests, and MLM Give Reasons.',
    available: true,
    tag: 'MLM Pages 20–26 • SN1 vs SN2, Name Reactions & Give Reasons',
    subchapters: [
      {
        id: 'chem-d-sub-6-1',
        title: '6.1 SN1 vs SN2 Comparison Table & Name Reactions (Wurtz, Fittig, Finkelstein, Swarts)',
        sections: [
          {
            id: 'chem-d-sec-6-1-1',
            title: 'SN1 vs SN2 Mechanism Comparison & Haloalkane / Haloarene Name Reactions',
            explanation:
              'Complete SN1 vs SN2 comparison table (MLM page 23) and the 5 core name reactions of Haloalkanes and Haloarenes (MLM page 20).',
            structuredData: {
              examBlueprintBadge: 'MLM Pages 20 & 23 • SN1 vs SN2 Table & Name Reactions',
              comparisonTables: [
                {
                  title: 'Distinguish: SN1 vs SN2 Nucleophilic Substitution Mechanism (MLM Page 23)',
                  headers: ['Property', 'SN1 (Substitution Nucleophilic Unimolecular)', 'SN2 (Substitution Nucleophilic Bimolecular)'],
                  rows: [
                    ['Order & Molecularity', 'Order = 1, Unimolecular: Rate = k[RX]', 'Order = 2, Bimolecular: Rate = k[RX][Nu⁻]'],
                    ['Number of Steps & Intermediate', 'Two-step reaction proceeding via a planar Carbocation intermediate.', 'Single-step concerted reaction via a 5-coordinate Transition State (no intermediate).'],
                    ['Alkyl Halide Reactivity Order', '3° > 2° > 1° > CH₃X (governed by carbocation stability; allylic & benzylic are also fast).', 'CH₃X > 1° > 2° > 3° (governed by steric hindrance).'],
                    ['Stereochemistry (Optical Activity)', 'Proceeds with Racemisation (50:50 d + l racemic mixture, optically inactive).', 'Proceeds with complete Inversion of Configuration (Walden inversion).'],
                    ['Favoured Solvent & Nucleophile', 'Polar protic solvents (H₂O, ROH) and weak nucleophiles.', 'Polar aprotic solvents (acetone, DMSO) and strong nucleophiles.']
                  ]
                }
              ],
              qaPairs: [
                {
                  number: 'Rxn 1',
                  badge: 'Halide Exchange (R–I)',
                  question: '1. Finkelstein Reaction',
                  answer: 'Alkyl chlorides or bromides react with NaI in dry acetone to give alkyl iodides (NaCl/NaBr precipitates in dry acetone).',
                  equation: 'R–X + NaI  ──(Dry Acetone)──►  R–I + NaX↓   (where X = Cl, Br)'
                },
                {
                  number: 'Rxn 2',
                  badge: 'Alkyl Fluoride (R–F)',
                  question: '2. Swarts Reaction',
                  answer: 'Heating an alkyl chloride or bromide in the presence of a metallic fluoride (AgF, Hg₂F₂, CoF₂, or SbF₃) gives alkyl fluorides.',
                  equation: 'CH₃–Br + AgF  ──(Heat)──►  CH₃–F + AgBr'
                },
                {
                  number: 'Rxn 3',
                  badge: 'Na / Dry Ether',
                  question: '3. Wurtz, Fittig & Wurtz-Fittig Reactions',
                  answer:
                    '• Wurtz Reaction: Alkyl halides react with metallic Na in dry ether to give symmetrical alkanes with double the number of carbon atoms.\n• Fittig Reaction: Two aryl halides react with Na in dry ether to give diphenyl (biphenyl).\n• Wurtz-Fittig Reaction: A mixture of an alkyl halide and aryl halide gives an alkylarene when treated with Na in dry ether.',
                  equation: 'Wurtz: 2R–X + 2Na ──(Dry ether)──► R–R + 2NaX\nFittig: 2C₆H₅–X + 2Na ──(Dry ether)──► C₆H₅–C₆H₅ (Diphenyl) + 2NaX\nWurtz-Fittig: C₆H₅–X + R–X + 2Na ──(Dry ether)──► C₆H₅–R + 2NaX'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'chem-d-sub-6-2',
        title: '6.2 MLM Give Reasons & Distinguish Tests for Haloalkanes and Haloarenes (MLM Pages 25–26)',
        sections: [
          {
            id: 'chem-d-sec-6-2-1',
            title: 'Top MLM Reasoning Questions & AgNO₃ Distinguish Tests for Haloalkanes and Haloarenes',
            explanation:
              'High-yield Give Reasons and Distinguish pairs from MLM pages 25–26 and 32–34.',
            structuredData: {
              examBlueprintBadge: 'MLM Pages 25–26 • Haloalkanes & Haloarenes Give Reasons & Distinguish Tests',
              qaPairs: [
                {
                  number: 'MLM #5 & #23',
                  badge: 'Haloarene Reactivity',
                  question: 'Why are haloarenes (chlorobenzene) much less reactive than haloalkanes towards nucleophilic substitution reactions?',
                  answer:
                    '1. Resonance effect: The C–Cl bond in chlorobenzene acquires a partial double-bond character due to resonance, making bond cleavage difficult.\n2. Hybridisation: The carbon in C–Cl of haloarene is sp²-hybridised (more electronegative, shorter bond length) vs sp³ in haloalkane.\n3. Instability of phenyl cation and electronic repulsion between electron-rich nucleophile and electron-rich benzene ring.'
                },
                {
                  number: 'MLM #17',
                  badge: 'Ortho/Para Directing',
                  question: 'Although chlorine is an electron-withdrawing (–I) group, yet it is ortho-, para-directing in electrophilic aromatic substitution reactions. Why?',
                  answer:
                    'Chlorine withdraws electrons through inductive (–I) effect (deactivating the ring) and releases electrons through resonance (+R) effect. Through resonance (+R), chlorine increases electron density and stabilises the intermediate carbocation (arenium ion) specifically at the ortho- and para-positions.'
                },
                {
                  number: 'MLM #18, #19 & #22',
                  badge: 'Classic Haloalkane Reasons',
                  question: 'Give reasons: (a) Alkyl halides, though polar, are immiscible with water. (b) Grignard reagents should be prepared under anhydrous conditions. (c) Chloroform is stored in closed dark-brown bottles.',
                  answer:
                    '• (a) Alkyl halides cannot form intermolecular hydrogen bonds with water molecules.\n• (b) Grignard reagents (RMgX) react immediately with moisture (H₂O) to form alkanes: RMgX + H₂O → R–H + Mg(OH)X.\n• (c) Chloroform (CHCl₃) is slowly oxidised by air in the presence of light to an extremely poisonous gas, phosgene (COCl₂).'
                },
                {
                  number: 'MLM #24',
                  badge: 'aq. KOH vs alc. KOH',
                  question: 'Alkyl halides on treatment with aqueous KOH form alcohols, but with alcoholic KOH alkenes are produced. Why?',
                  answer:
                    'Aqueous KOH provides hydrated OH⁻ ions (nucleophile) leading to substitution (alcohols), whereas alcoholic KOH provides alkoxide RO⁻ ions (a strong base) which abstract H⁺ from the β-carbon, causing dehydrohalogenation (β-elimination) to give alkenes.'
                },
                {
                  number: 'Distinguish',
                  badge: 'AgNO₃ Test',
                  question: 'How to distinguish between: (a) Chlorobenzene (C₆H₅Cl) and Benzyl chloride (C₆H₅CH₂Cl) [or Cyclohexyl chloride], (b) Ethyl bromide (C₂H₅Br) and Bromobenzene (C₆H₅Br)?',
                  answer:
                    'AgNO₃ Test (Boil with aq. KOH, acidify with dil. HNO₃, and add AgNO₃): Benzyl chloride (or Cyclohexyl chloride) gives a white precipitate of AgCl (and Ethyl bromide gives a pale-yellow ppt of AgBr), whereas Chlorobenzene / Bromobenzene does not react due to partial double-bond character of the C–X bond.'
                }
              ]
            }
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CHAPTER 7: ALCOHOLS, PHENOLS AND ETHERS (MLM Pages 20–21, 23–24, 27–28)
  // ==========================================================================
  {
    id: 'chem-ch-7',
    number: 7,
    title: 'Alcohols, Phenols and Ethers',
    description:
      'MLM Pages 20–28: 3-Step Alcohol Hydration & Dehydration Mechanisms, Reimer-Tiemann, Kolbe & Williamson Name Reactions, Lucas & Neutral FeCl₃ Distinguish Tests, and MLM Give Reasons.',
    available: true,
    tag: 'MLM Pages 20–28 • 3-Step Mechanisms, Name Reactions & Give Reasons',
    subchapters: [
      {
        id: 'chem-d-sub-7-1',
        title: '7.1 3-Step Alcohol Hydration/Dehydration Mechanisms & Name Reactions (Reimer-Tiemann, Kolbe, Williamson)',
        sections: [
          {
            id: 'chem-d-sec-7-1-1',
            title: '3-Step Mechanisms (Hydration & Dehydration) & Name Reactions (MLM Pages 20–24)',
            explanation:
              'Complete step-by-step mechanisms and name reactions for Alcohols, Phenols, and Ethers from the MLM PDF.',
            structuredData: {
              examBlueprintBadge: 'MLM Pages 20–24 • 3-Step Alcohol Mechanisms & Reimer-Tiemann / Kolbe / Williamson',
              qaPairs: [
                {
                  number: 'Mech 1',
                  badge: 'MLM Page 23–24 (3 Steps)',
                  question: 'Write the 3-step mechanism for the Acid-Catalysed Hydration of Alkenes (Ethene) to form Alcohol (Ethanol).',
                  answer:
                    '• Step 1 (Protonation of alkene to form carbocation by electrophilic attack of H₃O⁺):\n  CH₂=CH₂ + H₃O⁺ ──► CH₃–CH₂⁺ + H₂O\n• Step 2 (Nucleophilic attack of water molecule on carbocation):\n  CH₃–CH₂⁺ + H₂O ──► CH₃–CH₂–OH₂⁺ (Protonated ethanol)\n• Step 3 (Deprotonation to form ethanol):\n  CH₃–CH₂–OH₂⁺ + H₂O ──► CH₃–CH₂–OH + H₃O⁺'
                },
                {
                  number: 'Mech 2',
                  badge: 'MLM Page 24 (443 K vs 413 K)',
                  question: 'Write the 3-step mechanism for the Acidic Dehydration of Ethanol to give Ethene (at 443 K) and Diethyl Ether (at 413 K).',
                  answer:
                    'A. Dehydration of Ethanol to Ethene (Conc. H₂SO₄ at 443 K — Elimination):\n• Step 1 (Fast protonation of ethanol): CH₃–CH₂–OH + H⁺ ⇌ CH₃–CH₂–OH₂⁺ (Ethyl oxonium ion)\n• Step 2 (Slow RDS — Formation of carbocation): CH₃–CH₂–OH₂⁺ ──(Slow)──► CH₃–CH₂⁺ + H₂O\n• Step 3 (Elimination of proton to form ethene): CH₃–CH₂⁺ ──► CH₂=CH₂ + H⁺\n\nB. Dehydration of Ethanol to Ethoxyethane at 413 K (SN2 Nucleophilic Attack):\n• At 413 K, unprotonated ethanol attacks protonated ethanol via SN2: CH₃CH₂OH + CH₃CH₂–OH₂⁺ → CH₃CH₂–O⁺(H)–CH₂CH₃ + H₂O →(-H⁺) CH₃CH₂–O–CH₂CH₃.'
                },
                {
                  number: 'Rxn 1',
                  badge: 'Phenol → Salicylaldehyde',
                  question: '1. Reimer-Tiemann Reaction',
                  answer: 'Treatment of phenol with chloroform (CHCl₃) in the presence of aqueous NaOH followed by acidification introduces a –CHO group at the ortho-position to give salicylaldehyde (2-hydroxybenzaldehyde).',
                  equation: 'C₆H₅OH + CHCl₃ + 3NaOH(aq) ──(1. 340 K  2. H⁺)──► o-HO–C₆H₄–CHO (Salicylaldehyde)'
                },
                {
                  number: 'Rxn 2',
                  badge: 'Phenol → Salicylic Acid',
                  question: '2. Kolbe’s Reaction',
                  answer: 'Sodium phenoxide reacts with carbon dioxide (CO₂) at 400 K and 4–7 atm pressure followed by acidification to yield salicylic acid (2-hydroxybenzoic acid).',
                  equation: 'C₆H₅OH ──(1. NaOH  2. CO₂, 400 K, 4–7 atm  3. H⁺)──► o-HO–C₆H₄–COOH (Salicylic acid)'
                },
                {
                  number: 'Rxn 3',
                  badge: 'Ether Synthesis (SN2)',
                  question: '3. Williamson Ether Synthesis',
                  answer: 'An alkyl halide (must be primary 1° for best yield) reacts with a sodium alkoxide (R′–ONa) via SN2 mechanism to form symmetrical or unsymmetrical ethers.',
                  equation: 'R–X (1°) + R′–ONa  ──►  R–O–R′ + NaX   (e.g., CH₃Cl + CH₃ONa → CH₃OCH₃ + NaCl)'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'chem-d-sub-7-2',
        title: '7.2 MLM Give Reasons & Distinguish Tests for Alcohols, Phenols and Ethers (MLM Pages 27–28)',
        sections: [
          {
            id: 'chem-d-sec-7-2-1',
            title: 'Top MLM Reasoning Questions & Lucas / FeCl₃ Distinguish Tests (MLM Pages 27–28)',
            explanation:
              'All core reasoning questions from MLM pages 27–28 covering phenol acidity, o-/p-nitrophenol steam volatility, bond angles in alcohols/ethers, and Williamson synthesis.',
            structuredData: {
              examBlueprintBadge: 'MLM Pages 27–28 • Alcohols, Phenols & Ethers Give Reasons',
              qaPairs: [
                {
                  number: 'MLM #1, #5, #9 & #17',
                  badge: 'Phenol Acidity & Nitrophenols',
                  question: 'Give reasons: (a) Phenol is more acidic than ethanol. (b) o-Nitrophenol is steam volatile whereas p-nitrophenol is not (and p-nitrophenol is more acidic than p-methylphenol).',
                  answer:
                    '• (a) In phenol, the phenoxide ion (C₆H₅O⁻) formed after losing H⁺ is stabilised by resonance (delocalisation of negative charge over the benzene ring), whereas the ethoxide ion (C₂H₅O⁻) has no resonance stabilisation.\n• (b) o-Nitrophenol has intramolecular hydrogen bonding (exists as discrete molecules, lower boiling point, hence steam volatile), whereas p-nitrophenol has intermolecular hydrogen bonding (higher boiling point, not steam volatile). The –NO₂ group (–I/–R) increases phenol acidity, whereas –CH₃ (+I/+R) decreases it.'
                },
                {
                  number: 'MLM #2, #6 & #12',
                  badge: 'Bond Lengths & Angles',
                  question: 'Give reasons: (a) C–O bond length in phenol is shorter than in methanol. (b) C–O–H bond angle in alcohols is slightly less than tetrahedral (109°28′), whereas C–O–C bond angle in ethers is slightly greater (111.7°).',
                  answer:
                    '• (a) Due to resonance in phenol (partial double-bond character of C–O bond) and sp²-hybridised carbon.\n• (b) In alcohols, lone pair–lone pair repulsion on oxygen pushes the C–O and O–H bonds slightly closer (< 109°28′). In ethers, steric repulsion between the two bulky alkyl groups (R–O–R) exceeds lone-pair repulsion, widening the angle (> 109°28′).'
                },
                {
                  number: 'MLM #4 & #11',
                  badge: 'Williamson & Ether Cleavage',
                  question: 'Give reasons: (a) (CH₃)₃C–Br on reaction with sodium methoxide (NaOCH₃) gives an alkene (2-methylpropene) and not an ether. (b) (CH₃)₃C–O–CH₃ on reaction with HI gives CH₃OH and (CH₃)₃C–I as the main products.',
                  answer:
                    '• (a) (CH₃)₃C–Br is a tertiary (3°) alkyl halide and NaOCH₃ is a strong base; steric hindrance prevents SN2 substitution, so it undergoes β-elimination to form 2-methylpropene.\n• (b) Protonated tert-butyl methyl ether cleaves via an SN1 pathway because the departure of CH₃OH forms a highly stable tertiary carbocation (CH₃)₃C⁺, which then combines with I⁻ to give (CH₃)₃C–I.'
                }
              ]
            }
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CHAPTER 8: ALDEHYDES, KETONES AND CARBOXYLIC ACIDS (Teacher Exam Focus & MLM)
  // ==========================================================================
  {
    id: 'chem-ch-8',
    number: 8,
    title: 'Aldehydes, Ketones and Carboxylic Acids',
    description:
      'Teacher Exam Focus: All 16 Teacher-Marked MLM "Give Reasons" (#1, 2, 3, 5–9, 11–13, 18, 20, 21, 25, 27), Nucleophilic Addition & Acidity Rules, Tollens/Fehling/Iodoform Distinguish Tests & Exam Name Reactions.',
    available: true,
    tag: 'Exam Focus • 16 Teacher-Marked MLM Give Reasons • Name Reactions',
    subchapters: [
      {
        id: 'chem-d-sub-8-1',
        title: '8.1 Teacher-Marked MLM "Give Reasons" (#1, 2, 3, 5, 6, 7, 8, 9, 11, 12, 13, 18, 20, 21, 25, 27)',
        sections: [
          {
            id: 'chem-d-sec-8-1-1',
            title: 'All 16 Teacher-Selected MLM Give Reasons & Property Trends (Acidity & Nucleophilic Addition)',
            explanation:
              'On your handwritten page ("G R (aldehyde, ketone, CA): 1, 2, 3, 5, 6, 7, 8, 9, 11, 12, 13, 18, 20, 21, 25, 27"), these 16 exact questions from MLM pages 28–29 were marked for the exam.',
            structuredData: {
              examBlueprintBadge: 'Handwritten Selection • MLM Aldehydes, Ketones & Carboxylic Acids #1, 2, 3, 5–9, 11–13, 18, 20, 21, 25, 27',
              definitions: [
                {
                  term: '1. Nucleophilic Addition Reactivity Rule (Aldehydes vs Ketones)',
                  definition:
                    'Reactivity order: HCHO > CH₃CHO > CH₃CH₂CHO > CH₃COCH₃ > C₆H₅COCH₃ > C₆H₅COC₆H₅ (and Propanal > Benzaldehyde).\n• Steric reason: Bulky alkyl/phenyl groups around the >C=O carbon hinder the approaching nucleophile.\n• Electronic reason: +I alkyl groups (or resonance in benzaldehyde) decrease the partial +ve electrophilic charge on the carbonyl carbon.'
                },
                {
                  term: '2. Carboxylic Acid Strength Rule (–I/EWG vs +I/EDG)',
                  definition:
                    '• Electron-Withdrawing Groups (–I / EWG: –NO₂ > –CN > –F > –Cl > –Br) stabilise the carboxylate ion → INCREASE Acid Strength (Decrease pKₐ).\n• Electron-Donating Groups (+I / EDG: –CH₃, –OCH₃) destabilise the carboxylate ion → DECREASE Acid Strength (Increase pKₐ).'
                }
              ],
              qaPairs: [
                {
                  number: 'MLM #1',
                  badge: 'Nucleophilic Addition Order',
                  question: 'Arrange in increasing order of reactivity towards nucleophilic addition: CH₃COCH₃, C₆H₅COC₆H₅, CH₃CHO.',
                  answer: 'C₆H₅COC₆H₅ < CH₃COCH₃ < CH₃CHO (Diphenyl ketone has maximum steric hindrance from two phenyl rings; ethanal is an aldehyde with least steric hindrance and only one +I methyl group).'
                },
                {
                  number: 'MLM #2',
                  badge: 'Acidic Character Order',
                  question: 'Arrange in increasing order of acidic character: Cl–CH₂–COOH, Cl₂CH–COOH, CCl₃–COOH.',
                  answer: 'Cl–CH₂–COOH < Cl₂CH–COOH < CCl₃–COOH (As the number of electron-withdrawing –Cl atoms increases, the –I effect increases, stabilising the carboxylate ion).'
                },
                {
                  number: 'MLM #3',
                  badge: 'Nucleophilic Addition Order',
                  question: 'Arrange in increasing order of reactivity towards nucleophilic addition: CH₃CHO, C₆H₅CHO, HCHO.',
                  answer: 'C₆H₅CHO < CH₃CHO < HCHO (Benzaldehyde is stabilised by resonance which decreases the +ve charge on carbonyl carbon; methanal has no alkyl group and zero steric hindrance).'
                },
                {
                  number: 'MLM #5',
                  badge: 'Acidic Character Order',
                  question: 'Arrange in increasing order of acidic character: ClCH₂COOH, FCH₂COOH, CH₃COOH.',
                  answer: 'CH₃COOH < Cl–CH₂–COOH < F–CH₂–COOH (Fluorine has a stronger –I electron-withdrawing effect than chlorine, while CH₃COOH has no halogen).'
                },
                {
                  number: 'MLM #6 & #20',
                  badge: 'Acid Strength Order',
                  question: 'Arrange in increasing order of acid strength: (CH₃)₂CHCOOH, CH₃CH₂CH(Br)COOH, CH₃CH(Br)CH₂COOH.',
                  answer: '(CH₃)₂CHCOOH < CH₃CH(Br)CH₂COOH < CH₃CH₂CH(Br)COOH (The –I effect of –Br decreases with distance; α-bromobutanoic acid has –Br closest to –COOH).'
                },
                {
                  number: 'MLM #7',
                  badge: 'Give Reason',
                  question: 'Give reason: Aldehydes are more reactive than ketones towards nucleophilic addition.',
                  answer: '1. Steric reason: Ketones have two bulky alkyl/aryl groups which sterically hinder the approach of the nucleophile to the carbonyl carbon, whereas aldehydes have only one.\n2. Electronic reason: Two alkyl groups in ketones reduce the electrophilicity (+ve charge) of the carbonyl carbon more effectively by their +I effect than a single alkyl group in aldehydes.'
                },
                {
                  number: 'MLM #8',
                  badge: 'Give Reason',
                  question: 'Give reason: The boiling points of aldehydes and ketones are lower than those of the corresponding carboxylic acids.',
                  answer: 'Because carboxylic acids form extensive intermolecular hydrogen bonding (existing as cyclic dimers), whereas aldehydes and ketones have only weaker dipole–dipole interactions.'
                },
                {
                  number: 'MLM #9',
                  badge: 'Give Reason',
                  question: 'Give reason: Aldehydes and ketones undergo nucleophilic addition reactions.',
                  answer: 'Due to the greater electronegativity of oxygen compared to carbon, the carbon atom of the polar carbonyl (>C=O) bond acquires a partial positive (δ+) charge and acts as an electrophilic centre, so it is readily attacked by nucleophiles.'
                },
                {
                  number: 'MLM #11',
                  badge: 'Give Reason',
                  question: 'Give reason: Ethanoic acid is a weaker acid than benzoic acid.',
                  answer: 'In ethanoic acid (CH₃COOH), the methyl (–CH₃) group exerts a +I (electron-releasing) effect which destabilises the acetate anion by intensifying the negative charge, whereas in benzoic acid the phenyl group attached to –COOH is sp²-hybridised (electron-withdrawing).'
                },
                {
                  number: 'MLM #12',
                  badge: 'Give Reason',
                  question: 'Give reason: Why are lower members of aldehydes easily miscible with water?',
                  answer: 'Lower members of aldehydes (like methanal, ethanal) can form intermolecular hydrogen bonds with water molecules. As the size of the hydrophobic alkyl chain increases in higher members, solubility decreases.'
                },
                {
                  number: 'MLM #13',
                  badge: 'Acid Strength Order',
                  question: 'Arrange in increasing order of acid strength: Benzoic acid, 4-Nitrobenzoic acid, 3,4-Dinitrobenzoic acid, 4-Methoxybenzoic acid.',
                  answer: '4-Methoxybenzoic acid < Benzoic acid < 4-Nitrobenzoic acid < 3,4-Dinitrobenzoic acid (–OCH₃ is an electron-donating group which decreases acidity, while –NO₂ is a strong electron-withdrawing group which increases acidity).'
                },
                {
                  number: 'MLM #18',
                  badge: 'Reactivity Towards HCN',
                  question: 'Arrange in increasing order of reactivity towards HCN: Acetaldehyde, Acetone, Methyl tert-butyl ketone.',
                  answer: 'Methyl tert-butyl ketone < Acetone < Acetaldehyde (Steric hindrance and +I effect are maximum in methyl tert-butyl ketone and minimum in acetaldehyde).'
                },
                {
                  number: 'MLM #21',
                  badge: 'Give Reason',
                  question: 'Give reason: Ethanal is more reactive than acetone towards nucleophilic addition reaction.',
                  answer: 'Due to greater steric hindrance of two methyl groups in acetone and the stronger +I effect of two –CH₃ groups which decreases the positive charge on the carbonyl carbon of acetone.'
                },
                {
                  number: 'MLM #25',
                  badge: 'Give Reason',
                  question: 'Would you expect benzaldehyde to be more reactive or less reactive in nucleophilic addition reactions than propanal? Explain.',
                  answer: 'Benzaldehyde is LESS reactive than propanal. The carbon atom of the carbonyl group of benzaldehyde is less electrophilic than that of propanal because the polarity of the >C=O group in benzaldehyde is reduced due to resonance (+R effect) with the benzene ring.'
                },
                {
                  number: 'MLM #27',
                  badge: 'Give Reason',
                  question: 'Give reason: Carboxylic acids are higher boiling liquids than alcohols of comparable molecular masses.',
                  answer: 'Due to more extensive association of carboxylic acid molecules through strong intermolecular hydrogen bonding (forming stable dimer rings even in the vapour phase) compared to alcohols.'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'chem-d-sub-8-2',
        title: '8.2 Handwritten Name Reactions & Distinguish Tests (Cannizzaro, Clemmensen, Wolff-Kishner, Rosenmund, HVZ)',
        sections: [
          {
            id: 'chem-d-sec-8-2-1',
            title: 'Aldehyde, Ketone & Carboxylic Acid Exam Name Reactions (#6–12) & Distinguish Tests',
            explanation:
              'All numbered aldehyde, ketone, and carboxylic acid name reactions from your handwritten notebook (#6 to #12 + Aldol condensation) and Tollens / Fehling / Iodoform / NaHCO₃ distinguish tests.',
            structuredData: {
              examBlueprintBadge: 'Handwritten Reaction List (#6–12) + Aldehyde/Ketone/Acid Distinguish Tests',
              qaPairs: [
                {
                  number: 'Rxn 6',
                  badge: 'No α-Hydrogen Aldehydes',
                  question: '6. Cannizzaro Reaction',
                  answer: 'Aldehydes which do NOT have an α-hydrogen atom (e.g., Formaldehyde HCHO, Benzaldehyde C₆H₅CHO) undergo self-oxidation and reduction (disproportionation) on heating with concentrated alkali: one molecule is reduced to alcohol and another is oxidised to carboxylic acid salt.',
                  equation: '2HCHO + Conc. KOH  ──►  CH₃OH (Methanol) + HCOOK (Potassium formate)\n2C₆H₅CHO + Conc. NaOH  ──►  C₆H₅CH₂OH (Benzyl alcohol) + C₆H₅COONa (Sodium benzoate)'
                },
                {
                  number: 'Rxn 7',
                  badge: '>C=O to –CH₂– (Acidic)',
                  question: '7. Clemmensen Reduction',
                  answer: 'The carbonyl (>C=O) group of aldehydes and ketones is reduced to a –CH₂– (methylene) group on treatment with zinc amalgam (Zn–Hg) and concentrated hydrochloric acid (Conc. HCl), forming alkanes.',
                  equation: 'CH₃–CHO + 4[H]  ──(Zn–Hg / Conc. HCl)──►  CH₃–CH₃ (Ethane) + H₂O\nCH₃–CO–CH₃ + 4[H]  ──(Zn–Hg / Conc. HCl)──►  CH₃–CH₂–CH₃ (Propane) + H₂O'
                },
                {
                  number: 'Rxn 8',
                  badge: '>C=O to –CH₂– (Basic)',
                  question: '8. Wolff-Kishner Reduction',
                  answer: 'The carbonyl (>C=O) group of aldehydes and ketones is reduced to a –CH₂– group by treating with hydrazine (NH₂NH₂) to form a hydrazone, followed by heating with KOH or NaOH in a high-boiling solvent like ethylene glycol.',
                  equation: '>C=O  ──(NH₂NH₂, -H₂O)──►  >C=N–NH₂  ──(KOH / Ethylene glycol, Heat)──►  >CH₂ + N₂'
                },
                {
                  number: 'Rxn 9',
                  badge: 'Acyl Chloride to Aldehyde',
                  question: '9. Rosenmund Reduction',
                  answer: 'Acyl chloride (acid chloride) is selectively hydrogenated over a catalyst of palladium on barium sulphate (Pd / BaSO₄) to form the corresponding aldehyde.',
                  equation: 'C₆H₅–COCl (Benzoyl chloride) + H₂  ──(Pd / BaSO₄)──►  C₆H₅–CHO (Benzaldehyde) + HCl'
                },
                {
                  number: 'Rxn 10',
                  badge: 'Benzene to Benzaldehyde',
                  question: '10. Gatterman-Koch Reaction',
                  answer: 'When benzene or its derivative is treated with carbon monoxide (CO) and hydrogen chloride (HCl) in the presence of anhydrous aluminium chloride (AlCl₃) or cuprous chloride (CuCl), it gives benzaldehyde.',
                  equation: 'C₆H₆ (Benzene) + CO + HCl  ──(Anhyd. AlCl₃ / CuCl)──►  C₆H₅–CHO (Benzaldehyde)'
                },
                {
                  number: 'Rxn 11',
                  badge: 'Step-Down to Alkane',
                  question: '11. Decarboxylation Reaction',
                  answer: 'Sodium salts of carboxylic acids lose carbon dioxide to form hydrocarbons (alkanes with one carbon less) when heated with soda lime (a 3:1 mixture of NaOH and CaO).',
                  equation: 'CH₃COONa (Sodium acetate) + NaOH  ──(CaO, Heat)──►  CH₄ (Methane) + Na₂CO₃'
                },
                {
                  number: 'Rxn 12',
                  badge: 'α-Halogenation of Acids',
                  question: '12. Hell-Volhard-Zelinsky (HVZ) Reaction',
                  answer: 'Carboxylic acids having an α-hydrogen are halogenated at the α-position on treatment with chlorine or bromine in the presence of a small amount of red phosphorus to give α-halocarboxylic acids.',
                  equation: 'R–CH₂–COOH  ──((i) X₂ / Red Phosphorus  (ii) H₂O)──►  R–CH(X)–COOH  (where X = Cl, Br)'
                },
                {
                  number: 'Aldol',
                  badge: 'Aldehydes with α-Hydrogen',
                  question: 'Aldol Condensation',
                  answer: 'Aldehydes/ketones having at least one α-hydrogen (e.g., 2CH₃CHO) condense in the presence of dilute NaOH to form β-hydroxyaldehyde (3-hydroxybutanal / aldol), which on heating loses H₂O to form α,β-unsaturated aldehyde (But-2-enal).',
                  equation: '2CH₃CHO ──(dil. NaOH)──► CH₃–CH(OH)–CH₂–CHO ──(Δ, -H₂O)──► CH₃–CH=CH–CHO (But-2-enal)'
                }
              ]
            }
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CHAPTER 9: AMINES (Teacher Exam Focus, 12 MLM Give Reasons, Distinguish & Reactions)
  // ==========================================================================
  {
    id: 'chem-ch-9',
    number: 9,
    title: 'Amines',
    description:
      'Teacher Exam Focus: Basicity Rules (Gas Phase & Aqueous 2130/2310), All 12 Teacher-Marked MLM "Give Reasons" (#1, 2, 3, 5, 8, 11, 13–18), Hinsberg/Carbylamine/Coupling Distinguish Tables, Name Reactions & Diazonium Map.',
    available: true,
    tag: 'Exam Focus • 12 Marked MLM Give Reasons • 6 Distinguish & Diazonium Map',
    subchapters: [
      {
        id: 'chem-d-sub-9-1',
        title: '9.1 Basicity Rules (2130 & 2310) & All 12 Teacher-Marked MLM Give Reasons (#1, 2, 3, 5, 8, 11, 13–18)',
        sections: [
          {
            id: 'chem-d-sec-9-1-1',
            title: 'Amine Basicity Rules (Gas vs Aqueous 2130/2310) & All 12 Teacher-Selected MLM Give Reasons',
            explanation:
              'On your handwritten page ("Amines: 1, 2, 3, 5, 8, 11, 13, 14, 15, 16, 17, 18"), these 12 exact questions from MLM pages 29–31 were marked for the exam.',
            structuredData: {
              examBlueprintBadge: 'Handwritten Selection • MLM Amines #1, 2, 3, 5, 8, 11, 13, 14, 15, 16, 17, 18',
              definitions: [
                {
                  term: 'Basicity of Amines (Gas Phase vs Aqueous Phase 2130 & 2310 Rules)',
                  definition:
                    'Basicity ∝ K_b ∝ 1 / pK_b (More basic = Higher K_b = Smaller pK_b).\n• In Gas Phase (Pure +I effect): 3° > 2° > 1° > NH₃  ⇒  (CH₃)₃N > (CH₃)₂NH > CH₃NH₂ > NH₃.\n• In Aqueous Phase (Combined +I, Solvation/H-bonding & Steric effects):\n  – For Methyl (–CH₃) group [Rule 2130]: 2° > 1° > 3° > NH₃  ⇒  (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃\n  – For Ethyl (–C₂H₅) group [Rule 2310]: 2° > 3° > 1° > NH₃  ⇒  (C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃\n• Boiling Point & Solubility of Isomeric Amines: 1° Amine (2 H on N) > 2° Amine (1 H on N) > 3° Amine (No H on N).'
                }
              ],
              qaPairs: [
                {
                  number: 'MLM #1',
                  badge: 'Basic Strength Order',
                  question: 'Arrange the following in increasing order of basic strength: C₆H₅NH₂, CH₃CH₂NH₂, C₆H₅NHCH₃.',
                  answer: 'C₆H₅NH₂ < C₆H₅NHCH₃ < CH₃CH₂NH₂ (In aniline, lone pair is delocalised in benzene ring; N-methylaniline has +I of –CH₃; ethylamine has no resonance loss and strong +I effect of –C₂H₅).'
                },
                {
                  number: 'MLM #2',
                  badge: 'Water Solubility Order',
                  question: 'Arrange in increasing order of solubility in water: CH₃NH₂, (CH₃)₃N, CH₃NHCH₃.',
                  answer: '(CH₃)₃N < CH₃NHCH₃ < CH₃NH₂ (1° amine has two H-atoms on N for extensive intermolecular H-bonding with water; 2° has one H-atom; 3° has no H-atom on N).'
                },
                {
                  number: 'MLM #3',
                  badge: 'Give Reason',
                  question: 'Give reason: p-Methylaniline (p-toluidine) is more basic than p-nitroaniline.',
                  answer: 'The –CH₃ group shows a +I (electron-releasing) effect which increases electron density on the N atom, whereas the –NO₂ group shows strong –I and –R (electron-withdrawing) effects which decrease electron density on N.'
                },
                {
                  number: 'MLM #5 & #16',
                  badge: 'Basic Strength Order',
                  question: 'Arrange in order of basic strength: Aniline (C₆H₅NH₂), p-Nitroaniline (p-NO₂-C₆H₄NH₂), and p-Toluidine (p-CH₃-C₆H₄NH₂).',
                  answer: 'Increasing basicity: p-Nitroaniline < Aniline < p-Toluidine.\nDecreasing basicity (#16): p-Toluidine > Aniline > p-Nitroaniline.'
                },
                {
                  number: 'MLM #8',
                  badge: 'Give Reason',
                  question: 'Give reason: Aniline does not undergo Friedel-Crafts reaction (alkylation or acylation).',
                  answer: 'Aniline being a Lewis base reacts with the catalyst anhydrous AlCl₃ (a Lewis acid) to form an insoluble salt (C₆H₅NH₂⁺AlCl₃⁻). Due to this, the nitrogen atom of aniline acquires a positive charge and acts as a strong deactivating group for further reaction.'
                },
                {
                  number: 'MLM #11',
                  badge: 'Give Reason',
                  question: 'Give reason: Ethylamine is freely soluble in water whereas aniline is only slightly soluble (insoluble).',
                  answer: 'Ethylamine forms intermolecular hydrogen bonds with water molecules, whereas in aniline the large hydrophobic benzene (C₆H₅–) group retards hydrogen bonding and repels water.'
                },
                {
                  number: 'MLM #13',
                  badge: 'Aqueous Basicity (Rule 2130)',
                  question: 'Arrange in increasing order of basic strength in aqueous solution: NH₃, CH₃NH₂, (CH₃)₂NH, (CH₃)₃N.',
                  answer: 'NH₃ < (CH₃)₃N < CH₃NH₂ < (CH₃)₂NH  (Decreasing order: (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃ — Rule 2130).'
                },
                {
                  number: 'MLM #14',
                  badge: 'Aqueous Basicity (Rule 2310)',
                  question: 'Arrange in increasing order of basic strength in aqueous solution: NH₃, C₂H₅NH₂, (C₂H₅)₂NH, (C₂H₅)₃N.',
                  answer: 'NH₃ < C₂H₅NH₂ < (C₂H₅)₃N < (C₂H₅)₂NH  (Decreasing order: (C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃ — Rule 2310).'
                },
                {
                  number: 'MLM #15',
                  badge: 'Basic Strength Order',
                  question: 'Arrange in increasing order of basic strength: C₆H₅NH₂, C₆H₅N(CH₃)₂, (C₂H₅)₂NH, and CH₃NH₂.',
                  answer: 'C₆H₅NH₂ < C₆H₅N(CH₃)₂ < CH₃NH₂ < (C₂H₅)₂NH.'
                },
                {
                  number: 'MLM #17',
                  badge: 'pK_b Values Order',
                  question: 'Arrange in increasing order of pK_b values: C₂H₅NH₂, C₆H₅NHCH₃, (C₂H₅)₂NH, and C₆H₅NH₂.',
                  answer: '(C₂H₅)₂NH < C₂H₅NH₂ < C₆H₅NHCH₃ < C₆H₅NH₂  (Remember: Stronger base has smaller pK_b value!).'
                },
                {
                  number: 'MLM #18',
                  badge: 'Gas Phase Basicity',
                  question: 'Give reason: The order of basicity of amines in the gaseous phase follows the order: Tertiary amine (3°) > Secondary amine (2°) > Primary amine (1°) > NH₃.',
                  answer: 'In the gas phase, there is no solvation effect by water. Basicity depends purely on the +I (electron-donating) effect of alkyl groups: the greater the number of electron-donating alkyl groups attached to N, the higher the electron density and basicity.'
                },
                {
                  number: 'Bonus MLM #6 & #20',
                  badge: 'Frequent Aniline Reasons',
                  question: 'Give reason: (a) pK_b of aniline is more than that of methylamine. (b) Aniline on nitration gives a substantial amount (47%) of m-nitroaniline.',
                  answer:
                    '• (a) In aniline, the lone pair on N is delocalised into the benzene ring by resonance and is less available for donation, whereas in methylamine the +I effect of –CH₃ increases electron density on N. Thus aniline is a weaker base and has a higher pK_b.\n• (b) In the strongly acidic nitrating mixture (conc. HNO₃ + conc. H₂SO₄), aniline gets protonated to form the anilinium ion (C₆H₅–NH₃⁺), which is meta-directing.'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'chem-d-sub-9-2',
        title: '9.2 The 6 Organic Distinguish Tests (Min 2 in Exam) & Handwritten Amine Distinguish Tables',
        sections: [
          {
            id: 'chem-d-sec-9-2-1',
            title: 'Master Table of the 6 Core Organic Distinguish Tests + Hinsberg & Coupling Tables',
            explanation:
              'From your teacher’s exam hint ("from 6 distinguish min 2 will come") and handwritten sheet #5 (Hinsberg & Coupling distinguish tables): master these 6 chemical tests and the top compound pairs.',
            structuredData: {
              examBlueprintBadge: 'Teacher Exam Focus • Minimum 2 out of 6 Distinguish Tests Guaranteed in Exam',
              comparisonTables: [
                {
                  title: 'Master Table: The 6 Core Organic Distinguish Tests (MLM Pages 31–32)',
                  headers: ['Test Name', 'Reagent Used', 'Who Gives Positive Test & Observation', 'Who Does NOT React'],
                  rows: [
                    [
                      '1. Lucas Test (1°, 2°, 3° Alcohols)',
                      'Conc. HCl + Anhydrous ZnCl₂ (Lucas Reagent)',
                      '• 3° Alcohol ((CH₃)₃COH): White turbidity appears IMMEDIATELY.\n• 2° Alcohol (CH₃CH(OH)CH₃): White turbidity after 5–10 minutes.',
                      '1° Alcohol (CH₃CH₂OH): No turbidity at room temperature.'
                    ],
                    [
                      '2. Iodoform Test (Methyl Ketones & CH₃CH(OH)– Alcohols)',
                      'I₂ + NaOH (or NaOI), warm',
                      'Compounds with CH₃–C(=O)– or CH₃–CH(OH)– group (Ethanol, Propan-2-ol, Ethanal, Acetone, Acetophenone, Pentan-2-one): Forms YELLOW precipitate of CHI₃ (Iodoform).',
                      'Methanol, Propan-1-ol, Propanal, Benzaldehyde, Benzophenone, Pentan-3-one: No yellow ppt.'
                    ],
                    [
                      '3. Neutral FeCl₃ Test (Phenol vs Alcohols)',
                      'Neutral FeCl₃ solution',
                      'Phenol (C₆H₅OH): Gives a VIOLET colouration [(C₆H₅O)₃Fe].',
                      'Alcohols (Ethanol CH₃CH₂OH, Methanol CH₃OH): No violet colouration.'
                    ],
                    [
                      '4. Tollens’ & Fehling’s Test (Aldehydes vs Ketones)',
                      '• Tollens: Ammoniacal AgNO₃\n• Fehling: CuSO₄ (A) + Alkaline Rochelle Salt (B)',
                      '• Tollens: All Aldehydes (Aliphatic & Aromatic like Benzaldehyde) give a BRIGHT SILVER MIRROR (Ag↓).\n• Fehling: Only Aliphatic Aldehydes give a REDDISH-BROWN ppt of Cu₂O.',
                      '• Ketones do not give Tollens’ or Fehling’s test.\n• Aromatic aldehydes (Benzaldehyde) do NOT give Fehling’s test.'
                    ],
                    [
                      '5. Hinsberg’s Test (1°, 2°, 3° Amines — Handwritten Sheet #5)',
                      'Benzenesulphonyl chloride (C₆H₅SO₂Cl) + aq. KOH',
                      '• 1° Amine (C₂H₅NH₂): Forms precipitate SOLUBLE in alkali (KOH).\n• 2° Amine ((C₂H₅)₂NH): Forms precipitate INSOLUBLE in alkali (KOH).',
                      '3° Amine ((C₂H₅)₃N): No reaction with Hinsberg reagent.'
                    ],
                    [
                      '6. Carbylamine Test & Azo Dye Coupling Test (Amines)',
                      '• Carbylamine: CHCl₃ + alc. KOH, heat\n• Coupling: C₆H₅N₂⁺Cl⁻ (or NaNO₂/HCl, 0–5°C + β-naphthol)',
                      '• Carbylamine: Only 1° Amines (RNH₂ or C₆H₅NH₂) give an OFFENSIVE / FOUL SMELL of isocyanide (R–NC).\n• Coupling / Azo Dye: Aromatic 1° Amine (Aniline) gives a YELLOW PPT of p-aminoazobenzene (or orange dye with β-naphthol).',
                      '• 2° & 3° Amines (e.g., C₆H₅NHCH₃) do NOT give Carbylamine test.\n• Aliphatic 1° Amine (CH₃NH₂) does NOT give Azo dye.'
                    ]
                  ]
                },
                {
                  title: 'Handwritten Sheet #5: Hinsberg Test Table (1° vs 2° vs 3° Amines)',
                  headers: ['Reagent', '1° Amine (R–NH₂)', '2° Amine (R₂NH)', '3° Amine (R₃N)'],
                  rows: [
                    [
                      'Hinsberg Reagent: Benzenesulphonyl chloride (C₆H₅SO₂Cl) + Alkali',
                      'Forms N-alkylbenzenesulphonamide — Product is SOLUBLE in alkali (due to acidic H on N).',
                      'Forms N,N-dialkylbenzenesulphonamide — Product is INSOLUBLE in alkali (no H on N).',
                      'No reaction.'
                    ]
                  ]
                },
                {
                  title: 'Handwritten Sheet #5: Coupling Reaction Table (Aliphatic vs Aromatic 1° Amine)',
                  headers: ['Reagent', 'Aliphatic Amine (CH₃NH₂ / C₂H₅NH₂)', 'Aromatic Amine (Aniline C₆H₅NH₂)'],
                  rows: [
                    [
                      'Coupling Reaction with Benzene Diazonium Chloride (C₆H₅N₂⁺Cl⁻)',
                      'No coupling reaction (No azo dye formed).',
                      'Forms a YELLOW precipitate of p-aminoazobenzene (yellow azo dye).'
                    ]
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        id: 'chem-d-sub-9-3',
        title: '9.3 Handwritten Amine & Diazonium Salt Reactions (#1–5, 13–18) & 9-Pathway Spider Map',
        sections: [
          {
            id: 'chem-d-sec-9-3-1',
            title: 'Amine Name Reactions (Hoffmann Bromamide, Carbylamine, Gabriel, Diazotisation, Sandmeyer, Gatterman, Coupling)',
            explanation:
              'All amine and diazonium salt reactions from your handwritten notebook plus the 9-pathway Benzene Diazonium Chloride conversion map.',
            structuredData: {
              examBlueprintBadge: 'Handwritten Amine Reactions + Benzene Diazonium Chloride Master Map',
              visualDiagrams: [
                {
                  id: 'diazonium-reaction-map',
                  title: 'Benzene Diazonium Chloride (C₆H₅N₂⁺Cl⁻) Master Reaction Map (9 Pathways)',
                  subtitle: 'Handwritten Pages 1.38.51 PM & 1.38.57 PM'
                }
              ],
              qaPairs: [
                {
                  number: 'Rxn 1',
                  badge: 'Nitro Reduction',
                  question: '1. Reduction of Nitrobenzene (C₆H₅NO₂) with Sn/HCl or Fe/HCl',
                  answer: 'Nitrobenzene is reduced to Aniline (Fe/HCl is preferred because FeCl₂ formed gets hydrolysed to release HCl, so only a small amount of HCl is needed to initiate the reaction).',
                  equation: 'C₆H₅–NO₂ + 6[H]  ──(Sn/HCl or Fe/HCl)──►  C₆H₅–NH₂ (Aniline) + 2H₂O'
                },
                {
                  number: 'Rxn 2',
                  badge: 'Aniline Nitration',
                  question: '2. Direct Nitration of Aniline (C₆H₅NH₂) with Conc. HNO₃ + Conc. H₂SO₄',
                  answer: 'Direct nitration of aniline at 288 K yields a mixture of three products: p-nitroaniline (51%), m-nitroaniline (47% — due to protonation of aniline to meta-directing anilinium ion), and o-nitroaniline (2%).',
                  equation: 'C₆H₅–NH₂  ──(Conc. HNO₃ + Conc. H₂SO₄, 288 K)──►  p-NO₂-C₆H₄NH₂ (51%) + m-NO₂-C₆H₄NH₂ (47%) + o-NO₂-C₆H₄NH₂ (2%)'
                },
                {
                  number: 'Rxn 3',
                  badge: 'Aniline Bromination',
                  question: '3. Bromination of Aniline (C₆H₅NH₂) with Bromine Water (Br₂ aq.)',
                  answer: 'Aniline reacts instantly with bromine water at room temperature to give a white precipitate of 2,4,6-tribromoaniline.',
                  equation: 'C₆H₅–NH₂ + 3Br₂(aq)  ──►  2,4,6-Tribromoaniline (White ppt) + 3HBr'
                },
                {
                  number: 'Rxn 4 & 14',
                  badge: 'Carbylamine Test',
                  question: '4. Carbylamine Reaction (Isocyanide Test)',
                  answer: 'Aliphatic and aromatic primary (1°) amines on heating with chloroform (CHCl₃) and alcoholic KOH form foul-smelling isocyanides (carbylamines).',
                  equation: 'CH₃–NH₂ + CHCl₃ + 3KOH(alc.) ──(Δ)──► CH₃–NC (Methyl isocyanide) + 3KCl + 3H₂O\nC₆H₅–NH₂ + CHCl₃ + 3KOH(alc.) ──(Δ)──► C₆H₅–NC (Phenyl isocyanide) + 3KCl + 3H₂O'
                },
                {
                  number: 'Rxn 5 & 13',
                  badge: 'Step-Down Amine Synthesis',
                  question: '5. Hoffmann Bromamide Degradation Reaction',
                  answer: 'When a primary amide is treated with bromine (Br₂) in an aqueous or ethanolic solution of NaOH (or KOH), it forms a primary amine containing ONE carbon atom less than the original amide.',
                  equation: 'CH₃–CO–NH₂ + Br₂ + 4NaOH  ──►  CH₃–NH₂ (Methanamine) + Na₂CO₃ + 2NaBr + 2H₂O\nC₆H₅–CO–NH₂ + Br₂ + 4NaOH  ──►  C₆H₅–NH₂ (Aniline) + Na₂CO₃ + 2NaBr + 2H₂O'
                },
                {
                  number: 'Rxn 15',
                  badge: '0–5°C (273–278 K)',
                  question: '15. Diazotisation Reaction',
                  answer: 'Conversion of aniline into benzene diazonium chloride by treating it with nitrous acid (generated in situ from NaNO₂ and HCl) at low temperature 273–278 K (0–5°C).',
                  equation: 'C₆H₅–NH₂ + NaNO₂ + 2HCl  ──(273–278 K / 0–5°C)──►  C₆H₅–N₂⁺Cl⁻ (Benzene diazonium chloride) + NaCl + 2H₂O'
                },
                {
                  number: 'Rxn 16',
                  badge: 'Cu₂X₂ / HX',
                  question: '16. Sandmeyer’s Reaction',
                  answer: 'Cl⁻, Br⁻, and CN⁻ nucleophiles can easily be introduced into the benzene ring by treating freshly prepared benzene diazonium salt with cuprous chloride (Cu₂Cl₂/HCl), cuprous bromide (Cu₂Br₂/HBr), or cuprous cyanide (CuCN/KCN).',
                  equation: 'C₆H₅–N₂⁺Cl⁻  ──(Cu₂Cl₂/HCl or Cu₂Br₂/HBr or CuCN/KCN)──►  C₆H₅–Cl / C₆H₅–Br / C₆H₅–CN + N₂'
                },
                {
                  number: 'Rxn 17',
                  badge: 'Cu Powder / HX',
                  question: '17. Gatterman Reaction',
                  answer: 'Chlorine or bromine can be introduced into the benzene ring by treating benzene diazonium salt solution with the corresponding halogen acid (HCl or HBr) in the presence of copper powder (Cu).',
                  equation: 'C₆H₅–N₂⁺Cl⁻  ──(Cu / HCl or Cu / HBr)──►  C₆H₅–Cl or C₆H₅–Br + N₂ + CuX'
                },
                {
                  number: 'Rxn 18',
                  badge: 'Yellow & Orange Azo Dyes',
                  question: '18. Coupling Reaction (Formation of p-Aminoazobenzene Yellow Dye & p-Hydroxyazobenzene Orange Dye)',
                  answer: 'Benzene diazonium chloride couples with electron-rich aromatic compounds like aniline (in mildly acidic medium) to give p-aminoazobenzene (yellow dye), and with phenol (in mildly alkaline medium) to give p-hydroxyazobenzene (orange dye).',
                  equation: 'C₆H₅–N₂⁺Cl⁻ + H–C₆H₄–NH₂  ──(H⁺ / OH⁻)──►  C₆H₅–N=N–C₆H₄–NH₂ (p-Aminoazobenzene, Yellow dye) + Cl⁻ + H₂O\nC₆H₅–N₂⁺Cl⁻ + H–C₆H₄–OH  ──(OH⁻)──►  C₆H₅–N=N–C₆H₄–OH (p-Hydroxyazobenzene, Orange dye) + Cl⁻ + H₂O'
                },
                {
                  number: 'Gabriel',
                  badge: '1° Aliphatic Amines Only',
                  question: 'Gabriel Phthalimide Synthesis',
                  answer: 'Phthalimide on treatment with ethanolic KOH forms potassium phthalimide, which on heating with alkyl halide (R–X) followed by alkaline hydrolysis (NaOH aq) produces a pure primary aliphatic amine (R–NH₂). Aromatic primary amines like aniline cannot be prepared because aryl halides do not undergo nucleophilic substitution.',
                  equation: 'Phthalimide ──(1. KOH  2. R–X  3. NaOH(aq))──► R–NH₂ (1° Aliphatic Amine) + Sodium phthalate'
                }
              ]
            }
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CHAPTER 10: BIOMOLECULES (Teacher Exam Focus, 5 Reactions, Structures & 6 Remedial Qs)
  // ==========================================================================
  {
    id: 'chem-ch-10',
    number: 10,
    title: 'Biomolecules',
    description:
      'Teacher Exam Focus: 2–3 out of 5 Glucose reactions, Straight-chain & Cyclic Haworth structures, Mam’s 6 Remedial Questions (RNA, Fibrous vs Globular, Denaturation, Curdling of Milk, Vitamins, Enzymes), Zwitter ion, Peptide bond & 6 Distinguish tables.',
    available: true,
    tag: 'Exam Focus • 2–3 of 5 Reactions • 2 Structures • 6 Remedial Qs',
    subchapters: [
      {
        id: 'chem-d-sub-10-1',
        title: '10.1 Preparation & The 5 Reactions of D-Glucose (2–3 in Exam)',
        sections: [
          {
            id: 'chem-d-sec-10-1-1',
            title: 'Preparation of Glucose & The 5 Structural Proof Reactions (Open-Chain)',
            explanation:
              'Glucose (C₆H₁₂O₆) is an aldohexose. Its open-chain formula CHO–(CHOH)₄–CH₂OH is established by 5 classic chemical reactions, out of which 2 or 3 are directly asked in the exam.',
            keyFormulas: [
              {
                name: '1. Reaction with HI / Heat (Proves 6 carbons in a straight chain)',
                reaction: 'CHO–(CHOH)₄–CH₂OH  ──(HI, Heat)──►  CH₃–CH₂–CH₂–CH₂–CH₂–CH₃ (n-Hexane)',
                description: 'On prolonged heating with HI, glucose forms n-hexane, proving all six carbon atoms are linked in a straight (linear) chain.'
              },
              {
                name: '2. Reaction with NH₂OH or HCN (Proves presence of Carbonyl >C=O group)',
                reaction: 'CHO–(CHOH)₄–CH₂OH + NH₂OH  ──►  H–C(=N–OH)–(CHOH)₄–CH₂OH (Glucose oxime) + H₂O\nCHO–(CHOH)₄–CH₂OH + HCN  ──►  CH(OH)(CN)–(CHOH)₄–CH₂OH (Glucose cyanohydrin)',
                description: 'Glucose reacts with hydroxylamine (NH₂OH) to form an oxime and adds a molecule of HCN to give a cyanohydrin, confirming a carbonyl (>C=O) group.'
              },
              {
                name: '3. Reaction with Bromine Water Br₂/H₂O (Proves Carbonyl is an Aldehyde –CHO group)',
                reaction: 'CHO–(CHOH)₄–CH₂OH + [O]  ──(Br₂ / H₂O)──►  COOH–(CHOH)₄–CH₂OH (Gluconic acid)',
                description: 'Glucose gets oxidised to a 6-carbon carboxylic acid (gluconic acid) on reaction with a mild oxidising agent like bromine water, proving the carbonyl group is present as an aldehydic (–CHO) group.'
              },
              {
                name: '4. Acetylation with Acetic Anhydride (Proves presence of five –OH groups)',
                reaction: 'CHO–(CHOH)₄–CH₂OH + 5 (CH₃CO)₂O  ──(Acetylation)──►  CHO–(CH–O–COCH₃)₄–CH₂–O–COCH₃ (Glucose pentaacetate) + 5 CH₃COOH',
                description: 'Acetylation of glucose with acetic anhydride gives glucose pentaacetate, confirming the presence of five –OH groups attached to five different carbon atoms.'
              },
              {
                name: '5. Oxidation with Conc. HNO₃ (Proves presence of one Primary Alcoholic –CH₂OH group)',
                reaction: 'CHO–(CHOH)₄–CH₂OH + [O]  ──(Conc. HNO₃)──►  COOH–(CHOH)₄–COOH (Saccharic acid)',
                description: 'On oxidation with nitric acid (HNO₃), both glucose and gluconic acid yield a dicarboxylic acid, saccharic acid (glucaric acid), indicating a primary alcoholic (–CH₂OH) group.'
              }
            ],
            structuredData: {
              examBlueprintBadge: 'Teacher Exam Focus • 2 or 3 out of these 5 Glucose reactions will come in the exam',
              visualDiagrams: [
                {
                  id: 'glucose-five-reactions',
                  title: 'Master Structural Reaction Scheme: The 5 Open-Chain Reactions of D-Glucose',
                  subtitle: '2 or 3 out of 5 come in exam'
                }
              ],
              definitions: [
                {
                  term: 'Monosaccharides',
                  definition:
                    'Carbohydrates that cannot be hydrolysed further to give simpler units of polyhydroxy aldehyde or ketone (e.g., Glucose, Fructose, Ribose).'
                },
                {
                  term: 'Preparation of Glucose from Sucrose (Cane Sugar)',
                  definition:
                    'When sucrose is boiled with dilute HCl or H₂SO₄ in alcoholic solution, it gives equimolar amounts of glucose and fructose: C₁₂H₂₂O₁₁ + H₂O →(H⁺) C₆H₁₂O₆ (Glucose) + C₆H₁₂O₆ (Fructose).'
                },
                {
                  term: 'Preparation of Glucose from Starch (Commercial Method)',
                  definition:
                    'Commercially, glucose is obtained by hydrolysis of starch by boiling it with dilute H₂SO₄ at 393 K under 2–3 atm pressure: (C₆H₁₀O₅)ₙ + nH₂O →(H⁺, 393 K, 2–3 atm) nC₆H₁₂O₆ (Glucose).'
                }
              ],
              qaPairs: [
                {
                  number: 'Rxn 1',
                  badge: 'Straight Chain Proof',
                  question: 'Show that glucose is a six-membered straight / linear carbon chain.',
                  answer: 'On prolonged heating with HI, glucose is completely reduced to n-hexane, proving that all 6 carbon atoms are linked in a straight chain.',
                  equation: 'CHO–(CHOH)₄–CH₂OH  ──(HI, Heat)──►  CH₃–CH₂–CH₂–CH₂–CH₂–CH₃ (n-Hexane)'
                },
                {
                  number: 'Rxn 2',
                  badge: 'Carbonyl (>C=O) Proof',
                  question: 'Show that glucose contains a carbonyl (>C=O) group.',
                  answer: 'Glucose reacts with hydroxylamine (NH₂OH) to form glucose oxime (and adds a molecule of HCN to form glucose cyanohydrin).',
                  equation: 'CHO–(CHOH)₄–CH₂OH  ──(NH₂OH)──►  H–C(=N–OH)–(CHOH)₄–CH₂OH (Glucose oxime) + H₂O\nCHO–(CHOH)₄–CH₂OH  ──(HCN)──►  CH(OH)(CN)–(CHOH)₄–CH₂OH (Glucose cyanohydrin)'
                },
                {
                  number: 'Rxn 3',
                  badge: 'Aldehyde (–CHO) Proof',
                  question: 'Show that glucose contains an aldehyde (–CHO) group.',
                  answer: 'On mild oxidation with bromine water (Br₂/H₂O), glucose is oxidised to gluconic acid (a 6-carbon monocarboxylic acid).',
                  equation: 'CHO–(CHOH)₄–CH₂OH  ──(Br₂ / H₂O)──►  COOH–(CHOH)₄–CH₂OH (Gluconic acid)'
                },
                {
                  number: 'Rxn 4',
                  badge: 'Five –OH Groups Proof',
                  question: 'Show that glucose contains five –OH (hydroxyl) groups.',
                  answer: 'On acetylation with acetic anhydride in pyridine, glucose forms glucose pentaacetate, confirming 5 –OH groups on different carbons.',
                  equation: 'CHO–(CHOH)₄–CH₂OH  ──(5 (CH₃CO)₂O, Acetylation)──►  CHO–(CHOCOCH₃)₄–CH₂OCOCH₃ (Glucose pentaacetate)'
                },
                {
                  number: 'Rxn 5',
                  badge: '1° Alcohol (–CH₂OH) Proof',
                  question: 'Show that glucose contains one primary (1°) alcoholic (–CH₂OH) group.',
                  answer: 'On oxidation with conc. HNO₃, glucose (and gluconic acid) gives saccharic acid (a dicarboxylic acid), proving the presence of one primary –CH₂OH group.',
                  equation: 'CHO–(CHOH)₄–CH₂OH  ──(Conc. HNO₃)──►  COOH–(CHOH)₄–COOH (Saccharic acid)'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'chem-d-sub-10-2',
        title: '10.2 Straight-Chain & Cyclic Structures, Anomers & Carbohydrates',
        sections: [
          {
            id: 'chem-d-sec-10-2-1',
            title: 'Straight-Chain (Fischer) & Cyclic (Haworth) Structures, Anomers, Starch & Glycogen',
            explanation:
              'Glucose exists both in an open-chain Fischer form (with one –CHO, four 2° –CHOH, and one 1° –CH₂OH group) and in two cyclic hemiacetal pyranose forms: α-D-(+)-glucopyranose and β-D-(+)-glucopyranose.',
            structuredData: {
              examBlueprintBadge: 'Teacher Exam Focus • Straight-Chain & Cyclic Structures + Handwritten Carbohydrate Qs',
              visualDiagrams: [
                {
                  id: 'glucose-structures',
                  title: 'Straight-Chain (Fischer) & Cyclic (Haworth) Structures of Glucose',
                  subtitle: 'Open-Chain vs α-D / β-D Glucopyranose'
                }
              ],
              definitions: [
                {
                  term: 'Anomers',
                  definition:
                    'The two cyclic hemiacetal stereoisomeric forms of glucose (α-D-glucose and β-D-glucose) which differ only in the configuration (orientation) of the hydroxyl (–OH) group at C1 (the anomeric / hemiacetal carbon).'
                },
                {
                  term: 'Invert Sugar',
                  definition:
                    'Sucrose is dextrorotatory (+66.5°), but on hydrolysis it gives equimolar dextrorotatory D-(+)-glucose (+52.5°) and laevorotatory D-(-)-fructose (-92.4°). Since the laevorotation of fructose is greater than the dextrorotation of glucose, the resulting mixture is laevorotatory, and the product is called invert sugar.'
                },
                {
                  term: 'Glycosidic Linkage',
                  definition:
                    'The oxide linkage (–O–) formed between two monosaccharide units through an oxygen atom by the loss of a water molecule.'
                }
              ],
              keyPoints: [
                'Reactions of Glucose NOT explained by Open-Chain Structure (Proving Cyclic Structure): (1) Despite having an aldehyde group, glucose does not give Schiff’s test or 2,4-DNP test and does not form a hydrogensulphite addition product with NaHSO₃. (2) The pentaacetate of glucose does not react with hydroxylamine (NH₂OH), indicating the absence of a free –CHO group. (3) Glucose exists in two crystalline stereoisomeric forms (α and β).',
                'Monomers of Disaccharides: (i) Sucrose → α-D-glucose + β-D-fructose (Non-reducing sugar); (ii) Lactose (Milk sugar) → β-D-galactose + β-D-glucose (Reducing sugar); (iii) Maltose → Two α-D-glucose units linked by C1–C4 glycosidic linkage (Reducing sugar).'
              ],
              comparisonTables: [
                {
                  title: 'Distinguish: Amylose vs Amylopectin (Components of Starch)',
                  headers: ['Feature', 'Amylose', 'Amylopectin'],
                  rows: [
                    ['Water Solubility & % in Starch', 'Water-soluble; constitutes 15–20% of starch.', 'Water-insoluble; constitutes 80–85% of starch.'],
                    ['Chain Structure', 'Long unbranched linear chain polymer of α-D-(+)-glucose.', 'Branched-chain polymer of α-D-(+)-glucose.'],
                    ['Glycosidic Linkage', 'C1–C4 α-glycosidic linkage only.', 'C1–C4 α-glycosidic chain linkage with branching at C1–C6 glycosidic linkage.']
                  ]
                }
              ],
              qaPairs: [
                {
                  number: 'Q1',
                  badge: 'Handwritten Note',
                  question: 'Name the two components of starch.',
                  answer: 'Amylose (15–20%, water-soluble) and Amylopectin (80–85%, water-insoluble).'
                },
                {
                  number: 'Q2',
                  badge: 'Handwritten Note',
                  question: 'What is the structural difference between Starch and Cellulose?',
                  answer: 'Starch is a polymer of α-D-glucose units joined by C1–C4 α-glycosidic linkages (with C1–C6 branching in amylopectin), whereas Cellulose is a straight-chain polysaccharide of β-D-glucose units joined by C1–C4 β-glycosidic linkages.'
                },
                {
                  number: 'Q3',
                  badge: 'Handwritten Note',
                  question: 'What is the chemical composition of glycogen and why is it called animal starch?',
                  answer: 'Glycogen is a branched polysaccharide of α-D-glucose (structure similar to amylopectin but more highly branched). It is called animal starch because carbohydrates are stored in the animal body (in liver, muscles, and brain, as well as in fungi) as glycogen for energy storage.'
                },
                {
                  number: 'Q4',
                  badge: 'Handwritten Note',
                  question: 'Which one is a polysaccharide among: Sucrose, Glucose, Starch, Fructose?',
                  answer: 'Starch (Glucose and Fructose are monosaccharides; Sucrose is a disaccharide).'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'chem-d-sub-10-3',
        title: '10.3 Mam’s 6 Remedial Questions, Proteins, Nucleic Acids, Vitamins & Distinguish Tables',
        sections: [
          {
            id: 'chem-d-sec-10-3-1',
            title: 'Mam’s 6 Remedial Questions + Zwitter Ion, Peptide Bond & All 6 Biomolecule Distinguish Tables',
            explanation:
              'Complete answers to the 6 remedial questions dictated by Mam in class, along with all handwritten Biomolecules revision notes (Zwitter ion, Peptide linkage, Amino acid types, Nucleic acids, and Distinguish tables).',
            structuredData: {
              examBlueprintBadge: 'Mam’s 6 Remedial Questions + Biomolecules Distinguish Tables',
              visualDiagrams: [
                {
                  id: 'zwitter-peptide-structures',
                  title: 'Zwitter Ion & Peptide Bond (–CO–NH–) Linkage',
                  subtitle: 'Handwritten Biomolecules Sheet'
                }
              ],
              qaPairs: [
                {
                  number: 'Remedial Q1',
                  badge: 'Mam’s Remedial Q1',
                  question: 'What does Ribonucleic Acid (RNA) contain, what are its types, and what is the function/use of RNA & Nucleic Acids?',
                  answer:
                    '• Composition of RNA: Contains D-Ribose sugar, phosphoric acid (phosphate group), and four nitrogenous bases: Adenine (A), Guanine (G), Cytosine (C), and Uracil (U) in a single-stranded helix.\n• Three Types of RNA: (i) Messenger RNA (m-RNA), (ii) Ribosomal RNA (r-RNA), (iii) Transfer RNA (t-RNA).\n• Function / Use: RNA directly carries out protein synthesis in the cell, while DNA stores and transfers genetic information (heredity).'
                },
                {
                  number: 'Remedial Q2',
                  badge: 'Mam’s Remedial Q2',
                  question: 'Distinguish between Fibrous Proteins and Globular Proteins.',
                  answer:
                    '• Fibrous Proteins: (i) Polypeptide chains run parallel to give a fibre-like structure held together by hydrogen and disulphide bonds. (ii) Insoluble in water. Examples: Keratin (in hair, wool, silk) and Myosin (in muscles).\n• Globular Proteins: (i) Polypeptide chains coil around to give a spherical shape. (ii) Soluble in water. Examples: Insulin and Albumins.'
                },
                {
                  number: 'Remedial Q3',
                  badge: 'Mam’s Remedial Q3',
                  question: 'What is Denaturation of Proteins? Give examples.',
                  answer:
                    'When a protein in its native form is subjected to physical change (like change in temperature / heating) or chemical change (like change in pH), the hydrogen bonds are disturbed. Due to this, globules unfold and the helix gets uncoiled: the secondary (2°) and tertiary (3°) structures are destroyed (while 1° primary structure remains intact), and the protein loses its biological activity. This is called denaturation of protein.\n• Examples: (1) Coagulation of egg white on boiling, (2) Curdling of milk.'
                },
                {
                  number: 'Remedial Q4',
                  badge: 'Mam’s Remedial Q4',
                  question: 'Explain Curdling of Milk.',
                  answer:
                    'Curdling of milk is a classic example of denaturation of proteins caused by the formation of lactic acid by the bacteria (Lactobacillus) present in milk. The change in pH disturbs the 2° and 3° structures of milk protein (lactalbumin/casein), causing it to uncoil and coagulate into curd.'
                },
                {
                  number: 'Remedial Q5',
                  badge: 'Mam’s Remedial Q5',
                  question: 'How are Vitamins classified? Give examples of each class.',
                  answer:
                    'Vitamins are classified into two groups depending upon their solubility in water or fat:\n1. Fat-Soluble Vitamins: Vitamins which are soluble in fat and oils but insoluble in water. They are stored in liver and adipose (fat-storing) tissues. Examples: Vitamins A, D, E, and K.\n2. Water-Soluble Vitamins: Vitamins which are soluble in water. Water-soluble vitamins must be supplied regularly in diet because they are readily excreted in urine and cannot be stored in our body (except Vitamin B₁₂). Examples: B group vitamins (B₁, B₂, B₆, B₁₂) and Vitamin C.'
                },
                {
                  number: 'Remedial Q6',
                  badge: 'Mam’s Remedial Q6',
                  question: 'What are Enzymes?',
                  answer:
                    'Enzymes are biological catalysts (biocatalysts) that catalyse specific biochemical reactions in living organisms under mild temperature and pH conditions. Chemically, almost all enzymes are globular proteins.'
                },
                {
                  number: 'Note Q7',
                  badge: 'Handwritten Note',
                  question: 'What are Acidic, Basic, and Neutral Amino Acids?',
                  answer:
                    '• Neutral Amino Acid: Contains an equal number of amino (–NH₂) and carboxyl (–COOH) groups (e.g., Glycine, Alanine).\n• Acidic Amino Acid: Contains more carboxyl (–COOH) groups than amino (–NH₂) groups (e.g., Aspartic acid, Glutamic acid).\n• Basic Amino Acid: Contains more amino (–NH₂) groups than carboxyl (–COOH) groups (e.g., Lysine, Arginine).'
                },
                {
                  number: 'Note Q8',
                  badge: 'Handwritten Note',
                  question: 'What are Essential and Non-Essential Amino Acids?',
                  answer:
                    '• Non-Essential Amino Acids: Amino acids which can be synthesised in our body (e.g., Glycine, Alanine).\n• Essential Amino Acids: Amino acids which cannot be synthesised in our body and must be obtained through diet (e.g., Valine, Leucine, Lysine).'
                },
                {
                  number: 'Note Q9',
                  badge: 'Handwritten Note',
                  question: 'What is a Zwitter Ion and what is a Peptide Bond (Peptide Linkage)?',
                  answer:
                    '• Zwitter Ion: In aqueous solution, the carboxyl group (–COOH) of an amino acid loses a proton and the amino group (–NH₂) accepts a proton, giving rise to a dipolar ion called a zwitter ion: H₃N⁺–CH(R)–COO⁻.\n• Peptide Linkage: An amide bond (–CO–NH–) formed between the –COOH group of one amino acid molecule and the –NH₂ group of another amino acid molecule by the elimination of a water molecule.'
                },
                {
                  number: 'Note Q10',
                  badge: 'Handwritten Note',
                  question: 'Name the linkages present in: (a) Tertiary (3°) structure of proteins, and (b) Between nucleotides in nucleic acids.',
                  answer:
                    '• (a) Tertiary structure of proteins is stabilised by 4 main forces/linkages: Hydrogen bonds, Disulphide linkages (–S–S–), van der Waals forces, and Electrostatic forces of attraction.\n• (b) Nucleotides in nucleic acids (DNA/RNA) are joined together by Phosphodiester linkage (between 5′ and 3′ carbon atoms of pentose sugar).'
                }
              ],
              comparisonTables: [
                {
                  title: '1. Distinguish: Fibrous Proteins vs Globular Proteins',
                  headers: ['Basis', 'Fibrous Proteins', 'Globular Proteins'],
                  rows: [
                    ['Shape / Structure', 'Polypeptide chains run parallel (fibre-like / thread-like structure) held by H-bonds and disulphide bonds.', 'Polypeptide chains coil around to give a spherical structure.'],
                    ['Solubility in Water', 'Insoluble in water.', 'Soluble in water.'],
                    ['Examples', 'Keratin (present in hair, wool, silk) and Myosin (present in muscles).', 'Insulin and Albumins.']
                  ]
                },
                {
                  title: '2. Distinguish: Reducing Sugars vs Non-Reducing Sugars',
                  headers: ['Basis', 'Reducing Sugars', 'Non-Reducing Sugars'],
                  rows: [
                    ['Tollens’ & Fehling’s Test', 'Reduce Tollens’ reagent and Fehling’s solution.', 'Do not reduce Tollens’ reagent or Fehling’s solution.'],
                    ['Functional Group', 'Have a free aldehydic (–CHO) or ketonic (>C=O) hemiacetal group.', 'Aldehydic and ketonic groups are bonded in glycosidic linkage (no free reducing group).'],
                    ['Examples', 'All monosaccharides (Glucose, Fructose), Maltose, and Lactose.', 'Sucrose and all polysaccharides (Starch, Cellulose).']
                  ]
                },
                {
                  title: '3. Distinguish: α-Helix vs β-Pleated Sheet Structure of Proteins',
                  headers: ['Basis', 'α-Helix Structure', 'β-Pleated Sheet Structure'],
                  rows: [
                    ['Chain Arrangement', 'Polypeptide chain is twisted into a right-handed screw (helix).', 'Peptide chains are stretched out and laid side by side like pleated folds of drapery.'],
                    ['Hydrogen Bonding', 'Stabilised by intramolecular H-bonding between –NH– and >C=O of adjacent turns.', 'Stabilised by intermolecular H-bonding between adjacent parallel peptide chains.']
                  ]
                },
                {
                  title: '4. Distinguish: DNA vs RNA',
                  headers: ['Basis', 'DNA (Deoxyribonucleic Acid)', 'RNA (Ribonucleic Acid)'],
                  rows: [
                    ['Pentose Sugar', 'Contains β-D-2-deoxyribose sugar.', 'Contains β-D-ribose sugar.'],
                    ['Nitrogenous Bases', 'Contains Adenine (A), Guanine (G), Cytosine (C), and Thymine (T).', 'Contains Adenine (A), Guanine (G), Cytosine (C), and Uracil (U).'],
                    ['Strand Structure & Function', 'Double-stranded α-helix; transfers hereditary/genetic characters.', 'Single-stranded helix; directly helps in protein synthesis.']
                  ]
                },
                {
                  title: '5. Distinguish: Nucleotide vs Nucleoside',
                  headers: ['Basis', 'Nucleotide', 'Nucleoside'],
                  rows: [
                    ['Chemical Composition', 'Contains Nitrogenous Base + Pentose Sugar + Phosphate Group.', 'Contains Nitrogenous Base + Pentose Sugar only (No Phosphate Group).'],
                    ['Role', 'Monomer unit of nucleic acids (DNA and RNA) linked by phosphodiester bonds.', 'Formed when N-base attaches to 1′ position of pentose sugar (Nucleoside + Phosphate = Nucleotide).']
                  ]
                }
              ]
            }
          }
        ]
      }
    ]
  }
];

export const CLEAN_CHEMISTRY_CHAPTERS = [
  ...CLEAN_CHEMISTRY_VOL1_CHAPTERS,
  ...CLEAN_CHEMISTRY_VOL2_CHAPTERS
];

export const CLEAN_CHEMISTRY_SYLLABUS = {
  id: 'chemistry',
  name: 'Chemistry',
  code: '043',
  accentColor: '#C75B3B',
  description:
    'Exam-Focused MLM & Remedial Notes: Volume 1 (Chapters 1–5: Solutions, Electrochemistry, Chemical Kinetics, d & f-Block, Coordination Compounds) & Volume 2 (Chapters 6–10: Haloalkanes, Alcohols/Phenols/Ethers, Aldehydes/Ketones/Acids, Amines, Biomolecules)',
  volumes: [
    {
      id: 'chem-vol-1',
      title: 'NCERT Chemistry Volume 1 (Physical & Inorganic)',
      subtitle:
        'Solutions, Electrochemistry, Chemical Kinetics, d & f-Block, Coordination Compounds (Ch 1–5 • MLM & Exam Focus)',
      chapters: CLEAN_CHEMISTRY_VOL1_CHAPTERS
    },
    {
      id: 'chem-vol-2',
      title: 'NCERT Chemistry Volume 2 (Organic Chemistry)',
      subtitle:
        'Haloalkanes, Alcohols/Phenols/Ethers, Aldehydes/Ketones/Acids, Amines, Biomolecules (Ch 6–10 • MLM & Exam Focus)',
      chapters: CLEAN_CHEMISTRY_VOL2_CHAPTERS
    }
  ]
};
