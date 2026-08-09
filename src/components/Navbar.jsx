import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ onOpenCommandPalette }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);

          // Track active section on home page
          if (location.pathname === '/') {
            const sections = ['home', 'about', 'flagship', 'skills', 'writing', 'certifications', 'contact'];
            const scrollPos = window.scrollY + 140;

            for (const sectionId of sections) {
              const el = document.getElementById(sectionId);
              if (el) {
                const top = el.offsetTop;
                const height = el.offsetHeight;
                if (scrollPos >= top && scrollPos < top + height) {
                  setActiveSection(sectionId);
                  break;
                }
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { name: 'About', path: '/#about', id: 'about' },
    { name: 'WaveGuard', path: '/#flagship', id: 'flagship' },
    { name: 'Skills', path: '/#skills', id: 'skills' },
    { name: 'Writing', path: '/#writing', id: 'writing' },
    { name: 'Certifications', path: '/#certifications', id: 'certifications' },
    { name: 'Contact', path: '/#contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform-gpu bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 ${
      scrolled 
        ? 'shadow-sm py-1.5' 
        : 'py-2.5'
    }`}>
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-8 lg:px-margin-desktop h-14 flex items-center justify-between">
        {/* Home Button (Removed Logo Image) */}
        <Link 
          to="/" 
          onClick={() => {
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="font-label-md text-label-md bg-surface-container-high border border-outline-variant px-3.5 py-1.5 rounded-lg text-on-surface hover:text-primary hover:border-primary-container transition-all flex items-center gap-2 shadow-sm group min-h-[38px]"
          title="Go to Home"
        >
          <span className="material-symbols-outlined text-base text-primary group-hover:scale-110 transition-transform" aria-hidden="true">home</span>
          <span className="font-bold tracking-tight text-on-surface">Home</span>
        </Link>

        {/* Desktop Nav Links with Active Section Highlight */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === '/' && activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.path}
                className={`font-label-md text-label-md transition-colors relative py-1.5 min-h-[44px] flex items-center ${
                  isActive
                    ? 'text-on-surface font-bold'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-primary-container rounded-full animate-in fade-in duration-200"></span>
                )}
              </a>
            );
          })}

          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="p-2 rounded-lg hover:bg-primary/5 transition-colors text-primary flex items-center justify-center min-h-[44px]"
            title="Search command palette (Ctrl+K)"
          >
            <span className="material-symbols-outlined" aria-hidden="true">terminal</span>
          </button>

          {/* Resume CTA */}
          <a
            href="/Mohammed_Shadeed_P_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-container text-on-primary-container px-4 py-2 rounded-lg font-label-md font-bold hover:bg-primary hover:text-on-primary transition-colors flex items-center gap-2 shadow-sm min-h-[44px]"
          >
            <span>Resume</span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={onOpenCommandPalette}
            className="p-2 rounded-lg hover:bg-primary/5 transition-colors text-primary flex items-center justify-center min-h-[44px] min-w-[44px]"
            aria-label="Search"
          >
            <span className="material-symbols-outlined" aria-hidden="true">terminal</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-on-surface-variant hover:text-on-surface min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <span className="material-symbols-outlined" aria-hidden="true">close</span> : <span className="material-symbols-outlined" aria-hidden="true">menu</span>}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container/95 backdrop-blur-xl border-b border-outline-variant/30 px-6 py-4 flex flex-col gap-3 shadow-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary py-3 border-b border-outline-variant/30 min-h-[44px] flex items-center transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/Mohammed_Shadeed_P_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 font-label-md font-bold bg-primary-container text-on-primary-container py-3 rounded-lg mt-2 min-h-[44px] hover:bg-primary hover:text-on-primary transition-colors"
          >
            <span>Resume</span>
          </a>
        </div>
      )}
    </header>
  );
}
