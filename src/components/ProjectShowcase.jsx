import React, { useState } from 'react';
import { ExternalLink, Github, Plus, Trash2, Lock, Unlock, RotateCcw, ChevronDown, ChevronUp } from 'lucide-react';
import { usePortfolio } from '../context/SkillsContext';
import { useAdmin } from '../context/AdminContext';

const CATEGORY_OPTIONS = ['WEB APPS', 'FULL-STACK', 'AI / ML', 'DEVOPS', 'OPEN SOURCE', 'MOBILE', 'API'];
const TAG_OPTIONS = ['LIVE PROJECT', 'HACKATHON', 'FOUNDATION', 'IN PROGRESS', 'ARCHIVED', 'CONCEPT'];
const BADGE_COLORS = {
  'LIVE PROJECT': 'border-sky-500 text-sky-400',
  'HACKATHON': 'border-red-500 text-red-400',
  'FOUNDATION': 'border-blue-500 text-blue-400',
  'IN PROGRESS': 'border-emerald-500 text-emerald-400',
  'ARCHIVED': 'border-zinc-500 text-zinc-400',
  'CONCEPT': 'border-amber-500 text-amber-400',
};

function Field({ value, onChange, placeholder = '', multiline = false, className = '' }) {
  return multiline
    ? <textarea value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} rows={3}
        className={`w-full bg-zinc-900 border border-zinc-700 text-white text-xs font-mono px-2 py-1.5 outline-none focus:border-sky-500 resize-none ${className}`} />
    : <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        className={`bg-zinc-900 border border-zinc-700 text-white text-xs font-mono px-2 py-1 outline-none focus:border-sky-500 w-full ${className}`} />;
}

export default function ProjectShowcase({ onSelectProject }) {
  const { projects, setProjects, resetProjects } = usePortfolio();
  const { isAdmin } = useAdmin();
  const [editMode, setEditMode] = useState(false);
  const [expandedEdit, setExpandedEdit] = useState(null);
  const [confirmReset, setConfirmReset] = useState(false);

  const update = (id, field, val) =>
    setProjects(prev => prev.map(p => p.id === id ? { ...p, [field]: val } : p));

  const updateSpec = (id, field, val) =>
    setProjects(prev => prev.map(p => p.id === id ? { ...p, specs: { ...p.specs, [field]: val } } : p));

  const addProject = () => {
    const id = `proj_${Date.now()}`;
    setProjects(prev => [...prev, {
      id, name: 'NEW PROJECT', category: 'WEB APPS', tag: 'IN PROGRESS',
      badgeColor: 'border-emerald-500 text-emerald-400',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop',
      excerpt: 'Short project summary visible on the card.',
      specs: { stack: 'Stack here', powerIndex: 'STATUS', latency: 'Notes', architecture: 'Architecture' },
      description: 'Full project description for the modal.',
      github: '#', demo: '#',
    }]);
    setExpandedEdit(id);
  };

  const deleteProject = id => {
    setProjects(prev => prev.filter(p => p.id !== id));
    if (expandedEdit === id) setExpandedEdit(null);
  };

  const handleReset = () => { resetProjects(); setConfirmReset(false); setEditMode(false); setExpandedEdit(null); };

  return (
    <section id="projects" className="section-padding bg-zinc-950 border-b border-zinc-900">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="m-stripe-vertical h-4"></div>
              <span className="label-uppercase text-zinc-400 text-xs">PROJECT RANGE /// FEATURED</span>
            </div>
            <h2 className="display-lg text-white">FEATURED PROJECTS.</h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            {isAdmin && (
            <div className="flex gap-2 flex-wrap">
              {editMode && (
                <>
                  <button onClick={addProject} className="flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-2 border border-emerald-700 text-emerald-400 hover:bg-emerald-950/40 transition-colors">
                    <Plus size={13} /> ADD PROJECT
                  </button>
                  {!confirmReset
                    ? <button onClick={() => setConfirmReset(true)} className="text-xs font-mono px-3 py-2 border border-zinc-700 text-zinc-400 hover:border-red-700 hover:text-red-400 transition-colors"><RotateCcw size={13} className="inline mr-1" />RESET</button>
                    : <span className="flex items-center gap-2 text-xs font-mono">
                        <span className="text-red-400">Reset?</span>
                        <button onClick={handleReset} className="px-2 py-1 bg-red-900/50 border border-red-700 text-red-300">YES</button>
                        <button onClick={() => setConfirmReset(false)} className="px-2 py-1 border border-zinc-700 text-zinc-400">NO</button>
                      </span>
                  }
                </>
              )}
              <button onClick={() => { setEditMode(e => !e); setConfirmReset(false); setExpandedEdit(null); }}
                className={`flex items-center gap-1.5 text-xs font-mono font-bold px-4 py-2 border transition-colors ${editMode ? 'border-white bg-white text-black' : 'border-zinc-700 text-zinc-300 hover:border-white hover:text-white'}`}>
                {editMode ? <><Lock size={13} /> LOCK</> : <><Unlock size={13} /> EDIT</>}
              </button>
            </div>
            )}
          </div>
        </div>

        {/* Edit Mode: stack layout */}
        {editMode ? (
          <div className="space-y-4">
            {projects.map((project) => {
              const isExpanded = expandedEdit === project.id;
              return (
                <div key={project.id} className="border border-zinc-600 bg-black">
                  {/* Collapsed Header */}
                  <div className="flex items-center justify-between p-4 cursor-pointer gap-4"
                    onClick={() => setExpandedEdit(isExpanded ? null : project.id)}>
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 border ${BADGE_COLORS[project.tag] || 'border-zinc-600 text-zinc-400'}`}>{project.tag}</span>
                      <span className="text-sm font-bold text-white font-mono truncate">{project.name}</span>
                      <span className="text-[10px] text-zinc-500 font-mono hidden sm:block">{project.category}</span>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <button onClick={e => { e.stopPropagation(); deleteProject(project.id); }}
                        className="text-zinc-600 hover:text-red-400 transition-colors p-1"><Trash2 size={14} /></button>
                      {isExpanded ? <ChevronUp size={16} className="text-zinc-400" /> : <ChevronDown size={16} className="text-zinc-400" />}
                    </div>
                  </div>

                  {/* Expanded Edit Form */}
                  {isExpanded && (
                    <div className="border-t border-zinc-800 p-5 space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[10px] font-mono text-zinc-500 block mb-1">PROJECT NAME</label>
                          <Field value={project.name} onChange={v => update(project.id, 'name', v)} placeholder="PROJECT NAME" />
                        </div>
                        <div>
                          <label className="text-[10px] font-mono text-zinc-500 block mb-1">CATEGORY</label>
                          <select value={project.category} onChange={e => update(project.id, 'category', e.target.value)}
                            className="w-full text-xs font-mono bg-zinc-900 border border-zinc-700 text-zinc-300 px-2 py-1.5 outline-none">
                            {CATEGORY_OPTIONS.map(c => <option key={c} value={c}>{c}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="text-[10px] font-mono text-zinc-500 block mb-1">STATUS TAG</label>
                          <select value={project.tag} onChange={e => {
                            update(project.id, 'tag', e.target.value);
                            update(project.id, 'badgeColor', BADGE_COLORS[e.target.value] || 'border-zinc-500 text-zinc-400');
                          }}
                            className="w-full text-xs font-mono bg-zinc-900 border border-zinc-700 text-zinc-300 px-2 py-1.5 outline-none">
                            {TAG_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="text-[10px] font-mono text-zinc-500 block mb-1">IMAGE URL</label>
                          <Field value={project.image} onChange={v => update(project.id, 'image', v)} placeholder="https://..." />
                        </div>
                        <div>
                          <label className="text-[10px] font-mono text-zinc-500 block mb-1">GITHUB URL</label>
                          <Field value={project.github} onChange={v => update(project.id, 'github', v)} placeholder="https://github.com/..." />
                        </div>
                        <div>
                          <label className="text-[10px] font-mono text-zinc-500 block mb-1">DEMO URL</label>
                          <Field value={project.demo} onChange={v => update(project.id, 'demo', v)} placeholder="https://..." />
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] font-mono text-zinc-500 block mb-1">CARD EXCERPT</label>
                        <Field value={project.excerpt} onChange={v => update(project.id, 'excerpt', v)} multiline placeholder="Short summary shown on card..." />
                      </div>
                      <div>
                        <label className="text-[10px] font-mono text-zinc-500 block mb-1">FULL DESCRIPTION (shown in modal)</label>
                        <Field value={project.description} onChange={v => update(project.id, 'description', v)} multiline placeholder="Full project description..." />
                      </div>

                      <div className="grid grid-cols-2 gap-3 pt-2 border-t border-zinc-800">
                        <div>
                          <label className="text-[10px] font-mono text-zinc-500 block mb-1">STACK</label>
                          <Field value={project.specs.stack} onChange={v => updateSpec(project.id, 'stack', v)} placeholder="React / Vite / ..." />
                        </div>
                        <div>
                          <label className="text-[10px] font-mono text-zinc-500 block mb-1">STATUS</label>
                          <Field value={project.specs.powerIndex} onChange={v => updateSpec(project.id, 'powerIndex', v)} placeholder="LIVE DEPLOY" />
                        </div>
                        <div>
                          <label className="text-[10px] font-mono text-zinc-500 block mb-1">NOTES</label>
                          <Field value={project.specs.latency} onChange={v => updateSpec(project.id, 'latency', v)} placeholder="Vite HMR" />
                        </div>
                        <div>
                          <label className="text-[10px] font-mono text-zinc-500 block mb-1">ARCHITECTURE</label>
                          <Field value={project.specs.architecture} onChange={v => updateSpec(project.id, 'architecture', v)} placeholder="Component Architecture" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          /* Normal Card Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id}
                className="model-card group flex flex-col justify-between cursor-pointer"
                onClick={() => onSelectProject(project)}>
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-zinc-900">
                  <img src={project.image} alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-75 contrast-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className={`absolute top-4 left-4 text-[10px] font-mono font-bold px-3 py-1 border bg-black/80 ${project.badgeColor}`}>
                    {project.category}
                  </div>
                  <div className="absolute bottom-4 right-4 text-[10px] font-mono text-zinc-400 bg-black/80 px-2 py-1 border border-zinc-800">
                    {project.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col gap-4 bg-black border-x border-b border-zinc-800">
                  <div>
                    <h3 className="title-lg font-bold uppercase text-white mb-2 group-hover:text-sky-400 transition-colors tracking-tight">
                      {project.name}
                    </h3>
                    <p className="body-sm text-zinc-400 font-light line-clamp-2">{project.excerpt}</p>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono border-t border-zinc-900 pt-4 mt-auto">
                    <div className="flex gap-3">
                      {project.github !== '#' && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors">
                          <Github size={14} /> CODE
                        </a>
                      )}
                      {project.demo !== '#' && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors">
                          <ExternalLink size={14} /> DEMO
                        </a>
                      )}
                    </div>
                    <span className="text-zinc-600">VIEW DETAILS →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
