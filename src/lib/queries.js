/**
 * GROQ queries for Sanity.
 * Assumes document types: news, services.
 */

const newsListFields = `
  _id,
  "slug": slug.current,
  title,
  excerpt,
  publishedAt,
  mainImage {
    asset->{ _id, url, metadata { lqip } },
    alt
  }
`;

/** News list; use $limit for home (e.g. 3) or omit for full list */
export const NEWS_LIST_QUERY = `*[_type == "news" && defined(slug.current)] | order(publishedAt desc) [0...$limit] {
  ${newsListFields}
}`;

/** Single news by slug (for /news/[id]) */
export const NEWS_BY_SLUG_QUERY = `*[_type == "news" && slug.current == $slug][0] {
  _id,
  "slug": slug.current,
  title,
  excerpt,
  publishedAt,
  mainImage {
    asset->{ _id, url, metadata { lqip } },
    alt
  },
  body
}`;

const serviceListFields = `
  _id,
  "slug": slug.current,
  title,
  description,
  image {
    asset->{ _id, url, metadata { lqip } },
    alt
  }
`;

/** Services list */
export const SERVICES_LIST_QUERY = `*[_type == "service" && defined(slug.current)] | order(_createdAt desc) {
  ${serviceListFields}
}`;

/** Single service by slug */
export const SERVICE_BY_SLUG_QUERY = `*[_type == "service" && slug.current == $slug][0] {
  _id,
  "slug": slug.current,
  title,
  description,
  image {
    asset->{ _id, url, metadata { lqip } },
    alt
  },
  body
}`;
