'use client';

import { cn } from '../../../lib/utils';

/**
 * CardLabel - Text label atom for carousel cards
 * Provides consistent typography for card content
 */
export function CardLabel({ children, variant = 'description', className = '' }) {
  const variantClasses = {
    title: 'font-din font-medium text-[32px] leading-[56px] text-white',
    description: 'font-din font-normal text-xl leading-[40px] text-white/90',
    caption: 'font-din font-normal text-base leading-normal text-white/80',
  };

  return (
    <span className={cn(variantClasses[variant], className)}>
      {children}
    </span>
  );
}
