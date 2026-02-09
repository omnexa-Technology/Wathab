'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import { Container } from '@/components/atoms/Container/Container';
import { Heading } from '@/components/atoms/Heading/Heading';
import { Paragraph } from '@/components/atoms/Paragraph/Paragraph';
import Image from 'next/image';

export function AboutTimeline() {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const title = t('about.timeline.title');

  const steps = [
    {
      icon: '/assets/icons/ui/About/Frame (8).svg',
      title: t('about.timeline.steps.step1.title'),
      description: t('about.timeline.steps.step1.description'),
      highlighted: false,
    },
    {
      icon: '/assets/icons/ui/About/Frame (9).svg',
      title: t('about.timeline.steps.step2.title'),
      description: t('about.timeline.steps.step2.description'),
      highlighted: true,
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
      className="py-24"
      style={{
        background: 'linear-gradient(90deg, rgb(243, 248, 236) 0%, rgb(255, 255, 255) 80%)',
      }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <Container>
        {/* Section Title */}
        <div className="flex items-center justify-center mb-24">
          <div className="flex items-center gap-4 max-w-5xl">
            <Heading
              level="h2"
              className="text-[#0b2c16] text-4xl lg:text-6xl font-medium text-center leading-tight"
              style={{ fontFamily: 'var(--font-din-next-lt-arabic)' }}
            >
              {title}
            </Heading>
            <div className="flex items-center gap-1 shrink-0">
              <div className="w-2 h-2 rounded-full bg-carousel-active" />
              <div className="w-16 h-2 rounded-sm bg-carousel-active" />
            </div>
          </div>
        </div>

        {/* Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-12 px-4 py-8 rounded-3xl ${
                step.highlighted ? 'bg-white' : ''
              }`}
            >
              {/* Icon Container */}
              <div
                className={`flex items-center justify-center p-2 rounded-full w-24 h-24 ${'bg-[#fdfdfd]'
                }`}
              >
                <div className="relative w-14 h-14">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-8 text-center">
                <h3
                  className="text-[#141414] text-2xl font-medium leading-tight"
                  style={{ fontFamily: 'var(--font-din-next-lt-arabic)' }}
                >
                  {step.title}
                </h3>
                <Paragraph
                  className="text-grey-600 text-xl leading-normal"
                  style={{ fontFamily: 'var(--font-din-next-lt-arabic)' }}
                >
                  {step.description}
                </Paragraph>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
