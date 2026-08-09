import React, { useState, useEffect } from 'react';
import { Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

export default function WaveGuardCaseStudy() {
  const waveGuard = projectsData.find(p => p.id === 'waveguard');
  const [activeTab, setActiveTab] = useState('dev');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryTabs = [
    { 
      id: 'dev', 
      label: '🙋‍♂️ Developer & Hardware', 
      image: waveGuard.images.solobuoy, 
      caption: 'Mohammed Shadeed P holding the WaveGuard Smart Buoy Prototype hardware outdoors at MACE Kothamangalam.' 
    },
    { 
      id: 'team', 
      label: '👥 Academic Team Photo', 
      image: waveGuard.images.team, 
      caption: 'Academic Project Team at MACE Kothamangalam: Muhammed Shadeed P, Muhammed Ajmal P, Sinan Rahman MP, and Muhammed Adil PP.' 
    },
    { 
      id: 'prototype', 
      label: '🛟 Buoy Hardware Close-up', 
      image: waveGuard.images.prototype, 
      caption: 'Custom Waterproof Orange Buoy Hardware Enclosure housing ESP32, MPU6050, SIM800L GSM, and battery charging circuit.' 
    },
    { 
      id: 'schematic', 
      label: '⚡ Circuit Schematic', 
      image: waveGuard.images.schematic, 
      caption: 'Full Technical Schematic: ESP32 DevKit V1 + MPU6050 (I²C) + SIM800L (UART) + TP4056 Battery Charger + MT3608 Boost + 1000µF Low-ESR Bulk Capacitor.' 
    },
    { 
      id: 'analytics', 
      label: '📈 Analytics Dashboard', 
      image: waveGuard.images.analytics, 
      caption: 'Real-Time Sensor Trends & Analytics: Buoy Motion Index history, 50-reading memory, wave speed graph, and alert frequencies.' 
    },
    { 
      id: 'overview', 
      label: '📊 Station Overview', 
      image: waveGuard.images.overview, 
      caption: 'Authority Dashboard Overview: Kanayannur Zone station (WG-01, 100cm wave height, 0.80 m/s wave speed, ETA, status map).' 
    },
    { 
      id: 'recipients', 
      label: '📱 SMS Alert Contacts', 
      image: waveGuard.images.recipients, 
      caption: 'Live SMS Contact Management: Active emergency contact list across Kochi, Alappuzha, Kollam, and Kozhikode.' 
    },
    { 
      id: 'about', 
      label: '🎓 Project Metadata', 
      image: waveGuard.images.about, 
      caption: 'Project Overview & Metadata: ALUMINI Funded Academic Prototype at MACE Kothamangalam CSE Department.' 
    }
  ];

  const currentTab = galleryTabs.find(t => t.id === activeTab) || galleryTabs[0];

  return (
    <main id="content" className="pt-36 pb-24 min-h-screen grid-pattern">
      <div className="max-w-[1040px] mx-auto px-6">
        
        {/* Back Link */}
        <Link
          to="/"
          className="group inline-flex items-center gap-2 px-4 py-2.5 mb-8 rounded-full border border-on-surface/20 text-sm font-label-md font-medium hover:bg-primary hover:border-primary hover:text-on-surface transition-all shadow-sm"
        >
          <span className="material-symbols-outlined text-base group-hover:-translate-x-1 transition-transform">arrow_back</span>
          <span>Back to Portfolio Overview</span>
        </Link>

        {/* Hero Banner */}
        <div className="glass-card rounded-3xl p-8 md:p-12 mb-16 shadow-sm">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-primary/15 text-primary-dark text-xs font-bold tracking-wide uppercase">
              ★ Flagship Engineering Case Study
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/10 border border-emerald/30 text-emerald text-xs font-bold uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald"></span>
              </span>
              Physical Prototype Built &amp; Tested
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-5 text-on-surface">
            WaveGuard: Embedded Coastal Early Warning Buoy
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-3xl leading-relaxed mb-8">
            A working IoT buoy prototype built to detect <em>Kallakkadal</em> — a long-period swell hazard along
            Kerala's coastline — sensing wave motion directly and streaming it to a live public dashboard.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a 
              href="https://waveguard-backend.onrender.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-on-surface font-semibold hover:bg-primary-dark transition-colors shadow-sm"
            >
              Visit Live Web Dashboard
              <span className="material-symbols-outlined text-lg">open_in_new</span>
            </a>
            <a 
              href="https://github.com/shadeed2004-gif/waveguard" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-on-surface/20 text-on-surface font-semibold hover:border-primary hover:text-primary-dark transition-colors shadow-sm bg-surface-container-lowest"
            >
              <Github className="w-4 h-4 text-primary" />
              <span>GitHub Code Base</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            {['ESP32', 'FastAPI', 'SQLAlchemy', 'React', 'SQLite', 'Render'].map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-lg bg-on-surface/5 text-xs font-mono text-on-surface-variant">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 1. Problem Statement */}
        <section className="mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-on-surface-variant mb-4">1. Problem Statement &amp; Mission</p>
          <div className="glass-card rounded-3xl p-8">
            <p className="leading-relaxed text-on-surface-variant mb-4 font-body-lg">
              Kallakkadal swell events strike Kerala's coast with little warning. Existing detection relies on
              satellite altimetry passes that leave multi-hour gaps — too coarse for a fast-forming coastal hazard.
              Coastal communities and fisherfolk often get no advance signal at all.
            </p>
            <p className="leading-relaxed text-on-surface-variant font-body-lg">
              <strong className="text-on-surface">WaveGuard's mission:</strong> build a low-cost buoy that senses wave motion directly at the coastline and
              streams it to a live dashboard — closing the gap that satellite-only monitoring leaves open.
            </p>
          </div>
        </section>

        {/* 2. System Architecture */}
        <section className="mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-on-surface-variant mb-4">2. System Architecture — Six-Layer Pipeline</p>
          <div className="glass-card rounded-3xl p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { icon: 'sensors', title: '1. Sensing', desc: 'IMU raw g-force capture' },
                { icon: 'filter_alt', title: '2. Smoothing', desc: '1g subtract + moving avg' },
                { icon: 'rule', title: '3. Classification', desc: 'CALM / MODERATE / SEVERE' },
                { icon: 'satellite_alt', title: '4. Fusion', desc: 'Buoy + satellite dual-horizon' },
                { icon: 'notifications_active', title: '5. Alerting', desc: 'ETA formula → alert trigger' },
                { icon: 'dashboard', title: '6. Dashboard', desc: 'Live public + admin view' }
              ].map((step, idx) => (
                <div key={idx} className="glass-hover bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-4 text-center">
                  <span className="material-symbols-outlined text-primary-dark text-2xl">{step.icon}</span>
                  <p className="text-xs font-semibold mt-2 text-on-surface">{step.title}</p>
                  <p className="text-[11px] text-on-surface-variant mt-1 leading-tight">{step.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-on-surface-variant mt-5 leading-relaxed">
              Verified against the deployed codebase: WiFi/HTTP telemetry, SQLite storage, and a React dashboard
              consuming a FastAPI backend, with dual-horizon fusion combining slower satellite passes against
              faster buoy-side readings for earlier lead time.
            </p>
          </div>
        </section>

        {/* 3. Hardware */}
        <section className="mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-on-surface-variant mb-4">3. Hardware — WG-P1 Prototype</p>
          <div className="grid gap-4">
            {[
              { num: '1', title: 'ESP32 Microcontroller', desc: 'Dual-core brain of the buoy. Reads sensors, runs threshold logic, pushes telemetry over WiFi/HTTP.' },
              { num: '2', title: 'MPU6050 IMU', desc: '6-axis accel + gyro. Feeds the wave-motion pipeline — raw g-force samples, 1g gravity subtracted, moving-average smoothed.' },
              { num: '3', title: 'SIM800L GSM Module', desc: 'Cellular uplink hardware for deployments beyond WiFi range.' },
              { num: '4', title: 'NEO-6M GPS', desc: 'Buoy position fix, timestamped alongside every telemetry packet.' }
            ].map((hw) => (
              <div key={hw.num} className="glass-card glass-hover rounded-2xl p-5 flex items-start gap-4">
                <div className="shrink-0 w-9 h-9 rounded-full bg-primary/20 text-primary-dark font-bold flex items-center justify-center">
                  {hw.num}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-1 text-on-surface">{hw.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{hw.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Dual-Horizon Fusion */}
        <section className="mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-on-surface-variant mb-4">4. Dual-Horizon Fusion &amp; ETA Logic</p>
          <div className="glass-card rounded-3xl p-8">
            <p className="leading-relaxed text-on-surface-variant mb-5 font-body-lg">
              Satellite altimetry gives wide coverage but coarse timing. Buoy telemetry gives fine timing but only
              at one point. WaveGuard fuses both: satellite data sets a longer-horizon baseline risk, while live
              buoy acceleration readings correct that estimate in near real time, driving a wave-arrival ETA used
              to time the alert.
            </p>
            <div className="bg-on-surface/5 rounded-xl p-4 font-mono text-sm text-on-surface-variant overflow-x-auto">
              ETA = distance_to_shore / estimated_wave_speed(buoy_reading, satellite_baseline)
            </div>
          </div>
        </section>

        {/* 5. Build Gallery */}
        <section className="mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-on-surface-variant mb-4">5. Build Gallery</p>
          <div className="glass-card rounded-3xl p-6 md:p-8">
            <div className="grid md:grid-cols-[240px_1fr] gap-6">
              <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
                {galleryTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`shrink-0 text-left px-4 py-3 rounded-xl text-xs font-mono font-medium transition-colors whitespace-nowrap md:whitespace-normal border ${
                      activeTab === tab.id
                        ? 'bg-primary border-primary text-on-surface font-semibold shadow-sm'
                        : 'bg-surface-container-lowest border-outline-variant/30 text-on-surface-variant hover:bg-on-surface/5 hover:text-on-surface'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="flex flex-col justify-between">
                <div className="bg-surface-container rounded-2xl overflow-hidden border border-outline-variant/30 shadow-inner flex flex-col items-center justify-center min-h-[380px] p-3">
                  <img 
                    src={currentTab.image} 
                    alt={currentTab.label} 
                    loading="lazy"
                    className="w-full h-auto max-h-[500px] object-contain rounded-xl shadow-sm"
                  />
                </div>
                <p className="text-xs font-mono text-on-surface-variant mt-3 text-center md:text-left leading-relaxed">
                  {currentTab.caption}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Firmware Snippet */}
        <section className="mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-on-surface-variant mb-4">6. Firmware Snippet — Threshold Classifier</p>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-black/10">
            <div className="bg-[#2B2A28] px-4 py-3 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]"></span>
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]"></span>
              <span className="w-3 h-3 rounded-full bg-[#27C93F]"></span>
              <span className="ml-3 text-xs text-white/40 font-mono">wave_classifier.py</span>
            </div>
            <pre className="bg-[#1C1B1A] text-sm font-mono leading-relaxed p-6 overflow-x-auto">
              <code>
                <span className="text-blue-400">def</span> <span class="text-yellow-300">classify_wave_state</span><span className="text-white/80">(accel_g: </span><span className="text-blue-400">float</span><span className="text-white/80">) -&gt; </span><span className="text-blue-400">str</span><span className="text-white/80">:</span>{"\n"}
                <span className="text-white/40">    # 1g gravity already subtracted upstream</span>{"\n"}
                <span className="text-white/80">    </span><span className="text-blue-400">if</span><span className="text-white/80"> accel_g &lt; </span><span className="text-orange-300">0.05</span><span className="text-white/80">:</span>{"\n"}
                <span className="text-white/80">        </span><span className="text-blue-400">return</span> <span className="text-green-400">"CALM"</span>{"\n"}
                <span className="text-white/80">    </span><span className="text-blue-400">elif</span><span className="text-white/80"> accel_g &lt; </span><span className="text-orange-300">0.10</span><span className="text-white/80">:</span>{"\n"}
                <span className="text-white/80">        </span><span className="text-blue-400">return</span> <span className="text-green-400">"MODERATE"</span>{"\n"}
                <span className="text-white/80">    </span><span className="text-blue-400">else</span><span className="text-white/80">:</span>{"\n"}
                <span className="text-white/80">        </span><span className="text-blue-400">return</span> <span className="text-green-400">"SEVERE"</span><span className="text-white/40">  # triggers alert pipeline</span>
              </code>
            </pre>
          </div>
        </section>

        {/* 7. Engineering Challenges */}
        <section className="mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-on-surface-variant mb-4">7. Engineering Challenges &amp; Decisions</p>
          <div className="glass-card rounded-3xl p-8 space-y-6">
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-primary-dark shrink-0">cable</span>
              <div>
                <p className="font-semibold text-on-surface mb-1">GSM/GPS UART Sharing</p>
                <p class="text-sm text-on-surface-variant leading-relaxed">SIM800L and NEO-6M both need UART — required careful pin allocation and baud matching on the ESP32 to avoid bus contention.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-primary-dark shrink-0">balance</span>
              <div>
                <p className="font-semibold text-on-surface mb-1">Threshold Calibration</p>
                <p className="text-sm text-on-surface-variant leading-relaxed">Wave-state thresholds were tuned iteratively against bench-shaken IMU data, with 1g gravity subtraction and moving-average smoothing added to cut false triggers.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-primary-dark shrink-0">wifi</span>
              <div>
                <p className="font-semibold text-on-surface mb-1">Telemetry Reliability</p>
                <p className="text-sm text-on-surface-variant leading-relaxed">WiFi/HTTP telemetry to the FastAPI backend, with SQLite persistence and a React dashboard for live and historical viewing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Next Step */}
        <section className="mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-on-surface-variant mb-4">8. Next Step — WaveGuard R900 Alpha</p>
          <div className="glass-card rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/15 text-primary-dark text-xs font-bold uppercase">Planned Upgrade</span>
            </div>
            <p className="leading-relaxed text-on-surface-variant mb-5 font-body-lg">
              The next iteration beyond this prototype is a 900mm research-grade buoy — R900 Alpha — designed to
              move WaveGuard from a bench proof-of-concept toward a real open-water deployment. Planned upgrades:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-white/50 rounded-xl border border-outline-variant/30 p-4 text-xs text-on-surface-variant">
                <span className="font-semibold text-on-surface">ESP32-S3</span> — more capable successor to the current ESP32
              </div>
              <div className="bg-white/50 rounded-xl border border-outline-variant/30 p-4 text-xs text-on-surface-variant">
                <span className="font-semibold text-on-surface">ICM-20948 IMU</span> — 9-axis upgrade over the MPU6050
              </div>
              <div className="bg-white/50 rounded-xl border border-outline-variant/30 p-4 text-xs text-on-surface-variant">
                <span className="font-semibold text-on-surface">MS5837-30BA Pressure Sensor</span> — new depth/pressure sensing layer
              </div>
              <div className="bg-white/50 rounded-xl border border-outline-variant/30 p-4 text-xs text-on-surface-variant">
                <span className="font-semibold text-on-surface">u-blox M10 GNSS + LTE Cat-1</span> — open-water cellular uplink
              </div>
              <div className="bg-white/50 rounded-xl border border-outline-variant/30 p-4 text-xs text-on-surface-variant">
                <span className="font-semibold text-on-surface">LiFePO₄ + MPPT Solar</span> — self-sustaining power for long deployments
              </div>
              <div className="bg-white/50 rounded-xl border border-outline-variant/30 p-4 text-xs text-on-surface-variant">
                <span className="font-semibold text-on-surface">Custom PCB + FRP Hull</span> — purpose-built enclosure, not breadboard wiring
              </div>
            </div>
            <p className="text-xs text-on-surface-variant mt-5 leading-relaxed">
              Status: component selection and CAD design in progress, no bench or water testing yet. A separate
              industrial-scale concept, WaveGuard-O, is being explored even further out but is kept distinct from
              this research line.
            </p>
          </div>
        </section>

        {/* 9. Limitations */}
        <section className="mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-on-surface-variant mb-4">9. Current Limitations</p>
          <div className="glass-card rounded-3xl p-8">
            <ul className="space-y-3 text-sm text-on-surface-variant leading-relaxed">
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-base text-primary-dark shrink-0">radio_button_unchecked</span>
                <span>SMS/GSM alert delivery is designed into the architecture but not yet wired end-to-end — a planned integration on top of the existing SIM800L hardware, not a shipped feature.</span>
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-base text-primary-dark shrink-0">radio_button_unchecked</span>
                <span>Testing so far is bench-based; no open-water validation yet.</span>
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-base text-primary-dark shrink-0">radio_button_unchecked</span>
                <span>Patent exploration underway — strongest candidate is a multi-buoy TDOA wave-direction method.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 10. Team & Role */}
        <section className="mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-on-surface-variant mb-4">10. Team &amp; My Role</p>
          <div className="glass-card rounded-3xl p-8">
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6 font-body-lg">
              4-person KTU/MACE mini-project team. My scope: backend (FastAPI + SQLAlchemy + SQLite), frontend
              (React dashboard), and deployment (Render).
            </p>
            <div className="glass-card p-6 space-y-3 font-mono text-xs max-w-md bg-surface-container-lowest">
              <div className="flex justify-between py-2 border-b border-outline-variant/30">
                <span className="text-on-surface-variant font-medium">PROJECT LEAD</span>
                <span className="text-on-surface font-semibold">Muhammed Ajmal P</span>
              </div>
              <div className="flex justify-between py-2 border-b border-outline-variant/30">
                <span className="text-on-surface-variant font-medium">SOFTWARE DEVELOPER</span>
                <span className="text-primary font-semibold">Mohammed Shadeed P</span>
              </div>
              <div className="flex justify-between py-2 border-b border-outline-variant/30">
                <span className="text-on-surface-variant font-medium">HARDWARE ENGINEER</span>
                <span className="text-on-surface font-semibold">Sinan Rahman MP</span>
              </div>
              <div className="flex justify-between py-2 border-b border-outline-variant/30">
                <span className="text-on-surface-variant font-medium">SOFTWARE DEVELOPER</span>
                <span className="text-on-surface font-semibold">Muhammed Adil PP</span>
              </div>
              <div className="flex justify-between py-2 border-b border-outline-variant/30">
                <span className="text-on-surface-variant font-medium">FACULTY ADVISER</span>
                <span className="text-on-surface font-semibold">Prof. Eldo P Elias</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-on-surface-variant font-medium">INSTITUTION</span>
                <span className="text-on-surface font-semibold">MACE Kothamangalam CSE</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
