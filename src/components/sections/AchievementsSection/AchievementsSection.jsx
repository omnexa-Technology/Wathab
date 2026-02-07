'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import { AchievementCard } from '@/components/molecules/AchievementCard/AchievementCard';
import Link from 'next/link';
import Image from 'next/image';

/**
 * AchievementsSection - Hover-to-expand carousel.
 * On hover: the hovered card maximizes to show full content; other cards minimize.
 */
export function AchievementsSection({ className = '', ...props }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  // null = first card expanded by default; number = that index is hovered
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
  // Click/tap for mobile (no hover)
  const handleCardClick = (index) =>
    setHoveredIndex((prev) => (prev === index ? null : index));

  // Expanded: hovered card or first card when nothing hovered; on mobile, clicked card
  const getIsExpanded = (index) =>
    hoveredIndex === null ? index === 0 : hoveredIndex === index;

  return (
    <section
      className={`${className} flex flex-col items-center bg-white w-full px-4 md:px-[120px] py-16 md:py-24`}
      style={{ gap: '96px' }}
      dir={isRTL ? 'rtl' : 'ltr'}
      {...props}
    >
      <div className="flex flex-col items-center w-full max-w-[1680px]" style={{ gap: '96px' }}>
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          {/* Discover More Link */}
          <Link
            href="/achievements"
            className="flex items-center gap-2 text-[#1b6936] hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.6667 16H5.33337M5.33337 16L16 26.6667M5.33337 16L16 5.33337" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-din font-medium" style={{ fontSize: '32px', lineHeight: '56px' }}>
              {t('achievements.discoverMore')}
            </span>
          </Link>

          {/* Section Title - Figma H2: 64px/108px, green-900 */}
          <div className="flex items-center flex-1 justify-end" style={{ gap: '16px' }}>
            <h2 className="font-din font-medium text-[#0b2c16]" style={{ fontSize: '64px', lineHeight: '108px' }}>
              {t('achievements.sectionTitle')}
            </h2>
            <div className="flex items-center" style={{ gap: '8px', height: '8px' }}>
              <div className="w-2 h-2 rounded-full bg-[#86ba41]" />
              <div className="w-16 h-2 rounded-sm bg-[#86ba41]" />
            </div>
          </div>
        </div>

        {/* Hover-to-expand carousel - Figma: 680px height, 16px gap */}
        <div className="flex items-stretch w-full achievements-carousel" style={{ gap: '16px', height: '680px' }}>
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
                onFocus={() => handleCardHover(index)}
                onBlur={handleCardLeave}
                className={`achievements-carousel-card relative rounded-2xl overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b6936] focus-visible:ring-offset-2 transition-all duration-500 ease-out ${isExpanded ? 'achievements-carousel-card-expanded' : 'achievements-carousel-card-collapsed'
                  }`}
              >
                <div className="absolute inset-0">
                  <Image
                    src={achievement.imageSrc}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 ease-out achievements-carousel-image"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
                {/* Minimized: icon only (bottom) - Figma: icon always visible on each card */}
                <div
                  className={`absolute bottom-0 left-0 right-0 flex items-end justify-center p-6 transition-opacity duration-300 ${isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'
                    }`}
                >
                  <Image
                    src={achievement.iconSrc}
                    alt=""
                    width={64}
                    height={64}
                    className="object-contain w-16 h-16"
                  />
                </div>
                {/* Expanded: full content overlay */}
                <div
                  className={`absolute inset-0 flex flex-col justify-end transition-opacity duration-400 ${isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  style={{ padding: '32px' }}
                >
                  <AchievementCard
                    titleKey={achievement.titleKey}
                    descriptionKey={achievement.descriptionKey}
                    iconSrc={achievement.iconSrc}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
