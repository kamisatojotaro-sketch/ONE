// Full Granular NCERT Class 12 Chemistry Remaining Chapters (Ch 3, 5, 8, 9, 10)
// Complete High-Yield Notes, Derivations, Named Reactions, and Distinction Tests

export const CHEMISTRY_CHAPTERS_REMAINING = {
  // ==========================================================================
  // CHAPTER 3: CHEMICAL KINETICS
  // ==========================================================================
  'chem-ch-3': {
    id: 'chem-ch-3',
    number: 3,
    title: 'Chemical Kinetics',
    tag: 'Physical Chemistry',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'chem-sub-3-1',
        title: '3.1 Rate of a Chemical Reaction (Average vs Instantaneous)',
        sections: [
          {
            id: 'chem-sec-3-1',
            title: 'Average Rate, Instantaneous Rate & Stoichiometric Rate Expression',
            explanation: "The rate of a chemical reaction is the change in molar concentration of a reactant or product per unit time. Because reactant concentrations decrease as the reaction proceeds, their rate of disappearance carries a negative sign (−Δ[R]/Δt), while products carry a positive sign (+Δ[P]/Δt). For a general reaction aA + bB ⟶ cC + dD, dividing the rate of change of each species by its stoichiometric coefficient gives a single, unique reaction rate: Rate = −(1/a)(d[A]/dt) = −(1/b)(d[B]/dt) = +(1/c)(d[C]/dt) = +(1/d)(d[D]/dt). Its standard SI unit is mol L⁻¹ s⁻¹ (or atm s⁻¹ for gaseous reactions).",
            questionFraming: "Numerical — 'For 2N₂O₅ ⟶ 4NO₂ + O₂, if the rate of formation of NO₂ is 2.8 × 10⁻³ M s⁻¹, calculate the rate of disappearance of N₂O₅ and rate of formation of O₂.'",
            textbookRef: "Average rate r_av = −Δ[R]/Δt = +Δ[P]/Δt. Instantaneous rate r_inst = −d[R]/dt = +d[P]/dt (slope of tangent to concentration-time curve at instant t). Unit of rate is always mol L⁻¹ s⁻¹.",
            keyFormulas: [
              "r_av = −Δ[R]/Δt = +Δ[P]/Δt",
              "For aA + bB ⟶ cC + dD: Rate = −(1/a)d[A]/dt = −(1/b)d[B]/dt = +(1/c)d[C]/dt = +(1/d)d[D]/dt",
              "Unit of Rate: mol L⁻¹ s⁻¹ (independent of order)"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-3-2',
        title: '3.2 Rate Law, Order of Reaction vs Molecularity',
        sections: [
          {
            id: 'chem-sec-3-2',
            title: 'Experimental Rate Law, Specific Rate Constant (k), Order & Molecularity',
            explanation: "The rate law is an experimentally determined mathematical expression relating the reaction rate to the molar concentrations of reactants raised to powers (Rate = k[A]^x[B]^y), where x and y may or may not equal the stoichiometric coefficients a and b. The sum (x + y) is the overall Order of the reaction, which can be zero, positive integer, negative, or fractional, and applies to both elementary and complex multi-step reactions (determined by the slowest Rate-Determining Step, RDS). Molecularity is the number of reacting species (atoms, ions, or molecules) colliding simultaneously in an elementary reaction; it is a theoretical concept, always a natural whole number (1, 2, or 3), and has no meaning for complex reactions.",
            questionFraming: "Distinction (2–3 Marks) — 'List four points of difference between Order and Molecularity of a reaction.'\nUnit Identification — 'Identify the order of a reaction from the unit of its rate constant k: (i) L mol⁻¹ s⁻¹, (ii) s⁻¹.'",
            textbookRef: "Rate = k[A]^x[B]^y; Order n = x + y. General unit of rate constant k = (mol L⁻¹)^(1−n) s⁻¹. For Zero order (n=0): mol L⁻¹ s⁻¹; First order (n=1): s⁻¹; Second order (n=2): mol⁻¹ L s⁻¹. Trimolecular or higher molecularity (>3) reactions are rare because the probability of more than three molecules colliding simultaneously and effectively is extremely small.",
            keyFormulas: [
              "Rate = k[A]^x[B]^y  ⟹  Overall Order n = x + y",
              "Units of k = (mol L⁻¹)^(1−n) · s⁻¹ = mol^(1−n) L^(n−1) s⁻¹",
              "Zero Order (n=0): mol L⁻¹ s⁻¹  |  First Order (n=1): s⁻¹  |  Second Order (n=2): L mol⁻¹ s⁻¹"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-3-3',
        title: '3.3 Integrated Rate Equations, Half-Life & Pseudo-First-Order Reactions',
        isImportant: true,
        examTag: 'Guaranteed 3M/5M Numerical',
        sections: [
          {
            id: 'chem-sec-3-3',
            title: 'Zero-Order & First-Order Integrated Equations, Half-Life & Gas-Phase Kinetics',
            explanation: "• Zero-Order Reaction (n = 0): Rate is independent of reactant concentration (−d[R]/dt = k[R]⁰ = k). Integrating gives [R] = [R]₀ − kt, so k = ([R]₀ − [R])/t. A plot of [R] vs t is linear with slope = −k. Half-life t₁/₂ = [R]₀ / (2k) is directly proportional to initial concentration [R]₀. Examples: Enzyme-catalysed reactions at high substrate concentration, thermal decomposition of NH₃ on hot Pt surface at high pressure, decomposition of HI on Au surface.\n• First-Order Reaction (n = 1): Rate is proportional to the first power of reactant concentration (−d[R]/dt = k[R]). Integrating gives ln([R]₀/[R]) = kt or k = (2.303/t) log([R]₀/[R]). Half-life t₁/₂ = ln(2)/k = 0.693/k, which is strictly independent of initial concentration [R]₀. Examples: Radioactive decay, decomposition of N₂O₅ and H₂O₂, hydrogenation of ethene.\n• Gas-Phase First-Order Reaction A(g) ⟶ B(g) + C(g): In terms of initial pressure P_i and total pressure P_t at time t, partial pressure of A is P_A = (2P_i − P_t), so k = (2.303/t) log[P_i / (2P_i − P_t)].\n• Pseudo-First-Order Reaction: A bimolecular (or higher) reaction that behaves as first order because one reactant (usually the solvent, water) is present in such large excess that its concentration remains practically constant. Examples: Acid-catalysed hydrolysis of ethyl acetate (CH₃COOC₂H₅ + H₂O) and inversion of cane sugar.",
            questionFraming: "Derivation & Numerical (3–5 Marks) — 'Derive the integrated rate equation and half-life expression for a first-order reaction. Prove that the time required for 99.9% completion of a first-order reaction is 10 times its half-life (t₁/₂).'",
            textbookRef: "Zero order: k = ([R]₀ − [R])/t, t₁/₂ = [R]₀/(2k). First order: k = (2.303/t) log([R]₀/[R]), t₁/₂ = 0.693/k. Time relationships for 1st order: t₉₉.₉% = 10 × t₁/₂; t₉₉% = 2 × t₉₀%; t₇₅% = 2 × t₁/₂.",
            derivations: "Step 1 (First-Order Differential Law): $-\\frac{d[R]}{dt} = k[R] \\implies \\frac{d[R]}{[R]} = -k\\,dt$\nStep 2 (Integrate from $[R]_0$ at $t=0$ to $[R]$ at time $t$): $\\int_{[R]_0}^{[R]} \\frac{d[R]}{[R]} = -k \\int_0^t dt \\implies \\ln[R] - \\ln[R]_0 = -kt$\nStep 3 (Logarithmic Form): $$k = \\frac{1}{t}\\ln\\frac{[R]_0}{[R]} = \\frac{2.303}{t}\\log_{10}\\frac{[R]_0}{[R]}$$\nStep 4 (Half-Life $t_{1/2}$ at $[R] = [R]_0 / 2$): $$t_{1/2} = \\frac{2.303}{k}\\log_{10}(2) = \\frac{2.303 \\times 0.3010}{k} = \\frac{0.693}{k}$$",
            keyFormulas: [
              "Zero Order: k = ([R]₀ − [R]) / t   |   t₁/₂ = [R]₀ / (2k)",
              "First Order: k = (2.303 / t) log([R]₀ / [R])   |   t₁/₂ = 0.693 / k",
              "Gas Phase 1st Order (A ⟶ B + C): k = (2.303 / t) log[P_i / (2P_i − P_t)]",
              "First-Order Shortcuts: t₉₉.₉% = 10 · t₁/₂  |  t₉₉% = 2 · t₉₀%  |  t₇₅% = 2 · t₁/₂"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-3-4',
        title: '3.4 Temperature Dependence of Rate: Arrhenius Equation & Catalyst',
        isImportant: true,
        examTag: 'Important 3M Numerical',
        sections: [
          {
            id: 'chem-sec-3-4',
            title: 'Arrhenius Equation, Activation Energy (Eₐ), Maxwell-Boltzmann Curve & Catalyst',
            explanation: "For most chemical reactions, the rate constant k nearly doubles for every 10°C (or 10 K) rise in temperature. Svante Arrhenius quantified this via k = A · e^(−Eₐ/RT), where A is the Arrhenius frequency (pre-exponential) factor, Eₐ is the activation energy (in J mol⁻¹), R = 8.314 J K⁻¹ mol⁻¹, and T is absolute temperature in Kelvin. The exponential factor e^(−Eₐ/RT) represents the fraction of molecules having kinetic energy equal to or greater than Eₐ. On the Maxwell-Boltzmann distribution curve (fraction of molecules ΔN/N vs kinetic energy), raising temperature from T to (T+10) flattens the peak, shifts the most probable kinetic energy to the right, and nearly doubles the shaded area beyond Eₐ. A positive catalyst provides an alternate reaction pathway with a lower activation energy (Eₐ,cat < Eₐ,uncat), accelerating both forward and backward reactions equally without altering ΔG, ΔH, or the equilibrium constant K_eq.",
            questionFraming: "Numerical (3 Marks) — 'The rate of a reaction quadruples when temperature changes from 293 K to 313 K. Calculate the energy of activation Eₐ assuming it does not change with temperature.'",
            textbookRef: "ln k = ln A − Eₐ/(RT); log k = log A − Eₐ/(2.303 RT). Plot of log k vs 1/T has slope = −Eₐ/(2.303 R). Two-temperature equation: log(k₂/k₁) = [Eₐ / (2.303 R)] · [(T₂ − T₁) / (T₁T₂)]. Threshold Energy = Activation Energy + Average Kinetic Energy of reactants.",
            keyFormulas: [
              "k = A · e^(−Eₐ / RT)",
              "log k = log A − Eₐ / (2.303 RT)   [Slope of log k vs 1/T = −Eₐ / 2.303R]",
              "log(k₂ / k₁) = (Eₐ / 2.303 R) · [(T₂ − T₁) / (T₁ · T₂)]"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-3-5',
        title: '3.5 Collision Theory of Chemical Reactions',
        sections: [
          {
            id: 'chem-sec-3-5',
            title: 'Collision Frequency (Z), Energy Barrier & Steric Orientation Factor (P)',
            explanation: "According to collision theory, reactant molecules are hard spheres and reaction occurs only when they collide. However, not all collisions lead to product formation. For an effective collision, two simultaneous barriers must be overcome: (1) Energy Barrier: colliding molecules must possess total kinetic energy ≥ Threshold Energy; and (2) Orientation Barrier: reacting molecules must collide with proper steric orientation so that old bonds can break and new bonds can form (e.g., in bromomethane + OH⁻ SN2 attack, OH⁻ must approach from the backside). Incorporating the steric/probability factor P gives the modified rate constant expression: k = P · Z_AB · e^(−Eₐ/RT), where Z_AB is the collision frequency.",
            questionFraming: "Conceptual — 'Define collision frequency and steric factor. Why do all collisions having energy greater than threshold energy still not lead to product formation?'",
            textbookRef: "Rate = P · Z_AB · e^(−Eₐ/RT). Effective collisions require both sufficient kinetic energy (≥ threshold energy) and proper orientation of colliding molecules.",
            keyFormulas: [
              "k = P · Z_AB · e^(−Eₐ / RT)",
              "Effective Collision = Energy Barrier (E ≥ E_th) + Proper Orientation (P)"
            ]
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CHAPTER 5: COORDINATION COMPOUNDS
  // ==========================================================================
  'chem-ch-5': {
    id: 'chem-ch-5',
    number: 5,
    title: 'Coordination Compounds',
    tag: 'Inorganic Chemistry',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'chem-sub-5-1',
        title: "5.1 Werner's Theory, Double Salts vs Complexes & Ligands",
        sections: [
          {
            id: 'chem-sec-5-1',
            title: "Werner's Primary & Secondary Valences, Denticity, Chelation & Ambidentate Ligands",
            explanation: "• Werner's Coordination Theory: Metal ions in coordination compounds possess two types of valences: (1) Primary Valence — corresponds to Oxidation State, is ionisable, non-directional, and satisfied by negative ions; (2) Secondary Valence — corresponds to Coordination Number (CN), is non-ionisable, directional (determines geometry like octahedral CN=6 or tetrahedral/square planar CN=4), and satisfied by neutral molecules or negative ions.\n• Double Salt vs Coordination Complex: A double salt such as Mohr's salt [FeSO₄·(NH₄)₂SO₄·6H₂O] or Carnallite (KCl·MgCl₂·6H₂O) dissociates completely into simple ions in water, whereas a coordination complex like K₄[Fe(CN)₆] retains the identity of its complex ion [Fe(CN)₆]⁴⁻ in aqueous solution.\n• Ligands & Chelation: Unidentate (Cl⁻, H₂O, NH₃), Bidentate [ethane-1,2-diamine (en), oxalate (C₂O₄²⁻)], Polydentate/Hexadentate (EDTA⁴⁻, binds via 2 N and 4 O atoms). Chelating ligands form stable 5- or 6-membered rings around the central metal ion (Chelate Effect). Ambidentate ligands have two different donor atoms but ligate through only one at a time: NO₂⁻ (nitro-N vs nitrito-O) and SCN⁻ (thiocyanato-S vs isothiocyanato-N).",
            questionFraming: "Conceptual (2–3 Marks) — 'When 1 mol of CrCl₃·6H₂O is treated with excess AgNO₃, 3 mol of AgCl are precipitated. Write the structural formula of the complex.' ⟶ [Cr(H₂O)₆]Cl₃.\n'Define ambidentate ligand and chelate effect with one example each.'",
            textbookRef: "Primary valence = oxidation state (ionisable); Secondary valence = coordination number (non-ionisable, directional). Denticity of EDTA⁴⁻ is 6 (hexadentate). Homoleptic complexes have only one kind of donor group (e.g. [Co(NH₃)₆]³⁺), whereas heteroleptic complexes have more than one kind of ligand (e.g. [Co(NH₃)₄Cl₂]⁺).",
            keyFormulas: [
              "Primary Valence = Oxidation State (ionisable) | Secondary Valence = Coordination Number (non-ionisable)",
              "Ambidentate Ligands: −NO₂ (nitro-N) vs −ONO (nitrito-O); −SCN vs −NCS",
              "EDTA⁴⁻: Hexadentate ligand (2 Nitrogen + 4 Oxygen donor atoms)"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-5-2',
        title: '5.2 IUPAC Nomenclature of Coordination Compounds',
        sections: [
          {
            id: 'chem-sec-5-2',
            title: 'Systematic Rules for Naming & Writing Formulas of Coordination Entities',
            explanation: "Key IUPAC Rules: (1) The cation is always named first, followed by the anion (whether complex or simple). (2) Inside the coordination sphere, ligands are named in strict alphabetical order before the central metal atom/ion (ignoring numerical prefixes di-, tri-, bis-). (3) Anionic ligands end in '-o' (chlorido, cyanido, oxalato, hydroxido, carbonato, sulphato), neutral ligands retain their name except aqua (H₂O), ammine (NH₃), carbonyl (CO), and nitrosyl (NO). (4) If the ligand name already contains a numerical prefix (like ethane-1,2-diamine), use bis (2), tris (3), tetrakis (4) and place the ligand in parentheses. (5) If the coordination entity is cationic or neutral, the metal keeps its standard element name; if the coordination entity is anionic, the metal name ends in '-ate' (cobaltate, ferrate, argentate, platinate, chromate, nickellate, cuprate, aurate) followed by its Roman numeral oxidation state in parentheses.",
            questionFraming: "Direct Board Question (2–3 Marks) — 'Write the IUPAC names of: (i) [Pt(NH₃)₂Cl(NO₂)], (ii) K₃[Cr(C₂O₄)₃], (iii) [CoCl₂(en)₂]Cl, (iv) [Ag(NH₃)₂][Ag(CN)₂].'",
            textbookRef: "[Pt(NH₃)₂Cl(NO₂)]: Diamminechloridonitrito-N-platinum(II). K₃[Cr(C₂O₄)₃]: Potassium trioxalatochromate(III). [CoCl₂(en)₂]Cl: Dichloridobis(ethane-1,2-diamine)cobalt(III) chloride. [Ag(NH₃)₂][Ag(CN)₂]: Diamminesilver(I) dicyanidoargentate(I).",
            keyFormulas: [
              "Order of Naming: Cation first ⟶ Anion second",
              "Inside Sphere: Ligands (alphabetical) ⟶ Metal (with '-ate' if anionic complex) ⟶ (Oxidation State in Roman)",
              "Special Neutral Names: H₂O = aqua, NH₃ = ammine (double m!), CO = carbonyl, NO = nitrosyl"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-5-3',
        title: '5.3 Isomerism in Coordination Compounds (Stereoisomerism & Structural)',
        sections: [
          {
            id: 'chem-sec-5-3',
            title: 'Geometrical (cis/trans, fac/mer), Optical & Structural Isomerisms',
            explanation: "1. Stereoisomerism (same bond connectivity, different 3D spatial arrangement):\n   • Geometrical Isomerism (cis-trans): Found in Square Planar [MA₂B₂], [MABXL] (NOT in tetrahedral complexes because all four positions are equidistant at 109.5°!) and Octahedral [MA₄B₂], [MA₂B₂(en)₂], and [MA₃B₃] which exhibits facial (fac — 3 identical ligands on one triangular face) and meridional (mer — 3 ligands around the meridian).\n   • Optical Isomerism (Enantiomers / d- and l-isomers): Non-superimposable mirror images lacking a plane of symmetry (chiral). Very common in octahedral complexes with bidentate chelating ligands such as [Co(en)₃]³⁺, [Cr(C₂O₄)₃]³⁻, and cis-[PtCl₂(en)₂]²⁺ (Note: trans-[PtCl₂(en)₂]²⁺ is optically inactive due to a plane of symmetry / meso form!).\n2. Structural Isomerism (different connectivity):\n   • Linkage Isomerism: Arises when an ambidentate ligand is present, e.g. [Co(NH₃)₅(NO₂)]Cl₂ (yellow, N-bonded) and [Co(NH₃)₅(ONO)]Cl₂ (red, O-bonded).\n   • Coordination Isomerism: Interchange of ligands between cationic and anionic coordination entities, e.g. [Co(NH₃)₆][Cr(CN)₆] and [Cr(NH₃)₆][Co(CN)₆].\n   • Ionisation Isomerism: Counter-ion and ligand exchange places, yielding different ions in solution, e.g. [Co(NH₃)₅SO₄]Br (gives white AgBr ppt with AgNO₃) and [Co(NH₃)₅Br]SO₄ (gives white BaSO₄ ppt with BaCl₂).\n   • Solvate (Hydrate) Isomerism: Water molecules differ inside/outside sphere, e.g. [Cr(H₂O)₆]Cl₃ (violet), [Cr(H₂O)₅Cl]Cl₂·H₂O (blue-green), and [Cr(H₂O)₄Cl₂]Cl·2H₂O (dark green).",
            questionFraming: "Drawing & Reasoning (3 Marks) — 'Draw the geometrical and optical isomers of [PtCl₂(en)₂]²⁺. Why is the trans-isomer optically inactive?'",
            textbookRef: "Tetrahedral complexes do not show geometrical isomerism. Square planar complexes rarely show optical isomerism. cis-[M(aa)₂X₂] is optically active (chiral), whereas trans-[M(aa)₂X₂] is achiral due to a plane of symmetry.",
            keyFormulas: [
              "[MA₃B₃] Octahedral: Facial (fac) & Meridional (mer) isomers",
              "cis-[Co(en)₂Cl₂]⁺: Optically ACTIVE (d & l pair) | trans-[Co(en)₂Cl₂]⁺: Optically INACTIVE",
              "Total stereoisomers of [Co(en)₂Cl₂]⁺ = 3 (trans + d-cis + l-cis)"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-5-4',
        title: '5.4 Bonding in Coordination Compounds: Valence Bond Theory (VBT)',
        sections: [
          {
            id: 'chem-sec-5-4',
            title: 'Hybridisation, Inner vs Outer Orbital Complexes & Spin-Only Magnetic Moment',
            explanation: "According to Pauling's Valence Bond Theory (VBT), the central metal ion makes available a number of empty s, p, and d orbitals equal to its coordination number to undergo hybridisation and accept electron pairs from ligands:\n• Octahedral Complexes (CN = 6): Either inner 3d orbitals are used giving d²sp³ hybridisation (Inner Orbital / Low-Spin complex, formed with strong ligands like CN⁻, CO, NH₃, en) or outer 4d orbitals are used giving sp³d² hybridisation (Outer Orbital / High-Spin complex, formed with weak halide ligands F⁻, Cl⁻, H₂O).\n  – [Co(NH₃)₆]³⁺: Co³⁺ (3d⁶), NH₃ pairs up electrons ⟹ d²sp³ (inner orbital), diamagnetic (n=0).\n  – [CoF₆]³⁻: Co³⁺ (3d⁶), F⁻ does not pair electrons ⟹ sp³d² (outer orbital), paramagnetic (n=4 unpaired e⁻, μ = √24 = 4.90 BM).\n• Coordination Number 4 (Tetrahedral sp³ vs Square Planar dsp²):\n  – [Ni(CN)₄]²⁻: Ni²⁺ (3d⁸), strong CN⁻ pairs up the two unpaired 3d electrons ⟹ dsp², Square Planar, Diamagnetic (n=0).\n  – [NiCl₄]²⁻: Ni²⁺ (3d⁸), weak Cl⁻ does not pair 3d electrons ⟹ sp³, Tetrahedral, Paramagnetic (n=2, μ = √8 = 2.83 BM).\n  – [Ni(CO)₄]: Ni⁰ (3d⁸ 4s² ⟶ 3d¹⁰ rearrangement under strong CO) ⟹ sp³, Tetrahedral, Diamagnetic (n=0)!",
            questionFraming: "Guaranteed 3M/5M Question — 'Using Valence Bond Theory, explain the hybridisation, geometry, and magnetic behaviour of: (a) [Co(NH₃)₆]³⁺ vs [CoF₆]³⁻, (b) [Ni(CN)₄]²⁻ vs [NiCl₄]²⁻.'",
            textbookRef: "Spin-only magnetic moment μ = √[n(n+2)] Bohr Magneton (BM). Limitations of VBT: Fails to explain colour of complexes, quantitative magnetic data, thermodynamic/kinetic stabilities, or why some ligands are strong and others weak.",
            keyFormulas: [
              "CN = 4: sp³ (Tetrahedral) or dsp² (Square Planar)",
              "CN = 6: d²sp³ (Inner Orbital Octahedral) or sp³d² (Outer Orbital Octahedral)",
              "Spin-only Magnetic Moment: μ = √[n(n + 2)] BM"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-5-5',
        title: '5.5 Crystal Field Theory (CFT), Colour & Metal Carbonyls',
        isImportant: true,
        examTag: 'Guaranteed 3M/5M Question',
        sections: [
          {
            id: 'chem-sec-5-5',
            title: 'Octahedral & Tetrahedral d-Orbital Splitting, Spectrochemical Series & Synergic Bonding',
            explanation: "• Crystal Field Theory (CFT) treats metal-ligand interaction as purely electrostatic, removing the degeneracy of the five d-orbitals:\n  1. Octahedral Field: Six ligands approach along the coordinate axes (x, y, z). The axial orbitals (d_{x²−y²}, d_{z²}) experience greater repulsion and rise in energy to form the e_g set (+0.6 Δ₀ above barycentre), while the non-axial orbitals (d_xy, d_yz, d_xz) drop in energy to form the t₂g set (−0.4 Δ₀). For a d⁴ ion: if Δ₀ < P (weak field ligand), the 4th electron enters e_g giving t₂g³ e_g¹ (high-spin); if Δ₀ > P (strong field ligand), electrons pair in t₂g giving t₂g⁴ e_g⁰ (low-spin).\n  2. Tetrahedral Field: Four ligands approach between the axes. Splitting is inverted and smaller: Δ_t = (4/9) Δ₀. Because Δ_t is always smaller than pairing energy P, tetrahedral complexes are almost always high-spin (e comes below t₂).\n• Spectrochemical Series (increasing field strength): I⁻ < Br⁻ < SCN⁻ < Cl⁻ < S²⁻ < F⁻ < OH⁻ < C₂O₄²⁻ < H₂O < NCS⁻ < edta⁴⁻ < NH₃ < en < CN⁻ < CO.\n• Colour in Coordination Compounds: Arises from d–d transition of an electron from lower energy d-orbital to higher energy d-orbital by absorbing visible light; the transmitted complementary colour is observed. d⁰ (e.g. Ti⁴⁺, Sc³⁺) and d¹⁰ (e.g. Zn²⁺, Cu⁺) complexes are colourless! Heating [Ti(H₂O)₆]Cl₃ (violet) removes water ligands; without ligands there is no crystal field splitting, so anhydrous TiCl₃ becomes colourless.\n• Bonding in Metal Carbonyls (Synergic Effect): Metal–CO bond has both σ and π character. M←C σ-bond is formed by donation of lone pair on carbonyl carbon into a vacant d-orbital of metal; M→C π-bond (back-bonding) is formed by sideways donation of electrons from a filled metal d-orbital into the vacant antibonding π* orbital of CO. This creates a synergic effect that strengthens the M–C bond and weakens the C–O bond.",
            questionFraming: "Give-Reason & Diagram (3 Marks) — 'Draw the crystal field splitting of d-orbitals in an octahedral field. Write the electronic configuration of a d⁴ ion when (i) Δ₀ > P and (ii) Δ₀ < P. Explain synergic bonding in metal carbonyls.'",
            textbookRef: "Octahedral CFSE: E(t₂g) = −0.4 Δ₀, E(e_g) = +0.6 Δ₀. Tetrahedral splitting Δ_t = (4/9) Δ₀. [Ni(CO)₄] is tetrahedral, [Fe(CO)₅] is trigonal bipyramidal, [Cr(CO)₆] is octahedral.",
            keyFormulas: [
              "Octahedral Splitting: t₂g (−0.4 Δ₀) below barycentre; e_g (+0.6 Δ₀) above barycentre",
              "Tetrahedral Splitting: Δ_t = (4 / 9) Δ₀  (Inverted: e below t₂; always High-Spin)",
              "d⁴ Configuration: Δ₀ < P ⟹ t₂g³ e_g¹ (High-Spin)  |  Δ₀ > P ⟹ t₂g⁴ e_g⁰ (Low-Spin)",
              "Synergic Bonding: M←CO (σ donation) + M→CO (π* back-donation)"
            ]
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CHAPTER 8: ALDEHYDES, KETONES AND CARBOXYLIC ACIDS
  // ==========================================================================
  'chem-ch-8': {
    id: 'chem-ch-8',
    number: 8,
    title: 'Aldehydes, Ketones and Carboxylic Acids',
    tag: 'Organic Chemistry',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'chem-sub-8-1',
        title: '8.1 Nomenclature, Structure of Carbonyl Group & Preparation of Aldehydes/Ketones',
        sections: [
          {
            id: 'chem-sec-8-1',
            title: 'sp² Carbonyl Polarity, Rosenmund, Stephen, Etard & Gatterman-Koch Reactions',
            explanation: "The carbonyl carbon (>C=O) is sp²-hybridised with a trigonal planar geometry (bond angles ≈ 120°). Because oxygen is much more electronegative than carbon, the C=O π-electron cloud is strongly polarised toward oxygen (>C^δ+=O^δ−), making the carbonyl carbon an electrophilic (Lewis acid) centre and carbonyl oxygen a nucleophilic (Lewis base) centre.\n• Key Preparations of Aldehydes:\n  1. Rosenmund Reduction: Acyl chloride (R–COCl) hydrogenated over Pd supported on BaSO₄ gives R–CHO.\n  2. Stephen Reaction: Nitriles (R–CN) reduced with SnCl₂ + HCl to imine hydrochloride, followed by hydrolysis (H₃O⁺) give R–CHO. (DIBAL-H also selectively reduces nitriles and esters to aldehydes).\n  3. Etard Reaction: Toluene oxidised with chromyl chloride (CrO₂Cl₂ in CS₂) followed by H₃O⁺ yields Benzaldehyde.\n  4. Side-chain Chlorination of Toluene: Toluene + Cl₂/hν gives benzal chloride (C₆H₅CHCl₂), which on hydrolysis at 373 K yields Benzaldehyde.\n  5. Gatterman-Koch Reaction: Benzene treated with CO + HCl in the presence of anhydrous AlCl₃/CuCl gives Benzaldehyde.\n• Key Preparations of Ketones:\n  1. From Acyl Chlorides: 2 R'COCl + R₂Cd (dialkylcadmium) ⟶ 2 R'–CO–R + CdCl₂.\n  2. From Nitriles: R–CN + R'MgX (Grignard reagent) in dry ether followed by H₃O⁺ ⟶ R–CO–R'.\n  3. Friedel-Crafts Acylation: Benzene + RCOCl (or ArCOCl) in anhyd. AlCl₃ ⟶ Alkyl/Aryl phenyl ketone.",
            questionFraming: "Named Reactions & Conversions (3 Marks) — 'Write the chemical equations for: (i) Rosenmund reduction, (ii) Etard reaction, (iii) Stephen reaction, (iv) Gatterman-Koch reaction.'",
            textbookRef: "Carbonyl carbon is sp² hybridised (120° planar). DIBAL-H reduces unsaturated nitriles/esters to aldehydes without reducing C=C double bonds.",
            keyFormulas: [
              "Rosenmund: RCOCl + H₂ ──(Pd/BaSO₄)──> RCHO + HCl",
              "Stephen: RCN + SnCl₂/HCl ⟶ [RCH=NH] ──(H₃O⁺)──> RCHO",
              "Etard: C₆H₅CH₃ + CrO₂Cl₂ (CS₂) ──(H₃O⁺)──> C₆H₅CHO",
              "Gatterman-Koch: C₆H₆ + CO + HCl ──(Anhyd. AlCl₃/CuCl)──> C₆H₅CHO"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-8-2',
        title: '8.2 Physical Properties of Aldehydes and Ketones',
        sections: [
          {
            id: 'chem-sec-8-2',
            title: 'Boiling Point Order & Aqueous Solubility of Carbonyl Compounds',
            explanation: "The boiling points of aldehydes and ketones are higher than those of non-polar hydrocarbons and weakly polar ethers of comparable molecular masses due to stronger dipole-dipole interactions between polar >C=O groups. However, their boiling points are lower than those of alcohols and carboxylic acids of comparable masses because aldehydes and ketones cannot form intermolecular hydrogen bonds with themselves. Lower members (methanal, ethanal, propanone) are miscible with water in all proportions because their carbonyl oxygen can form hydrogen bonds with water molecules; solubility decreases rapidly as the hydrophobic alkyl chain length increases.",
            questionFraming: "Arrange in Order (1–2 Marks) — 'Arrange the following in increasing order of boiling points: CH₃CH₂CH₂CHO, CH₃CH₂CH₂CH₂OH, C₂H₅OC₂H₅, CH₃CH₂CH₂CH₂CH₃.'",
            textbookRef: "Boiling point order for comparable molar mass: Carboxylic Acids > Alcohols > Ketones ≥ Aldehydes > Ethers > Hydrocarbons.",
            keyFormulas: [
              "Boiling Point Order: RCOOH > ROH > RCOR' ≥ RCHO > ROR' > RH",
              "Water Solubility: Decreases with increasing alkyl chain length (C > 4 practically insoluble)"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-8-3',
        title: '8.3 Nucleophilic Addition, Reduction & Chemical Distinction Tests',
        isImportant: true,
        examTag: 'Guaranteed 5M Organic Question',
        sections: [
          {
            id: 'chem-sec-8-3',
            title: 'Reactivity Order, Ammonia Derivatives, Clemmensen, Wolff-Kishner, Tollens, Fehling & Iodoform',
            explanation: "• Nucleophilic Addition Mechanism & Reactivity: A nucleophile (Nu⁻) attacks the planar sp² carbonyl carbon perpendicularly, changing hybridisation from sp² to sp³ and forming a tetrahedral alkoxide intermediate, which then captures H⁺ to yield the addition product. Aldehydes are MORE reactive than ketones due to: (1) Steric Reason — two bulky alkyl/aryl groups in ketones hinder the approach of the nucleophile compared to only one group in aldehydes; (2) Electronic Reason — two +I alkyl groups in ketones reduce the electrophilicity (+δ charge) of the carbonyl carbon more than in aldehydes. Aromatic aldehydes (Benzaldehyde) are less reactive than aliphatic aldehydes because the +R resonance effect of the benzene ring decreases the positive charge on the carbonyl carbon.\n  – Reactivity Order: HCHO > CH₃CHO > C₆H₅CHO > CH₃COCH₃ > C₆H₅COCH₃ > C₆H₅COC₆H₅.\n• Addition of HCN, NaHSO₃, Grignard Reagents, Alcohols (Hemiacetal/Acetal & Ketal) & Ammonia Derivatives (NH₂–Z ⟶ >C=N–Z + H₂O at pH ≈ 3.5: Hydroxylamine ⟶ Oxime; Hydrazine ⟶ Hydrazone; Phenylhydrazine ⟶ Phenylhydrazone; 2,4-DNP ⟶ Orange/Red 2,4-DNP precipitate; Semicarbazide ⟶ Semicarbazone).\n• Reduction to Hydrocarbons: (1) Clemmensen Reduction: Zn–Hg amalgam + conc. HCl reduces >C=O to >CH₂; (2) Wolff-Kishner Reduction: NH₂NH₂ followed by heating with KOH/NaOH in ethylene glycol reduces >C=O to >CH₂.\n• Oxidation & Chemical Distinction Tests:\n  1. Tollens' Test (Ammoniacal AgNO₃): Aldehydes (both aliphatic AND aromatic) reduce [Ag(NH₃)₂]⁺ to a bright Silver Mirror (Ag↓). Ketones do NOT react.\n  2. Fehling's Test (Fehling A = aq. CuSO₄ + Fehling B = alkaline sodium potassium tartrate / Rochelle salt): Aliphatic aldehydes give a reddish-brown precipitate of Cu₂O. Aromatic aldehydes (Benzaldehyde) and Ketones do NOT react!\n  3. Haloform / Iodoform Test (NaOH + I₂ or NaOI): Compounds containing the CH₃–C=O group or CH₃–CH(OH)– group give a yellow precipitate of Iodoform (CHI₃).",
            questionFraming: "Multi-Part 5M Board Question — '(a) Why is propanal more reactive than propanone towards nucleophilic addition? (b) Why is pH carefully controlled during reaction of aldehydes with ammonia derivatives? (c) Give simple chemical tests to distinguish between: (i) Propanal and Propanone, (ii) Benzaldehyde and Acetophenone, (iii) Pentan-2-one and Pentan-3-one.'",
            textbookRef: "In Semicarbazide (NH₂–NH–CO–NH₂), only the –NH₂ group not directly attached to C=O acts as nucleophile because the lone pair of the other –NH₂ is delocalised by resonance with the C=O group.",
            keyFormulas: [
              "Reactivity Order: HCHO > CH₃CHO > C₆H₅CHO > CH₃COCH₃ > C₆H₅COCH₃",
              "Clemmensen: >C=O ──(Zn–Hg / conc. HCl)──> >CH₂ + H₂O",
              "Wolff-Kishner: >C=O ──(NH₂NH₂, KOH/Ethylene glycol, Δ)──> >CH₂ + N₂",
              "Tollens' Test: RCHO + 2[Ag(NH₃)₂]⁺ + 3OH⁻ ⟶ RCOO⁻ + 2Ag↓ (Silver Mirror) + 4NH₃ + 2H₂O",
              "Iodoform Test: R–CO–CH₃ + 3NaOI ⟶ RCOONa + CHI₃↓ (Yellow ppt) + 2NaOH"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-8-4',
        title: '8.4 Reactions Due to α-Hydrogen: Aldol vs Cannizzaro',
        isImportant: true,
        examTag: 'Guaranteed Named Reaction',
        sections: [
          {
            id: 'chem-sec-8-4',
            title: 'Acidity of α-Hydrogens, Aldol, Cross-Aldol & Cannizzaro Reactions',
            explanation: "• Acidity of α-Hydrogens: Hydrogens attached to the α-carbon of aldehydes and ketones are acidic due to the strong electron-withdrawing (−I) effect of the carbonyl group and resonance stabilisation of the resulting conjugate base (enolate ion).\n• Aldol Condensation: Aldehydes and ketones having at least ONE α-hydrogen undergo self-condensation in the presence of dilute alkali (dil. NaOH, Ba(OH)₂, or K₂CO₃) to form β-hydroxy aldehydes (aldols) or β-hydroxy ketones (ketols), which readily lose water on heating to yield α,β-unsaturated carbonyl compounds.\n• Cross-Aldol Condensation: Carried out between two different aldehydes and/or ketones. If both have α-hydrogens, a mixture of four products is obtained; if one lacks α-H (e.g., Benzaldehyde + Acetophenone in OH⁻ ⟶ Benzalacetophenone / Chalcone), a single major crossed product forms.\n• Cannizzaro Reaction: Aldehydes which have NO α-hydrogen atom (e.g. Formaldehyde HCHO, Benzaldehyde C₆H₅CHO, 2,2-Dimethylpropanal) undergo self-oxidation and reduction (disproportionation) on heating with concentrated alkali (50% NaOH or KOH): one molecule is reduced to an alcohol and the other is oxidised to a carboxylic acid salt.\n• Electrophilic Substitution in Aromatic Aldehydes/Ketones: The –CHO and –COR groups are deactivating and meta-directing (e.g., nitration of benzaldehyde gives m-nitrobenzaldehyde).",
            questionFraming: "Named Reactions (3 Marks) — 'Write the equations involved in (i) Aldol condensation of ethanal, (ii) Cannizzaro reaction of methanal and benzaldehyde.'",
            textbookRef: "Aldol requires ≥1 α-H and dilute alkali (10% NaOH). Cannizzaro requires 0 α-H and concentrated alkali (50% NaOH/KOH).",
            keyFormulas: [
              "Aldol: 2 CH₃CHO ──(dil. NaOH)──> CH₃CH(OH)CH₂CHO ──(Δ, −H₂O)──> CH₃CH=CHCHO (But-2-enal)",
              "Cannizzaro: 2 HCHO + conc. KOH (50%) ⟶ CH₃OH + HCOOK",
              "Cannizzaro: 2 C₆H₅CHO + conc. NaOH ⟶ C₆H₅CH₂OH + C₆H₅COONa"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-8-5',
        title: '8.5 Carboxylic Acids: Preparation, Acidity Trends & HVZ Reaction',
        sections: [
          {
            id: 'chem-sec-8-5',
            title: 'Preparation, Substituent Effects on Acidity (pKₐ), HVZ & Decarboxylation',
            explanation: "• Preparation of Carboxylic Acids: (1) Oxidation of primary alcohols and aldehydes with alkaline KMnO₄ or acidified K₂Cr₂O₇; (2) Hydrolysis of nitriles (RCN ⟶ RCONH₂ ⟶ RCOOH), esters, and acyl chlorides; (3) Grignard reagent + Dry Ice (CO₂) in dry ether followed by H₃O⁺ (step-up by 1 carbon); (4) Oxidation of alkylbenzenes (regardless of side-chain length, any primary/secondary alkyl group on benzene is oxidised to –COOH by alkaline KMnO₄).\n• Acidity of Carboxylic Acids: Carboxylic acids are stronger acids than phenols and alcohols because the carboxylate ion (RCOO⁻) is stabilised by two equivalent resonance structures in which negative charge resides on two electronegative oxygen atoms (whereas phenoxide has non-equivalent structures with charge on carbon). Electron-withdrawing groups (−I, −R like −CF₃, −NO₂, −F, −Cl) stabilise RCOO⁻ and increase acidity (lower pKₐ); electron-donating groups (+I like −CH₃, −C₂H₅) destabilise RCOO⁻ and decrease acidity (higher pKₐ).\n• Key Reactions: (1) Esterification with alcohols; (2) Reaction with PCl₅, PCl₃, SOCl₂ to form RCOCl; (3) Reaction with NH₃ followed by heating gives amides (Phthalic acid + NH₃ ──(Δ)──> Phthalamide ──(Strong Δ, −NH₃)──> Phthalimide); (4) Reduction with LiAlH₄ or B₂H₆ (NOT NaBH₄!) to 1° alcohols; (5) Soda-lime Decarboxylation (RCOONa + NaOH/CaO, Δ ⟶ R–H + Na₂CO₃); (6) Hell-Volhard-Zelinsky (HVZ) Reaction: Carboxylic acids having α-hydrogen are halogenated at the α-position with Cl₂ or Br₂ in the presence of small amount of Red Phosphorus.",
            questionFraming: "Acidity Order & Reasoning (3 Marks) — '(a) Arrange in increasing order of acid strength: CH₃CH₂CH(Br)COOH, CH₃CH(Br)CH₂COOH, (CH₃)₂CHCOOH, CH₃CH₂CH₂COOH. (b) Why does carboxylic acid not give the characteristic reactions of carbonyl group despite having a >C=O group?'",
            textbookRef: "The carboxyl carbon is less electrophilic than carbonyl carbon because of resonance donation of lone pair from the –OH oxygen (+R effect). Carboxylic acids are dimers in vapour phase or aprotic solvents like benzene due to cyclic hydrogen bonding.",
            keyFormulas: [
              "Acidity Order: CF₃COOH > CCl₃COOH > CHCl₂COOH > NO₂CH₂COOH > FCH₂COOH > ClCH₂COOH > HCOOH > C₆H₅COOH > CH₃COOH",
              "HVZ Reaction: R–CH₂–COOH ──(1. X₂ / Red P   2. H₂O)──> R–CH(X)–COOH",
              "Decarboxylation: RCOONa + NaOH ──(CaO, Δ)──> R–H + Na₂CO₃"
            ]
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CHAPTER 9: AMINES
  // ==========================================================================
  'chem-ch-9': {
    id: 'chem-ch-9',
    number: 9,
    title: 'Amines',
    tag: 'Organic Chemistry',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'chem-sub-9-1',
        title: '9.1 Structure, Classification & Preparation of Amines',
        isImportant: true,
        examTag: 'Important 3M Question',
        sections: [
          {
            id: 'chem-sec-9-1',
            title: 'Pyramidal sp³ Nitrogen, Ammonolysis, Gabriel Phthalimide & Hoffmann Bromamide',
            explanation: "Nitrogen in amines is trivalent and sp³-hybridised with a trigonal pyramidal geometry (one orbital occupied by an unshared pair of electrons; C–N–C bond angle in trimethylamine is 108°, slightly less than 109.5° due to lone pair–bond pair repulsion).\n• Key Methods of Preparation:\n  1. Reduction of Nitro Compounds: R–NO₂ or Ar–NO₂ reduced with H₂/Pd, Sn + HCl, or Fe + HCl gives R–NH₂ / Ar–NH₂. (Fe scrap + HCl is preferred industrially because FeCl₂ formed gets hydrolysed to release HCl, so only a small amount of HCl is needed to initiate the reaction).\n  2. Ammonolysis of Alkyl Halides: R–X + NH₃ ⟶ 1° ⟶ 2° ⟶ 3° amine ⟶ Quaternary ammonium salt (R₄N⁺X⁻). Gives a mixture of amines unless excess NH₃ is used; aryl halides do not react under normal conditions.\n  3. Reduction of Nitriles & Amides: R–C≡N ──(LiAlH₄ or H₂/Ni or Na(Hg)/C₂H₅OH)──> R–CH₂–NH₂ (Step-up by 1 carbon). R–CONH₂ ──(LiAlH₄ / H₂O)──> R–CH₂–NH₂.\n  4. Gabriel Phthalimide Synthesis: Phthalimide + alc. KOH ⟶ Potassium phthalimide ──(R–X)──> N-Alkylphthalimide ──(NaOH(aq))──> Pure 1° Aliphatic Amine (R–NH₂). Aromatic primary amines (Aniline) CANNOT be prepared by this method because aryl halides do not undergo nucleophilic substitution with the anion formed by phthalimide.\n  5. Hoffmann Bromamide Degradation: R–CONH₂ + Br₂ + 4NaOH ⟶ R–NH₂ + Na₂CO₃ + 2NaBr + 2H₂O (Step-down reaction: amine has one carbon less than the amide).",
            questionFraming: "Reasoning & Named Reactions (3 Marks) — '(a) Why cannot aromatic primary amines be prepared by Gabriel phthalimide synthesis? (b) Write the chemical equation for Hoffmann bromamide degradation reaction.'",
            textbookRef: "Hoffmann bromamide degradation decreases carbon chain length by one carbon, whereas reduction of nitriles (via KCN) increases carbon chain length by one carbon.",
            keyFormulas: [
              "Hoffmann Bromamide: RCONH₂ + Br₂ + 4NaOH ⟶ RNH₂ + Na₂CO₃ + 2NaBr + 2H₂O",
              "Gabriel Synthesis: Phthalimide ──(1. KOH  2. R–X  3. NaOH(aq))──> R–NH₂ (Only 1° Aliphatic!)",
              "Nitrile Reduction (Step-Up): R–X ──(KCN)──> R–CN ──(LiAlH₄ or H₂/Ni)──> R–CH₂NH₂"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-9-2',
        title: '9.2 Physical Properties & Basicity of Amines (Gas vs Aqueous)',
        sections: [
          {
            id: 'chem-sec-9-2',
            title: 'Boiling Point Order (1° > 2° > 3°) & Basicity Trends in Gas Phase vs Aqueous Solution',
            explanation: "• Physical Properties: Primary (RNH₂) and secondary (R₂NH) amines engage in intermolecular hydrogen bonding via N–H bonds, whereas tertiary amines (R₃N) have no H atom on nitrogen and cannot form H-bonds with each other. Since 1° amines have two H atoms for H-bonding compared to one in 2° amines, the boiling point order of isomeric amines is: Primary (1°) > Secondary (2°) > Tertiary (3°).\n• Basicity of Amines (Higher K_b = Smaller pK_b = Stronger Base):\n  1. Gas Phase (Purely +I Inductive Effect, no solvent): Tertiary (3°) > Secondary (2°) > Primary (1°) > NH₃.\n  2. Aqueous Solution (Interplay of three factors: +I Inductive effect, Solvation/Hydration of conjugate ammonium cation via H-bonding, and Steric Hindrance to protonation/hydration):\n     – For Ethyl Groups (C₂H₅): (C₂H₅)₂NH (2°) > (C₂H₅)₃N (3°) > C₂H₅NH₂ (1°) > NH₃   [Remember: 231].\n     – For Methyl Groups (CH₃): (CH₃)₂NH (2°) > CH₃NH₂ (1°) > (CH₃)₃N (3°) > NH₃   [Remember: 213].\n  3. Aromatic vs Aliphatic Amines (pK_b of Aniline is higher than Methylamine): Aniline is a much weaker base than ammonia and aliphatic amines because the lone pair on nitrogen is delocalised into the benzene ring by +R resonance, making it less available for protonation, and the anilinium ion (only 2 Kekulé structures) is less resonance-stabilised than aniline (5 resonance structures).",
            questionFraming: "Guaranteed 3M Board Question — 'Arrange the following in increasing order of basic strength: (i) C₆H₅NH₂, C₆H₅N(CH₃)₂, (C₂H₅)₂NH, CH₃NH₂ in aqueous solution; (ii) C₂H₅NH₂, (C₂H₅)₂NH, (C₂H₅)₃N in gas phase and in aqueous solution. Why is pK_b of aniline more than that of methylamine?'",
            textbookRef: "Boiling point of isomeric amines: 1° > 2° > 3°. Alcohols have higher boiling points than amines of comparable molar mass because O is more electronegative than N, forming stronger O–H···O hydrogen bonds.",
            keyFormulas: [
              "Boiling Point of Isomeric Amines: 1° (RNH₂) > 2° (R₂NH) > 3° (R₃N)",
              "Gas-Phase Basicity: 3° > 2° > 1° > NH₃",
              "Aqueous Basicity (Ethyl, C₂H₅): 2° > 3° > 1° > NH₃  [Code: 231]",
              "Aqueous Basicity (Methyl, CH₃): 2° > 1° > 3° > NH₃  [Code: 213]"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-9-3',
        title: "9.3 Chemical Reactions: Carbylamine Test & Hinsberg's Test",
        isImportant: true,
        examTag: 'Guaranteed 3M/5M Question',
        sections: [
          {
            id: 'chem-sec-9-3',
            title: 'Alkylation, Acylation, Carbylamine Isocyanide Test & Hinsberg Separation',
            explanation: "• Acylation: Aliphatic and aromatic primary and secondary amines react with acid chlorides, anhydrides, and esters by nucleophilic substitution to form amides (in the presence of a stronger base like pyridine, which removes HCl and shifts equilibrium right). Tertiary amines do not undergo acylation as they lack a replaceable H on nitrogen.\n• Carbylamine Reaction (Isocyanide Test): Aliphatic and aromatic PRIMARY (1°) amines on heating with chloroform (CHCl₃) and ethanolic potassium hydroxide (alc. KOH) form foul-smelling isocyanides (carbylamines). Secondary and tertiary amines do NOT give this test.\n• Reaction with Nitrous Acid (HNO₂ = NaNO₂ + HCl): Aliphatic 1° amines form unstable diazonium salts that immediately decompose to give alcohols with brisk quantitative evolution of N₂ gas (R–NH₂ + HNO₂ ⟶ R–OH + N₂↑ + H₂O). Aromatic 1° amines at 273–278 K (0–5°C) form stable Benzenediazonium Chloride.\n• Hinsberg's Test (Benzenesulphonyl Chloride, C₆H₅SO₂Cl):\n  – 1° Amine + C₆H₅SO₂Cl ⟶ N-Alkylbenzenesulphonamide (C₆H₅SO₂NHR), which contains an acidic H on N and is SOLUBLE in aqueous KOH.\n  – 2° Amine + C₆H₅SO₂Cl ⟶ N,N-Dialkylbenzenesulphonamide (C₆H₅SO₂NR₂), which has no acidic H on N and is INSOLUBLE in aqueous KOH.\n  – 3° Amine + C₆H₅SO₂Cl ⟶ No Reaction.",
            questionFraming: "Distinction Tests (3 Marks) — 'Give a chemical test to distinguish between: (i) Methylamine and Dimethylamine, (ii) Secondary and Tertiary amines, (iii) Ethylamine and Aniline.'",
            textbookRef: "Ethylamine and Aniline are distinguished by the Azo Dye test: Aniline + NaNO₂/HCl (0–5°C) followed by alkaline β-naphthol gives a brilliant orange-red dye, whereas ethylamine gives brisk effervescence of N₂ gas and forms ethanol.",
            keyFormulas: [
              "Carbylamine Test (Only 1°): R–NH₂ + CHCl₃ + 3KOH(alc.) ──(Δ)──> R–NC (Foul smell) + 3KCl + 3H₂O",
              "Hinsberg 1°: Reacts & Soluble in KOH | 2°: Reacts & Insoluble in KOH | 3°: Does NOT react",
              "Aliphatic 1° + HNO₂: RNH₂ + HNO₂ ⟶ ROH + N₂↑ + H₂O"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-9-4',
        title: '9.4 Electrophilic Substitution in Aromatic Amines (Aniline)',
        sections: [
          {
            id: 'chem-sec-9-4',
            title: 'Bromination, Nitration Anomaly, Protection by Acetylation, Sulphonation & Friedel-Crafts Failure',
            explanation: "The –NH₂ group is a powerful ortho- and para-directing and activating group:\n1. Bromination: Aniline reacts instantaneously with bromine water at room temperature to give a white precipitate of 2,4,6-tribromoaniline. To obtain monosubstituted p-bromoaniline, the activating effect of –NH₂ is moderated by acetylation with acetic anhydride [(CH₃CO)₂O / pyridine] to form acetanilide (–NHCOCH₃), where the lone pair on N interacts with the C=O group by resonance.\n2. Nitration: Direct nitration of aniline with conc. HNO₃ + conc. H₂SO₄ at 288 K yields a tarry oxidation product along with 51% p-nitroaniline, 47% m-nitroaniline, and 2% o-nitroaniline! This is because in the strongly acidic medium, aniline is protonated to form the anilinium ion (–NH₃⁺), which is deactivating and meta-directing. Protection by acetylation followed by nitration and hydrolysis gives p-nitroaniline as the major product.\n3. Sulphonation: Aniline + conc. H₂SO₄ at 453–473 K forms p-aminobenzenesulphonic acid (sulphanilic acid), which exists as a dipolar Zwitterion (+H₃N–C₆H₄–SO₃⁻).\n4. Why Aniline does NOT undergo Friedel-Crafts (Alkylation/Acylation) Reaction: Aniline (a Lewis base) forms an insoluble salt (C₆H₅NH₂⁺AlCl₃⁻) with the Lewis acid catalyst anhydrous AlCl₃. Consequently, nitrogen acquires a positive charge and acts as a strong deactivating group for further reaction!",
            questionFraming: "Classic Give-Reason Triad (3 Marks) — '(i) Why does aniline not undergo Friedel-Crafts reaction? (ii) Why does direct nitration of aniline yield a significant amount (47%) of meta-derivative? (iii) Why is the –NH₂ group of aniline acetylated before carrying out monobromination?'",
            textbookRef: "In acidic nitrating mixture, aniline forms anilinium ion (C₆H₅NH₃⁺) which is meta-directing (47% meta, 51% para, 2% ortho). Sulphanilic acid exists as a zwitterion.",
            keyFormulas: [
              "Aniline + 3Br₂(aq) ⟶ 2,4,6-Tribromoaniline (White ppt) + 3HBr",
              "Direct Nitration (288 K): 51% para + 47% meta (due to meta-directing −NH₃⁺) + 2% ortho",
              "Aniline + AlCl₃ (Lewis acid) ⟶ [C₆H₅NH₂⁺AlCl₃⁻] Salt (Blocks Friedel-Crafts reaction!)"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-9-5',
        title: '9.5 Diazonium Salts: Preparation, Sandmeyer & Azo Coupling',
        sections: [
          {
            id: 'chem-sec-9-5',
            title: 'Diazotisation, Resonance Stability, Sandmeyer, Gatterman, Balz-Schiemann & Coupling',
            explanation: "• Preparation (Diazotisation): Aniline reacts with nitrous acid (NaNO₂ + HCl) at 273–278 K (0–5°C) to yield Benzenediazonium chloride (C₆H₅N₂⁺Cl⁻). Arenediazonium salts are stable for a short time in cold solution because the aryl diazonium ion (Ar–N₂⁺) is stabilised by resonance dispersal of the positive charge over the benzene ring, whereas alkyl diazonium ions (R–N₂⁺) have no resonance stabilisation and decompose immediately into carbocations and N₂ gas.\n• Reactions Involving Displacement of Nitrogen (–N₂⁺Cl⁻ is a superb leaving group as N₂ gas):\n  1. Sandmeyer Reaction: C₆H₅N₂⁺Cl⁻ + Cu₂Cl₂/HCl (or Cu₂Br₂/HBr or CuCN/KCN) ⟶ C₆H₅Cl / C₆H₅Br / C₆H₅CN + N₂.\n  2. Gatterman Reaction: C₆H₅N₂⁺Cl⁻ + Cu powder + HCl (or HBr) ⟶ C₆H₅Cl (or C₆H₅Br) + N₂ + CuCl.\n  3. Iodobenzene: C₆H₅N₂⁺Cl⁻ + KI (warm) ⟶ C₆H₅I + KCl + N₂.\n  4. Balz-Schiemann Reaction (Fluorobenzene): C₆H₅N₂⁺Cl⁻ + HBF₄ ⟶ C₆H₅N₂⁺BF₄⁻ ──(Δ)──> C₆H₅F + BF₃ + N₂. (If NaNO₂/Cu is added to C₆H₅N₂⁺BF₄⁻, Nitrobenzene C₆H₅NO₂ is formed).\n  5. Deamination to Benzene: C₆H₅N₂⁺Cl⁻ reduced with hypophosphorous acid (H₃PO₂ + H₂O) or ethanol (CH₃CH₂OH) gives Benzene (C₆H₆).\n  6. Hydrolysis to Phenol: C₆H₅N₂⁺Cl⁻ + H₂O (warm to 283 K) ⟶ C₆H₅OH + N₂ + HCl.\n• Reactions Involving Retention of Diazo Group (Azo Coupling): Benzenediazonium chloride couples at the para-position of electron-rich rings at 0–5°C: with Phenol in weakly alkaline medium (pH 9–10) it forms p-Hydroxyazobenzene (Orange dye); with Aniline in weakly acidic medium (pH 4–5) it forms p-Aminoazobenzene (Yellow dye).",
            questionFraming: "Conversions & Reasoning (3 Marks) — '(a) Why are aromatic diazonium salts more stable than aliphatic diazonium salts? (b) How will you convert Aniline into: (i) Chlorobenzene, (ii) Fluorobenzene, (iii) Benzene, (iv) Nitrobenzene, (v) p-Hydroxyazobenzene?'",
            textbookRef: "Diazonium salts are synthetic bridges for introducing –F, –Cl, –Br, –I, –CN, –OH, and –NO₂ groups into the aromatic ring.",
            keyFormulas: [
              "Diazotisation: C₆H₅NH₂ + NaNO₂ + 2HCl ──(273–278 K)──> C₆H₅N₂⁺Cl⁻ + NaCl + 2H₂O",
              "Deamination: C₆H₅N₂⁺Cl⁻ + H₃PO₂ + H₂O ⟶ C₆H₆ + N₂ + H₃PO₃ + HCl",
              "Azo Coupling: C₆H₅N₂⁺Cl⁻ + Phenol (OH⁻) ⟶ p-Hydroxyazobenzene (Orange Dye)",
              "Azo Coupling: C₆H₅N₂⁺Cl⁻ + Aniline (H⁺) ⟶ p-Aminoazobenzene (Yellow Dye)"
            ]
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CHAPTER 10: BIOMOLECULES
  // ==========================================================================
  'chem-ch-10': {
    id: 'chem-ch-10',
    number: 10,
    title: 'Biomolecules',
    tag: 'Organic Chemistry',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'chem-sub-10-1',
        title: '10.1 Carbohydrates: Classification, Glucose Structure Proofs & Cyclic Anomers',
        isImportant: true,
        examTag: 'Guaranteed 3M Question',
        sections: [
          {
            id: 'chem-sec-10-1',
            title: 'Monosaccharides, Structural Elucidation of D-Glucose, Anomers, Disaccharides & Polysaccharides',
            explanation: "• Classification: Carbohydrates are optically active polyhydroxy aldehydes or ketones, or compounds that produce such units on hydrolysis. Monosaccharides (cannot be hydrolysed further: Glucose, Fructose, Ribose), Oligosaccharides (yield 2–10 units: Sucrose, Maltose, Lactose), Polysaccharides (Starch, Cellulose, Glycogen). Reducing Sugars reduce Tollens' and Fehling's reagents (all monosaccharides, maltose, lactose); Sucrose is a NON-REDUCING sugar because the glycosidic bond links the reducing C-1 of α-D-glucose and C-2 of β-D-fructose.\n• Structural Elucidation of D-Glucose (Aldohexose, C₆H₁₂O₆):\n  1. Prolonged heating with HI ⟶ n-Hexane (proves straight 6-carbon chain).\n  2. Reaction with NH₂OH ⟶ Oxime; with HCN ⟶ Cyanohydrin (proves presence of a carbonyl >C=O group).\n  3. Mild oxidation with Bromine water (Br₂/H₂O) ⟶ Gluconic acid (proves carbonyl group is an aldehyde –CHO).\n  4. Acetylation with acetic anhydride ⟶ Glucose pentaacetate (proves 5 –OH groups on different carbons).\n  5. Oxidation with nitric acid (HNO₃) ⟶ Saccharic acid (dicarboxylic acid; proves presence of a primary alcoholic –CH₂OH group).\n• Limitations of Open-Chain Structure & Cyclic Hemiacetal Form: Despite having an aldehyde group, glucose does NOT give Schiff's test, does NOT form hydrogensulphite addition product with NaHSO₃, and glucose pentaacetate does NOT react with NH₂OH (showing absence of free –CHO group). Glucose exists as a 6-membered cyclic hemiacetal (Pyranose ring) formed between the C-5 –OH and C-1 –CHO group, producing two stereoisomers differing only in configuration at C-1 (the Anomeric carbon): α-D-(+)-glucopyranose and β-D-(+)-glucopyranose (Anomers).\n• Disaccharides & Polysaccharides:\n  – Sucrose (Invert Sugar): α-D-glucose (C1) + β-D-fructose (C2). Dextrorotatory (+66.5°), but on hydrolysis yields equimolar D-(+)-glucose (+52.5°) and D-(−)-fructose (−92.4°), making the mixture laevorotatory (Inversion of cane sugar).\n  – Maltose: Two α-D-glucose units linked via C1–C4 glycosidic linkage (Reducing sugar).\n  – Lactose (Milk sugar): β-D-galactose (C1) + β-D-glucose (C4) (Reducing sugar).\n  – Starch: Polymer of α-glucose consisting of Amylose (15–20%, water-soluble, unbranched C1–C4 chain) and Amylopectin (80–85%, water-insoluble, branched C1–C4 chain with C1–C6 branching). Cellulose: Unbranched linear polymer of β-D-glucose (C1–C4). Glycogen: Animal starch, highly branched like amylopectin.",
            questionFraming: "Guaranteed 3M Board Question — 'What happens when D-glucose is treated with the following reagents: (i) HI, (ii) Bromine water, (iii) HNO₃? Enumerate the reactions of D-glucose which cannot be explained by its open-chain structure.'",
            textbookRef: "Anomers differ in configuration at C-1 (aldoses) or C-2 (ketoses). Fructose is a ketohexose forming a 5-membered Furanose ring.",
            keyFormulas: [
              "D-Glucose + HI (Δ) ⟶ n-Hexane (6-C straight chain)",
              "D-Glucose + Br₂ water ⟶ Gluconic acid (Aldehyde −CHO proof)",
              "D-Glucose + HNO₃ ⟶ Saccharic acid (Primary −CH₂OH proof)",
              "Sucrose = α-D-Glucose (C1) + β-D-Fructose (C2) [Non-reducing, Invert Sugar]"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-10-2',
        title: '10.2 Proteins: Amino Acids, Peptide Linkage, Structure & Denaturation',
        sections: [
          {
            id: 'chem-sec-10-2',
            title: 'Essential vs Non-Essential Amino Acids, Zwitterion, Fibrous vs Globular & Denaturation',
            explanation: "• Amino Acids: α-Amino acids contain both an amino (–NH₂) and a carboxyl (–COOH) group on the α-carbon. Except Glycine (H₂N–CH₂–COOH), all naturally occurring α-amino acids are optically active and have L-configuration. Essential amino acids cannot be synthesised in the human body and must be obtained through diet (e.g. Valine, Leucine, Isoleucine, Lysine); Non-essential amino acids are synthesised in the body (e.g. Glycine, Alanine, Glutamic acid). In aqueous solution, amino acids exist as a dipolar ion called a Zwitterion (H₃N⁺–CH(R)–COO⁻) and show amphoteric behaviour. At the Isoelectric Point (pI), net electrical charge is zero.\n• Peptide Linkage (–CO–NH–): Amide bond formed between –COOH of one amino acid and –NH₂ of another with loss of H₂O.\n• Fibrous vs Globular Proteins: Fibrous proteins have polypeptide chains running parallel held by H-bonds and disulphide bonds, forming fibre-like structures that are insoluble in water (e.g., Keratin in hair/wool/silk, Myosin in muscles). Globular proteins coil around to give a spherical shape and are soluble in water (e.g., Insulin, Albumin, Haemoglobin).\n• Four Levels of Protein Structure: (1) Primary (1°) — specific sequence of amino acids linked by peptide bonds; (2) Secondary (2°) — α-Helix (stabilised by intramolecular H-bonds between –NH and >C=O groups of 1st and 4th amino acid turns) and β-Pleated Sheet; (3) Tertiary (3°) — overall 3D folding stabilised by H-bonds, disulphide linkages, van der Waals, and electrostatic forces; (4) Quaternary (4°) — spatial arrangement of two or more polypeptide subunits.\n• Denaturation of Proteins: When a native protein is subjected to physical change (heating) or chemical change (change in pH), hydrogen bonds are disturbed, globules unfold, helices uncoil, and the protein loses its biological activity. During denaturation, 2° and 3° structures are destroyed, but the 1° (primary peptide) structure remains intact! Examples: Coagulation of egg white on boiling, curdling of milk.",
            questionFraming: "Board Definitions & Differentiations (3 Marks) — '(a) Differentiate between fibrous and globular proteins. (b) What is meant by denaturation of protein? Which level of structure remains intact during denaturation?'",
            textbookRef: "Glycine is the only optically inactive α-amino acid. During denaturation of egg white on boiling, soluble globular protein albumin converts into insoluble fibrous form; entropy increases due to uncoiling.",
            keyFormulas: [
              "Zwitterion: H₃N⁺–CH(R)–COO⁻  (Amphoteric dipolar ion)",
              "Peptide Bond: −CO−NH− linkage between two α-amino acids",
              "Denaturation: Destroys 2° & 3° structures; Primary (1°) structure remains INTACT!"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-10-3',
        title: '10.3 Enzymes & Vitamins (Classification & Deficiency Diseases)',
        sections: [
          {
            id: 'chem-sec-10-3',
            title: 'Biocatalysts, Water-Soluble (B, C) vs Fat-Soluble (A, D, E, K) Vitamins',
            explanation: "• Enzymes: Globular proteins that act as highly specific biological catalysts, reducing the magnitude of activation energy (e.g. activation energy of acid hydrolysis of sucrose is 6.22 kJ mol⁻¹, while with enzyme sucrase it is only 2.15 kJ mol⁻¹).\n• Vitamins: Organic compounds required in small amounts in the diet to perform specific biological functions:\n  1. Fat-Soluble Vitamins (Vitamin A, D, E, K): Soluble in fat and oils but insoluble in water; stored in the liver and adipose (fat-storing) tissues.\n  2. Water-Soluble Vitamins (Vitamin B group & Vitamin C): Soluble in water, so they must be supplied regularly in the diet because they are readily excreted in urine and cannot be stored in our body (EXCEPT Vitamin B₁₂, which is stored in the liver!).\n• High-Yield Deficiency Diseases:\n  – Vitamin A (Retinol): Xerophthalmia (hardening of cornea) & Night Blindness.\n  – Vitamin B₁ (Thiamine): Beri-beri (loss of appetite, retarded growth).\n  – Vitamin B₂ (Riboflavin): Cheilosis (fissuring at corners of mouth and lips).\n  – Vitamin B₆ (Pyridoxine): Convulsions.\n  – Vitamin B₁₂ (Cyanocobalamin): Pernicious Anaemia (RBC deficient in haemoglobin).\n  – Vitamin C (Ascorbic acid): Scurvy (bleeding gums).\n  – Vitamin D (Calciferol): Rickets (bone deformities in children) and Osteomalacia (soft bones/joint pain in adults).\n  – Vitamin E (Tocopherol): Increased fragility of RBCs and muscular weakness.\n  – Vitamin K (Phylloquinone): Increased blood clotting time.",
            questionFraming: "Give-Reason & Matching (2 Marks) — 'Why cannot Vitamin C be stored in our body? Name the deficiency diseases caused by lack of Vitamin A, B₁, B₁₂, C, D, and K.'",
            textbookRef: "Vitamin C and B-complex (except B₁₂) are water-soluble and excreted in urine, hence cannot be stored in the body.",
            keyFormulas: [
              "Fat-Soluble Vitamins: A, D, E, K (Stored in liver & adipose tissue)",
              "Water-Soluble Vitamins: B-complex & C (Excreted in urine; Exception: B₁₂ is stored)",
              "Deficiencies: A ⟶ Night blindness | B₁ ⟶ Beri-beri | B₁₂ ⟶ Pernicious anaemia | C ⟶ Scurvy | D ⟶ Rickets | K ⟶ Delayed clotting"
            ]
          }
        ]
      },
      {
        id: 'chem-sub-10-4',
        title: '10.4 Nucleic Acids: DNA vs RNA, Nucleotides & Double Helix',
        sections: [
          {
            id: 'chem-sec-10-4',
            title: 'Pentose Sugars, Nitrogenous Bases, Phosphodiester Linkage & Base Pairing',
            explanation: "• Chemical Composition of Nucleic Acids: Complete hydrolysis of DNA or RNA yields a pentose sugar, phosphoric acid, and nitrogenous bases:\n  – Pentose Sugar: β-D-2-deoxyribose in DNA; β-D-ribose in RNA.\n  – Nitrogenous Bases: Purines = Adenine (A) and Guanine (G); Pyrimidines = Cytosine (C), Thymine (T, present ONLY in DNA), and Uracil (U, present ONLY in RNA).\n• Nucleoside vs Nucleotide: Sugar + Base (at C-1') = Nucleoside. Nucleoside + Phosphoric acid (at C-5' of sugar) = Nucleotide. Nucleotides are joined together between the 5' and 3' carbon atoms of the pentose sugar via Phosphodiester Linkages.\n• DNA vs RNA Structure & Function:\n  – Watson and Crick Double Helix of DNA: Two antiparallel polynucleotide chains coiled around a common axis, held together by specific hydrogen bonds between complementary bases: Adenine pairs with Thymine via TWO hydrogen bonds (A=T), and Guanine pairs with Cytosine via THREE hydrogen bonds (G≡C). Hence the two strands are complementary, NOT identical!\n  – RNA is usually single-stranded and of three types: messenger RNA (m-RNA), ribosomal RNA (r-RNA), and transfer RNA (t-RNA), which carry out protein synthesis.",
            questionFraming: "Structural & Functional Distinction (3 Marks) — '(a) Give two structural and two functional differences between DNA and RNA. (b) Differentiate between a nucleoside and a nucleotide. (c) When RNA is hydrolysed, there is no relationship among the quantities of different bases obtained. What does this fact suggest about the structure of RNA?'",
            textbookRef: "Because RNA is single-stranded, it does not follow Chargaff's base-equivalence rule (A ≠ U, G ≠ C), unlike double-stranded DNA where A = T and G = C.",
            keyFormulas: [
              "Nucleoside = Pentose Sugar + Base (at C-1')   |   Nucleotide = Nucleoside + Phosphate (at C-5')",
              "DNA Bases: A, G, C, T (Sugar: β-D-2-deoxyribose)  |  RNA Bases: A, G, C, U (Sugar: β-D-ribose)",
              "Complementary H-Bonding in DNA: A = T (2 H-bonds)  &  G ≡ C (3 H-bonds)",
              "Backbone Linkage: 5' ⟶ 3' Phosphodiester linkage"
            ]
          }
        ]
      }
    ]
  }
};
