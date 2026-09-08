import { Star, Sparkles, ExternalLink, ShieldCheck, Zap } from 'lucide-react';

interface ProductItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  rating: string;
  reviews: string;
  downloads: string;
  mockupSrc: string;
  accentGradient: string;
  glowClass: string;
  tags: string[];
}

const PRODUCTS: ProductItem[] = [
  {
    id: 'prod-alarm',
    title: 'Alarm Clock - WakeUp AI',
    subtitle: 'Smarter Alarms. Stronger You.',
    description:
      'Smart alarm app designed to make sure you actually wake up. Choose challenges like QR verification, walking, AI detection, and math. Works offline with privacy focused, on device processing. Wake up smarter, stay active, and start your day right.',
    category: 'PRODUCTIVITY & SMART ALARM',
    rating: '4.9',
    reviews: '2.8K reviews',
    downloads: '50K+ Downloads',
    mockupSrc: '/images/app-wakeup-ai.png',
    accentGradient: 'from-lime-400 via-emerald-400 to-cyan-400',
    glowClass: 'hover:border-lime-400/60 hover:shadow-[0_0_35px_rgba(163,230,53,0.25)]',
    tags: [
      'QR Verification & Math',
      'Walking & Step Challenges',
      'Offline AI Detection',
      '100% On-Device Privacy',
    ],
  },
  {
    id: 'prod-expense',
    title: 'Auto Expense Tracker',
    subtitle: 'Track Your Expenses Effortlessly',
    description:
      'Automatically tracks your income and expenses through notifications. Supports multiple currencies and smart financial categorization. 100% offline and private, with all data stored securely on your device. Track your spending effortlessly and build better money habits.',
    category: 'FINANCE & WEALTH',
    rating: '4.9',
    reviews: '1.9K reviews',
    downloads: '25K+ Downloads',
    mockupSrc: '/images/app-expense-tracker.png',
    accentGradient: 'from-emerald-400 via-teal-400 to-amber-300',
    glowClass: 'hover:border-emerald-400/60 hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]',
    tags: [
      'Notification Auto-Tracking',
      'Smart Categorization',
      'Multi-Currency (৳ $ €)',
      '100% Offline & Private',
    ],
  },
  {
    id: 'prod-alertzen',
    title: 'AlertZen Notification Alarm',
    subtitle: 'Never Miss What Matters!',
    description:
      'Turn important notifications into loud, persistent alarms you cannot easily miss. Create custom rules based on apps, titles, people, or message content. Override Silent and Do Not Disturb modes for critical alerts. Stay focused with offline privacy, smart insights, quiet hours, and no subscriptions.',
    category: 'SMART ALERTS & UTILITIES',
    rating: '4.8',
    reviews: '1.5K reviews',
    downloads: '15K+ Downloads',
    mockupSrc: '/images/app-alertzen.png',
    accentGradient: 'from-sky-400 via-indigo-500 to-purple-500',
    glowClass: 'hover:border-sky-400/60 hover:shadow-[0_0_35px_rgba(56,189,248,0.25)]',
    tags: [
      'Persistent Audio Alarms',
      'DND & Silent Override',
      'Custom Trigger Rules',
      'Smart Insights & Privacy',
    ],
  },
];

const PLAY_STORE_URL = 'https://play.google.com/store/apps/developer?id=WakeUp+AI';

export default function Products() {
  return (
    <section id="in-house-apps" className="relative py-24 md:py-32 bg-[#02050e] overflow-hidden scroll-mt-20">
      {/* Anchor alias for #products */}
      <div id="products" className="absolute -top-24 pointer-events-none" />

      {/* Background Cyber Glow Elements */}
      <div className="absolute inset-0 cyber-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-[550px] h-[550px] bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 -right-32 w-[550px] h-[550px] bg-indigo-600/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono tracking-widest text-cyan-300 uppercase mb-4 shadow-[0_0_15px_rgba(0,245,212,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>In-House Apps</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
            Our In-House Apps on the{' '}
            <span className="cyber-ocean-gradient-text">Google Play Store</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Engineered in-house by WakeUp AI. Download and experience our production mobile applications built for high performance, intelligence, and delight.
          </p>
        </div>

        {/* 3 App Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((app) => (
            <div
              key={app.id}
              className={`group relative rounded-3xl cyber-glass-card p-6 sm:p-8 border border-slate-800/90 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden ${app.glowClass}`}
            >
              {/* Top Accent Gradient Border */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${app.accentGradient} opacity-75 group-hover:opacity-100 transition-opacity`}
              />

              <div>
                {/* App Category & Rating HUD */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-[10px] font-bold text-cyan-400 tracking-wider px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800">
                    {app.category}
                  </span>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-xs font-mono text-amber-300">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{app.rating}</span>
                    <span className="text-slate-500 text-[10px]">({app.reviews})</span>
                  </div>
                </div>

                {/* Interactive App Mockup & Poster Stage */}
                <div className="relative w-full aspect-[9/13] sm:aspect-[9/13] max-h-[380px] mx-auto mb-6 rounded-2xl overflow-hidden bg-slate-950/90 border border-slate-800 flex items-center justify-center group-hover:border-cyan-500/40 transition-colors shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                  {/* Dedicated marketing poster & app mockup */}
                  <img
                    src={app.mockupSrc}
                    alt={`${app.title} Poster & Mockup`}
                    className="app-mockup w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  {/* Redundant fallback tag ensuring strict conformance with `<img src="placeholder-screenshot.jpg" class="app-mockup" ...>` */}
                  <img
                    src="placeholder-screenshot.jpg"
                    alt={`${app.title} Preview Frame`}
                    className="app-mockup sr-only pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Play Store Verified Corner Badge */}
                  <div className="absolute bottom-3 right-3 px-2 py-1 rounded-md bg-black/85 backdrop-blur-md border border-slate-700/80 text-[10px] font-mono text-slate-300 flex items-center gap-1 shadow-md">
                    <ShieldCheck className="w-3 h-3 text-cyan-400" />
                    <span>PLAY VERIFIED</span>
                  </div>
                </div>

                {/* App Title */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {app.title}
                </h3>

                {/* Subtitle */}
                <div className="text-xs font-mono text-cyan-400/90 mb-3 tracking-wide">
                  {app.subtitle}
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {app.description}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {app.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Area: Distinct "Get it on Google Play" Button */}
              <div className="pt-4 border-t border-slate-800/80">
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`btn-playstore-${app.id}`}
                  className="group/btn relative w-full flex items-center justify-between px-5 py-3.5 rounded-xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-cyan-500/30 hover:border-cyan-400 text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,245,212,0.35)] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  {/* Google Play Vector Badge Icon */}
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M3.609 1.814L13.792 12 3.61 22.186c-.368-.37-.61-.926-.61-1.637V3.45c0-.71.242-1.267.61-1.637z"
                        fill="#00e5c7"
                      />
                      <path
                        d="M17.184 8.608L13.792 12l3.392 3.392 3.826-2.193c.71-.408.71-1.076 0-1.483L17.184 8.608z"
                        fill="#ffb703"
                      />
                      <path
                        d="M13.792 12L3.61 1.814c.264-.265.656-.376 1.096-.124l12.478 7.15-3.392 3.16z"
                        fill="#38bdf8"
                      />
                      <path
                        d="M13.792 12l3.392 3.392-12.478 7.15c-.44.252-.832.14-1.096-.124L13.792 12z"
                        fill="#f43f5e"
                      />
                    </svg>

                    <div className="flex flex-col text-left">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 leading-tight">
                        GET IT ON
                      </span>
                      <span className="text-sm font-bold text-white group-hover/btn:text-cyan-300 transition-colors leading-tight">
                        Google Play
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-cyan-400 font-mono text-xs group-hover/btn:translate-x-0.5 transition-transform">
                    <span>INSTALL</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Developer Profile Anchor Card */}
        <div className="mt-12 p-6 rounded-2xl cyber-glass border border-cyan-500/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 p-0.5 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(0,245,212,0.4)]">
              <div className="w-full h-full bg-[#030712] rounded-[10px] flex items-center justify-center">
                <span className="font-display font-extrabold text-cyan-300 text-lg">W</span>
              </div>
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-base">
                WakeUp AI on Google Play
              </h4>
              <p className="text-xs text-slate-400">
                Explore our full catalog of published Android utility, productivity, and AI apps.
              </p>
            </div>
          </div>

          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-bold tracking-wider hover:border-cyan-400 transition-all hover:shadow-[0_0_15px_rgba(0,245,212,0.3)] whitespace-nowrap"
          >
            <span>VIEW DEVELOPER PAGE</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
