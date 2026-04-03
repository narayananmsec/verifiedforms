import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, FileText } from 'lucide-react';
import { useHomeSearch } from '../context/HomeSearchContext';

type NavPage = 'home' | 'contact' | 'faq' | 'privacy' | 'terms' | 'other';

function navPageFromPath(pathname: string): NavPage {
  if (pathname === '/') return 'home';
  if (pathname === '/contact') return 'contact';
  if (pathname === '/faq') return 'faq';
  if (pathname === '/privacy') return 'privacy';
  if (pathname === '/terms') return 'terms';
  return 'other';
}

function linkNavClass(isActive: boolean) {
  return `text-sm font-medium transition-colors ${
    isActive ? 'text-emerald-600' : 'text-gray-700 hover:text-emerald-600'
  }`;
}

function mobileNavClass(isActive: boolean) {
  return `block w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors ${
    isActive ? 'bg-gray-50 text-emerald-600' : 'text-gray-700 hover:bg-gray-50'
  }`;
}

export default function Header() {
  const location = useLocation();
  const { searchQuery, setSearchQuery } = useHomeSearch();

  const currentPage = navPageFromPath(location.pathname);
  const isHome = currentPage === 'home';

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

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

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center space-x-2 cursor-pointer rounded-lg outline-none hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            <FileText className="h-8 w-8 text-emerald-600" />
            <div>
              <span className="block text-xl font-bold text-gray-900">ServiceLocal</span>
              <span className="block text-xs text-gray-500">Legal Templates</span>
            </div>
          </Link>

          {isHome && (
            <div className="hidden md:flex items-center flex-1 min-w-0 max-w-md mx-8">
              <div className="relative w-full min-w-0">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documents..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          <div className="flex items-center shrink-0 relative z-10">
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className={linkNavClass(currentPage === 'home')}>
                Home
              </Link>
              <Link to="/faq" className={linkNavClass(currentPage === 'faq')}>
                FAQ
              </Link>
              <Link to="/contact" className={linkNavClass(currentPage === 'contact')}>
                Contact
              </Link>
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

        {isHome && (
          <div className="md:hidden pb-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
          <Link to="/" onClick={() => setMenuOpen(false)} className={`${mobileNavClass(currentPage === 'home')} mt-0`}>
            Home
          </Link>
          <Link to="/faq" onClick={() => setMenuOpen(false)} className={`${mobileNavClass(currentPage === 'faq')} mt-1`}>
            FAQ
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={`${mobileNavClass(currentPage === 'contact')} mt-1`}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
