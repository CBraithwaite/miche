import Link from "next/link";

const services = [
  {
    title: "Market Analysis",
    description:
      "Data-driven insights into North American real estate markets, identifying high-growth opportunities before they become mainstream.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Portfolio Strategy",
    description:
      "Personalized investment strategies tailored to your financial goals, risk tolerance, and timeline for building lasting wealth.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: "Due Diligence",
    description:
      "Comprehensive property evaluation covering financials, legal compliance, structural integrity, and neighborhood dynamics.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Wealth Planning",
    description:
      "Long-term wealth creation through real estate, integrating tax optimization, cash flow management, and exit strategies.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
  },
];

const stats = [
  { label: "Properties Evaluated", value: "500+" },
  { label: "Client ROI (avg)", value: "18.5%" },
  { label: "Markets Covered", value: "35+" },
  { label: "Years of Experience", value: "12+" },
];

const testimonials = [
  {
    quote:
      "Miche Solutions transformed our approach to real estate investing. Their data-driven analysis helped us identify a portfolio that has consistently outperformed the market.",
    name: "Sarah Chen",
    role: "Private Investor, Toronto",
  },
  {
    quote:
      "The team's deep understanding of cross-border investment opportunities in North America gave us the confidence to diversify beyond our home market.",
    name: "Marcus Rivera",
    role: "CEO, Pinnacle Holdings",
  },
  {
    quote:
      "From our first consultation to closing on our fifth property, Miche has been an invaluable partner. Their due diligence process is second to none.",
    name: "Emily & David Park",
    role: "Real Estate Investors, Vancouver",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900/40" />
        <div className="container-wide relative section-padding !pb-24 !pt-24 sm:!pt-32">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-teal-400">
              Real Estate Investment Consultation
            </p>
            <h1 className="heading-1 !text-white">
              Build lasting wealth through{" "}
              <span className="text-teal-400">strategic real estate</span>{" "}
              investments
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
              Miche Solutions provides expert consultation for investors across
              North America. We combine deep market knowledge with data-driven
              strategies to help you make confident investment decisions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary !px-8 !py-4 text-base">
                Book a Free Consultation
              </Link>
              <Link href="/calculator" className="btn-secondary !border-slate-600 !bg-transparent !px-8 !py-4 text-base !text-white hover:!bg-slate-800">
                Try Our ROI Calculator
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 text-center backdrop-blur-sm">
                <p className="text-3xl font-bold text-teal-400">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
              What We Offer
            </p>
            <h2 className="heading-2 mt-2">Comprehensive Investment Services</h2>
            <p className="text-body mx-auto mt-4 max-w-2xl">
              From initial market research to long-term portfolio management, we
              guide you through every step of the investment journey.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-xl border border-slate-200 p-6 transition-all duration-200 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-100">
                  {service.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
                Why Miche Solutions
              </p>
              <h2 className="heading-2 mt-2">
                Your trusted partner in real estate investment
              </h2>
              <p className="text-body mt-4">
                With over a decade of experience across North American markets,
                our team of seasoned analysts and investment strategists brings
                a unique blend of local expertise and continental perspective.
              </p>
              <p className="text-body mt-4">
                We believe that smart real estate investment should be accessible
                to everyone — from first-time investors to institutional funds.
                Our consultative approach ensures every recommendation is
                tailored to your specific goals.
              </p>
              <Link href="/about" className="btn-primary mt-6">
                Learn More About Us
              </Link>
            </div>
            <div className="relative">
             {/* <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-200 to-teal-100 p-8">
                 <div className="flex h-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 text-center">
                  <svg className="h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
                  </svg>
                  <p className="mt-3 text-sm font-medium text-slate-500">
                    Add your team or office image here
                  </p>
                </div> 
              </div>*/}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
              Client Stories
            </p>
            <h2 className="heading-2 mt-2">Trusted by Investors Across North America</h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col rounded-xl border border-slate-200 p-6"
              >
                <svg className="h-8 w-8 text-teal-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                  {t.quote}
                </p>
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/testimonials" className="btn-secondary">
              Read More Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-slate-900">
        <div className="container-wide text-center">
          <h2 className="heading-2 !text-white">
            Stay ahead of the market
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Subscribe to our newsletter for weekly market analysis, investment
            tips, and exclusive property opportunities across North America.
          </p>
          <form className="mx-auto mt-8 flex max-w-md gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-xs text-slate-500">
            No spam. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-teal-600">
        <div className="container-wide text-center">
          <h2 className="heading-2 !text-white">
            Ready to start your investment journey?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-teal-100">
            Book a free 30-minute consultation with one of our investment
            strategists. No obligations — just expert guidance.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-teal-700 transition-all duration-200 hover:bg-teal-50"
          >
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
