'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';

export function LanguageSwitcher() {
  const { t } = useTranslation();
  const setLanguage = useLanguageStore((s) => s.setLanguage);
  const pathname = usePathname();
  const router = useRouter();

  const handleSet = (lang) => {
    setLanguage(lang);
    const segments = pathname.split('/');
    if (segments[1] && segments[1] !== lang) {
      segments[1] = lang;
      router.replace(segments.join('/'));
    }
  };

  return (
    <div>
      <button type="button" onClick={() => handleSet('ar')}>
        {t('common.languages.ar')}
      </button>
      <button type="button" onClick={() => handleSet('en')}>
        {t('common.languages.en')}
      </button>
    </div>
  );
}
