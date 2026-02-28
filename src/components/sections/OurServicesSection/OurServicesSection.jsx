'use client';

import { useTranslation } from '../../../hooks/useTranslation';
import { useLanguageStore } from '../../../store/useLanguageStore';
import { ServiceCard } from '../../molecules/ServiceCard/ServiceCard';
import { Link } from '../../../i18n/routing';

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
      iconSrc: '/assets/icons/ui/Service2.svg',
      descriptionKey: 'services.items.permits.description',
      variant: 'standard',
      href: '/services/permits',
    },
  ];

  return (
    <section
      className={`flex flex-col items-center justify-end w-full overflow-x-hidden min-w-0
        px-4 py-8
        sm:px-6 sm:py-12
        md:px-8 md:py-16
        lg:px-12 lg:py-20
        xl:px-16 xl:py-24
        2xl:px-[120px] 2xl:py-28
        ${className}`}
      dir={isRTL ? 'rtl' : 'ltr'}
      {...props}
    >
      <div className="flex flex-col w-full max-w-[1680px] min-w-0 mx-auto
        gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
        
        {/* Header Section */}
        <div className="flex flex-col w-full min-w-0
          gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          
          {/* Title with indicator */}
          <div className="flex flex-col w-full min-w-0
            gap-4 sm:gap-5 md:gap-6">
            
            <div className={`flex items-center gap-3 w-full sm:gap-4 md:gap-5
              ${isRTL ? 'justify-end' : 'justify-start'}`}>
              
              {/* Indicator dots */}
              <div className="flex items-center gap-1 h-1.5 shrink-0 
                sm:h-2 md:gap-2" 
                aria-hidden>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 
                  rounded-full bg-[#86ba41]" />
                <div className="w-12 h-1.5 sm:w-16 sm:h-2 md:w-20 md:h-2.5 
                  rounded-sm bg-[#86ba41]" />
              </div>
              
              {/* Main title */}
              <h2 className={`font-din font-medium text-[#0b2c16] flex-1 min-w-0
                text-2xl leading-tight
                sm:text-3xl sm:leading-snug
                md:text-4xl md:leading-snug
                lg:text-5xl lg:leading-tight
                xl:text-6xl xl:leading-tight
                2xl:text-[64px] 2xl:leading-[72px]
                ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('services.sectionTitle')}
              </h2>
            </div>
          </div>
          
          {/* Description */}
          <p className={`font-din font-normal text-[#595959] w-full min-w-0
            text-base leading-relaxed
            sm:text-lg sm:leading-7
            md:text-xl md:leading-8
            lg:text-2xl lg:leading-9
            xl:text-[28px] xl:leading-10
            2xl:text-[32px] 2xl:leading-[48px]
            max-w-4xl
            ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('services.description')}
          </p>
        </div>

        {/* Services Layout */}
        <div className="flex flex-col w-full min-w-0
          gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          
          {/* Featured Service Card */}
          {/* <div className="w-full min-w-0">
          </div> */}

          {/* Standard Service Cards Grid */}
          <div className="w-full min-w-0">
            <div className="grid w-full min-w-0
              grid-cols-1 gap-4
              sm:gap-6
              md:grid-cols-2
              lg:grid-cols-3 md:gap-6
              lg:gap-8
              xl:gap-10">
                
              {servicesData.map((service) => (
                <ServiceCard
                  key={service.id}
                  iconSrc={service.iconSrc}
                  titleKey={service.titleKey}
                  descriptionKey={service.descriptionKey}
                  variant={service.variant}
                  href={service.href}
                  className="w-full min-w-0
                    min-h-[240px]
                    sm:min-h-[260px]
                    md:min-h-[280px]
                    lg:min-h-[300px]"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Discover More Services Button */}
        <div className="flex justify-center w-full mt-4 sm:mt-6 md:mt-8">
          <Link
            href="/services"
            className="group flex items-center justify-center w-full max-w-sm
              gap-3 sm:gap-4
              px-6 py-4 sm:px-8 sm:py-5
              min-h-[52px] sm:min-h-[60px]
              border-2 border-[#1b6936] rounded-full
              bg-white hover:bg-[#1b6936] 
              transition-all duration-300 ease-in-out
              hover:shadow-lg hover:scale-[1.02]
              active:scale-[0.98]"
          >
            <span className="font-din font-medium text-[#1b6936] 
              group-hover:text-white transition-colors duration-300
              text-base sm:text-lg
              whitespace-nowrap">
              {t('services.discoverMoreServices')}
            </span>
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 
                text-[#1b6936] group-hover:text-white
                transition-all duration-300
                rtl:rotate-180 group-hover:translate-x-1" 
              viewBox="0 0 32 32" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              aria-hidden>
              <path 
                d="M21.3334 10.6667L10.6667 21.3333M10.6667 21.3333H21.3334M10.6667 21.3333V10.6667" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
