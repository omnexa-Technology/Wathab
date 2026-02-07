'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
const COVER_SERVICE_SRC = '/assets/icons/ui/Cover-service.svg';

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

  const hoverShadow = isFeatured
    ? 'hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.35)]'
    : 'hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12)]';

  return (
    <div
      className={`flex flex-col gap-6 items-end px-6 py-8 rounded-3xl ${cardBg} relative overflow-hidden
        transition-[transform,box-shadow] duration-300 ease-out
        hover:-translate-y-2 ${hoverShadow}
        motion-reduce:translate-y-0 motion-reduce:shadow-none motion-reduce:duration-0
        ${className}`}
      dir={isRTL ? 'rtl' : 'ltr'}
      {...props}
    >
      {/* Decorative cover (featured only) - top-left corner */}
      {isFeatured && (
        <div
          className="absolute left-0 top-0 w-[180px] h-[180px] opacity-100 pointer-events-none"
          aria-hidden
        >
          <Image
            src={COVER_SERVICE_SRC}
            alt=""
            width={180}
            height={180}
            className="object-contain object-top-left w-full h-full"
          />
        </div>
      )}

      {/* Service icon - aligned to start (right in RTL) via self-start */}
      <div className="flex flex-row items-start w-20 h-20 shrink-0 self-start">
        <Image
          src={iconSrc}
          alt=""
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-6 items-start w-full relative z-10">
        {/* Title and Description */}
        <div className="flex flex-col gap-4 items-start w-full">
          <h3 className={`font-din font-bold text-2xl leading-normal text-start w-full ${titleColor}`}>
            {t(titleKey)}
          </h3>
          <p className={`font-din font-normal text-lg leading-[32px] text-start w-full ${descColor}`}>
            {t(descriptionKey)}
          </p>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 w-full">
          {/* Primary CTA (Featured only) - white button, green text */}
          {isFeatured && (
            <Link
              href={href}
              className="flex items-center gap-3 px-6 py-3.5 bg-white hover:bg-white/95 rounded-full min-h-[48px] transition-colors font-din font-bold text-lg text-[#1b6936] whitespace-nowrap"
            >
              <span>{t('services.requestServiceNow')}</span>
              <svg className="w-5 h-5 shrink-0 rtl:rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M5 12h14M14 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          )}

          {/* Discover More Link */}
          <Link
            href={href}
            className={` flex items-center  gap-2 px-6.5 py-3.5 rounded-full bg-[#1B6936] ${linkColor} hover:opacity-80 transition-opacity font-din font-normal text-lg`}
          >
            <span className="text-white">{t('achievements.discoverMore')}</span>
          <ArrowRightIcon className="text-white w-5 h-5 shrink-0 rtl:rotate-180" />
          </Link>

        </div>
      </div>
    </div>
  );
}
