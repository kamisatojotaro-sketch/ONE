// Comprehensive CBSE Class 12 MCQ Bank with Explanations
// Mapped by Subject and Exam Portion Chapters

export const MCQ_DATABASE = {
  physics: [
    {
      id: 'phy-mcq-1',
      chapterId: 'phy-ch-1',
      chapterName: 'Ch 1: Electric Charges & Fields',
      subtopicId: 'phy-sub-1-7',
      difficulty: 'medium',
      question: 'An electric dipole of moment p is placed in a uniform electric field E. The torque τ and potential energy U of the dipole when in stable equilibrium are:',
      options: [
        'τ = pE, U = 0',
        'τ = 0, U = −pE',
        'τ = 0, U = +pE',
        'τ = pE/2, U = −pE/2'
      ],
      correct: 1,
      explanation: 'Stable equilibrium occurs when dipole vector p aligns parallel with field E (θ = 0°). Torque τ = pE sin 0° = 0. Potential energy U = −p · E = −pE cos 0° = −pE (minimum potential energy).'
    },
    {
      id: 'phy-mcq-2',
      chapterId: 'phy-ch-1',
      chapterName: 'Ch 1: Electric Charges & Fields',
      subtopicId: 'phy-sub-1-9',
      difficulty: 'easy',
      question: 'A spherical Gaussian surface encloses a point charge q. If the radius of the sphere is doubled, the total outward electric flux through the surface will:',
      options: [
        'Be doubled',
        'Be halved',
        'Remain unchanged',
        'Become four times'
      ],
      correct: 2,
      explanation: 'According to Gauss\'s Law, total electric flux Φ = q_enclosed / ε₀ depends solely on the net charge enclosed and the permittivity of free space, not on the radius or geometry of the Gaussian surface.'
    },
    {
      id: 'phy-mcq-3',
      chapterId: 'phy-ch-2',
      chapterName: 'Ch 2: Electrostatic Potential & Capacitance',
      subtopicId: 'phy-sub-2-2',
      difficulty: 'easy',
      question: 'The electric potential at an equatorial point due to a short electric dipole of dipole moment p at distance r is:',
      options: [
        'kp / r²',
        '2kp / r³',
        'Zero',
        '−kp / r²'
      ],
      correct: 2,
      explanation: 'Any point on the equatorial perpendicular bisector is equidistant from +q and −q charges. Since potential is a scalar sum: V = kq/d + k(−q)/d = 0.'
    },
    {
      id: 'phy-mcq-4',
      chapterId: 'phy-ch-2',
      chapterName: 'Ch 2: Electrostatic Potential & Capacitance',
      subtopicId: 'phy-sub-2-7',
      difficulty: 'medium',
      question: 'A dielectric slab of dielectric constant K is introduced between the plates of an isolated charged parallel-plate capacitor. Which quantity decreases?',
      options: [
        'Capacitance',
        'Charge on plates',
        'Potential difference between plates',
        'Both capacitance and charge'
      ],
      correct: 2,
      explanation: 'Since the capacitor is isolated, charge Q remains constant. Capacitance increases by factor K (C = K C₀). Therefore, potential difference V = Q / C drops to V₀ / K.'
    },
    {
      id: 'phy-mcq-5',
      chapterId: 'phy-ch-3',
      chapterName: 'Ch 3: Current Electricity',
      subtopicId: 'phy-sub-3-3',
      difficulty: 'medium',
      question: 'When temperature of a metallic conductor is increased, its electrical resistivity increases primarily because:',
      options: [
        'Conduction electron density n decreases',
        'Average relaxation time τ decreases',
        'Electron mass m increases',
        'Both n and τ increase'
      ],
      correct: 1,
      explanation: 'Resistivity ρ = m / (n e² τ). In metals, free electron density n is virtually unaffected by temperature, but increased lattice thermal vibrations increase collision frequency, sharply shortening relaxation time τ.'
    },
    {
      id: 'phy-mcq-6',
      chapterId: 'phy-ch-3',
      chapterName: 'Ch 3: Current Electricity',
      subtopicId: 'phy-sub-3-9',
      difficulty: 'medium',
      question: 'In a Wheatstone bridge network, galvanometer shows null deflection. If the battery and galvanometer are interchanged, the balance condition:',
      options: [
        'Remains unchanged',
        'Is completely disrupted',
        'Requires recalibration of all 4 resistors',
        'Doubles the sensitivity'
      ],
      correct: 0,
      explanation: 'By the conjugate property of the Wheatstone bridge, the source branch (battery) and detector branch (galvanometer) are conjugate arms; exchanging them leaves the balance condition P/Q = R/S unchanged.'
    },
    {
      id: 'phy-mcq-7',
      chapterId: 'phy-ch-4',
      chapterName: 'Ch 4: Moving Charges & Magnetism',
      subtopicId: 'phy-sub-4-6',
      difficulty: 'hard',
      question: 'A proton and an alpha particle enter a uniform magnetic field with the same velocity perpendicular to the field. The ratio of radius of proton path to alpha particle path (r_p : r_α) is:',
      options: [
        '1 : 1',
        '1 : 2',
        '2 : 1',
        '1 : 4'
      ],
      correct: 1,
      explanation: 'Radius of gyration r = m v / (q B). For proton: m_p = m, q_p = e. For alpha particle: m_α = 4m, q_α = 2e. Ratio r_p / r_α = (m / e) / (4m / 2e) = 2/4 = 1/2.'
    },
    {
      id: 'phy-mcq-8',
      chapterId: 'phy-ch-6',
      chapterName: 'Ch 6: Electromagnetic Induction',
      subtopicId: 'phy-sub-6-3',
      difficulty: 'medium',
      question: 'A metallic ring is held horizontally and a bar magnet is dropped freely along the axis of the ring with its North pole downwards. The acceleration of the falling magnet is:',
      options: [
        'Equal to g',
        'Greater than g',
        'Less than g',
        'Zero'
      ],
      correct: 2,
      explanation: 'By Lenz\'s law, the induced current in the ring produces an opposing magnetic North pole facing the falling magnet, exerting an upward repulsive force. Hence net downward acceleration a = g − (F_magnetic / m) < g.'
    },
    {
      id: 'phy-mcq-8b',
      chapterId: 'phy-ch-6',
      chapterName: 'Ch 6: Electromagnetic Induction',
      subtopicId: 'phy-sub-6-2',
      difficulty: 'hard',
      question: 'A bar magnet is moved towards a closed circular coil first rapidly in 0.1 s, and then slowly in 1.0 s. The ratio of the induced EMF and total charge flown through the coil in the two cases are respectively:',
      options: [
        'EMF ratio is 10 : 1, while Charge ratio is 1 : 1',
        'EMF ratio is 1 : 1, while Charge ratio is 10 : 1',
        'Both EMF and Charge ratios are 10 : 1',
        'Both EMF and Charge ratios are 1 : 1'
      ],
      correct: 0,
      explanation: 'Induced EMF |ε| = ΔΦ / Δt is inversely proportional to time, so rapid motion produces 10 times higher EMF (10 : 1). However, total induced charge q = ΔΦ / R depends only on net flux change and resistance, completely independent of time, so the charge ratio is strictly 1 : 1.'
    },
    {
      id: 'phy-mcq-9',
      chapterId: 'phy-ch-7',
      chapterName: 'Ch 7: Alternating Current',
      subtopicId: 'phy-sub-7-6',
      difficulty: 'easy',
      question: 'In a series LCR resonant circuit, the phase angle between alternating applied voltage and circuit current is:',
      options: [
        'π / 2 (90°)',
        'π / 4 (45°)',
        'Zero (in phase)',
        'π (180°)'
      ],
      correct: 2,
      explanation: 'At resonance, inductive reactance X_L cancels capacitive reactance X_C (X_L − X_C = 0). Circuit impedance is purely resistive (Z = R), meaning voltage and current oscillate perfectly in phase (φ = 0°).'
    },
    {
      id: 'phy-mcq-10',
      chapterId: 'phy-ch-8',
      chapterName: 'Ch 8: Electromagnetic Waves',
      subtopicId: 'phy-sub-8-4',
      difficulty: 'easy',
      question: 'Which of the following electromagnetic waves has the highest frequency and penetrating power in the electromagnetic spectrum?',
      options: [
        'Microwaves',
        'Ultraviolet rays',
        'Gamma rays',
        'X-rays'
      ],
      correct: 2,
      explanation: 'Gamma rays have the shortest wavelength (< 10⁻¹² m) and highest frequency (> 10²⁰ Hz), giving them the highest photon energy (E = hν) and deepest penetrating ability through dense matter.'
    },
    {
      id: 'phy-mcq-11',
      chapterId: 'phy-ch-9',
      chapterName: 'Ch 9: Ray Optics and Optical Instruments',
      subtopicId: 'phy-sub-9-2',
      difficulty: 'medium',
      question: 'The critical angle for total internal reflection of light travelling from a denser medium of refractive index n = √2 into air is:',
      options: [
        '30°',
        '45°',
        '60°',
        '90°'
      ],
      correct: 1,
      explanation: 'Critical angle is given by sin i_c = 1 / n = 1 / √2, which gives i_c = 45°.'
    },
    {
      id: 'phy-mcq-12',
      chapterId: 'phy-ch-9',
      chapterName: 'Ch 9: Ray Optics and Optical Instruments',
      subtopicId: 'phy-sub-9-3',
      difficulty: 'medium',
      question: 'A biconvex lens of glass (n = 1.5) has focal length f in air. When immersed completely in a liquid of refractive index n_l = 1.5, it behaves as a:',
      options: [
        'Converging lens of focal length 2f',
        'Diverging lens of focal length f',
        'Plane glass plate of infinite focal length (zero power)',
        'Concave mirror'
      ],
      correct: 2,
      explanation: 'By Lens Maker\'s formula, 1/f_l = (n_g / n_l − 1)(1/R₁ − 1/R₂). Since n_g = n_l = 1.5, 1/f_l = 0 ⟹ f_l = ∞ and Power P = 0. The lens becomes invisible and acts as a plane glass sheet.'
    },
    {
      id: 'phy-mcq-13',
      chapterId: 'phy-ch-10',
      chapterName: 'Ch 10: Wave Optics',
      subtopicId: 'phy-sub-10-4',
      difficulty: 'medium',
      question: 'In Young\'s double-slit experiment (YDSE), if the separation between the coherent slits is halved and the screen distance is doubled, the fringe width β:',
      options: [
        'Remains unchanged',
        'Becomes doubled (2β)',
        'Becomes four times (4β)',
        'Becomes one-fourth (β/4)'
      ],
      correct: 2,
      explanation: 'Fringe width β = λD / d. When D\' = 2D and d\' = d/2, new fringe width β\' = λ(2D) / (d/2) = 4(λD / d) = 4β.'
    },
    {
      id: 'phy-mcq-14',
      chapterId: 'phy-ch-11',
      chapterName: 'Ch 11: Dual Nature of Radiation and Matter',
      subtopicId: 'phy-sub-11-3',
      difficulty: 'easy',
      question: 'In the photoelectric effect, the slope of the stopping potential (V₀) versus incident frequency (ν) graph is equal to:',
      options: [
        'h (Planck\'s constant)',
        'h / e',
        'e / h',
        'φ₀ / e'
      ],
      correct: 1,
      explanation: 'By Einstein\'s photoelectric equation: eV₀ = hν − φ₀ ⟹ V₀ = (h/e)ν − φ₀/e. This is a straight line with universal slope m = h / e.'
    },
    {
      id: 'phy-mcq-15',
      chapterId: 'phy-ch-12',
      chapterName: 'Ch 12: Atoms',
      subtopicId: 'phy-sub-12-2',
      difficulty: 'medium',
      question: 'According to Bohr\'s model of the hydrogen atom, the ratio of the radii of the first three allowed stationary orbits (n = 1, 2, 3) is:',
      options: [
        '1 : 2 : 3',
        '1 : 4 : 9',
        '1 : 8 : 27',
        '9 : 4 : 1'
      ],
      correct: 1,
      explanation: 'The radius of the nth Bohr orbit in hydrogen is directly proportional to n² (r_n = 0.529 n² Å). Thus r₁ : r₂ : r₃ = 1² : 2² : 3² = 1 : 4 : 9.'
    },
    {
      id: 'phy-mcq-16',
      chapterId: 'phy-ch-13',
      chapterName: 'Ch 13: Nuclei',
      subtopicId: 'phy-sub-13-1',
      difficulty: 'easy',
      question: 'Two nuclei have mass numbers in the ratio 8 : 27. The ratio of their nuclear densities is:',
      options: [
        '8 : 27',
        '2 : 3',
        '4 : 9',
        '1 : 1'
      ],
      correct: 3,
      explanation: 'Nuclear density ρ = Mass / Volume = (A·m) / [(4/3)π R₀³ A] = 3m / (4π R₀³) ≈ 2.3 × 10¹⁷ kg/m³, which is completely independent of mass number A. Hence the ratio is 1 : 1.'
    },
    {
      id: 'phy-mcq-17',
      chapterId: 'phy-ch-14',
      chapterName: 'Ch 14: Semiconductor Electronics',
      subtopicId: 'phy-sub-14-3',
      difficulty: 'easy',
      question: 'When a p-n junction diode is forward biased, the width of the depletion layer and the potential barrier:',
      options: [
        'Both increase',
        'Both decrease',
        'Width increases while barrier decreases',
        'Remain unchanged'
      ],
      correct: 1,
      explanation: 'In forward bias, the applied voltage opposes the built-in barrier potential (V_eff = V₀ − V), pushing majority carriers toward the junction and narrowing both the depletion layer width and barrier height.'
    },
    {
      id: 'phy-mcq-18',
      chapterId: 'phy-ch-5',
      chapterName: 'Ch 5: Magnetism & Matter',
      subtopicId: 'phy-sub-5-1',
      difficulty: 'easy',
      question: 'A sample of bismuth is placed in a non-uniform magnetic field. How does it behave, and what is the sign of its magnetic susceptibility (χ)?',
      options: [
        'Tends to move from stronger to weaker field; χ is small and negative',
        'Tends to move from weaker to stronger field; χ is small and positive',
        'Strongly pulled toward stronger field; χ is large and positive',
        'Remains unaffected; χ = 0'
      ],
      correct: 0,
      explanation: 'Bismuth is a diamagnetic material. Diamagnetic substances are weakly repelled by magnets (move from stronger to weaker field regions), have relative permeability 0 ≤ μ_r < 1, and small negative susceptibility (−1 ≤ χ < 0) independent of temperature.'
    },
    {
      id: 'phy-mcq-19',
      chapterId: 'phy-ch-5',
      chapterName: 'Ch 5: Magnetism & Matter',
      subtopicId: 'phy-sub-5-2',
      difficulty: 'medium',
      question: 'According to Curie\'s Law, the magnetic susceptibility (χ) of a paramagnetic material varies with absolute temperature T as:',
      options: [
        'χ ∝ T',
        'χ ∝ 1 / T',
        'χ is independent of T',
        'χ ∝ T²'
      ],
      correct: 1,
      explanation: 'Curie\'s Law states χ = C μ₀ / T, so paramagnetic susceptibility is inversely proportional to absolute temperature T (thermal agitation opposes dipole alignment).'
    },
    {
      id: 'phy-mcq-20',
      chapterId: 'phy-ch-5',
      chapterName: 'Ch 5: Magnetism & Matter',
      subtopicId: 'phy-sub-5-3',
      difficulty: 'medium',
      question: 'For a superconducting sphere exhibiting the Meissner effect (perfect diamagnetism), the magnetic susceptibility χ and relative permeability μ_r are:',
      options: [
        'χ = +1, μ_r = 2',
        'χ = −1, μ_r = 0',
        'χ = 0, μ_r = 1',
        'χ = ∞, μ_r = ∞'
      ],
      correct: 1,
      explanation: 'Superconductors expel all magnetic flux lines completely (B = 0 inside), making μ_r = 0 and χ = μ_r − 1 = −1.'
    },
    {
      id: 'phy-mcq-21',
      chapterId: 'phy-ch-9',
      chapterName: 'Ch 9: Ray Optics & Optical Instruments',
      subtopicId: 'phy-sub-9-1',
      difficulty: 'medium',
      question: 'A mobile phone lies along the principal axis of a concave mirror (as in NCERT Ex 9.2). Why is the longitudinal magnification NOT uniform along the phone?',
      options: [
        'The mirror changes focal length for parts closer to the pole',
        'Transverse magnification m = −f / (u − f) varies inversely with distance from focus, so portions closer to the centre of curvature vs focus are magnified differently',
        'Concave mirrors invert only the vertical dimension',
        'Only plane mirrors preserve uniform lateral magnification'
      ],
      correct: 1,
      explanation: 'In NCERT Example 9.2, the end touching C gives m = −1 (same size) while points closer to F have larger magnitude of |m| = f/|u − f|, stretching the image non-uniformly.'
    },
    {
      id: 'phy-mcq-22',
      chapterId: 'phy-ch-9',
      chapterName: 'Ch 9: Ray Optics & Optical Instruments',
      subtopicId: 'phy-sub-9-2',
      difficulty: 'medium',
      question: 'A point source of light is placed at depth h inside a tank filled with water of refractive index n (NCERT Exer 9.5). The radius R of the circular illuminated patch on the water surface through which light emerges is:',
      options: [
        'R = h / √(n² − 1)',
        'R = h · √(n² − 1)',
        'R = h · n',
        'R = h / n'
      ],
      correct: 0,
      explanation: 'Light emerges within a cone of semi-vertical angle i_c where sin(i_c) = 1/n. Hence tan(i_c) = 1 / √(n² − 1), giving patch radius R = h tan(i_c) = h / √(n² − 1) and area A = π h² / (n² − 1).'
    },
    {
      id: 'phy-mcq-23',
      chapterId: 'phy-ch-9',
      chapterName: 'Ch 9: Ray Optics & Optical Instruments',
      subtopicId: 'phy-sub-9-3',
      difficulty: 'hard',
      question: 'A biconvex glass lens (n_g = 1.50) has focal length +20 cm in air. If it is immersed in carbon disulphide (n_l = 1.65), the lens will:',
      options: [
        'Behave as a converging lens of focal length +80 cm',
        'Behave as a diverging lens (f < 0)',
        'Become an optical flat slab of infinite focal length',
        'Keep the exact same focal length +20 cm'
      ],
      correct: 1,
      explanation: 'By Lens Maker\'s formula, 1/f_l = (n_g/n_l − 1)(1/R₁ − 1/R₂). Since n_l (1.65) > n_g (1.50), the factor (1.50/1.65 − 1) becomes NEGATIVE, reversing the sign of f so the converging lens acts as a diverging lens!'
    },
    {
      id: 'phy-mcq-24',
      chapterId: 'phy-ch-9',
      chapterName: 'Ch 9: Ray Optics & Optical Instruments',
      subtopicId: 'phy-sub-9-4',
      difficulty: 'medium',
      question: 'For an equilateral glass prism (A = 60°) in minimum deviation with δ_m = 60°, the angle of incidence i inside the air-glass interface is:',
      options: [
        '30°',
        '45°',
        '60°',
        '90°'
      ],
      correct: 2,
      explanation: 'At minimum deviation, δ_m = 2i − A ⟹ i = (A + δ_m)/2 = (60° + 60°)/2 = 60°, and r = A/2 = 30°, yielding n = sin 60° / sin 30° = √3.'
    },
    {
      id: 'phy-mcq-25',
      chapterId: 'phy-ch-9',
      chapterName: 'Ch 9: Ray Optics & Optical Instruments',
      subtopicId: 'phy-sub-9-5',
      difficulty: 'easy',
      question: 'For a small astronomical telescope in normal adjustment (final image at infinity) with f_o = 144 cm and f_e = 6.0 cm (NCERT Exer 9.13), the magnifying power and separation between lenses are:',
      options: [
        'M = 24, Length L = 150 cm',
        'M = 24, Length L = 138 cm',
        'M = 864, Length L = 150 cm',
        'M = 0.04, Length L = 144 cm'
      ],
      correct: 0,
      explanation: 'In normal adjustment, M = f_o / f_e = 144 / 6 = 24, and tube length L = f_o + f_e = 144 + 6 = 150 cm.'
    },
    {
      id: 'phy-mcq-26',
      chapterId: 'phy-ch-10',
      chapterName: 'Ch 10: Wave Optics',
      subtopicId: 'phy-sub-10-2',
      difficulty: 'easy',
      question: 'When monochromatic light of wavelength 589 nm in air enters water (n = 1.33, NCERT Exer 10.1), which quantity remains strictly UNCHANGED?',
      options: [
        'Wavelength λ',
        'Speed of light v',
        'Frequency ν',
        'Wavefront direction θ'
      ],
      correct: 2,
      explanation: 'Both speed (v = c/n) and wavelength (λ\' = λ/n) decrease by factor n in water, whereas frequency ν = c/λ depends solely on the source and remains unchanged across refraction.'
    },
    {
      id: 'phy-mcq-27',
      chapterId: 'phy-ch-10',
      chapterName: 'Ch 10: Wave Optics',
      subtopicId: 'phy-sub-10-4',
      difficulty: 'hard',
      question: 'In a Young\'s double-slit experiment, intensity at a screen point where path difference is λ equals K (NCERT Exer 10.5). What is the intensity at a point where path difference is λ / 3?',
      options: [
        'K / 2',
        'K / 4',
        '3 K / 4',
        'K / 3'
      ],
      correct: 1,
      explanation: 'At Δx = λ, phase difference φ = 2π ⟹ I_max = 4I₀ = K. At Δx = λ/3, φ = 2π/3 (120°), so I = 4I₀ cos²(φ/2) = K cos²(60°) = K (1/2)² = K / 4.'
    },
    {
      id: 'phy-mcq-28',
      chapterId: 'phy-ch-10',
      chapterName: 'Ch 10: Wave Optics',
      subtopicId: 'phy-sub-10-5',
      difficulty: 'medium',
      question: 'In single-slit Fraunhofer diffraction with slit width a illuminated by wavelength λ, how does the angular width of the central bright maximum compare with the first secondary maximum?',
      options: [
        'Both have angular width λ / a',
        'Central maximum angular width is 2λ / a (double the secondary fringe width λ / a)',
        'Central maximum angular width is λ / (2a)',
        'Independent of slit width a'
      ],
      correct: 1,
      explanation: 'First minima on either side lie at θ = ±λ/a, so total angular width of the central maximum is 2θ = 2λ/a, twice that of any secondary maximum.'
    },
    {
      id: 'phy-mcq-29',
      chapterId: 'phy-ch-11',
      chapterName: 'Ch 11: Dual Nature of Radiation & Matter',
      subtopicId: 'phy-sub-11-3',
      difficulty: 'medium',
      question: 'According to Einstein\'s photoelectric equation, the slope of the straight-line graph between stopping potential (V₀) on the y-axis and incident frequency (ν) on the x-axis equals:',
      options: [
        'h (Planck\'s constant)',
        'h / e (universal for ALL metals)',
        'φ₀ / e (depends on metal)',
        'e / h'
      ],
      correct: 1,
      explanation: 'Since eV₀ = hν − φ₀, V₀ = (h/e)ν − φ₀/e. The slope is h/e ≈ 4.14 × 10⁻¹⁵ V·s, identical and parallel for every photosensitive metal.'
    },
    {
      id: 'phy-mcq-30',
      chapterId: 'phy-ch-11',
      chapterName: 'Ch 11: Dual Nature of Radiation & Matter',
      subtopicId: 'phy-sub-11-4',
      difficulty: 'hard',
      question: 'An electron, an alpha particle, and a proton all have the SAME kinetic energy K (NCERT Exer 11.8). Which particle has the SHORTEST de Broglie wavelength?',
      options: [
        'Electron',
        'Proton',
        'Alpha particle',
        'All have equal de Broglie wavelength'
      ],
      correct: 2,
      explanation: 'Since λ = h / √(2 m K), for equal kinetic energy K, λ ∝ 1 / √m. The alpha particle has the largest mass (~4 m_p), hence the shortest de Broglie wavelength.'
    },
    {
      id: 'phy-mcq-31',
      chapterId: 'phy-ch-12',
      chapterName: 'Ch 12: Atoms',
      subtopicId: 'phy-sub-12-2',
      difficulty: 'medium',
      question: 'The total energy of an electron in the first excited state (n = 2) of a hydrogen atom is −3.4 eV (NCERT Exer 12.5). What are its kinetic energy (K) and potential energy (U) in this state?',
      options: [
        'K = +3.4 eV, U = −6.8 eV',
        'K = +1.7 eV, U = −5.1 eV',
        'K = −3.4 eV, U = +6.8 eV',
        'K = +6.8 eV, U = −10.2 eV'
      ],
      correct: 0,
      explanation: 'In a Coulomb bound orbit, K = −E = −(−3.4) = +3.4 eV, and U = 2E = 2(−3.4) = −6.8 eV (check: K + U = +3.4 − 6.8 = −3.4 eV = E).'
    },
    {
      id: 'phy-mcq-32',
      chapterId: 'phy-ch-12',
      chapterName: 'Ch 12: Atoms',
      subtopicId: 'phy-sub-12-3',
      difficulty: 'easy',
      question: 'How does de Broglie\'s matter-wave hypothesis explain Bohr\'s second postulate of quantized angular momentum (L = nh / 2π)?',
      options: [
        'The circumference 2πr of an allowed orbit must contain an integral number of de Broglie wavelengths (2πr = nλ) for a stationary standing wave',
        'Electrons emit continuous radiation only at n = 1',
        'Electrons spiral inward when 2πr > nλ',
        'Nuclear charge quantizes orbit eccentricity'
      ],
      correct: 0,
      explanation: 'Only orbits forming closed standing electron waves (2πr = nλ = nh / mv) do not suffer destructive interference, yielding mvr = nh / 2π.'
    },
    {
      id: 'phy-mcq-33',
      chapterId: 'phy-ch-13',
      chapterName: 'Ch 13: Nuclei',
      subtopicId: 'phy-sub-13-2',
      difficulty: 'easy',
      question: '1 atomic mass unit (1 u ≈ 1.6605 × 10⁻²⁷ kg) is equivalent to how much energy (NCERT Ex 13.3)?',
      options: [
        '13.6 eV',
        '931.5 MeV',
        '0.511 MeV',
        '200 MeV'
      ],
      correct: 1,
      explanation: 'Using E = Δmc², 1 u × c² = (1.660539 × 10⁻²⁷ kg)(2.9979 × 10⁸ m/s)² / (1.602 × 10⁻¹³ J/MeV) ≈ 931.5 MeV.'
    },
    {
      id: 'phy-mcq-34',
      chapterId: 'phy-ch-13',
      chapterName: 'Ch 13: Nuclei',
      subtopicId: 'phy-sub-13-3',
      difficulty: 'medium',
      question: 'Which statement accurately describes the Strong Nuclear Force between nucleons (n-n, p-p, n-p)?',
      options: [
        'It follows an inverse-square 1/r² law and acts strongly only on protons',
        'It is charge-independent, short-ranged (saturates beyond ~2–3 fm), attractive for r > 0.8 fm, and strongly repulsive for r < 0.8 fm',
        'It is weaker than electrostatic repulsion at 1.5 fm',
        'It acts infinitely across the entire atom'
      ],
      correct: 1,
      explanation: 'Nuclear force is the strongest fundamental interaction at short range (~1–2 fm), equal between p-p, n-p, and n-n (charge-independent), repulsive below 0.8 fm (preventing collapse), and drops to zero rapidly beyond a few femtometres (saturation).'
    },
    {
      id: 'phy-mcq-35',
      chapterId: 'phy-ch-14',
      chapterName: 'Ch 14: Semiconductor Electronics',
      subtopicId: 'phy-sub-14-1',
      difficulty: 'easy',
      question: 'Why are carbon (diamond, E_g = 5.4 eV), silicon (E_g = 1.1 eV), and germanium (E_g = 0.7 eV) classified differently at room temperature despite having the same valence configuration (NCERT Ex 14.1)?',
      options: [
        'Diamond has large forbidden energy gap (5.4 eV, insulator), whereas Si (1.1 eV) and Ge (0.7 eV) have small gaps allowing thermal electron excitation (semiconductors)',
        'Carbon has partially filled 3d orbitals',
        'Silicon and Germanium lack covalent bonds',
        'Diamond is a metallic conductor at 300 K'
      ],
      correct: 0,
      explanation: 'Thermal energy kT (~0.026 eV at 300 K) cannot bridge the 5.4 eV band gap of C (diamond, insulator), while small intrinsic carriers exist in Si (1.1 eV) and Ge (0.7 eV).'
    },
    {
      id: 'phy-mcq-36',
      chapterId: 'phy-ch-14',
      chapterName: 'Ch 14: Semiconductor Electronics',
      subtopicId: 'phy-sub-14-2',
      difficulty: 'medium',
      question: 'Pure Si at 300 K has n_i = 1.5 × 10¹⁶ m⁻³. After doping with pentavalent donor atoms, n_e = 5 × 10²² m⁻³ (NCERT Ex 14.2). The hole concentration n_h becomes:',
      options: [
        '4.5 × 10⁹ m⁻³ (n-type semiconductor)',
        '5.0 × 10²² m⁻³ (p-type semiconductor)',
        '3.3 × 10⁶ m⁻³',
        'Zero'
      ],
      correct: 0,
      explanation: 'By mass-action law n_e · n_h = n_i² ⟹ n_h = (1.5 × 10¹⁶)² / (5 × 10²²) = 2.25 × 10³² / (5 × 10²²) = 4.5 × 10⁹ m⁻³. Since n_e >> n_h, it is n-type.'
    },
    {
      id: 'phy-mcq-37',
      chapterId: 'phy-ch-14',
      chapterName: 'Ch 14: Semiconductor Electronics',
      subtopicId: 'phy-sub-14-4',
      difficulty: 'easy',
      question: 'If an AC mains supply of 50 Hz is fed to a Full-Wave Rectifier, the fundamental ripple frequency of the output pulsating DC voltage is:',
      options: [
        '25 Hz',
        '50 Hz',
        '100 Hz',
        '200 Hz'
      ],
      correct: 2,
      explanation: 'A half-wave rectifier passes only one pulse per AC cycle (output frequency = f = 50 Hz), whereas a full-wave rectifier passes BOTH half-cycles in the same direction, doubling the ripple frequency to 2f = 100 Hz.'
    }
  ],

  chemistry: [
    {
      id: 'chem-mcq-solutions-nonideal-1',
      chapterId: 'chem-ch-1',
      chapterName: 'Ch 1: Solutions',
      subtopicId: 'chem-sub-1-4',
      difficulty: 'medium',
      question: 'Which of the following conditions is TRUE for a non-ideal solution exhibiting positive deviation from Raoult\'s law?',
      options: [
        'ΔH_mixing > 0 and ΔV_mixing > 0 (A-B interactions are weaker than A-A and B-B)',
        'ΔH_mixing < 0 and ΔV_mixing < 0 (A-B interactions are stronger than A-A and B-B)',
        'ΔH_mixing = 0 and ΔV_mixing = 0 (A-B interactions equal A-A and B-B)',
        'ΔH_mixing > 0 and ΔV_mixing < 0 (Vapour pressure decreases below Raoult\'s law)'
      ],
      correct: 0,
      explanation: 'In non-ideal solutions with positive deviation, solute-solvent (A-B) interactions are weaker than pure component (A-A and B-B) interactions. Energy is absorbed to break stronger pure bonds (ΔH_mix > 0, endothermic), and weaker forces lead to expansion (ΔV_mix > 0). The escaping tendency into the vapour phase increases, producing higher vapour pressure.'
    },
    {
      id: 'chem-mcq-solutions-nonideal-2',
      chapterId: 'chem-ch-1',
      chapterName: 'Ch 1: Solutions',
      subtopicId: 'chem-sub-1-5',
      difficulty: 'hard',
      question: 'A mixture of chloroform (CHCl₃) and acetone (CH₃COCH₃) forms a non-ideal solution showing negative deviation because:',
      options: [
        'Acetone breaks the existing hydrogen bonds present in pure chloroform',
        'Strong intermolecular hydrogen bonds form between the acidic C-H of chloroform and carbonyl oxygen of acetone',
        'Both liquids have identical London dispersion forces resulting in zero enthalpy change',
        'Chloroform undergoes dimerization in the presence of acetone molecules'
      ],
      correct: 1,
      explanation: 'Neither pure chloroform nor pure acetone has intermolecular hydrogen bonding. However, upon mixing, a strong new hydrogen bond forms between the acidic hydrogen of chloroform and the carbonyl oxygen of acetone: Cl₃C—H···O=C(CH₃)₂. The resulting A-B interactions are stronger than pure A-A and B-B forces, lowering vapour pressure (negative deviation) with ΔH_mix < 0 and ΔV_mix < 0.'
    },
    {
      id: 'chem-mcq-solutions-nonideal-3',
      chapterId: 'chem-ch-1',
      chapterName: 'Ch 1: Solutions',
      subtopicId: 'chem-sub-1-4',
      difficulty: 'easy',
      question: 'Which of the following pairs forms an ideal solution obeying Raoult\'s law, unlike non-ideal solutions?',
      options: [
        'Ethanol + Acetone',
        'Chloroform + Acetone',
        'n-Hexane + n-Heptane',
        'Nitric acid + Water'
      ],
      correct: 2,
      explanation: 'n-Hexane and n-Heptane are homologous non-polar hydrocarbons of similar size and shape with nearly identical intermolecular forces (F_AB = F_AA = F_BB). They form an ideal solution (ΔH_mix = 0, ΔV_mix = 0). Ethanol + Acetone shows positive deviation, while Chloroform + Acetone and HNO₃ + Water show negative deviation.'
    },
    {
      id: 'chem-mcq-1',
      chapterId: 'chem-ch-1',
      chapterName: 'Ch 1: Solutions',
      subtopicId: 'chem-sub-1-8',
      difficulty: 'medium',
      question: 'Which of the following aqueous solutions exhibits the highest boiling point elevation?',
      options: [
        '0.1 M Glucose',
        '0.1 M NaCl',
        '0.1 M BaCl₂',
        '0.1 M Al₂(SO₄)₃'
      ],
      correct: 3,
      explanation: 'Boiling point elevation ΔT_b = i · K_b · m. Al₂(SO₄)₃ dissociates into 2 Al³⁺ + 3 SO₄²⁻ ions (i = 5). Total effective particle concentration = 5 × 0.1 = 0.5 M, highest among all options.'
    },
    {
      id: 'chem-mcq-2',
      chapterId: 'chem-ch-1',
      chapterName: 'Ch 1: Solutions',
      subtopicId: 'chem-sub-1-2',
      difficulty: 'medium',
      question: 'The value of Henry\'s constant K_H for gases in water:',
      options: [
        'Increases with increase in temperature',
        'Decreases with increase in temperature',
        'Remains constant at all temperatures',
        'First increases then drops to zero'
      ],
      correct: 0,
      explanation: 'Gas dissolution in liquids is an exothermic process (ΔH < 0). By Le Chatelier\'s principle, increasing temperature decreases gas solubility. Since solubility x = p / K_H, K_H must increase as temperature rises.'
    },
    {
      id: 'chem-mcq-3',
      chapterId: 'chem-ch-2',
      chapterName: 'Ch 2: Electrochemistry',
      subtopicId: 'chem-sub-2-10',
      difficulty: 'medium',
      question: 'During discharge of a lead storage battery in an automobile:',
      options: [
        'PbSO₄ is consumed and H₂SO₄ is formed',
        'H₂SO₄ is consumed and density of electrolyte drops',
        'Lead dioxide (PbO₂) is produced at the anode',
        'Density of electrolyte increases'
      ],
      correct: 1,
      explanation: 'Overall discharge reaction: Pb(s) + PbO₂(s) + 2 H₂SO₄(aq) ⟶ 2 PbSO₄(s) + 2 H₂O(l). Sulfuric acid is continuously consumed to form water, decreasing the specific gravity of battery acid from ~1.28 to ~1.15 g/cm³.'
    },
    {
      id: 'chem-mcq-4',
      chapterId: 'chem-ch-2',
      chapterName: 'Ch 2: Electrochemistry',
      subtopicId: 'chem-sub-2-8',
      difficulty: 'hard',
      question: 'The limiting molar conductivities Λ°_m for NaCl, HCl, and CH₃COONa are 126.4, 425.9, and 91.0 S·cm²/mol respectively. The Λ°_m of CH₃COOH is:',
      options: [
        '516.9 S·cm²/mol',
        '390.5 S·cm²/mol',
        '299.5 S·cm²/mol',
        '425.9 S·cm²/mol'
      ],
      correct: 1,
      explanation: 'By Kohlrausch\'s Law: Λ°_m(CH₃COOH) = Λ°_m(CH₃COONa) + Λ°_m(HCl) − Λ°_m(NaCl) = 91.0 + 425.9 − 126.4 = 516.9 − 126.4 = 390.5 S·cm²/mol.'
    },
    {
      id: 'chem-mcq-4b',
      chapterId: 'chem-ch-2',
      chapterName: 'Ch 2: Electrochemistry',
      subtopicId: 'chem-sub-2-7',
      difficulty: 'medium',
      question: 'How many Faradays of electric charge are required for the complete reduction of 1 mole of Al³⁺ ions to metallic aluminum (Al)?',
      options: [
        '1 F',
        '2 F',
        '3 F',
        '96,500 F'
      ],
      correct: 2,
      explanation: 'The cathodic reduction reaction is Al³⁺ + 3 e⁻ ⟶ Al(s). Deposition of 1 mole of Al requires 3 moles of electrons. Since 1 mole of electrons carries 1 Faraday (≈ 96,500 Coulombs) of charge, exactly 3 F (289,500 C) are required.'
    },
    {
      id: 'chem-mcq-5',
      chapterId: 'chem-ch-4',
      chapterName: 'Ch 4: d and f Block Elements',
      subtopicId: 'chem-sub-4-1',
      difficulty: 'medium',
      question: 'The electronic configuration of a 3d transition metal ion with the maximum spin-only magnetic moment is:',
      options: [
        'Fe³⁺ (3d⁵)',
        'Mn²⁺ (3d⁵)',
        'Cr³⁺ (3d³)',
        'Both Fe³⁺ and Mn²⁺ (3d⁵)'
      ],
      correct: 3,
      explanation: 'Spin-only magnetic moment μ = √[n(n+2)] BM. Both Mn²⁺ and Fe³⁺ have a half-filled 3d⁵ configuration with n = 5 unpaired electrons, giving μ = √[5(7)] = √35 ≈ 5.92 BM, the maximum possible in the 3d series.'
    },
    {
      id: 'chem-mcq-6',
      chapterId: 'chem-ch-4',
      chapterName: 'Ch 4: d and f Block Elements',
      subtopicId: 'chem-sub-4-7',
      difficulty: 'easy',
      question: 'When acidified potassium dichromate (K₂Cr₂O₇) acts as an oxidizing agent, the oxidation state of chromium changes from:',
      options: [
        '+6 to +3',
        '+6 to +2',
        '+7 to +2',
        '+4 to +2'
      ],
      correct: 0,
      explanation: 'Reduction half-reaction: Cr₂O₇²⁻ + 14 H⁺ + 6 e⁻ ⟶ 2 Cr³⁺ + 7 H₂O. Chromium is reduced from oxidation state +6 (in orange dichromate) to +3 (in green chromic ion).'
    },
    {
      id: 'chem-mcq-7',
      chapterId: 'chem-ch-6',
      chapterName: 'Ch 6: Haloalkanes and Haloarenes',
      subtopicId: 'chem-sub-6-5',
      difficulty: 'medium',
      question: 'Which of the following alkyl halides undergoes S_N1 substitution reaction at the fastest rate with aqueous KOH?',
      options: [
        'CH₃-CH₂-CH₂-CH₂-Cl',
        '(CH₃)₂CH-CH₂-Cl',
        '(CH₃)₃C-Cl',
        'CH₃-CH₂-CH(Cl)-CH₃'
      ],
      correct: 2,
      explanation: 'S_N1 reaction rate is governed strictly by carbocation intermediate stability: 3° > 2° > 1° > methyl. (CH₃)₃C-Cl ionizes into the highly stable tertiary tert-butyl carbocation (CH₃)₃C⁺ (stabilized by 9 hyperconjugative hydrogens).'
    },
    {
      id: 'chem-mcq-8',
      chapterId: 'chem-ch-7',
      chapterName: 'Ch 7: Alcohols, Phenols and Ethers',
      subtopicId: 'chem-sub-7-6',
      difficulty: 'hard',
      question: 'When anisole (methoxybenzene) is heated with concentrated hydroiodic acid (HI), the products formed are:',
      options: [
        'Iodobenzene + Methanol',
        'Phenol + Methyl iodide',
        'Benzene + Methyl iodide',
        'Phenol + Iodobenzene'
      ],
      correct: 1,
      explanation: 'In protonated anisole C₆H₅-O⁺(H)-CH₃, the C(sp²)-O bond between oxygen and benzene ring has partial double bond character due to resonance and is very strong. Cleavage occurs at the weaker aliphatic C(sp³)-O bond via S_N2 attack by I⁻ on the methyl group, yielding Phenol and CH₃I.'
    },
    {
      id: 'chem-mcq-9',
      chapterId: 'chem-ch-3',
      chapterName: 'Ch 3: Chemical Kinetics',
      subtopicId: 'chem-sub-3-3',
      difficulty: 'easy',
      question: 'For a first-order chemical reaction, the half-life period (t₁/₂) is:',
      options: [
        'Directly proportional to the initial concentration [R]₀',
        'Inversely proportional to the initial concentration [R]₀',
        'Completely independent of the initial concentration [R]₀ (t₁/₂ = 0.693 / k)',
        'Proportional to the square of initial concentration'
      ],
      correct: 2,
      explanation: 'For a first-order reaction, t₁/₂ = 0.693 / k, which contains no concentration term [R]₀. For a zero-order reaction, t₁/₂ = [R]₀ / (2k) is directly proportional to [R]₀.'
    },
    {
      id: 'chem-mcq-10',
      chapterId: 'chem-ch-5',
      chapterName: 'Ch 5: Coordination Compounds',
      subtopicId: 'chem-sub-5-4',
      difficulty: 'medium',
      question: 'The hybridisation, geometry, and magnetic behaviour of the complex ion [Ni(CN)₄]²⁻ (Atomic number of Ni = 28) are:',
      options: [
        'sp³, Tetrahedral, Paramagnetic',
        'dsp², Square planar, Diamagnetic',
        'sp³, Tetrahedral, Diamagnetic',
        'd²sp³, Octahedral, Paramagnetic'
      ],
      correct: 1,
      explanation: 'In [Ni(CN)₄]²⁻, Ni²⁺ is a 3d⁸ ion. Since CN⁻ is a strong-field ligand, it pairs up the two unpaired 3d electrons, leaving one 3d orbital empty for dsp² hybridisation (Square planar geometry, n = 0 unpaired electrons, Diamagnetic).'
    },
    {
      id: 'chem-mcq-11',
      chapterId: 'chem-ch-8',
      chapterName: 'Ch 8: Aldehydes, Ketones and Carboxylic Acids',
      subtopicId: 'chem-sub-8-4',
      difficulty: 'medium',
      question: 'Which of the following carbonyl compounds undergoes the Cannizzaro disproportionation reaction upon heating with concentrated NaOH?',
      options: [
        'Acetaldehyde (CH₃CHO)',
        'Acetone (CH₃COCH₃)',
        'Benzaldehyde (C₆H₅CHO)',
        'Propanal (CH₃CH₂CHO)'
      ],
      correct: 2,
      explanation: 'Cannizzaro reaction is given exclusively by aldehydes that lack an α-hydrogen atom, such as Formaldehyde (HCHO) and Benzaldehyde (C₆H₅CHO), yielding one molecule of alcohol and one molecule of carboxylate salt.'
    },
    {
      id: 'chem-mcq-12',
      chapterId: 'chem-ch-9',
      chapterName: 'Ch 9: Amines',
      subtopicId: 'chem-sub-9-2',
      difficulty: 'hard',
      question: 'The correct decreasing order of basic strength of ethyl-substituted amines in aqueous solution is:',
      options: [
        '(C₂H₅)₃N > (C₂H₅)₂NH > C₂H₅NH₂ > NH₃',
        '(C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃',
        '(C₂H₅)₂NH > C₂H₅NH₂ > (C₂H₅)₃N > NH₃',
        'C₂H₅NH₂ > (C₂H₅)₂NH > (C₂H₅)₃N > NH₃'
      ],
      correct: 1,
      explanation: 'Due to the combined interplay of +I inductive effect, solvation (hydration) stabilization of the conjugate ammonium cation, and steric hindrance: for ethyl groups in water, the order is 2° > 3° > 1° > NH₃ (Code: 231). For methyl groups, it is 2° > 1° > 3° > NH₃ (Code: 213).'
    },
    {
      id: 'chem-mcq-13',
      chapterId: 'chem-ch-10',
      chapterName: 'Ch 10: Biomolecules',
      subtopicId: 'chem-sub-10-4',
      difficulty: 'easy',
      question: 'Which nitrogenous base is present in RNA in place of Thymine found in DNA?',
      options: [
        'Adenine',
        'Guanine',
        'Cytosine',
        'Uracil'
      ],
      correct: 3,
      explanation: 'DNA contains Adenine (A), Guanine (G), Cytosine (C), and Thymine (T, 5-methyluracil), whereas RNA contains Adenine (A), Guanine (G), Cytosine (C), and Uracil (U).'
    }
  ],

  biology: [
    {
      id: 'bio-mcq-1',
      chapterId: 'bio-ch-1',
      chapterName: 'Ch 1: Sexual Reproduction in Flowering Plants',
      subtopicId: 'bio-sub-1-2',
      difficulty: 'medium',
      question: 'The functional megaspore in a typical angiosperm ovule develops into a female gametophyte (embryo sac) that is characterized by:',
      options: [
        '7-celled, 7-nucleate',
        '8-celled, 8-nucleate',
        '7-celled, 8-nucleate',
        '8-celled, 7-nucleate'
      ],
      correct: 2,
      explanation: 'Monosporic development produces: 3 antipodal cells at chalazal end (3 cells, 3 nuclei) + 1 large central cell with 2 polar nuclei (1 cell, 2 nuclei) + egg apparatus consisting of 1 egg cell and 2 synergids (3 cells, 3 nuclei) = total 7 cells, 8 nuclei.'
    },
    {
      id: 'bio-mcq-2',
      chapterId: 'bio-ch-2',
      chapterName: 'Ch 2: Human Reproduction',
      subtopicId: 'bio-sub-2-2',
      difficulty: 'easy',
      question: 'The acrosome of a mature human spermatozoon is derived morphologically from which cellular organelle during spermiogenesis?',
      options: [
        'Mitochondria',
        'Golgi apparatus',
        'Endoplasmic reticulum',
        'Centriole'
      ],
      correct: 1,
      explanation: 'The acrosome is a cap-like structure covering the anterior portion of the sperm nucleus. It is formed by the Golgi apparatus of the spermatid and is packed with hydrolytic enzymes (hyaluronidase and acrosin) that dissolve the corona radiata and zona pellucida during fertilization.'
    },
    {
      id: 'bio-mcq-3',
      chapterId: 'bio-ch-3',
      chapterName: 'Ch 3: Reproductive Health',
      subtopicId: 'bio-sub-3-1',
      difficulty: 'easy',
      question: 'Which of the following intrauterine devices (IUDs) releases copper ions (Cu²⁺) to suppress sperm motility and fertilizing capacity?',
      options: [
        'Lippes loop',
        'Progestasert',
        'CuT and Multiload 375',
        'LNG-20'
      ],
      correct: 2,
      explanation: 'CuT, Cu7, and Multiload 375 are copper-releasing IUDs. The released Cu²⁺ ions suppress sperm motility and their fertilizing capacity. Lippes loop is non-medicated, while Progestasert and LNG-20 are hormone-releasing IUDs.'
    },
    {
      id: 'bio-mcq-4',
      chapterId: 'bio-ch-4',
      chapterName: 'Ch 4: Principles of Inheritance and Variation',
      subtopicId: 'bio-sub-4-1',
      difficulty: 'medium',
      question: 'A human male suffering from Klinefelter\'s syndrome has a chromosome complement of:',
      options: [
        '44 + XO (45 chromosomes)',
        '44 + XXY (47 chromosomes)',
        '44 + XYY (47 chromosomes)',
        '45 + XY (47 chromosomes)'
      ],
      correct: 1,
      explanation: 'Klinefelter\'s syndrome is caused by the presence of an extra copy of the X chromosome, resulting in the karyotype 47, XXY (44 autosomes + XXY sex chromosomes). Individuals have overall masculine development with feminine features like gynaecomastia and are sterile.'
    },
    {
      id: 'bio-mcq-5',
      chapterId: 'bio-ch-5',
      chapterName: 'Ch 5: Molecular Basis of Inheritance',
      subtopicId: 'bio-sub-5-4',
      difficulty: 'hard',
      question: 'In the Jacob-Monod Lac Operon model of Escherichia coli, the repressor protein synthesized by the regulator gene binds to the:',
      options: [
        'Promoter site',
        'Operator site',
        'Structural gene z',
        'CAP site'
      ],
      correct: 1,
      explanation: 'In the absence of lactose (inducer), the active repressor protein synthesized constitutively by the i-gene binds specifically to the operator (o) gene, sterically preventing RNA polymerase from transcribing the structural genes (z, y, a).'
    },
    {
      id: 'bio-mcq-6',
      chapterId: 'bio-ch-6',
      chapterName: 'Ch 6: Evolution',
      subtopicId: 'bio-sub-6-2',
      difficulty: 'easy',
      question: 'The presence of homologous organs such as the forelimbs of humans, cheetahs, whales, and bats provides anatomical evidence for:',
      options: [
        'Convergent evolution',
        'Divergent evolution',
        'Saltation',
        'Retrogressive evolution'
      ],
      correct: 1,
      explanation: 'Homologous organs share a common anatomical origin, basic structural plan, and embryonic development, but have adapted to perform different functions in response to different ecological niches, illustrating divergent evolution.'
    },
    {
      id: 'bio-mcq-7',
      chapterId: 'bio-ch-7',
      chapterName: 'Ch 7: Human Health and Disease',
      subtopicId: 'bio-sub-7-3',
      difficulty: 'medium',
      question: 'Which of the following immunoglobulins is primarily present in colostrum, conferring passive natural immunity to the newborn infant against infections?',
      options: [
        'IgG',
        'IgM',
        'IgA',
        'IgE'
      ],
      correct: 2,
      explanation: 'Colostrum, the yellowish initial milk produced during the first few days postpartum, is rich in Secretory IgA antibodies. IgA lines the mucosal surfaces of the infant digestive and respiratory tracts, conferring crucial passive natural immunity.'
    },
    {
      id: 'bio-mcq-8',
      chapterId: 'bio-ch-8',
      chapterName: 'Ch 8: Microbes in Human Welfare',
      subtopicId: 'bio-sub-8-2',
      difficulty: 'medium',
      question: 'The bioactive molecule Cyclosporin A, widely used as an immunosuppressive agent in organ transplant patients, is produced by the fungus:',
      options: [
        'Monascus purpureus',
        'Trichoderma polysporum',
        'Aspergillus niger',
        'Penicillium notatum'
      ],
      correct: 1,
      explanation: 'Cyclosporin A is produced by the fungus Trichoderma polysporum and is used as an immunosuppressive drug in organ transplantation. Statins are produced by Monascus purpureus, Citric acid by Aspergillus niger, and Penicillin by Penicillium notatum.'
    },
    {
      id: 'bio-mcq-9',
      chapterId: 'bio-ch-9',
      chapterName: 'Ch 9: Biotechnology: Principles and Processes',
      subtopicId: 'bio-sub-9-5',
      difficulty: 'easy',
      question: 'The thermostable DNA polymerase (Taq polymerase) used for repeated amplification cycles in PCR is isolated from the bacterium:',
      options: [
        'Escherichia coli',
        'Thermus aquaticus',
        'Agrobacterium tumefaciens',
        'Salmonella typhimurium'
      ],
      correct: 1,
      explanation: 'Taq polymerase is isolated from the thermophilic bacterium Thermus aquaticus. It remains active during the high-temperature denaturation step (94 °C) of Polymerase Chain Reaction (PCR).'
    },
    {
      id: 'bio-mcq-10',
      chapterId: 'bio-ch-10',
      chapterName: 'Ch 10: Biotechnology and its Applications',
      subtopicId: 'bio-sub-10-3',
      difficulty: 'medium',
      question: 'During the maturation of human pro-insulin into functional mature insulin, which peptide segment is enzymatically excised?',
      options: [
        'A-peptide chain',
        'B-peptide chain',
        'C-peptide stretch',
        'Disulfide bridges'
      ],
      correct: 2,
      explanation: 'Pro-insulin contains an extra stretch called the C-peptide, which is removed during maturation, leaving the A-chain (21 amino acids) and B-chain (30 amino acids) linked together by disulfide bonds.'
    },
    {
      id: 'bio-mcq-11',
      chapterId: 'bio-ch-11',
      chapterName: 'Ch 11: Organisms and Populations',
      subtopicId: 'bio-sub-11-3',
      difficulty: 'medium',
      question: 'In the Verhulst-Pearl logistic population growth equation dN/dt = rN[(K − N)/K], the symbol K represents:',
      options: [
        'Intrinsic rate of natural increase',
        'Carrying capacity of the habitat',
        'Initial population density',
        'Mortality rate constant'
      ],
      correct: 1,
      explanation: 'In the logistic S-shaped growth model, K represents the Carrying Capacity — the maximum population size of a species that a given habitat\'s limited resources can sustainably support.'
    },
    {
      id: 'bio-mcq-12',
      chapterId: 'bio-ch-12',
      chapterName: 'Ch 12: Ecosystem',
      subtopicId: 'bio-sub-12-4',
      difficulty: 'easy',
      question: 'Which of the following ecological pyramids is ALWAYS upright and can never be inverted in any natural ecosystem?',
      options: [
        'Pyramid of Numbers',
        'Pyramid of Biomass',
        'Pyramid of Energy',
        'Aquatic Biomass Pyramid'
      ],
      correct: 2,
      explanation: 'The Pyramid of Energy is always upright because when energy flows from one trophic level to the next, only ~10% is transferred while 90% is lost as metabolic heat at each step (Second Law of Thermodynamics).'
    },
    {
      id: 'bio-mcq-13',
      chapterId: 'bio-ch-13',
      chapterName: 'Ch 13: Biodiversity and Conservation',
      subtopicId: 'bio-sub-13-4',
      difficulty: 'easy',
      question: 'Which of the following is an example of ex-situ (off-site) conservation of threatened biodiversity?',
      options: [
        'National Parks',
        'Biosphere Reserves',
        'Sacred Groves',
        'Cryopreservation of gametes and Seed Banks'
      ],
      correct: 3,
      explanation: 'Cryopreservation (at −196 °C in liquid nitrogen), seed banks, botanical gardens, and zoological parks are ex-situ conservation methods, whereas National Parks, Biosphere Reserves, Wildlife Sanctuaries, and Sacred Groves are in-situ.'
    }
  ],

  psychology: [
    {
      id: 'psy-mcq-1',
      chapterId: 'psy-ch-1',
      chapterName: 'Ch 1: Variations in Psychological Attributes',
      subtopicId: 'psy-sub-1-2',
      difficulty: 'hard',
      question: "According to Robert Sternberg's Triarchic Theory of Intelligence, an individual who excels at analyzing, planning, monitoring, and evaluating problem-solving steps is demonstrating high:",
      options: [
        'Componential (Analytical) Intelligence',
        'Experiential (Creative) Intelligence',
        'Contextual (Practical) Intelligence',
        'Spatial Intelligence'
      ],
      correct: 0,
      explanation: 'Componential or analytical intelligence involves the mental mechanisms used in information processing: meta-components (planning and evaluation), performance components (execution), and knowledge acquisition components.'
    },
    {
      id: 'psy-mcq-2',
      chapterId: 'psy-ch-1',
      chapterName: 'Ch 1: Variations in Psychological Attributes',
      subtopicId: 'psy-sub-1-4',
      difficulty: 'medium',
      question: 'A 10-year-old child successfully solves items on the Stanford-Binet test designed for an average 13-year-old. What is the child\'s calculated Intelligence Quotient (IQ)?',
      options: ['130', '100', '115', '77'],
      correct: 0,
      explanation: 'Using the historical formula IQ = (Mental Age / Chronological Age) × 100 = (13 / 10) × 100 = 130 (Superior / Very High intelligence).'
    },
    {
      id: 'psy-mcq-3',
      chapterId: 'psy-ch-1',
      chapterName: 'Ch 1: Variations in Psychological Attributes',
      subtopicId: 'psy-sub-1-5',
      difficulty: 'medium',
      question: 'Which of the following is a mandatory diagnostic criterion for Intellectual Disability according to the DSM-5 / AAMR classification?',
      options: [
        'IQ score below 70, deficits in adaptive behaviour, with onset before the age of 18 years',
        'IQ score below 90 accompanied by learning disability',
        'Pure academic failure in school regardless of everyday social skills',
        'High creativity combined with low arithmetic skills'
      ],
      correct: 0,
      explanation: 'Intellectual disability requires: (1) significantly sub-average general intellectual functioning (IQ < 70), (2) concurrent deficits in adaptive behaviour (daily living, communication, social skills), and (3) manifestation during the developmental period (before 18 years).'
    },
    {
      id: 'psy-mcq-4',
      chapterId: 'psy-ch-1',
      chapterName: 'Ch 1: Variations in Psychological Attributes',
      subtopicId: 'psy-sub-1-7',
      difficulty: 'hard',
      question: 'The "Threshold Theory" of the relationship between intelligence and creativity states that:',
      options: [
        'A certain minimum baseline level of intelligence (around IQ 110-120) is required for high creativity, but beyond that threshold they are relatively independent',
        'High intelligence guarantees extraordinary creative genius',
        'Creativity and intelligence are inversely related',
        'Intelligence tests measure divergent thinking rather than convergent thinking'
      ],
      correct: 0,
      explanation: 'Threshold theory posits that a minimum IQ (~110-120) is necessary to have the basic cognitive resources for creative thought, but beyond that level, non-cognitive factors (curiosity, task commitment, divergent thinking) determine creative achievement.'
    },
    {
      id: 'psy-mcq-5',
      chapterId: 'psy-ch-2',
      chapterName: 'Ch 2: Self and Personality',
      subtopicId: 'psy-sub-2-1',
      difficulty: 'easy',
      question: 'Albert Bandura defined self-efficacy as:',
      options: [
        'An individual\'s belief in their own capability to organize and execute actions required to achieve designated goals',
        'The overall positive or negative evaluation a person attaches to their self-worth',
        'The degree to which personal behaviour is controlled by external environmental reinforcement',
        'The unconditional acceptance received from parents in early childhood'
      ],
      correct: 0,
      explanation: 'Self-efficacy refers to task-specific confidence in one\'s own abilities, which strongly influences the initiation of coping behaviour, amount of effort expended, and persistence in the face of obstacles.'
    },
    {
      id: 'psy-mcq-6',
      chapterId: 'psy-ch-2',
      chapterName: 'Ch 2: Self and Personality',
      subtopicId: 'psy-sub-2-5',
      difficulty: 'medium',
      question: 'Individuals who are excessively competitive, impatient, chronically rushed for time, and prone to hostility are classified as having which personality type, and are at higher risk for:',
      options: [
        'Type A personality ; Coronary heart disease',
        'Type B personality ; Peptic ulcers',
        'Type C personality ; Rheumatoid arthritis',
        'Type D personality ; Asthma'
      ],
      correct: 0,
      explanation: 'Friedman and Rosenman established that Type A behaviour pattern (hostility, competitive drive, time urgency) is a potent independent risk factor for coronary heart disease and hypertension.'
    },
    {
      id: 'psy-mcq-7',
      chapterId: 'psy-ch-2',
      chapterName: 'Ch 2: Self and Personality',
      subtopicId: 'psy-sub-2-6',
      difficulty: 'easy',
      question: 'In the Big Five (Five-Factor) Model of personality (OCEAN), an individual who is highly organized, dependable, disciplined, and goal-directed scores high on:',
      options: [
        'Conscientiousness',
        'Openness to experience',
        'Agreeableness',
        'Extraversion'
      ],
      correct: 0,
      explanation: 'Conscientiousness reflects impulse control, high organization, self-discipline, planfulness, and strong achievement orientation.'
    },
    {
      id: 'psy-mcq-8',
      chapterId: 'psy-ch-2',
      chapterName: 'Ch 2: Self and Personality',
      subtopicId: 'psy-sub-2-7',
      difficulty: 'easy',
      question: 'In Freud\'s structural model of personality, the structure that operates entirely on the "reality principle" and acts as a mediator is the:',
      options: [
        'Ego',
        'Id',
        'Superego',
        'Libido'
      ],
      correct: 0,
      explanation: 'The Ego operates on the reality principle, delaying instinctual gratification until appropriate environmental conditions are found, mediating between the demands of the Id, Superego, and reality.'
    },
    {
      id: 'psy-mcq-9',
      chapterId: 'psy-ch-3',
      chapterName: 'Ch 3: Meeting Life Challenges',
      subtopicId: 'psy-sub-3-1',
      difficulty: 'medium',
      question: 'According to Lazarus and Folkman\'s Cognitive Appraisal Model, "Secondary Appraisal" involves:',
      options: [
        'Assessing one\'s available personal and social coping resources and options to manage the stressor',
        'Judging whether the event represents harm, threat, or challenge',
        'Immediate sympathetic nervous system fight-or-flight discharge',
        'Denial of the stressful situation through defense mechanisms'
      ],
      correct: 0,
      explanation: 'Primary appraisal evaluates the nature and significance of the stressor (harm, threat, challenge), while secondary appraisal assesses the individual\'s coping resources, abilities, and strategies.'
    },
    {
      id: 'psy-mcq-10',
      chapterId: 'psy-ch-3',
      chapterName: 'Ch 3: Meeting Life Challenges',
      subtopicId: 'psy-sub-3-3',
      difficulty: 'easy',
      question: 'In Hans Selye\'s General Adaptation Syndrome (GAS), during which stage does the body sustain prolonged physiological coping before its adaptive energy is depleted?',
      options: [
        'Resistance stage',
        'Alarm reaction stage',
        'Exhaustion stage',
        'Homeostasis stage'
      ],
      correct: 0,
      explanation: 'The three stages of GAS are: (1) Alarm Reaction, (2) Resistance Stage (where the body adapts and sustains coping efforts with elevated endocrine output), and (3) Exhaustion Stage (where reserves collapse).'
    },
    {
      id: 'psy-mcq-11',
      chapterId: 'psy-ch-3',
      chapterName: 'Ch 3: Meeting Life Challenges',
      subtopicId: 'psy-sub-3-5',
      difficulty: 'medium',
      question: 'When a situation is genuinely uncontrollable (such as coping with the death of a close family member), which coping strategy is empirically found to be most adaptive?',
      options: [
        'Emotion-focused coping (seeking emotional support, acceptance, positive reappraisal)',
        'Problem-focused coping (direct alteration of the external stressor)',
        'Aggressive confrontation',
        'Complete emotional suppression'
      ],
      correct: 0,
      explanation: 'When external stressors cannot be changed (uncontrollable events like bereavement), emotion-focused coping helps regulate internal emotional turmoil and distress effectively.'
    },
    {
      id: 'psy-mcq-12',
      chapterId: 'psy-ch-4',
      chapterName: 'Ch 4: Psychological Disorders',
      subtopicId: 'psy-sub-4-5',
      difficulty: 'medium',
      question: 'In Schizophrenia, symptoms that represent pathological excesses or bizarre additions to normal thoughts and behaviour (such as delusions and hallucinations) are termed:',
      options: [
        'Positive symptoms',
        'Negative symptoms',
        'Psychomotor symptoms',
        'Somatic symptoms'
      ],
      correct: 0,
      explanation: 'Positive symptoms are pathological excesses (delusions, hallucinations, disorganized speech/formal thought disorder), whereas negative symptoms are deficits (alogia, avolition, flat/blunted affect).'
    },
    {
      id: 'psy-mcq-13',
      chapterId: 'psy-ch-5',
      chapterName: 'Ch 5: Therapeutic Approaches',
      subtopicId: 'psy-sub-5-2',
      difficulty: 'medium',
      question: 'Joseph Wolpe developed Systematic Desensitization for treating phobias based on the behavioural principle of:',
      options: [
        'Reciprocal inhibition',
        'Token economy',
        'Free association',
        'Existential logotherapy'
      ],
      correct: 0,
      explanation: 'Systematic desensitization operates on the principle of reciprocal inhibition, which states that the presence of two mutually opposing forces (deep muscular relaxation vs anxiety) inhibits the weaker anxiety response.'
    },
    {
      id: 'psy-mcq-14',
      chapterId: 'psy-ch-6',
      chapterName: 'Ch 6: Attitude and Social Cognition',
      subtopicId: 'psy-sub-6-3',
      difficulty: 'easy',
      question: 'According to Fritz Heider\'s P-O-X Balance Theory of attitude change, an attitude triad is in a state of balance when:',
      options: [
        'All three sides are negative',
        'Two sides are positive and one side is negative',
        'All three sides are positive, OR two sides are negative and one side is positive',
        'One side is positive and two sides are neutral'
      ],
      correct: 2,
      explanation: 'In Heider\'s P-O-X triangle, balance exists when the multiplicative product of the signs of the three sides is positive: either all three sides are positive (+ + +), or two sides are negative and one is positive (− − +).'
    },
    {
      id: 'psy-mcq-15',
      chapterId: 'psy-ch-7',
      chapterName: 'Ch 7: Social Influence and Group Processes',
      subtopicId: 'psy-sub-7-4',
      difficulty: 'easy',
      question: 'The phenomenon in which individuals exert LESS effort when working collectively in a group than when working individually on a pooled task (such as clapping or tug-of-war) is called:',
      options: [
        'Social facilitation',
        'Social loafing',
        'Group polarisation',
        'Groupthink'
      ],
      correct: 1,
      explanation: 'Social loafing (demonstrated by Latane\'s clapping experiment) is the reduction in individual effort when working on a collective task due to diffusion of responsibility and lack of individual evaluation.'
    }
  ],
  standard_maths: [
    {
      id: 'math-mcq-1',
      chapterId: 'math-ch-3',
      chapterName: 'Ch 3: Matrices',
      subtopicId: 'math-sub-3-2',
      difficulty: 'easy',
      question: 'If A is a square matrix of order 3 such that |A| = 4, then the value of |adj(A)| is:',
      options: [
        '4',
        '16',
        '64',
        '12'
      ],
      correct: 1,
      explanation: 'For any square matrix of order n, |adj(A)| = |A|^{n-1}. Here n = 3, so |adj(A)| = 4^{3-1} = 4² = 16.'
    },
    {
      id: 'math-mcq-2',
      chapterId: 'math-ch-5',
      chapterName: 'Ch 5: Continuity & Differentiability',
      subtopicId: 'math-sub-5-1',
      difficulty: 'medium',
      question: 'The function f(x) = |x| is:',
      options: [
        'Continuous everywhere and differentiable everywhere',
        'Continuous everywhere but NOT differentiable at x = 0',
        'Neither continuous nor differentiable at x = 0',
        'Differentiable at x = 0 with f\'(0) = 0'
      ],
      correct: 1,
      explanation: 'At x = 0, LHL = RHL = f(0) = 0, so f(x) is continuous. However, Left Hand Derivative = -1 and Right Hand Derivative = +1. Since LHD ≠ RHD, f is not differentiable at x = 0.'
    },
    {
      id: 'math-mcq-3',
      chapterId: 'math-ch-10',
      chapterName: 'Ch 10: Vector Algebra',
      subtopicId: 'math-sub-10-1',
      difficulty: 'easy',
      question: 'If a⃗ and b⃗ are two non-zero vectors such that |a⃗ · b⃗| = |a⃗ × b⃗|, then the angle between them is:',
      options: [
        '0',
        'π / 4',
        'π / 2',
        'π'
      ],
      correct: 1,
      explanation: '|a⃗ · b⃗| = |a⃗||b⃗| |cos θ| and |a⃗ × b⃗| = |a⃗||b⃗| sin θ. Equating gives |cos θ| = sin θ ⟹ tan θ = 1 ⟹ θ = π/4 (or 45°).'
    }
  ],
  applied_maths: [
    {
      id: 'app-mcq-1',
      chapterId: 'app-ch-1',
      chapterName: 'Ch 1: Numbers & Modulo Arithmetic',
      subtopicId: 'app-sub-1-1',
      difficulty: 'easy',
      question: 'If a ≡ b (mod m), which of the following is strictly true by definition?',
      options: [
        'm divides (a - b)',
        'a divides (m - b)',
        '(a - b) divides m',
        'a + b is a multiple of m'
      ],
      correct: 0,
      explanation: 'By the mathematical definition of congruence modulo m, a ≡ b (mod m) if and only if (a - b) is divisible by m, i.e., m | (a - b).'
    },
    {
      id: 'app-mcq-2',
      chapterId: 'app-ch-7',
      chapterName: 'Ch 7: Financial Mathematics',
      subtopicId: 'app-sub-7-1',
      difficulty: 'medium',
      question: 'The present value of a perpetuity paying ₹6,000 at the end of each year at an annual interest rate of 8% compounded annually is:',
      options: [
        '₹48,000',
        '₹75,000',
        '₹60,000',
        '₹80,000'
      ],
      correct: 1,
      explanation: 'Present Value of a perpetuity is given by PV = R / i = 6000 / 0.08 = ₹75,000.'
    },
    {
      id: 'app-mcq-3',
      chapterId: 'app-ch-4',
      chapterName: 'Ch 4: Calculus in Economics',
      subtopicId: 'app-sub-4-1',
      difficulty: 'easy',
      question: 'A firm maximizes profit at an output level where:',
      options: [
        'Marginal Revenue (MR) = Marginal Cost (MC)',
        'Total Revenue = Total Cost',
        'Average Revenue = Average Cost',
        'Marginal Cost is at its absolute maximum'
      ],
      correct: 0,
      explanation: 'Profit Π = R(x) - C(x). First order condition for maximum profit is dΠ/dx = 0 ⟹ dR/dx - dC/dx = 0 ⟹ MR = MC.'
    }
  ],
  english: [
    {
      id: 'eng-mcq-1',
      chapterId: 'eng-ch-1',
      chapterName: 'Ch 1: The Last Lesson',
      subtopicId: 'eng-sub-1-3',
      difficulty: 'medium',
      question: 'According to M. Hamel in "The Last Lesson", what serves as the key to prison for an enslaved people?',
      options: [
        'Their national flag',
        'Their holding fast to their native language',
        'Their military strength',
        'Their economic self-reliance'
      ],
      correct: 1,
      explanation: 'M. Hamel tells the class that when a people are enslaved, as long as they hold fast to their language it is as if they had the key to their prison.'
    },
    {
      id: 'eng-mcq-2',
      chapterId: 'eng-ch-1',
      chapterName: 'Ch 1: The Last Lesson',
      subtopicId: 'eng-sub-1-4',
      difficulty: 'easy',
      question: 'What did M. Hamel write on the blackboard before dismissing the class?',
      options: [
        '"Adieu Alsace"',
        '"Vive La France!"',
        '"Liberte, Egalite, Fraternite"',
        '"Dieu et Mon Droit"'
      ],
      correct: 1,
      explanation: 'Bearing on with all his might, M. Hamel wrote as large as he could: "Vive La France!" (Long Live France!).'
    },
    {
      id: 'eng-mcq-3',
      chapterId: 'eng-ch-2',
      chapterName: 'Ch 2: Lost Spring',
      subtopicId: 'eng-sub-2-1',
      difficulty: 'easy',
      question: 'What is the literal English meaning of the name "Saheb-e-Alam"?',
      options: [
        'Prince of the Slums',
        'King of Delhi',
        'Lord of the Universe',
        'Master of the Street'
      ],
      correct: 2,
      explanation: 'The author notes that Saheb-e-Alam literally translates to "Lord of the Universe", creating a profound tragic irony with his barefoot ragpicking existence.'
    },
    {
      id: 'eng-mcq-4',
      chapterId: 'eng-ch-3',
      chapterName: 'Ch 3: Deep Water',
      subtopicId: 'eng-sub-3-3',
      difficulty: 'medium',
      question: 'Which famous historical personality did William Douglas quote regarding fear in "Deep Water"?',
      options: [
        'Abraham Lincoln',
        'Franklin D. Roosevelt',
        'George Washington',
        'Winston Churchill'
      ],
      correct: 1,
      explanation: 'Douglas remembers President Franklin D. Roosevelt saying: "All we have to fear is fear itself."'
    },
    {
      id: 'eng-mcq-5',
      chapterId: 'eng-ch-4',
      chapterName: 'Ch 4: The Rattrap',
      subtopicId: 'eng-sub-4-3',
      difficulty: 'medium',
      question: 'Why did the peddler sign the farewell letter to Edla Willmansson as "Captain von Stahle"?',
      options: [
        'Because he wanted to deceive her father one last time',
        'Because Edla had treated him with the dignity of a captain, elevating him to act honorably',
        'Because Captain von Stahle was his true military rank',
        'To prevent the sheriff from identifying him'
      ],
      correct: 1,
      explanation: 'Edla\'s unconditional respect and kindness treated him like a real captain, giving him the moral strength to rise above petty deception and clear his conscience.'
    },
    {
      id: 'eng-mcq-6',
      chapterId: 'eng-ch-6',
      chapterName: 'Ch 6: My Mother at Sixty-Six',
      subtopicId: 'eng-sub-6-2',
      difficulty: 'easy',
      question: 'In "My Mother at Sixty-Six", the poet compares her mother’s wan and pale face to:',
      options: [
        'A cloudy autumn evening',
        'A late winter\'s moon',
        'A withered summer blossom',
        'An eclipsed morning star'
      ],
      correct: 1,
      explanation: 'Kamala Das uses the simile "as a late winter\'s moon" to capture the mother\'s dim, pale, and fading vitality.'
    },
    {
      id: 'eng-mcq-7',
      chapterId: 'eng-ch-7',
      chapterName: 'Ch 7: Keeping Quiet',
      subtopicId: 'eng-sub-7-2',
      difficulty: 'medium',
      question: 'In Pablo Neruda’s "Keeping Quiet", what is the tragic consequence of modern green and gas wars described by the poet?',
      options: [
        'Bankruptcy of nations',
        'Victory with no survivors',
        'Destruction of monuments',
        'Global economic recession'
      ],
      correct: 1,
      explanation: 'Neruda describes the bitter paradox of modern warfare as "victory with no survivors", emphasizing the futility of mutual annihilation.'
    },
    {
      id: 'eng-mcq-8',
      chapterId: 'eng-ch-8',
      chapterName: 'Ch 8: A Thing of Beauty',
      subtopicId: 'eng-sub-8-2',
      difficulty: 'easy',
      question: 'Which of the following is explicitly listed by John Keats as a "Thing of Beauty" in the poem?',
      options: [
        'Golden chariots and royal palaces',
        'Clear rills that make a cooling covert against the hot season',
        'Loud victory bugles of warriors',
        'Wealth accumulated through commerce'
      ],
      correct: 1,
      explanation: 'Keats explicitly lists "clear rills that for themselves a cooling covert make \'gainst the hot season" among the things of beauty alongside the sun, moon, shady trees, daffodils, and the musk-rose brake.'
    },
    {
      id: 'eng-mcq-9',
      chapterId: 'eng-ch-8',
      chapterName: 'Ch 8: A Thing of Beauty',
      subtopicId: 'eng-sub-8-2',
      difficulty: 'medium',
      question: 'According to John Keats, what causes an "inhuman dearth" in the human world?',
      options: [
        'Dearth of physical resources and gold',
        'Dearth of noble natures',
        'Dearth of scientific discoveries',
        'Dearth of fertile agricultural soil'
      ],
      correct: 1,
      explanation: 'Keats laments the "inhuman dearth of noble natures" as one of the seven causes of human misery and gloomy days.'
    },
    {
      id: 'eng-mcq-10',
      chapterId: 'eng-ch-10',
      chapterName: 'Ch 10: The Tiger King',
      subtopicId: 'eng-sub-10-3',
      difficulty: 'easy',
      question: 'How was the Maharaja of Pratibandapuram ultimately killed, fulfilling the prophecy of the hundredth tiger?',
      options: [
        'By a ferocious wild tiger in the Royal Forest',
        'By a venomous cobra bite',
        'By an infection caused by a tiny wooden sliver from a cheap toy tiger',
        'By a fatal wound from a British officer\'s gun'
      ],
      correct: 2,
      explanation: 'While playing with his son\'s third-birthday cheap wooden toy tiger, a tiny sliver of unfinished wood pierced the King\'s hand, leading to fatal suppurating gangrene.'
    },
    {
      id: 'eng-mcq-11',
      chapterId: 'eng-ch-13',
      chapterName: 'Ch 13: Notice Writing',
      subtopicId: 'eng-sub-13-1',
      difficulty: 'easy',
      question: 'What is the official CBSE word limit prescribed for Notice Writing?',
      options: [
        '30 words',
        '50 words',
        '80 words',
        '100 words'
      ],
      correct: 1,
      explanation: 'CBSE mandates a strict word limit of 50 words for Notice Writing, with marks deducted for excessive word count.'
    }
  ]
};
