import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 flex items-center justify-center bg-bg text-ink px-6">
      <div className="max-w-md w-full text-center bg-white border border-border-strong rounded-3xl p-8 sm:p-10 shadow-lg">
        <div className="w-14 h-14 rounded-2xl bg-primary-dim border border-primary/30 text-primary flex items-center justify-center mx-auto mb-6">
          <Compass className="w-7 h-7" />
        </div>
        
        <span className="text-xs font-mono text-primary-hover font-bold uppercase tracking-widest block mb-2">Error 404</span>
        <h1 className="text-3xl font-display font-bold text-ink tracking-tightest mb-4">
          Looks like you're off course.
        </h1>
        <p className="text-sm text-text-muted leading-relaxed mb-8">
          The page or route you're looking for doesn't exist or has moved. Let's get you back to safety.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-sans font-semibold bg-primary text-ink px-6 py-3.5 rounded-xl hover:bg-primary-hover transition-all shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Portfolio Home</span>
        </Link>
      </div>
    </main>
  );
}
