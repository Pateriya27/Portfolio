import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Portfolio | Full Stack Developer",
  description: "Professional portfolio showcasing web development projects, skills, and experience in full-stack development.",
  keywords: "portfolio, web developer, full stack, react, next.js, typescript",
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Portfolio | Full Stack Developer",
    description: "Professional portfolio showcasing web development projects, skills, and experience in full-stack development.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-md z-50"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
