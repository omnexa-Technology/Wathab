'use client';

import { CardImage } from '@/components/atoms/CardImage/CardImage';
import { CardLabel } from '@/components/atoms/CardLabel/CardLabel';
import { cn } from '@/lib/utils';

interface SideCarouselCardProps {
  imageSrc: string;
  imageAlt?: string;
  title?: string;
  isActive?: boolean;
  onHover?: () => void;
  onLeave?: () => void;
  className?: string;
}

/**
 * SideCarouselCard - Expansion (scale, image zoom, title) driven by isActive from parent.
 */
export function SideCarouselCard({
  imageSrc,
  imageAlt = '',
  title,
  isActive = false,
  onHover,
  onLeave,
  className = '',
}: SideCarouselCardProps) {
  return (
    <div
      className={cn(
        'relative w-[153px] h-[680px] rounded-2xl overflow-hidden cursor-pointer',
        'transition-transform duration-300 ease-out will-change-transform',
        isActive ? 'scale-[1.05] shadow-xl' : 'scale-100',
        className
      )}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div
          className={cn(
            'h-full w-full transition-transform duration-500 ease-out',
            isActive ? 'scale-110' : 'scale-100'
          )}
        >
          <CardImage src={imageSrc} alt={imageAlt} />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

      {title && (
        <div
          className={cn(
            'absolute bottom-0 left-0 right-0 p-4 transition-opacity duration-300',
            isActive ? 'opacity-100' : 'opacity-0'
          )}
        >
          <CardLabel variant="caption" className="text-center">
            {title}
          </CardLabel>
        </div>
      )}
    </div>
  );
}
