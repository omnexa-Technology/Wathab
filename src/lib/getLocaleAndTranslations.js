import { headers } from 'next/headers';
import ar from '../locales/ar';
import en from '../locales/en';

const translations = { ar, en };

/**
 * Get the current locale and translations for server components.
 * Uses the x-next-locale header set by Next.js middleware.
 * @returns {Promise<{ locale: string, t: object }>}
 */
export async function getLocaleAndTranslations() {
  const h = await headers();
  const locale = h.get('x-next-locale') || 'ar';
  const t = translations[locale] || translations.ar;
  return { locale, t };
}
