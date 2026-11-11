import { useEffect } from 'react';
import { AlertTriangle, ArrowLeft, FileText, Lock, Mail } from 'lucide-react';

const PAGE_TITLE = 'Terms of Use: Manual Video Camera | C4U TECH · WakeUp AI';
const PAGE_DESCRIPTION =
  'Terms of Use, lawful recording rules, Pro Lifetime Google Play Billing terms, and license details for Manual Video Camera by C4U TECH · WakeUp AI.';
const PAGE_CANONICAL = 'https://www.c4utech.com/videocamera/terms';

export default function VideoCameraTermsPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = PAGE_TITLE;

    const descriptionMeta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = descriptionMeta?.getAttribute('content') ?? null;
    if (descriptionMeta) {
      descriptionMeta.setAttribute('content', PAGE_DESCRIPTION);
    }

    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const previousCanonical = canonicalLink?.getAttribute('href') ?? null;
    if (canonicalLink) {
      canonicalLink.setAttribute('href', PAGE_CANONICAL);
    }

    return () => {
      document.title = previousTitle;
      if (descriptionMeta && previousDescription !== null) {
        descriptionMeta.setAttribute('content', previousDescription);
      }
      if (canonicalLink && previousCanonical !== null) {
        canonicalLink.setAttribute('href', previousCanonical);
      }
    };
  }, []);

  return (
    <div className="vc-page pt-28 pb-20 bg-[#030712] relative overflow-x-clip text-slate-300 min-h-screen">
      {/* Background Aesthetics */}
      <div className="absolute inset-0 cyber-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Link */}
        <a
          href="/"
          className="inline-flex items-center gap-2 min-h-[24px] py-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 shrink-0" aria-hidden="true" />
          <span>Back to Home</span>
        </a>

        {/* Page Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono tracking-widest text-cyan-300 uppercase mb-4 shadow-[0_0_15px_rgba(0,245,212,0.15)]">
            <FileText className="w-3.5 h-3.5 text-cyan-400 shrink-0" aria-hidden="true" />
            <span>Manual Video Camera • End-User Terms</span>
          </div>

          <h1
            id="main-heading"
            tabIndex={-1}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4 focus:outline-none"
          >
            Terms of Use: <span className="cyber-ocean-gradient-text">Manual Video Camera</span>
          </h1>

          <p className="text-slate-400 text-sm font-mono">
            EFFECTIVE DATE: NOVEMBER 11, 2026 • C4U TECH · WAKEUP AI • APP V1.0.0 (ANDROID 7.0 TO 16)
          </p>
        </div>

        {/* Content Container */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed">
          {/* 1. Acceptance, License & Prohibited Use */}
          <section className="vc-surface-card p-6 sm:p-8 rounded-2xl cyber-glass border border-slate-800/90 bg-slate-950/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <h2 className="font-display text-xl font-bold text-white mb-3 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4] shrink-0" aria-hidden="true" />
              <span>1. Acceptance, License &amp; Prohibited Use</span>
            </h2>
            <p className="text-slate-300 mb-3">
              These Terms form a binding agreement between you and{' '}
              <strong className="text-white">C4U TECH · WakeUp AI</strong> governing your use of{' '}
              <strong className="text-white">Manual Video Camera</strong> (listed on Google Play as{' '}
              <em className="text-cyan-200">Timestamp Manual Video Camera</em>), incorporating the app&apos;s Privacy
              Policy. The app requires an official Google Play install, is not intended for children under 13, and grants
              a limited, revocable, non-transferable license for personal or lawful internal business use.
            </p>
            <ul className="space-y-2.5 text-slate-300 list-disc pl-5">
              <li>
                <strong className="text-white">No Reverse-Engineering or Repackaging:</strong> You may not decompile
                source code, GLSL shaders, or integrity guards, distribute altered APKs, or bypass billing or rewarded
                timers.
              </li>
              <li>
                <strong className="text-white">Integrity Verification:</strong> All brand marks and code belong to C4U
                TECH · WakeUp AI. Runtime integrity checks may automatically disable Pro features on modified or
                unofficial builds.
              </li>
            </ul>
          </section>

          {/* 2. Lawful Recording, Consent & Road Safety */}
          <section className="vc-surface-card p-6 sm:p-8 rounded-2xl cyber-glass border border-slate-800/90 bg-slate-950/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <h2 className="font-display text-xl font-bold text-white mb-3 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4] shrink-0" aria-hidden="true" />
              <span>2. Lawful Recording, Consent &amp; Road Safety</span>
            </h2>
            <p className="text-slate-300 mb-4">
              Because camera and audio recording laws differ across jurisdictions,{' '}
              <strong className="text-white">you alone bear 100% legal responsibility</strong> for how and where you
              record.
            </p>

            <div className="vc-callout-warn rounded-xl p-4 mb-4 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-slate-200 text-sm">
                <strong className="text-amber-300">Mandatory Compliance Notice:</strong> Background, Screen-Off, Silent,
                and Screen Lock &amp; Dim modes exist strictly to reduce power, heat, and accidental touches during lawful
                unattended capture (such as home monitoring, lab observation, nature time-lapses, or dashcam operation).
                Never use these modes covertly or without legally required notice or consent.
              </p>
            </div>

            <ul className="space-y-2.5 text-slate-300 list-disc pl-5">
              <li>
                <strong className="text-white">Audio Consent &amp; Signage:</strong> Microphone capture is off by
                default; verify all-party wiretapping consent rules before recording speech, post required CCTV/dashcam
                notices, and never record in private or restricted spaces.
              </li>
              <li>
                <strong className="text-white">Foreground Notice &amp; Driving Safety:</strong> Long recordings display
                Android&apos;s ongoing notification with a <em>Stop &amp; Save</em> control. Never adjust camera settings
                while driving, and mount devices without blocking your windshield or airbags.
              </li>
            </ul>
          </section>

          {/* 3. Free Tier, Rewarded Access & Pro Lifetime Billing */}
          <section className="vc-surface-card p-6 sm:p-8 rounded-2xl cyber-glass border border-slate-800/90 bg-slate-950/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <h2 className="font-display text-xl font-bold text-white mb-3 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4] shrink-0" aria-hidden="true" />
              <span>3. Free Tier, Rewarded Access &amp; Pro Lifetime Billing</span>
            </h2>
            <ul className="space-y-2.5 text-slate-300 list-disc pl-5">
              <li>
                <strong className="text-white">Core Free Features:</strong> Manual Camera2 controls (ISO, shutter, zoom,
                EV, multi-lens), SD to 4K recording (24/30/60 FPS, manual bitrate, up to 20x timelapse, burned-in
                timestamp), 2-hour auto-split, and local JSON settings backups are free with no subscription. Free tier
                displays banners, safe idle interstitials (never during recording), and optional rewarded ads per your UMP
                consent choices.
              </li>
              <li>
                <strong className="text-white">24-Hour Rewarded Unlocks:</strong> Watching an optional rewarded ad
                grants temporary 24-hour device access for a selected automation tool (such as 6-hour split, background or
                silent mode, screen lock &amp; dim, midnight split, small/large file caps, or battery/space safety
                stops), subject to network availability and ad fill.
              </li>
              <li>
                <strong className="text-white">Pro Lifetime &amp; Google Play Billing:</strong>{' '}
                <strong className="text-white">Pro Lifetime</strong> (<code className="text-cyan-300 font-mono text-[0.9em]">pro_lifetime</code>) is a
                one-time, non-renewing Google Play purchase that permanently unlocks all automation controls and disables
                all ads. Purchases restore via your Google Account (<code className="text-cyan-300 font-mono text-[0.9em]">PENDING</code> payments unlock after settlement to{' '}
                <code className="text-cyan-300 font-mono text-[0.9em]">PURCHASED</code>). Refunds follow{' '}
                <a
                  href="https://support.google.com/googleplay/workflow/9813244"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                >
                  Google Play Refund Support
                </a>
                ; refunded or charged-back orders automatically revoke Pro entitlements.
              </li>
            </ul>
          </section>

          {/* 4. Hardware Constraints, Ownership & Local Backups */}
          <section className="vc-surface-card p-6 sm:p-8 rounded-2xl cyber-glass border border-slate-800/90 bg-slate-950/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <h2 className="font-display text-xl font-bold text-white mb-3 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4] shrink-0" aria-hidden="true" />
              <span>4. Hardware Limits, Footage Ownership &amp; Local Backups</span>
            </h2>
            <ul className="space-y-2.5 text-slate-300 list-disc pl-5">
              <li>
                <strong className="text-white">Hardware &amp; Best-Effort Safety:</strong> Lenses, 4K/60fps modes, ISO,
                and thermal or background limits depend on your phone&apos;s Android Camera2 hardware and OEM power
                policy. Automated time/size splits, midnight saves, 10%/3% battery protections, and low-storage stops are
                best-effort; always record a short test clip before critical events.
              </li>
              <li>
                <strong className="text-white">100% Ownership of Footage:</strong> C4U TECH · WakeUp AI claims zero
                rights over your videos or audio saved in{' '}
                <code className="text-cyan-300 font-mono text-[0.9em]">Movies/ManualVideoCamera</code>.
              </li>
              <li>
                <strong className="text-white">Local Settings Backup (.json):</strong> Optional{' '}
                <em>Save Backup / Restore Backup</em> files export camera and safety preferences only. They never store
                Pro receipts, rewarded unlock timers, or device identifiers, and cannot grant Pro access.
              </li>
            </ul>
          </section>

          {/* 5. Warranties, Liability Cap & Indemnification */}
          <section className="vc-surface-card p-6 sm:p-8 rounded-2xl cyber-glass border border-slate-800/90 bg-slate-950/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <h2 className="font-display text-xl font-bold text-white mb-3 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4] shrink-0" aria-hidden="true" />
              <span>5. Disclaimers, Liability Cap &amp; Indemnification</span>
            </h2>
            <p className="text-slate-300 mb-3">
              <strong className="text-white">AS IS Disclaimer &amp; Liability Cap:</strong> To the maximum extent
              permitted by law, Manual Video Camera is provided &ldquo;AS IS&rdquo; without warranties of uninterrupted
              or error-free capture. C4U TECH · WakeUp AI is not liable for indirect or consequential damages including
              lost footage, corrupted files, device overheating, battery wear, or recording-law claims. Where liability
              cannot be excluded, total cumulative liability is capped at the amount paid for Pro Lifetime in the prior
              12 months (or USD $10.00 if no purchase was made), subject to mandatory consumer law.
            </p>
            <p className="text-slate-300">
              <strong className="text-white">Indemnification &amp; Termination:</strong> You agree to indemnify C4U TECH
              · WakeUp AI against claims arising from breaching these Terms, unlawful recording without consent, or
              tampered builds. Your license terminates on material breach or uninstall (your saved MP4 clips and
              exported JSON backups remain under your control).
            </p>
          </section>

          {/* 6. Governing Law, Legal Links & Contact */}
          <section className="vc-surface-card p-6 sm:p-8 rounded-2xl cyber-glass border border-cyan-500/30 bg-slate-950/80 shadow-[0_0_25px_rgba(0,245,212,0.1)]">
            <div className="flex items-center gap-3 mb-3">
              <Mail className="w-5 h-5 text-cyan-400 shrink-0" aria-hidden="true" />
              <h2 className="font-display text-xl font-bold text-white">
                6. Governing Law, Legal Links &amp; Contact
              </h2>
            </div>
            <p className="text-slate-300 mb-4">
              These Terms are governed by the laws of <strong className="text-white">Bangladesh</strong>, except where
              mandatory local consumer laws apply. Revised Terms take effect when posted at the official Terms URL with
              an updated Effective Date. Contact <strong className="text-white">C4U TECH · WakeUp AI</strong> (7th
              Floor, House-262/263, Road No 1, Block B, Bashundhara R/A, Dhaka 1229, Bangladesh):
            </p>

            <div className="flex flex-col gap-2 text-sm mb-6">
              <div>
                <span className="text-slate-400">Email: </span>
                <a
                  href="mailto:contact@c4utech.com"
                  className="text-cyan-400 font-mono hover:text-cyan-300 underline underline-offset-4"
                >
                  contact@c4utech.com
                </a>{' '}
                /{' '}
                <a
                  href="mailto:wakeup.ai.dev@gmail.com"
                  className="text-cyan-400 font-mono hover:text-cyan-300 underline underline-offset-4"
                >
                  wakeup.ai.dev@gmail.com
                </a>
              </div>
              <div>
                <span className="text-slate-400">Official Documents: </span>
                <a
                  href="https://www.c4utech.com/videocamera/privacy-policy"
                  className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                >
                  Manual Video Camera Privacy Policy
                </a>{' '}
                ·{' '}
                <a
                  href="https://www.c4utech.com/videocamera/terms"
                  className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                >
                  Manual Video Camera Terms of Use
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/videocamera/privacy-policy"
                className="vc-btn-primary inline-flex items-center justify-center gap-2 min-h-[44px] min-w-[44px] px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 text-[#030712] font-semibold text-sm shadow-[0_0_20px_rgba(0,245,212,0.3)] hover:shadow-[0_0_25px_rgba(0,245,212,0.5)] transition-all"
              >
                <Lock className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Read Privacy Policy</span>
              </a>
              <a
                href="/"
                className="vc-btn-secondary inline-flex items-center justify-center gap-2 min-h-[44px] min-w-[44px] px-5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-500 text-slate-200 hover:text-cyan-300 hover:border-cyan-400 font-semibold text-sm transition-colors"
              >
                <span>Back to Home</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
