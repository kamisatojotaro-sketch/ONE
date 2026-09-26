import { Pin } from 'lucide-react';
import { format } from 'date-fns';

const CATEGORY_COLORS = {
  Physics: '#5B7B9A',
  Math: '#7B6B8D',
  Chemistry: '#5A8F7B',
  CS: 'var(--accent-primary)',
  General: 'var(--badge-mixed-bg)'
};

export default function NoteCard({ note, onClick }) {
  const getCategoryColor = (cat) => CATEGORY_COLORS[cat] || 'var(--text-muted)';

  return (
    <div 
      onClick={onClick}
      className="group relative flex flex-col p-5 bg-bg-surface border border-border-default rounded-xl cursor-pointer transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-accent-primary overflow-hidden"
    >
      {note.isPinned && (
        <div className="absolute top-4 right-4 text-accent-primary">
          <Pin size={18} fill="currentColor" className="rotate-45" />
        </div>
      )}
      
      <div className="mb-3 pr-8">
        <h3 className="font-serif text-xl font-bold text-text-primary mb-2 line-clamp-2">
          {note.title || 'Untitled Note'}
        </h3>
        <div className="flex flex-wrap gap-2 items-center">
          <span 
            className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full text-white"
            style={{ backgroundColor: getCategoryColor(note.category) }}
          >
            {note.category}
          </span>
          {note.tags?.slice(0, 2).map((tag, i) => (
            <span key={i} className="text-[10px] px-2 py-0.5 rounded-full border border-tag-border text-tag-text bg-tag-bg">
              {tag}
            </span>
          ))}
          {note.tags?.length > 2 && (
            <span className="text-[10px] px-1 text-text-muted">+{note.tags.length - 2}</span>
          )}
        </div>
      </div>

      <div className="flex-1 mb-4">
        <p className="text-sm text-text-secondary line-clamp-3 whitespace-pre-wrap font-sans leading-relaxed">
          {note.content || <span className="italic opacity-50">Empty note...</span>}
        </p>
      </div>

      <div className="mt-auto pt-3 border-t border-border-subtle flex items-center justify-between">
        <span className="font-serif italic text-xs text-text-muted">
          Updated {format(new Date(note.updatedAt), 'MMM d, yyyy')}
        </span>
      </div>
    </div>
  );
}
