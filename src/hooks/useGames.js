import { useState, useEffect, useCallback } from 'react';
import { getDB } from '../db';

export function useGames() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  const refreshGames = useCallback(async () => {
    try {
      const db = await getDB();
      let allGames = [];
      try {
        allGames = await db.getAllFromIndex('games', 'createdAt');
        allGames.reverse();
      } catch {
        allGames = (await db.getAll('games')) || [];
        allGames.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
      }
      setGames(allGames);
    } catch (err) {
      console.error('Error fetching games:', err);
      setGames([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshGames();
  }, [refreshGames]);

  const addGame = async (gameData) => {
    try {
      const db = await getDB();
      const id = crypto.randomUUID();
      const now = new Date().toISOString();
      const newGame = {
        ...gameData,
        id,
        createdAt: now,
        updatedAt: now,
      };
      await db.put('games', newGame);
      await refreshGames();
      return newGame;
    } catch (error) {
      console.error('Error adding game:', error);
      throw error;
    }
  };

  const updateGame = async (id, updates) => {
    try {
      const db = await getDB();
      const game = await db.get('games', id);
      if (!game) throw new Error('Game not found');
      
      const updated = {
        ...game,
        ...updates,
        updatedAt: new Date().toISOString(),
      };
      await db.put('games', updated);
      await refreshGames();
      return updated;
    } catch (error) {
      console.error('Error updating game:', error);
      throw error;
    }
  };

  const deleteGame = async (id) => {
    try {
      const db = await getDB();
      await db.delete('games', id);
      await refreshGames();
    } catch (error) {
      console.error('Error deleting game:', error);
      throw error;
    }
  };

  const getGamesByStatus = async (status) => {
    try {
      const db = await getDB();
      try {
        return await db.getAllFromIndex('games', 'status', status);
      } catch {
        const all = (await db.getAll('games')) || [];
        return all.filter(g => g.status === status);
      }
    } catch (error) {
      console.error('Error fetching by status:', error);
      return [];
    }
  };

  return { games, loading, addGame, updateGame, deleteGame, getGamesByStatus, refreshGames };
}
