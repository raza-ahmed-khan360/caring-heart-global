"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowRight, ArrowUpRight, Asterisk, Plus } from "lucide-react";
import { useRef } from "react";
import { programs } from "@/lib/content";

const reveal={initial:{opacity:0,y:48},whileInView:{opacity:1,y:0},viewport:{once:true,margin:"-12%"},transition:{duration:.8,ease:[.22,1,.36,1] as [number,number,number,number]}};

export function KineticHome(){
 const hero=useRef<HTMLElement>(null);const reduce=useReducedMotion();
 const {scrollYProgress}=useScroll();const {scrollYProgress:heroProgress}=useScroll({target:hero,offset:["start start","end start"]});
 const imageY=useTransform(heroProgress,[0,1],[0,reduce?0:160]);const titleX=useTransform(heroProgress,[0,1],[0,reduce?0:-80]);
 return <>
  <motion.div className="fixed left-0 top-0 z-[80] h-[3px] w-full origin-left bg-[#ef5d3b]" style={{scaleX:scrollYProgress}}/>
  <section ref={hero} className="grain relative min-h-[760px] overflow-hidden bg-[#111612] text-[#f1eee5] lg:min-h-[calc(100vh-76px)]">
   <motion.div style={{y:imageY}} className="absolute inset-y-0 right-0 w-full opacity-70 lg:w-[58%]"><Image src="/images/hero-community.png" alt="A community worker and children returning from a village water point" fill className="object-cover object-[62%_center] grayscale-[18%]" priority sizes="(max-width:1024px) 100vw,58vw"/><div className="absolute inset-0 bg-gradient-to-r from-[#111612] via-[#111612]/25 to-transparent lg:from-[#111612]/80"/></motion.div>
   <div className="absolute right-[6%] top-[8%] hidden h-40 w-40 animate-[spin_18s_linear_infinite] rounded-full border border-[#d9ff72]/60 lg:grid lg:place-items-center"><div className="h-2 w-2 bg-[#d9ff72]"/><span className="absolute -top-2 bg-[#111612] px-2 text-[9px] font-black tracking-[.18em] text-[#d9ff72] uppercase">West Africa · 2026</span></div>
   <div className="container-shell relative z-10 flex min-h-[760px] flex-col py-9 lg:min-h-[calc(100vh-76px)]">
    <div><p className="max-w-[230px] text-[11px] font-bold leading-5 tracking-[.08em] text-white/60 uppercase">Grassroots relief.<br/>Community-led development.</p><p className="vertical-type absolute right-0 top-9 hidden text-[10px] font-black tracking-[.25em] text-[#d9ff72] uppercase lg:block">Scroll to move through the story</p></div>
    <div className="mt-16 py-2 lg:mt-[8vh]">
     <motion.p {...reveal} className="eyebrow mb-5 text-[#ef5d3b]">Caring Hearts Global</motion.p>
     <motion.h1 style={{x:titleX}} className="display-title max-w-[970px] text-[22vw] leading-[.73] sm:text-[9.7rem] lg:text-[12.2rem]"><span className="block">CARE</span><span className="ml-[10vw] block text-[#d9ff72] lg:ml-[140px]">MOVES</span><span className="block outline-type">HERE.</span></motion.h1>
    </div>
    <div className="mt-auto grid items-end gap-7 border-t border-white/25 pt-6 md:grid-cols-[1fr_1fr_auto]"><p className="max-w-sm text-sm leading-6 text-white/62">Food. Water. Education. Health. The work is immediate; the goal is lasting independence.</p><p className="max-w-sm text-base leading-7">We stand with children and families across Africa to turn urgent relief into a future with options.</p><Link href="/giving-page-1-1" className="button-primary whitespace-nowrap">Move hope forward <ArrowUpRight size={16}/></Link></div>
   </div>
  </section>

  <div className="overflow-hidden border-y border-[#11251f] bg-[#d9ff72] py-4 text-[#111612]"><div className="ticker font-black tracking-[.1em] uppercase"><span>Food security <i/> Clean water <i/> Education <i/> Health <i/> Self-reliance <i/> Emergency aid <i/> Solar energy <i/> Zakat <i/></span><span aria-hidden="true">Food security <i/> Clean water <i/> Education <i/> Health <i/> Self-reliance <i/> Emergency aid <i/> Solar energy <i/> Zakat <i/></span></div></div>

  <section className="relative overflow-hidden py-24 lg:py-40"><div className="container-shell">
   <div className="grid gap-12 lg:grid-cols-[160px_1fr]"><div className="flex items-start gap-3"><Asterisk className="text-[#ef5d3b]"/><span className="eyebrow">Our position</span></div><motion.div {...reveal}><h2 className="display-title max-w-[980px] text-[13vw] sm:text-[7.5rem]">We don’t arrive with answers. <span className="text-[#ef5d3b] italic">We listen.</span></h2><div className="mt-14 grid gap-8 border-t border-[#11251f]/25 pt-7 md:grid-cols-2"><p className="text-xl leading-8">Real change holds when communities own it. That means local knowledge leads, dignity is non-negotiable, and every program has a life beyond us.</p><div className="md:pl-12"><p className="leading-7 text-[#11251f]/63">We pair immediate relief with long-term development across underserved regions of West Africa—moving from what is needed now to what makes the next crisis less likely.</p><Link href="/about" className="mt-7 inline-flex items-center gap-2 border-b border-[#11251f] pb-1 text-xs font-black tracking-wider uppercase">How we work <ArrowRight size={15}/></Link></div></div></motion.div></div>
  </div></section>

  <section className="border-y border-[#11251f]/25 bg-[#ef5d3b] text-[#111612]"><div className="grid lg:grid-cols-2">
   <motion.div {...reveal} className="relative min-h-[620px] overflow-hidden border-b border-[#111612]/30 lg:border-b-0 lg:border-r"><Image src="/images/community-collage.webp" alt="Hands holding a heart-shaped stone" fill className="object-cover grayscale mix-blend-multiply" sizes="(max-width:1024px) 100vw,50vw"/><div className="absolute inset-0 bg-[#ef5d3b]/30"/><p className="absolute left-6 top-6 z-10 max-w-[180px] text-[10px] font-black leading-5 tracking-[.14em] uppercase">Not charity from a distance. Solidarity, up close.</p><span className="absolute bottom-5 right-6 z-10 font-[family-name:var(--font-display)] text-[10rem] leading-none text-[#d9ff72]">01</span></motion.div>
   <div className="flex min-h-[620px] flex-col justify-between p-7 sm:p-12 lg:p-16"><div className="flex items-center justify-between"><p className="eyebrow">The standard</p><Plus/></div><blockquote className="display-title text-6xl sm:text-8xl">“See the person before the need.”</blockquote><div className="grid gap-5 border-t border-[#111612]/35 pt-6 sm:grid-cols-2"><p className="font-black uppercase">Dignity is not a detail.</p><p className="text-sm leading-6">It shapes the language we use, the people who decide, the images we share, and the future every project is built to protect.</p></div></div>
  </div></section>

  <section className="bg-[#f1eee5] py-24 lg:py-36"><div className="container-shell">
   <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div className="lg:sticky lg:top-28 lg:h-fit"><p className="eyebrow text-[#ef5d3b]">Eight connected systems</p><h2 className="display-title mt-5 text-7xl sm:text-8xl">One whole life.</h2><p className="mt-7 max-w-sm leading-7 text-[#11251f]/65">A child cannot learn without food. A clinic cannot work without power. A family cannot plan without water. Our programs meet people where those realities connect.</p></div><div>{programs.map(({title,description},i)=><Link href="/giving-page-1-1" key={title} className="program-row grid items-center gap-4 py-7 sm:grid-cols-[54px_1fr_1fr_auto]"><span className="font-mono text-xs opacity-50">{String(i+1).padStart(2,"0")}</span><h3 className="font-[family-name:var(--font-sans)] text-2xl font-black tracking-[-.03em] uppercase sm:text-3xl">{title}</h3><p className="text-sm leading-6 opacity-65">{description}</p><ArrowUpRight size={20}/></Link>)}</div></div>
  </div></section>

  <section className="grain overflow-hidden bg-[#111612] py-24 text-[#f1eee5] lg:py-36"><div className="container-shell grid items-center gap-16 lg:grid-cols-[1fr_.9fr]">
   <motion.div {...reveal}><p className="eyebrow text-[#d9ff72]">The long view</p><h2 className="display-title mt-6 text-[15vw] sm:text-[7.2rem]">Relief is the start.<br/><span className="outline-type">Agency is the goal.</span></h2><div className="mt-10 grid gap-6 border-t border-white/25 pt-7 sm:grid-cols-2"><p className="text-lg leading-8">We measure progress in options: the ability to learn, earn, heal, choose, and lead.</p><p className="text-sm leading-6 text-white/55">That is why self-reliance, education, solar power, clean water, and health belong in the same conversation.</p></div></motion.div><motion.div initial={{rotate:-10,scale:.85}} whileInView={{rotate:0,scale:1}} viewport={{once:true,amount:.4}} transition={{duration:1.2,ease:[.22,1,.36,1]}} className="orb mx-auto w-[72vw] max-w-[470px]"><span className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-[10px] font-black tracking-[.24em] text-white uppercase">Hope · dignity · agency</span></motion.div>
  </div></section>

  <section className="relative overflow-hidden bg-[#d9ff72] py-24 text-[#111612] lg:py-36"><ArrowDown className="absolute right-6 top-6 h-16 w-16 stroke-[1] lg:right-12 lg:top-12"/><div className="container-shell"><p className="eyebrow">Your move</p><h2 className="display-title mt-8 max-w-[1100px] text-[18vw] leading-[.75] sm:text-[10rem]">Make care<br/><span className="ml-[12vw] italic">impossible</span><br/>to ignore.</h2><div className="mt-16 flex flex-col justify-between gap-7 border-t border-[#111612]/35 pt-7 md:flex-row md:items-center"><p className="max-w-lg text-lg leading-8">One gift can meet a need today. A community-backed program can change what tomorrow looks like.</p><div className="flex flex-wrap gap-3"><Link href="/giving-page-1-1" className="button-primary">Give now <ArrowUpRight size={16}/></Link><Link href="/contact" className="button-ghost">Stand with us</Link></div></div></div></section>
 </>;
}
