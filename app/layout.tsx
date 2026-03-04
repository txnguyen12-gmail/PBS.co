import type { Metadata } from "next";
import Script from "next/script";
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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ME1LG5WRJJ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ME1LG5WRJJ');
        `}
      </Script>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BuildingMaterialStore",
            name: "Perfect Building Supply Co.",
            url: "https://www.perfectbuildingsupply.com",
            logo: "https://www.perfectbuildingsupply.com/images/logo/logo.png",
            image: "https://www.perfectbuildingsupply.com/images/logo/pbs-storefront.jpeg",
            telephone: "+1-713-927-1500",
            email: "LettonLLC@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "515 Mountain Dr",
              addressLocality: "Destin",
              addressRegion: "FL",
              postalCode: "32541",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 30.3935,
              longitude: -86.4958,
            },
            areaServed: {
              "@type": "Country",
              name: "United States",
            },
            description:
              "Wholesale building materials for contractors and builders. SPC & LVP flooring, cabinets, quartz countertops, WPC/PVC wall panels & ceilings, kitchen & bath fixtures, plumbing, doors, and more.",
            priceRange: "$$",
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "08:00",
              closes: "17:00",
            },
            sameAs: [],
          }),
        }}
      />
      <body className={`${inter.className} ${montserrat.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatButton />
      </body>
    </html>
  );
}
