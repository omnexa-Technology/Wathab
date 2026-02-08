'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import { ClientCard } from '@/components/molecules/ClientCard/ClientCard';

export function OurClientsSection({ className = '', ...props }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const clientsData = [
    {
      id: 'petromin',
      logoSrc: '/assets/images/clients/Component141(2).webp',
      name: 'بترو مين',
    },
    {
      id: 'alfahd',
      logoSrc: '/assets/images/clients/image30.webp',
      name: 'شركة الفهد للتجارة والصناعه والمقاولات',
    },
    {
      id: 'rtcc',
      logoSrc: '/assets/images/clients/image27.webp',
      name: 'شركة الراشد للتجارة والمقالاوت',
    },

    {
      id: 'nesco',
      logoSrc: '/assets/images/clients/Component141(3).webp',
      name: 'نسكو',
    },
    {
      id: 'nesco',
      logoSrc: '/assets/images/clients/Frame 2147224060.webp',
      name: 'شركة الكابلات السعودية',
    },
    {
      id: 'nesco',
      logoSrc: '/assets/images/clients/image31.webp',
      name: 'شركة الأحمدية العالمية ',
    },
    {
      id: 'nesco',
      logoSrc: '/assets/images/clients/image28.webp',
      name: 'شركة اجيج لصناعة الصلب ومشتقاتة',
    },
    {
      id: 'nesco',
      logoSrc: '/assets/images/clients/image44.webp',
      name: 'مجموعة الصريف',
    },
    {
      id: 'nesco',
      logoSrc: '/assets/images/clients/image54.webp',
      name: 'شركة الكيمياء الوطنية للصناعات الكيميائية',
    },
    {
      id: 'nesco',
      logoSrc: '/assets/images/clients/Component141(4).webp',
      name: 'شركة فاين',
    },
    {
      id: 'nesco',
      logoSrc: '/assets/images/clients/Component141(5).webp',
      name: 'شركة سعف الصناعية',
    },
    {
      id: 'nesco',
      logoSrc: '/assets/images/clients/Component141(1).webp',
      name: 'شركة مجموعة المهيلب للمنتجات الأسمنتية',
    },
    {
      id: 'nesco',
      logoSrc: '/assets/images/clients/Component141.webp',
      name: 'شركة مستورة',
    },
    {
      id: 'nesco',
      logoSrc: '/assets/images/clients/image55.webp',
      name: 'شركة السيل للحفر وصيانة الأبار النفطية',
    },
    {
      id: 'nesco',
      logoSrc: '/assets/images/clients/image52.webp',
      name: 'شركة انساب ',
    },
    {
      id: 'nesco',
      logoSrc: '/assets/images/clients/image49.webp',
      name: 'شركة الصايغ ',
    },
    {
      id: 'nesco',
      logoSrc: '/assets/images/clients/Component141(9).webp',
      name: 'شركة اثيل للمقاولات',
    },
    {
      id: 'nesco',
      logoSrc: '/assets/images/clients/Component141(8).webp',
      name: 'شركة سلطان الدخيل للمقاولات',
    },
    {
      id: 'nesco',
      logoSrc: '/assets/images/clients/Component141(7).webp',
      name: 'شركة محمد البرغش ',
    },
    {
      id: 'nesco',
      logoSrc: '/assets/images/clients/Component141(3).webp',
      name: 'شركة المري ',
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
            <div className="flex items-center gap-1 h-2">
              <div className="w-2 h-2 rounded-full bg-[#86ba41]" />
              <div className="w-16 h-2 rounded-sm bg-[#86ba41]" />
            </div>
            <h2 className="font-din font-medium text-[64px] leading-[108px] text-[#0b2c16]">
              {t('clients.sectionTitle')}
            </h2>
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
