import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export function Footer(){return <footer className="bg-[#102f28] text-white">
  <div className="container-shell grid gap-12 py-16 md:grid-cols-[1.2fr_.8fr_.9fr]">
    <div><div className="mb-5 flex items-center gap-3"><Image src="/images/brand-mark.webp" alt="" width={58} height={58} className="h-14 w-14"/><p className="font-[family-name:var(--font-display)] text-xl font-bold leading-tight">Caring Hearts<br/>Global Relief</p></div><p className="max-w-sm text-sm leading-6 text-white/70">Compassion in action—building a future where dignity and hope replace hardship and despair.</p><p className="mt-5 text-xs text-white/55">501(c)(3) nonprofit · Tax ID #99-3733743</p></div>
    <div><p className="eyebrow mb-4 text-[#e1aa4d]">Explore</p><div className="grid gap-3 text-sm font-bold text-white/80"><Link href="/about">Who we are</Link><Link href="/our-mission-vision">Mission & vision</Link><Link href="/programs">Our programs</Link><Link href="/our-team">Meet the team</Link></div></div>
    <div><p className="eyebrow mb-4 text-[#e1aa4d]">Get in touch</p><div className="grid gap-4 text-sm text-white/75"><a href="mailto:contact@caringheartsglobal.org" className="flex gap-3"><Mail size={18} className="shrink-0 text-[#e1aa4d]"/>contact@caringheartsglobal.org</a><a href="tel:+12253840471" className="flex gap-3"><Phone size={18} className="shrink-0 text-[#e1aa4d]"/>(225) 384-0471</a><p className="flex gap-3"><MapPin size={18} className="shrink-0 text-[#e1aa4d]"/>Baton Rouge, Louisiana</p><Link href="/contact" className="mt-2 flex items-center gap-1 font-bold text-white">Contact us <ArrowUpRight size={16}/></Link></div></div>
  </div><div className="border-t border-white/10 py-5 text-center text-xs text-white/50">© {new Date().getFullYear()} Caring Hearts Global Relief & Development. All rights reserved.</div>
</footer>}
