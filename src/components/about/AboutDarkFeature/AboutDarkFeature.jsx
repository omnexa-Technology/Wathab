'use client';

import { useTranslation } from '../../../hooks/useTranslation';
import { useLanguageStore } from '../../../store/useLanguageStore';
import { Container } from '../../../components/atoms/Container/Container';
import { Heading } from '../../../components/atoms/Heading/Heading';
import { Paragraph } from '@../../../omponents/atoms/Paragraph/Paragraph';
import { Lightbulb, Target } from 'lucide-react';

export function AboutDarkFeature() {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const title = t('about.darkFeature.title');
  const description = t('about.darkFeature.description');

  const cards = [
    {
      icon: Lightbulb,
      title: t('about.darkFeature.cards.innovation.title'),
      description: t('about.darkFeature.cards.innovation.description'),
      position: isRTL ? 'right' : 'left',
    },
    {
      icon: Target,
      title: t('about.darkFeature.cards.excellence.title'),
      description: t('about.darkFeature.cards.excellence.description'),
      position: isRTL ? 'left' : 'right',
    },
  ];

  return (
    <section
      className="py-24 bg-[#0b2c16] text-white relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <Container>
        <div className="relative">
          {/* Title and Description */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Heading
              level="h2"
              className="text-white text-4xl lg:text-5xl font-bold mb-6"
            >
              {title}
            </Heading>
            <Paragraph className="text-white/90 text-xl">
              {description}
            </Paragraph>
          </div>

          {/* Center Image with Floating Cards */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center Image */}
            <div className="relative mx-auto w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-[#86ba41]/20 to-[#0b2c16] rounded-full blur-3xl" />
              <img
                src="/assets/icons/logo/logo-light.svg"
                alt="Vision"
                className="relative w-full h-full object-contain drop-shadow-2xl animate-pulse"
              />
            </div>

            {/* Floating Cards */}
            {cards.map((card, index) => {
              const Icon = card.icon;
              const isLeft = card.position === 'left';

              return (
                <div
                  key={index}
                  className={`absolute top-1/2 -translate-y-1/2 ${isLeft
                      ? `${isRTL ? 'right-0 lg:right-[calc(100%-200px)]' : 'left-0 lg:left-[calc(100%-200px)]'}`
                      : `${isRTL ? 'left-0 lg:left-[calc(100%-200px)]' : 'right-0 lg:right-[calc(100%-200px)]'}`
                    } hidden lg:block`}
                  style={{
                    top: index === 0 ? '30%' : '70%',
                  }}
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 w-64 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                    <div className="mb-4">
                      <Icon className="w-8 h-8 text-[#86ba41]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {card.title}
                    </h3>
                    <Paragraph className="text-white/80 text-sm">
                      {card.description}
                    </Paragraph>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-12 lg:hidden">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
                >
                  <div className="mb-4">
                    <Icon className="w-8 h-8 text-[#86ba41]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {card.title}
                  </h3>
                  <Paragraph className="text-white/80 text-sm">
                    {card.description}
                  </Paragraph>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
