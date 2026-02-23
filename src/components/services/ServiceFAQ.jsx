'use client';

import { useLanguageStore } from '../../store/useLanguageStore';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../ui/accordion';
import { AccordionIcon } from '../atoms/AccordionIcon';

/**
 * ServiceFAQItem — single FAQ item using direct question/answer strings (not translation keys).
 */
function ServiceFAQItem({ id, question, answer, isRTL }) {
  return (
    <AccordionItem
      value={id}
      className="border-b-0 bg-white border border-[#eaeaea] rounded-xl shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)] overflow-hidden px-4 py-5 sm:px-5 sm:py-6 lg:rounded-2xl lg:px-6 lg:py-8"
    >
      <AccordionTrigger
        className={`flex items-center justify-between w-full gap-3 hover:no-underline group min-h-[44px] py-0 touch-manipulation sm:gap-4 ${isRTL ? 'flex-row' : 'flex-row-reverse'}`}
      >
        <h3 className={`flex-1 min-w-0 font-din font-medium text-[#303030] text-base leading-snug sm:text-lg sm:leading-7 lg:text-2xl lg:leading-[48px] ${isRTL ? 'text-right' : 'text-left'}`}>
          {question}
        </h3>
        <div className="shrink-0 min-w-[44px] min-h-[44px] w-11 h-11 flex items-center justify-center text-[#1B6936] group-hover:opacity-80 transition-opacity [&>svg]:hidden">
          <AccordionIcon className="group-data-[state=open]:rotate-45 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
        </div>
      </AccordionTrigger>
      <AccordionContent className="pt-4 sm:pt-6 lg:pt-8">
        <p className={`font-din font-normal text-grey-600 text-sm leading-relaxed sm:text-base sm:leading-7 lg:text-xl lg:leading-[40px] ${isRTL ? 'text-right' : 'text-left'}`}>
          {answer}
        </p>
      </AccordionContent>
    </AccordionItem>
  );
}

/**
 * ServiceFAQ — accordion FAQ section driven by Sanity data (not translation keys).
 * Client component (needs useLanguageStore for RTL detection).
 */
export function ServiceFAQ({ items, faqTitle, faqDescription }) {
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  return (
    <div
      className="flex flex-col gap-8 w-full overflow-x-hidden min-w-0"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Section header */}
      {(faqTitle || faqDescription) && (
        <div className="flex flex-col gap-3">
          {faqTitle && (
            <div className="flex flex-row items-center gap-3">
              <div className="flex items-center gap-1 h-1.5 shrink-0" aria-hidden>
                <div className="w-1.5 h-1.5 rounded-full bg-[#1B6936]" />
                <div className="w-10 h-1.5 rounded-sm bg-[#1B6936]" />
              </div>
              <h2 className="font-din font-bold text-[#0b2c16] text-xl leading-snug sm:text-2xl lg:text-3xl">
                {faqTitle}
              </h2>
            </div>
          )}
          {faqDescription && (
            <p className="font-din font-normal text-grey-600 text-sm leading-relaxed sm:text-base sm:leading-7">
              {faqDescription}
            </p>
          )}
        </div>
      )}

      {/* Single-column accordion */}
      <Accordion type="single" collapsible className="flex flex-col gap-3 w-full">
        {items.map((faq, i) => (
          <ServiceFAQItem
            key={`faq-${i}`}
            id={`faq-${i}`}
            question={faq.question}
            answer={faq.answer}
            isRTL={isRTL}
          />
        ))}
      </Accordion>
    </div>
  );
}
