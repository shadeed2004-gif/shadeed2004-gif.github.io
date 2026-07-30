import React from 'react';
import { Github, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  const isWaveGuard = project.id === 'waveguard';

  return (
    <div className="bg-white border border-border rounded-2xl p-7 flex flex-col justify-between hover:border-border-strong transition-all duration-300 hover:-translate-y-1 shadow-custom">
      <div>
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <span className="text-xs font-mono text-primary-hover font-semibold uppercase tracking-wider">
            {project.tagline}
          </span>
          <span className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full border ${
            project.statusType === 'emerald'
              ? 'bg-emerald-dim border-emerald/30 text-emerald'
              : 'bg-amber-dim border-amber/30 text-amber'
          }`}>
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-display font-semibold text-ink tracking-tighter mb-3">
          {project.title}
        </h3>

        {/* Summary */}
        <p className="text-text-muted text-sm leading-relaxed mb-5">
          {project.summary}
        </p>

        {/* Problem / Solution Grid */}
        <div className="bg-bg border border-border rounded-xl p-4 mb-5 space-y-2 text-xs">
          <div>
            <span className="text-text-faint font-mono uppercase tracking-wider font-semibold block text-[10px]">Problem</span>
            <p className="text-ink mt-0.5">{project.problem}</p>
          </div>
          <div>
            <span className="text-text-faint font-mono uppercase tracking-wider font-semibold block text-[10px]">Solution</span>
            <p className="text-ink mt-0.5">{project.solution}</p>
          </div>
        </div>

        {/* Bullet Metrics */}
        {project.metrics && (
          <ul className="space-y-1.5 mb-6 text-xs text-text-muted">
            {project.metrics.map((metric, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-primary font-mono font-bold mt-0.5">→</span>
                <span>{metric}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer / Stack / Actions */}
      <div>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((tech) => (
            <span key={tech} className="text-xs font-mono bg-bg-soft text-ink border border-border px-2.5 py-1 rounded-md">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-border">
          {isWaveGuard ? (
            <Link
              to="/projects/waveguard"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-primary-hover hover:underline"
            >
              <span>Explore WaveGuard Case Study</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          ) : (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-text-muted hover:text-ink"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
