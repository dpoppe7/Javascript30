import type { Metadata } from "next";
import React, { type ReactNode } from "react";
import "./globals.css";
import { fontPixel } from '@/lib/fonts';

export const metadata: Metadata = {
  title: "JavaScript30 Showcase",
  description: "A showcase dashboard for JavaScript30 projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    // injecting the font className to html to make it work with tailwindcss
    <html lang="en" className={`dark ${fontPixel.variable}`}> 
      <body className="bg-background text-foreground">{children}</body>
    </html>
  );
}
