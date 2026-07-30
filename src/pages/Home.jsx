import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import WaveGuardShowcase from '../components/WaveGuardShowcase';
import SkillBars from '../components/SkillBars';
import SkillGrid from '../components/SkillGrid';
import ArticlesSection from '../components/ArticlesSection';
import Certifications from '../components/Certifications';
import ContactSection from '../components/ContactSection';

/**
 * Home page – serves as a concise engineering résumé.
 * Sections are ordered to answer the core questions:
 *   1. What problem am I solving?
 *   2. How do I implement solutions?
 *   3. What design decisions and trade‑offs were made?
 *   4. What results and limitations exist?
 */
export default function Home() {
  return (
    <main id="content" className="bg-bg text-ink">
      {/* Hero */}
      <Hero />

      {/* Problem & Approach */}
      <section id="about" className="py-24 border-t border-border">
        <div className="max-w-[1140px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-xs font-mono text-primary-hover font-semibold uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-5 h-[2px] bg-primary" />
              <span>About Me</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-ink tracking-tightest">
              Embedded‑systems engineer focused on reliable edge‑to‑cloud pipelines
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-6">
              <div className="lg:col-span-7 space-y-4 text-text-muted text-base sm:text-lg leading-relaxed">
                <p>
                  I design and ship end‑to‑end sensing platforms that capture raw physical signals, transform them into actionable data, and expose them via robust cloud services. My recent work, WaveGuard, demonstrates a low‑cost, 10 Hz accelerometer‑based buoy that autonomously detects dangerous swell events and alerts coastal communities via SMS.
                </p>
                <p>
                  I am seeking early‑career roles where I can own the full stack – from firmware on constrained MCUs to scalable backend APIs and interactive dashboards.
                </p>
              </div>
              <div className="lg:col-span-5 bg-white border border-border rounded-2xl p-7 shadow-sm">
                <div className="text-xs font-mono text-text-faint uppercase tracking-widest font-semibold mb-5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span>Technical Profile</span>
                </div>
                <div className="space-y-4 text-sm font-mono">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-text-faint">ROLE</span>
                    <span className="text-ink font-semibold">Embedded & IoT Engineer</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-text-faint">DEGREE</span>
                    <span className="text-ink font-semibold">B.Tech CSE (Data Science)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-text-faint">INSTITUTION</span>
                    <span className="text-ink font-semibold">MACE Kothamangalam</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-text-faint">SEMESTER</span>
                    <span className="text-ink font-semibold">7 of 8 (Graduating 2027)</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-text-faint">FLAGSHIP BUILD</span>
                    <span className="text-primary-hover font-semibold">WaveGuard IoT Platform</span>
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
      <section id="skills" className="py-24 border-t border-border">
        <div className="max-w-[1140px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-xs font-mono text-primary-hover font-semibold uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="w-5 h-[2px] bg-primary" />
                <span>Technical Skills</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-ink tracking-tightest mb-4">
              Capabilities & Proficiency Levels
            </h2>
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
