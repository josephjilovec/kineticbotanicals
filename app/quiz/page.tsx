import type { Metadata } from "next";
import { ScentQuiz } from "@/components/ScentQuiz";

export const metadata: Metadata = {
  title: "Scent Match",
  description: "Take the Kinetic Aromatics 3-step scent match quiz and find a roll-on for your workout vibe.",
};

export default function QuizPage() {
  return (
    <>
      <section className="bg-[#151a17] text-white">
        <div className="mx-auto max-w-[1500px] px-5 py-20 lg:px-8 lg:py-24">
          <p className="text-[10px] font-black uppercase tracking-[.18em] text-[#78d6b8]">60-SECOND SCENT MATCH</p>
          <h1 className="mt-4 max-w-5xl text-[clamp(4rem,9vw,8.5rem)] font-black leading-[.79] tracking-[-.08em]">WHAT FITS<br />YOUR SESSION?</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/58">Three quick choices. One recommended aromatic profile. No personality archetypes, no gender sorting.</p>
        </div>
      </section>
      <ScentQuiz standalone />
    </>
  );
}
