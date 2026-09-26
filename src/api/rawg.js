const RAWG_BASE_URL = 'https://api.rawg.io/api';

export const getRawgApiKey = () => localStorage.getItem('rawg_api_key');

export const searchGames = async (query, page = 1) => {
  const apiKey = getRawgApiKey();
  if (!apiKey) return { results: [], error: 'No API Key' };

  try {
    const res = await fetch(`${RAWG_BASE_URL}/games?key=${apiKey}&search=${encodeURIComponent(query)}&page=${page}&page_size=10`);
    if (!res.ok) throw new Error('Failed to fetch from RAWG');
    const data = await res.json();
    return { results: data.results || [] };
  } catch (err) {
    console.error('RAWG search error:', err);
    return { results: [], error: err.message };
  }
};

export const getGameDetails = async (id) => {
  const apiKey = getRawgApiKey();
  if (!apiKey) return null;

  try {
    const res = await fetch(`${RAWG_BASE_URL}/games/${id}?key=${apiKey}`);
    if (!res.ok) throw new Error('Failed to fetch game details');
    return await res.json();
  } catch (err) {
    console.error('RAWG details error:', err);
    return null;
  }
};
