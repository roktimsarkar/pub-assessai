// ===== শুরু: মূল লেআউট — প্রতিটা পেজ এই লেআউট দিয়ে ঘেরা থাকবে =====

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// ===== শুরু: গুগলের Inter ফন্ট লোড করা =====
const inter = Inter({ subsets: ["latin"] });
// ===== শেষ: গুগলের Inter ফন্ট লোড =====

// ===== শুরু: ব্রাউজার ট্যাবে যে নাম দেখাবে =====
export const metadata: Metadata = {
  title: "PUB AssessAI",
  description: "AI Question Preparation, Assessment and Learning Portal",
};
// ===== শেষ: ব্রাউজার ট্যাবের নাম =====

// ===== শুরু: RootLayout কম্পোনেন্ট — প্রতিটা পেজের ভিতরের খাপ =====
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
// ===== শেষ: RootLayout কম্পোনেন্ট =====

// ===== শেষ: মূল লেআউট =====