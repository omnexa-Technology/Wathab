'use client';

import { CarouselNavButton } from '@/components/atoms/CarouselNavButton/CarouselNavButton';
import { useLanguageStore } from '@/store/useLanguageStore';
import { useTranslation } from '@/hooks/useTranslation';

/**
 * Carousel navigation with prev/next buttons (RTL/LTR aware)
 * @param {Object} props
 * @param {() => void} props.onPrev - Previous slide handler
 * @param {() => void} props.onNext - Next slide handler
 * @param {boolean} [props.isBeginning=false] - At first slide
 * @param {boolean} [props.isEnd=false] - At last slide
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element}
 */
export function CarouselNavigation({
  onPrev,
  onNext,
  isBeginning = false,
  isEnd = false,
  className = '',
  ...props
}) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  // In RTL, swap the visual order and logic
  const prevLabel = isRTL ? t('carousel.navigation.next') : t('carousel.navigation.prev');
  const nextLabel = isRTL ? t('carousel.navigation.prev') : t('carousel.navigation.next');

  return (
    <div
      className={`flex items-start justify-start mr-56 gap-4 ${className}`}
      {...props}
    >
      <CarouselNavButton
        direction={isRTL ? 'next' : 'prev'}
        onClick={onPrev}
        disabled={isBeginning}
        ariaLabel={prevLabel}
      />
      <CarouselNavButton
        direction={isRTL ? 'prev' : 'next'}
        onClick={onNext}
        disabled={isEnd}
        ariaLabel={nextLabel}
      />
    </div>
  );
}
