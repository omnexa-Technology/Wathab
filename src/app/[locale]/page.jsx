'use client';


import { HeroCarousel } from '@/components/organisms/HeroCarousel/HeroCarousel';
import { StatsSection } from '@/components/organisms/StatsSection/StatsSection';
import { OurAbout } from '@/components/organisms/OurAbout/OurAbout';
// import { AboutSection } from '@/components/sections/AboutSection/AboutSection';
import { VisionMissionSection } from '@/components/sections/VisionMissionSection';
import { OurValuesSection } from '@/components/sections/OurValuesSection';
import { OurServicesSection } from '@/components/sections/OurServicesSection/OurServicesSection';
import { AchievementsSection } from '@/components/sections/AchievementsSection/AchievementsSection';
import { WhyChooseSection } from '@/components/sections/WhyChooseSection/WhyChooseSection';
import { OurClientsSection } from '@/components/sections/OurClientsSection/OurClientsSection';
import { NewsSection } from '@/components/sections/NewsSection/NewsSection';
import { TeamSection } from '@/components/sections/TeamSection/TeamSection';
import { ContactCtaSection } from '@/components/sections/ContactCtaSection/ContactCtaSection';
import { FaqSection } from '@/components/sections/FaqSection/FaqSection';

const heroSlides = [
  {
    id: 'slide-1',
    titleKey: 'hero.slides.slide1.title',
    descriptionKey: 'hero.slides.slide1.description',
    ctaKey: 'hero.slides.slide1.cta',
    ctaHref: '/services',
    imageSrc: '/assets/images/pages/Home/swiper1.webp',
  },
  {
    id: 'slide-2',
    titleKey: 'hero.slides.slide2.title',
    descriptionKey: 'hero.slides.slide2.description',
    ctaKey: 'hero.slides.slide2.cta',
    ctaHref: '/services',
    imageSrc: '/assets/images/pages/Home/swiper2.webp',
  },
  {
    id: 'slide-3',
    titleKey: 'hero.slides.slide3.title',
    descriptionKey: 'hero.slides.slide3.description',
    ctaKey: 'hero.slides.slide3.cta',
    ctaHref: '/contact',
    imageSrc: '/assets/images/pages/Home/swiper3.webp',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero Carousel */}
      <div className="w-full">
        <HeroCarousel
          slides={heroSlides}
          autoplayDelay={5000}
          loop={true}
        />
      </div>

      {/* Section 2: Stats/Counters */}
      <div className="flex justify-center relative w-full">

        <StatsSection />

      </div>

      {/* Section 3: Our About (نبذة عن وثب) */}
      <div className="flex justify-center relative w-full mt-16">
        <OurAbout />
      </div>

      {/* Section 4: About Us (عن وثب) */}
      {/* <div className="flex justify-center relative w-full mt-12">
        <AboutSection />
      </div> */}

      {/* Section 5: Vision & Mission (رؤية ورسالة) */}
      <div className="flex justify-center relative w-full mt-12">
        <VisionMissionSection />
      </div>

      {/* Section 6: Our Values (قيمنا) */}
      <div className="flex justify-center relative w-full mt-25">
        <OurValuesSection />
      </div>

      {/* Section 7: Our Services (خدماتنا) */}
      <div className="flex justify-center relative w-full overflow-x-hidden min-w-0">
        <OurServicesSection />
      </div>

      {/* Section 8: Achievements (إنجازاتنا) */}
      <div className="flex justify-center relative w-full overflow-x-hidden min-w-0">
        <AchievementsSection />
      </div>

      {/* Section 10: Our Clients (عملائنا) */}
      <div className="flex justify-center relative w-full">
        <OurClientsSection />
      </div>
      {/* Section 9: Why Choose Us (لماذا تختار حلولنا البيئية) */}
      <div className="flex justify-center relative w-full">
        <WhyChooseSection />
      </div>


      {/* Section 11: News/Articles (المركز الإعلامي) */}
      <div className="flex justify-center relative w-full">
        <NewsSection />
      </div>

      {/* Section 12: Team (الفريق) */}
      <div className="flex justify-center relative w-full">
        <TeamSection />
      </div>

      {/* Section 13: Contact CTA (تواصل معنا) */}
      <div className="flex justify-center relative w-full">
        <ContactCtaSection />
      </div>

      {/* Section 14: FAQ (الأسئلة الشائعة) */}
      <div className="flex justify-center relative w-full">
        <FaqSection />
      </div>
    </>
  );
}
