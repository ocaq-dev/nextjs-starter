<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./public/logo-white.png">
  <img alt="Ocaq Logo" src="./public/logo-black.png" width="72" height="72">
</picture>

# Next.js Starter · Ocaq Cloud

A clean, production-ready starter template for [Next.js 15](https://nextjs.org/) App Router, pre-configured for automated deployment on [Ocaq Cloud](https://ocaq.dev).

[![Deploy to Ocaq](https://img.shields.io/badge/Deploy%20to-Ocaq%20Cloud-black?style=for-the-badge&logoColor=white)](https://ocaq.dev/dashboard/new)
[![Next.js 15](https://img.shields.io/badge/Next.js-15.1-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React 19](https://img.shields.io/badge/React-19.0-20232a?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)

</div>

---

## Features

- **App Router & React 19:** React Server Components (`RSC`), streaming SSR responses, and Turbopack dev server.
- **Ocaq Optimized:** Pre-configured `output: "standalone"` in `next.config.mjs` for lean Docker container builds with sub-second rollbacks.
- **Tailwind CSS & Theme Persistence:** Semantic monochrome design tokens matching Ocaq's aesthetic with zero-flash dark/light mode toggle.
- **Strict TypeScript:** Strict compiler options with zero `any` policy and pre-configured ESLint rules.
- **Clean Structure:** Standardized `src/app` architecture with isolated components and icons.

---

## Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/ocaq-dev/nextjs-starter.git my-app
cd my-app
npm install
```

### 2. Run Local Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deploy to Ocaq Cloud

### Option 1: Via Ocaq Dashboard (Recommended)

1. Push your project to your GitHub account (or clone directly via Ocaq template picker).
2. Go to [ocaq.dev/dashboard/new](https://ocaq.dev/dashboard/new).
3. Select your repository. Ocaq automatically detects Next.js:
   - **Framework Preset:** `Next.js`
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
4. Click **Deploy**. Your app will be live with free automated SSL, CDN edge caching, and preview URLs.

---

## Project Structure

```text
├── public/
│   ├── logo-black.png     # Ocaq logo (light mode)
│   └── logo-white.png     # Ocaq logo (dark mode)
├── src/
│   ├── app/
│   │   ├── globals.css    # Tailwind directives & CSS variables
│   │   ├── layout.tsx     # Root layout with theme script
│   │   └── page.tsx       # Landing page
│   └── components/
│       ├── CopyButton.tsx  # Terminal copy helper
│       └── ThemeToggle.tsx # Dark / light mode toggle
├── next.config.mjs        # Next.js standalone config
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts     # Monochrome color tokens
└── tsconfig.json
```

---

## Available Scripts

| Command | Action |
|---|---|
| `npm run dev` | Starts local Next.js development server on `localhost:3000` |
| `npm run build` | Compiles production bundle with standalone container output |
| `npm run start` | Boots the built standalone server in production mode |
| `npm run lint` | Runs ESLint analysis |

---

## License

MIT © [Ocaq Cloud](https://ocaq.dev)

