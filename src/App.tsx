import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import Categories from './components/Categories';
import DocumentGrid from './components/DocumentGrid';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DocumentModal from './components/DocumentModal';
import { Document } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'contact'>('home');
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  return (
    <div className="min-h-screen bg-white">
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

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
      ) : (
        <Contact />
      )}

      <Footer />

      {selectedDocument && (
        <DocumentModal
          document={selectedDocument}
          onClose={() => setSelectedDocument(null)}
        />
      )}
    </div>
  );
}

export default App;
