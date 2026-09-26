import { Routes, Route } from 'react-router-dom';
import AppShell from './components/layout/AppShell';

import Home from './pages/Home';
import Games from './pages/Games';
import Movies from './pages/Movies';
import Music from './pages/Music';
import Anime from './pages/Anime';
import Notes from './pages/Notes';
import Settings from './pages/Settings';

function App() {
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
