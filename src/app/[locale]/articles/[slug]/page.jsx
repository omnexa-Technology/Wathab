import { getLocaleAndTranslations } from '../../../../lib/getLocaleAndTranslations';
import { buildPageMetadata } from '../../../../lib/getPageMetadata';

export async function generateMetadata({ params }) {
  const { slug } = await Promise.resolve(params);
  const { t } = await getLocaleAndTranslations();
  return buildPageMetadata(t, 'articles', { slug });
}

export default async function ArticleSlugPage({ params }) {
  const { slug } = await Promise.resolve(params);
  const { t } = await getLocaleAndTranslations();
  return (
    <div className='h-[100vh] w-full'>
      <h1>{slug}</h1>
      <p>{t.articles.slugDescription}</p>
    </div>
  );
}
