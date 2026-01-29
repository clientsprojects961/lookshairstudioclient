'use client';

import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Software Engineer',
      content:
        'Exceptional haircut! The stylists really understand modern trends and execute them perfectly. Best salon in the city.',
      rating: 5,
      image: '/images/salon-3.jpg',
    },
    {
      name: 'Priya Kapoor',
      role: 'Fashion Designer',
      content:
        'I came in for a simple trim and left with a complete transformation. The attention to detail is incredible. Highly recommend!',
      rating: 5,
      image: '/images/salon-4.jpg',
    },
    {
      name: 'Arjun Verma',
      role: 'Business Owner',
      content:
        'Professional service, clean environment, and outstanding results. This is my go-to place for haircuts. Worth every penny!',
      rating: 5,
      image: '/images/salon-5.jpg',
    },
    {
      name: 'Neha Singh',
      role: 'Journalist',
      content:
        'The stylists here have helped me maintain my look consistently. They remember my preferences and always deliver excellent results.',
      rating: 5,
      image: '/images/salon-6.jpg',
    },
    {
      name: 'Vikram Patel',
      role: 'Marketing Manager',
      content:
        'Great atmosphere, friendly staff, and amazing haircuts. I have been a loyal customer for over 2 years now.',
      rating: 5,
      image: '/images/salon-7.jpg',
    },
    {
      name: 'Anjali Gupta',
      role: 'Entrepreneur',
      content:
        'The entire experience from booking to styling is seamless. Professional stylists who truly care about their craft.',
      rating: 5,
      image: '/images/salon-8.jpg',
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-100/30 rounded-full -mr-48 -mb-48 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="space-y-6 mb-16 md:mb-20 text-center animate-fade-in">
          <div className="inline-block mx-auto">
            <span className="px-4 py-2 bg-black text-white rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider">
              Client Reviews
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-black leading-tight">
            What Our <span className="text-gray-400">Clients Say</span>
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have experienced the Looks Hair Studio difference.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 bg-white rounded-xl border border-gray-200 hover:border-black hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" className="text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 italic text-sm md:text-base">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                  <img
                    src={testimonial.image || '/placeholder.svg'}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-black text-sm md:text-base">{testimonial.name}</p>
                  <p className="text-gray-600 text-xs md:text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center space-y-6 md:space-y-8 animate-fade-in">
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-black leading-tight">
            Join Our Happy Clients Today
          </h3>
          <a
            href="#booking"
            className="inline-block px-6 md:px-8 py-2.5 md:py-3 bg-black text-white rounded-full font-bold text-sm md:text-base hover:bg-gray-900 transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 hover:scale-105 active:scale-95"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}
