import { headers } from 'next/headers';
import ar from '@/locales/ar';
import en from '@/locales/en';

const m = { ar, en };

export async function generateMetadata() {
  const h = await headers();
  const locale = h.get('x-next-locale') || 'ar';
  const t = m[locale] || m.ar;
  return { title: `${t.about.title} - Wathb`, description: t.about.description };
}

export default async function AboutPage() {
  const h = await headers();
  const locale = h.get('x-next-locale') || 'ar';
  const t = m[locale] || m.ar;
  return (
    <div className='h-[100vh] w-full'>
      <h1>{t.about.title}</h1>
      <p>{t.about.description}</p>
    </div>
  );
}
