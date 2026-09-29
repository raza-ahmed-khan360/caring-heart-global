"use client";

import Link from "next/link";
import { Check, ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { useEffect, useState } from "react";

const storageKey = "chg-cookie-consent";
const openPreferencesEvent = "chg-open-cookie-preferences";

type Preferences = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
};

const defaults: Preferences = { essential: true, analytics: false, marketing: false };

export function CookiePreferencesButton() {
  return <button type="button" className="text-left transition-colors hover:text-white" onClick={() => window.dispatchEvent(new Event(openPreferencesEvent))}>Cookie preferences</button>;
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [managing, setManaging] = useState(false);
  const [preferences, setPreferences] = useState<Preferences>(defaults);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const saved = window.localStorage.getItem(storageKey);
        if (!saved) setVisible(true);
        else setPreferences({ ...defaults, ...JSON.parse(saved).preferences });
      } catch {
        setVisible(true);
      }
    }, 0);

    const open = () => { setManaging(true); setVisible(true); };
    window.addEventListener(openPreferencesEvent, open);
    return () => { window.clearTimeout(timer); window.removeEventListener(openPreferencesEvent, open); };
  }, []);

  const save = (next: Preferences) => {
    setPreferences(next);
    window.localStorage.setItem(storageKey, JSON.stringify({ version: 1, savedAt: new Date().toISOString(), preferences: next }));
    setVisible(false);
    setManaging(false);
  };

  if (!visible) return null;

  return <aside className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-[1180px] overflow-hidden rounded-[26px] border border-black/10 bg-white shadow-[0_24px_80px_rgba(0,0,0,.24)] sm:inset-x-6 sm:bottom-6" aria-label="Cookie preferences">
    <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[1fr_auto] lg:items-center">
      <div className="max-w-3xl">
        <p className="eyebrow flex items-center gap-2"><span className="grid h-8 w-8 place-items-center rounded-full bg-[#ffe319]"><Check size={16}/></span>Your privacy choices</p>
        <h2 className="mt-3 text-2xl sm:text-3xl">Cookies, with you in control.</h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-black/65">We use essential cookies to keep this site working. With your permission, optional analytics and marketing cookies can help us improve the experience and understand the reach of our work. Read our <Link href="/cookie-policy" className="font-semibold underline underline-offset-4">Cookie Policy</Link>.</p>
      </div>
      <div className="grid gap-2 sm:grid-cols-3 lg:w-[420px]">
        <button type="button" onClick={() => save(defaults)} className="button-light !border !border-black/12 !px-4">Decline all</button>
        <button type="button" onClick={() => setManaging(value => !value)} className="button-cyan !px-4">Manage <ChevronDown size={16} className={managing ? "rotate-180" : ""}/></button>
        <button type="button" onClick={() => save({ essential: true, analytics: true, marketing: true })} className="button-primary !px-4">Accept all</button>
      </div>
    </div>
    {managing && <div className="border-t border-black/10 bg-[#f7f4f0] p-5 sm:p-7">
      <div className="mb-5 flex items-center justify-between"><p className="flex items-center gap-2 font-semibold"><SlidersHorizontal size={18}/>Manage cookie preferences</p><button type="button" onClick={() => setManaging(false)} aria-label="Close cookie preferences" className="grid h-9 w-9 place-items-center rounded-full bg-white"><X size={17}/></button></div>
      <div className="grid gap-3 md:grid-cols-3">
        <PreferenceCard title="Essential" description="Required for security and for remembering your privacy choice." checked disabled onChange={() => {}}/>
        <PreferenceCard title="Analytics" description="Helps us understand visits and improve the site when analytics are enabled." checked={preferences.analytics} onChange={analytics => setPreferences(current => ({ ...current, analytics }))}/>
        <PreferenceCard title="Marketing" description="Allows future campaign measurement and relevant outreach when enabled." checked={preferences.marketing} onChange={marketing => setPreferences(current => ({ ...current, marketing }))}/>
      </div>
      <div className="mt-5 flex justify-end"><button type="button" onClick={() => save(preferences)} className="button-ghost">Save preferences</button></div>
    </div>}
  </aside>;
}

function PreferenceCard({ title, description, checked, disabled = false, onChange }: { title: string; description: string; checked: boolean; disabled?: boolean; onChange: (checked: boolean) => void }) {
  return <label className="flex cursor-pointer items-start justify-between gap-4 rounded-2xl bg-white p-4">
    <span><span className="font-semibold">{title}</span><span className="mt-1 block text-xs leading-5 text-black/55">{description}</span></span>
    <input type="checkbox" className="mt-1 h-5 w-5 accent-[#222]" checked={checked} disabled={disabled} onChange={event => onChange(event.target.checked)}/>
  </label>;
}
