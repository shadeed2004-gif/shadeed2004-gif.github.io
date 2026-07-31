import React from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Certifications() {
  const certs = [
    {
      badge: "Elite National Certification",
      title: "Programming in Java (NPTEL)",
      issuer: "IIT Kharagpur & Ministry of Education",
      detail: "12-week intensive course. Scored 25/25 on programming assignments and 69% consolidated final score."
    },
    {
      badge: "Industry Simulation",
      title: "Tata Data Analytics",
      issuer: "Tata Group",
      detail: "Hands-on job simulation applying data-driven analytics to enterprise business intelligence and data processing workflows."
    },
    {
      badge: "Industry Simulation",
      title: "Deloitte Data Analytics",
      issuer: "Deloitte Australia",
      detail: "Simulated real-world analytics consulting, data cleaning, cohort analysis, and executive dashboard deliverables."
    }
  ];

  const keyAchievements = [
    "Built an end-to-end IoT platform (WaveGuard smart buoy & cloud dashboard)",
    "Integrated physical sensor hardware (MPU6050, SIM800L) with cloud REST APIs",
    "Engineered and deployed a bilingual React authority monitoring dashboard",
    "Achieved NPTEL Elite standing in proctored Java certification (25/25 assignment score)",
    "Completed virtual data analytics simulations with Tata Group and Deloitte Australia"
  ];

  return (
    <section id="certifications" className="py-24 border-t border-border relative">
      <div className="max-w-[1140px] mx-auto px-6">
        
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono text-primary-hover font-semibold uppercase tracking-widest mb-3 flex items-center gap-2">
            <span className="w-5 h-[2px] bg-primary"></span>
            <span>Experience &amp; Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-ink tracking-tightest mb-4">
            Experience, Certifications &amp; Achievements
          </h2>
        </div>

        {/* Key Achievements Summary Block (#5) */}
        <div className="bg-gradient-to-br from-white to-bg-panel2 border border-primary/30 rounded-2xl p-7 mb-8 shadow-sm">
          <div className="flex items-center gap-2.5 mb-5 text-primary-hover font-mono text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>Key Engineering Achievements</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {keyAchievements.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-ink font-medium bg-white border border-border p-3.5 rounded-xl shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((c, idx) => (
            <div key={idx} className="bg-white border border-border rounded-2xl p-6 flex flex-col justify-between hover:border-border-strong transition-all duration-300 hover:-translate-y-1 shadow-custom">
              <div>
                <span className="text-[11px] font-mono font-semibold text-amber bg-amber-dim border border-amber/30 px-3 py-1 rounded-full inline-block mb-4">
                  {c.badge}
                </span>
                <h3 className="text-lg font-display font-semibold text-ink tracking-tighter mb-2">
                  {c.title}
                </h3>
                <span className="text-xs font-mono text-text-faint block mb-3">{c.issuer}</span>
                <p className="text-xs text-text-muted leading-relaxed">
                  {c.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
