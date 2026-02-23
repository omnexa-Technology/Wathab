import { notFound } from 'next/navigation';
import { getLocaleAndTranslations } from '../../../../lib/getLocaleAndTranslations';
import { buildPageMetadata } from '../../../../lib/getPageMetadata';
import { sanityFetch, urlFor } from '../../../../lib/sanity';
import { NEWS_BY_SLUG_QUERY, NEWS_BY_ID_QUERY, NEWS_LIST_QUERY } from '../../../../lib/queries';
import { InnerHero } from '../../../../components/sections/InnerHero';
import { NewsArticleContent } from '../../../../components/sections/NewsArticleContent/NewsArticleContent';

const FALLBACK_IMAGE = '/assets/images/pages/Home/news1.webp';
/** Static hero image for article detail (Figma design – same for all articles) */
const ARTICLE_HERO_IMAGE = '/assets/images/pages/Home/news1.webp';
const LATEST_NEWS_LIMIT = 20;

export async function generateMetadata({ params }) {
  const resolved = await (params ?? Promise.resolve({}));
  const rawId = resolved?.id ?? '';
  const id = typeof rawId === 'string' ? decodeURIComponent(rawId).trim() : '';
  const { t } = await getLocaleAndTranslations();
  let doc = id ? await sanityFetch(NEWS_BY_ID_QUERY, { id }) : null;
  if (!doc && id) doc = await sanityFetch(NEWS_BY_SLUG_QUERY, { slug: id });
  const title = doc?.title ?? t.news.title;
  return buildPageMetadata(t, 'news', { slug: title });
}

export default async function NewsIdPage({ params }) {
  const resolved = await (params ?? Promise.resolve({}));
  const rawId = resolved?.id ?? '';
  const id = typeof rawId === 'string' ? decodeURIComponent(rawId).trim() : '';
  const { t, locale } = await getLocaleAndTranslations();

  let doc = id ? await sanityFetch(NEWS_BY_ID_QUERY, { id }) : null;
  if (!doc && id) {
    doc = await sanityFetch(NEWS_BY_SLUG_QUERY, { slug: id });
  }
  if (!doc) notFound();

  const newsList = await sanityFetch(NEWS_LIST_QUERY, { limit: LATEST_NEWS_LIMIT });
  const rawList = Array.isArray(newsList) ? newsList : [];
  const latestArticles = rawList.map((item) => {
    const imageSrc =
      item.mainImage?.asset?.url
        ? urlFor(item.mainImage).width(600).height(400).url()
        : FALLBACK_IMAGE;
    return {
      _id: item._id,
      slug: item.slug ?? item._id,
      title: item.title ?? '',
      excerpt: item.excerpt ?? '',
      publishedAt: item.publishedAt,
      imageSrc,
    };
  });

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
    'http://localhost:3000';
  const shareUrl = `${String(baseUrl).replace(/\/$/, '')}/${locale}/news/${doc._id}`;

  const articleImageUrl =
    doc.mainImage?.asset?.url
      ? urlFor(doc.mainImage).width(1200).height(630).url()
      : null;

  return (
    <>
      <InnerHero
        title={t.news.heroTitle}
        breadcrumbLabel={t.news.breadcrumbLabel}
        image={ARTICLE_HERO_IMAGE}
      />
      <NewsArticleContent
        title={doc.title ?? ''}
        date={doc.publishedAt}
        excerpt={doc.excerpt ?? ''}
        content={doc.content ?? ''}
        imageSrc={articleImageUrl}
        imageAlt={doc.mainImage?.alt ?? doc.title ?? ''}
        locale={locale}
        latestArticles={latestArticles}
        currentId={doc._id}
        shareUrl={shareUrl}
      />
    </>
  );
}
