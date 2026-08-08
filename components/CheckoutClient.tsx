"use client";

import Link from "next/link";
import { ArrowLeft, LockKeyhole } from "lucide-react";
import { useCart } from "@/components/CartProvider";

export function CheckoutClient() {
  const { items, subtotal } = useCart();

  return (
    <section className="mx-auto grid max-w-[1300px] gap-8 px-5 py-12 lg:grid-cols-[1fr_.72fr] lg:px-8 lg:py-16">
      <div>
        <Link href="/shop" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.12em]"><ArrowLeft size={15} /> Back to shop</Link>
        <p className="eyebrow mt-10">CHECKOUT</p>
        <h1 className="mt-3 text-5xl font-black tracking-[-.06em] md:text-7xl">Finish your gym bag.</h1>

        {items.length === 0 ? (
          <div className="mt-10 rounded-[30px] border border-black/10 bg-white p-8">
            <h2 className="text-2xl font-black">Your cart is empty.</h2>
            <p className="mt-3 text-sm text-black/55">Add a roll-on before continuing.</p>
            <Link href="/shop" className="button-primary mt-6">Shop roll-ons</Link>
          </div>
        ) : (
          <form className="mt-10 grid gap-4" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-4 rounded-[30px] border border-black/10 bg-white p-6 sm:grid-cols-2">
              <h2 className="sm:col-span-2 text-xl font-black">Contact + shipping</h2>
              <label className="text-xs font-bold">Email<input className="mt-2 w-full rounded-2xl border border-black/15 bg-[#f8f5ee] px-4 py-3 outline-none focus:border-black" type="email" required placeholder="you@example.com" /></label>
              <label className="text-xs font-bold">Full name<input className="mt-2 w-full rounded-2xl border border-black/15 bg-[#f8f5ee] px-4 py-3 outline-none focus:border-black" required /></label>
              <label className="text-xs font-bold sm:col-span-2">Street address<input className="mt-2 w-full rounded-2xl border border-black/15 bg-[#f8f5ee] px-4 py-3 outline-none focus:border-black" required /></label>
              <label className="text-xs font-bold">City<input className="mt-2 w-full rounded-2xl border border-black/15 bg-[#f8f5ee] px-4 py-3 outline-none focus:border-black" required /></label>
              <label className="text-xs font-bold">ZIP code<input className="mt-2 w-full rounded-2xl border border-black/15 bg-[#f8f5ee] px-4 py-3 outline-none focus:border-black" required /></label>
            </div>

            <div className="rounded-[30px] border border-black/10 bg-[#151a17] p-6 text-white">
              <div className="flex items-center gap-2"><LockKeyhole size={16} /><h2 className="text-xl font-black">Payment integration ready</h2></div>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/55">This repository intentionally does not fake a live payment processor. Connect Stripe Checkout, Shopify, or another provider before accepting real orders.</p>
              <button type="submit" disabled className="mt-5 w-full rounded-full bg-white/15 px-5 py-4 text-sm font-black text-white/50">Payment not connected</button>
            </div>
          </form>
        )}
      </div>

      <aside className="h-fit rounded-[34px] bg-[#e1ddd4] p-6 lg:sticky lg:top-28">
        <p className="eyebrow">ORDER SUMMARY</p>
        <div className="mt-5 space-y-3">
          {items.map(({ product, quantity }) => (
            <div key={product.id} className="flex items-center gap-4 rounded-[22px] bg-white p-3">
              <div className="h-16 w-14 rounded-2xl" style={{ background: product.tint }} />
              <div className="min-w-0 flex-1"><strong className="block text-sm">{product.name}</strong><small className="text-black/45">Qty {quantity}</small></div>
              <strong className="text-sm">${(product.price * quantity).toFixed(2)}</strong>
            </div>
          ))}
        </div>
        <div className="mt-6 space-y-3 border-t border-black/15 pt-5 text-sm">
          <div className="flex justify-between"><span>Subtotal</span><strong>${subtotal.toFixed(2)}</strong></div>
          <div className="flex justify-between text-black/50"><span>Shipping</span><span>Calculated later</span></div>
          <div className="flex justify-between border-t border-black/15 pt-4 text-lg"><strong>Total</strong><strong>${subtotal.toFixed(2)}</strong></div>
        </div>
      </aside>
    </section>
  );
}
