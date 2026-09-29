"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links=[["About","/about"],["Mission","/our-mission-vision"],["Programs","/programs"],["People","/our-team"],["Contact","/contact"]] as const;
export function Header(){const [open,setOpen]=useState(false);const pathname=usePathname();useEffect(()=>{document.body.style.overflow=open?"hidden":"";return()=>{document.body.style.overflow=""}},[open]);return <>
 <header className="sticky top-0 z-50 border-b border-[#11251f]/20 bg-[#f1eee5]/92 backdrop-blur-xl">
  <div className="container-shell flex h-[76px] items-center justify-between">
   <Link href="/" className="flex items-center gap-3" aria-label="Caring Hearts Global home"><Image src="/images/brand-mark.webp" alt="" width={42} height={42} className="h-10 w-10" priority/><span className="text-[11px] font-black leading-[1.05] tracking-[.08em] uppercase">Caring Hearts<br/><span className="font-medium">Global Relief</span></span></Link>
   <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">{links.map(([label,href])=><Link key={href} href={href} className={`text-[11px] font-black tracking-[.12em] uppercase transition-opacity hover:opacity-50 ${pathname===href?"underline decoration-[#ef5d3b] decoration-2 underline-offset-8":""}`}>{label}</Link>)}<Link href="/giving-page-1-1" className="flex items-center gap-2 border-l border-[#11251f]/20 pl-7 text-[11px] font-black tracking-[.12em] uppercase">Give now <ArrowUpRight size={15}/></Link></nav>
   <button onClick={()=>setOpen(v=>!v)} className="grid h-11 w-11 place-items-center border border-[#11251f] lg:hidden" aria-expanded={open} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button>
  </div>
 </header>
 {open&&<div className="fixed inset-0 z-40 flex bg-[#d9ff72] pt-[76px] lg:hidden"><div className="container-shell flex flex-1 flex-col justify-between py-10"><nav className="flex flex-col">{links.map(([label,href],i)=><Link key={href} href={href} onClick={()=>setOpen(false)} className="flex items-baseline justify-between border-b border-[#11251f]/35 py-4"><span className="display-title text-[16vw]">{label}</span><span className="text-xs font-black">0{i+1}</span></Link>)}</nav><Link href="/giving-page-1-1" onClick={()=>setOpen(false)} className="button-primary">Make an impact <ArrowUpRight size={16}/></Link></div></div>}
 </>}
