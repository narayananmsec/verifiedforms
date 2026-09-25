import { useState } from 'react';

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open: () => void };
  }
}

type CreateOrderResponse = {
  success: boolean;
  error?: string;
  key_id?: string;
  order_id?: string;
  amount?: number;
  currency?: string;
  document?: {
    id: number;
    title: string;
    price: number;
  };
};

type VerifyResponse = {
  success: boolean;
  error?: string;
  download_url?: string;
};

export default function PaymentTestPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function startPayment() {
    setLoading(true);
    setMessage('');

    try {
      if (!window.Razorpay) {
        throw new Error('Razorpay Checkout is still loading. Please refresh and try again.');
      }

      const response = await fetch('/api/create-order.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ document_id: 1 }),
      });

      const order: CreateOrderResponse = await response.json();

      if (!response.ok || !order.success || !order.key_id || !order.order_id || !order.amount || !order.currency) {
        throw new Error(order.error || 'Unable to create payment order.');
      }

      const razorpay = new window.Razorpay({
        key: order.key_id,
        amount: order.amount,
        currency: order.currency,
        name: 'ServiceLocal',
        description: order.document?.title || 'Document download',
        order_id: order.order_id,
        theme: {
          color: '#059669',
        },
        handler: async (payment: {
          razorpay_order_id: string;
          razorpay_payment_id: string;
          razorpay_signature: string;
        }) => {
          try {
            setMessage('Payment received. Verifying payment...');

            const verifyResponse = await fetch('/api/verify-payment.php', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payment),
            });

            const result: VerifyResponse = await verifyResponse.json();

            if (!verifyResponse.ok || !result.success || !result.download_url) {
              throw new Error(result.error || 'Payment verification failed.');
            }

            setMessage('Payment verified. Starting your download...');
            window.location.href = result.download_url;
          } catch (error) {
            setMessage(error instanceof Error ? error.message : 'Payment verification failed.');
          } finally {
            setLoading(false);
          }
        },
        modal: {
          ondismiss: () => {
            setLoading(false);
            setMessage('Payment window closed.');
          },
        },
      });

      razorpay.open();
    } catch (error) {
      setLoading(false);
      setMessage(error instanceof Error ? error.message : 'Unable to start payment.');
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <section className="w-full max-w-lg bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700 mb-2">
          Razorpay payment test
        </p>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          Test Company Registration Checklist
        </h1>
        <p className="text-gray-600 mb-6">
          This test uses the ₹9 document stored in the ServiceLocal MySQL database.
        </p>

        <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-5 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Test document</span>
            <span className="text-2xl font-bold text-emerald-700">₹9</span>
          </div>
        </div>

        <button
          type="button"
          onClick={startPayment}
          disabled={loading}
          className="w-full rounded-lg bg-emerald-600 text-white px-6 py-4 font-semibold hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? 'Processing...' : 'Pay ₹9 & Download'}
        </button>

        {message && (
          <p className="mt-5 text-sm text-gray-700 text-center" role="status">
            {message}
          </p>
        )}
      </section>
    </main>
  );
}
