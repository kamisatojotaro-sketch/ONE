import React, { useState, useEffect } from 'react';
import { Search, X, AlertCircle, Key, Check, Plus, Edit3 } from 'lucide-react';
import { searchGames, getRawgApiKey } from '../../api/rawg';

const PLATFORMS = ['PC', 'PlayStation', 'Xbox', 'Nintendo', 'Mobile', 'Other'];
const STATUSES = ['playing', 'completed', 'dropped', 'backlog', 'on_hold'];

export function AddGameModal({ isOpen, onClose, onAdd }) {
  const [isManual, setIsManual] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState('');
  
  // Quick inline key setup
  const [inlineKey, setInlineKey] = useState('');
  const [hasApiKey, setHasApiKey] = useState(!!getRawgApiKey());
  const [keySavedMessage, setKeySavedMessage] = useState(false);

  const [formData, setFormData] = useState({
    rawgId: null,
    title: '',
    coverUrl: '',
    platform: [],
    genres: [],
    status: 'backlog',
    rating: 0,
    hoursPlayed: 0,
    startDate: '',
    completedDate: '',
    notes: ''
  });

  useEffect(() => {
    if (!isOpen) {
      setSearchQuery('');
      setSearchResults([]);
      setSearchError('');
      setFormData({
        rawgId: null, title: '', coverUrl: '', platform: [], genres: [],
        status: 'backlog', rating: 0, hoursPlayed: 0, startDate: '', completedDate: '', notes: ''
      });
      setIsManual(false);
      setKeySavedMessage(false);
    } else {
      setHasApiKey(!!getRawgApiKey());
    }
  }, [isOpen]);

  const handleSaveInlineKey = () => {
    if (!inlineKey.trim()) return;
    localStorage.setItem('rawg_api_key', inlineKey.trim());
    setHasApiKey(true);
    setSearchError('');
    setKeySavedMessage(true);
    setTimeout(() => setKeySavedMessage(false), 3000);
    // Trigger immediate search if query exists
    if (searchQuery.trim().length > 2) {
      performSearch(searchQuery.trim());
    }
  };

  const performSearch = async (query) => {
    setIsSearching(true);
    const { results, error } = await searchGames(query);
    if (error) {
      setSearchError(error);
    } else {
      setSearchResults(results);
      setSearchError('');
    }
    setIsSearching(false);
  };

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (searchQuery.trim().length > 2 && !isManual) {
        if (!hasApiKey) {
          setSearchError('API Key not found');
          return;
        }
        performSearch(searchQuery.trim());
      } else {
        setSearchResults([]);
        if (!hasApiKey && searchQuery.trim().length > 0) {
          setSearchError('API Key not found');
        } else {
          setSearchError('');
        }
      }
    }, 400);
    return () => clearTimeout(timer);
  }, [searchQuery, isManual, hasApiKey]);

  if (!isOpen) return null;

  const handleSelectResult = (game) => {
    setFormData(prev => ({
      ...prev,
      rawgId: game.id,
      title: game.name,
      coverUrl: game.background_image || '',
      platform: game.platforms?.map(p => {
        const name = p.platform.name.toLowerCase();
        if (name.includes('pc')) return 'PC';
        if (name.includes('playstation')) return 'PlayStation';
        if (name.includes('xbox')) return 'Xbox';
        if (name.includes('nintendo') || name.includes('switch')) return 'Nintendo';
        if (name.includes('ios') || name.includes('android')) return 'Mobile';
        return 'Other';
      }).filter((v, i, a) => a.indexOf(v) === i) || [],
      genres: game.genres?.map(g => g.name) || []
    }));
    setIsManual(true);
  };

  const togglePlatform = (p) => {
    setFormData(prev => ({
      ...prev,
      platform: prev.platform.includes(p) 
        ? prev.platform.filter(x => x !== p)
        : [...prev.platform, p]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title) return;
    onAdd(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-3">
            <h2 className="font-serif text-2xl text-[var(--text-primary)]">
              {isManual ? (formData.title ? `Edit "${formData.title}"` : 'New Game Entry') : 'Add Game'}
            </h2>
            {isManual && (
              <span className="text-xs bg-[var(--bg-elevated)] text-[var(--text-secondary)] px-2.5 py-1 rounded-full border border-[var(--border-default)]">
                Manual Mode
              </span>
            )}
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-[var(--bg-elevated)] transition-colors text-[var(--text-secondary)]">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {!isManual ? (
            <div className="space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={20} />
                <input
                  type="text"
                  placeholder="Search game title (e.g. Ghost of Tsushima, Elden Ring)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-[var(--bg-base)] border border-[var(--border-default)] rounded-xl py-3 pl-12 pr-4 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
                />
              </div>

              {/* No API Key Notice / Inline Key Entry */}
              {!hasApiKey && (
                <div className="bg-[var(--bg-elevated)] border border-[var(--border-default)] p-5 rounded-2xl space-y-4">
                  <div className="flex items-start gap-3">
                    <Key className="text-[var(--accent-primary)] mt-0.5 shrink-0" size={20} />
                    <div className="space-y-1 text-sm">
                      <h4 className="font-serif font-bold text-[var(--text-primary)]">Connect RAWG API for Auto-Complete</h4>
                      <p className="text-[var(--text-secondary)] text-xs leading-relaxed">
                        To search cover art, release dates, and genres automatically, paste a free RAWG API key below. You can get one in 30 seconds for free.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Paste RAWG API Key here..."
                      value={inlineKey}
                      onChange={(e) => setInlineKey(e.target.value)}
                      className="flex-1 bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-xl px-3 py-2 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                    />
                    <button
                      type="button"
                      onClick={handleSaveInlineKey}
                      disabled={!inlineKey.trim()}
                      className="px-4 py-2 bg-[var(--accent-primary)] text-white text-xs font-medium rounded-xl hover:opacity-90 disabled:opacity-50 transition-opacity"
                    >
                      Save Key
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[var(--text-muted)] pt-1">
                    <a
                      href="https://rawg.io/apidocs"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[var(--accent-primary)] hover:underline inline-flex items-center gap-1"
                    >
                      Get free RAWG key →
                    </a>
                    <span>Stored only in your browser</span>
                  </div>
                </div>
              )}

              {keySavedMessage && (
                <div className="flex items-center gap-2 text-sm text-[var(--accent-primary)] bg-[var(--accent-primary)]/10 p-3 rounded-xl border border-[var(--accent-primary)]/20">
                  <Check size={16} /> API Key saved! Now searching...
                </div>
              )}

              {/* Direct Manual Entry Button */}
              <div className="p-4 bg-[var(--bg-elevated)]/50 rounded-xl border border-[var(--border-subtle)] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-[var(--text-primary)]">Don't have an API key?</h4>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">You can enter game details directly without an account.</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setFormData(prev => ({ ...prev, title: searchQuery }));
                    setIsManual(true);
                  }}
                  className="px-4 py-2 bg-[var(--bg-surface)] border border-[var(--border-default)] text-[var(--text-primary)] text-xs font-medium rounded-xl hover:border-[var(--accent-primary)] transition-colors inline-flex items-center gap-1.5"
                >
                  <Edit3 size={14} /> Enter Manually
                </button>
              </div>

              {isSearching ? (
                <div className="text-center py-8 text-[var(--text-muted)] font-serif italic">Searching the archives...</div>
              ) : (
                <div className="space-y-3">
                  {searchResults.map(game => (
                    <div 
                      key={game.id} 
                      onClick={() => handleSelectResult(game)}
                      className="flex gap-4 p-3 rounded-xl border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] hover:bg-[var(--bg-elevated)] cursor-pointer transition-all items-center"
                    >
                      {game.background_image ? (
                        <img src={game.background_image} alt={game.name} className="w-16 h-16 object-cover rounded-lg shadow-sm" />
                      ) : (
                        <div className="w-16 h-16 bg-[var(--bg-base)] rounded-lg flex items-center justify-center border border-[var(--border-subtle)]">
                          <span className="text-[10px] text-[var(--text-muted)]">No img</span>
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif text-lg text-[var(--text-primary)] truncate">{game.name}</h4>
                        <div className="text-xs text-[var(--text-muted)] mt-1">
                          {game.released ? game.released.substring(0, 4) : 'Unknown Year'}
                          {game.platforms && ` • ${game.platforms.slice(0, 3).map(p => p.platform.name).join(', ')}`}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {searchQuery && searchResults.length === 0 && !isSearching && hasApiKey && (
                    <div className="text-center py-8 text-[var(--text-muted)]">No results found for "{searchQuery}".</div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-1 space-y-4">
                  <div>
                    <label className="block text-sm text-[var(--text-secondary)] mb-1">Title *</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="e.g. Ghost of Tsushima"
                      value={formData.title} 
                      onChange={e => setFormData({...formData, title: e.target.value})} 
                      className="w-full bg-[var(--bg-base)] border border-[var(--border-default)] rounded-lg px-4 py-2 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[var(--text-secondary)] mb-1">Cover Image URL</label>
                    <input 
                      type="text" 
                      placeholder="https://... (paste any image link)"
                      value={formData.coverUrl} 
                      onChange={e => setFormData({...formData, coverUrl: e.target.value})} 
                      className="w-full bg-[var(--bg-base)] border border-[var(--border-default)] rounded-lg px-4 py-2 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[var(--text-secondary)] mb-2">Platforms</label>
                    <div className="flex flex-wrap gap-2">
                      {PLATFORMS.map(p => (
                        <button 
                          key={p} 
                          type="button" 
                          onClick={() => togglePlatform(p)} 
                          className={`px-3 py-1.5 rounded-full text-xs border transition-colors cursor-pointer ${
                            formData.platform.includes(p) 
                              ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)]' 
                              : 'border-[var(--border-default)] text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)]'
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                {formData.coverUrl && (
                  <div className="w-1/3 hidden sm:block">
                    <img src={formData.coverUrl} alt="Cover preview" className="w-full aspect-[3/4] object-cover rounded-xl border border-[var(--border-default)] shadow-sm" />
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[var(--text-secondary)] mb-1">Status</label>
                  <select 
                    value={formData.status} 
                    onChange={e => setFormData({...formData, status: e.target.value})} 
                    className="w-full bg-[var(--bg-base)] border border-[var(--border-default)] rounded-lg px-4 py-2 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                  >
                    {STATUSES.map(s => (
                      <option key={s} value={s}>{s.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-[var(--text-secondary)] mb-1">Genres (comma separated)</label>
                  <input 
                    type="text" 
                    value={formData.genres.join(', ')} 
                    onChange={e => setFormData({...formData, genres: e.target.value.split(',').map(s => s.trim()).filter(Boolean)})} 
                    className="w-full bg-[var(--bg-base)] border border-[var(--border-default)] rounded-lg px-4 py-2 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]" 
                    placeholder="Action, Open World, RPG..." 
                  />
                </div>
                <div>
                  <label className="block text-sm text-[var(--text-secondary)] mb-1">Rating (0–10)</label>
                  <input 
                    type="number" 
                    min="0" 
                    max="10" 
                    step="0.5" 
                    value={formData.rating} 
                    onChange={e => setFormData({...formData, rating: parseFloat(e.target.value) || 0})} 
                    className="w-full bg-[var(--bg-base)] border border-[var(--border-default)] rounded-lg px-4 py-2 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]" 
                  />
                </div>
                <div>
                  <label className="block text-sm text-[var(--text-secondary)] mb-1">Hours Played</label>
                  <input 
                    type="number" 
                    min="0" 
                    step="0.5" 
                    value={formData.hoursPlayed} 
                    onChange={e => setFormData({...formData, hoursPlayed: parseFloat(e.target.value) || 0})} 
                    className="w-full bg-[var(--bg-base)] border border-[var(--border-default)] rounded-lg px-4 py-2 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]" 
                  />
                </div>
                <div>
                  <label className="block text-sm text-[var(--text-secondary)] mb-1">Start Date</label>
                  <input 
                    type="date" 
                    value={formData.startDate} 
                    onChange={e => setFormData({...formData, startDate: e.target.value})} 
                    className="w-full bg-[var(--bg-base)] border border-[var(--border-default)] rounded-lg px-4 py-2 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]" 
                  />
                </div>
                <div>
                  <label className="block text-sm text-[var(--text-secondary)] mb-1">Completed Date</label>
                  <input 
                    type="date" 
                    value={formData.completedDate} 
                    onChange={e => setFormData({...formData, completedDate: e.target.value})} 
                    className="w-full bg-[var(--bg-base)] border border-[var(--border-default)] rounded-lg px-4 py-2 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-[var(--text-secondary)] mb-1">Personal Notes</label>
                <textarea 
                  value={formData.notes} 
                  onChange={e => setFormData({...formData, notes: e.target.value})} 
                  rows={3} 
                  className="w-full bg-[var(--bg-base)] border border-[var(--border-default)] rounded-lg px-4 py-2 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)] resize-none" 
                  placeholder="Your thoughts, memorable moments, or review..."
                />
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-[var(--border-subtle)]">
                <button 
                  type="button" 
                  onClick={() => setIsManual(false)} 
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                >
                  ← Back to search
                </button>
                <button 
                  type="submit" 
                  className="bg-[var(--accent-primary)] hover:opacity-90 text-white px-6 py-2 rounded-xl font-medium transition-opacity shadow-sm cursor-pointer"
                >
                  Save to Library
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
