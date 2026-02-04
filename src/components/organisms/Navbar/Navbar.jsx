'use client';

import { LogoBlock } from '@/components/molecules/LogoBlock/LogoBlock';
import { NavList } from '@/components/molecules/NavList/NavList';
import { NavActions } from '@/components/molecules/NavActions/NavActions';

/**
 * Main navigation bar – Anima design.
 * RTL layout, green bar (#1b6936), max-width 1680px, spacing and tokens preserved.
 */

export function Navbar({ className = '', ...props }) {
  return (
    <nav
      className={`flex w-full h-[88px] items-center justify-center gap-12 bg-white px-0 py-4 ${className}`}
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
