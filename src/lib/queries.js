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
  mainImage {
    asset->{ _id, url, metadata { lqip } },
    alt
  },
  image {
    asset->{ _id, url, metadata { lqip } },
    alt
  }
`;

/** Services list - fetches type "services" (plural) to match Sanity content */
export const SERVICES_LIST_QUERY = `*[_type == "services"] | order(_createdAt desc) {
  ${serviceListFields}
}`;

/** Single service by slug or _id (type "services") */
export const SERVICE_BY_SLUG_QUERY = `*[_type == "services" && (slug.current == $slug || _id == $slug)][0] {
  _id,
  "slug": slug.current,
  title,
  description,
  mainImage {
    asset->{ _id, url, metadata { lqip } },
    alt
  },
  image {
    asset->{ _id, url, metadata { lqip } },
    alt
  }
}`;
