import React, { useState } from 'react';
import { ArrowUpRight, Cpu } from 'lucide-react';
import LiquidDistortion from './LiquidDistortion';
import SmokyText from './SmokyText';
import HoverMeshText from './HoverMeshText';
import { usePortfolio } from '../context/SkillsContext';

export default function Hero({ onExploreProjects, onOpenConfigurator }) {
  const [effectMode, setEffectMode] = useState('mesh'); // 'mesh' | 'smoky'
  const { categories } = usePortfolio();

  return (
    <section id="overview" className="relative min-h-screen pt-24 pb-16 flex flex-col justify-between bg-black border-b border-zinc-900 overflow-hidden z-10">
      {/* Background WebGL Liquid Distortion */}
      <div className="absolute inset-0 opacity-25 pointer-events-auto">
        <LiquidDistortion
          imageSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop"
          intensity={65}
          cursorSize={80}
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none"></div>

      {/* Top Status Bar & Effect Mode Switcher */}
      <div className="container-custom relative z-10 pt-4 flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex items-center gap-3 bg-zinc-900/90 border border-zinc-800 px-4 py-2 text-xs font-mono backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
          <span className="text-sky-400 font-bold">STATUS:</span>
          <span className="text-zinc-300">FULL-STACK ENGINE READY</span>
          <div className="m-stripe-vertical h-3"></div>
          <span className="text-zinc-500 hidden sm:inline">ORIGINKIT TEXT EFFECTS ACTIVE ///</span>
        </div>

        {/* Text Effect Switcher */}
        <div className="inline-flex items-center border border-zinc-800 bg-zinc-950 p-1">
          <button
            onClick={() => setEffectMode('mesh')}
            className={`px-3 py-1.5 text-xs font-mono font-bold transition-colors ${
              effectMode === 'mesh' ? 'bg-sky-950 text-sky-400 border border-sky-600' : 'text-zinc-500 hover:text-white'
            }`}
          >
            HOVER MESH TEXT
          </button>
          <button
            onClick={() => setEffectMode('smoky')}
            className={`px-3 py-1.5 text-xs font-mono font-bold transition-colors ${
              effectMode === 'smoky' ? 'bg-red-950 text-red-400 border border-red-600' : 'text-zinc-500 hover:text-white'
            }`}
          >
            SMOKY TEXT
          </button>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="container-custom relative z-10 my-auto py-8">
        <div className="max-w-5xl">
          {/* Pre-Title */}
          <div className="flex items-center gap-3 mb-4">
            <div className="m-stripe-divider w-16"></div>
            <span className="label-uppercase text-zinc-400 text-xs tracking-widest font-mono">
              RIDHAM /// SOFTWARE ENGINEERING
            </span>
          </div>

          {/* Headline with OriginKit Effects */}
          <div className="mb-4">
            {effectMode === 'mesh' ? (
              <HoverMeshText
                text={"ENGINEERING\nHIGH-PERFORMANCE\nDIGITAL SYSTEMS."}
                color="#ffffff"
                fontSize={64}
                colorSplit={true}
                customColors={["#0066b1", "#e22718"]}
                force={25}
              />
            ) : (
              <div className="display-xl py-4">
                <SmokyText
                  text={"ENGINEERING\nHIGH-PERFORMANCE\nDIGITAL SYSTEMS."}
                  color="#ffffff"
                  intensity={14}
                  position="bottomLeft"
                  animationMode="singleLine"
                />
              </div>
            )}
          </div>

          {/* Live Dynamic Skills Pills */}
          <div className="flex flex-wrap gap-2 my-6">
            {categories.flatMap(cat => cat.skills).slice(0, 8).map(skill => (
              <span
                key={skill.name}
                className="text-xs font-mono font-bold text-zinc-300 bg-zinc-900/90 border border-zinc-800 px-3 py-1.5 backdrop-blur-md"
              >
                {skill.name.split('(')[0].trim()}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 items-center pt-2">
            <button
              onClick={onExploreProjects}
              className="button-primary px-8 h-14 text-sm flex items-center gap-3 group"
            >
              <span>EXPLORE PROJECTS ///</span>
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            <button
              onClick={onOpenConfigurator}
              className="button-outline px-8 h-14 text-sm flex items-center gap-3"
            >
              <Cpu size={18} className="text-sky-400" />
              <span>STACK CONFIGURATOR</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
