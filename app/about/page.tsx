import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CircleDot, Leaf, Wind } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Kinetic",
  description: "Why Kinetic Botanicals is built for active spaces: compact format, close-to-skin aroma, and scent-first choice.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#f0ecfb]">
        <div className="mx-auto grid max-w-[1500px] gap-8 px-5 py-16 lg:grid-cols-[1fr_.9fr] lg:px-8 lg:py-24">
          <div className="self-center">
            <p className="eyebrow">WHY KINETIC</p>
            <h1 className="mt-4 text-[clamp(4rem,8vw,8.6rem)] font-black leading-[.79] tracking-[-.08em]">SCENT FOR<br />SHARED<br />SPACE.</h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-black/58">A gym is not a nightclub, a fragrance counter, or a spa. It is a shared, high-energy environment. Kinetic Botanicals is built around that context.</p>
          </div>
          <div className="relative min-h-[520px] overflow-hidden rounded-[38px]">
            <Image src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1400&q=85" alt="Athlete in a training space" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 text-sm font-black uppercase tracking-[.14em] text-white">Movement changes the context.</p>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            [Wind, "Close-to-skin by design", "We frame these as personal aromatic roll-ons, not room-filling fragrance. That distinction matters in a shared training environment."],
            [Leaf, "Botanical, not mystical", "The brand can feel alive and sensory without leaning on vague wellness promises. The product is about aroma, ritual, and portability."],
            [CircleDot, "A cue, not a claim", "The roll-on can become part of a pre- or post-training routine without claiming to improve strength, focus, recovery, or health outcomes."],
          ].map(([Icon, title, copy]) => {
            const ItemIcon = Icon as typeof Wind;
            return <article key={String(title)} className="rounded-[30px] border border-black/10 bg-white p-7"><ItemIcon size={24} /><h2 className="mt-10 text-3xl font-black tracking-[-.05em]">{String(title)}</h2><p className="mt-4 text-sm leading-7 text-black/55">{String(copy)}</p></article>;
          })}
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="kinetic-grid rounded-[40px] bg-[#dff8f2] p-7 md:p-12">
          <p className="eyebrow">THE POSITION</p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <h2 className="text-[clamp(3.5rem,7vw,7.4rem)] font-black leading-[.82] tracking-[-.075em]">NOT COLOGNE.<br />NOT A SUPPLEMENT.<br /><span className="text-[#d85a2e]">A GYM-BAG BOTANICAL.</span></h2>
            <div>
              <p className="text-base leading-7 text-black/60">That positioning gives Kinetic Botanicals a clear shelf in the customer’s mind: an active-lifestyle scent product made specifically for transitions around training.</p>
              <Link href="/shop" className="button-primary mt-7">Shop the lineup <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
