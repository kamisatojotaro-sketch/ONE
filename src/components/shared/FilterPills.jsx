export default function FilterPills({ options, selected, onChange }) {
  return (
    <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`px-4 py-1.5 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
            selected === option.value
              ? 'bg-[var(--accent-primary)] text-white border-transparent'
              : 'bg-transparent text-[var(--text-secondary)] border border-[var(--border-color)] hover:border-[var(--text-muted)]'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
