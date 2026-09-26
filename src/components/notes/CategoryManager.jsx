import { Hash } from 'lucide-react';

const CATEGORY_COLORS = {
  Physics: '#5B7B9A',
  Math: '#7B6B8D',
  Chemistry: '#5A8F7B',
  CS: 'var(--accent-primary)',
  General: 'var(--badge-mixed-bg)'
};

export default function CategoryManager({ categories, counts, activeCategory, onSelect }) {
  const getCategoryColor = (cat) => CATEGORY_COLORS[cat] || 'var(--text-muted)';

  return (
    <div className="bg-bg-surface border border-border-default rounded-xl p-5 shadow-sm sticky top-6">
      <h3 className="font-serif text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
        <Hash size={18} className="text-text-muted" />
        Categories
      </h3>
      
      <div className="space-y-1">
        <button
          onClick={() => onSelect(null)}
          className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center justify-between transition-colors ${!activeCategory ? 'bg-bg-elevated text-text-primary font-medium' : 'text-text-secondary hover:bg-bg-surface-hover hover:text-text-primary'}`}
        >
          <span className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-border-default"></span>
            All Notes
          </span>
          <span className="text-xs bg-bg-base px-2 py-0.5 rounded-full border border-border-subtle">
            {Object.values(counts).reduce((a,b)=>a+b, 0)}
          </span>
        </button>
        
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center justify-between transition-colors ${activeCategory === cat ? 'bg-bg-elevated text-text-primary font-medium' : 'text-text-secondary hover:bg-bg-surface-hover hover:text-text-primary'}`}
          >
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: getCategoryColor(cat) }}></span>
              {cat}
            </span>
            <span className="text-xs bg-bg-base px-2 py-0.5 rounded-full border border-border-subtle">
              {counts[cat] || 0}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
