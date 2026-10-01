import { useState } from 'react';
import { Trash2, Edit3, Check } from 'lucide-react';
import Modal from '../shared/Modal';
import RatingInput from '../shared/RatingInput';
import StatusBadge from '../shared/StatusBadge';
import GenreTag from '../shared/GenreTag';

export default function MovieDetail({ movie, isOpen, onClose, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState(null);

  if (!movie) return null;

  const handleEditClick = () => {
    setEditForm({ ...movie });
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdate(movie.id, editForm);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${movie.title}"?`)) {
      onDelete(movie.id);
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={isEditing ? "Edit Movie" : "Movie Details"} maxWidth="max-w-4xl">
      <div className="relative -mx-6 -mt-6 mb-6 h-64 overflow-hidden rounded-t-2xl bg-[var(--bg-elevated)]">
        {movie.backdropUrl ? (
          <>
            <img src={movie.backdropUrl} alt="" referrerPolicy="no-referrer" className="w-full h-full object-cover blur-sm opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] to-transparent" />
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[var(--bg-elevated)] to-[var(--bg-surface)]" />
        )}
        <div className="absolute bottom-0 left-6 flex gap-6 translate-y-1/4">
          <div className="w-32 h-48 rounded-lg overflow-hidden shadow-xl border-2 border-[var(--bg-surface)] bg-[var(--bg-surface)]">
            {movie.posterUrl ? (
              <img src={movie.posterUrl} alt={movie.title} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[var(--text-muted)] text-center text-sm">No Poster</div>
            )}
          </div>
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          {!isEditing ? (
            <button onClick={handleEditClick} className="p-2 bg-[var(--bg-surface)] rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] shadow-sm">
              <Edit3 size={18} />
            </button>
          ) : (
            <button onClick={handleSave} className="p-2 bg-[var(--accent-primary)] text-white rounded-full hover:opacity-90 shadow-sm">
              <Check size={18} />
            </button>
          )}
          <button onClick={handleDelete} className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 shadow-sm">
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      <div className="mt-16 px-2">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-serif text-[var(--text-primary)] mb-1">{movie.title} <span className="text-[var(--text-muted)] text-xl font-sans">({movie.releaseYear || 'N/A'})</span></h1>
            <p className="text-[var(--text-secondary)]">Dir. {movie.director} • {movie.runtime ? `${movie.runtime} min` : 'Runtime unknown'}</p>
          </div>
        </div>

        {isEditing ? (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-[var(--text-secondary)] mb-1 font-serif italic">Status</label>
                <select 
                  value={editForm.status} 
                  onChange={(e) => setEditForm({...editForm, status: e.target.value})}
                  className="w-full p-2 bg-[var(--bg-elevated)] border border-[var(--border-color)] rounded-xl"
                >
                  <option value="watching">Watching</option>
                  <option value="watched">Watched</option>
                  <option value="want_to_watch">Want to Watch</option>
                  <option value="rewatching">Rewatching</option>
                  <option value="dropped">Dropped</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-[var(--text-secondary)] mb-1 font-serif italic">Rating</label>
                <RatingInput value={editForm.rating} onChange={(val) => setEditForm({...editForm, rating: val})} />
              </div>
              <div>
                <label className="block text-sm text-[var(--text-secondary)] mb-1 font-serif italic">Watch Date</label>
                <input 
                  type="date" 
                  value={editForm.watchDate || ''} 
                  onChange={(e) => setEditForm({...editForm, watchDate: e.target.value})}
                  className="w-full p-2 bg-[var(--bg-elevated)] border border-[var(--border-color)] rounded-xl"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm text-[var(--text-secondary)] mb-1 font-serif italic">Review</label>
              <textarea 
                value={editForm.review || ''} 
                onChange={(e) => setEditForm({...editForm, review: e.target.value})}
                className="w-full p-3 bg-[var(--bg-elevated)] border border-[var(--border-color)] rounded-xl min-h-[100px]"
                placeholder="Your thoughts..."
              />
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-4">
              <StatusBadge status={movie.status} type="movie" />
              {movie.rating && (
                <div className="flex items-center gap-1 font-mono text-lg bg-[var(--bg-elevated)] px-3 py-1 rounded-xl border border-[var(--border-color)]">
                  <span className="text-[#C4A77D]">★</span> {movie.rating}/10
                </div>
              )}
              {movie.watchDate && (
                <span className="text-sm text-[var(--text-secondary)] font-serif italic">
                  Watched on {new Date(movie.watchDate).toLocaleDateString()}
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {movie.genres?.map(genre => <GenreTag key={genre} genre={genre} />)}
            </div>

            {movie.review && (
              <div>
                <h3 className="text-lg font-serif text-[var(--text-primary)] mb-2">Thoughts</h3>
                <div className="p-4 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-color)]">
                  <p className="text-[var(--text-secondary)] whitespace-pre-wrap italic leading-relaxed">
                    "{movie.review}"
                  </p>
                </div>
              </div>
            )}
            
            {movie.cast?.length > 0 && (
              <div>
                <h3 className="text-lg font-serif text-[var(--text-primary)] mb-2">Cast</h3>
                <div className="flex flex-wrap gap-2">
                  {movie.cast.map(c => (
                    <span key={c} className="text-sm px-3 py-1 bg-[var(--bg-elevated)] rounded-lg text-[var(--text-secondary)]">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
}
