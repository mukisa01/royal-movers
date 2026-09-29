import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Royal Movers Ltd | Professional Moving & Logistics",
  description:
    "Royal Movers Ltd provides professional home and office moving, furniture delivery, loading and offloading, and after-moving cleaning services.",
  keywords: [
    "Royal Movers Ltd",
    "moving company Uganda",
    "moving services Kampala",
    "house moving Uganda",
    "office moving Uganda",
    "furniture delivery Uganda",
    "logistics Uganda",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}