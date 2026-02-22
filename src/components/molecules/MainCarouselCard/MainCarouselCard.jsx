'use client';

import { CardImage } from '../../atoms/CardImage/CardImage';
import { CardBadge } from '../../atoms/CardBadge/CardBadge';
import { CardLabel } from '../../atoms/CardLabel/CardLabel';
import { cn } from '../../../lib/utils';

/**
 * MainCarouselCard - Expansion (scale, image zoom, description) driven by isActive from parent.
 */
export function MainCarouselCard({
  imageSrc,
  imageAlt = '',
  iconSrc,
  iconAlt = '',
  title,
  description,
  isActive = false,
  onHover,
  onLeave,
  className = '',
}) {
  return (
    <div
      className={cn(
        'relative w-full h-[680px] rounded-2xl overflow-hidden cursor-pointer',
        'transition-transform duration-300 ease-out will-change-transform',
        isActive ? 'scale-[1.03]' : 'scale-100',
        className
      )}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Image zoom when active (inside overflow to avoid layout shift) */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div
          className={cn(
            'h-full w-full transition-transform duration-500 ease-out',
            isActive ? 'scale-110' : 'scale-100'
          )}
        >
          <CardImage src={imageSrc} alt={imageAlt} priority />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

      <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-8">
        <CardBadge iconSrc={iconSrc} iconAlt={iconAlt} className="w-20 h-20" />
        <div className="flex flex-col gap-6">
          <CardLabel variant="title">{title}</CardLabel>
          <CardLabel
            variant="description"
            className={cn(
              'line-clamp-3 transition-opacity duration-300',
              isActive ? 'opacity-100' : 'opacity-0'
            )}
          >
            {description}
          </CardLabel>
        </div>
      </div>
    </div>
  );
}
