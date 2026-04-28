import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import blogs from '../data/blogs';

export default function BlogListPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <Helmet>
        <title>Legal Blog | ServiceLocal</title>
        <meta
          name="description"
          content="Explore ServiceLocal legal blog guides on rental agreements, settlement deeds, land registration, patta rules, court case status, and related document topics."
        />
      </Helmet>

      <main className="px-4 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          <section className="text-center mb-10 md:mb-14">
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-700">
              ServiceLocal Blog
            </span>
            <h1 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">SEO guides for legal and property topics</h1>
            <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg leading-8 text-gray-700">
              Read practical articles on registration, land records, court updates, and legal document workflows.
              Every guide is written to help users understand the process and move to the right document page faster.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs.map((blog) => (
              <article
                key={blog.slug}
                className="rounded-2xl border border-white/70 bg-white/95 p-6 shadow-lg shadow-emerald-100/60"
              >
                <h2 className="text-2xl font-bold text-gray-900 leading-tight">{blog.title}</h2>
                <p className="mt-3 text-gray-700 leading-7">{blog.description}</p>
                <div className="mt-6">
                  <Link
                    to={`/blog/${blog.slug}`}
                    className="inline-flex items-center rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
                  >
                    Read More
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
