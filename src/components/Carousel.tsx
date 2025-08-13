import { ChevronLeft, ChevronRight, Phone, Star, Award, Truck } from 'lucide-react';
import { useState, useEffect } from 'react';

const slides = [
  {
    image: 'https://nccke.com/wp-content/uploads/2021/07/cement-e1580219295639.jpg',
    title: 'Premium Cement Collection',
    subtitle: 'Build Strong, Build Smart',
    offer: 'Up to 25% OFF on Bulk Orders',
    cta: 'Shop Cement Now'
  },
  {
    image: 'https://fundilink.co.ke/wp-content/uploads/2022/08/Hollow-square.jpg',
    title: 'Quality Steel & Iron',
    subtitle: 'Strength You Can Trust',
    offer: 'Free Delivery Above KSh 50,000',
    cta: 'Browse Steel Products'
  },
  {
    image: 'https://fundilink.co.ke/wp-content/uploads/2022/08/IMG_0990-1024x683.jpg',
    title: 'Complete Building Solutions',
    subtitle: 'Everything Under One Roof',
    offer: 'Call +254 738 276 457 for Quotes',
    cta: 'Get Quote Now'
  }
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleCallNow = () => {
    window.open('tel:+254738276457');
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-2xl shadow-2xl">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-all duration-700 ease-in-out ${
            index === current 
              ? 'translate-x-0 opacity-100' 
              : index < current 
                ? '-translate-x-full opacity-0' 
                : 'translate-x-full opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-8 w-full">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-4 animate-fade-in">
                  <Award className="w-6 h-6 text-yellow-400" />
                  <span className="text-yellow-400 font-semibold text-sm">AWARD WINNING QUALITY</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 animate-slide-up">
                  {slide.title}
                </h2>
                
                <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-4 md:mb-6 animate-slide-up delay-200">
                  {slide.subtitle}
                </p>
                
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-full inline-block mb-6 md:mb-8 animate-pulse">
                  <div className="flex items-center gap-1 md:gap-2">
                    <Truck className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="font-bold text-sm md:text-lg">{slide.offer}</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3 md:gap-4 animate-slide-up delay-400">
                  <button 
                    onClick={handleCallNow}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="hidden sm:inline">Call Now: +254 738 276 457</span>
                    <span className="sm:hidden">Call: +254 738 276 457</span>
                  </button>
                  
                  <button className="w-full sm:w-auto bg-white/20 backdrop-blur-sm border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                    {slide.cta}
                  </button>
                </div>
                
                <div className="flex items-center gap-1 mt-6 animate-fade-in delay-600">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-white ml-2 text-sm">Rated 5/5 by 1000+ customers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Buttons */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}