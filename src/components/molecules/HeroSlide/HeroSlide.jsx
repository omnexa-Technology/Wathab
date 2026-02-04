'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';


export function HeroSlide({
  titleKey,
  subtitleKey,
  descriptionKey,
  ctaKey,
  ctaHref = '#',
  className = '',
  ...props
}) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  // English: content starts from LEFT. Arabic: content starts from RIGHT.
  const alignStart = isRTL ? 'items-end' : 'items-start';
  const textAlign = isRTL ? 'text-end' : 'text-start';
  const ctaOrder = isRTL ? 'flex-row-reverse' : 'flex-row';
  const selfAlign = isRTL ? 'self-end' : 'self-start';

  return (
    <div
      className={`flex flex-col absolute top-0 left-0 ${alignStart} ${selfAlign} gap-16 ${className}`}
      {...props}
    >
      <div className={`flex flex-col w-full max-w-[960px] ${alignStart} gap-24`}>
        <div className={`flex flex-col ${alignStart} gap-24 relative self-stretch w-full`}>
          <div className={`flex flex-col ${alignStart} gap-16 relative self-stretch w-full`}>
            <h1 className={`self-stretch text-7xl font-bold text-white ${textAlign}`}>
              {t(titleKey)}
            </h1>

            <h4 className={`w-full max-w-[781px] text-white font-semibold text-4xl  ${textAlign}`}>
              {t(descriptionKey)}
            </h4>
          </div>

          <Link href="#"className={`inline-flex h-auto items-center justify-center gap-4 px-6 py-2.5 bg-[#1b6936] hover:bg-[#1b6936]/90 rounded-[32px] ${ctaOrder}`}>
            <span className="text-2xl font-bold text-white   [font-style:var(--text-20bold-font-style)] whitespace-nowrap">
              {t(ctaKey)}
            </span>
            <ArrowRight className="w-8 h-8 text-white" aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
}
