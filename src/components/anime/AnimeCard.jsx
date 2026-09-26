import React from 'react';

const STATUS_COLORS = {
  watching: 'bg-[#6B7F5E]/10 text-[#6B7F5E] border-[#6B7F5E]/20', // olive green
  completed: 'bg-[#D4A373]/10 text-[#D4A373] border-[#D4A373]/20', // golden
  dropped: 'bg-[#C75B3B]/10 text-[#C75B3B] border-[#C75B3B]/20', // coral
  plan_to_watch: 'bg-[#8A8A8A]/10 text-[#8A8A8A] border-[#8A8A8A]/20', // muted
  on_hold: 'bg-[#8B7355]/10 text-[#8B7355] border-[#8B7355]/20' // brown
};

const STATUS_LABELS = {
  watching: 'Watching',
  completed: 'Completed',
  dropped: 'Dropped',
  plan_to_watch: 'Plan to Watch',
  on_hold: 'On Hold'
};

export default function AnimeCard({ anime, onClick }) {
  const {
    title,
    coverUrl,
    season,
    status,
    genres = [],
    episodesWatched = 0,
    totalEpisodes,
    synopsis,
    updatedAt
  } = anime;

  const yearMatch = season ? season.match(/\d{4}/) : null;
  const yearStr = yearMatch ? ` (${yearMatch[0]})` : '';

  const progressText = totalEpisodes 
    ? `${episodesWatched}/${totalEpisodes} episodes` 
    : `${episodesWatched} episodes`;

  const dateStr = new Date(updatedAt).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div 
      onClick={onClick}
      className="flex flex-col bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-xl overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex p-4 gap-4">
        {/* Thumbnail */}
        <div className="w-24 h-36 shrink-0 overflow-hidden rounded-md border border-[var(--border-subtle)]">
          {coverUrl ? (
            <img src={coverUrl} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-[var(--bg-base)] flex items-center justify-center text-xs text-[var(--text-muted)] p-2 text-center">
              No Image
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-serif text-[var(--text-primary)] text-lg font-medium leading-tight line-clamp-2">
              <span className="text-sm mr-1">◯</span>
              {title}
              <span className="text-sm text-[var(--text-muted)] font-sans">{yearStr}</span>
            </h3>
          </div>

          <div className="flex flex-wrap gap-2 mt-1 mb-2">
            <span className={`text-xs px-2 py-0.5 rounded-full border ${STATUS_COLORS[status]}`}>
              {STATUS_LABELS[status]}
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full border border-[var(--border-default)] text-[var(--text-secondary)]">
              {progressText}
            </span>
          </div>

          <div className="flex flex-wrap gap-1 mb-2">
            {genres.slice(0, 3).map((g, i) => (
              <span key={i} className="text-[10px] px-2 py-0.5 rounded-full border border-[var(--border-subtle)] text-[var(--text-muted)]">
                {g}
              </span>
            ))}
            {genres.length > 3 && (
              <span className="text-[10px] px-1 py-0.5 text-[var(--text-muted)]">+{genres.length - 3}</span>
            )}
          </div>

          {synopsis && (
            <p className="text-sm text-[var(--text-secondary)] line-clamp-2 mt-auto">
              {synopsis}
            </p>
          )}
        </div>
      </div>
      
      {/* Footer */}
      <div className="px-4 py-2 bg-[var(--bg-base)] border-t border-[var(--border-subtle)] text-right">
        <span className="text-xs font-serif italic text-[var(--text-muted)]">
          Last updated softly on {dateStr}
        </span>
      </div>
    </div>
  );
}
