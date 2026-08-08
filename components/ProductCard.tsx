"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import type { Product } from "@/lib/types";
import { useCart } from "@/components/CartProvider";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <motion.article
      layout
      className="group overflow-hidden rounded-[32px] border border-black/10 bg-white"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.28 }}
    >
      <div className="relative aspect-[4/4.5] overflow-hidden p-5" style={{ background: product.tint }}>
        <div className="absolute inset-0 opacity-60" style={{ background: `radial-gradient(circle at 68% 28%, ${product.accent}66 0, transparent 32%), radial-gradient(circle at 18% 78%, #ffffffaa 0, transparent 28%)` }} />
        <span className="relative z-10 inline-flex rounded-full bg-white/75 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.13em] backdrop-blur">{product.badge}</span>

        <div className="product-bottle absolute left-1/2 top-[54%] -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:-translate-y-[54%] group-hover:rotate-2">
          <div className="product-bottle-cap" />
          <div className="product-bottle-body">
            <span>KINETIC</span>
            <strong>{product.shortName}</strong>
            <small>{product.size}</small>
          </div>
        </div>

        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {product.profile.map((profile) => <span key={profile} className="rounded-full border border-black/15 bg-white/60 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.1em] backdrop-blur">{profile}</span>)}
          </div>
          <ArrowUpRight size={18} />
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/45">{product.notes.join(" · ")}</p>
            <h3 className="mt-2 text-2xl font-black tracking-[-0.04em]">{product.name}</h3>
          </div>
          <strong className="text-lg">${product.price}</strong>
        </div>
        <p className="mt-3 text-sm leading-6 text-black/58">{product.description}</p>
        <button onClick={() => addItem(product)} className="mt-5 flex w-full items-center justify-between rounded-full bg-[#151a17] px-5 py-3.5 text-sm font-black text-white transition hover:bg-[#ff6c38]">
          Quick add <Plus size={16} />
        </button>
      </div>
    </motion.article>
  );
}
