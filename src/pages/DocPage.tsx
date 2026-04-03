import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { documents } from '../data/documents';

export default function DocPage() {
  const { slug } = useParams();

  const doc = useMemo(() => documents.find((d) => d.slug === slug), [slug]);

  const keywords = useMemo(() => {
    if (!doc) return 'legal documents, ServiceLocal, download';
    return [doc.title, 'legal document', 'download', 'ServiceLocal', slug].filter(Boolean).join(', ');
  }, [doc, slug]);

  const expandedDescription = useMemo(() => {
    if (!doc) return '';
    const base = doc.description.trim();
    if (base.length >= 140) return base;
    return (
      base +
      ' This ready-to-use template is designed to help you structure the document clearly and cover the key legal points. You can edit the content to match your transaction details, parties, property information, and any specific clauses required for your case. After successful payment, you can download the document instantly and keep a clean, organized format for proper execution.'
    );
  }, [doc]);

  if (!doc) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 px-4 py-10 md:py-16">
        <div className="max-w-[800px] mx-auto bg-white rounded-2xl shadow-lg p-5 md:p-10">
        <Helmet>
          <title>Document Not Found | ServiceLocal</title>
          <meta name="description" content="The requested document page could not be found." />
          <meta name="keywords" content="document not found, ServiceLocal" />
        </Helmet>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Not Found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 px-4 py-10 md:py-16">
      <div className="max-w-[800px] mx-auto bg-white rounded-2xl shadow-lg p-5 md:p-10">
      <Helmet>
        <title>{doc.title} – Download @ ₹9 | ServiceLocal</title>
        <meta name="description" content={doc.description} />
        <meta name="keywords" content={keywords} />
      </Helmet>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{doc.title}</h1>
        <p className="text-gray-700 leading-relaxed mb-6">{expandedDescription}</p>

        <ul className="space-y-2 text-gray-700 mb-6">
          <li>✔ Instant download after payment</li>
          <li>✔ Editable format</li>
          <li>✔ Ready to use</li>
        </ul>

        <h2 className="text-3xl font-bold text-emerald-600 mb-5">₹9</h2>

        <a href={doc.paymentLink} target="_blank" rel="noopener noreferrer">
          <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-md hover:shadow-lg">
            Pay &amp; Download
          </button>
        </a>
      </div>
    </div>
  );
}

