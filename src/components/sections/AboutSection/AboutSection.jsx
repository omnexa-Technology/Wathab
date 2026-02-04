'use client';

/**
 * AboutSection
 * Main About section component composed using Atomic Design principles
 * Features: Full i18n support, RTL/LTR layout adaptation, responsive design
 */

import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import { SectionHeading } from '@/components/molecules/SectionHeading/SectionHeading';
import { AboutContent } from '@/components/molecules/AboutContent/AboutContent';
import { AboutImage } from '@/components/molecules/AboutImage/AboutImage';
import { AboutActions } from '@/components/molecules/AboutActions/AboutActions';

export function AboutSection({ className = '' }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  // Get translated content
  const title = t('about.homeSection.title');
  const paragraphs = t('about.homeSection.paragraphs');
  const primaryButtonLabel = t('about.homeSection.buttons.discoverServices');
  const secondaryButtonLabel = t('about.homeSection.buttons.learnMore');
  const imageAlt = t('about.homeSection.imageAlt');
  const logoAlt = t('about.homeSection.logoAlt');

  return (
    <section
      className={`flex flex-col lg:flex-row items-center lg:items-end gap-24 px-6 lg:px-[120px] py-24 max-w-[1920px] mx-auto ${className}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >


      {/* Content Block */}
      <div className="flex flex-col items-end gap-24 flex-1 w-full">
        <div className="flex flex-col items-start gap-16 w-full">
          {/* Section Heading */}
          <div className="flex items-center justify-start w-full">
            <SectionHeading
              title={title}
              level="h2"
              variant="h2"
              indicatorPosition="start"
              className="text-[#0b2c16]"
            />
          </div>

          {/* Paragraphs */}
          <AboutContent paragraphs={paragraphs} />
        </div>
        <div className="flex items-center justify-start w-full">
          {/* Action Buttons */}
          <AboutActions
            primaryLabel={primaryButtonLabel}
            secondaryLabel={secondaryButtonLabel}
          />
        </div>
      </div>

      {/* Image Block */}
      <AboutImage
        imageSrc="/assets/images/pages/Home/about.webp"
        imageAlt={imageAlt}
        topLogoSrc="/assets/icons/logo/logo-light.svg"
        topLogoAlt={logoAlt}
        logoTextSrc="/assets/icons/logo/logo-Dark1.svg"
        logoTextAlt={logoAlt}
      />
    </section>
  );
}
