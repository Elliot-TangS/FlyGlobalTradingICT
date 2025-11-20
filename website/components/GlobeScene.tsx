'use client';

import createGlobe from 'cobe';
import { useEffect, useRef } from 'react';

interface GlobeSceneProps {
  targetRef: React.RefObject<HTMLDivElement | null>;
}

export default function GlobeScene({ targetRef }: GlobeSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const layoutRef = useRef({
    width: 0,
    height: 0,
    targetX: 0,
    targetY: 0,
    targetWidth: 0,
    targetHeight: 0,
  });

  useEffect(() => {
    let phi = 0;

    const updateLayout = () => {
      if (canvasRef.current) {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const dpr = window.devicePixelRatio || 1;
        
        layoutRef.current.width = width;
        layoutRef.current.height = height;
        
        // Optimize for High DPI screens for sharper, sci-fi look
        canvasRef.current.width = width * dpr;
        canvasRef.current.height = height * dpr;
        canvasRef.current.style.width = `${width}px`;
        canvasRef.current.style.height = `${height}px`;

        if (targetRef.current) {
            const rect = targetRef.current.getBoundingClientRect();
            layoutRef.current.targetX = rect.left + window.scrollX;
            layoutRef.current.targetY = rect.top + window.scrollY;
            layoutRef.current.targetWidth = rect.width;
            layoutRef.current.targetHeight = rect.height;
        }
      }
    };

    window.addEventListener('resize', updateLayout);
    
    // Use ResizeObserver to track target element changes
    let resizeObserver: ResizeObserver | null = null;
    if (targetRef.current) {
        resizeObserver = new ResizeObserver(() => updateLayout());
        resizeObserver.observe(targetRef.current);
    }
    
    updateLayout();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: window.devicePixelRatio || 1,
      width: layoutRef.current.width * (window.devicePixelRatio || 1),
      height: layoutRef.current.height * (window.devicePixelRatio || 1),
      phi: 0,
      theta: 0.25, // Slightly tilted for better viewing angle
      dark: 1, // Dark mode enabled for better contrast
      diffuse: 3, // Higher diffuse for a glowing look
      mapSamples: 20000, // Denser points for "Sci-Fi" data look
      mapBrightness: 12, // Brighter map points
      baseColor: [0.1, 0.1, 0.2], // Dark Navy/Slate base
      markerColor: [2, 2, 3], // Ultra Bright/Glowing Markers (values > 1 bloom)
      glowColor: [0.2, 0.5, 1], // Deep Blue Glow
      opacity: 1, // Solid opacity
      markers: [
        { location: [22.3193, 114.1694], size: 0.08 }, // HK
        { location: [22.5431, 114.0579], size: 0.06 }, // SZ
        { location: [30.5728, 104.0668], size: 0.06 }, // CD
        { location: [3.0738, 101.5183], size: 0.06 }, // MY
        { location: [33.4484, -112.0740], size: 0.06 }, // US
        { location: [-27.4698, 153.0251], size: 0.06 }, // AU
        { location: [52.2297, 21.0122], size: 0.06 }, // PL
        { location: [55.7558, 37.6173], size: 0.06 }, // RU
      ],
      onRender: (state) => {
        const scrollY = window.scrollY;
        const { width, height, targetX, targetY, targetWidth, targetHeight } = layoutRef.current;
        const dpr = window.devicePixelRatio || 1;
        
        // Optimization: If scrolled far past the interaction zone, skip heavy updates
        if (scrollY > height * 2) {
             state.phi = phi;
             phi += 0.005; // Slightly faster rotation
             return;
        }

        const transitionStart = 0;
        const transitionEnd = height * 0.9; 
        const progress = Math.min(Math.max((scrollY - transitionStart) / (transitionEnd - transitionStart), 0), 1);
        const ease = (t: number) => t * t * (3 - 2 * t);
        const p = ease(progress);

        state.phi = phi;
        phi += 0.005; // Slightly faster rotation
        
        // Ensure render buffer matches window size (cached)
        state.width = width * dpr;
        state.height = height * dpr;

        // --- Positioning Logic ---
        
        // 1. Target Dimensions (Cached)
        // Center of target relative to document
        const absTargetCx = targetX + targetWidth / 2;
        const absTargetCy = targetY + targetHeight / 2;
        
        // Target visual size
        const tSize = Math.min(targetWidth, targetHeight) * 1.1;

        // 2. Start Dimensions (Hero Center)
        // Adjusted for side-by-side layout on desktop
        const isDesktop = width >= 1024; // lg breakpoint
        const sx = isDesktop ? width * 0.75 : width / 2;
        const sy = height / 2;
        const sSize = isDesktop ? Math.min(width, height) * 0.8 : Math.min(width, height) * 0.6;

        // 3. Interpolate Size
        const currentSize = sSize + (tSize - sSize) * p;
        const scale = currentSize / Math.min(width, height);

        if (canvasRef.current) {
            if (progress >= 1) {
                // DOCKED STATE (Absolute)
                // We want center of canvas (width/2, height/2) to be at (absTargetCx, absTargetCy)
                const dx = absTargetCx - width / 2;
                const dy = absTargetCy - height / 2;

                canvasRef.current.style.position = 'absolute';
                canvasRef.current.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`;
                canvasRef.current.style.zIndex = '20';
            } else {
                // TRANSITION STATE (Fixed)
                // Target center relative to viewport
                // targetY is absolute, so relative Y is targetY - scrollY
                const relTargetCy = absTargetCy - scrollY;
                
                // Interpolate center X/Y relative to viewport
                // Target X relative to viewport is just absTargetCx (assuming no horizontal scroll)
                const cx = sx + (absTargetCx - sx) * p;
                const cy = sy + (relTargetCy - sy) * p;

                const dx = cx - width / 2;
                const dy = cy - height / 2;

                canvasRef.current.style.position = 'fixed';
                canvasRef.current.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`;
                canvasRef.current.style.zIndex = progress > 0.5 ? '20' : '0';
            }
        }
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener('resize', updateLayout);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, [targetRef]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ opacity: 1 }}
    />
  );
}
