import { PHYSICS_CHAPTERS } from './physicsNotes.js';
import { PHYSICS_CHAPTERS_VOL2 } from './physicsVol2Notes.js';
import { CHEMISTRY_CHAPTERS } from './chemistryNotes.js';
import { CHEMISTRY_CHAPTERS_REMAINING } from './chemistryRemainingNotes.js';
import { BIOLOGY_CHAPTERS } from './biologyNotes.js';
import { BIOLOGY_CHAPTERS_VOL2 } from './biologyVol2Notes.js';
import { PSYCHOLOGY_CHAPTERS } from './psychologyNotes.js';
import { MATHS_CHAPTERS_VOL1, MATHS_CHAPTERS_VOL2 } from './mathsNotes.js';
import { APPLIED_MATHS_CHAPTERS_VOL1, APPLIED_MATHS_CHAPTERS_VOL2 } from './appliedMathsNotes.js';
import { ENGLISH_CHAPTERS_FLAMINGO, ENGLISH_CHAPTERS_VISTAS, ENGLISH_CHAPTERS_WRITING } from './englishNotes.js';

export const EXAM_PORTIONS = {
  physics: [
    'phy-ch-1', 'phy-ch-2', 'phy-ch-3', 'phy-ch-4', 'phy-ch-5', 'phy-ch-6', 'phy-ch-7', 'phy-ch-8',
    'phy-ch-9', 'phy-ch-10', 'phy-ch-11', 'phy-ch-12', 'phy-ch-13', 'phy-ch-14'
  ],
  biology: [
    'bio-ch-1', 'bio-ch-2', 'bio-ch-3', 'bio-ch-4', 'bio-ch-5', 'bio-ch-6', 'bio-ch-7', 'bio-ch-8',
    'bio-ch-9', 'bio-ch-10', 'bio-ch-11', 'bio-ch-12', 'bio-ch-13'
  ],
  chemistry: [
    'chem-ch-1', 'chem-ch-2', 'chem-ch-3', 'chem-ch-4', 'chem-ch-5',
    'chem-ch-6', 'chem-ch-7', 'chem-ch-8', 'chem-ch-9', 'chem-ch-10'
  ],
  psychology: ['psy-ch-1', 'psy-ch-2', 'psy-ch-3', 'psy-ch-4', 'psy-ch-5', 'psy-ch-6', 'psy-ch-7'],
  standard_maths: ['math-ch-3', 'math-ch-4', 'math-ch-5', 'math-ch-6', 'math-ch-7', 'math-ch-10', 'math-ch-11', 'math-ch-13'],
  applied_maths: ['app-ch-1', 'app-ch-3', 'app-ch-4', 'app-ch-5', 'app-ch-7', 'app-ch-8'],
  english: [
    'eng-ch-1', 'eng-ch-2', 'eng-ch-3', 'eng-ch-4', 'eng-ch-5', 
    'eng-ch-6', 'eng-ch-7', 'eng-ch-8', 
    'eng-ch-9', 'eng-ch-10', 'eng-ch-11', 
    'eng-ch-12', 'eng-ch-13', 'eng-ch-14', 'eng-ch-15', 'eng-ch-16'
  ]
};

export const NCERT_SYLLABUS = {
  physics: {
    id: 'physics',
    name: 'Physics',
    code: '042',
    accentColor: '#5B7B9A',
    description: 'Electrostatics, Current, Magnetism, EMI, AC, Optics & Modern Physics',
    volumes: [
      {
        id: 'phy-vol-1',
        title: 'NCERT Physics Volume 1',
        subtitle: 'Electrostatics, Current, Magnetism, EMI, AC & EM Waves (Chapters 1–8)',
        chapters: PHYSICS_CHAPTERS
      },
      {
        id: 'phy-vol-2',
        title: 'NCERT Physics Volume 2',
        subtitle: 'Ray Optics, Wave Optics, Dual Nature, Atoms, Nuclei & Semiconductors (Chapters 9–14)',
        chapters: PHYSICS_CHAPTERS_VOL2
      }
    ]
  },
  chemistry: {
    id: 'chemistry',
    name: 'Chemistry',
    code: '043',
    accentColor: '#C75B3B',
    description: 'Physical, Inorganic and Organic Chemistry',
    volumes: [
      {
        id: 'chem-vol-1',
        title: 'NCERT Chemistry Volume 1 (Physical & Inorganic)',
        subtitle: 'Solutions, Electrochemistry, Chemical Kinetics, d & f-Block, Coordination Compounds (Ch 1–5)',
        chapters: [
          CHEMISTRY_CHAPTERS[0], // Solutions
          CHEMISTRY_CHAPTERS[1], // Electrochemistry
          CHEMISTRY_CHAPTERS_REMAINING['chem-ch-3'], // Chemical Kinetics
          CHEMISTRY_CHAPTERS[2], // d & f Block
          CHEMISTRY_CHAPTERS_REMAINING['chem-ch-5']  // Coordination Compounds
        ]
      },
      {
        id: 'chem-vol-2',
        title: 'NCERT Chemistry Volume 2 (Organic Chemistry)',
        subtitle: 'Haloalkanes, Alcohols/Phenols/Ethers, Aldehydes/Ketones/Acids, Amines, Biomolecules (Ch 6–10)',
        chapters: [
          CHEMISTRY_CHAPTERS[3], // Haloalkanes
          CHEMISTRY_CHAPTERS[4], // Alcohols, Phenols & Ethers
          CHEMISTRY_CHAPTERS_REMAINING['chem-ch-8'], // Aldehydes, Ketones & Carboxylic Acids
          CHEMISTRY_CHAPTERS_REMAINING['chem-ch-9'], // Amines
          CHEMISTRY_CHAPTERS_REMAINING['chem-ch-10'] // Biomolecules
        ]
      }
    ]
  },
  biology: {
    id: 'biology',
    name: 'Biology',
    code: '044',
    accentColor: '#6B7F5E',
    description: 'Reproduction, Genetics, Evolution, Biotechnology & Ecology',
    volumes: [
      {
        id: 'bio-vol-1',
        title: 'NCERT Biology Volume 1',
        subtitle: 'Reproduction, Genetics, Evolution, Human Health & Microbes (Chapters 1–8)',
        chapters: BIOLOGY_CHAPTERS
      },
      {
        id: 'bio-vol-2',
        title: 'NCERT Biology Volume 2',
        subtitle: 'Biotechnology Principles & Applications, Organisms, Ecosystem & Biodiversity (Chapters 9–13)',
        chapters: BIOLOGY_CHAPTERS_VOL2
      }
    ]
  },
  psychology: {
    id: 'psychology',
    name: 'Psychology',
    code: '037',
    accentColor: '#8E44AD',
    description: 'Intelligence, Self & Personality, Life Challenges, Psychological Disorders, Therapies, Attitude & Group Processes',
    volumes: [
      {
        id: 'psy-vol-1',
        title: 'NCERT Psychology Part 1 (Foundations & Stress)',
        subtitle: 'Intelligence, Self & Personality, Meeting Life Challenges (Chapters 1–3)',
        chapters: PSYCHOLOGY_CHAPTERS.slice(0, 3)
      },
      {
        id: 'psy-vol-2',
        title: 'NCERT Psychology Part 2 (Clinical & Social Psychology)',
        subtitle: 'Psychological Disorders, Therapeutic Approaches, Attitude & Social Cognition, Group Processes (Chapters 4–7)',
        chapters: PSYCHOLOGY_CHAPTERS.slice(3)
      }
    ]
  },
  standard_maths: {
    id: 'standard_maths',
    name: 'Standard Mathematics',
    code: '041',
    accentColor: '#2563EB',
    description: 'Relations, Matrices, Determinants, Calculus, Vectors, 3D Geometry & Probability',
    volumes: [
      {
        id: 'math-vol-1',
        title: 'NCERT Mathematics Volume 1',
        subtitle: 'Relations, Inverse Trig, Matrices, Determinants, Continuity & Applications (Exam Portions 3-6)',
        chapters: MATHS_CHAPTERS_VOL1
      },
      {
        id: 'math-vol-2',
        title: 'NCERT Mathematics Volume 2',
        subtitle: 'Integrals, Differential Equations, Vectors, 3D Geometry & Probability (Exam Portions 7, 10, 11, 13)',
        chapters: MATHS_CHAPTERS_VOL2
      }
    ]
  },
  applied_maths: {
    id: 'applied_maths',
    name: 'Applied Mathematics',
    code: '241',
    accentColor: '#059669',
    description: 'Numbers & Modulo, Economics Algebra, Business Calculus, Probability & Financial Math',
    volumes: [
      {
        id: 'app-vol-1',
        title: 'CBSE Applied Mathematics Volume 1',
        subtitle: 'Modulo Numbers, Inequalities, Economic Matrices & Business Calculus (Exam Portions 1, 3, 4)',
        chapters: APPLIED_MATHS_CHAPTERS_VOL1
      },
      {
        id: 'app-vol-2',
        title: 'CBSE Applied Mathematics Volume 2',
        subtitle: 'Probability Distributions, Inferential Stats, Financial Mathematics & LPP (Exam Portions 5, 7, 8)',
        chapters: APPLIED_MATHS_CHAPTERS_VOL2
      }
    ]
  },
  english: {
    id: 'english',
    name: 'English Core',
    code: '301',
    accentColor: '#D97706',
    description: 'Flamingo Prose & Poetry, Vistas Supplementary Reader, Unseen Passages & Advanced Writing Skills',
    volumes: [
      {
        id: 'eng-vol-1',
        title: 'Flamingo (Prose & Poetry)',
        subtitle: 'The Last Lesson, Lost Spring, Deep Water, Rattrap, Indigo, My Mother at 66, Keeping Quiet, A Thing of Beauty',
        chapters: ENGLISH_CHAPTERS_FLAMINGO
      },
      {
        id: 'eng-vol-2',
        title: 'Vistas (Supplementary Reader)',
        subtitle: 'The Third Level, The Tiger King, Journey to the End of the Earth',
        chapters: ENGLISH_CHAPTERS_VISTAS
      },
      {
        id: 'eng-vol-3',
        title: 'Reading & Creative Writing Skills',
        subtitle: 'Unseen Passages, Notice Writing, Invitations & Replies, Letter to Editor, Job Application with Bio-Data',
        chapters: ENGLISH_CHAPTERS_WRITING
      }
    ]
  }
};
