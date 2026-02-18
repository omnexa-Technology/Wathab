'use client';

import { useTranslation } from '@/hooks/useTranslation';
import Image from 'next/image';

/**
 * AchievementCard - Displays an achievement or project (used inside AchievementsSection overlay)
 */
export function AchievementCard({
  titleKey,
  descriptionKey,
  iconSrc,
  className = '',
  ...props
}) {
  const { t } = useTranslation();

  return (
    <div
      className={`flex flex-col gap-4 items-end w-full min-w-0 sm:gap-5 lg:gap-6 ${className}`}
      {...props}
    >
      <div className="flex items-start justify-between w-full gap-4 min-w-0 sm:gap-5 lg:gap-6">
        <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 shrink-0 flex items-center justify-center">
          <Image
            src={iconSrc}
            alt=""
            width={80}
            height={80}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-3 items-end flex-1 min-w-0 sm:gap-4 lg:gap-6">
          <h3 className="font-din font-medium text-right text-white w-full min-w-0
            text-lg leading-snug
            sm:text-xl sm:leading-tight
            md:text-2xl
            lg:text-[32px] lg:leading-[56px]">
            {t(titleKey)}
          </h3>
          <p className="font-din font-normal text-right text-white w-full min-w-0
            text-sm leading-relaxed
            sm:text-base sm:leading-7
            lg:text-[20px] lg:leading-[40px]">
            {t(descriptionKey)}
          </p>
        </div>
      </div>
    </div>
  );
}
