import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MotionEffects } from "@/components/MotionEffects";
import { CookieConsent } from "@/components/CookieConsent";
import "./globals.css";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://caring-heart-global.vercel.app"),
  title: { default: "Caring Hearts Global Relief & Development", template: "%s | Caring Hearts Global" },
  description: "Compassion in action—supporting children and families across Africa with food, clean water, education, healthcare, and pathways to self-reliance.",
  openGraph: { title: "Caring Hearts Global Relief & Development", description: "Hope grows when communities lead the way.", images: ["/images/hero-community.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={sans.variable}><body><MotionEffects/><Header /><main>{children}</main><Footer /><CookieConsent /></body></html>;
}
