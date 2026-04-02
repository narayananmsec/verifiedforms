import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onBrowseClick: () => void;
}

export default function Hero({ onBrowseClick }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Download CMDA & Legal Document Templates Instantly @ ₹9
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          All essential property and registration documents in one place. Simple, fast & affordable.
        </p>
        <button
          onClick={onBrowseClick}
          className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
        >
          <span>Browse Documents</span>
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
