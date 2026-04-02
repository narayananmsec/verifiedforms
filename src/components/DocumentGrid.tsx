import { useEffect, useState } from 'react';
import { FileText, TrendingUp, AlertCircle } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { Document } from '../types';

interface DocumentGridProps {
  searchQuery: string;
  selectedCategory: string;
  onDocumentClick: (document: Document) => void;
}

const MOCK_DOCUMENTS: Document[] = [
  {
    id: '1',
    title: 'Sale/Conveyance Deed',
    description: 'Legal document transferring property ownership from seller to buyer. Includes details about the property, parties involved, and terms and conditions of the sale.',
    category: 'Property Deeds',
    price: 9,
    razorpay_link: 'https://rzp.io/rzp/XHAn7GH',
    download_link: 'https://docs.google.com/document/d/1GAFf-rh38eqNIP75ezN1wU6CTPbT5ZIJ/edit',
    is_featured: true,
    download_count: 0,
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Agreement Relating to Deposit of Title Deeds',
    description: 'Agreement for depositing title deeds with a lender as security for a loan. Outlines terms under which title deeds are held and conditions for their return.',
    category: 'Mortgage Documents',
    price: 9,
    razorpay_link: 'https://rzp.io/rzp/KpqCRVuV',
    download_link: 'https://docs.google.com/document/d/1kyicJ9Fe3qYxfc62_qr4NhwSSK1XLWLt/edit',
    is_featured: true,
    download_count: 0,
    created_at: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Promissory Note',
    description: 'Written promise to pay a specified amount of money to a specified person at a specified date or on demand. Commonly used in financial transactions.',
    category: 'Legal Formats',
    price: 9,
    razorpay_link: 'https://rzp.io/rzp/dg3ZqQeA',
    download_link: 'https://docs.google.com/document/d/1P5asjfM8evtMl66ohG1xc9Hw_hDmgbHN/edit',
    is_featured: true,
    download_count: 0,
    created_at: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'Lease Deed',
    description: 'Legal agreement between landlord and tenant for rental of property. Specifies lease terms, rent amount, duration, and responsibilities of both parties.',
    category: 'Agreements',
    price: 9,
    razorpay_link: 'https://rzp.io/rzp/lYQ4FqKT',
    download_link: 'https://docs.google.com/document/d/1twhuvKE2XNGavJ50KEkQTlpofYgsypoR/edit',
    is_featured: true,
    download_count: 0,
    created_at: new Date().toISOString(),
  },
  {
    id: '5',
    title: 'Sale Agreement',
    description: 'Preliminary agreement between buyer and seller outlining terms and conditions of property sale, pending execution of the final sale deed.',
    category: 'Agreements',
    price: 9,
    razorpay_link: 'https://rzp.io/rzp/HMWDa2fT',
    download_link: 'https://docs.google.com/document/d/19ndwcCgkZb0NashNBoBCqiyq8h7WmbBn/edit',
    is_featured: true,
    download_count: 0,
    created_at: new Date().toISOString(),
  },
  {
    id: '6',
    title: 'Construction Agreement',
    description: 'Contract between property owner and builder detailing terms, conditions, and specifications for construction of a building or structure.',
    category: 'Agreements',
    price: 9,
    razorpay_link: 'https://rzp.io/rzp/96zfdSoO',
    download_link: 'https://docs.google.com/document/d/1qZmK82NqBopHrD8yO80Q78REQr-LRmTh/edit',
    is_featured: true,
    download_count: 0,
    created_at: new Date().toISOString(),
  },
  {
    id: '7',
    title: 'Gift Deed',
    description: 'Legal document used to voluntarily transfer ownership of property from one person to another without any exchange of money or consideration.',
    category: 'Property Deeds',
    price: 9,
    razorpay_link: 'https://rzp.io/rzp/SVRepr7b',
    download_link: 'https://docs.google.com/document/d/14xhfPrUqISWnt3AZIPJHbe7s-mIXh1jr/edit',
    is_featured: true,
    download_count: 0,
    created_at: new Date().toISOString(),
  },
  {
    id: '8',
    title: 'Applying for Encumbrance Certificate (EC)',
    description: 'Application for obtaining an Encumbrance Certificate or Certified Copy, which provides details of all registered transactions on a property.',
    category: 'CMDA Forms',
    price: 9,
    razorpay_link: 'https://rzp.io/rzp/pbTi2g0V',
    download_link: 'https://docs.google.com/document/d/1xGOJ4nn24476Q0a0x8AXJ20Ct9zAsZ89/edit',
    is_featured: true,
    download_count: 0,
    created_at: new Date().toISOString(),
  },
  {
    id: '9',
    title: 'Form A',
    description: 'Application for permission for subdivision, layout or reconstitution or amalgamation of land for building purposes, and for change of use of land.',
    category: 'CMDA Forms',
    price: 9,
    razorpay_link: 'https://rzp.io/rzp/LkRbz5t',
    download_link: 'https://drive.google.com/file/d/18FJCjfHVFmGITRQFh5CEb98KUYVYaiX3/view',
    is_featured: true,
    download_count: 0,
    created_at: new Date().toISOString(),
  },
  {
    id: '10',
    title: 'Form B',
    description: 'Application for permission for carrying out construction of building or structure, or change of use of building.',
    category: 'CMDA Forms',
    price: 9,
    razorpay_link: 'https://rzp.io/rzp/edsuohXy',
    download_link: 'https://drive.google.com/file/d/1cR6Lby_rOOsCls0EogUntU3EKbUxIY2Q/view',
    is_featured: true,
    download_count: 0,
    created_at: new Date().toISOString(),
  },
];

export default function DocumentGrid({ searchQuery, selectedCategory, onDocumentClick }: DocumentGridProps) {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [featuredDocs, setFeaturedDocs] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchDocuments();
  }, []);

  async function fetchDocuments() {
    setLoading(true);
    setError(null);

    if (!isSupabaseConfigured) {
      setDocuments(MOCK_DOCUMENTS);
      setFeaturedDocs(MOCK_DOCUMENTS.filter((doc) => doc.is_featured));
      setLoading(false);
      return;
    }

    if (!supabase) {
      setError('Database configuration error');
      setDocuments(MOCK_DOCUMENTS);
      setFeaturedDocs(MOCK_DOCUMENTS.filter((doc) => doc.is_featured));
      setLoading(false);
      return;
    }

    try {
      const { data, error: fetchError } = await supabase
        .from('documents')
        .select('*')
        .order('created_at', { ascending: true });

      if (fetchError) {
        console.error('Error fetching documents:', fetchError);
        setDocuments(MOCK_DOCUMENTS);
        setFeaturedDocs(MOCK_DOCUMENTS.filter((doc) => doc.is_featured));
      } else if (data) {
        setDocuments(data);
        setFeaturedDocs(data.filter((doc) => doc.is_featured));
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setDocuments(MOCK_DOCUMENTS);
      setFeaturedDocs(MOCK_DOCUMENTS.filter((doc) => doc.is_featured));
    }

    setLoading(false);
  }

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch =
      searchQuery === '' ||
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase());
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
            <p className="text-gray-600">No documents found matching your search.</p>
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
        {document.title}
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
