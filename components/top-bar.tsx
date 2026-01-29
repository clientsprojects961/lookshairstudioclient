'use client';

import { Phone, Mail, MapPin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-cyan-500 text-white border-b border-cyan-600/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 py-2.5 md:py-3 text-xs md:text-sm h-[44px] md:h-[48px]">
          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 md:gap-6">
            <a
              href="tel:+919473315961"
              className="flex items-center gap-1.5 hover:text-cyan-100 transition-colors duration-200"
            >
              <Phone size={14} className="flex-shrink-0" />
              <span className="whitespace-nowrap">+91 94733 15961</span>
            </a>
            <a
              href="mailto:xyz@gmail.com"
              className="flex items-center gap-1.5 hover:text-cyan-100 transition-colors duration-200"
            >
              <Mail size={14} className="flex-shrink-0" />
              <span className="whitespace-nowrap">xyz@gmail.com</span>
            </a>
            <div className="hidden md:flex items-center gap-1.5">
              <MapPin size={14} className="flex-shrink-0" />
              <span className="whitespace-nowrap">123 Fashion Street, Downtown, City - 123456</span>
            </div>
          </div>

          {/* Demo Notice */}
          <div className="text-[10px] sm:text-xs font-medium bg-cyan-600/30 px-2 sm:px-3 py-1 rounded-full border border-cyan-400/30 whitespace-nowrap">
            Demo Website - Not for Sale
          </div>
        </div>
      </div>
    </div>
  );
}

