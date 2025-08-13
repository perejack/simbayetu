import { Gift, Clock, Phone, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function SalesBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-6 md:py-8 px-4 my-6 md:my-8 rounded-2xl shadow-2xl overflow-hidden relative">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 md:gap-2 mb-3 md:mb-4 animate-bounce">
            <Zap className="w-6 h-6 md:w-8 md:h-8 text-yellow-300" />
            <span className="text-lg md:text-2xl font-bold">MEGA SALE EVENT</span>
            <Zap className="w-6 h-6 md:w-8 md:h-8 text-yellow-300" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-3 md:mb-4 animate-pulse">
            🔥 UP TO 40% OFF 🔥
          </h2>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 animate-fade-in">
            On All Cement, Steel & Building Materials
          </p>
          
          {/* Countdown Timer - Mobile Responsive */}
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-6 md:mb-8">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 md:p-4 min-w-[60px] md:min-w-[80px]">
                <div className="text-xl md:text-3xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-xs md:text-sm opacity-80">Hours</div>
              </div>
            </div>
            <div className="text-xl md:text-3xl font-bold animate-pulse">:</div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 md:p-4 min-w-[60px] md:min-w-[80px]">
                <div className="text-xl md:text-3xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-xs md:text-sm opacity-80">Minutes</div>
              </div>
            </div>
            <div className="text-xl md:text-3xl font-bold animate-pulse">:</div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 md:p-4 min-w-[60px] md:min-w-[80px]">
                <div className="text-xl md:text-3xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-xs md:text-sm opacity-80">Seconds</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
            <a
              href="tel:+254738276457"
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 animate-glow"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">Call Now: +254 738 276 457</span>
              <span className="sm:hidden">Call: +254 738 276 457</span>
            </a>
            
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-xl">
              <Gift className="w-4 h-4 md:w-5 md:h-5" />
              <span className="font-semibold text-sm md:text-base">Free Delivery + Installation</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-1 animate-fade-in">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Limited Time Offer - Don't Miss Out!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
