import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import DocPage from './pages/DocPage';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import { HomeSearchProvider } from './context/HomeSearchContext';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import BlogListPage from './pages/BlogListPage';
import BlogPage from './pages/BlogPage';
import ChennaiBudgetFinderPage from './pages/ChennaiBudgetFinderPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <HomeSearchProvider>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
          <Route path="/chennai-budget-finder" element={<ChennaiBudgetFinderPage />} />
          <Route path="/docs/:slug" element={<DocPage />} />
        </Routes>
      </HomeSearchProvider>
    </BrowserRouter>
  </StrictMode>
);
