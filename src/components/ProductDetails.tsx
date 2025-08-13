import { useState } from 'react';
import { X, ShoppingCart, MessageCircle, Phone, Star, Check, Truck, Shield, Award, ZoomIn, Heart, Share2 } from 'lucide-react';
import type { Product } from '../types';

interface ProductDetailsProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onRequestOffer: (product: Product) => void;
}

export default function ProductDetails({ product, isOpen, onClose, onAddToCart, onRequestOffer }: ProductDetailsProps) {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageZoomed, setImageZoomed] = useState(false);

  if (!isOpen || !product) return null;

  // Generate variants based on product type
  const variants = [
    { name: 'Standard', price: product.price, discount: 0 },
    { name: 'Premium', price: Math.round(product.price * 1.2), discount: 5 },
    { name: 'Bulk (10+ units)', price: Math.round(product.price * 0.9), discount: 15 }
  ];

  const selectedPrice = variants[selectedVariant].price;
  const discount = variants[selectedVariant].discount;
  const originalPrice = discount > 0 ? Math.round(selectedPrice / (1 - discount / 100)) : selectedPrice;

  const features = [
    'High quality materials',
    'ISO certified',
    'Weather resistant',
    'Easy installation',
    'Long lasting durability'
  ];

  const handleAddToCart = () => {
    const productWithVariant = {
      ...product,
      name: `${product.name} (${variants[selectedVariant].name})`,
      price: selectedPrice
    };
    
    for (let i = 0; i < quantity; i++) {
      onAddToCart(productWithVariant);
    }
  };

  const handleWhatsAppOrder = () => {
    const message = `Hi! I want to order:\n\n${product.name} (${variants[selectedVariant].name})\nQuantity: ${quantity}\nPrice: KSh ${selectedPrice.toLocaleString()}\nTotal: KSh ${(selectedPrice * quantity).toLocaleString()}\n\nPlease confirm availability and delivery details.`;
    window.open(`https://wa.me/254738276457?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slide-up">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={`p-2 rounded-full transition-all duration-300 ${
                isWishlisted ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>
            <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all duration-300">
              <Share2 className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600 transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          {/* Product Image Section */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className={`w-full h-96 object-cover rounded-xl shadow-lg transition-all duration-300 cursor-zoom-in ${
                  imageZoomed ? 'scale-110' : 'hover:scale-105'
                }`}
                onClick={() => setImageZoomed(!imageZoomed)}
              />
              <button
                onClick={() => setImageZoomed(!imageZoomed)}
                className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              
              {/* Sale Badge */}
              {discount > 0 && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                  {discount}% OFF
                </div>
              )}
            </div>

            {/* Product Gallery Thumbnails */}
            <div className="flex gap-2 overflow-x-auto">
              {[product.image, product.image, product.image].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-20 h-20 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-blue-500 transition-all duration-300"
                />
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="space-y-6">
            {/* Rating and Reviews */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600">(127 reviews)</span>
              <div className="flex items-center gap-2 text-green-600">
                <Check className="w-4 h-4" />
                <span className="text-sm font-semibold">In Stock</span>
              </div>
            </div>

            {/* Price Section */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-gray-900">
                  KSh {selectedPrice.toLocaleString()}
                </span>
                {discount > 0 && (
                  <span className="text-xl text-gray-500 line-through">
                    KSh {originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              {discount > 0 && (
                <div className="text-green-600 font-semibold">
                  You save KSh {(originalPrice - selectedPrice).toLocaleString()} ({discount}% off)
                </div>
              )}
            </div>

            {/* Product Variants */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Select Option:</h4>
              <div className="grid grid-cols-1 gap-2">
                {variants.map((variant, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedVariant(index)}
                    className={`p-4 rounded-lg border-2 text-left transition-all duration-300 ${
                      selectedVariant === index
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold">{variant.name}</div>
                        <div className="text-sm text-gray-600">KSh {variant.price.toLocaleString()}</div>
                      </div>
                      {variant.discount > 0 && (
                        <div className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-bold">
                          {variant.discount}% OFF
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Quantity:</h4>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <span className="text-xl font-bold">-</span>
                  </button>
                  <span className="px-4 py-2 font-semibold min-w-[60px] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <span className="text-xl font-bold">+</span>
                  </button>
                </div>
                <div className="text-gray-600">
                  Total: <span className="font-bold text-gray-900">KSh {(selectedPrice * quantity).toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Key Features:</h4>
              <div className="grid grid-cols-1 gap-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-green-600">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-semibold">Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 text-blue-600">
                <Truck className="w-5 h-5" />
                <span className="text-sm font-semibold">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-purple-600">
                <Award className="w-5 h-5" />
                <span className="text-sm font-semibold">ISO Certified</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4">
              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Order via WhatsApp
                <div className="bg-white/20 px-2 py-1 rounded text-sm">ONLINE</div>
              </button>
              
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleAddToCart}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
                
                <button
                  onClick={() => onRequestOffer(product)}
                  className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call to Order
                </button>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-2">
              <div className="flex items-center gap-2 text-green-700">
                <Truck className="w-5 h-5" />
                <span className="font-semibold">Free Delivery | Same Day Delivery Available</span>
              </div>
              <div className="text-sm text-green-600">
                • Free delivery on orders above KSh 50,000
              </div>
              <div className="text-sm text-green-600">
                • Same day delivery within Nairobi
              </div>
            </div>

            {/* Special Discount Notice */}
            {discount > 0 && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="text-blue-700 font-semibold mb-1">Special Discount!</div>
                <div className="text-sm text-blue-600">
                  Order today and get {discount}% off on orders above 50 meters.
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Product Description */}
        <div className="px-6 pb-6">
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Product Description</h3>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                With a great aesthetic value, it is currently one of the most popular and affordable ranges of 
                Mabati. It is manufactured with high standard Mild Steel and Coated with UV Resistant paint. 
                It is available in standard corrugation and is suitable for versatile applications.
              </p>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Specifications:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Material: High-grade steel</li>
                    <li>• Coating: UV resistant paint</li>
                    <li>• Thickness: 0.4mm - 0.7mm</li>
                    <li>• Length: 1m - 6m available</li>
                    <li>• Warranty: 15 years</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Applications:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Residential roofing</li>
                    <li>• Commercial buildings</li>
                    <li>• Industrial structures</li>
                    <li>• Agricultural buildings</li>
                    <li>• Renovation projects</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
