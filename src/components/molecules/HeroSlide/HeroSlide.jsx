'use client';

import { useTranslation } from '../../../hooks/useTranslation';
import { ArrowLeft } from 'lucide-react';
import FadeContent from '../../FadeContent';
import LocaleLink from '../../LocaleLink';

/**
 * HeroSlide — renders the text content for a single hero carousel slide.
 *
 * @param {boolean} isLCP — set to true for the FIRST slide only.
 *   When true, the H1 and paragraph are rendered immediately (no fade-in animation),
 *   so the browser can use them as the LCP candidate without a 1-second delay.
 *   Non-LCP slides keep the GSAP blur/fade animation.
 */
export function HeroSlide({
  titleKey,
  descriptionKey,
  ctaKey,
  isLCP = false,
  className = '',
  ...props
}) {
  const { t } = useTranslation();

  const content = (
    <div className={`pointer-events-auto flex flex-col w-full items-start
      gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14`}>

      <div className={`flex flex-col items-start relative self-stretch w-full
        gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10`}>

        {/* Hero Title — h1 ensures a single H1 per page for SEO */}
        <h1 className={`self-stretch font-bold text-white text-left rtl:text-right
          text-4xl leading-[1.15] rtl:leading-[1.25]
          sm:text-5xl sm:leading-[1.15] sm:rtl:leading-[1.25]
          md:text-6xl md:leading-[1.15] md:rtl:leading-[1.25]
          lg:text-7xl lg:leading-[1.15] lg:rtl:leading-[1.25]
          xl:text-8xl xl:leading-[1.15] xl:rtl:leading-[1.25]`}>
          {t(titleKey)}
        </h1>

        {/* Hero Description */}
        <p className={`w-full text-white/90 font-medium text-left rtl:text-right
          text-lg leading-relaxed
          sm:text-xl sm:leading-relaxed
          md:text-2xl md:leading-relaxed
          lg:text-3xl lg:leading-relaxed
          xl:text-4xl xl:max-w-[850px]`}>
          {t(descriptionKey)}
        </p>
      </div>

      {/* CTA Button */}
      <div className="group">
        <LocaleLink
          href="/contact"
          className="inline-flex items-center justify-center
            bg-white/95 backdrop-blur-sm hover:bg-[#1b6936]
            rounded-[32px] shadow-md hover:shadow-xl transition-all duration-300 flex-row rtl:flex-row-reverse
            gap-3 px-6 py-3 h-12
            sm:gap-3 sm:px-7 sm:py-3.5 sm:h-14
            lg:gap-4 lg:px-8 lg:h-auto lg:py-4"
        >
          <ArrowLeft
            className="text-[#1b6036] shrink-0
              group-hover:text-white transition-transform duration-300
              group-hover:-translate-x-1 rtl:group-hover:translate-x-1
              w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8
              rtl:rotate-180"
            aria-hidden
          />
          <span className="font-bold text-[#1b6036]
            group-hover:text-white whitespace-nowrap
            text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            {t(ctaKey)}
          </span>
        </LocaleLink>
      </div>
    </div>
  );

  return (
    <div
      className={`flex flex-col pointer-events-none items-start self-start rtl:self-end ${className}
        gap-6 p-4 pt-20
        sm:gap-8 sm:p-6 sm:pt-24
        md:gap-10 md:pt-28
        lg:gap-12 lg:pt-32
        xl:gap-14 xl:pt-36`}
      {...props}
    >
      {isLCP ? (
        // First slide: render content immediately — no opacity:0 hiding the LCP element
        content
      ) : (
        // Subsequent slides: keep the blur/fade-in animation
        <FadeContent blur duration={1000} easing="ease-out" initialOpacity={0}>
          {content}
        </FadeContent>
      )}
    </div>
  );
}
