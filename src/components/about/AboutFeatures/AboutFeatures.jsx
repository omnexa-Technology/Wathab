'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export function AboutFeatures() {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const title = t('about.features.title');
  const cta = t('about.features.cta');

  const features = [
    {
      icon: '/assets/icons/ui/About/Frame.svg',
      title: t('about.features.items.balance.title'),
      description: t('about.features.items.balance.description'),
    },
    {
      icon: '/assets/icons/ui/About/Frame (1).svg',
      title: t('about.features.items.alliances.title'),
      description: t('about.features.items.alliances.description'),
    },
    {
      icon: '/assets/icons/ui/About/Frame (2).svg',
      title: t('about.features.items.legislation.title'),
      description: t('about.features.items.legislation.description'),
    },
    {
      icon: '/assets/icons/ui/About/Frame (3).svg',
      title: t('about.features.items.solutions.title'),
      description: t('about.features.items.solutions.description'),
    },
  ];

  return (
    <section
      className="py-24 px-8 lg:px-[120px] bg-linear-to-l from-[#eaeaea] to-white"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="flex flex-col lg:flex-row gap-16 items-start max-w-[1440px] mx-auto">
        {/* Image Section */}
        <div className="shrink-0 w-full lg:w-[680px] h-[400px] lg:h-[680px] relative rounded-3xl overflow-hidden">
          <Image
            src="/assets/images/pages/About/about1.webp"
            alt="Environmental Solutions"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 680px"
            priority
          />
        </div>
        {/* Content Section */}
        <div className={`flex-1 flex flex-col gap-12 items-start`}>
          {/* Section Title with Decorative Element */}
          <div className={`flex  gap-4 w-full items-center justify-start`}>
            <div className="flex items-center gap-1 h-2">
              <div className="w-2 h-2 rounded-full bg-carousel-active" />
              <div className="w-16 h-2 rounded-sm bg-carousel-active" />
            </div>
            <h2 className="text-[#0b2c16] text-4xl font-medium leading-tight">
              {title}
            </h2>
          </div>
          {/* Features List */}
          <div className="flex flex-col gap-12 w-full">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex gap-6 items-start ${isRTL ? 'flex-row-reverse' : ''}`}
              >

                {/* Text Content */}
                <div className={`flex-1 flex flex-col items-start`}>
                  <h3 className={`text-[#222] text-2xl font-medium leading-[56px] ${isRTL ? 'text-center' : 'text-left'}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-grey-600 text-2xl leading-[48px] ${isRTL ? 'text-right' : 'text-left'}`}>
                    {feature.description}
                  </p>
                </div>
                {/* Icon */}
                <div className="shrink-0 w-16 h-16 rounded-2xl border border-[#b6b6b6] bg-[#fdfdfd] flex items-center justify-center p-2">
                  <div className="w-10 h-10 relative">
                    <Image
                      src={feature.icon}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* CTA Button */}
          <button className="bg-[#1b6936] hover:bg-[#0b2c16] transition-colors text-white px-6 py-3 rounded-[32px] h-16 flex items-center justify-center gap-4 text-xl font-bold">
            <div className="w-8 h-8 flex items-center justify-center -rotate-90">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <span>{cta}</span>
          </button>
        </div>

      </div>
    </section>
  );
}
