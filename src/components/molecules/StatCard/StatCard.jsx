'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { CounterNumber } from '@/components/counter-number';
import { CountIcon } from '@/components/atoms/CountIcon/CountIcon';

export function StatCard({
  iconSrc,
  value,
  labelKey,
  duration = 1500,
  className = '',
  ...props
}) {
  const { t } = useTranslation();

  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-2xl bg-white px-6 py-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] ${className}`}
      {...props}
    >
      <CountIcon src={iconSrc} alt="" />
      <CounterNumber
        value={value}
        startValue={0}
        duration={duration}
        size="xl"
        prefix="+"
      />
      <p className="w-full max-w-[364px] font-din font-normal text-[32px] leading-[64px] tracking-normal text-center text-gray-600">
        {t(labelKey)}
      </p>
    </div>
  );
}
