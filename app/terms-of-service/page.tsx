export const metadata = {
  title: "Terms of Service | TanWinTan",
  description: "TanWinTan's terms of service — the rules and guidelines for using our platform.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <section className="bg-charcoal text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-white/60">Last updated: February 15, 2026</p>
        </div>
      </section>

      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none text-gray-700">
          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-6">
            By accessing or using TanWinTan&apos;s website, platform, and services (collectively, the &quot;Services&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Services. These terms apply to all users, including trade professionals, visitors, and any other individuals who access or use the Services.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">2. Account Registration</h2>
          <p className="mb-6">
            To access certain features of our Services, you must create an account. You agree to provide accurate, current, and complete information during registration and to keep your account information up to date. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">3. Products and Pricing</h2>
          <p className="mb-6">
            All product descriptions, images, and specifications are provided for informational purposes. While we strive for accuracy, we do not guarantee that product descriptions or pricing are error-free. We reserve the right to correct any errors and to cancel orders placed at incorrect prices. Prices are subject to change without notice. Trade pricing and TanClub member pricing are available only to qualifying accounts.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">4. Orders and Payment</h2>
          <p className="mb-6">
            By placing an order, you agree to pay the listed price plus any applicable taxes, shipping, and handling fees. We accept major credit cards and approved payment methods. All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason, including suspected fraud or unauthorized activity.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">5. TanClub Membership and TanCash</h2>
          <p className="mb-6">
            TanClub membership is subject to separate terms and conditions. TanCash rewards are earned on qualifying purchases and may be redeemed on future orders. TanCash has no cash value and cannot be transferred to third parties. We reserve the right to modify the TanCash program, including earning rates and redemption terms, at any time with reasonable notice.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">6. Shipping and Delivery</h2>
          <p className="mb-6">
            Shipping times and costs vary based on product type, quantity, and delivery location. Estimated delivery dates are provided as a convenience and are not guaranteed. Risk of loss and title for items pass to you upon delivery to the carrier. You are responsible for inspecting deliveries and reporting any damage or discrepancies within 48 hours of receipt.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">7. Returns and Refunds</h2>
          <p className="mb-6">
            Our return and refund policy is detailed on our Refund Policy page. Custom orders, cut-to-size materials, and special-order items may not be eligible for return. All returns must be authorized in advance. Restocking fees may apply depending on the product and circumstances of the return.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">8. Intellectual Property</h2>
          <p className="mb-6">
            All content on our platform — including text, graphics, logos, images, and software — is the property of TanWinTan or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our prior written consent.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">9. Limitation of Liability</h2>
          <p className="mb-6">
            To the fullest extent permitted by law, TanWinTan shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our Services. Our total liability for any claim arising from these terms shall not exceed the amount you paid to us in the 12 months preceding the claim.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">10. Governing Law</h2>
          <p className="mb-6">
            These terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of laws principles. Any disputes arising under these terms shall be resolved in the state or federal courts located in Los Angeles County, California.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">11. Changes to These Terms</h2>
          <p className="mb-6">
            We reserve the right to modify these terms at any time. We will provide notice of material changes by posting the updated terms on our website. Your continued use of our Services after changes are posted constitutes your acceptance of the revised terms.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">12. Contact Us</h2>
          <p className="mb-6">
            If you have questions about these Terms of Service, please contact us at{" "}
            <a href="mailto:hello@tanwintan.com" className="text-accent-orange hover:underline">
              hello@tanwintan.com
            </a>{" "}
            or call us at{" "}
            <a href="tel:+14242507795" className="text-accent-orange hover:underline">
              (424) 250-7795
            </a>.
          </p>
        </div>
      </article>
    </>
  );
}
