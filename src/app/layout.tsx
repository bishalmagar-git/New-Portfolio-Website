import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Initialize Geist fonts
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bishal Pulami | Android Developer",
    template: "%s | Bishal Pulami"
  },
  description: "Professional portfolio of Bishal Pulami, Android developer. Expertise in Jetpack Compose, MVVM Architecture, and modern Android development.",
  metadataBase: new URL("https://bishalpulami.com"),
  keywords: [
    "Android Developer",
    "Kotlin",
    "Jetpack Compose",
    "Mobile App Development",
    "Bishal Pulami",
    "Android Portfolio",
    "Java",
    "SQLite",
    "Firebase"
  ],
  creator: "Bishal Pulami",
  openGraph: {
    title: "Bishal Pulami | Android Developer",
    description: "Professional portfolio showcasing Kotlin and Android development expertise",
    url: "https://bishalpulami.com",
    siteName: "Bishal Pulami Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bishal Pulami's Android Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bishal Pulami | Android Developer",
    description: "Android developer portfolio",
    creator: "@yourtwitterhandle",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}