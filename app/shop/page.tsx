import type { Metadata } from "next";
import { ShopExperience } from "@/components/ShopExperience";

export const metadata: Metadata = {
  title: "Shop Aromatic Roll-Ons",
  description: "Shop Kinetic Aromatics roll-ons by scent profile: fresh, earthy, herbaceous, and calming.",
};

export default function ShopPage() {
  return (
    <>
      <section className="border-b border-black/10 bg-[#dfe8df]">
        <div className="mx-auto max-w-[1500px] px-5 py-20 lg:px-8 lg:py-28">
          <p className="eyebrow">THE ROLL-ON LINEUP</p>
          <h1 className="mt-4 max-w-5xl text-[clamp(4rem,9vw,9rem)] font-black leading-[.79] tracking-[-.08em]">PICK YOUR<br />TRAINING<br />ATMOSPHERE.</h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-black/58">Choose the scent profile that fits the session, the season, and your own taste.</p>
        </div>
      </section>
      <ShopExperience />
    </>
  );
}
