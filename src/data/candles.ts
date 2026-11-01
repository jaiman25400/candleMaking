export type ScentFamily = "Warm" | "Fresh" | "Wood" | "Sweet";

export type Candle = {
  slug: string;
  name: string;
  family: ScentFamily;
  scent: string;
  size: string;
  burn: string;
  wax: string;
  image: string;
  focus: string;
  notes: { top: string; heart: string; base: string };
  story: string;
};

export const families: Array<"All" | ScentFamily> = [
  "All",
  "Warm",
  "Fresh",
  "Wood",
  "Sweet",
];

/**
 * Placeholder collection. Swap names, notes, and photos in this file
 * when Honey's real candles are ready to photograph.
 */
export const candles: Candle[] = [
  {
    slug: "evening-honey",
    name: "Evening Honey",
    family: "Warm",
    scent: "Honey, oat milk, vanilla",
    size: "8 oz",
    burn: "About 45 hours",
    wax: "Soy blend",
    image: "/images/evening.jpg",
    focus: "center 58%",
    notes: { top: "Warm honey", heart: "Oat milk", base: "Vanilla bean" },
    story:
      "The house candle. Soft, golden, and a little milky — the one you light when the day is finally done talking.",
  },
  {
    slug: "amber-kitchen",
    name: "Amber Kitchen",
    family: "Warm",
    scent: "Cinnamon, orange peel, clove",
    size: "8 oz",
    burn: "About 45 hours",
    wax: "Soy blend",
    image: "/images/amber.jpg",
    focus: "center center",
    notes: { top: "Orange peel", heart: "Cinnamon", base: "Clove" },
    story:
      "A kitchen after something sweet came out of the oven. Bright peel first, then a low spice that stays close.",
  },
  {
    slug: "linen-hour",
    name: "Linen Hour",
    family: "Fresh",
    scent: "Clean cotton, lily, soft musk",
    size: "8 oz",
    burn: "About 45 hours",
    wax: "Soy blend",
    image: "/images/cloth.jpg",
    focus: "center 72%",
    notes: { top: "Lily petal", heart: "Clean cotton", base: "Soft musk" },
    story:
      "Sun on just-washed linen. Airy enough for daytime, quiet enough to leave burning while you read.",
  },
  {
    slug: "pale-vessel",
    name: "Pale Vessel",
    family: "Fresh",
    scent: "Bergamot, neroli, pale wood",
    size: "8 oz",
    burn: "About 45 hours",
    wax: "Soy blend",
    image: "/images/linen.jpg",
    focus: "center 84%",
    notes: { top: "Bergamot", heart: "Neroli", base: "Pale wood" },
    story:
      "A clean opening, almost like a window cracked in the morning. Citrus first, then a whisper of wood.",
  },
  {
    slug: "cedar-window",
    name: "Cedar Window",
    family: "Wood",
    scent: "Cedar, rain, moss",
    size: "8 oz",
    burn: "About 45 hours",
    wax: "Soy blend",
    image: "/images/cedar.jpg",
    focus: "center 70%",
    notes: { top: "Rain", heart: "Cedar leaf", base: "Moss" },
    story:
      "The smell of a wooden window frame after weather. Green, slightly damp, and steady.",
  },
  {
    slug: "night-jar",
    name: "Night Jar",
    family: "Wood",
    scent: "Birch, smoke, black tea",
    size: "8 oz",
    burn: "About 45 hours",
    wax: "Soy blend",
    image: "/images/night.jpg",
    focus: "center center",
    notes: { top: "Black tea", heart: "Birch", base: "Soft smoke" },
    story:
      "For the later hour. A little smoke, a little tea, nothing sharp. It glows best when the rest of the lights are low.",
  },
  {
    slug: "fig-and-cream",
    name: "Fig & Cream",
    family: "Sweet",
    scent: "Fig, cream, sandalwood",
    size: "8 oz",
    burn: "About 45 hours",
    wax: "Soy blend",
    image: "/images/fig.jpg",
    focus: "68% 74%",
    notes: { top: "Fig leaf", heart: "Cream", base: "Sandalwood" },
    story:
      "Ripe fig and a cool creaminess, grounded with wood so it never turns candy-sweet.",
  },
  {
    slug: "brown-sugar",
    name: "Brown Sugar",
    family: "Sweet",
    scent: "Brown sugar, tonka, amber",
    size: "8 oz",
    burn: "About 45 hours",
    wax: "Soy blend",
    image: "/images/sugar.jpg",
    focus: "center 60%",
    notes: { top: "Brown sugar", heart: "Tonka", base: "Amber" },
    story:
      "Warm sugar, not dessert. A rounded amber that sits in the room instead of shouting across it.",
  },
];

export function getCandle(slug: string) {
  return candles.find((candle) => candle.slug === slug);
}

export function relatedCandles(slug: string, count = 3) {
  const current = getCandle(slug);
  if (!current) return candles.slice(0, count);
  const same = candles.filter(
    (candle) => candle.family === current.family && candle.slug !== slug,
  );
  const rest = candles.filter(
    (candle) => candle.family !== current.family && candle.slug !== slug,
  );
  return [...same, ...rest].slice(0, count);
}
