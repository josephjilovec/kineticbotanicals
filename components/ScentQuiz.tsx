"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Dumbbell, Flame, Leaf } from "lucide-react";
import { products } from "@/lib/products";
import type { WorkoutVibe } from "@/lib/types";
import { useCart } from "@/components/CartProvider";

const workoutOptions: { label: WorkoutVibe; icon: typeof Flame; copy: string }[] = [
  { label: "High Intensity", icon: Flame, copy: "Intervals, circuits, conditioning, fast sessions." },
  { label: "Heavy Lifting", icon: Dumbbell, copy: "Strength work, long rests, deep-focus training." },
  { label: "Yoga / Mobility", icon: Leaf, copy: "Stretching, recovery, lower-intensity movement." },
];

const moods = ["Bright + fresh", "Deep + grounded", "Soft + reset"] as const;
const intensities = ["Keep it light", "Balanced", "Give me something bolder"] as const;

export function ScentQuiz({ standalone = false }: { standalone?: boolean }) {
  const [step, setStep] = useState(0);
  const [workout, setWorkout] = useState<WorkoutVibe | null>(null);
  const [mood, setMood] = useState<(typeof moods)[number] | null>(null);
  const [intensity, setIntensity] = useState<(typeof intensities)[number] | null>(null);
  const { addItem } = useCart();

  const recommendation = useMemo(() => {
    if (!workout) return products[0];
    let candidates = products.filter((product) => product.workoutMatches.includes(workout));
    if (mood === "Bright + fresh") candidates = candidates.sort((a, b) => Number(b.profile.includes("Fresh")) - Number(a.profile.includes("Fresh")));
    if (mood === "Deep + grounded") candidates = candidates.sort((a, b) => Number(b.profile.includes("Earthy")) - Number(a.profile.includes("Earthy")));
    if (mood === "Soft + reset") candidates = candidates.sort((a, b) => Number(b.profile.includes("Calming")) - Number(a.profile.includes("Calming")));
    if (intensity === "Keep it light") candidates = candidates.sort((a, b) => Number(a.intensity === "Light") - Number(b.intensity === "Light"));
    if (intensity === "Give me something bolder") candidates = candidates.sort((a, b) => Number(b.intensity === "Bold") - Number(a.intensity === "Bold"));
    return candidates[0] ?? products[0];
  }, [workout, mood, intensity]);

  function reset() {
    setStep(0);
    setWorkout(null);
    setMood(null);
    setIntensity(null);
  }

  return (
    <section className={standalone ? "section-shell pt-12" : "section-shell"} id="quiz">
      <div className="grid overflow-hidden rounded-[40px] border border-black/10 bg-[#ebe7dc] lg:grid-cols-[.72fr_1.28fr]">
        <div className="relative overflow-hidden bg-[#d9cfee] p-7 md:p-10">
          <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#ff9a76]/35 blur-[80px]" />
          <div className="relative z-10 flex h-full min-h-[420px] flex-col justify-between">
            <div>
              <p className="eyebrow">SCENT MATCH / 60 SECONDS</p>
              <h2 className="mt-4 text-[clamp(3rem,5vw,5.4rem)] font-black leading-[0.84] tracking-[-0.07em]">Find the scent that fits your session.</h2>
            </div>
            <div className="mt-10">
              <div className="flex gap-2">
                {[0, 1, 2].map((index) => <span key={index} className={`h-2 flex-1 rounded-full ${index <= Math.min(step, 2) ? "bg-[#151a17]" : "bg-white/55"}`} />)}
              </div>
              <p className="mt-4 text-xs font-black uppercase tracking-[0.15em] text-black/50">{step < 3 ? `Step ${step + 1} of 3` : "Your match"}</p>
            </div>
          </div>
        </div>

        <div className="min-h-[520px] bg-[#f8f5ee] p-6 md:p-10">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div key="workout" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}>
                <p className="eyebrow">01 / WORKOUT VIBE</p>
                <h3 className="mt-3 text-4xl font-black tracking-[-0.05em]">What are you training today?</h3>
                <div className="mt-8 grid gap-3">
                  {workoutOptions.map(({ label, icon: Icon, copy }) => (
                    <button key={label} onClick={() => { setWorkout(label); setStep(1); }} className="quiz-option">
                      <span className="grid h-12 w-12 place-items-center rounded-full bg-[#151a17] text-white"><Icon size={19} /></span>
                      <span className="flex-1"><strong>{label}</strong><small>{copy}</small></span>
                      <ArrowRight size={18} />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div key="mood" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}>
                <button className="quiz-back" onClick={() => setStep(0)}><ArrowLeft size={15} /> Back</button>
                <p className="eyebrow mt-7">02 / AROMA DIRECTION</p>
                <h3 className="mt-3 text-4xl font-black tracking-[-0.05em]">What kind of atmosphere do you want?</h3>
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {moods.map((option, index) => (
                    <button key={option} onClick={() => { setMood(option); setStep(2); }} className={`min-h-44 rounded-[28px] border border-black/10 p-5 text-left transition hover:-translate-y-1 ${index === 0 ? "bg-[#dff8f2]" : index === 1 ? "bg-[#dfe8df]" : "bg-[#f0ecfb]"}`}>
                      <span className="text-[10px] font-black uppercase tracking-[0.15em] text-black/45">0{index + 1}</span>
                      <strong className="mt-16 block text-2xl leading-none tracking-[-0.04em]">{option}</strong>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="intensity" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}>
                <button className="quiz-back" onClick={() => setStep(1)}><ArrowLeft size={15} /> Back</button>
                <p className="eyebrow mt-7">03 / SCENT PRESENCE</p>
                <h3 className="mt-3 text-4xl font-black tracking-[-0.05em]">How noticeable should it feel?</h3>
                <div className="mt-8 space-y-3">
                  {intensities.map((option) => (
                    <button key={option} onClick={() => { setIntensity(option); setStep(3); }} className="quiz-option">
                      <span className="grid h-10 w-10 place-items-center rounded-full border border-black/15"><Check size={16} /></span>
                      <strong className="flex-1">{option}</strong><ArrowRight size={18} />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="result" initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }}>
                <p className="eyebrow">YOUR KINETIC MATCH</p>
                <div className="mt-5 grid gap-6 rounded-[32px] p-6 md:grid-cols-[180px_1fr]" style={{ background: recommendation.tint }}>
                  <div className="relative min-h-56 rounded-[26px] bg-white/35">
                    <div className="product-bottle absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-75">
                      <div className="product-bottle-cap" />
                      <div className="product-bottle-body"><span>KINETIC</span><strong>{recommendation.shortName}</strong><small>{recommendation.size}</small></div>
                    </div>
                  </div>
                  <div className="self-center">
                    <span className="text-[10px] font-black uppercase tracking-[0.16em] text-black/45">{recommendation.profile.join(" + ")}</span>
                    <h3 className="mt-2 text-4xl font-black tracking-[-0.05em]">{recommendation.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-black/60">{recommendation.description}</p>
                    <p className="mt-3 text-xs font-bold uppercase tracking-[0.1em]">Notes: {recommendation.notes.join(" · ")}</p>
                    <button onClick={() => addItem(recommendation)} className="button-primary mt-6">Add match — ${recommendation.price}</button>
                  </div>
                </div>
                <button onClick={reset} className="mt-5 text-xs font-black uppercase tracking-[0.14em] underline">Retake quiz</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
