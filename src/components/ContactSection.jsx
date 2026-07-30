import React from 'react';
import { Mail, Phone, Linkedin, Github, FileText, Clock, Target, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
    const targetRoles = [
      "Embedded Systems & IoT Engineering Roles",
      "Data Engineering & Analytics Opportunities",
      "Full‑Stack Web Development Positions"
    ];

  return (
    <section id="contact" className="py-24 bg-bg-soft border-t border-border relative text-ink">
      <div className="max-w-[1140px] mx-auto px-6">
        
        <div className="bg-gradient-to-br from-white to-bg-panel2 border border-border-strong rounded-3xl p-8 sm:p-14 text-center shadow-lg text-ink">
          
          <div className="inline-flex items-center gap-2 bg-primary-dim border border-primary/30 px-3.5 py-1.5 rounded-full text-xs font-mono text-ink font-semibold mb-6">
            <Clock className="w-3.5 h-3.5 text-primary" />
            <span>Replies within 24–48 hours</span>
          </div>

          {/* Inviting Contact Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-ink tracking-tightest mb-4">
            Looking for an engineer who builds embedded and full‑stack systems?
          </h2>

          <p className="text-text-muted text-base sm:text-lg max-w-[56ch] mx-auto mb-8 leading-relaxed">
            I'm actively seeking early‑career opportunities in embedded, data engineering, and full‑stack development, as well as technical collaborations. Let's connect.
          </p>

          {/* Explicit Target Roles List (#10) */}
          <div className="max-w-xl mx-auto bg-bg border border-border rounded-2xl p-4 mb-10 text-left">
            <span className="text-[11px] font-mono text-primary-hover font-bold uppercase tracking-wider block mb-2.5 text-center flex items-center justify-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-primary" />
              Currently Seeking Opportunities In
            </span>
            <div className="space-y-2">
              {targetRoles.map((role, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-ink font-medium bg-white p-2.5 rounded-xl border border-border">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{role}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:mohammedshadeedp@gmail.com"
              className="inline-flex items-center gap-2.5 text-sm font-mono font-medium bg-white border border-border-strong text-ink px-5 py-3.5 rounded-xl hover:border-primary hover:text-primary-hover transition-all shadow-sm hover:-translate-y-0.5 min-h-[44px]"
            >
              <Mail className="w-4 h-4 text-primary" />
              <span>mohammedshadeedp@gmail.com</span>
            </a>

            <a
              href="tel:+919656457874"
              className="inline-flex items-center gap-2.5 text-sm font-mono font-medium bg-white border border-border-strong text-ink px-5 py-3.5 rounded-xl hover:border-primary hover:text-primary-hover transition-all shadow-sm hover:-translate-y-0.5 min-h-[44px]"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>+91 96564 57874</span>
            </a>

            <a
              href="https://www.linkedin.com/in/mohammed-shadeed-p"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-sm font-mono font-medium bg-white border border-border-strong text-ink px-5 py-3.5 rounded-xl hover:border-primary hover:text-primary-hover transition-all shadow-sm hover:-translate-y-0.5 min-h-[44px]"
            >
              <Linkedin className="w-4 h-4 text-primary" />
              <span>LinkedIn Profile ↗</span>
            </a>

            <a
              href="https://github.com/shadeed2004-gif"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-sm font-mono font-medium bg-white border border-border-strong text-ink px-5 py-3.5 rounded-xl hover:border-primary hover:text-primary-hover transition-all shadow-sm hover:-translate-y-0.5 min-h-[44px]"
            >
              <Github className="w-4 h-4 text-primary" />
              <span>GitHub Profile ↗</span>
            </a>

            <a
              href="/Mohammed_Shadeed_P_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-sm font-mono font-semibold bg-primary text-ink px-6 py-3.5 rounded-xl hover:bg-primary-hover transition-all shadow-md hover:-translate-y-0.5 min-h-[44px]"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume PDF ↓</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
