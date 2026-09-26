import { useState, useEffect, useCallback } from 'react';
import { getDB } from '../db';

export function useMusic() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);

  const refreshTracks = useCallback(async () => {
    try {
      const db = await getDB();
      let allTracks = [];
      try {
        allTracks = await db.getAllFromIndex('music_events', 'createdAt');
        allTracks.reverse();
      } catch {
        allTracks = (await db.getAll('music_events')) || [];
        allTracks.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
      }
      setTracks(allTracks);
    } catch (err) {
      console.error('Error fetching music tracks:', err);
      setTracks([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshTracks();
  }, [refreshTracks]);

  const addTrack = async (trackData) => {
    try {
      const db = await getDB();
      const id = crypto.randomUUID();
      const now = new Date().toISOString();
      const newTrack = {
        ...trackData,
        id,
        createdAt: now,
        updatedAt: now,
      };
      await db.put('music_events', newTrack);
      await refreshTracks();
      return newTrack;
    } catch (error) {
      console.error('Error adding track:', error);
      throw error;
    }
  };

  const updateTrack = async (id, updates) => {
    try {
      const db = await getDB();
      const track = await db.get('music_events', id);
      if (!track) throw new Error('Track not found');
      
      const updated = {
        ...track,
        ...updates,
        updatedAt: new Date().toISOString(),
      };
      await db.put('music_events', updated);
      await refreshTracks();
      return updated;
    } catch (error) {
      console.error('Error updating track:', error);
      throw error;
    }
  };

  const deleteTrack = async (id) => {
    try {
      const db = await getDB();
      await db.delete('music_events', id);
      await refreshTracks();
    } catch (error) {
      console.error('Error deleting track:', error);
      throw error;
    }
  };

  return { tracks, loading, addTrack, updateTrack, deleteTrack, refreshTracks };
}
