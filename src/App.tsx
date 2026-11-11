import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import ClientsSection from './components/ClientsSection';
import Process from './components/Process';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TermsPage from './components/TermsPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import VideoCameraPrivacyPolicyPage from './components/VideoCameraPrivacyPolicyPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const normalizePath = (path: string) => path.replace(/\/$/, '').toLowerCase();
  const normalized = normalizePath(currentPath);

  const isTerms = normalized === '/terms';
  const isPrivacy = normalized === '/privacy-policy' || normalized === '/privacy';
  const isVideoCameraPrivacy = normalized === '/videocamera/privacy-policy';

  return (
    <div className="min-h-screen bg-[#030712] text-[#eef0fb] selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Skip Link prior to Header Navigation */}
      <a
        href={isVideoCameraPrivacy ? '#main-heading' : '#main'}
        className="vc-skip-link vc-visually-hidden"
      >
        Skip to main content
      </a>

      {/* Sticky Header */}
      <Header />

      {/* Main Section */}
      <main id="main" tabIndex={-1} className="focus:outline-none">
        {isVideoCameraPrivacy ? (
          <VideoCameraPrivacyPolicyPage />
        ) : isTerms ? (
          <TermsPage />
        ) : isPrivacy ? (
          <PrivacyPolicyPage />
        ) : (
          <>
            {/* Phase 1: Base Setup & Cyber-Ocean Hero Section */}
            <Hero />

            {/* Phase 2: About & In-House Apps Showcase */}
            <About />
            <Products />
            <Services />

            {/* Clients and Project Section with Infinite Auto Swiping */}
            <ClientsSection />

            {/* Phase 2: Process Section */}
            <Process />

            {/* Phase 4: Pricing, FAQ, and Functional Contact Form */}
            <Pricing />
            <FAQ />
            <Contact />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
