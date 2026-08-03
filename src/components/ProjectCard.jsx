import React from 'react';
import { Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  const isWaveGuard = project.id === 'waveguard';

  return (
    <div className="glass-card p-7 flex flex-col justify-between hover:border-outline-variant transition-all duration-300 hover:-translate-y-1">
      <div>
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <span className="text-xs font-mono text-primary font-semibold uppercase tracking-wider">
            {project.tagline}
          </span>
          <span className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full border ${
            project.statusType === 'emerald'
              ? 'bg-emerald/10 border-emerald/30 text-emerald'
              : 'bg-amber-100 border-amber-300 text-amber-700'
          }`}>
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-display font-semibold text-on-surface tracking-tighter mb-3">
          {project.title}
        </h3>

        {/* Summary */}
        <p className="text-on-surface-variant text-sm leading-relaxed mb-5">
          {project.summary}
        </p>

        {/* Problem / Solution Grid */}
        <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-4 mb-5 space-y-2 text-xs">
          <div>
            <span className="text-on-surface-variant font-mono uppercase tracking-wider font-semibold block text-[10px]">Problem</span>
            <p className="text-on-surface mt-0.5">{project.problem}</p>
          </div>
          <div>
            <span className="text-on-surface-variant font-mono uppercase tracking-wider font-semibold block text-[10px]">Solution</span>
            <p className="text-on-surface mt-0.5">{project.solution}</p>
          </div>
        </div>

        {/* Bullet Metrics */}
        {project.metrics && (
          <ul className="space-y-1.5 mb-6 text-xs text-on-surface-variant">
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
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-outline-variant/30">
          {isWaveGuard ? (
            <Link
              to="/projects/waveguard"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-primary hover:underline"
            >
              <span>Explore WaveGuard Case Study</span>
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </Link>
          ) : (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-on-surface-variant hover:text-on-surface"
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
