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

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-[#eef0fb] selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sticky Header with Vector Logo and Hamburger Navigation */}
      <Header />

      {/* Main Section */}
      <main id="main">
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
      </main>

      {/* Phase 5: Footer & Corporate Branding */}
      <Footer />
    </div>
  );
}
