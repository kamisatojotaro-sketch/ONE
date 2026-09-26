import { useState, useEffect, useCallback } from 'react';
import { getDB } from '../db/index';

export function useAnime() {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);

  const refreshAnime = useCallback(async () => {
    try {
      setLoading(true);
      const db = await getDB();
      const allAnime = await db.getAll('anime');
      // Sort by updatedAt descending by default
      const sortedAnime = (allAnime || []).sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
      setAnimeList(sortedAnime);
    } catch (err) {
      console.error("Failed to load anime from DB", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshAnime();
  }, [refreshAnime]);

  const addAnime = async (animeData) => {
    try {
      const db = await getDB();
      const newAnime = {
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        ...animeData
      };
      await db.put('anime', newAnime);
      await refreshAnime();
      return newAnime;
    } catch (err) {
      console.error("Failed to add anime", err);
      throw err;
    }
  };

  const updateAnime = async (id, updates) => {
    try {
      const db = await getDB();
      const existing = await db.get('anime', id);
      if (!existing) throw new Error('Anime not found');
      
      const updated = {
        ...existing,
        ...updates,
        updatedAt: new Date().toISOString()
      };
      await db.put('anime', updated);
      await refreshAnime();
      return updated;
    } catch (err) {
      console.error("Failed to update anime", err);
      throw err;
    }
  };

  const deleteAnime = async (id) => {
    try {
      const db = await getDB();
      await db.delete('anime', id);
      await refreshAnime();
    } catch (err) {
      console.error("Failed to delete anime", err);
      throw err;
    }
  };

  const getAnimeByStatus = (status) => {
    if (status === 'All') return animeList;
    return animeList.filter(a => a.status === status);
  };

  return {
    animeList,
    loading,
    addAnime,
    updateAnime,
    deleteAnime,
    getAnimeByStatus,
    refreshAnime
  };
}
