"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { ScentFilter, type FilterValue } from "@/components/ScentFilter";

export function ShopExperience({ compact = false }: { compact?: boolean }) {
  const [filter, setFilter] = useState<FilterValue>("All");

  const visible = useMemo(
    () => products.filter((product) => filter === "All" || product.profile.includes(filter)),
    [filter],
  );

  return (
    <section className={compact ? "section-shell" : "section-shell pt-10"} id="shop">
      <div className="mb-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <p className="eyebrow">SCENT, NOT GENDER</p>
          <h2 className="section-title max-w-3xl">Choose the atmosphere you want to carry.</h2>
        </div>
        <ScentFilter value={filter} onChange={setFilter} />
      </div>
      <motion.div layout className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((product) => <ProductCard key={product.id} product={product} />)}
      </motion.div>
    </section>
  );
}
