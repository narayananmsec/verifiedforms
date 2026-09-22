import { useState } from 'react';
import { ArrowRight, BookOpen, Calculator, FileText, MapPin, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';
import Categories from '../components/Categories';
import DocumentGrid from '../components/DocumentGrid';
import Footer from '../components/Footer';
import DocumentModal from '../components/DocumentModal';
import { Document } from '../types';
import { useHomeSearch } from '../context/HomeSearchContext';

const guides = [
  {
    title: 'Patta Mutation in Tamil Nadu: Documents & Process',
    description: 'Understand the usual documents, application steps, and checks involved when applying for a patta name transfer.',
    href: '/blog/patta-mutation-required-documents-tamil',
    tag: 'Property guide',
  },
  {
    title: 'Karnataka Phodi: Process & Documents in Tamil',
    description: 'A practical overview of phodi, common supporting records, and what to prepare before approaching the relevant office.',
    href: '/blog/karnataka-phodi-process-documents-tamil',
    tag: 'Land records',
  },
];

const tools = [
  { title: 'GST Calculator', description: 'Calculate GST-inclusive or GST-exclusive amounts and view the tax component.', href: '/gst-calculator', icon: Calculator },
  { title: 'EBITDA Calculator', description: 'Estimate EBITDA and EBITDA margin from your business figures.', href: '/ebitda-calculator', icon: Calculator },
  { title: 'Chennai Budget Finder', description: 'Explore budget-focused local options and useful planning information.', href: '/chennai-budget-finder', icon: MapPin },
];

export default function Home() {
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const { searchQuery } = useHomeSearch();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  return (
    <div className="min-h-screen bg-white">
      <Hero onBrowseClick={() => document.getElementById('documents')?.scrollIntoView({ behavior: 'smooth' })} />
      <TrustSection />

      <section className="px-4 py-14 bg-white" aria-labelledby="welcome-heading">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.5fr_1fr] gap-8 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700 mb-2">ServiceLocal resources</p>
            <h2 id="welcome-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Documents, practical guides & free tools in one place</h2>
            <p className="text-gray-600 leading-7">ServiceLocal brings together downloadable document templates, explainers for common property and registration processes, and simple online calculators. Start with a guide to understand the process, use a tool to work through the numbers, or browse templates when you know what you need.</p>
          </div>
          <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6">
            <div className="flex items-center gap-3 mb-3"><ShieldCheck className="h-6 w-6 text-emerald-700" /><h3 className="font-semibold text-gray-900">Use resources thoughtfully</h3></div>
            <p className="text-sm text-gray-600 leading-6">Templates and online guides are general reference materials. Requirements can vary by authority and situation, so verify current instructions with the relevant department or a qualified adviser before submitting documents.</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 bg-gray-50" aria-labelledby="tools-heading">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-7">
            <div><p className="text-sm font-semibold uppercase tracking-wider text-emerald-700 mb-2">Free online tools</p><h2 id="tools-heading" className="text-2xl md:text-3xl font-bold text-gray-900">Calculate, compare and plan</h2><p className="text-gray-600 mt-2">Quick browser-based tools with no template purchase required.</p></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tools.map(({ title, description, href, icon: Icon }) => (
              <Link key={href} to={href} className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-emerald-300 hover:shadow-md transition-all">
                <div className="h-11 w-11 rounded-lg bg-emerald-50 flex items-center justify-center mb-4"><Icon className="h-5 w-5 text-emerald-700" /></div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{title}</h3><p className="text-sm text-gray-600 leading-6 mb-4">{description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">Open tool <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14" aria-labelledby="guides-heading">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-2"><BookOpen className="h-5 w-5 text-emerald-700" /><p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">Learn before you apply</p></div>
          <h2 id="guides-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Property & land-record guides</h2>
          <p className="text-gray-600 mb-7 max-w-3xl">Explore practical explainers covering common documentation and land-record topics. Each guide is intended to help you prepare and identify what to verify for your specific case.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {guides.map((guide) => (
              <article key={guide.href} className="rounded-xl border border-gray-200 p-6 hover:shadow-sm transition-shadow">
                <span className="text-xs font-semibold uppercase tracking-wide text-emerald-700">{guide.tag}</span>
                <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-2">{guide.title}</h3>
                <p className="text-sm text-gray-600 leading-6 mb-4">{guide.description}</p>
                <Link to={guide.href} className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">Read guide <ArrowRight className="h-4 w-4" /></Link>
              </article>
            ))}
          </div>
          <div className="mt-6"><Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">Explore all articles <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </section>

      <section className="px-4 py-12 bg-emerald-50/60" aria-labelledby="templates-heading">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="max-w-3xl"><div className="flex items-center gap-2 text-emerald-700 mb-2"><FileText className="h-5 w-5" /><span className="text-sm font-semibold uppercase tracking-wider">Document library</span></div><h2 id="templates-heading" className="text-2xl font-bold text-gray-900 mb-2">Looking for a specific document template?</h2><p className="text-gray-600 leading-6">Browse templates by category, review the available document details, and choose the file that fits your needs. Check local requirements before using any template for an official submission.</p></div>
          <button onClick={() => document.getElementById('documents')?.scrollIntoView({ behavior: 'smooth' })} className="shrink-0 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-700 text-white px-6 py-3 font-semibold hover:bg-emerald-800 transition-colors">Browse templates <ArrowRight className="h-4 w-4" /></button>
        </div>
      </section>

      <Categories selectedCategory={selectedCategory} onCategorySelect={setSelectedCategory} />
      <div id="documents">
        <DocumentGrid searchQuery={searchQuery} selectedCategory={selectedCategory} onDocumentClick={setSelectedDocument} />
      </div>
      <Footer />
      {selectedDocument && <DocumentModal document={selectedDocument} onClose={() => setSelectedDocument(null)} />}
    </div>
  );
}
