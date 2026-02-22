// import { createClient } from '@sanity/client';
// import { createImageUrlBuilder } from '@sanity/image-url';

// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '';
// const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';

// export const sanityClient = createClient({
//   projectId,
//   dataset,
//   apiVersion: '2024-01-01',
//   useCdn: true,
// });

// const builder = createImageUrlBuilder({ projectId, dataset });


// export function urlFor(source) {
//   return builder.image(source);
// }

// const REVALIDATE = 60;

// export async function sanityFetch(query, params = {}) {
//   return sanityClient.fetch(query, params, {
//     next: { revalidate: REVALIDATE },
//   });
// }


import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

if (!projectId) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID");
}

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',

  // important for production
  useCdn: process.env.NODE_ENV === 'production',

  // important for ISR
  perspective: 'published',
});

const builder = createImageUrlBuilder({
  projectId,
  dataset,
});

export function urlFor(source) {
  return builder.image(source);
}

const REVALIDATE = 60;

export async function sanityFetch(query, params = {}) {
  return sanityClient.fetch(query, params, {
    next: { revalidate: REVALIDATE },
  });
}