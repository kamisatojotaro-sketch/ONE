import { useState, useRef, useEffect } from 'react';
import { Flame, Sparkles, Star, Sliders, X, RotateCcw, Check, ChevronDown } from 'lucide-react';
import { getPriorityTierInfo, getDefaultPriority } from '../../data/priorityData';

export default function PriorityBadge({
  id,
  rating,
  title = '',
  onChangePriority,
  onResetPriority,
  interactive = true,
  size = 'md', // 'sm' | 'md' | 'lg'
  showMeter = true,
  className = ''
}) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);

  const effectiveRating = rating !== undefined && rating !== null ? rating : getDefaultPriority(id);
  const tierInfo = getPriorityTierInfo(effectiveRating);
  const defaultRating = getDefaultPriority(id);
  const isCustom = rating !== undefined && rating !== null && rating !== defaultRating;

  // Close popover when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelectScore = (newScore) => {
    if (onChangePriority) {
      onChangePriority(id, newScore);
    }
    setIsOpen(false);
  };

  const handleReset = (e) => {
    e.stopPropagation();
    if (onResetPriority) {
      onResetPriority(id);
    }
    setIsOpen(false);
  };

  // Size styling
  const sizeClasses = {
    sm: 'text-[10px] px-2 py-0.5 gap-1',
    md: 'text-[11px] sm:text-xs px-2.5 py-1 gap-1.5',
    lg: 'text-xs sm:text-sm px-3.5 py-1.5 gap-2 font-bold'
  }[size] || 'text-xs px-2.5 py-1 gap-1.5';

  return (
    <div className={`relative inline-block ${className}`} ref={popoverRef}>
      {/* Badge Button */}
      <button
        type="button"
        disabled={!interactive}
        onClick={(e) => {
          e.stopPropagation();
          if (interactive) setIsOpen(!isOpen);
        }}
        className={`inline-flex items-center rounded-full font-mono font-bold border transition-all select-none ${sizeClasses} ${tierInfo.badgeClass} ${
          interactive 
            ? 'cursor-pointer hover:shadow-xs active:scale-95 touch-manipulation hover:brightness-105' 
            : 'cursor-default'
        }`}
        title={`Exam Priority: ${effectiveRating}/10 (${tierInfo.label})${interactive ? ' • Click to customize priority' : ''}`}
      >
        {tierInfo.flameIcon ? (
          <Flame size={size === 'sm' ? 11 : 13} className="shrink-0 text-amber-500 fill-amber-500 animate-pulse" />
        ) : (
          <Star size={size === 'sm' ? 10 : 12} className="shrink-0 text-[var(--accent-primary)]" />
        )}

        <span>P: {effectiveRating}/10</span>

        {/* Small Visual Rating Bar / Meter */}
        {showMeter && (
          <div className="hidden sm:inline-flex w-7 h-1.5 rounded-full bg-black/15 dark:bg-white/15 overflow-hidden ml-0.5 shrink-0">
            <div 
              className="h-full rounded-full transition-all duration-300"
              style={{ 
                width: `${effectiveRating * 10}%`,
                backgroundColor: tierInfo.tagColor 
              }}
            />
          </div>
        )}

        {isCustom && (
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" title="Custom priority set" />
        )}

        {interactive && (
          <ChevronDown size={10} className={`opacity-60 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        )}
      </button>

      {/* Interactive 0 to 10 Rating Popover Dialog */}
      {isOpen && (
        <div 
          onClick={(e) => e.stopPropagation()}
          className="absolute z-50 mt-2 left-0 sm:left-auto sm:right-0 w-72 sm:w-80 p-3.5 sm:p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-2xl space-y-3 animate-in zoom-in-95 duration-150 cursor-default"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-2 border-b border-[var(--border-subtle)] pb-2.5">
            <div className="min-w-0">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] font-bold block">
                Customize Exam Priority (0–10)
              </span>
              <h5 className="font-serif text-sm font-bold text-[var(--text-primary)] truncate mt-0.5">
                {title || id}
              </h5>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] cursor-pointer"
            >
              <X size={14} />
            </button>
          </div>

          {/* Current Tier & Status */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs">
            <div className="flex items-center gap-2">
              <span 
                className="font-mono text-base font-bold px-2 py-0.5 rounded-lg border text-white"
                style={{ backgroundColor: tierInfo.tagColor, borderColor: tierInfo.tagColor }}
              >
                {effectiveRating}/10
              </span>
              <div>
                <span className="font-bold text-[var(--text-primary)] block">
                  {tierInfo.label}
                </span>
                <span className="text-[10px] text-[var(--text-muted)] block">
                  {tierInfo.description}
                </span>
              </div>
            </div>

            {isCustom && (
              <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/30">
                Custom
              </span>
            )}
          </div>

          {/* 0 to 10 Interactive Number Buttons (Touch-manipulation friendly) */}
          <div>
            <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)] mb-1.5">
              <span>0 (Low / Optional)</span>
              <span>10 (Crucial Board)</span>
            </div>

            <div className="grid grid-cols-6 sm:grid-cols-11 gap-1">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => {
                const isSelected = effectiveRating === score;
                const isScoreDefault = defaultRating === score;

                return (
                  <button
                    key={score}
                    type="button"
                    onClick={() => handleSelectScore(score)}
                    className={`h-8 sm:h-9 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer touch-manipulation flex flex-col items-center justify-center relative active:scale-95 ${
                      isSelected
                        ? 'bg-[var(--accent-primary)] text-white shadow-sm ring-2 ring-[var(--accent-primary)]/40'
                        : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    <span>{score}</span>
                    {isScoreDefault && !isSelected && (
                      <span className="w-1 h-1 rounded-full bg-[var(--text-muted)] absolute bottom-1" title="Default rating" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Preset Buttons */}
          <div className="flex items-center gap-1.5 pt-1">
            <button
              type="button"
              onClick={() => handleSelectScore(10)}
              className="flex-1 py-1.5 px-2 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/25 text-[11px] font-bold font-mono transition-colors cursor-pointer"
            >
              🔥 10 (Crucial)
            </button>
            <button
              type="button"
              onClick={() => handleSelectScore(7)}
              className="flex-1 py-1.5 px-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/25 text-[11px] font-bold font-mono transition-colors cursor-pointer"
            >
              ⚡ 7 (High)
            </button>
            <button
              type="button"
              onClick={() => handleSelectScore(5)}
              className="flex-1 py-1.5 px-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 text-[11px] font-bold font-mono transition-colors cursor-pointer"
            >
              📘 5 (Core)
            </button>
          </div>

          {/* Footer Reset & Default Info */}
          <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
            <span className="text-[10px] font-mono text-[var(--text-muted)]">
              CBSE Default: <strong>{defaultRating}/10</strong>
            </span>

            {isCustom && onResetPriority && (
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1 text-[11px] text-[var(--text-muted)] hover:text-[var(--accent-primary)] font-medium cursor-pointer"
              >
                <RotateCcw size={11} />
                <span>Reset to default</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
