'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import { SectorCard } from '@/components/molecules/SectorCard/SectorCard';

/**
 * SectorsGrid - Displays a grid of sector cards with title
 * @param {Object} props
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element}
 */
export function SectorsGrid({ className = '' }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const sectors = [
    {
      id: 'ports-maritime',
      image: '/assets/images/Sectors/e9c4397cef486cd7f28984c6774c02a0defe6624.webp',
      titleKey: 'sectors.grid.portsMaritime',
    },
    {
      id: 'power-generation',
      image: '/assets/images/Sectors/29693f0ea8c045ed8f31a7c2e985dd8d88e29e26.webp',
      titleKey: 'sectors.grid.powerGeneration ',
    },
    {
      id: 'infrastructure-waste',
      image: '/assets/images/Sectors/95de163956cfb6431fbef729ef3665bce9ad328a.webp',
      titleKey: 'sectors.grid.infrastructureWaste',
    },
    {
      id: 'petrochemicals',
      image: '/assets/images/Sectors/1761d48a0ff7a4ce544e81e9150cc32e61c82ae5.webp',
      titleKey: 'sectors.grid.petrochemicals',
    },
    {
      id: 'wastewater-treatment',
      image: '/assets/images/Sectors/1da97298222db2f30fe7815636737bc012852522.webp',
      titleKey: 'sectors.grid.wastewaterTreatment',
    },
    {
      id: 'land-reclamation',
      image: '/assets/images/Sectors/b7a4eb42113e45468f510b286ca5b766f942a1bf.webp',
      titleKey: 'sectors.grid.infrastructureWaste',
    },
    {
      id: 'infrastructure-waste-2',
      image: '/assets/images/Sectors/c28957d47bbddca26d0a1b4e173ed07b5fc75442.webp',
      titleKey: 'sectors.grid.landReclamation',
    },
    {
      id: 'transportation',
      image: '/assets/images/Sectors/1b7043903504f17e371f79969eb7d07930b71305.webp',
      titleKey: 'sectors.grid.transportation',
    },
    {
      id: 'oil-gas',
      image: '/assets/images/Sectors/d0204f4c4ee14b9cd5792bf69dc5622d2381d0b8.webp',
      titleKey: 'sectors.grid.steelAluminum',
    },
    {
      id: 'steel-aluminum',
      image: '/assets/images/Sectors/689202ff69bb09effd88390a12647c0751791a1b.webp',
      titleKey: 'sectors.grid.oilGas',
    },
  ];

  return (
    <section
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`bg-white py-16 px-8 lg:px-[120px] ${className}`}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-16">
        {/* Section Title */}
        <div className="flex items-center justify-center w-full">
          <h2 className="font-din font-medium text-[#0b2c16] text-4xl lg:text-[64px] leading-[64px] lg:leading-[108px] text-center">
            {t('sectors.grid.title')}
          </h2>
        </div>

        {/* Sectors Grid */}
        <div className="flex flex-col gap-6">
          {/* Row 1: Wide + Narrow (2 cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
            <div className="sm:col-span-8">
              <SectorCard
                image={sectors[0].image}
                title={t(sectors[0].titleKey)}
              />
            </div>
            <div className="sm:col-span-4">
              <SectorCard
                image={sectors[1].image}
                title={t(sectors[1].titleKey)}
              />
            </div>
          </div>

          {/* Row 2: Equal + Equal + Equal (3 cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SectorCard
              image={sectors[2].image}
              title={t(sectors[2].titleKey)}
            />
            <SectorCard
              image={sectors[3].image}
              title={t(sectors[3].titleKey)}
            />
            <SectorCard
              image={sectors[4].image}
              title={t(sectors[4].titleKey)}
            />
          </div>

          {/* Row 3: Wide + Narrow (2 cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
            <div className="sm:col-span-8">
              <SectorCard
                image={sectors[5].image}
                title={t(sectors[5].titleKey)}
              />
            </div>
            <div className="sm:col-span-4">
              <SectorCard
                image={sectors[6].image}
                title={t(sectors[6].titleKey)}
              />
            </div>
          </div>

          {/* Row 4: Equal + Equal + Equal (3 cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SectorCard
              image={sectors[7].image}
              title={t(sectors[7].titleKey)}
            />
            <SectorCard
              image={sectors[8].image}
              title={t(sectors[8].titleKey)}
            />
            <SectorCard
              image={sectors[9].image}
              title={t(sectors[9].titleKey)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
