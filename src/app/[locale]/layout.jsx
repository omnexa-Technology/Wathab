import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import { DirectionHandler } from '../../components/DirectionHandler';
import { MainLayout } from '../../components/templates/MainLayout/MainLayout';
import ar from '../../locales/ar';
import en from '../../locales/en';
import '../globals.css';

const locales = { ar, en };

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params);
  const m = locales[locale] || locales.ar;
  return { title: m.home.title, description: m.home.description };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await Promise.resolve(params);
  if (!routing.locales.includes(locale)) notFound();

  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} className="font-din">
      <body>
        <DirectionHandler />
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
