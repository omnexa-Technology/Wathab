'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Globe, Sun } from 'lucide-react';
import Image from 'next/image';
import LocaleLink from '@/components/LocaleLink';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import { SearchButton } from '@/components/atoms/SearchButton/SearchButton';

const THEME_STORAGE_KEY = 'app-theme';

const ctaClass =
  'inline-flex h-14 items-center justify-center gap-4 rounded-[32px] bg-[#fdfdfd] px-6 py-2.5 font-[number:var(--text-20bold-font-weight)] text-[length:var(--text-20bold-font-size)] tracking-[var(--text-20bold-letter-spacing)] leading-[var(--text-20bold-line-height)] [font-style:var(--text-20bold-font-style)] text-[#1b6936] hover:bg-white transition-colors';

const languageButtonClass =
  'flex items-center gap-2 rounded-[40px] px-4 h-12 font-[number:var(--body-font-weight)] text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] text-white bg-transparent hover:bg-white/10 hover:opacity-80 transition-all border-none cursor-pointer';

function getStoredTheme() {
  if (typeof window === 'undefined') return 'light';
  return window.localStorage.getItem(THEME_STORAGE_KEY) === 'dark' ? 'dark' : 'light';
}

function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
}

export function NavActions({ className = '', ...props }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const setLanguage = useLanguageStore((s) => s.setLanguage);
  const pathname = usePathname();
  const router = useRouter();

  const [theme, setThemeState] = useState('light');

  useEffect(() => {
    const stored = getStoredTheme();
    applyTheme(stored);
    queueMicrotask(() => setThemeState(stored));
  }, []);

  const handleThemeToggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setThemeState(next);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
    }
    applyTheme(next);
  };

  const handleLanguageToggle = () => {
    const newLang = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
    const segments = pathname.split('/');
    if (segments[1] && segments[1] !== newLang) {
      segments[1] = newLang;
      router.replace(segments.join('/'));
    }
  };

  return (
    <div className={`flex items-center gap-6 ${className}`} {...props}>
      <SearchButton className="text-white [&_svg]:text-white hover:opacity-80 transition-opacity"/>
      {/* <button
        type="button"
        onClick={handleThemeToggle}
        className="flex h-8 w-8 items-center justify-center text-white transition-opacity hover:opacity-80"
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {theme === 'dark' ? (
          <Sun className="h-8 w-8" aria-hidden />
        ) : (
          <Image
            src="/assets/icons/ui/lightDark.svg"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 object-contain filter-[brightness(0)_invert(1)]"
          />
        )}
      </button> */}
      {/* <button
        type="button"
        onClick={handleLanguageToggle}
        className={languageButtonClass}
        aria-label={language === 'ar' ? 'Switch to English' : 'Switch to Arabic'}
      >
        <span className="[font-style:var(--body-font-style)]">{t(`common.languages.${language}`)}</span>
        <Globe className="h-8 w-8 shrink-0" aria-hidden />
      </button> */}
      <LocaleLink href="/contact" className={ctaClass}>
        {t('navbar.contact')}
      </LocaleLink>
    </div>
  );
}
