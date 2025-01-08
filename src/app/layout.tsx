import type { Metadata } from "next";
import { Poppins, Oswald } from "next/font/google";
import "./globals.css";
import { Footer } from "@/app/components/Footer";
import { ThemeProviderWrapper } from "@/app/components/ThemeProviderWrapper";
import React from "react";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bovua Holdings | Powering Progress",
  description: "Bovua Holdings focuses on energy, logistics, and properties to drive industries forward in South Africa and beyond.",
  // keywords: "Bovua Holdings, Energy, Logistics, Properties, South Africa",
  // openGraph: {
  //   title: "Bovua Holdings",
  //   description: "Leading energy, logistics, and property development company in South Africa.",
  //   url: "https://www.bovuaholdings.co.za",
  //   siteName: "Bovua Holdings",
  //   images: [
  //     {
  //       url: "/logos/bovua-holdings.png",
  //       width: 800,
  //       height: 600,
  //       alt: "Bovua Holdings Logo",
  //     },
  //   ],
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   site: "@bovuaholdings",
  //   title: "Bovua Holdings",
  //   description: "Powering industries with cutting-edge energy, logistics, and property solutions.",
  //   images: ["/bovua-holdings.png"],
  // },
  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon.ico",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
      src={`https://www.google.com/recaptcha/enterprise.js?render${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
      async
      defer
    ></script>
      </head>
      <body
        className={`${poppins.variable} ${oswald.variable}`}
      >
        <ThemeProviderWrapper>
          
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProviderWrapper>
      </body>
      
    </html>
  );
}
