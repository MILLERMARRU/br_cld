# Lando Norris Clone - Next.js Animation Experience

A modern web animation experience inspired by [landonorris.com](https://landonorris.com), built with Next.js 15, Three.js, GSAP, Rive, and Lenis.

## 🚀 Technologies Used

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router and Turbopack
- **[Three.js](https://threejs.org/)** - 3D graphics library for WebGL rendering
- **[React Three Fiber](https://r3f.docs.pmnd.rs/)** - React renderer for Three.js
- **[@react-three/drei](https://github.com/pmndrs/drei)** - Useful helpers for React Three Fiber
- **[GSAP](https://gsap.com/)** - Professional animation library with ScrollTrigger
- **[Rive](https://rive.app/docs/runtimes/react/react)** - Interactive vector animation runtime
- **[Lenis](https://lenis.darkroom.engineering/)** - Smooth scroll library
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 🎨 Features

### 1. Smooth Scrolling with Lenis
The entire site uses Lenis for buttery-smooth scrolling experience. Configuration is in `components/SmoothScroll.tsx`.

### 2. 3D Graphics with Three.js & React Three Fiber
- **Hero3D Component**: Animated 3D sphere with distortion effects
- Uses `@react-three/fiber` for React integration
- `@react-three/drei` for useful helpers like `Float` and `MeshDistortMaterial`

### 3. GSAP ScrollTrigger Animations
Multiple scroll-triggered animations:
- **fadeIn**: Opacity and Y-axis translation
- **slideUp**: Slide from bottom with opacity
- **clipPath**: Progressive reveal using CSS clip-path
- **scale**: Scale transformation with opacity

### 4. Split Text Animation
Character-by-character text animation using GSAP, perfect for hero titles.

### 5. Rive Animations (Ready to Use)
Component ready for Rive animations. Add your `.riv` files to `/public/rive/` and use the `RiveAnimation` component.

## 📁 Project Structure

```
lando-norris-clone/
├── app/
│   ├── layout.tsx          # Root layout with SmoothScroll wrapper
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles with animation variables
├── components/
│   ├── Hero3D.tsx          # Three.js 3D background scene
│   ├── RiveAnimation.tsx   # Rive animation wrapper
│   ├── ScrollSection.tsx   # GSAP scroll-triggered sections
│   ├── SmoothScroll.tsx    # Lenis smooth scroll wrapper
│   └── SplitText.tsx       # Character-by-character text animation
├── hooks/                  # Custom React hooks (future use)
├── lib/                    # Utility functions (future use)
└── public/
    └── rive/               # Place your .riv files here
```

## 🎯 Component Usage Examples

### Hero3D
```tsx
import Hero3D from "@/components/Hero3D";

<Hero3D />
```

### ScrollSection
```tsx
import ScrollSection from "@/components/ScrollSection";

<ScrollSection animation="fadeIn" className="min-h-screen">
  <h2>Your Content</h2>
</ScrollSection>
```

Available animations: `fadeIn`, `slideUp`, `clipPath`, `scale`

### SplitText
```tsx
import SplitText from "@/components/SplitText";

<SplitText className="text-5xl font-bold" delay={0.2}>
  Your Animated Text
</SplitText>
```

### RiveAnimation
```tsx
import RiveAnimation from "@/components/RiveAnimation";

<RiveAnimation
  src="/rive/your-animation.riv"
  stateMachine="State Machine 1"
  className="w-full h-96"
/>
```

## 🎨 Custom CSS Variables

The project uses CSS variables for consistent animations (inspired by landonorris.com):

```css
--duration-default: 0.75s;
--cubic-default: cubic-bezier(0.65, 0.05, 0, 1);
--animation-default: var(--duration-default) var(--cubic-default);
```

Use these in your custom animations:
```css
.my-element {
  transition: transform var(--animation-default);
}
```

## 📚 Documentation Resources

### Official Documentation Links
- **[React Three Fiber](https://r3f.docs.pmnd.rs/)** - Complete guide for Three.js in React
- **[GSAP](https://gsap.com/resources/get-started/)** - Getting started with GSAP (now 100% FREE!)
- **[Rive React Runtime](https://rive.app/docs/runtimes/react/react)** - React integration guide
- **[Lenis GitHub](https://github.com/darkroomengineering/lenis)** - Smooth scroll documentation

## 🔧 Customization

### Change 3D Object
Edit `components/Hero3D.tsx` to replace the sphere with your own 3D model or geometry.

### Add More Scroll Animations
1. Add new animation types in `components/ScrollSection.tsx`
2. Use them with `<ScrollSection animation="yourType">`

### Customize Colors
Update the gradient colors in `app/page.tsx` or add new Tailwind color schemes.

## 🚀 Building for Production

```bash
npm run build
npm start
```

## 📝 Notes

- **GSAP is now 100% FREE** including all premium plugins (SplitText, MorphSVG, etc.) thanks to Webflow!
- All animations are optimized for performance with proper cleanup on unmount
- Smooth scroll works best on desktop browsers; mobile has native smooth scrolling

## 🎯 Next Steps

1. Add your own 3D models using `@react-three/drei`'s `useGLTF` hook
2. Create Rive animations at [rive.app](https://rive.app) and integrate them
3. Experiment with GSAP's premium plugins (now free!)
4. Add more scroll-based interactions using ScrollTrigger

See `ANIMATION_EXAMPLES.md` for more advanced patterns and code examples.

## 📄 License

MIT

---

Built with ❤️ using modern web technologies
