import { Phone, Calculator, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openCalculator = () => {
    alert('Construction Calculator coming soon! Call +254 738 276 457 for custom quotes.');
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {/* Main Action Button */}
      <div className="relative">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 animate-float"
        >
          <Calculator className="w-6 h-6" />
        </button>

        {/* Expanded Actions */}
        {isExpanded && (
          <div className="absolute bottom-16 left-0 space-y-3 animate-slide-up">
            <a
              href="tel:+254738276457"
              className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">Quick Call</span>
            </a>
            
            <button
              onClick={openCalculator}
              className="flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Calculator className="w-5 h-5" />
              <span className="font-semibold">Calculator</span>
            </button>
            
            {showScrollTop && (
              <button
                onClick={scrollToTop}
                className="flex items-center gap-3 bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <ArrowUp className="w-5 h-5" />
                <span className="font-semibold">Top</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
