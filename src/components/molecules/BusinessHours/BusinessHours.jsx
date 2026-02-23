'use client';

import { Clock } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';
import { useLanguageStore } from '../../../store/useLanguageStore';

export function BusinessHours({ className = '', ...props }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const businessHours = [
    { day: t('footer.businessHours.weekdays'), hours: t('footer.businessHours.weekdaysHours'), isOpen: true },
  ];

  return (
    <div className={`inline-flex flex-col items-start gap-4 w-full min-w-0 sm:gap-6 ${className}`} {...props}>
      {businessHours.map((schedule, index) => (
        <div
          key={index}
          className={`flex items-center gap-2 sm:gap-3 w-full min-w-0 ${isRTL ? 'flex-row-reverse justify-end' : 'justify-start'}`}
        >
          <p className="font-din font-normal text-[#b6b6b6] text-sm sm:text-base leading-relaxed flex-1 min-w-0 text-right [direction:rtl]">
            {schedule.day}
          </p>
          <p
            className={`font-din text-sm sm:text-base leading-relaxed shrink-0 [direction:rtl] ${
              schedule.isOpen ? 'text-white' : 'text-[#86ba41]'
            }`}
          >
            {schedule.hours}
          </p>
          <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#86BA41] shrink-0" aria-hidden />

        </div>
      ))}
    </div>
  );
}
