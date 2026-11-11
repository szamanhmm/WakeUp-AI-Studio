import { useEffect } from 'react';
import { ArrowLeft, FileText, Lock, Mail } from 'lucide-react';

const PAGE_TITLE = 'Privacy Policy: Manual Video Camera | C4U TECH · WakeUp AI';
const PAGE_DESCRIPTION =
  'Privacy Policy and Google Play Data Safety summary for Manual Video Camera by C4U TECH · WakeUp AI.';
const PAGE_CANONICAL = 'https://www.c4utech.com/videocamera/privacy-policy';

export default function VideoCameraPrivacyPolicyPage() {
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
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
          <span>Back to Home</span>
        </a>

        {/* Page Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono tracking-widest text-cyan-300 uppercase mb-4 shadow-[0_0_15px_rgba(0,245,212,0.15)]">
            <Lock className="w-3.5 h-3.5 text-cyan-400 shrink-0" aria-hidden="true" />
            <span>Manual Video Camera • Privacy Shield</span>
          </div>

          <h1
            id="main-heading"
            tabIndex={-1}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4 focus:outline-none"
          >
            Privacy Policy: <span className="cyber-ocean-gradient-text">Manual Video Camera</span>
          </h1>

          <p className="text-slate-400 text-sm font-mono">
            EFFECTIVE DATE: NOVEMBER 11, 2026 • C4U TECH · WAKEUP AI • 100% ON-DEVICE FIRST
          </p>
        </div>

        {/* Content Container */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed">
          {/* 1. Local-First Overview */}
          <section className="vc-surface-card p-6 sm:p-8 rounded-2xl cyber-glass border border-slate-800/90 bg-slate-950/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <h2 className="font-display text-xl font-bold text-white mb-3 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4] shrink-0" aria-hidden="true" />
              <span>1. Our Local-First Privacy Architecture</span>
            </h2>
            <p className="text-slate-300 mb-3">
              <strong className="text-white">Manual Video Camera</strong> (listed on Google Play as{' '}
              <em className="text-cyan-200">Timestamp Manual Video Camera</em>) is developed by{' '}
              <strong className="text-white">C4U TECH · WakeUp AI</strong>. All camera previews, manual controls,
              timestamps, optional microphone audio, and recorded MP4 files run strictly in memory on your phone and save
              locally to <code className="text-cyan-300 font-mono text-[0.9em]">Movies/ManualVideoCamera</code>.
            </p>
            <p className="text-cyan-400 font-mono text-xs mt-4">
              GUARANTEE: WE REQUIRE NO ACCOUNTS, OPERATE NO MEDIA SERVERS, AND NEVER ACCESS OR UPLOAD YOUR VIDEOS OR AUDIO.
            </p>
          </section>

          {/* 2. App Permissions */}
          <section className="vc-surface-card p-6 sm:p-8 rounded-2xl cyber-glass border border-slate-800/90 bg-slate-950/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <h2 className="font-display text-xl font-bold text-white mb-3 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4] shrink-0" aria-hidden="true" />
              <span>2. Permissions We Request</span>
            </h2>
            <ul className="space-y-2.5 text-slate-300 list-disc pl-5">
              <li>
                <strong className="text-white">Camera:</strong> Required for live viewfinder preview, manual exposure and
                focus controls, and saving local MP4 videos.
              </li>
              <li>
                <strong className="text-white">Microphone (Optional):</strong> Off by default; requested only if you
                enable audio recording. Not used in Silent or Timelapse modes.
              </li>
              <li>
                <strong className="text-white">Storage &amp; Recording Notifications:</strong> Saves finalized clips
                to your device storage and keeps an ongoing visible notification during active background recording.
              </li>
              <li>
                <strong className="text-white">Network Access:</strong> Used only by official Google SDKs for consent,
                Free-tier ads, Pro billing checks, and stability diagnostics. GPS location is never requested.
              </li>
            </ul>
          </section>

          {/* 3. Integrated Google SDKs */}
          <section className="vc-surface-card p-6 sm:p-8 rounded-2xl cyber-glass border border-slate-800/90 bg-slate-950/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <h2 className="font-display text-xl font-bold text-white mb-3 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4] shrink-0" aria-hidden="true" />
              <span>3. Information Processed via Google SDKs</span>
            </h2>
            <p className="text-slate-300 mb-3">
              While your media remains completely offline, the app links verified Google libraries over HTTPS that may
              process non-media technical data under Google&apos;s privacy terms:
            </p>
            <ul className="space-y-2.5 text-slate-300 list-disc pl-5">
              <li>
                <strong className="text-white">Google AdMob &amp; User Messaging Platform (UMP):</strong> Serves Free-tier
                banner, safe idle interstitial, and optional rewarded ads using Advertising ID and IP-derived region,
                governed by regional GDPR/US consent choices. Disabled permanently with Pro Lifetime.
              </li>
              <li>
                <strong className="text-white">Google Play Billing:</strong> Validates one-time Pro Lifetime upgrades,
                restores purchases across installs, and handles refunds securely through Google Play. We never receive
                payment card details.
              </li>
              <li>
                <strong className="text-white">Firebase Analytics, Crashlytics &amp; Performance:</strong> Collects
                sanitized crash traces, OS/device model, and startup/encoder metrics so we can fix hardware camera
                bugs. File names, storage paths, and user media are never logged.
              </li>
            </ul>
          </section>

          {/* 4. Consent, Security & Data Deletion */}
          <section className="vc-surface-card p-6 sm:p-8 rounded-2xl cyber-glass border border-slate-800/90 bg-slate-950/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <h2 className="font-display text-xl font-bold text-white mb-3 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4] shrink-0" aria-hidden="true" />
              <span>4. Your Controls, Security &amp; Data Deletion</span>
            </h2>
            <ul className="space-y-2.5 text-slate-300 list-disc pl-5">
              <li>
                <strong className="text-white">Ad &amp; Consent Choices:</strong> Update ad consent anytime inside app{' '}
                <em>Settings &rarr; Privacy Policy, Terms &amp; Ad Consent &rarr; Manage Ad Consent Preferences</em>,
                reset your Advertising ID in Android settings, visit{' '}
                <a
                  href="https://myadcenter.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                >
                  Google My Ad Center
                </a>
                , or upgrade to Pro Lifetime.
              </li>
              <li>
                <strong className="text-white">Encryption &amp; Anti-Tampering:</strong> Network SDK traffic enforces
                HTTPS, and local unlock states are encrypted on-device via Android Keystore and excluded from cloud
                backups.
              </li>
              <li>
                <strong className="text-white">Deleting Your Data:</strong> Delete MP4 videos directly from your phone&apos;s
                Gallery or Files app. Clear local preferences anytime via Android app storage settings or by uninstalling
                the app. Support emails are erased upon request.
              </li>
            </ul>
          </section>

          {/* 5. Regional Rights & Children's Privacy */}
          <section className="vc-surface-card p-6 sm:p-8 rounded-2xl cyber-glass border border-slate-800/90 bg-slate-950/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <h2 className="font-display text-xl font-bold text-white mb-3 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4] shrink-0" aria-hidden="true" />
              <span>5. Regional Privacy Rights &amp; Children&apos;s Privacy</span>
            </h2>
            <p className="text-slate-300 mb-3">
              <strong className="text-white">EEA / UK / US Rights:</strong> We do not sell your personal information.
              Users in the EEA, UK, Switzerland, California, and other regulated regions can withdraw consent, request
              access or deletion, or opt out of personalized ads at any time without losing core offline recording
              features.
            </p>
            <p className="text-slate-300">
              <strong className="text-white">Children&apos;s Privacy:</strong> Manual Video Camera is intended for general
              adult use and is not directed to children under 13 (or applicable regional age). If you believe a child has
              emailed us personal information, contact us for immediate deletion.
            </p>
          </section>

          {/* 6. Contact & Official Legal Documents */}
          <section className="vc-surface-card p-6 sm:p-8 rounded-2xl cyber-glass border border-cyan-500/30 bg-slate-950/80 shadow-[0_0_25px_rgba(0,245,212,0.1)]">
            <div className="flex items-center gap-3 mb-3">
              <Mail className="w-5 h-5 text-cyan-400 shrink-0" aria-hidden="true" />
              <h2 className="font-display text-xl font-bold text-white">
                6. Lawful Use, Legal Links &amp; Contact
              </h2>
            </div>
            <p className="text-slate-300 mb-4">
              You are responsible for obeying applicable video and audio recording consent laws. For privacy questions,
              data deletion requests, or legal inquiries, contact{' '}
              <strong className="text-white">C4U TECH · WakeUp AI</strong>:
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
                href="/videocamera/terms"
                className="vc-btn-primary inline-flex items-center justify-center gap-2 min-h-[44px] min-w-[44px] px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 text-[#030712] font-semibold text-sm shadow-[0_0_20px_rgba(0,245,212,0.3)] hover:shadow-[0_0_25px_rgba(0,245,212,0.5)] transition-all"
              >
                <FileText className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Read Terms of Use</span>
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
