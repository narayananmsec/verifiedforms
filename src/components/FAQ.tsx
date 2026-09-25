import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How does the download process work?',
      answer: 'After the payment system is available, you will be guided through the payment process and given access to the purchased document according to the selected product.',
    },
    {
      question: 'Are these documents legally valid?',
      answer: 'Our documents are provided for informational and document preparation purposes. Requirements can vary by document, state and situation, so check the latest applicable rules before filing.',
    },
    {
      question: 'What is your refund policy?',
      answer: 'Due to the digital nature of our products, we do not offer refunds after the document has been downloaded. Please review the document description carefully before purchasing.',
    },
    {
      question: 'Can I use these documents for commercial purposes?',
      answer: 'Usage rights depend on the individual product and its stated terms. Check the product description before purchasing.',
    },
    {
      question: 'What if I face payment issues?',
      answer: 'If you experience a payment or download problem, contact us at help@servicelocal.in with the relevant transaction or order details.',
    },
    {
      question: 'What format are the documents in?',
      answer: 'The available format is shown on each document page. Depending on the product, a document may be provided as PDF, Word or another specified format.',
    },
  ];

  return (
    <section id="faq-section" className="py-16 px-4 bg-gray-50">
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
