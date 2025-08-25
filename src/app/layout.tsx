import Footer from "@/components/footer";
import type { Metadata } from "next";
import { Geist, Manrope } from "next/font/google";
import type React from "react";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Project Wavefront - Student-Built RDRE Innovation",
  description:
    "Pioneering the development of the first student-built rotating detonation rocket engine. Empowering students to push the boundaries of propulsion technology.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${manrope.variable} antialiased dark`}
    >
      <body className="font-sans min-h-screen flex flex-col relative">
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
          <div className="stars"></div>
          <div className="twinkling"></div>
        </div>
        <div className="relative z-10 flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
