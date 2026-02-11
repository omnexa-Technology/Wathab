import { getLocaleAndTranslations } from '@/lib/getLocaleAndTranslations';
import { buildPageMetadata } from '@/lib/getPageMetadata';

export async function generateMetadata() {
  const { t } = await getLocaleAndTranslations();
  return buildPageMetadata(t, 'articles');
}

export default async function ArticlesPage() {
  const { t } = await getLocaleAndTranslations();
  return (
    <div className='h-[100vh] w-full'>
      <h1 className='m-24 text-8xl font-bold'>{t.articles.title}</h1>
      <p className='m-24 text-3xl font-medium'>{t.articles.description}</p>
    </div>
  );
}
