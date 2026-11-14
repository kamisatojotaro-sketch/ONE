import { Routes, Route } from 'react-router-dom';
import AppShell from './components/layout/AppShell';

import Home from './pages/Home';
import Games from './pages/Games';
import Movies from './pages/Movies';
import Music from './pages/Music';
import Anime from './pages/Anime';
import Notes from './pages/Notes';
import Settings from './pages/Settings';

const IS_TEMPORARILY_DOWN = false;

function App() {
  if (IS_TEMPORARILY_DOWN) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-[var(--bg-base)] text-[var(--text-primary)] p-6 text-center">
        <div className="max-w-md space-y-3 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] px-8 py-10 shadow-sm">
          <h1 className="font-serif text-3xl font-bold tracking-tight">
            Down temporarily
          </h1>
          <p className="font-sans text-sm text-[var(--text-secondary)]">
            We&apos;ll be back shortly.
          </p>
        </div>
      </main>
    );
  }

  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/music" element={<Music />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/*" element={<Notes />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Notes />} />
      </Routes>
    </AppShell>
  );
}

export default App;
