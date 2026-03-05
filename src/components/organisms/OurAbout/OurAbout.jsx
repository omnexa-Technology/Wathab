'use client';

import { useTranslation } from '../../../hooks/useTranslation';
import { useDirection } from '@radix-ui/react-direction';
import Image from 'next/image';
import { Indicator } from '../../atoms/Indicator/Indicator';
import FadeContent from '../../FadeContent';

// Shared section header — uses Radix useDirection() to get reliable dir value
function AboutHeader({ t, headingId }) {
  const dir = useDirection();
  const isRTL = dir === 'rtl';

  return (
    <FadeContent blur duration={900} easing="ease-out" initialOpacity={0}>
      {/* Title row — reversed in RTL so Indicator is always on the "start" side */}
      <header
        dir={dir}
        className="flex items-center gap-2 md:gap-4"
      >
        <Indicator />
        <h2
          id={headingId}
          className="font-bold text-white whitespace-nowrap text-2xl sm:text-3xl lg:text-5xl xl:text-7xl"
        >
          {t('about.section.title')}
        </h2>
      </header>

      {/* Heading + Description — explicit dir on container so text aligns correctly */}
      <div
        dir={dir}
        className="flex flex-col gap-4 md:gap-6 lg:gap-8 mt-4 md:mt-6"
      >
        <h3
          className="
            font-bold text-white
            text-xl sm:text-2xl lg:text-3xl xl:text-4xl
            leading-[1.5] rtl:leading-[1.7]
          "
        >
          {t('about.section.heading')}
        </h3>
        <p
          className="
            font-normal text-[#eaeaea]
            text-sm sm:text-base lg:text-lg xl:text-2xl
            leading-[1.8] rtl:leading-[2]
          "
        >
          {t('about.section.description')}
        </p>
      </div>
    </FadeContent>
  );
}

export function OurAbout({ className = '', ...props }) {
  const { t } = useTranslation();

  return (
    <section
      className={`relative w-full overflow-hidden bg-white ${className}`}
      aria-labelledby="about-section-title"
      style={{ minHeight: '500px' }}
      {...props}
    >
      {/* Green background slab with diagonal clip on desktop */}
      <div
        className="
          absolute inset-x-0 bottom-0
          top-[180px] sm:top-[200px] md:top-[221px]
          bg-[#1B6936] ourabout-cover-bg bg-cover bg-center
          ltr:lg:[clip-path:polygon(0_0,calc(100%-310px)_0,100%_668px,100%_100%,0_100%)]
          rtl:lg:[clip-path:polygon(310px_0,100%_0,100%_100%,0_100%,0_668px)]
        "
        aria-hidden="true"
      />

      <div className="relative w-full max-w-[1680px] mx-auto">

        {/* ══ MOBILE / TABLET layout (< lg) ══ */}
        <div className="flex flex-col lg:hidden">

          {/* White top area — image peeks into the green below */}
          <div className="relative h-[220px] sm:h-[250px] flex ltr:justify-start rtl:justify-end px-6 sm:px-10">
            <figure className="
              absolute bottom-[-60px] sm:bottom-[-80px]
              ltr:left-6 rtl:right-6
              sm:ltr:left-10 sm:rtl:right-10
              w-[150px] h-[150px] sm:w-[180px] sm:h-[180px]
              rounded-full bg-white shadow-xl z-10
            ">
              <Image
                className="rounded-full object-cover w-full h-full"
                alt={t('about.section.imageAlt')}
                src="/assets/images/pages/Home/Ellipse.webp"
                width={180}
                height={180}
                loading="lazy"
              />
            </figure>
          </div>

          {/* Green content area */}
          <article className="relative z-10 pt-20 sm:pt-24 pb-10 sm:pb-12 px-6 sm:px-10">
            <AboutHeader t={t} headingId="about-section-title" />
          </article>
        </div>

        {/* ══ DESKTOP layout (lg+) ══ */}
        <div className="hidden lg:block relative" style={{ height: '871px' }}>

          {/* Profile image — ltr: right side | rtl: left side */}
          <figure className="
            absolute top-0 z-10
            ltr:right-[106px] rtl:left-[106px]
            w-[540px] h-[540px]
            rounded-full bg-white shadow-2xl
            flex items-center justify-center
          ">
            <Image
              className="rounded-full object-cover"
              alt={t('about.section.imageAlt')}
              src="/assets/images/pages/Home/Ellipse.webp"
              width={510}
              height={510}
              loading="lazy"
              sizes="540px"
            />
          </figure>

          {/* Text — ltr: left side | rtl: right side */}
          <article className="
            absolute top-[260px] z-10
            ltr:left-[140px] xl:ltr:left-[180px]
            rtl:right-[140px] xl:rtl:right-[180px]
            max-w-[720px] xl:max-w-[880px]
          ">
            <AboutHeader t={t} headingId="about-section-title-desktop" />
          </article>
        </div>
      </div>
    </section>
  );
}