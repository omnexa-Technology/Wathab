'use client';

import { AboutHero } from '@/components/about/AboutHero';
import { AboutIntro } from '@/components/about/AboutIntro';
import { AboutFeatures } from '@/components/about/AboutFeatures';
// import { AboutDarkFeature } from '@/components/about/AboutDarkFeature';
import { AboutTimeline } from '@/components/about/AboutTimeline';
import { AboutStats } from '@/components/about/AboutStats';
import { AboutCTA } from '@/components/about/AboutCTA';
import { VisionMissionSection } from '@/components/sections/VisionMissionSection';
import { OurValuesSection } from '@/components/sections/OurValuesSection';
export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <AboutHero />

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
      {/* Dark Feature Section */}
      {/* <AboutDarkFeature /> */}

      {/* Timeline Section */}
      <AboutTimeline />

      {/* Statistics Section */}
      <AboutStats />

      {/* Call To Action Section */}
      <AboutCTA />
    </>
  );
}
