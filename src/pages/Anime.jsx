import React, { useState, useMemo } from 'react';
import { Tv, Plus, Search } from 'lucide-react';
import { useAnime } from '../hooks/useAnime';
import AnimeCard from '../components/anime/AnimeCard';
import AddAnimeModal from '../components/anime/AddAnimeModal';
import AnimeDetail from '../components/anime/AnimeDetail';
import AnimeStats from '../components/anime/AnimeStats';

const FILTER_TABS = ['All', 'Watching', 'Completed', 'Plan to Watch', 'On Hold', 'Dropped'];

export default function Anime() {
  const { animeList, loading, addAnime, updateAnime, deleteAnime } = useAnime();
  
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedAnime, setSelectedAnime] = useState(null);

  const filteredAnime = useMemo(() => {
    return animeList.filter(anime => {
      // Status filter
      const tabMatch = activeTab === 'All' || 
        (activeTab === 'Plan to Watch' && anime.status === 'plan_to_watch') ||
        (activeTab === 'On Hold' && anime.status === 'on_hold') ||
        (activeTab.toLowerCase() === anime.status.toLowerCase());
      
      // Search filter
      const searchMatch = !searchQuery || 
        anime.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        (anime.titleJapanese && anime.titleJapanese.toLowerCase().includes(searchQuery.toLowerCase()));
        
      return tabMatch && searchMatch;
    });
  }, [animeList, activeTab, searchQuery]);

  return (
    <div className="min-h-screen bg-[var(--bg-base)] pb-24">
      <div className="max-w-6xl mx-auto px-6 pt-12">
        
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <Tv className="text-[var(--accent-primary)]" size={32} />
            <h1 className="text-4xl font-serif text-[var(--text-primary)]">Anime</h1>
          </div>
          <p className="font-cursive text-xl text-[var(--text-secondary)] italic ml-11">
            softly watched
          </p>
        </header>

        <AnimeStats animeList={animeList} />

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex overflow-x-auto pb-2 md:pb-0 hide-scrollbar w-full md:w-auto gap-2">
            {FILTER_TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors border ${
                  activeTab === tab 
                    ? 'bg-[var(--text-primary)] text-[var(--bg-base)] border-[var(--text-primary)]' 
                    : 'bg-transparent text-[var(--text-secondary)] border-[var(--border-default)] hover:bg-[var(--bg-surface)]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={16} />
            <input
              type="text"
              placeholder="Filter list..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-full focus:outline-none focus:border-[var(--accent-primary)]"
            />
          </div>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="text-center py-20 text-[var(--text-muted)] italic font-serif">Loading your collection softly...</div>
        ) : filteredAnime.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAnime.map(anime => (
              <AnimeCard 
                key={anime.id} 
                anime={anime} 
                onClick={() => setSelectedAnime(anime)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[var(--bg-surface)] border border-[var(--border-dashed)] rounded-2xl">
            <p className="text-[var(--text-secondary)] font-serif italic mb-4">No anime found here yet...</p>
            <button 
              onClick={() => setIsAddModalOpen(true)}
              className="px-6 py-2 rounded-full border border-[var(--border-default)] text-[var(--text-primary)] hover:bg-[var(--bg-base)] transition-colors"
            >
              Add your first anime
            </button>
          </div>
        )}

      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => setIsAddModalOpen(true)}
        className="fixed bottom-8 right-8 p-4 bg-[var(--text-primary)] text-[var(--bg-base)] rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 z-40 group"
      >
        <Plus size={24} />
      </button>

      {/* Modals */}
      <AddAnimeModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        onAdd={addAnime}
      />
      
      <AnimeDetail 
        anime={selectedAnime} 
        onClose={() => setSelectedAnime(null)} 
        onUpdate={async (id, data) => {
          const updated = await updateAnime(id, data);
          setSelectedAnime(updated);
        }}
        onDelete={(id) => {
          deleteAnime(id);
          setSelectedAnime(null);
        }}
      />
    </div>
  );
}
