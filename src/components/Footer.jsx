import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-lg mt-xl border-t border-outline-variant/30 bg-surface">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-md">
        
        <div className="font-headline-md text-on-surface font-bold">Shadeed</div>

        <div className="flex items-center gap-4">
          <a
            href="/#contact"
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
            aria-label="Contact"
          >
            Contact
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-shadeed-p"
            target="_blank"
            rel="noopener noreferrer"
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/shadeed2004-gif"
            target="_blank"
            rel="noopener noreferrer"
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            GitHub
          </a>
        </div>

        <div className="font-label-md text-label-md text-on-surface-variant">
          © {new Date().getFullYear()} Mohammed Shadeed P
        </div>
      </div>
    </footer>
  );
}
