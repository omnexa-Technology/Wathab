'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

/**
 * FaqItem - Accordion-style FAQ item
 * @param {Object} props
 * @param {string} props.questionKey - Translation key for question
 * @param {string} props.answerKey - Translation key for answer
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element}
 */
export function FaqItem({
  questionKey,
  answerKey,
  className = '',
  ...props
}) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`flex flex-col gap-8 items-start justify-center px-6 py-8 bg-white border-2 border-[#eaeaea] rounded-2xl ${className}`}
      {...props}
    >
      <div className="flex items-center justify-between w-full">
        {/* Expand Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-8 h-8 flex items-center justify-center text-[#1b6936] hover:opacity-80 transition-opacity shrink-0"
          aria-label={isOpen ? 'Collapse' : 'Expand'}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
          >
            <path
              d="M16 8V24M8 16H24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Question */}
        <div className="flex flex-col flex-1 gap-10 items-end min-h-0 min-w-0">
          <h3 className="font-din font-medium text-2xl leading-normal text-right text-[#303030] whitespace-nowrap">
            {t(questionKey)}
          </h3>
        </div>
      </div>

      {/* Answer (shown when expanded) */}
      {isOpen && (
        <p className="font-din font-normal text-xl leading-[40px] text-right text-[#595959] w-full animate-in fade-in slide-in-from-top-2 duration-200">
          {t(answerKey)}
        </p>
      )}
    </div>
  );
}
