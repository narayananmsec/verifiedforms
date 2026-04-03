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
      <div style={{ maxWidth: '700px', margin: 'auto', padding: '40px' }}>
        <Helmet>
          <title>Document Not Found | ServiceLocal</title>
          <meta name="description" content="The requested document page could not be found." />
          <meta name="keywords" content="document not found, ServiceLocal" />
        </Helmet>
        <h1>Not Found</h1>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '700px', margin: 'auto', padding: '40px' }}>
      <Helmet>
        <title>{doc.title} – Download @ ₹9 | ServiceLocal</title>
        <meta name="description" content={doc.description} />
        <meta name="keywords" content={keywords} />
      </Helmet>

      <h1>{doc.title}</h1>
      <p>{expandedDescription}</p>

      <ul>
        <li>✔ Instant download after payment</li>
        <li>✔ Editable format</li>
        <li>✔ Ready to use</li>
      </ul>

      <h2>₹9</h2>

      <a href={doc.paymentLink} target="_blank" rel="noopener noreferrer">
        <button
          style={{
            padding: '12px 20px',
            background: 'green',
            color: '#fff',
            cursor: 'pointer'
          }}
        >
          Pay &amp; Download
        </button>
      </a>
    </div>
  );
}

