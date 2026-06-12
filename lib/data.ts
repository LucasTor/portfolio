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
    role: "Front-end Web Developer · freelance",
    company: "Concordia Labs",
    points: ["Freelance ReactJS development."],
  },
  {
    period: "aug 2024 — jun 2026",
    loc: "remote",
    role: "Software Engineer",
    company: "TestBox",
    points: [
      "[ What you built at TestBox — the product area you owned, stack, impact ]",
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
  { label: "languages", items: ["Python", "TypeScript", "JavaScript", "SQL"] },
  {
    label: "frameworks",
    items: ["React", "Next.js", "Django", "Express", "Flask", "Chalice"],
  },
  {
    label: "infrastructure",
    items: ["AWS", "Terraform", "PostgreSQL", "GitHub CI", "CircleCI"],
  },
  {
    label: "specialties",
    items: ["Browser Automation", "Reverse Engineering"],
  },
];

export const repos = [
  {
    name: "FoxESS-T-series",
    desc: "Home Assistant integration for FoxESS T-series solar inverters, speaking RS485 over TCP or USB, sending solar production data in real time.",
    lang: "python",
    stars: "★ 5",
    url: "https://github.com/LucasTor/FoxESS-T-series",
  },
  {
    name: "ucs-presence-reverse-engineering",
    desc: "Reverse-engineered my university app's API to automate class attendance when I'm not in class (for testing purpouses, of course...).",
    lang: "javascript",
    stars: "★ 0",
    url: "https://github.com/LucasTor/ucs-presence-reverse-engineering",
  },
  {
    name: "fueltech-video-osd",
    desc: "Renders telemetry gauge overlays from FuelTech EFI logs onto onboard video, so that who's watching can have a glimpse of the 'state' of the car at any given moment.",
    lang: "js · python",
    stars: "★ 0",
    url: "https://github.com/LucasTor/fueltech-video-osd",
  },
];

export const githubUrl = "https://github.com/LucasTor";
export const linkedinUrl = "https://www.linkedin.com/in/lucas-torresan-8b36b01a4/";
export const email = "lucas@torresan.dev";
