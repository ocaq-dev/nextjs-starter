import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js Starter — Ocaq Dev",
  description:
    "Production-ready Next.js App Router starter optimized for seamless deployment on Ocaq Dev.",
  icons: {
    icon: "/logo-white.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem("theme");
                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                if (stored === "light") {
                  document.documentElement.classList.remove("dark");
                } else {
                  document.documentElement.classList.add("dark");
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-foreground selection:text-background font-sans">
        {children}
      </body>
    </html>
  );
}

