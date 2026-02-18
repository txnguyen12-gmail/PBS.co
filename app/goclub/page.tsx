import GoClubHero from "@/components/goclub/GoClubHero";
import WhatIsGoClub from "@/components/goclub/WhatIsGoClub";
import TradeProSegments from "@/components/goclub/TradeProSegments";
import MembershipTiers from "@/components/goclub/MembershipTiers";
import GoCashSteps from "@/components/goclub/GoCashSteps";
import TestimonialCard from "@/components/ui/TestimonialCard";
import ContactSection from "@/components/ui/ContactSection";
import { tanclubTestimonials } from "@/data/testimonials";

export const metadata = {
  title: "PBS Club - The First Loyalty Club for Trade Professionals | PBS Supply Co.",
  description: "Join PBS Club for exclusive pricing, PBScash rewards, and priority support. Built for fabricators, designers, and builders.",
};

export default function GoClubPage() {
  return (
    <>
      <GoClubHero />
      <WhatIsGoClub />
      <TradeProSegments />
      <MembershipTiers />
      <GoCashSteps />

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            What Stone Fabricators & Trade Professionals Are Saying
          </h2>
          <p className="text-gray-600 text-center mb-12">
            See why pros choose PBS Supply Co. for their projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tanclubTestimonials.slice(0, 5).map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection
        title="Want to learn more? Contact our team"
        subtitle="Our club experts are ready to onboard you!"
      />
    </>
  );
}
