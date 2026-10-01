import { useState, useEffect, useCallback } from 'react';
import { getDB } from '../db';
import { SEED_MOVIES } from '../data/seedMovies';

const STORE_NAME = 'movies';
export const OWNER_STORAGE_KEY = 'one_tracker_owner_mode';
export const SEED_VERSION_KEY = 'one_tracker_movies_seeded_v1';

export function isOwnerDevice() {
  if (typeof window === 'undefined') return false;
  try {
    // Guest test override
    if (localStorage.getItem('one_tracker_test_guest') === 'true') {
      return false;
    }

    // 1. URL parameter check (e.g. ?owner=true, ?owner, or ?user=jaasim)
    const params = new URLSearchParams(window.location.search);
    if (params.get('owner') === 'true' || params.get('user')?.toLowerCase() === 'jaasim' || params.has('owner')) {
      localStorage.setItem(OWNER_STORAGE_KEY, 'true');
      // Clean up URL parameter cleanly without page reload
      const newUrl = window.location.pathname + window.location.hash;
      window.history.replaceState({}, document.title, newUrl);
      return true;
    }

    // 2. Saved owner preference on this device
    if (localStorage.getItem(OWNER_STORAGE_KEY) === 'true') {
      return true;
    }

    // 3. Localhost development environment
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      return true;
    }
  } catch (e) {
    console.error('Error checking owner device:', e);
  }
  return false;
}

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadMovies = useCallback(async () => {
    setLoading(true);
    try {
      const db = await getDB();
      let allMovies = (await db.getAll(STORE_NAME)) || [];
      const isOwner = isOwnerDevice();

      if (isOwner) {
        // OWNER DEVICE: Ensure curated movies are seeded & up to date
        const hasSeeded = localStorage.getItem(SEED_VERSION_KEY);
        if (!hasSeeded || allMovies.length === 0) {
          for (const seed of SEED_MOVIES) {
            const matchIndex = allMovies.findIndex(
              m => m.id === seed.id || m.title.toLowerCase().trim() === seed.title.toLowerCase().trim()
            );

            if (matchIndex === -1) {
              await db.put(STORE_NAME, seed);
              allMovies.push(seed);
            } else {
              const current = allMovies[matchIndex];
              if (current.status !== seed.status) {
                const updated = { ...current, status: seed.status, updatedAt: new Date().toISOString() };
                await db.put(STORE_NAME, updated);
                allMovies[matchIndex] = updated;
              }
            }
          }
          localStorage.setItem(SEED_VERSION_KEY, 'true');
        }
      } else {
        // GUEST / OTHER DEVICES:
        // Automatically purge any previously auto-seeded items so visitors have a clean slate
        const seedIds = new Set(SEED_MOVIES.map(s => s.id));
        const filtered = [];
        let hadSeedMovies = false;

        for (const m of allMovies) {
          if (seedIds.has(m.id) || (typeof m.id === 'string' && m.id.startsWith('seed-'))) {
            await db.delete(STORE_NAME, m.id);
            hadSeedMovies = true;
          } else {
            filtered.push(m);
          }
        }

        if (hadSeedMovies) {
          allMovies = filtered;
        }
      }

      setMovies(
        allMovies.sort(
          (a, b) => new Date(b.updatedAt || b.createdAt || 0) - new Date(a.updatedAt || a.createdAt || 0)
        )
      );
    } catch (error) {
      console.error('Failed to load movies', error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  const activateOwnerMode = async () => {
    localStorage.removeItem('one_tracker_test_guest');
    localStorage.setItem(OWNER_STORAGE_KEY, 'true');
    localStorage.removeItem(SEED_VERSION_KEY);
    await loadMovies();
  };

  const deactivateOwnerMode = async () => {
    localStorage.removeItem(OWNER_STORAGE_KEY);
    localStorage.removeItem(SEED_VERSION_KEY);
    localStorage.setItem('one_tracker_test_guest', 'true');
    await loadMovies();
  };

  const addMovie = async (movie) => {
    try {
      const db = await getDB();
      const now = new Date().toISOString();
      const newMovie = {
        ...movie,
        id: crypto.randomUUID(),
        createdAt: now,
        updatedAt: now,
      };
      await db.put(STORE_NAME, newMovie);
      await loadMovies();
      return newMovie;
    } catch (error) {
      console.error('Failed to add movie', error);
      throw error;
    }
  };

  const updateMovie = async (id, updates) => {
    try {
      const db = await getDB();
      const existing = await db.get(STORE_NAME, id);
      if (!existing) throw new Error('Movie not found');

      const updatedMovie = {
        ...existing,
        ...updates,
        updatedAt: new Date().toISOString(),
      };

      await db.put(STORE_NAME, updatedMovie);
      await loadMovies();
      return updatedMovie;
    } catch (error) {
      console.error('Failed to update movie', error);
      throw error;
    }
  };

  const deleteMovie = async (id) => {
    try {
      const db = await getDB();
      await db.delete(STORE_NAME, id);
      await loadMovies();
    } catch (error) {
      console.error('Failed to delete movie', error);
      throw error;
    }
  };

  return {
    movies,
    loading,
    addMovie,
    updateMovie,
    deleteMovie,
    isOwner: isOwnerDevice(),
    activateOwnerMode,
    deactivateOwnerMode,
    refresh: loadMovies,
  };
};
