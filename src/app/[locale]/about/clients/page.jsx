import { getLocaleAndTranslations } from '@/lib/getLocaleAndTranslations';
import { buildPageMetadata } from '@/lib/getPageMetadata';
import { InnerHero } from '@/components/sections/InnerHero';
import { AboutClientSection } from '@/components/sections/AboutClientSection/AboutClientSection';
export async function generateMetadata() {
  const { t } = await getLocaleAndTranslations();
  return buildPageMetadata(t, 'clients');
}

export default async function ClientsPage() {
  const { t } = await getLocaleAndTranslations();
  return (
    <>
      <InnerHero
        title={t.clients.subtitle}
        breadcrumbLabel={t.clients.sectionTitle}
        image="/assets/images/pages/Home/swiper1.webp"
      />
      <div className='flex justify-center relative w-full'>
        <AboutClientSection />
      </div>
    </>

  );
}
