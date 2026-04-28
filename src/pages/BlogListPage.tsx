import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import blogs from '../data/blogs';

export default function BlogListPage() {
  const [languageFilter, setLanguageFilter] = useState<'all' | 'ta' | 'en'>('all');

  const filteredBlogs = useMemo(() => {
    if (languageFilter === 'all') return blogs;
    return blogs.filter((blog) => blog.language === languageFilter);
  }, [languageFilter]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <Helmet>
        <title>Tamil & English Legal Blog | ServiceLocal</title>
        <meta
          name="description"
          content="Tamil Nadu users can explore ServiceLocal legal and property guides in Tamil and English, including patta, court case status, rental agreement, and settlement deed topics."
        />
      </Helmet>

      <main className="px-4 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          <section className="text-center mb-10 md:mb-14">
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-700">
              ServiceLocal Blog
            </span>
            <h1 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">Legal &amp; Property Guides (Tamil &amp; English)</h1>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setLanguageFilter('all')}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  languageFilter === 'all' ? 'bg-emerald-600 text-white' : 'bg-white text-gray-700 hover:bg-emerald-50'
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setLanguageFilter('ta')}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  languageFilter === 'ta' ? 'bg-emerald-600 text-white' : 'bg-white text-gray-700 hover:bg-emerald-50'
                }`}
              >
                Tamil
              </button>
              <button
                type="button"
                onClick={() => setLanguageFilter('en')}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  languageFilter === 'en' ? 'bg-emerald-600 text-white' : 'bg-white text-gray-700 hover:bg-emerald-50'
                }`}
              >
                English
              </button>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.slug}
                className="rounded-2xl border border-white/70 bg-white/95 p-6 shadow-lg shadow-emerald-100/60"
              >
                <div className="mb-4">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${
                      blog.language === 'ta' ? 'bg-orange-100 text-orange-700' : 'bg-sky-100 text-sky-700'
                    }`}
                  >
                    {blog.language === 'ta' ? 'தமிழ்' : 'EN'}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 leading-tight">{blog.title}</h2>
                <p className="mt-3 text-gray-700 leading-7">{blog.description}</p>
                <div className="mt-6">
                  <Link
                    to={`/blog/${blog.slug}`}
                    className="inline-flex items-center rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
                  >
                    {blog.language === 'ta' ? 'முழுவதும் படிக்க' : 'Read More'}
                  </Link>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
