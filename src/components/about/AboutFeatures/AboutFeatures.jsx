'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import { Container } from '@/components/atoms/Container/Container';
import { Heading } from '@/components/atoms/Heading/Heading';
import { Paragraph } from '@/components/atoms/Paragraph/Paragraph';
import { CheckCircle } from 'lucide-react';

export function AboutFeatures() {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const title = t('about.features.title');

  const features = [
    {
      title: t('about.features.items.certification.title'),
      description: t('about.features.items.certification.description'),
    },
    {
      title: t('about.features.items.experience.title'),
      description: t('about.features.items.experience.description'),
    },
    {
      title: t('about.features.items.partnerships.title'),
      description: t('about.features.items.partnerships.description'),
    },
    {
      title: t('about.features.items.solutions.title'),
      description: t('about.features.items.solutions.description'),
    },
  ];

  return (
    <section
      className="py-24 bg-gray-50"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <Container>
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {/* Text Content with Features List */}
          <div className={`${isRTL ? 'lg:order-2' : 'lg:order-1'}`}>
            <Heading
              level="h2"
              className="text-[#0b2c16] text-4xl lg:text-5xl font-bold mb-8"
            >
              {title}
            </Heading>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex gap-4 ${isRTL ? 'flex-row-reverse text-right' : ''}`}
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-[#86ba41]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0b2c16] mb-2">
                      {feature.title}
                    </h3>
                    <Paragraph className="text-gray-700 leading-relaxed">
                      {feature.description}
                    </Paragraph>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className={`${isRTL ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="/assets/images/pages/Home/swiper2.webp"
                alt="Environmental Solutions"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
