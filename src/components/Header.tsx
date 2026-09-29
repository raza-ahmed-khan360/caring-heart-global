"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [["About","/about"],["Programs","/programs"],["Our team","/our-team"],["Contact","/contact"]] as const;

export function Header(){
  const [open,setOpen]=useState(false); const pathname=usePathname();
  return <header className="sticky top-0 z-50 border-b border-[#153f35]/10 bg-[#fffdf8]/95 backdrop-blur-xl">
    <div className="container-shell flex h-[84px] items-center justify-between">
      <Link href="/" className="flex items-center gap-3" aria-label="Caring Hearts Global home">
        <Image src="/images/brand-mark.webp" alt="Caring Hearts Global" width={54} height={54} className="h-13 w-13" priority/>
        <span className="hidden leading-tight sm:block"><span className="block font-[family-name:var(--font-display)] text-[17px] font-bold">Caring Hearts</span><span className="block text-[10px] font-extrabold tracking-[.15em] text-[#236958] uppercase">Global relief & development</span></span>
      </Link>
      <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
        {links.map(([label,href])=><Link key={href} href={href} className={`text-sm font-bold transition-colors hover:text-[#c76542] ${pathname===href?"text-[#c76542]":"text-[#18342d]"}`}>{label}</Link>)}
        <Link href="/giving-page-1-1" className="button-primary !min-h-11 !px-5">Donate now</Link>
      </nav>
      <button onClick={()=>setOpen(v=>!v)} className="grid h-11 w-11 place-items-center rounded-full border border-[#153f35]/15 lg:hidden" aria-expanded={open} aria-label="Toggle navigation">{open?<X size={21}/>:<Menu size={21}/>}</button>
    </div>
    {open&&<nav className="border-t border-[#153f35]/10 bg-[#fffdf8] px-5 py-5 lg:hidden" aria-label="Mobile navigation"><div className="container-shell flex flex-col gap-1">{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)} className="rounded-xl px-4 py-3 font-bold hover:bg-[#dce8df]">{label}</Link>)}<Link href="/giving-page-1-1" onClick={()=>setOpen(false)} className="button-primary mt-2">Donate now</Link></div></nav>}
  </header>;
}
