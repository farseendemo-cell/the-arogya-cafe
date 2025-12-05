import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    "https://picsum.photos/seed/dosa1/600/600",
    "https://picsum.photos/seed/interior1/600/400",
    "https://picsum.photos/seed/coffee1/400/600",
    "https://picsum.photos/seed/idli1/600/600",
    "https://picsum.photos/seed/vada/600/400",
    "https://picsum.photos/seed/kitchen/400/500",
    "https://picsum.photos/seed/meal/600/600",
    "https://picsum.photos/seed/people/600/400",
  ];

  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-stone-800">Inside Arogya Café</h1>
          <p className="text-stone-600 mt-4">A glimpse into our ambience, fresh preparations, and delicious dishes.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <div key={index} className="break-inside-avoid rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <img src={src} alt={`Gallery ${index}`} className="w-full h-auto transform hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;