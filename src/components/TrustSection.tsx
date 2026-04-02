import { Zap, DollarSign, CheckCircle, Users } from 'lucide-react';

export default function TrustSection() {
  const features = [
    {
      icon: Zap,
      title: 'Instant Access',
      description: 'Download immediately after payment',
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'All documents just ₹9 each',
    },
    {
      icon: CheckCircle,
      title: 'Verified Formats',
      description: 'Legally compliant templates',
    },
    {
      icon: Users,
      title: 'Trusted by Many',
      description: 'Used by property owners & agents',
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
