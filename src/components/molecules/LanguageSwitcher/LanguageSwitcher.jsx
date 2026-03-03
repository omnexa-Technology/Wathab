'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Languages } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';
import { useLanguageStore } from '../../../store/useLanguageStore';
import { cn } from '../../../lib/utils';

const defaultButtonClass =
  'inline-flex h-10 sm:h-12 items-center justify-center gap-2  bg-white px-4 py-2 font-[number:var(--text-20bold-font-weight)] text-[length:var(--body-font-size)] text-[#1B6936] hover:bg-[#1B6936] hover:text-white hover:border-[#1B6936] transition-colors duration-200 min-w-[44px] min-h-[44px] touch-manipulation cursor-pointer';

const NEXT_LOCALE_COOKIE = 'NEXT_LOCALE';
const NEXT_LOCALE_MAX_AGE = 60;
const VALID_LOCALES = ['ar', 'en'];

/**
 * Sets the target locale in a cookie and reloads the page.
 * Middleware reads the cookie and redirects to the correct locale path.
 * This ensures: refresh first → loading screen → locale switch under the hood.
 */
function switchLocale(targetLang) {
  if (!VALID_LOCALES.includes(targetLang)) return;
  document.cookie = `${NEXT_LOCALE_COOKIE}=${targetLang}; path=/; max-age=${NEXT_LOCALE_MAX_AGE}`;
  window.location.reload();
}

export function LanguageSwitcher({ className = ' cursor-pointer', variant = 'default' }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const setLanguage = useLanguageStore((s) => s.setLanguage);
  const pathname = usePathname();

  // Sync store with URL locale on mount and pathname change
  useEffect(() => {
    const segment = pathname?.split('/')[1];
    if (segment === 'ar' || segment === 'en') {
      setLanguage(segment);
    }
  }, [pathname, setLanguage]);

  const handleToggle = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
    switchLocale(newLang);
  };

  const targetLang = language === 'ar' ? 'ar' : 'en';
  const targetLabel = t(`common.languages.${targetLang}`);

  return (

    <button
      type="button"
      onClick={handleToggle}
      className={cn(
        variant === 'compact'
          ? `${defaultButtonClass} px-3 sm:px-4`
          : defaultButtonClass,
        className
      )}
      aria-label={language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
      title={targetLabel}
    >
      <Languages className="w-5 h-5 shrink-0" aria-hidden />
      <span className="font-din">{targetLabel}</span>
    </button>
  );
}
