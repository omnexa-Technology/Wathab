export const locales = ['ar', 'en'];
export const defaultLocale = 'ar';
export const routing = { locales, defaultLocale };
export { default as Link } from '@/components/LocaleLink';
export { redirect, usePathname, useRouter } from 'next/navigation';
