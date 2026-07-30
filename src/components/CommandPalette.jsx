import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Layers, Cpu, FileText, ArrowUpRight, Zap } from 'lucide-react';

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
    { name: 'WaveGuard Flagship Case Study', path: '/projects/waveguard', category: 'Flagship Product', icon: Zap },
    { name: 'About & Technical Profile', path: '/#about', category: 'Section', icon: Layers },
    { name: 'Technical Skills & Proficiency Bars', path: '/#skills', category: 'Section', icon: Cpu },
    { name: 'Industry Product Case Studies', path: '/projects', category: 'Page', icon: Layers },
    { name: 'Technical Notebook & Writing', path: '/#writing', category: 'Section', icon: FileText },
    { name: 'Download Resume PDF', path: '/Mohammed_Shadeed_P_Resume.pdf', category: 'Download', external: true, icon: FileText },
    { name: 'Contact Information', path: '/#contact', category: 'Section', icon: ArrowUpRight },
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
    <div className="fixed inset-0 z-50 bg-ink/70 backdrop-blur-sm flex items-start justify-center pt-24 px-4" role="dialog" aria-modal="true">
      <div className="bg-white border border-border-strong rounded-2xl w-full max-w-xl shadow-customLg overflow-hidden animate-in fade-in zoom-in-95 duration-200 text-ink">
        
        {/* Search Input */}
        <div className="flex items-center px-4 border-b border-border bg-bg">
          <Search className="w-5 h-5 text-text-faint mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search section..."
            className="w-full bg-transparent py-4 text-sm text-ink focus:outline-none font-mono"
            aria-label="Search commands"
            autoFocus
          />
          <button onClick={onClose} className="p-1 text-text-faint hover:text-ink">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Command List */}
        <div className="max-h-80 overflow-y-auto p-2">
          {filteredCommands.length === 0 ? (
            <div className="p-4 text-center text-xs font-mono text-text-faint">
              No matching commands found.
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const IconComponent = cmd.icon;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(cmd)}
                  className="w-full flex items-center justify-between px-3 py-3 rounded-xl hover:bg-primary-dim text-left transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <IconComponent className="w-4 h-4 text-primary" />
                    <span className="text-sm text-ink font-mono group-hover:text-primary-hover font-medium">{cmd.name}</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-bg-panel2 border border-border px-2 py-0.5 rounded text-text-muted">
                    {cmd.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        <div className="bg-bg-panel2 px-4 py-2 border-t border-border flex justify-between items-center text-[10px] font-mono text-text-faint">
          <span>Use Esc to close</span>
          <span>Portfolio Navigation</span>
        </div>

      </div>
    </div>
  );
}
