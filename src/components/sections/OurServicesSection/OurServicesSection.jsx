'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import { ServiceCard } from '@/components/molecules/ServiceCard/ServiceCard';
import { Link } from '@/i18n/routing';

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
      href: '/services',
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
      titleKey: 'services.items.permits.title',
      iconSrc: '/assets/icons/ui/Service3.svg',
      descriptionKey: 'services.items.permits.description',
      variant: 'standard',
      href: '/services/permits',
    },
  ];

  return (
    <section
      className={`flex flex-col items-center justify-end w-full overflow-x-hidden min-w-0 bg-[#f9f9f9]
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
      <div className="flex flex-col gap-8 w-full max-w-[1680px] min-w-0 mx-auto sm:gap-10 md:gap-12 lg:gap-16">
        {/* Top: Header + Featured Card — vertical on mobile, row on lg */}
        <div className="flex flex-col gap-8 w-full min-w-0 lg:flex-row lg:gap-16 lg:items-stretch">
          {/* Header */}
          <div className="flex flex-col gap-6 flex-1 min-w-0 lg:gap-16">
            <div className="flex flex-col gap-3 w-full min-w-0 sm:gap-4">
              <div className="flex items-center justify-start gap-3 w-full sm:gap-4">
                <div className="flex items-center gap-1 h-1.5 shrink-0 sm:h-2" aria-hidden>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#86ba41]" />
                  <div className="w-12 h-1.5 sm:w-16 sm:h-2 rounded-sm bg-[#86ba41]" />
                </div>
                <h2 className="font-din font-medium text-[#0b2c16] text-right flex-1 min-w-0
                  text-2xl leading-tight
                  sm:text-3xl
                  md:text-4xl md:leading-snug
                  lg:text-5xl lg:leading-tight
                  xl:text-[64px] xl:leading-[108px]">
                  {t('services.sectionTitle')}
                </h2>
              </div>
            </div>
            <p className="font-din font-normal text-[#595959] text-right w-full min-w-0
              text-base leading-relaxed
              sm:text-lg sm:leading-8
              md:text-xl md:leading-8
              lg:text-2xl lg:leading-10
              xl:text-[32px] xl:leading-[64px]">
              {t('services.description')}
            </p>
          </div>

          {/* Featured card — full width on mobile, flex-1 on lg */}
          <div className="w-full min-w-0 lg:flex-1 lg:min-h-[390px]">
            <ServiceCard
              iconSrc={servicesData[0].iconSrc}
              titleKey={servicesData[0].titleKey}
              descriptionKey={servicesData[0].descriptionKey}
              variant="featured"
              href={servicesData[0].href}
              className="w-full h-full min-h-[320px] sm:min-h-[360px] lg:min-h-[390px]"
            />
          </div>
        </div>

        {/* Bottom: two standard cards — stacked on mobile, row on lg */}
        <div className="grid grid-cols-1 gap-4 w-full min-w-0 sm:gap-6 lg:grid-cols-2 lg:gap-8">
          {servicesData.slice(1).map((service) => (
            <ServiceCard
              key={service.id}
              iconSrc={service.iconSrc}
              titleKey={service.titleKey}
              descriptionKey={service.descriptionKey}
              variant={service.variant}
              href={service.href}
              className="w-full min-w-0"
            />
          ))}
        </div>

        {/* Discover More Services — touch-friendly, centered */}
        <Link
          href="/services"
          className="flex items-center justify-center gap-2 sm:gap-4 px-5 py-4 sm:px-6 sm:py-4 min-h-[48px] sm:min-h-[56px] border-2 border-[#1b6936] rounded-3xl hover:bg-[#1b6936]/5 transition-colors w-full max-w-sm mx-auto"
        >
          <span className="font-din font-normal text-[#1b6936] text-base sm:text-lg sm:leading-8">
            {t('services.discoverMoreServices')}
          </span>
          <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 rtl:rotate-180" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M21.3334 10.6667L10.6667 21.3333M10.6667 21.3333H21.3334M10.6667 21.3333V10.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
