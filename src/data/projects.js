export const projectsData = [
  {
    id: 'waveguard',
    title: 'WaveGuard: Coastal Early Warning System',
    tagline: 'FLAGSHIP PRODUCT CASE STUDY',
    status: 'Prototype Deployed',
    statusType: 'emerald',
    flagship: true,
    summary: 'An autonomous smart buoy & cloud analytics platform engineered to detect Kallakkadal (abnormal swell surges) along the Kerala coast and dispatch instantaneous SMS warnings to fishing communities.',
    problem: 'Coastal fishing communities in Kerala regularly face sudden, severe swell surges occurring without local wind activity, destroying moored boats and endangering lives. Traditional forecasts lack high-frequency localized sensing.',
    solution: 'A buoy sampling 3‑axis IMU at 10 Hz, ESP32 edge processing, FastAPI cloud fusion, and direct SIM800L SMS alerts.',
    role: 'Lead Software Developer & System Architect (MACE Kothamangalam CSE Department Project with Muhammed Ajmal P, Sinan Rahman MP, Muhammed Adil PP, Prof. Eldo P Elias).',
    implementation: `Firmware runs on ESP32 (FreeRTOS) sampling at 10 Hz, storing a 20‑sample rolling window to compute average acceleration. Thresholds classify sea state (CALM, WATCH, WARNING). When a surge exceeds the danger threshold, the ESP32 triggers the SIM800L module to send a bilingual SMS alert. Cloud FastAPI receives telemetry via POST, stores in SQLite, computes rolling averages, and cross‑validates with Open‑Meteo wave model data for additional verification.`,
    designRationale: `• ESP32 chosen for dual‑core performance, native I²C/UART, and low‑power sleep modes, enabling continuous 10 Hz sampling.
• MPU6050 provides reliable 3‑axis acceleration with built‑in DMP for noise reduction.
• SIM800L 2G GSM offers cost‑effective SMS delivery without relying on 4G coverage.
• FastAPI (async Python) offers high‑concurrency ingestion and automatic request validation via Pydantic, reducing latency compared to Flask/Express.
• SQLite selected for zero‑overhead embedded storage on the server, sufficient for single‑buoy time‑series data.`,
    limitations: `• 2G network availability limits deployment to regions with GSM coverage.
• Firmware classification relies on a simple threshold; complex wave patterns may require TinyML models.
• Single‑buoy architecture does not yet support multi‑buoy mesh networking or redundancy.`,
    futureWork: `• Integrate solar‑charged IP68 enclosure for year‑round deployment.
• Deploy quantized TensorFlow‑Lite models on ESP32 for on‑device swell classification.
• Implement LoRa mesh networking to coordinate multiple buoys along the coastline.`,
    metrics: [
      '10Hz continuous accelerometer telemetry sampling',
      'Instantaneous cellular SMS alert dispatch via SIM800L',
      'Open‑Meteo satellite swell model data fusion',
      'ALUMNI‑funded academic hardware prototype'
    ],
    stack: ['ESP32', 'MPU6050', 'SIM800L', 'FastAPI', 'SQLite', 'React', 'Tailwind CSS'],
    liveUrl: 'https://waveguard-liart.vercel.app/',
    githubUrl: 'https://github.com/shadeed2004-gif/WaveGuard',
    images: {
      solobuoy: '/shadeed-buoy-solo.jpg',
      team: '/waveguard-team.jpg',
      prototype: '/waveguard-buoy-prototype.jpg',
      schematic: '/waveguard-schematic.jpg',
      overview: '/waveguard-dashboard-overview.png',
      analytics: '/waveguard-dashboard-analytics.png',
      recipients: '/waveguard-dashboard-recipients.jpg',
      about: '/waveguard-dashboard-about.jpg'
    }
  },
  {
    id: 'smartirrigation',
    title: 'AgriSense: Smart Irrigation Controller',
    tagline: 'Embedded IoT Field Deployment',
    status: 'Pilot Deployed',
    statusType: 'emerald',
    flagship: false,
    summary: 'Low‑cost, solar‑powered irrigation controller that autonomously waters crops based on soil moisture, weather forecast, and plant water‑needs models.',
    problem: 'Smallholder farms often over‑irrigate due to lack of real‑time soil moisture data, leading to water waste and crop stress.',
    solution: 'A battery‑operated ESP32‑based node with capacitive soil‑moisture sensor, LoRaWAN connectivity, and a cloud‑hosted decision engine that schedules watering cycles.',
    role: 'Full‑stack Engineer – firmware, cloud API, and React dashboard integration.',
    implementation: `Firmware reads moisture sensor every 5 min, buffers readings, and transmits via LoRaWAN to The Things Network. Backend (FastAPI) aggregates data, applies a water‑stress model, and pushes schedule commands back to the node. React dashboard visualizes moisture trends and allows manual overrides.`,
    designRationale: `• ESP32 for low power and built‑in Wi‑Fi/LTE fallback.
• Capacitive moisture sensor avoids corrosion issues of resistive probes.
• LoRaWAN chosen for sub‑kilometer range with minimal power consumption.
• FastAPI provides async handling of high‑frequency telemetry from dozens of nodes.`,
    limitations: `• Requires LoRaWAN gateway coverage; limited to pilot region.
• Soil sensor calibration varies between soil types; manual tuning needed.`,
    futureWork: `• Add machine‑learning model for crop‑specific water‑needs.
• Implement mesh‑networked redundant nodes for larger fields.`,
    metrics: [
      '5‑minute moisture sampling',
      'Average node power consumption < 30 mA during active cycle',
      'Water usage reduction ≈ 22% in pilot farms'
    ],
    stack: ['ESP32', 'Capacitive Soil Sensor', 'LoRaWAN', 'FastAPI', 'SQLite', 'React', 'Tailwind CSS'],
    liveUrl: 'https://agrisense-demo.vercel.app/',
    githubUrl: 'https://github.com/shadeed2004-gif/AgriSense',
    images: {
      hardware: '/agrisense-hardware.jpg',
      dashboard: '/agrisense-dashboard.png',
      field: '/agrisense-field.jpg'
    }
  },
  {
    id: 'wildlifemonitor',
    title: 'WildGuard: Edge Computing Wildlife Monitoring',
    tagline: 'Research Prototype',
    status: 'Prototype Tested',
    statusType: 'emerald',
    flagship: false,
    summary: 'Autonomous camera trap that runs TensorFlow‑Lite inference on‑device to detect endangered species and transmit alerts via LTE.',
    problem: 'Conservationists rely on manual retrieval of camera trap images, causing delays and data overload.',
    solution: 'A camera module paired with ESP32‑Cam and a quantized MobileNet model that classifies frames locally; only images of interest trigger an LTE upload to cloud storage.',
    role: 'Embedded AI Engineer – model quantization, firmware, and cloud webhook integration.',
    implementation: `Model quantized to int8 using TensorFlow‑Lite; runs on ESP32‑Cam at 2 fps. When a target species confidence exceeds 0.85, the board activates the SIM800L LTE module to POST the image to an AWS S3 bucket via signed URL. Backend logs events and notifies researchers via Slack webhook.`,
    designRationale: `• ESP32‑Cam provides low‑cost image capture and processing capability.
• Int8 quantization reduces model size to ~1 MB, fitting on flash.
• LTE module chosen for remote field connectivity where Wi‑Fi unavailable.`,
    limitations: `• Limited to daytime operation due to lack of IR illumination.
• Model accuracy constrained by low‑resolution input (96×96).`,
    futureWork: `• Add solar power with battery management for 24/7 operation.
• Expand model to multi‑species detection and incorporate acoustic sensors.`,
    metrics: [
      '2 fps on‑device inference',
      'False‑positive rate < 5%',
      'Average latency 1.2 s from detection to cloud upload'
    ],
    stack: ['ESP32‑Cam', 'TensorFlow‑Lite', 'SIM800L LTE', 'Node.js', 'AWS S3', 'Slack API'],
    liveUrl: '',
    githubUrl: 'https://github.com/shadeed2004-gif/WildGuard',
    images: {
      prototype: '/wildguard-prototype.jpg',
      detection: '/wildguard-detection.png'
    }
  }
];
