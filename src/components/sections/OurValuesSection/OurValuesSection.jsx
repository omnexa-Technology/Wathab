'use client';

import { useLanguageStore } from '@/store/useLanguageStore';
import { OurValuesHeader } from '@/components/molecules/OurValuesHeader/OurValuesHeader';
import { ValueCard } from '@/components/molecules/ValueCard/ValueCard';

export function OurValuesSection({ className = '' }) {
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const valuesData = [
    {
      id: 'sustainability',
      iconSrc: '/assets/icons/ui/Sustainability.svg',
      iconAlt: 'Sustainability icon',
      titleKey: 'ourValues.values.sustainability.title',
      descriptionKey: 'ourValues.values.sustainability.description',
      paddingTop: 'pt-24',
    },
    {
      id: 'transparency',
      iconSrc: '/assets/icons/ui/Transparency.svg',
      iconAlt: 'Transparency icon',
      titleKey: 'ourValues.values.transparency.title',
      descriptionKey: 'ourValues.values.transparency.description',
      paddingTop: '',
    },
    {
      id: 'cooperation',
      iconSrc: '/assets/icons/ui/cooperation.svg',
      iconAlt: 'Cooperation icon',
      titleKey: 'ourValues.values.cooperation.title',
      descriptionKey: 'ourValues.values.cooperation.description',
      paddingTop: 'pt-[120px]',
    },
    {
      id: 'excellence',
      iconSrc: '/assets/icons/ui/Excellence.svg',
      iconAlt: 'Excellence icon',
      titleKey: 'ourValues.values.excellence.title',
      descriptionKey: 'ourValues.values.excellence.description',
      paddingTop: '',
    },
  ];

  return (
    <section
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`flex flex-col w-[1920px] items-center gap-24 px-[120px] py-24 relative bg-[#222222] ${className}`}
    >
      <OurValuesHeader />
      <div className="flex items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
        {valuesData.map((value) => (
          <ValueCard
            key={value.id}
            iconSrc={value.iconSrc}
            iconAlt={value.iconAlt}
            titleKey={value.titleKey}
            descriptionKey={value.descriptionKey}
            paddingTop={value.paddingTop}
          />
        ))}
      </div>
    </section>
  );
}
