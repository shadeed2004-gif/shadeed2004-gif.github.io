import React, { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function ProjectsPage() {
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

        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono text-primary-hover font-semibold uppercase tracking-widest mb-3 flex items-center gap-2">
            <span className="w-5 h-[2px] bg-primary"></span>
            <span>All Projects &amp; Case Studies</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-ink tracking-tightest mb-4">
            Product Showcase Index
          </h1>
          <p className="text-text-muted text-lg leading-relaxed">
            Detailed engineering builds across IoT systems, generative AI insights, and data analytics consulting.
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
