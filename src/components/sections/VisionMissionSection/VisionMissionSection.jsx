'use client';

import { useTranslation } from '../../../hooks/useTranslation';
import { useLanguageStore } from '../../../store/useLanguageStore';
import { VisionMissionCard } from '../../molecules/VisionMissionCard/VisionMissionCard';

export function VisionMissionSection({ className = '' }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const cardsData = [
    {
      id: 'vision',
      title: t('visionMission.vision.title'),
      description: t('visionMission.vision.description'),
    },
    {
      id: 'mission',
      title: t('visionMission.mission.title'),
      description: t('visionMission.mission.description'),
    },
  ];

  return (
    <section
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`relative w-full max-w-[1680px] min-h-[360px] sm:min-h-[480px] md:min-h-[640px] lg:min-h-[780px] flex items-center justify-center md:justify-start rounded-2xl md:rounded-[32px] overflow-hidden px-4 py-8 sm:px-8 sm:py-10 md:px-16 md:py-16 lg:px-20 lg:py-16 ${className}`}
    >
      {/* Background image — rotated 180deg to match Figma orientation */}
      <div
        className="absolute inset-0 rotate-180 bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/images/pages/Home/vision.webp)' }}
        aria-hidden="true"
      />

      {/* Cards container — centered on mobile, start-aligned on md+ */}
      <div className="relative z-10 flex flex-col gap-6 md:gap-8 w-full max-w-[280px] sm:max-w-[360px] md:max-w-[640px] lg:max-w-[880px]">
        {cardsData.map((card) => (
          <VisionMissionCard
            key={card.id}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}
