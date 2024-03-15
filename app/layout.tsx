import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keane Grech",
  description: "A software student from Malta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="theme-color"
          content="#e7e7e7"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#101010"
          media="(prefers-color-scheme: dark)"
        />

        <meta property="og:image" content="/preview.jpg" />
      </head>
      <body className={inter.className}>
        <SpeedInsights />
        <Analytics />
        {children}
        </body>
    </html>
  );
}
