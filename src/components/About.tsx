import { Sparkles, Wand2, Cog, Users, Handshake, ExternalLink, ShieldCheck, Terminal } from 'lucide-react';

export default function About() {
  const points = [
    {
      icon: Wand2,
      title: 'Innovation as a default',
      description:
        "We prototype with emerging models and frameworks before they're mainstream, so your app doesn't age out in a year.",
      tag: 'SYS.INNOVATION',
    },
    {
      icon: Cog,
      title: 'Automation-first engineering',
      description:
        'Wherever a manual process can be modeled, we automate it — from onboarding flows to backend operations.',
      tag: 'SYS.AUTO',
    },
    {
      icon: Users,
      title: 'User-focused development',
      description:
        'Every technical decision is filtered through one question: does this make the app easier for a real person to use?',
      tag: 'SYS.UX',
    },
    {
      icon: Handshake,
      title: 'Backed by a trusted partner',
      description: (
        <>
          We work in partnership with{' '}
          <a
            href="https://c4utech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 font-semibold underline underline-offset-4 decoration-cyan-500/50 hover:decoration-cyan-400 inline-flex items-center gap-1 transition-colors"
          >
            C4U TECH
            <ExternalLink className="w-3.5 h-3.5 inline" />
          </a>
          , extending our capacity for larger builds, publishing, and QA coverage.
        </>
      ),
      tag: 'PARTNER.C4U',
    },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#030712] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 blur-3xl pointer-events-none rounded-full -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Cyber HUD Card "Who We Are" */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer Cyber Accent Glow Frame */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-3xl opacity-30 group-hover:opacity-60 blur-sm transition duration-500" />
              
              <div className="relative rounded-3xl cyber-glass-card p-8 sm:p-10 border border-cyan-500/30 overflow-hidden">
                
                {/* HUD Header Bar */}
                <div className="flex items-center justify-between pb-6 border-b border-cyan-500/20 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4] animate-pulse" />
                    <span className="font-mono text-xs font-bold text-cyan-400 tracking-wider">
                      STUDIO.IDENTITY
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[10px] font-mono text-slate-400">
                    <Terminal className="w-3 h-3 text-cyan-400" />
                    <span>WHO WE ARE</span>
                  </div>
                </div>

                {/* Card Main Copy */}
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                  Built by engineers who ship, guided by AI that learns.
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                  A cross-disciplinary team of mobile engineers, ML researchers, and product designers working as one studio.
                </p>

                {/* Sub-HUD Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Stat 1: 3 Years+ Experience */}
                  <a
                    href="https://c4utech.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-slate-900/70 border border-cyan-500/25 relative overflow-hidden group/stat hover:border-cyan-400/60 hover:bg-slate-900/90 hover:shadow-[0_0_20px_rgba(0,245,212,0.15)] transition-all flex flex-col justify-between min-h-[115px]"
                  >
                    <div className="absolute top-0 right-0 w-10 h-10 bg-cyan-500/10 rounded-bl-full pointer-events-none" />
                    <div className="flex items-center justify-between">
                      <strong className="font-mono text-xl sm:text-2xl font-bold text-cyan-400 block tracking-tight">
                        3 Years+
                      </strong>
                      <ExternalLink className="w-3.5 h-3.5 text-cyan-400/60 group-hover/stat:text-cyan-300 transition-colors flex-shrink-0 ml-1" />
                    </div>
                    <span className="text-xs text-slate-300 font-medium mt-2 leading-snug">
                      Experience
                    </span>
                  </a>

                  {/* Stat 2: 300+ Mobile Apps Published */}
                  <a
                    href="https://c4utech.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-slate-900/70 border border-teal-500/25 relative overflow-hidden group/stat hover:border-teal-400/60 hover:bg-slate-900/90 hover:shadow-[0_0_20px_rgba(20,184,166,0.15)] transition-all flex flex-col justify-between min-h-[115px]"
                  >
                    <div className="absolute top-0 right-0 w-10 h-10 bg-teal-500/10 rounded-bl-full pointer-events-none" />
                    <div className="flex items-center justify-between">
                      <strong className="font-mono text-2xl sm:text-3xl font-bold text-teal-400 block tracking-tight">
                        300+
                      </strong>
                      <ExternalLink className="w-3.5 h-3.5 text-teal-400/60 group-hover/stat:text-teal-300 transition-colors flex-shrink-0 ml-1" />
                    </div>
                    <span className="text-xs text-slate-300 font-medium mt-2 leading-snug">
                      Mobile Apps Published for Clients Worldwide
                    </span>
                  </a>

                  {/* Stat 3: C4U TECH Strategic Tech Partner */}
                  <a
                    href="https://c4utech.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-slate-900/70 border border-indigo-500/25 relative overflow-hidden group/stat hover:border-indigo-400/60 hover:bg-slate-900/90 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all flex flex-col justify-between min-h-[115px]"
                  >
                    <div className="absolute top-0 right-0 w-10 h-10 bg-indigo-500/10 rounded-bl-full pointer-events-none" />
                    <div className="flex items-center justify-between">
                      <strong className="font-mono text-xl sm:text-2xl font-bold text-indigo-400 block tracking-tight whitespace-nowrap">
                        C4U TECH
                      </strong>
                      <ExternalLink className="w-3.5 h-3.5 text-indigo-400/60 group-hover/stat:text-indigo-300 transition-colors flex-shrink-0 ml-1" />
                    </div>
                    <span className="text-xs text-slate-300 font-medium mt-2 leading-snug">
                      Strategic Tech Partner
                    </span>
                  </a>
                </div>

                {/* Verified Architecture Stamp */}
                <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <ShieldCheck className="w-4 h-4" />
                    <span>VERIFIED PRODUCTION OPS</span>
                  </span>
                  <span>NODE: BD-HQ</span>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: "About WakeUp AI" Copy & 4 Engineering Pillars */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono tracking-widest text-cyan-300 uppercase mb-4 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f5d4]" />
              <span>About WakeUp AI</span>
            </div>

            {/* H2 Title */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.18] mb-6">
              A mobile &amp; AI studio built for the way software is built now
            </h2>

            {/* Lead Narrative */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10">
              WakeUp AI is a mobile app and AI solutions company that plans, designs, and engineers products end to end. We treat intelligence as infrastructure — every app we build is designed to automate the repetitive, personalize the experience, and get smarter the more people use it.
            </p>

            {/* 4 Pillars List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {points.map((pt, idx) => {
                const IconComponent = pt.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl cyber-glass border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 group-hover:scale-110 group-hover:border-cyan-400 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[10px] text-slate-500 tracking-wider">
                        {pt.tag}
                      </span>
                    </div>

                    <h4 className="font-display text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {pt.title}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {pt.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
