import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alihassanmughees.vercel.app";

export const metadata: Metadata = {
  title: "Ali Hassan Mughees | Web & Mobile App Developer",
  description:
    "Specializing in web and mobile app development with Flutter, React, and Angular, integrated with secure REST APIs. Clean UI/UX and scalable architecture.",
  keywords: [
    "Ali Hassan Mughees",
    "Web Developer",
    "Mobile App Developer",
    "Flutter Developer",
    "React Developer",
    "Angular Developer",
    "TypeScript",
    "Tailwind CSS",
    "Bootstrap",
    "REST APIs",
    "Firebase",
    "UI/UX Design",
    "Figma",
    "MVVM",
    "Cross-Platform",
    "Dart",
  ],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true, nocache: true },
  themeColor: "#2563eb",
  openGraph: {
    title: "Ali Hassan Mughees | Web & Mobile App Developer",
    description:
      "Explore web and mobile projects by Ali Hassan Mughees. Flutter, React, Angular, Firebase, and REST APIs.",
    url: siteUrl,
    siteName: "Ali Hassan Mughees Portfolio",
    images: [
      {
        url: `${siteUrl}/images/org-image.png`,
        width: 1200,
        height: 630,
        alt: "Ali Hassan Mughees Portfolio Preview",
      },
    ],
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Hassan Mughees | Web & Mobile App Developer",
    description:
      "Flutter, React, Angular, Firebase, and REST APIs. Clean UI/UX and scalable apps.",
    images: [`${siteUrl}/images/org-image.png`],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
