import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';

const Home = React.lazy(() => import('./pages/Home'));
const WaveGuardCaseStudy = React.lazy(() => import('./pages/WaveGuardCaseStudy'));
const ProjectsPage = React.lazy(() => import('./pages/ProjectsPage'));
const ResumePage = React.lazy(() => import('./pages/ResumePage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setCommandPaletteOpen(true);
    window.addEventListener('open-command-palette', handleOpen);
    return () => window.removeEventListener('open-command-palette', handleOpen);
  }, []);

  return (
    <div className="bg-background text-on-background min-h-screen selection:bg-primary-container selection:text-on-background font-body grid-pattern antialiased flex flex-col">
      <a href="#content" className="skip-link">Skip to main content</a>
      <ScrollToTop />
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
      
      <React.Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><span className="text-sm font-mono text-on-surface-variant">Loading…</span></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/waveguard" element={<WaveGuardCaseStudy />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </React.Suspense>

      <Footer />

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </div>
  );
}
