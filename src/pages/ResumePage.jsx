import React, { useEffect } from 'react';
import { ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ResumePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main id="content" className="pt-28 pb-24 min-h-screen bg-bg">
      <div className="max-w-[1140px] mx-auto px-6">
        
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-primary-hover mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio Overview</span>
        </Link>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-display font-bold text-ink tracking-tightest">
              Mohammed Shadeed P — Resume
            </h1>
            <p className="text-text-faint text-sm font-mono mt-1">B.Tech Computer Science (Data Science)</p>
          </div>

          <a
            href="/Mohammed_Shadeed_P_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-sans font-semibold bg-primary text-ink px-6 py-3 rounded-xl hover:bg-primary-hover transition-all shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF Resume</span>
          </a>
        </div>

        {/* Embedded PDF Viewer Container */}
        <div className="bg-white border border-border-strong rounded-2xl overflow-hidden shadow-customLg h-[800px]">
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
