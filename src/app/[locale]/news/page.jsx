import { getLocaleAndTranslations } from '../../../lib/getLocaleAndTranslations';
import { buildPageMetadata } from '../../../lib/getPageMetadata';
import { sanityFetch, urlFor } from '../../../lib/sanity';
import { NEWS_LIST_QUERY } from '../../../lib/queries';
import { ArticleCard } from '../../../components/molecules/ArticleCard/ArticleCard';

const FALLBACK_IMAGE = '/assets/images/pages/Home/news1.webp';
const NEWS_LIST_LIMIT = 100;

function formatNewsDate(iso) {
  if (!iso) return '';
  try {
    return new Date(iso).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return iso;
  }
}

export async function generateMetadata() {
  const { t } = await getLocaleAndTranslations();
  return buildPageMetadata(t, 'news');
}

export default async function NewsPage() {
  const { t, locale } = await getLocaleAndTranslations();
  const news = await sanityFetch(NEWS_LIST_QUERY, { limit: NEWS_LIST_LIMIT });
  const list = Array.isArray(news) ? news : [];

  return (
    <div className="h-[100vh] w-full">
      <h1 className="m-24 text-8xl font-bold">{t.news.title}</h1>
      <p className="m-24 text-3xl font-medium">{t.news.description}</p>
      {list.length > 0 && (
        <div className="m-24 grid grid-cols-3 gap-8">
          {list.map((item) => {
            const slug = item.slug ?? item._id;
            const imageSrc =
              item.mainImage?.asset?.url
                ? urlFor(item.mainImage).width(600).height(400).url()
                : FALLBACK_IMAGE;
            return (
              <ArticleCard
                key={item._id}
                imageSrc={imageSrc}
                title={item.title ?? ''}
                date={formatNewsDate(item.publishedAt)}
                excerpt={item.excerpt ?? ''}
                href={`/${locale}/news/${slug}`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
