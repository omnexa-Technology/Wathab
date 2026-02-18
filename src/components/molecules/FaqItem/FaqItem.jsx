'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { AccordionIcon } from '@/components/atoms/AccordionIcon';

/**
 * FaqItem - Accordion-style FAQ item using shadcn accordion
 * Atomic Design: Molecule
 * @param {Object} props
 * @param {string} props.id - Unique identifier for the accordion item
 * @param {string} props.questionKey - Translation key for question
 * @param {string} props.answerKey - Translation key for answer
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element}
 */
export function FaqItem({
  id,
  questionKey,
  answerKey,
  className = '',
  ...props
}) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  return (
    <AccordionItem
      value={id}
      className={`border-b-0 bg-white border border-[#eaeaea] rounded-xl shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)] overflow-hidden
        px-4 py-5
        sm:px-5 sm:py-6
        lg:rounded-2xl lg:px-6 lg:py-8
        ${className}`}
      {...props}
    >
      <AccordionTrigger
        className={`flex items-center justify-between w-full gap-3 hover:no-underline group min-h-[44px] py-0 touch-manipulation
          sm:gap-4
          ${isRTL ? 'flex-row' : 'flex-row-reverse'}`}
      >
        {/* Question Text */}
        <h3 className={`flex-1 min-w-0 font-din font-medium text-[#303030]
          text-base leading-snug
          sm:text-lg sm:leading-7
          lg:text-2xl lg:leading-[48px]
          ${isRTL ? 'text-right' : 'text-left'}`}>
          {t(questionKey)}
        </h3>

        {/* Icon - touch-friendly, green plus */}
        <div className="shrink-0 min-w-[44px] min-h-[44px] w-11 h-11 flex items-center justify-center text-carousel-active group-hover:opacity-80 transition-opacity [&>svg]:hidden">
          <AccordionIcon className="group-data-[state=open]:rotate-45 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
        </div>
      </AccordionTrigger>

      <AccordionContent className="pt-4 sm:pt-6 lg:pt-8">
        <p className={`font-din font-normal text-grey-600
          text-sm leading-relaxed
          sm:text-base sm:leading-7
          lg:text-xl lg:leading-[40px]
          ${isRTL ? 'text-right' : 'text-left'}`}>
          {t(answerKey)}
        </p>
      </AccordionContent>
    </AccordionItem>
  );
}
