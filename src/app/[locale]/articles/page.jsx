import { getLocaleAndTranslations } from '@/lib/getLocaleAndTranslations';
import { buildPageMetadata } from '@/lib/getPageMetadata';
import { InnerHero } from '@/components/sections/InnerHero';
import { ArticlesGrid } from '@/components/sections/ArticlesGrid';
import { ContactCtaSection } from '@/components/sections/ContactCtaSection/ContactCtaSection';

export async function generateMetadata() {
  const { t } = await getLocaleAndTranslations();
  return buildPageMetadata(t, 'articles');
}

export default async function ArticlesPage() {
  const { t } = await getLocaleAndTranslations();
  return (
    <>
      <InnerHero
        title={t.articles.title}
        breadcrumbLabel={t.articles.breadcrumbLabel}
        image="/assets/images/Articels/Hero.webp"
      />
      <ArticlesGrid />
      <div className="flex justify-center relative w-full my-24">
        <ContactCtaSection />
      </div>
    </>
  );
}
