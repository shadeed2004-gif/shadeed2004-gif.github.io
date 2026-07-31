import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Command, FileText, Activity } from 'lucide-react';

export default function Navbar({ onOpenCommandPalette }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-bg/92 backdrop-blur-md border-b border-border py-3 shadow-sm' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-[1140px] mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo - Go Back to Home */}
        <Link 
          to="/" 
          onClick={() => {
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="flex items-center group min-h-[44px]"
          title="Go to Home"
        >
          <img 
            src="/shadeed-logo.png" 
            alt="shadeed." 
            className="h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
        </Link>

        {/* Desktop Nav Links with Active Section Highlight */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === '/' && activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.path}
                className={`text-sm font-medium transition-all relative py-1.5 min-h-[44px] flex items-center ${
                  isActive
                    ? 'text-ink font-semibold'
                    : 'text-text-muted hover:text-ink'
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-primary rounded-full animate-in fade-in duration-200"></span>
                )}
              </a>
            );
          })}

          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 text-xs font-mono bg-white border border-border-strong px-3.5 py-2 rounded-lg text-text-muted hover:text-ink hover:border-primary transition-all shadow-sm min-h-[44px]"
            title="Search command palette (Ctrl+K)"
          >
            <Command className="w-3.5 h-3.5" />
            <span>Ctrl K</span>
          </button>

          {/* Resume CTA */}
          <a
            href="/Mohammed_Shadeed_P_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono font-semibold bg-primary text-ink px-4 py-2.5 rounded-lg hover:bg-primary-hover transition-all shadow-sm min-h-[44px]"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume ↓</span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={onOpenCommandPalette}
            className="p-2 text-text-muted hover:text-ink min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Search"
          >
            <Command className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-text-muted hover:text-ink min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-bg/98 backdrop-blur-xl border-b border-border px-6 py-4 flex flex-col gap-3 shadow-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-text-muted hover:text-ink py-3 border-b border-border min-h-[44px] flex items-center"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/Mohammed_Shadeed_P_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-sm font-mono font-semibold bg-primary text-ink py-3 rounded-lg mt-2 min-h-[44px]"
          >
            <FileText className="w-4 h-4" />
            <span>Download Resume PDF</span>
          </a>
        </div>
      )}
    </header>
  );
}
