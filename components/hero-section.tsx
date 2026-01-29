'use client';

import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-24 pb-20 bg-gradient-to-br from-background via-muted to-background overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="space-y-4">
            <div className="inline-block">
              <span className="px-4 py-2 bg-cyan-500/10 text-cyan-700 rounded-full text-sm font-semibold">
                ✨ Premium Hair Styling Studio
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary leading-tight text-balance">
              Elevate Your <span className="text-cyan-500">Look</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-xl">
              Experience professional haircuts and styling in a luxurious setting. Our expert stylists deliver exceptional results for every client.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#booking"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-full font-bold text-lg hover:shadow-xl hover:shadow-cyan-400/40 transition-all duration-300 hover:-translate-y-1 text-center"
            >
              Book Appointment
            </a>
            <a
              href="#gallery"
              className="px-8 py-4 border-2 border-primary text-primary rounded-full font-bold text-lg hover:bg-muted transition-all duration-300 text-center"
            >
              View Gallery
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
            <div>
              <p className="text-3xl font-bold text-primary">500+</p>
              <p className="text-foreground/60 text-sm">Happy Clients</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">8+</p>
              <p className="text-foreground/60 text-sm">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">10+</p>
              <p className="text-foreground/60 text-sm">Expert Stylists</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/images/salon-2.jpg"
              alt="Premium haircut styling"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl shadow-xl p-6 max-w-xs border border-border">
            <p className="font-bold text-primary text-lg">Professional Results</p>
            <p className="text-foreground/60 text-sm">Quality styling you can trust</p>
          </div>
        </div>
      </div>
    </section>
  );
}
