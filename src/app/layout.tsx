import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project Wavefront",
  description: "The first student-built rotating detonation rocket engine, designed and constructed entirely by undergraduates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  );
}
