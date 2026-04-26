import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: "Code On Time - Freelance studio",
  description:
    "A two-person freelance studio building digital products that ship on time. Web design, development, and design systems.",
  keywords: [
    "freelance web development",
    "design studio",
    "Next.js",
    "React",
    "Bengaluru",
  ],
  openGraph: {
    title: "Code On Time - Freelance studio",
    description:
      "We build digital products that ship - clean, fast, and on time.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable}`}>
      <body className="font-sans">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
