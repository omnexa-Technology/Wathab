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
    {
      id: 'faq-1',
      questionKey: 'faq.items.q1.question',
      answerKey: 'faq.items.q1.answer',
    },
    {
      id: 'faq-2',
      questionKey: 'faq.items.q2.question',
      answerKey: 'faq.items.q2.answer',
    },
    {
      id: 'faq-3',
      questionKey: 'faq.items.q3.question',
      answerKey: 'faq.items.q3.answer',
    },
    {
      id: 'faq-4',
      questionKey: 'faq.items.q4.question',
      answerKey: 'faq.items.q4.answer',
    },
    {
      id: 'faq-5',
      questionKey: 'faq.items.q5.question',
      answerKey: 'faq.items.q5.answer',
    },
  ];

  const faqsColumn2 = [
    {
      id: 'faq-6',
      questionKey: 'faq.items.q6.question',
      answerKey: 'faq.items.q6.answer',
    },
    {
      id: 'faq-7',
      questionKey: 'faq.items.q7.question',
      answerKey: 'faq.items.q7.answer',
    },
    {
      id: 'faq-8',
      questionKey: 'faq.items.q8.question',
      answerKey: 'faq.items.q8.answer',
    },
    {
      id: 'faq-9',
      questionKey: 'faq.items.q9.question',
      answerKey: 'faq.items.q9.answer',
    },
    {
      id: 'faq-10',
      questionKey: 'faq.items.q10.question',
      answerKey: 'faq.items.q10.answer',
    },
  ];

  return (
    <section
      className={`flex flex-col gap-24 items-start px-[120px] py-24 bg-white w-full ${className}`}
      dir={isRTL ? 'rtl' : 'ltr'}
      {...props}
    >
      <div className="flex flex-col gap-24 items-start w-full max-w-[1680px] mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-16 items-center justify-center w-full">
          {/* Section Title */}
          <div className="flex items-center gap-4">
            <h2 className="font-din font-medium text-[64px] leading-[108px] text-[#0b2c16]">
              {t('faq.sectionTitle')}
            </h2>
            <div className="flex items-center gap-1 h-2">
              <div className="w-2 h-2 rounded-full bg-carousel-active" />
              <div className="w-16 h-2 rounded-sm bg-carousel-active" />
            </div>
          </div>

          {/* Description */}
          <p className="font-din font-normal text-[32px] leading-[64px] text-center text-grey-600 w-full max-w-[1112px]">
            {t('faq.description')}
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-2 gap-8 w-full">
          {/* Column 1 */}
          <Accordion type="single" collapsible className=" gap-10 items-start">
            {faqsColumn1.map((faq) => (
              <FaqItem
                key={faq.id}
                id={faq.id}
                questionKey={faq.questionKey}
                answerKey={faq.answerKey}
                className='my-2'
              />
            ))}
          </Accordion>
          {/* Column 2 */}
          <Accordion type="single" collapsible className=" gap-10 items-start">
            {faqsColumn2.map((faq) => (
              <FaqItem
                key={faq.id}
                id={faq.id}
                questionKey={faq.questionKey}
                answerKey={faq.answerKey}
                className='my-2'
              />
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
