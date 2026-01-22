import type { Metadata } from "next";
import React, { type ReactNode } from "react";
import "./globals.css";

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
    <html lang="en" className="dark">
      <body className="bg-background text-foreground">{children}</body>
    </html>
  );
}
