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
      className="overflow-x-hidden w-full min-w-0
        px-4 py-12
        sm:px-5 sm:py-14
        md:px-6 md:py-16
        lg:px-12 lg:py-24
        xl:px-16
        2xl:px-[120px] 2xl:py-24"
      style={{
        background: 'linear-gradient(-90deg, rgb(243, 248, 236) 0%, rgb(255, 255, 255) 80%)',
      }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="mx-auto flex flex-col gap-10 w-full max-w-[1338px] min-w-0 sm:gap-12 md:gap-14 lg:gap-24">
        {/* Section Title */}
        <div className="flex flex-col items-center justify-center w-full min-w-0 gap-3 sm:gap-4">
          <h2
            className="font-din font-medium text-[#0b2c16] text-center w-full min-w-0
              text-xl leading-snug
              sm:text-2xl sm:leading-tight
              md:text-3xl md:leading-snug
              lg:text-4xl lg:leading-tight
              xl:text-5xl xl:leading-[1.2]
              2xl:text-[64px] 2xl:leading-[108px]"
          >
            {title}
          </h2>
          <div className="flex items-center gap-1 h-1.5 shrink-0 sm:h-2" aria-hidden>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#1b6936]" />
            <div className="w-12 h-1.5 sm:w-16 sm:h-2 rounded-sm bg-[#1b6936]" />
          </div>
        </div>

        {/* Timeline Cards - 1 col mobile, 2 cols sm/md, 3 cols lg+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full min-w-0 sm:gap-5 lg:gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group flex flex-col items-center gap-6 rounded-3xl min-w-0 w-full transition-all duration-300 ease-out cursor-pointer
                px-4 py-6
                sm:gap-8 sm:px-5 sm:py-7
                lg:gap-12 lg:px-6 lg:py-8
                hover:scale-[1.02] hover:shadow-xl
                min-h-[200px]
                ${step.highlighted ? 'bg-[#F4FAF7] shadow-lg border border-[#E8F0EB]' : 'bg-white hover:bg-white'}`}
            >
              {/* Icon Container - touch-friendly min size */}
              <div
                className={`flex items-center justify-center rounded-full shrink-0 transition-all duration-300
                  w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24
                  ${step.highlighted ? 'bg-[#1b6936]' : 'bg-[#fdfdfd] group-hover:bg-[#1b6936]'}`}
              >
                <div className="relative w-9 h-9 sm:w-11 sm:h-11 lg:w-14 lg:h-14">
                  <Image
                    src={step.icon}
                    alt=""
                    width={56}
                    height={56}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 text-center w-full min-w-0 flex-1 sm:gap-5 lg:gap-8">
                <h3 className="font-din font-medium text-[#141414] w-full min-w-0 transition-colors duration-300 text-base leading-snug sm:text-lg sm:leading-tight md:text-xl lg:text-2xl lg:leading-[1.4]">
                  {step.title}
                </h3>
                <p className="font-din font-normal text-grey-600 w-full min-w-0 text-sm leading-relaxed sm:text-base lg:text-xl lg:leading-normal transition-colors duration-300">
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
