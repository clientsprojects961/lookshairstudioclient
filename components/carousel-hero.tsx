'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface CarouselSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    image: '/images/salon-1.jpg',
    title: 'Premium Salon Experience',
    subtitle: 'Modern luxury styling',
  },
  {
    id: 2,
    image: '/images/salon-2.jpg',
    title: 'Professional Mirrors',
    subtitle: 'State-of-the-art grooming stations',
  },
  {
    id: 3,
    image: '/images/salon-3.jpg',
    title: 'Beautiful Ambiance',
    subtitle: 'Inspiring salon environment',
  },
  {
    id: 4,
    image: '/images/salon-4.jpg',
    title: 'Expert Styling',
    subtitle: 'Trending haircuts & looks',
  },
  {
    id: 5,
    image: '/images/salon-5.jpg',
    title: 'Hair Transformation',
    subtitle: 'Professional results guaranteed',
  },
  {
    id: 6,
    image: '/images/salon-6.jpg',
    title: 'Premium Products',
    subtitle: 'Top brands for quality care',
  },
  {
    id: 7,
    image: '/images/salon-7.jpg',
    title: 'Relaxing Environment',
    subtitle: 'Enjoy a calm and luxurious space',
  },
  {
    id: 8,
    image: '/images/salon-8.jpg',
    title: 'Detail-Oriented Styling',
    subtitle: 'Every cut finished with precision',
  },
];

export default function CarouselHero() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrent((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setCurrent(index);
    setAutoPlay(false);
    setTimeout(() => {
      setIsTransitioning(false);
      setAutoPlay(true);
    }, 300);
  };

  const nextSlide = () => {
    setAutoPlay(false);
    setIsTransitioning(true);
    setCurrent((prev) => (prev + 1) % slides.length);
    setTimeout(() => {
      setIsTransitioning(false);
      setAutoPlay(true);
    }, 300);
  };

  const prevSlide = () => {
    setAutoPlay(false);
    setIsTransitioning(true);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => {
      setIsTransitioning(false);
      setAutoPlay(true);
    }, 300);
  };

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden pt-[124px] md:pt-[144px]">
      {/* Main Carousel Container */}
      <div className="relative w-full h-[calc(100vh-80px)] md:h-screen">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <img
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
              <div
                className={`text-center transition-all duration-700 ${
                  index === current
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
              >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-3 md:mb-4 text-balance">
                  {slide.title}
                </h2>
                <p className="text-base md:text-xl text-white/90 font-light tracking-wide">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 group"
          aria-label="Previous slide"
        >
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition-all duration-300 group-hover:scale-110">
            <svg
              className="w-6 h-6 md:w-7 md:h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 group"
          aria-label="Next slide"
        >
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition-all duration-300 group-hover:scale-110">
            <svg
              className="w-6 h-6 md:w-7 md:h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:gap-3 flex-wrap justify-center">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-500 rounded-full ${
                index === current
                  ? 'bg-white w-8 md:w-10 h-2 md:h-2.5'
                  : 'bg-white/40 w-2 md:w-2.5 h-2 md:h-2.5 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-white px-4 md:px-8 py-12 md:py-16 text-center">
        <div className="max-w-2xl mx-auto animate-fade-in">
          <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 uppercase tracking-widest font-medium">
            Premium Salon Experience
          </p>
          <h3 className="text-2xl md:text-4xl font-serif font-bold text-black mb-4 md:mb-6 text-balance">
            Transform Your Look with Expert Styling
          </h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-8 md:mb-10">
            Experience professional haircuts, styling, and grooming services in our
            modern, luxurious salon environment.
          </p>
          <button className="px-6 md:px-8 py-2.5 md:py-3 bg-black text-white rounded-full font-medium text-sm md:text-base hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
