'use client';

import { useLanguageStore } from '../../../store/useLanguageStore';
import { OurValuesHeader } from '../../molecules/OurValuesHeader/OurValuesHeader';
import { ValueCard } from '../../molecules/ValueCard/ValueCard';

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
      paddingTop: 'lg:pt-24',
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
      paddingTop: 'lg:pt-[120px]',
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
      className={`flex flex-col w-full max-w-full items-center overflow-x-hidden bg-[#222222] min-w-0
        gap-8 px-4 py-10
        sm:gap-10 sm:px-5 sm:py-12
        md:gap-12 md:px-6 md:py-16
        lg:gap-20 lg:px-12 lg:py-24
        xl:gap-24 xl:px-16 xl:py-24
        2xl:gap-24 2xl:px-[120px] 2xl:py-24
        ${className}`}
    >
      <OurValuesHeader />

      <div className="flex flex-col items-stretch gap-8 w-full max-w-full min-w-0 self-stretch
        sm:gap-10
        md:gap-12
        lg:flex-row lg:items-start lg:gap-12 lg:flex-wrap
        xl:gap-16 xl:flex-nowrap
        2xl:gap-24">
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
