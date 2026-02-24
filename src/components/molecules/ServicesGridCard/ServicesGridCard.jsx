'use client';

import { useTranslation } from '../../../hooks/useTranslation';
import { useLanguageStore } from '../../../store/useLanguageStore';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export function ServicesGridCard({
  icon: Icon,
  titleKey,
  descriptionKey,
  title,
  description,
  imageUrl,
  className = '',
  ...props
}) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';
  const fromSanity = title != null || description != null;

  const displayTitle = fromSanity ? (title ?? '') : (titleKey ? t(titleKey) : '');
  const displayDescription = fromSanity ? (description ?? '') : (descriptionKey ? t(descriptionKey) : '');

  return (
    <div
      className={`group flex flex-col gap-6 px-6 py-8 rounded-3xl bg-[#E8F0EB] hover:bg-[#1B6936] transition-colors duration-300 ease-out hover:-translate-y-1 hover:shadow-lg motion-reduce:translate-y-0 motion-reduce:shadow-none ${className}`}
      dir={isRTL ? 'rtl' : 'ltr'}
      {...props}
    >
      {/* Icon or Image */}
      <div
        className="flex items-center justify-center w-14 h-14 shrink-0 overflow-hidden rounded-lg text-[#1B6936] group-hover:text-white transition-colors duration-300"
        aria-hidden
      >
        {imageUrl ? (
          <Image src={imageUrl} alt="" width={56} height={56} className="object-cover w-full h-full" />
        ) : (
          Icon && <Icon className="w-10 h-10" strokeWidth={1.5} />
        )}
      </div>

      {/* Title & Description */}
      <div className="flex flex-col gap-4 flex-1">
        <h3 className="font-din font-bold text-xl leading-tight text-start text-[#141414] group-hover:text-white transition-colors duration-300">
          {displayTitle}
        </h3>
        <p className="font-din font-normal text-base leading-[28px] text-start text-[#595959] group-hover:text-[#EAEAEA] transition-colors duration-300">
          {displayDescription}
        </p>
      </div>

      {/* CTA: Request Service Now → WhatsApp */}
      <a
        href="https://wa.me/966561199191"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1B6936] text-white group-hover:bg-white group-hover:text-[#1B6936] font-din font-semibold text-base transition-colors duration-300 w-fit"
      >
        <span>{t('services.requestServiceNow')}</span>
        <ChevronRight className={`w-5 h-5 shrink-0 ${isRTL ? 'rotate-180' : ''}`} aria-hidden />
      </a>
    </div>
  );
}
