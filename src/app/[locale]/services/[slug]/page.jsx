import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getLocaleAndTranslations } from '../../../../lib/getLocaleAndTranslations';
import { buildPageMetadata } from '../../../../lib/getPageMetadata';
import { sanityFetch } from '../../../../lib/sanity';
import { urlFor } from '../../../../lib/sanity';
import { SERVICE_BY_SLUG_QUERY } from '../../../../lib/queries';

export async function generateMetadata({ params }) {
  const { slug } = await Promise.resolve(params);
  const { t } = await getLocaleAndTranslations();
  return buildPageMetadata(t, 'services', { slug });
}

export default async function ServiceSlugPage({ params }) {
  const { slug } = await Promise.resolve(params);
  const { t } = await getLocaleAndTranslations();
  const doc = await sanityFetch(SERVICE_BY_SLUG_QUERY, { slug });
  if (!doc) notFound();

  const imageSource = doc?.mainImage ?? doc?.image;
  const imageUrl =
    imageSource?.asset?.url
      ? urlFor(imageSource).width(1200).height(630).url()
      : null;

  return (
    <div className="h-[100vh] w-full">
      <h1 className="m-24 text-8xl font-bold">{doc.title ?? slug}</h1>
      {imageUrl && (
        <div className="relative m-24 h-[400px] w-full max-w-4xl">
          <Image
            src={imageUrl}
            alt={(doc?.mainImage ?? doc?.image)?.alt ?? doc?.title ?? ''}
            fill
            className="object-cover"
          />
        </div>
      )}
      <p className="m-24 text-3xl font-medium">
        {doc.description ?? t.services.slugDescription}
      </p>
    </div>
  );
}
