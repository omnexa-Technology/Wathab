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

  const images = [
    { src: '/assets/images/pages/About/intro1.webp', alt: 'Environment 1' },
    { src: '/assets/images/pages/About/intro2.webp', alt: 'Environment 2' },
    { src: '/assets/images/pages/About/intro3.webp', alt: 'Environment 3' },
  ];

  return (
    <section
      className="bg-white py-12 px-5 sm:py-14 sm:px-6 md:py-16 md:px-6 lg:py-24 lg:px-8 xl:px-12 2xl:px-[120px] 2xl:py-24"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <Container className="w-full max-w-[1680px] mx-auto">
        <div
          className={`
            flex flex-col gap-12
            sm:gap-14 md:gap-16
            lg:flex-row lg:items-center lg:gap-24
            xl:gap-24 2xl:gap-32
            ${isRTL ? 'lg:flex-row-reverse' : ''}
          `}
        >
          {/* Image Grid — Figma mobile: 2 rows, 8px gap, 16px row gap, 16px radius */}
          <div className="w-full flex-1 min-w-0">
            <div className="flex flex-col gap-4">
              {/* Top Row */}
              <div className="flex gap-2 sm:gap-3 md:gap-4">
                <div className="relative w-[calc(216/440*100%)] min-w-0 aspect-216/180 overflow-hidden rounded-2xl shrink-0">
                  <Image
                    src={images[0].src}
                    alt={images[0].alt}
                    loading="lazy"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 49vw, (max-width: 1024px) 35vw, 25vw"
                  />
                </div>
                <div className="relative flex-1 min-w-0 aspect-224/180 overflow-hidden rounded-2xl">
                  <Image
                    src={images[1].src}
                    alt={images[1].alt}
                    loading="lazy"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 51vw, (max-width: 1024px) 65vw, 25vw"
                  />
                </div>
              </div>

              {/* Bottom Row */}
              <div className="flex gap-2 sm:gap-3 md:gap-4 h-[164px] sm:h-[180px] md:h-[200px] lg:h-[220px] xl:h-[260px] 2xl:h-[280px]">
                <div className="relative flex-1 min-w-0 overflow-hidden rounded-2xl">
                  <Image
                    src={images[2].src}
                    alt={images[2].alt}
                    loading="lazy"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 51vw, (max-width: 1024px) 65vw, 30vw"
                  />
                </div>
                <div
                  className="relative w-[calc(216/440*100%)] min-w-0 shrink-0 overflow-hidden rounded-[21.684px] bg-[#1B6936] bg-[url('/assets/images/pages/About/intro4.svg')] bg-cover bg-center flex items-center justify-center"
                  style={{ minWidth: 'clamp(140px, 49%, 216px)' }}
                >
                  <div className="flex flex-col items-center justify-center  px-3 py-4 sm:px-4 sm:gap-2 ">
                    <Image
                      src="/assets/icons/logo/logo-Dark.svg"
                      alt="Watheb Logo"
                      loading="lazy"
                      width={250}
                      height={50}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content — Figma: title 24px/40, body 14px/28, gap 32px */}
          <div className="w-full flex-1 min-w-0 flex flex-col gap-8 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16">
            <div
              className={`flex items-center gap-2 sm:gap-3 justify-end ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <h2
                className={`
                  font-bold text-[#0b2c16]
                  text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] 2xl:text-[64px]
                  leading-[40px] sm:leading-[44px] md:leading-[52px] lg:leading-[1.2] xl:leading-[1.15] 2xl:leading-[1.7]
                `}
              >
                {title}
              </h2>
              <div className="flex items-center gap-1 shrink-0">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-carousel-active" />
                <div className="w-8 sm:w-10 md:w-12 lg:w-14 h-2 rounded-sm bg-carousel-active" />
              </div>
            </div>

            <p
              className={`
                text-grey-600 font-normal
                text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl
                leading-7 sm:leading-7 md:leading-8 lg:leading-loose xl:leading-loose
                ${isRTL ? 'text-right' : 'text-left'}
              `}
            >
              {description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
