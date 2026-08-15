import React, { useState } from 'react';
import { Cpu, Database, Cloud, Terminal, Zap, Plus, Trash2, Edit3, Check, X, RotateCcw, Lock, Unlock } from 'lucide-react';
import { useSkills, DEFAULT_SKILLS } from '../context/SkillsContext';
import { useAdmin } from '../context/AdminContext';

const BADGE_COLORS = {
  ACTIVE:   'bg-sky-900/50 text-sky-400 border-sky-700',
  LEARNING: 'bg-blue-900/50 text-blue-400 border-blue-700',
  PRIORITY: 'bg-red-900/50 text-red-400 border-red-700',
};

const BADGE_OPTIONS = ['ACTIVE', 'LEARNING', 'PRIORITY'];

function getIcon(name) {
  switch (name) {
    case 'Terminal': return Terminal;
    case 'Zap': return Zap;
    case 'Cloud': return Cloud;
    case 'Database': return Database;
    default: return Cpu;
  }
}

export default function SkillsPowertrain() {
  const { categories, setCategories, resetSkills } = useSkills();
  const { isAdmin } = useAdmin();

  const [editMode, setEditMode] = useState(false);
  const [newSkillInputs, setNewSkillInputs] = useState({});
  const [editingTitles, setEditingTitles] = useState({});
  const [confirmReset, setConfirmReset] = useState(false);

  /* ── Skill-level slider ── */
  const updateLevel = (catId, skillIdx, value) => {
    setCategories(prev => prev.map(cat =>
      cat.id !== catId ? cat : {
        ...cat,
        skills: cat.skills.map((s, i) => i === skillIdx ? { ...s, level: Number(value) } : s),
      }
    ));
  };

  /* ── Delete skill ── */
  const deleteSkill = (catId, skillIdx) => {
    setCategories(prev => prev.map(cat =>
      cat.id !== catId ? cat : {
        ...cat,
        skills: cat.skills.filter((_, i) => i !== skillIdx),
      }
    ));
  };

  /* ── Add skill ── */
  const addSkill = (catId) => {
    const name = (newSkillInputs[catId] || '').trim();
    if (!name) return;
    setCategories(prev => prev.map(cat =>
      cat.id !== catId ? cat : {
        ...cat,
        skills: [...cat.skills, { name, level: 0 }],
      }
    ));
    setNewSkillInputs(prev => ({ ...prev, [catId]: '' }));
  };

  /* ── Badge change ── */
  const updateBadge = (catId, badge) => {
    setCategories(prev => prev.map(cat =>
      cat.id !== catId ? cat : { ...cat, badge }
    ));
  };

  /* ── Category title edit ── */
  const commitTitle = (catId) => {
    const title = (editingTitles[catId] || '').trim();
    if (title) {
      setCategories(prev => prev.map(cat =>
        cat.id !== catId ? cat : { ...cat, title: title.toUpperCase() }
      ));
    }
    setEditingTitles(prev => { const n = { ...prev }; delete n[catId]; return n; });
  };

  /* ── Reset ── */
  const handleReset = () => {
    resetSkills();
    setConfirmReset(false);
    setEditMode(false);
  };

  /* ── Add new category ── */
  const addCategory = () => {
    const id = `cat_${Date.now()}`;
    setCategories(prev => [...prev, {
      id,
      title: 'NEW CATEGORY',
      icon: 'Cpu',
      accent: 'border-zinc-500 text-zinc-400',
      badge: 'LEARNING',
      skills: [],
    }]);
  };

  /* ── Delete category ── */
  const deleteCategory = (catId) => {
    setCategories(prev => prev.filter(c => c.id !== catId));
  };

  return (
    <section id="powertrain" className="section-padding bg-black border-b border-zinc-900">
      <div className="container-custom">

        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="m-stripe-vertical h-4"></div>
              <span className="label-uppercase text-zinc-400 text-xs">SKILLS MATRIX</span>
            </div>
            <h2 className="display-lg text-white">TECH STACK &amp; SKILLS.</h2>
          </div>
        </div>

        {/* ── Edit Toolbar — only visible to admin ── */}
        {isAdmin && (
        <div className="flex flex-wrap items-center gap-3 mb-8 p-4 border border-zinc-800 bg-zinc-950">
          <div className="flex items-center gap-2 flex-1">
            <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></div>
            <span className="text-xs font-mono text-zinc-400">
              {editMode
                ? 'EDIT MODE — adjust sliders, add or remove skills.'
                : 'LOCKED — click Edit to customise your skills.'}
            </span>
          </div>

          <div className="flex gap-2 flex-wrap">
            {editMode && (
              <>
                <button
                  onClick={addCategory}
                  className="flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-2 border border-emerald-700 text-emerald-400 hover:bg-emerald-950/40 transition-colors"
                >
                  <Plus size={13} /> ADD CATEGORY
                </button>

                {!confirmReset ? (
                  <button
                    onClick={() => setConfirmReset(true)}
                    className="flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-2 border border-zinc-700 text-zinc-400 hover:border-red-700 hover:text-red-400 transition-colors"
                  >
                    <RotateCcw size={13} /> RESET ALL
                  </button>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-red-400">Confirm reset?</span>
                    <button onClick={handleReset} className="text-xs font-mono px-2 py-1 bg-red-900/50 border border-red-700 text-red-300 hover:bg-red-900">YES</button>
                    <button onClick={() => setConfirmReset(false)} className="text-xs font-mono px-2 py-1 border border-zinc-700 text-zinc-400">NO</button>
                  </div>
                )}
              </>
            )}

            <button
              onClick={() => { setEditMode(e => !e); setConfirmReset(false); }}
              className={`flex items-center gap-1.5 text-xs font-mono font-bold px-4 py-2 border transition-colors ${
                editMode
                  ? 'border-white bg-white text-black'
                  : 'border-zinc-700 text-zinc-300 hover:border-white hover:text-white'
              }`}
            >
              {editMode ? <><Lock size={13} /> LOCK SKILLS</> : <><Unlock size={13} /> EDIT SKILLS</>}
            </button>
          </div>
        </div>
        )}

        {/* ── Categories Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat) => {
            const Icon = getIcon(cat.icon);
            const isEditingTitle = editingTitles[cat.id] !== undefined;

            return (
              <div key={cat.id} className={`bg-zinc-950 border p-6 md:p-8 rounded-none transition-all ${editMode ? 'border-zinc-600' : 'border-zinc-800'}`}>

                {/* ── Category Header ── */}
                <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-6 gap-3 flex-wrap">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <Icon size={20} className={cat.accent.split(' ')[1]} />

                    {editMode && isEditingTitle ? (
                      <div className="flex items-center gap-2 flex-1">
                        <input
                          autoFocus
                          value={editingTitles[cat.id]}
                          onChange={e => setEditingTitles(prev => ({ ...prev, [cat.id]: e.target.value }))}
                          onKeyDown={e => {
                            if (e.key === 'Enter') commitTitle(cat.id);
                            if (e.key === 'Escape') setEditingTitles(prev => { const n = { ...prev }; delete n[cat.id]; return n; });
                          }}
                          className="flex-1 bg-zinc-900 border border-zinc-600 text-white text-xs font-mono font-bold px-2 py-1 uppercase outline-none focus:border-sky-500"
                          placeholder="CATEGORY TITLE"
                        />
                        <button onClick={() => commitTitle(cat.id)} className="text-emerald-400 hover:text-emerald-300"><Check size={14} /></button>
                        <button onClick={() => setEditingTitles(prev => { const n = { ...prev }; delete n[cat.id]; return n; })} className="text-zinc-500 hover:text-zinc-300"><X size={14} /></button>
                      </div>
                    ) : (
                      <h3
                        className={`text-xs font-bold uppercase tracking-wider text-white truncate ${editMode ? 'cursor-pointer hover:text-sky-400 transition-colors' : ''}`}
                        onClick={() => editMode && setEditingTitles(prev => ({ ...prev, [cat.id]: cat.title }))}
                        title={editMode ? 'Click to rename' : undefined}
                      >
                        {cat.title}
                        {editMode && <Edit3 size={11} className="inline ml-1.5 text-zinc-500" />}
                      </h3>
                    )}
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {editMode ? (
                      <>
                        <select
                          value={cat.badge}
                          onChange={e => updateBadge(cat.id, e.target.value)}
                          className="text-[10px] font-mono font-bold bg-zinc-900 border border-zinc-700 text-zinc-300 px-2 py-1 outline-none"
                        >
                          {BADGE_OPTIONS.map(b => <option key={b} value={b}>{b}</option>)}
                        </select>
                        <button
                          onClick={() => deleteCategory(cat.id)}
                          className="text-zinc-600 hover:text-red-400 transition-colors p-1"
                          title="Delete category"
                        >
                          <Trash2 size={14} />
                        </button>
                      </>
                    ) : (
                      <span className={`text-[10px] font-mono font-bold px-2.5 py-1 border ${BADGE_COLORS[cat.badge] || 'bg-zinc-900 text-zinc-400 border-zinc-800'}`}>
                        {cat.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* ── Skill Items ── */}
                <div className="space-y-5">
                  {cat.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between items-center text-xs font-mono mb-2 gap-2">
                        <span className="text-zinc-200 font-bold truncate">{skill.name}</span>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-zinc-400 w-8 text-right">{skill.level}%</span>
                          {editMode && (
                            <button
                              onClick={() => deleteSkill(cat.id, skillIdx)}
                              className="text-zinc-600 hover:text-red-400 transition-colors"
                            >
                              <Trash2 size={12} />
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Progress bar */}
                      <div className="h-1.5 w-full bg-zinc-900 overflow-hidden relative mb-1">
                        <div
                          className="h-full transition-all duration-300 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            background: skill.level === 0 ? 'transparent' : 'linear-gradient(90deg, #0066b1, #1c69d4, #e22718)',
                          }}
                        />
                        {skill.level === 0 && (
                          <div className="absolute inset-0 flex items-center">
                            <div className="text-[9px] font-mono text-zinc-600 pl-1">NOT STARTED</div>
                          </div>
                        )}
                      </div>

                      {editMode && (
                        <input
                          type="range"
                          min={0} max={100} step={1}
                          value={skill.level}
                          onChange={e => updateLevel(cat.id, skillIdx, e.target.value)}
                          className="w-full h-1 accent-sky-500 cursor-pointer mt-1"
                        />
                      )}
                    </div>
                  ))}

                  {/* ── Add Skill Row (edit mode) ── */}
                  {editMode && (
                    <div className="flex gap-2 pt-3 border-t border-zinc-800/60">
                      <input
                        type="text"
                        value={newSkillInputs[cat.id] || ''}
                        onChange={e => setNewSkillInputs(prev => ({ ...prev, [cat.id]: e.target.value }))}
                        onKeyDown={e => e.key === 'Enter' && addSkill(cat.id)}
                        placeholder="Add a skill..."
                        className="flex-1 bg-zinc-900 border border-zinc-700 text-white text-xs font-mono px-3 py-2 outline-none focus:border-sky-500 placeholder:text-zinc-600"
                      />
                      <button
                        onClick={() => addSkill(cat.id)}
                        disabled={!(newSkillInputs[cat.id] || '').trim()}
                        className="flex items-center gap-1 text-xs font-mono font-bold px-3 py-2 bg-sky-900/40 border border-sky-700 text-sky-400 hover:bg-sky-900/70 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      >
                        <Plus size={13} /> ADD
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Currently Studying Pills ── */}
        {!editMode && (
          <div className="mt-8 pt-6 border-t border-zinc-900">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono text-zinc-500 tracking-widest uppercase">Currently Studying</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.flatMap(cat => cat.skills).map(skill => (
                <span
                  key={skill.name}
                  className="text-[11px] font-mono text-zinc-300 bg-zinc-900 border border-zinc-800 px-3 py-1.5"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
