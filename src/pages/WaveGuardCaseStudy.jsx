import React, { useState, useEffect } from 'react';
import { Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

export default function WaveGuardCaseStudy() {
  const waveGuard = projectsData.find(p => p.id === 'waveguard');
  const [activeTab, setActiveTab] = useState('solobuoy');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryTabs = [
    { id: 'solobuoy', label: '🙋‍♂️ Developer & Hardware', image: waveGuard.images.solobuoy, caption: 'Mohammed Shadeed P holding the WaveGuard Smart Buoy Prototype hardware outdoors at MACE Kothamangalam.' },
    { id: 'team', label: '👥 Academic Team Photo', image: waveGuard.images.team, caption: 'Academic Project Team at MACE Kothamangalam: Muhammed Shadeed P, Muhammed Ajmal P, Sinan Rahman MP, and Muhammed Adil PP.' },
    { id: 'prototype', label: '🛟 Buoy Hardware Close-up', image: waveGuard.images.prototype, caption: 'Custom Waterproof Orange Buoy Hardware Enclosure housing ESP32, MPU6050, SIM800L GSM, and battery charging circuit.' },
    { id: 'schematic', label: '⚡ Circuit Schematic', image: waveGuard.images.schematic, caption: 'Full Technical Schematic: ESP32 DevKit V1 + MPU6050 (I²C) + SIM800L (UART) + TP4056 Battery Charger + MT3608 Boost + 1000µF Low-ESR Bulk Capacitor.' },
    { id: 'overview', label: '📊 Authority Dashboard', image: waveGuard.images.overview, caption: 'Authority Dashboard Overview: Kanayannur Zone station (WG-01, 100cm wave height, 0.80 m/s wave speed, ETA, status map).' },
    { id: 'analytics', label: '📈 Analytics & Trends', image: waveGuard.images.analytics, caption: 'Real-Time Sensor Trends: Buoy Motion Index history, 50-reading memory, wave speed over time graph, alert frequency per day.' },
    { id: 'recipients', label: '📱 SMS Alert Contacts', image: waveGuard.images.recipients, caption: 'Live SMS Contact Management: Active emergency contact list across Kochi, Alappuzha, Kollam, and Kozhikode.' },
    { id: 'about', label: '🎓 Academic Project Metadata', image: waveGuard.images.about, caption: 'Project Overview & Metadata: ALUMINI Funded Academic Prototype at MACE Kothamangalam CSE Department.' }
  ];

  const currentTab = galleryTabs.find(t => t.id === activeTab);

  return (
    <main id="content" className="pt-36 pb-24 min-h-screen grid-pattern">
      <div className="max-w-[1140px] mx-auto px-6">
        
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-label-md text-label-md bg-surface-container-high border border-outline-variant px-4 py-2.5 rounded-lg text-on-surface hover:text-primary hover:border-primary-container transition-all shadow-sm mb-8"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          <span>Back to Portfolio Overview</span>
        </Link>

        {/* Hero Banner */}
        <div className="glass-card p-8 sm:p-12 mb-12 shadow-sm text-on-surface">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="tech-badge">
              ★ FLAGSHIP ENGINEERING CASE STUDY
            </span>
            <span className="inline-flex items-center gap-2 text-xs font-code text-emerald font-semibold bg-emerald/10 border border-emerald/30 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald animate-pulse"></span>
              Physical Prototype Built &amp; Tested
            </span>
          </div>

          <h1 className="font-display text-headline-lg sm:text-display text-on-surface tracking-tightest mb-6">
            WaveGuard: Embedded Coastal Early Warning Buoy
          </h1>

          <p className="font-body-lg text-on-surface-variant max-w-4xl leading-relaxed mb-8">
            An autonomous smart buoy &amp; cloud analytics platform designed to detect <em>Kallakkadal</em> (abnormal swell surges) along the Kanayannur coastal zone of Kerala and dispatch instantaneous SMS warnings to fishing communities.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={waveGuard.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-sans font-semibold bg-primary-container text-on-primary-container px-6 py-3 rounded-xl hover:bg-primary hover:text-on-primary transition-all shadow-sm"
            >
              <span>Visit Live Web Dashboard</span>
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>

            <a
              href={waveGuard.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-mono font-medium bg-surface-container-lowest border border-outline-variant text-on-surface px-5 py-3 rounded-xl hover:border-primary hover:text-primary transition-all shadow-sm"
            >
              <Github className="w-4 h-4 text-primary" />
              <span>GitHub Code Base</span>
            </a>
          </div>
        </div>

        {/* 1. Problem Statement */}
        <section className="mb-16">
          <div className="section-label">1. Problem Statement &amp; Mission</div>
          <div className="glass-card p-6 sm:p-8 space-y-4">
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              Coastal fishing communities in Kerala regularly face <em>Kallakkadal</em> — sudden, severe swell surges occurring without local wind activity. These surges destroy moored boats, inundate coastal homes, and endanger lives. Traditional satellite meteorological forecasts provide broad regional alerts but lack the high-frequency localized sensing required for coastal villages.
            </p>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              <strong className="text-on-surface">The Solution:</strong> WaveGuard is an ocean-deployed buoy system that samples 3-axis IMU acceleration data at 10Hz, processes wave energy metrics at the edge via ESP32 microcontrollers, cross-validates readings against satellite wave models via FastAPI cloud algorithms, and broadcasts bilingual SMS warnings within seconds.
            </p>
          </div>
        </section>

        {/* 2. Custom Interactive System Architecture & Telemetry Flow */}
        <section id="architecture" className="mb-16">
          <div className="section-label">2. End-to-End System Architecture &amp; Data Pipeline</div>
          
          <div className="glass-card p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-code text-xs text-on-surface">
              <div className="bg-surface-container-lowest border border-outline-variant/30 p-4 rounded-xl space-y-2">
                <span className="text-primary font-bold block">1. SENSORS (PHYSICAL)</span>
                <p className="text-on-surface-variant text-[11px] leading-relaxed">MPU6050 (3-Axis IMU) + NEO-6M GPS over I²C Bus @ 400kHz</p>
              </div>

              <div className="bg-surface-container-lowest border border-outline-variant/30 p-4 rounded-xl space-y-2">
                <span className="text-primary font-bold block">2. EDGE FIRMWARE</span>
                <p className="text-on-surface-variant text-[11px] leading-relaxed">ESP32 (10Hz Sampling · 20-Sample Window Rolling Classification)</p>
              </div>

              <div className="bg-surface-container-lowest border border-outline-variant/30 p-4 rounded-xl space-y-2">
                <span className="text-primary font-bold block">3. CLOUD BACKEND</span>
                <p className="text-on-surface-variant text-[11px] leading-relaxed">FastAPI REST Server + SQLite Storage + Open-Meteo Fusion</p>
              </div>

              <div className="bg-surface-container-lowest border border-outline-variant/30 p-4 rounded-xl space-y-2">
                <span className="text-primary font-bold block">4. ALERTS &amp; DASHBOARD</span>
                <p className="text-on-surface-variant text-[11px] leading-relaxed">Direct SIM800L SMS Dispatch + Bilingual React Dashboard</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Full Project Gallery */}
        <section className="mb-16">
          <div className="section-label">3. Full Project Gallery (Hardware, Team &amp; Dashboards)</div>

          <div className="flex flex-wrap gap-2 mb-6">
            {galleryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-xs font-mono font-medium px-4 py-2.5 rounded-xl border transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary/10 border-primary text-on-surface font-semibold shadow-sm'
                    : 'bg-surface-container-lowest border-outline-variant/30 text-on-surface-variant hover:border-outline-variant hover:text-on-surface'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-surface-container rounded-2xl overflow-hidden border border-outline-variant shadow-inner flex flex-col items-center justify-center min-h-[440px] p-4">
            <img
              src={currentTab.image}
              alt={currentTab.label}
              loading="lazy"
              width={800}
              height={500}
              className="w-full h-auto max-h-[620px] object-contain mx-auto rounded-xl shadow-sm"
            />
            <div className="w-full bg-surface-container border-t border-outline-variant/30 px-4 py-3 text-center text-xs font-mono text-on-surface-variant font-medium mt-3">
              {currentTab.caption}
            </div>
          </div>
        </section>

        {/* 4. Engineering Decisions & Architecture Trade-Offs */}
        <section className="mb-16">
          <div className="section-label">4. Key Engineering Decisions &amp; Architecture Trade-Offs</div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 space-y-2">
              <h3 className="text-base font-display font-bold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">help</span>
                <span>Why ESP32 over Arduino / Raspberry Pi?</span>
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Dual-core 240MHz MCU with native FreeRTOS task scheduling, hardware I²C/UART buses, low-power sleep modes, and zero OS latency for continuous 10Hz accelerometer sampling.
              </p>
            </div>

            <div className="glass-card p-6 space-y-2">
              <h3 className="text-base font-display font-bold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">help</span>
                <span>Why FastAPI over Express / Flask?</span>
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Asynchronous Python ASGI framework handling high-concurrency buoy telemetry ingestion with automatic Pydantic schema validation and zero JSON serialization overhead.
              </p>
            </div>

            <div className="glass-card p-6 space-y-2">
              <h3 className="text-base font-display font-bold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">help</span>
                <span>Why SQLite over PostgreSQL?</span>
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Embedded zero-latency relational database ideal for single-buoy time-series storage without network database protocol overhead or container memory consumption.
              </p>
            </div>

            <div className="glass-card p-6 space-y-2">
              <h3 className="text-base font-display font-bold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">help</span>
                <span>Why SIM800L over 4G LTE Modules?</span>
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Cost-effective quad-band 2G GSM transceiver enabling direct SMS alert dispatch to coastal fishermen without depending on offshore high-speed 4G data coverage.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Engineering Challenges & Lessons Learned */}
        <section id="hardware" className="mb-16">
          <div className="section-label">5. Key Engineering Challenges &amp; Lessons Learned</div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="glass-card p-6 space-y-3">
              <div className="flex items-center gap-2 text-primary text-xs font-code font-bold uppercase">
                <span className="material-symbols-outlined text-primary text-sm">bolt</span>
                <span>SIM800L 2A Burst Current Voltage Spikes</span>
              </div>
              <h3 className="text-lg font-display font-semibold text-on-surface">
                Problem: ESP32 Brownout Resets
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                <strong className="text-on-surface">Initial Attempt:</strong> Powering SIM800L directly from ESP32 3.3V pin.<br/>
                <strong className="text-on-surface">Why it Failed:</strong> SIM800L draws up to 2A current bursts during GSM network registration, causing sudden voltage drops below ESP32 operating thresholds.<br/>
                <strong className="text-on-surface">Final Fix:</strong> Added an MT3608 Boost Converter stepping battery voltage to 5V, paired with a 1000µF Low-ESR bulk capacitor across SIM800L power rails.
              </p>
            </div>

            <div className="glass-card p-6 space-y-3">
              <div className="flex items-center gap-2 text-primary text-xs font-code font-bold uppercase">
                <span className="material-symbols-outlined text-primary text-sm">monitoring</span>
                <span>IMU Motion Noise Calibration</span>
              </div>
              <h3 className="text-lg font-display font-semibold text-on-surface">
                Problem: Wave Motion Drift
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                <strong className="text-on-surface">Initial Attempt:</strong> Instantaneous g-force threshold classification.<br/>
                <strong className="text-on-surface">Why it Failed:</strong> Minor boat bumps or passing wake triggered false positive alerts.<br/>
                <strong className="text-on-surface">Final Fix:</strong> Programmed ESP32 firmware with a 20-sample rolling window algorithm. Thresholds classify sea state into CALM (&lt;1.0g), WATCH (1.0g–1.8g), and WARNING (&gt;1.8g).
              </p>
            </div>
          </div>

          {/* Engineering Code: Firmware Rolling Window */}
          <div className="bg-surface-container rounded-2xl p-6 overflow-x-auto my-8 border border-outline-variant/30">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-coral"></span>
              <span className="w-3 h-3 rounded-full bg-amber"></span>
              <span className="w-3 h-3 rounded-full bg-emerald"></span>
              <span className="text-xs font-mono text-on-surface-variant ml-2">waveguard_firmware.cpp</span>
            </div>
            <pre className="text-sm font-mono text-on-surface leading-relaxed"><code>{`// 20-sample rolling window for swell surge detection
#define WINDOW_SIZE 20
float accelBuffer[WINDOW_SIZE];
int bufferIndex = 0;

float computeRollingAvg() {
  float sum = 0;
  for (int i = 0; i < WINDOW_SIZE; i++) {
    sum += accelBuffer[i];
  }
  return sum / WINDOW_SIZE;
}

void classifySurge(float avgAccel) {
  if (avgAccel > THRESHOLD_DANGER) {
    triggerSMS("DANGER: Kallakkadal detected");
    setAlertLevel(ALERT_RED);
  } else if (avgAccel > THRESHOLD_WARNING) {
    setAlertLevel(ALERT_YELLOW);
  } else {
    setAlertLevel(ALERT_GREEN);
  }
}`}</code></pre>
          </div>

          {/* Engineering Code: FastAPI Telemetry Endpoint */}
          <div className="bg-surface-container rounded-2xl p-6 overflow-x-auto my-8 border border-outline-variant/30">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-coral"></span>
              <span className="w-3 h-3 rounded-full bg-amber"></span>
              <span className="w-3 h-3 rounded-full bg-emerald"></span>
              <span className="text-xs font-mono text-on-surface-variant ml-2">api/telemetry.py</span>
            </div>
            <pre className="text-sm font-mono text-on-surface leading-relaxed"><code>{`@app.post("/api/telemetry")
async def ingest_telemetry(data: TelemetryPayload, db: Session = Depends(get_db)):
    """Ingest real-time buoy sensor readings."""
    reading = SensorReading(
        accel_x=data.accel_x,
        accel_y=data.accel_y,
        accel_z=data.accel_z,
        timestamp=datetime.utcnow(),
        buoy_id=data.buoy_id
    )
    db.add(reading)
    db.commit()

    # Check surge threshold
    avg = compute_rolling_average(db, data.buoy_id)
    if avg > SURGE_THRESHOLD:
        await dispatch_sms_alert(data.buoy_id, avg)

    return {"status": "recorded", "rolling_avg": avg}`}</code></pre>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6 shadow-sm space-y-3">
            <h3 className="text-base font-display font-semibold text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm">menu_book</span>
              <span>Core Technical Lessons Learned</span>
            </h3>
            <ul className="space-y-2 text-xs text-on-surface-variant">
              <li className="flex items-start gap-2">
                <span className="text-primary font-mono font-bold">•</span>
                <span><strong className="text-on-surface">Decouple High-Peak Current Peripherals:</strong> Always decouple radio transmitters drawing peak currents from sensitive microcontroller logic using boost regulation and bulk capacitors.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-mono font-bold">•</span>
                <span><strong className="text-on-surface">Sliding-Window Filtering:</strong> Environmental time-series data requires rolling window statistical thresholds to prevent false positive triggers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-mono font-bold">•</span>
                <span><strong className="text-on-surface">Bilingual SMS Character Limits:</strong> Malayalam Unicode SMS messages require strict byte-length counting to prevent splitting alerts into multi-part SMS charges.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 6. Academic Team & Attribution */}
        <section className="mb-16">
          <div className="section-label">6. Academic Project Team &amp; Attribution</div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
            
            {/* Framed Team Photo */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="glass-card p-3 w-full">
                <div className="relative rounded-xl overflow-hidden bg-surface-container border border-outline-variant/30">
                  <img
                    src={waveGuard.images.team}
                    alt="WaveGuard Academic Project Team at MACE Kothamangalam"
                    loading="lazy"
                    width={600}
                    height={400}
                    className="w-full h-auto max-h-[440px] object-contain mx-auto"
                  />
                  <div className="bg-background text-on-background px-4 py-2.5 text-center font-code text-xs border-t border-outline-variant/30">
                    WaveGuard Project Team at MACE Kothamangalam Campus
                  </div>
                </div>
              </div>
            </div>

            {/* Team Roles & Metadata */}
            <div className="lg:col-span-6 space-y-4">
              <div className="glass-card p-6 space-y-3 font-code text-xs">
                <div className="flex justify-between py-2 border-b border-outline-variant/30">
                  <span className="text-on-surface-variant">PROJECT LEAD</span>
                  <span className="text-on-surface font-semibold">Muhammed Ajmal P</span>
                </div>
                <div className="flex justify-between py-2 border-b border-outline-variant/30">
                  <span className="text-on-surface-variant">SOFTWARE DEVELOPER</span>
                  <span className="text-primary font-semibold">Mohammed Shadeed P</span>
                </div>
                <div className="flex justify-between py-2 border-b border-outline-variant/30">
                  <span className="text-on-surface-variant">HARDWARE ENGINEER</span>
                  <span className="text-on-surface font-semibold">Sinan Rahman MP</span>
                </div>
                <div className="flex justify-between py-2 border-b border-outline-variant/30">
                  <span className="text-on-surface-variant">SOFTWARE DEVELOPER</span>
                  <span className="text-on-surface font-semibold">Muhammed Adil PP</span>
                </div>
                <div className="flex justify-between py-2 border-b border-outline-variant/30">
                  <span className="text-on-surface-variant">FACULTY ADVISER</span>
                  <span className="text-on-surface font-semibold">Prof. Eldo P Elias</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-on-surface-variant">INSTITUTION</span>
                  <span className="text-on-surface font-semibold">MACE Kothamangalam CSE</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 7. Future Roadmap */}
        <section className="mb-16">
          <div className="section-label">7. Future Engineering Roadmap</div>
          <div className="space-y-3">
            {[
              "Offshore Solar Buoy Enclosure: Waterproof IP68 buoy casing with integrated solar panel charging circuit.",
              "On-Device TinyML Classifier: Deploying quantized TensorFlow Lite models directly on ESP32 microcontrollers for real-time swell classification.",
              "LoRa MESH Networking: Long-range RF communication between multi-buoy arrays along the Kerala coast."
            ].map((item, idx) => (
              <div key={idx} className="glass-card p-4 flex items-center gap-3 font-body-md text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-xl flex-shrink-0">check_circle</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
