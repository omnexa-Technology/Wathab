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
      className={`flex flex-col gap-6 items-end w-full ${className}`}
      {...props}
    >
      <div className="flex items-start justify-between w-full gap-6">
        <div className="w-20 h-20 shrink-0 flex items-center justify-center">
          <Image
            src={iconSrc}
            alt=""
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col gap-6 items-end flex-1 min-w-0">
          <h3
            className="font-din font-medium text-right text-white w-full"
            style={{ fontSize: '32px', lineHeight: '56px' }}
          >
            {t(titleKey)}
          </h3>
          <p
            className="font-din font-normal text-right text-white w-full whitespace-pre-wrap"
            style={{ fontSize: '20px', lineHeight: '40px' }}
          >
            {t(descriptionKey)}
          </p>
        </div>
      </div>
    </div>
  );
}
