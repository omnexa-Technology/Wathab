'use client';

import { Logo } from '@/components/atoms/Logo/Logo';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';

export function FooterBrand({ className = '', ...props }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);

  return (
    <div
      className={`flex flex-col gap-6 flex-1 min-w-0 sm:gap-8 lg:gap-12 ${language === 'ar' ? 'items-end' : 'items-start'} ${className}`}
      {...props}
    >
      <div className={`flex flex-col gap-6 w-full min-w-0 sm:gap-8 ${language === 'ar' ? 'items-start' : 'items-start'}`}>
        <div className="inline-flex items-center gap-[6.86px] shrink-0">
          <Logo
            src="/assets/icons/logo/dark1.svg"
            alt="Wathb Logo"
            width={208}
            height={51}
            className="w-full h-auto max-w-[180px] sm:max-w-[200px] lg:max-w-[208px]"
          />
        </div>
        <p className="font-din font-normal text-[#939393] text-sm leading-relaxed sm:text-base sm:leading-8 text-right max-w-full [direction:rtl]">
          {t('footer.description')}
        </p>
      </div>
    </div>
  );
}
