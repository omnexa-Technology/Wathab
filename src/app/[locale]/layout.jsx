import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { Toaster } from 'sonner';
import { routing } from '../../i18n/routing';
import { DirectionProvider } from '@/components/ui/direction-provider';
import { DirectionHandler } from '../../components/DirectionHandler';
import { MainLayout } from '../../components/templates/MainLayout/MainLayout';
import ar from '../../locales/ar';
import en from '../../locales/en';
import '../globals.css';

const locales = { ar, en };

function LoadingOverlay() {
  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-white"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div
        className="h-12 w-12 rounded-full border-2 border-[#1B6936]/20 border-t-[#1B6936] animate-spin"
        aria-hidden
      />
    </div>
  );
}

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params);
  const m = locales[locale] || locales.ar;
  return {
    title: m.home.title,
    description: m.home.description,
    metadataBase: new URL('https://whathab.com'),
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await Promise.resolve(params);
  if (!routing.locales.includes(locale)) notFound();

  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} className="font-din">
      <head>
        {/* Preconnect to Sanity image CDN — eliminates cold DNS+TCP on first image request */}
        <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
      </head>
      <body>
        <DirectionProvider direction={dir}>
          <DirectionHandler />
          <Toaster richColors position="top-center" />
          <MainLayout>
            <Suspense fallback={<LoadingOverlay />}>
              {children}
            </Suspense>
          </MainLayout>
        </DirectionProvider>
      </body>
    </html>
  );
}

