import React from 'react';
import { articlesData } from '../data/writing';
import { Link } from 'react-router-dom';

export default function ArticlesSection() {
  return (
    <section id="writing" className="py-xl border-t border-outline-variant/30 relative">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        
        <div className="max-w-2xl mb-12">
          <div className="section-label">Engineering Notebook & Documentation</div>
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">
            Technical Writeups &amp; Notes
          </h2>
          <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed">
            Documenting hardware lessons, circuit power debugging, and firmware architectural decisions.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articlesData.map((article, idx) => (
            <div key={idx} className="glass-card p-7 flex flex-col justify-between group transition-all hover:-translate-y-0.5">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-primary font-semibold">{article.category}</span>
                  <span className="text-on-surface-variant">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-on-surface group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-outline-variant/30">
                <Link
                  to={article.link}
                  className="inline-flex items-center gap-1.5 text-primary font-label-md hover:text-primary-container transition-colors"
                >
                  <span>Read Engineering Note</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
