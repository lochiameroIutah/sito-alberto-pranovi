import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alberto Pranovi — Product Designer",
  description:
    "Product Designer at Monde @LVMH. Accessories design, 3D modeling, rendering & visual identity.",
  openGraph: {
    title: "Alberto Pranovi — Product Designer",
    description:
      "Product Designer at Monde @LVMH. Accessories design, 3D modeling, rendering & visual identity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll />
        <CustomCursor />
        <Navbar />
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
