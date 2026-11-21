# WakeUp AI Studio

Official web presence and portfolio for **WakeUp AI** — an engineering studio specializing in native mobile applications (Android/iOS), AI integrations, and Google Play closed testing services, built in partnership with **C4U TECH**.

- **Live URL:** [c4utech.com/wakeupai](https://c4utech.com/wakeupai)
- **Deployment Mirror:** [wakeupai-mauve.vercel.app](https://wakeupai-mauve.vercel.app)
- **Developer Storefront:** [WakeUp AI on Google Play](https://play.google.com/store/apps/developer?id=WakeUp+AI)

---

## Published Applications on Google Play

WakeUp AI builds and maintains utilities focused on on-device privacy, automation, and offline-first intelligence:

| Application | Description | Link |
| :--- | :--- | :--- |
| **Alarm Clock - WakeUp AI** | Smart wake-up utility featuring QR code verification, step counter missions, on-device AI detection, and math challenges. Designed for heavy sleepers. | [Google Play](https://play.google.com/store/apps/details?id=com.wakeupaiapp.alarmclock) |
| **Auto Expense Tracker** | 100% offline financial organizer that automatically logs expenses and income through on-device notification parsing with zero bank credentials required. | [Google Play](https://play.google.com/store/apps/details?id=com.expensetracker.wakeupai) |
| **AlertZen Notification Alarm** | Critical alert manager that turns important notifications into persistent audio alarms, bypassing Silent and Do Not Disturb (DND) modes when urgent. | [Google Play](https://play.google.com/store/apps/details?id=com.alertzennotification.wakeupai) |

---

## Website Features

- **Interactive 3D Constellation Viewport:** Custom WebGL particle canvas ("Cyber-Ocean") built with Three.js and Google Draco 3D geometry compression.
- **Client-Side SPA Architecture:** Fast routing for studio services, client portfolio, 7-stage engineering process, pricing tiers, and FAQ.
- **Dedicated Legal & Compliance Infrastructure:** Production policy pages for Google Play data safety disclosures:
  - `/privacy-policy` & `/terms` — General studio policies
  - `/videocamera/privacy-policy` & `/videocamera/terms` — Compliance portal for camera utilities
- **Accessibility & Responsive Design:**
  - High-contrast Cyber-Ocean color palette conforming to WCAG AA guidelines
  - Native OS text-scaling support (`<meta name="text-scale" content="scale">`)
  - Full keyboard navigability with programmatic skip links targeting main content landmarks
  - Complete dark-mode optimization with `@media (forced-colors: active)` fallbacks

---

## Tech Stack

- **Framework & Language:** [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 6](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/), [Lucide React](https://lucide.dev/)
- **3D Graphics:** [Three.js](https://threejs.org/), Google Draco WASM Decoder, Motion
- **Hosting:** [Vercel](https://vercel.com/) (configured via `vercel.json` rewrites)

---

## Project Structure

```text
wakeup-ai/
├── public/                     # Static assets, logos, and Draco WASM decoders
├── src/
│   ├── components/             # UI sections and standalone pages
│   │   ├── cyber-ocean/        # Three.js 3D WebGL particle viewport
│   │   ├── Header.tsx          # Navigation bar with responsive drawer
│   │   ├── Hero.tsx            # Studio hero section with interactive 3D HUD
│   │   ├── Products.tsx        # In-house Google Play application catalog
│   │   ├── Services.tsx        # Core capabilities (Android, iOS, AI, QA)
│   │   ├── ClientsSection.tsx  # Client projects and portfolio showcase
│   │   ├── Process.tsx         # 7-stage development lifecycle
│   │   ├── Pricing.tsx         # Development tiers & closed testing plans
│   │   ├── FAQ.tsx             # Frequently asked questions
│   │   ├── Contact.tsx         # Direct contact channels
│   │   ├── Footer.tsx          # Studio footer and legal links
│   │   ├── TermsPage.tsx       # Studio Terms of Service
│   │   ├── PrivacyPolicyPage.tsx # Studio Privacy Policy
│   │   ├── VideoCameraTermsPage.tsx # Manual Video Camera Terms
│   │   └── VideoCameraPrivacyPolicyPage.tsx # Manual Video Camera Privacy
│   ├── types/                  # TypeScript interface definitions
│   ├── App.tsx                 # Route coordinator and skip navigation
│   ├── main.tsx                # Entry point
│   └── index.css               # Theme definitions, custom glow, and typography
├── index.html                  # HTML template with Open Graph & Schema.org data
├── vite.config.ts              # Vite build configuration
├── vercel.json                 # Vercel SPA routing rules
└── package.json                # Project dependencies and build scripts
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.x or higher)
- npm, pnpm, or yarn

### Installation & Run

1. Clone the repository:
   ```bash
   git clone https://github.com/szamanhmm/wakeup-ai.git
   cd wakeup-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview the production build locally:
   ```bash
   npm run preview
   ```

---

## Studio & Developer Contact

- **Email:** [wakeup.ai.dev@gmail.com](mailto:wakeup.ai.dev@gmail.com)
- **Strategic Tech Partner:** [C4U TECH](https://c4utech.com)
- **LinkedIn:** [WakeUp AI Studio](https://www.linkedin.com/showcase/wakeup-ai)
- **Business Management:** [Saifuz Zaman on Upwork](https://www.upwork.com/freelancers/~017c08c6bfe9705ad6)

---

## License

Copyright © 2026 WakeUp AI · C4U TECH. All rights reserved.
