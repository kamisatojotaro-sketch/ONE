import { PHYSICS_CHAPTERS } from './physicsNotes';
import { CHEMISTRY_CHAPTERS } from './chemistryNotes';
import { BIOLOGY_CHAPTERS } from './biologyNotes';

export const EXAM_PORTIONS = {
  physics: ['phy-ch-1', 'phy-ch-2', 'phy-ch-3', 'phy-ch-4', 'phy-ch-5', 'phy-ch-6', 'phy-ch-7', 'phy-ch-8'],
  biology: ['bio-ch-1', 'bio-ch-2', 'bio-ch-3', 'bio-ch-4', 'bio-ch-5', 'bio-ch-6'],
  chemistry: ['chem-ch-1', 'chem-ch-2', 'chem-ch-4', 'chem-ch-6', 'chem-ch-7']
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
        subtitle: 'Reproduction, Genetics & Evolution (Exam Portions 1-6)',
        chapters: BIOLOGY_CHAPTERS
      },
      {
        id: 'bio-vol-2',
        title: 'NCERT Biology Volume 2',
        subtitle: 'Health, Microbes, Biotechnology & Ecology',
        chapters: [
          { id: 'bio-ch-7', number: 7, title: 'Human Health and Disease', tag: 'Health', available: false, isExamPortion: false },
          { id: 'bio-ch-8', number: 8, title: 'Microbes in Human Welfare', tag: 'Microbiology', available: false, isExamPortion: false },
          { id: 'bio-ch-9', number: 9, title: 'Biotechnology: Principles and Processes', tag: 'Biotechnology', available: false, isExamPortion: false },
          { id: 'bio-ch-10', number: 10, title: 'Biotechnology and its Applications', tag: 'Biotechnology', available: false, isExamPortion: false },
          { id: 'bio-ch-11', number: 11, title: 'Organisms and Populations', tag: 'Ecology', available: false, isExamPortion: false },
          { id: 'bio-ch-12', number: 12, title: 'Ecosystem', tag: 'Ecology', available: false, isExamPortion: false },
          { id: 'bio-ch-13', number: 13, title: 'Biodiversity and Conservation', tag: 'Ecology', available: false, isExamPortion: false }
        ]
      }
    ]
  }
};
