'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import { Accordion } from '@/components/ui/accordion';
import { FaqItem } from '@/components/molecules/FaqItem/FaqItem';

/**
 * FaqSection - Frequently Asked Questions section with accordion
 * Atomic Design: Organism/Section
 * @param {Object} props
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element}
 */
export function FaqSection({ className = '', ...props }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const faqsColumn1 = [
    { id: 'faq-1', questionKey: 'faq.items.q1.question', answerKey: 'faq.items.q1.answer' },
    { id: 'faq-2', questionKey: 'faq.items.q2.question', answerKey: 'faq.items.q2.answer' },
    { id: 'faq-3', questionKey: 'faq.items.q3.question', answerKey: 'faq.items.q3.answer' },
    { id: 'faq-4', questionKey: 'faq.items.q4.question', answerKey: 'faq.items.q4.answer' },
    { id: 'faq-5', questionKey: 'faq.items.q5.question', answerKey: 'faq.items.q5.answer' },
  ];

  const faqsColumn2 = [
    { id: 'faq-6', questionKey: 'faq.items.q6.question', answerKey: 'faq.items.q6.answer' },
    { id: 'faq-7', questionKey: 'faq.items.q7.question', answerKey: 'faq.items.q7.answer' },
    { id: 'faq-8', questionKey: 'faq.items.q8.question', answerKey: 'faq.items.q8.answer' },
    { id: 'faq-9', questionKey: 'faq.items.q9.question', answerKey: 'faq.items.q9.answer' },
    { id: 'faq-10', questionKey: 'faq.items.q10.question', answerKey: 'faq.items.q10.answer' },
  ];

  return (
    <section
      className={`flex flex-col gap-10 items-start w-full overflow-x-hidden min-w-0 bg-white
        px-4 py-12
        sm:px-5 sm:py-14 sm:gap-12
        md:px-6 md:py-16 md:gap-14
        lg:gap-24 lg:px-12 lg:py-24
        xl:px-16
        2xl:px-[120px] 2xl:py-24
        ${className}`}
      dir={isRTL ? 'rtl' : 'ltr'}
      {...props}
    >
      <div className="flex flex-col gap-10 w-full max-w-[1680px] mx-auto min-w-0 sm:gap-12 md:gap-14 lg:gap-24">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center justify-center w-full min-w-0 sm:gap-5 md:gap-6 lg:gap-16">
          {/* Section Title + accent (LTR: title left, accent right; RTL: accent right, title left) */}
          <div className="flex flex-row items-center justify-center gap-2 w-full shrink-0 min-w-0 sm:gap-3 lg:gap-4">
            <div className="flex items-center gap-1 h-1.5 shrink-0 sm:h-2 order-2 rtl:order-1" aria-hidden>
              <div className="w-1.5 h-1.5 rounded-full bg-carousel-active sm:w-2 sm:h-2" />
              <div className="w-12 h-1.5 rounded-sm bg-carousel-active sm:w-16 sm:h-2" />
            </div>
            <h2 className="font-din font-medium text-[#0b2c16] text-center min-w-0 order-1 rtl:order-2
              text-2xl leading-tight
              sm:text-3xl
              md:text-4xl md:leading-snug
              lg:text-5xl lg:leading-tight
              xl:text-[64px] xl:leading-[108px]">
              {t('faq.sectionTitle')}
            </h2>
          </div>

          {/* Description */}
          <p className="font-din font-normal text-center text-grey-600 w-full max-w-[1112px] min-w-0
            text-sm leading-relaxed
            sm:text-base sm:leading-7
            md:text-lg md:leading-8
            lg:text-2xl lg:leading-10
            xl:text-[32px] xl:leading-[64px]">
            {t('faq.description')}
          </p>
        </div>

        {/* FAQ Grid: 1 column mobile, 2 columns lg+ */}
        <div className="grid grid-cols-1 gap-4 w-full min-w-0 sm:gap-6 lg:grid-cols-2 lg:gap-8">
          <Accordion type="single" collapsible className="flex flex-col gap-4 sm:gap-6 lg:gap-10 w-full">
            {faqsColumn1.map((faq) => (
              <FaqItem
                key={faq.id}
                id={faq.id}
                questionKey={faq.questionKey}
                answerKey={faq.answerKey}
              />
            ))}
          </Accordion>
          <Accordion type="single" collapsible className="flex flex-col gap-4 sm:gap-6 lg:gap-10 w-full">
            {faqsColumn2.map((faq) => (
              <FaqItem
                key={faq.id}
                id={faq.id}
                questionKey={faq.questionKey}
                answerKey={faq.answerKey}
              />
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
