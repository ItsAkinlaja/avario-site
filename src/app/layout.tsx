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
    default: "Avario",
    template: "%s | Avario",
  },
  description:
    "Avario Digitals designs and deploys structured systems that drive measurable business growth across acquisition, sales, operations, and infrastructure.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico?v=1", sizes: "any" },
      {
        url: "https://avariodigitals.com/wp-content/uploads/2022/11/Avario-DP.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: "https://avariodigitals.com/wp-content/uploads/2022/11/Avario-DP.png",
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
