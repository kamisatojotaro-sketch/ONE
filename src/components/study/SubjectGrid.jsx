import { Zap, FlaskConical, Dna, ArrowRight, CheckCircle2, Bookmark } from 'lucide-react';
import { NCERT_SYLLABUS, EXAM_PORTIONS } from '../../data/ncertSyllabus';

export default function SubjectGrid({ onSelectSubject, completedSections, completedPortionChapters }) {
  const subjects = Object.values(NCERT_SYLLABUS);

  const getSubjectIcon = (id) => {
    switch (id) {
      case 'physics':
        return <Zap size={24} className="text-[#5B7B9A]" />;
      case 'chemistry':
        return <FlaskConical size={24} className="text-[#C75B3B]" />;
      case 'biology':
        return <Dna size={24} className="text-[#6B7F5E]" />;
      default:
        return <Bookmark size={24} className="text-[var(--accent-primary)]" />;
    }
  };

  const calculateSubjectProgress = (subject) => {
    let totalSections = 0;
    let completed = 0;

    subject.volumes.forEach(vol => {
      vol.chapters.forEach(ch => {
        if (ch.subchapters) {
          ch.subchapters.forEach(sub => {
            if (sub.sections) {
              sub.sections.forEach(sec => {
                totalSections++;
                if (completedSections.includes(sec.id)) {
                  completed++;
                }
              });
            }
          });
        }
      });
    });

    if (totalSections === 0) return 0;
    return Math.round((completed / totalSections) * 100);
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      {/* Header section matching editorial theme */}
      <div className="border-b border-[var(--border-default)] pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-default)] text-xs text-[var(--text-secondary)] font-sans uppercase tracking-wider mb-4">
          <span>NCERT Class 12 Syllabus</span>
          <span>•</span>
          <span className="font-semibold text-[var(--text-accent)]">CBSE Core</span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight">
          Study Session
          <span className="font-cursive text-3xl md:text-4xl text-[var(--text-accent)] font-normal ml-3">
            quietly mastered
          </span>
        </h1>
        <p className="font-sans text-[var(--text-secondary)] mt-3 max-w-2xl text-base leading-relaxed">
          Select a subject to explore textbook volumes, study high-yield NCERT notes, track completed subtopics, and practice exam portions.
        </p>
      </div>

      {/* 3 Subject Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {subjects.map((subj) => {
          const progress = calculateSubjectProgress(subj);
          const portionChapters = EXAM_PORTIONS[subj.id] || [];
          const completedPortions = completedPortionChapters.filter(id => portionChapters.includes(id)).length;

          return (
            <div
              key={subj.id}
              onClick={() => onSelectSubject(subj.id)}
              className="group relative flex flex-col justify-between p-7 bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5 hover:border-[var(--accent-primary)] overflow-hidden"
            >
              {/* Top Row: Icon & Code */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] transition-colors group-hover:scale-105 duration-200">
                    {getSubjectIcon(subj.id)}
                  </div>
                  <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)]">
                    Code {subj.code}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors mb-2">
                  {subj.name}
                </h3>
                <p className="font-sans text-xs text-[var(--text-secondary)] line-clamp-2 leading-relaxed mb-6">
                  {subj.description}
                </p>
              </div>

              {/* Middle: Stats */}
              <div className="space-y-4 pt-4 border-t border-[var(--border-subtle)]">
                <div className="flex items-center justify-between text-xs text-[var(--text-secondary)]">
                  <span>Volumes</span>
                  <span className="font-medium text-[var(--text-primary)]">{subj.volumes.length} Books</span>
                </div>

                <div className="flex items-center justify-between text-xs text-[var(--text-secondary)]">
                  <span>Exam Portions</span>
                  <span className="font-medium text-[var(--accent-primary)] flex items-center gap-1">
                    <CheckCircle2 size={13} />
                    {completedPortions} / {portionChapters.length} Chapters
                  </span>
                </div>

                {/* Progress bar */}
                <div>
                  <div className="flex justify-between items-center text-xs font-medium mb-1.5">
                    <span className="text-[var(--text-muted)]">Notes Progress</span>
                    <span className="text-[var(--text-primary)]">{progress}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[var(--border-default)] overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500 bg-[var(--accent-primary)]"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Bottom action link */}
                <div className="pt-2 flex items-center justify-between text-xs font-medium text-[var(--accent-primary)] group-hover:text-[var(--accent-primary-hover)]">
                  <span>Open Subject Session</span>
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
