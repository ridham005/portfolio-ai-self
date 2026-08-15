import React, { useState, useEffect } from 'react';
import { Lock, Unlock, Eye, EyeOff, ShieldCheck, Shield, X, KeyRound, RefreshCw, Download, Copy, Check } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';
import { usePortfolio } from '../context/SkillsContext';

export default function AdminModal() {
  const { isAdmin, isPasswordSet, modalOpen, setModalOpen, error, setError,
          login, setupPassword, changePassword, logout } = useAdmin();

  const portfolio = usePortfolio();

  const [view, setView] = useState('login'); // 'login' | 'setup' | 'change' | 'panel'
  const [showPw, setShowPw] = useState(false);
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');
  const [pw3, setPw3] = useState('');
  const [success, setSuccess] = useState('');
  const [copied, setCopied] = useState(false);

  // ALL hooks must be above any conditional return
  useEffect(() => {
    if (modalOpen) {
      setSuccess('');
      setError('');
      setPw('');
      setPw2('');
      setPw3('');
      setShowPw(false);
      setView(isAdmin ? 'panel' : (isPasswordSet ? 'login' : 'setup'));
    }
  }, [modalOpen]); // eslint-disable-line

  // Early return AFTER all hooks
  if (!modalOpen) return null;

  const close = () => {
    setModalOpen(false);
    setPw(''); setPw2(''); setPw3('');
    setError(''); setSuccess('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const ok = await login(pw);
    setPw('');
    if (ok) setView('panel');
  };

  const handleSetup = async (e) => {
    e.preventDefault();
    if (pw !== pw2) { setError("Passwords don't match."); return; }
    const ok = await setupPassword(pw);
    if (ok) { setPw(''); setPw2(''); setView('panel'); }
  };

  const handleChange = async (e) => {
    e.preventDefault();
    if (pw2 !== pw3) { setError("New passwords don't match."); return; }
    const ok = await changePassword(pw, pw2);
    if (ok) { setPw(''); setPw2(''); setPw3(''); setSuccess('Password changed successfully!'); }
  };

  const handleLogout = () => { logout(); close(); };

  const exportData = () => {
    const data = {
      skills: portfolio.categories,
      milestones: portfolio.milestones,
      experience: portfolio.experience,
      articles: portfolio.articles,
      projects: portfolio.projects,
      configurator: portfolio.configurator,
    };
    const json = JSON.stringify(data, null, 2);
    navigator.clipboard.writeText(json);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <div
        className="relative w-full max-w-sm shadow-2xl"
        style={{ backgroundColor: '#09090b', border: '1px solid #3f3f46' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ borderBottom: '1px solid #27272a', padding: '16px 24px' }}
          className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-1 h-5 bg-gradient-to-b from-sky-500 to-red-600" />
            <div className="flex items-center gap-2">
              {isAdmin
                ? <ShieldCheck size={18} style={{ color: '#34d399' }} />
                : <Shield size={18} style={{ color: '#38bdf8' }} />
              }
              <span style={{ color: '#fff', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, letterSpacing: '0.12em' }}>
                {view === 'setup' ? 'SETUP ADMIN ACCESS' : view === 'change' ? 'CHANGE PASSWORD' : isAdmin ? 'ADMIN PANEL' : 'ADMIN LOGIN'}
              </span>
            </div>
          </div>
          <button onClick={close} style={{ color: '#71717a', padding: '4px' }}
            className="hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '24px' }}>

          {/* ── PANEL (logged in) ── */}
          {view === 'panel' && (
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4"
                style={{ background: 'rgba(6,78,59,0.2)', border: '1px solid rgba(52,211,153,0.3)' }}>
                <ShieldCheck size={20} style={{ color: '#34d399', flexShrink: 0 }} />
                <div>
                  <div style={{ color: '#fff', fontSize: '13px', fontWeight: 700, fontFamily: 'monospace' }}>ADMIN ACCESS ACTIVE</div>
                  <div style={{ color: '#a1a1aa', fontSize: '11px', marginTop: '4px', lineHeight: 1.5 }}>
                    All EDIT buttons are now visible. Edits save to this browser.
                  </div>
                </div>
              </div>
              <div style={{ border: '1px solid #27272a', padding: '12px', fontSize: '11px', fontFamily: 'monospace', color: '#71717a', lineHeight: 1.7 }}>
                <strong style={{ color: '#d4d4d8' }}>DEVICE NOTICE:</strong> Edits are saved in your current browser. To sync across all devices, click <strong style={{ color: '#38bdf8' }}>COPY SITE DATA JSON</strong> below and update the code defaults.
              </div>
              <button onClick={exportData}
                style={{ display: 'flex', itemsAlign: 'center', justifyContent: 'center', gap: '8px', width: '100%', padding: '12px', border: '1px solid #0284c7', color: '#38bdf8', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, background: 'rgba(14,165,233,0.1)', cursor: 'pointer', transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(14,165,233,0.2)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(14,165,233,0.1)'}
              >
                {copied ? <><Check size={14} style={{ color: '#34d399' }} /> COPIED JSON TO CLIPBOARD!</> : <><Copy size={14} /> COPY SITE DATA (JSON)</>}
              </button>
              <button onClick={() => { setView('change'); setError(''); setSuccess(''); }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%', padding: '12px', border: '1px solid #3f3f46', color: '#d4d4d8', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, background: 'transparent', cursor: 'pointer', transition: 'border-color 0.2s, color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#3f3f46'; e.currentTarget.style.color = '#d4d4d8'; }}
              >
                <KeyRound size={14} /> CHANGE PASSWORD
              </button>
              <button onClick={handleLogout}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%', padding: '12px', border: '1px solid #450a0a', color: '#f87171', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, background: 'transparent', cursor: 'pointer', transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(127,29,29,0.3)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <Lock size={14} /> LOCK & LOG OUT
              </button>
            </div>
          )}

          {/* ── SETUP ── */}
          {view === 'setup' && (
            <form onSubmit={handleSetup} className="space-y-4">
              <div style={{ border: '1px solid #27272a', padding: '12px', fontSize: '11px', fontFamily: 'monospace', color: '#a1a1aa', lineHeight: 1.6 }}>
                No admin password set. Create one now. Only you will know it.
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '10px', fontFamily: 'monospace', color: '#71717a', marginBottom: '6px', textTransform: 'uppercase' }}>
                  New Password <span style={{ color: '#52525b' }}>(min 6 chars)</span>
                </label>
                <div className="relative">
                  <input autoFocus type={showPw ? 'text' : 'password'} value={pw}
                    onChange={e => { setPw(e.target.value); setError(''); }} required minLength={6}
                    placeholder="Enter password"
                    style={{ width: '100%', background: '#000', border: '1px solid #3f3f46', color: '#fff', fontSize: '14px', fontFamily: 'monospace', padding: '10px 40px 10px 12px', outline: 'none', boxSizing: 'border-box' }}
                    onFocus={e => e.target.style.borderColor = '#38bdf8'}
                    onBlur={e => e.target.style.borderColor = '#3f3f46'}
                  />
                  <button type="button" onClick={() => setShowPw(s => !s)}
                    style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#71717a', background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}>
                    {showPw ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '10px', fontFamily: 'monospace', color: '#71717a', marginBottom: '6px', textTransform: 'uppercase' }}>Confirm Password</label>
                <input type={showPw ? 'text' : 'password'} value={pw2}
                  onChange={e => setPw2(e.target.value)} required
                  placeholder="Repeat password"
                  style={{ width: '100%', background: '#000', border: '1px solid #3f3f46', color: '#fff', fontSize: '14px', fontFamily: 'monospace', padding: '10px 12px', outline: 'none', boxSizing: 'border-box' }}
                  onFocus={e => e.target.style.borderColor = '#38bdf8'}
                  onBlur={e => e.target.style.borderColor = '#3f3f46'}
                />
              </div>
              {error && <p style={{ color: '#f87171', fontSize: '12px', fontFamily: 'monospace', margin: 0 }}>{error}</p>}
              <button type="submit"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%', padding: '12px', background: '#fff', color: '#000', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, border: 'none', cursor: 'pointer', transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#e4e4e7'}
                onMouseLeave={e => e.currentTarget.style.background = '#fff'}
              >
                <ShieldCheck size={16} /> SET ADMIN PASSWORD
              </button>
            </form>
          )}

          {/* ── LOGIN ── */}
          {view === 'login' && (
            <form onSubmit={handleLogin} className="space-y-4">
              <p style={{ color: '#71717a', fontSize: '12px', fontFamily: 'monospace', margin: 0 }}>
                Enter your admin password to unlock edit mode across all sections.
              </p>
              <div>
                <label style={{ display: 'block', fontSize: '10px', fontFamily: 'monospace', color: '#71717a', marginBottom: '6px', textTransform: 'uppercase' }}>Password</label>
                <div className="relative">
                  <input autoFocus type={showPw ? 'text' : 'password'} value={pw}
                    onChange={e => { setPw(e.target.value); setError(''); }} required
                    placeholder="••••••••"
                    style={{ width: '100%', background: '#000', border: '1px solid #3f3f46', color: '#fff', fontSize: '14px', fontFamily: 'monospace', padding: '10px 40px 10px 12px', outline: 'none', boxSizing: 'border-box' }}
                    onFocus={e => e.target.style.borderColor = '#38bdf8'}
                    onBlur={e => e.target.style.borderColor = '#3f3f46'}
                  />
                  <button type="button" onClick={() => setShowPw(s => !s)}
                    style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#71717a', background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}>
                    {showPw ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
              </div>
              {error && <p style={{ color: '#f87171', fontSize: '12px', fontFamily: 'monospace', margin: 0 }}>{error}</p>}
              <button type="submit"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%', padding: '12px', background: '#fff', color: '#000', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, border: 'none', cursor: 'pointer', transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#e4e4e7'}
                onMouseLeave={e => e.currentTarget.style.background = '#fff'}
              >
                <Unlock size={16} /> UNLOCK EDIT MODE
              </button>
            </form>
          )}

          {/* ── CHANGE PASSWORD ── */}
          {view === 'change' && (
            <form onSubmit={handleChange} className="space-y-4">
              {['Current Password', 'New Password (min 6 chars)', 'Confirm New Password'].map((label, i) => {
                const vals = [pw, pw2, pw3];
                const setVals = [
                  v => { setPw(v); setError(''); },
                  v => setPw2(v),
                  v => setPw3(v),
                ];
                return (
                  <div key={label}>
                    <label style={{ display: 'block', fontSize: '10px', fontFamily: 'monospace', color: '#71717a', marginBottom: '6px', textTransform: 'uppercase' }}>{label}</label>
                    <input type={showPw ? 'text' : 'password'} value={vals[i]} onChange={e => setVals[i](e.target.value)} required
                      placeholder="••••••••"
                      style={{ width: '100%', background: '#000', border: '1px solid #3f3f46', color: '#fff', fontSize: '14px', fontFamily: 'monospace', padding: '10px 12px', outline: 'none', boxSizing: 'border-box' }}
                      onFocus={e => e.target.style.borderColor = '#38bdf8'}
                      onBlur={e => e.target.style.borderColor = '#3f3f46'}
                    />
                  </div>
                );
              })}
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input type="checkbox" checked={showPw} onChange={e => setShowPw(e.target.checked)} style={{ accentColor: '#38bdf8' }} />
                <span style={{ fontSize: '12px', fontFamily: 'monospace', color: '#71717a' }}>Show passwords</span>
              </label>
              {error && <p style={{ color: '#f87171', fontSize: '12px', fontFamily: 'monospace', margin: 0 }}>{error}</p>}
              {success && <p style={{ color: '#34d399', fontSize: '12px', fontFamily: 'monospace', margin: 0 }}>{success}</p>}
              <div style={{ display: 'flex', gap: '8px' }}>
                <button type="button" onClick={() => { setView('panel'); setError(''); setSuccess(''); }}
                  style={{ flex: 1, padding: '10px', border: '1px solid #3f3f46', color: '#a1a1aa', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, background: 'transparent', cursor: 'pointer' }}>
                  BACK
                </button>
                <button type="submit"
                  style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '10px', background: '#fff', color: '#000', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, border: 'none', cursor: 'pointer' }}>
                  <RefreshCw size={13} /> UPDATE
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Footer */}
        {!isAdmin && (
          <div style={{ padding: '8px 24px 16px', textAlign: 'center', fontSize: '10px', fontFamily: 'monospace', color: '#3f3f46' }}>
            VISITORS CANNOT ACCESS THIS PANEL · SHA-256 PROTECTED
          </div>
        )}
      </div>
    </div>
  );
}
