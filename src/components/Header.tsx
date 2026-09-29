"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links=[["About us","/about"],["Programs","/programs"],["Our team","/our-team"],["Discover","/our-mission-vision"]] as const;
export function Header(){const[open,setOpen]=useState(false);useEffect(()=>{document.body.style.overflow=open?"hidden":"";return()=>{document.body.style.overflow=""}},[open]);return <header className="sticky top-0 z-50 bg-white">
 <Link href="/programs" className="flex h-10 items-center justify-center gap-3 bg-[#222] px-4 text-center text-xs font-medium text-white">See how a small act can create lasting change <ArrowRight size={15}/></Link>
 <div className="container-shell flex h-[92px] items-center justify-between">
  <Link href="/" className="flex items-center gap-3"><Image src="/images/brand-mark.webp" alt="Caring Hearts Global" width={52} height={52} priority/><span className="text-[18px] font-semibold leading-[.95] tracking-[-.04em]">Caring Hearts<br/>Global</span></Link>
  <nav className="hidden items-center gap-1 rounded-full border border-black/[.06] p-1.5 shadow-sm lg:flex" aria-label="Primary navigation">{links.map(([label,href],i)=><Link key={href} href={href} className="flex items-center gap-1 rounded-full px-4 py-2.5 text-[14px] font-medium transition-colors hover:bg-[#f7f4f0]">{label}{i===0||i===3?<ChevronDown size={14}/>:null}</Link>)}</nav>
  <div className="hidden items-center gap-2 lg:flex"><Link href="/contact" className="button-light !bg-[#f7f4f0]">Contact</Link><Link href="/giving-page-1-1" className="button-ghost">Donate <ArrowRight size={17}/></Link></div>
  <button onClick={()=>setOpen(v=>!v)} className="grid h-12 w-12 place-items-center rounded-full bg-[#f7f4f0] lg:hidden" aria-expanded={open} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button>
 </div>
 {open&&<nav className="fixed inset-x-0 bottom-0 top-[132px] z-50 bg-white px-5 py-8 lg:hidden"><div className="container-shell flex h-full flex-col">{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)} className="border-b border-black/10 py-5 text-3xl font-medium">{label}</Link>)}<div className="mt-auto grid gap-3"><Link href="/contact" onClick={()=>setOpen(false)} className="button-light !bg-[#f7f4f0]">Contact us</Link><Link href="/giving-page-1-1" onClick={()=>setOpen(false)} className="button-ghost">Donate now <ArrowRight size={17}/></Link></div></div></nav>}
 </header>}
