import React, { useState } from 'react';
import { MapPin, CheckCircle2, Plus, Trash2, Lock, Unlock, RotateCcw, Edit3 } from 'lucide-react';
import { usePortfolio } from '../context/SkillsContext';
import { useAdmin } from '../context/AdminContext';

const TYPE_OPTIONS = ['ACTIVE', 'PRIORITY', 'PROJECT', 'COMPLETED', 'INTERNSHIP'];
const ACCENT_OPTIONS = [
  { label: 'Sky', accent: 'text-sky-400', marker: 'border-sky-400' },
  { label: 'Red', accent: 'text-red-400', marker: 'border-red-500' },
  { label: 'Emerald', accent: 'text-emerald-400', marker: 'border-emerald-500' },
  { label: 'Blue', accent: 'text-blue-400', marker: 'border-blue-500' },
  { label: 'Amber', accent: 'text-amber-400', marker: 'border-amber-500' },
  { label: 'Purple', accent: 'text-purple-400', marker: 'border-purple-500' },
];

function InlineInput({ value, onChange, className = '', placeholder = '' }) {
  return <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
    className={`bg-zinc-900 border border-zinc-700 text-white text-xs font-mono px-2 py-1 outline-none focus:border-sky-500 w-full ${className}`} />;
}

export default function ExperienceChronicles() {
  const { experience, setExperience, resetExperience } = usePortfolio();
  const { isAdmin } = useAdmin();
  const [editMode, setEditMode] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);

  const updateEntry = (id, field, val) =>
    setExperience(prev => prev.map(e => e.id === id ? { ...e, [field]: val } : e));

  const updateHighlight = (id, hIdx, val) =>
    setExperience(prev => prev.map(e => e.id === id
      ? { ...e, highlights: e.highlights.map((h, i) => i === hIdx ? val : h) }
      : e));

  const addHighlight = id =>
    setExperience(prev => prev.map(e => e.id === id
      ? { ...e, highlights: [...e.highlights, 'New achievement — edit this.'] }
      : e));

  const deleteHighlight = (id, hIdx) =>
    setExperience(prev => prev.map(e => e.id === id
      ? { ...e, highlights: e.highlights.filter((_, i) => i !== hIdx) }
      : e));

  const addEntry = () => setExperience(prev => [...prev, {
    id: `ex${Date.now()}`, year: '2025 - PRESENT', role: 'NEW EXPERIENCE',
    org: 'ORGANISATION NAME', location: 'INDIA', type: 'ACTIVE',
    accentColor: 'text-sky-400', markerColor: 'border-sky-400',
    highlights: ['Add your first achievement here.'],
  }]);

  const deleteEntry = id => setExperience(prev => prev.filter(e => e.id !== id));

  const handleReset = () => { resetExperience(); setConfirmReset(false); setEditMode(false); };

  return (
    <section id="chronicles" className="section-padding bg-zinc-950 border-b border-zinc-900">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="m-stripe-vertical h-4"></div>
              <span className="label-uppercase text-zinc-400 text-xs">DEV CHRONICLES</span>
            </div>
            <h2 className="display-lg text-white">LEARNING TRACK &amp; EXP.</h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            {/* Toolbar — admin only */}
            {isAdmin && (
            <div className="flex gap-2 flex-wrap">
              {editMode && (
                <>
                  <button onClick={addEntry} className="flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-2 border border-emerald-700 text-emerald-400 hover:bg-emerald-950/40 transition-colors">
                    <Plus size={13} /> ADD ENTRY
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

        {/* Timeline */}
        <div className="relative border-l border-zinc-800 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          {experience.map((item, idx) => (
            <div key={item.id} className="relative group">
              {/* Marker */}
              <div className={`absolute -left-[41px] md:-left-[57px] top-1 w-6 h-6 bg-black border-2 ${item.markerColor} flex items-center justify-center`}>
                <div className={`w-2 h-2 bg-current ${item.accentColor}`}></div>
              </div>

              {/* Card */}
              <div className={`bg-black border p-6 md:p-8 transition-colors ${editMode ? 'border-zinc-600' : 'border-zinc-800 hover:border-zinc-700'}`}>
                {/* Card Top Meta */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-zinc-900">
                  {editMode ? (
                    <div className="flex flex-wrap gap-2 flex-1">
                      <InlineInput value={item.year} onChange={v => updateEntry(item.id, 'year', v)} className="w-36" placeholder="2025 - PRESENT" />
                      <select value={item.type} onChange={e => updateEntry(item.id, 'type', e.target.value)}
                        className="text-[10px] font-mono bg-zinc-900 border border-zinc-700 text-zinc-300 px-2 py-1 outline-none">
                        {TYPE_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                      <select value={item.accentColor} onChange={e => {
                        const found = ACCENT_OPTIONS.find(a => a.accent === e.target.value);
                        updateEntry(item.id, 'accentColor', e.target.value);
                        if (found) updateEntry(item.id, 'markerColor', found.marker);
                      }}
                        className="text-[10px] font-mono bg-zinc-900 border border-zinc-700 text-zinc-300 px-2 py-1 outline-none">
                        {ACCENT_OPTIONS.map(a => <option key={a.accent} value={a.accent}>{a.label}</option>)}
                      </select>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-mono font-bold bg-zinc-900 ${item.accentColor} px-3 py-1 border border-zinc-800`}>{item.year}</span>
                      <span className="text-xs font-mono font-bold text-zinc-500">TYPE /// {item.type}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    {editMode
                      ? <InlineInput value={item.location} onChange={v => updateEntry(item.id, 'location', v)} className="w-28" placeholder="INDIA" />
                      : <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono"><MapPin size={14} className="text-red-500" /><span>{item.location}</span></div>
                    }
                    {editMode && (
                      <button onClick={() => deleteEntry(item.id)} className="text-zinc-600 hover:text-red-400 transition-colors ml-2"><Trash2 size={15} /></button>
                    )}
                  </div>
                </div>

                {/* Role & Org */}
                {editMode ? (
                  <div className="space-y-2 mb-4">
                    <InlineInput value={item.role} onChange={v => updateEntry(item.id, 'role', v)} className="font-bold uppercase text-sm" placeholder="ROLE / TITLE" />
                    <InlineInput value={item.org} onChange={v => updateEntry(item.id, 'org', v)} className="text-zinc-400 uppercase" placeholder="ORGANISATION" />
                  </div>
                ) : (
                  <>
                    <h3 className="title-lg font-bold uppercase text-white mb-1">{item.role}</h3>
                    <div className="text-xs font-mono text-zinc-400 mb-6 font-bold">ORG /// {item.org}</div>
                  </>
                )}

                {/* Highlights */}
                <ul className="space-y-3">
                  {item.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className={`${item.accentColor} shrink-0 mt-0.5`} />
                      {editMode ? (
                        <div className="flex gap-2 flex-1">
                          <textarea value={point} onChange={e => updateHighlight(item.id, pIdx, e.target.value)}
                            rows={2}
                            className="flex-1 bg-zinc-900 border border-zinc-700 text-white text-xs font-mono px-2 py-1 outline-none focus:border-sky-500 resize-none" />
                          <button onClick={() => deleteHighlight(item.id, pIdx)} className="text-zinc-600 hover:text-red-400 transition-colors shrink-0"><Trash2 size={12} /></button>
                        </div>
                      ) : (
                        <span className="body-sm text-zinc-300 font-light">{point}</span>
                      )}
                    </li>
                  ))}
                </ul>

                {editMode && (
                  <button onClick={() => addHighlight(item.id)}
                    className="mt-4 flex items-center gap-1.5 text-xs font-mono text-emerald-400 border border-emerald-800 px-3 py-1.5 hover:bg-emerald-950/40 transition-colors">
                    <Plus size={12} /> ADD BULLET
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
