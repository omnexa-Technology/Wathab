import { getLocaleAndTranslations } from '../../../lib/getLocaleAndTranslations';
import { buildPageMetadata } from '../../../lib/getPageMetadata';
import { sanityFetch, urlFor } from '../../../lib/sanity';
import { NEWS_LIST_QUERY } from '../../../lib/queries';
import { InnerHero } from '../../../components/sections/InnerHero';
import { NewsPageContent } from '../../../components/sections/NewsPageContent/NewsPageContent';

const FALLBACK_IMAGE = '/assets/images/pages/Home/news1.webp';
const NEWS_LIST_LIMIT = 100;

export async function generateMetadata() {
  const { t } = await getLocaleAndTranslations();
  return buildPageMetadata(t, 'news');
}

export default async function NewsPage() {
  const { t, locale } = await getLocaleAndTranslations();
  const news = await sanityFetch(NEWS_LIST_QUERY, { limit: NEWS_LIST_LIMIT });
  const rawList = Array.isArray(news) ? news : [];

  const list = rawList.map((item) => {
    const slug = item.slug ?? item._id;
    const imageSrc =
      item.mainImage?.asset?.url
        ? urlFor(item.mainImage).width(600).height(400).url()
        : FALLBACK_IMAGE;
    return {
      _id: item._id,
      slug,
      title: item.title ?? '',
      excerpt: item.excerpt ?? '',
      publishedAt: item.publishedAt,
      imageSrc,
    };
  });

  return (
    <>
      <InnerHero
        title={t.news.heroTitle}
        breadcrumbLabel={t.news.breadcrumbLabel}
        image="/assets/images/pages/Home/news1.webp"
      />
      <NewsPageContent articles={list} locale={locale} />
    </>
  );
}
