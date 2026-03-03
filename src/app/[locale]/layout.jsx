import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import { Toaster } from 'sonner';
import { routing } from '../../i18n/routing';
import { DirectionProvider } from '@/components/ui/direction-provider';
import { DirectionHandler } from '../../components/DirectionHandler';
import { MainLayout } from '../../components/templates/MainLayout/MainLayout';
import ar from '../../locales/ar';
import en from '../../locales/en';
import '../globals.css';

const locales = { ar, en };
const MIN_LOADING_MS = 2000;

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

async function LangSwitchDelay({ children }) {
  const cookieStore = await cookies();
  const langSwitch = cookieStore.get('langSwitch');
  if (langSwitch?.value === '1') {
    await new Promise((resolve) => setTimeout(resolve, MIN_LOADING_MS));
  }
  return children;
}

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
        <DirectionProvider direction={dir}>
          <DirectionHandler />
          <Toaster richColors position="top-center" />
          <MainLayout>
            <Suspense fallback={<LoadingOverlay />}>
              <LangSwitchDelay>{children}</LangSwitchDelay>
            </Suspense>
          </MainLayout>
        </DirectionProvider>
      </body>
    </html>
  );
}
