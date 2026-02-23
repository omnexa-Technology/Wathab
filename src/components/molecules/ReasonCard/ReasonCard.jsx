'use client';

import { useTranslation } from '../../../hooks/useTranslation';

/**
 * ReasonCard - Single reason item: number badge + title + description.
 * timelineLayout: when true, number badge is hidden on lg+ (desktop uses separate timeline column).
 */
export function ReasonCard({
  number,
  titleKey,
  descriptionKey,
  showLine = false,
  timelineLayout = false,
  className = '',
  ...props
}) {
  const { t } = useTranslation();

  return (
    <div
      className={`flex flex-row flex-nowrap gap-4 items-start justify-end relative w-full min-w-0
        sm:gap-6
        ${className}`}
      {...props}
    >
      {/* Number: circular 64px, white, thin light gray border, dark green number (Figma) */}
      <div className={`flex items-center justify-center shrink-0
    border border-[#d1d1d1] bg-white
    w-12 h-12
    sm:w-14 sm:h-14
    lg:w-16 lg:h-16
    rounded-md sm:rounded-lg lg:rounded-xl
        ${timelineLayout ? 'lg:hidden' : ''}`}>
        <span className="font-din font-medium text-[#1b6936]
    text-base sm:text-lg lg:text-2xl
    leading-none">
          {number}
        </span>
      </div>

      {/* Content: header (single line on desktop) + description */}
      <div className="flex flex-col flex-1 gap-2 items-start justify-center min-h-0 min-w-0
        sm:gap-3
        lg:gap-4">
        <h3 className="font-din font-medium text-[#222222] text-right w-full min-w-0
          text-base leading-snug
          sm:text-lg sm:leading-normal
          lg:text-2xl lg:leading-normal lg:whitespace-nowrap">
          {t(titleKey)}
        </h3>
        <p className="font-din font-normal text-right w-full min-w-0 text-[#595959] whitespace-pre-wrap
          text-sm leading-relaxed
          sm:text-base sm:leading-7
          lg:text-xl lg:leading-[40px]">
          {t(descriptionKey)}
        </p>
      </div>
    </div>
  );
}
