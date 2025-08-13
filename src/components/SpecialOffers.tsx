import { Gift, Clock, Truck, Phone, Percent, Zap } from 'lucide-react';

const offers = [
  {
    icon: Truck,
    title: 'Free Delivery',
    description: 'On orders above KSh 50,000',
    color: 'from-green-500 to-emerald-600',
    badge: 'LIMITED TIME'
  },
  {
    icon: Percent,
    title: 'Bulk Discounts',
    description: 'Up to 25% off on large orders',
    color: 'from-blue-500 to-cyan-600',
    badge: 'SAVE MORE'
  },
  {
    icon: Gift,
    title: 'Installation Service',
    description: 'Free installation on select items',
    color: 'from-purple-500 to-pink-600',
    badge: 'VALUE ADDED'
  }
];

export default function SpecialOffers() {
  return (
    <section className="py-8 md:py-16 bg-gradient-to-r from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-1 md:gap-2 mb-3 md:mb-4">
            <Zap className="w-6 h-6 md:w-8 md:h-8 text-orange-500 animate-bounce" />
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 animate-slide-up">
              Special Offers
            </h2>
            <Zap className="w-6 h-6 md:w-8 md:h-8 text-orange-500 animate-bounce" />
          </div>
          <p className="text-lg md:text-xl text-gray-600 animate-fade-in delay-200">
            Limited time deals you can't miss!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
          {offers.map((offer, index) => (
            <div
              key={offer.title}
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                  {offer.badge}
                </span>
              </div>

              {/* Content */}
              <div className={`bg-gradient-to-br ${offer.color} p-6 text-white`}>
                <offer.icon className="w-12 h-12 mb-4 animate-float" />
                <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                <p className="text-lg opacity-90">{offer.description}</p>
              </div>

              <div className="p-6">
                <a
                  href="tel:+254738276457"
                  className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call to Claim
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Urgency Banner */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-2xl text-center shadow-2xl animate-glow">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-6 h-6 animate-pulse" />
            <h3 className="text-3xl font-bold">Don't Miss Out!</h3>
            <Clock className="w-6 h-6 animate-pulse" />
          </div>
          <p className="text-xl mb-6">
            These offers expire soon. Call now to secure the best prices!
          </p>
          <a
            href="tel:+254738276457"
            className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Phone className="w-5 h-5" />
            +254 738 276 457
          </a>
        </div>
      </div>
    </section>
  );
}
