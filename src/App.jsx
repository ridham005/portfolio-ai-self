import React, { useState } from 'react';
import { SkillsProvider } from './context/SkillsContext';
import { AdminProvider } from './context/AdminContext';
import AdminModal from './components/AdminModal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TelemetrySpecs from './components/TelemetrySpecs';
import ProjectShowcase from './components/ProjectShowcase';
import ProjectModal from './components/ProjectModal';
import EngineeringConfigurator from './components/EngineeringConfigurator';
import SkillsPowertrain from './components/SkillsPowertrain';
import ExperienceChronicles from './components/ExperienceChronicles';
import MagazineArticles from './components/MagazineArticles';
import MCopilotDrawer from './components/MCopilotDrawer';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

// OriginKit-Inspired Animated, 3D, Liquid, and Ripple Components
import CursorAnimation from './components/CursorAnimation';
import BackgroundAnimation from './components/BackgroundAnimation';
import LineRippleBackground from './components/LineRippleBackground';
import GalleryTunnel from './components/GalleryTunnel';

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedProject, setSelectedProject] = useState(null);
  const [copilotOpen, setCopilotOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [soundActive, setSoundActive] = useState(false);

  // High-Tech Web Audio API M TwinPower Engine Sound Simulator
  const toggleSound = () => {
    if (!soundActive) {
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(80, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 1.2);
        osc.frequency.exponentialRampToValueAtTime(140, ctx.currentTime + 2.5);

        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 2.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 2.5);

        setSoundActive(true);
        setTimeout(() => setSoundActive(false), 2500);
      } catch (e) {
        console.warn('Web Audio API not supported', e);
      }
    } else {
      setSoundActive(false);
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToConfigurator = () => {
    const el = document.getElementById('configurator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AdminProvider>
    <SkillsProvider>
    <div className="bg-black text-white min-h-screen relative selection:bg-red-600 selection:text-white">
      {/* OriginKit Custom Dynamic M Cursor */}
      <CursorAnimation />

      {/* OriginKit Reactive Kinetic Background Canvas */}
      <BackgroundAnimation />

      {/* OriginKit Line Ripple Vector Noise Background */}
      <LineRippleBackground strokeColor="#2a2a2a" count={50} movement={20} force={4} />

      {/* Top Fixed Navbar */}
      <Navbar
        onOpenCopilot={() => setCopilotOpen(true)}
        onOpenContact={() => setContactOpen(true)}
        soundActive={soundActive}
        onToggleSound={toggleSound}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main BMW M Performance Hero Section with WebGL Liquid & Text Effects */}
      <Hero
        onExploreProjects={scrollToProjects}
        onOpenConfigurator={scrollToConfigurator}
      />

      {/* Telemetry Specs Grid with 3D Element Integration */}
      <TelemetrySpecs />

      {/* Featured Projects Showcase */}
      <ProjectShowcase onSelectProject={setSelectedProject} />

      {/* OriginKit 3D Gallery Tunnel - Visual Speedway */}
      <GalleryTunnel />

      {/* Engineering Configurator */}
      <EngineeringConfigurator onOpenContact={() => setContactOpen(true)} />

      {/* M Powertrain Skills Matrix */}
      <SkillsPowertrain />

      {/* Experience Chronicles Timeline */}
      <ExperienceChronicles />

      {/* BMW M Magazine Editorial Articles */}
      <MagazineArticles />

      {/* Pre-Footer CTA Visual Band */}
      <section className="relative py-24 bg-black border-y border-zinc-800 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=2000&auto=format&fit=crop"
            alt="Engineering Track"
            className="w-full h-full object-cover filter brightness-75 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black"></div>
        </div>

        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="m-stripe-vertical h-4"></div>
            <span className="label-uppercase text-sky-400 text-xs">READY TO BUILD</span>
          </div>
          <h2 className="display-lg mb-8 text-white">
            ENGINEER YOUR NEXT PROJECT.
          </h2>
          <button
            onClick={() => setContactOpen(true)}
            className="button-primary px-8 h-12 text-sm tracking-widest"
          >
            INITIATE CONTACT ///
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer onOpenContact={() => setContactOpen(true)} />

      {/* Project Telemetry Specification Sheet Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* M Copilot Slide-over AI Assistant Drawer */}
      <MCopilotDrawer
        isOpen={copilotOpen}
        onClose={() => setCopilotOpen(false)}
        onOpenContact={() => {
          setCopilotOpen(false);
          setContactOpen(true);
        }}
      />

      {/* Contact Specification Transmission Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
      <AdminModal />
    </div>
    </SkillsProvider>
    </AdminProvider>
  );
}
