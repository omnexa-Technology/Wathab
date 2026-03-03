'use client';

import LocaleLink from '../../LocaleLink';
import { useTranslation } from '../../../hooks/useTranslation';
// import { SearchButton } from '../../atoms/SearchButton/SearchButton';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';

/** Shared Figma nav button style – Contact & Language switcher */
const navButtonClass =
  'inline-flex h-14 items-center justify-center gap-4 rounded-[32px] bg-[#fdfdfd] px-6 py-2.5 font-[number:var(--text-20bold-font-weight)] text-[length:var(--text-20bold-font-size)] tracking-[var(--text-20bold-letter-spacing)] leading-[var(--text-20bold-line-height)] [font-style:var(--text-20bold-font-style)] text-[#1b6936] hover:bg-white hover:text-[#1b6936] transition-colors';

export function NavActions({ className = '', ...props }) {
  const { t } = useTranslation();

  return (
    <div className={`flex items-center gap-4 sm:gap-6 ${className}`} {...props}>
      <LanguageSwitcher className={navButtonClass} />
      {/* <SearchButton className="text-white [&_svg]:text-white hover:opacity-80 transition-opacity" /> */}
      <LocaleLink href="/contact" className={navButtonClass}>
        {t('navbar.contact')}
      </LocaleLink>
    </div>
  );
}
