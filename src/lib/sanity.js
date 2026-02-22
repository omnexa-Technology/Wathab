import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = createImageUrlBuilder({ projectId, dataset });

/**
 * @param {import('@sanity/image-url').ImageUrlBuilderSource} source
 * @returns {import('@sanity/image-url').ImageUrlBuilder}
 */
export function urlFor(source) {
  return builder.image(source);
}

const REVALIDATE = 60;

/**
 * Fetch from Sanity with ISR.
 * @param {string} query - GROQ query
 * @param {Record<string, unknown>} [params] - Query params
 * @returns {Promise<unknown>}
 */
export async function sanityFetch(query, params = {}) {
  return sanityClient.fetch(query, params, {
    next: { revalidate: REVALIDATE },
  });
}
