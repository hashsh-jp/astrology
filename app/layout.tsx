import type { Metadata } from "next";
import { Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "株式会社Astrology | 動画生成AIプロダクト企業",
  description: "自社開発の動画生成AIを中核としたAIソリューション企業。ビジネスを動かす次世代の動画生成AIプロダクトを提供しています。",
  keywords: ["動画生成AI", "AI開発", "AIプロダクト", "動画マーケティング", "経営コンサルティング"],
  openGraph: {
    title: "株式会社Astrology | 動画生成AIプロダクト企業",
    description: "自社開発の動画生成AIを中核としたAIソリューション企業",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${inter.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
