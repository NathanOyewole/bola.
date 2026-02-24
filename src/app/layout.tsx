import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Nathan | Creative Engineer",
  description: "Building high-performance tools and interfaces.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistMono.variable} font-mono bg-[#0a0a0a] text-zinc-400 antialiased`}>
        {/* Added md:px-12 and md:py-24 for tablet/desktop scaling */}
        <div className="max-w-3xl mx-auto px-6 md:px-12 py-12 md:py-24">
          <nav className="flex justify-between items-center mb-16">
            <span className="text-white font-bold tracking-tighter text-xl">bola. 👾</span>
            {/* Added md:gap-8 and md:text-sm for better spacing on larger screens */}
            <div className="flex gap-4 md:gap-8 text-xs md:text-sm">
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="https://github.com/NathanOyewole" target="_blank" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </nav>
          <main>{children}</main>
          {/* Adjusted footer text size for mobile-first consistency */}
          <footer className="mt-24 pt-8 border-t border-zinc-900 text-[10px] md:text-xs text-zinc-600">
            © 2026 Built with Next.js & Coffee.
          </footer>
        </div>
      </body>
    </html>
  );
}
