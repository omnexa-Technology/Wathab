'use client';

import { useState, useEffect, useRef } from 'react';
import { LogoBlock } from '@/components/molecules/LogoBlock/LogoBlock';
import { NavList } from '@/components/molecules/NavList/NavList';
import { NavActions } from '@/components/molecules/NavActions/NavActions';

/**
 * Main navigation bar – Anima design.
 * RTL layout, fixed header with scroll-based hide/show.
 * Uses transform (not top) for GPU-friendly animation and no layout shift.
 */

const SCROLL_TOP_THRESHOLD = 10;

export function Navbar({ className = '', ...props }) {
  const [isVisible, setIsVisible] = useState(true);
  const prevScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // requestAnimationFrame: batch scroll updates to once per frame so we don't
      // setState on every scroll tick (which would cause excessive re-renders).
      // The handler stays cheap and we only update when the frame is painted.
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const prev = prevScrollY.current;

          if (currentScrollY < SCROLL_TOP_THRESHOLD) {
            setIsVisible(true);
          } else if (currentScrollY > prev) {
            setIsVisible(false);
          } else if (currentScrollY < prev) {
            setIsVisible(true);
          }

          prevScrollY.current = currentScrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // translate-y-0 / -translate-y-full (transform) instead of top: GPU-composited,
  // no layout reflow or shift; the nav stays in the document flow but moves off-screen.
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex w-full h-[88px] items-center justify-center gap-12 bg-white px-0 py-4 transition-transform duration-300 ease-out ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${className}`}
      data-colors-mode="light"
      dir="rtl"
      {...props}
    >
      <div className="flex w-full max-w-[1680px] items-center justify-between gap-6 px-4">
        <LogoBlock />
        <div className="flex flex-1 items-center justify-center">
          <NavList />
        </div>
        <NavActions />
      </div>
    </nav>
  );
}
