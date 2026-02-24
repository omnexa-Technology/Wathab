'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';
import { LogoBlock } from '../../molecules/LogoBlock/LogoBlock';
import { NavList } from '../../molecules/NavList/NavList';
import { NavActions } from '../../molecules/NavActions/NavActions';

/**
 * Main navigation bar – Anima design.
 * RTL layout, fixed header with scroll-based hide/show.
 * Mobile-first: hamburger + drawer on small screens; full nav from lg.
 * Uses transform (not top) for GPU-friendly animation and no layout shift.
 */

const SCROLL_TOP_THRESHOLD = 10;

export function Navbar({ className = '', serviceItems, ...props }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const prevScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

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

  // Lock body scroll when mobile menu is open; prevent layout shift
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const pathname = usePathname();
  const { t } = useTranslation();
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex w-full h-16 sm:h-[72px] lg:h-[88px] items-center justify-center bg-white px-0 py-3 sm:py-4 transition-transform duration-300 ease-out overflow-hidden ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${className}`}
        data-colors-mode="light"
        dir="rtl"
        aria-label="Main navigation"
        {...props}
      >
        <div className="flex w-full max-w-[1680px] items-center justify-between gap-4 sm:gap-6 px-4 sm:px-5 md:px-6 lg:px-4 lg:gap-12">
          {/* Logo – right in RTL */}
          <LogoBlock className="flex-shrink-0 min-w-0" />

          {/* Desktop: center nav + actions */}
          <div className="hidden lg:flex flex-1 items-center justify-center min-w-0">
            <NavList serviceItems={serviceItems} />
          </div>
          <div className="hidden lg:flex items-center flex-shrink-0">
            <NavActions />
          </div>

          {/* Mobile: hamburger – left in RTL (start) */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((o) => !o)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="flex lg:hidden min-h-[44px] min-w-[44px] sm:min-h-[48px] sm:min-w-[48px] items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm text-[#1B6936] hover:bg-gray-50 active:bg-gray-100 transition-colors touch-manipulation"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay + drawer */}
      <div
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ease-out ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Backdrop */}
        <button
          type="button"
          onClick={closeMobileMenu}
          aria-label="Close menu"
          className="absolute inset-0 bg-black/20"
        />

        {/* Drawer panel – slides from start (left in RTL) */}
        <div
          className={`absolute top-0 start-0 w-full max-w-sm sm:max-w-md h-full bg-white shadow-xl flex flex-col transition-transform duration-300 ease-out overflow-hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
          dir="rtl"
        >
          {/* Drawer header: spacer for nav bar height + close */}
          <div className="flex items-center justify-between flex-shrink-0 h-16 sm:h-[72px] px-4 sm:px-5 border-b border-gray-100">
            <span className="text-lg font-semibold text-gray-800">{t('navbar.menuTitle')}</span>
            <button
              type="button"
              onClick={closeMobileMenu}
              aria-label="Close menu"
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl text-[#1B6936] hover:bg-gray-100 transition-colors touch-manipulation"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable nav + actions */}
          <div className="flex-1 overflow-y-auto overscroll-contain py-4 px-4 sm:px-5">
            <NavList
              serviceItems={serviceItems}
              variant="mobile"
              className="flex flex-col items-stretch gap-1 w-full"
            />
            <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col gap-3 [&_a]:w-full [&_a]:justify-center [&_button]:w-full [&_button]:justify-center">
              <NavActions className="flex flex-col w-full gap-3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
