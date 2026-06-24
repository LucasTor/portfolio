export type Job = {
  period: string;
  loc: string;
  role: string;
  company: string;
  points: string[];
};

export const experience: Job[] = [
  {
    period: "feb 2022 — present",
    loc: "new york, usa · remote",
    role: "Senior Software Engineer",
    company: "Lumenalta (formerly Clevertech)",
    points: [
      "Development of web applications using ReactJS, Next.js, Node.js, MongoDB, and Express, among other technologies.",
    ],
  },
  {
    period: "sep 2020 — present",
    loc: "são marcos, brazil",
    role: "Web Developer · freelance",
    company: "Concordia Labs",
    points: ["Freelance web development."],
  },
  {
    period: "aug 2024 — jun 2026",
    loc: "remote",
    role: "Software Engineer",
    company: "TestBox",
    points: [
      "Reverse-engineered third-party products and integrated them into our own products, in Python.",
    ],
  },
  {
    period: "sep 2021 — feb 2022",
    loc: "caxias do sul, brazil",
    role: "Front-end Web Developer",
    company: "Empresas Randon",
    points: ["Front-end web development."],
  },
  {
    period: "nov 2020 — sep 2021",
    loc: "caxias do sul, brazil",
    role: "Front-end Web Developer",
    company: "Develcode Tecnologia em Sistemas",
    points: [
      "Development of web and mobile applications (ReactJS, PWA, and React Native).",
    ],
  },
  {
    period: "jan 2020 — nov 2020",
    loc: "são marcos, brazil",
    role: "Junior Electrical Engineer",
    company: "DipSystem",
    points: ["Development of hardware and software for IoT communication."],
  },
];

export const stacks = [
  {
    label: "languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "Go", "C++"],
  },
  {
    label: "frameworks",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Django",
      "Django REST",
      "Flask",
      "FastAPI",
      "Chalice",
      "Celery",
    ],
  },
  {
    label: "data",
    items: ["PostgreSQL", "MongoDB", "DynamoDB", "Redis", "DuckDB", "Pandas"],
  },
  {
    label: "infrastructure",
    items: [
      "AWS",
      "Terraform",
      "Docker",
      "AWS CDK",
      "GitHub Actions",
      "CircleCI",
      "GCP",
      "Datadog",
      "Sentry",
    ],
  },
  {
    label: "integrations",
    items: [
      "Salesforce",
      "HubSpot",
      "Stripe",
      "Twilio",
      "Slack",
      "Mailchimp",
      "GraphQL",
    ],
  },
  {
    label: "specialties",
    items: [
      "Browser Automation",
      "Reverse Engineering",
      "Selenium",
      "Playwright",
      "Web Scraping",
      "LLM Integration",
    ],
  },
];

export const repos = [
  {
    name: "ftcan-cluster",
    desc: "A from-scratch digital gauge cluster for my 1992 VW Gol G1 turbo. A Raspberry Pi 5 drives a 1920×720 dash display, reading live engine data straight off a FuelTech ECU over CAN (FTCAN 2.0) and switch inputs over GPIO, then rendering it through a minimal dark Kivy UI with custom widgets — gauges, readouts, alarm bars, turn indicators and a night-dim mode. The whole thing runs headless via systemd off a read-only SD card (overlayroot in RAM), because the car cuts power to the Pi the instant the ignition goes off and an unclean shutdown can never be allowed to corrupt it. Deploys are scripted to flip the filesystem writable, rsync, and lock it back down, verifying every reboot actually happened.",
    lang: "python",
    stars: "★ 0",
    url: "https://github.com/LucasTor/ftcan-cluster",
  },
  {
    name: "FoxESS-T-series",
    desc: "A Home Assistant (HACS) integration for FoxESS T-series solar inverters, originally built to fill the gap for the WEG SIW200G/SIW400G units that are everywhere in Brazil but had no support. It speaks Modbus over RS485 to the inverter through either a TCP bridge or a USB adapter (tested on the WaveShare RS485-to-USB), handles both the old and new firmware payload formats, and streams real-time solar production into Home Assistant so it shows up on the energy dashboard. My most-used open-source project, with a handful of other owners running it on their own hardware.",
    lang: "python",
    stars: "★ 5",
    url: "https://github.com/LucasTor/FoxESS-T-series",
  },
  {
    name: "ucs-presence-reverse-engineering",
    desc: "A script born from reverse-engineering my university's mobile app and its private attendance API. It looks up whether I have a class today, polls every 30 seconds for the attendance check-in window to open, registers my presence the moment it does, and exits — for testing purposes, of course. The fun part was the deployment: a headless Orange Pi PC hidden on campus, running it nightly via cron and getting onto the network over eduroam after the wired network turned out to be whitelisted... right up until the device got stolen. An ESP32 rebuild is on the wishlist.",
    lang: "javascript",
    stars: "★ 0",
    url: "https://github.com/LucasTor/ucs-presence-reverse-engineering",
  },
  {
    name: "fueltech-video-osd",
    desc: "A tool for overlaying engine telemetry onto onboard car footage. It takes the logs a FuelTech EFI saves internally and renders animated gauge overlays (an on-screen display) burned into the video, so anyone watching gets a real glimpse of what the car was doing at any moment of a run. A React frontend lets you lay out the gauges and a Flask + Python backend does the heavy rendering, framed at 1080×1920 with Instagram reels in mind. Highly experimental and gloriously slow, but it works.",
    lang: "js · python",
    stars: "★ 0",
    url: "https://github.com/LucasTor/fueltech-video-osd",
  },
];

export const githubUrl = "https://github.com/LucasTor";
export const linkedinUrl = "https://www.linkedin.com/in/lucas-torresan-8b36b01a4/";
export const email = "lucas@torresan.dev";
