import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Footer from '../components/Footer';
import blogs from '../data/blogs';
import pattaMutationBlog from '../data/pattaMutationBlog';
import karnatakaPhodiBlog from '../data/karnatakaPhodiBlog';
import companyRegistrationBlog from '../data/companyRegistrationBlog';

const companyRegistrationFaqs = [
  { question: 'How many people are required to start a Private Limited Company?', answer: 'A Private Limited Company has specific requirements for members and directors under the Companies Act. If you are starting alone, an OPC may be another structure to consider.' },
  { question: 'How long does Private Limited Company registration take?', answer: 'The timeline varies depending on name approval, document accuracy, MCA processing and whether clarification or resubmission is required.' },
  { question: 'What documents are generally required for company registration?', answer: 'Common requirements include identity and address information for proposed directors and subscribers, registered office proof and other documents applicable to the company and its circumstances.' },
  { question: 'Is a registered office required?', answer: 'Yes. A company is required to have a registered office as provided under company law. The supporting proof depends on whether the premises are owned, rented or otherwise occupied.' },
  { question: 'Is GST registration compulsory when a company is incorporated?', answer: 'Not automatically in every case. GST registration depends on the applicable GST law and the nature and circumstances of the business.' },
  { question: 'What is SPICe+ used for?', answer: 'SPICe+ is MCA’s integrated incorporation process. It covers company incorporation and linked services such as DIN allotment and PAN and TAN allocation, with other services available where applicable.' },
];

export default function BlogPage() {
  const { slug } = useParams();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const blog = useMemo(() => [companyRegistrationBlog, karnatakaPhodiBlog, pattaMutationBlog, ...blogs].find((entry) => entry.slug === slug), [slug]);

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
            <p className="mt-4 text-gray-700 leading-7">The article you requested does not exist. You can browse all published legal guides from the blog index.</p>
            <Link to="/blog" className="mt-6 inline-flex items-center rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700">Back to Blog</Link>
          </div>
        </main>
        {blog.slug === 'how-to-register-private-limited-company-india' && (
        <section className="max-w-4xl mx-auto mt-8 mb-12 rounded-3xl bg-white p-6 md:p-10 shadow-xl shadow-emerald-100/70">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Related FAQs</h2>
          <p className="mt-2 text-gray-600">Tap a question to view the answer.</p>
          <div className="mt-6 space-y-3">
            {companyRegistrationFaqs.map((faq, index) => (
              <div key={faq.question} className="border border-gray-200 rounded-xl overflow-hidden">
                <button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-50">
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? <ChevronUp className="h-5 w-5 text-emerald-600 flex-shrink-0" /> : <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />}
                </button>
                {openFaq === index && <div className="px-5 pb-5 text-gray-700 leading-7">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </section>
      )}

      <Footer />
      </div>
    );
  }

  // Strip any accidental internal citation markers before rendering blog HTML.
  const cleanContent = blog.content
    .replace(/\uE200cite\uE202[^\uE201]*\uE201/g, '')
    .replace(/\uE200url\uE202[^\uE201]*\uE201/g, '')
    .replace(/\uE200entity\uE202[^\uE201]*\uE201/g, '');

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <Helmet>
        <title>{blog.language === 'ta' ? `தமிழில் ${blog.title} | ServiceLocal` : `${blog.title} | ServiceLocal`}</title>
        <meta name="description" content={blog.language === 'ta' ? `தமிழில் முழுமையான வழிகாட்டி: ${blog.description}` : blog.description} />
        <link rel="canonical" href={`https://servicelocal.in/blog/${blog.slug}`} />
      </Helmet>
      <main className="px-4 py-10 md:py-16">
        <article className="max-w-4xl mx-auto rounded-3xl bg-white p-6 md:p-10 shadow-xl shadow-emerald-100/70">
          <div className="mb-8 border-b border-emerald-100 pb-6">
            <Link to="/blog" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">{blog.language === 'ta' ? 'ப்ளாக் பட்டியலுக்கு திரும்ப' : 'Back to Blog'}</Link>
            <div className="mt-4">
              <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${blog.language === 'ta' ? 'bg-orange-100 text-orange-700' : 'bg-sky-100 text-sky-700'}`}>{blog.language === 'ta' ? 'தமிழ்' : 'EN'}</span>
            </div>
            <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-gray-900">{blog.title}</h1>
            <p className="mt-4 text-base md:text-lg leading-8 text-gray-700">{blog.description}</p>
          </div>
          <div className="space-y-8 text-gray-800 leading-8 [&_a]:font-semibold [&_a]:text-emerald-700 [&_a:hover]:text-emerald-800 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gray-900 [&_p]:mt-4 [&_p]:text-base [&_p]:leading-8 [&_p]:text-gray-700 [&_section:first-child_h2]:mt-0 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-3 [&_ul]:pl-6 [&_li]:text-gray-700" dangerouslySetInnerHTML={{ __html: cleanContent }} />
        </article>
      </main>
      <Footer />
    </div>
  );
}
