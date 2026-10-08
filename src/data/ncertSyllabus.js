import { PHYSICS_CHAPTERS } from './physicsNotes.js';
import { CHEMISTRY_CHAPTERS } from './chemistryNotes.js';
import { BIOLOGY_CHAPTERS } from './biologyNotes.js';
import { PSYCHOLOGY_CHAPTERS } from './psychologyNotes.js';
import { MATHS_CHAPTERS_VOL1, MATHS_CHAPTERS_VOL2 } from './mathsNotes.js';
import { APPLIED_MATHS_CHAPTERS_VOL1, APPLIED_MATHS_CHAPTERS_VOL2 } from './appliedMathsNotes.js';
import { ENGLISH_CHAPTERS_FLAMINGO, ENGLISH_CHAPTERS_VISTAS, ENGLISH_CHAPTERS_WRITING } from './englishNotes.js';

export const EXAM_PORTIONS = {
  physics: ['phy-ch-1', 'phy-ch-2', 'phy-ch-3', 'phy-ch-4', 'phy-ch-5', 'phy-ch-6', 'phy-ch-7', 'phy-ch-8'],
  biology: ['bio-ch-1', 'bio-ch-2', 'bio-ch-3', 'bio-ch-4', 'bio-ch-5', 'bio-ch-6', 'bio-ch-7', 'bio-ch-8'],
  chemistry: ['chem-ch-1', 'chem-ch-2', 'chem-ch-4', 'chem-ch-6', 'chem-ch-7'],
  psychology: ['psy-ch-1', 'psy-ch-2', 'psy-ch-3'],
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
        subtitle: 'Electrostatics, Current, Magnetism, EMI & AC (Exam Portions 1-8)',
        chapters: PHYSICS_CHAPTERS
      },
      {
        id: 'phy-vol-2',
        title: 'NCERT Physics Volume 2',
        subtitle: 'Ray Optics, Wave Optics, Dual Nature, Atoms, Nuclei, Semiconductors',
        chapters: [
          { id: 'phy-ch-9', number: 9, title: 'Ray Optics and Optical Instruments', tag: 'Optics', available: false, isExamPortion: false },
          { id: 'phy-ch-10', number: 10, title: 'Wave Optics', tag: 'Optics', available: false, isExamPortion: false },
          { id: 'phy-ch-11', number: 11, title: 'Dual Nature of Radiation and Matter', tag: 'Modern Physics', available: false, isExamPortion: false },
          { id: 'phy-ch-12', number: 12, title: 'Atoms', tag: 'Modern Physics', available: false, isExamPortion: false },
          { id: 'phy-ch-13', number: 13, title: 'Nuclei', tag: 'Modern Physics', available: false, isExamPortion: false },
          { id: 'phy-ch-14', number: 14, title: 'Semiconductor Electronics: Materials, Devices and Simple Circuits', tag: 'Electronics', available: false, isExamPortion: false }
        ]
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
        title: 'NCERT Chemistry Volume 1',
        subtitle: 'Solutions, Electrochemistry, Kinetics, d & f-Block, Coordination',
        chapters: [
          CHEMISTRY_CHAPTERS[0], // Solutions
          CHEMISTRY_CHAPTERS[1], // Electrochemistry
          { id: 'chem-ch-3', number: 3, title: 'Chemical Kinetics', tag: 'Physical Chemistry', available: false, isExamPortion: false },
          CHEMISTRY_CHAPTERS[2], // d & f Block
          { id: 'chem-ch-5', number: 5, title: 'Coordination Compounds', tag: 'Inorganic Chemistry', available: false, isExamPortion: false }
        ]
      },
      {
        id: 'chem-vol-2',
        title: 'NCERT Chemistry Volume 2',
        subtitle: 'Haloalkanes, Alcohols, Aldehydes, Amines, Biomolecules',
        chapters: [
          CHEMISTRY_CHAPTERS[3], // Haloalkanes
          CHEMISTRY_CHAPTERS[4], // Alcohols, Phenols & Ethers
          { id: 'chem-ch-8', number: 8, title: 'Aldehydes, Ketones and Carboxylic Acids', tag: 'Organic Chemistry', available: false, isExamPortion: false },
          { id: 'chem-ch-9', number: 9, title: 'Amines', tag: 'Organic Chemistry', available: false, isExamPortion: false },
          { id: 'chem-ch-10', number: 10, title: 'Biomolecules', tag: 'Organic Chemistry', available: false, isExamPortion: false }
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
        subtitle: 'Reproduction, Genetics, Evolution, Health & Microbes (Exam Portions 1-8)',
        chapters: BIOLOGY_CHAPTERS
      },
      {
        id: 'bio-vol-2',
        title: 'NCERT Biology Volume 2',
        subtitle: 'Biotechnology & Ecology (Chapters 9-13)',
        chapters: [
          { id: 'bio-ch-9', number: 9, title: 'Biotechnology: Principles and Processes', tag: 'Biotechnology', available: false, isExamPortion: false },
          { id: 'bio-ch-10', number: 10, title: 'Biotechnology and its Applications', tag: 'Biotechnology', available: false, isExamPortion: false },
          { id: 'bio-ch-11', number: 11, title: 'Organisms and Populations', tag: 'Ecology', available: false, isExamPortion: false },
          { id: 'bio-ch-12', number: 12, title: 'Ecosystem', tag: 'Ecology', available: false, isExamPortion: false },
          { id: 'bio-ch-13', number: 13, title: 'Biodiversity and Conservation', tag: 'Ecology', available: false, isExamPortion: false }
        ]
      }
    ]
  },
  psychology: {
    id: 'psychology',
    name: 'Psychology',
    code: '037',
    accentColor: '#8E44AD',
    description: 'Intelligence, Self & Personality, Life Challenges, Psychological Disorders & Therapeutic Approaches',
    volumes: [
      {
        id: 'psy-vol-1',
        title: 'NCERT Psychology Volume 1',
        subtitle: 'Intelligence, Self & Personality, Stress & Life Challenges (Exam Portions 1-3)',
        chapters: PSYCHOLOGY_CHAPTERS
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
