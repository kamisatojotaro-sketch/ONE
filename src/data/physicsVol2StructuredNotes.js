// NCERT Class 12 Physics Volume 2 (Chapters 9–14) Structured Notes Database
// Oswaal-grade definitions, key points, mnemonics, commonly made errors, assertion-reason, and exam trends

export const PHYSICS_VOL2_STRUCTURED_NOTES = {
  // ==========================================================================
  // CHAPTER 9: RAY OPTICS AND OPTICAL INSTRUMENTS
  // ==========================================================================
  'phy-sub-9-1': {
    definitions: [
      {
        term: 'Focal Length of Spherical Mirror (f = R / 2)',
        definition: 'The distance between the pole (P) and the principal focus (F) of a spherical mirror, equal to half its radius of curvature R for paraxial rays.'
      },
      {
        term: 'Linear Magnification (m)',
        definition: 'The ratio of height of image (h_i) to height of object (h_o): m = h_i / h_o = −v / u. Negative m signifies a real, inverted image; positive m signifies a virtual, erect image.'
      }
    ],
    keyPoints: [
      '• <strong>Cartesian Sign Convention:</strong> All distances are measured from the Pole P. Distances in the direction of incident light are positive (+); opposite to incident light are negative (−).',
      '• <strong>Mirror Formula:</strong> $1/v + 1/u = 1/f = 2/R$. Concave mirror has $f < 0$; Convex mirror has $f > 0$ (always forms diminished, virtual, erect image between P and F).'
    ],
    extraPoints: [
      '• <strong>Paraxial Approximation:</strong> Mirror formula is strictly valid when aperture is small compared to radius of curvature ($\theta$ is small so $\tan\theta \approx \theta$).'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Mirror vs Lens Sign Flip',
      phrase: 'Mirror adds (1/v + 1/u), m = −v/u | Lens subtracts (1/v − 1/u), m = +v/u',
      explanation: 'Never confuse the sign of 1/u and magnification m between spherical mirrors and thin lenses!'
    },
    commonlyMadeErrors: [
      {
        error: 'Substituting positive u or positive f for a concave mirror in numerical problems.',
        tip: 'Object distance u is ALWAYS negative for real objects; f is negative for concave and positive for convex.',
        penalty: 'Loss of 1.5 marks in 3-mark numerical.'
      }
    ],
    assertionReason: {
      assertion: 'The focal length of a concave mirror remains unchanged when immersed in water.',
      reason: 'Focal length of a spherical mirror depends only on its radius of curvature (f = R/2) and is independent of the surrounding medium.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Reflection laws do not depend on refractive index of the medium.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2020',
      frequency: 'High Frequency',
      typicalMarks: '2 Marks / 3 Marks',
      questionTypes: 'Mirror formula derivation and numerical on magnification',
      hotTopic: 'Concave mirror real vs virtual magnification numericals'
    }
  },
  'phy-sub-9-2': {
    definitions: [
      {
        term: 'Total Internal Reflection (TIR)',
        definition: 'The complete reflection of a light ray back into a denser medium when it strikes the interface with a rarer medium at an angle of incidence strictly greater than the critical angle ($i > i_c$).'
      },
      {
        term: 'Critical Angle (i_c)',
        definition: 'The angle of incidence in the denser medium for which the angle of refraction in the rarer medium is exactly $90^\circ$: $\sin i_c = n_{\\text{rarer}} / n_{\\text{denser}} = 1 / n$.'
      }
    ],
    keyPoints: [
      '• <strong>Two Essential Conditions for TIR:</strong> (1) Light must travel from an optically denser medium to an optically rarer medium ($n_1 > n_2$), and (2) Angle of incidence must exceed critical angle ($i > i_c$).',
      '• <strong>Optical Fibres:</strong> Consist of a high-index core ($n_1$) surrounded by a lower-index cladding ($n_2 < n_1$). Light undergoes repeated TIR with negligible attenuation.'
    ],
    extraPoints: [
      '• <strong>Diamond Brilliance:</strong> Diamond has $n = 2.42$ and a very small critical angle $i_c = 24.4^\circ$, trapping entered light via multiple internal reflections.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'TIR Conditions',
      phrase: 'D-to-R and i > i_c (Denser to Rarer, Incidence above Critical)',
      explanation: 'Both conditions must be stated to earn full 1 mark in CBSE board exams.'
    },
    commonlyMadeErrors: [
      {
        error: 'Writing that core has lower refractive index than cladding in optical fibres.',
        tip: 'For TIR to occur at the core-cladding boundary, the CORE must have HIGHER refractive index than cladding ($n_{\\text{core}} > n_{\\text{cladding}}$).',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'Optical fibres use a core of higher refractive index than the outer cladding.',
      reason: 'Total internal reflection requires light to travel from an optically denser medium to an optically rarer medium.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Higher core index ensures TIR at the core-cladding interface.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2019',
      frequency: '99% Guaranteed',
      typicalMarks: '3 Marks',
      questionTypes: 'Ray tracing through right-angled isosceles prism ($45^\circ-90^\circ-45^\circ$) given critical angle',
      hotTopic: 'Red, Green, Blue ray incidence at 45° on prism face'
    }
  },
  'phy-sub-9-3': {
    definitions: [
      {
        term: "Lens Maker's Formula",
        definition: 'Relates the focal length $f$ of a thin lens to the refractive index $n_{21}$ of its material and radii of curvature $R_1, R_2$ of its two surfaces: $\\frac{1}{f} = (n_{21} - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$.'
      },
      {
        term: 'Power of a Lens (P)',
        definition: 'The tangent of the angle by which a lens converges or diverges a beam of light parallel to the principal axis falling at unit distance from the optical centre: $P = 1 / f(\\text{in m})$. SI unit: Dioptre ($\text{D} = \text{m}^{-1}$).'
      }
    ],
    keyPoints: [
      '• <strong>Spherical Refracting Surface Formula:</strong> $\\frac{n_2}{v} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R}$ (valid for both convex and concave surfaces with proper signs).',
      '• <strong>Effect of Immersing Lens in Liquid ($n_L$):</strong> $\\frac{f_L}{f_a} = \\frac{(n_g - 1)}{(n_g/n_L - 1)}$. If $n_L < n_g$, focal length increases; if $n_L = n_g$, lens becomes invisible ($f = \infty, P = 0$); if $n_L > n_g$, nature reverses (convex acts as diverging!).',
      '• <strong>Thin Lenses in Contact:</strong> $1/f = 1/f_1 + 1/f_2$ and $P = P_1 + P_2$.'
    ],
    extraPoints: [
      '• Cutting a symmetric equiconvex lens ($f$) perpendicular to principal axis into two plano-convex halves doubles the focal length of each half ($f\' = 2f, P\' = P/2$). Cutting along the principal axis keeps focal length unchanged ($f\' = f$), but brightness halves.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Biconvex Radii Signs',
      phrase: 'R₁ is Positive (+), R₂ is Negative (−) ⟹ 1/f = (n − 1)(1/R₁ + 1/|R₂|)',
      explanation: 'For a double convex lens, the first surface bulges left (centre on right, R₁ > 0) and second surface bulges right (centre on left, R₂ < 0).'
    },
    commonlyMadeErrors: [
      {
        error: 'Forgetting to take R₂ as negative for a biconvex lens in Lens Maker Formula numericals.',
        tip: 'For an equiconvex lens of radius R, R₁ = +R and R₂ = −R, so 1/f = (n − 1)(2/R).',
        penalty: 'Loss of 2 marks in numericals.'
      }
    ],
    assertionReason: {
      assertion: 'A biconvex lens of glass (n = 1.5) behaves as a diverging lens when immersed in carbon disulphide (n = 1.65).',
      reason: 'When refractive index of surrounding medium exceeds that of the lens material, (n_g/n_m − 1) becomes negative, reversing the sign of focal length.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Relative refractive index < 1 flips focal length sign.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2021, 2019, 2017',
      frequency: '99% Guaranteed 5M Derivation',
      typicalMarks: '5 Marks',
      questionTypes: "Derive refraction at convex spherical surface and hence derive Lens Maker's Formula",
      hotTopic: "Lens Maker's Formula + immersion in liquid numerical"
    }
  },
  'phy-sub-9-4': {
    definitions: [
      {
        term: 'Angle of Deviation (δ)',
        definition: 'The angle between the direction of the incident ray (produced forward) and the emergent ray (produced backward) in a prism: $\\delta = i + e - A$.'
      },
      {
        term: 'Angle of Minimum Deviation (δ_m)',
        definition: 'The minimum value of deviation suffered by a ray passing symmetrically through a prism such that $i = e$ and $r_1 = r_2 = A/2$.'
      }
    ],
    keyPoints: [
      '• <strong>Prism Formula:</strong> $n = \\frac{\\sin[(A + \\delta_m)/2]}{\\sin(A/2)}$. For a thin prism ($A \\le 10^\circ$), $\\delta_m = (n - 1)A$.',
      '• <strong>Symmetry at Minimum Deviation:</strong> At $\\delta = \\delta_m$, the refracted ray inside the prism travels strictly parallel to the base of an equilateral/isosceles prism.'
    ],
    extraPoints: [
      '• The $i$–$\\delta$ curve is asymmetric U-shaped: for every $\\delta > \\delta_m$, there are two angles of incidence ($i$ and $e$ by principle of reversibility), but at $\\delta = \\delta_m$, there is only ONE unique angle of incidence $i = e$.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Minimum Deviation Trio',
      phrase: 'At δ_m: i = e, r₁ = r₂ = A/2, and Refracted Ray ∥ Prism Base',
      explanation: 'Write all three symmetry conditions when deriving the prism formula.'
    },
    commonlyMadeErrors: [
      {
        error: 'Drawing a V-shaped sharp point or symmetric parabola for the i vs δ graph.',
        tip: 'Draw a smooth U-shaped curve touching minimum δ_m at a single point where i = e.',
        penalty: '0.5 to 1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'Violet light suffers greater deviation than red light when passing through a glass prism.',
      reason: 'Refractive index of glass is highest for violet light (shortest wavelength) by Cauchy’s relation.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Since δ = (n − 1)A and n_V > n_R, deviation δ_V > δ_R.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2020, 2018',
      frequency: 'High Frequency',
      typicalMarks: '3 Marks / 5 Marks',
      questionTypes: 'Derive prism formula + plot δ vs i graph',
      hotTopic: 'Equilateral prism minimum deviation numerical'
    }
  },
  'phy-sub-9-5': {
    definitions: [
      {
        term: 'Magnifying Power (Angular Magnification) of Microscope',
        definition: 'The ratio of the angle subtended at the eye by the final image ($\beta$) to the angle subtended by the object placed at the least distance of distinct vision $D = 25\\text{ cm}$ ($\alpha$): $m = \\beta / \\alpha$.'
      },
      {
        term: 'Astronomical Telescope Magnifying Power',
        definition: 'The ratio of angle subtended at the eye by the final image ($\beta$) to the angle subtended by the distant object at the objective ($\alpha$): $m = f_o / f_e$ (in normal adjustment).'
      }
    ],
    keyPoints: [
      '• <strong>Compound Microscope:</strong> Objective has short $f_o$ and small aperture; Eyepiece has moderate $f_e$ ($f_e > f_o$) and larger aperture. $m = \\frac{v_o}{|u_o|}\\left(1 + \\frac{D}{f_e}\\right) \\approx \\frac{L}{f_o}\\left(1 + \\frac{D}{f_e}\\right)$ at $D$, and $m = \\frac{L}{f_o}\\frac{D}{f_e}$ at $\\infty$.',
      '• <strong>Astronomical Telescope:</strong> Objective has very large focal length $f_o$ and large aperture (for high light-gathering and resolving power); Eyepiece has small $f_e$. Normal adjustment ($\\infty$): $m = f_o/f_e$, Tube length $L = f_o + f_e$. At $D$: $m = \\frac{f_o}{f_e}\\left(1 + \\frac{f_e}{D}\\right)$.',
      '• <strong>Cassegrain Reflecting Telescope Advantages:</strong> (1) Zero chromatic aberration (mirrors do not disperse light), (2) Spherical aberration eliminated using parabolic mirror, (3) Lighter and easier mechanical support at the back, (4) Brighter image.'
    ],
    extraPoints: [
      '• To maximize magnifying power of a compound microscope, BOTH $f_o$ and $f_e$ must be small. For a telescope, $f_o$ must be large and $f_e$ must be small.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Microscope vs Telescope Objective',
      phrase: 'Microscope: Both f₀ and f_e Small (f₀ < f_e) | Telescope: f₀ Huge, f_e Tiny (f₀ ≫ f_e)',
      explanation: 'Directly answers the CBSE lens-selection table questions!'
    },
    commonlyMadeErrors: [
      {
        error: 'Omitting arrows on light rays in microscope/telescope ray diagrams or drawing the intermediate image inside f_e for normal adjustment.',
        tip: 'Always put at least two arrowheads on every ray and place the intermediate real image A\'B\' exactly at F_e for normal adjustment.',
        penalty: '1 mark deducted for ray diagram without arrows.'
      }
    ],
    assertionReason: {
      assertion: 'The objective of an astronomical telescope has a large focal length and a large aperture.',
      reason: 'Large focal length increases magnifying power (m = f_o/f_e) and large aperture increases light-gathering and resolving power.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Both focal length and diameter of the objective serve distinct optical roles.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020, 2019',
      frequency: '99% Guaranteed 5M Question',
      typicalMarks: '5 Marks',
      questionTypes: 'Ray diagram of compound microscope / astronomical telescope + magnifying power + lens selection table',
      hotTopic: 'Cassegrain reflecting telescope + Compound microscope at D'
    }
  },

  // ==========================================================================
  // CHAPTER 10: WAVE OPTICS
  // ==========================================================================
  'phy-sub-10-1': {
    definitions: [
      {
        term: 'Wavefront',
        definition: 'The continuous locus of all particles of a medium vibrating in the same phase at a given instant. Rays are always perpendicular (normal) to the wavefront.'
      },
      {
        term: "Huygens' Principle",
        definition: 'Every point on a primary wavefront acts as a fresh source of spherical secondary wavelets that travel outward with the speed of light; the forward common tangent (envelope) to these wavelets at any later instant gives the new secondary wavefront.'
      }
    ],
    keyPoints: [
      '• <strong>Shapes of Wavefronts:</strong> (1) Point source ⟶ Concentric Spherical wavefronts; (2) Linear slit source ⟶ Coaxial Cylindrical wavefronts; (3) Distant source ($\\infty$) ⟶ Plane wavefronts.',
      '• <strong>Frequency Invariance in Refraction:</strong> When light enters a denser medium ($n > 1$), speed $v = c/n$ decreases and wavelength $\\lambda\' = \\lambda/n$ decreases, but frequency $\\nu$ remains strictly constant (depends only on the source).'
    ],
    extraPoints: [
      '• When a plane wavefront passes through a convex lens, it emerges as a converging spherical wavefront centred at the principal focus F; when it passes through a prism, it emerges as a tilted plane wavefront.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Refraction Wavefront Compression',
      phrase: 'Denser Medium: Speed ↓, Wavelength ↓, Wavefront Spacing ↓, Frequency = Constant!',
      explanation: 'Wavefronts crowd closer together in glass/water because v = c/n.'
    },
    commonlyMadeErrors: [
      {
        error: 'Drawing refracted wavefront in a denser medium with a larger angle r than i.',
        tip: 'In a denser medium, v₂ < v₁, so distance BC = v₂τ is shorter than AD = v₁τ, making r < i.',
        penalty: '1.5 marks lost on Huygens refraction proof.'
      }
    ],
    assertionReason: {
      assertion: 'When monochromatic light travels from air into water, its wavelength decreases but its frequency remains unchanged.',
      reason: 'Frequency is a fundamental characteristic of the source of light, whereas wave speed depends on the optical medium (v = νλ).',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Since v drops by factor n and ν is constant, λ = v/ν also drops by factor n.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020',
      frequency: '99% Guaranteed 3M Proof',
      typicalMarks: '3 Marks',
      questionTypes: 'Verify Snell’s law of refraction or law of reflection using Huygens’ principle',
      hotTopic: 'Huygens refraction wavefront derivation + sketching wavefronts through prism/lens'
    }
  },
  'phy-sub-10-2': {
    definitions: [
      {
        term: 'Coherent Sources',
        definition: 'Two sources of light that emit waves of identical frequency/wavelength with a zero or strictly constant phase difference with time.'
      },
      {
        term: 'Fringe Width (β)',
        definition: 'The separation between two successive bright fringes or two successive dark fringes in Young’s double-slit interference pattern: $\\beta = \\lambda D / d$.'
      }
    ],
    keyPoints: [
      '• <strong>Superposition Intensity Formula:</strong> $I(\\phi) = I_1 + I_2 + 2\\sqrt{I_1 I_2}\\cos\\phi$. For identical slits ($I_1 = I_2 = I_0$): $I = 4I_0\\cos^2(\\phi/2)$.',
      '• <strong>Constructive Interference (Bright):</strong> Path difference $\\Delta x = n\\lambda$, Phase difference $\\phi = 2n\\pi$, $I_{\\max} = (\\sqrt{I_1}+\\sqrt{I_2})^2 = 4I_0$.',
      '• <strong>Destructive Interference (Dark):</strong> Path difference $\\Delta x = (2n-1)\\lambda/2$, Phase difference $\\phi = (2n-1)\\pi$, $I_{\\min} = (\\sqrt{I_1}-\\sqrt{I_2})^2 = 0$.',
      '• <strong>Effect of Immersing YDSE in Water ($n$):</strong> Wavelength becomes $\\lambda\' = \\lambda/n$, so fringe width shrinks to $\\beta\' = \\beta / n$.'
    ],
    extraPoints: [
      '• Two independent light bulbs (even monochromatic sodium lamps) can NEVER be coherent because atomic emissions occur randomly every $10^{-8}\\text{ s}$, causing phase difference $\\phi(t)$ to fluctuate rapidly and producing uniform illumination $I = 2I_0$.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Intensity Ratio to Amplitude Ratio',
      phrase: 'I_max / I_min = (a₁ + a₂)² / (a₁ − a₂)²  where  a₁ / a₂ = √(I₁ / I₂) = √(w₁ / w₂)',
      explanation: 'Slit width w is directly proportional to intensity I, which is proportional to amplitude squared!'
    },
    commonlyMadeErrors: [
      {
        error: 'Writing that energy is destroyed at dark fringes during destructive interference.',
        tip: 'Interference strictly obeys conservation of energy: energy missing at dark fringes ($I=0$) is redistributed to bright fringes ($I=4I_0$), keeping average intensity $I_{\\text{avg}} = 2I_0$.',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'Two independent monochromatic sources of light cannot produce a sustained interference pattern.',
      reason: 'The phase difference between light waves emitted by two independent sources changes randomly and rapidly in about 10⁻⁸ s.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Coherence requires wave division from a single parent wavefront.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020, 2018',
      frequency: '99% Guaranteed',
      typicalMarks: '3 Marks / 5 Marks',
      questionTypes: 'Conditions for sustained interference, I = 4I₀ cos²(φ/2), YDSE numericals',
      hotTopic: 'YDSE fringe shift when immersed in liquid or two-wavelength coincidence'
    }
  },
  'phy-sub-10-3': {
    definitions: [
      {
        term: 'Diffraction of Light',
        definition: 'The phenomenon of bending of light waves around the sharp corners of an obstacle or aperture of size comparable to the wavelength of light, encroaching into the geometrical shadow.'
      },
      {
        term: 'Width of Central Maximum in Single-Slit Diffraction',
        definition: 'The linear distance between the first-order minima on either side of the central axis: $W_c = 2\\lambda D / a$, with angular width $2\\theta_1 = 2\\lambda / a$.'
      }
    ],
    keyPoints: [
      '• <strong>Single-Slit Minima Condition:</strong> $a\\sin\\theta_n = n\\lambda$ ($n = 1, 2, 3, \\dots$). Note: In YDSE $d\\sin\\theta = n\\lambda$ gives MAXIMA, whereas in single-slit diffraction $a\\sin\\theta = n\\lambda$ gives MINIMA!',
      '• <strong>Secondary Maxima Condition:</strong> $a\\sin\\theta_n = (2n + 1)\\lambda / 2$ ($n = 1, 2, 3, \\dots$). Intensity drops rapidly ($I_0, I_0/22, I_0/61$).',
      '• <strong>Interference vs Diffraction:</strong> Interference fringes have equal width ($\\beta = \\lambda D/d$) and uniform bright intensity ($4I_0$); Diffraction central maximum is twice as wide ($2\\lambda D/a$) and secondary maxima rapidly fade in intensity.'
    ],
    extraPoints: [
      '• If slit width $a$ is narrowed, the central diffraction maximum spreads out ($W_c \\propto 1/a$) and becomes dimmer.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'YDSE vs Single-Slit Formula Flip',
      phrase: 'YDSE: d sin θ = nλ is BRIGHT | Single-Slit: a sin θ = nλ is DARK!',
      explanation: 'Never swap the conditions for minima and maxima between interference and diffraction.'
    },
    commonlyMadeErrors: [
      {
        error: 'Drawing all peaks of equal height in the single-slit diffraction intensity graph.',
        tip: 'The central peak at θ = 0 must be tall and twice as wide (±λ/a), while secondary peaks must shrink dramatically.',
        penalty: '1 mark deducted on intensity graph.'
      }
    ],
    assertionReason: {
      assertion: 'In single-slit diffraction, the width of the central bright maximum increases if the slit width is decreased.',
      reason: 'Angular width of the central maximum is inversely proportional to slit width (2θ = 2λ/a).',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Narrower aperture causes greater diffraction spreading.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2021, 2019',
      frequency: 'High Frequency',
      typicalMarks: '3 Marks',
      questionTypes: 'Single-slit intensity distribution curve + central maximum width + Interference vs Diffraction table',
      hotTopic: 'Intensity graph of interference vs diffraction'
    }
  },

  // ==========================================================================
  // CHAPTER 11: DUAL NATURE OF RADIATION AND MATTER
  // ==========================================================================
  'phy-sub-11-1': {
    definitions: [
      {
        term: 'Work Function (φ₀)',
        definition: 'The minimum energy required by an electron to just escape from a metal surface, measured in electron-volts ($1\\text{ eV} = 1.6 \\times 10^{-19}\\text{ J}$). Caesium (Cs) has the lowest work function ($2.14\\text{ eV}$).'
      },
      {
        term: 'Threshold Frequency (ν₀) & Stopping Potential (V₀)',
        definition: 'Threshold frequency $\\nu_0 = \\phi_0 / h$ is the minimum frequency below which no photoelectric emission occurs regardless of intensity. Stopping potential $V_0$ is the minimum negative anode potential that stops the fastest photoelectrons ($eV_0 = K_{\\max}$).'
      }
    ],
    keyPoints: [
      '• <strong>Effect of Intensity (at fixed $\\nu > \\nu_0$):</strong> Saturation photocurrent increases linearly with intensity ($I_{\\text{sat}} \\propto \\text{Intensity}$ because more photons strike per second), while Stopping Potential $V_0$ and $K_{\\max}$ remain UNCHANGED.',
      '• <strong>Effect of Frequency (at fixed Intensity):</strong> Stopping potential $V_0$ and $K_{\\max}$ increase linearly with frequency ($\\nu > \\nu_0$), while saturation photocurrent remains UNCHANGED.'
    ],
    extraPoints: [
      '• Photoelectric emission is an instantaneous one-photon–one-electron elastic collision process with time lag $< 10^{-9}\\text{ s}$.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Photoelectric Twin Couplings',
      phrase: 'Intensity controls Current (Number of photons) | Frequency controls Stopping Potential V₀ (Energy per photon)',
      explanation: 'Master key for all photoelectric graphs and MCQs!'
    },
    commonlyMadeErrors: [
      {
        error: 'Thinking that doubling light intensity doubles the maximum kinetic energy or stopping potential.',
        tip: 'Intensity only changes the number of photons per second (saturation current); $K_{\\max}$ and $V_0$ depend ONLY on frequency $\\nu$ and work function $\\phi_0$.',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'For a given photosensitive surface and incident frequency above threshold, stopping potential is independent of the intensity of incident light.',
      reason: 'Maximum kinetic energy of photoelectrons depends only on photon frequency and work function ($eV_0 = h\\nu - \\phi_0$).',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Intensity increases photon count, not individual photon energy hν.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020',
      frequency: '99% Guaranteed',
      typicalMarks: '3 Marks',
      questionTypes: 'Plot Photocurrent vs Anode Potential and Stopping Potential vs Frequency graphs',
      hotTopic: 'Four photoelectric experimental graphs'
    }
  },
  'phy-sub-11-2': {
    definitions: [
      {
        term: "Einstein's Photoelectric Equation",
        definition: 'Conservation of energy for absorption of a single photon of energy $h\\nu$: $K_{\\max} = eV_0 = h\\nu - \\phi_0 = h(\\nu - \\nu_0) = hc\\left(\\frac{1}{\\lambda} - \\frac{1}{\\lambda_0}\\right)$.'
      }
    ],
    keyPoints: [
      '• <strong>Linear Graph of $V_0$ vs $\\nu$:</strong> $V_0 = \\left(\\frac{h}{e}\\right)\\nu - \\frac{\\phi_0}{e}$. It is a straight line with universal slope $= h/e$ (parallel for all metals!), x-intercept $= \\nu_0$, and y-intercept $= -\\phi_0/e$.',
      '• <strong>Three Failures of Classical Wave Theory:</strong> Wave theory wrongly predicts that (1) $K_{\\max}$ should increase with intensity, (2) photoelectric emission should occur at any frequency if intensity is high enough (no threshold $\\nu_0$), and (3) there should be a measurable time delay of hours for electron ejection.'
    ],
    extraPoints: [
      '• A photon has zero rest mass ($m_0 = 0$), travels at speed $c$ in vacuum, carries energy $E = h\\nu = hc/\\lambda$ and linear momentum $p = E/c = h/\\lambda$, and is electrically neutral (not deflected by E or B fields).'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Slope of V₀ vs ν Graph',
      phrase: 'Slope = h / e (Parallel Lines for All Metals!) | X-intercept = ν₀ | Y-intercept = −φ₀ / e',
      explanation: 'Frequently tested 3-mark graph interpretation question.'
    },
    commonlyMadeErrors: [
      {
        error: 'Drawing intersecting lines for two different metals on the V₀ vs ν graph.',
        tip: 'Since slope = h/e is a universal constant, V₀ vs ν lines for two different metals (e.g., Na and Cu) MUST be strictly parallel!',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'Classical wave theory of light fails to explain the existence of threshold frequency in photoelectric emission.',
      reason: 'According to wave theory, energy is distributed continuously over the wavefront, so any frequency should eject electrons if given sufficient time or intensity.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Quantum photon model explains threshold frequency via one-to-one photon absorption.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2021, 2019',
      frequency: '99% Guaranteed',
      typicalMarks: '3 Marks',
      questionTypes: 'Einstein equation + why wave theory failed + slope/intercept of V₀ vs ν graph',
      hotTopic: 'Finding Planck constant h and work function from V₀ vs ν graph'
    }
  },
  'phy-sub-11-3': {
    definitions: [
      {
        term: 'de Broglie Matter-Wave Hypothesis',
        definition: 'Every moving material particle of momentum $p = mv$ has a wave associated with it of wavelength $\\lambda = \\frac{h}{p} = \\frac{h}{mv} = \\frac{h}{\\sqrt{2mK}} = \\frac{h}{\\sqrt{2mqV}}$.'
      }
    ],
    keyPoints: [
      '• <strong>Electron Shortcut Formula:</strong> For an electron accelerated through potential difference $V$ volts, $\\lambda = \\frac{1.227}{\\sqrt{V}}\\text{ nm} = \\frac{12.27}{\\sqrt{V}}\\text{ \\AA}$.',
      '• <strong>Ratio Comparisons:</strong>\n  – Same Velocity $v$: $\\lambda \\propto 1/m$\n  – Same Kinetic Energy $K$: $\\lambda \\propto 1/\\sqrt{m}$ ($\\lambda_p : \\lambda_d : \\lambda_\\alpha = 1 : \\frac{1}{\\sqrt{2}} : \\frac{1}{2}$)\n  – Same Accelerating Potential $V$: $\\lambda \\propto 1/\\sqrt{mq}$ ($\\lambda_p / \\lambda_\\alpha = \\sqrt{\\frac{4m_p \\cdot 2e}{m_p \\cdot e}} = 2\\sqrt{2} : 1$).'
    ],
    extraPoints: [
      '• Matter waves are NOT electromagnetic waves; they are probability waves associated with any moving particle (charged or uncharged) and travel faster than light in phase velocity ($v_p = c^2/v$), though group velocity equals particle velocity ($v_g = v$).'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Proton vs Alpha de Broglie Ratios',
      phrase: 'Same K ⟹ λ_p / λ_α = 2 : 1 | Same V ⟹ λ_p / λ_α = 2√2 : 1 | Same p ⟹ λ_p / λ_α = 1 : 1',
      explanation: 'Since m_α = 4 m_p and q_α = 2 q_p, memorising these three ratios saves 3 minutes in exams!'
    },
    commonlyMadeErrors: [
      {
        error: 'Using λ = h / √(2mV) instead of λ = h / √(2mqV) when comparing proton and alpha particle at same voltage V.',
        tip: 'Kinetic energy gained across potential V is K = qV, so charge q (2e for alpha, 1e for proton) MUST be included under the square root!',
        penalty: 'Loss of 2 marks.'
      }
    ],
    assertionReason: {
      assertion: 'A proton and an alpha particle accelerated through the same potential difference have de Broglie wavelengths in the ratio 2√2 : 1.',
      reason: 'de Broglie wavelength is given by λ = h / √(2mqV), and an alpha particle has 4 times the mass and 2 times the charge of a proton.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: '√(m_α q_α / m_p q_p) = √(4 × 2) = 2√2.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020',
      frequency: 'High Frequency',
      typicalMarks: '2 Marks / 3 Marks',
      questionTypes: 'Ratio of de Broglie wavelengths of proton, deuteron, alpha particle; graph of λ vs 1/√V',
      hotTopic: 'Proton vs Alpha particle λ vs 1/√V slope comparison'
    }
  },

  // ==========================================================================
  // CHAPTER 12: ATOMS
  // ==========================================================================
  'phy-sub-12-1': {
    definitions: [
      {
        term: 'Distance of Closest Approach (r₀)',
        definition: 'The minimum distance from the target nucleus at which a head-on incident $\\alpha$-particle ($b = 0$) momentarily comes to rest before retracing its path ($180^\circ$), where all its kinetic energy converts to electrostatic potential energy: $r_0 = \\frac{1}{4\\pi\\varepsilon_0}\\frac{2Ze^2}{K}$.'
      },
      {
        term: 'Impact Parameter (b)',
        definition: 'The perpendicular distance of the initial velocity vector of the $\\alpha$-particle from the centre of the target nucleus: $b = \\frac{Ze^2 \\cot(\\theta/2)}{4\\pi\\varepsilon_0 K}$. For head-on collision, $b = 0 \\implies \\theta = 180^\circ$.'
      }
    ],
    keyPoints: [
      '• <strong>Geiger-Marsden Alpha Scattering Observations:</strong> (1) Most $\\alpha$-particles pass straight through undeflected (atom is mostly empty space); (2) Only $\\sim 0.14\\%$ scatter by $> 1^\circ$; (3) About $1\\text{ in }8000$ deflect by $> 90^\circ$ (entire positive charge and mass concentrated in tiny nucleus of radius $\\sim 10^{-15}\\text{ m}$).',
      '• <strong>Drawbacks of Rutherford Model:</strong> Fails to explain (1) Stability of the atom (revolving accelerating electron should continuously radiate EM energy and spiral into the nucleus in $10^{-8}\\text{ s}$), and (2) Discrete line spectra of atoms.'
    ],
    extraPoints: [
      '• Trajectory of an $\\alpha$-particle scattered in the Coulomb field of a heavy nucleus is a hyperbola.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Head-On Collision Values',
      phrase: 'Head-On: Impact Parameter b = 0 ⟹ Scattering Angle θ = 180° ⟹ Closest Approach r₀ = 2kZe² / K',
      explanation: 'Remember the factor 2 in 2Ze² because alpha particle charge is q_α = +2e!'
    },
    commonlyMadeErrors: [
      {
        error: 'Using q₁q₂ = Ze² instead of (2e)(Ze) = 2Ze² when calculating distance of closest approach of an alpha particle.',
        tip: 'An alpha particle is a He²⁺ nucleus with charge +2e, so potential energy is k(2e)(Ze)/r₀.',
        penalty: '1 mark deduction in numericals.'
      }
    ],
    assertionReason: {
      assertion: 'For an alpha particle suffering a head-on collision with a gold nucleus, the impact parameter is zero.',
      reason: 'In a head-on collision, the initial velocity vector of the alpha particle is directed straight towards the centre of the nucleus (θ = 180°).',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Since b ∝ cot(θ/2) and cot(90°) = 0, b = 0.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2020',
      frequency: 'High Frequency',
      typicalMarks: '2 Marks / 3 Marks',
      questionTypes: 'Distance of closest approach numerical, impact parameter definition, drawbacks of Rutherford model',
      hotTopic: 'How r₀ changes when K or velocity of α-particle is doubled'
    }
  },
  'phy-sub-12-2': {
    definitions: [
      {
        term: "Bohr's Quantization Postulate",
        definition: 'Electrons revolve only in those stable non-radiating stationary orbits for which the orbital angular momentum $L$ is an integral multiple of $h/2\\pi$: $L = mvr_n = \\frac{nh}{2\\pi}$ ($n = 1, 2, 3, \\dots$).'
      },
      {
        term: "Bohr's Frequency Condition",
        definition: 'An atom emits or absorbs a photon only when an electron jumps from an initial orbit $E_i$ to a final orbit $E_f$: $h\\nu = E_i - E_f$.'
      }
    ],
    keyPoints: [
      '• <strong>Bohr Radius ($r_n$):</strong> $r_n = \\frac{\\varepsilon_0 h^2 n^2}{\\pi m e^2 Z} = 0.529 \\frac{n^2}{Z}\\text{ \\AA}$ ($r_n \\propto n^2$). Ratio of radii for $n=1,2,3$ is $1 : 4 : 9$.',
      '• <strong>Orbital Speed ($v_n$):</strong> $v_n = \\frac{e^2 Z}{2\\varepsilon_0 h n} = \\frac{c}{137}\\frac{Z}{n} \\approx \\frac{2.18 \\times 10^6}{n}\\text{ m/s}$ ($v_n \\propto 1/n$).',
      '• <strong>Energy Relations:</strong> Kinetic Energy $K_n = +\\frac{e^2}{8\\pi\\varepsilon_0 r_n}$, Potential Energy $U_n = -\\frac{e^2}{4\\pi\\varepsilon_0 r_n} = -2K_n$, Total Energy $E_n = K_n + U_n = -K_n = \\frac{U_n}{2} = -\\frac{13.6 Z^2}{n^2}\\text{ eV}$.',
      '• <strong>de Broglie Proof of Bohr’s 2nd Postulate:</strong> A stationary circular orbit of radius $r_n$ must accommodate an integral number of standing de Broglie wavelengths: $2\\pi r_n = n\\lambda = n(h/mv) \\implies mvr_n = nh/2\\pi$.'
    ],
    extraPoints: [
      '• Hydrogen Energy Levels: $E_1 = -13.6\\text{ eV}$ (Ground state), $E_2 = -3.40\\text{ eV}$ (1st excited state), $E_3 = -1.51\\text{ eV}$ (2nd excited state), $E_4 = -0.85\\text{ eV}$ (3rd excited state). Ionisation energy from ground state $= +13.6\\text{ eV}$.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Golden Energy Triad in Bohr Atom',
      phrase: 'E = −K = U / 2   (As n ↑: Radius r ↑, Potential U ↑, Total E ↑, Kinetic K ↓, Speed v ↓)',
      explanation: 'Because U and E are negative, becoming less negative as n increases means U and E INCREASE while K decreases!'
    },
    commonlyMadeErrors: [
      {
        error: 'Taking n = 2 for the "second excited state" of hydrogen.',
        tip: 'Ground state is n = 1; First excited state is n = 2; Second excited state is n = 3!',
        penalty: 'Loss of 2 marks in spectral transition numericals.'
      }
    ],
    assertionReason: {
      assertion: 'Total energy of a revolving electron in any stationary orbit of a hydrogen atom is negative.',
      reason: 'Negative total energy signifies that the electron is bound to the nucleus by attractive electrostatic forces and work must be done to remove it to infinity.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Zero energy corresponds to an ionised electron at rest at r = ∞.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020, 2019',
      frequency: '99% Guaranteed 3M/5M Derivation',
      typicalMarks: '3 Marks / 5 Marks',
      questionTypes: 'State Bohr postulates, derive r_n and E_n, prove 2πr = nλ, spectral series transitions',
      hotTopic: 'Derive E_n = −13.6/n² eV + de Broglie standing wave proof'
    }
  },
  'phy-sub-12-3': {
    definitions: [
      {
        term: 'Rydberg Formula for Hydrogen Spectrum',
        definition: 'Gives the wavenumber $\\bar{\\nu} = 1/\\lambda$ of emitted/absorbed spectral lines: $\\frac{1}{\\lambda} = R\\left(\\frac{1}{n_f^2} - \\frac{1}{n_i^2}\\right)$, where $R = 1.097 \\times 10^7\\text{ m}^{-1}$.'
      }
    ],
    keyPoints: [
      '• <strong>Five Hydrogen Spectral Series:</strong>\n  1. <em>Lyman ($n_f = 1$, $n_i = 2,3,\\dots$):</em> Ultraviolet (UV) region\n  2. <em>Balmer ($n_f = 2$, $n_i = 3,4,\\dots$):</em> Visible region ($H_\\alpha = 656.3\\text{ nm}$ for $3\\to 2$)\n  3. <em>Paschen ($n_f = 3$, $n_i = 4,5,\\dots$):</em> Near Infrared (IR)\n  4. <em>Brackett ($n_f = 4$, $n_i = 5,6,\\dots$):</em> Middle IR\n  5. <em>Pfund ($n_f = 5$, $n_i = 6,7,\\dots$):</em> Far IR.',
      '• <strong>Shortest vs Longest Wavelength in Any Series ($n_f$):</strong>\n  – Longest $\\lambda_{\\max}$ (minimum energy): transition from immediate next level $n_i = n_f + 1$.\n  – Shortest $\\lambda_{\\min}$ (Series Limit, maximum energy): transition from $n_i = \\infty$.',
      '• <strong>Maximum Number of Emission Lines from state $n$:</strong> $N = \\frac{n(n - 1)}{2}$.'
    ],
    extraPoints: [
      '• Excitation potential to excite H-atom from $n=1$ to $n=2$ is $+10.2\\text{ V}$; to $n=3$ is $+12.09\\text{ V}$. Ionisation potential from ground state is $+13.6\\text{ V}$.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Hydrogen Spectral Series Order',
      phrase: 'Lyman (UV, 1) — Balmer (Visible, 2) — Paschen (IR, 3) — Brackett (IR, 4) — Pfund (IR, 5)',
      explanation: 'Shortest wavelength in any series corresponds to n_i = ∞; longest corresponds to n_i = n_f + 1.'
    },
    commonlyMadeErrors: [
      {
        error: 'Using n_i = ∞ for longest wavelength instead of shortest wavelength.',
        tip: 'Since E = hc/λ, LARGER energy gap (n_i = ∞ to n_f) gives SHORTEST wavelength (λ_min); SMALLEST energy gap (n_i = n_f + 1 to n_f) gives LONGEST wavelength (λ_max)!',
        penalty: 'Loss of 2 marks.'
      }
    ],
    assertionReason: {
      assertion: 'The Balmer series of the hydrogen spectrum lies in the visible region.',
      reason: 'Transitions ending at n_f = 2 emit photons of energies between 1.89 eV and 3.40 eV (wavelengths 656.3 nm to 364.6 nm).',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: '400 nm to 700 nm corresponds to the human visible spectrum.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2021, 2019',
      frequency: 'High Frequency',
      typicalMarks: '3 Marks',
      questionTypes: 'Ratio of shortest to longest wavelengths of Lyman/Balmer series',
      hotTopic: 'Shortest/longest wavelength in Lyman and Balmer series'
    }
  },

  // ==========================================================================
  // CHAPTER 13: NUCLEI
  // ==========================================================================
  'phy-sub-13-1': {
    definitions: [
      {
        term: 'Isotopes, Isobars & Isotones',
        definition: 'Isotopes have same $Z$ but different $A$ ($^1_1\\text{H}, ^2_1\\text{H}, ^3_1\\text{H}$); Isobars have same mass number $A$ ($^3_1\\text{H}, ^3_2\\text{He}$); Isotones have same neutron number $N = A - Z$ ($^{198}_{80}\\text{Hg}, ^{197}_{79}\\text{Au}$).'
      },
      {
        term: 'Nuclear Radius & Nuclear Density',
        definition: 'Nuclear radius scales with mass number $A$ as $R = R_0 A^{1/3}$ ($R_0 = 1.2 \\times 10^{-15}\\text{ m} = 1.2\\text{ fm}$). Consequently, nuclear volume $V \\propto A$ and nuclear density $\\rho = \\frac{3m}{4\\pi R_0^3} \\approx 2.3 \\times 10^{17}\\text{ kg m}^{-3}$ is strictly INDEPENDENT of $A$.'
      }
    ],
    keyPoints: [
      '• <strong>Proof of Constant Nuclear Density:</strong> $\\rho = \\frac{\\text{Mass}}{\\text{Volume}} = \\frac{A \\cdot m_N}{\\frac{4}{3}\\pi (R_0 A^{1/3})^3} = \\frac{A \\cdot m_N}{\\frac{4}{3}\\pi R_0^3 A} = \\frac{3 m_N}{4\\pi R_0^3} = \\text{constant}$. Ratio of nuclear densities of ANY two nuclei (e.g., $^{16}\\text{O}$ and $^{208}\\text{Pb}$) is always $1 : 1$!'
    ],
    extraPoints: [
      '• $1\\text{ atomic mass unit (u)} = \\frac{1}{12}\\text{ mass of } ^{12}\\text{C atom} = 1.6605 \\times 10^{-27}\\text{ kg}$, which corresponds to an Einstein energy equivalent of $931.5\\text{ MeV}$.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Nuclear Density Trap',
      phrase: 'Radius Ratio R₁/R₂ = (A₁/A₂)^(1/3) | Volume Ratio = A₁/A₂ | Density Ratio ρ₁/ρ₂ = ALWAYS 1 : 1!',
      explanation: 'Favorite 1-mark and 2-mark board trap question.'
    },
    commonlyMadeErrors: [
      {
        error: 'Calculating nuclear density ratio as (A₁/A₂) instead of 1:1.',
        tip: 'Mass number A cancels out between mass (∝ A) and volume (∝ R³ ∝ A), so nuclear density is universal (1 : 1).',
        penalty: 'Loss of 1 mark.'
      }
    ],
    assertionReason: {
      assertion: 'The nuclear density of ²³⁵U is equal to the nuclear density of ¹²C.',
      reason: 'The radius of a nucleus is proportional to A^(1/3), making nuclear volume directly proportional to mass number A.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'ρ = Mass/Volume is independent of A.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020',
      frequency: '99% Guaranteed',
      typicalMarks: '2 Marks',
      questionTypes: 'Show that nuclear density is independent of mass number A; find radius ratio',
      hotTopic: 'Constancy of nuclear density proof'
    }
  },
  'phy-sub-13-2': {
    definitions: [
      {
        term: 'Mass Defect (Δm) & Binding Energy (E_b)',
        definition: 'Mass defect is the difference between total rest mass of constituent nucleons and actual rest mass of the nucleus: $\\Delta m = [Z m_p + (A - Z)m_n] - M$. Binding energy $E_b = \\Delta m \\cdot c^2 = \\Delta m(\\text{in u}) \\times 931.5\\text{ MeV}$.'
      },
      {
        term: 'Binding Energy per Nucleon (E_bn)',
        definition: 'The average energy required to extract one nucleon from a nucleus: $E_{bn} = E_b / A$, which is a direct measure of nuclear stability.'
      }
    ],
    keyPoints: [
      '• <strong>Features of B.E./Nucleon ($E_{bn}$) vs Mass Number ($A$) Curve:</strong>\n  1. $E_{bn}$ is practically constant ($\\approx 8.0\\text{ MeV}$) for middle-mass nuclei ($30 < A < 170$), proving saturation of nuclear force.\n  2. Maximum stability peak is at $^{56}_{26}\\text{Fe}$ ($E_{bn} = 8.75\\text{ MeV}$).\n  3. $E_{bn}$ is lower for both very light nuclei ($A < 30$) and heavy nuclei ($A > 170$).\n• <strong>Why Fission & Fusion Release Energy:</strong> When a heavy nucleus ($A \\approx 235$, lower $E_{bn} \\approx 7.6\\text{ MeV}$) splits into two middle-mass nuclei ($E_{bn} \\approx 8.5\\text{ MeV}$), or when very light nuclei ($A < 10$) fuse into a heavier nucleus with higher $E_{bn}$, the final system is more tightly bound and the difference in binding energy is released as exothermic energy!'
    ],
    extraPoints: [
      '• <strong>Properties of Strong Nuclear Force:</strong> (1) Strongest force in nature ($100\\times$ Coulomb force), (2) Short-range ($\sim 1-3\\text{ fm}$) showing saturation, (3) Charge-independent ($F_{pp} \\approx F_{nn} \\approx F_{pn}$), (4) Spin-dependent, (5) Becomes strongly REPULSIVE at inter-nucleon distances $< 0.8\\text{ fm}$ (preventing nuclear collapse).'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Nuclear Force 0.8 fm Flip',
      phrase: 'r > 0.8 fm: Strongly Attractive | r = 0.8 fm: Potential Minimum (0 Force) | r < 0.8 fm: Strongly Repulsive!',
      explanation: 'Explains why potential energy vs distance curve has a sharp minimum at r₀ = 0.8 fm.'
    },
    commonlyMadeErrors: [
      {
        error: 'Saying that binding energy per nucleon decreases during nuclear fission and fusion.',
        tip: 'In both fission and fusion, reactants move toward the middle plateau of the curve, so B.E. per nucleon of PRODUCTS is HIGHER than reactants, releasing energy!',
        penalty: 'Loss of 1.5 marks.'
      }
    ],
    assertionReason: {
      assertion: 'Energy is released in both nuclear fission of heavy nuclei and nuclear fusion of light nuclei.',
      reason: 'In both processes, the binding energy per nucleon of the product nuclei is greater than that of the reacting nuclei.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Higher E_bn means lower rest mass and greater stability, releasing Δm·c².'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2019',
      frequency: '99% Guaranteed 3M Question',
      typicalMarks: '3 Marks',
      questionTypes: 'Draw B.E./nucleon vs A curve and explain fission/fusion; plot nuclear P.E. vs r curve',
      hotTopic: 'Binding energy curve + nuclear force properties'
    }
  },

  // ==========================================================================
  // CHAPTER 14: SEMICONDUCTOR ELECTRONICS
  // ==========================================================================
  'phy-sub-14-1': {
    definitions: [
      {
        term: 'Forbidden Energy Gap / Band Gap (E_g)',
        definition: 'The minimum energy separation between the top of the valence band ($E_V$) and the bottom of the conduction band ($E_C$) containing no allowed electron energy states.'
      }
    ],
    keyPoints: [
      '• <strong>Band Classification of Solids:</strong>\n  1. <em>Metals (Conductors):</em> Overlapping valence and conduction bands ($E_g \\approx 0$). Low resistivity ($10^{-2}$ to $10^{-8}\\,\\Omega\\text{m}$).\n  2. <em>Semiconductors:</em> Small band gap ($E_g < 3\\text{ eV}$): Silicon ($E_g = 1.1\\text{ eV}$), Germanium ($E_g = 0.72\\text{ eV}$). At $0\\text{ K}$, they behave as perfect insulators!\n  3. <em>Insulators:</em> Large band gap ($E_g > 3\\text{ eV}$, e.g. Diamond $\\approx 5.4\\text{ eV}$). High resistivity ($10^{11}$ to $10^{19}\\,\\Omega\\text{m}$).'
    ],
    extraPoints: [
      '• Semiconductors have a NEGATIVE temperature coefficient of resistivity ($\\alpha < 0$): as $T$ rises, covalent bonds break, exponentially increasing carrier density $n$, which overwhelms the decrease in relaxation time $\\tau$, so resistivity $\\rho$ decreases.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Band Gap Numbers',
      phrase: 'Ge = 0.72 eV | Si = 1.1 eV | Insulator > 3 eV | At 0 K, Semiconductor = Insulator',
      explanation: 'Must-know numerical values for 1-mark and 2-mark board questions.'
    },
    commonlyMadeErrors: [
      {
        error: 'Swapping the band gap values of Silicon (1.1 eV) and Germanium (0.72 eV).',
        tip: 'Silicon has smaller atomic size (3rd period) and stronger covalent bonds than Germanium (4th period), so Si has the larger band gap (1.1 eV > 0.72 eV).',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'The electrical resistivity of an intrinsic semiconductor decreases rapidly with an increase in temperature.',
      reason: 'With rise in temperature, covalent bonds break and the number density of charge carriers (electrons and holes) increases exponentially.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Since ρ = m/(ne²τ), exponential rise in n causes ρ to drop.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2020',
      frequency: 'High Frequency',
      typicalMarks: '2 Marks',
      questionTypes: 'Energy band diagrams of conductors, insulators, and semiconductors',
      hotTopic: 'Why semiconductor acts as insulator at 0 K'
    }
  },
  'phy-sub-14-2': {
    definitions: [
      {
        term: 'Doping & Mass-Action Law',
        definition: 'Doping is the deliberate addition of controlledppm of pentavalent or trivalent impurity atoms to a pure semiconductor. At thermal equilibrium, $n_e \\cdot n_h = n_i^2$.'
      }
    ],
    keyPoints: [
      '• <strong>n-Type Semiconductor (Pentavalent Group 15 Doping: P, As, Sb):</strong> Impurity donates a 5th electron ($\sim 0.01\\text{ eV}$ for Ge, $0.05\\text{ eV}$ for Si). Donor energy level $E_D$ lies just below conduction band $E_C$. Majority carriers: Electrons ($n_e \\gg n_h$).',
      '• <strong>p-Type Semiconductor (Trivalent Group 13 Doping: B, Al, In, Ga):</strong> Impurity creates a vacancy/hole. Acceptor energy level $E_A$ lies just above valence band $E_V$. Majority carriers: Holes ($n_h \\gg n_e$).',
      '• <strong>Electrical Neutrality:</strong> Both n-type and p-type semiconductors are strictly ELECTRICALLY NEUTRAL as a whole because each dopant atom planted into the crystal is itself electrically neutral!'
    ],
    extraPoints: [
      '• Carbon, Silicon, and Germanium all belong to Group 14 (4 valence electrons), yet C (diamond) is an insulator ($E_g = 5.4\\text{ eV}$) while Si and Ge are semiconductors because C’s 2nd-shell valence electrons are tightly bound.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Donor vs Acceptor Band Level',
      phrase: 'n-type (Pentavalent Donor): E_D is Just BELOW E_C | p-type (Trivalent Acceptor): E_A is Just ABOVE E_V',
      explanation: 'Draw the dashed impurity level line clearly in energy band diagrams!'
    },
    commonlyMadeErrors: [
      {
        error: 'Saying that an n-type semiconductor is negatively charged and a p-type semiconductor is positively charged.',
        tip: 'Both n-type and p-type semiconductors are 100% electrically neutral; "n" and "p" refer only to the charge sign of the majority mobile carriers!',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'An n-type semiconductor has a large number of free electrons, yet it is electrically neutral.',
      reason: 'The excess electrons are contributed by electrically neutral pentavalent donor atoms that have equal numbers of protons and electrons.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Immobile positive donor ions (+1) balance the mobile negative electrons (−1).'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020',
      frequency: '99% Guaranteed',
      typicalMarks: '3 Marks',
      questionTypes: 'Energy band diagrams of n-type (with E_D) and p-type (with E_A) + n_e n_h = n_i² numerical',
      hotTopic: 'Energy band diagrams of n-type and p-type at T > 0 K'
    }
  },
  'phy-sub-14-3': {
    definitions: [
      {
        term: 'Depletion Region & Barrier Potential (V_B)',
        definition: 'Depletion region is the space-charge zone ($\sim 10^{-6}\\text{ m}$) on either side of a p-n junction devoid of mobile charge carriers and containing only immobile acceptor ($-$) and donor ($+$) ions. Barrier potential $V_B$ ($\sim 0.7\\text{ V}$ for Si, $0.3\\text{ V}$ for Ge) opposes further diffusion of majority carriers.'
      }
    ],
    keyPoints: [
      '• <strong>Two Processes During p-n Junction Formation:</strong> (1) <em>Diffusion:</em> Holes diffuse from p $\\to$ n and electrons from n $\\to$ p due to concentration gradient, leaving behind immobile ions; (2) <em>Drift:</em> The internal electric field $E_B$ (directed from n-side to p-side) sweeps minority carriers across the junction. At equilibrium, $I_{\\text{diffusion}} = I_{\\text{drift}}$.',
      '• <strong>Forward Bias (p to $+$, n to $-$):</strong> Applied field opposes barrier field $E_B$ $\\implies$ Depletion width decreases, barrier height falls to $(V_B - V)$, and large majority current (in $\\text{mA}$) flows beyond threshold/cut-in voltage.',
      '• <strong>Reverse Bias (p to $-$, n to $+$):</strong> Applied field supports barrier field $E_B$ $\\implies$ Depletion width increases, barrier height rises to $(V_B + V)$, and only a tiny voltage-independent minority saturation current (in $\\mu\\text{A}$) flows.'
    ],
    extraPoints: [
      '• Dynamic resistance of a diode: $r_d = \\Delta V / \\Delta I$. Ideal diode has $r_d = 0$ in forward bias (closed switch) and $r_d = \\infty$ in reverse bias (open switch).'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Forward vs Reverse Bias Depletion Width',
      phrase: 'Forward Bias: Width Thins ↓, Barrier Drops ↓, Current in mA | Reverse Bias: Width Widens ↑, Barrier Rises ↑, Current in μA',
      explanation: 'Remember to label forward current in mA and reverse current in μA on V-I characteristics!'
    },
    commonlyMadeErrors: [
      {
        error: 'Forgetting to mark different current scales (mA on positive y-axis, μA on negative y-axis) on the p-n junction V-I graph.',
        tip: 'Examiners specifically check for mA (forward) and μA (reverse) plus the knee/cut-in voltage (0.7 V for Si).',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'The width of the depletion layer of a p-n junction increases under reverse bias.',
      reason: 'In reverse bias, majority carriers (holes in p-region and electrons in n-region) are pulled away from the junction towards the battery terminals.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Uncovering more immobile ions widens the space-charge zone.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2019',
      frequency: '99% Guaranteed 3M/5M Question',
      typicalMarks: '3 Marks / 5 Marks',
      questionTypes: 'Explain diffusion and drift in p-n junction formation; draw V-I characteristic circuit and curves',
      hotTopic: 'Diffusion vs Drift + Forward/Reverse bias depletion layer changes'
    }
  },
  'phy-sub-14-4': {
    definitions: [
      {
        term: 'Rectification & Rectifier',
        definition: 'The process of converting alternating current (AC) into pulsating direct current (DC) using the unidirectional conduction property of a p-n junction diode.'
      }
    ],
    keyPoints: [
      '• <strong>Half-Wave Rectifier (HWR):</strong> Uses a single diode. Conducts only during positive half-cycles of AC. Output ripple frequency equals input frequency: $f_{\\text{out}} = f_{\\text{in}} = 50\\text{ Hz}$.',
      '• <strong>Centre-Tap Full-Wave Rectifier (FWR):</strong> Uses a centre-tap transformer and TWO diodes ($D_1, D_2$). During positive half-cycle, $D_1$ is forward-biased and conducts; during negative half-cycle, $D_2$ is forward-biased and conducts, sending current through load $R_L$ in the SAME direction. Output ripple frequency is doubled: $f_{\\text{out}} = 2 f_{\\text{in}} = 100\\text{ Hz}$.',
      '• <strong>Role of Capacitor Filter (Connected in Parallel with $R_L$):</strong> Offers low impedance ($X_C = 1/\\omega C$) to AC ripples and infinite impedance to DC. It charges to peak voltage and discharges slowly through $R_L$, smoothing pulsating DC into steady DC.'
    ],
    extraPoints: [
      '• Peak Inverse Voltage (PIV) across non-conducting diode in centre-tap FWR is $2V_m$.'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Rectifier Output Frequency',
      phrase: '50 Hz AC Input ⟶ Half-Wave Output = 50 Hz (f) | Full-Wave Output = 100 Hz (2f)',
      explanation: 'Most frequently asked 1-mark question attached to the 5-mark rectifier question.'
    },
    commonlyMadeErrors: [
      {
        error: 'Connecting the filter capacitor in series with the load resistor R_L instead of in parallel.',
        tip: 'A capacitor blocks DC! It MUST be connected in PARALLEL (shunt) across R_L to bypass AC ripples and smooth the DC output.',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'If the input frequency to a full-wave rectifier is 50 Hz, the fundamental ripple frequency in the output is 100 Hz.',
      reason: 'A full-wave rectifier produces two identical output pulses in the same direction for every one complete cycle of the AC input.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Time period of output pulse is T/2, so frequency is 2f.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020, 2018',
      frequency: '99% Guaranteed 5M Question',
      typicalMarks: '5 Marks',
      questionTypes: 'Draw circuit diagram of full-wave rectifier + input/output waveforms + capacitor filter role',
      hotTopic: 'Full-wave centre-tap rectifier circuit and waveforms'
    }
  }
};
