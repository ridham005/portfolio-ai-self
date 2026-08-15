import React, { useState } from 'react';
import { Sliders, Cpu, Zap, Copy, Check, Plus, Trash2, Lock, Unlock, RotateCcw } from 'lucide-react';
import { usePortfolio } from '../context/SkillsContext';
import { useAdmin } from '../context/AdminContext';

function Field({ value, onChange, placeholder = '', className = '' }) {
  return <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
    className={`bg-zinc-900 border border-zinc-700 text-white text-xs font-mono px-2 py-1 outline-none focus:border-sky-500 w-full ${className}`} />;
}

export default function EngineeringConfigurator({ onOpenContact }) {
  const { configurator, setConfigurator, resetConfigurator } = usePortfolio();
  const { isAdmin } = useAdmin();
  const [selectedPlatformId, setSelectedPlatformId] = useState(configurator.platforms[0]?.id || '');
  const [selectedEngineId, setSelectedEngineId] = useState(configurator.engines[0]?.id || '');
  const [selectedPackageIds, setSelectedPackageIds] = useState(
    configurator.packages.slice(0, 2).map(p => p.id)
  );
  const [copied, setCopied] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);

  const { platforms, engines, packages: packageOptions } = configurator;

  const togglePackage = id => setSelectedPackageIds(prev =>
    prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
  );

  // Helpers to update configurator sub-arrays
  const updateItem = (listKey, id, field, val) =>
    setConfigurator(prev => ({
      ...prev,
      [listKey]: prev[listKey].map(item => item.id === id ? { ...item, [field]: field === 'pts' ? Number(val) : val } : item),
    }));

  const deleteItem = (listKey, id) =>
    setConfigurator(prev => ({ ...prev, [listKey]: prev[listKey].filter(i => i.id !== id) }));

  const addPlatform = () => setConfigurator(prev => ({
    ...prev, platforms: [...prev.platforms, { id: `plt_${Date.now()}`, name: 'NEW PLATFORM', desc: 'Description here', pts: 150 }],
  }));
  const addEngine = () => setConfigurator(prev => ({
    ...prev, engines: [...prev.engines, { id: `eng_${Date.now()}`, name: 'NEW FRAMEWORK', pts: 150 }],
  }));
  const addPackage = () => setConfigurator(prev => ({
    ...prev, packages: [...prev.packages, { id: `pkg_${Date.now()}`, name: 'NEW ADD-ON', pts: 30, desc: 'What this adds' }],
  }));

  const handleReset = () => { resetConfigurator(); setConfirmReset(false); setEditMode(false); };

  const selectedPlatform = platforms.find(p => p.id === selectedPlatformId) || platforms[0];
  const selectedEngine = engines.find(e => e.id === selectedEngineId) || engines[0];
  const packagesScore = selectedPackageIds.reduce((sum, id) => {
    const pkg = packageOptions.find(p => p.id === id);
    return sum + (pkg ? pkg.pts : 0);
  }, 0);
  const totalScore = (selectedPlatform?.pts || 0) + (selectedEngine?.pts || 0) + packagesScore;
  const compatibilityScore = (98.5 + (selectedPackageIds.length * 0.3)).toFixed(1);

  const specText = `RIDHAM /// STACK SPECIFICATION:
------------------------------------------
TARGET: ${selectedPlatform?.name}
FRAMEWORK: ${selectedEngine?.name}
ADD-ONS: ${selectedPackageIds.map(id => packageOptions.find(p => p.id === id)?.name).filter(Boolean).join(', ')}
COMPLEXITY SCORE: ${totalScore} pts
COMPATIBILITY: ${compatibilityScore}%
ESTIMATED BUILD: 2-3 WEEKS`;

  const handleCopy = () => {
    navigator.clipboard.writeText(specText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="configurator" className="section-padding bg-zinc-950 border-b border-zinc-900">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="m-stripe-vertical h-4"></div>
              <span className="label-uppercase text-sky-400 text-xs">STACK BUILDER</span>
            </div>
            <h2 className="display-lg text-white">STACK CONFIGURATOR.</h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            {isAdmin && (
            <div className="flex gap-2 flex-wrap">
              {editMode && (
                <>
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
                {editMode ? <><Lock size={13} /> LOCK OPTIONS</> : <><Unlock size={13} /> EDIT OPTIONS</>}
              </button>
            </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-10">

            {/* Step 1: Platform */}
            <div className="bg-black border border-zinc-800 p-6">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-900">
                <span className="text-xs font-mono font-bold text-zinc-500 uppercase">STEP 01 /// TARGET PLATFORM</span>
                <div className="flex items-center gap-2">
                  {editMode && <button onClick={addPlatform} className="flex items-center gap-1 text-xs font-mono text-emerald-400 border border-emerald-700 px-2 py-1 hover:bg-emerald-950/40"><Plus size={11} />ADD</button>}
                  <Sliders size={16} className="text-sky-400" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {platforms.map(p => (
                  editMode ? (
                    <div key={p.id} className="border border-zinc-700 p-3 space-y-2 relative">
                      <button onClick={() => deleteItem('platforms', p.id)} className="absolute top-2 right-2 text-zinc-600 hover:text-red-400"><Trash2 size={12} /></button>
                      <Field value={p.name} onChange={v => updateItem('platforms', p.id, 'name', v)} placeholder="Platform name" className="font-bold" />
                      <Field value={p.desc} onChange={v => updateItem('platforms', p.id, 'desc', v)} placeholder="Description" />
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-zinc-500">PTS:</span>
                        <input type="number" value={p.pts} onChange={e => updateItem('platforms', p.id, 'pts', e.target.value)}
                          className="w-16 bg-zinc-900 border border-zinc-700 text-sky-400 text-xs font-mono px-2 py-1 outline-none" />
                      </div>
                    </div>
                  ) : (
                    <button key={p.id} onClick={() => setSelectedPlatformId(p.id)}
                      className={`w-full p-5 text-left rounded-none transition-all flex flex-col justify-between border cursor-pointer ${
                        selectedPlatformId === p.id ? 'border-white bg-zinc-900 text-white shadow-lg' : 'border-zinc-800 bg-black text-zinc-400 hover:border-zinc-600'
                      }`}>
                      <div>
                        <div className="text-xs font-bold font-mono text-sky-400 mb-1">{p.pts} PTS</div>
                        <div className="text-sm font-bold text-white mb-2">{p.name}</div>
                        <div className="text-xs font-light text-zinc-400">{p.desc}</div>
                      </div>
                      {selectedPlatformId === p.id && <div className="mt-4 pt-3 border-t border-zinc-800 text-[10px] font-bold tracking-widest text-sky-400">SELECTED ///</div>}
                    </button>
                  )
                ))}
              </div>
            </div>

            {/* Step 2: Framework */}
            <div className="bg-black border border-zinc-800 p-6">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-900">
                <span className="text-xs font-mono font-bold text-zinc-500 uppercase">STEP 02 /// CORE FRAMEWORK</span>
                <div className="flex items-center gap-2">
                  {editMode && <button onClick={addEngine} className="flex items-center gap-1 text-xs font-mono text-emerald-400 border border-emerald-700 px-2 py-1 hover:bg-emerald-950/40"><Plus size={11} />ADD</button>}
                  <Cpu size={16} className="text-blue-400" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {engines.map(e => (
                  editMode ? (
                    <div key={e.id} className="border border-zinc-700 p-3 space-y-2 relative">
                      <button onClick={() => deleteItem('engines', e.id)} className="absolute top-2 right-2 text-zinc-600 hover:text-red-400"><Trash2 size={12} /></button>
                      <Field value={e.name} onChange={v => updateItem('engines', e.id, 'name', v)} placeholder="Framework name" className="font-bold" />
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-zinc-500">PTS:</span>
                        <input type="number" value={e.pts} onChange={ev => updateItem('engines', e.id, 'pts', ev.target.value)}
                          className="w-16 bg-zinc-900 border border-zinc-700 text-red-400 text-xs font-mono px-2 py-1 outline-none" />
                      </div>
                    </div>
                  ) : (
                    <button key={e.id} onClick={() => setSelectedEngineId(e.id)}
                      className={`p-4 text-left border rounded-none transition-all flex items-center justify-between ${
                        selectedEngineId === e.id ? 'border-white bg-zinc-900 text-white' : 'border-zinc-800 bg-black text-zinc-400 hover:border-zinc-700'
                      }`}>
                      <div>
                        <div className="text-xs font-bold font-mono text-red-400">{e.pts} pts</div>
                        <div className="text-sm font-bold text-white mt-1">{e.name}</div>
                      </div>
                      {selectedEngineId === e.id && <div className="w-2 h-2 bg-red-500"></div>}
                    </button>
                  )
                ))}
              </div>
            </div>

            {/* Step 3: Add-ons */}
            <div className="bg-black border border-zinc-800 p-6">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-900">
                <span className="text-xs font-mono font-bold text-zinc-500 uppercase">STEP 03 /// ADD-ONS</span>
                <div className="flex items-center gap-2">
                  {editMode && <button onClick={addPackage} className="flex items-center gap-1 text-xs font-mono text-emerald-400 border border-emerald-700 px-2 py-1 hover:bg-emerald-950/40"><Plus size={11} />ADD</button>}
                  <Zap size={16} className="text-red-400" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {packageOptions.map(pkg => {
                  const active = selectedPackageIds.includes(pkg.id);
                  return editMode ? (
                    <div key={pkg.id} className="border border-zinc-700 p-3 space-y-2 relative">
                      <button onClick={() => deleteItem('packages', pkg.id)} className="absolute top-2 right-2 text-zinc-600 hover:text-red-400"><Trash2 size={12} /></button>
                      <Field value={pkg.name} onChange={v => updateItem('packages', pkg.id, 'name', v)} placeholder="Add-on name" className="font-bold" />
                      <Field value={pkg.desc} onChange={v => updateItem('packages', pkg.id, 'desc', v)} placeholder="Description" />
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-zinc-500">PTS:</span>
                        <input type="number" value={pkg.pts} onChange={e => updateItem('packages', pkg.id, 'pts', e.target.value)}
                          className="w-16 bg-zinc-900 border border-zinc-700 text-sky-400 text-xs font-mono px-2 py-1 outline-none" />
                      </div>
                    </div>
                  ) : (
                    <button key={pkg.id} onClick={() => togglePackage(pkg.id)}
                      className={`p-4 text-left border rounded-none transition-all ${active ? 'border-sky-500 bg-zinc-900 text-white' : 'border-zinc-800 bg-black text-zinc-400 hover:border-zinc-700'}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono font-bold text-sky-400">+{pkg.pts} pts</span>
                        <span className={`text-xs font-bold border px-2 py-0.5 ${active ? 'border-sky-500 text-sky-400 bg-sky-950/40' : 'border-zinc-800 text-zinc-600'}`}>
                          {active ? 'ACTIVE' : 'ADD'}
                        </span>
                      </div>
                      <div className="text-sm font-bold text-white mb-1">{pkg.name}</div>
                      <div className="text-xs text-zinc-500 font-light">{pkg.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Live Summary */}
          <div className="lg:col-span-4">
            <div className="bg-black border border-zinc-700 p-6 sticky top-24">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-6">
                <span className="text-xs font-mono font-bold text-white">LIVE STACK SUMMARY</span>
                <div className="flex gap-1"><div className="w-2 h-2 bg-sky-500"></div><div className="w-2 h-2 bg-blue-500"></div><div className="w-2 h-2 bg-red-500"></div></div>
              </div>
              <div className="bg-zinc-950 border border-zinc-800 p-6 text-center mb-6">
                <div className="text-xs font-mono font-bold text-zinc-500 mb-1">COMPLEXITY SCORE</div>
                <div className="display-xl font-mono text-white tracking-tighter">{totalScore} <span className="text-lg text-red-500 font-bold">pts</span></div>
                <div className="text-[11px] font-mono text-zinc-400 mt-2">FULL-STACK SCOPE INDEX</div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between p-3 bg-zinc-950 border border-zinc-900 text-xs">
                  <span className="text-zinc-400 font-mono">STACK COMPATIBILITY</span>
                  <span className="font-bold text-emerald-400 font-mono">{compatibilityScore}%</span>
                </div>
                <div className="flex justify-between p-3 bg-zinc-950 border border-zinc-900 text-xs">
                  <span className="text-zinc-400 font-mono">ESTIMATED BUILD TIME</span>
                  <span className="font-bold text-sky-400 font-mono">2-3 WEEKS</span>
                </div>
              </div>
              <div className="space-y-3">
                <button onClick={onOpenContact} className="button-primary w-full justify-center"><span>GET IN TOUCH ///</span></button>
                <button onClick={handleCopy} className="button-primary-outline w-full justify-center text-xs">
                  {copied ? <><Check size={14} className="text-emerald-400" /><span>COPIED!</span></> : <><Copy size={14} /><span>COPY SPEC</span></>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
