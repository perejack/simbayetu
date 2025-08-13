import { Phone, Star, Zap } from 'lucide-react';

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <>
      {/* Top promotional banner */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-2 px-4 text-center animate-pulse">
        <div className="flex items-center justify-center gap-2 text-sm font-semibold">
          <Zap className="w-4 h-4" />
          <span>🔥 SPECIAL OFFER: Free Delivery on Orders Above KSh 50,000! Limited Time Only!</span>
          <Zap className="w-4 h-4" />
        </div>
      </div>
      
      <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo and Company Name */}
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-lg shadow-md">
  <img
    src="/simba-cement.png"
    alt="Simba Cement & Steel Logo"
    className="w-8 h-8 object-contain rounded"
    style={{ minWidth: 32, minHeight: 32 }}
  />
</div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white">
                  Simba Cement & Steel
                </h1>
                <div className="flex items-center gap-1 text-yellow-300 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                  <span className="ml-1 text-xs">Trusted Quality</span>
                </div>
              </div>
            </div>

            {/* Phone Number and Cart - Mobile Responsive */}
            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Phone Number - Always visible, responsive sizing */}
              <a
                href="tel:+254738276457"
                className="flex items-center space-x-1 md:space-x-2 bg-green-600 hover:bg-green-700 text-white px-2 md:px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg phone-responsive"
              >
                <Phone className="w-4 h-4" />
                <span className="font-semibold text-xs md:text-base">+254 738 276 457</span>
              </a>
              
              
            </div>
          </div>
        </div>
      </header>
    </>
  );
}