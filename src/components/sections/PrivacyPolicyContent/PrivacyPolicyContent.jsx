'use client';

import { useTranslation } from '../../../hooks/useTranslation';
import { useLanguageStore } from '../../../store/useLanguageStore';

const SECTION_KEYS = [
  'intro',
  'about',
  'dataCollected',
  'howAndWhy',
  'disclosure',
  'protection',
  'rights',
  'contact',
  'updates',
  'lastUpdate',
];

export function PrivacyPolicyContent({ className = '', ...props }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  return (
    <section
      className={`w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-white ${className}`}
      dir={isRTL ? 'rtl' : 'ltr'}
      {...props}
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        {SECTION_KEYS.map((key) => {
          const heading = t(`privacyPolicy.sections.${key}.heading`);
          const body = t(`privacyPolicy.sections.${key}.body`);
          if (!heading) return null;
          return (
            <div key={key} className="flex flex-col gap-4">
              <h2 className="font-din font-bold text-2xl sm:text-3xl text-[#1b6936] text-right">
                {heading}
              </h2>
              <p className="font-din font-normal text-base sm:text-lg text-[#222222] leading-relaxed text-right">
                {body}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
