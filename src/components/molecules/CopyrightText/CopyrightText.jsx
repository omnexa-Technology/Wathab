'use client';

import { Copyright } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

export function CopyrightText({ className = '', ...props }) {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <div
      className={`inline-flex flex-wrap items-center justify-center gap-1 sm:gap-2 text-center ${className}`}
      {...props}
    >
      <span className="font-din font-normal text-[#b6b6b6] text-sm sm:text-base leading-relaxed">
        {currentYear}
      </span>
      <Copyright className="w-4 h-4 sm:w-5 sm:h-5 text-[#b6b6b6] shrink-0" aria-hidden />
      <p className="flex flex-wrap items-center justify-center gap-x-1 [direction:rtl]">
        <span className="font-din font-normal text-[#b6b6b6] text-sm sm:text-base leading-relaxed">
          {t('footer.copyright')}{' '}
        </span>
        <span className="font-din font-bold text-[#86ba41] underline text-sm sm:text-base leading-relaxed">
          {t('footer.company')}
        </span>
      </p>
    </div>
  );
}
