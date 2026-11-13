import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Cpu,
  ExternalLink,
  Layers,
  Rocket,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CopyButton } from "@/components/CopyButton";

export default function Home() {
  const installCmd = "npx create-next-app@latest -e https://github.com/ocaq-dev/nextjs-starter";
  const devCmd = "npm install && npm run dev";

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-background">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[340px] bg-gradient-to-b from-foreground/[0.04] to-transparent blur-3xl pointer-events-none" />

      {/* Navigation */}
      <header className="relative z-10 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="https://ocaq.dev" target="_blank" className="flex items-center gap-2.5 group">
              {/* Ocaq Logo: Dark & Light mode support */}
              <div className="relative w-7 h-7 flex items-center justify-center">
                <Image
                  src="/logo-white.png"
                  alt="Ocaq"
                  width={28}
                  height={28}
                  className="hidden dark:block object-contain group-hover:scale-105 transition"
                />
                <Image
                  src="/logo-black.png"
                  alt="Ocaq"
                  width={28}
                  height={28}
                  className="block dark:hidden object-contain group-hover:scale-105 transition"
                />
              </div>
              <span className="font-semibold text-sm tracking-tight text-foreground">
                Ocaq
              </span>
            </Link>

            <span className="text-zinc-400 dark:text-zinc-600 text-sm">/</span>

            <span className="text-xs font-mono font-medium px-2 py-0.5 rounded-md border border-border bg-muted/60 text-muted-foreground">
              nextjs-starter
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="https://ocaq.dev"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition px-2 py-1"
            >
              <span>Platform Docs</span>
              <ExternalLink className="w-3 h-3" />
            </Link>

            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-20 w-full flex flex-col gap-16">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/60 text-xs font-medium text-foreground mb-6 shadow-xs">
            <Rocket className="w-3.5 h-3.5 text-foreground" />
            <span>Next.js 15 App Router · Ocaq Dev Starter</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground leading-[1.1] sm:leading-[1.1]">
            Build fast. Ship instantly to Ocaq.
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            A production-ready foundation with React 19 Server Components, TypeScript,
            and Tailwind CSS. Configured for zero-overhead container builds on Ocaq Dev.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
            <Link
              href="https://ocaq.dev/dashboard/new"
              target="_blank"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-foreground text-background font-medium text-sm hover:opacity-90 transition shadow-xs"
            >
              <span>Deploy to Ocaq</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="https://github.com/ocaq-dev"
              target="_blank"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-muted/40 hover:bg-muted text-foreground font-medium text-sm transition"
            >
              <Code2 className="w-4 h-4 text-muted-foreground" />
              <span>Explore GitHub</span>
            </Link>
          </div>

          {/* CLI Terminal Snippet */}
          <div className="mt-10 w-full max-w-xl rounded-xl border border-border bg-zinc-950 text-zinc-100 p-4 shadow-xl text-left font-mono text-xs">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800 text-zinc-400">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5" />
                <span className="text-[11px] font-sans">Quick Start</span>
              </div>
              <CopyButton text={`${installCmd} && cd nextjs-starter && ${devCmd}`} />
            </div>
            <div className="space-y-1.5 text-zinc-300">
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
                <span className="text-zinc-500 select-none">$</span>
                <span className="text-zinc-100">{installCmd}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-zinc-500 select-none">$</span>
                <span className="text-zinc-100">{devCmd}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl border border-border bg-card/60 backdrop-blur-xs flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-700 transition">
            <div className="flex flex-col gap-2.5">
              <div className="w-9 h-9 rounded-lg border border-border bg-muted/60 flex items-center justify-center text-foreground">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">
                App Router & React 19
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Modern Server Components (`RSC`), streaming SSR responses, and Turbopack fast refreshes out of the box.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/60 text-[11px] font-mono text-muted-foreground">
              next: ^15.1 · react: ^19.0
            </div>
          </div>

          <div className="p-5 rounded-xl border border-border bg-card/60 backdrop-blur-xs flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-700 transition">
            <div className="flex flex-col gap-2.5">
              <div className="w-9 h-9 rounded-lg border border-border bg-muted/60 flex items-center justify-center text-foreground">
                <Rocket className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">
                Ocaq Container Runtime
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Pre-configured `output: standalone` for ultra-lean Docker container builds and automated health-checks on Ocaq.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/60 text-[11px] font-mono text-muted-foreground">
              output: &apos;standalone&apos;
            </div>
          </div>

          <div className="p-5 rounded-xl border border-border bg-card/60 backdrop-blur-xs flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-700 transition">
            <div className="flex flex-col gap-2.5">
              <div className="w-9 h-9 rounded-lg border border-border bg-muted/60 flex items-center justify-center text-foreground">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">
                Monochrome UI Tokens
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Semantic CSS variables matching Ocaq&apos;s minimalist aesthetic with flicker-free dark and light mode persistence.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/60 text-[11px] font-mono text-muted-foreground">
              Tailwind CSS · CSS Variables
            </div>
          </div>

          <div className="p-5 rounded-xl border border-border bg-card/60 backdrop-blur-xs flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-700 transition">
            <div className="flex flex-col gap-2.5">
              <div className="w-9 h-9 rounded-lg border border-border bg-muted/60 flex items-center justify-center text-foreground">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">
                Strict Type-Safety
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Zero `any` policy with TypeScript 5, strict compiler options, and ESLint configs ready for production checks.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/60 text-[11px] font-mono text-muted-foreground">
              typescript: ^5.7 · strict
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border bg-background py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-white.png"
              alt="Ocaq"
              width={20}
              height={20}
              className="hidden dark:block object-contain"
            />
            <Image
              src="/logo-black.png"
              alt="Ocaq"
              width={20}
              height={20}
              className="block dark:hidden object-contain"
            />
            <span>
              Powered by{" "}
              <Link
                href="https://ocaq.dev"
                target="_blank"
                className="font-medium text-foreground hover:underline"
              >
                Ocaq Dev
              </Link>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <Link
              href="https://ocaq.dev"
              target="_blank"
              className="hover:text-foreground transition"
            >
              Documentation
            </Link>
            <Link
              href="https://github.com/ocaq-dev"
              target="_blank"
              className="hover:text-foreground transition"
            >
              GitHub
            </Link>
            <Link
              href="https://ocaq.dev/support"
              target="_blank"
              className="hover:text-foreground transition"
            >
              Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

