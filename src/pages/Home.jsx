import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import WaveGuardShowcase from '../components/WaveGuardShowcase';
import SkillBars from '../components/SkillBars';
import SkillGrid from '../components/SkillGrid';
import ArticlesSection from '../components/ArticlesSection';
import Certifications from '../components/Certifications';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <main id="content" className="bg-background text-on-background">
      {/* Hero */}
      <Hero />

      {/* Problem & Approach */}
      <section id="about" className="py-xl border-t border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="section-label">Profile</div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-6">
              <div className="lg:col-span-7 space-y-4">
                <h2 className="font-headline-lg text-headline-lg text-on-background">
                  Embedded‑systems engineer focused on reliable edge‑to‑cloud pipelines
                </h2>
                <div className="text-on-surface-variant text-base sm:text-lg leading-relaxed space-y-4">
                  <p>
                    I design and ship end‑to‑end sensing platforms that capture raw physical signals, transform them into actionable data, and expose them via robust cloud services. My recent work, WaveGuard, demonstrates a low‑cost, 10 Hz accelerometer‑based buoy that autonomously detects dangerous swell events and alerts coastal communities via SMS.
                  </p>
                  <p>
                    I am seeking early‑career roles where I can own the full stack – from firmware on constrained MCUs to scalable backend APIs and interactive dashboards.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5 glass-card p-7">
                <div className="text-xs font-mono text-on-surface-variant uppercase tracking-widest font-semibold mb-5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span>Technical Profile</span>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-primary text-3xl">memory</span>
                    <div>
                      <h4 className="font-label-md text-on-surface">Edge Computing</h4>
                      <p className="text-sm text-on-surface-variant">Firmware on constrained MCUs</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-primary text-3xl">cloud_sync</span>
                    <div>
                      <h4 className="font-label-md text-on-surface">Data Pipelines</h4>
                      <p className="text-sm text-on-surface-variant">Scalable backend APIs & telemetry</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-primary text-3xl">devices</span>
                    <div>
                      <h4 className="font-label-md text-on-surface">Full-Stack Dashboards</h4>
                      <p className="text-sm text-on-surface-variant">Interactive & bilingual React interfaces</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WaveGuard Showcase */}
      <WaveGuardShowcase />

      {/* Skills */}
      <section id="skills" className="py-xl border-t border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="section-label">Technical Competencies</div>
            <SkillBars />
            <SkillGrid />
          </motion.div>
        </div>
      </section>

      {/* Writing */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <ArticlesSection />
      </motion.div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <Certifications />
      </motion.div>

      {/* Contact */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <ContactSection />
      </motion.div>
    </main>
  );
}
