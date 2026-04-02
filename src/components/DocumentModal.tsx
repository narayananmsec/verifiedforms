import { X, FileText, ExternalLink } from 'lucide-react';
import { Document } from '../types';

interface DocumentModalProps {
  document: Document;
  onClose: () => void;
}

export default function DocumentModal({ document, onClose }: DocumentModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-start justify-between rounded-t-2xl">
          <div className="flex items-start space-x-3">
            <div className="bg-emerald-100 text-emerald-600 p-2 rounded-lg">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{document.title}</h2>
              <span className="inline-block mt-2 text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium">
                {document.category}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
            <p className="text-gray-700 leading-relaxed">{document.description}</p>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Document Price</p>
                <p className="text-4xl font-bold text-emerald-600">₹{document.price}</p>
              </div>
            </div>
            <ul className="space-y-2 mb-6 text-sm text-gray-700">
              <li className="flex items-center space-x-2">
                <span className="text-emerald-600">✓</span>
                <span>Instant download after payment</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-emerald-600">✓</span>
                <span>Legally verified format</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-emerald-600">✓</span>
                <span>Ready to use template</span>
              </li>
            </ul>
            <a
              href={document.razorpay_link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-2 bg-emerald-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <span>Pay & Download</span>
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">How it Works</h3>
            <ol className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xs">
                  1
                </span>
                <span>Click "Pay & Download" button above</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xs">
                  2
                </span>
                <span>Complete payment securely via Razorpay</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xs">
                  3
                </span>
                <span>Download your document immediately</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
