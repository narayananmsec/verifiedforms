import { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import blogs from '../data/blogs';

export default function BlogPage() {
  const { slug } = useParams();

  const blog = useMemo(() => blogs.find((entry) => entry.slug === slug), [slug]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <Helmet>
          <title>Blog Not Found | ServiceLocal</title>
          <meta name="description" content="The requested blog page could not be found." />
        </Helmet>

        <main className="px-4 py-10 md:py-16">
          <div className="max-w-3xl mx-auto rounded-2xl bg-white p-8 md:p-10 shadow-lg">
            <h1 className="text-3xl font-bold text-gray-900">Blog Not Found</h1>
            <p className="mt-4 text-gray-700 leading-7">
              The article you requested does not exist. You can browse all published legal guides from the blog index.
            </p>
            <Link
              to="/blog"
              className="mt-6 inline-flex items-center rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              Back to Blog
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <Helmet>
        <title>{blog.language === 'ta' ? `தமிழில் ${blog.title} | ServiceLocal` : `${blog.title} | ServiceLocal`}</title>
        <meta
          name="description"
          content={blog.language === 'ta' ? `தமிழில் முழுமையான வழிகாட்டி: ${blog.description}` : blog.description}
        />
        <link rel="canonical" href={`https://servicelocal.in/blog/${blog.slug}`} />
      </Helmet>

      <main className="px-4 py-10 md:py-16">
        <article className="max-w-4xl mx-auto rounded-3xl bg-white p-6 md:p-10 shadow-xl shadow-emerald-100/70">
          <div className="mb-8 border-b border-emerald-100 pb-6">
            <Link to="/blog" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">
              {blog.language === 'ta' ? 'ப்ளாக் பட்டியலுக்கு திரும்ப' : 'Back to Blog'}
            </Link>
            <div className="mt-4">
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${
                  blog.language === 'ta' ? 'bg-orange-100 text-orange-700' : 'bg-sky-100 text-sky-700'
                }`}
              >
                {blog.language === 'ta' ? 'தமிழ்' : 'EN'}
              </span>
            </div>
            <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-gray-900">{blog.title}</h1>
            <p className="mt-4 text-base md:text-lg leading-8 text-gray-700">{blog.description}</p>
          </div>

          <div
            className="space-y-8 text-gray-800 leading-8
              [&_a]:font-semibold [&_a]:text-emerald-700
              [&_a:hover]:text-emerald-800
              [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-bold [&_h2]:text-gray-900
              [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gray-900
              [&_p]:mt-4 [&_p]:text-base [&_p]:leading-8 [&_p]:text-gray-700
              [&_section:first-child_h2]:mt-0
              [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-3 [&_ul]:pl-6
              [&_li]:text-gray-700"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}
