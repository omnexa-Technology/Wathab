'use client';

import { useTranslation } from '../../../hooks/useTranslation';
import { useLanguageStore } from '../../../store/useLanguageStore';
import { ArrowLeft } from 'lucide-react';
import LocaleLink from '../../LocaleLink';

/**
 * ContactCtaSection - Call-to-action section encouraging users to contact.
 * Mobile-first: full-bleed on small screens, grows margins and radius on larger screens.
 */
export function ContactCtaSection({ className = '', ...props }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  return (
    <section
      className={`
        flex items-center justify-center w-full relative overflow-hidden
        bg-[#1B6936] contact-cover-bg bg-cover
        px-4 py-10 mx-0 rounded-2xl
        sm:px-6 sm:py-12 sm:mx-4 sm:rounded-3xl
        md:px-10 md:py-16 md:mx-6
        lg:px-16 lg:py-20 lg:mx-10 lg:rounded-[48px]
        xl:px-[120px] xl:py-24 xl:mx-16
        ${className}
      `}
      dir={isRTL ? 'rtl' : 'ltr'}
      {...props}
    >
      <div className="flex flex-col items-center w-full max-w-[1680px] relative z-10
        gap-8 sm:gap-10 md:gap-14 lg:gap-16 xl:gap-24">

        {/* Content */}
        <div className="flex flex-col items-center w-full max-w-[1080px]
          gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-16">

          {/* Headline */}
          <h2 className="font-din font-bold text-center text-white w-full
            text-2xl leading-snug
            sm:text-3xl sm:leading-snug
            md:text-4xl md:leading-normal
            lg:text-[40px] lg:leading-normal
            xl:text-[48px] xl:leading-normal">
            {t('contactCta.headline')}
          </h2>

          {/* Description */}
          <p className="font-din font-normal text-center text-white w-full px-2
            text-sm leading-7
            sm:text-base sm:leading-8
            md:text-lg md:leading-9
            lg:text-2xl lg:leading-10
            xl:text-[32px] xl:leading-[64px]">
            {t('contactCta.description')}
          </p>
        </div>

        {/* CTA Button */}
        <LocaleLink
          href="/contact"
          className="group flex items-center gap-3 bg-white rounded-[32px] transition-colors
            px-5 h-12
            sm:px-6 sm:h-13
            lg:px-6 lg:h-16 lg:gap-4"
        >
          <span className="font-din font-bold whitespace-nowrap text-[#1B6936]
            text-sm sm:text-base lg:text-xl lg:leading-[14px]">
            {t('contactCta.buttonText')}
          </span>

          <div className="flex items-center justify-center
            w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
            <ArrowLeft className="text-[#1B6936] transition-all duration-300 group-hover:rotate-45
              w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </div>
        </LocaleLink>
      </div>
    </section>
  );
}