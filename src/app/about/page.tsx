import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Miche Solutions",
  description:
    "Learn about Miche Solutions — our mission, values, and the team behind North America's trusted real estate investment consultancy.",
};

const values = [
  {
    title: "Integrity First",
    description:
      "We provide honest, unbiased advice. Our recommendations are always in your best interest, not ours.",
  },
  {
    title: "Data-Driven Decisions",
    description:
      "Every recommendation is backed by rigorous market analysis, financial modeling, and real-world validation.",
  },
  {
    title: "Client Partnership",
    description:
      "We see ourselves as long-term partners in your wealth-building journey, not just transaction advisors.",
  },
  {
    title: "Market Expertise",
    description:
      "Deep local knowledge across 35+ North American markets gives us an edge others simply can't match.",
  },
];

const team = [
  {
    name: "Michelle Mohan",
    role: "Founder & CEO",
    bio: "15+ years in commercial and residential real estate. Former VP at a leading North American REIT.",
  },
  {
    name: "James Okafor",
    role: "Head of Market Analysis",
    bio: "Data scientist turned real estate analyst. Specializes in predictive market modeling and risk assessment.",
  },
  {
    name: "Ana Martinez",
    role: "Senior Investment Strategist",
    bio: "10+ years in portfolio construction. Expert in multi-family and mixed-use investment strategies.",
  },
  {
    name: "David Kim",
    role: "Director of Client Relations",
    bio: "Dedicated to ensuring every client receives personalized attention and achieves their investment goals.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-50 pt-16">
        <div className="container-wide section-padding !pb-16 !pt-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
              About Miche Solutions
            </p>
            <h1 className="heading-1 mt-2">
              We help investors build wealth through{" "}
              <span className="text-teal-600">smart real estate</span>
            </h1>
            <p className="text-body mt-6">
              Founded on the belief that expert real estate guidance shouldn&apos;t
              be reserved for institutions, Miche Solutions makes professional
              investment consultation accessible to everyone — from first-time
              investors to seasoned portfolio managers.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="heading-2">Our Story</h2>
              <p className="text-body mt-4">
                Miche Solutions was born from a simple observation: too many
                potential investors were either priced out of professional
                advice or overwhelmed by conflicting information online.
              </p>
              <p className="text-body mt-4">
                Our founder, Michelle Mohan, spent over a decade in
                institutional real estate before realizing that the tools and
                strategies used by major REITs could be adapted for individual
                investors. In 2014, she launched Miche Solutions to bridge that
                gap.
              </p>
              <p className="text-body mt-4">
                Today, we&apos;ve helped hundreds of clients across North America
                build diversified real estate portfolios that generate lasting
                wealth. Our approach combines institutional-grade analysis with
                personalized service.
              </p>
            </div>
           {/*  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-teal-50 to-slate-100 p-8">
              <div className="flex h-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 text-center">
                <svg className="h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
                <p className="mt-3 text-sm font-medium text-slate-500">
                  Add your team photo here
                </p>
              </div> 
            </div>*/}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
              Our Values
            </p>
            <h2 className="heading-2 mt-2">What guides everything we do</h2>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-slate-200 bg-white p-8"
              >
                <h3 className="heading-3">{value.title}</h3>
                <p className="text-body mt-3">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
              Our Team
            </p>
            <h2 className="heading-2 mt-2">Meet the experts behind Miche</h2>
            <p className="text-body mx-auto mt-4 max-w-2xl">
              Our team combines decades of real estate experience with
              cutting-edge analytical capabilities.
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-teal-100 to-slate-200">
                  <span className="text-2xl font-bold text-teal-700">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-teal-600">
                  {member.role}
                </p>
                <p className="mt-2 text-sm text-slate-500">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-teal-600">
        <div className="container-wide text-center">
          <h2 className="heading-2 !text-white">
            Ready to work with us?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-teal-100">
            Schedule a free consultation to discuss your investment goals.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-teal-700 transition-all hover:bg-teal-50"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
