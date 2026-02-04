'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import { ReasonCard } from '@/components/molecules/ReasonCard/ReasonCard';

/**
 * WhyChooseSection - Displays reasons why customers should choose the company
 * @param {Object} props
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element}
 */
export function WhyChooseSection({ className = '', ...props }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const reasonsData = [
    {
      id: 'compliance',
      number: '01',
      titleKey: 'whyChoose.reasons.compliance.title',
      descriptionKey: 'whyChoose.reasons.compliance.description',
    },
    {
      id: 'licensing',
      number: '02',
      titleKey: 'whyChoose.reasons.licensing.title',
      descriptionKey: 'whyChoose.reasons.licensing.description',
    },
    {
      id: 'investment',
      number: '03',
      titleKey: 'whyChoose.reasons.investment.title',
      descriptionKey: 'whyChoose.reasons.investment.description',
    },
    {
      id: 'expertise',
      number: '04',
      titleKey: 'whyChoose.reasons.expertise.title',
      descriptionKey: 'whyChoose.reasons.expertise.description',
    },
  ];

  return (
    <section
      className={`flex gap-16 items-start justify-center px-[120px] py-24 bg-gradient-to-l from-[#fafafa] from-[30.625%] to-white to-[69.375%] w-full ${className}`}
      dir={isRTL ? 'rtl' : 'ltr'}
      {...props}
    >
      {/* Reasons List */}
      <div className="flex flex-col flex-1 gap-12 items-end min-h-0 min-w-0">
        <div className="flex flex-col gap-12 items-start w-full">
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

      {/* Section Title */}
      <div className="flex items-center justify-center gap-4 shrink-0">
        <h2 className="font-din font-medium text-[64px] leading-[108px] text-[#0b2c16] whitespace-nowrap">
          {t('whyChoose.sectionTitle')}
        </h2>
        <div className="flex items-center gap-1 h-2">
          <div className="w-2 h-2 rounded-full bg-[#86ba41]" />
          <div className="w-16 h-2 rounded-sm bg-[#86ba41]" />
        </div>
      </div>
    </section>
  );
}
