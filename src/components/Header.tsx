import { useEffect, useRef, useState } from 'react';
import { Search, FileText } from 'lucide-react';

interface HeaderProps {
  currentPage: 'home' | 'contact' | 'privacy' | 'terms';
  onNavigate: (page: 'home' | 'contact' | 'privacy' | 'terms') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Header({ currentPage, onNavigate, searchQuery, onSearchChange }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!menuOpen) return;

    function handleOutsideClick(e: MouseEvent | TouchEvent) {
      const target = e.target as Node | null;
      if (!target) return;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [menuOpen]);

  function goHome() {
    setMenuOpen(false);
    onNavigate('home');
  }

  function goFAQ() {
    setMenuOpen(false);
    if (currentPage !== 'home') onNavigate('home');
    setTimeout(() => {
      document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  function goContact() {
    setMenuOpen(false);
    onNavigate('contact');
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={goHome}
          >
            <FileText className="h-8 w-8 text-emerald-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">ServiceLocal</h1>
              <p className="text-xs text-gray-500">Legal Templates</p>
            </div>
          </div>

          {currentPage === 'home' && (
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documents..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          <div className="flex items-center">
            <nav className="hidden md:flex items-center space-x-6">
              <button
                onClick={goHome}
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'home' ? 'text-emerald-600' : 'text-gray-700 hover:text-emerald-600'
                }`}
              >
                Home
              </button>
              <button
                onClick={goFAQ}
                className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
              >
                FAQ
              </button>
              <button
                onClick={goContact}
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'contact'
                    ? 'text-emerald-600'
                    : 'text-gray-700 hover:text-emerald-600'
                }`}
              >
                Contact
              </button>
            </nav>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              ref={hamburgerRef}
              className="md:hidden ml-2 p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              ☰
            </button>
          </div>
        </div>

        {currentPage === 'home' && (
          <div className="md:hidden pb-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search documents..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
          </div>
        )}
      </div>

      <div
        ref={menuRef}
        className={`md:hidden absolute left-0 right-0 top-16 bg-white shadow-lg overflow-hidden transition-all duration-200 ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8 py-2">
          <button
            onClick={goHome}
            className={`w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors ${
              currentPage === 'home'
                ? 'bg-gray-50 text-emerald-600'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Home
          </button>
          <button
            onClick={goFAQ}
            className="w-full text-left px-4 py-3 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors mt-1"
          >
            FAQ
          </button>
          <button
            onClick={goContact}
            className={`w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors mt-1 ${
              currentPage === 'contact'
                ? 'bg-gray-50 text-emerald-600'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
}
