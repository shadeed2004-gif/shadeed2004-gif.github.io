import React, { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';
import { Link } from 'react-router-dom';

export default function ProjectsPage() {
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
