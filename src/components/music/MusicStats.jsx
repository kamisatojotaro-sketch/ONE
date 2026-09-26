import React from 'react';
import { Music, Mic2, Star, Play } from 'lucide-react';

export function MusicStats({ tracks }) {
  if (!tracks || tracks.length === 0) return null;

  const total = tracks.length;
  const totalPlays = tracks.reduce((sum, t) => sum + (parseInt(t.playCount) || 0), 0);
  
  const ratedTracks = tracks.filter(t => t.rating > 0);
  const avgRating = ratedTracks.length > 0 
    ? (ratedTracks.reduce((sum, t) => sum + t.rating, 0) / ratedTracks.length).toFixed(1)
    : 0;
  
  const statusCounts = tracks.reduce((acc, t) => {
    acc[t.status] = (acc[t.status] || 0) + 1;
    return acc;
  }, {});

  const getStatusColor = (status) => {
    switch (status) {
      case 'listening': return 'var(--accent-primary)';
      case 'loved': return 'var(--badge-recommended-bg)';
      case 'on_repeat': return 'var(--badge-highly-rec-bg)';
      case 'archived': return 'var(--badge-not-rec-bg)';
      default: return 'var(--border-default)';
    }
  };

  const statusBars = ['listening', 'loved', 'on_repeat', 'archived']
    .filter(s => statusCounts[s] > 0)
    .map(s => ({
      status: s,
      count: statusCounts[s],
      percent: (statusCounts[s] / total) * 100,
      color: getStatusColor(s)
    }));

  return (
    <div className="bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-xl p-6 mb-8 shadow-sm">
      <h3 className="font-serif text-xl mb-6 text-[var(--text-primary)]">Library Overview</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-[var(--text-muted)] mb-1">
            <Music size={16} />
            <span className="text-sm uppercase tracking-wider">Total Tracks</span>
          </div>
          <span className="font-mono text-3xl font-light text-[var(--text-primary)]">{total}</span>
        </div>
        
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-[var(--text-muted)] mb-1">
            <Play size={16} />
            <span className="text-sm uppercase tracking-wider">Total Plays</span>
          </div>
          <span className="font-mono text-3xl font-light text-[var(--text-primary)]">{totalPlays.toLocaleString()}</span>
        </div>
        
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-[var(--text-muted)] mb-1">
            <Star size={16} />
            <span className="text-sm uppercase tracking-wider">Avg Rating</span>
          </div>
          <span className="font-mono text-3xl font-light text-[var(--text-primary)]">{avgRating}</span>
        </div>
        
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-[var(--text-muted)] mb-1">
            <Mic2 size={16} />
            <span className="text-sm uppercase tracking-wider">Top Status</span>
          </div>
          <span className="font-serif text-2xl font-light text-[var(--text-primary)] capitalize truncate">
            {statusBars.length > 0 ? statusBars.sort((a,b) => b.count - a.count)[0].status.replace('_', ' ') : 'N/A'}
          </span>
        </div>
      </div>

      <div>
        <div className="flex justify-between text-xs text-[var(--text-muted)] uppercase tracking-wider mb-2">
          <span>Status Distribution</span>
        </div>
        <div className="w-full h-3 flex rounded-full overflow-hidden mb-3">
          {statusBars.map(bar => (
            <div 
              key={bar.status}
              style={{ width: `${bar.percent}%`, backgroundColor: bar.color }}
              title={`${bar.status.replace('_', ' ')}: ${bar.count}`}
              className="h-full"
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-4 text-xs">
          {statusBars.map(bar => (
            <div key={bar.status} className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: bar.color }}></span>
              <span className="text-[var(--text-secondary)] capitalize">{bar.status.replace('_', ' ')}</span>
              <span className="text-[var(--text-muted)]">({bar.count})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
