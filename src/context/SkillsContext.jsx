import React, { createContext, useContext, useState, useEffect } from 'react';

/* ─────────────────────────────────────────────
   DEFAULT DATA — all sections
───────────────────────────────────────────── */

export const DEFAULT_SKILLS = [
  {
    id: 'frontend', title: 'FRONTEND /// WEB & UI', icon: 'Cpu',
    accent: 'border-sky-500 text-sky-400', badge: 'ACTIVE',
    skills: [
      { name: 'HTML5 / CSS3 / Flexbox & Grid', level: 90 },
      { name: 'JavaScript (DOM, ES6+, Async)', level: 85 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'Git / GitHub Workflow', level: 85 },
    ],
  },
  {
    id: 'backend', title: 'BACKEND /// PYTHON & APIS', icon: 'Terminal',
    accent: 'border-blue-500 text-blue-400', badge: 'LEARNING',
    skills: [
      { name: 'Python 3 (Core Logic & Scripting)', level: 80 },
      { name: 'FastAPI / Flask (REST APIs)', level: 75 },
      { name: 'fetch() / Async API Integration', level: 85 },
      { name: 'JSON & CORS Configuration', level: 80 },
    ],
  },
  {
    id: 'ml', title: 'ML & AI /// PIPELINES', icon: 'Zap',
    accent: 'border-red-500 text-red-400', badge: 'PRIORITY',
    skills: [
      { name: 'scikit-learn (Classification / Regression)', level: 65 },
      { name: 'Hugging Face Transformers', level: 60 },
      { name: 'Python ML APIs (Text / NLP)', level: 70 },
      { name: 'MLOps & Model Deployment', level: 55 },
    ],
  },
  {
    id: 'devops', title: 'DEVOPS /// CI/CD & CLOUD', icon: 'Cloud',
    accent: 'border-emerald-500 text-emerald-400', badge: 'PRIORITY',
    skills: [
      { name: 'Docker & Containerization', level: 70 },
      { name: 'GitHub Actions (CI/CD Pipelines)', level: 65 },
      { name: 'Linux / Terminal & Bash', level: 80 },
      { name: 'Cloud VPS (DigitalOcean / AWS EC2)', level: 60 },
    ],
  },
];

export const DEFAULT_MILESTONES = [
  { id: 'm1', value: '4 TRACKS', label: 'ACTIVE STACK CATEGORIES', detail: 'Frontend (TOP), Backend (Python & APIs), ML & AI Pipelines, DevOps & Cloud Deployment.', accent: 'text-sky-500' },
  { id: 'm2', value: '85% AVG', label: 'FOUNDATION MASTERY', detail: 'Core Web Stack: HTML5, CSS3, Flexbox/Grid, JS (DOM, Async), Git & GitHub workflow.', accent: 'text-blue-500' },
  { id: 'm3', value: 'FASTAPI', label: 'REST API & PYTHON BACKENDS', detail: 'Asynchronous API development, JSON data contracts, CORS middleware, and frontend integration.', accent: 'text-red-500' },
  { id: 'm4', value: 'DOCKER', label: 'DEVOPS & CONTAINERIZATION', detail: 'Isolated runtime environments, GitHub Actions CI/CD workflows, and Linux server management.', accent: 'text-emerald-500' },
];

export const DEFAULT_EXPERIENCE = [
  {
    id: 'ex1', year: '2025 - PRESENT', role: 'FULL-STACK LEARNER — THE ODIN PROJECT',
    org: 'SELF-DIRECTED / THE ODIN PROJECT', location: 'INDIA', type: 'ACTIVE',
    accentColor: 'text-sky-400', markerColor: 'border-sky-400',
    highlights: [
      'Completed The Odin Project Foundation — HTML5, CSS3, Flexbox, Grid, responsive design, and clean semantic markup.',
      'Mastered vanilla JavaScript fundamentals: DOM manipulation, events, async/await, fetch API, and ES6+ syntax.',
      'Established solid Git & GitHub workflow: branching, committing, pull requests, and repo management.',
      'Currently progressing through the JavaScript full-stack track toward Node.js and backend integration.',
    ],
  },
  {
    id: 'ex2', year: '2025 - PRESENT', role: 'PYTHON ML & DEVOPS ENGINEER (IN TRAINING)',
    org: 'SELF-DIRECTED — ML + DEVOPS PRIORITY TRACK', location: 'INDIA', type: 'PRIORITY',
    accentColor: 'text-red-400', markerColor: 'border-red-500',
    highlights: [
      'Building Python backends using FastAPI — RESTful routes, JSON handling, CORS middleware, async endpoints.',
      'Learning Docker and containerization: writing Dockerfiles, docker-compose configs, and isolated environments.',
      'Studying GitHub Actions for CI/CD pipelines — automating build, test, and deploy workflows on code push.',
      'Exploring scikit-learn, Hugging Face Transformers, and open-source LLM deployment for high-ticket MLOps gigs.',
    ],
  },
  {
    id: 'ex3', year: '2025', role: 'HACKATHON TEAM LEADER — FULL-STACK & BACKEND',
    org: 'COLLEGE HACKATHON', location: 'INDIA', type: 'PROJECT',
    accentColor: 'text-emerald-400', markerColor: 'border-emerald-500',
    highlights: [
      'Led team as technical architect, decoupling frontend (HTML/CSS/JS) from Python FastAPI backend via REST APIs.',
      'Implemented CORS middleware integration so the JavaScript fetch() layer could consume Python endpoints cleanly.',
      'Defined data contracts between frontend and backend teams on Day 1, enabling parallel development with mock JSON.',
      'Managed the team Git repository, preventing merge conflicts and ensuring clean collaborative code flow.',
    ],
  },
];

export const DEFAULT_ARTICLES = [
  {
    id: 'a1',
    title: "WHY I'M LEARNING ML & DEVOPS BEFORE I FINISH FULL-STACK",
    category: 'STRATEGY', readTime: 'LEARNING JOURNAL', date: '2026.08',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    excerpt: "Most students follow the linear path — finish full-stack, then maybe add ML. Here's why I'm running ML and DevOps in parallel from Day 1, and how it's shaping my high-ticket freelance goal.",
  },
  {
    id: 'a2',
    title: 'THE FASTAPI + DOCKER STACK: MY FIRST PRODUCTION-READY ML PIPELINE',
    category: 'ML + DEVOPS', readTime: 'BUILD LOG', date: '2026.08',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Breaking down my 3-phase roadmap: building a Python classification API with FastAPI, containerizing it with Docker, and automating deployment via GitHub Actions — all while still in college.',
  },
  {
    id: 'a3',
    title: 'LEADING A HACKATHON TEAM WITH JUST TOP FOUNDATIONS',
    category: 'HACKATHON', readTime: 'EXPERIENCE LOG', date: '2026.07',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'I walked into a hackathon having only completed The Odin Project Foundation. Here\'s how I led the team, decoupled the frontend from the Python backend, and delivered a working product.',
  },
];

export const DEFAULT_PROJECTS = [
  {
    id: 'portfolio-ai-self', name: 'RIDHAM INTELLIGENCE PORTFOLIO', category: 'WEB APPS', tag: 'LIVE PROJECT',
    badgeColor: 'border-sky-500 text-sky-400',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'This very portfolio — precision-engineered with React, Vite, and a sleek dark engineering design language. Features WebGL distortion, 3D canvas effects, and OriginKit animations.',
    specs: { stack: 'React / Vite / Tailwind CSS / Three.js', powerIndex: 'LIVE DEPLOY', latency: 'Vite HMR', architecture: 'Component Architecture' },
    description: 'A full-spectrum personal developer portfolio built with a sleek dark engineering aesthetic. Built with React + Vite, featuring interactive canvas animations, WebGL liquid distortion, Hover Mesh Text, Smokey Text, Gallery Tunnel, and Line Ripple Background — all self-integrated from OriginKit.',
    github: 'https://github.com/ridham005/portfolio-ai-self', demo: '#',
  },
  {
    id: 'hackathon-fastapi', name: 'HACKATHON FULLSTACK MVP', category: 'FULL-STACK', tag: 'HACKATHON',
    badgeColor: 'border-red-500 text-red-400',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Decoupled fullstack web app built under hackathon time pressure — vanilla JS frontend consuming a Python FastAPI backend, with CORS, JSON contracts, and Git team management.',
    specs: { stack: 'HTML/CSS/JS / Python / FastAPI', powerIndex: 'TEAM LEAD', latency: 'REST + fetch()', architecture: 'Decoupled API' },
    description: 'Led a team at a college hackathon building a decoupled frontend/backend application. Used HTML, CSS, and vanilla JavaScript fetch() calls on the frontend to consume Python 3 FastAPI REST endpoints. Defined JSON data contracts on Day 1, handled CORS middleware, and managed team Git repository.',
    github: 'https://github.com/ridham005', demo: '#',
  },
  {
    id: 'top-foundation-projects', name: 'THE ODIN PROJECT BUILDS', category: 'WEB APPS', tag: 'FOUNDATION',
    badgeColor: 'border-blue-500 text-blue-400',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'A collection of projects built while completing The Odin Project Foundation — landing pages, DOM projects, and interactive JavaScript applications.',
    specs: { stack: 'HTML5 / CSS3 / JavaScript', powerIndex: 'FOUNDATION', latency: 'DOM Manipulation', architecture: 'Vanilla JS' },
    description: 'Projects built during The Odin Project Foundation track: responsive landing pages with Flexbox/Grid layouts, DOM manipulation projects (to-do lists, calculators, etch-a-sketch), and clean Git-managed repositories with proper commit history.',
    github: 'https://github.com/ridham005', demo: '#',
  },
  {
    id: 'docker-ml-pipeline', name: 'DOCKER ML PIPELINE (WIP)', category: 'AI / ML', tag: 'IN PROGRESS',
    badgeColor: 'border-emerald-500 text-emerald-400',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Work-in-progress: A containerized Python ML API that classifies text using scikit-learn, served via FastAPI, and auto-deployed with GitHub Actions CI/CD.',
    specs: { stack: 'Python / FastAPI / Docker / GitHub Actions', powerIndex: 'PHASE 2 BUILD', latency: 'Containerized', architecture: 'MLOps Pipeline' },
    description: 'Following the 3-phase roadmap: Phase 1 (FastAPI sentiment/classification API) → Phase 2 (Dockerized with docker-compose) → Phase 3 (GitHub Actions CI/CD auto-deploy to DigitalOcean VPS). Goal: build a high-ticket portfolio piece demonstrating MLOps capabilities.',
    github: 'https://github.com/ridham005', demo: '#',
  },
];

export const DEFAULT_CONFIGURATOR = {
  platforms: [
    { id: 'web', name: 'WEB APP', desc: 'Interactive SaaS dashboard, portfolio or e-commerce platform', pts: 150 },
    { id: 'ai', name: 'AI / ML PROJECT', desc: 'API-driven ML service, RAG pipeline or NLP classification app', pts: 220 },
    { id: 'fullstack', name: 'FULL-STACK SYSTEM', desc: 'Decoupled frontend + backend, auth, database and CI/CD', pts: 280 },
  ],
  engines: [
    { id: 'react', name: 'REACT / VITE', pts: 160 },
    { id: 'python', name: 'PYTHON / FASTAPI', pts: 210 },
    { id: 'docker', name: 'DOCKER / MLOPS', pts: 230 },
    { id: 'vanillajs', name: 'VANILLA JS / ODIN', pts: 140 },
  ],
  packages: [
    { id: 'cdn', name: 'CDN & EDGE CACHING', pts: 50, desc: 'Fast global delivery via edge network' },
    { id: 'ai', name: 'AI ASSISTANT INTEGRATION', pts: 75, desc: 'Embedded LLM assistant or tool execution' },
    { id: 'cicd', name: 'GITHUB ACTIONS CI/CD', pts: 60, desc: 'Automated build, test and deploy pipeline' },
    { id: 'docker', name: 'CONTAINERIZATION', pts: 55, desc: 'Docker & docker-compose environment' },
  ],
};

/* ─────────────────────────────────────────────
   localStorage helpers
───────────────────────────────────────────── */
const KEYS = {
  skills: 'ridham_skills_v1',
  milestones: 'ridham_milestones_v1',
  experience: 'ridham_experience_v1',
  articles: 'ridham_articles_v1',
  projects: 'ridham_projects_v1',
  configurator: 'ridham_configurator_v1',
};

function load(key, def) {
  try {
    const r = localStorage.getItem(key);
    if (r) {
      const parsed = JSON.parse(r);
      // Auto-upgrade skills if all levels are 0
      if (key === KEYS.skills && Array.isArray(parsed)) {
        const hasSomeLevel = parsed.some(c => c.skills?.some(s => s.level > 0));
        if (!hasSomeLevel) return def;
      }
      return parsed;
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

// backward-compat alias for components that still import useSkills
export const useSkills = usePortfolio;
export const SkillsProvider = PortfolioProvider;
