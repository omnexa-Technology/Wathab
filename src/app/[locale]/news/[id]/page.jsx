import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getLocaleAndTranslations } from '../../../../lib/getLocaleAndTranslations';
import { buildPageMetadata } from '../../../../lib/getPageMetadata';
import { sanityFetch } from '../../../../lib/sanity';
import { urlFor } from '../../../../lib/sanity';
import { NEWS_BY_SLUG_QUERY, NEWS_BY_ID_QUERY } from '../../../../lib/queries';

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

export async function generateMetadata({ params }) {
  const { id } = await (params ?? Promise.resolve({}));
  const { t } = await getLocaleAndTranslations();
  return buildPageMetadata(t, 'news', { slug: id });
}

export default async function NewsIdPage({ params }) {
  const resolved = await (params ?? Promise.resolve({}));
  const rawId = resolved?.id ?? '';
  const id = typeof rawId === 'string' ? decodeURIComponent(rawId).trim() : '';
  const { t } = await getLocaleAndTranslations();

  // Prefer _id (stable, no encoding issues); fallback to slug for old links
  let doc = id ? await sanityFetch(NEWS_BY_ID_QUERY, { id }) : null;
  if (!doc && id) {
    doc = await sanityFetch(NEWS_BY_SLUG_QUERY, { slug: id });
  }
  if (!doc) notFound();

  const imageUrl =
    doc.mainImage?.asset?.url
      ? urlFor(doc.mainImage).width(1200).height(630).url()
      : null;

  return (
    <div className="h-[100vh] w-full">
      <h1 className="m-24 text-8xl font-bold">
        {doc.title ?? t.news.title}
      </h1>
      {imageUrl && (
        <div className="relative m-24 h-[400px] w-full max-w-4xl">
          <Image
            src={imageUrl}
            alt={doc.mainImage?.alt ?? doc.title ?? ''}
            fill
            className="object-cover"
          />
        </div>
      )}
      <p className="m-24 text-xl text-gray-600">
        {formatNewsDate(doc.publishedAt)}
      </p>
      {doc.excerpt && (
        <p className="m-24 text-3xl font-medium">{doc.excerpt}</p>
      )}
    </div>
  );
}
