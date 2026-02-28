'use client';

import { useTranslation } from '../../../hooks/useTranslation';
// import { useLanguageStore } from '../../../store/useLanguageStore';
import { Phone, Mail, MapPin } from 'lucide-react';
export function PrivacyPolicyContactSection({ className = '', ...props }) {
  const { t } = useTranslation();
  // const language = useLanguageStore((s) => s.language);


  const items = [
    {
      icon: MapPin,
      value: t('headNav.address'),
      label: t('privacyPolicy.contactSection.officeLocationLabel'),
    },
    {
      icon: Mail,
      value: t('headNav.email'),
      label: t('privacyPolicy.contactSection.emailLabel'),
    },
    {
      icon: Phone,
      value: t('headNav.phone'),
      label: t('privacyPolicy.contactSection.phoneLabel'),
    },
  ];

  return (
    <section
      className={`
        w-full mx-16 py-10 bg-[#1b6936] 
        contact-cover-bg bg-cover rounded-3xl
        ${className}
      `}
      dir="rtl"
      {...props}
    >
      <div className="max-w-[1680px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start justify-between">
        {/* Title + Subtitle (right in RTL) */}
        <div className="flex flex-col gap-2 text-right">
          <h2 className="font-din font-bold text-2xl sm:text-3xl text-white">
            {t('privacyPolicy.contactSection.title')}
          </h2>
          <p className="font-din text-base sm:text-lg text-white/80 max-w-xl">
            {t('privacyPolicy.contactSection.subtitle')}
          </p>
        </div>

        {/* Contact columns (left in RTL) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {items.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center gap-4 "
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                <Icon className="w-6 h-6 text-[#1b6936]" />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1">
                <p className="font-din text-base sm:text-lg text-white">
                  {value}
                </p>
                <span className="font-din text-sm text-white/70">
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
