export type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  status?: "live" | "discontinued" | "building";
  projectBg: string;
};

export const projects: Project[] = [
  {
    id: 0,
    name: "FlowPilot",
    description: "A smart web-based productivity application that uses artificial intelligence to convert user goals into organized tasks for better productivity and task management.",
    image: "/Project/ProjectImages/flowpilot.png",
    link: "https://flowpilott.vercel.app",
    status: "live",
    projectBg: "/Project/ProjectBackground/vidstudio.png",
  },
  {
    id: 1,
    name: "TestPilot AI",
    description: "The next generation of browser testing powered by AI-driven visual analysis and intelligent debugging workflows.",
    image: "/Project/ProjectImages/testpilot.png",
    link: "https://test-pilot-waitlist.vercel.app/",
    // github: "https://github.com/Gaurav00780/ghosttype",
    status: "building",
    projectBg: "/Project/ProjectBackground/ghosttype.png"
  },
  {
    id: 2,
    name: "Ai-Customer-Support-Chatbot",
    description:
      "A SaaS landing page with interactive animations built using modern frontend technologies.",
    image: "/Project/ProjectImages/ai-chatbot.png",
    link: "https://ai-customer-support-bot-alpha.vercel.app/",
    github: "https://github.com/Gaurav00780/Ai-Customer-Support-Bot",
    status: "live",
    projectBg: "/Project/ProjectBackground/layers.png"
  },
  {
    id: 3,
    name: "3D Landing Page",
    description:
      "A SaaS landing page with interactive animations built using modern frontend technologies.",
    image: "/Project/ProjectImages/3d-landing.png",
    link: "https://3d-landing-page-kappa-three.vercel.app/",
    github: "https://github.com/Gaurav00780/3d-landing-page",
    status: "live",
    projectBg: "/Project/ProjectBackground/anieditor.png"
  },
  {
    id: 4,
    name: "Snapshare",
    description:
      "A fast, lightweight, device-agnostic file sharing web app built using Vite + React with Supabase Storage as the backend.",
    image: "/Project/ProjectImages/snapshare.png",
    link: "https://snap-qrshare.vercel.app",
    github: "https://github.com/Gaurav00780/cross-platform-file-sharing",
    status: "discontinued",
    projectBg: "/Project/ProjectBackground/clearstatus.png"
  },
];