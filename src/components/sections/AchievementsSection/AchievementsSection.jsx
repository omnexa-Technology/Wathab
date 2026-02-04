'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import { AchievementCard } from '@/components/molecules/AchievementCard/AchievementCard';
import Link from 'next/link';
import Image from 'next/image';

const CONTENT_EXIT_DURATION_MS = 500;

/**
 * AchievementsSection - One main (opened) card, rest as closed side cards.
 * activeIndex drives which achievement is shown in main; hover a side card to switch.
 * Enter/exit and image scale use CSS animations (transform + opacity only).
 */
export function AchievementsSection({ className = '', ...props }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const [activeIndex, setActiveIndex] = useState(0);
  const [leavingIndex, setLeavingIndex] = useState(null);

  // Debug: verify activeIndex is updating
  console.log('AchievementsSection activeIndex:', activeIndex);

  const achievementsData = [
    {
      id: 'industrial-1',
      titleKey: 'achievements.items.industrial.title',
      descriptionKey: 'achievements.items.industrial.description',
      iconSrc: '/assets/icons/ui/achievement-industrial.svg',
    },
    {
      id: 'industrial-2',
      titleKey: 'achievements.items.industrial.title',
      descriptionKey: 'achievements.items.industrial.description',
      iconSrc: '/assets/icons/ui/achievement-industrial.svg',
    },
    {
      id: 'industrial-3',
      titleKey: 'achievements.items.industrial.title',
      descriptionKey: 'achievements.items.industrial.description',
      iconSrc: '/assets/icons/ui/achievement-industrial.svg',
    },
  ];

  // Immediately update activeIndex on hover; no conditions that block the switch
  const handleSideCardHover = (index) => {
    if (index === activeIndex) return;
    setLeavingIndex(activeIndex);
    setActiveIndex(index);
  };

  // Clear exiting content after animation completes
  useEffect(() => {
    if (leavingIndex === null) return;
    const timeoutId = setTimeout(() => setLeavingIndex(null), CONTENT_EXIT_DURATION_MS);
    return () => clearTimeout(timeoutId);
  }, [leavingIndex]);

  return (
    <section
      className={`flex flex-col gap-16 items-center px-[120px] py-24 bg-white w-full ${className}`}
      dir={isRTL ? 'rtl' : 'ltr'}
      {...props}
    >
      <div className="flex flex-col gap-16 items-center w-full max-w-[1680px]">
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
            <span className="font-din font-medium text-[32px] leading-[56px]">
              اكتشف المزيد
            </span>
          </Link>

          {/* Section Title */}
          <div className="flex items-center gap-4 flex-1 justify-end">
            <h2 className="font-din font-medium text-[64px] leading-[108px] text-[#0b2c16]">
              {t('achievements.sectionTitle')}
            </h2>
            <div className="flex items-center gap-1 h-2">
              <div className="w-2 h-2 rounded-full bg-[#86ba41]" />
              <div className="w-16 h-2 rounded-sm bg-[#86ba41]" />
            </div>
          </div>
        </div>

        {/* Side cards + main card; activeIndex is the only source of truth */}
        <div className="flex gap-8 items-center w-full h-[680px]">
          {achievementsData.map((achievement, index) =>
            index === activeIndex ? null : (
              <div
                key={achievement.id}
                role="button"
                tabIndex={0}
                onMouseEnter={() => handleSideCardHover(index)}
                onFocus={() => handleSideCardHover(index)}
                className="relative w-[153px] h-[680px] rounded-2xl shrink-0 overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b6936] focus-visible:ring-offset-2 opacity-70 hover:opacity-100 transition-opacity duration-300 ease-out hover:scale-[1.03] transition-transform duration-300 ease-out will-change-transform"
              >
                <div className="absolute inset-0">
                  <Image
                    src="/assets/images/pages/Home/achievement-bg.webp"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 pointer-events-none" />
              </div>
            )
          )}

          {/* Main slot: one container so exit + enter can run; image scale restarts on activeIndex change */}
          <div className="flex-1 h-[680px] rounded-2xl relative overflow-hidden min-w-0">
            <div key={`main-image-${activeIndex}`} className="absolute inset-0 achievements-image-scale">
              <Image
                src="/assets/images/pages/Home/achievement-bg.webp"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            {/* Exiting content (previous card) – transform + opacity only */}
            {leavingIndex !== null && (
              <div
                className="absolute inset-0 achievements-content-exit pointer-events-none z-10"
                aria-hidden
              >
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <AchievementCard
                    titleKey={achievementsData[leavingIndex].titleKey}
                    descriptionKey={achievementsData[leavingIndex].descriptionKey}
                    iconSrc={achievementsData[leavingIndex].iconSrc}
                  />
                </div>
              </div>
            )}

            {/* Main content: ALWAYS visible (opacity-100), key forces remount for transitions */}
            <div
              key={`main-content-${activeIndex}`}
              className="absolute inset-0 z-20 opacity-100 transition-opacity duration-500 ease-out"
            >
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <AchievementCard
                  titleKey={achievementsData[activeIndex].titleKey}
                  descriptionKey={achievementsData[activeIndex].descriptionKey}
                  iconSrc={achievementsData[activeIndex].iconSrc}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
