import { useState, useEffect, useCallback } from 'react';
import { getDB } from '../db';

export function useNotes() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const refreshNotes = useCallback(async () => {
    setIsLoading(true);
    try {
      const db = await getDB();
      const allNotes = await db.getAll('notes');
      // Sort by updatedAt descending
      allNotes.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
      setNotes(allNotes);
    } catch (error) {
      console.error("Failed to load notes:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshNotes();
  }, [refreshNotes]);

  const addNote = async (noteData) => {
    const db = await getDB();
    const id = crypto.randomUUID();
    const now = new Date().toISOString();
    
    const newNote = {
      id,
      title: noteData.title || '',
      content: noteData.content || '',
      category: noteData.category || 'General',
      tags: noteData.tags || [],
      isPinned: noteData.isPinned || false,
      createdAt: now,
      updatedAt: now,
    };
    
    await db.put('notes', newNote);
    await refreshNotes();
    return newNote;
  };

  const updateNote = async (id, updates) => {
    const db = await getDB();
    const existing = await db.get('notes', id);
    if (!existing) return;
    
    const updatedNote = {
      ...existing,
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    
    await db.put('notes', updatedNote);
    await refreshNotes();
    return updatedNote;
  };

  const deleteNote = async (id) => {
    const db = await getDB();
    await db.delete('notes', id);
    await refreshNotes();
  };

  return {
    notes,
    isLoading,
    addNote,
    updateNote,
    deleteNote,
    refreshNotes
  };
}
