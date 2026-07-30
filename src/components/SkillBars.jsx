import React from 'react';
import { domainProficiency, researchInterests } from '../data/skills';

export default function SkillBars() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      {/* Domain Proficiency Card */}
      <div className="bg-white border border-border text-ink rounded-2xl p-7 shadow-custom">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-display font-semibold text-ink tracking-tighter">
            Domain Proficiency Levels
          </h3>
        </div>

        <div className="space-y-5">
          {domainProficiency.map((item) => (
            <div key={item.domain} className="space-y-1.5">
              <div className="flex justify-between items-center text-xs font-mono font-medium">
                <span className="text-ink">{item.domain}</span>
                <span className={`font-bold px-2.5 py-0.5 rounded-full text-[11px] ${
                  item.level === 'Shipped System'
                    ? 'bg-emerald-dim text-emerald border border-emerald/30'
                    : item.level === 'Project Experience'
                    ? 'bg-primary-dim text-primary-hover border border-primary/30'
                    : 'bg-bg-soft text-text-muted border border-border'
                }`}>{item.level}</span>
              </div>
              <span className="text-[11px] font-mono text-text-faint block">{item.tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Core Research Interests Card */}
      <div className="bg-white border border-border text-ink rounded-2xl p-7 flex flex-col justify-between shadow-custom">
        <div>
          <h3 className="text-xl font-display font-semibold text-ink tracking-tighter mb-4">
            Core Research &amp; Engineering Focus
          </h3>
          <p className="text-text-muted text-sm leading-relaxed mb-6">
            Key areas of exploration across edge processing, environmental sensing, and low-power embedded algorithms.
          </p>

          <div className="flex flex-wrap gap-2">
            {researchInterests.map((interest) => (
              <span
                key={interest}
                className="text-xs font-mono bg-primary-dim border border-primary/30 text-ink font-semibold px-3 py-1.5 rounded-lg"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-border mt-6">
          <span className="text-xs font-mono text-primary-hover font-semibold uppercase tracking-wider block mb-1">Active Focus</span>
          <p className="text-xs text-text-muted">
            Optimizing micro-controller power budgets, training lightweight anomaly models, and solving daily algorithmic problems.
          </p>
        </div>
      </div>
    </div>
  );
}
