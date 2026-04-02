import { FileText, File, Building, Scroll, Scale } from 'lucide-react';

interface CategoriesProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

export default function Categories({ selectedCategory, onCategorySelect }: CategoriesProps) {
  const categories = [
    { name: 'All', icon: FileText, color: 'text-gray-600' },
    { name: 'Property Deeds', icon: Building, color: 'text-emerald-600' },
    { name: 'Agreements', icon: File, color: 'text-blue-600' },
    { name: 'Mortgage Documents', icon: Scroll, color: 'text-orange-600' },
    { name: 'CMDA Forms', icon: Scale, color: 'text-teal-600' },
    { name: 'Legal Formats', icon: FileText, color: 'text-indigo-600' },
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          Document Categories
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => onCategorySelect(category.name)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                selectedCategory === category.name
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200'
              }`}
            >
              <category.icon className={`h-5 w-5 ${selectedCategory === category.name ? 'text-white' : category.color}`} />
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
