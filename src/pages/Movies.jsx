import { useState, useMemo } from 'react';
import { Film, Plus, AlertCircle } from 'lucide-react';
import { useMovies } from '../hooks/useMovies';
import MovieCard from '../components/movies/MovieCard';
import AddMovieModal from '../components/movies/AddMovieModal';
import MovieDetail from '../components/movies/MovieDetail';
import MovieStats from '../components/movies/MovieStats';
import FilterPills from '../components/shared/FilterPills';
import SearchBar from '../components/shared/SearchBar';
import EmptyState from '../components/shared/EmptyState';

const STATUS_FILTERS = [
  { value: 'all', label: 'All Movies' },
  { value: 'want_to_watch', label: 'Want to Watch' },
  { value: 'watched', label: 'Watched' },
  { value: 'rewatching', label: 'Rewatching' },
  { value: 'dropped', label: 'Dropped' }
];

export default function Movies() {
  const { movies, loading, addMovie, updateMovie, deleteMovie } = useMovies();
  
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const filteredMovies = useMemo(() => {
    return movies.filter(movie => {
      const matchesFilter = filter === 'all' || movie.status === filter;
      const matchesSearch = movie.title.toLowerCase().includes(search.toLowerCase()) ||
                            (movie.director && movie.director.toLowerCase().includes(search.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [movies, filter, search]);

  const tmdbKey = localStorage.getItem('tmdb_api_key');

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center text-[var(--text-secondary)] font-serif italic">
        Loading stories...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 pb-24">
      <header className="mb-10">
        <h1 className="text-4xl font-serif text-[var(--text-primary)] flex items-center gap-3">
          <Film className="text-[var(--accent-primary)]" />
          Movies
        </h1>
        <p className="font-cursive text-xl text-[var(--text-secondary)] mt-2 italic">
          stories witnessed
        </p>
      </header>

      {!tmdbKey && (
        <div className="mb-8 p-4 bg-[#C4A77D]/10 border border-[#C4A77D]/30 rounded-2xl flex items-start gap-3 text-[var(--text-secondary)]">
          <AlertCircle className="text-[#C4A77D] shrink-0 mt-0.5" size={20} />
          <p>
            TMDB API key is missing. Adding movies via search will not work. 
            Please add your API key in the settings.
          </p>
        </div>
      )}

      <MovieStats movies={movies} />

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="w-full md:w-64 shrink-0">
          <SearchBar value={search} onChange={setSearch} placeholder="Search movies..." />
        </div>
        <div className="flex-grow overflow-hidden">
          <FilterPills options={STATUS_FILTERS} selected={filter} onChange={setFilter} />
        </div>
      </div>

      {filteredMovies.length === 0 ? (
        <EmptyState 
          icon={Film}
          title={search ? "No movies found" : "No movies yet"}
          description={search ? "Try adjusting your search or filters." : "Start tracking the movies you want to watch or have watched."}
          actionLabel={!search ? "Add Movie" : null}
          onAction={() => setIsAddOpen(true)}
        />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMovies.map(movie => (
            <MovieCard 
              key={movie.id} 
              movie={movie} 
              onClick={setSelectedMovie}
            />
          ))}
        </div>
      )}

      <button
        onClick={() => setIsAddOpen(true)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-[var(--accent-primary)] text-[var(--bg-base)] rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform hover:shadow-xl z-10"
      >
        <Plus size={24} />
      </button>

      <AddMovieModal 
        isOpen={isAddOpen} 
        onClose={() => setIsAddOpen(false)} 
        onAdd={addMovie} 
      />

      <MovieDetail 
        movie={selectedMovie} 
        isOpen={!!selectedMovie} 
        onClose={() => setSelectedMovie(null)}
        onUpdate={updateMovie}
        onDelete={deleteMovie}
      />
    </div>
  );
}
