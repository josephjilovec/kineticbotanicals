# Kinetic Botanicals

Kinetic Botanicals is a Next.js storefront concept for compact essential-oil roll-ons positioned specifically for gym bags, locker-room resets, and active routines.

## Brand position

**Fresh before. Reset after.**

The product is positioned as an aromatic active-lifestyle accessory rather than a supplement, medical product, or traditional spa line. Customers shop by scent profile and workout context instead of rigid gender categories.

## Stack

- Next.js App Router / React 19+
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React
- Vercel deployment target
- GitHub Actions build validation

## Current routes

- `/` — full campaign homepage
- `/shop` — filtered product catalog
- `/quiz` — 3-step scent match experience
- `/about` — brand positioning and philosophy
- `/checkout` — staged checkout UI ready for a real payment provider

## Core components

- `components/ProductCard.tsx`
- `components/ScentFilter.tsx`
- `components/GymBagFeature.tsx`
- `components/ScentQuiz.tsx`
- `components/CartProvider.tsx`
- `components/CartDrawer.tsx`
- `components/Hero.tsx`
- `components/SiteHeader.tsx`

## Directory structure

```text
kineticbotanicals/
├── app/
│   ├── about/page.tsx
│   ├── checkout/page.tsx
│   ├── quiz/page.tsx
│   ├── shop/page.tsx
│   ├── globals.css
│   ├── icon.svg
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── CartDrawer.tsx
│   ├── CartProvider.tsx
│   ├── CheckoutClient.tsx
│   ├── GymBagFeature.tsx
│   ├── Hero.tsx
│   ├── ProductCard.tsx
│   ├── ScentFilter.tsx
│   ├── ScentQuiz.tsx
│   ├── ShopExperience.tsx
│   └── SiteHeader.tsx
├── lib/
│   ├── products.ts
│   └── types.ts
├── .github/workflows/ci.yml
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Local setup

Node 20.9+ is required.

```bash
git clone https://github.com/josephjilovec/kineticbotanicals.git
cd kineticbotanicals
npm install
npm run dev
```

Open `http://localhost:3000`.

Before deploying, run:

```bash
npm run lint
npm run build
```

## Git workflow

The repository is already initialized at:

```text
https://github.com/josephjilovec/kineticbotanicals
```

For a fresh local copy or future edits:

```bash
git clone https://github.com/josephjilovec/kineticbotanicals.git
cd kineticbotanicals
npm install
git checkout main
git pull origin main
# make changes
git add .
git commit -m "Update Kinetic Botanicals storefront"
git push origin main
```

The included GitHub Actions workflow validates linting and a production build on every push to `main` and on pull requests.

## Vercel deployment

### Recommended: Vercel Git integration

1. Sign in to Vercel.
2. Choose **Add New → Project**.
3. Import `josephjilovec/kineticbotanicals` from GitHub.
4. Vercel should auto-detect **Next.js**.
5. Leave the standard build command as `next build` / `npm run build`.
6. Deploy.
7. In the Vercel project, open **Settings → Domains** and add `kineticbotanicals.com` plus `www.kineticbotanicals.com` if desired.
8. Add the exact DNS records Vercel provides at the authoritative DNS provider for the domain.

Once Git integration is connected, every push to `main` can create a new production deployment automatically. GitHub Actions provides a second build-validation layer; Vercel handles the hosting deployment.

### CLI alternative

```bash
npm install -g vercel
vercel login
vercel link
vercel --prod
```

Run the CLI from a freshly pulled `main` branch when you want the deployment to reflect the latest repository state.

## Commerce status

The cart, quantity controls, local persistence, product filters, and checkout form UI are functional. Real payment processing is intentionally **not** faked. Connect Stripe Checkout, Shopify, or another payment provider before accepting orders.

A production commerce build should also add:

- real inventory and product IDs
- tax/shipping calculation
- payment webhooks
- order persistence
- transactional email
- privacy/terms/refund policies
- analytics and consent handling
- verified ingredient and labeling data

## Product-claim boundary

Current copy intentionally avoids medical, recovery, focus, strength, or treatment claims. Products are presented for external aromatic use and active-lifestyle scent rituals. Final commercial labeling should be reviewed against the actual formula, ingredients, usage instructions, and applicable regulations before sale.
