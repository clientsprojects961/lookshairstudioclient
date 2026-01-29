'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function GallerySection() {
  const [showMore, setShowMore] = useState(false);

  const allImages = [
    {
      src: '/images/salon-1.jpg',
      alt: 'Salon interior - styling stations',
    },
    {
      src: '/images/salon-2.jpg',
      alt: 'Long wavy hair styling',
    },
    {
      src: '/images/salon-3.jpg',
      alt: 'Mens modern haircut - professional styling',
    },
    {
      src: '/images/salon-4.jpg',
      alt: 'Professional haircut in session',
    },
    {
      src: '/images/salon-5.jpg',
      alt: "Premium products display",
    },
    {
      src: '/images/salon-6.jpg',
      alt: 'Salon entrance with decoration',
    },
    {
      src: '/images/salon-7.jpg',
      alt: 'Professional mirrors and lighting',
    },
    {
      src: '/images/salon-8.jpg',
      alt: 'Salon interior - white flooring',
    },
  ];

  const displayedImages = showMore ? allImages : allImages.slice(0, 6);

  return (
    <section id="gallery" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gray-100/30 rounded-full -ml-48 -mt-48 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="space-y-6 mb-16 md:mb-20 animate-fade-in">
          <div className="inline-block">
            <span className="px-4 py-2 bg-gray-900 text-white rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider">
              Gallery
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-black leading-tight">
            Showcase of <span className="text-gray-400">Excellence</span>
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl">
            Browse through our gallery showcasing the exceptional work of our stylists and the beautiful results we deliver to every client.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {displayedImages.map((image, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl aspect-square shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <img
                src={image.src || '/placeholder.svg'}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 md:p-6">
                <p className="text-white font-semibold text-sm md:text-base">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showMore && (
          <div className="flex justify-center animate-fade-in">
            <button
              onClick={() => setShowMore(true)}
              className="group px-8 md:px-10 py-3.5 md:py-4 border-2 border-black text-black rounded-full font-bold text-base md:text-lg hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              Show More Gallery
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        )}

        {showMore && (
          <div className="flex justify-center animate-fade-in">
            <button
              onClick={() => setShowMore(false)}
              className="px-8 md:px-10 py-3.5 md:py-4 border-2 border-black text-black rounded-full font-bold text-base md:text-lg hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
