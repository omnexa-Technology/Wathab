'use client';

import { useTranslation } from '../../../hooks/useTranslation';
import { useLanguageStore } from '../../../store/useLanguageStore';
import { LicenseContentCard } from '../../../components/molecules/LicenseContentCard/LicenseContentCard';

/**
 * LicensesGrid - Displays licenses with alternating image and content layout
 * @param {Object} props
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element}
 */
export function LicensesGrid({ className = '' }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const licenses = [
    {
      id: 'license-1',
      image: '/assets/images/licenses/licenses1.webp',
      altKey: 'licenses.grid.license1.alt',
      titleKey: 'licenses.grid.license1.title',
      descriptionKey: 'licenses.grid.license1.description',
      imageOnLeft: false, // Content on left, image on right
    },
    {
      id: 'license-2',
      image: '/assets/images/licenses/licenses2.webp',
      altKey: 'licenses.grid.license2.alt',
      titleKey: 'licenses.grid.license2.title',
      descriptionKey: 'licenses.grid.license2.description',
      imageOnLeft: true, // Image on left, content on right
    },
  ];

  return (
    <section
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`bg-white py-16 px-8 lg:px-[120px] ${className}`}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-16 lg:gap-24">
        {/* Section Title */}
        <div className="flex items-center justify-center w-full">
          <h2 className="font-din font-medium text-[#0b2c16] text-4xl lg:text-[64px] leading-[64px] lg:leading-[108px] text-center">
            {t('licenses.grid.title')}
          </h2>
        </div>

        {/* License Cards with Alternating Layout */}
        <div className="flex flex-col gap-16 lg:gap-24">
          {licenses.map((license) => (
            <LicenseContentCard
              key={license.id}
              image={license.image}
              alt={t(license.altKey)}
              title={t(license.titleKey)}
              description={t(license.descriptionKey)}
              imageOnLeft={isRTL ? !license.imageOnLeft : license.imageOnLeft}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
