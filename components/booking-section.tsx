'use client';

import React from "react"

import { useState } from 'react';
import { Calendar, Clock, User, Phone } from 'lucide-react';

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    service: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Create WhatsApp message
      const whatsappNumber = '919473315961'; // Indian format with country code
      const message = encodeURIComponent(
        `Hello! I'd like to book an appointment at Looks Hair Studio.\n\n` +
        `Name: ${formData.name}\n` +
        `Phone: ${formData.phone}\n` +
        `Email: ${formData.email}\n` +
        `Preferred Date: ${formData.date}\n` +
        `Preferred Time: ${formData.time}\n` +
        `Service: ${formData.service || 'General Consultation'}\n\n` +
        `Please confirm my appointment. Thank you!`
      );

      // Open WhatsApp
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');

      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        service: '',
      });
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="booking" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-100/30 rounded-full -mr-48 -mt-48 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-sm md:text-base uppercase tracking-widest font-semibold text-gray-600">Reserve Now</p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-black leading-tight">
                Book Your <span className="text-gray-400">Perfect</span> Look
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Reserve your slot with our expert stylists. Choose your preferred date and time, and we'll confirm your appointment instantly via WhatsApp.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                { icon: Calendar, title: 'Flexible Scheduling', desc: 'Book at your convenience' },
                { icon: Clock, title: 'Quick Confirmation', desc: 'Instant WhatsApp confirmation' },
                { icon: User, title: 'Expert Stylists', desc: '8+ years of experience' },
              ].map((benefit, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gray-900 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-black">{benefit.title}</p>
                    <p className="text-gray-600 text-sm">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <div className="animate-slide-in-right">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="group">
                  <label className="block text-sm font-bold text-black mb-3">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 border border-gray-200 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all duration-300 group-hover:border-gray-400"
                    placeholder="John Doe"
                  />
                </div>

                {/* Phone */}
                <div className="group">
                  <label className="block text-sm font-bold text-black mb-3">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 border border-gray-200 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all duration-300 group-hover:border-gray-400"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Email */}
                <div className="group">
                  <label className="block text-sm font-bold text-black mb-3">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 border border-gray-200 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all duration-300 group-hover:border-gray-400"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Date */}
                <div className="group">
                  <label className="block text-sm font-bold text-black mb-3">Preferred Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 border border-gray-200 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all duration-300 group-hover:border-gray-400"
                  />
                </div>

                {/* Time */}
                <div className="group">
                  <label className="block text-sm font-bold text-black mb-3">Preferred Time</label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 border border-gray-200 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all duration-300 group-hover:border-gray-400"
                  >
                    <option value="">Select a time</option>
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                    <option value="05:00 PM">05:00 PM</option>
                    <option value="06:00 PM">06:00 PM</option>
                  </select>
                </div>

                {/* Service */}
                <div className="group">
                  <label className="block text-sm font-bold text-black mb-3">Service</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 border border-gray-200 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all duration-300 group-hover:border-gray-400"
                  >
                    <option value="">Select a service</option>
                    <option value="Men's Haircut">Men's Haircut</option>
                    <option value="Women's Haircut">Women's Haircut</option>
                    <option value="Hair Styling">Hair Styling</option>
                    <option value="Hair Coloring">Hair Coloring</option>
                    <option value="Hair Treatment">Hair Treatment</option>
                    <option value="Consultation">Consultation</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-4 py-2.5 md:py-3 bg-black text-white rounded-lg font-semibold text-sm md:text-base hover:bg-gray-900 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                >
                  {isLoading ? 'Processing...' : 'Book Now'}
                </button>

                {isSuccess && (
                  <div className="p-4 bg-green-100/80 border border-green-300 rounded-lg text-green-800 text-sm font-medium">
                    ✓ Redirecting to WhatsApp. Please confirm your appointment details!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
