import React from 'react';

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
    <section id="certifications" className="py-xl border-t border-outline-variant/30 relative">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        
        <div className="max-w-2xl mb-12">
          <div className="section-label">Experience &amp; Credentials</div>
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">
            Experience, Certifications &amp; Achievements
          </h2>
        </div>

        {/* Key Achievements Summary Block */}
        <div className="glass-card p-7 mb-8">
          <div className="flex items-center gap-2.5 mb-5 text-primary font-mono text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-primary" aria-hidden="true">verified_user</span>
            <span>Key Engineering Achievements</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {keyAchievements.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-on-surface font-medium bg-surface-container-lowest border border-outline-variant/30 p-3.5 rounded-xl shadow-sm">
                <span className="material-symbols-outlined text-primary text-base flex-shrink-0 mt-0.5" aria-hidden="true">check_circle</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((c, idx) => (
            <div key={idx} className="glass-card p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
              <div>
                <span className="tech-badge mb-4">
                  {c.badge}
                </span>
                <h3 className="font-headline-md text-on-surface mb-2">
                  {c.title}
                </h3>
                <span className="text-xs font-mono text-on-surface-variant block mb-3">{c.issuer}</span>
                <p className="text-xs text-on-surface-variant leading-relaxed">
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
