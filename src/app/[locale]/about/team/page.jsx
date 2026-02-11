import { getLocaleAndTranslations } from '@/lib/getLocaleAndTranslations';
import { buildPageMetadata } from '@/lib/getPageMetadata';
import { InnerHero } from '@/components/sections/InnerHero';
import { TeamSection } from '@/components/sections/TeamSection/TeamSection';
import { ContactCtaSection } from '@/components/sections/ContactCtaSection/ContactCtaSection';

export async function generateMetadata() {
  const { t } = await getLocaleAndTranslations();
  return buildPageMetadata(t, 'team');
}

export default async function TeamPage() {
  const { t } = await getLocaleAndTranslations();
    return (
        <>
            <InnerHero
                title={t.team.sectionTitle}
                breadcrumbLabel={t.team.sectionTitle}
                image="/assets/images/team/heroCover.webp"
            />
            <div className='flex justify-center relative w-full'>
                <TeamSection />
            </div>
            <div className='flex justify-center relative w-full my-24'>
                <ContactCtaSection />
            </div>
        </>
    );
}
