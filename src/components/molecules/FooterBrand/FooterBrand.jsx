'use client';

import { Logo } from '@/components/atoms/Logo/Logo';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';

export function FooterBrand({ className = '', ...props }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);

  return (
    <div className={`flex flex-col items-end gap-12 flex-1 ${className}`} {...props}>
      <div className={`flex flex-col ${language === 'ar' ? 'items-start' : 'items-end'} gap-8 self-stretch w-full`}>
        <div className="inline-flex items-center gap-[6.86px]">
          <Logo src="/assets/icons/logo/logo-dark.svg" alt="Wathb Logo" width={208} height={51} className="w-[208.74px] h-auto" />
        </div>
        <p className="flex items-center justify-center self-stretch font-sub-body font-[number:var(--sub-body-font-weight)] text-[#939393] text-[length:var(--sub-body-font-size)] tracking-[var(--sub-body-letter-spacing)] leading-[var(--sub-body-line-height)] [direction:rtl] [font-style:var(--sub-body-font-style)]">
          {t('footer.description')}
        </p>
      </div>
    </div>
  );
}
