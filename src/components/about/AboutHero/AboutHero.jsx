'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import { Container } from '@/components/atoms/Container/Container';
import { Heading } from '@/components/atoms/Heading/Heading';
import { Paragraph } from '@/components/atoms/Paragraph/Paragraph';
import { Button } from '@/components/atoms/Button/Button';
import LocaleLink from '@/components/LocaleLink';

export function AboutHero() {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const title = t('about.hero.title');
  const description = t('about.hero.description');
  const ctaText = t('about.hero.cta');

  return (
    <section
      className="relative w-full h-[600px] flex items-center"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/pages/Home/swiper1.webp"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div
          className={`max-w-2xl ${isRTL ? 'mr-auto text-right' : 'ml-auto text-left'
            }`}
        >
          <Heading
            level="h1"
            className="text-white text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            {title}
          </Heading>
          <Paragraph className="text-white text-xl lg:text-2xl mb-8 leading-relaxed opacity-90">
            {description}
          </Paragraph>
          <LocaleLink href="/contact">
            <Button
              variant="primary"
              size="lg"
              className="bg-[#86ba41] hover:bg-[#76aa31] text-white px-8 py-4 text-lg font-medium"
            >
              {ctaText}
            </Button>
          </LocaleLink>
        </div>
      </Container>
    </section>
  );
}
