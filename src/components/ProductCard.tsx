import { ShoppingCart, MessageCircle, Sparkles, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onRequestOffer: (product: Product) => void;
  onProductClick: (product: Product) => void;
}

export default function ProductCard({ product, onRequestOffer, onProductClick }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleBuyNow = () => {
    onProductClick(product);
  };

  const isOnSale = product.tags?.includes('sale') || Math.random() > 0.7; // Some products on sale
  const discount = isOnSale ? Math.floor(Math.random() * 30) + 10 : 0;

  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        {isOnSale && (
          <div className="absolute top-3 left-3 z-10">
            <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-bounce flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              {discount}% OFF
            </div>
          </div>
        )}
        
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-48 object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          {isOnSale && (
            <TrendingUp className="w-5 h-5 text-green-500 animate-pulse" />
          )}
        </div>
        
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col">
            {isOnSale && (
              <span className="text-sm text-gray-400 line-through">
                KSh {(product.price * (1 + discount/100)).toLocaleString()}
              </span>
            )}
            <span className="text-2xl font-bold text-gray-900">
              KSh {product.price.toLocaleString()}
            </span>
            {isOnSale && (
              <span className="text-green-600 text-sm font-semibold">
                Save KSh {(product.price * discount/100).toLocaleString()}!
              </span>
            )}
          </div>
          
          {product.tags && (
            <div className="flex flex-wrap gap-1">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-2 py-1 text-xs rounded-full font-medium ${
                    tag === 'sale' 
                      ? 'bg-red-100 text-red-600' 
                      : 'bg-blue-100 text-blue-600'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleBuyNow}
            className="flex-1 px-3 md:px-4 py-2 md:py-3 rounded-lg flex items-center justify-center gap-2 font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg"
          >
            <ShoppingCart className="w-4 h-4" />
            Buy Now
          </button>
          
          <button
            onClick={() => onRequestOffer(product)}
            className="sm:flex-none bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-3 md:px-4 py-2 md:py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base font-semibold"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="sm:hidden">Get Quote</span>
            <span className="hidden sm:inline">Quote</span>
          </button>
        </div>
      </div>
    </div>
  );
}