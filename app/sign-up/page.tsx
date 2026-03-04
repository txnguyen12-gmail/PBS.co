import type { Metadata } from "next";
import SignUpForm from "./SignUpForm";

export const metadata: Metadata = {
  title: "Get a Quote | Perfect Building Supply Co.",
  description:
    "Request wholesale pricing on cabinets, quartz slabs, flooring, and building materials. Quotes delivered within 24 hours.",
  alternates: { canonical: "/sign-up" },
};

export default function SignUpPage() {
  return <SignUpForm />;
}
