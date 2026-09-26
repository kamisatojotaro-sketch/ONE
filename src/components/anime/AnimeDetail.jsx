import React, { useState, useEffect } from 'react';
import { X, Trash2, Edit3, Save } from 'lucide-react';

const STATUS_OPTIONS = [
  { value: 'watching', label: 'Watching' },
  { value: 'completed', label: 'Completed' },
  { value: 'plan_to_watch', label: 'Plan to Watch' },
  { value: 'on_hold', label: 'On Hold' },
  { value: 'dropped', label: 'Dropped' }
];

export default function AnimeDetail({ anime, onClose, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    if (anime) setFormData(anime);
  }, [anime]);

  if (!anime || !formData) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onUpdate(anime.id, {
      ...formData,
      episodesWatched: Number(formData.episodesWatched),
      totalEpisodes: formData.totalEpisodes ? Number(formData.totalEpisodes) : null,
      rating: formData.rating ? Number(formData.rating) : null
    });
    setIsEditing(false);
  };

  const progressPercent = formData.totalEpisodes 
    ? Math.min(100, Math.round((formData.episodesWatched / formData.totalEpisodes) * 100))
    : 0;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm">
      <div className="bg-[var(--bg-surface)] border-l border-[var(--border-default)] w-full max-w-lg h-full shadow-2xl flex flex-col animate-slide-in">
        
        {/* Header Action Bar */}
        <div className="flex justify-between items-center p-4 border-b border-[var(--border-subtle)] bg-[var(--bg-base)]">
          <div className="flex gap-2">
            {!isEditing ? (
              <button onClick={() => setIsEditing(true)} className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] rounded-md transition-colors flex items-center gap-2 text-sm">
                <Edit3 size={16} /> Edit
              </button>
            ) : (
              <button onClick={handleSave} className="p-2 text-[var(--text-primary)] hover:bg-[var(--bg-surface)] rounded-md transition-colors flex items-center gap-2 text-sm font-medium">
                <Save size={16} /> Save
              </button>
            )}
            <button 
              onClick={() => { if(window.confirm('Delete this anime?')) onDelete(anime.id); }} 
              className="p-2 text-[#C75B3B] hover:bg-[#C75B3B]/10 rounded-md transition-colors flex items-center gap-2 text-sm"
            >
              <Trash2 size={16} /> Delete
            </button>
          </div>
          <button onClick={onClose} className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          
          {/* Header Info */}
          <div className="flex gap-6">
            <div className="w-32 h-48 shrink-0 rounded-lg overflow-hidden border border-[var(--border-subtle)] shadow-sm">
              {formData.coverUrl ? (
                <img src={formData.coverUrl} alt={formData.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-[var(--bg-base)] flex items-center justify-center text-xs text-[var(--text-muted)]">No Image</div>
              )}
            </div>
            
            <div className="flex-1 pt-2 space-y-3">
              <div>
                <h1 className="font-serif text-2xl text-[var(--text-primary)] leading-tight">{formData.title}</h1>
                {formData.titleJapanese && <p className="text-sm text-[var(--text-muted)] mt-1">{formData.titleJapanese}</p>}
              </div>

              {!isEditing ? (
                <>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-[var(--bg-base)] border border-[var(--border-default)]">
                      {STATUS_OPTIONS.find(o => o.value === formData.status)?.label}
                    </span>
                    {formData.rating && (
                      <span className="text-sm font-serif italic text-[var(--text-secondary)]">★ {formData.rating}/10</span>
                    )}
                  </div>
                  
                  <div className="space-y-1 pt-2">
                    <div className="flex justify-between text-xs text-[var(--text-secondary)]">
                      <span>Progress</span>
                      <span>{formData.episodesWatched} / {formData.totalEpisodes || '?'} eps</span>
                    </div>
                    {formData.totalEpisodes && (
                      <div className="h-1.5 w-full bg-[var(--bg-base)] rounded-full overflow-hidden border border-[var(--border-subtle)]">
                        <div className="h-full bg-[var(--accent-primary)] transition-all duration-500" style={{ width: `${progressPercent}%` }} />
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="space-y-3">
                  <select name="status" value={formData.status} onChange={handleChange} className="w-full px-3 py-1.5 text-sm bg-[var(--bg-base)] border border-[var(--border-default)] rounded-md">
                    {STATUS_OPTIONS.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                  </select>
                  <div className="flex items-center gap-2">
                    <input type="number" name="episodesWatched" value={formData.episodesWatched} onChange={handleChange} className="w-16 px-2 py-1 text-sm bg-[var(--bg-base)] border border-[var(--border-default)] rounded-md text-center" />
                    <span className="text-[var(--text-muted)]">/</span>
                    <input type="number" name="totalEpisodes" value={formData.totalEpisodes || ''} onChange={handleChange} placeholder="Total" className="w-16 px-2 py-1 text-sm bg-[var(--bg-base)] border border-[var(--border-default)] rounded-md text-center" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-[var(--text-secondary)]">Rating:</span>
                    <input type="number" step="0.5" max="10" min="0" name="rating" value={formData.rating || ''} onChange={handleChange} className="w-20 px-2 py-1 text-sm bg-[var(--bg-base)] border border-[var(--border-default)] rounded-md" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Tags & Meta */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[var(--text-secondary)] border-y border-[var(--border-subtle)] py-4">
            {formData.type && <div><span className="text-[var(--text-muted)] mr-1">Type:</span> {formData.type}</div>}
            {formData.season && <div><span className="text-[var(--text-muted)] mr-1">Season:</span> {formData.season}</div>}
            {(formData.genres?.length > 0) && (
              <div className="w-full mt-2">
                <div className="flex flex-wrap gap-2">
                  {formData.genres.map(g => (
                    <span key={g} className="px-2 py-0.5 rounded-full border border-[var(--border-subtle)] text-xs text-[var(--text-muted)] bg-[var(--bg-base)]">{g}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Synopsis & Notes */}
          <div className="space-y-6">
            {formData.synopsis && (
              <div className="space-y-2">
                <h3 className="font-serif text-lg text-[var(--text-primary)] flex items-center gap-2">
                  <span className="text-xs">◯</span> Synopsis
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                  {formData.synopsis}
                </p>
              </div>
            )}

            <div className="space-y-2">
              <h3 className="font-serif text-lg text-[var(--text-primary)] flex items-center gap-2">
                <span className="text-xs">◯</span> Personal Notes
              </h3>
              {!isEditing ? (
                <div className="text-sm text-[var(--text-secondary)] italic p-4 bg-[var(--bg-base)] border border-[var(--border-subtle)] rounded-lg min-h-[4rem]">
                  {formData.notes || "No notes softly written yet..."}
                </div>
              ) : (
                <textarea 
                  name="notes" 
                  value={formData.notes || ''} 
                  onChange={handleChange} 
                  rows="4" 
                  className="w-full p-3 text-sm bg-[var(--bg-base)] border border-[var(--border-default)] rounded-lg focus:border-[var(--accent-primary)] focus:outline-none"
                  placeholder="Softly note your thoughts here..."
                />
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
