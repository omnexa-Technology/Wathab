'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import Image from 'next/image';

export function AboutTimeline() {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const title = t('about.timeline.title');

  const steps = [
    {
      icon: '/assets/icons/ui/About/Frame (9).svg',
      title: t('about.timeline.steps.step1.title'),
      description: t('about.timeline.steps.step1.description'),
      highlighted: false,
    },
    {
      icon: '/assets/icons/ui/About/Button.svg',
      title: t('about.timeline.steps.step2.title'),
      description: t('about.timeline.steps.step2.description'),
      highlighted: false,
    },
    {
      icon: '/assets/icons/ui/About/Frame (7).svg',
      title: t('about.timeline.steps.step3.title'),
      description: t('about.timeline.steps.step3.description'),
      highlighted: false,
    },
    {
      icon: '/assets/icons/ui/About/Frame (6).svg',
      title: t('about.timeline.steps.step4.title'),
      description: t('about.timeline.steps.step4.description'),
      highlighted: false,
    },
    {
      icon: '/assets/icons/ui/About/Frame (5).svg',
      title: t('about.timeline.steps.step5.title'),
      description: t('about.timeline.steps.step5.description'),
      highlighted: false,
    },
    {
      icon: '/assets/icons/ui/About/Frame (4).svg',
      title: t('about.timeline.steps.step6.title'),
      description: t('about.timeline.steps.step6.description'),
      highlighted: false,
    },
  ];

  return (
    <section
      className="py-24 lg:px-[120px]"
      style={{
        background: 'linear-gradient(-90deg, rgb(243, 248, 236) 0%, rgb(255, 255, 255) 80%)',
      }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className=" mx-auto flex flex-col gap-24 items-center">
        {/* Section Title */}
        <div className="flex items-center justify-center w-full">
          <div className="flex gap-4 items-center justify-center max-w-[1338px] w-full">
            <h2
              className="font-din font-medium text-[#0b2c16] text-[64px] leading-[108px] text-center whitespace-pre-wrap flex-1"
            >
              {title}
            </h2>
            <div className="flex items-center gap-1 h-2 shrink-0">
              <div className="w-2 h-2 rounded-full bg-carousel-active" />
              <div className="w-16 h-2 rounded-sm bg-carousel-active" />
            </div>
          </div>
        </div>

        {/* Timeline Cards */}
        <div className="flex gap-6 items-center w-full ">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-12 px-4 py-8 rounded-3xl min-w-[260px] w-[260px] transition-all duration-500 ease-in-out cursor-pointer hover:scale-105 hover:shadow-2xl hover:bg-white group ${step.highlighted ? 'bg-white shadow-lg' : ''
                }`}
            >
              {/* Icon Container */}
              <div
                className={`flex items-center justify-center p-2 rounded-full w-24 h-24 transition-all duration-500 ease-in-out group-hover:scale-110  ${step.highlighted ? 'bg-[#1b6936]' : 'bg-[#fdfdfd] group-hover:bg-[#1b6936]'
                  }`}
              >
                <div className="relative w-14 h-14 transition-transform duration-500">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-8 text-center w-full">
                <h3 className="font-din font-medium text-[#141414] text-2xl leading-[48px] w-full whitespace-pre-wrap transition-colors duration-300 group-hover:text-[#1b6936]">
                  {step.title}
                </h3>
                <p className="font-din font-normal text-grey-600 text-xl leading-normal w-full whitespace-pre-wrap transition-colors duration-300 group-hover:text-[#141414]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
