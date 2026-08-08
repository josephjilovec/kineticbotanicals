"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Backpack, Droplets, Hand, Wind } from "lucide-react";

const features = [
  {
    title: "Leak-resistant roller",
    copy: "A compact rollerball format designed to live upright or sideways in a training bag without the splashy mess of a spray bottle.",
    icon: Droplets,
    stat: "10 mL",
  },
  {
    title: "Palm + pulse ritual",
    copy: "Roll lightly onto wrists or palms, rub together, and inhale. The ritual is fast enough to fit between the locker room and your first warm-up set.",
    icon: Hand,
    stat: "10 sec",
  },
  {
    title: "Personal scent radius",
    copy: "The goal is close-to-skin aroma rather than filling the gym floor. You get a fresh aromatic reset without wearing a cloud of fragrance.",
    icon: Wind,
    stat: "Low throw",
  },
  {
    title: "Built for the bag",
    copy: "Small enough for side pockets, toiletry kits, office drawers, and carry-ons so the scent ritual can move with your training day.",
    icon: Backpack,
    stat: "Pocket size",
  },
];

export function GymBagFeature() {
  const [active, setActive] = useState(0);
  const item = features[active];
  const Icon = item.icon;

  return (
    <section className="section-shell">
      <div className="overflow-hidden rounded-[40px] bg-[#151a17] text-white">
        <div className="grid lg:grid-cols-[.82fr_1.18fr]">
          <div className="border-b border-white/10 p-6 md:p-10 lg:border-b-0 lg:border-r">
            <p className="eyebrow text-[#78d6b8]">THE GYM-BAG ESSENTIAL</p>
            <h2 className="mt-4 max-w-xl text-[clamp(3rem,6vw,6.5rem)] font-black leading-[0.84] tracking-[-0.07em]">Small format.<br />Fast ritual.<br />No fragrance fog.</h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-white/60 md:text-base">Kinetic Botanicals is designed around movement: quick application, compact carry, and an aroma that stays closer to you.</p>

            <div className="mt-8 grid gap-2 sm:grid-cols-2">
              {features.map((feature, index) => {
                const ItemIcon = feature.icon;
                return (
                  <button
                    key={feature.title}
                    onClick={() => setActive(index)}
                    className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition ${active === index ? "border-[#ff6c38] bg-[#ff6c38] text-black" : "border-white/12 bg-white/[.04] hover:bg-white/[.08]"}`}
                  >
                    <ItemIcon size={18} />
                    <span className="text-xs font-black uppercase tracking-[0.08em]">{feature.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden p-6 md:p-10">
            <div className="absolute inset-0 opacity-35 [background:radial-gradient(circle_at_70%_25%,#78d6b8_0,transparent_28%),radial-gradient(circle_at_20%_80%,#ff6c38_0,transparent_30%)]" />
            <div className="absolute right-[-8%] top-[-4%] h-[420px] w-[420px] rounded-full border border-white/10" />
            <div className="absolute right-[2%] top-[5%] h-[300px] w-[300px] rounded-full border border-white/10" />

            <motion.div key={active} className="relative z-10 flex h-full flex-col justify-between" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center justify-between">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-[#f4f0e8] text-[#151a17]"><Icon size={26} /></span>
                <strong className="text-5xl font-black tracking-[-0.05em] text-[#78d6b8]">{item.stat}</strong>
              </div>
              <div className="max-w-2xl pt-20">
                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-white/45">0{active + 1} / 04</span>
                <h3 className="mt-3 text-4xl font-black tracking-[-0.05em] md:text-6xl">{item.title}</h3>
                <p className="mt-5 max-w-xl text-base leading-7 text-white/62">{item.copy}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
