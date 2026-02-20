export const metadata = {
  title: "Refund Policy | Perfect Building Supply Co.",
  description: "Perfect Building Supply Co.'s refund and return policy for construction materials and building supplies.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <section className="bg-charcoal text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund Policy</h1>
          <p className="text-white/60">Last updated: February 15, 2026</p>
        </div>
      </section>

      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none text-gray-700">
          <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">1. General Return Policy</h2>
          <p className="mb-6">
            At Perfect Building Supply Co., we stand behind the quality of the materials we supply. If you are not satisfied with your purchase, you may request a return within 30 days of delivery, subject to the conditions outlined below. All returns must be authorized in advance by contacting our team.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">2. Eligibility for Returns</h2>
          <p className="mb-4">To be eligible for a return, items must be:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>In their original, unopened packaging and unused condition</li>
            <li>Free from damage, cuts, or modifications</li>
            <li>Accompanied by the original order confirmation or invoice</li>
            <li>Returned within 30 days of the delivery date</li>
          </ul>

          <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">3. Non-Returnable Items</h2>
          <p className="mb-4">The following items are not eligible for return:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Custom-cut or fabricated materials (slabs cut to specification, custom tile layouts)</li>
            <li>Special-order items not carried in regular inventory</li>
            <li>Items that have been installed or altered</li>
            <li>Clearance or final-sale items</li>
            <li>Adhesives, sealants, and chemical products that have been opened</li>
          </ul>

          <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">4. Restocking Fees</h2>
          <p className="mb-6">
            A restocking fee of up to 25% may apply to returned items depending on the product type and condition. Restocking fees help cover the cost of inspection, repackaging, and re-stocking. The exact fee will be communicated to you when your return is authorized.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">5. Damaged or Defective Items</h2>
          <p className="mb-6">
            If you receive items that are damaged, defective, or incorrect, please contact us within 48 hours of delivery with photos of the damage and your order details. We will arrange a replacement or full refund at no additional cost to you. Do not discard damaged items until the claim has been resolved.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">6. How to Initiate a Return</h2>
          <p className="mb-4">To request a return, please:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Contact our team at <a href="mailto:LettonLLC@gmail.com" className="text-accent-orange hover:underline">LettonLLC@gmail.com</a> or call <a href="tel:+17139271500" className="text-accent-orange hover:underline">(713) 927-1500</a></li>
            <li>Provide your order number and reason for the return</li>
            <li>Wait for a Return Authorization (RA) number before shipping items back</li>
          </ul>

          <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">7. Refund Processing</h2>
          <p className="mb-6">
            Once we receive and inspect your returned items, we will process your refund within 7-10 business days. Refunds will be issued to the original payment method. Shipping costs are non-refundable unless the return is due to our error (wrong item, damaged in transit, or defective product).
          </p>

          <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">8. Cancellations</h2>
          <p className="mb-6">
            Orders may be cancelled without penalty if the cancellation request is received before the order has been shipped. Once an order has shipped, it is subject to the standard return policy and applicable restocking fees.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">9. Contact Us</h2>
          <p className="mb-6">
            If you have questions about our refund policy, please contact us at{" "}
            <a href="mailto:LettonLLC@gmail.com" className="text-accent-orange hover:underline">
              LettonLLC@gmail.com
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
