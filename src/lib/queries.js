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

/** Portable Text projection: spreads all block fields + expands image assets inline */
const newsContentProjection = `
  content[] {
    ...,
    _type == "image" => {
      "imageUrl": asset->url,
      alt,
      caption
    }
  }
`;

/** Single news by slug */
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
  ${newsContentProjection}
}`;

/** Single news by _id (fallback when slug match fails, e.g. URL encoding) */
export const NEWS_BY_ID_QUERY = `*[_type == "news" && _id == $id][0] {
  _id,
  "slug": slug.current,
  title,
  excerpt,
  publishedAt,
  mainImage {
    asset->{ _id, url, metadata { lqip } },
    alt
  },
  ${newsContentProjection}
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

/** Full service detail page by slug + locale (type "service-details") */
export const SERVICE_DETAIL_QUERY = `*[_type == "service-details" && slug.current == $slug && language == $locale][0]{
  _id,
  "slug": slug.current,
  title,
  language,
  description,
  content,
  faq[] {
    question,
    answer
  },
  seo {
    metaTitle,
    metaDescription,
    keywords,
    noIndex,
    ogImage {
      asset->{ _id, url }
    }
  }
}`;

/** All service-details for a given locale — used to build the navbar services dropdown */
export const SERVICES_NAV_QUERY = `*[_type == "service-details" && language == $locale]{
  title,
  "slug": slug.current
} | order(title asc)`;
