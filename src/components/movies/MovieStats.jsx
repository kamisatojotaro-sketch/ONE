import { Clock, Film, Star, Award } from 'lucide-react';

export default function MovieStats({ movies }) {
  const watchedMovies = movies.filter(m => m.status === 'watched' || m.status === 'rewatching');
  
  const totalWatched = watchedMovies.length;
  
  const totalRuntimeMin = watchedMovies.reduce((acc, m) => acc + (m.runtime || 0), 0);
  const totalRuntimeHours = Math.round(totalRuntimeMin / 60);
  
  const ratedMovies = watchedMovies.filter(m => m.rating !== null);
  const avgRating = ratedMovies.length > 0 
    ? (ratedMovies.reduce((acc, m) => acc + m.rating, 0) / ratedMovies.length).toFixed(1) 
    : 0;

  // Most common genre
  const genreCounts = watchedMovies.reduce((acc, m) => {
    (m.genres || []).forEach(g => {
      acc[g] = (acc[g] || 0) + 1;
    });
    return acc;
  }, {});
  const topGenre = Object.entries(genreCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';

  const statCards = [
    { label: 'Watched', value: totalWatched, icon: Film, color: 'text-[#8B9F7E]' },
    { label: 'Hours', value: totalRuntimeHours, icon: Clock, color: 'text-[#8A735E]' },
    { label: 'Avg. Rating', value: avgRating, icon: Star, color: 'text-[#C4A77D]' },
    { label: 'Top Genre', value: topGenre, icon: Award, color: 'text-[#C75B3B]', isText: true }
  ];

  if (movies.length === 0) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {statCards.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div key={idx} className="bg-[var(--bg-surface)] p-4 rounded-2xl border border-[var(--border-color)] flex items-center gap-4">
            <div className={`p-3 bg-[var(--bg-elevated)] rounded-xl ${stat.color}`}>
              <Icon size={20} />
            </div>
            <div>
              <p className="text-xs text-[var(--text-secondary)] uppercase tracking-wider">{stat.label}</p>
              <p className={`font-serif text-xl text-[var(--text-primary)] ${stat.isText ? 'truncate max-w-[80px]' : ''}`}>
                {stat.value}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
