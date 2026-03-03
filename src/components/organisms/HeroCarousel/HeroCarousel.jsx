'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { useLanguageStore } from '../../../store/useLanguageStore';
import { CarouselNavigation } from '../../molecules/CarouselNavigation/CarouselNavigation';
import { CarouselPagination } from '../../molecules/CarouselPagination/CarouselPagination';
import { HeroSlide } from '../../molecules/HeroSlide/HeroSlide';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export function HeroCarousel({
  slides = [],
  autoplayDelay = 5000,
  loop = true,
  
  ...props
}) {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const handleSlideChange = useCallback((swiper) => {
    setActiveIndex(swiper.realIndex);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }, []);

  const handlePrev = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  const handlePaginationClick = useCallback((index) => {
    swiperRef.current?.slideToLoop(index);
  }, []);

  return (
    <div
      className={`relative w-full min-h-screen `}
      {...props}
    >
      {/* Main Swiper Container */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        onSlideChange={handleSlideChange}
        direction="horizontal"
        dir={isRTL ? 'rtl' : 'ltr'}
        loop={loop}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={800}
        className="w-full h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id || index}>
            {slide.imageSrc && (
              <div className="absolute inset-0 z-0">
                {/* Green gradient overlays */}
                <div
                  className={`absolute top-0 h-full z-[1] ${isRTL ? 'right-0 w-full sm:w-[70%] lg:w-[56.25%]' : 'left-0 w-full sm:w-[70%] lg:w-[56.25%]'}`}
                  style={{
                    background: isRTL
                      ? 'linear-gradient(90.5deg, rgba(27, 105, 54, 0) 0.35%, rgb(27, 105, 54) 99.74%)'
                      : 'linear-gradient(270.5deg, rgba(27, 105, 54, 0) 0.35%, rgb(27, 105, 54) 99.74%)'
                  }}
                />
                <div
                  className={`absolute top-0 h-full z-[2] ${isRTL ? 'left-0 sm:left-[30%] lg:left-[48.125%] w-full sm:w-[70%] lg:w-[51.875%]' : 'right-0 sm:right-[30%] lg:right-[48.125%] w-full sm:w-[70%] lg:w-[51.875%]'}`}
                  style={{
                    background: isRTL
                      ? 'linear-gradient(90.46deg, rgba(27, 105, 54, 0) 0.35%, rgba(27, 105, 54, 0.9) 99.74%)'
                      : 'linear-gradient(270.46deg, rgba(27, 105, 54, 0) 0.35%, rgba(27, 105, 54, 0.9) 99.74%)'
                  }}
                />
                <Image
                  src='/assets/images/pages/Home/HeroHome.webp'
                  alt="hero cover"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={index === 0}
                />

                {/* Slide content — responsive vertical offset */}
                <div className="flex w-full max-w-[1680px] items-center justify-start absolute ltr:left-1/2 ltr:-translate-x-1/2 rtl:right-1/2 rtl:translate-x-1/2 z-[100]
                  top-[80px] sm:top-[100px] md:top-[140px] lg:top-[180px] xl:top-[204px]
                  px-4 sm:px-5 md:px-6 lg:px-8">
                  <HeroSlide
                    titleKey={slide.titleKey}
                    descriptionKey={slide.descriptionKey}
                    ctaKey={slide.ctaKey}
                  />
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Controls */}
      <div className="absolute z-30
        bottom-8 sm:bottom-10 lg:bottom-16
        left-1/2 -translate-x-1/2
        lg:left-auto lg:right-auto lg:translate-x-0
        lg:ltr:left-8 lg:rtl:right-8
        flex items-center">
        <CarouselNavigation
          onPrev={handlePrev}
          onNext={handleNext}
          isBeginning={isBeginning}
          isEnd={isEnd && !loop}
        />
      </div>

      {/* Pagination — beside slide content.
          Mobile: vertically centered on the side.
          Tablet+: aligned with hero content top offsets. */}
      <div className="absolute z-30
        top-1/2 -translate-y-1/2 rotate-90
        ltr:left-4 rtl:right-4
        sm:ltr:left-6 sm:rtl:right-6
        md:top-[140px] md:translate-y-0 md:rotate-0 md:ltr:left-6 md:rtl:right-6
        lg:top-[180px] lg:ltr:left-8 lg:rtl:right-8
        xl:top-[204px]">
        <CarouselPagination
          totalSlides={slides.length}
          activeIndex={activeIndex}
          onSlideChange={handlePaginationClick}
        />
      </div>
    </div>
  );
}