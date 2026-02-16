import { getLocaleAndTranslations } from '@/lib/getLocaleAndTranslations';
import { buildPageMetadata } from '@/lib/getPageMetadata';
import { ContactCtaSection } from '@/components/sections/ContactCtaSection/ContactCtaSection';
import { InnerHero } from '@/components/sections/InnerHero';
import { ServicesGridSection } from '@/components/sections/ServicesGridSection';

export async function generateMetadata() {
  const { t } = await getLocaleAndTranslations();
  return buildPageMetadata(t, 'services');
}

export default async function ServicesPage() {
  const { t } = await getLocaleAndTranslations();
  return (
    <>
      <InnerHero
        title={t.services.sectionTitle}
        breadcrumbLabel={t.services.sectionTitle}
        image="/assets/images/pages/Service/heroServic.webp"
      />
      <ServicesGridSection />
      <div className="flex justify-center relative w-full my-24">
        <ContactCtaSection />
      </div>
    </>
  );
}
