'use client';

import { useEffect } from 'react';
import { useLanguageStore } from '../store/useLanguageStore.js';

export function DirectionHandler() {
  const language = useLanguageStore((s) => s.language);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  return null;
}
