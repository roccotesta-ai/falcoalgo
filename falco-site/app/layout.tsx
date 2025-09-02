import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Falco — Algorithmic Trading Tools",
  description: "Falco delivers automated futures strategies and pro-grade indicators.",
  openGraph: { title: "Falco — Algorithmic Trading Tools", description: "Automated strategies and pro-grade indicators.", url: "https://example.com", siteName: "Falco", locale: "en_US", type: "website" },
  icons: { icon: "/logo.svg" }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-dvh">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
