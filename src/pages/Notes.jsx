import { useState, useMemo } from 'react';
import { BookOpen, Plus, Search, SortDesc } from 'lucide-react';
import { useNotes } from '../hooks/useNotes';
import NoteCard from '../components/notes/NoteCard';
import NoteEditor from '../components/notes/NoteEditor';
import CategoryManager from '../components/notes/CategoryManager';
import EmptyState from '../components/shared/EmptyState';
import SearchBar from '../components/shared/SearchBar';

export default function Notes() {
  const { notes, isLoading, addNote, updateNote, deleteNote } = useNotes();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);
  const [sortBy, setSortBy] = useState('updatedAt'); // 'updatedAt', 'createdAt', 'title'
  
  const [editingNote, setEditingNote] = useState(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  // Derived state
  const { categories, categoryCounts } = useMemo(() => {
    const cats = new Set();
    const counts = {};
    notes.forEach(n => {
      if (n.category) {
        cats.add(n.category);
        counts[n.category] = (counts[n.category] || 0) + 1;
      }
    });
    return { categories: Array.from(cats).sort(), categoryCounts: counts };
  }, [notes]);

  const filteredNotes = useMemo(() => {
    let result = notes;
    
    if (activeCategory) {
      result = result.filter(n => n.category === activeCategory);
    }
    
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(n => 
        (n.title && n.title.toLowerCase().includes(q)) || 
        (n.content && n.content.toLowerCase().includes(q)) ||
        (n.tags && n.tags.some(t => t.toLowerCase().includes(q)))
      );
    }

    result = [...result].sort((a, b) => {
      // Always put pinned first
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;
      
      if (sortBy === 'updatedAt') return new Date(b.updatedAt) - new Date(a.updatedAt);
      if (sortBy === 'createdAt') return new Date(b.createdAt) - new Date(a.createdAt);
      if (sortBy === 'title') return (a.title || '').localeCompare(b.title || '');
      return 0;
    });
    
    return result;
  }, [notes, activeCategory, searchQuery, sortBy]);

  const handleOpenEditor = (note = null) => {
    setEditingNote(note);
    setIsEditorOpen(true);
  };

  const handleSaveNote = async (noteData) => {
    if (noteData.id) {
      await updateNote(noteData.id, noteData);
    } else {
      await addNote(noteData);
    }
  };

  const pinnedCount = notes.filter(n => n.isPinned).length;

  return (
    <div className="h-full flex flex-col pb-20 md:pb-0 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h1 className="font-serif text-4xl font-bold text-text-primary flex items-center gap-3">
            <BookOpen className="text-accent-primary" size={32} />
            Study Notes
            <span className="font-cursive text-text-accent text-3xl font-normal ml-2 mt-2">quietly kept</span>
          </h1>
          <div className="flex gap-4 mt-3 text-sm font-sans text-text-secondary">
            <span><strong>{notes.length}</strong> total notes</span>
            <span><strong>{categories.length}</strong> categories</span>
            {pinnedCount > 0 && <span><strong>{pinnedCount}</strong> pinned</span>}
          </div>
        </div>
        
        <button 
          onClick={() => handleOpenEditor()}
          className="flex items-center gap-2 bg-accent-primary hover:bg-accent-primary-hover text-white px-5 py-2.5 rounded-xl font-medium shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
        >
          <Plus size={20} />
          New Note
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 flex-1 items-start">
        {/* Sidebar */}
        <div className="w-full lg:w-64 flex-shrink-0 flex flex-col gap-6">
          <SearchBar 
            value={searchQuery} 
            onChange={setSearchQuery} 
            placeholder="Search notes, content, tags..."
          />
          
          <div className="bg-bg-surface border border-border-default rounded-xl p-4 shadow-sm flex items-center gap-3">
            <SortDesc size={18} className="text-text-muted" />
            <select 
              value={sortBy} 
              onChange={e => setSortBy(e.target.value)}
              className="bg-transparent border-none outline-none text-sm text-text-primary flex-1 font-medium cursor-pointer"
            >
              <option value="updatedAt">Sort by Date Updated</option>
              <option value="createdAt">Sort by Date Created</option>
              <option value="title">Sort by Title (A-Z)</option>
            </select>
          </div>

          <CategoryManager 
            categories={categories}
            counts={categoryCounts}
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 w-full">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent-primary"></div>
            </div>
          ) : filteredNotes.length === 0 ? (
            <EmptyState 
              icon={BookOpen} 
              title={searchQuery || activeCategory ? "No matching notes found" : "Your notebook is empty"} 
              description={searchQuery || activeCategory ? "Try adjusting your filters or search terms." : "Start jotting down your study notes, thoughts, and ideas."}
              action={searchQuery || activeCategory ? null : { label: "Create First Note", onClick: () => handleOpenEditor() }}
            />
          ) : (
            <div className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6">
              {filteredNotes.map(note => (
                <div key={note.id} className="break-inside-avoid">
                  <NoteCard 
                    note={note} 
                    onClick={() => handleOpenEditor(note)} 
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {isEditorOpen && (
        <NoteEditor 
          note={editingNote} 
          onSave={handleSaveNote}
          onDelete={deleteNote}
          onClose={() => setIsEditorOpen(false)}
        />
      )}
    </div>
  );
}
