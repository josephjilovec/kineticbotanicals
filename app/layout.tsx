import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import { CartDrawer } from "@/components/CartDrawer";
import { SiteHeader } from "@/components/SiteHeader";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  metadataBase: new URL("https://kineticaromatics.josephjilovec.com"),
  title: {
    default: "Kinetic Aromatics — Gym-Bag Aromatic Roll-Ons",
    template: "%s | Kinetic Aromatics",
  },
  description: "Compact essential-oil roll-ons made for gym bags, locker-room resets, and active routines. Fresh, earthy, herbaceous, and calming scent profiles.",
  applicationName: "Kinetic Aromatics",
  openGraph: {
    title: "Kinetic Aromatics",
    description: "Fresh before. Reset after. Aromatic roll-ons built for active lives.",
    type: "website",
    url: "https://kineticaromatics.josephjilovec.com",
    siteName: "Kinetic Aromatics",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinetic Aromatics",
    description: "Locker-room ready. Gym-bag essential.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <CartProvider>
          <div className="bg-[#151a17] px-4 py-2.5 text-center text-[10px] font-black uppercase tracking-[0.17em] text-white">
            Locker-room ready • Gym-bag essential • Free U.S. shipping over $60
          </div>
          <SiteHeader />
          <main>{children}</main>
          <footer className="bg-[#101411] text-white">
<div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-14 md:grid-cols-[1.2fr_.8fr_.8fr] lg:px-8">
              <div>
                <Link href="/" className="flex items-center gap-3">
                  <span className="brand-mark border-white/30" aria-hidden="true"><i /><i /><i /></span>
                  <span><strong className="block text-lg font-black uppercase tracking-[0.08em]">Kinetic</strong><small className="text-[9px] font-bold uppercase tracking-[0.28em] text-white/45">Aromatics</small></span>
                </Link>
                <p className="mt-5 max-w-md text-sm leading-6 text-white/50">Aromatic roll-ons designed around movement, gym bags, and close-to-skin scent rituals—not room-filling fragrance.</p>
              </div>
              <div>
                <p className="footer-title">Explore</p>
                <div className="mt-4 space-y-3 text-sm text-white/60"><Link className="block hover:text-white" href="/shop">Shop</Link><Link className="block hover:text-white" href="/quiz">Scent Match</Link><Link className="block hover:text-white" href="/about">Why Kinetic</Link></div>
              </div>
              <div>
                <p className="footer-title">Use notes</p>
                <p className="mt-4 text-xs leading-6 text-white/45">For external aromatic use only. Patch test before use. Avoid eyes and sensitive areas. Discontinue if irritation occurs. Essential-oil products are not intended to diagnose, treat, cure, or prevent disease.</p>
              </div>
            </div>
            <div className="border-t border-white/10 px-5 py-5 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-white/35">© 2026 Kinetic Aromatics</div>
          <div className="jj-venture-nav" style={{borderTop:'1px solid rgba(255,255,255,.10)',padding:'1rem 1.25rem 1.15rem',textAlign:'center',fontSize:'.78rem',letterSpacing:'.045em'}}><a href="https://www.josephjilovec.com/ventures" style={{color:'#E7C45A',textDecoration:'none',fontWeight:700}}>A Joseph Jilovec Venture</a><span aria-hidden="true" style={{color:'#E7C45A',margin:'0 .65rem',opacity:.7}}>•</span><a href="https://www.josephjilovec.com/ventures" style={{color:'#E7C45A',textDecoration:'none',fontWeight:800}}>Explore the Venture Studio →</a></div>
</footer>
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
