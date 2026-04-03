import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import DocPage from './pages/DocPage';
import Header from './components/Header';
import { HomeSearchProvider } from './context/HomeSearchContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <HomeSearchProvider>
        <Header />
        <Routes>
          <Route path="/" element={<App initialPage="home" />} />
          <Route path="/contact" element={<App initialPage="contact" />} />
          <Route path="/privacy" element={<App initialPage="privacy" />} />
          <Route path="/terms" element={<App initialPage="terms" />} />
          <Route path="/docs/:slug" element={<DocPage />} />
        </Routes>
      </HomeSearchProvider>
    </BrowserRouter>
  </StrictMode>
);
