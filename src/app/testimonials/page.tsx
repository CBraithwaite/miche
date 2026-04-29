import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | Miche Solutions",
  description:
    "See what our clients say about working with Miche Solutions for their real estate investment needs.",
};

const testimonials = [
  {
    quote:
      "Miche Solutions transformed our approach to real estate investing. Their data-driven analysis helped us identify a portfolio that has consistently outperformed the market. We've seen an average 22% annual return since we started working with them.",
    name: "Sarah Chen",
    role: "Private Investor",
    location: "Toronto, ON",
    metric: "22% avg. annual return",
  },
  {
    quote:
      "The team's deep understanding of cross-border investment opportunities gave us the confidence to diversify beyond our home market. Their due diligence process caught issues that would have cost us hundreds of thousands.",
    name: "Marcus Rivera",
    role: "CEO, Pinnacle Holdings",
    location: "Miami, FL",
    metric: "$2.4M portfolio value",
  },
  {
    quote:
      "From our first consultation to closing on our fifth property, Miche has been an invaluable partner. Their knowledge of emerging markets in the Southeast US helped us build a cash-flowing portfolio from scratch.",
    name: "Emily & David Park",
    role: "Real Estate Investors",
    location: "Vancouver, BC",
    metric: "5 properties in 3 years",
  },
  {
    quote:
      "As a first-time investor, I was overwhelmed by the options. Miche broke everything down in a way that made sense, created a clear strategy, and walked me through every step. I now own two rental properties generating positive cash flow.",
    name: "Aisha Johnson",
    role: "Software Engineer & Investor",
    location: "Austin, TX",
    metric: "$3,200/mo cash flow",
  },
  {
    quote:
      "We engaged Miche to help restructure our commercial real estate holdings for better tax efficiency. Their recommendations, combined with their network of specialists, saved us over $180K in the first year alone.",
    name: "Robert and Linda Torres",
    role: "Commercial Property Owners",
    location: "Chicago, IL",
    metric: "$180K tax savings",
  },
  {
    quote:
      "The ROI calculator on their website originally drew me in, but the personalized consultation is what sealed the deal. Miche's team is knowledgeable, responsive, and genuinely invested in their clients' success.",
    name: "Kevin Osei",
    role: "Dentist & Investor",
    location: "Atlanta, GA",
    metric: "3 properties acquired",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-50 pt-16">
        <div className="container-wide section-padding !pb-16 !pt-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
              Testimonials
            </p>
            <h1 className="heading-1 mt-2">
              Real results from{" "}
              <span className="text-teal-600">real investors</span>
            </h1>
            <p className="text-body mt-6">
              Don&apos;t just take our word for it — hear from clients across
              North America who have built wealth with our guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col rounded-xl border border-slate-200 p-6 transition-all hover:shadow-lg"
              >
                {/* Metric badge */}
                <div className="inline-flex self-start rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
                  {t.metric}
                </div>

                <svg className="mt-4 h-7 w-7 text-teal-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {t.quote}
                </p>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-sm font-semibold text-slate-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-500">
                    {t.role} — {t.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-teal-600">
        <div className="container-wide text-center">
          <h2 className="heading-2 !text-white">
            Ready to write your own success story?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-teal-100">
            Join hundreds of satisfied investors. Start with a free
            consultation.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-teal-700 transition-all hover:bg-teal-50"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
