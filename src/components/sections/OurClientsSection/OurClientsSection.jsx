'use client';

import Marquee from 'react-fast-marquee';
import { useTranslation } from '../../../hooks/useTranslation';
import { useLanguageStore } from '../../../store/useLanguageStore';
import { ClientCard } from '../../molecules/ClientCard/ClientCard';

export function OurClientsSection({ className = '', ...props }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const clientsData = [
    { id: 1, logoSrc: '/assets/images/clients/Component141(2).webp', name: 'بترو مين' },
    { id: 2, logoSrc: '/assets/images/clients/image30.webp', name: 'شركة الفهد للتجارة والصناعه والمقاولات' },
    { id: 3, logoSrc: '/assets/images/clients/image27.webp', name: 'شركة الراشد للتجارة والمقالاوت' },
    { id: 4, logoSrc: '/assets/images/clients/Component141(3).webp', name: 'نسكو' },
    { id: 5, logoSrc: '/assets/images/clients/Frame 2147224060.webp', name: 'شركة الكابلات السعودية' },
    { id: 6, logoSrc: '/assets/images/clients/image31.webp', name: 'شركة الأحمدية العالمية ' },
    { id: 7, logoSrc: '/assets/images/clients/image28.webp', name: 'شركة اجيج لصناعة الصلب ومشتقاتة' },
    { id: 8, logoSrc: '/assets/images/clients/image44.webp', name: 'مجموعة الصريف' },
    { id: 9, logoSrc: '/assets/images/clients/image54.webp', name: 'شركة الكيمياء الوطنية للصناعات الكيميائية' },
    { id: 10, logoSrc: '/assets/images/clients/Component141(4).webp', name: 'شركة فاين' },
    { id: 11, logoSrc: '/assets/images/clients/Component141(5).webp', name: 'شركة سعف الصناعية' },
    { id: 12, logoSrc: '/assets/images/clients/Component141(1).webp', name: 'شركة مجموعة المهيلب للمنتجات الأسمنتية' },
    { id: 13, logoSrc: '/assets/images/clients/Component141.webp', name: 'شركة مستورة' },
    { id: 14, logoSrc: '/assets/images/clients/image55.webp', name: 'شركة السيل للحفر وصيانة الأبار النفطية' },
    { id: 15, logoSrc: '/assets/images/clients/image52.webp', name: 'شركة انساب ' },
    { id: 16, logoSrc: '/assets/images/clients/image49.webp', name: 'شركة الصايغ ' },
    { id: 17, logoSrc: '/assets/images/clients/Component141(9).webp', name: 'شركة اثيل للمقاولات' },
    { id: 18, logoSrc: '/assets/images/clients/Component141(8).webp', name: 'شركة سلطان الدخيل للمقاولات' },
    { id: 19, logoSrc: '/assets/images/clients/Component141(7).webp', name: 'شركة محمد البرغش ' },
    { id: 20, logoSrc: '/assets/images/clients/Component141(3).webp', name: 'شركة المري ' },
  ];

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

        {/* Client Cards Marquee */}
        <div className="w-full min-w-0 overflow-hidden">
          <Marquee
            play
            direction={isRTL ? 'left' : 'right'}
            speed={70}
            delay={0}
            pauseOnHover
            gradient={false}
            autoFill
            loop={0}
            className="w-full"
          >
            {clientsData.map((client, index) => (
              <div
                key={`client-${client.id}-${index}`}
                className="shrink-0 w-[240px] sm:w-[260px] lg:w-[280px] flex-none mr-4 sm:mr-6 lg:mr-8 rtl:mr-0 rtl:ml-4 sm:rtl:ml-6 lg:rtl:ml-8"
              >
                <ClientCard
                  logoSrc={client.logoSrc}
                  name={client.name}
                  imageAlt={`${client.name} logo`}
                  className="w-full"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
