import { InnerHero } from '@/components/sections/InnerHero';
import { TeamSection } from '@/components/sections/TeamSection/TeamSection';
import { ContactCtaSection } from '@/components/sections/ContactCtaSection/ContactCtaSection';
export default function TeamPage() {
    return (
        <>
            <InnerHero
                title="طموحك البيئي يستحق فريقاً يدرك أبعاده"
                breadcrumbLabel="الفريق"
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
