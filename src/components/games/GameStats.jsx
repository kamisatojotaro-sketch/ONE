import React from 'react';
import { Gamepad2, Clock, Trophy, Target } from 'lucide-react';

export function GameStats({ games }) {
  if (!games || games.length === 0) return null;

  const total = games.length;
  const totalHours = games.reduce((sum, g) => sum + (parseFloat(g.hoursPlayed) || 0), 0);
  const completed = games.filter(g => g.status === 'completed').length;
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  const statusCounts = games.reduce((acc, g) => {
    acc[g.status] = (acc[g.status] || 0) + 1;
    return acc;
  }, {});

  const getStatusColor = (status) => {
    switch (status) {
      case 'playing': return 'var(--accent-primary)';
      case 'completed': return 'var(--badge-highly-rec-bg)';
      case 'dropped': return 'var(--badge-recommended-bg)';
      case 'backlog': return 'var(--badge-not-rec-bg)';
      case 'on_hold': return 'var(--badge-mixed-bg)';
      default: return 'var(--border-default)';
    }
  };

  const statusBars = ['playing', 'completed', 'on_hold', 'backlog', 'dropped']
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
            <Gamepad2 size={16} />
            <span className="text-sm uppercase tracking-wider">Total Games</span>
          </div>
          <span className="font-mono text-3xl font-light text-[var(--text-primary)]">{total}</span>
        </div>
        
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-[var(--text-muted)] mb-1">
            <Clock size={16} />
            <span className="text-sm uppercase tracking-wider">Hours Logged</span>
          </div>
          <span className="font-mono text-3xl font-light text-[var(--text-primary)]">{totalHours.toLocaleString()}</span>
        </div>
        
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-[var(--text-muted)] mb-1">
            <Trophy size={16} />
            <span className="text-sm uppercase tracking-wider">Completed</span>
          </div>
          <span className="font-mono text-3xl font-light text-[var(--text-primary)]">{completed}</span>
        </div>
        
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-[var(--text-muted)] mb-1">
            <Target size={16} />
            <span className="text-sm uppercase tracking-wider">Completion</span>
          </div>
          <span className="font-mono text-3xl font-light text-[var(--text-primary)]">{completionRate}%</span>
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
