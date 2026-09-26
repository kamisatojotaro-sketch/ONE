import React, { useState, useEffect } from 'react';
import { searchAnime } from '../../api/jikan';
import { Search, X, Loader2 } from 'lucide-react';

export default function AddAnimeModal({ isOpen, onClose, onAdd }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isManual, setIsManual] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '',
    titleJapanese: '',
    coverUrl: '',
    type: 'TV',
    totalEpisodes: '',
    episodesWatched: 0,
    status: 'plan_to_watch',
    rating: '',
    genres: [],
    studios: [],
    season: '',
    synopsis: '',
    startDate: '',
    notes: ''
  });

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setResults([]);
      setIsManual(false);
      setFormData({
        title: '', titleJapanese: '', coverUrl: '', type: 'TV', totalEpisodes: '',
        episodesWatched: 0, status: 'plan_to_watch', rating: '', genres: [], studios: [],
        season: '', synopsis: '', startDate: '', notes: ''
      });
    }
  }, [isOpen]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (query.length > 2 && !isManual) {
        setLoading(true);
        const data = await searchAnime(query);
        setResults(data.slice(0, 5));
        setLoading(false);
      } else {
        setResults([]);
      }
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [query, isManual]);

  if (!isOpen) return null;

  const handleSelectResult = (anime) => {
    setFormData({
      ...formData,
      malId: anime.mal_id,
      title: anime.title,
      titleJapanese: anime.title_japanese || '',
      coverUrl: anime.images?.jpg?.large_image_url || anime.images?.jpg?.image_url || '',
      type: anime.type || 'TV',
      totalEpisodes: anime.episodes || '',
      genres: anime.genres ? anime.genres.map(g => g.name) : [],
      studios: anime.studios ? anime.studios.map(s => s.name) : [],
      season: anime.season && anime.year ? `${anime.season.charAt(0).toUpperCase() + anime.season.slice(1)} ${anime.year}` : '',
      synopsis: anime.synopsis || ''
    });
    setIsManual(true);
    setResults([]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      ...formData,
      totalEpisodes: formData.totalEpisodes ? Number(formData.totalEpisodes) : null,
      episodesWatched: Number(formData.episodesWatched) || 0,
      rating: formData.rating ? Number(formData.rating) : null,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-[var(--bg-surface)] border border-[var(--border-default)] w-full max-w-2xl rounded-2xl shadow-xl flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-[var(--border-subtle)]">
          <h2 className="font-serif text-2xl text-[var(--text-primary)]">Add Anime</h2>
          <button onClick={onClose} className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-base)] rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {!isManual ? (
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={18} />
                <input
                  type="text"
                  placeholder="Search by title (e.g., Frieren, Look Back)..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[var(--bg-base)] border border-[var(--border-default)] rounded-xl text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)]"
                />
              </div>

              {loading && (
                <div className="flex justify-center p-8 text-[var(--text-muted)]">
                  <Loader2 className="animate-spin" size={24} />
                </div>
              )}

              {results.length > 0 && (
                <div className="space-y-2">
                  {results.map((anime) => (
                    <div 
                      key={anime.mal_id}
                      onClick={() => handleSelectResult(anime)}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-[var(--bg-base)] cursor-pointer border border-transparent hover:border-[var(--border-subtle)] transition-colors"
                    >
                      <img 
                        src={anime.images?.jpg?.image_url} 
                        alt={anime.title} 
                        className="w-12 h-16 object-cover rounded-md"
                      />
                      <div>
                        <h4 className="font-medium text-[var(--text-primary)]">{anime.title}</h4>
                        <p className="text-sm text-[var(--text-secondary)]">
                          {anime.type} • {anime.episodes ? `${anime.episodes} eps` : 'Ongoing'} • Score: {anime.score || 'N/A'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="text-center mt-6 pt-6 border-t border-[var(--border-subtle)]">
                <p className="text-[var(--text-secondary)] mb-3">Can't find it or prefer to type it yourself?</p>
                <button 
                  onClick={() => setIsManual(true)}
                  className="text-sm px-4 py-2 rounded-full border border-[var(--border-default)] hover:bg-[var(--bg-base)] transition-colors"
                >
                  Enter Manually
                </button>
              </div>
            </div>
          ) : (
            <form id="add-anime-form" onSubmit={handleSubmit} className="space-y-5">
              <div className="flex justify-between items-center mb-4">
                <button 
                  type="button" 
                  onClick={() => { setIsManual(false); setFormData({...formData, title: ''}); }}
                  className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                >
                  ← Back to search
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1 md:col-span-2">
                  <label className="text-sm font-medium text-[var(--text-secondary)]">Title *</label>
                  <input required name="title" value={formData.title} onChange={handleChange} className="w-full px-3 py-2 bg-[var(--bg-base)] border border-[var(--border-default)] rounded-lg focus:outline-none focus:border-[var(--accent-primary)]" />
                </div>
                
                <div className="space-y-1">
                  <label className="text-sm font-medium text-[var(--text-secondary)]">Status</label>
                  <select name="status" value={formData.status} onChange={handleChange} className="w-full px-3 py-2 bg-[var(--bg-base)] border border-[var(--border-default)] rounded-lg focus:outline-none focus:border-[var(--accent-primary)] text-[var(--text-primary)]">
                    <option value="watching">Watching</option>
                    <option value="completed">Completed</option>
                    <option value="plan_to_watch">Plan to Watch</option>
                    <option value="on_hold">On Hold</option>
                    <option value="dropped">Dropped</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-[var(--text-secondary)]">Episodes Watched</label>
                  <div className="flex items-center gap-2">
                    <input type="number" min="0" name="episodesWatched" value={formData.episodesWatched} onChange={handleChange} className="flex-1 px-3 py-2 bg-[var(--bg-base)] border border-[var(--border-default)] rounded-lg focus:outline-none focus:border-[var(--accent-primary)]" />
                    <span className="text-[var(--text-muted)]">/</span>
                    <input type="number" min="0" name="totalEpisodes" value={formData.totalEpisodes} onChange={handleChange} placeholder="Total" className="flex-1 px-3 py-2 bg-[var(--bg-base)] border border-[var(--border-default)] rounded-lg focus:outline-none focus:border-[var(--accent-primary)]" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-[var(--text-secondary)]">Rating (0-10)</label>
                  <input type="number" min="0" max="10" step="0.5" name="rating" value={formData.rating} onChange={handleChange} className="w-full px-3 py-2 bg-[var(--bg-base)] border border-[var(--border-default)] rounded-lg focus:outline-none focus:border-[var(--accent-primary)]" />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-[var(--text-secondary)]">Start Date</label>
                  <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} className="w-full px-3 py-2 bg-[var(--bg-base)] border border-[var(--border-default)] rounded-lg focus:outline-none focus:border-[var(--accent-primary)]" />
                </div>

                <div className="space-y-1 md:col-span-2">
                  <label className="text-sm font-medium text-[var(--text-secondary)]">Notes</label>
                  <textarea name="notes" value={formData.notes} onChange={handleChange} rows="3" className="w-full px-3 py-2 bg-[var(--bg-base)] border border-[var(--border-default)] rounded-lg focus:outline-none focus:border-[var(--accent-primary)] resize-none" placeholder="Softly note your thoughts here..."></textarea>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Footer */}
        {isManual && (
          <div className="p-6 border-t border-[var(--border-subtle)] flex justify-end gap-3 bg-[var(--bg-base)] rounded-b-2xl">
            <button onClick={onClose} className="px-5 py-2 rounded-full border border-[var(--border-default)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface)] transition-colors">
              Cancel
            </button>
            <button type="submit" form="add-anime-form" className="px-5 py-2 rounded-full bg-[var(--text-primary)] text-[var(--bg-base)] hover:opacity-90 transition-opacity font-medium">
              Save to Collection
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
