'use client';

import { InnerHero } from '@/components/sections/InnerHero';
import { useTranslation } from '@/hooks/useTranslation';
import { AboutIntro } from '@/components/about/AboutIntro';
import { AboutFeatures } from '@/components/about/AboutFeatures';
// import { AboutDarkFeature } from '@/components/about/AboutDarkFeature';
import { AboutTimeline } from '@/components/about/AboutTimeline';
// import { AboutStats } from '@/components/about/AboutStats';
// import { AboutCTA } from '@/components/about/AboutCTA';
import { VisionMissionSection } from '@/components/sections/VisionMissionSection';
import { OurValuesSection } from '@/components/sections/OurValuesSection';
import { ContactCtaSection } from '@/components/sections/ContactCtaSection/ContactCtaSection';

export default function AboutPage() {
  const { t } = useTranslation();

  const heroTitle = t('about.hero.title');
  const aboutBreadcrumbLabel = t('navbar.about'); 

  return (
    <>
      {/* Hero Section */}
      <InnerHero
        title={heroTitle}
        breadcrumbLabel={aboutBreadcrumbLabel}
        image="/assets/images/pages/Home/swiper1.webp"
      />

      {/* Intro Section with Image Grid */}
      <AboutIntro />

      {/* Features Section */}
      <AboutFeatures />

      {/* Section 5: Vision & Mission (رؤية ورسالة) */}
      <div className="flex justify-center relative w-full mt-12">
        <VisionMissionSection />
      </div>
      {/* Section 6: Our Values (قيمنا) */}
      <div className="flex justify-center relative w-full mt-25">
        <OurValuesSection />
      </div>
      {/* Timeline Section */}
      <AboutTimeline />

      {/* Section 13: Contact CTA (تواصل معنا) */}
      <div className="flex justify-center relative w-full my-24">
        <ContactCtaSection />
      </div>
    </>
  );
}
