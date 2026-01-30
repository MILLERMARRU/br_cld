'use client';

import ImageRevealHero from "@/components/ImageRevealHero";
import HelmetReveal from "@/components/HelmetReveal";
import ParallaxSection from "@/components/ParallaxSection";
import ScrollSection from "@/components/ScrollSection";

export default function Home() {
  return (
    <main className="relative bg-black text-white">
      {/* Hero with image reveal effect */}
      <ImageRevealHero />

      {/* Helmet reveal section */}
      <HelmetReveal />

      {/* Parallax sections */}
      <ParallaxSection
        title="Pure Performance"
        description="Experience the thrill of speed combined with cutting-edge technology. Every millisecond counts when you're racing at the limit."
        imageUrl="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200"
      />

      <ParallaxSection
        title="Precision Engineering"
        description="From aerodynamics to engine performance, every component is optimized for maximum efficiency and speed on the track."
        imageUrl="https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=1200"
        reverse
      />

      {/* Stats section with dramatic animation */}
      <ScrollSection animation="scale" className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black text-center mb-20">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-purple-600">
              Race Stats
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '350+', label: 'KM/H Top Speed' },
              { number: '1000+', label: 'Horsepower' },
              { number: '< 2s', label: '0-100 KM/H' },
              { number: '5G+', label:'Corner Force' },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-500/10 to-purple-500/10 border border-orange-500/20 hover:border-orange-500/50 transition-all hover:scale-110"
              >
                <div className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-red-600 mb-4">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* Technology showcase */}
      <section className="min-h-screen flex items-center py-20 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-5xl md:text-8xl font-black text-center mb-20">
            Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Three.js",
                description: "3D graphics and WebGL rendering",
                color: "from-purple-500 to-purple-700",
                icon: "🎨"
              },
              {
                title: "GSAP",
                description: "Professional animations & ScrollTrigger",
                color: "from-green-500 to-green-700",
                icon: "⚡"
              },
              {
                title: "Next.js",
                description: "React framework with App Router",
                color: "from-blue-500 to-blue-700",
                icon: "⚛️"
              },
              {
                title: "Lenis",
                description: "Buttery smooth scrolling",
                color: "from-orange-500 to-orange-700",
                icon: "🎯"
              },
              {
                title: "Rive",
                description: "Interactive vector animations",
                color: "from-pink-500 to-pink-700",
                icon: "✨"
              },
              {
                title: "Tailwind",
                description: "Utility-first CSS framework",
                color: "from-cyan-500 to-cyan-700",
                icon: "🎨"
              },
            ].map((tech, i) => (
              <ScrollSection key={i} animation="fadeIn">
                <div className="group h-full p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
                  <div className="text-6xl mb-6 group-hover:scale-125 transition-transform">
                    {tech.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-red-600">
                    {tech.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </ScrollSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA section */}
      <ScrollSection animation="clipPath" className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-9xl font-black mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-purple-600">
              Ready to Race?
            </span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-400 mb-12 leading-relaxed">
            Experience the future of web animations
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <button className="px-12 py-6 bg-gradient-to-r from-orange-500 to-red-600 rounded-full text-xl font-bold hover:scale-110 transition-transform hover:shadow-2xl hover:shadow-orange-500/50">
              Get Started
            </button>
            <button className="px-12 py-6 border-2 border-white/20 rounded-full text-xl font-bold hover:border-white/50 transition-all hover:bg-white/5">
              View Docs
            </button>
          </div>
        </div>
      </ScrollSection>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-lg">
            Built with Next.js, Three.js, GSAP, Rive & Lenis
          </p>
          <p className="text-gray-600 mt-2">
            A modern animation experience inspired by landonorris.com
          </p>
        </div>
      </footer>
    </main>
  );
}
