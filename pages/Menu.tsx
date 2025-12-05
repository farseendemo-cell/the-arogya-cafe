import React, { useState } from 'react';
import { MenuCategory } from '../types';
import { Search } from 'lucide-react';

const menuData: MenuCategory[] = [
  {
    title: "Popular Items ✨",
    items: [
      { name: "Podi Idli", price: "₹60", isSignature: true, description: "Idlis tossed in spicy powder and ghee" },
      { name: "Ghee Thatte Idli", price: "₹50", isSignature: true, description: "Large flat idli soaked in pure ghee" },
      { name: "Mysore Masala Dosa", price: "₹80", isSignature: true, description: "Spicy red chutney spread inside crisp dosa" },
      { name: "Filter Coffee", price: "₹25", description: "Strong and aromatic South Indian coffee" },
    ]
  },
  {
    title: "Breakfast (South Indian) 🥞",
    items: [
      { name: "Plain Idli", price: "₹40", description: "Steamed rice cakes, served with chutney & sambar" },
      { name: "Thatte Idli", price: "₹45" },
      { name: "Ragi Idli", price: "₹50", description: "Healthy finger millet idlis" },
      { name: "Plain Dosa", price: "₹55" },
      { name: "Masala Dosa", price: "₹70", description: "Stuffed with potato bhaji" },
      { name: "Onion Dosa", price: "₹75" },
      { name: "Set Dosa", price: "₹65", description: "Set of 3 fluffy dosas" },
      { name: "Garlic Roast Dosa", price: "₹85", isSpicy: true },
      { name: "Medu Vada", price: "₹45", description: "Crispy lentil donuts" },
      { name: "Pongal", price: "₹55", description: "Rice and lentil porridge with pepper and ghee" },
      { name: "Upma / Kharabath", price: "₹45" },
      { name: "Avalakki", price: "₹40", description: "Seasoned flattened rice" },
      { name: "Paddu / Paniyaram", price: "₹50", description: "Steamed batter balls with onion and chillies" },
    ]
  },
  {
    title: "Meals & Rice Items 🍚",
    items: [
      { name: "Mini Meals", price: "₹90", description: "Rice, Sambar, Rasam, Poriyal, Curd" },
      { name: "Full South Indian Meals", price: "₹140", description: "Complete feast on a banana leaf" },
      { name: "Curd Rice", price: "₹60", description: "Tempered curd rice with pomegranate" },
      { name: "Lemon Rice", price: "₹60" },
      { name: "Tomato Rice", price: "₹60" },
    ]
  },
  {
    title: "Beverages ☕",
    items: [
      { name: "Filter Coffee", price: "₹25" },
      { name: "Tea", price: "₹20" },
      { name: "Badam Milk", price: "₹35" },
      { name: "Fresh Juice (Seasonal)", price: "₹50" },
    ]
  }
];

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(menuData[0].title);

  return (
    <div className="min-h-screen bg-stone-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-stone-800">Our Menu</h1>
          <p className="text-stone-500 mt-2">Authentic tastes prepared fresh every morning</p>
        </div>

        {/* Category Navigation (Sticky) */}
        <div className="sticky top-20 z-30 bg-stone-50 py-4 mb-8 overflow-x-auto hide-scrollbar border-b border-stone-200">
          <div className="flex space-x-2 min-w-max px-2">
            {menuData.map((category) => (
              <button
                key={category.title}
                onClick={() => {
                  setActiveCategory(category.title);
                  document.getElementById(category.title)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.title
                    ? 'bg-brand-orange text-white shadow-md'
                    : 'bg-white text-stone-600 border border-stone-200 hover:border-brand-orange'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-12 pb-20">
          {menuData.map((category) => (
            <div key={category.title} id={category.title} className="scroll-mt-40">
              <h2 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.items.map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-stone-100 flex justify-between items-start hover:shadow-md transition-shadow">
                    <div>
                      <div className="flex items-center gap-2">
                         {/* Veg Symbol */}
                         <div className="border border-green-600 p-[1px] w-4 h-4 flex items-center justify-center">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                         </div>
                        <h3 className="font-semibold text-stone-800">{item.name}</h3>
                        {item.isSignature && <span className="text-xs bg-orange-100 text-brand-orange px-2 py-0.5 rounded-full font-bold">Must Try</span>}
                        {item.isSpicy && <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-bold">Spicy</span>}
                      </div>
                      {item.description && <p className="text-sm text-stone-500 mt-1">{item.description}</p>}
                    </div>
                    <span className="font-bold text-brand-orange ml-4">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;