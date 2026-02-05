'use client';

import { AboutHero } from '@/components/about/AboutHero';
import { AboutIntro } from '@/components/about/AboutIntro';
import { AboutFeatures } from '@/components/about/AboutFeatures';
import { AboutDarkFeature } from '@/components/about/AboutDarkFeature';
import { AboutTimeline } from '@/components/about/AboutTimeline';
import { AboutStats } from '@/components/about/AboutStats';
import { AboutCTA } from '@/components/about/AboutCTA';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <AboutHero />

      {/* Intro Section with Image Grid */}
      <AboutIntro />

      {/* Features Section */}
      <AboutFeatures />

      {/* Dark Feature Section */}
      <AboutDarkFeature />

      {/* Timeline Section */}
      <AboutTimeline />

      {/* Statistics Section */}
      <AboutStats />

      {/* Call To Action Section */}
      <AboutCTA />
    </>
  );
}
