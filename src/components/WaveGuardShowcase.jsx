import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star, Clock, ArrowRightLeft, ShieldCheck } from 'lucide-react';
import { projectsData } from '../data/projects';

export default function WaveGuardShowcase() {
  const waveGuard = projectsData.find(p => p.id === 'waveguard');

  return (
    <section id="flagship" className="py-24 bg-bg-soft border-y border-border relative">
      <div className="max-w-[1140px] mx-auto px-6">
        
        {/* Section Head */}
        <div className="max-w-2xl mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <div className="inline-flex items-center gap-1.5 bg-primary-dim border border-primary/40 text-ink text-xs font-mono font-bold px-3 py-1 rounded-full shadow-sm">
              <Star className="w-3.5 h-3.5 fill-[#f19e01] text-primary-hover" />
              <span>★ ★ ★ ★ ★ FLAGSHIP ENGINEERING CASE STUDY</span>
            </div>
            
            {/* Reading Time Badge (#2) */}
            <div className="inline-flex items-center gap-1.5 bg-white border border-border-strong text-text-muted text-xs font-mono font-semibold px-3 py-1 rounded-full shadow-sm">
              <Clock className="w-3.5 h-3.5 text-primary" />
              <span>12 min read</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-ink tracking-tightest mb-4">
            WaveGuard — Coastal Early Warning Platform
          </h2>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed">
            An autonomous ocean buoy &amp; cloud analytics platform engineered to detect <em>Kallakkadal</em> (abnormal swell surges) along the Kerala coast and dispatch instantaneous SMS warnings to fishing communities.
          </p>
        </div>

        {/* Feature Container */}
        <div className="bg-gradient-to-br from-white to-bg-panel2 border border-border-strong rounded-3xl p-6 sm:p-10 shadow-lg">
          
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border mb-8">
            <div>
              <span className="text-xs font-mono text-primary-hover uppercase tracking-wider font-semibold">Academic Funded IoT Prototype · MACE Kothamangalam</span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-ink tracking-tighter mt-1">
                Smart Buoy Hardware Prototype &amp; Telemetry Stack
              </h3>
            </div>
            
            <Link
              to="/projects/waveguard"
              className="inline-flex items-center gap-2 text-sm font-sans font-semibold bg-primary text-ink px-5 py-3 rounded-xl hover:bg-primary-hover transition-all shadow-sm min-h-[44px]"
            >
              <span>Explore Dedicated Case Study Page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Featured Solo Photo Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            
            {/* Solo Photo Container */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-white p-3 rounded-2xl border border-border-strong shadow-md max-w-[360px] w-full">
                <div className="relative rounded-xl overflow-hidden bg-bg-panel2 border border-border">
                  <img
                    src={waveGuard.images.solobuoy}
                    alt="Mohammed Shadeed P holding the WaveGuard Smart Buoy Prototype"
                    loading="lazy"
                    width={360}
                    height={460}
                    className="w-full h-auto max-h-[460px] object-cover mx-auto"
                  />
                  <div className="bg-ink text-[#f4f1ea] px-4 py-2.5 text-center text-xs font-mono">
                    Mohammed Shadeed P holding the WaveGuard Buoy Prototype
                  </div>
                </div>
              </div>
            </div>

            {/* Product Summary Details */}
            <div className="lg:col-span-7 space-y-5">
              <h4 className="text-xl font-display font-bold text-ink">
                Physical Sensing Hardware &amp; Real-Time Data Pipeline
              </h4>
              <p className="text-text-muted text-base leading-relaxed">
                WaveGuard integrates an onboard <strong className="text-ink">ESP32 microcontroller, 3-axis MPU6050 accelerometer, NEO-6M GPS, and SIM800L cellular GSM transmitter</strong> inside an ocean-deployable buoy enclosure.
              </p>
              <p className="text-text-muted text-base leading-relaxed">
                Raw motion telemetry sampled at 10Hz is evaluated at the edge to classify wave energy, then transmitted to a cloud FastAPI server that fuses buoy metrics with satellite forecasts to trigger instant bilingual SMS alerts to fishermen.
              </p>

              <div className="space-y-2 pt-2">
                {[
                  "Continuous 10Hz accelerometer sampling window",
                  "Direct SIM800L SMS alert transmission without cloud delay",
                  "FastAPI REST cloud backend with satellite data fusion",
                  "ALUMINI-funded project at MACE Kothamangalam CSE"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-ink font-medium">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Visual Architecture Flow Diagram (#3) */}
          <div className="mb-10 pt-8 border-t border-border">
            <span className="text-xs font-mono text-primary-hover uppercase tracking-wider font-bold block mb-4">
              Visual Telemetry Architecture &amp; Data Flow
            </span>

            <div className="bg-bg border border-border rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
                
                <div className="flex-1 bg-white p-3.5 rounded-xl border border-border shadow-sm w-full">
                  <span className="text-[10px] font-mono text-text-faint uppercase block font-semibold">1. Physical Sensor</span>
                  <span className="text-xs font-bold text-ink block mt-0.5">MPU6050 (3-Axis IMU)</span>
                </div>

                <div className="hidden md:block text-primary font-mono text-sm font-bold">→</div>

                <div className="flex-1 bg-white p-3.5 rounded-xl border border-border shadow-sm w-full">
                  <span className="text-[10px] font-mono text-text-faint uppercase block font-semibold">2. Edge MCU</span>
                  <span className="text-xs font-bold text-ink block mt-0.5">ESP32 (10Hz Sampling)</span>
                </div>

                <div className="hidden md:block text-primary font-mono text-sm font-bold">→</div>

                <div className="flex-1 bg-white p-3.5 rounded-xl border border-border shadow-sm w-full">
                  <span className="text-[10px] font-mono text-text-faint uppercase block font-semibold">3. Cloud API</span>
                  <span className="text-xs font-bold text-ink block mt-0.5">FastAPI + Open-Meteo</span>
                </div>

                <div className="hidden md:block text-primary font-mono text-sm font-bold">→</div>

                <div className="flex-1 bg-white p-3.5 rounded-xl border border-border shadow-sm w-full">
                  <span className="text-[10px] font-mono text-text-faint uppercase block font-semibold">4. Storage</span>
                  <span className="text-xs font-bold text-ink block mt-0.5">SQLite DB</span>
                </div>

                <div className="hidden md:block text-primary font-mono text-sm font-bold">→</div>

                <div className="flex-1 bg-white p-3.5 rounded-xl border border-border shadow-sm w-full">
                  <span className="text-[10px] font-mono text-text-faint uppercase block font-semibold">5. User Alert</span>
                  <span className="text-xs font-bold text-emerald block mt-0.5">SIM800L SMS (&lt;5 sec)</span>
                </div>

              </div>
            </div>
          </div>

          {/* "What Makes This Different?" Comparison Table (#11) */}
          <div className="mb-8 pt-6 border-t border-border">
            <span className="text-xs font-mono text-primary-hover uppercase tracking-wider font-bold block mb-4 flex items-center gap-2">
              <ArrowRightLeft className="w-4 h-4 text-primary" />
              <span>What Makes WaveGuard Different?</span>
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-bg border border-border rounded-xl p-5 space-y-2">
                <span className="text-text-faint font-mono font-bold uppercase tracking-wider block">Traditional Satellite Warning</span>
                <ul className="space-y-1.5 text-text-muted">
                  <li>• Coarse regional satellite meteorological models</li>
                  <li>• Delayed broadcast news cycle transmission</li>
                  <li>• Lacks localized sensor verification at fishing harbors</li>
                </ul>
              </div>

              <div className="bg-white border border-primary/30 rounded-xl p-5 space-y-2 shadow-sm">
                <span className="text-primary-hover font-mono font-bold uppercase tracking-wider block flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  WaveGuard Platform Difference
                </span>
                <ul className="space-y-1.5 text-ink font-medium">
                  <li>✓ Continuous 10Hz localized IMU buoy telemetry</li>
                  <li>✓ On-buoy edge classification &amp; direct SIM800L SMS (&lt;5 sec)</li>
                  <li>✓ Bilingual emergency contact management &amp; authority portal</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Product Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-border">
            <div className="bg-white border border-border p-4 rounded-xl shadow-sm">
              <span className="text-[11px] font-mono text-text-faint uppercase tracking-wider block font-semibold">Hardware Modules</span>
              <span className="text-sm font-semibold text-ink mt-1 block">ESP32, MPU6050, SIM800L, NEO-6M</span>
            </div>

            <div className="bg-white border border-border p-4 rounded-xl shadow-sm">
              <span className="text-[11px] font-mono text-text-faint uppercase tracking-wider block font-semibold">Telemetry Sampling</span>
              <span className="text-sm font-semibold text-ink mt-1 block">Continuous 10Hz accelerometer windowing</span>
            </div>

            <div className="bg-white border border-border p-4 rounded-xl shadow-sm">
              <span className="text-[11px] font-mono text-text-faint uppercase tracking-wider block font-semibold">Cloud Backend</span>
              <span className="text-sm font-semibold text-ink mt-1 block">FastAPI REST + Open-Meteo Data Fusion</span>
            </div>

            <div className="bg-white border border-border p-4 rounded-xl shadow-sm">
              <span className="text-[11px] font-mono text-text-faint uppercase tracking-wider block font-semibold">Alert Latency</span>
              <span className="text-sm font-semibold text-emerald mt-1 block flex items-center gap-1.5 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald animate-pulse"></span> Direct SIM800L SMS Dispatch
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
