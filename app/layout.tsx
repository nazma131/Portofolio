import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nazma Nurlatifah T | Junior Web Developer Portfolio",
  description: "Recruiter-friendly portfolio of Nazma Nurlatifah T, a Junior Web Developer specializing in React, Next.js 15, TypeScript, and Tailwind CSS.",
  keywords: ["Junior Web Developer", "Frontend Engineer", "Next.js 15", "React", "TypeScript", "Tailwind CSS", "Portfolio"],
  authors: [{ name: "Nazma Nurlatifah T" }],
  creator: "Nazma Nurlatifah T",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nazmanurlatifah.dev",
    title: "Nazma Nurlatifah T | Junior Web Developer Portfolio",
    description: "Recruiter-friendly portfolio of Nazma Nurlatifah T, a Junior Web Developer specializing in React, Next.js 15, TypeScript, and Tailwind CSS.",
    siteName: "Nazma Nurlatifah Portfolio",
    images: [
      {
        url: "/foto.jpg",
        width: 1200,
        height: 630,
        alt: "Nazma Nurlatifah T Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nazma Nurlatifah T | Junior Web Developer",
    description: "Recruiter-friendly portfolio of Nazma Nurlatifah T, Junior Web Developer.",
    images: ["/foto.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nazma Nurlatifah T",
    jobTitle: "Junior Web Developer",
    url: "https://nazmanurlatifah.dev",
    sameAs: [
      "https://github.com/nazma131",
      "https://linkedin.com/in/nazma-nurlatifah-triandini",
    ],
    knowsAbout: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "Node.js"],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
