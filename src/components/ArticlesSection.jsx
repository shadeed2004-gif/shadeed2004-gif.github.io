import React from 'react';
import { ArrowRight } from 'lucide-react';
import { articlesData } from '../data/writing';
import { Link } from 'react-router-dom';

export default function ArticlesSection() {
  return (
    <section id="writing" className="py-24 border-t border-border relative">
      <div className="max-w-[1140px] mx-auto px-6">
        
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono text-primary-hover font-semibold uppercase tracking-widest mb-3 flex items-center gap-2">
            <span className="w-5 h-[2px] bg-primary"></span>
            <span>Engineering Notebook &amp; Documentation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-ink tracking-tightest mb-4">
            Technical Writeups &amp; Notes
          </h2>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed">
            Documenting hardware lessons, circuit power debugging, and firmware architectural decisions.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articlesData.map((article, idx) => (
            <div key={idx} className="bg-white border border-border rounded-2xl p-7 shadow-custom flex flex-col justify-between group hover:border-primary/40 transition-all hover:-translate-y-0.5">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-primary-hover font-semibold">{article.category}</span>
                  <span className="text-text-faint">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-ink group-hover:text-primary-hover transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-border">
                <Link
                  to={article.link}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-primary-hover hover:underline"
                >
                  <span>Read Engineering Note</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
