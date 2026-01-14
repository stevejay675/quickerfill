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
  title: {
    default: "QuickerFill – Instantly Fill Web Forms with Fake Data",
    template: "%s | QuickerFill",
  },
  description:
    "QuickerFill is a free browser extension that instantly fills web forms with realistic fake data for developers and QA engineers.",
  applicationName: "QuickerFill",
  keywords: [
    "form filler",
    "fake data",
    "mock data",
    "qa testing",
    "developer tools",
    "browser extension",
    "form testing",
  ],
  authors: [{ name: "QuickerFill" }],
  creator: "QuickerFill",
  publisher: "QuickerFill",
  metadataBase: new URL("https://quickerfill.com"),

  openGraph: {
    title: "QuickerFill – Instantly Fill Web Forms with Realistic Mock Data",
    description:
      "Fill web forms instantly with realistic fake data. Built for developers and QA.",
    url: "https://quickerfill.com",
    siteName: "QuickerFill",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "QuickerFill browser extension",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "QuickerFill – Instantly Fill Web Forms with Fake Data",
    description:
      "A free browser extension for developers and QA to instantly fill forms with mock data.",
    images: ["/images/og.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
