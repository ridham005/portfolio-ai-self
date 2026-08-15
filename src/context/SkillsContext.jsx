import React, { createContext, useContext, useState, useEffect } from 'react';

/* ─────────────────────────────────────────────
   DEFAULT DATA — synced from user export
───────────────────────────────────────────── */

export const DEFAULT_SKILLS = [
  {
    id: "frontend",
    title: "FRONTEND /// WEB & UI",
    icon: "Cpu",
    accent: "border-sky-500 text-sky-400",
    badge: "ACTIVE",
    skills: [
      { name: "HTML5 / CSS3 / Flexbox & Grid", level: 90 },
      { name: "JavaScript (DOM, ES6+, Async)", level: 85 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Git / GitHub Workflow", level: 85 }
    ]
  },
  {
    id: "backend",
    title: "BACKEND /// PYTHON & APIS",
    icon: "Terminal",
    accent: "border-blue-500 text-blue-400",
    badge: "LEARNING",
    skills: [
      { name: "Python 3 (Core Logic & Scripting)", level: 80 },
      { name: "FastAPI / Flask (REST APIs)", level: 75 },
      { name: "fetch() / Async API Integration", level: 85 },
      { name: "JSON & CORS Configuration", level: 80 }
    ]
  },
  {
    id: "ml",
    title: "ML & AI /// PIPELINES",
    icon: "Zap",
    accent: "border-red-500 text-red-400",
    badge: "PRIORITY",
    skills: [
      { name: "scikit-learn (Classification / Regression)", level: 65 },
      { name: "Hugging Face Transformers", level: 60 },
      { name: "Python ML APIs (Text / NLP)", level: 70 },
      { name: "MLOps & Model Deployment", level: 55 }
    ]
  },
  {
    id: "devops",
    title: "DEVOPS /// CI/CD & CLOUD",
    icon: "Cloud",
    accent: "border-emerald-500 text-emerald-400",
    badge: "PRIORITY",
    skills: [
      { name: "Docker & Containerization", level: 70 },
      { name: "GitHub Actions (CI/CD Pipelines)", level: 65 },
      { name: "Linux / Terminal & Bash", level: 80 },
      { name: "Cloud VPS (DigitalOcean / AWS EC2)", level: 60 }
    ]
  }
];

export const DEFAULT_MILESTONES = [
  {
    id: "m1786798029101",
    value: "NEW STAT",
    label: "LABEL HERE",
    detail: "Describe what this milestone means.",
    accent: "text-sky-500"
  }
];

export const DEFAULT_EXPERIENCE = [
  {
    id: "ex1786798064086",
    year: "2025 - PRESENT",
    role: "NEW EXPERIENCE",
    org: "ORGANISATION NAME",
    location: "INDIA",
    type: "ACTIVE",
    accentColor: "text-sky-400",
    markerColor: "border-sky-400",
    highlights: [
      "Add your first achievement here."
    ]
  }
];

export const DEFAULT_ARTICLES = [
  {
    id: "a1786798068030",
    title: "NEW ARTICLE TITLE",
    category: "BUILD LOG",
    readTime: "JOURNAL",
    date: "08.2026",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Write your article summary here..."
  }
];

export const DEFAULT_PROJECTS = [
  {
    id: "proj_1786798034984",
    name: "NEW PROJECT",
    category: "WEB APPS",
    tag: "IN PROGRESS",
    badgeColor: "border-emerald-500 text-emerald-400",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Short project summary visible on the card.",
    specs: {
      stack: "Stack here",
      powerIndex: "STATUS",
      latency: "Notes",
      architecture: "Architecture"
    },
    description: "Full project description for the modal.",
    github: "#",
    demo: "#"
  }
];

export const DEFAULT_CONFIGURATOR = {
  platforms: [
    {
      id: "plt_1786798042004",
      name: "NEW PLATFORM",
      desc: "Description here",
      pts: 150
    }
  ],
  engines: [
    {
      id: "eng_1786798046764",
      name: "NEW FRAMEWORK",
      pts: 150
    }
  ],
  packages: [
    {
      id: "pkg_1786798050134",
      name: "NEW ADD-ON",
      pts: 30,
      desc: "What this adds"
    }
  ]
};

/* ─────────────────────────────────────────────
   localStorage helpers — bumped to v2 for instant global sync
───────────────────────────────────────────── */
const KEYS = {
  skills: 'ridham_skills_v2',
  milestones: 'ridham_milestones_v2',
  experience: 'ridham_experience_v2',
  articles: 'ridham_articles_v2',
  projects: 'ridham_projects_v2',
  configurator: 'ridham_configurator_v2',
};

function load(key, def) {
  try {
    const r = localStorage.getItem(key);
    if (r) {
      return JSON.parse(r);
    }
  } catch {}
  return def;
}

function usePersistedState(key, def) {
  const [state, setState] = useState(() => load(key, def));
  useEffect(() => { localStorage.setItem(key, JSON.stringify(state)); }, [state, key]);
  return [state, setState];
}

/* ─────────────────────────────────────────────
   Context
───────────────────────────────────────────── */
const PortfolioContext = createContext(null);

export function PortfolioProvider({ children }) {
  const [skills, setSkills] = usePersistedState(KEYS.skills, DEFAULT_SKILLS);
  const [milestones, setMilestones] = usePersistedState(KEYS.milestones, DEFAULT_MILESTONES);
  const [experience, setExperience] = usePersistedState(KEYS.experience, DEFAULT_EXPERIENCE);
  const [articles, setArticles] = usePersistedState(KEYS.articles, DEFAULT_ARTICLES);
  const [projects, setProjects] = usePersistedState(KEYS.projects, DEFAULT_PROJECTS);
  const [configurator, setConfigurator] = usePersistedState(KEYS.configurator, DEFAULT_CONFIGURATOR);

  const resetAll = () => {
    setSkills(DEFAULT_SKILLS);
    setMilestones(DEFAULT_MILESTONES);
    setExperience(DEFAULT_EXPERIENCE);
    setArticles(DEFAULT_ARTICLES);
    setProjects(DEFAULT_PROJECTS);
    setConfigurator(DEFAULT_CONFIGURATOR);
  };

  return (
    <PortfolioContext.Provider value={{
      // Skills
      categories: skills, setCategories: setSkills,
      resetSkills: () => setSkills(DEFAULT_SKILLS),
      // Milestones
      milestones, setMilestones, resetMilestones: () => setMilestones(DEFAULT_MILESTONES),
      // Experience
      experience, setExperience, resetExperience: () => setExperience(DEFAULT_EXPERIENCE),
      // Articles
      articles, setArticles, resetArticles: () => setArticles(DEFAULT_ARTICLES),
      // Projects
      projects, setProjects, resetProjects: () => setProjects(DEFAULT_PROJECTS),
      // Configurator
      configurator, setConfigurator, resetConfigurator: () => setConfigurator(DEFAULT_CONFIGURATOR),
      // Global reset
      resetAll,
    }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const ctx = useContext(PortfolioContext);
  if (!ctx) throw new Error('usePortfolio must be used inside <PortfolioProvider>');
  return ctx;
}

// backward-compat alias
export const useSkills = usePortfolio;
export const SkillsProvider = PortfolioProvider;
