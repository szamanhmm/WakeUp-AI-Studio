import { Shield, FileText, CheckCircle2, ArrowLeft, Mail, ExternalLink } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 bg-[#030712] relative overflow-hidden text-slate-300 min-h-screen">
      {/* Background Aesthetics */}
      <div className="absolute inset-0 cyber-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Link */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </a>

        {/* Page Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono tracking-widest text-cyan-300 uppercase mb-4 shadow-[0_0_15px_rgba(0,245,212,0.15)]">
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>Legal &amp; Governance</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
            Terms of Service
          </h1>

          <p className="text-slate-400 text-sm font-mono">
            EFFECTIVE DATE: OCTOBER 2026 • LAST REVISED: CURRENT VERSION
          </p>
        </div>

        {/* Content Container */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed">
          {/* Overview */}
          <section className="p-6 sm:p-8 rounded-2xl cyber-glass border border-slate-800/90 bg-slate-950/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <h2 className="font-display text-xl font-bold text-white mb-3 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4]" />
              1. Acceptance of Terms
            </h2>
            <p className="text-slate-300">
              By accessing, browsing, or using the WakeUp AI website, applications, or software engineering services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.
            </p>
          </section>

          {/* Services Scope */}
          <section className="p-6 sm:p-8 rounded-2xl cyber-glass border border-slate-800/90 bg-slate-950/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <h2 className="font-display text-xl font-bold text-white mb-3 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4]" />
              2. Scope of Services
            </h2>
            <p className="text-slate-300 mb-4">
              WakeUp AI designs, develops, and delivers mobile applications, artificial intelligence integrations, SaaS solutions, and mobile app publishing assistance. Our deliverables include:
            </p>
            <ul className="space-y-2 text-slate-300 list-disc list-inside pl-2">
              <li>Custom mobile app engineering for Android and iOS platforms.</li>
              <li>AI model integration, neural pipelines, and machine learning infrastructure.</li>
              <li>Google Play Store 12-tester / 20-tester closed testing management and publishing support.</li>
              <li>In-house production mobile applications distributed via official app stores.</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="p-6 sm:p-8 rounded-2xl cyber-glass border border-slate-800/90 bg-slate-950/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <h2 className="font-display text-xl font-bold text-white mb-3 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4]" />
              3. Intellectual Property Rights
            </h2>
            <div className="space-y-3 text-slate-300">
              <p>
                <strong className="text-white">Client Custom Builds:</strong> Upon full payment of project invoices, full ownership of custom code, designs, and intellectual property developed specifically for a client transfers to the client as stipulated in individual service contracts.
              </p>
              <p>
                <strong className="text-white">WakeUp AI In-House Apps &amp; Brand Assets:</strong> All proprietary software products published directly by WakeUp AI (including <em>Alarm Clock - WakeUp AI</em>, <em>Auto Expense Tracker</em>, and <em>AlertZen Notification Alarm</em>), visual interfaces, trademarks, and logos remain the exclusive intellectual property of WakeUp AI.
              </p>
            </div>
          </section>

          {/* User Responsibilities & App Rules */}
          <section className="p-6 sm:p-8 rounded-2xl cyber-glass border border-slate-800/90 bg-slate-950/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <h2 className="font-display text-xl font-bold text-white mb-3 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4]" />
              4. App Usage &amp; User Rules
            </h2>
            <p className="text-slate-300 mb-3">
              When using WakeUp AI applications or interacting with our platform, you agree that you will not:
            </p>
            <ul className="space-y-2 text-slate-300 list-disc list-inside pl-2">
              <li>Attempt to reverse-engineer, decompile, or disassemble any binary code or AI models provided.</li>
              <li>Interfere with security, local storage encryption, or underlying application logic.</li>
              <li>Use our software or services for any unlawful purpose or in violation of regional regulations.</li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section className="p-6 sm:p-8 rounded-2xl cyber-glass border border-slate-800/90 bg-slate-950/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <h2 className="font-display text-xl font-bold text-white mb-3 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4]" />
              5. Limitation of Liability
            </h2>
            <p className="text-slate-300">
              To the maximum extent permitted by applicable law, WakeUp AI and its partners (including C4U TECH) shall not be liable for any indirect, incidental, consequential, or punitive damages resulting from your access to or use of our applications, website, or software services. All services are provided with reasonable professional care as specified in project scopes.
            </p>
          </section>

          {/* Contact Information */}
          <section className="p-6 sm:p-8 rounded-2xl cyber-glass border border-cyan-500/30 bg-slate-950/80 shadow-[0_0_25px_rgba(0,245,212,0.1)]">
            <div className="flex items-center gap-3 mb-3">
              <Mail className="w-5 h-5 text-cyan-400" />
              <h2 className="font-display text-xl font-bold text-white">
                6. Contact &amp; Legal Inquiries
              </h2>
            </div>
            <p className="text-slate-300 mb-4">
              If you have any questions regarding these Terms of Service or require clarification on licensing and service contracts, please reach out to our team directly:
            </p>
            <a
              href="mailto:wakeup.ai.dev@gmail.com"
              className="inline-flex items-center gap-2 text-cyan-400 font-mono font-bold hover:text-cyan-300 underline underline-offset-4"
            >
              <span>wakeup.ai.dev@gmail.com</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
