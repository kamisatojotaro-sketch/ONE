import { useState, useEffect, useCallback } from 'react';
import { getDB } from '../db';
import { SEED_MOVIES } from '../data/seedMovies';

const STORE_NAME = 'movies';
const SEED_VERSION_KEY = 'one_tracker_movies_seeded_v1';

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadMovies = useCallback(async () => {
    setLoading(true);
    try {
      const db = await getDB();
      let allMovies = (await db.getAll(STORE_NAME)) || [];

      // Ensure seed movies are present and correctly categorized
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

      setMovies(allMovies.sort((a, b) => new Date(b.updatedAt || b.createdAt || 0) - new Date(a.updatedAt || a.createdAt || 0)));
    } catch (error) {
      console.error('Failed to load movies', error);
      setMovies(SEED_MOVIES);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

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
    refresh: loadMovies
  };
};
