import { useState } from 'react';
import {
  MessageSquare,
  ArrowRight,
  Brain,
  Smartphone,
  Zap,
  Cpu,
  Sparkles,
  ShieldCheck,
  Activity,
} from 'lucide-react';
import CyberOceanCanvas from './CyberOceanCanvas';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#030712]"
    >
      {/* Dynamic Cyber-Ocean Canvas Background */}
      <CyberOceanCanvas />

      {/* Cyber Grid Background overlay */}
      <div className="absolute inset-0 cyber-grid-pattern opacity-30 pointer-events-none" />

      {/* Radial Oceanic Depth Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-br from-indigo-600/15 via-cyan-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute -bottom-24 -left-24 w-[450px] h-[450px] bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Eyebrow badge with cyber beacon */}
            <div
              id="hero-eyebrow"
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono tracking-widest text-cyan-300 uppercase mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(0,245,212,0.15)]"
            >
              <span>APP Studio</span>
              <span className="text-slate-600">|</span>
              <span className="text-white font-semibold">WakeUp AI</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400 shadow-[0_0_8px_#00f5d4]" />
              </span>
              <a
                href="https://c4utech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-bold transition-colors inline-flex items-center gap-1"
              >
                <span>C4U TECH</span>
              </a>
            </div>

            {/* H1 Heading */}
            <h1
              id="hero-heading"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6"
            >
              Transforming Ideas into{' '}
              <span className="cyber-ocean-gradient-text drop-shadow-[0_0_20px_rgba(0,245,212,0.3)]">
                Intelligent Mobile Apps
              </span>
            </h1>

            {/* Lead Description */}
            <p
              id="hero-lead-text"
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8 font-normal"
            >
              WakeUp AI designs and builds Android, iOS, and SaaS products. Turning early-stage ideas into applications that think, adapt, and scale.
            </p>

            {/* Hero Actions (Exact copy from wakeup-ai (1).html) */}
            <div className="flex flex-wrap items-center gap-4 mb-12 w-full sm:w-auto">
              <a
                href="#contact"
                id="hero-cta-consultation"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-semibold text-[#030712] bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 hover:shadow-[0_0_30px_rgba(0,245,212,0.65)] hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <MessageSquare className="w-4 h-4 text-[#030712]" />
                <span>Get a Free Consultation</span>
              </a>

              <a
                href="#portfolio"
                id="hero-cta-portfolio"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-semibold text-slate-200 cyber-glass hover:bg-slate-800/80 hover:text-cyan-300 hover:border-cyan-500/50 hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </a>
            </div>

            {/* Hero Meta Stats (Exact copy from wakeup-ai (1).html) */}
            <div
              id="hero-stats-row"
              className="grid grid-cols-3 gap-6 sm:gap-10 pt-6 border-t border-slate-800/80 w-full max-w-xl"
            >
              <div className="flex flex-col">
                <div className="flex items-baseline gap-0.5">
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-cyan-400 tracking-tight">3+</span>
                </div>
                <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Years Experience</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-baseline gap-0.5">
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-cyan-400 tracking-tight">100+</span>
                </div>
                <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Global Clients</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-baseline gap-0.5">
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-cyan-400 tracking-tight">100%</span>
                </div>
                <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Satisfaction</span>
              </div>
            </div>

          </div>

          {/* Right Column: Holographic Cyber-Ocean Orb & Visual HUD construct */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div
              className="relative w-full max-w-[420px] aspect-square flex items-center justify-center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Outer Cyber Radar Grids & Concentric Rings */}
              <div className="absolute inset-0 rounded-full border border-cyan-500/10 animate-spin-slow" />
              
              <div className="absolute inset-4 rounded-full border border-dashed border-indigo-500/20 animate-spin-slow-reverse" />
              
              <div className="absolute inset-10 rounded-full border border-cyan-400/25 shadow-[0_0_30px_rgba(0,245,212,0.15)]" />

              {/* Holographic HUD Tick Marks on outer ring */}
              <div className="absolute inset-2 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-1 bg-cyan-400/60 rounded-full shadow-[0_0_6px_#00f5d4]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-1 bg-cyan-400/60 rounded-full shadow-[0_0_6px_#00f5d4]" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-2 bg-indigo-400/60 rounded-full" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-2 bg-indigo-400/60 rounded-full" />
              </div>

              {/* Central Glowing Cyber Core Orb */}
              <div
                className={`relative w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-cyan-400 via-indigo-600 to-purple-900 shadow-[0_0_80px_rgba(0,245,212,0.45),inset_0_0_40px_rgba(0,0,0,0.7)] flex items-center justify-center transition-all duration-700 ${
                  isHovered ? 'scale-105 shadow-[0_0_110px_rgba(0,245,212,0.7)]' : 'animate-cyber-float'
                }`}
              >
                {/* Inner plasma depth pulse */}
                <div className="absolute inset-3 rounded-full bg-radial from-cyan-300/40 via-transparent to-black/60 backdrop-blur-sm" />
                
                {/* Microchip / Core Logo Mark */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
                  <div className="w-14 h-14 rounded-2xl bg-slate-950/80 border border-cyan-400/50 flex items-center justify-center mb-2 shadow-[0_0_20px_rgba(0,245,212,0.5)]">
                    <Brain className="w-7 h-7 text-cyan-300 animate-pulse" />
                  </div>
                  <span className="font-mono text-[11px] font-bold tracking-widest text-cyan-200">
                    WAKEUP.AI
                  </span>
                  <span className="font-mono text-[9px] text-cyan-400/80 tracking-wider mt-0.5">
                    CORE MATRIX v2.4
                  </span>
                </div>
              </div>

              {/* Floating Holographic Cyber Badges (from wakeup-ai (1).html) */}
              
              {/* Tag 1: Neural Core */}
              <div
                id="hero-tag-neural"
                className="absolute -top-3 -left-4 sm:top-2 sm:-left-2 px-3.5 py-2 rounded-xl cyber-glass border-cyan-500/40 flex items-center gap-2 text-xs font-mono font-medium text-cyan-200 shadow-[0_4px_20px_rgba(0,0,0,0.5)] animate-bounce [animation-duration:5s]"
              >
                <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-300">
                  <Brain className="w-3.5 h-3.5" />
                </div>
                <span>Neural Core</span>
              </div>

              {/* Tag 2: iOS · Android */}
              <div
                id="hero-tag-mobile"
                className="absolute -bottom-3 -right-2 sm:bottom-4 sm:-right-4 px-3.5 py-2 rounded-xl cyber-glass border-cyan-500/40 flex items-center gap-2 text-xs font-mono font-medium text-cyan-200 shadow-[0_4px_20px_rgba(0,0,0,0.5)] animate-bounce [animation-duration:6s] [animation-delay:1s]"
              >
                <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-300">
                  <Smartphone className="w-3.5 h-3.5" />
                </div>
                <span>iOS · Android</span>
              </div>

              {/* Tag 3: Real-time ML */}
              <div
                id="hero-tag-ml"
                className="absolute top-1/2 -right-6 sm:-right-8 -translate-y-1/2 px-3.5 py-2 rounded-xl cyber-glass border-cyan-500/40 flex items-center gap-2 text-xs font-mono font-medium text-cyan-200 shadow-[0_4px_20px_rgba(0,0,0,0.5)] animate-bounce [animation-duration:7s] [animation-delay:2s]"
              >
                <div className="p-1.5 rounded-lg bg-teal-500/20 text-teal-300">
                  <Zap className="w-3.5 h-3.5" />
                </div>
                <span>Real-time ML</span>
              </div>

              {/* HUD Telemetry Corner Notches */}
              <div className="absolute -bottom-6 left-6 font-mono text-[10px] text-slate-500 tracking-wider hidden sm:block">
                SYS.TELEMETRY: // 99.98% OPTIMAL
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Cyber Edge Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </section>
  );
}
