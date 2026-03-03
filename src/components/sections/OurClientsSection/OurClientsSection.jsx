'use client';

import { useTranslation } from '../../../hooks/useTranslation';
import { useLanguageStore } from '../../../store/useLanguageStore';
import { ClientCard } from '../../molecules/ClientCard/ClientCard';

const PREDEFINED_LOGOS = [
  '/assets/images/clients/Component141(2).webp',
  '/assets/images/clients/image30.webp',
  '/assets/images/clients/image27.webp',
  '/assets/images/clients/Component141(3).webp',
  '/assets/images/clients/Frame 2147224060.webp',
  '/assets/images/clients/image31.webp',
  '/assets/images/clients/image28.webp',
  '/assets/images/clients/image44.webp',
  '/assets/images/clients/image54.webp',
  '/assets/images/clients/Component141(4).webp',
  '/assets/images/clients/Component141(5).webp',
  '/assets/images/clients/Component141(1).webp',
  '/assets/images/clients/Component141.webp',
  '/assets/images/clients/image55.webp',
  '/assets/images/clients/image52.webp',
  '/assets/images/clients/image49.webp',
  '/assets/images/clients/Component141(9).webp',
  '/assets/images/clients/Component141(8).webp',
  '/assets/images/clients/Component141(7).webp',
  '/assets/images/clients/Component141(3).webp',
];

export function OurClientsSection({ className = '', ...props }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const clientNames = t('clients.list');
  const namesArray = Array.isArray(clientNames) ? clientNames : [];
  const clientsData = namesArray.map((name, index) => ({
    id: index + 1,
    logoSrc: PREDEFINED_LOGOS[index] ?? '',
    name,
  }));

  const duplicatedClients = [...clientsData, ...clientsData];

  return (
    <section
      className={`flex flex-col items-start gap-0 w-full overflow-x-hidden min-w-0 bg-gradient-to-l from-[#fdfdfd] to-white
        px-4 py-12
        sm:px-5 sm:py-14
        md:px-6 md:py-16
        lg:px-12 lg:py-24
        xl:px-16
        2xl:px-[120px] 2xl:py-24
        ${className}`}
      dir={isRTL ? 'rtl' : 'ltr'}
      {...props}
    >
      <div className="flex flex-col gap-10 w-full max-w-[1680px] mx-auto min-w-0 sm:gap-14 md:gap-16 lg:gap-24">
        {/* Header */}
        <div className="flex flex-col gap-6 items-center w-full min-w-0 sm:gap-8 md:gap-10 lg:gap-16">
          {/* Section Title + green accent */}
          <div className="flex flex-col gap-3 items-center w-full min-w-0 sm:gap-4">
            <h2 className="font-din font-medium text-[#0b2c16] text-center w-full
              text-2xl leading-tight
              sm:text-3xl
              md:text-4xl md:leading-snug
              lg:text-5xl lg:leading-tight
              xl:text-[64px] xl:leading-[108px]">
              {t('clients.sectionTitle')}
            </h2>
            <div className="flex items-center gap-1 h-1.5 shrink-0 sm:h-2" aria-hidden>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#86ba41]" />
              <div className="w-12 h-1.5 sm:w-16 sm:h-2 rounded-sm bg-[#86ba41]" />
            </div>
          </div>
          {/* Subtitle */}
          <div className="bg-[rgba(134,186,65,0.04)] flex items-center justify-center rounded-2xl w-full min-w-0 px-4 py-6 sm:px-6 sm:py-7 md:px-8 md:py-8">
            <p className="font-din font-normal text-center text-[#303030] w-full min-w-0
              text-base leading-relaxed
              sm:text-lg sm:leading-8
              md:text-xl
              lg:text-2xl lg:leading-normal
              xl:text-4xl xl:leading-normal
              2xl:text-5xl 2xl:leading-normal">
              {t('clients.subtitle')}
            </p>
          </div>
        </div>
        <div className="w-full overflow-hidden">
          <div
            className={`
      flex
      w-max
      ${isRTL ? 'animate-marquee-rtl' : 'animate-marquee-ltr'}
    `}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="
          flex-shrink-0
          w-[240px]
          sm:w-[260px]
          lg:w-[280px]
          me-4 sm:me-6 lg:me-8
        "
              >
                <ClientCard
                  logoSrc={client.logoSrc}
                  name={client.name}
                  imageAlt={`${client.name} logo`}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
