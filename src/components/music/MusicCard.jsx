import React from 'react';
import { Star, Play, Music } from 'lucide-react';

const getStatusStyles = (status) => {
  switch (status) {
    case 'listening': return 'bg-[var(--accent-primary)] text-[var(--bg-surface)]';
    case 'loved': return 'bg-[var(--badge-recommended-bg)] text-white';
    case 'on_repeat': return 'bg-[var(--badge-highly-rec-bg)] text-[var(--badge-highly-rec-text)]';
    case 'archived': return 'bg-[var(--badge-not-rec-bg)] text-[var(--badge-not-rec-text)]';
    default: return 'bg-[var(--border-default)] text-[var(--text-secondary)]';
  }
};

const getPlatformStyles = (platform) => {
  switch (platform) {
    case 'spotify': return 'text-[#1DB954] border-[#1DB954] bg-[#1DB954]/10';
    case 'youtube_music': return 'text-[#FF0000] border-[#FF0000] bg-[#FF0000]/10';
    case 'apple_music': return 'text-[#FA243C] border-[#FA243C] bg-[#FA243C]/10';
    default: return 'text-[var(--text-muted)] border-[var(--border-default)] bg-[var(--bg-elevated)]';
  }
};

const formatLabel = (str) => {
  if (!str) return 'Unknown';
  return str.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
};

export function MusicCard({ track, onClick }) {
  return (
    <div 
      onClick={() => onClick(track)}
      className="group flex flex-col cursor-pointer border border-[var(--border-default)] bg-[var(--bg-surface)] rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md p-4"
    >
      <div className="flex gap-4">
        {/* Cover */}
        <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border border-[var(--border-default)] shadow-sm">
          {track.coverUrl ? (
            <img src={track.coverUrl} alt={track.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-[var(--bg-elevated)] flex items-center justify-center">
              <Music className="text-[var(--text-muted)]" size={24} />
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex justify-between items-start gap-2">
            <h3 className="font-serif text-lg text-[var(--text-primary)] font-medium leading-tight truncate">
              <span className="text-[var(--text-accent)] text-sm mr-2 align-middle opacity-80">◯</span>
              {track.title}
            </h3>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium whitespace-nowrap ${getStatusStyles(track.status)}`}>
              {formatLabel(track.status)}
            </span>
          </div>
          
          <div className="text-sm text-[var(--text-secondary)] truncate mt-1">
            {track.artist}
          </div>
          
          <div className="text-xs text-[var(--text-muted)] italic font-serif truncate mt-1">
            {track.album || 'Single'}
          </div>

          <div className="flex items-center gap-2 mt-auto pt-2">
            <span className={`text-[9px] px-1.5 py-0.5 rounded border uppercase tracking-wide font-medium ${getPlatformStyles(track.platform)}`}>
              {formatLabel(track.platform)}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {track.genres?.slice(0, 3).map(genre => (
          <span key={genre} className="text-[10px] px-2 py-0.5 rounded-full border border-[var(--tag-border)] text-[var(--tag-text)] bg-[var(--tag-bg)]">
            {genre}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 text-xs text-[var(--text-secondary)] mt-4">
        {track.playCount > 0 && (
          <div className="flex items-center gap-1 font-mono">
            <Play size={12} className="opacity-70" />
            <span>{track.playCount} plays</span>
          </div>
        )}
        {track.rating > 0 && (
          <div className="flex items-center gap-1">
            <Star size={12} className="fill-[var(--badge-highly-rec-bg)] text-[var(--badge-highly-rec-bg)] opacity-90" />
            <span>{track.rating}/10</span>
          </div>
        )}
      </div>

      {track.notes && (
        <p className="text-xs text-[var(--text-secondary)] line-clamp-2 mt-3 italic opacity-80 border-t border-[var(--border-subtle)] pt-3">
          "{track.notes}"
        </p>
      )}
    </div>
  );
}
