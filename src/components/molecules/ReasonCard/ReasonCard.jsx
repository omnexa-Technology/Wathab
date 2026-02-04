'use client';

import { useTranslation } from '@/hooks/useTranslation';

/**
 * ReasonCard - Displays a numbered reason with title and description
 * @param {Object} props
 * @param {string} props.number - Reason number (e.g., "01", "02")
 * @param {string} props.titleKey - Translation key for reason title
 * @param {string} props.descriptionKey - Translation key for reason description
 * @param {boolean} [props.showLine=false] - Whether to show connecting line
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element}
 */
export function ReasonCard({
  number,
  titleKey,
  descriptionKey,
  showLine = false,
  className = '',
  ...props
}) {
  const { t } = useTranslation();

  return (
    <div
      className={`flex gap-6 items-start justify-end relative w-full ${className}`}
      {...props}
    >
      {/* Content */}
      <div className="flex flex-col flex-1 gap-8 items-end justify-center min-h-0 min-w-0">
        <h3 className="font-din font-medium text-2xl leading-normal text-center text-[#222222]">
          {t(titleKey)}
        </h3>
        <p className="font-din font-normal text-xl leading-[40px] text-right w-full text-[#595959] whitespace-pre-wrap">
          {t(descriptionKey)}
        </p>
      </div>

      {/* Number Badge */}
      <div className="flex items-center justify-center p-2 bg-[#fdfdfd] border border-[#b6b6b6] rounded-2xl shrink-0 w-16 h-16">
        <span className="font-din font-medium text-2xl leading-normal text-center text-[#1b6936]">
          {number}
        </span>
      </div>

      {/* Connecting Line */}
      {showLine && (
        <div className="absolute left-8 top-[102px] w-0 h-[69px] border-l border-[#e5e5e5]" />
      )}
    </div>
  );
}
