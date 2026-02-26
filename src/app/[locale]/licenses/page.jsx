import { getLocaleAndTranslations } from '../../../lib/getLocaleAndTranslations';
import { buildPageMetadata } from '../../../lib/getPageMetadata';
import { InnerHero } from '../../../components/sections/InnerHero';
import { LicensesSectionServer } from '../../../components/LicensesSectionServer';
import { ContactCtaSection } from '../../../components/sections/ContactCtaSection/ContactCtaSection';

export async function generateMetadata() {
  const { t } = await getLocaleAndTranslations();
  return buildPageMetadata(t, 'licenses');
}

export default async function LicensesPage({ params }) {
  const { t, locale } = await getLocaleAndTranslations();

  return (
    <>
      <InnerHero
        title={t.licenses.title}
        breadcrumbLabel={t.licenses.breadcrumbLabel}
        image="/assets/images/licenses/header.webp"
      />
      <LicensesSectionServer locale={locale} />
      <div className="flex justify-center relative w-full my-24">
        <ContactCtaSection />
      </div>
    </>
  );
}
