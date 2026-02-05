import { headers } from 'next/headers';
import ar from '@/locales/ar';
import en from '@/locales/en';

const m = { ar, en };

export async function generateMetadata() {
  const h = await headers();
  const locale = h.get('x-next-locale') || 'ar';
  const t = m[locale] || m.ar;
  return { title: `${t.articles.title} - Wathb`, description: t.articles.description };
}

export default async function ArticlesPage() {
  const h = await headers();
  const locale = h.get('x-next-locale') || 'ar';
  const t = m[locale] || m.ar;
  return (
    <div className='h-[100vh] w-full'>
      <h1 className='m-24 text-8xl font-bold'>{t.articles.title}</h1>
      <p className='m-24 text-3xl font-medium'>{t.articles.description}</p>
    </div>
  );
}
