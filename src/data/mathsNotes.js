// CBSE Class 12 Standard Mathematics (Subject Code: 041) High-Yield NCERT Curriculum Notes
// Covers Volume 1 (Algebra & Differential Calculus) and Volume 2 (Integral Calculus, Vectors, 3D & Probability)

export const MATHS_CHAPTERS_VOL1 = [
  {
    id: 'math-ch-1',
    number: 1,
    title: 'Relations and Functions',
    tag: 'Algebra',
    available: true,
    isExamPortion: false,
    subchapters: [
      {
        id: 'math-sub-1-1',
        title: '1.1 Types of Relations: Reflexive, Symmetric, Transitive & Equivalence',
        sections: [
          {
            id: 'math-sec-1-1',
            title: 'Equivalence Relations',
            explanation: 'A relation R on a set A is an equivalence relation if and only if it is reflexive (a, a) ∈ R for all a ∈ A, symmetric ((a, b) ∈ R ⇒ (b, a) ∈ R), and transitive ((a, b) ∈ R and (b, c) ∈ R ⇒ (a, c) ∈ R). Equivalence relations partition the set into disjoint equivalence classes.',
            questionFraming: 'Show that the relation R in the set Z of integers given by R = {(a, b) : 2 divides (a - b)} is an equivalence relation.',
            textbookRef: 'NCERT Mathematics Class 12 Part 1, Chapter 1, Section 1.2. The smallest equivalence relation on set A is the identity relation, and the largest is the universal relation A × A.',
            keyFormulas: [
              'Reflexive: ∀ a ∈ A, (a, a) ∈ R',
              'Symmetric: (a, b) ∈ R ⟹ (b, a) ∈ R',
              'Transitive: (a, b) ∈ R ∧ (b, c) ∈ R ⟹ (a, c) ∈ R',
              'Equivalence Class: [a] = {x ∈ A : (x, a) ∈ R}'
            ]
          }
        ]
      },
      {
        id: 'math-sub-1-2',
        title: '1.2 Types of Functions: Injective (One-One) and Surjective (Onto)',
        sections: [
          {
            id: 'math-sec-1-2',
            title: 'One-One (Injective) & Onto (Surjective) Bijective Maps',
            explanation: 'A function f: X → Y is one-one (injective) if f(x₁) = f(x₂) implies x₁ = x₂ for all x₁, x₂ ∈ X. It is onto (surjective) if for every y ∈ Y, there exists some x ∈ X such that f(x) = y (i.e. Range = Codomain). A function that is both injective and surjective is bijective and admits an inverse function f⁻¹: Y → X.',
            questionFraming: 'Prove that f: R → R given by f(x) = 3 - 4x is bijective.',
            textbookRef: 'NCERT Mathematics Class 12 Part 1, Chapter 1, Section 1.3.',
            keyFormulas: [
              'Injective: f(x₁) = f(x₂) ⟹ x₁ = x₂',
              'Surjective: ∀ y ∈ Y, ∃ x ∈ X such that f(x) = y',
              'Bijective: Injective + Surjective ⟺ f⁻¹ exists'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'math-ch-2',
    number: 2,
    title: 'Inverse Trigonometric Functions',
    tag: 'Trigonometry',
    available: true,
    isExamPortion: false,
    subchapters: [
      {
        id: 'math-sub-2-1',
        title: '2.1 Principal Value Branches, Domains and Ranges',
        sections: [
          {
            id: 'math-sec-2-1',
            title: 'Principal Value Branches of Inverse Trigonometric Functions',
            explanation: 'Trigonometric functions are periodic and not one-one over their whole domains. By restricting their domains, they become bijective and invertible. The principal value branch for sin⁻¹ x is [-π/2, π/2], for cos⁻¹ x is [0, π], and for tan⁻¹ x is (-π/2, π/2).',
            questionFraming: 'Find the principal value of cos⁻¹(-1/2) and sin⁻¹(sin(2π/3)).',
            textbookRef: 'NCERT Mathematics Class 12 Part 1, Chapter 2, Section 2.2. Pay special attention: sin⁻¹(sin θ) = θ only when θ ∈ [-π/2, π/2].',
            keyFormulas: [
              'sin⁻¹ x : [-1, 1] ⟶ [-π/2, π/2]',
              'cos⁻¹ x : [-1, 1] ⟶ [0, π]',
              'tan⁻¹ x : R ⟶ (-π/2, π/2)',
              'sin⁻¹(-x) = -sin⁻¹(x),  cos⁻¹(-x) = π - cos⁻¹(x)'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'math-ch-3',
    number: 3,
    title: 'Matrices',
    tag: 'Algebra',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'math-sub-3-1',
        title: '3.1 Matrix Operations: Addition, Scalar & Matrix Multiplication',
        sections: [
          {
            id: 'math-sec-3-1',
            title: 'Matrix Multiplication & Non-Commutativity',
            explanation: 'Two matrices A (order m × n) and B (order n × p) can be multiplied to give AB of order m × p. Matrix multiplication is associative A(BC) = (AB)C and distributive A(B + C) = AB + AC, but strictly non-commutative in general: AB ≠ BA. Also, AB = O does not imply A = O or B = O.',
            questionFraming: 'If A and B are square matrices of order 3 such that AB = BA, prove that (AB)ⁿ = AⁿBⁿ by induction.',
            textbookRef: 'NCERT Mathematics Class 12 Part 1, Chapter 3, Section 3.4. Notice: product AB is defined only when number of columns in A equals number of rows in B.',
            keyFormulas: [
              'c_{ij} = ∑_{k=1}^n a_{ik} b_{kj}',
              'AB ≠ BA in general (Non-commutative)',
              'A(BC) = (AB)C (Associative)',
              'A(B + C) = AB + AC (Distributive)'
            ]
          }
        ]
      },
      {
        id: 'math-sub-3-2',
        title: '3.2 Transpose of a Matrix, Symmetric and Skew-Symmetric Matrices',
        sections: [
          {
            id: 'math-sec-3-2',
            title: 'Symmetric & Skew-Symmetric Matrices Representation',
            explanation: 'The transpose Aᵀ is obtained by interchanging rows and columns. A square matrix A is symmetric if Aᵀ = A, and skew-symmetric if Aᵀ = -A. For any skew-symmetric matrix, all diagonal elements are zero (a_{ii} = -a_{ii} ⇒ a_{ii} = 0). Any square matrix can be uniquely expressed as the sum of a symmetric and a skew-symmetric matrix: A = (A + Aᵀ)/2 + (A - Aᵀ)/2.',
            questionFraming: 'Express the matrix A = [[3, 5], [1, -1]] as the sum of a symmetric and a skew-symmetric matrix.',
            textbookRef: 'NCERT Mathematics Class 12 Part 1, Chapter 3, Theorem 1 and Theorem 2.',
            keyFormulas: [
              '(AB)ᵀ = Bᵀ Aᵀ (Reversal Law)',
              'Symmetric: Aᵀ = A',
              'Skew-Symmetric: Aᵀ = -A (All a_{ii} = 0)',
              'Decomposition: A = ½(A + Aᵀ) + ½(A - Aᵀ)'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'math-ch-4',
    number: 4,
    title: 'Determinants',
    tag: 'Algebra',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'math-sub-4-1',
        title: '4.1 Minors, Cofactors, and Determinants Expansion',
        sections: [
          {
            id: 'math-sec-4-1',
            title: 'Determinant Evaluation and Cofactor Expansion',
            explanation: 'The minor M_{ij} of an element a_{ij} is the determinant of the submatrix left after deleting row i and column j. The cofactor is A_{ij} = (-1)^{i+j} M_{ij}. A determinant can be expanded along any row or column: |A| = ∑ a_{ij} A_{ij}. If elements of a row are multiplied by cofactors of another row, the sum is zero: ∑ a_{ik} A_{jk} = 0 (i ≠ j).',
            questionFraming: 'Evaluate the determinant of a 3 × 3 matrix using expansion along the first row.',
            textbookRef: 'NCERT Mathematics Class 12 Part 1, Chapter 4, Section 4.4.',
            keyFormulas: [
              'A_{ij} = (-1)^{i+j} M_{ij}',
              '|A| = a_{11}A_{11} + a_{12}A_{12} + a_{13}A_{13}',
              '∑_{k} a_{ik} A_{jk} = 0  (for i ≠ j)',
              '|AB| = |A| · |B|'
            ]
          }
        ]
      },
      {
        id: 'math-sub-4-2',
        title: '4.2 Adjoint, Inverse of a Matrix & Matrix Method for Linear Systems',
        sections: [
          {
            id: 'math-sec-4-2',
            title: 'Matrix Method: Solving AX = B',
            explanation: 'The adjoint of matrix A is the transpose of its cofactor matrix: adj(A) = [A_{ij}]ᵀ. A · adj(A) = adj(A) · A = |A| · I. For an invertible (non-singular, |A| ≠ 0) matrix, the inverse is A⁻¹ = (1/|A|) adj(A). A system of linear equations AX = B has a unique solution given by X = A⁻¹B if |A| ≠ 0. If |A| = 0 and (adj A)B ≠ O, the system is inconsistent (no solution).',
            questionFraming: 'Solve the system of equations 2x + 3y + 3z = 5, x - 2y + z = -4, 3x - y - 2z = 3 using matrix method.',
            textbookRef: 'NCERT Mathematics Class 12 Part 1, Chapter 4, Section 4.6 (Matrix Method, 5 Marks question in CBSE).',
            keyFormulas: [
              'A · adj(A) = |A| · I',
              'A⁻¹ = (1 / |A|) · adj(A)   (|A| ≠ 0)',
              '|adj(A)| = |A|^{n-1}   (for order n)',
              'Linear System: AX = B ⟹ X = A⁻¹B'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'math-ch-5',
    number: 5,
    title: 'Continuity and Differentiability',
    tag: 'Calculus',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'math-sub-5-1',
        title: '5.1 Continuity of Functions at a Point and in an Interval',
        sections: [
          {
            id: 'math-sec-5-1',
            title: 'Definition of Continuity & Value of Unknown Constants',
            explanation: 'A function f(x) is continuous at x = c if lim_{x → c⁻} f(x) = lim_{x → c⁺} f(x) = f(c). Polynomial, trigonometric, exponential, and logarithmic functions are continuous everywhere in their respective domains. CBSE frequently tests determining constants k such that a piecewise defined function is continuous at a split point.',
            questionFraming: 'Find the value of k so that the function f(x) = k(x² - 2x) for x ≤ 0 and f(x) = 4x + 1 for x > 0 is continuous at x = 0.',
            textbookRef: 'NCERT Mathematics Class 12 Part 1, Chapter 5, Section 5.1.',
            keyFormulas: [
              'LHL = lim_{h → 0} f(c - h)',
              'RHL = lim_{h → 0} f(c + h)',
              'Continuity: LHL = RHL = f(c)'
            ]
          }
        ]
      },
      {
        id: 'math-sub-5-2',
        title: '5.2 Chain Rule, Implicit Differentiation & Logarithmic Differentiation',
        sections: [
          {
            id: 'math-sec-5-2',
            title: 'Logarithmic & Parametric Differentiation',
            explanation: 'Logarithmic differentiation is essential when the function is of the form y = [u(x)]^{v(x)} or involves complex products and quotients: take ln on both sides, ln y = v(x) ln u(x), then differentiate implicitly: (1/y)(dy/dx) = v\' ln u + v(u\'/u). Parametric differentiation: if x = f(t) and y = g(t), then dy/dx = (dy/dt) / (dx/dt). Second derivative: d²y/dx² = [d/dt(dy/dx)] / (dx/dt).',
            questionFraming: 'Differentiate x^{sin x} + (sin x)^{cos x} with respect to x. Find d²y/dx² if x = a(θ - sin θ), y = a(1 - cos θ).',
            textbookRef: 'NCERT Mathematics Class 12 Part 1, Chapter 5, Sections 5.5 and 5.6.',
            keyFormulas: [
              'Chain Rule: d/dx [f(g(x))] = f\'(g(x)) · g\'(x)',
              'Logarithmic: y = u^v ⟹ dy/dx = u^v [v\' ln u + (v/u) u\']',
              'Parametric: dy/dx = (dy/dt) / (dx/dt)',
              'Second Parametric: d²y/dx² = [d/dt(dy/dx)] / (dx/dt)'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'math-ch-6',
    number: 6,
    title: 'Application of Derivatives',
    tag: 'Calculus',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'math-sub-6-1',
        title: '6.1 Rate of Change & Increasing/Decreasing Functions',
        sections: [
          {
            id: 'math-sec-6-1',
            title: 'Monotonicity: Increasing and Decreasing Functions',
            explanation: 'Let f be continuous on [a, b] and differentiable on (a, b). Then f is strictly increasing on [a, b] if f\'(x) > 0 for all x ∈ (a, b), and strictly decreasing if f\'(x) < 0 for all x ∈ (a, b). To find intervals of increase/decrease, solve f\'(x) = 0 to identify critical points, divide the domain into subintervals, and test the sign of f\'(x) in each interval.',
            questionFraming: 'Find the intervals in which the function f(x) = 2x³ - 3x² - 36x + 7 is strictly increasing or strictly decreasing.',
            textbookRef: 'NCERT Mathematics Class 12 Part 1, Chapter 6, Section 6.3.',
            keyFormulas: [
              'Rate of Change: dy/dt = (dy/dx) · (dx/dt)',
              'Strictly Increasing: f\'(x) > 0 ∀ x ∈ (a, b)',
              'Strictly Decreasing: f\'(x) < 0 ∀ x ∈ (a, b)'
            ]
          }
        ]
      },
      {
        id: 'math-sub-6-2',
        title: '6.2 Maxima and Minima: First and Second Derivative Tests',
        sections: [
          {
            id: 'math-sec-6-2',
            title: 'Optimization & Second Derivative Test',
            explanation: 'Critical points occur where f\'(x) = 0 or f\'(x) does not exist. Second Derivative Test: if f\'(c) = 0 and f\'\'(c) < 0, then x = c is a point of local maximum and f(c) is local maximum value. If f\'(c) = 0 and f\'\'(c) > 0, then x = c is a point of local minimum. If f\'\'(c) = 0, the test fails and the First Derivative Test must be applied. For absolute maxima/minima on a closed interval [a, b], evaluate f(x) at all critical points and at endpoints a, b.',
            questionFraming: 'A wire of length 28 m is to be cut into two pieces. One piece is made into a square and the other into a circle. What should be the length of the two pieces so that the combined area is minimum?',
            textbookRef: 'NCERT Mathematics Class 12 Part 1, Chapter 6, Section 6.5.',
            keyFormulas: [
              'Critical Point: f\'(c) = 0',
              'Local Maximum: f\'(c) = 0 and f\'\'(c) < 0',
              'Local Minimum: f\'(c) = 0 and f\'\'(c) > 0',
              'Absolute Extrema on [a, b]: Compare f(c_i), f(a), f(b)'
            ]
          }
        ]
      }
    ]
  }
];

export const MATHS_CHAPTERS_VOL2 = [
  {
    id: 'math-ch-7',
    number: 7,
    title: 'Integrals',
    tag: 'Calculus',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'math-sub-7-1',
        title: '7.1 Indefinite Integrals: Methods of Substitution & Partial Fractions',
        sections: [
          {
            id: 'math-sec-7-1',
            title: 'Methods of Integration: Substitution & Partial Fractions',
            explanation: 'Integration is the reverse process of differentiation. By substitution, ∫ f(g(x)) g\'(x) dx = ∫ f(t) dt where t = g(x). Rational functions P(x)/Q(x) are resolved into partial fractions depending on linear and quadratic irreducible factors in the denominator.',
            questionFraming: 'Evaluate ∫ [x / ((x - 1)(x² + 1))] dx and ∫ [sin 2x / (sin⁴ x + cos⁴ x)] dx.',
            textbookRef: 'NCERT Mathematics Class 12 Part 2, Chapter 7, Sections 7.2 - 7.5.',
            keyFormulas: [
              '∫ xⁿ dx = (x^{n+1}) / (n + 1) + C  (n ≠ -1)',
              '∫ 1/x dx = ln|x| + C',
              '∫ e^{ax} dx = (1/a) e^{ax} + C',
              '∫ 1/(x² + a²) dx = (1/a) tan⁻¹(x/a) + C',
              '∫ 1/√(a² - x²) dx = sin⁻¹(x/a) + C'
            ]
          }
        ]
      },
      {
        id: 'math-sub-7-2',
        title: '7.2 Integration by Parts & Definite Integral Properties',
        sections: [
          {
            id: 'math-sec-7-2',
            title: 'ILATE Rule & Kings Property of Definite Integrals',
            explanation: 'Integration by parts: ∫ u v dx = u ∫ v dx - ∫ [u\' (∫ v dx)] dx, choosing u using the ILATE rule (Inverse, Logarithmic, Algebraic, Trigonometric, Exponential). Special form: ∫ eˣ [f(x) + f\'(x)] dx = eˣ f(x) + C. Definite integral properties: King\'s property ∫_a^b f(x) dx = ∫_a^b f(a + b - x) dx. For [0, a]: ∫_0^a f(x) dx = ∫_0^a f(a - x) dx.',
            questionFraming: 'Evaluate ∫_0^{π/2} [√sin x / (√sin x + √cos x)] dx using properties of definite integrals.',
            textbookRef: 'NCERT Mathematics Class 12 Part 2, Chapter 7, Section 7.6 and Section 7.11.',
            keyFormulas: [
              'By Parts: ∫ u v dx = u ∫ v dx - ∫ [u\' ∫ v dx] dx',
              'Special Form: ∫ eˣ [f(x) + f\'(x)] dx = eˣ f(x) + C',
              'King\'s Property: ∫_0^a f(x) dx = ∫_0^a f(a - x) dx',
              'Even/Odd: ∫_{-a}^a f(x) dx = 2 ∫_0^a f(x) dx (even) or 0 (odd)'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'math-ch-8',
    number: 8,
    title: 'Application of Integrals',
    tag: 'Calculus',
    available: true,
    isExamPortion: false,
    subchapters: [
      {
        id: 'math-sub-8-1',
        title: '8.1 Area Under Simple Curves and Between Curves',
        sections: [
          {
            id: 'math-sec-8-1',
            title: 'Area Bounded by Curves',
            explanation: 'The area bounded by the curve y = f(x), the x-axis, and the ordinates x = a and x = b is given by Area = ∫_a^b |y| dx. If the area is bounded between two curves y = f(x) and y = g(x) where f(x) ≥ g(x), Area = ∫_a^b [f(x) - g(x)] dx.',
            questionFraming: 'Find the area of the region bounded by the ellipse x²/16 + y²/9 = 1 using integration.',
            textbookRef: 'NCERT Mathematics Class 12 Part 2, Chapter 8, Section 8.2.',
            keyFormulas: [
              'Area = ∫_a^b y dx = ∫_a^b f(x) dx',
              'Between Curves: Area = ∫_a^b [y_{upper} - y_{lower}] dx',
              'Ellipse Area: πab'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'math-ch-9',
    number: 9,
    title: 'Differential Equations',
    tag: 'Calculus',
    available: true,
    isExamPortion: false,
    subchapters: [
      {
        id: 'math-sub-9-1',
        title: '9.1 Order, Degree & Linear Differential Equations',
        sections: [
          {
            id: 'math-sec-9-1',
            title: 'Linear Differential Equation with Integrating Factor',
            explanation: 'A first-order linear differential equation has standard form dy/dx + Py = Q, where P and Q are functions of x only. The Integrating Factor is I.F. = e^{∫ P dx}. The general solution is y · (I.F.) = ∫ [Q · (I.F.)] dx + C. For dx/dy + P₁x = Q₁, I.F. = e^{∫ P₁ dy} and x · (I.F.) = ∫ [Q₁ · (I.F.)] dy + C.',
            questionFraming: 'Find the particular solution of the differential equation dy/dx + y cot x = 4x cosec x, given y = 0 when x = π/2.',
            textbookRef: 'NCERT Mathematics Class 12 Part 2, Chapter 9, Section 9.5.',
            keyFormulas: [
              'Standard Form: dy/dx + Py = Q',
              'Integrating Factor: I.F. = e^{∫ P dx}',
              'General Solution: y · (I.F.) = ∫ [Q · (I.F.)] dx + C'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'math-ch-10',
    number: 10,
    title: 'Vector Algebra',
    tag: 'Vectors',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'math-sub-10-1',
        title: '10.1 Scalar (Dot) Product and Vector (Cross) Product',
        sections: [
          {
            id: 'math-sec-10-1',
            title: 'Dot & Cross Products of Vectors',
            explanation: 'Dot product: a⃗ · b⃗ = |a⃗||b⃗| cos θ = a₁b₁ + a₂b₂ + a₃b₃. Two non-zero vectors are perpendicular if and only if a⃗ · b⃗ = 0. The projection of a⃗ on b⃗ is (a⃗ · b⃗) / |b⃗|. Cross product: a⃗ × b⃗ = |a⃗||b⃗| sin θ n̂, calculated via the 3×3 determinant of basis unit vectors. Two vectors are parallel if and only if a⃗ × b⃗ = 0⃗. The area of a parallelogram with adjacent sides a⃗ and b⃗ is |a⃗ × b⃗|.',
            questionFraming: 'Find a unit vector perpendicular to both vectors a⃗ = 2î + ĵ + k̂ and b⃗ = î - ĵ + 2k̂. Find the angle between them.',
            textbookRef: 'NCERT Mathematics Class 12 Part 2, Chapter 10, Sections 10.4 and 10.5.',
            keyFormulas: [
              'Dot Product: a⃗ · b⃗ = |a⃗||b⃗| cos θ = a₁b₁ + a₂b₂ + a₃b₃',
              'Perpendicular Condition: a⃗ · b⃗ = 0',
              'Projection of a⃗ on b⃗: (a⃗ · b⃗) / |b⃗|',
              'Cross Product: a⃗ × b⃗ = |[î, ĵ, k̂], [a₁, a₂, a₃], [b₁, b₂, b₃]|',
              'Area of Parallelogram: |a⃗ × b⃗|, Area of Triangle: ½|a⃗ × b⃗|'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'math-ch-11',
    number: 11,
    title: 'Three-Dimensional Geometry',
    tag: '3D Geometry',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'math-sub-11-1',
        title: '11.1 Direction Cosines, Equation of Line & Shortest Distance',
        sections: [
          {
            id: 'math-sec-11-1',
            title: 'Vector Equation of Line & Shortest Distance Between Skew Lines',
            explanation: 'Vector equation of line passing through a point with position vector a⃗ and parallel to b⃗ is r⃗ = a⃗ + λb⃗. Cartesian form: (x - x₁)/a = (y - y₁)/b = (z - z₁)/c. For skew lines r⃗ = a⃗₁ + λb⃗₁ and r⃗ = a⃗₂ + μb⃗₂, the shortest distance is d = |(b⃗₁ × b⃗₂) · (a⃗₂ - a⃗₁)| / |b⃗₁ × b⃗₂|. If d = 0, the lines intersect.',
            questionFraming: 'Find the shortest distance between the lines r⃗ = (î + 2ĵ + k̂) + λ(î - ĵ + k̂) and r⃗ = (2î - ĵ - k̂) + μ(2î + ĵ + 2k̂).',
            textbookRef: 'NCERT Mathematics Class 12 Part 2, Chapter 11, Section 11.4 (High weightage 5 Marks CBSE question).',
            keyFormulas: [
              'Line Eq: r⃗ = a⃗ + λb⃗ ⟺ (x - x₁)/a = (y - y₁)/b = (z - z₁)/c',
              'Direction Cosines: l² + m² + n² = 1',
              'Shortest Distance: d = |(b⃗₁ × b⃗₂) · (a⃗₂ - a⃗₁)| / |b⃗₁ × b⃗₂|',
              'Intersecting Lines Condition: (b⃗₁ × b⃗₂) · (a⃗₂ - a⃗₁) = 0'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'math-ch-12',
    number: 12,
    title: 'Linear Programming',
    tag: 'Optimization',
    available: true,
    isExamPortion: false,
    subchapters: [
      {
        id: 'math-sub-12-1',
        title: '12.1 Formulation and Graphical Method of LPP',
        sections: [
          {
            id: 'math-sec-12-1',
            title: 'Corner Point Method for Bounded Feasible Regions',
            explanation: 'A Linear Programming Problem (LPP) optimizes (maximizes or minimizes) a linear objective function Z = ax + by subject to linear inequality constraints. By graphing the half-planes, we identify the feasible region. By the Fundamental Theorem of LPP, the optimal solution occurs at one of the corner points (vertices) of the feasible region.',
            questionFraming: 'Solve graphically: Maximize Z = 4x + y subject to x + y ≤ 50, 3x + y ≤ 90, x ≥ 0, y ≥ 0.',
            textbookRef: 'NCERT Mathematics Class 12 Part 2, Chapter 12, Section 12.2.',
            keyFormulas: [
              'Objective Function: Z = ax + by',
              'Corner Point Method: Evaluate Z at each vertex (x_i, y_i)',
              'Maximum Z = max{Z(P_i)}, Minimum Z = min{Z(P_i)}'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'math-ch-13',
    number: 13,
    title: 'Probability',
    tag: 'Probability',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'math-sub-13-1',
        title: '13.1 Conditional Probability, Multiplication Rule & Bayes\' Theorem',
        sections: [
          {
            id: 'math-sec-13-1',
            title: 'Bayes\' Theorem & Total Probability Theorem',
            explanation: 'Conditional Probability: P(A|B) = P(A ∩ B) / P(B). Events A and B are independent if P(A ∩ B) = P(A) · P(B). Total Probability Theorem: if {E₁, E₂, ..., E_n} form a partition of sample space S, then P(A) = ∑ P(E_i) · P(A|E_i). Bayes\' Theorem calculates the posterior probability of event E_i given that event A has occurred: P(E_i|A) = [P(E_i) · P(A|E_i)] / [∑ P(E_j) · P(A|E_j)].',
            questionFraming: 'A bag contains 4 red and 4 black balls, another bag contains 2 red and 6 black balls. One bag is selected at random and a ball is drawn and found to be red. Find the probability that the ball was drawn from the first bag.',
            textbookRef: 'NCERT Mathematics Class 12 Part 2, Chapter 13, Sections 13.2 and 13.3 (Guaranteed 4/5 Marks in CBSE Board Exam).',
            keyFormulas: [
              'Conditional: P(A|B) = P(A ∩ B) / P(B)',
              'Independence: P(A ∩ B) = P(A) · P(B)',
              'Total Probability: P(A) = ∑_{i=1}^n P(E_i) · P(A|E_i)',
              'Bayes\' Theorem: P(E_k|A) = [P(E_k) P(A|E_k)] / [∑_{j=1}^n P(E_j) P(A|E_j)]'
            ]
          }
        ]
      }
    ]
  }
];
