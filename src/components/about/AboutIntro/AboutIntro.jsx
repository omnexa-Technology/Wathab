'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import { Container } from '@/components/atoms/Container/Container';
import { Heading } from '@/components/atoms/Heading/Heading';
import { Paragraph } from '@/components/atoms/Paragraph/Paragraph';

export function AboutIntro() {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const title = t('about.intro.title');
  const description = t('about.intro.description');

  // Image grid data
  const images = [
    { src: '/assets/images/pages/Home/about.webp', alt: 'Environment 1' },
    { src: '/assets/images/pages/Home/swiper2.webp', alt: 'Environment 2' },
    { src: '/assets/images/pages/Home/swiper3.webp', alt: 'Environment 3' },
    { src: '/assets/images/pages/Home/swiper1.webp', alt: 'Environment 4' },
  ];

  return (
    <section
      className="py-24 bg-white"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <Container>
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {/* Image Grid */}
          <div className={`grid grid-cols-2 gap-4 ${isRTL ? 'lg:order-2' : 'lg:order-1'}`}>
            {images.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {/* Text Content */}
          <div className={`${isRTL ? 'lg:order-1' : 'lg:order-2'}`}>
            <Heading
              level="h2"
              className="text-[#0b2c16] text-4xl lg:text-5xl font-bold mb-6"
            >
              {title}
            </Heading>
            <Paragraph className="text-gray-700 text-lg leading-relaxed">
              {description}
            </Paragraph>
          </div>
        </div>
      </Container>
    </section>
  );
}
