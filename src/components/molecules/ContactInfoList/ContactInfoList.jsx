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
      className={`flex flex-col gap-8 self-stretch w-full ${
        isRTL ? 'items-end' : 'items-start'
      } ${className}`} 
      {...props}
    >
      {contactInfo.map((item, index) => (
        <div 
          key={index} 
          className={`flex items-center gap-2 self-stretch w-full ${
            isRTL ? 'justify-end' : 'justify-start'
          }`}
        >
          <item.icon className="w-6 h-6 text-[#86BA41] shrink-0" />
          <p 
            className={`font-body font-[number:var(--body-font-weight)] text-[#b6b6b6] text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)] flex-1 ${
              isRTL ? 'text-right' : 'text-left'
            }`}
          >
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}
