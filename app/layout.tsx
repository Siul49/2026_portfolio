import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Footer from "./components/sections/Footer";

// Fallback to Google Fonts if local font fails
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-noto-sans-kr",
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"]
});

export const metadata: Metadata = {
  title: "Kim Gyeongsu | The Architect of Dreams",
  description: "Interactive Portfolio 2026 - Back-end Developer & Tech Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} ${notoSansKr.variable} antialiased font-sans`}>
        <div className="grid-background" />
        <div className="grain-overlay" />
        <main className="min-h-screen relative z-10">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
