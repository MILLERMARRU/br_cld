'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ImageRevealHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!heroRef.current || !imageRef.current || !overlayRef.current || !titleRef.current) return;

    const ctx = gsap.context(() => {
      // Animate title on load
      const titleChars = titleRef.current!.querySelectorAll('.char');
      gsap.from(titleChars, {
        opacity: 0,
        y: 100,
        rotateX: -90,
        stagger: 0.05,
        duration: 1,
        ease: 'back.out(1.7)',
        delay: 0.5,
      });

      // Image reveal on scroll
      gsap.to(imageRef.current, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        scale: 1,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Fade out overlay on scroll
      gsap.to(overlayRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'center top',
          scrub: 1,
        },
      });

      // Parallax title
      gsap.to(titleRef.current, {
        y: -200,
        opacity: 0,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative h-[200vh]">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background image with clip-path reveal */}
        <div
          ref={imageRef}
          className="absolute inset-0 w-full h-full"
          style={{
            clipPath: 'polygon(20% 0%, 80% 0%, 80% 100%, 20% 100%)',
            transform: 'scale(1.2)',
          }}
        >
          <div className="relative w-full h-full bg-gradient-to-br from-orange-600 via-red-600 to-purple-900">
            {/* Placeholder for image - replace with actual image */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>
        </div>

        {/* Dark overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10"
        />

        {/* Hero content */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center px-6">
          <h1
            ref={titleRef}
            className="text-7xl md:text-[12rem] font-black leading-none text-center"
            style={{ perspective: '1000px' }}
          >
            <div className="flex justify-center gap-2 md:gap-4">
              {'MARRUMAR'.split('').map((char, i) => (
                <span
                  key={i}
                  className="char inline-block text-transparent bg-clip-text bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600"
                  style={{
                    textShadow: '0 0 80px rgba(251, 146, 60, 0.8)',
                  }}
                >
                  {char}
                </span>
              ))}
            </div>
          </h1>
          <p className="text-xl md:text-3xl text-white/90 mt-8 font-light tracking-wide">
            Racing Into The Future
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
