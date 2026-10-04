export type Job = { title: string; company: string; place: string; period: string; points: string[] };

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  year: string;
  stack: string[];
  description: string;
  highlights: string[];
  link?: string;
};

export type Resume = {
  name: string;
  role: string;
  location: string;
  summary: string;
  contact: { label: string; href?: string }[];
  experience: Job[];
  projects: Project[];
  skills: { group: string; items: string[] }[];
  education: { degree: string; school: string; period: string }[];
  spokenLanguages: string[];
};

// Fictional person with fictional data, made for this demo. The whole site is built from this file.
export const resume: Resume = {
  name: "Elena Brandt",
  role: "Junior Frontend Developer",
  location: "Leipzig, Germany",
  summary:
    "Junior frontend developer with a BSc in Media Informatics and a six-month internship in a product team. I build accessible interfaces with React, Next.js and TypeScript, and I like turning small ideas into finished, tested projects.",
  contact: [
    { label: "elena.brandt@example.com", href: "mailto:elena.brandt@example.com" },
    { label: "github.com/elenabrandt", href: "https://github.com/elenabrandt" },
    { label: "linkedin.com/in/elena-brandt", href: "https://linkedin.com/in/elena-brandt" },
  ],
  experience: [
    {
      title: "Frontend Intern",
      company: "Pixelwerk",
      place: "Leipzig",
      period: "2024",
      points: [
        "Built 12 accessible UI components for a booking dashboard with React and TypeScript.",
        "Fixed 30+ keyboard and layout bugs found in an accessibility audit.",
      ],
    },
    {
      title: "Working Student, Web",
      company: "Kaffeekarte Studio",
      place: "Leipzig",
      period: "2022 – 2023",
      points: ["Maintained 8 small business websites with HTML, CSS and JavaScript."],
    },
  ],
  projects: [
    {
      slug: "plantly",
      name: "Plantly",
      tagline: "Plant care reminders that work offline",
      year: "2025",
      stack: ["Next.js", "TypeScript", "IndexedDB"],
      description:
        "A small installable app that reminds you when to water your plants. Everything is stored on the device, so it works without a connection.",
      highlights: ["Installable app with offline reminders", "100 Lighthouse accessibility score"],
      link: "https://github.com/roya79br/resume",
    },
    {
      slug: "contrast-lens",
      name: "Contrast Lens",
      tagline: "Browser extension that checks text contrast",
      year: "2025",
      stack: ["TypeScript", "Vite", "axe-core"],
      description: "Highlights text that is hard to read on any page and explains how to fix it, based on the WCAG contrast rules.",
      highlights: ["Flags low-contrast text with one click", "Covered by 24 unit tests"],
      link: "https://github.com/roya79br/resume",
    },
    {
      slug: "pocket-budget",
      name: "Pocket Budget",
      tagline: "Budget tracker with simple charts",
      year: "2024",
      stack: ["React", "Recharts", "Vitest"],
      description: "Track income and spending by category and see a monthly chart. Built as a university project and rebuilt later with tests.",
      highlights: ["Keyboard-friendly forms with live validation", "Works on screens from 320px wide"],
    },
  ],
  skills: [
    { group: "Programming languages", items: ["TypeScript", "JavaScript", "HTML", "CSS"] },
    { group: "Frameworks", items: ["React", "Next.js", "Vite"] },
    { group: "Testing", items: ["Vitest", "Testing Library"] },
    { group: "Tools", items: ["Git", "Figma", "GitHub Actions"] },
  ],
  education: [{ degree: "BSc Media Informatics", school: "University of Leipzig", period: "2021 – 2024" }],
  spokenLanguages: ["German (native)", "English (C1)"],
};