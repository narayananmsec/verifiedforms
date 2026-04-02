import { useEffect, useState } from 'react';
import { FileText, TrendingUp } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Document } from '../types';

interface DocumentGridProps {
  searchQuery: string;
  selectedCategory: string;
  onDocumentClick: (document: Document) => void;
}

export default function DocumentGrid({ searchQuery, selectedCategory, onDocumentClick }: DocumentGridProps) {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [featuredDocs, setFeaturedDocs] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDocuments();
  }, []);

  async function fetchDocuments() {
    setLoading(true);
    const { data, error } = await supabase
      .from('documents')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Error fetching documents:', error);
    } else if (data) {
      setDocuments(data);
      setFeaturedDocs(data.filter((doc) => doc.is_featured));
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
