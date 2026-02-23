import { notFound } from 'next/navigation';
import { getLocaleAndTranslations } from '../../../../lib/getLocaleAndTranslations';
import { sanityFetch, urlFor } from '../../../../lib/sanity';
import { SERVICE_DETAIL_QUERY, SERVICES_NAV_QUERY } from '../../../../lib/queries';
import { ServiceHero } from '../../../../components/services/ServiceHero';
import { ServiceContent } from '../../../../components/services/ServiceContent';
import { ServicesNavSidebar } from '../../../../components/services/ServicesNavSidebar';
import { ServiceSidebar } from '../../../../components/services/ServiceSidebar';
import { ServiceFAQ } from '../../../../components/services/ServiceFAQ';
import { ServiceContact } from '../../../../components/services/ServiceContact';
import { ContactCtaSection } from '../../../../components/sections/ContactCtaSection/ContactCtaSection';

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const { locale } = await getLocaleAndTranslations();
  const { slug } = await params;

  const service = await sanityFetch(SERVICE_DETAIL_QUERY, { slug, locale });
  if (!service) return {};

  return {
    title: service.seo?.metaTitle || service.title,
    description: service.seo?.metaDescription || service.description,
    keywords: service.seo?.keywords?.join(', '),
    robots: service.seo?.noIndex ? 'noindex, nofollow' : 'index, follow',
    openGraph: {
      title: service.seo?.metaTitle || service.title,
      description: service.seo?.metaDescription || service.description,
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { locale, t } = await getLocaleAndTranslations();
  const { slug } = await params;

  // Parallel fetch: current service + all services for the nav sidebar
  const [service, allServices] = await Promise.all([
    sanityFetch(SERVICE_DETAIL_QUERY, { slug, locale }),
    sanityFetch(SERVICES_NAV_QUERY, { locale }),
  ]);

  if (!service) notFound();

  const sd = t.serviceDetail || {};
  const isRTL = locale === 'ar';

  const heroImage = service.seo?.ogImage?.asset
    ? urlFor(service.seo.ogImage).width(1920).quality(85).url()
    : '/assets/images/pages/Service/heroServic.webp';

  const navServices = Array.isArray(allServices)
    ? allServices.filter((s) => s.slug)
    : [];

  return (
    <>
      {/* ── 1. Hero ────────────────────────────────────────────────────────── */}
      <ServiceHero
        title={service.title}
        breadcrumbLabel={service.title}
        image={heroImage}
      />

      {/* ── 2. Body: 3-column grid ─────────────────────────────────────────
            RTL column order (dir="rtl"):
              col-1 → visual RIGHT : services navigation list
              col-2 → visual CENTER: main content (description + blocks + FAQ + contact)
              col-3 → visual LEFT  : CTA sidebar
          ──────────────────────────────────────────────────────────────────── */}
      <section
        className="w-full px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[120px]"
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="w-full max-w-[1680px] mx-auto">
          <div
            className={[
              'grid grid-cols-1 gap-8',
              /* Tablet: show CTA on side */
              'md:grid-cols-[1fr_300px] md:gap-10',
              /* Desktop: full 3-column */
              'lg:grid-cols-[280px_1fr_340px] lg:gap-12',
              /* Wide: slightly wider columns */
              'xl:grid-cols-[300px_1fr_360px] xl:gap-14',
            ].join(' ')}
          >
            {/* ── Col 1: Services navigation sidebar ──────────────────── */}
            {/* Hidden on mobile/tablet, shown on lg+ */}
            <div className="hidden lg:block">
              <ServicesNavSidebar
                services={navServices}
                sectionLabel={isRTL ? 'خدماتنا' : 'Our Services'}
              />
            </div>

            {/* ── Col 2: Main content (spans full width on tablet) ─────── */}
            <div className="flex flex-col gap-10 md:col-span-1">
              {/* Description + rich text */}
              <ServiceContent
                description={service.description}
                content={service.content}
                locale={locale}
              />

              {/* FAQ — only when Sanity data exists */}
              {service.faq?.length > 0 && (
                <ServiceFAQ
                  items={service.faq}
                  faqTitle={sd.faqTitle}
                  faqDescription={sd.faqDescription}
                />
              )}

              {/* Contact form */}
              <ServiceContact serviceName={service.title} t={t} />
            </div>

            {/* ── Col 3: CTA sidebar ───────────────────────────────────── */}
            <div>
              <ServiceSidebar t={t} locale={locale} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Mobile services nav (visible only on < lg) ───────────────── */}
      <div className="lg:hidden w-full px-4 pb-10 sm:px-6 md:px-8" dir={isRTL ? 'rtl' : 'ltr'}>
        <ServicesNavSidebar
          services={navServices}
          sectionLabel={isRTL ? 'خدمات أخرى' : 'Other Services'}
        />
      </div>

      {/* ── 4. CTA Banner ───────────────────────────────────────────────── */}
      <div className="flex justify-center relative w-full my-12 sm:my-16 lg:my-24">
        <ContactCtaSection />
      </div>
    </>
  );
}
