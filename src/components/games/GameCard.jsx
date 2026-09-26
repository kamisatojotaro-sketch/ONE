import React from 'react';
import { Star, Clock } from 'lucide-react';

const getStatusStyles = (status) => {
  switch (status) {
    case 'playing': return 'bg-[var(--accent-primary)] text-[var(--bg-surface)]';
    case 'completed': return 'bg-[var(--badge-highly-rec-bg)] text-[var(--badge-highly-rec-text)]';
    case 'dropped': return 'bg-[var(--badge-recommended-bg)] text-[var(--badge-recommended-text)]';
    case 'backlog': return 'bg-[var(--badge-not-rec-bg)] text-[var(--badge-not-rec-text)]';
    case 'on_hold': return 'bg-[var(--badge-mixed-bg)] text-[var(--badge-mixed-text)]';
    default: return 'bg-[var(--border-default)] text-[var(--text-secondary)]';
  }
};

const formatStatus = (status) => {
  if (!status) return 'Unknown';
  return status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
};

export function GameCard({ game, onClick }) {
  return (
    <div 
      onClick={() => onClick(game)}
      className="group flex flex-col cursor-pointer border border-[var(--border-default)] bg-[var(--bg-surface)] rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"
    >
      {game.coverUrl ? (
        <img 
          src={game.coverUrl} 
          alt={game.title} 
          className="w-full aspect-video object-cover border-b border-[var(--border-default)]" 
        />
      ) : (
        <div className="w-full aspect-video bg-[var(--bg-elevated)] flex items-center justify-center border-b border-[var(--border-default)]">
          <span className="text-[var(--text-muted)] font-serif italic">No Cover</span>
        </div>
      )}
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2 gap-2">
          <h3 className="font-serif text-lg text-[var(--text-primary)] font-medium leading-tight">
            <span className="text-[var(--text-accent)] text-sm mr-2 align-middle opacity-80">◯</span>
            {game.title}
          </h3>
          <span className={`text-xs px-2.5 py-1 rounded-full font-medium whitespace-nowrap ${getStatusStyles(game.status)}`}>
            {formatStatus(game.status)}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {game.genres?.slice(0, 3).map(genre => (
            <span key={genre} className="text-[10px] px-2 py-0.5 rounded-full border border-[var(--tag-border)] text-[var(--tag-text)] bg-[var(--tag-bg)]">
              {genre}
            </span>
          ))}
          {game.genres?.length > 3 && (
            <span className="text-[10px] px-2 py-0.5 rounded-full border border-[var(--tag-border)] text-[var(--text-muted)]">
              +{game.genres.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)] mb-3 mt-auto pt-2">
          {game.hoursPlayed > 0 && (
            <div className="flex items-center gap-1">
              <Clock size={14} className="opacity-70" />
              <span>{game.hoursPlayed}h</span>
            </div>
          )}
          {game.rating > 0 && (
            <div className="flex items-center gap-1">
              <Star size={14} className="fill-[var(--badge-highly-rec-bg)] text-[var(--badge-highly-rec-bg)] opacity-90" />
              <span>{game.rating}/10</span>
            </div>
          )}
        </div>

        {game.platforms?.length > 0 && (
          <div className="text-xs text-[var(--text-muted)] truncate mb-3">
            {game.platforms.join(' • ')}
          </div>
        )}

        {game.notes && (
          <p className="text-sm text-[var(--text-secondary)] line-clamp-3 mb-3 italic opacity-80">
            "{game.notes}"
          </p>
        )}

        <div className="mt-auto pt-3 border-t border-[var(--border-subtle)] text-[10px] text-[var(--text-muted)] font-serif italic text-right">
          Added {new Date(game.createdAt).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}
