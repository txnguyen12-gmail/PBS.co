"use client";

interface VideoHeroProps {
  videoUrl: string;
  mobileVideoUrl?: string;
  children: React.ReactNode;
  overlay?: boolean;
}

export default function VideoHero({ videoUrl, mobileVideoUrl, children, overlay = true }: VideoHeroProps) {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      {mobileVideoUrl && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover md:hidden"
        >
          <source src={mobileVideoUrl} type="video/mp4" />
        </video>
      )}
      {!mobileVideoUrl && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover md:hidden"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
      {overlay && <div className="absolute inset-0 bg-charcoal/70" />}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
}
