const BASE_URL = 'https://api.jikan.moe/v4';

let lastRequestTime = 0;
const RATE_LIMIT_DELAY = 1000; // 1 second to be safe for 3 requests/sec

const queueRequest = async () => {
  const now = Date.now();
  const timeSinceLast = now - lastRequestTime;
  if (timeSinceLast < RATE_LIMIT_DELAY) {
    await new Promise((resolve) => setTimeout(resolve, RATE_LIMIT_DELAY - timeSinceLast));
  }
  lastRequestTime = Date.now();
};

export const searchAnime = async (query, page = 1) => {
  if (!query) return [];
  await queueRequest();
  try {
    const res = await fetch(`${BASE_URL}/anime?q=${encodeURIComponent(query)}&page=${page}&sfw=true`);
    if (!res.ok) throw new Error('Failed to fetch anime');
    const data = await res.json();
    return data.data || [];
  } catch (err) {
    console.error("Jikan API Error (searchAnime):", err);
    return [];
  }
};

export const getAnimeDetails = async (malId) => {
  await queueRequest();
  try {
    const res = await fetch(`${BASE_URL}/anime/${malId}/full`);
    if (!res.ok) throw new Error('Failed to fetch anime details');
    const data = await res.json();
    return data.data || null;
  } catch (err) {
    console.error("Jikan API Error (getAnimeDetails):", err);
    return null;
  }
};

export const getAnimeByFilter = async (filter) => {
  await queueRequest();
  try {
    const queryParams = new URLSearchParams(filter).toString();
    const res = await fetch(`${BASE_URL}/anime?${queryParams}`);
    if (!res.ok) throw new Error('Failed to fetch anime by filter');
    const data = await res.json();
    return data.data || [];
  } catch (err) {
    console.error("Jikan API Error (getAnimeByFilter):", err);
    return [];
  }
};
