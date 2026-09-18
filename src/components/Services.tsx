import {
  Smartphone,
  Apple,
  Cpu,
  Network,
  Layout,
  Cloud,
  Wrench,
  Code2,
  Rocket,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';

interface ServiceItem {
  id: string;
  icon: typeof Smartphone;
  title: string;
  description: string;
  category: string;
  glowColor: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'svc-android',
    icon: Smartphone,
    title: 'Android App Development',
    description:
      'Native Kotlin and Java apps engineered for performance across the entire Android device landscape.',
    category: 'MOBILE OS',
    glowColor: 'hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(0,245,212,0.2)]',
  },
  {
    id: 'svc-ios',
    icon: Apple,
    title: 'iOS App Development',
    description:
      "Swift-based apps that feel native to iOS — fast, polished, and built to Apple's App Store standards.",
    category: 'APPLE ECOSYSTEM',
    glowColor: 'hover:border-blue-400/50 hover:shadow-[0_0_25px_rgba(56,189,248,0.2)]',
  },
  {
    id: 'svc-ai',
    icon: Cpu,
    title: 'AI Integration',
    description:
      'Embed language models, computer vision, and recommendation engines directly into your product experience.',
    category: 'INTELLIGENCE',
    glowColor: 'hover:border-teal-400/50 hover:shadow-[0_0_25px_rgba(0,229,199,0.2)]',
  },
  {
    id: 'svc-ml',
    icon: Network,
    title: 'Machine Learning Solutions',
    description:
      'Custom models trained on your data — from predictive analytics to intelligent automation pipelines.',
    category: 'NEURAL NETWORKS',
    glowColor: 'hover:border-indigo-400/50 hover:shadow-[0_0_25px_rgba(108,92,231,0.2)]',
  },
  {
    id: 'svc-uiux',
    icon: Layout,
    title: 'UI/UX Design',
    description:
      'Interface design grounded in user research, motion, and accessibility — not just visual polish.',
    category: 'DESIGN SYSTEM',
    glowColor: 'hover:border-pink-400/50 hover:shadow-[0_0_25px_rgba(244,114,182,0.2)]',
  },
  {
    id: 'svc-saas',
    icon: Cloud,
    title: 'SaaS Development',
    description:
      'Multi-tenant platforms with subscription billing, role-based access, and infrastructure that scales with usage.',
    category: 'CLOUD SCALE',
    glowColor: 'hover:border-sky-400/50 hover:shadow-[0_0_25px_rgba(14,165,233,0.2)]',
  },
  {
    id: 'svc-maint',
    icon: Wrench,
    title: 'App Maintenance & Support',
    description:
      'Ongoing monitoring, OS-update readiness, and performance tuning long after launch day.',
    category: 'LIFECYCLE OPS',
    glowColor: 'hover:border-emerald-400/50 hover:shadow-[0_0_25px_rgba(52,211,153,0.2)]',
  },
  {
    id: 'svc-custom',
    icon: Code2,
    title: 'Custom Software Development',
    description:
      "Bespoke internal tools and platforms built around workflows off-the-shelf software can't match.",
    category: 'ENGINEERING',
    glowColor: 'hover:border-amber-400/50 hover:shadow-[0_0_25px_rgba(251,191,36,0.2)]',
  },
  {
    id: 'svc-publishing',
    icon: Rocket,
    title: 'App Publishing & Play Store 12-Tester Testing',
    description:
      'End-to-end rollout support — full compliance with Google Play 12-tester / 20-tester closed testing rules, app publishing, listings, and production rollout.',
    category: 'STORE ROLLOUT',
    glowColor: 'hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(0,245,212,0.25)]',
  },
  {
    id: 'svc-qa',
    icon: CheckCircle2,
    title: 'Testing & QA Services',
    description:
      'Manual and automated testing across devices and OS versions to catch bugs, crashes, and edge cases before your users do.',
    category: 'QUALITY SHIELD',
    glowColor: 'hover:border-violet-400/50 hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#02050f] overflow-hidden">
      {/* Background Cyber-Ocean Grids & Beams */}
      <div className="absolute inset-0 cyber-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-600/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono tracking-widest text-cyan-300 uppercase mb-4 shadow-[0_0_15px_rgba(0,245,212,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>What We Build</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
            Full-stack app development,{' '}
            <span className="cyber-ocean-gradient-text">powered by AI</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From native mobile builds to the machine learning models running inside them, we cover every layer of the stack.
          </p>
        </div>

        {/* 10 Services Grid (Cyber-Ocean Cards with Glassmorphism & Neon Hover) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((svc, index) => {
            const IconComponent = svc.icon;
            // Span 2 columns on larger screens for the last 2 items (9 and 10) to make an exquisite layout balance
            const isWide = index === 8 || index === 9;

            return (
              <div
                key={svc.id}
                className={`group relative rounded-2xl cyber-glass p-7 border border-slate-800/90 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden ${svc.glowColor} ${
                  isWide ? 'lg:col-span-1 xl:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Neon Corner Accent Line */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  {/* Category Pill & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(0,245,212,0.15)] group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="font-mono text-[10px] tracking-wider px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-400 group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-colors">
                      {svc.category}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {svc.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {svc.description}
                  </p>
                </div>

                {/* Cyber Matrix Footer Indicator */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500 group-hover:text-slate-400">
                  <span>SPEC // 0{index + 1}</span>
                  <span className="flex items-center gap-1 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    DEPLOYABLE <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
