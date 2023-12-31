import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import "./card.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Face or Risk | Best Online Challenge game",
  description: "Face or Risk | Best Online Challenge game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
