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
  title: "Maddie Nguyen | Creative Account Executive",
  description:
    "Portfolio of Maddie Nguyen, a Creative Account Executive focused on music, entertainment, brand campaigns, client communication, campaign coordination, and project execution.",
  keywords: [
    "Maddie Nguyen",
    "Nguyen Van Nhi",
    "Creative Account Executive",
    "Music Label",
    "Entertainment",
    "Brand Campaigns",
    "Account Management",
    "Campaign Coordination",
  ],
  authors: [{ name: "Maddie Nguyen" }],
  openGraph: {
    title: "Maddie Nguyen | Creative Account Executive",
    description:
      "Creative portfolio for music, entertainment, brand campaign coordination, and account execution.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#e8ded1] text-[#20171a]">
        {children}
      </body>
    </html>
  );
}