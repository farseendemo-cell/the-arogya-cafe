import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-white font-serif">Arogya Café</h3>
            <p className="text-sm leading-relaxed text-stone-400">
              Where pure taste, fresh ingredients, and authentic South Indian flavours come together.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-brand-orange transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-brand-orange transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-brand-orange transition-colors"
                aria-label="Website"
              >
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-brand-orange transition-colors">About Us</Link></li>
              <li><Link to="/menu" className="hover:text-brand-orange transition-colors">Menu</Link></li>
              <li><Link to="/gallery" className="hover:text-brand-orange transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-brand-orange transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal/Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/order" className="hover:text-brand-orange transition-colors">Order Online</Link></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Location Short */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Visit Us</h4>
            <div className="flex items-start space-x-2 text-sm text-stone-400">
              <MapPin size={18} className="mt-0.5 flex-shrink-0 text-brand-orange" />
              <p>
                Tollankere Road, Vidyanagar<br />
                Hubballi, Karnataka 580021
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-xs text-stone-500">
          <p>© 2025 Arogya Café, Hubballi. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;