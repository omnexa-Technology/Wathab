'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import { ContactInfoCard } from '@/components/molecules/ContactInfoCard/ContactInfoCard';

export function ContactSection({ className = '' }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const contactItems = [
    {
      id: 'location',
      icon: '/assets/icons/contact/location.svg',
      value: t('contact.info.location.value'),
      label: t('contact.info.location.label'),
    },
    {
      id: 'phone',
      icon: '/assets/icons/contact/phone.svg',
      value: t('contact.info.phone.value'),
      label: t('contact.info.phone.label'),
    },
    {
      id: 'email',
      icon: '/assets/icons/contact/email.svg',
      value: t('contact.info.email.value'),
      label: t('contact.info.email.label'),
    },
  ];

  return (
    <section
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`bg-white py-12 px-8 lg:px-[120px] ${className}`}
    >
      <div className="w-full max-w-7xl mx-auto">

        {/* Contact Cards Grid */}
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {contactItems.map((item) => (
            <ContactInfoCard
              key={item.id}
              icon={item.icon}
              value={item.value}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
