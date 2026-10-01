import { useState, useEffect, useRef } from 'react';
import { Key, Moon, Sun, Download, Upload, Trash2, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { openDB } from 'idb';
import { useTheme } from '../context/ThemeContext';

const DB_NAME = 'one-tracker-db';

export default function Settings() {
  const [rawgKey, setRawgKey] = useState(localStorage.getItem('rawg_api_key') || '');
  const [tmdbKey, setTmdbKey] = useState(localStorage.getItem('tmdb_api_key') || '');
  const [showRawg, setShowRawg] = useState(false);
  const [showTmdb, setShowTmdb] = useState(false);
  
  const { isDark, toggleTheme } = useTheme();
  const [deleteConfirm, setDeleteConfirm] = useState('');
  
  const [statusMessage, setStatusMessage] = useState('');
  const fileInputRef = useRef(null);

  const saveApiKeys = () => {
    localStorage.setItem('rawg_api_key', rawgKey);
    localStorage.setItem('tmdb_api_key', tmdbKey);
    setStatusMessage('API keys saved successfully!');
    setTimeout(() => setStatusMessage(''), 3000);
  };

  const exportData = async () => {
    try {
      const db = await openDB(DB_NAME, 1);
      const stores = Array.from(db.objectStoreNames);
      const exportObj = { exportedAt: new Date().toISOString() };
      
      for (const store of stores) {
        exportObj[store] = await db.getAll(store);
      }
      
      const blob = new Blob([JSON.stringify(exportObj, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `one-backup-${new Date().toISOString().split('T')[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Export failed', err);
      alert('Failed to export data');
    }
  };

  const handleImport = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const data = JSON.parse(event.target.result);
        if (!data.exportedAt) throw new Error('Invalid backup file');

        const db = await openDB(DB_NAME, 1);
        const stores = Array.from(db.objectStoreNames);
        
        let totalImported = 0;
        for (const store of stores) {
          if (data[store] && Array.isArray(data[store])) {
            const tx = db.transaction(store, 'readwrite');
            for (const item of data[store]) {
              await tx.store.put(item);
              totalImported++;
            }
            await tx.done;
          }
        }
        
        setStatusMessage(`Successfully imported ${totalImported} items!`);
        setTimeout(() => setStatusMessage(''), 3000);
        window.location.reload(); // Reload to reflect changes across app
      } catch (err) {
        console.error('Import failed', err);
        alert('Failed to import data: ' + err.message);
      }
      // Reset input
      if (fileInputRef.current) fileInputRef.current.value = '';
    };
    reader.readAsText(file);
  };

  const clearAllData = async () => {
    if (deleteConfirm !== 'DELETE') return;
    
    try {
      const db = await openDB(DB_NAME, 1);
      const stores = Array.from(db.objectStoreNames);
      
      for (const store of stores) {
        const tx = db.transaction(store, 'readwrite');
        await tx.store.clear();
        await tx.done;
      }
      
      setDeleteConfirm('');
      localStorage.removeItem('one_tracker_movies_seeded_v1');
      alert('All data has been cleared.');
      window.location.reload();
    } catch (err) {
      console.error('Clear failed', err);
      alert('Failed to clear data');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 pb-24 space-y-8">
      <header className="mb-10">
        <h1 className="text-4xl font-serif text-[var(--text-primary)]">Settings</h1>
        <p className="font-cursive text-xl text-[var(--text-secondary)] mt-2 italic">configure your space</p>
      </header>

      {statusMessage && (
        <div className="bg-[#8B9F7E]/20 text-[#8B9F7E] p-4 rounded-xl border border-[#8B9F7E]/30 flex items-center gap-3">
          <CheckCircle2 size={20} />
          {statusMessage}
        </div>
      )}

      {/* API Keys Section */}
      <section className="bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-default)] overflow-hidden shadow-sm">
        <div className="p-6 border-b border-[var(--border-default)]">
          <h2 className="text-2xl font-serif text-[var(--text-primary)] flex items-center gap-3">
            <Key className="text-[var(--accent-primary)]" size={24} /> API Keys
          </h2>
          <p className="text-[var(--text-secondary)] mt-1">Connect external services for rich media data.</p>
        </div>
        <div className="p-6 space-y-6">
          {/* RAWG Key */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="font-medium text-[var(--text-primary)]">RAWG API Key (Games)</label>
              <span className="text-xs text-[var(--text-muted)]">{rawgKey ? 'Connected ✓' : 'Not configured'}</span>
            </div>
            <div className="flex gap-2">
              <div className="relative flex-grow">
                <input
                  type={showRawg ? 'text' : 'password'}
                  value={rawgKey}
                  onChange={(e) => setRawgKey(e.target.value)}
                  className="w-full pl-4 pr-12 py-2 bg-[var(--bg-elevated)] border border-[var(--border-default)] rounded-xl text-[var(--text-primary)] focus:border-[var(--accent-primary)] outline-none"
                  placeholder="Enter RAWG key"
                />
                <button 
                  onClick={() => setShowRawg(!showRawg)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)] text-xs font-medium"
                >
                  {showRawg ? 'HIDE' : 'SHOW'}
                </button>
              </div>
            </div>
            <a href="https://rawg.io/apidocs" target="_blank" rel="noreferrer" className="text-xs text-[var(--accent-primary)] hover:underline mt-1 inline-block">Get a RAWG key →</a>
          </div>

          {/* TMDB Key */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="font-medium text-[var(--text-primary)]">TMDB API Key (Movies)</label>
              <span className="text-xs text-[var(--text-muted)]">{tmdbKey ? 'Connected ✓' : 'Not configured'}</span>
            </div>
            <div className="flex gap-2">
              <div className="relative flex-grow">
                <input
                  type={showTmdb ? 'text' : 'password'}
                  value={tmdbKey}
                  onChange={(e) => setTmdbKey(e.target.value)}
                  className="w-full pl-4 pr-12 py-2 bg-[var(--bg-elevated)] border border-[var(--border-default)] rounded-xl text-[var(--text-primary)] focus:border-[var(--accent-primary)] outline-none"
                  placeholder="Enter TMDB API Read Access Token or API Key"
                />
                <button 
                  onClick={() => setShowTmdb(!showTmdb)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)] text-xs font-medium"
                >
                  {showTmdb ? 'HIDE' : 'SHOW'}
                </button>
              </div>
            </div>
            <a href="https://developer.themoviedb.org/docs" target="_blank" rel="noreferrer" className="text-xs text-[var(--accent-primary)] hover:underline mt-1 inline-block">Get a TMDB key →</a>
          </div>
          
          <button 
            onClick={saveApiKeys}
            className="w-full md:w-auto px-6 py-2 bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-default)] rounded-full hover:bg-[var(--accent-primary)] hover:text-white transition-colors font-medium"
          >
            Save API Keys
          </button>
        </div>
      </section>

      {/* Theme Section */}
      <section className="bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-default)] overflow-hidden shadow-sm">
        <div className="p-6 border-b border-[var(--border-default)]">
          <h2 className="text-2xl font-serif text-[var(--text-primary)] flex items-center gap-3">
            <Sun className="text-[var(--accent-primary)]" size={24} /> Appearance
          </h2>
        </div>
        <div className="p-6 flex items-center gap-4">
          <p className="text-[var(--text-secondary)] flex-grow">Toggle between light and dark cozy aesthetics.</p>
          <div className="flex p-1 bg-[var(--bg-elevated)] border border-[var(--border-default)] rounded-full">
            <button
              onClick={() => { if (isDark) toggleTheme(); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${!isDark ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-sm' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'}`}
            >
              <Sun size={16} /> Light
            </button>
            <button
              onClick={() => { if (!isDark) toggleTheme(); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${isDark ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-sm' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'}`}
            >
              <Moon size={16} /> Dark
            </button>
          </div>
        </div>
      </section>

      {/* Data Management Section */}
      <section className="bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-default)] overflow-hidden shadow-sm">
        <div className="p-6 border-b border-[var(--border-default)]">
          <h2 className="text-2xl font-serif text-[var(--text-primary)] flex items-center gap-3">
            <Download className="text-[var(--accent-primary)]" size={24} /> Data Management
          </h2>
          <p className="text-[var(--text-secondary)] mt-1">Your data is yours. Back it up, restore it, or destroy it.</p>
        </div>
        <div className="p-6 space-y-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-[var(--bg-elevated)] p-5 rounded-xl border border-[var(--border-default)]">
              <Download className="text-[#8B9F7E] mb-3" size={24} />
              <h3 className="font-medium text-[var(--text-primary)] mb-1">Export Data</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">Download a JSON file containing all your games, movies, anime, and notes.</p>
              <button onClick={exportData} className="px-4 py-2 bg-[#8B9F7E] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                Export Backup
              </button>
            </div>
            
            <div className="flex-1 bg-[var(--bg-elevated)] p-5 rounded-xl border border-[var(--border-default)]">
              <Upload className="text-[#C4A77D] mb-3" size={24} />
              <h3 className="font-medium text-[var(--text-primary)] mb-1">Import Data</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">Restore from a previous backup. This will merge with existing data.</p>
              <input 
                type="file" 
                accept=".json" 
                ref={fileInputRef} 
                onChange={handleImport} 
                className="hidden" 
              />
              <button onClick={() => fileInputRef.current?.click()} className="px-4 py-2 bg-[#C4A77D] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                Import Backup
              </button>
            </div>
          </div>

          <div className="border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-900/10 rounded-xl p-5">
            <h3 className="font-medium text-red-700 dark:text-red-400 flex items-center gap-2 mb-2">
              <AlertTriangle size={18} /> Danger Zone
            </h3>
            <p className="text-sm text-red-600/80 dark:text-red-400/80 mb-4">
              This will permanently delete all your data from this browser. This action cannot be undone.
            </p>
            <div className="flex gap-2 max-w-sm">
              <input 
                type="text" 
                placeholder="Type 'DELETE' to confirm" 
                value={deleteConfirm}
                onChange={(e) => setDeleteConfirm(e.target.value)}
                className="flex-grow px-3 py-2 border border-red-300 dark:border-red-800 rounded-lg text-sm bg-white dark:bg-black/20 outline-none focus:border-red-500"
              />
              <button 
                onClick={clearAllData}
                disabled={deleteConfirm !== 'DELETE'}
                className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="text-center py-8">
        <h2 className="text-3xl font-serif text-[var(--text-primary)] mb-2">ONE</h2>
        <p className="font-cursive text-[var(--text-secondary)] italic mb-4">Your personal media archive — cozy, offline, yours.</p>
        <p className="text-sm text-[var(--text-muted)] font-mono">Version 1.0.0 • Built with React, Vite & Tailwind CSS</p>
      </section>
    </div>
  );
}
