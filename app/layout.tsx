import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Visualist - Curated Tools for Design, Code & More",
  description: "Curated Collection of diffrent design, code, mac apps, productivity tools, and more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Script
          src="https://kit.fontawesome.com/463a0d1296.js"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        {children}
      </body>
    </html>
  );
}

