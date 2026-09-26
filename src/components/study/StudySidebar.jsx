import { BookOpen, FileQuestion, CheckSquare, Target } from 'lucide-react';

export default function StudySidebar({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'NOTES', label: 'NOTES', icon: BookOpen, desc: 'Theory & High-Yield' },
    { id: 'PYQ', label: 'PYQ', icon: FileQuestion, desc: 'Previous Year Qs' },
    { id: 'MCQ', label: 'MCQ', icon: CheckSquare, desc: 'Board Practice' },
    { id: 'PORTIONS', label: 'PORTIONS', icon: Target, desc: 'Exam Tracker' }
  ];

  return (
    <aside className="w-full lg:w-56 shrink-0 flex flex-row lg:flex-col gap-2 bg-[var(--bg-surface)] border border-[var(--border-default)] p-3 rounded-2xl shadow-sm">
      <div className="hidden lg:block px-3 py-2 border-b border-[var(--border-subtle)] mb-1">
        <p className="font-cursive text-lg text-[var(--text-accent)] leading-none">Session Mode</p>
      </div>

      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const Icon = tab.icon;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex-1 lg:flex-none flex items-center gap-3 px-3.5 py-3 rounded-xl transition-all duration-200 text-left font-medium ${
              isActive
                ? 'bg-[var(--accent-primary)] text-white shadow-sm'
                : 'text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Icon size={18} className={isActive ? 'text-white' : 'text-[var(--text-muted)]'} />
            <div className="hidden sm:block">
              <span className="block text-xs font-bold tracking-wider">{tab.label}</span>
              <span className={`block text-[10px] hidden lg:block ${isActive ? 'text-white/80' : 'text-[var(--text-muted)]'}`}>
                {tab.desc}
              </span>
            </div>
            <span className="sm:hidden text-xs font-bold">{tab.label}</span>
          </button>
        );
      })}
    </aside>
  );
}
