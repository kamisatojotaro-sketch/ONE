import { useState, useEffect } from 'react';
import { Search, Loader2, Key, Check, Edit3 } from 'lucide-react';
import Modal from '../shared/Modal';
import { searchMovies, getMovieDetails, getImageUrl } from '../../api/tmdb';

const STATUSES = ['watching', 'want_to_watch', 'watched', 'rewatching', 'dropped'];

export default function AddMovieModal({ isOpen, onClose, onAdd }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isManual, setIsManual] = useState(false);

  // Quick inline key setup
  const [inlineKey, setInlineKey] = useState('');
  const [hasApiKey, setHasApiKey] = useState(!!localStorage.getItem('tmdb_api_key'));
  const [keySavedMessage, setKeySavedMessage] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    posterUrl: '',
    genres: [],
    director: '',
    runtime: 0,
    releaseYear: new Date().getFullYear(),
    status: 'want_to_watch',
    rating: 0,
    watchDate: '',
    review: ''
  });
  
  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setResults([]);
      setError(null);
      setIsManual(false);
      setKeySavedMessage(false);
      setFormData({
        title: '', posterUrl: '', genres: [], director: '', runtime: 0,
        releaseYear: new Date().getFullYear(), status: 'want_to_watch', rating: 0, watchDate: '', review: ''
      });
    } else {
      setHasApiKey(!!localStorage.getItem('tmdb_api_key'));
    }
  }, [isOpen]);

  const handleSaveInlineKey = () => {
    if (!inlineKey.trim()) return;
    localStorage.setItem('tmdb_api_key', inlineKey.trim());
    setHasApiKey(true);
    setError(null);
    setKeySavedMessage(true);
    setTimeout(() => setKeySavedMessage(false), 3000);
    if (query.trim()) {
      executeSearch(query.trim());
    }
  };

  const executeSearch = async (searchTerm) => {
    setLoading(true);
    setError(null);
    try {
      const data = await searchMovies(searchTerm);
      setResults(data.results || []);
    } catch (err) {
      setError(err.message || 'Failed to search movies');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim() && !isManual) {
        if (!hasApiKey) {
          setError('TMDB API Key not found');
          return;
        }
        executeSearch(query.trim());
      } else {
        setResults([]);
        if (!hasApiKey && query.trim()) {
          setError('TMDB API Key not found');
        } else {
          setError(null);
        }
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [query, isManual, hasApiKey]);

  const handleSelect = async (tmdbMovie) => {
    try {
      setLoading(true);
      const details = await getMovieDetails(tmdbMovie.id);
      
      const director = details.credits?.crew?.find(c => c.job === 'Director')?.name || '';
      const cast = details.credits?.cast?.slice(0, 5).map(c => c.name) || [];
      const genres = details.genres?.map(g => g.name) || [];
      
      const movie = {
        tmdbId: details.id,
        title: details.title,
        posterUrl: getImageUrl(details.poster_path, 'w500'),
        backdropUrl: getImageUrl(details.backdrop_path, 'w1280'),
        genres,
        cast,
        director,
        runtime: details.runtime || 0,
        releaseYear: details.release_date ? parseInt(details.release_date.split('-')[0]) : null,
        status: 'want_to_watch',
        rating: null,
        watchDate: null,
        review: '',
      };
      
      await onAdd(movie);
      onClose();
    } catch (err) {
      setError(err.message || 'Failed to get movie details');
    } finally {
      setLoading(false);
    }
  };

  const handleManualSubmit = (e) => {
    e.preventDefault();
    if (!formData.title) return;
    onAdd(formData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={isManual ? 'Add Movie Manually' : 'Add Movie'} maxWidth="max-w-3xl">
      <div className="space-y-4">
        {!isManual ? (
          <>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={20} />
              <input
                type="text"
                placeholder="Search movies by title..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[var(--bg-elevated)] border border-[var(--border-default)] rounded-xl text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                autoFocus
              />
              {loading && <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 animate-spin text-[var(--text-muted)]" size={20} />}
            </div>

            {/* Inline TMDB key input if missing */}
            {!hasApiKey && (
              <div className="bg-[var(--bg-elevated)] border border-[var(--border-default)] p-4 rounded-xl space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)]">
                  <Key size={16} className="text-[var(--accent-primary)] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[var(--text-primary)] font-serif">Connect TMDB API for automatic posters & cast</strong>
                    <p className="mt-0.5">Paste a free TMDB API key to search films automatically.</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Paste TMDB API Key..."
                    value={inlineKey}
                    onChange={(e) => setInlineKey(e.target.value)}
                    className="flex-1 bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-lg px-3 py-1.5 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                  />
                  <button
                    type="button"
                    onClick={handleSaveInlineKey}
                    disabled={!inlineKey.trim()}
                    className="px-3 py-1.5 bg-[var(--accent-primary)] text-white text-xs font-medium rounded-lg hover:opacity-90 disabled:opacity-50"
                  >
                    Save Key
                  </button>
                </div>

                <div className="flex justify-between items-center text-[11px] text-[var(--text-muted)]">
                  <a href="https://www.themoviedb.org/settings/api" target="_blank" rel="noreferrer" className="text-[var(--accent-primary)] hover:underline">
                    Get free TMDB key →
                  </a>
                  <span>Stored locally</span>
                </div>
              </div>
            )}

            {keySavedMessage && (
              <div className="flex items-center gap-2 text-xs text-[var(--accent-primary)] bg-[var(--accent-primary)]/10 p-2.5 rounded-lg border border-[var(--accent-primary)]/20">
                <Check size={14} /> Key saved! Searching now...
              </div>
            )}

            {/* Enter manually fallback option */}
            <div className="flex justify-between items-center p-3 bg-[var(--bg-elevated)]/40 rounded-xl border border-[var(--border-subtle)] text-xs">
              <span className="text-[var(--text-secondary)]">Prefer not to use an API key?</span>
              <button
                type="button"
                onClick={() => {
                  setFormData(prev => ({ ...prev, title: query }));
                  setIsManual(true);
                }}
                className="inline-flex items-center gap-1 text-[var(--accent-primary)] font-medium hover:underline cursor-pointer"
              >
                <Edit3 size={13} /> Enter Manually
              </button>
            </div>
            
            <div className="max-h-[50vh] overflow-y-auto space-y-2">
              {results.map((movie) => (
                <div 
                  key={movie.id}
                  onClick={() => handleSelect(movie)}
                  className="flex gap-4 p-3 hover:bg-[var(--bg-elevated)] rounded-xl cursor-pointer transition-colors border border-transparent hover:border-[var(--border-default)]"
                >
                  <div className="w-16 h-24 bg-[var(--bg-base)] rounded-lg overflow-hidden flex-shrink-0">
                    {movie.poster_path ? (
                      <img src={getImageUrl(movie.poster_path, 'w200')} alt={movie.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xs text-[var(--text-muted)] text-center p-1">No Image</div>
                    )}
                  </div>
                  <div className="flex-grow py-1">
                    <h4 className="font-serif text-lg text-[var(--text-primary)]">{movie.title}</h4>
                    <p className="text-sm text-[var(--text-secondary)]">{movie.release_date ? movie.release_date.split('-')[0] : 'Unknown Year'}</p>
                    <p className="text-xs text-[var(--text-muted)] line-clamp-2 mt-1">{movie.overview}</p>
                  </div>
                </div>
              ))}
              {query && !loading && results.length === 0 && hasApiKey && (
                <div className="text-center py-8 text-[var(--text-secondary)] text-sm">
                  No movies found for "{query}"
                </div>
              )}
            </div>
          </>
        ) : (
          <form onSubmit={handleManualSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1">Movie Title *</label>
              <input
                required
                type="text"
                value={formData.title}
                onChange={e => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 bg-[var(--bg-elevated)] border border-[var(--border-default)] rounded-lg text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                placeholder="e.g. Spirited Away"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1">Release Year</label>
                <input
                  type="number"
                  value={formData.releaseYear || ''}
                  onChange={e => setFormData({ ...formData, releaseYear: parseInt(e.target.value) || null })}
                  className="w-full px-3 py-2 bg-[var(--bg-elevated)] border border-[var(--border-default)] rounded-lg text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1">Status</label>
                <select
                  value={formData.status}
                  onChange={e => setFormData({ ...formData, status: e.target.value })}
                  className="w-full px-3 py-2 bg-[var(--bg-elevated)] border border-[var(--border-default)] rounded-lg text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                >
                  {STATUSES.map(s => (
                    <option key={s} value={s}>{s.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1">Poster Image URL</label>
              <input
                type="text"
                placeholder="https://... (image link)"
                value={formData.posterUrl}
                onChange={e => setFormData({ ...formData, posterUrl: e.target.value })}
                className="w-full px-3 py-2 bg-[var(--bg-elevated)] border border-[var(--border-default)] rounded-lg text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1">Director</label>
                <input
                  type="text"
                  placeholder="e.g. Hayao Miyazaki"
                  value={formData.director}
                  onChange={e => setFormData({ ...formData, director: e.target.value })}
                  className="w-full px-3 py-2 bg-[var(--bg-elevated)] border border-[var(--border-default)] rounded-lg text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1">Rating (0–10)</label>
                <input
                  type="number"
                  min="0"
                  max="10"
                  step="0.5"
                  value={formData.rating || ''}
                  onChange={e => setFormData({ ...formData, rating: parseFloat(e.target.value) || null })}
                  className="w-full px-3 py-2 bg-[var(--bg-elevated)] border border-[var(--border-default)] rounded-lg text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1">Review / Personal Thoughts</label>
              <textarea
                rows={3}
                value={formData.review}
                onChange={e => setFormData({ ...formData, review: e.target.value })}
                placeholder="What did you think of the film?"
                className="w-full px-3 py-2 bg-[var(--bg-elevated)] border border-[var(--border-default)] rounded-lg text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)] resize-none"
              />
            </div>

            <div className="flex justify-between items-center pt-3 border-t border-[var(--border-subtle)]">
              <button
                type="button"
                onClick={() => setIsManual(false)}
                className="text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
              >
                ← Back to search
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-[var(--accent-primary)] text-white text-xs font-medium rounded-xl hover:opacity-90 shadow-sm cursor-pointer"
              >
                Save Movie
              </button>
            </div>
          </form>
        )}
      </div>
    </Modal>
  );
}
