import React from 'react';
import { researchInterests } from '../data/skills';

export default function SkillBars() {
  return (
    <div className="glass-card p-6 md:p-8 mb-8">
      <h3 className="font-headline-md text-on-surface mb-2">Core Research & Engineering Focus</h3>
      <p className="font-body-md text-on-surface-variant mb-6">
        Key areas of exploration across edge processing, environmental sensing, and low-power embedded algorithms.
      </p>
      <div className="flex flex-wrap gap-2">
        {researchInterests.map((interest) => (
          <span key={interest} className="tech-badge">{interest}</span>
        ))}
      </div>
    </div>
  );
}
