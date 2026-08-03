import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = "Open to Software Engineering & AI Internships";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 45); // Snappy, clean typing animation speed
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] pt-32 pb-16 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Copy Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7 flex flex-col"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 bg-surface-container-high border border-outline-variant rounded-full px-3 py-1 w-fit mb-6 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald animate-pulse flex-shrink-0"></span>
            <span className="text-xs font-mono text-on-background font-medium min-h-[16px] flex items-center">
              {typedText}
              <span className="inline-block w-[2px] h-3 bg-primary ml-1 animate-pulse"></span>
            </span>
          </div>

          <div className="text-xs font-headline-md text-primary tracking-wide uppercase tracking-widest mb-3 flex items-center gap-2">
            <span className="w-5 h-[2px] bg-primary"></span>
            <span>AI • IoT • FULL-STACK ENGINEERING</span>
          </div>

          {/* Name Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display text-display text-on-background tracking-tightest leading-[0.98] mb-4 uppercase font-bold">
            MOHAMMED SHADEED P
          </h1>

          {/* Refined Identity Positioning Headline */}
          <h2 className="text-2xl sm:text-3xl font-headline-lg text-headline-lg text-on-background font-semibold tracking-tighter mb-6 leading-snug">Building reliable embedded and data‑driven systems <span className="text-primary-container">where hardware meets software.</span></h2>

          <p className="font-body-lg text-on-surface-variant max-w-2xl text-base sm:text-lg font-normal leading-relaxed mb-8">
            I engineer hardware-software pipelines — combining micro‑controller telemetry, cloud REST APIs, and firmware to convert noisy real‑world signals into actionable intelligence. B.Tech Computer Science (Data Science) student at Mar Athanasius College of Engineering.
          </p>

          {/* CTA Buttons & Social Profile Links */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/projects/waveguard"
              className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container px-6 py-3 rounded-lg font-label-md font-bold hover:bg-primary hover:text-on-primary transition-colors shadow-md hover:-translate-y-0.5"
            >
              <span>Explore WaveGuard Flagship</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>

            <a
              href="/Mohammed_Shadeed_P_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-surface text-primary border border-outline-variant px-6 py-3 rounded-lg font-label-md font-bold hover:bg-surface-variant transition-colors shadow-sm hover:-translate-y-0.5"
            >
              <span className="material-symbols-outlined text-sm">download</span>
              <span>Download Resume</span>
            </a>

            <div className="flex items-center gap-2.5">
              <a
                href="https://github.com/shadeed2004-gif"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-surface border border-outline-variant text-on-surface hover:text-primary hover:border-primary-container transition-colors shadow-sm hover:-translate-y-0.5 flex items-center justify-center min-w-[44px] min-h-[44px]"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/mohammed-shadeed-p"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-surface border border-outline-variant text-on-surface hover:text-primary hover:border-primary-container transition-colors shadow-sm hover:-translate-y-0.5 flex items-center justify-center min-w-[44px] min-h-[44px]"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Visual Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:col-span-5 flex justify-center items-center relative"
        >
          <div className="relative w-full max-w-[480px] aspect-[4/5] flex items-end justify-center">
            {/* Background Orange Graphic Card with Floating Tiles - Enlarged */}
            <img 
              src="/hero-bg-card.png" 
              alt="Design Accent" 
              className="absolute inset-0 w-full h-full object-contain pointer-events-none scale-110 sm:scale-125 origin-center transition-transform"
            />
            {/* Cutout Portrait */}
            <img 
              src="/shadeed-photo-hero.png" 
              alt="Mohammed Shadeed P" 
              className="relative z-10 w-[78%] sm:w-[82%] h-auto object-contain drop-shadow-2xl" 
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
