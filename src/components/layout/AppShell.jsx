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
      <main className="flex-1 relative h-full overflow-y-auto">
        {/* Background Decorative Gradient */}
        <div 
          className="absolute top-0 left-0 right-0 h-[40vh] z-0 opacity-40 pointer-events-none"
          style={{ background: 'var(--bg-hero-gradient)' }}
        />
        
        <div className="relative z-10 min-h-full p-6 md:p-10 max-w-7xl mx-auto pb-24 md:pb-10">
          {children}
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[var(--bg-surface)] border-t border-[var(--border-default)] z-50 shadow-lg">
        <div className="flex justify-around items-center p-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `
                flex flex-col items-center p-2 rounded-lg transition-all
                ${isActive ? 'text-[var(--accent-primary)] font-bold' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'}
              `}
            >
              {({ isActive }) => (
                <>
                  <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                  <span className="text-[10px] mt-1 font-medium">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}
