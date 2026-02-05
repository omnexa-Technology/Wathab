'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import Image from 'next/image';
import { Indicator } from '@/components/atoms/Indicator/Indicator';
import FadeContent from '@/components/FadeContent';

export function OurAbout({ className = '', ...props }) {
    const { t } = useTranslation();
    const language = useLanguageStore((s) => s.language);
    const isRTL = language === 'ar';

    return (
        <section
            className={`flex justify-center relative w-full max-w-[1918px] h-[871px] mx-auto overflow-hidden ${className}`}
            aria-labelledby="about-section-title"
            {...props}
        >

            {/* Desktop: absolute positioning with fixed layout */}
            {/* Mobile/Tablet: relative flow layout */}
            <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 md:top-0 w-full md:w-[1918px] min-h-[871px] md:h-[871px] px-4 md:px-0 py-12 md:py-0">
                {/* Background decorative patterns - hidden on mobile */}
                <div
                    className={`hidden md:block absolute w-full h-[650px] top-[221px] bg-[#1B6936] ${isRTL ? 'about-green-cut-rtl' : 'about-green-cut-ltr'}`}
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
            bg-white rounded-full
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
                <article
                    className={`
            flex flex-col 
            w-full md:w-[1052px] 
            items-start md:ltr:items-start md:rtl:items-end 
            gap-8 md:gap-16 
            relative md:absolute 
            md:left-2/3 md:-translate-x-1/2 md:top-1/3
            text-start
          `}
                    dir={isRTL ? 'rtl' : 'ltr'}
                >
                    {/* Section header with title and decorative indicator */}
                    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                        <header className="inline-flex items-center justify-start w-full relative">

                            <div className={`inline-flex items-start justify-center gap-2 md:gap-4 relative flex-[0_0_auto] `}>
                                {/* Decorative green indicator dots */}
                                <Indicator />
                            </div>
                            <h2
                                // id="about-section-title"
                                className="me-2 w-fit font-h2 text-white text-7xl text-start whitespace-nowrap relative [font-style:var(--h2-font-style)]"
                            >
                                {t('about.section.title')}
                            </h2>
                        </header>
                        {/* Content section with heading and description */}
                        <div className="flex flex-col ltr:items-start rtl:items-end gap-6 md:gap-16 relative self-stretch w-full flex-[0_0_auto]">
                            <h3 className="self-stretch font-din text-5xl text-white leading-[1.4] relative text-start">
                                {t('about.section.heading')}
                            </h3>

                            <p className="self-stretch font-text-32regular text-[#eaeaea] text-3xl leading-[1.8] relative text-start">
                                {t('about.section.description')}
                            </p>
                        </div>
                    </FadeContent>
                </article>
            </div>
        </section>
    );
}
