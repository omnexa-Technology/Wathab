'use client';



import { useTranslation } from '../../../hooks/useTranslation';
import { useLanguageStore } from '../../../store/useLanguageStore';
import { VisionMissionCard } from '../../molecules/VisionMissionCard/VisionMissionCard';

export function VisionMissionSection({ className = '' }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  // Get translated content
  const visionTitle = t('visionMission.vision.title');
  const visionDescription = t('visionMission.vision.description');
  const missionTitle = t('visionMission.mission.title');
  const missionDescription = t('visionMission.mission.description');

  // Prepare card data
  const cardsData = [
    {
      id: 'vision',
      title: visionTitle,
      description: visionDescription,
    },
    {
      id: 'mission',
      title: missionTitle,
      description: missionDescription,
    },
  ];

  return (
    <section
      className={`w-full max-w-[1680px] h-auto min-h-[780px] flex items-center justify-end rounded-[32px] rotate-180 bg-[url(/assets/images/pages/Home/vision.webp)] bg-cover bg-center p-4 ${className}`}
    >
      <div className="flex flex-col items-end mr-4 md:mr-20  gap-8 ml-4 md:ml-20 w-full max-w-[880px]">
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
