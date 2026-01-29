'use client';

import { useEffect, useState } from 'react';
import TopBar from '@/components/top-bar';
import Navbar from '@/components/navbar';
import CarouselHero from '@/components/carousel-hero';
import BookingSection from '@/components/booking-section';
import AboutSection from '@/components/about-section';
import GallerySection from '@/components/gallery-section';
import VideoTestimonials from '@/components/video-testimonials';
import TestimonialsSection from '@/components/testimonials-section';
import FloatingWhatsApp from '@/components/floating-whatsapp';
import Footer from '@/components/footer';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <main className="overflow-hidden bg-white">
      <TopBar />
      <Navbar />
      <CarouselHero />
      <BookingSection />
      <AboutSection />
      <GallerySection />
      <VideoTestimonials />
      <TestimonialsSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
