'use client';

import { useTranslation } from '@/hooks/useTranslation';
import Image from 'next/image';

/**
 * AchievementCard - Displays an achievement or project
 * @param {Object} props
 * @param {string} props.titleKey - Translation key for achievement title
 * @param {string} props.descriptionKey - Translation key for achievement description
 * @param {string} props.iconSrc - Path to achievement icon
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element}
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
      className={`flex flex-col gap-8 items-end px-6 py-8 bg-white/10 backdrop-blur-sm ${className}`}
      {...props}
    >
      <div className="flex items-start justify-between w-full">
        <div className="w-20 h-20 relative flex items-center justify-center">
          <Image
            src={iconSrc}
            alt=""
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 items-end w-full">
        <h3 className="font-din font-normal text-[22px] leading-normal text-right text-white w-full">
          {t(titleKey)}
        </h3>
        <p className="font-din font-normal text-xl leading-[54px] text-right text-white w-full whitespace-pre-wrap">
          {t(descriptionKey)}
        </p>
      </div>
    </div>
  );
}
