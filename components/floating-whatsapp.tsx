'use client';

import { useState } from 'react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = '919473315961';

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hey! I need help or want to book an appointment at Looks Hair Studio. Can you assist me?"
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-40">
        {/* Chat Popup */}
        {isOpen && (
          <div className="absolute bottom-24 right-0 bg-white rounded-2xl shadow-2xl p-4 sm:p-6 w-[88vw] max-w-sm sm:w-80 mb-4 animate-fade-in border border-gray-200">
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-black text-lg">Need Help?</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-black transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Have questions about our services? Message us on WhatsApp and we'll get back to you instantly!
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="w-full px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378l-.361.214-3.741-.982.998 3.645-.235.364a9.864 9.864 0 001.516 5.394c1.487 2.386 3.899 3.838 6.52 3.838a9.877 9.877 0 007.594-3.907l.223-.285 3.932 1.031-1.265-3.675.251-.385a9.872 9.872 0 00.987-5.256 9.87 9.87 0 00-9.388-9.792z"/>
                </svg>
                Chat on WhatsApp
              </button>
            </div>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative w-16 h-16 md:w-20 md:h-20 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border-4 border-white"
        >
          {/* Pulse ring behind the button for a cleaner logo */}
          <div className="pointer-events-none absolute inset-0 rounded-full bg-green-400/70 group-hover:bg-green-400/40 transition-opacity duration-300 animate-ping -z-10" />

          <svg className="w-8 h-8 md:w-10 md:h-10 relative" fill="currentColor" viewBox="0 0 24 24">
            {/* Clean circular WhatsApp glyph without outer square */}
            <path d="M12.04 2.002C6.608 1.97 2.207 6.32 2.24 11.75c.01 1.998.55 3.56 1.487 4.994L2 22l5.37-1.693c1.39.762 2.64 1.017 4.15 1.025h.006c5.43 0 9.83-4.35 9.798-9.78C21.29 6.89 17.47 2.03 12.04 2.002Zm5.66 12.13c-.24.68-1.18 1.29-1.86 1.46-.49.12-1.13.22-3.28-.7-2.75-1.18-4.52-4.08-4.66-4.27-.14-.19-1.11-1.47-1.11-2.8 0-1.33.7-1.98.95-2.25.24-.26.52-.33.7-.33.18 0 .35 0 .5.01.16.01.38-.06.6.46.24.58.82 2 .89 2.15.07.15.11.33.02.52-.09.19-.13.3-.26.46-.14.15-.27.34-.39.45-.13.11-.27.24-.12.53.15.26.68 1.12 1.46 1.82 1 0 .94 1.49 2.02 2.03.3.16.48.25.65.34.17.09.39.05.52-.07.16-.17.69-.8.88-1.08.19-.28.37-.23.63-.14.26.09 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.7-.17 1.38Z" />
          </svg>

          {/* Tooltip */}
          <div className="absolute right-20 bg-black text-white px-4 py-2 rounded-lg whitespace-nowrap font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            Chat with us
          </div>
        </button>
      </div>
    </>
  );
}
