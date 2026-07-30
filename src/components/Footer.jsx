import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bg-panel2 py-10 border-t border-border text-xs font-mono text-text-muted">
      <div className="max-w-[1140px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center md:text-left">
          <img src="/shadeed-logo.png" alt="shadeed." className="h-9 w-auto object-contain" />
          <div className="space-y-1">
            <p className="font-semibold text-ink text-sm font-display">
              Thanks for visiting. Let's build reliable embedded systems & software together.
            </p>
            <p className="text-text-faint text-[11px]">
              © {new Date().getFullYear()} Mohammed Shadeed P
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:mohammedshadeedp@gmail.com"
            className="p-3 rounded-xl bg-white border border-border text-ink hover:border-primary hover:text-primary-hover transition-all shadow-sm"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/mohammed-shadeed-p"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white border border-border text-ink hover:border-primary hover:text-primary-hover transition-all shadow-sm"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href="https://github.com/shadeed2004-gif"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white border border-border text-ink hover:border-primary hover:text-primary-hover transition-all shadow-sm"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
}
