import { headers } from 'next/headers';
import ar from '@/locales/ar';
import en from '@/locales/en';

const m = { ar, en };

export async function generateMetadata({ params }) {
  const { slug } = await Promise.resolve(params);
  const h = await headers();
  const locale = h.get('x-next-locale') || 'ar';
  const t = m[locale] || m.ar;
  return { title: `${slug} - ${t.articles.title} - Wathb`, description: t.articles.slugDescription };
}

export default async function ArticleSlugPage({ params }) {
  const { slug } = await Promise.resolve(params);
  const h = await headers();
  const locale = h.get('x-next-locale') || 'ar';
  const t = m[locale] || m.ar;
  return (
    <div className='h-[100vh] w-full'>
      <h1>{slug}</h1>
      <p>{t.articles.slugDescription}</p>
    </div>
  );
}
