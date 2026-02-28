'use client';

import Image from 'next/image';
import { useLanguageStore } from '../../../store/useLanguageStore';

/**
 * ArticleGridCard - Article card with image and content, responsive per Figma (mobile: stacked, desktop: side-by-side).
 * Mobile: image 280px height, 20px title, 16px labels, 14px body. Desktop: 780×580 image, 30px title, 24px text.
 */
export function ArticleGridCard({
  imageSrc,
  iconSrc,
  title,
  project,
  achievement,
  projectLabel,
  achievementLabel,
  imageLeft = true,
  className = '',
}) {
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';
  const imageOrder = imageLeft ? 'order-1 lg:order-2' : 'order-1 lg:order-1';
  const contentOrder = imageLeft ? 'order-2 lg:order-1' : 'order-2 lg:order-2';
  const alignClass = isRTL ? 'items-end' : 'items-start';

  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full ${className}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* DOM order: image then content so mobile always has image on top; desktop order via order classes */}
      <div className={`w-full lg:w-auto ${imageOrder}`}>
        <div className="relative w-full h-[280px] lg:h-[580px] lg:w-[780px] rounded-2xl lg:rounded-3xl overflow-hidden shrink-0 bg-gray-200">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 780px"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>
      <div className={`w-full min-w-0 ${contentOrder}`}>
        <div className={`flex flex-col gap-1 flex-1 min-w-0 w-full ${alignClass}`}>
          {/* Icon + Title block: Figma gap-6 (24px) between icon and title */}
          <div className={`flex items-start flex-col gap-4 lg:gap-8 w-full ${alignClass}`}>
            {iconSrc && (
              <div className="flex items-center justify-center bg-[#e8f0eb] rounded-full w-12 h-12 shrink-0">
                <div className="relative w-8 h-8">
                  <Image src={iconSrc} alt="" fill className="object-contain" />
                </div>
              </div>
            )}
            <h3 className="font-din font-bold text-xl leading-8 lg:text-[30px] lg:leading-[80px] text-[#1b6936] text-right w-full">
              {title}
            </h3>
          </div>

          {/* Project: Figma 16px bold label, 14px body on mobile; 24px on desktop */}
          <div className="flex flex-col gap-6 lg:gap-8 w-full">
            <h4 className="font-din font-medium text-base leading-7 lg:text-2xl lg:leading-[48px] text-[#141414] text-right">
              {projectLabel}
            </h4>
            <p className="font-din font-normal text-sm leading-7 lg:text-2xl lg:leading-[48px] text-grey-600 text-right">
              {project}
            </p>
          </div>

          {/* Achievement */}
          <div className="flex flex-col gap-6 lg:gap-8 w-full">
            <h4 className="font-din font-medium text-base leading-7 lg:text-2xl lg:leading-[48px] text-[#141414] text-right">
              {achievementLabel}
            </h4>
            <p className="font-din font-normal text-sm leading-7 lg:text-2xl lg:leading-[48px] text-grey-600 text-right">
              {achievement}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
