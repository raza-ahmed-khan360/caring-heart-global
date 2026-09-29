import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
export function Footer(){return <footer className="bg-[#222] text-white"><div className="container-shell py-16 lg:py-20">
 <div className="grid gap-12 border-b border-white/15 pb-14 lg:grid-cols-[1.3fr_.7fr_.7fr_.8fr]">
  <div><div className="flex items-center gap-3"><Image src="/images/brand-mark.webp" alt="" width={58} height={58}/><p className="text-xl font-semibold leading-none">Caring Hearts<br/>Global</p></div><p className="mt-6 max-w-sm text-sm leading-6 text-white/65">Compassionate relief and community-led development for children and families across Africa.</p><Link href="/giving-page-1-1" className="button-primary mt-7">Make a difference <ArrowRight size={17}/></Link></div>
  <div><p className="mb-5 text-xs font-bold uppercase text-white/40">Explore</p><div className="grid gap-3 text-sm"><Link href="/about">About us</Link><Link href="/programs">Programs</Link><Link href="/our-team">Our team</Link><Link href="/contact">Contact</Link></div></div>
  <div><p className="mb-5 text-xs font-bold uppercase text-white/40">Our work</p><div className="grid gap-3 text-sm"><Link href="/programs">Food security</Link><Link href="/programs">Clean water</Link><Link href="/programs">Education</Link><Link href="/programs">Health support</Link></div></div>
  <div><p className="mb-5 text-xs font-bold uppercase text-white/40">Contact</p><a href="mailto:contact@caringheartsglobal.org" className="flex items-center gap-2 text-sm"><Mail size={16}/>contact@caringheartsglobal.org</a><p className="mt-4 text-sm text-white/65">Baton Rouge, Louisiana<br/>+1 (225) 384-0471</p></div>
 </div><div className="flex flex-col gap-3 pt-6 text-xs text-white/45 sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} Caring Hearts Global Relief & Development</p><p>501(c)(3) nonprofit · Tax ID #99-3733743</p></div>
 </div></footer>}
