'use client';

import { useTranslation } from '../../../hooks/useTranslation';
import { useLanguageStore } from '../../../store/useLanguageStore';
import Image from 'next/image';
import { Indicator } from '../../atoms/Indicator/Indicator';
import FadeContent from '../../FadeContent';

export function OurAbout({ className = '', ...props }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  return (
    <section
      className={`flex justify-center relative w-full h-[871px] mx-auto overflow-hidden ${className}  lg:bg-none `}
      aria-labelledby="about-section-title"
      {...props}
    >

      {/* Desktop: absolute positioning with fixed layout */}
      {/* Mobile/Tablet: relative flow layout */}
      <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 md:top-0 w-full md:w-[1918px] min-h-[871px] md:h-[871px] px-4 md:px-0 py-12 md:py-0">
        {/* Background decorative patterns - hidden on mobile */}
        {/* <div
            className={` md:block absolute w-full h-[650px] top-[221px] bg-[#1B6936] xl:bg-[url('/assets/icons/logo/cover-about.svg')]  about-green-cut-rtl `}
                /> */}

        <div
          className={`
            md:block absolute w-full h-[650px] top-[221px] 
            bg-[#1B6936] ourabout-cover-bg bg-cover
            ${isRTL ? 'lg:[clip-path:polygon(310px_0,100%_0,100%_100%,0_100%,0_668px)]' : 'lg:[clip-path:polygon(0_0,calc(100%-310px)_0,100%_668px,100%_100%,0_100%)]'}
          `}
        />

        {/* Company profile image - positioned LEFT in RTL, RIGHT in LTR */}
        {/* Mobile: centered, smaller */}
        {/* Desktop: absolute positioned on sides */}
        <figure
          className={`
            relative md:absolute 
            mx-auto md:mx-0
            md:top-0 md:ltr:right-[106px] md:rtl:left-[106px] 
            w-[280px] h-[280px] 
            md:w-[602px] md:h-[602px] 
            flex items-center justify-center 
            lg:bg-white rounded-full
            mb-8 md:mb-0
          `}
        >
          <Image
            className="rounded-full object-cover"
            alt={t('about.section.imageAlt')}
            src="/assets/images/pages/Home/Ellipse.webp"
            width={540}
            height={540}
            loading="lazy"
            sizes="(max-width: 768px) 280px, 540px"
          />
        </figure>

        {/* Text content - positioned RIGHT in RTL, LEFT in LTR */}
        {/* Mobile: full width, stacked below image */}
        {/* Desktop: absolute positioned */}
        {/* <article
          className={`
            flex flex-col 
            w-full md:w-[1052px] 
            items-start md:ltr:items-start md:rtl:items-end 
            gap-8 md:gap-16 
            relative md:absolute 
            md:left-2/3 md:-translate-x-1/2 md:top-1/3
            text-start
          `}
          dir={isRTL ? 'rtl' : 'ltr'} */}

        {/* <article
          className={`
    flex flex-col

    w-full
  

    mx-auto
    md:mx-0

    px-6
    md:px-0

    items-start rtl:items-end

    gap-8 md:gap-10 lg:gap-16

    relative
    md:absolute

    md:top-[260px]

    md:rtl:right-[120px]
    md:ltr:left-[120px]

    lg:rtl:right-[180px]
    lg:ltr:left-[180px]

    text-start
  `}
          dir={isRTL ? 'rtl' : 'ltr'}
        > */}

        <article
          className="
    flex flex-col

    w-full

    md:max-w-[720px]
    lg:max-w-[880px]

    mx-auto
    md:mx-0

    px-6
    md:px-0

    items-start rtl:items-end

    gap-8 md:gap-10 lg:gap-16

    relative
    md:absolute

    md:top-[260px]

    md:rtl:right-[120px]
    md:ltr:left-[120px]

    lg:rtl:right-[180px]
    lg:ltr:left-[180px]

    text-start
  " dir={isRTL ? 'rtl' : 'ltr'}
        >

          {/* Section header with title and decorative indicator */}
          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            <header className="inline-flex items-center justify-start w-full relative">

              <div className="md:me-28 lg:me-0 inline-flex items-start justify-center gap-2 md:gap-4 relative flex-[0_0_auto]">
                {/* Decorative green indicator dots */}
                <Indicator className="ms-5" />
              </div>
              <h2
                // id="about-section-title"
                className="md:me-28 lg:me-0 me-2 w-fit font-h2 text-white text-3xl md:text-5xl lg:text-7xl text-start whitespace-nowrap relative [font-style:var(--h2-font-style)]"
              >
                {t('about.section.title')}
              </h2>
            </header>
            {/* Content section with heading and description */}
            <div className="flex flex-col items-start rtl:items-end gap-6 md:gap-16 relative self-stretch w-full flex-[0_0_auto]">
              <h4 className="self-stretch font-din text-xl md:text-3xl lg:text-4xl mt-3 text-white leading-[1.4] relative text-start">
                {t('about.section.heading')}
              </h4>

              <p className="self-stretch font-text-32regular text-[#eaeaea]   text-2xl md:text-lg lg:text-3xl leading-[1.8] relative text-start">
                {t('about.section.description')}
              </p>
            </div>
          </FadeContent>
        </article>
      </div>
    </section>
  );
}