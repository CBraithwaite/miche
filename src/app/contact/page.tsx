"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const contactInfo = [
  {
    title: "Email Us",
    detail: "info@michesolutions.com",
    description: "For general inquiries and partnership opportunities.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: "Call Us",
    detail: "+1 (862) 264-5850",
    description: "Monday — Friday, 9AM — 6PM EST.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    title: "Visit Us",
    detail: "New York, NY",
    description: "By appointment only.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-50 pt-16">
        <div className="container-wide section-padding !pb-16 !pt-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
              Get in Touch
            </p>
            <h1 className="heading-1 mt-2">
              Let&apos;s start a <span className="text-teal-600">conversation</span>
            </h1>
            <p className="text-body mt-6">
              Whether you&apos;re ready to invest or just exploring your options,
              we&apos;re here to help. Book a free consultation or send us a
              message below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact form & info */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="heading-3">Send us a message</h2>
              <p className="text-body mt-2">
                Fill out the form and we&apos;ll get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-xl border border-teal-200 bg-teal-50 p-8 text-center">
                  <svg className="mx-auto h-12 w-12 text-teal-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    Message sent!
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Thank you for reaching out. We&apos;ll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-700">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-700">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-slate-700">
                      What are you interested in?
                    </label>
                    <select
                      id="interest"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                    >
                      <option value="">Select an option</option>
                      <option>First-time investing</option>
                      <option>Portfolio expansion</option>
                      <option>Market analysis</option>
                      <option>Property due diligence</option>
                      <option>Wealth planning</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                      placeholder="Tell us about your investment goals..."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-200 p-6"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                      {item.icon}
                    </div>
                    <h3 className="mt-3 text-sm font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-teal-600">
                      {item.detail}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {item.description}
                    </p>
                  </div>
                ))}

                {/* Book consultation card */}
                <div className="rounded-xl bg-slate-900 p-6 text-center">
                  <h3 className="text-lg font-semibold text-white">
                    Prefer to talk live?
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Book a free 30-minute consultation call with one of our
                    investment strategists.
                  </p>
                  <button className="mt-4 inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-teal-700">
                    Schedule a Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
