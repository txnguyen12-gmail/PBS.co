import type { Metadata } from "next";
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
import BlogSection from "@/components/surfaces/BlogSection";
import { surfaceBrands } from "@/data/brands";
import { surfacesTestimonials } from "@/data/testimonials";
import { surfacesFAQ } from "@/data/faq";

export const metadata: Metadata = {
  title: "TanWinWin — America's #1 Surfaces Marketplace for Trade Professionals",
  description: "Source premium quartz, natural stone, porcelain slabs, tiles, flooring & appliances at wholesale pricing. 300,000+ products from 500+ suppliers. Join TanClub for up to 5% cashback.",
};

export default function HomePage() {
  return (
    <>
      <SurfacesHero />
      <LogoCarousel
        title="Trusted brands. One marketplace."
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
            What Stone Fabricators & Trade Professionals Are Saying
          </h2>
          <p className="text-gray-600 text-center mb-12">
            See why pros choose TanWinWin for their projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {surfacesTestimonials.map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection
        title="Ready to find your Surfaces? Contact our sourcing desk"
        subtitle="Our team of TanWinWin pros is ready to help you find the perfect slab for your project."
      />
      <FAQAccordion
        items={surfacesFAQ}
        title="TanWinWin Answering Your Questions"
        category="Surfaces Marketplace FAQs"
        description="Find answers about sourcing surfaces, collections, tiles, and flooring through TanWinWin."
      />
      <BlogSection />
    </>
  );
}
