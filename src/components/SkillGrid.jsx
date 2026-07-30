import React from 'react';
import { skillCategories } from '../data/skills';
import { Code, Cpu, Database, HardDrive, Cloud, Layers } from 'lucide-react';

const iconMap = {
  Code: Code,
  Cpu: Cpu,
  Database: Database,
  HardDrive: HardDrive,
  Cloud: Cloud,
  Layers: Layers
};

export default function SkillGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillCategories.map((cat) => {
        const IconComponent = iconMap[cat.icon] || Code;

        return (
          <div
            key={cat.title}
            className="bg-white border border-border rounded-2xl p-6 hover:border-border-strong transition-all duration-300 hover:-translate-y-1 shadow-custom"
          >
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-bg-panel2 border border-border flex items-center justify-center text-primary">
                <IconComponent className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-semibold text-ink tracking-tighter">
                {cat.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono bg-bg text-ink border border-border px-2.5 py-1.5 rounded-md hover:border-primary/40 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
