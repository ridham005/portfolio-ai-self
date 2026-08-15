import React, { useState } from 'react';
import { Activity, ShieldCheck, Flame, Layers, Edit3, Plus, Trash2, Lock, Unlock, RotateCcw } from 'lucide-react';
import Telemetry3DElement from './Telemetry3DElement';
import { usePortfolio } from '../context/SkillsContext';
import { useAdmin } from '../context/AdminContext';

const ICON_MAP = { Activity, ShieldCheck, Flame, Layers };
const ICON_NAMES = ['Activity', 'ShieldCheck', 'Flame', 'Layers'];
const ACCENT_OPTIONS = ['text-sky-500', 'text-blue-500', 'text-red-500', 'text-emerald-500', 'text-amber-500', 'text-purple-500'];

function EditField({ value, onChange, multiline, className = '' }) {
  return multiline
    ? <textarea value={value} onChange={e => onChange(e.target.value)} rows={3}
        className={`w-full bg-zinc-900 border border-zinc-700 text-white text-xs font-mono px-2 py-1 outline-none focus:border-sky-500 resize-none ${className}`} />
    : <input value={value} onChange={e => onChange(e.target.value)}
        className={`w-full bg-zinc-900 border border-zinc-700 text-white text-xs font-mono px-2 py-1 outline-none focus:border-sky-500 ${className}`} />;
}

export default function TelemetrySpecs() {
  const { milestones, setMilestones, resetMilestones } = usePortfolio();
  const { isAdmin } = useAdmin();
  const [editMode, setEditMode] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);

  const update = (id, field, val) =>
    setMilestones(prev => prev.map(m => m.id === id ? { ...m, [field]: val } : m));

  const addMilestone = () => setMilestones(prev => [...prev, {
    id: `m${Date.now()}`, value: 'NEW STAT', label: 'LABEL HERE',
    detail: 'Describe what this milestone means.', accent: 'text-sky-500',
  }]);

  const deleteMilestone = id => setMilestones(prev => prev.filter(m => m.id !== id));

  const handleReset = () => { resetMilestones(); setConfirmReset(false); setEditMode(false); };

  return (
    <section id="telemetry" className="section-padding bg-black border-b border-zinc-900 relative z-10">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="m-stripe-vertical h-4"></div>
              <span className="label-uppercase text-zinc-400 text-xs">STATS & MILESTONES</span>
            </div>
            <h2 className="display-lg text-white">MILESTONES & SPECS.</h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            {/* Toolbar — admin only */}
            {isAdmin && (
            <div className="flex gap-2 flex-wrap">
              {editMode && (
                <>
                  <button onClick={addMilestone} className="flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-2 border border-emerald-700 text-emerald-400 hover:bg-emerald-950/40 transition-colors">
                    <Plus size={13} /> ADD STAT
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
              <button onClick={() => { setEditMode(e => !e); setConfirmReset(false); }}
                className={`flex items-center gap-1.5 text-xs font-mono font-bold px-4 py-2 border transition-colors ${editMode ? 'border-white bg-white text-black' : 'border-zinc-700 text-zinc-300 hover:border-white hover:text-white'}`}>
                {editMode ? <><Lock size={13} /> LOCK</> : <><Unlock size={13} /> EDIT</>}
              </button>
            </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Stat Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {milestones.map((spec, i) => {
              const Icon = ICON_MAP[ICON_NAMES[i % ICON_NAMES.length]];
              return (
                <div key={spec.id} className={`spec-cell group relative ${editMode ? 'border-zinc-600 ring-1 ring-zinc-700/50' : ''}`}>
                  {editMode && (
                    <button onClick={() => deleteMilestone(spec.id)}
                      className="absolute top-2 right-2 text-zinc-600 hover:text-red-400 transition-colors z-10">
                      <Trash2 size={14} />
                    </button>
                  )}
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-mono text-xs text-zinc-600 font-bold">/// {String(i + 1).padStart(2, '0')}</span>
                    {editMode ? (
                      <select value={spec.accent} onChange={e => update(spec.id, 'accent', e.target.value)}
                        className="text-[10px] bg-zinc-900 border border-zinc-700 text-zinc-300 px-1 py-0.5 outline-none">
                        {ACCENT_OPTIONS.map(a => <option key={a} value={a}>{a.replace('text-', '')}</option>)}
                      </select>
                    ) : (
                      <Icon className={`${spec.accent} transition-transform group-hover:scale-110`} size={24} />
                    )}
                  </div>

                  <div className="mb-4">
                    {editMode
                      ? <EditField value={spec.value} onChange={v => update(spec.id, 'value', v)} className="text-xl font-bold mb-1" />
                      : <div className="display-sm text-white font-mono group-hover:text-sky-400 transition-colors">{spec.value}</div>
                    }
                    {editMode
                      ? <EditField value={spec.label} onChange={v => update(spec.id, 'label', v)} className="mt-1 uppercase tracking-widest" />
                      : <div className="label-uppercase text-zinc-300 mt-1 text-xs tracking-widest">{spec.label}</div>
                    }
                  </div>

                  <div className="border-t border-zinc-900 pt-4 mt-2">
                    {editMode
                      ? <EditField value={spec.detail} onChange={v => update(spec.id, 'detail', v)} multiline />
                      : <p className="body-sm text-zinc-500 text-xs">{spec.detail}</p>
                    }
                  </div>
                </div>
              );
            })}
          </div>

          {/* 3D Element */}
          <div className="lg:col-span-4">
            <Telemetry3DElement />
          </div>
        </div>
      </div>
    </section>
  );
}
