import type { Metadata } from "next";
import SurfacesHero from "@/components/surfaces/SurfacesHero";
import CollectionCards from "@/components/surfaces/CollectionCards";
import FeaturesGrid from "@/components/surfaces/FeaturesGrid";
import ThreeStepProcess from "@/components/surfaces/ThreeStepProcess";
import PBSClubBanner from "@/components/surfaces/PBSClubBanner";
import FabricatorBanner from "@/components/surfaces/FabricatorBanner";
import TestimonialCard from "@/components/ui/TestimonialCard";
import ContactSection from "@/components/ui/ContactSection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import BlogSection from "@/components/surfaces/BlogSection";
import { surfacesTestimonials } from "@/data/testimonials";
import { surfacesFAQ } from "@/data/faq";

export const metadata: Metadata = {
  title: "Perfect Building Supply Co. — America's #1 Building Supply Source",
  description: "Lower prices than your current supplier, guaranteed. Direct trucking to your jobsite. Slabs, tiles, flooring, cabinets, fixtures & more for builders of all sizes.",
};

export default function HomePage() {
  return (
    <>
      <SurfacesHero />
      <CollectionCards />
      <FeaturesGrid />
      <ThreeStepProcess />
      <PBSClubBanner />
      <FabricatorBanner />

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            What Stone Fabricators & Trade Professionals Are Saying
          </h2>
          <p className="text-gray-600 text-center mb-12">
            See why pros choose Perfect Building Supply Co. for their projects.
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
        subtitle="Our team of Perfect Building Supply Co. pros is ready to help you find the perfect slab for your project."
      />
      <FAQAccordion
        items={surfacesFAQ}
        title="Perfect Building Supply Co. — Your Questions Answered"
        category="Surfaces Marketplace FAQs"
        description="Find answers about sourcing building supplies, materials, and logistics through Perfect Building Supply Co."
      />
      <BlogSection />
    </>
  );
}
