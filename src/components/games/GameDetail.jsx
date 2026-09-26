import React, { useState, useEffect } from 'react';
import { X, Star, Clock, Calendar, Trash2 } from 'lucide-react';

const STATUSES = ['playing', 'completed', 'dropped', 'backlog', 'on_hold'];

const getStatusStyles = (status) => {
  switch (status) {
    case 'playing': return 'bg-[var(--accent-primary)] text-[var(--bg-surface)]';
    case 'completed': return 'bg-[var(--badge-highly-rec-bg)] text-[var(--badge-highly-rec-text)]';
    case 'dropped': return 'bg-[var(--badge-recommended-bg)] text-[var(--badge-recommended-text)]';
    case 'backlog': return 'bg-[var(--badge-not-rec-bg)] text-[var(--badge-not-rec-text)]';
    case 'on_hold': return 'bg-[var(--badge-mixed-bg)] text-[var(--badge-mixed-text)]';
    default: return 'bg-[var(--border-default)] text-[var(--text-secondary)]';
  }
};

export function GameDetail({ game, isOpen, onClose, onUpdate, onDelete }) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (game) setFormData(game);
  }, [game]);

  if (!isOpen || !game) return null;

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleBlur = () => {
    onUpdate(game.id, formData);
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to remove ${game.title} from your library?`)) {
      onDelete(game.id);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/50 backdrop-blur-sm">
      <div className="bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-2xl w-full max-w-4xl h-[90vh] flex flex-col md:flex-row overflow-hidden shadow-2xl relative">
        
        <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white transition-colors">
          <X size={20} />
        </button>

        {/* Left column - Cover */}
        <div className="w-full md:w-2/5 h-64 md:h-full relative bg-[var(--bg-elevated)] flex-shrink-0">
          {formData.coverUrl ? (
            <img src={formData.coverUrl} alt={formData.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[var(--text-muted)] font-serif italic">
              No Cover
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
            <h2 className="font-serif text-3xl text-white font-medium mb-2 drop-shadow-lg">{formData.title}</h2>
            <div className="flex flex-wrap gap-2 mb-2">
              {formData.platform?.map(p => (
                <span key={p} className="text-[10px] px-2 py-0.5 rounded border border-white/30 text-white/90 bg-black/30 backdrop-blur-sm">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right column - Details & Edit */}
        <div className="w-full md:w-3/5 p-6 overflow-y-auto flex flex-col gap-6">
          
          <div className="flex items-center gap-4 border-b border-[var(--border-subtle)] pb-4">
            <div className="flex-1">
              <label className="text-xs text-[var(--text-muted)] uppercase tracking-wider block mb-1">Status</label>
              <select 
                value={formData.status || 'backlog'} 
                onChange={(e) => handleChange('status', e.target.value)}
                onBlur={handleBlur}
                className={`text-sm px-3 py-1.5 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] font-medium appearance-none cursor-pointer ${getStatusStyles(formData.status)}`}
              >
                {STATUSES.map(s => (
                  <option key={s} value={s} className="bg-[var(--bg-surface)] text-[var(--text-primary)]">
                    {s.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label className="text-xs text-[var(--text-muted)] uppercase tracking-wider block mb-1">Rating</label>
              <div className="flex items-center gap-1 bg-[var(--bg-base)] px-3 py-1.5 rounded-lg border border-[var(--border-default)]">
                <Star size={14} className="text-[var(--badge-highly-rec-bg)]" />
                <input 
                  type="number" min="0" max="10" step="0.5"
                  value={formData.rating || 0}
                  onChange={(e) => handleChange('rating', parseFloat(e.target.value) || 0)}
                  onBlur={handleBlur}
                  className="w-12 bg-transparent text-sm font-medium focus:outline-none"
                />
                <span className="text-sm text-[var(--text-muted)]">/ 10</span>
              </div>
            </div>

            <div className="flex-1">
              <label className="text-xs text-[var(--text-muted)] uppercase tracking-wider block mb-1">Hours</label>
              <div className="flex items-center gap-1 bg-[var(--bg-base)] px-3 py-1.5 rounded-lg border border-[var(--border-default)]">
                <Clock size={14} className="text-[var(--text-muted)]" />
                <input 
                  type="number" min="0" step="0.5"
                  value={formData.hoursPlayed || 0}
                  onChange={(e) => handleChange('hoursPlayed', parseFloat(e.target.value) || 0)}
                  onBlur={handleBlur}
                  className="w-16 bg-transparent text-sm font-medium focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-xs text-[var(--text-muted)] uppercase tracking-wider block mb-1 flex items-center gap-1"><Calendar size={12}/> Start Date</label>
              <input 
                type="date" 
                value={formData.startDate || ''}
                onChange={(e) => handleChange('startDate', e.target.value)}
                onBlur={handleBlur}
                className="w-full bg-[var(--bg-base)] text-sm px-3 py-2 rounded-lg border border-[var(--border-default)] focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label className="text-xs text-[var(--text-muted)] uppercase tracking-wider block mb-1 flex items-center gap-1"><Calendar size={12}/> Completed</label>
              <input 
                type="date" 
                value={formData.completedDate || ''}
                onChange={(e) => handleChange('completedDate', e.target.value)}
                onBlur={handleBlur}
                className="w-full bg-[var(--bg-base)] text-sm px-3 py-2 rounded-lg border border-[var(--border-default)] focus:outline-none"
              />
            </div>
          </div>

          {formData.genres?.length > 0 && (
            <div>
              <label className="text-xs text-[var(--text-muted)] uppercase tracking-wider block mb-2">Genres</label>
              <div className="flex flex-wrap gap-2">
                {formData.genres.map(g => (
                  <span key={g} className="text-xs px-2.5 py-1 rounded-full border border-[var(--tag-border)] text-[var(--tag-text)]">
                    {g}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex-1 min-h-[150px] flex flex-col">
            <label className="text-xs text-[var(--text-muted)] uppercase tracking-wider block mb-2">Journal & Notes</label>
            <textarea
              value={formData.notes || ''}
              onChange={(e) => handleChange('notes', e.target.value)}
              onBlur={handleBlur}
              placeholder="What are your thoughts on this journey?"
              className="flex-1 w-full bg-[var(--bg-base)] border border-[var(--border-default)] rounded-xl p-4 text-[var(--text-primary)] font-serif italic text-lg leading-relaxed focus:outline-none focus:border-[var(--accent-primary)] resize-none"
            />
          </div>

          <div className="pt-4 border-t border-[var(--border-subtle)] flex justify-between items-center mt-auto">
            <div className="text-xs text-[var(--text-muted)] italic font-serif">
              Added on {new Date(formData.createdAt).toLocaleDateString()}
            </div>
            <button 
              onClick={handleDelete}
              className="text-[var(--badge-recommended-bg)] hover:bg-[var(--badge-recommended-bg)]/10 p-2 rounded-lg transition-colors"
              title="Delete Game"
            >
              <Trash2 size={18} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
