'use client';

import { useTranslation } from '../../../hooks/useTranslation';
import { useLanguageStore } from '../../../store/useLanguageStore';
import { ArrowLeft } from 'lucide-react';
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
      className={`flex items-center justify-center px-[120px] py-24 bg-[#1B6936] bg-[url('/assets/icons/ui/cover-contact.svg')] bg-cover mx-16 rounded-[48px] w-full relative overflow-hidden ${className}`}
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
          <h2 className="font-din font-bold text-[48px] leading-normal text-center text-white  w-full">
            {t('contactCta.headline')}
          </h2>

          {/* Description */}
          <p className="font-din font-normal text-[32px] leading-[64px] text-center text-white w-full px-2">
            {t('contactCta.description')}
          </p>
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="group flex items-center gap-4 px-6 h-16 bg-white rounded-[32px] transition-colors"
        >
          <span className="font-din text-xl leading-[14px] text-[#1B6936] font-bold whitespace-nowrap">
            {t('contactCta.buttonText')}
          </span>

          <div className="w-8 h-8 flex items-center justify-center">
            <ArrowLeft className="text-[#1B6936] transition-all duration-300 group-hover:rotate-45" />
          </div>
        </Link>

      </div>
    </section>
  );
}