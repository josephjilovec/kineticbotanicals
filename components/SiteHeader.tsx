"use client";

import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";

const nav = [
  ["Shop", "/shop"],
  ["Scent Match", "/quiz"],
  ["Why Kinetic", "/about"],
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, openCart } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f4f0e8]/88 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1500px] items-center gap-5 px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Kinetic Botanicals home">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span className="leading-none">
            <strong className="block text-[15px] font-black uppercase tracking-[0.08em]">Kinetic</strong>
            <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.28em] text-black/50">Botanicals</span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-8 md:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="nav-link">{label}</Link>
          ))}
        </nav>

        <button onClick={openCart} className="relative ml-auto grid h-11 w-11 place-items-center rounded-full border border-black/15 bg-white md:ml-2" aria-label={`Open cart with ${count} items`}>
          <ShoppingBag size={18} />
          {count > 0 && <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-[#ff6c38] px-1 text-[10px] font-black text-white">{count}</span>}
        </button>
        <button className="grid h-11 w-11 place-items-center rounded-full border border-black/15 bg-white md:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle navigation">
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav className="border-t border-black/10 bg-[#f4f0e8] px-5 py-5 md:hidden" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
            {nav.map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setMenuOpen(false)} className="block border-b border-black/10 py-4 text-2xl font-black tracking-[-0.04em]">{label}</Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
