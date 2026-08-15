import React, { useState } from 'react';
import { Volume2, VolumeX, Bot, Menu, X } from 'lucide-react';

export default function Navbar({ 
  onOpenCopilot, 
  onOpenContact, 
  soundActive, 
  onToggleSound, 
  activeSection, 
  setActiveSection 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'overview', label: 'OVERVIEW' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'configurator', label: 'CONFIGURATOR' },
    { id: 'powertrain', label: 'SKILLS' },
    { id: 'chronicles', label: 'CHRONICLES' },
    { id: 'magazine', label: 'BLOG' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="top-nav">
        {/* Brand Logo */}
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => handleNavClick('overview')}>
          <div className="stripe-vertical h-7 rounded-none" style={{background: 'linear-gradient(180deg, #0066b1 0%, #1c69d4 50%, #e22718 100%)', width: '3px'}}></div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-xl tracking-tighter italic font-sans">
              RIDHAM <span className="text-sm not-italic ml-1 text-white tracking-widest bg-zinc-900 px-2 py-0.5 border border-zinc-800">///</span>
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-xs font-bold tracking-widest px-4 py-2 transition-all border rounded-none ${
                activeSection === item.id 
                  ? 'text-white border-white bg-zinc-900' 
                  : 'text-zinc-400 border-transparent hover:border-zinc-800 hover:text-white hover:bg-zinc-950'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Action Controls */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Sound Button */}
          <button
            onClick={onToggleSound}
            title={soundActive ? "Sound ACTIVE" : "Enable Sound"}
            className="flex items-center gap-2 text-xs font-bold tracking-widest text-zinc-300 hover:text-white px-3 py-1.5 border border-zinc-800 hover:border-zinc-500 bg-zinc-950 transition-all shrink-0"
          >
            {soundActive ? (
              <>
                <Volume2 size={15} className="text-red-500 animate-pulse" />
                <span className="text-[11px] text-red-500">SOUND ON</span>
              </>
            ) : (
              <>
                <VolumeX size={15} className="text-zinc-500" />
                <span className="text-[11px] text-zinc-500">SOUND OFF</span>
              </>
            )}
          </button>

          {/* AI Copilot Button */}
          <button
            onClick={onOpenCopilot}
            className="flex items-center gap-2 text-xs font-bold tracking-widest text-white px-3 py-1.5 border border-zinc-700 bg-zinc-900 hover:border-white transition-all shrink-0"
          >
            <Bot size={15} className="text-sky-400" />
            <span>AI COPILOT</span>
          </button>

          {/* Contact CTA */}
          <button
            onClick={onOpenContact}
            className="button-primary h-9 px-4 text-xs tracking-widest shrink-0"
          >
            CONTACT ///
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex xl:hidden items-center gap-3">
          <button
            onClick={onOpenCopilot}
            className="p-2 border border-zinc-800 text-white"
          >
            <Bot size={18} className="text-sky-400" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-zinc-800 text-white"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 bg-black z-50 flex flex-col justify-between p-8 border-t border-zinc-800">
          <div className="m-stripe-divider mb-8"></div>
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left text-2xl font-bold text-white tracking-widest hover:text-sky-400"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4 mt-8 pt-8 border-t border-zinc-800">
            <button
              onClick={() => { onToggleSound(); setMobileMenuOpen(false); }}
              className="flex items-center justify-center gap-2 p-3 border border-zinc-700 text-white text-xs font-bold tracking-widest"
            >
              {soundActive ? <Volume2 size={18} className="text-red-500" /> : <VolumeX size={18} />}
              <span>TOGGLE SOUND</span>
            </button>
            <button
              onClick={() => { onOpenContact(); setMobileMenuOpen(false); }}
              className="button-primary w-full justify-center"
            >
              CONTACT RIDHAM ///
            </button>
          </div>
        </div>
      )}
    </>
  );
}
