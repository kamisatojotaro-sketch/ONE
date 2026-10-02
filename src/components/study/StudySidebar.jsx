import { BookOpen, FileQuestion, CheckSquare, Target, Sliders } from 'lucide-react';

export default function StudySidebar({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'NOTES', label: 'NOTES', icon: BookOpen, desc: 'Theory & High-Yield' },
    { id: 'PYQ', label: 'PYQ', icon: FileQuestion, desc: 'Previous Year Qs' },
    { id: 'MCQ', label: 'MCQ', icon: CheckSquare, desc: 'Board Practice' },
    { id: 'TEST_MAKER', label: 'TEST MAKER', icon: Sliders, desc: 'Custom 30-Q Mock' },
    { id: 'PORTIONS', label: 'PORTIONS', icon: Target, desc: 'Exam Tracker' }
  ];

  return (
    <aside className="w-full lg:w-56 shrink-0 flex flex-row lg:flex-col gap-1.5 sm:gap-2 bg-[var(--bg-surface)] border border-[var(--border-default)] p-1.5 sm:p-2.5 lg:p-3 rounded-2xl shadow-sm overflow-x-auto scrollbar-none touch-pan-x">
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
            className={`shrink-0 lg:shrink flex-1 lg:flex-none flex items-center justify-center lg:justify-start gap-1.5 sm:gap-3 px-2.5 py-2 sm:px-3.5 sm:py-3 rounded-xl transition-all duration-200 text-center lg:text-left font-medium cursor-pointer touch-manipulation min-w-[72px] sm:min-w-0 ${
              isActive
                ? 'bg-[var(--accent-primary)] text-white shadow-sm'
                : 'text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Icon size={16} className={`shrink-0 sm:w-[18px] sm:h-[18px] ${isActive ? 'text-white' : 'text-[var(--text-muted)]'}`} />
            <div className="hidden sm:block">
              <span className="block text-xs font-bold tracking-wider whitespace-nowrap">{tab.label}</span>
              <span className={`block text-[10px] hidden lg:block ${isActive ? 'text-white/80' : 'text-[var(--text-muted)]'}`}>
                {tab.desc}
              </span>
            </div>
            <span className="sm:hidden text-[11px] font-bold tracking-tight whitespace-nowrap">{tab.label}</span>
          </button>
        );
      })}
    </aside>
  );
}
