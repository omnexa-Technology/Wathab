import { getLocaleAndTranslations } from '@/lib/getLocaleAndTranslations';
import { buildPageMetadata } from '@/lib/getPageMetadata';
import { InnerHero } from '@/components/sections/InnerHero';
import { FullFaqSection } from '@/components/sections/FullFaqSection';
import { ContactCtaSection } from '@/components/sections/ContactCtaSection/ContactCtaSection';
export async function generateMetadata() {
    const { t } = await getLocaleAndTranslations();
    return buildPageMetadata(t, 'faq');
}

export default async function FaqPage() {
    const { t } = await getLocaleAndTranslations();
    return (
        <>
            <InnerHero
                title={t.faq.sectionTitle}
                // description={t.faq.subtitle}
                breadcrumbLabel={t.footer.quickLinks.faq}
                image="/assets/images/pages/About/aboutFAQ.webp"
            />
            <FullFaqSection />
            <div className='flex justify-center relative w-full my-24'>
                <ContactCtaSection />
            </div>
        </>
    );
}
