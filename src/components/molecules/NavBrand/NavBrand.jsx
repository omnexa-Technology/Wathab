'use client';

import { Logo } from '@/components/atoms/Logo/Logo';

export function NavBrand({ className = '', ...props }) {
  return (
    <div className={`flex items-center ${className}`} {...props}>
      <Logo />
    </div>
  );
}
