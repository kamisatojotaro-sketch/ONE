import { Star } from 'lucide-react';

export default function RatingInput({ value, onChange, max = 10 }) {
  return (
    <div className="flex items-center gap-2 bg-[var(--bg-elevated)] rounded-xl px-3 py-2 border border-[var(--border-color)] w-fit">
      <Star size={18} className="text-[#C4A77D]" fill={value > 0 ? "#C4A77D" : "none"} />
      <input 
        type="number" 
        min="0" 
        max={max} 
        value={value || ''} 
        onChange={(e) => {
          let val = parseInt(e.target.value);
          if (isNaN(val)) val = null;
          else if (val < 0) val = 0;
          else if (val > max) val = max;
          onChange(val);
        }}
        className="w-12 bg-transparent text-[var(--text-primary)] font-mono text-center outline-none"
        placeholder="-"
      />
      <span className="text-[var(--text-muted)] font-mono">/ {max}</span>
    </div>
  );
}
