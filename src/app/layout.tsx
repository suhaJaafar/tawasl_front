"use client"
import NextTopLoader from "nextjs-toploader";
import { useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import "./styles/styles.css";
import "./assets/css/all.css";
import "./assets/css/meanmenu.min.css";
import "./assets/sass/style.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export default function RootLayout({ children,}: { children: React.ReactNode }) {
    useEffect(() => {
        import("bootstrap");
    }, []);
    return (
        <html lang="en">
        <link rel="icon" type="image/png" href="favicon.png" />
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextTopLoader showSpinner={false} />
        {children}
        </body>
        </html>
    );
}
