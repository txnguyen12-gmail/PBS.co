export const metadata = {
  title: "Silica Safety | Perfect Building Supply Co.",
  description: "Important safety information about crystalline silica exposure when working with natural and engineered stone products.",
};

export default function SilicaSafetyPage() {
  return (
    <>
      <section className="bg-charcoal text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Silica Safety</h1>
          <p className="text-white/60">Important safety information for trade professionals</p>
        </div>
      </section>

      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none text-gray-700">
          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">What is Crystalline Silica?</h2>
          <p className="mb-6">
            Crystalline silica is a naturally occurring mineral found in many construction materials, including granite, marble, quartzite, sandstone, and engineered quartz. When these materials are cut, ground, drilled, or polished, they can release fine silica dust particles into the air. Prolonged inhalation of respirable crystalline silica dust can cause serious health conditions, including silicosis, lung cancer, and other respiratory diseases.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Who Is at Risk?</h2>
          <p className="mb-4">Workers who may be exposed to silica dust include:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Stone fabricators and countertop installers</li>
            <li>Tile cutters and setters</li>
            <li>General contractors and construction workers</li>
            <li>Demolition and renovation crews</li>
            <li>Anyone who cuts, grinds, or polishes stone or concrete materials</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">OSHA Standards</h2>
          <p className="mb-6">
            The Occupational Safety and Health Administration (OSHA) has established a permissible exposure limit (PEL) of 50 micrograms of respirable crystalline silica per cubic meter of air, averaged over an 8-hour shift. Employers are required to limit worker exposure to this level and take action when exposure exceeds 25 micrograms (the action level).
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Protective Measures</h2>
          <p className="mb-4">To minimize silica dust exposure, trade professionals should:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Use wet cutting methods</strong> — Water suppresses dust at the source and is the most effective control measure</li>
            <li><strong>Use local exhaust ventilation</strong> — Dust collection systems attached to cutting tools capture dust before it becomes airborne</li>
            <li><strong>Wear appropriate respiratory protection</strong> — Use NIOSH-approved N95 or higher-rated respirators when engineering controls are insufficient</li>
            <li><strong>Limit dry cutting and grinding</strong> — Avoid dry methods whenever possible; if unavoidable, use integrated vacuum dust collection</li>
            <li><strong>Work in well-ventilated areas</strong> — Ensure adequate airflow in enclosed workspaces</li>
            <li><strong>Practice good housekeeping</strong> — Clean work areas with wet methods or HEPA-filtered vacuums; never dry sweep silica dust</li>
            <li><strong>Wear protective clothing</strong> — Change out of dusty work clothes before leaving the job site</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Health Monitoring</h2>
          <p className="mb-6">
            OSHA requires employers to provide medical exams to workers exposed to silica at or above the action level for 30 or more days per year. These exams include chest X-rays and lung function tests. Early detection of silica-related conditions is critical for preventing serious health outcomes.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Our Commitment</h2>
          <p className="mb-6">
            Perfect Building Supply Co. is committed to the safety and well-being of trade professionals. We provide Safety Data Sheets (SDS) for all stone and surface products upon request and encourage all fabricators and installers to follow OSHA guidelines and industry best practices for silica dust control.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Resources</h2>
          <p className="mb-4">For more information on silica safety, please refer to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>OSHA Silica Standards: <a href="https://www.osha.gov/silica-crystalline" target="_blank" rel="noopener noreferrer" className="text-accent-orange hover:underline">osha.gov/silica-crystalline</a></li>
            <li>NIOSH Silica Topic Page: <a href="https://www.cdc.gov/niosh/topics/silica/" target="_blank" rel="noopener noreferrer" className="text-accent-orange hover:underline">cdc.gov/niosh/topics/silica</a></li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Contact Us</h2>
          <p className="mb-6">
            If you have questions about silica safety or need Safety Data Sheets for any of our products, please contact us at{" "}
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
