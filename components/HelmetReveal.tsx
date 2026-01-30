'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HelmetReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const helmetRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !helmetRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      // Helmet reveal animation
      gsap.fromTo(
        helmetRef.current,
        {
          clipPath: 'ellipse(0% 0% at 50% 50%)',
          scale: 0.8,
        },
        {
          clipPath: 'ellipse(100% 120% at 50% 50%)',
          scale: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'center 30%',
            scrub: 1,
          },
        }
      );

      // Text reveal
      gsap.from(textRef.current, {
        opacity: 0,
        y: 50,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
          end: 'center 40%',
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Helmet image with reveal effect */}
        <div className="relative aspect-square">
          <div
            ref={helmetRef}
            className="absolute inset-0 overflow-hidden rounded-3xl"
            style={{
              clipPath: 'ellipse(0% 0% at 50% 50%)',
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-orange-500 via-red-500 to-purple-600">
              {/* Placeholder for helmet image */}
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800')] bg-cover bg-center" />
            </div>
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 bg-orange-500/20 blur-3xl -z-10" />
        </div>

        {/* Content */}
        <div ref={textRef} className="space-y-6">
          <h2 className="text-5xl md:text-7xl font-black">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
              The Speed
            </span>
            <br />
            <span className="text-white">Experience</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
            Witness cutting-edge technology merge with raw racing power.
            Every detail crafted for ultimate performance.
          </p>
          <div className="flex gap-4 pt-6">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform cursor-pointer">
              Explore More
            </div>
            <div className="border-2 border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:border-white/40 transition-colors cursor-pointer">
              Watch Video
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
