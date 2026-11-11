import { useEffect } from 'react';
import {
  ArrowLeft,
  FileText,
  Lock,
  Mail,
  Shield,
  Video,
} from 'lucide-react';

const PAGE_TITLE = 'Privacy Policy: Manual Video Camera | C4U TECH · WakeUp AI';
const PAGE_DESCRIPTION =
  'Complete Privacy Policy and Google Play Data Safety disclosure for Manual Video Camera by C4U TECH · WakeUp AI.';
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
      {/* Cyber-Ocean Background Aesthetics */}
      <div className="absolute inset-0 cyber-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-64 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Return & App Legal Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 min-h-[24px] py-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
            <span>Back to Home</span>
          </a>

          <nav aria-label="Manual Video Camera legal documents">
            <ul className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono">
              <li>
                <a
                  href="/videocamera/privacy-policy"
                  aria-current="page"
                  className="inline-flex items-center gap-1.5 min-h-[24px] px-3 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/60 text-cyan-300 font-semibold underline decoration-cyan-400/70 underline-offset-4"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f5d4]" aria-hidden="true" />
                  <span>Privacy Policy</span>
                </a>
              </li>
              <li>
                <a
                  href="/videocamera/terms"
                  className="inline-flex items-center min-h-[24px] px-3 py-1.5 rounded-full bg-slate-900/70 border border-slate-700 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="inline-flex items-center min-h-[24px] px-3 py-1.5 rounded-full bg-slate-900/70 border border-slate-700 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                >
                  C4U Tech Home
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Page Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono tracking-widest text-cyan-300 uppercase mb-4 shadow-[0_0_15px_rgba(0,245,212,0.15)]">
            <Video className="w-3.5 h-3.5 text-cyan-400 shrink-0" aria-hidden="true" />
            <span>C4U TECH · WAKEUP AI | LEGAL &amp; DATA SAFETY DISCLOSURE</span>
          </div>

          <h1
            id="main-heading"
            tabIndex={-1}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4 focus:outline-none"
          >
            Privacy Policy: <span className="cyber-ocean-gradient-text">Manual Video Camera</span>
          </h1>

          <p className="text-slate-400 text-sm font-mono">
            EFFECTIVE DATE: NOVEMBER 11, 2026 · APP V1.0.0 (ANDROID 7.0–16) · ON-DEVICE FIRST
          </p>
        </div>

        {/* App Metadata Summary Grid */}
        <div className="vc-surface-card p-5 sm:p-6 rounded-2xl cyber-glass border border-slate-800/90 bg-slate-950/70 shadow-[0_10px_30px_rgba(0,0,0,0.5)] mb-6">
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            <div className="lg:col-span-2">
              <dt className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 mb-1">
                App Name &amp; Play Listing
              </dt>
              <dd className="text-sm text-white break-words">
                Manual Video Camera (Google Play: <em className="text-cyan-200 not-italic font-medium">Timestamp Manual Video Camera</em>)
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Developer / Controller
              </dt>
              <dd className="text-sm text-white break-words">
                C4U TECH · WakeUp AI (
                <a
                  href="https://www.c4utech.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                >
                  www.c4utech.com
                </a>
                )
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Effective Date &amp; Version
              </dt>
              <dd className="text-sm text-white">
                November 11, 2026 &nbsp;·&nbsp; App v1.0.0 (Android 7.0–16)
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Privacy Contact
              </dt>
              <dd className="text-sm text-white break-words">
                <a
                  href="mailto:contact@c4utech.com"
                  className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                >
                  contact@c4utech.com
                </a>{' '}
                /{' '}
                <a
                  href="mailto:wakeup.ai.dev@gmail.com"
                  className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                >
                  wakeup.ai.dev@gmail.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Official Privacy Policy
              </dt>
              <dd className="text-sm text-white">
                <a
                  href="https://www.c4utech.com/videocamera/privacy-policy"
                  className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                >
                  Manual Video Camera Privacy Policy
                </a>
              </dd>
            </div>
          </dl>
        </div>

        {/* Table of Contents */}
        <nav
          aria-label="Policy sections"
          className="vc-surface-card p-5 sm:p-6 rounded-2xl cyber-glass border border-cyan-500/25 bg-slate-950/70 shadow-[0_10px_30px_rgba(0,0,0,0.5)] mb-8"
        >
          <h2 className="font-display text-lg font-bold text-white mb-3 flex items-center gap-2">
            <Lock className="w-4 h-4 text-cyan-400 shrink-0" aria-hidden="true" />
            <span>Table of Contents</span>
          </h2>
          <ol className="vc-toc-list grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <li>
              <a href="#section-overview" className="text-cyan-400 hover:text-cyan-300 hover:underline underline-offset-4">
                1. Overview &amp; Local-First Architecture
              </a>
            </li>
            <li>
              <a href="#section-data-safety" className="text-cyan-400 hover:text-cyan-300 hover:underline underline-offset-4">
                2. Data Safety &amp; Information Categories
              </a>
            </li>
            <li>
              <a href="#section-third-party-sdks" className="text-cyan-400 hover:text-cyan-300 hover:underline underline-offset-4">
                3. Integrated Third-Party SDKs
              </a>
            </li>
            <li>
              <a href="#section-permissions" className="text-cyan-400 hover:text-cyan-300 hover:underline underline-offset-4">
                4. Android Permissions &amp; Background Service
              </a>
            </li>
            <li>
              <a href="#section-ads-ump" className="text-cyan-400 hover:text-cyan-300 hover:underline underline-offset-4">
                5. Advertising, UMP Consent &amp; Pro Ad-Free Mode
              </a>
            </li>
            <li>
              <a href="#section-billing" className="text-cyan-400 hover:text-cyan-300 hover:underline underline-offset-4">
                6. Google Play Billing &amp; Anti-Tampering
              </a>
            </li>
            <li>
              <a href="#section-telemetry" className="text-cyan-400 hover:text-cyan-300 hover:underline underline-offset-4">
                7. Analytics, Crashlytics &amp; Performance Telemetry
              </a>
            </li>
            <li>
              <a href="#section-gdpr" className="text-cyan-400 hover:text-cyan-300 hover:underline underline-offset-4">
                8. Legal Bases &amp; EEA / UK / Swiss Rights
              </a>
            </li>
            <li>
              <a href="#section-us-privacy" className="text-cyan-400 hover:text-cyan-300 hover:underline underline-offset-4">
                9. US State Privacy Rights (CCPA / CPRA / VCDPA)
              </a>
            </li>
            <li>
              <a href="#section-security-retention" className="text-cyan-400 hover:text-cyan-300 hover:underline underline-offset-4">
                10. Security, Retention &amp; Deletion Guide
              </a>
            </li>
            <li>
              <a href="#section-children" className="text-cyan-400 hover:text-cyan-300 hover:underline underline-offset-4">
                11. Children&apos;s Privacy
              </a>
            </li>
            <li>
              <a href="#section-contact" className="text-cyan-400 hover:text-cyan-300 hover:underline underline-offset-4">
                12. Lawful Recording, Updates &amp; Contact Us
              </a>
            </li>
          </ol>
        </nav>

        {/* Policy Sections */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed">
          {/* 1. Overview */}
          <section
            id="section-overview"
            className="vc-surface-card p-6 sm:p-8 rounded-2xl cyber-glass border border-slate-800/90 bg-slate-950/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)] scroll-mt-28"
          >
            <h2 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4] shrink-0" aria-hidden="true" />
              <span>1. Overview &amp; Local-First Privacy Architecture</span>
            </h2>
            <p className="text-slate-300 mb-3">
              <strong className="text-white">Manual Video Camera</strong> (listed on Google Play as{' '}
              <em className="text-cyan-200">Timestamp Manual Video Camera</em>) is developed
              and published by <strong className="text-white">C4U TECH · WakeUp AI</strong> (&ldquo;C4U Tech&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). This Privacy Policy explains how information is
              processed on your Android device and by integrated Google SDKs when you install or use the application.
            </p>
            <p className="text-slate-300 mb-3">
              We designed Manual Video Camera on a{' '}
              <strong className="text-white">strict local-first privacy architecture</strong>:
            </p>
            <ul className="space-y-2.5 text-slate-300 list-disc pl-5 mb-5">
              <li>
                <strong className="text-white">100% On-Device Camera &amp; Timestamp Pipeline:</strong> Live Camera2
                previews, manual camera controls (ISO, shutter speed, focus distance, white balance, exposure
                compensation, lens selection, zoom), OpenGL/EGL date-and-time timestamp rendering, H.265/HEVC or
                H.264/AVC encoding, and optional microphone capture run entirely in volatile memory on your phone.
              </li>
              <li>
                <strong className="text-white">Local Storage Only:</strong> Finalized MP4 segments (including automatic
                2-hour/6-hour splits, 3.6 GB file-limit splits, midnight rollovers, timelapse clips, and low-battery or
                low-storage emergency saves) are written strictly inside your device&apos;s{' '}
                <code className="vc-code">Movies/ManualVideoCamera</code> folder.
              </li>
              <li>
                <strong className="text-white">No Proprietary Servers or User Accounts:</strong> C4U Tech does not
                require login or account registration, operates no proprietary media storage servers, never uploads your
                videos or audio, and never sells your personal data.
              </li>
            </ul>
            <div className="vc-callout rounded-xl border border-cyan-500/30 border-l-4 border-l-cyan-400 bg-slate-900/80 p-4 text-slate-200">
              <strong className="text-cyan-300">Core Guarantee:</strong> C4U TECH · WakeUp AI can never view, access,
              download, stream, or recover any video, frame, timestamp, or audio recording stored on your device.
            </div>
          </section>

          {/* 2. Data Safety */}
          <section
            id="section-data-safety"
            className="vc-surface-card p-6 sm:p-8 rounded-2xl cyber-glass border border-slate-800/90 bg-slate-950/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)] scroll-mt-28"
          >
            <h2 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4] shrink-0" aria-hidden="true" />
              <span>2. Data Safety &amp; Information Categories</span>
            </h2>
            <p className="text-slate-300 mb-4">
              Although your media stays strictly offline on your device, the free version and stability diagnostic tools
              integrate official Google SDKs that process specific non-media technical metadata described below, aligned
              with the <strong className="text-white">Google Play Data Safety</strong> framework.
            </p>

            <div tabIndex={0} role="region" aria-labelledby="caption-data-safety" className="vc-table-wrapper my-5">
              <table className="vc-table vc-tbl-data-safety">
                <caption id="caption-data-safety">
                  Summary of Google Play Data Safety Categories Processed via Integrated SDKs
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Data Category</th>
                    <th scope="col">Specific Data Type</th>
                    <th scope="col">Purpose &amp; Processing</th>
                    <th scope="col">Sharing &amp; User Controls</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Location (Approximate)</th>
                    <td>IP-derived approximate country/region metadata</td>
                    <td>
                      Determined at network level by Google AdMob and Firebase SDKs solely for EEA/UK consent
                      eligibility, ad localization, fraud prevention, and aggregated regional analytics. Fine/GPS
                      location permissions are <strong className="text-white">not</strong> requested.
                    </td>
                    <td>
                      Processed over HTTPS by Google LLC; governed by Google UMP consent preferences and Pro ad removal.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Financial Info (Play Purchase History)</th>
                    <td>
                      Google Play product ID (<code className="vc-code">pro_lifetime</code>), purchase token, order ID (
                      <code className="vc-code">GPA.*</code>), purchase time, localized currency code
                    </td>
                    <td>
                      Processed strictly through Google Play Billing to validate Pro Lifetime unlock, restore purchases
                      across reinstalls, and revoke access after refunds. C4U Tech never receives payment card or bank
                      details.
                    </td>
                    <td>
                      Managed by Google LLC; local verification state is encrypted in Android Keystore-backed prefs and
                      excluded from cloud backups.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">App Activity</th>
                    <td>
                      Non-PII app interaction events (resolution/FPS/codec presets, recording lifecycle events, coarse
                      duration buckets, UI clicks, ad/purchase outcomes)
                    </td>
                    <td>
                      Collected via Google Analytics for Firebase to understand reliability, hardware capability usage,
                      and feature adoption without logging file paths, names, or media content.
                    </td>
                    <td>
                      Synchronized with Google Consent Mode v2 (<code className="vc-code">analytics_storage</code>) from
                      UMP choices.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">App Info &amp; Performance (Crash Logs)</th>
                    <td>
                      Stack traces, non-fatal Camera2/MediaCodec error codes, OS API level, device manufacturer/model,
                      app version
                    </td>
                    <td>
                      Collected via Firebase Crashlytics strictly to identify hardware-specific camera errors, encoder
                      freezes, or OS background interrupts and release stability fixes.
                    </td>
                    <td>HTTPS-encrypted in transit; strictly scoped to technical diagnostics without media paths or PII.</td>
                  </tr>
                  <tr>
                    <th scope="row">App Info &amp; Performance (Diagnostics)</th>
                    <td>
                      App startup duration and performance traces (<code className="vc-code">camera_open</code>,{' '}
                      <code className="vc-code">recording_start</code>, <code className="vc-code">segment_split</code>
                      , <code className="vc-code">recording_stop_save</code>)
                    </td>
                    <td>
                      Collected via Firebase Performance Monitoring to measure frame-save responsiveness and detect slow
                      encoder handoffs.
                    </td>
                    <td>Aggregated automatically by Google Firebase; excludes video content, URIs, and filenames.</td>
                  </tr>
                  <tr>
                    <th scope="row">Device or Other IDs</th>
                    <td>
                      Android Advertising ID (<code className="vc-code">AD_ID</code>), Privacy Sandbox AdServices tokens,
                      Firebase App Instance ID, Crashlytics UUID
                    </td>
                    <td>
                      Advertising ID and AdServices IDs are used by Google AdMob on the Free Tier (when permitted by UMP
                      consent) for ad delivery, frequency capping, and invalid traffic defense. Disabled completely once
                      Pro Lifetime is active.
                    </td>
                    <td>
                      Resettable or deletable in Android <em>Settings &rarr; Privacy &rarr; Ads</em>; manage consent
                      anytime inside the app.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-display text-lg font-semibold text-white mt-6 mb-3">
              2.1 Information We Never Collect or Upload
            </h3>
            <ul className="space-y-2 text-slate-300 list-disc pl-5">
              <li>Recorded MP4 video files, live camera frames, thumbnails, or screen captures.</li>
              <li>Microphone audio streams or ambient sound recordings.</li>
              <li>
                Precise GPS location (<code className="vc-code">ACCESS_FINE_LOCATION</code> and{' '}
                <code className="vc-code">ACCESS_COARSE_LOCATION</code> are not declared).
              </li>
              <li>
                Names, email addresses (unless you voluntarily email customer support), phone numbers, contacts, call
                logs, SMS, or unrelated gallery photos.
              </li>
              <li>
                Video file names, storage paths, or <code className="vc-code">MediaStore</code> URIs inside telemetry,
                breadcrumbs, or error logs.
              </li>
              <li>
                <strong className="text-white">Local Anti-Tampering Seal Only:</strong> On-device security checks read{' '}
                <code className="vc-code">Settings.Secure.ANDROID_ID</code> and the app&apos;s APK signing certificate
                SHA-256 hash solely in local memory to compute an HMAC-SHA256 integrity seal for Keystore-encrypted
                preferences (<code className="vc-code">IntegrityGuard</code>). Neither value is transmitted to C4U Tech
                servers.
              </li>
            </ul>
          </section>

          {/* 3. Integrated Third-Party SDKs */}
          <section
            id="section-third-party-sdks"
            className="vc-surface-card p-6 sm:p-8 rounded-2xl cyber-glass border border-slate-800/90 bg-slate-950/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)] scroll-mt-28"
          >
            <h2 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4] shrink-0" aria-hidden="true" />
              <span>3. Integrated Third-Party SDKs</span>
            </h2>
            <p className="text-slate-300 mb-4">
              Manual Video Camera links only verified official Google libraries (zero third-party social SDKs or
              unauthorized ad mediators). Each service processes network requests over HTTPS (TLS) in accordance with
              Google&apos;s privacy and data processing terms:
            </p>

            <div tabIndex={0} role="region" aria-labelledby="caption-sdk-list" className="vc-table-wrapper my-5">
              <table className="vc-table vc-tbl-sdk">
                <caption id="caption-sdk-list">Third-Party SDKs Bundled in Manual Video Camera (v1.0.0)</caption>
                <thead>
                  <tr>
                    <th scope="col">SDK / Library</th>
                    <th scope="col">Provider</th>
                    <th scope="col">Operational Purpose</th>
                    <th scope="col">Provider Privacy Policy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      Google Mobile Ads SDK (<code className="vc-code">play-services-ads 25.5.0</code>)
                    </th>
                    <td>Google LLC</td>
                    <td>
                      Displays adaptive banner ads, idle transition interstitials (120s cooldown), and optional
                      user-initiated rewarded ads in the Free Tier (AdMob App ID{' '}
                      <code className="vc-code">ca-app-pub-5982455316618480~9089348800</code>). Skipped entirely for Pro
                      Lifetime users.
                    </td>
                    <td>
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                      >
                        Google Privacy Policy
                      </a>{' '}
                      &amp;{' '}
                      <a
                        href="https://support.google.com/admob/answer/6128543"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                      >
                        AdMob Privacy Disclosure
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Google User Messaging Platform (<code className="vc-code">user-messaging-platform 4.0.0</code>)
                    </th>
                    <td>Google LLC</td>
                    <td>
                      Collects and manages regional ad/privacy consent forms (EEA/UK/Switzerland GDPR IAB TCF v2.2 &amp;
                      US regional notices) with delayed app measurement initialization enabled in the manifest.
                    </td>
                    <td>
                      <a
                        href="https://policies.google.com/technologies/partner-sites"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                      >
                        Google Partner Sites Notice
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Google Play Billing Library (<code className="vc-code">billing-ktx 8.0.0</code>)
                    </th>
                    <td>Google LLC</td>
                    <td>
                      Displays localized currency pricing, processes one-time{' '}
                      <code className="vc-code">pro_lifetime</code> purchases, restores entitlements across devices, and
                      detects refunds.
                    </td>
                    <td>
                      <a
                        href="https://payments.google.com/payments/apis-secure/get_legal_document?ldo=0&ldt=privacynotice"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                      >
                        Google Payments Privacy Notice
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Google Analytics for Firebase (<code className="vc-code">firebase-bom 35.1.0</code>)
                    </th>
                    <td>Google LLC</td>
                    <td>
                      Measures aggregated feature usage (presets, session stop categories, consent choices) governed by
                      Google Consent Mode v2 flags.
                    </td>
                    <td>
                      <a
                        href="https://firebase.google.com/support/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                      >
                        Firebase Privacy &amp; Security
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Firebase Crashlytics &amp; Performance (<code className="vc-code">firebase-bom 35.1.0</code>)
                    </th>
                    <td>Google LLC</td>
                    <td>
                      Captures crash reports, non-fatal Camera2/MediaCodec errors, startup metrics, and encoder save
                      latency traces.
                    </td>
                    <td>
                      <a
                        href="https://firebase.google.com/support/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                      >
                        Firebase Privacy &amp; Security
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 4. Android Permissions */}
          <section
            id="section-permissions"
            className="vc-surface-card p-6 sm:p-8 rounded-2xl cyber-glass border border-slate-800/90 bg-slate-950/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)] scroll-mt-28"
          >
            <h2 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4] shrink-0" aria-hidden="true" />
              <span>4. Android Permissions &amp; Background Foreground Service</span>
            </h2>
            <p className="text-slate-300 mb-4">
              Manual Video Camera requests only permissions strictly required for camera preview, optional audio, local
              saving, persistent long-duration recording reliability, and official Play/AdMob SDK operation. Core
              offline video recording works even without an internet connection.
            </p>

            <div tabIndex={0} role="region" aria-labelledby="caption-permissions" className="vc-table-wrapper my-5">
              <table className="vc-table vc-tbl-permissions">
                <caption id="caption-permissions">
                  Android Permissions Declared in App Manifest &amp; Merged SDK Manifest
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Permission / Feature</th>
                    <th scope="col">When Requested</th>
                    <th scope="col">Operational Purpose</th>
                    <th scope="col">Off-Device Transmission</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <code className="vc-code">CAMERA</code>
                    </th>
                    <td>Runtime prompt on first camera launch</td>
                    <td>
                      Renders live Camera2 preview, drives manual focus/exposure/ISO/zoom controls, and encodes local MP4
                      video.
                    </td>
                    <td>None (processed 100% locally)</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <code className="vc-code">RECORD_AUDIO</code>
                    </th>
                    <td>Off by default; prompted only if you tap to enable audio</td>
                    <td>
                      Records optional AAC audio into local MP4 video. Disabled automatically in Silent Recording or
                      Timelapse mode.
                    </td>
                    <td>None (saved strictly in local MP4)</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <code className="vc-code">WRITE_EXTERNAL_STORAGE</code> (<code className="vc-code">maxSdkVersion=&quot;28&quot;</code>)
                    </th>
                    <td>Android 7.0–9.0 (API 24–28) only</td>
                    <td>
                      Writes finalized MP4 videos into <code className="vc-code">Movies/ManualVideoCamera</code>.
                      Android 10+ uses Scoped Storage (<code className="vc-code">MediaStore</code>) with no storage
                      prompt needed.
                    </td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <code className="vc-code">FOREGROUND_SERVICE</code>,{' '}
                      <code className="vc-code">FOREGROUND_SERVICE_CAMERA</code>,{' '}
                      <code className="vc-code">FOREGROUND_SERVICE_MICROPHONE</code>
                    </th>
                    <td>Started strictly when you tap Record</td>
                    <td>
                      Keeps user-initiated <code className="vc-code">RecordingService</code> alive when backgrounded or
                      screen-locked while showing a permanent visible notification with an immediate{' '}
                      <em>Stop &amp; Save</em> button.
                    </td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <code className="vc-code">POST_NOTIFICATIONS</code>
                    </th>
                    <td>Android 13+ before recording start</td>
                    <td>
                      Shows the persistent ongoing recording notification plus safety alerts for 10% low battery, 3%
                      emergency save, &lt;150 MB low space save, and midnight rollover.
                    </td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <code className="vc-code">WAKE_LOCK</code> &amp; <code className="vc-code">VIBRATE</code>
                    </th>
                    <td>Active during recording sessions</td>
                    <td>
                      Holds partial wake lock to prevent multi-hour timer/encoder interruption; triggers subtle vibration
                      cues at 10% low battery while respecting Silent Recording mode.
                    </td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <code className="vc-code">INTERNET</code> &amp;{' '}
                      <code className="vc-code">ACCESS_NETWORK_STATE</code>
                    </th>
                    <td>Normal install-time network check</td>
                    <td>
                      Used exclusively for Google UMP consent, AdMob ads (Free Tier), Google Play Billing verification,
                      and Firebase telemetry.
                    </td>
                    <td>HTTPS-only requests to Google SDKs</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <code className="vc-code">com.android.vending.BILLING</code> &amp;{' '}
                      <code className="vc-code">&lt;queries&gt; com.android.vending</code>
                    </th>
                    <td>Billing &amp; install check</td>
                    <td>
                      Communicates with Google Play Store for <code className="vc-code">pro_lifetime</code>{' '}
                      checkout/restore and verifies official Play installation status locally.
                    </td>
                    <td>Direct communication with Google Play</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <code className="vc-code">AD_ID</code>, <code className="vc-code">ACCESS_ADSERVICES_*</code>,{' '}
                      <code className="vc-code">BIND_GET_INSTALL_REFERRER_SERVICE</code>
                    </th>
                    <td>Merged by Google Ads &amp; Firebase Analytics SDKs</td>
                    <td>
                      Supports consent-gated Google AdMob measurement/attribution and Privacy Sandbox APIs on the Free
                      Tier; disabled on Pro upgrade and governed by Android Ad ID controls.
                    </td>
                    <td>Processed by Google LLC per UMP consent</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 5. Advertising, UMP Consent & Pro Mode */}
          <section
            id="section-ads-ump"
            className="vc-surface-card p-6 sm:p-8 rounded-2xl cyber-glass border border-slate-800/90 bg-slate-950/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)] scroll-mt-28"
          >
            <h2 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4] shrink-0" aria-hidden="true" />
              <span>5. Advertising, UMP Consent &amp; Pro Ad-Free Mode</span>
            </h2>
            <p className="text-slate-300 mb-3">
              Manual Video Camera offers full core video timestamping free of charge, supported by{' '}
              <strong className="text-white">Google AdMob</strong> in the Free Tier:
            </p>
            <ul className="space-y-2.5 text-slate-300 list-disc pl-5 mb-5">
              <li>
                <strong className="text-white">Adaptive Anchored Banner Ads:</strong> Displayed in a dedicated layout slot
                without obscuring active camera controls during settings configuration or free viewing.
              </li>
              <li>
                <strong className="text-white">Safe Idle Navigation Interstitials:</strong> Full-screen interstitials
                appear strictly during idle screen navigation with a minimum 120-second cooldown and are hard-blocked
                while recording is active, pausing/resuming, stopping/saving, or while Screen Lock (Child Lock) is
                active, preventing accidental taps or lost footage.
              </li>
              <li>
                <strong className="text-white">Optional Rewarded Ads:</strong> You may optionally watch a short video ad
                to temporarily unlock Pro automation tools (such as 6-hour splitting, File Size presets, Background
                Recording, Silent Recording, Screen Lock, Midnight Auto-Save/Restart, or Low Battery Alarm) for{' '}
                <strong className="text-white">24 hours</strong> without paying.
              </li>
            </ul>

            <h3 className="font-display text-lg font-semibold text-white mt-6 mb-3">
              5.1 Google UMP Consent &amp; Consent Mode v2 Synchronization
            </h3>
            <p className="text-slate-300 mb-3">
              Our manifest sets <code className="vc-code">com.google.android.gms.ads.DELAY_APP_MEASUREMENT_INIT</code> to{' '}
              <code className="vc-code">true</code> and configures{' '}
              <code className="vc-code">setTagForUnderAgeOfConsent(false)</code>. In regions requiring opt-in consent
              (such as the European Economic Area, United Kingdom, and Switzerland), the app presents the{' '}
              <strong className="text-white">Google User Messaging Platform (UMP)</strong> dialog before loading ads.
            </p>
            <p className="text-slate-300 mb-3">
              Your UMP selections (including IAB TCF v2.2 <code className="vc-code">IABTCF_PurposeConsents</code> bits)
              are translated directly into <strong className="text-white">Google Consent Mode v2</strong> signals:
            </p>
            <ul className="space-y-2 text-slate-300 list-disc pl-5 mb-5">
              <li>
                <code className="vc-code">AD_STORAGE</code>: Granted only when consent allows storing/accessing ad
                device storage (Purpose 1) and never for Pro users.
              </li>
              <li>
                <code className="vc-code">AD_USER_DATA</code> &amp; <code className="vc-code">AD_PERSONALIZATION</code>:
                Granted only when personalized advertising consent (Purposes 3 &amp; 4) applies; otherwise restricted to
                non-personalized/limited ads or denied.
              </li>
              <li>
                <code className="vc-code">ANALYTICS_STORAGE</code>: Governed by measurement purposes (Purposes 7, 9, 10)
                where regional privacy options apply.
              </li>
            </ul>

            <h3 className="font-display text-lg font-semibold text-white mt-6 mb-3">
              5.2 How to Withdraw Consent or Disable Personalized Ads
            </h3>
            <ul className="space-y-2 text-slate-300 list-disc pl-5">
              <li>
                <strong className="text-white">In-App UMP Privacy Form:</strong> Open{' '}
                <em>Settings &rarr; Privacy Policy, Terms &amp; Ad Consent &rarr; Manage Ad Consent Preferences</em>{' '}
                (visible wherever regional privacy law requires a revocation entry point).
              </li>
              <li>
                <strong className="text-white">Android Device Controls:</strong> Open Android{' '}
                <em>Settings &rarr; Privacy &rarr; Ads</em> to reset or delete your Android Advertising ID at any time.
              </li>
              <li>
                <strong className="text-white">Google Ad Settings:</strong> Customize ad personalization across Google
                services at{' '}
                <a
                  href="https://myadcenter.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                >
                  Google My Ad Center
                </a>
                .
              </li>
              <li>
                <strong className="text-white">Permanent Ad Removal:</strong> Purchasing{' '}
                <strong className="text-white">Pro Lifetime</strong> permanently disables banner, interstitial, and
                rewarded ad loading, skips <code className="vc-code">MobileAds.initialize()</code>, and forces{' '}
                <code className="vc-code">AD_STORAGE</code>, <code className="vc-code">AD_USER_DATA</code>, and{' '}
                <code className="vc-code">AD_PERSONALIZATION</code> to <code className="vc-code">DENIED</code>.
              </li>
            </ul>
          </section>

          {/* 6. Google Play Billing */}
          <section
            id="section-billing"
            className="vc-surface-card p-6 sm:p-8 rounded-2xl cyber-glass border border-slate-800/90 bg-slate-950/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)] scroll-mt-28"
          >
            <h2 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4] shrink-0" aria-hidden="true" />
              <span>6. Google Play Billing &amp; Anti-Tampering Protections</span>
            </h2>
            <p className="text-slate-300 mb-3">
              You may optionally upgrade via a one-time, non-subscription in-app purchase (SKU:{' '}
              <code className="vc-code">pro_lifetime</code>), dynamically priced in your local Google Play store
              currency. All checkout, payment verification, tax handling, and refund processing occur exclusively inside
              the official Google Play Store app.
            </p>
            <ul className="space-y-2.5 text-slate-300 list-disc pl-5">
              <li>
                <strong className="text-white">Purchase Verification &amp; Restoration:</strong> Upon launch or when you
                tap Restore Purchases, <code className="vc-code">BillingManager</code> queries Google Play Billing v8,
                validates package name, product ID, RSA purchase signature / order structure, and activates Pro Lifetime
                automatically across authorized devices signed into your Google account.
              </li>
              <li>
                <strong className="text-white">Refund Revocation:</strong> If a transaction is canceled or refunded via
                Google Play, the verified Pro entitlement is automatically revoked and Free Tier limits resume.
              </li>
              <li>
                <strong className="text-white">
                  On-Device Anti-Tampering (<code className="vc-code">IntegrityGuard</code>):
                </strong>{' '}
                To protect legitimate users and prevent repackaged APKs or billing-proxy modifications, the app verifies
                its own signing certificate SHA-256 digest, installer source, and runtime hook integrity locally in
                memory. These security checks never transmit personal data, file lists, or recordings off your device.
              </li>
            </ul>
          </section>

          {/* 7. Telemetry */}
          <section
            id="section-telemetry"
            className="vc-surface-card p-6 sm:p-8 rounded-2xl cyber-glass border border-slate-800/90 bg-slate-950/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)] scroll-mt-28"
          >
            <h2 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4] shrink-0" aria-hidden="true" />
              <span>7. Analytics, Crashlytics &amp; Performance Telemetry</span>
            </h2>
            <p className="text-slate-300 mb-3">
              Long-duration recording depends on diverse OEM Camera2 and hardware encoder implementations. To prevent
              crashes, recording freezes, or dropped segments across Android devices, Manual Video Camera uses three
              Firebase modules with strict payload sanitization in <code className="vc-code">TelemetryManager</code>:
            </p>
            <ul className="space-y-2.5 text-slate-300 list-disc pl-5 mb-4">
              <li>
                <strong className="text-white">Google Analytics for Firebase:</strong> Logs sanitized configuration and
                lifecycle events (<code className="vc-code">recording_started</code>,{' '}
                <code className="vc-code">recording_stopped</code>,{' '}
                <code className="vc-code">recording_segment_saved</code>,{' '}
                <code className="vc-code">recording_segment_split</code>,{' '}
                <code className="vc-code">recording_paused</code>, <code className="vc-code">recording_resumed</code>,{' '}
                <code className="vc-code">recording_error</code>, <code className="vc-code">ad_load_failed</code>,{' '}
                <code className="vc-code">pro_purchase_completed</code>,{' '}
                <code className="vc-code">ad_consent_updated</code>), along with duration buckets (e.g.,{' '}
                <code className="vc-code">1h_to_2h</code>) and user property <code className="vc-code">pro_status</code>{' '}
                (<code className="vc-code">pro</code> or <code className="vc-code">free</code>).
              </li>
              <li>
                <strong className="text-white">Firebase Crashlytics:</strong> Records fatal crash stack traces and
                non-fatal technical events (e.g., Camera2 error code, MediaMuxer/MediaCodec failure stage, OS version,
                device manufacturer/model, codec, resolution/FPS configuration, active lens label such as front/back)
                plus short sanitized breadcrumbs.
              </li>
              <li>
                <strong className="text-white">Firebase Performance Monitoring:</strong> Measures cold startup latency
                and custom traces (<code className="vc-code">camera_open</code>,{' '}
                <code className="vc-code">recording_start</code>, <code className="vc-code">segment_split</code>,{' '}
                <code className="vc-code">recording_stop_save</code>) to optimize hardware startup and file-closing
                speeds.
              </li>
            </ul>
            <p className="text-slate-300">
              <strong className="text-white">Strict Sanitization Rule:</strong> No file paths, video file names, gallery
              URIs, purchase tokens, order IDs, IP payload logs written by our code, names, or email addresses are ever
              passed to Analytics events, Crashlytics custom keys, breadcrumbs, or Performance traces.
            </p>
          </section>

          {/* 8. GDPR */}
          <section
            id="section-gdpr"
            className="vc-surface-card p-6 sm:p-8 rounded-2xl cyber-glass border border-slate-800/90 bg-slate-950/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)] scroll-mt-28"
          >
            <h2 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4] shrink-0" aria-hidden="true" />
              <span>8. Legal Bases &amp; EEA / UK / Swiss Privacy Rights (GDPR)</span>
            </h2>
            <p className="text-slate-300 mb-4">
              If you live in the European Economic Area (EEA), the United Kingdom, or Switzerland, data processing
              described in this policy relies on the following legal bases under Article 6 of the GDPR / UK GDPR:
            </p>

            <div tabIndex={0} role="region" aria-labelledby="caption-gdpr" className="vc-table-wrapper my-5">
              <table className="vc-table vc-tbl-gdpr">
                <caption id="caption-gdpr">GDPR &amp; UK GDPR Legal Basis Breakdown</caption>
                <thead>
                  <tr>
                    <th scope="col">Processing Activity</th>
                    <th scope="col">Legal Basis (GDPR Art. 6)</th>
                    <th scope="col">How to Exercise Choice</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Google AdMob Ads, Ad Personalization &amp; Analytics Storage</th>
                    <td>
                      <strong className="text-white">Consent</strong> (Art. 6(1)(a)) collected via Google UMP / IAB TCF
                      v2.2 prior to ad measurement initialization
                    </td>
                    <td>
                      Accept, reject, or adjust choices anytime via{' '}
                      <em>Settings &rarr; Privacy Policy, Terms &amp; Ad Consent &rarr; Manage Ad Consent Preferences</em>
                      .
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Optional Microphone Audio Capture</th>
                    <td>
                      <strong className="text-white">Explicit User Action &amp; Permission</strong> (OS Runtime Consent)
                    </td>
                    <td>
                      Microphone access stays off until you explicitly toggle audio recording ON and grant{' '}
                      <code className="vc-code">RECORD_AUDIO</code> permission.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Pro Lifetime Billing &amp; Purchase Restoration</th>
                    <td>
                      <strong className="text-white">Contract Performance</strong> (Art. 6(1)(b)) to deliver the in-app
                      upgrade requested via Google Play
                    </td>
                    <td>Optional purchase; manage orders or refunds anytime in your Google Play account.</td>
                  </tr>
                  <tr>
                    <th scope="row">Crashlytics Diagnostics, Latency Traces &amp; On-Device Anti-Tampering</th>
                    <td>
                      <strong className="text-white">Legitimate Interests</strong> (Art. 6(1)(f)) in keeping multi-hour
                      video recording stable, diagnosing hardware bugs, and preventing billing/APK fraud
                    </td>
                    <td>
                      Zero user media is ever collected; contact{' '}
                      <a
                        href="mailto:contact@c4utech.com"
                        className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                      >
                        contact@c4utech.com
                      </a>{' '}
                      with questions or objections.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-slate-300 mb-3">
              Under EEA/UK/Swiss law, you have the right to request access to personal data held about you, request
              correction or erasure, restrict or object to processing, request data portability where applicable,
              withdraw consent at any time (without affecting prior lawful processing), and lodge a complaint with your
              national Data Protection Supervisory Authority. Because C4U Tech holds zero user accounts or server-side
              video archives, privacy requests relating to support correspondence or Google-held identifiers can be sent
              to{' '}
              <a
                href="mailto:contact@c4utech.com"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
              >
                contact@c4utech.com
              </a>
              .
            </p>
            <p className="text-slate-300">
              <strong className="text-white">International Transfers:</strong> All camera footage stays exclusively in
              your country on your physical device. Network diagnostics, billing, and advertising requests handled by
              Google LLC may be processed on Google servers globally in accordance with Google&apos;s Standard
              Contractual Clauses and applicable data transfer frameworks.
            </p>
          </section>

          {/* 9. US State Privacy Rights */}
          <section
            id="section-us-privacy"
            className="vc-surface-card p-6 sm:p-8 rounded-2xl cyber-glass border border-slate-800/90 bg-slate-950/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)] scroll-mt-28"
          >
            <h2 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4] shrink-0" aria-hidden="true" />
              <span>9. US State Privacy Rights (CCPA / CPRA, VCDPA, CPA, CTDPA &amp; Similar Laws)</span>
            </h2>
            <p className="text-slate-300 mb-3">
              Residents of California, Virginia, Colorado, Connecticut, Texas, and other US states with comprehensive
              consumer privacy statutes have specific transparency and opt-out rights:
            </p>
            <ul className="space-y-2.5 text-slate-300 list-disc pl-5">
              <li>
                <strong className="text-white">No Sale of Personal Information:</strong> C4U TECH · WakeUp AI does{' '}
                <strong className="text-white">not</strong> sell your personal information for monetary consideration, nor
                do we sell contact lists, video footage, or audio recordings.
              </li>
              <li>
                <strong className="text-white">Cross-Context Behavioral Advertising (&ldquo;Sharing&rdquo;):</strong>{' '}
                When Free Tier ads are served by Google AdMob without restriction, identifiers such as your Android
                Advertising ID, IP-derived region, and ad engagement signals may constitute &ldquo;sharing&rdquo; for
                targeted advertising under CCPA/CPRA or targeted advertising under state privacy laws.
              </li>
              <li>
                <strong className="text-white">How to Opt Out:</strong> (1) Open{' '}
                <em>Settings &rarr; Privacy Policy, Terms &amp; Ad Consent &rarr; Manage Ad Consent Preferences</em>{' '}
                whenever regional UMP privacy options appear; (2) delete or reset your Advertising ID in Android{' '}
                <em>Settings &rarr; Privacy &rarr; Ads</em>; (3) adjust{' '}
                <a
                  href="https://myadcenter.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                >
                  Google My Ad Center
                </a>{' '}
                preferences; or (4) upgrade to <code className="vc-code">pro_lifetime</code> to disable Google AdMob
                permanently.
              </li>
              <li>
                <strong className="text-white">Non-Discrimination:</strong> We never discriminate against you for
                exercising privacy rights. Every core camera recording and timestamp tool functions regardless of
                personalized ad consent.
              </li>
            </ul>
          </section>

          {/* 10. Security, Retention & Deletion */}
          <section
            id="section-security-retention"
            className="vc-surface-card p-6 sm:p-8 rounded-2xl cyber-glass border border-slate-800/90 bg-slate-950/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)] scroll-mt-28"
          >
            <h2 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4] shrink-0" aria-hidden="true" />
              <span>10. Security Controls, Data Retention &amp; Deletion Instructions</span>
            </h2>
            <p className="text-slate-300 mb-3">
              We enforce defense-in-depth protections verified across our Android configuration:
            </p>
            <ul className="space-y-2.5 text-slate-300 list-disc pl-5 mb-5">
              <li>
                <strong className="text-white">Strict HTTPS Policy:</strong> Our{' '}
                <code className="vc-code">network_security_config.xml</code> sets{' '}
                <code className="vc-code">cleartextTrafficPermitted=&quot;false&quot;</code> globally so third-party SDK
                network requests use TLS/HTTPS transport encryption.
              </li>
              <li>
                <strong className="text-white">Hardware-Backed Local Encryption:</strong> On-device Pro verification
                records, 24-hour unlock timestamps, and settings are stored inside Jetpack Security{' '}
                <code className="vc-code">EncryptedSharedPreferences</code> using AES-256-GCM master keys and
                AES-256-SIV key encryption.
              </li>
              <li>
                <strong className="text-white">Cloud Backup &amp; Transfer Exclusion:</strong>{' '}
                <code className="vc-code">backup_rules.xml</code> and{' '}
                <code className="vc-code">data_extraction_rules.xml</code> explicitly exclude{' '}
                <code className="vc-code">camera_pro_secure_prefs.xml</code> and{' '}
                <code className="vc-code">camera_pro_prefs.xml</code> from Android cloud backups and device-to-device
                transfers. Reinstalling restores legitimate purchases securely via Google Play Billing.
              </li>
            </ul>

            <div tabIndex={0} role="region" aria-labelledby="caption-retention" className="vc-table-wrapper my-5">
              <table className="vc-table vc-tbl-retention">
                <caption id="caption-retention">Data Storage Locations, Retention Windows &amp; Deletion Steps</caption>
                <thead>
                  <tr>
                    <th scope="col">Data Type</th>
                    <th scope="col">Where Stored</th>
                    <th scope="col">Retention Period</th>
                    <th scope="col">How to Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">MP4 Videos &amp; Burned Timestamps</th>
                    <td>
                      Your device (<code className="vc-code">Movies/ManualVideoCamera</code>)
                    </td>
                    <td>Stored locally until you delete them</td>
                    <td>Delete directly in your phone&apos;s Gallery or Files app anytime.</td>
                  </tr>
                  <tr>
                    <th scope="row">App Preferences &amp; Unlock State</th>
                    <td>
                      On-device encrypted storage (<code className="vc-code">camera_pro_secure_prefs</code>)
                    </td>
                    <td>Until app storage is cleared or app is uninstalled</td>
                    <td>
                      Open Android <em>Settings &rarr; Apps &rarr; Manual Video Camera &rarr; Storage &rarr; Clear storage</em>
                      , or uninstall the app.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Firebase Analytics &amp; Performance Logs</th>
                    <td>Google Firebase servers (aggregated, non-media)</td>
                    <td>Per Google Analytics event retention schedules (typically 2–14 months) and standard Performance limits</td>
                    <td>
                      Restrict via UMP Consent Mode settings in-app or uninstall; email{' '}
                      <a
                        href="mailto:contact@c4utech.com"
                        className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                      >
                        contact@c4utech.com
                      </a>{' '}
                      for assistance.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Firebase Crashlytics Reports</th>
                    <td>Google Firebase Crashlytics servers</td>
                    <td>Typically 90 days per Google Firebase Crashlytics retention policy</td>
                    <td>Uninstalling stops all future crash diagnostics automatically.</td>
                  </tr>
                  <tr>
                    <th scope="row">Google Play Purchase History</th>
                    <td>Google Play / Google Payments (Google LLC)</td>
                    <td>Retained by Google LLC as required for billing restoration, fraud prevention, and tax compliance</td>
                    <td>View or manage through your Google Account &amp; Google Payments settings.</td>
                  </tr>
                  <tr>
                    <th scope="row">Support Email Correspondence</th>
                    <td>C4U Tech support email inbox</td>
                    <td>Retained only as long as necessary to resolve your inquiry or satisfy legal obligations</td>
                    <td>
                      Send a deletion request from the same email address to{' '}
                      <a
                        href="mailto:contact@c4utech.com"
                        className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                      >
                        contact@c4utech.com
                      </a>
                      .
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 11. Children's Privacy */}
          <section
            id="section-children"
            className="vc-surface-card p-6 sm:p-8 rounded-2xl cyber-glass border border-slate-800/90 bg-slate-950/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)] scroll-mt-28"
          >
            <h2 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4] shrink-0" aria-hidden="true" />
              <span>11. Children&apos;s Privacy</span>
            </h2>
            <p className="text-slate-300 mb-3">
              Manual Video Camera is designed for general adult audiences (security monitoring, dashcam capture,
              documentation, and time-lapse creation) and is{' '}
              <strong className="text-white">not directed to children under the age of 13</strong> (or the equivalent
              minimum age of digital consent in your country, such as 13–16 in the EEA/UK).
            </p>
            <p className="text-slate-300">
              We configure Google User Messaging Platform with{' '}
              <code className="vc-code">setTagForUnderAgeOfConsent(false)</code> and do not knowingly collect personal
              information from children. If you are a parent or legal guardian and believe your child has sent personal
              information to us (for example, via customer support email), please contact{' '}
              <a
                href="mailto:contact@c4utech.com"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
              >
                contact@c4utech.com
              </a>{' '}
              so we can promptly delete it.
            </p>
          </section>

          {/* 12. Lawful Recording, Updates & Contact Us */}
          <section
            id="section-contact"
            className="vc-surface-card p-6 sm:p-8 rounded-2xl cyber-glass border border-cyan-500/30 bg-slate-950/80 shadow-[0_0_25px_rgba(0,245,212,0.1)] scroll-mt-28"
          >
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-5 h-5 text-cyan-400 shrink-0" aria-hidden="true" />
              <h2 className="font-display text-xl font-bold text-white">
                12. Lawful Recording Responsibility, Policy Updates &amp; Contact Us
              </h2>
            </div>
            <p className="text-slate-300 mb-3">
              Manual Video Camera displays an active recording indicator and mandatory persistent foreground notification
              whenever recording runs in the background. You are solely responsible for obeying all local video
              surveillance, audio wiretapping, workplace notice, and privacy consent laws when operating camera,
              microphone, background, or silent modes. See our{' '}
              <a href="/videocamera/terms" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4">
                Terms of Use
              </a>{' '}
              for full legal terms.
            </p>
            <p className="text-slate-300 mb-4">
              We may update this Privacy Policy periodically to reflect app updates, new Android platform requirements,
              or regulatory changes. Any revision takes effect when posted on this page with an updated Effective Date.
            </p>
            <ul className="space-y-2 text-slate-300 list-disc pl-5 mb-6">
              <li>
                <strong className="text-white">Publisher &amp; Data Controller:</strong> C4U TECH · WakeUp AI
              </li>
              <li>
                <strong className="text-white">Support &amp; Privacy Email:</strong>{' '}
                <a
                  href="mailto:contact@c4utech.com"
                  className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                >
                  contact@c4utech.com
                </a>{' '}
                /{' '}
                <a
                  href="mailto:wakeup.ai.dev@gmail.com"
                  className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                >
                  wakeup.ai.dev@gmail.com
                </a>
              </li>
              <li>
                <strong className="text-white">Office Address:</strong> 7th Floor, House-262/263, Road No 1, Block B,
                Bashundhara R/A, Dhaka 1229, Bangladesh
              </li>
              <li>
                <strong className="text-white">Official Privacy Policy:</strong>{' '}
                <a
                  href="https://www.c4utech.com/videocamera/privacy-policy"
                  className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                >
                  Manual Video Camera Privacy Policy
                </a>
              </li>
              <li>
                <strong className="text-white">Official Terms of Use:</strong>{' '}
                <a
                  href="https://www.c4utech.com/videocamera/terms"
                  className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                >
                  Manual Video Camera Terms of Use
                </a>
              </li>
            </ul>

            <div className="vc-actions flex flex-wrap items-center gap-3">
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
                <Shield className="w-4 h-4 shrink-0 text-cyan-400" aria-hidden="true" />
                <span>Back to C4U Tech</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
