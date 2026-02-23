import { getLocaleAndTranslations } from '../../../lib/getLocaleAndTranslations';
import { buildPageMetadata } from '../../../lib/getPageMetadata';
import { InnerHero } from '../../../components/sections/InnerHero';
import { SectorsGrid } from '../../../components/sections/SectorsGrid/SectorsGrid';
// import { ContactCtaSection } from '@/components/sections/ContactCtaSection/ContactCtaSection';
export async function generateMetadata() {
  const { t } = await getLocaleAndTranslations();
  return buildPageMetadata(t, 'sectors');
}

export default async function ProjectsPage() {
  const { t } = await getLocaleAndTranslations();
  return (
    <>
      <InnerHero
        title={t.sectors.heroTitle}
        breadcrumbLabel={t.sectors.breadcrumbLabel}
        image="/assets/images/Sectors/HeroSectors.webp"
      />
      <SectorsGrid />
      {/* Section 13: Contact CTA (تواصل معنا) */}
      image.pngimage.png
    </>
  );
}
