// NCERT Class 12 Psychology (Chapters 1–7) Structured Notes Database
// Oswaal-grade definitions, key points, mnemonics, commonly made errors, assertion-reason, and exam trends

export const PSYCHOLOGY_STRUCTURED_NOTES = {
  // ==========================================================================
  // CHAPTER 1: VARIATIONS IN PSYCHOLOGICAL ATTRIBUTES
  // ==========================================================================
  'psy-sub-1-1': {
    definitions: [
      {
        term: 'Intelligence (Wechsler, Binet & Sternberg)',
        definition: 'Binet defined intelligence as the ability to judge well, understand well, and reason well. Wechsler defined it as the global and aggregate capacity of an individual to think rationally, act purposefully, and deal effectively with their environment.'
      },
      {
        term: 'Intelligence Quotient (IQ — William Stern, 1912)',
        definition: '$\\text{IQ} = \\frac{\\text{Mental Age (MA)}}{\\text{Chronological Age (CA)}} \\times 100$. Normal average IQ range is $90$–$109$ ($50\\%$ of population); Gifted $> 130$; Intellectual Disability $< 70$.'
      }
    ],
    keyPoints: [
      '• <strong>Psychometric vs Information-Processing Approaches:</strong> Psychometric theories (Spearman $g+s$, Thurstone 7 PMAs, Guilford 180-cell SOI, Cattell Fluid vs Crystallised) view intelligence as an aggregate of abilities; Information-processing theories (Sternberg’s Triarchic Theory, Das’s PASS Model) describe the cognitive processes used in problem-solving.',
      '• <strong>Howard Gardner’s 8 Multiple Intelligences:</strong> Linguistic, Logical-Mathematical, Spatial, Musical, Bodily-Kinaesthetic, Interpersonal (understanding others), Intrapersonal (self-reflection), and Naturalistic.'
    ],
    extraPoints: [
      '• PASS Model (J.P. Das, Jack Naglieri, Kirby): Planning (frontal lobes), Attention-Arousal (brain stem/thalamus), Simultaneous & Successive Processing (occipital, parietal, temporal lobes); assessed via Cognitive Assessment System (CAS).'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Sternberg Triarchic C-E-C',
      phrase: 'C-E-C: Componential (Analytical: Meta, Performance, Knowledge) — Experiential (Creative/Novelty) — Contextual (Practical/Street-Smart)',
      explanation: 'Guaranteed 4M or 6M theory question in Chapter 1.'
    },
    commonlyMadeErrors: [
      {
        error: 'Confusing Interpersonal intelligence with Intrapersonal intelligence.',
        tip: 'INTERpersonal = understanding OTHER people’s motives/feelings (counsellors, politicians); INTRApersonal = understanding ONE’S OWN internal self and philosophy (philosophers, spiritual leaders).',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'IQ scores are distributed in the population in the form of a symmetrical bell-shaped curve called the normal curve.',
      reason: 'Most individuals in a population cluster around the mean IQ of 100, while very few score at the extreme low or high ends.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: '50% of population falls between IQ 90 and 110.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020',
      frequency: '99% Guaranteed',
      typicalMarks: '4 Marks / 6 Marks',
      questionTypes: 'Sternberg Triarchic theory, Gardner Multiple Intelligences, PASS model, IQ numerical',
      hotTopic: 'PASS Model and Sternberg Triarchic Theory'
    }
  },

  // ==========================================================================
  // CHAPTER 2: SELF AND PERSONALITY
  // ==========================================================================
  'psy-sub-2-1': {
    definitions: [
      {
        term: 'Self-Concept, Self-Esteem & Self-Efficacy (Bandura)',
        definition: 'Self-concept is the totality of perceptions and beliefs about oneself; Self-esteem is the value judgment of one’s worth; Self-efficacy (Albert Bandura) is the conviction that one can successfully execute behaviours required to produce desired outcomes.'
      },
      {
        term: 'Freud’s Structural Model (Id, Ego, Superego) & Defence Mechanisms',
        definition: 'Id operates on the Pleasure Principle (unconscious instinctual drives); Ego operates on the Reality Principle; Superego operates on the Morality Principle. Ego Defence Mechanisms reduce anxiety by distorting reality: Repression, Projection, Denial, Reaction Formation, Rationalisation.'
      }
    ],
    keyPoints: [
      '• <strong>Trait Theories:</strong> Allport (Cardinal, Central, Secondary traits), Cattell (16 Source traits vs Surface traits; 16PF), Eysenck (Extraversion vs Introversion, Neuroticism vs Emotional Stability, Psychoticism vs Sociability), Big Five OCEAN (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism).',
      '• <strong>Projective Techniques vs Self-Report Inventories:</strong> Projective tests (Rorschach 10 Inkblots, TAT 30+1 cards, Rosenzweig P-F study, Sentence Completion, Draw-a-Person) use unstructured ambiguous stimuli to bypass conscious defences and tap the unconscious mind.'
    ],
    extraPoints: [],
    reactions: [],
    oswaalMnemonic: {
      title: 'Big Five Personality Factors (OCEAN)',
      phrase: 'O-C-E-A-N: Openness to experience — Conscientiousness — Extraversion — Agreeableness — Neuroticism',
      explanation: 'Costa and McCrae Five-Factor Model of Personality.'
    },
    commonlyMadeErrors: [
      {
        error: 'Confusing Reaction Formation with Projection in case-study vignettes.',
        tip: 'Projection = attributing your own unacceptable trait to OTHERS ("everyone is greedy"); Reaction Formation = adopting the exact OPPOSITE behaviour of your true impulse (acting overly sweet toward someone you hate).',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'Projective techniques are superior to self-report inventories for assessing unconscious motives and deep-seated conflicts.',
      reason: 'In projective tests, the stimuli are unstructured and ambiguous, so the subject cannot easily fake socially desirable responses.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Bypasses conscious censorship and social desirability bias.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020, 2019',
      frequency: '99% Guaranteed',
      typicalMarks: '4 Marks / 6 Marks',
      questionTypes: 'Freud ego defence mechanisms, Psychosexual stages, Projective techniques (Rorschach & TAT), Humanistic Rogers/Maslow',
      hotTopic: 'Ego defence mechanisms & Projective vs Self-report measures'
    }
  },

  // ==========================================================================
  // CHAPTER 3: MEETING LIFE CHALLENGES
  // ==========================================================================
  'psy-sub-3-1': {
    definitions: [
      {
        term: 'Lazarus Cognitive Appraisal Theory & Selye’s GAS',
        definition: 'Lazarus states stress depends on Primary Appraisal (harm, threat, or challenge) and Secondary Appraisal (coping resources). Hans Selye’s General Adaptation Syndrome (GAS) has 3 stages: Alarm Reaction $\\to$ Resistance Stage $\\to$ Exhaustion Stage.'
      }
    ],
    keyPoints: [
      '• <strong>Coping Strategies:</strong> Endler & Parker (Task-oriented, Emotion-oriented, Avoidance-oriented); Lazarus & Folkman (Problem-focused vs Emotion-focused).',
      '• <strong>Stress-Resistant Personality (Kobasa’s Hardiness):</strong> The 3 Cs — <strong>Commitment</strong>, <strong>Control</strong>, and <strong>Challenge</strong>.'
    ],
    extraPoints: [],
    reactions: [],
    oswaalMnemonic: {
      title: 'Selye GAS Stages & Kobasa 3 Cs',
      phrase: 'GAS = A-R-E (Alarm ⟶ Resistance ⟶ Exhaustion) | Hardiness = 3 Cs (Commitment, Control, Challenge)',
      explanation: 'High-yield 3M/4M diagram and concept question.'
    },
    commonlyMadeErrors: [
      {
        error: 'Writing that parasympatic nervous system is activated during the Alarm Reaction stage of GAS.',
        tip: 'Alarm Reaction activates the SYMPATHETIC nervous system and adrenal-pituitary-cortex axis (fight-or-flight); Resistance stage attempts parasympathetic restoration.',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'Prolonged severe stress increases susceptibility to infectious diseases and psychosomatic disorders.',
      reason: 'Chronic stress releases cortisol and impairs the cytotoxicity of T-cells and Natural Killer (NK) cells in the immune system (psychoneuroimmunology).',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'White blood cell activity is suppressed under chronic stress.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020',
      frequency: '99% Guaranteed',
      typicalMarks: '3 Marks / 4 Marks',
      questionTypes: 'Selye GAS diagram & 3 stages, Lazarus primary/secondary appraisal, Endler & Parker coping',
      hotTopic: 'General Adaptation Syndrome (GAS) and Stress-Immune link'
    }
  },

  // ==========================================================================
  // CHAPTER 4: PSYCHOLOGICAL DISORDERS
  // ==========================================================================
  'psy-sub-4-1': {
    definitions: [
      {
        term: 'The Four Ds of Abnormality',
        definition: 'Psychological disorders are characterised by <strong>Deviance</strong> (different, extreme, unusual), <strong>Distress</strong> (unpleasant and upsetting to person and others), <strong>Dysfunction</strong> (interfering with daily life constructively), and <strong>Danger</strong> (to self or others).'
      },
      {
        term: 'Diathesis-Stress Model',
        definition: 'States that psychological disorders develop when a biological/genetic predisposition (<em>diathesis</em>) is triggered by a pathogenic environmental stressor.'
      }
    ],
    keyPoints: [
      '• <strong>Classification Manuals:</strong> DSM-5 (Diagnostic and Statistical Manual of Mental Disorders, published by American Psychiatric Association, APA) and ICD-10/11 (International Classification of Diseases, published by World Health Organization, WHO).',
      '• <strong>Neurotransmitter Imbalances:</strong>\n  – Low GABA ($\\gamma$-aminobutyric acid): Anxiety disorders\n  – Excess Dopamine activity: Schizophrenia\n  – Low Serotonin: Depression.'
    ],
    extraPoints: [],
    reactions: [],
    oswaalMnemonic: {
      title: 'Neurotransmitter Trio in Psychopathology',
      phrase: 'GABA Low = Anxiety | Dopamine High = Schizophrenia | Serotonin Low = Depression',
      explanation: '100% guaranteed 1-mark MCQ and 4-mark biological model point!'
    },
    commonlyMadeErrors: [
      {
        error: 'Swapping the publishers of DSM-5 (APA) and ICD-10 (WHO).',
        tip: 'DSM = American Psychiatric Association (APA); ICD = World Health Organization (WHO) — officially used in India!',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'According to the diathesis-stress model, the presence of a genetic predisposition alone is not sufficient to cause a psychological disorder.',
      reason: 'The biological diathesis must interact with a stressful environmental situation to precipitate the clinical disorder.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Both vulnerability and stressor are required.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020',
      frequency: '99% Guaranteed',
      typicalMarks: '3 Marks / 4 Marks',
      questionTypes: 'Explain 4 Ds of abnormality; explain Diathesis-Stress model and psychological models',
      hotTopic: 'Four Ds and Diathesis-Stress Model'
    }
  },
  'psy-sub-4-3': {
    definitions: [
      {
        term: 'Anxiety, OCD, Somatic Symptom & Dissociative Disorders',
        definition: 'GAD (prolonged vague, unexplained "free-floating" anxiety); Panic Disorder (frequent abrupt terror + palpitations); Phobias (specific, social, agoraphobia — fear of unfamiliar situations without escape); OCD (obsessions = persistent intrusive thoughts; compulsions = repetitive ritualistic behaviours).'
      },
      {
        term: 'Schizophrenia Spectrum: Positive, Negative & Psychomotor Symptoms',
        definition: 'Positive (pathological excesses): Delusions (persecution, reference, grandeur, control), Hallucinations (auditory most common), Formal thought disorder (derailment, neologisms). Negative (pathological deficits): Alogia (poverty of speech), Blunted/Flat affect, Avolition (apathy/inability to start tasks). Psychomotor: Catatonic stupor, rigidity, posturing.'
      }
    ],
    keyPoints: [
      '• <strong>Somatic Symptom vs Illness Anxiety vs Conversion Disorder:</strong>\n  – <em>Somatic Symptom Disorder:</em> Persistent body symptoms + excessive health worry.\n  – <em>Illness Anxiety Disorder:</em> Persistent preoccupation with developing a serious illness despite NO or minimal somatic symptoms and normal medical tests.\n  – <em>Conversion Disorder:</em> Reported loss of basic neurological function (paralysis, blindness, deafness) after stress with no organic cause.',
      '• <strong>Neurodevelopmental Disorders:</strong> ADHD (Inattention + Hyperactivity-Impulsivity), Autism Spectrum Disorder (ASD — profound social communication deficits + repetitive stereotyped behaviours), Intellectual Disability (IQ $< 70$ + adaptive deficits before age 18).'
    ],
    extraPoints: [],
    reactions: [],
    oswaalMnemonic: {
      title: 'Schizophrenia Positive vs Negative Symptoms',
      phrase: 'Positive = Added Excesses (Delusions, Hallucinations, Disorganised Speech) | Negative = Subtracted Deficits (3 As: Alogia, Avolition, Affective Flattening)',
      explanation: 'Guaranteed 6-mark case-study or long-answer question!'
    },
    commonlyMadeErrors: [
      {
        error: 'Confusing Delusions with Hallucinations.',
        tip: 'Delusions are false unshakable BELIEFS (cognitive disorder of thought content, e.g., delusion of persecution); Hallucinations are false sensory PERCEPTIONS in the absence of external stimuli (e.g., hearing voices).',
        penalty: 'Loss of 1.5 marks.'
      }
    ],
    assertionReason: {
      assertion: 'Auditory hallucinations and delusions of persecution are classified as positive symptoms of schizophrenia.',
      reason: 'Positive symptoms represent pathological excesses or bizarre additions to normal thoughts, emotions, and behaviours.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Negative symptoms represent deficits (alogia, avolition, flat affect).'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2021, 2020',
      frequency: '99% Guaranteed 6M Question',
      typicalMarks: '4 Marks / 6 Marks',
      questionTypes: 'Positive, negative, and psychomotor symptoms of Schizophrenia; Dissociative vs Somatic disorders; ADHD/Autism',
      hotTopic: 'Schizophrenia symptoms and Somatic vs Illness Anxiety vs Conversion'
    }
  },

  // ==========================================================================
  // CHAPTER 5: THERAPEUTIC APPROACHES
  // ==========================================================================
  'psy-sub-5-1': {
    definitions: [
      {
        term: 'Therapeutic Alliance',
        definition: 'The special, trusting, contractual, empathetic, and confidential partnership between the client and the psychotherapist, characterised by Unconditional Positive Regard and Empathy.'
      },
      {
        term: 'Systematic Desensitisation (Joseph Wolpe)',
        definition: 'A behaviour therapy technique for phobias based on the principle of <strong>Reciprocal Inhibition</strong> (two mutually opposing emotions cannot coexist simultaneously): combines progressive muscular relaxation with an ascending hierarchy of anxiety-provoking scenes.'
      }
    ],
    keyPoints: [
      '• <strong>Behavioural Techniques:</strong> Negative reinforcement, Aversive conditioning (pairing alcohol with nauseating drug), Token economy (operant positive reinforcement), Differential reinforcement, Systematic desensitisation, Modelling.',
      '• <strong>Cognitive Therapies:</strong>\n  1. <em>Albert Ellis’s Rational Emotive Therapy (RET):</em> **A-B-C Analysis** — Antecedent event (A) $\\to$ Irrational Belief (B, containing "musts" and "shoulds") $\\to$ Consequence (C). Therapist uses gentle **non-directive questioning** to dispute irrational beliefs.\n  2. <em>Aaron Beck’s Cognitive Therapy:</em> Childhood experiences form dysfunctional core schemas ("I am unwanted") triggered by critical incidents, producing negative automatic thoughts and cognitive distortions (overgeneralisation).',
      '• <strong>Humanistic-Existential Therapies:</strong>\n  – <em>Victor Frankl’s Logotherapy:</em> "Therapy through meaning" — spiritual unconscious, existential anxiety (neurogenic neurosis), freedom from spiritual emptiness.\n  – <em>Carl Rogers’s Client-Centred Therapy:</em> Empathy, unconditional positive regard, warmth, non-judgmental congruence.\n  – <em>Fritz Perls’s Gestalt Therapy:</em> Increasing self-awareness and bodily feelings in the present ("here and now").'
    ],
    extraPoints: [],
    reactions: [],
    oswaalMnemonic: {
      title: 'Therapist Founder Match',
      phrase: 'Wolpe = Systematic Desensitisation | Ellis = RET (ABC) | Beck = Cognitive Schemas | Frankl = Logotherapy | Rogers = Client-Centred | Perls = Gestalt',
      explanation: 'Solves 100% of matching and case-study questions in Chapter 5!'
    },
    commonlyMadeErrors: [
      {
        error: 'Mixing up Albert Ellis (RET) with Aaron Beck (Cognitive Therapy) in case-study questions.',
        tip: 'Look for keywords: "Musts/Shoulds" & "ABC analysis" = Albert Ellis (RET); "Core Schemas" & "Cognitive Distortions" = Aaron Beck!',
        penalty: 'Loss of 2 marks.'
      }
    ],
    assertionReason: {
      assertion: 'Wolpe’s systematic desensitisation works on the principle of reciprocal inhibition.',
      reason: 'The presence of a relaxation response inhibits and weakens the anxiety response evoked by a phobic stimulus.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Relaxation and anxiety are physiologically incompatible.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020, 2019',
      frequency: '99% Guaranteed 4M/6M Question',
      typicalMarks: '4 Marks / 6 Marks',
      questionTypes: 'Systematic desensitisation steps, Ellis RET vs Beck Cognitive therapy, Therapeutic alliance properties',
      hotTopic: 'RET (ABC analysis) and Systematic Desensitisation'
    }
  },

  // ==========================================================================
  // CHAPTER 6: ATTITUDE AND SOCIAL COGNITION
  // ==========================================================================
  'psy-sub-6-1': {
    definitions: [
      {
        term: 'A-B-C Components & 4 Properties of Attitudes',
        definition: 'Attitude is a state of mind with **A**ffective (emotional), **B**ehavioural (conative tendency to act), and **C**ognitive (thought/belief) components. Four properties: Valence ($+$ or $-$), Extremeness (1–5 scale), Simplicity vs Complexity (multiplexity), and Centrality.'
      },
      {
        term: 'Heider’s P-O-X Balance, Festinger’s Cognitive Dissonance & Mohsin’s Two-Step Concept',
        definition: 'Heider’s P-O-X triad is balanced when all 3 sides are positive or 2 are negative and 1 is positive. Festinger’s Cognitive Dissonance states that holding two logically inconsistent cognitions creates mental discomfort, motivating attitude change toward consonance. S.M. Mohsin’s two-step concept involves (1) Identification with admired source, and (2) Imitation of source’s behaviour.'
      }
    ],
    keyPoints: [
      '• <strong>Prejudice vs Stereotype vs Discrimination:</strong> Stereotype = Cognitive component (overgeneralised cluster of ideas about a group); Prejudice = Affective component (dislike/hatred); Discrimination = Behavioural component.',
      '• <strong>Four Sources of Prejudice:</strong> Learning, Strong social identity & in-group bias, Scapegoating (blaming minority group for majority’s frustration), Kernel of truth concept, Self-fulfilling prophecy.'
    ],
    extraPoints: [],
    reactions: [],
    oswaalMnemonic: {
      title: 'P-O-X Multiplication Sign Rule',
      phrase: 'Multiply the 3 Signs of the P-O-X Triangle: Product = (+) means BALANCED | Product = (−) means IMBALANCED (Attitude Changes!)',
      explanation: 'Three (+) or Two (−) & One (+) = Balanced (+); Three (−) or Two (+) & One (−) = Imbalanced (−)!'
    },
    commonlyMadeErrors: [
      {
        error: 'Saying a P-O-X triangle with two negative sides and one positive side is imbalanced.',
        tip: '(−) × (−) × (+) = (+), which is BALANCED ("the enemy of my enemy is my friend")!',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'According to Festinger’s theory of cognitive dissonance, dissonance motivates an individual to change one of the inconsistent cognitions.',
      reason: 'Inconsistency between two cognitions ("Pan masala causes cancer" and "I eat pan masala") produces unpleasant psychological tension.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Goal is to restore cognitive consonance.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020, 2019',
      frequency: '99% Guaranteed 4M/6M Question',
      typicalMarks: '4 Marks / 6 Marks',
      questionTypes: 'Heider P-O-X balance theory, Festinger cognitive dissonance, Mohsin two-step concept, strategies to reduce prejudice',
      hotTopic: 'Theories of attitude change (Heider, Festinger, Mohsin)'
    }
  },

  // ==========================================================================
  // CHAPTER 7: SOCIAL INFLUENCE AND GROUP PROCESSES
  // ==========================================================================
  'psy-sub-7-1': {
    definitions: [
      {
        term: "Tuckman's Five Stages of Group Formation",
        definition: 'Groups develop through 5 sequential stages: **Forming** (uncertainty, polite orientation) $\\to$ **Storming** (intragroup conflict over hierarchy/goals) $\\to$ **Norming** (shared norms and cohesive identity) $\\to$ **Performing** (focus on achieving group goal) $\\to$ **Adjourning** (disbanding after task completion).'
      },
      {
        term: 'Groupthink (Irving Janis), Social Loafing & Group Polarisation',
        definition: 'Groupthink is the deterioration of mental efficiency and moral judgment in highly cohesive groups due to pressure for unanimous consensus. Social Loafing (Latane) is reduction in individual effort when working on a collective task. Group Polarisation is strengthening of an initial group position toward extreme risk or extreme caution after discussion.'
      }
    ],
    keyPoints: [
      '• <strong>Four Elements of Group Structure:</strong> Roles (expected behaviours), Norms (unwritten "oughts"), Status (relative prestige), and Cohesiveness (togetherness/binding force).',
      '• <strong>Why Social Loafing Occurs & How to Reduce It:</strong> Occurs due to diffusion of responsibility and unidentifiable individual effort. Reduced by making each person’s effort individually identifiable, increasing task commitment, and strengthening group cohesiveness.'
    ],
    extraPoints: [
      '• Primary Group (family — face-to-face, warm, pre-existing, impermeable boundaries) vs Secondary Group (political party/club — impersonal, goal-oriented, voluntary). Formal vs Informal; In-group ("we") vs Out-group ("they").'
    ],
    reactions: [],
    oswaalMnemonic: {
      title: 'Tuckman 5 Stages Rhyme',
      phrase: 'Forming — Storming — Norming — Performing — Adjourning',
      explanation: 'Remember that Storming (conflict) comes BEFORE Norming!'
    },
    commonlyMadeErrors: [
      {
        error: 'Confusing Social Facilitation with Social Loafing or Group Polarisation with Groupthink.',
        tip: 'Social Loafing = putting in LESS effort in a collective additive task (tug-of-war/clapping); Group Polarisation = shifting toward an EXTREME decision after group discussion (due to persuasive arguments & bandwagon effect).',
        penalty: '1 mark deduction.'
      }
    ],
    assertionReason: {
      assertion: 'Extreme cohesiveness in a decision-making group can sometimes be harmful and lead to disastrous decisions.',
      reason: 'Irving Janis showed that in Groupthink, the desire for unanimity overrides critical evaluation of realistic alternatives.',
      correctOption: 'Option (a): Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
      explanation: 'Dissenters are silenced and an illusion of invulnerability develops.'
    },
    examTrend: {
      pastYears: 'CBSE 2024, 2023, 2022, 2020, 2019',
      frequency: '99% Guaranteed 4M Question',
      typicalMarks: '3 Marks / 4 Marks',
      questionTypes: 'Tuckman 5 stages, Social loafing causes & remedies, Groupthink vs Group polarisation, Primary vs Secondary groups',
      hotTopic: 'Social Loafing, Group Polarisation, and Tuckman’s 5 stages'
    }
  }
};
