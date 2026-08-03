import React from 'react';
import { Linkedin, Github } from 'lucide-react';

export default function ContactSection() {
    const targetRoles = [
      "Embedded Systems & IoT Engineering Roles",
      "Data Engineering & Analytics Opportunities",
      "Full‑Stack Web Development Positions"
    ];

  return (
    <section id="contact" className="py-24 bg-surface-container-low border-t border-outline-variant/30 relative text-on-surface">
      <div className="max-w-[1140px] mx-auto px-6">
        
        <div className="glass-card p-8 sm:p-14 text-center">
          
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-3.5 py-1.5 rounded-full text-xs font-mono text-on-surface font-semibold mb-6">
            <span className="material-symbols-outlined text-primary text-sm">schedule</span>
            <span>Replies within 24–48 hours</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-on-background tracking-tightest mb-4">
            Looking for an engineer who builds embedded and full‑stack systems?
          </h2>

          <p className="text-on-surface-variant text-base sm:text-lg max-w-[56ch] mx-auto mb-8 leading-relaxed">
            I'm actively seeking early‑career opportunities in embedded, data engineering, and full‑stack development, as well as technical collaborations. Let's connect.
          </p>

          <div className="max-w-xl mx-auto bg-surface border border-outline-variant/30 rounded-2xl p-4 mb-10 text-left">
            <span className="text-[11px] font-mono text-primary font-bold uppercase tracking-wider mb-2.5 text-center flex items-center justify-center gap-1.5">
              <span className="material-symbols-outlined text-primary text-sm">my_location</span>
              Currently Seeking Opportunities In
            </span>
            <div className="space-y-2">
              {targetRoles.map((role, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-on-surface font-medium bg-surface-container-lowest p-2.5 rounded-xl border border-outline-variant/30">
                  <span className="material-symbols-outlined text-primary text-base flex-shrink-0">check_circle</span>
                  <span>{role}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:mohammedshadeedp@gmail.com"
              className="inline-flex items-center gap-2.5 bg-surface border border-outline-variant text-on-surface hover:text-primary hover:border-primary-container transition-colors rounded-lg font-label-md px-5 py-3.5 shadow-sm hover:-translate-y-0.5 min-h-[44px]"
            >
              <span className="material-symbols-outlined text-primary text-sm">mail</span>
              <span>mohammedshadeedp@gmail.com</span>
            </a>

            <a
              href="tel:+919656457874"
              className="inline-flex items-center gap-2.5 bg-surface border border-outline-variant text-on-surface hover:text-primary hover:border-primary-container transition-colors rounded-lg font-label-md px-5 py-3.5 shadow-sm hover:-translate-y-0.5 min-h-[44px]"
            >
              <span className="material-symbols-outlined text-primary text-sm">phone</span>
              <span>+91 96564 57874</span>
            </a>

            <a
              href="https://www.linkedin.com/in/mohammed-shadeed-p"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-surface border border-outline-variant text-on-surface hover:text-primary hover:border-primary-container transition-colors rounded-lg font-label-md px-5 py-3.5 shadow-sm hover:-translate-y-0.5 min-h-[44px]"
            >
              <Linkedin className="w-4 h-4 text-primary" />
              <span>LinkedIn Profile ↗</span>
            </a>

            <a
              href="https://github.com/shadeed2004-gif"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-surface border border-outline-variant text-on-surface hover:text-primary hover:border-primary-container transition-colors rounded-lg font-label-md px-5 py-3.5 shadow-sm hover:-translate-y-0.5 min-h-[44px]"
            >
              <Github className="w-4 h-4 text-primary" />
              <span>GitHub Profile ↗</span>
            </a>

            <a
              href="/Mohammed_Shadeed_P_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary px-6 py-3.5 rounded-lg font-label-md transition-all shadow-md hover:-translate-y-0.5 min-h-[44px]"
            >
              <span className="material-symbols-outlined text-sm">description</span>
              <span>Download Resume PDF ↓</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
