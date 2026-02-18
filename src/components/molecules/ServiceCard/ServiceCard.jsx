'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import Image from 'next/image';
import LocaleLink from '@/components/LocaleLink';
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

  const hoverShadow = isFeatured
    ? 'hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.35)]'
    : 'hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12)]';

  return (
    <div
      className={`flex flex-col gap-4 items-end px-4 py-6 rounded-3xl ${cardBg} relative overflow-hidden min-w-0
        sm:gap-5 sm:px-5 sm:py-7
        lg:gap-6 lg:px-6 lg:py-8
        transition-[transform,box-shadow] duration-300 ease-out
        hover:-translate-y-1 sm:hover:-translate-y-2 ${hoverShadow}
        motion-reduce:translate-y-0 motion-reduce:shadow-none motion-reduce:duration-0
        ${className}`}
      dir={isRTL ? 'rtl' : 'ltr'}
      {...props}
    >
      {/* Decorative cover (featured only) - scales down on mobile */}
      {isFeatured && (
        <div
          className="absolute left-0 top-0 w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] lg:w-[180px] lg:h-[180px] opacity-100 pointer-events-none"
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

      {/* Service icon */}
      <div className="flex flex-row items-start w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 shrink-0 self-start">
        <Image
          src={iconSrc}
          alt=""
          width={80}
          height={80}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 items-start w-full min-w-0 relative z-10 sm:gap-5 lg:gap-6">
        <div className="flex flex-col gap-3 items-start w-full min-w-0 sm:gap-4">
          <h3 className={`font-din font-bold text-start w-full min-w-0 ${titleColor}
            text-lg leading-snug
            sm:text-xl sm:leading-normal
            lg:text-2xl`}>
            {t(titleKey)}
          </h3>
          <p className={`font-din font-normal text-start w-full min-w-0 ${descColor}
            text-sm leading-relaxed
            sm:text-base sm:leading-7
            lg:text-lg lg:leading-[32px]`}>
            {t(descriptionKey)}
          </p>
        </div>

        {/* Footer Actions - touch-friendly, wrap on small */}
        <div className="flex flex-wrap items-center justify-between gap-3 w-full min-w-0 sm:gap-4">
          {isFeatured && (
            <LocaleLink
              href={href}
              className="flex items-center justify-center gap-2 px-4 py-3 sm:gap-3 sm:px-6 sm:py-3.5 bg-white hover:bg-white/95 rounded-full min-h-[44px] sm:min-h-[48px] transition-colors font-din font-bold text-[#1b6936] text-sm sm:text-base lg:text-lg"
            >
              <span>{t('services.requestServiceNow')}</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 rtl:rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M5 12h14M14 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </LocaleLink>
          )}

          <LocaleLink
            href={href}
            className="flex items-center justify-center gap-2 px-4 py-3 sm:gap-2 sm:px-6.5 sm:py-3.5 rounded-full bg-[#1B6936] hover:opacity-90 transition-opacity font-din font-normal text-white text-sm sm:text-base lg:text-lg min-h-[44px] sm:min-h-[48px]"
          >
            <span>{t('achievements.discoverMore')}</span>
            <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 rtl:rotate-180" aria-hidden />
          </LocaleLink>
        </div>
      </div>
    </div>
  );
}
