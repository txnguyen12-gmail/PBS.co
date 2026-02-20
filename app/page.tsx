import type { Metadata } from "next";
import HomeHero from "@/components/home/HomeHero";
import ProductCategories from "@/components/home/ProductCategories";
import ValueProps from "@/components/home/ValueProps";
import TrustedPartners from "@/components/home/TrustedPartners";
import TestimonialCard from "@/components/ui/TestimonialCard";
import ContactSection from "@/components/ui/ContactSection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { surfacesTestimonials } from "@/data/testimonials";
import { homepageFAQ } from "@/data/faq";

export const metadata: Metadata = {
  title: "Perfect Building Supply Co. — Cabinets, WPC Walls & Ceilings for Trade Pros",
  description: "Wholesale building materials for contractors and builders. Trade pricing on cabinets, WPC wall panels, and ceiling systems. Custom configurations, bulk orders, and dedicated support.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ProductCategories />
      <ValueProps />
      <TrustedPartners />
      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-charcoal text-center mb-4">
            What Trade Professionals Are Saying
          </h2>
          <p className="text-gray-600 text-center mb-12">
            See why contractors and builders choose PBS for their projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {surfacesTestimonials.map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection
        title="Ready to source building materials? Talk to our team"
        subtitle="Our sourcing specialists help you find the right cabinets, wall panels, and ceilings for your project — at trade prices."
      />
      <FAQAccordion
        items={homepageFAQ}
        title="Frequently Asked Questions"
        category="Building Materials FAQs"
        description="Find answers about sourcing cabinets, WPC walls, ceilings, and more through Perfect Building Supply Co."
      />
    </>
  );
}
