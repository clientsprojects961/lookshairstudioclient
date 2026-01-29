'use client';

import { Sparkles, Scissors, Users } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      icon: Scissors,
      title: 'Professional Expertise',
      description: 'Our stylists bring 8+ years of expertise in crafting perfect haircuts and styles tailored to your needs.',
    },
    {
      icon: Users,
      title: 'Unisex Salon',
      description: 'Serving all clients with dedicated expertise in mens, womens, and specialized styling techniques.',
    },
    {
      icon: Sparkles,
      title: 'Premium Products',
      description: 'Using only high-quality hair products and professional-grade treatments for lasting results.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gray-100/20 rounded-full -ml-48 -mt-48 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              <div className="aspect-square rounded-lg md:rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
                <img
                  src="/images/salon-1.jpg"
                  alt="Salon interior"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="aspect-square rounded-lg md:rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 translate-y-4 md:translate-y-6">
                <img
                  src="/images/salon-2.jpg"
                  alt="Professional mirrors and stations"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 md:-bottom-8 -right-4 md:-right-8 bg-black text-white rounded-lg md:rounded-2xl shadow-2xl p-5 md:p-8 animate-slide-in-right">
              <p className="text-xs md:text-sm text-gray-300 font-medium">Trusted by</p>
              <p className="text-2xl md:text-4xl font-bold text-white mt-1">500+</p>
              <p className="text-xs md:text-sm text-gray-300 font-medium mt-1">Happy Clients</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 md:space-y-10 animate-slide-in-left">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-black text-white rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider">
                  About Us
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-black leading-tight">
                Your Premier Hair Styling Destination
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                At Looks Hair Studio, we believe that great hair begins with great care. Our team of experienced stylists combines artistry with technical expertise to deliver exceptional results every time.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4 p-4 md:p-5 rounded-lg hover:bg-gray-100 transition-all duration-300 group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-black group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-black text-sm md:text-base">{feature.title}</p>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#booking"
              className="inline-block px-6 md:px-8 py-2.5 md:py-3 bg-black text-white rounded-full font-bold text-sm md:text-base hover:bg-gray-900 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 hover:scale-105 active:scale-95"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
