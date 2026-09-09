import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { BarChart3, RotateCcw } from 'lucide-react';
import Footer from '../components/Footer';

function parseAmount(value: string): number {
  const amount = Number(value);
  return Number.isFinite(amount) && amount >= 0 ? amount : 0;
}

function formatINR(value: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2,
  }).format(value);
}

export default function EbitdaCalculatorPage() {
  const [revenue, setRevenue] = useState('');
  const [costOfGoodsSold, setCostOfGoodsSold] = useState('');
  const [operatingExpenses, setOperatingExpenses] = useState('');

  const result = useMemo(() => {
    const revenueValue = parseAmount(revenue);
    const cogsValue = parseAmount(costOfGoodsSold);
    const operatingExpensesValue = parseAmount(operatingExpenses);
    const ebitda = revenueValue - cogsValue - operatingExpensesValue;
    const margin = revenueValue > 0 ? (ebitda / revenueValue) * 100 : 0;
    const hasValue = [revenue, costOfGoodsSold, operatingExpenses].some((value) => value.trim() !== '');

    return { revenueValue, cogsValue, operatingExpensesValue, ebitda, margin, hasValue };
  }, [revenue, costOfGoodsSold, operatingExpenses]);

  function resetCalculator() {
    setRevenue('');
    setCostOfGoodsSold('');
    setOperatingExpenses('');
  }

  return (
    <>
      <Helmet>
        <title>EBITDA Calculator | Instantly Calculate Your Business&apos;s Performance | ServiceLocal</title>
        <meta
          name="description"
          content="Use our free EBITDA Calculator to instantly calculate EBITDA and EBITDA margin from your revenue, cost of goods sold and operating expenses."
        />
      </Helmet>

      <main className="bg-gradient-to-br from-slate-50 via-white to-emerald-50 px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 mb-4">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              EBITDA Calculator
            </h1>
            <p className="mt-2 text-lg font-medium text-slate-700">
              Instantly Calculate Your Business&apos;s Performance
            </p>
            <p className="mt-2 max-w-2xl mx-auto text-slate-600">
              Enter your revenue, cost of goods sold and operating expenses to calculate EBITDA and EBITDA margin instantly.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label htmlFor="ebitda-revenue" className="block text-sm font-medium text-slate-700 mb-2">
                  Revenue (₹)
                </label>
                <input
                  id="ebitda-revenue"
                  type="number"
                  min="0"
                  step="0.01"
                  inputMode="decimal"
                  value={revenue}
                  onChange={(event) => setRevenue(event.target.value)}
                  placeholder="e.g. 10000000"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label htmlFor="ebitda-cogs" className="block text-sm font-medium text-slate-700 mb-2">
                  Cost of Goods Sold (₹)
                </label>
                <input
                  id="ebitda-cogs"
                  type="number"
                  min="0"
                  step="0.01"
                  inputMode="decimal"
                  value={costOfGoodsSold}
                  onChange={(event) => setCostOfGoodsSold(event.target.value)}
                  placeholder="e.g. 4000000"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label htmlFor="ebitda-opex" className="block text-sm font-medium text-slate-700 mb-2">
                  Operating Expenses (₹)
                </label>
                <input
                  id="ebitda-opex"
                  type="number"
                  min="0"
                  step="0.01"
                  inputMode="decimal"
                  value={operatingExpenses}
                  onChange={(event) => setOperatingExpenses(event.target.value)}
                  placeholder="e.g. 2500000"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-5">
                <p className="text-sm text-slate-500">EBITDA</p>
                <p className={`mt-1 text-2xl font-bold ${result.ebitda >= 0 ? 'text-emerald-700' : 'text-red-600'}`}>
                  {result.hasValue ? formatINR(result.ebitda) : '—'}
                </p>
                <p className="mt-1 text-xs text-slate-500">Revenue − COGS − Operating Expenses</p>
              </div>

              <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
                <p className="text-sm text-slate-500">EBITDA Margin</p>
                <p className={`mt-1 text-2xl font-bold ${result.margin >= 0 ? 'text-slate-900' : 'text-red-600'}`}>
                  {result.hasValue ? `${result.margin.toFixed(2)}%` : '—'}
                </p>
                <p className="mt-1 text-xs text-slate-500">EBITDA ÷ Revenue × 100</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-slate-200 p-4">
                <p className="text-sm text-slate-500">Revenue</p>
                <p className="mt-1 font-semibold text-slate-900">{result.hasValue ? formatINR(result.revenueValue) : '—'}</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <p className="text-sm text-slate-500">COGS</p>
                <p className="mt-1 font-semibold text-slate-900">{result.hasValue ? formatINR(result.cogsValue) : '—'}</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <p className="text-sm text-slate-500">Operating Expenses</p>
                <p className="mt-1 font-semibold text-slate-900">{result.hasValue ? formatINR(result.operatingExpensesValue) : '—'}</p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={resetCalculator}
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-slate-300 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>
            </div>
          </div>

          <div className="mt-6 bg-white border border-slate-200 rounded-2xl shadow-sm p-5 md:p-6">
            <h2 className="text-xl font-bold text-slate-900">How to use the EBITDA Calculator</h2>
            <ol className="mt-3 list-decimal list-inside space-y-2 text-slate-600">
              <li>Enter your total revenue for the period.</li>
              <li>Enter the cost of goods sold (COGS).</li>
              <li>Enter operating expenses, excluding interest, taxes, depreciation and amortization.</li>
              <li>View EBITDA and EBITDA margin instantly.</li>
            </ol>
            <p className="mt-4 text-sm text-slate-500">
              EBITDA is a financial performance measure and is not a substitute for profit, cash flow or other accounting measures. Results are for informational purposes.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
