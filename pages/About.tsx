import React from 'react';
import { Target, Users, Coffee, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-stone-800">Our Story</h1>
          <div className="w-20 h-1 bg-brand-orange mx-auto"></div>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Arogya Café was created with one simple goal: To serve healthy, tasty and wholesome South Indian food that feels like home.
          </p>
        </div>

        {/* Content Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
             <img 
              src="https://picsum.photos/seed/restaurant/600/400" 
              alt="Inside Arogya Café" 
              className="rounded-2xl shadow-xl w-full object-cover h-80"
            />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-2xl font-bold text-stone-800">Heart of Vidyanagar</h2>
            <p className="text-stone-600 leading-relaxed">
              Located in the heart of Vidyanagar, Hubballi, we are known for our fresh breakfast, light meals and signature dishes that customers love. We wanted to create a space where families could gather, students could grab a quick healthy bite, and everyone could enjoy the authentic flavors of Karnataka without worrying about quality.
            </p>
          </div>
        </div>

        {/* Philosophy Cards */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100">
          <h2 className="text-2xl font-bold text-center mb-10 text-stone-800">Our Philosophy</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-lg text-brand-green">
                <LeafIcon />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Fresh Ingredients</h3>
                <p className="text-stone-500 text-sm">Good food begins with the best sourced produce.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 p-3 rounded-lg text-brand-orange">
                <Target size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Authentic Recipes</h3>
                <p className="text-stone-500 text-sm">Traditional taste maintained through strict recipes.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                <Heart size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Hygiene First</h3>
                <p className="text-stone-500 text-sm">Cleanliness and health are non-negotiable for us.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-yellow-100 p-3 rounded-lg text-yellow-600">
                <Users size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Happy Dining</h3>
                <p className="text-stone-500 text-sm">Every customer deserves a smile and a great meal.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Special Features */}
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold text-stone-800">What Makes Us Special</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {['Healthy options like Ragi Idli', 'Consistent Quality', 'Pocket-friendly Prices', 'Family Environment'].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                <div className="text-brand-orange mb-3 flex justify-center">
                  <Coffee size={28} />
                </div>
                <h3 className="font-medium text-stone-800">{item}</h3>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

const LeafIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
)

export default About;