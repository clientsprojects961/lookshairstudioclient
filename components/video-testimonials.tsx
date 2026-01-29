'use client';

import { useEffect, useRef, useState } from 'react';
import { Play, Volume2, VolumeX } from 'lucide-react';

interface VideoElementWithPlayPause extends HTMLVideoElement {
  playing?: boolean;
}

export default function VideoTestimonials() {
  const videoRef = useRef<VideoElementWithPlayPause>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              // Auto-play when in view
              videoRef.current.play().catch(() => {
                // Play may fail, that's ok
              });
              setIsPlaying(true);
            } else {
              // Pause when out of view
              videoRef.current.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {
          // Play may fail, that's ok
        });
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100/20 rounded-full -ml-48 -mb-48 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="space-y-6 mb-16 md:mb-20 text-center animate-fade-in">
          <div className="inline-block mx-auto">
            <span className="px-4 py-2 bg-black text-white rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider">
              Client Experience
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-black leading-tight">
            Watch Our <span className="text-gray-400">Transformations</span>
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            See the magic of professional styling in action. Our video showcases the incredible transformation and quality of our work.
          </p>
        </div>

        {/* Video Container */}
        <div
          ref={containerRef}
          className="relative max-w-5xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-black hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
        >
          <div className="aspect-video relative">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              muted={isMuted}
              loop
              playsInline
              autoPlay
            >
              <source
                src="/videos/testimonial.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Video Controls Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
              {/* Control Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={togglePlayPause}
                  className="group p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all duration-300 border border-white/20"
                  aria-label="Play/Pause"
                >
                  {isPlaying ? (
                    <div className="w-6 h-6 flex items-center justify-center">
                      <div className="flex gap-1">
                        <div className="w-1 h-4 bg-white rounded-sm" />
                        <div className="w-1 h-4 bg-white rounded-sm" />
                      </div>
                    </div>
                  ) : (
                    <Play size={24} fill="white" />
                  )}
                </button>

                <button
                  onClick={toggleMute}
                  className="group p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all duration-300 border border-white/20"
                  aria-label="Mute/Unmute"
                >
                  {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                </button>
              </div>

              {/* Video Info */}
              <div className="text-white text-sm font-medium">Professional Styling</div>
            </div>

            {/* Center Play Button (when paused) */}
            {!isPlaying && (
              <button
                onClick={togglePlayPause}
                className="absolute inset-0 flex items-center justify-center group"
              >
                <div className="p-6 bg-white/10 backdrop-blur-md rounded-full group-hover:bg-white/20 transition-all duration-300 border border-white/30">
                  <Play size={48} fill="white" className="text-white" />
                </div>
              </button>
            )}
          </div>
        </div>

        {/* Features Below Video */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: 'Professional Techniques',
              description: 'Watch our expert stylists apply professional techniques for flawless results.',
            },
            {
              title: 'Quality Products',
              description: 'See how we use premium products to achieve lasting, beautiful results.',
            },
            {
              title: 'Client Satisfaction',
              description: 'Experience the joy of transformation and client satisfaction firsthand.',
            },
          ].map((feature, idx) => (
            <div key={idx} className="text-center space-y-3 p-6 rounded-xl hover:bg-muted/50 transition-colors">
              <h3 className="font-bold text-primary text-lg">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
