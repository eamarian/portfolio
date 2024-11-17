import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Evan Marian",
  description: "Software developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-dvh">{children}</body>
    </html>
  );
}
