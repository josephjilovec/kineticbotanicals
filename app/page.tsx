import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Backpack, Leaf, MoveRight, ShieldCheck } from "lucide-react";
import { Hero } from "@/components/Hero";
import { ShopExperience } from "@/components/ShopExperience";
import { GymBagFeature } from "@/components/GymBagFeature";
import { ScentQuiz } from "@/components/ScentQuiz";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section-shell">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            [Backpack, "Built for movement", "Compact 10 mL rollers designed around gym bags, travel kits, and active routines."],
            [Leaf, "Scent-first shopping", "Fresh, earthy, herbaceous, or calming. Pick by aroma and workout vibe—not a gender label."],
            [ShieldCheck, "Close-to-skin ritual", "A light aromatic alternative for people who do not want a heavy fragrance cloud on the training floor."],
          ].map(([Icon, title, copy]) => {
            const FeatureIcon = Icon as typeof Backpack;
            return (
              <article key={String(title)} className="rounded-[28px] border border-black/10 bg-white p-6">
                <FeatureIcon size={22} />
                <h2 className="mt-8 text-2xl font-black tracking-[-0.04em]">{String(title)}</h2>
                <p className="mt-3 text-sm leading-6 text-black/55">{String(copy)}</p>
              </article>
            );
          })}
        </div>
      </section>

      <ShopExperience compact />

      <section className="section-shell pt-0">
        <div className="relative overflow-hidden rounded-[40px] bg-[#e8dfd1] p-6 md:p-10">
          <div className="grid min-h-[560px] items-stretch gap-5 lg:grid-cols-[1fr_1.1fr]">
            <div className="relative z-10 flex flex-col justify-between rounded-[32px] bg-[#f7f2e8]/90 p-7 backdrop-blur md:p-10">
              <div>
                <p className="eyebrow">PRE → TRAIN → RESET</p>
                <h2 className="mt-4 text-[clamp(3.2rem,6vw,6.7rem)] font-black leading-[.82] tracking-[-.07em]">One ritual.<br />Three moments.</h2>
                <p className="mt-6 max-w-lg text-base leading-7 text-black/58">Before training, use a fresh or herbaceous profile to mark the transition into movement. After training, reach for something softer or deeper. Kinetic is about the sensory cue—not a promise to change performance.</p>
              </div>
              <Link href="/quiz" className="mt-10 inline-flex items-center gap-3 text-sm font-black uppercase tracking-[.1em]">Find your pairing <ArrowRight size={16} /></Link>
            </div>
            <div className="relative min-h-[440px] overflow-hidden rounded-[32px]">
              <Image src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1500&q=85" alt="Athlete lifting in a gym" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 52vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between text-white">
                <div><span className="text-[10px] font-black uppercase tracking-[.16em] text-white/55">HEAVY SESSION</span><strong className="mt-2 block text-3xl tracking-[-.05em]">Pine + Cedar Ground</strong></div>
                <MoveRight size={28} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <GymBagFeature />
      <ScentQuiz />

      <section className="section-shell pt-0">
        <div className="grid overflow-hidden rounded-[40px] border border-black/10 bg-white lg:grid-cols-2">
          <div className="relative min-h-[480px]">
            <Image src="https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&w=1400&q=85" alt="Gym bag and workout essentials" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <div className="flex flex-col justify-center p-7 md:p-12">
            <p className="eyebrow">WHY KINETIC</p>
            <h2 className="mt-4 text-5xl font-black leading-[.9] tracking-[-.06em] md:text-7xl">Fragrance that knows where it is.</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-black/58">Traditional fragrance often assumes the room should notice you. Kinetic Botanicals starts with a different setting: shared training spaces, close quarters, quick transitions, and a bag already full of gear.</p>
            <Link href="/about" className="button-primary mt-8 w-fit">Read the philosophy <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
