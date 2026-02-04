'use client';

import { CarouselPaginationDot } from '@/components/atoms/CarouselPaginationDot/CarouselPaginationDot';
import { useTranslation } from '@/hooks/useTranslation';

/**
 * Carousel pagination indicator list
 * @param {Object} props
 * @param {number} props.totalSlides - Total number of slides
 * @param {number} [props.activeIndex=0] - Current active slide index
 * @param {(index: number) => void} props.onSlideChange - Slide change handler
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element}
 */
export function CarouselPagination({
  totalSlides,
  activeIndex = 0,
  onSlideChange,
  className = '',
  ...props
}) {
  const { t } = useTranslation();

  return (
    <nav
      className={`flex flex-col items-center gap-4 ${className}`}
      aria-label={t('carousel.pagination.label')}
      {...props}
    >
      {Array.from({ length: totalSlides }).map((_, index) => (
        <CarouselPaginationDot
          key={index}
          active={index === activeIndex}
          index={index}
          onClick={() => onSlideChange(index)}
          ariaLabel={`${t('carousel.pagination.goToSlide')} ${index + 1}`}
        />
      ))}
    </nav>
  );
}
