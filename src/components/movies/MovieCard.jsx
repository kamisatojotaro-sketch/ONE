import StatusBadge from '../shared/StatusBadge';
import GenreTag from '../shared/GenreTag';

export default function MovieCard({ movie, onClick }) {
  return (
    <div 
      onClick={() => onClick(movie)}
      className="group flex flex-col bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer duration-300"
    >
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-[var(--bg-elevated)]">
        {movie.posterUrl ? (
          <img 
            src={movie.posterUrl} 
            alt={movie.title} 
            referrerPolicy="no-referrer"
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[var(--text-muted)] p-4 text-center">
            No Poster Available
          </div>
        )}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {movie.rating && (
            <div className="bg-black/60 backdrop-blur-md text-white text-sm font-mono px-2 py-1 rounded-lg">
              {movie.rating}/10
            </div>
          )}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-serif text-[var(--text-primary)] mb-1 leading-tight flex items-start gap-2">
          <span className="text-[var(--accent-primary)] text-sm mt-1">◯</span>
          <span>
            {movie.title} <span className="text-[var(--text-muted)] text-base font-sans">({movie.releaseYear || 'N/A'})</span>
          </span>
        </h3>
        
        {movie.director && (
          <p className="text-sm text-[var(--text-secondary)] mb-3">Dir. {movie.director}</p>
        )}
        
        <div className="flex flex-wrap gap-2 mb-4">
          <StatusBadge status={movie.status} type="movie" />
          {movie.genres?.slice(0, 2).map(genre => (
            <GenreTag key={genre} genre={genre} />
          ))}
          {movie.genres?.length > 2 && (
            <span className="text-xs text-[var(--text-muted)] flex items-center px-1">+{movie.genres.length - 2}</span>
          )}
        </div>
        
        {movie.review && (
          <p className="text-sm text-[var(--text-secondary)] line-clamp-3 mb-4 flex-grow italic">
            "{movie.review}"
          </p>
        )}
        
        <div className="mt-auto pt-4 border-t border-[var(--border-color)]">
          <p className="text-xs text-[var(--text-muted)] italic font-serif">
            {movie.status === 'watched' && movie.watchDate ? `Watched on ${new Date(movie.watchDate).toLocaleDateString()}` : `Added ${new Date(movie.createdAt).toLocaleDateString()}`}
          </p>
        </div>
      </div>
    </div>
  );
}
