import { useState } from 'react';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import Categories from './components/Categories';
import DocumentGrid from './components/DocumentGrid';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DocumentModal from './components/DocumentModal';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import { Document } from './types';
import { useHomeSearch } from './context/HomeSearchContext';

type Page = 'home' | 'contact' | 'privacy' | 'terms';

export default function App({ initialPage }: { initialPage?: Page }) {
  const [currentPage, setCurrentPage] = useState<Page>(initialPage ?? 'home');
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const { searchQuery } = useHomeSearch();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  return (
    <div className="min-h-screen bg-white">
      {currentPage === 'home' ? (
        <>
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
          <FAQ />
        </>
      ) : currentPage === 'contact' ? (
        <Contact />
      ) : currentPage === 'privacy' ? (
        <Privacy />
      ) : (
        <Terms />
      )}

      <Footer onNavigate={setCurrentPage} />

      {selectedDocument && (
        <DocumentModal
          document={selectedDocument}
          onClose={() => setSelectedDocument(null)}
        />
      )}
    </div>
  );
}
