import MultifamilyHero from "@/components/multifamily/MultifamilyHero";
import MetricsDisplay from "@/components/multifamily/MetricsDisplay";
import PricingPackages from "@/components/multifamily/PricingPackages";
import TeamSection from "@/components/multifamily/TeamSection";
import ContactForm from "@/components/multifamily/ContactForm";

export const metadata = {
  title: "Multifamily Renovations - AI-Powered Solutions | TanWinWin",
  description: "Transform your multifamily properties with TanWinWin's AI-powered renovation solutions. On spec, on time, on budget.",
};

export default function MultifamilyPage() {
  return (
    <>
      <MultifamilyHero />
      <MetricsDisplay />
      <PricingPackages />
      <TeamSection />
      <ContactForm />
    </>
  );
}
