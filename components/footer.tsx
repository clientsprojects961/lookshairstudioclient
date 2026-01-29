'use client';

import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-serif font-bold text-lg">L</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold">Looks</span>
                <span className="text-xs text-gray-400 font-medium">HAIR STUDIO</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium hair styling for everyone. Experience professional excellence in every cut.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-white">Services</h4>
            <ul className="space-y-3">
              {["Men's Haircut", "Women's Haircut", 'Hair Styling', 'Hair Coloring', 'Treatments'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-white">Contact</h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <Phone size={18} className="text-white flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a
                    href="tel:+919473315961"
                    className="text-white hover:text-amber-400 transition-colors font-medium"
                  >
                    +91 94733 15961
                  </a>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Mail size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a
                    href="mailto:info@lookshairsudio.com"
                    className="text-white hover:text-amber-400 transition-colors font-medium text-sm"
                  >
                    info@lookshairsudio.com
                  </a>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Clock size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Hours</p>
                  <p className="text-white font-medium text-sm">Mon - Sun: 9AM - 9PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
            {/* Left */}
            <div className="space-y-1 text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 Looks Hair Studio. All rights reserved. Premium styling, professional care.
              </p>
              <p className="text-xs md:text-sm text-gray-500">
                Developed by <span className="font-semibold text-white">Adarsh Sinha</span> ·{' '}
                <a href="tel:+919473315961" className="hover:text-amber-400 transition-colors">
                  +91 94733 15961
                </a>
              </p>
              <p className="text-xs text-cyan-400 font-medium mt-2">
                ⚠️ Demo Website - Not for Sale
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Linkedin, label: 'LinkedIn' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-amber-600 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Top Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl -z-10" />
    </footer>
  );
}
