import { X, Plus, Minus, ShoppingBag, Phone, Sparkles } from 'lucide-react';
import type { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
  onRequestOrder: () => void;
}

export default function Cart({ items, onUpdateQuantity, onRemove, onRequestOrder }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const savings = total > 50000 ? 5000 : 0; // Free delivery savings

  if (items.length === 0) {
    return (
      <div className="text-center py-12 animate-fade-in">
        <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
        <p className="text-sm text-gray-400">Add some quality building materials to get started!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 animate-slide-up">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
          <ShoppingBag className="w-8 h-8 text-blue-600" />
          Shopping Cart
        </h2>
        {savings > 0 && (
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 animate-bounce">
            <Sparkles className="w-4 h-4" />
            Free Delivery Unlocked!
          </div>
        )}
      </div>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.product.id} className="flex items-center gap-4 py-4 border-b">
            <img
              src={item.product.image}
              alt={item.product.name}
              className="w-20 h-20 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{item.product.name}</h3>
              <p className="text-gray-600">KSh {item.product.price.toLocaleString()}</p>
            </div>
            <div className="flex items-center gap-3">
              {/* Modern Quantity Controls */}
              <div className="flex items-center bg-gray-100 rounded-lg">
                <button
                  onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                  className="p-2 hover:bg-gray-200 rounded-l-lg transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 font-semibold min-w-[50px] text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                  className="p-2 hover:bg-gray-200 rounded-r-lg transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <button
                onClick={() => onRemove(item.product.id)}
                className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Cart Summary */}
      <div className="mt-8 bg-gray-50 p-6 rounded-xl">
        <div className="space-y-3">
          <div className="flex justify-between text-lg">
            <span>Subtotal:</span>
            <span>KSh {total.toLocaleString()}</span>
          </div>
          
          {savings > 0 ? (
            <div className="flex justify-between text-green-600 font-semibold">
              <span>Delivery:</span>
              <span className="line-through text-gray-400 mr-2">KSh 5,000</span>
              <span>FREE</span>
            </div>
          ) : (
            <div className="flex justify-between text-gray-600">
              <span>Delivery:</span>
              <span>KSh 5,000</span>
            </div>
          )}
          
          <hr className="my-3" />
          
          <div className="flex justify-between text-2xl font-bold text-gray-900">
            <span>Total:</span>
            <span>KSh {(total + (savings > 0 ? 0 : 5000)).toLocaleString()}</span>
          </div>
          
          {savings > 0 && (
            <div className="text-center text-green-600 font-semibold text-sm">
              You saved KSh {savings.toLocaleString()} on delivery!
            </div>
          )}
        </div>
        
        <button
          onClick={onRequestOrder}
          className="w-full mt-6 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
        >
          <Phone className="w-5 h-5" />
          Order via WhatsApp
        </button>
        
        <p className="text-center text-gray-500 text-sm mt-3">
          Secure ordering through WhatsApp • Quick response guaranteed
        </p>
      </div>
    </div>
  );
}