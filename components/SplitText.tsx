'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
}

export default function SplitText({
  children,
  className = '',
  delay = 0
}: SplitTextProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;
    const text = children;

    // Split text into characters
    const chars = text.split('').map((char, index) => {
      return `<span class="inline-block" style="opacity: 0; transform: translateY(20px);">${char === ' ' ? '&nbsp;' : char}</span>`;
    });

    element.innerHTML = chars.join('');

    // Animate characters
    const charElements = element.querySelectorAll('span');

    gsap.to(charElements, {
      opacity: 1,
      y: 0,
      duration: 0.05,
      stagger: 0.03,
      delay: delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        toggleActions: 'play none none none',
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [children, delay]);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
}
