import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else window.dispatchEvent(new CustomEvent('open-command-palette'));
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const modal = document.querySelector('[role="dialog"]');
    if (!modal) return;
    const focusable = modal.querySelectorAll('button, input, a, [tabindex]:not([tabindex="-1"])');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const trapFocus = (e) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    modal.addEventListener('keydown', trapFocus);
    return () => modal.removeEventListener('keydown', trapFocus);
  }, [isOpen]);

  if (!isOpen) return null;

  const commands = [
    { name: 'WaveGuard Flagship Case Study', path: '/projects/waveguard', category: 'Flagship Product', icon: 'bolt' },
    { name: 'About & Technical Profile', path: '/#about', category: 'Section', icon: 'layers' },
    { name: 'Technical Skills & Proficiency Bars', path: '/#skills', category: 'Section', icon: 'developer_board' },
    { name: 'Industry Product Case Studies', path: '/projects', category: 'Page', icon: 'layers' },
    { name: 'Technical Notebook & Writing', path: '/#writing', category: 'Section', icon: 'description' },
    { name: 'Download Resume PDF', path: '/Mohammed_Shadeed_P_Resume.pdf', category: 'Download', external: true, icon: 'description' },
    { name: 'Contact Information', path: '/#contact', category: 'Section', icon: 'open_in_new' },
  ];

  const filteredCommands = commands.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase()) ||
    c.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (cmd) => {
    onClose();
    if (cmd.external) {
      window.open(cmd.path, '_blank');
    } else if (cmd.path.startsWith('/#')) {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(cmd.path.replace('/#', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      navigate(cmd.path);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-24 px-4" role="dialog" aria-modal="true">
      <div className="bg-surface-container-lowest/95 backdrop-blur-xl border border-outline-variant/50 rounded-xl shadow-custom-hover w-full max-w-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 text-on-surface">
        
        {/* Search Input */}
        <div className="flex items-center px-4 border-b border-outline-variant/30 bg-surface-container">
          <span className="material-symbols-outlined text-on-surface-variant mr-3">search</span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search section..."
            className="w-full bg-transparent py-4 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none font-mono"
            aria-label="Search commands"
            autoFocus
          />
          <button onClick={onClose} className="p-1 text-on-surface-variant hover:text-on-surface">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Command List */}
        <div className="max-h-80 overflow-y-auto p-2">
          {filteredCommands.length === 0 ? (
            <div className="p-4 text-center text-xs font-mono text-on-surface-variant">
              No matching commands found.
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(cmd)}
                  className="w-full flex items-center justify-between px-3 py-3 rounded-xl hover:bg-primary/5 text-left transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">{cmd.icon}</span>
                    <span className="text-sm text-on-surface font-mono group-hover:text-primary font-medium">{cmd.name}</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-surface-container border border-outline-variant/30 px-2 py-0.5 rounded text-on-surface-variant">
                    {cmd.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        <div className="bg-surface-container px-4 py-2 border-t border-outline-variant/30 flex justify-between items-center text-[10px] font-mono text-on-surface-variant">
          <span>Use Esc to close</span>
          <span>Portfolio Navigation</span>
        </div>

      </div>
    </div>
  );
}
