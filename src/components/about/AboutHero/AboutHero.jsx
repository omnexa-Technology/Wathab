'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import LocaleLink from '@/components/LocaleLink';
import Image from 'next/image';

export function AboutHero() {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const title = t('about.hero.title');
  const homeText = t('navbar.home');
  const aboutText = t('navbar.about');

  return (
    <section
      className="relative w-full h-[500px] sm:h-[600px] lg:h-[780px] flex items-center justify-center overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/pages/Home/swiper1.webp"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Green Gradient Overlays */}
      <div
        className="absolute top-0 right-0 h-full w-full sm:w-[70%] lg:w-[56.25%] z-1"
        style={{
          background: isRTL
            ? 'linear-gradient(90.5deg, rgba(27, 105, 54, 0) 0.35%, rgb(27, 105, 54) 99.74%)'
            : 'linear-gradient(270.5deg, rgba(27, 105, 54, 0) 0.35%, rgb(27, 105, 54) 99.74%)'
        }}
      />
      <div
        className="absolute top-0 left-0 sm:left-[30%] lg:left-[48.125%] h-full w-full sm:w-[70%] lg:w-[51.875%] z-2"
        style={{
          background: isRTL
            ? 'linear-gradient(90.46deg, rgba(27, 105, 54, 0) 0.35%, rgba(27, 105, 54, 0.9) 99.74%)'
            : 'linear-gradient(270.46deg, rgba(27, 105, 54, 0) 0.35%, rgba(27, 105, 54, 0.9) 99.74%)'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-start">
        <div className="flex flex-col gap-16 sm:gap-24 lg:gap-[120px] items-end w-full max-w-full sm:max-w-[90%] lg:max-w-[724px]">
          {/* Main Title */}
          <h1
            className={`text-white font-medium
              text-3xl sm:text-4xl md:text-5xl lg:text-[64px]
              leading-tight sm:leading-snug md:leading-normal lg:leading-[108px]
              ${isRTL ? 'text-right' : 'text-left'}
            `}
            style={{ fontFamily: 'var(--font-family, "DIN Next LT Arabic", sans-serif)' }}
          >
            {title}
          </h1>

          {/* Breadcrumb Navigation */}
          <nav
            className={`flex items-center gap-2 sm:gap-3 w-full
              ${isRTL ? 'justify-start' : 'justify-start'}
            `}
            aria-label="Breadcrumb"
          >
            {isRTL ? (
              <>

                {/* Home Icon */}
                <LocaleLink href="/" className="hover:opacity-80 transition-opacity">
                  <div className="flex items-center  justify-center shrink-0">
                    <Image
                      src="/assets/icons/ui/home-eco.svg"
                      alt="Home"
                      width={24}
                      height={24}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                  </div>
                </LocaleLink>
                <span
                  className="text-white text-center text-lg sm:text-2xl lg:text-[32px] font-medium leading-tight sm:leading-snug lg:leading-[56px]"
                  style={{ fontFamily: 'var(--font-family, "DIN Next LT Arabic", sans-serif)' }}
                >
                  {homeText}
                </span>
                {/* Arrow Icon - Double Forward Arrow (Rotated/Flipped for RTL) */}
                <div className="flex items-center justify-center shrink-0">
                  <div className="transform  scale-y-[-1]">
                    <Image
                      src="/assets/icons/ui/arrow-forward-double1.svg"
                      alt=""
                      width={32}
                      height={32}
                      className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
                    />
                  </div>
                </div>
                <LocaleLink href="/about" className="hover:opacity-80 transition-opacity">
                  <span
                    className="text-white text-center text-lg sm:text-2xl lg:text-[32px] font-normal leading-tight sm:leading-normal lg:leading-[64px]"
                    style={{ fontFamily: '"DIN Next LT Arabic", sans-serif' }}
                  >
                    {aboutText}
                  </span>
                </LocaleLink>
              </>
            ) : (
              <>
                {/* Home Icon */}
                <LocaleLink href="/" className="hover:opacity-80 transition-opacity">
                  <div className="flex items-center justify-center shrink-0">
                    <Image
                      src="/assets/icons/ui/home-eco.svg"
                      alt="Home"
                      width={24}
                      height={24}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                  </div>
                </LocaleLink>
                <LocaleLink href="/" className="hover:opacity-80 transition-opacity">
                  <span
                    className="text-white text-center text-lg sm:text-2xl lg:text-[32px] font-normal leading-tight sm:leading-normal lg:leading-[64px]"
                  >
                    {homeText}
                  </span>
                </LocaleLink>
                {/* Arrow Icon - Normal for LTR */}
                <div className="flex items-center justify-center shrink-0">
                  <Image
                    src="/assets/icons/ui/arrow-forward-double1.svg"
                    alt=""
                    width={32}
                    height={32}
                    className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
                  />
                </div>

                <span
                  className="text-white text-center text-lg sm:text-2xl lg:text-[32px] font-medium leading-tight sm:leading-snug lg:leading-[56px]"
                >
                  {aboutText}
                </span>
              </>
            )}
          </nav>
        </div>
      </div>

      {/* Semi-transparent Logo (Bottom Left/Right for RTL) */}
      <div
        className={`absolute bottom-[15%] sm:bottom-[20%] lg:bottom-[22.06%] 
          ${isRTL ? 'left-[5%] sm:left-[15%] lg:left-[25.84%]' : 'right-[5%] sm:right-[15%] lg:right-[25.84%]'}
          w-[15%] sm:w-[10%] lg:w-[8%] h-auto aspect-square z-3
        `}
      >
        <Image
          src="/assets/icons/logo/logo-light.svg"
          alt=""
          fill
          className="object-contain opacity-10 sm:opacity-15 lg:opacity-20"
        />
      </div>
    </section>
  );
}
