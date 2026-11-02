import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { ShopBrowser } from "@/components/ShopBrowser";
import { candles } from "@/data/candles";
import { pagesUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Handmade candle collection",
  description:
    "Shop handmade and homemade soy candles from Cozy Corners by Honey. Scented jars for quiet rooms, reserved on Instagram.",
  alternates: { canonical: "/shop/" },
};

export default function ShopPage() {
  return (
    <div className="page">
      <PageHeader
        eyebrow="Collection"
        title="Jars for slow rooms."
        lede="Eight handmade scents to start. Pick a homemade candle that sounds like home, then send the name to Honey."
      />
      <div className="wrap" style={{ paddingBottom: "4rem" }}>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Handmade candles",
            itemListOrder: "https://schema.org/ItemListOrderAscending",
            numberOfItems: candles.length,
            itemListElement: candles.map((candle, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `${pagesUrl}/shop/${candle.slug}/`,
              name: candle.name,
            })),
          }}
        />
        <p className="standin">
          These photos and names are stand-ins while the real collection is photographed. What’s
          available, what it costs, and how it ships are confirmed on Instagram.
        </p>
        <div style={{ height: "1.6rem" }} />
        <ShopBrowser candles={candles} />
      </div>
    </div>
  );
}
