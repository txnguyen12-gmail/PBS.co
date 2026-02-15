import { Building2, Users, Target, Leaf } from "lucide-react";
import { teamMembers } from "@/data/team";
import Button from "@/components/ui/Button";
import ContactSection from "@/components/ui/ContactSection";

export const metadata = {
  title: "About Us | TanWinWin",
  description: "Learn about TanWinWin's mission to transform construction materials sourcing with AI-powered technology and trade-focused service.",
};

const values = [
  {
    icon: Target,
    title: "Trade-First",
    description: "Everything we build is designed for fabricators, builders, designers, and contractors.",
  },
  {
    icon: Building2,
    title: "Transparency",
    description: "Honest pricing, clear timelines, and no hidden fees — ever.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We grow when our trade professionals grow. Your success is our success.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We prioritize responsibly sourced materials and efficient supply chains.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Building the Future of Construction Sourcing
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            TanWinWin is transforming how trade professionals source construction materials — with AI-powered tools, unbeatable pricing, and dedicated support.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower trade professionals with the tools, pricing, and support they need to source construction materials faster, smarter, and more profitably. We believe every fabricator, builder, and designer deserves access to wholesale pricing without the wholesale hassle.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-navy mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                A construction industry where sourcing materials is as simple as a conversation. Where AI handles the complexity, and professionals can focus on what they do best — building, designing, and creating beautiful spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-surface-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Our Story</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            TanWinWin started with a simple observation: sourcing construction materials was broken. Trade professionals were spending hours calling distributors, comparing prices, and coordinating deliveries — time that should have been spent on the job site.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            We built TanWinWin to fix that. By combining direct vendor partnerships, AI-powered sourcing tools, and a dedicated team of industry experts, we created a platform where trade professionals can find, price, and order materials in minutes — not days. Today, we serve thousands of professionals across the country, helping them save time, cut costs, and grow their businesses.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-surface-light p-8 rounded-2xl text-center">
                <div className="w-14 h-14 bg-accent-orange/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-7 h-7 text-accent-orange" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            Meet the Team
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
            Industry experts dedicated to transforming your sourcing experience
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-charcoal/20 to-slate flex items-center justify-center">
                  <span className="text-2xl font-bold text-navy">{member.name.charAt(0)}</span>
                </div>
                <h3 className="font-semibold text-navy">{member.name}</h3>
                <p className="text-sm text-gray-500 mb-1">{member.role}</p>
                <p className="text-xs text-gray-400">{member.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Source Smarter?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Join thousands of trade professionals already saving with TanWinWin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/sign-up" variant="accent" size="lg">
              Create Free Account
            </Button>
            <Button href="/surfaces" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
              Explore Surfaces
            </Button>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
