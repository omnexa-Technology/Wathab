import { useCallback } from 'react';
import { useLanguageStore } from '../store/useLanguageStore';
import ar from '../locales/ar';
import en from '../locales/en';

const locales = { ar, en };

/**
 * @param {string} keyPath - Dot-separated key path (e.g. "home.title", "buttons.learnMore")
 * @returns {string}
 */
function getNested(obj, keyPath) {
  return keyPath.split('.').reduce((acc, key) => acc?.[key], obj) ?? keyPath;
}

export function useTranslation() {
  const language = useLanguageStore((s) => s.language);

  const t = useCallback(
    (keyPath) => {
      const dict = locales[language] || locales.ar;
      return getNested(dict, keyPath);
    },
    [language]
  );

  return { t };
}
