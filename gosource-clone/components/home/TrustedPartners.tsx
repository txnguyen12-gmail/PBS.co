"use client";

import LogoCarousel from "@/components/ui/LogoCarousel";
import { trustedBuilders, trustedVendors } from "@/data/brands";

export default function TrustedPartners() {
  return (
    <>
      <LogoCarousel title="Trusted by the top builders in the U.S." logos={trustedBuilders} />
      <LogoCarousel title="Our trusted vendors" logos={trustedVendors} speed="slow" />
    </>
  );
}
