'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import Link from 'next/link';

/**
 * ContactCtaSection - Call-to-action section encouraging users to contact
 * @param {Object} props
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element}
 */
export function ContactCtaSection({ className = '', ...props }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  return (
    <section
      className={`flex items-center justify-center px-[120px] py-24 bg-white w-full relative overflow-hidden ${className}`}
      dir={isRTL ? 'rtl' : 'ltr'}
      {...props}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        {/* Add decorative patterns here if needed */}
      </div>

      <div className="flex flex-col gap-24 items-center w-full max-w-[1680px] relative z-10">
        {/* Content */}
        <div className="flex flex-col gap-16 items-center w-full max-w-[1080px]">
          {/* Main Headline */}
          <h2 className="font-din font-normal text-[48px] leading-normal text-center text-[#0b2c16] w-full">
            {t('contactCta.headline')}
          </h2>

          {/* Description */}
          <p className="font-din font-normal text-[32px] leading-[64px] text-center text-[#595959] w-full px-4">
            {t('contactCta.description')}
          </p>
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="flex items-center gap-4 px-6 h-16 bg-[#1b6936] hover:bg-[#1b6936]/90 rounded-[32px] transition-colors"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.3334 10.6667L10.6667 21.3333M10.6667 21.3333H21.3334M10.6667 21.3333V10.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="font-din font-normal text-xl leading-[14px] text-white whitespace-nowrap">
            {t('contactCta.buttonText')}
          </span>
        </Link>
      </div>
    </section>
  );
}
