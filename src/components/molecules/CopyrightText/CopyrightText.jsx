'use client';

import { Copyright } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

export function CopyrightText({ className = '', ...props }) {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <div className={`inline-flex flex-wrap items-center gap-0 ${className}`} {...props}>
      <span className="flex items-center justify-center font-text-20regular font-[number:var(--text-20regular-font-weight)] text-[#b6b6b6] text-[length:var(--text-20regular-font-size)] tracking-[var(--text-20regular-letter-spacing)] leading-[var(--text-20regular-line-height)] whitespace-nowrap [font-style:var(--text-20regular-font-style)]">
        {currentYear}
      </span>
      <Copyright className="w-5 h-5 text-[#b6b6b6] mx-1" />
      <p className="flex items-center justify-center whitespace-nowrap [direction:rtl]">
        <span className="text-[#b6b6b6] leading-[var(--text-20regular-line-height)] font-text-20regular [font-style:var(--text-20regular-font-style)] font-[number:var(--text-20regular-font-weight)] tracking-[var(--text-20regular-letter-spacing)] text-[length:var(--text-20regular-font-size)]">
          {t('footer.copyright')}{' '}
        </span>
        <span className="font-text-20bold font-[number:var(--text-20bold-font-weight)] text-[#86ba41] underline [font-style:var(--text-20bold-font-style)] tracking-[var(--text-20bold-letter-spacing)] leading-[var(--text-20bold-line-height)] text-[length:var(--text-20bold-font-size)]">
          {t('footer.company')}
        </span>
      </p>
    </div>
  );
}
