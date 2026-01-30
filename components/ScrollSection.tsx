'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'clipPath' | 'scale';
}

export default function ScrollSection({
  children,
  className = '',
  animation = 'fadeIn'
}: ScrollSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const element = sectionRef.current;

    // Define different animation types
    const animations = {
      fadeIn: {
        opacity: 0,
        y: 50,
      },
      slideUp: {
        y: 100,
        opacity: 0,
      },
      clipPath: {
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
      },
      scale: {
        scale: 0.8,
        opacity: 0,
      }
    };

    const endAnimations = {
      fadeIn: {
        opacity: 1,
        y: 0,
      },
      slideUp: {
        y: 0,
        opacity: 1,
      },
      clipPath: {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      },
      scale: {
        scale: 1,
        opacity: 1,
      }
    };

    // Set initial state
    gsap.set(element, animations[animation]);

    // Create scroll trigger animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1,
        // markers: true, // Uncomment for debugging
      }
    });

    tl.to(element, {
      ...endAnimations[animation],
      duration: 1,
      ease: 'power2.out',
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animation]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}
