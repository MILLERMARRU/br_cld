# Getting Started Guide

## 🚀 Quick Start

Your Lando Norris clone project is ready! The development server is running at:
- **Local**: http://localhost:3000
- **Network**: http://26.236.175.222:3000

## ✅ What's Included

### 1. **Smooth Scrolling** (Lenis)
- Configured in `components/SmoothScroll.tsx`
- Automatically applied to the entire site
- Buttery smooth scroll experience

### 2. **3D Graphics** (Three.js + React Three Fiber)
- Hero section with animated 3D sphere
- Uses `@react-three/drei` for advanced effects
- Configurable in `components/Hero3D.tsx`

### 3. **Scroll Animations** (GSAP ScrollTrigger)
- Multiple scroll-triggered animation types:
  - `fadeIn`: Fade with Y translation
  - `slideUp`: Slide from bottom
  - `clipPath`: Progressive reveal
  - `scale`: Scale with opacity
- All sections animate on scroll

### 4. **Split Text Animation** (GSAP)
- Character-by-character animation
- Perfect for hero titles
- Customizable delay and timing

### 5. **Rive Integration** (Ready to Use)
- Component ready for `.riv` files
- Interactive state machine support
- Place files in `/public/rive/`

## 📂 Project Structure Overview

```
lando-norris-clone/
├── app/
│   ├── page.tsx         ← Main page with all demo sections
│   ├── layout.tsx       ← Root layout with SmoothScroll
│   └── globals.css      ← Animation variables & styles
│
├── components/
│   ├── Hero3D.tsx           ← Three.js 3D background
│   ├── ScrollSection.tsx    ← GSAP scroll animations
│   ├── SplitText.tsx        ← Text animation component
│   ├── SmoothScroll.tsx     ← Lenis wrapper
│   └── RiveAnimation.tsx    ← Rive component
│
└── public/
    └── rive/            ← Add your .riv files here
```

## 🎨 Customization Tips

### Change Colors
In `app/page.tsx`, update gradient classes:
```tsx
className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-cyan-500"
```

### Add New Animations
In `components/ScrollSection.tsx`, add to the `animations` object:
```tsx
const animations = {
  // ... existing animations
  myAnimation: {
    opacity: 0,
    rotate: 180,
  }
};
```

### Modify 3D Object
In `components/Hero3D.tsx`, replace the sphere:
```tsx
<mesh>
  <boxGeometry args={[2, 2, 2]} />
  <meshStandardMaterial color="#FF6B00" />
</mesh>
```

## 🎓 Next Steps

1. **Add 3D Models**
   - Use `@react-three/drei`'s `useGLTF` hook
   - Place models in `/public/models/`
   - Import and render in `Hero3D.tsx`

2. **Create Rive Animations**
   - Visit https://rive.app
   - Create or download animations
   - Place `.riv` files in `/public/rive/`
   - Use the `RiveAnimation` component

3. **Add More Pages**
   - Create new pages in `app/`
   - Each page automatically gets smooth scroll
   - Use the animation components everywhere

4. **Experiment with GSAP**
   - GSAP is now 100% FREE (including premium plugins!)
   - Try `SplitText`, `MorphSVG`, `DrawSVG`, etc.
   - See official docs: https://gsap.com

## 🔗 Documentation Resources Used

All documentation was sourced from official 2026 sources:

### React Three Fiber
- [Official Docs](https://r3f.docs.pmnd.rs/)
- [GitHub Repository](https://github.com/pmndrs/react-three-fiber)
- React renderer for Three.js with declarative components

### GSAP (GreenSock Animation Platform)
- [Official Website](https://gsap.com/)
- [Getting Started](https://gsap.com/resources/get-started/)
- Professional animation library, now 100% FREE

### Rive
- [React Runtime Docs](https://rive.app/docs/runtimes/react/react)
- [GitHub Repository](https://github.com/rive-app/rive-react)
- Interactive vector animation runtime

### Lenis
- [Official Website](https://lenis.darkroom.engineering/)
- [GitHub Repository](https://github.com/darkroomengineering/lenis)
- Smooth scroll library by darkroom.engineering

## 🐛 Troubleshooting

### 3D not rendering?
- Check browser console for WebGL errors
- Ensure GPU acceleration is enabled
- Try a different browser (Chrome/Firefox recommended)

### Animations not triggering?
- Open browser DevTools
- Check for JavaScript errors
- Verify ScrollTrigger is registered

### Smooth scroll not working?
- Verify Lenis is initialized in layout
- Check for CSS conflicts with `overflow` properties
- Mobile devices may use native scroll

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎉 You're Ready!

Open http://localhost:3000 and start exploring the animations. 

Every section demonstrates a different animation technique. Scroll down to see:
- Hero with 3D background
- Fade in animations
- Slide up transitions
- Clip-path reveals
- Scale effects
- Technology grid with stagger

Enjoy building amazing animated experiences! 🚀
