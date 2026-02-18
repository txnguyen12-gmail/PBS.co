export const metadata = {
  title: "Privacy Policy | PBS Supply Co.",
  description: "PBS Supply Co.'s privacy policy — how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-charcoal text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-white/60">Last updated: February 15, 2026</p>
        </div>
      </section>

      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none text-gray-700">
          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            We collect information you provide directly to us, such as when you create an account, place an order, request a quote, or contact us. This may include your name, email address, phone number, company name, billing and shipping addresses, and payment information.
          </p>
          <p className="mb-6">
            We also automatically collect certain information when you use our platform, including your IP address, browser type, operating system, referring URLs, and information about how you interact with our services.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Process and fulfill your orders and quote requests</li>
            <li>Manage your PBS Club membership and PBScash rewards</li>
            <li>Communicate with you about products, services, and promotions</li>
            <li>Improve and personalize your experience on our platform</li>
            <li>Analyze usage patterns to enhance our services</li>
            <li>Comply with legal obligations and protect our rights</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">3. Information Sharing</h2>
          <p className="mb-6">
            We do not sell your personal information. We may share your information with trusted third-party service providers who help us operate our platform, process payments, deliver materials, and provide customer support. These providers are bound by contractual obligations to protect your data. We may also disclose information when required by law or to protect the rights and safety of our users and company.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">4. Data Security</h2>
          <p className="mb-6">
            We implement industry-standard security measures to protect your personal information, including encryption, secure servers, and access controls. While no method of transmission over the Internet is completely secure, we strive to protect your data using commercially reasonable safeguards.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">5. Cookies and Tracking</h2>
          <p className="mb-6">
            We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings. Disabling cookies may affect certain features of our platform.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">6. Your Rights</h2>
          <p className="mb-4">Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of marketing communications</li>
            <li>Request a copy of your data in a portable format</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">7. Third-Party Links</h2>
          <p className="mb-6">
            Our platform may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">8. Children&apos;s Privacy</h2>
          <p className="mb-6">
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a minor, we will take steps to delete it promptly.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">9. Changes to This Policy</h2>
          <p className="mb-6">
            We may update this privacy policy from time to time. We will notify you of any material changes by posting the updated policy on our website and updating the &quot;Last updated&quot; date. Your continued use of our services after changes are posted constitutes your acceptance of the updated policy.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">10. Contact Us</h2>
          <p className="mb-6">
            If you have questions about this privacy policy or our data practices, please contact us at{" "}
            <a href="mailto:hello@pbssupply.co" className="text-accent-orange hover:underline">
              hello@pbssupply.co
            </a>{" "}
            or call us at{" "}
            <a href="tel:+17139271500" className="text-accent-orange hover:underline">
              (713) 927-1500
            </a>.
          </p>
        </div>
      </article>
    </>
  );
}
