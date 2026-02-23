'use client';

import { useTranslation } from '../../../hooks/useTranslation';
import { useLanguageStore } from '../../../store/useLanguageStore';
import { ReasonCard } from '../../molecules/ReasonCard/ReasonCard';

/**
 * WhyChooseSection - Displays reasons why customers should choose the company.
 * Mobile: stacked title + cards (number beside each title). Desktop: title column + list of same cards (number beside each title).
 */
export function WhyChooseSection({ className = '', ...props }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const reasonsData = [
    { id: 'compliance', number: '01', titleKey: 'whyChoose.reasons.compliance.title', descriptionKey: 'whyChoose.reasons.compliance.description' },
    { id: 'licensing', number: '02', titleKey: 'whyChoose.reasons.licensing.title', descriptionKey: 'whyChoose.reasons.licensing.description' },
    { id: 'investment', number: '03', titleKey: 'whyChoose.reasons.investment.title', descriptionKey: 'whyChoose.reasons.investment.description' },
    { id: 'expertise', number: '04', titleKey: 'whyChoose.reasons.expertise.title', descriptionKey: 'whyChoose.reasons.expertise.description' },
  ];

  return (
    <section
      className={`flex flex-col w-full overflow-x-hidden min-w-0 bg-white
        px-4 py-12 gap-8
        sm:px-5 sm:py-14 sm:gap-10
        md:px-6 md:py-16 md:gap-12
        lg:flex-row lg:items-start lg:gap-12 lg:px-12 lg:py-24
        xl:gap-16 xl:px-16
        2xl:gap-20 2xl:px-[120px] 2xl:py-24
        ${className}`}
      dir={isRTL ? 'rtl' : 'ltr'}
      {...props}
    >
      {/* Section Title + accent: centered on mobile; on desktop (right in RTL) accent left of title */}
      <div className="  flex flex-col gap-3 items-center w-full shrink-0 min-w-0
  sm:gap-4
  lg:items-end lg:min-w-0
  lg:max-w-[520px] lg:ps-8
  xl:max-w-[640px] xl:ps-10
  2xl:max-w-[720px] 2xl:ps-12">
        <div className="flex flex-row items-center justify-center gap-2 w-full min-w-0 sm:gap-3 lg:justify-end lg:gap-4">
          <div className="flex items-center gap-1 h-1.5 shrink-0 sm:h-2 lg:h-2 order-1 rtl:order-2" aria-hidden>
            <div className="w-1.5 h-1.5 rounded-full bg-[#86ba41] sm:w-2 sm:h-2" />
            <div className="w-12 h-1.5 rounded-sm bg-[#86ba41] sm:w-16 sm:h-2" />
          </div>
          <h2 className="font-din font-medium text-[#0b2c16]
    text-center lg:text-right
     order-2 rtl:order-1
    text-2xl leading-snug
    sm:text-3xl sm:leading-snug
    md:text-4xl md:leading-tight
    lg:text-4xl lg:leading-tight
    xl:text-5xl xl:leading-tight
    2xl:text-[64px] 2xl:leading-[1.2]">
            {t('whyChoose.sectionTitle')}
          </h2>
        </div>
      </div>

      {/* Reasons list: number beside each title + description; desktop: vertical line connects number badges */}
      <div className="relative flex flex-col flex-1 min-h-0 min-w-0 w-full">
        {/* Desktop: vertical gray line connecting number badges (right in RTL, left in LTR) */}
        <div className="hidden lg:block absolute top-8 bottom-8 w-px bg-[#e5e5e5] rtl:right-8 ltr:left-8" aria-hidden />
        <div className="flex flex-col gap-6 min-w-0 w-full sm:gap-8 md:gap-10 lg:gap-14 xl:gap-16 2xl:gap-[72px]">
          {reasonsData.map((reason, index) => (
            <ReasonCard
              key={reason.id}
              number={reason.number}
              titleKey={reason.titleKey}
              descriptionKey={reason.descriptionKey}
              showLine={index < reasonsData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
