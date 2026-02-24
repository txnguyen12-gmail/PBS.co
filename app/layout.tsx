import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatButton from "@/components/layout/ChatButton";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.perfectbuildingsupply.com"),
  title: {
    default: "Perfect Building Supply Co. — America's #1 Building Supply Source",
    template: "%s | Perfect Building Supply Co.",
  },
  description: "Lower prices than your current supplier, guaranteed. Direct trucking to your jobsite. Building supplies for large and small builders.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Perfect Building Supply Co.",
    title: "Perfect Building Supply Co. — America's #1 Building Supply Source",
    description: "Wholesale building materials for contractors, builders, and trade professionals. Trade pricing on cabinets, WPC wall panels, flooring, and more.",
    images: [{ url: "/images/logo/logo.png", width: 1200, height: 630, alt: "Perfect Building Supply Co." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perfect Building Supply Co. — America's #1 Building Supply Source",
    description: "Wholesale building materials for contractors, builders, and trade professionals. Trade pricing on cabinets, WPC wall panels, flooring, and more.",
    images: ["/images/logo/logo.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${montserrat.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatButton />
      </body>
    </html>
  );
}
