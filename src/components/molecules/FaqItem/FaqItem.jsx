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
      className={`bg-white border-2 border-[#eaeaea] rounded-2xl px-6 py-8 ${className}`}
      {...props}
    >
      <AccordionTrigger
        className={`flex items-center justify-between w-full gap-4 hover:no-underline group ${isRTL ? 'flex-row' : 'flex-row-reverse'}`}
      >
        {/* Question Text */}
        <h3 className={`flex-1 font-din font-medium text-2xl leading-[48px] text-[#303030] ${isRTL ? 'text-right' : 'text-left'}`}>
          {t(questionKey)}
        </h3>
        
        {/* Icon - Hidden default chevron, use custom icon */}
        <div className="shrink-0 w-8 h-8 flex items-center justify-center text-[#1b6936] group-hover:opacity-80 transition-opacity [&>svg]:hidden">
          <AccordionIcon className="group-data-[state=open]:rotate-45" />
        </div>
      </AccordionTrigger>

      <AccordionContent className="pt-8">
        <p className={`font-din font-normal text-xl leading-[40px] text-grey-600 ${isRTL ? 'text-right' : 'text-left'}`}>
          {t(answerKey)}
        </p>
      </AccordionContent>
    </AccordionItem>
  );
}
