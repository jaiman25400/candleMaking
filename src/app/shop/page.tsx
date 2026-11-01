import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ShopBrowser } from "@/components/ShopBrowser";
import { candles } from "@/data/candles";

export const metadata: Metadata = {
  title: "Collection",
  description: "Browse the Cozy Corners by Honey candle collection and reserve a jar on Instagram.",
};

export default function ShopPage() {
  return (
    <div className="page">
      <PageHeader
        eyebrow="Collection"
        title="Jars for slow rooms."
        lede="Eight scents to start. Pick one that sounds like home, then send the name to Honey."
      />
      <div className="wrap" style={{ paddingBottom: "4rem" }}>
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
