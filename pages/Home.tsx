import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Clock, Award, Heart, ArrowRight } from 'lucide-react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: 'fade-up' | 'scale-up';
}

// Reusable component to animate elements when they scroll into view
const RevealOnScroll = ({ children, className = "", delay = 0, variant = 'fade-up' }: RevealOnScrollProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getTransformClasses = () => {
    if (variant === 'scale-up') {
      return isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90";
    }
    return isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10";
  };

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out transform ${getTransformClasses()}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Home: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        // Limit calculation to the hero section area + buffer to optimize
        if (scrolled < 1000) {
          parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const signatureDishes = [
    { name: "Podi Idli", image: "https://picsum.photos/seed/idli/400/300", desc: "Soft idlis tossed in spicy gunpowder & ghee." },
    { name: "Masala Dosa", image: "https://picsum.photos/seed/dosa/400/300", desc: "Crispy golden crepe with potato masala." },
    { name: "Filter Coffee", image: "https://picsum.photos/seed/coffee/400/300", desc: "Classic South Indian brew." },
    { name: "Pongal & Vada", image: "https://picsum.photos/seed/pongal/400/300", desc: "Comforting ghee pongal with crispy vada." },
  ];

  const features = [
    { icon: <Leaf className="text-brand-green" />, title: "100% Pure Vegetarian", desc: "No meat, no eggs, just pure plant-based goodness." },
    { icon: <Heart className="text-red-500" />, title: "Healthy & Hygienic", desc: "Prepared in a clean kitchen with fresh ingredients." },
    { icon: <Award className="text-yellow-600" />, title: "Authentic Taste", desc: "Recipes passed down through generations." },
    { icon: <Clock className="text-blue-600" />, title: "Quick Service", desc: "Delicious food served fast without compromising quality." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center px-4 overflow-hidden group">
        {/* Background Overlay with Parallax */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div 
            ref={parallaxRef}
            className="absolute w-full h-[150%] -top-[50%] left-0 will-change-transform"
          >
            <img 
              src="https://picsum.photos/seed/southindian/1920/1080" 
              alt="South Indian Feast" 
              className="w-full h-full object-cover animate-slow-zoom"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in-up">
            Welcome to <span className="text-brand-orange">Arogya Café</span>
          </h1>
          <p className="text-lg md:text-2xl font-light text-stone-200 animate-fade-in-up animation-delay-200">
            Where pure taste, fresh ingredients, and authentic South Indian flavours come together.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Link to="/menu" className="bg-brand-orange hover:bg-orange-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1">
              View Menu
            </Link>
            <Link to="/order" className="bg-white hover:bg-stone-100 text-brand-dark px-8 py-3 rounded-full text-lg font-semibold transition-all shadow-lg transform hover:-translate-y-1">
              Order Online
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy / Intro */}
      <section className="py-16 px-4 bg-brand-light">
        <RevealOnScroll className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-stone-800">Discover the Joy of Homely Food</h2>
          <p className="text-stone-600 text-lg leading-relaxed">
            Made fresh every day, our dishes are crafted to bring you the authentic taste of Vidyanagar.
            Whether you are looking for a quick breakfast or a relaxed meal, Arogya Café is your go-to spot for health and hygiene.
          </p>
        </RevealOnScroll>
      </section>

      {/* Why People Love Us */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <RevealOnScroll className="text-center mb-12">
          <h2 className="text-3xl font-bold text-stone-800">Why People Love Us</h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto mt-4"></div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <RevealOnScroll key={idx} delay={idx * 100}>
              <div className="h-full bg-white p-6 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-stone-100 text-center flex flex-col items-center group cursor-default">
                <div className="mb-4 p-3 bg-stone-50 rounded-full group-hover:bg-brand-orange/10 transition-colors">
                  {React.cloneElement(feature.icon as React.ReactElement<any>, { size: 32, className: (feature.icon as React.ReactElement<any>).props.className + " group-hover:scale-110 transition-transform" })}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-stone-600">{feature.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="py-16 px-4 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-brand-orange">Signature Dishes</h2>
              <p className="text-stone-400 mt-2">Customer favorites you must try.</p>
            </div>
            <Link to="/menu" className="hidden sm:flex items-center text-brand-orange hover:text-white transition-colors group">
              View Full Menu <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {signatureDishes.map((dish, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100} variant="scale-up">
                <div className="group relative overflow-hidden rounded-lg bg-stone-800 shadow-lg hover:shadow-orange-900/20 transition-all duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={dish.image} 
                      alt={dish.name} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>
                  <div className="p-4 relative">
                    <h3 className="text-xl font-bold mb-1">{dish.name}</h3>
                    <p className="text-sm text-stone-400">{dish.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
             <Link to="/menu" className="inline-flex items-center text-brand-orange font-semibold">
              View Full Menu <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-orange text-white text-center px-4 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>

        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Craving Something Delicious?</h2>
          <p className="text-xl mb-8 opacity-90 relative z-10">Order now or visit us for a delightful experience.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link to="/order" className="bg-white text-brand-orange px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-stone-100 transition-all transform hover:-translate-y-1 hover:shadow-xl">
                Order Online
              </Link>
              <Link to="/contact" className="bg-orange-800 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-orange-900 transition-all transform hover:-translate-y-1 hover:shadow-xl">
                Visit Us
              </Link>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
};

export default Home;