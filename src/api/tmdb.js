const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

const getApiKey = () => localStorage.getItem('tmdb_api_key');

export const searchMovies = async (query, page = 1) => {
  const apiKey = getApiKey();
  if (!apiKey) throw new Error('TMDB API key not found');
  if (!query) return { results: [] };

  const response = await fetch(
    `${TMDB_BASE_URL}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}&page=${page}`
  );

  if (!response.ok) {
    throw new Error('Failed to search movies');
  }

  return response.json();
};

export const getMovieDetails = async (id) => {
  const apiKey = getApiKey();
  if (!apiKey) throw new Error('TMDB API key not found');

  const response = await fetch(
    `${TMDB_BASE_URL}/movie/${id}?api_key=${apiKey}&append_to_response=credits`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch movie details');
  }

  return response.json();
};

export const getImageUrl = (path, size = 'w500') => {
  if (!path) return null;
  return `${TMDB_IMAGE_BASE_URL}/${size}${path}`;
};
