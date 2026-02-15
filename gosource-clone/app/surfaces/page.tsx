import SurfacesHero from "@/components/surfaces/SurfacesHero";
import LogoCarousel from "@/components/ui/LogoCarousel";
import CollectionCards from "@/components/surfaces/CollectionCards";
import FeaturesGrid from "@/components/surfaces/FeaturesGrid";
import ThreeStepProcess from "@/components/surfaces/ThreeStepProcess";
import GoClubBanner from "@/components/surfaces/GoClubBanner";
import FabricatorBanner from "@/components/surfaces/FabricatorBanner";
import TestimonialCard from "@/components/ui/TestimonialCard";
import ContactSection from "@/components/ui/ContactSection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { surfaceBrands } from "@/data/brands";
import { surfacesTestimonials } from "@/data/testimonials";
import { surfacesFAQ } from "@/data/faq";

export const metadata = {
  title: "Surfaces - America's #1 Surfaces Marketplace | TanWinWin",
  description: "Shop quartz, natural stone, porcelain slabs, tiles, and flooring with exclusive trade pricing.",
};

export default function SurfacesPage() {
  return (
    <>
      <SurfacesHero />
      <LogoCarousel
        title="Trusted by leading brands"
        logos={surfaceBrands.map((name) => ({ name }))}
      />
      <CollectionCards />
      <FeaturesGrid />
      <ThreeStepProcess />
      <GoClubBanner />
      <FabricatorBanner />

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Trusted by thousands of trade professionals nationwide
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {surfacesTestimonials.map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <FAQAccordion items={surfacesFAQ} />
    </>
  );
}
