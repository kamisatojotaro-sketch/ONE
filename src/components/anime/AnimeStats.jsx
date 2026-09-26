import React, { useMemo } from 'react';

export default function AnimeStats({ animeList }) {
  const stats = useMemo(() => {
    if (!animeList.length) return null;

    const total = animeList.length;
    let episodesWatched = 0;
    let totalRating = 0;
    let ratingCount = 0;
    const statusCount = { watching: 0, completed: 0, plan_to_watch: 0, on_hold: 0, dropped: 0 };
    
    animeList.forEach(a => {
      episodesWatched += (a.episodesWatched || 0);
      statusCount[a.status]++;
      if (a.rating) {
        totalRating += a.rating;
        ratingCount++;
      }
    });

    const watchTimeMins = episodesWatched * 24;
    const watchTimeDays = (watchTimeMins / (24 * 60)).toFixed(1);

    return {
      total,
      episodesWatched,
      watchTimeDays,
      avgRating: ratingCount ? (totalRating / ratingCount).toFixed(1) : '-',
      statusCount
    };
  }, [animeList]);

  if (!stats) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div className="p-4 bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-xl flex flex-col">
        <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">Total Anime</span>
        <span className="font-mono text-2xl text-[var(--text-primary)]">{stats.total}</span>
      </div>
      <div className="p-4 bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-xl flex flex-col">
        <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">Eps Watched</span>
        <span className="font-mono text-2xl text-[var(--text-primary)]">{stats.episodesWatched}</span>
      </div>
      <div className="p-4 bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-xl flex flex-col">
        <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">Watch Time</span>
        <span className="font-mono text-2xl text-[var(--text-primary)]">{stats.watchTimeDays}<span className="text-sm font-sans ml-1 text-[var(--text-secondary)]">days</span></span>
      </div>
      <div className="p-4 bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-xl flex flex-col">
        <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">Avg Score</span>
        <span className="font-mono text-2xl text-[var(--text-primary)]">{stats.avgRating}</span>
      </div>
    </div>
  );
}
