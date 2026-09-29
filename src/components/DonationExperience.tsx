"use client";

import { ArrowRight, Check, LockKeyhole } from "lucide-react";
import { useState } from "react";

const donateUrl = "https://pomegranate-reed-abws.squarespace.com/giving-page-1-1";
const reasons = [
  ["Feed a Hungry Child", "Your gift provides immediate nourishment to children in crisis."],
  ["Break the Cycle of Poverty", "Help families build pathways to self-reliance and dignity."],
  ["Empower African Communities", "Every donation strengthens education, healthcare, and opportunity."],
  ["Deliver Hope in Times of Crisis", "Be the lifeline for families facing displacement and disaster."],
  ["Compassion in Action", "Your generosity becomes a real-world impact—fast and direct."],
  ["Build a Brighter Future", "Give today to help raise a generation free from struggle."],
] as const;

export function DonationExperience() {
  const [amount, setAmount] = useState(10);
  const [frequency, setFrequency] = useState("Monthly Donation");

  return <section className="bg-[#f7f3e9] py-16 lg:py-24"><div className="container-shell">
    <div className="grid gap-10 lg:grid-cols-[1fr_.82fr]">
      <div><p className="eyebrow text-[#c76542]">Why give?</p><h2 className="display-title mt-4 max-w-2xl text-5xl font-semibold sm:text-6xl">Make a donation.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-[#18342d]/70">Together, we can turn struggle into strength and despair into hope. Your contribution helps us feed the hungry, support vulnerable families, and create lasting change in West African communities. Every gift matters—and every act of giving brings us one step closer to a brighter, more compassionate world.</p>
        <div className="mt-9 grid gap-4 sm:grid-cols-2">{reasons.map(([title, copy]) => <article key={title} className="rounded-2xl bg-white p-5"><p className="flex gap-3 font-bold"><Check className="mt-0.5 shrink-0 text-[#c76542]" size={20}/>{title}</p><p className="mt-2 pl-8 text-sm leading-6 text-[#18342d]/65">{copy}</p></article>)}</div>
        <div className="mt-10 rounded-3xl bg-[#153f35] p-7 text-white"><p className="text-3xl font-semibold">Your donation is tax-deductible.</p><p className="mt-2 text-sm leading-6 text-white/68">Caring Hearts Global Relief & Development is a registered 501(c)(3) nonprofit organization. Tax ID #99-3733743.</p></div>
      </div>
      <div className="h-fit rounded-[2rem] bg-white p-6 shadow-[0_25px_70px_rgba(24,52,45,.12)] sm:p-8"><p className="eyebrow text-[#236958]">Choose your gift</p><div className="mt-5 grid grid-cols-4 gap-2">{[10,20,30,40].map(value => <button key={value} type="button" onClick={() => setAmount(value)} className={`rounded-xl border py-3 font-extrabold ${amount === value ? "border-[#c76542] bg-[#c76542] text-white" : "border-[#153f35]/15 hover:border-[#c76542]"}`}>${value}</button>)}</div>
        <label className="mt-4 block text-xs font-extrabold tracking-wider text-[#18342d]/55 uppercase">Custom amount</label><div className="mt-2 flex items-center rounded-xl border border-[#153f35]/15 px-4"><span className="font-bold">$</span><input type="number" min="1" value={amount} onChange={event => setAmount(Number(event.target.value))} className="w-full bg-transparent px-2 py-4 font-bold outline-none" aria-label="Donation amount"/></div>
        <label className="mt-5 block text-xs font-extrabold tracking-wider text-[#18342d]/55 uppercase" htmlFor="donation-frequency">Donation frequency</label><select id="donation-frequency" value={frequency} onChange={event => setFrequency(event.target.value)} className="mt-2 w-full rounded-xl border border-[#153f35]/15 bg-[#f7f3e9] px-4 py-4 font-bold outline-none">{["One-Time Donation","Weekly Donation","Monthly Donation","Quarterly Donation","Annual Donation"].map(option => <option key={option}>{option}</option>)}</select>
        <div className="my-6 border-t border-[#153f35]/10"/><div className="flex items-end justify-between"><span className="text-sm text-[#18342d]/60">Your {frequency.toLowerCase()}</span><span className="text-4xl font-bold">${amount || 0}</span></div><a href={donateUrl} target="_blank" rel="noreferrer" className="button-primary mt-6 w-full">Continue to secure donation <ArrowRight size={18}/></a><p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-[#18342d]/50"><LockKeyhole size={14}/>Secure donation processing opens in a new tab.</p>
      </div>
    </div>
  </div></section>;
}
