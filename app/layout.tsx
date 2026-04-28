import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Blue Black Beige — Design & development studio",
  description:
    "A small studio working at the intersection of design and engineering. We build digital products with care, on time, every time.",
  keywords: [
    "design studio",
    "freelance development",
    "Next.js",
    "branding",
    "Bengaluru",
  ],
  openGraph: {
    title: "Blue Black Beige",
    description: "A small studio. Design and development, on time, every time.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable} ${mono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
