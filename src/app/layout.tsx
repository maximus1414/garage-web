import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Garage — Sell seats. Book seats. Move.",
  description: "Nigeria's seat marketplace connecting drivers and passengers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}