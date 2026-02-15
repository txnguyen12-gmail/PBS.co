"use client";

interface LogoCarouselProps {
  title: string;
  logos: { name: string; logo?: string }[];
  speed?: "normal" | "slow";
}

export default function LogoCarousel({ title, logos, speed = "normal" }: LogoCarouselProps) {
  const animClass = speed === "slow" ? "animate-scroll-left-slow" : "animate-scroll-left";

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-navy">{title}</h2>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        <div className={`flex items-center gap-16 ${animClass} w-max`}>
          {[...logos, ...logos].map((item, i) => (
            <div key={i} className="flex-shrink-0 flex items-center justify-center h-12 min-w-[120px]">
              {item.logo ? (
                <img src={item.logo} alt={item.name} className="h-8 md:h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
              ) : (
                <span className="text-lg font-semibold text-gray-400 hover:text-gray-600 transition-colors whitespace-nowrap">
                  {item.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
