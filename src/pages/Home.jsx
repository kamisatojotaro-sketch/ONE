import { Link, useNavigate } from 'react-router-dom';
import { Gamepad2, Film, Tv, NotebookPen, Music, Plus } from 'lucide-react';
import { useGames } from '../hooks/useGames';
import { useMovies } from '../hooks/useMovies';
import { useAnime } from '../hooks/useAnime';
import { useNotes } from '../hooks/useNotes';
import { useMusic } from '../hooks/useMusic';
import StatusBadge from '../components/shared/StatusBadge';

export default function Home() {
  const navigate = useNavigate();
  const { games = [] } = useGames();
  const { movies = [] } = useMovies();
  const { animeList = [] } = useAnime();
  const { notes = [] } = useNotes();
  const { tracks = [] } = useMusic();

  const safeGames = Array.isArray(games) ? games : [];
  const safeMovies = Array.isArray(movies) ? movies : [];
  const safeAnime = Array.isArray(animeList) ? animeList : [];
  const safeNotes = Array.isArray(notes) ? notes : [];
  const safeTracks = Array.isArray(tracks) ? tracks : [];

  const playingGames = safeGames.filter(g => g?.status === 'playing').length;
  const watchedMovies = safeMovies.filter(m => m?.status === 'watched').length;
  const watchingAnime = safeAnime.filter(a => a?.status === 'watching').length;
  const pinnedNotes = safeNotes.filter(n => n?.isPinned).length;
  const onRepeatMusic = safeTracks.filter(t => t?.status === 'on_repeat' || t?.status === 'listening').length;

  const allItems = [
    ...safeGames.map(g => ({ ...g, itemType: 'game', icon: Gamepad2, route: '/games' })),
    ...safeMovies.map(m => ({ ...m, itemType: 'movie', icon: Film, route: '/movies' })),
    ...safeAnime.map(a => ({ ...a, itemType: 'anime', icon: Tv, route: '/anime' })),
    ...safeTracks.map(t => ({ ...t, itemType: 'music', icon: Music, route: '/music' })),
    ...safeNotes.map(n => ({ ...n, itemType: 'note', icon: NotebookPen, route: '/notes', status: n.isPinned ? 'pinned' : 'unpinned' }))
  ].sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)).slice(0, 10);

  const statCards = [
    { label: 'Games', count: safeGames.length, subText: `${playingGames} playing`, icon: Gamepad2, color: 'text-[#8B9F7E]', bg: 'bg-[#8B9F7E]/10' },
    { label: 'Movies', count: safeMovies.length, subText: `${watchedMovies} watched`, icon: Film, color: 'text-[#C4A77D]', bg: 'bg-[#C4A77D]/10' },
    { label: 'Anime', count: safeAnime.length, subText: `${watchingAnime} watching`, icon: Tv, color: 'text-[#C75B3B]', bg: 'bg-[#C75B3B]/10' },
    { label: 'Notes', count: safeNotes.length, subText: `${pinnedNotes} pinned`, icon: NotebookPen, color: 'text-[#8A735E]', bg: 'bg-[#8A735E]/10' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 pb-24 space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--bg-base)] via-[var(--bg-elevated)] to-[var(--bg-surface)] border border-[var(--border-default)] p-10 md:p-16 text-center">
        <div className="relative z-10 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-default)] bg-[var(--bg-surface)]/50 backdrop-blur-sm text-sm text-[var(--text-secondary)] mb-4">
            a cozy collection, 2024–present
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-[var(--text-primary)] tracking-tight">
            Your Archive, <span className="font-cursive text-[var(--accent-primary)] font-normal tracking-normal italic">softly</span>
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mt-6">
            Every game, movie, anime, music track, and study note — tracked in one quiet place.
          </p>
        </div>
      </section>

      {/* Quick Add Buttons */}
      <section className="flex flex-wrap justify-center gap-4">
        {[
          { label: 'Game', icon: Gamepad2, route: '/games' },
          { label: 'Movie', icon: Film, route: '/movies' },
          { label: 'Anime', icon: Tv, route: '/anime' },
          { label: 'Music', icon: Music, route: '/music' },
          { label: 'Note', icon: NotebookPen, route: '/notes' }
        ].map(item => (
          <button
            key={item.label}
            onClick={() => navigate(item.route)}
            className="flex items-center gap-2 px-6 py-3 bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-full hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-colors shadow-sm group cursor-pointer"
          >
            <Plus size={18} className="text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] transition-colors" />
            <span className="font-medium text-sm">{item.label}</span>
          </button>
        ))}
      </section>

      {/* Quick Stats Row */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {statCards.map(stat => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300 shadow-sm">
              <div className={`p-4 rounded-xl ${stat.bg} ${stat.color} mb-4`}>
                <Icon size={28} />
              </div>
              <h3 className="text-3xl font-serif text-[var(--text-primary)] mb-1">{stat.count}</h3>
              <p className="text-sm font-medium text-[var(--text-secondary)] mb-1">{stat.label}</p>
              <p className="text-xs text-[var(--text-muted)] italic font-serif">{stat.subText}</p>
            </div>
          );
        })}
      </section>

      {/* Recent Activity Section */}
      <section>
        <h2 className="text-2xl font-serif text-[var(--text-primary)] mb-6 flex items-center gap-3">
          <span className="text-[var(--accent-primary)] text-sm">◯</span> Recently Added
        </h2>
        
        {allItems.length === 0 ? (
          <div className="text-center py-12 bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-2xl text-[var(--text-secondary)] italic font-serif">
            Your archive is empty. Start adding memories!
          </div>
        ) : (
          <div className="bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-2xl overflow-hidden shadow-sm">
            {allItems.map((item, idx) => {
              const Icon = item.icon;
              const date = item.createdAt ? new Date(item.createdAt).toLocaleDateString() : '';
              
              return (
                <div 
                  key={`${item.itemType}-${item.id || idx}`}
                  onClick={() => navigate(item.route)}
                  className={`flex flex-col sm:flex-row sm:items-center gap-4 p-4 hover:bg-[var(--bg-elevated)] cursor-pointer transition-colors ${
                    idx !== allItems.length - 1 ? 'border-b border-[var(--border-default)]' : ''
                  }`}
                >
                  <div className="flex items-center gap-4 flex-grow">
                    <div className="p-2 bg-[var(--bg-elevated)] rounded-lg text-[var(--text-muted)]">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-serif text-[var(--text-primary)] line-clamp-1">{item.title || item.name || 'Untitled'}</h4>
                      <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider">{item.itemType}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-4 sm:w-1/3">
                    <StatusBadge status={item.status || 'unknown'} type={item.itemType} />
                    <span className="text-xs text-[var(--text-secondary)] italic font-serif whitespace-nowrap">{date}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
