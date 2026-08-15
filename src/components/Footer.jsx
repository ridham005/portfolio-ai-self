import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { useSkills } from '../context/SkillsContext';

export default function Footer({ onOpenContact }) {
  const { categories } = useSkills();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-zinc-900 text-zinc-400 font-sans">
      {/* Top Accent Stripe */}
      <div className="m-stripe-divider"></div>

      <div className="container-custom py-16">
        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="m-stripe-vertical h-6"></div>
              <span className="font-bold text-white text-xl tracking-tighter italic">
                RIDHAM <span className="text-sm not-italic ml-1 text-white tracking-widest bg-zinc-900 px-2 py-0.5 border border-zinc-800">///</span>
              </span>
            </div>
            <p className="body-sm text-zinc-400 font-light leading-relaxed">
              Engineering student building high-performance full-stack apps, ML pipelines, and DevOps automation. Precision-engineered. Built to scale.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="label-uppercase text-white text-xs mb-6">SECTIONS</h4>
            <ul className="space-y-3 text-xs font-light">
              <li><a href="#overview" className="hover:text-white transition-colors">OVERVIEW</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">FEATURED PROJECTS</a></li>
              <li><a href="#configurator" className="hover:text-white transition-colors">STACK CONFIGURATOR</a></li>
              <li><a href="#powertrain" className="hover:text-white transition-colors">SKILLS MATRIX</a></li>
              <li><a href="#chronicles" className="hover:text-white transition-colors">CHRONICLES &amp; EXP</a></li>
            </ul>
          </div>

          {/* Col 3: Tech Stack — live from skills editor */}
          <div>
            <h4 className="label-uppercase text-white text-xs mb-6">CURRENT STACK</h4>
            <ul className="space-y-3 text-xs font-light">
              {categories.map(cat => (
                <li key={cat.id}>
                  <div className="text-zinc-500 text-[10px] font-mono mb-1">{cat.title}</div>
                  <div className="flex flex-wrap gap-1">
                    {cat.skills.slice(0, 2).map(skill => (
                      <span key={skill.name} className="text-zinc-300 font-mono font-bold text-[10px] bg-zinc-900 border border-zinc-800 px-1.5 py-0.5">
                        {skill.name.split('(')[0].trim()}
                      </span>
                    ))}
                    {cat.skills.length > 2 && (
                      <span className="text-zinc-600 font-mono text-[10px]">+{cat.skills.length - 2} more</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Connect */}
          <div>
            <h4 className="label-uppercase text-white text-xs mb-6">CONNECT WITH RIDHAM</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="https://github.com/ridham005"
                target="_blank"
                rel="noopener noreferrer"
                className="button-icon w-10 h-10 hover:border-sky-400"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="button-icon w-10 h-10 hover:border-blue-400"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="button-icon w-10 h-10 hover:border-red-400"
                title="Twitter / X"
              >
                <Twitter size={18} />
              </a>
              <button
                onClick={onOpenContact}
                className="button-icon w-10 h-10 hover:border-emerald-400 text-white"
                title="Email Contact"
              >
                <Mail size={18} />
              </button>
            </div>
            <button
              onClick={onOpenContact}
              className="button-primary-outline text-xs px-4 h-10 w-full justify-center"
            >
              SEND MESSAGE
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-zinc-900 text-xs">
          <div className="caption text-zinc-500">
            © {new Date().getFullYear()} RIDHAM SOFTWARE ENGINEERING. BUILT WITH REACT + VITE.
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-zinc-600">CANVAS /// PURE BLACK #000000</span>
            <button
              onClick={scrollToTop}
              className="button-icon w-10 h-10 hover:bg-zinc-800"
              title="Back to Top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
