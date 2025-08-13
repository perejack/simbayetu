import { Shield, Truck, Award, Users, Star, CheckCircle, Phone } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'ISO certified materials with lifetime warranty'
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Same day delivery within Nairobi'
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Best Building Materials Supplier 2024'
  },
  {
    icon: Users,
    title: '10,000+ Customers',
    description: 'Trusted by contractors nationwide'
  }
];

const testimonials = [
  {
    name: 'John Kamau',
    role: 'Construction Manager',
    content: 'Best quality cement in Kenya. My projects always turn out perfect!',
    rating: 5
  },
  {
    name: 'Mary Wanjiku',
    role: 'Architect',
    content: 'Reliable delivery and excellent customer service. Highly recommended!',
    rating: 5
  },
  {
    name: 'David Ochieng',
    role: 'Contractor',
    content: 'Great prices and top-notch materials. Been using them for 5 years.',
    rating: 5
  }
];

export default function TrustSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Features Grid */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-up">
            Why Choose Simba Cement & Steel?
          </h2>
          <p className="text-xl text-gray-600 animate-fade-in delay-200">
            Your trusted partner for all construction needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto animate-float">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4 animate-slide-up">
            What Our Customers Say
          </h3>
          <div className="flex items-center justify-center gap-1 mb-8 animate-fade-in">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 text-lg font-semibold text-gray-700">4.9/5 from 1000+ reviews</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
                <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl shadow-2xl animate-glow">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-blue-100 mb-6">
              Get expert advice and competitive quotes today!
            </p>
            <a
              href="tel:+254738276457"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call +254 738 276 457 Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
