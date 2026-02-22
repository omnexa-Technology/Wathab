import { getLocaleAndTranslations } from '@/lib/getLocaleAndTranslations';
import { buildPageMetadata } from '@/lib/getPageMetadata';
import { sanityFetch, urlFor } from '@/lib/sanity';
import { SERVICES_LIST_QUERY } from '@/lib/queries';
import { ContactCtaSection } from '@/components/sections/ContactCtaSection/ContactCtaSection';
import { InnerHero } from '@/components/sections/InnerHero';
import { ServicesGridSection } from '@/components/sections/ServicesGridSection';

export async function generateMetadata() {
  const { t } = await getLocaleAndTranslations();
  return buildPageMetadata(t, 'services');
}

export default async function ServicesPage() {
  const { t } = await getLocaleAndTranslations();
  const services = await sanityFetch(SERVICES_LIST_QUERY);
  const list = Array.isArray(services) ? services : [];

  const items = list.map((s, index) => ({
    title: s.title ?? '',
    description: s.description ?? '',
    imageUrl: s.image?.asset?.url
      ? urlFor(s.image).width(224).height(224).url()
      : undefined,
    slug: s.slug ?? '',
    variant: index === 0 ? 'dark' : 'light',
  }));

  return (
    <>
      <InnerHero
        title={t.services.sectionTitle}
        breadcrumbLabel={t.services.sectionTitle}
        image="/assets/images/pages/Service/heroServic.webp"
      />
      <ServicesGridSection items={items.length > 0 ? items : undefined} />
      <div className="flex justify-center relative w-full my-24">
        <ContactCtaSection />
      </div>
    </>
  );
}
