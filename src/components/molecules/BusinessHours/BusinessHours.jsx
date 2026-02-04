'use client';

import { Clock } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

export function BusinessHours({ className = '', ...props }) {
  const { t } = useTranslation();

  const businessHours = [
    { day: t('footer.businessHours.friday'), hours: t('footer.businessHours.fridayStatus'), isOpen: false },
    { day: t('footer.businessHours.weekdays'), hours: t('footer.businessHours.weekdaysHours'), isOpen: true },
  ];

  return (
    <div className={`inline-flex items-start gap-2 ${className}`} {...props}>
      <div className="inline-flex flex-col items-start gap-6">
        {businessHours.map((schedule, index) => (
          <div key={index} className="flex items-start justify-between self-stretch w-full">
            <Clock className="w-6 h-6 text-[#86BA41] shrink-0 mx-1" />
            <p className="font-body font-[number:var(--body-font-weight)] text-[#b6b6b6] text-[length:var(--body-font-size)] leading-[var(--body-line-height)] tracking-[var(--body-letter-spacing)] whitespace-nowrap [direction:rtl] [font-style:var(--body-font-style)]">
              {schedule.day}
            </p>
            <div className='flex items-center gap-2 mx-1'>
              <p
                className={`font-body font-[number:var(--body-font-weight)] ${schedule.isOpen ? 'text-white' : 'text-[#86ba41]'
                  } ${schedule.isOpen
                    ? 'text-[length:var(--sub-body-font-size)] font-sub-body font-[number:var(--sub-body-font-weight)] tracking-[var(--sub-body-letter-spacing)] leading-[var(--sub-body-line-height)] [font-style:var(--sub-body-font-style)]'
                    : 'text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]'
                  } whitespace-nowrap [direction:rtl]`}
              >
                {schedule.hours}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
