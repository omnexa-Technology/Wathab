'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';

export function ContactInfoList({ className = '', ...props }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const contactInfo = [
    { icon: Phone, text: t('headNav.phone') },
    { icon: Mail, text: t('headNav.email') },
    { icon: MapPin, text: t('headNav.address') },
  ];

  return (
    <div
      className={`flex flex-col gap-4 self-stretch w-full min-w-0 sm:gap-6 lg:gap-8 ${isRTL ? 'items-end' : 'items-start'} ${className}`}
      {...props}
    >
      {contactInfo.map((item, index) => (
        <div
          key={index}
          className={`flex items-center gap-2 sm:gap-3 self-stretch w-full min-w-0 ${isRTL ? 'flex-row-reverse justify-end' : 'justify-start'}`}
        >
          <p
            className={`font-din font-normal text-[#b6b6b6] text-sm leading-relaxed sm:text-base sm:leading-7 flex-1 min-w-0 ${isRTL ? 'text-right' : 'text-left'}`}
          >
            {item.text}
          </p>
          <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#86BA41] shrink-0" aria-hidden />
        </div>
      ))}
    </div>
  );
}
