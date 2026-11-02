export type CandleKind = "design" | "simple";

export type Candle = {
  slug: string;
  name: string;
  kind: CandleKind;
  /** Fixed scent for a simple jar. A short description of the look for a design. */
  scent: string;
  size: string;
  burn: string;
  wax: string;
  image: string;
  focus: string;
  notes: { top: string; heart: string; base: string };
  story: string;
  /** False when size and burn are still waiting on Honey. */
  confirmed: boolean;
};

export const flavours = [
  "Fresh Orange",
  "Peach",
  "Sandalwood Vanilla",
  "Lemon Mint",
  "Jasmine",
  "Rosemary",
  "By the Fireplace",
  "Ocean Breeze",
  "Nordic Berry Birch",
  "Cinnamon Bourbon",
  "Citrus",
  "Fresh Lavender",
  "Rose & Peach",
  "Holiday Spice",
] as const;

export const priceByKind: Record<CandleKind, number> = {
  design: 22,
  simple: 18,
};

export function candlePrice(kind: CandleKind) {
  return priceByKind[kind];
}

export function formatPrice(amount: number) {
  return `$${amount} CAD`;
}

export const candles: Candle[] = [
  {
    slug: "iced-coffee",
    name: "Iced Coffee",
    kind: "design",
    scent: "A coffee glass, with ice and a cream layer",
    size: "10 oz tumbler (~8.5 oz wax)",
    burn: "45–50 hours",
    wax: "Dual-pour soy wax with gel ice",
    image: "/images/iced-coffee.jpg",
    focus: "center 42%",
    notes: {
      top: "Dark roast and cacao nibs",
      heart: "Frosted milk and hazelnut",
      base: "Molasses and whipped vanilla",
    },
    story:
      "The rich rush of a neighborhood café on a sunny morning, held in a glass of wax and ice.",
    confirmed: true,
  },
  {
    slug: "matcha-berry",
    name: "Matcha Berry",
    kind: "design",
    scent: "Matcha poured over strawberry, with ice",
    size: "10 oz tumbler (~8.5 oz wax)",
    burn: "45–50 hours",
    wax: "Layered soy wax with gel ice",
    image: "/images/matcha-berry.jpg",
    focus: "center 42%",
    notes: {
      top: "Fresh strawberry and lime",
      heart: "Japanese matcha and jasmine",
      base: "Steamed oat milk and sweet cane",
    },
    story:
      "A layered morning treat: earthy green tea, pink berries, and cool cream.",
    confirmed: true,
  },
  {
    slug: "orange-slice",
    name: "Orange Slice",
    kind: "design",
    scent: "Mandarin pieces set over cream",
    size: "10 oz tumbler (~8.8 oz wax)",
    burn: "45–50 hours",
    wax: "Soy cream, gel wax, and fruit pieces",
    image: "/images/orange-slice.jpg",
    focus: "center 42%",
    notes: {
      top: "Satsuma mandarin and clementine zest",
      heart: "Candied orange peel and neroli",
      base: "Sweet cream and light amber",
    },
    story:
      "Juicy citrus and pastry cream, like a burst of sunshine set on the table.",
    confirmed: true,
  },
  {
    slug: "blush-heart",
    name: "Blush Heart",
    kind: "design",
    scent: "Pink and white wax, hearts on top",
    size: "9 oz tumbler (~7.7 oz wax)",
    burn: "40–45 hours",
    wax: "Soy wax with gel hearts",
    image: "/images/blush-heart.jpg",
    focus: "center 40%",
    notes: {
      top: "Sugared strawberries",
      heart: "Condensed milk and peach blossom",
      base: "Vanilla chiffon",
    },
    story:
      "Pastel and tender, like a chilled strawberry milk at a quiet counter.",
    confirmed: true,
  },
  {
    slug: "heirloom-knit",
    name: "Heirloom Knit",
    kind: "simple",
    scent: "Cashmere, warm cedar, folded wool",
    size: "9 oz amber jar (~7 oz wax)",
    burn: "45–50 hours",
    wax: "100% soy wax",
    image: "/images/heirloom-knit.jpg",
    focus: "center center",
    notes: {
      top: "Soft bergamot and white lily",
      heart: "Cashmere musk and orris",
      base: "Virginian cedarwood and sandalwood",
    },
    story:
      "The comfort of a hand-knitted blanket while rain taps the window.",
    confirmed: true,
  },
  {
    slug: "smoked-vanilla-tuberose",
    name: "Smoked Vanilla & Tuberose",
    kind: "simple",
    scent: "White tuberose, bourbon vanilla, midnight embers",
    size: "9 oz amber jar (~7 oz wax)",
    burn: "45–50 hours",
    wax: "100% soy wax",
    image: "/images/smoked-vanilla.jpg",
    focus: "center center",
    notes: {
      top: "Night-blooming jasmine and neroli",
      heart: "White tuberose and tonka bean",
      base: "Smoked vanilla bean and amber wood",
    },
    story:
      "Heady florals sinking into smoke-laced vanilla. An evening candle.",
    confirmed: true,
  },
  {
    slug: "daisy-day",
    name: "Daisy Day",
    kind: "design",
    scent: "A wax daisy in a clear glass",
    size: "Glass tumbler",
    burn: "Small batch",
    wax: "Soy wax",
    image: "/images/daisy.jpg",
    focus: "center 40%",
    notes: { top: "Daisy petal", heart: "Honey", base: "Soft musk" },
    story:
      "A single daisy sitting in the wax. Light, a little sweet, and meant for a sunny corner.",
    confirmed: false,
  },
  {
    slug: "lavender-sprig",
    name: "Lavender Sprig",
    kind: "design",
    scent: "Dried lavender and rosemary around the wick",
    size: "Glass tumbler",
    burn: "Small batch",
    wax: "Soy wax",
    image: "/images/lavender.jpg",
    focus: "center 40%",
    notes: { top: "Lavender", heart: "Rosemary", base: "Soft herb" },
    story:
      "Dried lavender and a sprig of rosemary around a wooden wick. Quiet, green, and clean.",
    confirmed: false,
  },
  {
    slug: "cherry-heart",
    name: "Cherry Heart",
    kind: "design",
    scent: "Red hearts under a layer of white wax",
    size: "Glass tumbler",
    burn: "Small batch",
    wax: "Gel pour",
    image: "/images/cherry-heart.jpg",
    focus: "center 42%",
    notes: { top: "Cherry", heart: "Sugar", base: "Vanilla" },
    story:
      "Little red hearts suspended under a layer of white wax. Sweet, and a bit playful.",
    confirmed: false,
  },
  {
    slug: "apples-and-white-cedar",
    name: "Apples & White Cedar",
    kind: "simple",
    scent: "Apple, white cedar, soft musk",
    size: "Amber jar",
    burn: "Small batch",
    wax: "Soy wax",
    image: "/images/apples-cedar.jpg",
    focus: "center center",
    notes: { top: "Apple", heart: "White cedar", base: "Soft musk" },
    story:
      "Crisp apple against pale cedar. A jar for the room that wants something clean and woody.",
    confirmed: false,
  },
];

export function getCandle(slug: string) {
  return candles.find((candle) => candle.slug === slug);
}

export function relatedCandles(slug: string, count = 3) {
  const current = getCandle(slug);
  if (!current) return candles.slice(0, count);
  const same = candles.filter(
    (candle) => candle.kind === current.kind && candle.slug !== slug,
  );
  const rest = candles.filter(
    (candle) => candle.kind !== current.kind && candle.slug !== slug,
  );
  return [...same, ...rest].slice(0, count);
}
