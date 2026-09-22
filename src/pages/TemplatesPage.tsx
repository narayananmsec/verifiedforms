import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Search, FileText, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';
import { documents } from '../data/documents';

export default function TemplatesPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const categories = ['All', ...Array.from(new Set(documents.map((doc) => doc.category)))];
  const filtered = useMemo(() => documents.filter((doc) =>
    (category === 'All' || doc.category === category) &&
    `${doc.title} ${doc.description} ${doc.category}`.toLowerCase().includes(query.trim().toLowerCase())
  ), [category, query]);

  return <div className="min-h-screen bg-white">
    <Helmet>
      <title>All Legal & Property Document Templates | ServiceLocal</title>
      <meta name="description" content="Browse ServiceLocal's legal, property deed, mortgage, agreement and CMDA document templates. Review descriptions and open individual template details." />
      <link rel="canonical" href="https://servicelocal.in/templates" />
    </Helmet>
    <main className="px-4 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <nav className="text-sm text-gray-500 mb-5" aria-label="Breadcrumb"><Link to="/" className="hover:text-emerald-700">Home</Link> / <span>Templates</span></nav>
        <header className="max-w-3xl mb-9">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700 mb-2">ServiceLocal document library</p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Legal & Property Document Templates</h1>
          <p className="text-gray-600 leading-7">Explore document formats across property deeds, agreements, mortgage documents, legal formats and CMDA forms. Each listing links to its own detail page so you can review the document description before proceeding. Templates are general reference materials; verify current requirements with the relevant authority or a qualified adviser.</p>
        </header>
        <div className="grid md:grid-cols-[1fr_240px] gap-4 mb-8">
          <label className="relative block"><Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"/><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search document templates..." className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 focus:border-emerald-600 focus:outline-none" aria-label="Search templates"/></label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-xl border border-gray-300 px-4 py-3 bg-white" aria-label="Filter by category">{categories.map((item) => <option key={item}>{item}</option>)}</select>
        </div>
        <p className="text-sm text-gray-500 mb-5">Showing {filtered.length} of {documents.length} templates</p>
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" aria-label="Document templates">
          {filtered.map((doc) => <article key={doc.slug} className="flex flex-col rounded-xl border border-gray-200 p-5 hover:border-emerald-300 hover:shadow-md transition-all">
            <span className="text-xs font-semibold uppercase tracking-wide text-emerald-700">{doc.category}</span>
            <h2 className="text-lg font-bold text-gray-900 mt-2 mb-2">{doc.title}</h2>
            <p className="text-sm text-gray-600 leading-6 flex-1">{doc.description}</p>
            <Link to={`/docs/${doc.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">View template details <ArrowRight className="h-4 w-4"/></Link>
          </article>)}
        </section>
        {filtered.length === 0 && <p className="text-center py-12 text-gray-600">No templates match your search. Try another keyword or category.</p>}
        <section className="mt-12 rounded-2xl bg-emerald-50 p-6 md:p-8"><div className="flex gap-3"><FileText className="h-6 w-6 text-emerald-700 shrink-0"/><div><h2 className="text-xl font-bold text-gray-900 mb-2">Not sure which document you need?</h2><p className="text-gray-600 leading-6">Read our practical guides before choosing a template, and confirm the applicable format and supporting records for your situation.</p><Link to="/blog" className="inline-flex mt-4 items-center gap-2 font-semibold text-emerald-700">Explore property guides <ArrowRight className="h-4 w-4"/></Link></div></div></section>
      </div>
    </main><Footer />
  </div>;
}
