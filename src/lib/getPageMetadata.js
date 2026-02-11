/**
 * Build page metadata for Next.js generateMetadata.
 * @param {object} t - Translations object from getLocaleAndTranslations
 * @param {string} translationKey - Dot path to the translation object (e.g. 'contact', 'services')
 * @param {object} [options] - Optional overrides
 * @param {string} [options.slug] - Slug for dynamic pages (e.g. article slug)
 * @param {string} [options.siteName='Wathb'] - Site name suffix
 * @returns {{ title: string, description: string }}
 */
export function buildPageMetadata(t, translationKey, options = {}) {
  const { slug, siteName = 'Wathb' } = options;

  const keys = translationKey.split('.');
  const section = keys.reduce((obj, key) => obj?.[key], t);

  if (!section) {
    return { title: siteName, description: '' };
  }

  const title = section.title ?? section.sectionTitle ?? '';
  const description = section.description ?? section.slugDescription ?? section.subtitle ?? '';
  const fullTitle = slug ? `${slug} - ${title} - ${siteName}` : `${title} - ${siteName}`;

  return { title: fullTitle, description };
}
