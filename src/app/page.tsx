import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, ShieldCheck, Sparkles, Users } from "lucide-react";
import { programs } from "@/lib/content";

export default function Home(){return <>
 <section className="relative min-h-[650px] overflow-hidden bg-[#222] text-white lg:min-h-[690px]">
  <Image src="/images/hero-community.png" alt="A community worker walking with children near a clean-water point" fill priority className="object-cover object-[64%_center]" sizes="100vw"/>
  <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/38 to-black/5"/>
  <div className="container-shell relative flex min-h-[650px] items-end pb-24 pt-16 lg:min-h-[690px] lg:items-center lg:pb-12">
   <div className="max-w-[640px]"><p className="eyebrow">Compassion in action</p><h1 className="display-title mt-5 text-5xl sm:text-7xl lg:text-[5.25rem]">Care that reaches further</h1><p className="mt-6 max-w-[580px] text-lg leading-8 text-white/88">Caring Hearts supports children and families across Africa with immediate relief and community-led pathways to a more secure future.</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/giving-page-1-1" className="button-primary">Make a difference <ArrowRight size={17}/></Link><Link href="/programs" className="button-cyan">Explore our programs <ArrowRight size={17}/></Link></div></div>
  </div>
 </section>

 <section className="relative z-10 -mt-9 rounded-t-[38px] bg-white pb-24 pt-20 lg:pb-28 lg:pt-24"><div className="container-shell">
  <div className="mx-auto max-w-3xl text-center"><p className="eyebrow">Relief today. Resilience tomorrow.</p><h2 className="section-title mt-5">Supporting dignity and opportunity, every day</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/65">We respond to urgent needs while investing in practical solutions that help families and communities move forward on their own terms.</p></div>
  <div className="mt-14 grid gap-6 lg:grid-cols-2">
   <article className="soft-card hover-rise flex min-h-[610px] flex-col"><div className="p-7 sm:p-10"><p className="eyebrow">Immediate relief</p><h3 className="mt-4 text-4xl sm:text-5xl">Food that brings comfort and possibility</h3><p className="mt-5 max-w-lg text-lg leading-8 text-black/65">Nutritious meals, family food packages, and feeding programs help children thrive and families regain stability.</p><Link href="/programs" className="button-cyan mt-7">Food programs <ArrowRight size={17}/></Link></div><div className="relative mt-auto h-[290px]"><Image src="/images/grain-giving.webp" alt="Rice grains shared by hand" fill className="object-cover" sizes="(max-width:1024px) 100vw,50vw"/></div></article>
   <article className="soft-card hover-rise flex min-h-[610px] flex-col"><div className="p-7 sm:p-10"><p className="eyebrow">Lasting development</p><h3 className="mt-4 text-4xl sm:text-5xl">Community power that lasts beyond a project</h3><p className="mt-5 max-w-lg text-lg leading-8 text-black/65">Clean water, education, health support, and livelihoods are designed with communities—not delivered at a distance.</p><Link href="/about" className="button-primary mt-7">How we work <ArrowRight size={17}/></Link></div><div className="relative mt-auto h-[290px]"><Image src="/images/community-collage.webp" alt="Hands holding a heart-shaped stone" fill className="object-cover" sizes="(max-width:1024px) 100vw,50vw"/></div></article>
  </div>
 </div></section>

 <section className="bg-[#fff9d1] py-24 lg:py-28"><div className="container-shell">
  <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">What we do</p><h2 className="section-title mt-5">Connected programs for real life</h2></div><p className="max-w-2xl self-end text-lg leading-8 text-black/65">Food, water, learning, healthcare, energy, and income are deeply connected. Our programs work together to meet the whole picture.</p></div>
  <div className="hide-scrollbar mt-12 flex snap-x gap-5 overflow-x-auto pb-4">{programs.map(({title,description,icon:Icon},i)=><article key={title} className="hover-rise min-h-[410px] w-[310px] shrink-0 snap-start rounded-[28px] bg-white p-7 sm:w-[350px]"><div className={`grid h-16 w-16 place-items-center rounded-full ${i%2===0?"bg-[#48d6d2]":"bg-[#ffe319]"}`}><Icon size={27}/></div><p className="mt-14 text-xs font-bold text-black/40">{String(i+1).padStart(2,"0")}</p><h3 className="mt-3 text-3xl">{title}</h3><p className="mt-4 leading-7 text-black/62">{description}</p><Link href="/giving-page-1-1" className="mt-7 inline-flex items-center gap-2 font-semibold">Support this work <ArrowRight size={17}/></Link></article>)}</div>
 </div></section>

 <section className="py-24 lg:py-28"><div className="container-shell">
  <div className="mx-auto max-w-3xl text-center"><p className="eyebrow">Who we support</p><h2 className="section-title mt-5">Designed around people, not assumptions</h2><p className="mt-6 text-lg leading-8 text-black/65">Our work starts by listening—to families, local leaders, volunteers, and the people closest to each challenge.</p></div>
  <div className="mt-14 grid gap-6 lg:grid-cols-3">
   {[{tag:"Protect childhood",title:"Children",copy:"Nutrition, education, healthcare, and safe opportunities help children learn, grow, and imagine more.",icon:Sparkles,color:"bg-[#fff9d1]"},{tag:"Strengthen stability",title:"Families",copy:"Relief and livelihood support help households move from uncertainty toward greater independence.",icon:Heart,color:"bg-[#daf7f6]"},{tag:"Build local power",title:"Communities",copy:"Local knowledge and leadership shape solutions that remain useful long after a program begins.",icon:Users,color:"bg-[#f7f4f0]"}].map(({tag,title,copy,icon:Icon,color})=><article key={title} className={`${color} hover-rise rounded-[28px] p-8`}><Icon size={34}/><p className="eyebrow mt-16">{tag}</p><h3 className="mt-4 text-4xl">{title}</h3><p className="mt-5 leading-7 text-black/65">{copy}</p><Link href="/programs" className="mt-8 inline-flex items-center gap-2 font-semibold">Learn more <ArrowRight size={17}/></Link></article>)}
  </div>
 </div></section>

 <section className="bg-[#daf7f6] py-24 lg:py-28"><div className="container-shell grid items-center gap-12 lg:grid-cols-2">
  <div className="relative aspect-[4/3] overflow-hidden rounded-[30px]"><Image src="/images/hero-community.png" alt="Children and a community worker walking together" fill className="object-cover object-[70%_center]" sizes="(max-width:1024px) 100vw,50vw"/></div>
  <div className="lg:pl-8"><p className="eyebrow">Why dignity matters</p><h2 className="section-title mt-5">Hope works best when it belongs to everyone</h2><p className="mt-6 text-lg leading-8 text-black/65">We believe people should be seen for their strengths—not reduced to their hardest moment. Respect, collaboration, and responsible stewardship guide every step.</p><div className="mt-8 grid gap-4 sm:grid-cols-2"><p className="flex gap-3"><ShieldCheck className="shrink-0"/>Registered 501(c)(3)</p><p className="flex gap-3"><Heart className="shrink-0"/>Community-led action</p></div><Link href="/our-mission-vision" className="button-ghost mt-9">Our mission & vision <ArrowRight size={17}/></Link></div>
 </div></section>

 <section className="py-24 lg:py-28"><div className="container-shell rounded-[34px] bg-[#222] px-6 py-16 text-center text-white sm:px-12 lg:py-24"><p className="eyebrow text-[#ffe319]">Make an impact today</p><h2 className="section-title mx-auto mt-5 max-w-3xl">A small act of care can change what tomorrow looks like</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">Your contribution helps provide food, clean water, education, health support, and lasting opportunity.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><Link href="/giving-page-1-1" className="button-primary">Donate now <ArrowRight size={17}/></Link><Link href="/contact" className="button-cyan">Get involved <ArrowRight size={17}/></Link></div></div></section>
 </>}
