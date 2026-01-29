'use client';

import React from "react"

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-[44px] md:top-[48px] left-0 right-0 z-40 bg-white/98 backdrop-blur-lg border-b border-gray-200/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-gray-800/30 transition-all duration-300 transform group-hover:scale-110">
              <span className="text-white font-serif font-bold text-lg md:text-xl">L</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl md:text-2xl font-bold text-black">Looks</span>
              <span className="text-xs md:text-sm text-gray-600 font-light tracking-wider">HAIR STUDIO</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2">
            <a
              href="#booking"
              onClick={(e) => scrollToSection(e, '#booking')}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors duration-300 relative group"
            >
              Booking
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#gallery"
              onClick={(e) => scrollToSection(e, '#gallery')}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors duration-300 relative group"
            >
              Gallery
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#testimonials"
              onClick={(e) => scrollToSection(e, '#testimonials')}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors duration-300 relative group"
            >
              Reviews
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, '#about')}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors duration-300 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden sm:block">
            <a
              href="#booking"
              className="px-6 py-2 md:px-8 md:py-2.5 bg-black text-white rounded-full text-sm md:text-base font-semibold hover:bg-gray-900 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 hover:scale-105 active:scale-95"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-all duration-300 active:scale-95"
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-6 space-y-2 border-t border-gray-200/30 pt-4 animate-fade-in">
            <a
              href="#booking"
              onClick={(e) => scrollToSection(e, '#booking')}
              className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-300"
            >
              Booking
            </a>
            <a
              href="#gallery"
              onClick={(e) => scrollToSection(e, '#gallery')}
              className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-300"
            >
              Gallery
            </a>
            <a
              href="#testimonials"
              onClick={(e) => scrollToSection(e, '#testimonials')}
              className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-300"
            >
              Reviews
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, '#about')}
              className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#booking"
              onClick={(e) => scrollToSection(e, '#booking')}
              className="block mt-3 px-5 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-300 text-center"
            >
              Book Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
