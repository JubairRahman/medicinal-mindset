import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Medicinal Mindset",
  description: " - Your Trusted Medical Companion",
  icons: {
    // Adding ?v=1 forces the browser to refresh its cache
    icon: "/assets/img/logo.jpg?v=1",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-white text-slate-800">{children}</body>
    </html>
  );
}
