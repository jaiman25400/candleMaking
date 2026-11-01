"use client";

import { useState } from "react";
import { families, type Candle, type ScentFamily } from "@/data/candles";
import { ProductCard } from "@/components/ProductCard";

export function ShopBrowser({ candles }: { candles: Candle[] }) {
  const [family, setFamily] = useState<(typeof families)[number]>("All");
  const shown =
    family === "All" ? candles : candles.filter((candle) => candle.family === family);

  return (
    <div>
      <div className="filters" role="toolbar" aria-label="Filter by scent family">
        {families.map((item) => {
          const pressed = item === family;
          return (
            <button
              key={item}
              type="button"
              className={pressed ? "chip is-on" : "chip"}
              aria-pressed={pressed}
              onClick={() => setFamily(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className="catalog" key={family}>
        {shown.map((candle, index) => (
          <div key={candle.slug} className="rise-in" style={{ animationDelay: `${index * 60}ms` }}>
            <ProductCard candle={candle} />
          </div>
        ))}
      </div>
      <p className="filter-count">
        {shown.length} {shown.length === 1 ? "jar" : "jars"}
        {family === "All" ? "" : ` in ${family as ScentFamily}`}
      </p>
    </div>
  );
}
