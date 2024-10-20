import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Cairo} from 'next/font/google'
const cairo = Cairo({subsets:['latin']})
export const metadata: Metadata = {
  title: "Tech Care",
  description: "this app was made by nextjs and tailwind and chart.js",
};
import NavBar from "./NavBar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cairo.className} antialiased text-text p-3 bg-background flex flex-col gap-y-5`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
