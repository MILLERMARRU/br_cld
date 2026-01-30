'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ParallaxSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
}

export default function ParallaxSection({
  title,
  description,
  imageUrl,
  reverse = false,
}: ParallaxSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax image effect
      gsap.to(imageRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Content fade in
      gsap.from(contentRef.current, {
        opacity: 0,
        x: reverse ? 100 : -100,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          end: 'center 50%',
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [reverse]);

  return (
    <div ref={containerRef} className="min-h-screen flex items-center py-20 px-6 overflow-hidden">
      <div className={`max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:grid-flow-dense' : ''}`}>
        {/* Image */}
        <div className={`relative h-[600px] overflow-hidden rounded-3xl ${reverse ? 'md:col-start-2' : ''}`}>
          <div
            ref={imageRef}
            className="absolute inset-0 w-full h-[120%] -top-[10%]"
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div ref={contentRef} className={reverse ? 'md:col-start-1 md:row-start-1' : ''}>
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            {title.split(' ').map((word, i) => (
              <span key={i} className={i % 2 === 0 ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600' : 'text-white'}>
                {word}{' '}
              </span>
            ))}
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
