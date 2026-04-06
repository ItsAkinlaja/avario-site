import type { Metadata } from "next";
import { Work_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui/BackToTop";

const workSans = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  applicationName: "Avario",
  title: {
    default: "Avario Digitals - Structured Growth Systems",
    template: "%s | Avario Digitals",
  },
  description:
    "Avario Digitals designs and deploys structured systems that drive measurable business growth across acquisition, sales, operations, and infrastructure.",
  metadataBase: new URL("https://avariodigitals.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Avario Digitals - Structured Growth Systems",
    description:
      "We build systems that deliver measurable growth. 150+ systems deployed. 15+ team members.",
    url: "https://avariodigitals.com",
    siteName: "Avario Digitals",
    images: [
      {
        url: "https://avariodigitals.com/wp-content/uploads/2022/11/Avario-DP.png",
        width: 1200,
        height: 630,
        alt: "Avario Digitals Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avario Digitals - Structured Growth Systems",
    description:
      "We build systems that deliver measurable growth. 150+ systems deployed.",
    images: [
      "https://avariodigitals.com/wp-content/uploads/2022/11/Avario-DP.png",
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  keywords: [
    "growth systems",
    "business growth",
    "acquisition",
    "sales infrastructure",
    "operations",
    "measurable outcomes",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} ${poppins.variable} h-full antialiased overflow-x-hidden`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
