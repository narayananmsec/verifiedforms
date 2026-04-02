import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does the download process work?',
      answer: 'After clicking "Pay & Download", you will be redirected to Razorpay for secure payment. Once payment is completed, you will receive immediate access to download your document in editable format.',
    },
    {
      question: 'Are these documents legally valid?',
      answer: 'Yes, all our templates are verified and follow standard legal formats used in India. However, we recommend consulting with a legal professional for your specific case to ensure all requirements are met.',
    },
    {
      question: 'What is your refund policy?',
      answer: 'Due to the digital nature of our products, we do not offer refunds after the document has been downloaded. Please review the document description carefully before purchasing.',
    },
    {
      question: 'Can I use these documents for commercial purposes?',
      answer: 'Yes, once purchased, you can use these documents for personal or commercial purposes. You can modify them as needed for your specific requirements.',
    },
    {
      question: 'What if I face payment issues?',
      answer: 'If you encounter any payment issues, please contact us at help@servicelocal.in with your transaction details. We will resolve the issue within 24 hours.',
    },
    {
      question: 'What format are the documents in?',
      answer: 'All documents are provided in editable formats (Word/PDF) that you can easily customize according to your needs.',
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
