import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

export default function WaveGuardShowcase() {
  const waveGuard = projectsData.find(p => p.id === 'waveguard');

  return (
    <section id="flagship" className="py-xl border-y border-outline-variant/30 relative">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Section Head */}
        <div className="max-w-2xl mb-12">
          <div className="section-label">Flagship Project</div>
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">
            WaveGuard — Coastal Early Warning Platform
          </h2>
          <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed">
            An autonomous ocean buoy &amp; cloud analytics platform engineered to detect <em>Kallakkadal</em> (abnormal swell surges) along the Kerala coast and dispatch instantaneous SMS warnings to fishing communities.
          </p>
        </div>

        {/* Feature Container */}
        <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left column */}
            <div className="p-8 md:p-10 bg-gradient-to-br from-surface to-surface-container-low flex flex-col justify-center space-y-6">
              
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge">ESP32</span>
                <span className="tech-badge">IoT</span>
                <span className="tech-badge">FastAPI</span>
                <span className="tech-badge">React</span>
                <span className="tech-badge">Python</span>
              </div>

              <h3 className="font-display text-display text-on-background">
                Smart Buoy Hardware Prototype &amp; Telemetry Stack
              </h3>
              
              <p className="font-body-lg text-on-surface-variant">
                WaveGuard integrates an onboard <strong className="text-on-surface">ESP32 microcontroller, 3-axis MPU6050 accelerometer, NEO-6M GPS, and SIM800L cellular GSM transmitter</strong> inside an ocean-deployable buoy enclosure. Raw motion telemetry sampled at 10Hz is evaluated at the edge to classify wave energy, then transmitted to a cloud FastAPI server that fuses buoy metrics with satellite forecasts to trigger instant bilingual SMS alerts.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Continuous 10Hz accelerometer sampling window",
                  "Direct SIM800L SMS alert transmission without cloud delay",
                  "FastAPI REST cloud backend with satellite data fusion",
                  "ALUMINI-funded project at MACE Kothamangalam CSE"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-code text-sm flex-shrink-0">
                      {idx + 1}
                    </div>
                    <span className="text-sm text-on-surface font-medium">{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/projects/waveguard"
                  className="inline-flex items-center gap-2 sm:gap-2.5 bg-primary-container text-on-primary-container px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl font-label-md font-bold hover:bg-primary hover:text-on-primary transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 group min-h-[44px] text-sm sm:text-base"
                >
                  <span>Explore Case Study</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Right column */}
            <div className="relative w-full h-80 sm:h-[420px] lg:h-full min-h-[320px] overflow-hidden bg-surface-container">
              <img 
                src={waveGuard.images.solobuoy} 
                alt="Mohammed Shadeed P holding the WaveGuard Buoy Prototype" 
                className="w-full h-full object-cover object-top lg:object-center"
                loading="lazy"
              />
            </div>
            
          </div>
        </div>

        {/* Visual Architecture Flow Diagram */}
        <div className="mt-12 mb-10 pt-8 border-t border-outline-variant/30">
          <span className="text-xs font-mono text-primary uppercase tracking-wider font-bold block mb-4">
            Visual Telemetry Architecture &amp; Data Flow
          </span>

          <div className="glass-card p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
              
              <div className="flex-1 bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant/30 shadow-sm w-full">
                <span className="text-[10px] font-mono text-on-surface-variant uppercase block font-semibold">1. Physical Sensor</span>
                <span className="text-xs font-bold text-on-surface block mt-0.5">MPU6050 (3-Axis IMU)</span>
              </div>

              <div className="hidden md:block text-primary font-mono text-sm font-bold">→</div>

              <div className="flex-1 bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant/30 shadow-sm w-full">
                <span className="text-[10px] font-mono text-on-surface-variant uppercase block font-semibold">2. Edge MCU</span>
                <span className="text-xs font-bold text-on-surface block mt-0.5">ESP32 (10Hz Sampling)</span>
              </div>

              <div className="hidden md:block text-primary font-mono text-sm font-bold">→</div>

              <div className="flex-1 bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant/30 shadow-sm w-full">
                <span className="text-[10px] font-mono text-on-surface-variant uppercase block font-semibold">3. Cloud API</span>
                <span className="text-xs font-bold text-on-surface block mt-0.5">FastAPI + Open-Meteo</span>
              </div>

              <div className="hidden md:block text-primary font-mono text-sm font-bold">→</div>

              <div className="flex-1 bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant/30 shadow-sm w-full">
                <span className="text-[10px] font-mono text-on-surface-variant uppercase block font-semibold">4. Storage</span>
                <span className="text-xs font-bold text-on-surface block mt-0.5">SQLite DB</span>
              </div>

              <div className="hidden md:block text-primary font-mono text-sm font-bold">→</div>

              <div className="flex-1 bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant/30 shadow-sm w-full">
                <span className="text-[10px] font-mono text-on-surface-variant uppercase block font-semibold">5. User Alert</span>
                <span className="text-xs font-bold text-emerald block mt-0.5">SIM800L SMS (&lt;5 sec)</span>
              </div>

            </div>
          </div>
        </div>

        {/* "What Makes This Different?" Comparison Table */}
        <div className="mb-8 pt-6 border-t border-outline-variant/30">
          <span className="text-xs font-mono text-primary uppercase tracking-wider font-bold mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">compare_arrows</span>
            <span>What Makes WaveGuard Different?</span>
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="glass-card p-5 space-y-2">
              <span className="text-on-surface-variant font-mono font-bold uppercase tracking-wider block">Traditional Satellite Warning</span>
              <ul className="space-y-1.5 text-on-surface-variant">
                <li>• Coarse regional satellite meteorological models</li>
                <li>• Delayed broadcast news cycle transmission</li>
                <li>• Lacks localized sensor verification at fishing harbors</li>
              </ul>
            </div>

            <div className="glass-card border-primary/30 p-5 space-y-2">
              <span className="text-primary font-mono font-bold uppercase tracking-wider block flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">verified_user</span>
                WaveGuard Platform Difference
              </span>
              <ul className="space-y-1.5 text-on-surface font-medium">
                <li>✓ Continuous 10Hz localized IMU buoy telemetry</li>
                <li>✓ On-buoy edge classification &amp; direct SIM800L SMS (&lt;5 sec)</li>
                <li>✓ Bilingual emergency contact management &amp; authority portal</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Product Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-outline-variant/30">
          <div className="glass-card p-4">
            <span className="text-[11px] font-mono text-on-surface-variant uppercase tracking-wider block font-semibold">Hardware Modules</span>
            <span className="text-sm font-semibold text-on-surface mt-1 block">ESP32, MPU6050, SIM800L, NEO-6M</span>
          </div>

          <div className="glass-card p-4">
            <span className="text-[11px] font-mono text-on-surface-variant uppercase tracking-wider block font-semibold">Telemetry Sampling</span>
            <span className="text-sm font-semibold text-on-surface mt-1 block">Continuous 10Hz accelerometer windowing</span>
          </div>

          <div className="glass-card p-4">
            <span className="text-[11px] font-mono text-on-surface-variant uppercase tracking-wider block font-semibold">Cloud Backend</span>
            <span className="text-sm font-semibold text-on-surface mt-1 block">FastAPI REST + Open-Meteo Data Fusion</span>
          </div>

          <div className="glass-card p-4">
            <span className="text-[11px] font-mono text-on-surface-variant uppercase tracking-wider block font-semibold">Alert Latency</span>
            <span className="text-sm font-semibold text-emerald mt-1 block flex items-center gap-1.5 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald animate-pulse"></span> Direct SIM800L SMS Dispatch
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
