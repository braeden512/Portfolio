import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Braeden Treutel Portfolio",
  description:
    "Full-stack developer specializing in web applications, AI integration, and research. Explore my projects, research, and get in touch.",
  generator: "v0.app",
  keywords: [
    "developer",
    "portfolio",
    "full-stack",
    "web development",
    "AI",
    "research",
  ],
  authors: [{ name: "Braeden Treutel" }],
  openGraph: {
    title: "Braeden Treutel Portfolio",
    description:
      "Full-stack developer specializing in web applications, AI integration, and research.",
    type: "website",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/icon.svg",
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
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} bg-background`}
    >
      <body className="font-sans antialiased min-h-screen">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
