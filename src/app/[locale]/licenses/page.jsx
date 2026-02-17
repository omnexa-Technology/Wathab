import { getLocaleAndTranslations } from '@/lib/getLocaleAndTranslations';
import { buildPageMetadata } from '@/lib/getPageMetadata';
import { InnerHero } from '@/components/sections/InnerHero';
import { LicensesGrid } from '@/components/sections/LicensesGrid/LicensesGrid';
import { ContactCtaSection } from '@/components/sections/ContactCtaSection/ContactCtaSection';

export async function generateMetadata() {
  const { t } = await getLocaleAndTranslations();
  return buildPageMetadata(t, 'licenses');
}

export default async function LicensesPage() {
  const { t } = await getLocaleAndTranslations();
  return (
    <>
      <InnerHero
        title={t.licenses.title}
        breadcrumbLabel={t.licenses.breadcrumbLabel}
        image="/assets/images/licenses/header.webp"
      />
      <LicensesGrid />
      <div className="flex justify-center relative w-full my-24">
        <ContactCtaSection />
      </div>
    </>
  );
}
