'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import { ClientCard } from '@/components/molecules/ClientCard/ClientCard';

/**
 * OurClientsSection - Displays company clients/partners
 * @param {Object} props
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element}
 */
export function OurClientsSection({ className = '', ...props }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const clientsData = [
    {
      id: 'petromin',
      logoSrc: '/assets/images/clients/petromin.png',
      name: 'بترو مين',
    },
    {
      id: 'alfahd',
      logoSrc: '/assets/images/clients/alfahd.png',
      name: 'الفهد',
    },
    {
      id: 'rtcc',
      logoSrc: '/assets/images/clients/rtcc.png',
      name: 'RTCC',
    },
    {
      id: 'nesco',
      logoSrc: '/assets/images/clients/nesco.png',
      name: 'نسكو',
    },
  ];

  return (
    <section
      className={`flex flex-col items-start gap-0 px-[120px] py-24 bg-gradient-to-l from-[#fdfdfd] to-white w-full ${className}`}
      dir={isRTL ? 'rtl' : 'ltr'}
      {...props}
    >
      <div className="flex flex-col gap-24 items-start w-full max-w-[1680px] mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-16 items-center w-full">
          {/* Section Title */}
          <div className="flex items-center justify-center gap-4 w-full">
            <h2 className="font-din font-medium text-[64px] leading-[108px] text-[#0b2c16]">
              {t('clients.sectionTitle')}
            </h2>
            <div className="flex items-center gap-1 h-2">
              <div className="w-2 h-2 rounded-full bg-[#86ba41]" />
              <div className="w-16 h-2 rounded-sm bg-[#86ba41]" />
            </div>
          </div>

          {/* Subtitle */}
          <div className="bg-[rgba(134,186,65,0.01)] flex items-center justify-center px-8 py-8 rounded-2xl rounded-tr-2xl rounded-tl-2xl rounded-br-2xl rounded-bl-4">
            <p className="font-din font-normal text-5xl leading-normal text-center text-[#303030]">
              {t('clients.subtitle')}
            </p>
          </div>
        </div>

        {/* Client Cards Grid */}
        <div className="grid grid-cols-4 gap-8 w-full">
          {clientsData.map((client) => (
            <ClientCard
              key={client.id}
              logoSrc={client.logoSrc}
              name={client.name}
              imageAlt={`${client.name} logo`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
