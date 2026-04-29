import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Miche Solutions",
  description:
    "Market insights, investment tips, and real estate trends from the Miche Solutions team.",
};

const posts = [
  {
    slug: "top-5-markets-2026",
    title: "Top 5 North American Markets to Watch in 2026",
    excerpt:
      "Our annual market outlook breaks down the metro areas showing the strongest fundamentals for real estate investment this year.",
    category: "Market Analysis",
    date: "April 15, 2026",
    readTime: "8 min read",
  },
  {
    slug: "first-investment-property-guide",
    title: "A Complete Guide to Buying Your First Investment Property",
    excerpt:
      "Everything you need to know before making your first real estate investment — from financing options to due diligence essentials.",
    category: "Getting Started",
    date: "April 2, 2026",
    readTime: "12 min read",
  },
  {
    slug: "1031-exchange-explained",
    title: "1031 Exchanges Explained: Defer Taxes and Grow Your Portfolio",
    excerpt:
      "A clear, practical guide to using 1031 exchanges to defer capital gains taxes and accelerate your portfolio growth.",
    category: "Tax Strategy",
    date: "March 20, 2026",
    readTime: "6 min read",
  },
  {
    slug: "multifamily-vs-single-family",
    title: "Multi-Family vs. Single-Family: Which Strategy Is Right for You?",
    excerpt:
      "We compare the pros, cons, and financial profiles of multi-family and single-family investment strategies.",
    category: "Strategy",
    date: "March 8, 2026",
    readTime: "10 min read",
  },
  {
    slug: "remote-work-real-estate-impact",
    title: "How Remote Work Is Reshaping Real Estate Markets",
    excerpt:
      "The shift to remote and hybrid work continues to create opportunities in secondary and tertiary markets across North America.",
    category: "Trends",
    date: "February 22, 2026",
    readTime: "7 min read",
  },
  {
    slug: "cap-rate-explained",
    title: "Understanding Cap Rates: What Every Investor Should Know",
    excerpt:
      "Cap rates are one of the most important metrics in real estate investing. Here's how to use them effectively in your analysis.",
    category: "Education",
    date: "February 10, 2026",
    readTime: "5 min read",
  },
];

const categories = [
  "All",
  "Market Analysis",
  "Getting Started",
  "Tax Strategy",
  "Strategy",
  "Trends",
  "Education",
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-50 pt-16">
        <div className="container-wide section-padding !pb-16 !pt-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
              Blog & Insights
            </p>
            <h1 className="heading-1 mt-2">
              Market intelligence &{" "}
              <span className="text-teal-600">investment insights</span>
            </h1>
            <p className="text-body mt-6">
              Stay informed with the latest real estate market trends,
              investment strategies, and expert analysis from our team.
            </p>
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section className="border-b border-slate-200 bg-white">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  cat === "All"
                    ? "bg-teal-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-xl border border-slate-200 transition-all hover:shadow-lg"
              >
                {/* Image placeholder */}
                <div className="aspect-[16/9] rounded-t-xl bg-gradient-to-br from-slate-100 to-teal-50">
                  <div className="flex h-full items-center justify-center">
                    <svg className="h-10 w-10 text-slate-300" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H3.75A2.25 2.25 0 001.5 6.75v11.25c0 1.242 1.008 2.25 2.25 2.25z" />
                    </svg>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="rounded-full bg-teal-50 px-2.5 py-0.5 font-medium text-teal-700">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-teal-600 transition-colors">
                    {post.title}
                  </h2>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                    {post.excerpt}
                  </p>

                  <div className="mt-4">
                    <span className="text-sm font-medium text-teal-600 group-hover:underline">
                      Read more &rarr;
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-slate-900">
        <div className="container-wide text-center">
          <h2 className="heading-2 !text-white">
            Never miss an insight
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Get our latest market analysis and investment tips delivered
            straight to your inbox every week.
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
        </div>
      </section>
    </>
  );
}
