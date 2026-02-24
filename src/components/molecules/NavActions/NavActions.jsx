'use client';

import { usePathname, useRouter } from 'next/navigation';
import LocaleLink from '../../LocaleLink';
import { useTranslation } from '../../../hooks/useTranslation';
import { useLanguageStore } from '../../../store/useLanguageStore';
import { SearchButton } from '../../atoms/SearchButton/SearchButton';

const ctaClass =
  ' bg-green-900 text-white inline-flex h-14 items-center justify-center gap-4 rounded-[32px] bg-[#fdfdfd] px-6 py-2.5 font-[number:var(--text-20bold-font-weight)] text-[length:var(--text-20bold-font-size)] tracking-[var(--text-20bold-letter-spacing)] leading-[var(--text-20bold-line-height)] [font-style:var(--text-20bold-font-style)] text-[#1b6936] hover:bg-white hover:text-[#1b6936] transition-colors';

export function NavActions({ className = '', ...props }) {
  const { t } = useTranslation();

  return (
    <div className={`flex items-center gap-6 ${className}`} {...props}>
      <SearchButton className="text-white [&_svg]:text-white hover:opacity-80 transition-opacity"/>
      <LocaleLink href="/contact" className={ctaClass}>
        {t('navbar.contact')}
      </LocaleLink>
    </div>
  );
}
