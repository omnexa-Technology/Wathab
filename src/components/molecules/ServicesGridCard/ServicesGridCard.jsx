'use client';

import { useTranslation } from '../../../hooks/useTranslation';
import { useLanguageStore } from '../../../store/useLanguageStore';
import { Link } from '../../../i18n/routing';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const LIGHT_BG = 'bg-[#e8f0eb]';
const DARK_BG = 'bg-[#1b6936]';

export function ServicesGridCard({
  icon: Icon,
  titleKey,
  descriptionKey,
  title,
  description,
  imageUrl,
  variant = 'light',
  className = '',
  ...props
}) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';
  const isDark = variant === 'dark';
  const fromSanity = title != null || description != null;

  const cardBg = isDark ? DARK_BG : LIGHT_BG;
  const titleColor = isDark ? 'text-white' : 'text-[#222222]';
  const descColor = isDark ? 'text-white/90' : 'text-[#595959]';
  const iconColor = isDark ? 'text-white' : 'text-[#1b6936]';

  const displayTitle = fromSanity ? (title ?? '') : (titleKey ? t(titleKey) : '');
  const displayDescription = fromSanity ? (description ?? '') : (descriptionKey ? t(descriptionKey) : '');

  const content = (
    <>
      {/* Icon or Image */}
      <div className={`flex items-center justify-center w-14 h-14 shrink-0 overflow-hidden rounded-lg ${iconColor}`} aria-hidden>
        {imageUrl ? (
          <Image src={imageUrl} alt="" width={56} height={56} className="object-cover w-full h-full" />
        ) : (
          Icon && <Icon className="w-10 h-10" strokeWidth={1.5} />
        )}
      </div>

      {/* Title & Description */}
      <div className="flex flex-col gap-4 flex-1">
        <h3 className={`font-din font-bold text-xl leading-tight text-start ${titleColor}`}>
          {displayTitle}
        </h3>
        <p className={`font-din font-normal text-base leading-[28px] text-start ${descColor}`}>
          {displayDescription}
        </p>
      </div>

      {/* CTA: Request Service Now */}
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1b6936] text-white font-din font-semibold text-base hover:opacity-90 transition-opacity w-fit"
      >
        <span>{t('services.requestServiceNow')}</span>
        <ChevronRight className={`w-5 h-5 shrink-0 ${isRTL ? 'rotate-180' : ''}`} aria-hidden />
      </Link>
    </>
  );

  const cardClassName = `flex flex-col gap-6 px-6 py-8 rounded-3xl ${cardBg} transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-lg motion-reduce:translate-y-0 motion-reduce:shadow-none ${className}`;

  return (
    <div className={cardClassName} dir={isRTL ? 'rtl' : 'ltr'} {...props}>
      {content}
    </div>
  );
}
