import React, { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';
import { Link } from 'react-router-dom';

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main id="content" className="pt-28 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-on-surface-variant hover:text-primary mb-8 transition-colors"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          <span>Back to Portfolio Overview</span>
        </Link>

        <div className="max-w-2xl mb-12">
          <div className="section-label">All Projects &amp; Case Studies</div>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-on-background tracking-tightest mb-4">
            Product Showcase Index
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Detailed engineering builds across IoT systems, embedded firmware, and data analytics consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </main>
  );
}
