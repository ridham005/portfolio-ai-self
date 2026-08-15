import React from 'react';
import { X, ExternalLink, Github, Cpu, Gauge, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-700 text-white rounded-none p-6 md:p-8 my-8 shadow-2xl">
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-6 mb-6">
          <div className="flex items-center gap-3">
            <div className="m-stripe-vertical h-6"></div>
            <div>
              <span className="text-xs font-mono font-bold text-sky-400">PROJECT DETAILS</span>
              <h2 className="display-sm text-white tracking-tight">{project.name}</h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="button-icon shrink-0 hover:bg-zinc-800"
          >
            <X size={20} />
          </button>
        </div>

        {/* Full Bleed Image Banner */}
        <div className="relative aspect-[21/9] overflow-hidden mb-8 border border-zinc-800">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover filter brightness-90 contrast-110"
          />
          <div className="absolute bottom-4 left-4 bg-black/90 border border-zinc-800 px-4 py-1.5 text-xs font-mono font-bold text-white">
            TAG /// {project.tag}
          </div>
        </div>

        {/* Telemetry Spec Grid (spec-cells in modal) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="spec-cell p-4">
            <div className="text-[10px] font-mono text-zinc-500 font-bold uppercase">STACK</div>
            <div className="text-sm font-bold text-white mt-1 truncate">{project.specs.stack}</div>
          </div>
          <div className="spec-cell p-4">
            <div className="text-[10px] font-mono text-zinc-500 font-bold uppercase">STATUS</div>
            <div className="text-sm font-bold text-red-400 mt-1 truncate">{project.specs.powerIndex}</div>
          </div>
          <div className="spec-cell p-4">
            <div className="text-[10px] font-mono text-zinc-500 font-bold uppercase">NOTES</div>
            <div className="text-sm font-bold text-sky-400 mt-1 truncate">{project.specs.latency}</div>
          </div>
          <div className="spec-cell p-4">
            <div className="text-[10px] font-mono text-zinc-500 font-bold uppercase">ARCHITECTURE</div>
            <div className="text-sm font-bold text-emerald-400 mt-1 truncate">{project.specs.architecture}</div>
          </div>
        </div>

        {/* Detailed Overview */}
        <div className="mb-8 border-t border-zinc-900 pt-6">
          <h3 className="title-md uppercase font-bold mb-3 text-white">TECHNICAL OVERVIEW</h3>
          <p className="body-md text-zinc-300 font-light leading-relaxed mb-6">
            {project.description}
          </p>

          <h4 className="label-uppercase text-xs text-zinc-400 mb-3">KEY HIGHLIGHTS</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-zinc-300">
            <li className="flex items-center gap-2 bg-zinc-900/60 p-3 border border-zinc-800">
              <CheckCircle2 size={16} className="text-sky-400 shrink-0" />
              <span>Zero-latency state mutations and instant render updates.</span>
            </li>
            <li className="flex items-center gap-2 bg-zinc-900/60 p-3 border border-zinc-800">
              <CheckCircle2 size={16} className="text-sky-400 shrink-0" />
              <span>Tested unit coverage with automated regression verification.</span>
            </li>
            <li className="flex items-center gap-2 bg-zinc-900/60 p-3 border border-zinc-800">
              <CheckCircle2 size={16} className="text-sky-400 shrink-0" />
              <span>Responsive breakpoint layout adapted for mobile, tablet & desktop.</span>
            </li>
            <li className="flex items-center gap-2 bg-zinc-900/60 p-3 border border-zinc-800">
              <CheckCircle2 size={16} className="text-sky-400 shrink-0" />
              <span>Production-ready deployment pipeline with CI/CD triggers.</span>
            </li>
          </ul>
        </div>

        {/* Actions Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-zinc-800 pt-6">
          <div className="flex gap-4">
            {project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary"
              >
                <span>LAUNCH DEMO</span>
                <ExternalLink size={16} />
              </a>
            )}
            {project.github !== '#' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary-outline"
              >
                <span>VIEW SOURCE CODE</span>
                <Github size={16} />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs font-bold tracking-widest text-zinc-400 hover:text-white uppercase"
          >
            [ CLOSE ]
          </button>
        </div>
      </div>
    </div>
  );
}
