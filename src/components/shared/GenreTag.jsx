export default function GenreTag({ genre }) {
  return (
    <span className="px-3 py-1 text-xs rounded-full border border-[var(--border-color)] text-[var(--text-secondary)] bg-[var(--bg-surface)]">
      {genre}
    </span>
  );
}
