'use client';

import { useTranslation } from '../../../hooks/useTranslation';
import { useLanguageStore } from '../../../store/useLanguageStore';
import { Container } from '../../../components/atoms/Container/Container';
import { Heading } from '../../../components/atoms/Heading/Heading';
import { Paragraph } from '../../../components/atoms/Paragraph/Paragraph';
import { Button } from '../../../components/atoms/Button/Button';
import LocaleLink from '../../../components/LocaleLink';

export function AboutCTA() {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const title = t('about.cta.title');
  const description = t('about.cta.description');
  const buttonText = t('about.cta.button');

  return (
    <section
      className="py-24 bg-[#86ba41]"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <Heading
            level="h2"
            className="text-white text-3xl lg:text-5xl font-bold mb-6 leading-tight"
          >
            {title}
          </Heading>

          {/* Description */}
          <Paragraph className="text-white/90 text-xl mb-10 leading-relaxed">
            {description}
          </Paragraph>

          {/* CTA Button */}
          <LocaleLink href="/contact">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-[#86ba41] hover:bg-gray-100 px-10 py-4 text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {buttonText}
            </Button>
          </LocaleLink>
        </div>
      </Container>
    </section>
  );
}
