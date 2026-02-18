import {
  Heart,
  Award,
  Rocket,
  Shield,
  Handshake,
  Users,
  MapPin,
  Briefcase,
  Building2,
  ClipboardList,
  ChevronDown,
} from "lucide-react";
import { teamMembers } from "@/data/team";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "About Us | Perfect Building Supply Co.",
  description:
    "Learn about Perfect Building Supply Co.'s mission to transform construction materials sourcing with AI-powered technology and trade-focused service.",
};

const values = [
  {
    icon: Heart,
    title: "Customer Obsession",
    description:
      "We center everything around our customers — their satisfaction drives us, and their trust is our greatest reward.",
  },
  {
    icon: Award,
    title: "Operational Excellence",
    description:
      "We strive for flawless execution in every aspect of our operations.",
  },
  {
    icon: Rocket,
    title: "Entrepreneurial Spirit",
    description:
      "Embrace innovation, foster creativity and adaptability, and pursue ambitious goals fearlessly.",
  },
  {
    icon: Shield,
    title: "Quality and Integrity",
    description:
      "We commit to delivering the highest quality while upholding unwavering integrity and the highest ethical standards.",
  },
  {
    icon: Handshake,
    title: "Building Strong Relationships",
    description:
      "We cultivate lasting connections with members, partners, suppliers, and communities — because collaboration drives our progress.",
  },
  {
    icon: Users,
    title: "Employee Care and Development",
    description:
      "We invest in our team's growth, well-being, and fulfillment — knowing that engaged employees are key to operational excellence and exceptional customer experiences.",
  },
];

const investorLogos: { name: string; logo: string }[] = [];

const navAnchors = [
  { label: "Meet the team", href: "#team", icon: Users },
  { label: "View open positions", href: "#positions", icon: ClipboardList },
  { label: "Investors", href: "#investors", icon: Award },
  { label: "Our main offices", href: "#offices", icon: MapPin },
];

export default function AboutUsPage() {
  return (
    <>
      {/* Hero - Full-width banner with storefront photo */}
      <section className="relative h-[220px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/logo/pbs-storefront.jpeg"
            alt="The Perfect Building Supply Company storefront"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-charcoal/20" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">About Us</h1>
          <p className="text-white/70 text-lg mt-3 hidden md:block">The Perfect Building Supply Company</p>
        </div>
      </section>

      {/* Main Heading */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Reinvent the way<br />
            construction professionals<br />
            source materials.
          </h2>
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
                When we started Perfect Building Supply Co., we set out to transform how
                construction professionals source materials. Having experienced
                the fragmented, slow, and costly procurement process firsthand,
                we knew there had to be a better way.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Perfect Building Supply Co. brings together the largest collective of construction
                professionals to harness real buying power, using advanced AI
                technology to deliver transparency, speed, and savings — making
                material procurement better, faster, easier, and more affordable
                for everyone involved.
              </p>
              <p className="text-sm text-gray-500 italic mb-1">
                Perfect Building Supply Co. Founding Team
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <img
                src="/images/surfaces/trade-professionals.png"
                alt="Perfect Building Supply Co. team at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission - White section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-accent-orange uppercase tracking-wider mb-3">
                Our Mission
              </p>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium mb-8">
                To provide our members with the most efficient way to source the
                materials they need — at the best possible price, with
                exceptional service.
              </p>
              <Button href="/sign-up" variant="primary" size="lg">
                Become a member
              </Button>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="/images/surfaces/fabricator-banner-desktop.png"
                alt="Our Mission"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="relative">
        <div className="aspect-[3/1] md:aspect-[4/1] overflow-hidden">
          <img
            src="/images/contact/contact-wrap.png"
            alt="Perfect Building Supply Co. banner"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Our Values
            </p>
            <h2 className="text-2xl md:text-3xl font-bold max-w-3xl mx-auto leading-snug">
              The Perfect Building Supply Co. spirit is guided by simple principles: customer obsession, ownership mentality, operational excellence, and long-term thinking.
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
                Anywhere in the U.S.<br />Any project.
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-8">
                We source top-quality materials from leading suppliers — at the best prices.
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

      {/* Navigation Anchors - Desktop only */}
      <section className="hidden md:block bg-gray-100 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 gap-4 py-4">
            {navAnchors.map((anchor) => (
              <a
                key={anchor.label}
                href={anchor.href}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg hover:bg-white transition-colors text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                <anchor.icon className="w-4 h-4" />
                {anchor.label}
                <ChevronDown className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Driven by Expertise
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet the team
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="w-28 h-28 md:w-36 md:h-36 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100 relative">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
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
                <p className="text-xs text-gray-500 font-semibold mt-0.5">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Open positions
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-6 bg-surface-light rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <div>
                <h3 className="font-semibold text-gray-900">Sales Manager</h3>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-accent-orange hover:underline"
              >
                View details
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Investors */}
      <section id="investors" className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Institutional Investors
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {investorLogos.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-center h-16 px-6"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-8 md:h-10 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section id="offices" className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Our main offices
          </h2>
          <div className="max-w-md">
            <div className="p-6 bg-surface-light rounded-xl border border-gray-100">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-orange flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Destin, FL</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    515 Mountain Dr<br />
                    Destin, FL 32541, USA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
