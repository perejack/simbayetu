import { Package, Hammer, Droplets, Home, Grid3X3 } from 'lucide-react';

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'all', label: 'All Products', icon: Grid3X3, count: '50+' },
  { id: 'steel', label: 'Steel Products', icon: Hammer, count: '15+' },
  { id: 'tanks', label: 'Water Tanks', icon: Droplets, count: '8+' },
  { id: 'roofing', label: 'Roofing Materials', icon: Home, count: '12+' },
  { id: 'construction', label: 'Building Supplies', icon: Package, count: '20+' }
];

export default function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  const handleCategoryChange = (categoryId: string) => {
    onCategoryChange(categoryId);
    // Smooth scroll to products section
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg mb-8 animate-fade-in">
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center">
        Browse by Category
      </h3>
      
      {/* Mobile: 3x2 Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center gap-3 md:gap-4">
        {categories.map((category, index) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`group relative p-3 md:px-6 md:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex flex-col lg:flex-row items-center gap-2 lg:gap-3 min-h-[100px] lg:min-h-[auto] lg:min-w-[160px] animate-slide-up ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg animate-glow'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <category.icon className={`w-6 h-6 lg:w-5 lg:h-5 ${
              activeCategory === category.id ? 'text-white' : 'text-blue-600'
            }`} />
            <div className="text-center lg:text-left">
              <div className="font-semibold text-sm md:text-base">{category.label}</div>
              <div className={`text-xs ${
                activeCategory === category.id ? 'text-blue-100' : 'text-gray-500'
              }`}>
                {category.count} items
              </div>
            </div>
            {activeCategory === category.id && (
              <div className="absolute inset-0 bg-white/20 rounded-xl animate-pulse" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}