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
  className = '',
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
      className={`relative w-full min-h-screen ${className}`}
      {...props}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 pointer-events-none z-10" />

      {/* Decorative vectors */}
      <div className="absolute w-[22.92%] h-[40.74%] top-[59.26%] left-[77.08%] opacity-[0.16] pointer-events-none z-0">
        {/* Vector images would go here */}
      </div>

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
        fadeEffect={{
          crossFade: true,
        }}
        speed={800}
        className="w-full h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id || index}>
            {slide.imageSrc && (
              <div className="absolute inset-0 z-0">
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
                <Image
                  src='/assets/images/pages/Home/HeroHome.webp'
                  alt="hero cover"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={index === 0}
                />
                <div className=" flex w-full max-w-[1680px] items-center ltr:justify-start rtl:justify-start gap-12 absolute top-[204px] ltr:left-1/2 ltr:-translate-x-1/2 rtl:right-1/2 rtl:translate-x-1/2 px-4 z-100">
                  <HeroSlide
                    titleKey={slide.titleKey}
                    descriptionKey={slide.descriptionKey}
                    ctaKey={slide.ctaKey}
                    ctaHref={slide.ctaHref}
                  />
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Controls */}
      <div className="w-7xl fex items-start justify-start absolute bottom-16 z-30">
        <CarouselNavigation
          onPrev={handlePrev}
          onNext={handleNext}
          isBeginning={isBeginning}
          isEnd={isEnd && !loop}
        />
      </div>

      {/* RTL/LTR: Pagination — left in LTR, right in RTL */}
      <div className="absolute top-[204px] ltr:left-8 rtl:right-8 z-30">
        <CarouselPagination
          totalSlides={slides.length}
          activeIndex={activeIndex}
          onSlideChange={handlePaginationClick}
        />
      </div>
    </div >
  );
}