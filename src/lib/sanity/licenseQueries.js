// License queries for Sanity CMS

export const getAllLicensesQuery = (language = 'ar') => `
  *[_type == "license" && language == "${language}"] | order(order asc, _createdAt asc) {
    _id,
    title,
    slug,
    description,
    image {
      asset,
      alt
    },
    order,
    language,
    translations[]-> {
      _id,
      title,
      slug,
      language
    }
  }
`

export const getLicenseBySlugQuery = (slug, language = 'ar') => `
  *[_type == "license" && slug.current == "${slug}" && language == "${language}"][0] {
    _id,
    title,
    slug,
    description,
    image {
      asset,
      alt
    },
    order,
    language,
    translations[]-> {
      _id,
      title,
      slug,
      language
    }
  }
`

export const getAllLicenseSlugsQuery = () => `
  *[_type == "license"] {
    "slug": slug.current,
    language
  }
`