import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-stone-800">Get In Touch</h1>
          <p className="text-stone-600 mt-4">Visit us or reach out for queries.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Info Side */}
          <div className="space-y-8">
            {/* Contact Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 space-y-6">
              <h2 className="text-2xl font-bold text-stone-800">Contact Details</h2>
              
              <div className="flex items-start space-x-4">
                <div className="bg-orange-50 p-3 rounded-lg text-brand-orange">
                  <MapPin />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900">Location</h3>
                  <p className="text-stone-600">Arogya Café, Tollankere Road,<br/>Vidyanagar, Hubballi, Karnataka 580021</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-50 p-3 rounded-lg text-brand-orange">
                  <Phone />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900">Phone</h3>
                  <p className="text-stone-600">+91 XXXXX XXXXX</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-50 p-3 rounded-lg text-brand-orange">
                  <Mail />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900">Email</h3>
                  <p className="text-stone-600">support@arogyacafe.com</p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-stone-900 text-white p-8 rounded-2xl shadow-sm space-y-6">
              <div className="flex items-center space-x-3">
                <Clock className="text-brand-orange" />
                <h2 className="text-2xl font-bold">Opening Hours</h2>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between border-b border-stone-700 pb-2">
                  <span>Monday – Sunday</span>
                  <span className="font-bold text-brand-orange">7:00 AM – 11:30 PM</span>
                </div>
                <p className="text-sm text-stone-400 pt-2">Open on all public holidays.</p>
              </div>
            </div>

            {/* Socials */}
            <div className="flex justify-center space-x-6">
               <a 
                 href="https://www.instagram.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="p-4 bg-white rounded-full text-stone-600 hover:text-brand-orange hover:shadow-md transition-all"
                 aria-label="Instagram"
               >
                  <Instagram />
               </a>
               <a 
                 href="https://www.facebook.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="p-4 bg-white rounded-full text-stone-600 hover:text-blue-600 hover:shadow-md transition-all"
                 aria-label="Facebook"
               >
                  <Facebook />
               </a>
               <a 
                 href="https://www.google.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="p-4 bg-white rounded-full text-stone-600 hover:text-green-600 hover:shadow-md transition-all"
                 aria-label="Website"
               >
                  <Globe />
               </a>
            </div>
          </div>

          {/* Map Side */}
          <div className="h-[500px] lg:h-auto bg-stone-200 rounded-2xl overflow-hidden shadow-inner relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.636603789063!2d75.122!3d15.344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDIwJzM4LjQiTiA3NcKwMDcnMTkuMiJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
            {/* Placeholder overlay if iframe doesn't load visually well in preview */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-stone-100/10">
              <span className="sr-only">Map View</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;