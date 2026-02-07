'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import { ServiceCard } from '@/components/molecules/ServiceCard/ServiceCard';
import Link from 'next/link';


export function OurServicesSection({ className = '', ...props }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const servicesData = [
    {
      id: 'eia',
      iconSrc: '/assets/icons/ui/Service1.svg',
      titleKey: 'services.items.eia.title',
      descriptionKey: 'services.items.eia.description',
      variant: 'featured',
      href: '/assets/icons/ui/Service1.svg',
    },
    {
      id: 'audit',
      iconSrc: '/assets/icons/ui/Service2.svg',
      titleKey: 'services.items.audit.title',
      descriptionKey: 'services.items.audit.description',
      variant: 'standard',
      href: '/services/audit',
    },
    {
      id: 'permits',
      iconSrc: '/assets/icons/ui/Service3.svg',
      titleKey: 'services.items.permits.title',
      descriptionKey: 'services.items.permits.description',
      variant: 'standard',
      href: '/services/permits',
    },
  ];

  return (
    <section
      className={`flex flex-col items-center justify-end px-[120px] py-24 bg-[#f9f9f9] w-full ${className}`}
      dir={isRTL ? 'rtl' : 'ltr'}
      {...props}
    >
      <div className="flex flex-col gap-16 items-center w-full max-w-[1680px]">
        {/* Top Section: Featured Card + Header */}
        <div className="flex flex-col gap-12 items-start w-full">
          <div className="flex gap-16 items-start w-full">
            {/* Header Content */}
            <div className="flex flex-col gap-16 flex-1">
              {/* Section Title */}
              <div className="flex items-center justify-start w-full">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 h-2">
                    <div className="w-2 h-2 rounded-full bg-[#86ba41]" />
                    <div className="w-16 h-2 rounded-sm bg-[#86ba41]" />
                  </div>
                  <h2 className="font-din font-medium text-[64px] leading-[108px] text-[#0b2c16]">
                    {t('services.sectionTitle')}
                  </h2>
                </div>
              </div>

              {/* Description */}
              <p className="font-din font-normal text-[32px] leading-[64px] text-right text-[#595959] w-full">
                {t('services.description')}
              </p>
            </div>
            {/* Featured Service Card */}
            <ServiceCard
              iconSrc={servicesData[0].iconSrc}
              titleKey={servicesData[0].titleKey}
              descriptionKey={servicesData[0].descriptionKey}
              variant="featured"
              href={servicesData[0].href}
              className="flex-1 min-h-[390px]"
            />

          </div>

          {/* Bottom Section: Standard Service Cards */}
          <div className="flex gap-8 items-start w-full">
            {servicesData.slice(1).map((service) => (
              <ServiceCard
                key={service.id}
                iconSrc={service.iconSrc}
                titleKey={service.titleKey}
                descriptionKey={service.descriptionKey}
                variant={service.variant}
                href={service.href}
                className="flex-1"
              />
            ))}
          </div>
        </div>

        {/* View All Services Button */}
        <Link
          href="/services"
          className="flex items-center gap-4 px-6 h-16 border-2 border-[#1b6936] rounded-[32px] hover:bg-[#1b6936]/5 transition-colors"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.3334 10.6667L10.6667 21.3333M10.6667 21.3333H21.3334M10.6667 21.3333V10.6667" stroke="#1b6936" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="font-din font-normal text-xl leading-[40px] text-[#1b6936]">
            ابدأ رحلتك معنا الآن
          </span>
        </Link>
      </div>
    </section>
  );
}
