import React from 'react';
import { BookOpen, Zap, ArrowRight, Code, Cpu, Container, GitBranch } from 'lucide-react';
import { articlesData } from '../data/writing';
import { Link } from 'react-router-dom';

export default function ArticlesSection() {
  const learningTopics = [
    { title: 'TinyML & Edge AI', desc: 'Quantizing TensorFlow Lite models for MCU edge inference.', icon: Cpu },
    { title: 'Docker Containerization', desc: 'Packaging FastAPI and SQLite data services into reproducible containers.', icon: Container },
    { title: 'System Design & Stream Processing', desc: 'Designing high-throughput event queues and resilient microservices.', icon: GitBranch },
    { title: 'Advanced DSA Practice', desc: 'Daily algorithmic problem solving focusing on graphs and dynamic programming.', icon: Code },
  ];

  return (
    <section id="writing" className="py-24 border-t border-border relative">
      <div className="max-w-[1140px] mx-auto px-6">
        
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono text-primary-hover font-semibold uppercase tracking-widest mb-3 flex items-center gap-2">
            <span className="w-5 h-[2px] bg-primary"></span>
            <span>Engineering Notebook &amp; Active Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-ink tracking-tightest mb-4">
            Technical Writeups &amp; Currently Exploring
          </h2>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed">
            Documenting hardware lessons, circuit power debugging, and active learning milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Articles Column */}
          <div className="bg-white border border-border rounded-2xl p-7 flex flex-col justify-between shadow-custom">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-display font-semibold text-ink tracking-tighter">
                  Technical Writeups &amp; Notes
                </h3>
              </div>

              <div className="space-y-6">
                {articlesData.map((article, idx) => (
                  <div key={idx} className="bg-bg border border-border p-5 rounded-xl space-y-2 group hover:border-primary/40 transition-colors">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-primary-hover font-semibold">{article.category}</span>
                      <span className="text-text-faint">{article.readTime}</span>
                    </div>
                    <h4 className="text-base font-display font-semibold text-ink group-hover:text-primary-hover transition-colors">
                      {article.title}
                    </h4>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {article.summary}
                    </p>
                    <Link
                      to={article.link}
                      className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-primary-hover pt-1 hover:underline"
                    >
                      <span>Read Engineering Note</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Currently Exploring Column (#9) */}
          <div className="bg-white border border-border rounded-2xl p-7 flex flex-col justify-between shadow-custom">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-display font-semibold text-ink tracking-tighter">
                  Currently Exploring &amp; Learning
                </h3>
              </div>

              <div className="space-y-4">
                {learningTopics.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div key={idx} className="bg-bg border border-border p-4 rounded-xl flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-white border border-border text-primary flex-shrink-0 mt-0.5">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-semibold text-ink block">
                          {item.title}
                        </span>
                        <p className="text-xs text-text-muted leading-relaxed mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-border mt-6">
              <span className="text-xs font-mono text-text-faint uppercase tracking-wider block mb-1 font-semibold">Continuous Improvement</span>
              <p className="text-xs font-mono text-text-muted">
                Building reliable AI systems demands constant refinement across hardware, algorithms, and cloud infrastructure.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
