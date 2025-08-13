import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import type { Product, CartItem } from './types';
import { allProducts } from './data/products';
import Carousel from './components/Carousel';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import SalesBanner from './components/SalesBanner';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import SpecialOffers from './components/SpecialOffers';
import ProductDetails from './components/ProductDetails';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showProductDetails, setShowProductDetails] = useState(false);

  const filteredProducts = activeCategory === 'all'
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setShowCart(true);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setShowProductDetails(true);
  };

  const handleRequestOffer = (product: Product) => {
    const message = `Hi, I'm interested in ${product.name} priced at KSh ${product.price}. Could you provide more information?`;
    window.open(`https://wa.me/254738276457?text=${encodeURIComponent(message)}`);
  };

  const handleRequestOrder = () => {
    const message = cartItems
      .map(item => `${item.quantity}x ${item.product.name} @ KSh ${item.product.price}`)
      .join('\n');
    const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const fullMessage = `New Order:\n\n${message}\n\nTotal: KSh ${total}`;
    window.open(`https://wa.me/254738276457?text=${encodeURIComponent(fullMessage)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <Header />

      <main>
        {/* Hero Carousel Section */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <Carousel />
        </section>

        {/* Sales Banner */}
        <section className="max-w-7xl mx-auto px-4">
          <SalesBanner />
        </section>

        {/* Products Section */}
        <section id="products-section" className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-slide-up gradient-text">
              Our Premium Products
            </h2>
            <p className="text-lg md:text-xl text-gray-600 animate-fade-in delay-200">
              Quality materials for all your construction needs
            </p>
          </div>

          <div className="mb-6 md:mb-8 animate-fade-in delay-400">
            <CategoryFilter
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard
                  product={product}
                  onRequestOffer={handleRequestOffer}
                  onProductClick={handleProductClick}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Special Offers Section */}
        <SpecialOffers />

        {/* Trust Section */}
        <TrustSection />
      </main>

      {/* Floating Actions */}
      <FloatingActions />

      {/* Enhanced Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-slide-up">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Your Cart</h2>
              <button
                onClick={() => setShowCart(false)}
                className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-all duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <Cart
                items={cartItems}
                onUpdateQuantity={(id, qty) => {
                  setCartItems(prev =>
                    prev.map(item =>
                      item.product.id === id
                        ? { ...item, quantity: qty }
                        : item
                    )
                  );
                }}
                onRemove={(id) => {
                  setCartItems(prev => prev.filter(item => item.product.id !== id));
                }}
                onRequestOrder={handleRequestOrder}
              />
            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/254738276457?text=Hi%20Simba%20Cement%20%26%20Steel!%20I%20would%20like%20to%20talk%20to%20you"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl z-40 transition-all duration-300 transform hover:scale-110 animate-float flex items-center gap-3 pr-6"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="font-bold text-base ml-2">Talk to Us on WhatsApp</span>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
      </a>

      {/* Product Details Modal */}
      <ProductDetails
        product={selectedProduct}
        isOpen={showProductDetails}
        onClose={() => setShowProductDetails(false)}
        onAddToCart={handleAddToCart}
        onRequestOffer={handleRequestOffer}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;