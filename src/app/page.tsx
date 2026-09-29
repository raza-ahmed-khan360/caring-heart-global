import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Globe2, Heart, ShieldCheck, Sparkles } from "lucide-react";
import { programs } from "@/lib/content";

export default function Home(){return <>
  <section className="relative min-h-[760px] overflow-hidden bg-[#153f35] text-white">
    <Image src="/images/hero-community.png" alt="A community worker walking with children near a village water point" fill className="object-cover" priority sizes="100vw"/>
    <div className="hero-overlay absolute inset-0"/><div className="paper-noise absolute inset-0"/>
    <div className="container-shell relative z-10 flex min-h-[760px] items-center py-20">
      <div className="max-w-[680px]">
        <p className="eyebrow mb-5 text-[#f2c26f]">Compassion in action · Africa</p>
        <h1 className="display-title text-6xl font-semibold sm:text-7xl lg:text-[88px]">Hope grows when communities lead.</h1>
        <p className="mt-7 max-w-[600px] text-lg leading-8 text-white/82">Together, we help children and families meet urgent needs today—and build lasting pathways toward dignity, opportunity, and self-reliance.</p>
        <div className="mt-9 flex flex-wrap gap-3"><Link href="/giving-page-1-1" className="button-primary">Make a difference <ArrowRight size={18}/></Link><Link href="/programs" className="button-light">Explore our work</Link></div>
        <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-bold text-white/80"><span className="flex items-center gap-2"><ShieldCheck size={17} className="text-[#f2c26f]"/>Registered 501(c)(3)</span><span className="flex items-center gap-2"><Globe2 size={17} className="text-[#f2c26f]"/>Community-led programs</span></div>
      </div>
    </div>
    <div className="absolute right-8 bottom-8 hidden rounded-2xl bg-white/92 p-4 text-[#153f35] shadow-xl backdrop-blur md:block"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-[#dce8df]"><Heart size={19} fill="#c76542" className="text-[#c76542]"/></span><div><p className="text-xs font-bold text-[#236958] uppercase">Every gift matters</p><p className="font-[family-name:var(--font-display)] text-lg font-bold">Small acts. Lasting change.</p></div></div></div>
  </section>

  <section className="bg-[#f7f3e9] py-20 lg:py-28"><div className="container-shell grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr]">
    <div className="relative"><div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]"><Image src="/images/community-collage.webp" alt="Hands holding a heart-shaped stone" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw"/></div><div className="absolute -right-4 -bottom-4 max-w-[230px] rounded-2xl bg-[#e1aa4d] p-5 text-[#153f35] shadow-xl sm:right-8"><Sparkles size={22}/><p className="mt-3 font-[family-name:var(--font-display)] text-xl font-bold leading-tight">Rooted in respect. Designed for lasting impact.</p></div></div>
    <div><p className="eyebrow text-[#c76542]">Who we are</p><h2 className="display-title mt-4 max-w-xl text-5xl font-semibold sm:text-6xl">Relief that reaches today. Change that lasts.</h2><p className="mt-6 text-lg leading-8 text-[#18342d]/72">Caring Hearts Global Relief and Development is a grassroots humanitarian nonprofit uplifting children and families across Africa—particularly in underserved regions of West Africa.</p><p className="mt-4 leading-7 text-[#18342d]/72">We pair direct support such as food, clean water, and basic healthcare with sustainable, community-driven solutions that address poverty and hunger at their roots.</p><Link href="/about" className="button-ghost mt-8">Our story <ArrowRight size={17}/></Link></div>
  </div></section>

  <section className="py-20 lg:py-28"><div className="container-shell">
    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow text-[#c76542]">What we do</p><h2 className="display-title mt-4 max-w-2xl text-5xl font-semibold sm:text-6xl">Eight ways we turn care into action.</h2></div><Link href="/programs" className="button-ghost shrink-0">View all programs <ArrowRight size={17}/></Link></div>
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{programs.slice(0,8).map(({title,description,icon:Icon,tone})=><article key={title} className="card-lift rounded-3xl border border-[#153f35]/10 bg-white p-6"><span className="mb-7 grid h-12 w-12 place-items-center rounded-2xl text-white" style={{backgroundColor:tone}}><Icon size={23}/></span><h3 className="text-2xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-[#18342d]/66">{description}</p></article>)}</div>
  </div></section>

  <section className="overflow-hidden bg-[#153f35] py-20 text-white lg:py-28"><div className="container-shell grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
    <div><p className="eyebrow text-[#e1aa4d]">Why your support matters</p><h2 className="display-title mt-4 max-w-2xl text-5xl font-semibold sm:text-6xl">Give people the tools to write their next chapter.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-white/72">Your generosity becomes nourishment, safety, knowledge, health, and opportunity—delivered with care and shaped by the communities we serve.</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{["Feed a hungry child","Bring clean water closer","Keep a student learning","Help a family rebuild"].map(x=><p key={x} className="flex items-center gap-3 font-bold"><span className="grid h-7 w-7 place-items-center rounded-full bg-[#e1aa4d] text-[#153f35]"><Check size={15}/></span>{x}</p>)}</div><Link href="/giving-page-1-1" className="button-primary mt-9">Give with purpose <ArrowRight size={18}/></Link></div>
    <div className="relative mx-auto w-full max-w-[520px]"><div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]"><Image src="/images/grain-giving.webp" alt="Rice grains being shared by hand" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw"/></div><div className="absolute -left-4 -bottom-5 rounded-2xl bg-[#fffdf8] px-6 py-5 text-[#153f35] shadow-2xl"><p className="eyebrow text-[#c76542]">A giving principle</p><p className="mt-1 font-[family-name:var(--font-display)] text-2xl font-bold">Dignity, always.</p></div></div>
  </div></section>

  <section className="soft-grid bg-[#f7f3e9] py-20"><div className="container-shell rounded-[2rem] bg-[#c76542] px-6 py-14 text-center text-white shadow-xl sm:px-12"><p className="eyebrow text-white/75">Join the movement</p><h2 className="display-title mx-auto mt-4 max-w-3xl text-5xl font-semibold sm:text-6xl">A more compassionate world starts with one caring heart.</h2><p className="mx-auto mt-5 max-w-2xl text-white/80">Give, volunteer, or simply help our story travel farther. Every action brings hope within reach.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Link href="/giving-page-1-1" className="button-light">Donate today</Link><Link href="/contact" className="button-ghost !border-white/40 !text-white hover:!bg-white/10">Get involved</Link></div></div></section>
</>}
