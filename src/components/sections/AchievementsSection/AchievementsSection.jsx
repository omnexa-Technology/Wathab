'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import { AchievementCard } from '@/components/molecules/AchievementCard/AchievementCard';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

/**
 * AchievementsSection - Hover/tap-to-expand carousel.
 * On hover (desktop) or tap (mobile): the focused card expands; others minimize.
 */
export function AchievementsSection({ className = '', ...props }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const achievementsData = [
    {
      id: 'achievement-1',
      titleKey: 'achievements.items.industrial.title',
      descriptionKey: 'achievements.items.industrial.description',
      iconSrc: '/assets/icons/ui/Component5(3).svg',
      imageSrc: '/assets/images/pages/Home/Achievement1.webp',
    },
    {
      id: 'achievement-2',
      titleKey: 'achievements.items.sector2.title',
      descriptionKey: 'achievements.items.sector2.description',
      iconSrc: '/assets/icons/ui/Component5(2).svg',
      imageSrc: '/assets/images/pages/Home/Achievements2.webp',
    },
    {
      id: 'achievement-3',
      titleKey: 'achievements.items.sector3.title',
      descriptionKey: 'achievements.items.sector3.description',
      iconSrc: '/assets/icons/ui/Component5(1).svg',
      imageSrc: '/assets/images/pages/Home/Achievements3.webp',
    },
    {
      id: 'achievement-4',
      titleKey: 'achievements.items.sector4.title',
      descriptionKey: 'achievements.items.sector4.description',
      iconSrc: '/assets/icons/ui/Component5.svg',
      imageSrc: '/assets/images/pages/Home/Achievements4.webp',
    },
  ];

  const handleCardHover = (index) => setHoveredIndex(index);
  const handleCardLeave = () => setHoveredIndex(null);
  const handleCardClick = (index) =>
    setHoveredIndex((prev) => (prev === index ? null : index));

  const getIsExpanded = (index) =>
    hoveredIndex === null ? index === 0 : hoveredIndex === index;

  return (
    <section
      className={`flex flex-col items-center bg-white w-full overflow-x-hidden min-w-0
        px-4 py-12
        sm:px-5 sm:py-14
        md:px-6 md:py-16
        lg:px-12 lg:py-24
        xl:px-16
        2xl:px-[120px] 2xl:py-24
        gap-8 sm:gap-10 md:gap-14 lg:gap-24
        ${className}`}
      dir={isRTL ? 'rtl' : 'ltr'}
      {...props}
    >
      <div className="flex flex-col items-center w-full max-w-[1680px] min-w-0 gap-8 sm:gap-10 md:gap-14 lg:gap-24">
        {/* Header: on mobile stack (title first, then link); on lg row with justify-between */}
        <div className="flex flex-col gap-4 w-full min-w-0 sm:gap-5 lg:flex-row lg:items-center lg:justify-between">
          {/* Discover More - touch-friendly, order second on mobile so title is first */}
          <Link
            href="/articles"
            className="flex items-center justify-center gap-2 min-h-[44px] w-full sm:w-auto sm:min-h-[56px] text-[#1b6936] hover:opacity-80 transition-opacity order-2 lg:order-1"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8 shrink-0 rtl:rotate-180" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M26.6667 16H5.33337M5.33337 16L16 26.6667M5.33337 16L16 5.33337" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-din font-medium text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px] xl:leading-[56px]">
              {t('achievements.discoverMore')}
            </span>
          </Link>

          {/* Section Title + green accent */}
          <div className="flex items-center gap-3 flex-1 justify-end min-w-0 order-1 lg:order-2 sm:gap-4">
            <h2 className="font-din font-medium text-[#0b2c16] text-right
              text-2xl leading-tight
              sm:text-3xl
              md:text-4xl md:leading-snug
              lg:text-5xl lg:leading-tight
              xl:text-[64px] xl:leading-[108px]">
              {t('achievements.sectionTitle')}
            </h2>
            <div className="flex items-center gap-1 h-1.5 shrink-0 sm:h-2" aria-hidden>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#86ba41]" />
              <div className="w-12 h-1.5 sm:w-16 sm:h-2 rounded-sm bg-[#86ba41]" />
            </div>
          </div>
        </div>

        {/* Carousel - responsive height and gap */}
        <div
          className="flex items-stretch w-full min-w-0 achievements-carousel
            min-h-[320px] h-[320px]
            sm:min-h-[360px] sm:h-[360px]
            md:min-h-[440px] md:h-[440px]
            lg:min-h-[560px] lg:h-[560px]
            xl:min-h-[640px] xl:h-[640px]
            2xl:min-h-[680px] 2xl:h-[680px]
            gap-3 sm:gap-4 lg:gap-4"
        >
          {achievementsData.map((achievement, index) => {
            const isExpanded = getIsExpanded(index);
            return (
              <div
                key={achievement.id}
                role="button"
                tabIndex={0}
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={handleCardLeave}
                onClick={() => handleCardClick(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(index);
                  }
                }}
                onFocus={() => handleCardHover(index)}
                onBlur={handleCardLeave}
                className={`achievements-carousel-card relative rounded-2xl overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b6936] focus-visible:ring-offset-2 transition-all duration-500 ease-out ${isExpanded ? 'achievements-carousel-card-expanded' : 'achievements-carousel-card-collapsed'}`}
              >
                <div className="absolute inset-0">
                  <Image
                    src={achievement.imageSrc}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 ease-out achievements-carousel-image"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
                {/* Collapsed: icon only at bottom */}
                <div
                  className={`absolute bottom-0 left-0 right-0 flex items-end justify-center p-4 transition-opacity duration-300 sm:p-5 lg:p-6 ${isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                >
                  <Image
                    src={achievement.iconSrc}
                    alt=""
                    width={64}
                    height={64}
                    className="object-contain w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
                  />
                </div>
                {/* Expanded: full overlay content */}
                <div
                  className={`absolute inset-0 flex flex-col justify-end transition-opacity duration-400 ${isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                >
                  <div className="p-4 sm:p-5 lg:p-8">
                    <AchievementCard
                      titleKey={achievement.titleKey}
                      descriptionKey={achievement.descriptionKey}
                      iconSrc={achievement.iconSrc}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
