'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const sizeClasses = {
  sm: 'text-md',
  md: 'text-xl',
  lg: 'text-3xl',
  xl: 'text-5xl',
  '2xl': 'text-7xl',
};

/**
 * Animated counter that counts from startValue to value over duration.
 * Use with scroll: pass value=0 until in view, then pass target value to trigger animation.
 */
export function CounterNumber({
  value,
  startValue = 0,
  duration = 1500,
  decimalPlaces = 0,
  prefix = '',
  suffix = '',
  size = 'xl',
  className,
  ...props
}) {
  const [displayValue, setDisplayValue] = useState(startValue);

  useEffect(() => {
    const start = displayValue;
    const end = value;
    const diff = end - start;

    if (diff === 0) return;

    let startTime = null;

    const step = (timestamp) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - (1 - progress) ** 2;
      setDisplayValue(start + diff * easeOut);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [value, duration]);

  const formatted = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(Math.round(displayValue));

  const sizeClass = sizeClasses[size] || sizeClasses.xl;

  return (
    <span
      className={cn(
        'inline-block tabular-nums tracking-wider font-bold text-black transition-all',
        sizeClass,
        className
      )}
      {...props}
    >
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
