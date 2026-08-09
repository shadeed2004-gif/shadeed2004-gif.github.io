import React from 'react';
import { skillCategories } from '../data/skills';

export default function SkillGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
      {skillCategories.map((cat) => (
        <div key={cat.title} className="glass-card p-6">
          <div className="flex items-center gap-3.5 mb-5">
            <span className="material-symbols-outlined text-3xl text-primary" aria-hidden="true">{cat.icon}</span>
            <h3 className="font-headline-md text-on-surface">
              {cat.title}
            </h3>
          </div>
          <ul className="flex flex-col gap-2">
            {cat.tags.map((tag) => (
              <li key={tag} className="font-code text-code text-on-surface-variant flex items-center">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 inline-block"></span>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
