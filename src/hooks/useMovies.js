import { useState, useEffect, useCallback } from 'react';
import { getDB } from '../db';

const STORE_NAME = 'movies';

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadMovies = useCallback(async () => {
    setLoading(true);
    try {
      const db = await getDB();
      const allMovies = (await db.getAll(STORE_NAME)) || [];
      setMovies(allMovies.sort((a, b) => new Date(b.updatedAt || b.createdAt || 0) - new Date(a.updatedAt || a.createdAt || 0)));
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
