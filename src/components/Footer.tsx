import { FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FileText className="h-8 w-8 text-emerald-500" />
              <div>
                <h3 className="text-lg font-bold text-white">ServiceLocal</h3>
                <p className="text-xs text-gray-400">Legal Templates</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your trusted source for CMDA forms and legal document templates in India.
              Affordable, instant, and reliable.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#documents" className="hover:text-emerald-500 transition-colors">
                  Browse Documents
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-500 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="mailto:help@servicelocal.in" className="hover:text-emerald-500 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:help@servicelocal.in"
                  className="hover:text-emerald-500 transition-colors"
                >
                  help@servicelocal.in
                </a>
              </li>
              <li className="text-gray-400">
                Tamil Nadu, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p className="text-gray-400">
            © {new Date().getFullYear()} ServiceLocal. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2 text-xs">
            All documents are templates. Please consult with a legal professional for your specific needs.
          </p>
        </div>
      </div>
    </footer>
  );
}
