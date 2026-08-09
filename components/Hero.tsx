"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight, MoveRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#111714] text-white">
      <div className="absolute inset-0 opacity-40">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2200&q=85"
          alt="Training floor with gym equipment"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,15,12,.96)_0%,rgba(10,15,12,.82)_42%,rgba(10,15,12,.25)_100%)]" />
      <div className="absolute -right-16 top-28 h-64 w-64 rounded-full bg-[#ff6c38]/30 blur-[100px]" />
      <div className="absolute left-[46%] top-0 h-96 w-96 rounded-full bg-[#78d6b8]/15 blur-[120px]" />

      <div className="relative mx-auto grid min-h-[760px] max-w-[1500px] items-center gap-10 px-5 py-24 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
        <div className="max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] backdrop-blur">
            <Sparkles size={13} /> Aromatic roll-ons for active lives
          </motion.div>
          <motion.h1
            className="mt-8 text-[clamp(4.2rem,9vw,9rem)] font-black leading-[0.78] tracking-[-0.08em]"
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 }}
          >
            FRESH<br />BEFORE.<br /><span className="text-[#ff7a49]">RESET</span><br />AFTER.
          </motion.h1>
          <motion.p className="mt-8 max-w-xl text-base leading-7 text-white/68 md:text-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }}>
            Kinetic Aromatics makes compact essential-oil roll-ons for the gym bag: lighter than heavy fragrance, easy to apply, and built around the ritual of getting into—or out of—training mode.
          </motion.p>
          <motion.div className="mt-8 flex flex-wrap gap-3" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}>
            <Link href="/quiz" className="button-accent">Find your pre-workout scent <MoveRight size={17} /></Link>
            <Link href="/shop" className="button-ghost-light">Shop all roll-ons <ArrowDownRight size={17} /></Link>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto hidden h-[620px] w-full max-w-[620px] lg:block"
          initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12, duration: 0.7 }}
        >
          <div className="absolute right-4 top-0 h-[70%] w-[72%] overflow-hidden rounded-[42px] border border-white/10 bg-[#ded7c8] shadow-2xl">
            <Image src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=85" alt="Athlete preparing for a workout" fill className="object-cover" sizes="(max-width: 1200px) 40vw, 560px" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div><small className="block text-[10px] font-black uppercase tracking-[0.16em] text-white/60">Locker-room ritual</small><strong className="mt-1 block text-3xl tracking-[-0.04em]">Roll. Breathe. Move.</strong></div>
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[#ff6c38] text-black"><MoveRight size={19} /></span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-72 w-[54%] rounded-[36px] border border-white/15 bg-[#f4f0e8] p-6 text-[#111714] shadow-2xl">
            <span className="text-[10px] font-black uppercase tracking-[0.18em] text-black/45">GYM-BAG FORMAT</span>
            <div className="product-bottle scale-90 origin-center mx-auto mt-2">
              <div className="product-bottle-cap" />
              <div className="product-bottle-body"><span>KINETIC</span><strong>LIFT</strong><small>10 mL</small></div>
            </div>
          </div>

          <div className="absolute bottom-16 right-0 rounded-full bg-[#78d6b8] px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-[#111714] shadow-xl rotate-3">Light scent throw</div>
        </motion.div>
      </div>

      <div className="relative border-t border-white/12 bg-black/30 py-3 backdrop-blur">
        <div className="marquee"><div>LOCKER-ROOM READY • GYM-BAG ESSENTIAL • ROLL → PALMS → INHALE • FRESH • EARTHY • HERBACEOUS • CALMING • LIGHTER THAN HEAVY COLOGNE • </div></div>
      </div>
    </section>
  );
}
