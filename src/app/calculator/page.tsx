"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

export default function CalculatorPage() {
  const [purchasePrice, setPurchasePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyRent, setMonthlyRent] = useState(2200);
  const [propertyTaxRate, setPropertyTaxRate] = useState(1.2);
  const [insurance, setInsurance] = useState(150);
  const [maintenance, setMaintenance] = useState(200);
  const [vacancy, setVacancy] = useState(5);
  const [appreciation, setAppreciation] = useState(3);

  const results = useMemo(() => {
    const downPaymentAmount = purchasePrice * (downPayment / 100);
    const loanAmount = purchasePrice - downPaymentAmount;
    const monthlyRate = interestRate / 100 / 12;
    const totalPayments = loanTerm * 12;

    // Monthly mortgage payment
    const monthlyMortgage =
      monthlyRate > 0
        ? (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments))) /
          (Math.pow(1 + monthlyRate, totalPayments) - 1)
        : loanAmount / totalPayments;

    // Monthly expenses
    const monthlyPropertyTax = (purchasePrice * (propertyTaxRate / 100)) / 12;
    const vacancyLoss = monthlyRent * (vacancy / 100);
    const effectiveRent = monthlyRent - vacancyLoss;
    const totalMonthlyExpenses = monthlyMortgage + monthlyPropertyTax + insurance + maintenance;

    // Cash flow
    const monthlyCashFlow = effectiveRent - totalMonthlyExpenses;
    const annualCashFlow = monthlyCashFlow * 12;

    // Returns
    const annualNOI = effectiveRent * 12 - (monthlyPropertyTax + insurance + maintenance) * 12;
    const capRate = (annualNOI / purchasePrice) * 100;
    const cashOnCashReturn = (annualCashFlow / downPaymentAmount) * 100;

    // 5-year projection
    const year5Value = purchasePrice * Math.pow(1 + appreciation / 100, 5);
    const totalEquityGain = year5Value - purchasePrice;
    const totalCashFlow5yr = annualCashFlow * 5;
    const totalReturn5yr = totalEquityGain + totalCashFlow5yr;
    const roi5yr = (totalReturn5yr / downPaymentAmount) * 100;

    return {
      downPaymentAmount,
      loanAmount,
      monthlyMortgage,
      monthlyPropertyTax,
      totalMonthlyExpenses,
      effectiveRent,
      monthlyCashFlow,
      annualCashFlow,
      capRate,
      cashOnCashReturn,
      year5Value,
      totalEquityGain,
      totalCashFlow5yr,
      totalReturn5yr,
      roi5yr,
    };
  }, [purchasePrice, downPayment, interestRate, loanTerm, monthlyRent, propertyTaxRate, insurance, maintenance, vacancy, appreciation]);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);

  const formatPercent = (value: number) => `${value.toFixed(1)}%`;

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-50 pt-16">
        <div className="container-wide section-padding !pb-16 !pt-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
              ROI Calculator
            </p>
            <h1 className="heading-1 mt-2">
              Estimate your{" "}
              <span className="text-teal-600">investment returns</span>
            </h1>
            <p className="text-body mt-6">
              Use our interactive calculator to model potential returns on a
              real estate investment. Adjust the inputs to match your scenario
              and see projected cash flow, cap rate, and 5-year ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Inputs */}
            <div className="space-y-8 lg:col-span-3">
              {/* Purchase & Financing */}
              <div>
                <h2 className="heading-3">Purchase & Financing</h2>
                <div className="mt-4 grid gap-6 sm:grid-cols-2">
                  <InputSlider label="Purchase Price" value={purchasePrice} onChange={setPurchasePrice} min={50000} max={2000000} step={10000} format="currency" />
                  <InputSlider label="Down Payment" value={downPayment} onChange={setDownPayment} min={5} max={100} step={1} format="percent" />
                  <InputSlider label="Interest Rate" value={interestRate} onChange={setInterestRate} min={0} max={15} step={0.1} format="percent" />
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Loan Term</label>
                    <select
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(Number(e.target.value))}
                      className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                    >
                      <option value={15}>15 years</option>
                      <option value={20}>20 years</option>
                      <option value={25}>25 years</option>
                      <option value={30}>30 years</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Income */}
              <div>
                <h2 className="heading-3">Rental Income</h2>
                <div className="mt-4 grid gap-6 sm:grid-cols-2">
                  <InputSlider label="Monthly Rent" value={monthlyRent} onChange={setMonthlyRent} min={500} max={10000} step={50} format="currency" />
                  <InputSlider label="Vacancy Rate" value={vacancy} onChange={setVacancy} min={0} max={20} step={1} format="percent" />
                </div>
              </div>

              {/* Expenses */}
              <div>
                <h2 className="heading-3">Expenses</h2>
                <div className="mt-4 grid gap-6 sm:grid-cols-2">
                  <InputSlider label="Property Tax Rate" value={propertyTaxRate} onChange={setPropertyTaxRate} min={0} max={5} step={0.1} format="percent" />
                  <InputSlider label="Monthly Insurance" value={insurance} onChange={setInsurance} min={0} max={1000} step={25} format="currency" />
                  <InputSlider label="Monthly Maintenance" value={maintenance} onChange={setMaintenance} min={0} max={1000} step={25} format="currency" />
                  <InputSlider label="Annual Appreciation" value={appreciation} onChange={setAppreciation} min={0} max={15} step={0.5} format="percent" />
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-2">
              <div className="sticky top-20 space-y-6">
                {/* Monthly summary */}
                <div className="rounded-xl border border-slate-200 p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Monthly Summary
                  </h3>
                  <div className="mt-4 space-y-3">
                    <ResultRow label="Effective Rent" value={formatCurrency(results.effectiveRent)} />
                    <ResultRow label="Mortgage Payment" value={`-${formatCurrency(results.monthlyMortgage)}`} />
                    <ResultRow label="Property Tax" value={`-${formatCurrency(results.monthlyPropertyTax)}`} />
                    <ResultRow label="Insurance" value={`-${formatCurrency(insurance)}`} />
                    <ResultRow label="Maintenance" value={`-${formatCurrency(maintenance)}`} />
                    <div className="border-t border-slate-200 pt-3">
                      <ResultRow
                        label="Monthly Cash Flow"
                        value={formatCurrency(results.monthlyCashFlow)}
                        highlight={results.monthlyCashFlow >= 0}
                        negative={results.monthlyCashFlow < 0}
                      />
                    </div>
                  </div>
                </div>

                {/* Key metrics */}
                <div className="rounded-xl bg-slate-900 p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                    Key Metrics
                  </h3>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <MetricCard label="Cap Rate" value={formatPercent(results.capRate)} />
                    <MetricCard label="Cash-on-Cash" value={formatPercent(results.cashOnCashReturn)} />
                    <MetricCard label="Annual Cash Flow" value={formatCurrency(results.annualCashFlow)} />
                    <MetricCard label="Down Payment" value={formatCurrency(results.downPaymentAmount)} />
                  </div>
                </div>

                {/* 5-year projection */}
                <div className="rounded-xl border border-teal-200 bg-teal-50 p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-700">
                    5-Year Projection
                  </h3>
                  <div className="mt-4 space-y-3">
                    <ResultRow label="Property Value" value={formatCurrency(results.year5Value)} />
                    <ResultRow label="Equity Gain" value={formatCurrency(results.totalEquityGain)} />
                    <ResultRow label="Total Cash Flow" value={formatCurrency(results.totalCashFlow5yr)} />
                    <div className="border-t border-teal-200 pt-3">
                      <ResultRow label="Total Return" value={formatCurrency(results.totalReturn5yr)} highlight />
                      <div className="mt-1">
                        <ResultRow label="ROI on Down Payment" value={formatPercent(results.roi5yr)} highlight />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Disclaimer */}
                <p className="text-xs text-slate-400">
                  This calculator provides estimates for educational purposes
                  only. Actual returns may vary. Consult with a professional
                  before making investment decisions.
                </p>

                <Link href="/contact" className="btn-primary w-full text-center">
                  Discuss This Scenario With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Helper Components ─────────────────────────────────────────────── */

function InputSlider({
  label,
  value,
  onChange,
  min,
  max,
  step,
  format,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  format: "currency" | "percent";
}) {
  const display =
    format === "currency"
      ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value)
      : `${value}%`;

  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-slate-700">{label}</label>
        <span className="text-sm font-semibold text-teal-600">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full accent-teal-600"
      />
    </div>
  );
}

function ResultRow({
  label,
  value,
  highlight,
  negative,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  negative?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-slate-500">{label}</span>
      <span
        className={`text-sm font-semibold ${
          negative
            ? "text-red-500"
            : highlight
            ? "text-teal-600"
            : "text-slate-900"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-slate-800 p-3 text-center">
      <p className="text-lg font-bold text-teal-400">{value}</p>
      <p className="mt-0.5 text-xs text-slate-400">{label}</p>
    </div>
  );
}
