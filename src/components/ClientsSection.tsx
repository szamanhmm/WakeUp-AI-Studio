import React from 'react';
import { Briefcase, Sparkles } from 'lucide-react';

export interface ClientItem {
  name: string;
  src: string;
  website: string;
}

export const clientLogos: ClientItem[] = [
  { name: 'Green Step Trading', src: '/images/client-greenstep.png', website: 'https://greensteptrading.com/' },
  { name: 'Waada Care Limited', src: '/images/client-waada.png', website: 'https://waada.care' },
  { name: 'Pawfect Notes', src: '/images/client-pawfect.png', website: 'https://www.pawfectnotes.com/' },
  { name: 'Bling (MidyaTech IT)', src: '/images/client-bling.png', website: 'https://bling-iq.com/' },
  { name: '(Blackbook) BBK', src: '/images/client-bbk.png', website: 'https://bbk.me' },
  { name: 'Outlast', src: '/images/client-outlast.png', website: 'https://getoutlast.com/' },
  { name: 'Closetfestive', src: '/images/client-closetfestive.jpg', website: '#' },
  { name: 'Junfrau Labs', src: '/images/client-junfrau.png', website: 'https://www.wizkid.app/' },
  { name: 'Payfran', src: '/images/client-payfran.png', website: 'https://www.payfran.com/' },
  { name: 'Advise', src: '/images/client-advise.png', website: 'https://advisemycampus.com/' },
  { name: 'Locus California', src: '/images/client-locus.png', website: 'https://focusreintel.com/' },
  { name: 'Thriveher', src: '/images/client-thriveher.png', website: 'https://thriveher.passion.io' },
  { name: 'BuyOneAuto', src: '/images/client-buyoneauto.png', website: 'https://buyoneautogroup.com/' },
  { name: 'Amori', src: '/images/client-amori.png', website: 'https://amori.life/' },
  { name: 'Robowork', src: '/images/client-robowork.png', website: 'http://robowork.io/' },
  { name: 'Subfeed', src: '/images/client-subfeed.png', website: 'https://subfeed.com' },
  { name: 'Top Performer Construction', src: '/images/client-topperformer.png', website: 'https://topperformerconstruction.com/' },
  { name: 'Finbotica', src: '/images/client-finbotica.png', website: 'https://finbotica.com/' },
  { name: 'Mums Laundry', src: '/images/client-mumslaundry.png', website: 'https://mumslaundry.ph/' },
  { name: 'ApisAero', src: '/images/client-apisaero.png', website: 'https://apisaero.com/' },
];

export default function ClientsSection() {
  return (
    <section
      id="portfolio"
      className="relative py-20 md:py-28 bg-[#01040d] border-t border-b border-slate-800/80 overflow-hidden scroll-mt-20"
    >
      {/* Anchor alias for #clients so both #portfolio and #clients scroll here */}
      <div id="clients" className="absolute -top-24 pointer-events-none" />

      {/* Background Cyber Aesthetics */}
      <div className="absolute inset-0 cyber-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-r from-indigo-600/10 via-cyan-500/10 to-teal-400/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono tracking-widest text-cyan-300 uppercase mb-4 shadow-[0_0_15px_rgba(0,245,212,0.15)]">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>Proven Track Record</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-3">
            Clients &amp; Projects
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
            We&apos;re Proud to Work With:
          </p>

          {/* Cyan / Green Glowing Center Divider */}
          <div className="inline-block w-24 h-1 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 rounded-full mt-4 shadow-[0_0_12px_rgba(0,245,212,0.6)]" />
        </div>

        {/* One Line of Client Auto Swiping (Infinite Continuous Marquee) */}
        <div
          aria-label="Client & Partner Logos Marquee"
          className="w-full inline-flex flex-nowrap overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
        >
          {/* Primary Track */}
          <div className="flex items-center justify-center md:justify-start animate-scroll flex-shrink-0">
            {clientLogos.map((client, index) => (
              <a
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                title={`${client.name} - Visit Website`}
                className="mx-6 sm:mx-8 flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-105"
                key={`${client.name}-${index}-1`}
              >
                <img
                  src={client.src}
                  alt={client.name}
                  className="max-h-14 sm:max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
                />
              </a>
            ))}
          </div>

          {/* Duplicate Seamless Loop Track */}
          <div
            className="flex items-center justify-center md:justify-start animate-scroll flex-shrink-0"
            aria-hidden="true"
          >
            {clientLogos.map((client, index) => (
              <a
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                className="mx-6 sm:mx-8 flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-105"
                key={`${client.name}-${index}-2`}
              >
                <img
                  src={client.src}
                  alt={client.name}
                  className="max-h-14 sm:max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Metrics Pill */}
        <div className="mt-12 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full cyber-glass border border-slate-800 text-xs font-mono text-slate-400">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Over 20+ Enterprise, Startup, and E-Commerce Partners Globally</span>
          </div>
        </div>
      </div>
    </section>
  );
}
