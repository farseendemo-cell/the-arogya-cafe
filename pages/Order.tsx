import React from 'react';
import { Phone } from 'lucide-react';

const Order: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-12">
        
        <div>
          <h1 className="text-4xl font-bold text-stone-800 mb-4">Order Your Favourite Food</h1>
          <p className="text-xl text-stone-600">Enjoy Arogya Café's delicacies from the comfort of your home.</p>
        </div>

        {/* Delivery Platforms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a 
            href="https://www.swiggy.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-stone-200"
          >
            <div className="h-16 flex items-center justify-center mb-4">
              <span className="text-3xl font-black text-orange-500">SWIGGY</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-stone-800">Order via Swiggy</h3>
            <p className="text-stone-500 mb-6">Fast delivery directly to your doorstep.</p>
            <span className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full font-semibold group-hover:bg-orange-600 transition-colors">Order Now</span>
          </a>

          <a 
            href="https://www.zomato.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-stone-200"
          >
             <div className="h-16 flex items-center justify-center mb-4">
              <span className="text-3xl font-black text-red-600 italic">zomato</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-stone-800">Order via Zomato</h3>
            <p className="text-stone-500 mb-6">Get great offers and live tracking.</p>
            <span className="inline-block bg-red-600 text-white px-6 py-2 rounded-full font-semibold group-hover:bg-red-700 transition-colors">Order Now</span>
          </a>
        </div>

        {/* Takeaway Section */}
        <div className="bg-brand-orange text-white rounded-3xl p-8 md:p-12 shadow-xl mt-12 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Call for Takeaway / Pickup</h2>
            <p className="text-lg mb-8 opacity-90">Skip the queue! Call us to place your order and pick it up fresh.</p>
            
            <a href="tel:+919876543210" className="inline-flex items-center bg-white text-brand-orange px-8 py-4 rounded-full text-xl font-bold hover:bg-stone-100 transition-colors">
              <Phone className="mr-3" /> +91 98765 43210
            </a>
          </div>
          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-black opacity-10 rounded-full"></div>
        </div>

      </div>
    </div>
  );
};

export default Order;