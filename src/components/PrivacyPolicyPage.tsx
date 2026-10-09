import { Shield, Lock, CheckCircle2, ArrowLeft, Mail, ExternalLink, Cpu } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
            <Lock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Data &amp; Privacy Shield</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
            Privacy Policy
          </h1>

          <p className="text-slate-400 text-sm font-mono">
            EFFECTIVE DATE: OCTOBER 2026 • PRIVACY COMMITMENT: 100% ON-DEVICE FIRST
          </p>
        </div>

        {/* Content Container */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed">
          {/* Overview */}
          <section className="p-6 sm:p-8 rounded-2xl cyber-glass border border-slate-800/90 bg-slate-950/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <h2 className="font-display text-xl font-bold text-white mb-3 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4]" />
              1. Our Privacy Philosophy
            </h2>
            <p className="text-slate-300">
              At WakeUp AI, privacy is built into our software architecture, not added as an afterthought. Whether you use our website, consult on app development, or install our mobile applications from Google Play or App Store, we operate under a strict privacy-first principle: your data remains your data.
            </p>
          </section>

          {/* Data Collection */}
          <section className="p-6 sm:p-8 rounded-2xl cyber-glass border border-slate-800/90 bg-slate-950/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <h2 className="font-display text-xl font-bold text-white mb-3 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4]" />
              2. Information We Collect
            </h2>
            <div className="space-y-4 text-slate-300">
              <div>
                <strong className="text-white block mb-1">A. Web Contact Inquiries:</strong>
                <span>
                  When you submit a project inquiry via our website contact form, we collect your full name, email address, selected service category, and project description solely to evaluate your scope and respond to your message.
                </span>
              </div>
              <div>
                <strong className="text-white block mb-1">B. In-House Mobile Applications:</strong>
                <span>
                  Our mobile apps (<em>Alarm Clock - WakeUp AI</em>, <em>Auto Expense Tracker</em>, and <em>AlertZen Notification Alarm</em>) are designed to process data locally on your device. Alarm rules, notification parsing, step counting, and financial logs stay 100% offline and stored on your hardware. We do not upload your personal activity or financial records to external servers.
                </span>
              </div>
              <div>
                <strong className="text-white block mb-1">C. Technical Telemetry:</strong>
                <span>
                  We do not run invasive tracking cookies or sale-oriented ad scripts on our site or within our utility applications.
                </span>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="p-6 sm:p-8 rounded-2xl cyber-glass border border-slate-800/90 bg-slate-950/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <h2 className="font-display text-xl font-bold text-white mb-3 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4]" />
              3. How We Use Information
            </h2>
            <p className="text-slate-300 mb-3">
              Any information received is strictly utilized for the following legitimate business purposes:
            </p>
            <ul className="space-y-2 text-slate-300 list-disc list-inside pl-2">
              <li>Communicating with you regarding custom app development, publishing, or closed testing projects.</li>
              <li>Delivering mobile software engineering, AI integrations, and technical support.</li>
              <li>Fulfilling contractual agreements and verifying app store rollout requirements.</li>
            </ul>
            <p className="text-cyan-400 font-mono text-xs mt-4">
              GUARANTEE: WE NEVER SELL, RENT, OR MONETIZE USER DATA TO THIRD PARTIES.
            </p>
          </section>

          {/* Data Security */}
          <section className="p-6 sm:p-8 rounded-2xl cyber-glass border border-slate-800/90 bg-slate-950/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <h2 className="font-display text-xl font-bold text-white mb-3 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4]" />
              4. Security &amp; Encryption
            </h2>
            <p className="text-slate-300">
              All website transmissions are protected using standard 256-bit SSL encryption. Project communications and intellectual property discussed under NDA are restricted to authorized engineering staff.
            </p>
          </section>

          {/* Third Party Links */}
          <section className="p-6 sm:p-8 rounded-2xl cyber-glass border border-slate-800/90 bg-slate-950/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <h2 className="font-display text-xl font-bold text-white mb-3 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4]" />
              5. Third-Party Services
            </h2>
            <p className="text-slate-300">
              Our website and applications contain links to trusted external platforms (Google Play Store, Upwork, LinkedIn, and C4U TECH). When you navigate to these external services, their respective privacy policies and terms apply.
            </p>
          </section>

          {/* User Rights & Contact */}
          <section className="p-6 sm:p-8 rounded-2xl cyber-glass border border-cyan-500/30 bg-slate-950/80 shadow-[0_0_25px_rgba(0,245,212,0.1)]">
            <div className="flex items-center gap-3 mb-3">
              <Mail className="w-5 h-5 text-cyan-400" />
              <h2 className="font-display text-xl font-bold text-white">
                6. Your Privacy Rights &amp; Contact
              </h2>
            </div>
            <p className="text-slate-300 mb-4">
              You have the right to request access to, correction of, or complete deletion of any project inquiry data we hold. For any privacy requests or questions, please email:
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
