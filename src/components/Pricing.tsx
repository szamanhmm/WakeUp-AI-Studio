import { Check, Sparkles, ArrowRight, Shield } from 'lucide-react';

interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceSuffix?: string;
  period: string;
  features: string[];
  ctaText: string;
  featured?: boolean;
  badge?: string;
  serviceValue: string;
}

const PLANS: PricingPlan[] = [
  {
    id: 'plan-starter',
    name: 'Starter',
    tagline: 'For a focused MVP or single-platform app.',
    price: '$4,900',
    priceSuffix: '+',
    period: 'One-time project',
    features: [
      'Single platform (iOS or Android)',
      'Core feature set, up to 6 screens',
      'UI/UX design included',
      '30 days post-launch support',
    ],
    ctaText: 'Choose Starter',
    featured: false,
    serviceValue: 'Starter Package ($4,900+)',
  },
  {
    id: 'plan-professional',
    name: 'Professional',
    badge: 'Most Popular',
    tagline: 'For growing products that need both platforms and AI.',
    price: '$14,900',
    priceSuffix: '+',
    period: 'One-time project',
    features: [
      'iOS & Android native apps',
      'AI/ML feature integration',
      'Custom backend & API',
      '90 days post-launch support',
      'Dedicated project manager',
    ],
    ctaText: 'Choose Professional',
    featured: true,
    serviceValue: 'Professional Package ($14,900+)',
  },
  {
    id: 'plan-enterprise',
    name: 'Enterprise',
    tagline: 'For complex SaaS platforms and custom systems.',
    price: 'Custom',
    period: 'Scoped to requirements',
    features: [
      'Multi-platform + SaaS architecture',
      'Custom ML model development',
      'Dedicated engineering pod',
      'SLA-backed ongoing support',
      'Security & compliance review',
    ],
    ctaText: 'Talk to Sales',
    featured: false,
    serviceValue: 'Enterprise Package (Custom)',
  },
];

export default function Pricing() {
  const handleSelectPlan = (serviceValue: string) => {
    // 1. Update hash with selected package
    window.location.hash = `contact?package=${encodeURIComponent(serviceValue)}`;

    // 2. Dispatch event for instant reactive update in Contact form
    window.dispatchEvent(
      new CustomEvent('select-service', {
        detail: serviceValue,
      })
    );

    // 3. Smooth scroll to contact section
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }

    // 4. Highlight & focus the service dropdown in the form
    setTimeout(() => {
      const selectEl = document.getElementById('service') as HTMLSelectElement | null;
      if (selectEl) {
        selectEl.focus();
        selectEl.classList.add('ring-2', 'ring-cyan-400');
        setTimeout(() => {
          selectEl.classList.remove('ring-2', 'ring-cyan-400');
        }, 1800);
      }
    }, 450);
  };
  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-[#02050f] overflow-hidden">
      {/* Background Cyber Glow & Grid */}
      <div className="absolute inset-0 cyber-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono tracking-widest text-cyan-300 uppercase mb-4 shadow-[0_0_15px_rgba(0,245,212,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Pricing</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
            Plans that scale with{' '}
            <span className="cyber-ocean-gradient-text">your product</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Every engagement starts with a free consultation to scope the right plan for you.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 ${
                plan.featured
                  ? 'bg-gradient-to-b from-slate-900/90 via-slate-950/95 to-slate-900/90 border-2 border-cyan-400/80 shadow-[0_0_40px_rgba(0,245,212,0.25)]'
                  : 'cyber-glass-card border border-slate-800/90 hover:border-cyan-500/40'
              }`}
            >
              {/* Featured Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 right-8 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 text-[#030712] font-mono text-[11px] font-extrabold tracking-wider uppercase shadow-[0_0_15px_rgba(0,245,212,0.6)]">
                  {plan.badge}
                </div>
              )}

              <div>
                {/* Plan Name & Tagline */}
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-slate-400 mb-6 min-h-[40px] leading-relaxed">
                  {plan.tagline}
                </p>

                {/* Amount */}
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-mono text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                    {plan.price}
                  </span>
                  {plan.priceSuffix && (
                    <span className="font-mono text-2xl text-cyan-400 font-bold">
                      {plan.priceSuffix}
                    </span>
                  )}
                </div>

                {/* Period */}
                <div className="text-xs font-mono text-slate-400 mb-8 tracking-wider">
                  {plan.period}
                </div>

                {/* Divider */}
                <div className="h-px bg-slate-800/90 mb-8" />

                {/* Feature List */}
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={`#contact?package=${encodeURIComponent(plan.serviceValue)}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSelectPlan(plan.serviceValue);
                  }}
                  className={`w-full py-4 px-6 rounded-2xl flex items-center justify-center gap-2 font-semibold text-sm transition-all duration-300 ${
                    plan.featured
                      ? 'bg-gradient-to-r from-cyan-400 to-indigo-400 text-[#030712] hover:shadow-[0_0_25px_rgba(0,245,212,0.6)] hover:-translate-y-0.5'
                      : 'bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-cyan-500/50 hover:text-cyan-300'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* NDA & IP Transfer Assurance Banner */}
        <div className="mt-12 p-6 rounded-2xl cyber-glass border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 flex-shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-sm">
                100% Intellectual Property (IP) Ownership Transfer
              </h4>
              <p className="text-xs text-slate-400">
                Mutual NDAs signed before discussion. All source code, designs, and credentials belong to you upon completion.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 underline underline-offset-4 whitespace-nowrap"
          >
            REQUEST NDA COPY &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
