// CBSE Class 12 Applied Mathematics (Subject Code: 241) High-Yield NCERT Curriculum Notes
// Covers Commerce & Social Science Applied Mathematics: Numbers, Algebra, Business Calculus, Statistics & Financial Math

export const APPLIED_MATHS_CHAPTERS_VOL1 = [
  {
    id: 'app-ch-1',
    number: 1,
    title: 'Numbers, Quantification & Numerical Applications',
    tag: 'Numbers',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'app-sub-1-1',
        title: '1.1 Modulo Arithmetic & Congruence Modulo m',
        sections: [
          {
            id: 'app-sec-1-1',
            title: 'Congruence Modulo Arithmetic and Properties',
            explanation: 'Two integers a and b are congruent modulo m (written a ≡ b (mod m)) if their difference (a - b) is divisible by m. That is, a - b = km for some integer k, meaning a and b leave the same remainder when divided by m. Modulo arithmetic satisfies reflexive, symmetric, and transitive properties. Addition and multiplication modulo m: (a + b) mod m = [(a mod m) + (b mod m)] mod m, and (a · b) mod m = [(a mod m) · (b mod m)] mod m.',
            questionFraming: 'Find the remainder when 7¹⁰⁰ is divided by 6 using congruence modulo arithmetic.',
            textbookRef: 'CBSE Applied Mathematics Class 12 Handbook, Unit 1, Section 1.1.',
            keyFormulas: [
              'a ≡ b (mod m) ⟺ m | (a - b)',
              'a ≡ r (mod m) where 0 ≤ r < m is remainder',
              '(a + c) ≡ (b + d) (mod m)',
              '(a · c) ≡ (b · d) (mod m)'
            ]
          }
        ]
      },
      {
        id: 'app-sub-1-2',
        title: '1.2 Allegation and Mixtures, Boats and Streams & Races',
        sections: [
          {
            id: 'app-sec-1-2',
            title: 'Rule of Allegation & Rate Problems',
            explanation: 'The Rule of Allegation calculates the ratio in which two ingredients at given prices (cheaper price c and dearer price d) must be mixed to produce a mixture of mean price m: (Quantity of Cheaper) / (Quantity of Dearer) = (d - m) / (m - c). For boats and streams: downstream speed = u + v, upstream speed = u - v, speed in still water = ½(downstream + upstream), stream speed = ½(downstream - upstream).',
            questionFraming: 'In what ratio must grocer mix two varieties of pulses costing Rs 15 and Rs 20 per kg respectively to get a mixture worth Rs 16.50 per kg?',
            textbookRef: 'CBSE Applied Mathematics Class 12 Handbook, Unit 1, Section 1.3.',
            keyFormulas: [
              'Allegation Ratio: Q_c / Q_d = (d - m) / (m - c)',
              'Speed Downstream: v_d = u + v',
              'Speed Upstream: v_u = u - v',
              'Speed in Still Water: u = ½(v_d + v_u)'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'app-ch-2',
    number: 2,
    title: 'Numerical Inequalities',
    tag: 'Algebra',
    available: true,
    isExamPortion: false,
    subchapters: [
      {
        id: 'app-sub-2-1',
        title: '2.1 Numerical Inequalities and AM-GM Relationship',
        sections: [
          {
            id: 'app-sec-2-1',
            title: 'Arithmetic Mean - Geometric Mean (AM ≥ GM) Inequality',
            explanation: 'For any n positive real numbers, Arithmetic Mean ≥ Geometric Mean ≥ Harmonic Mean. Equality holds if and only if all numbers are equal: a₁ = a₂ = ... = a_n. For two numbers a and b: (a + b)/2 ≥ √(ab). This inequality is widely used in economics for cost minimization and revenue maximization.',
            questionFraming: 'If a, b, c are positive real numbers, prove that (a + b)(b + c)(c + a) ≥ 8abc.',
            textbookRef: 'CBSE Applied Mathematics Class 12 Handbook, Unit 1, Section 1.5.',
            keyFormulas: [
              'AM ≥ GM: (a + b)/2 ≥ √(ab)',
              'AM ≥ GM for n variables: (∑ a_i)/n ≥ (∏ a_i)^{1/n}',
              'Equality holds ⟺ a₁ = a₂ = ... = a_n'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'app-ch-3',
    number: 3,
    title: 'Matrices and Determinants (Applications in Economics)',
    tag: 'Algebra',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'app-sub-3-1',
        title: '3.1 Cramer\'s Rule & Matrix Inversion for Multi-Market Equilibrium',
        sections: [
          {
            id: 'app-sec-3-1',
            title: 'Cramer\'s Rule for System of Equations',
            explanation: 'For a system of linear equations a₁x + b₁y = c₁ and a₂x + b₂y = c₂, Cramer\'s rule computes solutions via determinants: x = D_x / D and y = D_y / D (provided determinant D ≠ 0). In 3 variables: x = D_x / D, y = D_y / D, z = D_z / D. If D = 0 and any D_x, D_y, D_z ≠ 0, no solution exists.',
            questionFraming: 'Use Cramer\'s Rule to find equilibrium prices in a three-commodity market model.',
            textbookRef: 'CBSE Applied Mathematics Class 12 Handbook, Unit 2, Section 2.3.',
            keyFormulas: [
              'D = |[a₁, b₁], [a₂, b₂]|',
              'x = D_x / D,  y = D_y / D,  z = D_z / D',
              'Unique solution ⟺ D ≠ 0'
            ]
          }
        ]
      },
      {
        id: 'app-sub-3-2',
        title: '3.2 Leontief Input-Output Economic Model',
        sections: [
          {
            id: 'app-sec-3-2',
            title: 'Leontief Input-Output Analysis & Hawkins-Simon Conditions',
            explanation: 'The Leontief Input-Output model represents an economy with interdependent sectors. Let A be the input-coefficient technology matrix and D be the final consumer demand vector. Total output vector X satisfies X = AX + D, which yields (I - A)X = D ⟹ X = (I - A)⁻¹D. The system is viable if Hawkins-Simon conditions are satisfied: (1) Determinant |I - A| > 0, and (2) Every diagonal entry of (I - A) is positive: (1 - a_{ii}) > 0.',
            questionFraming: 'Given technology matrix A = [[0.2, 0.3], [0.4, 0.1]] and final demand D = [100, 200]ᵀ, check the Hawkins-Simon conditions and find gross output X.',
            textbookRef: 'CBSE Applied Mathematics Class 12 Handbook, Unit 2, Section 2.4 (High yield 5-mark question).',
            keyFormulas: [
              'Leontief Balance Eq: X = (I - A)⁻¹ D',
              'Hawkins-Simon Condition 1: |I - A| > 0',
              'Hawkins-Simon Condition 2: (1 - a_{11}) > 0 and (1 - a_{22}) > 0'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'app-ch-4',
    number: 4,
    title: 'Calculus in Business and Economics',
    tag: 'Calculus',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'app-sub-4-1',
        title: '4.1 Marginal Cost, Marginal Revenue & Profit Maximization',
        sections: [
          {
            id: 'app-sec-4-1',
            title: 'Marginal Analysis & Optimum Production Level',
            explanation: 'Total Cost function C(x) produces Marginal Cost MC = dC/dx and Average Cost AC = C(x)/x. Total Revenue R(x) = p · x yields Marginal Revenue MR = dR/dx. Profit function Π(x) = R(x) - C(x). Profit is maximized when: (1) First order condition: dΠ/dx = 0 ⟹ MR = MC, and (2) Second order condition: d²Π/dx² < 0 ⟹ d(MR)/dx < d(MC)/dx.',
            questionFraming: 'If the total cost function is C(x) = 500 + 13x + 1.2x² and demand function is p = 50 - x, find output x that maximizes profit.',
            textbookRef: 'CBSE Applied Mathematics Class 12 Handbook, Unit 3, Section 3.2.',
            keyFormulas: [
              'Marginal Cost: MC = dC/dx',
              'Average Cost: AC = C(x) / x',
              'Marginal Revenue: MR = dR/dx',
              'Profit Maximization: MR = MC and d²Π/dx² < 0'
            ]
          }
        ]
      },
      {
        id: 'app-sub-4-2',
        title: '4.2 Consumer Surplus and Producer Surplus via Integration',
        sections: [
          {
            id: 'app-sec-4-2',
            title: 'Economic Surplus at Market Equilibrium',
            explanation: 'At equilibrium price p₀ and quantity x₀ where demand equals supply: Consumer Surplus (CS) represents the net benefit to consumers: CS = ∫_0^{x₀} f(x) dx - p₀x₀ (where p = f(x) is the demand curve). Producer Surplus (PS) represents the gain to producers: PS = p₀x₀ - ∫_0^{x₀} g(x) dx (where p = g(x) is the supply curve).',
            questionFraming: 'Find the consumer surplus and producer surplus under pure competition for demand p = 16 - x² and supply p = 2x² + 4.',
            textbookRef: 'CBSE Applied Mathematics Class 12 Handbook, Unit 3, Section 3.5.',
            keyFormulas: [
              'Equilibrium: Demand = Supply ⟹ (x₀, p₀)',
              'Consumer Surplus: CS = ∫_0^{x₀} p_d(x) dx - p₀x₀',
              'Producer Surplus: PS = p₀x₀ - ∫_0^{x₀} p_s(x) dx'
            ]
          }
        ]
      }
    ]
  }
];

export const APPLIED_MATHS_CHAPTERS_VOL2 = [
  {
    id: 'app-ch-5',
    number: 5,
    title: 'Probability Distributions',
    tag: 'Probability',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'app-sub-5-1',
        title: '5.1 Binomial Distribution & Poisson Distribution',
        sections: [
          {
            id: 'app-sec-5-1',
            title: 'Binomial and Poisson Probability Laws',
            explanation: 'Binomial Distribution B(n, p): n independent Bernoulli trials with probability of success p and failure q = 1 - p. P(X = r) = ⁿC_r p^r q^{n-r}. Mean μ = np, Variance σ² = npq. Poisson Distribution Pois(λ): limiting case of binomial as n → ∞ and p → 0 such that np = λ (constant). P(X = r) = (e^{-λ} λ^r) / r!. Mean = Variance = λ.',
            questionFraming: 'An insurance company finds 0.02% of people die from a rare disease. For 10,000 policyholders, find probability that exactly 3 claim using Poisson distribution.',
            textbookRef: 'CBSE Applied Mathematics Class 12 Handbook, Unit 4, Section 4.2.',
            keyFormulas: [
              'Binomial: P(X = r) = ⁿC_r p^r (1-p)^{n-r}',
              'Binomial Mean = np, Variance = np(1-p)',
              'Poisson: P(X = r) = (e^{-λ} · λ^r) / r!',
              'Poisson Mean = Variance = λ'
            ]
          }
        ]
      },
      {
        id: 'app-sub-5-2',
        title: '5.2 Normal Distribution & Standard Normal Variate (Z)',
        sections: [
          {
            id: 'app-sec-5-2',
            title: 'Bell-Shaped Normal Curve & Z-Score Transformation',
            explanation: 'The Normal Distribution N(μ, σ²) is a continuous, symmetric, bell-shaped distribution. Mean = Median = Mode = μ. Standard Normal Variate Z = (X - μ) / σ has μ_Z = 0 and σ_Z = 1. Empirical Rule: 68.27% of values lie in [μ - σ, μ + σ], 95.45% in [μ - 2σ, μ + 2σ], and 99.73% in [μ - 3σ, μ + 3σ]. Probabilities are evaluated using standard normal Z-tables.',
            questionFraming: 'Scores in an exam are normally distributed with mean 70 and standard deviation 10. Find the percentage of students scoring above 85.',
            textbookRef: 'CBSE Applied Mathematics Class 12 Handbook, Unit 4, Section 4.3.',
            keyFormulas: [
              'Standard Normal: Z = (X - μ) / σ',
              'P(μ - σ < X < μ + σ) ≈ 0.6827',
              'P(μ - 2σ < X < μ + 2σ) ≈ 0.9545',
              'P(μ - 3σ < X < μ + 3σ) ≈ 0.9973'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'app-ch-6',
    number: 6,
    title: 'Inferential Statistics & Hypothesis Testing',
    tag: 'Statistics',
    available: true,
    isExamPortion: false,
    subchapters: [
      {
        id: 'app-sub-6-1',
        title: '6.1 Population, Sample & t-Test/z-Test for Means',
        sections: [
          {
            id: 'app-sec-6-1',
            title: 'Hypothesis Testing: Null and Alternative Hypotheses',
            explanation: 'Null hypothesis H₀ assumes no significant effect; alternative hypothesis H₁ posits a significant effect. Standard Error of sample mean: SE = σ / √n. Test statistic for large sample (n ≥ 30): z = (x̄ - μ) / (σ / √n). For small sample (n < 30) with unknown variance: Student\'s t-statistic t = (x̄ - μ) / (s / √n) with degrees of freedom df = n - 1.',
            questionFraming: 'A sample of 100 bulbs has a mean lifetime of 1200 hours and standard deviation 60 hours. Test at 5% significance level whether population mean is 1215 hours.',
            textbookRef: 'CBSE Applied Mathematics Class 12 Handbook, Unit 5, Section 5.3.',
            keyFormulas: [
              'Standard Error: SE = σ / √n',
              'Large Sample Test: z = (x̄ - μ₀) / (σ / √n)',
              'Small Sample t-Test: t = (x̄ - μ₀) / (s / √n)  [df = n - 1]',
              'Decision Rule: Reject H₀ if |z_cal| > z_critical'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'app-ch-7',
    number: 7,
    title: 'Financial Mathematics',
    tag: 'Finance',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'app-sub-7-1',
        title: '7.1 Perpetuity, Sinking Funds & Bond Valuation',
        sections: [
          {
            id: 'app-sec-7-1',
            title: 'Perpetuity & Sinking Fund Formulations',
            explanation: 'Perpetuity is an annuity whose periodic payments continue forever. Present value of perpetuity of payment R at periodic interest rate i is PV = R / i. If payments grow at constant rate g: PV = R / (i - g). Sinking Fund is a fund created by periodically setting aside amounts R to accumulate a specific future target amount A: R = (A · i) / [(1 + i)ⁿ - 1]. Bond Valuation computes intrinsic price as PV of coupon annuity plus PV of face value redemption.',
            questionFraming: 'Find the amount to be deposited annually in a sinking fund earning 8% compounded annually to accumulate Rs 5,00,000 in 10 years.',
            textbookRef: 'CBSE Applied Mathematics Class 12 Handbook, Unit 6, Sections 6.1 and 6.2.',
            keyFormulas: [
              'Perpetuity: PV = R / i',
              'Growing Perpetuity: PV = R / (i - g)',
              'Sinking Fund Deposit: R = (A · i) / [(1 + i)ⁿ - 1]',
              'Future Value of Annuity: A = R · [((1 + i)ⁿ - 1) / i]'
            ]
          }
        ]
      },
      {
        id: 'app-sub-7-2',
        title: '7.2 Loan EMI (Reducing Balance Method) & CAGR',
        sections: [
          {
            id: 'app-sec-7-2',
            title: 'Equated Monthly Installment (EMI) & CAGR Formulation',
            explanation: 'Under the Reducing Balance Method, the Equated Monthly Installment (EMI) for loan principal P, monthly interest rate r = R/(12 × 100), and tenure n months is: E = P · r · [(1 + r)ⁿ / ((1 + r)ⁿ - 1)]. Compound Annual Growth Rate (CAGR) measures mean annual return over multiple periods: CAGR = (V_{final} / V_{initial})^{1/t} - 1.',
            questionFraming: 'Calculate the monthly EMI on a personal loan of Rs 3,00,000 for 3 years at 12% p.a. reducing interest.',
            textbookRef: 'CBSE Applied Mathematics Class 12 Handbook, Unit 6, Section 6.4 (Very high frequency board numerical).',
            keyFormulas: [
              'EMI: E = P · r · [(1 + r)ⁿ] / [(1 + r)ⁿ - 1]',
              'Total Payment: n · E,  Total Interest = n · E - P',
              'CAGR: (V_{end} / V_{beg})^{1/t} - 1',
              'Nominal vs Effective Rate: r_{eff} = (1 + r/m)^m - 1'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'app-ch-8',
    number: 8,
    title: 'Linear Programming Problems (Applied)',
    tag: 'Optimization',
    available: true,
    isExamPortion: true,
    subchapters: [
      {
        id: 'app-sub-8-1',
        title: '8.1 Manufacturing, Diet & Transportation LPP Models',
        sections: [
          {
            id: 'app-sec-8-1',
            title: 'Formulation and Graphical Optimization of Business LPP',
            explanation: 'Business LPP models formulate allocation of scarce resources (machine hours, raw material, labour) to maximize profit or minimize operating costs. The Corner Point Method locates optimal coordinates by solving intersection of boundary constraint lines.',
            questionFraming: 'A company manufactures two types of products A and B requiring lathe and grinder machines. Formulate LPP and maximize profit graphically.',
            textbookRef: 'CBSE Applied Mathematics Class 12 Handbook, Unit 7, Section 7.2.',
            keyFormulas: [
              'Maximize / Minimize: Z = c₁x₁ + c₂x₂',
              'Subject to: a₁x₁ + b₁x₂ ≤ k₁, x₁, x₂ ≥ 0',
              'Evaluate Z at each extreme vertex of feasible polygon'
            ]
          }
        ]
      }
    ]
  }
];
