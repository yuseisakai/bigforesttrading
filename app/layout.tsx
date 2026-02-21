import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BIG FOREST TRADING | 日本産水産物の輸出・海外販路開拓",
  description: "BIG FOREST TRADINGは、日本の高品質な水産物をタイ・東南アジアへ輸出。現地での販路開拓から販売支援まで一気通貫でサポートいたします。",
  keywords: "水産物輸出, 海外販路開拓, タイ輸出, 日本食材, 鮮魚輸出, 冷凍魚, 東南アジア",
  openGraph: {
    title: "BIG FOREST TRADING | 日本産水産物の輸出・海外販路開拓",
    description: "日本の高品質な水産物を、現地で売れる形に。品質×現地販売力×輸出運用力で、確実な成果をお約束します。",
    type: "website",
    locale: "ja_JP",
  },
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
