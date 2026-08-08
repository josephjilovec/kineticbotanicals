"use client";

import type { ScentProfile } from "@/lib/types";

export type FilterValue = "All" | ScentProfile;

export function ScentFilter({ value, onChange }: { value: FilterValue; onChange: (value: FilterValue) => void }) {
  const options: FilterValue[] = ["All", "Fresh", "Earthy", "Herbaceous", "Calming"];

  return (
    <div className="flex flex-wrap gap-2" aria-label="Filter products by scent profile">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`rounded-full border px-4 py-2.5 text-xs font-black uppercase tracking-[0.12em] transition ${
            value === option ? "border-[#151a17] bg-[#151a17] text-white" : "border-black/15 bg-white hover:border-black/40"
          }`}
          aria-pressed={value === option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
