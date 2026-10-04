import React, { useState } from 'react';
import { Bell, Clock, Play, X, RotateCcw, Volume2, Sparkles, Check } from 'lucide-react';
import { useTimer } from '../../context/TimerContext';

export default function TimerAlarmOverlay() {
  const { 
    showAlarmOverlay, 
    startNewTimerPreset, 
    dismissAlarmOverlay, 
    playBellSound,
    minutes 
  } = useTimer();

  const [customMins, setCustomMins] = useState(25);

  if (!showAlarmOverlay) return null;

  const presets = [
    { label: '5 Minutes', value: 5, tag: 'Quick Break', desc: '5 min pause to stretch and hydrate' },
    { label: '10 Minutes', value: 10, tag: 'Revision Sprint', desc: '10 min quick recall & review' },
    { label: '30 Minutes', value: 30, tag: 'Deep Focus', desc: '30 min intensive study block' },
    { label: '1 Hour', value: 60, tag: 'Full Session', desc: '60 min board exam simulation' }
  ];

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="alarm-modal-title"
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-6 animate-in fade-in duration-300 select-none overflow-y-auto"
    >
      <div className="relative w-full max-w-xl bg-[var(--bg-surface)] border-2 border-amber-500/50 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-center my-auto">
        
        {/* Dismiss 'X' Button in top corner */}
        <button
          onClick={dismissAlarmOverlay}
          className="absolute top-4 right-4 p-2 rounded-full text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors cursor-pointer"
          title="Dismiss and close overlay"
        >
          <X size={20} />
        </button>

        {/* Pulsing Bell Icon & Sound Indicator */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <div className="relative">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-amber-500/15 border-2 border-amber-500/40 flex items-center justify-center text-amber-500 shadow-lg animate-bounce">
              <Bell size={40} className="stroke-[2.2]" />
            </div>
            <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-amber-500 text-black text-xs font-bold flex items-center justify-center font-mono animate-ping">
              !
            </span>
          </div>

          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-xs font-mono font-bold uppercase tracking-wider">
              <Volume2 size={13} />
              2-Second Bell Chime Alert
            </span>
            <h2 id="alarm-modal-title" className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
              The timer has went out
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed">
              Your {minutes}-minute study session has completed! Choose a duration below to create a new timer immediately.
            </p>
          </div>
        </div>

        {/* Quick-Create New Timer Presets (5m, 10m, 30m, 1hr) */}
        <div className="space-y-3 pt-2 border-t border-[var(--border-subtle)] text-left">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent-primary)] flex items-center gap-1.5">
              <Clock size={14} />
              Create a New Timer:
            </span>
            <span className="text-[11px] font-mono text-[var(--text-muted)]">
              Starts immediately on click
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            {presets.map((p) => (
              <button
                key={p.value}
                onClick={() => startNewTimerPreset(p.value)}
                className="group p-3.5 sm:p-4 rounded-2xl bg-[var(--bg-elevated)] border-2 border-[var(--border-default)] hover:border-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/10 text-left transition-all cursor-pointer shadow-xs hover:shadow-md flex items-center justify-between"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)]">
                      {p.label}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[var(--bg-surface)] text-[var(--text-muted)] group-hover:bg-[var(--accent-primary)] group-hover:text-white transition-colors">
                      {p.tag}
                    </span>
                  </div>
                  <p className="text-[11px] text-[var(--text-secondary)] line-clamp-1">
                    {p.desc}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-xl bg-[var(--bg-surface)] group-hover:bg-[var(--accent-primary)] text-[var(--text-muted)] group-hover:text-white flex items-center justify-center shrink-0 transition-colors ml-2 shadow-2xs">
                  <Play size={14} className="ml-0.5" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Custom Duration Input & Secondary Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-[var(--border-subtle)]">
          {/* Custom Minute Input */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-xs font-mono text-[var(--text-secondary)]">Custom:</span>
            <input
              type="number"
              min="1"
              max="180"
              value={customMins}
              onChange={(e) => setCustomMins(Math.max(1, Math.min(180, parseInt(e.target.value, 10) || 1)))}
              className="w-16 text-center text-xs font-mono font-bold py-1.5 px-2 bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-default)] rounded-xl focus:outline-none focus:border-[var(--accent-primary)]"
            />
            <span className="text-xs font-mono text-[var(--text-muted)]">min</span>
            <button
              onClick={() => startNewTimerPreset(customMins)}
              className="px-3 py-1.5 rounded-xl bg-[var(--bg-elevated)] hover:bg-[var(--accent-primary)] hover:text-white text-xs font-mono font-bold text-[var(--text-primary)] border border-[var(--border-default)] transition-colors cursor-pointer"
            >
              Start
            </button>
          </div>

          {/* Replay Bell & Dismiss Buttons */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={playBellSound}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] border border-[var(--border-subtle)] transition-colors cursor-pointer"
              title="Play 2-second bell sound again"
            >
              <Volume2 size={13} />
              <span>Ring Bell</span>
            </button>
            <button
              onClick={dismissAlarmOverlay}
              className="px-4 py-1.5 rounded-xl bg-[var(--bg-elevated)] hover:bg-[var(--bg-surface-hover)] text-xs font-semibold text-[var(--text-primary)] border border-[var(--border-default)] transition-colors cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
