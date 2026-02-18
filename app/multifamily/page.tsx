import MultifamilyHero from "@/components/multifamily/MultifamilyHero";
import MetricsDisplay from "@/components/multifamily/MetricsDisplay";
import ImageBanners from "@/components/multifamily/ImageBanners";
import PricingPackages from "@/components/multifamily/PricingPackages";
import TeamSection from "@/components/multifamily/TeamSection";
import TestimonialsBanner from "@/components/multifamily/TestimonialsBanner";
import ContactForm from "@/components/multifamily/ContactForm";

export const metadata = {
  title: "Multifamily Renovations - AI-Powered Solutions | PBS Supply Co.",
  description: "Transform your multifamily properties with PBS Supply Co.'s AI-powered renovation solutions. On spec, on time, on budget.",
};

export default function MultifamilyPage() {
  return (
    <>
      <MultifamilyHero />
      <MetricsDisplay />
      <ImageBanners />
      <PricingPackages />
      <TeamSection />
      <TestimonialsBanner />
      <ContactForm />
    </>
  );
}
