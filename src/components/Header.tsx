import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'In-House Apps', href: '#in-house-apps' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const isHome = window.location.pathname === '/' || window.location.pathname === '';

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#030712]/85 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* Logo with explicit <img> tag and alt="WakeUp AI Logo" */}
          <a
            href={isHome ? '#top' : '/'}
            id="header-logo-link"
            className="group flex items-center gap-3 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
          >
            <div className="relative flex items-center">
              <img
                src="/wakeup-ai-logo.svg"
                alt="WakeUp AI Logo"
                width="144"
                height="36"
                fetchPriority="high"
                className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_12px_rgba(0,245,212,0.4)]"
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={isHome ? item.href : `/${item.href}`}
                className="text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors duration-200 relative group py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-300 group-hover:w-full rounded-full shadow-[0_0_8px_rgba(0,245,212,0.8)]" />
              </a>
            ))}
          </div>

          {/* Desktop Header Actions */}
          <div className="hidden sm:flex items-center gap-4">
            {/* HUD Status Pill */}
            <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-900/60 border border-cyan-500/20 text-[11px] font-mono text-cyan-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_6px_#00f5d4]" />
              <span>STUDIO ONLINE</span>
            </div>

            {/* Get Started Button */}
            <a
              href={isHome ? '#contact' : '/#contact'}
              id="header-cta-btn"
              className="relative group overflow-hidden px-5 py-2.5 rounded-full text-sm font-semibold text-[#030712] transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,245,212,0.55)] hover:-translate-y-0.5"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 transition-transform duration-500 group-hover:scale-105" />
              <span className="relative flex items-center gap-1.5">
                <span>Get Started</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-cyan-300 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        id="mobile-nav-drawer"
        className={`sm:hidden fixed inset-x-0 top-[60px] bg-[#030712]/95 backdrop-blur-2xl border-b border-cyan-500/25 px-6 py-8 transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.8)] ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <span className="text-xs font-mono text-cyan-400 tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              NAVIGATION MATRIX
            </span>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>SYS.READY</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={isHome ? item.href : `/${item.href}`}
                onClick={closeMenu}
                className="px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-sm font-medium text-slate-200 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-3">
            <a
              href={isHome ? '#contact' : '/#contact'}
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-[#030712] font-semibold text-sm shadow-[0_0_20px_rgba(0,245,212,0.4)]"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
