import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Calculator, RotateCcw } from 'lucide-react';
import Footer from '../components/Footer';

const GST_RATES = [5, 12, 18, 28];

type CalculationMode = 'add' | 'remove';

function formatINR(value: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0);
}

export default function GstCalculatorPage() {
  const [amount, setAmount] = useState('');
  const [gstRate, setGstRate] = useState(18);
  const [mode, setMode] = useState<CalculationMode>('add');

  const result = useMemo(() => {
    const input = Number(amount);
    if (!Number.isFinite(input) || input < 0) {
      return { taxableAmount: 0, gstAmount: 0, totalAmount: 0, hasValue: false };
    }

    if (mode === 'add') {
      const gstAmount = (input * gstRate) / 100;
      return {
        taxableAmount: input,
        gstAmount,
        totalAmount: input + gstAmount,
        hasValue: amount.trim() !== '',
      };
    }

    const taxableAmount = input / (1 + gstRate / 100);
    const gstAmount = input - taxableAmount;
    return {
      taxableAmount,
      gstAmount,
      totalAmount: input,
      hasValue: amount.trim() !== '',
    };
  }, [amount, gstRate, mode]);

  function resetCalculator() {
    setAmount('');
    setGstRate(18);
    setMode('add');
  }

  return (
    <>
      <main className="bg-gradient-to-br from-slate-50 via-white to-emerald-50 px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 mb-4">
              <Calculator className="w-6 h-6" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              GST Calculator: Online Indian GST Calculator
            </h1>
            <p className="mt-2 max-w-2xl mx-auto text-slate-600">
              Instantly calculate GST on any amount. Add GST to a price or remove GST from a GST-inclusive amount.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="gst-amount" className="block text-sm font-medium text-slate-700 mb-2">
                  Amount (₹)
                </label>
                <input
                  id="gst-amount"
                  type="number"
                  min="0"
                  step="0.01"
                  inputMode="decimal"
                  value={amount}
                  onChange={(event) => setAmount(event.target.value)}
                  placeholder="Enter amount"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label htmlFor="gst-rate" className="block text-sm font-medium text-slate-700 mb-2">
                  GST Rate
                </label>
                <select
                  id="gst-rate"
                  value={gstRate}
                  onChange={(event) => setGstRate(Number(event.target.value))}
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                >
                  {GST_RATES.map((rate) => (
                    <option key={rate} value={rate}>{rate}%</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6">
              <p className="block text-sm font-medium text-slate-700 mb-2">Calculation Type</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setMode('add')}
                  className={`rounded-lg border px-4 py-3 text-sm font-semibold transition-colors ${
                    mode === 'add'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                      : 'border-slate-300 bg-white text-slate-700 hover:border-emerald-300'
                  }`}
                >
                  Add GST
                  <span className="block text-xs font-normal mt-1 opacity-80">Calculate GST on a pre-tax amount</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMode('remove')}
                  className={`rounded-lg border px-4 py-3 text-sm font-semibold transition-colors ${
                    mode === 'remove'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                      : 'border-slate-300 bg-white text-slate-700 hover:border-emerald-300'
                  }`}
                >
                  Remove GST
                  <span className="block text-xs font-normal mt-1 opacity-80">Find the pre-tax amount from a GST-inclusive price</span>
                </button>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                <p className="text-sm text-slate-500">Taxable Amount</p>
                <p className="mt-1 text-lg font-bold text-slate-900">{result.hasValue ? formatINR(result.taxableAmount) : '—'}</p>
              </div>
              <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4">
                <p className="text-sm text-slate-500">GST Amount ({gstRate}%)</p>
                <p className="mt-1 text-lg font-bold text-emerald-700">{result.hasValue ? formatINR(result.gstAmount) : '—'}</p>
              </div>
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                <p className="text-sm text-slate-500">Total Amount</p>
                <p className="mt-1 text-lg font-bold text-slate-900">{result.hasValue ? formatINR(result.totalAmount) : '—'}</p>
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
            <h2 className="text-xl font-bold text-slate-900">How to use the GST Calculator</h2>
            <ol className="mt-3 list-decimal list-inside space-y-2 text-slate-600">
              <li>Enter the amount you want to calculate.</li>
              <li>Select the applicable GST rate: 5%, 12%, 18% or 28%.</li>
              <li>Choose <strong>Add GST</strong> for a pre-tax amount or <strong>Remove GST</strong> for a GST-inclusive amount.</li>
              <li>View the taxable amount, GST amount and final total instantly.</li>
            </ol>
            <p className="mt-4 text-sm text-slate-500">
              GST calculations are provided for convenience. Confirm the applicable GST rate and tax treatment for your specific transaction.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
