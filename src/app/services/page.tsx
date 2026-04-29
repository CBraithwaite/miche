import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Miche Solutions",
  description:
    "Explore Miche Solutions' comprehensive real estate investment consultation services — market analysis, portfolio strategy, due diligence, and more.",
};

const services = [
  {
    title: "Market Analysis & Research",
    description:
      "Our team provides deep-dive analysis into local and regional real estate markets across North America. We track demographic shifts, employment trends, infrastructure development, and supply-demand dynamics to identify markets with the strongest growth potential.",
    features: [
      "Quarterly market reports for 35+ metro areas",
      "Emerging neighborhood identification",
      "Rental yield and appreciation forecasting",
      "Competitive landscape assessment",
    ],
  },
  {
    title: "Investment Portfolio Strategy",
    description:
      "We design personalized investment strategies that align with your financial goals, risk tolerance, and timeline. Whether you're looking for cash flow, appreciation, or a balanced approach, we create a roadmap tailored to your needs.",
    features: [
      "Risk-adjusted portfolio construction",
      "Asset allocation recommendations",
      "Cash flow optimization planning",
      "Diversification across markets and property types",
    ],
  },
  {
    title: "Property Due Diligence",
    description:
      "Before you invest a dollar, our due diligence process ensures you have complete clarity on the opportunity. We evaluate every aspect of a potential investment — from financials to physical condition to legal compliance.",
    features: [
      "Financial modeling and pro forma analysis",
      "Property condition assessment coordination",
      "Title and legal review guidance",
      "Environmental and zoning compliance checks",
    ],
  },
  {
    title: "Wealth & Tax Planning",
    description:
      "Real estate investing is most powerful when integrated into a broader wealth strategy. We work alongside your financial advisor and accountant to ensure your real estate portfolio is optimized for tax efficiency and long-term growth.",
    features: [
      "1031 exchange strategy and timing",
      "Cost segregation study guidance",
      "Entity structuring recommendations",
      "Estate and succession planning for property portfolios",
    ],
  },
  {
    title: "Acquisition & Negotiation Support",
    description:
      "When you've found the right property, we help you negotiate the best terms. Our experience across hundreds of transactions ensures you enter every deal from a position of strength.",
    features: [
      "Offer strategy and pricing analysis",
      "Negotiation tactics and counteroffers",
      "Closing process management",
      "Vendor and contractor referrals",
    ],
  },
  {
    title: "Ongoing Portfolio Management",
    description:
      "Our relationship doesn't end at closing. We provide ongoing monitoring and strategic guidance to ensure your portfolio continues to perform and evolve with changing market conditions.",
    features: [
      "Annual portfolio performance reviews",
      "Refinancing and equity extraction timing",
      "Exit strategy planning and execution",
      "Market repositioning recommendations",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-50 pt-16">
        <div className="container-wide section-padding !pb-16 !pt-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
              Our Services
            </p>
            <h1 className="heading-1 mt-2">
              End-to-end investment{" "}
              <span className="text-teal-600">consultation</span>
            </h1>
            <p className="text-body mt-6">
              From initial market research to long-term portfolio optimization,
              we provide comprehensive guidance at every stage of your real
              estate investment journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="grid items-start gap-12 lg:grid-cols-2"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-600 text-sm font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h2 className="heading-2 mt-4">{service.title}</h2>
                  <p className="text-body mt-4">{service.description}</p>
                </div>
                <div className={`rounded-xl border border-slate-200 bg-slate-50 p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    What&apos;s included
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg
                          className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        <span className="text-sm text-slate-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
              Our Process
            </p>
            <h2 className="heading-2 mt-2">How we work with you</h2>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Discovery", desc: "We learn about your goals, finances, and risk appetite." },
              { step: "02", title: "Strategy", desc: "We build a custom investment plan with clear milestones." },
              { step: "03", title: "Execution", desc: "We guide you through sourcing, evaluation, and closing." },
              { step: "04", title: "Growth", desc: "We monitor performance and adjust for ongoing success." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-600 text-lg font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-teal-600">
        <div className="container-wide text-center">
          <h2 className="heading-2 !text-white">
            Let&apos;s discuss your investment goals
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-teal-100">
            Every great portfolio starts with a conversation. Book your free
            consultation today.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-teal-700 transition-all hover:bg-teal-50"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
