import { useRef } from 'react';
import {
  Search,
  Compass,
  Palette,
  Terminal,
  ShieldAlert,
  Send,
  LifeBuoy,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

interface Stage {
  number: string;
  title: string;
  description: string;
  icon: typeof Search;
  tag: string;
}

const STAGES: Stage[] = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We map your goals, users, and constraints before a single screen is designed.',
    icon: Search,
    tag: 'PHASE.SCOPE',
  },
  {
    number: '02',
    title: 'Planning',
    description: 'Scope, timeline, and technical architecture are locked in and shared transparently.',
    icon: Compass,
    tag: 'PHASE.ARCH',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Wireframes evolve into a full UI system tested against real usage scenarios.',
    icon: Palette,
    tag: 'PHASE.SYSTEM',
  },
  {
    number: '04',
    title: 'Development',
    description: 'Engineers build in sprints with visible progress and staging builds each week.',
    icon: Terminal,
    tag: 'PHASE.SPRINT',
  },
  {
    number: '05',
    title: 'Testing',
    description: 'Automated and manual QA across devices, load conditions, and edge cases.',
    icon: ShieldAlert,
    tag: 'PHASE.VERIFY',
  },
  {
    number: '06',
    title: 'Deployment',
    description: 'App store submission, backend rollout, and monitoring are handled end to end.',
    icon: Send,
    tag: 'PHASE.ROLLOUT',
  },
  {
    number: '07',
    title: 'Maintenance',
    description: 'Post-launch support keeps the app current with OS updates and user feedback.',
    icon: LifeBuoy,
    tag: 'PHASE.EVOLVE',
  },
];

export default function Process() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="process" className="relative py-24 md:py-32 bg-[#030712] overflow-hidden">
      {/* Background glow and subtle cyber grid */}
      <div className="absolute inset-0 cyber-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-indigo-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono tracking-widest text-cyan-300 uppercase mb-4 shadow-[0_0_15px_rgba(0,245,212,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>How We Work</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
              A development process built for{' '}
              <span className="cyber-ocean-gradient-text">accountability</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Seven stages, one continuous thread from first conversation to long-term support.
            </p>
          </div>

          {/* Horizontal Scroll Arrows for Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Scroll process timeline left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Scroll process timeline right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 7-Stage Process Track with Horizontal Scroll & Staggered Mobile Support */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-6 pt-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-cyan-500/30 scrollbar-track-slate-900/50"
          style={{ scrollbarWidth: 'thin' }}
        >
          {STAGES.map((stage, index) => {
            const IconComponent = stage.icon;
            const isLast = index === STAGES.length - 1;

            return (
              <div
                key={stage.number}
                className="flex-none w-[280px] sm:w-[320px] snap-start"
              >
                <div className="group relative h-full rounded-2xl cyber-glass-card p-7 border border-slate-800/90 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden hover:shadow-[0_0_25px_rgba(0,245,212,0.15)]">
                  
                  {/* Top neon connector bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent group-hover:via-cyan-400 transition-all duration-500" />

                  <div>
                    {/* Header: Stage Number & Status */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono text-xs font-bold text-cyan-400 tracking-wider px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30">
                        STAGE {stage.number}
                      </span>
                      <span className="font-mono text-[10px] text-slate-500 tracking-widest">
                        {stage.tag}
                      </span>
                    </div>

                    {/* Stage Icon */}
                    <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center text-cyan-300 mb-6 group-hover:border-cyan-400/60 group-hover:scale-105 transition-all shadow-[0_0_15px_rgba(0,245,212,0.1)]">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Stage Title */}
                    <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {stage.title}
                    </h3>

                    {/* Stage Description */}
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {stage.description}
                    </p>
                  </div>

                  {/* Stage Progress Indicator */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
                    <span className="text-slate-400">STAGE 0{index + 1} / 07</span>
                    <span className="text-cyan-400 flex items-center gap-1">
                      {isLast ? 'FINAL OPS' : 'NEXT STEP'}
                      {!isLast && <ChevronRight className="w-3 h-3 inline" />}
                    </span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Swipe prompt hint on small screens */}
        <div className="sm:hidden flex items-center justify-center gap-2 mt-4 text-xs font-mono text-slate-500">
          <ChevronLeft className="w-3.5 h-3.5 text-cyan-400" />
          <span>SWIPE TO EXPLORE 7 STAGES</span>
          <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
        </div>

      </div>
    </section>
  );
}
