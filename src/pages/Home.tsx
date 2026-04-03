import { useState } from 'react';
import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';
import Categories from '../components/Categories';
import DocumentGrid from '../components/DocumentGrid';
import Footer from '../components/Footer';
import DocumentModal from '../components/DocumentModal';
import { Document } from '../types';
import { useHomeSearch } from '../context/HomeSearchContext';

export default function Home() {
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const { searchQuery } = useHomeSearch();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  return (
    <div className="min-h-screen bg-white">
      <Hero onBrowseClick={() => document.getElementById('documents')?.scrollIntoView({ behavior: 'smooth' })} />
      <TrustSection />
      <Categories selectedCategory={selectedCategory} onCategorySelect={setSelectedCategory} />
      <div id="documents">
        <DocumentGrid
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          onDocumentClick={setSelectedDocument}
        />
      </div>
      <Footer />
      {selectedDocument && (
        <DocumentModal document={selectedDocument} onClose={() => setSelectedDocument(null)} />
      )}
    </div>
  );
}
