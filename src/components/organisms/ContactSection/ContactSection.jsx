'use client';

import { useTranslation } from '../../../hooks/useTranslation';
import { useLanguageStore } from '../../../store/useLanguageStore';
import { ContactInfoCard } from '../../molecules/ContactInfoCard/ContactInfoCard';

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
      href: null,
    },
    {
      id: 'phone',
      icon: '/assets/icons/contact/phone.svg',
      value: t('contact.info.phone.value'),
      label: t('contact.info.phone.label'),
      href: `tel:${t('contact.info.phone.value').replace(/\s/g, '')}`,
    },
    {
      id: 'email',
      icon: '/assets/icons/contact/email.svg',
      value: t('contact.info.email.value'),
      label: t('contact.info.email.label'),
      href: `mailto:${t('contact.info.email.value')}`,
    },
  ];

  return (
    <section
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`bg-white py-16 px-4 sm:px-6 lg:px-12 xl:px-[120px] ${className}`}
    >
      <div className="w-full max-w-[1680px] mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          {contactItems.map((item) => (
            <ContactInfoCard
              key={item.id}
              icon={item.icon}
              value={item.value}
              label={item.label}
              href={item.href ?? undefined}
              isRTL={isRTL}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
