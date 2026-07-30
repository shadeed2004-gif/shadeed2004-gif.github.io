import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, MapPin, Cpu, Activity, ShieldAlert } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-16 flex items-center overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Copy Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 bg-white border border-border-strong px-3.5 py-1.5 rounded-full w-fit mb-6 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald animate-pulse"></span>
            <span className="text-xs font-mono text-ink font-medium">Open to Embedded & Systems Roles</span>
          </div>

          <div className="text-xs font-mono text-primary-hover font-semibold uppercase tracking-widest mb-3 flex items-center gap-2">
            <span className="w-5 h-[2px] bg-primary"></span>
            <span>Data Science · Embedded Systems</span>
          </div>

          {/* Name Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-ink tracking-tightest leading-[0.98] mb-4">
            Mohammed Shadeed P
          </h1>

          {/* Refined Identity Positioning Headline */}
          <h2 className="text-2xl sm:text-3xl font-display font-semibold tracking-tighter text-ink mb-6 leading-snug">Building reliable embedded and data‑driven systems <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover">where hardware meets software.</span></h2>

          <p className="text-text-muted text-base sm:text-lg font-normal max-w-[56ch] leading-relaxed mb-8">
            I engineer hardware-software pipelines — combining micro‑controller telemetry, cloud REST APIs, and firmware to convert noisy real‑world signals into actionable intelligence. B.Tech Computer Science (Data Science) student at Mar Athanasius College of Engineering.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Link
              to="/projects/waveguard"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold bg-primary text-ink px-6 py-3.5 rounded-xl hover:bg-primary-hover transition-all shadow-md hover:-translate-y-0.5"
            >
              <span>Explore WaveGuard Flagship</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="/Mohammed_Shadeed_P_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium bg-white border border-border-strong text-ink px-5 py-3.5 rounded-xl hover:border-primary hover:text-primary-hover transition-all shadow-sm hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Hero Concrete Engineering Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-border">
            <div className="flex flex-col">
              <span className="text-[11px] font-mono text-text-faint uppercase tracking-wider flex items-center gap-1 font-semibold">
                <MapPin className="w-3 h-3 text-primary" /> Location
              </span>
              <span className="text-sm font-semibold text-ink mt-1">Kerala, IN</span>
            </div>

            <div className="flex flex-col">
              <span className="text-[11px] font-mono text-text-faint uppercase tracking-wider flex items-center gap-1 font-semibold">
                <Cpu className="w-3 h-3 text-primary" /> Hardware
              </span>
              <span className="text-sm font-semibold text-ink mt-1">ESP32 · I²C · UART</span>
            </div>

            <div className="flex flex-col">
              <span className="text-[11px] font-mono text-text-faint uppercase tracking-wider flex items-center gap-1 font-semibold">
                <Activity className="w-3 h-3 text-primary" /> Telemetry
              </span>
              <span className="text-sm font-semibold text-ink mt-1">10Hz Continuous</span>
            </div>

            <div className="flex flex-col">
              <span className="text-[11px] font-mono text-text-faint uppercase tracking-wider flex items-center gap-1 font-semibold">
                <ShieldAlert className="w-3 h-3 text-primary" /> Alerting
              </span>
              <span className="text-sm font-semibold text-ink mt-1">SIM800L Direct SMS</span>
            </div>
          </div>
        </motion.div>

        {/* Visual Column (Preserved exact photo per user instruction) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center relative"
        >
          <div className="relative w-full max-w-[420px] aspect-[4/5] flex items-center justify-center">
            {/* Blob Background */}
            <div className="absolute top-[4%] right-[4%] w-[86%] h-[80%] bg-[radial-gradient(circle_at_32%_26%,#f9c766_0%,#f4a300_52%,#d98c00_100%)] rounded-[44%_56%_61%_39%/45%_40%_60%_55%] opacity-95"></div>
            
            <img 
              src="/shadeed-photo-hero.png" 
              alt="Mohammed Shadeed P"
              width={420}
              height={525}
              className="relative z-10 w-full h-full object-contain drop-shadow-[0_28px_34px_rgba(34,34,34,0.20)]"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
