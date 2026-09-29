import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Cookie Policy", description: "How Caring Hearts Global Relief & Development uses cookies and protects your privacy choices." };

export default function CookiePolicyPage() {
  return <><PageHero eyebrow="Privacy" title="Cookie Policy" description="Clear information about the small files used by this website and the choices available to you."/><section className="py-20 lg:py-28"><div className="container-shell max-w-3xl space-y-10 text-base leading-7 text-black/68">
    <section><h2 className="text-3xl text-black">What cookies are</h2><p className="mt-4">Cookies are small text files stored by your browser. They can keep a website secure, remember your choices, and—when you agree—help an organization understand how its website is used.</p></section>
    <section><h2 className="text-3xl text-black">How we use them</h2><p className="mt-4"><strong className="text-black">Essential cookies</strong> keep core features working and remember your cookie preference. They cannot be switched off through our preference panel.</p><p className="mt-3"><strong className="text-black">Analytics cookies</strong> may help us understand website visits and improve content. <strong className="text-black">Marketing cookies</strong> may support future campaign measurement. These optional categories remain off unless you choose to enable them.</p></section>
    <section><h2 className="text-3xl text-black">Your choices</h2><p className="mt-4">You can accept all optional cookies, decline them, or choose categories in the cookie panel. Reopen that panel at any time using “Cookie preferences” in the footer. You can also remove stored cookies using your browser settings.</p></section>
    <section><h2 className="text-3xl text-black">Third-party services</h2><p className="mt-4">If you continue to the secure donation service, you will visit a separate website that may set its own cookies under its own privacy terms.</p></section>
    <section><h2 className="text-3xl text-black">Contact us</h2><p className="mt-4">Questions about this policy can be sent to <a className="font-semibold text-black underline underline-offset-4" href="mailto:contact@caringheartsglobal.org">contact@caringheartsglobal.org</a>.</p><p className="mt-3 text-sm">Last updated: September 30, 2026.</p></section>
  </div></section></>;
}
