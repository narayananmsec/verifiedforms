import { useEffect, useState } from 'react';
import { FileText, TrendingUp } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { Document } from '../types';
import { documents as seoDocuments } from '../data/documents';
import type { DocumentData } from '../data/documents';

interface DocumentGridProps {
  searchQuery: string;
  selectedCategory: string;
  onDocumentClick: (document: Document) => void;
}

const MOCK_DOCUMENTS: Document[] = seoDocuments.map((doc, idx) => ({
  id: String(idx + 1),
  slug: doc.slug,
  title: doc.title,
  description: doc.description,
  category: doc.category ?? 'Legal Templates',
  price: doc.price ?? 9,
  razorpay_link: doc.paymentLink,
  download_link: '', // Razorpay-only downloads; keep placeholder to satisfy the Document type.
  is_featured: true,
  download_count: 0,
  created_at: new Date().toISOString(),
}));

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function DocumentGrid({ searchQuery, selectedCategory, onDocumentClick }: DocumentGridProps) {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [featuredDocs, setFeaturedDocs] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  useEffect(() => {
    fetchDocuments();
  }, []);

  useEffect(() => {
    // Keep UI responsive and treat "  " as empty input.
    const normalized = searchQuery.trim();
    setSearchTerm(normalized);
  }, [searchQuery]);

  useEffect(() => {
    const t = window.setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);
    return () => window.clearTimeout(t);
  }, [searchTerm]);

  async function fetchDocuments() {
    setLoading(true);
    if (!isSupabaseConfigured || !supabase) {
      setDocuments(MOCK_DOCUMENTS);
      setFeaturedDocs(MOCK_DOCUMENTS.filter((doc) => doc.is_featured));
      setLoading(false);
      return;
    }

    try {
      const { data } = await supabase.from('documents').select('*').order('created_at', { ascending: true });

      if (data) {
        setDocuments(data as Document[]);
        setFeaturedDocs((data as Document[]).filter((doc) => doc.is_featured));
      } else {
        setDocuments(MOCK_DOCUMENTS);
        setFeaturedDocs(MOCK_DOCUMENTS.filter((doc) => doc.is_featured));
      }
    } catch (err) {
      console.error('Error fetching documents:', err);
      setDocuments(MOCK_DOCUMENTS);
      setFeaturedDocs(MOCK_DOCUMENTS.filter((doc) => doc.is_featured));
    } finally {
      setLoading(false);
    }
  }

  const filteredDocuments = documents.filter((doc) => {
    const term = debouncedSearchTerm.trim().toLowerCase();
    const title = (doc.title ?? '').toLowerCase();
    const matchesSearch = term === '' || title.includes(term);
    const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
          <p className="mt-4 text-gray-600">Loading documents...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {searchQuery === '' && selectedCategory === 'All' && featuredDocs.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center space-x-2 mb-6">
              <TrendingUp className="h-6 w-6 text-emerald-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Most Downloaded Documents
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredDocs.map((doc) => (
                <DocumentCard key={doc.id} document={doc} onClick={() => onDocumentClick(doc)} />
              ))}
            </div>
          </div>
        )}

        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {selectedCategory === 'All' ? 'All Documents' : selectedCategory}
          </h2>
          <p className="text-gray-600 mt-2">
            {filteredDocuments.length} {filteredDocuments.length === 1 ? 'document' : 'documents'} available
          </p>
        </div>

        {filteredDocuments.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600">No documents found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocuments.map((doc) => (
              <DocumentCard key={doc.id} document={doc} onClick={() => onDocumentClick(doc)} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function DocumentCard({ document, onClick }: { document: Document; onClick: () => void }) {
  // Prefer the SEO dataset slug so deep-links match the corresponding /docs/:slug page.
  const seoDoc: DocumentData | undefined =
    seoDocuments.find((d) => d.paymentLink === document.razorpay_link) ??
    seoDocuments.find((d) => d.slug === document.slug) ??
    seoDocuments.find((d) => d.title === document.title);

  const cardSlug = seoDoc?.slug ?? document.slug ?? slugify(document.title);
  return (
    <div
      onClick={onClick}
      className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-emerald-300 transition-all cursor-pointer group"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="bg-emerald-100 text-emerald-600 p-2 rounded-lg">
          <FileText className="h-6 w-6" />
        </div>
        <span className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium">
          {document.category}
        </span>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
        <a
          href={`/docs/${cardSlug}`}
          onClick={(e) => e.stopPropagation()}
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          {document.title}
        </a>
      </h3>
      <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
        {document.description}
      </p>
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-2xl font-bold text-emerald-600">₹{document.price}</span>
        <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors text-sm">
          Download Now
        </button>
      </div>
    </div>
  );
}
