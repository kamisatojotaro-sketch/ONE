import React, { useState, useEffect } from 'react';
import Modal from '../shared/Modal';

const PLATFORMS = ['spotify', 'youtube_music', 'apple_music', 'other'];
const STATUSES = ['listening', 'loved', 'on_repeat', 'archived'];

export function AddMusicModal({ isOpen, onClose, onAdd }) {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    album: '',
    coverUrl: '',
    genres: [],
    platform: 'spotify',
    status: 'listening',
    rating: 0,
    playCount: 0,
    notes: ''
  });

  useEffect(() => {
    if (!isOpen) {
      setFormData({
        title: '', artist: '', album: '', coverUrl: '', genres: [],
        platform: 'spotify', status: 'listening', rating: 0, playCount: 0, notes: ''
      });
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.artist) return;
    onAdd(formData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Music" maxWidth="max-w-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex gap-6">
          <div className="flex-1 space-y-4">
            <div>
              <label className="block text-sm text-[var(--text-secondary)] mb-1">Title *</label>
              <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full bg-[var(--bg-base)] border border-[var(--border-default)] rounded-lg px-4 py-2 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]" />
            </div>
            <div>
              <label className="block text-sm text-[var(--text-secondary)] mb-1">Artist *</label>
              <input required type="text" value={formData.artist} onChange={e => setFormData({...formData, artist: e.target.value})} className="w-full bg-[var(--bg-base)] border border-[var(--border-default)] rounded-lg px-4 py-2 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]" />
            </div>
            <div>
              <label className="block text-sm text-[var(--text-secondary)] mb-1">Album</label>
              <input type="text" value={formData.album} onChange={e => setFormData({...formData, album: e.target.value})} className="w-full bg-[var(--bg-base)] border border-[var(--border-default)] rounded-lg px-4 py-2 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]" />
            </div>
            <div>
              <label className="block text-sm text-[var(--text-secondary)] mb-1">Cover URL</label>
              <input type="text" value={formData.coverUrl} onChange={e => setFormData({...formData, coverUrl: e.target.value})} className="w-full bg-[var(--bg-base)] border border-[var(--border-default)] rounded-lg px-4 py-2 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]" />
            </div>
          </div>
          {formData.coverUrl && (
            <div className="w-1/3 hidden sm:block">
              <img src={formData.coverUrl} alt="Cover preview" className="w-full aspect-square object-cover rounded-xl border border-[var(--border-default)] shadow-sm" />
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-[var(--text-secondary)] mb-1">Platform</label>
            <select value={formData.platform} onChange={e => setFormData({...formData, platform: e.target.value})} className="w-full bg-[var(--bg-base)] border border-[var(--border-default)] rounded-lg px-4 py-2 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]">
              {PLATFORMS.map(p => (
                <option key={p} value={p}>{p.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm text-[var(--text-secondary)] mb-1">Status</label>
            <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})} className="w-full bg-[var(--bg-base)] border border-[var(--border-default)] rounded-lg px-4 py-2 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]">
              {STATUSES.map(s => (
                <option key={s} value={s}>{s.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm text-[var(--text-secondary)] mb-1">Genres (comma separated)</label>
            <input type="text" value={formData.genres.join(', ')} onChange={e => setFormData({...formData, genres: e.target.value.split(',').map(s => s.trim()).filter(Boolean)})} className="w-full bg-[var(--bg-base)] border border-[var(--border-default)] rounded-lg px-4 py-2 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]" />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm text-[var(--text-secondary)] mb-1">Rating (0-10)</label>
              <input type="number" min="0" max="10" step="0.5" value={formData.rating} onChange={e => setFormData({...formData, rating: parseFloat(e.target.value) || 0})} className="w-full bg-[var(--bg-base)] border border-[var(--border-default)] rounded-lg px-4 py-2 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]" />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-[var(--text-secondary)] mb-1">Plays</label>
              <input type="number" min="0" value={formData.playCount} onChange={e => setFormData({...formData, playCount: parseInt(e.target.value) || 0})} className="w-full bg-[var(--bg-base)] border border-[var(--border-default)] rounded-lg px-4 py-2 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]" />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm text-[var(--text-secondary)] mb-1">Notes</label>
          <textarea value={formData.notes} onChange={e => setFormData({...formData, notes: e.target.value})} rows={3} className="w-full bg-[var(--bg-base)] border border-[var(--border-default)] rounded-lg px-4 py-2 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)] resize-none" placeholder="Your thoughts..."></textarea>
        </div>

        <div className="flex justify-end pt-4 border-t border-[var(--border-subtle)]">
          <button type="submit" className="bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-[var(--bg-surface)] px-6 py-2 rounded-xl font-medium transition-colors shadow-sm">
            Save Track
          </button>
        </div>
      </form>
    </Modal>
  );
}
