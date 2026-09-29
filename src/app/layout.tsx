import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const display = Playfair_Display({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://caring-hearts-global.vercel.app"),
  title: { default: "Caring Hearts Global Relief & Development", template: "%s | Caring Hearts Global" },
  description: "Compassion in action—supporting children and families across Africa with food, clean water, education, healthcare, and pathways to self-reliance.",
  openGraph: { title: "Caring Hearts Global Relief & Development", description: "Hope grows when communities lead the way.", images: ["/images/hero-community.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${sans.variable} ${display.variable}`}><body><Header /><main>{children}</main><Footer /></body></html>;
}
