'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import Image from 'next/image';
import Link from 'next/link';

/**
 * ServiceCard - Displays a service with icon, title, description, and optional CTA
 * @param {Object} props
 * @param {string} props.iconSrc - Path to service icon
 * @param {string} props.titleKey - Translation key for service title
 * @param {string} props.descriptionKey - Translation key for service description
 * @param {'featured' | 'standard'} [props.variant='standard'] - Card styling variant
 * @param {string} [props.href='#'] - Link for "discover more" action
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element}
 */
export function ServiceCard({
  iconSrc,
  titleKey,
  descriptionKey,
  variant = 'standard',
  href = '#',
  className = '',
  ...props
}) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const isFeatured = variant === 'featured';

  const cardBg = isFeatured ? 'bg-[#1b6936]' : 'bg-[#e8f0eb]';
  const titleColor = isFeatured ? 'text-white' : 'text-[#222222]';
  const descColor = isFeatured ? 'text-[#eaeaea]' : 'text-[#595959]';
  const linkColor = isFeatured ? 'text-white' : 'text-[#303030]';

  return (
    <div
      className={`flex flex-col gap-8 items-end px-6 py-8 rounded-3xl ${cardBg} relative ${className}`}
      dir={isRTL ? 'rtl' : 'ltr'}
      {...props}
    >
      {/* Icon */}
      <div className="relative w-20 h-20 flex-shrink-0">
        <Image
          src={iconSrc}
          alt=""
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-12 items-end w-full">
        {/* Title and Description */}
        <div className="flex flex-col gap-8 items-end w-full">
          <h3 className={`font-din font-bold text-2xl leading-normal text-center ${titleColor}`}>
            {t(titleKey)}
          </h3>
          <p className={`font-din font-normal text-xl leading-[40px] text-right w-full ${descColor}`}>
            {t(descriptionKey)}
          </p>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between w-full">
          {/* Discover More Link */}
          <Link
            href={href}
            className={`flex items-center gap-2 ${linkColor} hover:opacity-80 transition-opacity`}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-din font-normal text-xl leading-normal">
              اكتشف المزيد
            </span>
          </Link>

          {/* CTA Button (Featured only) */}
          {isFeatured && (
            <Link
              href={href}
              className="flex items-center gap-4 px-6 py-3 bg-[#1b6936] hover:bg-[#1b6936]/90 rounded-[32px] h-16 transition-colors"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.3334 10.6667L10.6667 21.3333M10.6667 21.3333H21.3334M10.6667 21.3333V10.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-din font-bold text-xl leading-normal text-white whitespace-nowrap">
                ابدأ رحلتك معنا الآن
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
