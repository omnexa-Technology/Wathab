'use client';

import { useTranslation } from '../../../hooks/useTranslation';
import { useLanguageStore } from '../../../store/useLanguageStore';
import { ArrowLeft } from 'lucide-react';
import FadeContent from '../../FadeContent';
import LocaleLink from '../../LocaleLink';

export function HeroSlide({
  titleKey,
  descriptionKey,
  ctaKey,
  className = '',
  ...props
}) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const alignStart = 'items-start';
  const textAlign = isRTL ? 'text-right' : 'text-left';
  const ctaOrder = isRTL ? 'flex-row-reverse' : 'flex-row';
  const selfAlign = isRTL ? 'self-end' : 'self-start';

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`flex flex-col pointer-events-none ${alignStart} ${selfAlign} ${className}
        gap-8 p-4 pt-16
        sm:gap-10 sm:p-6 sm:pt-20
        md:gap-12 md:pt-24
        lg:gap-16 lg:pt-28
        xl:gap-16 xl:pt-32`}
      {...props}
    >
      <FadeContent blur duration={1000} easing="ease-out" initialOpacity={0}>
        <div className={`pointer-events-auto flex flex-col w-full ${alignStart}
          gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20`}>

          <div className={`flex flex-col ${alignStart} relative self-stretch w-full
            gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-16`}>

            {/* Hero Title */}
            <h1 className={`self-stretch font-bold text-white ${textAlign}
              text-3xl leading-tight
              sm:text-4xl sm:leading-snug
              md:text-5xl md:leading-tight
              lg:text-6xl lg:leading-tight
              xl:text-7xl xl:leading-tight`}>
              {t(titleKey)}
            </h1>

            {/* Hero Description */}
            <p className={`w-full text-white font-semibold ${textAlign}
              text-base leading-relaxed
              sm:text-lg sm:leading-8
              md:text-2xl md:leading-9
              lg:text-3xl lg:leading-10
              xl:text-4xl xl:max-w-[781px]`}>
              {t(descriptionKey)}
            </p>
          </div>

          {/* CTA Button */}
          <div className="group">
            <LocaleLink
              href="/contact"
              className={`inline-flex items-center justify-center 
    bg-white hover:bg-[#1b6936]/90 
    rounded-[32px] transition-colors ${ctaOrder}
    gap-3 px-4 py-2 h-10
    sm:gap-3 sm:px-5 sm:py-2.5 sm:h-11
    lg:gap-4 lg:px-6 lg:h-auto lg:py-2.5`}
            >
              <ArrowLeft
                className="text-[#1b6036] shrink-0
      group-hover:text-white
      w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8
      rtl:rotate-180"
                aria-hidden
              />

              <span
                className="font-bold text-[#1b6036]
      group-hover:text-white
      whitespace-nowrap
      text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
              >
                {t(ctaKey)}
              </span>

            </LocaleLink>
          </div>
        </div>
      </FadeContent>
    </div>
  );
}
