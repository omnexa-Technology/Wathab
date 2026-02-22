'use client';

import { useTranslation } from '../../../hooks/useTranslation';
import { useLanguageStore } from '../../../store/useLanguageStore';
import { Container } from '../../../components/atoms/Container/Container';
import Image from 'next/image';

export function AboutIntro() {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const title = t('about.intro.title');
  const description = t('about.intro.description');

  // Image grid data - 3 images + branded box
  const images = [
    { src: '/assets/images/pages/About/intro1.webp', alt: 'Environment 1' },
    { src: '/assets/images/pages/About/intro2.webp', alt: 'Environment 2' },
    { src: '/assets/images/pages/About/intro3.webp', alt: 'Environment 3' },
  ];

  return (
    <section
      className="py-24 bg-white mx-48"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <Container>
        <div className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {/* Image Grid */}
          <div className="flex-1 w-full">
            {/* Top Row */}
            <div className="flex gap-4 mb-4">
              <div className="relative w-[60%] aspect-508/340 overflow-hidden rounded-[22px]">
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 1024px) 60vw, 30vw"
                />
              </div>
              <div className="relative flex-1 aspect-340/340 overflow-hidden rounded-[22px]">
                <Image
                  src={images[1].src}
                  alt={images[1].alt}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 1024px) 40vw, 20vw"
                />
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex gap-4">
              <div className="relative flex-1 aspect-452/280 overflow-hidden rounded-[22px] bg-[#1B6936] bg-[url('/assets/images/pages/About/intro4.svg')]">
                {/* Branded Box Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="text-center">
                    <Image
                      src="/assets/icons/logo/logo-dark.svg"
                      alt="Watheb Logo"
                      fill
                      className="flex items-center justify-center w-[20px]"
                    />
                  </div>
                </div>
              </div>
              <div className="relative w-[40%] aspect-324/280 overflow-hidden rounded-[22px]">
                <Image
                  src={images[2].src}
                  alt={images[2].alt}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 1024px) 40vw, 20vw"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1  w-full">
            {/* Title with Decorative Indicator */}
            <div className={`flex items-center gap-4 mb-16 justify-start  `}>
              <h2 className="text-[#0b2c16] text-5xl lg:text-[64px] font-medium leading-[1.7]">
                {title}
              </h2>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-carousel-active" />
                <div className="w-16 h-2 rounded-sm bg-carousel-active" />
              </div>
            </div>

            {/* Description */}
            <p className={`text-grey-600 text-2xl leading-loose ${isRTL ? 'text-right' : 'text-left'}`}>
              {description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
