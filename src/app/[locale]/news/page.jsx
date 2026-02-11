import { getLocaleAndTranslations } from '@/lib/getLocaleAndTranslations';
import { buildPageMetadata } from '@/lib/getPageMetadata';

export async function generateMetadata() {
  const { t } = await getLocaleAndTranslations();
  return buildPageMetadata(t, 'news');
}

export default async function NewsPage() {
  const { t } = await getLocaleAndTranslations();
  return (
    <div className='h-[100vh] w-full'>
      <h1 className='m-24 text-8xl font-bold'>{t.news.title}</h1>
      <p className='m-24 text-3xl font-medium'>{t.news.description}</p>
    </div>
  );
}
