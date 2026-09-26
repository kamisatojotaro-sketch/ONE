import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { 
  Home, Gamepad2, Film, Music, Tv, BookOpen, Settings, Sun, Moon 
} from 'lucide-react';

export default function AppShell({ children }) {
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/games', label: 'Games', icon: Gamepad2 },
    { to: '/movies', label: 'Movies', icon: Film },
    { to: '/anime', label: 'Anime', icon: Tv },
    { to: '/music', label: 'Music', icon: Music },
    { to: '/notes', label: 'Notes', icon: BookOpen },
    { to: '/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-[var(--bg-base)] text-[var(--text-primary)] overflow-hidden">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col w-64 border-r border-[var(--border-default)] bg-[var(--bg-surface)] pt-8 pb-4 px-4 h-full z-10 shrink-0">
        <div className="mb-10 px-4">
          <h1 className="font-serif text-3xl font-bold text-[var(--text-primary)]">
            ONE<span className="text-[var(--text-accent)] font-cursive text-4xl leading-none">.</span>
          </h1>
          <p className="font-cursive text-[var(--text-muted)] mt-1 text-lg">softly tracked</p>
        </div>

        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `
                flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer
                ${isActive 
                  ? 'bg-[var(--accent-primary)] text-white font-medium shadow-sm' 
                  : 'text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)] hover:text-[var(--text-primary)]'}
              `}
            >
              <item.icon size={20} strokeWidth={2} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto pt-4 border-t border-[var(--border-subtle)]">
          <button
            onClick={toggleTheme}
            className="flex w-full items-center space-x-3 px-4 py-3 rounded-xl text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)] hover:text-[var(--text-primary)] transition-all duration-200 cursor-pointer"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
            <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 relative h-full overflow-y-auto flex flex-col">
        {/* Mobile Top Header */}
        <header className="md:hidden sticky top-0 z-30 flex items-center justify-between px-4 py-3 bg-[var(--bg-surface)]/95 backdrop-blur-md border-b border-[var(--border-default)]">
          <div className="flex items-center gap-1.5">
            <h1 className="font-serif text-2xl font-bold text-[var(--text-primary)]">
              ONE<span className="text-[var(--text-accent)] font-cursive text-3xl leading-none">.</span>
            </h1>
            <span className="font-cursive text-xs text-[var(--text-muted)] mt-1">softly tracked</span>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </header>

        {/* Background Decorative Gradient */}
        <div 
          className="absolute top-0 left-0 right-0 h-[40vh] z-0 opacity-40 pointer-events-none"
          style={{ background: 'var(--bg-hero-gradient)' }}
        />
        
        <div className="relative z-10 flex-1 min-h-full p-3.5 sm:p-6 md:p-10 max-w-7xl w-full mx-auto pb-28 md:pb-10">
          {children}
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-14 bg-[var(--bg-surface)]/95 backdrop-blur-md border-t border-[var(--border-default)] z-50 shadow-lg">
        <div className="flex justify-around items-center h-full px-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `
                flex flex-col items-center justify-center flex-1 py-1 px-0.5 rounded-lg transition-all
                ${isActive ? 'text-[var(--accent-primary)] font-bold' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'}
              `}
            >
              {({ isActive }) => (
                <>
                  <item.icon size={19} strokeWidth={isActive ? 2.5 : 2} />
                  <span className="text-[9px] sm:text-[10px] tracking-tight mt-0.5 font-medium leading-none">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}
