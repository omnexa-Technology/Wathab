'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import { Accordion } from '@/components/ui/accordion';
import { FaqItem } from '@/components/molecules/FaqItem/FaqItem';

/**
 * FullFaqSection - Full FAQ page section with 18 questions in two columns
 * Atomic Design: Organism/Section
 * Follows Figma design: title, intro paragraph, two-column accordion grid
 * @param {Object} props
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element}
 */
export function FullFaqSection({ className = '', ...props }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const faqsColumn1 = [
    { id: 'faq-1', questionKey: 'faq.items.q1.question', answerKey: 'faq.items.q1.answer' },
    { id: 'faq-2', questionKey: 'faq.items.q2.question', answerKey: 'faq.items.q2.answer' },
    { id: 'faq-3', questionKey: 'faq.items.q3.question', answerKey: 'faq.items.q3.answer' },
    { id: 'faq-4', questionKey: 'faq.items.q4.question', answerKey: 'faq.items.q4.answer' },
    { id: 'faq-5', questionKey: 'faq.items.q5.question', answerKey: 'faq.items.q5.answer' },
    { id: 'faq-6', questionKey: 'faq.items.q6.question', answerKey: 'faq.items.q6.answer' },
    { id: 'faq-7', questionKey: 'faq.items.q7.question', answerKey: 'faq.items.q7.answer' },
    { id: 'faq-8', questionKey: 'faq.items.q8.question', answerKey: 'faq.items.q8.answer' },
    { id: 'faq-9', questionKey: 'faq.items.q9.question', answerKey: 'faq.items.q9.answer' },
  ];

  const faqsColumn2 = [
    { id: 'faq-10', questionKey: 'faq.items.q10.question', answerKey: 'faq.items.q10.answer' },
    { id: 'faq-11', questionKey: 'faq.items.q11.question', answerKey: 'faq.items.q11.answer' },
    { id: 'faq-12', questionKey: 'faq.items.q12.question', answerKey: 'faq.items.q12.answer' },
    { id: 'faq-13', questionKey: 'faq.items.q13.question', answerKey: 'faq.items.q13.answer' },
    { id: 'faq-14', questionKey: 'faq.items.q14.question', answerKey: 'faq.items.q14.answer' },
    { id: 'faq-15', questionKey: 'faq.items.q15.question', answerKey: 'faq.items.q15.answer' },
    { id: 'faq-16', questionKey: 'faq.items.q16.question', answerKey: 'faq.items.q16.answer' },
    { id: 'faq-17', questionKey: 'faq.items.q17.question', answerKey: 'faq.items.q17.answer' },
    { id: 'faq-18', questionKey: 'faq.items.q18.question', answerKey: 'faq.items.q18.answer' },
  ];

  const faqItemClassName = 'bg-[#f5f5f5] border-2 border-[#eaeaea] rounded-2xl px-6 py-8 my-2';

  return (
    <section
      className={`flex flex-col gap-24 items-start px-[120px] py-24 bg-white w-full ${className}`}
      dir={isRTL ? 'rtl' : 'ltr'}
      {...props}
    >
      <div className="flex flex-col gap-24 items-start w-full max-w-[1680px] mx-auto">
        {/* Header - Title + Intro */}
        <div className="flex flex-col gap-16 items-center justify-center w-full">
          <h2 className="font-din font-medium text-[64px] leading-[108px] text-[#0b2c16] text-center">
            {t('faq.fullSectionTitle')}
          </h2>
          <p
            className={`font-din font-normal text-[32px] leading-[64px] text-center text-[#303030] w-full max-w-[1112px] ${isRTL ? 'text-right' : 'text-left'}`}
          >
            {t('faq.fullIntro')}
          </p>
        </div>

        {/* FAQ Grid - Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <Accordion type="single" collapsible className="gap-0">
            {faqsColumn1.map((faq) => (
              <FaqItem
                key={faq.id}
                id={faq.id}
                questionKey={faq.questionKey}
                answerKey={faq.answerKey}
                className={faqItemClassName}
              />
            ))}
          </Accordion>
          <Accordion type="single" collapsible className="gap-0">
            {faqsColumn2.map((faq) => (
              <FaqItem
                key={faq.id}
                id={faq.id}
                questionKey={faq.questionKey}
                answerKey={faq.answerKey}
                className={faqItemClassName}
              />
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
