"use client";

import Link from "next/link";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/components/CartProvider";

export function CartDrawer() {
  const { items, isOpen, subtotal, closeCart, removeItem, setQuantity } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            aria-label="Close cart"
            className="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />
          <motion.aside
            className="fixed right-0 top-0 z-[90] flex h-dvh w-full max-w-md flex-col bg-[#f4f0e8] p-5 shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 270 }}
          >
            <div className="flex items-center justify-between border-b border-black/15 pb-5">
              <div>
                <p className="eyebrow">YOUR GYM BAG</p>
                <h2 className="text-3xl font-black tracking-[-0.04em]">Cart</h2>
              </div>
              <button onClick={closeCart} className="icon-button" aria-label="Close cart">
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto py-5">
              {items.length === 0 ? (
                <div className="grid h-full place-items-center text-center">
                  <div>
                    <ShoppingBag className="mx-auto mb-4" size={34} />
                    <h3 className="text-xl font-bold">Your bag is light.</h3>
                    <p className="mt-2 max-w-xs text-sm text-black/55">Add a roll-on and keep your scent ritual compact.</p>
                  </div>
                </div>
              ) : (
                items.map(({ product, quantity }) => (
                  <article key={product.id} className="rounded-[26px] border border-black/10 bg-white p-4">
                    <div className="flex gap-4">
                      <div
                        className="relative h-24 w-20 shrink-0 overflow-hidden rounded-[20px]"
                        style={{ background: product.tint }}
                      >
                        <div className="absolute left-1/2 top-3 h-16 w-5 -translate-x-1/2 rounded-full bg-[#171b18] shadow-lg" />
                        <div className="absolute left-1/2 top-1 h-6 w-3 -translate-x-1/2 rounded-t-full bg-[#bfc4bc]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">{product.size}</p>
                        <h3 className="mt-1 font-bold">{product.name}</h3>
                        <p className="mt-1 text-sm text-black/55">${product.price.toFixed(2)}</p>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center rounded-full border border-black/15 bg-[#f7f4ed] p-1">
                            <button aria-label="Decrease quantity" className="grid h-8 w-8 place-items-center" onClick={() => setQuantity(product.id, quantity - 1)}><Minus size={14} /></button>
                            <span className="w-8 text-center text-sm font-bold">{quantity}</span>
                            <button aria-label="Increase quantity" className="grid h-8 w-8 place-items-center" onClick={() => setQuantity(product.id, quantity + 1)}><Plus size={14} /></button>
                          </div>
                          <button className="text-xs font-bold uppercase tracking-[0.12em] underline" onClick={() => removeItem(product.id)}>Remove</button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))
              )}
            </div>

            <div className="border-t border-black/15 pt-5">
              <div className="mb-4 flex justify-between text-sm"><span>Subtotal</span><strong>${subtotal.toFixed(2)}</strong></div>
              <Link href="/checkout" onClick={closeCart} className={`button-primary w-full ${items.length === 0 ? "pointer-events-none opacity-40" : ""}`}>
                Go to checkout
              </Link>
              <p className="mt-3 text-center text-[11px] leading-relaxed text-black/45">Shipping and taxes calculated at checkout. Demo storefront checkout is staged for payment integration.</p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
