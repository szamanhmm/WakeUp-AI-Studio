import { ArrowUp, ExternalLink, Shield, Handshake } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-[#01030a] border-t border-cyan-500/20 pt-16 pb-12 overflow-hidden text-slate-400">
      {/* Background Cyber Glow & Grid */}
      <div className="absolute inset-0 cyber-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-slate-800/80">
          
          {/* Column 1: Brand & C4U TECH Strategic Partner Badge */}
          <div className="lg:col-span-2 flex flex-col items-start pr-0 lg:pr-6">
            {/* Logo */}
            <a href="#top" className="inline-flex items-center gap-3 mb-5 group">
              <img
                src="/wakeup-ai-logo.svg"
                alt="WakeUp AI Logo"
                className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            <p className="text-sm text-slate-300 leading-relaxed mb-6 max-w-sm">
              WakeUp AI designs and builds Android, iOS, and SaaS products. Turning early-stage ideas into applications that think, adapt, and scale.
            </p>

            {/* Strategic Partner Recognition - Powered by C4U TECH */}
            <div className="p-4 rounded-2xl cyber-glass border border-cyan-500/30 bg-gradient-to-r from-slate-950 via-slate-900 to-[#030d1b] w-full max-w-sm shadow-[0_0_20px_rgba(0,245,212,0.15)] mb-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-0.5">
                    STRATEGIC TECH PARTNER
                  </span>
                  <div className="flex items-center gap-1.5 font-display font-bold text-white text-sm">
                    <span>Powered by</span>
                    <a
                      href="https://c4utech.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 font-extrabold hover:underline"
                    >
                      <span>C4U TECH</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00f5d4]" />
              </div>
            </div>

            {/* Business Manager Card */}
            <div className="p-3.5 rounded-2xl cyber-glass border border-slate-800/90 bg-slate-950/80 w-full max-w-sm">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-0.5">
                    BUSINESS MANAGER
                  </span>
                  <div className="text-sm font-semibold text-white">
                    Saifuz Zaman
                  </div>
                </div>
                <a
                  href="https://www.upwork.com/freelancers/~017c08c6bfe9705ad6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 transition-colors"
                >
                  <span>Upwork Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.linkedin.com/showcase/wakeup-ai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Showcase"
                className="w-9 h-9 rounded-xl cyber-glass border border-slate-800 text-slate-300 hover:text-[#030712] hover:bg-cyan-400 hover:border-cyan-400 flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,245,212,0.4)]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              <a
                href="https://instagram.com/wakeupai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl cyber-glass border border-slate-800 text-slate-300 hover:text-[#030712] hover:bg-cyan-400 hover:border-cyan-400 flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,245,212,0.4)]"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#about" className="hover:text-cyan-300 transition-colors">
                  About Studio
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#in-house-apps" className="hover:text-cyan-300 transition-colors">
                  In-House Apps
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-cyan-300 transition-colors">
                  Clients &amp; Projects
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-cyan-300 transition-colors">
                  7-Stage Process
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cyan-300 transition-colors">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-300 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-300 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Services */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">
                  Android App Engineering
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">
                  iOS Native Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">
                  AI &amp; LLM Integration
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">
                  Machine Learning Models
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">
                  Cyber UI/UX Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">
                  SaaS Cloud Architecture
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">
                  App Store QA &amp; Publishing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Google Play Products & Connect */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">
              Products &amp; Network
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://play.google.com/store/apps/developer?id=WakeUp+AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Google Play Catalog</span>
                  <ExternalLink className="w-3 h-3 text-cyan-400" />
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-cyan-300 transition-colors">
                  Alarm Clock - WakeUp AI
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-cyan-300 transition-colors">
                  Auto Expense Tracker
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-cyan-300 transition-colors">
                  AlertZen Notification Alarm
                </a>
              </li>
              <li className="pt-2 border-t border-slate-800/80">
                <a
                  href="https://www.linkedin.com/showcase/wakeup-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5 transition-colors font-medium"
                >
                  <span>LinkedIn Showcase</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.upwork.com/freelancers/~017c08c6bfe9705ad6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5 transition-colors font-medium"
                >
                  <span>Saifuz Zaman (Upwork)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} WakeUp AI. All rights reserved.</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-300 hidden sm:inline">
              Powered by{' '}
              <a
                href="https://c4utech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-bold underline underline-offset-2"
              >
                C4U TECH
              </a>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-cyan-400/80">
              <Shield className="w-3.5 h-3.5" />
              <span>SSL 256-BIT SECURE</span>
            </span>

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 transition-all hover:shadow-[0_0_15px_rgba(0,245,212,0.3)] hover:-translate-y-0.5"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </footer>
  );
}
