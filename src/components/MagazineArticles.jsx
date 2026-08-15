import React, { useState } from 'react';
import { ArrowRight, Clock, Plus, Trash2, Lock, Unlock, RotateCcw } from 'lucide-react';
import { usePortfolio } from '../context/SkillsContext';
import { useAdmin } from '../context/AdminContext';

const CATEGORY_OPTIONS = ['STRATEGY', 'ML + DEVOPS', 'HACKATHON', 'BUILD LOG', 'TUTORIAL', 'OPINION', 'PROJECT'];

function Field({ value, onChange, multiline, placeholder = '', className = '' }) {
  return multiline
    ? <textarea value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} rows={3}
        className={`w-full bg-zinc-900 border border-zinc-700 text-white text-xs font-mono px-2 py-1.5 outline-none focus:border-sky-500 resize-none ${className}`} />
    : <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        className={`w-full bg-zinc-900 border border-zinc-700 text-white text-xs font-mono px-2 py-1 outline-none focus:border-sky-500 ${className}`} />;
}

export default function MagazineArticles() {
  const { articles, setArticles, resetArticles } = usePortfolio();
  const { isAdmin } = useAdmin();
  const [editMode, setEditMode] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);

  const update = (id, field, val) =>
    setArticles(prev => prev.map(a => a.id === id ? { ...a, [field]: val } : a));

  const addArticle = () => setArticles(prev => [...prev, {
    id: `a${Date.now()}`, title: 'NEW ARTICLE TITLE', category: 'BUILD LOG',
    readTime: 'JOURNAL', date: new Date().toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit' }).replace('/', '.'),
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Write your article summary here...',
  }]);

  const deleteArticle = id => setArticles(prev => prev.filter(a => a.id !== id));

  const handleReset = () => { resetArticles(); setConfirmReset(false); setEditMode(false); };

  return (
    <section id="magazine" className="section-padding bg-black border-b border-zinc-900">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="m-stripe-vertical h-4"></div>
              <span className="label-uppercase text-zinc-400 text-xs">EDITORIAL CONTENT</span>
            </div>
            <h2 className="display-lg text-white">DEV MAGAZINE.</h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            {isAdmin && (
            <div className="flex gap-2 flex-wrap">
              {editMode && (
                <>
                  <button onClick={addArticle} className="flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-2 border border-emerald-700 text-emerald-400 hover:bg-emerald-950/40 transition-colors">
                    <Plus size={13} /> ADD ARTICLE
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

        {/* Grid */}
        <div className={`grid gap-8 ${editMode ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-3'}`}>
          {articles.map((art) => (
            <div key={art.id} className={`magazine-article-card group flex flex-col justify-between relative ${editMode ? 'border border-zinc-600' : ''}`}>
              {editMode && (
                <button onClick={() => deleteArticle(art.id)}
                  className="absolute top-2 right-2 z-10 bg-black/80 text-zinc-500 hover:text-red-400 p-1.5 border border-zinc-700 transition-colors">
                  <Trash2 size={14} />
                </button>
              )}

              {/* Image */}
              {editMode ? (
                <div className="p-3 border-b border-zinc-800 bg-zinc-950">
                  <label className="text-[10px] font-mono text-zinc-500 mb-1 block">IMAGE URL</label>
                  <Field value={art.image} onChange={v => update(art.id, 'image', v)} placeholder="https://images.unsplash.com/..." />
                  {art.image && (
                    <img src={art.image} alt="" className="mt-2 w-full h-24 object-cover filter brightness-75" onError={e => e.target.style.display='none'} />
                  )}
                </div>
              ) : (
                <div className="relative aspect-[16/9] overflow-hidden bg-zinc-950">
                  <img src={art.image} alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-110" />
                  <div className="absolute top-4 left-4 bg-black/90 border border-zinc-800 px-3 py-1 text-[10px] font-mono font-bold text-sky-400">{art.category}</div>
                </div>
              )}

              <div className="p-5 flex-1 flex flex-col gap-3">
                {/* Category + Meta */}
                <div className="flex flex-wrap items-center gap-3">
                  {editMode ? (
                    <>
                      <select value={art.category} onChange={e => update(art.id, 'category', e.target.value)}
                        className="text-[10px] font-mono bg-zinc-900 border border-zinc-700 text-sky-400 px-2 py-1 outline-none">
                        {CATEGORY_OPTIONS.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                      <Field value={art.readTime} onChange={v => update(art.id, 'readTime', v)} placeholder="BUILD LOG" className="w-28" />
                      <Field value={art.date} onChange={v => update(art.id, 'date', v)} placeholder="2026.08" className="w-20" />
                    </>
                  ) : (
                    <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
                      <span className="flex items-center gap-1"><Clock size={12} />{art.readTime}</span>
                      <span>/// {art.date}</span>
                    </div>
                  )}
                </div>

                {/* Title */}
                {editMode
                  ? <Field value={art.title} onChange={v => update(art.id, 'title', v)} placeholder="ARTICLE TITLE" className="font-bold uppercase" />
                  : <h3 className="title-lg font-bold uppercase tracking-tight text-white group-hover:text-sky-400 transition-colors line-clamp-2">{art.title}</h3>
                }

                {/* Excerpt */}
                {editMode
                  ? <Field value={art.excerpt} onChange={v => update(art.id, 'excerpt', v)} placeholder="Summary…" multiline />
                  : <p className="body-sm text-zinc-400 font-light line-clamp-3 flex-1">{art.excerpt}</p>
                }
              </div>

              {!editMode && (
                <div className="px-5 pb-5 pt-0 border-t border-zinc-900/50">
                  <button className="text-link text-xs group/btn text-white hover:text-sky-400 pt-4">
                    <span>READ FULL ARTICLE</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
