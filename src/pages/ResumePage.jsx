import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ResumePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main id="content" className="pt-36 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-label-md text-label-md bg-surface-container-high border border-outline-variant px-4 py-2.5 rounded-lg text-on-surface hover:text-primary hover:border-primary-container transition-all shadow-sm mb-8"
        >
          <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_back</span>
          <span>Back to Portfolio Overview</span>
        </Link>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-display font-bold text-on-background tracking-tightest">
              Mohammed Shadeed P — Resume
            </h1>
            <p className="text-on-surface-variant text-sm font-mono mt-1">B.Tech Computer Science (Data Science)</p>
          </div>

          <a
            href="/Mohammed_Shadeed_P_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-sans font-semibold bg-primary-container text-on-primary-container px-6 py-3 rounded-xl hover:bg-primary hover:text-on-primary transition-all shadow-sm"
          >
            <span className="material-symbols-outlined text-sm" aria-hidden="true">download</span>
            <span>Download PDF Resume</span>
          </a>
        </div>

        {/* Embedded PDF Viewer Container */}
        <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-2xl overflow-hidden shadow-md h-[800px]">
          <iframe
            src="/Mohammed_Shadeed_P_Resume.pdf"
            title="Mohammed Shadeed P Resume PDF"
            className="w-full h-full border-none"
          />
        </div>

      </div>
    </main>
  );
}
