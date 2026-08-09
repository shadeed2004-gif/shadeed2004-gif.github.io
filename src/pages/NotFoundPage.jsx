import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 flex items-center justify-center text-on-background px-6">
      <div className="max-w-md w-full text-center glass-card p-8 sm:p-10">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 text-primary flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-3xl" aria-hidden="true">explore</span>
        </div>
        
        <span className="text-xs font-mono text-primary font-bold uppercase tracking-widest block mb-2">Error 404</span>
        <h1 className="text-3xl font-display font-bold text-on-surface tracking-tightest mb-4">
          Looks like you're off course.
        </h1>
        <p className="text-sm text-on-surface-variant leading-relaxed mb-8">
          The page or route you're looking for doesn't exist or has moved. Let's get you back to safety.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-sans font-semibold bg-primary-container text-on-primary-container px-6 py-3.5 rounded-xl hover:bg-primary hover:text-on-primary transition-all shadow-sm"
        >
          <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_back</span>
          <span>Return to Portfolio Home</span>
        </Link>
      </div>
    </main>
  );
}
