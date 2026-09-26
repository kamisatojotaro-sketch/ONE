export default function EmptyState({ icon: Icon, title, description, actionLabel, onAction }) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center">
      <div className="w-16 h-16 bg-[var(--bg-elevated)] rounded-2xl flex items-center justify-center text-[var(--text-secondary)] mb-6 shadow-sm border border-[var(--border-color)]">
        <Icon size={32} />
      </div>
      <h3 className="text-2xl font-serif text-[var(--text-primary)] mb-2">{title}</h3>
      <p className="text-[var(--text-secondary)] max-w-md mb-8">{description}</p>
      
      {actionLabel && onAction && (
        <button 
          onClick={onAction}
          className="px-6 py-2 bg-[var(--accent-primary)] text-[var(--bg-main)] rounded-full hover:opacity-90 transition-opacity font-medium"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
