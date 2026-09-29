import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export function Footer(){return <footer className="overflow-hidden bg-[#111612] text-[#f1eee5]">
 <div className="container-shell grid gap-12 border-b border-white/20 py-16 lg:grid-cols-[1.3fr_.7fr_.7fr]">
  <div><p className="eyebrow text-[#d9ff72]">Stay close to the work</p><h2 className="display-title mt-5 max-w-xl text-5xl sm:text-7xl">Care is a verb.</h2><a href="mailto:contact@caringheartsglobal.org" className="mt-8 inline-flex items-center gap-3 border-b border-[#ef5d3b] pb-2 text-sm font-black tracking-wider uppercase">Start a conversation <ArrowUpRight size={17}/></a></div>
  <div><p className="eyebrow mb-5 text-white/45">Explore</p><div className="grid gap-3 text-sm"><Link href="/about">About us</Link><Link href="/our-mission-vision">Mission & vision</Link><Link href="/programs">Programs</Link><Link href="/our-team">Our people</Link></div></div>
  <div><p className="eyebrow mb-5 text-white/45">Contact</p><div className="grid gap-3 text-sm text-white/72"><a href="mailto:contact@caringheartsglobal.org">contact@caringheartsglobal.org</a><a href="tel:+12253840471">+1 225 384 0471</a><p>Baton Rouge, LA</p><p className="mt-3 text-xs">501(c)(3) · Tax ID 99-3733743</p></div></div>
 </div>
 <div className="relative py-6"><div className="container-shell flex items-center justify-between text-[10px] font-bold tracking-widest text-white/45 uppercase"><span>© {new Date().getFullYear()} Caring Hearts</span><Image src="/images/brand-mark.webp" alt="" width={38} height={38}/><span>Compassion in action</span></div><p className="pointer-events-none absolute left-1/2 top-1/2 -z-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-[family-name:var(--font-display)] text-[16vw] leading-none text-white/[.025]">CARING HEARTS</p></div>
 </footer>}
