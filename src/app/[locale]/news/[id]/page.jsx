import { getLocaleAndTranslations } from '@/lib/getLocaleAndTranslations';
import { buildPageMetadata } from '@/lib/getPageMetadata';

export async function generateMetadata({ params }) {
  const { id } = await Promise.resolve(params || {});
  const { t } = await getLocaleAndTranslations();
  return buildPageMetadata(t, 'news', { slug: id });
}

export default async function NewsIdPage({ params }) {
  const { id } = await Promise.resolve(params || {});
  const { t } = await getLocaleAndTranslations();
  return (
    <div className="h-[100vh] w-full">
      <h1 className="m-24 text-8xl font-bold">{t.news.title} - {id}</h1>
    </div>
  );
}
