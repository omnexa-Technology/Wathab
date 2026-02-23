'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from '../../../hooks/useTranslation';
import { useLanguageStore } from '../../../store/useLanguageStore';
import { Icon } from '../../../components/atoms/Icon/Icon';

export function LanguageSwitcher() {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const setLanguage = useLanguageStore((s) => s.setLanguage);
  const pathname = usePathname();
  const router = useRouter();

  const handleToggle = () => {
    const newLang = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
    const segments = pathname.split('/');
    if (segments[1] && segments[1] !== newLang) {
      segments[1] = newLang;
      router.replace(segments.join('/'));
    }
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="flex items-center gap-xs px-button-x py-button-y rounded-md hover:bg-neutral-200 transition-colors duration-200 text-nav font-medium text-foreground"
      aria-label={`Switch to ${language === 'ar' ? 'English' : 'Arabic'}`}
    >
      {language === 'ar' && <Icon name="ar" size={20} />}
      <span>{t(`common.languages.${language}`)}</span>
    </button>
  );
}
