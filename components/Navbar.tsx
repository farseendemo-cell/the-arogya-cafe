import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import { NavLink } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links: NavLink[] = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/menu', label: 'Menu' },
    { path: '/order', label: 'Order Online' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/reviews', label: 'Reviews' },
    { path: '/contact', label: 'Contact' },
  ];

  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-brand-orange font-bold' : 'text-stone-600 hover:text-brand-orange';
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3 group" onClick={closeMenu}>
              <div className="relative w-11 h-11 flex items-center justify-center bg-orange-50 rounded-xl group-hover:bg-brand-orange transition-colors duration-300 shadow-sm border border-orange-100">
                <Leaf size={24} className="text-brand-orange group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-serif font-bold text-2xl tracking-tight text-stone-900 leading-none group-hover:text-brand-orange transition-colors">Arogya</span>
                <span className="text-[10px] font-bold text-stone-500 tracking-[0.3em] uppercase group-hover:text-brand-orange/80 transition-colors">Café</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors duration-200 text-sm font-medium ${isActive(link.path)}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/order"
              className="bg-brand-orange hover:bg-orange-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-600 hover:text-brand-orange focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'bg-orange-50 text-brand-orange'
                    : 'text-stone-600 hover:bg-stone-50 hover:text-brand-orange'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;