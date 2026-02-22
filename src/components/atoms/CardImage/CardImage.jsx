'use client';

import Image from 'next/image';
import { cn } from '../../../lib/utils';

/**
 * CardImage - Reusable image wrapper atom for carousel cards
 * Handles Next.js image optimization with fill layout
 */
export function CardImage({ src, alt, className = '', priority = false }) {
  return (
    <div className={cn("absolute inset-0 w-full h-full", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
