'use client';

import Image from 'next/image';
import { cn } from '../../../lib/utils';

/**
 * CardBadge - Icon/badge atom for carousel cards
 * Displays small icons or badges with consistent sizing
 */
export function CardBadge({ iconSrc, iconAlt = '', className = '' }) {
  return (
    <div className={cn("relative w-16 h-16 shrink-0", className)}>
      <Image
        src={iconSrc}
        alt={iconAlt}
        width={64}
        height={64}
        className="object-contain"
      />
    </div>
  );
}
