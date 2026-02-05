'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import { Container } from '@/components/atoms/Container/Container';
import { Heading } from '@/components/atoms/Heading/Heading';
import { Paragraph } from '@/components/atoms/Paragraph/Paragraph';
import { FileSearch, Lightbulb, Rocket, TrendingUp } from 'lucide-react';

export function AboutTimeline() {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const title = t('about.timeline.title');

  const steps = [
    {
      icon: FileSearch,
      title: t('about.timeline.steps.step1.title'),
      description: t('about.timeline.steps.step1.description'),
    },
    {
      icon: Lightbulb,
      title: t('about.timeline.steps.step2.title'),
      description: t('about.timeline.steps.step2.description'),
    },
    {
      icon: Rocket,
      title: t('about.timeline.steps.step3.title'),
      description: t('about.timeline.steps.step3.description'),
    },
    {
      icon: TrendingUp,
      title: t('about.timeline.steps.step4.title'),
      description: t('about.timeline.steps.step4.description'),
    },
  ];

  return (
    <section
      className="py-24 bg-[#1a1a1a] text-white"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <Container>
        {/* Section Title */}
        <div className="text-center mb-16">
          <Heading
            level="h2"
            className="text-white text-4xl lg:text-5xl font-bold"
          >
            {title}
          </Heading>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal Line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-white/20">
            <div className="absolute inset-0 bg-gradient-to-r from-[#86ba41] via-[#86ba41]/50 to-white/20" />
          </div>

          {/* Steps */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className={`relative ${isRTL ? 'text-right' : 'text-left'}`}
                >
                  {/* Icon */}
                  <div className="relative z-10 w-24 h-24 mx-auto lg:mx-0 mb-6 bg-[#86ba41] rounded-full flex items-center justify-center ring-4 ring-white/10">
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <div className="text-center lg:text-left">
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {step.title}
                    </h3>
                    <Paragraph className="text-white/70 text-sm">
                      {step.description}
                    </Paragraph>
                  </div>

                  {/* Step Number */}
                  <div
                    className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'
                      } lg:top-8 lg:${isRTL ? 'left' : 'right'}-auto lg:${isRTL ? 'right' : 'left'
                      }-32 text-6xl font-bold text-white/10`}
                  >
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
