import React, { useState, useMemo } from 'react';
import { Music, Plus, Search, Filter } from 'lucide-react';
import { useMusic } from '../hooks/useMusic';
import { MusicCard } from '../components/music/MusicCard';
import { AddMusicModal } from '../components/music/AddMusicModal';
import { MusicDetail } from '../components/music/MusicDetail';
import { MusicStats } from '../components/music/MusicStats';

const FILTER_TABS = ['All', 'Listening', 'Loved', 'On Repeat', 'Archived'];

export default function MusicPage() {
  const { tracks, loading, addTrack, updateTrack, deleteTrack } = useMusic();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(null);
  
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date_desc');

  const filteredAndSortedTracks = useMemo(() => {
    let result = [...tracks];

    if (filter !== 'All') {
      const statusKey = filter.toLowerCase().replace(' ', '_');
      result = result.filter(t => t.status === statusKey);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(t => 
        t.title.toLowerCase().includes(q) || 
        t.artist.toLowerCase().includes(q) ||
        (t.album && t.album.toLowerCase().includes(q))
      );
    }

    result.sort((a, b) => {
      switch (sortBy) {
        case 'title_asc': return a.title.localeCompare(b.title);
        case 'artist_asc': return a.artist.localeCompare(b.artist);
        case 'rating_desc': return (b.rating || 0) - (a.rating || 0);
        case 'plays_desc': return (b.playCount || 0) - (a.playCount || 0);
        case 'date_desc': return new Date(b.createdAt) - new Date(a.createdAt);
        case 'date_asc': return new Date(a.createdAt) - new Date(b.createdAt);
        default: return 0;
      }
    });

    return result;
  }, [tracks, filter, searchQuery, sortBy]);

  if (loading) {
    return <div className="flex items-center justify-center h-full text-[var(--text-muted)] font-serif italic">Loading your library...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto pb-24">
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif text-[var(--text-primary)] flex items-center gap-3 mb-2">
            <Music className="text-[var(--accent-primary)]" size={40} />
            Music
          </h1>
          <p className="font-cursive text-2xl text-[var(--text-accent)] pl-12 opacity-90">
            softly heard
          </p>
        </div>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="hidden md:flex items-center gap-2 bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white px-5 py-2.5 rounded-full font-medium transition-colors shadow-sm"
        >
          <Plus size={18} /> Add Track
        </button>
      </div>

      <MusicStats tracks={tracks} />

      {/* Controls Bar */}
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-center mb-8 bg-[var(--bg-surface)] p-2 rounded-2xl border border-[var(--border-default)] shadow-sm">
        
        {/* Tabs */}
        <div className="flex overflow-x-auto w-full lg:w-auto gap-1 no-scrollbar p-1">
          {FILTER_TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${
                filter === tab 
                  ? 'bg-[var(--accent-primary)] text-white' 
                  : 'text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search & Sort */}
        <div className="flex items-center gap-3 w-full lg:w-auto px-2 lg:px-0">
          <div className="relative flex-1 lg:w-48">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={14} />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-[var(--bg-base)] text-sm border border-[var(--border-default)] rounded-full py-1.5 pl-9 pr-4 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter size={14} className="text-[var(--text-muted)] hidden sm:block" />
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="bg-[var(--bg-base)] text-sm border border-[var(--border-default)] rounded-full py-1.5 px-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)] cursor-pointer"
            >
              <option value="date_desc">Newest First</option>
              <option value="date_asc">Oldest First</option>
              <option value="title_asc">Title A-Z</option>
              <option value="artist_asc">Artist A-Z</option>
              <option value="rating_desc">Highest Rated</option>
              <option value="plays_desc">Most Played</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      {filteredAndSortedTracks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedTracks.map(track => (
            <MusicCard key={track.id} track={track} onClick={setSelectedTrack} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-2xl border-dashed">
          <Music size={48} className="text-[var(--text-muted)] mb-4 opacity-50" />
          <h3 className="font-serif text-xl text-[var(--text-primary)] mb-2">No music found</h3>
          <p className="text-[var(--text-secondary)] mb-6">
            {searchQuery || filter !== 'All' 
              ? "Try adjusting your filters or search terms."
              : "Your music library is empty. Let's add your first track."}
          </p>
          {(searchQuery || filter !== 'All') ? (
            <button onClick={() => { setFilter('All'); setSearchQuery(''); }} className="text-[var(--accent-primary)] hover:underline">
              Clear filters
            </button>
          ) : (
            <button onClick={() => setIsAddModalOpen(true)} className="bg-[var(--accent-primary)] text-white px-6 py-2 rounded-full shadow-sm hover:-translate-y-0.5 transition-transform">
              Add your first track
            </button>
          )}
        </div>
      )}

      {/* Mobile FAB */}
      <button 
        onClick={() => setIsAddModalOpen(true)}
        className="md:hidden fixed bottom-6 right-6 z-40 bg-[var(--accent-primary)] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-[var(--accent-primary-hover)] active:scale-95 transition-all"
      >
        <Plus size={24} />
      </button>

      {/* Modals */}
      <AddMusicModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        onAdd={addTrack} 
      />
      
      <MusicDetail 
        track={selectedTrack} 
        isOpen={!!selectedTrack} 
        onClose={() => setSelectedTrack(null)}
        onUpdate={updateTrack}
        onDelete={deleteTrack}
      />
    </div>
  );
}
