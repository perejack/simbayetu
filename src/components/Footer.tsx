import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="animate-slide-in-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white p-2 rounded-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold">Simba Cement & Steel</h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Kenya's premier supplier of quality building materials. Trusted by contractors and builders nationwide for over a decade.
            </p>
            <div className="flex items-center gap-2 text-yellow-400">
              <Award className="w-5 h-5" />
              <span className="text-sm font-semibold">ISO 9001:2015 Certified</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-up delay-200">
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="tel:+254738276457"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="bg-green-600 p-2 rounded-lg group-hover:bg-green-500 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold">+254 738 276 457</div>
                  <div className="text-sm text-gray-400">Call for instant quotes</div>
                </div>
              </a>
              
              <div className="flex items-center gap-3 text-gray-300">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold">info@simbacement.co.ke</div>
                  <div className="text-sm text-gray-400">Email us anytime</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300">
                <div className="bg-purple-600 p-2 rounded-lg">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold">Nairobi, Kenya</div>
                  <div className="text-sm text-gray-400">Multiple locations</div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="animate-slide-up delay-400">
            <h4 className="text-xl font-bold mb-6">Business Hours</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="font-semibold">Monday - Friday</div>
                  <div className="text-gray-400">7:00 AM - 6:00 PM</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="font-semibold">Saturday</div>
                  <div className="text-gray-400">8:00 AM - 5:00 PM</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="font-semibold">Sunday</div>
                  <div className="text-gray-400">9:00 AM - 2:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div className="animate-slide-in-right delay-600">
            <h4 className="text-xl font-bold mb-6">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="bg-blue-600 p-3 rounded-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-400 p-3 rounded-lg hover:bg-blue-300 transition-all duration-300 transform hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-pink-600 p-3 rounded-lg hover:bg-pink-500 transition-all duration-300 transform hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            
            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-4 rounded-lg">
              <h5 className="font-bold mb-2">Need Help?</h5>
              <p className="text-sm text-gray-200 mb-3">
                Get expert advice from our construction specialists
              </p>
              <a
                href="tel:+254738276457"
                className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Simba Cement & Steel. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Warranty</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
