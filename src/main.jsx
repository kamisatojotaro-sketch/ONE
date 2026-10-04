import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import 'katex/dist/katex.min.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import ErrorBoundary from './components/shared/ErrorBoundary.jsx'

// Global window error listener for unhandled script errors
window.addEventListener('error', (event) => {
  console.error('GLOBAL WINDOW ERROR:', event.error || event.message);
  let box = document.getElementById('global-error-overlay');
  if (!box) {
    box = document.createElement('div');
    box.id = 'global-error-overlay';
    box.style.cssText = 'position:fixed;top:0;left:0;right:0;background:#FFF0F0;color:#900;padding:24px;z-index:999999;font-family:monospace;border-bottom:2px solid #C00;box-shadow:0 4px 12px rgba(0,0,0,0.15);max-height:50vh;overflow:auto;';
    document.body.prepend(box);
  }
  box.innerHTML = `<strong>⚠️ Global Script Error:</strong><br/>${event.message}<br/><small>${event.filename}:${event.lineno}:${event.colno}</small><pre style="margin-top:8px;font-size:11px;background:#fff;padding:8px;">${event.error?.stack || ''}</pre>`;
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('UNHANDLED REJECTION:', event.reason);
  let box = document.getElementById('global-error-overlay');
  if (!box) {
    box = document.createElement('div');
    box.id = 'global-error-overlay';
    box.style.cssText = 'position:fixed;top:0;left:0;right:0;background:#FFF0F0;color:#900;padding:24px;z-index:999999;font-family:monospace;border-bottom:2px solid #C00;box-shadow:0 4px 12px rgba(0,0,0,0.15);max-height:50vh;overflow:auto;';
    document.body.prepend(box);
  }
  box.innerHTML = `<strong>⚠️ Unhandled Promise Rejection:</strong><br/>${event.reason?.message || event.reason}<pre style="margin-top:8px;font-size:11px;background:#fff;padding:8px;">${event.reason?.stack || ''}</pre>`;
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)
