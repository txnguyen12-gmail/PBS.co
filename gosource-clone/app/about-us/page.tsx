import {
  Heart,
  Award,
  Rocket,
  Shield,
  Handshake,
  Users,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { teamMembers } from "@/data/team";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "About Us | TanWinWin",
  description:
    "Learn about TanWinWin's mission to transform construction materials sourcing with AI-powered technology and trade-focused service.",
};

const values = [
  {
    icon: Heart,
    title: "Customer Obsession",
    description:
      "We put our members first in everything we do. Their success drives every decision, product, and partnership we pursue.",
  },
  {
    icon: Award,
    title: "Operational Excellence",
    description:
      "We relentlessly optimize our processes to deliver materials faster, more accurately, and at the best possible price.",
  },
  {
    icon: Rocket,
    title: "Entrepreneurial Spirit",
    description:
      "We move fast, take smart risks, and constantly innovate to stay ahead in a rapidly evolving industry.",
  },
  {
    icon: Shield,
    title: "Quality and Integrity",
    description:
      "We never cut corners. Every material we source meets our rigorous standards, and we stand behind every order.",
  },
  {
    icon: Handshake,
    title: "Building Strong Relationships",
    description:
      "We invest in long-term partnerships with our members, vendors, and team — because trust is the foundation of great work.",
  },
  {
    icon: Users,
    title: "Employee Care and Development",
    description:
      "Our team is our greatest asset. We foster growth, celebrate wins, and create an environment where everyone can thrive.",
  },
];

const trustedLogos = [
  "TruAmerica",
  "Tishman Speyer",
  "Opendoor",
  "Compass",
  "Avalon Bay",
  "Greystar",
  "Lennar",
  "KB Home",
  "Related Companies",
  "Brookfield",
  "CBRE",
  "Toll Brothers",
];

export default function AboutUsPage() {
  return (
    <>
      {/* Hero - Full-width banner with image overlay */}
      <section className="relative h-[340px] md:h-[440px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700">
          {/* Placeholder for hero background image */}
          <div className="absolute inset-0 bg-[url('/images/about-hero.jpg')] bg-cover bg-center opacity-40" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">About Us</h1>
        </div>
      </section>

      {/* Our Story - For Builders, By Builders */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                For Builders, By Builders
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                TanWinWin was founded with a clear mission: to transform how
                construction professionals source materials. We saw an industry
                plagued by opaque pricing, fragmented supply chains, and
                countless hours wasted on phone calls and site visits just to get
                a quote.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                So we built a better way. By combining deep industry
                relationships, AI-powered sourcing technology, and a team that
                speaks the language of construction, TanWinWin delivers the
                materials you need at prices that make sense -- with the speed
                and reliability your projects demand.
              </p>
              <p className="text-sm text-gray-500 italic">
                Founded by a team of industry veterans who have spent decades in
                construction, procurement, and technology.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-gray-300 text-3xl font-bold">
                  TanWinWin
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-gray-300 text-3xl font-bold">
                  TanWinWin
                </span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Our Mission
              </p>
              <p className="text-xl md:text-2xl text-gray-900 leading-relaxed font-medium mb-8">
                To provide our members with the most efficient way to source the
                materials they need -- at the best possible price, with
                exceptional service.
              </p>
              <Button href="/sign-up" variant="primary" size="lg">
                Become a member
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Logos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-base text-gray-500 mb-10 max-w-2xl mx-auto">
            Trusted by hundreds of top-tier developers, builders, architects,
            and designers.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center">
            {trustedLogos.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center h-16 px-4"
              >
                <span className="text-sm font-semibold text-gray-300 text-center">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Our Values
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              The principles that guide everything we do
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50"
              >
                <div className="w-12 h-12 bg-accent-orange/15 rounded-xl flex items-center justify-center mb-5">
                  <value.icon className="w-6 h-6 text-accent-orange" />
                </div>
                <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area CTA */}
      <section className="py-20 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Anywhere in the U.S. Any project.
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-8">
                From coast to coast, TanWinWin delivers construction materials
                to job sites nationwide. Whether you are building in Los Angeles,
                New York, Miami, or anywhere in between -- we have got you
                covered.
              </p>
              <Button href="/sign-up" variant="accent" size="lg">
                Get Started
              </Button>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-800 flex items-center justify-center">
              <MapPin className="w-24 h-24 text-gray-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Driven by Expertise
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet the team
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Industry experts dedicated to transforming your sourcing
              experience.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100 relative">
                  {member.image && member.image.startsWith("http") ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="112px"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-300">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  {member.name}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
