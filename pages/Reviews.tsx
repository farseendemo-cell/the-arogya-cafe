import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '../types';

const Reviews: React.FC = () => {
  const reviews: Review[] = [
    { id: 1, name: "Amit K.", rating: 4, text: "Best podi idli in Hubli! So soft and flavourful. The chutney is authentic.", source: "Google" },
    { id: 2, name: "Sneha R.", rating: 5, text: "Healthy breakfast options and great filter coffee. Must visit if you are in Vidyanagar.", source: "Zomato" },
    { id: 3, name: "Rahul D.", rating: 4, text: "Affordable, clean and tasty. Family friendly place. Weekends get a bit crowded though.", source: "Swiggy" },
    { id: 4, name: "Priya S.", rating: 3, text: "Service can improve during rush hours, but food is always amazing. Love the kharabath.", source: "Local Guide" },
    { id: 5, name: "Vikram J.", rating: 5, text: "The ghee thatte idli is out of this world. Melts in your mouth!", source: "Google" },
    { id: 6, name: "Anjali M.", rating: 5, text: "Finally a place that serves proper filter coffee without making it too sugary.", source: "Zomato" },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-stone-800">What Our Customers Say</h1>
          <p className="text-stone-600 mt-4">We love hearing from you!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  {renderStars(review.rating)}
                  <span className="text-xs font-semibold bg-stone-100 text-stone-500 px-2 py-1 rounded">
                    {review.source}
                  </span>
                </div>
                <p className="text-stone-700 italic mb-6">"{review.text}"</p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange font-bold mr-3">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900">{review.name}</h4>
                  <span className="text-xs text-stone-500">Verified Customer</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;