'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import { MainCarouselCard } from '@/components/molecules/MainCarouselCard/MainCarouselCard';
import { SideCarouselCard } from '@/components/molecules/SideCarouselCard/SideCarouselCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Link from 'next/link';

interface ImpactItem {
  id: string;
  type: 'main' | 'side';
  imageSrc: string;
  imageAlt?: string;
  iconSrc?: string;
  iconAlt?: string;
  title?: string;
  description?: string;
}

interface ImpactCarouselSectionProps {
  className?: string;
}

/**
 * ImpactCarouselSection - Statistics/Impact carousel organism
 * Features one large main card with multiple narrow side cards in a carousel layout
 * Uses shadcn Carousel (Embla-based) with RTL support
 */
export function ImpactCarouselSection({
  className = ''
}: ImpactCarouselSectionProps) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  // Exclusive hover: only one card expanded at a time; driven by activeIndex
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Placeholder data - will be replaced with real API data
  const impactData: ImpactItem[] = [
    // Side cards before main card
    {
      id: 'side-1',
      type: 'side',
      imageSrc: '/assets/images/pages/Home/impact-side-1.webp',
      imageAlt: 'Environmental project 1',
      title: 'مشروع بيئي',
    },
    {
      id: 'side-2',
      type: 'side',
      imageSrc: '/assets/images/pages/Home/impact-side-2.webp',
      imageAlt: 'Environmental project 2',
      title: 'استشارات بيئية',
    },
    // Main featured card
    {
      id: 'main-1',
      type: 'main',
      imageSrc: '/assets/images/pages/Home/achievement-bg.webp',
      imageAlt: 'Main environmental impact project',
      iconSrc: '/assets/icons/ui/achievement-industrial.svg',
      iconAlt: 'Industrial sector',
      title: 'القطاع الصناعي (دراسات الأثر البيئي)',
      description: 'تقديم دراسة تقييم الأثر البيئي الشاملة (EIA) لعدد من المصانع الكبرى في مجالات استراتيجية، بناء على ذلك قطاع البتروكيماويات وصناعة الحديد، في مواقع متعددة حول المملكة',
    },
    // Side cards after main card
    {
      id: 'side-3',
      type: 'side',
      imageSrc: '/assets/images/pages/Home/impact-side-3.webp',
      imageAlt: 'Environmental project 3',
      title: 'تقييم الأثر',
    },
    {
      id: 'side-4',
      type: 'side',
      imageSrc: '/assets/images/pages/Home/impact-side-4.webp',
      imageAlt: 'Environmental project 4',
      title: 'حلول مستدامة',
    },
    {
      id: 'side-5',
      type: 'side',
      imageSrc: '/assets/images/pages/Home/impact-side-5.webp',
      imageAlt: 'Environmental project 5',
      title: 'بيئة نظيفة',
    },
  ];

  return (
    <section
      className={`flex flex-col gap-16 items-center px-4 md:px-[120px] py-24 bg-white w-full ${className}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="flex flex-col gap-16 items-center w-full max-w-[1680px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
          {/* Discover More Link */}
          <Link
            href="/impact"
            className="flex items-center gap-2 text-[#1b6936] hover:opacity-80 transition-opacity order-2 md:order-1"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.6667 16H5.33337M5.33337 16L16 26.6667M5.33337 16L16 5.33337"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="font-din font-medium text-2xl md:text-[32px] leading-[56px]">
              اكتشف المزيد
            </span>
          </Link>

          {/* Section Title */}
          <div className="flex items-center gap-4 flex-1 justify-center md:justify-end order-1 md:order-2">
            <h2 className="font-din font-medium text-4xl md:text-[64px] leading-tight md:leading-[108px] text-[#0b2c16]">
              {t('impact.sectionTitle') || 'إنجازاتنا في القطاعات الحيوية'}
            </h2>
            <div className="flex items-center gap-1 h-2">
              <div className="w-2 h-2 rounded-full bg-[#86ba41]" />
              <div className="w-16 h-2 rounded-sm bg-[#86ba41]" />
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="w-full relative">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
              direction: isRTL ? 'rtl' : 'ltr',
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-8">
              {impactData.map((item, index) => (
                <CarouselItem
                  key={item.id}
                  className={`pl-4 md:pl-8 ${item.type === 'main'
                    ? 'basis-full md:basis-[calc(100%-4*153px-4*32px)]'
                    : 'basis-[200px] md:basis-[153px]'
                    }`}
                >
                  {item.type === 'main' ? (
                    <MainCarouselCard
                      imageSrc={item.imageSrc}
                      imageAlt={item.imageAlt}
                      iconSrc={item.iconSrc!}
                      iconAlt={item.iconAlt}
                      title={item.title!}
                      description={item.description!}
                      isActive={activeIndex === index}
                      onHover={() => setActiveIndex(index)}
                      onLeave={() => setActiveIndex(null)}
                    />
                  ) : (
                    <SideCarouselCard
                      imageSrc={item.imageSrc}
                      imageAlt={item.imageAlt}
                      title={item.title}
                      isActive={activeIndex === index}
                      onHover={() => setActiveIndex(index)}
                      onLeave={() => setActiveIndex(null)}
                    />
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Buttons */}
            <CarouselPrevious
              className="hidden md:flex -left-12 bg-white border-2 border-[#1b6936] text-[#1b6936] hover:bg-[#1b6936] hover:text-white"
            />
            <CarouselNext
              className="hidden md:flex -right-12 bg-white border-2 border-[#1b6936] text-[#1b6936] hover:bg-[#1b6936] hover:text-white"
            />
          </Carousel>
        </div>

        {/* Mobile Navigation Dots (optional) */}
        <div className="flex md:hidden items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#86ba41]" />
          <div className="w-3 h-3 rounded-full bg-[#e5e5e5]" />
          <div className="w-3 h-3 rounded-full bg-[#e5e5e5]" />
        </div>
      </div>
    </section>
  );
}
