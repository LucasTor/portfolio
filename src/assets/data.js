import React from "react";
import { FaPalette, FaReact, FaCode, FaLaptop, FaNetworkWired } from "react-icons/fa";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
  name: "Lucas Torresan",
  title: "Full Stack Web Developer",
  social: {
    github: "https://github.com/LucasTor",
    linkedin: "https://www.linkedin.com/in/lucas-torresan-8b36b01a4/",
    email: "lucastorresan@hotmail.com",
  },
  about: {
    title: "My Background",
    description:
      "I have always been passionate about computers and technology in general, so much so that I started a degree in electrical engineering to be able to create my own tech, then, almost 5 years ago, a nice job opportunity knoecked at my door that would involve developing a hardware for a GPS tracker, and compatible firmware to go with it, and that's when I started writing software. A couple years ago and I moved to a software house, now only working in the frontend part of the apps in React. Then, another couple yeas passed and I joined another company yet, where i had the opportunity to work as a fullstack enginner both in Frontend and Backend",
  },
  skills: [
    {
      skillName: "Frontend",
      skillIcon: <FaLaptop className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Backend",
      skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Infra",
      skillIcon: <FaNetworkWired className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
  ],
  experience: [
    {
      title: "React tailwind portfolio",
      description:
        "👨‍🎨 An open-source portfolio template built with React and Tailwind.",
      tags: ["template", "portfolio", "reactjs", "tailwindcss"],
      link: "https://github.com/braydentw/react-tailwind-portfolio",
    },
    {
      title: "My personal website",
      description: "⚡ My portfolio built with NextJS and TailwindCSS.",
      tags: ["website", "portfolio", "nextjs", "tailwindcss"],
      link: "https://github.com/braydentW/braydentw",
    },
  ],
};
export default data;
